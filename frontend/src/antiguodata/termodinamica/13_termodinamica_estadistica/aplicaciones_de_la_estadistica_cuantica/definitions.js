import { formatNumber } from '../../../../utils/formatNumber';

const h = 6.626e-34; // Planck (J·s)
const c = 3e8; // Velocidad de la luz (m/s)
const kB = 1.381e-23; // Boltzmann (J/K)
const R = 8.314; // Constante de gases (J/(mol·K))
const sigma = 5.67e-8; // Stefan-Boltzmann (W/(m²·K⁴))

export const definitions = [
  // Grupo 1: Ley de Stefan-Boltzmann
  {
    id: 'stefan-boltzmann-ley',
    groupId: 'stefan-boltzmann',
    title: 'Ley de Stefan-Boltzmann',
    isFundamental: true,
    formula: String.raw`I = \sigma T^4`,
    variables: [
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'I', label: 'Intensidad (I)', unit: 'W/m²' },
    resolve: ({ T }) => {
      const numT = parseFloat(T);
      const I = sigma * Math.pow(numT, 4);
      return {
        result: { I: formatNumber(I) },
        steps: [
          `I = σ × T⁴`,
          `I = ${sigma} W/(m²·K⁴) × (${numT} K)⁴`,
          `I = ${formatNumber(I)} W/m²`
        ]
      };
    }
  },

  // Grupo 2: Ley de Wien
  {
    id: 'wien-ley-desplazamiento',
    groupId: 'wien-ley',
    title: 'Ley de Desplazamiento de Wien',
    isFundamental: true,
    formula: String.raw`\lambda_{max} = \frac{2.898 \times 10^{-3}}{T}`,
    variables: [
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'lambda_max', label: 'λ_max', unit: 'm' },
    resolve: ({ T }) => {
      const numT = parseFloat(T);
      const lambda_max = 2.898e-3 / numT;
      const nm = lambda_max * 1e9;
      return {
        result: { lambda_max: formatNumber(lambda_max) },
        steps: [
          `λ_max = 2.898 × 10⁻³ m·K / T`,
          `λ_max = 2.898 × 10⁻³ / ${numT}`,
          `λ_max = ${formatNumber(lambda_max)} m = ${formatNumber(nm)} nm`
        ]
      };
    }
  },

  // Grupo 3: Calor específico de Einstein
  {
    id: 'einstein-calor-especifico',
    groupId: 'einstein-calor',
    title: 'Calor Específico de Einstein',
    isFundamental: true,
    formula: String.raw`C_V = 3R \frac{x^2 e^x}{(e^x - 1)^2}`,
    variables: [
      { symbol: 'theta_E', label: 'Temperatura de Einstein θ_E', unit: 'K' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'CV', label: 'Calor Específico C_V', unit: 'J/(mol·K)' },
    resolve: ({ theta_E, T }) => {
      const numTheta = parseFloat(theta_E);
      const numT = parseFloat(T);
      const x = numTheta / numT;
      const ex = Math.exp(x);
      const CV = 3 * R * (x * x * ex) / Math.pow(ex - 1, 2);
      return {
        result: { CV: formatNumber(CV) },
        steps: [
          `x = θ_E / T = ${numTheta} / ${numT} = ${formatNumber(x)}`,
          `C_V = 3R × x² × e^x / (e^x - 1)²`,
          `C_V = 3 × ${R} × ${formatNumber(x * x * ex / Math.pow(ex - 1, 2))}`,
          `C_V = ${formatNumber(CV)} J/(mol·K)`
        ]
      };
    }
  },

  // Grupo 4: Ley T³ de Debye
  {
    id: 'debye-ley-t3',
    groupId: 'debye-calor',
    title: 'Ley T³ de Debye (Bajas T)',
    isFundamental: true,
    formula: String.raw`C_V = \frac{12\pi^4}{5} R \left(\frac{T}{\theta_D}\right)^3`,
    variables: [
      { symbol: 'theta_D', label: 'Temperatura de Debye θ_D', unit: 'K' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'CV', label: 'Calor Específico C_V', unit: 'J/(mol·K)' },
    resolve: ({ theta_D, T }) => {
      const numTheta = parseFloat(theta_D);
      const numT = parseFloat(T);
      const coef = 12 * Math.pow(Math.PI, 4) / 5;
      const CV = coef * R * Math.pow(numT / numTheta, 3);
      return {
        result: { CV: formatNumber(CV) },
        steps: [
          `C_V = (12π⁴/5) × R × (T/θ_D)³`,
          `C_V = ${formatNumber(coef)} × ${R} × (${numT}/${numTheta})³`,
          `C_V = ${formatNumber(CV)} J/(mol·K)`,
          `Válido para T << θ_D`
        ]
      };
    }
  },

  // Grupo 5: Energía de Fermi
  {
    id: 'energia-fermi-calc',
    groupId: 'energia-fermi',
    title: 'Energía de Fermi',
    isFundamental: true,
    formula: String.raw`E_F = \frac{\hbar^2}{2m}(3\pi^2 n)^{2/3}`,
    variables: [
      { symbol: 'n', label: 'Densidad electrónica n', unit: 'm⁻³' }
    ],
    output: { symbol: 'EF', label: 'Energía de Fermi E_F', unit: 'J' },
    resolve: ({ n }) => {
      const numN = parseFloat(n);
      const hbar = h / (2 * Math.PI);
      const m = 9.109e-31; // masa del electrón
      const EF = (hbar * hbar / (2 * m)) * Math.pow(3 * Math.PI * Math.PI * numN, 2/3);
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

  // Grupo 6: Calor específico electrónico
  {
    id: 'calor-electronico-calc',
    groupId: 'calor-electronico',
    title: 'Calor Específico Electrónico',
    isFundamental: true,
    formula: String.raw`C_V^{el} = \frac{\pi^2}{2} \frac{n V k_B^2 T}{E_F}`,
    variables: [
      { symbol: 'n', label: 'Densidad n', unit: 'm⁻³' },
      { symbol: 'V', label: 'Volumen V', unit: 'm³' },
      { symbol: 'T', label: 'Temperatura T', unit: 'K' },
      { symbol: 'EF', label: 'Energía de Fermi E_F', unit: 'J' }
    ],
    output: { symbol: 'CV_el', label: 'C_V^el', unit: 'J/K' },
    resolve: ({ n, V, T, EF }) => {
      const numN = parseFloat(n);
      const numV = parseFloat(V);
      const numT = parseFloat(T);
      const numEF = parseFloat(EF);
      const CV_el = (Math.PI * Math.PI / 2) * numN * numV * kB * kB * numT / numEF;
      return {
        result: { CV_el: formatNumber(CV_el) },
        steps: [
          `C_V^el = (π²/2) × n × V × k_B² × T / E_F`,
          `C_V^el = ${formatNumber(Math.PI * Math.PI / 2)} × ${formatNumber(numN)} × ${numV} × ${kB}² × ${numT} / ${numEF}`,
          `C_V^el = ${formatNumber(CV_el)} J/K`
        ]
      };
    }
  },

  // Grupo 7: Temperatura crítica BEC
  {
    id: 'bec-temperatura-critica',
    groupId: 'bec-temperatura',
    title: 'Temperatura Crítica BEC',
    isFundamental: true,
    formula: String.raw`T_c = \frac{2\pi\hbar^2}{m k_B} \left(\frac{n}{\zeta(3/2)}\right)^{2/3}`,
    variables: [
      { symbol: 'n', label: 'Densidad n', unit: 'm⁻³' },
      { symbol: 'm', label: 'Masa m', unit: 'kg' }
    ],
    output: { symbol: 'Tc', label: 'Temperatura Crítica T_c', unit: 'K' },
    resolve: ({ n, m }) => {
      const numN = parseFloat(n);
      const numM = parseFloat(m);
      const hbar = h / (2 * Math.PI);
      const zeta = 2.612; // ζ(3/2)
      const Tc = (2 * Math.PI * hbar * hbar / (numM * kB)) * Math.pow(numN / zeta, 2/3);
      const nK = Tc * 1e9;
      return {
        result: { Tc: formatNumber(Tc) },
        steps: [
          `T_c = (2πℏ²/mk_B) × (n/ζ(3/2))^(2/3)`,
          `ζ(3/2) = 2.612`,
          `T_c = ${formatNumber(Tc)} K = ${formatNumber(nK)} nK`
        ]
      };
    }
  },

  // Grupo 8: Número de ocupación Bose-Einstein
  {
    id: 'numero-ocupacion-bose',
    groupId: 'numero-ocupacion-bose',
    title: 'Número de Ocupación BE',
    isFundamental: true,
    formula: String.raw`n_{BE} = \frac{1}{e^{(E-\mu)/k_BT} - 1}`,
    variables: [
      { symbol: 'E', label: 'Energía E', unit: 'J' },
      { symbol: 'mu', label: 'Potencial químico μ', unit: 'J' },
      { symbol: 'T', label: 'Temperatura T', unit: 'K' }
    ],
    output: { symbol: 'n_BE', label: 'n_BE', unit: '-' },
    resolve: ({ E, mu, T }) => {
      const numE = parseFloat(E);
      const numMu = parseFloat(mu);
      const numT = parseFloat(T);
      const beta = 1 / (kB * numT);
      const n_BE = 1 / (Math.exp(beta * (numE - numMu)) - 1);
      return {
        result: { n_BE: formatNumber(n_BE) },
        steps: [
          `β = 1/(k_B T) = ${formatNumber(beta)} J⁻¹`,
          `n_BE = 1 / (e^(β(E-μ)) - 1)`,
          `n_BE = 1 / (e^${formatNumber(beta * (numE - numMu))} - 1)`,
          `n_BE = ${formatNumber(n_BE)}`
        ]
      };
    }
  },

  // Grupo 9: Número de ocupación Fermi-Dirac
  {
    id: 'numero-ocupacion-fermi',
    groupId: 'numero-ocupacion-fermi',
    title: 'Número de Ocupación FD',
    isFundamental: true,
    formula: String.raw`n_{FD} = \frac{1}{e^{(E-E_F)/k_BT} + 1}`,
    variables: [
      { symbol: 'E', label: 'Energía E', unit: 'J' },
      { symbol: 'EF', label: 'Energía de Fermi E_F', unit: 'J' },
      { symbol: 'T', label: 'Temperatura T', unit: 'K' }
    ],
    output: { symbol: 'n_FD', label: 'n_FD', unit: '-' },
    resolve: ({ E, EF, T }) => {
      const numE = parseFloat(E);
      const numEF = parseFloat(EF);
      const numT = parseFloat(T);
      const beta = 1 / (kB * numT);
      const n_FD = 1 / (Math.exp(beta * (numE - numEF)) + 1);
      return {
        result: { n_FD: formatNumber(n_FD) },
        steps: [
          `β = 1/(k_B T) = ${formatNumber(beta)} J⁻¹`,
          `n_FD = 1 / (e^(β(E-E_F)) + 1)`,
          `n_FD = 1 / (e^${formatNumber(beta * (numE - numEF))} + 1)`,
          `n_FD = ${formatNumber(n_FD)}`
        ]
      };
    }
  }
];
