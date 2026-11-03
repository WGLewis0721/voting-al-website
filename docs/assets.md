# Visual Assets — canonical catalog

**Owner:** Alabama Votes website • **Updated:** 2026-11-03  
**One physical asset home:** `public/assets/`  
**One machine-readable registry:** `src/data/assets.json`

No new image, logo, stock photograph URL or hosted font reference should be introduced directly in a component. Update the registry first; consume the registry in the site. Reusable binary/vector media belongs in `public/assets/`, not loose in `public/` or `src/components/`.

## Production asset inventory

| Asset | Registry key | Source/storage | Used by |
| --- | --- | --- | --- |
| Gold Alabama shield with red/white/blue converging marks | `local.alabamaShield` | `public/assets/brand/alabama-shield.svg` • original project artwork | Home hero identity |
| Gold A monogram browser icon | `local.favicon` | `public/assets/brand/favicon.svg` • original project artwork | All browser tabs |
| Photograph of Alabama State Capitol | `external.alabamaCapitolHero` | Remote Wikimedia Commons thumbnail URL (central registry), **not checked into the repo** | Hero photo |
| Barlow Condensed, Cormorant Garamond, Outfit | `fonts.stylesheetUrl` | Google Fonts CSS URL (central registry), font files served externally | Type system |

### Capitol photograph licensing and provenance
- **Attribution:** DXR / Wikimedia Commons
- **Source page:** https://commons.wikimedia.org/wiki/File:Alabama_State_Capitol,_Montgomery,_West_view_20160713_1.jpg
- **License:** [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- **Treatment:** high-contrast crop, grayscale/sepia tint, layering and halftone effects with CSS. Credit link remains visible in the hero.
- **Locality limit:** The image is remotely loaded. The catalog centralizes the URL/credit so there is only **one place to maintain it**, but the photograph itself is not bundled. Do not claim offline availability or that the image has been migrated into Git.

### Fonts
Google Fonts supplies the stylesheet defined in `fonts.stylesheetUrl`. Font file binaries are intentionally not copied into the repo. The website uses CSS fallbacks when offline. Verify applicable font licenses before any future self-hosting.

## Design decisions
- The silhouette replaced the earlier ambiguous Capitol-symbol glyph. The red, white and blue details communicate multiple political affiliations without endorsing one.
- **Graphite + gold** are core brand tones; red/blue are semantic party colors and white is used only for the independence/convergence symbol.
- Keep graphics subordinate to plain voter facts. Both light and dark themes must keep information legible without relying on transparent text over photos.
- Static UI icons embedded directly as `<svg>` in components are **interface code**, not separate production assets; CSS-generated halftone, stripes and textures likewise remain styles rather than downloadable image files.

## Add or replace a file
1. Put the optimized, licensed file in `public/assets/brand/`, `public/assets/photography/`, `public/assets/illustrations/`, or an equally clear subfolder.
2. Record the new `assets/...` relative path in `src/data/assets.json`; list its license, purpose and source here.
3. Reference local media as `${import.meta.env.BASE_URL} + registry.local.<name>.path` (or an equivalent Astro expression). This keeps `/voting-al-website/` working on GitHub Pages.
4. For remote assets, register the exact HTTPS URL and license/credit in the same JSON. If possible, prefer moving approved owned media into the repo to reduce network dependencies.
5. Run `npm run check:assets` and `npm run build`; confirm both modes and a narrow mobile viewport. Do not remove credits when compressing artwork.

## Boundary: maps and archives
`public/map.html`, `public/primary-2026/map.html` and the root legacy `alabama-voter-guide.html` are historical standalone artifacts, not the current Astro asset library. They may load external mapping tiles, hosted JS/CSS and fonts as runtime dependencies. Do not relocate those service URLs as though they were images. The active site uses the centralized registry above.

## Audit record
- Consolidated the two owned SVGs previously at `public/favicon.svg` and `public/alabama-capitol-mark.svg` under `public/assets/brand/`.
- Updated the live hero and document layout to use the central registry.
- Updated core docs and added an automated asset reference check.
- **Remaining external media:** one Capitol photograph and the Google Fonts delivery URL; both recorded here and in the manifest.
