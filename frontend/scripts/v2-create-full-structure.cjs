#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const DRY = process.argv.includes("--dry");
const OVERWRITE = process.argv.includes("--overwrite");
const basePath = process.cwd();

const ROOT = path.resolve(process.cwd(), "src", "data_v2", "contenido");

// Archivos estándar por "hoja" (subtema)
const LEAF_FILES = [
  "meta.yaml",
  "teoria.md",
  "modelos.md",
  "errores.md",
  "ejemplos.md",
  "magnitudes.yaml",
  "formulas.yaml",
];

// Archivos estándar por "nodo" (carpeta índice / tema contenedor)
const NODE_FILES = [
  "index.yaml",
  "overview.md",
];

function ensureDir(dir) {
  if (DRY) return;
  fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath, content) {
  if (fs.existsSync(filePath) && !OVERWRITE) return;
  if (!DRY) fs.writeFileSync(filePath, content, "utf8");
}

function humanizeId(id) {
  return String(id || "")
    .replace(/[-_]+/g, " ")
    .trim()
    .split(" ")
    .map(w => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

function metaTemplate({ id, nombre, area, bloque, subbloque, rutaRel }) {
  return `version: 1
id: ${id}
nombre: ${nombre}

area: ${area}
bloque: ${bloque}
subbloque: ${subbloque}

# Se rellenan con scripts posteriores:
# orden:
# dificultad:

niveles:
  - ESO
  - Bachillerato

prerequisitos: []

descripcion_corta: >
  (Pendiente)

tags: []

objetivos:
  - (Pendiente)

suposiciones:
  - (Pendiente)

ruta_relativa: ${rutaRel}
`;
}

function indexTemplate({ id, title, rel, children = [] }) {
  // index.yaml es un "índice" para listar hijos (y permitir generar menús automáticamente)
  return `version: 1
id: ${id}
title: "${title}"
ruta_relativa: ${rel}

children:
${children.map(c => `  - id: ${c}`).join("\n") || "  - (vacío)"}
`;
}

function overviewTemplate(title) {
  // overview.md es un "texto de portada" para ese nodo (landing page)
  return `# ${title}

> Resumen del bloque, ideas clave, cómo estudiar esta sección y qué aprenderás.

## Qué incluye
- (Pendiente)

## Conexiones
- (Pendiente)
`;
}

function mdTemplate(title, bullets = []) {
  return `# ${title}

${bullets.length ? bullets.map(b => `- ${b}`).join("\n") : "- (Pendiente)"}

`;
}

function magnitudesTemplate() {
  return `version: 1
magnitudes: []
`;
}

function formulasTemplate(id, title) {
  return `version: 1
topic:
  id: ${id}
  title: "${title}"

sets:
  - id: base
    title: "Ecuaciones básicas"
    assumptions: []
    formulas: []
`;
}

function createNode(dir) {
  ensureDir(dir);

  const id = path.basename(dir);
  const title = humanizeId(id);
  const rel = path.relative(ROOT, dir).replace(/\\/g, "/");

  // Crear archivos de nodo (index + overview) si no existen
  writeFile(path.join(dir, "index.yaml"), indexTemplate({ id, title, rel, children: [] }));
  writeFile(path.join(dir, "overview.md"), overviewTemplate(title));
}

function createLeaf(dir, ctx) {
  ensureDir(dir);

  const id = path.basename(dir);
  const nombre = ctx.nombre || humanizeId(id);
  const rel = path.relative(ROOT, dir).replace(/\\/g, "/");

  writeFile(path.join(dir, "meta.yaml"), metaTemplate({ ...ctx, id, nombre, rutaRel: rel }));
  writeFile(path.join(dir, "teoria.md"), mdTemplate(nombre, ["Idea clave (pendiente)", "Explicación (pendiente)"]));
  writeFile(path.join(dir, "modelos.md"), mdTemplate("Modelo y validez", ["Suposiciones (pendiente)", "Cuándo NO aplica (pendiente)"]));
  writeFile(path.join(dir, "errores.md"), mdTemplate("Errores comunes", ["Error típico 1 (pendiente)", "Error típico 2 (pendiente)"]));
  writeFile(path.join(dir, "ejemplos.md"), mdTemplate("Ejemplos resueltos", ["Ejemplo 1 (pendiente)"]));
  writeFile(path.join(dir, "magnitudes.yaml"), magnitudesTemplate());
  writeFile(path.join(dir, "formulas.yaml"), formulasTemplate(id, nombre));
}

// ---------------------------
// ESTRUCTURA CANÓNICA V2
// ---------------------------
const STRUCTURE = {
  "fisica-clasica": {
    "fundamentos": [
      "metodo-cientifico",
      "magnitudes-fisicas",
      "unidades-y-conversiones",
      "vectores",
      "sistemas-referencia",
      "analisis-dimensional",
      "incertidumbre-y-errores",
      "graficas-y-modelado",
    ],

    "mecanica": {
      "fundamentos": [
        "sistemas-referencia",
        "vectores",
        "magnitudes-fisicas",
      ],

      "cinematica": [
        "mru",
        "mrua",
        "caida-libre",
        "tiro-horizontal",
        "tiro-parabolico",
        "mcu",
        "mcua",
        "movimiento-relativo",
      ],

      "dinamica": {
        "leyes-newton": [],
        "diagramas-fuerzas": [],
        "fuerzas": [
          "peso",
          "normal",
          "rozamiento",
          "tension",
          "fuerza-elastica",
        ],
        // ✅ Estática como parte de dinámica
        "estatica": [
          "equilibrio-traslacion",
          "equilibrio-rotacion",
          "centro-masas",
          "maquinas-simples",
        ],
        "aplicaciones": [],
      },

      "trabajo-energia": [
        "trabajo",
        "energia-cinetica",
        "energia-potencial",
        "conservacion-energia",
        "potencia",
        "rozamiento-y-disipacion",
      ],

      "cantidad-movimiento": [
        "momento-lineal",
        "impulso",
        "colisiones",
        "centro-masas",
      ],

      "rotacion": [
        "cinematica-rotacional",
        "dinamica-rotacional",
        "momento-inercia",
        "momento-angular",
        "rodadura",
      ],

      "gravitacion": [
        "ley-gravitacion-universal",
        "campo-gravitatorio",
        "energia-gravitatoria",
        "orbitas",
        "leyes-kepler",
      ],

      // 🔁 Muy habitual en currículos: fluidos (hidrostática e hidrodinámica)
      "fluidos": [
        "presion",
        "principio-pascal",
        "principio-arquimedes",
        "continuidad",
        "bernoulli",
        "viscosidad-intro",
      ],

      // 🔁 Oscilaciones mecánicas (se conectan con ondas)
      "oscilaciones": [
        "movimiento-armonico-simple",
        "pendulo",
        "energia-en-oscilaciones",
        "resonancia",
        "amortiguamiento",
      ],

      // 🎓 Universidad: mecánica analítica
      "mecanica-analitica": [
        "coordenadas-generalizadas",
        "principio-dalambert",
        "lagrangiano",
        "hamiltoniano",
        "simetrias-y-conservacion",
      ],
    },

    "ondas": {
      "ondas-mecanicas": [
        "concepto-onda",
        "tipos-de-ondas",
        "ecuacion-onda",
        "superposicion",
        "interferencia",
        "difraccion",
        "ondas-estacionarias",
        "sonido",
        "efecto-doppler",
      ],
      // ✅ Ondas electromagnéticas aquí (no en electromagnetismo/circuitos)
      "ondas-electromagneticas": [
        "naturaleza-em",
        "espectro-electromagnetico",
        "propagacion-en-el-vacio",
        "velocidad-de-la-luz",
        "polarizacion",
        "energia-e-intensidad",
        "interaccion-con-la-materia",
        "aplicaciones",
      ],
    },

    "optica": {
      "optica-geometrica": [
        "reflexion",
        "refraccion",
        "lentes",
        "espejos",
        "instrumentos-opticos",
      ],
      "optica-fisica": [
        "interferencia",
        "difraccion",
        "polarizacion",
        "coherencia",
      ],
    },

    "termodinamica": {
      "termodinamica-clasica": [
        "temperatura-y-calor",
        "gases-ideales",
        "primera-ley",
        "segunda-ley",
        "entropia",
        "procesos-termodinamicos",
        "maquinas-termicas",
        "refrigeracion-y-bombas-calor",
        "transferencia-calor",
      ],
      // ✅ Termodinámica estadística como sub-bloque avanzado
      "termodinamica-estadistica": [],
    },

    "electromagnetismo": {
      "electrostatica": [
        "carga-electrica",
        "ley-coulomb",
        "campo-electrico",
        "potencial-electrico",
        "capacitores",
      ],

      // ✅ CC y CA NO se contienen entre sí
      "corriente-continua": [
        "corriente-y-tension",
        "ley-ohm",
        "resistividad",
        "potencia-electrica",
      ],
      "corriente-alterna": [
        "magnitudes-senoidales",
        "valores-eficaces",
        "reactancia",
        "impedancia",
        "circuitos-rlc",
        "potencia-en-ca",
        "factor-potencia",
      ],

      "circuitos": [
        "leyes-kirchhoff",
        "serie-paralelo",
        "analisis-circuitos",
      ],

      "magnetismo": [
        "campo-magnetico",
        // ✅ Fuerza de Lorentz como tema general; "fuerza magnética" será sección interna
        "fuerza-lorentz",
        "movimiento-cargas-en-b",
        "materiales-magneticos",
      ],

      "induccion": [
        "faraday-lenz",
        "autoinduccion",
        "mutuainduccion",
        "transformadores",
      ],

      "electronica": [
        "componentes-pasivos",
        "diodos",
        "transistores",
        "opamps-basico",
        "filtros-basicos",
      ],
    },
  },

  "fisica-moderna": {
    "relatividad": [
      "postulados",
      "dilatacion-tiempo",
      "contraccion-longitud",
      "transformaciones-lorentz",
      "energia-momento",
      "relatividad-general-intro",
    ],
    "cuantica": [
      "dualidad-onda-particula",
      "principio-incertidumbre",
      "ecuacion-schrodinger-intro",
      "pozos-y-barreras",
      "atomo-hidrogeno-intro",
      "spin-y-exclusion",
    ],
    "atomica-y-molecular": [
      "modelos-atomicos",
      "espectros",
      "laser-intro",
      "moleculas-y-enlaces-intro",
    ],
    "nuclear-y-particulas": [
      "radioactividad",
      "fision",
      "fusion",
      "reactores-y-seguridad",
      "particulas-elementales-intro",
      "interacciones-fundamentales",
    ],
    "estado-solido": [
      "bandas-energia",
      "semiconductores",
      "superconductividad-intro",
    ],
    "astrofisica-y-cosmologia": [
      "gravedad-a-gran-escala",
      "expansion-universo",
      "agujeros-negros-intro",
      "radiacion-cosmica-fondo",
    ],
  },

  // Transversales (no enturbian la física)
  "matematicas": {
    "herramientas": [
      "algebra",
      "trigonometria",
      "geometria",
      "funciones-y-graficas",
      "calculo-derivadas",
      "calculo-integrales",
      "vectores-y-matrices",
      "ecuaciones-diferenciales-intro",
      "estadistica-basica",
    ],
  },

  "herramientas": {
    "uso-calculadora": [
      "calculadora-cientifica",
      "conversores-unidades",
      "notacion-cientifica",
      "graficas",
    ],
    "laboratorio": [
      "seguridad",
      "instrumentacion",
      "toma-datos",
      "analisis-incertidumbre",
      "memorias-informes",
    ],
  },

  // ✅ Bloque independiente: sostenibilidad / energía / red / almacenamiento / nuclear / apagones
  "sostenibilidad-energia": {
    "sistemas-energeticos": [
      "demanda-y-consumo",
      "mix-energetico",
      "eficiencia-energetica",
      "perdidas-y-redes",
    ],
    "energias-renovables": [
      "solar-fotovoltaica",
      "solar-termica",
      "eolica",
      "hidraulica",
      "geotermica",
      "biomasa",
      "hidrogeno-verde",
    ],
    "almacenamiento": [
      "baterias-introduccion",
      "tipos-baterias",
      "quimicas-y-materiales",
      "bms-y-seguridad",
      "costes-fabricacion",
      "reciclaje-y-ciclo-vida",
      "almacenamiento-red",
      "bombeo-hidraulico",
    ],
    "red-electrica-y-apagones": [
      "frecuencia-y-estabilidad",
      "equilibrio-generacion-demanda",
      "por-que-hay-apagones",
      "prevencion-y-resiliencia",
      "smart-grids-intro",
      "microredes",
    ],
    "energia-nuclear": [
      "fision",
      "seguridad-y-riesgos",
      "residuos",
      "costes-y-tiempo-construccion",
      "fusion-intro",
    ],
    "impacto-y-decision": [
      "huella-carbono",
      "lca-analisis-ciclo-vida",
      "coste-nivelado-energia",
      "mitos-y-evidencias",
    ],
    "movilidad": [
      "vehiculo-electrico",
      "infraestructura-carga",
      "baterias-en-movilidad",
      "transporte-publico",
      "aviacion-y-maritimo-intro",
    ],
  },
};

function isObject(x) {
  return x && typeof x === "object" && !Array.isArray(x);
}

// Construye un nodo (carpeta contenedora) y recorre hijos
function build(node, parts) {
  const dir = path.join(ROOT, ...parts);

  // Siempre creamos el nodo (index + overview) en carpetas intermedias
  createNode(dir);

  // Hoja: array de subtemas
  if (Array.isArray(node)) {
    for (const leafId of node) {
      const leafDir = path.join(dir, leafId);
      const [area, bloque, subbloque] = parts;
      createLeaf(leafDir, {
        area: area || "fisica-clasica",
        bloque: bloque || "general",
        subbloque: subbloque || "general",
      });
    }
    // además, actualizar index.yaml con hijos (solo ids directos)
    const rel = path.relative(ROOT, dir).replace(/\\/g, "/");
    writeFile(path.join(dir, "index.yaml"), indexTemplate({
      id: path.basename(dir),
      title: humanizeId(path.basename(dir)),
      rel,
      children: node,
    }));
    return;
  }

  // Nodo con hijos (objeto)
  if (isObject(node)) {
    const childrenIds = Object.keys(node);
    // actualizar index.yaml con hijos (carpetas)
    const rel = path.relative(ROOT, dir).replace(/\\/g, "/");
    writeFile(path.join(dir, "index.yaml"), indexTemplate({
      id: path.basename(dir),
      title: humanizeId(path.basename(dir)),
      rel,
      children: childrenIds,
    }));

    for (const [childKey, childNode] of Object.entries(node)) {
      build(childNode, [...parts, childKey]);
    }
    return;
  }

  // Hoja simple (string) — por si se usa
  if (typeof node === "string") {
    const leafDir = path.join(dir, node);
    const [area, bloque, subbloque] = parts;
    createLeaf(leafDir, {
      area: area || "fisica-clasica",
      bloque: bloque || "general",
      subbloque: subbloque || "general",
    });
  }
}

function main() {
  console.log("[INFO] ROOT:", ROOT);
  console.log(DRY ? "[MODE] DRY RUN" : "[MODE] WRITE");
  console.log(OVERWRITE ? "[MODE] OVERWRITE" : "[MODE] NO OVERWRITE");

  ensureDir(ROOT);

  for (const [top, subtree] of Object.entries(STRUCTURE)) {
    build(subtree, [top]);
  }

  console.log("\n[OK] Estructura creada/actualizada.");
  console.log("[TIP] Luego ejecuta:");
  console.log("  node scripts/v2-fill-meta.cjs");
  console.log("  node scripts/v2-auto-meta-fields.cjs");
  console.log("  node scripts/v2-validate.cjs");
}

main();
