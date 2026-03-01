// Este es un subtema puramente teórico - sin calculadoras
export const isTheoryOnly = true;

export const definitions = [
  {
    id: 'entropia_y_segunda_ley-conceptual',
    groupId: 'entropia_y_segunda_ley-theory',
    title: 'Conceptos Fundamentales',
    description: 'Este subtema desarrolla conceptos teóricos fundamentales con contenido académico riguroso.',
    type: 'theoretical',
    content: {
      mainConcepts: ["segunda_ley", "entropia", "irreversibilidad"],
      keyPrinciples: [
        "La entropía como medida de la irreversibilidad",
        "Relación entre entropía y la segunda ley de la termodinámica",
        "Principio de aumento de entropía en sistemas aislados",
        "Entropía y dirección de los procesos naturales",
        "Interpretación física de la entropía"
      ],
      applications: ["Fundamentos teóricos", "Base conceptual", "Principios fundamentales"]
    }
  }
];

// Conceptos clave para este subtema teórico
export const theoreticalConcepts = {
  mainTopic: 'Entropía y Segunda Ley de la Termodinámica',
  description: 'Relación fundamental entre el concepto de entropía y la segunda ley de la termodinámica',
  mainConcept: 'La entropía es la magnitud termodinámica que cuantifica la segunda ley, estableciendo que en todo proceso real la entropía del universo aumenta, lo que determina la dirección natural de los procesos y la imposibilidad de alcanzar eficiencias del 100% en máquinas térmicas.',
  keyPoints: [
    'La entropía como medida cuantitativa de la segunda ley',
    'Principio de aumento de entropía: ΔS_universo ≥ 0',
    'Procesos reversibles (ΔS = 0) vs irreversibles (ΔS > 0)',
    'Entropía y la flecha del tiempo termodinámico',
    'Limitaciones impuestas por la segunda ley en procesos reales'
  ],
  learningObjectives: [
    'Comprender la relación entre entropía y segunda ley',
    'Explicar por qué la entropía siempre aumenta en procesos reales',
    'Identificar procesos reversibles e irreversibles',
    'Aplicar el principio de aumento de entropía',
    'Entender las limitaciones termodinámicas en sistemas reales'
  ],
  detailedSections: ["segunda_ley", "entropia", "irreversibilidad"],
  academicLevel: 'undergraduate',
  estimatedStudyTime: '2-3 hours',
  prerequisites: ['Segunda ley de la termodinámica', 'Conceptos básicos de entropía'],
  relatedTopics: ['Procesos reversibles e irreversibles', 'Máquinas térmicas', 'Ciclo de Carnot']
};
