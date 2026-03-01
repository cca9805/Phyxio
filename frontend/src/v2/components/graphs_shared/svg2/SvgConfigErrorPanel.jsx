import React from "react";

export default function SvgConfigErrorPanel({ title = "SVG config inválido", details }) {
  return (
    <div
      className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm"
      style={{ lineHeight: 1.4 }}
    >
      <div className="font-semibold text-red-400">{title}</div>
      {details ? (
        <pre className="mt-2 whitespace-pre-wrap text-red-200/90">
          {details}
        </pre>
      ) : (
        <div className="mt-2 text-red-200/90">
          Revisa la consola para más detalles.
        </div>
      )}
    </div>
  );
}
