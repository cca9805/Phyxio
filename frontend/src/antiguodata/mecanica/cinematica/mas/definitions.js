import { formatNumber } from '../../../../utils/formatNumber';

const PI = Math.PI;
const G = 9.81; // Gravedad estándar

export const definitions = [
  // --- Grupo 1: Parámetros Fundamentales del MAS ---
  {
    id: 'mas-omega-desde-periodo',
    groupId: 'mas-parametros-fundamentales',
    title: 'Calcular ω (desde Período)',
    formula: 'ω = 2π / T',
    variables: [{ symbol: 'T', label: 'Período (T)', unit: 's' }],
    output: { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s' },
    resolve: ({ T }) => {
      const numT = parseFloat(T);
      if (numT === 0) return { error: 'El período no puede ser cero.' };
      const w = (2 * PI) / numT;
      return { result: { w: formatNumber(w) }, steps: [`ω = 2π / ${T} = ${formatNumber(w)} rad/s`] };
    }
  },
  {
    id: 'mas-periodo-desde-omega',
    groupId: 'mas-parametros-fundamentales',
    title: 'Calcular Período (desde ω)',
    formula: 'T = 2π / ω',
    variables: [{ symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s' }],
    output: { symbol: 'T', label: 'Período (T)', unit: 's' },
    resolve: ({ w }) => {
      const numW = parseFloat(w);
      if (numW === 0) return { error: 'La frecuencia angular no puede ser cero.' };
      const T = (2 * PI) / numW;
      return { result: { T: formatNumber(T) }, steps: [`T = 2π / ${w} = ${formatNumber(T)} s`] };
    }
  },
  {
    id: 'mas-frecuencia-desde-periodo',
    groupId: 'mas-parametros-fundamentales',
    title: 'Calcular Frecuencia (f)',
    formula: 'f = 1 / T',
    variables: [{ symbol: 'T', label: 'Período (T)', unit: 's' }],
    output: { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' },
    resolve: ({ T }) => {
      const numT = parseFloat(T);
      if (numT === 0) return { error: 'El período no puede ser cero.' };
      const f = 1 / numT;
      return { result: { f: formatNumber(f) }, steps: [`f = 1 / ${T} = ${formatNumber(f)} Hz`] };
    }
  },
  {
    id: 'mas-omega-desde-frecuencia',
    groupId: 'mas-parametros-fundamentales',
    title: 'Calcular ω (desde Frecuencia)',
    formula: 'ω = 2πf',
    variables: [{ symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' }],
    output: { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s' },
    resolve: ({ f }) => {
      const w = 2 * PI * parseFloat(f);
      return { result: { w: formatNumber(w) }, steps: [`ω = 2π * ${f} = ${formatNumber(w)} rad/s`] };
    }
  },

  // --- Grupo 2: Sistema Masa-Resorte ---
  {
    id: 'mas-omega-resorte',
    groupId: 'mas-sistema-resorte',
    title: 'Calcular ω (Masa-Resorte)',
    formula: 'ω = √(k/m)',
    variables: [
      { symbol: 'k', label: 'Constante elástica (k)', unit: 'N/m' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' }
    ],
    output: { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s' },
    resolve: ({ k, m }) => {
      const numM = parseFloat(m);
      if (numM === 0) return { error: 'La masa no puede ser cero.' };
      const w = Math.sqrt(parseFloat(k) / numM);
      return { result: { w: formatNumber(w) }, steps: [`ω = √(${k}/${m}) = ${formatNumber(w)} rad/s`] };
    }
  },
  {
    id: 'mas-k-resorte',
    groupId: 'mas-sistema-resorte',
    title: 'Calcular k (Masa-Resorte)',
    formula: 'k = m * ω²',
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
      { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s' }
    ],
    output: { symbol: 'k', label: 'Constante elástica (k)', unit: 'N/m' },
    resolve: ({ m, w }) => {
      const k = parseFloat(m) * Math.pow(parseFloat(w), 2);
      return { result: { k: formatNumber(k) }, steps: [`k = ${m} * ${w}² = ${formatNumber(k)} N/m`] };
    }
  },
  {
    id: 'mas-m-resorte',
    groupId: 'mas-sistema-resorte',
    title: 'Calcular Masa (Masa-Resorte)',
    formula: 'm = k / ω²',
    variables: [
      { symbol: 'k', label: 'Constante elástica (k)', unit: 'N/m' },
      { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s' }
    ],
    output: { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
    resolve: ({ k, w }) => {
      const numW = parseFloat(w);
      if (numW === 0) return { error: 'La frecuencia angular no puede ser cero.' };
      const m = parseFloat(k) / Math.pow(numW, 2);
      return { result: { m: formatNumber(m) }, steps: [`m = ${k} / ${w}² = ${formatNumber(m)} kg`] };
    }
  },
  
  // --- Grupo 3: Péndulo Simple ---
  {
    id: 'mas-omega-pendulo',
    groupId: 'mas-pendulo-simple',
    title: 'Calcular ω (Péndulo Simple)',
    formula: 'ω = √(g/L)',
    variables: [
      { symbol: 'L', label: 'Longitud (L)', unit: 'm' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s' },
    resolve: ({ L, g = G }) => {
      const numL = parseFloat(L);
      if (numL === 0) return { error: 'La longitud no puede ser cero.' };
      const w = Math.sqrt(parseFloat(g) / numL);
      return { result: { w: formatNumber(w) }, steps: [`ω = √(${g}/${L}) = ${formatNumber(w)} rad/s`] };
    }
  },
  {
    id: 'mas-L-pendulo',
    groupId: 'mas-pendulo-simple',
    title: 'Calcular Longitud (Péndulo Simple)',
    formula: 'L = g / ω²',
    variables: [
      { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'L', label: 'Longitud (L)', unit: 'm' },
    resolve: ({ w, g = G }) => {
      const numW = parseFloat(w);
      if (numW === 0) return { error: 'La frecuencia angular no puede ser cero.' };
      const L = parseFloat(g) / Math.pow(numW, 2);
      return { result: { L: formatNumber(L) }, steps: [`L = ${g} / ${w}² = ${formatNumber(L)} m`] };
    }
  },
  {
    id: 'mas-g-pendulo',
    groupId: 'mas-pendulo-simple',
    title: 'Calcular Gravedad (Péndulo Simple)',
    formula: 'g = L * ω²',
    variables: [
      { symbol: 'L', label: 'Longitud (L)', unit: 'm' },
      { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s' }
    ],
    output: { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²' },
    resolve: ({ L, w }) => {
      const g = parseFloat(L) * Math.pow(parseFloat(w), 2);
      return { result: { g: formatNumber(g) }, steps: [`g = ${L} * ${w}² = ${formatNumber(g)} m/s²`] };
    }
  },

  // --- Grupo 4: Cinemática del MAS ---
  {
    id: 'mas-posicion',
    groupId: 'mas-cinematica',
    title: 'Posición x(t)',
    formula: 'x(t) = A * cos(ωt + φ)',
    variables: [
      { symbol: 'A', label: 'Amplitud (A)', unit: 'm' },
      { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' },
      { symbol: 'phi', label: 'Fase inicial (φ)', unit: 'rad', defaultValue: 0 }
    ],
    output: { symbol: 'x', label: 'Posición (x)', unit: 'm' },
    resolve: ({ A, w, t, phi = 0 }) => {
      const x = parseFloat(A) * Math.cos(parseFloat(w) * parseFloat(t) + parseFloat(phi));
      return { result: { x: formatNumber(x) }, steps: [`x(${t}) = ${A}cos(${w}*${t} + ${phi}) = ${formatNumber(x)} m`] };
    }
  },
  {
    id: 'mas-velocidad',
    groupId: 'mas-cinematica',
    title: 'Velocidad v(t)',
    formula: 'v(t) = -Aω * sin(ωt + φ)',
    variables: [
      { symbol: 'A', label: 'Amplitud (A)', unit: 'm' },
      { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' },
      { symbol: 'phi', label: 'Fase inicial (φ)', unit: 'rad', defaultValue: 0 }
    ],
    output: { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
    resolve: ({ A, w, t, phi = 0 }) => {
      const v = -parseFloat(A) * parseFloat(w) * Math.sin(parseFloat(w) * parseFloat(t) + parseFloat(phi));
      return { result: { v: formatNumber(v) }, steps: [`v(${t}) = -${A}*${w}*sin(${w}*${t} + ${phi}) = ${formatNumber(v)} m/s`] };
    }
  },
  {
    id: 'mas-aceleracion',
    groupId: 'mas-cinematica',
    title: 'Aceleración a(t)',
    formula: 'a(t) = -Aω² * cos(ωt + φ)',
    variables: [
      { symbol: 'A', label: 'Amplitud (A)', unit: 'm' },
      { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' },
      { symbol: 'phi', label: 'Fase inicial (φ)', unit: 'rad', defaultValue: 0 }
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ A, w, t, phi = 0 }) => {
      const a = -parseFloat(A) * Math.pow(parseFloat(w), 2) * Math.cos(parseFloat(w) * parseFloat(t) + parseFloat(phi));
      return { result: { a: formatNumber(a) }, steps: [`a(${t}) = -${A}*${w}²*cos(${w}*${t} + ${phi}) = ${formatNumber(a)} m/s²`] };
    }
  },
  {
    id: 'mas-velocidad-maxima',
    groupId: 'mas-cinematica',
    title: 'Velocidad Máxima (vₘₐₓ)',
    formula: 'vₘₐₓ = A * ω',
    variables: [
      { symbol: 'A', label: 'Amplitud (A)', unit: 'm' },
      { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s' }
    ],
    output: { symbol: 'vMax', label: 'Velocidad Máxima (vₘₐₓ)', unit: 'm/s' },
    resolve: ({ A, w }) => {
      const vMax = parseFloat(A) * parseFloat(w);
      return { result: { vMax: formatNumber(vMax) }, steps: [`vₘₐₓ = ${A} * ${w} = ${formatNumber(vMax)} m/s`] };
    }
  },
  {
    id: 'mas-aceleracion-maxima',
    groupId: 'mas-cinematica',
    title: 'Aceleración Máxima (aₘₐₓ)',
    formula: 'aₘₐₓ = A * ω²',
    variables: [
      { symbol: 'A', label: 'Amplitud (A)', unit: 'm' },
      { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s' }
    ],
    output: { symbol: 'aMax', label: 'Aceleración Máxima (aₘₐₓ)', unit: 'm/s²' },
    resolve: ({ A, w }) => {
      const aMax = parseFloat(A) * Math.pow(parseFloat(w), 2);
      return { result: { aMax: formatNumber(aMax) }, steps: [`aₘₐₓ = ${A} * ${w}² = ${formatNumber(aMax)} m/s²`] };
    }
  },

  // --- Grupo 5: Dinámica del MAS ---
  {
    id: 'mas-fuerza-hooke',
    groupId: 'mas-dinamica',
    title: 'Fuerza (Ley de Hooke)',
    formula: 'F = -k * x',
    variables: [
        { symbol: 'k', label: 'Constante elástica (k)', unit: 'N/m' },
        { symbol: 'x', label: 'Elongación (x)', unit: 'm' }
    ],
    output: { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
    resolve: ({ k, x }) => {
      const F = -parseFloat(k) * parseFloat(x);
      return { result: { F: formatNumber(F) }, steps: [`F = -${k} * ${x} = ${formatNumber(F)} N`] };
    }
  },
  {
    id: 'mas-aceleracion-posicion',
    groupId: 'mas-dinamica',
    title: 'Aceleración a(x)',
    formula: 'a(x) = -ω² * x',
    variables: [
      { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s' },
      { symbol: 'x', label: 'Posición (x)', unit: 'm' }
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ w, x }) => {
      const a = -Math.pow(parseFloat(w), 2) * parseFloat(x);
      return { result: { a: formatNumber(a) }, steps: [`a = -${w}² * (${x}) = ${formatNumber(a)} m/s²`] };
    }
  },

  // --- Grupo 6: Energía del MAS ---
  {
    id: 'mas-energia-total',
    groupId: 'mas-energia',
    title: 'Energía Total (E)',
    formula: 'E = ½kA²',
    variables: [
      { symbol: 'k', label: 'Constante elástica (k)', unit: 'N/m' },
      { symbol: 'A', label: 'Amplitud (A)', unit: 'm' }
    ],
    output: { symbol: 'E', label: 'Energía Total (E)', unit: 'J' },
    resolve: ({ k, A }) => {
      const E = 0.5 * parseFloat(k) * Math.pow(parseFloat(A), 2);
      return { result: { E: formatNumber(E) }, steps: [`E = ½ * ${k} * ${A}² = ${formatNumber(E)} J`] };
    }
  },
  {
    id: 'mas-energia-potencial',
    groupId: 'mas-energia',
    title: 'Energía Potencial Elástica (Eₚ)',
    formula: 'Eₚ = ½kx²',
    variables: [
      { symbol: 'k', label: 'Constante elástica (k)', unit: 'N/m' },
      { symbol: 'x', label: 'Posición (x)', unit: 'm' }
    ],
    output: { symbol: 'Ep', label: 'Energía Potencial (Eₚ)', unit: 'J' },
    resolve: ({ k, x }) => {
      const Ep = 0.5 * parseFloat(k) * Math.pow(parseFloat(x), 2);
      return { result: { Ep: formatNumber(Ep) }, steps: [`Eₚ = ½ * ${k} * ${x}² = ${formatNumber(Ep)} J`] };
    }
  },
  {
    id: 'mas-energia-cinetica',
    groupId: 'mas-energia',
    title: 'Energía Cinética (Eₖ)',
    formula: 'Eₖ = E - Eₚ',
    variables: [
      { symbol: 'E', label: 'Energía Total (E)', unit: 'J' },
      { symbol: 'Ep', label: 'Energía Potencial (Eₚ)', unit: 'J' }
    ],
    output: { symbol: 'Ek', label: 'Energía Cinética (Eₖ)', unit: 'J' },
    resolve: ({ E, Ep }) => {
      const Ek = parseFloat(E) - parseFloat(Ep);
      return { result: { Ek: formatNumber(Ek) }, steps: [`Eₖ = ${E} - ${Ep} = ${formatNumber(Ek)} J`] };
    }
  },
  {
    id: 'mas-velocidad-desde-energia',
    groupId: 'mas-energia',
    title: 'Velocidad (desde Energía)',
    formula: 'v = ±√(2Eₖ/m)',
    variables: [
      { symbol: 'Ek', label: 'Energía Cinética (Eₖ)', unit: 'J' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' }
    ],
    output: { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
    resolve: ({ Ek, m }) => {
      const numM = parseFloat(m);
      if (numM === 0) return { error: "La masa no puede ser cero." };
      const v = Math.sqrt(2 * parseFloat(Ek) / numM);
      return { result: { v: `±${formatNumber(v)}` }, steps: [`v = ±√(2 * ${Ek} / ${m}) = ±${formatNumber(v)} m/s`] };
    }
  }
];
