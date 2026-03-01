import { formatNumber } from '../../../../utils/formatNumber.js';

export const definitions = [
  // Grupo Densidad
  {
    id: 'densidad',
    groupId: 'densidad-grupo',
    title: 'Calcular Densidad (ρ = m/V)',
    formula: 'ρ = m / V',
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
      { symbol: 'V', label: 'Volumen (V)', unit: 'm³' }
    ],
    output: { symbol: 'rho', label: 'Densidad (ρ)', unit: 'kg/m³' },
    resolve: ({ m, V }) => {
      const volumen = parseFloat(V);
      if (volumen === 0) return { error: "El volumen no puede ser cero." };
      const rho = parseFloat(m) / volumen;
      return {
        result: { rho: formatNumber(rho) },
        steps: [
          `ρ = m / V = ${m} / ${V}`,
          `ρ = ${formatNumber(rho)} kg/m³`
        ]
      };
    }
  },
  {
    id: 'masa-desde-densidad',
    groupId: 'densidad-grupo',
    title: 'Calcular Masa (m = ρV)',
    formula: 'm = ρ * V',
    variables: [
      { symbol: 'rho', label: 'Densidad (ρ)', unit: 'kg/m³' },
      { symbol: 'V', label: 'Volumen (V)', unit: 'm³' }
    ],
    output: { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
    resolve: ({ rho, V }) => {
      const m = parseFloat(rho) * parseFloat(V);
      return {
        result: { m: formatNumber(m) },
        steps: [
          `m = ρ * V = ${rho} * ${V}`,
          `m = ${formatNumber(m)} kg`
        ]
      };
    }
  },
  {
    id: 'volumen-desde-densidad',
    groupId: 'densidad-grupo',
    title: 'Calcular Volumen (V = m/ρ)',
    formula: 'V = m / ρ',
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
      { symbol: 'rho', label: 'Densidad (ρ)', unit: 'kg/m³' }
    ],
    output: { symbol: 'V', label: 'Volumen (V)', unit: 'm³' },
    resolve: ({ m, rho }) => {
      const densidad = parseFloat(rho);
      if (densidad === 0) return { error: "La densidad no puede ser cero." };
      const V = parseFloat(m) / densidad;
      return {
        result: { V: formatNumber(V) },
        steps: [
          `V = m / ρ = ${m} / ${rho}`,
          `V = ${formatNumber(V)} m³`
        ]
      };
    }
  },

  // --- Grupo 2: Presión ---
  {
    id: 'presion',
    groupId: 'presion-grupo',
    title: 'Calcular Presión (P = F/A)',
    formula: 'P = F / A',
    variables: [
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' }
    ],
    output: { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
    resolve: ({ F, A }) => {
      const area = parseFloat(A);
      if (area === 0) return { error: "El área no puede ser cero." };
      const P = parseFloat(F) / area;
      return {
        result: { P: formatNumber(P) },
        steps: [
          `P = F / A = ${F} / ${A}`,
          `P = ${formatNumber(P)} Pa`
        ]
      };
    }
  },
  {
    id: 'fuerza-desde-presion',
    groupId: 'presion-grupo',
    title: 'Calcular Fuerza (F = PA)',
    formula: 'F = P * A',
    variables: [
      { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' }
    ],
    output: { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
    resolve: ({ P, A }) => {
      const F = parseFloat(P) * parseFloat(A);
      return {
        result: { F: formatNumber(F) },
        steps: [
          `F = P * A = ${P} * ${A}`,
          `F = ${formatNumber(F)} N`
        ]
      };
    }
  },
  {
    id: 'area-desde-presion',
    groupId: 'presion-grupo',
    title: 'Calcular Área (A = F/P)',
    formula: 'A = F / P',
    variables: [
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
      { symbol: 'P', label: 'Presión (P)', unit: 'Pa' }
    ],
    output: { symbol: 'A', label: 'Área (A)', unit: 'm²' },
    resolve: ({ F, P }) => {
      const presion = parseFloat(P);
      if (presion === 0) return { error: "La presión no puede ser cero." };
      const A = parseFloat(F) / presion;
      return {
        result: { A: formatNumber(A) },
        steps: [
          `A = F / P = ${F} / ${P}`,
          `A = ${formatNumber(A)} m²`
        ]
      };
    }
  }
];
