import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import './AuthModals.css';

const LoginModal = ({ isOpen, onClose, onSwitchToRegister, onSwitchToTemporal, onSwitchToForgot }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      onClose();
    } catch (err) {
      setError(err.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <h2>Iniciar Sesión</h2>
        <p className="modal-subtitle">Accede a todas las funcionalidades de Phyxio</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="tu@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>

          <div className="forgot-password-link">
            <button 
              type="button"
              className="link-button"
              onClick={() => {
                onClose();
                onSwitchToForgot();
              }}
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary btn-block"
            disabled={loading}
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="auth-divider">
          <span>o continúa con</span>
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
            ¿No tienes cuenta?{' '}
            <button 
              className="link-button" 
              onClick={onSwitchToRegister}
            >
              Regístrate gratis
            </button>
          </p>
          <button className="link-button">¿Olvidaste tu contraseña?</button>
          
          <div className="temporal-code-link">
            <button 
              className="link-button temporal-code-button" 
              onClick={onSwitchToTemporal}
            >
              🎫 ¿Tienes un código temporal?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
