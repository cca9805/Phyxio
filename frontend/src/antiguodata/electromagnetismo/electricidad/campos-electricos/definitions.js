import { formatNumber } from '../../../../utils/formatNumber';

const k = 8.99e9; // Constante de Coulomb en N·m²/C²

export const definitions = [
  // --- Campo Eléctrico desde Fuerza ---
  {
    id: 'campo-electrico-fuerza',
    groupId: 'campo-electrico-fuerza',
    title: 'Campo desde Fuerza',
    isFundamental: true,
    formula: 'E = F / q',
    variables: [
      { symbol: 'F', label: 'Fuerza (N)', unit: 'N' },
      { symbol: 'q', label: 'Carga (C)', unit: 'C' }
    ],
    output: { symbol: 'E', label: 'Campo Eléctrico (N/C)', unit: 'N/C' },
    resolve: ({ F, q }) => {
      const E = parseFloat(F) / parseFloat(q);
      return { result: { E: formatNumber(E) }, steps: [`E = ${F} / ${q} = ${formatNumber(E)} N/C`] };
    }
  },

  // --- Fuerza desde Campo ---
  {
    id: 'fuerza-desde-campo',
    groupId: 'campo-electrico-fuerza',
    title: 'Fuerza desde Campo',
    isFundamental: false,
    formula: 'F = E * q',
    variables: [
      { symbol: 'E', label: 'Campo Eléctrico (N/C)', unit: 'N/C' },
      { symbol: 'q', label: 'Carga (C)', unit: 'C' }
    ],
    output: { symbol: 'F', label: 'Fuerza (N)', unit: 'N' },
    resolve: ({ E, q }) => {
      const F = parseFloat(E) * parseFloat(q);
      return { result: { F: formatNumber(F) }, steps: [`F = ${E} * ${q} = ${formatNumber(F)} N`] };
    }
  },

  // --- Carga desde Fuerza y Campo ---
  {
    id: 'carga-desde-fuerza-campo',
    groupId: 'campo-electrico-fuerza',
    title: 'Carga desde Fuerza y Campo',
    isFundamental: false,
    formula: 'q = F / E',
    variables: [
      { symbol: 'F', label: 'Fuerza (N)', unit: 'N' },
      { symbol: 'E', label: 'Campo Eléctrico (N/C)', unit: 'N/C' }
    ],
    output: { symbol: 'q', label: 'Carga (C)', unit: 'C' },
    resolve: ({ F, E }) => {
      const q = parseFloat(F) / parseFloat(E);
      return { result: { q: formatNumber(q) }, steps: [`q = ${F} / ${E} = ${formatNumber(q)} C`] };
    }
  },

  // --- Campo de Carga Puntual ---
  {
    id: 'campo-puntual',
    groupId: 'campo-puntual',
    title: 'Campo de Carga Puntual',
    isFundamental: true,
    formula: 'E = k * |q| / r²',
    variables: [
      { symbol: 'q', label: 'Carga (C)', unit: 'C' },
      { symbol: 'r', label: 'Distancia (m)', unit: 'm' }
    ],
    output: { symbol: 'E', label: 'Campo Eléctrico (N/C)', unit: 'N/C' },
    resolve: ({ q, r }) => {
      const E = k * Math.abs(parseFloat(q)) / (parseFloat(r) ** 2);
      return { result: { E: formatNumber(E) }, steps: [`E = (${formatNumber(k)} * |${q}|) / ${r}² = ${formatNumber(E)} N/C`] };
    }
  },

  // --- Distancia desde Campo Puntual ---
  {
    id: 'distancia-campo-puntual',
    groupId: 'campo-puntual',
    title: 'Distancia desde Campo',
    isFundamental: false,
    formula: 'r = sqrt(k * |q| / E)',
    variables: [
      { symbol: 'q', label: 'Carga (C)', unit: 'C' },
      { symbol: 'E', label: 'Campo Eléctrico (N/C)', unit: 'N/C' }
    ],
    output: { symbol: 'r', label: 'Distancia (m)', unit: 'm' },
    resolve: ({ q, E }) => {
      const r = Math.sqrt(k * Math.abs(parseFloat(q)) / parseFloat(E));
      return { result: { r: formatNumber(r) }, steps: [`r = sqrt((${formatNumber(k)} * |${q}|) / ${E}) = ${formatNumber(r)} m`] };
    }
  },

  // --- Carga desde Campo Puntual ---
  {
    id: 'carga-campo-puntual',
    groupId: 'campo-puntual',
    title: 'Carga desde Campo Puntual',
    isFundamental: false,
    formula: '|q| = (E * r²) / k',
    variables: [
        { symbol: 'E', label: 'Campo Eléctrico (N/C)', unit: 'N/C' },
        { symbol: 'r', label: 'Distancia (m)', unit: 'm' }
    ],
    output: { symbol: '|q|', label: 'Carga magnitud (C)', unit: 'C' },
    resolve: ({ E, r }) => {
        const q = (parseFloat(E) * (parseFloat(r)**2)) / k;
        return { result: { '|q|': formatNumber(q) }, steps: [`|q| = (${E} * ${r}²) / ${formatNumber(k)} = ${formatNumber(q)} C`] };
    }
  },

  // --- Momento Dipolar ---
  {
    id: 'momento-dipolar',
    groupId: 'momento-dipolar',
    title: 'Momento Dipolar',
    isFundamental: true,
    formula: 'p = q * d',
    variables: [
      { symbol: 'q', label: 'Carga (C)', unit: 'C' },
      { symbol: 'd', label: 'Distancia (m)', unit: 'm' }
    ],
    output: { symbol: 'p', label: 'Momento Dipolar (C·m)', unit: 'C·m' },
    resolve: ({ q, d }) => {
      const p = parseFloat(q) * parseFloat(d);
      return { result: { p: formatNumber(p) }, steps: [`p = ${q} * ${d} = ${formatNumber(p)} C·m`] };
    }
  },

  // --- Carga desde Momento Dipolar ---
  {
    id: 'carga-momento-dipolar',
    groupId: 'momento-dipolar',
    title: 'Carga desde Momento Dipolar',
    isFundamental: false,
    formula: 'q = p / d',
    variables: [
      { symbol: 'p', label: 'Momento Dipolar (C·m)', unit: 'C·m' },
      { symbol: 'd', label: 'Distancia (m)', unit: 'm' }
    ],
    output: { symbol: 'q', label: 'Carga (C)', unit: 'C' },
    resolve: ({ p, d }) => {
      const q = parseFloat(p) / parseFloat(d);
      return { result: { q: formatNumber(q) }, steps: [`q = ${p} / ${d} = ${formatNumber(q)} C`] };
    }
  },

  // --- Distancia desde Momento Dipolar ---
  {
    id: 'distancia-momento-dipolar',
    groupId: 'momento-dipolar',
    title: 'Distancia desde Momento Dipolar',
    isFundamental: false,
    formula: 'd = p / q',
    variables: [
      { symbol: 'p', label: 'Momento Dipolar (C·m)', unit: 'C·m' },
      { symbol: 'q', label: 'Carga (C)', unit: 'C' }
    ],
    output: { symbol: 'd', label: 'Distancia (m)', unit: 'm' },
    resolve: ({ p, q }) => {
      const d = parseFloat(p) / parseFloat(q);
      return { result: { d: formatNumber(d) }, steps: [`d = ${p} / ${q} = ${formatNumber(d)} m`] };
    }
  }
];
