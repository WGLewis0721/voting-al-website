# Alabama Votes 2026 (Astro V2)

Premium, nonpartisan Alabama voter education site built with Astro + Tailwind and deployable to GitHub Pages.

## Stack

- Astro 6
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
# Use Node 22.12+ (required by Astro 6)
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
   - Included workflow: `.github/workflows/deploy.yml`
   - Uses Node 22, `npm ci`, and `npm run build`, then publishes `dist/`
   - Configure repository **Settings → Pages → Source = GitHub Actions**
2. **Manual**
   - Run `npm run build`
   - Deploy `dist/` contents to Pages source branch

## Node Version Requirement

Astro 6 requires Node `>=22.12.0`.

If your local machine is on Node 20, switch before running build/dev:

```bash
nvm install 22
nvm use 22
```

See:

- `docs/architecture.md` for component/data architecture
- `docs/setup-and-deploy.md` for exact migration and GitHub Pages deployment steps
