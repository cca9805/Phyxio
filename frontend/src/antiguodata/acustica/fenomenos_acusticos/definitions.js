import { formatNumber } from '../../../utils/formatNumber';

export const definitions = [
  {
    id: 'distancia-eco',
    groupId: 'fenomenos_acusticos-grupo-1',
    title: 'Distancia Mínima para Eco',
    isFundamental: true,
    formula: String.raw`d = \frac{v \cdot t}{2}`,
    variables: [
      { symbol: 'v', label: 'Velocidad del sonido (v)', unit: 'm/s' },
      { symbol: 't', label: 'Tiempo mínimo (t)', unit: 's' }
    ],
    output: { symbol: 'd', label: 'Distancia (d)', unit: 'm' },
    resolve: ({ v, t }) => {
      const d = (v * t) / 2;
      return {
        result: { d: formatNumber(d) },
        steps: [
          `d = (v × t)/2`,
          `d = (${v} × ${t})/2`,
          `d = ${formatNumber(v * t)}/2`,
          `d = ${formatNumber(d)} m`
        ]
      };
    }
  },
  {
    id: 'interferencia-constructiva',
    groupId: 'fenomenos_acusticos-grupo-1',
    title: 'Interferencia Constructiva',
    isFundamental: true,
    formula: String.raw`\Delta x = n\lambda`,
    variables: [
      { symbol: 'n', label: 'Orden (n)', unit: 'adimensional' },
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' }
    ],
    output: { symbol: 'Delta_x', label: 'Diferencia de camino (Δx)', unit: 'm' },
    resolve: ({ n, lambda }) => {
      const Delta_x = n * lambda;
      return {
        result: { Delta_x: formatNumber(Delta_x) },
        steps: [
          `Δx = n × λ`,
          `Δx = ${n} × ${lambda}`,
          `Δx = ${formatNumber(Delta_x)} m`
        ]
      };
    }
  },
  {
    id: 'frecuencia-pulsacion',
    groupId: 'fenomenos_acusticos-grupo-1',
    title: 'Frecuencia de Pulsación',
    isFundamental: true,
    formula: String.raw`f_{pulsación} = |f_1 - f_2|`,
    variables: [
      { symbol: 'f_1', label: 'Frecuencia 1 (f₁)', unit: 'Hz' },
      { symbol: 'f_2', label: 'Frecuencia 2 (f₂)', unit: 'Hz' }
    ],
    output: { symbol: 'f_pulsacion', label: 'Frecuencia de pulsación', unit: 'Hz' },
    resolve: ({ f_1, f_2 }) => {
      const f_pulsacion = Math.abs(f_1 - f_2);
      return {
        result: { f_pulsacion: formatNumber(f_pulsacion) },
        steps: [
          `f_pulsación = |f₁ - f₂|`,
          `f_pulsación = |${f_1} - ${f_2}|`,
          `f_pulsación = ${formatNumber(f_pulsacion)} Hz`
        ]
      };
    }
  },
  {
    id: 'interferencia-destructiva',
    groupId: 'fenomenos_acusticos-grupo-1',
    title: 'Interferencia Destructiva',
    isFundamental: false,
    formula: String.raw`\Delta x = \left(n + \frac{1}{2}\right)\lambda`,
    variables: [
      { symbol: 'n', label: 'Orden (n)', unit: 'adimensional' },
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' }
    ],
    output: { symbol: 'Delta_x', label: 'Diferencia de camino (Δx)', unit: 'm' },
    resolve: ({ n, lambda }) => {
      const Delta_x = (n + 0.5) * lambda;
      return {
        result: { Delta_x: formatNumber(Delta_x) },
        steps: [
          `Δx = (n + 1/2) × λ`,
          `Δx = (${n} + 0.5) × ${lambda}`,
          `Δx = ${formatNumber(n + 0.5)} × ${lambda}`,
          `Δx = ${formatNumber(Delta_x)} m`
        ]
      };
    }
  },
  {
    id: 'tiempo-eco',
    groupId: 'fenomenos_acusticos-grupo-1',
    title: 'Tiempo para Eco',
    isFundamental: false,
    formula: String.raw`t = \frac{2d}{v}`,
    variables: [
      { symbol: 'd', label: 'Distancia (d)', unit: 'm' },
      { symbol: 'v', label: 'Velocidad del sonido (v)', unit: 'm/s' }
    ],
    output: { symbol: 't', label: 'Tiempo (t)', unit: 's' },
    resolve: ({ d, v }) => {
      const t = (2 * d) / v;
      return {
        result: { t: formatNumber(t) },
        steps: [
          `t = 2d/v`,
          `t = (2 × ${d})/${v}`,
          `t = ${formatNumber(2 * d)}/${v}`,
          `t = ${formatNumber(t)} s`
        ]
      };
    }
  }
];
