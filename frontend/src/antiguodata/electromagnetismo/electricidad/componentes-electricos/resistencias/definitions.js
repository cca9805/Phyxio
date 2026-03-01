import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'ley_ohm_v',
    groupId: 'resistencias',
    title: 'Calcular Voltaje (V = I × R)',
    formula: 'V = I * R',
    variables: [
      { symbol: 'I', label: 'Corriente', unit: 'A' },
      { symbol: 'R', label: 'Resistencia', unit: 'Ω' }
    ],
    output: { symbol: 'V', label: 'Voltaje', unit: 'V' },
    resolve: ({ I, R }) => {
      const V = parseFloat(I) * parseFloat(R);
      return {
        result: { V: formatNumber(V) },
        steps: [
          `Datos: I = ${I} A, R = ${R} Ω`,
          `Aplicamos la Ley de Ohm: V = I × R`,
          `V = ${I} × ${R}`,
          `Resultado: V = ${formatNumber(V)} V`
        ]
      };
    }
  },

  {
    id: 'ley_ohm_i',
    groupId: 'resistencias',
    title: 'Calcular Corriente (I = V / R)',
    formula: 'I = V / R',
    variables: [
      { symbol: 'V', label: 'Voltaje', unit: 'V' },
      { symbol: 'R', label: 'Resistencia', unit: 'Ω' }
    ],
    output: { symbol: 'I', label: 'Corriente', unit: 'A' },
    resolve: ({ V, R }) => {
      const I = parseFloat(V) / parseFloat(R);
      return {
        result: { I: formatNumber(I) },
        steps: [
          `Datos: V = ${V} V, R = ${R} Ω`,
          `Aplicamos la Ley de Ohm: I = V / R`,
          `I = ${V} / ${R}`,
          `Resultado: I = ${formatNumber(I)} A = ${formatNumber(I * 1000)} mA`
        ]
      };
    }
  },

  {
    id: 'ley_ohm_r',
    groupId: 'resistencias',
    title: 'Calcular Resistencia (R = V / I)',
    formula: 'R = V / I',
    variables: [
      { symbol: 'V', label: 'Voltaje', unit: 'V' },
      { symbol: 'I', label: 'Corriente', unit: 'A' }
    ],
    output: { symbol: 'R', label: 'Resistencia', unit: 'Ω' },
    resolve: ({ V, I }) => {
      const R = parseFloat(V) / parseFloat(I);
      return {
        result: { R: formatNumber(R) },
        steps: [
          `Datos: V = ${V} V, I = ${I} A`,
          `Aplicamos la Ley de Ohm: R = V / I`,
          `R = ${V} / ${I}`,
          `Resultado: R = ${formatNumber(R)} Ω`
        ]
      };
    }
  },

  {
    id: 'codigo_colores',
    groupId: 'resistencias',
    title: 'Decodificador de Código de Colores',
    formula: 'R = (banda1 * 10 + banda2) * multiplicador',
    variables: [
      { symbol: 'banda1', label: '1ª Banda (0-9)', unit: '' },
      { symbol: 'banda2', label: '2ª Banda (0-9)', unit: '' },
      { symbol: 'multiplicador', label: 'Multiplicador (0-6)', unit: '' }
    ],
    output: { symbol: 'R', label: 'Resistencia', unit: 'Ω' },
    resolve: ({ banda1, banda2, multiplicador }) => {
      const colores = ["Negro", "Marrón", "Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Violeta", "Gris", "Blanco"];
      const multiplicadores = [1, 10, 100, 1000, 10000, 100000, 1000000];
      const mult = multiplicadores[parseInt(multiplicador)];
      const valor = (parseInt(banda1) * 10 + parseInt(banda2)) * mult;
      
      let valorStr = valor.toString();
      if (valor >= 1000000) valorStr = (valor / 1000000).toFixed(1) + " MΩ";
      else if (valor >= 1000) valorStr = (valor / 1000).toFixed(1) + " kΩ";
      else valorStr = valor + " Ω";

      return {
        result: { R: formatNumber(valor) },
        steps: [
          `Bandas de colores:`,
          `1ª banda: ${colores[parseInt(banda1)]} = ${banda1}`,
          `2ª banda: ${colores[parseInt(banda2)]} = ${banda2}`,
          `Multiplicador: ${["×1", "×10", "×100", "×1k", "×10k", "×100k", "×1M"][parseInt(multiplicador)]}`,
          ``,
          `Cálculo:`,
          `Valor base = ${banda1}${banda2}`,
          `Resistencia = ${banda1}${banda2} × ${mult}`,
          `Resultado: R = ${valorStr}`
        ]
      };
    }
  },

  {
    id: 'potencia_resistencia',
    groupId: 'resistencias',
    title: 'Potencia Disipada (P = I² × R)',
    formula: 'P = I^2 * R',
    variables: [
      { symbol: 'I', label: 'Corriente', unit: 'A' },
      { symbol: 'R', label: 'Resistencia', unit: 'Ω' }
    ],
    output: { symbol: 'P', label: 'Potencia', unit: 'W' },
    resolve: ({ I, R }) => {
      const Inum = parseFloat(I);
      const Rnum = parseFloat(R);
      const P = Math.pow(Inum, 2) * Rnum;
      const V = Inum * Rnum;
      return {
        result: { P: formatNumber(P) },
        steps: [
          `Datos: I = ${I} A, R = ${R} Ω`,
          `Calculamos potencia: P = I² × R`,
          `P = (${I})² × ${R}`,
          `P = ${formatNumber(Math.pow(Inum, 2))} × ${R}`,
          `Resultado: P = ${formatNumber(P)} W`,
          ``,
          `Voltaje: V = I × R = ${formatNumber(V)} V`,
          `Verificación: P = V × I = ${formatNumber(V * Inum)} W ✓`
        ]
      };
    }
  },

  {
    id: 'resistencias_serie',
    groupId: 'resistencias',
    title: 'Resistencias en Serie',
    formula: 'R_total = R1 + R2 + R3',
    variables: [
      { symbol: 'R1', label: 'Resistencia 1', unit: 'Ω' },
      { symbol: 'R2', label: 'Resistencia 2', unit: 'Ω' },
      { symbol: 'R3', label: 'Resistencia 3', unit: 'Ω' }
    ],
    output: { symbol: 'R_total', label: 'Resistencia Total', unit: 'Ω' },
    resolve: ({ R1, R2, R3 }) => {
      const Rtotal = parseFloat(R1) + parseFloat(R2) + parseFloat(R3);
      return {
        result: { R_total: formatNumber(Rtotal) },
        steps: [
          `Resistencias en serie: R_total = R₁ + R₂ + R₃`,
          `R_total = ${R1} + ${R2} + ${R3}`,
          `Resultado: R_total = ${formatNumber(Rtotal)} Ω`
        ]
      };
    }
  },

  {
    id: 'resistencias_paralelo',
    groupId: 'resistencias',
    title: 'Resistencias en Paralelo',
    formula: '1/R_total = 1/R1 + 1/R2',
    variables: [
      { symbol: 'R1', label: 'Resistencia 1', unit: 'Ω' },
      { symbol: 'R2', label: 'Resistencia 2', unit: 'Ω' }
    ],
    output: { symbol: 'R_total', label: 'Resistencia Total', unit: 'Ω' },
    resolve: ({ R1, R2 }) => {
      const R1num = parseFloat(R1);
      const R2num = parseFloat(R2);
      const Rtotal = 1 / (1/R1num + 1/R2num);
      return {
        result: { R_total: formatNumber(Rtotal) },
        steps: [
          `Resistencias en paralelo: 1/R_total = 1/R₁ + 1/R₂`,
          `1/R_total = 1/${R1} + 1/${R2}`,
          `1/R_total = ${formatNumber(1/R1num)} + ${formatNumber(1/R2num)}`,
          `1/R_total = ${formatNumber(1/R1num + 1/R2num)}`,
          `Resultado: R_total = ${formatNumber(Rtotal)} Ω`
        ]
      };
    }
  },

  {
    id: 'divisor_tension',
    groupId: 'resistencias',
    title: 'Divisor de Tensión',
    formula: 'V_out = V_in * (R2 / (R1 + R2))',
    variables: [
      { symbol: 'Vin', label: 'Voltaje de entrada', unit: 'V' },
      { symbol: 'R1', label: 'Resistencia superior', unit: 'Ω' },
      { symbol: 'R2', label: 'Resistencia inferior', unit: 'Ω' }
    ],
    output: { symbol: 'Vout', label: 'Voltaje de salida', unit: 'V' },
    resolve: ({ Vin, R1, R2 }) => {
      const Vinnum = parseFloat(Vin);
      const R1num = parseFloat(R1);
      const R2num = parseFloat(R2);
      const Vout = Vinnum * (R2num / (R1num + R2num));
      const porcentaje = (Vout / Vinnum * 100).toFixed(1);
      return {
        result: { Vout: formatNumber(Vout) },
        steps: [
          `Divisor de tensión: V_out = V_in × (R₂ / (R₁ + R₂))`,
          `V_out = ${Vin} × (${R2} / (${R1} + ${R2}))`,
          `V_out = ${Vin} × (${R2} / ${R1num + R2num})`,
          `V_out = ${Vin} × ${formatNumber(R2num / (R1num + R2num))}`,
          `Resultado: V_out = ${formatNumber(Vout)} V`,
          ``,
          `El voltaje de salida es el ${porcentaje}% del voltaje de entrada`
        ]
      };
    }
  }
];
