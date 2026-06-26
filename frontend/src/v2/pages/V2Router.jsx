import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, useLocation, Link, Navigate } from "react-router-dom";

import V2NodePage from "./V2NodePage";
import V2LeafPage from "./V2LeafPage";

import { loadV2Overview } from "../utils/indexLoaderV2";
import { getSubtopicV2 } from "../utils/contentLoaderV2";
import { getUiLanguage, tr } from "../utils/uiLanguage";

// Importa Calculadora
import { ToolProvider } from "../context/ToolContext";
import ToolLauncher from "../components/ui/ToolLauncher";
import GlobalToolsLayer from "../components/ui/GlobalToolsLayer";

// Importar herramientas
import Constantes from "../tools/constantes";
import UnitConverter from "../tools/UnitConverter";
import Calculadora from "../tools/Calculadora";

// ✅ Mapa oficial
import yaml from "js-yaml";
import phyxioMapYaml from "../map/phyxio-map.yaml?raw";

async function loadOverviewByRelPath(relPath, options = {}) {
  return await loadV2Overview(relPath, options);
}

function safeLoadMap() {
  try {
    const data = yaml.load(phyxioMapYaml);

    // Compatibilidad: root puede ser array o {children:[...]}
    if (Array.isArray(data?.root)) {
      return {
        ...data,
        root: { id: "phyxio", titulo: "Phyxio", type: "root", children: data.root },
      };
    }
    if (data?.root && Array.isArray(data.root.children)) return data;

    return null;
  } catch (e) {
    console.error("[V2Router] Error cargando phyxio-map.yaml:", e);
    return null;
  }
}

