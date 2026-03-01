import React from "react";

export default function GraphsCoordTemplate({ title = "Gráfico (Coord)", params = {} }) {
  return (
    <div className="rounded-2xl border p-4">
      <div className="font-semibold">{title}</div>
      <div className="text-sm opacity-70 mt-1">
        Coord: representación funcional (x(t), v(t), etc.)
      </div>

      <pre className="text-xs mt-3 overflow-auto rounded-xl bg-black/5 p-3">
        {JSON.stringify(params, null, 2)}
      </pre>

      <div className="text-sm mt-3 opacity-80">
        Placeholder listo. Implementa la curva y ejes aquí.
      </div>
    </div>
  );
}
