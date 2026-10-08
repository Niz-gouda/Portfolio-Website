# Portfolio

Personal site for Nischalgouda Patil. Live: https://nischal-portfolio-psi.vercel.app/

## Stack

Vite, React 19, TypeScript (strict), CSS Modules with a design-token system, Geist and Geist Mono (self-hosted), light and dark themes, Vitest.

## Where things live

- `src/data/content.ts`: every word on the site. Edit facts here, not in components.
- `src/data/content.test.ts`: guards the copy (no em dashes, no phone or personal email, no unclaimed skills, https links only).
- `src/index.css`: design tokens (colour, type, spacing, elevation) and shared primitives.
- `src/components/*`: one folder per section, each with its own CSS Module.
- `public/certificates/`: certificate images.

## Adding the hackathon certificate link

In `content.ts`, find the `hackerrank-orchestrate` certificate and set its `href` to the Drive link. Then update the "leaves exactly one certificate without a link" check in `content.test.ts` to expect zero.

## Commands

```
npm run dev        # local dev server
npm run build      # typecheck and production build
npm test           # content invariants
npx oxlint         # lint
```
