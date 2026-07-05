// Papyrus token showcase — TypeScript. Open under each theme and eyeball every role.
// Roles annotated so a reviewer knows which token maps to which design-language color.

import { readFile } from "node:fs/promises";          // keyword(import) · module(node:fs)
import * as path from "node:path";                    // namespace

const MAX_RETRIES = 3;                                // constant · number
const GREETING = "blueprint ink";                     // string
const pattern = /^\$\{(\w+)\}$/g;                      // regexp · escapes

type Role = "keyword" | "string" | "number";          // type alias · string union
interface Drawing {                                    // interface name
  title: string;                                       // property · type annotation
  scale: number;
  layers: readonly string[];
}

enum Ink { Iron, Sepia, Olive }                        // enum (class-ish) + members

@sealed                                                // decorator
class DraftingTable<T extends Drawing> {               // class name · type param
  private sheets: T[] = [];                            // storage modifier · property

  constructor(public readonly name: string) {}         // parameter

  add(sheet: T): this {                                // method · self/this return
    this.sheets.push(sheet);                           // this
    return this;                                       // this
  }

  get count(): number {                                // accessor
    return this.sheets.length ?? 0;                    // operator(??) · property
  }
}

async function render(table: DraftingTable<Drawing>): Promise<void> {  // function · async
  for (const sheet of table.sheets) {                  // keyword.control
    const ok = sheet.scale > 1 && sheet.title !== "";  // operators · boolean cmp
    console.log(`${sheet.title}: ${ok ? "ok" : "skip"}`);  // template expression
  }
}

function sealed(ctor: Function) {                      // builtin-ish · param
  Object.seal(ctor);                                   // support.function
}

export { DraftingTable, render, MAX_RETRIES, GREETING, pattern };  // language const below
export const isReady = true;                           // constant.language.boolean
