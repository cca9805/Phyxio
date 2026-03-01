import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'energia-libre-gibbs',
    groupId: 'energia_libre_gibbs-grupo-1',
    title: 'Energía Libre de Gibbs (G)',
    isFundamental: true,
    formula: String.raw`G = H - TS`,
    variables: [
      { symbol: 'H', label: 'Entalpía (H)', unit: 'J' },
      { symbol: 'T', label: 'Temperatura absoluta (T)', unit: 'K' },
      { symbol: 'S', label: 'Entropía (S)', unit: 'J/K' }
    ],
    output: { symbol: 'G', label: 'Energía libre de Gibbs (G)', unit: 'J' },
    resolve: ({ H, T, S }) => {
      const G = H - T * S;
      return {
        result: { G: formatNumber(G) },
        steps: [
          `G = H - TS`,
          `G = ${H} - (${T} × ${S})`,
          `G = ${H} - ${formatNumber(T * S)}`,
          `G = ${formatNumber(G)} J`
        ]
      };
    }
  },
  {
    id: 'cambio-energia-libre-gibbs',
    groupId: 'energia_libre_gibbs-grupo-1',
    title: 'Cambio de Energía Libre de Gibbs (ΔG)',
    isFundamental: true,
    formula: String.raw`\Delta G = \Delta H - T\Delta S`,
    variables: [
      { symbol: 'deltaH', label: 'Cambio de entalpía (ΔH)', unit: 'J' },
      { symbol: 'T', label: 'Temperatura absoluta (T)', unit: 'K' },
      { symbol: 'deltaS', label: 'Cambio de entropía (ΔS)', unit: 'J/K' }
    ],
    output: { symbol: 'deltaG', label: 'Cambio de energía libre de Gibbs (ΔG)', unit: 'J' },
    resolve: ({ deltaH, T, deltaS }) => {
      const deltaG = deltaH - T * deltaS;
      return {
        result: { deltaG: formatNumber(deltaG) },
        steps: [
          `ΔG = ΔH - TΔS`,
          `ΔG = ${deltaH} - (${T} × ${deltaS})`,
          `ΔG = ${deltaH} - ${formatNumber(T * deltaS)}`,
          `ΔG = ${formatNumber(deltaG)} J`
        ]
      };
    }
  },
  {
    id: 'trabajo-maximo-util',
    groupId: 'energia_libre_gibbs-grupo-1',
    title: 'Trabajo Máximo Útil (W_max)',
    isFundamental: false,
    formula: String.raw`W_{\text{max}} = -\Delta G`,
    variables: [
      { symbol: 'deltaG', label: 'Cambio de energía libre de Gibbs (ΔG)', unit: 'J' }
    ],
    output: { symbol: 'W_max', label: 'Trabajo máximo útil (W_max)', unit: 'J' },
    resolve: ({ deltaG }) => {
      const W_max = -deltaG;
      return {
        result: { W_max: formatNumber(W_max) },
        steps: [
          `El trabajo máximo útil es el negativo de ΔG`,
          `W_max = -ΔG`,
          `W_max = -(${deltaG})`,
          `W_max = ${formatNumber(W_max)} J`
        ]
      };
    }
  }
];
