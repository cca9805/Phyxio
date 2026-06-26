import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo varía el coeficiente de reflexión en función del contraste de impedancias mecánicas entre dos sólidos?",
    en: "How does the reflection coefficient vary as a function of mechanical impedance contrast between two solids?",
  },
  variable_control: "Z2",
  magnitud_estrella: "T_Z",
  formula: "T_Z = 2*Z2 / (Z2 + Z1)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "ImpedanciaMecanicaEnSolidosGraphsCoord",
  title: {
    es: "Reflexión y transmisión por impedancias",
    en: "Reflection and transmission by impedances",
  },
  defaultParams: {
    Z1: 22000,
    Z2: 15000,
  },
  controls: [
    { id: "Z1", label: { es: "Z₁ (kg/s)", en: "Z₁ (kg/s)" }, min: 500, max: 100000, step: 500 },
    { id: "Z2", label: { es: "Z₂ (kg/s)", en: "Z₂ (kg/s)" }, min: 500, max: 100000, step: 500 },
  ],
  compute: (pNum) => {
    const Z1 = Number.isFinite(pNum.Z1) ? pNum.Z1 : 22000;
    const Z2 = Number.isFinite(pNum.Z2) ? pNum.Z2 : 15000;

    const nPoints = 50;
    const data = Array.from({ length: nPoints }, (_, i) => {
      const ratio = 0.01 + (i / (nPoints - 1)) * 9.99;
      const Z2v = Z1 * ratio;
      const R = (Z2v - Z1) / (Z2v + Z1);
      const T = (2 * Z2v) / (Z2v + Z1);
      return { x: ratio, R, T };
    });

    const R_Z = (Z2 - Z1) / (Z2 + Z1);
    const T_Z = (2 * Z2) / (Z2 + Z1);

    return {
      data,
      extra: {
        interpretationTarget: "R_Z",
        interpretationValue: R_Z,
        graphState: { Z1, Z2, R_Z, T_Z },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    void graph_identity;
    void t;
    const Z1 = Number.isFinite(pNum.Z1) ? pNum.Z1 : 22000;
    const Z2 = Number.isFinite(pNum.Z2) ? pNum.Z2 : 15000;
    const R_Z = (Z2 - Z1) / (Z2 + Z1);
    const T_Z = (2 * Z2) / (Z2 + Z1);
    const powerTransmitted = (1 - R_Z * R_Z) * 100;

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">R = (Z₂ − Z₁) / (Z₂ + Z₁)</div>
        <div style={{ fontSize: 13, opacity: 0.9 }}>
          Z₁ = <strong>{Z1.toFixed(0)} kg/s</strong>
          {" · "}
          Z₂ = <strong>{Z2.toFixed(0)} kg/s</strong>
        </div>
        <div style={{ fontSize: 13 }}>
          R = <strong>{R_Z.toFixed(3)}</strong>
          {" · "}
          T = <strong>{T_Z.toFixed(3)}</strong>
          {" · "}
          {t("Potencia transmitida", "Transmitted power")}: <strong>{powerTransmitted.toFixed(1)}%</strong>
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          {R_Z > 0
            ? t("Medio 2 más rígido (R > 0, sin inversión de fase)", "Medium 2 stiffer (R > 0, no phase inversion)")
            : t("Medio 2 más blando (R < 0, inversión de fase)", "Medium 2 softer (R < 0, phase inversion)")}
        </div>
        {!linked ? (
          <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>
            {t("Cargar desde calculadora", "Load from calculator")}
          </button>
        ) : null}
      </div>
    );
  },
});


