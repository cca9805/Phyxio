import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import V2NodePage from "./V2NodePage";
import V2LeafPage from "./V2LeafPage";

import { loadV2IndexNode } from "../utils/indexLoaderV2";
import { getSubtopicV2 } from "../utils/contentLoaderV2";

// ✅ Mapa oficial
import yaml from "js-yaml";
import phyxioMapYaml from "../map/phyxio-map.yaml?raw";

// ✅ Overviews (markdown) por ruta_relativa (nuevo mapa)
const OVERVIEW_GLOBS = {
  // Preferido: crea/guarda overviews aquí
  v2: import.meta.glob("../content/**/overview.md", { as: "raw" }),
  // Compat: si aún tienes contenido en /data o similar, puedes moverlo al glob preferido.
  // Si no existe esta carpeta, no pasa nada; simplemente no habrá matches.
  data: import.meta.glob("../../data/**/overview.md", { as: "raw" }),
  // ✅ Archivos overview.md en data_v2
  data_v2: import.meta.glob("../../data_v2/**/overview.md", { as: "raw" }),
};


function safeLoadMap() {
  try {
    const data = yaml.load(phyxioMapYaml);

    // ✅ root puede ser array (tu caso) o {children:[...]}
    if (Array.isArray(data?.root)) {
      return { ...data, root: { children: data.root } };
    }
    if (data?.root && Array.isArray(data.root.children)) return data;

    return null;
  } catch (e) {
    console.error("[V2Router] Error cargando phyxio-map.yaml:", e);
    return null;
  }
}


function indexByPath(node, out = new Map()) {
  if (!node) return out;

  if (node.ruta_relativa) {
    const key = String(node.ruta_relativa).replace(/^\/+|\/+$/g, "");
    if (out.has(key) && out.get(key)?.id !== node.id) {
      console.warn("[phyxio-map] ruta_relativa duplicada:", key, "ids:", out.get(key)?.id, node.id);
    }
    out.set(key, node);
  }

  const children = Array.isArray(node.children) ? node.children : [];
  for (const ch of children) indexByPath(ch, out);
  return out;
}

function labelFromId(id) {
  if (!id) return "";
  const acronyms = new Set(["mru", "mrua", "mas", "si", "pv", "em", "rlc", "ohm", "snell"]);
  return String(id)
    .split("-")
    .filter(Boolean)
    .map((w) => {
      const low = w.toLowerCase();
      if (acronyms.has(low)) return low.toUpperCase();
      if (low.length <= 3 && /^[a-z]+$/.test(low)) return low.toUpperCase();
      return low.charAt(0).toUpperCase() + low.slice(1);
    })
    .join(" ");
}

function cleanDescription(text) {
  if (!text) return "";
  
  // Remover prefijos como "Subbloque:", "Bloque:", "Subtema:", etc.
  let cleaned = String(text)
    .replace(/^(Subbloque|Bloque|Subtema|Tema|Sección):\s*/i, "")
    .replace(/\.\s*Teoría,?\s*fórmulas,?\s*ejemplos\s*y\s*aplicaciones\.?$/i, "")
    .replace(/\.\s*Teoría,?\s*ejemplos\s*y\s*aplicaciones\.?$/i, "")
    .replace(/\.\s*Fórmulas\s*y\s*ejemplos\.?$/i, "")
    .trim();
  
  return cleaned;
}

