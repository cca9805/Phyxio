
import { formatNumber } from '../../../utils/formatNumber';

const EPSILON_0 = 8.854187817e-12; // Permitividad del vacío en F/m
const MU_0 = 4 * Math.PI * 1e-7; // Permeabilidad del vacío en T·m/A

export const definitions = [
  // Grupo 1: Ley de Gauss
  {
    id: "maxwell-ley-gauss-campo-e",
    groupId: "maxwell_ley_de_gauss",
    title: "Calcular Campo Eléctrico (E)",
    formula: "E = Q_enc / (4 * π * ε₀ * r²)",
    variables: [
      { symbol: "Q_enc", label: "Carga encerrada", unit: "C" },
      { symbol: "r", label: "Radio", unit: "m" }
    ],
    output: { symbol: "E", label: "Campo Eléctrico", unit: "V/m" },
    constants: [{ symbol: "ε₀", value: EPSILON_0, unit: "F/m" }],
    donde: "E es el campo eléctrico, Q_enc es la carga encerrada, ε₀ es la permitividad del vacío y r es el radio",
    resolve: ({ Q_enc, r }) => {
      const e = Q_enc / (4 * Math.PI * EPSILON_0 * r * r);
      return { result: { E: formatNumber(e) } };
    }
  },
  {
    id: "maxwell-ley-gauss-carga-q",
    groupId: "maxwell_ley_de_gauss",
    title: "Calcular Carga Encerrada (Q)",
    formula: "Q_enc = E * 4 * π * ε₀ * r²",
    variables: [
      { symbol: "E", label: "Campo Eléctrico", unit: "V/m" },
      { symbol: "r", label: "Radio", unit: "m" }
    ],
    output: { symbol: "Q_enc", label: "Carga encerrada", unit: "C" },
    constants: [{ symbol: "ε₀", value: EPSILON_0, unit: "F/m" }],
    donde: "Q_enc es la carga encerrada, E es el campo eléctrico, ε₀ es la permitividad del vacío y r es el radio",
    resolve: ({ E, r }) => {
      const q = E * 4 * Math.PI * EPSILON_0 * r * r;
      return { result: { Q_enc: formatNumber(q) } };
    }
  },

  // Grupo 2: Ley de Faraday
  {
    id: "maxwell-ley-faraday-fem",
    groupId: "maxwell_ley_de_faraday",
    title: "Calcular FEM Inducida",
    formula: "FEM = -N * (ΔΦ_B / Δt)",
    variables: [
      { symbol: "N", label: "Número de espiras", unit: "" },
      { symbol: "ΔΦ_B", label: "Cambio Flujo Magnético", unit: "Wb" },
      { symbol: "Δt", label: "Intervalo de tiempo", unit: "s" }
    ],
    output: { symbol: "FEM", label: "Fuerza Electromotriz", unit: "V" },
    donde: "FEM es la fuerza electromotriz inducida, N es el número de espiras, ΔΦ_B es el cambio en el flujo magnético y Δt es el intervalo de tiempo",
    resolve: ({ N, ΔΦ_B, Δt }) => {
      const fem = -N * (ΔΦ_B / Δt);
      return { result: { FEM: formatNumber(fem) } };
    }
  },
  {
    id: "maxwell-ley-faraday-flujo",
    groupId: "maxwell_ley_de_faraday",
    title: "Calcular Cambio de Flujo",
    formula: "ΔΦ_B = -(FEM * Δt) / N",
    variables: [
      { symbol: "FEM", label: "Fuerza Electromotriz", unit: "V" },
      { symbol: "N", label: "Número de espiras", unit: "" },
      { symbol: "Δt", label: "Intervalo de tiempo", unit: "s" }
    ],
    output: { symbol: "ΔΦ_B", label: "Cambio Flujo Magnético", unit: "Wb" },
    donde: "ΔΦ_B es el cambio en el flujo magnético, FEM es la fuerza electromotriz, N es el número de espiras y Δt es el intervalo de tiempo",
    resolve: ({ FEM, N, Δt }) => {
      const deltaPhi = -(FEM * Δt) / N;
      return { result: { "ΔΦ_B": formatNumber(deltaPhi) } };
    }
  },

  // Grupo 3: Ley de Ampère
  {
    id: "maxwell-ley-ampere-campo-b",
    groupId: "maxwell_ley_de_ampere",
    title: "Calcular Campo Magnético (B)",
    formula: "B = (μ₀ * I) / (2 * π * r)",
    variables: [
      { symbol: "I", label: "Corriente", unit: "A" },
      { symbol: "r", label: "Distancia", unit: "m" }
    ],
    output: { symbol: "B", label: "Campo Magnético", unit: "T" },
    constants: [{ symbol: "μ₀", value: MU_0, unit: "T·m/A" }],
    donde: "B es el campo magnético, μ₀ es la permeabilidad del vacío, I es la corriente y r es la distancia al conductor",
    resolve: ({ I, r }) => {
      const b = (MU_0 * I) / (2 * Math.PI * r);
      return { result: { B: formatNumber(b) } };
    }
  },
  {
    id: "maxwell-ley-ampere-corriente-i",
    groupId: "maxwell_ley_de_ampere",
    title: "Calcular Corriente (I)",
    formula: "I = (B * 2 * π * r) / μ₀",
    variables: [
      { symbol: "B", label: "Campo Magnético", unit: "T" },
      { symbol: "r", label: "Distancia", unit: "m" }
    ],
    output: { symbol: "I", label: "Corriente", unit: "A" },
    constants: [{ symbol: "μ₀", value: MU_0, unit: "T·m/A" }],
    donde: "I es la corriente, B es el campo magnético, μ₀ es la permeabilidad del vacío y r es la distancia al conductor",
    resolve: ({ B, r }) => {
      const i = (B * 2 * Math.PI * r) / MU_0;
      return { result: { I: formatNumber(i) } };
    }
  }
];
