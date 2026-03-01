import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Velocidades Finales en Colisión Elástica ---
  {
    id: 'colel-velocidad-1',
    groupId: 'colisiones-elasticas-velocidades',
    title: 'Velocidad Final Objeto 1',
    formula: 'v₁f = [(m₁-m₂)v₁ᵢ + 2m₂v₂ᵢ]/(m₁+m₂)',
    variables: [
      { symbol: 'm_1', label: 'Masa 1 (m₁)', unit: 'kg' },
      { symbol: 'm_2', label: 'Masa 2 (m₂)', unit: 'kg' },
      { symbol: 'v_1i', label: 'Velocidad inicial 1 (v₁ᵢ)', unit: 'm/s' },
      { symbol: 'v_2i', label: 'Velocidad inicial 2 (v₂ᵢ)', unit: 'm/s' }
    ],
    output: { symbol: 'v_1f', label: 'Velocidad final 1 (v₁f)', unit: 'm/s' },
    resolve: ({ m_1, m_2, v_1i, v_2i }) => {
      const m1 = parseFloat(m_1), m2 = parseFloat(m_2);
      const v1i = parseFloat(v_1i), v2i = parseFloat(v_2i);
      const v_1f = ((m1 - m2) * v1i + 2 * m2 * v2i) / (m1 + m2);
      return { 
        result: { v_1f: formatNumber(v_1f) }, 
        steps: [`v₁f = [(${m1}-${m2})×${v1i} + 2×${m2}×${v2i}]/(${m1}+${m2}) = ${formatNumber(v_1f)} m/s`] 
      };
    }
  },
  {
    id: 'colel-velocidad-2',
    groupId: 'colisiones-elasticas-velocidades',
    title: 'Velocidad Final Objeto 2',
    formula: 'v₂f = [(m₂-m₁)v₂ᵢ + 2m₁v₁ᵢ]/(m₁+m₂)',
    variables: [
      { symbol: 'm_1', label: 'Masa 1 (m₁)', unit: 'kg' },
      { symbol: 'm_2', label: 'Masa 2 (m₂)', unit: 'kg' },
      { symbol: 'v_1i', label: 'Velocidad inicial 1 (v₁ᵢ)', unit: 'm/s' },
      { symbol: 'v_2i', label: 'Velocidad inicial 2 (v₂ᵢ)', unit: 'm/s' }
    ],
    output: { symbol: 'v_2f', label: 'Velocidad final 2 (v₂f)', unit: 'm/s' },
    resolve: ({ m_1, m_2, v_1i, v_2i }) => {
      const m1 = parseFloat(m_1), m2 = parseFloat(m_2);
      const v1i = parseFloat(v_1i), v2i = parseFloat(v_2i);
      const v_2f = ((m2 - m1) * v2i + 2 * m1 * v1i) / (m1 + m2);
      return { 
        result: { v_2f: formatNumber(v_2f) }, 
        steps: [`v₂f = [(${m2}-${m1})×${v2i} + 2×${m1}×${v1i}]/(${m1}+${m2}) = ${formatNumber(v_2f)} m/s`] 
      };
    }
  },

  {
    id: 'colel-momento-conservacion',
    groupId: 'colisiones-elasticas-velocidades',
    title: 'Conservación del Momento (despeje v₂f)',
    formula: 'v₂f = (m₁v₁ᵢ + m₂v₂ᵢ - m₁v₁f)/m₂',
    variables: [
      { symbol: 'm_1', label: 'Masa 1 (m₁)', unit: 'kg' },
      { symbol: 'v_1i', label: 'Velocidad inicial 1 (v₁ᵢ)', unit: 'm/s' },
      { symbol: 'm_2', label: 'Masa 2 (m₂)', unit: 'kg' },
      { symbol: 'v_2i', label: 'Velocidad inicial 2 (v₂ᵢ)', unit: 'm/s' },
      { symbol: 'v_1f', label: 'Velocidad final 1 (v₁f)', unit: 'm/s' }
    ],
    output: { symbol: 'v_2f', label: 'Velocidad final 2 (v₂f)', unit: 'm/s' },
    resolve: ({ m_1, v_1i, m_2, v_2i, v_1f }) => {
      const m2 = parseFloat(m_2);
      if (m2 === 0) return { error: "La masa 2 no puede ser cero." };
      const v_2f = (parseFloat(m_1) * parseFloat(v_1i) + m2 * parseFloat(v_2i) - parseFloat(m_1) * parseFloat(v_1f)) / m2;
      return { 
        result: { v_2f: formatNumber(v_2f) }, 
        steps: [`v₂f = (${m_1}×${v_1i} + ${m_2}×${v_2i} - ${m_1}×${v_1f})/${m_2} = ${formatNumber(v_2f)} m/s`] 
      };
    }
  },

  // --- Grupo 2: Conservación de Energía ---
  {
    id: 'colel-energia-inicial',
    groupId: 'colisiones-elasticas-energia',
    title: 'Energía Cinética Inicial',
    formula: 'Kᵢ = ½m₁v₁ᵢ² + ½m₂v₂ᵢ²',
    variables: [
      { symbol: 'm_1', label: 'Masa 1 (m₁)', unit: 'kg' },
      { symbol: 'v_1i', label: 'Velocidad inicial 1 (v₁ᵢ)', unit: 'm/s' },
      { symbol: 'm_2', label: 'Masa 2 (m₂)', unit: 'kg' },
      { symbol: 'v_2i', label: 'Velocidad inicial 2 (v₂ᵢ)', unit: 'm/s' }
    ],
    output: { symbol: 'K_i', label: 'Energía inicial (Kᵢ)', unit: 'J' },
    resolve: ({ m_1, v_1i, m_2, v_2i }) => {
      const K_i = 0.5 * parseFloat(m_1) * parseFloat(v_1i) ** 2 + 0.5 * parseFloat(m_2) * parseFloat(v_2i) ** 2;
      return { 
        result: { K_i: formatNumber(K_i) }, 
        steps: [`Kᵢ = ½×${m_1}×${v_1i}² + ½×${m_2}×${v_2i}² = ${formatNumber(K_i)} J`] 
      };
    }
  },
  {
    id: 'colel-energia-final',
    groupId: 'colisiones-elasticas-energia',
    title: 'Energía Cinética Final',
    formula: 'Kf = ½m₁v₁f² + ½m₂v₂f²',
    variables: [
      { symbol: 'm_1', label: 'Masa 1 (m₁)', unit: 'kg' },
      { symbol: 'v_1f', label: 'Velocidad final 1 (v₁f)', unit: 'm/s' },
      { symbol: 'm_2', label: 'Masa 2 (m₂)', unit: 'kg' },
      { symbol: 'v_2f', label: 'Velocidad final 2 (v₂f)', unit: 'm/s' }
    ],
    output: { symbol: 'K_f', label: 'Energía final (Kf)', unit: 'J' },
    resolve: ({ m_1, v_1f, m_2, v_2f }) => {
      const K_f = 0.5 * parseFloat(m_1) * parseFloat(v_1f) ** 2 + 0.5 * parseFloat(m_2) * parseFloat(v_2f) ** 2;
      return { 
        result: { K_f: formatNumber(K_f) }, 
        steps: [`Kf = ½×${m_1}×${v_1f}² + ½×${m_2}×${v_2f}² = ${formatNumber(K_f)} J`] 
      };
    }
  }
];
