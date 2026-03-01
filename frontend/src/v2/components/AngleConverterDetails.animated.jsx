import React, { useMemo, useRef, useState } from "react";
import Latex from "react-latex-next";

function parseNumberLoose(v) {
  if (v == null) return NaN;
  const s = String(v).trim();
  if (!s) return NaN;
  const n = Number(s.replace(",", "."));
  return Number.isFinite(n) ? n : NaN;
}

function formatNumberLoose(n, decimalSep = ",") {
  if (!Number.isFinite(n)) return "";
  
  // Limitar a 6 decimales máximo
  const rounded = Math.round(n * 100000000) / 100000000;
  
  let s = String(rounded);
  if (!/e/i.test(s) && s.includes(".")) {
    s = s.replace(/0+$/, "").replace(/\.$/, "");
  }
  if (decimalSep === ",") s = s.replace(".", ",");
  return s;
}

export default function AngleConverterDetails({
  defaultFrom = "deg",
  defaultTo = "rad",
  decimalSeparator = ",",
  onApply,
}) {
  const detailsRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const [from, setFrom] = useState(defaultFrom);
  const [to, setTo] = useState(defaultTo);
  const [raw, setRaw] = useState("");

  const value = useMemo(() => parseNumberLoose(raw), [raw]);

  const converted = useMemo(() => {
    if (!Number.isFinite(value)) return NaN;
    if (from === to) return value;
    if (from === "deg" && to === "rad") return (value * Math.PI) / 180;
    if (from === "rad" && to === "deg") return (value * 180) / Math.PI;
    return NaN;
  }, [value, from, to]);

  const convertedStr = useMemo(
    () => formatNumberLoose(converted, decimalSeparator),
    [converted, decimalSeparator]
  );

  const directionLabel = useMemo(() => {
    if (from === "deg" && to === "rad") return "De grados a radianes";
    if (from === "rad" && to === "deg") return "De radianes a grados";
    return "Conversión de ángulo";
  }, [from, to]);

  const formulaLatex = useMemo(() => {
    if (from === "deg" && to === "rad")
      return String.raw`\text{rad} = \text{deg}\cdot \frac{\pi}{180}`;
    if (from === "rad" && to === "deg")
      return String.raw`\text{deg} = \text{rad}\cdot \frac{180}{\pi}`;
    return null;
  }, [from, to]);

  return (
    <details
      ref={detailsRef}
      className="v2-angle-converter"
      style={{ 
        marginTop: 16,
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 16,
        background: "linear-gradient(135deg, rgba(59, 131, 246, 0.66) 0%, rgba(147, 51, 234, 0.02) 100%)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        overflow: "hidden"
      }}
      onToggle={(e) => setIsOpen(Boolean(e.currentTarget.open))}
    >
      <summary 
        style={{ 
          cursor: "pointer",
          padding: "16px 20px",
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)",
          borderBottom: isOpen ? "1px solid rgba(0, 0, 0, 1)" : "none",
          fontWeight: 600,
          fontSize: "15px",
          color: "#ffffffff",
          display: "flex",
          alignItems: "center",
          gap: 8,
          transition: "all 0.2s ease"
        }}
      >
        <span style={{ 
          fontSize: "18px",
          transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
          transition: "transform 0.2s ease"
        }}>
          📐
        </span>
        Convertir Ángulos
      </summary>

      {/* Contenedor animado */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: isOpen ? 800 : 0,
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(-8px)",
          transition: "max-height 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms ease, transform 200ms ease",
        }}
      >
        <div
          style={{
            padding: "24px",
            display: "grid",
            gap: 24,
            maxWidth: "100%",
            boxSizing: "border-box",
            overflow: "hidden"
          }}
        >

          {/* Selectores en diseño más simple y responsivo */}
          <div className="v2-angle-converter-grid">
            {/* Selector FROM */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              padding: "16px",
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              borderRadius: 16,
              color: "white",
              boxSizing: "border-box",
              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
            }}>
              <label style={{ fontSize: "12px", fontWeight: 600, color: "white" }}>
                DESDE
              </label>
              <select
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: 8,
                  color: "white",
                  padding: "8px 10px",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: "pointer",
                  outline: "none"
                }}
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              >
                <option value="deg" style={{ color: "#1f2937" }}>Grados (°)</option>
                <option value="rad" style={{ color: "#1f2937" }}>Radianes (rad)</option>
              </select>
            </div>

            {/* Flecha de conversión */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              padding: "12px"
            }}>
              
              <button
                type="button"
                onClick={() => {
                  setFrom(to);
                  setTo(from);
                }}
                style={{
                  background: "rgba(107, 114, 128, 0.1)",
                  border: "1px solid rgba(107, 114, 128, 0.2)",
                  borderRadius: 20,
                  padding: "4px 8px",
                  fontSize: "16px",
                  cursor: "pointer",
                  fontWeight: 500
                }}
              >
                🔄
              </button>
            </div>

            {/* Selector TO */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              padding: "10px",
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              borderRadius: 16,
              color: "white",
              boxSizing: "border-box",
              boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)"
            }}>
              <label style={{ fontSize: "12px", fontWeight: 600, color: "white" }}>
                HACIA
              </label>
              <select
                style={{
                  background: "rgba(255,255,255,0.2)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: 8,
                  color: "white",
                  padding: "8px 12px",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: "pointer",
                  outline: "none"
                }}
                value={to}
                onChange={(e) => setTo(e.target.value)}
              >
                <option value="deg" style={{ color: "#1f2937" }}>Grados (°)</option>
                <option value="rad" style={{ color: "#1f2937" }}>Radianes (rad)</option>
              </select>
            </div>
          </div>

          {/* Fórmula centrada */}
          {formulaLatex && (
            <div style={{
              textAlign: "center",
              padding: "10px 14px",
              background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
              borderRadius: 8,
              border: "1px solid rgba(79, 70, 229, 0.3)",
              boxShadow: "0 2px 6px rgba(79, 70, 229, 0.2)"
            }}>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.8)", marginBottom: 4, fontWeight: 600 }}>
                FÓRMULA DE CONVERSIÓN
              </div>
              <div className="custom-latex-white">
                <Latex>{`$$${formulaLatex}$$`}</Latex>
              </div>
            </div>
          )}

          {/* Inputs en diseño simétrico */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              alignItems: "start"
            }}
          >
            {/* Valor de entrada */}
            <div style={{
              padding: "14px",
              background: "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)",
              borderRadius: 16,
              border: "1px solid rgba(59, 130, 246, 0.1)",
              textAlign: "center"
            }}>
              <div style={{ 
                width: 150,
                fontSize: "12px", 
                fontWeight: 700, 
                color: "#3b82f6", 
                marginBottom: 12,
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>
                📝 Valor a Convertir
              </div>
              <input
                className="form-control"
                inputMode="decimal"
                value={raw}
                onChange={(e) => setRaw(e.target.value)}
                placeholder={from === "deg" ? "Ej: 30" : "Ej: 0,52"}
                style={{
                  width: "100%",
                  maxWidth: "150px",
                  height: 30,
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: 600,
                  border: "2px solid rgba(59, 130, 246, 0.2)",
                  borderRadius: 8,
                  padding: "12px",
                  background: "#04204dff",
                  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.02)",
                  color: "white"
                }}
              />
              <div style={{ 
                fontSize: "11px", 
                color: "#c3c8d3ff", 
                marginTop: 8,
                fontStyle: "italic"
              }}>
                {from === "deg" ? "en grados (°)" : "en radianes (rad)"}
              </div>
            </div>

            {/* Resultado */}
            <div style={{
              padding: "12px",
              background: "linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(5, 150, 105, 0.05) 100%)",
              borderRadius: 16,
              border: "1px solid rgba(16, 185, 129, 0.1)",
              textAlign: "center",
            }}>
              <div style={{ 
                fontSize: "12px", 
                fontWeight: 700, 
                color: "#10b981", 
                marginBottom: 12,
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>
                ✨ Resultado
              </div>
              <div
                style={{
                  maxWidth: "210px",
                  width: "100%",
                  height: 50,
                  padding: "12px",
                  borderRadius: 8,
                  background: convertedStr ? 
                    "linear-gradient(135deg, #10b981 0%, #059669 100%)" : 
                    "rgba(107, 114, 128, 0.1)",
                  color: convertedStr ? "white" : "#6b7280",
                  fontSize: "12px",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: convertedStr ? "0 4px 12px rgba(16, 185, 129, 0.2)" : "none",
                  transition: "all 0.3s ease",
                  boxSizing: "border-box"
                }}
              >
                {convertedStr
                  ? `${convertedStr} ${to === "deg" ? "°" : "rad"}`
                  : "—"}
              </div>
              <div style={{ 
                fontSize: "11px", 
                color: "#c3c8d3ff", 
                marginTop: 8,
                fontStyle: "italic"
              }}>
                {to === "deg" ? "en grados (°)" : "en radianes (rad)"}
              </div>
            </div>
          </div>

          {/* Botones centrados */}
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 4,
            }}
          >
            <button
              type="button"
              className="btn btn-primary"
              disabled={!convertedStr}
              onClick={() => {
                onApply?.({ valueString: convertedStr, unit: to });
                if (detailsRef.current) detailsRef.current.open = false;
              }}
              style={{
                margin: "5",
                padding: "10px 18px",
                borderRadius: 12,
                fontWeight: 600,
                fontSize: "14px",
                background: convertedStr ? 
                  "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)" : 
                  "rgba(107, 114, 128, 0.3)",
                border: "none",
                boxShadow: convertedStr ? "0 4px 12px rgba(59, 130, 246, 0.3)" : "none",
                transition: "all 0.2s ease",
                cursor: convertedStr ? "pointer" : "not-allowed"
              }}
            >
              🎯 Aplicar al Ángulo
            </button>
          </div>
        </div>
      </div>

    </details>
  );

}
