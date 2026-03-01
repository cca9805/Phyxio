// Este es un subtema puramente teórico - sin calculadoras
export const isTheoryOnly = true;

export const definitions = [
  {
    id: 'interpretacion_estadistica-conceptual',
    groupId: 'interpretacion_estadistica-theory',
    title: 'Conceptos Fundamentales',
    description: 'Este subtema desarrolla conceptos teóricos fundamentales con contenido académico riguroso.',
    type: 'theoretical',
    content: {
      mainConcepts: ["microestados", "macroestados", "boltzmann"],
      keyPrinciples: [
        "Relación entre microestados y macroestados",
        "Ecuación de Boltzmann: S = k_B ln(W)",
        "Interpretación probabilística de la entropía",
        "Conexión entre termodinámica y mecánica estadística",
        "Origen microscópico de la irreversibilidad"
      ],
      applications: ["Fundamentos teóricos", "Base conceptual", "Principios fundamentales"]
    }
  }
];

// Conceptos clave para este subtema teórico
export const theoreticalConcepts = {
  mainTopic: 'Interpretación Estadística de la Entropía',
  description: 'Fundamentos microscópicos de la entropía y su relación con la probabilidad de los estados',
  mainConcept: 'La entropía tiene una interpretación estadística fundamental: es proporcional al logaritmo del número de microestados compatibles con un macroestado dado (S = k_B ln W), lo que conecta la termodinámica macroscópica con la mecánica estadística microscópica.',
  keyPoints: [
    'Microestados: configuraciones microscópicas del sistema',
    'Macroestados: estados termodinámicos observables',
    'Ecuación de Boltzmann: S = k_B ln(W)',
    'La entropía mide el número de formas de realizar un estado',
    'Estados más probables tienen mayor entropía'
  ],
  learningObjectives: [
    'Distinguir entre microestados y macroestados',
    'Comprender la ecuación de Boltzmann',
    'Relacionar entropía con probabilidad',
    'Explicar la irreversibilidad desde perspectiva estadística',
    'Conectar termodinámica con mecánica estadística'
  ],
  detailedSections: ["microestados", "macroestados", "boltzmann"],
  academicLevel: 'undergraduate',
  estimatedStudyTime: '2-3 hours',
  prerequisites: ['Conceptos de entropía', 'Probabilidad básica', 'Mecánica estadística introductoria'],
  relatedTopics: ['Termodinámica estadística', 'Mecánica cuántica', 'Teoría cinética']
};
