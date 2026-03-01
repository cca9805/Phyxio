export const definitions = [
  {
    id: 'temperatura-debye',
    groupId: 'temperatura-debye',
    type: 'calculator',
    title: 'Temperatura de Debye',
    isFundamental: true,
    formula: String.raw`\\Theta_D = \\frac{\\hbar v_s}{k_B}(6\\pi^2 n)^{1/3}`,
    variables: [
      { label: 'v_s (velocidad del sonido)', id: 'vs', unit: 'm/s', type: 'number' },
      { label: 'n (densidad numérica)', id: 'n', unit: 'm⁻³', type: 'number' },
      { label: '\\hbar (constante de Planck reducida)', id: 'hbar', unit: 'J·s', type: 'number', constant: 1.0545718e-34 },
      { label: 'k_B (constante de Boltzmann)', id: 'kb', unit: 'J/K', type: 'number', constant: 1.380649e-23 }
    ],
    output: [
      { label: 'Temperatura de Debye', id: 'thetaD', unit: 'K' }
    ],
    resolve: ({ vs, n, hbar = 1.0545718e-34, kb = 1.380649e-23 }) => {
      const thetaD = (hbar * vs / kb) * Math.pow(6 * Math.PI * Math.PI * n, 1/3);
      return { thetaD };
    },
    donde: [
      'v_s: velocidad del sonido en el sólido',
      'n: densidad numérica de átomos',
      '\\hbar: constante de Planck reducida',
      'k_B: constante de Boltzmann'
    ]
  },
  {
    id: 'calor-especifico-debye',
    groupId: 'calor-especifico-debye',
    type: 'calculator',
    title: 'Calor específico de Debye (T << Θ_D)',
    isFundamental: true,
    formula: String.raw`C_v \\approx \\frac{12\\pi^4}{5}Nk_B\\left(\\frac{T}{\\Theta_D}\\right)^3`,
    variables: [
      { label: 'N (número de átomos)', id: 'N', unit: '', type: 'number' },
      { label: 'T (temperatura)', id: 'T', unit: 'K', type: 'number' },
      { label: '\\Theta_D (temperatura de Debye)', id: 'thetaD', unit: 'K', type: 'number' },
      { label: 'k_B (constante de Boltzmann)', id: 'kb', unit: 'J/K', type: 'number', constant: 1.380649e-23 }
    ],
    output: [
      { label: 'C_v (calor específico)', id: 'Cv', unit: 'J/K' }
    ],
    resolve: ({ N, T, thetaD, kb = 1.380649e-23 }) => {
      const Cv = (12 * Math.pow(Math.PI, 4) / 5) * N * kb * Math.pow(T / thetaD, 3);
      return { Cv };
    },
    donde: [
      'N: número de átomos',
      'T: temperatura',
      '\\Theta_D: temperatura de Debye',
      'k_B: constante de Boltzmann'
    ]
  }
];
