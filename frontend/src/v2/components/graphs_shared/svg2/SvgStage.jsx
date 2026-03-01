import React from "react";
import "./SvgShared.css";

/**
 * SvgFrame (v2)
 * - Encapsula el <svg> + helpers de coordenadas (mundo -> svg)
 * - Gestiona bounds (suelo/techo/paredes) con opción hideOutside
 *
 * Props:
 * - width, height
 * - viewBox: { xMin, xMax, yMin, yMax }
 * - bounds?: { floorY, ceilingY, leftX, rightX, hideOutside }
 * - params: objeto libre (estado visual)
 * - renderSvg: ({ params, toSvgX, toSvgY, scaleX, scaleY, bounds }) => ReactNode
 * - className
 */
export default function SvgFrame({
  width = 520,
  height = 320,
  viewBox,
  bounds = {},
  params = {},
  renderSvg,
  className = "",
}) {
  const vb = viewBox ?? { xMin: 0, xMax: 10, yMin: 0, yMax: 10 };
  const xMin = vb.xMin, xMax = vb.xMax, yMin = vb.yMin, yMax = vb.yMax;

  const vbW = xMax - xMin;
  const vbH = yMax - yMin;

  // SVG viewBox string
  const vbStr = `${xMin} ${yMin} ${vbW} ${vbH}`;

  // Helpers: NOTA: en SVG el eje Y crece hacia abajo. Nuestro "mundo" suele ser Y hacia arriba.
  // Para mantener consistencia con física, invertimos Y: yWorld -> ySvg = yMax - yWorld
  const toSvgX = React.useCallback((x) => x, []);
  const toSvgY = React.useCallback((y) => (yMax - y), [yMax]);

  const scaleX = React.useCallback((dx) => dx, []);
  const scaleY = React.useCallback((dy) => dy, []);

  const b = {
    hideOutside: true,
    ...bounds,
  };

  // ClipPath opcional para ocultar fuera del marco
  const clipId = React.useId();

  const content = renderSvg
    ? renderSvg({ params, toSvgX, toSvgY, scaleX, scaleY, bounds: b })
    : null;

  return (
    <div className={`svgCard ${className}`}>
      <svg
        className="svgRoot"
        width={width}
        height={height}
        viewBox={vbStr}
        preserveAspectRatio="xMidYMid meet"
        role="img"
      >
        <defs>
          {b.hideOutside ? (
            <clipPath id={clipId}>
              <rect x={xMin} y={yMin} width={vbW} height={vbH} />
            </clipPath>
          ) : null}
        </defs>

        <g clipPath={b.hideOutside ? `url(#${clipId})` : undefined}>
          {content}
        </g>
      </svg>
    </div>
  );
}
