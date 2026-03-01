import { formatNumber } from '../../../../utils/formatNumber';

const R = 8.314;

export const definitions = [
  // Grupo 1: Trabajo en Proceso Adiabático
  {
    id: 'trabajo-adiabatico',
    groupId: 'trabajo-adiabatico',
    title: 'Trabajo en Proceso Adiabático (W)',
    isFundamental: true,
    formula: String.raw`W = \frac{nR(T_i - T_f)}{\gamma - 1}`,
    variables: [
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'T_i', label: 'Temperatura inicial (T_i)', unit: 'K' },
      { symbol: 'T_f', label: 'Temperatura final (T_f)', unit: 'K' },
      { symbol: 'gamma', label: 'Coeficiente adiabático (γ = Cp/Cv)', unit: 'adimensional' }
    ],
    output: { symbol: 'W', label: 'Trabajo (W)', unit: 'J' },
    resolve: ({ n, T_i, T_f, gamma }) => {
      const W = (n * R * (T_i - T_f)) / (gamma - 1);
      return {
        result: { W: formatNumber(W) },
        steps: [
          `W = nR(T_i - T_f) / (γ - 1)`,
          `W = ${n} × ${R} × (${T_i} - ${T_f}) / (${gamma} - 1)`,
          `W = ${formatNumber(n * R * (T_i - T_f))} / ${formatNumber(gamma - 1)}`,
          `W = ${formatNumber(W)} J`
        ]
      };
    }
  },
  {
    id: 'temperatura-final-trabajo',
    groupId: 'trabajo-adiabatico',
    title: 'Temperatura Final (T_f)',
    isFundamental: false,
    formula: String.raw`T_f = T_i - \frac{W(\gamma - 1)}{nR}`,
    variables: [
      { symbol: 'T_i', label: 'Temperatura inicial (T_i)', unit: 'K' },
      { symbol: 'W', label: 'Trabajo (W)', unit: 'J' },
      { symbol: 'gamma', label: 'Coeficiente adiabático (γ)', unit: 'adimensional' },
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' }
    ],
    output: { symbol: 'T_f', label: 'Temperatura final (T_f)', unit: 'K' },
    resolve: ({ T_i, W, gamma, n }) => {
      const T_f = T_i - (W * (gamma - 1)) / (n * R);
      return {
        result: { T_f: formatNumber(T_f) },
        steps: [
          `T_f = T_i - W(γ - 1) / (nR)`,
          `T_f = ${T_i} - (${W} × ${gamma - 1}) / (${n} × ${R})`,
          `T_f = ${T_i} - ${formatNumber((W * (gamma - 1)) / (n * R))}`,
          `T_f = ${formatNumber(T_f)} K`
        ]
      };
    }
  },
  {
    id: 'temperatura-inicial-trabajo',
    groupId: 'trabajo-adiabatico',
    title: 'Temperatura Inicial (T_i)',
    isFundamental: false,
    formula: String.raw`T_i = T_f + \frac{W(\gamma - 1)}{nR}`,
    variables: [
      { symbol: 'T_f', label: 'Temperatura final (T_f)', unit: 'K' },
      { symbol: 'W', label: 'Trabajo (W)', unit: 'J' },
      { symbol: 'gamma', label: 'Coeficiente adiabático (γ)', unit: 'adimensional' },
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' }
    ],
    output: { symbol: 'T_i', label: 'Temperatura inicial (T_i)', unit: 'K' },
    resolve: ({ T_f, W, gamma, n }) => {
      const T_i = T_f + (W * (gamma - 1)) / (n * R);
      return {
        result: { T_i: formatNumber(T_i) },
        steps: [
          `T_i = T_f + W(γ - 1) / (nR)`,
          `T_i = ${T_f} + (${W} × ${gamma - 1}) / (${n} × ${R})`,
          `T_i = ${T_f} + ${formatNumber((W * (gamma - 1)) / (n * R))}`,
          `T_i = ${formatNumber(T_i)} K`
        ]
      };
    }
  },

  // Grupo 2: Relación Temperatura-Volumen
  {
    id: 'relacion-tv-adiabatico',
    groupId: 'relacion-tv',
    title: 'Temperatura Final (T_f)',
    isFundamental: true,
    formula: String.raw`T_f = T_i\left(\frac{V_i}{V_f}\right)^{\gamma-1}`,
    variables: [
      { symbol: 'T_i', label: 'Temperatura inicial (T_i)', unit: 'K' },
      { symbol: 'V_i', label: 'Volumen inicial (V_i)', unit: 'm³' },
      { symbol: 'V_f', label: 'Volumen final (V_f)', unit: 'm³' },
      { symbol: 'gamma', label: 'Coeficiente adiabático (γ)', unit: 'adimensional' }
    ],
    output: { symbol: 'T_f', label: 'Temperatura final (T_f)', unit: 'K' },
    resolve: ({ T_i, V_i, V_f, gamma }) => {
      const T_f = T_i * Math.pow(V_i / V_f, gamma - 1);
      return {
        result: { T_f: formatNumber(T_f) },
        steps: [
          `T_f = T_i × (V_i / V_f)^(γ-1)`,
          `T_f = ${T_i} × (${V_i} / ${V_f})^(${gamma}-1)`,
          `T_f = ${T_i} × ${formatNumber(Math.pow(V_i / V_f, gamma - 1))}`,
          `T_f = ${formatNumber(T_f)} K`
        ]
      };
    }
  },
  {
    id: 'volumen-final-tv',
    groupId: 'relacion-tv',
    title: 'Volumen Final (V_f)',
    isFundamental: false,
    formula: String.raw`V_f = V_i\left(\frac{T_i}{T_f}\right)^{\frac{1}{\gamma-1}}`,
    variables: [
      { symbol: 'V_i', label: 'Volumen inicial (V_i)', unit: 'm³' },
      { symbol: 'T_i', label: 'Temperatura inicial (T_i)', unit: 'K' },
      { symbol: 'T_f', label: 'Temperatura final (T_f)', unit: 'K' },
      { symbol: 'gamma', label: 'Coeficiente adiabático (γ)', unit: 'adimensional' }
    ],
    output: { symbol: 'V_f', label: 'Volumen final (V_f)', unit: 'm³' },
    resolve: ({ V_i, T_i, T_f, gamma }) => {
      const V_f = V_i * Math.pow(T_i / T_f, 1 / (gamma - 1));
      return {
        result: { V_f: formatNumber(V_f) },
        steps: [
          `V_f = V_i × (T_i / T_f)^(1/(γ-1))`,
          `V_f = ${V_i} × (${T_i} / ${T_f})^(1/${gamma - 1})`,
          `V_f = ${V_i} × ${formatNumber(Math.pow(T_i / T_f, 1 / (gamma - 1)))}`,
          `V_f = ${formatNumber(V_f)} m³`
        ]
      };
    }
  },
  {
    id: 'volumen-inicial-tv',
    groupId: 'relacion-tv',
    title: 'Volumen Inicial (V_i)',
    isFundamental: false,
    formula: String.raw`V_i = V_f\left(\frac{T_f}{T_i}\right)^{\frac{1}{\gamma-1}}`,
    variables: [
      { symbol: 'V_f', label: 'Volumen final (V_f)', unit: 'm³' },
      { symbol: 'T_i', label: 'Temperatura inicial (T_i)', unit: 'K' },
      { symbol: 'T_f', label: 'Temperatura final (T_f)', unit: 'K' },
      { symbol: 'gamma', label: 'Coeficiente adiabático (γ)', unit: 'adimensional' }
    ],
    output: { symbol: 'V_i', label: 'Volumen inicial (V_i)', unit: 'm³' },
    resolve: ({ V_f, T_i, T_f, gamma }) => {
      const V_i = V_f * Math.pow(T_f / T_i, 1 / (gamma - 1));
      return {
        result: { V_i: formatNumber(V_i) },
        steps: [
          `V_i = V_f × (T_f / T_i)^(1/(γ-1))`,
          `V_i = ${V_f} × (${T_f} / ${T_i})^(1/${gamma - 1})`,
          `V_i = ${V_f} × ${formatNumber(Math.pow(T_f / T_i, 1 / (gamma - 1)))}`,
          `V_i = ${formatNumber(V_i)} m³`
        ]
      };
    }
  },

  // Grupo 3: Relación Presión-Volumen
  {
    id: 'relacion-pv-adiabatico',
    groupId: 'relacion-pv',
    title: 'Presión Final (P_f)',
    isFundamental: true,
    formula: String.raw`P_f = P_i\left(\frac{V_i}{V_f}\right)^{\gamma}`,
    variables: [
      { symbol: 'P_i', label: 'Presión inicial (P_i)', unit: 'Pa' },
      { symbol: 'V_i', label: 'Volumen inicial (V_i)', unit: 'm³' },
      { symbol: 'V_f', label: 'Volumen final (V_f)', unit: 'm³' },
      { symbol: 'gamma', label: 'Coeficiente adiabático (γ)', unit: 'adimensional' }
    ],
    output: { symbol: 'P_f', label: 'Presión final (P_f)', unit: 'Pa' },
    resolve: ({ P_i, V_i, V_f, gamma }) => {
      const P_f = P_i * Math.pow(V_i / V_f, gamma);
      return {
        result: { P_f: formatNumber(P_f) },
        steps: [
          `P_f = P_i × (V_i / V_f)^γ`,
          `P_f = ${P_i} × (${V_i} / ${V_f})^${gamma}`,
          `P_f = ${P_i} × ${formatNumber(Math.pow(V_i / V_f, gamma))}`,
          `P_f = ${formatNumber(P_f)} Pa`
        ]
      };
    }
  },
  {
    id: 'volumen-final-pv',
    groupId: 'relacion-pv',
    title: 'Volumen Final (V_f)',
    isFundamental: false,
    formula: String.raw`V_f = V_i\left(\frac{P_i}{P_f}\right)^{\frac{1}{\gamma}}`,
    variables: [
      { symbol: 'V_i', label: 'Volumen inicial (V_i)', unit: 'm³' },
      { symbol: 'P_i', label: 'Presión inicial (P_i)', unit: 'Pa' },
      { symbol: 'P_f', label: 'Presión final (P_f)', unit: 'Pa' },
      { symbol: 'gamma', label: 'Coeficiente adiabático (γ)', unit: 'adimensional' }
    ],
    output: { symbol: 'V_f', label: 'Volumen final (V_f)', unit: 'm³' },
    resolve: ({ V_i, P_i, P_f, gamma }) => {
      const V_f = V_i * Math.pow(P_i / P_f, 1 / gamma);
      return {
        result: { V_f: formatNumber(V_f) },
        steps: [
          `V_f = V_i × (P_i / P_f)^(1/γ)`,
          `V_f = ${V_i} × (${P_i} / ${P_f})^(1/${gamma})`,
          `V_f = ${V_i} × ${formatNumber(Math.pow(P_i / P_f, 1 / gamma))}`,
          `V_f = ${formatNumber(V_f)} m³`
        ]
      };
    }
  },
  {
    id: 'volumen-inicial-pv',
    groupId: 'relacion-pv',
    title: 'Volumen Inicial (V_i)',
    isFundamental: false,
    formula: String.raw`V_i = V_f\left(\frac{P_f}{P_i}\right)^{\frac{1}{\gamma}}`,
    variables: [
      { symbol: 'V_f', label: 'Volumen final (V_f)', unit: 'm³' },
      { symbol: 'P_i', label: 'Presión inicial (P_i)', unit: 'Pa' },
      { symbol: 'P_f', label: 'Presión final (P_f)', unit: 'Pa' },
      { symbol: 'gamma', label: 'Coeficiente adiabático (γ)', unit: 'adimensional' }
    ],
    output: { symbol: 'V_i', label: 'Volumen inicial (V_i)', unit: 'm³' },
    resolve: ({ V_f, P_i, P_f, gamma }) => {
      const V_i = V_f * Math.pow(P_f / P_i, 1 / gamma);
      return {
        result: { V_i: formatNumber(V_i) },
        steps: [
          `V_i = V_f × (P_f / P_i)^(1/γ)`,
          `V_i = ${V_f} × (${P_f} / ${P_i})^(1/${gamma})`,
          `V_i = ${V_f} × ${formatNumber(Math.pow(P_f / P_i, 1 / gamma))}`,
          `V_i = ${formatNumber(V_i)} m³`
        ]
      };
    }
  },

  // Grupo 4: Energía Interna
  {
    id: 'energia-interna-adiabatico',
    groupId: 'energia-interna',
    title: 'Cambio de Energía Interna (ΔU)',
    isFundamental: true,
    formula: String.raw`\Delta U = nC_v\Delta T`,
    variables: [
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'C_v', label: 'Capacidad calorífica a V constante (C_v)', unit: 'J/(mol·K)' },
      { symbol: 'deltaT', label: 'Cambio de temperatura (ΔT)', unit: 'K' }
    ],
    output: { symbol: 'deltaU', label: 'Cambio de energía interna (ΔU)', unit: 'J' },
    resolve: ({ n, C_v, deltaT }) => {
      const deltaU = n * C_v * deltaT;
      return {
        result: { deltaU: formatNumber(deltaU) },
        steps: [
          `Como Q = 0 (adiabático), entonces ΔU = -W`,
          `ΔU = n × C_v × ΔT`,
          `ΔU = ${n} × ${C_v} × ${deltaT}`,
          `ΔU = ${formatNumber(deltaU)} J`
        ]
      };
    }
  },
  {
    id: 'cambio-temperatura',
    groupId: 'energia-interna',
    title: 'Cambio de Temperatura (ΔT)',
    isFundamental: false,
    formula: String.raw`\Delta T = \frac{\Delta U}{nC_v}`,
    variables: [
      { symbol: 'deltaU', label: 'Cambio de energía interna (ΔU)', unit: 'J' },
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'C_v', label: 'Capacidad calorífica a V constante (C_v)', unit: 'J/(mol·K)' }
    ],
    output: { symbol: 'deltaT', label: 'Cambio de temperatura (ΔT)', unit: 'K' },
    resolve: ({ deltaU, n, C_v }) => {
      if (n * C_v === 0) return { error: 'El producto nC_v no puede ser cero.' };
      const deltaT = deltaU / (n * C_v);
      return {
        result: { deltaT: formatNumber(deltaT) },
        steps: [
          `ΔT = ΔU / (n × C_v)`,
          `ΔT = ${deltaU} / (${n} × ${C_v})`,
          `ΔT = ${deltaU} / ${n * C_v}`,
          `ΔT = ${formatNumber(deltaT)} K`
        ]
      };
    }
  },
  {
    id: 'capacidad-calorifica-cv',
    groupId: 'energia-interna',
    title: 'Capacidad Calorífica (C_v)',
    isFundamental: false,
    formula: String.raw`C_v = \frac{\Delta U}{n\Delta T}`,
    variables: [
      { symbol: 'deltaU', label: 'Cambio de energía interna (ΔU)', unit: 'J' },
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'deltaT', label: 'Cambio de temperatura (ΔT)', unit: 'K' }
    ],
    output: { symbol: 'C_v', label: 'Capacidad calorífica (C_v)', unit: 'J/(mol·K)' },
    resolve: ({ deltaU, n, deltaT }) => {
      if (n * deltaT === 0) return { error: 'El producto nΔT no puede ser cero.' };
      const C_v = deltaU / (n * deltaT);
      return {
        result: { C_v: formatNumber(C_v) },
        steps: [
          `C_v = ΔU / (n × ΔT)`,
          `C_v = ${deltaU} / (${n} × ${deltaT})`,
          `C_v = ${deltaU} / ${n * deltaT}`,
          `C_v = ${formatNumber(C_v)} J/(mol·K)`
        ]
      };
    }
  }
];
