import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo se calcula la profundidad de un defecto a partir del tiempo de vuelo de un pulso ultrasónico?",
    en: "How is the depth of a defect calculated from the time of flight of an ultrasonic pulse?",
  },
  variable_control: "t_vuelo",
  magnitud_estrella: "v_us",
  formula: "d_defecto = v_us * t_vuelo / 2",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "AplicacionesUltrasonidosYEnsayosGraphsCoord",
  title: {
    es: "Ensayo ultrasónico",
    en: "Ultrasonic testing",
  },
  defaultParams: {
    v_us: 5900,
    t_vuelo_us: 8.5,
    rho_mat: 7800,
    thickness_mm: 25,
  },
  controls: [
    { id: "v_us", label: { es: "v (m/s)", en: "v (m/s)" }, min: 1000, max: 7000, step: 50 },
    { id: "t_vuelo_us", label: { es: "t_vuelo (µs)", en: "t_flight (µs)" }, min: 0.5, max: 100, step: 0.5 },
    { id: "rho_mat", label: { es: "ρ (kg/m³)", en: "ρ (kg/m³)" }, min: 1000, max: 12000, step: 100 },
    { id: "thickness_mm", label: { es: "Espesor (mm)", en: "Thickness (mm)" }, min: 5, max: 200, step: 1 },
  ],
  compute: (pNum) => {
    const v_us = Number.isFinite(pNum.v_us) ? pNum.v_us : 5900;
    const t_vuelo_us = Number.isFinite(pNum.t_vuelo_us) ? pNum.t_vuelo_us : 8.5;
    const rho_mat = Number.isFinite(pNum.rho_mat) ? pNum.rho_mat : 7800;
    const thickness_mm = Number.isFinite(pNum.thickness_mm) ? pNum.thickness_mm : 25;

    const t_vuelo = t_vuelo_us * 1e-6;
    const d_defecto = v_us * t_vuelo / 2;
    const Z_ac = rho_mat * v_us;
    const thickness = thickness_mm / 1000;
    const t_backwall = 2 * thickness / v_us;

    const nPoints = 60;
    const tMax = t_backwall * 1.2;
    const data = Array.from({ length: nPoints }, (_, i) => {
      const tPt = (i / (nPoints - 1)) * tMax * 1e6;
      let amplitude = 0;
      const tEntry = 0.2;
      const tDefect = t_vuelo * 1e6;
      const tBack = t_backwall * 1e6;
      const pulseWidth = 0.3;
      if (Math.abs(tPt - tEntry) < pulseWidth) amplitude = 1.0;
      else if (Math.abs(tPt - tDefect) < pulseWidth) amplitude = 0.6;
      else if (Math.abs(tPt - tBack) < pulseWidth) amplitude = 0.8;
      return { x: tPt, y: amplitude };
    });

    return {
      data,
      extra: {
        interpretationTarget: "d_defecto",
        interpretationValue: d_defecto * 1000,
        graphState: { v_us, t_vuelo_us, d_defecto_mm: d_defecto * 1000, Z_ac, thickness_mm },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    void graph_identity;
    void t;
    const v_us = Number.isFinite(pNum.v_us) ? pNum.v_us : 5900;
    const t_vuelo_us = Number.isFinite(pNum.t_vuelo_us) ? pNum.t_vuelo_us : 8.5;
    const rho_mat = Number.isFinite(pNum.rho_mat) ? pNum.rho_mat : 7800;
    const d_defecto = v_us * (t_vuelo_us * 1e-6) / 2;
    const Z_ac = rho_mat * v_us;

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">d = v · t / 2</div>
        <div style={{ fontSize: 13, opacity: 0.9 }}>
          d = <strong>{(d_defecto * 1000).toFixed(1)} mm</strong>
          {" · "}
          Z = <strong>{(Z_ac / 1e6).toFixed(1)} MRayl</strong>
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          v = {v_us} m/s · t = {t_vuelo_us} µs · ρ = {rho_mat} kg/m³
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


