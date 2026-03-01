import React from "react";

export default function GraphsSvgTemplate({ title = "Esquema (Svg)", params = {} }) {
  return (
    <div className="rounded-2xl border p-4">
      <div className="font-semibold">{title}</div>
      <div className="text-sm opacity-70 mt-1">
        Svg: esquema geométrico/físico para comprensión
      </div>

      <div className="mt-3 rounded-xl bg-black/5 p-3">
        <svg viewBox="0 0 300 160" className="w-full h-auto">
          <rect x="10" y="10" width="280" height="140" rx="12" fill="none" stroke="currentColor" opacity="0.3" />
          <text x="150" y="85" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.6">
            SVG placeholder
          </text>
        </svg>
      </div>

      <pre className="text-xs mt-3 overflow-auto rounded-xl bg-black/5 p-3">
        {JSON.stringify(params, null, 2)}
      </pre>
    </div>
  );
}
