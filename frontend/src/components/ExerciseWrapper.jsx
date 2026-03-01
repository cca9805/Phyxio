import React, { useState, useEffect } from 'react';
import RestrictedContent from './RestrictedContent';
import UsageCounter, { useIncrementUsage } from './UsageCounter';
import { useTierRestrictions } from '../hooks/useTierRestrictions';
import './ExerciseWrapper.css';

/**
 * Wrapper para ejercicios que aplica restricciones de tier
 */
const ExerciseWrapper = ({ children, exerciseData }) => {
  const { canAccess, limits } = useTierRestrictions();
  const { incrementUsage, checkLimit } = useIncrementUsage();
  const [completedToday, setCompletedToday] = useState(0);
  const [canDoExercise, setCanDoExercise] = useState(true);

  const hasAccess = canAccess('exercises');

  useEffect(() => {
    // Verificar límite al cargar
    const canDo = checkLimit('exercises');
    setCanDoExercise(canDo);

    // Escuchar actualizaciones de uso
    const handleUsageUpdate = (event) => {
      setCompletedToday(event.detail.exercises || 0);
      setCanDoExercise(checkLimit('exercises'));
    };

    window.addEventListener('usageUpdated', handleUsageUpdate);
    return () => window.removeEventListener('usageUpdated', handleUsageUpdate);
  }, []);

  const handleExerciseComplete = () => {
    if (canDoExercise) {
      incrementUsage('exercises');
    }
  };

  if (!hasAccess) {
    return (
      <RestrictedContent feature="exercises" showPreview={true}>
        <div className="exercise-container">
          {children}
        </div>
      </RestrictedContent>
    );
  }

  return (
    <div className="exercise-container">
      {limits.maxExercisesPerDay !== Infinity && (
        <UsageCounter type="exercises" />
      )}
      
      {!canDoExercise && (
        <div className="exercise-limit-reached">
          <p>⚠️ Has alcanzado el límite de ejercicios por hoy</p>
          <p className="limit-info">
            Vuelve mañana o actualiza tu plan para continuar practicando
          </p>
        </div>
      )}
      
      {/* Clonar children y pasar props de control */}
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { 
            onComplete: handleExerciseComplete,
            disabled: !canDoExercise
          });
        }
        return child;
      })}
    </div>
  );
};

export default ExerciseWrapper;
