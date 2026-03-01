import React, { useState } from 'react';
import { useAuth, SUBSCRIPTION_TIERS } from '../../contexts/AuthContext';
import PasswordStrength from './PasswordStrength';
import './AuthModals.css';

const RegisterModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validaciones
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Validar requisitos de contraseña
    const passwordChecks = {
      length: formData.password.length >= 8,
      uppercase: /[A-Z]/.test(formData.password),
      lowercase: /[a-z]/.test(formData.password),
      number: /[0-9]/.test(formData.password),
      symbol: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password),
      noSpaces: !/\s/.test(formData.password)
    };

    const failedChecks = [];
    if (!passwordChecks.length) failedChecks.push('al menos 8 caracteres');
    if (!passwordChecks.uppercase) failedChecks.push('una mayúscula');
    if (!passwordChecks.lowercase) failedChecks.push('una minúscula');
    if (!passwordChecks.number) failedChecks.push('un número');
    if (!passwordChecks.symbol) failedChecks.push('un símbolo');
    if (!passwordChecks.noSpaces) failedChecks.push('no debe contener espacios');

    if (failedChecks.length > 0) {
      setError(`La contraseña debe tener: ${failedChecks.join(', ')}`);
      return;
    }

    if (!acceptTerms) {
      setError('Debes aceptar los términos y condiciones');
      return;
    }

    setLoading(true);

    try {
      await register(formData.email, formData.password, formData.displayName);
      onClose();
    } catch (err) {
      setError(err.message || 'Error al registrarse');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <h2>Crear Cuenta</h2>
        <p className="modal-subtitle">Obtén 1 hora de acceso gratuito al registrarte</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="displayName">Nombre</label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Mínimo 8 caracteres"
            />
            <PasswordStrength password={formData.password} />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Repite tu contraseña"
            />
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
              />
              <span>
                Acepto los <a href="/terminos" target="_blank">términos y condiciones</a> y la{' '}
                <a href="/privacidad" target="_blank">política de privacidad</a>
              </span>
            </label>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary btn-block"
            disabled={loading}
          >
            {loading ? 'Creando cuenta...' : 'Crear Cuenta Gratis'}
          </button>
        </form>

        <div className="demo-info">
          <p>⏱️ 1 hora de acceso completo inmediato</p>
          <p>📧 Verifica tu email para continuar</p>
          <p>💳 Sin tarjeta de crédito requerida</p>
        </div>

        <div className="auth-divider">
          <span>o regístrate con</span>
        </div>

        <div className="social-login">
          <button className="btn btn-social btn-google">
            <span>🔍</span> Google
          </button>
          <button className="btn btn-social btn-facebook">
            <span>f</span> Facebook
          </button>
        </div>

        <div className="auth-footer">
          <p>
            ¿Ya tienes cuenta?{' '}
            <button 
              className="link-button" 
              onClick={onSwitchToLogin}
            >
              Inicia sesión
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
