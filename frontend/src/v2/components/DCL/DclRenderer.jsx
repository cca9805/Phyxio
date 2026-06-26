import React, { useEffect, useMemo, useRef, useState } from "react";
import Latex from "../shared/SafeLatex.jsx";
import { normalizeDclProfile, getLocalizedText } from "./dclGrammar";
import { createSceneModel } from "./dclSceneRegistry";
import { DCL_SCENE_REGISTRY } from "./dclSceneRegistry";
import { getFullInterpretation } from "../../utils/interpretationEngine.js";
import { useGraphContext } from "../../agent/GraphContextProvider";

const UI_TEXT = Object.freeze({
  rendererTitleFallback: {
    es: "Diagrama de cuerpo libre",
    en: "Free-body diagram",
  },
  graphReady: {
    es: "Lectura del DCL",
    en: "FBD reading",
  },
  graphReadyDesc: {
    es: "Resumen físico de las fuerzas representadas en el diagrama.",
    en: "Physical summary of the forces represented in the diagram.",
  },
  activeForces: {
    es: "Fuerzas visibles",
    en: "Visible forces",
  },
  inactiveForces: {
    es: "Fuerzas ocultas",
    en: "Hidden forces",
  },
  warnings: {
    es: "Advertencias",
    en: "Warnings",
  },
  stepLabel: {
    es: "Paso",
    en: "Step",
  },
  prev: {
    es: "Anterior",
    en: "Previous",
  },
  next: {
    es: "Siguiente",
    en: "Next",
  },
  tooltipMagnitude: {
    es: "Magnitud",
    en: "Magnitude",
  },
  tooltipRole: {
    es: "Rol físico",
    en: "Physical role",
  },
  tooltipBody: {
    es: "Cuerpo",
    en: "Body",
  },
  tooltipVector: {
    es: "Vector",
    en: "Vector",
  },
  stepExplanationTitle: {
    es: "Explicación del paso",
    en: "Step explanation",
  },
  smartHeaderFallback: {
    es: "Diagrama de cuerpo libre",
    en: "Free-body diagram",
  },

  selectedVector: {
    es: "Vector seleccionado",
    en: "Selected vector",
  },
  vectorType: {
    es: "Tipo",
    en: "Type",
  },
  vectorDirection: {
    es: "Dirección",
    en: "Direction",
  },
  compactLegend: {
    es: "Leyenda del gráfico",
    en: "Graph legend",
  },
  sceneBody: {
    es: "Cuerpo",
    en: "Body",
  },
  visibleForcesCount: {
    es: "Fuerzas visibles",
    en: "Visible forces",
  },
  hiddenForcesCount: {
    es: "Fuerzas ocultas",
    en: "Hidden forces",
  },
  displayModeTeacher: {
    es: "Modo profesor",
    en: "Teacher mode",
  },
  displayModeStudent: {
    es: "Modo alumno",
    en: "Student mode",
  },
  theoryLink: {
    es: "Conexión con teoría",
    en: "Theory link",
  },
  theoryConcept: {
    es: "Concepto",
    en: "Concept",
  },
  typicalErrors: {
    es: "Errores típicos",
    en: "Typical errors",
  },
});

function getCalcPayload({ sharedParams, paramsIn, __calc }) {
  if (sharedParams?.__calc) return sharedParams.__calc;
  if (paramsIn?.__calc) return paramsIn.__calc;
  if (__calc) return __calc;
  return null;
}

function localize(value, lang, fallback = "") {
  return getLocalizedText(value, lang, fallback);
}

function localizeWarningMessage(warning, lang) {
  const localized = localize(warning, lang, "");
  if (lang !== "en" || typeof localized !== "string") return localized;

  if (
    localized === "Hay muchas etiquetas explícitas. Revisa posibles solapes." ||
    localized === "Hay muchas etiquetas explicitas. Revisa posibles solapes." ||
    localized === "Hay muchas etiquetas explícitas. Revisa posibles solapes."
  ) {
    return "There are many explicit labels. Check for possible overlaps.";
  }

  if (
    localized === "La escena de polea no ha generado la polea geométrica." ||
    localized === "La escena de polea no ha generado la polea geometrica." ||
    localized === "La escena de polea no ha generado la polea geométrica."
  ) {
    return "Pulley scene did not generate pulley geometry.";
  }

  const bodyMatch = localized.match(/^El cuerpo \"([^\"]+)\" acumula (\d+) vectores visibles\.$/);
  if (bodyMatch) {
    return `Body "${bodyMatch[1]}" accumulates ${bodyMatch[2]} visible vectors.`;
  }

  return localized;
}

/**
 * Convierte símbolos con notación LaTeX de subscript/superscript (ej: "F_{ficticia}")
 * en elementos SVG <tspan> correctamente posicionados.
 * Para símbolos simples devuelve el string directamente.
 */
function renderSvgSymbol(symbol, fontSize = 14) {
  if (!symbol) return null;
  if (!symbol.includes("_{") && !symbol.includes("^{")) return symbol;

  const re = /_{([^}]+)}|\^{([^}]+)}|([^_^{}]+)/g;
  const parts = [];
  let m;
  while ((m = re.exec(symbol)) !== null) {
    if (m[1] !== undefined) parts.push({ text: m[1], type: "sub" });
    else if (m[2] !== undefined) parts.push({ text: m[2], type: "sup" });
    else if (m[3]) parts.push({ text: m[3], type: "base" });
  }
  if (!parts.some((p) => p.type !== "base")) return symbol;

  const subFs = Math.round(fontSize * 0.72);
  const subDy = Math.round(fontSize * 0.3);
  const supDy = -Math.round(fontSize * 0.35);
  let pendingReset = 0;

  return parts.map((p, i) => {
    if (p.type === "sub") {
      pendingReset += subDy;
      return <tspan key={i} dy={subDy} fontSize={subFs}>{p.text}</tspan>;
    }
    if (p.type === "sup") {
      pendingReset += supDy;
      return <tspan key={i} dy={supDy} fontSize={subFs}>{p.text}</tspan>;
    }
    const dy = pendingReset !== 0 ? -pendingReset : undefined;
    pendingReset = 0;
    return <tspan key={i} dy={dy}>{p.text}</tspan>;
  });
}

function markerIdFromColor(color) {
  switch (color) {
    case "#ff6b6b":
      return "dcl-arrow-red";
    case "#4cc9f0":
      return "dcl-arrow-blue";
    case "#f4a261":
      return "dcl-arrow-orange";
    case "#c77dff":
      return "dcl-arrow-purple";
    case "#00d084":
      return "dcl-arrow-green";
    case "#00bbf9":
      return "dcl-arrow-cyan";
    case "#ffd166":
      return "dcl-arrow-yellow";
    case "#b8c0ff":
      return "dcl-arrow-indigo";
    default:
      return "dcl-arrow-default";
  }
}

function MarkerDefs() {
  const colors = [
    { id: "dcl-arrow-red", color: "#ff6b6b" },
    { id: "dcl-arrow-blue", color: "#4cc9f0" },
    { id: "dcl-arrow-orange", color: "#f4a261" },
    { id: "dcl-arrow-purple", color: "#c77dff" },
    { id: "dcl-arrow-green", color: "#00d084" },
    { id: "dcl-arrow-cyan", color: "#00bbf9" },
    { id: "dcl-arrow-yellow", color: "#ffd166" },
    { id: "dcl-arrow-indigo", color: "#b8c0ff" },
    { id: "dcl-arrow-default", color: "#e2e8f0" },
  ];

  return (
    <defs>
      {colors.map((item) => (
        <marker
          key={item.id}
          id={item.id}
          viewBox="0 0 10 10"
          refX="8.5"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={item.color} />
        </marker>
      ))}
    </defs>
  );
}

function Arrow({
  vector,
  onMouseEnter = null,
  onMouseLeave = null,
  onMouseMove = null,
  onClick = null,
  isHighlighted = false,
  isSelected = false,
}) {
  const dashed =
    vector.type === "acceleration" ||
    vector.type === "velocity" ||
    vector.derived === true;

  const baseThickness = vector.vectorThickness || 2.5;
  const strokeWidth = isHighlighted ? Math.max(baseThickness + 1.5, 4) : baseThickness;
  const glowOpacity = isHighlighted || isSelected ? 1 : 0.9;

  return (
    <g
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onClick={onClick}
      style={{ cursor: "pointer", transition: "all 0.2s ease" }}
    >
      {/* Efecto de resplandor para vectores destacados */}
      {(isHighlighted || isSelected) && (
        <line
          x1={vector.anchorPoint.x}
          y1={vector.anchorPoint.y}
          x2={vector.endPoint.x}
          y2={vector.endPoint.y}
          stroke={vector.color || "#e2e8f0"}
          strokeWidth={strokeWidth + 6}
          strokeDasharray={dashed ? "6 5" : undefined}
          strokeLinecap="round"
          opacity="0.3"
          filter="url(#glow)"
        />
      )}
      {/* Linea principal del vector */}
      <line
        x1={vector.anchorPoint.x}
        y1={vector.anchorPoint.y}
        x2={vector.endPoint.x}
        y2={vector.endPoint.y}
        stroke={vector.color || "#e2e8f0"}
        strokeWidth={strokeWidth}
        strokeDasharray={dashed ? "6 5" : undefined}
        markerEnd={`url(#${markerIdFromColor(vector.color || "#e2e8f0")})`}
        strokeLinecap="round"
        opacity={vector.derived ? 0.78 : glowOpacity}
        filter={isHighlighted ? "url(#dropShadow)" : undefined}
      />
      {/* Etiqueta del vector */}
      <text
        x={vector.labelPoint.x}
        y={vector.labelPoint.y}
        fill={vector.color || "#e2e8f0"}
        fontSize={isHighlighted || isSelected ? "15" : "14"}
        fontWeight={isSelected || isHighlighted ? "700" : "600"}
        dominantBaseline="middle"
        textAnchor="middle"
        opacity={vector.derived ? 0.9 : 1}
        filter={isHighlighted || isSelected ? "url(#glow)" : undefined}
        style={{ 
          transition: "all 180ms ease",
          textShadow: isHighlighted ? "0 0 8px rgba(0,0,0,0.5)" : "none"
        }}
      >
        {renderSvgSymbol(vector.symbol || vector.localizedLabel, isHighlighted || isSelected ? 15 : 14)}
      </text>
    </g>
  );
}

