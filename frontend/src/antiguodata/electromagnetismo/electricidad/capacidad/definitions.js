import { formatNumber } from '../../../../utils/formatNumber';

const epsilon0 = 8.854e-12; // Permitividad del vacío en F/m

export const definitions = [
  // --- Grupo 1: Definición de Capacidad ---
  {
    id: 'capacidad-calc-c',
    groupId: 'capacidad_definicion',
    title: 'Calcular Capacidad (C)',
    formula: 'C = Q / V',
    variables: [
      { symbol: 'Q', label: 'Carga', unit: 'C' },
      { symbol: 'V', label: 'Voltaje', unit: 'V' }
    ],
    output: { symbol: 'C', label: 'Capacidad', unit: 'F' },
    resolve: ({ Q, V }) => {
      const C = parseFloat(Q) / parseFloat(V);
      return { result: { C: formatNumber(C) }, steps: [`C = ${Q} / ${V} = ${formatNumber(C)} F`] };
    }
  },
  {
    id: 'capacidad-calc-q',
    groupId: 'capacidad_definicion',
    title: 'Calcular Carga (Q)',
    formula: 'Q = C * V',
    variables: [
      { symbol: 'C', label: 'Capacidad', unit: 'F' },
      { symbol: 'V', label: 'Voltaje', unit: 'V' }
    ],
    output: { symbol: 'Q', label: 'Carga', unit: 'C' },
    resolve: ({ C, V }) => {
      const Q = parseFloat(C) * parseFloat(V);
      return { result: { Q: formatNumber(Q) }, steps: [`Q = ${C} * ${V} = ${formatNumber(Q)} C`] };
    }
  },
  {
    id: 'capacidad-calc-v',
    groupId: 'capacidad_definicion',
    title: 'Calcular Voltaje (V)',
    formula: 'V = Q / C',
    variables: [
      { symbol: 'Q', label: 'Carga', unit: 'C' },
      { symbol: 'C', label: 'Capacidad', unit: 'F' }
    ],
    output: { symbol: 'V', label: 'Voltaje', unit: 'V' },
    resolve: ({ Q, C }) => {
      const V = parseFloat(Q) / parseFloat(C);
      return { result: { V: formatNumber(V) }, steps: [`V = ${Q} / ${C} = ${formatNumber(V)} V`] };
    }
  },

  // --- Grupo 2: Capacitor de Placas Paralelas ---
  {
    id: 'placas-paralelas-c',
    groupId: 'capacidad_placas_paralelas',
    title: 'Calcular Capacidad (C)',
    formula: 'C = κ * ε₀ * A / d',
    variables: [
      { symbol: 'κ', label: 'Constante Dieléctrica', unit: '' },
      { symbol: 'A', label: 'Área de Placas', unit: 'm²' },
      { symbol: 'd', label: 'Distancia entre Placas', unit: 'm' }
    ],
    output: { symbol: 'C', label: 'Capacidad', unit: 'F' },
    resolve: ({ 'κ': kappa, A, d }) => {
      const C = parseFloat(kappa) * epsilon0 * parseFloat(A) / parseFloat(d);
      return { result: { C: formatNumber(C) }, steps: [`C = (${kappa} * ${formatNumber(epsilon0)} * ${A}) / ${d} = ${formatNumber(C)} F`] };
    }
  },

  // --- Grupo 3: Capacidad con Dieléctrico ---
  {
    id: 'dielectrico-c',
    groupId: 'capacidad_dielectrico',
    title: 'Calcular Nueva Capacidad (C)',
    formula: 'C = κ * C₀',
    variables: [
      { symbol: 'κ', label: 'Constante Dieléctrica', unit: '' },
      { symbol: 'C₀', label: 'Capacidad Original', unit: 'F' }
    ],
    output: { symbol: 'C', label: 'Nueva Capacidad', unit: 'F' },
    resolve: ({ 'κ': kappa, 'C₀': C0 }) => {
      const C = parseFloat(kappa) * parseFloat(C0);
      return { result: { C: formatNumber(C) }, steps: [`C = ${kappa} * ${C0} = ${formatNumber(C)} F`] };
    }
  },
  {
    id: 'dielectrico-kappa',
    groupId: 'capacidad_dielectrico',
    title: 'Calcular Constante Dieléctrica (κ)',
    formula: 'κ = C / C₀',
    variables: [
        { symbol: 'C', label: 'Nueva Capacidad', unit: 'F' },
        { symbol: 'C₀', label: 'Capacidad Original', unit: 'F' }
    ],
    output: { symbol: 'κ', label: 'Constante Dieléctrica', unit: '' },
    resolve: ({ C, 'C₀': C0 }) => {
      const kappa = parseFloat(C) / parseFloat(C0);
      return { result: { 'κ': formatNumber(kappa) }, steps: [`κ = ${C} / ${C0} = ${formatNumber(kappa)}`] };
    }
  },

  // --- Grupo 4: Energía Almacenada ---
  {
    id: 'energia-capacitor-u',
    groupId: 'energia_capacitor',
    title: 'Calcular Energía (U)',
    formula: 'U = 0.5 * C * V²',
    variables: [
      { symbol: 'C', label: 'Capacidad', unit: 'F' },
      { symbol: 'V', label: 'Voltaje', unit: 'V' }
    ],
    output: { symbol: 'U', label: 'Energía Almacenada', unit: 'J' },
    resolve: ({ C, V }) => {
      const U = 0.5 * parseFloat(C) * Math.pow(parseFloat(V), 2);
      return { result: { U: formatNumber(U) }, steps: [`U = 0.5 * ${C} * ${V}² = ${formatNumber(U)} J`] };
    }
  },

  // --- Grupo 5: Asociación en Serie ---
  {
    id: 'capacitores-serie-ceq',
    groupId: 'capacitores_serie',
    title: 'Calcular Capacidad Equivalente (Serie)',
    isDynamic: true,
    variable: { symbol: 'C', label: 'Capacidad', unit: 'F' },
    output: { symbol: 'Ceq', label: 'Capacidad Equivalente', unit: 'F' },
    resolve: (inputs) => {
      const inverseSum = inputs.reduce((acc, { C }) => acc + 1 / parseFloat(C), 0);
      const Ceq = 1 / inverseSum;
      const stepCalc = inputs.map(i => `1/${i.C}`).join(' + ');
      const steps = [`1/Ceq = ${stepCalc} = ${formatNumber(inverseSum)}`, `Ceq = 1 / ${formatNumber(inverseSum)} = ${formatNumber(Ceq)} F`];
      return { result: { Ceq: formatNumber(Ceq) }, steps };
    }
  },

  // --- Grupo 6: Asociación en Paralelo ---
  {
    id: 'capacitores-paralelo-ceq',
    groupId: 'capacitores_paralelo',
    title: 'Calcular Capacidad Equivalente (Paralelo)',
    isDynamic: true,
    variable: { symbol: 'C', label: 'Capacidad', unit: 'F' },
    output: { symbol: 'Ceq', label: 'Capacidad Equivalente', unit: 'F' },
    resolve: (inputs) => {
      const Ceq = inputs.reduce((acc, { C }) => acc + parseFloat(C), 0);
      const stepCalc = inputs.map(i => i.C).join(' + ');
      const steps = [`Ceq = ${stepCalc} = ${formatNumber(Ceq)} F`];
      return { result: { Ceq: formatNumber(Ceq) }, steps };
    }
  }
];