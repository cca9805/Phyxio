// frontend/src/v2/components/SVG/profiles/espejos.svg.profile.jsx
//
// Profile SVG para: espejos (Nivel 5 v5)
// Escena: espejo esferico con objeto, imagen, foco, centro de curvatura y rayos principales
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
    id: "svg-espejos",
    leafId: "espejos",
    title: {
      es: "Espejos",
      en: "Mirrors",
    },
    subtitle: {
      es: "Formacion de imagenes por reflexion en espejos esfericos",
      en: "Image formation by reflection in spherical mirrors",
    },
    graph_identity: "espejos-ray-diagram",
    pregunta_principal: {
      es: "Como determinan la distancia del objeto al espejo y la curvatura de la superficie la posicion y el tamano de la imagen formada?",
      en: "How do the object distance and the surface curvature determine the position and size of the image formed?",
    },
    magnitud_estrella: "d_i",
    interpretation_binding: {
      formula: "ecuacion_espejo",
      target: "d_i",
    },
    magnitud_visual: {
      d_o: "object-position-x",
      d_i: "image-position-x",
      f: "focus-position-x",
      M: "image-arrow-height",
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
        key: "R",
        aliases: ["radio", "radius"],
        default: 0.40,
        label: { es: "R (m)", en: "R (m)" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -2.0,
        max: 2.0,
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
      f: ({ R }) => safeNum(R, 0.40) / 2,
      d_i: ({ d_o, R }) => {
        const _do = safeNum(d_o, 0.30);
        const _f = safeNum(R, 0.40) / 2;
        if (Math.abs(_do - _f) < 1e-9) return Infinity;
        return (_f * _do) / (_do - _f);
      },
      M: ({ d_o, R }) => {
        const _do = safeNum(d_o, 0.30);
        const _f = safeNum(R, 0.40) / 2;
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
        const _f = safeNum(params?.R, 0.40) / 2;
        const _di = Math.abs(_do - _f) < 1e-9 ? Infinity : (_f * _do) / (_do - _f);
        const _M = Math.abs(_do - _f) < 1e-9 ? Infinity : -_di / _do;
        const tipo = _di > 0
          ? tt(lang, "Real", "Real")
          : tt(lang, "Virtual", "Virtual");
        const orient = _M > 0
          ? tt(lang, "Derecha", "Upright")
          : tt(lang, "Invertida", "Inverted");
        return [
          `d_i = ${fmt(_di, 3, lang)} m (${tipo})`,
          `M = ${fmt(_M, 2, lang)} (${orient})`,
          `f = ${fmt(_f, 3, lang)} m`,
        ];
      },
      result: ({ p: params, lang }) => {
        const _do = safeNum(params?.d_o, 0.30);
        const _f = safeNum(params?.R, 0.40) / 2;
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
        const _f = safeNum(params?.R, 0.40) / 2;
        const _di = Math.abs(_do - _f) < 1e-9 ? Infinity : (_f * _do) / (_do - _f);
        const _M = Math.abs(_do - _f) < 1e-9 ? Infinity : -_di / _do;
        const h_obj = safeNum(params?.h_obj, 0.03);
        const h_img = _M * h_obj;
        return [
          `M = ${fmt(_M, 3, lang)}`,
          `h_img = ${fmt(h_img * 100, 1, lang)} cm`,
        ];
      },
      result: ({ p: params, lang }) => {
        const _do = safeNum(params?.d_o, 0.30);
        const _f = safeNum(params?.R, 0.40) / 2;
        const _di = Math.abs(_do - _f) < 1e-9 ? Infinity : (_f * _do) / (_do - _f);
        const _M = Math.abs(_do - _f) < 1e-9 ? Infinity : -_di / _do;
        return `M = ${fmt(_M, 3, lang)}`;
      },
      resultColor: "#818cf8",
    },
  ],

  /* ── Render SVG ───────────────────────────────────────────────────── */
  render({ params: rawParams = {}, lang = "es" }) {
    const _do = clamp(safeNum(rawParams?.d_o, 0.30), 0.05, 2.0);
    const _R = clamp(safeNum(rawParams?.R, 0.40), -2.0, 2.0);
    const h_obj = clamp(safeNum(rawParams?.h_obj, 0.03), 0.005, 0.15);

    const _f = _R / 2;
    const _di = Math.abs(_do - _f) < 1e-9 ? 1e6 : (_f * _do) / (_do - _f);
    const _M = Math.abs(_do - _f) < 1e-9 ? 1e6 : -_di / _do;
    const h_img = _M * h_obj;

    const W = 900;
    const H = 450;

    // Espejo en el centro horizontal
    const mirrorX = W / 2;
    const axisY = H / 2;

    // Escala: px por metro
    const scale = 250;

    // Posiciones en px
    const objX = mirrorX - _do * scale;
    const imgX = mirrorX - _di * scale; // negativo d_i → detras del espejo → mirrorX + |d_i|*scale
    const focusX = mirrorX - _f * scale;
    const centerX = mirrorX - _R * scale;

    // Alturas en px
    const objH = h_obj * scale * 10; // escalado visual
    const imgH = h_img * scale * 10;

    const mirrorH = 160; // media altura visual del espejo

    // Colores
    const colorAxis = "rgba(226,232,240,0.3)";
    const colorMirror = "#60a5fa";
    const colorObj = "#34d399";
    const colorImg = "#facc15";
    const colorRay = "rgba(251,191,36,0.6)";
    const colorFocus = "#f472b6";
    const colorText = "#e2e8f0";
    const colorMuted = "rgba(226,232,240,0.55)";

    // Curvatura del espejo (arco)
    const isConcave = _R > 0;
    const arcRadius = Math.abs(_R) * scale;
    const sweepFlag = isConcave ? 1 : 0;

    // Puntos superior e inferior del espejo
    const mTop = axisY - mirrorH;
    const mBot = axisY + mirrorH;

    // Centro del arco para dibujar curvatura visual
    const arcCenterX = isConcave ? mirrorX + arcRadius : mirrorX - arcRadius;

    // Calcular desplazamiento del arco
    const sagitta = arcRadius - Math.sqrt(Math.max(0, arcRadius * arcRadius - mirrorH * mirrorH));
    const arcStartX = isConcave ? mirrorX + sagitta : mirrorX - sagitta;

    const tipo = _di > 0
      ? tt(lang, "Real", "Real")
      : tt(lang, "Virtual", "Virtual");
    const orient = _M > 0
      ? tt(lang, "Derecha", "Upright")
      : tt(lang, "Invertida", "Inverted");

    return (
      <g>
        <defs>
          <linearGradient id="espBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#071520" />
            <stop offset="100%" stopColor="#0c1e30" />
          </linearGradient>
        </defs>

        {/* Fondo */}
        <rect x="0" y="0" width={W} height={H} fill="url(#espBg)" />

        {/* Eje optico */}
        <line x1="20" y1={axisY} x2={W - 20} y2={axisY}
          stroke={colorAxis} strokeWidth={1} strokeDasharray="6 4" />

        {/* Espejo (arco) */}
        <path
          d={`M ${arcStartX} ${mTop} A ${arcRadius} ${arcRadius} 0 0 ${sweepFlag} ${arcStartX} ${mBot}`}
          fill="none"
          stroke={colorMirror}
          strokeWidth={4}
        />

        {/* Vertice V */}
        <circle cx={mirrorX} cy={axisY} r={4} fill={colorMirror} />
        <text x={mirrorX} y={axisY + 20} fill={colorMirror} fontSize="12" fontWeight="700" textAnchor="middle">V</text>

        {/* Foco F */}
        <circle cx={focusX} cy={axisY} r={4} fill={colorFocus} />
        <text x={focusX} y={axisY + 20} fill={colorFocus} fontSize="12" fontWeight="700" textAnchor="middle">F</text>

        {/* Centro de curvatura C */}
        <circle cx={centerX} cy={axisY} r={4} fill={colorFocus} opacity={0.6} />
        <text x={centerX} y={axisY + 20} fill={colorFocus} fontSize="11" fontWeight="700" textAnchor="middle" opacity={0.7}>C</text>

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
          <g opacity={_di < 0 ? 0.5 : 1}>
            <line x1={imgX} y1={axisY} x2={imgX} y2={axisY - imgH}
              stroke={colorImg} strokeWidth={3}
              strokeDasharray={_di < 0 ? "5 3" : "none"} />
            <polygon
              points={`${imgX},${axisY - imgH} ${imgX - 5},${axisY - imgH + (imgH > 0 ? 10 : -10)} ${imgX + 5},${axisY - imgH + (imgH > 0 ? 10 : -10)}`}
              fill={colorImg}
              opacity={_di < 0 ? 0.5 : 1}
            />
            <text x={imgX} y={axisY + 16} fill={colorImg} fontSize="11" fontWeight="700" textAnchor="middle">
              {tt(lang, "Imagen", "Image")}
            </text>
          </g>
        )}

        {/* Rayo 1: paralelo al eje, se refleja por F */}
        <line x1={objX} y1={axisY - objH} x2={mirrorX} y2={axisY - objH}
          stroke={colorRay} strokeWidth={1.5} />
        {Number.isFinite(_di) && Math.abs(_di) < 5 && (
          <line x1={mirrorX} y1={axisY - objH} x2={imgX} y2={axisY - imgH}
            stroke={colorRay} strokeWidth={1.5} strokeDasharray={_di < 0 ? "4 3" : "none"} />
        )}

        {/* Rayo 2: pasa por C, se refleja sobre si mismo */}
        {Math.abs(centerX - objX) > 5 && Number.isFinite(_di) && Math.abs(_di) < 5 && (
          <line x1={objX} y1={axisY - objH} x2={mirrorX} y2={axisY - objH * (mirrorX - centerX) / (objX - centerX)}
            stroke={colorRay} strokeWidth={1.5} opacity={0.7} />
        )}

        {/* Panel de resultados */}
        <rect x={W / 2 - 130} y={10} width={260} height={56}
          rx="8" fill="rgba(0,0,0,0.6)" stroke="rgba(250,204,21,0.3)" strokeWidth={1} />
        <text x={W / 2} y={30} fill={colorImg} fontSize="12" fontWeight="900" textAnchor="middle">
          d_i = {fmt(_di, 3, lang)} m ({tipo})
        </text>
        <text x={W / 2} y={48} fill={colorMuted} fontSize="11" textAnchor="middle">
          M = {fmt(_M, 2, lang)} ({orient}) | f = {fmt(_f, 3, lang)} m
        </text>
        <text x={W / 2} y={62} fill={colorMuted} fontSize="10" textAnchor="middle">
          {tt(lang, "Espejo", "Mirror")}: {_R > 0 ? tt(lang, "concavo", "concave") : tt(lang, "convexo", "convex")}
        </text>
      </g>
    );
  },
};

export default profile;
