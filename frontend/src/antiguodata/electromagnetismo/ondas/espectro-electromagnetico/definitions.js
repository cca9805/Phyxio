
import { formatNumber } from '../../../../utils/formatNumber';

const C0 = 299792458; // Velocidad de la luz en el vacío (m/s)
const MU0 = 4 * Math.PI * 1e-7; // Permeabilidad del vacío (T·m/A)
const EPSILON0 = 8.854187817e-12; // Permitividad del vacío (F/m)

export const definitions = [
  // Grupo 1: Relación Velocidad, Frecuencia, Longitud de Onda
  {
    id: "ondas-velocidad-onda",
    groupId: "ondas_relacion_fundamental",
    title: "Calcular Velocidad de Onda",
    formula: "v = f * λ",
    variables: [
      { symbol: "f", label: "Frecuencia", unit: "Hz" },
      { symbol: "λ", label: "Longitud de Onda", unit: "m" }
    ],
    output: { symbol: "v", label: "Velocidad", unit: "m/s" },
    donde: "v es la velocidad de propagación de la onda, f es la frecuencia y λ es la longitud de onda",
    resolve: ({ f, λ }) => {
      const v = f * λ;
      return { result: { v: formatNumber(v) } };
    }
  },
  {
    id: "ondas-frecuencia",
    groupId: "ondas_relacion_fundamental",
    title: "Calcular Frecuencia",
    formula: "f = v / λ",
    variables: [
      { symbol: "v", label: "Velocidad", unit: "m/s" },
      { symbol: "λ", label: "Longitud de Onda", unit: "m" }
    ],
    output: { symbol: "f", label: "Frecuencia", unit: "Hz" },
    donde: "f es la frecuencia de la onda, v es la velocidad de propagación y λ es la longitud de onda",
    resolve: ({ v, λ }) => {
      const f = v / λ;
      return { result: { f: formatNumber(f) } };
    }
  },
  {
    id: "ondas-longitud-onda",
    groupId: "ondas_relacion_fundamental",
    title: "Calcular Longitud de Onda",
    formula: "λ = v / f",
    variables: [
      { symbol: "v", label: "Velocidad", unit: "m/s" },
      { symbol: "f", label: "Frecuencia", unit: "Hz" }
    ],
    output: { symbol: "λ", label: "Longitud de Onda", unit: "m" },
    donde: "λ es la longitud de onda, v es la velocidad de propagación y f es la frecuencia",
    resolve: ({ v, f }) => {
      const lambda = v / f;
      return { result: { "λ": formatNumber(lambda) } };
    }
  },

  // Grupo 2: Relación de Amplitud E/B
  {
    id: "ondas-amplitud-E",
    groupId: "ondas_relacion_E_B",
    title: "Calcular Campo Eléctrico (E)",
    formula: "E = c * B",
    variables: [
      { symbol: "B", label: "Campo Magnético", unit: "T" }
    ],
    output: { symbol: "E", label: "Campo Eléctrico", unit: "V/m" },
    constants: [{ symbol: "c", value: C0, unit: "m/s" }],
    donde: "E es el campo eléctrico, c es la velocidad de la luz y B es el campo magnético",
    resolve: ({ B }) => {
      const E = C0 * B;
      return { result: { E: formatNumber(E) } };
    }
  },
  {
    id: "ondas-amplitud-B",
    groupId: "ondas_relacion_E_B",
    title: "Calcular Campo Magnético (B)",
    formula: "B = E / c",
    variables: [
      { symbol: "E", label: "Campo Eléctrico", unit: "V/m" }
    ],
    output: { symbol: "B", label: "Campo Magnético", unit: "T" },
    constants: [{ symbol: "c", value: C0, unit: "m/s" }],
    donde: "B es el campo magnético, E es el campo eléctrico y c es la velocidad de la luz",
    resolve: ({ E }) => {
      const B = E / C0;
      return { result: { B: formatNumber(B) } };
    }
  },

  // Grupo 3: Intensidad de la Onda (Vector de Poynting)
  {
    id: "ondas-intensidad-S",
    groupId: "ondas_vector_poynting",
    title: "Calcular Intensidad (S)",
    formula: "S = (1/μ₀) * E * B",
    variables: [
      { symbol: "E", label: "Campo Eléctrico", unit: "V/m" },
      { symbol: "B", label: "Campo Magnético", unit: "T" }
    ],
    output: { symbol: "S", label: "Intensidad", unit: "W/m²" },
    constants: [{ symbol: "μ₀", value: MU0, unit: "T·m/A" }],
    donde: "S es la intensidad de la onda (vector de Poynting), E es el campo eléctrico, B es el campo magnético y μ₀ es la permeabilidad del vacío",
    resolve: ({ E, B }) => {
      const S = (1 / MU0) * E * B;
      return { result: { S: formatNumber(S) } };
    }
  },
  {
    id: "ondas-poynting-campo-E",
    groupId: "ondas_vector_poynting",
    title: "Calcular Campo Eléctrico (desde S)",
    formula: "E = (S * μ₀) / B",
    variables: [
      { symbol: "S", label: "Intensidad", unit: "W/m²" },
      { symbol: "B", label: "Campo Magnético", unit: "T" }
    ],
    output: { symbol: "E", label: "Campo Eléctrico", unit: "V/m" },
    constants: [{ symbol: "μ₀", value: MU0, unit: "T·m/A" }],
    donde: "E es el campo eléctrico, S es la intensidad de la onda, μ₀ es la permeabilidad del vacío y B es el campo magnético",
    resolve: ({ S, B }) => {
      const E = (S * MU0) / B;
      return { result: { E: formatNumber(E) } };
    }
  },
  {
    id: "ondas-poynting-campo-B",
    groupId: "ondas_vector_poynting",
    title: "Calcular Campo Magnético (desde S)",
    formula: "B = (S * μ₀) / E",
    variables: [
      { symbol: "S", label: "Intensidad", unit: "W/m²" },
      { symbol: "E", label: "Campo Eléctrico", unit: "V/m" }
    ],
    output: { symbol: "B", label: "Campo Magnético", unit: "T" },
    constants: [{ symbol: "μ₀", value: MU0, unit: "T·m/A" }],
    donde: "B es el campo magnético, S es la intensidad de la onda, μ₀ es la permeabilidad del vacío y E es el campo eléctrico",
    resolve: ({ S, E }) => {
      const B = (S * MU0) / E;
      return { result: { B: formatNumber(B) } };
    }
  },

  // Grupo 4: Velocidad de la Luz en un Medio
  {
    id: "ondas-velocidad-medio",
    groupId: "ondas_velocidad_medio",
    title: "Calcular Velocidad en Medio",
    formula: "v = c / n",
    variables: [
      { symbol: "n", label: "Índice de Refracción", unit: "" }
    ],
    output: { symbol: "v", label: "Velocidad", unit: "m/s" },
    constants: [{ symbol: "c", value: C0, unit: "m/s" }],
    donde: "v es la velocidad de la luz en el medio, c es la velocidad de la luz en el vacío y n es el índice de refracción del medio",
    resolve: ({ n }) => {
      const v = C0 / n;
      return { result: { v: formatNumber(v) } };
    }
  },
  {
    id: "ondas-indice-refraccion",
    groupId: "ondas_velocidad_medio",
    title: "Calcular Índice de Refracción",
    formula: "n = c / v",
    variables: [
      { symbol: "v", label: "Velocidad en el medio", unit: "m/s" }
    ],
    output: { symbol: "n", label: "Índice de Refracción", unit: "" },
    constants: [{ symbol: "c", value: C0, unit: "m/s" }],
    donde: "n es el índice de refracción del medio, c es la velocidad de la luz en el vacío y v es la velocidad de la luz en el medio",
    resolve: ({ v }) => {
      const n = C0 / v;
      return { result: { n: formatNumber(n) } };
    }
  }
];
