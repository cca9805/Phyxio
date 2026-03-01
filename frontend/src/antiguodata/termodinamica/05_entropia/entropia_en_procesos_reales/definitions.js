import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // --- Generación de Entropía ---
  {
    id: 'generacion-entropia',
    groupId: 'generacion-entropia',
    title: 'Generación de Entropía (S_gen)',
    isFundamental: true,
    formula: String.raw`S_{gen} = \Delta S_{total} = \Delta S_{sistema} + \Delta S_{entorno}`,
    variables: [
      { symbol: 'deltaS_sistema', label: 'Cambio de entropía del sistema (ΔS_sistema)', unit: 'J/K' },
      { symbol: 'deltaS_entorno', label: 'Cambio de entropía del entorno (ΔS_entorno)', unit: 'J/K' }
    ],
    output: { symbol: 'S_gen', label: 'Entropía generada (S_gen)', unit: 'J/K' },
    resolve: ({ deltaS_sistema, deltaS_entorno }) => {
      const S_gen = deltaS_sistema + deltaS_entorno;
      const tipo = S_gen > 0 ? 'Proceso irreversible' : S_gen === 0 ? 'Proceso reversible' : 'Proceso imposible';
      return {
        result: { S_gen: formatNumber(S_gen) },
        steps: [
          `S_gen = ΔS_sistema + ΔS_entorno`,
          `S_gen = ${deltaS_sistema} + ${deltaS_entorno}`,
          `S_gen = ${formatNumber(S_gen)} J/K`,
          `Interpretación: ${tipo}`
        ]
      };
    }
  },
  {
    id: 'entropia-sistema',
    groupId: 'generacion-entropia',
    title: 'Cambio de Entropía del Sistema (ΔS_sistema)',
    isFundamental: false,
    formula: String.raw`\Delta S_{sistema} = S_{gen} - \Delta S_{entorno}`,
    variables: [
      { symbol: 'S_gen', label: 'Entropía generada (S_gen)', unit: 'J/K' },
      { symbol: 'deltaS_entorno', label: 'Cambio de entropía del entorno (ΔS_entorno)', unit: 'J/K' }
    ],
    output: { symbol: 'deltaS_sistema', label: 'Cambio de entropía del sistema (ΔS_sistema)', unit: 'J/K' },
    resolve: ({ S_gen, deltaS_entorno }) => {
      const deltaS_sistema = S_gen - deltaS_entorno;
      return {
        result: { deltaS_sistema: formatNumber(deltaS_sistema) },
        steps: [
          `ΔS_sistema = S_gen - ΔS_entorno`,
          `ΔS_sistema = ${S_gen} - ${deltaS_entorno}`,
          `ΔS_sistema = ${formatNumber(deltaS_sistema)} J/K`
        ]
      };
    }
  },
  {
    id: 'entropia-entorno',
    groupId: 'generacion-entropia',
    title: 'Cambio de Entropía del Entorno (ΔS_entorno)',
    isFundamental: false,
    formula: String.raw`\Delta S_{entorno} = S_{gen} - \Delta S_{sistema}`,
    variables: [
      { symbol: 'S_gen', label: 'Entropía generada (S_gen)', unit: 'J/K' },
      { symbol: 'deltaS_sistema', label: 'Cambio de entropía del sistema (ΔS_sistema)', unit: 'J/K' }
    ],
    output: { symbol: 'deltaS_entorno', label: 'Cambio de entropía del entorno (ΔS_entorno)', unit: 'J/K' },
    resolve: ({ S_gen, deltaS_sistema }) => {
      const deltaS_entorno = S_gen - deltaS_sistema;
      return {
        result: { deltaS_entorno: formatNumber(deltaS_entorno) },
        steps: [
          `ΔS_entorno = S_gen - ΔS_sistema`,
          `ΔS_entorno = ${S_gen} - ${deltaS_sistema}`,
          `ΔS_entorno = ${formatNumber(deltaS_entorno)} J/K`
        ]
      };
    }
  },

  // --- Eficiencia Isentrópica (Turbina) ---
  {
    id: 'eficiencia-isentropica-turbina',
    groupId: 'eficiencia-isentropica-turbina',
    title: 'Eficiencia Isentrópica de Turbina (η_s)',
    isFundamental: true,
    formula: String.raw`\eta_s = \frac{W_{real}}{W_{isentropico}}`,
    variables: [
      { symbol: 'W_real', label: 'Trabajo real (W_real)', unit: 'J' },
      { symbol: 'W_isentropico', label: 'Trabajo isentrópico (W_isentrópico)', unit: 'J' }
    ],
    output: { symbol: 'eta', label: 'Eficiencia (η_s)', unit: '%' },
    resolve: ({ W_real, W_isentropico }) => {
      const eta = (W_real / W_isentropico) * 100;
      return {
        result: { eta: formatNumber(eta) },
        steps: [
          `η_s = (W_real / W_isentrópico) × 100%`,
          `η_s = (${W_real} / ${W_isentropico}) × 100%`,
          `η_s = ${formatNumber(eta)}%`
        ]
      };
    }
  },
  {
    id: 'trabajo-real-turbina',
    groupId: 'eficiencia-isentropica-turbina',
    title: 'Trabajo Real de Turbina (W_real)',
    isFundamental: false,
    formula: String.raw`W_{real} = \eta_s \cdot W_{isentropico}`,
    variables: [
      { symbol: 'eta', label: 'Eficiencia (η_s)', unit: '%' },
      { symbol: 'W_isentropico', label: 'Trabajo isentrópico (W_isentrópico)', unit: 'J' }
    ],
    output: { symbol: 'W_real', label: 'Trabajo real (W_real)', unit: 'J' },
    resolve: ({ eta, W_isentropico }) => {
      const W_real = (eta / 100) * W_isentropico;
      return {
        result: { W_real: formatNumber(W_real) },
        steps: [
          `W_real = (η_s / 100) × W_isentrópico`,
          `W_real = (${eta} / 100) × ${W_isentropico}`,
          `W_real = ${formatNumber(W_real)} J`
        ]
      };
    }
  },
  {
    id: 'trabajo-isentropico-turbina',
    groupId: 'eficiencia-isentropica-turbina',
    title: 'Trabajo Isentrópico de Turbina (W_isentrópico)',
    isFundamental: false,
    formula: String.raw`W_{isentropico} = \frac{W_{real}}{\eta_s}`,
    variables: [
      { symbol: 'W_real', label: 'Trabajo real (W_real)', unit: 'J' },
      { symbol: 'eta', label: 'Eficiencia (η_s)', unit: '%' }
    ],
    output: { symbol: 'W_isentropico', label: 'Trabajo isentrópico (W_isentrópico)', unit: 'J' },
    resolve: ({ W_real, eta }) => {
      if (eta === 0) return { error: 'La eficiencia no puede ser cero.' };
      const W_isentropico = W_real / (eta / 100);
      return {
        result: { W_isentropico: formatNumber(W_isentropico) },
        steps: [
          `W_isentrópico = W_real / (η_s / 100)`,
          `W_isentrópico = ${W_real} / (${eta} / 100)`,
          `W_isentrópico = ${formatNumber(W_isentropico)} J`
        ]
      };
    }
  },

  // --- Eficiencia Isentrópica (Compresor) ---
  {
    id: 'eficiencia-isentropica-compresor',
    groupId: 'eficiencia-isentropica-compresor',
    title: 'Eficiencia Isentrópica de Compresor (η_s)',
    isFundamental: true,
    formula: String.raw`\eta_s = \frac{W_{isentropico}}{W_{real}}`,
    variables: [
      { symbol: 'W_isentropico', label: 'Trabajo isentrópico (W_isentrópico)', unit: 'J' },
      { symbol: 'W_real', label: 'Trabajo real (W_real)', unit: 'J' }
    ],
    output: { symbol: 'eta', label: 'Eficiencia (η_s)', unit: '%' },
    resolve: ({ W_isentropico, W_real }) => {
      const eta = (W_isentropico / W_real) * 100;
      return {
        result: { eta: formatNumber(eta) },
        steps: [
          `η_s = (W_isentrópico / W_real) × 100%`,
          `η_s = (${W_isentropico} / ${W_real}) × 100%`,
          `η_s = ${formatNumber(eta)}%`
        ]
      };
    }
  },
  {
    id: 'trabajo-real-compresor',
    groupId: 'eficiencia-isentropica-compresor',
    title: 'Trabajo Real de Compresor (W_real)',
    isFundamental: false,
    formula: String.raw`W_{real} = \frac{W_{isentropico}}{\eta_s}`,
    variables: [
      { symbol: 'W_isentropico', label: 'Trabajo isentrópico (W_isentrópico)', unit: 'J' },
      { symbol: 'eta', label: 'Eficiencia (η_s)', unit: '%' }
    ],
    output: { symbol: 'W_real', label: 'Trabajo real (W_real)', unit: 'J' },
    resolve: ({ W_isentropico, eta }) => {
      if (eta === 0) return { error: 'La eficiencia no puede ser cero.' };
      const W_real = W_isentropico / (eta / 100);
      return {
        result: { W_real: formatNumber(W_real) },
        steps: [
          `W_real = W_isentrópico / (η_s / 100)`,
          `W_real = ${W_isentropico} / (${eta} / 100)`,
          `W_real = ${formatNumber(W_real)} J`
        ]
      };
    }
  },
  {
    id: 'trabajo-isentropico-compresor',
    groupId: 'eficiencia-isentropica-compresor',
    title: 'Trabajo Isentrópico de Compresor (W_isentrópico)',
    isFundamental: false,
    formula: String.raw`W_{isentropico} = \eta_s \cdot W_{real}`,
    variables: [
      { symbol: 'eta', label: 'Eficiencia (η_s)', unit: '%' },
      { symbol: 'W_real', label: 'Trabajo real (W_real)', unit: 'J' }
    ],
    output: { symbol: 'W_isentropico', label: 'Trabajo isentrópico (W_isentrópico)', unit: 'J' },
    resolve: ({ eta, W_real }) => {
      const W_isentropico = (eta / 100) * W_real;
      return {
        result: { W_isentropico: formatNumber(W_isentropico) },
        steps: [
          `W_isentrópico = (η_s / 100) × W_real`,
          `W_isentrópico = (${eta} / 100) × ${W_real}`,
          `W_isentrópico = ${formatNumber(W_isentropico)} J`
        ]
      };
    }
  },

  // --- Pérdida de Disponibilidad ---
  {
    id: 'perdida-disponibilidad',
    groupId: 'perdida-disponibilidad',
    title: 'Pérdida de Disponibilidad (I)',
    isFundamental: true,
    formula: String.raw`I = T_0 S_{gen}`,
    variables: [
      { symbol: 'T_0', label: 'Temperatura ambiente (T_0)', unit: 'K' },
      { symbol: 'S_gen', label: 'Entropía generada (S_gen)', unit: 'J/K' }
    ],
    output: { symbol: 'I', label: 'Irreversibilidad (I)', unit: 'J' },
    resolve: ({ T_0, S_gen }) => {
      const I = T_0 * S_gen;
      return {
        result: { I: formatNumber(I) },
        steps: [
          `I = T₀ × S_gen`,
          `I = ${T_0} K × ${S_gen} J/K`,
          `I = ${formatNumber(I)} J`,
          `Esta es la energía que se pierde y no puede convertirse en trabajo útil`
        ]
      };
    }
  },
  {
    id: 'temperatura-ambiente',
    groupId: 'perdida-disponibilidad',
    title: 'Temperatura Ambiente (T_0)',
    isFundamental: false,
    formula: String.raw`T_0 = \frac{I}{S_{gen}}`,
    variables: [
      { symbol: 'I', label: 'Irreversibilidad (I)', unit: 'J' },
      { symbol: 'S_gen', label: 'Entropía generada (S_gen)', unit: 'J/K' }
    ],
    output: { symbol: 'T_0', label: 'Temperatura ambiente (T_0)', unit: 'K' },
    resolve: ({ I, S_gen }) => {
      if (S_gen === 0) return { error: 'La entropía generada no puede ser cero.' };
      const T_0 = I / S_gen;
      return {
        result: { T_0: formatNumber(T_0) },
        steps: [
          `T₀ = I / S_gen`,
          `T₀ = ${I} J / ${S_gen} J/K`,
          `T₀ = ${formatNumber(T_0)} K`
        ]
      };
    }
  },
  {
    id: 'entropia-generada',
    groupId: 'perdida-disponibilidad',
    title: 'Entropía Generada (S_gen)',
    isFundamental: false,
    formula: String.raw`S_{gen} = \frac{I}{T_0}`,
    variables: [
      { symbol: 'I', label: 'Irreversibilidad (I)', unit: 'J' },
      { symbol: 'T_0', label: 'Temperatura ambiente (T_0)', unit: 'K' }
    ],
    output: { symbol: 'S_gen', label: 'Entropía generada (S_gen)', unit: 'J/K' },
    resolve: ({ I, T_0 }) => {
      if (T_0 === 0) return { error: 'La temperatura no puede ser cero.' };
      const S_gen = I / T_0;
      return {
        result: { S_gen: formatNumber(S_gen) },
        steps: [
          `S_gen = I / T₀`,
          `S_gen = ${I} J / ${T_0} K`,
          `S_gen = ${formatNumber(S_gen)} J/K`
        ]
      };
    }
  }
];
