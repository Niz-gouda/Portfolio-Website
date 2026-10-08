/** Monogram: an N built from two bars and a diagonal, in the ink colour with one blue and one orange mark. */
export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="7" fill="var(--ink)" />
      <path d="M9 23V9h3l8 10V9h3v14h-3L12 13v10z" fill="var(--on-ink)" />
      <rect x="9" y="25" width="6" height="2" fill="var(--mark-above)" />
      <rect x="17" y="25" width="6" height="2" fill="var(--mark-below)" />
    </svg>
  );
}
