// frontend/src/v2/tools/check_dinamica.mjs
import fs from "fs";
import path from "path";
import YAML from "yaml";
import { fileURLToPath } from "url";

/* -------------------------------------------------
   ROOT robusto: script está en frontend/src/v2/tools
   => ROOT = frontend
------------------------------------------------- */
const __filename = fileURLToPath(import.meta.url);
const SCRIPT_DIR = path.dirname(__filename);
const ROOT = path.resolve(SCRIPT_DIR, "../../..");

// Rutas reales de tu proyecto
const MAP_PATH = path.join(ROOT, "src", "v2", "map", "phyxio-map.yaml");
const DATA_V2 = path.join(ROOT, "src", "data_v2");
const GRAPHS_DIN = path.join(
  ROOT,
  "src",
  "v2",
  "components",
  "graphs",
  "dinamica"
);

function exists(p) {
  try {
    fs.accessSync(p);
    return true;
  } catch {
    return false;
  }
}
function readText(p) {
  return fs.readFileSync(p, "utf8");
}
function lastSegment(ruta) {
  const parts = String(ruta || "").split("/").filter(Boolean);
  return parts[parts.length - 1] || "";
}

function extractLeafs(node, out = []) {
  if (!node) return out;

  if (Array.isArray(node)) {
    node.forEach((x) => extractLeafs(x, out));
    return out;
  }

  if (node && typeof node === "object") {
    if (node.type === "leaf") {
      out.push({
        id: node.id,
        ruta: node.ruta_relativa || node.rutaRelativa || "",
        graficos: Array.isArray(node.graficos) ? node.graficos : [],
      });
    }
    if (node.children) extractLeafs(node.children, out);
  }
  return out;
}

function findDinamicaNode(node) {
  if (!node) return null;

  // Si es objeto "root" u otro contenedor, revisa el propio nodo y baja a children
  if (node && typeof node === "object" && !Array.isArray(node)) {
    const id = node.id;
    const ruta = node.ruta_relativa || node.rutaRelativa || "";
    if (id === "dinamica" || ruta === "fisica-clasica/mecanica/dinamica") return node;
    if (node.children) {
      const f = findDinamicaNode(node.children);
      if (f) return f;
    }
    return null;
  }

  if (Array.isArray(node)) {
    for (const x of node) {
      const f = findDinamicaNode(x);
      if (f) return f;
    }
  }
  return null;
}

// SVG2: existe data_v2/<ruta_relativa>/graphs/svg.config.jsx
function hasSvg2(rutaRel) {
  const p = path.join(DATA_V2, rutaRel, "graphs", "svg.config.jsx");
  return exists(p);
}

// Registry legacy: parsea index.js de dinamica (si existe) y detecta si hay Coord/Svg/Dcl
function readLegacyRegistry() {
  const idx = path.join(GRAPHS_DIN, "index.js");
  if (!exists(idx)) return null;
  const txt = readText(idx);

  const map = new Map(); // id -> {Coord, Svg, Dcl, ref}
  const rxEntry = /"([^"]+)"\s*:\s*\{([^}]+)\}/gms;
  const rxCoord = /\bCoord\s*:\s*([A-Za-z0-9_]+)/;
  const rxDcl = /\bDcl\s*:\s*([A-Za-z0-9_]+)/;
  const rxSvg = /\bSvg\s*:\s*([A-Za-z0-9_]+)/;

  let m;
  while ((m = rxEntry.exec(txt))) {
    const id = m[1];
    const body = m[2];
    const coord = (body.match(rxCoord) || [])[1];
    const dcl = (body.match(rxDcl) || [])[1];
    const svg = (body.match(rxSvg) || [])[1];
    map.set(id, {
      Coord: !!coord,
      Dcl: !!dcl,
      Svg: !!svg,
      ref: { coord, dcl, svg },
    });
  }

  return { idxPath: idx, ids: map };
}

function looksLikeTemplate(filePath) {
  if (!filePath || !exists(filePath)) return false;
  const txt = readText(filePath);
  const small = txt.trim().length < 180;
  const hasTodo = /TODO|plantilla|template|WIP/i.test(txt);
  const hasExport =
    /export\s+default\s+function|export\s+default\s+[A-Za-z0-9_]+/.test(txt);
  return small || hasTodo || !hasExport;
}

// Heurística por si NO quieres fiarte del registry (o está lleno de plantillas)
function findComponentByHeuristic(id, kind) {
  if (!exists(GRAPHS_DIN)) return null;
  const files = fs
    .readdirSync(GRAPHS_DIN, { withFileTypes: true })
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((n) => n.endsWith(".jsx") || n.endsWith(".js"));

  const needle = id.replace(/[-_.]/g, "").toLowerCase();
  const want = kind.toLowerCase();

  // 1) id + kind
  let cands = files.filter((f) => {
    const low = f.toLowerCase().replace(/[-_.]/g, "");
    return low.includes(needle) && low.includes(want);
  });
  if (cands.length) return path.join(GRAPHS_DIN, cands[0]);

  // 2) solo id
  cands = files.filter((f) =>
    f.toLowerCase().replace(/[-_.]/g, "").includes(needle)
  );
  if (cands.length) return path.join(GRAPHS_DIN, cands[0]);

  return null;
}

