import React, { useMemo } from "react";
import { createSvgGraph } from "../../graphFactories.jsx";
import profile from "./numero-de-reynolds.svg.profile.jsx";

const SvgRenderer = ({ state, dimensions, tt }) => {
  const { width, height } = dimensions;
  const { Re = 500 } = state;

  const isLaminar = Re < 2300;
  const isTurbulent = Re > 4000;
  const isTransition = !isLaminar && !isTurbulent;

  const centerY = height / 2;
  const pipeWidth = width * 0.8;
  const startX = width * 0.1;

  const dyePoints = useMemo(() => {
    const points = [];
    const segments = 100;
    
    for (let i = 0; i <= segments; i++) {
      const xRel = i / segments;
      const x = startX + xRel * pipeWidth;
      let y = centerY;

      if (!isLaminar) {
        const chaosFactor = Math.min(1, (Re - 2000) / 8000);
        const amplitude = Math.max(0, chaosFactor * (xRel * 30));
        const frequency = 0.1 + (Re / 20000);
        y += Math.sin(xRel * 20 * frequency) * amplitude;
        y += Math.cos(xRel * 30 * frequency * 1.5) * (amplitude / 2);
        if (isTurbulent && xRel > 0.4) {
          y += (Math.random() - 0.5) * (xRel * 20);
        }
      }
      points.push(`${x},${y}`);
    }
    return points.join(" ");
  }, [Re, isLaminar, isTurbulent, startX, pipeWidth, centerY]);

  return (
    <g>
      <defs>
        <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(30, 41, 59, 0.5)" />
          <stop offset="50%" stopColor="rgba(51, 65, 85, 0.5)" />
          <stop offset="100%" stopColor="rgba(30, 41, 59, 0.5)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Glass Pipe */}
      <rect 
        x={startX} 
        y={centerY - 70} 
        width={pipeWidth} 
        height={140} 
        fill="url(#pipeGrad)" 
        rx="10" 
      />
      <rect 
        x={startX} 
        y={centerY - 70} 
        width={pipeWidth} 
        height={140} 
        fill="none" 
        stroke="rgba(255,255,255,0.1)" 
        strokeWidth="2" 
        rx="10" 
      />

      {/* Dye Injector */}
      <line x1={0} y1={centerY} x2={startX} y2={centerY} stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" />
      <circle cx={startX} cy={centerY} r="4" fill="#f43f5e" />

      {/* Dye Thread */}
      <polyline
        points={dyePoints}
        fill="none"
        stroke="#f43f5e"
        strokeWidth={isLaminar ? 2 : 4}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
        style={{ transition: 'all 0.3s ease-out' }}
      />

      <text x={width / 2} y={centerY + 100} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="14" fontWeight="bold">
        {tt("Dirección del flujo →", "Flow direction →")}
      </text>

      <text x={startX + 10} y={centerY - 80} fill="rgba(255,255,255,0.7)" fontSize="12" fontWeight="bold">
        {tt(
          `Régimen: ${isLaminar ? 'Laminar' : isTransition ? 'Transición' : 'Turbulento'}`,
          `Regime: ${isLaminar ? 'Laminar' : isTransition ? 'Transition' : 'Turbulent'}`
        )}
      </text>
    </g>
  );
};

export default createSvgGraph({
  id: "reynolds-dye-experiment",
  profile,
  Renderer: SvgRenderer,
});
