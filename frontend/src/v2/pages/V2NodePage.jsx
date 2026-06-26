import { useMemo, useState, useEffect, Suspense, lazy } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getIconPath, ICON_PATHS } from "../config/iconPaths";
import yaml from "js-yaml";
import { getUiLanguage, tr } from "../utils/uiLanguage";
import phyxioMapYaml from "../map/phyxio-map.yaml?raw";

// Igual que en V2LeafTabs.jsx
const MarkdownRenderer = lazy(() => import("../../components/MarkdownRenderer"));
const MarkdownLoading = ({ lang }) => (
  <div className="p-3">{tr(lang, "Cargando contenido...", "Loading content...")}</div>
);


const LEVELS = [
  { key: "ESO", letter: "E", className: "bg-blue-500" },
  { key: "BACHILLERATO", letter: "B", className: "bg-green-500" },
  { key: "UNIVERSIDAD", letter: "U", className: "bg-orange-500" },
  { key: "EXTRACURRICULAR", letter: "X", className: "bg-red-500" },
];


function LevelBadges({ niveles = [] }) {
  if (!Array.isArray(niveles) || !niveles.length) return null;

  return (
    <div
      className="v2-level-badges"
      title={niveles.join(" · ")}
    >
      {LEVELS.filter((l) => niveles.includes(l.key)).map((l) => (
        <span
          key={l.key}
          className={`v2-level-badge ${l.className}`}
        >
          {l.letter}
        </span>
      ))}
    </div>
  );
}


