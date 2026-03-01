import React from 'react';
import { useAuth, SUBSCRIPTION_TIERS } from '../../contexts/AuthContext';
import './UpgradePrompt.css';

const MESSAGES = {
  login_required: {
    title: '🔐 Inicia Sesión',
    message: 'Necesitas una cuenta para usar las calculadoras',
    cta: 'Crear Cuenta Gratis',
    secondary: 'Ya tengo cuenta'
  },
  tier_upgrade_required: {
    title: '⭐ Actualiza tu Plan',
    message: 'Esta función requiere una suscripción de pago',
    cta: 'Ver Planes',
    secondary: 'Más tarde'
  },
  daily_limit_reached: {
    title: '⏰ Límite Diario Alcanzado',
    message: 'Has usado todos tus cálculos de hoy. Actualiza para acceso ilimitado.',
    cta: 'Actualizar a Premium',
    secondary: 'Volver mañana'
  },
  exercise_limit_reached: {
    title: '📚 Límite de Ejercicios',
    message: 'Has visto todos los ejercicios disponibles en tu plan',
    cta: 'Ver Más Ejercicios',
    secondary: 'Cerrar'
  },
  demo_expired: {
    title: '⏱️ Prueba Expirada',
    message: 'Tu periodo de prueba ha terminado. Suscríbete para continuar.',
    cta: 'Ver Planes',
    secondary: 'Continuar como invitado'
  }
};

const UpgradePrompt = ({ reason, onClose, onUpgrade, onLogin }) => {
  const { user, tier, getRemainingCalculators, getDaysUntilExpiration } = useAuth();
  
  const message = MESSAGES[reason] || MESSAGES.tier_upgrade_required;
  const remaining = getRemainingCalculators();
  const daysLeft = getDaysUntilExpiration();

  const handlePrimaryAction = () => {
    if (reason === 'login_required') {
      onLogin?.();
    } else {
      onUpgrade?.();
    }
  };

  return (
    <div className="upgrade-prompt-overlay" onClick={onClose}>
      <div className="upgrade-prompt" onClick={(e) => e.stopPropagation()}>
        <button className="prompt-close" onClick={onClose}>&times;</button>
        
        <div className="prompt-icon">{message.title.split(' ')[0]}</div>
        <h3>{message.title.substring(2)}</h3>
        <p className="prompt-message">{message.message}</p>

        {/* Información adicional según el contexto */}
        {user && tier === SUBSCRIPTION_TIERS.DEMO && daysLeft !== null && (
          <div className="info-box demo-info">
            <p>⏱️ Te quedan <strong>{daysLeft} días</strong> de prueba</p>
          </div>
        )}

        {user && remaining !== Infinity && remaining > 0 && (
          <div className="info-box usage-info">
            <p>📊 Cálculos restantes hoy: <strong>{remaining}</strong></p>
          </div>
        )}

        {/* Comparación de planes */}
        {reason !== 'login_required' && (
          <div className="quick-comparison">
            <div className="comparison-item">
              <div className="comparison-label">Tu plan actual</div>
              <div className="comparison-value current">{tier || 'Invitado'}</div>
            </div>
            <div className="comparison-arrow">→</div>
            <div className="comparison-item">
              <div className="comparison-label">Recomendado</div>
              <div className="comparison-value recommended">Premium</div>
            </div>
          </div>
        )}

        <div className="prompt-actions">
          <button 
            className="btn btn-primary btn-block"
            onClick={handlePrimaryAction}
          >
            {message.cta}
          </button>
          <button 
            className="btn btn-secondary btn-block"
            onClick={onClose}
          >
            {message.secondary}
          </button>
        </div>

        {reason === 'daily_limit_reached' && (
          <p className="prompt-footer">
            💡 El límite se reinicia a las 00:00
          </p>
        )}
      </div>
    </div>
  );
};

export default UpgradePrompt;
