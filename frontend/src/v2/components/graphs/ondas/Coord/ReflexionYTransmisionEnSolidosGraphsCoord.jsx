import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Que fraccion de la energia se refleja y se transmite en funcion del cociente de impedancias?",
    en: "What fraction of energy is reflected and transmitted as a function of impedance ratio?",
  },
  variable_control: "Z_2",
  magnitud_estrella: "coeficiente_de_reflexion_en_amplitud",
  formula: "R = (Z2-Z1)/(Z2+Z1)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "ReflexionYTransmisionEnSolidosGraphsCoord",
  title: {
    es: "Coeficientes de reflexion y transmision vs cociente de impedancias",
    en: "Reflection and transmission coefficients vs impedance ratio",
  },
  defaultParams: {
    Z1_MRayl: 46,
    Z2_MRayl: 17,
  },
  controls: [
    { id: "Z1_MRayl", label: { es: "Z₁ (MRayl)", en: "Z₁ (MRayl)" }, min: 0.1, max: 100, step: 0.1 },
    { id: "Z2_MRayl", label: { es: "Z₂ (MRayl)", en: "Z₂ (MRayl)" }, min: 0.1, max: 100, step: 0.1 },
  ],
  compute: (pNum) => {
    const Z1 = Number.isFinite(pNum.Z1_MRayl) ? pNum.Z1_MRayl : 46;
    const Z2 = Number.isFinite(pNum.Z2_MRayl) ? pNum.Z2_MRayl : 17;

    const R = (Z2 - Z1) / (Z2 + Z1);
    const Tamp = (2 * Z1) / (Z2 + Z1);
    const RE = R * R;
    const TE = 1 - RE;

    const nPoints = 100;
    const ratioMin = 0.01;
    const ratioMax = 10;
    const data = Array.from({ length: nPoints }, (_, i) => {
      const ratio = ratioMin + (i / (nPoints - 1)) * (ratioMax - ratioMin);
      const z2Pt = Z1 * ratio;
      const rPt = (z2Pt - Z1) / (z2Pt + Z1);
      const tePt = (4 * Z1 * z2Pt) / ((Z1 + z2Pt) * (Z1 + z2Pt));
      return {
        x: parseFloat(ratio.toFixed(3)),
        yR: parseFloat(rPt.toFixed(4)),
        yRE: parseFloat((rPt * rPt).toFixed(4)),
        yTE: parseFloat(tePt.toFixed(4)),
      };
    });

    return {
      data,
      extra: {
        interpretationTarget: "coeficiente_de_reflexion_en_amplitud",
        interpretationValue: R,
        graphState: {
          Z1_MRayl: Z1,
          Z2_MRayl: Z2,
          R_amp: parseFloat(R.toFixed(4)),
          T_amp: parseFloat(Tamp.toFixed(4)),
          R_E: parseFloat(RE.toFixed(4)),
          T_E: parseFloat(TE.toFixed(4)),
        },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    void graph_identity;
    void t;
    const Z1 = Number.isFinite(pNum.Z1_MRayl) ? pNum.Z1_MRayl : 46;
    const Z2 = Number.isFinite(pNum.Z2_MRayl) ? pNum.Z2_MRayl : 17;
    const R = (Z2 - Z1) / (Z2 + Z1);
    const Tamp = (2 * Z1) / (Z2 + Z1);
    const RE = R * R;
    const TE = 1 - RE;

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">R = (Z₂ − Z₁) / (Z₂ + Z₁)</div>
        <div style={{ fontSize: 13, opacity: 0.9 }}>
          Z₁ = <strong>{Z1} MRayl</strong>
          {" · "}
          Z₂ = <strong>{Z2} MRayl</strong>
        </div>
        <div style={{ fontSize: 13 }}>
          R = <strong>{R.toFixed(3)}</strong>
          {" · "}
          T = <strong>{Tamp.toFixed(3)}</strong>
          {" · "}
          R_E = <strong>{(RE * 100).toFixed(1)}%</strong>
          {" · "}
          T_E = <strong>{(TE * 100).toFixed(1)}%</strong>
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


