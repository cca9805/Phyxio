import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";

import V2NodePage from "./V2NodePage";
import V2LeafPage from "./V2LeafPage";

import { loadV2IndexNode } from "../utils/indexLoaderV2";
import { getSubtopicV2 } from "../utils/contentLoaderV2";

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

/**
 * Overviews en: src/data_v2/overview.md
 * Con eager:false el glob devuelve funciones loader: hay que ejecutarlas para obtener el string raw.
 */
const DATA_OVERVIEWS = import.meta.glob("../../data_v2/**/overview.md", {
  as: "raw",
  eager: false,
});

async function loadOverviewByRelPath(relPath) {
  const clean = String(relPath || "").replace(/^\/+|\/+$/g, "");

  const key = clean
    ? `../../data_v2/${clean}/overview.md`
    : `../../data_v2/overview.md`;

  const loader = DATA_OVERVIEWS[key];
  if (!loader) return null;

  const mod = await loader();
  return typeof mod === "string" ? mod : mod?.default ?? null;
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
  const map = safeLoadMap();
  const [overviewMd, setOverviewMd] = useState("");

  useEffect(() => {
    let alive = true;
    loadOverviewByRelPath("").then((md) => {
      if (alive) setOverviewMd(md || "");
    });
    return () => {
      alive = false;
    };
  }, []);

  const children =
    map?.root?.children?.map((n) => ({
      id: n.id,
      title: n.titulo || labelFromId(n.id),
      subtitle: n.subtitle || "",
      description: n.descripcion || "",
      icon: n.icon || null,
      niveles: Array.isArray(n.niveles) ? n.niveles : [],
      // raíz: navegamos por ruta_relativa (ej: fisica-clasica)
      path: n?.ruta_relativa ? String(n.ruta_relativa).replace(/^\/+|\/+$/g, "") : n.id,
    })) || [];

  return (
    <V2NodePage
      title="Física"
      subtitle=""
      description={overviewMd}
      basePath="/v2"
      children={children}
    />
  );
}

function V2Resolver() {
  const location = useLocation();
  const clean = location.pathname.replace(/^\/v2\/?/, "").replace(/^\/+|\/+$/g, "");

  const [mode, setMode] = useState("loading"); // loading | node | leaf | notfound
  const [data, setData] = useState(null);

  const map = useMemo(() => safeLoadMap(), []);
  const mapIndex = useMemo(() => indexByPath(map?.root, new Map()), [map]);

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

      // ✅ Validación contra mapa oficial (evita rutas fantasma)
      if (clean && mapIndex.size > 0 && !mapIndex.has(clean)) {
        setMode("notfound");
        return;
      }

      // 0) raíz (por si alguien entra por /v2/)
      if (!clean) {
        const md = await loadOverviewByRelPath("");
        if (!mounted) return;

        setMode("node");
        setData({
          title: "Física",
          subtitle: "",
          description: md || "",
          children: (map?.root?.children || []).map((n) => ({
            id: n.id,
            title: n.titulo || labelFromId(n.id),
            subtitle: n.subtitle || "",
            description: n.descripcion || "",
            icon: n.icon || null,
            niveles: Array.isArray(n.niveles) ? n.niveles : [],
            path: n?.ruta_relativa ? String(n.ruta_relativa).replace(/^\/+|\/+$/g, "") : n.id,
          })),
        });
        return;
      }

      // 1) intenta nodo "legacy": index.yaml
      const legacyNode = await loadV2IndexNode(clean).catch(() => null);
      if (!mounted) return;
      if (legacyNode) {
        setMode("node");
        setData(legacyNode);
        return;
      }

      // 2) fallback: si está en mapa y NO es leaf y tiene hijos -> NodePage desde mapa
      const mapNode = mapIndex.get(clean);
      if (mapNode && mapNode.type !== "leaf" && Array.isArray(mapNode.children) && mapNode.children.length > 0) {
        const md = await loadOverviewByRelPath(mapNode.ruta_relativa || clean);
        if (!mounted) return;

        setMode("node");
        setData({
          title: mapNode.titulo || labelFromId(mapNode.id),
          subtitle: mapNode.subtitle || "",
          description: md || "",
          children: (mapNode.children || []).map((c) => ({
            id: c.id,
            title: c.titulo || labelFromId(c.id),
            subtitle: c.subtitle || "",
            description: c.descripcion || "",
            icon: c.icon || null,
            niveles: Array.isArray(c.niveles) ? c.niveles : [],
            // interno: último segmento para construir /v2/<padre>/<hijo>
            path: c?.ruta_relativa ? String(c.ruta_relativa).split("/").filter(Boolean).slice(-1)[0] : c.id,
          })),
        });
        return;
      }

      // 3) hoja
      const kind = kindFromPath(clean);
      const leaf = await getSubtopicV2(kind, clean).catch(() => null);
      if (!mounted) return;

      if (leaf && leaf.meta) {
        setMode("leaf");
        setData(leaf);
        return;
      }

      setMode("notfound");
    })();

    return () => {
      mounted = false;
    };
  }, [clean, mapIndex, map]);

  if (mode === "loading") return <div className="p-4">Cargando…</div>;

  if (mode === "notfound" || !data) {
    return (
      <div className="p-4">
        <h3>No encontrado</h3>
        <p>
          No existe contenido V2 para: <code>{clean}</code>
        </p>
        <Link className="btn btn-primary" to="/v2">
          Volver a V2
        </Link>
      </div>
    );
  }

  if (mode === "node") {
    return <V2NodePage {...data} basePath={`/v2/${clean}`.replace(/\/+$/, "")} />;
  }

  return <V2LeafPage {...data} />;
}
