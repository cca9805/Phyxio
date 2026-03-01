/**
 * Niveles Educativos - Configuración
 * Define la estructura de niveles educativos del sistema español
 */

export const EDUCATION_LEVELS = {
  ESO: {
    id: 'ESO',
    name: 'ESO',
    fullName: 'Educación Secundaria Obligatoria',
    description: 'Física básica para estudiantes de 12-16 años. Conceptos fundamentales con ejemplos cotidianos.',
    color: '#4CAF50', // Verde
    icon: '🎓',
    order: 1,
    ageRange: '12-16 años',
    topics: [
      'Magnitudes y unidades básicas',
      'Cinemática fundamental',
      'Fuerzas y equilibrio',
      'Energía básica',
      'Máquinas simples',
      'Electricidad doméstica',
      'Gráficas de movimiento',
      'Energías renovables'
    ]
  },
  
  BACHILLERATO: {
    id: 'BACHILLERATO',
    name: 'Bachillerato',
    fullName: 'Bachillerato (Preuniversitario)',
    description: 'Física completa nivel bachillerato. Preparación para universidad y selectividad.',
    color: '#2196F3', // Azul
    icon: '📚',
    order: 2,
    ageRange: '16-18 años',
    topics: [
      'Cinemática avanzada',
      'Dinámica completa',
      'Energía y trabajo',
      'Momento lineal',
      'Gravitación',
      'Oscilaciones',
      'Ondas',
      'Termodinámica',
      'Electromagnetismo',
      'Óptica física',
      'Incertidumbre y medidas',
      'Fluidos reales'
    ]
  },
  
  UNIVERSIDAD: {
    id: 'UNIVERSIDAD',
    name: 'Universidad',
    fullName: 'Universidad (Grado)',
    description: 'Física universitaria. Mecánica analítica, electromagnetismo avanzado, métodos matemáticos.',
    color: '#9C27B0', // Morado
    icon: '🎯',
    order: 3,
    ageRange: '18-22 años',
    topics: [
      'Mecánica analítica',
      'Lagrangianos y Hamiltonianos',
      'Ecuaciones de Maxwell',
      'Fluidos avanzados',
      'Termodinámica avanzada',
      'Física estadística',
      'Óptica avanzada',
      'Métodos numéricos',
      'Ondas electromagnéticas',
      'Transferencia de calor'
    ]
  }
};

/**
 * Obtener nivel educativo por ID
 */
export const getEducationLevel = (levelId) => {
  return EDUCATION_LEVELS[levelId];
};

/**
 * Obtener todos los niveles ordenados
 */
export const getAllEducationLevels = () => {
  return Object.values(EDUCATION_LEVELS).sort((a, b) => a.order - b.order);
};

/**
 * Obtener color por nivel
 */
export const getLevelColor = (levelId) => {
  return EDUCATION_LEVELS[levelId]?.color || '#757575';
};

/**
 * Obtener icono por nivel
 */
export const getLevelIcon = (levelId) => {
  return EDUCATION_LEVELS[levelId]?.icon || '📖';
};

/**
 * Validar si un nivel existe
 */
export const isValidLevel = (levelId) => {
  return levelId in EDUCATION_LEVELS;
};

/**
 * Mapeo de dificultad a nivel educativo sugerido
 * (Solo como referencia, no determina el nivel real)
 */
export const DIFFICULTY_TO_LEVEL_MAP = {
  'principiante': ['ESO'],
  'intermedio': ['ESO', 'BACHILLERATO'],
  'avanzado': ['BACHILLERATO', 'UNIVERSIDAD'],
  'experto': ['UNIVERSIDAD']
};

export default EDUCATION_LEVELS;
