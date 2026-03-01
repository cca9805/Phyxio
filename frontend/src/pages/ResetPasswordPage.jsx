import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/ResetPasswordPage.css';

const ResetPasswordPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [validating, setValidating] = useState(true);
  const [tokenValid, setTokenValid] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    validateToken();
  }, [token]);

  const validateToken = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/auth/validate-reset-token/${token}`);
      
      if (response.data.data.valid) {
        setTokenValid(true);
        setEmail(response.data.data.email);
      } else {
        setTokenValid(false);
        setError('El enlace de recuperación es inválido o ha expirado.');
      }
    } catch (err) {
      setTokenValid(false);
      setError('El enlace de recuperación es inválido o ha expirado.');
    } finally {
      setValidating(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validaciones
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    setLoading(true);

    try {
      await axios.post('http://localhost:3000/api/auth/reset-password', {
        token,
        password: password
      });

      setSuccess(true);
      
      // Redirigir al login después de 3 segundos
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (err) {
      if (err.response?.data?.errors) {
        setError(err.response.data.errors[0].msg);
      } else if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError('Error al restablecer la contraseña. Intenta de nuevo.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (validating) {
    return (
      <div className="reset-password-page">
        <div className="reset-password-container">
          <div className="reset-password-loading">
            <div className="spinner"></div>
            <p>Validando enlace de recuperación...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!tokenValid) {
    return (
      <div className="reset-password-page">
        <div className="reset-password-container">
          <div className="reset-password-error-state">
            <div className="error-icon">✕</div>
            <h2>Enlace Inválido</h2>
            <p>{error}</p>
            <p className="reset-password-note">
              Los enlaces de recuperación expiran después de 1 hora.
            </p>
            <button 
              className="reset-password-back-btn"
              onClick={() => navigate('/')}
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="reset-password-page">
        <div className="reset-password-container">
          <div className="reset-password-success">
            <div className="success-icon">✓</div>
            <h2>¡Contraseña Actualizada!</h2>
            <p>Tu contraseña ha sido restablecida exitosamente.</p>
            <p className="reset-password-redirect">
              Redirigiendo al inicio de sesión...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="reset-password-page">
      <div className="reset-password-container">
        <div className="reset-password-header">
          <h1>Restablecer Contraseña</h1>
          <p className="reset-password-email">Para: {email}</p>
        </div>

        <form onSubmit={handleSubmit} className="reset-password-form">
          <div className="reset-password-form-group">
            <label htmlFor="password">Nueva Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo 6 caracteres"
              required
              disabled={loading}
            />
          </div>

          <div className="reset-password-form-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Repite tu nueva contraseña"
              required
              disabled={loading}
            />
          </div>

          {error && (
            <div className="reset-password-error">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            className="reset-password-submit"
            disabled={loading}
          >
            {loading ? 'Actualizando...' : 'Restablecer Contraseña'}
          </button>
        </form>

        <div className="reset-password-footer">
          <button 
            className="reset-password-cancel"
            onClick={() => navigate('/')}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
