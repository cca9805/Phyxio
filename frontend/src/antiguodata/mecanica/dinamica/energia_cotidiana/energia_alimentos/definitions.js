import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  // Calculadora 1: Calorías a Julios
  {
    id: 'calorias-a-julios-calcular',
    groupId: 'calorias-a-julios',
    title: 'Conversión Calorías ↔ Julios',
    formula: '1 kcal = 4,184 J',
    variables: [
      {
        symbol: 'Calorías',
        label: 'Energía en calorías',
        units: ['kcal', 'cal'],
        defaultUnit: 'kcal',
        defaultValue: 200
      }
    ],
    output: {
      symbol: 'Energia',
      label: 'Energía en julios',
      unit: 'kJ'
    },
    resolve: ({ Calorias }) => {
      const energiaJ = Calorias * 4184;
      const energiaKJ = energiaJ / 1000;
      
      return {
        result: { Energia: formatNumber(energiaKJ) },
        steps: [
          `1 kcal = 4{,}184 J`,
          `E = ${Calorias} kcal  4{,}184 = ${formatNumber(energiaJ)} J`,
          `E = ${formatNumber(energiaKJ)} kJ`
        ]
      };
    }
  },

  // Calculadora 2: Gasto calórico por actividad
  {
    id: 'gasto-calorico-actividad-calcular',
    groupId: 'gasto-calorico-actividad',
    title: 'Gasto calórico por actividad física',
    formula: 'Gasto = MET  Peso  Tiempo',
    variables: [
      {
        symbol: 'MET',
        label: 'Intensidad de la actividad (MET)',
        units: ['MET'],
        defaultUnit: 'MET',
        defaultValue: 8.0,
        options: [
          { label: '😴 Dormir', value: 0.9 },
          { label: '🛋️ Ver TV', value: 1.0 },
          { label: '🚶 Caminar lento', value: 2.0 },
          { label: '🧹 Tareas domésticas', value: 2.5 },
          { label: '🚶 Caminar normal', value: 3.5 },
          { label: '🚴 Bici recreativa', value: 4.0 },
          { label: '🏋️ Gimnasio moderado', value: 5.0 },
          { label: '🏃 Correr suave', value: 8.0 },
          { label: '🚴 Bici intensa', value: 10.0 },
          { label: '🏃 Correr rápido', value: 12.0 },
          { label: '🏊 Natación intensa', value: 10.0 },
          { label: '⚽ Fútbol', value: 10.0 }
        ]
      },
      {
        symbol: 'Peso',
        label: 'Peso corporal',
        units: ['kg'],
        defaultUnit: 'kg',
        defaultValue: 70
      },
      {
        symbol: 'Tiempo',
        label: 'Duración de la actividad',
        units: ['h', 'min'],
        defaultUnit: 'h',
        defaultValue: 1
      }
    ],
    output: {
      symbol: 'Gasto',
      label: 'Calorías quemadas',
      unit: 'kcal'
    },
    resolve: ({ MET, Peso, Tiempo }) => {
      const gastoKcal = MET * Peso * Tiempo;
      const gastoKJ = gastoKcal * 4.184;
      
      return {
        result: { Gasto: formatNumber(gastoKcal) },
        steps: [
          `Gasto = MET  Peso  Tiempo`,
          `Gasto = ${MET}  ${Peso} kg  ${Tiempo} h = ${formatNumber(gastoKcal)} kcal`,
          `Equivalente:  ${formatNumber(gastoKJ)} kJ`
        ]
      };
    }
  },

  // Calculadora 3: Tiempo para quemar calorías
  {
    id: 'tiempo-quemar-calorias-calcular',
    groupId: 'tiempo-quemar-calorias',
    title: 'Tiempo necesario para quemar calorías',
    formula: 'Tiempo = \\frac{Calorías_{alimento}}{MET  Peso}',
    variables: [
      {
        symbol: 'Calorías_{alimento}',
        label: 'Calorías del alimento',
        units: ['kcal'],
        defaultUnit: 'kcal',
        defaultValue: 285,
        options: [
          { label: '🍎 Manzana', value: 80 },
          { label: '🍌 Plátano', value: 105 },
          { label: '🍞 Pan con mantequilla', value: 150 },
          { label: '🥤 Refresco 330ml', value: 140 },
          { label: '🍩 Donut', value: 250 },
          { label: '🍕 Porción pizza', value: 285 },
          { label: '🍔 Hamburguesa', value: 540 },
          { label: '🍫 Chocolate 100g', value: 530 },
          { label: '🍟 Patatas fritas', value: 500 }
        ]
      },
      {
        symbol: 'MET',
        label: 'Intensidad del ejercicio',
        units: ['MET'],
        defaultUnit: 'MET',
        defaultValue: 8.0,
        options: [
          { label: '🚶 Caminar lento', value: 2.0 },
          { label: '🚶 Caminar normal', value: 3.5 },
          { label: '🚴 Bici recreativa', value: 4.0 },
          { label: '🏋️ Gimnasio', value: 5.0 },
          { label: '🏃 Correr suave', value: 8.0 },
          { label: '🚴 Bici intensa', value: 10.0 },
          { label: '🏃 Correr rápido', value: 12.0 }
        ]
      },
      {
        symbol: 'Peso',
        label: 'Tu peso corporal',
        units: ['kg'],
        defaultUnit: 'kg',
        defaultValue: 70
      }
    ],
    output: {
      symbol: 'Tiempo',
      label: 'Tiempo de ejercicio necesario',
      unit: 'min'
    },
    resolve: ({ Calorias_alimento, MET, Peso }) => {
      const tiempoHoras = Calorias_alimento / (MET * Peso);
      const tiempoMinutos = tiempoHoras * 60;
      
      return {
        result: { Tiempo: formatNumber(tiempoMinutos) },
        steps: [
          `Tiempo = (Calorías / MET  Peso)`,
          `Tiempo = \\frac{${Calorias_alimento}}{${MET}  ${Peso}} = ${formatNumber(tiempoHoras, 2)} h`,
          `Tiempo = ${formatNumber(tiempoMinutos)} minutos`
        ]
      };
    }
  }
];
