
import { formatNumber } from '../../../../utils/formatNumber';

const kB = 1.381e-23; // Constante de Boltzmann en J/K
const R = 8.314; // Constante de gases en J/(mol·K)

export const definitions = [
  {
    id: 'energia-grado-libertad',
    groupId: 'equiparticion-general',
    title: 'Energía por Grado de Libertad',
    formula: String.raw`\langle E \rangle = \frac{1}{2} k_B T`,
    variables: [
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'E', label: 'Energía ⟨E⟩', unit: 'J' },
    resolve: ({ T }) => {
      const numT = parseFloat(T);
      const E = 0.5 * kB * numT;
      return { result: { E: formatNumber(E) } };
    }
  },
  {
    id: 'temperatura-desde-energia',
    groupId: 'equiparticion-general',
    title: 'Temperatura desde Energía',
    formula: String.raw`T = \frac{2\langle E \rangle}{k_B}`,
    variables: [
      { symbol: 'E', label: 'Energía ⟨E⟩', unit: 'J' }
    ],
    output: { symbol: 'T', label: 'Temperatura (T)', unit: 'K' },
    resolve: ({ E }) => {
      const numE = parseFloat(E);
      const T = (2 * numE) / kB;
      return { result: { T: formatNumber(T) } };
    }
  },
  {
    id: 'energia-interna-gas',
    groupId: 'energia-equiparticion',
    title: 'Energía Interna de Gas',
    formula: String.raw`U = \frac{f}{2} N k_B T`,
    variables: [
      { symbol: 'f', label: 'Grados de libertad (f)', unit: '-' },
      { symbol: 'N', label: 'Número de partículas (N)', unit: '-' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'U', label: 'Energía interna (U)', unit: 'J' },
    resolve: ({ f, N, T }) => {
      const numF = parseFloat(f);
      const numN = parseFloat(N);
      const numT = parseFloat(T);
      const U = (numF / 2) * numN * kB * numT;
      return { result: { U: formatNumber(U) } };
    }
  },
  {
    id: 'energia-interna-molar',
    groupId: 'energia-equiparticion',
    title: 'Energía Interna Molar',
    formula: String.raw`U = \frac{f}{2} n R T`,
    variables: [
      { symbol: 'f', label: 'Grados de libertad (f)', unit: '-' },
      { symbol: 'n', label: 'Moles (n)', unit: 'mol' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'U', label: 'Energía interna (U)', unit: 'J' },
    resolve: ({ f, n, T }) => {
      const numF = parseFloat(f);
      const numN = parseFloat(n);
      const numT = parseFloat(T);
      const U = (numF / 2) * numN * R * numT;
      return { result: { U: formatNumber(U) } };
    }
  },
  {
    id: 'energia-monoatomico',
    groupId: 'gas-monoatomico-energia',
    title: 'Energía de Gas Monoatómico',
    formula: String.raw`U = \frac{3}{2} n R T`,
    variables: [
      { symbol: 'n', label: 'Moles (n)', unit: 'mol' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'U', label: 'Energía interna (U)', unit: 'J' },
    resolve: ({ n, T }) => {
      const numN = parseFloat(n);
      const numT = parseFloat(T);
      const U = 1.5 * numN * R * numT;
      return { result: { U: formatNumber(U) } };
    }
  },
  {
    id: 'energia-diatomico',
    groupId: 'gas-diatomico-energia',
    title: 'Energía de Gas Diatómico',
    formula: String.raw`U = \frac{5}{2} n R T`,
    variables: [
      { symbol: 'n', label: 'Moles (n)', unit: 'mol' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'U', label: 'Energía interna (U)', unit: 'J' },
    resolve: ({ n, T }) => {
      const numN = parseFloat(n);
      const numT = parseFloat(T);
      const U = 2.5 * numN * R * numT;
      return { result: { U: formatNumber(U) } };
    }
  },
  {
    id: 'energia-cinetica-traslacion',
    groupId: 'energia-cinetica-promedio',
    title: 'Energía Cinética de Traslación',
    formula: String.raw`\langle E_{cin} \rangle = \frac{3}{2} k_B T`,
    variables: [
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'Ecin', label: 'Energía cinética ⟨E_cin⟩', unit: 'J' },
    resolve: ({ T }) => {
      const numT = parseFloat(T);
      const Ecin = 1.5 * kB * numT;
      return { result: { Ecin: formatNumber(Ecin) } };
    }
  },
  {
    id: 'calor-especifico-solido',
    groupId: 'solido-energia',
    title: 'Calor Específico de Sólido (Dulong-Petit)',
    formula: String.raw`C_V = 3R`,
    variables: [],
    output: { symbol: 'CV', label: 'Calor específico C_V', unit: 'J/(mol·K)' },
    resolve: () => {
      const CV = 3 * R;
      return { result: { CV: formatNumber(CV) } };
    }
  },
  {
    id: 'energia-oscilador-armonico',
    groupId: 'oscilador-armonico-clasico',
    title: 'Energía de Oscilador Armónico',
    formula: String.raw`\langle E \rangle = k_B T`,
    variables: [
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'E', label: 'Energía total ⟨E⟩', unit: 'J' },
    resolve: ({ T }) => {
      const numT = parseFloat(T);
      const E = kB * numT;
      return { result: { E: formatNumber(E) } };
    }
  },
  {
    id: 'presion-gas-ideal',
    groupId: 'presion-equiparticion',
    title: 'Presión de Gas Ideal',
    formula: String.raw`P = \frac{N k_B T}{V}`,
    variables: [
      { symbol: 'N', label: 'Número de partículas (N)', unit: '-' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' },
      { symbol: 'V', label: 'Volumen (V)', unit: 'm³' }
    ],
    output: { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
    resolve: ({ N, T, V }) => {
      const numN = parseFloat(N);
      const numT = parseFloat(T);
      const numV = parseFloat(V);
      if (numV === 0) return { error: 'El volumen no puede ser cero.' };
      const P = (numN * kB * numT) / numV;
      return { result: { P: formatNumber(P) } };
    }
  }
];
