import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'flujo-solido',
    groupId: 'flujo-solido',
    title: 'Flujo en ángulo sólido',
    isFundamental: false,
    formula: 'Φ = I · Ω',
    variables: [
      { symbol: 'I', label: 'Intensidad luminosa (I)', unit: 'cd' },
      { symbol: 'Omega', label: 'Ángulo sólido (Ω)', unit: 'sr' }
    ],
    output: { symbol: 'Phi', label: 'Flujo luminoso (Φ)', unit: 'lm' },
    resolve: ({ I, Omega }) => {
      const numI = parseFloat(I);
      const numO = parseFloat(Omega);
      const Phi = numI * numO;
      return { result: { Phi: formatNumber(Phi) }, steps: [`Φ = ${numI} cd · ${numO} sr = ${formatNumber(Phi)} lm`] };
    }
  },
  {
    id: 'flujo-uniforme',
    groupId: 'flujo-uniforme',
    title: 'Flujo luminoso (uniforme)',
    isFundamental: true,
    formula: 'Φ = 4π · I',
    variables: [
      { symbol: 'I', label: 'Intensidad luminosa (I)', unit: 'cd' }
    ],
    output: { symbol: 'Phi', label: 'Flujo luminoso (Φ)', unit: 'lm' },
    resolve: ({ I }) => {
      const numI = parseFloat(I);
      const Phi = 4 * Math.PI * numI;
      return { result: { Phi: formatNumber(Phi) }, steps: [`Φ = 4π · ${numI} cd = ${formatNumber(Phi)} lm`] };
    }
  },
  {
    id: 'eficacia-global',
    groupId: 'eficacia-global',
    title: 'Eficacia luminosa',
    isFundamental: true,
    formula: 'η = Φ / P',
    variables: [
      { symbol: 'Phi', label: 'Flujo luminoso (Φ)', unit: 'lm' },
      { symbol: 'P', label: 'Potencia eléctrica (P)', unit: 'W' }
    ],
    output: { symbol: 'eta', label: 'Eficacia luminosa (η)', unit: 'lm/W' },
    resolve: ({ Phi, P }) => {
      const numPhi = parseFloat(Phi);
      const numP = parseFloat(P);
      if (numP === 0) return { error: 'La potencia no puede ser cero.' };
      const eta = numPhi / numP;
      return { result: { eta: formatNumber(eta) }, steps: [`η = ${numPhi} lm / ${numP} W = ${formatNumber(eta)} lm/W`] };
    }
  }
  ,{
    id: 'conversion-espectral-simple',
    groupId: 'conversion-espectral-simple',
    title: 'Conversión espectral (monocromática)',
    isFundamental: false,
    formula: 'Φ = 683 · V(λ) · Φ_e',
    variables: [
      { symbol: 'Phi_e', label: 'Flujo radiante (Φ_e)', unit: 'W' },
      { symbol: 'V', label: 'V(λ) (sensibilidad)', unit: 'adim' }
    ],
    output: { symbol: 'Phi', label: 'Flujo luminoso (Φ)', unit: 'lm' },
    resolve: ({ Phi_e, V }) => {
      const numPe = parseFloat(Phi_e);
      const numV = parseFloat(V);
      const Phi = 683 * numV * numPe;
      return { result: { Phi: formatNumber(Phi) }, steps: [`Φ = 683 lm/W · ${numV} · ${numPe} W = ${formatNumber(Phi)} lm`] };
    }
  }
];
