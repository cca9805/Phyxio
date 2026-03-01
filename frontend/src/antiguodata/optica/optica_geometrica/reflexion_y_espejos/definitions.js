import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'ley-reflexion',
    groupId: 'ley-reflexion',
    title: 'Ley de Reflexión',
    isFundamental: true,
    formula: String.raw`\theta_i = \theta_r`,
    variables: [
      { symbol: 'theta_i', label: 'Ángulo de incidencia (θᵢ)', unit: 'grados' }
    ],
    output: { symbol: 'theta_r', label: 'Ángulo de reflexión (θᵣ)', unit: 'grados' },
    resolve: ({ theta_i }) => {
      const theta_r = theta_i;
      return {
        result: { theta_r: formatNumber(theta_r) },
        steps: [
          `θᵢ = θᵣ`,
          `θᵣ = ${formatNumber(theta_r)}°`
        ]
      };
    }
  },
  {
    id: 'ecuacion-espejos',
    groupId: 'ecuacion-espejos',
    title: 'Ecuación de Espejos',
    isFundamental: true,
    formula: String.raw`\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}`,
    variables: [
      { symbol: 'd_o', label: 'Distancia objeto (dₒ)', unit: 'cm' },
      { symbol: 'd_i', label: 'Distancia imagen (dᵢ)', unit: 'cm' }
    ],
    output: { symbol: 'f', label: 'Distancia focal (f)', unit: 'cm' },
    resolve: ({ d_o, d_i }) => {
      const f = (d_o * d_i) / (d_o + d_i);
      return {
        result: { f: formatNumber(f) },
        steps: [
          `1/f = 1/dₒ + 1/dᵢ`,
          `1/f = 1/${d_o} + 1/${d_i}`,
          `f = ${formatNumber(f)} cm`
        ]
      };
    }
  },
  {
    id: 'relacion-focal-radio',
    groupId: 'relacion-focal-radio',
    title: 'Relación entre Distancia Focal y Radio de Curvatura',
    isFundamental: true,
    formula: String.raw`f = \frac{R}{2}`,
    variables: [
      { symbol: 'R', label: 'Radio de curvatura (R)', unit: 'cm' }
    ],
    output: { symbol: 'f', label: 'Distancia focal (f)', unit: 'cm' },
    resolve: ({ R }) => {
      const f = R / 2;
      return {
        result: { f: formatNumber(f) },
        steps: [
          `f = R/2`,
          `f = ${R}/2`,
          `f = ${formatNumber(f)} cm`
        ]
      };
    }
  },
  {
    id: 'aumento-espejos',
    groupId: 'aumento-espejos',
    title: 'Aumento en Espejos',
    isFundamental: true,
    formula: String.raw`m = -\frac{d_i}{d_o}`,
    variables: [
      { symbol: 'd_i', label: 'Distancia imagen (dᵢ)', unit: 'cm' },
      { symbol: 'd_o', label: 'Distancia objeto (dₒ)', unit: 'cm' }
    ],
    output: { symbol: 'm', label: 'Aumento (m)', unit: 'adimensional' },
    resolve: ({ d_i, d_o }) => {
      const m = -d_i / d_o;
      return {
        result: { m: formatNumber(m) },
        steps: [
          `m = -dᵢ/dₒ`,
          `m = -${d_i}/${d_o}`,
          `m = ${formatNumber(m)}`
        ]
      };
    }
  }
];
