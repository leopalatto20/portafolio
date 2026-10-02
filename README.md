# Leonardo Pérez Palatto — Portfolio

Bilingual portfolio built with Astro. English: `/`. Spanish: `/es/`.

## Development

```sh
bun install
bun run astro dev --background
bun run astro dev status
bun run astro dev logs
bun run astro dev stop
```

The development URL is `http://localhost:4321/`.

## Build

```sh
bun run build
```

The existing Vercel adapter produces deployment output in `.vercel/output/`.

## Content

- `information.txt`: owner-supplied factual source; preserve it.
- `src/data/portfolio.ts`: shared English and Spanish content.
- `src/components/Portfolio.astro`: page structure, native project disclosures, and locale/anchor enhancement.
- `src/styles/global.css`: responsive styles and reduced-motion behavior.
- `public/cv/CV_LeonardoPerez.pdf`: downloadable placeholder CV. Replace its contents at the same path when the updated CV is ready. Both locales use it.
- `public/fonts/`: locally served open-source fonts and licenses.
- `public/assets/plates/`: authored visual assets with embedded provenance.

Projects use native `<details>` so core content and interaction work without JavaScript. The optional script opens direct project anchors and preserves expanded projects when switching languages.

Design decisions are in `PORTFOLIO_BRIEF.md` and `DESIGN.md`; the development-only surface contract and review evidence are under `.impeccable/`.
