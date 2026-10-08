/**
 * Single source of truth for every word on the site. Components render from this file, so editing a fact means
 * editing one place. Rules (enforced by content.test.ts): no em dashes, no phone number or personal email, no
 * skills the brief excludes, and every external link is https.
 *
 * Provenance: facts come from the owner's brief. Where reality moved past the brief (the RAG project now has a
 * live demo, UI, rate limits and a Docker deployment) the entry follows what was verified directly. The LiteLLM
 * entry follows the public pull request list: one open PR, nothing merged.
 */

export interface ExternalLink {
  label: string;
  href: string;
}

export const person = {
  name: 'Nischalgouda Patil',
  shortName: 'Nischal',
  location: 'Bengaluru, India',
  headline: 'AI-focused software engineer.',
  lead: 'I build production LLM and RAG systems: retrieval you can measure, guardrails that refuse to guess, and the backend that keeps them running.',
  links: {
    github: 'https://github.com/nischalgouda',
    linkedin: 'https://linkedin.com/in/nischalgouda-patil-39b439279',
    leetcode: 'https://leetcode.com/u/Nischalgouda2',
    portfolio: 'https://nischal-portfolio-psi.vercel.app/',
  },
} as const;

/** Three verifiable facts shown in the hero panel, each with a link a recruiter can follow. */
export const proof = [
  {
    label: 'Shipped',
    value: 'A live RAG system on Azure',
    detail: 'Open source. Hybrid retrieval, evals, rate limits.',
    href: 'https://rag-xray.agreeablesky-d286d090.centralus.azurecontainerapps.io',
  },
  {
    label: 'Ranked',
    value: '45 of about 2,500',
    detail: 'HackerRank Orchestrate hackathon, top 2%.',
    href: 'https://github.com/Nischalgouda/affordra',
  },
  {
    label: 'Production',
    value: 'Multi-tenant SaaS',
    detail: '8-container stack, JWT and RBAC, Prometheus and Grafana.',
    href: '#experience',
  },
] as const;

export const about = {
  lead: 'I like turning AI from a demo into something that runs reliably.',
  paragraphs: [
    'I started in frontend (React), moved full-stack (C# and ASP.NET Core, PostgreSQL, Docker), and now build LLM systems: RAG APIs, evals, guardrails and pipeline tools.',
    'I lead by shipping, and I pick up the unglamorous parts (auth, retries, logging, cost) that make a system production-ready. Next I am going deeper on distributed-systems design: caching, queues, auth and observability.',
  ],
  path: [
    { stage: 'Stage 1', title: 'Frontend engineer', line1: 'React · TypeScript · D3.js', line2: 'hooks · state management' },
    { stage: 'Stage 2', title: 'Full-stack engineer', line1: 'C# · ASP.NET Core · PostgreSQL', line2: 'Docker · JWT and RBAC' },
    { stage: 'Stage 3', title: 'AI engineer', line1: 'RAG · evals · guardrails', line2: 'LLM pipelines · Azure', current: true },
  ],
  strengths: [
    { title: 'Idea to running system', body: 'End to end, from API to UI to deployment.' },
    { title: 'Reliability details others skip', body: 'Retries and backoff, refusal guardrails, usage and cost logging, evals before claims.' },
    { title: 'Knowing where an LLM does not belong', body: 'Money math and fixed-topic routing belong in deterministic code.' },
    { title: 'Measure, then decide', body: 'Thresholds and retrieval quality are calibrated from data, not guessed.' },
    { title: 'Initiative', body: 'Built the HR chatbot unasked, and introduced AI coding tools org-wide through hands-on demos.' },
    { title: 'Communication and mentoring', body: 'Explains trade-offs plainly. Mentored interns across several projects.' },
  ],
  facts: [
    { label: 'Experience', value: 'About 1.7 years professional, plus open-source and project work since' },
    { label: 'Education', value: 'BE Information Science, KLS Gogte Institute of Technology, Belagavi (2021 to 2025, CGPA 7.5)' },
    { label: 'Based in', value: 'Bengaluru, India' },
  ],
} as const;

