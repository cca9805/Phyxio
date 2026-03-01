import { formatNumber } from '../../../../utils/formatNumber';

// Constantes físicas
const c = 299792458; // Velocidad de la luz (m/s)
const k_B = 1.380649e-23; // Constante de Boltzmann (J/K)

export const definitions = [
  // Grupo 1: Ecuación de Friis para comunicaciones
  {
    id: 'friis-potencia-recibida',
    groupId: 'ecuacion_friis',
    title: 'Ecuación de Friis - Potencia Recibida',
    isFundamental: true,
    formula: 'Pr = Pt⋅Gt⋅Gr⋅(λ/4πR)²',
    variables: [
      { symbol: 'Pt_dBm', label: 'Potencia transmitida (Pt)', unit: 'dBm' },
      { symbol: 'Gt_dB', label: 'Ganancia antena Tx (Gt)', unit: 'dB' },
      { symbol: 'Gr_dB', label: 'Ganancia antena Rx (Gr)', unit: 'dB' },
      { symbol: 'f_MHz', label: 'Frecuencia (f)', unit: 'MHz' },
      { symbol: 'R_km', label: 'Distancia (R)', unit: 'km' }
    ],
    output: { symbol: 'Pr_dBm', label: 'Potencia recibida (Pr)', unit: 'dBm' },
    donde: "Pr es la potencia recibida, Pt es la potencia transmitida, Gt y Gr son las ganancias de las antenas transmisora y receptora, f es la frecuencia y R es la distancia",
    resolve: ({ Pt_dBm, Gt_dB, Gr_dB, f_MHz, R_km }) => {
      const Pt = parseFloat(Pt_dBm);
      const Gt = parseFloat(Gt_dB);
      const Gr = parseFloat(Gr_dB);
      const f = parseFloat(f_MHz) * 1e6; // Convertir MHz a Hz
      const R = parseFloat(R_km) * 1000; // Convertir km a m
      
      if (Pt < -100 || Pt > 100) return { error: 'Potencia transmitida fuera de rango típico.' };
      if (f <= 0) return { error: 'La frecuencia debe ser positiva.' };
      if (R <= 0) return { error: 'La distancia debe ser positiva.' };
      
      const lambda = c / f; // Longitud de onda
      const perdidas_espacio_libre = 20 * Math.log10(4 * Math.PI * R / lambda); // en dB
      
      const Pr_dBm = Pt + Gt + Gr - perdidas_espacio_libre;
      
      return { 
        result: { Pr_dBm: formatNumber(Pr_dBm) }, 
        steps: [
          `λ = c/f = ${c} / ${f} = ${formatNumber(lambda)} m`,
          `Pérdidas espacio libre = 20⋅log₁₀(4πR/λ) = ${formatNumber(perdidas_espacio_libre)} dB`,
          `Pr = ${Pt} + ${Gt} + ${Gr} - ${formatNumber(perdidas_espacio_libre)} = ${formatNumber(Pr_dBm)} dBm`
        ] 
      };
    }
  },

  // Grupo 2: Distancia radar
  {
    id: 'radar-distancia-tiempo',
    groupId: 'distancia_radar',
    title: 'Distancia por Tiempo de Vuelo',
    isFundamental: true,
    formula: 'R = c⋅t/2',
    variables: [
      { symbol: 't_us', label: 'Tiempo de vuelo (t)', unit: 'μs' }
    ],
    output: { symbol: 'R_m', label: 'Distancia (R)', unit: 'm' },
    constants: [
      { symbol: 'c', label: 'Velocidad de la luz', value: c, unit: 'm/s' }
    ],
    donde: "R es la distancia al objetivo, c es la velocidad de la luz y t es el tiempo de vuelo (ida y vuelta, por eso se divide entre 2)",
    resolve: ({ t_us }) => {
      const tiempo_us = parseFloat(t_us);
      if (tiempo_us <= 0) return { error: 'El tiempo debe ser positivo.' };
      if (tiempo_us > 1000000) return { error: 'Tiempo muy grande para aplicaciones típicas.' };
      
      const tiempo_s = tiempo_us * 1e-6; // Convertir μs a s
      const R_m = (c * tiempo_s) / 2; // Factor 2 por ida y vuelta
      
      return { 
        result: { R_m: formatNumber(R_m) }, 
        steps: [
          `t = ${tiempo_us} μs = ${formatNumber(tiempo_s)} s`,
          `R = c⋅t/2 = ${c} × ${formatNumber(tiempo_s)} / 2`,
          `R = ${formatNumber(R_m)} m`
        ] 
      };
    }
  },

  // Grupo 3: Ecuación del radar (simplificada)
  {
    id: 'radar-potencia-recibida',
    groupId: 'ecuacion_radar',
    title: 'Potencia Recibida del Objetivo',
    isFundamental: true,
    formula: 'Pr ∝ Pt⋅G²⋅σ/R⁴',
    variables: [
      { symbol: 'Pt_kW', label: 'Potencia transmitida (Pt)', unit: 'kW' },
      { symbol: 'G_dB', label: 'Ganancia antena (G)', unit: 'dB' },
      { symbol: 'sigma_m2', label: 'Sección transversal radar (σ)', unit: 'm²' },
      { symbol: 'R_km', label: 'Distancia objetivo (R)', unit: 'km' }
    ],
    output: { symbol: 'Pr_relativa', label: 'Potencia recibida (relativa)', unit: 'unidades' },
    donde: "Pr es la potencia recibida del objetivo, Pt es la potencia transmitida, G es la ganancia de la antena, σ es la sección transversal radar y R es la distancia (ecuación del radar)",
    resolve: ({ Pt_kW, G_dB, sigma_m2, R_km }) => {
      const Pt = parseFloat(Pt_kW);
      const G_dB_val = parseFloat(G_dB);
      const sigma = parseFloat(sigma_m2);
      const R = parseFloat(R_km);
      
      if (Pt <= 0) return { error: 'La potencia transmitida debe ser positiva.' };
      if (sigma <= 0) return { error: 'La sección transversal radar debe ser positiva.' };
      if (R <= 0) return { error: 'La distancia debe ser positiva.' };
      
      const G_lineal = Math.pow(10, G_dB_val / 10); // Convertir dB a lineal
      const Pr_relativa = (Pt * G_lineal * G_lineal * sigma) / Math.pow(R, 4);
      
      return { 
        result: { Pr_relativa: formatNumber(Pr_relativa) }, 
        steps: [
          `G (lineal) = 10^(${G_dB_val}/10) = ${formatNumber(G_lineal)}`,
          `Pr ∝ ${Pt} × ${formatNumber(G_lineal)}² × ${sigma} / ${R}⁴`,
          `Pr ∝ ${formatNumber(Pr_relativa)} (unidades relativas)`
        ] 
      };
    }
  },

  // Grupo 4: SNR en comunicaciones espaciales
  {
    id: 'snr-comunicaciones-espaciales',
    groupId: 'snr_comunicaciones',
    title: 'Relación Señal-Ruido (SNR)',
    isFundamental: true,
    formula: 'SNR = Pr/(k⋅Ts⋅B)',
    variables: [
      { symbol: 'Pr_dBm', label: 'Potencia recibida (Pr)', unit: 'dBm' },
      { symbol: 'Ts_K', label: 'Temperatura sistema (Ts)', unit: 'K' },
      { symbol: 'B_MHz', label: 'Ancho de banda (B)', unit: 'MHz' }
    ],
    output: { symbol: 'SNR_dB', label: 'SNR', unit: 'dB' },
    constants: [
      { symbol: 'k_B', label: 'Constante de Boltzmann', value: k_B, unit: 'J/K' }
    ],
    donde: "SNR es la relación señal-ruido, Pr es la potencia recibida, k es la constante de Boltzmann, Ts es la temperatura del sistema y B es el ancho de banda",
    resolve: ({ Pr_dBm, Ts_K, B_MHz }) => {
      const Pr_dBm_val = parseFloat(Pr_dBm);
      const Ts = parseFloat(Ts_K);
      const B = parseFloat(B_MHz) * 1e6; // Convertir MHz a Hz
      
      if (Ts <= 0) return { error: 'La temperatura del sistema debe ser positiva.' };
      if (B <= 0) return { error: 'El ancho de banda debe ser positivo.' };
      
      // Convertir Pr de dBm a W
      const Pr_W = Math.pow(10, (Pr_dBm_val - 30) / 10);
      
      // Potencia de ruido
      const Pn_W = k_B * Ts * B;
      const Pn_dBm = 10 * Math.log10(Pn_W * 1000); // Convertir a dBm
      
      // SNR
      const SNR_lineal = Pr_W / Pn_W;
      const SNR_dB = 10 * Math.log10(SNR_lineal);
      
      return { 
        result: { SNR_dB: formatNumber(SNR_dB) }, 
        steps: [
          `Pr = ${Pr_dBm_val} dBm = ${formatNumber(Pr_W * 1000)} mW`,
          `Pn = k⋅Ts⋅B = ${k_B} × ${Ts} × ${B} = ${formatNumber(Pn_W)} W`,
          `Pn = ${formatNumber(Pn_dBm)} dBm`,
          `SNR = ${Pr_dBm_val} - ${formatNumber(Pn_dBm)} = ${formatNumber(SNR_dB)} dB`
        ] 
      };
    }
  },

  // Grupo 5: Resolución Lidar
  {
    id: 'lidar-resolucion-distancia',
    groupId: 'resolucion_lidar',
    title: 'Resolución en Distancia Lidar',
    isFundamental: true,
    formula: 'ΔR = c/(2⋅B)',
    variables: [
      { symbol: 'B_MHz', label: 'Ancho de banda (B)', unit: 'MHz' }
    ],
    output: { symbol: 'delta_R_m', label: 'Resolución distancia (ΔR)', unit: 'm' },
    constants: [
      { symbol: 'c', label: 'Velocidad de la luz', value: c, unit: 'm/s' }
    ],
    donde: "ΔR es la resolución en distancia del sistema Lidar, c es la velocidad de la luz y B es el ancho de banda",
    resolve: ({ B_MHz }) => {
      const B = parseFloat(B_MHz) * 1e6; // Convertir MHz a Hz
      if (B <= 0) return { error: 'El ancho de banda debe ser positivo.' };
      
      const delta_R_m = c / (2 * B);
      
      return { 
        result: { delta_R_m: formatNumber(delta_R_m) }, 
        steps: [
          `ΔR = c/(2⋅B) = ${c} / (2 × ${B})`,
          `ΔR = ${formatNumber(delta_R_m)} m`
        ] 
      };
    }
  },

  // Grupo 6: Energía IoT
  {
    id: 'energia-consumo-iot',
    groupId: 'energia_iot',
    title: 'Consumo Energético IoT',
    isFundamental: true,
    formula: 'E = Ptx⋅ttx + Prx⋅trx + Psleep⋅tsleep',
    variables: [
      { symbol: 'Ptx_mW', label: 'Potencia transmisión (Ptx)', unit: 'mW' },
      { symbol: 'ttx_ms', label: 'Tiempo transmisión (ttx)', unit: 'ms' },
      { symbol: 'Prx_mW', label: 'Potencia recepción (Prx)', unit: 'mW' },
      { symbol: 'trx_ms', label: 'Tiempo recepción (trx)', unit: 'ms' },
      { symbol: 'Psleep_uW', label: 'Potencia sleep (Psleep)', unit: 'μW' },
      { symbol: 'tsleep_s', label: 'Tiempo sleep (tsleep)', unit: 's' }
    ],
    output: { symbol: 'E_total_mJ', label: 'Energía total (E)', unit: 'mJ' },
    donde: "E es la energía total consumida, Ptx es la potencia en transmisión, Prx es la potencia en recepción, Psleep es la potencia en modo sleep, y t son los tiempos respectivos",
    resolve: ({ Ptx_mW, ttx_ms, Prx_mW, trx_ms, Psleep_uW, tsleep_s }) => {
      const Ptx = parseFloat(Ptx_mW);
      const ttx = parseFloat(ttx_ms) / 1000; // Convertir ms a s
      const Prx = parseFloat(Prx_mW);
      const trx = parseFloat(trx_ms) / 1000; // Convertir ms a s
      const Psleep = parseFloat(Psleep_uW) / 1000; // Convertir μW a mW
      const tsleep = parseFloat(tsleep_s);
      
      if (Ptx < 0 || Prx < 0 || Psleep < 0) return { error: 'Las potencias no pueden ser negativas.' };
      if (ttx < 0 || trx < 0 || tsleep < 0) return { error: 'Los tiempos no pueden ser negativos.' };
      
      const E_tx = Ptx * ttx; // mW⋅s = mJ
      const E_rx = Prx * trx; // mW⋅s = mJ
      const E_sleep = Psleep * tsleep; // mW⋅s = mJ
      const E_total_mJ = E_tx + E_rx + E_sleep;
      
      return { 
        result: { E_total_mJ: formatNumber(E_total_mJ) }, 
        steps: [
          `E_tx = ${Ptx} mW × ${formatNumber(ttx)} s = ${formatNumber(E_tx)} mJ`,
          `E_rx = ${Prx} mW × ${formatNumber(trx)} s = ${formatNumber(E_rx)} mJ`,
          `E_sleep = ${formatNumber(Psleep)} mW × ${tsleep} s = ${formatNumber(E_sleep)} mJ`,
          `E_total = ${formatNumber(E_tx)} + ${formatNumber(E_rx)} + ${formatNumber(E_sleep)} = ${formatNumber(E_total_mJ)} mJ`
        ] 
      };
    }
  },

  // Grupo 7: Conversiones de unidades comunes
  {
    id: 'dBm-a-watts',
    groupId: 'conversiones_potencia',
    title: 'dBm a Watts',
    isFundamental: true,
    formula: 'P(W) = 10^((P(dBm)-30)/10)',
    variables: [
      { symbol: 'P_dBm', label: 'Potencia', unit: 'dBm' }
    ],
    output: { symbol: 'P_W', label: 'Potencia', unit: 'W' },
    donde: "P(W) es la potencia en watts y P(dBm) es la potencia en decibelios-miliwatt",
    resolve: ({ P_dBm }) => {
      const potencia_dBm = parseFloat(P_dBm);
      const P_W = Math.pow(10, (potencia_dBm - 30) / 10);
      
      return { 
        result: { P_W: formatNumber(P_W) }, 
        steps: [
          `P(W) = 10^((${potencia_dBm} - 30)/10)`,
          `P(W) = 10^(${formatNumber((potencia_dBm - 30)/10)}) = ${formatNumber(P_W)} W`
        ] 
      };
    }
  },
  {
    id: 'watts-a-dBm',
    groupId: 'conversiones_potencia',
    title: 'Watts a dBm',
    isComplementary: true,
    formula: 'P(dBm) = 10⋅log₁₀(P(W)) + 30',
    variables: [
      { symbol: 'P_W', label: 'Potencia', unit: 'W' }
    ],
    output: { symbol: 'P_dBm', label: 'Potencia', unit: 'dBm' },
    donde: "P(dBm) es la potencia en decibelios-miliwatt y P(W) es la potencia en watts",
    resolve: ({ P_W }) => {
      const potencia_W = parseFloat(P_W);
      if (potencia_W <= 0) return { error: 'La potencia debe ser positiva.' };
      
      const P_dBm = 10 * Math.log10(potencia_W) + 30;
      
      return { 
        result: { P_dBm: formatNumber(P_dBm) }, 
        steps: [
          `P(dBm) = 10⋅log₁₀(${potencia_W}) + 30`,
          `P(dBm) = ${formatNumber(10 * Math.log10(potencia_W))} + 30 = ${formatNumber(P_dBm)} dBm`
        ] 
      };
    }
  }
];