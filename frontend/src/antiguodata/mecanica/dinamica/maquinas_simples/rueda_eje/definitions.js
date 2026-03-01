
import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  // --- Rueda y Eje - Ventaja Mecánica ---
  {
    id: "maquinas-rueda-eje-vm",
    groupId: "rueda-eje",
    title: "Calcular Ventaja Mecánica (Rueda y Eje)",
    formula: "VM = R / r",
    variables: [
      { symbol: "R", label: "Radio de la rueda (R)", unit: "m" },
      { symbol: "r", label: "Radio del eje (r)", unit: "m" }
    ],
    output: { symbol: "VM", label: "Ventaja Mecánica (VM)", unit: "" },
    resolve: ({ R, r }) => {
      const radioRueda = parseFloat(R);
      const radioEje = parseFloat(r);
      
      if (isNaN(radioRueda) || radioRueda <= 0) return { error: "El radio de la rueda debe ser > 0." };
      if (isNaN(radioEje) || radioEje <= 0) return { error: "El radio del eje debe ser > 0." };
      if (radioEje >= radioRueda) return { error: "El radio del eje debe ser menor que el de la rueda." };
      
      const vm = radioRueda / radioEje;
      return { result: { VM: formatNumber(vm) }, steps: [`VM = ${R} / ${r} = ${formatNumber(vm)}`] };
    }
  },
  {
    id: "maquinas-rueda-eje-fe",
    groupId: "rueda-eje",
    title: "Calcular Fuerza de Esfuerzo",
    formula: "F_e = (F_r × r) / R",
    variables: [
      { symbol: "F_r", label: "Fuerza de resistencia (Fᵣ)", unit: "N" },
      { symbol: "R", label: "Radio de la rueda (R)", unit: "m" },
      { symbol: "r", label: "Radio del eje (r)", unit: "m" }
    ],
    output: { symbol: "F_e", label: "Fuerza de esfuerzo (Fₑ)", unit: "N" },
    resolve: ({ F_r, R, r }) => {
      const fr = parseFloat(F_r);
      const radioRueda = parseFloat(R);
      const radioEje = parseFloat(r);
      
      if (isNaN(fr) || fr < 0) return { error: "La fuerza debe ser positiva." };
      if (isNaN(radioRueda) || radioRueda <= 0) return { error: "El radio de la rueda debe ser > 0." };
      if (isNaN(radioEje) || radioEje <= 0) return { error: "El radio del eje debe ser > 0." };
      if (radioEje >= radioRueda) return { error: "El radio del eje debe ser menor que el de la rueda." };
      
      const fe = (fr * radioEje) / radioRueda;
      return { result: { F_e: formatNumber(fe) }, steps: [`Fₑ = (${F_r} × ${r}) / ${R} = ${formatNumber(fe)} N`] };
    }
  },
  {
    id: "maquinas-rueda-eje-fr",
    groupId: "rueda-eje",
    title: "Calcular Fuerza de Resistencia",
    formula: "F_r = (F_e × R) / r",
    variables: [
      { symbol: "F_e", label: "Fuerza de esfuerzo (Fₑ)", unit: "N" },
      { symbol: "R", label: "Radio de la rueda (R)", unit: "m" },
      { symbol: "r", label: "Radio del eje (r)", unit: "m" }
    ],
    output: { symbol: "F_r", label: "Fuerza de resistencia (Fᵣ)", unit: "N" },
    resolve: ({ F_e, R, r }) => {
      const fe = parseFloat(F_e);
      const radioRueda = parseFloat(R);
      const radioEje = parseFloat(r);
      
      if (isNaN(fe) || fe < 0) return { error: "La fuerza debe ser positiva." };
      if (isNaN(radioRueda) || radioRueda <= 0) return { error: "El radio de la rueda debe ser > 0." };
      if (isNaN(radioEje) || radioEje <= 0) return { error: "El radio del eje debe ser > 0." };
      if (radioEje >= radioRueda) return { error: "El radio del eje debe ser menor que el de la rueda." };
      
      const fr = (fe * radioRueda) / radioEje;
      return { result: { F_r: formatNumber(fr) }, steps: [`Fᵣ = (${F_e} × ${R}) / ${r} = ${formatNumber(fr)} N`] };
    }
  },
  {
    id: "maquinas-rueda-eje-radio-rueda",
    groupId: "rueda-eje",
    title: "Calcular Radio de la Rueda",
    formula: "R = VM × r",
    variables: [
      { symbol: "VM", label: "Ventaja Mecánica (VM)", unit: "" },
      { symbol: "r", label: "Radio del eje (r)", unit: "m" }
    ],
    output: { symbol: "R", label: "Radio de la rueda (R)", unit: "m" },
    resolve: ({ VM, r }) => {
      const vm = parseFloat(VM);
      const radioEje = parseFloat(r);
      
      if (isNaN(vm) || vm <= 1) return { error: "La VM debe ser > 1." };
      if (isNaN(radioEje) || radioEje <= 0) return { error: "El radio del eje debe ser > 0." };
      
      const radioRueda = vm * radioEje;
      return { result: { R: formatNumber(radioRueda) }, steps: [`R = ${VM} × ${r} = ${formatNumber(radioRueda)} m`] };
    }
  },
  {
    id: "maquinas-rueda-eje-radio-eje",
    groupId: "rueda-eje",
    title: "Calcular Radio del Eje",
    formula: "r = R / VM",
    variables: [
      { symbol: "R", label: "Radio de la rueda (R)", unit: "m" },
      { symbol: "VM", label: "Ventaja Mecánica (VM)", unit: "" }
    ],
    output: { symbol: "r", label: "Radio del eje (r)", unit: "m" },
    resolve: ({ R, VM }) => {
      const radioRueda = parseFloat(R);
      const vm = parseFloat(VM);
      
      if (isNaN(radioRueda) || radioRueda <= 0) return { error: "El radio de la rueda debe ser > 0." };
      if (isNaN(vm) || vm <= 0) return { error: "La VM debe ser > 0." };
      
      const radioEje = radioRueda / vm;
      return { result: { r: formatNumber(radioEje) }, steps: [`r = ${R} / ${VM} = ${formatNumber(radioEje)} m`] };
    }
  }
];
