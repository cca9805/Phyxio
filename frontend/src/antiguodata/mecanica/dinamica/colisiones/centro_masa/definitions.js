import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Posición del Centro de Masa ---
  {
    id: 'cm-posicion-1d',
    groupId: 'centro-masa-posicion',
    title: 'Centro de Masa en 1D',
    formula: 'xₒₘ = (m₁x₁ + m₂x₂)/(m₁+m₂)',
    variables: [
      { symbol: 'm_1', label: 'Masa 1 (m₁)', unit: 'kg' },
      { symbol: 'x_1', label: 'Posición 1 (x₁)', unit: 'm' },
      { symbol: 'm_2', label: 'Masa 2 (m₂)', unit: 'kg' },
      { symbol: 'x_2', label: 'Posición 2 (x₂)', unit: 'm' }
    ],
    output: { symbol: 'x_cm', label: 'Centro de masa (xₒₘ)', unit: 'm' },
    resolve: ({ m_1, x_1, m_2, x_2 }) => {
      const x_cm = (parseFloat(m_1) * parseFloat(x_1) + parseFloat(m_2) * parseFloat(x_2)) / (parseFloat(m_1) + parseFloat(m_2));
      return { 
        result: { x_cm: formatNumber(x_cm) }, 
        steps: [`xₒₘ = (${m_1}×${x_1} + ${m_2}×${x_2})/(${m_1}+${m_2}) = ${formatNumber(x_cm)} m`] 
      };
    }
  },

  // --- Grupo 2: Velocidad del Centro de Masa ---
  {
    id: 'cm-velocidad',
    groupId: 'centro-masa-velocidad',
    title: 'Velocidad del Centro de Masa',
    formula: 'vₒₘ = (m₁v₁ + m₂v₂)/(m₁+m₂)',
    variables: [
      { symbol: 'm_1', label: 'Masa 1 (m₁)', unit: 'kg' },
      { symbol: 'v_1', label: 'Velocidad 1 (v₁)', unit: 'm/s' },
      { symbol: 'm_2', label: 'Masa 2 (m₂)', unit: 'kg' },
      { symbol: 'v_2', label: 'Velocidad 2 (v₂)', unit: 'm/s' }
    ],
    output: { symbol: 'v_cm', label: 'Velocidad CM (vₒₘ)', unit: 'm/s' },
    resolve: ({ m_1, v_1, m_2, v_2 }) => {
      const v_cm = (parseFloat(m_1) * parseFloat(v_1) + parseFloat(m_2) * parseFloat(v_2)) / (parseFloat(m_1) + parseFloat(m_2));
      return { 
        result: { v_cm: formatNumber(v_cm) }, 
        steps: [`vₒₘ = (${m_1}×${v_1} + ${m_2}×${v_2})/(${m_1}+${m_2}) = ${formatNumber(v_cm)} m/s`] 
      };
    }
  },

  // --- Grupo 3: Momento Total ---
  {
    id: 'cm-momento-total',
    groupId: 'centro-masa-momento',
    title: 'Momento Total del Sistema',
    formula: 'pₜₒₜₐₗ = Mₜₒₜₐₗ × vₒₘ',
    variables: [
      { symbol: 'M_total', label: 'Masa total (Mₜₒₜₐₗ)', unit: 'kg' },
      { symbol: 'v_cm', label: 'Velocidad CM (vₒₘ)', unit: 'm/s' }
    ],
    output: { symbol: 'p_total', label: 'Momento total (pₜₒₜₐₗ)', unit: 'kg·m/s' },
    resolve: ({ M_total, v_cm }) => {
      const p_total = parseFloat(M_total) * parseFloat(v_cm);
      return { 
        result: { p_total: formatNumber(p_total) }, 
        steps: [`pₜₒₜₐₗ = ${M_total}×${v_cm} = ${formatNumber(p_total)} kg·m/s`] 
      };
    }
  },

  // --- Grupo 4: Segunda Ley de Newton para CM ---
  {
    id: 'cm-aceleracion',
    groupId: 'centro-masa-segunda-ley',
    title: 'Aceleración del Centro de Masa',
    formula: 'aₒₘ = Fₑₓₜ / Mₜₒₜₐₗ',
    variables: [
      { symbol: 'F_ext', label: 'Fuerza externa (Fₑₓₜ)', unit: 'N' },
      { symbol: 'M_total', label: 'Masa total (Mₜₒₜₐₗ)', unit: 'kg' }
    ],
    output: { symbol: 'a_cm', label: 'Aceleración CM (aₒₘ)', unit: 'm/s²' },
    resolve: ({ F_ext, M_total }) => {
      const mass = parseFloat(M_total);
      if (mass === 0) return { error: "La masa total no puede ser cero." };
      const a_cm = parseFloat(F_ext) / mass;
      return { 
        result: { a_cm: formatNumber(a_cm) }, 
        steps: [`aₒₘ = ${F_ext}/${M_total} = ${formatNumber(a_cm)} m/s²`] 
      };
    }
  },
  {
    id: 'cm-fuerza-externa',
    groupId: 'centro-masa-segunda-ley',
    title: 'Fuerza Externa Neta',
    formula: 'Fₑₓₜ = Mₜₒₜₐₗ × aₒₘ',
    variables: [
      { symbol: 'M_total', label: 'Masa total (Mₜₒₜₐₗ)', unit: 'kg' },
      { symbol: 'a_cm', label: 'Aceleración CM (aₒₘ)', unit: 'm/s²' }
    ],
    output: { symbol: 'F_ext', label: 'Fuerza externa (Fₑₓₜ)', unit: 'N' },
    resolve: ({ M_total, a_cm }) => {
      const F_ext = parseFloat(M_total) * parseFloat(a_cm);
      return { 
        result: { F_ext: formatNumber(F_ext) }, 
        steps: [`Fₑₓₜ = ${M_total}×${a_cm} = ${formatNumber(F_ext)} N`] 
      };
    }
  }
];
