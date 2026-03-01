
import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Centroide de un Rectángulo ---
  {
    id: 'centroide-rectangulo',
    groupId: 'centroide-rectangulo',
    title: 'Calcular Centroide de Rectángulo',
    formula: 'C = (b/2, h/2)',
    variables: [
      { symbol: 'b', label: 'Base (b)', unit: 'm' },
      { symbol: 'h', label: 'Altura (h)', unit: 'm' }
    ],
    output: { symbol: 'C', label: 'Centroide (x̄, ȳ)', unit: 'm' },
    resolve: ({ b, h }) => {
      const x = parseFloat(b) / 2;
      const y = parseFloat(h) / 2;
      return { result: { C: `(${formatNumber(x)}, ${formatNumber(y)})` }, steps: [`x̄ = ${b} / 2 = ${formatNumber(x)}`, `ȳ = ${h} / 2 = ${formatNumber(y)}`] };
    }
  },

  // --- Grupo 2: Centroide de un Triángulo Rectángulo ---
  {
    id: 'centroide-triangulo',
    groupId: 'centroide-triangulo',
    title: 'Calcular Centroide de Triángulo Rectángulo',
    formula: 'C = (b/3, h/3)',
    variables: [
      { symbol: 'b', label: 'Base (b)', unit: 'm' },
      { symbol: 'h', label: 'Altura (h)', unit: 'm' }
    ],
    output: { symbol: 'C', label: 'Centroide (x̄, ȳ)', unit: 'm' },
    resolve: ({ b, h }) => {
      const x = parseFloat(b) / 3;
      const y = parseFloat(h) / 3;
      return { result: { C: `(${formatNumber(x)}, ${formatNumber(y)})` }, steps: [`x̄ = ${b} / 3 = ${formatNumber(x)}`, `ȳ = ${h} / 3 = ${formatNumber(y)}`] };
    }
  },

  // --- Grupo 3: Momento de Inercia de un Rectángulo ---
  {
    id: 'inercia-rectangulo',
    groupId: 'inercia-rectangulo',
    title: 'Calcular Inercia de Rectángulo (Ix)',
    formula: 'I_x = (b * h^3) / 12',
    variables: [
      { symbol: 'b', label: 'Base (b)', unit: 'm' },
      { symbol: 'h', label: 'Altura (h)', unit: 'm' }
    ],
    output: { symbol: 'Ix', label: 'Inercia (Ix)', unit: 'm⁴' },
    resolve: ({ b, h }) => {
      const Ix = (parseFloat(b) * Math.pow(parseFloat(h), 3)) / 12;
      return { result: { Ix: formatNumber(Ix) }, steps: [`I_x = (${b} * ${h}^3) / 12 = ${formatNumber(Ix)} m⁴`] };
    }
  },
  {
    id: 'inercia-rectangulo-base',
    groupId: 'inercia-rectangulo',
    title: 'Calcular Base desde Inercia',
    formula: 'b = (12 * I_x) / h^3',
    variables: [
        { symbol: 'Ix', label: 'Inercia (Ix)', unit: 'm⁴' },
        { symbol: 'h', label: 'Altura (h)', unit: 'm' }
    ],
    output: { symbol: 'b', label: 'Base (b)', unit: 'm' },
    resolve: ({ Ix, h }) => {
        const height = parseFloat(h);
        if (height === 0) return { error: "La altura no puede ser cero." };
        const b = (12 * parseFloat(Ix)) / Math.pow(height, 3);
        return { result: { b: formatNumber(b) }, steps: [`b = (12 * ${Ix}) / ${h}^3 = ${formatNumber(b)} m`] };
    }
  },
  {
    id: 'inercia-rectangulo-altura',
    groupId: 'inercia-rectangulo',
    title: 'Calcular Altura desde Inercia',
    formula: 'h = (12 * I_x / b)^(1/3)',
    variables: [
        { symbol: 'Ix', label: 'Inercia (Ix)', unit: 'm⁴' },
        { symbol: 'b', label: 'Base (b)', unit: 'm' }
    ],
    output: { symbol: 'h', label: 'Altura (h)', unit: 'm' },
    resolve: ({ Ix, b }) => {
        const base = parseFloat(b);
        if (base === 0) return { error: "La base no puede ser cero." };
        const h = Math.cbrt((12 * parseFloat(Ix)) / base);
        return { result: { h: formatNumber(h) }, steps: [`h = ∛((12 * ${Ix}) / ${b}) = ${formatNumber(h)} m`] };
    }
  },
  
  // --- Grupo 4: Momento de Inercia de un Círculo ---
  {
    id: 'inercia-circulo',
    groupId: 'inercia-circulo',
    title: 'Calcular Inercia de Círculo',
    formula: 'I = (π * r^4) / 4',
    variables: [
      { symbol: 'r', label: 'Radio (r)', unit: 'm' }
    ],
    output: { symbol: 'I', label: 'Inercia (I)', unit: 'm⁴' },
    resolve: ({ r }) => {
      const I = (Math.PI * Math.pow(parseFloat(r), 4)) / 4;
      return { result: { I: formatNumber(I) }, steps: [`I = (π * ${r}^4) / 4 = ${formatNumber(I)} m⁴`] };
    }
  },
  {
    id: 'inercia-circulo-radio',
    groupId: 'inercia-circulo',
    title: 'Calcular Radio desde Inercia',
    formula: 'r = (4 * I / π)^(1/4)',
    variables: [
      { symbol: 'I', label: 'Inercia (I)', unit: 'm⁴' }
    ],
    output: { symbol: 'r', label: 'Radio (r)', unit: 'm' },
    resolve: ({ I }) => {
      const r = Math.pow((4 * parseFloat(I)) / Math.PI, 1/4);
      return { result: { r: formatNumber(r) }, steps: [`r = ∜((4 * ${I}) / π) = ${formatNumber(r)} m`] };
    }
  },

  // --- Grupo 5: Teorema de Steiner ---
  {
    id: 'teorema-steiner',
    groupId: 'teorema-steiner',
    title: 'Calcular Inercia Total (Steiner)',
    formula: 'I = Ic + A * d^2',
    variables: [
      { symbol: 'Ic', label: 'Inercia Centroidal (Ic)', unit: 'm⁴' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' },
      { symbol: 'd', label: 'Distancia (d)', unit: 'm' }
    ],
    output: { symbol: 'I', label: 'Inercia Total (I)', unit: 'm⁴' },
    resolve: ({ Ic, A, d }) => {
      const I = parseFloat(Ic) + parseFloat(A) * Math.pow(parseFloat(d), 2);
      return { result: { I: formatNumber(I) }, steps: [`I = ${Ic} + ${A} * ${d}^2 = ${formatNumber(I)} m⁴`] };
    }
  },
  {
    id: 'teorema-steiner-ic',
    groupId: 'teorema-steiner',
    title: 'Calcular Inercia Centroidal (Ic)',
    formula: 'Ic = I - A * d^2',
    variables: [
      { symbol: 'I', label: 'Inercia Total (I)', unit: 'm⁴' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' },
      { symbol: 'd', label: 'Distancia (d)', unit: 'm' }
    ],
    output: { symbol: 'Ic', label: 'Inercia Centroidal (Ic)', unit: 'm⁴' },
    resolve: ({ I, A, d }) => {
      const Ic = parseFloat(I) - parseFloat(A) * Math.pow(parseFloat(d), 2);
      return { result: { Ic: formatNumber(Ic) }, steps: [`Ic = ${I} - ${A} * ${d}^2 = ${formatNumber(Ic)} m⁴`] };
    }
  },
  {
    id: 'teorema-steiner-area',
    groupId: 'teorema-steiner',
    title: 'Calcular Área (A)',
    formula: 'A = (I - Ic) / d^2',
    variables: [
      { symbol: 'I', label: 'Inercia Total (I)', unit: 'm⁴' },
      { symbol: 'Ic', label: 'Inercia Centroidal (Ic)', unit: 'm⁴' },
      { symbol: 'd', label: 'Distancia (d)', unit: 'm' }
    ],
    output: { symbol: 'A', label: 'Área (A)', unit: 'm²' },
    resolve: ({ I, Ic, d }) => {
      const dist = parseFloat(d);
      if (dist === 0) return { error: "La distancia no puede ser cero." };
      const A = (parseFloat(I) - parseFloat(Ic)) / Math.pow(dist, 2);
      return { result: { A: formatNumber(A) }, steps: [`A = (${I} - ${Ic}) / ${d}^2 = ${formatNumber(A)} m²`] };
    }
  },
  {
    id: 'teorema-steiner-distancia',
    groupId: 'teorema-steiner',
    title: 'Calcular Distancia (d)',
    formula: 'd = sqrt((I - Ic) / A)',
    variables: [
      { symbol: 'I', label: 'Inercia Total (I)', unit: 'm⁴' },
      { symbol: 'Ic', label: 'Inercia Centroidal (Ic)', unit: 'm⁴' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' }
    ],
    output: { symbol: 'd', label: 'Distancia (d)', unit: 'm' },
    resolve: ({ I, Ic, A }) => {
      const area = parseFloat(A);
      if (area === 0) return { error: "El área no puede ser cero." };
      const radicand = (parseFloat(I) - parseFloat(Ic)) / area;
      if (radicand < 0) return { error: "El valor dentro de la raíz cuadrada no puede ser negativo." };
      const d = Math.sqrt(radicand);
      return { result: { d: formatNumber(d) }, steps: [`d = √((${I} - ${Ic}) / ${A}) = ${formatNumber(d)} m`] };
    }
  },

  // --- Grupo 6 & 7: Centroides de Formas Compuestas ---
  {
    id: 'centroide-compuesto-x',
    groupId: 'centroide-compuesto-x',
    title: 'Calcular Centroide X Compuesto',
    formula: 'X = (Σ xi * Ai) / Σ Ai',
    variables: [
      { symbol: 'xi', label: 'Centroides Xi (separados por coma)', unit: 'm' },
      { symbol: 'Ai', label: 'Áreas Ai (separadas por coma)', unit: 'm²' }
    ],
    output: { symbol: 'X', label: 'Centroide General (X)', unit: 'm' },
    resolve: ({ xi, Ai }) => {
        const x_values = xi.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
        const A_values = Ai.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
        if (x_values.length !== A_values.length || x_values.length === 0) return { error: "Debe haber la misma cantidad de centroides y áreas, y no puede estar vacío." };
        
        let sum_xi_Ai = 0;
        let sum_Ai = 0;
        let steps = [];

        for(let i=0; i<x_values.length; i++) {
            sum_xi_Ai += x_values[i] * A_values[i];
            sum_Ai += A_values[i];
        }

        if (sum_Ai === 0) return { error: "La suma de las áreas no puede ser cero." };
        const X = sum_xi_Ai / sum_Ai;
        
        steps.push(`Σ(xi * Ai) = ${formatNumber(sum_xi_Ai)}`);
        steps.push(`Σ(Ai) = ${formatNumber(sum_Ai)}`);
        steps.push(`X = ${formatNumber(sum_xi_Ai)} / ${formatNumber(sum_Ai)} = ${formatNumber(X)} m`);
        return { result: { X: formatNumber(X) }, steps };
    }
  },
  {
    id: 'centroide-compuesto-y',
    groupId: 'centroide-compuesto-y',
    title: 'Calcular Centroide Y Compuesto',
    formula: 'Y = (Σ yi * Ai) / Σ Ai',
    variables: [
      { symbol: 'yi', label: 'Centroides Yi (separados por coma)', unit: 'm' },
      { symbol: 'Ai', label: 'Áreas Ai (separadas por coma)', unit: 'm²' }
    ],
    output: { symbol: 'Y', label: 'Centroide General (Y)', unit: 'm' },
    resolve: ({ yi, Ai }) => {
        const y_values = yi.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
        const A_values = Ai.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
        if (y_values.length !== A_values.length || y_values.length === 0) return { error: "Debe haber la misma cantidad de centroides y áreas, y no puede estar vacío." };

        let sum_yi_Ai = 0;
        let sum_Ai = 0;
        let steps = [];

        for(let i=0; i<y_values.length; i++) {
            sum_yi_Ai += y_values[i] * A_values[i];
            sum_Ai += A_values[i];
        }

        if (sum_Ai === 0) return { error: "La suma de las áreas no puede ser cero." };
        const Y = sum_yi_Ai / sum_Ai;

        steps.push(`Σ(yi * Ai) = ${formatNumber(sum_yi_Ai)}`);
        steps.push(`Σ(Ai) = ${formatNumber(sum_Ai)}`);
        steps.push(`Y = ${formatNumber(sum_yi_Ai)} / ${formatNumber(sum_Ai)} = ${formatNumber(Y)} m`);
        return { result: { Y: formatNumber(Y) }, steps };
    }
  }
];
