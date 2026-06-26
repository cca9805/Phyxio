// frontend/src/v2/components/SVG/profiles/lentes.svg.profile.jsx
//
// Profile SVG para: lentes (Nivel 5 v5)
// Escena: lente delgada con objeto, imagen, focos y rayos principales
//
import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
} from "../svgGrammar";

/* ── Helpers locales ─────────────────────────────────────────────────── */
const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const tt = (lang, es, en) => (lang === "en" ? en : es);

const fmt = (n, d = 2, lang = "es") => {
  if (!Number.isFinite(n)) return "-";
  const text = n.toFixed(d);
  return lang === "en" ? text : text.replace(".", ",");
};

/* ════════════════════════════════════════════════════════════════════════
 * PROFILE
 * ════════════════════════════════════════════════════════════════════════ */
const profile = {
  meta: {
    id: "svg-lentes",
    leafId: "lentes",
    title: {
      es: "Lentes",
      en: "Lenses",
    },
    subtitle: {
      es: "Formacion de imagenes por refraccion en lentes delgadas",
      en: "Image formation by refraction in thin lenses",
    },
    graph_identity: "lentes-ray-diagram",
    pregunta_principal: {
      es: "Como determina la distancia focal de una lente delgada la posicion y el tamano de la imagen formada?",
      en: "How does the focal length of a thin lens determine the position and size of the image formed?",
    },
    magnitud_estrella: "d_i",
    interpretation_binding: {
      formula_ref: "ecuacion_lente_delgada",
      target: "d_i",
    },
    magnitud_visual: {
      d_o: "object-position-x",
      d_i: "image-position-x",
      f: "focus-position-x",
      m: "image-arrow-height",
    },
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 900 450",
  svgHeight: 500,

  motion: {
    type: SVG_MOTION_TYPES.NONE,
  },

  /* ── Parametros del simulador ─────────────────────────────────────── */
  params: {
    schema: [
      {
        key: "d_o",
        aliases: ["do", "distancia_objeto"],
        default: 0.30,
        label: { es: "d_o (m)", en: "d_o (m)" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.05,
        max: 2.0,
        step: 0.01,
        decimals: 2,
      },
      {
        key: "f",
        aliases: ["focal", "distancia_focal"],
        default: 0.15,
        label: { es: "f (m)", en: "f (m)" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -1.0,
        max: 1.0,
        step: 0.01,
        decimals: 2,
      },
      {
        key: "h_obj",
        aliases: ["altura_objeto", "object_height"],
        default: 0.03,
        label: { es: "Altura objeto (m)", en: "Object height (m)" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.005,
        max: 0.15,
        step: 0.005,
        decimals: 3,
      },
    ],
    derivations: {
      d_i: ({ d_o, f }) => {
        const _do = safeNum(d_o, 0.30);
        const _f = safeNum(f, 0.15);
        if (Math.abs(_do - _f) < 1e-9) return Infinity;
        return (_f * _do) / (_do - _f);
      },
      m: ({ d_o, f }) => {
        const _do = safeNum(d_o, 0.30);
        const _f = safeNum(f, 0.15);
        if (Math.abs(_do - _f) < 1e-9) return Infinity;
        const _di = (_f * _do) / (_do - _f);
        return -_di / _do;
      },
    },
  },

  /* ── Tarjetas de informacion ─────────────────────────────────────── */
  infoCards: [
    {
      key: "imagen",
      label: { es: "Imagen", en: "Image" },
      lines: ({ p: params, lang }) => {
        const _do = safeNum(params?.d_o, 0.30);
        const _f = safeNum(params?.f, 0.15);
        const _di = Math.abs(_do - _f) < 1e-9 ? Infinity : (_f * _do) / (_do - _f);
        const _m = Math.abs(_do - _f) < 1e-9 ? Infinity : -_di / _do;
        const tipo = _di > 0
          ? tt(lang, "Real", "Real")
          : tt(lang, "Virtual", "Virtual");
        const orient = _m > 0
          ? tt(lang, "Derecha", "Upright")
          : tt(lang, "Invertida", "Inverted");
        return [
          `d_i = ${fmt(_di, 3, lang)} m (${tipo})`,
          `m = ${fmt(_m, 2, lang)} (${orient})`,
          `f = ${fmt(_f, 3, lang)} m`,
        ];
      },
      result: ({ p: params, lang }) => {
        const _do = safeNum(params?.d_o, 0.30);
        const _f = safeNum(params?.f, 0.15);
        const _di = Math.abs(_do - _f) < 1e-9 ? Infinity : (_f * _do) / (_do - _f);
        return `d_i = ${fmt(_di, 3, lang)} m`;
      },
      resultColor: "#facc15",
    },
    {
      key: "aumento",
      label: { es: "Aumento lateral", en: "Lateral magnification" },
      lines: ({ p: params, lang }) => {
        const _do = safeNum(params?.d_o, 0.30);
        const _f = safeNum(params?.f, 0.15);
        const _di = Math.abs(_do - _f) < 1e-9 ? Infinity : (_f * _do) / (_do - _f);
        const _m = Math.abs(_do - _f) < 1e-9 ? Infinity : -_di / _do;
        const h_obj = safeNum(params?.h_obj, 0.03);
        const h_img = _m * h_obj;
        return [
          `m = ${fmt(_m, 3, lang)}`,
          `h_img = ${fmt(h_img * 100, 1, lang)} cm`,
        ];
      },
      result: ({ p: params, lang }) => {
        const _do = safeNum(params?.d_o, 0.30);
        const _f = safeNum(params?.f, 0.15);
        const _di = Math.abs(_do - _f) < 1e-9 ? Infinity : (_f * _do) / (_do - _f);
        const _m = Math.abs(_do - _f) < 1e-9 ? Infinity : -_di / _do;
        return `m = ${fmt(_m, 3, lang)}`;
      },
      resultColor: "#818cf8",
    },
  ],

  /* ── Render SVG ───────────────────────────────────────────────────── */
  render({ params: rawParams = {}, lang = "es" }) {
    const _do = clamp(safeNum(rawParams?.d_o, 0.30), 0.05, 2.0);
    const _f = clamp(safeNum(rawParams?.f, 0.15), -1.0, 1.0);
    const h_obj = clamp(safeNum(rawParams?.h_obj, 0.03), 0.005, 0.15);

    const _di = Math.abs(_do - _f) < 1e-9 ? 1e6 : (_f * _do) / (_do - _f);
    const _m = Math.abs(_do - _f) < 1e-9 ? 1e6 : -_di / _do;
    const h_img = _m * h_obj;

    const W = 900;
    const H = 450;

    // Lente en el centro horizontal
    const lensX = W / 2;
    const axisY = H / 2;

    // Escala: px por metro
    const scale = 250;

    // Posiciones en px (objeto a la izquierda, positivo hacia la derecha para imagen)
    const objX = lensX - _do * scale;
    const imgX = lensX + _di * scale;
    const focusLeftX = lensX - Math.abs(_f) * scale;
    const focusRightX = lensX + Math.abs(_f) * scale;

    // Alturas en px
    const objH = h_obj * scale * 10;
    const imgH = h_img * scale * 10;

    const lensH = 160; // media altura visual de la lente

    // Colores
    const colorAxis = "rgba(226,232,240,0.3)";
    const colorLens = "#60a5fa";
    const colorObj = "#34d399";
    const colorImg = "#facc15";
    const colorRay = "rgba(251,191,36,0.6)";
    const colorFocus = "#f472b6";
    const colorText = "#e2e8f0";
    const colorMuted = "rgba(226,232,240,0.55)";

    const isConverging = _f > 0;
    const isRealImage = _di > 0;

    // Puntas de la lente (forma biconvexa o biconcava)
    const lensTop = axisY - lensH;
    const lensBot = axisY + lensH;
    const lensCurve = isConverging ? 20 : -20;

    const tipo = isRealImage
      ? tt(lang, "Real", "Real")
      : tt(lang, "Virtual", "Virtual");
    const orient = _m > 0
      ? tt(lang, "Derecha", "Upright")
      : tt(lang, "Invertida", "Inverted");
    const lensType = isConverging
      ? tt(lang, "Convergente", "Converging")
      : tt(lang, "Divergente", "Diverging");

    return (
      <g>
        <defs>
          <linearGradient id="lenBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#071520" />
            <stop offset="100%" stopColor="#0c1e30" />
          </linearGradient>
        </defs>

        {/* Fondo */}
        <rect x="0" y="0" width={W} height={H} fill="url(#lenBg)" />

        {/* Eje optico */}
        <line x1="20" y1={axisY} x2={W - 20} y2={axisY}
          stroke={colorAxis} strokeWidth={1} strokeDasharray="6 4" />

        {/* Lente (doble arco) */}
        <path
          d={`M ${lensX} ${lensTop} Q ${lensX + lensCurve} ${axisY} ${lensX} ${lensBot}`}
          fill="none"
          stroke={colorLens}
          strokeWidth={3}
        />
        <path
          d={`M ${lensX} ${lensTop} Q ${lensX - lensCurve} ${axisY} ${lensX} ${lensBot}`}
          fill="none"
          stroke={colorLens}
          strokeWidth={3}
        />

        {/* Flechas en puntas de lente convergente */}
        {isConverging && (
          <>
            <polygon points={`${lensX},${lensTop} ${lensX - 6},${lensTop + 12} ${lensX + 6},${lensTop + 12}`} fill={colorLens} />
            <polygon points={`${lensX},${lensBot} ${lensX - 6},${lensBot - 12} ${lensX + 6},${lensBot - 12}`} fill={colorLens} />
          </>
        )}

        {/* Centro optico O */}
        <circle cx={lensX} cy={axisY} r={4} fill={colorLens} />
        <text x={lensX} y={axisY + 20} fill={colorLens} fontSize="12" fontWeight="700" textAnchor="middle">O</text>

        {/* Foco F (izquierdo) */}
        <circle cx={focusLeftX} cy={axisY} r={4} fill={colorFocus} />
        <text x={focusLeftX} y={axisY + 20} fill={colorFocus} fontSize="12" fontWeight="700" textAnchor="middle">F</text>

        {/* Foco F' (derecho) */}
        <circle cx={focusRightX} cy={axisY} r={4} fill={colorFocus} />
        <text x={focusRightX} y={axisY + 20} fill={colorFocus} fontSize="12" fontWeight="700" textAnchor="middle">F'</text>

        {/* Objeto (flecha verde) */}
        <line x1={objX} y1={axisY} x2={objX} y2={axisY - objH}
          stroke={colorObj} strokeWidth={3} />
        <polygon
          points={`${objX},${axisY - objH} ${objX - 5},${axisY - objH + 10} ${objX + 5},${axisY - objH + 10}`}
          fill={colorObj}
        />
        <text x={objX} y={axisY + 16} fill={colorObj} fontSize="11" fontWeight="700" textAnchor="middle">
          {tt(lang, "Objeto", "Object")}
        </text>

        {/* Imagen (flecha amarilla) */}
        {Number.isFinite(_di) && Math.abs(_di) < 5 && (
          <g opacity={isRealImage ? 1 : 0.5}>
            <line x1={imgX} y1={axisY} x2={imgX} y2={axisY - imgH}
              stroke={colorImg} strokeWidth={3}
              strokeDasharray={isRealImage ? "none" : "5 3"} />
            <polygon
              points={`${imgX},${axisY - imgH} ${imgX - 5},${axisY - imgH + (imgH > 0 ? 10 : -10)} ${imgX + 5},${axisY - imgH + (imgH > 0 ? 10 : -10)}`}
              fill={colorImg}
              opacity={isRealImage ? 1 : 0.5}
            />
            <text x={imgX} y={axisY + 16} fill={colorImg} fontSize="11" fontWeight="700" textAnchor="middle">
              {tt(lang, "Imagen", "Image")}
            </text>
          </g>
        )}

        {/* Rayo 1: paralelo al eje → refractado por F' */}
        <line x1={objX} y1={axisY - objH} x2={lensX} y2={axisY - objH}
          stroke={colorRay} strokeWidth={1.5} />
        {Number.isFinite(_di) && Math.abs(_di) < 5 && (
          <line x1={lensX} y1={axisY - objH} x2={imgX} y2={axisY - imgH}
            stroke={colorRay} strokeWidth={1.5} strokeDasharray={isRealImage ? "none" : "4 3"} />
        )}

        {/* Rayo 2: pasa por el centro optico (no se desvía) */}
        {Number.isFinite(_di) && Math.abs(_di) < 5 && (
          <line x1={objX} y1={axisY - objH} x2={imgX} y2={axisY - imgH}
            stroke={colorRay} strokeWidth={1.5} opacity={0.7}
            strokeDasharray={isRealImage ? "none" : "4 3"} />
        )}

        {/* Rayo 3: pasa por F → sale paralelo */}
        {isConverging && Math.abs(_do - _f) > 0.01 && (
          <>
            <line x1={objX} y1={axisY - objH} x2={lensX}
              y2={axisY - objH + (lensX - objX) * objH / (focusLeftX - objX) * (-1) + objH * (lensX - objX) / (objX - focusLeftX)}
              stroke={colorRay} strokeWidth={1.5} opacity={0.5} />
          </>
        )}

        {/* Panel de resultados */}
        <rect x={W / 2 - 140} y={10} width={280} height={56}
          rx="8" fill="rgba(0,0,0,0.6)" stroke="rgba(250,204,21,0.3)" strokeWidth={1} />
        <text x={W / 2} y={30} fill={colorImg} fontSize="12" fontWeight="900" textAnchor="middle">
          d_i = {fmt(_di, 3, lang)} m ({tipo})
        </text>
        <text x={W / 2} y={48} fill={colorMuted} fontSize="11" textAnchor="middle">
          m = {fmt(_m, 2, lang)} ({orient}) | f = {fmt(_f, 3, lang)} m
        </text>
        <text x={W / 2} y={62} fill={colorMuted} fontSize="10" textAnchor="middle">
          {tt(lang, "Lente", "Lens")}: {lensType}
        </text>
      </g>
    );
  },
};

export default profile;
