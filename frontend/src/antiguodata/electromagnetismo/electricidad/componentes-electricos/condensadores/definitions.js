import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'capacidad_q',
    groupId: 'condensadores',
    title: 'Calcular Carga (Q = C × V)',
    formula: 'Q = C * V',
    variables: [
      { symbol: 'C', label: 'Capacidad', unit: 'μF' },
      { symbol: 'V', label: 'Voltaje', unit: 'V' }
    ],
    output: { symbol: 'Q', label: 'Carga', unit: 'C' },
    resolve: ({ C, V }) => {
      const C_F = parseFloat(C) * 1e-6;
      const Vnum = parseFloat(V);
      const Q = C_F * Vnum;
      return {
        result: { Q: formatNumber(Q) },
        steps: [
          `Datos: C = ${C} μF = ${formatNumber(C_F)} F, V = ${V} V`,
          `Aplicamos: Q = C × V`,
          `Q = ${formatNumber(C_F)} × ${V}`,
          `Resultado: Q = ${formatNumber(Q)} C = ${formatNumber(Q * 1e6)} μC`
        ]
      };
    }
  },

  {
    id: 'energia_condensador',
    groupId: 'condensadores',
    title: 'Energía Almacenada (E = ½CV²)',
    formula: 'E = 0.5 * C * V^2',
    variables: [
      { symbol: 'C', label: 'Capacidad', unit: 'μF' },
      { symbol: 'V', label: 'Voltaje', unit: 'V' }
    ],
    output: { symbol: 'E', label: 'Energía', unit: 'J' },
    resolve: ({ C, V }) => {
      const C_F = parseFloat(C) * 1e-6;
      const Vnum = parseFloat(V);
      const E = 0.5 * C_F * Math.pow(Vnum, 2);
      return {
        result: { E: formatNumber(E) },
        steps: [
          `Datos: C = ${C} μF = ${formatNumber(C_F)} F, V = ${V} V`,
          `Energía: E = ½ × C × V²`,
          `E = 0.5 × ${formatNumber(C_F)} × ${V}²`,
          `E = 0.5 × ${formatNumber(C_F)} × ${Math.pow(Vnum, 2)}`,
          `Resultado: E = ${formatNumber(E)} J`
        ]
      };
    }
  },

  {
    id: 'constante_rc',
    groupId: 'condensadores',
    title: 'Constante de Tiempo (τ = R × C)',
    formula: 'tau = R * C',
    variables: [
      { symbol: 'R', label: 'Resistencia', unit: 'kΩ' },
      { symbol: 'C', label: 'Capacidad', unit: 'μF' }
    ],
    output: { symbol: 'tau', label: 'Constante de tiempo', unit: 's' },
    resolve: ({ R, C }) => {
      const R_ohm = parseFloat(R) * 1000;
      const C_F = parseFloat(C) * 1e-6;
      const tau = R_ohm * C_F;
      return {
        result: { tau: formatNumber(tau) },
        steps: [
          `Datos: R = ${R} kΩ = ${R_ohm} Ω, C = ${C} μF = ${formatNumber(C_F)} F`,
          `Constante de tiempo: τ = R × C`,
          `τ = ${R_ohm} × ${formatNumber(C_F)}`,
          `Resultado: τ = ${formatNumber(tau)} s = ${formatNumber(tau * 1000)} ms`,
          ``,
          `Tiempos de carga/descarga:`,
          `1τ = ${formatNumber(tau)} s → 63%`,
          `3τ = ${formatNumber(3 * tau)} s → 95%`,
          `5τ = ${formatNumber(5 * tau)} s → 99%`
        ]
      };
    }
  },

  {
    id: 'condensadores_paralelo',
    groupId: 'condensadores',
    title: 'Condensadores en Paralelo',
    formula: 'C_total = C1 + C2 + C3',
    variables: [
      { symbol: 'C1', label: 'Condensador 1', unit: 'μF' },
      { symbol: 'C2', label: 'Condensador 2', unit: 'μF' },
      { symbol: 'C3', label: 'Condensador 3', unit: 'μF' }
    ],
    output: { symbol: 'C_total', label: 'Capacidad Total', unit: 'μF' },
    resolve: ({ C1, C2, C3 }) => {
      const Ctotal = parseFloat(C1) + parseFloat(C2) + parseFloat(C3);
      return {
        result: { C_total: formatNumber(Ctotal) },
        steps: [
          `Condensadores en paralelo: C_total = C₁ + C₂ + C₃`,
          `C_total = ${C1} + ${C2} + ${C3}`,
          `Resultado: C_total = ${formatNumber(Ctotal)} μF`
        ]
      };
    }
  },

  {
    id: 'condensadores_serie',
    groupId: 'condensadores',
    title: 'Condensadores en Serie',
    formula: '1/C_total = 1/C1 + 1/C2',
    variables: [
      { symbol: 'C1', label: 'Condensador 1', unit: 'μF' },
      { symbol: 'C2', label: 'Condensador 2', unit: 'μF' }
    ],
    output: { symbol: 'C_total', label: 'Capacidad Total', unit: 'μF' },
    resolve: ({ C1, C2 }) => {
      const C1num = parseFloat(C1);
      const C2num = parseFloat(C2);
      const Ctotal = 1 / (1/C1num + 1/C2num);
      return {
        result: { C_total: formatNumber(Ctotal) },
        steps: [
          `Condensadores en serie: 1/C_total = 1/C₁ + 1/C₂`,
          `1/C_total = 1/${C1} + 1/${C2}`,
          `1/C_total = ${formatNumber(1/C1num)} + ${formatNumber(1/C2num)}`,
          `1/C_total = ${formatNumber(1/C1num + 1/C2num)}`,
          `Resultado: C_total = ${formatNumber(Ctotal)} μF`
        ]
      };
    }
  }
];
