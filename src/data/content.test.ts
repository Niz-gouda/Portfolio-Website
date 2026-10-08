import { describe, expect, it } from 'vitest';
import * as content from './content';

const text = JSON.stringify(content);

describe('content invariants', () => {
  it('has no em dashes', () => {
    expect(text.includes(String.fromCharCode(0x2014))).toBe(false);
  });

  it('exposes no phone number or personal email', () => {
    expect(text).not.toMatch(/@gmail\.|@yahoo\.|@outlook\./i);
    expect(text).not.toMatch(/\+?\d[\d\s-]{9,}\d/);
  });

  it('omits skills the owner does not claim', () => {
    for (const banned of ['Kubernetes', 'PyTorch', 'TensorFlow', 'HuggingFace', 'Databricks', 'Snowflake', 'Verilog', 'C++', 'LangChain']) {
      expect(text).not.toContain(banned);
    }
  });

  it('keeps unconfirmed claims out', () => {
    for (const unconfirmed of ['Allied', '85%', '60%', 'Co-Founder', 'State Level', '45 of', 'top 2%']) {
      expect(text).not.toContain(unconfirmed);
    }
  });

  it('uses https for every external link', () => {
    const links = [
      ...Object.values(content.person.links),
      ...content.projects.flatMap((p) => p.links.map((l) => l.href)),
      ...content.certificates.map((c) => c.href).filter(Boolean),
    ];
    for (const href of links) expect(href.startsWith('https://')).toBe(true);
  });

  it('leaves exactly one certificate without a link', () => {
    expect(content.certificates.filter((c) => !c.href)).toHaveLength(1);
  });
});
