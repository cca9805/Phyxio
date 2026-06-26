// frontend/src/v2/components/SVG/SvgProfileRenderer.jsx
//
// Motor principal de renderizado para gráficos SVG animados.
// Análogo a DclRenderer para los DCL.
//
// Recibe un `profile` declarativo (.svg.profile.js) y gestiona:
//   1. Parámetros e interactividad (useExperimentParams)
//   2. Derivaciones de parámetros físicos
//   3. Animación en tiempo real (useRafPlayer)
//   4. Despacho al renderizador de escena (built-in ó CUSTOM)
//   5. Layout (SvgFrame + controles + panel lateral)
//   6. Reporte de estado al motor de interpretación (onGraphStateChange)

import React, { useCallback, useEffect, useMemo, useState } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";
import { useRafPlayer } from "@/v2/components/graphs_shared/sim";

import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
  SVG_COLORS,
  SVG_VECTOR_COLOR,
  SVG_VECTOR_KINDS,
  getLocalizedText,
  resolveSvgInterpretationBinding,
  resolveSvgInterpretationTarget,
  schemaToExperimentSchema,
} from "./svgGrammar";
import { validateSvgProfile } from "./validateSvgProfile";
import { getFullInterpretation } from "../../utils/interpretationEngine.js";

/* ============================================================================
 * HELPERS INTERNOS
 * ============================================================================ */

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  if (v === null || v === undefined || v === "") return fb;
  if (typeof v === "object" && "value" in v) return toNum(v.value, fb);
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};
const fmt = (n, d = 2) =>
  Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "—";

function pickSvgSemanticTarget(profile, binding, p, state, sharedParams) {
  const candidates = [
    binding?.target,
    binding?.primaryTarget,
    profile?.meta?.target,
    sharedParams?.__graphContext?.target,
    sharedParams?.__calc?.target,
    ...(Array.isArray(binding?.targetCandidates) ? binding.targetCandidates : []),
    ...(Array.isArray(binding?.selectableMagnitudes) ? binding.selectableMagnitudes : []),
    ...(Array.isArray(binding?.stateOut) ? binding.stateOut : []),
    ...(Array.isArray(binding?.paramsIn) ? binding.paramsIn : []),
  ].filter((value) => typeof value === "string" && value.trim());

  for (const key of candidates) {
    if (Object.prototype.hasOwnProperty.call(state ?? {}, key)) return key;
    if (Object.prototype.hasOwnProperty.call(p ?? {}, key)) return key;
  }

  return candidates[0] ?? null;
}

function pickSvgSemanticValue(target, p, state, sharedParams) {
  if (target && Object.prototype.hasOwnProperty.call(p ?? {}, target)) {
    return toNum(p[target], null);
  }
  if (target && Object.prototype.hasOwnProperty.call(state ?? {}, target)) {
    return toNum(state[target], null);
  }
  return toNum(sharedParams?.__calc?.result, null);
}

function buildSemanticSnapshot(keys, source) {
  const out = {};
  for (const key of keys ?? []) {
    const value = source?.[key];
    const num = toNum(value, null);
    if (num !== null) out[key] = num;
  }
  return out;
}

function normalizeSvgSelection(nextSelection) {
  if (!nextSelection) return null;
  if (typeof nextSelection === "string") {
    return {
      id: nextSelection,
      magnitudeId: nextSelection,
      symbol: nextSelection,
      type: "svg-target",
      semanticRole: "graph-target",
    };
  }
  if (typeof nextSelection !== "object") return null;

  const magnitudeId = nextSelection.magnitudeId || nextSelection.id || null;
  if (!magnitudeId) return null;

  return {
    id: nextSelection.id || magnitudeId,
    magnitudeId,
    symbol: nextSelection.symbol || magnitudeId,
    type: nextSelection.type || "svg-target",
    semanticRole: nextSelection.semanticRole || "graph-target",
    title: nextSelection.title || null,
    description: nextSelection.description || null,
    color: nextSelection.color || null,
  };
}
/* ============================================================================
 * PRIMITIVOS COMPARTIDOS (usados por scene renderers y perfiles CUSTOM)
 * Exportados para que los profiles puedan importarlos si lo necesitan.
 * ============================================================================ */

/** Flecha vectorial con cabeza triangular */
export function SvgArrow({
  x1, y1, x2, y2,
  color = SVG_COLORS.TEXT,
  label = "",
  labelDx = 10,
  labelDy = -8,
  strokeWidth = 4,
  headSize = 12,
}) {
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len, uy = dy / len;
  const p1x = x2 - ux * headSize - uy * (headSize * 0.55);
  const p1y = y2 - uy * headSize + ux * (headSize * 0.55);
  const p2x = x2 - ux * headSize + uy * (headSize * 0.55);
  const p2y = y2 - uy * headSize - ux * (headSize * 0.55);
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <polygon points={`${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}`} fill={color} />
      {label ? (
        <text x={x2 + labelDx} y={y2 + labelDy}
          fill={color} fontSize="12" fontWeight="900">
          {label}
        </text>
      ) : null}
    </g>
  );
}

