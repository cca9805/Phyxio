import React from "react";
import { createSvgGraph } from "../../graphFactories.jsx";
import profile from "./flujo-turbulento.svg.profile.jsx";

const SvgRenderer = ({ state, dimensions, tt }) => {
  const { width, height } = dimensions;
  const { v_max = 2, Re = 5000 } = state;
  
  const centerY = height / 2;
  const pipeHeight = height * 0.6;
  const pipeTop = centerY - pipeHeight / 2;
  const pipeBottom = centerY + pipeHeight / 2;
  const startX = width * 0.1;
  const endX = width * 0.9;

  // Dibujar perfil turbulento (Ley 1/7)
  const points = [];
  const numPoints = 60;
  for (let i = 0; i <= numPoints; i++) {
    const yRel = (i / numPoints) * 2 - 1; // -1 a 1
    const y = centerY + yRel * (pipeHeight / 2);
    const vx = startX + Math.pow(1 - Math.abs(yRel), 1/7) * v_max * 60; 
    points.push(`${vx},${y}`);
  }

  // Generar remolinos aleatorios basados en Re
  const eddies = [];
  const numEddies = Math.floor(Re / 1000);
  for (let i = 0; i < numEddies; i++) {
    eddies.push({
      x: startX + Math.random() * (endX - startX),
      y: pipeTop + Math.random() * pipeHeight,
      r: 5 + Math.random() * 15,
      opacity: 0.1 + Math.random() * 0.3
    });
  }

  return (
    <g className="flujo-turbulento-svg">
      {/* Fondo del tubo */}
      <rect x={startX} y={pipeTop} width={endX - startX} height={pipeHeight} fill="rgba(255,255,255,0.03)" />
      
      {/* Paredes */}
      <line x1={startX} y1={pipeTop} x2={endX} y2={pipeTop} stroke="currentColor" strokeWidth="4" />
      <line x1={startX} y1={pipeBottom} x2={endX} y2={pipeBottom} stroke="currentColor" strokeWidth="4" />
      
      {/* Remolinos (eddies) */}
      {eddies.map((e, i) => (
        <circle 
          key={i} 
          cx={e.x} 
          cy={e.y} 
          r={e.r} 
          fill="none" 
          stroke="var(--primary-color, #f43f5e)" 
          strokeWidth="1" 
          strokeOpacity={e.opacity}
          strokeDasharray="4 2"
        />
      ))}
      
      {/* Perfil de velocidades */}
      <polyline
        points={points.join(" ")}
        fill="none"
        stroke="#f43f5e"
        strokeWidth="3"
      />
      
      {/* Flechas de velocidad (más planas) */}
      {[0.2, 0.4, 0.5, 0.6, 0.8].map((f) => {
        const yRel = f * 2 - 1;
        const y = centerY + yRel * (pipeHeight / 2);
        const vx = startX + Math.pow(1 - Math.abs(yRel), 1/7) * v_max * 60;
        return (
          <line
            key={f}
            x1={startX}
            y1={y}
            x2={vx}
            y2={y}
            stroke="#f43f5e"
            strokeOpacity="0.6"
            markerEnd="url(#arrowhead-turb)"
          />
        );
      })}
      
      <text x={startX} y={pipeTop - 15} fill="currentColor" fontSize="14" fontWeight="bold">
        {tt("Régimen Turbulento (Re > 4000)", "Turbulent Regime (Re > 4000)")}
      </text>
      
      <defs>
        <marker id="arrowhead-turb" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#f43f5e" />
        </marker>
      </defs>
    </g>
  );
};

export default createSvgGraph({
  id: "flujo-turbulento-svg",
  profile,
  Renderer: SvgRenderer,
});
