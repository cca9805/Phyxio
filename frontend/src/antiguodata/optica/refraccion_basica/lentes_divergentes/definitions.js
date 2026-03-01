export const definitions = [
  {
    id: 'lentes-divergentes',
    groupId: 'lentes-divergentes',
    title: 'Lentes divergentes - puntos conjugados',
    isFundamental: true,
    variables: [
      { symbol: 'f', label: 'Distancia focal (cm, negativa)', unit: 'cm', default: -10 },
      { symbol: 'd_o', label: 'Distancia del objeto (cm)', unit: 'cm', default: 20 }
    ],
    outputs: [
      { symbol: 'd_i', label: 'Distancia de la imagen (cm)', unit: 'cm' },
      { symbol: 'm', label: 'Magnificación (adimensional)', unit: '' },
      { symbol: 'clasificacion', label: 'Clasificación de la imagen', unit: '' }
    ],
    resolve: ({ f, d_o }) => {
      const f_m = f; // en cm coherentes
      const do_m = d_o;
      const inv_di = (1 / f_m) - (1 / do_m);
      const d_i = 1 / inv_di;
      const m = - d_i / do_m;
      const esVirtual = d_i < 0;
      const esDerecha = m > 0;
      const esMenor = Math.abs(m) < 1;
      const clasificacion = esVirtual && esDerecha && esMenor
        ? 'Virtual, derecha, reducida'
        : 'Caso especial';

      const steps = [
        String.raw`\\frac{1}{d_i} = \\frac{1}{f} - \\frac{1}{d_o}`,
        String.raw`\\frac{1}{d_i} = \\frac{1}{${f_m}} - \\frac{1}{${do_m}}`,
        String.raw`d_i = \\frac{1}{${inv_di.toFixed(4)}} = ${d_i.toFixed(2)}\\;cm`,
        String.raw`m = -\\frac{d_i}{d_o} = -\\frac{${d_i.toFixed(2)}}{${do_m}} = ${m.toFixed(2)}`
      ];

      return {
        result: { d_i, m, clasificacion, steps },
        steps
      };
    }
  }
];
