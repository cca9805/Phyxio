
import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  // --- Tornillo - Ventaja Mecánica ---
  {
    id: "maquinas-tornillo-vm",
    groupId: "tornillo",
    title: "Calcular Ventaja Mecánica (Tornillo)",
    formula: "VM = 2πr / p",
    variables: [
      { symbol: "r", label: "Radio del brazo (r)", unit: "m" },
      { symbol: "p", label: "Paso de rosca (p)", unit: "m" }
    ],
    output: { symbol: "VM", label: "Ventaja Mecánica (VM)", unit: "" },
    resolve: ({ r, p }) => {
      const radio = parseFloat(r);
      const paso = parseFloat(p);
      
      if (isNaN(radio) || radio <= 0) return { error: "El radio debe ser > 0." };
      if (isNaN(paso) || paso <= 0) return { error: "El paso debe ser > 0." };
      
      const vm = (2 * Math.PI * radio) / paso;
      return { result: { VM: formatNumber(vm) }, steps: [`VM = (2π × ${r}) / ${p} = ${formatNumber(vm)}`] };
    }
  },
  {
    id: "maquinas-tornillo-fe",
    groupId: "tornillo",
    title: "Calcular Fuerza de Esfuerzo",
    formula: "F_e = (F_r × p) / (2πr)",
    variables: [
      { symbol: "F_r", label: "Fuerza de resistencia (Fᵣ)", unit: "N" },
      { symbol: "r", label: "Radio del brazo (r)", unit: "m" },
      { symbol: "p", label: "Paso de rosca (p)", unit: "m" }
    ],
    output: { symbol: "F_e", label: "Fuerza de esfuerzo (Fₑ)", unit: "N" },
    resolve: ({ F_r, r, p }) => {
      const fr = parseFloat(F_r);
      const radio = parseFloat(r);
      const paso = parseFloat(p);
      
      if (isNaN(fr) || fr < 0) return { error: "La fuerza debe ser positiva." };
      if (isNaN(radio) || radio <= 0) return { error: "El radio debe ser > 0." };
      if (isNaN(paso) || paso <= 0) return { error: "El paso debe ser > 0." };
      
      const fe = (fr * paso) / (2 * Math.PI * radio);
      return { result: { F_e: formatNumber(fe) }, steps: [`Fₑ = (${F_r} × ${p}) / (2π × ${r}) = ${formatNumber(fe)} N`] };
    }
  },
  {
    id: "maquinas-tornillo-fr",
    groupId: "tornillo",
    title: "Calcular Fuerza de Resistencia",
    formula: "F_r = (F_e × 2πr) / p",
    variables: [
      { symbol: "F_e", label: "Fuerza de esfuerzo (Fₑ)", unit: "N" },
      { symbol: "r", label: "Radio del brazo (r)", unit: "m" },
      { symbol: "p", label: "Paso de rosca (p)", unit: "m" }
    ],
    output: { symbol: "F_r", label: "Fuerza de resistencia (Fᵣ)", unit: "N" },
    resolve: ({ F_e, r, p }) => {
      const fe = parseFloat(F_e);
      const radio = parseFloat(r);
      const paso = parseFloat(p);
      
      if (isNaN(fe) || fe < 0) return { error: "La fuerza debe ser positiva." };
      if (isNaN(radio) || radio <= 0) return { error: "El radio debe ser > 0." };
      if (isNaN(paso) || paso <= 0) return { error: "El paso debe ser > 0." };
      
      const fr = (fe * 2 * Math.PI * radio) / paso;
      return { result: { F_r: formatNumber(fr) }, steps: [`Fᵣ = (${F_e} × 2π × ${r}) / ${p} = ${formatNumber(fr)} N`] };
    }
  },
  {
    id: "maquinas-tornillo-radio",
    groupId: "tornillo",
    title: "Calcular Radio del Brazo",
    formula: "r = (VM × p) / (2π)",
    variables: [
      { symbol: "VM", label: "Ventaja Mecánica (VM)", unit: "" },
      { symbol: "p", label: "Paso de rosca (p)", unit: "m" }
    ],
    output: { symbol: "r", label: "Radio del brazo (r)", unit: "m" },
    resolve: ({ VM, p }) => {
      const vm = parseFloat(VM);
      const paso = parseFloat(p);
      
      if (isNaN(vm) || vm <= 1) return { error: "La VM debe ser > 1." };
      if (isNaN(paso) || paso <= 0) return { error: "El paso debe ser > 0." };
      
      const radio = (vm * paso) / (2 * Math.PI);
      return { result: { r: formatNumber(radio) }, steps: [`r = (${VM} × ${p}) / (2π) = ${formatNumber(radio)} m`] };
    }
  },
  {
    id: "maquinas-tornillo-paso",
    groupId: "tornillo",
    title: "Calcular Paso de Rosca",
    formula: "p = (2πr) / VM",
    variables: [
      { symbol: "r", label: "Radio del brazo (r)", unit: "m" },
      { symbol: "VM", label: "Ventaja Mecánica (VM)", unit: "" }
    ],
    output: { symbol: "p", label: "Paso de rosca (p)", unit: "m" },
    resolve: ({ r, VM }) => {
      const radio = parseFloat(r);
      const vm = parseFloat(VM);
      
      if (isNaN(radio) || radio <= 0) return { error: "El radio debe ser > 0." };
      if (isNaN(vm) || vm <= 0) return { error: "La VM debe ser > 0." };
      
      const paso = (2 * Math.PI * radio) / vm;
      return { result: { p: formatNumber(paso) }, steps: [`p = (2π × ${r}) / ${VM} = ${formatNumber(paso)} m`] };
    }
  }
];
