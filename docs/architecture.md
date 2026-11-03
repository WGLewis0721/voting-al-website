# Alabama Votes — architecture

## Product
A static, nonpartisan Alabama voter guide. The live site is built from Astro page and component files, not the root `alabama-voter-guide.html` archive.

## Canonical structure
- `src/layouts/Layout.astro`: HTML shell, SEO metadata, global styling, theme initialization and favicon.
- `src/components/`: hero, ballot finder, candidate explorer, amendments, voter instructions, header, footer, moving fact banner.
- `src/pages/`: main and topic routes.
- `src/styles/global.css`: Tailwind 4 import, shared semantic color tokens, light/dark styles.
- `src/data/`: election JSON plus **`assets.json`**, the centralized media registry.
- `public/assets/`: **all bundled reusable graphic/media files**, with brand assets under `brand/`.
- `scripts/check-assets.mjs`: validates asset references before an Astro build.
- `docs/assets.md`: the complete asset list, sources, license, role and conventions.

## Design and behavior
- Dark graphite/gold and warm-paper light mode share a hierarchy; party accents remain blue/red and the central white accent symbolizes independent/moderate voters.
- Theme preference is saved locally, initialized in the layout and toggled from the header.
- Server-rendered Astro markup supports core voter education; client-side JS adds county chooser, candidate filtering, menu, theme toggle and footer marquee pause.
- Respect reduced motion and keyboard focus; information must remain legible independent of the background photograph.
- New imagery belongs in `public/assets/`; never introduce a new scattered graphic at `public/` root. UI SVGs embedded directly in components are application markup, not standalone bundled files.

## Assets and external services
- Local SVGs: `public/assets/brand/`.
- Remote hero photograph: URL, license and photographer attribution are centralized in `src/data/assets.json`. It is **not yet locally bundled**.
- Web fonts: Google Fonts URL centralized in the registry; proprietary/licensed font binaries are not checked into the repository.
- Archived map HTML uses third-party Leaflet/OSM data and scripts; these are runtime services rather than reusable static visual assets. Do not move these into the static graphic folder blindly.

## Deployment
GitHub Pages base `/voting-al-website/`; `npm run build` performs the asset check and then compiles Astro to `dist/`.
