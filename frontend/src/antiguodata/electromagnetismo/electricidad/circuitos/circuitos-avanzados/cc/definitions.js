import { formatNumber } from '../../../../../../utils/formatNumber';

export const definitions = [
  // Calculadora: Thévenin a partir de Voc (tensión de circuito abierto) e Isc (corriente de cortocircuito)
  {
    id: 'thevenin-from-voc-isc',
    groupId: 'thevenin-from-voc-isc',
    title: 'Calcular Vth y Rth a partir de Voc e Isc',
    isFundamental: true,
    formula: 'V_th = V_oc ; R_th = V_oc / I_sc',
    variables: [
      { symbol: 'V_oc', label: 'Tensión circuito abierto (V)', unit: 'V' },
      { symbol: 'I_sc', label: 'Corriente de cortocircuito (A)', unit: 'A' }
    ],
    where: [
      'V_oc: tensión medida en circuito abierto en los terminales (V)',
      'I_sc: corriente medida con cortocircuito entre los terminales (A)'
    ],
    output: { symbol: 'V_th,R_th', label: 'Vth (V), Rth (Ω)', unit: 'V, Ω' },
    resolve: ({ V_oc, I_sc }) => {
      const Voc = parseFloat(V_oc);
      const Isc = parseFloat(I_sc);
      if (!isFinite(Voc) || !isFinite(Isc)) return { error: 'Entradas inválidas' };
      if (Isc === 0) return { error: 'I_sc no puede ser cero para calcular R_th.' };
      const Vth = Voc;
      const Rth = Voc / Isc;
      return { result: { V_th: formatNumber(Vth), R_th: formatNumber(Rth) }, steps: [
        `V_th = V_oc = ${formatNumber(Vth)} V`,
        `R_th = V_oc / I_sc = ${formatNumber(Voc)} / ${formatNumber(Isc)} = ${formatNumber(Rth)} Ω`
      ] };
    }
  },

  // Calculadora: Transformación fuente (fuente de tensión a fuente de corriente equivalente)
  {
    id: 'source-transform-v-to-i',
    groupId: 'source-transform-v-to-i',
    title: 'Transformación fuente V→I (fuente de tensión serie a fuente de corriente)',
    isFundamental: false,
    formula: 'I_s = V_s / R_s',
    variables: [
      { symbol: 'V_s', label: 'Voltaje de la fuente (V)', unit: 'V' },
      { symbol: 'R_s', label: 'Resistencia serie (Ω)', unit: 'Ω' }
    ],
    where: [
      'V_s: tensión de la fuente en configuración serie (V)',
      'R_s: resistencia en serie con la fuente (Ω)'
    ],
    output: { symbol: 'I_s,R_p', label: 'I_s (A), R_p (Ω) - fuente de corriente y resistencia paralela equivalente', unit: 'A, Ω' },
    resolve: ({ V_s, R_s }) => {
      const Vs = parseFloat(V_s);
      const Rs = parseFloat(R_s);
      if (!isFinite(Vs) || !isFinite(Rs)) return { error: 'Entradas inválidas' };
      if (Rs === 0) return { error: 'R_s no puede ser cero.' };
      const Is = Vs / Rs;
      const Rp = Rs; // en la transformación ideal R permanece numéricamente igual, pasa a paralelo
      return { result: { I_s: formatNumber(Is), R_p: formatNumber(Rp) }, steps: [
        `I_s = V_s / R_s = ${formatNumber(Vs)} / ${formatNumber(Rs)} = ${formatNumber(Is)} A`,
        `R_p = R_s = ${formatNumber(Rp)} Ω`
      ] };
    }
  },

  // Calculadora: Fuente Norton a Thévenin (I_sc y R_th → V_th)
  {
    id: 'norton-to-thevenin',
    groupId: 'norton-to-thevenin',
    title: 'Transformación Norton → Thévenin (I_sc y R_th → V_th)',
    isFundamental: false,
    formula: 'V_th = I_sc * R_th',
    variables: [
      { symbol: 'I_sc', label: 'Corriente de cortocircuito (A)', unit: 'A' },
      { symbol: 'R_th', label: 'Resistencia Thévenin (Ω)', unit: 'Ω' }
    ],
    where: [
      'I_sc: corriente de cortocircuito medida entre terminales (A)',
      'R_th: resistencia equivalente vista desde los terminales (Ω)'
    ],
    output: { symbol: 'V_th', label: 'Voltaje Thévenin (V)', unit: 'V' },
    resolve: ({ I_sc, R_th }) => {
      const Isc = parseFloat(I_sc);
      const Rth = parseFloat(R_th);
      if (!isFinite(Isc) || !isFinite(Rth)) return { error: 'Entradas inválidas' };
      const Vth = Isc * Rth;
      return { result: { V_th: formatNumber(Vth) }, steps: [`V_th = I_sc * R_th = ${formatNumber(Isc)} * ${formatNumber(Rth)} = ${formatNumber(Vth)} V`] };
    }
  }
];
