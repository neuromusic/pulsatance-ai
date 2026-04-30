# Pulsatance.ai

Static marketing site for **Pulsatance** — a biotech strategy consultancy that helps life science companies navigate inflection points with competitive intelligence, product strategy, AI × biology guidance, and ecosystem design.

## Development

```bash
npm install
npm run serve   # local dev server with live reload
npm run build   # build to dist/
```

## Architecture

Eleventy static site. Content lives in `src/content/*.md` (YAML front-matter + markdown body). Layout, partials, and styles are alongside in `src/`. Output is plain HTML in `dist/`.

- `src/content/` — one markdown file per section (hero, definition, chapters). Sections render in filename order.
- `src/_data/site.json` — site-wide metadata (title, email, etc.).
- `src/_data/sections.js` — loads `src/content/*.md`, parses front-matter, renders bodies.
- `src/_includes/layout.njk` — page shell (head, masthead, footer).
- `src/_includes/partials/` — one Nunjucks partial per section `type`.
- `src/styles.css` — all styles. Montserrat typography, warm neutral palette, coral accent.

Edit copy by changing markdown files; edit layout by changing partials.

## Contact

justin@pulsatance.com
