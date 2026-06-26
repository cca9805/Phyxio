// frontend/src/v2/components/SVG/profiles/rueda-y-eje.svg.profile.jsx
// Profile SVG para el leaf "rueda-y-eje" (mecanica/aplicaciones/maquinas-simples/rueda-y-eje)

const ruedaYEjeProfile = {
  meta: {
    id: "svg-rueda-y-eje",
    leafId: "rueda-y-eje",
    title: {
      es: "Rueda y eje: diagrama de fuerzas y torques",
      en: "Wheel and Axle: force and torque diagram",
    },
    subtitle: {
      es: "Esfuerzo FR en rueda exterior, resistencia Fr en eje interior",
      en: "Effort FR at outer wheel, resistance Fr at inner axle",
    },
  },

  graph_identity: {
    pregunta_principal: {
      es: "¿Qué razón de radios R/r permite obtener la ventaja mecánica deseada?",
      en: "What radius ratio R/r gives the desired mechanical advantage?",
    },
    magnitud_estrella: "VM",
  },

  defaultParams: {
    FR: 50,
    Fr: 400,
    R: 0.25,
    r: 0.025,
    eta: 0.80,
  },

  interpretation_binding: {
    output_magnitude: "VM_real",
    input_magnitudes: ["FR", "Fr", "R", "r", "eta"],
  },

  infoCards: [
    {
      key: "ventaja_real",
      label: { es: "Ventaja mecánica real", en: "Real mechanical advantage" },
      lines: ({ p, lang }) => {
        const isEs = lang === "es";
        const R = parseFloat(p.R) || 0.25;
        const r = parseFloat(p.r) || 0.025;
        const eta = parseFloat(p.eta) || 0.8;
        return [
          isEs ? `VM_real = eta × R / r` : `VM_real = eta × R / r`,
          isEs
            ? `VM_ideal = R/r = ${(R / r).toFixed(2)}`
            : `VM_ideal = R/r = ${(R / r).toFixed(2)}`,
        ];
      },
      result: ({ p }) => {
        const R = parseFloat(p.R) || 0.25;
        const r = parseFloat(p.r) || 0.025;
        const eta = parseFloat(p.eta) || 0.8;
        const vm = eta * R / r;
        return `VM_real = ${vm.toFixed(2)}`;
      },
      resultColor: "#34d399",
    },
    {
      key: "esfuerzo",
      label: { es: "Esfuerzo requerido FR", en: "Required effort FR" },
      lines: ({ p, lang }) => {
        const isEs = lang === "es";
        return [
          isEs ? `FR = Fr·r / (eta·R)` : `FR = Fr·r / (eta·R)`,
          isEs ? "Menor R implica mayor esfuerzo" : "Smaller R means more effort",
        ];
      },
      result: ({ p }) => {
        const Fr = parseFloat(p.Fr) || 400;
        const R = parseFloat(p.R) || 0.25;
        const r = parseFloat(p.r) || 0.025;
        const eta = parseFloat(p.eta) || 0.8;
        const FR = (Fr * r) / (eta * R);
        return `FR = ${FR.toFixed(1)} N`;
      },
      resultColor: "#60a5fa",
    },
    {
      key: "eficiencia",
      label: { es: "Rendimiento eta", en: "Efficiency eta" },
      lines: ({ p, lang }) => {
        const isEs = lang === "es";
        const eta = parseFloat(p.eta) || 0.8;
        const loss = ((1 - eta) * 100).toFixed(0);
        return [
          isEs ? `eta = ${eta.toFixed(2)} (${loss}% pérdidas)` : `eta = ${eta.toFixed(2)} (${loss}% losses)`,
          isEs ? "Rozamiento en cojinetes del eje" : "Bearing friction at axle",
        ];
      },
      result: ({ p }) => {
        const eta = parseFloat(p.eta) || 0.8;
        return `eta = ${(eta * 100).toFixed(0)}%`;
      },
      resultColor: "#f59e0b",
    },
  ],
};

export default ruedaYEjeProfile;
