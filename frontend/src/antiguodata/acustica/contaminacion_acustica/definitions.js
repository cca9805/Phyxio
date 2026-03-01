import { formatNumber } from '../../../utils/formatNumber';

export const definitions = [
  {
    id: 'contaminacion-nivel-equivalente',
    groupId: 'contaminacion-nivel-equivalente',
    title: 'Nivel Sonoro Equivalente (Leq) - 2 Períodos',
    isFundamental: true,
    formula: 'L_eq = 10 × log₁₀((1/T) × (10^(L₁/10) × t₁ + 10^(L₂/10) × t₂))',
    variables: [
      { symbol: 'L1', label: 'Nivel período 1 (dB)', unit: 'dB' },
      { symbol: 't1', label: 'Tiempo período 1 (h)', unit: 'h' },
      { symbol: 'L2', label: 'Nivel período 2 (dB)', unit: 'dB' },
      { symbol: 't2', label: 'Tiempo período 2 (h)', unit: 'h' }
    ],
    output: { symbol: 'L_eq', label: 'Nivel equivalente', unit: 'dB' },
    resolve: ({ L1, t1, L2, t2 }) => {
      const T = parseFloat(t1) + parseFloat(t2);
      const termino1 = Math.pow(10, parseFloat(L1) / 10) * parseFloat(t1);
      const termino2 = Math.pow(10, parseFloat(L2) / 10) * parseFloat(t2);
      const suma = termino1 + termino2;
      const L_eq = 10 * Math.log10(suma / T);
      
      return {
        result: { L_eq: formatNumber(L_eq) },
        steps: [
          `Período 1: ${L1} dB durante ${t1} h`,
          `Período 2: ${L2} dB durante ${t2} h`,
          `Tiempo total T = ${t1} + ${t2} = ${formatNumber(T)} h`,
          `Término 1: 10^(${L1}/10) × ${t1} = ${formatNumber(termino1)}`,
          `Término 2: 10^(${L2}/10) × ${t2} = ${formatNumber(termino2)}`,
          `L_eq = 10 × log₁₀((${formatNumber(termino1)} + ${formatNumber(termino2)})/${formatNumber(T)})`,
          `L_eq = ${formatNumber(L_eq)} dB`
        ]
      };
    }
  },
  {
    id: 'contaminacion-reduccion-distancia',
    groupId: 'contaminacion-reduccion-distancia',
    title: 'Reducción de Ruido por Distancia',
    isFundamental: true,
    formula: 'L₂ = L₁ - 20 × log₁₀(r₂/r₁)',
    variables: [
      { symbol: 'L1', label: 'Nivel a distancia r₁ (dB)', unit: 'dB' },
      { symbol: 'r1', label: 'Distancia inicial (m)', unit: 'm' },
      { symbol: 'r2', label: 'Distancia final (m)', unit: 'm' }
    ],
    output: { symbol: 'L2', label: 'Nivel a distancia r₂', unit: 'dB' },
    resolve: ({ L1, r1, r2 }) => {
      const L2 = parseFloat(L1) - 20 * Math.log10(parseFloat(r2) / parseFloat(r1));
      const reduccion = parseFloat(L1) - L2;
      return {
        result: { L2: formatNumber(L2) },
        steps: [
          `L₂ = L₁ - 20 × log₁₀(r₂/r₁)`,
          `L₂ = ${L1} - 20 × log₁₀(${r2}/${r1})`,
          `L₂ = ${L1} - 20 × ${formatNumber(Math.log10(parseFloat(r2) / parseFloat(r1)))}`,
          `L₂ = ${formatNumber(L2)} dB`,
          `Reducción: ${formatNumber(reduccion)} dB`
        ]
      };
    }
  },
  {
    id: 'contaminacion-barrera-acustica',
    groupId: 'contaminacion-barrera-acustica',
    title: 'Atenuación de Barrera Acústica',
    isFundamental: true,
    formula: 'A = 10 × log₁₀(3 + 20 × N)',
    variables: [
      { symbol: 'N', label: 'Número de Fresnel (adimensional)', unit: 'adimensional' },
      { symbol: 'f', label: 'Frecuencia del sonido (Hz)', unit: 'Hz' },
      { symbol: 'delta', label: 'Diferencia de camino (m)', unit: 'm' }
    ],
    output: { symbol: 'A', label: 'Atenuación', unit: 'dB' },
    resolve: ({ N, f, delta }) => {
      // Si se proporciona f y delta, calcular N
      let numN = parseFloat(N);
      if (f && delta) {
        const c = 343; // velocidad del sonido
        const lambda = c / parseFloat(f);
        numN = (2 * parseFloat(delta)) / lambda;
      }
      
      const A = 10 * Math.log10(3 + 20 * numN);
      return {
        result: { A: formatNumber(A) },
        steps: [
          f && delta ? `N = (2 × ${delta}) / (343/${f}) = ${formatNumber(numN)}` : `N = ${numN}`,
          `A = 10 × log₁₀(3 + 20 × N)`,
          `A = 10 × log₁₀(3 + 20 × ${formatNumber(numN)})`,
          `A = 10 × log₁₀(${formatNumber(3 + 20 * numN)})`,
          `A = ${formatNumber(A)} dB`
        ]
      };
    }
  },
  {
    id: 'contaminacion-suma-niveles',
    groupId: 'contaminacion-suma-niveles',
    title: 'Suma de Niveles Sonoros',
    isFundamental: false,
    formula: 'L_total = 10 × log₁₀(Σ 10^(L_i/10))',
    variables: [
      { symbol: 'L1', label: 'Nivel fuente 1 (dB)', unit: 'dB' },
      { symbol: 'L2', label: 'Nivel fuente 2 (dB)', unit: 'dB' }
    ],
    output: { symbol: 'L_total', label: 'Nivel total', unit: 'dB' },
    resolve: ({ L1, L2 }) => {
      const suma = Math.pow(10, parseFloat(L1) / 10) + Math.pow(10, parseFloat(L2) / 10);
      const L_total = 10 * Math.log10(suma);
      return {
        result: { L_total: formatNumber(L_total) },
        steps: [
          `L_total = 10 × log₁₀(10^(L₁/10) + 10^(L₂/10))`,
          `L_total = 10 × log₁₀(10^(${L1}/10) + 10^(${L2}/10))`,
          `L_total = 10 × log₁₀(${formatNumber(Math.pow(10, parseFloat(L1) / 10))} + ${formatNumber(Math.pow(10, parseFloat(L2) / 10))})`,
          `L_total = 10 × log₁₀(${formatNumber(suma)})`,
          `L_total = ${formatNumber(L_total)} dB`,
          `💡 Nota: Dos fuentes iguales aumentan el nivel en 3 dB`
        ]
      };
    }
  },
  {
    id: 'contaminacion-indice-ruido',
    groupId: 'contaminacion-indice-ruido',
    title: 'Índice de Ruido Día-Noche (Ldn)',
    isFundamental: false,
    formula: 'L_dn = 10 × log₁₀((15 × 10^(L_d/10) + 9 × 10^((L_n+10)/10))/24)',
    variables: [
      { symbol: 'L_d', label: 'Nivel diurno promedio (dB)', unit: 'dB' },
      { symbol: 'L_n', label: 'Nivel nocturno promedio (dB)', unit: 'dB' }
    ],
    output: { symbol: 'L_dn', label: 'Índice día-noche', unit: 'dB' },
    resolve: ({ L_d, L_n }) => {
      const termino_dia = 15 * Math.pow(10, parseFloat(L_d) / 10);
      const termino_noche = 9 * Math.pow(10, (parseFloat(L_n) + 10) / 10);
      const L_dn = 10 * Math.log10((termino_dia + termino_noche) / 24);
      
      let evaluacion = '';
      if (L_dn < 55) {
        evaluacion = '✅ Nivel aceptable';
      } else if (L_dn < 65) {
        evaluacion = '⚠️ Nivel moderado, molestias';
      } else if (L_dn < 75) {
        evaluacion = '⚠️ Nivel alto, problemas de salud';
      } else {
        evaluacion = '❌ Nivel muy alto, riesgo grave';
      }
      
      return {
        result: { L_dn: formatNumber(L_dn) },
        steps: [
          `L_dn = 10 × log₁₀((15 × 10^(L_d/10) + 9 × 10^((L_n+10)/10))/24)`,
          `Término día: 15 × 10^(${L_d}/10) = ${formatNumber(termino_dia)}`,
          `Término noche: 9 × 10^((${L_n}+10)/10) = ${formatNumber(termino_noche)}`,
          `L_dn = 10 × log₁₀((${formatNumber(termino_dia)} + ${formatNumber(termino_noche)})/24)`,
          `L_dn = ${formatNumber(L_dn)} dB`,
          evaluacion
        ]
      };
    }
  }
];
