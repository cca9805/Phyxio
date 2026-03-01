
import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Fuerza de Lorentz (Carga) ---
  {
    id: 'fuerza-lorentz-carga-f',
    groupId: 'fuerza_lorentz_carga',
    title: 'Calcular Fuerza (F)',
    formula: 'F = |q| * v * B * sin(θ)',
    variables: [
      { symbol: 'q', label: 'Carga', unit: 'C' },
      { symbol: 'v', label: 'Velocidad', unit: 'm/s' },
      { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
      { symbol: 'θ', label: 'Ángulo', unit: '°' }
    ],
    output: { symbol: 'F', label: 'Fuerza', unit: 'N' },
    resolve: ({ q, v, B, 'θ': theta }) => {
      const F = Math.abs(parseFloat(q)) * parseFloat(v) * parseFloat(B) * Math.sin(parseFloat(theta) * Math.PI / 180);
      return { result: { F: formatNumber(F) }, steps: [`F = |${q}| * ${v} * ${B} * sin(${theta}°) = ${formatNumber(F)} N`] };
    }
  },
  {
    id: 'fuerza-lorentz-carga-q',
    groupId: 'fuerza_lorentz_carga',
    title: 'Calcular Carga (|q|)',
    formula: '|q| = F / (v * B * sin(θ))',
    variables: [
      { symbol: 'F', label: 'Fuerza', unit: 'N' },
      { symbol: 'v', label: 'Velocidad', unit: 'm/s' },
      { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
      { symbol: 'θ', label: 'Ángulo', unit: '°' }
    ],
    output: { symbol: 'q', label: 'Carga', unit: 'C' },
    resolve: ({ F, v, B, 'θ': theta }) => {
      const q = parseFloat(F) / (parseFloat(v) * parseFloat(B) * Math.sin(parseFloat(theta) * Math.PI / 180));
      return { result: { q: formatNumber(q) }, steps: [`|q| = ${F} / (${v} * ${B} * sin(${theta}°)) = ${formatNumber(q)} C`] };
    }
  },
  {
    id: 'fuerza-lorentz-carga-v',
    groupId: 'fuerza_lorentz_carga',
    title: 'Calcular Velocidad (v)',
    formula: 'v = F / (|q| * B * sin(θ))',
    variables: [
        { symbol: 'F', label: 'Fuerza', unit: 'N' },
        { symbol: 'q', label: 'Carga', unit: 'C' },
        { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
        { symbol: 'θ', label: 'Ángulo', unit: '°' }
    ],
    output: { symbol: 'v', label: 'Velocidad', unit: 'm/s' },
    resolve: ({ F, q, B, 'θ': theta }) => {
        const v = parseFloat(F) / (Math.abs(parseFloat(q)) * parseFloat(B) * Math.sin(parseFloat(theta) * Math.PI / 180));
        return { result: { v: formatNumber(v) }, steps: [`v = ${F} / (|${q}| * ${B} * sin(${theta}°)) = ${formatNumber(v)} m/s`] };
    }
  },
  {
    id: 'fuerza-lorentz-carga-b',
    groupId: 'fuerza_lorentz_carga',
    title: 'Calcular Campo (B)',
    formula: 'B = F / (|q| * v * sin(θ))',
    variables: [
      { symbol: 'F', label: 'Fuerza', unit: 'N' },
      { symbol: 'q', label: 'Carga', unit: 'C' },
      { symbol: 'v', label: 'Velocidad', unit: 'm/s' },
      { symbol: 'θ', label: 'Ángulo', unit: '°' }
    ],
    output: { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
    resolve: ({ F, q, v, 'θ': theta }) => {
      const B = parseFloat(F) / (Math.abs(parseFloat(q)) * parseFloat(v) * Math.sin(parseFloat(theta) * Math.PI / 180));
      return { result: { B: formatNumber(B) }, steps: [`B = ${F} / (|${q}| * ${v} * sin(${theta}°)) = ${formatNumber(B)} T`] };
    }
  },

  // --- Grupo 2: Fuerza sobre Conductor ---
  {
    id: 'fuerza-conductor-f',
    groupId: 'fuerza_lorentz_conductor',
    title: 'Calcular Fuerza (F)',
    formula: 'F = I * L * B * sin(θ)',
    variables: [
      { symbol: 'I', label: 'Corriente', unit: 'A' },
      { symbol: 'L', label: 'Longitud', unit: 'm' },
      { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
      { symbol: 'θ', label: 'Ángulo', unit: '°' }
    ],
    output: { symbol: 'F', label: 'Fuerza', unit: 'N' },
    resolve: ({ I, L, B, 'θ': theta }) => {
      const F = parseFloat(I) * parseFloat(L) * parseFloat(B) * Math.sin(parseFloat(theta) * Math.PI / 180);
      return { result: { F: formatNumber(F) }, steps: [`F = ${I} * ${L} * ${B} * sin(${theta}°) = ${formatNumber(F)} N`] };
    }
  },
  {
    id: 'fuerza-conductor-i',
    groupId: 'fuerza_lorentz_conductor',
    title: 'Calcular Corriente (I)',
    formula: 'I = F / (L * B * sin(θ))',
    variables: [
      { symbol: 'F', label: 'Fuerza', unit: 'N' },
      { symbol: 'L', label: 'Longitud', unit: 'm' },
      { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
      { symbol: 'θ', label: 'Ángulo', unit: '°' }
    ],
    output: { symbol: 'I', label: 'Corriente', unit: 'A' },
    resolve: ({ F, L, B, 'θ': theta }) => {
      const I = parseFloat(F) / (parseFloat(L) * parseFloat(B) * Math.sin(parseFloat(theta) * Math.PI / 180));
      return { result: { I: formatNumber(I) }, steps: [`I = ${F} / (${L} * ${B} * sin(${theta}°)) = ${formatNumber(I)} A`] };
    }
  },
  {
    id: 'fuerza-conductor-l',
    groupId: 'fuerza_lorentz_conductor',
    title: 'Calcular Longitud (L)',
    formula: 'L = F / (I * B * sin(θ))',
    variables: [
      { symbol: 'F', label: 'Fuerza', unit: 'N' },
      { symbol: 'I', label: 'Corriente', unit: 'A' },
      { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
      { symbol: 'θ', label: 'Ángulo', unit: '°' }
    ],
    output: { symbol: 'L', label: 'Longitud', unit: 'm' },
    resolve: ({ F, I, B, 'θ': theta }) => {
      const L = parseFloat(F) / (parseFloat(I) * parseFloat(B) * Math.sin(parseFloat(theta) * Math.PI / 180));
      return { result: { L: formatNumber(L) }, steps: [`L = ${F} / (${I} * ${B} * sin(${theta}°)) = ${formatNumber(L)} m`] };
    }
  },
  {
    id: 'fuerza-conductor-b',
    groupId: 'fuerza_lorentz_conductor',
    title: 'Calcular Campo (B)',
    formula: 'B = F / (I * L * sin(θ))',
    variables: [
      { symbol: 'F', label: 'Fuerza', unit: 'N' },
      { symbol: 'I', label: 'Corriente', unit: 'A' },
      { symbol: 'L', label: 'Longitud', unit: 'm' },
      { symbol: 'θ', label: 'Ángulo', unit: '°' }
    ],
    output: { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
    resolve: ({ F, I, L, 'θ': theta }) => {
      const B = parseFloat(F) / (parseFloat(I) * parseFloat(L) * Math.sin(parseFloat(theta) * Math.PI / 180));
      return { result: { B: formatNumber(B) }, steps: [`B = ${F} / (${I} * ${L} * sin(${theta}°)) = ${formatNumber(B)} T`] };
    }
  },

  // --- Grupo 3: Movimiento Circular ---
  {
    id: 'movimiento-circular-r',
    groupId: 'movimiento_circular_magnetico',
    title: 'Calcular Radio (r)',
    formula: 'r = (m * v) / (|q| * B)',
    variables: [
      { symbol: 'm', label: 'Masa', unit: 'kg' },
      { symbol: 'v', label: 'Velocidad', unit: 'm/s' },
      { symbol: 'q', label: 'Carga', unit: 'C' },
      { symbol: 'B', label: 'Campo Magnético', unit: 'T' }
    ],
    output: { symbol: 'r', label: 'Radio', unit: 'm' },
    resolve: ({ m, v, q, B }) => {
      const r = (parseFloat(m) * parseFloat(v)) / (Math.abs(parseFloat(q)) * parseFloat(B));
      return { result: { r: formatNumber(r) }, steps: [`r = (${m} * ${v}) / (|${q}| * ${B}) = ${formatNumber(r)} m`] };
    }
  },
  {
    id: 'movimiento-circular-m',
    groupId: 'movimiento_circular_magnetico',
    title: 'Calcular Masa (m)',
    formula: 'm = (r * |q| * B) / v',
    variables: [
      { symbol: 'r', label: 'Radio', unit: 'm' },
      { symbol: 'q', label: 'Carga', unit: 'C' },
      { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
      { symbol: 'v', label: 'Velocidad', unit: 'm/s' }
    ],
    output: { symbol: 'm', label: 'Masa', unit: 'kg' },
    resolve: ({ r, q, B, v }) => {
      const m = (parseFloat(r) * Math.abs(parseFloat(q)) * parseFloat(B)) / parseFloat(v);
      return { result: { m: formatNumber(m) }, steps: [`m = (${r} * |${q}| * ${B}) / ${v} = ${formatNumber(m)} kg`] };
    }
  },
  {
    id: 'movimiento-circular-v',
    groupId: 'movimiento_circular_magnetico',
    title: 'Calcular Velocidad (v)',
    formula: 'v = (r * |q| * B) / m',
    variables: [
        { symbol: 'r', label: 'Radio', unit: 'm' },
        { symbol: 'q', label: 'Carga', unit: 'C' },
        { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
        { symbol: 'm', label: 'Masa', unit: 'kg' }
    ],
    output: { symbol: 'v', label: 'Velocidad', unit: 'm/s' },
    resolve: ({ r, q, B, m }) => {
        const v = (parseFloat(r) * Math.abs(parseFloat(q)) * parseFloat(B)) / parseFloat(m);
        return { result: { v: formatNumber(v) }, steps: [`v = (${r} * |${q}| * ${B}) / ${m} = ${formatNumber(v)} m/s`] };
    }
  },
  {
    id: 'movimiento-circular-q',
    groupId: 'movimiento_circular_magnetico',
    title: 'Calcular Carga (|q|)',
    formula: '|q| = (m * v) / (r * B)',
    variables: [
        { symbol: 'm', label: 'Masa', unit: 'kg' },
        { symbol: 'v', label: 'Velocidad', unit: 'm/s' },
        { symbol: 'r', label: 'Radio', unit: 'm' },
        { symbol: 'B', label: 'Campo Magnético', unit: 'T' }
    ],
    output: { symbol: 'q', label: 'Carga', unit: 'C' },
    resolve: ({ m, v, r, B }) => {
        const q = (parseFloat(m) * parseFloat(v)) / (parseFloat(r) * parseFloat(B));
        return { result: { q: formatNumber(q) }, steps: [`|q| = (${m} * ${v}) / (${r} * ${B}) = ${formatNumber(q)} C`] };
    }
  },
  {
    id: 'movimiento-circular-b',
    groupId: 'movimiento_circular_magnetico',
    title: 'Calcular Campo (B)',
    formula: 'B = (m * v) / (r * |q|)',
    variables: [
        { symbol: 'm', label: 'Masa', unit: 'kg' },
        { symbol: 'v', label: 'Velocidad', unit: 'm/s' },
        { symbol: 'r', label: 'Radio', unit: 'm' },
        { symbol: 'q', label: 'Carga', unit: 'C' }
    ],
    output: { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
    resolve: ({ m, v, r, q }) => {
        const B = (parseFloat(m) * parseFloat(v)) / (parseFloat(r) * Math.abs(parseFloat(q)));
        return { result: { B: formatNumber(B) }, steps: [`B = (${m} * ${v}) / (${r} * |${q}|) = ${formatNumber(B)} T`] };
    }
  },

  // --- Grupo 4: Momento Dipolar ---
  {
    id: 'momento-dipolar-mu',
    groupId: 'momento_dipolar_magnetico',
    title: 'Calcular Momento Dipolar (μ)',
    formula: 'μ = N * I * A',
    variables: [
      { symbol: 'N', label: 'Nº de Vueltas', unit: '' },
      { symbol: 'I', label: 'Corriente', unit: 'A' },
      { symbol: 'A', label: 'Área', unit: 'm²' }
    ],
    output: { symbol: 'μ', label: 'Momento Dipolar', unit: 'A·m²' },
    resolve: ({ N, I, A }) => {
      const mu = parseFloat(N) * parseFloat(I) * parseFloat(A);
      return { result: { 'μ': formatNumber(mu) }, steps: [`μ = ${N} * ${I} * ${A} = ${formatNumber(mu)} A·m²`] };
    }
  },
  {
    id: 'momento-dipolar-n',
    groupId: 'momento_dipolar_magnetico',
    title: 'Calcular Nº de Vueltas (N)',
    formula: 'N = μ / (I * A)',
    variables: [
      { symbol: 'μ', label: 'Momento Dipolar', unit: 'A·m²' },
      { symbol: 'I', label: 'Corriente', unit: 'A' },
      { symbol: 'A', label: 'Área', unit: 'm²' }
    ],
    output: { symbol: 'N', label: 'Nº de Vueltas', unit: '' },
    resolve: ({ 'μ': mu, I, A }) => {
      const N = parseFloat(mu) / (parseFloat(I) * parseFloat(A));
      return { result: { N: formatNumber(N) }, steps: [`N = ${mu} / (${I} * ${A}) = ${formatNumber(N)}`] };
    }
  },
  {
    id: 'momento-dipolar-i',
    groupId: 'momento_dipolar_magnetico',
    title: 'Calcular Corriente (I)',
    formula: 'I = μ / (N * A)',
    variables: [
        { symbol: 'μ', label: 'Momento Dipolar', unit: 'A·m²' },
        { symbol: 'N', label: 'Nº de Vueltas', unit: '' },
        { symbol: 'A', label: 'Área', unit: 'm²' }
    ],
    output: { symbol: 'I', label: 'Corriente', unit: 'A' },
    resolve: ({ 'μ': mu, N, A }) => {
        const I = parseFloat(mu) / (parseFloat(N) * parseFloat(A));
        return { result: { I: formatNumber(I) }, steps: [`I = ${mu} / (${N} * ${A}) = ${formatNumber(I)} A`] };
    }
  },
  {
    id: 'momento-dipolar-a',
    groupId: 'momento_dipolar_magnetico',
    title: 'Calcular Área (A)',
    formula: 'A = μ / (N * I)',
    variables: [
        { symbol: 'μ', label: 'Momento Dipolar', unit: 'A·m²' },
        { symbol: 'N', label: 'Nº de Vueltas', unit: '' },
        { symbol: 'I', label: 'Corriente', unit: 'A' }
    ],
    output: { symbol: 'A', label: 'Área', unit: 'm²' },
    resolve: ({ 'μ': mu, N, I }) => {
        const A = parseFloat(mu) / (parseFloat(N) * parseFloat(I));
        return { result: { A: formatNumber(A) }, steps: [`A = ${mu} / (${N} * ${I}) = ${formatNumber(A)} m²`] };
    }
  },

  // --- Grupo 5: Torque Magnético ---
  {
    id: 'torque-magnetico-tau',
    groupId: 'torque_magnetico',
    title: 'Calcular Torque (τ)',
    formula: 'τ = μ * B * sin(θ)',
    variables: [
        { symbol: 'μ', label: 'Momento Dipolar', unit: 'A·m²' },
        { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
        { symbol: 'θ', label: 'Ángulo', unit: '°' }
    ],
    output: { symbol: 'τ', label: 'Torque', unit: 'N·m' },
    resolve: ({ 'μ': mu, B, 'θ': theta }) => {
        const tau = parseFloat(mu) * parseFloat(B) * Math.sin(parseFloat(theta) * Math.PI / 180);
        return { result: { 'τ': formatNumber(tau) }, steps: [`τ = ${mu} * ${B} * sin(${theta}°) = ${formatNumber(tau)} N·m`] };
    }
  },
  {
    id: 'torque-magnetico-mu',
    groupId: 'torque_magnetico',
    title: 'Calcular Momento Dipolar (μ)',
    formula: 'μ = τ / (B * sin(θ))',
    variables: [
        { symbol: 'τ', label: 'Torque', unit: 'N·m' },
        { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
        { symbol: 'θ', label: 'Ángulo', unit: '°' }
    ],
    output: { symbol: 'μ', label: 'Momento Dipolar', unit: 'A·m²' },
    resolve: ({ 'τ': tau, B, 'θ': theta }) => {
        const mu = parseFloat(tau) / (parseFloat(B) * Math.sin(parseFloat(theta) * Math.PI / 180));
        return { result: { 'μ': formatNumber(mu) }, steps: [`μ = ${tau} / (${B} * sin(${theta}°)) = ${formatNumber(mu)} A·m²`] };
    }
  },
  {
    id: 'torque-magnetico-b',
    groupId: 'torque_magnetico',
    title: 'Calcular Campo (B)',
    formula: 'B = τ / (μ * sin(θ))',
    variables: [
      { symbol: 'τ', label: 'Torque', unit: 'N·m' },
      { symbol: 'μ', label: 'Momento Dipolar', unit: 'A·m²' },
      { symbol: 'θ', label: 'Ángulo', unit: '°' }
    ],
    output: { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
    resolve: ({ 'τ': tau, 'μ': mu, 'θ': theta }) => {
      const B = parseFloat(tau) / (parseFloat(mu) * Math.sin(parseFloat(theta) * Math.PI / 180));
      return { result: { B: formatNumber(B) }, steps: [`B = ${tau} / (${mu} * sin(${theta}°)) = ${formatNumber(B)} T`] };
    }
  },

  // --- Grupo 6: Energía Potencial Magnética ---
  {
    id: 'energia-potencial-u',
    groupId: 'energia_potencial_magnetica',
    title: 'Calcular Energía Potencial (U)',
    formula: 'U = -μ * B * cos(θ)',
    variables: [
      { symbol: 'μ', label: 'Momento Dipolar', unit: 'A·m²' },
      { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
      { symbol: 'θ', label: 'Ángulo', unit: '°' }
    ],
    output: { symbol: 'U', label: 'Energía Potencial', unit: 'J' },
    resolve: ({ 'μ': mu, B, 'θ': theta }) => {
      const U = -parseFloat(mu) * parseFloat(B) * Math.cos(parseFloat(theta) * Math.PI / 180);
      return { result: { U: formatNumber(U) }, steps: [`U = -${mu} * ${B} * cos(${theta}°) = ${formatNumber(U)} J`] };
    }
  },
  {
    id: 'energia-potencial-mu',
    groupId: 'energia_potencial_magnetica',
    title: 'Calcular Momento Dipolar (μ)',
    formula: 'μ = -U / (B * cos(θ))',
    variables: [
      { symbol: 'U', label: 'Energía Potencial', unit: 'J' },
      { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
      { symbol: 'θ', label: 'Ángulo', unit: '°' }
    ],
    output: { symbol: 'μ', label: 'Momento Dipolar', unit: 'A·m²' },
    resolve: ({ U, B, 'θ': theta }) => {
      const mu = -parseFloat(U) / (parseFloat(B) * Math.cos(parseFloat(theta) * Math.PI / 180));
      return { result: { 'μ': formatNumber(mu) }, steps: [`μ = -${U} / (${B} * cos(${theta}°)) = ${formatNumber(mu)} A·m²`] };
    }
  },
  {
    id: 'energia-potencial-b',
    groupId: 'energia_potencial_magnetica',
    title: 'Calcular Campo (B)',
    formula: 'B = -U / (μ * cos(θ))',
    variables: [
        { symbol: 'U', label: 'Energía Potencial', unit: 'J' },
        { symbol: 'μ', label: 'Momento Dipolar', unit: 'A·m²' },
        { symbol: 'θ', label: 'Ángulo', unit: '°' }
    ],
    output: { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
    resolve: ({ U, 'μ': mu, 'θ': theta }) => {
        const B = -parseFloat(U) / (parseFloat(mu) * Math.cos(parseFloat(theta) * Math.PI / 180));
        return { result: { B: formatNumber(B) }, steps: [`B = -${U} / (${mu} * cos(${theta}°)) = ${formatNumber(B)} T`] };
    }
  }
];
