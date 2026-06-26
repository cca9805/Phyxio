import React from "react";

const LEGEND_TEXT = {
  es: {
    title: "Leyenda de colores",
    infoLabel: "Gris",
    infoDesc: "lectura neutra o contextual",
    okLabel: "Verde",
    okDesc: "coherencia física verificada",
    warningLabel: "Naranja",
    warningDesc: "aviso o error probable",
    errorLabel: "Rojo",
    errorDesc: "incoherencia o dato incompatible",
  },
  en: {
    title: "Color legend",
    infoLabel: "Gray",
    infoDesc: "neutral or contextual reading",
    okLabel: "Green",
    okDesc: "verified physical consistency",
    warningLabel: "Orange",
    warningDesc: "warning or likely mistake",
    errorLabel: "Red",
    errorDesc: "inconsistency or incompatible data",
  },
};

export default function InterpretationLegendV2({ lang = "es" }) {
  const t = LEGEND_TEXT[lang] || LEGEND_TEXT.es;

  const items = [
    { status: "info", label: t.infoLabel, desc: t.infoDesc },
    { status: "ok", label: t.okLabel, desc: t.okDesc },
    { status: "warning", label: t.warningLabel, desc: t.warningDesc },
    { status: "error", label: t.errorLabel, desc: t.errorDesc },
  ];

  return (
    <div className="interp-legend">
      <div className="interp-legend-title">{t.title}</div>
      <div className="interp-legend-grid">
        {items.map((item) => (
          <div key={item.status} className="interp-legend-item">
            <span className={`interp-legend-chip interp-${item.status}`} aria-hidden="true" />
            <div className="interp-legend-copy">
              <strong>{item.label}</strong>
              <span>{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