function renderBodyName(bodyGeom, bodyProfile, lang) {
  const name = localize(
    bodyProfile?.label || bodyProfile?.name,
    lang,
    bodyProfile?.id || ""
  );
  if (!name) return null;

  const extraYOffset = bodyProfile?.labelYOffset ?? bodyProfile?.style?.labelYOffset ?? 0;

  if (typeof bodyGeom?.x === "number") {
    return {
      x: bodyGeom.x + bodyGeom.w / 2,
      y: bodyGeom.y - 58 - extraYOffset,
      text: name,
    };
  }

  if (typeof bodyGeom?.cx === "number") {
    return {
      x: bodyGeom.cx,
      y: bodyGeom.cy - (bodyGeom.r ?? 10) - 58 - extraYOffset,
      text: name,
    };
  }

  return null;
}

function RenderRectBody({ bodyGeom }) {
  return (
    <g filter="url(#dropShadow)">
      {/* Sombra interna */}
      <rect
        x={bodyGeom.x}
        y={bodyGeom.y}
        width={bodyGeom.w}
        height={bodyGeom.h}
        rx="12"
        ry="12"
        fill="#1e293b"
        opacity="0.6"
      />
      {/* Cuerpo principal */}
      <rect
        x={bodyGeom.x}
        y={bodyGeom.y}
        width={bodyGeom.w}
        height={bodyGeom.h}
        rx="12"
        ry="12"
        fill="none"
        stroke="#60a5fa"
        strokeWidth="3"
        filter="url(#glow)"
      />
      {/* Highlight superior */}
      <rect
        x={bodyGeom.x + 4}
        y={bodyGeom.y + 3}
        width={bodyGeom.w - 8}
        height="6"
        rx="4"
        fill="#93c5fd"
        opacity="0.3"
      />
    </g>
  );
}

function RenderCircleBody({ bodyGeom, fill = "none" }) {
  return (
    <g filter="url(#dropShadow)">
      {/* Sombra interna */}
      <circle
        cx={bodyGeom.cx}
        cy={bodyGeom.cy}
        r={bodyGeom.r}
        fill="#1e293b"
        opacity="0.6"
      />
      {/* Cuerpo principal */}
      <circle
        cx={bodyGeom.cx}
        cy={bodyGeom.cy}
        r={bodyGeom.r}
        fill={fill}
        stroke="#60a5fa"
        strokeWidth="3"
        filter="url(#glow)"
      />
      {/* Highlight superior */}
      <ellipse
        cx={bodyGeom.cx}
        cy={bodyGeom.cy - bodyGeom.r * 0.4}
        rx={bodyGeom.r * 0.6}
        ry={bodyGeom.r * 0.25}
        fill="#93c5fd"
        opacity="0.3"
      />
    </g>
  );
}

