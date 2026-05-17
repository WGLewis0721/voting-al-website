# Migration + Deployment Steps (Exact)

## 1) Convert current repo to Astro project

From repository root:

```bash
npm install
```

Project is already scaffolded in this repository with:

- `src/pages/index.astro`
- Componentized sections in `src/components/`
- JSON-driven content in `src/data/`
- Tailwind setup and Astro config ready for GitHub Pages.

## 2) Run locally

```bash
npm run dev
```

## 3) Build production static site

```bash
npm run build
```

Output folder:

- `dist/`

## 4) Deploy to GitHub Pages with Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Astro to Pages
on:
  push:
    branches: [ main ]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## 5) Pages settings

In GitHub repository settings:

1. Go to **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main`

Because `astro.config.mjs` already sets:

- `site: https://wglewis0721.github.io`
- `base: /voting-al-website`

the deployed URLs will resolve correctly for repository pages.
