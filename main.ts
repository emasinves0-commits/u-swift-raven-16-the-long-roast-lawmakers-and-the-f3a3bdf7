import * as fs from "node:fs";
import * as path from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const LINE = "Senator Vane swore the AI Act was law, yet the signed bill remains trapped in FINAL_v9.docx, which his own regulation demands be filed as a PDF.";

function validateEntry(text: string): string {
  const line = text.trim();
  if (line.length < 1 || line.length > 320) {
    throw new Error("entry must be 1-320 characters");
  }
  return line;
}

function main(): void {
  const entry = validateEntry(LINE);
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUTPUT_DIR, OUTPUT_FILE), entry);
}

main();
