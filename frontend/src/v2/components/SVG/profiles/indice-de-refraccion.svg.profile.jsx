import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
  SVG_CONTROL_TYPES,
} from "../svgGrammar";

const safeNum = (v, fallback) =>
  typeof v === "number" && isFinite(v) ? v : fallback;
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const tt = (obj, lang) => (obj && obj[lang]) || obj?.es || "";
const fmt = (v, d = 2) => (typeof v === "number" ? v.toFixed(d) : "—");

const profile = {
  meta: {
    id: "svg-indice-de-refraccion",
    leafId: "indice-de-refraccion",
    title: {
      es: "Índice de refracción",
      en: "Refractive Index",
    },
    description: {
      es: "Diagrama interactivo que muestra cómo el índice de refracción determina la velocidad y dirección de la luz al cruzar una interfaz.",
      en: "Interactive diagram showing how the refractive index determines the speed and direction of light when crossing an interface.",
    },
  },

  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo determina el índice de refracción la velocidad y la trayectoria de la luz al cruzar una interfaz?",
      en: "How does the refractive index determine the speed and trajectory of light when crossing an interface?",
    },
    magnitud_estrella: "indice_de_refraccion",
    variable_control: "theta_1",
  },

  interpretation_binding: {
    paramsIn: ["theta_1", "n"],
    stateOut: ["theta_2", "v_medio", "lambda_medio"],
    target: "n",
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 800 500",
  svgHeight: 500,

  motion: {
    type: SVG_MOTION_TYPES.NONE,
  },

  params: {
    schema: [
      {
        key: "theta_1",
        aliases: ["theta_i", "angulo_incidencia"],
        default: 40,
        label: { es: "θ₁ (°)", en: "θ₁ (°)" },
        unit: "°",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 85,
        step: 1,
        decimals: 0,
      },
      {
        key: "n",
        aliases: ["n2", "indice_refraccion"],
        default: 1.5,
        label: { es: "n (medio)", en: "n (medium)" },
        unit: "",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1.0,
        max: 2.5,
        step: 0.01,
        decimals: 2,
      },
    ],
    derivations: {
      theta_2: ({ theta_1, n }) => {
        const t1 = safeNum(theta_1, 40);
        const _n = safeNum(n, 1.5);
        const sinT2 = Math.sin((t1 * Math.PI) / 180) / _n;
        if (sinT2 > 1) return null;
        return (Math.asin(sinT2) * 180) / Math.PI;
      },
      v_medio: ({ n }) => {
        const _n = safeNum(n, 1.5);
        return 2.998e8 / _n;
      },
      lambda_medio: ({ n }) => {
        const _n = safeNum(n, 1.5);
        return 589 / _n;
      },
    },
  },

  infoCards: [
    {
      key: "refraccion",
      label: { es: "Refracción", en: "Refraction" },
      lines: ({ p: params, lang }) => {
        const t1 = safeNum(params.theta_1, 40);
        const t2 = params.theta_2;
        const _n = safeNum(params.n, 1.5);
        const v = params.v_medio;
        const lam = params.lambda_medio;
        const lines = [
          `n = ${fmt(_n, 2)}`,
          `θ₁ = ${fmt(t1, 1)}°`,
        ];
        if (t2 !== null && t2 !== undefined) {
          lines.push(`θ₂ = ${fmt(t2, 1)}°`);
        } else {
          lines.push(
            lang === "es"
              ? "θ₂: reflexión total (sin(θ₁)/n > 1)"
              : "θ₂: total reflection (sin(θ₁)/n > 1)"
          );
        }
        if (v !== null && v !== undefined) {
          lines.push(`v = ${fmt(v / 1e6, 1)} × 10⁶ m/s`);
        }
        if (lam !== null && lam !== undefined) {
          lines.push(`λ = ${fmt(lam, 1)} nm`);
        }
        return lines;
      },
      result: ({ p: params, lang }) => {
        const t2 = params.theta_2;
        if (t2 === null || t2 === undefined) {
          return lang === "es"
            ? "Reflexión total interna"
            : "Total internal reflection";
        }
        return lang === "es" ? "Refracción normal" : "Normal refraction";
      },
      resultColor: "#60a5fa",
    },
  ],

  render({ params: rawParams = {}, lang = "es" }) {
    const theta_1 = clamp(safeNum(rawParams.theta_1, 40), 0, 85);
    const _n = safeNum(rawParams.n, 1.5);
    const theta_2 = rawParams.theta_2;

    const cx = 400;
    const cy = 260;
    const rayLen = 190;

    const t1Rad = (theta_1 * Math.PI) / 180;

    // Incident ray (from upper-left toward interface)
    const ix = cx - rayLen * Math.sin(t1Rad);
    const iy = cy - rayLen * Math.cos(t1Rad);

    // Refracted ray
    let refractedEl = "";
    if (theta_2 !== null && theta_2 !== undefined) {
      const t2Rad = (theta_2 * Math.PI) / 180;
      const rfx = cx + rayLen * 0.8 * Math.sin(t2Rad);
      const rfy = cy + rayLen * 0.8 * Math.cos(t2Rad);
      refractedEl = `<line x1="${cx}" y1="${cy}" x2="${fmt(rfx, 1)}" y2="${fmt(rfy, 1)}" stroke="#60a5fa" stroke-width="2.5" />
      <polygon points="${fmt(rfx, 1)},${fmt(rfy, 1)} ${fmt(rfx - 8, 1)},${fmt(rfy - 12, 1)} ${fmt(rfx + 6, 1)},${fmt(rfy - 8, 1)}" fill="#60a5fa" />`;
    }

    // Reflected ray (partial reflection)
    const rx = cx + rayLen * 0.5 * Math.sin(t1Rad);
    const ry = cy - rayLen * 0.5 * Math.cos(t1Rad);
    const reflectedEl = `<line x1="${cx}" y1="${cy}" x2="${fmt(rx, 1)}" y2="${fmt(ry, 1)}" stroke="#f87171" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.6" />`;

    // Wavelength visualisation (compressed wave in medium)
    const waveY = cy + 80;
    const lamVac = 40;
    const lamMed = lamVac / _n;
    let waveCrests = "";
    for (let i = 0; i < 6; i++) {
      const xVac = 150 + i * lamVac;
      waveCrests += `<line x1="${xVac}" y1="${waveY - 8}" x2="${xVac}" y2="${waveY + 8}" stroke="#fbbf24" stroke-width="1.5" />`;
      const xMed = 500 + i * lamMed;
      waveCrests += `<line x1="${xMed}" y1="${waveY - 8}" x2="${xMed}" y2="${waveY + 8}" stroke="#60a5fa" stroke-width="1.5" />`;
    }

    const labelT1 = "θ₁";
    const labelT2 = "θ₂";
    const mediumLabel = lang === "es" ? `Medio (n=${fmt(_n, 2)})` : `Medium (n=${fmt(_n, 2)})`;
    const vacuumLabel = lang === "es" ? "Vacío / Aire (n≈1)" : "Vacuum / Air (n≈1)";
    const lamLabel = lang === "es" ? "λ en vacío" : "λ in vacuum";
    const lamMedLabel = lang === "es" ? "λ en medio" : "λ in medium";

    const totalLabel =
      theta_2 === null || theta_2 === undefined
        ? lang === "es"
          ? "REFLEXIÓN TOTAL"
          : "TOTAL REFLECTION"
        : "";

    return `
      <!-- Background media -->
      <rect x="0" y="0" width="800" height="${cy}" fill="#1e293b" opacity="0.3" />
      <rect x="0" y="${cy}" width="800" height="${500 - cy}" fill="#0f4c75" opacity="0.25" />

      <!-- Interface -->
      <line x1="100" y1="${cy}" x2="700" y2="${cy}" stroke="#94a3b8" stroke-width="2" />

      <!-- Normal -->
      <line x1="${cx}" y1="${cy - 210}" x2="${cx}" y2="${cy + 160}" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,5" />
      <text x="${cx + 5}" y="${cy - 215}" font-size="11" fill="#94a3b8">Normal</text>

      <!-- Incident ray -->
      <line x1="${fmt(ix, 1)}" y1="${fmt(iy, 1)}" x2="${cx}" y2="${cy}" stroke="#fbbf24" stroke-width="2.5" />
      <polygon points="${cx},${cy} ${cx - 8},${cy - 16} ${cx + 2},${cy - 12}" fill="#fbbf24" />

      <!-- Reflected ray (partial) -->
      ${reflectedEl}

      <!-- Refracted ray -->
      ${refractedEl}

      <!-- Angle labels -->
      <text x="${cx - 60}" y="${cy - 45}" font-size="13" fill="#fbbf24" font-weight="bold">${labelT1}</text>
      ${theta_2 !== null && theta_2 !== undefined ? `<text x="${cx + 25}" y="${cy + 55}" font-size="13" fill="#60a5fa" font-weight="bold">${labelT2}</text>` : ""}

      <!-- Medium labels -->
      <text x="120" y="35" font-size="13" fill="#e2e8f0">${vacuumLabel}</text>
      <text x="120" y="${cy + 25}" font-size="13" fill="#7dd3fc">${mediumLabel}</text>

      <!-- Wavelength comparison -->
      <line x1="140" y1="${waveY}" x2="390" y2="${waveY}" stroke="#fbbf24" stroke-width="1" opacity="0.5" />
      <line x1="490" y1="${waveY}" x2="700" y2="${waveY}" stroke="#60a5fa" stroke-width="1" opacity="0.5" />
      ${waveCrests}
      <text x="200" y="${waveY + 25}" font-size="11" fill="#fbbf24">${lamLabel}</text>
      <text x="540" y="${waveY + 25}" font-size="11" fill="#60a5fa">${lamMedLabel}</text>

      <!-- Total reflection indicator -->
      ${totalLabel ? `<text x="${cx}" y="480" font-size="14" fill="#ef4444" text-anchor="middle" font-weight="bold">${totalLabel}</text>` : ""}
    `;
  },
};

export default profile;
