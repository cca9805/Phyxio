import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Colisión Perfectamente Inelástica ---
  {
    id: 'colin-velocidad-final',
    groupId: 'colisiones-inelasticas-perfecta',
    title: 'Velocidad Final Conjunta',
    formula: 'vf = (m₁v₁ᵢ + m₂v₂ᵢ)/(m₁+m₂)',
    variables: [
      { symbol: 'm_1', label: 'Masa 1 (m₁)', unit: 'kg' },
      { symbol: 'v_1i', label: 'Velocidad inicial 1 (v₁ᵢ)', unit: 'm/s' },
      { symbol: 'm_2', label: 'Masa 2 (m₂)', unit: 'kg' },
      { symbol: 'v_2i', label: 'Velocidad inicial 2 (v₂ᵢ)', unit: 'm/s' }
    ],
    output: { symbol: 'v_f', label: 'Velocidad final (vf)', unit: 'm/s' },
    resolve: ({ m_1, v_1i, m_2, v_2i }) => {
      const v_f = (parseFloat(m_1) * parseFloat(v_1i) + parseFloat(m_2) * parseFloat(v_2i)) / (parseFloat(m_1) + parseFloat(m_2));
      return { 
        result: { v_f: formatNumber(v_f) }, 
        steps: [`vf = (${m_1}×${v_1i} + ${m_2}×${v_2i})/(${m_1}+${m_2}) = ${formatNumber(v_f)} m/s`] 
      };
    }
  },

  // --- Grupo 2: Energía Perdida ---
  {
    id: 'colin-energia-perdida',
    groupId: 'colisiones-inelasticas-energia',
    title: 'Energía Perdida',
    formula: 'ΔK = Kᵢ - Kf',
    variables: [
      { symbol: 'm_1', label: 'Masa 1 (m₁)', unit: 'kg' },
      { symbol: 'v_1i', label: 'Velocidad inicial 1 (v₁ᵢ)', unit: 'm/s' },
      { symbol: 'm_2', label: 'Masa 2 (m₂)', unit: 'kg' },
      { symbol: 'v_2i', label: 'Velocidad inicial 2 (v₂ᵢ)', unit: 'm/s' },
      { symbol: 'v_f', label: 'Velocidad final (vf)', unit: 'm/s' }
    ],
    output: { symbol: 'Delta_K', label: 'Energía perdida (ΔK)', unit: 'J' },
    resolve: ({ m_1, v_1i, m_2, v_2i, v_f }) => {
      const K_i = 0.5 * parseFloat(m_1) * parseFloat(v_1i) ** 2 + 0.5 * parseFloat(m_2) * parseFloat(v_2i) ** 2;
      const K_f = 0.5 * (parseFloat(m_1) + parseFloat(m_2)) * parseFloat(v_f) ** 2;
      const Delta_K = K_i - K_f;
      return { 
        result: { Delta_K: formatNumber(Delta_K) }, 
        steps: [`Kᵢ = ${formatNumber(K_i)} J`, `Kf = ${formatNumber(K_f)} J`, `ΔK = ${formatNumber(Delta_K)} J`] 
      };
    }
  },

  // --- Grupo 3: Coeficiente de Restitución ---
  {
    id: 'colin-coeficiente',
    groupId: 'colisiones-inelasticas-coeficiente',
    title: 'Coeficiente de Restitución',
    formula: 'e = |v₂f - v₁f| / |v₁ᵢ - v₂ᵢ|',
    variables: [
      { symbol: 'v_1i', label: 'Velocidad inicial 1 (v₁ᵢ)', unit: 'm/s' },
      { symbol: 'v_2i', label: 'Velocidad inicial 2 (v₂ᵢ)', unit: 'm/s' },
      { symbol: 'v_1f', label: 'Velocidad final 1 (v₁f)', unit: 'm/s' },
      { symbol: 'v_2f', label: 'Velocidad final 2 (v₂f)', unit: 'm/s' }
    ],
    output: { symbol: 'e', label: 'Coeficiente (e)', unit: '' },
    resolve: ({ v_1i, v_2i, v_1f, v_2f }) => {
      const e = Math.abs(parseFloat(v_2f) - parseFloat(v_1f)) / Math.abs(parseFloat(v_1i) - parseFloat(v_2i));
      return { 
        result: { e: formatNumber(e) }, 
        steps: [`e = |${v_2f}-${v_1f}| / |${v_1i}-${v_2i}| = ${formatNumber(e)}`] 
      };
    }
  }
];
