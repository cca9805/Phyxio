// Este es un subtema puramente teórico - sin calculadoras
export const isTheoryOnly = true;

export const definitions = [
  {
    id: 'relaciones_maxwell-conceptual',
    groupId: 'relaciones_maxwell-theory',
    title: 'Conceptos Fundamentales',
    description: 'Este subtema desarrolla conceptos teóricos fundamentales con contenido académico riguroso.',
    type: 'theoretical',
    content: {
      mainConcepts: ["relaciones_maxwell", "derivadas_parciales", "aplicaciones"],
      keyPrinciples: [
        "Relaciones de Maxwell derivadas de potenciales termodinámicos",
        "Igualdad de derivadas parciales cruzadas",
        "Aplicaciones en cálculos termodinámicos",
        "Relación entre propiedades medibles y no medibles",
        "Uso en determinación experimental de propiedades"
      ],
      applications: ["Fundamentos teóricos", "Base conceptual", "Principios fundamentales"]
    }
  }
];

export const theoreticalConcepts = {
  mainTopic: 'Relaciones de Maxwell',
  description: 'Ecuaciones que relacionan derivadas parciales de propiedades termodinámicas',
  mainConcept: 'Las relaciones de Maxwell son un conjunto de ecuaciones que relacionan las derivadas parciales de las propiedades termodinámicas. Se derivan de la igualdad de las derivadas parciales cruzadas de los potenciales termodinámicos (U, H, A, G) y son fundamentales para relacionar propiedades medibles con propiedades difíciles de medir directamente.',
  keyPoints: [
    'Derivadas de U: (∂T/∂V)_S = -(∂P/∂S)_V',
    'Derivadas de H: (∂T/∂P)_S = (∂V/∂S)_P',
    'Derivadas de A: (∂S/∂V)_T = (∂P/∂T)_V',
    'Derivadas de G: (∂S/∂P)_T = -(∂V/∂T)_P',
    'Permiten calcular propiedades no medibles a partir de medibles'
  ],
  learningObjectives: [
    'Comprender el origen matemático de las relaciones de Maxwell',
    'Derivar las cuatro relaciones principales',
    'Aplicar las relaciones para calcular propiedades termodinámicas',
    'Relacionar propiedades medibles con no medibles',
    'Usar en cálculos de cambios de entropía'
  ],
  detailedSections: ["derivacion", "aplicaciones", "ejemplos"],
  academicLevel: 'undergraduate',
  estimatedStudyTime: '2-3 hours',
  prerequisites: ['Potenciales termodinámicos', 'Cálculo multivariable', 'Derivadas parciales'],
  relatedTopics: ['Energía interna', 'Entalpía', 'Energía libre de Gibbs', 'Energía libre de Helmholtz']
};
