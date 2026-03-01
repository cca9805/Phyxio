import React, { useMemo, useRef, useState } from "react";


function parseNumberLoose(v) {
  if (v == null) return NaN;
  const s = String(v).trim();
  if (!s) return NaN;
  // permite coma decimal
  const n = Number(s.replace(",", "."));
  return Number.isFinite(n) ? n : NaN;
}

function formatNumberLoose(n, decimalSep = ",") {
  if (!Number.isFinite(n)) return "";
  let s = String(n);

  // Evita notación científica rara cuando no hace falta
  if (!/e/i.test(s) && s.includes(".")) {
    // recorta ceros finales
    s = s.replace(/0+$/, "").replace(/\.$/, "");
  }

  if (decimalSep === ",") s = s.replace(".", ",");
  return s;
}

/**
 * Conversor reutilizable grados <-> radianes basado en <details>.
 *
 * Props:
 * - defaultFrom: "deg" | "rad"
 * - defaultTo: "deg" | "rad"
 * - decimalSeparator: "," | "."
 * - onApply: ({ valueString, unit }) => void
 */
export default function AngleConverterDetails({
  defaultFrom = "deg",
  defaultTo = "rad",
  decimalSeparator = ",",
  onApply,
}) {
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

  const detailsRef = useRef(null);


  return (
    <details 
      ref={detailsRef}
      style={{ marginTop: 10 }}
      onToggle={(e) => {
        if (e.target.open) {
          setRaw("");
        }
      }}
    >
      <summary style={{ cursor: "pointer" }}>Convertir</summary>

      <div style={{ marginTop: 10, display: "grid", gap: 10 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
          <label className="muted" style={{ minWidth: 28 }}>De</label>
          <select
            className="v2-select"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            style={{ minWidth: 120 }}
          >
            <option value="deg">Grados (°)</option>
            <option value="rad">Radianes (rad)</option>
          </select>

          <label className="muted" style={{ minWidth: 18 }}>a</label>
          <select
            className="v2-select"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            style={{ minWidth: 120 }}
          >
            <option value="deg">Grados (°)</option>
            <option value="rad">Radianes (rad)</option>
          </select>
        </div>

        <div style={{ display: "grid", gap: 6 }}>
          <div className="muted">Valor</div>
          <input
            className="v2-input"
            inputMode="decimal"
            value={raw}
            onChange={(e) => setRaw(e.target.value)}
            placeholder={from === "deg" ? "Ej: 30" : "Ej: 0,52"}
          />
        </div>

        <div style={{ display: "grid", gap: 6 }}>
          <div className="muted">Resultado</div>
          <div
            style={{
              padding: "10px 12px",
              borderRadius: 12,
              background: "rgba(0,0,0,0.04)",
              fontSize: 16,
            }}
          >
            {convertedStr
              ? `${convertedStr} ${to === "deg" ? "°" : "rad"}`
              : "—"}
          </div>

          <div className="muted" style={{ fontSize: 12 }}>
            {from === "deg" && to === "rad"
              ? "rad = deg · π / 180"
              : from === "rad" && to === "deg"
                ? "deg = rad · 180 / π"
                : "—"}
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button
            type="button"
            className="btn btn-sm btn-primary"
            disabled={!convertedStr}
            onClick={() => {
              onApply?.({ valueString: convertedStr, unit: to });
              if (detailsRef.current) {
                detailsRef.current.open = false
              }
            }}
            
            title="Copia el resultado al ángulo principal"
          >
            Aplicar al ángulo
          </button>

          <button
            type="button"
            className="btn btn-sm btn-light"
            onClick={() => {
              // swap rápido
              setFrom(to);
              setTo(from);
            }}
          >
            Intercambiar
          </button>
        </div>
      </div>
    </details>
  );
}
