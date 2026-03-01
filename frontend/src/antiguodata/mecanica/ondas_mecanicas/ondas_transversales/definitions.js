import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Velocidad en Cuerda ---
  {
    id: 'ondas-trans-v-cuerda',
    groupId: 'ondas-trans-cuerda',
    isFundamental: true,
    title: 'Calcular Velocidad en cuerda (v = √(T/μ))',
    formula: 'v = √(T / μ)',
    variables: [
      { symbol: 'T', label: 'Tensión T (N)', unit: 'N' },
      { symbol: 'mu', label: 'Densidad lineal μ (kg/m)', unit: 'kg/m' }
    ],
    output: { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
    resolve: ({ T, mu }) => {
      const densidad = parseFloat(mu);
      if (densidad === 0) return { error: "La densidad lineal no puede ser cero." };
      const v = Math.sqrt(parseFloat(T) / densidad);
      return {
        result: { v: formatNumber(v) },
        steps: [
          `v = √(T / μ) = √(${T} / ${mu})`,
          `v = ${formatNumber(v)} m/s`
        ]
      };
    }
  },
  {
    id: 'ondas-trans-tension',
    groupId: 'ondas-trans-cuerda',
    isFundamental: false,
    title: 'Calcular Tensión (T = μv²)',
    formula: 'T = μ * v²',
    variables: [
      { symbol: 'mu', label: 'Densidad lineal μ (kg/m)', unit: 'kg/m' },
      { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' }
    ],
    output: { symbol: 'T', label: 'Tensión T (N)', unit: 'N' },
    resolve: ({ mu, v }) => {
      const T = parseFloat(mu) * Math.pow(parseFloat(v), 2);
      return {
        result: { T: formatNumber(T) },
        steps: [
          `T = μ * v² = ${mu} * ${v}²`,
          `T = ${formatNumber(T)} N`
        ]
      };
    }
  },
  {
    id: 'ondas-trans-densidad',
    groupId: 'ondas-trans-cuerda',
    isFundamental: false,
    title: 'Calcular Densidad lineal (μ = T/v²)',
    formula: 'μ = T / v²',
    variables: [
      { symbol: 'T', label: 'Tensión T (N)', unit: 'N' },
      { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' }
    ],
    output: { symbol: 'mu', label: 'Densidad lineal μ (kg/m)', unit: 'kg/m' },
    resolve: ({ T, v }) => {
      const velocidad = parseFloat(v);
      if (velocidad === 0) return { error: "La velocidad no puede ser cero." };
      const mu = parseFloat(T) / Math.pow(velocidad, 2);
      return {
        result: { mu: formatNumber(mu) },
        steps: [
          `μ = T / v² = ${T} / ${v}²`,
          `μ = ${formatNumber(mu)} kg/m`
        ]
      };
    }
  },

  // --- Grupo 2: Velocidad Máxima de Partícula ---
  {
    id: 'ondas-trans-vmax',
    groupId: 'ondas-trans-velocidad-particula',
    isFundamental: true,
    title: 'Calcular Velocidad máxima (vmax = Aω)',
    formula: 'v_max = A * ω',
    variables: [
      { symbol: 'A', label: 'Amplitud A (m)', unit: 'm' },
      { symbol: 'omega', label: 'Frecuencia angular ω (rad/s)', unit: 'rad/s' }
    ],
    output: { symbol: 'v_max', label: 'Velocidad máxima vmax (m/s)', unit: 'm/s' },
    resolve: ({ A, omega }) => {
      const v_max = parseFloat(A) * parseFloat(omega);
      return {
        result: { v_max: formatNumber(v_max) },
        steps: [
          `vmax = A * ω = ${A} * ${omega}`,
          `vmax = ${formatNumber(v_max)} m/s`
        ]
      };
    }
  },
  {
    id: 'ondas-trans-amplitud-v',
    groupId: 'ondas-trans-velocidad-particula',
    isFundamental: false,
    title: 'Calcular Amplitud (A = vmax/ω)',
    formula: 'A = v_max / ω',
    variables: [
      { symbol: 'v_max', label: 'Velocidad máxima vmax (m/s)', unit: 'm/s' },
      { symbol: 'omega', label: 'Frecuencia angular ω (rad/s)', unit: 'rad/s' }
    ],
    output: { symbol: 'A', label: 'Amplitud A (m)', unit: 'm' },
    resolve: ({ v_max, omega }) => {
      const frecuenciaAngular = parseFloat(omega);
      if (frecuenciaAngular === 0) return { error: "La frecuencia angular no puede ser cero." };
      const A = parseFloat(v_max) / frecuenciaAngular;
      return {
        result: { A: formatNumber(A) },
        steps: [
          `A = vmax / ω = ${v_max} / ${omega}`,
          `A = ${formatNumber(A)} m`
        ]
      };
    }
  },
  {
    id: 'ondas-trans-omega-v',
    groupId: 'ondas-trans-velocidad-particula',
    isFundamental: false,
    title: 'Calcular Frecuencia angular (ω = vmax/A)',
    formula: 'ω = v_max / A',
    variables: [
      { symbol: 'v_max', label: 'Velocidad máxima vmax (m/s)', unit: 'm/s' },
      { symbol: 'A', label: 'Amplitud A (m)', unit: 'm' }
    ],
    output: { symbol: 'omega', label: 'Frecuencia angular ω (rad/s)', unit: 'rad/s' },
    resolve: ({ v_max, A }) => {
      const amplitud = parseFloat(A);
      if (amplitud === 0) return { error: "La amplitud no puede ser cero." };
      const omega = parseFloat(v_max) / amplitud;
      return {
        result: { omega: formatNumber(omega) },
        steps: [
          `ω = vmax / A = ${v_max} / ${A}`,
          `ω = ${formatNumber(omega)} rad/s`
        ]
      };
    }
  },

  // --- Grupo 3: Aceleración Máxima de Partícula ---
  {
    id: 'ondas-trans-amax',
    groupId: 'ondas-trans-aceleracion',
    isFundamental: true,
    title: 'Calcular Aceleración máxima (amax = Aω²)',
    formula: 'a_max = A * ω²',
    variables: [
      { symbol: 'A', label: 'Amplitud A (m)', unit: 'm' },
      { symbol: 'omega', label: 'Frecuencia angular ω (rad/s)', unit: 'rad/s' }
    ],
    output: { symbol: 'a_max', label: 'Aceleración máxima amax (m/s²)', unit: 'm/s²' },
    resolve: ({ A, omega }) => {
      const a_max = parseFloat(A) * Math.pow(parseFloat(omega), 2);
      return {
        result: { a_max: formatNumber(a_max) },
        steps: [
          `amax = A * ω² = ${A} * ${omega}²`,
          `amax = ${formatNumber(a_max)} m/s²`
        ]
      };
    }
  },
  {
    id: 'ondas-trans-amplitud-a',
    groupId: 'ondas-trans-aceleracion',
    isFundamental: false,
    title: 'Calcular Amplitud (A = amax/ω²)',
    formula: 'A = a_max / ω²',
    variables: [
      { symbol: 'a_max', label: 'Aceleración máxima amax (m/s²)', unit: 'm/s²' },
      { symbol: 'omega', label: 'Frecuencia angular ω (rad/s)', unit: 'rad/s' }
    ],
    output: { symbol: 'A', label: 'Amplitud A (m)', unit: 'm' },
    resolve: ({ a_max, omega }) => {
      const frecuenciaAngular = parseFloat(omega);
      if (frecuenciaAngular === 0) return { error: "La frecuencia angular no puede ser cero." };
      const A = parseFloat(a_max) / Math.pow(frecuenciaAngular, 2);
      return {
        result: { A: formatNumber(A) },
        steps: [
          `A = amax / ω² = ${a_max} / ${omega}²`,
          `A = ${formatNumber(A)} m`
        ]
      };
    }
  },
  {
    id: 'ondas-trans-omega-a',
    groupId: 'ondas-trans-aceleracion',
    isFundamental: false,
    title: 'Calcular Frecuencia angular (ω = √(amax/A))',
    formula: 'ω = √(a_max / A)',
    variables: [
      { symbol: 'a_max', label: 'Aceleración máxima amax (m/s²)', unit: 'm/s²' },
      { symbol: 'A', label: 'Amplitud A (m)', unit: 'm' }
    ],
    output: { symbol: 'omega', label: 'Frecuencia angular ω (rad/s)', unit: 'rad/s' },
    resolve: ({ a_max, A }) => {
      const amplitud = parseFloat(A);
      if (amplitud === 0) return { error: "La amplitud no puede ser cero." };
      const omega = Math.sqrt(parseFloat(a_max) / amplitud);
      return {
        result: { omega: formatNumber(omega) },
        steps: [
          `ω = √(amax / A) = √(${a_max} / ${A})`,
          `ω = ${formatNumber(omega)} rad/s`
        ]
      };
    }
  }
];
