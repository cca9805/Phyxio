import React from "react";
import SvgDefs from "./SvgDefs";

/**
 * SvgFrame (svg2) usando CSS v2 (NO depende de Tailwind)
 * - Layout: .v2-grid-2 (2 columnas, colapsa en <768px)
 * - Izq: card con controles + SVG
 * - Der: card con aside
 */
export default function SvgFrame({
  title,
  subtitle,
  badgeLabel,
  badgeValue,
  controls,
  aside,
  children,
  className = "",
  viewBox = "0 0 850 600",
  svgHeight = 900,
}) {
  return (
    <div className={`v2-leaf ${className}`}>
      {/* Header */}
      
      <div className="v2-header">
        {/* IZQUIERDA */}
        <div className="v2-header-left">
          <h1 className="v2-title" style={{ color: "#fff" }}>
            {title}
          </h1>

          {subtitle ? (
            <div
              className="v2-title"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              <h3 className="v2-title" style={{ color: "#fff" }}>
                {subtitle}
              </h3>
            </div>
          ) : null}
        </div>

        {/* DERECHA */}
        {(badgeLabel || badgeValue) ? (
          <div className="v2-header-right">
            <div
              className="v2-chip"
              style={{
                borderColor: "rgba(252, 3, 3, 0.15)",
                background: "rgba(12, 125, 255, 1)",
                color: "rgba(0, 0, 0, 0.85)",
                padding: "10px",
                textAlign: "center"
              }}
            >
              <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.9 }}>
                {badgeLabel || "INFO"}
              </div>
              <div style={{ fontWeight: 700 }}>
                {badgeValue || ""}
              </div>
            </div>
          </div>
        ) : null}
      </div>
      
      {/* 2 columnas (CSS v2) */}
      <div className="v2-grid-2">
        {/* LEFT */}
        <div className="v2-card" style={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.92), rgba(30,64,175,0.25))",
          borderColor: "rgba(255,255,255,0.12)",
          padding: 0,
          overflow: "hidden"
        }}>
          {/* Controles */}
          {controls ? (
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              padding: "10px 12px",
              borderBottom: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(255,255,255,0.04)"
            }}>
              <div style={{
                fontSize: 11,
                letterSpacing: 1,
                color: "rgba(255,255,255,0.55)",
                fontWeight: 700
              }}>
                CONTROLES
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {controls}
              </div>
            </div>
          ) : null}

          {/* SVG */}
          <div style={{ position: "relative", padding: 2 }}>
            {/* Glows (inline, sin Tailwind) */}

            <svg
              viewBox={viewBox}
              style={{ width: "100%", height: svgHeight, display: "block" }}
              preserveAspectRatio="xMidYMid meet"
              role="img"
              aria-label={title || "SVG simulation"}
            >
              <SvgDefs />
              {children}
            </svg>
          </div>
        </div>

        {/* RIGHT */}
        <div className="v2-card" style={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.92), rgba(81,97,168,0.35))",
          borderColor: "rgba(255,255,255,0.12)"
        }}>
          {aside ? aside : (
            <div style={{ color: "rgba(255,255,255,0.65)" }}>
              Sin panel.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
