# Papyrus Showcase — Markdown

Body prose renders in the base ink. This sentence is a plain paragraph so you can judge
reading weight against the warm paper.

## Headings step down in the structural ink

### Third level still legible

**Bold pulls weight** and *italic leans into the margin*. Inline `code spans` should read
as marked-but-quiet — on Inkwell they carry the emerald wash (`textPreformat.background`).

> A blockquote — muted, italic, set back from the body like a margin note.
> Second line to confirm the quote band holds.

- Unordered item one
- Item two with a [link to somewhere](https://example.com) — links carry the accent hue
- Item three with `inline code` mid-sentence

1. Ordered item
2. Second ordered item

```ts
// Fenced code block — full syntax highlighting applies here
const drawing: Record<string, number> = { iron: 1, sepia: 2, olive: 3 };
function tally(d: Record<string, number>): number {
  return Object.values(d).reduce((a, b) => a + b, 0);  // self/this n/a here
}
```

```python
# A second fenced block in another language
def blank() -> dict[str, int]:
    return {"untitled": 0}
```

| Role     | Inkwell        | Warm three |
|----------|----------------|------------|
| keyword  | teal-slate     | sepia      |
| function | verdigris teal | olive-teal |
| self     | violet stamp   | sepia      |

---

A horizontal rule sits above this line. Final paragraph to close the sample.
