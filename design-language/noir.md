# Papyrus Noir — Design Language (v2 · "Jewel Noir")

> Written after the ember/gold/verdigris redesign, for future reiteration.
> Noir stays **inside the warm rule** (no blue/purple/magenta in everyday roles) —
> its identity comes from *saturation discipline*, not a temperature exception.

---

## 1. The problem this solves

Shipped Noir v1 was **Lamplight's recipe, dimmer**: amber keywords, chartreuse strings,
sage functions, coral-clay classes — every role one shade below its Lamplight twin.
Brightness was the only differentiator. Worse, classes shared the error hue (`#D26A55`),
so structure and damage looked alike.

## 2. Metaphor

**Jewels on black iron.** Lamplight is a warm *room* — everything glows a little.
Noir is a dark *case* — the field is disciplined ash, and exactly four saturated
jewel poles cut through it. Identity by contrast-of-saturation, not hue-warmth.

## 3. Role → pigment

| Role | Color | Character |
|---|---|---|
| Keyword · storage · headings | `#C86038` | **Ember** — smoked so it smolders, not blazes |
| Function · decorator · links · keys | `#3FC8AE` | **Electric verdigris** — the live accent (sanctioned green-teal band, cranked) |
| Class · type · tag | `#E8A230` | **Gold** — the second jewel |
| Number · constant | `#EDE2C6` | **Bone** — bright pop without leaving the paper family |
| String | `#A8B478` | **Ash olive** — muted, lets the jewels lead |
| Annotation · attribute | `#C9A86A` | **Bronze** — quiet metal |
| Variable · identifier | `#CFC4A8` | **Ash ink** — the warm-ash base |
| **`self` / `this`** | `#FF8814` | **Hot ember — the flare.** Rare by design |
| Error · invalid | `#D26A55` | **Clay** — damage only; classes no longer share it |

## 4. Rules

1. **Four jewels, one field.** Ember, gold, verdigris, bone are the only saturated
   poles. Everything else stays ash — add a fifth pole and the identity collapses.
2. **The flare is sacred.** `#FF8814` appears on `self`/`this` (and TUI `remember`).
   Keyword ember is deliberately smoked (`#C86038`) so the flare reads as an event.
3. **Structure ≠ damage.** Classes moved to gold; clay is errors only.
4. **Warm rule intact.** All four jewels sit in sanctioned bands — verdigris is the
   green-teal function axis (hue 137–187°), cranked, not crossed. No blue/purple/magenta
   (QD-OLED fringe). The user's rough-cut blue/magenta picks were deliberately
   translated to gold/bone — see §6.
5. **True black stays.** Editor `#000000` (OLED off). Chrome near-black per repo state.
6. **Contrast:** all content tokens ≥ 4.5:1 on black (trivially met); comments/punct
   at the repo's deepened ≥ 5.0 values.

## 5. Lamplight differentiation (the point)

| Axis | Lamplight | Noir v2 |
|---|---|---|
| Field | Everything mid-warm, glowing | Ash neutrals, desaturated |
| Poles | None — even warmth | Four saturated jewels |
| Keyword | Soft apricot `#E8A878` | Smoked ember `#C86038` |
| Class | Coral `#E08068` | Gold `#E8A230` |
| Function | Soft sage `#9ACBA8` | Electric verdigris `#3FC8AE` |
| Number | Peach `#E8B080` | Bone `#EDE2C6` |

## 6. Provenance

Derived from the user's direct rough-edit (vivid gold function, blue class, magenta
number, hot-orange self) — the *four-pole vividness* was kept; blue and magenta were
re-cut to gold/bone because they are the QD-OLED fringe hues the project exists to
avoid, and blue is Inkwell's signature. Direction F on `noir-directions.html`.

## 7. TUI mapping

Claude accent = electric verdigris `#3FC8AE` (spinner, label); prompt borders = ember
`#C86038` with hot-ember shimmer; `remember` = the flare `#FF8814`; merged/fastMode =
gold; success = ash olive. Full file: `tui/papyrus-noir.json`
(incl. subagent slots, rainbow, fullscreen backgrounds, `_statusLine_acct`).

## 8. Open questions for next iteration

- **Chrome accents (resolved in the same pass):** identity accents (badge, active tab,
  focus ring, progress, peek border) moved to ember `#C86038`; links to verdigris
  `#3FC8AE`; warning keys deliberately stay amber `#D89060` — amber always means caution.
- **ANSI terminal palette** untouched (repo's re-tune). Consider verdigris/ember
  alignment in a later pass.
- Escape sequences `#B8C488` sit close to string ash-olive — revisit if too subtle.
