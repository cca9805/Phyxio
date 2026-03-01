import { formatNumber } from '../../../../utils/formatNumber.js';

const g = 9.81; // Gravedad (m/s²)
const rho_agua = 1000; // Densidad del agua (kg/m³)
const P_atm = 101325; // Presión atmosférica (Pa)

export const definitions = [
  // Grupo 1: Presión hidrostática
  {
    id: 'presion-hidrostatica',
    groupId: 'presion-hidrostatica',
    title: 'Presión Hidrostática',
    isFundamental: true,
    formula: String.raw`P = \rho g h`,
    variables: [
      { symbol: 'rho', label: 'Densidad (ρ) (kg/m³)', unit: 'kg/m³', defaultValue: rho_agua },
      { symbol: 'h', label: 'Profundidad (h) (m)', unit: 'm' }
    ],
    output: { symbol: 'P', label: 'Presión (P) (Pa)', unit: 'Pa' },
    resolve: ({ rho, h }) => {
      const numRho = parseFloat(rho);
      const numH = parseFloat(h);
      const P = numRho * g * numH;
      const kPa = P / 1000;
      return {
        result: { P: formatNumber(P) },
        steps: [
          `P = ρ × g × h`,
          `P = ${numRho} kg/m³ × ${g} m/s² × ${numH} m`,
          `P = ${formatNumber(P)} Pa = ${formatNumber(kPa)} kPa`
        ]
      };
    }
  },

  // Grupo 2: Profundidad desde presión
  {
    id: 'profundidad-desde-presion',
    groupId: 'presion-hidrostatica',
    title: 'Profundidad desde Presión',
    isFundamental: false,
    formula: String.raw`h = \frac{P}{\rho g}`,
    variables: [
      { symbol: 'P', label: 'Presión (P) (Pa)', unit: 'Pa' },
      { symbol: 'rho', label: 'Densidad (ρ) (kg/m³)', unit: 'kg/m³', defaultValue: rho_agua }
    ],
    output: { symbol: 'h', label: 'Profundidad (h) (m)', unit: 'm' },
    resolve: ({ P, rho }) => {
      const numP = parseFloat(P);
      const numRho = parseFloat(rho);
      const h = numP / (numRho * g);
      return {
        result: { h: formatNumber(h) },
        steps: [
          `h = P / (ρ × g)`,
          `h = ${numP} Pa / (${numRho} kg/m³ × ${g} m/s²)`,
          `h = ${formatNumber(h)} m`
        ]
      };
    }
  },

  // Grupo 2b: Densidad desde presión
  {
    id: 'densidad-desde-presion',
    groupId: 'presion-hidrostatica',
    title: 'Densidad desde Presión',
    isFundamental: false,
    formula: String.raw`\rho = \frac{P}{g h}`,
    variables: [
      { symbol: 'P', label: 'Presión (P) (Pa)', unit: 'Pa' },
      { symbol: 'h', label: 'Profundidad (h) (m)', unit: 'm' }
    ],
    output: { symbol: 'rho', label: 'Densidad (ρ) (kg/m³)', unit: 'kg/m³' },
    resolve: ({ P, h }) => {
      const numP = parseFloat(P);
      const numH = parseFloat(h);
      if (numH === 0) return { error: 'La profundidad no puede ser cero.' };
      const rho = numP / (g * numH);
      return {
        result: { rho: formatNumber(rho) },
        steps: [
          `ρ = P / (g × h)`,
          `ρ = ${numP} Pa / (${g} m/s² × ${numH} m)`,
          `ρ = ${formatNumber(rho)} kg/m³`
        ]
      };
    }
  },

  // Grupo 3: Presión absoluta
  {
    id: 'presion-absoluta',
    groupId: 'presion-absoluta',
    title: 'Presión Absoluta',
    isFundamental: true,
    formula: String.raw`P_{abs} = P_{atm} + \rho g h`,
    variables: [
      { symbol: 'rho', label: 'Densidad (ρ) (kg/m³)', unit: 'kg/m³', defaultValue: rho_agua },
      { symbol: 'h', label: 'Profundidad (h) (m)', unit: 'm' },
      { symbol: 'P_atm', label: 'Presión atmosférica (Pa)', unit: 'Pa', defaultValue: P_atm }
    ],
    output: { symbol: 'P_abs', label: 'Presión absoluta (Pa)', unit: 'Pa' },
    resolve: ({ rho, h, P_atm }) => {
      const numRho = parseFloat(rho);
      const numH = parseFloat(h);
      const numPatm = parseFloat(P_atm);
      const P_hidro = numRho * g * numH;
      const P_abs = numPatm + P_hidro;
      const atm = P_abs / 101325;
      return {
        result: { P_abs: formatNumber(P_abs) },
        steps: [
          `P_hidrostática = ρ × g × h = ${formatNumber(P_hidro)} Pa`,
          `P_absoluta = P_atm + P_hidrostática`,
          `P_absoluta = ${numPatm} Pa + ${formatNumber(P_hidro)} Pa`,
          `P_absoluta = ${formatNumber(P_abs)} Pa = ${formatNumber(atm)} atm`
        ]
      };
    }
  },

  // Grupo 4: Presión manométrica
  {
    id: 'presion-manometrica',
    groupId: 'presion-manometrica',
    title: 'Presión Manométrica',
    isFundamental: true,
    formula: String.raw`P_{man} = P_{abs} - P_{atm}`,
    variables: [
      { symbol: 'P_abs', label: 'Presión absoluta (Pa)', unit: 'Pa' },
      { symbol: 'P_atm', label: 'Presión atmosférica (Pa)', unit: 'Pa', defaultValue: P_atm }
    ],
    output: { symbol: 'P_man', label: 'Presión manométrica (Pa)', unit: 'Pa' },
    resolve: ({ P_abs, P_atm }) => {
      const numPabs = parseFloat(P_abs);
      const numPatm = parseFloat(P_atm);
      const P_man = numPabs - numPatm;
      const kPa = P_man / 1000;
      return {
        result: { P_man: formatNumber(P_man) },
        steps: [
          `P_manométrica = P_absoluta - P_atmosférica`,
          `P_manométrica = ${numPabs} Pa - ${numPatm} Pa`,
          `P_manométrica = ${formatNumber(P_man)} Pa = ${formatNumber(kPa)} kPa`
        ]
      };
    }
  },

  // Grupo 5: Fuerza sobre superficie
  {
    id: 'fuerza-presion',
    groupId: 'fuerza-presion',
    title: 'Fuerza desde Presión',
    isFundamental: true,
    formula: String.raw`F = P \cdot A`,
    variables: [
      { symbol: 'P', label: 'Presión (P) (Pa)', unit: 'Pa' },
      { symbol: 'A', label: 'Área (A) (m²)', unit: 'm²' }
    ],
    output: { symbol: 'F', label: 'Fuerza (F) (N)', unit: 'N' },
    resolve: ({ P, A }) => {
      const numP = parseFloat(P);
      const numA = parseFloat(A);
      const F = numP * numA;
      const kN = F / 1000;
      return {
        result: { F: formatNumber(F) },
        steps: [
          `F = P × A`,
          `F = ${numP} Pa × ${numA} m²`,
          `F = ${formatNumber(F)} N`,
          F > 1000 ? `F = ${formatNumber(kN)} kN` : ''
        ].filter(s => s)
      };
    }
  },

  // Grupo 6: Presión desde fuerza
  {
    id: 'presion-desde-fuerza',
    groupId: 'fuerza-presion',
    title: 'Presión desde Fuerza',
    isFundamental: false,
    formula: String.raw`P = \frac{F}{A}`,
    variables: [
      { symbol: 'F', label: 'Fuerza (F) (N)', unit: 'N' },
      { symbol: 'A', label: 'Área (A) (m²)', unit: 'm²' }
    ],
    output: { symbol: 'P', label: 'Presión (P) (Pa)', unit: 'Pa' },
    resolve: ({ F, A }) => {
      const numF = parseFloat(F);
      const numA = parseFloat(A);
      if (numA === 0) return { error: 'El área no puede ser cero.' };
      const P = numF / numA;
      const kPa = P / 1000;
      return {
        result: { P: formatNumber(P) },
        steps: [
          `P = F / A`,
          `P = ${numF} N / ${numA} m²`,
          `P = ${formatNumber(P)} Pa = ${formatNumber(kPa)} kPa`
        ]
      };
    }
  },

  // Grupo 6b: Área desde fuerza
  {
    id: 'area-desde-fuerza',
    groupId: 'fuerza-presion',
    title: 'Área desde Fuerza',
    isFundamental: false,
    formula: String.raw`A = \frac{F}{P}`,
    variables: [
      { symbol: 'F', label: 'Fuerza (F) (N)', unit: 'N' },
      { symbol: 'P', label: 'Presión (P) (Pa)', unit: 'Pa' }
    ],
    output: { symbol: 'A', label: 'Área (A) (m²)', unit: 'm²' },
    resolve: ({ F, P }) => {
      const numF = parseFloat(F);
      const numP = parseFloat(P);
      if (numP === 0) return { error: 'La presión no puede ser cero.' };
      const A = numF / numP;
      return {
        result: { A: formatNumber(A) },
        steps: [
          `A = F / P`,
          `A = ${numF} N / ${numP} Pa`,
          `A = ${formatNumber(A)} m²`
        ]
      };
    }
  },

  // Grupo 7: Variación de presión con altura
  {
    id: 'variacion-presion-altura',
    groupId: 'variacion-presion',
    title: 'Variación de Presión con Altura',
    isFundamental: true,
    formula: String.raw`\Delta P = \rho g \Delta h`,
    variables: [
      { symbol: 'rho', label: 'Densidad (ρ) (kg/m³)', unit: 'kg/m³', defaultValue: rho_agua },
      { symbol: 'delta_h', label: 'Diferencia de altura Δh (m)', unit: 'm' }
    ],
    output: { symbol: 'delta_P', label: 'Diferencia de presión ΔP (Pa)', unit: 'Pa' },
    resolve: ({ rho, delta_h }) => {
      const numRho = parseFloat(rho);
      const numDeltaH = parseFloat(delta_h);
      const delta_P = numRho * g * numDeltaH;
      const kPa = delta_P / 1000;
      return {
        result: { delta_P: formatNumber(delta_P) },
        steps: [
          `ΔP = ρ × g × Δh`,
          `ΔP = ${numRho} kg/m³ × ${g} m/s² × ${numDeltaH} m`,
          `ΔP = ${formatNumber(delta_P)} Pa = ${formatNumber(kPa)} kPa`
        ]
      };
    }
  },

  // Grupo 8: Columna de líquido equivalente
  {
    id: 'columna-liquido-equivalente',
    groupId: 'columna-equivalente',
    title: 'Altura de Columna Equivalente',
    isFundamental: true,
    formula: String.raw`h = \frac{P}{\rho g}`,
    variables: [
      { symbol: 'P', label: 'Presión (P) (Pa)', unit: 'Pa' },
      { symbol: 'rho', label: 'Densidad del líquido (ρ) (kg/m³)', unit: 'kg/m³' }
    ],
    output: { symbol: 'h', label: 'Altura de columna (h) (m)', unit: 'm' },
    resolve: ({ P, rho }) => {
      const numP = parseFloat(P);
      const numRho = parseFloat(rho);
      const h = numP / (numRho * g);
      const mm = h * 1000;
      return {
        result: { h: formatNumber(h) },
        steps: [
          `h = P / (ρ × g)`,
          `h = ${numP} Pa / (${numRho} kg/m³ × ${g} m/s²)`,
          `h = ${formatNumber(h)} m = ${formatNumber(mm)} mm`
        ]
      };
    }
  }
];