/** Flecha circular de torque / rotación */
export function SvgTorqueArc({
  cx, cy, radius,
  color = SVG_COLORS.TORQUE,
  label = "Ï„",
  clockwise = false,
}) {
  // Arco en el cuadrante superior: Q2→Q1 (antihorario) o Q1→Q2 (horario)
  const sweep = clockwise ? 1 : 0;
  const x1 = cx + radius * 0.18;
  const y1 = cy - radius;
  const x2 = cx + radius;
  const y2 = cy - radius * 0.45;
  const arrowX = x2, arrowY = y2;
  const dx = clockwise ? -12 : 6;
  const dy = clockwise ? -6 : -16;
  return (
    <g>
      <path
        d={`M ${x1} ${y1} A ${radius} ${radius} 0 0 ${sweep} ${x2} ${y2}`}
        fill="none" stroke={color} strokeWidth="4"
      />
      <polygon
        points={`${arrowX},${arrowY} ${arrowX + dx - 14},${arrowY + dy + 4} ${arrowX + dx - 6},${arrowY + dy - 12}`}
        fill={color}
      />
      {label ? (
        <text x={x2 + 12} y={y2 - 10} fontSize="12" fill={color} fontWeight="900">
          {label}
        </text>
      ) : null}
    </g>
  );
}

/** Dots de masa distribuida en órbita alrededor de (cx, cy) */
export function SvgMassDots({ cx, cy, r, n = 6, color = SVG_COLORS.MASS_STROKE, theta = 0 }) {
  const dots = [];
  for (let i = 0; i < n; i++) {
    const a = theta + (i * 2 * Math.PI) / n;
    dots.push(
      <circle key={i}
        cx={cx + r * Math.cos(a)} cy={cy + r * Math.sin(a)}
        r={6}
        fill={color} stroke="rgba(255,255,255,0.55)" strokeWidth="1.5"
      />
    );
  }
  return <>{dots}</>;
}

/** Disco circular con radio marcado y masa distribuida */
export function SvgDisk({
  cx, cy, r,
  theta = 0,
  massDotR = null,
  nDots = 6,
  color = SVG_COLORS.DISK_STROKE,
  showRadius = true,
}) {
  const dotR = massDotR ?? r * 0.75;
  const rx = cx + r * Math.cos(theta);
  const ry = cy + r * Math.sin(theta);
  return (
    <g>
      <circle cx={cx} cy={cy} r={r}
        fill={SVG_COLORS.DISK_FILL} stroke={color} strokeWidth="3" />
      <circle cx={cx} cy={cy} r={5} fill="#fff" opacity="0.8" />
      {showRadius && (
        <>
          <line x1={cx} y1={cy} x2={rx} y2={ry}
            stroke={color} strokeWidth="2" strokeDasharray="5 4" opacity="0.7" />
          <text x={(cx + rx) / 2 + 6} y={(cy + ry) / 2 - 4}
            fontSize="11" fill={color} fontWeight="700" opacity="0.8">R</text>
        </>
      )}
      <SvgMassDots cx={cx} cy={cy} r={dotR} n={nDots} color={color} theta={theta} />
    </g>
  );
}

/** Suelo con trama diagonal */
export function SvgGround({ x1, x2, y, shadeDepth = 18, color = SVG_COLORS.GROUND }) {
  return (
    <g>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={color} strokeWidth="2.5" />
      {Array.from({ length: Math.ceil((x2 - x1) / 16) }).map((_, i) => {
        const bx = x1 + i * 16;
        return (
          <line key={i}
            x1={bx} y1={y} x2={bx - shadeDepth * 0.7} y2={y + shadeDepth}
            stroke={color} strokeWidth="1.5" opacity="0.4"
          />
        );
      })}
    </g>
  );
}

/** Muelle animado entre dos puntos */
export function SvgSpring({ x1, y1, x2, y2, coils = 8, amplitude = 12, color = SVG_COLORS.SPRING_FORCE }) {
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len, uy = dy / len;
  const nx = -uy, ny = ux;

  const points = [];
  const margin = len * 0.1;
  const springLen = len - 2 * margin;

  // Extremos rectos
  points.push(`${x1 + ux * margin} ${y1 + uy * margin}`);
  for (let i = 0; i <= coils * 2; i++) {
    const t = i / (coils * 2);
    const along = margin + t * springLen;
    const side = (i % 2 === 0 ? 1 : -1) * amplitude;
    const px = x1 + ux * along + nx * side;
    const py = y1 + uy * along + ny * side;
    points.push(`${px} ${py}`);
  }
  points.push(`${x2 - ux * margin} ${y2 - uy * margin}`);

  return (
    <polyline
      points={points.join(", ")}
      fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
    />
  );
}

/* ============================================================================
 * BUILT-IN SCENE RENDERERS
 * Cada función recibe { p, state, t, lang } y devuelve JSX puro (sin Fragment).
 * ============================================================================ */

/** ROTATING_DISK: disco rotante con torque y masa distribuida */
function renderRotatingDisk({ p, state }) {
  const R     = clamp(toNum(p.R, 1.2), 0.3, 2.5);
  const tau   = toNum(p.tau, 3);
  const m     = clamp(toNum(p.m, 2), 0.2, 20);
  const spread = clamp(toNum(p.spread, 0.85), 0.2, 1);
  const theta = toNum(state?.theta, 0);
  const showFormula = p.showFormula !== false;
  const showAlpha   = p.showAlpha !== false;
  const I     = m * R * R;
  const alpha = I > 0 ? tau / I : 0;

  const pxPerM = 75;
  const CX = 425, CY = 250;
  const wheelR = R * pxPerM;
  const dotR   = wheelR * spread;
  const nDots  = Math.max(3, Math.min(12, Math.round(m)));

  return (
    <g>
      <SvgDisk cx={CX} cy={CY} r={wheelR} theta={theta} massDotR={dotR} nDots={nDots} />
      <SvgTorqueArc cx={CX} cy={CY} radius={wheelR} label="Ï„" />
      {showAlpha && (
        <text x={CX - 60} y={CY + wheelR + 38}
          fontSize="13" fill={SVG_COLORS.FORMULA} fontWeight="700">
          α = {fmt(alpha, 2)} rad/s²
        </text>
      )}
      {showFormula && (
        <text x={CX - 70} y={CY + wheelR + 58}
          fontSize="12" fill={SVG_COLORS.FORMULA} fontWeight="600">
          I = m·R² = {fmt(I, 2)} kg·m²
        </text>
      )}
    </g>
  );
}

