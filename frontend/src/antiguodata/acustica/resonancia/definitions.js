import { formatNumber } from '../../../utils/formatNumber';

export const definitions = [
  {
    id: 'tubo-abierto',
    groupId: 'resonancia-grupo-1',
    title: 'Resonancia en Tubo Abierto',
    isFundamental: true,
    formula: String.raw`f_n = n \frac{v}{2L}`,
    variables: [
      { symbol: 'n', label: 'Número del armónico (n)', unit: 'adimensional' },
      { symbol: 'v', label: 'Velocidad del sonido (v)', unit: 'm/s' },
      { symbol: 'L', label: 'Longitud del tubo (L)', unit: 'm' }
    ],
    output: { symbol: 'f_n', label: 'Frecuencia (fₙ)', unit: 'Hz' },
    resolve: ({ n, v, L }) => {
      const f_n = n * v / (2 * L);
      return {
        result: { f_n: formatNumber(f_n) },
        steps: [
          `fₙ = n × v/(2L)`,
          `fₙ = ${n} × ${v}/(2 × ${L})`,
          `fₙ = ${formatNumber(f_n)} Hz`
        ]
      };
    }
  },
  {
    id: 'tubo-cerrado',
    groupId: 'resonancia-grupo-1',
    title: 'Resonancia en Tubo Cerrado',
    isFundamental: true,
    formula: String.raw`f_n = n \frac{v}{4L}`,
    variables: [
      { symbol: 'n', label: 'Número del armónico impar (n)', unit: 'adimensional' },
      { symbol: 'v', label: 'Velocidad del sonido (v)', unit: 'm/s' },
      { symbol: 'L', label: 'Longitud del tubo (L)', unit: 'm' }
    ],
    output: { symbol: 'f_n', label: 'Frecuencia (fₙ)', unit: 'Hz' },
    resolve: ({ n, v, L }) => {
      const f_n = n * v / (4 * L);
      return {
        result: { f_n: formatNumber(f_n) },
        steps: [
          `fₙ = n × v/(4L)`,
          `fₙ = ${n} × ${v}/(4 × ${L})`,
          `fₙ = ${formatNumber(f_n)} Hz`
        ]
      };
    }
  },
  {
    id: 'velocidad-cuerda',
    groupId: 'resonancia-grupo-1',
    title: 'Velocidad en Cuerda Tensa',
    isFundamental: true,
    formula: String.raw`v = \sqrt{\frac{T}{\mu}}`,
    variables: [
      { symbol: 'T', label: 'Tensión (T)', unit: 'N' },
      { symbol: 'mu', label: 'Densidad lineal (μ)', unit: 'kg/m' }
    ],
    output: { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
    resolve: ({ T, mu }) => {
      const v = Math.sqrt(T / mu);
      return {
        result: { v: formatNumber(v) },
        steps: [
          `v = √(T/μ)`,
          `v = √(${T}/${mu})`,
          `v = ${formatNumber(v)} m/s`
        ]
      };
    }
  },
  {
    id: 'frecuencia-cuerda',
    groupId: 'resonancia-grupo-1',
    title: 'Frecuencia en Cuerda',
    isFundamental: false,
    formula: String.raw`f_n = \frac{n}{2L}\sqrt{\frac{T}{\mu}}`,
    variables: [
      { symbol: 'n', label: 'Número del armónico (n)', unit: 'adimensional' },
      { symbol: 'L', label: 'Longitud de la cuerda (L)', unit: 'm' },
      { symbol: 'T', label: 'Tensión (T)', unit: 'N' },
      { symbol: 'mu', label: 'Densidad lineal (μ)', unit: 'kg/m' }
    ],
    output: { symbol: 'f_n', label: 'Frecuencia (fₙ)', unit: 'Hz' },
    resolve: ({ n, L, T, mu }) => {
      const f_n = (n / (2 * L)) * Math.sqrt(T / mu);
      return {
        result: { f_n: formatNumber(f_n) },
        steps: [
          `fₙ = (n/(2L)) × √(T/μ)`,
          `fₙ = (${n}/(2 × ${L})) × √(${T}/${mu})`,
          `fₙ = ${formatNumber(n / (2 * L))} × ${formatNumber(Math.sqrt(T / mu))}`,
          `fₙ = ${formatNumber(f_n)} Hz`
        ]
      };
    }
  },
  {
    id: 'longitud-tubo-abierto',
    groupId: 'resonancia-grupo-1',
    title: 'Longitud de Tubo Abierto',
    isFundamental: false,
    formula: String.raw`L = n \frac{v}{2f_n}`,
    variables: [
      { symbol: 'n', label: 'Número del armónico (n)', unit: 'adimensional' },
      { symbol: 'v', label: 'Velocidad del sonido (v)', unit: 'm/s' },
      { symbol: 'f_n', label: 'Frecuencia (fₙ)', unit: 'Hz' }
    ],
    output: { symbol: 'L', label: 'Longitud del tubo (L)', unit: 'm' },
    resolve: ({ n, v, f_n }) => {
      const L = n * v / (2 * f_n);
      return {
        result: { L: formatNumber(L) },
        steps: [
          `L = n × v/(2fₙ)`,
          `L = ${n} × ${v}/(2 × ${f_n})`,
          `L = ${formatNumber(L)} m`
        ]
      };
    }
  },
  {
    id: 'longitud-tubo-cerrado',
    groupId: 'resonancia-grupo-1',
    title: 'Longitud de Tubo Cerrado',
    isFundamental: false,
    formula: String.raw`L = n \frac{v}{4f_n}`,
    variables: [
      { symbol: 'n', label: 'Número del armónico impar (n)', unit: 'adimensional' },
      { symbol: 'v', label: 'Velocidad del sonido (v)', unit: 'm/s' },
      { symbol: 'f_n', label: 'Frecuencia (fₙ)', unit: 'Hz' }
    ],
    output: { symbol: 'L', label: 'Longitud del tubo (L)', unit: 'm' },
    resolve: ({ n, v, f_n }) => {
      const L = n * v / (4 * f_n);
      return {
        result: { L: formatNumber(L) },
        steps: [
          `L = n × v/(4fₙ)`,
          `L = ${n} × ${v}/(4 × ${f_n})`,
          `L = ${formatNumber(L)} m`
        ]
      };
    }
  }
];
