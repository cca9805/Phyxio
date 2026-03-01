// Este es un subtema puramente teórico - sin calculadoras
export const isTheoryOnly = true;

export const definitions = [
  {
    id: 'proceso_politropico-conceptual',
    groupId: 'proceso_politropico-theory',
    title: 'Conceptos Fundamentales',
    description: 'Este subtema desarrolla conceptos teóricos fundamentales con contenido académico riguroso.',
    type: 'theoretical',
    content: {
      mainConcepts: ["politropico", "casos_especiales", "aplicaciones"],
      keyPrinciples: [
        "Definición de proceso politrópico: PV^n = constante",
        "Casos especiales según el valor de n",
        "Relación entre procesos politrópicos y procesos ideales",
        "Aplicaciones en compresores y expansores reales",
        "Interpretación física del índice politrópico"
      ],
      applications: ["Fundamentos teóricos", "Base conceptual", "Principios fundamentales"]
    }
  }
];

// Conceptos clave para este subtema teórico
export const theoreticalConcepts = {
  mainTopic: 'Proceso Politrópico',
  description: 'Generalización de los procesos termodinámicos mediante un índice politrópico variable',
  mainConcept: 'Un proceso politrópico es aquel que sigue la relación PV^n = constante, donde n es el índice politrópico. Este proceso generaliza todos los procesos ideales (isobárico, isocórico, isotérmico y adiabático) como casos especiales según el valor de n.',
  keyPoints: [
    'Ecuación politrópica: PV^n = constante',
    'n = 0: Proceso isobárico (P constante)',
    'n = 1: Proceso isotérmico (T constante)',
    'n = γ: Proceso adiabático (Q = 0)',
    'n = ∞: Proceso isocórico (V constante)',
    'Procesos reales suelen ser politrópicos con 1 < n < γ'
  ],
  learningObjectives: [
    'Comprender la ecuación politrópica general',
    'Identificar casos especiales según el valor de n',
    'Relacionar procesos politrópicos con procesos reales',
    'Calcular trabajo y calor en procesos politrópicos',
    'Aplicar conceptos a compresores y turbinas reales'
  ],
  detailedSections: ["politropico", "casos_especiales", "aplicaciones"],
  academicLevel: 'undergraduate',
  estimatedStudyTime: '2-3 hours',
  prerequisites: ['Procesos termodinámicos básicos', 'Primera ley de la termodinámica'],
  relatedTopics: ['Procesos isobárico, isocórico, isotérmico y adiabático', 'Compresores', 'Turbinas']
};
