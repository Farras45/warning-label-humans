// Warning Label for Humans: One Line, Big Laugh
// make.fun bounty u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85
//
// Writes the entry — one line of comedy, the safety warning label that
// should come printed on every human being — to entry.txt in the output
// directory ($MAKEFUN_OUTPUT_DIR, default /output).
//
// Node 22 stdlib only. Run with: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: 109 characters, within the 160-character limit.
const ENTRY =
  "WARNING: This human runs on four hours of sleep, three coffees, and total confidence in a plan made at 2 a.m.";

// Enforce the bounty gate ourselves: 1-160 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.trim().length === 0) {
  throw new Error(
    `Entry must be 1-160 non-blank characters, got ${ENTRY.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
