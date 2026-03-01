import { formatNumber } from '../../../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Reactancia Inductiva ---
  {
    id: 'reactancia-inductiva',
    groupId: 'reactancia-inductiva',
    title: 'Calcular Reactancia Inductiva (XL)',
    isFundamental: true,
    formula: 'XL = 2 * PI * f * L',
    variables: [
      { symbol: 'f', label: 'Frecuencia (Hz)', unit: 'Hz' },
      { symbol: 'L', label: 'Inductancia (H)', unit: 'H' },
    ],
    output: { symbol: 'XL', label: 'Reactancia Inductiva (Ω)', unit: 'Ω' },
    resolve: ({ f, L }) => {
      const XL = 2 * Math.PI * parseFloat(f) * parseFloat(L);
      return { result: { XL: formatNumber(XL) }, steps: [`XL = 2 * PI * ${f} * ${L} = ${formatNumber(XL)} Ω`] };
    },
  },
  {
    id: 'reactancia-inductiva-l',
    groupId: 'reactancia-inductiva',
    title: 'Calcular Inductancia (L)',
    isFundamental: false,
    formula: 'L = XL / (2 * PI * f)',
    variables: [
      { symbol: 'XL', label: 'Reactancia Inductiva (Ω)', unit: 'Ω' },
      { symbol: 'f', label: 'Frecuencia (Hz)', unit: 'Hz' },
    ],
    output: { symbol: 'L', label: 'Inductancia (H)', unit: 'H' },
    resolve: ({ XL, f }) => {
      const L = parseFloat(XL) / (2 * Math.PI * parseFloat(f));
      return { result: { L: formatNumber(L) }, steps: [`L = ${XL} / (2 * PI * ${f}) = ${formatNumber(L)} H`] };
    },
  },
  {
    id: 'reactancia-inductiva-f',
    groupId: 'reactancia-inductiva',
    title: 'Calcular Frecuencia (f)',
    isFundamental: false,
    formula: 'f = XL / (2 * PI * L)',
    variables: [
      { symbol: 'XL', label: 'Reactancia Inductiva (Ω)', unit: 'Ω' },
      { symbol: 'L', label: 'Inductancia (H)', unit: 'H' },
    ],
    output: { symbol: 'f', label: 'Frecuencia (Hz)', unit: 'Hz' },
    resolve: ({ XL, L }) => {
      const f = parseFloat(XL) / (2 * Math.PI * parseFloat(L));
      return { result: { f: formatNumber(f) }, steps: [`f = ${XL} / (2 * PI * ${L}) = ${formatNumber(f)} Hz`] };
    },
  },

  // --- Grupo 2: Reactancia Capacitiva ---
  {
    id: 'reactancia-capacitiva',
    groupId: 'reactancia-capacitiva',
    title: 'Calcular Reactancia Capacitiva (XC)',
    isFundamental: true,
    formula: 'XC = 1 / (2 * PI * f * C)',
    variables: [
      { symbol: 'f', label: 'Frecuencia (Hz)', unit: 'Hz' },
      { symbol: 'C', label: 'Capacitancia (F)', unit: 'F' },
    ],
    output: { symbol: 'XC', label: 'Reactancia Capacitiva (Ω)', unit: 'Ω' },
    resolve: ({ f, C }) => {
      const XC = 1 / (2 * Math.PI * parseFloat(f) * parseFloat(C));
      return { result: { XC: formatNumber(XC) }, steps: [`XC = 1 / (2 * PI * ${f} * ${C}) = ${formatNumber(XC)} Ω`] };
    },
  },
  {
    id: 'reactancia-capacitiva-c',
    groupId: 'reactancia-capacitiva',
    title: 'Calcular Capacitancia (C)',
    isFundamental: false,
    formula: 'C = 1 / (2 * PI * f * XC)',
    variables: [
      { symbol: 'f', label: 'Frecuencia (Hz)', unit: 'Hz' },
      { symbol: 'XC', label: 'Reactancia Capacitiva (Ω)', unit: 'Ω' },
    ],
    output: { symbol: 'C', label: 'Capacitancia (F)', unit: 'F' },
    resolve: ({ f, XC }) => {
      const C = 1 / (2 * Math.PI * parseFloat(f) * parseFloat(XC));
      return { result: { C: formatNumber(C) }, steps: [`C = 1 / (2 * PI * ${f} * ${XC}) = ${formatNumber(C)} F`] };
    },
  },
  {
    id: 'reactancia-capacitiva-f',
    groupId: 'reactancia-capacitiva',
    title: 'Calcular Frecuencia (f)',
    isFundamental: false,
    formula: 'f = 1 / (2 * PI * XC * C)',
    variables: [
      { symbol: 'XC', label: 'Reactancia Capacitiva (Ω)', unit: 'Ω' },
      { symbol: 'C', label: 'Capacitancia (F)', unit: 'F' },
    ],
    output: { symbol: 'f', label: 'Frecuencia (Hz)', unit: 'Hz' },
    resolve: ({ XC, C }) => {
      const f = 1 / (2 * Math.PI * parseFloat(XC) * parseFloat(C));
      return { result: { f: formatNumber(f) }, steps: [`f = 1 / (2 * PI * ${XC} * ${C}) = ${formatNumber(f)} Hz`] };
    },
  },

  // --- Grupo 3: Impedancia Serie ---
  {
    id: 'impedancia-serie',
    groupId: 'impedancia-serie',
    title: 'Calcular Impedancia (Z)',
    isFundamental: true,
    formula: 'Z = sqrt(R^2 + (XL - XC)^2)',
    variables: [
      { symbol: 'R', label: 'Resistencia (Ω)', unit: 'Ω' },
      { symbol: 'XL', label: 'Reactancia Inductiva (Ω)', unit: 'Ω' },
      { symbol: 'XC', label: 'Reactancia Capacitiva (Ω)', unit: 'Ω' },
    ],
    output: { symbol: 'Z', label: 'Impedancia (Ω)', unit: 'Ω' },
    resolve: ({ R, XL, XC }) => {
      const X = parseFloat(XL) - parseFloat(XC);
      const Z = Math.sqrt(parseFloat(R) ** 2 + X ** 2);
      return { result: { Z: formatNumber(Z) }, steps: [`Z = sqrt(${R}^2 + (${XL} - ${XC})^2) = ${formatNumber(Z)} Ω`] };
    },
  },
  {
    id: 'impedancia-serie-r',
    groupId: 'impedancia-serie',
    title: 'Calcular Resistencia (R)',
    isFundamental: false,
    formula: 'R = sqrt(Z^2 - X^2)',
    variables: [
      { symbol: 'Z', label: 'Impedancia (Ω)', unit: 'Ω' },
      { symbol: 'X', label: 'Reactancia Total (XL - XC) (Ω)', unit: 'Ω' },
    ],
    output: { symbol: 'R', label: 'Resistencia (Ω)', unit: 'Ω' },
    resolve: ({ Z, X }) => {
      const R = Math.sqrt(parseFloat(Z) ** 2 - parseFloat(X) ** 2);
      return { result: { R: formatNumber(R) }, steps: [`R = sqrt(${Z}^2 - ${X}^2) = ${formatNumber(R)} Ω`] };
    },
  },
  {
    id: 'impedancia-serie-x',
    groupId: 'impedancia-serie',
    title: 'Calcular Reactancia Neta (X)',
    isFundamental: false,
    formula: 'X = sqrt(Z^2 - R^2)',
    variables: [
      { symbol: 'Z', label: 'Impedancia (Ω)', unit: 'Ω' },
      { symbol: 'R', label: 'Resistencia (Ω)', unit: 'Ω' },
    ],
    output: { symbol: 'X', label: 'Reactancia Neta (XL - XC) (Ω)', unit: 'Ω' },
    resolve: ({ Z, R }) => {
      const X = Math.sqrt(parseFloat(Z) ** 2 - parseFloat(R) ** 2);
      return { result: { X: formatNumber(X) }, steps: [`X = sqrt(${Z}^2 - ${R}^2) = ${formatNumber(X)} Ω`] };
    },
  },

  // --- Grupo 4: Ley de Ohm CA ---
  {
    id: 'ley-ohm-ca',
    groupId: 'ley-ohm-ca',
    title: 'Calcular Voltaje (V)',
    isFundamental: true,
    formula: 'V = I * Z',
    variables: [
      { symbol: 'I', label: 'Corriente (A)', unit: 'A' },
      { symbol: 'Z', label: 'Impedancia (Ω)', unit: 'Ω' },
    ],
    output: { symbol: 'V', label: 'Voltaje (V)', unit: 'V' },
    resolve: ({ I, Z }) => {
      const V = parseFloat(I) * parseFloat(Z);
      return { result: { V: formatNumber(V) }, steps: [`V = ${I} * ${Z} = ${formatNumber(V)} V`] };
    },
  },
  {
    id: 'ley-ohm-ca-i',
    groupId: 'ley-ohm-ca',
    title: 'Calcular Corriente (I)',
    isFundamental: false,
    formula: 'I = V / Z',
    variables: [
      { symbol: 'V', label: 'Voltaje (V)', unit: 'V' },
      { symbol: 'Z', label: 'Impedancia (Ω)', unit: 'Ω' },
    ],
    output: { symbol: 'I', label: 'Corriente (A)', unit: 'A' },
    resolve: ({ V, Z }) => {
      const I = parseFloat(V) / parseFloat(Z);
      return { result: { I: formatNumber(I) }, steps: [`I = ${V} / ${Z} = ${formatNumber(I)} A`] };
    },
  },
  {
    id: 'ley-ohm-ca-z',
    groupId: 'ley-ohm-ca',
    title: 'Calcular Impedancia (Z)',
    isFundamental: false,
    formula: 'Z = V / I',
    variables: [
      { symbol: 'V', label: 'Voltaje (V)', unit: 'V' },
      { symbol: 'I', label: 'Corriente (A)', unit: 'A' },
    ],
    output: { symbol: 'Z', label: 'Impedancia (Ω)', unit: 'Ω' },
    resolve: ({ V, I }) => {
      const Z = parseFloat(V) / parseFloat(I);
      return { result: { Z: formatNumber(Z) }, steps: [`Z = ${V} / ${I} = ${formatNumber(Z)} Ω`] };
    },
  },

  // --- Grupo 5: Potencia Aparente ---
  {
    id: 'potencia-aparente-ca',
    groupId: 'potencia-aparente-ca',
    title: 'Calcular Potencia Aparente (S)',
    isFundamental: true,
    formula: 'S = V_rms * I_rms',
    variables: [
      { symbol: 'V_rms', label: 'Voltaje Eficaz (V)', unit: 'V' },
      { symbol: 'I_rms', label: 'Corriente Eficaz (A)', unit: 'A' },
    ],
    output: { symbol: 'S', label: 'Potencia Aparente (VA)', unit: 'VA' },
    resolve: ({ V_rms, I_rms }) => {
      const S = parseFloat(V_rms) * parseFloat(I_rms);
      return { result: { S: formatNumber(S) }, steps: [`S = ${V_rms} * ${I_rms} = ${formatNumber(S)} VA`] };
    },
  },
  {
    id: 'potencia-aparente-ca-v',
    groupId: 'potencia-aparente-ca',
    title: 'Calcular Voltaje (Vrms)',
    isFundamental: false,
    formula: 'V_rms = S / I_rms',
    variables: [
      { symbol: 'S', label: 'Potencia Aparente (VA)', unit: 'VA' },
      { symbol: 'I_rms', label: 'Corriente Eficaz (A)', unit: 'A' },
    ],
    output: { symbol: 'V_rms', label: 'Voltaje Eficaz (V)', unit: 'V' },
    resolve: ({ S, I_rms }) => {
      const V_rms = parseFloat(S) / parseFloat(I_rms);
      return { result: { V_rms: formatNumber(V_rms) }, steps: [`V_rms = ${S} / ${I_rms} = ${formatNumber(V_rms)} V`] };
    },
  },
  {
    id: 'potencia-aparente-ca-i',
    groupId: 'potencia-aparente-ca',
    title: 'Calcular Corriente (Irms)',
    isFundamental: false,
    formula: 'I_rms = S / V_rms',
    variables: [
      { symbol: 'S', label: 'Potencia Aparente (VA)', unit: 'VA' },
      { symbol: 'V_rms', label: 'Voltaje Eficaz (V)', unit: 'V' },
    ],
    output: { symbol: 'I_rms', label: 'Corriente Eficaz (A)', unit: 'A' },
    resolve: ({ S, V_rms }) => {
      const I_rms = parseFloat(S) / parseFloat(V_rms);
      return { result: { I_rms: formatNumber(I_rms) }, steps: [`I_rms = ${S} / ${V_rms} = ${formatNumber(I_rms)} A`] };
    },
  },

  // --- Grupo 6: Potencia Activa y Factor de Potencia ---
  {
    id: 'potencia-ca',
    groupId: 'potencia-ca',
    title: 'Calcular Potencia Activa (P)',
    isFundamental: true,
    formula: 'P = S * FP',
    variables: [
      { symbol: 'S', label: 'Potencia Aparente (VA)', unit: 'VA' },
      { symbol: 'FP', label: 'Factor de Potencia', unit: '' },
    ],
    output: { symbol: 'P', label: 'Potencia Activa (W)', unit: 'W' },
    resolve: ({ S, FP }) => {
      const P = parseFloat(S) * parseFloat(FP);
      return { result: { P: formatNumber(P) }, steps: [`P = ${S} * ${FP} = ${formatNumber(P)} W`] };
    },
  },
  {
    id: 'potencia-ca-fp',
    groupId: 'potencia-ca',
    title: 'Calcular Factor de Potencia (FP)',
    isFundamental: false,
    formula: 'FP = P / S',
    variables: [
      { symbol: 'P', label: 'Potencia Activa (W)', unit: 'W' },
      { symbol: 'S', label: 'Potencia Aparente (VA)', unit: 'VA' },
    ],
    output: { symbol: 'FP', label: 'Factor de Potencia' },
    resolve: ({ P, S }) => {
      const FP = parseFloat(P) / parseFloat(S);
      return { result: { FP: formatNumber(FP) }, steps: [`FP = ${P} / ${S} = ${formatNumber(FP)}`] };
    },
  },
  {
    id: 'potencia-ca-s',
    groupId: 'potencia-ca',
    title: 'Calcular Potencia Aparente (S)',
    isFundamental: false,
    formula: 'S = P / FP',
    variables: [
      { symbol: 'P', label: 'Potencia Activa (W)', unit: 'W' },
      { symbol: 'FP', label: 'Factor de Potencia', unit: '' },
    ],
    output: { symbol: 'S', label: 'Potencia Aparente (VA)', unit: 'VA' },
    resolve: ({ P, FP }) => {
      const S = parseFloat(P) / parseFloat(FP);
      return { result: { S: formatNumber(S) }, steps: [`S = ${P} / ${FP} = ${formatNumber(S)} VA`] };
    },
  },
];
