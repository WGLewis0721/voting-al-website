# Alabama Votes — Editorial Civic Hero Art Direction

**Revision:** November 3, 2026  
**Scope:** Hero identification, graphic ornamentation, and reused footer ticker accents.

## Design problem
The original date-and-emoji sticker resembled an unpolished social graphic. It competed with the headline while providing no meaningful next action. The homepage serves users of different ages who need to find a polling place or a ballot quickly.

## Decision: custom Capitol insignia, not a borrowed government seal
The hero has a new original vector insignia in `public/alabama-capitol-mark.svg`, depicting the architecture of the Alabama State Capitol with gold engraving, black shield geometry, subtle halftone, and small red/blue register marks. The mark is presented with **ALABAMA VOTES** and **INDEPENDENT / NONPARTISAN**, so it creates place-specific identity without impersonating an official government resource.

This is more coherent with the existing Capitol photograph than either a generic rosette or an imported state seal. All decorative calendar lettering and emoji asterisks were removed from the hero; live informational content (election context, polling hours, ballot lookup) is retained. The footer ticker's repeated emoji became simple print-register geometry, while historical years remain actual facts.

## Design foundations and references
- **Adobe, [What makes a great layout?](https://www.adobe.com/learn/illustrator/web/layout-basics):** establish the focal point, contrast, alignment and repeated patterns. Application: headline first, brand insignia second, primary voting action third; accent marks repeat without becoming separate messages.
- **Adobe, [How to design a poster](https://www.adobe.com/express/learn/blog/poster-layout-design):** hierarchy of hook → context → detail; design must translate beyond print size. Application: the graphic is a supporting marker, not another billboard.
- **Nielsen Norman Group, [Visual design principles](https://www.nngroup.com/articles/principles-visual-design/):** scale, hierarchy, balance, contrast and Gestalt grouping. Application: one dominant headline and one dominant CTA, while county choice stays a separate aligned task panel.
- **Nielsen Norman Group, [Designing for Young Adults, 3rd edition](https://media.nngroup.com/media/reports/free/Designing_for_Young_Adults_3rd_Edition.pdf):** young adults prefer a well-organized, clean visual hierarchy; over-decoration undermines usability.
- **Spread, `docs/design/FOUNDATIONAL_UX_PRINCIPLES.md`:** hierarchy, simplicity, Fitts's Law and no unnecessary interaction steps. This civic site borrows the design checks, **not** the Spread planner's unique palette or components.

## Preserved constraints
- The homepage remains a nonpartisan, independent voter guide. Never label it an official state guide.
- Graphite and gold dominate; red and blue remain secondary accents for party semantics and limited print-register decoration.
- The polling-place CTA goes to Alabama VoterView; county finder retains its existing selection workflow.
- The SVG is authored locally and version-controlled, with no runtime request to an icon service.
- Meaningful dates and years remain where they are necessary to understand an election or historical fact, not as gratuitous visual stickers.

## Acceptance checks
- [x] All `✳` ornaments removed from hero and ticker components.
- [x] Decorative month/day sticker removed from hero.
- [x] New locally version-controlled SVG referenced in hero.
- [x] Explicit **INDEPENDENT / NONPARTISAN** language retained.
- [x] Existing polling place and county functionality preserved in source.
- [ ] Check actual device widths of 390px, 820px and 1440px for clipping and visual balance.
- [ ] Screen reader/keyboard pass and reduced-motion visual inspection.
- [ ] Successful GitHub Pages build and deployment after final commit.
