import { formatNumber } from '../../../../utils/formatNumber';

// Este es un subtema puramente teórico - sin calculadoras
export const isTheoryOnly = true;

export const definitions = [
  {
    id: 'modelo_de_ising-conceptual',
    groupId: 'modelo_de_ising-theory',
    title: 'Conceptos Fundamentales',
    description: 'Este subtema desarrolla el modelo de Ising y sus aplicaciones en transiciones de fase.',
    type: 'theoretical',
    content: {
      mainConcepts: [
        'Hamiltoniano: H = -J Σ s_i s_j - h Σ s_i',
        'Magnetización como parámetro de orden: M = (1/N) Σ s_i',
        'Modelo 1D: sin transición de fase a T finita',
        'Modelo 2D: solución exacta de Onsager, T_c ≈ 2.269 J/k_B'
      ],
      keyPrinciples: [
        'Interacciones de corto alcance entre spins vecinos',
        'Competencia entre energía (J) y entropía (T)',
        'Transición de fase solo en d ≥ 2 dimensiones',
        'Exponentes críticos universales según dimensionalidad'
      ],
      applications: [
        'Ferromagnetismo y transiciones magnéticas',
        'Transición líquido-gas cerca del punto crítico',
        'Aleaciones binarias y ordenamiento',
        'Redes neuronales y modelos de opinión'
      ]
    }
  }
];
