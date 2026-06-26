import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Como se relacionan los modulos elasticos de un solido isotropo al variar una de sus constantes independientes?",
    en: "How are the elastic moduli of an isotropic solid related when one independent constant changes?",
  },
  variable_control: "nu_poisson",
  magnitud_estrella: "nu_poisson",
  formula: "G = E/(2(1+nu)), K = E/(3(1-2nu))",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "RelacionEntreModulosElasticosGraphsCoord",
  title: {
    es: "Cocientes de modulos elasticos vs coeficiente de Poisson",
    en: "Elastic moduli ratios vs Poisson ratio",
  },
  defaultParams: {
    E_GPa: 200,
    nu: 0.3,
  },
  controls: [
    { id: "E_GPa", label: { es: "E (GPa)", en: "E (GPa)" }, min: 0.1, max: 1200, step: 0.1 },
    { id: "nu", label: { es: "ν", en: "ν" }, min: -0.99, max: 0.499, step: 0.001 },
  ],
  compute: (pNum) => {
    const E = Number.isFinite(pNum.E_GPa) ? pNum.E_GPa : 200;
    const nuVal = Number.isFinite(pNum.nu) ? Math.max(-0.99, Math.min(0.499, pNum.nu)) : 0.3;

    const G = E / (2 * (1 + nuVal));
    const denom = 1 - 2 * nuVal;
    const K = denom > 0.001 ? E / (3 * denom) : 9999;
    const lam = denom > 0.001 ? (E * nuVal) / ((1 + nuVal) * denom) : 9999;

    const nPoints = 150;
    const nuMin = -0.99;
    const nuMax = 0.499;
    const data = Array.from({ length: nPoints }, (_, i) => {
      const n = nuMin + (i / (nPoints - 1)) * (nuMax - nuMin);
      const d = 1 - 2 * n;
      const ge = 1 / (2 * (1 + n));
      const ke = d > 0.001 ? 1 / (3 * d) : null;
      const le = d > 0.001 ? n / ((1 + n) * d) : null;
      return {
        x: parseFloat(n.toFixed(4)),
        yGE: parseFloat(ge.toFixed(5)),
        yKE: ke !== null ? parseFloat(Math.min(ke, 10).toFixed(5)) : null,
        yLamE: le !== null ? parseFloat(Math.min(Math.max(le, -10), 10).toFixed(5)) : null,
      };
    });

    return {
      data,
      extra: {
        interpretationTarget: "nu_poisson",
        interpretationValue: nuVal,
        graphState: {
          E_GPa: E,
          nu_poisson: nuVal,
          G_shear_GPa: parseFloat(G.toFixed(2)),
          K_bulk_GPa: parseFloat(Math.min(K, 9999).toFixed(2)),
          lambda_lame_GPa: parseFloat(Math.min(Math.abs(lam), 9999).toFixed(2)) * Math.sign(lam),
          ratio_G_E: parseFloat((G / E).toFixed(5)),
          ratio_K_E: parseFloat((Math.min(K, 9999) / E).toFixed(5)),
        },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    void graph_identity;
    void t;
    const E = Number.isFinite(pNum.E_GPa) ? pNum.E_GPa : 200;
    const nuVal = Number.isFinite(pNum.nu) ? Math.max(-0.99, Math.min(0.499, pNum.nu)) : 0.3;
    const G = E / (2 * (1 + nuVal));
    const d = 1 - 2 * nuVal;
    const K = d > 0.001 ? E / (3 * d) : Infinity;
    const lam = d > 0.001 ? (E * nuVal) / ((1 + nuVal) * d) : Infinity;

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">G, K, λ = f(E, ν)</div>
        <div style={{ fontSize: 13, opacity: 0.9 }}>
          E = <strong>{E} GPa</strong>
          {" · "}
          ν = <strong>{nuVal.toFixed(3)}</strong>
        </div>
        <div style={{ fontSize: 13 }}>
          G = <strong>{G.toFixed(1)} GPa</strong>
          {" · "}
          K = <strong>{K === Infinity ? "∞" : K.toFixed(1)} GPa</strong>
          {" · "}
          λ = <strong>{lam === Infinity ? "∞" : lam.toFixed(1)} GPa</strong>
        </div>
        <div style={{ fontSize: 12, opacity: 0.8 }}>
          G/E = {(G / E).toFixed(3)}
          {" · "}
          K/E = {K === Infinity ? "∞" : (K / E).toFixed(3)}
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


