import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo varía la velocidad de fase longitudinal y transversal en función de la densidad del sólido?",
    en: "How does longitudinal and transverse phase velocity vary as a function of solid density?",
  },
  variable_control: "rho",
  magnitud_estrella: "lambda",
  formula: "v_fase = sqrt(E_young / rho)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "IntroduccionGraphsCoord",
  title: {
    es: "Velocidad de onda en sólidos",
    en: "Wave speed in solids",
  },
  defaultParams: {
    E_young: 200,
    G_mod: 80,
    rho: 7800,
    f: 100000,
  },
  controls: [
    { id: "E_young", label: { es: "E (GPa)", en: "E (GPa)" }, min: 1, max: 500, step: 1 },
    { id: "G_mod", label: { es: "G (GPa)", en: "G (GPa)" }, min: 1, max: 200, step: 1 },
    { id: "rho", label: { es: "ρ (kg/m³)", en: "ρ (kg/m³)" }, min: 500, max: 25000, step: 100 },
    { id: "f", label: { es: "f (Hz)", en: "f (Hz)" }, min: 100, max: 10000000, step: 1000 },
  ],
  compute: (pNum) => {
    const E = (Number.isFinite(pNum.E_young) ? pNum.E_young : 200) * 1e9;
    const G = (Number.isFinite(pNum.G_mod) ? pNum.G_mod : 80) * 1e9;
    const rhoVal = Number.isFinite(pNum.rho) ? pNum.rho : 7800;
    const freq = Number.isFinite(pNum.f) ? pNum.f : 100000;

    const nPoints = 50;
    const data = Array.from({ length: nPoints }, (_, i) => {
      const r = 500 + (i / (nPoints - 1)) * 24500;
      const vL = Math.sqrt(E / r);
      const vT = Math.sqrt(G / r);
      return { x: r, vL, vT };
    });

    const vL = Math.sqrt(E / rhoVal);
    const vT = Math.sqrt(G / rhoVal);
    const lambdaL = vL / freq;
    const lambdaT = vT / freq;

    return {
      data,
      extra: {
        interpretationTarget: "v_fase",
        interpretationValue: vL,
        graphState: { E_young: E / 1e9, G_mod: G / 1e9, rho: rhoVal, f: freq, v_fase: vL, vT, lambdaL, lambdaT },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    void graph_identity;
    void t;
    const E = (Number.isFinite(pNum.E_young) ? pNum.E_young : 200) * 1e9;
    const G = (Number.isFinite(pNum.G_mod) ? pNum.G_mod : 80) * 1e9;
    const rhoVal = Number.isFinite(pNum.rho) ? pNum.rho : 7800;
    const freq = Number.isFinite(pNum.f) ? pNum.f : 100000;

    const vL = Math.sqrt(E / rhoVal);
    const vT = Math.sqrt(G / rhoVal);
    const lambdaL = vL / freq;
    const lambdaT = vT / freq;

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">v = √(E / ρ)</div>
        <div style={{ fontSize: 13, opacity: 0.9 }}>
          E = <strong>{(E / 1e9).toFixed(0)} GPa</strong>
          {" · "}
          G = <strong>{(G / 1e9).toFixed(0)} GPa</strong>
          {" · "}
          ρ = <strong>{rhoVal.toFixed(0)} kg/m³</strong>
        </div>
        <div style={{ fontSize: 13 }}>
          v_L = <strong>{vL.toFixed(0)} m/s</strong>
          {" · "}
          v_T = <strong>{vT.toFixed(0)} m/s</strong>
        </div>
        <div style={{ fontSize: 13 }}>
          λ_L = <strong>{(lambdaL * 1000).toFixed(2)} mm</strong>
          {" · "}
          λ_T = <strong>{(lambdaT * 1000).toFixed(2)} mm</strong>
          {" ("}f = {freq >= 1e6 ? (freq / 1e6).toFixed(1) + " MHz" : (freq / 1e3).toFixed(1) + " kHz"}{")"}
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          {vL > vT
            ? t("v_L > v_T: coherente (longitudinal siempre mayor)", "v_L > v_T: coherent (longitudinal always greater)")
            : t("⚠ v_T ≥ v_L: revisar módulos elásticos", "⚠ v_T ≥ v_L: check elastic moduli")}
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


