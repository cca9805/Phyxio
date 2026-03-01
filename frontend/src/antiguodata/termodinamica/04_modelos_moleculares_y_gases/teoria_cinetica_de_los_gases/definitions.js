import { formatNumber } from '../../../../utils/formatNumber';

const R = 8.314; // Constante universal de gases (J/mol·K)
const k_B = 1.381e-23; // Constante de Boltzmann (J/K)

export const definitions = [
  // --- Velocidad Cuadrática Media ---
  {
    id: 'velocidad-cuadratica-media',
    groupId: 'teoria_cinetica_de_los_gases-grupo-1',
    title: 'Velocidad Cuadrática Media (v_rms)',
    isFundamental: true,
    formula: String.raw`v_{rms} = \sqrt{\frac{3RT}{M}}`,
    variables: [
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' },
      { symbol: 'M', label: 'Masa molar (M)', unit: 'kg/mol' }
    ],
    output: { symbol: 'v_rms', label: 'Velocidad RMS (v_rms)', unit: 'm/s' },
    resolve: ({ T, M }) => {
      const v_rms = Math.sqrt((3 * R * T) / M);
      return {
        result: { v_rms: formatNumber(v_rms) },
        steps: [
          `v_rms = √(3RT / M)`,
          `v_rms = √(3 × ${R} × ${T} / ${M})`,
          `v_rms = ${formatNumber(v_rms)} m/s`
        ]
      };
    }
  },

  // --- Energía Cinética Promedio ---
  {
    id: 'energia-cinetica-promedio',
    groupId: 'teoria_cinetica_de_los_gases-grupo-1',
    title: 'Energía Cinética Promedio (⟨E_k⟩)',
    isFundamental: true,
    formula: String.raw`\langle E_k \rangle = \frac{3}{2}k_BT`,
    variables: [
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'E_k', label: 'Energía cinética (⟨E_k⟩)', unit: 'J' },
    resolve: ({ T }) => {
      const E_k = (3/2) * k_B * T;
      return {
        result: { E_k: formatNumber(E_k) },
        steps: [
          `⟨E_k⟩ = (3/2) × k_B × T`,
          `⟨E_k⟩ = (3/2) × ${k_B} J/K × ${T} K`,
          `⟨E_k⟩ = ${formatNumber(E_k)} J`
        ]
      };
    }
  },

  // --- Energía Interna del Gas Ideal ---
  {
    id: 'energia-interna-gas-ideal',
    groupId: 'teoria_cinetica_de_los_gases-grupo-1',
    title: 'Energía Interna del Gas Ideal (U)',
    isFundamental: true,
    formula: String.raw`U = \frac{3}{2}nRT`,
    variables: [
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'U', label: 'Energía interna (U)', unit: 'J' },
    resolve: ({ n, T }) => {
      const U = (3/2) * n * R * T;
      return {
        result: { U: formatNumber(U) },
        steps: [
          `U = (3/2) × n × R × T`,
          `U = (3/2) × ${n} mol × ${R} J/(mol·K) × ${T} K`,
          `U = ${formatNumber(U)} J`
        ]
      };
    }
  },

  // --- Presión desde Teoría Cinética ---
  {
    id: 'presion-teoria-cinetica',
    groupId: 'teoria_cinetica_de_los_gases-grupo-1',
    title: 'Presión desde Teoría Cinética (P)',
    isFundamental: true,
    formula: String.raw`P = \frac{1}{3}\frac{Nmv_{rms}^2}{V}`,
    variables: [
      { symbol: 'N', label: 'Número de moléculas (N)', unit: 'moléculas' },
      { symbol: 'm', label: 'Masa de una molécula (m)', unit: 'kg' },
      { symbol: 'v_rms', label: 'Velocidad RMS (v_rms)', unit: 'm/s' },
      { symbol: 'V', label: 'Volumen (V)', unit: 'm³' }
    ],
    output: { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
    resolve: ({ N, m, v_rms, V }) => {
      const P = (1/3) * (N * m * v_rms * v_rms) / V;
      return {
        result: { P: formatNumber(P) },
        steps: [
          `P = (1/3) × (N × m × v_rms²) / V`,
          `P = (1/3) × (${N} × ${m} × ${v_rms}²) / ${V}`,
          `P = ${formatNumber(P)} Pa`
        ]
      };
    }
  }
];
