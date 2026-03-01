import { formatNumber } from '../../../utils/formatNumber';

export const definitions = [
  {
    id: 'nota-a-frecuencia',
    groupId: 'acustica_musical-grupo-1',
    title: 'Frecuencia de Nota Musical',
    isFundamental: true,
    formula: String.raw`f = 440 \times 2^{(n-69)/12}`,
    variables: [
      { symbol: 'n', label: 'Número MIDI (n)', unit: 'adimensional' }
    ],
    output: { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' },
    resolve: ({ n }) => {
      const f = 440 * Math.pow(2, (n - 69) / 12);
      return {
        result: { f: formatNumber(f) },
        steps: [
          `f = 440 × 2^((n-69)/12)`,
          `f = 440 × 2^((${n}-69)/12)`,
          `f = 440 × 2^(${formatNumber((n - 69) / 12)})`,
          `f = ${formatNumber(f)} Hz`
        ]
      };
    }
  },
  {
    id: 'frecuencia-cuerda',
    groupId: 'acustica_musical-grupo-2',
    title: 'Frecuencia de Cuerda Vibrante',
    isFundamental: true,
    formula: String.raw`f = \frac{1}{2L} \sqrt{\frac{T}{\mu}}`,
    variables: [
      { symbol: 'L', label: 'Longitud de la cuerda (L)', unit: 'm' },
      { symbol: 'T', label: 'Tensión (T)', unit: 'N' },
      { symbol: 'mu', label: 'Densidad lineal (μ)', unit: 'kg/m' }
    ],
    output: { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' },
    resolve: ({ L, T, mu }) => {
      const f = (1 / (2 * L)) * Math.sqrt(T / mu);
      return {
        result: { f: formatNumber(f) },
        steps: [
          `f = (1/(2L)) × √(T/μ)`,
          `f = (1/(2×${L})) × √(${T}/${mu})`,
          `f = ${formatNumber(1 / (2 * L))} × √${formatNumber(T / mu)}`,
          `f = ${formatNumber(f)} Hz`
        ]
      };
    }
  },
  {
    id: 'longitud-tubo-abierto',
    groupId: 'acustica_musical-grupo-2',
    title: 'Longitud de Tubo Abierto',
    isFundamental: true,
    formula: String.raw`L = \frac{n \cdot v}{2f}`,
    variables: [
      { symbol: 'f', label: 'Frecuencia deseada (f)', unit: 'Hz' },
      { symbol: 'n', label: 'Número de armónico (n)', unit: 'adimensional' },
      { symbol: 'v', label: 'Velocidad del sonido (v)', unit: 'm/s' }
    ],
    output: { symbol: 'L', label: 'Longitud del tubo (L)', unit: 'm' },
    resolve: ({ f, n, v }) => {
      const L = (n * v) / (2 * f);
      return {
        result: { L: formatNumber(L) },
        steps: [
          `L = (n × v)/(2f)`,
          `L = (${n} × ${v})/(2 × ${f})`,
          `L = ${formatNumber(n * v)}/${formatNumber(2 * f)}`,
          `L = ${formatNumber(L)} m`
        ]
      };
    }
  },
  {
    id: 'longitud-tubo-cerrado',
    groupId: 'acustica_musical-grupo-2',
    title: 'Longitud de Tubo Cerrado',
    isFundamental: true,
    formula: String.raw`L = \frac{n \cdot v}{4f}`,
    variables: [
      { symbol: 'f', label: 'Frecuencia deseada (f)', unit: 'Hz' },
      { symbol: 'n', label: 'Armónico impar (n)', unit: 'adimensional' },
      { symbol: 'v', label: 'Velocidad del sonido (v)', unit: 'm/s' }
    ],
    output: { symbol: 'L', label: 'Longitud del tubo (L)', unit: 'm' },
    resolve: ({ f, n, v }) => {
      const L = (n * v) / (4 * f);
      return {
        result: { L: formatNumber(L) },
        steps: [
          `L = (n × v)/(4f)`,
          `L = (${n} × ${v})/(4 × ${f})`,
          `L = ${formatNumber(n * v)}/${formatNumber(4 * f)}`,
          `L = ${formatNumber(L)} m`
        ]
      };
    }
  },
  {
    id: 'intervalo-musical',
    groupId: 'acustica_musical-grupo-1',
    title: 'Relación de Intervalo Musical',
    isFundamental: true,
    formula: String.raw`r = \frac{f_2}{f_1}`,
    variables: [
      { symbol: 'f_1', label: 'Frecuencia nota 1 (f₁)', unit: 'Hz' },
      { symbol: 'f_2', label: 'Frecuencia nota 2 (f₂)', unit: 'Hz' }
    ],
    output: { symbol: 'r', label: 'Relación de intervalo (r)', unit: 'adimensional' },
    resolve: ({ f_1, f_2 }) => {
      const r = f_2 / f_1;
      return {
        result: { r: formatNumber(r) },
        steps: [
          `r = f₂/f₁`,
          `r = ${f_2}/${f_1}`,
          `r = ${formatNumber(r)}`
        ]
      };
    }
  },
  {
    id: 'armonico-frecuencia',
    groupId: 'acustica_musical-grupo-1',
    title: 'Frecuencia de Armónico',
    isFundamental: true,
    formula: String.raw`f_n = n \times f_1`,
    variables: [
      { symbol: 'f_1', label: 'Frecuencia fundamental (f₁)', unit: 'Hz' },
      { symbol: 'n', label: 'Número de armónico (n)', unit: 'adimensional' }
    ],
    output: { symbol: 'f_n', label: 'Frecuencia del armónico (fₙ)', unit: 'Hz' },
    resolve: ({ f_1, n }) => {
      const f_n = n * f_1;
      return {
        result: { f_n: formatNumber(f_n) },
        steps: [
          `fₙ = n × f₁`,
          `fₙ = ${n} × ${f_1}`,
          `fₙ = ${formatNumber(f_n)} Hz`
        ]
      };
    }
  },
  {
    id: 'batimentos',
    groupId: 'acustica_musical-grupo-1',
    title: 'Frecuencia de Batimentos',
    isFundamental: true,
    formula: String.raw`f_b = |f_2 - f_1|`,
    variables: [
      { symbol: 'f_1', label: 'Frecuencia 1 (f₁)', unit: 'Hz' },
      { symbol: 'f_2', label: 'Frecuencia 2 (f₂)', unit: 'Hz' }
    ],
    output: { symbol: 'f_b', label: 'Frecuencia de batimentos (fb)', unit: 'Hz' },
    resolve: ({ f_1, f_2 }) => {
      const f_b = Math.abs(f_2 - f_1);
      return {
        result: { f_b: formatNumber(f_b) },
        steps: [
          `fb = |f₂ - f₁|`,
          `fb = |${f_2} - ${f_1}|`,
          `fb = ${formatNumber(f_b)} Hz`
        ]
      };
    }
  },
  {
    id: 'semitonos-entre-notas',
    groupId: 'acustica_musical-grupo-1',
    title: 'Semitonos entre Frecuencias',
    isFundamental: false,
    formula: String.raw`s = 12 \times \log_2\left(\frac{f_2}{f_1}\right)`,
    variables: [
      { symbol: 'f_1', label: 'Frecuencia 1 (f₁)', unit: 'Hz' },
      { symbol: 'f_2', label: 'Frecuencia 2 (f₂)', unit: 'Hz' }
    ],
    output: { symbol: 's', label: 'Semitonos (s)', unit: 'semitonos' },
    resolve: ({ f_1, f_2 }) => {
      const s = 12 * Math.log2(f_2 / f_1);
      return {
        result: { s: formatNumber(s) },
        steps: [
          `s = 12 × log₂(f₂/f₁)`,
          `s = 12 × log₂(${f_2}/${f_1})`,
          `s = 12 × ${formatNumber(Math.log2(f_2 / f_1))}`,
          `s = ${formatNumber(s)} semitonos`
        ]
      };
    }
  },
  {
    id: 'tension-cuerda',
    groupId: 'acustica_musical-grupo-2',
    title: 'Tensión de Cuerda',
    isFundamental: false,
    formula: String.raw`T = (2Lf)^2 \times \mu`,
    variables: [
      { symbol: 'L', label: 'Longitud de la cuerda (L)', unit: 'm' },
      { symbol: 'f', label: 'Frecuencia deseada (f)', unit: 'Hz' },
      { symbol: 'mu', label: 'Densidad lineal (μ)', unit: 'kg/m' }
    ],
    output: { symbol: 'T', label: 'Tensión (T)', unit: 'N' },
    resolve: ({ L, f, mu }) => {
      const T = Math.pow(2 * L * f, 2) * mu;
      return {
        result: { T: formatNumber(T) },
        steps: [
          `T = (2Lf)² × μ`,
          `T = (2 × ${L} × ${f})² × ${mu}`,
          `T = ${formatNumber(Math.pow(2 * L * f, 2))} × ${mu}`,
          `T = ${formatNumber(T)} N`
        ]
      };
    }
  },
  {
    id: 'longitud-cuerda',
    groupId: 'acustica_musical-grupo-2',
    title: 'Longitud de Cuerda',
    isFundamental: false,
    formula: String.raw`L = \frac{1}{2f} \sqrt{\frac{T}{\mu}}`,
    variables: [
      { symbol: 'f', label: 'Frecuencia deseada (f)', unit: 'Hz' },
      { symbol: 'T', label: 'Tensión (T)', unit: 'N' },
      { symbol: 'mu', label: 'Densidad lineal (μ)', unit: 'kg/m' }
    ],
    output: { symbol: 'L', label: 'Longitud (L)', unit: 'm' },
    resolve: ({ f, T, mu }) => {
      const L = (1 / (2 * f)) * Math.sqrt(T / mu);
      return {
        result: { L: formatNumber(L) },
        steps: [
          `L = (1/(2f)) × √(T/μ)`,
          `L = (1/(2×${f})) × √(${T}/${mu})`,
          `L = ${formatNumber(1 / (2 * f))} × √${formatNumber(T / mu)}`,
          `L = ${formatNumber(L)} m`
        ]
      };
    }
  }
];
