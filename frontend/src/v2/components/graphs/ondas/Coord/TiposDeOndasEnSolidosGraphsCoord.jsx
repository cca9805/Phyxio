import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const graph_identity = {
  pregunta_principal: {
    es: "Como dependen las velocidades de ondas longitudinales, transversales y superficiales de las propiedades elasticas del solido?",
    en: "How do longitudinal, transverse and surface wave speeds depend on the elastic properties of the solid?",
  },
  variable_control: "nu",
  magnitud_estrella: "velocidad_de_onda_longitudinal_p",
  formula: "v_L(E, nu, rho), v_T(G, rho), v_R(v_T, nu)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "TiposDeOndasEnSolidosGraphsCoord",
  title: {
    es: "Velocidades P, S y Rayleigh en un solido",
    en: "P, S and Rayleigh speeds in a solid",
  },
  defaultParams: {
    E_GPa: 200,
    G_GPa: 80,
    rho: 7800,
    nu: 0.29,
  },
  controls: [
    { id: "E_GPa", label: { es: "E (GPa)", en: "E (GPa)" }, min: 1, max: 450, step: 1 },
    { id: "G_GPa", label: { es: "G (GPa)", en: "G (GPa)" }, min: 0.5, max: 180, step: 0.5 },
    { id: "rho", label: { es: "rho (kg/m3)", en: "rho (kg/m3)" }, min: 500, max: 20000, step: 100 },
    { id: "nu", label: { es: "nu", en: "nu" }, min: 0, max: 0.49, step: 0.01 },
  ],
  compute: (pNum) => {
    const E = (Number.isFinite(pNum.E_GPa) ? pNum.E_GPa : 200) * 1e9;
    const G = (Number.isFinite(pNum.G_GPa) ? pNum.G_GPa : 80) * 1e9;
    const rho = Number.isFinite(pNum.rho) ? Math.max(1, pNum.rho) : 7800;
    const nu = Number.isFinite(pNum.nu) ? Math.max(0, Math.min(0.49, pNum.nu)) : 0.29;

    const data = Array.from({ length: 50 }, (_, i) => {
      const xNu = i / 100;
      const denom = rho * (1 + xNu) * (1 - 2 * xNu);
      const vL = Math.sqrt((E * (1 - xNu)) / denom);
      const vT = Math.sqrt(G / rho);
      const vR = vT * (0.862 + 1.14 * xNu) / (1 + xNu);
      return { nu: xNu, vL, vT, vR };
    });

    const vL = Math.sqrt((E * (1 - nu)) / (rho * (1 + nu) * (1 - 2 * nu)));
    const vT = Math.sqrt(G / rho);
    const vR = vT * (0.862 + 1.14 * nu) / (1 + nu);

    return {
      data,
      extra: {
        interpretationTarget: "velocidad_de_onda_longitudinal_p",
        interpretationValue: vL,
        graphState: {
          modulo_de_young: E,
          modulo_de_corte: G,
          rho,
          nu,
          velocidad_de_onda_longitudinal_p: vL,
          velocidad_de_onda_transversal_s: vT,
          velocidad_de_onda_de_rayleigh: vR,
        },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator, lang }) => {
    void graph_identity;
    void data;
    const uiLang = lang === "en" || pNum._lang === "en" ? "en" : "es";
    const tt = (es, en) => (uiLang === "en" ? en : es);

    const E = (Number.isFinite(pNum.E_GPa) ? pNum.E_GPa : 200) * 1e9;
    const G = (Number.isFinite(pNum.G_GPa) ? pNum.G_GPa : 80) * 1e9;
    const rho = Number.isFinite(pNum.rho) ? Math.max(1, pNum.rho) : 7800;
    const nu = Number.isFinite(pNum.nu) ? Math.max(0, Math.min(0.49, pNum.nu)) : 0.29;
    const vL = Math.sqrt((E * (1 - nu)) / (rho * (1 + nu) * (1 - 2 * nu)));
    const vT = Math.sqrt(G / rho);
    const vR = vT * (0.862 + 1.14 * nu) / (1 + nu);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">{tt("Comparacion de tipos de onda", "Wave type comparison")}</div>
        <div style={{ fontSize: 13, opacity: 0.9 }}>
          E = <strong>{(E / 1e9).toFixed(0)} GPa</strong>{" · "}
          G = <strong>{(G / 1e9).toFixed(1)} GPa</strong>{" · "}
          rho = <strong>{rho.toFixed(0)} kg/m3</strong>{" · "}
          nu = <strong>{nu.toFixed(2)}</strong>
        </div>
        <div style={{ display: "grid", gap: 4, fontSize: 13 }}>
          <span style={{ color: "#2563eb" }}>v_L = <strong>{vL.toFixed(0)} m/s</strong></span>
          <span style={{ color: "#16a34a" }}>v_T = <strong>{vT.toFixed(0)} m/s</strong></span>
          <span style={{ color: "#d97706" }}>v_R = <strong>{vR.toFixed(0)} m/s</strong></span>
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          {tt("En un solido isotropo estable se espera v_L > v_T > v_R.", "In a stable isotropic solid, v_L > v_T > v_R is expected.")}
        </div>
        {!linked ? (
          <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>
            {tt("Cargar desde calculadora", "Load from calculator")}
          </button>
        ) : null}
      </div>
    );
  },
});


