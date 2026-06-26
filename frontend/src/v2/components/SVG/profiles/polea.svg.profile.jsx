// frontend/src/v2/components/SVG/profiles/polea.svg.profile.jsx
// Profile para el leaf "polea" (mecanica/aplicaciones/maquinas-simples/polea)
// Extiende poleasSimples con leafId y graph_identity propios.
import poleasSimplesProfile from "./poleasSimples.svg.profile.jsx";

const poleaProfile = {
  ...poleasSimplesProfile,

  meta: {
    ...poleasSimplesProfile.meta,
    id: "svg-polea",
    leafId: "polea",
    title: {
      es: "Polea: ventaja mecánica y rendimiento",
      en: "Pulley: mechanical advantage and efficiency",
    },
    subtitle: {
      es: "Polea fija (nSel = 1) o móvil (nSel = 2)",
      en: "Fixed pulley (nSel = 1) or movable pulley (nSel = 2)",
    },
  },

  graph_identity: {
    pregunta_principal: {
      es: "Como varía la ventaja mecánica y el rendimiento de las poleas fijas y móviles según el número de tramos?",
      en: "How do the mechanical advantage and efficiency of fixed and movable pulleys vary with the number of rope segments?",
    },
    magnitud_estrella: "P",
  },

  infoCards: [
    {
      key: "esfuerzo",
      label: { es: "Esfuerzo P", en: "Effort P" },
      lines: ({ p, lang }) => {
        const isEs = lang === "es";
        const nSel = Math.max(1, Math.round(parseFloat(p.nSel ?? p.n) || 1));
        return [
          isEs ? `P = W / n = W / ${nSel}` : `P = W / n = W / ${nSel}`,
          isEs
            ? (nSel === 1 ? "Polea fija: solo cambia dirección" : "Polea móvil: reduce la fuerza necesaria")
            : (nSel === 1 ? "Fixed pulley: direction change only" : "Movable pulley: reduces required force"),
        ];
      },
      result: ({ p }) => {
        const W = parseFloat(p.W) || 200;
        const nSel = Math.max(1, Math.round(parseFloat(p.nSel ?? p.n) || 1));
        const P = W / nSel;
        return `P = ${P.toFixed(1)} N`;
      },
      resultColor: "#34d399",
    },
    {
      key: "ventaja",
      label: { es: "Ventaja mecánica", en: "Mechanical advantage" },
      lines: ({ p, lang }) => {
        const isEs = lang === "es";
        return [
          isEs ? `VM = W / P = n` : `MA = W / P = n`,
          isEs ? `Mayor n implica menor esfuerzo` : `Higher n means less effort`,
        ];
      },
      result: ({ p }) => {
        const nSel = Math.max(1, Math.round(parseFloat(p.nSel ?? p.n) || 1));
        return `VM = ${nSel}`;
      },
      resultColor: "#60a5fa",
    },
  ],

  interpretation_binding: {
    paramsIn: ["W", "nSel", "dx_load"],
    stateOut: ["P", "dx_pull"],
  },
};

export default poleaProfile;
