# Changelog

## [2.1.0] - 2026-07-08

### Added
- Claude Code TUI themes for all four palettes (`tui/`), shipped as a Claude Code
  plugin — subagent identity slots, ultrathink rainbow, in-family spinner shimmers,
  and a matching status-line convention
- Written design language per theme (`design-language/`)

### Changed
- **Inkwell v3 "Blueprint Ink"** — redesigned as cool drafting-ink marks on warm
  cream: blueprint blue classes, teal functions/strings, violet proof-stamp on
  `self`/`this` (the design system's sanctioned cool exception)
- **Noir v2 "Jewel Noir"** — four saturated poles on an ash field over true
  `#000000`: smoked-ember keywords, gold classes, electric-verdigris functions,
  bone numbers; hot-ember flare on `self`
- **Foxed Vellum v1.1** — function color corrected from magenta to olive-teal;
  punctuation and number contrast lifted to AA
- **Lamplight v1.1** — errors split from coral to brick; Claude accent moved from
  sage to brass in the TUI theme

## [2.0.1] - 2026-06-05

### Changed
- Token contrast pass across all four themes: stronger differentiation for keywords, strings, numbers, classes, and functions
- Light themes (Inkwell, Foxed Vellum): darker, more saturated greens for strings and escape sequences — tuned for wide-gamut QD-OLED rendering
- Added Mermaid arrow/link token colour for Foxed Vellum

## [2.0.0] - 2026-05-03

### Added
- Initial release: Papyrus Inkwell (light), Papyrus Foxed Vellum (light), Papyrus Noir (dark), Papyrus Lamplight (dark)
- Solarized lineage with warm paper backgrounds and zero blue/purple fringe
- QD-OLED tuned colour palette
