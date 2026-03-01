
import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  // --- Polea Móvil ---
  {
    id: "maquinas-polea-movil-fe",
    groupId: "polea-movil",
    title: "Calcular Fuerza de Esfuerzo (Polea Móvil)",
    formula: "F_e = F_r / 2",
    variables: [
      { symbol: "F_r", label: "Fuerza de resistencia (Fᵣ)", unit: "N" }
    ],
    output: { symbol: "F_e", label: "Fuerza de esfuerzo (Fₑ)", unit: "N" },
    resolve: ({ F_r }) => {
      const fr = parseFloat(F_r);
      if (isNaN(fr) || fr < 0) return { error: "La fuerza debe ser positiva." };
      
      const fe = fr / 2;
      return { result: { F_e: formatNumber(fe) }, steps: [`Fₑ = ${F_r} / 2 = ${formatNumber(fe)} N`] };
    }
  },
  {
    id: "maquinas-polea-movil-fr",
    groupId: "polea-movil",
    title: "Calcular Fuerza de Resistencia (Polea Móvil)",
    formula: "F_r = F_e × 2",
    variables: [
      { symbol: "F_e", label: "Fuerza de esfuerzo (Fₑ)", unit: "N" }
    ],
    output: { symbol: "F_r", label: "Fuerza de resistencia (Fᵣ)", unit: "N" },
    resolve: ({ F_e }) => {
      const fe = parseFloat(F_e);
      if (isNaN(fe) || fe < 0) return { error: "La fuerza debe ser positiva." };
      
      const fr = fe * 2;
      return { result: { F_r: formatNumber(fr) }, steps: [`Fᵣ = ${F_e} × 2 = ${formatNumber(fr)} N`] };
    }
  },

  // --- Polipasto ---
  {
    id: "maquinas-polipasto-fe",
    groupId: "polipasto",
    title: "Calcular Fuerza de Esfuerzo (Polipasto)",
    formula: "F_e = F_r / n",
    variables: [
      { symbol: "F_r", label: "Fuerza de resistencia (Fᵣ)", unit: "N" },
      { symbol: "n", label: "Número de tramos (n)", unit: "" }
    ],
    output: { symbol: "F_e", label: "Fuerza de esfuerzo (Fₑ)", unit: "N" },
    resolve: ({ F_r, n }) => {
      const fr = parseFloat(F_r);
      const num = parseFloat(n);
      if (isNaN(fr) || fr < 0) return { error: "La fuerza debe ser positiva." };
      if (isNaN(num) || num < 1) return { error: "El número de tramos debe ser ≥ 1." };
      
      const fe = fr / num;
      return { result: { F_e: formatNumber(fe) }, steps: [`Fₑ = ${F_r} / ${n} = ${formatNumber(fe)} N`] };
    }
  },
  {
    id: "maquinas-polipasto-fr",
    groupId: "polipasto",
    title: "Calcular Fuerza de Resistencia (Polipasto)",
    formula: "F_r = F_e × n",
    variables: [
      { symbol: "F_e", label: "Fuerza de esfuerzo (Fₑ)", unit: "N" },
      { symbol: "n", label: "Número de tramos (n)", unit: "" }
    ],
    output: { symbol: "F_r", label: "Fuerza de resistencia (Fᵣ)", unit: "N" },
    resolve: ({ F_e, n }) => {
      const fe = parseFloat(F_e);
      const num = parseFloat(n);
      if (isNaN(fe) || fe < 0) return { error: "La fuerza debe ser positiva." };
      if (isNaN(num) || num < 1) return { error: "El número de tramos debe ser ≥ 1." };
      
      const fr = fe * num;
      return { result: { F_r: formatNumber(fr) }, steps: [`Fᵣ = ${F_e} × ${n} = ${formatNumber(fr)} N`] };
    }
  },
  {
    id: "maquinas-polipasto-vm",
    groupId: "polipasto",
    title: "Calcular Ventaja Mecánica (Polipasto)",
    formula: "VM = n",
    variables: [
      { symbol: "n", label: "Número de tramos (n)", unit: "" }
    ],
    output: { symbol: "VM", label: "Ventaja Mecánica (VM)", unit: "" },
    resolve: ({ n }) => {
      const num = parseFloat(n);
      if (isNaN(num) || num < 1) return { error: "El número de tramos debe ser ≥ 1." };
      
      return { result: { VM: formatNumber(num) }, steps: [`VM = ${n}`] };
    }
  }
];
