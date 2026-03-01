import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTierRestrictions } from '../hooks/useTierRestrictions';
import '../styles/UsagePage.css';

const UsagePage = () => {
  const { user, tier } = useAuth();
  const { limits: tierLimits } = useTierRestrictions();
  const [usage, setUsage] = useState({ calculators: 0, exercises: 0, theory: 0 });
  const [isLoading, setIsLoading] = useState(true);

  // Cargar uso desde el backend
  useEffect(() => {
    const fetchUsage = async () => {
      if (!user) {
        setIsLoading(false);
        return;
      }

      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/usage/today`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setUsage({
            calculators: data.data?.calculators || 0,
            exercises: data.data?.exercises || 0,
            theory: data.data?.theory || 0
          });
        }
      } catch (error) {
        console.error('Error al cargar uso:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsage();
  }, [user]);

  // Convertir límites del tier a formato esperado
  const limits = {
    calculators: tierLimits.maxCalculationsPerDay === Infinity ? -1 : tierLimits.maxCalculationsPerDay,
    exercises: tierLimits.maxExercisesPerDay === Infinity ? -1 : tierLimits.maxExercisesPerDay,
    theory: -1 // Teoría siempre ilimitada
  };

  const getTierDisplayName = (tierName) => {
    const tierNames = {
      guest: 'Invitado',
      demo: 'Demo',
      basic: 'Básico',
      premium: 'Premium',
      educator: 'Educador',
      admin: 'Administrador'
    };
    return tierNames[tierName] || tierName;
  };

  const getTierColor = (tierName) => {
    const colors = {
      guest: '#6c757d',
      demo: '#17a2b8',
      basic: '#28a745',
      premium: '#ffc107',
      educator: '#e83e8c',
      admin: '#dc3545'
    };
    return colors[tierName] || '#6c757d';
  };

  const getUsagePercentage = (used, limit) => {
    if (limit === -1) return 0; // Ilimitado
    if (limit === 0) return 100;
    return Math.min((used / limit) * 100, 100);
  };

  const getProgressColor = (percentage) => {
    if (percentage >= 90) return '#dc3545';
    if (percentage >= 70) return '#ffc107';
    return '#28a745';
  };

  if (!user) {
    return (
      <div className="usage-page">
        <div className="container">
          <div className="usage-card">
            <h1>Uso de Recursos</h1>
            <p>Debes iniciar sesión para ver tu uso de recursos.</p>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="usage-page">
        <div className="container">
          <div className="usage-card">
            <div className="loading">
              <i className="bi bi-hourglass-split"></i>
              <p>Cargando información de uso...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="usage-page">
      <div className="container">
        <div className="usage-card">
          <div className="usage-header">
            <h1>Uso de Recursos</h1>
            <div className="tier-badge" style={{ backgroundColor: getTierColor(tier) }}>
              {getTierDisplayName(tier)}
            </div>
          </div>

          <div className="usage-content">
            {/* Calculadoras */}
            <div className="usage-section">
              <div className="section-header">
                <div className="section-title">
                  <i className="bi bi-calculator"></i>
                  <h2>Calculadoras</h2>
                </div>
                <div className="usage-count">
                  {limits.calculators === -1 ? (
                    <span className="unlimited">Ilimitado</span>
                  ) : (
                    <span>
                      {usage.calculators} / {limits.calculators}
                    </span>
                  )}
                </div>
              </div>
              {limits.calculators !== -1 && (
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${getUsagePercentage(usage.calculators, limits.calculators)}%`,
                      backgroundColor: getProgressColor(getUsagePercentage(usage.calculators, limits.calculators))
                    }}
                  />
                </div>
              )}
              <p className="usage-description">
                Número de cálculos realizados hoy
              </p>
            </div>

            {/* Ejercicios */}
            <div className="usage-section">
              <div className="section-header">
                <div className="section-title">
                  <i className="bi bi-journal-text"></i>
                  <h2>Ejercicios</h2>
                </div>
                <div className="usage-count">
                  {limits.exercises === -1 ? (
                    <span className="unlimited">Ilimitado</span>
                  ) : (
                    <span>
                      {usage.exercises} / {limits.exercises}
                    </span>
                  )}
                </div>
              </div>
              {limits.exercises !== -1 && (
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${getUsagePercentage(usage.exercises, limits.exercises)}%`,
                      backgroundColor: getProgressColor(getUsagePercentage(usage.exercises, limits.exercises))
                    }}
                  />
                </div>
              )}
              <p className="usage-description">
                Soluciones de ejercicios vistas hoy
              </p>
            </div>

            {/* Teoría */}
            <div className="usage-section">
              <div className="section-header">
                <div className="section-title">
                  <i className="bi bi-book"></i>
                  <h2>Teoría</h2>
                </div>
                <div className="usage-count">
                  {limits.theory === -1 ? (
                    <span className="unlimited">Ilimitado</span>
                  ) : (
                    <span>
                      {usage.theory} / {limits.theory}
                    </span>
                  )}
                </div>
              </div>
              {limits.theory !== -1 && (
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${getUsagePercentage(usage.theory, limits.theory)}%`,
                      backgroundColor: getProgressColor(getUsagePercentage(usage.theory, limits.theory))
                    }}
                  />
                </div>
              )}
              <p className="usage-description">
                Páginas de teoría consultadas hoy
              </p>
            </div>

            {/* Información adicional */}
            <div className="usage-info">
              <div className="info-card">
                <i className="bi bi-info-circle"></i>
                <div>
                  <h3>Límites diarios</h3>
                  <p>Los límites de uso se reinician cada día a las 00:00 UTC.</p>
                </div>
              </div>
              
              {tier === 'guest' && (
                <div className="info-card upgrade-prompt">
                  <i className="bi bi-star"></i>
                  <div>
                    <h3>Aumenta tus límites</h3>
                    <p>Actualiza tu plan para obtener más recursos diarios o acceso ilimitado.</p>
                    <a href="/subscription" className="btn btn-primary btn-small">
                      Ver Planes
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsagePage;
