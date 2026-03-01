import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTierRestrictions } from '../hooks/useTierRestrictions';
import './RestrictedContent.css';

/**
 * Componente que muestra contenido restringido con mensaje de upgrade
 */
const RestrictedContent = ({ feature, children, showPreview = false }) => {
  const { canAccess, getRestrictionMessage, getRecommendedTier } = useTierRestrictions();
  const navigate = useNavigate();

  const hasAccess = canAccess(feature);

  if (hasAccess) {
    return <>{children}</>;
  }

  const message = getRestrictionMessage(feature);
  const recommendedTier = getRecommendedTier(feature);

  const tierNames = {
    demo: 'Demo',
    basic: 'Básico',
    premium: 'Premium',
    educator: 'Educador'
  };

  const handleUpgrade = () => {
    navigate('/subscription');
  };

  return (
    <div className="restricted-content">
      {showPreview && (
        <div className="content-preview">
          <div className="preview-blur">{children}</div>
        </div>
      )}
      
      <div className="restriction-overlay">
        <div className="restriction-card">
          <div className="restriction-icon">🔒</div>
          <h3>Contenido Restringido</h3>
          <p className="restriction-message">{message}</p>
          
          <div className="restriction-actions">
            <button className="btn-upgrade" onClick={handleUpgrade}>
              Actualizar a {tierNames[recommendedTier]}
            </button>
            <button className="btn-view-plans" onClick={handleUpgrade}>
              Ver Todos los Planes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestrictedContent;
