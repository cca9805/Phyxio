import { useMemo, useState, useEffect, Suspense, lazy, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import yaml from "js-yaml";

import CalculatorV2 from "../components/CalculatorV2.jsx";
import { SvgBlock, loadSvgConfigByLeafRelPath } from "../components/graphs_shared/svg2/index.js";

// Importar el mapa (para icons/nombres en prerequisitos)
import phyxioMapYaml from "../map/phyxio-map.yaml?raw";

// ============================================
// GRÁFICOS - Barrel Exports
// ============================================

// Gráficos (contrato): el index exporta { graphs }
import { graphs as cinematicaGraphs } from "../components/graphs/cinematica/index.js";
import { graphs as dinamicaGraphs } from "../components/graphs/dinamica/index.js";
import { graphs as trabajoEnergiaGraphs } from "../components/graphs/trabajo-y-energia/index.js";
import { graphs as cantidadMovimientoGraphs } from "../components/graphs/cantidad-de-movimiento/index.js";
import { graphs as gravitacionGraphs } from "../components/graphs/gravitacion/index.js";
import { graphs as oscilacionesGraphs } from "../components/graphs/oscilaciones/index.js";
import { graphs as fluidosGraphs } from "../components/graphs/fluidos/index.js";
import { graphs as mecanicaAnaliticaGraphs } from "../components/graphs/mecanica-analitica/index.js";
import { graphs as ondasGraphs } from "../components/graphs/ondas/index.js";

const MarkdownRenderer = lazy(() => import("../../components/MarkdownRenderer.jsx"));
const MarkdownLoading = () => <div className="p-3">Cargando contenido…</div>;

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

function normalizeDoc(doc) {
  if (!doc) return null;
  if (doc?.default && typeof doc.default === "object") return doc.default;
  return doc;
}

// ============================================
// GRÁFICOS - Resolver por motionId (sin ternarios gigantes)
// ============================================

// Alias de motionId (cuando el contenido real es el mismo)
const motionIdAliases = {
  "rodadura-cinematica-sin-deslizamiento": "rodadura-sin-deslizamiento",
  // si aparece el typo histórico:
  "diagramas-decuerpo-libre": "diagramas-cuerpo-libre",
};

// ============================================
// DEFAULT_MOTION_PARAMS (LaTeX) – mantenido por compatibilidad.
// OJO: NO es estado numérico compartido.
// ============================================
const DEFAULT_MOTION_PARAMS = {
  dt: "\\Delta t",
  dx: "\\Delta x",
  dy: "\\Delta y",
  dz: "\\Delta z",
  dr: "\\Delta r",
  dtheta: "\\Delta \\theta",
  dphi: "\\Delta \\varphi",

  x0: "x_0",
  y0: "y_0",
  z0: "z_0",
  r0: "r_0",
  t0: "t_0",
  v0: "v_0",
  vx0: "v_{x0}",
  vy0: "v_{y0}",
  vz0: "v_{z0}",
  a0: "a_0",
  ax0: "a_{x0}",
  ay0: "a_{y0}",
  az0: "a_{z0}",

  t: "t",
  x: "x",
  y: "y",
  z: "z",
  r: "r",
  s: "s",
  v: "v",
  a: "a",
  vx: "v_x",
  vy: "v_y",
  vz: "v_z",
  ax: "a_x",
  ay: "a_y",
  az: "a_z",

  theta: "\\theta",
  phi: "\\varphi",

  g: "g",

  omega: "\\omega",
  alpha: "\\alpha",
  thetaAng: "\\theta",
  w: "\\omega",
  R: "R",

  F: "F",
  Fx: "F_x",
  Fy: "F_y",
  Fz: "F_z",

  m: "m",
};

export default function V2LeafTabs({
  meta,
  teoria,
  modelos,
  errores,
  ejemplos,
  formulasDoc,
  magnitudesDoc,
  aplicaciones,
  historia,
}) {
  const motionId = meta?.id;

  // ---------------------------
  // SVG v2 (config desde data_v2/.../graphs/svg.config.js)
  // ---------------------------
  const [svg2Config, setSvg2Config] = useState(null);
  const [svg2Err, setSvg2Err] = useState("");
  const leafRelPath = meta?.ruta_relativa;

  useEffect(() => {
    let alive = true;
    setSvg2Config(null);
    setSvg2Err("");

    if (!leafRelPath) return;

    loadSvgConfigByLeafRelPath(leafRelPath)
      .then((cfg) => {
        if (alive) setSvg2Config(cfg);
      })
      .catch((e) => {
        // Silencioso si no existe. Guardamos el mensaje solo para depurar.
        if (alive) setSvg2Err(String(e?.message ?? e));
        if (alive) setSvg2Config(null);
      });

    return () => {
      alive = false;
    };
  }, [leafRelPath]);

  // ---------------------------
  // Normalización de docs
  // ---------------------------
  const normFormulasDoc = useMemo(() => {
    const doc = normalizeDoc(formulasDoc);
    if (!doc) return null;
    if (Array.isArray(doc)) return { formulas: doc };
    if (Array.isArray(doc?.formulas)) return doc;
    if (Array.isArray(doc?.default?.formulas)) return doc.default;
    return doc;
  }, [formulasDoc]);

  const normMagnitudesDoc = useMemo(() => {
    const doc = normalizeDoc(magnitudesDoc);
    if (!doc) return null;
    if (Array.isArray(doc)) return { magnitudes: doc };
    if (Array.isArray(doc?.magnitudes)) return doc;
    if (Array.isArray(doc?.default?.magnitudes)) return doc.default;
    return doc;
  }, [magnitudesDoc]);

  const hasFormulas =
    !!normFormulasDoc &&
    Array.isArray(normFormulasDoc.formulas) &&
    normFormulasDoc.formulas.length > 0;

  const hasLegend =
    !!normMagnitudesDoc &&
    Array.isArray(normMagnitudesDoc.magnitudes) &&
    normMagnitudesDoc.magnitudes.length > 0;

  const hasApps = (aplicaciones || "").trim().length > 0;
  const hasHistory = (historia || "").trim().length > 0;

  const motionKey = useMemo(() => {
    const raw = String(motionId ?? "").trim();
    const clean = raw.split("?")[0].split("#")[0];
    const last = clean.split("/").filter(Boolean).pop() || clean;
    return String(last).trim();
  }, [motionId]);

  const resolvedGraphIdBase = motionIdAliases[motionKey] || motionKey;

  // ---------------------------
  // Gráficas: resolver vistas (desde contrato graphs[id][tipo])
  // ---------------------------
  const ALL_GRAPHS = useMemo(
    () => ({
      ...cinematicaGraphs,
      ...dinamicaGraphs,
      ...trabajoEnergiaGraphs,
      ...cantidadMovimientoGraphs,
      ...gravitacionGraphs,
      ...oscilacionesGraphs,
      ...fluidosGraphs,
      ...mecanicaAnaliticaGraphs,
      ...ondasGraphs,
    }),
    []
  );

  // Resolver id legacy: a veces meta.id y ruta_relativa no coinciden 1:1 con las keys del index de graphs.
  const legacyGraphId = useMemo(() => {
    const cand = [];
    const push = (v) => {
      const s = String(v ?? "").trim().replace(/^\/+|\/+$/g, "");
      if (!s) return;
      if (!cand.includes(s)) cand.push(s);
    };

    // 0) ruta completa (evita colisiones de id entre nodos distintos)
    if (leafRelPath) push(leafRelPath);

    // 1) lo normal
    push(resolvedGraphIdBase);

    // 2) fallback: último segmento de la ruta_relativa (suele ser el id real del leaf)
    if (leafRelPath) {
      const last = String(leafRelPath).split("/").filter(Boolean).pop();
      push(last);
    }

    // 3) a veces llega como "foo/bar/caida-libre"
    if (motionId) {
      const last = String(motionId).split("/").filter(Boolean).pop();
      push(last);
    }

    // elegimos el primero que exista en ALL_GRAPHS
    for (const id of cand) {
      if (ALL_GRAPHS?.[id]) return id;
    }
    return resolvedGraphIdBase;
  }, [ALL_GRAPHS, resolvedGraphIdBase, leafRelPath, motionId]);

  const graphEntry = ALL_GRAPHS?.[legacyGraphId]; // { Coord, Svg, Dcl } | undefined

  const typeOrder = ["Coord", "Svg", "Dcl"];
  const typeLabel = {
    Coord: "Coordenadas",
    Svg: "SVG",
    Dcl: "Vectorial (DCL)",
  };

  const views = useMemo(() => {
    const out = [];

    // 1) SVG v2 (data_v2/.../graphs/svg.config.js)
    if (svg2Config) {
      out.push({
        id: "svg2",
        label: "SVG",
        Comp: () => (
          <SvgBlock
            config={svg2Config}
            externalParams={motionParams}
            onExternalParamsChange={updateMotion}
          />
        ),
      });
    }

    // 2) Legacy (Coord / Svg / Dcl) desde graphs/*/index.js
    if (graphEntry && typeof graphEntry === "object") {
      for (const t of typeOrder) {
        // si ya hay svg2, ocultamos svg legacy (para no duplicar "SVG")
        if (t === "Svg" && svg2Config) continue;

        const Comp = graphEntry[t];
        if (typeof Comp === "function") {
          out.push({
            id: t.toLowerCase(), // coord | svg | dcl
            label: typeLabel[t] || t,
            Comp,
          });
        }
      }
    }

    return out;
  }, [graphEntry, svg2Config]);

  const [graphViewId, setGraphViewId] = useState(() => views[0]?.id || "coord");

  // Si cambia el tema o cambian las vistas disponibles:
  // - mantenemos la vista actual si sigue existiendo
  // - si no existe, ponemos la primera disponible
  useEffect(() => {
    if (!views.length) return;
    if (views.some((v) => v.id === graphViewId)) return;
    setGraphViewId(views[0].id);
  }, [legacyGraphId, views, graphViewId]);

  const hasGraphs = views.length > 0;
  const showSelector = views.length > 1;

  const hasPrerequisites =
    Array.isArray(meta?.prerequisitos) && meta.prerequisitos.length > 0;

  // Estado compartido con la calculadora y gráficos (valores numéricos)
  const [motionParams, setMotionParams] = useState({});
  const updateMotion = useCallback((patch) => {
    setMotionParams((p) => ({ ...p, ...patch }));
  }, []);

  const tabs = useMemo(() => {
    const base = [];

    if (hasPrerequisites)
      base.push({ id: "prerequisitos", label: "📋 Prerequisitos" });

    base.push(
      { id: "teoria", label: "📘 Teoría" },
      { id: "modelos", label: "🧩 Modelo y validez" },
      { id: "errores", label: "⚠️ Errores comunes" },
      { id: "ejemplos", label: "📝 Ejemplos" }
    );

    if (hasFormulas)
      base.splice(hasPrerequisites ? 2 : 1, 0, {
        id: "calculadora",
        label: "🧮 Calculadora",
      });
    if (hasLegend)
      base.splice(hasPrerequisites ? 3 : 2, 0, {
        id: "leyenda",
        label: "📚 Leyenda",
      });

    if (hasApps) base.push({ id: "aplicaciones", label: "🏗️ Aplicaciones" });
    if (hasHistory) base.push({ id: "historia", label: "📖 Historia" });
    base.push({ id: "graficas", label: "📈 Gráficas" });

    base.push({ id: "practica", label: "🎯 Práctica" });
    return base;
  }, [hasPrerequisites, hasFormulas, hasLegend, hasApps, hasHistory]);

  const [searchParams, setSearchParams] = useSearchParams();
  const validTabs = useMemo(() => tabs.map((t) => t.id), [tabs]);
  const tabFromUrl = searchParams.get("tab");
  const tab = validTabs.includes(tabFromUrl) ? tabFromUrl : "teoria";
  const setTab = useCallback(
    (nextTab) => {
      const safeTab = validTabs.includes(nextTab) ? nextTab : "teoria";
      const next = new URLSearchParams(searchParams);
      next.set("tab", safeTab);
      setSearchParams(next, { replace: true });
    },
    [searchParams, setSearchParams, validTabs]
  );

  const renderMarkdown = (src) => (
    <Suspense fallback={<MarkdownLoading />}>
      <MarkdownRenderer
        source={normalizeMath(src || "*(Sin contenido aún)*")}
        magnitudesDoc={magnitudesDoc}
      />
    </Suspense>
  );

  const legendMarkdown = useMemo(() => {
    if (!hasLegend) return "";
    const lines = [];
    lines.push("# Leyenda de variables\n");
    for (const m of normMagnitudesDoc.magnitudes) {
      const sym = m.symbol ? `$${m.symbol}$` : `\`${m.id}\``;
      const nombre = (m.nombre || m.name || m.id || "")
        .replace(/_/g, " ")
        .trim();
      const unidad = m.unidad_si || m.si_unit || "";
      const desc = m.descripcion || m.description || "";
      lines.push(
        `- **${sym}** — **${nombre || m.id}**${
          unidad ? ` (${unidad})` : ""
        }${desc ? `: ${desc}` : ""}`
      );
    }
    return lines.join("\n");
  }, [hasLegend, normMagnitudesDoc]);

  const graphProps = (p, onSharedParamsChange) => ({
    params: p,
    sharedParams: p,  // ✅ Agregar sharedParams
    paramsFromCalculator: p,
    onSharedParamsChange,
    leafRelPath: meta?.ruta_relativa,
    formulasDoc: normFormulasDoc,
    magnitudesDoc: normMagnitudesDoc,
  });

  const SHOW_DEBUG = false;


  return (
    <div className="v2-leaf">
      <div className="v2-header">
        <div className="v2-header-content">
          <div className="v2-header-main">
            <h1 className="v2-title">{meta?.nombre || "Tema"}</h1>
            {meta?.descripcion_corta ? (
              <p className="v2-subtitle">{meta.descripcion_corta}</p>
            ) : null}
          </div>

          <div className="v2-header-meta">
            {Array.isArray(meta?.niveles) && meta.niveles.length > 0 && (
              <div className="v2-meta-item">
                <div className="v2-meta-icon">🎓</div>
                <div className="v2-meta-content">
                  <div className="v2-meta-label">Nivel de estudio</div>
                  <div className="v2-meta-value">
                    {meta.niveles.join(", ")}
                  </div>
                </div>
              </div>
            )}

            {meta?.tiempo_estimado_min != null && (
              <div className="v2-meta-item">
                <div className="v2-meta-icon">⏱️</div>
                <div className="v2-meta-content">
                  <div className="v2-meta-label">Tiempo estimado</div>
                  <div className="v2-meta-value">{meta.tiempo_estimado_min} min</div>
                </div>
              </div>
            )}

            {meta?.dificultad != null && (
              <div className="v2-meta-item">
                <div className="v2-meta-icon">⭐</div>
                <div className="v2-meta-content">
                  <div className="v2-meta-label">Dificultad</div>
                  <div className="v2-meta-value">
                    {meta.dificultad}/5
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="v2-tabs">
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

      <div className="v2-panel">
        {tab === "prerequisitos" && hasPrerequisites && (
          <PrerequisitesTab prerequisites={meta.prerequisitos} />
        )}

        {tab === "teoria" && renderMarkdown(teoria)}
        {tab === "modelos" && renderMarkdown(modelos)}
        {tab === "errores" && renderMarkdown(errores)}
        {tab === "ejemplos" && renderMarkdown(ejemplos)}

        {tab === "leyenda" && hasLegend && renderMarkdown(legendMarkdown)}

        {tab === "calculadora" && hasFormulas && (
          <CalculatorV2
            formulasDoc={normFormulasDoc}
            magnitudesDoc={normMagnitudesDoc}
            sharedParams={hasGraphs ? motionParams : undefined}
            onSharedParamsChange={hasGraphs ? updateMotion : undefined}
          />
        )}

        {tab === "aplicaciones" && hasApps && renderMarkdown(aplicaciones)}
        {tab === "historia" && hasHistory && renderMarkdown(historia)}
        {tab === "practica" && <PracticePlaceholder />}

        {tab === "graficas" &&
          (() => {
            if (!hasGraphs) return <GraphicsPlaceholder />;

            const activeView =
              views.find((v) => v.id === graphViewId) || views[0];
            const ActiveGraph = activeView?.Comp;

            return (
              <div style={{ display: "grid", gap: 12 }}>
                {showSelector && (
                  <div
                    className="v2-card"
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <div style={{ fontWeight: 600 }}>Vista</div>
                    <select
                      className="form-control"
                      value={graphViewId}
                      onChange={(e) => setGraphViewId(e.target.value)}
                      style={{ maxWidth: 340 }}
                    >
                      {views.map((v) => (
                        <option key={v.id} value={v.id}>
                          {v.label}
                        </option>
                      ))}
                    </select>

                    <div className="muted" style={{ fontSize: 12 }}>
                      {legacyGraphId}
                    </div>
                  </div>
                )}

                <div className="v2-card">
                  <div style={{ display: "grid", gap: 8 }}>
                    {SHOW_DEBUG && svg2Err ? (
                      <div className="muted p-0" style={{ fontSize: 12 }}>
                        SVG2 err: {svg2Err}
                      </div>
                    ) : null}


                    {ActiveGraph ? (
                      <ActiveGraph {...graphProps(motionParams, updateMotion)} />
                    ) : (
                      <GraphicsPlaceholder />
                    )}
                  </div>
                </div>
              </div>
            );
          })()}
      </div>
    </div>
  );
}

// ============================
// UI placeholders
// ============================

function GraphicsPlaceholder() {
  return (
    <div className="v2-card">
      <div style={{ fontWeight: 700, marginBottom: 6 }}>Gráficas</div>
      <div className="muted">
        Este tema todavía no tiene gráficas asociadas (Coord / SVG / DCL).
      </div>
    </div>
  );
}

function PracticePlaceholder() {
  return (
    <div className="v2-card">
      <div style={{ fontWeight: 700, marginBottom: 6 }}>Práctica</div>
      <div className="muted">
        Aquí se integrará el motor de ejercicios (parametrizados, pasos, etc.).
      </div>
    </div>
  );
}

// ============================================
// Prerequisitos
// ============================================

function PrerequisitesTab({ prerequisites }) {
  const map = useMemo(() => {
    try {
      const obj = yaml.load(phyxioMapYaml);
      return buildIndexFromMap(obj);
    } catch {
      return {};
    }
  }, []);

  return (
    <div className="v2-card">
      <div style={{ fontWeight: 700, marginBottom: 6 }}>Prerequisitos</div>
      <div className="muted" style={{ marginBottom: 10 }}>
        Temas recomendados antes de entrar aquí:
      </div>

      <div style={{ display: "grid", gap: 8 }}>
        {prerequisites.map((p) => {
          const raw =
            typeof p === "string"
              ? p
              : p?.ruta_relativa || p?.path || p?.id || JSON.stringify(p);
          const info = resolvePrereqInfo(map, p) || {};
          const title = info.title || raw;
          const target = info.path
            ? `/v2/${String(info.path).replace(/^\/+|\/+$/g, "")}?tab=teoria`
            : "";

          if (target) {
            return (
              <Link
                key={raw}
                to={target}
                className="v2-card"
                style={{
                  padding: 12,
                  display: "grid",
                  gap: 4,
                  textDecoration: "none",
                  color: "inherit",
                }}
                title={`Ir a ${title}`}
              >
                <div style={{ fontWeight: 700 }}>
                  {info.icon ? `${info.icon} ` : ""}
                  {title}
                </div>
                <div className="muted" style={{ fontSize: 12 }}>
                  {info.path}
                </div>
              </Link>
            );
          }

          return (
            <div
              key={raw}
              className="v2-card"
              style={{ padding: 12, display: "grid", gap: 4 }}
            >
              <div style={{ fontWeight: 700 }}>
                {info.icon ? `${info.icon} ` : ""}
                {title}
              </div>
              {info.path ? (
                <div className="muted" style={{ fontSize: 12 }}>
                  {info.path}
                </div>
              ) : (
                <div className="muted" style={{ fontSize: 12 }}>
                  (No encontrado en el mapa)
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function buildIndexFromMap(root) {
  const index = {};
  const entries = [];
  const norm = (s) => String(s ?? "").trim().replace(/^\/+|\/+$/g, "");
  const add = (k, info) => {
    const key = norm(k);
    if (!key) return;
    if (!index[key]) index[key] = info;
  };

  const walk = (node, parentPath = "", parentIdPath = "") => {
    if (!node) return;
    if (Array.isArray(node)) {
      for (const n of node) walk(n, parentPath, parentIdPath);
      return;
    }

    // Contenedor de mapa (ej. { root: {...} })
    if (!node?.id && node?.root && typeof node.root === "object") {
      walk(node.root, parentPath, parentIdPath);
      return;
    }

    const title = node?.nombre || node?.title || node?.id || "";
    const icon = node?.icon || node?.emoji || "";
    const path = node?.ruta_relativa || node?.link || node?.ruta || parentPath || "";
    const id = String(node?.id || "").trim();
    const idPath = id ? [parentIdPath, id].filter(Boolean).join("/") : parentIdPath;
    const info = { title, icon, path: norm(path), id, idPath: norm(idPath) };

    if (id) add(id, info);
    if (idPath) add(idPath, info);
    if (path) add(path, info);
    if (id || path) entries.push(info);

    const children = node?.children || node?.hijos || [];
    if (Array.isArray(children)) {
      for (const c of children) walk(c, path, idPath);
    }
  };

  walk(root?.root ?? root, "");
  index.__entries = entries;
  return index;
}

function resolvePrereqInfo(index, prereqRaw) {
  const norm = (s) => String(s ?? "").trim().replace(/^\/+|\/+$/g, "");
  const slugTokens = (s) =>
    norm(s)
      .toLowerCase()
      .split(/[\/\-_]+/)
      .filter((t) => t && t.length > 2);

  const raw =
    typeof prereqRaw === "string"
      ? prereqRaw
      : prereqRaw?.ruta_relativa || prereqRaw?.path || prereqRaw?.id || "";
  const p = norm(raw);
  if (!p) return null;

  const candidates = [
    p,
    p.replace(/^fisica-clasica\//, ""),
    p.replace(/^mecanica\//, ""),
    p.split("/").filter(Boolean).pop() || "",
  ].filter(Boolean);

  for (const c of candidates) {
    if (index[c]) return index[c];
  }

  // Fallback tolerante: busca por similitud de slug/ruta para soportar prerequisitos legacy.
  const targetLast = p.split("/").filter(Boolean).pop() || "";
  const targetTokens = new Set(slugTokens(p));
  let best = null;
  let bestScore = -1;

  for (const e of index.__entries || []) {
    const key = `${e?.path || ""}/${e?.id || ""}/${e?.idPath || ""}`;
    const eTokens = slugTokens(key);
    if (!eTokens.length) continue;

    let score = 0;
    if (e.id === targetLast) score += 120;
    if (e.idPath && norm(e.idPath).endsWith(targetLast)) score += 100;
    if (e.path && norm(e.path).endsWith(targetLast)) score += 90;

    for (const t of eTokens) {
      if (targetTokens.has(t)) score += 8;
    }

    if (score > bestScore) {
      bestScore = score;
      best = e;
    }
  }

  if (bestScore >= 16) return best;
  return null;
}

// ============================================
// Normalización de LaTeX (ayuda a que el MarkdownRenderer detecte fórmulas)
// ============================================

function normalizeMath(md = "") {
  // Convierte \( ... \) y \[ ... \] a $...$ / $$...$$
  md = String(md);
  md = md.replace(/\\\((.+?)\\\)/gs, (_, expr) => `$${expr.trim()}$`);
  md = md.replace(
    /\\\[(.+?)\\\]/gs,
    (_, expr) => `$$\n${String(expr).trim()}\n$$`
  );

  // Convierte [ ... ] con contenido matemático típico en $...$
  md = md.replace(
    /\[\s*([^\[\]\n]*?(\\frac|\\Delta|\\cdot|\\sqrt|=)[^\[\]\n]*?)\s*\]/g,
    (_, expr) => `$${expr.trim()}$`
  );
  return md;
}
