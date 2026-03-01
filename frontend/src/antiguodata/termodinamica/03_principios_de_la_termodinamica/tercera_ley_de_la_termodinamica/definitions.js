import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // Grupo 1: Entropía Absoluta
  {
    id: 'tercera-ley-entropia-absoluta',
    groupId: 'tercera-ley-entropia',
    title: 'Entropía Absoluta (S)',
    isFundamental: true,
    formula: 'S(T) ≈ C_p ⋅ ln(T / T_0)',
    variables: [
      { symbol: 'C_p', label: 'Capacidad Calorífica Promedio (C_p)', unit: 'J/K' },
      { symbol: 'T', label: 'Temperatura Final (T)', unit: 'K' },
      { symbol: 'T_0', label: 'Temperatura Inicial (T_0)', unit: 'K', defaultValue: 1 }
    ],
    output: { symbol: 'S', label: 'Entropía Absoluta (S)', unit: 'J/K' },
    resolve: ({ C_p, T, T_0 }) => {
      const numCp = parseFloat(C_p);
      const numT = parseFloat(T);
      const numT0 = parseFloat(T_0);
      if (numT0 === 0 || numT <= numT0) return { error: 'T debe ser mayor que T_0 y T_0 no puede ser cero.' };
      const S = numCp * Math.log(numT / numT0);
      return { 
        result: { S: formatNumber(S) }, 
        steps: [
          `S = ${numCp} J/K × ln(${numT} K / ${numT0} K)`,
          `S = ${numCp} × ln(${formatNumber(numT / numT0)})`,
          `S = ${formatNumber(S)} J/K`
        ] 
      };
    }
  },
  {
    id: 'tercera-ley-capacidad-calorifica',
    groupId: 'tercera-ley-entropia',
    title: 'Capacidad Calorífica (C_p)',
    isComplementary: true,
    formula: 'C_p = S(T) / ln(T / T_0)',
    variables: [
      { symbol: 'S', label: 'Entropía Absoluta (S)', unit: 'J/K' },
      { symbol: 'T', label: 'Temperatura Final (T)', unit: 'K' },
      { symbol: 'T_0', label: 'Temperatura Inicial (T_0)', unit: 'K', defaultValue: 1 }
    ],
    output: { symbol: 'C_p', label: 'Capacidad Calorífica (C_p)', unit: 'J/K' },
    resolve: ({ S, T, T_0 }) => {
      const numS = parseFloat(S);
      const numT = parseFloat(T);
      const numT0 = parseFloat(T_0);
      if (numT0 === 0 || numT <= numT0) return { error: 'T debe ser mayor que T_0 y T_0 no puede ser cero.' };
      const lnRatio = Math.log(numT / numT0);
      if (lnRatio === 0) return { error: 'ln(T/T_0) no puede ser cero.' };
      const C_p = numS / lnRatio;
      return { 
        result: { C_p: formatNumber(C_p) }, 
        steps: [`C_p = ${numS} J/K / ln(${numT} / ${numT0}) = ${formatNumber(C_p)} J/K`] 
      };
    }
  },

  // Grupo 2: Temperatura Criogénica
  {
    id: 'tercera-ley-temperatura-kelvin',
    groupId: 'tercera-ley-temperatura',
    title: 'Temperatura en Kelvin (T)',
    isFundamental: true,
    formula: 'T(K) = T(°C) + 273.15',
    variables: [
      { symbol: 'T_C', label: 'Temperatura en Celsius (T)', unit: '°C' }
    ],
    output: { symbol: 'T_K', label: 'Temperatura en Kelvin (T)', unit: 'K' },
    resolve: ({ T_C }) => {
      const numTC = parseFloat(T_C);
      if (numTC < -273.15) return { error: 'La temperatura no puede ser menor que -273.15°C (0 K).' };
      const T_K = numTC + 273.15;
      return { 
        result: { T_K: formatNumber(T_K) }, 
        steps: [`T(K) = ${numTC}°C + 273.15 = ${formatNumber(T_K)} K`] 
      };
    }
  },
  {
    id: 'tercera-ley-temperatura-celsius',
    groupId: 'tercera-ley-temperatura',
    title: 'Temperatura en Celsius (T)',
    isComplementary: true,
    formula: 'T(°C) = T(K) - 273.15',
    variables: [
      { symbol: 'T_K', label: 'Temperatura en Kelvin (T)', unit: 'K' }
    ],
    output: { symbol: 'T_C', label: 'Temperatura en Celsius (T)', unit: '°C' },
    resolve: ({ T_K }) => {
      const numTK = parseFloat(T_K);
      if (numTK < 0) return { error: 'La temperatura en Kelvin no puede ser negativa.' };
      const T_C = numTK - 273.15;
      return { 
        result: { T_C: formatNumber(T_C) }, 
        steps: [`T(°C) = ${numTK} K - 273.15 = ${formatNumber(T_C)}°C`] 
      };
    }
  }
];