function main() {
  console.log("📍 ROOT:", ROOT);
  console.log("📍 MAP_PATH:", MAP_PATH);
  console.log("📍 DATA_V2:", DATA_V2);
  console.log("📍 GRAPHS_DIN:", GRAPHS_DIN);

  if (!exists(MAP_PATH)) {
    console.error("❌ No encuentro el mapa en:", MAP_PATH);
    process.exit(1);
  }

  const y = YAML.parse(readText(MAP_PATH));

  // Tu YAML tiene raíz y.root
  const rootNode = y?.root ?? y;
  const dinamicaNode = findDinamicaNode(rootNode);

  if (!dinamicaNode) {
    console.error(
      "❌ No encuentro el nodo de Dinámica en el mapa (ruta fisica-clasica/mecanica/dinamica o id=dinamica)."
    );
    console.error("   Pista: tu YAML root keys =", Object.keys(y || {}));
    process.exit(1);
  }

  const leafs = extractLeafs(dinamicaNode.children || dinamicaNode, []);
  console.log(`\n✅ Leafs de Dinámica encontrados: ${leafs.length}`);

  // 1) IDs duplicados
  const seen = new Map();
  const dups = [];
  for (const L of leafs) {
    const n = seen.get(L.id) || 0;
    seen.set(L.id, n + 1);
  }
  for (const [id, n] of seen.entries()) if (n > 1) dups.push({ id, n });

  // 2) Carpetas
  const missingFolders = [];
  const folderMismatch = [];

  // 3) Gráficos
  const svgMissing = [];
  const coordCheck = [];
  const dclCheck = [];

  const registry = readLegacyRegistry();

  for (const L of leafs) {
    const folderPath = path.join(DATA_V2, L.ruta);

    if (!exists(folderPath)) {
      missingFolders.push({ id: L.id, ruta: L.ruta });
    } else {
      const seg = lastSegment(L.ruta);
      if (seg && seg !== L.id) {
        folderMismatch.push({ id: L.id, ruta: L.ruta, lastSegment: seg });
      }
    }

    const g = Array.isArray(L.graficos) ? L.graficos : [];
    const wantsSvg = g.includes("Svg");
    const wantsCoord = g.includes("Coord");
    const wantsDcl = g.includes("Dcl");

    if (wantsSvg) {
      if (!hasSvg2(L.ruta)) {
        svgMissing.push({ id: L.id, ruta: L.ruta });
      }
    }

    // Coord / Dcl: si hay registry, valida presence; además avisa si "plantilla" (heurística)
    if (wantsCoord) {
      let msg = "OK";
      if (registry?.ids?.has(L.id)) {
        const ok = registry.ids.get(L.id).Coord;
        if (!ok) msg = "Falta en registry (Coord)";
      } else {
        const f = findComponentByHeuristic(L.id, "coord");
        if (!f) msg = "No encontrado por heurística (Coord)";
        else if (looksLikeTemplate(f)) msg = `Existe pero parece plantilla: ${path.basename(f)}`;
      }
      coordCheck.push({ id: L.id, info: msg });
    }

    if (wantsDcl) {
      let msg = "OK";
      if (registry?.ids?.has(L.id)) {
        const ok = registry.ids.get(L.id).Dcl;
        if (!ok) msg = "Falta en registry (Dcl)";
      } else {
        const f = findComponentByHeuristic(L.id, "dcl");
        if (!f) msg = "No encontrado por heurística (Dcl)";
        else if (looksLikeTemplate(f)) msg = `Existe pero parece plantilla: ${path.basename(f)}`;
      }
      dclCheck.push({ id: L.id, info: msg });
    }
  }

  console.log("\n=== 1) IDS ===");
  if (dups.length) {
    console.log("❌ IDs duplicados en Dinámica:");
    dups.forEach((d) => console.log(` - ${d.id} (x${d.n})`));
  } else {
    console.log("✅ Sin IDs duplicados en Dinámica");
  }

  console.log("\n=== 2) CARPETAS ===");
  if (missingFolders.length) {
    console.log("❌ Carpetas inexistentes (ruta_relativa no existe en data_v2):");
    missingFolders.forEach((x) => console.log(` - ${x.id} :: ${x.ruta}`));
  } else {
    console.log("✅ Todas las carpetas leaf existen en data_v2");
  }

  if (folderMismatch.length) {
    console.log("\n⚠️ Último segmento de ruta_relativa != id (recomendado que coincida):");
    folderMismatch.forEach((x) =>
      console.log(` - id=${x.id} last=${x.lastSegment} ruta=${x.ruta}`)
    );
  } else {
    console.log("\n✅ Nombre de carpeta leaf coincide con id (según ruta_relativa)");
  }

  console.log("\n=== 3) SVG2 ===");
  if (svgMissing.length) {
    console.log("❌ Leaf piden Svg pero falta graphs/svg.config.jsx:");
    svgMissing.forEach((x) => console.log(` - ${x.id} :: ${x.ruta}`));
  } else {
    console.log("✅ SVG2 OK para todos los leafs que piden Svg");
  }

  console.log("\n=== 3) COORD (legacy) ===");
  const coordBad = coordCheck.filter((x) => x.info !== "OK");
  if (coordBad.length) {
    console.log("⚠️ Coord: incidencias (falta o parece plantilla):");
    coordBad.forEach((x) => console.log(` - ${x.id} :: ${x.info}`));
  } else {
    console.log("✅ Coord: sin incidencias detectadas");
  }

  console.log("\n=== 3) DCL (legacy) ===");
  const dclBad = dclCheck.filter((x) => x.info !== "OK");
  if (dclBad.length) {
    console.log("⚠️ Dcl: incidencias (falta o parece plantilla):");
    dclBad.forEach((x) => console.log(` - ${x.id} :: ${x.info}`));
  } else {
    console.log("✅ Dcl: sin incidencias detectadas");
  }

  if (registry) {
    console.log("\n(Info) Registry analizado:", registry.idxPath);
  } else {
    console.log("\n(Info) No se analizó index.js (no encontrado en graphs/dinamica).");
  }

  // exit code para CI
  const hardFail = dups.length || missingFolders.length || svgMissing.length;
  process.exitCode = hardFail ? 2 : 0;
}

main();
