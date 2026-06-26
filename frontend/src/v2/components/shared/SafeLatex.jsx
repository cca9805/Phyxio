import React from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

const DELIMITERS = [
  { left: "$$", right: "$$", display: true },
  { left: "\\[", right: "\\]", display: true },
  { left: "\\(", right: "\\)", display: false },
  { left: "$", right: "$", display: false },
];

function renderMath(source, displayMode) {
  try {
    return katex.renderToString(String(source ?? ""), {
      displayMode,
      throwOnError: false,
      strict: false,
    });
  } catch {
    return "";
  }
}

function looksLikeBareLatex(text) {
  const value = String(text ?? "").trim();
  if (!value) return false;
  if (/\s/.test(value) && !/[\\_^{}]/.test(value)) return false;
  return /\\[a-zA-Z]+|[_^{}=]|[α-ωΑ-Ω]/.test(value);
}

function findNextDelimiter(text, fromIndex) {
  let best = null;
  for (const delimiter of DELIMITERS) {
    const index = text.indexOf(delimiter.left, fromIndex);
    if (index < 0) continue;
    if (!best || index < best.index) best = { ...delimiter, index };
  }
  return best;
}

function parseLatexText(text) {
  const source = String(text ?? "");
  const parts = [];
  let index = 0;

  while (index < source.length) {
    const next = findNextDelimiter(source, index);
    if (!next) {
      parts.push({ type: "text", value: source.slice(index) });
      break;
    }

    if (next.index > index) {
      parts.push({ type: "text", value: source.slice(index, next.index) });
    }

    const contentStart = next.index + next.left.length;
    const contentEnd = source.indexOf(next.right, contentStart);
    if (contentEnd < 0) {
      parts.push({ type: "text", value: source.slice(next.index) });
      break;
    }

    parts.push({
      type: "math",
      value: source.slice(contentStart, contentEnd),
      display: next.display,
    });
    index = contentEnd + next.right.length;
  }

  return parts;
}

export default function SafeLatex({ children, className = "" }) {
  const source = Array.isArray(children) ? children.join("") : String(children ?? "");
  const parts = parseLatexText(source);
  const hasDelimitedMath = parts.some((part) => part.type === "math");

  if (!hasDelimitedMath && looksLikeBareLatex(source)) {
    const html = renderMath(source, false);
    if (html) {
      return (
        <span
          className={className}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    }
  }

  return (
    <>
      {parts.map((part, index) => {
        if (part.type !== "math") return <React.Fragment key={index}>{part.value}</React.Fragment>;
        const html = renderMath(part.value, part.display);
        if (!html) return <React.Fragment key={index}>{part.value}</React.Fragment>;
        const Tag = part.display ? "div" : "span";
        return (
          <Tag
            key={index}
            className={className}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      })}
    </>
  );
}
