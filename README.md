# Voting AL Intelligence

Modern nonpartisan Alabama civic education platform built with **Next.js + TypeScript + Tailwind CSS + Framer Motion + Recharts** and configured for static deployment to GitHub Pages.

## Platform Goals

- Help voters understand what's on the ballot
- Explain issues in plain English
- Provide neutral candidate comparisons
- Show transparent sourcing and methodology
- Keep mobile UX and accessibility first

## Stack

- Next.js App Router (static export)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide icons
- Recharts
- shadcn-style reusable UI primitives

## Pages

- Home
- Ballot Explorer
- Issues
- Candidates
- Civic Education
- Alabama Map
- FAQ
- About
- Sources & Methodology

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Build output is generated in `out/` for GitHub Pages.

## Deployment

GitHub Actions workflow: `.github/workflows/deploy.yml`

- Installs dependencies
- Runs `npm run build`
- Publishes `out/` to GitHub Pages

## Data and Schema

- Mock data and typed schemas live in:
  - `src/lib/types.ts`
  - `src/data/mock-data.ts`
