import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { fileURLToPath } from "url";




const args = process.argv.slice(2);
const getArg = (k, def = null) => {
  const i = args.indexOf(k);
  if (i === -1) return def;
  return args[i + 1] ?? def;
};

const OVERWRITE = args.includes("--overwrite");
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

// raíz frontend
const FRONTEND_ROOT = path.resolve(__dirname, "../../");

// rutas por defecto correctas
const resolveFromFrontend = (p) =>
  path.isAbsolute(p) ? p : path.resolve(FRONTEND_ROOT, p);

const MAP_PATH = resolveFromFrontend(
  getArg("--map", "src/v2/map/phyxio-map.yaml")
);

const OUT_DIR = resolveFromFrontend(
  getArg("--out", "src/data_v2")
);



const readText = (p) => fs.readFileSync(p, "utf-8");
const ensureDir = (p) => fs.mkdirSync(p, { recursive: true });

function writeFileSafe(filePath, content) {
  if (!OVERWRITE && fs.existsSync(filePath)) return;
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, "utf-8");
}

function normRel(r) {
  return String(r || "").replace(/^\/+|\/+$/g, "");
}

function asTitle(node) {
  return node.titulo || node.title || node.id;
}

function defaults(node) {
  // Garantiza campos pedibles aunque no estén en el YAML todavía
  return {
    icon: node.icon ?? "",
    descripcion: node.descripcion ?? "",
    ruta_relativa: node.ruta_relativa ?? "",
  };
}

function mkIndexYaml(node) {
  const d = defaults(node);
  const children = Array.isArray(node.children) ? node.children : [];
  const items = children
    .slice()
    .sort((a, b) => (a.orden ?? 0) - (b.orden ?? 0))
    .map((c) => ({
      id: c.id,
      titulo: asTitle(c),
      type: c.type,
      orden: c.orden ?? 0,
      niveles: c.niveles ?? [],
      icon: c.icon ?? "",
      ruta_relativa: normRel(c.ruta_relativa),
      descripcion: c.descripcion ?? "",
    }));

  const obj = {
    id: node.id,
    titulo: asTitle(node),
    type: node.type,
    orden: node.orden ?? 0,
    niveles: node.niveles ?? [],
    icon: d.icon,
    ruta_relativa: normRel(d.ruta_relativa),
    descripcion: d.descripcion,
    children: items,
  };

  return yaml.dump(obj, { lineWidth: 120, noRefs: true });
}

function mkOverviewMd(node) {
  const d = defaults(node);
  const title = asTitle(node);
  return `# ${title}

> ${d.descripcion || "Descripción pendiente."}

## Qué aprenderás
- (pendiente)

## Qué encontrarás aquí
- Teoría, calculadora, gráficos, ejemplos y errores típicos (según corresponda)

## Conexiones
- (pendiente)
`;
}

function mkLeafMeta(node) {
  const d = defaults(node);
  const obj = {
    id: node.id,
    titulo: asTitle(node),
    type: node.type,
    orden: node.orden ?? 0,
    niveles: node.niveles ?? [],
    icon: d.icon,
    ruta_relativa: normRel(d.ruta_relativa),
    descripcion: d.descripcion,
    // Campos útiles extra (opcionales):
    dificultad: node.dificultad ?? "",
    tiempo_estimado_min: node.tiempo_estimado_min ?? null,
    prerequisitos: node.prerequisitos ?? [],
    tags: node.tags ?? [],
  };
  return yaml.dump(obj, { lineWidth: 120, noRefs: true });
}

function mkEmptyYaml(title) {
  return `# ${title}\n# Completar\n`;
}

function mkLeafMd(title) {
  return `# ${title}

> (pendiente)

## Idea clave
- (pendiente)

## Desarrollo
- (pendiente)

## Resumen
- (pendiente)
`;
}

function visit(node) {
  const rel = normRel(node.ruta_relativa);
  if (!rel) return;

  const dir = path.join(OUT_DIR, rel);

  if (node.type === "block" || node.type === "subblock" || node.type === "root") {
    ensureDir(dir);
    writeFileSafe(path.join(dir, "index.yaml"), mkIndexYaml(node));
    writeFileSafe(path.join(dir, "overview.md"), mkOverviewMd(node));
  }

  if (node.type === "leaf") {
    ensureDir(dir);
    writeFileSafe(path.join(dir, "meta.yaml"), mkLeafMeta(node));
    writeFileSafe(path.join(dir, "magnitudes.yaml"), mkEmptyYaml("magnitudes"));
    writeFileSafe(path.join(dir, "formulas.yaml"), mkEmptyYaml("formulas"));
    writeFileSafe(path.join(dir, "teoria.md"), mkLeafMd(`${asTitle(node)} · Teoría`));
    writeFileSafe(path.join(dir, "modelos.md"), mkLeafMd(`${asTitle(node)} · Modelos`));
    writeFileSafe(path.join(dir, "historia.md"), mkLeafMd(`${asTitle(node)} · Historia`));
    writeFileSafe(path.join(dir, "errores.md"), mkLeafMd(`${asTitle(node)} · Errores típicos`));
    writeFileSafe(path.join(dir, "ejemplos.md"), mkLeafMd(`${asTitle(node)} · Ejemplos`));
    writeFileSafe(path.join(dir, "aplicaciones.md"), mkLeafMd(`${asTitle(node)} · Aplicaciones`));
  }

  const children = Array.isArray(node.children) ? node.children : [];
  for (const ch of children) visit(ch);
}

function main() {
  const raw = readText(MAP_PATH);
  const map = yaml.load(raw);
  if (!map?.root) throw new Error("Mapa inválido: falta root");

  // root del mapa: creamos también su carpeta si tiene ruta_relativa
  visit(map.root);

  console.log(`OK ✅ Estructura generada en: ${OUT_DIR}`);
  console.log(`Map: ${MAP_PATH}`);
  console.log(`Overwrite: ${OVERWRITE}`);
}

main();
