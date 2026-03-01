import { formatNumber } from '../../../../utils/formatNumber';

const k = 8.99e9; // Constante de Coulomb en N·m²/C²

export const definitions = [
  // --- Grupo 1: Potencial de Carga Puntual ---
  {
    id: 'potencial-puntual-v',
    groupId: 'potencial_puntual',
    title: 'Calcular Potencial (V)',
    formula: 'V = k * q / r',
    variables: [
      { symbol: 'q', label: 'Carga', unit: 'C' },
      { symbol: 'r', label: 'Distancia', unit: 'm' }
    ],
    output: { symbol: 'V', label: 'Potencial Eléctrico', unit: 'V' },
    resolve: ({ q, r }) => {
      const V = k * parseFloat(q) / parseFloat(r);
      return { result: { V: formatNumber(V) }, steps: [`V = (${formatNumber(k)} * ${q}) / ${r} = ${formatNumber(V)} V`] };
    }
  },
  {
    id: 'potencial-puntual-q',
    groupId: 'potencial_puntual',
    title: 'Calcular Carga (q)',
    formula: 'q = V * r / k',
    variables: [
      { symbol: 'V', label: 'Potencial Eléctrico', unit: 'V' },
      { symbol: 'r', label: 'Distancia', unit: 'm' }
    ],
    output: { symbol: 'q', label: 'Carga', unit: 'C' },
    resolve: ({ V, r }) => {
      const q = (parseFloat(V) * parseFloat(r)) / k;
      return { result: { q: formatNumber(q) }, steps: [`q = (${V} * ${r}) / ${formatNumber(k)} = ${formatNumber(q)} C`] };
    }
  },
  {
    id: 'potencial-puntual-r',
    groupId: 'potencial_puntual',
    title: 'Calcular Distancia (r)',
    formula: 'r = k * q / V',
    variables: [
      { symbol: 'q', label: 'Carga', unit: 'C' },
      { symbol: 'V', label: 'Potencial Eléctrico', unit: 'V' }
    ],
    output: { symbol: 'r', label: 'Distancia', unit: 'm' },
    resolve: ({ q, V }) => {
      const r = k * parseFloat(q) / parseFloat(V);
      return { result: { r: formatNumber(r) }, steps: [`r = (${formatNumber(k)} * ${q}) / ${V} = ${formatNumber(r)} m`] };
    }
  },

  // --- Grupo 2: Energía Potencial Eléctrica ---
  {
    id: 'energia-potencial-u',
    groupId: 'energia_potencial_sistema',
    title: 'Calcular Energía Potencial (U)',
    formula: 'U = k * (q₁ * q₂) / r',
    variables: [
      { symbol: 'q₁', label: 'Carga 1', unit: 'C' },
      { symbol: 'q₂', label: 'Carga 2', unit: 'C' },
      { symbol: 'r', label: 'Distancia', unit: 'm' }
    ],
    output: { symbol: 'U', label: 'Energía Potencial', unit: 'J' },
    resolve: ({ 'q₁': q1, 'q₂': q2, r }) => {
      const U = k * (parseFloat(q1) * parseFloat(q2)) / parseFloat(r);
      return { result: { U: formatNumber(U) }, steps: [`U = (${formatNumber(k)} * ${q1} * ${q2}) / ${r} = ${formatNumber(U)} J`] };
    }
  },
  {
    id: 'energia-potencial-r',
    groupId: 'energia_potencial_sistema',
    title: 'Calcular Distancia (r)',
    formula: 'r = k * (q₁ * q₂) / U',
    variables: [
      { symbol: 'q₁', label: 'Carga 1', unit: 'C' },
      { symbol: 'q₂', label: 'Carga 2', unit: 'C' },
      { symbol: 'U', label: 'Energía Potencial', unit: 'J' }
    ],
    output: { symbol: 'r', label: 'Distancia', unit: 'm' },
    resolve: ({ 'q₁': q1, 'q₂': q2, U }) => {
      const r = k * (parseFloat(q1) * parseFloat(q2)) / parseFloat(U);
      return { result: { r: formatNumber(r) }, steps: [`r = (${formatNumber(k)} * ${q1} * ${q2}) / ${U} = ${formatNumber(r)} m`] };
    }
  },
  {
    id: 'energia-potencial-q',
    groupId: 'energia_potencial_sistema',
    title: 'Calcular Carga (q)',
    formula: 'q₁ = U * r / (k * q₂)',
    variables: [
      { symbol: 'U', label: 'Energía Potencial', unit: 'J' },
      { symbol: 'r', label: 'Distancia', unit: 'm' },
      { symbol: 'q₂', label: 'Otra Carga (q₂)', unit: 'C' }
    ],
    output: { symbol: 'q₁', label: 'Carga (q₁)', unit: 'C' },
    resolve: ({ U, r, 'q₂': q2 }) => {
      const q1 = (parseFloat(U) * parseFloat(r)) / (k * parseFloat(q2));
      return { result: { 'q₁': formatNumber(q1) }, steps: [`q₁ = (${U} * ${r}) / (${formatNumber(k)} * ${q2}) = ${formatNumber(q1)} C`] };
    }
  },

  // --- Grupo 3: Diferencia de Potencial y Energía ---
  {
    id: 'potencial-energia-dv',
    groupId: 'potencial_energia',
    title: 'Calcular Diferencia de Potencial (ΔV)',
    formula: 'ΔV = ΔU / q',
    variables: [
      { symbol: 'ΔU', label: 'Cambio de Energía', unit: 'J' },
      { symbol: 'q', label: 'Carga', unit: 'C' }
    ],
    output: { symbol: 'ΔV', label: 'Diferencia de Potencial', unit: 'V' },
    resolve: ({ 'ΔU': deltaU, q }) => {
      const dV = parseFloat(deltaU) / parseFloat(q);
      return { result: { 'ΔV': formatNumber(dV) }, steps: [`ΔV = ${deltaU} / ${q} = ${formatNumber(dV)} V`] };
    }
  },
  {
    id: 'potencial-energia-du',
    groupId: 'potencial_energia',
    title: 'Calcular Cambio de Energía (ΔU)',
    formula: 'ΔU = ΔV * q',
    variables: [
      { symbol: 'ΔV', label: 'Diferencia de Potencial', unit: 'V' },
      { symbol: 'q', label: 'Carga', unit: 'C' }
    ],
    output: { symbol: 'ΔU', label: 'Cambio de Energía', unit: 'J' },
    resolve: ({ 'ΔV': deltaV, q }) => {
      const dU = parseFloat(deltaV) * parseFloat(q);
      return { result: { 'ΔU': formatNumber(dU) }, steps: [`ΔU = ${deltaV} * ${q} = ${formatNumber(dU)} J`] };
    }
  },
  {
    id: 'potencial-energia-q',
    groupId: 'potencial_energia',
    title: 'Calcular Carga (q)',
    formula: 'q = ΔU / ΔV',
    variables: [
      { symbol: 'ΔU', label: 'Cambio de Energía', unit: 'J' },
      { symbol: 'ΔV', label: 'Diferencia de Potencial', unit: 'V' }
    ],
    output: { symbol: 'q', label: 'Carga', unit: 'C' },
    resolve: ({ 'ΔU': deltaU, 'ΔV': deltaV }) => {
      const q = parseFloat(deltaU) / parseFloat(deltaV);
      return { result: { q: formatNumber(q) }, steps: [`q = ${deltaU} / ${deltaV} = ${formatNumber(q)} C`] };
    }
  },

  // --- Grupo 4: Potencial en Campo Uniforme ---
  {
    id: 'potencial-campo-dv',
    groupId: 'potencial_campo_uniforme',
    title: 'Calcular Diferencia de Potencial (ΔV)',
    formula: 'ΔV = -E * d',
    variables: [
      { symbol: 'E', label: 'Campo Eléctrico', unit: 'N/C' },
      { symbol: 'd', label: 'Distancia', unit: 'm' }
    ],
    output: { symbol: 'ΔV', label: 'Diferencia de Potencial', unit: 'V' },
    resolve: ({ E, d }) => {
      const dV = -parseFloat(E) * parseFloat(d);
      return { result: { 'ΔV': formatNumber(dV) }, steps: [`ΔV = -(${E} * ${d}) = ${formatNumber(dV)} V`] };
    }
  },
  {
    id: 'potencial-campo-e',
    groupId: 'potencial_campo_uniforme',
    title: 'Calcular Campo Eléctrico (E)',
    formula: 'E = -ΔV / d',
    variables: [
      { symbol: 'ΔV', label: 'Diferencia de Potencial', unit: 'V' },
      { symbol: 'd', label: 'Distancia', unit: 'm' }
    ],
    output: { symbol: 'E', label: 'Campo Eléctrico', unit: 'N/C' },
    resolve: ({ 'ΔV': deltaV, d }) => {
      const E = -parseFloat(deltaV) / parseFloat(d);
      return { result: { E: formatNumber(E) }, steps: [`E = -(${deltaV} / ${d}) = ${formatNumber(E)} N/C`] };
    }
  },
  {
    id: 'potencial-campo-d',
    groupId: 'potencial_campo_uniforme',
    title: 'Calcular Distancia (d)',
    formula: 'd = -ΔV / E',
    variables: [
      { symbol: 'ΔV', label: 'Diferencia de Potencial', unit: 'V' },
      { symbol: 'E', label: 'Campo Eléctrico', unit: 'N/C' }
    ],
    output: { symbol: 'd', label: 'Distancia', unit: 'm' },
    resolve: ({ 'ΔV': deltaV, E }) => {
      const d = -parseFloat(deltaV) / parseFloat(E);
      return { result: { d: formatNumber(d) }, steps: [`d = -(${deltaV} / ${E}) = ${formatNumber(d)} m`] };
    }
  }
];