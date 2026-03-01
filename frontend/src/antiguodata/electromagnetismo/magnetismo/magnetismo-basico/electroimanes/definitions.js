import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'campo_electroiman',
    groupId: 'electroimanes',
    title: 'Campo Magnético de Electroimán',
    formula: 'B = k * N * I',
    variables: [
      { symbol: 'N', label: 'Número de espiras', unit: '' },
      { symbol: 'I', label: 'Corriente', unit: 'A' },
      { symbol: 'k', label: 'Constante (con núcleo)', unit: '' }
    ],
    output: { symbol: 'B', label: 'Campo magnético (relativo)', unit: 'unidades' },
    resolve: ({ N, I, k }) => {
      const Nnum = parseFloat(N);
      const Inum = parseFloat(I);
      const knum = parseFloat(k);
      
      const B = knum * Nnum * Inum;
      
      return {
        result: { B: formatNumber(B) },
        steps: [
          `Número de espiras: N = ${N}`,
          `Corriente: I = ${I} A`,
          `Constante: k = ${k}`,
          ``,
          `Campo magnético: B = k × N × I`,
          `B = ${k} × ${N} × ${I}`,
          `B = ${formatNumber(B)} unidades`,
          ``,
          `Mayor N o I → Mayor campo magnético`
        ]
      };
    }
  },

  {
    "id": "comparar_electroimanes",
    "groupId": "electroimanes",
    "title": "Comparar Dos Electroimanes",
    "formula": "Ratio = (N1 * I1) / (N2 * I2)",
    "variables": [
      { "symbol": "N1", "label": "Espiras electroimán 1", "unit": "" },
      { "symbol": "I1", "label": "Corriente electroimán 1", "unit": "A" },
      { "symbol": "N2", "label": "Espiras electroimán 2", "unit": "" },
      { "symbol": "I2", "label": "Corriente electroimán 2", "unit": "A" }
    ],
    "output": { "symbol": "ratio", "label": "Ratio de campos", "unit": "" },
    "resolve": ({ N1, I1, N2, I2 }) => {
      const N1num = parseFloat(N1);
      const I1num = parseFloat(I1);
      const N2num = parseFloat(N2);
      const I2num = parseFloat(I2);
      
      const B1 = N1num * I1num;
      const B2 = N2num * I2num;
      const ratio = B1 / B2;
      
      let comparacion = "";
      if (ratio > 1) {
        comparacion = `El electroimán 1 es ${formatNumber(ratio)} veces más fuerte`;
      } else if (ratio < 1) {
        comparacion = `El electroimán 2 es ${formatNumber(1/ratio)} veces más fuerte`;
      } else {
        comparacion = "Ambos electroimanes tienen la misma fuerza";
      }
      
      return {
        result: { ratio: formatNumber(ratio) },
        steps: [
          `Electroimán 1: ${N1} espiras × ${I1} A = ${formatNumber(B1)}`,
          `Electroimán 2: ${N2} espiras × ${I2} A = ${formatNumber(B2)}`,
          ``,
          `Ratio: B₁/B₂ = ${formatNumber(B1)}/${formatNumber(B2)}`,
          `Ratio = ${formatNumber(ratio)}`,
          ``,
          comparacion
        ]
      };
    }
  },

  {
    id: 'espiras_necesarias',
    groupId: 'electroimanes',
    title: 'Espiras Necesarias para Cierto Campo',
    formula: 'N = B / (k * I)',
    variables: [
      { symbol: 'B_deseado', label: 'Campo deseado', unit: 'unidades' },
      { symbol: 'I', label: 'Corriente disponible', unit: 'A' },
      { symbol: 'k', label: 'Constante', unit: '' }
    ],
    output: { symbol: 'N', label: 'Espiras necesarias', unit: '' },
    resolve: ({ B_deseado, I, k }) => {
      const Bnum = parseFloat(B_deseado);
      const Inum = parseFloat(I);
      const knum = parseFloat(k);
      
      const N = Bnum / (knum * Inum);
      const N_redondeado = Math.ceil(N);
      
      return {
        result: { N: formatNumber(N_redondeado) },
        steps: [
          `Campo deseado: B = ${B_deseado} unidades`,
          `Corriente: I = ${I} A`,
          `Constante: k = ${k}`,
          ``,
          `Espiras: N = B / (k × I)`,
          `N = ${B_deseado} / (${k} × ${I})`,
          `N = ${formatNumber(N)}`,
          ``,
          `Necesitas ${N_redondeado} espiras (redondeado hacia arriba)`
        ]
      };
    }
  }
];
