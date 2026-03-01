import { useAuth } from '../contexts/AuthContext';

/**
 * Hook para gestionar las restricciones según el tier del usuario
 */
export const useTierRestrictions = () => {
  const { tier } = useAuth();

  // Definir límites por tier
  const tierLimits = {
    guest: {
      canAccessCalculators: false,
      canAccessExercises: false,
      canAccessTheory: true,
      maxCalculationsPerDay: 0,
      maxExercisesPerDay: 0,
      canAccessAdvancedContent: false,
      canDownloadContent: false,
      showAds: true
    },
    demo: {
      canAccessCalculators: true,
      canAccessExercises: true,
      canAccessTheory: true,
      maxCalculationsPerDay: 10,
      maxExercisesPerDay: 5,
      canAccessAdvancedContent: false,
      canDownloadContent: false,
      showAds: true
    },
    basic: {
      canAccessCalculators: true,
      canAccessExercises: true,
      canAccessTheory: true,
      maxCalculationsPerDay: 50,
      maxExercisesPerDay: 20,
      canAccessAdvancedContent: false,
      canDownloadContent: true,
      showAds: false
    },
    premium: {
      canAccessCalculators: true,
      canAccessExercises: true,
      canAccessTheory: true,
      maxCalculationsPerDay: Infinity,
      maxExercisesPerDay: Infinity,
      canAccessAdvancedContent: true,
      canDownloadContent: true,
      showAds: false
    },
    educator: {
      canAccessCalculators: true,
      canAccessExercises: true,
      canAccessTheory: true,
      maxCalculationsPerDay: Infinity,
      maxExercisesPerDay: Infinity,
      canAccessAdvancedContent: true,
      canDownloadContent: true,
      showAds: false
    },
    admin: {
      canAccessCalculators: true,
      canAccessExercises: true,
      canAccessTheory: true,
      maxCalculationsPerDay: Infinity,
      maxExercisesPerDay: Infinity,
      canAccessAdvancedContent: true,
      canDownloadContent: true,
      showAds: false
    }
  };

  const currentLimits = tierLimits[tier] || tierLimits.guest;

  /**
   * Verifica si el usuario puede acceder a una funcionalidad
   */
  const canAccess = (feature) => {
    switch (feature) {
      case 'calculators':
        return currentLimits.canAccessCalculators;
      case 'exercises':
        return currentLimits.canAccessExercises;
      case 'theory':
        return currentLimits.canAccessTheory;
      case 'advanced':
        return currentLimits.canAccessAdvancedContent;
      case 'download':
        return currentLimits.canDownloadContent;
      default:
        return false;
    }
  };

  /**
   * Obtiene el mensaje de restricción para una funcionalidad
   */
  const getRestrictionMessage = (feature) => {
    const messages = {
      calculators: {
        guest: 'Inicia sesión para acceder a las calculadoras',
        demo: 'Límite de cálculos alcanzado. Actualiza tu plan para continuar'
      },
      exercises: {
        guest: 'Inicia sesión para acceder a los ejercicios',
        demo: 'Límite de ejercicios alcanzado. Actualiza tu plan para continuar'
      },
      advanced: {
        guest: 'Contenido premium. Inicia sesión y actualiza tu plan',
        demo: 'Contenido premium. Actualiza tu plan para acceder',
        basic: 'Contenido premium. Actualiza a Premium o Educador'
      },
      download: {
        guest: 'Inicia sesión y actualiza tu plan para descargar contenido',
        demo: 'Actualiza tu plan para descargar contenido'
      }
    };

    return messages[feature]?.[tier] || 'Actualiza tu plan para acceder a esta funcionalidad';
  };

  /**
   * Obtiene el nombre del tier recomendado para una funcionalidad
   */
  const getRecommendedTier = (feature) => {
    switch (feature) {
      case 'calculators':
      case 'exercises':
        return tier === 'guest' ? 'demo' : 'basic';
      case 'advanced':
        return 'premium';
      case 'download':
        return 'basic';
      default:
        return 'basic';
    }
  };

  return {
    tier,
    limits: currentLimits,
    canAccess,
    getRestrictionMessage,
    getRecommendedTier
  };
};
