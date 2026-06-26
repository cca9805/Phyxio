import React from "react";
import { createSvgGraph } from "../../graphFactories.jsx";
import profile from "./flujo-laminar.svg.profile.jsx";

const SvgRenderer = ({ state, dimensions, tt }) => {
  const { width, height } = dimensions;
  const { v_max = 1, R = 0.5 } = state;
  
  // Escalar valores para la visualización
  const centerY = height / 2;
  const pipeHeight = height * 0.6;
  const pipeTop = centerY - pipeHeight / 2;
  const pipeBottom = centerY + pipeHeight / 2;
  const startX = width * 0.1;
  const endX = width * 0.9;
  const pipeWidth = endX - startX;

  // Dibujar parábola de velocidades
  const points = [];
  const numPoints = 50;
  for (let i = 0; i <= numPoints; i++) {
    const yRel = (i / numPoints) * 2 - 1; // de -1 a 1
    const y = centerY + yRel * (pipeHeight / 2);
    const vx = startX + (1 - yRel * yRel) * v_max * 100; // Escala arbitraria
    points.push(`${vx},${y}`);
  }

  return (
    <g className="flujo-laminar-svg">
      {/* Paredes del tubo */}
      <line x1={startX} y1={pipeTop} x2={endX} y2={pipeTop} stroke="currentColor" strokeWidth="3" />
      <line x1={startX} y1={pipeBottom} x2={endX} y2={pipeBottom} stroke="currentColor" strokeWidth="3" />
      
      {/* Perfil parabólico */}
      <polyline
        points={points.join(" ")}
        fill="none"
        stroke="var(--primary-color, #3b82f6)"
        strokeWidth="2"
      />
      
      {/* Flechas de velocidad */}
      {[0.2, 0.4, 0.6, 0.8].map((f) => {
        const yRel = f * 2 - 1;
        const y = centerY + yRel * (pipeHeight / 2);
        const vx = startX + (1 - yRel * yRel) * v_max * 100;
        return (
          <line
            key={f}
            x1={startX}
            y1={y}
            x2={vx}
            y2={y}
            stroke="var(--primary-color, #3b82f6)"
            strokeOpacity="0.5"
            markerEnd="url(#arrowhead)"
          />
        );
      })}
      
      {/* Etiquetas */}
      <text x={startX} y={pipeTop - 10} fill="currentColor" fontSize="12">
        {tt("Pared del conducto", "Pipe Wall")}
      </text>
      <text x={startX + v_max * 100 + 10} y={centerY + 5} fill="var(--primary-color)" fontWeight="bold">
        v_max
      </text>
      
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="var(--primary-color, #3b82f6)" />
        </marker>
      </defs>
    </g>
  );
};

export default createSvgGraph({
  id: "flujo-laminar-svg",
  profile,
  Renderer: SvgRenderer,
});
