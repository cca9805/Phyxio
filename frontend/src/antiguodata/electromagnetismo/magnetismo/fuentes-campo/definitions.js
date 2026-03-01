import { formatNumber } from '../../../../utils/formatNumber';

const MU0 = 4 * Math.PI * 1e-7; // Permeabilidad del vacío en T·m/A

export const definitions = [
  // --- Grupo 1: Campo de Alambre Recto Infinito ---
  {
    id: 'alambre-recto-b',
    groupId: 'campo_alambre_recto',
    title: 'Calcular Campo (B)',
    formula: 'B = (μ₀ * I) / (2 * π * r)',
    variables: [
      { symbol: 'I', label: 'Corriente', unit: 'A' },
      { symbol: 'r', label: 'Distancia', unit: 'm' }
    ],
    output: { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
    resolve: ({ I, r }) => {
      const B = (MU0 * parseFloat(I)) / (2 * Math.PI * parseFloat(r));
      return { result: { B: formatNumber(B) }, steps: [`B = (μ₀ * ${I}) / (2 * π * ${r}) = ${formatNumber(B)} T`] };
    }
  },
  {
    id: 'alambre-recto-i',
    groupId: 'campo_alambre_recto',
    title: 'Calcular Corriente (I)',
    formula: 'I = (B * 2 * π * r) / μ₀',
    variables: [
      { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
      { symbol: 'r', label: 'Distancia', unit: 'm' }
    ],
    output: { symbol: 'I', label: 'Corriente', unit: 'A' },
    resolve: ({ B, r }) => {
      const I = (parseFloat(B) * 2 * Math.PI * parseFloat(r)) / MU0;
      return { result: { I: formatNumber(I) }, steps: [`I = (${B} * 2 * π * ${r}) / μ₀ = ${formatNumber(I)} A`] };
    }
  },
  {
    id: 'alambre-recto-r',
    groupId: 'campo_alambre_recto',
    title: 'Calcular Distancia (r)',
    formula: 'r = (μ₀ * I) / (2 * π * B)',
    variables: [
      { symbol: 'I', label: 'Corriente', unit: 'A' },
      { symbol: 'B', label: 'Campo Magnético', unit: 'T' }
    ],
    output: { symbol: 'r', label: 'Distancia', unit: 'm' },
    resolve: ({ I, B }) => {
      const r = (MU0 * parseFloat(I)) / (2 * Math.PI * parseFloat(B));
      return { result: { r: formatNumber(r) }, steps: [`r = (μ₀ * ${I}) / (2 * π * ${B}) = ${formatNumber(r)} m`] };
    }
  },

  // --- Grupo 2: Campo en Centro de Espira Circular ---
  {
    id: 'espira-circular-b',
    groupId: 'campo_espira_circular',
    title: 'Calcular Campo (B)',
    formula: 'B = (μ₀ * I) / (2 * R)',
    variables: [
      { symbol: 'I', label: 'Corriente', unit: 'A' },
      { symbol: 'R', label: 'Radio de la Espira', unit: 'm' }
    ],
    output: { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
    resolve: ({ I, R }) => {
      const B = (MU0 * parseFloat(I)) / (2 * parseFloat(R));
      return { result: { B: formatNumber(B) }, steps: [`B = (μ₀ * ${I}) / (2 * ${R}) = ${formatNumber(B)} T`] };
    }
  },
  {
    id: 'espira-circular-i',
    groupId: 'campo_espira_circular',
    title: 'Calcular Corriente (I)',
    formula: 'I = (B * 2 * R) / μ₀',
    variables: [
      { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
      { symbol: 'R', label: 'Radio de la Espira', unit: 'm' }
    ],
    output: { symbol: 'I', label: 'Corriente', unit: 'A' },
    resolve: ({ B, R }) => {
      const I = (parseFloat(B) * 2 * parseFloat(R)) / MU0;
      return { result: { I: formatNumber(I) }, steps: [`I = (${B} * 2 * ${R}) / μ₀ = ${formatNumber(I)} A`] };
    }
  },
  {
    id: 'espira-circular-r',
    groupId: 'campo_espira_circular',
    title: 'Calcular Radio (R)',
    formula: 'R = (μ₀ * I) / (2 * B)',
    variables: [
      { symbol: 'I', label: 'Corriente', unit: 'A' },
      { symbol: 'B', label: 'Campo Magnético', unit: 'T' }
    ],
    output: { symbol: 'R', label: 'Radio de la Espira', unit: 'm' },
    resolve: ({ I, B }) => {
      const R = (MU0 * parseFloat(I)) / (2 * parseFloat(B));
      return { result: { R: formatNumber(R) }, steps: [`R = (μ₀ * ${I}) / (2 * ${B}) = ${formatNumber(R)} m`] };
    }
  },

  // --- Grupo 3: Campo en un Solenoide Ideal ---
  {
    id: 'solenoide-b',
    groupId: 'campo_solenoide',
    title: 'Calcular Campo (B)',
    formula: 'B = μ₀ * n * I',
    variables: [
      { symbol: 'n', label: 'Densidad de Vueltas', unit: 'vueltas/m' },
      { symbol: 'I', label: 'Corriente', unit: 'A' }
    ],
    output: { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
    resolve: ({ n, I }) => {
      const B = MU0 * parseFloat(n) * parseFloat(I);
      return { result: { B: formatNumber(B) }, steps: [`B = μ₀ * ${n} * ${I} = ${formatNumber(B)} T`] };
    }
  },
  {
    id: 'solenoide-n',
    groupId: 'campo_solenoide',
    title: 'Calcular Densidad de Vueltas (n)',
    formula: 'n = B / (μ₀ * I)',
    variables: [
      { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
      { symbol: 'I', label: 'Corriente', unit: 'A' }
    ],
    output: { symbol: 'n', label: 'Densidad de Vueltas', unit: 'vueltas/m' },
    resolve: ({ B, I }) => {
      const n = parseFloat(B) / (MU0 * parseFloat(I));
      return { result: { n: formatNumber(n) }, steps: [`n = ${B} / (μ₀ * ${I}) = ${formatNumber(n)} vueltas/m`] };
    }
  },
  {
    id: 'solenoide-i',
    groupId: 'campo_solenoide',
    title: 'Calcular Corriente (I)',
    formula: 'I = B / (μ₀ * n)',
    variables: [
      { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
      { symbol: 'n', label: 'Densidad de Vueltas', unit: 'vueltas/m' }
    ],
    output: { symbol: 'I', label: 'Corriente', unit: 'A' },
    resolve: ({ B, n }) => {
      const I = parseFloat(B) / (MU0 * parseFloat(n));
      return { result: { I: formatNumber(I) }, steps: [`I = ${B} / (μ₀ * ${n}) = ${formatNumber(I)} A`] };
    }
  },

  // --- Grupo 4: Campo en un Toroide ---
  {
    id: 'toroide-b',
    groupId: 'campo_toroide',
    title: 'Calcular Campo (B)',
    formula: 'B = (μ₀ * N * I) / (2 * π * r)',
    variables: [
      { symbol: 'N', label: 'Número de Vueltas', unit: '' },
      { symbol: 'I', label: 'Corriente', unit: 'A' },
      { symbol: 'r', label: 'Radio', unit: 'm' }
    ],
    output: { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
    resolve: ({ N, I, r }) => {
      const B = (MU0 * parseFloat(N) * parseFloat(I)) / (2 * Math.PI * parseFloat(r));
      return { result: { B: formatNumber(B) }, steps: [`B = (μ₀ * ${N} * ${I}) / (2 * π * ${r}) = ${formatNumber(B)} T`] };
    }
  },
  {
    id: 'toroide-n',
    groupId: 'campo_toroide',
    title: 'Calcular Número de Vueltas (N)',
    formula: 'N = (B * 2 * π * r) / (μ₀ * I)',
    variables: [
      { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
      { symbol: 'I', label: 'Corriente', unit: 'A' },
      { symbol: 'r', label: 'Radio', unit: 'm' }
    ],
    output: { symbol: 'N', label: 'Número de Vueltas', unit: '' },
    resolve: ({ B, I, r }) => {
      const N = (parseFloat(B) * 2 * Math.PI * parseFloat(r)) / (MU0 * parseFloat(I));
      return { result: { N: formatNumber(N) }, steps: [`N = (${B} * 2 * π * ${r}) / (μ₀ * ${I}) = ${formatNumber(N)}`] };
    }
  },
  {
    id: 'toroide-i',
    groupId: 'campo_toroide',
    title: 'Calcular Corriente (I)',
    formula: 'I = (B * 2 * π * r) / (μ₀ * N)',
    variables: [
      { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
      { symbol: 'N', label: 'Número de Vueltas', unit: '' },
      { symbol: 'r', label: 'Radio', unit: 'm' }
    ],
    output: { symbol: 'I', label: 'Corriente', unit: 'A' },
    resolve: ({ B, N, r }) => {
      const I = (parseFloat(B) * 2 * Math.PI * parseFloat(r)) / (MU0 * parseFloat(N));
      return { result: { I: formatNumber(I) }, steps: [`I = (${B} * 2 * π * ${r}) / (μ₀ * ${N}) = ${formatNumber(I)} A`] };
    }
  },
  {
    id: 'toroide-r',
    groupId: 'campo_toroide',
    title: 'Calcular Radio (r)',
    formula: 'r = (μ₀ * N * I) / (2 * π * B)',
    variables: [
      { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
      { symbol: 'N', label: 'Número de Vueltas', unit: '' },
      { symbol: 'I', label: 'Corriente', unit: 'A' }
    ],
    output: { symbol: 'r', label: 'Radio', unit: 'm' },
    resolve: ({ B, N, I }) => {
      const r = (MU0 * parseFloat(N) * parseFloat(I)) / (2 * Math.PI * parseFloat(B));
      return { result: { r: formatNumber(r) }, steps: [`r = (μ₀ * ${N} * ${I}) / (2 * π * ${B}) = ${formatNumber(r)} m`] };
    }
  }
];
