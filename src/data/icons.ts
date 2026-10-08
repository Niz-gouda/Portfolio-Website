/**
 * Original line icons for the "working notes" cards, drawn on a 48x48 grid. Each shape is a path with a role:
 * `line` uses the neutral stroke, `a` the blue accent, `b` the orange accent. `fill` shapes are solid accents.
 * The same data feeds the React component and the standalone SVG files exported for the GitHub profile
 * (scripts/export-icons.mjs), so the two never drift apart.
 */
import type { MotifId } from './content';

export type Role = 'line' | 'a' | 'b';
export interface Shape {
  d: string;
  role: Role;
  fill?: boolean;
}

export const icons: Record<MotifId, readonly Shape[]> = {
  // guitar
  strings: [
    { d: 'M20 21c-6 0-12 4-12 11 0 6 4 10 10 10s12-4 12-10c0-3-2-4-3-6-1-2-2-5-7-5z', role: 'line' },
    { d: 'M29 24 41 9', role: 'line' },
    { d: 'M38 6l4 4', role: 'line' },
    { d: 'M17 32m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0', role: 'a' },
    { d: 'M22 38l5-4', role: 'b' },
  ],
  // motorcycle
  checks: [
    { d: 'M11 35m-7 0a7 7 0 1 0 14 0a7 7 0 1 0-14 0', role: 'line' },
    { d: 'M37 35m-7 0a7 7 0 1 0 14 0a7 7 0 1 0-14 0', role: 'line' },
    { d: 'M11 35l8-13h11l7 13', role: 'line' },
    { d: 'M19 22l-3-5h-6', role: 'line' },
    { d: 'M30 22l-3 13', role: 'line' },
    { d: 'M34 16m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0', role: 'b', fill: true },
  ],
  // katana and posture bar
  posture: [
    { d: 'M8 36 36 8', role: 'b' },
    { d: 'M12 28l8 8', role: 'line' },
    { d: 'M8 36l-3 3', role: 'line' },
    { d: 'M26 40h16', role: 'line' },
    { d: 'M26 40h10', role: 'a' },
  ],
  // team shield with star
  roles: [
    { d: 'M24 5l15 5v11c0 10-6 17-15 21-9-4-15-11-15-21V10z', role: 'line' },
    { d: 'M24 15l2.4 5.6 6 .6-4.5 4 1.4 6-5.3-3.2-5.3 3.2 1.4-6-4.5-4 6-.6z', role: 'a', fill: true },
  ],
  // capture sphere (original, generic)
  types: [
    { d: 'M24 24m-17 0a17 17 0 1 0 34 0a17 17 0 1 0-34 0', role: 'line' },
    { d: 'M7 24h34', role: 'line' },
    { d: 'M7 24a17 17 0 0 1 34 0z', role: 'b', fill: true },
    { d: 'M24 24m-5 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0', role: 'line' },
  ],
  // waves and sun
  wave: [
    { d: 'M4 30q5-6 10 0t10 0 10 0 10 0', role: 'a' },
    { d: 'M4 39q5-6 10 0t10 0 10 0 10 0', role: 'line' },
    { d: 'M36 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0', role: 'b', fill: true },
  ],
  // padlock: rules and a kill switch
  toggle: [
    { d: 'M11 22h26a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V24a2 2 0 0 1 2-2z', role: 'line' },
    { d: 'M16 22v-6a8 8 0 0 1 16 0v6', role: 'line' },
    { d: 'M24 29v6', role: 'b' },
    { d: 'M24 29m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0', role: 'b', fill: true },
  ],
  // ship and sail
  islands: [
    { d: 'M7 33h34l-5 9H12z', role: 'line' },
    { d: 'M24 33V6', role: 'line' },
    { d: 'M24 9c9 4 12 13 11 21H24z', role: 'b', fill: true },
    { d: 'M24 6l7 2-7 2z', role: 'a', fill: true },
  ],
  // hanger
  swatches: [
    { d: 'M24 19v-3a4 4 0 1 0-4-4', role: 'line' },
    { d: 'M24 19 5 34h38z', role: 'line' },
    { d: 'M12 34l12-9 12 9', role: 'a' },
    { d: 'M24 12m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0', role: 'b', fill: true },
  ],
};
