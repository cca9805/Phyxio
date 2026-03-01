
import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  // --- Fuerza en Plano Inclinado ---
  {
    id: "maquinas-plano-inclinado-fe",
    groupId: "plano-inclinado",
    title: "Calcular Fuerza de Esfuerzo",
    formula: "F_e = (m × g × h) / L",
    variables: [
      { symbol: "m", label: "Masa (m)", unit: "kg" },
      { symbol: "h", label: "Altura (h)", unit: "m" },
      { symbol: "L", label: "Longitud rampa (L)", unit: "m" }
    ],
    output: { symbol: "F_e", label: "Fuerza de esfuerzo (Fₑ)", unit: "N" },
    resolve: ({ m, h, L }) => {
      const masa = parseFloat(m);
      const altura = parseFloat(h);
      const longitud = parseFloat(L);
      const g = 9.8;
      
      if (isNaN(masa) || masa < 0) return { error: "La masa debe ser positiva." };
      if (isNaN(altura) || altura < 0) return { error: "La altura debe ser positiva." };
      if (isNaN(longitud) || longitud <= 0) return { error: "La longitud debe ser > 0." };
      if (altura > longitud) return { error: "La altura no puede ser mayor que la longitud." };
      
      const fe = (masa * g * altura) / longitud;
      return { result: { F_e: formatNumber(fe) }, steps: [`Fₑ = (${m} × ${g} × ${h}) / ${L} = ${formatNumber(fe)} N`] };
    }
  },
  {
    id: "maquinas-plano-inclinado-masa",
    groupId: "plano-inclinado",
    title: "Calcular Masa Máxima",
    formula: "m = (F_e × L) / (g × h)",
    variables: [
      { symbol: "F_e", label: "Fuerza de esfuerzo (Fₑ)", unit: "N" },
      { symbol: "h", label: "Altura (h)", unit: "m" },
      { symbol: "L", label: "Longitud rampa (L)", unit: "m" }
    ],
    output: { symbol: "m", label: "Masa (m)", unit: "kg" },
    resolve: ({ F_e, h, L }) => {
      const fe = parseFloat(F_e);
      const altura = parseFloat(h);
      const longitud = parseFloat(L);
      const g = 9.8;
      
      if (isNaN(fe) || fe < 0) return { error: "La fuerza debe ser positiva." };
      if (isNaN(altura) || altura <= 0) return { error: "La altura debe ser > 0." };
      if (isNaN(longitud) || longitud <= 0) return { error: "La longitud debe ser > 0." };
      if (altura > longitud) return { error: "La altura no puede ser mayor que la longitud." };
      
      const masa = (fe * longitud) / (g * altura);
      return { result: { m: formatNumber(masa) }, steps: [`m = (${F_e} × ${L}) / (${g} × ${h}) = ${formatNumber(masa)} kg`] };
    }
  },
  {
    id: "maquinas-plano-inclinado-vm",
    groupId: "plano-inclinado",
    title: "Calcular Ventaja Mecánica",
    formula: "VM = L / h",
    variables: [
      { symbol: "L", label: "Longitud rampa (L)", unit: "m" },
      { symbol: "h", label: "Altura (h)", unit: "m" }
    ],
    output: { symbol: "VM", label: "Ventaja Mecánica (VM)", unit: "" },
    resolve: ({ L, h }) => {
      const longitud = parseFloat(L);
      const altura = parseFloat(h);
      
      if (isNaN(longitud) || longitud <= 0) return { error: "La longitud debe ser > 0." };
      if (isNaN(altura) || altura <= 0) return { error: "La altura debe ser > 0." };
      if (altura > longitud) return { error: "La altura no puede ser mayor que la longitud." };
      
      const vm = longitud / altura;
      return { result: { VM: formatNumber(vm) }, steps: [`VM = ${L} / ${h} = ${formatNumber(vm)}`] };
    }
  },
  {
    id: "maquinas-plano-inclinado-longitud",
    groupId: "plano-inclinado",
    title: "Calcular Longitud de Rampa",
    formula: "L = VM × h",
    variables: [
      { symbol: "VM", label: "Ventaja Mecánica (VM)", unit: "" },
      { symbol: "h", label: "Altura (h)", unit: "m" }
    ],
    output: { symbol: "L", label: "Longitud rampa (L)", unit: "m" },
    resolve: ({ VM, h }) => {
      const vm = parseFloat(VM);
      const altura = parseFloat(h);
      
      if (isNaN(vm) || vm <= 1) return { error: "La VM debe ser > 1." };
      if (isNaN(altura) || altura <= 0) return { error: "La altura debe ser > 0." };
      
      const longitud = vm * altura;
      return { result: { L: formatNumber(longitud) }, steps: [`L = ${VM} × ${h} = ${formatNumber(longitud)} m`] };
    }
  },
  {
    id: "maquinas-plano-inclinado-altura",
    groupId: "plano-inclinado",
    title: "Calcular Altura",
    formula: "h = L / VM",
    variables: [
      { symbol: "L", label: "Longitud rampa (L)", unit: "m" },
      { symbol: "VM", label: "Ventaja Mecánica (VM)", unit: "" }
    ],
    output: { symbol: "h", label: "Altura (h)", unit: "m" },
    resolve: ({ L, VM }) => {
      const longitud = parseFloat(L);
      const vm = parseFloat(VM);
      
      if (isNaN(longitud) || longitud <= 0) return { error: "La longitud debe ser > 0." };
      if (isNaN(vm) || vm <= 0) return { error: "La VM debe ser > 0." };
      
      const altura = longitud / vm;
      return { result: { h: formatNumber(altura) }, steps: [`h = ${L} / ${VM} = ${formatNumber(altura)} m`] };
    }
  }
];