export interface Project {
  id: string;
  name: string;
  kicker: string;
  pitch: string;
  bullets: readonly string[];
  stack: readonly string[];
  links: readonly ExternalLink[];
  limits: string;
  process?: string;
}

export const projects: readonly Project[] = [
  {
    id: 'rag',
    name: 'RAG X-ray',
    kicker: 'Azure RAG API · Oct 2026',
    pitch:
      'A retrieval system that answers only from your documents, cites its sources, and refuses to answer when retrieval is weak, without calling the model. The UI shows every chunk scored against the question, the refusal threshold, and whether the model was called at all.',
    bullets: [
      'Hybrid retrieval (vector plus BM25, fused with Reciprocal Rank Fusion) on Azure AI Search. I built a numpy and BM25 backend first, to see what the managed service abstracts.',
      'The refusal threshold is calibrated per embedding model: 0.23 on Azure, 0.52 on local bge-small. My first guess, 0.35, failed the refusal check, which is how the eval caught it.',
      'A 15-question eval harness: hit@3 12/12, hybrid hit@1 11/12, off-topic refusals 3/3 on a 4-document corpus. Directional, not a benchmark.',
      'Live on Azure Container Apps with per-visitor rate limits, a daily token budget and a kill switch. 76 backend and 62 frontend tests.',
    ],
    stack: ['Python 3.11', 'FastAPI', 'Azure OpenAI', 'Azure AI Search', 'React', 'TypeScript', 'Zustand', 'Docker'],
    links: [
      { label: 'Live demo', href: 'https://rag-xray.agreeablesky-d286d090.centralus.azurecontainerapps.io' },
      { label: 'Code', href: 'https://github.com/Nischalgouda/rag-with-azure-openai' },
    ],
    limits:
      'No managed identity or Entra ID yet, no streaming or conversation memory, a single replica with in-memory rate limits, and no load testing.',
    process:
      'Built with Claude Code as a pair programmer. I made the decisions, debugged the Azure setup and calibrated the guardrail.',
  },
  {
    id: 'flowforge',
    name: 'FlowForge',
    kicker: 'Visual LLM pipeline builder',
    pitch:
      'Drag nodes onto a canvas, wire them together and run the graph against real LLMs. It started as a frontend take-home and grew an execution engine, real model calls, streaming, tests, CI and deployment.',
    bullets: [
      'The backend validates the graph as a DAG and runs it in topological order with Kahn\'s algorithm: cycle detection in one pass, O(V+E). Per-node results stream over Server-Sent Events.',
      'Retry with exponential backoff on 429 and 503, bring-your-own-key plus a rate-limited demo key, and 11 backend tests.',
      'Nine node types, four fully executed (Input, Text, LLM, Output). The other five are UI-only.',
      'The launch post reached about 5k impressions, with comments from engineering and AI leads.',
    ],
    stack: ['React 18', 'ReactFlow', 'Zustand', 'Tailwind', 'FastAPI', 'Pydantic', 'httpx', 'pytest', 'Docker', 'GitHub Actions'],
    links: [
      { label: 'Live', href: 'https://flow-forge-liard.vercel.app' },
      { label: 'Code', href: 'https://github.com/Nischalgouda/FlowForge' },
    ],
    limits:
      'No persistence, an in-memory rate limiter and sequential execution. Planned: parallel branches, resume from a failed node, an eval gate node and per-node cost tracking.',
  },
  {
    id: 'affordra',
    name: 'Affordra',
    kicker: 'HackerRank Orchestrate · rank 45 of about 2,500 (top 2%)',
    pitch:
      'A financial decision agent that answers "can I afford this?". Gemini Vision reads 16 receipt images, and all arithmetic runs in deterministic Python, so the model never does the math.',
    bullets: [
      'A 90-day cash-flow simulation with an essential versus discretionary split lifted affordability-status accuracy from 28% to 72%.',
      'A binary-search payment solver and multi-currency support over 25,000+ events (USD, EUR, INR, IDR, ZAR). An idempotent image-result cache makes repeat runs cost $0.',
      'Results: 80% payment-method accuracy, 72% affordability-status accuracy, 250 requests in about 9.5 s. CI runs flake8 and 10 pytest tests.',
    ],
    stack: ['Python', 'Gemini Vision', 'pytest', 'flake8', 'GitHub Actions'],
    links: [{ label: 'Code', href: 'https://github.com/Nischalgouda/affordra' }],
    limits: 'A hackathon build over the challenge\'s own receipts and cash-flow events.',
  },
  {
    id: 'litellm',
    name: 'LiteLLM',
    kicker: 'Open source · BerriAI/litellm',
    pitch:
      'A pull request to LiteLLM, a production Python LLM gateway: a ParallelRequestLimiter hook that manages rate limits for proxy requests.',
    bullets: [
      'Open pull request #40727: 87 lines added and 3 removed across 3 files, opened September 2026.',
      'Rate limiting is a recurring thread in my own projects: per-visitor limits, token budgets and backoff.',
    ],
    stack: ['Python', 'LiteLLM proxy', 'Rate limiting'],
    links: [
      { label: 'Pull request', href: 'https://github.com/BerriAI/litellm/pull/40727' },
      { label: 'Fork', href: 'https://github.com/Nischalgouda/litellm' },
    ],
    limits: 'Not merged yet.',
  },
];

