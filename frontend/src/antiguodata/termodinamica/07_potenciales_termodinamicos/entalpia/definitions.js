import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'entalpia-definicion',
    groupId: 'entalpia-grupo-1',
    title: 'Entalpía (H)',
    isFundamental: true,
    formula: String.raw`H = U + PV`,
    variables: [
      { symbol: 'U', label: 'Energía interna (U)', unit: 'J' },
      { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
      { symbol: 'V', label: 'Volumen (V)', unit: 'm³' }
    ],
    output: { symbol: 'H', label: 'Entalpía (H)', unit: 'J' },
    resolve: ({ U, P, V }) => {
      const H = U + P * V;
      return {
        result: { H: formatNumber(H) },
        steps: [
          `H = U + PV`,
          `H = ${U} + (${P} × ${V})`,
          `H = ${U} + ${formatNumber(P * V)}`,
          `H = ${formatNumber(H)} J`
        ]
      };
    }
  },
  {
    id: 'cambio-entalpia',
    groupId: 'entalpia-grupo-1',
    title: 'Cambio de Entalpía (ΔH)',
    isFundamental: true,
    formula: String.raw`\Delta H = \Delta U + \Delta(PV)`,
    variables: [
      { symbol: 'deltaU', label: 'Cambio de energía interna (ΔU)', unit: 'J' },
      { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
      { symbol: 'deltaV', label: 'Cambio de volumen (ΔV)', unit: 'm³' }
    ],
    output: { symbol: 'deltaH', label: 'Cambio de entalpía (ΔH)', unit: 'J' },
    resolve: ({ deltaU, P, deltaV }) => {
      const deltaH = deltaU + P * deltaV;
      return {
        result: { deltaH: formatNumber(deltaH) },
        steps: [
          `Para presión constante: ΔH = ΔU + PΔV`,
          `ΔH = ${deltaU} + (${P} × ${deltaV})`,
          `ΔH = ${deltaU} + ${formatNumber(P * deltaV)}`,
          `ΔH = ${formatNumber(deltaH)} J`
        ]
      };
    }
  },
  {
    id: 'entalpia-gas-ideal',
    groupId: 'entalpia-grupo-1',
    title: 'Entalpía de Gas Ideal (H)',
    isFundamental: true,
    formula: String.raw`H = nC_p T`,
    variables: [
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'C_p', label: 'Capacidad calorífica a P constante (C_p)', unit: 'J/(mol·K)' },
      { symbol: 'T', label: 'Temperatura absoluta (T)', unit: 'K' }
    ],
    output: { symbol: 'H', label: 'Entalpía (H)', unit: 'J' },
    resolve: ({ n, C_p, T }) => {
      const H = n * C_p * T;
      return {
        result: { H: formatNumber(H) },
        steps: [
          `H = n × C_p × T`,
          `H = ${n} × ${C_p} × ${T}`,
          `H = ${formatNumber(H)} J`
        ]
      };
    }
  },
  {
    id: 'cambio-entalpia-temperatura',
    groupId: 'entalpia-grupo-1',
    title: 'Cambio de H por Temperatura (ΔH)',
    isFundamental: false,
    formula: String.raw`\Delta H = nC_p\Delta T`,
    variables: [
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'C_p', label: 'Capacidad calorífica a P constante (C_p)', unit: 'J/(mol·K)' },
      { symbol: 'deltaT', label: 'Cambio de temperatura (ΔT)', unit: 'K' }
    ],
    output: { symbol: 'deltaH', label: 'Cambio de entalpía (ΔH)', unit: 'J' },
    resolve: ({ n, C_p, deltaT }) => {
      const deltaH = n * C_p * deltaT;
      return {
        result: { deltaH: formatNumber(deltaH) },
        steps: [
          `ΔH = n × C_p × ΔT`,
          `ΔH = ${n} × ${C_p} × ${deltaT}`,
          `ΔH = ${formatNumber(deltaH)} J`
        ]
      };
    }
  },
  {
    id: 'calor-presion-constante',
    groupId: 'entalpia-grupo-1',
    title: 'Calor a Presión Constante (Q_p)',
    isFundamental: false,
    formula: String.raw`Q_p = \Delta H`,
    variables: [
      { symbol: 'deltaH', label: 'Cambio de entalpía (ΔH)', unit: 'J' }
    ],
    output: { symbol: 'Q_p', label: 'Calor a presión constante (Q_p)', unit: 'J' },
    resolve: ({ deltaH }) => {
      const Q_p = deltaH;
      return {
        result: { Q_p: formatNumber(Q_p) },
        steps: [
          `A presión constante: Q_p = ΔH`,
          `Q_p = ${deltaH} J`
        ]
      };
    }
  }
];
