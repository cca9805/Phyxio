import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Definición de Corriente ---
  {
    id: 'corriente-desde-carga-tiempo',
    groupId: 'definicion_corriente',
    title: 'Calcular Corriente (I)',
    formula: 'I = ΔQ / Δt',
    variables: [
      { symbol: 'ΔQ', label: 'Carga', unit: 'C' },
      { symbol: 'Δt', label: 'Tiempo', unit: 's' }
    ],
    output: { symbol: 'I', label: 'Corriente', unit: 'A' },
    resolve: ({ ΔQ, Δt }) => {
      const I = parseFloat(ΔQ) / parseFloat(Δt);
      return { result: { I: formatNumber(I) }, steps: [`I = ${ΔQ} / ${Δt} = ${formatNumber(I)} A`] };
    }
  },
  {
    id: 'carga-desde-corriente-tiempo',
    groupId: 'definicion_corriente',
    title: 'Calcular Carga (ΔQ)',
    formula: 'ΔQ = I ⋅ Δt',
    variables: [
      { symbol: 'I', label: 'Corriente', unit: 'A' },
      { symbol: 'Δt', label: 'Tiempo', unit: 's' }
    ],
    output: { symbol: 'ΔQ', label: 'Carga', unit: 'C' },
    resolve: ({ I, Δt }) => {
      const ΔQ = parseFloat(I) * parseFloat(Δt);
      return { result: { ΔQ: formatNumber(ΔQ) }, steps: [`ΔQ = ${I} ⋅ ${Δt} = ${formatNumber(ΔQ)} C`] };
    }
  },
  {
    id: 'tiempo-desde-carga-corriente',
    groupId: 'definicion_corriente',
    title: 'Calcular Tiempo (Δt)',
    formula: 'Δt = ΔQ / I',
    variables: [
      { symbol: 'ΔQ', label: 'Carga', unit: 'C' },
      { symbol: 'I', label: 'Corriente', unit: 'A' }
    ],
    output: { symbol: 'Δt', label: 'Tiempo', unit: 's' },
    resolve: ({ ΔQ, I }) => {
      const Δt = parseFloat(ΔQ) / parseFloat(I);
      return { result: { Δt: formatNumber(Δt) }, steps: [`Δt = ${ΔQ} / ${I} = ${formatNumber(Δt)} s`] };
    }
  },

  // --- Grupo 2: Ley de Ohm ---
  {
    id: 'voltaje-desde-corriente-resistencia',
    groupId: 'ley_ohm',
    title: 'Calcular Voltaje (V)',
    formula: 'V = I ⋅ R',
    variables: [
      { symbol: 'I', label: 'Corriente', unit: 'A' },
      { symbol: 'R', label: 'Resistencia', unit: 'Ω' }
    ],
    output: { symbol: 'V', label: 'Voltaje', unit: 'V' },
    resolve: ({ I, R }) => {
      const V = parseFloat(I) * parseFloat(R);
      return { result: { V: formatNumber(V) }, steps: [`V = ${I} ⋅ ${R} = ${formatNumber(V)} V`] };
    }
  },
  {
    id: 'corriente-desde-voltaje-resistencia',
    groupId: 'ley_ohm',
    title: 'Calcular Corriente (I)',
    formula: 'I = V / R',
    variables: [
      { symbol: 'V', label: 'Voltaje', unit: 'V' },
      { symbol: 'R', label: 'Resistencia', unit: 'Ω' }
    ],
    output: { symbol: 'I', label: 'Corriente', unit: 'A' },
    resolve: ({ V, R }) => {
      const I = parseFloat(V) / parseFloat(R);
      return { result: { I: formatNumber(I) }, steps: [`I = ${V} / ${R} = ${formatNumber(I)} A`] };
    }
  },
  {
    id: 'resistencia-desde-voltaje-corriente',
    groupId: 'ley_ohm',
    title: 'Calcular Resistencia (R)',
    formula: 'R = V / I',
    variables: [
      { symbol: 'V', label: 'Voltaje', unit: 'V' },
      { symbol: 'I', label: 'Corriente', unit: 'A' }
    ],
    output: { symbol: 'R', label: 'Resistencia', unit: 'Ω' },
    resolve: ({ V, I }) => {
      const R = parseFloat(V) / parseFloat(I);
      return { result: { R: formatNumber(R) }, steps: [`R = ${V} / ${I} = ${formatNumber(R)} Ω`] };
    }
  }
];