export const smallerWork: readonly { name: string; detail: string }[] = [
  { name: 'VectorShift frontend assessment', detail: 'React node abstraction, Tailwind, FastAPI DAG validation' },
  { name: 'Desktop voice assistant', detail: 'Python, NLP' },
  { name: 'Email Administration application', detail: 'Java, OOP, design patterns' },
  { name: 'EdTech platform modernisation', detail: 'Frontend migration work' },
];

export interface Role {
  title: string;
  period: string;
  note?: string;
}

export const experience = {
  company: 'ZiniosEdge Software Technologies',
  location: 'Bengaluru',
  summary:
    'Started on the frontend (React, hooks, D3.js, state management), moved into full-stack, then owned features end to end on the company\'s internal platform. All backend work was C# and ASP.NET Core.',
  roles: [
    { title: 'Associate Software Engineer', period: 'Oct 2025 to Aug 2026' },
    { title: 'Software Developer Intern', period: 'Feb 2025 to Sep 2025', note: 'Converted to a full-time role (PPO).' },
  ] satisfies readonly Role[],
  work: [
    {
      id: 'portal',
      title: 'Invoice and HR Portal',
      kicker: 'Production multi-tenant SaaS',
      body: 'Invoices, purchase orders, clients, offer letters (revision and approval workflow), HR compliance (BGV, designation changes, consulting agreements) and IT asset tracking.',
      bullets: [
        '8-container Docker Compose stack: Nginx (reverse proxy, SSL), React SPA, ASP.NET Core 9 API, PostgreSQL 17, Prometheus, Grafana, cAdvisor, node_exporter.',
        'Backend: .NET 9, EF Core 9 with Npgsql, ASP.NET Core Identity, JWT auth, custom RBAC (permission policies and handlers), SignalR notifications, QuestPDF and ClosedXML for PDF and Excel, Azure Blob Storage, prometheus-net metrics, Swagger, repository pattern, full audit logging.',
        'Frontend: React 19, TypeScript, Vite 6, React Router 7, Axios with a JWT interceptor, Chart.js dashboards, client-side PDF export.',
        'Observability: Prometheus scraping every 15 s, with Grafana dashboards.',
      ],
      stack: ['ASP.NET Core 9', 'PostgreSQL 17', 'React 19', 'Docker Compose', 'Nginx', 'SignalR', 'Prometheus', 'Grafana'],
    },
    {
      id: 'chatbot',
      title: 'AI chatbot for the internal HR portal',
      kicker: 'My first production AI system at the company',
      body: 'Built proactively, with no mandate, anticipating support load at scale. C# backend and React frontend.',
      bullets: [
        'Intent routing by keyword hashmap dispatch (for example offer-letter context, or a trigger that generates a knowledge-transfer PDF).',
        'An OpenRouter integration with a free-model fallback chain brought LLM cost to $0 (estimated).',
        'Keyword routing is not RAG. I chose it because the topic set was fixed.',
      ],
      stack: ['C#', 'React', 'OpenRouter'],
    },
    {
      id: 'other',
      title: 'Beyond the two big builds',
      kicker: 'Team and tooling',
      body: 'Smaller deliveries and the work around the code.',
      bullets: [
        'Letter Management Portal for 100+ users.',
        'Led internal AI tooling adoption: introduced Kiro, then Cursor and Claude Code, through hands-on demos, and adoption spread across the org.',
        'Mentored interns across multiple projects with a co-mentor.',
      ],
      stack: ['Kiro', 'Cursor', 'Claude Code'],
    },
  ],
  notes: [
    {
      title: 'The token from the wrong environment',
      body: 'I found that a production endpoint accepted a token issued for another environment. I escalated it to the senior engineer, and we added an environment check so every request validates that the user belongs to that environment\'s database, not just that the signature is valid.',
    },
    {
      title: 'Money math is not for an LLM',
      body: 'I fixed a rounding bug in a prorated CTC calculation. The lesson stuck: money math belongs in deterministic code, which is also why Affordra\'s arithmetic never touches the model.',
    },
  ],
} as const;

