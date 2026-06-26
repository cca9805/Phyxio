// frontend/src/v2/components/SVG/profiles/navier-stokes-intro.svg.profile.jsx
//
// Profile SVG para: ecuacion-de-navier-stokes-intro (Nivel 5 v5)
// Escena: sección transversal de tubería con perfil parabólico de Poiseuille
//         + panel de balance de fuerzas NS + panel de régimen Re
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
const EPS = 1e-12;

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
    id: "svg-navier-stokes-intro",
    leafId: "ecuacion-de-navier-stokes-intro",
    title: {
      es: "Navier-Stokes — Perfil y Balance de Fuerzas",
      en: "Navier-Stokes — Velocity Profile and Force Balance",
    },
    subtitle: {
      es: "Perfil parabólico de Poiseuille y balance de fuerzas viscosas en un tubo horizontal",
      en: "Poiseuille parabolic profile and viscous force balance in a horizontal pipe",
    },
  },

  interpretation_binding: {
    enabled: true,
  },

  graph_identity: {
    id: "svg-navier-stokes-intro",
    pregunta_principal: {
      es: "¿Cómo compiten en el balance de fuerzas la presión, las fuerzas viscosas y la inercia para definir el perfil de velocidad de Navier-Stokes en la introducción conceptual?",
      en: "How do pressure, viscous forces, and inertia visually compete in the force balance to define fluid motion and the conceptual Navier-Stokes profile?"
    },
    magnitud_estrella: "gp",
    magnitud_visual: "flechas de velocidad y gráfico",
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 920 500",
  svgHeight: 560,

  motion: {
    type: SVG_MOTION_TYPES.NONE,
  },

  /* ── Parámetros del simulador ─────────────────────────────────────── */
  params: {
    schema: [
      {
        key: "gp",
        aliases: ["dp_dx", "grad_presion", "pressure_gradient"],
        default: -1000,
        label: { es: "∂p/∂x (Pa/m)", en: "∂p/∂x (Pa/m)" },
        unit: "Pa/m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -20000,
        max: -10,
        step: 100,
        decimals: 0,
      },
      {
        key: "mu",
        aliases: ["viscosidad", "viscosity"],
        default: 0.001,
        label: { es: "μ viscosidad (Pa·s)", en: "μ viscosity (Pa·s)" },
        unit: "Pa·s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.0001,
        max: 5,
        step: 0.0001,
        decimals: 4,
      },
      {
        key: "R",
        aliases: ["radio", "radius"],
        default: 0.025,
        label: { es: "R radio tubo (m)", en: "R pipe radius (m)" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.001,
        max: 0.5,
        step: 0.001,
        decimals: 3,
      },
      {
        key: "rho",
        aliases: ["densidad", "density"],
        default: 1000,
        label: { es: "ρ densidad (kg/m³)", en: "ρ density (kg/m³)" },
        unit: "kg/m³",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 15000,
        step: 10,
        decimals: 0,
      },
      {
        key: "v_mean",
        aliases: ["v_media", "mean_velocity"],
        default: 0.05,
        label: { es: "ū velocidad media (m/s)", en: "ū mean velocity (m/s)" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.001,
        max: 50,
        step: 0.001,
        decimals: 3,
      },
    ],
    derivations: {
      // u_max = R² · |∂p/∂x| / (2μ)  (Poiseuille)
      u_max: ({ gp, mu, R }) =>
        (safeNum(R, 0.025) * safeNum(R, 0.025) * Math.abs(safeNum(gp, -1000))) /
        (2 * Math.max(safeNum(mu, 0.001), EPS)),

      // Re = ρ · v_mean · (2R) / μ  (diámetro hidráulico)
      Re: ({ rho, v_mean, R, mu }) =>
        (safeNum(rho, 1000) * safeNum(v_mean, 0.05) * 2 * safeNum(R, 0.025)) /
        Math.max(safeNum(mu, 0.001), EPS),
    },
  },

  /* ── Tarjetas de información ─────────────────────────────────────── */
  infoCards: [
    {
      key: "poiseuille",
      label: { es: "Perfil Poiseuille", en: "Poiseuille Profile" },
      lines: ({ p: params, lang }) => {
        const gp  = safeNum(params?.gp, -1000);
        const mu    = Math.max(safeNum(params?.mu, 0.001), EPS);
        const R     = safeNum(params?.R, 0.025);
        const uMax  = (R * R * Math.abs(gp)) / (2 * mu);
        const uMean = uMax / 2;
        return [
          `u_max = ${fmt(uMax, 4, lang)} m/s`,
          `ū = u_max/2 = ${fmt(uMean, 4, lang)} m/s`,
          `R = ${fmt(R * 1000, 1, lang)} mm`,
        ];
      },
      result: ({ p: params, lang }) => {
        const gp = safeNum(params?.gp, -1000);
        const mu   = Math.max(safeNum(params?.mu, 0.001), EPS);
        const R    = safeNum(params?.R, 0.025);
        const uMax = (R * R * Math.abs(gp)) / (2 * mu);
        return `u_max = ${fmt(uMax, 4, lang)} m/s`;
      },
      resultColor: "#818cf8",
    },
    {
      key: "reynolds",
      label: { es: "Régimen de flujo", en: "Flow regime" },
      lines: ({ p: params, lang }) => {
        const rho    = safeNum(params?.rho, 1000);
        const v_mean = safeNum(params?.v_mean, 0.05);
        const R      = safeNum(params?.R, 0.025);
        const mu     = Math.max(safeNum(params?.mu, 0.001), EPS);
        const Re     = (rho * v_mean * 2 * R) / mu;
        const regime =
          Re < 2300
            ? tt(lang, "Laminar", "Laminar")
            : Re < 4000
            ? tt(lang, "Transición", "Transition")
            : tt(lang, "Turbulento", "Turbulent");
        const gp = safeNum(params?.gp, -1000);
        const tau_w = clamp(Math.abs(gp) * R / 2, 0, 1e6);
        return [
          `Re = ${fmt(Re, 0, lang)} → ${regime}`,
          `τ_w = R|∂p/∂x|/2 = ${fmt(tau_w, 2, lang)} Pa`,
        ];
      },
      result: ({ p: params, lang }) => {
        const rho    = safeNum(params?.rho, 1000);
        const v_mean = safeNum(params?.v_mean, 0.05);
        const R      = safeNum(params?.R, 0.025);
        const mu     = Math.max(safeNum(params?.mu, 0.001), EPS);
        const Re     = (rho * v_mean * 2 * R) / mu;
        const regime =
          Re < 2300
            ? tt(lang, "Laminar", "Laminar")
            : Re < 4000
            ? tt(lang, "Transición", "Transition")
            : tt(lang, "Turbulento", "Turbulent");
        return `Re = ${fmt(Re, 0, lang)} (${regime})`;
      },
      resultColor: "#facc15",
    },
    {
      key: "hagen_poiseuille",
      label: { es: "Hagen-Poiseuille", en: "Hagen-Poiseuille" },
      lines: ({ p: params, lang }) => {
        const gp = safeNum(params?.gp, -1000);
        const mu   = Math.max(safeNum(params?.mu, 0.001), EPS);
        const R    = safeNum(params?.R, 0.025);
        const Q    = (Math.PI * R * R * R * R * Math.abs(gp)) / (8 * mu);
        return [
          `Q = πR⁴|∂p/∂x|/(8μ)`,
          `Q = ${fmt(Q * 1e6, 3, lang)} cm³/s`,
          `Q = ${fmt(Q * 1000, 4, lang)} L/s`,
        ];
      },
      result: ({ p: params, lang }) => {
        const gp = safeNum(params?.gp, -1000);
        const mu   = Math.max(safeNum(params?.mu, 0.001), EPS);
        const R    = safeNum(params?.R, 0.025);
        const Q    = (Math.PI * R * R * R * R * Math.abs(gp)) / (8 * mu);
        return `Q = ${fmt(Q * 1e6, 2, lang)} cm³/s`;
      },
      resultColor: "#34d399",
    },
  ],

  /* ── Función de render SVG ────────────────────────────────────────── */
  render({ params, lang, W, H }) {
    const _lang = lang ?? "es";

    const gp   = safeNum(params?.gp,   -1000);
    const mu     = Math.max(safeNum(params?.mu,   0.001), EPS);
    const R      = clamp(safeNum(params?.R, 0.025), 0.001, 0.5);
    const rho    = safeNum(params?.rho,    1000);
    const v_mean = safeNum(params?.v_mean, 0.05);

    /* ── Derivaciones ────────────────────────────────────────────────── */
    const uMax = (R * R * Math.abs(gp)) / (2 * mu);
    const Re   = (rho * v_mean * 2 * R) / Math.max(mu, EPS);
    const tau_w = Math.abs(gp) * R / 2;
    const Q    = (Math.PI * R * R * R * R * Math.abs(gp)) / (8 * mu);

    const regime =
      Re < 2300
        ? tt(_lang, "Laminar", "Laminar")
        : Re < 4000
        ? tt(_lang, "Transición", "Transition")
        : tt(_lang, "Turbulento", "Turbulent");

    const regimeColor =
      Re < 2300 ? "#34d399" : Re < 4000 ? "#f97316" : "#ef4444";

    /* ── Layout principal ────────────────────────────────────────────── */
    // Dividimos en dos zonas: tubo (izq 55%) y paneles de información (der 45%)
    const tubeSectionWidth = W * 0.55;
    const infoPanelX = tubeSectionWidth + 12;
    const infoPanelWidth = W - infoPanelX - 12;

    /* ── Tubo: posición central y radio visual ────────────────────────── */
    const tubeCX  = tubeSectionWidth / 2; // centro X del tubo
    const tubeCY  = H / 2 + 20;          // centro Y del tubo horizontal
    const PIPE_W  = tubeSectionWidth * 0.82;
    const pipeX1  = tubeCX - PIPE_W / 2;
    const pipeX2  = tubeCX + PIPE_W / 2;
    const rVis    = clamp(R * 1200, 18, 110); // radio visual en px
    const topWall = tubeCY - rVis;
    const botWall = tubeCY + rVis;

    /* ── Perfil de velocidad: flechas parabólicas ────────────────────── */
    const arrowSteps = 9; // número de flechas verticales
    const arrowXPositions = []; // posiciones X a lo largo del tubo
    for (let i = 1; i <= 3; i++) {
      arrowXPositions.push(pipeX1 + (PIPE_W * i) / 4);
    }
    // Siempre dibujamos en el centro del tubo para el perfil:
    const profileX = tubeCX;
    const maxArrowLen = clamp(uMax * 600, 15, rVis * 1.6);

    const arrowsData = [];
    for (let j = 0; j <= arrowSteps; j++) {
      const yFrac = -1 + (2 * j) / arrowSteps;   // y/R ∈ [-1, 1]
      const uFrac = Math.max(0, 1 - yFrac * yFrac); // u/u_max
      const arrowLen = uFrac * maxArrowLen;
      const arrowY = tubeCY + yFrac * rVis;
      arrowsData.push({ yFrac, uFrac, arrowY, arrowLen });
    }

    /* ── Colores ─────────────────────────────────────────────────────── */
    const colorTube    = "#3b82f6";
    const colorFluid   = "rgba(59,130,246,0.1)";
    const colorArrow   = "#818cf8";
    const colorAxisVel = "#facc15";
    const colorPressure = "#f472b6";
    const colorViscous  = "#34d399";
    const colorInertia  = "#fb923c";
    const colorText    = "#e2e8f0";
    const colorMuted   = "rgba(226,232,240,0.55)";

    return (
      <g>
        <defs>
          <linearGradient id="nsBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#071520" />
            <stop offset="100%" stopColor="#0a1a2e" />
          </linearGradient>
          <marker id="arrowNS" markerWidth="7" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 7 3, 0 6" fill={colorArrow} />
          </marker>
          <marker id="arrowAxis" markerWidth="7" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 7 3, 0 6" fill={colorAxisVel} />
          </marker>
          <marker id="arrowPres" markerWidth="7" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 7 3, 0 6" fill={colorPressure} />
          </marker>
          <marker id="arrowVisc" markerWidth="7" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 7 3, 0 6" fill={colorViscous} />
          </marker>
        </defs>

        {/* Fondo */}
        <rect x="0" y="0" width={W} height={H} fill="url(#nsBg)" />

        {/* ══════════════════════════════════════════════════════════════
            SECCIÓN IZQUIERDA: TUBO CON PERFIL DE VELOCIDAD
            ══════════════════════════════════════════════════════════════ */}

        {/* Título del tubo */}
        <text
          x={tubeCX} y={topWall - 30}
          fill={colorText} fontSize="13" fontWeight="900" textAnchor="middle"
        >
          {tt(_lang, "Perfil de Poiseuille", "Poiseuille Profile")}
        </text>
        <text
          x={tubeCX} y={topWall - 15}
          fill={colorMuted} fontSize="11" textAnchor="middle"
        >
          u(y) = u_max·(1−(y/R)²)
        </text>

        {/* Pared superior del tubo */}
        <rect
          x={pipeX1} y={topWall - 6}
          width={PIPE_W} height={6}
          fill={colorTube} rx="3"
        />
        {/* Pared inferior del tubo */}
        <rect
          x={pipeX1} y={botWall}
          width={PIPE_W} height={6}
          fill={colorTube} rx="3"
        />
        {/* Relleno fluido */}
        <rect
          x={pipeX1} y={topWall}
          width={PIPE_W} height={rVis * 2}
          fill={colorFluid}
        />
        {/* Entrada (tapa izquierda) */}
        <line
          x1={pipeX1} y1={topWall - 6}
          x2={pipeX1} y2={botWall + 6}
          stroke={colorTube} strokeWidth={3}
        />
        {/* Salida (tapa derecha) */}
        <line
          x1={pipeX2} y1={topWall - 6}
          x2={pipeX2} y2={botWall + 6}
          stroke={colorTube} strokeWidth={3}
        />

        {/* Línea axial del tubo (eje de simetría) */}
        <line
          x1={pipeX1 - 12} y1={tubeCY}
          x2={pipeX2 + 12} y2={tubeCY}
          stroke="rgba(250,204,21,0.35)"
          strokeWidth={1}
          strokeDasharray="8 5"
        />
        <text x={pipeX2 + 14} y={tubeCY + 4}
          fill={colorAxisVel} fontSize="10" fontWeight="800">
          {tt(_lang, "eje", "axis")}
        </text>

        {/* ── Flechas del perfil parabólico (dibujadas en profileX) ────── */}
        {arrowsData.map(({ uFrac, arrowY, arrowLen }, idx) => {
          if (arrowLen < 2) return null;
          const x1a = profileX - 4;
          const x2a = profileX - 4 + arrowLen;
          const isAxis = idx === Math.floor(arrowSteps / 2);
          return (
            <g key={`arr-${idx}`}>
              <line
                x1={x1a} y1={arrowY}
                x2={x2a - 7} y2={arrowY}
                stroke={isAxis ? colorAxisVel : colorArrow}
                strokeWidth={isAxis ? 2.5 : 1.8}
                markerEnd={isAxis ? "url(#arrowAxis)" : "url(#arrowNS)"}
              />
            </g>
          );
        })}

        {/* u_max label */}
        <text
          x={profileX - 4 + maxArrowLen + 10}
          y={tubeCY + 4}
          fill={colorAxisVel} fontSize="11" fontWeight="900"
        >
          u_max = {fmt(uMax, 3, _lang)} m/s
        </text>

        {/* Etiquetas de pared: y/R = ±1, u = 0 */}
        <text x={pipeX1 - 6} y={topWall + 4} fill={colorMuted}
          fontSize="10" textAnchor="end">y/R=+1 (u=0)</text>
        <text x={pipeX1 - 6} y={botWall + 4} fill={colorMuted}
          fontSize="10" textAnchor="end">y/R=−1 (u=0)</text>

        {/* Indicador de gradiente de presión (flecha izquierda→derecha) */}
        <line
          x1={pipeX1 + 12} y1={topWall - 20}
          x2={pipeX1 + 70} y2={topWall - 20}
          stroke={colorPressure} strokeWidth={2}
          markerEnd="url(#arrowPres)"
        />
        <text x={pipeX1 + 12} y={topWall - 24}
          fill={colorPressure} fontSize="10" fontWeight="800">
          −∂p/∂x={fmt(Math.abs(gp), 0, _lang)} Pa/m
        </text>

        {/* ══════════════════════════════════════════════════════════════
            SECCIÓN DERECHA: PANELES DE INFORMACIÓN
            ══════════════════════════════════════════════════════════════ */}

        {/* ── Panel 1: Balance de fuerzas NS ─────────────────────────── */}
        <rect
          x={infoPanelX} y={14}
          width={infoPanelWidth} height={170}
          rx="8"
          fill="rgba(0,0,0,0.55)"
          stroke="rgba(99,102,241,0.3)"
          strokeWidth={1}
        />
        <text x={infoPanelX + 12} y={36} fill={colorText}
          fontSize="12" fontWeight="900">
          {tt(_lang, "Balance NS 1D", "NS 1D Balance")}
        </text>
        <text x={infoPanelX + 12} y={52} fill={colorMuted} fontSize="10">
          ρa = −∂p/∂x + μ·∇²u + ρg
        </text>

        {/* Término presión */}
        <rect x={infoPanelX + 12} y={60} width={10} height={10}
          fill={colorPressure} rx="2" />
        <text x={infoPanelX + 26} y={70} fill={colorPressure}
          fontSize="11" fontWeight="800">
          {tt(_lang, "Presión: ", "Pressure: ")}−∂p/∂x = {fmt(Math.abs(gp), 0, _lang)} Pa/m
        </text>

        {/* Término viscoso */}
        <rect x={infoPanelX + 12} y={80} width={10} height={10}
          fill={colorViscous} rx="2" />
        <text x={infoPanelX + 26} y={90} fill={colorViscous}
          fontSize="11" fontWeight="800">
          {tt(_lang, "Viscoso: μ·∇²u ≈ ", "Viscous: μ·∇²u ≈ ")}
          {fmt(Math.abs(gp), 0, _lang)} Pa/m
        </text>
        <text x={infoPanelX + 26} y={104} fill={colorMuted} fontSize="10">
          {tt(_lang, "(compensa presión en flujo desarrollado)",
            "(balances pressure in developed flow)")}
        </text>

        {/* Término inercial */}
        <rect x={infoPanelX + 12} y={112} width={10} height={10}
          fill={colorInertia} rx="2" />
        <text x={infoPanelX + 26} y={122} fill={colorInertia}
          fontSize="11" fontWeight="800">
          {tt(_lang, "Inercia: ρa = ", "Inertia: ρa = ")}
          0 {tt(_lang, "(f. desarrollado)", "(dev. flow)")}
        </text>

        {/* Shear stress en pared */}
        <text x={infoPanelX + 12} y={144} fill={colorText} fontSize="11">
          τ_w = R·|∂p/∂x|/2 = <tspan fill={colorViscous} fontWeight="900">
            {fmt(tau_w, 2, _lang)} Pa
          </tspan>
        </text>
        <text x={infoPanelX + 12} y={158} fill={colorText} fontSize="11">
          {tt(_lang, "μ = ", "μ = ")}
          <tspan fill="#a78bfa" fontWeight="900">
            {fmt(mu, 4, _lang)} Pa·s
          </tspan>
        </text>
        <text x={infoPanelX + 12} y={175} fill={colorText} fontSize="11">
          Q = πR⁴|∂p/∂x|/(8μ) = <tspan fill="#34d399" fontWeight="900">
            {fmt(Q * 1e6, 2, _lang)} cm³/s
          </tspan>
        </text>

        {/* ── Panel 2: Régimen de Reynolds ────────────────────────────── */}
        <rect
          x={infoPanelX} y={196}
          width={infoPanelWidth} height={130}
          rx="8"
          fill="rgba(0,0,0,0.55)"
          stroke={`${regimeColor}55`}
          strokeWidth={1}
        />
        <text x={infoPanelX + 12} y={216} fill={colorText}
          fontSize="12" fontWeight="900">
          {tt(_lang, "Número de Reynolds", "Reynolds Number")}
        </text>
        <text x={infoPanelX + 12} y={232} fill={colorMuted} fontSize="10">
          Re = ρ·v̄·2R / μ
        </text>

        {/* Valor de Re grande */}
        <text x={infoPanelX + 12} y={258} fill={regimeColor}
          fontSize="20" fontWeight="900">
          Re = {fmt(Re, 0, _lang)}
        </text>

        {/* Régimen */}
        <text x={infoPanelX + 12} y={278} fill={regimeColor}
          fontSize="15" fontWeight="900">
          → {regime}
        </text>

        {/* Barra de régimen */}
        {/* Fondo gris */}
        <rect x={infoPanelX + 12} y={288}
          width={infoPanelWidth - 24} height={14} rx="4"
          fill="rgba(255,255,255,0.07)" />

        {/* Laminar (verde) hasta Re=2300 */}
        <rect x={infoPanelX + 12} y={288}
          width={clamp((infoPanelWidth - 24) * 2300 / 5000, 0, infoPanelWidth - 24)}
          height={14} rx="4"
          fill="#34d39944"
        />
        {/* Transición (naranja) 2300-4000 */}
        <rect
          x={infoPanelX + 12 + clamp((infoPanelWidth - 24) * 2300 / 5000, 0, infoPanelWidth - 24)}
          y={288}
          width={clamp((infoPanelWidth - 24) * 1700 / 5000, 0, infoPanelWidth - 24)}
          height={14} rx="0"
          fill="#f9731644"
        />
        {/* Turbulento (rojo) 4000+ */}
        <rect
          x={infoPanelX + 12 + clamp((infoPanelWidth - 24) * 4000 / 5000, 0, infoPanelWidth - 24)}
          y={288}
          width={clamp((infoPanelWidth - 24) * 1000 / 5000, 0, infoPanelWidth - 24)}
          height={14} rx="4"
          fill="#ef444444"
        />

        {/* Marcador de posición actual del Re */}
        {Re <= 5000 && (
          <line
            x1={infoPanelX + 12 + clamp((infoPanelWidth - 24) * Re / 5000, 0, infoPanelWidth - 24)}
            y1={285}
            x2={infoPanelX + 12 + clamp((infoPanelWidth - 24) * Re / 5000, 0, infoPanelWidth - 24)}
            y2={305}
            stroke={regimeColor} strokeWidth={2.5}
          />
        )}

        {/* Etiquetas régimen */}
        <text
          x={infoPanelX + 12 + clamp((infoPanelWidth - 24) * 1150 / 5000, 0, infoPanelWidth - 24)}
          y={306} fill="#34d399" fontSize="9" textAnchor="middle">
          {tt(_lang, "Lam.", "Lam.")}
        </text>
        <text
          x={infoPanelX + 12 + clamp((infoPanelWidth - 24) * 3150 / 5000, 0, infoPanelWidth - 24)}
          y={306} fill="#f97316" fontSize="9" textAnchor="middle">
          {tt(_lang, "Trans.", "Trans.")}
        </text>

        {/* ── Panel 3: Parámetros resumen ──────────────────────────────── */}
        <rect
          x={infoPanelX} y={338}
          width={infoPanelWidth} height={H - 350}
          rx="8"
          fill="rgba(0,0,0,0.45)"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={1}
        />
        <text x={infoPanelX + 12} y={357} fill={colorText}
          fontSize="11" fontWeight="900">
          {tt(_lang, "Parámetros", "Parameters")}
        </text>
        <text x={infoPanelX + 12} y={372} fill={colorMuted} fontSize="10">
          R = {fmt(R * 1000, 1, _lang)} mm  ·  ∂p/∂x = {fmt(gp, 0, _lang)} Pa/m
        </text>
        <text x={infoPanelX + 12} y={386} fill={colorMuted} fontSize="10">
          μ = {fmt(mu, 4, _lang)} Pa·s  ·  ρ = {fmt(rho, 0, _lang)} kg/m³
        </text>
        <text x={infoPanelX + 12} y={400} fill={colorMuted} fontSize="10">
          ū = {fmt(v_mean, 3, _lang)} m/s  ·  u_max = {fmt(uMax, 4, _lang)} m/s
        </text>

        {/* ── Leyenda inferior ─────────────────────────────────────────── */}
        <rect x={12} y={H - 32} width={10} height={10}
          fill={colorArrow} rx="2" />
        <text x={26} y={H - 23} fill={colorArrow} fontSize="10">
          {tt(_lang, "Perfil u(y)", "Profile u(y)")}
        </text>
        <rect x={110} y={H - 32} width={10} height={10}
          fill={colorPressure} rx="2" />
        <text x={124} y={H - 23} fill={colorPressure} fontSize="10">
          {tt(_lang, "Presión", "Pressure")}
        </text>
        <rect x={200} y={H - 32} width={10} height={10}
          fill={colorViscous} rx="2" />
        <text x={214} y={H - 23} fill={colorViscous} fontSize="10">
          {tt(_lang, "Viscoso", "Viscous")}
        </text>
        <text x={296} y={H - 23} fill={regimeColor}
          fontSize="10" fontWeight="900">
          Re = {fmt(Re, 0, _lang)} · {regime}
        </text>
      </g>
    );
  },
};

export default profile;