/** SPRING_MASS: masa unida a muelle (SHM) */
function renderSpringMass({ p, state }) {
  const m = clamp(toNum(p.m, 1), 0.1, 20);
  const k = clamp(toNum(p.k, 10), 0.5, 200);
  const A = clamp(toNum(p.A, 1), 0.01, 3);
  const x = toNum(state?.x, 0);     // posición actual en m
  const v = toNum(state?.v, 0);

  const pxPerM = 80;
  const wallX = 80, CY = 270;
  const massR = 28;
  const restX = 500;
  const massX = restX + x * pxPerM;

  return (
    <g>
      {/* Pared */}
      <rect x={wallX - 20} y={CY - 90} width={20} height={180}
        fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" strokeWidth="2" rx="2" />
      {/* Muelle */}
      <SvgSpring x1={wallX} y1={CY} x2={massX - massR} y2={CY}
        coils={10} amplitude={14} />
      {/* Masa */}
      <circle cx={massX} cy={CY} r={massR}
        fill={SVG_COLORS.MASS_FILL} stroke={SVG_COLORS.MASS_STROKE} strokeWidth="3" />
      <text x={massX} y={CY + 5} textAnchor="middle" dominantBaseline="middle"
        fontSize="13" fill={SVG_COLORS.TEXT} fontWeight="900">m</text>
      {/* Posición de equilibrio */}
      <line x1={restX} y1={CY - 55} x2={restX} y2={CY + 55}
        stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="6 4" />
      <text x={restX + 6} y={CY - 58} fontSize="11" fill={SVG_COLORS.DIMENSION} >x=0</text>
      {/* Vector velocidad */}
      {Math.abs(v) > 0.05 && (
        <SvgArrow
          x1={massX} y1={CY - massR - 8}
          x2={massX + v * pxPerM * 0.5} y2={CY - massR - 8}
          color={SVG_COLORS.VELOCITY} label="v"
          labelDx={4} labelDy={-2}
        />
      )}
      {/* Suelo */}
      <SvgGround x1={60} x2={780} y={CY + 60} />
    </g>
  );
}

/** BLOCK_TRANSLATION: bloque deslizando sobre superficie horizontal */
function renderBlockTranslation({ p, state }) {
  const m = clamp(toNum(p.m, 5), 0.1, 50);
  const F = toNum(p.F ?? p.Fnet ?? 0, 0);
  const x = toNum(state?.x, 0);
  const v = toNum(state?.v, 0);

  const pxPerM = 50;
  const CY = 270;
  const blockW = 70, blockH = 55;
  const blockX = 300 + clamp(x * pxPerM, -200, 360);
  const blockY = CY - blockH;

  return (
    <g>
      <SvgGround x1={60} x2={790} y={CY} />
      <rect
        x={blockX - blockW / 2} y={blockY}
        width={blockW} height={blockH}
        fill={SVG_COLORS.BLOCK_FILL} stroke={SVG_COLORS.BLOCK_STROKE} strokeWidth="2.5" rx="4"
      />
      <text x={blockX} y={blockY + blockH / 2 + 5}
        textAnchor="middle" dominantBaseline="middle"
        fontSize="14" fill={SVG_COLORS.TEXT} fontWeight="900">m</text>
      {/* Fuerza aplicada */}
      {Math.abs(F) > 0.01 && (
        <SvgArrow
          x1={F > 0 ? blockX - blockW / 2 - 5 : blockX + blockW / 2 + 5}
          y1={blockY + blockH / 2}
          x2={F > 0 ? blockX - blockW / 2 - 5 - 70 : blockX + blockW / 2 + 5 + 70}
          y2={blockY + blockH / 2}
          color={SVG_COLORS.APPLIED} label="F"
        />
      )}
      {/* Velocidad */}
      {Math.abs(v) > 0.1 && (
        <SvgArrow
          x1={blockX} y1={blockY - 12}
          x2={blockX + v * 18} y2={blockY - 12}
          color={SVG_COLORS.VELOCITY} label="v"
        />
      )}
    </g>
  );
}

/* dispatcher de escenas built-in */
const SCENE_RENDERERS = {
  [SVG_SCENE_TYPES.ROTATING_DISK]:    renderRotatingDisk,
  [SVG_SCENE_TYPES.SPRING_MASS]:      renderSpringMass,
  [SVG_SCENE_TYPES.BLOCK_TRANSLATION]: renderBlockTranslation,
};

function dispatchScene(sceneType, ctx) {
  const fn = SCENE_RENDERERS[sceneType];
  if (!fn) return null;
  return fn(ctx);
}

/* ============================================================================
 * COMPONENTES UI INTERNOS
 * ============================================================================ */

/** Slider inline con estilo consistente con SVGs existentes */
function Slider({ value, min, max, step, onChange }) {
  return (
    <input
      type="range"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={(e) => onChange(Number(e.target.value))}
      style={{ width: "100%", accentColor: "#6366f1", cursor: "pointer" }}
    />
  );
}

