import { formatNumber } from '../../../../utils/formatNumber';

const VT_DEFAULT = 0.02585; // Voltaje térmico a 300K
const Q = 1.602176634e-19; // Carga del electrón en C

export const definitions = [
  // Grupo 1: Ecuación del Diodo de Shockley
  {
    id: "diodo-shockley-id",
    groupId: "diodo-shockley",
    title: "Calcular Corriente del Diodo (Id)",
    isFundamental: true,
    formula: "I_D = I_S * (e^(V_D / (n * V_T)) - 1)",
    variables: [
      { symbol: "I_S", label: "Corriente de saturación inversa", unit: "A" },
      { symbol: "V_D", label: "Voltaje en el diodo", unit: "V" },
      { symbol: "n", label: "Factor de idealidad", unit: "" }
    ],
    output: { symbol: "I_D", label: "Corriente del diodo", unit: "A" },
    constants: [{ symbol: "V_T", value: VT_DEFAULT, unit: "V" }],
    resolve: ({ I_S, V_D, n }) => {
      const exponent = V_D / (n * VT_DEFAULT);
      const id = I_S * (Math.exp(exponent) - 1);
      return {
        result: { I_D: formatNumber(id) },
        steps: [
          `Exponente: Vd / (n * Vt) = ${V_D} / (${n} * ${VT_DEFAULT}) = ${formatNumber(exponent)}`,
          `Cálculo: Id = ${I_S} * (e^${formatNumber(exponent)} - 1) = ${formatNumber(id)} A`
        ]
      };
    }
  },
  {
    id: "diodo-shockley-vd",
    groupId: "diodo-shockley",
    title: "Calcular Voltaje del Diodo (Vd)",
    isComplementary: true,
    formula: "V_D = n * V_T * ln((I_D / I_S) + 1)",
    variables: [
      { symbol: "I_D", label: "Corriente del diodo", unit: "A" },
      { symbol: "I_S", label: "Corriente de saturación inversa", unit: "A" },
      { symbol: "n", label: "Factor de idealidad", unit: "" }
    ],
    output: { symbol: "V_D", label: "Voltaje en el diodo", unit: "V" },
    constants: [{ symbol: "V_T", value: VT_DEFAULT, unit: "V" }],
    resolve: ({ I_D, I_S, n }) => {
      const ratio = I_D / I_S;
      const vd = n * VT_DEFAULT * Math.log(ratio + 1);
      return {
        result: { V_D: formatNumber(vd) },
        steps: [
          `Ratio de corriente: (Id / Is) + 1 = (${I_D} / ${I_S}) + 1 = ${formatNumber(ratio + 1)}`,
          `Cálculo: Vd = ${n} * ${VT_DEFAULT} * ln(${formatNumber(ratio + 1)}) = ${formatNumber(vd)} V`
        ]
      };
    }
  },

  // Grupo 2: Ley de Corrientes del Transistor
  {
    id: "ley-corrientes-bjt-ie",
    groupId: "ley-corrientes-bjt",
    title: "Calcular Corriente de Emisor (Ie)",
    isFundamental: true,
    formula: "I_E = I_B + I_C",
    variables: [
      { symbol: "I_B", label: "Corriente de Base", unit: "A" },
      { symbol: "I_C", label: "Corriente de Colector", unit: "A" }
    ],
    output: { symbol: "I_E", label: "Corriente de Emisor", unit: "A" },
    resolve: ({ I_B, I_C }) => {
      const ie = I_B + I_C;
      return { result: { I_E: formatNumber(ie) }, steps: [`Ie = ${I_B} + ${I_C} = ${formatNumber(ie)} A`] };
    }
  },
  {
    id: "ley-corrientes-bjt-ib",
    groupId: "ley-corrientes-bjt",
    title: "Calcular Corriente de Base (Ib)",
    isComplementary: true,
    formula: "I_B = I_E - I_C",
    variables: [
      { symbol: "I_E", label: "Corriente de Emisor", unit: "A" },
      { symbol: "I_C", label: "Corriente de Colector", unit: "A" }
    ],
    output: { symbol: "I_B", label: "Corriente de Base", unit: "A" },
    resolve: ({ I_E, I_C }) => {
      const ib = I_E - I_C;
      return { result: { I_B: formatNumber(ib) }, steps: [`Ib = ${I_E} - ${I_C} = ${formatNumber(ib)} A`] };
    }
  },
  {
    id: "ley-corrientes-bjt-ic",
    groupId: "ley-corrientes-bjt",
    title: "Calcular Corriente de Colector (Ic)",
    isComplementary: true,
    formula: "I_C = I_E - I_B",
    variables: [
      { symbol: "I_E", label: "Corriente de Emisor", unit: "A" },
      { symbol: "I_B", label: "Corriente de Base", unit: "A" }
    ],
    output: { symbol: "I_C", label: "Corriente de Colector", unit: "A" },
    resolve: ({ I_E, I_B }) => {
      const ic = I_E - I_B;
      return { result: { I_C: formatNumber(ic) }, steps: [`Ic = ${I_E} - ${I_B} = ${formatNumber(ic)} A`] };
    }
  },

  // Grupo 3: Ganancia de Corriente Beta (β)
  {
    id: "ganancia-beta-beta",
    groupId: "ganancia-beta",
    title: "Calcular Ganancia Beta (β)",
    isFundamental: true,
    formula: "β = I_C / I_B",
    variables: [
      { symbol: "I_C", label: "Corriente de Colector", unit: "A" },
      { symbol: "I_B", label: "Corriente de Base", unit: "A" }
    ],
    output: { symbol: "β", label: "Ganancia Beta", unit: "" },
    resolve: ({ I_C, I_B }) => {
      const beta = I_C / I_B;
      return { result: { "β": formatNumber(beta) }, steps: [`β = ${I_C} / ${I_B} = ${formatNumber(beta)}`] };
    }
  },
  {
    id: "ganancia-beta-ic",
    groupId: "ganancia-beta",
    title: "Calcular Corriente de Colector (Ic) desde β",
    isComplementary: true,
    formula: "I_C = β * I_B",
    variables: [
      { symbol: "β", label: "Ganancia Beta", unit: "" },
      { symbol: "I_B", label: "Corriente de Base", unit: "A" }
    ],
    output: { symbol: "I_C", label: "Corriente de Colector", unit: "A" },
    resolve: ({ β, I_B }) => {
      const ic = β * I_B;
      return { result: { I_C: formatNumber(ic) }, steps: [`Ic = ${β} * ${I_B} = ${formatNumber(ic)} A`] };
    }
  },
  {
    id: "ganancia-beta-ib",
    groupId: "ganancia-beta",
    title: "Calcular Corriente de Base (Ib) desde β",
    isComplementary: true,
    formula: "I_B = I_C / β",
    variables: [
      { symbol: "I_C", label: "Corriente de Colector", unit: "A" },
      { symbol: "β", label: "Ganancia Beta", unit: "" }
    ],
    output: { symbol: "I_B", label: "Corriente de Base", unit: "A" },
    resolve: ({ I_C, β }) => {
      const ib = I_C / β;
      return { result: { I_B: formatNumber(ib) }, steps: [`Ib = ${I_C} / ${β} = ${formatNumber(ib)} A`] };
    }
  },

  // Grupo 4: Ganancia de Corriente Alfa (α)
  {
    id: "ganancia-alfa-alfa",
    groupId: "ganancia-alfa",
    title: "Calcular Ganancia Alfa (α)",
    isFundamental: true,
    formula: "α = I_C / I_E",
    variables: [
      { symbol: "I_C", label: "Corriente de Colector", unit: "A" },
      { symbol: "I_E", label: "Corriente de Emisor", unit: "A" }
    ],
    output: { symbol: "α", label: "Ganancia Alfa", unit: "" },
    resolve: ({ I_C, I_E }) => {
      const alpha = I_C / I_E;
      return { result: { "α": formatNumber(alpha) }, steps: [`α = ${I_C} / ${I_E} = ${formatNumber(alpha)}`] };
    }
  },
  {
    id: "ganancia-alfa-ic",
    groupId: "ganancia-alfa",
    title: "Calcular Corriente de Colector (Ic) desde α",
    isComplementary: true,
    formula: "I_C = α * I_E",
    variables: [
        { symbol: "α", label: "Ganancia Alfa", unit: "" },
        { symbol: "I_E", label: "Corriente de Emisor", unit: "A" }
    ],
    output: { symbol: "I_C", label: "Corriente de Colector", unit: "A" },
    resolve: ({ α, I_E }) => {
        const ic = α * I_E;
        return { result: { I_C: formatNumber(ic) }, steps: [`Ic = ${α} * ${I_E} = ${formatNumber(ic)} A`] };
    }
  },
  {
    id: "ganancia-alfa-ie",
    groupId: "ganancia-alfa",
    title: "Calcular Corriente de Emisor (Ie) desde α",
    isComplementary: true,
    formula: "I_E = I_C / α",
    variables: [
        { symbol: "I_C", label: "Corriente de Colector", unit: "A" },
        { symbol: "α", label: "Ganancia Alfa", unit: "" }
    ],
    output: { symbol: "I_E", label: "Corriente de Emisor", unit: "A" },
    resolve: ({ I_C, α }) => {
        const ie = I_C / α;
        return { result: { I_E: formatNumber(ie) }, steps: [`Ie = ${I_C} / ${α} = ${formatNumber(ie)} A`] };
    }
  },

  // Grupo 5: Relación Alfa-Beta
  {
    id: "relacion-alfa-beta-beta",
    groupId: "relacion-alfa-beta",
    title: "Convertir Alfa (α) a Beta (β)",
    isFundamental: true,
    formula: "β = α / (1 - α)",
    variables: [{ symbol: "α", label: "Ganancia Alfa", unit: "" }],
    output: { symbol: "β", label: "Ganancia Beta", unit: "" },
    resolve: ({ α }) => {
      const beta = α / (1 - α);
      return { result: { "β": formatNumber(beta) }, steps: [`β = ${α} / (1 - ${α}) = ${formatNumber(beta)}`] };
    }
  },
  {
    id: "relacion-alfa-beta-alfa",
    groupId: "relacion-alfa-beta",
    title: "Convertir Beta (β) a Alfa (α)",
    isComplementary: true,
    formula: "α = β / (β + 1)",
    variables: [{ symbol: "β", label: "Ganancia Beta", unit: "" }],
    output: { symbol: "α", label: "Ganancia Alfa", unit: "" },
    resolve: ({ β }) => {
      const alpha = β / (β + 1);
      return { result: { "α": formatNumber(alpha) }, steps: [`α = ${β} / (${β} + 1) = ${formatNumber(alpha)}`] };
    }
  },
  // Despeje adicional para la fórmula de Shockley
  {
    id: "diodo-shockley-is",
    groupId: "diodo-shockley",
    title: "Calcular Corriente de Saturación (Is)",
    isComplementary: true,
    formula: "I_S = I_D / (e^(V_D / (n * V_T)) - 1)",
    variables: [
      { symbol: "I_D", label: "Corriente del diodo", unit: "A" },
      { symbol: "V_D", label: "Voltaje en el diodo", unit: "V" },
      { symbol: "n", label: "Factor de idealidad", unit: "" }
    ],
    output: { symbol: "I_S", label: "Corriente de saturación", unit: "A" },
    constants: [{ symbol: "V_T", value: VT_DEFAULT, unit: "V" }],
    resolve: ({ I_D, V_D, n }) => {
      const exponent = V_D / (n * VT_DEFAULT);
      const is = I_D / (Math.exp(exponent) - 1);
      return {
        result: { I_S: formatNumber(is) },
        steps: [
          `Exponente: Vd / (n * Vt) = ${V_D} / (${n} * ${VT_DEFAULT}) = ${formatNumber(exponent)}`,
          `Cálculo: Is = ${I_D} / (e^${formatNumber(exponent)} - 1) = ${formatNumber(is)} A`
        ]
      };
    }
  }
];
