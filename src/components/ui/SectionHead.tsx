import type { ReactNode } from 'react';

export function SectionHead({ id, eyebrow, title, lead }: { id: string; eyebrow: string; title: string; lead?: ReactNode }) {
  return (
    <header>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2" id={id}>
        {title}
      </h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </header>
  );
}
