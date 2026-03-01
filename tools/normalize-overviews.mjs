import fs from "node:fs";
import path from "node:path";

const base = path.resolve(process.argv[2] || "Phyxio/frontend/src/data_v2");

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.isFile() && ent.name === "overview.md") out.push(p);
  }
  return out;
}

function slugToTitle(slug) {
  const parts = String(slug || "").split("-").filter(Boolean);
  if (!parts.length) return "este tema";
  return parts
    .map((s) => (s.length > 1 ? s[0].toUpperCase() + s.slice(1) : s.toUpperCase()))
    .join(" ");
}

function norm(s) {
  return String(s || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function bucketKey(h) {
  const t = norm(h);
  const m = new Map([
    ["idea general del tema", "idea"],
    ["idea global", "idea"],
    ["ideas centrales", "idea"],
    ["mapa conceptual del nodo", "idea"],
    ["que aprenderas", "idea"],
    ["que aprenderas en este tema", "idea"],
    ["que aprenderas en este bloque", "idea"],
    ["que trabajas aqui", "idea"],

    ["que vas a comprender de verdad", "comprender"],
    ["que encontraras aqui", "comprender"],
    ["subtemas principales", "comprender"],
    ["subtemas y enfoque", "comprender"],
    ["subtemas de este tema", "comprender"],
    ["preguntas clave que resuelve", "comprender"],
    ["preguntas clave que responde", "comprender"],
    ["que vas a dominar", "comprender"],
    ["que vas a dominar aqui", "comprender"],
    ["lo esencial que debes dominar", "comprender"],
    ["ecuaciones centrales", "comprender"],

    ["ruta didactica recomendada", "ruta"],
    ["ruta de estudio recomendada", "ruta"],
    ["como estudiar para entender de verdad", "ruta"],
    ["metodo de resolucion recomendado", "ruta"],
    ["metodo practico para resolver problemas de sonido", "ruta"],
    ["estrategia general para problemas de gravitacion", "ruta"],
    ["buenas practicas", "ruta"],

    ["criterio fisico que debes adquirir", "criterio"],
    ["checklist de calidad al resolver", "criterio"],
    ["como validar cada resultado", "criterio"],
    ["cuando falla el modelo simple", "criterio"],
    ["errores que este tema corrige", "criterio"],
    ["errores transversales que debes evitar", "criterio"],
    ["errores que debes evitar", "criterio"],

    ["conexion con problemas reales", "conexion"],
    ["conexiones", "conexion"],
    ["conexion con otros temas", "conexion"],
    ["conexion con otros nodos", "conexion"],
    ["aplicacion real", "conexion"],
    ["competencias que desarrolla este nodo", "conexion"],
    ["por que importa", "conexion"],

    ["objetivo final del tema", "objetivo"],
    ["resultado esperado al cerrar el tema", "objetivo"],
    ["al terminar este bloque", "objetivo"],
    ["al terminar este tema", "objetivo"],
  ]);
  return m.get(t) || "";
}

function parseSections(text) {
  const lines = text.split(/\r?\n/);
  const sections = [];
  let intro = [];
  let current = null;

  for (const line of lines) {
    const m = line.match(/^##\s+(.+)\s*$/);
    if (m) {
      if (current) sections.push(current);
      current = { heading: m[1].trim(), body: [] };
    } else if (current) {
      current.body.push(line);
    } else {
      intro.push(line);
    }
  }
  if (current) sections.push(current);

  return {
    intro: intro.join("\n").trim(),
    sections,
  };
}

const files = walk(base);
let changed = 0;

for (const file of files) {
  const raw = fs.readFileSync(file, "utf8");
  if (!raw.trim()) continue;

  const cleaned = raw
    .replace(/^>\s*(Subtema|Subbloque|Nodo)\s*:\s*.*\r?\n?/gim, "")
    .trim();

  const { intro, sections } = parseSections(cleaned);
  const dirName = path.basename(path.dirname(file));
  const tema = slugToTitle(dirName);

  const buckets = {
    idea: [],
    comprender: [],
    ruta: [],
    criterio: [],
    conexion: [],
    objetivo: [],
    custom: [],
  };

  if (intro) buckets.idea.push(intro);

  if (!sections.length) {
    buckets.idea.push(`Este tema presenta los fundamentos de ${tema} y su interpretacion fisica.`);
  } else {
    for (const s of sections) {
      const body = s.body.join("\n").trim();
      if (!body) continue;
      const k = bucketKey(s.heading);
      if (!k) buckets.custom.push(`### ${s.heading}\n${body}`);
      else buckets[k].push(body);
    }
  }

  if (!buckets.idea.length) {
    buckets.idea.push(`Este tema aborda los fundamentos de ${tema} y su lectura fisica para resolver problemas con criterio.`);
  }
  // Extracto corto en "Idea general del tema": maximo 3 lineas no vacias.
  {
    const rawIdea = buckets.idea.join("\n\n").trim();
    const ideaLines = rawIdea
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean)
      .slice(0, 3);
    buckets.idea = [ideaLines.join("\n")];
  }
  if (!buckets.comprender.length) {
    buckets.comprender.push("- Magnitudes y variables clave del tema.\n- Relacion entre ecuaciones, unidades y significado fisico.");
  }
  if (!buckets.ruta.length) {
    buckets.ruta.push("1- Comprende el fenomeno y define variables.\n2- Aplica ecuaciones con condiciones de validez.\n3- Verifica unidades e interpreta el resultado.");
  }
  if (!buckets.criterio.length) {
    buckets.criterio.push("Debes identificar cuando el modelo simplificado es valido y cuando requiere correcciones.");
  }
  if (!buckets.conexion.length) {
    buckets.conexion.push("Relaciona este tema con aplicaciones reales y situaciones experimentales.");
  }
  if (!buckets.objetivo.length) {
    buckets.objetivo.push("Resolver problemas con procedimiento claro, interpretacion fisica y validacion final.");
  }

  const ordered = [
    ["## Idea general del tema", buckets.idea],
    ["## Que vas a comprender de verdad", buckets.comprender],
    ["## Ruta didactica recomendada", buckets.ruta],
    ["## Criterio fisico que debes adquirir", buckets.criterio],
    ["## Conexion con problemas reales", buckets.conexion],
    ["## Objetivo final del tema", buckets.objetivo],
  ];

  const out = [];
  for (const [h, arr] of ordered) {
    const body = arr.join("\n\n").trim();
    if (!body) continue;
    out.push(h, body, "");
  }

  if (buckets.custom.length) {
    out.push("## Complemento del tema", buckets.custom.join("\n\n").trim(), "");
  }

  const next = out.join("\n").trimEnd() + "\n";
  const prev = raw.endsWith("\n") ? raw : raw + "\n";
  if (next !== prev) {
    fs.writeFileSync(file, next, "utf8");
    changed += 1;
  }
}

console.log(`total=${files.length}`);
console.log(`changed=${changed}`);
