import { formatNumber } from '../../../../utils/formatNumber';

// Este es un subtema puramente teórico - sin calculadoras
export const isTheoryOnly = true;

export const definitions = [
  // Subtema teórico: estado_y_equilibrio
  // No contiene calculadoras, solo conceptos y teoría desarrollada
  {
    id: 'estado_y_equilibrio-conceptual',
    groupId: 'estado_y_equilibrio-theory',
    title: 'Conceptos Fundamentales',
    description: 'Este subtema desarrolla conceptos teóricos fundamentales con contenido académico riguroso.',
    type: 'theoretical',
    content: {
      mainConcepts: ["estado","equilibrio","procesos","criterios"],
      keyPrinciples: ["Definición completa del estado termodinámico mediante variables independientes","Distinción entre variables de estado y funciones de estado","Caracterización completa del equilibrio térmico, mecánico, químico y de fases","Conceptos de procesos cuasiestáticos, reversibles e irreversibles","Criterios matemáticos de equilibrio y estabilidad termodinámica"],
      applications: ["Fundamentos teóricos", "Base conceptual", "Principios fundamentales"]
    }
  }
];

// Conceptos clave para este subtema teórico
export const theoreticalConcepts = {
  mainTopic: 'Estado y Equilibrio Termodinámico',
  description: 'Conceptos fundamentales de estado termodinámico y condiciones de equilibrio',
  mainConcept: 'El estado termodinámico de un sistema queda completamente determinado por un conjunto mínimo de propiedades independientes, mientras que el equilibrio termodinámico representa la condición en la cual todas las propiedades macroscópicas permanecen constantes en el tiempo.',
  keyPoints: [
    'Definición completa del estado termodinámico mediante variables independientes',
    'Distinción entre variables de estado y funciones de estado',
    'Caracterización completa del equilibrio térmico, mecánico, químico y de fases',
    'Conceptos de procesos cuasiestáticos, reversibles e irreversibles',
    'Criterios matemáticos de equilibrio y estabilidad termodinámica'
  ],
  learningObjectives: [
    'Definir el estado termodinámico y identificar las variables necesarias para caracterizarlo',
    'Distinguir entre variables de estado y funciones de estado con ejemplos específicos',
    'Reconocer y analizar las diferentes condiciones de equilibrio termodinámico',
    'Comprender los conceptos de reversibilidad y procesos cuasiestáticos',
    'Aplicar criterios de equilibrio y estabilidad en sistemas termodinámicos reales'
  ],
  detailedSections: ["estado","equilibrio","procesos","criterios"],
  academicLevel: 'undergraduate',
  estimatedStudyTime: '2-3 hours',
  prerequisites: ['Conceptos básicos de física', 'Matemáticas básicas'],
  relatedTopics: ['Otros subtemas de termodinámica', 'Mecánica estadística', 'Física térmica']
};