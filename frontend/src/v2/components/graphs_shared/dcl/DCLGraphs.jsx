import React, { useEffect, useMemo, useState } from "react";
import DCLBasic from "./DCLBasic";
import DCLAdvanced from "./DCLAdvanced";
import { sumForces, toNum } from "./dclMath";
import {
  defaultSceneBasic,
  defaultSceneAdvanced,
  exportScene,
  importScene,
  addForce,
  removeForce,
  renameForcesSequential,
  setReference,
} from "./dclSerialize";

function normalizeIncomingParams({ params, paramsFromCalculator, sharedParams }) {
  return params ?? paramsFromCalculator ?? sharedParams ?? {};
}

function fmt(n, d = 4) {
  if (!Number.isFinite(n)) return "—";
  return Number(n).toFixed(d);
}

export default function DCLGraphs({
  // compat entrada:
  params,
  paramsFromCalculator,
  sharedParams,

  // salida:
  onSharedParamsChange,

  // permisos:
  allowAdvanced = true,

  // modo inicial:
  defaultMode = "basic",
}) {
  const paramsIn = useMemo(
    () => normalizeIncomingParams({ params, paramsFromCalculator, sharedParams }),
    [params, paramsFromCalculator, sharedParams]
  );

  // linked: si true, emite Rx/Ry a la calculadora
  const [linked, setLinked] = useState(true);

  // selector básico/avanzado
  const [mode, setMode] = useState(() => (defaultMode === "advanced" ? "advanced" : "basic"));

  // escena
  const [scene, setScene] = useState(() => (mode === "advanced" ? defaultSceneAdvanced() : defaultSceneBasic()));

  // Mantener consistencia si cambias mode
  useEffect(() => {
    setScene((prev) => {
      const nextMode = mode === "advanced" ? "advanced" : "basic";
      if (prev?.mode === nextMode) return prev;
      return nextMode === "advanced" ? defaultSceneAdvanced() : defaultSceneBasic();
    });
  }, [mode]);

  // Cálculo
  const forces = Array.isArray(scene?.forces) ? scene.forces : [];
  const out = useMemo(() => sumForces(forces), [forces]);

  // Emitir a calculadora (solo si linked)
  useEffect(() => {
    if (!linked) return;
    if (typeof onSharedParamsChange !== "function") return;

    // Emitimos Rx/Ry/R (R opcional, pero útil)
    onSharedParamsChange({
      Rx: out.Rx,
      Ry: out.Ry,
      R: out.R,
    });
  }, [linked, out.Rx, out.Ry, out.R, onSharedParamsChange]);

  // "Cargar desde calculadora": lo usamos como referencia visual
  const loadFromCalculator = () => {
    const Rx = toNum(paramsIn?.Rx, NaN);
    const Ry = toNum(paramsIn?.Ry, NaN);
    if (!Number.isFinite(Rx) || !Number.isFinite(Ry)) return;

    setScene((s) => setReference(s, { Rx, Ry }));
  };

  // Export/import UI
  const [ioOpen, setIoOpen] = useState(false);
  const [ioText, setIoText] = useState("");

  const doExport = () => {
    setIoText(exportScene(scene));
    setIoOpen(true);
  };

  const doImport = () => {
    try {
      const imported = importScene(ioText);
      // si el import trae otro modo, lo respetamos
      setMode(imported.mode === "advanced" ? "advanced" : "basic");
      setScene(imported);
      setIoOpen(false);
    } catch (e) {
      alert("JSON inválido o no compatible.");
    }
  };

  const canAdvanced = allowAdvanced;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {/* Header + controles generales */}
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">DCL (Diagrama de Cuerpo Libre)</div>

        {/* Segmented control */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10, alignItems: "center" }}>
          <div className="segmented" style={{ display: "inline-flex", gap: 6 }}>
            <button
              type="button"
              className={`btn btn-sm ${mode === "basic" ? "btn-primary" : "btn-light"}`}
              onClick={() => setMode("basic")}
            >
              Básico
            </button>
            <button
              type="button"
              className={`btn btn-sm ${mode === "advanced" ? "btn-primary" : "btn-light"}`}
              onClick={() => {
                if (!canAdvanced) return;
                setMode("advanced");
              }}
              disabled={!canAdvanced}
              title={!canAdvanced ? "Disponible en nivel Universidad (o si el profesor lo habilita)." : ""}
            >
              Avanzado
            </button>
          </div>

          {/* Link */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginLeft: "auto" }}>
            <button
              type="button"
              className={`btn btn-sm ${linked ? "btn-primary" : "btn-light"}`}
              onClick={() => setLinked(true)}
              title="Envía Rx/Ry a la calculadora"
            >
              🔗 Seguir calculadora
            </button>
            <button
              type="button"
              className={`btn btn-sm ${!linked ? "btn-primary" : "btn-light"}`}
              onClick={() => setLinked(false)}
              title="No envía valores a la calculadora"
            >
              🧪 Modo experimento
            </button>

            <button
              type="button"
              className="btn btn-sm btn-light"
              onClick={loadFromCalculator}
              title="Carga Rx/Ry actuales de la calculadora como referencia visual"
            >
              ↩️ Ref desde calculadora
            </button>
          </div>
        </div>

        {/* Acciones de escena */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
          <button
            type="button"
            className="btn btn-sm btn-light"
            onClick={() => setScene((s) => addForce(s))}
          >
            ➕ Añadir fuerza
          </button>
          <button
            type="button"
            className="btn btn-sm btn-light"
            onClick={() => setScene((s) => renameForcesSequential(s))}
            title="Renombra como F1, F2, F3..."
          >
            🏷️ Renumerar etiquetas
          </button>
          <button
            type="button"
            className="btn btn-sm btn-light"
            onClick={() => setScene(mode === "advanced" ? defaultSceneAdvanced() : defaultSceneBasic())}
          >
            ♻️ Reset escena
          </button>

          <button type="button" className="btn btn-sm btn-light" onClick={doExport}>
            ⬇️ Exportar JSON
          </button>
          <button
            type="button"
            className="btn btn-sm btn-light"
            onClick={() => {
              setIoText("");
              setIoOpen(true);
            }}
          >
            ⬆️ Importar JSON
          </button>
        </div>

        <div className="muted" style={{ marginTop: 10, display: "grid", gap: 4 }}>
          <div>Rx = <b>{fmt(out.Rx, 6)} N</b></div>
          <div>Ry = <b>{fmt(out.Ry, 6)} N</b></div>
          <div>R = <b>{fmt(out.R, 6)} N</b></div>
        </div>
      </div>

      {/* IO modal simple */}
      {ioOpen ? (
        <div className="v2-card" style={{ padding: 12 }}>
          <div className="v2-card-title">Export / Import (JSON)</div>
          <textarea
            className="form-control"
            style={{ minHeight: 220, fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}
            value={ioText}
            onChange={(e) => setIoText(e.target.value)}
            placeholder="Pega aquí el JSON para importar, o copia el export."
          />
          <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
            <button type="button" className="btn btn-sm btn-primary" onClick={doImport}>
              Importar
            </button>
            <button
              type="button"
              className="btn btn-sm btn-light"
              onClick={() => {
                try {
                  navigator.clipboard?.writeText(ioText);
                } catch {}
              }}
              title="Copia al portapapeles si el navegador lo permite"
            >
              📋 Copiar
            </button>
            <button type="button" className="btn btn-sm btn-light" onClick={() => setIoOpen(false)}>
              Cerrar
            </button>
          </div>
        </div>
      ) : null}

      {/* Render modo */}
      {mode === "advanced" ? (
        <DCLAdvanced
          scene={scene}
          onSceneChange={setScene}
          disabled={false}
          showReference
        />
      ) : (
        <DCLBasic
          scene={scene}
          onSceneChange={setScene}
          disabled={false}
          showReference
        />
      )}

      {/* Botón borrar individual (lo pongo abajo para no saturar la tabla) */}
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Gestión rápida</div>
        <div className="muted" style={{ marginTop: 6 }}>
          Eliminar una fuerza concreta:
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
          {forces.map((f) => (
            <button
              key={f.id}
              type="button"
              className="btn btn-sm btn-light"
              onClick={() => setScene((s) => removeForce(s, f.id))}
            >
              🗑️ {f.label || f.id}
            </button>
          ))}
          {forces.length === 0 ? <span className="muted">No hay fuerzas.</span> : null}
        </div>
      </div>
    </div>
  );
}
