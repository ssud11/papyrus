# Papyrus Foxed Vellum — Design Language (v1.1 · consolidation)

> Written during the Vellum consolidation pass. Vellum's identity was **confirmed, not
> redesigned** — this doc names what the theme already is, at the repo's deepened
> (≥ 4.5/5.0 contrast) values.

---

## 1. Metaphor

**Iron-gall manuscript on aged, foxed paper.** Where Inkwell is a modern drafting table
(cool blueprint marks on clean cream), Vellum is the *older* document: warmer, dustier
paper, and inks that have oxidized the way real iron-gall inks do — browning blacks,
rubric red, forest-green washes, darkened gilding.

Vellum is the **most traditionally warm** of the four themes — the purest expression of
the original "metallic ink on paper" system.

## 2. Paper & ink

| Element | Value | Notes |
|---|---|---|
| Paper (editor bg) | `#F6EDD4` | aged vellum — warmer and duskier than Inkwell's cream |
| Base ink | `#2A2218` | iron-gall near-black (brown cast, not blue) |
| Comments | `#71623F` | faded ink, italic — deepened to the ≥5.0 floor |
| Punctuation | `#6F6445` | quiet, recedes behind names |

## 3. Role → pigment

| Role | Color | Character |
|---|---|---|
| Keyword · storage · headings | `#A2381A` | **Rubric** — iron-gall rubrication red |
| String | `#3A5828` | **Forest** — deep oxidized green |
| Function · decorator · keys | `#2F5648` | **Pine** — quiet evergreen (green-teal band ✓) |
| Class · type · tag | `#7A4420` | **Bistre** — walnut-brown linework |
| Number · constant | `#735919` | **Aged gold** — darkened gilding |
| Annotation · attribute · code | `#6A4A16` | **Tobacco** |
| `self` / `this` | `#A2381A` | Shares the rubric — Vellum has no separate flare |
| Error · invalid | `#7A2A18` | **Oxblood** — damage only |

## 4. Rules

1. **Fully warm.** Vellum has no cool accent and no sacred-color exception — its whole
   register is browns/reds/greens of aged ink. This is deliberate: with Inkwell cool and
   Noir jeweled, Vellum holds the system's original warm ground.
2. **Rubric leads.** The red `#A2381A` is the loudest voice (keywords, headings, self);
   everything else stays earthy. Don't add a second saturated pole.
3. **Structure ≠ damage.** Classes are bistre `#7A4420`; oxblood `#7A2A18` is errors only
   (the two browns/reds are separated by lightness and hue).
4. **Contrast:** repo-deepened values throughout — content ≥ 4.5:1 on `#F6EDD4`,
   comments/punctuation ≥ 5.0.
5. **Glow rule (adapted):** shimmers stay in-family — walnut glows gold (`#6A3A14` →
   `#9A7822`), pine glows deep teal. Vellum is all-warm, so a gold sheen is *native*
   here — the "amber = caution only" clause is Inkwell-specific.

## 5. Differentiation

| Axis | Inkwell | Vellum |
|---|---|---|
| Paper | Clean planner cream `#FCF6E6` | Aged, foxed `#F6EDD4` |
| Marks | Cool blueprint (teal/blue/violet) | Warm iron-gall (red/brown/green) |
| Keyword | Teal-slate `#2C5E64` | Rubric red `#A2381A` |
| Accent event | Violet proof-stamp | None — rubric carries emphasis |

## 6. TUI mapping

Claude accent = pine `#2F5648`; prompt borders walnut `#6A3A14` with gold shimmer;
`remember` = rubric `#A2381A`; success/autoAccept deepened to `#4A6B2E`. Full file with
subagent slots, rainbow, fullscreen backgrounds and `_statusLine_acct`:
`tui/papyrus-vellum.json`.

## 7. Open questions

- `self`/`this` shares the keyword rubric — Inkwell and Noir both gained a distinct
  "flare" token. Candidate for a future pass: a burnished copper for Vellum's self.
- Escape sequences `#486840` sit close to forest strings — revisit if too subtle.
