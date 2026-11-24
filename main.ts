import * as fs from "node:fs";
import * as path from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const LINE = "Senator Hale spent six months writing a 400-page bill to regulate artificial intelligence and chaired three hearings on it, then called his intern into the office, held up his laptop, and asked her to explain why the words 'Save As PDF' were greyed out, as if the button itself were part of the conspiracy.";

function checkedLine(text: string): string {
  const line = text.trim();
  if (line.length < 1 || line.length > 320) {
    throw new Error("entry must be 1-320 characters");
  }
  return line;
}

const entry = checkedLine(LINE);

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUTPUT_DIR, OUTPUT_FILE), entry);
