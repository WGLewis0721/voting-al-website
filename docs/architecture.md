# Alabama Votes 2026 — Architecture Notes

## Goals

- Premium, cinematic nonpartisan voter education experience.
- Static-first architecture for GitHub Pages reliability and speed.
- Data-driven content updates through JSON files (no backend required).

## Architecture Overview

- **Layout**: `src/layouts/Layout.astro`
  - Global typography, accessibility skip link, trust-oriented metadata.
- **Sections as components**: Hero, Journey cards, Ballot selector, Candidate explorer, Quiz, Amendments, Key Issues, Footer.
- **Data layer**: JSON files in `src/data/`.
  - Candidates, issues, amendments, key dates, counties.

## Interactivity Strategy

- Astro static HTML for core content.
- Client-side islands for:
  - Candidate filtering/search/compare flow.
  - Quiz scoring.
  - Minor motion/scroll affordances.
- IntersectionObserver for progressive reveal effects.
- `prefers-reduced-motion` respected in CSS.

## Styling System

- Tailwind utility classes are loaded via CDN in `Layout.astro` with an inline Tailwind theme extension.
- Supplemental shared classes live in `src/styles/global.css`.

## GitHub Pages

- Configured in `astro.config.mjs` with:
  - `site: https://wglewis0721.github.io`
  - `base: /voting-al-website`
- Build output is static `dist/`.
