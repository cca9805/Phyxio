import { formatNumber } from '../../../../utils/formatNumber';

const c = 299792458; // Velocidad de la luz en m/s

export const definitions = [
  // Grupo 1: Relaciones Fundamentales
  {
    id: 'radio-frecuencia-longitud',
    groupId: 'radio_frecuencia_longitud',
    title: 'Longitud de Onda',
    isFundamental: true,
    formula: 'λ = c / f',
    variables: [
      { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' }
    ],
    output: { symbol: 'lambda', label: 'Longitud de Onda (λ)', unit: 'm' },
    constants: [
      { symbol: 'c', label: 'Velocidad de la luz', value: c, unit: 'm/s' }
    ],
    donde: "λ es la longitud de onda, c es la velocidad de la luz y f es la frecuencia",
    resolve: ({ f }) => {
      const freq = parseFloat(f);
      if (freq <= 0) return { error: 'La frecuencia debe ser positiva.' };
      const lambda = c / freq;
      return { 
        result: { lambda: formatNumber(lambda) }, 
        steps: [`λ = ${c} / ${freq} = ${formatNumber(lambda)} m`] 
      };
    }
  },
  {
    id: 'radio-frecuencia-calc',
    groupId: 'radio_frecuencia_longitud',
    title: 'Frecuencia',
    isComplementary: true,
    formula: 'f = c / λ',
    variables: [
      { symbol: 'lambda', label: 'Longitud de Onda (λ)', unit: 'm' }
    ],
    output: { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' },
    constants: [
      { symbol: 'c', label: 'Velocidad de la luz', value: c, unit: 'm/s' }
    ],
    donde: "f es la frecuencia, c es la velocidad de la luz y λ es la longitud de onda",
    resolve: ({ lambda }) => {
      const longitud = parseFloat(lambda);
      if (longitud <= 0) return { error: 'La longitud de onda debe ser positiva.' };
      const f = c / longitud;
      return { 
        result: { f: formatNumber(f) }, 
        steps: [`f = ${c} / ${longitud} = ${formatNumber(f)} Hz`] 
      };
    }
  },

  // Grupo 2: Antenas
  {
    id: 'radio-antena-dipolo',
    groupId: 'radio_antena_dipolo',
    title: 'Longitud de Dipolo (λ/2)',
    isFundamental: true,
    formula: 'L = λ/2 = c/(2f)',
    variables: [
      { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' }
    ],
    output: { symbol: 'L', label: 'Longitud del Dipolo (L)', unit: 'm' },
    constants: [
      { symbol: 'c', label: 'Velocidad de la luz', value: c, unit: 'm/s' }
    ],
    donde: "L es la longitud del dipolo (λ/2), c es la velocidad de la luz y f es la frecuencia de resonancia",
    resolve: ({ f }) => {
      const freq = parseFloat(f);
      if (freq <= 0) return { error: 'La frecuencia debe ser positiva.' };
      const L = c / (2 * freq);
      return { 
        result: { L: formatNumber(L) }, 
        steps: [`L = ${c} / (2 × ${freq}) = ${formatNumber(L)} m`] 
      };
    }
  },
  {
    id: 'radio-frecuencia-dipolo',
    groupId: 'radio_antena_dipolo',
    title: 'Frecuencia de Resonancia',
    isComplementary: true,
    formula: 'f = c/(2L)',
    variables: [
      { symbol: 'L', label: 'Longitud del Dipolo (L)', unit: 'm' }
    ],
    output: { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' },
    constants: [
      { symbol: 'c', label: 'Velocidad de la luz', value: c, unit: 'm/s' }
    ],
    donde: "f es la frecuencia de resonancia, c es la velocidad de la luz y L es la longitud del dipolo",
    resolve: ({ L }) => {
      const longitud = parseFloat(L);
      if (longitud <= 0) return { error: 'La longitud debe ser positiva.' };
      const f = c / (2 * longitud);
      return { 
        result: { f: formatNumber(f) }, 
        steps: [`f = ${c} / (2 × ${longitud}) = ${formatNumber(f)} Hz`] 
      };
    }
  },

  // Grupo 3: Propagación
  {
    id: 'radio-perdidas-db',
    groupId: 'radio_perdidas_propagacion',
    title: 'Pérdidas de Propagación (dB)',
    isFundamental: true,
    formula: 'L_dB = 20·log₁₀(4πd/λ)',
    variables: [
      { symbol: 'd', label: 'Distancia (d)', unit: 'm' },
      { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' }
    ],
    output: { symbol: 'L_dB', label: 'Pérdidas (L)', unit: 'dB' },
    constants: [
      { symbol: 'c', label: 'Velocidad de la luz', value: c, unit: 'm/s' }
    ],
    donde: "L es la pérdida de propagación en espacio libre, d es la distancia, f es la frecuencia y c es la velocidad de la luz",
    resolve: ({ d, f }) => {
      const distancia = parseFloat(d);
      const freq = parseFloat(f);
      if (distancia <= 0) return { error: 'La distancia debe ser positiva.' };
      if (freq <= 0) return { error: 'La frecuencia debe ser positiva.' };
      
      const lambda = c / freq;
      const L_dB = 20 * Math.log10((4 * Math.PI * distancia) / lambda);
      
      return { 
        result: { L_dB: formatNumber(L_dB) }, 
        steps: [
          `λ = ${c} / ${freq} = ${formatNumber(lambda)} m`,
          `L = 20 × log₁₀(4π × ${distancia} / ${formatNumber(lambda)}) = ${formatNumber(L_dB)} dB`
        ] 
      };
    }
  },

  // Grupo 4: Ganancia de Antena
  {
    id: 'radio-area-efectiva',
    groupId: 'radio_ganancia_antena',
    title: 'Área Efectiva de Antena',
    isFundamental: true,
    formula: 'A_ef = G·λ²/(4π)',
    variables: [
      { symbol: 'G', label: 'Ganancia (G)', unit: 'veces' },
      { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' }
    ],
    output: { symbol: 'A_ef', label: 'Área Efectiva (A_ef)', unit: 'm²' },
    constants: [
      { symbol: 'c', label: 'Velocidad de la luz', value: c, unit: 'm/s' }
    ],
    donde: "A_ef es el área efectiva de la antena, G es la ganancia de la antena, λ es la longitud de onda y c es la velocidad de la luz",
    resolve: ({ G, f }) => {
      const ganancia = parseFloat(G);
      const freq = parseFloat(f);
      if (ganancia <= 0) return { error: 'La ganancia debe ser positiva.' };
      if (freq <= 0) return { error: 'La frecuencia debe ser positiva.' };
      
      const lambda = c / freq;
      const A_ef = (ganancia * lambda * lambda) / (4 * Math.PI);
      
      return { 
        result: { A_ef: formatNumber(A_ef) }, 
        steps: [
          `λ = ${c} / ${freq} = ${formatNumber(lambda)} m`,
          `A_ef = ${ganancia} × (${formatNumber(lambda)})² / (4π) = ${formatNumber(A_ef)} m²`
        ] 
      };
    }
  }
];