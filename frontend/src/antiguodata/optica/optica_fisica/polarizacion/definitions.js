import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'ley-malus',
    groupId: 'ley-malus',
    title: 'Ley de Malus',
    isFundamental: true,
    formula: String.raw`I = I_0 \cos^2(\theta)`,
    variables: [
      { symbol: 'I_0', label: 'Intensidad inicial (I₀)', unit: 'W/m²' },
      { symbol: 'theta', label: 'Ángulo entre polarizadores (θ)', unit: 'grados' }
    ],
    output: { symbol: 'I', label: 'Intensidad transmitida (I)', unit: 'W/m²' },
    resolve: ({ I_0, theta }) => {
      const theta_rad = theta * Math.PI / 180;
      const I = I_0 * Math.pow(Math.cos(theta_rad), 2);
      return {
        result: { I: formatNumber(I) },
        steps: [
          `I = I₀ cos²(θ)`,
          `I = ${I_0} × cos²(${theta}°)`,
          `I = ${formatNumber(I)} W/m²`
        ]
      };
    }
  },
  {
    id: 'angulo-brewster',
    groupId: 'angulo-brewster',
    title: 'Ángulo de Brewster',
    isFundamental: true,
    formula: String.raw`\theta_B = \arctan\left(\frac{n_2}{n_1}\right)`,
    variables: [
      { symbol: 'n_2', label: 'Índice de refracción medio 2 (n₂)', unit: 'adimensional' },
      { symbol: 'n_1', label: 'Índice de refracción medio 1 (n₁)', unit: 'adimensional' }
    ],
    output: { symbol: 'theta_B', label: 'Ángulo de Brewster (θ_B)', unit: 'grados' },
    resolve: ({ n_2, n_1 }) => {
      const theta_B_rad = Math.atan(n_2 / n_1);
      const theta_B = theta_B_rad * 180 / Math.PI;
      return {
        result: { theta_B: formatNumber(theta_B) },
        steps: [
          `θ_B = arctan(n₂/n₁)`,
          `θ_B = arctan(${n_2}/${n_1})`,
          `θ_B = ${formatNumber(theta_B)}°`
        ]
      };
    }
  },
  {
    id: 'rotacion-optica',
    groupId: 'rotacion-optica',
    title: 'Rotación Óptica',
    isFundamental: true,
    formula: String.raw`\theta = [\alpha] \times l \times c`,
    variables: [
      { symbol: 'alpha', label: 'Rotación específica ([α])', unit: 'grados/(dm·g/mL)' },
      { symbol: 'l', label: 'Longitud del tubo (l)', unit: 'dm' },
      { symbol: 'c', label: 'Concentración (c)', unit: 'g/mL' }
    ],
    output: { symbol: 'theta', label: 'Ángulo de rotación (θ)', unit: 'grados' },
    resolve: ({ alpha, l, c }) => {
      const theta = alpha * l * c;
      return {
        result: { theta: formatNumber(theta) },
        steps: [
          `θ = [α] × l × c`,
          `θ = ${alpha} × ${l} × ${c}`,
          `θ = ${formatNumber(theta)}°`
        ]
      };
    }
  }
];
