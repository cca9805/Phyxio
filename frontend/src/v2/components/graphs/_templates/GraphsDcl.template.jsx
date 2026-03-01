import React from "react";

export default function GraphsDclTemplate({ title = "DCL (Dcl)", params = {} }) {
  return (
    <div className="rounded-2xl border p-4">
      <div className="font-semibold">{title}</div>
      <div className="text-sm opacity-70 mt-1">
        Dcl: diagrama de cuerpo libre (fuerzas y ejes)
      </div>

      <div className="mt-3 rounded-xl bg-black/5 p-3">
        <svg viewBox="0 0 300 160" className="w-full h-auto">
          <circle cx="150" cy="90" r="18" fill="none" stroke="currentColor" opacity="0.35" />
          <line x1="150" y1="72" x2="150" y2="30" stroke="currentColor" opacity="0.55" />
          <text x="156" y="42" fontSize="10" fill="currentColor" opacity="0.65">F</text>
          <line x1="168" y1="90" x2="250" y2="90" stroke="currentColor" opacity="0.55" />
          <text x="232" y="84" fontSize="10" fill="currentColor" opacity="0.65">F</text>
        </svg>
      </div>

      <pre className="text-xs mt-3 overflow-auto rounded-xl bg-black/5 p-3">
        {JSON.stringify(params, null, 2)}
      </pre>
    </div>
  );
}
