/**
 * Detailed diff: find exactly which step introduces lone $ lines
 */

import { readFileSync } from "fs";

// ── Extract: normalizeSectionMarkdown ──
function normalizeSectionMarkdown(source) {
  let md = String(source || "");
  if (!md) return "";
  md = md.replace(/^\uFEFF/, "").trimStart();
  if (!md) return "";
  return md.replace(/^#(?![#])\s*[^\n\r]*\s*(?:\r?\n|$)/, "").trimStart();
}

// ── Extract: normalizeMath ──
function normalizeMath(md = "") {
  md = String(md);
  const displayBlocks = [];
  md = md.replace(/\$\$[\s\S]*?\$\$/g, (match) => {
    const idx = displayBlocks.length;
    displayBlocks.push(match);
    return `\x00DBLOCK${idx}\x00`;
  });
  md = md.replace(/\\\((.+?)\\\)/gs, (_, expr) => `$${expr.trim()}$`);
  md = md.replace(
    /\\\[(.+?)\\\]/gs,
    (_, expr) => `$$\n${String(expr).trim()}\n$$`
  );
  md = md.replace(
    /\[\s*([^\[\]\n]*?(\\frac|\\Delta|\\cdot|\\sqrt|=)[^\[\]\n]*?)\s*\]/g,
    (_, expr) => `$${expr.trim()}$`
  );
  displayBlocks.forEach((block, idx) => {
    md = md.replace(`\x00DBLOCK${idx}\x00`, block);
  });
  return md;
}

// ── Extract: preprocessLatexDelimiters ──
function preprocessLatexDelimiters(src) {
  if (!src) return "";
  const lines = String(src).split(/\r?\n/);
  const out = [];
  let inCodeFence = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (/^```/.test(trimmed)) {
      inCodeFence = !inCodeFence;
      out.push(line);
      continue;
    }
    if (inCodeFence) {
      out.push(line);
      continue;
    }
    const blockRound = trimmed.match(/^\\\(([\s\S]+)\\\)$/);
    if (blockRound) {
      out.push("$$");
      out.push(String(blockRound[1]).trim());
      out.push("$$");
      continue;
    }
    const blockSquare = trimmed.match(/^\\\[([\s\S]+)\\\]$/);
    if (blockSquare) {
      out.push("$$");
      out.push(String(blockSquare[1]).trim());
      out.push("$$");
      continue;
    }
    let next = line;
    next = next.replace(/\\\((.+?)\\\)/g, (_, expr) => `$${expr}$`);
    next = next.replace(/\\\[((?:\\.|[^\]])+?)\\\]/g, (_, expr) => `$$${expr}$$`);
    out.push(next);
  }
  return out.join("\n");
}

// ── Extract: isBareLatexLine + preprocessBareLatexBlocks ──
function isBareLatexLine(trimmed) {
  if (!trimmed) return false;
  if (/^(?:#{1,6}\s|[-*+]\s|>\s|\d+\.\s|\|)/.test(trimmed)) return false;
  if (/[`$]/.test(trimmed)) return false;
  if (/\\\(|\\\)|\\\[|\\\]/.test(trimmed)) return false;
  if (/^(?:https?:\/\/|\/|\.{1,2}\/)/i.test(trimmed)) return false;
  const hasLatexCmd = /\\[A-Za-z]+/.test(trimmed);
  const hasStrongLatex =
    /\\(?:sum|frac|vec|sqrt|theta|omega|mu|lambda|Delta|sin|cos|tan|cdot|times|qquad|approx|Rightarrow|text|parallel|perp|hat|pi|le|ge|neq)\b/.test(trimmed);
  const hasMathOps = /(?:=|\^|_|\\Rightarrow|\\approx|\\le|\\ge|\\neq)/.test(trimmed);
  if (!(hasStrongLatex || (hasLatexCmd && hasMathOps))) return false;
  const plainWordCount = (
    trimmed.replace(/\\[A-Za-z]+/g, " ").match(/[A-Za-z]{4,}/g) || []
  ).length;
  if (plainWordCount >= 5) return false;
  return true;
}

