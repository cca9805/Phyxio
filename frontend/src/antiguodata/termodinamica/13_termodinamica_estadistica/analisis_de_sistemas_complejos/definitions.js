import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // Grupo 1: Exponente α - Calor específico
  {
    id: 'calor-especifico-critico',
    groupId: 'exponente-alpha',
    title: 'Calor Específico Crítico',
    isFundamental: true,
    formula: 'C = A * |t|^(-alpha)',
    variables: [
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' },
      { symbol: 'Tc', label: 'Temperatura Crítica (T_c)', unit: 'K' },
      { symbol: 'alpha', label: 'Exponente crítico α', unit: '-', defaultValue: 0.11 },
      { symbol: 'A', label: 'Amplitud (A)', unit: 'J/K', defaultValue: 100 }
    ],
    output: { symbol: 'C', label: 'Calor Específico (C)', unit: 'J/K' },
    resolve: ({ T, Tc, alpha, A }) => {
      const numT = parseFloat(T);
      const numTc = parseFloat(Tc);
      const numAlpha = parseFloat(alpha);
      const numA = parseFloat(A);
      const t = Math.abs(numT - numTc) / numTc;
      const C = numA * Math.pow(t, -numAlpha);
      return {
        result: { C: formatNumber(C) },
        steps: [
          `t = |T - T_c| / T_c = |${numT} - ${numTc}| / ${numTc} = ${formatNumber(t)}`,
          `C = A × t^(-α) = ${numA} × ${formatNumber(t)}^(-${numAlpha})`,
          `C = ${formatNumber(C)} J/K`
        ]
      };
    }
  },

  // Grupo 2: Exponente β - Parámetro de orden
  {
    id: 'parametro-orden',
    groupId: 'exponente-beta',
    title: 'Parámetro de Orden',
    isFundamental: true,
    formula: 'm = B * |t|^(beta)',
    variables: [
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' },
      { symbol: 'Tc', label: 'Temperatura Crítica (T_c)', unit: 'K' },
      { symbol: 'beta', label: 'Exponente crítico β', unit: '-', defaultValue: 0.326 },
      { symbol: 'B', label: 'Amplitud (B)', unit: '-', defaultValue: 1 }
    ],
    output: { symbol: 'm', label: 'Parámetro de Orden (m)', unit: '-' },
    resolve: ({ T, Tc, beta, B }) => {
      const numT = parseFloat(T);
      const numTc = parseFloat(Tc);
      const numBeta = parseFloat(beta);
      const numB = parseFloat(B);
      if (numT >= numTc) return { error: 'T debe ser menor que T_c para el parámetro de orden.' };
      const t = (numTc - numT) / numTc;
      const m = numB * Math.pow(t, numBeta);
      return {
        result: { m: formatNumber(m) },
        steps: [
          `t = (T_c - T) / T_c = (${numTc} - ${numT}) / ${numTc} = ${formatNumber(t)}`,
          `m = B × t^β = ${numB} × ${formatNumber(t)}^${numBeta}`,
          `m = ${formatNumber(m)}`
        ]
      };
    }
  },

  // Grupo 3: Exponente γ - Susceptibilidad
  {
    id: 'susceptibilidad-critica',
    groupId: 'exponente-gamma',
    title: 'Susceptibilidad Crítica',
    isFundamental: true,
    formula: 'chi = Gamma * |t|^(-gamma)',
    variables: [
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' },
      { symbol: 'Tc', label: 'Temperatura Crítica (T_c)', unit: 'K' },
      { symbol: 'gamma', label: 'Exponente crítico γ', unit: '-', defaultValue: 1.24 },
      { symbol: 'Gamma', label: 'Amplitud (Γ)', unit: '-', defaultValue: 10 }
    ],
    output: { symbol: 'chi', label: 'Susceptibilidad (χ)', unit: '-' },
    resolve: ({ T, Tc, gamma, Gamma }) => {
      const numT = parseFloat(T);
      const numTc = parseFloat(Tc);
      const numGamma = parseFloat(gamma);
      const numGammaAmp = parseFloat(Gamma);
      const t = Math.abs(numT - numTc) / numTc;
      const chi = numGammaAmp * Math.pow(t, -numGamma);
      return {
        result: { chi: formatNumber(chi) },
        steps: [
          `t = |T - T_c| / T_c = ${formatNumber(t)}`,
          `χ = Γ × t^(-γ) = ${numGammaAmp} × ${formatNumber(t)}^(-${numGamma})`,
          `χ = ${formatNumber(chi)}`
        ]
      };
    }
  },

  // Grupo 4: Exponente ν - Longitud de correlación
  {
    id: 'longitud-correlacion',
    groupId: 'exponente-nu',
    title: 'Longitud de Correlación',
    isFundamental: true,
    formula: 'xi = xi0 * |t|^(-nu)',
    variables: [
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' },
      { symbol: 'Tc', label: 'Temperatura Crítica (T_c)', unit: 'K' },
      { symbol: 'nu', label: 'Exponente crítico ν', unit: '-', defaultValue: 0.63 },
      { symbol: 'xi0', label: 'Longitud característica ξ₀', unit: 'nm', defaultValue: 0.3 }
    ],
    output: { symbol: 'xi', label: 'Longitud de Correlación (ξ)', unit: 'nm' },
    resolve: ({ T, Tc, nu, xi0 }) => {
      const numT = parseFloat(T);
      const numTc = parseFloat(Tc);
      const numNu = parseFloat(nu);
      const numXi0 = parseFloat(xi0);
      const t = Math.abs(numT - numTc) / numTc;
      const xi = numXi0 * Math.pow(t, -numNu);
      return {
        result: { xi: formatNumber(xi) },
        steps: [
          `t = |T - T_c| / T_c = ${formatNumber(t)}`,
          `ξ = ξ₀ × t^(-ν) = ${numXi0} × ${formatNumber(t)}^(-${numNu})`,
          `ξ = ${formatNumber(xi)} nm`
        ]
      };
    }
  },

  // Grupo 5: Relación de Rushbrooke
  {
    id: 'relacion-rushbrooke',
    groupId: 'relacion-rushbrooke',
    title: 'Relación de Rushbrooke',
    isFundamental: true,
    formula: 'alpha + 2*beta + gamma = 2',
    variables: [
      { symbol: 'alpha', label: 'Exponente crítico α', unit: '-' },
      { symbol: 'beta', label: 'Exponente crítico β', unit: '-' },
      { symbol: 'gamma', label: 'Exponente crítico γ', unit: '-' }
    ],
    output: { symbol: 'suma', label: 'Suma α + 2β + γ', unit: '-' },
    resolve: ({ alpha, beta, gamma }) => {
      const numAlpha = parseFloat(alpha);
      const numBeta = parseFloat(beta);
      const numGamma = parseFloat(gamma);
      const suma = numAlpha + 2 * numBeta + numGamma;
      const desviacion = Math.abs(suma - 2) / 2 * 100;
      return {
        result: { suma: formatNumber(suma) },
        steps: [
          `Suma = α + 2β + γ`,
          `Suma = ${numAlpha} + 2(${numBeta}) + ${numGamma}`,
          `Suma = ${formatNumber(suma)}`,
          `Desviación = ${formatNumber(desviacion)}%`
        ]
      };
    }
  },

  // Grupo 6: Relación de Fisher
  {
    id: 'relacion-fisher',
    groupId: 'relacion-fisher',
    title: 'Relación de Fisher',
    isFundamental: true,
    formula: 'gamma = nu * (2 - eta)',
    variables: [
      { symbol: 'nu', label: 'Exponente crítico ν', unit: '-' },
      { symbol: 'eta', label: 'Exponente crítico η', unit: '-' }
    ],
    output: { symbol: 'gamma_calc', label: 'γ calculado', unit: '-' },
    resolve: ({ nu, eta }) => {
      const numNu = parseFloat(nu);
      const numEta = parseFloat(eta);
      const gamma_calc = numNu * (2 - numEta);
      return {
        result: { gamma_calc: formatNumber(gamma_calc) },
        steps: [
          `γ = ν × (2 - η)`,
          `γ = ${numNu} × (2 - ${numEta})`,
          `γ = ${numNu} × ${formatNumber(2 - numEta)}`,
          `γ = ${formatNumber(gamma_calc)}`
        ]
      };
    }
  },

  // Grupo 7: Ecuación maestra
  {
    id: 'ecuacion-maestra',
    groupId: 'ecuacion-maestra',
    title: 'Ecuación Maestra',
    isFundamental: true,
    formula: 'dPi/dt = Wij * Pj - Wji * Pi',
    variables: [
      { symbol: 'Wij', label: 'Tasa de transición W_ij', unit: 's⁻¹' },
      { symbol: 'Wji', label: 'Tasa de transición W_ji', unit: 's⁻¹' },
      { symbol: 'Pj', label: 'Probabilidad del estado j (P_j)', unit: '-' },
      { symbol: 'Pi', label: 'Probabilidad del estado i (P_i)', unit: '-' }
    ],
    output: { symbol: 'dPi_dt', label: 'dP_i/dt', unit: 's⁻¹' },
    resolve: ({ Wij, Wji, Pj, Pi }) => {
      const numWij = parseFloat(Wij);
      const numWji = parseFloat(Wji);
      const numPj = parseFloat(Pj);
      const numPi = parseFloat(Pi);
      const dPi_dt = numWij * numPj - numWji * numPi;
      return {
        result: { dPi_dt: formatNumber(dPi_dt) },
        steps: [
          `dP_i/dt = W_ij × P_j - W_ji × P_i`,
          `dP_i/dt = ${numWij} × ${numPj} - ${numWji} × ${numPi}`,
          `dP_i/dt = ${formatNumber(numWij * numPj)} - ${formatNumber(numWji * numPi)}`,
          `dP_i/dt = ${formatNumber(dPi_dt)} s⁻¹`
        ]
      };
    }
  },

  // Grupo 8: Balance detallado
  {
    id: 'balance-detallado',
    groupId: 'balance-detallado',
    title: 'Balance Detallado',
    isFundamental: true,
    formula: 'Wij * Pj_eq = Wji * Pi_eq',
    variables: [
      { symbol: 'Wij', label: 'Tasa de transición W_ij', unit: 's⁻¹' },
      { symbol: 'Wji', label: 'Tasa de transición W_ji', unit: 's⁻¹' },
      { symbol: 'Pj_eq', label: 'Probabilidad de equilibrio del estado j (P_j^eq)', unit: '-' },
      { symbol: 'Pi_eq', label: 'Probabilidad de equilibrio del estado i (P_i^eq)', unit: '-' }
    ],
    output: { symbol: 'balance', label: 'Verificación', unit: '-' },
    resolve: ({ Wij, Wji, Pj_eq, Pi_eq }) => {
      const numWij = parseFloat(Wij);
      const numWji = parseFloat(Wji);
      const numPj = parseFloat(Pj_eq);
      const numPi = parseFloat(Pi_eq);
      const flujo_ji = numWij * numPj;
      const flujo_ij = numWji * numPi;
      const desbalance = Math.abs(flujo_ji - flujo_ij) / flujo_ji * 100;
      return {
        result: { balance: formatNumber(desbalance) },
        steps: [
          `Flujo j→i: W_ij × P_j = ${numWij} × ${numPj} = ${formatNumber(flujo_ji)}`,
          `Flujo i→j: W_ji × P_i = ${numWji} × ${numPi} = ${formatNumber(flujo_ij)}`,
          `Desbalance = ${formatNumber(desbalance)}%`,
          desbalance < 1 ? 'Balance verificado' : 'Balance no verificado'
        ]
      };
    }
  },

  // Grupo 9: Percolación
  {
    id: 'percolacion-umbral',
    groupId: 'percolacion-umbral',
    title: 'Percolación - Cluster Infinito',
    isFundamental: true,
    formula: 'P_inf = (p - pc)^(beta_perc)',
    variables: [
      { symbol: 'p', label: 'Probabilidad de ocupación p', unit: '-' },
      { symbol: 'pc', label: 'Umbral crítico p_c', unit: '-', defaultValue: 0.5927 },
      { symbol: 'beta_perc', label: 'Exponente crítico β_perc', unit: '-', defaultValue: 0.139 }
    ],
    output: { symbol: 'P_inf', label: 'P_∞', unit: '-' },
    resolve: ({ p, pc, beta_perc }) => {
      const numP = parseFloat(p);
      const numPc = parseFloat(pc);
      const numBeta = parseFloat(beta_perc);
      if (numP <= numPc) return { error: 'p debe ser mayor que p_c.' };
      const P_inf = Math.pow(numP - numPc, numBeta);
      const porcentaje = P_inf * 100;
      return {
        result: { P_inf: formatNumber(P_inf) },
        steps: [
          `P_∞ = (p - p_c)^β_perc`,
          `P_∞ = (${numP} - ${numPc})^${numBeta}`,
          `P_∞ = ${formatNumber(numP - numPc)}^${numBeta}`,
          `P_∞ = ${formatNumber(P_inf)} (${formatNumber(porcentaje)}%)`
        ]
      };
    }
  }
];
