import yaml from "js-yaml";

// ✅ Vite 7+: usar query/import en vez de as:'raw'
const INDEX = import.meta.glob("../../data_v2/**/index.yaml", {
  query: "?raw",
  import: "default",
});
const OVERVIEW = import.meta.glob("../../data_v2/**/overview.md", {
  query: "?raw",
  import: "default",
});

function base(relPath) {
  const p = relPath ? relPath.replace(/^\/+|\/+$/g, "") : "";
  return `../../data_v2/${p}`.replace(/\/+$/, "");
}

async function readFrom(map, key) {
  const fn = map[key];
  if (!fn) return null;
  try {
    return await fn();
  } catch {
    return null;
  }
}

function humanize(id) {
  return String(id || "")
    .replace(/[-_]+/g, " ")
    .split(" ")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

function isSlugLike(text) {
  return /^[a-z0-9]+(?:[-_][a-z0-9]+)*$/.test(String(text || "").trim());
}

function pickReadableTitle(rawTitle, fallbackId) {
  const title = String(rawTitle || "").trim();
  const id = String(fallbackId || "").trim();
  if (!title) return humanize(id);
  // Si viene en formato id (slug), mostramos una version legible.
  if (title === id || isSlugLike(title)) return humanize(title);
  return title;
}

export async function loadV2IndexNode(relPath) {
  const b = base(relPath);
  console.log(`[loadV2IndexNode] Intentando cargar: "${relPath}" -> "${b}/index.yaml"`);
  
  const indexRaw = await readFrom(INDEX, `${b}/index.yaml`);
  if (!indexRaw) {
    console.log(`[loadV2IndexNode] No se encontró index.yaml para: "${b}/index.yaml"`);
    console.log(`[loadV2IndexNode] Claves disponibles:`, Object.keys(INDEX).slice(0, 10));
    return null;
  }

  console.log(`[loadV2IndexNode] ✅ Encontrado index.yaml para: "${relPath}"`);
  
  const doc = yaml.load(indexRaw) || {};
  const overview = (await readFrom(OVERVIEW, `${b}/overview.md`)) || "";

  // ✅ 1) Soportar items[] (nuevo) y children[] (legacy)
  let children = [];

  if (Array.isArray(doc.items)) {
    children = doc.items
      .filter((it) => it && (it.id || it.path))
      .map((it) => ({
        id: it.id || it.path,
        title: it.title || humanize(it.id || it.path),
        subtitle: it.subtitle || humanize(it.id || it.path),
        description: it.description || "",
        path: it.path || it.id, // importante para links
        icon: it.icon || "",
        orden: it.orden,
        niveles: it.niveles || [],
      }))
      .sort((a, b) => (a.orden ?? 99999) - (b.orden ?? 99999));
  } else if (Array.isArray(doc.children)) {
    // Manejar children como objetos o strings
    children = doc.children
      .filter((x) => x && (typeof x === "string" || (typeof x === "object" && x.id)))
      .map((child) => {
        if (typeof child === "string") {
          return { 
            id: child, 
            title: humanize(child), 
            subtitle: humanize(child), 
            path: child, 
            description: "",
            icon: "",
            orden: 99999,
            niveles: []
          };
        } else {
          return {
            id: child.id,
            title: pickReadableTitle(child.titulo, child.id),
            subtitle: child.subtitle || "",
            description: child.descripcion || "",
            path: child.id, // usar id como path por defecto
            icon: child.icon || "",
            orden: child.orden || 99999,
            niveles: child.niveles || [],
          };
        }
      })
      .sort((a, b) => (a.orden ?? 99999) - (b.orden ?? 99999));
  }

  console.log(`[loadV2IndexNode] ✅ Cargado nodo "${relPath}" con ${children.length} hijos`);

  return {
    id: doc.id || relPath.split("/").filter(Boolean).pop(),
    title:
      pickReadableTitle(doc.title || doc.titulo, doc.id || relPath.split("/").filter(Boolean).pop()) ||
      humanize(doc.id || (relPath.split("/").filter(Boolean).pop() || "Contenido")),
    description: overview || doc.description || "",
    children,
  };
}
