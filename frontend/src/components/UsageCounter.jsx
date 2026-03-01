import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTierRestrictions } from '../hooks/useTierRestrictions';
import './UsageCounter.css';

/**
 * Componente que muestra el contador de uso diario
 */
const UsageCounter = ({ type = 'calculations' }) => {
  const { limits, tier } = useTierRestrictions();
  const navigate = useNavigate();
  const [usage, setUsage] = useState({ calculations: 0, exercises: 0 });

  // Cargar uso desde localStorage
  useEffect(() => {
    const loadUsage = () => {
      const today = new Date().toDateString();
      const storedData = localStorage.getItem('dailyUsage');
      
      if (storedData) {
        const parsed = JSON.parse(storedData);
        if (parsed.date === today) {
          setUsage(parsed.usage);
        } else {
          // Nuevo día, resetear contadores
          const newUsage = { calculations: 0, exercises: 0 };
          localStorage.setItem('dailyUsage', JSON.stringify({
            date: today,
            usage: newUsage
          }));
          setUsage(newUsage);
        }
      }
    };

    loadUsage();

    // Escuchar eventos de actualización de uso
    const handleUsageUpdate = (event) => {
      setUsage(event.detail);
    };

    window.addEventListener('usageUpdated', handleUsageUpdate);
    return () => window.removeEventListener('usageUpdated', handleUsageUpdate);
  }, []);

  const maxLimit = type === 'calculations' 
    ? limits.maxCalculationsPerDay 
    : limits.maxExercisesPerDay;

  const currentUsage = type === 'calculations' 
    ? usage.calculations 
    : usage.exercises;

  // Si es ilimitado, no mostrar contador
  if (maxLimit === Infinity) {
    return null;
  }

  const remaining = Math.max(0, maxLimit - currentUsage);
  const percentage = (currentUsage / maxLimit) * 100;
  const isLow = remaining <= 5 && remaining > 0;
  const isExhausted = remaining === 0;

  const handleUpgrade = () => {
    navigate('/subscription');
  };

  const label = type === 'calculations' ? 'Cálculos' : 'Soluciones';
  const icon = type === 'calculations' ? '🧮' : '📝';

  return (
    <div className={`usage-counter ${isLow ? 'low' : ''} ${isExhausted ? 'exhausted' : ''}`}>
      <div className="usage-header">
        <span className="usage-label">
          {icon} {label} restantes hoy
        </span>
        <span className="usage-count">
          {remaining} / {maxLimit}
        </span>
      </div>
      
      <div className="usage-bar">
        <div 
          className="usage-progress" 
          style={{ width: `${percentage}%` }}
        />
      </div>

      {isLow && !isExhausted && (
        <div className="usage-warning">
          ⚠️ Quedan pocos {label.toLowerCase()} disponibles
        </div>
      )}

      {isExhausted && (
        <div className="usage-exhausted">
          <p>❌ Límite diario alcanzado</p>
          <p style={{ fontSize: '0.9em', marginTop: '5px' }}>
            Puedes seguir viendo la teoría. El contador se reinicia mañana.
          </p>
          <button className="btn-upgrade-small" onClick={handleUpgrade}>
            Actualizar Plan
          </button>
        </div>
      )}
    </div>
  );
};

/**
 * Hook para incrementar el contador de uso
 */
export const useIncrementUsage = () => {
  const incrementUsage = async (type) => {
    const today = new Date().toDateString();
    const storedData = localStorage.getItem('dailyUsage');
    
    let data = { date: today, usage: { calculations: 0, exercises: 0 } };
    
    if (storedData) {
      const parsed = JSON.parse(storedData);
      if (parsed.date === today) {
        data = parsed;
      }
    }

    if (type === 'calculations') {
      data.usage.calculations += 1;
    } else if (type === 'exercises') {
      data.usage.exercises += 1;
    }

    localStorage.setItem('dailyUsage', JSON.stringify(data));
    
    // Disparar evento para actualizar otros componentes
    window.dispatchEvent(new CustomEvent('usageUpdated', { detail: data.usage }));
    
    // Sincronizar con el backend en segundo plano
    try {
      const usageApi = (await import('../services/usageApi.js')).default;
      const actionType = type === 'calculations' ? 'calculation' : 'exercise';
      await usageApi.trackUsage(actionType);
    } catch (error) {
      console.error('Error sincronizando con backend:', error);
      // No bloquear la UI si falla la sincronización
    }
  };

  const checkLimit = async (type) => {
    const today = new Date().toDateString();
    const storedData = localStorage.getItem('dailyUsage');
    
    if (!storedData) return true;
    
    const parsed = JSON.parse(storedData);
    if (parsed.date !== today) return true;

    // Verificar con el backend si es posible
    try {
      const usageApi = (await import('../services/usageApi.js')).default;
      const actionType = type === 'calculations' ? 'calculation' : 'exercise';
      const validation = await usageApi.validateAction(actionType);
      return validation.allowed;
    } catch (error) {
      console.error('Error verificando límite:', error);
      // Si falla, permitir (fallback a solo frontend)
      return true;
    }
  };

  const getCurrentUsage = () => {
    const today = new Date().toDateString();
    const storedData = localStorage.getItem('dailyUsage');
    
    if (!storedData) {
      return { calculations: 0, exercises: 0 };
    }
    
    const parsed = JSON.parse(storedData);
    if (parsed.date !== today) {
      return { calculations: 0, exercises: 0 };
    }
    
    return parsed.usage;
  };

  return { incrementUsage, checkLimit, getCurrentUsage };
};

export default UsageCounter;