function renderSceneGeometry(sceneModel) {
  const { profile, geometry, bodyRuntimeMap } = sceneModel;

  if (profile.scene === "block_on_table") {
    const body = profile.bodies[0];
    const block = bodyRuntimeMap[body.id]?.geometry || geometry.bodies.main;
    return (
      <>
        {/* Superficie de mesa con estilo moderno */}
        <line
          x1="80"
          y1={geometry.guides.groundY}
          x2={geometry.sceneBounds.width - 60}
          y2={geometry.guides.groundY}
          stroke="url(#planeGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#dropShadow)"
          opacity="0.9"
        />
        {/* Borde superior */}
        <line
          x1="80"
          y1={geometry.guides.groundY - 1}
          x2={geometry.sceneBounds.width - 60}
          y2={geometry.guides.groundY - 1}
          stroke="#64748b"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <RenderRectBody bodyGeom={block} />
      </>
    );
  }

  if (profile.scene === "block_on_incline") {
    const { inclineStart, inclineEnd } = geometry.guides;
    const body = profile.bodies[0];
    const block = bodyRuntimeMap[body.id]?.geometry || geometry.bodies.main;

    return (
      <>
        {/* Plano inclinado con estilo moderno */}
        <line
          x1={inclineStart.x - 20}
          y1={inclineStart.y}
          x2={inclineEnd.x + 20}
          y2={inclineEnd.y}
          stroke="url(#planeGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#dropShadow)"
          opacity="0.9"
        />
        
        {/* Linea de borde superior del plano */}
        <line
          x1={inclineStart.x - 20}
          y1={inclineStart.y - 1}
          x2={inclineEnd.x + 20}
          y2={inclineEnd.y - 1}
          stroke="#64748b"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        
        {/* Cuerpo con estilo moderno */}
        <g transform={`translate(${block.cx} ${block.cy}) rotate(${block.angleDeg})`} filter="url(#dropShadow)">
          {/* Sombra interna del cuerpo */}
          <rect
            x={-block.w / 2}
            y={-block.h / 2}
            width={block.w}
            height={block.h}
            rx="12"
            ry="12"
            fill="#1e293b"
            opacity="0.6"
          />
          {/* Cuerpo principal */}
          <rect
            x={-block.w / 2}
            y={-block.h / 2}
            width={block.w}
            height={block.h}
            rx="12"
            ry="12"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="3"
            filter="url(#glow)"
          />
          {/* Highlight superior */}
          <rect
            x={-block.w / 2 + 4}
            y={-block.h / 2 + 3}
            width={block.w - 8}
            height="6"
            rx="4"
            fill="#93c5fd"
            opacity="0.3"
          />
        </g>
      </>
    );
  }

  if (profile.scene === "hanging_mass") {
    const anchor = geometry.guides.anchor;
    const body = profile.bodies[0];
    const mass = bodyRuntimeMap[body.id]?.geometry || geometry.bodies.main;

    return (
      <>
        {/* Cuerda con gradiente */}
        <line
          x1={anchor.x}
          y1={anchor.y}
          x2={mass.cx}
          y2={mass.cy - mass.r}
          stroke="#94a3b8"
          strokeWidth="3"
          filter="url(#dropShadow)"
          opacity="0.8"
        />
        {/* Punto de anclaje con glow */}
        <circle 
          cx={anchor.x} 
          cy={anchor.y} 
          r="7" 
          fill="#60a5fa"
          filter="url(#glow)"
        />
        <circle 
          cx={anchor.x} 
          cy={anchor.y} 
          r="4" 
          fill="#93c5fd"
        />
        <RenderCircleBody bodyGeom={mass} />
      </>
    );
  }

  if (profile.scene === "particle_free") {
    const body = profile.bodies[0];
    const point = bodyRuntimeMap[body.id]?.geometry || geometry.bodies.main;

    return (
      <>
        {/* Halo exterior con gradiente */}
        <circle
          cx={point.cx}
          cy={point.cy}
          r={point.r + 4}
          fill="#60a5fa"
          opacity="0.2"
          filter="url(#glow)"
        />
        {/* Particula principal con borde */}
        <circle 
          cx={point.cx} 
          cy={point.cy} 
          r={point.r} 
          fill="#1e293b"
          stroke="#60a5fa"
          strokeWidth="2.5"
          filter="url(#dropShadow)"
        />
        {/* Highlight central */}
        <circle 
          cx={point.cx} 
          cy={point.cy} 
          r={point.r * 0.4} 
          fill="#93c5fd"
          opacity="0.6"
        />
      </>
    );
  }

  if (profile.scene === "two_bodies_horizontal") {
    const leftProfile =
      profile.bodies.find((b) => b.role === "main") || profile.bodies[0];
    const rightProfile =
      profile.bodies.find((b) => b.role === "secondary") || profile.bodies[1];

    const left = bodyRuntimeMap[leftProfile.id]?.geometry || geometry.bodies.left;
    const right =
      bodyRuntimeMap[rightProfile.id]?.geometry || geometry.bodies.right;
    const { tableY } = geometry.guides;

    return (
      <>
        {/* Superficie horizontal */}
        <line
          x1="60"
          y1={tableY}
          x2={geometry.sceneBounds.width - 60}
          y2={tableY}
          stroke="url(#planeGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#dropShadow)"
          opacity="0.9"
        />
        {/* Borde superior superficie */}
        <line
          x1="60"
          y1={tableY - 1}
          x2={geometry.sceneBounds.width - 60}
          y2={tableY - 1}
          stroke="#64748b"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <RenderRectBody bodyGeom={left} />
        <RenderRectBody bodyGeom={right} />
      </>
    );
  }

  if (profile.scene === "two_masses_rope") {
    const leftProfile =
      profile.bodies.find((b) => b.role === "main") || profile.bodies[0];
    const rightProfile =
      profile.bodies.find((b) => b.role === "secondary") || profile.bodies[1];

    const left = bodyRuntimeMap[leftProfile.id]?.geometry || geometry.bodies.left;
    const right =
      bodyRuntimeMap[rightProfile.id]?.geometry || geometry.bodies.right;
    const { tableY, edgeX } = geometry.guides;

    return (
      <>
        {/* Superficie de mesa con gradiente */}
        <line
          x1="90"
          y1={tableY}
          x2={edgeX}
          y2={tableY}
          stroke="url(#planeGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#dropShadow)"
          opacity="0.9"
        />
        {/* Borde superior mesa */}
        <line
          x1="90"
          y1={tableY - 1}
          x2={edgeX}
          y2={tableY - 1}
          stroke="#64748b"
          strokeWidth="1.5"
          opacity="0.6"
        />
        {/* Borde vertical de mesa */}
        <line
          x1={edgeX}
          y1={tableY}
          x2={edgeX}
          y2={tableY + 90}
          stroke="url(#planeGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          filter="url(#dropShadow)"
          opacity="0.8"
        />
        {/* Cuerda horizontal con sombra */}
        <line
          x1={left.x + left.w}
          y1={left.y + left.h / 2}
          x2={edgeX}
          y2={left.y + left.h / 2}
          stroke="#94a3b8"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#dropShadow)"
          opacity="0.8"
        />
        {/* Cuerda vertical con sombra */}
        <line
          x1={edgeX}
          y1={left.y + left.h / 2}
          x2={edgeX}
          y2={right.cy - right.r}
          stroke="#94a3b8"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#dropShadow)"
          opacity="0.8"
        />
        {/* Punto de transicion de la cuerda */}
        <circle
          cx={edgeX}
          cy={left.y + left.h / 2}
          r="5"
          fill="#60a5fa"
          filter="url(#glow)"
        />
        <circle
          cx={edgeX}
          cy={left.y + left.h / 2}
          r="2.5"
          fill="#93c5fd"
        />
        <RenderRectBody bodyGeom={left} />
        <RenderCircleBody bodyGeom={right} />
      </>
    );
  }

  if (profile.scene === "pulley_simple") {
    const blockProfile =
      profile.bodies.find((b) => b.role === "main") || profile.bodies[0];
    const massProfile =
      profile.bodies.find((b) => b.role === "secondary") || profile.bodies[1];
    const pulleyProfile =
      profile.bodies.find((b) => b.role === "mechanism") || profile.bodies[2];

    const block =
      bodyRuntimeMap[blockProfile.id]?.geometry || geometry.bodies.left;
    const mass = bodyRuntimeMap[massProfile.id]?.geometry || geometry.bodies.right;
    const pulley =
      bodyRuntimeMap[pulleyProfile.id]?.geometry || geometry.bodies.pulley;
    const { tableY, supportY } = geometry.guides;

    return (
      <>
        {/* Superficie de mesa con gradiente */}
        <line
          x1="90"
          y1={tableY}
          x2={pulley.cx}
          y2={tableY}
          stroke="url(#planeGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#dropShadow)"
          opacity="0.9"
        />
        {/* Borde superior mesa */}
        <line
          x1="90"
          y1={tableY - 1}
          x2={pulley.cx}
          y2={tableY - 1}
          stroke="#64748b"
          strokeWidth="1.5"
          opacity="0.6"
        />
        {/* Soporte superior con gradiente */}
        <line
          x1={pulley.cx - 70}
          y1={supportY}
          x2={pulley.cx + 70}
          y2={supportY}
          stroke="url(#planeGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          filter="url(#dropShadow)"
          opacity="0.9"
        />
        {/* Borde superior soporte */}
        <line
          x1={pulley.cx - 70}
          y1={supportY - 1}
          x2={pulley.cx + 70}
          y2={supportY - 1}
          stroke="#64748b"
          strokeWidth="1.5"
          opacity="0.6"
        />
        {/* Cuerda de soporte a polea */}
        <line
          x1={pulley.cx}
          y1={supportY}
          x2={pulley.cx}
          y2={pulley.cy - pulley.r}
          stroke="#94a3b8"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#dropShadow)"
          opacity="0.8"
        />
        {/* Cuerda del bloque a polea */}
        <line
          x1={block.x + block.w}
          y1={block.y + block.h / 2}
          x2={pulley.cx - pulley.r}
          y2={block.y + block.h / 2}
          stroke="#94a3b8"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#dropShadow)"
          opacity="0.8"
        />
        {/* Cuerda que pasa por la polea */}
        <path
          d={`M ${pulley.cx - pulley.r} ${block.y + block.h / 2}
              A ${pulley.r} ${pulley.r} 0 0 0 ${pulley.cx + pulley.r} ${pulley.cy}
              L ${mass.cx} ${mass.cy - mass.r}`}
          fill="none"
          stroke="#94a3b8"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#dropShadow)"
          opacity="0.8"
        />
        <RenderRectBody bodyGeom={block} />
        <RenderCircleBody bodyGeom={mass} />
        <RenderCircleBody bodyGeom={pulley} />
        {/* Centro de la polea con glow */}
        <circle cx={pulley.cx} cy={pulley.cy} r="6" fill="#60a5fa" filter="url(#glow)" />
        <circle cx={pulley.cx} cy={pulley.cy} r="3" fill="#93c5fd" />
      </>
    );
  }

  return null;
}

function getReadingFocus(profile, lang) {
  return localize(profile.interpretation?.reading_focus, lang, "");
}

function getTheoryLinkLabel(profile, lang) {
  return localize(profile.theory_link?.label, lang, "");
}

function formatDirection(direction) {
  if (!direction) return "-";
  const x = Number(direction.x ?? 0).toFixed(2);
  const y = Number(direction.y ?? 0).toFixed(2);
  return `(${x}, ${y})`;
}

function stripMathDelimiters(value) {
  if (!value) return "";
  const text = String(value).trim();
  if (text.startsWith("\\(") && text.endsWith("\\)")) return text.slice(2, -2).trim();
  if (text.startsWith("$") && text.endsWith("$")) return text.slice(1, -1).trim();
  return text;
}

function normalizeTargetToken(value) {
  if (!value) return "";
  let s = stripMathDelimiters(value);
  s = s.replace(/\\mathrm\{([^}]+)\}/g, "$1");
  s = s.replace(/\\text\{([^}]+)\}/g, "$1");
  s = s.replace(/[{}]/g, "");
  s = s.replace(/^\\+/, "");
  s = s.replace(/\\[a-zA-Z]+/g, "");
  s = s.replace(/\s+/g, "");
  s = s.replace(/[^A-Za-z0-9_]/g, "");
  return s;
}

function buildTargetCandidates(vector) {
  const out = [];
  const push = (v) => {
    if (!v) return;
    if (!out.includes(v)) out.push(v);
  };

  push(vector?.magnitudeId);
  push(normalizeTargetToken(vector?.magnitudeId));
  push(vector?.symbol);
  push(normalizeTargetToken(vector?.symbol));
  push(vector?.id);
  push(normalizeTargetToken(vector?.id));

  const typeMap = {
    friction: ["f_r", "f_k", "f_s", "f"],
    normal: ["N", "n"],
    weight: ["P", "W", "mg"],
    applied_force: ["F", "F_ext", "F_ap"],
    tension: ["T", "T_1", "T_2"],
    acceleration: ["a", "a_x", "a_y"],
    velocity: ["v", "v_x", "v_y"],
    resultant: ["F_neta", "F_net", "R"],
  };
  const mapped = typeMap[vector?.type] || [];
  mapped.forEach(push);

  return out.filter(Boolean);
}

function resolveInterpretationTarget(interpretationDoc, vector) {
  const targets = interpretationDoc?.targets;
  if (!targets || typeof targets !== "object") return null;
  const keys = Object.keys(targets);
  if (!keys.length) return null;
  const keySet = new Set(keys);

  const candidates = buildTargetCandidates(vector);
  for (const c of candidates) {
    if (keySet.has(c)) return c;
  }

  // Fallback tolerant: if candidate is "f", match first target starting with "f_"
  for (const c of candidates) {
    const lc = String(c).toLowerCase();
    if (!lc) continue;
    const prefixed = keys.filter((k) => k.toLowerCase().startsWith(`${lc}_`));
    if (prefixed.length === 1) return prefixed[0];
  }

  return null;
}

