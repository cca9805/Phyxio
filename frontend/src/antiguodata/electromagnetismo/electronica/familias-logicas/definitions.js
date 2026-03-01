import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // Grupo 1: Margen de Ruido en Alto
  {
    id: "margen-ruido-alto-nmh",
    groupId: "margen-de-ruido-alto",
    title: "Calcular Margen de Ruido en Alto (N_MH)",
    isFundamental: true,
    formula: "N_MH = V_OH - V_IH",
    variables: [
      { symbol: "V_OH", label: "Voltaje de Salida Mínimo en Alto", unit: "V" },
      { symbol: "V_IH", label: "Voltaje de Entrada Mínimo en Alto", unit: "V" },
    ],
    output: { symbol: "N_MH", label: "Margen de Ruido en Alto", unit: "V" },
    resolve: ({ V_OH, V_IH }) => {
      const result = V_OH - V_IH;
      return { result: { N_MH: formatNumber(result) }, steps: [`N_MH = ${V_OH}V - ${V_IH}V = ${formatNumber(result)}V`] };
    },
  },
  {
    id: "margen-ruido-alto-voh",
    groupId: "margen-de-ruido-alto",
    title: "Calcular V_OH desde Margen de Ruido",
    isComplementary: true,
    formula: "V_OH = N_MH + V_IH",
    variables: [
      { symbol: "N_MH", label: "Margen de Ruido en Alto", unit: "V" },
      { symbol: "V_IH", label: "Voltaje de Entrada Mínimo en Alto", unit: "V" },
    ],
    output: { symbol: "V_OH", label: "Voltaje de Salida Mínimo en Alto", unit: "V" },
    resolve: ({ N_MH, V_IH }) => {
      const result = N_MH + V_IH;
      return { result: { V_OH: formatNumber(result) }, steps: [`V_OH = ${N_MH}V + ${V_IH}V = ${formatNumber(result)}V`] };
    },
  },
  {
    id: "margen-ruido-alto-vih",
    groupId: "margen-de-ruido-alto",
    title: "Calcular V_IH desde Margen de Ruido",
    isComplementary: true,
    formula: "V_IH = V_OH - N_MH",
    variables: [
      { symbol: "V_OH", label: "Voltaje de Salida Mínimo en Alto", unit: "V" },
      { symbol: "N_MH", label: "Margen de Ruido en Alto", unit: "V" },
    ],
    output: { symbol: "V_IH", label: "Voltaje de Entrada Mínimo en Alto", unit: "V" },
    resolve: ({ V_OH, N_MH }) => {
      const result = V_OH - N_MH;
      return { result: { V_IH: formatNumber(result) }, steps: [`V_IH = ${V_OH}V - ${N_MH}V = ${formatNumber(result)}V`] };
    },
  },

  // Grupo 2: Margen de Ruido en Bajo
  {
    id: "margen-ruido-bajo-nml",
    groupId: "margen-de-ruido-bajo",
    title: "Calcular Margen de Ruido en Bajo (N_ML)",
    isFundamental: true,
    formula: "N_ML = V_IL - V_OL",
    variables: [
      { symbol: "V_IL", label: "Voltaje de Entrada Máximo en Bajo", unit: "V" },
      { symbol: "V_OL", label: "Voltaje de Salida Máximo en Bajo", unit: "V" },
    ],
    output: { symbol: "N_ML", label: "Margen de Ruido en Bajo", unit: "V" },
    resolve: ({ V_IL, V_OL }) => {
      const result = V_IL - V_OL;
      return { result: { N_ML: formatNumber(result) }, steps: [`N_ML = ${V_IL}V - ${V_OL}V = ${formatNumber(result)}V`] };
    },
  },
    {
    id: "margen-ruido-bajo-vil",
    groupId: "margen-de-ruido-bajo",
    title: "Calcular V_IL desde Margen de Ruido",
    isComplementary: true,
    formula: "V_IL = N_ML + V_OL",
    variables: [
      { symbol: "N_ML", label: "Margen de Ruido en Bajo", unit: "V" },
      { symbol: "V_OL", label: "Voltaje de Salida Máximo en Bajo", unit: "V" },
    ],
    output: { symbol: "V_IL", label: "Voltaje de Entrada Máximo en Bajo", unit: "V" },
    resolve: ({ N_ML, V_OL }) => {
      const result = N_ML + V_OL;
      return { result: { V_IL: formatNumber(result) }, steps: [`V_IL = ${N_ML}V + ${V_OL}V = ${formatNumber(result)}V`] };
    },
  },
  {
    id: "margen-ruido-bajo-vol",
    groupId: "margen-de-ruido-bajo",
    title: "Calcular V_OL desde Margen de Ruido",
    isComplementary: true,
    formula: "V_OL = V_IL - N_ML",
    variables: [
      { symbol: "V_IL", label: "Voltaje de Entrada Máximo en Bajo", unit: "V" },
      { symbol: "N_ML", label: "Margen de Ruido en Bajo", unit: "V" },
    ],
    output: { symbol: "V_OL", label: "Voltaje de Salida Máximo en Bajo", unit: "V" },
    resolve: ({ V_IL, N_ML }) => {
      const result = V_IL - N_ML;
      return { result: { V_OL: formatNumber(result) }, steps: [`V_OL = ${V_IL}V - ${N_ML}V = ${formatNumber(result)}V`] };
    },
  },

  // Grupo 3: Disipación de Potencia
  {
    id: "disipacion-potencia-pd",
    groupId: "disipacion-de-potencia",
    title: "Calcular Disipación de Potencia (P_D)",
    isFundamental: true,
    formula: "P_D = V_CC * I_CC",
    variables: [
      { symbol: "V_CC", label: "Voltaje de Alimentación", unit: "V" },
      { symbol: "I_CC", label: "Corriente de Alimentación", unit: "mA" },
    ],
    output: { symbol: "P_D", label: "Disipación de Potencia", unit: "mW" },
    resolve: ({ V_CC, I_CC }) => {
      const p_d = V_CC * I_CC;
      return { result: { P_D: formatNumber(p_d) }, steps: [`P_D = ${V_CC}V * ${I_CC}mA = ${formatNumber(p_d)}mW`] };
    },
  },
  {
    id: "disipacion-potencia-vcc",
    groupId: "disipacion-de-potencia",
    title: "Calcular V_CC desde Potencia",
    isComplementary: true,
    formula: "V_CC = P_D / I_CC",
    variables: [
        { symbol: "P_D", label: "Disipación de Potencia", unit: "mW" },
        { symbol: "I_CC", label: "Corriente de Alimentación", unit: "mA" },
    ],
    output: { symbol: "V_CC", label: "Voltaje de Alimentación", unit: "V" },
    resolve: ({ P_D, I_CC }) => {
        const v_cc = P_D / I_CC;
        return { result: { V_CC: formatNumber(v_cc) }, steps: [`V_CC = ${P_D}mW / ${I_CC}mA = ${formatNumber(v_cc)}V`] };
    },
  },
  {
    id: "disipacion-potencia-icc",
    groupId: "disipacion-de-potencia",
    title: "Calcular I_CC desde Potencia",
    isComplementary: true,
    formula: "I_CC = P_D / V_CC",
    variables: [
        { symbol: "P_D", label: "Disipación de Potencia", unit: "mW" },
        { symbol: "V_CC", label: "Voltaje de Alimentación", unit: "V" },
    ],
    output: { symbol: "I_CC", label: "Corriente de Alimentación", unit: "mA" },
    resolve: ({ P_D, V_CC }) => {
        const i_cc = P_D / V_CC;
        return { result: { I_CC: formatNumber(i_cc) }, steps: [`I_CC = ${P_D}mW / ${V_CC}V = ${formatNumber(i_cc)}mA`] };
    },
  },

  // Grupo 4: Retardo de Propagación
  {
    id: "retardo-propagacion-tp",
    groupId: "retardo-de-propagacion",
    title: "Calcular Retardo Promedio (t_p)",
    isFundamental: true,
    formula: "t_p = (t_PLH + t_PHL) / 2",
    variables: [
      { symbol: "t_PLH", label: "Retardo Bajo a Alto", unit: "ns" },
      { symbol: "t_PHL", label: "Retardo Alto a Bajo", unit: "ns" },
    ],
    output: { symbol: "t_p", label: "Retardo Promedio", unit: "ns" },
    resolve: ({ t_PLH, t_PHL }) => {
      const result = (t_PLH + t_PHL) / 2;
      return { result: { t_p: formatNumber(result) }, steps: [`t_p = (${t_PLH}ns + ${t_PHL}ns) / 2 = ${formatNumber(result)}ns`] };
    },
  },
  {
    id: "retardo-propagacion-tplh",
    groupId: "retardo-de-propagacion",
    title: "Calcular t_PLH desde Retardo Promedio",
    isComplementary: true,
    formula: "t_PLH = 2 * t_p - t_PHL",
    variables: [
        { symbol: "t_p", label: "Retardo Promedio", unit: "ns" },
        { symbol: "t_PHL", label: "Retardo Alto a Bajo", unit: "ns" },
    ],
    output: { symbol: "t_PLH", label: "Retardo Bajo a Alto", unit: "ns" },
    resolve: ({ t_p, t_PHL }) => {
        const result = 2 * t_p - t_PHL;
        return { result: { t_PLH: formatNumber(result) }, steps: [`t_PLH = 2 * ${t_p}ns - ${t_PHL}ns = ${formatNumber(result)}ns`] };
    },
  },
  {
    id: "retardo-propagacion-tphl",
    groupId: "retardo-de-propagacion",
    title: "Calcular t_PHL desde Retardo Promedio",
    isComplementary: true,
    formula: "t_PHL = 2 * t_p - t_PLH",
    variables: [
        { symbol: "t_p", label: "Retardo Promedio", unit: "ns" },
        { symbol: "t_PLH", label: "Retardo Bajo a Alto", unit: "ns" },
    ],
    output: { symbol: "t_PHL", label: "Retardo Alto a Bajo", unit: "ns" },
    resolve: ({ t_p, t_PLH }) => {
        const result = 2 * t_p - t_PLH;
        return { result: { t_PHL: formatNumber(result) }, steps: [`t_PHL = 2 * ${t_p}ns - ${t_PLH}ns = ${formatNumber(result)}ns`] };
    },
  }
];