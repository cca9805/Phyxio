/**
 * Test: simulate the full rendering pipeline on real content from sistemas-aislados/teoria.md
 * Pipeline: normalizeSectionMarkdown → prepend title → normalizeMath → 
 *           preprocessReferenceLinks → preprocessLatexDelimiters → 
 *           preprocessBareLatexBlocks → preprocessVariableHints → 
 *           remark-math + rehype-katex
 */

import { readFileSync } from "fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";

// ── Extract: normalizeSectionMarkdown from V2LeafTabs.jsx ──
function normalizeSectionMarkdown(source) {
  let md = String(source || "");
  if (!md) return "";
  md = md.replace(/^\uFEFF/, "").trimStart();
  if (!md) return "";
  return md.replace(/^#(?![#])\s*[^\n\r]*\s*(?:\r?\n|$)/, "").trimStart();
}

// ── Extract: normalizeMath from V2LeafTabs.jsx ──
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
    md = md.replace(`\x00DBLOCK${idx}\x00`, () => block);
  });
  return md;
}

// ── Extract: preprocessVariableHints from MarkdownRenderer.jsx ──
function preprocessVariableHints(src) {
  if (!src) return "";
  return src.replace(/\[\[([a-zA-Z0-9_-]+)\]\]/g, (_, id) => `[${id}](var:${id})`);
}

// ── Extract: preprocessReferenceLinks (simplified — only the parts that affect $) ──
function preprocessReferenceLinks(src) {
  if (!src) return "";
  // This function doesn't touch $ at all, just reference links
  return src;
}

// ── Extract: preprocessLatexDelimiters from MarkdownRenderer.jsx ──
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

// ── Extract: isBareLatexLine + preprocessBareLatexBlocks from MarkdownRenderer.jsx ──
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

// ═══════════════════════════════════════════════════════════════════
// MAIN TEST
// ═══════════════════════════════════════════════════════════════════

const rawMd = readFileSync(
  "src/data_v2_i18n/fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/sistemas-aislados/teoria.md",
  "utf-8"
);

console.log("=== RAW MD (first 200 chars) ===");
console.log(rawMd.substring(0, 200));
console.log("...\n");

// Step 1: normalizeSectionMarkdown
const step1 = normalizeSectionMarkdown(rawMd);

// Step 2: Prepend title
const step2 = `# Teoría Sistemas aislados\n\n${step1}`;

// Step 3: normalizeMath
const step3 = normalizeMath(step2);

// Step 4: preprocessReferenceLinks
const step4 = preprocessReferenceLinks(step3);

// Step 5: preprocessLatexDelimiters
const step5 = preprocessLatexDelimiters(step4);

// Step 6: preprocessBareLatexBlocks
const step6 = preprocessBareLatexBlocks(step5);

// Step 7: preprocessVariableHints
const step7 = preprocessVariableHints(step6);

// Check: Is the content the same at each step?
console.log("Step1 == rawMd (minus H1)?", step1 === rawMd.replace(/^#(?![#])\s*[^\n\r]*\s*(?:\r?\n|$)/, "").trimStart());
console.log("Step3 == Step2?", step3 === step2);
console.log("Step5 == Step4?", step5 === step4);
console.log("Step6 == Step5?", step6 === step5);
console.log("Step7 == Step6?", step7 === step6);
console.log();

// Check for lone $ on its own line
const finalLines = step7.split("\n");
const loneDoubleDollarLines = [];
const loneSingleDollarLines = [];
for (let i = 0; i < finalLines.length; i++) {
  const t = finalLines[i].trim();
  if (t === "$$") loneDoubleDollarLines.push(i + 1);
  if (t === "$") loneSingleDollarLines.push(i + 1);
}
console.log(`Lines with lone "$$": ${loneDoubleDollarLines.length} at lines: ${loneDoubleDollarLines.join(", ")}`);
console.log(`Lines with lone "$": ${loneSingleDollarLines.length} at lines: ${loneSingleDollarLines.join(", ")}`);
console.log();

// Now parse with remark-math + rehype-katex
console.log("=== Parsing with remark-math + rehype-katex ===");
const result = await unified()
  .use(remarkParse)
  .use(remarkMath)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeKatex)
  .use(rehypeStringify)
  .process(step7);

const html = String(result);

// Check for literal $ in the HTML output (outside of katex spans)
// Remove all katex-generated HTML first
const withoutKatex = html.replace(/<span class="katex[^"]*">[\s\S]*?<\/span>/g, "");
const literalDollar = (withoutKatex.match(/\$/g) || []).length;
console.log(`Literal "$" in HTML (outside katex spans): ${literalDollar}`);

// Also check for <p>$</p> or similar
const dollarParas = html.match(/<p>\s*\$\s*<\/p>/g);
console.log(`<p>$</p> occurrences: ${dollarParas ? dollarParas.length : 0}`);

// Check for $$ in output
const doubleDollarInHtml = html.match(/\$\$/g);
console.log(`"$$" in HTML: ${doubleDollarInHtml ? doubleDollarInHtml.length : 0}`);

// Show all katex-display blocks
const displayBlocks = html.match(/class="katex-display"/g);
console.log(`katex-display blocks: ${displayBlocks ? displayBlocks.length : 0}`);

// Show math nodes from remark-math AST
const mdast = unified()
  .use(remarkParse)
  .use(remarkMath)
  .use(remarkGfm)
  .parse(step7);

let mathFlowCount = 0;
let mathInlineCount = 0;
function walk(node) {
  if (node.type === "math") mathFlowCount++;
  if (node.type === "inlineMath") mathInlineCount++;
  if (node.children) node.children.forEach(walk);
}
walk(mdast);
console.log(`\nMath flow nodes (display $$): ${mathFlowCount}`);
console.log(`Math inline nodes ($): ${mathInlineCount}`);

// Print the first 3000 chars of HTML to inspect
console.log("\n=== HTML OUTPUT (first 3000 chars) ===");
console.log(html.substring(0, 3000));