async function tryLoadOverview(rutaRelativa) {
  const ruta = String(rutaRelativa || "").replace(/^\/+|\/+$/g, "");
  if (!ruta) return null;

  // buscamos un key que termine en /<ruta>/overview.md (o que lo contenga)
  const want = `/${ruta}/overview.md`;
  
  console.log(`[tryLoadOverview] Buscando overview para ruta: "${ruta}"`);
  console.log(`[tryLoadOverview] Patrón buscado: "${want}"`);

  for (const [bucketName, bucket] of Object.entries(OVERVIEW_GLOBS)) {
    const keys = Object.keys(bucket || {});
    console.log(`[tryLoadOverview] Bucket "${bucketName}" tiene ${keys.length} archivos:`, keys);
    
    // 1) match exact end
    let key = keys.find((k) => k.replace(/\\/g, "/").endsWith(want));
    // 2) match contains (por si hay prefijos tipo .../content/fisica-clasica/overview.md)
    if (!key) key = keys.find((k) => k.replace(/\\/g, "/").includes(want));
    
    if (key) {
      console.log(`[tryLoadOverview] Encontrado archivo: "${key}"`);
      try {
        const loader = bucket[key];
        const md = await loader();
        const result = typeof md === "string" ? md : String(md || "");
        console.log(`[tryLoadOverview] Cargado exitosamente: ${result.length} caracteres`);
        return result;
      } catch (e) {
        console.warn(`[V2Router] No se pudo cargar overview (${bucketName}):`, key, e);
        return null;
      }
    }
  }

  console.log(`[tryLoadOverview] No se encontró overview para ruta: "${ruta}"`);
  return null;
}


export default function V2Router() {
  return (
    <Routes>
      <Route path="/" element={<V2Entry />} />
      <Route path="/*" element={<V2Resolver />} />
    </Routes>
  );
}

function V2Entry() {
  const [description, setDescription] = useState("Elige un bloque para empezar.");
  const map = safeLoadMap();

  // Cargar el overview de la raíz
  useEffect(() => {
    async function loadRootOverview() {
      try {
        // Intentar cargar desde data_v2/overview.md
        const OVERVIEW_GLOBS_ROOT = {
          v2: import.meta.glob("../content/**/overview.md", { as: "raw" }),
          data: import.meta.glob("../../data_v2/overview.md", { as: "raw" }),
        };
        
        for (const [bucketName, bucket] of Object.entries(OVERVIEW_GLOBS_ROOT)) {
          const keys = Object.keys(bucket || {});
          const key = keys.find((k) => k.includes("overview.md"));
          
          if (key) {
            const loader = bucket[key];
            const md = await loader();
            const result = typeof md === "string" ? md : String(md || "");
            if (result.trim()) {
              setDescription(result);
              return;
            }
          }
        }
      } catch (e) {
        console.warn("[V2Entry] No se pudo cargar overview de raíz:", e);
      }
    }
    loadRootOverview();
  }, []);

  const children =
    map?.root?.children?.map((n) => ({
      id: n.id,
      title: n.titulo || labelFromId(n.id),
      icon: n.icon || null,
      niveles: n.niveles || [], // ✅ Agregamos los niveles para los badges
      // Si tu V2NodePage usa basePath + child.id (como en tu entry anterior),
      // esto construye /v2/<id>. Si quieres /v2/<ruta_relativa>, entonces habría que
      // cambiar V2NodePage para aceptar "link" (no lo hago aquí para no romper).
      link: n?.ruta_relativa ? `/v2/${String(n.ruta_relativa).replace(/^\/+|\/+$/g, "")}` : undefined,
    })) || [
      // fallback si el YAML falla
      { id: "fisica-clasica", title: "Física clásica", link: "/v2/fisica-clasica" },
      { id: "fisica-moderna", title: "Física moderna", link: "/v2/fisica-moderna" },
      { id: "sostenibilidad-energia", title: "Sostenibilidad y energía", link: "/v2/sostenibilidad-energia" },
    ];

  // V2NodePage en tu versión recibe children con {id,title}. Le pasamos también link;
  // si lo ignora, no pasa nada. Si lo aprovechas más adelante, mejor.
  return (
    <V2NodePage
      title="Física !!!"
      description={description}
      basePath="/v2"
      children={children.map(({ id, title, icon, niveles }) => ({ id, title, icon, niveles }))}
      // Si tu V2NodePage soporta "links" o "childrenLinks", lo enchufas luego.
    />
  );
}

