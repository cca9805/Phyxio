// src/v2/components/graphs/_base/GraphCard.jsx
import React from "react";

export default function GraphCard({ title, subtitle, children, footer }) {
  return (
    <div className="rounded-2xl border p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-semibold">{title || "Gráfica"}</div>
          {subtitle ? <div className="text-sm opacity-70 mt-1">{subtitle}</div> : null}
        </div>
      </div>

      <div className="mt-4">{children}</div>

      {footer ? <div className="mt-4 text-xs opacity-70">{footer}</div> : null}
    </div>
  );
}
