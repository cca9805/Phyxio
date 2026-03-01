import React, { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import katex from "katex";
import "katex/dist/katex.min.css";

// [[theta]] -> [theta](var:theta)
function preprocessVariableHints(src) {
  if (!src) return "";
  return src.replace(/\[\[([a-zA-Z0-9_-]+)\]\]/g, (_, id) => `[${id}](var:${id})`);
}

function buildMagnitudesMap(magnitudesDoc) {
  const list =
    (Array.isArray(magnitudesDoc?.magnitudes) && magnitudesDoc.magnitudes) ||
    (Array.isArray(magnitudesDoc) && magnitudesDoc) ||
    (Array.isArray(magnitudesDoc?.default?.magnitudes) && magnitudesDoc.default.magnitudes) ||
    [];

  const map = new Map();
  for (const m of list) {
    if (!m?.id) continue;
    map.set(String(m.id), m);
  }
  return map;
}

function renderInlineLatex(expr) {
  try {
    const html = katex.renderToString(expr, {
      displayMode: false,
      throwOnError: false,
      strict: "ignore",
    });
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  } catch {
    return <span>{expr}</span>;
  }
}

function VariableHint({ id, mag }) {
  const sym = mag?.symbol || id;
  const nombreRaw = mag?.nombre || mag?.name || id;
  const nombre = String(nombreRaw).replace(/_/g, " ").trim();
  const nombrePretty = nombre ? nombre.charAt(0).toUpperCase() + nombre.slice(1) : id;
  const unit = mag?.unidad_si || mag?.si_unit || "";
  const desc = mag?.descripcion || mag?.description || "";

  return (
    <span
      className="v2-varhint"
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "baseline",
        gap: 6,
        padding: "0 3px",
        borderRadius: 6,
        cursor: "help",
        borderBottom: "1px dotted rgba(255,255,255,0.35)",
      }}
    >
      <span style={{ fontWeight: 800 }}>{renderInlineLatex(sym)}</span>

      <span
        className="v2-varhint-tip"
        style={{
          position: "absolute",
          left: 0,
          top: "100%",
          marginTop: 8,
          zIndex: 50,
          minWidth: 220,
          maxWidth: 360,
          padding: "10px 12px",
          borderRadius: 12,
          border: "1px solid rgba(255,255,255,0.10)",
          background: "rgba(20,20,22,0.96)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
          opacity: 0,
          transform: "translateY(-4px)",
          pointerEvents: "none",
          transition: "opacity 120ms ease, transform 120ms ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
          <div style={{ fontWeight: 900, fontSize: 14 }}>{nombrePretty}</div>
          <div className="muted" style={{ fontSize: 13 }}>
            {renderInlineLatex(sym)}
          </div>
          {unit ? (
            <div className="muted" style={{ fontSize: 13 }}>
              {unit}
            </div>
          ) : null}
          <div className="muted" style={{ fontSize: 12 }}>
            {id}
          </div>
        </div>

        {desc ? (
          <div className="muted" style={{ fontSize: 13, lineHeight: 1.35, marginTop: 6 }}>
            {desc}
          </div>
        ) : null}
      </span>

      <style>{`
        .v2-varhint:hover .v2-varhint-tip {
          opacity: 1 !important;
          transform: translateY(0) !important;
          pointer-events: auto !important;
        }
      `}</style>
    </span>
  );
}

export default function MarkdownRenderer({
  source = "",
  tag: Wrapper = "div",
  className = "",
  magnitudesDoc = null, // 👈 NUEVO
}) {
  if (!source) {
    return <div className="markdown-empty">No hay contenido disponible.</div>;
  }

  const magsMap = useMemo(() => buildMagnitudesMap(magnitudesDoc), [magnitudesDoc]);
  const processed = useMemo(() => preprocessVariableHints(source), [source]);

  const components = useMemo(
    () => ({
      a: ({ href, children }) => {
        if (typeof href === "string" && href.startsWith("var:")) {
          const id = href.slice(4);
          const mag = magsMap.get(String(id));
          // 👇 OJO: devolvemos un SPAN, no un <a>, así que NO navega
          return <VariableHint id={id} mag={mag} />;
        }

        return (
          <a href={href} target="_blank" rel="noreferrer">
            {children}
          </a>
        );
      },
    }),
    [magsMap]
  );

  const content = (
    <ReactMarkdown
      children={processed}
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={components}
    />
  );

  return Wrapper ? (
    <Wrapper className={className || "markdown-content"}>{content}</Wrapper>
  ) : (
    content
  );
}
