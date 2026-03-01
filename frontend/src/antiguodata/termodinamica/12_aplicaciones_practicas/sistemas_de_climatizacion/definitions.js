import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'carga-termica',
    groupId: 'sistemas_de_climatizacion-grupo-1',
    title: 'Carga Térmica Total (Q_total)',
    isFundamental: true,
    formula: String.raw`Q_{total} = Q_{sensible} + Q_{latente}`,
    variables: [
      { symbol: 'Q_sensible', label: 'Carga sensible (Q_sensible)', unit: 'W' },
      { symbol: 'Q_latente', label: 'Carga latente (Q_latente)', unit: 'W' }
    ],
    output: { symbol: 'Q_total', label: 'Carga térmica total (Q_total)', unit: 'W' },
    resolve: ({ Q_sensible, Q_latente }) => {
      const Q_total = Q_sensible + Q_latente;
      const Q_total_TR = Q_total / 3516.85; // Conversión a toneladas de refrigeración
      return {
        result: { Q_total: formatNumber(Q_total), Q_total_TR: formatNumber(Q_total_TR) },
        steps: [
          `Q_total = Q_sensible + Q_latente`,
          `Q_total = ${Q_sensible} + ${Q_latente}`,
          `Q_total = ${formatNumber(Q_total)} W`,
          `Q_total = ${formatNumber(Q_total_TR)} TR (toneladas de refrigeración)`
        ]
      };
    }
  },
  {
    id: 'eer-sistema',
    groupId: 'sistemas_de_climatizacion-grupo-1',
    title: 'Relación de Eficiencia Energética (EER)',
    isFundamental: true,
    formula: String.raw`\text{EER} = \frac{Q_{enfriamiento}}{W_{electrico}}`,
    variables: [
      { symbol: 'Q_enfriamiento', label: 'Capacidad de enfriamiento (Q_enfriamiento)', unit: 'BTU/h' },
      { symbol: 'W_electrico', label: 'Potencia eléctrica consumida (W_electrico)', unit: 'W' }
    ],
    output: { symbol: 'EER', label: 'EER', unit: 'BTU/(W·h)' },
    resolve: ({ Q_enfriamiento, W_electrico }) => {
      const EER = Q_enfriamiento / W_electrico;
      return {
        result: { EER: formatNumber(EER) },
        steps: [
          `EER = Q_enfriamiento / W_electrico`,
          `EER = ${Q_enfriamiento} / ${W_electrico}`,
          `EER = ${formatNumber(EER)} BTU/(W·h)`
        ]
      };
    }
  }
];
