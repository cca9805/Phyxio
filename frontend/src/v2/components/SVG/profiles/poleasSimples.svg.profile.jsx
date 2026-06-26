// frontend/src/v2/components/SVG/profiles/poleasSimples.svg.profile.jsx
import React from "react";
import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
  SVG_CONTROL_TYPES,
} from "../svgGrammar";
import { SvgArrow } from "../SvgProfileRenderer";

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

const VB_W = 900;
const VB_H = 650;
const CX = 500;

const fmtInt = (n) => Math.round(safeNum(n, 0));

const poleasSimplesProfile = {
  meta: {
    id: "svg-poleas-simples",
    leafId: "poleas-simples",
    title: {
      es: "Polea simple ideal",
      en: "Ideal simple pulley",
    },
    subtitle: {
      es: "Modo fijo (nSel = 1) o móvil (nSel = 2)",
      en: "Fixed mode (nSel = 1) or movable mode (nSel = 2)",
    },
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: `0 0 ${VB_W} ${VB_H}`,
  svgHeight: 720,

  params: {
    schema: [
      {
        key: "W",
        aliases: ["peso"],
        default: 200,
        label: { es: "Peso W", en: "Weight W" },
        unit: "N",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 10,
        max: 1500,
        step: 10,
      },
      {
        key: "nSel",
        aliases: ["n", "tramos"],
        default: 1,
        label: { es: "Tipo de polea", en: "Pulley type" },
        unit: "",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 2,
        step: 1,
      },
      {
        key: "dx_load",
        aliases: ["dxLoad", "h"],
        default: 0.5,
        label: { es: "Ascenso de la carga", en: "Load rise" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 5,
        step: 0.1,
      },
    ],
    derivations: {
      F: ({ W, nSel, n }) => {
        const segs = clamp(fmtInt(nSel ?? n ?? 1), 1, 2);
        return safeNum(W, 200) / segs;
      },
      dx_pull: ({ nSel, n, dx_load }) => {
        const segs = clamp(fmtInt(nSel ?? n ?? 1), 1, 2);
        return segs * safeNum(dx_load, 0.5);
      },
    },
  },

  motion: {
    type: SVG_MOTION_TYPES.ANIMATED,
    tMax: 4,
    loop: true,
    state: (t, p) => {
      const nSel = clamp(Math.round(safeNum(p.nSel ?? p.n, 1)), 1, 2);
      const phase = (2 * Math.PI * t) / 4;
      const bob = Math.sin(phase);

      // Convención visual:
      // bob > 0  => el extremo libre baja (se tira de la cuerda)
      //           => la carga sube
      // bob < 0  => el extremo libre sube
      //           => la carga baja
      const pullAmp = nSel === 1 ? 18 : 24;
      const loadAmp = nSel === 1 ? 18 : 12;
      const wheelRot = -bob * (nSel === 1 ? 38 : 52);

      return {
        // extremo libre: positivo = baja
        pullOffset: bob * pullAmp,
        // carga / bloque móvil: positivo = sube visualmente (restará en Y)
        loadOffset: bob * loadAmp,
        wheelRot,
      };
    },
  },

  render: ({ p, state, lang, toNum, fmt, formulaLabel }) => {
    const isEs = lang === "es";
    const merged = { ...p, ...state };

    const W = toNum(merged.W, 200);
    const nSel = clamp(Math.round(toNum(merged.nSel ?? merged.n, 1)), 1, 2);
    const dxLoad = toNum(merged.dx_load ?? merged.dxLoad, 0.5);
    const F = toNum(merged.F, W / Math.max(1, nSel));
    const dxPull = toNum(merged.dx_pull, nSel * dxLoad);

    const fixedMode = nSel === 1;
    const wheelR = 22;
    const supportY = 26;
    const topBlockY = 125;

    const loadOffset = toNum(merged.loadOffset, 0);
    const pullOffset = toNum(merged.pullOffset, 0);
    const wheelRot = toNum(merged.wheelRot, 0);

    const fixedLoadTop = 470 - loadOffset;
    const fixedLoadBottom = fixedLoadTop + 86;
    const fixedHookY = 462 - loadOffset;

    const movableTop = 312 - loadOffset;
    const movableCenterY = 322 - loadOffset;
    const movableHookY = 442 - loadOffset;
    const movableLoadTop = 450 - loadOffset;
    const movableLoadBottom = movableLoadTop + 90;

    return (
      <g>
        <defs>
          <linearGradient id="bgPoleaSimple" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#081225" />
            <stop offset="100%" stopColor="#14284c" />
          </linearGradient>
          <linearGradient id="loadGradPoleaSimple" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(99,102,241,0.44)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.24)" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width={VB_W} height={VB_H} fill="url(#bgPoleaSimple)" />

        {formulaLabel && (
          <g transform="translate(804, 24)">
            <rect
              x="0"
              y="-12"
              width="80"
              height="24"
              rx="12"
              fill="rgba(34,197,94,0.15)"
              stroke="rgba(34,197,94,0.4)"
              strokeWidth="1"
            />
            <text
              x="40"
              y="1"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="9"
              fill="#22c55e"
              fontWeight="900"
            >
              SYNC OK
            </text>
          </g>
        )}

        {/* soporte */}
        <rect x={CX - 165} y={supportY} width={330} height={18} rx={5} fill="#64748b" />

        <g transform="translate(36, 88)">
          <rect x="0" y="0" width="314" height="188" rx="18" fill="rgba(15,23,42,0.55)" stroke="rgba(148,163,184,0.35)" strokeWidth="2" />
          <text x="18" y="30" fill="#ffffff" fontSize="21" fontWeight="900">
            {isEs ? "Polea simple ideal" : "Ideal simple pulley"}
          </text>
          <text x="18" y="60" fill="#cbd5e1" fontSize="15">
            {fixedMode
              ? (isEs ? "Modo fijo · nSel = 1" : "Fixed mode · nSel = 1")
              : (isEs ? "Modo móvil · nSel = 2" : "Movable mode · nSel = 2")}
          </text>
          <text x="18" y="92" fill="#34d399" fontSize="16" fontWeight="800">
            {`F = W / nSel = ${fmt(F, 1)} N`}
          </text>
          <text x="18" y="122" fill="#60a5fa" fontSize="16">
            {`dx_load = ${fmt(dxLoad, 2)} m`}
          </text>
          <text x="18" y="148" fill="#fca5a5" fontSize="16">
            {`dx_pull = ${fmt(dxPull, 2)} m`}
          </text>
          <text x="18" y="176" fill="#cbd5e1" fontSize="13">
            {fixedMode
              ? (isEs ? "La polea fija cambia dirección, no reduce fuerza." : "The fixed pulley changes direction, it does not reduce force.")
              : (isEs ? "La polea móvil reduce fuerza y aumenta recorrido." : "The movable pulley reduces force and increases travel.")}
          </text>
        </g>

        {fixedMode ? (
          <g>
            <text x={CX} y={85} textAnchor="middle" fill="#cbd5e1" fontSize="15" fontWeight="700">
              {isEs ? "Polea fija" : "Fixed pulley"}
            </text>

            <g transform={`rotate(${wheelRot} ${CX} ${topBlockY + 10})`}>
              <circle cx={CX} cy={topBlockY + 10} r={wheelR} fill="#1e293b" stroke="#94a3b8" strokeWidth={4} />
              <circle cx={CX} cy={topBlockY + 10} r={4} fill="#e2e8f0" />
              <line x1={CX - 14} y1={topBlockY + 10} x2={CX + 14} y2={topBlockY + 10} stroke="#cbd5e1" strokeWidth={2} />
              <line x1={CX} y1={topBlockY - 4} x2={CX} y2={topBlockY + 24} stroke="#cbd5e1" strokeWidth={2} />
            </g>
            <rect x={CX - 100} y={topBlockY} width={200} height={20} rx={10} fill="#334155" stroke="#94a3b8" strokeWidth={3} />

            <line x1={CX - 18} y1={topBlockY + 10} x2={CX - 18} y2={430 - loadOffset} stroke="#e5e7eb" strokeWidth={5} strokeLinecap="round" />
            <path
              d={`M ${CX + 18} ${topBlockY + 10}
                  Q ${CX + 140} ${topBlockY + 10} ${CX + 160} ${topBlockY + 40}
                  L ${CX + 160} ${455 + pullOffset}`}
              fill="none"
              stroke="#f59e0b"
              strokeWidth={5}
              strokeLinecap="round"
            />

            <line x1={CX - 18} y1={430 - loadOffset} x2={CX - 18} y2={fixedHookY} stroke="#e5e7eb" strokeWidth={4} />
            <circle cx={CX - 18} cy={fixedHookY} r={6} fill="#e5e7eb" />

            <g transform={`translate(${CX - 18}, ${fixedLoadTop})`}>
              <rect x="-70" y="0" width="140" height="86" rx="12" fill="url(#loadGradPoleaSimple)" stroke="#818cf8" strokeWidth={3} />
              <text x="0" y="32" textAnchor="middle" fill="#e0e7ff" fontSize="18" fontWeight="900">
                {isEs ? "Carga" : "Load"}
              </text>
              <text x="0" y="60" textAnchor="middle" fill="#a5b4fc" fontSize="22" fontWeight="900">
                W
              </text>
            </g>

            <SvgArrow
              x1={CX + 160}
              y1={366 + pullOffset}
              x2={CX + 160}
              y2={446 + pullOffset}
              color="#f59e0b"
              label={`F = ${fmt(F, 1)} N`}
            />
            <SvgArrow
              x1={CX - 18}
              y1={fixedLoadBottom}
              x2={CX - 18}
              y2={fixedLoadBottom + 72}
              color="#ef4444"
              label={`W = ${fmt(W, 1)} N`}
            />
          </g>
        ) : (
          <g>
            <text x={CX} y={85} textAnchor="middle" fill="#cbd5e1" fontSize="15" fontWeight="700">
              {isEs ? "Polea móvil simple" : "Simple movable pulley"}
            </text>

            <line x1={CX - 110} y1={topBlockY} x2={CX - 110} y2={movableTop} stroke="#e5e7eb" strokeWidth={5} strokeLinecap="round" />
            <path
              d={`M ${CX - 110} ${movableTop}
                  Q ${CX - 72} ${movableCenterY} ${CX - 22} ${movableCenterY}
                  Q ${CX + 72} ${movableCenterY} ${CX + 110} ${movableTop}
                  L ${CX + 110} ${500 + pullOffset}`}
              fill="none"
              stroke="#f59e0b"
              strokeWidth={5}
              strokeLinecap="round"
            />

            <rect x={CX - 100} y={movableTop} width={200} height={20} rx={10} fill="#1d4ed8" stroke="#93c5fd" strokeWidth={3} />
            <g transform={`rotate(${wheelRot} ${CX} ${movableCenterY})`}>
              <circle cx={CX} cy={movableCenterY} r={wheelR} fill="#172554" stroke="#60a5fa" strokeWidth={4} />
              <circle cx={CX} cy={movableCenterY} r={4} fill="#dbeafe" />
              <line x1={CX - 14} y1={movableCenterY} x2={CX + 14} y2={movableCenterY} stroke="#dbeafe" strokeWidth={2} />
              <line x1={CX} y1={movableCenterY - 14} x2={CX} y2={movableCenterY + 14} stroke="#dbeafe" strokeWidth={2} />
            </g>

            <line x1={CX} y1={movableTop + 20} x2={CX} y2={movableHookY} stroke="#e5e7eb" strokeWidth={4} />
            <circle cx={CX} cy={movableHookY} r={6} fill="#e5e7eb" />

            <g transform={`translate(${CX}, ${movableLoadTop})`}>
              <rect x="-74" y="0" width="148" height="90" rx="12" fill="url(#loadGradPoleaSimple)" stroke="#818cf8" strokeWidth={3} />
              <text x="0" y="34" textAnchor="middle" fill="#e0e7ff" fontSize="18" fontWeight="900">
                {isEs ? "Carga" : "Load"}
              </text>
              <text x="0" y="64" textAnchor="middle" fill="#a5b4fc" fontSize="22" fontWeight="900">
                W
              </text>
            </g>

            <SvgArrow
              x1={CX + 110}
              y1={408 + pullOffset}
              x2={CX + 110}
              y2={488 + pullOffset}
              color="#f59e0b"
              label={`F = ${fmt(F, 1)} N`}
            />
            <SvgArrow
              x1={CX}
              y1={movableLoadBottom}
              x2={CX}
              y2={movableLoadBottom + 82}
              color="#ef4444"
              label={`W = ${fmt(W, 1)} N`}
            />

            <g transform="translate(545, 112)">
              <rect x="0" y="0" width="285" height="92" rx="14" fill="rgba(30,41,59,0.72)" stroke="rgba(148,163,184,0.28)" strokeWidth="2" />
              <text x="16" y="26" fill="#e2e8f0" fontSize="14" fontWeight="800">
                {isEs ? "Lectura física" : "Physical reading"}
              </text>
              <text x="16" y="48" fill="#cbd5e1" fontSize="12">
                {isEs ? "Dos tramos sostienen la carga." : "Two segments support the load."}
              </text>
              <text x="16" y="68" fill="#cbd5e1" fontSize="12">
                {isEs ? "F se reduce a la mitad idealmente." : "F is halved ideally."}
              </text>
              <text x="16" y="88" fill="#cbd5e1" fontSize="12">
                {isEs ? "dx_pull se duplica respecto a dx_load." : "dx_pull doubles relative to dx_load."}
              </text>
            </g>
          </g>
        )}

        <text x={VB_W - 20} y={VB_H - 14} textAnchor="end" fontSize="11" fill="rgba(255,255,255,0.20)" fontWeight="900">
          PHYXIO NEWTON ENGINE — animated simple pulley profile
        </text>
      </g>
    );
  },

  graph_identity: {
    pregunta_principal: {
      es: "Como cambia F segun el tipo de polea y el numero de tramos nSel que sostienen la carga?",
      en: "How does F change according to pulley type and the number of supporting segments nSel?",
    },
    magnitud_estrella: "F",
  },

  infoCards: [
    {
      key: "fuerza",
      label: { es: "Fuerza aplicada", en: "Applied force" },
      lines: ({ p, lang }) => {
        const isEs = lang === "es";
        const nSel = Math.max(1, Math.round(parseFloat(p.nSel ?? p.n) || 1));
        return [
          isEs ? `F = W / nSel = W / ${nSel}` : `F = W / nSel = W / ${nSel}`,
          isEs
            ? (nSel === 1 ? "Polea fija: solo cambia de direccion" : "Polea movil: reduce la fuerza")
            : (nSel === 1 ? "Fixed pulley: direction change only" : "Movable pulley: force is reduced"),
        ];
      },
      result: ({ p, lang }) => {
        const W = parseFloat(p.W) || 200;
        const nSel = Math.max(1, Math.round(parseFloat(p.nSel ?? p.n) || 1));
        const F = W / nSel;
        return `F = ${F.toFixed(1)} N`;
      },
      resultColor: "#34d399",
    },
    {
      key: "recorrido",
      label: { es: "Recorrido del agente", en: "Agent travel" },
      lines: ({ p, lang }) => {
        const isEs = lang === "es";
        return [
          isEs ? `dx_pull = nSel × dx_load` : `dx_pull = nSel × dx_load`,
          isEs ? `Mayor recorrido compensa menor fuerza` : `Greater travel compensates lower force`,
        ];
      },
      result: ({ p, lang }) => {
        const nSel = Math.max(1, Math.round(parseFloat(p.nSel ?? p.n) || 1));
        const dxLoad = parseFloat(p.dx_load ?? p.dxLoad) || 0.5;
        const dxPull = nSel * dxLoad;
        return `dx_pull = ${dxPull.toFixed(2)} m`;
      },
      resultColor: "#60a5fa",
    },
  ],

  interpretation_binding: {
    paramsIn: ["W", "nSel", "dx_load"],
    stateOut: ["F", "dx_pull"],
  },
};

export default poleasSimplesProfile;
