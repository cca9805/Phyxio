// Este es un subtema puramente teórico - sin calculadoras
export const isTheoryOnly = true;

export const definitions = [
  {
    id: 'entropia_de_mezcla-conceptual',
    groupId: 'entropia_de_mezcla-theory',
    title: 'Conceptos Fundamentales',
    description: 'Este subtema desarrolla conceptos teóricos fundamentales con contenido académico riguroso.',
    type: 'theoretical',
    content: {
      mainConcepts: ["mezcla", "gases_ideales", "paradoja_gibbs"],
      keyPrinciples: [
        "Aumento de entropía en procesos de mezcla",
        "Entropía de mezcla de gases ideales",
        "Paradoja de Gibbs y su resolución",
        "Irreversibilidad de la mezcla",
        "Aplicaciones en soluciones y aleaciones"
      ],
      applications: ["Fundamentos teóricos", "Base conceptual", "Principios fundamentales"]
    }
  }
];

// Conceptos clave para este subtema teórico
export const theoreticalConcepts = {
  mainTopic: 'Entropía de Mezcla',
  description: 'Cambio de entropía asociado a la mezcla de sustancias y sus implicaciones termodinámicas',
  mainConcept: 'Cuando dos o más sustancias se mezclan espontáneamente, la entropía del sistema aumenta debido al incremento en el número de configuraciones microscópicas posibles. Este aumento de entropía es irreversible y explica por qué las mezclas no se separan espontáneamente.',
  keyPoints: [
    'La mezcla espontánea siempre aumenta la entropía',
    'Entropía de mezcla: ΔS_mezcla = -nR Σ(x_i ln x_i)',
    'Paradoja de Gibbs: mezcla de gases idénticos',
    'Irreversibilidad del proceso de mezcla',
    'Aplicaciones en química y metalurgia'
  ],
  learningObjectives: [
    'Calcular la entropía de mezcla de gases ideales',
    'Comprender la paradoja de Gibbs',
    'Explicar la irreversibilidad de la mezcla',
    'Aplicar conceptos a soluciones y aleaciones',
    'Relacionar entropía de mezcla con espontaneidad'
  ],
  detailedSections: ["mezcla", "gases_ideales", "paradoja_gibbs"],
  academicLevel: 'undergraduate',
  estimatedStudyTime: '2-3 hours',
  prerequisites: ['Entropía', 'Gases ideales', 'Termodinámica de mezclas'],
  relatedTopics: ['Soluciones ideales', 'Potencial químico', 'Equilibrio de fases']
};
