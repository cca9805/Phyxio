
import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Cantidad de Movimiento (Momentum) ---
  {
    id: 'momentum-calcular',
    groupId: 'cantidad-movimiento',
    title: 'Calcular Cantidad de Movimiento (p)',
    formula: 'p = m * v',
    variables: [
      { symbol: 'm', label: 'Masa', unit: 'kg' },
      { symbol: 'v', label: 'Velocidad', unit: 'm/s' }
    ],
    output: { symbol: 'p', label: 'Cantidad de Movimiento', unit: 'kg·m/s' },
    resolve: ({ m, v }) => {
      const p = parseFloat(m) * parseFloat(v);
      return { result: { p: formatNumber(p) }, steps: [`p = ${m} * ${v} = ${formatNumber(p)} kg·m/s`] };
    }
  },
  {
    id: 'momentum-masa',
    groupId: 'cantidad-movimiento',
    title: 'Calcular Masa (desde p)',
    formula: 'm = p / v',
    variables: [
      { symbol: 'p', label: 'Cantidad de Movimiento', unit: 'kg·m/s' },
      { symbol: 'v', label: 'Velocidad', unit: 'm/s' }
    ],
    output: { symbol: 'm', label: 'Masa', unit: 'kg' },
    resolve: ({ p, v }) => {
      const speed = parseFloat(v);
      if (speed === 0) return { error: 'La velocidad no puede ser cero.' };
      const m = parseFloat(p) / speed;
      return { result: { m: formatNumber(m) }, steps: [`m = ${p} / ${v} = ${formatNumber(m)} kg`] };
    }
  },
  {
    id: 'momentum-velocidad',
    groupId: 'cantidad-movimiento',
    title: 'Calcular Velocidad (desde p)',
    formula: 'v = p / m',
    variables: [
      { symbol: 'p', label: 'Cantidad de Movimiento', unit: 'kg·m/s' },
      { symbol: 'm', label: 'Masa', unit: 'kg' }
    ],
    output: { symbol: 'v', label: 'Velocidad', unit: 'm/s' },
    resolve: ({ p, m }) => {
      const mass = parseFloat(m);
      if (mass === 0) return { error: 'La masa no puede ser cero.' };
      const v = parseFloat(p) / mass;
      return { result: { v: formatNumber(v) }, steps: [`v = ${p} / ${m} = ${formatNumber(v)} m/s`] };
    }
  },

  // --- Grupo 2: Impulso (Fuerza y Tiempo) ---
  {
    id: 'impulso-calcular',
    groupId: 'impulso',
    title: 'Calcular Impulso (J)',
    formula: 'J = F * Δt',
    variables: [
      { symbol: 'F', label: 'Fuerza Promedio', unit: 'N' },
      { symbol: 'deltaT', label: 'Intervalo de Tiempo (Δt)', unit: 's' }
    ],
    output: { symbol: 'J', label: 'Impulso', unit: 'N·s' },
    resolve: ({ F, deltaT }) => {
      const J = parseFloat(F) * parseFloat(deltaT);
      return { result: { J: formatNumber(J) }, steps: [`J = ${F} * ${deltaT} = ${formatNumber(J)} N·s`] };
    }
  },
  {
    id: 'impulso-fuerza',
    groupId: 'impulso',
    title: 'Calcular Fuerza (desde J)',
    formula: 'F = J / Δt',
    variables: [
      { symbol: 'J', label: 'Impulso', unit: 'N·s' },
      { symbol: 'deltaT', label: 'Intervalo de Tiempo (Δt)', unit: 's' }
    ],
    output: { symbol: 'F', label: 'Fuerza', unit: 'N' },
    resolve: ({ J, deltaT }) => {
      const dt = parseFloat(deltaT);
      if (dt === 0) return { error: 'El intervalo de tiempo no puede ser cero.' };
      const F = parseFloat(J) / dt;
      return { result: { F: formatNumber(F) }, steps: [`F = ${J} / ${deltaT} = ${formatNumber(F)} N`] };
    }
  },
  {
    id: 'impulso-tiempo',
    groupId: 'impulso',
    title: 'Calcular Tiempo (desde J)',
    formula: 'Δt = J / F',
    variables: [
      { symbol: 'J', label: 'Impulso', unit: 'N·s' },
      { symbol: 'F', label: 'Fuerza', unit: 'N' }
    ],
    output: { symbol: 'deltaT', label: 'Intervalo de Tiempo', unit: 's' },
    resolve: ({ J, F }) => {
      const force = parseFloat(F);
      if (force === 0) return { error: 'La fuerza no puede ser cero.' };
      const deltaT = parseFloat(J) / force;
      return { result: { deltaT: formatNumber(deltaT) }, steps: [`Δt = ${J} / ${F} = ${formatNumber(deltaT)} s`] };
    }
  },

  // --- Grupo 3: Teorema del Impulso y la Cantidad de Movimiento ---
  {
    id: 'teorema-impulso-momentum-calcular',
    groupId: 'teorema-impulso-momentum',
    title: 'Calcular Impulso (desde Δp)',
    formula: 'J = m * (vf - vi)',
    variables: [
      { symbol: 'm', label: 'Masa', unit: 'kg' },
      { symbol: 'vi', label: 'Velocidad Inicial', unit: 'm/s' },
      { symbol: 'vf', label: 'Velocidad Final', unit: 'm/s' }
    ],
    output: { symbol: 'J', label: 'Impulso', unit: 'kg·m/s' },
    resolve: ({ m, vf, vi }) => {
      const J = parseFloat(m) * (parseFloat(vf) - parseFloat(vi));
      return { result: { J: formatNumber(J) }, steps: [`J = ${m} * (${vf} - ${vi}) = ${formatNumber(J)} kg·m/s`] };
    }
  },
  {
    id: 'teorema-impulso-momentum-vf',
    groupId: 'teorema-impulso-momentum',
    title: 'Calcular Velocidad Final (vf)',
    formula: 'vf = vi + (J / m)',
    variables: [
      { symbol: 'J', label: 'Impulso', unit: 'kg·m/s' },
      { symbol: 'm', label: 'Masa', unit: 'kg' },
      { symbol: 'vi', label: 'Velocidad Inicial', unit: 'm/s' }
    ],
    output: { symbol: 'vf', label: 'Velocidad Final', unit: 'm/s' },
    resolve: ({ J, m, vi }) => {
      const mass = parseFloat(m);
      if (mass === 0) return { error: 'La masa no puede ser cero.' };
      const vf = parseFloat(vi) + (parseFloat(J) / mass);
      return { result: { vf: formatNumber(vf) }, steps: [`vf = ${vi} + (${J} / ${m}) = ${formatNumber(vf)} m/s`] };
    }
  },
  {
    id: 'teorema-impulso-momentum-vi',
    groupId: 'teorema-impulso-momentum',
    title: 'Calcular Velocidad Inicial (vi)',
    formula: 'vi = vf - (J / m)',
    variables: [
      { symbol: 'J', label: 'Impulso', unit: 'kg·m/s' },
      { symbol: 'm', label: 'Masa', unit: 'kg' },
      { symbol: 'vf', label: 'Velocidad Final', unit: 'm/s' }
    ],
    output: { symbol: 'vi', label: 'Velocidad Inicial', unit: 'm/s' },
    resolve: ({ J, m, vf }) => {
      const mass = parseFloat(m);
      if (mass === 0) return { error: 'La masa no puede ser cero.' };
      const vi = parseFloat(vf) - (parseFloat(J) / mass);
      return { result: { vi: formatNumber(vi) }, steps: [`vi = ${vf} - (${J} / ${m}) = ${formatNumber(vi)} m/s`] };
    }
  },
  {
    id: 'teorema-impulso-momentum-masa',
    groupId: 'teorema-impulso-momentum',
    title: 'Calcular Masa (m)',
    formula: 'm = J / (vf - vi)',
    variables: [
      { symbol: 'J', label: 'Impulso', unit: 'kg·m/s' },
      { symbol: 'vi', label: 'Velocidad Inicial', unit: 'm/s' },
      { symbol: 'vf', label: 'Velocidad Final', unit: 'm/s' }
    ],
    output: { symbol: 'm', label: 'Masa', unit: 'kg' },
    resolve: ({ J, vf, vi }) => {
      const deltaV = parseFloat(vf) - parseFloat(vi);
      if (deltaV === 0) return { error: 'El cambio de velocidad no puede ser cero.' };
      const m = parseFloat(J) / deltaV;
      return { result: { m: formatNumber(m) }, steps: [`m = ${J} / (${vf} - ${vi}) = ${formatNumber(m)} kg`] };
    }
  },

  // --- Grupo 4: Colisión Perfectamente Inelástica ---
  {
    id: 'colision-inelastica-vf',
    groupId: 'colision-inelastica',
    title: 'Calcular Velocidad Final (vf)',
    formula: 'vf = (m1*vi1 + m2*vi2) / (m1+m2)',
    variables: [
      { symbol: 'm1', label: 'Masa 1', unit: 'kg' },
      { symbol: 'vi1', label: 'Vel. Inicial 1', unit: 'm/s' },
      { symbol: 'm2', label: 'Masa 2', unit: 'kg' },
      { symbol: 'vi2', label: 'Vel. Inicial 2', unit: 'm/s' }
    ],
    output: { symbol: 'vf', label: 'Velocidad Final Común', unit: 'm/s' },
    resolve: ({ m1, vi1, m2, vi2 }) => {
      const massSum = parseFloat(m1) + parseFloat(m2);
      if (massSum === 0) return { error: 'La suma de masas no puede ser cero.' };
      const vf = (parseFloat(m1) * parseFloat(vi1) + parseFloat(m2) * parseFloat(vi2)) / massSum;
      return { result: { vf: formatNumber(vf) }, steps: [`vf = (${m1}*${vi1} + ${m2}*${vi2}) / (${m1}+${m2}) = ${formatNumber(vf)} m/s`] };
    }
  },
  {
    id: 'colision-inelastica-m1',
    groupId: 'colision-inelastica',
    title: 'Calcular Masa 1 (m1)',
    formula: 'm1 = m2 * (vf - vi2) / (vi1 - vf)',
    variables: [
      { symbol: 'm2', label: 'Masa 2', unit: 'kg' },
      { symbol: 'vi1', label: 'Vel. Inicial 1', unit: 'm/s' },
      { symbol: 'vi2', label: 'Vel. Inicial 2', unit: 'm/s' },
      { symbol: 'vf', label: 'Velocidad Final Común', unit: 'm/s' }
    ],
    output: { symbol: 'm1', label: 'Masa 1', unit: 'kg' },
    resolve: ({ m2, vi1, vi2, vf }) => {
      const divisor = parseFloat(vi1) - parseFloat(vf);
      if (divisor === 0) return { error: 'La velocidad inicial de la masa 1 no puede ser igual a la velocidad final.' };
      const m1 = parseFloat(m2) * (parseFloat(vf) - parseFloat(vi2)) / divisor;
      return { result: { m1: formatNumber(m1) }, steps: [`m1 = ${m2}(${vf} - ${vi2}) / (${vi1} - ${vf}) = ${formatNumber(m1)} kg`] };
    }
  },

  // --- Grupo 5: Colisión Elástica 1D ---
  {
    id: 'colision-elastica-vfs',
    groupId: 'colision-elastica',
    title: 'Calcular Velocidades Finales',
    formula: 'vf1, vf2',
    variables: [
      { symbol: 'm1', label: 'Masa 1', unit: 'kg' },
      { symbol: 'vi1', label: 'Velocidad Inicial 1', unit: 'm/s' },
      { symbol: 'm2', label: 'Masa 2', unit: 'kg' },
      { symbol: 'vi2', label: 'Velocidad Inicial 2', unit: 'm/s' }
    ],
    outputs: [
      { symbol: 'vf1', label: 'Velocidad Final 1 (vf₁)', unit: 'm/s' },
      { symbol: 'vf2', label: 'Velocidad Final 2 (vf₂)', unit: 'm/s' }
    ],
    resolve: ({ m1, vi1, m2, vi2 }) => {
      const m_sum = parseFloat(m1) + parseFloat(m2);
      if (m_sum === 0) return { error: 'La suma de las masas no puede ser cero.' };
      const vf1 = ((parseFloat(m1) - parseFloat(m2)) / m_sum) * parseFloat(vi1) + ((2 * parseFloat(m2)) / m_sum) * parseFloat(vi2);
      const vf2 = ((2 * parseFloat(m1)) / m_sum) * parseFloat(vi1) + ((parseFloat(m2) - parseFloat(m1)) / m_sum) * parseFloat(vi2);
      return { result: { vf1: formatNumber(vf1), vf2: formatNumber(vf2) }, steps: [`vf₁ = ${formatNumber(vf1)} m/s`, `vf₂ = ${formatNumber(vf2)} m/s`] };
    }
  },

  // --- Grupo 6: Coeficiente de Restitución ---
  {
    id: 'coeficiente-restitucion-calcular',
    groupId: 'coeficiente-restitucion',
    title: 'Calcular Coeficiente (e)',
    formula: 'e = (vf2 - vf1) / (vi1 - vi2)',
    variables: [
      { symbol: 'vi1', label: 'Vel. Inicial 1', unit: 'm/s' },
      { symbol: 'vi2', label: 'Vel. Inicial 2', unit: 'm/s' },
      { symbol: 'vf1', label: 'Vel. Final 1', unit: 'm/s' },
      { symbol: 'vf2', label: 'Vel. Final 2', unit: 'm/s' }
    ],
    output: { symbol: 'e', label: 'Coeficiente de Restitución', unit: '' },
    resolve: ({ vi1, vi2, vf1, vf2 }) => {
      const delta_vi = parseFloat(vi1) - parseFloat(vi2);
      if (delta_vi === 0) return { error: 'La velocidad relativa inicial no puede ser cero.' };
      const e = (parseFloat(vf2) - parseFloat(vf1)) / delta_vi;
      return { result: { e: formatNumber(e) }, steps: [`e = (${vf2} - ${vf1}) / (${vi1} - ${vi2}) = ${formatNumber(e)}`] };
    }
  }
];
