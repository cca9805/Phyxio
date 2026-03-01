import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'resistencia_led',
    groupId: 'diodos',
    title: 'Resistencia Limitadora para LED',
    formula: 'R = (Vs - Vled) / Iled',
    variables: [
      { symbol: 'Vs', label: 'Voltaje de fuente', unit: 'V' },
      { symbol: 'Vled', label: 'Voltaje del LED', unit: 'V' },
      { symbol: 'Iled', label: 'Corriente del LED', unit: 'mA' }
    ],
    output: { symbol: 'R', label: 'Resistencia', unit: 'Ω' },
    resolve: ({ Vs, Vled, Iled }) => {
      const Vsnum = parseFloat(Vs);
      const Vlednum = parseFloat(Vled);
      const I_A = parseFloat(Iled) / 1000;
      const R = (Vsnum - Vlednum) / I_A;
      const P = Math.pow(I_A, 2) * R;
      
      return {
        result: { R: formatNumber(R) },
        steps: [
          `Datos: V_s = ${Vs} V, V_LED = ${Vled} V, I_LED = ${Iled} mA`,
          `Voltaje en resistencia: V_R = V_s - V_LED = ${Vs} - ${Vled} = ${Vsnum - Vlednum} V`,
          `Resistencia: R = V_R / I_LED`,
          `R = ${Vsnum - Vlednum} / ${formatNumber(I_A)}`,
          `Resultado: R = ${formatNumber(R)} Ω`,
          ``,
          `Resistencia comercial más cercana: 330 Ω o 390 Ω`,
          `Potencia disipada: P = ${formatNumber(P)} W`,
          `Usar resistencia de al menos 1/4 W (0.25 W)`
        ]
      };
    }
  },

  {
    id: 'potencia_diodo',
    groupId: 'diodos',
    title: 'Potencia Disipada en Diodo',
    formula: 'P = Vd * Id',
    variables: [
      { symbol: 'Vd', label: 'Caída de tensión', unit: 'V' },
      { symbol: 'Id', label: 'Corriente', unit: 'mA' }
    ],
    output: { symbol: 'P', label: 'Potencia', unit: 'W' },
    resolve: ({ Vd, Id }) => {
      const Vdnum = parseFloat(Vd);
      const I_A = parseFloat(Id) / 1000;
      const P = Vdnum * I_A;
      return {
        result: { P: formatNumber(P) },
        steps: [
          `Datos: V_d = ${Vd} V, I_d = ${Id} mA = ${formatNumber(I_A)} A`,
          `Potencia: P = V_d × I_d`,
          `P = ${Vd} × ${formatNumber(I_A)}`,
          `Resultado: P = ${formatNumber(P)} W = ${formatNumber(P * 1000)} mW`
        ]
      };
    }
  },

  {
    id: 'rectificador_onda_completa',
    groupId: 'diodos',
    title: 'Rectificador de Onda Completa',
    formula: 'V_dc = (2 * (V_peak - 2*Vd)) / PI',
    variables: [
      { symbol: 'Vac', label: 'Voltaje AC (RMS)', unit: 'V' },
      { symbol: 'Vd', label: 'Caída por diodo', unit: 'V' }
    ],
    output: { symbol: 'Vdc', label: 'Voltaje DC', unit: 'V' },
    resolve: ({ Vac, Vd }) => {
      const Vacnum = parseFloat(Vac);
      const Vdnum = parseFloat(Vd);
      const Vpeak = Vacnum * Math.sqrt(2);
      const Vdc = (2 * (Vpeak - 2 * Vdnum)) / Math.PI;
      return {
        result: { Vdc: formatNumber(Vdc) },
        steps: [
          `Datos: V_AC(RMS) = ${Vac} V, V_d = ${Vd} V por diodo`,
          `Voltaje pico: V_peak = V_RMS × √2 = ${formatNumber(Vpeak)} V`,
          `Caída total: 2 × V_d = ${formatNumber(2 * Vdnum)} V (dos diodos en serie)`,
          `Voltaje DC (onda completa): V_DC = 2 × (V_peak - 2V_d) / π`,
          `V_DC = 2 × (${formatNumber(Vpeak)} - ${formatNumber(2 * Vdnum)}) / ${Math.PI.toFixed(4)}`,
          `Resultado: V_DC = ${formatNumber(Vdc)} V`
        ]
      };
    }
  }
];