export interface SkillTier {
  id: string;
  title: string;
  caption: string;
  items: readonly string[];
}

export const skills: readonly SkillTier[] = [
  {
    id: 'production',
    title: 'In production',
    caption: 'Used in the ZiniosEdge portal',
    items: ['React', 'TypeScript', 'C# and ASP.NET Core', 'REST API design', 'JWT and RBAC', 'PostgreSQL and EF Core', 'Docker and Compose', 'Nginx', 'SignalR', 'Prometheus and Grafana'],
  },
  {
    id: 'shipped',
    title: 'Shipped in projects',
    caption: 'Built and deployed, not run at scale',
    items: ['Python and FastAPI', 'Azure OpenAI', 'Azure AI Search', 'RAG: chunking, embeddings, hybrid search, RRF, guardrails, evals', 'SSE streaming', 'pytest', 'GitHub Actions CI', 'Azure Container Apps', 'OpenAI, OpenRouter, Gemini and Claude APIs', 'Zustand and ReactFlow'],
  },
  {
    id: 'deeper',
    title: 'Going deeper',
    caption: 'Where I am investing next',
    items: ['System design: caching, queues, auth, observability', 'SQL', 'RAG evaluation and monitoring'],
  },
];

export const tools = ['Claude Code', 'Cursor', 'Codex', 'Kiro', 'Git and GitHub', 'Swagger'] as const;

export interface Certificate {
  id: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  /** Empty means no public credential link yet; the card renders without a link. */
  href: string;
}

export const certificates: readonly Certificate[] = [
  {
    id: 'hackerrank-software-engineer',
    image: '/certificates/hackerrank-software engineer.png',
    width: 1600,
    height: 1200,
    alt: 'HackerRank Software Engineer certificate for Nischalgouda Patil',
    href: 'https://www.hackerrank.com/certificates/7e5332333cd7',
  },
  {
    id: 'hackerrank-rest-api',
    image: '/certificates/hackerrank-rest-api.png',
    width: 1600,
    height: 1200,
    alt: 'HackerRank REST API (Intermediate) certificate for Nischalgouda Patil',
    href: 'https://www.hackerrank.com/certificates/BEFCD830BDC3',
  },
  {
    id: 'nptel-dsa-java',
    image: '/certificates/NPTEL DSA w JAVA.png',
    width: 1063,
    height: 761,
    alt: 'NPTEL Data Structures and Algorithms with Java (Elite) certificate, IIT, 2024',
    href: 'https://drive.google.com/file/d/16oecJsOpT74NuAAtRnoRgKPp1O62wiTg/view?usp=sharing',
  },
  {
    id: 'hackerrank-orchestrate',
    image: '/certificates/HackerrankHackathonSEP.png',
    width: 1440,
    height: 980,
    alt: 'HackerRank Orchestrate hackathon certificate',
    // TODO(owner): paste the Google Drive link for this certificate here.
    href: '',
  },
];

