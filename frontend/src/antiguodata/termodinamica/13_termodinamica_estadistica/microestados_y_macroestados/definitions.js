// Este es un subtema puramente teórico - sin calculadoras
export const isTheoryOnly = true;

export const definitions = [
  {
    id: 'microestados_y_macroestados-conceptual',
    groupId: 'microestados_y_macroestados-theory',
    title: 'Conceptos Fundamentales',
    description: 'Fundamentos de la descripción estadística de sistemas termodinámicos: microestados, macroestados, multiplicidad y equiprobabilidad.',
    type: 'theoretical',
    content: {
      mainConcepts: [
        'Microestado: especificación completa del estado de cada partícula (posición y momento, o estado cuántico)',
        'Macroestado: descripción mediante variables macroscópicas observables (P, V, T, E, N)',
        'Multiplicidad (Ω): número de microestados compatibles con un macroestado',
        'Principio de equiprobabilidad: todos los microestados accesibles son igualmente probables'
      ],
      keyPrinciples: [
        'Un macroestado puede realizarse mediante múltiples microestados',
        'La probabilidad de un macroestado es proporcional a su multiplicidad',
        'La entropía está relacionada con la multiplicidad: S = k_B ln(Ω)',
        'Los sistemas evolucionan hacia macroestados de mayor multiplicidad',
        'En el límite termodinámico, el macroestado de equilibrio domina abrumadoramente'
      ],
      applications: [
        'Fundamento microscópico de la segunda ley de la termodinámica',
        'Interpretación estadística de la entropía',
        'Explicación de la irreversibilidad en procesos termodinámicos',
        'Base para el cálculo de propiedades termodinámicas',
        'Modelado de sistemas complejos en computación y teoría de la información'
      ]
    }
  }
];