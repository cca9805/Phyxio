import React from 'react';
import { useTierRestrictions } from '../hooks/useTierRestrictions';
import { ContentInteractionProvider } from '../contexts/ContentInteractionContext';
import UsageCounter from './UsageCounter';
import './ContentAccessControl.css';

/**
 * Componente que controla el acceso al contenido según el tier
 * Muestra contadores de uso si aplica
 */
const ContentAccessControl = ({ children, hasCalculators = false, hasExercises = false }) => {
  const { limits, tier } = useTierRestrictions();

  // Determinar si debe mostrar contadores
  const showCalculatorCounter = hasCalculators && limits.maxCalculationsPerDay !== Infinity;
  const showExerciseCounter = hasExercises && limits.maxExercisesPerDay !== Infinity;

  return (
    <ContentInteractionProvider>
      <div className="content-access-control">
        {/* Mostrar contadores si aplica */}
        {(showCalculatorCounter || showExerciseCounter) && (
          <div className="usage-counters-container">
            {showCalculatorCounter && <UsageCounter type="calculations" />}
            {showExerciseCounter && <UsageCounter type="exercises" />}
          </div>
        )}

        {/* Renderizar el contenido */}
        {children}
      </div>
    </ContentInteractionProvider>
  );
};

export default ContentAccessControl;
