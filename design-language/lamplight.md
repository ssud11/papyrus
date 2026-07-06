# Papyrus Lamplight — Design Language (v1.1 · consolidation)

> Written during the Lamplight consolidation pass. Identity **confirmed, not redesigned**
> — this doc names what the theme is, with one structural fix (error ≠ coral).

---

## 1. Metaphor

**A lamplit study at 11pm.** Where Noir is a dark display case with four jewel poles,
Lamplight is a warm *room*: everything glows a little, nothing cuts. Parchment ink on
cocoa, lit by a single warm lamp — the coziest of the four themes, lowest contrast
tension by design.

## 2. Paper & ink

| Element | Value | Notes |
|---|---|---|
| Paper (editor bg) | `#181210` | warm near-black cocoa — *not* true black; the room, not the void |
| Base ink | `#E8D8B5` | parchment |
| Comments · punctuation | `#897860` | dimmed lamp-edge |
| Chrome | `#241C16` / `#1C1612` | lifted warm browns, apricot accents |

## 3. Role → pigment

| Role | Color | Character |
|---|---|---|
| Keyword · storage · headings | `#E8A878` | **Apricot** — the lamp's glow |
| String · annotation | `#D4B878` | **Wheat** — candle-gold |
| Function · decorator · keys | `#9ACBA8` | **Sage** — soft evergreen (green-teal band ✓) |
| Class · type · tag | `#E08068` | **Coral** — glowing linework |
| Number · constant | `#E8B080` | **Peach** |
| Escape · lang const · inline code | `#C8C078` | **Chartreuse** |
| `self` / `this` | `#E8A878` | Shares the apricot — no separate flare |
| Error · invalid | `#D9584A` | **Brick** — damage only *(v1.1: split from coral)* |

## 4. The v1.1 fix: structure ≠ damage

Shipped Lamplight had classes, `Invalid`, and every error UI key on the *same* coral
`#E08068` — the exact collision Noir v1 had. Coral is Lamplight's signature class color
(kept), so **errors moved to brick `#D9584A`**: redder, deeper, unmistakably "stop" next
to coral's orange-pink glow. Applied to `Invalid`, all `*error*`/`*deleted*` workbench
keys, TUI `error` + `diffRemoved` tints. ANSI red left as shipped (terminal-spectral,
not semantic) — candidate for a later alignment.

## 5. Rules

1. **Everything glows a little.** Lamplight is deliberately pole-free — even warmth,
   medium saturation. Don't introduce a saturated accent pole; that's Noir's move.
2. **Apricot leads.** Keywords, prompts, memory, warnings, chrome accents — the lamp.
3. **Structure ≠ damage.** Coral = classes; brick = errors. Never re-merge them.
4. **Warm rule intact.** Sage holds the function band; no blue/purple/magenta.
5. **Glow rule (adapted):** shimmers in-family — apricot glows peach, sage glows deep
   sage. All-warm theme: warm sheen is native, not caution-only.

## 6. Differentiation vs Noir (the other dark)

| Axis | Noir | Lamplight |
|---|---|---|
| Ground | True black `#000000`, OLED-off | Warm cocoa `#181210` |
| Field | Desaturated ash | Everything gently warm |
| Poles | Four saturated jewels | None — even glow |
| Keyword | Smoked ember `#C86038` | Soft apricot `#E8A878` |
| Function | Electric verdigris `#3FC8AE` | Soft sage `#9ACBA8` |
| Accent event | Hot-ember flare `#FF8814` | None |

## 7. TUI mapping

Claude accent = sage `#9ACBA8`; prompt borders apricot with peach shimmer; `remember` =
apricot; error = brick. Full file with subagent slots, rainbow, fullscreen backgrounds
and `_statusLine_acct`: `tui/papyrus-lamplight.json`.

## 8. Open questions

- ANSI red still `#E08068` (== coral) — align to brick in a future terminal pass.
- `self`/`this` shares apricot; a distinct warm flare (like Noir's) is possible but may
  violate rule 1 (pole-free). Probably correct as-is.