/** Chip de modo: muestra si el gráfico sigue la calculadora o está en experimento */
function ModeChip({ mode, lang }) {
  const isExp = mode === "experiment";
  return (
    <div
      style={{
        padding: "6px 12px",
        borderRadius: 12,
        border: `1px solid ${isExp ? "rgba(99,102,241,0.5)" : "rgba(255,255,255,0.14)"}`,
        background: isExp ? "rgba(99,102,241,0.22)" : "rgba(0,0,0,0.30)",
        color: isExp ? "rgba(180,185,255,0.95)" : "rgba(255,255,255,0.6)",
        fontWeight: 900,
        fontSize: 11,
        letterSpacing: 0.5,
        userSelect: "none",
      }}
    >
      {isExp
        ? (lang === "en" ? "🧪 EXPERIMENT" : "🧪 EXPERIMENTO")
        : (lang === "en" ? "📡 CALCULATOR" : "📡 CALCULADORA")}
    </div>
  );
}

/** Controles de reproducción (play/pause/reset) para escenas animadas */
function PlayControls({ player, lang }) {
  const { isPlaying, toggle, reset } = player;
  const btnStyle = {
    padding: "9px 14px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(0,0,0,0.35)",
    color: "rgba(255,255,255,0.88)",
    fontWeight: 900,
    cursor: "pointer",
    fontSize: 12,
  };
  return (
    <>
      <button type="button" onClick={toggle} style={btnStyle}>
        {isPlaying ? "⏸" : "▶"}
      </button>
      <button type="button" onClick={() => reset(0)} style={btnStyle}>
        ⟳
      </button>
    </>
  );
}

/* ============================================================================
 * CALC CONTEXT PANEL
 * Muestra los datos recibidos desde la calculadora (variables + valores).
 * Solo visible cuando hay al menos un valor seeded distinto de null.
 * ============================================================================ */

/**
 * CalcContextPanel
 * Muestra qué variables y valores llegaron desde el cálculo / interpretación.
 * Permite al usuario ver el origen de los datos del gráfico.
 */
function CalcContextPanel({ seeded, schema, lang, mode, formulaLabel }) {
  const hasData = seeded && Object.values(seeded).some((v) => v !== null && v !== undefined);
  if (!hasData && !formulaLabel) return null;

  const schemaMap = Object.fromEntries((schema ?? []).map((s) => [s.key, s]));
  const isExp = mode === "experiment";

  return (
    <div
      style={{
        borderRadius: 14,
        border: `1px solid ${isExp ? "rgba(255,255,255,0.08)" : "rgba(99,102,241,0.35)"}`,
        background: isExp ? "rgba(0,0,0,0.25)" : "rgba(99,102,241,0.10)",
        padding: "10px 12px",
        marginBottom: 8,
        transition: "background 0.3s",
      }}
    >
      <div
        style={{
          fontSize: 10,
          letterSpacing: 1,
          opacity: isExp ? 0.45 : 0.75,
          fontWeight: 900,
          marginBottom: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span>📡</span>
          {lang === "en" ? "FROM CALCULATOR" : "DESDE CALCULADORA"}
        </div>
        {formulaLabel && (
          <div style={{
            fontSize: 9,
            padding: "2px 8px",
            borderRadius: 8,
            background: "rgba(99,102,241,0.25)",
            border: "1px solid rgba(99,102,241,0.5)",
            color: "#a5b4fc"
          }}>
            {formulaLabel.replace(/\$/g, "")}
          </div>
        )}
      </div>

      {Object.entries(seeded).map(([key, val]) => {
        if (val === null || val === undefined) return null;
        const item = schemaMap[key];
        const label = item ? getLocalizedText(item.label, lang, key) : key;
        const unit = item?.unit ?? "";
        const decimals = item?.decimals ?? 2;
        return (
          <div
            key={key}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 3,
              opacity: isExp ? 0.5 : 1,
            }}
          >
            <span style={{ fontSize: 12, opacity: 0.75 }}>{label}</span>
            <span style={{ fontSize: 13, fontWeight: 900 }}>
              {Number.isFinite(val) ? fmt(val, decimals) : String(val)} {unit}
            </span>
          </div>
        );
      })}

      {isExp && (
        <div style={{ fontSize: 10, opacity: 0.45, marginTop: 6, fontStyle: "italic" }}>
          {lang === "en"
            ? "Graph is using your experiment values, not these."
            : "El gráfico usa tus valores de experimento, no estos."}
        </div>
      )}
    </div>
  );
}

/* ============================================================================
 * ASIDE PANEL
 * Panel lateral derecho: CalcContext + ParamInputs + Readings + Formula
 * ============================================================================ */

