import { formatNumber } from '../../../../../../utils/formatNumber';

export const definitions = [
  // Grupo 1: Constante de Tiempo RC
  {
    id: "constante-tiempo-rc-tau",
    groupId: "constante-tiempo-rc",
    title: "Calcular Constante de Tiempo RC (τ)",
    isFundamental: true,
    formula: "τ = R * C",
    variables: [{ symbol: "R", label: "Resistencia (Ω)", unit: "Ω" }, { symbol: "C", label: "Capacitancia (F)", unit: "F" }],
    output: { symbol: "τ", label: "Constante de Tiempo (s)", unit: "s" },
    resolve: ({ R, C }) => {
      const result = R * C;
      return { result: { τ: formatNumber(result) }, steps: [`τ = ${R}Ω * ${C}F = ${formatNumber(result)} s`] };
    }
  },
  {
    id: "constante-tiempo-rc-r",
    groupId: "constante-tiempo-rc",
    title: "Calcular Resistencia (R) en circuito RC",
    isFundamental: false,
    formula: "R = τ / C",
    variables: [{ symbol: "τ", label: "Constante de Tiempo (s)", unit: "s" }, { symbol: "C", label: "Capacitancia (F)", unit: "F" }],
    output: { symbol: "R", label: "Resistencia (Ω)", unit: "Ω" },
    resolve: ({ τ, C }) => {
      if (C === 0) return { error: "La capacitancia no puede ser cero." };
      const result = τ / C;
      return { result: { R: formatNumber(result) }, steps: [`R = ${τ}s / ${C}F = ${formatNumber(result)} Ω`] };
    }
  },
  {
    id: "constante-tiempo-rc-c",
    groupId: "constante-tiempo-rc",
    title: "Calcular Capacitancia (C) en circuito RC",
    isFundamental: false,
    formula: "C = τ / R",
    variables: [{ symbol: "τ", label: "Constante de Tiempo (s)", unit: "s" }, { symbol: "R", label: "Resistencia (Ω)", unit: "Ω" }],
    output: { symbol: "C", label: "Capacitancia (F)", unit: "F" },
    resolve: ({ τ, R }) => {
      if (R === 0) return { error: "La resistencia no puede ser cero." };
      const result = τ / R;
      return { result: { C: formatNumber(result) }, steps: [`C = ${τ}s / ${R}Ω = ${formatNumber(result)} F`] };
    }
  },

  // Grupo 2: Constante de Tiempo RL
  {
    id: "constante-tiempo-rl-tau",
    groupId: "constante-tiempo-rl",
    title: "Calcular Constante de Tiempo RL (τ)",
    isFundamental: true,
    formula: "τ = L / R",
    variables: [{ symbol: "L", label: "Inductancia (H)", unit: "H" }, { symbol: "R", label: "Resistencia (Ω)", unit: "Ω" }],
    output: { symbol: "τ", label: "Constante de Tiempo (s)", unit: "s" },
    resolve: ({ L, R }) => {
      if (R === 0) return { error: "La resistencia no puede ser cero." };
      const result = L / R;
      return { result: { τ: formatNumber(result) }, steps: [`τ = ${L}H / ${R}Ω = ${formatNumber(result)} s`] };
    }
  },
  {
    id: "constante-tiempo-rl-l",
    groupId: "constante-tiempo-rl",
    title: "Calcular Inductancia (L) en circuito RL",
    isFundamental: false,
    formula: "L = τ * R",
    variables: [{ symbol: "τ", label: "Constante de Tiempo (s)", unit: "s" }, { symbol: "R", label: "Resistencia (Ω)", unit: "Ω" }],
    output: { symbol: "L", label: "Inductancia (H)", unit: "H" },
    resolve: ({ τ, R }) => {
      const result = τ * R;
      return { result: { L: formatNumber(result) }, steps: [`L = ${τ}s * ${R}Ω = ${formatNumber(result)} H`] };
    }
  },
  {
    id: "constante-tiempo-rl-r",
    groupId: "constante-tiempo-rl",
    title: "Calcular Resistencia (R) en circuito RL",
    isFundamental: false,
    formula: "R = L / τ",
    variables: [{ symbol: "L", label: "Inductancia (H)", unit: "H" }, { symbol: "τ", label: "Constante de Tiempo (s)", unit: "s" }],
    output: { symbol: "R", label: "Resistencia (Ω)", unit: "Ω" },
    resolve: ({ L, τ }) => {
      if (τ === 0) return { error: "La constante de tiempo no puede ser cero." };
      const result = L / τ;
      return { result: { R: formatNumber(result) }, steps: [`R = ${L}H / ${τ}s = ${formatNumber(result)} Ω`] };
    }
  },

  // Grupo 3: Carga del Capacitor
  {
    id: "voltaje-capacitor-carga",
    groupId: "comportamiento-capacitor-carga",
    title: "Voltaje en Capacitor durante la Carga (Vc)",
    formula: "Vc(t) = V_f * (1 - e^(-t/τ))",
    variables: [
      { symbol: "V_f", label: "Voltaje Final (Fuente) (V)", unit: "V" },
      { symbol: "t", label: "Tiempo (s)", unit: "s" },
      { symbol: "τ", label: "Constante de Tiempo RC (s)", unit: "s" }
    ],
    output: { symbol: "Vc", label: "Voltaje en Capacitor (V)", unit: "V" },
    resolve: ({ V_f, t, τ }) => {
      const result = V_f * (1 - Math.exp(-t / τ));
      return { result: { Vc: formatNumber(result) }, steps: [`Vc(${t}s) = ${V_f}V * (1 - e^(-${t}s/${τ}s)) = ${formatNumber(result)} V`] };
    }
  },
  {
    id: "voltaje-capacitor-carga-vf",
    groupId: "comportamiento-capacitor-carga",
    title: "Calcular Voltaje Final (Vf)",
    formula: "V_f = Vc(t) / (1 - e^(-t/τ))",
    variables: [
        { symbol: "Vc", label: "Voltaje en Capacitor (V)", unit: "V" },
        { symbol: "t", label: "Tiempo (s)", unit: "s" },
        { symbol: "τ", label: "Constante de Tiempo RC (s)", unit: "s" }
    ],
    output: { symbol: "V_f", label: "Voltaje Final (Fuente) (V)", unit: "V" },
    resolve: ({ Vc, t, τ }) => {
      const result = Vc / (1 - Math.exp(-t / τ));
      return { result: { V_f: formatNumber(result) }, steps: [`V_f = ${Vc}V / (1 - e^(-${t}s/${τ}s)) = ${formatNumber(result)} V`] };
    }
  },
  {
    id: "voltaje-capacitor-carga-t",
    groupId: "comportamiento-capacitor-carga",
    title: "Calcular Tiempo (t)",
    formula: "t = -τ * ln(1 - Vc(t) / V_f)",
    variables: [
        { symbol: "τ", label: "Constante de Tiempo RC (s)", unit: "s" },
        { symbol: "Vc", label: "Voltaje en Capacitor (V)", unit: "V" },
        { symbol: "V_f", label: "Voltaje Final (Fuente) (V)", unit: "V" }
    ],
    output: { symbol: "t", label: "Tiempo (s)", unit: "s" },
    resolve: ({ τ, Vc, V_f }) => {
      const result = -τ * Math.log(1 - Vc / V_f);
      return { result: { t: formatNumber(result) }, steps: [`t = -${τ}s * ln(1 - ${Vc}V / ${V_f}V) = ${formatNumber(result)} s`] };
    }
  },
  {
    id: "voltaje-capacitor-carga-tau",
    groupId: "comportamiento-capacitor-carga",
    title: "Calcular Constante de Tiempo (τ)",
    formula: "τ = -t / ln(1 - Vc(t) / V_f)",
    variables: [
        { symbol: "t", label: "Tiempo (s)", unit: "s" },
        { symbol: "Vc", label: "Voltaje en Capacitor (V)", unit: "V" },
        { symbol: "V_f", label: "Voltaje Final (Fuente) (V)", unit: "V" }
    ],
    output: { symbol: "τ", label: "Constante de Tiempo RC (s)", unit: "s" },
    resolve: ({ t, Vc, V_f }) => {
      const result = -t / Math.log(1 - Vc / V_f);
      return { result: { τ: formatNumber(result) }, steps: [`τ = -${t}s / ln(1 - ${Vc}V / ${V_f}V) = ${formatNumber(result)} s`] };
    }
  },

  // Grupo 4: Descarga del Capacitor
  {
    id: "voltaje-capacitor-descarga",
    groupId: "comportamiento-capacitor-descarga",
    title: "Voltaje en Capacitor durante la Descarga (Vc)",
    formula: "Vc(t) = V_0 * e^(-t/τ)",
    variables: [
      { symbol: "V_0", label: "Voltaje Inicial (V)", unit: "V" },
      { symbol: "t", label: "Tiempo (s)", unit: "s" },
      { symbol: "τ", label: "Constante de Tiempo RC (s)", unit: "s" }
    ],
    output: { symbol: "Vc", label: "Voltaje en Capacitor (V)", unit: "V" },
    resolve: ({ V_0, t, τ }) => {
      const result = V_0 * Math.exp(-t / τ);
      return { result: { Vc: formatNumber(result) }, steps: [`Vc(${t}s) = ${V_0}V * e^(-${t}s/${τ}s) = ${formatNumber(result)} V`] };
    }
  },
    {
    id: "voltaje-capacitor-descarga-v0",
    groupId: "comportamiento-capacitor-descarga",
    title: "Calcular Voltaje Inicial (V0)",
    formula: "V_0 = Vc(t) / e^(-t/τ)",
    variables: [
        { symbol: "Vc", label: "Voltaje en Capacitor (V)", unit: "V" },
        { symbol: "t", label: "Tiempo (s)", unit: "s" },
        { symbol: "τ", label: "Constante de Tiempo RC (s)", unit: "s" }
    ],
    output: { symbol: "V_0", label: "Voltaje Inicial (V)", unit: "V" },
    resolve: ({ Vc, t, τ }) => {
      const result = Vc / Math.exp(-t / τ);
      return { result: { V_0: formatNumber(result) }, steps: [`V_0 = ${Vc}V / e^(-${t}s/${τ}s) = ${formatNumber(result)} V`] };
    }
  },
  {
    id: "voltaje-capacitor-descarga-t",
    groupId: "comportamiento-capacitor-descarga",
    title: "Calcular Tiempo (t)",
    formula: "t = -τ * ln(Vc(t) / V_0)",
    variables: [
        { symbol: "τ", label: "Constante de Tiempo RC (s)", unit: "s" },
        { symbol: "Vc", label: "Voltaje en Capacitor (V)", unit: "V" },
        { symbol: "V_0", label: "Voltaje Inicial (V)", unit: "V" }
    ],
    output: { symbol: "t", label: "Tiempo (s)", unit: "s" },
    resolve: ({ τ, Vc, V_0 }) => {
      const result = -τ * Math.log(Vc / V_0);
      return { result: { t: formatNumber(result) }, steps: [`t = -${τ}s * ln(${Vc}V / ${V_0}V) = ${formatNumber(result)} s`] };
    }
  },
  {
    id: "voltaje-capacitor-descarga-tau",
    groupId: "comportamiento-capacitor-descarga",
    title: "Calcular Constante de Tiempo (τ)",
    formula: "τ = -t / ln(Vc(t) / V_0)",
    variables: [
        { symbol: "t", label: "Tiempo (s)", unit: "s" },
        { symbol: "Vc", label: "Voltaje en Capacitor (V)", unit: "V" },
        { symbol: "V_0", label: "Voltaje Inicial (V)", unit: "V" }
    ],
    output: { symbol: "τ", label: "Constante de Tiempo RC (s)", unit: "s" },
    resolve: ({ t, Vc, V_0 }) => {
      const result = -t / Math.log(Vc / V_0);
      return { result: { τ: formatNumber(result) }, steps: [`τ = -${t}s / ln(${Vc}V / ${V_0}V) = ${formatNumber(result)} s`] };
    }
  },

  // Grupo 5: Carga del Inductor
  {
    id: "corriente-inductor-carga",
    groupId: "comportamiento-inductor-carga",
    title: "Corriente en Inductor durante la Carga (IL)",
    formula: "I_L(t) = I_f * (1 - e^(-t/τ))",
    variables: [
        { symbol: "I_f", label: "Corriente Final (I = V/R) (A)", unit: "A" },
        { symbol: "t", label: "Tiempo (s)", unit: "s" },
        { symbol: "τ", label: "Constante de Tiempo RL (s)", unit: "s" }
    ],
    output: { symbol: "I_L", label: "Corriente en Inductor (A)", unit: "A" },
    resolve: ({ I_f, t, τ }) => {
        const result = I_f * (1 - Math.exp(-t / τ));
        return { result: { I_L: formatNumber(result) }, steps: [`I_L(${t}s) = ${I_f}A * (1 - e^(-${t}s/${τ}s)) = ${formatNumber(result)} A`] };
    }
  },
  {
    id: "corriente-inductor-carga-if",
    groupId: "comportamiento-inductor-carga",
    title: "Calcular Corriente Final (If)",
    formula: "I_f = I_L(t) / (1 - e^(-t/τ))",
    variables: [
        { symbol: "I_L", label: "Corriente en Inductor (A)", unit: "A" },
        { symbol: "t", label: "Tiempo (s)", unit: "s" },
        { symbol: "τ", label: "Constante de Tiempo RL (s)", unit: "s" }
    ],
    output: { symbol: "I_f", label: "Corriente Final (A)", unit: "A" },
    resolve: ({ I_L, t, τ }) => {
      const result = I_L / (1 - Math.exp(-t / τ));
      return { result: { I_f: formatNumber(result) }, steps: [`I_f = ${I_L}A / (1 - e^(-${t}s/${τ}s)) = ${formatNumber(result)} A`] };
    }
  },
  {
    id: "corriente-inductor-carga-t",
    groupId: "comportamiento-inductor-carga",
    title: "Calcular Tiempo (t)",
    formula: "t = -τ * ln(1 - I_L(t) / I_f)",
    variables: [
        { symbol: "τ", label: "Constante de Tiempo RL (s)", unit: "s" },
        { symbol: "I_L", label: "Corriente en Inductor (A)", unit: "A" },
        { symbol: "I_f", label: "Corriente Final (A)", unit: "A" }
    ],
    output: { symbol: "t", label: "Tiempo (s)", unit: "s" },
    resolve: ({ τ, I_L, I_f }) => {
      const result = -τ * Math.log(1 - I_L / I_f);
      return { result: { t: formatNumber(result) }, steps: [`t = -${τ}s * ln(1 - ${I_L}A / ${I_f}A) = ${formatNumber(result)} s`] };
    }
  },
  {
    id: "corriente-inductor-carga-tau",
    groupId: "comportamiento-inductor-carga",
    title: "Calcular Constante de Tiempo (τ)",
    formula: "τ = -t / ln(1 - I_L(t) / I_f)",
    variables: [
        { symbol: "t", label: "Tiempo (s)", unit: "s" },
        { symbol: "I_L", label: "Corriente en Inductor (A)", unit: "A" },
        { symbol: "I_f", label: "Corriente Final (A)", unit: "A" }
    ],
    output: { symbol: "τ", label: "Constante de Tiempo RL (s)", unit: "s" },
    resolve: ({ t, I_L, I_f }) => {
      const result = -t / Math.log(1 - I_L / I_f);
      return { result: { τ: formatNumber(result) }, steps: [`τ = -${t}s / ln(1 - ${I_L}A / ${I_f}A) = ${formatNumber(result)} s`] };
    }
  },

  // Grupo 6: Descarga del Inductor
  {
    id: "corriente-inductor-descarga",
    groupId: "comportamiento-inductor-descarga",
    title: "Corriente en Inductor durante la Descarga (IL)",
    formula: "I_L(t) = I_0 * e^(-t/τ)",
    variables: [
        { symbol: "I_0", label: "Corriente Inicial (A)", unit: "A" },
        { symbol: "t", label: "Tiempo (s)", unit: "s" },
        { symbol: "τ", label: "Constante de Tiempo RL (s)", unit: "s" }
    ],
    output: { symbol: "I_L", label: "Corriente en Inductor (A)", unit: "A" },
    resolve: ({ I_0, t, τ }) => {
        const result = I_0 * Math.exp(-t / τ);
        return { result: { I_L: formatNumber(result) }, steps: [`I_L(${t}s) = ${I_0}A * e^(-${t}s/${τ}s) = ${formatNumber(result)} A`] };
    }
  },
  {
    id: "corriente-inductor-descarga-i0",
    groupId: "comportamiento-inductor-descarga",
    title: "Calcular Corriente Inicial (I0)",
    formula: "I_0 = I_L(t) / e^(-t/τ)",
    variables: [
        { symbol: "I_L", label: "Corriente en Inductor (A)", unit: "A" },
        { symbol: "t", label: "Tiempo (s)", unit: "s" },
        { symbol: "τ", label: "Constante de Tiempo RL (s)", unit: "s" }
    ],
    output: { symbol: "I_0", label: "Corriente Inicial (A)", unit: "A" },
    resolve: ({ I_L, t, τ }) => {
      const result = I_L / Math.exp(-t / τ);
      return { result: { I_0: formatNumber(result) }, steps: [`I_0 = ${I_L}A / e^(-${t}s/${τ}s) = ${formatNumber(result)} A`] };
    }
  },
  {
    id: "corriente-inductor-descarga-t",
    groupId: "comportamiento-inductor-descarga",
    title: "Calcular Tiempo (t)",
    formula: "t = -τ * ln(I_L(t) / I_0)",
    variables: [
        { symbol: "τ", label: "Constante de Tiempo RL (s)", unit: "s" },
        { symbol: "I_L", label: "Corriente en Inductor (A)", unit: "A" },
        { symbol: "I_0", label: "Corriente Inicial (A)", unit: "A" }
    ],
    output: { symbol: "t", label: "Tiempo (s)", unit: "s" },
    resolve: ({ τ, I_L, I_0 }) => {
      const result = -τ * Math.log(I_L / I_0);
      return { result: { t: formatNumber(result) }, steps: [`t = -${τ}s * ln(${I_L}A / ${I_0}A) = ${formatNumber(result)} s`] };
    }
  },
  {
    id: "corriente-inductor-descarga-tau",
    groupId: "comportamiento-inductor-descarga",
    title: "Calcular Constante de Tiempo (τ)",
    formula: "τ = -t / ln(I_L(t) / I_0)",
    variables: [
        { symbol: "t", label: "Tiempo (s)", unit: "s" },
        { symbol: "I_L", label: "Corriente en Inductor (A)", unit: "A" },
        { symbol: "I_0", label: "Corriente Inicial (A)", unit: "A" }
    ],
    output: { symbol: "τ", label: "Constante de Tiempo RL (s)", unit: "s" },
    resolve: ({ t, I_L, I_0 }) => {
      const result = -t / Math.log(I_L / I_0);
      return { result: { τ: formatNumber(result) }, steps: [`τ = -${t}s / ln(${I_L}A / ${I_0}A) = ${formatNumber(result)} s`] };
    }
  }
  ,
  // Grupo 7: Transitorios RLC (clasificación de amortiguamiento)
  {
    id: "rlc-damping",
    groupId: "transitorio-rlc",
    title: "Clasificar Amortiguamiento en RLC (serie)",
    isFundamental: true,
    formula: "α = R/(2L), \; ω_0 = 1/\sqrt{LC}, \; Δ = α^2 - ω_0^2",
    variables: [
      { symbol: "R", label: "Resistencia (Ω)", unit: "Ω" },
      { symbol: "L", label: "Inductancia (H)", unit: "H" },
      { symbol: "C", label: "Capacitancia (F)", unit: "F" }
    ],
    output: { symbol: "damping", label: "Tipo de amortiguamiento", unit: "" },
    resolve: ({ R, L, C }) => {
      const r = parseFloat(R);
      const l = parseFloat(L);
      const c = parseFloat(C);
      if (!isFinite(r) || !isFinite(l) || !isFinite(c)) return { error: 'Entradas inválidas' };
      if (l === 0 || c === 0) return { error: 'L y C deben ser distintos de cero.' };
      const alpha = r / (2 * l);
      const omega0 = 1 / Math.sqrt(l * c);
      const delta = alpha * alpha - omega0 * omega0;
      let damping = 'critico';
      let s1 = null;
      let s2 = null;
      let omega_d = null;
      if (delta > 1e-12) {
        damping = 'sobreamortiguado';
        const sq = Math.sqrt(delta);
        s1 = -alpha + sq;
        s2 = -alpha - sq;
      } else if (Math.abs(delta) <= 1e-12) {
        damping = 'critico';
        s1 = s2 = -alpha;
      } else {
        damping = 'subamortiguado';
        omega_d = Math.sqrt(-delta);
        s1 = `${formatNumber(-alpha)} + ${formatNumber(omega_d)}i`;
        s2 = `${formatNumber(-alpha)} - ${formatNumber(omega_d)}i`;
      }
      const steps = [`α = R/(2L) = ${formatNumber(alpha)}`, `ω₀ = 1/√(LC) = ${formatNumber(omega0)}`, `Δ = α² - ω₀² = ${formatNumber(delta)}`, `Amortiguamiento: ${damping}`];
      const result = { alpha: formatNumber(alpha), omega0: formatNumber(omega0), delta: formatNumber(delta), damping, s1, s2, omega_d: omega_d ? formatNumber(omega_d) : null };
      return { result, steps };
    }
  },
  {
    id: "rlc-roots",
    groupId: "transitorio-rlc",
    title: "Raíces características (s1, s2) de RLC serie",
    isFundamental: false,
    formula: "s = -α ± √(α² - ω₀²)",
    variables: [
      { symbol: "R", label: "Resistencia (Ω)", unit: "Ω" },
      { symbol: "L", label: "Inductancia (H)", unit: "H" },
      { symbol: "C", label: "Capacitancia (F)", unit: "F" }
    ],
    output: { symbol: "s", label: "Raíces s1, s2", unit: "s^{-1}" },
    resolve: ({ R, L, C }) => {
      const r = parseFloat(R);
      const l = parseFloat(L);
      const c = parseFloat(C);
      if (!isFinite(r) || !isFinite(l) || !isFinite(c)) return { error: 'Entradas inválidas' };
      if (l === 0 || c === 0) return { error: 'L y C deben ser distintos de cero.' };
      const alpha = r / (2 * l);
      const omega0 = 1 / Math.sqrt(l * c);
      const delta = alpha * alpha - omega0 * omega0;
      if (delta >= 0) {
        const sq = Math.sqrt(delta);
        const s1 = -alpha + sq;
        const s2 = -alpha - sq;
        return { result: { s1: formatNumber(s1), s2: formatNumber(s2) }, steps: [`s1 = ${formatNumber(s1)}`, `s2 = ${formatNumber(s2)}`] };
      } else {
        const omega_d = Math.sqrt(-delta);
        const real = -alpha;
        return { result: { s1: `${formatNumber(real)} + ${formatNumber(omega_d)}i`, s2: `${formatNumber(real)} - ${formatNumber(omega_d)}i` }, steps: [`s = -α ± jω_d = ${formatNumber(real)} ± ${formatNumber(omega_d)}j`] };
      }
    }
  }
];