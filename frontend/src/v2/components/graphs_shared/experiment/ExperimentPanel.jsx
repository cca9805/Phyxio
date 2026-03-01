import React from "react";

function numOrEmpty(v) {
  return v === null || v === undefined ? "" : String(v);
}

export default function ExperimentPanel({
  schema = [],
  mode,
  startExperiment,
  resetToCalculator,
  values,
  setValue,
  onApplyToCalculator, // opcional: patch -> calculadora
  compact = false,
}) {
  return (
    <div className={`rounded-2xl border p-3 ${compact ? "" : ""}`}>
      <div className="flex items-center justify-between gap-2">
        <div className="text-sm font-semibold">Experimento</div>

        <div className="flex gap-2">
          {mode !== "experiment" ? (
            <button
              type="button"
              className="px-3 py-1 rounded-xl border text-sm"
              onClick={startExperiment}
            >
              Experimentar
            </button>
          ) : (
            <button
              type="button"
              className="px-3 py-1 rounded-xl border text-sm"
              onClick={resetToCalculator}
            >
              Volver a calculadora
            </button>
          )}

          {onApplyToCalculator ? (
            <button
              type="button"
              className="px-3 py-1 rounded-xl border text-sm"
              onClick={() => onApplyToCalculator(values)}
              disabled={mode !== "experiment"}
              title={mode !== "experiment" ? "Activa Experimentar para aplicar" : ""}
            >
              Aplicar a calculadora
            </button>
          ) : null}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
        {schema.map((s) => (
          <label key={s.key} className="rounded-xl bg-black/5 p-2">
            <div className="text-xs opacity-75 flex items-center justify-between gap-2">
              <span className="font-semibold">{s.label || s.key}</span>
              <span className="opacity-70">{s.unit || ""}</span>
            </div>

            <input
              className="mt-1 w-full rounded-lg border px-2 py-1 text-sm bg-transparent"
              type="number"
              step={s.step ?? "any"}
              min={s.min}
              max={s.max}
              value={numOrEmpty(values?.[s.key])}
              onChange={(e) => {
                const raw = e.target.value;
                const n = raw === "" ? null : Number(String(raw).replace(",", "."));
                setValue(s.key, Number.isFinite(n) ? n : null);
              }}
              disabled={mode !== "experiment"}
            />
          </label>
        ))}
      </div>

      {mode !== "experiment" ? (
        <div className="text-xs opacity-65 mt-2">
          Los valores siguen a la calculadora. Pulsa <b>Experimentar</b> para editar aquí.
        </div>
      ) : (
        <div className="text-xs opacity-65 mt-2">
          Estás en modo experimento: estos valores afectan al gráfico sin tocar la calculadora.
        </div>
      )}
    </div>
  );
}
