import { formatNumber } from '../../../../utils/formatNumber';

const PI = Math.PI;

export const definitions = [
  // --- Grupo 1: Ecuación de Velocidad Angular Final ---
  {
    id: 'mcua-velocidad-angular-final',
    groupId: 'mcua-ecuacion-velocidad',
    title: 'Calcular Velocidad Angular Final',
    formula: 'ωf = ω₀ + αt',
    variables: [
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s' },
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' }
    ],
    output: { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s' },
    resolve: ({ w0, a, t }) => {
      const wf = parseFloat(w0) + parseFloat(a) * parseFloat(t);
      return { result: { wf: formatNumber(wf) }, steps: [`ωf = ${w0} + ${a}*${t} = ${formatNumber(wf)} rad/s`] };
    }
  },
  {
    id: 'mcua-velocidad-angular-inicial',
    groupId: 'mcua-ecuacion-velocidad',
    title: 'Calcular Velocidad Angular Inicial',
    formula: 'ω₀ = ωf - αt',
    variables: [
      { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s' },
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' }
    ],
    output: { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s' },
    resolve: ({ wf, a, t }) => {
      const w0 = parseFloat(wf) - parseFloat(a) * parseFloat(t);
      return { result: { w0: formatNumber(w0) }, steps: [`ω₀ = ${wf} - ${a}*${t} = ${formatNumber(w0)} rad/s`] };
    }
  },
  {
    id: 'mcua-aceleracion-angular',
    groupId: 'mcua-ecuacion-velocidad',
    title: 'Calcular Aceleración Angular',
    formula: 'α = (ωf - ω₀) / t',
    variables: [
      { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s' },
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' }
    ],
    output: { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²' },
    resolve: ({ wf, w0, t }) => {
      const numT = parseFloat(t);
      if (numT === 0) return { error: "El tiempo no puede ser cero." };
      const a = (parseFloat(wf) - parseFloat(w0)) / numT;
      return { result: { a: formatNumber(a) }, steps: [`α = (${wf} - ${w0}) / ${t} = ${formatNumber(a)} rad/s²`] };
    }
  },
  {
    id: 'mcua-tiempo',
    groupId: 'mcua-ecuacion-velocidad',
    title: 'Calcular Tiempo',
    formula: 't = (ωf - ω₀) / α',
    variables: [
      { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s' },
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s' },
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²' }
    ],
    output: { symbol: 't', label: 'Tiempo (t)', unit: 's' },
    resolve: ({ wf, w0, a }) => {
      const numA = parseFloat(a);
      if (numA === 0) return { error: "La aceleración no puede ser cero." };
      const t = (parseFloat(wf) - parseFloat(w0)) / numA;
      return { result: { t: formatNumber(t) }, steps: [`t = (${wf} - ${w0}) / ${a} = ${formatNumber(t)} s`] };
    }
  },

  // --- Grupo 2: Ecuación de Posición Angular Final ---
  {
    id: 'mcua-posicion-angular-final',
    groupId: 'mcua-ecuacion-posicion',
    title: 'Calcular Posición Angular Final',
    formula: 'θf = θ₀ + ω₀t + ½αt²',
    variables: [
      { symbol: 'th0', label: 'Posición angular inicial (θ₀)', unit: 'rad' },
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' },
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²' }
    ],
    output: { symbol: 'thf', label: 'Posición angular final (θf)', unit: 'rad' },
    resolve: ({ th0, w0, t, a }) => {
      const thf = parseFloat(th0) + parseFloat(w0) * parseFloat(t) + 0.5 * parseFloat(a) * Math.pow(parseFloat(t), 2);
      return { result: { thf: formatNumber(thf) }, steps: [`θf = ${th0} + ${w0}*${t} + 0.5*${a}*${t}² = ${formatNumber(thf)} rad`] };
    }
  },
  {
    id: 'mcua-posicion-angular-inicial',
    groupId: 'mcua-ecuacion-posicion',
    title: 'Calcular Posición Angular Inicial',
    formula: 'θ₀ = θf - ω₀t - ½αt²',
    variables: [
      { symbol: 'thf', label: 'Posición angular final (θf)', unit: 'rad' },
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' },
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²' }
    ],
    output: { symbol: 'th0', label: 'Posición angular inicial (θ₀)', unit: 'rad' },
    resolve: ({ thf, w0, t, a }) => {
      const th0 = parseFloat(thf) - parseFloat(w0) * parseFloat(t) - 0.5 * parseFloat(a) * Math.pow(parseFloat(t), 2);
      return { result: { th0: formatNumber(th0) }, steps: [`θ₀ = ${thf} - ${w0}*${t} - 0.5*${a}*${t}² = ${formatNumber(th0)} rad`] };
    }
  },
  {
    id: 'mcua-velocidad-inicial-desde-posicion',
    groupId: 'mcua-ecuacion-posicion',
    title: 'Calcular ω₀ (desde Posición)',
    formula: 'ω₀ = (θf - θ₀ - ½αt²) / t',
    variables: [
      { symbol: 'thf', label: 'Posición angular final (θf)', unit: 'rad' },
      { symbol: 'th0', label: 'Posición angular inicial (θ₀)', unit: 'rad' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' },
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²' }
    ],
    output: { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s' },
    resolve: ({ thf, th0, t, a }) => {
      const numT = parseFloat(t);
      if (numT === 0) return { error: "El tiempo no puede ser cero." };
      const w0 = (parseFloat(thf) - parseFloat(th0) - 0.5 * parseFloat(a) * Math.pow(numT, 2)) / numT;
      return { result: { w0: formatNumber(w0) }, steps: [`ω₀ = (${thf} - ${th0} - 0.5*${a}*${t}²) / ${t} = ${formatNumber(w0)} rad/s`] };
    }
  },
  {
    id: 'mcua-aceleracion-desde-posicion',
    groupId: 'mcua-ecuacion-posicion',
    title: 'Calcular α (desde Posición)',
    formula: 'α = 2(θf - θ₀ - ω₀t) / t²',
    variables: [
      { symbol: 'thf', label: 'Posición angular final (θf)', unit: 'rad' },
      { symbol: 'th0', label: 'Posición angular inicial (θ₀)', unit: 'rad' },
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' }
    ],
    output: { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²' },
    resolve: ({ thf, th0, w0, t }) => {
      const numT = parseFloat(t);
      if (numT === 0) return { error: "El tiempo no puede ser cero." };
      const a = 2 * (parseFloat(thf) - parseFloat(th0) - parseFloat(w0) * numT) / Math.pow(numT, 2);
      return { result: { a: formatNumber(a) }, steps: [`α = 2(${thf} - ${th0} - ${w0}*${t}) / ${t}² = ${formatNumber(a)} rad/s²`] };
    }
  },
  {
    id: 'mcua-tiempo-cuadratica',
    groupId: 'mcua-ecuacion-posicion',
    title: 'Calcular Tiempo (Fórmula Cuadrática)',
    formula: 't = [-ω₀ ± √(ω₀² - 4(½α)(θ₀-θf))] / α',
    variables: [
      { symbol: 'th0', label: 'Posición angular inicial (θ₀)', unit: 'rad' },
      { symbol: 'thf', label: 'Posición angular final (θf)', unit: 'rad' },
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s' },
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²' }
    ],
    output: { symbol: 't', label: 'Tiempo (t)', unit: 's' },
    resolve: ({ th0, thf, w0, a }) => {
        const numA = parseFloat(a);
        if (numA === 0) return { error: "La aceleración no puede ser cero para la fórmula cuadrática." };
        const C = parseFloat(th0) - parseFloat(thf);
        const B = parseFloat(w0);
        const A = 0.5 * numA;
        const discriminant = Math.pow(B, 2) - 4 * A * C;
        if (discriminant < 0) return { error: "Sin solución real para el tiempo (discriminante negativo)." };
        const t1 = (-B + Math.sqrt(discriminant)) / (2 * A);
        const t2 = (-B - Math.sqrt(discriminant)) / (2 * A);
        const steps = [
            `Ecuación de la forma At² + Bt + C = 0, donde A=${formatNumber(A)}, B=${formatNumber(B)}, C=${formatNumber(C)}`,
            `Discriminante: Δ = B² - 4AC = ${formatNumber(discriminant)}`,
            `t₁ = (-B + √Δ) / 2A = ${formatNumber(t1)} s`,
            `t₂ = (-B - √Δ) / 2A = ${formatNumber(t2)} s`,
            `Se consideran solo las soluciones de tiempo no negativas.`
        ];
        const positiveTimes = [t1, t2].filter(t => t >= 0);
        if (positiveTimes.length === 0) return { error: "No hay soluciones de tiempo positivas." };
        const finalResult = { t: positiveTimes.map(formatNumber).join(', ') };
        return { result: finalResult, steps };
    }
  },
  
  // --- Grupo 3: Ecuación de Torricelli Angular ---
  {
    id: 'mcua-velocidad-final-torricelli',
    groupId: 'mcua-ecuacion-torricelli',
    title: 'Calcular ωf (sin tiempo)',
    formula: 'ωf² = ω₀² + 2αΔθ',
    variables: [
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s' },
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²' },
      { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad' }
    ],
    output: { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s' },
    resolve: ({ w0, a, d_th }) => {
      const wf_sq = Math.pow(parseFloat(w0), 2) + 2 * parseFloat(a) * parseFloat(d_th);
      if (wf_sq < 0) return { error: "Resultado imaginario (ωf² < 0)." };
      const wf = Math.sqrt(wf_sq);
      return { result: { wf: formatNumber(wf) }, steps: [`ωf = √(${w0}² + 2*${a}*${d_th}) = ${formatNumber(wf)} rad/s`] };
    }
  },
  {
    id: 'mcua-velocidad-inicial-torricelli',
    groupId: 'mcua-ecuacion-torricelli',
    title: 'Calcular ω₀ (sin tiempo)',
    formula: 'ω₀² = ωf² - 2αΔθ',
    variables: [
      { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s' },
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²' },
      { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad' }
    ],
    output: { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s' },
    resolve: ({ wf, a, d_th }) => {
      const w0_sq = Math.pow(parseFloat(wf), 2) - 2 * parseFloat(a) * parseFloat(d_th);
      if (w0_sq < 0) return { error: "Resultado imaginario (ω₀² < 0)." };
      const w0 = Math.sqrt(w0_sq);
      return { result: { w0: formatNumber(w0) }, steps: [`ω₀ = √(${wf}² - 2*${a}*${d_th}) = ${formatNumber(w0)} rad/s`] };
    }
  },
  {
    id: 'mcua-aceleracion-torricelli',
    groupId: 'mcua-ecuacion-torricelli',
    title: 'Calcular α (sin tiempo)',
    formula: 'α = (ωf² - ω₀²) / 2Δθ',
    variables: [
      { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s' },
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s' },
      { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad' }
    ],
    output: { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²' },
    resolve: ({ wf, w0, d_th }) => {
      const numDth = parseFloat(d_th);
      if (numDth === 0) return { error: "El desplazamiento angular no puede ser cero." };
      const a = (Math.pow(parseFloat(wf), 2) - Math.pow(parseFloat(w0), 2)) / (2 * numDth);
      return { result: { a: formatNumber(a) }, steps: [`α = (${wf}² - ${w0}²) / (2*${d_th}) = ${formatNumber(a)} rad/s²`] };
    }
  },
  {
    id: 'mcua-desplazamiento-torricelli',
    groupId: 'mcua-ecuacion-torricelli',
    title: 'Calcular Δθ (sin tiempo)',
    formula: 'Δθ = (ωf² - ω₀²) / 2α',
    variables: [
      { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s' },
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s' },
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²' }
    ],
    output: { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad' },
    resolve: ({ wf, w0, a }) => {
      const numA = parseFloat(a);
      if (numA === 0) return { error: "La aceleración no puede ser cero." };
      const d_th = (Math.pow(parseFloat(wf), 2) - Math.pow(parseFloat(w0), 2)) / (2 * numA);
      return { result: { d_th: formatNumber(d_th) }, steps: [`Δθ = (${wf}² - ${w0}²) / (2*${a}) = ${formatNumber(d_th)} rad`] };
    }
  },

  // --- Grupo 4: Ecuación de Desplazamiento con Velocidad Media ---
  {
    id: 'mcua-desplazamiento-media',
    groupId: 'mcua-desplazamiento-media',
    title: 'Calcular Δθ (con Vel. Media)',
    formula: 'Δθ = ½(ω₀ + ωf)t',
    variables: [
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s' },
      { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' }
    ],
    output: { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad' },
    resolve: ({ w0, wf, t }) => {
      const d_th = 0.5 * (parseFloat(w0) + parseFloat(wf)) * parseFloat(t);
      return { result: { d_th: formatNumber(d_th) }, steps: [`Δθ = 0.5*(${w0} + ${wf})*${t} = ${formatNumber(d_th)} rad`] };
    }
  },
  {
    id: 'mcua-tiempo-media',
    groupId: 'mcua-desplazamiento-media',
    title: 'Calcular Tiempo (con Vel. Media)',
    formula: 't = 2Δθ / (ω₀ + ωf)',
    variables: [
      { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad' },
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s' },
      { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s' }
    ],
    output: { symbol: 't', label: 'Tiempo (t)', unit: 's' },
    resolve: ({ d_th, w0, wf }) => {
      const sum_w = parseFloat(w0) + parseFloat(wf);
      if (sum_w === 0) return { error: "La suma de velocidades no puede ser cero." };
      const t = (2 * parseFloat(d_th)) / sum_w;
      return { result: { t: formatNumber(t) }, steps: [`t = (2*${d_th}) / (${w0} + ${wf}) = ${formatNumber(t)} s`] };
    }
  },
  {
    id: 'mcua-velocidad-final-media',
    groupId: 'mcua-desplazamiento-media',
    title: 'Calcular ωf (con Vel. Media)',
    formula: 'ωf = (2Δθ / t) - ω₀',
    variables: [
      { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' },
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s' }
    ],
    output: { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s' },
    resolve: ({ d_th, t, w0 }) => {
      const numT = parseFloat(t);
      if (numT === 0) return { error: "El tiempo no puede ser cero." };
      const wf = (2 * parseFloat(d_th) / numT) - parseFloat(w0);
      return { result: { wf: formatNumber(wf) }, steps: [`ωf = (2*${d_th}/${t}) - ${w0} = ${formatNumber(wf)} rad/s`] };
    }
  },
  {
    id: 'mcua-velocidad-inicial-media',
    groupId: 'mcua-desplazamiento-media',
    title: 'Calcular ω₀ (con Vel. Media)',
    formula: 'ω₀ = (2Δθ / t) - ωf',
    variables: [
      { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' },
      { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s' }
    ],
    output: { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s' },
    resolve: ({ d_th, t, wf }) => {
      const numT = parseFloat(t);
      if (numT === 0) return { error: "El tiempo no puede ser cero." };
      const w0 = (2 * parseFloat(d_th) / numT) - parseFloat(wf);
      return { result: { w0: formatNumber(w0) }, steps: [`ω₀ = (2*${d_th}/${t}) - ${wf} = ${formatNumber(w0)} rad/s`] };
    }
  },

  // --- Grupo 5: Relaciones Tangenciales y Aceleración Total ---
  {
    id: 'mcua-aceleracion-tangencial',
    groupId: 'mcua-relaciones-tangenciales',
    title: 'Calcular Aceleración Tangencial',
    formula: 'at = α * r',
    variables: [
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²' },
      { symbol: 'r', label: 'Radio (r)', unit: 'm' }
    ],
    output: { symbol: 'at', label: 'Aceleración tangencial (at)', unit: 'm/s²' },
    resolve: ({ a, r }) => {
      const at = parseFloat(a) * parseFloat(r);
      return { result: { at: formatNumber(at) }, steps: [`at = ${a} * ${r} = ${formatNumber(at)} m/s²`] };
    }
  },
  {
    id: 'mcua-aceleracion-total',
    groupId: 'mcua-relaciones-tangenciales',
    title: 'Calcular Aceleración Total',
    formula: 'a_total = √(at² + ac²)',
    variables: [
      { symbol: 'at', label: 'Aceleración tangencial (at)', unit: 'm/s²' },
      { symbol: 'ac', label: 'Aceleración centrípeta (ac)', unit: 'm/s²' }
    ],
    output: { symbol: 'a_total', label: 'Aceleración total (a)', unit: 'm/s²' },
    resolve: ({ at, ac }) => {
      const a_total = Math.sqrt(Math.pow(parseFloat(at), 2) + Math.pow(parseFloat(ac), 2));
      return { result: { a_total: formatNumber(a_total) }, steps: [`a = √(${at}² + ${ac}²) = ${formatNumber(a_total)} m/s²`] };
    }
  },

  // --- Grupo 6: Conceptos Adicionales ---
  {
    id: 'mcua-numero-vueltas',
    groupId: 'mcua-conceptos-adicionales',
    title: 'Calcular Número de Vueltas',
    formula: 'N = Δθ / (2π)',
    variables: [
      { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad' }
    ],
    output: { symbol: 'N', label: 'Número de vueltas (N)', unit: 'vueltas' },
    resolve: ({ d_th }) => {
      const N = parseFloat(d_th) / (2 * PI);
      return { result: { N: formatNumber(N) }, steps: [`N = ${d_th} / 2π = ${formatNumber(N)} vueltas`] };
    }
  },
  {
    id: 'mcua-desplazamiento-lineal',
    groupId: 'mcua-conceptos-adicionales',
    title: 'Calcular Desplazamiento Lineal (Arco)',
    formula: 's = Δθ * r',
    variables: [
        { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad' },
        { symbol: 'r', label: 'Radio (r)', unit: 'm' }
    ],
    output: { symbol: 's', label: 'Desplazamiento lineal (s)', unit: 'm' },
    resolve: ({ d_th, r }) => {
        const s = parseFloat(d_th) * parseFloat(r);
        return { result: { s: formatNumber(s) }, steps: [`s = ${d_th} * ${r} = ${formatNumber(s)} m`] };
    }
  }
];
