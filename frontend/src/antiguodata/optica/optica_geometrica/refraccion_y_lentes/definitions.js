import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'ley-snell',
    groupId: 'ley-snell',
    title: 'Ley de Snell',
    isFundamental: true,
    formula: String.raw`n_1 \sin(\theta_1) = n_2 \sin(\theta_2)`,
    variables: [
      { symbol: 'n_1', label: 'Índice de refracción medio 1 (n₁)', unit: 'adimensional' },
      { symbol: 'theta_1', label: 'Ángulo de incidencia (θ₁)', unit: 'grados' },
      { symbol: 'n_2', label: 'Índice de refracción medio 2 (n₂)', unit: 'adimensional' }
    ],
    output: { symbol: 'theta_2', label: 'Ángulo de refracción (θ₂)', unit: 'grados' },
    resolve: ({ n_1, theta_1, n_2 }) => {
      const theta_1_rad = theta_1 * Math.PI / 180;
      const sin_theta_2 = (n_1 * Math.sin(theta_1_rad)) / n_2;
      const theta_2_rad = Math.asin(sin_theta_2);
      const theta_2 = theta_2_rad * 180 / Math.PI;
      return {
        result: { theta_2: formatNumber(theta_2) },
        steps: [
          `n₁ sin(θ₁) = n₂ sin(θ₂)`,
          `sin(θ₂) = (n₁ sin(θ₁)) / n₂`,
          `sin(θ₂) = (${n_1} × sin(${theta_1}°)) / ${n_2}`,
          `sin(θ₂) = ${formatNumber(sin_theta_2)}`,
          `θ₂ = ${formatNumber(theta_2)}°`
        ]
      };
    }
  },
  {
    id: 'ecuacion-lentes-delgadas',
    groupId: 'ecuacion-lentes-delgadas',
    title: 'Ecuación de Lentes Delgadas',
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
          `1/f = ${formatNumber(1/d_o + 1/d_i)}`,
          `f = ${formatNumber(f)} cm`
        ]
      };
    }
  },
  {
    id: 'potencia-lente',
    groupId: 'potencia-lente',
    title: 'Potencia de una Lente',
    isFundamental: true,
    formula: String.raw`P = \frac{1}{f}`,
    variables: [
      { symbol: 'f', label: 'Distancia focal (f)', unit: 'm' }
    ],
    output: { symbol: 'P', label: 'Potencia (P)', unit: 'dioptrías' },
    resolve: ({ f }) => {
      const P = 1 / f;
      return {
        result: { P: formatNumber(P) },
        steps: [
          `P = 1/f`,
          `P = 1/${f}`,
          `P = ${formatNumber(P)} dioptrías`
        ]
      };
    }
  },
  {
    id: 'aumento-lateral',
    groupId: 'aumento-lateral',
    title: 'Aumento Lateral',
    isFundamental: true,
    formula: String.raw`m = -\frac{d_i}{d_o}`,
    variables: [
      { symbol: 'd_i', label: 'Distancia imagen (dᵢ)', unit: 'cm' },
      { symbol: 'd_o', label: 'Distancia objeto (dₒ)', unit: 'cm' }
    ],
    output: { symbol: 'm', label: 'Aumento lateral (m)', unit: 'adimensional' },
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
  },
  {
    id: 'angulo-critico',
    groupId: 'angulo-critico',
    title: 'Ángulo Crítico (Reflexión Total Interna)',
    isFundamental: false,
    formula: String.raw`\theta_c = \arcsin\left(\frac{n_2}{n_1}\right)`,
    variables: [
      { symbol: 'n_1', label: 'Índice de refracción medio denso (n₁)', unit: 'adimensional' },
      { symbol: 'n_2', label: 'Índice de refracción medio menos denso (n₂)', unit: 'adimensional' }
    ],
    output: { symbol: 'theta_c', label: 'Ángulo crítico (θc)', unit: 'grados' },
    resolve: ({ n_1, n_2 }) => {
      const ratio = n_2 / n_1;
      const theta_c_rad = Math.asin(ratio);
      const theta_c = theta_c_rad * 180 / Math.PI;
      return {
        result: { theta_c: formatNumber(theta_c) },
        steps: [
          `θc = arcsin(n₂/n₁)`,
          `θc = arcsin(${n_2}/${n_1})`,
          `θc = arcsin(${formatNumber(ratio)})`,
          `θc = ${formatNumber(theta_c)}°`
        ]
      };
    }
  },
  {
    id: 'ecuacion-fabricante',
    groupId: 'ecuacion-fabricante',
    title: 'Ecuación del Fabricante de Lentes',
    isFundamental: false,
    formula: String.raw`\frac{1}{f} = (n-1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)`,
    variables: [
      { symbol: 'n', label: 'Índice de refracción lente (n)', unit: 'adimensional' },
      { symbol: 'R_1', label: 'Radio curvatura superficie 1 (R₁)', unit: 'cm' },
      { symbol: 'R_2', label: 'Radio curvatura superficie 2 (R₂)', unit: 'cm' }
    ],
    output: { symbol: 'f', label: 'Distancia focal (f)', unit: 'cm' },
    resolve: ({ n, R_1, R_2 }) => {
      const inv_f = (n - 1) * (1/R_1 - 1/R_2);
      const f = 1 / inv_f;
      return {
        result: { f: formatNumber(f) },
        steps: [
          `1/f = (n-1)(1/R₁ - 1/R₂)`,
          `1/f = (${n}-1)(1/${R_1} - 1/${R_2})`,
          `1/f = ${formatNumber(n-1)} × ${formatNumber(1/R_1 - 1/R_2)}`,
          `1/f = ${formatNumber(inv_f)}`,
          `f = ${formatNumber(f)} cm`
        ]
      };
    }
  },
  {
    id: 'lentes-contacto',
    groupId: 'lentes-contacto',
    title: 'Potencia de Lentes en Contacto',
    isFundamental: false,
    formula: String.raw`P_{total} = P_1 + P_2`,
    variables: [
      { symbol: 'P_1', label: 'Potencia lente 1 (P₁)', unit: 'dioptrías' },
      { symbol: 'P_2', label: 'Potencia lente 2 (P₂)', unit: 'dioptrías' }
    ],
    output: { symbol: 'P_total', label: 'Potencia total (Ptotal)', unit: 'dioptrías' },
    resolve: ({ P_1, P_2 }) => {
      const P_total = P_1 + P_2;
      return {
        result: { P_total: formatNumber(P_total) },
        steps: [
          `Ptotal = P₁ + P₂`,
          `Ptotal = ${P_1} + ${P_2}`,
          `Ptotal = ${formatNumber(P_total)} dioptrías`
        ]
      };
    }
  }
];
