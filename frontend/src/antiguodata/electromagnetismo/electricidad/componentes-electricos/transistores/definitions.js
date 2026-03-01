import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'ganancia_corriente',
    groupId: 'transistores',
    title: 'Ganancia de Corriente (β = I_C / I_B)',
    formula: 'beta = Ic / Ib',
    variables: [
      { symbol: 'Ic', label: 'Corriente de colector', unit: 'mA' },
      { symbol: 'Ib', label: 'Corriente de base', unit: 'μA' }
    ],
    output: { symbol: 'beta', label: 'Ganancia', unit: '' },
    resolve: ({ Ic, Ib }) => {
      const Ic_A = parseFloat(Ic) / 1000;
      const Ib_A = parseFloat(Ib) / 1000000;
      const beta = Ic_A / Ib_A;
      
      return {
        result: { beta: formatNumber(beta) },
        steps: [
          `Datos: I_C = ${Ic} mA, I_B = ${Ib} μA`,
          `Ganancia: β = I_C / I_B`,
          `β = ${formatNumber(Ic_A)} / ${formatNumber(Ib_A)}`,
          `Resultado: β = ${formatNumber(beta)}`,
          ``,
          `El transistor amplifica la corriente ${formatNumber(beta)} veces`
        ]
      };
    }
  },

  {
    id: 'resistencia_base',
    groupId: 'transistores',
    title: 'Resistencia de Base para BJT',
    formula: 'R_b = (Vcc - Vbe) / (Ic / beta)',
    variables: [
      { symbol: 'Vcc', label: 'Voltaje de alimentación', unit: 'V' },
      { symbol: 'Ic', label: 'Corriente de colector', unit: 'mA' },
      { symbol: 'beta', label: 'Ganancia', unit: '' },
      { symbol: 'Vbe', label: 'Voltaje base-emisor', unit: 'V' }
    ],
    output: { symbol: 'Rb', label: 'Resistencia de base', unit: 'Ω' },
    resolve: ({ Vcc, Ic, beta, Vbe }) => {
      const Vccnum = parseFloat(Vcc);
      const Ic_A = parseFloat(Ic) / 1000;
      const betanum = parseFloat(beta);
      const Vbenum = parseFloat(Vbe);
      const Ib = Ic_A / betanum;
      const Rb = (Vccnum - Vbenum) / Ib;
      const Rb_saturacion = Rb / 3;
      
      return {
        result: { Rb: formatNumber(Rb) },
        steps: [
          `Datos: V_CC = ${Vcc} V, I_C = ${Ic} mA, β = ${beta}`,
          `Corriente de base necesaria: I_B = I_C / β`,
          `I_B = ${Ic} / ${beta} = ${formatNumber(Ib * 1000)} mA`,
          `Resistencia de base: R_B = (V_CC - V_BE) / I_B`,
          `R_B = (${Vcc} - ${Vbe}) / ${formatNumber(Ib)}`,
          `Resultado: R_B = ${formatNumber(Rb)} Ω`,
          ``,
          `Para saturación garantizada, usar: R_B ≈ ${formatNumber(Rb_saturacion)} Ω`,
          `(Usar 1/3 del valor calculado para asegurar saturación)`
        ]
      };
    }
  },

  {
    id: 'potencia_transistor',
    groupId: 'transistores',
    title: 'Potencia Disipada en Transistor',
    formula: 'P = Vce * Ic',
    variables: [
      { symbol: 'Vce', label: 'Voltaje colector-emisor', unit: 'V' },
      { symbol: 'Ic', label: 'Corriente de colector', unit: 'mA' }
    ],
    output: { symbol: 'P', label: 'Potencia', unit: 'W' },
    resolve: ({ Vce, Ic }) => {
      const Vcenum = parseFloat(Vce);
      const Ic_A = parseFloat(Ic) / 1000;
      const P = Vcenum * Ic_A;
      
      return {
        result: { P: formatNumber(P) },
        steps: [
          `Datos: V_CE = ${Vce} V, I_C = ${Ic} mA`,
          `Potencia: P = V_CE × I_C`,
          `P = ${Vce} × ${formatNumber(Ic_A)}`,
          `Resultado: P = ${formatNumber(P)} W = ${formatNumber(P * 1000)} mW`,
          ``,
          `Verificar que el transistor soporte esta potencia`,
          `Considerar disipador si P > 0.5 W`
        ]
      };
    }
  }
];
