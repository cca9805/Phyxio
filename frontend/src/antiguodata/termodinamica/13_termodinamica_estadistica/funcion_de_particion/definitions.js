import { formatNumber } from '../../../../utils/formatNumber';

const k_B = 1.380649e-23; // Constante de Boltzmann (J/K)
const h = 6.62607015e-34; // Constante de Planck (J·s)

export const definitions = [
  // Grupo 1: Propiedades desde Z
  {
    id: 'funcion-particion-energia-libre',
    groupId: 'funcion-particion-energia-libre',
    title: 'Energía Libre de Helmholtz desde Z (F)',
    isFundamental: true,
      formula: 'F = -k_B * T * ln(Z)', // ASCII plano
    variables: [
      { symbol: 'Z', label: 'Función de Partición (Z)', unit: 'adimensional' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'F', label: 'Energía Libre (F)', unit: 'J' },
    resolve: ({ Z, T }) => {
      if (Z <= 0) return { error: 'La función de partición debe ser positiva.' };
      if (T <= 0) return { error: 'La temperatura debe ser positiva.' };
      
      const F = -k_B * T * Math.log(Z);
      return {
        result: { F: formatNumber(F) },
        steps: [
          `F = -k_B × T × ln(Z)`,
          `F = -(${k_B}) J/K × ${T} K × ln(${Z})`,
          `F = ${formatNumber(F)} J`
        ]
      };
    }
  },

  {
    id: 'funcion-particion-energia-interna',
    groupId: 'funcion-particion-energia-interna',
    title: 'Energía Interna desde Z (U)',
    isFundamental: true,
      formula: 'U = k_B * T^2 * (dlnZ/dT)', // ASCII plano
    variables: [
      { symbol: 'Z', label: 'Función de Partición (Z)', unit: 'adimensional' },
      { symbol: 'dZ_dT', label: 'Derivada dZ/dT', unit: 'K⁻¹' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'U', label: 'Energía Interna (U)', unit: 'J' },
    resolve: ({ Z, dZ_dT, T }) => {
      if (Z <= 0) return { error: 'La función de partición debe ser positiva.' };
      if (T <= 0) return { error: 'La temperatura debe ser positiva.' };
      
      const dlnZ_dT = dZ_dT / Z;
      const U = k_B * T * T * dlnZ_dT;
      return {
        result: { U: formatNumber(U) },
        steps: [
          `d(ln Z)/dT = (dZ/dT)/Z = ${dZ_dT}/${Z} = ${formatNumber(dlnZ_dT)} K⁻¹`,
          `U = k_B × T² × d(ln Z)/dT`,
          `U = ${k_B} J/K × (${T} K)² × ${formatNumber(dlnZ_dT)} K⁻¹`,
          `U = ${formatNumber(U)} J`
        ]
      };
    }
  },

  {
    id: 'funcion-particion-entropia',
    groupId: 'funcion-particion-entropia',
    title: 'Entropía desde Z (S)',
      formula: 'S = k_B * ln(Z) + U/T', // ASCII plano
    variables: [
      { symbol: 'Z', label: 'Función de Partición (Z)', unit: 'adimensional' },
      { symbol: 'U', label: 'Energía Interna (U)', unit: 'J' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'S', label: 'Entropía (S)', unit: 'J/K' },
    resolve: ({ Z, U, T }) => {
      if (Z <= 0) return { error: 'La función de partición debe ser positiva.' };
      if (T <= 0) return { error: 'La temperatura debe ser positiva.' };
      
      const S = k_B * Math.log(Z) + U / T;
      return {
        result: { S: formatNumber(S) },
        steps: [
          `S = k_B × ln(Z) + U/T`,
          `S = ${k_B} J/K × ln(${Z}) + ${U} J / ${T} K`,
          `S = ${formatNumber(k_B * Math.log(Z))} J/K + ${formatNumber(U/T)} J/K`,
          `S = ${formatNumber(S)} J/K`
        ]
      };
    }
  },

  {
    id: 'funcion-particion-presion',
    groupId: 'funcion-particion-presion',
    title: 'Presión desde Z (P)',
      formula: 'P = k_B * T * (dlnZ/dV)', // ASCII plano
    variables: [
      { symbol: 'Z', label: 'Función de Partición (Z)', unit: 'adimensional' },
      { symbol: 'dZ_dV', label: 'Derivada dZ/dV', unit: 'm⁻³' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
    resolve: ({ Z, dZ_dV, T }) => {
      if (Z <= 0) return { error: 'La función de partición debe ser positiva.' };
      if (T <= 0) return { error: 'La temperatura debe ser positiva.' };
      
      const dlnZ_dV = dZ_dV / Z;
      const P = k_B * T * dlnZ_dV;
      return {
        result: { P: formatNumber(P) },
        steps: [
          `d(ln Z)/dV = (dZ/dV)/Z = ${dZ_dV}/${Z} = ${formatNumber(dlnZ_dV)} m⁻³`,
          `P = k_B × T × d(ln Z)/dV`,
          `P = ${k_B} J/K × ${T} K × ${formatNumber(dlnZ_dV)} m⁻³`,
          `P = ${formatNumber(P)} Pa`
        ]
      };
    }
  },

  // Grupo 2: Sistemas simples
  {
    id: 'dos-niveles-particion',
    groupId: 'dos-niveles-particion',
    title: 'Sistema de Dos Niveles - Z',
    isFundamental: true,
    formula: 'Z = 1 + exp(-beta * epsilon)',
    variables: [
      { symbol: 'epsilon', label: 'Separación de Energía (ε)', unit: 'J' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'Z', label: 'Función de Partición (Z)', unit: 'adimensional' },
    resolve: ({ epsilon, T }) => {
      if (T <= 0) return { error: 'La temperatura debe ser positiva.' };
      
      const beta = 1 / (k_B * T);
      const Z = 1 + Math.exp(-beta * epsilon);
      const E_avg = epsilon / (Math.exp(beta * epsilon) + 1);
      
      return {
        result: { Z: formatNumber(Z) },
        steps: [
          `β = 1/(k_B T) = 1/(${k_B} × ${T}) = ${formatNumber(beta)} J⁻¹`,
          `Z = 1 + exp(-β ε) = 1 + exp(-${formatNumber(beta)} × ${epsilon})`,
          `Z = ${formatNumber(Z)}`,
          `Energía promedio: ⟨E⟩ = ${formatNumber(E_avg)} J`
        ]
      };
    }
  },

  {
    id: 'oscilador-armonico-particion',
    groupId: 'oscilador-armonico-particion',
    title: 'Oscilador Armónico Cuántico - Z',
    formula: 'Z = exp(-beta * hbar * omega / 2) / (1 - exp(-beta * hbar * omega))',
    variables: [
      { symbol: 'omega', label: 'Frecuencia Angular (ω)', unit: 'rad/s' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'Z', label: 'Función de Partición (Z)', unit: 'adimensional' },
    resolve: ({ omega, T }) => {
      if (T <= 0) return { error: 'La temperatura debe ser positiva.' };
      if (omega <= 0) return { error: 'La frecuencia debe ser positiva.' };
      
      const hbar = h / (2 * Math.PI);
      const beta = 1 / (k_B * T);
      const x = beta * hbar * omega;
      
      const Z = Math.exp(-x/2) / (1 - Math.exp(-x));
      const E_avg = (hbar * omega / 2) + (hbar * omega) / (Math.exp(x) - 1);
      
      return {
        result: { Z: formatNumber(Z) },
        steps: [
          `ℏ = h/(2π) = ${formatNumber(hbar)} J·s`,
          `β = 1/(k_B T) = ${formatNumber(beta)} J⁻¹`,
          `βℏω = ${formatNumber(x)}`,
          `Z = exp(-βℏω/2) / (1 - exp(-βℏω)) = ${formatNumber(Z)}`,
          `Energía promedio: ⟨E⟩ = ${formatNumber(E_avg)} J`
        ]
      };
    }
  },

  // Grupo 3: Partículas independientes
  {
    id: 'particulas-independientes',
    groupId: 'particulas-independientes',
    title: 'N Partículas Independientes',
    formula: 'Z_N = Z1^N / N!',
    variables: [
      { symbol: 'Z1', label: 'Función de Partición de 1 Partícula (Z₁)', unit: 'adimensional' },
      { symbol: 'N', label: 'Número de Partículas (N)', unit: 'partículas' }
    ],
    output: { symbol: 'ZN', label: 'Función de Partición Total (Z_N)', unit: 'adimensional' },
    resolve: ({ Z1, N }) => {
      if (Z1 <= 0) return { error: 'Z₁ debe ser positiva.' };
      if (N <= 0 || !Number.isInteger(Number(N))) return { error: 'N debe ser un entero positivo.' };
      
      // Para N grande, usar aproximación de Stirling: ln(N!) ≈ N ln(N) - N
      let lnZN;
      if (N > 170) {
        // Evitar overflow usando logaritmos
        const lnZ1 = Math.log(Z1);
        const lnFactorial = N * Math.log(N) - N; // Stirling
        lnZN = N * lnZ1 - lnFactorial;
      } else {
        // Cálculo directo para N pequeño
        let factorial = 1;
        for (let i = 2; i <= N; i++) factorial *= i;
        lnZN = Math.log(Math.pow(Z1, N) / factorial);
      }
      
      return {
        result: { ZN: `exp(${formatNumber(lnZN)})` },
        steps: [
          `Z_N = Z₁^N / N!`,
          `Z_N = (${Z1})^${N} / ${N}!`,
          N > 170 
            ? `Para N grande, ln(Z_N) = N ln(Z₁) - ln(N!) ≈ ${formatNumber(lnZN)}`
            : `ln(Z_N) = ${formatNumber(lnZN)}`,
          `Z_N = exp(${formatNumber(lnZN)})`
        ]
      };
    }
  },

  // Grupo 4: Calor específico y fluctuaciones
  {
    id: 'calor-especifico-particion',
    groupId: 'calor-especifico-particion',
    title: 'Calor Específico desde Z (C_V)',
    formula: 'C_V = k_B * beta^2 * (d2lnZ/dbeta2)',
    variables: [
      { symbol: 'Z', label: 'Función de Partición (Z)', unit: 'adimensional' },
      { symbol: 'd2lnZ_dbeta2', label: 'Segunda Derivada d²(ln Z)/dβ²', unit: 'J²' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'CV', label: 'Calor Específico (C_V)', unit: 'J/K' },
    resolve: ({ Z, d2lnZ_dbeta2, T }) => {
      if (Z <= 0) return { error: 'La función de partición debe ser positiva.' };
      if (T <= 0) return { error: 'La temperatura debe ser positiva.' };
      
      const beta = 1 / (k_B * T);
      const CV = k_B * beta * beta * d2lnZ_dbeta2;
      
      return {
        result: { CV: formatNumber(CV) },
        steps: [
          `β = 1/(k_B T) = ${formatNumber(beta)} J⁻¹`,
          `C_V = k_B × β² × d²(ln Z)/dβ²`,
          `C_V = ${k_B} J/K × (${formatNumber(beta)} J⁻¹)² × ${d2lnZ_dbeta2} J²`,
          `C_V = ${formatNumber(CV)} J/K`
        ]
      };
    }
  },

  {
    id: 'fluctuaciones-energia',
    groupId: 'fluctuaciones-energia',
    title: 'Fluctuaciones de Energía',
    formula: 'varE = k_B * T^2 * C_V',
    variables: [
      { symbol: 'CV', label: 'Calor Específico (C_V)', unit: 'J/K' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'varE', label: 'Varianza de Energía ⟨(ΔE)²⟩', unit: 'J²' },
    resolve: ({ CV, T }) => {
      if (T <= 0) return { error: 'La temperatura debe ser positiva.' };
      if (CV < 0) return { error: 'El calor específico debe ser positivo.' };
      
      const varE = k_B * T * T * CV;
      const sigmaE = Math.sqrt(varE);
      
      return {
        result: { varE: formatNumber(varE) },
        steps: [
          `⟨(ΔE)²⟩ = k_B × T² × C_V`,
          `⟨(ΔE)²⟩ = ${k_B} J/K × (${T} K)² × ${CV} J/K`,
          `⟨(ΔE)²⟩ = ${formatNumber(varE)} J²`,
          `Desviación estándar: σ_E = ${formatNumber(sigmaE)} J`
        ]
      };
    }
  }
];
