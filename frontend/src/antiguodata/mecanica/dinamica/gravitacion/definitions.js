
import { formatNumber } from '../../../../utils/formatNumber';

const G = 6.6743e-11; // Constante de gravitación universal en N·m²/kg²
const PI = Math.PI;
const G_TERRESTRE = 9.8; // Aceleración gravitatoria terrestre estándar en m/s²
const G_STR = G.toExponential(4);

export const definitions = [
  // === GRUPO 1: Ley de Gravitación Universal ===
  {
    id: 'gravitacion-fuerza',
    groupId: 'ley-gravitacion-universal',
    title: 'Calcular Fuerza (F)',
    formula: 'F = G * (m₁ * m₂) / r²',
    variables: [
      { symbol: 'm1', label: 'Masa 1 (m₁)', unit: 'kg' },
      { symbol: 'm2', label: 'Masa 2 (m₂)', unit: 'kg' },
      { symbol: 'r', label: 'Distancia (r)', unit: 'm' },
    ],
    output: { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
    resolve: ({ m1, m2, r }) => {
      const r_val = parseFloat(r);
      if (r_val === 0) return { error: "La distancia no puede ser cero." };
      const F = (G * parseFloat(m1) * parseFloat(m2)) / Math.pow(r_val, 2);
      return { result: { F: formatNumber(F) }, steps: [`F = ${G_STR} * (${m1} * ${m2}) / ${r}² = ${formatNumber(F)} N`] };
    }
  },
  {
    id: 'gravitacion-masa',
    groupId: 'ley-gravitacion-universal',
    title: 'Calcular Masa (m₁)',
    formula: 'm₁ = (F * r²) / (G * m₂)',
    variables: [
        { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
        { symbol: 'r', label: 'Distancia (r)', unit: 'm' },
        { symbol: 'm2', label: 'Otra Masa (m₂)', unit: 'kg' },
    ],
    output: { symbol: 'm1', label: 'Masa buscada (m₁)', unit: 'kg' },
    resolve: ({ F, r, m2 }) => {
        const denominator = G * parseFloat(m2);
        if (denominator === 0) return { error: "El producto G*m₂ no puede ser cero." };
        const m1 = (parseFloat(F) * Math.pow(parseFloat(r), 2)) / denominator;
        return { result: { m1: formatNumber(m1) }, steps: [`m₁ = (${F} * ${r}²) / (${G_STR} * ${m2}) = ${formatNumber(m1)} kg`] };
    }
  },
  {
    id: 'gravitacion-distancia',
    groupId: 'ley-gravitacion-universal',
    title: 'Calcular Distancia (r)',
    formula: 'r = √((G * m₁ * m₂) / F)',
    variables: [
        { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
        { symbol: 'm1', label: 'Masa 1 (m₁)', unit: 'kg' },
        { symbol: 'm2', label: 'Masa 2 (m₂)', unit: 'kg' },
    ],
    output: { symbol: 'r', label: 'Distancia (r)', unit: 'm' },
    resolve: ({ F, m1, m2 }) => {
        const F_val = parseFloat(F);
        if (F_val === 0) return { error: "La fuerza no puede ser cero." };
        const r = Math.sqrt((G * parseFloat(m1) * parseFloat(m2)) / F_val);
        return { result: { r: formatNumber(r) }, steps: [`r = √(( ${G_STR} * ${m1} * ${m2}) / ${F}) = ${formatNumber(r)} m`] };
    }
  },

  // === GRUPO 2: Aceleración Gravitatoria ===
  {
    id: 'aceleracion-g',
    groupId: 'aceleracion-gravitatoria',
    title: 'Calcular Aceleración (g)',
    formula: 'g = G * M / r²',
    variables: [
      { symbol: 'M', label: 'Masa del cuerpo central (M)', unit: 'kg' },
      { symbol: 'r', label: 'Radio del cuerpo (r)', unit: 'm' },
    ],
    output: { symbol: 'g', label: 'Aceleración (g)', unit: 'm/s²' },
    resolve: ({ M, r }) => {
      const r_val = parseFloat(r);
      if (r_val === 0) return { error: "El radio no puede ser cero." };
      const g = (G * parseFloat(M)) / Math.pow(r_val, 2);
      return { result: { g: formatNumber(g) }, steps: [`g = (${G_STR} * ${M}) / ${r}² = ${formatNumber(g)} m/s²`] };
    }
  },
  {
    id: 'aceleracion-masa',
    groupId: 'aceleracion-gravitatoria',
    title: 'Calcular Masa (M) desde g',
    formula: 'M = g * r² / G',
    variables: [
      { symbol: 'g', label: 'Aceleración (g)', unit: 'm/s²' },
      { symbol: 'r', label: 'Radio del cuerpo (r)', unit: 'm' },
    ],
    output: { symbol: 'M', label: 'Masa Central (M)', unit: 'kg' },
    resolve: ({ g, r }) => {
      const M = (parseFloat(g) * Math.pow(parseFloat(r), 2)) / G;
      return { result: { M: formatNumber(M) }, steps: [`M = (${g} * ${r}²) / ${G_STR} = ${formatNumber(M)} kg`] };
    }
  },
  {
    id: 'aceleracion-radio',
    groupId: 'aceleracion-gravitatoria',
    title: 'Calcular Radio (r) desde g',
    formula: 'r = √(G * M / g)',
    variables: [
      { symbol: 'M', label: 'Masa Central (M)', unit: 'kg' },
      { symbol: 'g', label: 'Aceleración (g)', unit: 'm/s²' },
    ],
    output: { symbol: 'r', label: 'Radio (r)', unit: 'm' },
    resolve: ({ M, g }) => {
      const g_val = parseFloat(g);
      if (g_val === 0) return { error: "La aceleración g no puede ser cero." };
      const r = Math.sqrt((G * parseFloat(M)) / g_val);
      return { result: { r: formatNumber(r) }, steps: [`r = √(${G_STR} * ${M} / ${g}) = ${formatNumber(r)} m`] };
    }
  },
  
  // === GRUPO 3: Peso Terrestre ===
  {
    id: 'peso-terrestre-peso',
    groupId: 'peso-terrestre',
    title: 'Calcular Peso Terrestre (P)',
    formula: 'P = m ⋅ g',
    variables: [
      { symbol: 'm', label: 'Masa del objeto (m)', unit: 'kg' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G_TERRESTRE }
    ],
    output: { symbol: 'P', label: 'Peso (P)', unit: 'N' },
    resolve: ({ m, g = G_TERRESTRE }) => {
      const P = parseFloat(m) * parseFloat(g);
      return { result: { P: formatNumber(P) }, steps: [`P = ${m} kg ⋅ ${g} m/s² = ${formatNumber(P)} N`] };
    }
  },
  {
    id: 'peso-terrestre-masa',
    groupId: 'peso-terrestre',
    title: 'Calcular Masa (m) desde Peso',
    formula: 'm = P / g',
    variables: [
      { symbol: 'P', label: 'Peso (P)', unit: 'N' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G_TERRESTRE }
    ],
    output: { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
    resolve: ({ P, g = G_TERRESTRE }) => {
        const g_val = parseFloat(g);
        if(g_val === 0) return { error: "La gravedad no puede ser cero." };
        const m = parseFloat(P) / g_val;
        return { result: { m: formatNumber(m) }, steps: [`m = ${P} N / ${g} m/s² = ${formatNumber(m)} kg`] };
    }
  },

  // === GRUPO 4: Energía Potencial Gravitatoria ===
  {
    id: 'energia-potencial-u',
    groupId: 'energia-potencial-gravitatoria',
    title: 'Calcular Energía Potencial (U)',
    formula: 'U = -G * (m₁ * m₂) / r',
    variables: [
      { symbol: 'm1', label: 'Masa 1 (m₁)', unit: 'kg' },
      { symbol: 'm2', label: 'Masa 2 (m₂)', unit: 'kg' },
      { symbol: 'r', label: 'Distancia (r)', unit: 'm' },
    ],
    output: { symbol: 'U', label: 'Energía Potencial (U)', unit: 'J' },
    resolve: ({ m1, m2, r }) => {
      const r_val = parseFloat(r);
      if (r_val === 0) return { error: "La distancia no puede ser cero." };
      const U = (-G * parseFloat(m1) * parseFloat(m2)) / r_val;
      return { result: { U: formatNumber(U) }, steps: [`U = -${G_STR} * (${m1} * ${m2}) / ${r} = ${formatNumber(U)} J`] };
    }
  },
  {
    id: 'energia-potencial-masa',
    groupId: 'energia-potencial-gravitatoria',
    title: 'Calcular Masa (m₁) desde U',
    formula: 'm₁ = -U * r / (G * m₂)',
    variables: [
      { symbol: 'U', label: 'Energía Potencial (U)', unit: 'J' },
      { symbol: 'r', label: 'Distancia (r)', unit: 'm' },
      { symbol: 'm2', label: 'Otra Masa (m₂)', unit: 'kg' },
    ],
    output: { symbol: 'm1', label: 'Masa buscada (m₁)', unit: 'kg' },
    resolve: ({ U, r, m2 }) => {
      const denominator = G * parseFloat(m2);
      if (denominator === 0) return { error: "El producto G*m₂ no puede ser cero." };
      const m1 = -parseFloat(U) * parseFloat(r) / denominator;
      return { result: { m1: formatNumber(m1) }, steps: [`m₁ = -(${U} * ${r}) / (${G_STR} * ${m2}) = ${formatNumber(m1)} kg`] };
    }
  },
  {
    id: 'energia-potencial-distancia',
    groupId: 'energia-potencial-gravitatoria',
    title: 'Calcular Distancia (r) desde U',
    formula: 'r = -G * (m₁ * m₂) / U',
    variables: [
        { symbol: 'm1', label: 'Masa 1 (m₁)', unit: 'kg' },
        { symbol: 'm2', label: 'Masa 2 (m₂)', unit: 'kg' },
        { symbol: 'U', label: 'Energía Potencial (U)', unit: 'J' },
    ],
    output: { symbol: 'r', label: 'Distancia (r)', unit: 'm' },
    resolve: ({ m1, m2, U }) => {
        const U_val = parseFloat(U);
        if (U_val === 0) return { error: "La energía no puede ser cero." };
        const r = -G * parseFloat(m1) * parseFloat(m2) / U_val;
        return { result: { r: formatNumber(r) }, steps: [`r = -${G_STR} * (${m1} * ${m2}) / ${U} = ${formatNumber(r)} m`] };
    }
  },

  // === GRUPO 5: Velocidades Cósmicas ===
  {
    id: 'velocidad-orbital-v',
    groupId: 'velocidades-orbitales',
    title: 'Calcular Velocidad Orbital (v_orb)',
    formula: 'v_orb = √(G * M / r)',
    variables: [
      { symbol: 'M', label: 'Masa del cuerpo central (M)', unit: 'kg' },
      { symbol: 'r', label: 'Radio de la órbita (r)', unit: 'm' },
    ],
    output: { symbol: 'v_orb', label: 'Velocidad Orbital', unit: 'm/s' },
    resolve: ({ M, r }) => {
      const r_val = parseFloat(r);
      if (r_val <= 0) return { error: "El radio debe ser positivo." };
      const v = Math.sqrt((G * parseFloat(M)) / r_val);
      return { result: { v_orb: formatNumber(v) }, steps: [`v_orb = √(${G_STR} * ${M} / ${r}) = ${formatNumber(v)} m/s`] };
    }
  },
  {
    id: 'velocidad-orbital-masa',
    groupId: 'velocidades-orbitales',
    title: 'Calcular Masa (M) desde v_orb',
    formula: 'M = (v_orb² * r) / G',
    variables: [
        { symbol: 'v_orb', label: 'Velocidad Orbital', unit: 'm/s' },
        { symbol: 'r', label: 'Radio de la órbita (r)', unit: 'm' },
    ],
    output: { symbol: 'M', label: 'Masa Central (M)', unit: 'kg' },
    resolve: ({ v_orb, r }) => {
        const M = (Math.pow(parseFloat(v_orb), 2) * parseFloat(r)) / G;
        return { result: { M: formatNumber(M) }, steps: [`M = (${v_orb}² * ${r}) / ${G_STR} = ${formatNumber(M)} kg`] };
    }
  },
  {
    id: 'velocidad-orbital-radio',
    groupId: 'velocidades-orbitales',
    title: 'Calcular Radio (r) desde v_orb',
    formula: 'r = (G * M) / v_orb²',
    variables: [
        { symbol: 'M', label: 'Masa Central (M)', unit: 'kg' },
        { symbol: 'v_orb', label: 'Velocidad Orbital', unit: 'm/s' },
    ],
    output: { symbol: 'r', label: 'Radio Orbital (r)', unit: 'm' },
    resolve: ({ M, v_orb }) => {
        const v_val = parseFloat(v_orb);
        if (v_val === 0) return { error: "La velocidad no puede ser cero." };
        const r = (G * parseFloat(M)) / Math.pow(v_val, 2);
        return { result: { r: formatNumber(r) }, steps: [`r = (${G_STR} * ${M}) / ${v_orb}² = ${formatNumber(r)} m`] };
    }
  },
  {
    id: 'velocidad-escape-v',
    groupId: 'velocidades-orbitales',
    title: 'Calcular Velocidad de Escape (v_esc)',
    formula: 'v_esc = √(2 * G * M / r)',
    variables: [
      { symbol: 'M', label: 'Masa del cuerpo (M)', unit: 'kg' },
      { symbol: 'r', label: 'Radio del cuerpo (r)', unit: 'm' },
    ],
    output: { symbol: 'v_esc', label: 'Velocidad de Escape', unit: 'm/s' },
    resolve: ({ M, r }) => {
      const r_val = parseFloat(r);
      if (r_val <= 0) return { error: "El radio debe ser positivo." };
      const v_esc = Math.sqrt((2 * G * parseFloat(M)) / r_val);
      return { result: { v_esc: formatNumber(v_esc) }, steps: [`v_esc = √(2 * ${G_STR} * ${M} / ${r}) = ${formatNumber(v_esc)} m/s`] };
    }
  },
  {
    id: 'velocidad-escape-masa',
    groupId: 'velocidades-orbitales',
    title: 'Calcular Masa (M) desde v_esc',
    formula: 'M = (v_esc² * r) / (2 * G)',
    variables: [
      { symbol: 'v_esc', label: 'Velocidad de Escape', unit: 'm/s' },
      { symbol: 'r', label: 'Radio del cuerpo (r)', unit: 'm' },
    ],
    output: { symbol: 'M', label: 'Masa Central (M)', unit: 'kg' },
    resolve: ({ v_esc, r }) => {
      const M = (Math.pow(parseFloat(v_esc), 2) * parseFloat(r)) / (2 * G);
      return { result: { M: formatNumber(M) }, steps: [`M = (${v_esc}² * ${r}) / (2 * ${G_STR}) = ${formatNumber(M)} kg`] };
    }
  },
  {
    id: 'velocidad-escape-radio',
    groupId: 'velocidades-orbitales',
    title: 'Calcular Radio (r) desde v_esc',
    formula: 'r = (2 * G * M) / v_esc²',
    variables: [
      { symbol: 'M', label: 'Masa Central (M)', unit: 'kg' },
      { symbol: 'v_esc', label: 'Velocidad de Escape', unit: 'm/s' },
    ],
    output: { symbol: 'r', label: 'Radio (r)', unit: 'm' },
    resolve: ({ M, v_esc }) => {
      const v_esc_val = parseFloat(v_esc);
      if (v_esc_val === 0) return { error: "La velocidad de escape no puede ser cero." };
      const r = (2 * G * parseFloat(M)) / Math.pow(v_esc_val, 2);
      return { result: { r: formatNumber(r) }, steps: [`r = (2 * ${G_STR} * ${M}) / ${v_esc}² = ${formatNumber(r)} m`] };
    }
  },
  
  // === GRUPO 6: 3ª Ley de Kepler ===
  {
    id: 'kepler-periodo',
    groupId: 'tercera-ley-kepler',
    title: 'Calcular Período Orbital (T)',
    formula: 'T² = (4π² * r³) / (G * M)',
    variables: [
      { symbol: 'M', label: 'Masa del cuerpo central (M)', unit: 'kg' },
      { symbol: 'r', label: 'Radio de la órbita (r)', unit: 'm' },
    ],
    output: { symbol: 'T', label: 'Período Orbital (T)', unit: 's' },
    resolve: ({ M, r }) => {
      const GM = G * parseFloat(M);
      if (GM === 0) return { error: "El producto G*M no puede ser cero." };
      const T = Math.sqrt((4 * PI * PI * Math.pow(parseFloat(r), 3)) / GM);
      return { result: { T: formatNumber(T) }, steps: [`T = √( (4π² * ${r}³) / (${G_STR} * ${M}) ) = ${formatNumber(T)} s`] };
    }
  },
  {
    id: 'kepler-radio',
    groupId: 'tercera-ley-kepler',
    title: 'Calcular Radio Orbital (r)',
    formula: 'r = ∛((G * M * T²) / (4π²))',
    variables: [
      { symbol: 'M', label: 'Masa del cuerpo central (M)', unit: 'kg' },
      { symbol: 'T', label: 'Período Orbital (T)', unit: 's' },
    ],
    output: { symbol: 'r', label: 'Radio de la órbita (r)', unit: 'm' },
    resolve: ({ M, T }) => {
      const numerator = G * parseFloat(M) * Math.pow(parseFloat(T), 2);
      const denominator = 4 * PI * PI;
      const r = Math.cbrt(numerator / denominator);
      return { result: { r: formatNumber(r) }, steps: [`r = ∛( (${G_STR} * ${M} * ${T}²) / (4π²) ) = ${formatNumber(r)} m`] };
    }
  },
  {
    id: 'kepler-masa',
    groupId: 'tercera-ley-kepler',
    title: 'Calcular Masa Central (M)',
    formula: 'M = (4π² * r³) / (G * T²)',
    variables: [
        { symbol: 'r', label: 'Radio de la órbita (r)', unit: 'm' },
        { symbol: 'T', label: 'Período Orbital (T)', unit: 's' },
    ],
    output: { symbol: 'M', label: 'Masa Central (M)', unit: 'kg' },
    resolve: ({ r, T }) => {
        const T_val = parseFloat(T);
        if (T_val === 0) return { error: "El período no puede ser cero." };
        const numerator = 4 * PI * PI * Math.pow(parseFloat(r), 3);
        const denominator = G * Math.pow(T_val, 2);
        const M = numerator / denominator;
        return { result: { M: formatNumber(M) }, steps: [`M = (4π² * ${r}³) / (${G_STR} * ${T}²) = ${formatNumber(M)} kg`] };
    }
  }
];
