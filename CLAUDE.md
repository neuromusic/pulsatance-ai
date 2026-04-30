# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pulsatance.ai is a static marketing/service-overview site for a biotech strategy consultancy. Built with Eleventy. Content is authored in markdown; layout and styles are templated.

## Development

```bash
npm install
npm run serve   # dev server at http://localhost:8080
npm run build   # build to dist/
```

Vercel deploys via `npm run build` and serves from `dist/`.

## Architecture

- **`src/content/*.md`**: One file per section. YAML front-matter holds structured fields; markdown body is the prose. Filename order = render order.
- **`src/_data/sections.js`**: Reads `src/content/`, parses front-matter via `gray-matter`, renders body with `markdown-it`. Returns ordered array.
- **`src/_data/site.json`**: Site-wide metadata used in layout.
- **`src/_includes/layout.njk`**: Page shell (head, masthead, footer).
- **`src/_includes/partials/*.njk`**: One partial per section `type` (hero, definition, chapter-prose, chapter-engagements, chapter-author).
- **`src/index.njk`**: Loops `sections`, dispatches each to its partial by `type`, inserts `<hr class="rule">` after sections with `rule_after: true`.
- **`src/styles.css`**: All styles, no inline CSS.
- **`src/assets/`**: Images, copied through to `dist/assets/`.

Design system: Montserrat font, warm neutral palette (`#f5f5f0`, `#fafaf8`, `#2a2a2a`), coral accent (`#ff6b6b`). Centered 860px max-width "page" container with paper-grain overlay.

## How to edit content

- Change copy → edit the relevant `src/content/*.md` file.
- Add a new section → drop a new `.md` file into `src/content/` with a `type` matching an existing partial. Filename ordering controls position.
- Add a new section type → add a partial in `src/_includes/partials/` and a dispatch branch in `src/index.njk`.

## Style Conventions

- Typography uses Montserrat with weights 300/400/600.
- Section headers use uppercase letter-spacing treatment.
- Content styled to resemble a printed document/textbook aesthetic.
- HTML allowed inside front-matter strings (e.g., `<em>`, `&amp;`); rendered with `| safe`.