export const achievements = {
  assessments: [
    { title: 'Rank 45 of about 2,500 (top 2%)', body: 'HackerRank Orchestrate hackathon, with Affordra.' },
    { title: 'Google Apprenticeship online assessment', body: '50/50 on both problems (Sep 2026).' },
    { title: 'HackerRank Forward Deployed Engineer assessment', body: 'Passed all three sections: DSA, REST API and SQL.' },
    { title: 'LeetCode: 200+ problems', body: 'Recent focus on arrays, hashing, two pointers, stacks and trees.' },
  ],
  leadership: [
    {
      title: 'Rotaract Club of Belgaum Yuva Darpan (District 3170)',
      body: 'President, RY 2025 to 26. Produced a 20-page annual performance report across all seven service avenues, and organised large events including marathons with 400+ participants and city-wide treasure hunts.',
    },
    { title: 'ACM chapter, PR Head', body: 'Community participation up 40%.' },
    { title: 'Changemakers, Director', body: '25% fewer operational meetings.' },
    { title: 'Music Club', body: 'Coordinator and guitar instructor.' },
    { title: 'Debate and stage', body: 'National Debate Winner (2022). Battle of Bands Winner (2024).' },
  ],
} as const;

export type MotifId = 'strings' | 'checks' | 'posture' | 'roles' | 'types' | 'wave' | 'toggle' | 'islands' | 'swatches';

export interface Principle {
  id: MotifId;
  title: string;
  body: string;
  ref: string;
}

/** Engineering instincts, each tied to something that was actually measured or built. The reference is a quiet footnote. */
export const principles: readonly Principle[] = [
  { id: 'strings', title: 'Scales before solos.', body: 'Fundamentals are what let you improvise under pressure, so I drill algorithms and system design on purpose.', ref: 'Guitar since eighth grade, now studying music theory' },
  { id: 'checks', title: 'Check the bike before the ride.', body: 'Health checks, tests and guardrails come before anything ships.', ref: 'Honda H\'Ness CB350' },
  { id: 'posture', title: 'Posture, not health, decides the fight.', body: 'Latency is the same: it is rarely the number you were watching. Traced RAG requests that took 7 to 9 seconds now take about 1 to 2 for refusals and 3 to 5 for answers, once I fixed the real cause.', ref: 'Sekiro: Shadows Die Twice' },
  { id: 'roles', title: 'Team composition wins.', body: 'No service carries alone. Each has one clear role, like the eight containers behind a production portal.', ref: 'Marvel Rivals' },
  { id: 'types', title: 'Type matchups are tool choice.', body: 'Hybrid search is a dual-type move: vector search catches meaning, keyword search catches exact terms, and I fuse the two rankings.', ref: 'Pokémon' },
  { id: 'wave', title: 'Dive in, keep a rollback.', body: 'Ship boldly, behind a kill switch and a last-known-good revision.', ref: 'Grand Blue' },
  { id: 'toggle', title: 'A club runs on rules.', body: 'My public demo has per-visitor rate limits, admin-only keys, a daily token budget and a kill switch.', ref: 'Sons of Anarchy' },
  { id: 'islands', title: 'Sail to the next island.', body: 'Big goals ship as small, finished milestones: an API, then a UI, then a hosted demo.', ref: 'One Piece' },
  { id: 'swatches', title: 'Fit and finish.', body: 'I care about spacing, type and tokens the way a tailor cares about the hem. Details are the product.', ref: 'Fashion' },
];

export const contact = {
  heading: 'Let\'s talk.',
  body: 'I am happy to talk about retrieval, evals and building LLM systems that hold up. LinkedIn is the fastest way to reach me.',
} as const;
