import React, { useMemo } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const deg2rad = (d) => (d * Math.PI) / 180;

function Slider({ value, min, max, step, onChange }) {
  return (
    <input
      type="range"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={(e) => onChange(Number(e.target.value))}
      style={{ width: "100%", accentColor: "#6366f1", cursor: "pointer" }}
    />
  );
}

function Arrow({ x, y, dx, dy, color, label, strokeWidth = 4 }) {
  const x2 = x + dx;
  const y2 = y - dy; // invertir y para que +y sea arriba
  const ang = Math.atan2(-dy, dx) * (180 / Math.PI);
  
  return (
    <g>
      <line x1={x} y1={y} x2={x2} y2={y2} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <g transform={`translate(${x2},${y2}) rotate(${ang})`}>
        <path d="M 0 0 L -12 -6 L -12 6 Z" fill={color} />
      </g>
      {label ? (
        <text 
          x={x + dx} 
          y={y - dy - 30} 
          fontSize="14" 
          fontWeight="700"
          fill={color} 
          textAnchor="middle"
        >
          {label}
        </text>
      ) : null}
    </g>
  );
}

export default function CondicionSumatoriaFuerzasGraphsDcl({ title, params, onSharedParamsChange }) {
  const p = params ?? {};
  
  // DEBUG
  console.log("[DCL] Params recibidos:", JSON.stringify(p, null, 2));

  const schema = useMemo(
    () => [
      { 
        key: "F1", 
        label: "Fuerza F1", 
        unit: "N", 
        step: 0.5, 
        default: toNum(p.F1, 50), 
        aliases: ["F", "f1"] // F de la calculadora se mapea a F1
      },
      { 
        key: "F2", 
        label: "Fuerza F2", 
        unit: "N", 
        step: 0.5, 
        default: toNum(p.F2, 40), 
        aliases: ["f2"] 
      },
      { 
        key: "theta", 
        label: "Ángulo θ", 
        unit: "°", 
        step: 1, 
        default: toNum(p.theta, 60), 
        aliases: ["angulo", "angle"] 
      },
    ],
    [p.F1, p.F2, p.theta, p.F]  // Agregar p.F a las dependencias
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;
  
  console.log("[DCL] Effective params:", JSON.stringify(ep, null, 2));

  const F1 = toNum(ep.F1, 50);
  const F2 = toNum(ep.F2, 40);
  const theta = toNum(ep.theta, 60);

  // Cálculos vectoriales
  const F1x = F1;
  const F1y = 0;
  
  const F2x = F2 * Math.cos(deg2rad(theta));
  const F2y = F2 * Math.sin(deg2rad(theta));
  
  const sumFx = F1x + F2x;
  const sumFy = F1y + F2y;
  
  const F3x = -sumFx;
  const F3y = -sumFy;
  
  const resultante = Math.hypot(sumFx, sumFy);
  const equilibrante = Math.hypot(F3x, F3y);
  
  // Verificar equilibrio (con tolerancia)
  const enEquilibrio = resultante < 0.1;

  const applyToCalculator = onSharedParamsChange
    ? () => onSharedParamsChange({ 
        F1, 
        F2, 
        theta,
        F1x,
        F1y,
        F2x,
        F2y,
        sumFx,
        sumFy,
        F3x,
        F3y,
        F3: equilibrante,
        R: resultante
      })
    : null;

  // Escala para visualización
  const scale = 2.5;
  const centerX = 425;
  const centerY = 300;

  return (
    <SvgFrame
      title={title || "DCL: Condición ΣF = 0"}
      subtitle="Sistema de fuerzas en equilibrio traslacional"
      badgeLabel="ESTADO"
      badgeValue={enEquilibrio ? "EQUILIBRIO" : "NO EQUILIBRIO"}
      controls={
        <>
          <button
            type="button"
            onClick={() => exp.startExperiment()}
            style={{
              padding: "10px 14px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(99,102,241,0.35)",
              color: "rgba(255,255,255,0.92)",
              fontWeight: 900,
              cursor: "pointer",
            }}
            title="Activa modo experimento (desacopla de la calculadora)"
          >
            Experimentar
          </button>

          <button
            type="button"
            onClick={exp.resetToCalculator}
            style={{
              padding: "10px 14px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(0,0,0,0.35)",
              color: "rgba(255,255,255,0.88)",
              fontWeight: 900,
              cursor: "pointer",
            }}
            title="Volver a seguir a la calculadora"
          >
            Seguir calculadora
          </button>

          {applyToCalculator ? (
            <button
              type="button"
              onClick={applyToCalculator}
              style={{
                padding: "10px 14px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(2,6,243,0.75)",
                color: "white",
                fontWeight: 900,
                cursor: "pointer",
              }}
              title="Enviar parámetros a la calculadora"
            >
              Aplicar
            </button>
          ) : null}
        </>
      }
      aside={
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="v2-panel m-2" style={{ background: "rgba(0,0,0,0.55)" }}>
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>
              PARÁMETROS
            </div>

            <div style={{ marginTop: 10, display: "grid", gap: 12 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>F1 (horizontal)</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{F1.toFixed(1)} N</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider 
                    value={F1} 
                    min={0} 
                    max={100} 
                    step={0.5} 
                    onChange={(v) => { 
                      exp.startExperiment(); 
                      exp.setValue("F1", v); 
                    }} 
                  />
                </div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>F2</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{F2.toFixed(1)} N</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider 
                    value={F2} 
                    min={0} 
                    max={100} 
                    step={0.5} 
                    onChange={(v) => { 
                      exp.startExperiment(); 
                      exp.setValue("F2", v); 
                    }} 
                  />
                </div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>θ (ángulo F2)</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{theta.toFixed(0)}°</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider 
                    value={theta} 
                    min={0} 
                    max={360} 
                    step={1} 
                    onChange={(v) => { 
                      exp.startExperiment(); 
                      exp.setValue("theta", v); 
                    }} 
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.55)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95, marginBottom: 8 }}>Componentes</div>
            <div style={{ fontSize: 12, opacity: 0.82, lineHeight: 1.6, fontFamily: "ui-monospace, monospace" }}>
              <div><b>F1x</b> = {F1x.toFixed(2)} N</div>
              <div><b>F1y</b> = {F1y.toFixed(2)} N</div>
              <div style={{ marginTop: 6 }}><b>F2x</b> = {F2x.toFixed(2)} N</div>
              <div><b>F2y</b> = {F2y.toFixed(2)} N</div>
              <div style={{ marginTop: 6, paddingTop: 6, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                <b>ΣFx</b> = {sumFx.toFixed(2)} N
              </div>
              <div><b>ΣFy</b> = {sumFy.toFixed(2)} N</div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.35)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95, marginBottom: 8 }}>Fuerza Equilibrante</div>
            <div style={{ fontSize: 12, opacity: 0.82, lineHeight: 1.6, fontFamily: "ui-monospace, monospace" }}>
              <div><b>F3x</b> = {F3x.toFixed(2)} N</div>
              <div><b>F3y</b> = {F3y.toFixed(2)} N</div>
              <div style={{ marginTop: 6 }}><b>|F3|</b> = {equilibrante.toFixed(2)} N</div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.35)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rápida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.82, lineHeight: 1.45 }}>
              <div>
                Para equilibrio traslacional se requiere que <b>ΣF = 0</b>
              </div>
              <div style={{ marginTop: 6 }}>
                Esto implica: <b>ΣFx = 0</b> y <b>ΣFy = 0</b>
              </div>
              <div style={{ marginTop: 6 }}>
                La fuerza equilibrante <b>F3</b> es igual y opuesta a la resultante.
              </div>
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="pointGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(99,102,241,0.8)" />
          <stop offset="100%" stopColor="rgba(99,102,241,0)" />
        </radialGradient>
      </defs>

      {/* Fondo con gradiente sutil */}
      <rect width="850" height="600" fill="url(#bgGradient)" />
      
      {/* Ejes de referencia sutiles */}
      <line 
        x1="50" y1={centerY} 
        x2="800" y2={centerY} 
        stroke="rgba(255,255,255,0.15)" 
        strokeWidth="2" 
        strokeDasharray="5,5"
      />
      <line 
        x1={centerX} y1="50" 
        x2={centerX} y2="550" 
        stroke="rgba(255,255,255,0.15)" 
        strokeWidth="2" 
        strokeDasharray="5,5"
      />
      
      {/* Etiquetas de ejes */}
      <text x="780" y={centerY - 10} fontSize="14" fill="rgba(255,255,255,0.5)" fontWeight="700">+x</text>
      <text x={centerX + 10} y="70" fontSize="14" fill="rgba(255,255,255,0.5)" fontWeight="700">+y</text>

      {/* Punto de aplicación con glow */}
      <circle cx={centerX} cy={centerY} r="30" fill="url(#pointGlow)" opacity="0.6" />
      <circle cx={centerX} cy={centerY} r="8" fill="rgba(99,102,241,0.9)" filter="url(#softGlow)" />
      <circle cx={centerX} cy={centerY} r="4" fill="rgba(255,255,255,0.95)" />

      {/* Flechas de fuerzas */}
      <Arrow 
        x={centerX} 
        y={centerY} 
        dx={F1x * scale} 
        dy={F1y * scale} 
        color="#3b82f6" 
        label={`F1 = ${F1.toFixed(1)}N`}
        strokeWidth={5}
      />
      
      <Arrow 
        x={centerX} 
        y={centerY} 
        dx={F2x * scale} 
        dy={F2y * scale} 
        color="#a855f7" 
        label={`F2 = ${F2.toFixed(1)}N`}
        strokeWidth={5}
      />
      
      <Arrow 
        x={centerX} 
        y={centerY} 
        dx={F3x * scale} 
        dy={F3y * scale} 
        color="#ef4444" 
        label={`F3 = ${equilibrante.toFixed(1)}N`}
        strokeWidth={5}
      />

      {/* Resultante (línea punteada) */}
      <line
        x1={centerX}
        y1={centerY}
        x2={centerX + sumFx * scale}
        y2={centerY - sumFy * scale}
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="3"
        strokeDasharray="8,4"
      />
      <text
        x={centerX + (sumFx * scale) / 2}
        y={centerY - (sumFy * scale) / 2 + 20}
        fontSize="13"
        fill="rgba(255,255,255,0.7)"
        fontWeight="700"
        textAnchor="middle"
      >
        R = {resultante.toFixed(1)}N
      </text>

      {/* Panel de estado */}
      <g transform="translate(80,80)">
        <rect 
          width="240" 
          height="50" 
          rx="18" 
          fill={enEquilibrio ? "rgba(34,197,94,0.20)" : "rgba(239,68,68,0.20)"} 
          stroke="rgba(255,255,255,0.12)" 
          strokeWidth="2"
        />
        <text 
          x="120" 
          y="32" 
          textAnchor="middle" 
          fontSize="14" 
          fill="rgba(255,255,255,0.92)" 
          style={{ fontWeight: 900 }}
        >
          {enEquilibrio ? "✓ Sistema en equilibrio" : "⚠ Resultante ≠ 0"}
        </text>
      </g>

      {/* Leyenda de colores */}
      <g transform="translate(600,80)">
        <rect width="200" height="90" rx="12" fill="rgba(0,0,0,0.5)" stroke="rgba(255,255,255,0.1)" />
        <text x="10" y="20" fontSize="11" fill="rgba(255,255,255,0.6)" fontWeight="700">LEYENDA</text>
        
        <line x1="10" y1="35" x2="40" y2="35" stroke="#3b82f6" strokeWidth="4" />
        <text x="50" y="39" fontSize="12" fill="rgba(255,255,255,0.85)">F1 (azul)</text>
        
        <line x1="10" y1="55" x2="40" y2="55" stroke="#a855f7" strokeWidth="4" />
        <text x="50" y="59" fontSize="12" fill="rgba(255,255,255,0.85)">F2 (morado)</text>
        
        <line x1="10" y1="75" x2="40" y2="75" stroke="#ef4444" strokeWidth="4" />
        <text x="50" y="79" fontSize="12" fill="rgba(255,255,255,0.85)">F3 (rojo)</text>
      </g>
    </SvgFrame>
  );
}