function renderReferenceAxes(sceneModel, lang) {
  const profile = sceneModel?.profile;
  const geometry = sceneModel?.geometry;
  if (!profile || !geometry) return null;

  const showAxes =
    profile.options?.showAxes === true || profile.environment?.showAxes === true;

  if (!showAxes) return null;

  if (profile.scene === "block_on_incline") {
    const body = profile.bodies?.[0];
    const geom = sceneModel.bodyRuntimeMap?.[body?.id]?.geometry;
    const cx = geom?.cx ?? geometry.sceneBounds.width * 0.2;
    const cy = geom?.cy ?? geometry.sceneBounds.height * 0.7;
    
    // Obtener el angulo del plano desde la geometria
    const thetaDeg = geometry.guides?.inclineAngleDeg ?? 30;
    const theta = (thetaDeg * Math.PI) / 180;
    
    // Calcular vector tangente (paralelo al plano)
    const axisLength = 70;
    const tx = Math.cos(theta) * axisLength;
    const ty = -Math.sin(theta) * axisLength; // Negativo porque Y crece hacia abajo en SVG
    
    // Calcular vector normal (perpendicular al plano, rotacion 90 grados horaria del tangente)
    const nx = -Math.sin(theta) * axisLength;
    const ny = -Math.cos(theta) * axisLength;
    
    return (
      <g opacity="0.85" filter="url(#dropShadow)">
        {/* Eje tangencial (paralelo al plano) */}
        <line 
          x1={cx} y1={cy} 
          x2={cx + tx} y2={cy + ty} 
          stroke="#f59e0b" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
        />
        <circle cx={cx + tx} cy={cy + ty} r="3" fill="#f59e0b" />
        
        {/* Eje normal (perpendicular al plano) */}
        <line 
          x1={cx} y1={cy} 
          x2={cx + nx} y2={cy + ny} 
          stroke="#8b5cf6" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
        />
        <circle cx={cx + nx} cy={cy + ny} r="3" fill="#8b5cf6" />
        
        {/* Etiquetas */}
        <text 
          x={cx + tx + 8} 
          y={cy + ty + 4} 
          fill="#fbbf24" 
          fontSize="13" 
          fontWeight="600" 
          filter="url(#glow)"
        >
          {"t"}
        </text>
        <text 
          x={cx + nx + 8} 
          y={cy + ny + 4} 
          fill="#a78bfa" 
          fontSize="13" 
          fontWeight="600" 
          filter="url(#glow)"
        >
          {"n"}
        </text>
      </g>
    );
  }

  const ox = 70;
  const oy = geometry.sceneBounds.height - 140;
  return (
    <g opacity="0.85" filter="url(#dropShadow)">
      {/* Eje X */}
      <line x1={ox} y1={oy} x2={ox + 64} y2={oy} stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx={ox + 64} cy={oy} r="3" fill="#f59e0b" />
      {/* Eje Y */}
      <line x1={ox} y1={oy} x2={ox} y2={oy - 64} stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx={ox} cy={oy - 64} r="3" fill="#8b5cf6" />
      {/* Etiquetas */}
      <text x={ox + 72} y={oy + 4} fill="#fbbf24" fontSize="13" fontWeight="600" filter="url(#glow)">
        x
      </text>
      <text x={ox - 8} y={oy - 68} fill="#a78bfa" fontSize="13" fontWeight="600" filter="url(#glow)">
        y
      </text>
    </g>
  );
}

function SelectedVectorCard({ vector, lang }) {
  if (!vector) return null;

  return (
    <div className="dcl-card dcl-card-reading dcl-mt-3">
      <div className="dcl-font-semibold dcl-title-sky dcl-mb-2">
        {localize(UI_TEXT.selectedVector, lang)}
      </div>
      <div className="dcl-grid-2">
        <div className="dcl-card" style={{ border: '2px solid #2563EB', padding: '8px' }}>
          <div className="dcl-text-xs dcl-font-semibold dcl-title-blue dcl-mb-1">{localize(UI_TEXT.tooltipVector, lang)}</div>
          <div className="dcl-text-sm dcl-opacity-80" style={{ opacity: 0.9 }}>
            <Latex>{vector.symbol || vector.localizedLabel}</Latex>
          </div>
        </div>
        <div className="dcl-card" style={{ border: '2px solid #9333EA', padding: '8px' }}>
          <div className="dcl-text-xs dcl-font-semibold dcl-title-purple dcl-mb-1">{localize(UI_TEXT.vectorType, lang)}</div>
          <div className="dcl-text-sm dcl-opacity-80" style={{ opacity: 0.9 }}>
            <Latex>{vector.localizedLabel}</Latex>
          </div>
        </div>
        <div className="dcl-card" style={{ border: '2px solid #475569', padding: '8px' }}>
          <div className="dcl-text-xs dcl-font-semibold dcl-title-slate dcl-mb-1">{localize(UI_TEXT.tooltipBody, lang)}</div>
          <div className="dcl-text-sm dcl-opacity-80" style={{ opacity: 0.9 }}>
            <Latex>{vector.bodyLabel || vector.bodyId || "—"}</Latex>
          </div>
        </div>
        <div className="dcl-card" style={{ border: '2px solid #0891B2', padding: '8px' }}>
          <div className="dcl-text-xs dcl-font-semibold dcl-title-cyan dcl-mb-1">{localize(UI_TEXT.tooltipRole, lang)}</div>
          <div className="dcl-text-sm dcl-opacity-80" style={{ opacity: 0.9 }}>
            <Latex>{vector.roleText || "-"}</Latex>
          </div>
        </div>
        <div className="dcl-card" style={{ border: '2px solid #16A34A', padding: '8px' }}>
          <div className="dcl-text-xs dcl-font-semibold dcl-title-green dcl-mb-1">{localize(UI_TEXT.tooltipMagnitude, lang)}</div>
          <div className="dcl-text-sm dcl-title-green">
            {typeof vector.scalarValue === "number"
              ? `${Number(vector.scalarValue).toFixed(2)}${
                  vector.displayUnit ? ` ${vector.displayUnit}` : ""
                }`
              : "-"}
          </div>
        </div>
        <div className="dcl-card" style={{ border: '2px solid #FF6600', padding: '8px' }}>
          <div className="dcl-text-xs dcl-font-semibold dcl-title-orange dcl-mb-1">{localize(UI_TEXT.vectorDirection, lang)}</div>
          <div className="dcl-text-sm dcl-opacity-80" style={{ opacity: 0.9 }}>
            {formatDirection(vector.direction)}
          </div>
        </div>
      </div>
    </div>
  );
}

