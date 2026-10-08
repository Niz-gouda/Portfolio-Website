import type { MotifId } from '../../data/content';
import { icons, type Role } from '../../data/icons';

const COLOR: Record<Role, string> = {
  line: 'var(--text-muted)',
  a: 'var(--mark-above)',
  b: 'var(--mark-below)',
};

/** Decorative icon for a principle card. Hidden from assistive tech; the card heading carries the meaning. */
export function Motif({ id }: { id: MotifId }) {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true" focusable="false" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[id].map((s) => (
        <path
          key={s.d}
          d={s.d}
          stroke={COLOR[s.role]}
          fill={s.fill ? COLOR[s.role] : 'none'}
          fillOpacity={s.fill ? 0.85 : undefined}
        />
      ))}
    </svg>
  );
}
