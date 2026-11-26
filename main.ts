// One Line to Your Younger Self (boothlord) — program/v1 entry.
// Writes a single line to /output/entry.txt: one line the writer would
// send back to their younger self. Gate: 1-200 chars, one line, not blank.
import { writeFileSync, mkdirSync } from "node:fs";

const TEXT =
  "You will spend $400 on a guitar you never learn and $4 on the notebook that saves you — buy the notebook first.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate guard: fail hard before writing if the line ever breaks the gate
// (1-200 chars, exactly one line, not whitespace-only).
if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`entry is ${TEXT.length} chars, gate is 1-200`);
}
if (TEXT.trim().split("\n").length !== 1 || TEXT.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
console.log(`saved ${TEXT.length} characters to entry.txt`);
