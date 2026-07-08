# Papyrus

**Four themes, one design language: metallic ink on warm paper.**

Papyrus themes VS Code *and* the Claude Code terminal TUI as a single system — heavy
ink, low chroma, warm paper, and legibility that is budgeted, not guessed (content
tokens ≥ 4.5:1, comments deepened to ≥ 5.0). Blues and magentas are kept out of everyday
roles so QD-OLED panels show no subpixel fringe — with two deliberate, documented
exceptions.

## Themes

- **Inkwell** (light, default) — *Blueprint Ink*: cool teal-and-green drafting marks
  with a violet proof-stamp on `self`, over planner cream. The sanctioned cool exception.
- **Foxed Vellum** (light) — *iron-gall manuscript*: rubric red, forest, pine, and
  bistre on aged, foxed paper. The purest warm ground.
- **Noir** (dark) — *Jewel Noir*: four saturated poles — smoked ember, gold, electric
  verdigris, bone — on an ash field over true `#000000` (OLED pixels off).
- **Lamplight** (dark) — *the lamplit study*: apricot, wheat, sage, and coral on warm
  cocoa. Pole-free by design; the cozy dark.

## Beyond the editor

- **Claude Code TUI themes included** — matching palettes for the terminal
  (`tui/`), down to subagent identity slots, the ultrathink rainbow, and
  spinner shimmers that glow in-family.
- **A status-line convention** — model, branch, account, context meter, and cost in the
  same pigments as your syntax.
- **16 distinct ANSI slots**, scoped Mermaid diagrams, full `chat.*`/`text*` coverage.
- **Documented, not just shipped** — every theme carries a written design language
  ([`design-language/`](design-language/)); every rule (the function band,
  structure ≠ damage, the glow rule) is named and kept.

## Install

### VS Code

Search **"Papyrus"** in the VS Code Extensions panel, or install via command palette:

```
ext install SS-inkwright.papyrus
```

### Claude Code TUI

This repo doubles as a Claude Code plugin marketplace:

```
claude plugin marketplace add ssud11/papyrus
claude plugin install papyrus@papyrus
```

Then pick a theme with `/theme` (`papyrus-inkwell`, `papyrus-vellum`,
`papyrus-noir`, `papyrus-lamplight`).

## License

MIT
