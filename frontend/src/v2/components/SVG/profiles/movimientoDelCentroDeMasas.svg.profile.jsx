import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_MOTION_TYPES,
  SVG_SCENE_TYPES,
} from "../svgGrammar";
import { SvgArrow } from "../SvgProfileRenderer";
import { createSvgProfileContract } from "./svgProfileContracts.js";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const fmt = (n, d = 2, lang = "es") => {
  if (!Number.isFinite(n)) return "-";
  const text = n.toFixed(d);
  return lang === "en" ? text : text.replace(".", ",");
};

const fitArrow = ({ start, signedMagnitude, baseLength, factor, minLength, minX, maxX, gap = 24 }) => {
  const direction = signedMagnitude >= 0 ? 1 : -1;
  const rawLength = baseLength + Math.abs(signedMagnitude) * factor;
  const available = direction > 0 ? maxX - start - gap : start - minX - gap;
  const boundedLength = clamp(rawLength, minLength, Math.max(minLength, available));
  return {
    direction,
    length: boundedLength,
    end: start + direction * boundedLength,
  };
};

const profile = {
  meta: {
    id: "svg-movimiento-del-centro-de-masas",
    leafId: "movimiento-del-centro-de-masas",
    title: {
      es: "Movimiento del centro de masas",
      en: "Motion of the center of mass",
    },
    subtitle: {
      es: "Fuerza externa, aceleración colectiva y trayectoria del CM",
      en: "External force, collective acceleration, and CM trajectory",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "movimiento-del-centro-de-masas",
    graphId: "svg-movimiento-del-centro-de-masas",
    purpose: {
      es: "Mostrar que el centro de masas se mueve como una partícula de masa total M sometida a la fuerza externa neta.",
      en: "Show that the center of mass moves like a particle of total mass M under the net external force.",
    },
    level: {
      es: "bachillerato | universidad inicial",
      en: "high school | early undergraduate",
    },
    expectedInputs: ["F_ext", "M", "p_tot"],
    acceptedAliases: {
      F_ext: ["Fext"],
      p_tot: ["ptot", "pTot"],
      v_cm: ["vcm", "Vcm"],
    },
    derivedMagnitudes: ["a_cm", "v_cm", "p_tot"],
    targetCandidates: ["v_cm", "a_cm", "p_tot"],
    equations: ["a_cm = F_ext / M", "p_tot = M v_cm"],
    hypotheses: ["fuerza externa neta constante", "masa total constante", "movimiento unidimensional"],
    validityDomain: ["mecanica clasica", "M > 0"],
    visualSimplifications: ["trayectoria sobre un eje", "tiempo interno finito para lectura pedagogica"],
    hasInternalTime: true,
    hasPlayPause: true,
    timeSemantics: "physical",
    alwaysVisible: ["F_ext", "M", "a_cm", "v_cm", "p_tot"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 640,
  params: {
    schema: [
      {
        key: "F_ext",
        aliases: ["Fext"],
        default: 6,
        label: { es: "Fuerza externa neta", en: "Net external force" },
        unit: "N",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -20,
        max: 20,
        step: 1,
      },
      {
        key: "M",
        default: 4,
        label: { es: "Masa total", en: "Total mass" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 20,
        step: 0.5,
      },
      {
        key: "p_tot",
        aliases: ["ptot", "pTot"],
        default: 8,
        label: { es: "Momento total inicial", en: "Initial total momentum" },
        unit: "kg·m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -40,
        max: 40,
        step: 1,
      },
    ],
    derivations: {
      a_cm: ({ F_ext, M }) => {
        const mass = Math.max(safeNum(M, 4), 1e-6);
        return safeNum(F_ext, 6) / mass;
      },
      v_cm: ({ p_tot, M }) => {
        const mass = Math.max(safeNum(M, 4), 1e-6);
        return safeNum(p_tot, 8) / mass;
      },
    },
  },
  infoCards: [
    {
      key: "law",
      label: { es: "Ley dinámica", en: "Dynamic law" },
      highlight: "a_cm = F_ext / M",
      highlightColor: "#fca5a5",
      description: {
        es: "La aceleración del CM depende solo de la fuerza externa neta y de la masa total.",
        en: "The CM acceleration depends only on net external force and total mass.",
      },
    },
    {
      key: "momentum",
      label: { es: "Momento colectivo", en: "Collective momentum" },
      highlight: "p_tot = M·v_cm",
      highlightColor: "#93c5fd",
      description: {
        es: "El momento total fija la velocidad instantánea del centro de masas.",
        en: "Total momentum sets the instantaneous center-of-mass speed.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura actual", en: "Current reading" },
      lines: ({ p, state, lang }) => [
        `a_cm = ${fmt(safeNum(p?.a_cm, 0), 2, lang)} m/s²`,
        `v_cm = ${fmt(safeNum(state?.v_cm, safeNum(p?.v_cm, 0)), 2, lang)} m/s`,
      ],
      result: ({ state, lang }) => `p_tot = ${fmt(safeNum(state?.p_tot, 0), 2, lang)} kg·m/s`,
      resultColor: "#34d399",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    tMax: 8,
    loop: true,
    state: (t, p) => {
      const mass = Math.max(safeNum(p?.M, 4), 1e-6);
      const force = safeNum(p?.F_ext, 6);
      const p0 = safeNum(p?.p_tot, 8);
      const a = force / mass;
      const v0 = p0 / mass;
      const v = v0 + a * t;
      const x = v0 * t + 0.5 * a * t * t;
      return {
        a_cm: a,
        v_cm: v,
        p_tot: mass * v,
        x_cm: x,
      };
    },
  },
  render: ({ p, state, lang = "es", activeTarget, hoveredSemanticTarget, selectSemanticTarget, hoverSemanticTarget, clearHoverSemanticTarget }) => {
    const isEs = lang !== "en";
    const force = safeNum(p?.F_ext, 6);
    const mass = safeNum(p?.M, 4);
    const a = safeNum(state?.a_cm, safeNum(p?.a_cm, 0));
    const v = safeNum(state?.v_cm, safeNum(p?.v_cm, 0));
    const pTot = safeNum(state?.p_tot, safeNum(p?.p_tot, 0));
    const xCm = clamp(safeNum(state?.x_cm, 0), -12, 12);

    const left = 100;
    const right = 860;
    const axisY = 320;
    const scale = (x) => left + ((x + 12) / 24) * (right - left);
    const px = scale(xCm);
    const forceVector = fitArrow({
      start: px,
      signedMagnitude: force,
      baseLength: 120,
      factor: 8,
      minLength: 42,
      minX: left,
      maxX: right,
    });
    const velocityVector = fitArrow({
      start: px,
      signedMagnitude: v,
      baseLength: 70,
      factor: 18,
      minLength: 38,
      minX: left,
      maxX: right,
    });
    const interactiveTextStyle = {
      cursor: "pointer",
      userSelect: "none",
    };
    const cmSelected = activeTarget === "p_tot";
    const forceSelected = activeTarget === "F_ext" || activeTarget === "a_cm";
    const velocitySelected = activeTarget === "v_cm";

    const pickTarget = (magnitudeId, symbol, semanticRole = "graph-target") => () => {
      if (typeof selectSemanticTarget === "function") {
        selectSemanticTarget({ magnitudeId, symbol, semanticRole });
      }
    };

    const hoverTarget = (magnitudeId, symbol, semanticRole, color, title, description) => () => {
      if (typeof hoverSemanticTarget === "function") {
        hoverSemanticTarget({ magnitudeId, symbol, semanticRole, color, title, description });
      }
    };

    const tooltipTitle = hoveredSemanticTarget?.title || null;
    const tooltipDescription = hoveredSemanticTarget?.description || null;
    const tooltipColor = hoveredSemanticTarget?.color || "#e2e8f0";
    const tooltipWidth = 500;
    const tooltipHeight = 105;
    const tooltipX = clamp(px - tooltipWidth / 2, left + 80, right - tooltipWidth);
    const tooltipY = axisY + 85;

    return (
      <g>
        <defs>
          <linearGradient id="cmMotionBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08111f" />
            <stop offset="100%" stopColor="#142a43" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#cmMotionBg)" />

        <text x="480" y="54" textAnchor="middle" fill="#ffffff" fontSize="28" fontWeight="800">
          {isEs ? "Movimiento del centro de masas" : "Motion of the center of mass"}
        </text>
        <text x="480" y="84" textAnchor="middle" fill="rgba(255,255,255,0.62)" fontSize="14">
          {isEs
            ? "El sistema completo se traslada como si toda su masa estuviera concentrada en el CM"
            : "The whole system translates as if all its mass were concentrated at the CM"}
        </text>

        <line x1={left} y1={axisY} x2={right} y2={axisY} stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" />

        {[-12, -6, 0, 6, 12].map((tick) => {
          const tickX = scale(tick);
          return (
            <g key={tick}>
              <line x1={tickX} y1={axisY - 8} x2={tickX} y2={axisY + 8} stroke="rgba(255,255,255,0.34)" strokeWidth="1.5" />
              <text x={tickX} y={axisY + 28} textAnchor="middle" fill="rgba(255,255,255,0.58)" fontSize="12">
                {tick}
              </text>
            </g>
          );
        })}

        <path
          d={`M ${scale(-10)} ${axisY - 90} Q ${scale(0)} ${axisY - 150} ${scale(10)} ${axisY - 90}`}
          fill="none"
          stroke="rgba(52,211,153,0.22)"
          strokeWidth="5"
          strokeDasharray="9 9"
        />

        <circle
          cx={px}
          cy={axisY - 54}
          r="28"
          fill={cmSelected ? "rgba(52,211,153,0.32)" : "rgba(52,211,153,0.18)"}
          stroke="#34d399"
          strokeWidth={cmSelected ? "4" : "3"}
          style={{ cursor: "pointer" }}
          onClick={pickTarget("p_tot", "p_{tot}", "collective-momentum")}
          onMouseEnter={hoverTarget(
            "p_tot",
            "p_{tot}",
            "collective-momentum",
            "#34d399",
            isEs ? "Momento colectivo" : "Collective momentum",
            isEs ? "El CM condensa la traslación global del sistema y aquí se usa para leer p_tot." : "The CM condenses the system's global translation and is used here to read p_tot."
          )}
          onMouseLeave={clearHoverSemanticTarget}
        />
        <text
          x={px}
          y={axisY - 49}
          textAnchor="middle"
          fill="#a7f3d0"
          fontSize="14"
          fontWeight="900"
          style={interactiveTextStyle}
          onClick={pickTarget("p_tot", "p_{tot}", "collective-momentum")}
          onMouseEnter={hoverTarget(
            "p_tot",
            "p_{tot}",
            "collective-momentum",
            "#34d399",
            isEs ? "Momento colectivo" : "Collective momentum",
            isEs ? "Haz foco sobre p_tot para leer cómo se traslada el sistema completo." : "Focus on p_tot to read how the whole system translates."
          )}
          onMouseLeave={clearHoverSemanticTarget}
        >
          CM
        </text>

        <SvgArrow
          x1={px}
          y1={axisY - 118}
          x2={forceVector.end}
          y2={axisY - 118}
          color="#fca5a5"
          label={`Fext=${fmt(force, 1, lang)}`}
          labelDx={forceVector.direction >= 0 ? 10 : -78}
          labelDy={-8}
        />
        <line
          x1={px}
          y1={axisY - 118}
          x2={forceVector.end}
          y2={axisY - 118}
          stroke="transparent"
          strokeWidth="24"
          style={{ cursor: "pointer" }}
          onClick={pickTarget("F_ext", "F_{ext}", "external-cause")}
          onMouseEnter={hoverTarget(
            "F_ext",
            "F_{ext}",
            "external-cause",
            "#fca5a5",
            isEs ? "Fuerza externa neta" : "Net external force",
            isEs ? "Esta flecha representa la causa externa que cambia la aceleración del centro de masas." : "This arrow represents the external cause that changes the center-of-mass acceleration."
          )}
          onMouseLeave={clearHoverSemanticTarget}
        />
        {forceSelected ? (
          <circle cx={forceVector.end} cy={axisY - 118} r="8" fill="rgba(252,165,165,0.95)" />
        ) : null}

        <SvgArrow
          x1={px}
          y1={axisY - 168}
          x2={velocityVector.end}
          y2={axisY - 168}
          color="#93c5fd"
          label={`vcm=${fmt(v, 2, lang)}`}
          labelDx={velocityVector.direction >= 0 ? 10 : -82}
          labelDy={-8}
        />
        <line
          x1={px}
          y1={axisY - 168}
          x2={velocityVector.end}
          y2={axisY - 168}
          stroke="transparent"
          strokeWidth="24"
          style={{ cursor: "pointer" }}
          onClick={pickTarget("v_cm", "v_{cm}", "collective-speed")}
          onMouseEnter={hoverTarget(
            "v_cm",
            "v_{cm}",
            "collective-speed",
            "#93c5fd",
            isEs ? "Velocidad del CM" : "CM velocity",
            isEs ? "Esta flecha muestra la velocidad instantánea del centro de masas y conecta con p_tot = M·v_cm." : "This arrow shows the instantaneous center-of-mass velocity and connects to p_tot = M·v_cm."
          )}
          onMouseLeave={clearHoverSemanticTarget}
        />
        {velocitySelected ? (
          <circle cx={velocityVector.end} cy={axisY - 168} r="8" fill="rgba(147,197,253,0.95)" />
        ) : null}

        <text
          x={px}
          y={axisY + 72}
          textAnchor="middle"
          fill="#6ee7b7"
          fontSize="13"
          fontWeight="700"
          style={interactiveTextStyle}
          onClick={pickTarget("p_tot", "p_{tot}", "collective-momentum")}
          onMouseEnter={hoverTarget(
            "p_tot",
            "p_{tot}",
            "collective-momentum",
            "#34d399",
            isEs ? "Posición del CM" : "CM position",
            isEs ? "La trayectoria muestra dónde estaría el CM mientras el sistema responde a la fuerza externa." : "The trajectory shows where the CM would be while the system responds to the external force."
          )}
          onMouseLeave={clearHoverSemanticTarget}
        >
          x_cm(t) = {fmt(xCm, 2, lang)} m
        </text>

        {tooltipTitle && tooltipDescription ? (
          <g>
            <rect
              x={tooltipX}
              y={tooltipY}
              width={tooltipWidth}
              height={tooltipHeight}
              rx="14"
              fill="rgba(8,15,31,0.92)"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="1.5"
            />
            <rect x={tooltipX + 14} y={tooltipY + 10} width="6" height="64" rx="3" fill={tooltipColor} />
            <text x={tooltipX + 32} y={tooltipY + 26} fill={tooltipColor} fontSize="11" fontWeight="900" letterSpacing="0.8">
              {isEs ? "INTERACCIÓN" : "INTERACTION"}
            </text>
            <text x={tooltipX + 32} y={tooltipY + 48} fill="#f8fafc" fontSize="14" fontWeight="800">
              {tooltipTitle}
            </text>
            <text x={tooltipX + 32} y={tooltipY + 70} fill="rgba(255,255,255,0.78)" fontSize="11">
              {tooltipDescription}
            </text>
            <text x={tooltipX + 32} y={tooltipY + 97} fill="rgba(255,255,255,0.45)" fontSize="10">
              {isEs ? "Haz click para enfocar esta magnitud en interpretación" : "Click to focus this quantity in interpretation"}
            </text>
          </g>
        ) : null}

        <text
          x="175"
          y="148"
          textAnchor="start"
          fill="rgba(255,255,255,0.72)"
          fontSize="13"
          style={interactiveTextStyle}
          onClick={pickTarget("M", "M", "total-mass")}
          onMouseEnter={hoverTarget(
            "M",
            "M",
            "total-mass",
            "#e2e8f0",
            isEs ? "Masa total" : "Total mass",
            isEs ? "M fija cuánta aceleración produce una misma fuerza externa sobre el sistema." : "M sets how much acceleration the same external force produces on the system."
          )}
          onMouseLeave={clearHoverSemanticTarget}
        >
          M = {fmt(mass, 2, lang)} kg
        </text>
        <text
          x="175"
          y="172"
          textAnchor="start"
          fill={forceSelected ? "#fecaca" : "rgba(255,255,255,0.72)"}
          fontSize="13"
          style={interactiveTextStyle}
          onClick={pickTarget("a_cm", "a_{cm}", "collective-acceleration")}
          onMouseEnter={hoverTarget(
            "a_cm",
            "a_{cm}",
            "collective-acceleration",
            "#fca5a5",
            isEs ? "Aceleración del CM" : "CM acceleration",
            isEs ? "a_cm es la respuesta dinámica colectiva causada por F_ext según a_cm = F_ext/M." : "a_cm is the collective dynamic response caused by F_ext according to a_cm = F_ext/M."
          )}
          onMouseLeave={clearHoverSemanticTarget}
        >
          a_cm = {fmt(a, 2, lang)} m/s²
        </text>
        <text
          x="175"
          y="196"
          textAnchor="start"
          fill={cmSelected ? "#a7f3d0" : "rgba(255,255,255,0.72)"}
          fontSize="13"
          style={interactiveTextStyle}
          onClick={pickTarget("p_tot", "p_{tot}", "collective-momentum")}
          onMouseEnter={hoverTarget(
            "p_tot",
            "p_{tot}",
            "collective-momentum",
            "#34d399",
            isEs ? "Momento total" : "Total momentum",
            isEs ? "p_tot resume el estado de traslación global y cambia si actúa una fuerza externa neta." : "p_tot summarizes the global translational state and changes if a net external force acts."
          )}
          onMouseLeave={clearHoverSemanticTarget}
        >
          p_tot = {fmt(pTot, 2, lang)} kg·m/s
        </text>

        <text x="480" y="540" textAnchor="middle" fill="rgba(255,255,255,0.56)" fontSize="13">
          {isEs
            ? "Si Fext se anula, el CM mantiene velocidad constante; si Fext no es nula, su velocidad cambia como la de una sola partícula equivalente."
            : "If Fext vanishes, the CM keeps constant speed; if Fext is nonzero, its speed changes like that of a single equivalent particle."}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["F_ext", "M", "p_tot"],
    stateOut: ["a_cm", "v_cm", "p_tot"],
    target: "v_cm",
    selectableMagnitudes: ["v_cm", "a_cm", "p_tot", "F_ext", "M"],
    supportsFocusTarget: true,
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo la fuerza externa neta determina la aceleración del centro de masas del sistema?",
      en: "How does the net external force determine the acceleration of the system's center of mass?",
    },
    magnitud_estrella: "a_cm",
  },
};

export default profile;