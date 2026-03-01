import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Frecuencia y Periodo ---
  {
    id: 'ondas-frecuencia',
    groupId: 'ondas-frecuencia-periodo',
    title: 'Calcular Frecuencia (f = 1/T)',
    formula: 'f = 1 / T',
    variables: [
      { symbol: 'T', label: 'Periodo (T)', unit: 's' }
    ],
    output: { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' },
    resolve: ({ T }) => {
      const periodo = parseFloat(T);
      if (periodo === 0) return { error: "El periodo no puede ser cero." };
      const f = 1 / periodo;
      return {
        result: { f: formatNumber(f) },
        steps: [
          `f = 1 / T = 1 / ${T}`,
          `f = ${formatNumber(f)} Hz`
        ]
      };
    }
  },
  {
    id: 'ondas-periodo',
    groupId: 'ondas-frecuencia-periodo',
    title: 'Calcular Periodo (T = 1/f)',
    formula: 'T = 1 / f',
    variables: [
      { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' }
    ],
    output: { symbol: 'T', label: 'Periodo (T)', unit: 's' },
    resolve: ({ f }) => {
      const frecuencia = parseFloat(f);
      if (frecuencia === 0) return { error: "La frecuencia no puede ser cero." };
      const T = 1 / frecuencia;
      return {
        result: { T: formatNumber(T) },
        steps: [
          `T = 1 / f = 1 / ${f}`,
          `T = ${formatNumber(T)} s`
        ]
      };
    }
  },

  // --- Grupo 2: Velocidad de Onda ---
  {
    id: 'ondas-velocidad',
    groupId: 'ondas-velocidad',
    title: 'Calcular Velocidad (v = λf)',
    formula: 'v = λ * f',
    variables: [
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' },
      { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' }
    ],
    output: { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
    resolve: ({ lambda, f }) => {
      const v = parseFloat(lambda) * parseFloat(f);
      return {
        result: { v: formatNumber(v) },
        steps: [
          `v = λ * f = ${lambda} * ${f}`,
          `v = ${formatNumber(v)} m/s`
        ]
      };
    }
  },
  {
    id: 'ondas-longitud',
    groupId: 'ondas-velocidad',
    title: 'Calcular Longitud de onda (λ = v/f)',
    formula: 'λ = v / f',
    variables: [
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
      { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' }
    ],
    output: { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' },
    resolve: ({ v, f }) => {
      const frecuencia = parseFloat(f);
      if (frecuencia === 0) return { error: "La frecuencia no puede ser cero." };
      const lambda = parseFloat(v) / frecuencia;
      return {
        result: { lambda: formatNumber(lambda) },
        steps: [
          `λ = v / f = ${v} / ${f}`,
          `λ = ${formatNumber(lambda)} m`
        ]
      };
    }
  },
  {
    id: 'ondas-frecuencia-v',
    groupId: 'ondas-velocidad',
    title: 'Calcular Frecuencia (f = v/λ)',
    formula: 'f = v / λ',
    variables: [
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' }
    ],
    output: { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' },
    resolve: ({ v, lambda }) => {
      const longitud = parseFloat(lambda);
      if (longitud === 0) return { error: "La longitud de onda no puede ser cero." };
      const f = parseFloat(v) / longitud;
      return {
        result: { f: formatNumber(f) },
        steps: [
          `f = v / λ = ${v} / ${lambda}`,
          `f = ${formatNumber(f)} Hz`
        ]
      };
    }
  },

  // --- Grupo 3: Velocidad con Periodo ---
  {
    id: 'ondas-velocidad-T',
    groupId: 'ondas-velocidad-periodo',
    title: 'Calcular Velocidad (v = λ/T)',
    formula: 'v = λ / T',
    variables: [
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' },
      { symbol: 'T', label: 'Periodo (T)', unit: 's' }
    ],
    output: { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
    resolve: ({ lambda, T }) => {
      const periodo = parseFloat(T);
      if (periodo === 0) return { error: "El periodo no puede ser cero." };
      const v = parseFloat(lambda) / periodo;
      return {
        result: { v: formatNumber(v) },
        steps: [
          `v = λ / T = ${lambda} / ${T}`,
          `v = ${formatNumber(v)} m/s`
        ]
      };
    }
  },
  {
    id: 'ondas-longitud-T',
    groupId: 'ondas-velocidad-periodo',
    title: 'Calcular Longitud de onda (λ = vT)',
    formula: 'λ = v * T',
    variables: [
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
      { symbol: 'T', label: 'Periodo (T)', unit: 's' }
    ],
    output: { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' },
    resolve: ({ v, T }) => {
      const lambda = parseFloat(v) * parseFloat(T);
      return {
        result: { lambda: formatNumber(lambda) },
        steps: [
          `λ = v * T = ${v} * ${T}`,
          `λ = ${formatNumber(lambda)} m`
        ]
      };
    }
  },
  {
    id: 'ondas-periodo-v',
    groupId: 'ondas-velocidad-periodo',
    title: 'Calcular Periodo (T = λ/v)',
    formula: 'T = λ / v',
    variables: [
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' },
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' }
    ],
    output: { symbol: 'T', label: 'Periodo (T)', unit: 's' },
    resolve: ({ lambda, v }) => {
      const velocidad = parseFloat(v);
      if (velocidad === 0) return { error: "La velocidad no puede ser cero." };
      const T = parseFloat(lambda) / velocidad;
      return {
        result: { T: formatNumber(T) },
        steps: [
          `T = λ / v = ${lambda} / ${v}`,
          `T = ${formatNumber(T)} s`
        ]
      };
    }
  },

  // --- Grupo 4: Número de Onda ---
  {
    id: 'ondas-k',
    groupId: 'ondas-numero-onda',
    title: 'Calcular Número de onda (k = 2π/λ)',
    formula: 'k = 2π / λ',
    variables: [
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' }
    ],
    output: { symbol: 'k', label: 'Número de onda (k)', unit: 'rad/m' },
    resolve: ({ lambda }) => {
      const longitud = parseFloat(lambda);
      if (longitud === 0) return { error: "La longitud de onda no puede ser cero." };
      const k = (2 * Math.PI) / longitud;
      return {
        result: { k: formatNumber(k) },
        steps: [
          `k = 2π / λ = 2π / ${lambda}`,
          `k = ${formatNumber(k)} rad/m`
        ]
      };
    }
  },
  {
    id: 'ondas-lambda-k',
    groupId: 'ondas-numero-onda',
    title: 'Calcular Longitud de onda (λ = 2π/k)',
    formula: 'λ = 2π / k',
    variables: [
      { symbol: 'k', label: 'Número de onda (k)', unit: 'rad/m' }
    ],
    output: { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' },
    resolve: ({ k }) => {
      const numero = parseFloat(k);
      if (numero === 0) return { error: "El número de onda no puede ser cero." };
      const lambda = (2 * Math.PI) / numero;
      return {
        result: { lambda: formatNumber(lambda) },
        steps: [
          `λ = 2π / k = 2π / ${k}`,
          `λ = ${formatNumber(lambda)} m`
        ]
      };
    }
  },

  // --- Grupo 5: Frecuencia Angular ---
  {
    id: 'ondas-omega',
    groupId: 'ondas-frecuencia-angular',
    title: 'Calcular Frecuencia angular (ω = 2πf)',
    formula: 'ω = 2π * f',
    variables: [
      { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' }
    ],
    output: { symbol: 'omega', label: 'Frecuencia angular (ω)', unit: 'rad/s' },
    resolve: ({ f }) => {
      const omega = 2 * Math.PI * parseFloat(f);
      return {
        result: { omega: formatNumber(omega) },
        steps: [
          `ω = 2π * f = 2π * ${f}`,
          `ω = ${formatNumber(omega)} rad/s`
        ]
      };
    }
  },
  {
    id: 'ondas-f-omega',
    groupId: 'ondas-frecuencia-angular',
    title: 'Calcular Frecuencia (f = ω/2π)',
    formula: 'f = ω / (2π)',
    variables: [
      { symbol: 'omega', label: 'Frecuencia angular (ω)', unit: 'rad/s' }
    ],
    output: { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' },
    resolve: ({ omega }) => {
      const f = parseFloat(omega) / (2 * Math.PI);
      return {
        result: { f: formatNumber(f) },
        steps: [
          `f = ω / (2π) = ${omega} / (2π)`,
          `f = ${formatNumber(f)} Hz`
        ]
      };
    }
  },

  // --- Grupo 6: Omega desde Periodo ---
  {
    id: 'ondas-omega-T',
    groupId: 'ondas-omega-periodo',
    title: 'Calcular Frecuencia angular (ω = 2π/T)',
    formula: 'ω = 2π / T',
    variables: [
      { symbol: 'T', label: 'Periodo (T)', unit: 's' }
    ],
    output: { symbol: 'omega', label: 'Frecuencia angular (ω)', unit: 'rad/s' },
    resolve: ({ T }) => {
      const periodo = parseFloat(T);
      if (periodo === 0) return { error: "El periodo no puede ser cero." };
      const omega = (2 * Math.PI) / periodo;
      return {
        result: { omega: formatNumber(omega) },
        steps: [
          `ω = 2π / T = 2π / ${T}`,
          `ω = ${formatNumber(omega)} rad/s`
        ]
      };
    }
  },
  {
    id: 'ondas-T-omega',
    groupId: 'ondas-omega-periodo',
    title: 'Calcular Periodo (T = 2π/ω)',
    formula: 'T = 2π / ω',
    variables: [
      { symbol: 'omega', label: 'Frecuencia angular (ω)', unit: 'rad/s' }
    ],
    output: { symbol: 'T', label: 'Periodo (T)', unit: 's' },
    resolve: ({ omega }) => {
      const frecuenciaAngular = parseFloat(omega);
      if (frecuenciaAngular === 0) return { error: "La frecuencia angular no puede ser cero." };
      const T = (2 * Math.PI) / frecuenciaAngular;
      return {
        result: { T: formatNumber(T) },
        steps: [
          `T = 2π / ω = 2π / ${omega}`,
          `T = ${formatNumber(T)} s`
        ]
      };
    }
  }
];
