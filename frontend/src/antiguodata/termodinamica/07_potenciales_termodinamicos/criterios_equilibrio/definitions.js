// Este es un subtema puramente teórico - sin calculadoras
export const isTheoryOnly = true;

export const definitions = [
  {
    id: 'criterios_equilibrio-conceptual',
    groupId: 'criterios_equilibrio-theory',
    title: 'Conceptos Fundamentales',
    description: 'Este subtema desarrolla conceptos teóricos fundamentales con contenido académico riguroso.',
    type: 'theoretical',
    content: {
      mainConcepts: ["equilibrio_termodinamico", "estabilidad", "espontaneidad"],
      keyPrinciples: [
        "Criterios de equilibrio basados en potenciales termodinámicos",
        "Condiciones de estabilidad termodinámica",
        "Equilibrio térmico, mecánico y químico",
        "Principio de mínima energía",
        "Principio de máxima entropía"
      ],
      applications: ["Fundamentos teóricos", "Base conceptual", "Principios fundamentales"]
    }
  }
];

export const theoreticalConcepts = {
  mainTopic: 'Criterios de Equilibrio',
  description: 'Condiciones que determinan cuándo un sistema está en equilibrio termodinámico',
  mainConcept: 'Los criterios de equilibrio establecen las condiciones necesarias y suficientes para que un sistema termodinámico esté en equilibrio. Estos criterios se expresan en términos de los potenciales termodinámicos (U, H, A, G) y determinan la dirección de los procesos espontáneos. Un sistema en equilibrio minimiza su energía (o maximiza su entropía) bajo las restricciones impuestas.',
  keyPoints: [
    'Equilibrio térmico: temperaturas iguales (dT = 0)',
    'Equilibrio mecánico: presiones iguales (dP = 0)',
    'Equilibrio químico: potenciales químicos iguales (dμ = 0)',
    'Sistema aislado: entropía máxima (dS = 0, d²S < 0)',
    'T,V constantes: energía de Helmholtz mínima (dA = 0, d²A > 0)',
    'T,P constantes: energía de Gibbs mínima (dG = 0, d²G > 0)'
  ],
  learningObjectives: [
    'Comprender los diferentes tipos de equilibrio',
    'Aplicar criterios de equilibrio según las restricciones',
    'Determinar estabilidad de estados de equilibrio',
    'Relacionar equilibrio con potenciales termodinámicos',
    'Predecir dirección de procesos espontáneos'
  ],
  detailedSections: ["tipos_equilibrio", "criterios", "estabilidad"],
  academicLevel: 'undergraduate',
  estimatedStudyTime: '2-3 hours',
  prerequisites: ['Potenciales termodinámicos', 'Primera y segunda ley', 'Entropía'],
  relatedTopics: ['Energía libre de Gibbs', 'Energía libre de Helmholtz', 'Espontaneidad']
};
