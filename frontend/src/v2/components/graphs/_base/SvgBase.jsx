// src/v2/components/graphs/_base/SvgBase.jsx
import GraphCard from "./GraphCard";

/**
 * SvgBase - Componente base para gráficos SVG didácticos
 * 
 * Características:
 * - Diseño moderno con gradientes y sombras
 * - Grid de fondo opcional para referencia visual
 * - Responsive y adaptable
 * - Soporte para modo oscuro
 * - Definiciones reutilizables (flechas, patrones, gradientes)
 */
export default function SvgBase({ 
  title, 
  subtitle, 
  children,
  viewBox = "0 0 600 400",
  showGrid = false,
  backgroundColor = "transparent",
  className = ""
}) {
  return (
    <GraphCard title={title} subtitle={subtitle}>
      <div className={`rounded-xl overflow-hidden ${className}`}
           style={{ 
             background: backgroundColor === "transparent" 
               ? "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)"
               : backgroundColor
           }}>
        <svg 
          viewBox={viewBox} 
          className="w-full h-auto"
          style={{ 
            filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.05))",
            minHeight: "300px"
          }}
        >
          {/* Definiciones reutilizables */}
          <defs>
            {/* Gradiente para objetos principales */}
            <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity="1" />
            </linearGradient>

            {/* Gradiente para objetos secundarios */}
            <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="1" />
            </linearGradient>

            {/* Gradiente para vectores/flechas */}
            <linearGradient id="vectorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
            </linearGradient>

            {/* Flecha estándar para vectores */}
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
            </marker>

            {/* Flecha grande para vectores principales */}
            <marker
              id="arrowheadLarge"
              markerWidth="12"
              markerHeight="12"
              refX="10"
              refY="4"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,8 L10,4 z" fill="currentColor" />
            </marker>

            {/* Patrón de puntos para áreas */}
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.2" />
            </pattern>

            {/* Patrón de líneas para superficies */}
            <pattern id="lines" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M0,10 L10,0" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            </pattern>

            {/* Sombra suave para objetos */}
            <filter id="softShadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
              <feOffset dx="0" dy="2" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Sombra para texto */}
            <filter id="textShadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
              <feOffset dx="0" dy="1" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.2" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Grid de fondo opcional */}
          {showGrid && (
            <g opacity="0.1">
              {/* Líneas verticales */}
              {Array.from({ length: 13 }, (_, i) => (
                <line
                  key={`v${i}`}
                  x1={i * 50}
                  y1="0"
                  x2={i * 50}
                  y2="400"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              ))}
              {/* Líneas horizontales */}
              {Array.from({ length: 9 }, (_, i) => (
                <line
                  key={`h${i}`}
                  x1="0"
                  y1={i * 50}
                  x2="600"
                  y2={i * 50}
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              ))}
            </g>
          )}

          {/* Contenido del gráfico */}
          <g className="svg-content">
            {children}
          </g>
        </svg>
      </div>
    </GraphCard>
  );
}

/**
 * Componentes auxiliares para construcción de gráficos SVG
 */

// Vector con flecha
export function Vector({ 
  x1, y1, x2, y2, 
  color = "#ef4444", 
  strokeWidth = 2.5,
  label = "",
  labelOffset = { x: 0, y: -10 },
  dashed = false
}) {
  const midX = (x1 + x2) / 2 + labelOffset.x;
  const midY = (y1 + y2) / 2 + labelOffset.y;

  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={dashed ? "5,5" : "none"}
        markerEnd="url(#arrowheadLarge)"
        style={{ color }}
      />
      {label && (
        <text
          x={midX}
          y={midY}
          fill={color}
          fontSize="14"
          fontWeight="600"
          textAnchor="middle"
          filter="url(#textShadow)"
        >
          {label}
        </text>
      )}
    </g>
  );
}

// Objeto circular (pelota, masa, etc.)
export function CircleObject({ 
  cx, cy, r = 15, 
  fill = "url(#primaryGradient)",
  stroke = "#4f46e5",
  strokeWidth = 2,
  label = ""
}) {
  return (
    <g filter="url(#softShadow)">
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      {label && (
        <text
          x={cx}
          y={cy + r + 20}
          fill="currentColor"
          fontSize="13"
          fontWeight="500"
          textAnchor="middle"
        >
          {label}
        </text>
      )}
    </g>
  );
}

// Superficie/suelo
export function Ground({ 
  y = 350, 
  width = 600,
  pattern = "lines"
}) {
  return (
    <g>
      {/* Línea superior */}
      <line
        x1="0"
        y1={y}
        x2={width}
        y2={y}
        stroke="currentColor"
        strokeWidth="3"
        opacity="0.8"
      />
      {/* Patrón de relleno */}
      <rect
        x="0"
        y={y}
        width={width}
        height="50"
        fill={`url(#${pattern})`}
        opacity="0.6"
      />
    </g>
  );
}

// Etiqueta de medida/dimensión
export function Dimension({ 
  x1, y1, x2, y2,
  label,
  offset = 20,
  color = "#64748b"
}) {
  const isVertical = Math.abs(x2 - x1) < Math.abs(y2 - y1);
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;

  return (
    <g opacity="0.7">
      {/* Líneas de extensión */}
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.5" strokeDasharray="3,3" />
      
      {/* Marcas en los extremos */}
      <line 
        x1={x1 - (isVertical ? 5 : 0)} 
        y1={y1 - (isVertical ? 0 : 5)} 
        x2={x1 + (isVertical ? 5 : 0)} 
        y2={y1 + (isVertical ? 0 : 5)} 
        stroke={color} 
        strokeWidth="1.5" 
      />
      <line 
        x1={x2 - (isVertical ? 5 : 0)} 
        y1={y2 - (isVertical ? 0 : 5)} 
        x2={x2 + (isVertical ? 5 : 0)} 
        y2={y2 + (isVertical ? 0 : 5)} 
        stroke={color} 
        strokeWidth="1.5" 
      />
      
      {/* Etiqueta */}
      <text
        x={midX + (isVertical ? offset : 0)}
        y={midY + (isVertical ? 0 : offset)}
        fill={color}
        fontSize="12"
        fontWeight="500"
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
}
