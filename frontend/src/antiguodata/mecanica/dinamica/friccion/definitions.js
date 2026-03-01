
import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Fuerza de Fricción Estática ---
  {
    id: 'friccion-estatica-fuerza',
    groupId: 'static-friction',
    title: 'Fuerza de Fricción Estática Máxima (fs,max = μs * N)',
    formula: 'fs,max = μs * N',
    variables: [
      { symbol: 'μs', label: 'Coeficiente de fricción estática', unit: 'μs' },
      { symbol: 'N', label: 'Fuerza Normal', unit: 'N' }
    ],
    output: { symbol: 'fs_max', label: 'Fuerza de fricción estática máxima', unit: 'N' },
    resolve: ({ μs, N }) => {
      const fs_max = parseFloat(μs) * parseFloat(N);
      return { result: { fs_max: formatNumber(fs_max) }, steps: [`fs,max = ${μs} * ${N} = ${formatNumber(fs_max)} N`] };
    }
  },
  {
    id: 'friccion-estatica-coeficiente',
    groupId: 'static-friction',
    title: 'Calcular Coeficiente Estático (μs = fs,max / N)',
    formula: 'μs = fs,max / N',
    variables: [
      { symbol: 'fs_max', label: 'Fuerza de fricción estática máxima', unit: 'N' },
      { symbol: 'N', label: 'Fuerza Normal', unit: 'N' }
    ],
    output: { symbol: 'μs', label: 'Coeficiente de fricción estática', unit: 'μs' },
    resolve: ({ fs_max, N }) => {
      const normal = parseFloat(N);
      if (normal === 0) return { error: "La Fuerza Normal no puede ser cero." };
      const μs = parseFloat(fs_max) / normal;
      return { result: { μs: formatNumber(μs) }, steps: [`μs = ${fs_max} / ${N} = ${formatNumber(μs)}`] };
    }
  },
  {
    id: 'friccion-estatica-normal',
    groupId: 'static-friction',
    title: 'Calcular Fuerza Normal (N = fs,max / μs)',
    formula: 'N = fs,max / μs',
    variables: [
      { symbol: 'fs_max', label: 'Fuerza de fricción estática máxima', unit: 'N' },
      { symbol: 'μs', label: 'Coeficiente de fricción estática', unit: 'μs' }
    ],
    output: { symbol: 'N', label: 'Fuerza Normal (N)', unit: 'N' },
    resolve: ({ fs_max, μs }) => {
      const mus = parseFloat(μs);
      if (mus === 0) return { error: "El coeficiente de fricción estática no puede ser cero." };
      const N = parseFloat(fs_max) / mus;
      return { result: { N: formatNumber(N) }, steps: [`N = ${fs_max} / ${μs} = ${formatNumber(N)} N`] };
    }
  },

  // --- Grupo 2: Fuerza de Fricción Cinética ---
  {
    id: 'friccion-cinetica-fuerza',
    groupId: 'kinetic-friction',
    title: 'Fuerza de Fricción Cinética (fk = μk * N)',
    formula: 'fk = μk * N',
    variables: [
      { symbol: 'μk', label: 'Coeficiente de fricción cinética', unit: 'μk' },
      { symbol: 'N', label: 'Fuerza Normal', unit: 'N' }
    ],
    output: { symbol: 'fk', label: 'Fuerza de fricción cinética', unit: 'N' },
    resolve: ({ μk, N }) => {
      const fk = parseFloat(μk) * parseFloat(N);
      return { result: { fk: formatNumber(fk) }, steps: [`fk = ${μk} * ${N} = ${formatNumber(fk)} N`] };
    }
  },
  {
    id: 'friccion-cinetica-coeficiente',
    groupId: 'kinetic-friction',
    title: 'Calcular Coeficiente Cinético (μk = fk / N)',
    formula: 'μk = fk / N',
    variables: [
      { symbol: 'fk', label: 'Fuerza de fricción cinética', unit: 'N' },
      { symbol: 'N', label: 'Fuerza Normal', unit: 'N' }
    ],
    output: { symbol: 'μk', label: 'Coeficiente de fricción cinética (μk)', unit: '' },
    resolve: ({ fk, N }) => {
      const normal = parseFloat(N);
      if (normal === 0) return { error: "La Fuerza Normal no puede ser cero." };
      const μk = parseFloat(fk) / normal;
      return { result: { μk: formatNumber(μk) }, steps: [`μk = ${fk} / ${N} = ${formatNumber(μk)}`] };
    }
  },
  {
    id: 'friccion-cinetica-normal',
    groupId: 'kinetic-friction',
    title: 'Calcular Fuerza Normal (N = fk / μk)',
    formula: 'N = fk / μk',
    variables: [
      { symbol: 'fk', label: 'Fuerza de fricción cinética', unit: 'N' },
      { symbol: 'μk', label: 'Coeficiente de fricción cinética', unit: 'μk' }
    ],
    output: { symbol: 'N', label: 'Fuerza Normal', unit: 'N' },
    resolve: ({ fk, μk }) => {
      const muk = parseFloat(μk);
      if (muk === 0) return { error: "El coeficiente de fricción cinética no puede ser cero." };
      const N = parseFloat(fk) / muk;
      return { result: { N: formatNumber(N) }, steps: [`N = ${fk} / ${μk} = ${formatNumber(N)} N`] };
    }
  }
];