function TabButton({ active, onClick, children }) {
  return (
    <button
      className={`v2-tab ${active ? "active" : ""}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default function V2NodePage({
  title,
  subtitle,
  description, // overview.md cargado como string (o descripción corta)
  children = [],
  basePath = "",
}) {
  const lang = getUiLanguage();
  const location = useLocation();
  const { sections } = useMemo(
    () => splitOverviewMd(description || ""),
    [description]
  );
  const normalizedSections = useMemo(
    () => normalizeOverviewSections(sections, description || "", lang),
    [sections, description, lang]
  );

  // ✅ Construye tabs reales a partir del md (antes 'tabs' no existía y rompía todo)
  const tabs = useMemo(() => {
    return normalizedSections.map((s) => ({ id: s.id, label: s.label }));
  }, [normalizedSections]);

  const [searchParams, setSearchParams] = useSearchParams();
  const [expandedOverviewSections, setExpandedOverviewSections] = useState(() => new Set());
  const validTabs = useMemo(() => tabs.map((t) => t.id), [tabs]);
  const preferredTabId = useMemo(
    () => (validTabs.includes("idea-general-del-tema") ? "idea-general-del-tema" : validTabs[0] || ""),
    [validTabs]
  );

  const [tab, setTab] = useState(() => preferredTabId);

  // ✅ Si cambian los tabs (porque cambia el markdown), asegura que tab sea válido
  useEffect(() => {
    if (!validTabs.length) return;
    if (!validTabs.includes(tab)) setTab(preferredTabId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validTabs.join("|"), preferredTabId]); // evita bucles por nuevas refs

  // Al cambiar de tema (ruta), abre siempre en "Idea general del tema".
  useEffect(() => {
    if (!preferredTabId) return;
    if (tab !== preferredTabId) setTab(preferredTabId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, preferredTabId]);

  // ✅ Mantén ?tab= sincronizado
  useEffect(() => {
    if (!tab) return;
    const current = searchParams.get("tab");
    if (current !== tab) setSearchParams({ tab }, { replace: true });
  }, [tab, searchParams, setSearchParams]);

  const renderMarkdown = (src) => (
    <Suspense fallback={<MarkdownLoading lang={lang} />}>
      <MarkdownRenderer source={normalizeMath(src || tr(lang, "*(Sin contenido aun)*", "*(No content yet)*"))} lang={lang} />
    </Suspense>
  );

  const activeSection = normalizedSections.find((s) => s.id === tab)?.body || "";
  const activeSectionPreview = useMemo(() => overviewPreviewText(activeSection), [activeSection]);
  const isActiveSectionExpanded = expandedOverviewSections.has(tab);
  const toggleOverviewExpanded = (id) => {
    setExpandedOverviewSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  const handleOverviewPreviewKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleOverviewExpanded(tab);
    }
  };

  return (
    <div className="page-root">
      <V2Breadcrumbs />

      <div className="v2-panel">
        <h1>{title}</h1>
        {subtitle ? (
          <div className="muted" style={{ marginTop: 6 }}>
            {subtitle}
          </div>
        ) : null}

        {/* Tabs estilo final */}
        {tabs.length ? (
          <>
            <div className="v2-tabs" style={{ marginTop: 16 }}>
              {tabs.map((t) => (
                <TabButton
                  key={t.id}
                  active={tab === t.id}
                  onClick={() => setTab(t.id)}
                >
                  {t.label}
                </TabButton>
              ))}
            </div>

            <div className="v2-panel v2-node-overview-card">
              {isActiveSectionExpanded ? (
                <>
                  {renderMarkdown(activeSection)}
                  <div className="v2-node-overview-actions">
                    <button
                      type="button"
                      className="v2-node-overview-toggle"
                      onClick={() => toggleOverviewExpanded(tab)}
                    >
                      {tr(lang, "Ver menos", "Show less")}
                    </button>
                  </div>
                </>
              ) : (
                <div
                  className="v2-node-overview-preview"
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleOverviewExpanded(tab)}
                  onKeyDown={handleOverviewPreviewKeyDown}
                >
                  <div className="v2-node-overview-preview-text">
                    {activeSectionPreview}
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          // Si no hay headings, muestra el texto completo como md
          description ? <div className="v2-panel">{renderMarkdown(description)}</div> : null
        )}

        {/* Grid de hijos */}
        <div className="v2-node-grid">
          {children.map((c) => (
            <Link
              key={c.id}
              to={resolveChildTo(basePath, c?.path || c?.id)}
              className="v2-node-card"
            >
              <LevelBadges niveles={c.niveles} />
              <div className="v2-node-icon">{renderIcon(c.icon, c.id)}</div>
              <div className="v2-node-title">{c.title}</div>
              {c.subtitle ? (
                <div className="v2-node-subtitle">{c.subtitle}</div>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function resolveChildTo(basePath, rawPath) {
  const clean = String(rawPath || "").replace(/^\/+|\/+$/g, "");
  if (!clean) return String(basePath || "/v2");

  // Si viene una ruta_relativa completa del mapa, navegar de forma absoluta.
  if (clean.includes("/")) return `/v2/${clean}`.replace(/\/+/g, "/");

  return `${basePath}/${clean}`.replace(/\/+/g, "/");
}

/* ====== Parse del overview.md: # ... (opcional) + secciones ## ... ====== */
function splitOverviewMd(md) {
  const raw = stripMdHeader(String(md || "")).trim();
  if (!raw) return { intro: "", sections: [] };

  const lines = raw.split("\n");
  const sections = [];
  let intro = [];
  let current = null;

  const push = () => {
    if (!current) return;
    sections.push({
      id: current.id,
      label: current.labelWithEmoji,
      body: current.body.join("\n").trim(),
    });
    current = null;
  };

  for (const line of lines) {
    const m = line.match(/^##\s+(.*)\s*$/);
    if (m) {
      push();
      const label = m[1].trim();
      current = {
        id: slugify(label),
        labelWithEmoji: decorateLabel(label),
        body: [],
      };
    } else {
      if (current) current.body.push(line);
      else intro.push(line);
    }
  }
  push();

  let introText = intro.join("\n").trim();
  if (introText && sections.length) {
    // Sin tab "Resumen": integramos la introduccion en la primera seccion.
    sections[0].body = `${introText}\n\n${sections[0].body}`.trim();
    introText = "";
  }

  return { intro: introText, sections };
}

function normalizeOverviewSections(sections = [], description = "", lang = "es") {
  const out = Array.isArray(sections) ? sections.map((s) => ({ ...s })) : [];

  // ✅ Si ya existen secciones (estilo Nivel 5), las devolvemos tal cual (sin duplicar ni recortar)
  if (out.length > 0) {
    return out;
  }

  // ✅ Solo si NO hay secciones, inyectamos la pestaña "Idea general" con el resumen (fallback)
  const ideaLabel = tr(lang, "Idea general del tema", "General idea of the topic");
  const fallback = trimToMaxNonEmptyLines(description, 3);

  if (!fallback) return [];

  return [
    {
      id: "idea-general-del-tema",
      label: decorateLabel(ideaLabel),
      body: fallback,
    },
  ];
}

function trimToMaxNonEmptyLines(text, maxLines = 3) {
  return String(text || "")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .slice(0, maxLines)
    .join("\n");
}

function stripMdHeader(md) {
  return md.replace(/^#.*\n+/, "");
}

function slugify(s) {
  return String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Emojis ligeros (solo etiqueta, el contenido sigue siendo 100% md)
function decorateLabel(label) {
  return label;
}

/* ===== Igual que tu V2LeafTabs: normalización de LaTeX ===== */
function normalizeMath(md) {
  if (!md) return "";

  // Proteger bloques $$...$$ para que no sean procesados por las reglas inline
  const displayBlocks = [];
  md = md.replace(/\$\$[\s\S]*?\$\$/g, (match) => {
    const idx = displayBlocks.length;
    displayBlocks.push(match);
    return `\x00DBLOCK${idx}\x00`;
  });

  md = md.replace(/\\\[(.+?)\\\]/gs, (_, expr) => `$$${expr.trim()}$$`);
  md = md.replace(/\\\((.+?)\\\)/gs, (_, expr) => `$${expr.trim()}$`);
  md = md.replace(
    /\[\s*([^\[\]\n]*?(\\frac|\\Delta|\\cdot|\\sqrt|=)[^\[\]\n]*?)\s*\]/g,
    (_, expr) => `$${expr.trim()}$`
  );
  md = md.replace(
    /\(\s*(\\(Delta|frac|cdot|sqrt)[\s\S]*?)\)/g,
    (_, expr) => `($${expr.trim()}$)`
  );

  // Restaurar bloques $$...$$ protegidos
  // Usar función para evitar que String.replace() interprete $$ como patrón de escape
  displayBlocks.forEach((block, idx) => {
    md = md.replace(`\x00DBLOCK${idx}\x00`, () => block);
  });

  return md;
}

/* ===== Breadcrumbs e iconos: conserva los tuyos ===== */
function buildMapPathIndex(mapObj) {
  const out = new Map();
  const norm = (p) => String(p || "").replace(/^\/+|\/+$/g, "");

  const walk = (node) => {
    if (!node || typeof node !== "object") return;
    const rel = norm(node.ruta_relativa);
    if (rel) out.set(rel, node);
    const kids = Array.isArray(node.children) ? node.children : [];
    for (const child of kids) walk(child);
  };

  const root = mapObj?.root && !Array.isArray(mapObj.root) ? mapObj.root : null;
  if (root) walk(root);
  return out;
}

function V2Breadcrumbs() {
  const lang = getUiLanguage();
  const location = useLocation();
  const mapPathIndex = useMemo(() => {
    try {
      const parsed = yaml.load(phyxioMapYaml);
      return buildMapPathIndex(parsed || {});
    } catch {
      return new Map();
    }
  }, []);

  const parts = location.pathname.split("/").filter(Boolean);
  const v2Index = parts.indexOf("v2");
  const segs = v2Index >= 0 ? parts.slice(v2Index + 1) : [];
  const crumbs = [{ label: "V2", to: "/v2" }].concat(
    segs.map((seg, i) => {
      const rel = segs.slice(0, i + 1).join("/");
      const node = mapPathIndex.get(rel);
      const mapLabel =
        lang === "en"
          ? node?.titulo_en || node?.title_en || node?.titulo || node?.title || ""
          : node?.titulo || node?.title || node?.nombre || "";

      return {
        label: mapLabel || humanize(seg),
        to: "/v2/" + rel,
      };
    })
  );

  return (
    <div style={{ marginBottom: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
      {crumbs.map((c, idx) => (
        <Link key={idx} to={c.to} className="btn btn-light btn-sm">
          {c.label}
        </Link>
      ))}
    </div>
  );
}

function humanize(id) {
  return String(id || "")
    .replace(/[-_]+/g, " ")
    .split(" ")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

function overviewPreviewText(md) {
  return String(md || "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/\$\$[\s\S]*?\$\$/g, " ")
    .replace(/\$([^$]+)\$/g, "$1")
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, "$1")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/^#+\s+/gm, "")
    .replace(/^[-*+]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "")
    .replace(/[*_`>#]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
/*
function renderIcon(iconKey, fallbackId) {
  if (iconKey && ICON_PATHS[iconKey]) {
    return (
      <img
        src={getIconPath(iconKey)}
        alt={iconKey}
        className="v2-node-icon-img"
        draggable={false}
      />
    );
  }
  // fallback (emoji o lo que ya uses)
  return <span className="v2-node-icon-emoji">{fallbackId}</span>;
}
*/

function renderIcon(icon, id) {
  // Use the icon from phyxio-map.yaml directly, no hardcoded overrides
  const val = icon || "📘";
  if (typeof val === "string" && val.startsWith("bi ")) {
    return <i className={val} aria-hidden="true" />;
  }
  return val;
}
