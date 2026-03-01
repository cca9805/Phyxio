import { formatNumber } from '../../../../utils/formatNumber';

const h = 6.626e-34; // Planck (J·s)
const hbar = h / (2 * Math.PI); // Planck reducida
const kB = 1.381e-23; // Boltzmann (J/K)
const me = 9.109e-31; // Masa del electrón (kg)

export const definitions = [
  // Grupo 1: Longitud de onda térmica
  {
    id: 'longitud-onda-termica',
    groupId: 'longitud-termica',
    title: 'Longitud de Onda Térmica de de Broglie',
    isFundamental: true,
    formula: String.raw`\lambda_T = \frac{h}{\sqrt{2\pi m k_B T}}`,
    variables: [
      { symbol: 'm', label: 'Masa de la partícula (m)', unit: 'kg' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'lambda_T', label: 'Longitud térmica λ_T', unit: 'm' },
    resolve: ({ m, T }) => {
      const numM = parseFloat(m);
      const numT = parseFloat(T);
      const lambda_T = h / Math.sqrt(2 * Math.PI * numM * kB * numT);
      const nm = lambda_T * 1e9;
      return {
        result: { lambda_T: formatNumber(lambda_T) },
        steps: [
          `λ_T = h / √(2πmk_BT)`,
          `λ_T = ${h} / √(2π × ${numM} × ${kB} × ${numT})`,
          `λ_T = ${formatNumber(lambda_T)} m = ${formatNumber(nm)} nm`
        ]
      };
    }
  },

  // Grupo 2: Energía de Fermi
  {
    id: 'energia-fermi',
    groupId: 'energia-fermi',
    title: 'Energía de Fermi',
    isFundamental: true,
    formula: String.raw`E_F = \frac{\hbar^2}{2m}(3\pi^2 n)^{2/3}`,
    variables: [
      { symbol: 'n', label: 'Densidad numérica (n)', unit: 'm⁻³' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', defaultValue: me }
    ],
    output: { symbol: 'EF', label: 'Energía de Fermi E_F', unit: 'J' },
    resolve: ({ n, m }) => {
      const numN = parseFloat(n);
      const numM = parseFloat(m);
      const EF = (hbar * hbar / (2 * numM)) * Math.pow(3 * Math.PI * Math.PI * numN, 2/3);
      const eV = EF / 1.602e-19;
      const TF = EF / kB;
      return {
        result: { EF: formatNumber(EF) },
        steps: [
          `E_F = (ℏ²/2m) × (3π²n)^(2/3)`,
          `E_F = ${formatNumber(EF)} J`,
          `E_F = ${formatNumber(eV)} eV`,
          `T_F = E_F/k_B = ${formatNumber(TF)} K`
        ]
      };
    }
  },

  // Grupo 3: Temperatura de Fermi
  {
    id: 'temperatura-fermi',
    groupId: 'temperatura-fermi',
    title: 'Temperatura de Fermi',
    isFundamental: true,
    formula: String.raw`T_F = \frac{E_F}{k_B}`,
    variables: [
      { symbol: 'EF', label: 'Energía de Fermi E_F', unit: 'J' }
    ],
    output: { symbol: 'TF', label: 'Temperatura de Fermi T_F', unit: 'K' },
    resolve: ({ EF }) => {
      const numEF = parseFloat(EF);
      const TF = numEF / kB;
      return {
        result: { TF: formatNumber(TF) },
        steps: [
          `T_F = E_F / k_B`,
          `T_F = ${numEF} J / ${kB} J/K`,
          `T_F = ${formatNumber(TF)} K`
        ]
      };
    }
  },

  // Grupo 4: Velocidad de Fermi
  {
    id: 'velocidad-fermi',
    groupId: 'velocidad-fermi',
    title: 'Velocidad de Fermi',
    isFundamental: true,
    formula: String.raw`v_F = \sqrt{\frac{2E_F}{m}}`,
    variables: [
      { symbol: 'EF', label: 'Energía de Fermi E_F', unit: 'J' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', defaultValue: me }
    ],
    output: { symbol: 'vF', label: 'Velocidad de Fermi v_F', unit: 'm/s' },
    resolve: ({ EF, m }) => {
      const numEF = parseFloat(EF);
      const numM = parseFloat(m);
      const vF = Math.sqrt(2 * numEF / numM);
      const c = 3e8;
      const fraccion_c = vF / c;
      return {
        result: { vF: formatNumber(vF) },
        steps: [
          `v_F = √(2E_F/m)`,
          `v_F = √(2 × ${numEF} / ${numM})`,
          `v_F = ${formatNumber(vF)} m/s`,
          `v_F/c = ${formatNumber(fraccion_c * 100)}%`
        ]
      };
    }
  },

  // Grupo 5: Temperatura crítica BEC
  {
    id: 'temperatura-critica-bec',
    groupId: 'temperatura-bec',
    title: 'Temperatura Crítica BEC',
    isFundamental: true,
    formula: String.raw`T_c = \frac{2\pi\hbar^2}{m k_B} \left(\frac{n}{\zeta(3/2)}\right)^{2/3}`,
    variables: [
      { symbol: 'n', label: 'Densidad (n)', unit: 'm⁻³' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' }
    ],
    output: { symbol: 'Tc', label: 'Temperatura crítica T_c', unit: 'K' },
    resolve: ({ n, m }) => {
      const numN = parseFloat(n);
      const numM = parseFloat(m);
      const zeta = 2.612; // ζ(3/2)
      const Tc = (2 * Math.PI * hbar * hbar / (numM * kB)) * Math.pow(numN / zeta, 2/3);
      const nK = Tc * 1e9;
      const uK = Tc * 1e6;
      return {
        result: { Tc: formatNumber(Tc) },
        steps: [
          `T_c = (2πℏ²/mk_B) × (n/ζ(3/2))^(2/3)`,
          `ζ(3/2) = 2.612`,
          `T_c = ${formatNumber(Tc)} K`,
          Tc < 1e-6 ? `T_c = ${formatNumber(nK)} nK` : `T_c = ${formatNumber(uK)} μK`
        ]
      };
    }
  },

  // Grupo 6: Fracción condensada BEC
  {
    id: 'fraccion-condensada-bec',
    groupId: 'fraccion-bec',
    title: 'Fracción Condensada BEC',
    isFundamental: true,
    formula: String.raw`\frac{N_0}{N} = 1 - \left(\frac{T}{T_c}\right)^{3/2}`,
    variables: [
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' },
      { symbol: 'Tc', label: 'Temperatura crítica T_c', unit: 'K' }
    ],
    output: { symbol: 'fraccion', label: 'Fracción N₀/N', unit: '-' },
    resolve: ({ T, Tc }) => {
      const numT = parseFloat(T);
      const numTc = parseFloat(Tc);
      if (numT >= numTc) return { error: 'T debe ser menor que T_c para tener condensado.' };
      const fraccion = 1 - Math.pow(numT / numTc, 1.5);
      const porcentaje = fraccion * 100;
      return {
        result: { fraccion: formatNumber(fraccion) },
        steps: [
          `N₀/N = 1 - (T/T_c)^(3/2)`,
          `N₀/N = 1 - (${numT}/${numTc})^(3/2)`,
          `N₀/N = 1 - ${formatNumber(Math.pow(numT / numTc, 1.5))}`,
          `N₀/N = ${formatNumber(fraccion)} = ${formatNumber(porcentaje)}%`
        ]
      };
    }
  },

  // Grupo 7: Distribución Fermi-Dirac
  {
    id: 'distribucion-fermi-dirac',
    groupId: 'distribucion-fd',
    title: 'Distribución de Fermi-Dirac',
    isFundamental: true,
    formula: String.raw`f_{FD}(E) = \frac{1}{e^{(E-\mu)/k_BT} + 1}`,
    variables: [
      { symbol: 'E', label: 'Energía (E)', unit: 'J' },
      { symbol: 'mu', label: 'Potencial químico μ', unit: 'J' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'f_FD', label: 'Ocupación f_FD', unit: '-' },
    resolve: ({ E, mu, T }) => {
      const numE = parseFloat(E);
      const numMu = parseFloat(mu);
      const numT = parseFloat(T);
      const beta = 1 / (kB * numT);
      const f_FD = 1 / (Math.exp(beta * (numE - numMu)) + 1);
      const porcentaje = f_FD * 100;
      return {
        result: { f_FD: formatNumber(f_FD) },
        steps: [
          `β = 1/(k_B T) = ${formatNumber(beta)} J⁻¹`,
          `f_FD = 1 / (e^(β(E-μ)) + 1)`,
          `f_FD = 1 / (e^${formatNumber(beta * (numE - numMu))} + 1)`,
          `f_FD = ${formatNumber(f_FD)} = ${formatNumber(porcentaje)}%`
        ]
      };
    }
  },

  // Grupo 8: Distribución Bose-Einstein
  {
    id: 'distribucion-bose-einstein',
    groupId: 'distribucion-be',
    title: 'Distribución de Bose-Einstein',
    isFundamental: true,
    formula: String.raw`f_{BE}(E) = \frac{1}{e^{(E-\mu)/k_BT} - 1}`,
    variables: [
      { symbol: 'E', label: 'Energía (E)', unit: 'J' },
      { symbol: 'mu', label: 'Potencial químico μ', unit: 'J' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'f_BE', label: 'Ocupación f_BE', unit: '-' },
    resolve: ({ E, mu, T }) => {
      const numE = parseFloat(E);
      const numMu = parseFloat(mu);
      const numT = parseFloat(T);
      if (numMu >= numE) return { error: 'μ debe ser menor que E para bosones.' };
      const beta = 1 / (kB * numT);
      const f_BE = 1 / (Math.exp(beta * (numE - numMu)) - 1);
      return {
        result: { f_BE: formatNumber(f_BE) },
        steps: [
          `β = 1/(k_B T) = ${formatNumber(beta)} J⁻¹`,
          `f_BE = 1 / (e^(β(E-μ)) - 1)`,
          `f_BE = 1 / (e^${formatNumber(beta * (numE - numMu))} - 1)`,
          `f_BE = ${formatNumber(f_BE)}`
        ]
      };
    }
  },

  // Grupo 9: Presión de degeneración
  {
    id: 'presion-degeneracion',
    groupId: 'presion-fermi',
    title: 'Presión de Degeneración',
    isFundamental: true,
    formula: String.raw`P = \frac{2}{5} n E_F`,
    variables: [
      { symbol: 'n', label: 'Densidad (n)', unit: 'm⁻³' },
      { symbol: 'EF', label: 'Energía de Fermi E_F', unit: 'J' }
    ],
    output: { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
    resolve: ({ n, EF }) => {
      const numN = parseFloat(n);
      const numEF = parseFloat(EF);
      const P = (2/5) * numN * numEF;
      const atm = P / 101325;
      return {
        result: { P: formatNumber(P) },
        steps: [
          `P = (2/5) × n × E_F`,
          `P = 0.4 × ${formatNumber(numN)} × ${numEF}`,
          `P = ${formatNumber(P)} Pa`,
          P > 1e6 ? `P = ${formatNumber(P/1e9)} GPa` : `P = ${formatNumber(atm)} atm`
        ]
      };
    }
  },

  // Grupo 10: Energía total gas de Fermi
  {
    id: 'energia-total-fermi',
    groupId: 'energia-fermi-total',
    title: 'Energía Total Gas de Fermi (T=0)',
    isFundamental: true,
    formula: String.raw`U = \frac{3}{5} N E_F`,
    variables: [
      { symbol: 'N', label: 'Número de partículas (N)', unit: '-' },
      { symbol: 'EF', label: 'Energía de Fermi E_F', unit: 'J' }
    ],
    output: { symbol: 'U', label: 'Energía total (U)', unit: 'J' },
    resolve: ({ N, EF }) => {
      const numN = parseFloat(N);
      const numEF = parseFloat(EF);
      const U = (3/5) * numN * numEF;
      const E_promedio = U / numN;
      return {
        result: { U: formatNumber(U) },
        steps: [
          `U = (3/5) × N × E_F`,
          `U = 0.6 × ${formatNumber(numN)} × ${numEF}`,
          `U = ${formatNumber(U)} J`,
          `Energía promedio: ⟨E⟩ = ${formatNumber(E_promedio)} J`
        ]
      };
    }
  }
];
