import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'eficiencia-central',
    groupId: 'centrales_electricas-grupo-1',
    title: 'Eficiencia de Central Eléctrica (η)',
    isFundamental: true,
    formula: String.raw`\eta = \frac{W_{electrico}}{Q_{combustible}}`,
    variables: [
      { symbol: 'W_electrico', label: 'Trabajo eléctrico generado (W_{electrico})', unit: 'J' },
      { symbol: 'Q_combustible', label: 'Energía del combustible (Q_{combustible})', unit: 'J' }
    ],
    output: { symbol: 'eta', label: 'Eficiencia (η)', unit: 'adimensional' },
    resolve: ({ W_electrico, Q_combustible }) => {
      const eta = W_electrico / Q_combustible;
      const eta_percent = eta * 100;
      return {
        result: { eta: formatNumber(eta), eta_percent: formatNumber(eta_percent) },
        steps: [
          `η = W_{electrico} / Q_{combustible}`,
          `η = ${W_electrico} / ${Q_combustible}`,
          `η = ${formatNumber(eta)} = ${formatNumber(eta_percent)}%`
        ]
      };
    }
  },
  {
    id: 'perdidas-central',
    groupId: 'centrales_electricas-grupo-1',
    title: 'Pérdidas Totales (Q_{perdidas})',
    isFundamental: false,
    formula: String.raw`Q_{perdidas} = Q_{combustible} - W_{electrico}`,
    variables: [
      { symbol: 'Q_combustible', label: 'Energía del combustible (Q_{combustible})', unit: 'J' },
      { symbol: 'W_electrico', label: 'Trabajo eléctrico generado (W_{electrico})', unit: 'J' }
    ],
    output: { symbol: 'Q_perdidas', label: 'Pérdidas totales (Q_{perdidas})', unit: 'J' },
    resolve: ({ Q_combustible, W_electrico }) => {
      const Q_perdidas = Q_combustible - W_electrico;
      return {
        result: { Q_perdidas: formatNumber(Q_perdidas) },
        steps: [
          `Q_{perdidas} = Q_{combustible} - W_{electrico}`,
          `Q_{perdidas} = ${Q_combustible} - ${W_electrico}`,
          `Q_{perdidas} = ${formatNumber(Q_perdidas)}`
        ]
      };
    }
  },
  {
    id: 'calor-residual-central',
    groupId: 'centrales_electricas-grupo-1',
    title: 'Calor Residual (Q_{residual})',
    isFundamental: false,
    formula: String.raw`Q_{residual} = Q_{combustible} \times (1-\eta)` ,
    variables: [
      { symbol: 'Q_combustible', label: 'Energía del combustible (Q_{combustible})', unit: 'J' },
      { symbol: 'eta', label: 'Eficiencia de la central (η)', unit: 'adimensional' }
    ],
    output: { symbol: 'Q_residual', label: 'Calor residual (Q_{residual})', unit: 'J' },
    resolve: ({ Q_combustible, eta }) => {
      const Q_residual = Q_combustible * (1 - eta);
      return {
        result: { Q_residual: formatNumber(Q_residual) },
        steps: [
          `Q_{residual} = Q_{combustible} × (1-η)` ,
          `Q_{residual} = ${Q_combustible} × (1-${eta})` ,
          `Q_{residual} = ${formatNumber(Q_residual)}`
        ]
      };
    }
  },
  {
    id: 'potencia-central',
    groupId: 'potencia-central',
    title: 'Potencia Eléctrica Generada (P)',
    isFundamental: true,
    formula: String.raw`P = \eta \times \dot{Q}_{combustible}`,
    variables: [
      { symbol: 'eta', label: 'Eficiencia de la central (η)', unit: 'adimensional' },
      { symbol: 'Q_dot_combustible', label: 'Flujo de energía del combustible (Q̇_combustible)', unit: 'W' }
    ],
    output: { symbol: 'P', label: 'Potencia eléctrica (P)', unit: 'W' },
    resolve: ({ eta, Q_dot_combustible }) => {
      const P = eta * Q_dot_combustible;
      const P_MW = P / 1e6;
      return {
        result: { P: formatNumber(P), P_MW: formatNumber(P_MW) },
        steps: [
          `P = η × Q̇_combustible`,
          `P = ${eta} × ${Q_dot_combustible}`,
          `P = ${formatNumber(P)} W = ${formatNumber(P_MW)} MW`
        ]
      };
    }
  }
];