function preprocessBareLatexBlocks(src) {
  if (!src) return "";
  const lines = String(src).split(/\r?\n/);
  const out = [];
  let inCodeFence = false;
  let inDisplayMath = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (/^```/.test(trimmed)) {
      inCodeFence = !inCodeFence;
      out.push(line);
      continue;
    }
    if (trimmed === "$$") {
      inDisplayMath = !inDisplayMath;
      out.push(line);
      continue;
    }
    if (/^\$\$[\s\S]*\$\$$/.test(trimmed)) {
      out.push(line);
      continue;
    }
    if (inCodeFence || inDisplayMath || !trimmed) {
      out.push(line);
      continue;
    }
    if (isBareLatexLine(trimmed)) {
      out.push("$$");
      out.push(trimmed);
      out.push("$$");
      continue;
    }
    out.push(line);
  }
  return out.join("\n");
}

function preprocessVariableHints(src) {
  if (!src) return "";
  return src.replace(/\[\[([a-zA-Z0-9_-]+)\]\]/g, (_, id) => `[${id}](var:${id})`);
}

// ═════════════════════════════════════════════════════
// MAIN
// ═════════════════════════════════════════════════════

const rawMd = readFileSync(
  "src/data_v2_i18n/fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/sistemas-aislados/teoria.md",
  "utf-8"
);

const step1 = normalizeSectionMarkdown(rawMd);
const step2 = `# Teoría Sistemas aislados\n\n${step1}`;
const step3 = normalizeMath(step2);
const step4 = step3; // preprocessReferenceLinks is identity here
const step5 = preprocessLatexDelimiters(step4);
const step6 = preprocessBareLatexBlocks(step5);
const step7 = preprocessVariableHints(step6);

function findLoneDollar(text, label) {
  const lines = text.split("\n");
  const results = [];
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (t === "$") {
      results.push({ lineNum: i + 1, context: [
        lines[i-2] ? `  ${i-1}: ${JSON.stringify(lines[i-2])}` : null,
        lines[i-1] ? `  ${i}: ${JSON.stringify(lines[i-1])}` : null,
        `  ${i+1}: ${JSON.stringify(lines[i])} <-- lone $`,
        lines[i+1] ? `  ${i+2}: ${JSON.stringify(lines[i+1])}` : null,
        lines[i+2] ? `  ${i+3}: ${JSON.stringify(lines[i+2])}` : null,
      ].filter(Boolean) });
    }
  }
  if (results.length === 0) {
    console.log(`[${label}] No lone "$" found ✓`);
  } else {
    console.log(`[${label}] FOUND ${results.length} lone "$" lines:`);
    for (const r of results.slice(0, 3)) {
      console.log(`  At line ${r.lineNum}:`);
      r.context.forEach(c => console.log(c));
      console.log();
    }
    if (results.length > 3) console.log(`  ...and ${results.length - 3} more`);
  }
}

console.log("=== CHECKING EACH STEP FOR LONE $ ===\n");
findLoneDollar(rawMd, "RAW");
findLoneDollar(step1, "Step1 (normalizeSectionMd)");
findLoneDollar(step2, "Step2 (prepend title)");
findLoneDollar(step3, "Step3 (normalizeMath)");
findLoneDollar(step5, "Step5 (preprocessLatexDelimiters)");
findLoneDollar(step6, "Step6 (preprocessBareLatexBlocks)");
findLoneDollar(step7, "Step7 (preprocessVariableHints)");

// Also show all diffs
console.log("\n=== DIFF: Step2 → Step3 (normalizeMath) ===");
const s2lines = step2.split("\n");
const s3lines = step3.split("\n");
for (let i = 0; i < Math.max(s2lines.length, s3lines.length); i++) {
  if (s2lines[i] !== s3lines[i]) {
    console.log(`  Line ${i+1}:`);
    console.log(`    BEFORE: ${JSON.stringify(s2lines[i])}`);
    console.log(`    AFTER:  ${JSON.stringify(s3lines[i])}`);
  }
}

console.log("\n=== DIFF: Step4 → Step5 (preprocessLatexDelimiters) ===");
const s4lines = step4.split("\n");
const s5lines = step5.split("\n");
for (let i = 0; i < Math.max(s4lines.length, s5lines.length); i++) {
  if (s4lines[i] !== s5lines[i]) {
    console.log(`  Line ${i+1}:`);
    console.log(`    BEFORE: ${JSON.stringify(s4lines[i])}`);
    console.log(`    AFTER:  ${JSON.stringify(s5lines[i])}`);
  }
}

console.log("\n=== DIFF: Step5 → Step6 (preprocessBareLatexBlocks) ===");
const s5lines2 = step5.split("\n");
const s6lines = step6.split("\n");
for (let i = 0; i < Math.max(s5lines2.length, s6lines.length); i++) {
  if (s5lines2[i] !== s6lines[i]) {
    console.log(`  Line ${i+1}:`);
    console.log(`    BEFORE: ${JSON.stringify(s5lines2[i])}`);
    console.log(`    AFTER:  ${JSON.stringify(s6lines[i])}`);
  }
}