function V2Resolver() {
  const location = useLocation();
  const clean = location.pathname.replace(/^\/v2\/?/, "").replace(/^\/+|\/+$/g, "");

  const [mode, setMode] = useState("loading"); // loading | node | leaf | notfound
  const [data, setData] = useState(null);

  const map = useMemo(() => safeLoadMap(), []);
  const mapIndex = useMemo(() => (map?.root ? indexByPath(map.root) : new Map()), [map]);

  useEffect(() => {
    let mounted = true;

    (async () => {
      setMode("loading");
      setData(null);

      // ✅ Validación contra mapa oficial (evita rutas fantasma)
      if (clean && mapIndex.size > 0 && !mapIndex.has(clean)) {
        setMode("notfound");
        return;
      }

      // 1) intenta nodo: busca index.yaml
      const node = await loadV2IndexNode(clean);
      if (!mounted) return;
      if (node) {
        setMode("node");
        setData(node);
        return;
      }

      // 1.5) ✅ fallback: construir nodo desde phyxio-map si existe Y tiene hijos
      const mapNode = mapIndex.get(clean);
      if (mapNode && mapNode.children && mapNode.children.length > 0) {
        console.log(`[V2Resolver] Usando fallback del mapa para nodo: "${clean}" con ${mapNode.children.length} hijos`);
        const md = await tryLoadOverview(mapNode.ruta_relativa);

        setMode("node");
        setData({
          title: mapNode.titulo || labelFromId(mapNode.id),
          subtitle: mapNode.subtitle || "",
          // Si existe overview.md para esta ruta, manda ese markdown; si no, usa la descripción corta del YAML.
          description: (md && String(md).trim()) ? md : (mapNode.descripcion || ""),
          children: (mapNode.children || []).map((c) => ({
            id: c.id,
            title: c.titulo || labelFromId(c.id),
            subtitle: c.subtitle || "",
            description: cleanDescription(c.descripcion || ""),
            icon: c.icon || null,
            niveles: c.niveles || [], // ✅ Agregamos los niveles para los badges
            // path relativo al nodo actual (último segmento de ruta_relativa)
            path: c.ruta_relativa
              ? String(c.ruta_relativa).split("/").filter(Boolean).slice(-1)[0]
              : c.id,
          })),
        });
        return;
      }

// 2) intenta hoja: busca meta.yaml (+ md/yaml)
      console.log(`[V2Resolver] Intentando cargar como hoja: "${clean}"`);
      const first = (clean.split("/")[0] || "").toLowerCase();
      const kind =
        first === "fisica-moderna" ? "moderna" :
        first === "fisica-clasica" ? "clasica" :
        first === "matematicas" ? "mate" :
        first === "herramientas" ? "tools" :
        first === "sostenibilidad-energia" ? "energia" :
        first === "fundamentos" ? "fundamentos" :
        "clasica";

      const leaf = await getSubtopicV2(kind, clean);
      if (!mounted) return;
      if (leaf && leaf.meta) {
        console.log(`[V2Resolver] ✅ Cargado como hoja: "${clean}"`);
        setMode("leaf");
        setData(leaf);
        return;
      }

      setMode("notfound");
    })();

    return () => { mounted = false; };
  }, [clean, mapIndex]);

  if (mode === "loading") return <div className="p-4">Cargando…</div>;

  if (mode === "notfound") {
    return (
      <div className="p-4">
        <h3>No encontrado</h3>
        <p>No existe contenido V2 para: <code>{clean}</code></p>
        <Link className="btn btn-primary" to="/v2">Volver a V2</Link>
      </div>
    );
  }

  if (mode === "node") {
    return <V2NodePage {...data} basePath={`/v2/${clean}`.replace(/\/+$/, "")} />;
  }

  return <V2LeafPage {...data} />;
}
