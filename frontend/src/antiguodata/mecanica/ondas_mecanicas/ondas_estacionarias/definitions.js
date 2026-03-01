import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Ondas Estacionarias en Cuerdas ---
  {
    id: 'ondas-est-frecuencia-cuerda',
    groupId: 'ondas-est-cuerda',
    title: 'Frecuencia de Armónico en Cuerda',
    formula: 'f = (n * v) / (2 * L)',
    variables: [
      { symbol: 'n', label: 'Número de armónico n', unit: '' },
      { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
      { symbol: 'L', label: 'Longitud L (m)', unit: 'm' }
    ],
    output: { symbol: 'f', label: 'Frecuencia f (Hz)', unit: 'Hz' },
    resolve: ({ n, v, L }) => {
      const longitud = parseFloat(L);
      if (longitud === 0) return { error: "La longitud no puede ser cero." };
      const f = (parseFloat(n) * parseFloat(v)) / (2 * longitud);
      return {
        result: { f: formatNumber(f) },
        steps: [
          `Datos: n = ${n}, v = ${v} m/s, L = ${L} m`,
          `Fórmula: f = (n × v) / (2 × L)`,
          `Sustitución: f = (${n} × ${v}) / (2 × ${L})`,
          `Resultado: f = ${formatNumber(f)} Hz`
        ]
      };
    }
  },
  {
    id: 'ondas-est-longitud-onda-cuerda',
    groupId: 'ondas-est-cuerda',
    title: 'Longitud de Onda en Cuerda',
    formula: 'λ = (2 * L) / n',
    variables: [
      { symbol: 'L', label: 'Longitud L (m)', unit: 'm' },
      { symbol: 'n', label: 'Número de armónico n', unit: '' }
    ],
    output: { symbol: 'lambda', label: 'Longitud de onda λ (m)', unit: 'm' },
    resolve: ({ L, n }) => {
      const armonico = parseFloat(n);
      if (armonico === 0) return { error: "El número de armónico no puede ser cero." };
      const lambda = (2 * parseFloat(L)) / armonico;
      return {
        result: { lambda: formatNumber(lambda) },
        steps: [
          `Datos: L = ${L} m, n = ${n}`,
          `Fórmula: λ = (2 × L) / n`,
          `Sustitución: λ = (2 × ${L}) / ${n}`,
          `Resultado: λ = ${formatNumber(lambda)} m`
        ]
      };
    }
  },
  {
    id: 'ondas-est-velocidad-cuerda',
    groupId: 'ondas-est-cuerda',
    title: 'Velocidad de Onda en Cuerda',
    formula: 'v = sqrt(T / μ)',
    variables: [
      { symbol: 'T', label: 'Tensión T (N)', unit: 'N' },
      { symbol: 'mu', label: 'Densidad lineal μ (kg/m)', unit: 'kg/m' }
    ],
    output: { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
    resolve: ({ T, mu }) => {
      const densidad = parseFloat(mu);
      if (densidad === 0) return { error: "La densidad lineal no puede ser cero." };
      if (densidad < 0) return { error: "La densidad lineal debe ser positiva." };
      const tension = parseFloat(T);
      if (tension < 0) return { error: "La tensión debe ser positiva." };
      const v = Math.sqrt(tension / densidad);
      return {
        result: { v: formatNumber(v) },
        steps: [
          `Datos: T = ${T} N, μ = ${mu} kg/m`,
          `Fórmula: v = √(T / μ)`,
          `Sustitución: v = √(${T} / ${mu})`,
          `Cálculo: v = √${formatNumber(tension / densidad)}`,
          `Resultado: v = ${formatNumber(v)} m/s`
        ]
      };
    }
  },

  // --- Grupo 2: Tubos Abiertos ---
  {
    id: 'ondas-est-frecuencia-tubo-abierto',
    groupId: 'ondas-est-tubo-abierto',
    title: 'Frecuencia de Armónico en Tubo Abierto',
    formula: 'f = (n * v) / (2 * L)',
    variables: [
      { symbol: 'n', label: 'Número de armónico n', unit: '' },
      { symbol: 'v', label: 'Velocidad del sonido v (m/s)', unit: 'm/s' },
      { symbol: 'L', label: 'Longitud del tubo L (m)', unit: 'm' }
    ],
    output: { symbol: 'f', label: 'Frecuencia f (Hz)', unit: 'Hz' },
    resolve: ({ n, v, L }) => {
      const longitud = parseFloat(L);
      if (longitud === 0) return { error: "La longitud no puede ser cero." };
      const f = (parseFloat(n) * parseFloat(v)) / (2 * longitud);
      return {
        result: { f: formatNumber(f) },
        steps: [
          `Datos: n = ${n}, v = ${v} m/s, L = ${L} m`,
          `Fórmula: f = (n × v) / (2 × L)`,
          `Sustitución: f = (${n} × ${v}) / (2 × ${L})`,
          `Resultado: f = ${formatNumber(f)} Hz`
        ]
      };
    }
  },
  {
    id: 'ondas-est-longitud-onda-tubo-abierto',
    groupId: 'ondas-est-tubo-abierto',
    title: 'Longitud de Onda en Tubo Abierto',
    formula: 'λ = (2 * L) / n',
    variables: [
      { symbol: 'L', label: 'Longitud del tubo L (m)', unit: 'm' },
      { symbol: 'n', label: 'Número de armónico n', unit: '' }
    ],
    output: { symbol: 'lambda', label: 'Longitud de onda λ (m)', unit: 'm' },
    resolve: ({ L, n }) => {
      const armonico = parseFloat(n);
      if (armonico === 0) return { error: "El número de armónico no puede ser cero." };
      const lambda = (2 * parseFloat(L)) / armonico;
      return {
        result: { lambda: formatNumber(lambda) },
        steps: [
          `Datos: L = ${L} m, n = ${n}`,
          `Fórmula: λ = (2 × L) / n`,
          `Sustitución: λ = (2 × ${L}) / ${n}`,
          `Resultado: λ = ${formatNumber(lambda)} m`
        ]
      };
    }
  },
  {
    id: 'ondas-est-longitud-tubo-abierto',
    groupId: 'ondas-est-tubo-abierto',
    title: 'Longitud de Tubo Abierto desde Frecuencia',
    formula: 'L = (n * v) / (2 * f)',
    variables: [
      { symbol: 'n', label: 'Número de armónico n', unit: '' },
      { symbol: 'v', label: 'Velocidad del sonido v (m/s)', unit: 'm/s' },
      { symbol: 'f', label: 'Frecuencia f (Hz)', unit: 'Hz' }
    ],
    output: { symbol: 'L', label: 'Longitud del tubo L (m)', unit: 'm' },
    resolve: ({ n, v, f }) => {
      const frecuencia = parseFloat(f);
      if (frecuencia === 0) return { error: "La frecuencia no puede ser cero." };
      const L = (parseFloat(n) * parseFloat(v)) / (2 * frecuencia);
      return {
        result: { L: formatNumber(L) },
        steps: [
          `Datos: n = ${n}, v = ${v} m/s, f = ${f} Hz`,
          `Fórmula: L = (n × v) / (2 × f)`,
          `Sustitución: L = (${n} × ${v}) / (2 × ${f})`,
          `Resultado: L = ${formatNumber(L)} m`
        ]
      };
    }
  },

  // --- Grupo 3: Tubos Cerrados ---
  {
    id: 'ondas-est-frecuencia-tubo-cerrado',
    groupId: 'ondas-est-tubo-cerrado',
    title: 'Frecuencia de Armónico en Tubo Cerrado',
    formula: 'f = (n * v) / (4 * L)',
    variables: [
      { symbol: 'n', label: 'Número de armónico n (impar)', unit: '' },
      { symbol: 'v', label: 'Velocidad del sonido v (m/s)', unit: 'm/s' },
      { symbol: 'L', label: 'Longitud del tubo L (m)', unit: 'm' }
    ],
    output: { symbol: 'f', label: 'Frecuencia f (Hz)', unit: 'Hz' },
    resolve: ({ n, v, L }) => {
      const armonico = parseFloat(n);
      const longitud = parseFloat(L);
      if (longitud === 0) return { error: "La longitud no puede ser cero." };
      if (armonico % 2 === 0) {
        return { 
          error: "En tubos cerrados solo existen armónicos impares (n = 1, 3, 5, 7...)." 
        };
      }
      const f = (armonico * parseFloat(v)) / (4 * longitud);
      return {
        result: { f: formatNumber(f) },
        steps: [
          `Datos: n = ${n} (impar), v = ${v} m/s, L = ${L} m`,
          `Fórmula: f = (n × v) / (4 × L)`,
          `Sustitución: f = (${n} × ${v}) / (4 × ${L})`,
          `Resultado: f = ${formatNumber(f)} Hz`
        ]
      };
    }
  },
  {
    id: 'ondas-est-longitud-onda-tubo-cerrado',
    groupId: 'ondas-est-tubo-cerrado',
    title: 'Longitud de Onda en Tubo Cerrado',
    formula: 'λ = (4 * L) / n',
    variables: [
      { symbol: 'L', label: 'Longitud del tubo L (m)', unit: 'm' },
      { symbol: 'n', label: 'Número de armónico n (impar)', unit: '' }
    ],
    output: { symbol: 'lambda', label: 'Longitud de onda λ (m)', unit: 'm' },
    resolve: ({ L, n }) => {
      const armonico = parseFloat(n);
      if (armonico === 0) return { error: "El número de armónico no puede ser cero." };
      if (armonico % 2 === 0) {
        return { 
          error: "En tubos cerrados solo existen armónicos impares (n = 1, 3, 5, 7...)." 
        };
      }
      const lambda = (4 * parseFloat(L)) / armonico;
      return {
        result: { lambda: formatNumber(lambda) },
        steps: [
          `Datos: L = ${L} m, n = ${n} (impar)`,
          `Fórmula: λ = (4 × L) / n`,
          `Sustitución: λ = (4 × ${L}) / ${n}`,
          `Resultado: λ = ${formatNumber(lambda)} m`
        ]
      };
    }
  }
];
