import { formatNumber } from '../../../utils/formatNumber';

export const definitions = [
  {
    id: 'velocidad-sonido-medio',
    groupId: 'ondas_sonoras-velocidad-medio',
    title: 'Velocidad del Sonido en un Medio',
    isFundamental: true,
    formula: String.raw`v = \sqrt{\frac{B}{\rho}}`,
    variables: [
      { symbol: 'B', label: 'Módulo de compresibilidad (B)', unit: 'Pa' },
      { symbol: 'rho', label: 'Densidad del medio (ρ)', unit: 'kg/m³' }
    ],
    output: { symbol: 'v', label: 'Velocidad del sonido (v)', unit: 'm/s' },
    resolve: ({ B, rho }) => {
      const v = Math.sqrt(B / rho);
      return {
        result: { v: formatNumber(v) },
        steps: [
          `v = √(B/ρ)`,
          `v = √(${B}/${rho})`,
          `v = √${formatNumber(B / rho)}`,
          `v = ${formatNumber(v)} m/s`
        ]
      };
    }
  },
  {
    id: 'modulo-compresibilidad',
    groupId: 'ondas_sonoras-velocidad-medio',
    title: 'Módulo de Compresibilidad (B)',
    isFundamental: false,
    formula: String.raw`B = v^2 \cdot \rho`,
    variables: [
      { symbol: 'v', label: 'Velocidad del sonido (v)', unit: 'm/s' },
      { symbol: 'rho', label: 'Densidad del medio (ρ)', unit: 'kg/m³' }
    ],
    output: { symbol: 'B', label: 'Módulo de compresibilidad (B)', unit: 'Pa' },
    resolve: ({ v, rho }) => {
      const B = v * v * rho;
      return {
        result: { B: formatNumber(B) },
        steps: [
          `B = v² × ρ`,
          `B = ${v}² × ${rho}`,
          `B = ${formatNumber(v * v)} × ${rho}`,
          `B = ${formatNumber(B)} Pa`
        ]
      };
    }
  },
  {
    id: 'densidad-medio',
    groupId: 'ondas_sonoras-velocidad-medio',
    title: 'Densidad del Medio (ρ)',
    isFundamental: false,
    formula: String.raw`\rho = \frac{B}{v^2}`,
    variables: [
      { symbol: 'B', label: 'Módulo de compresibilidad (B)', unit: 'Pa' },
      { symbol: 'v', label: 'Velocidad del sonido (v)', unit: 'm/s' }
    ],
    output: { symbol: 'rho', label: 'Densidad del medio (ρ)', unit: 'kg/m³' },
    resolve: ({ B, v }) => {
      const rho = B / (v * v);
      return {
        result: { rho: formatNumber(rho) },
        steps: [
          `ρ = B/v²`,
          `ρ = ${B}/${v}²`,
          `ρ = ${B}/${formatNumber(v * v)}`,
          `ρ = ${formatNumber(rho)} kg/m³`
        ]
      };
    }
  },
  {
    id: 'velocidad-sonido-aire',
    groupId: 'ondas_sonoras-velocidad-aire',
    title: 'Velocidad del Sonido en Aire',
    isFundamental: true,
    formula: String.raw`v = 331.4 + 0.6T`,
    variables: [
      { symbol: 'T', label: 'Temperatura (T)', unit: '°C' }
    ],
    output: { symbol: 'v', label: 'Velocidad del sonido (v)', unit: 'm/s' },
    resolve: ({ T }) => {
      const v = 331.4 + 0.6 * T;
      return {
        result: { v: formatNumber(v) },
        steps: [
          `v = 331.4 + 0.6T`,
          `v = 331.4 + 0.6 × ${T}`,
          `v = 331.4 + ${formatNumber(0.6 * T)}`,
          `v = ${formatNumber(v)} m/s`
        ]
      };
    }
  },
  {
    id: 'temperatura-aire',
    groupId: 'ondas_sonoras-velocidad-aire',
    title: 'Temperatura del Aire (T)',
    isFundamental: false,
    formula: String.raw`T = \frac{v - 331.4}{0.6}`,
    variables: [
      { symbol: 'v', label: 'Velocidad del sonido (v)', unit: 'm/s' }
    ],
    output: { symbol: 'T', label: 'Temperatura (T)', unit: '°C' },
    resolve: ({ v }) => {
      const T = (v - 331.4) / 0.6;
      return {
        result: { T: formatNumber(T) },
        steps: [
          `T = (v - 331.4)/0.6`,
          `T = (${v} - 331.4)/0.6`,
          `T = ${formatNumber(v - 331.4)}/0.6`,
          `T = ${formatNumber(T)} °C`
        ]
      };
    }
  },
  {
    id: 'ecuacion-ondas',
    groupId: 'ondas_sonoras-ecuacion-ondas',
    title: 'Ecuación Fundamental de Ondas',
    isFundamental: true,
    formula: String.raw`v = f \lambda`,
    variables: [
      { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' },
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' }
    ],
    output: { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
    resolve: ({ f, lambda }) => {
      const v = f * lambda;
      return {
        result: { v: formatNumber(v) },
        steps: [
          `v = f × λ`,
          `v = ${f} × ${lambda}`,
          `v = ${formatNumber(v)} m/s`
        ]
      };
    }
  },
  {
    id: 'longitud-onda',
    groupId: 'ondas_sonoras-ecuacion-ondas',
    title: 'Longitud de Onda',
    isFundamental: false,
    formula: String.raw`\lambda = \frac{v}{f}`,
    variables: [
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
      { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' }
    ],
    output: { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' },
    resolve: ({ v, f }) => {
      const lambda = v / f;
      return {
        result: { lambda: formatNumber(lambda) },
        steps: [
          `λ = v/f`,
          `λ = ${v}/${f}`,
          `λ = ${formatNumber(lambda)} m`
        ]
      };
    }
  },
  {
    id: 'frecuencia',
    groupId: 'ondas_sonoras-ecuacion-ondas',
    title: 'Frecuencia',
    isFundamental: false,
    formula: String.raw`f = \frac{v}{\lambda}`,
    variables: [
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' }
    ],
    output: { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' },
    resolve: ({ v, lambda }) => {
      const f = v / lambda;
      return {
        result: { f: formatNumber(f) },
        steps: [
          `f = v/λ`,
          `f = ${v}/${lambda}`,
          `f = ${formatNumber(f)} Hz`
        ]
      };
    }
  },
  {
    id: 'periodo',
    groupId: 'ondas_sonoras-ecuacion-ondas',
    title: 'Período de la Onda',
    isFundamental: false,
    formula: String.raw`T = \frac{1}{f}`,
    variables: [
      { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' }
    ],
    output: { symbol: 'T', label: 'Período (T)', unit: 's' },
    resolve: ({ f }) => {
      const T = 1 / f;
      return {
        result: { T: formatNumber(T) },
        steps: [
          `T = 1/f`,
          `T = 1/${f}`,
          `T = ${formatNumber(T)} s`
        ]
      };
    }
  }
];
