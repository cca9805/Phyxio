import React from 'react';
import './PasswordStrength.css';

const PasswordStrength = ({ password }) => {
  // Validar requisitos de contraseña
  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    noSpaces: !/\s/.test(password)
  };

  // Calcular fortaleza (0-6)
  const strength = Object.values(checks).filter(Boolean).length;
  
  // Determinar color y texto según fortaleza
  const getStrengthInfo = () => {
    if (strength === 0) return { text: 'Muy débil', color: '#dc3545', className: 'very-weak' };
    if (strength <= 2) return { text: 'Débil', color: '#dc3545', className: 'weak' };
    if (strength <= 4) return { text: 'Media', color: '#ffc107', className: 'medium' };
    if (strength === 5) return { text: 'Fuerte', color: '#28a745', className: 'strong' };
    return { text: 'Muy fuerte', color: '#28a745', className: 'very-strong' };
  };

  const strengthInfo = getStrengthInfo();
  const progressPercentage = (strength / 6) * 100;

  return (
    <div className="password-strength">
      {password && (
        <>
          <div className="strength-meter">
            <div className="strength-label">
              Fortaleza: <span className={`strength-text ${strengthInfo.className}`}>{strengthInfo.text}</span>
            </div>
            <div className="strength-bar">
              <div 
                className={`strength-fill ${strengthInfo.className}`}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          <div className="password-requirements">
            <div className={`requirement ${checks.length ? 'valid' : 'invalid'}`}>
              <span className="requirement-icon">{checks.length ? '✓' : '○'}</span>
              <span className="requirement-text">Mínimo 8 caracteres</span>
            </div>
            <div className={`requirement ${checks.uppercase ? 'valid' : 'invalid'}`}>
              <span className="requirement-icon">{checks.uppercase ? '✓' : '○'}</span>
              <span className="requirement-text">Una mayúscula (A-Z)</span>
            </div>
            <div className={`requirement ${checks.lowercase ? 'valid' : 'invalid'}`}>
              <span className="requirement-icon">{checks.lowercase ? '✓' : '○'}</span>
              <span className="requirement-text">Una minúscula (a-z)</span>
            </div>
            <div className={`requirement ${checks.number ? 'valid' : 'invalid'}`}>
              <span className="requirement-icon">{checks.number ? '✓' : '○'}</span>
              <span className="requirement-text">Un número (0-9)</span>
            </div>
            <div className={`requirement ${checks.symbol ? 'valid' : 'invalid'}`}>
              <span className="requirement-icon">{checks.symbol ? '✓' : '○'}</span>
              <span className="requirement-text">Un símbolo (!@#$%...)</span>
            </div>
            <div className={`requirement ${checks.noSpaces ? 'valid' : 'invalid'}`}>
              <span className="requirement-icon">{checks.noSpaces ? '✓' : '○'}</span>
              <span className="requirement-text">Sin espacios</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PasswordStrength;
