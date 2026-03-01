import { formatNumber } from '../../../../utils/formatNumber';

// Este es un subtema puramente teórico - sin calculadoras
export const isTheoryOnly = true;

export const definitions = [
  // Subtema teórico: formulaciones_equivalentes
  // No contiene calculadoras, solo conceptos y teoría desarrollada
  {
    id: 'formulaciones_equivalentes-conceptual',
    groupId: 'formulaciones_equivalentes-theory',
    title: 'Conceptos Fundamentales',
    description: 'Este subtema desarrolla conceptos teóricos fundamentales con contenido académico riguroso.',
    type: 'theoretical',
    content: {
      mainConcepts: ["segunda_ley","primera_ley","aplicaciones"],
      keyPrinciples: ["Enunciados equivalentes de Kelvin-Planck y Clausius para la segunda ley","Formulaciones energética, cíclica y para sistemas abiertos de la primera ley","Demostración matemática de la equivalencia entre diferentes enunciados","Criterios para seleccionar la formulación más apropiada según el contexto","Aplicaciones específicas de cada formulación en problemas de ingeniería"],
      applications: ["Fundamentos teóricos", "Base conceptual", "Principios fundamentales"]
    }
  }
];

// Conceptos clave para este subtema teórico
export const theoreticalConcepts = {
  mainTopic: 'Formulaciones Equivalentes de las Leyes Termodinámicas',
  description: 'Diferentes enunciados matemáticamente equivalentes de las leyes termodinámicas y sus aplicaciones específicas',
  mainConcept: 'Las leyes de la termodinámica pueden expresarse mediante múltiples formulaciones equivalentes, cada una adaptada a contextos específicos de aplicación, pero todas describiendo los mismos principios fundamentales de conservación y dirección de los procesos naturales.',
  keyPoints: [
    'Enunciados equivalentes de Kelvin-Planck y Clausius para la segunda ley',
    'Formulaciones energética, cíclica y para sistemas abiertos de la primera ley',
    'Demostración matemática de la equivalencia entre diferentes enunciados',
    'Criterios para seleccionar la formulación más apropiada según el contexto',
    'Aplicaciones específicas de cada formulación en problemas de ingeniería'
  ],
  learningObjectives: [
    'Enunciar las diferentes formulaciones equivalentes de las leyes termodinámicas',
    'Demostrar la equivalencia matemática entre diferentes enunciados',
    'Seleccionar la formulación más apropiada para cada tipo de problema',
    'Aplicar las formulaciones correctas en el análisis de sistemas reales',
    'Comprender las ventajas de cada formulación en contextos específicos'
  ],
  detailedSections: ["segunda_ley","primera_ley","aplicaciones"],
  academicLevel: 'undergraduate',
  estimatedStudyTime: '2-3 hours',
  prerequisites: ['Conceptos básicos de física', 'Matemáticas básicas'],
  relatedTopics: ['Otros subtemas de termodinámica', 'Mecánica estadística', 'Física térmica']
};