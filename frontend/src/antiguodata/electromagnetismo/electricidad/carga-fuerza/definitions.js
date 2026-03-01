import { formatNumber } from '../../../../utils/formatNumber';

const K = 8.9875517923e9;

export const definitions = [
  // Grupo 1: Ley de Coulomb (F = k * |q1*q2| / r²)
  {
    id: "coulomb-fuerza",
    groupId: "ley-coulomb",
    title: "Calcular Fuerza (F)",
    isFundamental: true,
    formula: "F = k * |q₁ * q₂| / r²",
    variables: [
      { symbol: "q1", label: "Carga 1 (C)", unit: "C" },
      { symbol: "q2", label: "Carga 2 (C)", unit: "C" },
      { symbol: "r", label: "Distancia (m)", unit: "m" },
    ],
    output: { symbol: "F", label: "Fuerza (N)", unit: "N" },
    resolve: ({ q1, q2, r }) => {
      if (r === 0) return { error: "La distancia no puede ser cero." };
      const result = K * Math.abs(q1 * q2) / (r * r);
      return { result: { F: formatNumber(result) }, steps: [`F = (${K.toExponential(2)} * |${q1} * ${q2}|) / ${r}² = ${formatNumber(result)}N`] };
    },
  },
  {
    id: "coulomb-distancia",
    groupId: "ley-coulomb",
    title: "Calcular Distancia (r)",
    isComplementary: true,
    formula: "r = sqrt(k * |q₁ * q₂| / F)",
    variables: [
      { symbol: "q1", label: "Carga 1 (C)", unit: "C" },
      { symbol: "q2", label: "Carga 2 (C)", unit: "C" },
      { symbol: "F", label: "Fuerza (N)", unit: "N" },
    ],
    output: { symbol: "r", label: "Distancia (m)", unit: "m" },
    resolve: ({ q1, q2, F }) => {
      if (F === 0) return { error: "La fuerza no puede ser cero." };
      const radicand = K * Math.abs(q1 * q2) / F;
      if (radicand < 0) return { error: "No se puede calcular la raíz de un número negativo." };
      const result = Math.sqrt(radicand);
      return { result: { r: formatNumber(result) }, steps: [`r = sqrt((${K.toExponential(2)} * |${q1} * ${q2}|) / ${F}) = ${formatNumber(result)}m`] };
    },
  },
  {
    id: "coulomb-carga",
    groupId: "ley-coulomb",
    title: "Calcular Carga (q)",
    isComplementary: true,
    formula: "q₂ = (F * r²) / (k * |q₁|)",
    variables: [
      { symbol: "F", label: "Fuerza (N)", unit: "N" },
      { symbol: "r", label: "Distancia (m)", unit: "m" },
      { symbol: "q1", label: "Carga conocida (q₁) (C)", unit: "C" },
    ],
    output: { symbol: "q2", label: "Carga desconocida (q₂) (C)", unit: "C" },
    resolve: ({ F, r, q1 }) => {
      if (K * q1 === 0) return { error: "El denominador no puede ser cero." };
      const result = (F * r * r) / (K * Math.abs(q1));
      return { result: { q2: formatNumber(result) }, steps: [`q₂ = (${F} * ${r}²) / (${K.toExponential(2)} * |${q1}|) = ${formatNumber(result)}C`] };
    },
  },

  // Grupo 2: Campo Eléctrico (E = F/q)
  {
    id: "campo-electrico-e",
    groupId: "campo-electrico-definicion",
    title: "Calcular Campo Eléctrico (E)",
    isFundamental: true,
    formula: "E = F / q",
    variables: [
      { symbol: "F", label: "Fuerza (N)", unit: "N" },
      { symbol: "q", label: "Carga de prueba (C)", unit: "C" }
    ],
    output: { symbol: "E", label: "Campo Eléctrico (N/C)", unit: "N/C" },
    resolve: ({ F, q }) => {
        if (q === 0) return { error: "La carga de prueba no puede ser cero." };
        const result = F / q;
        return { result: { E: formatNumber(result) }, steps: [`E = ${F}N / ${q}C = ${formatNumber(result)}N/C`] };
    }
  },
  {
    id: "campo-electrico-f",
    groupId: "campo-electrico-definicion",
    title: "Calcular Fuerza (F)",
    isComplementary: true,
    formula: "F = E * q",
    variables: [
      { symbol: "E", label: "Campo Eléctrico (N/C)", unit: "N/C" },
      { symbol: "q", label: "Carga (C)", unit: "C" }
    ],
    output: { symbol: "F", label: "Fuerza (N)", unit: "N" },
    resolve: ({ E, q }) => {
        const result = E * q;
        return { result: { F: formatNumber(result) }, steps: [`F = ${E}N/C * ${q}C = ${formatNumber(result)}N`] };
    }
  },

  // Grupo 3: Campo Eléctrico de Carga Puntual (E = k*Q/r²)
  {
    id: "campo-puntual-e",
    groupId: "campo-electrico-puntual",
    title: "Calcular Campo Eléctrico (E)",
    isFundamental: true,
    formula: "E = k * |Q| / r²",
    variables: [
      { symbol: "Q", label: "Carga fuente (C)", unit: "C" },
      { symbol: "r", label: "Distancia (m)", unit: "m" }
    ],
    output: { symbol: "E", label: "Campo Eléctrico (N/C)", unit: "N/C" },
    resolve: ({ Q, r }) => {
        if (r === 0) return { error: "La distancia no puede ser cero." };
        const result = K * Math.abs(Q) / (r * r);
        return { result: { E: formatNumber(result) }, steps: [`E = (${K.toExponential(2)} * |${Q}|) / ${r}² = ${formatNumber(result)}N/C`] };
    }
  },
  {
    id: "campo-puntual-q",
    groupId: "campo-electrico-puntual",
    title: "Calcular Carga Fuente (Q)",
    isComplementary: true,
    formula: "|Q| = (E * r²) / k",
    variables: [
      { symbol: "E", label: "Campo Eléctrico (N/C)", unit: "N/C" },
      { symbol: "r", label: "Distancia (m)", unit: "m" }
    ],
    output: { symbol: "Q", label: "Carga Fuente (C)", unit: "C" },
    resolve: ({ E, r }) => {
        const result = (E * r * r) / K;
        return { result: { Q: formatNumber(result) }, steps: [`|Q| = (${E} * ${r}²) / ${K.toExponential(2)} = ${formatNumber(result)}C`] };
    }
  }
  ,
  // Grupo 4: Energía potencial (U = k * q1 * q2 / r)
  {
    id: "energia-coulomb-u",
    groupId: "energia-coulomb",
    title: "Calcular Energía Potencial (U)",
    isFundamental: true,
    formula: "U = k * q₁ * q₂ / r",
    variables: [
      { symbol: "q1", label: "Carga 1 (C)", unit: "C" },
      { symbol: "q2", label: "Carga 2 (C)", unit: "C" },
      { symbol: "r", label: "Distancia (m)", unit: "m" }
    ],
    output: { symbol: "U", label: "Energía potencial (J)", unit: "J" },
    resolve: ({ q1, q2, r }) => {
      if (r === 0) return { error: "La distancia no puede ser cero." };
      const result = K * (q1 * q2) / r;
      return { result: { U: formatNumber(result) }, steps: [`U = (${K.toExponential(2)} * ${q1} * ${q2}) / ${r} = ${formatNumber(result)}J`] };
    },
  },

  // Grupo 5: Potencial puntual (V = k * q / r)
  {
    id: "potencial-puntual-v",
    groupId: "potencial-puntual",
    title: "Calcular Potencial Eléctrico (V)",
    isFundamental: true,
    formula: "V = k * q / r",
    variables: [
      { symbol: "q", label: "Carga (C)", unit: "C" },
      { symbol: "r", label: "Distancia (m)", unit: "m" }
    ],
    output: { symbol: "V", label: "Potencial eléctrico (V)", unit: "V" },
    resolve: ({ q, r }) => {
      if (r === 0) return { error: "La distancia no puede ser cero." };
      const result = K * q / r;
      return { result: { V: formatNumber(result) }, steps: [`V = (${K.toExponential(2)} * ${q}) / ${r} = ${formatNumber(result)}V`] };
    }
  }
];