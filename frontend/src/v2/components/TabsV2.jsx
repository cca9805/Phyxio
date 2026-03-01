import React from "react";

export default function TabsV2({ value, onChange }) {
  const tabs = ["Aprender", "Practicar", "Calcular"];
  return (
    <div className="btn-group mb-3">
      {tabs.map(t => (
        <button
          key={t}
          className={`btn btn-${value === t ? "primary" : "outline-primary"}`}
          onClick={() => onChange(t)}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
