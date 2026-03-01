import { formatNumber } from '../../../../utils/formatNumber';

// Este es un subtema puramente teórico - sin calculadoras
export const isTheoryOnly = true;

export const definitions = [
  // Subtema teórico: sistemas_termodinamicos
  // No contiene calculadoras, solo conceptos y teoría desarrollada
  {
    id: 'sistemas_termodinamicos-conceptual',
    groupId: 'sistemas_termodinamicos-theory',
    title: 'Conceptos Fundamentales',
    description: 'Este subtema desarrolla conceptos teóricos fundamentales con contenido académico riguroso.',
    type: 'theoretical',
    content: {
      mainConcepts: ["definicion","clasificacion","propiedades","estados"],
      keyPrinciples: ["Definición precisa de sistema, entorno, frontera y universo termodinámico","Clasificación completa: sistemas abiertos, cerrados y aislados","Distinción fundamental entre propiedades extensivas e intensivas","Conceptos de equilibrio termodinámico y sus diferentes tipos","Caracterización de procesos termodinámicos y su reversibilidad"],
      applications: ["Fundamentos teóricos", "Base conceptual", "Principios fundamentales"]
    }
  }
];

// Conceptos clave para este subtema teórico
export const theoreticalConcepts = {
  mainTopic: 'Sistemas Termodinámicos',
  description: 'Clasificación, características y propiedades de los sistemas termodinámicos',
  mainConcept: 'Un sistema termodinámico es una porción específica del universo que se separa para su estudio mediante fronteras reales o imaginarias, caracterizado por sus propiedades macroscópicas y su capacidad de intercambiar energía y materia con el entorno.',
  keyPoints: [
    'Definición precisa de sistema, entorno, frontera y universo termodinámico',
    'Clasificación completa: sistemas abiertos, cerrados y aislados',
    'Distinción fundamental entre propiedades extensivas e intensivas',
    'Conceptos de equilibrio termodinámico y sus diferentes tipos',
    'Caracterización de procesos termodinámicos y su reversibilidad'
  ],
  learningObjectives: [
    'Identificar y clasificar correctamente diferentes tipos de sistemas termodinámicos',
    'Distinguir entre propiedades extensivas e intensivas con ejemplos específicos',
    'Definir las fronteras apropiadas para el análisis de sistemas reales',
    'Reconocer estados de equilibrio y tipos de procesos termodinámicos',
    'Aplicar los conceptos de sistema en problemas de ingeniería práctica'
  ],
  detailedSections: ["definicion","clasificacion","propiedades","estados"],
  academicLevel: 'undergraduate',
  estimatedStudyTime: '2-3 hours',
  prerequisites: ['Conceptos básicos de física', 'Matemáticas básicas'],
  relatedTopics: ['Otros subtemas de termodinámica', 'Mecánica estadística', 'Física térmica']
};