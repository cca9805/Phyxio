import { formatNumber } from '../../../../utils/formatNumber.js';

// Definiciones y calculadoras para velocidad de la luz
export const definitions = [
  {
    id: 'constante-velocidad-luz',
    groupId: 'velocidad-de-la-luz',
    title: 'Constante c',
    isFundamental: true,
    formula: String.raw`c = 299.792.458\ \text{m/s}`,
    where: [
      { symbol: 'c', description: 'Velocidad de la luz en el vacío (m/s)' }
    ]
  },
  {
    id: 'tiempo-viaje-luz',
    groupId: 'velocidad-de-la-luz',
    title: 'Tiempo de viaje de la luz',
    isFundamental: false,
    formula: String.raw`t = \dfrac{d}{c}`,
    where: [
      { symbol: 't', description: 'Tiempo de viaje de la luz' },
      { symbol: 'd', description: 'Distancia entre origen y destino' },
      { symbol: 'c', description: 'Velocidad de la luz (m/s) = 299.792.458' }
    ],
    variables: [
      { symbol: 'distanciaValor', label: 'Distancia', unit: '', description: 'Ej.: 384400 (Luna→Tierra) o 1 (AU/AL)' },
      { symbol: 'unidad', label: 'Unidad', unit: '', description: 'Selecciona unidad: m, km, AU, AL', options: ['m', 'km', 'AU', 'AL'] }
    ],
    output: { symbol: 'tiempo', label: 'Tiempo (s)', unit: 's' },
    resolve: ({ distanciaValor, unidad }) => {
      const c = 299792458; // m/s
      const valor = parseFloat(distanciaValor);
      const AU_METROS = 149_597_870_700; // 1 UA en metros
      const AL_METROS = 9.4607e15; // 1 año luz en metros (aprox)

      let dMetros = 0;
      let convDesc = '';
      switch (unidad) {
        case 'm':
          dMetros = valor;
          convDesc = `d = ${formatNumber(valor)} m`;
          break;
        case 'km':
          dMetros = valor * 1000;
          convDesc = `d = ${formatNumber(valor)} km = ${formatNumber(dMetros)} m`;
          break;
        case 'AU':
          dMetros = valor * AU_METROS;
          convDesc = `d = ${formatNumber(valor)} AU = ${formatNumber(dMetros)} m`;
          break;
        case 'AL':
          dMetros = valor * AL_METROS;
          convDesc = `d = ${formatNumber(valor)} AL = ${formatNumber(dMetros)} m`;
          break;
        default:
          dMetros = valor;
          convDesc = `d ≈ ${formatNumber(dMetros)} m`;
      }

      const tSeg = dMetros / c;
      const tMs = tSeg * 1000;
      const tMin = tSeg / 60;
      const tHoras = tMin / 60;
      const tDias = tHoras / 24;
      return {
        result: {
          tiempoMs: formatNumber(tMs),
          tiempo: formatNumber(tSeg),
          tiempoMin: formatNumber(tMin),
          tiempoHoras: formatNumber(tHoras),
          tiempoDias: formatNumber(tDias)
        },
        steps: [
          convDesc,
          `Fórmula: t = d / c`,
          `t = ${formatNumber(dMetros)} / ${c} = ${formatNumber(tSeg)} s`,
          `Equivalentes: ${formatNumber(tMs)} ms, ${formatNumber(tMin)} min, ${formatNumber(tHoras)} h, ${formatNumber(tDias)} días`
        ]
      };
    }
  }
];
