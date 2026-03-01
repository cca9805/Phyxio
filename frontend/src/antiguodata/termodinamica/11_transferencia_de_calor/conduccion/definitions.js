// =============================================================
// REVISIÓN DE TEMA SEGÚN PLANTILLA (13/12/2025)
//
// - Definiciones con isFundamental
// - id y groupId coinciden y siguen convención
// - Variables con unidades en label
// - No hay groupId duplicados
// =============================================================
import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'ley-fourier',
    groupId: 'conduccion-grupo-1',
    title: 'Ley de Fourier - Conducción (Q)',
    isFundamental: true,
    formula: String.raw`Q = -kA\frac{dT}{dx}`,
    variables: [
      { symbol: 'k', label: 'Conductividad térmica (k)', unit: 'W/(m·K)' },
      { symbol: 'A', label: 'Área de transferencia (A)', unit: 'm²' },
      { symbol: 'Delta_T', label: 'Diferencia de temperatura (ΔT)', unit: 'K' },
      { symbol: 'L', label: 'Espesor (L)', unit: 'm' }
    ],
    output: { symbol: 'Q', label: 'Flujo de calor (Q)', unit: 'W' },
    resolve: ({ k, A, Delta_T, L }) => {
      const Q = (k * A * Delta_T) / L;
      return {
        result: { Q: formatNumber(Q) },
        steps: [
          `Q = k × A × ΔT / L`,
          `Q = ${k} × ${A} × ${Delta_T} / ${L}`,
          `Q = ${formatNumber(Q)} W`
        ]
      };
    }
  },
  {
    id: 'resistencia-conduccion',
    groupId: 'conduccion-grupo-1',
    title: 'Resistencia Térmica por Conducción (R_cond)',
    isFundamental: true,
    formula: String.raw`R_{cond} = \frac{L}{kA}`,
    variables: [
      { symbol: 'L', label: 'Espesor (L)', unit: 'm' },
      { symbol: 'k', label: 'Conductividad térmica (k)', unit: 'W/(m·K)' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' }
    ],
    output: { symbol: 'R_cond', label: 'Resistencia térmica (R_cond)', unit: 'K/W' },
    resolve: ({ L, k, A }) => {
      const R_cond = L / (k * A);
      return {
        result: { R_cond: formatNumber(R_cond) },
        steps: [
          `R_cond = L / (k × A)`,
          `R_cond = ${L} / (${k} × ${A})`,
          `R_cond = ${formatNumber(R_cond)} K/W`
        ]
      };
    }

  },
  {
    id: 'flujo-superficial',
    groupId: 'conduccion-grupo-1',
    title: 'Flujo de calor superficial (q)',
    isFundamental: false,
    formula: String.raw`q = \frac{Q}{A}`,
    variables: [
      { symbol: 'Q', label: 'Flujo de calor (Q)', unit: 'W' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' }
    ],
    output: { symbol: 'q', label: 'Flujo de calor superficial (q)', unit: 'W/m²' },
    resolve: ({ Q, A }) => {
      const q = Q / A;
      return {
        result: { q: formatNumber(q) },
        steps: [
          `q = Q / A`,
          `q = ${Q} / ${A}`,
          `q = ${formatNumber(q)} W/m²`
        ]
      };
    }
  },
  {
    id: 'gradiente-termico',
    groupId: 'conduccion-grupo-1',
    title: 'Gradiente térmico',
    isFundamental: false,
    formula: String.raw`\frac{dT}{dx} = -\frac{Q}{kA}`,
    variables: [
      { symbol: 'Q', label: 'Flujo de calor (Q)', unit: 'W' },
      { symbol: 'k', label: 'Conductividad térmica (k)', unit: 'W/(m·K)' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' }
    ],
    output: { symbol: 'gradiente', label: 'Gradiente térmico (dT/dx)', unit: 'K/m' },
    resolve: ({ Q, k, A }) => {
      const gradiente = -Q / (k * A);
      return {
        result: { gradiente: formatNumber(gradiente) },
        steps: [
          `dT/dx = -Q / (k × A)`,
          `dT/dx = -${Q} / (${k} × ${A})`,
          `dT/dx = ${formatNumber(gradiente)} K/m`
        ]
      };
    }
  },
  {
    id: 'analogía-electrica',
    groupId: 'conduccion-grupo-1',
    title: 'Analogía eléctrica',
    isFundamental: false,
    formula: String.raw`Q = \frac{\Delta T}{R_{cond}}`,
    variables: [
      { symbol: 'Delta_T', label: 'Diferencia de temperatura (ΔT)', unit: 'K' },
      { symbol: 'R_cond', label: 'Resistencia térmica (R_cond)', unit: 'K/W' }
    ],
    output: { symbol: 'Q', label: 'Flujo de calor (Q)', unit: 'W' },
    resolve: ({ Delta_T, R_cond }) => {
      const Q = Delta_T / R_cond;
      return {
        result: { Q: formatNumber(Q) },
        steps: [
          `Q = ΔT / R_cond`,
          `Q = ${Delta_T} / ${R_cond}`,
          `Q = ${formatNumber(Q)} W`
        ]
      };
    }
  },
  {
    id: 'conductancia',
    groupId: 'conduccion-grupo-1',
    title: 'Conductancia',
    isFundamental: false,
    formula: String.raw`C = \frac{1}{R_{cond}} = \frac{kA}{L}`,
    variables: [
      { symbol: 'R_cond', label: 'Resistencia térmica (R_cond)', unit: 'K/W' }
    ],
    output: { symbol: 'C', label: 'Conductancia (C)', unit: 'W/K' },
    resolve: ({ R_cond }) => {
      const C = 1 / R_cond;
      return {
        result: { C: formatNumber(C) },
        steps: [
          `C = 1 / R_cond`,
          `C = 1 / ${R_cond}`,
          `C = ${formatNumber(C)} W/K`
        ]
      };
    }
  }
];
