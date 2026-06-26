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
    id: "svg-reflexion",
    leafId: "reflexion",
    title: {
      es: "Reflexión",
      en: "Reflection",
    },
    description: {
      es: "Diagrama interactivo de reflexión de la luz con ángulo de incidencia ajustable y visualización del ángulo crítico.",
      en: "Interactive light reflection diagram with adjustable angle of incidence and critical angle visualisation.",
    },
  },

  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo determina el ángulo de incidencia la dirección del rayo reflejado en una superficie especular?",
      en: "How does the angle of incidence determine the direction of the reflected ray on a specular surface?",
    },
    magnitud_estrella: "theta_r",
  },

  interpretation_binding: {
    paramsIn: ["theta_i", "n1", "n2"],
    stateOut: ["theta_r", "theta_c", "is_total"],
    target: "theta_r",
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
        key: "theta_i",
        aliases: ["thetai", "angulo_incidencia"],
        default: 45,
        label: { es: "θ_i (°)", en: "θ_i (°)" },
        unit: "°",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 85,
        step: 1,
        decimals: 0,
      },
      {
        key: "n1",
        aliases: ["n_1", "indice1"],
        default: 1.5,
        label: { es: "n₁", en: "n₁" },
        unit: "",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1.0,
        max: 2.5,
        step: 0.01,
        decimals: 2,
      },
      {
        key: "n2",
        aliases: ["n_2", "indice2"],
        default: 1.0,
        label: { es: "n₂", en: "n₂" },
        unit: "",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1.0,
        max: 2.5,
        step: 0.01,
        decimals: 2,
      },
    ],
    derivations: {
      theta_r: ({ theta_i }) => safeNum(theta_i, 45),
      theta_c: ({ n1, n2 }) => {
        const _n1 = safeNum(n1, 1.5);
        const _n2 = safeNum(n2, 1.0);
        if (_n1 <= _n2) return null;
        const ratio = _n2 / _n1;
        return (Math.asin(ratio) * 180) / Math.PI;
      },
      is_total: ({ theta_i, n1, n2 }) => {
        const _n1 = safeNum(n1, 1.5);
        const _n2 = safeNum(n2, 1.0);
        if (_n1 <= _n2) return false;
        const tc = (Math.asin(_n2 / _n1) * 180) / Math.PI;
        return safeNum(theta_i, 45) >= tc;
      },
    },
  },

  infoCards: [
    {
      key: "angulos",
      label: { es: "Ángulos", en: "Angles" },
      lines: ({ p: params, lang }) => {
        const ti = safeNum(params.theta_i, 45);
        const tr = safeNum(params.theta_r, ti);
        const tc = params.theta_c;
        const lines = [
          `θ_i = ${fmt(ti, 1)}°`,
          `θ_r = ${fmt(tr, 1)}°`,
        ];
        if (tc !== null && tc !== undefined) {
          lines.push(`θ_c = ${fmt(tc, 1)}°`);
        } else {
          lines.push(
            lang === "es"
              ? "θ_c: no existe (n₁ ≤ n₂)"
              : "θ_c: does not exist (n₁ ≤ n₂)"
          );
        }
        return lines;
      },
      result: ({ p: params, lang }) => {
        if (params.is_total) {
          return lang === "es"
            ? "Reflexión total interna"
            : "Total internal reflection";
        }
        return lang === "es" ? "Reflexión parcial" : "Partial reflection";
      },
      resultColor: "#facc15",
    },
  ],

  render({ params: rawParams = {}, lang = "es" }) {
    const theta_i = clamp(safeNum(rawParams.theta_i, 45), 0, 85);
    const theta_r = theta_i;
    const n1 = safeNum(rawParams.n1, 1.5);
    const n2 = safeNum(rawParams.n2, 1.0);
    const tc = rawParams.theta_c;
    const isTotal = rawParams.is_total;

    const cx = 400;
    const cy = 280;
    const rayLen = 200;

    const tiRad = (theta_i * Math.PI) / 180;
    const trRad = (theta_r * Math.PI) / 180;

    // Incident ray (coming from upper-left)
    const ix = cx - rayLen * Math.sin(tiRad);
    const iy = cy - rayLen * Math.cos(tiRad);

    // Reflected ray (going to upper-right)
    const rx = cx + rayLen * Math.sin(trRad);
    const ry = cy - rayLen * Math.cos(trRad);

    // Refracted ray (if not total)
    let refractedEl = null;
    if (!isTotal && n1 > n2) {
      const sinRefr = (n1 * Math.sin(tiRad)) / n2;
      if (sinRefr <= 1) {
        const refrRad = Math.asin(sinRefr);
        const rfx = cx + (rayLen * 0.7) * Math.sin(refrRad);
        const rfy = cy + (rayLen * 0.7) * Math.cos(refrRad);
        refractedEl = `<line x1="${cx}" y1="${cy}" x2="${fmt(rfx, 1)}" y2="${fmt(rfy, 1)}" stroke="#60a5fa" stroke-width="2" stroke-dasharray="6,4" />`;
      }
    } else if (n1 <= n2) {
      const sinRefr = (n1 * Math.sin(tiRad)) / n2;
      if (sinRefr <= 1) {
        const refrRad = Math.asin(sinRefr);
        const rfx = cx + (rayLen * 0.7) * Math.sin(refrRad);
        const rfy = cy + (rayLen * 0.7) * Math.cos(refrRad);
        refractedEl = `<line x1="${cx}" y1="${cy}" x2="${fmt(rfx, 1)}" y2="${fmt(rfy, 1)}" stroke="#60a5fa" stroke-width="2" stroke-dasharray="6,4" />`;
      }
    }

    // Critical angle marker
    let criticalEl = "";
    if (tc !== null && tc !== undefined && n1 > n2) {
      const tcRad = (tc * Math.PI) / 180;
      const tcx = cx + 80 * Math.sin(tcRad);
      const tcy = cy - 80 * Math.cos(tcRad);
      criticalEl = `<line x1="${cx}" y1="${cy}" x2="${fmt(tcx, 1)}" y2="${fmt(tcy, 1)}" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.7" />
      <text x="${fmt(tcx + 5, 1)}" y="${fmt(tcy - 5, 1)}" font-size="11" fill="#f97316">θ_c</text>`;
    }

    // Angle arcs
    const arcR = 40;
    const iArcEndX = cx - arcR * Math.sin(tiRad);
    const iArcEndY = cy - arcR * Math.cos(tiRad);
    const rArcEndX = cx + arcR * Math.sin(trRad);
    const rArcEndY = cy - arcR * Math.cos(trRad);

    const labelOffI = lang === "es" ? "θᵢ" : "θᵢ";
    const labelOffR = lang === "es" ? "θᵣ" : "θᵣ";

    const medium1Label = lang === "es" ? `Medio 1 (n₁=${fmt(n1, 2)})` : `Medium 1 (n₁=${fmt(n1, 2)})`;
    const medium2Label = lang === "es" ? `Medio 2 (n₂=${fmt(n2, 2)})` : `Medium 2 (n₂=${fmt(n2, 2)})`;

    const totalLabel = isTotal
      ? lang === "es"
        ? "REFLEXIÓN TOTAL"
        : "TOTAL REFLECTION"
      : "";

    return `
      <!-- Background media -->
      <rect x="0" y="0" width="800" height="${cy}" fill="#1e293b" opacity="0.3" />
      <rect x="0" y="${cy}" width="800" height="${500 - cy}" fill="#334155" opacity="0.3" />

      <!-- Surface -->
      <line x1="100" y1="${cy}" x2="700" y2="${cy}" stroke="#94a3b8" stroke-width="2" />

      <!-- Normal -->
      <line x1="${cx}" y1="${cy - 220}" x2="${cx}" y2="${cy + 150}" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,5" />
      <text x="${cx + 5}" y="${cy - 225}" font-size="11" fill="#94a3b8">${lang === "es" ? "Normal" : "Normal"}</text>

      <!-- Incident ray -->
      <line x1="${fmt(ix, 1)}" y1="${fmt(iy, 1)}" x2="${cx}" y2="${cy}" stroke="#fbbf24" stroke-width="2.5" />
      <polygon points="${cx},${cy} ${cx - 8},${cy - 16} ${cx + 2},${cy - 12}" fill="#fbbf24" />

      <!-- Reflected ray -->
      <line x1="${cx}" y1="${cy}" x2="${fmt(rx, 1)}" y2="${fmt(ry, 1)}" stroke="#f87171" stroke-width="2.5" />
      <polygon points="${fmt(rx, 1)},${fmt(ry, 1)} ${fmt(rx - 10, 1)},${fmt(ry + 8, 1)} ${fmt(rx - 2, 1)},${fmt(ry + 14, 1)}" fill="#f87171" />

      <!-- Refracted ray -->
      ${refractedEl || ""}

      <!-- Critical angle marker -->
      ${criticalEl}

      <!-- Angle labels -->
      <text x="${cx - 55}" y="${cy - 50}" font-size="13" fill="#fbbf24" font-weight="bold">${labelOffI}</text>
      <text x="${cx + 35}" y="${cy - 50}" font-size="13" fill="#f87171" font-weight="bold">${labelOffR}</text>

      <!-- Medium labels -->
      <text x="120" y="40" font-size="13" fill="#e2e8f0">${medium1Label}</text>
      <text x="120" y="${cy + 30}" font-size="13" fill="#cbd5e1">${medium2Label}</text>

      <!-- Total reflection indicator -->
      ${totalLabel ? `<text x="${cx}" y="480" font-size="14" fill="#ef4444" text-anchor="middle" font-weight="bold">${totalLabel}</text>` : ""}
    `;
  },
};

export default profile;
