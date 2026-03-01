import React from "react";

export default function GravedadOverlay({ g = 9.81 }) {
  return (
    <div className="hidden md:flex gap-4 pointer-events-none">
      <div className="rounded-2xl p-4 flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg border-l-4 border-l-sky-400">
        <iconify-icon
          icon="lucide:gauge"
          className="text-2xl text-sky-400"
        />

        <div>
          <p className="text-[10px] uppercase tracking-widest text-slate-500">
            Gravedad
          </p>
          <p className="font-mono font-bold">
            {Number(g).toFixed(2)} m/s²
          </p>
        </div>
      </div>
    </div>
  );
}
