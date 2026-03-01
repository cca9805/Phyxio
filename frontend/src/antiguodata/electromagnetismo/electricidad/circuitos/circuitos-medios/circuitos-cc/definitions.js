import { formatNumber } from '../../../../../../utils/formatNumber';

export const definitions = [
  // Grupo 1: Ley de Ohm (V=IR)
  {
    id: "ohm-v",
    groupId: "ley-de-ohm",
    title: "Calcular Voltaje (V)",
    isFundamental: true,
    formula: "V = I * R",
    variables: [{ symbol: "I", label: "Corriente (A)", unit: "A" }, { symbol: "R", label: "Resistencia (Ω)", unit: "Ω" }],
    output: { symbol: "V", label: "Voltaje (V)", unit: "V" },
    resolve: ({ I, R }) => ({ result: { V: formatNumber(I * R) }, steps: [`V = ${I}A * ${R}Ω = ${formatNumber(I*R)} V`] }),
  },
  {
    id: "ohm-i",
    groupId: "ley-de-ohm",
    title: "Calcular Corriente (I)",
    isFundamental: false,
    formula: "I = V / R",
    variables: [{ symbol: "V", label: "Voltaje (V)", unit: "V" }, { symbol: "R", label: "Resistencia (Ω)", unit: "Ω" }],
    output: { symbol: "I", label: "Corriente (A)", unit: "A" },
    resolve: ({ V, R }) => {
      if (R === 0) return { error: "La resistencia no puede ser cero." };
      return { result: { I: formatNumber(V / R) }, steps: [`I = ${V}V / ${R}Ω = ${formatNumber(V/R)} A`] };
    },
  },
  {
    id: "ohm-r",
    groupId: "ley-de-ohm",
    title: "Calcular Resistencia (R)",
    isFundamental: false,
    formula: "R = V / I",
    variables: [{ symbol: "V", label: "Voltaje (V)", unit: "V" }, { symbol: "I", label: "Corriente (A)", unit: "A" }],
    output: { symbol: "R", label: "Resistencia (Ω)", unit: "Ω" },
    resolve: ({ V, I }) => {
      if (I === 0) return { error: "La corriente no puede ser cero." };
      return { result: { R: formatNumber(V / I) }, steps: [`R = ${V}V / ${I}A = ${formatNumber(V/I)} Ω`] };
    },
  },

  // Grupo 2: Potencia Eléctrica (P=VI)
  {
    id: "potencia-p",
    groupId: "potencia-electrica",
    title: "Calcular Potencia (P)",
    isFundamental: true,
    formula: "P = V * I",
    variables: [{ symbol: "V", label: "Voltaje (V)", unit: "V" }, { symbol: "I", label: "Corriente (A)", unit: "A" }],
    output: { symbol: "P", label: "Potencia (W)", unit: "W" },
    resolve: ({ V, I }) => ({ result: { P: formatNumber(V * I) }, steps: [`P = ${V}V * ${I}A = ${formatNumber(V*I)} W`] }),
  },
  {
    id: "potencia-v",
    groupId: "potencia-electrica",
    title: "Calcular Voltaje (V)",
    isFundamental: false,
    formula: "V = P / I",
    variables: [{ symbol: "P", label: "Potencia (W)", unit: "W" }, { symbol: "I", label: "Corriente (A)", unit: "A" }],
    output: { symbol: "V", label: "Voltaje (V)", unit: "V" },
    resolve: ({ P, I }) => {
      if (I === 0) return { error: "La corriente no puede ser cero." };
      return { result: { V: formatNumber(P / I) }, steps: [`V = ${P}W / ${I}A = ${formatNumber(P/I)} V`] };
    },
  },
  {
    id: "potencia-i",
    groupId: "potencia-electrica",
    title: "Calcular Corriente (I)",
    isFundamental: false,
    formula: "I = P / V",
    variables: [{ symbol: "P", label: "Potencia (W)", unit: "W" }, { symbol: "V", label: "Voltaje (V)", unit: "V" }],
    output: { symbol: "I", label: "Corriente (A)", unit: "A" },
    resolve: ({ P, V }) => {
      if (V === 0) return { error: "El voltaje no puede ser cero." };
      return { result: { I: formatNumber(P / V) }, steps: [`I = ${P}W / ${V}V = ${formatNumber(P/V)} A`] };
    },
  },

  // Grupo 3: Resistencias en Serie
  {
    id: "resistencias-serie",
    groupId: "asociacion-resistencias-serie",
    title: "Resistencia Eq. en Serie",
    isFundamental: true,
    formula: "Req = R₁ + R₂ + ...",
    variables: [{ symbol: "resistances", label: "Valores (Ω) (separados por coma)", unit: "Ω" }],
    output: { symbol: "Req", label: "Resistencia Equivalente (Ω)", unit: "Ω" },
    resolve: ({ resistances }) => {
      const res = resistances.toString().split(',').map(Number).filter(r => r >= 0);
      if (res.length === 0) return { error: "No se ingresaron valores válidos." };
      const result = res.reduce((acc, r) => acc + r, 0);
      return { result: { Req: formatNumber(result) }, steps: [`Req = ${res.join(' + ')} = ${formatNumber(result)}Ω`] };
    },
  },

  // Grupo 4: Resistencias en Paralelo
  {
    id: "resistencias-paralelo",
    groupId: "asociacion-resistencias-paralelo",
    title: "Resistencia Eq. en Paralelo",
    isFundamental: true,
    formula: "1/Req = 1/R₁ + 1/R₂ + ...",
    variables: [{ symbol: "resistances", label: "Valores (Ω) (separados por coma)", unit: "Ω" }],
    output: { symbol: "Req", label: "Resistencia Equivalente (Ω)", unit: "Ω" },
    resolve: ({ resistances }) => {
      const res = resistances.toString().split(',').map(Number).filter(r => r > 0);
      if (res.length === 0) return { error: "No se ingresaron valores válidos (mayores a cero)." };
      const sumInv = res.reduce((acc, r) => acc + 1 / r, 0);
      const result = 1 / sumInv;
      return { result: { Req: formatNumber(result) }, steps: [`1/Req = ${res.map(r => `1/${r}`).join(' + ')}`, `Req = ${formatNumber(result)}Ω`] };
    },
  },
  
  // --- Grupo 5: Divisor de Voltaje ---
  {
    id: 'divisor-voltaje',
    groupId: 'divisor-voltaje',
    title: 'Calcular Voltaje en Divisor (Vx)',
    isFundamental: true,
    formula: 'V_x = V_T * (R_x / R_eq)',
    variables: [
      { symbol: 'V_T', label: 'Voltaje Total (V)', unit: 'V' },
      { symbol: 'R_x', label: 'Resistencia de interés (Ω)', unit: 'Ω' },
      { symbol: 'R_eq', label: 'Resistencia Equivalente Serie (Ω)', unit: 'Ω' },
    ],
    output: { symbol: 'V_x', label: 'Voltaje en Rx (V)', unit: 'V' },
    resolve: ({ V_T, R_x, R_eq }) => {
      const Vx = parseFloat(V_T) * (parseFloat(R_x) / parseFloat(R_eq));
      return { result: { V_x: formatNumber(Vx) }, steps: [`Vx = ${V_T} * (${R_x} / ${R_eq}) = ${formatNumber(Vx)} V`] };
    },
  },
  {
    id: 'divisor-voltaje-vt',
    groupId: 'divisor-voltaje',
    title: 'Calcular Voltaje Total (VT)',
    isFundamental: false,
    formula: 'V_T = V_x * (R_eq / R_x)',
    variables: [
        { symbol: 'V_x', label: 'Voltaje en Rx (V)', unit: 'V' },
        { symbol: 'R_x', label: 'Resistencia de interés (Ω)', unit: 'Ω' },
        { symbol: 'R_eq', label: 'Resistencia Equivalente Serie (Ω)', unit: 'Ω' },
    ],
    output: { symbol: 'V_T', label: 'Voltaje Total (V)', unit: 'V' },
    resolve: ({ V_x, R_x, R_eq }) => {
      const VT = parseFloat(V_x) * (parseFloat(R_eq) / parseFloat(R_x));
      return { result: { V_T: formatNumber(VT) }, steps: [`VT = ${V_x} * (${R_eq} / ${R_x}) = ${formatNumber(VT)} V`] };
    },
  },
  {
    id: 'divisor-voltaje-rx',
    groupId: 'divisor-voltaje',
    title: 'Calcular Resistencia (Rx)',
    isFundamental: false,
    formula: 'R_x = R_eq * (V_x / V_T)',
    variables: [
        { symbol: 'R_eq', label: 'Resistencia Equivalente Serie (Ω)', unit: 'Ω' },
        { symbol: 'V_x', label: 'Voltaje en Rx (V)', unit: 'V' },
        { symbol: 'V_T', label: 'Voltaje Total (V)', unit: 'V' },
    ],
    output: { symbol: 'R_x', label: 'Resistencia de interés (Ω)', unit: 'Ω' },
    resolve: ({ R_eq, V_x, V_T }) => {
      const Rx = parseFloat(R_eq) * (parseFloat(V_x) / parseFloat(V_T));
      return { result: { R_x: formatNumber(Rx) }, steps: [`Rx = ${R_eq} * (${V_x} / ${V_T}) = ${formatNumber(Rx)} Ω`] };
    },
  },
  {
    id: 'divisor-voltaje-req',
    groupId: 'divisor-voltaje',
    title: 'Calcular Resistencia Equivalente (Req)',
    isFundamental: false,
    formula: 'R_eq = R_x * (V_T / V_x)',
    variables: [
        { symbol: 'R_x', label: 'Resistencia de interés (Ω)', unit: 'Ω' },
        { symbol: 'V_T', label: 'Voltaje Total (V)', unit: 'V' },
        { symbol: 'V_x', label: 'Voltaje en Rx (V)', unit: 'V' },
    ],
    output: { symbol: 'R_eq', label: 'Resistencia Equivalente Serie (Ω)', unit: 'Ω' },
    resolve: ({ R_x, V_T, V_x }) => {
      const Req = parseFloat(R_x) * (parseFloat(V_T) / parseFloat(V_x));
      return { result: { R_eq: formatNumber(Req) }, steps: [`Req = ${R_x} * (${V_T} / ${V_x}) = ${formatNumber(Req)} Ω`] };
    },
  },

  // --- Grupo 6: Divisor de Corriente ---
  {
    id: 'divisor-corriente',
    groupId: 'divisor-corriente',
    title: 'Calcular Corriente en Divisor (Ix)',
    isFundamental: true,
    formula: 'I_x = I_T * (R_eq / R_x)',
    variables: [
      { symbol: 'I_T', label: 'Corriente Total (A)', unit: 'A' },
      { symbol: 'R_x', label: 'Resistencia de la rama (Ω)', unit: 'Ω' },
      { symbol: 'R_eq', label: 'Resistencia Equivalente Paralelo (Ω)', unit: 'Ω' },
    ],
    output: { symbol: 'I_x', label: 'Corriente en Rx (A)', unit: 'A' },
    resolve: ({ I_T, R_x, R_eq }) => {
      const Ix = parseFloat(I_T) * (parseFloat(R_eq) / parseFloat(R_x));
      return { result: { I_x: formatNumber(Ix) }, steps: [`Ix = ${I_T} * (${R_eq} / ${R_x}) = ${formatNumber(Ix)} A`] };
    },
  },
  {
    id: 'divisor-corriente-it',
    groupId: 'divisor-corriente',
    title: 'Calcular Corriente Total (IT)',
    isFundamental: false,
    formula: 'I_T = I_x * (R_x / R_eq)',
    variables: [
        { symbol: 'I_x', label: 'Corriente en Rx (A)', unit: 'A' },
        { symbol: 'R_x', label: 'Resistencia de la rama (Ω)', unit: 'Ω' },
        { symbol: 'R_eq', label: 'Resistencia Equivalente Paralelo (Ω)', unit: 'Ω' },
    ],
    output: { symbol: 'I_T', label: 'Corriente Total (A)', unit: 'A' },
    resolve: ({ I_x, R_x, R_eq }) => {
      const IT = parseFloat(I_x) * (parseFloat(R_x) / parseFloat(R_eq));
      return { result: { I_T: formatNumber(IT) }, steps: [`IT = ${I_x} * (${R_x} / ${R_eq}) = ${formatNumber(IT)} A`] };
    },
  },
  {
    id: 'divisor-corriente-rx',
    groupId: 'divisor-corriente',
    title: 'Calcular Resistencia de Rama (Rx)',
    isFundamental: false,
    formula: 'R_x = R_eq * (I_T / I_x)',
    variables: [
        { symbol: 'R_eq', label: 'Resistencia Equivalente Paralelo (Ω)', unit: 'Ω' },
        { symbol: 'I_T', label: 'Corriente Total (A)', unit: 'A' },
        { symbol: 'I_x', label: 'Corriente en Rx (A)', unit: 'A' },
    ],
    output: { symbol: 'R_x', label: 'Resistencia de la rama (Ω)', unit: 'Ω' },
    resolve: ({ R_eq, I_T, I_x }) => {
      const Rx = parseFloat(R_eq) * (parseFloat(I_T) / parseFloat(I_x));
      return { result: { R_x: formatNumber(Rx) }, steps: [`Rx = ${R_eq} * (${I_T} / ${I_x}) = ${formatNumber(Rx)} Ω`] };
    },
  },
  {
    id: 'divisor-corriente-req',
    groupId: 'divisor-corriente',
    title: 'Calcular Resistencia Equivalente (Req)',
    isFundamental: false,
    formula: 'R_eq = R_x * (I_x / I_T)',
    variables: [
        { symbol: 'R_x', label: 'Resistencia de la rama (Ω)', unit: 'Ω' },
        { symbol: 'I_x', label: 'Corriente en Rx (A)', unit: 'A' },
        { symbol: 'I_T', label: 'Corriente Total (A)', unit: 'A' },
    ],
    output: { symbol: 'R_eq', label: 'Resistencia Equivalente Paralelo (Ω)', unit: 'Ω' },
    resolve: ({ R_x, I_x, I_T }) => {
      const Req = parseFloat(R_x) * (parseFloat(I_x) / parseFloat(I_T));
      return { result: { R_eq: formatNumber(Req) }, steps: [`Req = ${R_x} * (${I_x} / ${I_T}) = ${formatNumber(Req)} Ω`] };
    },
  },
];
