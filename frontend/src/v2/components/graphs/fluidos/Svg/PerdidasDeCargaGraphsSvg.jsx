import React from "react";
import { createSvgGraph } from "../../graphFactories.jsx";
import profile from "./perdidas-de-carga.svg.profile.jsx";

/**
 * SvgRenderer para Pérdidas de Carga
 * Visualización conceptual de un fluido circulando por una tubería.
 */
const SvgRenderer = ({ state, dimensions, tt }) => {
  const { width, height } = dimensions;
  const { hf = 10, v = 2 } = state;
  
  // Normalizar velocidad para animación (rango 0.5s a 5s)
  const animDuration = Math.max(0.5, Math.min(5, 5 / (v + 0.1)));
  
  // Intensidad de "calor" (rojo) basada en [[hf]]
  const lossIntensity = Math.min(1, hf / 50);

  const centerY = height / 2;
  const pipeWidth = width * 0.8;
  const pipeHeight = 100;
  const startX = width * 0.1;

  return (
    <g>
      <defs>
        <linearGradient id="pipeGradientLoss" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor={lossIntensity > 0.5 ? "#f43f5e" : "#0ea5e9"} />
        </linearGradient>
        
        <pattern id="flowPatternLoss" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.3)">
            <animate attributeName="cx" from="20" to="120" dur={`${animDuration}s`} repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="50" r="1.5" fill="rgba(255,255,255,0.2)">
            <animate attributeName="cx" from="60" to="160" dur={`${animDuration * 1.2}s`} repeatCount="indefinite" />
          </circle>
          <circle cx="30" cy="80" r="1" fill="rgba(255,255,255,0.4)">
            <animate attributeName="cx" from="30" to="130" dur={`${animDuration * 0.8}s`} repeatCount="indefinite" />
          </circle>
        </pattern>
      </defs>

      {/* Paredes de la tubería */}
      <rect x={startX} y={centerY - pipeHeight/2} width={pipeWidth} height={pipeHeight} rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="4" />
      
      {/* Contenido del fluido con gradiente de pérdida [[hf]] */}
      <rect x={startX + 4} y={centerY - pipeHeight/2 + 4} width={pipeWidth - 8} height={pipeHeight - 8} rx="8" fill="url(#pipeGradientLoss)" opacity="0.6" />
      
      {/* Partículas de flujo animadas operando con [[v]] */}
      <rect x={startX + 4} y={centerY - pipeHeight/2 + 4} width={pipeWidth - 8} height={pipeHeight - 8} rx="8" fill="url(#flowPatternLoss)" />

      {/* Indicadores de calor/disipación en la pared */}
      {lossIntensity > 0.2 && (
        <g opacity={lossIntensity}>
          <path d={`M${startX + 50} ${centerY - pipeHeight/2 - 10} Q ${startX + 60} ${centerY - pipeHeight/2 - 30} ${startX + 70} ${centerY - pipeHeight/2 - 10}`} fill="none" stroke="#f43f5e" strokeWidth="2">
            <animate attributeName="d" values={`M${startX + 50} ${centerY - pipeHeight/2 - 10} Q ${startX + 60} ${centerY - pipeHeight/2 - 30} ${startX + 70} ${centerY - pipeHeight/2 - 10}; M${startX + 50} ${centerY - pipeHeight/2 - 10} Q ${startX + 60} ${centerY - pipeHeight/2 - 40} ${startX + 70} ${centerY - pipeHeight/2 - 10}; M${startX + 50} ${centerY - pipeHeight/2 - 10} Q ${startX + 60} ${centerY - pipeHeight/2 - 30} ${startX + 70} ${centerY - pipeHeight/2 - 10}`} dur="2s" repeatCount="indefinite" />
          </path>
        </g>
      )}

      {/* Textos descriptivos */}
      <text x={width/2} y={centerY + 80} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="14" fontWeight="bold">
        {tt("Disipación de Energía [[hf]]", "Energy Dissipation [[hf]]")}
      </text>
      
      {/* Flechas de fricción */}
      <g stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none">
         <path d={`M${startX + 100} ${centerY + pipeHeight/2 + 10} L ${startX + 80} ${centerY + pipeHeight/2 + 10} M ${startX + 85} ${centerY + pipeHeight/2 + 5} L ${startX + 80} ${centerY + pipeHeight/2 + 10} L ${startX + 85} ${centerY + pipeHeight/2 + 15}`} />
      </g>
    </g>
  );
};

export default createSvgGraph({
  id: "head-loss-pipe-flow",
  profile,
  Renderer: SvgRenderer,
});
