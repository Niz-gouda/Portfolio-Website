import type { MotifId } from '../../data/content';

/** Small decorative diagrams, one per principle. Purely visual, hidden from assistive tech. */
export function Motif({ id }: { id: MotifId }) {
  const s = { stroke: 'var(--text-dim)', strokeWidth: 1.5, fill: 'none' } as const;
  const above = 'var(--mark-above)';
  const below = 'var(--mark-below)';
  let body;
  switch (id) {
    case 'strings':
      body = [8, 16, 24, 32, 40, 48].map((y, i) => <line key={y} x1="4" x2="116" y1={y} y2={y} {...s} strokeWidth={1 + i * 0.25} />);
      break;
    case 'checks':
      body = [20, 52, 84].map((x, i) => (
        <g key={x}>
          <circle cx={x + 8} cy="28" r="10" {...s} />
          <path d={`M${x + 3} 28l4 4 8-8`} stroke={i === 2 ? below : above} strokeWidth="2" fill="none" />
        </g>
      ));
      break;
    case 'posture':
      body = (
        <>
          <rect x="6" y="14" width="108" height="8" {...s} />
          <rect x="6" y="14" width="40" height="8" fill={above} />
          <rect x="6" y="34" width="108" height="8" {...s} />
          <rect x="6" y="34" width="78" height="8" fill={below} />
        </>
      );
      break;
    case 'roles':
      body = [16, 46, 76, 100].map((x, i) => <rect key={x} x={x} y={10 + (i % 2) * 8} width="14" height={36 - (i % 2) * 8} {...s} />);
      break;
    case 'types':
      body = (
        <>
          <circle cx="46" cy="28" r="18" {...s} stroke={above} />
          <circle cx="74" cy="28" r="18" {...s} stroke={below} />
        </>
      );
      break;
    case 'wave':
      body = <path d="M4 30 Q19 10 34 30 T64 30 T94 30 T124 30" {...s} stroke={above} />;
      break;
    case 'toggle':
      body = (
        <>
          <rect x="10" y="16" width="44" height="24" rx="12" {...s} />
          <circle cx="42" cy="28" r="8" fill={below} />
          <rect x="66" y="16" width="44" height="24" rx="12" {...s} />
          <circle cx="78" cy="28" r="8" fill="var(--text-dim)" />
        </>
      );
      break;
    case 'islands':
      body = [14, 54, 98].map((x, i) => <path key={x} d={`M${x} 40h22l-4-${8 + i * 3}h-14z`} {...s} />);
      break;
    case 'swatches':
      body = [10, 34, 58, 82].map((x, i) => <rect key={x} x={x} y="12" width="20" height="32" fill={i === 0 ? 'var(--ink)' : i === 1 ? above : i === 2 ? below : 'var(--surface-sunken)'} stroke="var(--border-strong)" />);
      break;
  }
  return (
    <svg viewBox="0 0 120 56" width="120" height="56" aria-hidden="true" focusable="false">
      {body}
    </svg>
  );
}
