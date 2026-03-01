import React from "react";

/**
 * SvgRenderer (v2)
 * Renderiza "objects" declarativos a SVG.
 *
 * Soporta tipos base: circle, rect, line, path, text, group, arrow
 * + tipos estándar Phyxio: ground, mass, vector, trajectory, pivot
 */
export default function SvgRenderer({ objects = [], ctx }) {
  const {
    params = {},
    toSvgX,
    toSvgY,
    scaleX,
    scaleY,
    bounds = {},
    frame = {},
  } = ctx || {};

  const localCtxBase = { params, toSvgX, toSvgY, scaleX, scaleY, bounds, frame };

  const resolve = (v, localCtx) => (typeof v === "function" ? v(localCtx) : v);

  const behavior = bounds?.behavior || "clamp"; // clamp | hide
  const clamp = (n, a, b) => {
    if (typeof n !== "number") return n;
    if (typeof a === "number" && n < a) return a;
    if (typeof b === "number" && n > b) return b;
    return n;
  };

  const normalizePoint = (x, y) => {
    const leftX = bounds?.leftX;
    const rightX = bounds?.rightX;
    const floorY = bounds?.floorY;
    const ceilingY = bounds?.ceilingY;

    const hasX = typeof leftX === "number" || typeof rightX === "number";
    const hasY = typeof floorY === "number" || typeof ceilingY === "number";

    let nx = x;
    let ny = y;

    if (behavior === "clamp") {
      if (hasX) nx = clamp(nx, leftX, rightX);
      if (hasY) ny = clamp(ny, floorY, ceilingY);
    }

    if (behavior === "hide") {
      if (hasX) {
        if (typeof leftX === "number" && typeof nx === "number" && nx < leftX) return { hide: true };
        if (typeof rightX === "number" && typeof nx === "number" && nx > rightX) return { hide: true };
      }
      if (hasY) {
        if (typeof floorY === "number" && typeof ny === "number" && ny < floorY) return { hide: true };
        if (typeof ceilingY === "number" && typeof ny === "number" && ny > ceilingY) return { hide: true };
      }
    }

    return { x: nx, y: ny, hide: false };
  };

  const W2SX = (x) => (typeof toSvgX === "function" ? toSvgX(x) : x);
  const W2SY = (y) => (typeof toSvgY === "function" ? toSvgY(y) : y);

  const resolveProps = (props, localCtx) => {
    const out = {};
    const p = props || {};
    for (const k of Object.keys(p)) out[k] = resolve(p[k], localCtx);
    return out;
  };

  const pointsToPath = (pts) => {
    if (!Array.isArray(pts) || pts.length < 2) return "";
    const d0 = `M ${W2SX(pts[0].x)} ${W2SY(pts[0].y)}`;
    const rest = pts.slice(1).map((p) => `L ${W2SX(p.x)} ${W2SY(p.y)}`).join(" ");
    return `${d0} ${rest}`;
  };

  const renderArrow = ({ x1, y1, x2, y2, headSize = 0.35, gProps, lineProps, headProps }) => {
    const X1 = W2SX(x1), Y1 = W2SY(y1);
    const X2 = W2SX(x2), Y2 = W2SY(y2);

    const dx = X2 - X1;
    const dy = Y2 - Y1;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;

    const ux = dx / len;
    const uy = dy / len;
    const px = -uy;
    const py = ux;

    const hs = headSize;

    const hx = X2 - ux * hs;
    const hy = Y2 - uy * hs;

    const leftX = hx + px * (hs * 0.6);
    const leftY = hy + py * (hs * 0.6);
    const rightX = hx - px * (hs * 0.6);
    const rightY = hy - py * (hs * 0.6);

    return (
      <g {...gProps}>
        <line x1={X1} y1={Y1} x2={X2} y2={Y2} {...lineProps} />
        <path d={`M ${X2} ${Y2} L ${leftX} ${leftY} L ${rightX} ${rightY} Z`} {...headProps} />
      </g>
    );
  };

  const renderOne = (obj, idx, parentKey = "o") => {
    if (!obj) return null;

    const key = obj.key ?? `${parentKey}-${obj.id ?? obj.type ?? "obj"}-${idx}`;
    const when = resolve(obj.when, localCtxBase);
    if (when === false) return null;

    const type = obj.type;

    // -------- group
    if (type === "group") {
      const children = obj.children ?? [];
      const gProps = resolveProps(obj.props, localCtxBase);
      return (
        <g key={key} {...gProps}>
          {children.map((c, i) => renderOne(c, i, key))}
        </g>
      );
    }

    // =========================
    // TIPOS ESTÁNDAR PHYXIO
    // =========================

    // -------- ground
    if (type === "ground") {
      const vb = frame?.viewBox || {};
      const x1W = resolve(obj.x1 ?? vb.xMin ?? 0, localCtxBase);
      const x2W = resolve(obj.x2 ?? vb.xMax ?? 10, localCtxBase);
      const yW = resolve(obj.y ?? bounds?.floorY ?? 0, localCtxBase);

      const shade = resolve(obj.shade ?? false, localCtxBase);
      const shadeHeight = resolve(obj.shadeHeight ?? 2, localCtxBase);

      const props = resolveProps(obj.props, localCtxBase);
      const lineProps = { stroke: "currentColor", opacity: 0.35, ...props };

      return (
        <g key={key}>
          {shade ? (
            <rect
              x={W2SX(x1W)}
              y={W2SY(yW)}
              width={Math.abs(W2SX(x2W) - W2SX(x1W))}
              height={Math.abs(W2SY(yW - shadeHeight) - W2SY(yW))}
              fill="currentColor"
              opacity={0.06}
            />
          ) : null}
          <line x1={W2SX(x1W)} y1={W2SY(yW)} x2={W2SX(x2W)} y2={W2SY(yW)} {...lineProps} />
        </g>
      );
    }

    // -------- pivot (triángulo)
    if (type === "pivot") {
      const xW = resolve(obj.x, localCtxBase);
      const yW = resolve(obj.y ?? bounds?.floorY ?? 0, localCtxBase);
      const size = resolve(obj.size ?? 0.6, localCtxBase);

      const p = normalizePoint(xW, yW);
      if (p.hide) return null;

      const x = p.x;
      const y = p.y;

      // Triángulo con base en suelo: (x-size, y) -> (x+size, y) -> (x, y+size)
      const d = [
        `M ${W2SX(x - size)} ${W2SY(y)}`,
        `L ${W2SX(x + size)} ${W2SY(y)}`,
        `L ${W2SX(x)} ${W2SY(y + size)}`,
        "Z",
      ].join(" ");

      const props = resolveProps(obj.props, localCtxBase);
      return <path key={key} d={d} fill="currentColor" opacity={0.18} {...props} />;
    }

    // -------- mass (círculo + etiqueta)
    if (type === "mass") {
      const xW = resolve(obj.x, localCtxBase);
      const yW = resolve(obj.y, localCtxBase);
      const rW = resolve(obj.r ?? 0.25, localCtxBase);

      const p = normalizePoint(xW, yW);
      if (p.hide) return null;

      const circleProps = resolveProps(obj.props, localCtxBase);
      const textProps = resolveProps(obj.textProps, localCtxBase);

      const label = resolve(obj.label, localCtxBase);
      const labelDx = resolve(obj.labelDx ?? 0.3, localCtxBase);
      const labelDy = resolve(obj.labelDy ?? 0.3, localCtxBase);

      return (
        <g key={key}>
          <circle
            cx={W2SX(p.x)}
            cy={W2SY(p.y)}
            r={Number(rW)}
            fill="currentColor"
            {...circleProps}
          />
          {label != null && label !== "" ? (
            <text
              x={W2SX(p.x + labelDx)}
              y={W2SY(p.y + labelDy)}
              fontSize="0.6"
              fill="currentColor"
              opacity={0.9}
              {...textProps}
            >
              {String(label)}
            </text>
          ) : null}
        </g>
      );
    }

    // -------- vector (arrow + label)
    if (type === "vector") {
      const xW = resolve(obj.x, localCtxBase);
      const yW = resolve(obj.y, localCtxBase);
      const dxW = resolve(obj.dx ?? 0, localCtxBase);
      const dyW = resolve(obj.dy ?? 0, localCtxBase);
      const scale = resolve(obj.scale ?? 1, localCtxBase);
      const headSize = resolve(obj.headSize ?? 0.35, localCtxBase);

      const p0 = normalizePoint(xW, yW);
      if (p0.hide) return null;

      const x2W = p0.x + dxW * scale;
      const y2W = p0.y + dyW * scale;
      const p1 = normalizePoint(x2W, y2W);
      if (p1.hide) return null;

      const gProps = resolveProps(obj.props, localCtxBase);
      const lineProps = resolveProps(obj.lineProps, localCtxBase);
      const headProps = resolveProps(obj.headProps, localCtxBase);

      const label = resolve(obj.label, localCtxBase);
      const labelAt = resolve(obj.labelAt ?? 0.6, localCtxBase);
      const labelOffset = resolve(obj.labelOffset ?? 0.25, localCtxBase);
      const textProps = resolveProps(obj.textProps, localCtxBase);

      // etiqueta: punto intermedio + offset perpendicular
      let tx = null, ty = null;
      if (label != null && label !== "") {
        const mx = p0.x + (p1.x - p0.x) * labelAt;
        const my = p0.y + (p1.y - p0.y) * labelAt;
        const vx = p1.x - p0.x;
        const vy = p1.y - p0.y;
        const L = Math.sqrt(vx * vx + vy * vy) || 1;
        const px = -vy / L;
        const py = vx / L;
        tx = mx + px * labelOffset;
        ty = my + py * labelOffset;
      }

      return (
        <g key={key}>
          {renderArrow({
            x1: p0.x,
            y1: p0.y,
            x2: p1.x,
            y2: p1.y,
            headSize,
            gProps: { ...gProps },
            lineProps: { stroke: "currentColor", ...lineProps },
            headProps: { fill: "currentColor", ...headProps },
          })}
          {tx != null ? (
            <text
              x={W2SX(tx)}
              y={W2SY(ty)}
              fontSize="0.6"
              fill="currentColor"
              opacity={0.9}
              {...textProps}
            >
              {String(label)}
            </text>
          ) : null}
        </g>
      );
    }

    // -------- trajectory (path desde puntos)
    if (type === "trajectory") {
      const pts = resolve(obj.points, localCtxBase);
      const d = pointsToPath(pts);
      if (!d) return null;
      const props = resolveProps(obj.props, localCtxBase);
      return <path key={key} d={d} fill="none" stroke="currentColor" opacity={0.35} {...props} />;
    }

    // =========================
    // TIPOS BASE
    // =========================

    // circle
    if (type === "circle") {
      const cxW = resolve(obj.cx, localCtxBase);
      const cyW = resolve(obj.cy, localCtxBase);
      const rW = resolve(obj.r, localCtxBase);

      const p = normalizePoint(cxW, cyW);
      if (p.hide) return null;

      const props = resolveProps(obj.props, localCtxBase);
      return <circle key={key} cx={W2SX(p.x)} cy={W2SY(p.y)} r={Number(rW)} {...props} />;
    }

    // rect
    if (type === "rect") {
      const xW = resolve(obj.x, localCtxBase);
      const yW = resolve(obj.y, localCtxBase);
      const wW = resolve(obj.w, localCtxBase);
      const hW = resolve(obj.h, localCtxBase);

      const anchor = obj.anchor || "bottom-left";
      const p = normalizePoint(xW, yW);
      if (p.hide) return null;

      const yTopWorld = anchor === "bottom-left" ? (p.y + hW) : p.y;

      const props = resolveProps(obj.props, localCtxBase);
      return (
        <rect
          key={key}
          x={W2SX(p.x)}
          y={W2SY(yTopWorld)}
          width={Number(wW)}
          height={Number(hW)}
          {...props}
        />
      );
    }

    // line
    if (type === "line") {
      const x1W = resolve(obj.x1 ?? obj.x, localCtxBase);
      const y1W = resolve(obj.y1 ?? obj.y, localCtxBase);
      const x2W = resolve(obj.x2, localCtxBase);
      const y2W = resolve(obj.y2, localCtxBase);

      const p1 = normalizePoint(x1W, y1W);
      const p2 = normalizePoint(x2W, y2W);
      if (p1.hide || p2.hide) return null;

      const props = resolveProps(obj.props, localCtxBase);
      return <line key={key} x1={W2SX(p1.x)} y1={W2SY(p1.y)} x2={W2SX(p2.x)} y2={W2SY(p2.y)} {...props} />;
    }

    // path
    if (type === "path") {
      const d = resolve(obj.d, localCtxBase);
      if (!d) return null;
      const props = resolveProps(obj.props, localCtxBase);
      return <path key={key} d={d} {...props} />;
    }

    // text
    if (type === "text") {
      const xW = resolve(obj.x, localCtxBase);
      const yW = resolve(obj.y, localCtxBase);
      const value = resolve(obj.value ?? obj.text, localCtxBase);

      const p = normalizePoint(xW, yW);
      if (p.hide) return null;

      const props = resolveProps(obj.props, localCtxBase);
      return (
        <text key={key} x={W2SX(p.x)} y={W2SY(p.y)} {...props}>
          {value}
        </text>
      );
    }

    // arrow base (si la quieres usar directa)
    if (type === "arrow") {
      const x1W = resolve(obj.x1, localCtxBase);
      const y1W = resolve(obj.y1, localCtxBase);
      const x2W = resolve(obj.x2, localCtxBase);
      const y2W = resolve(obj.y2, localCtxBase);
      const headSize = resolve(obj.headSize ?? 0.35, localCtxBase);

      const p1 = normalizePoint(x1W, y1W);
      const p2 = normalizePoint(x2W, y2W);
      if (p1.hide || p2.hide) return null;

      const gProps = resolveProps(obj.props, localCtxBase);
      const lineProps = resolveProps(obj.lineProps, localCtxBase);
      const headProps = resolveProps(obj.headProps, localCtxBase);

      return (
        <g key={key}>
          {renderArrow({
            x1: p1.x,
            y1: p1.y,
            x2: p2.x,
            y2: p2.y,
            headSize,
            gProps,
            lineProps: { stroke: "currentColor", ...lineProps },
            headProps: { fill: "currentColor", ...headProps },
          })}
        </g>
      );
    }

    // custom render
    if (typeof obj.render === "function") {
      return <React.Fragment key={key}>{obj.render(localCtxBase)}</React.Fragment>;
    }

    return null;
  };

  return <>{(objects ?? []).map((o, i) => renderOne(o, i))}</>;
}
