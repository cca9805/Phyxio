
import { formatNumber } from '../../../../utils/formatNumber';

const PI = Math.PI;

export const definitions = [
  // --- Grupo 1: Velocidad Angular y Tangencial ---
  {
    id: 'v-from-w-r',
    groupId: 'velocidad-angular-tangencial',
    title: 'Calcular Velocidad Tangencial (v)',
    formula: 'v = ω * r',
    variables: [
      { symbol: 'ω', label: 'Velocidad Angular (ω)', unit: 'rad/s' },
      { symbol: 'r', label: 'Radio (r)', unit: 'm' }
    ],
    output: { symbol: 'v', label: 'Velocidad Tangencial', unit: 'm/s' },
    resolve: ({ ω, r }) => {
      const v = parseFloat(ω) * parseFloat(r);
      return { result: { v: formatNumber(v) }, steps: [`v = ${ω} * ${r} = ${formatNumber(v)} m/s`] };
    }
  },
  {
    id: 'w-from-v-r',
    groupId: 'velocidad-angular-tangencial',
    title: 'Calcular Velocidad Angular (ω)',
    formula: 'ω = v / r',
    variables: [
      { symbol: 'v', label: 'Velocidad Tangencial (v)', unit: 'm/s' },
      { symbol: 'r', label: 'Radio (r)', unit: 'm' }
    ],
    output: { symbol: 'ω', label: 'Velocidad Angular', unit: 'rad/s' },
    resolve: ({ v, r }) => {
      const radio = parseFloat(r);
      if (radio === 0) return { error: 'El radio no puede ser cero.' };
      const ω = parseFloat(v) / radio;
      return { result: { ω: formatNumber(ω) }, steps: [`ω = ${v} / ${r} = ${formatNumber(ω)} rad/s`] };
    }
  },
  {
    id: 'r-from-v-w',
    groupId: 'velocidad-angular-tangencial',
    title: 'Calcular Radio (r)',
    formula: 'r = v / ω',
    variables: [
      { symbol: 'v', label: 'Velocidad Tangencial (v)', unit: 'm/s' },
      { symbol: 'ω', label: 'Velocidad Angular (ω)', unit: 'rad/s' }
    ],
    output: { symbol: 'r', label: 'Radio', unit: 'm' },
    resolve: ({ v, ω }) => {
      const omega = parseFloat(ω);
      if (omega === 0) return { error: 'La velocidad angular no puede ser cero.' };
      const r = parseFloat(v) / omega;
      return { result: { r: formatNumber(r) }, steps: [`r = ${v} / ${ω} = ${formatNumber(r)} m`] };
    }
  },

  // --- Grupo 2: Aceleración Centrípeta ---
  {
    id: 'ac-from-v-r',
    groupId: 'aceleracion-centripeta',
    title: 'Calcular ac (desde v)',
    formula: 'ac = v² / r',
    variables: [
      { symbol: 'v', label: 'Velocidad Tangencial (v)', unit: 'm/s' },
      { symbol: 'r', label: 'Radio (r)', unit: 'm' }
    ],
    output: { symbol: 'ac', label: 'Aceleración Centrípeta', unit: 'm/s²' },
    resolve: ({ v, r }) => {
      const radio = parseFloat(r);
      if (radio === 0) return { error: 'El radio no puede ser cero.' };
      const ac = Math.pow(parseFloat(v), 2) / radio;
      return { result: { ac: formatNumber(ac) }, steps: [`ac = ${v}² / ${r} = ${formatNumber(ac)} m/s²`] };
    }
  },
  {
    id: 'ac-from-w-r',
    groupId: 'aceleracion-centripeta',
    title: 'Calcular ac (desde ω)',
    formula: 'ac = ω² * r',
    variables: [
      { symbol: 'ω', label: 'Velocidad Angular (ω)', unit: 'rad/s' },
      { symbol: 'r', label: 'Radio (r)', unit: 'm' }
    ],
    output: { symbol: 'ac', label: 'Aceleración Centrípeta', unit: 'm/s²' },
    resolve: ({ ω, r }) => {
      const ac = Math.pow(parseFloat(ω), 2) * parseFloat(r);
      return { result: { ac: formatNumber(ac) }, steps: [`ac = ${ω}² * ${r} = ${formatNumber(ac)} m/s²`] };
    }
  },
   {
    id: 'v-from-ac-r',
    groupId: 'aceleracion-centripeta',
    title: 'Calcular v (desde ac)',
    formula: 'v = √(ac * r)',
    variables: [
      { symbol: 'ac', label: 'Aceleración (ac)', unit: 'm/s²' },
      { symbol: 'r', label: 'Radio (r)', unit: 'm' }
    ],
    output: { symbol: 'v', label: 'Velocidad tangencial', unit: 'm/s' },
    resolve: ({ ac, r }) => {
      const product = parseFloat(ac) * parseFloat(r);
      if (product < 0) return { error: 'El producto ac*r no puede ser negativo.' };
      const v = Math.sqrt(product);
      return { result: { v: formatNumber(v) }, steps: [`v = √(${ac} * ${r}) = ${formatNumber(v)} m/s`] };
    }
  },
  {
    id: 'r-from-ac-v',
    groupId: 'aceleracion-centripeta',
    title: 'Calcular r (desde ac, v)',
    formula: 'r = v² / ac',
    variables: [
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
      { symbol: 'ac', label: 'Aceleración (ac)', unit: 'm/s²' }
    ],
    output: { symbol: 'r', label: 'Radio', unit: 'm' },
    resolve: ({ v, ac }) => {
      const acel = parseFloat(ac);
      if (acel === 0) return { error: 'La aceleración no puede ser cero.' };
      const r = Math.pow(parseFloat(v), 2) / acel;
      return { result: { r: formatNumber(r) }, steps: [`r = ${v}² / ${ac} = ${formatNumber(r)} m`] };
    }
  },
   {
    id: 'w-from-ac-r',
    groupId: 'aceleracion-centripeta',
    title: 'Calcular ω (desde ac)',
    formula: 'ω = √(ac / r)',
    variables: [
      { symbol: 'ac', label: 'Aceleración (ac)', unit: 'm/s²' },
      { symbol: 'r', label: 'Radio (r)', unit: 'm' }
    ],
    output: { symbol: 'ω', label: 'Velocidad angular', unit: 'rad/s' },
    resolve: ({ ac, r }) => {
      const radio = parseFloat(r);
      if (radio === 0) return { error: 'El radio no puede ser cero.' };
      const division = parseFloat(ac) / radio;
      if (division < 0) return { error: 'El cociente ac/r no puede ser negativo.' };
      const w = Math.sqrt(division);
      return { result: { w: formatNumber(w) }, steps: [`ω = √(${ac} / ${r}) = ${formatNumber(w)} rad/s`] };
    }
  },
  {
    id: 'r-from-ac-w',
    groupId: 'aceleracion-centripeta',
    title: 'Calcular r (desde ac, ω)',
    formula: 'r = ac / ω²',
    variables: [
      { symbol: 'ac', label: 'Aceleración (ac)', unit: 'm/s²' },
      { symbol: 'ω', label: 'Velocidad angular (ω)', unit: 'rad/s' }
    ],
    output: { symbol: 'r', label: 'Radio', unit: 'm' },
    resolve: ({ ac, w }) => {
      const omegaSq = Math.pow(parseFloat(w), 2);
      if (omegaSq === 0) return { error: 'La velocidad angular no puede ser cero.' };
      const r = parseFloat(ac) / omegaSq;
      return { result: { r: formatNumber(r) }, steps: [`r = ${ac} / ${w}² = ${formatNumber(r)} m`] };
    }
  },

  // --- Grupo 3: Fuerza Centrípeta ---
  {
    id: 'fc-from-m-ac',
    groupId: 'fuerza-centripeta',
    title: 'Calcular Fc (desde ac)',
    formula: 'Fc = m * ac',
    variables: [
        { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
        { symbol: 'ac', label: 'Aceleración Centrípeta (ac)', unit: 'm/s²' }
    ],
    output: { symbol: 'Fc', label: 'Fuerza Centrípeta', unit: 'N' },
    resolve: ({ m, ac }) => {
        const Fc = parseFloat(m) * parseFloat(ac);
        return { result: { Fc: formatNumber(Fc) }, steps: [`Fc = ${m} * ${ac} = ${formatNumber(Fc)} N`] };
    }
  },
  {
    id: 'm-from-fc-ac',
    groupId: 'fuerza-centripeta',
    title: 'Calcular Masa (desde ac)',
    formula: 'm = Fc / ac',
    variables: [
        { symbol: 'Fc', label: 'Fuerza Centrípeta (Fc)', unit: 'N' },
        { symbol: 'ac', label: 'Aceleración Centrípeta (ac)', unit: 'm/s²' }
    ],
    output: { symbol: 'm', label: 'Masa', unit: 'kg' },
    resolve: ({ Fc, ac }) => {
        const acel = parseFloat(ac);
        if (acel === 0) return { error: 'La aceleración no puede ser cero.' };
        const m = parseFloat(Fc) / acel;
        return { result: { m: formatNumber(m) }, steps: [`m = ${Fc} / ${ac} = ${formatNumber(m)} kg`] };
    }
  },

  // --- Grupo 4: Período y Frecuencia ---
  {
    id: 't-from-f',
    groupId: 'periodo-frecuencia',
    title: 'Calcular Período (T)',
    formula: 'T = 1 / f',
    variables: [{ symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' }],
    output: { symbol: 'T', label: 'Período', unit: 's' },
    resolve: ({ f }) => {
      const freq = parseFloat(f);
      if (freq === 0) return { error: 'La frecuencia no puede ser cero.' };
      const T = 1 / freq;
      return { result: { T: formatNumber(T) }, steps: [`T = 1 / ${f} = ${formatNumber(T)} s`] };
    }
  },
  {
    id: 'f-from-t',
    groupId: 'periodo-frecuencia',
    title: 'Calcular Frecuencia (f)',
    formula: 'f = 1 / T',
    variables: [{ symbol: 'T', label: 'Período (T)', unit: 's' }],
    output: { symbol: 'f', label: 'Frecuencia', unit: 'Hz' },
    resolve: ({ T }) => {
      const periodo = parseFloat(T);
      if (periodo === 0) return { error: 'El período no puede ser cero.' };
      const f = 1 / periodo;
      return { result: { f: formatNumber(f) }, steps: [`f = 1 / ${T} = ${formatNumber(f)} Hz`] };
    }
  },

  // --- Grupo 5: Velocidad Angular, Período y Frecuencia ---
  {
    id: 'w-from-t',
    groupId: 'velocidad-angular-periodo',
    title: 'Calcular ω (desde T)',
    formula: 'ω = 2π / T',
    variables: [{ symbol: 'T', label: 'Período (T)', unit: 's' }],
    output: { symbol: 'ω', label: 'Velocidad Angular', unit: 'rad/s' },
    resolve: ({ T }) => {
      const periodo = parseFloat(T);
      if (periodo === 0) return { error: 'El período no puede ser cero.' };
      const ω = (2 * PI) / periodo;
      return { result: { ω: formatNumber(ω) }, steps: [`ω = 2π / ${T} = ${formatNumber(ω)} rad/s`] };
    }
  },
  {
    id: 'w-from-f',
    groupId: 'velocidad-angular-periodo',
    title: 'Calcular ω (desde f)',
    formula: 'ω = 2π * f',
    variables: [{ symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' }],
    output: { symbol: 'ω', label: 'Velocidad Angular', unit: 'rad/s' },
    resolve: ({ f }) => {
      const ω = 2 * PI * parseFloat(f);
      return { result: { ω: formatNumber(ω) }, steps: [`ω = 2π * ${f} = ${formatNumber(ω)} rad/s`] };
    }
  },
  {
    id: 't-from-w',
    groupId: 'velocidad-angular-periodo',
    title: 'Calcular T (desde ω)',
    formula: 'T = 2π / ω',
    variables: [{ symbol: 'ω', label: 'Velocidad Angular (ω)', unit: 'rad/s' }],
    output: { symbol: 'T', label: 'Período', unit: 's' },
    resolve: ({ w }) => {
        const omega = parseFloat(w);
        if (omega === 0) return { error: 'La velocidad angular no puede ser cero.' };
        const T = (2 * PI) / omega;
        return { result: { T: formatNumber(T) }, steps: [`T = 2π / ${w} = ${formatNumber(T)} s`] };
    }
  },
  {
    id: 'f-from-w',
    groupId: 'velocidad-angular-periodo',
    title: 'Calcular f (desde ω)',
    formula: 'f = ω / 2π',
    variables: [{ symbol: 'ω', label: 'Velocidad Angular (ω)', unit: 'rad/s' }],
    output: { symbol: 'f', label: 'Frecuencia', unit: 'Hz' },
    resolve: ({ w }) => {
        const f = parseFloat(w) / (2*PI);
        return { result: { f: formatNumber(f) }, steps: [`f = ${w} / 2π = ${formatNumber(f)} Hz`] };
    }
  }
];
