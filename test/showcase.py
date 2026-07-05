"""Papyrus token showcase — Python. The violet proof-stamp lives on `self`/`cls`."""

from __future__ import annotations          # keyword(from/import) · module
import math                                 # module name
from dataclasses import dataclass, field    # module · names

MAX_DEPTH: int = 12                          # constant · type annotation · number
TAU = math.pi * 2                            # builtin module · operator · number
LABEL = "drafting ink"                       # string
_pattern = r"\$\{(\w+)\}"                     # raw string / regexp-ish escapes


@dataclass                                   # decorator
class Blueprint:                             # class name
    title: str                              # property · type
    scale: float = 1.0
    layers: list[str] = field(default_factory=list)

    def add(self, layer: str) -> "Blueprint":   # method · self (violet) · param
        self.layers.append(layer)               # self (violet) · property
        return self                             # self (violet)

    @classmethod                                # decorator
    def blank(cls) -> "Blueprint":              # cls (violet) · method
        return cls(title="untitled")            # cls (violet)

    @property                                   # decorator
    def is_empty(self) -> bool:                 # self (violet) · builtin type
        return len(self.layers) == 0            # builtin · operator


def render(items: list[Blueprint]) -> None:     # function · param · type
    for i, bp in enumerate(items):              # keyword.control · builtin
        ok = bp.scale > 0 and bp.title != ""    # operators · None/True/False below
        status = "ok" if ok else None           # language constants
        print(f"{i}: {bp.title} -> {status}")   # builtin · f-string expression


if __name__ == "__main__":                      # language const · operator
    render([Blueprint.blank()])
