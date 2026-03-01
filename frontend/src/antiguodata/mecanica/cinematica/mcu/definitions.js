import { formatNumber } from '../../../../utils/formatNumber';

const PI = Math.PI;

export const definitions = [
  // Grupo: Periodo y Frecuencia
  {
    id: 'mcu-frecuencia-desde-periodo',
    groupId: 'mcu-periodo-frecuencia',
    title: 'Calcular Frecuencia (dado el Período)',
    formula: 'f = 1 / T',
    variables: [
      { symbol: 'T', label: 'Período (T)', unit: 's' }
    ],
    output: { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' },
    resolve: ({ T }) => {
      const numT = parseFloat(T);
      if (numT === 0) return { error: "El período no puede ser cero." };
      const f = 1 / numT;
      return { result: { f: formatNumber(f) }, steps: [`f = 1 / ${formatNumber(numT)} = ${formatNumber(f)} Hz`] };
    }
  },
  {
    id: 'mcu-periodo-desde-frecuencia',
    groupId: 'mcu-periodo-frecuencia',
    title: 'Calcular Período (dada la Frecuencia)',
    formula: 'T = 1 / f',
    variables: [
      { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' }
    ],
    output: { symbol: 'T', label: 'Período (T)', unit: 's' },
    resolve: ({ f }) => {
      const numF = parseFloat(f);
      if (numF === 0) return { error: "La frecuencia no puede ser cero." };
      const T = 1 / numF;
      return { result: { T: formatNumber(T) }, steps: [`T = 1 / ${formatNumber(numF)} = ${formatNumber(T)} s`] };
    }
  },

  // Grupo: Velocidad Angular (a partir de desplazamiento y tiempo)
  {
    id: 'mcu-omega-desde-desplazamiento',
    groupId: 'mcu-omega-desplazamiento',
    title: 'Calcular Velocidad Angular (ω)',
    formula: 'ω = Δθ / t',
    variables: [
      { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' }
    ],
    output: { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s' },
    resolve: ({ d_th, t }) => {
      const numDth = parseFloat(d_th);
      const numT = parseFloat(t);
      if (numT === 0) return { error: "El tiempo no puede ser cero." };
      const w = numDth / numT;
      return { result: { w: formatNumber(w) }, steps: [`ω = ${formatNumber(numDth)} / ${formatNumber(numT)} = ${formatNumber(w)} rad/s`] };
    }
  },
  {
    id: 'mcu-desplazamiento-angular',
    groupId: 'mcu-omega-desplazamiento',
    title: 'Calcular Desplazamiento Angular (Δθ)',
    formula: 'Δθ = ω * t',
    variables: [
      { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' }
    ],
    output: { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad' },
    resolve: ({ w, t }) => {
      const numW = parseFloat(w);
      const numT = parseFloat(t);
      const d_th = numW * numT;
      return { result: { d_th: formatNumber(d_th) }, steps: [`Δθ = ${formatNumber(numW)} * ${formatNumber(numT)} = ${formatNumber(d_th)} rad`] };
    }
  },
  {
    id: 'mcu-tiempo-desde-desplazamiento',
    groupId: 'mcu-omega-desplazamiento',
    title: 'Calcular Tiempo (t)',
    formula: 't = Δθ / ω',
    variables: [
      { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad' },
      { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s' },
    ],
    output: { symbol: 't', label: 'Tiempo (t)', unit: 's' },
    resolve: ({ d_th, w }) => {
      const numDth = parseFloat(d_th);
      const numW = parseFloat(w);
      if (numW === 0) return { error: "La velocidad angular no puede ser cero." };
      const t = numDth / numW;
      return { result: { t: formatNumber(t) }, steps: [`t = ${formatNumber(numDth)} / ${formatNumber(numW)} = ${formatNumber(t)} s`] };
    }
  },

  // Grupo: Velocidad Angular (a partir de frecuencia y período)
  {
    id: 'mcu-omega-desde-frecuencia',
    groupId: 'mcu-omega-frec-periodo',
    title: 'Calcular ω (dada la Frecuencia)',
    formula: 'ω = 2πf',
    variables: [
      { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' }
    ],
    output: { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s' },
    resolve: ({ f }) => {
      const numF = parseFloat(f);
      const w = 2 * PI * numF;
      return { result: { w: formatNumber(w) }, steps: [`ω = 2π * ${formatNumber(numF)} = ${formatNumber(w)} rad/s`] };
    }
  },
  {
    id: 'mcu-frecuencia-desde-omega',
    groupId: 'mcu-omega-frec-periodo',
    title: 'Calcular Frecuencia (dada ω)',
    formula: 'f = ω / 2π',
    variables: [
      { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s' },
    ],
    output: { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' },
    resolve: ({ w }) => {
      const numW = parseFloat(w);
      const f = numW / (2 * PI);
      return { result: { f: formatNumber(f) }, steps: [`f = ${formatNumber(numW)} / 2π = ${formatNumber(f)} Hz`] };
    }
  },
  {
    id: 'mcu-omega-desde-periodo',
    groupId: 'mcu-omega-frec-periodo',
    title: 'Calcular ω (dado el Período)',
    formula: 'ω = 2π / T',
    variables: [
      { symbol: 'T', label: 'Período (T)', unit: 's' }
    ],
    output: { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s' },
    resolve: ({ T }) => {
      const numT = parseFloat(T);
      if (numT === 0) return { error: "El período no puede ser cero." };
      const w = (2 * PI) / numT;
      return { result: { w: formatNumber(w) }, steps: [`ω = 2π / ${formatNumber(numT)} = ${formatNumber(w)} rad/s`] };
    }
  },
  {
    id: 'mcu-periodo-desde-omega',
    groupId: 'mcu-omega-frec-periodo',
    title: 'Calcular Período (dada ω)',
    formula: 'T = 2π / ω',
    variables: [
      { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s' },
    ],
    output: { symbol: 'T', label: 'Período (T)', unit: 's' },
    resolve: ({ w }) => {
      const numW = parseFloat(w);
      if (numW === 0) return { error: "La velocidad angular no puede ser cero." };
      const T = (2 * PI) / numW;
      return { result: { T: formatNumber(T) }, steps: [`T = 2π / ${formatNumber(numW)} = ${formatNumber(T)} s`] };
    }
  },

  // Grupo: Velocidad Tangencial
  {
    id: 'mcu-velocidad-tangencial',
    groupId: 'mcu-velocidad-tangencial',
    title: 'Calcular Velocidad Tangencial (v)',
    formula: 'v = ω * r',
    variables: [
      { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s' },
      { symbol: 'r', label: 'Radio (r)', unit: 'm' }
    ],
    output: { symbol: 'v', label: 'Velocidad tangencial (v)', unit: 'm/s' },
    resolve: ({ w, r }) => {
      const numW = parseFloat(w);
      const numR = parseFloat(r);
      const v = numW * numR;
      return { result: { v: formatNumber(v) }, steps: [`v = ${formatNumber(numW)} * ${formatNumber(numR)} = ${formatNumber(v)} m/s`] };
    }
  },
  {
    id: 'mcu-omega-desde-tangencial',
    groupId: 'mcu-velocidad-tangencial',
    title: 'Calcular ω (dada v)',
    formula: 'ω = v / r',
    variables: [
      { symbol: 'v', label: 'Velocidad tangencial (v)', unit: 'm/s' },
      { symbol: 'r', label: 'Radio (r)', unit: 'm' }
    ],
    output: { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s' },
    resolve: ({ v, r }) => {
      const numV = parseFloat(v);
      const numR = parseFloat(r);
      if (numR === 0) return { error: "El radio no puede ser cero." };
      const w = numV / numR;
      return { result: { w: formatNumber(w) }, steps: [`ω = ${formatNumber(numV)} / ${formatNumber(numR)} = ${formatNumber(w)} rad/s`] };
    }
  },
  {
    id: 'mcu-radio-desde-tangencial',
    groupId: 'mcu-velocidad-tangencial',
    title: 'Calcular Radio (r)',
    formula: 'r = v / ω',
    variables: [
      { symbol: 'v', label: 'Velocidad tangencial (v)', unit: 'm/s' },
      { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s' }
    ],
    output: { symbol: 'r', label: 'Radio (r)', unit: 'm' },
    resolve: ({ v, w }) => {
      const numV = parseFloat(v);
      const numW = parseFloat(w);
      if (numW === 0) return { error: "La velocidad angular no puede ser cero." };
      const r = numV / numW;
      return { result: { r: formatNumber(r) }, steps: [`r = ${formatNumber(numV)} / ${formatNumber(numW)} = ${formatNumber(r)} m`] };
    }
  },

  // Grupo: Aceleración Centrípeta
  {
    id: 'mcu-aceleracion-desde-velocidad',
    groupId: 'mcu-aceleracion-centripeta',
    title: 'Calcular Acel. Centrípeta (dada v)',
    formula: 'ac = v² / r',
    variables: [
      { symbol: 'v', label: 'Velocidad tangencial (v)', unit: 'm/s' },
      { symbol: 'r', label: 'Radio (r)', unit: 'm' }
    ],
    output: { symbol: 'ac', label: 'Aceleración centrípeta (ac)', unit: 'm/s²' },
    resolve: ({ v, r }) => {
      const numV = parseFloat(v);
      const numR = parseFloat(r);
      if (numR === 0) return { error: "El radio no puede ser cero." };
      const ac = Math.pow(numV, 2) / numR;
      return { result: { ac: formatNumber(ac) }, steps: [`ac = ${formatNumber(numV)}² / ${formatNumber(numR)} = ${formatNumber(ac)} m/s²`] };
    }
  },
  {
    id: 'mcu-aceleracion-desde-omega',
    groupId: 'mcu-aceleracion-centripeta',
    title: 'Calcular Acel. Centrípeta (dada ω)',
    formula: 'ac = ω² * r',
    variables: [
      { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s' },
      { symbol: 'r', label: 'Radio (r)', unit: 'm' }
    ],
    output: { symbol: 'ac', label: 'Aceleración centrípeta (ac)', unit: 'm/s²' },
    resolve: ({ w, r }) => {
      const numW = parseFloat(w);
      const numR = parseFloat(r);
      const ac = Math.pow(numW, 2) * numR;
      return { result: { ac: formatNumber(ac) }, steps: [`ac = ${formatNumber(numW)}² * ${formatNumber(numR)} = ${formatNumber(ac)} m/s²`] };
    }
  }
];