function VectorInterpretationCard({ vector, interpretationDoc, lang }) {
  const resolution = useMemo(() => {
    if (!vector || !interpretationDoc) return null;
    const target = resolveInterpretationTarget(interpretationDoc, vector);
    if (!target) return null;

    const interpretation = getFullInterpretation({
      interpretation: interpretationDoc,
      target,
      result: {
        value: vector.scalarValue || 0,
        latex: vector.symbol || target,
      },
      inputs: {},
      formula: null,
      graphState: {},
      lang,
      extraContext: {
        selectedVector: {
          id: vector.id,
          type: vector.type,
          semanticRole: vector.semanticRole,
        },
      },
    });
    return { interpretation, target };
  }, [vector, interpretationDoc, lang]);

  if (!resolution?.interpretation?.ok) return null;
  const interpretation = resolution.interpretation;
  const resolvedTarget = resolution.target;

  return (
    <div className="dcl-card dcl-card-interpretation dcl-mt-3">
      <div className="dcl-font-semibold dcl-title-emerald dcl-mb-2">
        {lang === "es" ? "Interpretación" : "Interpretation"}: <Latex>{vector.symbol || resolvedTarget}</Latex>
      </div>

      {Object.entries(interpretation.sections).map(([sectionKey, items]) => {
        if (!items?.length) return null;

        return (
          <div key={sectionKey} className="dcl-card dcl-mt-2" style={{ padding: '12px' }}>
            <div className="dcl-text-sm dcl-font-semibold dcl-mb-1" style={{ color: '#A5F3FC' }}>
              {interpretation.sectionTitles?.[sectionKey] || sectionKey}
            </div>
            <div style={{ display: "grid", gap: 6 }}>
              {items.map((msg, idx) => (
                <div
                  key={msg.id || idx}
                  className="dcl-text-sm"
                  style={{
                    padding: '8px',
                    borderRadius: '4px',
                    background: msg.status === 'error' ? 'rgba(239, 68, 68, 0.1)' : 
                               msg.status === 'warning' ? 'rgba(251, 191, 36, 0.1)' : 
                               'rgba(134, 239, 172, 0.1)',
                    borderLeft: `3px solid ${msg.status === 'error' ? '#EF4444' : 
                                            msg.status === 'warning' ? '#FBB028' : '#4ADE80'}`,
                    opacity: 0.9,
                  }}
                >
                  <Latex>{msg.text}</Latex>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CompactLegend({ info, lang, displayMode = "student" }) {
  if (!info) return null;

  const fallbackLegend = {
    bodies: [],
    visibleForces: Array.isArray(info.activeForceDetails)
      ? info.activeForceDetails
      : Array.isArray(info.activeForces)
        ? info.activeForces
        : [],
    hiddenForces: Array.isArray(info.inactiveForceDetails)
      ? info.inactiveForceDetails
      : Array.isArray(info.inactiveForces)
        ? info.inactiveForces
        : [],
    equilibriumSummary: Array.isArray(info.equilibriumHints) ? info.equilibriumHints : [],
    graphWarnings: Array.isArray(info.graphWarnings) ? info.graphWarnings : [],
  };

  const legend = info.compactLegend
    ? {
        ...fallbackLegend,
        ...info.compactLegend,
        visibleForces: Array.isArray(info.compactLegend.visibleForces)
          ? info.compactLegend.visibleForces
          : fallbackLegend.visibleForces,
        hiddenForces: Array.isArray(info.compactLegend.hiddenForces)
          ? info.compactLegend.hiddenForces
          : fallbackLegend.hiddenForces,
        equilibriumSummary: Array.isArray(info.compactLegend.equilibriumSummary)
          ? info.compactLegend.equilibriumSummary
          : fallbackLegend.equilibriumSummary,
        graphWarnings: Array.isArray(info.compactLegend.graphWarnings)
          ? info.compactLegend.graphWarnings
          : fallbackLegend.graphWarnings,
      }
    : fallbackLegend;

  const hasAnyContent =
    (legend.bodies?.length ?? 0) > 0 ||
    (legend.visibleForces?.length ?? 0) > 0 ||
    (legend.hiddenForces?.length ?? 0) > 0 ||
    (legend.equilibriumSummary?.length ?? 0) > 0 ||
    (legend.graphWarnings?.length ?? 0) > 0;

  if (!hasAnyContent) return null;

  const renderForceEntry = (force, idx) => {
    if (typeof force === "string") {
      return (
        <div key={idx} className="dcl-text-xs dcl-opacity-80" style={{ lineHeight: 1.5 }}>
          <Latex>{force}</Latex>
        </div>
      );
    }

    const magnitudeText =
      typeof force?.scalarValue === "number"
        ? `${force.scalarValue.toFixed(2)}${force.displayUnit ? ` ${force.displayUnit}` : ""}`
        : null;

    return (
      <div key={force?.id || idx} className="dcl-text-xs dcl-opacity-80" style={{ lineHeight: 1.5 }}>
        <div style={{ fontWeight: 600, color: "#E2E8F0" }}>
          {force?.symbol ? <Latex>{force.symbol}</Latex> : null}
          {force?.symbol ? " · " : ""}
          <span>{force?.label || "—"}</span>
        </div>
        {force?.roleText ? (
          <div style={{ color: "#94A3B8" }}>
            <Latex>{force.roleText}</Latex>
          </div>
        ) : null}
        {force?.bodyLabel || magnitudeText ? (
          <div style={{ color: "#64748B" }}>
            {force?.bodyLabel ? `${localize(UI_TEXT.tooltipBody, lang)}: ${force.bodyLabel}` : ""}
            {force?.bodyLabel && magnitudeText ? " · " : ""}
            {magnitudeText ? `${localize(UI_TEXT.tooltipMagnitude, lang)}: ${magnitudeText}` : ""}
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <div className="dcl-card dcl-card-inactive dcl-mt-3">
      <div className="dcl-font-semibold dcl-title-slate" style={{ marginBottom: '12px', color: '#CBD5E1' }}>
        {localize(UI_TEXT.compactLegend, lang)}
      </div>

      <div style={{ display: 'grid', gap: '8px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <div className="dcl-card" style={{ border: '2px solid #2563EB', padding: '8px' }}>
          <div className="dcl-text-xs dcl-font-semibold dcl-title-blue dcl-mb-1">{localize(UI_TEXT.sceneBody, lang)}</div>
          <div className="dcl-text-sm dcl-opacity-80" style={{ opacity: 0.9 }}>
            <Latex>{legend.bodies?.map((b) => b.label).join(", ") || "-"}</Latex>
          </div>
        </div>

        <div className="dcl-card" style={{ border: '2px solid #16A34A', padding: '8px' }}>
          <div className="dcl-text-xs dcl-font-semibold dcl-title-green dcl-mb-1">
            {localize(UI_TEXT.visibleForcesCount, lang)}
          </div>
          <div className="dcl-title-green" style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>
            {legend.visibleForces?.length ?? 0}
          </div>
          {legend.visibleForces?.length > 0 ? (
            <div style={{ display: "grid", gap: "6px" }}>
              {legend.visibleForces.map((force, idx) => renderForceEntry(force, idx))}
            </div>
          ) : null}
        </div>

        <div className="dcl-card" style={{ border: '1px solid rgba(71, 85, 105, 0.2)', background: 'rgba(71, 85, 105, 0.05)', padding: '12px' }}>
          <div className="dcl-text-xs dcl-font-semibold dcl-title-slate" style={{ marginBottom: '8px' }}>
            {localize(UI_TEXT.hiddenForcesCount, lang)}
          </div>
          <div className="dcl-title-slate" style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px', color: '#CBD5E1' }}>
            {legend.hiddenForces?.length ?? 0}
          </div>
          {legend.hiddenForces?.length > 0 ? (
            <div style={{ display: "grid", gap: "6px" }}>
              {legend.hiddenForces.map((force, idx) => renderForceEntry(force, idx))}
            </div>
          ) : null}
        </div>

        <div className="dcl-card" style={{ border: '2px solid #9333EA', padding: '8px' }}>
          <div className="dcl-text-xs dcl-font-semibold dcl-title-purple dcl-mb-1">
            {displayMode === "teacher"
              ? localize(UI_TEXT.displayModeTeacher, lang)
              : localize(UI_TEXT.displayModeStudent, lang)}
          </div>
          <div className="dcl-text-sm dcl-title-purple" style={{ textTransform: 'uppercase' }}>{displayMode}</div>
        </div>
      </div>

      {legend.equilibriumSummary?.length > 0 ? (
        <div className="dcl-card dcl-card-equilibrium dcl-mt-2" style={{ padding: '8px' }}>
          <div className="dcl-text-sm dcl-font-semibold dcl-title-teal dcl-mb-1">{lang === "es" ? "Equilibrio" : "Equilibrium"}</div>
          <div className="dcl-text-xs dcl-opacity-80">
            {legend.equilibriumSummary.map((summary, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && " | "}
                <Latex>{localize(summary, lang, "")}</Latex>
              </React.Fragment>
            ))}
          </div>
        </div>
      ) : null}

      {legend.graphWarnings?.length > 0 ? (
        <div className="dcl-card dcl-card-warning dcl-mt-2" style={{ padding: '8px' }}>
          <div className="dcl-font-semibold dcl-title-amber dcl-mb-1">{localize(UI_TEXT.warnings, lang)}</div>
          <div className="dcl-space-y-1">
            {legend.graphWarnings.map((warning, idx) => (
              <div key={idx} className="dcl-text-xs dcl-opacity-80">
                - <Latex>{localizeWarningMessage(warning, lang)}</Latex>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function TheoryLinkCard({ profile, lang, displayMode = "student", onNavigate = null }) {
  const label = getTheoryLinkLabel(profile, lang);
  if (!label) return null;

  const isTeacher = displayMode === "teacher";

  const handleNavigate = () => {
    if (typeof onNavigate === "function" && profile?.theory_link) {
      onNavigate(profile.theory_link);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleNavigate();
    }
  };

  return (
    <div
      className="dcl-card dcl-card-theory dcl-mt-3"
      role={typeof onNavigate === "function" ? "button" : undefined}
      tabIndex={typeof onNavigate === "function" ? 0 : undefined}
      onClick={handleNavigate}
      onKeyDown={handleKeyDown}
    >
      <div className="dcl-font-semibold dcl-title-violet dcl-mb-1">
        {localize(UI_TEXT.theoryLink, lang)}
      </div>
      <div className="dcl-text-sm dcl-opacity-80">
        <Latex>{label}</Latex>
      </div>
      {isTeacher ? (
        <div className="dcl-title-slate" style={{ marginTop: '8px' }}>
          {localize(UI_TEXT.theoryConcept, lang)}:{" "}
          {profile.theory_link?.sectionId || "-"} {" | "}
          {profile.theory_link?.conceptId || "-"}
        </div>
      ) : null}
    </div>
  );
}

function TypicalErrorsCard({ profile, lang, displayMode = "student" }) {
  const errors = Array.isArray(profile.interpretation?.likely_errors?.[lang])
    ? profile.interpretation.likely_errors[lang]
    : [];
  if (errors.length === 0) return null;

  const shown = errors;

  return (
    <div className="dcl-card dcl-card-errors dcl-mt-3">
      <div className="dcl-font-semibold dcl-title-red dcl-mb-2">{localize(UI_TEXT.typicalErrors, lang)}</div>
      <ul className="dcl-space-y-1">
        {shown.map((item, index) => (
          <li key={`${index}-${item}`} className="dcl-text-sm dcl-opacity-80" style={{ lineHeight: 1.6 }}>
            - <Latex>{item}</Latex>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Tooltip({ data, lang }) {
  if (!data?.vector) return null;

  const vector = data.vector;
  const magnitudeText =
    typeof vector.scalarValue === "number"
      ? Number(vector.scalarValue).toFixed(2)
      : "—";

  const unitText = vector.displayUnit ? ` ${vector.displayUnit}` : "";

  return (
    <div
      style={{
        position: "absolute",
        left: data.x + 12,
        top: data.y + 12,
        pointerEvents: "none",
        zIndex: 20,
        minWidth: 180,
      }}
      className="dcl-tooltip"
    >
      <div className="dcl-font-semibold dcl-title-blue dcl-mb-1">
        <Latex>{vector.symbol || vector.localizedLabel}</Latex>
      </div>
      <div className="dcl-text-xs dcl-opacity-70 dcl-mb-2">
        <Latex>{vector.localizedLabel}</Latex>
      </div>
      <div className="dcl-space-y-1 dcl-text-xs">
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
          <span className="dcl-opacity-70">
            {localize(UI_TEXT.tooltipMagnitude, lang)}:
          </span>
          <span className="dcl-font-semibold dcl-title-cyan">
            {magnitudeText}{unitText}
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
          <span className="dcl-opacity-70">
            {localize(UI_TEXT.tooltipRole, lang)}:
          </span>
          <span className="dcl-opacity-80" style={{ opacity: 0.9 }}>
            <Latex>{vector.roleText || "-"}</Latex>
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
          <span className="dcl-opacity-70">
            {localize(UI_TEXT.tooltipBody, lang)}:
          </span>
          <span className="dcl-opacity-80"><Latex>{vector.bodyLabel || vector.bodyId || "—"}</Latex></span>
        </div>
      </div>
    </div>
  );
}

function StepControls({ steps, currentStep, setCurrentStep, lang }) {
  if (!Array.isArray(steps) || steps.length <= 1) return null;

  return (
    <div style={{ marginBottom: '12px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
      <button
        type="button"
        onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
        disabled={currentStep <= 0}
        className="dcl-btn dcl-btn-blue"
      >
        {"<"} {localize(UI_TEXT.prev, lang)}
      </button>

      <div className="dcl-btn-orange" style={{ padding: '4px 12px', fontSize: '12px', fontWeight: 600 }}>
        {localize(UI_TEXT.stepLabel, lang)} {currentStep + 1} / {steps.length}
      </div>

      <button
        type="button"
        onClick={() => setCurrentStep((s) => Math.min(steps.length - 1, s + 1))}
        disabled={currentStep >= steps.length - 1}
        className="dcl-btn dcl-btn-blue"
      >
        {localize(UI_TEXT.next, lang)} {" >"}
      </button>

      <div className="dcl-label-purple" style={{ marginLeft: '8px' }}>
        <Latex>{steps[currentStep]?.label || ""}</Latex>
      </div>
    </div>
  );
}

function StepExplanation({ sceneModel, lang }) {
  const info = sceneModel?.interpretationBridge;
  if (!info?.currentStepExplanation) return null;

  return (
    <div className="dcl-card dcl-card-step" style={{ marginBottom: '12px', padding: '8px' }}>
      <div className="dcl-text-sm dcl-font-semibold dcl-title-blue dcl-mb-1">
        {localize(UI_TEXT.stepExplanationTitle, lang)}
      </div>
      <div className="dcl-text-xs dcl-opacity-80">
        <Latex>{info.currentStepExplanation}</Latex>
      </div>
    </div>
  );
}

function InlineInterpretation({ sceneModel, lang, profile }) {
  const info = sceneModel?.interpretationBridge;
  if (!info) return null;

  const graphReading = localize(profile?.interpretation?.graph_reading, lang, "");
  const physicalInsight = localize(profile?.interpretation?.physical_insight, lang, "");
  const readingFocus = localize(profile?.interpretation?.reading_focus, lang, "");

  const visibleVectors = info.vectors?.filter(v => v.visible) || [];
  const hiddenVectors = (profile?.vectors || []).filter(
    (v) => v.visible === false || v.style?.visible === false
  );

  // Contextual decomposition messages (only for incline scenes)
  const contextualMessages = [];
  const hasMainWeight = visibleVectors.some(v => !v.derived && v.type === "weight");
  const hasComponents = visibleVectors.some(v => v.derived || v.derivedKind);

  if (hasMainWeight && hasComponents) {
    contextualMessages.push(
      lang === "es"
        ? "El vector peso se ha descompuesto en componentes paralela y perpendicular al plano."
        : "The weight vector has been decomposed into parallel and perpendicular components."
    );
  }

  const parallelComp = visibleVectors.find(
    (v) => v.symbol === "P_{\\parallel}" || v.id === "parallel"
  );
  const perpComp = visibleVectors.find(
    (v) => v.symbol === "P_{\\perp}" || v.symbol === "P_{\\bot}" || v.id === "perp"
  );

  if (parallelComp && Math.abs(parallelComp.scalarValue || 0) > 1e-6) {
    contextualMessages.push(
      lang === "es"
        ? `Componente paralela: ${Math.abs(parallelComp.scalarValue).toFixed(1)} N — causa deslizamiento.`
        : `Parallel component: ${Math.abs(parallelComp.scalarValue).toFixed(1)} N — causes sliding.`
    );
  }

  if (perpComp && Math.abs(perpComp.scalarValue || 0) > 1e-6) {
    contextualMessages.push(
      lang === "es"
        ? `Componente perpendicular: ${Math.abs(perpComp.scalarValue).toFixed(1)} N — comprime contra la superficie.`
        : `Perpendicular component: ${Math.abs(perpComp.scalarValue).toFixed(1)} N — compresses against the surface.`
    );
  }

  return (
    <div className="dcl-card dcl-card-interpretation dcl-mt-3">
      <div className="dcl-font-semibold dcl-mb-2" style={{ color: 'white' }}>
        {localize(UI_TEXT.graphReady, lang)}
      </div>

      {/* Vector legend — visual reference for all vectors in the diagram */}
      {visibleVectors.length > 0 && (
        <div className="dcl-card dcl-card-active dcl-mt-2" style={{ padding: '10px' }}>
          <div className="dcl-text-sm dcl-font-semibold dcl-title-green dcl-mb-1">
            {lang === "es" ? "Leyenda de vectores" : "Vector legend"}
            <span className="dcl-text-xs dcl-opacity-70" style={{ marginLeft: '8px', fontWeight: 400 }}>
              ({visibleVectors.length})
            </span>
          </div>
          <div style={{ display: 'grid', gap: '4px', marginTop: '6px' }}>
            {visibleVectors.map((v, idx) => {
              const mag = typeof v.scalarValue === "number"
                ? `${v.scalarValue.toFixed(2)}${v.displayUnit ? ` ${v.displayUnit}` : ""}`
                : null;
              return (
                <div key={v.id || idx} style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr',
                  gap: '8px',
                  alignItems: 'baseline',
                  padding: '3px 0',
                  borderBottom: idx < visibleVectors.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                  <div style={{ fontWeight: 600, color: '#E2E8F0' }}>
                    <Latex>{v.symbol || "—"}</Latex>
                  </div>
                  <div className="dcl-text-xs" style={{ color: '#94A3B8' }}>
                    {v.label || v.localizedLabel || "—"}
                    {mag ? <span style={{ color: '#64748B', marginLeft: '6px' }}>{mag}</span> : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Hidden vectors (if any) */}
      {hiddenVectors.length > 0 && (
        <div className="dcl-card dcl-card-inactive dcl-mt-2" style={{ padding: '10px' }}>
          <div className="dcl-text-xs dcl-font-semibold dcl-title-slate dcl-mb-1">
            {lang === "es" ? "Vectores ocultos" : "Hidden vectors"}
            <span className="dcl-text-xs dcl-opacity-70" style={{ marginLeft: '6px', fontWeight: 400 }}>
              ({hiddenVectors.length})
            </span>
          </div>
          <div className="dcl-text-xs dcl-opacity-70">
            {hiddenVectors.map((v) => v.symbol || v.id).join(", ")}
          </div>
        </div>
      )}

      {/* Reading Focus */}
      {readingFocus && (
        <div className="dcl-card dcl-card-reading dcl-mt-2">
          <div className="dcl-text-sm dcl-font-semibold dcl-title-sky dcl-mb-1">{lang === "es" ? "Enfoque de lectura" : "Reading focus"}</div>
          <div className="dcl-text-sm dcl-opacity-80">
            <Latex>{readingFocus}</Latex>
          </div>
        </div>
      )}

      {/* Contextual decomposition messages */}
      {contextualMessages.length > 0 && (
        <div className="dcl-card dcl-card-analysis dcl-mt-2">
          <div className="dcl-text-sm dcl-font-semibold dcl-title-emerald dcl-mb-1">{lang === "es" ? "Análisis contextual" : "Contextual analysis"}</div>
          <div className="dcl-space-y-1">
            {contextualMessages.map((msg, idx) => (
              <div key={idx} className="dcl-text-sm dcl-opacity-80">
                <Latex>{msg}</Latex>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Graph Reading */}
      {graphReading && (
        <div className="dcl-card dcl-card-graph dcl-mt-2">
          <div className="dcl-text-sm dcl-font-semibold dcl-title-purple dcl-mb-1">
            {lang === "es" ? "Lectura gráfica" : "Graph reading"}
          </div>
          <div className="dcl-text-sm dcl-opacity-80">
            <Latex>{graphReading}</Latex>
          </div>
        </div>
      )}

      {/* Physical Insight */}
      {physicalInsight && (
        <div className="dcl-card dcl-card-physical dcl-mt-2">
          <div className="dcl-text-sm dcl-font-semibold dcl-title-indigo dcl-mb-1">
            {lang === "es" ? "Significado físico" : "Physical meaning"}
          </div>
          <div className="dcl-text-sm dcl-opacity-80">
            <Latex>{physicalInsight}</Latex>
          </div>
        </div>
      )}

      {/* Equilibrium hints */}
      {info.equilibriumHints?.length > 0 && (
        <div className="dcl-card dcl-card-equilibrium dcl-mt-2" style={{ padding: '8px' }}>
          <div className="dcl-text-sm dcl-font-semibold dcl-title-teal dcl-mb-1">{lang === "es" ? "Equilibrio" : "Equilibrium"}</div>
          <div className="dcl-text-xs dcl-opacity-80">
            {info.equilibriumHints.map((hint, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && " | "}
                <Latex>{localize(hint, lang, "")}</Latex>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Warnings */}
      {info.graphWarnings?.length > 0 && (
        <div className="dcl-card dcl-card-warning dcl-mt-2" style={{ padding: '8px' }}>
          <div className="dcl-font-semibold dcl-title-amber dcl-mb-1">{localize(UI_TEXT.warnings, lang)}</div>
          <div className="dcl-space-y-1">
            {info.graphWarnings.map((warning, idx) => (
              <div key={idx} className="dcl-text-xs dcl-opacity-80">
                - <Latex>{localizeWarningMessage(warning, lang)}</Latex>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function getQuestionLabel(question, lang) {
  const map = {
    force_balance: {
      es: "Equilibrio",
      en: "Equilibrium",
    },
    identify_directions: {
      es: "Direcciones de fuerza",
      en: "Force directions",
    },
    identify_forces: {
      es: "Identificación de fuerzas",
      en: "Force identification",
    },
    compare_forces: {
      es: "Comparación de fuerzas",
      en: "Force comparison",
    },
    decomposition: {
      es: "Descomposición",
      en: "Decomposition",
    },
    resultant: {
      es: "Resultante",
      en: "Resultant",
    },
  };

  return localize(map[question], lang, "");
}

function getSmartHeader(profile, lang) {
  const explicit = localize(profile.meta?.smartHeader, lang, "");
  if (explicit) return explicit;

  const sceneLabel = localize(
    DCL_SCENE_REGISTRY[profile.scene]?.label,
    lang,
    profile.scene
  );

  const questionLabel = getQuestionLabel(profile.question, lang);

  if (questionLabel && sceneLabel) {
    return `${questionLabel} | ${sceneLabel}`;
  }

  return (
    sceneLabel ||
    localize(
      profile.meta?.title,
      lang,
      localize(UI_TEXT.smartHeaderFallback, lang)
    )
  );
}

function getTheoryBridge(profile, lang) {
  const headerBridge = localize(profile.interpretation?.header_bridge, lang, "");
  if (headerBridge) return headerBridge;

  const direct =
    localize(profile.interpretation?.graph_role, lang, "") ||
    localize(profile.interpretation?.graph_reading, lang, "") ||
    localize(profile.interpretation?.calc_reading, lang, "");

  if (direct) return direct;

  return "";
}

function getDclAgentForceRole(vector) {
  if (!vector) return "force";

  if (
    vector.type === "resultant" ||
    vector.semanticRole === "resultant" ||
    vector.derivedKind === "resultant"
  ) {
    return "resultant";
  }

  if (
    vector.derived === true ||
    vector.derivedKind ||
    String(vector.id || "").includes("component") ||
    String(vector.magnitudeId || "").endsWith("_x") ||
    String(vector.magnitudeId || "").endsWith("_y")
  ) {
    return "component";
  }

  return "force";
}

function getDclAgentAxis(vector) {
  const raw = [
    vector?.id,
    vector?.magnitudeId,
    vector?.symbol,
  ]
    .filter(Boolean)
    .join(" ");

  if (raw.includes("_x") || raw.includes("{x}") || raw.includes("x")) {
    return "x";
  }

  if (raw.includes("_y") || raw.includes("{y}") || raw.includes("y")) {
    return "y";
  }

  if (raw.includes("\\parallel") || raw.includes("parallel")) {
    return "parallel";
  }

  if (
    raw.includes("\\perp") ||
    raw.includes("\\bot") ||
    raw.includes("perp")
  ) {
    return "normal";
  }

  return null;
}

function getDclAgentEquationRole(vector) {
  const role = getDclAgentForceRole(vector);
  const axis = getDclAgentAxis(vector);

  if (role === "resultant") {
    return "sum_forces_equals_mass_times_acceleration";
  }

  if (axis === "x") {
    return "sum_fx_equals_mass_times_ax";
  }

  if (axis === "y") {
    return "sum_fy_equals_mass_times_ay";
  }

  if (axis === "parallel") {
    return "sum_f_parallel_equals_mass_times_a_parallel";
  }

  if (axis === "normal") {
    return "sum_f_normal_equals_mass_times_a_normal";
  }

  return "force_term";
}

function getDclAgentDirection(vector) {
  if (!vector) return "depends_on_scene";

  const role = getDclAgentForceRole(vector);
  const axis = getDclAgentAxis(vector);

  if (role === "resultant") {
    return "same_as_acceleration";
  }

  if (axis === "x") return "x_axis";
  if (axis === "y") return "y_axis";
  if (axis === "parallel") return "parallel_to_surface";
  if (axis === "normal") return "normal_to_surface";

  return "depends_on_scene";
}

function normalizeAgentVector(rawVector) {
  if (!rawVector) return null;

  if (Array.isArray(rawVector)) {
    const [x, y] = rawVector;
    return {
      x: Number(x ?? 0),
      y: Number(y ?? 0),
    };
  }

  if (typeof rawVector !== "object") return null;

  const x =
    rawVector.x ??
    rawVector.dx ??
    rawVector.vx ??
    rawVector.Fx ??
    rawVector.fx ??
    0;

  const y =
    rawVector.y ??
    rawVector.dy ??
    rawVector.vy ??
    rawVector.Fy ??
    rawVector.fy ??
    0;

  return {
    ...rawVector,
    x: Number(x),
    y: Number(y),
  };
}

function getDclScreenVector(vector) {
  return normalizeAgentVector(
    vector?.screenVector ||
    vector?.screen_vector ||
    vector?.direction ||
    vector?.directionVector ||
    vector?.direction_vector ||
    vector?.components ||
    null
  );
}

function screenVectorToPhysicsVector(screenVector) {
  if (!screenVector) return null;

  return {
    ...screenVector,
    x: screenVector.x,
    y: -screenVector.y,
  };
}

function getDclPhysicsVector(vector) {
  const explicitPhysicsVector = normalizeAgentVector(
    vector?.physicsVector ||
    vector?.physics_vector ||
    vector?.physicsDirection ||
    vector?.physics_direction ||
    null
  );

  if (explicitPhysicsVector) {
    return explicitPhysicsVector;
  }

  const screenVector = getDclScreenVector(vector);

  return screenVectorToPhysicsVector(screenVector);
}

function buildDclAgentForce(vector, lang) {
  if (!vector) return null;

  const label =
    vector.label ||
    vector.localizedLabel ||
    vector.name ||
    vector.id ||
    "fuerza sin identificar";

  const screenVector = getDclScreenVector(vector);
  const physicsVector = getDclPhysicsVector(vector);

  return {
    id: vector.magnitudeId || vector.id || null,
    vectorId: vector.id || null,

    label,
    symbol: vector.symbol || vector.magnitudeId || vector.id || null,

    bodyId: vector.bodyId || null,
    bodyLabel: vector.bodyLabel || null,

    scalarValue:
      typeof vector.scalarValue === "number" ? vector.scalarValue : null,

    unit: vector.displayUnit || null,

    role: getDclAgentForceRole(vector),
    axis: getDclAgentAxis(vector),
    direction: getDclAgentDirection(vector),

    screenVector,
    physicsVector,

    equationRole: getDclAgentEquationRole(vector),

    semanticRole: vector.semanticRole || null,
    type: vector.type || null,
    visible: vector.visible !== false,

    lang,
  };
}

export default function DclRenderer({
  profile,
  lang: rawLang = "es",
  width = 820,
  height = 420,
  sharedParams = null,
  paramsIn = null,
  __calc = null,
  interpretationDoc = null,
  onGraphStateChange = null,
  onInterpretationContextChange = null,
  onTheoryNavigate = null,
}) {
  const lang = rawLang === "en" ? "en" : "es";
  const wrapperRef = useRef(null);
  const [hoveredVectorId, setHoveredVectorId] = useState(null);
  const [selectedVectorId, setSelectedVectorId] = useState(null);
  const [tooltip, setTooltip] = useState(null);

  const { setActiveGraphContext, clearActiveGraphContext } = useGraphContext();

  const normalizedProfile = useMemo(() => {
    return normalizeDclProfile({
      ...profile,
      lang,
    });
  }, [profile, lang]);

  const calcPayload = useMemo(
    () => getCalcPayload({ sharedParams, paramsIn, __calc }),
    [sharedParams, paramsIn, __calc]
  );

  const availableSteps = useMemo(() => {
    const steps = [{ index: 0, label: lang === "en" ? "Base diagram" : "Diagrama base" }];

    if (normalizedProfile.options?.resolveComponents === true) {
      steps.push({ index: 1, label: lang === "en" ? "Components" : "Componentes" });
    }

    if (normalizedProfile.options?.resolveResultant === true) {
      steps.push({
        index: steps.length,
        label: lang === "en" ? "Resultant" : "Resultante",
      });
    }

    return steps;
  }, [normalizedProfile.options, lang]);

  const initialStep = useMemo(() => {
    const explicit = normalizedProfile.options?.resolutionStep;
    if (typeof explicit === "number") {
      return Math.max(0, Math.min(explicit, availableSteps.length - 1));
    }
    return Math.max(0, availableSteps.length - 1);
  }, [normalizedProfile.options, availableSteps.length]);

  const [currentStep, setCurrentStep] = useState(initialStep);

  useEffect(() => {
    setCurrentStep(initialStep);
  }, [initialStep]);

  const profileForRender = useMemo(() => {
    return {
      ...normalizedProfile,
      options: {
        ...(normalizedProfile.options || {}),
        resolutionStep: currentStep,
      },
    };
  }, [normalizedProfile, currentStep]);

  const sceneModel = useMemo(() => {
    return createSceneModel(profileForRender, {
      width,
      height,
      calc: calcPayload,
      lang,
    });
  }, [profileForRender, width, height, calcPayload, lang]);

  useEffect(() => {
    if (typeof onGraphStateChange === "function") {
      onGraphStateChange(sceneModel);
    }
  }, [sceneModel, onGraphStateChange]);

  useEffect(() => {
    if (typeof onInterpretationContextChange === "function") {
      onInterpretationContextChange({
        graph: sceneModel.interpretationBridge,
        interpretationDoc,
        calc: calcPayload,
        lang,
      });
    }
  }, [
    sceneModel,
    interpretationDoc,
    calcPayload,
    onInterpretationContextChange,
    lang,
  ]);

  const selectedVector =
    sceneModel.vectorsResolved.find((v) => v.id === selectedVectorId) || null;

  // Actualizar contexto de interpretacion cuando cambia el vector seleccionado
  useEffect(() => {
    if (typeof onInterpretationContextChange === "function") {
      const contextUpdate = {
        graph: sceneModel.interpretationBridge,
        interpretationDoc,
        calc: calcPayload,
        lang,
        selectedVector: selectedVector ? {
          id: selectedVector.id,
          magnitudeId: selectedVector.magnitudeId,
          symbol: selectedVector.symbol,
          type: selectedVector.type,
          semanticRole: selectedVector.semanticRole,
        } : null,
      };
      onInterpretationContextChange(contextUpdate);
    }
  }, [
    selectedVectorId,
    selectedVector,
    sceneModel,
    interpretationDoc,
    calcPayload,
    onInterpretationContextChange,
    lang,
  ]);

  const title = localize(
    normalizedProfile.meta?.title,
    lang,
    localize(UI_TEXT.rendererTitleFallback, lang, "DCL")
  );

  const smartHeader = getSmartHeader(normalizedProfile, lang);
  const theoryBridge = getTheoryBridge(normalizedProfile, lang);
  const readingFocus = getReadingFocus(normalizedProfile, lang);


  const sceneLabel = localize(
    DCL_SCENE_REGISTRY[normalizedProfile.scene]?.label,
    lang,
    normalizedProfile.scene
  );

  const activeDclGraphContext = useMemo(() => {
    const vectors = Array.isArray(sceneModel?.vectorsResolved)
      ? sceneModel.vectorsResolved
      : [];

    const visibleVectors = vectors.filter((vector) => vector.visible !== false);

    const selectedForce = selectedVector
      ? buildDclAgentForce(selectedVector, lang)
      : null;

    const firstBody = Array.isArray(normalizedProfile?.bodies)
      ? normalizedProfile.bodies[0]
      : null;

    const bodyBySelectedVector = Array.isArray(normalizedProfile?.bodies)
      ? normalizedProfile.bodies.find(
          (body) => body?.id && body.id === selectedVector?.bodyId
        )
      : null;

    const selectedBody = bodyBySelectedVector || firstBody || null;

    const selectedBodyLabel = selectedBody
      ? localize(
          selectedBody.label || selectedBody.name,
          lang,
          selectedBody.id || ""
        )
      : null;

    const selectedBodyId =
      bodyBySelectedVector?.id ||
      firstBody?.id ||
      selectedVector?.bodyId ||
      null;

    return {
      type: "Dcl",
      title,
      sceneId: normalizedProfile?.scene || "unknown_dcl_scene",
      sceneLabel,

      selectedObject:
        selectedBodyLabel ||
        selectedBodyId ||
        "cuerpo principal",

      selectedObjectId: selectedBodyId,

      selectedVector: selectedForce,

      readingFocus: readingFocus || "forces",
      currentStep,

      forces: visibleVectors
        .map((vector) => buildDclAgentForce(vector, lang))
        .filter(Boolean),

      hiddenForces: vectors
        .filter((vector) => vector.visible === false)
        .map((vector) => buildDclAgentForce(vector, lang))
        .filter(Boolean),

      graphWarnings: Array.isArray(sceneModel?.interpretationBridge?.graphWarnings)
        ? sceneModel.interpretationBridge.graphWarnings
        : [],

      equilibriumHints: Array.isArray(sceneModel?.interpretationBridge?.equilibriumHints)
        ? sceneModel.interpretationBridge.equilibriumHints
        : [],

      source: "DclRenderer",
    };
  }, [
    sceneModel,
    normalizedProfile,
    selectedVector,
    lang,
    title,
    sceneLabel,
    readingFocus,
    currentStep,
  ]);

  console.log("DCL activeDclGraphContext:", activeDclGraphContext);

  useEffect(() => {
    setActiveGraphContext(activeDclGraphContext);

    return () => {
      clearActiveGraphContext();
    };
  }, [
    activeDclGraphContext,
    setActiveGraphContext,
    clearActiveGraphContext,
  ]);

  const normalizedSmartHeader = (smartHeader || "").trim().toLowerCase();
  const normalizedSceneLabel = (sceneLabel || "").trim().toLowerCase();

  const showSceneLabel =
    !!sceneLabel &&
    normalizedSceneLabel !== normalizedSmartHeader &&
    !normalizedSmartHeader.includes(normalizedSceneLabel);

  const displayMode = normalizedProfile.options?.displayMode || "student";
  const enableVectorSelection =
    normalizedProfile.options?.enableVectorSelection !== false;
  const showBodyNames = normalizedProfile.options?.showBodyNames === true;
  const showStepControls = normalizedProfile.options?.showStepControls === true;
  const showTypicalErrors = normalizedProfile.options?.showTypicalErrors !== false;
  const showTheoryLink = normalizedProfile.options?.showTheoryLink === true;
  const showCompactLegend = normalizedProfile.options?.showCompactLegend === true;

  function handleVectorMouseMove(event, vector) {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;

    setTooltip({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      vector,
    });
  }

  function handleVectorMouseEnter(vector, event) {
    setHoveredVectorId(vector.id);
    handleVectorMouseMove(event, vector);
  }

  function handleVectorMouseLeave() {
    setHoveredVectorId(null);
    setTooltip(null);
  }

  function handleVectorClick(vector, event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (!enableVectorSelection) return;
    setSelectedVectorId((current) => (current === vector.id ? null : vector.id));
  }

  function handleWrapperClick(event) {
    if (event?.target?.closest && event.target.closest("g[data-dcl-vector='true']")) {
      return;
    }
    setSelectedVectorId(null);
  }

  const theoryLabel =
    localize(normalizedProfile?.theory_link?.label, lang, "") ||
    localize(profile?.theory_link?.label, lang, "");

  const theoryProfile =
    localize(normalizedProfile?.theory_link?.label, lang, "")
      ? normalizedProfile
      : profile;

  const localizedTypicalErrors =
    normalizedProfile?.interpretation?.likely_errors?.[lang]?.length
      ? normalizedProfile.interpretation.likely_errors[lang]
      : profile?.interpretation?.likely_errors?.[lang] || [];

  const hasTheoryLink = showTheoryLink && !!theoryLabel;

  const hasTypicalErrors =
    showTypicalErrors &&
    Array.isArray(localizedTypicalErrors) &&
    localizedTypicalErrors.length > 0;

  const typicalErrorsProfile = {
    ...normalizedProfile,
    interpretation: {
      ...(normalizedProfile?.interpretation || {}),
      likely_errors: {
        ...(normalizedProfile?.interpretation?.likely_errors || {}),
        [lang]: localizedTypicalErrors,
      },
    },
  };

  return (
    <div
      ref={wrapperRef}
      onClick={handleWrapperClick}
      className="dcl-card dcl-card-main"
      style={{ position: 'relative', width: '100%', padding: '16px' }}
    >
      <div className="dcl-card dcl-card-reading" style={{ marginBottom: '12px', padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '18px', fontWeight: 600, color: 'white', marginBottom: '8px' }}>
              {smartHeader || title}
            </div>

            {theoryBridge ? (
              <div className="text-sm" style={{ opacity: 0.9, marginBottom: '8px' }}>
                <Latex>{theoryBridge}</Latex>
              </div>
            ) : null}

            {readingFocus ? (
              <div className="text-xs" style={{ opacity: 0.8, fontStyle: 'italic' }}>
                <Latex>{readingFocus}</Latex>
              </div>
            ) : null}
          </div>

          {showSceneLabel ? (
            <div className="shrink-0 text-xs opacity-60">{sceneLabel}</div>
          ) : null}
        </div>
      </div>

      {showStepControls && (
        <StepControls
          steps={availableSteps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          lang={lang}
        />
      )}

      {showStepControls && <StepExplanation sceneModel={sceneModel} lang={lang} />}

      <svg
        width="100%"
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full overflow-visible"
        style={{
          borderRadius: '14px',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 100%)',
          boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.3)'
        }}
      >
        <defs>
          <linearGradient id="planeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#475569', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="dropShadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <MarkerDefs />

        {renderSceneGeometry(sceneModel)}

        {renderReferenceAxes(sceneModel, lang)}

        {showBodyNames &&
          normalizedProfile.bodies.map((body) => {
            const bodyGeom = sceneModel.bodyRuntimeMap?.[body.id]?.geometry;
            const label = renderBodyName(bodyGeom, body, lang);
            if (!label) return null;

            return (
              <text
                key={`body-name-${body.id}`}
                x={label.x}
                y={label.y}
                fill="#cbd5e1"
                fontSize="12"
                fontWeight="600"
                textAnchor="middle"
              >
                {label.text}
              </text>
            );
          })}

        {sceneModel.vectorsResolved.map((vector) => (
          <g key={vector.id} data-dcl-vector="true">
            <Arrow
              vector={vector}
              isHighlighted={hoveredVectorId === vector.id}
              isSelected={selectedVectorId === vector.id}
              onMouseEnter={(event) => handleVectorMouseEnter(vector, event)}
              onMouseLeave={handleVectorMouseLeave}
              onMouseMove={(event) => handleVectorMouseMove(event, vector)}
              onClick={(event) => handleVectorClick(vector, event)}
            />
          </g>
        ))}

        {(normalizedProfile.labels || [])
          .filter((label) => label.visible !== false)
          .map((label) => (
            <text
              key={label.id}
              x={width * 0.08}
              y={height * 0.1 + 18 * (normalizedProfile.labels.indexOf(label) + 1)}
              fill="#cbd5e1"
              fontSize="12"
            >
              {localize(label.text, lang, label.id)}
            </text>
          ))}
      </svg>

      <Tooltip data={tooltip} lang={lang} />

      {enableVectorSelection && (
        <>
          <SelectedVectorCard vector={selectedVector} lang={lang} />
          <VectorInterpretationCard 
            vector={selectedVector} 
            interpretationDoc={interpretationDoc}
            lang={lang} 
          />
        </>
      )}

      <InlineInterpretation 
        sceneModel={sceneModel} 
        lang={lang} 
        profile={normalizedProfile}
      />

      {hasTheoryLink && (
        <TheoryLinkCard
          profile={theoryProfile}
          lang={lang}
          displayMode={displayMode}
          onNavigate={onTheoryNavigate}
        />
      )}

      {hasTypicalErrors && (
        <TypicalErrorsCard
          profile={typicalErrorsProfile}
          lang={lang}
          displayMode={displayMode}
        />
      )}
    </div>
  );
}

