# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pulsatance.ai is a static marketing/service-overview site for a biotech strategy consultancy. The entire site is a single self-contained HTML file (`src/index.html`) with inline CSS — no build tools, no JavaScript frameworks, no dependencies.

## Development

To preview the site, open `src/index.html` directly in a browser. No build step or dev server is required.

## Architecture

- **`src/index.html`**: Single-page static site with all styles inlined in a `<style>` block
- Design system: Montserrat font, warm neutral palette (`#f5f5f0`, `#fafaf8`, `#2a2a2a`), coral accent (`#ff6b6b`)
- Layout: centered 800px max-width "page" container with paper-texture overlay effect
- No JavaScript, no external CSS files, no build pipeline

## Style Conventions

- Typography uses Montserrat with weights 300/400/600
- Section headers use uppercase letter-spacing treatment
- Content styled to resemble a printed document/textbook aesthetic
- Service items use a left coral border accent pattern
