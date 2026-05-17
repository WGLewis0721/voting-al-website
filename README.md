# Alabama Votes 2026 (Astro V2)

Premium, nonpartisan Alabama voter education site built with Astro + Tailwind and deployable to GitHub Pages.

## Stack

- Astro 6 (compatible with Astro 5+ requirement)
- Tailwind CSS (CDN runtime configuration)
- Client-side vanilla JavaScript for interactions
- JSON data sources for candidates, issues, amendments, dates, and counties

## Project Structure

```text
.
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── docs/
│   └── architecture.md
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AlignmentQuiz.astro
│   │   ├── Amendments.astro
│   │   ├── BallotSelector.astro
│   │   ├── CandidateCard.astro
│   │   ├── CandidateExplorer.astro
│   │   ├── Hero.astro
│   │   ├── JourneyCards.astro
│   │   ├── KeyIssues.astro
│   │   ├── SiteFooter.astro
│   │   └── TrustBanner.astro
│   ├── data/
│   │   ├── amendments.json
│   │   ├── candidates.json
│   │   ├── counties.json
│   │   ├── dates.json
│   │   └── issues.json
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── alabama-voter-guide.html (legacy single-file version)
```

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

This project is configured for repository pages at:

- `site`: `https://wglewis0721.github.io`
- `base`: `/voting-al-website`

Deployment options:

1. **GitHub Actions** (recommended)
   - Use Astro official action or standard Node workflow:
     - `npm ci`
     - `npm run build`
     - Publish `dist/` to Pages
2. **Manual**
   - Run `npm run build`
   - Deploy `dist/` contents to Pages source branch

See:

- `docs/architecture.md` for component/data architecture
- `docs/setup-and-deploy.md` for exact migration and GitHub Pages deployment steps
