
import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Ley de la Palanca ---
  {
    id: "maquinas-ley-palanca-fe",
    groupId: "ley-palanca",
    title: "Calcular Fuerza de Esfuerzo (Palanca)",
    formula: "F_e = (F_r * d_r) / d_e",
    variables: [
      { symbol: "F_r", label: "Fuerza de resistencia (Fᵣ)", unit: "N" },
      { symbol: "d_r", label: "Distancia de resistencia (dᵣ)", unit: "m" },
      { symbol: "d_e", label: "Distancia de esfuerzo (dₑ)", unit: "m" },
    ],
    output: { symbol: "F_e", label: "Fuerza de esfuerzo (Fₑ)", unit: "N" },
    resolve: ({ F_r, d_r, d_e }) => {
      const de = parseFloat(d_e);
      if (de === 0) return { error: "La distancia de esfuerzo no puede ser cero." };
      const Fe = (parseFloat(F_r) * parseFloat(d_r)) / de;
      return { result: { F_e: formatNumber(Fe) }, steps: [`Fₑ = (${F_r} * ${d_r}) / ${d_e} = ${formatNumber(Fe)} N`] };
    }
  },
  {
    id: "maquinas-ley-palanca-fr",
    groupId: "ley-palanca",
    title: "Calcular Fuerza de Resistencia (Palanca)",
    formula: "F_r = (F_e * d_e) / d_r",
    variables: [
      { symbol: "F_e", label: "Fuerza de esfuerzo (Fₑ)", unit: "N" },
      { symbol: "d_e", label: "Distancia de esfuerzo (dₑ)", unit: "m" },
      { symbol: "d_r", label: "Distancia de resistencia (dᵣ)", unit: "m" },
    ],
    output: { symbol: "F_r", label: "Fuerza de resistencia (Fᵣ)", unit: "N" },
    resolve: ({ F_e, d_e, d_r }) => {
      const dr = parseFloat(d_r);
      if (dr === 0) return { error: "La distancia de resistencia no puede ser cero." };
      const Fr = (parseFloat(F_e) * parseFloat(d_e)) / dr;
      return { result: { F_r: formatNumber(Fr) }, steps: [`Fᵣ = (${F_e} * ${d_e}) / ${d_r} = ${formatNumber(Fr)} N`] };
    }
  },

  // --- Grupo 2: Ventaja Mecánica ---
  {
    id: "maquinas-vm-calculo",
    groupId: "ventaja-mecanica",
    title: "Calcular Ventaja Mecánica (VM)",
    formula: "VM = F_r / F_e",
    variables: [
      { symbol: "F_r", label: "Fuerza de resistencia (Fᵣ)", unit: "N" },
      { symbol: "F_e", label: "Fuerza de esfuerzo (Fₑ)", unit: "N" },
    ],
    output: { symbol: "VM", label: "Ventaja Mecánica (VM)", unit: "" },
    resolve: ({ F_r, F_e }) => {
      const Fe = parseFloat(F_e);
      if (Fe === 0) return { error: "La fuerza de esfuerzo no puede ser cero." };
      const VM = parseFloat(F_r) / Fe;
      return { result: { VM: formatNumber(VM) }, steps: [`VM = ${F_r} / ${F_e} = ${formatNumber(VM)}`] };
    }
  },
  {
    id: "maquinas-vm-resistencia",
    groupId: "ventaja-mecanica",
    title: "Calcular Fuerza de Resistencia con VM",
    formula: "F_r = VM * F_e",
    variables: [
      { symbol: "VM", label: "Ventaja Mecánica (VM)", unit: "" },
      { symbol: "F_e", label: "Fuerza de esfuerzo (Fₑ)", unit: "N" },
    ],
    output: { symbol: "F_r", label: "Fuerza de Resistencia (Fᵣ)", unit: "N" },
    resolve: ({ VM, F_e }) => {
      const Fr = parseFloat(VM) * parseFloat(F_e);
      return { result: { F_r: formatNumber(Fr) }, steps: [`Fᵣ = ${VM} * ${F_e} = ${formatNumber(Fr)} N`] };
    }
  },
  {
    id: "maquinas-vm-esfuerzo",
    groupId: "ventaja-mecanica",
    title: "Calcular Fuerza de Esfuerzo con VM",
    formula: "F_e = F_r / VM",
    variables: [
      { symbol: "F_r", label: "Fuerza de resistencia (Fᵣ)", unit: "N" },
      { symbol: "VM", label: "Ventaja Mecánica (VM)", unit: "" },
    ],
    output: { symbol: "F_e", label: "Fuerza de Esfuerzo (Fₑ)", unit: "N" },
    resolve: ({ F_r, VM }) => {
      const vm_val = parseFloat(VM);
      if (vm_val === 0) return { error: "La Ventaja Mecánica no puede ser cero." };
      const Fe = parseFloat(F_r) / vm_val;
      return { result: { F_e: formatNumber(Fe) }, steps: [`Fₑ = ${F_r} / ${VM} = ${formatNumber(Fe)} N`] };
    }
  }
];
