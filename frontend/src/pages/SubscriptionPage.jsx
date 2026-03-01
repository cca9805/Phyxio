import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import SubscriptionPlans from '../components/auth/SubscriptionPlans';
import '../styles/SubscriptionPage.css';

const SubscriptionPage = () => {
  const { user, tier, getDaysUntilExpiration } = useAuth();
  const [showPlans, setShowPlans] = useState(false);
  const daysLeft = getDaysUntilExpiration();

  const handleSelectPlan = (planId) => {
    console.log('Plan seleccionado:', planId);
    // Aquí iría la lógica de pago/upgrade
    setShowPlans(false);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No definida';
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
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

  if (!user) {
    return (
      <div className="subscription-page">
        <div className="container">
          <div className="subscription-card">
            <h1>Suscripción</h1>
            <p>Debes iniciar sesión para ver tu información de suscripción.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="subscription-page">
      <div className="container">
        <div className="subscription-card">
          <h1>Mi Suscripción</h1>
          
          {/* Información actual */}
          <div className="current-subscription">
            <div className="subscription-header">
              <div className="tier-badge" style={{ backgroundColor: getTierColor(tier) }}>
                {getTierDisplayName(tier)}
              </div>
              {daysLeft !== null && (
                <div className={`days-left ${daysLeft <= 3 ? 'warning' : ''}`}>
                  {daysLeft > 0 ? `${daysLeft} días restantes` : 'Expirado'}
                </div>
              )}
            </div>
            
            <div className="subscription-details">
              <div className="detail-row">
                <span className="label">Plan actual:</span>
                <span className="value">{getTierDisplayName(tier)}</span>
              </div>
              
              {user.subscription_start && (
                <div className="detail-row">
                  <span className="label">Inicio:</span>
                  <span className="value">{formatDate(user.subscription_start)}</span>
                </div>
              )}
              
              {user.subscription_end && (
                <div className="detail-row">
                  <span className="label">Vencimiento:</span>
                  <span className="value">{formatDate(user.subscription_end)}</span>
                </div>
              )}
              
              <div className="detail-row">
                <span className="label">Estado:</span>
                <span className={`value status ${user.subscription_status || 'active'}`}>
                  {user.subscription_status === 'active' ? 'Activa' : 
                   user.subscription_status === 'expired' ? 'Expirada' : 
                   user.subscription_status === 'cancelled' ? 'Cancelada' : 'Activa'}
                </span>
              </div>
            </div>
          </div>

          {/* Acciones */}
          <div className="subscription-actions">
            {tier === 'guest' && (
              <div className="upgrade-prompt">
                <h3>🚀 Desbloquea todo el contenido</h3>
                <p>Accede a calculadoras avanzadas, ejercicios ilimitados y más funciones.</p>
                <button 
                  className="btn btn-primary btn-large"
                  onClick={() => setShowPlans(true)}
                >
                  Ver Planes
                </button>
              </div>
            )}
            
            {tier === 'demo' && (
              <div className="upgrade-prompt">
                <h3>⏰ Tu periodo de prueba está activo</h3>
                <p>Aprovecha al máximo tu tiempo de demo y considera actualizar para acceso completo.</p>
                <button 
                  className="btn btn-primary btn-large"
                  onClick={() => setShowPlans(true)}
                >
                  Actualizar Plan
                </button>
              </div>
            )}
            
            {['basic', 'premium', 'educator'].includes(tier) && (
              <div className="manage-subscription">
                <h3>Gestionar Suscripción</h3>
                <div className="action-buttons">
                  <button 
                    className="btn btn-outline"
                    onClick={() => setShowPlans(true)}
                  >
                    Cambiar Plan
                  </button>
                  <button className="btn btn-danger-outline">
                    Cancelar Suscripción
                  </button>
                </div>
              </div>
            )}
            
            {tier === 'admin' && (
              <div className="admin-info">
                <h3>👑 Cuenta de Administrador</h3>
                <p>Tienes acceso completo a todas las funciones del sistema.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Modal de planes */}
      {showPlans && (
        <div className="modal-overlay">
          <div className="modal-content">
            <SubscriptionPlans 
              onClose={() => setShowPlans(false)}
              onSelectPlan={handleSelectPlan}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionPage;