/** Panel lateral generado desde profile.aside */
function AsidePanel({ profile, p, state, t, lang, seeded, mode, startExperiment, resetToCalculator, onApplyToCalculator, setValue, formulaLabel, interpretationResult, interpretationTarget, fmt, toNum }) {
  const schema = profile.params?.schema ?? [];
  const isExp = mode === "experiment";

  const panelStyle = (bg) => ({
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.12)",
    background: bg ?? "rgba(0,0,0,0.60)",
    padding: "10px 12px",
    marginBottom: 8,
  });

  const btnBase = {
    padding: "6px 11px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.14)",
    fontWeight: 900,
    cursor: "pointer",
    fontSize: 10,
    letterSpacing: 0.3,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "8px" }}>

      {/* ── Contexto calculadora ─────────────────────────────────────────── */}
      <CalcContextPanel
        seeded={seeded}
        schema={schema}
        lang={lang}
        mode={mode}
        formulaLabel={formulaLabel}
      />

      {/* ── Parámetros interactivos ──────────────────────────────────────── */}
      {schema.length > 0 && (
        <div style={panelStyle()}>
          {/* Header con botones de modo */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <div style={{ fontSize: 10, letterSpacing: 1, opacity: 0.65, fontWeight: 900 }}>
              {lang === "en" ? "PARAMETERS" : "PARÁMETROS"}
            </div>
            <div style={{ display: "flex", gap: 5 }}>
              {isExp ? (
                <button
                  type="button"
                  style={{ ...btnBase, background: "rgba(0,0,0,0.4)", color: "rgba(255,255,255,0.8)" }}
                  onClick={resetToCalculator}
                >
                  {lang === "en" ? "↩ Calculator" : "↩ Calculadora"}
                </button>
              ) : (
                <button
                  type="button"
                  style={{ ...btnBase, background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.75)" }}
                  onClick={startExperiment}
                >
                  {lang === "en" ? "🧪 Experiment" : "🧪 Experimentar"}
                </button>
              )}
              {onApplyToCalculator && (
                <button
                  type="button"
                  style={{ ...btnBase, background: "rgba(99,102,241,0.55)", color: "#fff" }}
                  onClick={() => {
                    onApplyToCalculator(p);   // envía valores al calculador
                    resetToCalculator();       // vuelve a modo "follow" para confirmar sincronía
                  }}
                >
                  {lang === "en" ? "↑ Apply" : "↑ Aplicar"}
                </button>
              )}
            </div>
  
          </div>

          {/* Indicador de modo */}
          <div style={{ fontSize: 11, opacity: 0.5, marginBottom: 10, fontStyle: "italic" }}>
            {isExp
              ? (lang === "en"
                  ? "Experiment mode — graph uses these values."
                  : "Modo experimento — el gráfico usa estos valores.")
              : (lang === "en"
                  ? "Following calculator — experiment to edit freely."
                  : "Siguiendo calculadora — experimenta para editar libremente.")}
          </div>

          {/* Items del schema */}
          <div style={{ display: "grid", gap: 12 }}>
            {schema.map((item) => {
              const val = p[item.key];
              const label = getLocalizedText(item.label, lang, item.key);
              const unit = item.unit ?? "";
              const decimals = item.decimals ?? 2;
              const isToggle = item.type === "toggle";

              if (isToggle) {
                return (
                  <div key={item.key} className="v2-toggle-row">
                    <label className="v2-toggle">
                      <input
                        className="v2-toggle-input"
                        type="checkbox"
                        checked={!!val}
                        onChange={(e) => setValue(item.key, e.target.checked)}
                      />
                      <span className="v2-toggle-label">{label}</span>
                    </label>
                  </div>
                );
              }

              return (
                <div key={item.key}>
                  {/* Fila label + input numérico */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, opacity: 0.85 }}>{label}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <input
                        type="number"
                        value={val ?? ""}
                        min={item.min}
                        max={item.max}
                        step={item.step ?? "any"}
                        disabled={!isExp}
                        onChange={(e) => {
                          const n = Number(String(e.target.value).replace(",", "."));
                          if (Number.isFinite(n)) setValue(item.key, n);
                        }}
                        style={{
                          width: 72,
                          padding: "3px 7px",
                          borderRadius: 8,
                          border: `1px solid ${isExp ? "rgba(99,102,241,0.5)" : "rgba(255,255,255,0.12)"}`,
                          background: isExp ? "rgba(99,102,241,0.15)" : "rgba(0,0,0,0.20)",
                          color: "rgba(255,255,255,0.9)",
                          fontSize: 13,
                          fontWeight: 900,
                          textAlign: "right",
                          opacity: isExp ? 1 : 0.65,
                          outline: "none",
                        }}
                      />
                      <span style={{ fontSize: 11, opacity: 0.5, minWidth: 28 }}>{unit}</span>
                    </div>
                  </div>
                  {/* Slider */}
                  <Slider
                    value={toNum(val, item.default ?? 0)}
                    min={item.min ?? 0}
                    max={item.max ?? 10}
                    step={item.step ?? 0.1}
                    onChange={(v) => setValue(item.key, v)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Info Cards (declarados en el profile) ────────────────────── */}
      {(profile.infoCards ?? []).length > 0 && (
        <div style={panelStyle()}>
          <div style={{ fontSize: 10, letterSpacing: 1, opacity: 0.65, fontWeight: 900, marginBottom: 10 }}>
            {lang === "en" ? "ANALYSIS" : "ANÁLISIS"}
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            {profile.infoCards.map((card, index) => {
              const cardLabel = getLocalizedText(card.label, lang);
              const desc = typeof card.description === "function"
                ? card.description({ p, state, lang, fmt, toNum })
                : getLocalizedText(card.description, lang);
              const lines = typeof card.lines === "function" ? card.lines({ p, state, lang, fmt, toNum }) : null;
              const result = typeof card.result === "function" ? card.result({ p, state, lang, fmt, toNum }) : null;
              const highlight = typeof card.highlight === "function" ? card.highlight({ p, state, lang, fmt, toNum }) : card.highlight;

              return (
                <div key={card.key || card.id || `info-card-${index}`} style={{
                  borderRadius: 12,
                  border: `1px solid ${card.border ?? "rgba(255,255,255,0.06)"}`,
                  background: card.bg ?? "rgba(0,0,0,0.28)",
                  padding: "8px 12px",
                }}>
                  <div style={{ fontSize: 10, opacity: 0.65, fontWeight: 900, marginBottom: 4 }}>{cardLabel}</div>
                  {highlight && <div style={{ color: card.highlightColor ?? "#93c5fd", fontSize: 16, fontWeight: 900, marginBottom: 2 }}>{highlight}</div>}
                  {lines && lines.map((l, i) => <div key={i} style={{ fontSize: 12, color: "rgba(255,255,255,0.85)" }}>{l}</div>)}
                  {result && <div style={{ color: card.resultColor ?? "#34d399", fontSize: 13, fontWeight: 900, marginTop: 2 }}>{result}</div>}
                  {desc && <div style={{ fontSize: 11, opacity: 0.85, marginTop: 2 }}>{desc}</div>}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {interpretationResult?.ok && interpretationResult.flatMessages?.length > 0 && (
        <div style={panelStyle()}>
          <div style={{ fontSize: 10, letterSpacing: 1, opacity: 0.65, fontWeight: 900, marginBottom: 10 }}>
            {lang === "en" ? "GRAPH INTERPRETATION" : "INTERPRETACIÓN DEL GRÁFICO"}
          </div>
          {interpretationTarget ? (
            <div style={{ fontSize: 11, fontWeight: 900, color: "#93c5fd", marginBottom: 8 }}>
              {interpretationTarget}
            </div>
          ) : null}
          <div style={{ display: "grid", gap: 8 }}>
            {["summary", "physical_reading", "graph_reading", "likely_errors"].map((sectionKey) => {
              const items = interpretationResult.sections?.[sectionKey] || [];
              if (!items.length) return null;
              return (
                <div key={sectionKey} style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.28)", padding: "8px 12px" }}>
                  <div style={{ fontSize: 10, opacity: 0.65, fontWeight: 900, marginBottom: 4 }}>
                    {sectionKey === "summary"
                      ? (lang === "en" ? "SUMMARY" : "RESUMEN")
                      : sectionKey === "physical_reading"
                        ? (lang === "en" ? "PHYSICAL READING" : "LECTURA FÍSICA")
                        : sectionKey === "graph_reading"
                          ? (lang === "en" ? "GRAPH READING" : "LECTURA GRÁFICA")
                          : (lang === "en" ? "LIKELY ERRORS" : "ERRORES PROBABLES")}
                  </div>
                  <div style={{ display: "grid", gap: 6 }}>
                    {items.slice(0, sectionKey === "likely_errors" ? 2 : 2).map((msg) => (
                      <div key={msg.id || msg.text} style={{ fontSize: 11, lineHeight: 1.45, opacity: 0.9 }}>
                        {msg.text}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}

/* ============================================================================
 * MAIN RENDERER
 * ============================================================================ */

/**
 * SvgProfileRenderer
 *
 * Análogo a DclRenderer pero para escenas SVG animadas.
 *
 * Props:
 *   profile             — objeto .svg.profile.js importado
 *   lang                — "es" | "en" (default "es")
 *   sharedParams        — parámetros compartidos (desde calculadora / interpretación)
 *   interpretationDoc   — documento interpretacion.yaml parseado (para domain checks futuros)
 *   onGraphStateChange  — callback({ key: value }) cuando el estado físico cambia
 *   onInterpretationContextChange — callback para cambios de contexto semántico
 */
export default function SvgProfileRenderer({
  profile,
  Renderer = null,
  lang = "es",
  sharedParams = null,
  interpretationDoc = null,  // eslint-disable-line no-unused-vars
  onGraphStateChange = null,
  onInterpretationContextChange = null, // eslint-disable-line no-unused-vars
  /**
   * onApplyToCalculator(patch)
   * Callback opcional para enviar valores del experimento de vuelta
   * a la calculadora/contexto compartido del leaf.
   * Recibe el objeto `p` (parámetros efectivos actuales derivados).
   */
  onApplyToCalculator = null,
}) {
  const [selectedSemanticTarget, setSelectedSemanticTarget] = useState(null);
  const [hoveredSemanticTarget, setHoveredSemanticTarget] = useState(null);

  const validationReport = useMemo(() => {
    if (!import.meta.env.DEV) return null;
    return validateSvgProfile(profile);
  }, [profile]);

  if (import.meta.env.DEV && validationReport && !validationReport.ok) {
    throw new Error(validationReport.messages.errors.join("\n"));
  }

  // ── 1. Construir schema compatible con useExperimentParams ──────────────────
  const profileParams = profile?.params ?? {};
  const expSchema = useMemo(
    () => schemaToExperimentSchema(profileParams.schema),
    [profileParams.schema]
  );

  const exp = useExperimentParams({
    params: sharedParams ?? {},
    schema: expSchema,
  });
  const ep = exp.effectiveParams;

  // ── 2. Computar derivaciones ────────────────────────────────────────────────
  const p = useMemo(() => {
    // Obtenemos los valores crudos y los aplanamos (si son {value, unit})
    const raw = sharedParams?.values || sharedParams?.sharedParams || sharedParams || {};
    const flatContext = {};
    for (const [k, v] of Object.entries(raw)) {
      const n = toNum(v, null);
      if (n !== null) flatContext[k] = n;
    }
    
    // PRIORIDAD DINÁMICA: 
    // En modo experimento, los valores locales (ep) ganan.
    // En modo seguimiento, los valores de la calculadora (flatContext) ganan.
    const isExp = exp.mode === "experiment";
    const base = isExp 
      ? { ...flatContext, ...ep } 
      : { ...ep, ...flatContext };

    const derivs = profileParams.derivations ?? {};
    for (const [key, fn] of Object.entries(derivs)) {
      try { 
        // En modo experimento, las fórmulas del perfil deben RECALCULAR el estado físico 
        // basándose en los nuevos parámetros del usuario, ignorando los resultados "congelados" de la calculadora.
        base[key] = isExp ? fn(base) : (base[key] ?? fn(base)); 
      } catch (_) { /* silent */ }
    }
    
    if (typeof profileParams.sanitize === "function") {
      try { return profileParams.sanitize(base); } catch (_) { return base; }
    }
    return base;
  }, [ep, sharedParams, profileParams.derivations, profileParams.sanitize, exp.mode]);

  // ── 3. Animación ────────────────────────────────────────────────────────────
  const motion = profile?.motion ?? { type: SVG_MOTION_TYPES.STATIC };
  const hasAnim = motion.type !== SVG_MOTION_TYPES.STATIC;

  const player = useRafPlayer({
    tMax: hasAnim && motion.loop ? (motion.tMax ?? null) : (motion.tMax ?? null),
    initialT: 0,
    autoStop: !motion.loop && hasAnim,
  });

  // Loop: reset cuando llega a tMax
  const playerT = player.t;
  const tMax = motion.tMax;
  useEffect(() => {
    if (!hasAnim || !motion.loop || !tMax) return;
    if (playerT >= tMax) player.reset(0);
  }, [playerT, tMax, hasAnim, motion.loop, player]);

  const t = hasAnim ? (tMax ? playerT % tMax : playerT) : 0;

  const state = useMemo(() => {
    if (!hasAnim || typeof motion.state !== "function") return {};
    try { return motion.state(t, p) ?? {}; }
    catch (_) { return {}; }
  }, [t, p, motion.state, hasAnim]);

  const meta = profile?.meta ?? {};
  const title    = getLocalizedText(meta.title, lang, "Gráfico");
  const subtitle = getLocalizedText(meta.subtitle, lang);
  const badge    = meta.badge;

  const badgeLabel = badge ? getLocalizedText(badge.label, lang) : undefined;
  const badgeValue = badge?.value
    ? (() => { try { return badge.value({ p, state, t }); } catch (_) { return ""; } })()
    : undefined;

  const formulaLabel = sharedParams?.formulaLabel || 
                       sharedParams?.meta?.formula || 
                       sharedParams?.formula?.title || 
                       sharedParams?.__calc?.formulaTitle || 
                       sharedParams?.__calc?.formulaExpression || 
                       "";

  const interpretationBinding = useMemo(
    () => resolveSvgInterpretationBinding(profile),
    [profile]
  );
  const graphContract = profile?.graph_contract ?? null;
  const graphTarget = useMemo(
    () => pickSvgSemanticTarget(profile, interpretationBinding, p, state, sharedParams),
    [profile, interpretationBinding, p, state, sharedParams]
  );
  const graphValue = useMemo(
    () => pickSvgSemanticValue(graphTarget, p, state, sharedParams),
    [graphTarget, p, state, sharedParams]
  );
  const semanticParamsIn = useMemo(
    () => buildSemanticSnapshot(interpretationBinding.paramsIn, p),
    [interpretationBinding.paramsIn, p]
  );
  const semanticStateOut = useMemo(
    () => buildSemanticSnapshot(interpretationBinding.stateOut, { ...p, ...state }),
    [interpretationBinding.stateOut, p, state]
  );
  const selectableMagnitudes = useMemo(() => {
    const raw = interpretationBinding.selectableMagnitudes ?? [];
    return Array.isArray(raw) ? raw.filter((item) => typeof item === "string" && item.trim()) : [];
  }, [interpretationBinding.selectableMagnitudes]);
  const targetCandidates = useMemo(() => {
    const raw = interpretationBinding.targetCandidates
      ?? (typeof interpretationBinding.target === "string" ? [interpretationBinding.target] : []);
    return Array.isArray(raw) ? raw.filter((item) => typeof item === "string" && item.trim()) : [];
  }, [interpretationBinding.target, interpretationBinding.targetCandidates]);
  const supportsFocusTarget = interpretationBinding.supportsFocusTarget ?? false;
  const activeTarget = selectedSemanticTarget?.magnitudeId || graphTarget;
  const activeValue = useMemo(
    () => pickSvgSemanticValue(activeTarget, p, state, sharedParams),
    [activeTarget, p, state, sharedParams]
  );
  const resolvedInterpretationTarget = useMemo(
    () => resolveSvgInterpretationTarget({
      interpretationDoc,
      binding: interpretationBinding,
      graphContext: {
        target: activeTarget,
        value: activeValue,
        paramsIn: semanticParamsIn,
        stateOut: semanticStateOut,
        targetCandidates,
        selectableMagnitudes,
      },
      selectedTarget: activeTarget,
      calcTarget: sharedParams?.__calc?.target ?? null,
    }),
    [activeTarget, activeValue, interpretationBinding, interpretationDoc, selectableMagnitudes, semanticParamsIn, semanticStateOut, sharedParams, targetCandidates]
  );
  const asideInterpretation = useMemo(() => {
    const target = resolvedInterpretationTarget?.target || null;
    const sourceKey = resolvedInterpretationTarget?.sourceKey || target;
    if (!interpretationDoc || !target) return null;

    const interpretationArgs = {
      interpretation: interpretationDoc,
      target,
      result: {
        value: semanticStateOut?.[sourceKey] ?? semanticStateOut?.[target] ?? activeValue ?? null,
        latex: formulaLabel || "",
      },
      inputs: semanticParamsIn,
      formula: {
        id: sharedParams?.__calc?.formulaId || "",
        title: formulaLabel || "",
        equation: sharedParams?.__calc?.formulaEquation || "",
        latex: sharedParams?.__calc?.formulaLatex || "",
      },
      graphState: {
        ...(sharedParams || {}),
        ...(semanticParamsIn || {}),
        ...(semanticStateOut || {}),
      },
      lang,
      extraContext: {
        leafId: meta.id || "",
        ruta_relativa: meta.leafId || "",
      },
    };

    return getFullInterpretation(interpretationArgs);
  }, [activeValue, formulaLabel, interpretationDoc, lang, meta.id, meta.leafId, resolvedInterpretationTarget, semanticParamsIn, semanticStateOut, sharedParams]);

  // ── 4. Reportar estado al motor de interpretación ───────────────────────────
  useEffect(() => {
    if (typeof onGraphStateChange !== "function") return;
    const out = {};
    for (const key of (interpretationBinding.stateOut ?? [])) {
      if (key in p)     out[key] = p[key];
      if (key in state) out[key] = state[key];
    }
    if (Object.keys(out).length > 0) onGraphStateChange(out);
  }, [p, state, onGraphStateChange, interpretationBinding]);

  useEffect(() => {
    if (typeof onInterpretationContextChange !== "function") return;

    onInterpretationContextChange({
      source: "svg",
      target: activeTarget,
      graph: {
        source: "svg",
        profileId: meta.id ?? null,
        leafId: meta.leafId ?? null,
        title,
        subtitle,
        mode: exp.mode,
        followsCalculator: exp.mode !== "experiment",
        target: activeTarget,
        value: activeValue,
        formulaLabel,
        paramsIn: semanticParamsIn,
        stateOut: semanticStateOut,
        targetCandidates,
        selectableMagnitudes,
        supportsFocusTarget,
        contract: graphContract,
      },
      selectedVector: selectedSemanticTarget,
      interpretationDoc,
      calc: sharedParams?.__calc ?? null,
      lang,
    });
  }, [
    activeTarget,
    activeValue,
    exp.mode,
    formulaLabel,
    interpretationDoc,
    lang,
    meta.id,
    meta.leafId,
    onInterpretationContextChange,
    semanticParamsIn,
    semanticStateOut,
    selectedSemanticTarget,
    sharedParams,
    selectableMagnitudes,
    subtitle,
    supportsFocusTarget,
    targetCandidates,
    title,
  ]);

  // ── 5. Helpers UI ───────────────────────────────────────────────────────────
  const setValue = useCallback((k, v) => {
    // Cualquier modificación manual activa el modo experimento automáticamente
    if (exp.mode !== "experiment") exp.startExperiment();
    exp.setValue(k, v);
  }, [exp]);

  const selectSemanticTarget = useCallback((nextSelection) => {
    setSelectedSemanticTarget(normalizeSvgSelection(nextSelection));
  }, []);

  const clearSemanticTarget = useCallback(() => {
    setSelectedSemanticTarget(null);
  }, []);

  const hoverSemanticTarget = useCallback((nextSelection) => {
    setHoveredSemanticTarget(normalizeSvgSelection(nextSelection));
  }, []);

  const clearHoverSemanticTarget = useCallback(() => {
    setHoveredSemanticTarget(null);
  }, []);

  const tt = useCallback((es, en) => (lang === "en" ? en : es), [lang]);

  const viewBox = typeof profile?.viewBox === "string"
    ? profile.viewBox
    : "0 0 850 520";

  const dimensions = useMemo(() => {
    const parts = viewBox.split(" ").map(Number);
    return {
      width: parts[2] || 850,
      height: parts[3] || 520,
    };
  }, [viewBox]);

  const ctx = {
    p,
    state,
    t,
    lang,
    sharedParams,
    formulaLabel,
    toNum,
    fmt,
    tt,
    dimensions,
    activeTarget,
    selectableMagnitudes,
    selectedSemanticTarget,
    hoveredSemanticTarget,
    selectSemanticTarget,
    clearSemanticTarget,
    hoverSemanticTarget,
    clearHoverSemanticTarget,
  };

  // ── 7. SVG content vía Renderer (prop), CUSTOM render() o scene built-in ──
  let svgContent = null;
  if (typeof Renderer === "function") {
    svgContent = <Renderer {...ctx} />;
  } else if (typeof profile?.render === "function") {
    try {
      svgContent = profile.render(ctx);
    } catch (error) {
      console.error("[SvgProfileRenderer] custom profile render failed", {
        profileId: profile?.id || profile?.meta?.id || profile?.meta?.leafId,
        error,
      });
      svgContent = null;
    }
  } else {
    svgContent = dispatchScene(profile?.scene, ctx);
  }

  return (
    <SvgFrame
      title={title}
      subtitle={subtitle}
      badgeLabel={badgeLabel}
      badgeValue={badgeValue}
      lang={lang}
      viewBox={viewBox}
      svgHeight={profile?.svgHeight ?? 800}
      controls={
        <>
          {hasAnim && <PlayControls player={player} lang={lang} />}
          <ModeChip mode={exp.mode} lang={lang} />
        </>
      }
      aside={
        <AsidePanel
          profile={profile}
          p={p}
          state={state}
          t={t}
          lang={lang}
          seeded={exp.seededFromCalculator}
          mode={exp.mode}
          startExperiment={exp.startExperiment}
          resetToCalculator={exp.resetToCalculator}
          onApplyToCalculator={onApplyToCalculator}
          setValue={setValue}
          formulaLabel={formulaLabel}
          interpretationResult={asideInterpretation}
          interpretationTarget={resolvedInterpretationTarget?.target || activeTarget || null}
          fmt={fmt}
          toNum={toNum}
        />
      }
    >
      {svgContent}
    </SvgFrame>
  );
}

// Re-exportar primitivos para uso en render() de profiles CUSTOM
export { SVG_COLORS, SVG_VECTOR_COLOR, SVG_VECTOR_KINDS };
