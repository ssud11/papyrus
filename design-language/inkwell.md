# Papyrus Inkwell — Design Language (v3 · "Blueprint Ink")

> Written after the cool/violet redesign, for future reiteration.
> Inkwell now **deliberately diverges** from the warm "patina on metal" system that
> still governs Foxed Vellum, Noir, and Lamplight. It is the cool outlier — the
> drafting table among warm rooms.

---

## 1. Metaphor

The original Inkwell was *iron ink on cream paper*. v3 reframes it as **cool drafting ink
on a warm drafting table**: blueprint/drafting inks — teals and blue-greens — laid on the
same aged cream, with a single **violet reserved as a proof-stamp** for emphasis.

The key idea: **the paper stays warm, the marks turn cool.** Warmth lives in the ground
(cream paper) and two metal anchors (brass numbers, ochre annotations); everything
structural goes cool. This keeps Inkwell from reading clinical while giving it a distinct,
modern, "technical drawing" character.

---

## 2. Paper & ink

| Element | Value | Notes |
|---|---|---|
| Paper (editor bg) | `#FCF6E6` | warm cream — **unchanged**; the warmth anchor |
| Base ink (identifiers) | `#13161A` | cool near-black (faint blue cast); medium weight (500) in preview |
| Prose foreground | `#1F2428` | cool slate — a hair lighter than identifiers (two-tier ink) |
| Comments | `#847F6C` | muted clay-grey, italic — margin notes |

**Two-tier ink:** identifiers (`#13161A`) sit darker and heavier than surrounding prose
(`#1F2428`), so names lead the line. The cool cast of the near-black is intentional —
a warm black would fight the cool marks.

---

## 3. Role → hue (the cool ladder)

A **blue → teal → green** spectrum carries structure; two warm metals anchor data;
violet is the lone emphasis.

| Role | Color | Character |
|---|---|---|
| Keyword · storage · headings | `#2C5E64` | deep teal-slate — structural ink |
| Function · decorator | `#157E6A` | teal — the active/verb color |
| String | `#1E7A52` | emerald — literal data |
| Class · type · tag · link | `#2C6E8C` | blueprint blue — linework |
| **`self` / `this` / important** | `#4A38A0` | **violet — the proof-stamp (rare)** |
| Number · constant | `#7A5418` | brass — warm anchor |
| Annotation · attribute · module | `#6A4A16` | ochre — secondary warm anchor |
| Variable · identifier | `#13161A` | cool near-black ink |
| Error · invalid · deleted | `#7A2E1F` | oxblood — damage only |

---

## 4. Rules

1. **Cool-dominant, warm-anchored.** Structure and strings are cool; only numbers (brass)
   and annotations (ochre) stay warm — plus the cream paper. Never let a third everyday
   role go warm, or the cool identity blurs.
2. **Violet is sacred.** `#4A38A0` appears only on `self`/`this` and the single
   most-important token class. It is the one loud color; overusing it destroys the effect.
3. **Cool near-black ink.** Base ink leans blue (`#13161A`) to reinforce the blueprint cast.
4. **Two-tier ink.** Identifiers darker/heavier than prose.
5. **AA contrast.** Every content token is deepened to ≥4.5:1 on cream — the cool hues live
   at the 600–700 band, not brighter, so they pass. Don't chase "pop" past legibility.
6. **Deliberate divergence.** Inkwell intentionally breaks the system-wide
   "no blue / no purple" invariant. That rule still governs Vellum, Noir, and Lamplight.

---

## 5. Implementation notes

- **Variable weight 500** is a preview nicety. VS Code `fontStyle` supports only
  `bold`/`italic`/`underline`/`strikethrough` — no numeric weights — so the shipped theme
  keeps variables *normal*. Users can set `"editor.fontWeight": 500` globally to match.
- **Single source of truth:** `papyrus-palettes.js` drives the studio, the theme JSON, and
  the spec. Change colors there, regenerate.
- **Claude Code parity:** a matching TUI palette + status line should echo this — cool
  verdigris brand, violet for the "important / caution" accent (see the `acct` segment
  convention in `CLAUDE.md`).

---

## 6. Open questions for next iteration

- **System decision:** keep Inkwell as the lone cool theme, or migrate the whole family
  cooler so Papyrus becomes a cool system with warm variants?
- If Inkwell stays the outlier, the top-level "patina on warm metal" spec needs a clause
  naming Inkwell as the intentional cool exception (currently unreconciled).
