import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Como se relacionan los modulos elasticos de un solido isotropo con su respuesta mecanica?",
    en: "How do the elastic moduli of an isotropic solid relate to its mechanical response?",
  },
  variable_control: "nu_poisson",
  magnitud_estrella: "modulo_de_young",
  formula: "E = sigma / epsilon; E = 2G(1+nu)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "PropiedadesElasticasDelSolidoGraphsCoord",
  title: {
    es: "Relacion entre modulos elasticos",
    en: "Relationship between elastic moduli",
  },
  defaultParams: {
    E_GPa: 200,
    nu_poisson: 0.30,
    sigma_MPa: 150,
  },
  controls: [
    { id: "E_GPa", label: { es: "E (GPa)", en: "E (GPa)" }, min: 0.1, max: 1200, step: 1 },
    { id: "nu_poisson", label: { es: "nu", en: "nu" }, min: -0.99, max: 0.49, step: 0.01 },
    { id: "sigma_MPa", label: { es: "sigma (MPa)", en: "sigma (MPa)" }, min: 1, max: 1000, step: 1 },
  ],
  compute: (pNum) => {
    const E_GPa = Number.isFinite(pNum.E_GPa) ? pNum.E_GPa : 200;
    const nu = Number.isFinite(pNum.nu_poisson) ? pNum.nu_poisson : 0.3;
    const sigma_MPa = Number.isFinite(pNum.sigma_MPa) ? pNum.sigma_MPa : 150;

    const E = E_GPa * 1e9;
    const G = E / (2 * (1 + nu));
    const K = E / (3 * (1 - 2 * nu));
    const sigma = sigma_MPa * 1e6;
    const epsilon = sigma / E;
    const epsilon_transv = -nu * epsilon;
    const G_GPa = G / 1e9;
    const K_GPa = K / 1e9;

    const nPoints = 80;
    const nuMin = -0.5;
    const nuMax = 0.499;
    const data = Array.from({ length: nPoints }, (_, i) => {
      const nuPt = nuMin + (i / (nPoints - 1)) * (nuMax - nuMin);
      const Gpt = E / (2 * (1 + nuPt));
      const Kpt = E / (3 * (1 - 2 * nuPt));
      return {
        x: parseFloat(nuPt.toFixed(3)),
        yG: parseFloat((Gpt / 1e9).toFixed(1)),
        yK: parseFloat((Kpt / 1e9).toFixed(1)),
      };
    });

    return {
      data,
      extra: {
        interpretationTarget: "modulo_de_young",
        interpretationValue: E,
        graphState: {
          E_GPa,
          G_GPa: parseFloat(G_GPa.toFixed(1)),
          K_GPa: parseFloat(K_GPa.toFixed(1)),
          nu,
          sigma_MPa,
          epsilon: parseFloat(epsilon.toExponential(3)),
          epsilon_transv: parseFloat(epsilon_transv.toExponential(3)),
        },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    void graph_identity;
    void t;
    const E_GPa = Number.isFinite(pNum.E_GPa) ? pNum.E_GPa : 200;
    const nu = Number.isFinite(pNum.nu_poisson) ? pNum.nu_poisson : 0.3;
    const sigma_MPa = Number.isFinite(pNum.sigma_MPa) ? pNum.sigma_MPa : 150;
    const G_GPa = E_GPa / (2 * (1 + nu));
    const K_GPa = E_GPa / (3 * (1 - 2 * nu));
    const epsilon = (sigma_MPa * 1e6) / (E_GPa * 1e9);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">E = 2G(1 + nu)</div>
        <div style={{ fontSize: 13, opacity: 0.9 }}>
          E = <strong>{E_GPa} GPa</strong>
          {" · "}
          G = <strong>{G_GPa.toFixed(1)} GPa</strong>
          {" · "}
          K = <strong>{K_GPa.toFixed(1)} GPa</strong>
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          nu = {nu.toFixed(2)} · sigma = {sigma_MPa} MPa · epsilon = {epsilon.toExponential(2)}
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


