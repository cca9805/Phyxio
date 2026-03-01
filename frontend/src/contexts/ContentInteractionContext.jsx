import React, { createContext, useContext, useState, useCallback, useEffect, useMemo } from 'react';
import { useIncrementUsage } from '../components/UsageCounter';
import { useTierRestrictions } from '../hooks/useTierRestrictions';

const ContentInteractionContext = createContext();

export const useContentInteraction = () => {
  const context = useContext(ContentInteractionContext);
  if (!context) {
    throw new Error('useContentInteraction debe usarse dentro de ContentInteractionProvider');
  }
  return context;
};

export const ContentInteractionProvider = ({ children }) => {
  const { incrementUsage, checkLimit, getCurrentUsage } = useIncrementUsage();
  const { canAccess, limits, getRestrictionMessage } = useTierRestrictions();
  const [usage, setUsage] = useState({ calculations: 0, exercises: 0 });

  // Actualizar uso cuando cambie
  useEffect(() => {
    const handleUsageUpdate = (event) => {
      setUsage(event.detail);
    };

    // Cargar uso inicial
    const currentUsage = getCurrentUsage();
    setUsage(currentUsage);

    window.addEventListener('usageUpdated', handleUsageUpdate);
    return () => window.removeEventListener('usageUpdated', handleUsageUpdate);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Verifica si quedan cálculos disponibles
   */
  const hasCalculationsLeft = useMemo(() => {
    if (!canAccess('calculators')) return false;
    if (limits.maxCalculationsPerDay === Infinity) return true;
    return usage.calculations < limits.maxCalculationsPerDay;
  }, [canAccess, limits.maxCalculationsPerDay, usage.calculations]);

  /**
   * Verifica si quedan ejercicios disponibles
   */
  const hasExercisesLeft = useMemo(() => {
    if (!canAccess('exercises')) return false;
    if (limits.maxExercisesPerDay === Infinity) return true;
    return usage.exercises < limits.maxExercisesPerDay;
  }, [canAccess, limits.maxExercisesPerDay, usage.exercises]);

  /**
   * Registra el uso de un cálculo
   */
  const trackCalculation = useCallback(async () => {
    if (!canAccess('calculators')) {
      alert('Inicia sesión para usar las calculadoras.');
      return false;
    }

    const limitOk = await checkLimit('calculations');
    if (!limitOk) {
      alert('Has alcanzado el límite diario de cálculos. Actualiza tu plan para continuar.');
      return false;
    }

    // Registrar el uso
    await incrementUsage('calculations');
    return true;
  }, [canAccess, checkLimit, incrementUsage]);

  /**
   * Verifica si se puede ver la solución de un ejercicio
   */
  const canViewSolution = useCallback(async () => {
    if (!canAccess('exercises')) {
      alert('Inicia sesión para ver las soluciones de los ejercicios.');
      return false;
    }

    const limitOk = await checkLimit('exercises');
    if (!limitOk) {
      alert('Has alcanzado el límite diario de soluciones de ejercicios. Actualiza tu plan para continuar.');
      return false;
    }

    // Registrar el uso
    await incrementUsage('exercises');
    return true;
  }, [canAccess, checkLimit, incrementUsage]);

  /**
   * Verifica si se puede acceder a contenido avanzado
   */
  const canAccessAdvanced = useCallback(() => {
    return canAccess('advanced');
  }, [canAccess]);

  const value = {
    hasCalculationsLeft,
    hasExercisesLeft,
    trackCalculation,
    canViewSolution,
    canAccessAdvanced,
    limits,
    canAccess,
    getRestrictionMessage
  };

  return (
    <ContentInteractionContext.Provider value={value}>
      {children}
    </ContentInteractionContext.Provider>
  );
};
