# Alabama Votes 2026
A static, independent and nonpartisan Alabama voter-information site using Astro 6, Tailwind CSS 4 and JSON data. Deployed to GitHub Pages.

**Live site:** https://wglewis0721.github.io/voting-al-website/

## Where things live

| Purpose | Canonical location |
| --- | --- |
| All bundled visual assets (logos, icons, reusable media) | `public/assets/` |
| Single registry for local paths, remote artwork and licensed fonts | `src/data/assets.json` |
| Asset inventory, credits, conventions and replacement instructions | **`docs/assets.md`** |
| Site-wide CSS and light/dark design tokens | `src/styles/global.css` |
| Screens and reusable sections | `src/pages/`, `src/components/` |
| Voting information, candidates, amendments and county data | `src/data/*.json` (except `assets.json`) |
| Per-county official sample ballot PDFs (Alabama SOS file names are not uniform, so verify when SOS republishes) | `src/data/county-ballots.json` |
| Architecture, visual identity and operational guides | `docs/` |
| Legacy single-file snapshot (not the shipped design) | `alabama-voter-guide.html` |

```text
public/
  assets/
    brand/
      alabama-shield.svg
      favicon.svg
  map.html                 # Legacy standalone map
  primary-2026/map.html    # Archived map
src/
  data/assets.json        # Single media registry
  components/             # Inline UI icons are component code
  layouts/Layout.astro
  pages/
  styles/global.css
docs/
  assets.md
  architecture.md
  hero-identity-design.md
  setup-and-deploy.md
scripts/
  check-assets.mjs
```

The Capitol hero photograph and licensed Google Fonts are **external dependencies** managed by `src/data/assets.json`. They are inventoried and credited in `docs/assets.md`, not falsely described as bundled image/font binaries. New owned imagery should be placed under `public/assets/`.

## Develop and check
Node 22.12+ required.

```bash
npm ci
npm run dev
npm run check:assets
npm run build
npm run preview
```

`npm run build` runs the local asset check first. It fails on broken local paths, outdated root-level names or missing credit metadata.

## Deploy
`main` deploys to GitHub Pages using `.github/workflows/deploy.yml` (`npm ci` then `npm run build`). Config is in `astro.config.mjs`; base is `/voting-al-website/`.

See [Asset catalog](docs/assets.md), [Architecture](docs/architecture.md), [Visual identity](docs/hero-identity-design.md) and [Setup](docs/setup-and-deploy.md).
