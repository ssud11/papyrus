# Papyrus

**Four themes, one design language — metallic ink on warm paper, for VS Code _and_ the Claude Code TUI.** Contrast budgeted (content ≥ 4.5:1, comments ≥ 5.0), QD-OLED tuned, no subpixel fringe.

## Themes

### Papyrus Inkwell — *Blueprint Ink*

Cool drafting marks on planner cream — teal-slate keywords, emerald strings, blueprint-blue types, with a violet proof-stamp reserved for `self`. Papyrus's one sanctioned cool theme: the marks turn cool, the paper stays warm. *(light · default)*

### Papyrus Foxed Vellum — *iron-gall manuscript*

Rubric red, forest, pine, and bistre on aged, foxed paper. The oldest document in the drawer and the purest warm ground — no accent event, just oxidized ink deepened past AA to a 5.0 contrast floor. *(light)*

### Papyrus Noir — *Jewel Noir*

Four saturated poles — smoked ember, gold, electric verdigris, bone — on a disciplined ash field over true `#000000`, so OLED pixels switch fully off. A hot-ember flare marks `self`; structure never borrows the error hue. *(dark · true black)*

### Papyrus Lamplight — *the lamplit study*

Apricot, wheat, sage, and coral glowing evenly on warm cocoa — a lamplit study at 11pm. Deliberately pole-free: the cozy dark, lowest contrast tension of the four. *(dark · warm)*

## Beyond the editor

The same pigments run through the **Claude Code TUI** — spinner, prompt borders, diff tints, subagent slots — plus a matching **status line** in theme ink. Ships with 16 distinct ANSI slots, scoped Mermaid diagrams, and full `chat.*` / `text*` coverage. Every theme carries a written design language ([`design-language/`](design-language/)) — every rule named, documented, and kept.

## Install

### VS Code

Search **"Papyrus"** in the Extensions panel, or via the command palette:

```
ext install SS-inkwright.papyrus-inkwright
```

### Claude Code TUI

This repo doubles as a Claude Code plugin marketplace:

```
claude plugin marketplace add ssud11/papyrus
claude plugin install papyrus@papyrus
```

Then pick a theme with `/theme`:

- `papyrus-inkwell` — cool blueprint ink, warm paper
- `papyrus-vellum` — iron-gall manuscript on aged vellum
- `papyrus-noir` — four jewels on true black
- `papyrus-lamplight` — the cozy, pole-free dark

## License

MIT
