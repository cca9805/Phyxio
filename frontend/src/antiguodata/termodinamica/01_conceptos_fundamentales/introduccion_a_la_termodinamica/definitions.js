import { formatNumber } from '../../../../utils/formatNumber';

// Este es un subtema puramente teórico - sin calculadoras
export const isTheoryOnly = true;

export const definitions = [
  // Subtema teórico: introduccion_a_la_termodinamica
  // No contiene calculadoras, solo conceptos y teoría desarrollada
  {
    id: 'introduccion_a_la_termodinamica-conceptual',
    groupId: 'introduccion_a_la_termodinamica-theory',
    title: 'Conceptos Fundamentales',
    description: 'Este subtema desarrolla conceptos teóricos fundamentales con contenido académico riguroso.',
    type: 'theoretical',
    content: {
      mainConcepts: ["definicion","historia","relaciones","aplicaciones"],
      keyPrinciples: ["Definición y alcance de la termodinámica como ciencia macroscópica","Desarrollo histórico desde la revolución industrial hasta la formulación moderna","Relación fundamental con otras ramas de la física y la ingeniería","Aplicaciones extensas en tecnología, industria y ciencias naturales","Base conceptual para el estudio de sistemas energéticos complejos"],
      applications: ["Fundamentos teóricos", "Base conceptual", "Principios fundamentales"]
    }
  }
];

// Conceptos clave para este subtema teórico
export const theoreticalConcepts = {
  mainTopic: 'Introducción a la Termodinámica',
  description: 'Fundamentos históricos, conceptuales y epistemológicos de la termodinámica como ciencia',
  mainConcept: 'La termodinámica es la rama de la física que estudia las relaciones entre calor, trabajo, temperatura y energía, así como las transformaciones de la energía en los sistemas macroscópicos.',
  keyPoints: [
    'Definición y alcance de la termodinámica como ciencia macroscópica',
    'Desarrollo histórico desde la revolución industrial hasta la formulación moderna',
    'Relación fundamental con otras ramas de la física y la ingeniería',
    'Aplicaciones extensas en tecnología, industria y ciencias naturales',
    'Base conceptual para el estudio de sistemas energéticos complejos'
  ],
  learningObjectives: [
    'Definir la termodinámica y comprender su alcance como disciplina científica',
    'Conocer los hitos históricos y científicos que contribuyeron a su desarrollo',
    'Identificar las conexiones con otras áreas del conocimiento científico y tecnológico',
    'Reconocer las aplicaciones fundamentales en ingeniería y ciencias aplicadas',
    'Establecer las bases conceptuales para el estudio avanzado de la materia'
  ],
  detailedSections: ["definicion","historia","relaciones","aplicaciones"],
  academicLevel: 'undergraduate',
  estimatedStudyTime: '2-3 hours',
  prerequisites: ['Conceptos básicos de física', 'Matemáticas básicas'],
  relatedTopics: ['Otros subtemas de termodinámica', 'Mecánica estadística', 'Física térmica']
};