function labelFromId(id) {
  return String(id || "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const EN_TOKEN_MAP = {
  fisica: "physics",
  clasica: "classical",
  moderna: "modern",
  avanzada: "advanced",
  fundamentos: "fundamentals",
  mecanica: "mechanics",
  cinematica: "kinematics",
  dinamica: "dynamics",
  estatica: "statics",
  rotacion: "rotation",
  movimiento: "motion",
  rectilineo: "rectilinear",
  circular: "circular",
  relativo: "relative",
  fuerzas: "forces",
  fuerza: "force",
  trabajo: "work",
  energia: "energy",
  de: "of",
  del: "of",
  y: "and",
  en: "in",
  para: "for",
  ondas: "waves",
  oscilaciones: "oscillations",
  fluidos: "fluids",
  gravitation: "gravitation",
  gravitacion: "gravitation",
  termodinamica: "thermodynamics",
  electromagnetismo: "electromagnetism",
  optica: "optics",
  referencia: "reference",
  sistemas: "systems",
  sistema: "system",
  masa: "mass",
  peso: "weight",
  rozamiento: "friction",
  normal: "normal",
  tension: "tension",
  cuerdas: "ropes",
  cables: "cables",
  ley: "law",
  leyes: "laws",
  primera: "first",
  segunda: "second",
  tercera: "third",
  inercia: "inertia",
  equilibrio: "equilibrium",
  traslacion: "translation",
  aplicaciones: "applications",
  modelos: "models",
  metodos: "methods",
  maquinas: "machines",
  simples: "simple",
  electricidad: "electricity",
  corriente: "current",
  alterna: "alternating",
  definicion: "definition",
  momento: "moment",
  momentos: "moments",
  tipicos: "standard",
  teorema: "theorem",
  paralelos: "parallel",
  ejes: "axes",
  tensor: "tensor",
};

function toTitleCase(text) {
  return String(text || "")
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function labelFromIdEn(id) {
  const raw = String(id || "").trim();
  if (!raw) return "";

  const tokens = raw
    .replace(/[_/]/g, "-")
    .split("-")
    .filter(Boolean)
    .map((t) => EN_TOKEN_MAP[t.toLowerCase()] || t.toLowerCase());

  if (tokens.length === 2 && tokens[0] === "motion") tokens.reverse();
  if (tokens.length === 2 && tokens[0] === "system") tokens.reverse();
  if (tokens.length === 2 && tokens[0] === "force") tokens.reverse();
  if (tokens.length === 2 && tokens[0] === "equilibrium") tokens.reverse();

  return toTitleCase(tokens.join(" "));
}

function indexByPath(node, out = new Map()) {
  if (!node) return out;

  const rel = node?.ruta_relativa
    ? String(node.ruta_relativa).replace(/^\/+|\/+$/g, "")
    : "";

  if (rel && !out.has(rel)) out.set(rel, node);

  const kids = Array.isArray(node.children) ? node.children : [];
  for (const c of kids) indexByPath(c, out);
  return out;
}

function kindFromPath(clean) {
  const first = (String(clean || "").split("/")[0] || "").toLowerCase();
  if (first === "fisica-avanzada") return "avanzada";
  if (first === "fisica-moderna") return "moderna";
  if (first === "fisica-clasica") return "clasica";
  if (first === "sostenibilidad-energia" || first === "energia-y-sostenibilidad") return "energia";
  if (first === "fundamentos") return "fundamentos";
  if (first === "matematicas") return "mate";
  if (first === "herramientas") return "tools";
  return "clasica";
}

function resolveMapPath(mapIndex, rawPath) {
  const cleaned = normalizeRelPath(rawPath);
  if (!cleaned) return "";
  if (!mapIndex || mapIndex.size === 0) return cleaned;
  if (mapIndex.has(cleaned)) return cleaned;

  const lastSegment = cleaned.split("/").filter(Boolean).pop();
  if (!lastSegment) return cleaned;

  const exactMatches = [];
  for (const [path] of mapIndex) {
    const norm = normalizeRelPath(path);
    if (!norm) continue;
    if (norm === cleaned) {
      exactMatches.push(norm);
      break;
    }
    if (cleaned.includes("/") && norm.endsWith(`/${cleaned}`)) {
      exactMatches.push(norm);
      continue;
    }
    if (norm.split("/").filter(Boolean).pop() === lastSegment) {
      exactMatches.push(norm);
    }
  }

  if (exactMatches.length === 1) return exactMatches[0];
  return "";
}

const LEGACY_REDIRECTS = {
  "fisica-clasica/mecanica/dinamica/aplicaciones/maquinas-simples/palancas":
    "fisica-clasica/mecanica/aplicaciones/maquinas-simples/palanca",
  "fisica-clasica/mecanica/dinamica/aplicaciones/maquinas-simples/poleas":
    "fisica-clasica/mecanica/aplicaciones/maquinas-simples/polea",
  "fisica-clasica/mecanica/dinamica/aplicaciones/maquinas-simples/planos-inclinados":
    "fisica-clasica/mecanica/aplicaciones/maquinas-simples/plano-inclinado",
  "fisica-clasica/mecanica/maquinas-simples":
    "fisica-clasica/mecanica/aplicaciones/maquinas-simples",
  "fisica-clasica/mecanica/maquinas-simples/palancas":
    "fisica-clasica/mecanica/aplicaciones/maquinas-simples/palanca",
  "fisica-clasica/mecanica/maquinas-simples/poleas":
    "fisica-clasica/mecanica/aplicaciones/maquinas-simples/polea",
  "fisica-clasica/mecanica/maquinas-simples/planos-inclinados":
    "fisica-clasica/mecanica/aplicaciones/maquinas-simples/plano-inclinado",
  "fisica-clasica/mecanica/maquinas-simples/tornillo":
    "fisica-clasica/mecanica/aplicaciones/maquinas-simples/tornillo",
};

function normalizeRelPath(path) {
  return String(path || "").replace(/^\/+|\/+$/g, "");
}

function isI18nResolvedPath(resolvedPath) {
  return String(resolvedPath || "").includes("/data_v2_i18n/");
}

function resolveChildPath(parentPath, child) {
  const raw = (child?.type === "bridge" && child?.link_to)
    ? child.link_to
    : child?.path || child?.ruta_relativa || child?.id || "";
  const clean = normalizeRelPath(raw);
  if (!clean) return "";
  if (clean.includes("/")) return clean;

  const parent = normalizeRelPath(parentPath);
  return parent ? `${parent}/${clean}` : clean;
}

function normalizeMapLevelsFromMeta(levels) {
  if (!Array.isArray(levels)) return null;

  const cleaned = levels
    .map((n) => String(n ?? "").trim())
    .filter((n) => n.length > 0);

  return cleaned.length ? cleaned : null;
}

async function localizeNodeChildren(children, parentPath, lang) {
  const list = Array.isArray(children) ? children : [];
  const localized = await Promise.all(
    list.map(async (c) => {
      const fullPath = resolveChildPath(parentPath, c);
      const mapTitle = lang === "en"
        ? c?.titulo_en || c?.title_en || ""
        : c?.titulo || c?.title || c?.name || c?.nombre || "";
      const mapDescription = lang === "en"
        ? c?.description_en || c?.description || ""
        : c?.descripcion || c?.description || "";

      const rawId = c?.id || c?.path || "";
      const fallbackTitle =
        lang === "en"
          ? c?.titulo_en || c?.title_en || labelFromIdEn(rawId) || labelFromId(rawId)
          : c?.title || c?.titulo || c?.name || c?.nombre || labelFromId(rawId);
      const fallbackDescription = c?.description || c?.descripcion || "";

      return {
        id: c?.id || c?.path || fullPath,
        title: mapTitle || fallbackTitle,
        subtitle: c?.subtitle || "",
        description: mapDescription || fallbackDescription,
        icon: c?.icon || null,
        niveles: Array.isArray(c?.niveles) ? c.niveles : [],
        path: c?.path ? normalizeRelPath(c.path) : fullPath,
      };
    })
  );

  return localized;
}

export default function V2Router() {
  return (
    <ToolProvider>
      {/* Botones flotantes */}
      <ToolLauncher />

      {/* Ventanas flotantes (calculadora, conversor, constantes...) */}
      <GlobalToolsLayer />

      {/* Tu router tal cual */}
      <Routes>
        <Route path="/" element={<V2Entry />} />

        {/* Tools globales */}
        <Route path="tools/constantes" element={<Constantes />} />
        <Route path="tools/conversor" element={<UnitConverter />} />
        <Route path="tools/calculadora" element={<Calculadora />} />

        <Route path="/*" element={<V2Resolver />} />
      </Routes>
    </ToolProvider>
  );
}

function V2Entry() {
  const lang = getUiLanguage();
  const map = useMemo(() => safeLoadMap(), []);
  const [overviewMd, setOverviewMd] = useState("");
  const [children, setChildren] = useState([]);

  useEffect(() => {
    let alive = true;
    loadOverviewByRelPath("", { lang }).then((md) => {
      if (alive) setOverviewMd(md || "");
    });
    return () => {
      alive = false;
    };
  }, [lang]);

  useEffect(() => {
    let alive = true;
    localizeNodeChildren(map?.root?.children || [], "", lang).then((items) => {
      if (alive) setChildren(items);
    });
    return () => {
      alive = false;
    };
  }, [map, lang]);

  return (
    <V2NodePage
      title={tr(lang, "F\u00edsica", "Physics")}
      subtitle=""
      description={overviewMd}
      basePath="/v2"
      children={children}
    />
  );
}

function V2Resolver() {
  const lang = getUiLanguage();
  const location = useLocation();
  const clean = location.pathname.replace(/^\/v2\/?/, "").replace(/^\/+|\/+$/g, "");

  const [mode, setMode] = useState("loading"); // loading | node | leaf | redirect | notfound
  const [data, setData] = useState(null);

  const map = useMemo(() => safeLoadMap(), []);
  const mapIndex = useMemo(() => indexByPath(map?.root, new Map()), [map]);
  const resolvedPath = useMemo(() => resolveMapPath(mapIndex, clean), [mapIndex, clean]);
  const effectivePath = resolvedPath || clean;

  useEffect(() => {
    let mounted = true;

    (async () => {
      setMode("loading");
      setData(null);

      // ✅ Si es tools, aquí NO lo resolvemos (ya hay rutas específicas arriba).
      // Devolvemos notfound solo si alguien entra a tools sin match (raro).
      if (clean.startsWith("tools/")) {
        setMode("notfound");
        return;
      }

      // ✅ Compatibilidad de rutas legacy que ahora apuntan a leaf canónicos
      if (clean && LEGACY_REDIRECTS[clean]) {
        setMode("redirect");
        setData({ to: LEGACY_REDIRECTS[clean] });
        return;
      }

      // ✅ Validación contra mapa oficial (evita rutas fantasma)
      if (resolvedPath && resolvedPath !== clean) {
        setMode("redirect");
        setData({ to: resolvedPath });
        return;
      }

      // 0) raíz (por si alguien entra por /v2/)
      if (!effectivePath) {
        const md = await loadOverviewByRelPath("", { lang });
        const rootChildren = await localizeNodeChildren(map?.root?.children || [], "", lang);
        if (!mounted) return;

        setMode("node");
        setData({
          title: tr(lang, "F\u00edsica", "Physics"),
          subtitle: "",
          description: md || "",
          children: rootChildren,
        });
        return;
      }

      // 1) nodo desde mapa (fuente de verdad): si no es leaf y tiene hijos.
      const mapNode = mapIndex.get(effectivePath);
      if (mapNode && mapNode.type !== "leaf" && Array.isArray(mapNode.children) && mapNode.children.length > 0) {
        const children = await localizeNodeChildren(mapNode.children || [], effectivePath, lang);
        const mapNodeId = mapNode.id || effectivePath.split("/").pop() || effectivePath;
        const mapFallbackTitle =
          lang === "en"
            ? labelFromIdEn(mapNodeId) || labelFromId(mapNodeId)
            : mapNode.titulo || mapNode.title || labelFromId(mapNodeId);
        const localizedMapTitle =
          lang === "en" ? mapNode.titulo_en || mapNode.title_en || mapFallbackTitle : mapFallbackTitle;
        const mapOverview = await loadOverviewByRelPath(mapNode.ruta_relativa || effectivePath, { lang }).catch(() => "");
        const overviewText = String(mapOverview || "").trim();
        const localizedMapDescription = overviewText
          ? overviewText
          : lang === "en"
          ? mapNode.description_en || mapNode.description || mapNode.descripcion || ""
          : mapNode.descripcion || mapNode.description || "";
        if (!mounted) return;

        setMode("node");
        setData({
          title: localizedMapTitle,
          subtitle: mapNode.subtitle || "",
          description: localizedMapDescription,
          children,
        });
        return;
      }

      // 2) hoja
      const kind = kindFromPath(effectivePath);
      const mapLeafNode = mapIndex.get(effectivePath);
      let leaf = await getSubtopicV2(kind, effectivePath, { lang }).catch(() => null);

      if (!leaf && mapLeafNode?.ruta_relativa && mapLeafNode.ruta_relativa !== effectivePath) {
        leaf = await getSubtopicV2(kind, mapLeafNode.ruta_relativa, { lang }).catch(() => null);
      }

      if (!leaf) {
        const tail = effectivePath.split("/").filter(Boolean).pop();
        if (tail && tail !== effectivePath) {
          leaf = await getSubtopicV2(kind, tail, { lang }).catch(() => null);
        }
      }
      if (!mounted) return;

      if (leaf && leaf.meta) {
        const i18nMeta = isI18nResolvedPath(leaf?._resolvedMetaPath || leaf?.meta?._resolvedPath);
        const mappedLevels = normalizeMapLevelsFromMeta(mapLeafNode?.niveles);
        const mapTitleEn = String(mapLeafNode?.titulo_en || mapLeafNode?.title_en || "").trim();
        const mapPhysicalRoleRaw = mapLeafNode?.physical_role;
        const mapPhysicalRole =
          typeof mapPhysicalRoleRaw === "string"
            ? mapPhysicalRoleRaw
            : lang === "en"
            ? mapPhysicalRoleRaw?.en || mapPhysicalRoleRaw?.es || ""
            : mapPhysicalRoleRaw?.es || mapPhysicalRoleRaw?.en || "";

        const localizedMeta = {
          ...(leaf?.meta || {}),
          ...(mapPhysicalRole ? { physical_role: mapPhysicalRole } : {}),
          ...(mappedLevels ? { niveles: mappedLevels } : {}),
        };

        const localizedLeaf =
          lang === "en" && !i18nMeta && mapTitleEn
            ? {
                ...leaf,
                meta: {
                  ...localizedMeta,
                  title: mapTitleEn,
                },
              }
            : {
                ...leaf,
                meta: localizedMeta,
              };

        setMode("leaf");
        setData(localizedLeaf);
        return;
      }

      setMode("notfound");
    })();

    return () => {
      mounted = false;
    };
  }, [clean, mapIndex, map, lang]);

  if (mode === "loading") return <div className="p-4">{tr(lang, "Cargando...", "Loading...")}</div>;

  if (mode === "redirect" && data?.to) {
    return <Navigate to={`/v2/${data.to}`} replace />;
  }

  if (mode === "notfound" || !data) {
    return (
      <div className="p-4">
        <h3>{tr(lang, "No encontrado", "Not found")}</h3>
        <p>
          {tr(lang, "No existe contenido V2 para:", "V2 content does not exist for:")} <code>{clean}</code>
        </p>
        <Link className="btn btn-primary" to="/v2">
          {tr(lang, "Volver a V2", "Back to V2")}
        </Link>
      </div>
    );
  }

  if (mode === "node") {
    return <V2NodePage {...data} basePath={`/v2/${effectivePath}`.replace(/\/+$/, "")} />;
  }

  return <V2LeafPage {...data} />;
}


