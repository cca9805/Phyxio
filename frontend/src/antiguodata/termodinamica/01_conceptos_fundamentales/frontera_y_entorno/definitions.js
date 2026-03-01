import { formatNumber } from '../../../../utils/formatNumber';

// Este es un subtema puramente teórico - sin calculadoras
export const isTheoryOnly = true;

export const definitions = [
  // Subtema teórico: frontera_y_entorno
  // No contiene calculadoras, solo conceptos y teoría desarrollada
  {
    id: 'frontera_y_entorno-conceptual',
    groupId: 'frontera_y_entorno-theory',
    title: 'Conceptos Fundamentales',
    description: 'Este subtema desarrolla conceptos teóricos fundamentales con contenido académico riguroso.',
    type: 'theoretical',
    content: {
      mainConcepts: ["frontera","entorno","interacciones"],
      keyPrinciples: ["Definición precisa de frontera como superficie que separa sistema y entorno","Clasificación de fronteras según rigidez, permeabilidad y conductividad térmica","Caracterización del entorno inmediato y lejano, incluyendo reservorios","Tipos de interacciones: transferencia de calor, trabajo y masa","Importancia de la correcta definición de fronteras para el análisis termodinámico"],
      applications: ["Fundamentos teóricos", "Base conceptual", "Principios fundamentales"]
    }
  }
];

// Conceptos clave para este subtema teórico
export const theoreticalConcepts = {
  mainTopic: 'Frontera y Entorno',
  description: 'Definición precisa de fronteras del sistema y caracterización de las interacciones con el entorno',
  mainConcept: 'La frontera de un sistema termodinámico es la superficie real o imaginaria que separa el sistema del entorno, determinando qué interacciones (energía y materia) son posibles entre ambos.',
  keyPoints: [
    'Definición precisa de frontera como superficie que separa sistema y entorno',
    'Clasificación de fronteras según rigidez, permeabilidad y conductividad térmica',
    'Caracterización del entorno inmediato y lejano, incluyendo reservorios',
    'Tipos de interacciones: transferencia de calor, trabajo y masa',
    'Importancia de la correcta definición de fronteras para el análisis termodinámico'
  ],
  learningObjectives: [
    'Definir correctamente las fronteras de sistemas termodinámicos reales',
    'Clasificar fronteras según sus propiedades físicas y térmicas',
    'Identificar y caracterizar diferentes tipos de entorno y reservorios',
    'Analizar las interacciones posibles entre sistema y entorno',
    'Aplicar estos conceptos en la resolución de problemas termodinámicos'
  ],
  detailedSections: ["frontera","entorno","interacciones"],
  academicLevel: 'undergraduate',
  estimatedStudyTime: '2-3 hours',
  prerequisites: ['Conceptos básicos de física', 'Matemáticas básicas'],
  relatedTopics: ['Otros subtemas de termodinámica', 'Mecánica estadística', 'Física térmica']
};