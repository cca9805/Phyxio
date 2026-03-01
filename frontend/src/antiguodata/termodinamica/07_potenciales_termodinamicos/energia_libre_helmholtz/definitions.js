import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'energia-libre-helmholtz',
    groupId: 'energia_libre_helmholtz-grupo-1',
    title: 'Energía Libre de Helmholtz (A)',
    isFundamental: true,
    formula: String.raw`A = U - TS`,
    variables: [
      { symbol: 'U', label: 'Energía interna (U)', unit: 'J' },
      { symbol: 'T', label: 'Temperatura absoluta (T)', unit: 'K' },
      { symbol: 'S', label: 'Entropía (S)', unit: 'J/K' }
    ],
    output: { symbol: 'A', label: 'Energía libre de Helmholtz (A)', unit: 'J' },
    resolve: ({ U, T, S }) => {
      const A = U - T * S;
      return {
        result: { A: formatNumber(A) },
        steps: [
          `A = U - TS`,
          `A = ${U} - (${T} × ${S})`,
          `A = ${U} - ${formatNumber(T * S)}`,
          `A = ${formatNumber(A)} J`
        ]
      };
    }
  },
  {
    id: 'cambio-energia-libre-helmholtz',
    groupId: 'energia_libre_helmholtz-grupo-1',
    title: 'Cambio de Energía Libre de Helmholtz (ΔA)',
    isFundamental: true,
    formula: String.raw`\Delta A = \Delta U - T\Delta S`,
    variables: [
      { symbol: 'deltaU', label: 'Cambio de energía interna (ΔU)', unit: 'J' },
      { symbol: 'T', label: 'Temperatura absoluta (T)', unit: 'K' },
      { symbol: 'deltaS', label: 'Cambio de entropía (ΔS)', unit: 'J/K' }
    ],
    output: { symbol: 'deltaA', label: 'Cambio de energía libre de Helmholtz (ΔA)', unit: 'J' },
    resolve: ({ deltaU, T, deltaS }) => {
      const deltaA = deltaU - T * deltaS;
      return {
        result: { deltaA: formatNumber(deltaA) },
        steps: [
          `ΔA = ΔU - TΔS`,
          `ΔA = ${deltaU} - (${T} × ${deltaS})`,
          `ΔA = ${deltaU} - ${formatNumber(T * deltaS)}`,
          `ΔA = ${formatNumber(deltaA)} J`
        ]
      };
    }
  },
  {
    id: 'trabajo-maximo-helmholtz',
    groupId: 'energia_libre_helmholtz-grupo-1',
    title: 'Trabajo Máximo (W_max)',
    isFundamental: false,
    formula: String.raw`W_{\text{max}} = -\Delta A`,
    variables: [
      { symbol: 'deltaA', label: 'Cambio de energía libre de Helmholtz (ΔA)', unit: 'J' }
    ],
    output: { symbol: 'W_max', label: 'Trabajo máximo (W_max)', unit: 'J' },
    resolve: ({ deltaA }) => {
      const W_max = -deltaA;
      return {
        result: { W_max: formatNumber(W_max) },
        steps: [
          `El trabajo máximo es el negativo de ΔA`,
          `W_max = -ΔA`,
          `W_max = -(${deltaA})`,
          `W_max = ${formatNumber(W_max)} J`
        ]
      };
    }
  }
];
