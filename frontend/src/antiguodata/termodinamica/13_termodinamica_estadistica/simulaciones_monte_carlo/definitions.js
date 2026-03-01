// Removed unnecessary imports and constants
export const definitions = [
  // Grupo 1: Criterio de Metropolis
  {
    id: 'metropolis-criterio-calc',
    groupId: 'metropolis-criterio',
    title: 'Criterio de Metropolis',
    isFundamental: true,
    formula: String.raw`P_{aceptar} = \min(1, e^{-\beta \Delta E})`,
    variables: [
      { symbol: 'deltaE', label: 'Cambio de energía ΔE', unit: 'J' },
      { symbol: 'T', label: 'Temperatura T', unit: 'K' }
    ],
    output: { symbol: 'P_aceptar', label: 'Probabilidad de aceptación', unit: '-' },
    resolve: ({ deltaE, T }) => {
      const numDelta = parseFloat(deltaE);
      const numT = parseFloat(T);
      const beta = 1 / (kB * numT);
      const factor = Math.exp(-beta * numDelta);
      const P_aceptar = Math.min(1, factor);
      const porcentaje = P_aceptar * 100;
      return {
        result: { P_aceptar: formatNumber(P_aceptar) },
        steps: [
          `β = 1/(k_B T) = ${formatNumber(beta)} J⁻¹`,
          `e^(-β ΔE) = e^(${formatNumber(-beta * numDelta)}) = ${formatNumber(factor)}`,
          `P_aceptar = min(1, ${formatNumber(factor)}) = ${formatNumber(P_aceptar)}`,
          `P_aceptar = ${formatNumber(porcentaje)}%`
        ]
      };
    }
  },

  // Grupo 2: Promedio Monte Carlo
  {
    id: 'promedio-mc-calc',
    groupId: 'promedio-mc',
    title: 'Promedio Monte Carlo',
    isFundamental: true,
    formula: String.raw`\langle A \rangle = \frac{1}{N} \sum_{i=1}^N A_i`,
    variables: [
      { symbol: 'suma_A', label: 'Suma Σ A_i', unit: 'J' },
      { symbol: 'N', label: 'Número de mediciones N', unit: '-' }
    ],
    output: { symbol: 'promedio_A', label: '⟨A⟩', unit: 'J' },
    resolve: ({ suma_A, N }) => {
      const numSuma = parseFloat(suma_A);
      const numN = parseFloat(N);
      if (numN === 0) return { error: 'N no puede ser cero.' };
      const promedio_A = numSuma / numN;
      return {
        result: { promedio_A: formatNumber(promedio_A) },
        steps: [
          `⟨A⟩ = Σ A_i / N`,
          `⟨A⟩ = ${numSuma} / ${numN}`,
          `⟨A⟩ = ${formatNumber(promedio_A)} J`
        ]
      };
    }
  },

  // Grupo 3: Error estadístico
  {
    id: 'error-mc-calc',
    groupId: 'error-mc',
    title: 'Error Estadístico MC',
    isFundamental: true,
    formula: String.raw`\sigma_A = \sqrt{\frac{\sigma^2}{N_{eff}}}`,
    variables: [
      { symbol: 'promedio_A', label: '⟨A⟩', unit: 'J' },
      { symbol: 'promedio_A2', label: '⟨A²⟩', unit: 'J²' },
      { symbol: 'N_eff', label: 'N efectivo', unit: '-' }
    ],
    output: { symbol: 'sigma_A', label: 'Error σ_A', unit: 'J' },
    resolve: ({ promedio_A, promedio_A2, N_eff }) => {
      const numA = parseFloat(promedio_A);
      const numA2 = parseFloat(promedio_A2);
      const numN = parseFloat(N_eff);
      const varianza = numA2 - numA * numA;
      const sigma_A = Math.sqrt(varianza / numN);
      const error_rel = (sigma_A / numA) * 100;
      return {
        result: { sigma_A: formatNumber(sigma_A) },
        steps: [
          `σ² = ⟨A²⟩ - ⟨A⟩² = ${numA2} - ${formatNumber(numA * numA)} = ${formatNumber(varianza)}`,
          `σ_A = √(σ²/N_eff) = √(${formatNumber(varianza)}/${numN})`,
          `σ_A = ${formatNumber(sigma_A)} J`,
          `Error relativo = ${formatNumber(error_rel)}%`
        ]
      };
    }
  },

  // Grupo 4: Tasa de aceptación
  {
    id: 'tasa-aceptacion-calc',
    groupId: 'tasa-aceptacion',
    title: 'Tasa de Aceptación',
    isFundamental: true,
    formula: String.raw`\text{Tasa} = \frac{N_{aceptados}}{N_{propuestos}}`,
    variables: [
      { symbol: 'N_aceptados', label: 'Movimientos aceptados', unit: '-' },
      { symbol: 'N_propuestos', label: 'Movimientos propuestos', unit: '-' }
    ],
    output: { symbol: 'tasa', label: 'Tasa de aceptación', unit: '-' },
    resolve: ({ N_aceptados, N_propuestos }) => {
      const numAcep = parseFloat(N_aceptados);
      const numProp = parseFloat(N_propuestos);
      if (numProp === 0) return { error: 'N_propuestos no puede ser cero.' };
      const tasa = numAcep / numProp;
      const porcentaje = tasa * 100;
      return {
        result: { tasa: formatNumber(tasa) },
        steps: [
          `Tasa = N_aceptados / N_propuestos`,
          `Tasa = ${numAcep} / ${numProp}`,
          `Tasa = ${formatNumber(tasa)} = ${formatNumber(porcentaje)}%`
        ]
      };
    }
  },

  // Grupo 5: Tiempo de autocorrelación
  {
    id: 'tiempo-autocorrelacion-calc',
    groupId: 'tiempo-autocorrelacion',
    title: 'Tiempo de Autocorrelación',
    isFundamental: true,
    formula: String.raw`\tau = -\frac{1}{\ln|\rho|}`,
    variables: [
      { symbol: 'C0', label: 'C(0)', unit: '-' },
      { symbol: 'C1', label: 'C(1)', unit: '-' }
    ],
    output: { symbol: 'tau', label: 'Tiempo τ', unit: 'pasos MC' },
    resolve: ({ C0, C1 }) => {
      const numC0 = parseFloat(C0);
      const numC1 = parseFloat(C1);
      if (numC0 === 0) return { error: 'C(0) no puede ser cero.' };
      const rho = numC1 / numC0;
      if (Math.abs(rho) >= 1) return { error: '|ρ| debe ser < 1.' };
      const tau = -1 / Math.log(Math.abs(rho));
      return {
        result: { tau: formatNumber(tau) },
        steps: [
          `ρ = C(1)/C(0) = ${numC1}/${numC0} = ${formatNumber(rho)}`,
          `τ = -1/ln|ρ| = -1/ln(${formatNumber(Math.abs(rho))})`,
          `τ = ${formatNumber(tau)} pasos MC`
        ]
      };
    }
  },

  // Grupo 6: Cambio de energía en Ising
  {
    id: 'energia-ising-2d-calc',
    groupId: 'energia-ising-2d',
    title: 'Cambio de Energía Ising',
    isFundamental: true,
    formula: String.raw`\Delta E = 2 J s_i \sum_j s_j`,
    variables: [
      { symbol: 'J', label: 'Acoplamiento J', unit: 'J' },
      { symbol: 'si', label: 'Spin s_i', unit: '-' },
      { symbol: 'suma_vecinos', label: 'Σ s_j vecinos', unit: '-' }
    ],
    output: { symbol: 'deltaE', label: 'ΔE', unit: 'J' },
    resolve: ({ J, si, suma_vecinos }) => {
      const numJ = parseFloat(J);
      const numSi = parseFloat(si);
      const numSuma = parseFloat(suma_vecinos);
      const deltaE = 2 * numJ * numSi * numSuma;
      return {
        result: { deltaE: formatNumber(deltaE) },
        steps: [
          `ΔE = 2 × J × s_i × Σs_j`,
          `ΔE = 2 × ${numJ} × ${numSi} × ${numSuma}`,
          `ΔE = ${formatNumber(deltaE)} J`
        ]
      };
    }
  },

  // Grupo 7: Magnetización
  {
    id: 'magnetizacion-ising-calc',
    groupId: 'magnetizacion-ising',
    title: 'Magnetización',
    isFundamental: true,
    formula: String.raw`m = \frac{\sum_i s_i}{N}`,
    variables: [
      { symbol: 'suma_spins', label: 'Σ spins', unit: '-' },
      { symbol: 'N_spins', label: 'Número de spins N', unit: '-' }
    ],
    output: { symbol: 'm', label: 'Magnetización m', unit: '-' },
    resolve: ({ suma_spins, N_spins }) => {
      const numSuma = parseFloat(suma_spins);
      const numN = parseFloat(N_spins);
      if (numN === 0) return { error: 'N no puede ser cero.' };
      const m = numSuma / numN;
      const porcentaje = Math.abs(m) * 100;
      return {
        result: { m: formatNumber(m) },
        steps: [
          `m = Σ spins / N`,
          `m = ${numSuma} / ${numN}`,
          `m = ${formatNumber(m)}`,
          `Alineación = ${formatNumber(porcentaje)}%`
        ]
      };
    }
  },

  // Grupo 8: Calor específico desde fluctuaciones
  {
    id: 'calor-especifico-mc-calc',
    groupId: 'calor-especifico-mc',
    title: 'Calor Específico desde Fluctuaciones',
    isFundamental: true,
    formula: String.raw`C_V = \frac{\sigma_E^2}{k_B T^2}`,
    variables: [
      { symbol: 'promedio_E', label: '⟨E⟩', unit: 'J' },
      { symbol: 'promedio_E2', label: '⟨E²⟩', unit: 'J²' },
      { symbol: 'T', label: 'Temperatura T', unit: 'K' }
    ],
    output: { symbol: 'CV', label: 'Calor específico C_V', unit: 'J/K' },
    resolve: ({ promedio_E, promedio_E2, T }) => {
      const numE = parseFloat(promedio_E);
      const numE2 = parseFloat(promedio_E2);
      const numT = parseFloat(T);
      const varianza = numE2 - numE * numE;
      const CV = varianza / (kB * numT * numT);
      return {
        result: { CV: formatNumber(CV) },
        steps: [
          `σ²_E = ⟨E²⟩ - ⟨E⟩² = ${numE2} - ${formatNumber(numE * numE)} = ${formatNumber(varianza)} J²`,
          `C_V = σ²_E / (k_B T²)`,
          `C_V = ${formatNumber(varianza)} / (${kB} × ${numT}²)`,
          `C_V = ${formatNumber(CV)} J/K`
        ]
      };
    }
  },

  // Grupo 9: Temperatura crítica Ising 2D
  {
    id: 'temperatura-critica-ising-calc',
    groupId: 'temperatura-critica-ising',
    title: 'Temperatura Crítica Ising 2D',
    isFundamental: true,
    formula: String.raw`T_c = \frac{2J}{k_B \ln(1 + \sqrt{2})}`,
    variables: [
      { symbol: 'J', label: 'Acoplamiento J', unit: 'J' }
    ],
    output: { symbol: 'Tc', label: 'Temperatura crítica T_c', unit: 'K' },
    resolve: ({ J }) => {
      const numJ = parseFloat(J);
      const factor = Math.log(1 + Math.sqrt(2));
      const Tc = (2 * numJ) / (kB * factor);
      return {
        result: { Tc: formatNumber(Tc) },
        steps: [
          `ln(1 + √2) = ${formatNumber(factor)}`,
          `T_c = 2J / (k_B × ln(1 + √2))`,
          `T_c = 2 × ${numJ} / (${kB} × ${formatNumber(factor)})`,
          `T_c = ${formatNumber(Tc)} K`
        ]
      };
    }
  }
];
