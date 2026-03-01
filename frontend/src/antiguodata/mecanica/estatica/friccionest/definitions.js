
import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'friccion-estatica-maxima',
    groupId: 'friccion-estatica',
    title: 'Cálculo de Fricción Estática Máxima',
    formula: 'ƒ_s,max = μ_s * N',
    variables: [
      { symbol: 'mu_s', label: 'Coeficiente de Fricción Estática (μ_s)', unit: '' },
      { symbol: 'N', label: 'Fuerza Normal (N)', unit: 'N' },
    ],
    output: { symbol: 'fs_max', label: 'Fuerza de Fricción Estática Máxima (ƒ_s,max)', unit: 'N' },
    resolve: ({ mu_s, N }) => {
      const num_mu_s = parseFloat(mu_s);
      const num_N = parseFloat(N);
      if (num_mu_s < 0) return { error: "El coeficiente de fricción no puede ser negativo." };
      if (num_N < 0) return { error: "La fuerza normal no puede ser negativa." };

      const fs_max = num_mu_s * num_N;
      return { result: { fs_max: formatNumber(fs_max) }, steps: [`ƒ_s,max = ${mu_s} * ${N} = ${formatNumber(fs_max)} N`] };
    }
  },
  {
    id: 'friccion-estatica-verificacion',
    groupId: 'friccion-estatica',
    title: 'Verificación de Equilibrio Estático',
    description: 'Calcula la fuerza de fricción estática real (ƒs) para una fuerza aplicada y determina si el objeto permanece en reposo.',
    variables: [
      { symbol: 'mu_s', label: 'Coeficiente de Fricción Estática (μ_s)', unit: '' },
      { symbol: 'N', label: 'Fuerza Normal (N)', unit: 'N' },
      { symbol: 'F_aplicada', label: 'Fuerza Aplicada Paralela (F_aplicada)', unit: 'N' },
    ],
    output: { symbol: 'fs', label: 'Fuerza de Fricción Estática (ƒ_s)', unit: 'N' },
    resolve: ({ mu_s, N, F_aplicada }) => {
      const num_mu_s = parseFloat(mu_s);
      const num_N = parseFloat(N);
      const num_F_aplicada = parseFloat(F_aplicada);
      
      if (num_mu_s < 0 || num_N < 0 || num_F_aplicada < 0) return { error: "Los valores de fuerza y coeficiente no pueden ser negativos." };

      const fs_max = num_mu_s * num_N;
      const steps = [
        `1. Calcular la fricción estática máxima:`,
        `ƒ_s,max = μ_s * N = ${mu_s} * ${N} = ${formatNumber(fs_max)} N`,
        `2. Comparar la fuerza aplicada con la máxima:`,
        `${formatNumber(num_F_aplicada)} N (aplicada) vs ${formatNumber(fs_max)} N (máxima)`
      ];

      if (num_F_aplicada > fs_max) {
        return { 
          error: `El objeto se moverá. La fuerza aplicada (${formatNumber(num_F_aplicada)} N) supera la fricción estática máxima (${formatNumber(fs_max)} N).`,
          steps: steps
        };
      } else {
        steps.push('3. Como la fuerza aplicada es menor o igual a la máxima, el objeto está en equilibrio.');
        steps.push('La fuerza de fricción estática es igual a la fuerza aplicada.');
        return { result: { fs: formatNumber(num_F_aplicada) }, steps: steps };
      }
    }
  },
  {
    id: 'coeficiente-desde-friccion',
    groupId: 'friccion-estatica',
    title: 'Calcular Coeficiente de Fricción (μ_s = ƒ_s/N)',
    formula: 'μ_s = ƒ_s / N',
    variables: [
      { symbol: 'fs', label: 'Fuerza de Fricción Estática (ƒ_s)', unit: 'N' },
      { symbol: 'N', label: 'Fuerza Normal (N)', unit: 'N' }
    ],
    output: { symbol: 'mu_s', label: 'Coeficiente de Fricción Estática (μ_s)', unit: 'adimensional' },
    resolve: ({ fs, N }) => {
      const num_N = parseFloat(N);
      if (num_N === 0) return { error: "La fuerza normal no puede ser cero." };
      const mu_s = parseFloat(fs) / num_N;
      return { 
        result: { mu_s: formatNumber(mu_s) }, 
        steps: [`μ_s = ${fs} / ${N} = ${formatNumber(mu_s)}`] 
      };
    }
  },
  {
    id: 'normal-desde-friccion',
    groupId: 'friccion-estatica',
    title: 'Calcular Fuerza Normal (N = ƒ_s/μ_s)',
    formula: 'N = ƒ_s / μ_s',
    variables: [
      { symbol: 'fs', label: 'Fuerza de Fricción Estática (ƒ_s)', unit: 'N' },
      { symbol: 'mu_s', label: 'Coeficiente de Fricción Estática (μ_s)', unit: '' }
    ],
    output: { symbol: 'N', label: 'Fuerza Normal (N)', unit: 'N' },
    resolve: ({ fs, mu_s }) => {
      const num_mu_s = parseFloat(mu_s);
      if (num_mu_s === 0) return { error: "El coeficiente de fricción no puede ser cero." };
      const N = parseFloat(fs) / num_mu_s;
      return { 
        result: { N: formatNumber(N) }, 
        steps: [`N = ${fs} / ${mu_s} = ${formatNumber(N)} N`] 
      };
    }
  },
  {
    id: 'friccion-plano-inclinado',
    groupId: 'plano-inclinado',
    title: 'Fricción en Plano Inclinado (ƒ_s = μ_s × mg×cos(θ))',
    formula: 'ƒ_s = μ_s * m * g * cos(θ)',
    variables: [
      { symbol: 'mu_s', label: 'Coeficiente de Fricción Estática (μ_s)', unit: '' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: 9.81 },
      { symbol: 'theta', label: 'Ángulo del Plano (θ)', unit: 'grados' }
    ],
    output: { symbol: 'fs', label: 'Fuerza de Fricción Estática (ƒ_s)', unit: 'N' },
    resolve: ({ mu_s, m, g = 9.81, theta }) => {
      const theta_rad = parseFloat(theta) * (Math.PI / 180);
      const fs = parseFloat(mu_s) * parseFloat(m) * parseFloat(g) * Math.cos(theta_rad);
      return { 
        result: { fs: formatNumber(fs) }, 
        steps: [`ƒ_s = ${mu_s} × ${m} × ${g} × cos(${theta}°) = ${formatNumber(fs)} N`] 
      };
    }
  },
  {
    id: 'angulo-maximo-sin-deslizar',
    groupId: 'plano-inclinado',
    title: 'Ángulo Máximo sin Deslizar (θ_máx = atan(μ_s))',
    formula: 'θ_máx = atan(μ_s)',
    variables: [
      { symbol: 'mu_s', label: 'Coeficiente de Fricción Estática (μ_s)', unit: '' }
    ],
    output: { symbol: 'theta_max', label: 'Ángulo Máximo (θ_máx)', unit: 'grados' },
    resolve: ({ mu_s }) => {
      const theta_rad = Math.atan(parseFloat(mu_s));
      const theta_max = theta_rad * (180 / Math.PI);
      return { 
        result: { theta_max: formatNumber(theta_max) }, 
        steps: [`θ_máx = atan(${mu_s}) = ${formatNumber(theta_max)}°`] 
      };
    }
  }
];
