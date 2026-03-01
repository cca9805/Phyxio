import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPasswordModal.css';

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/api/auth/forgot-password', {
        email
      });

      setSuccess(true);
      setEmail('');
      
      // Cerrar modal después de 5 segundos
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 5000);
    } catch (err) {
      if (err.response?.data?.errors) {
        setError(err.response.data.errors[0].msg);
      } else if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError('Error al procesar la solicitud. Intenta de nuevo.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setEmail('');
    setError('');
    setSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="forgot-password-overlay" onClick={handleClose}>
      <div className="forgot-password-modal" onClick={e => e.stopPropagation()}>
        <button className="forgot-password-close" onClick={handleClose}>×</button>
        
        <h2>Recuperar Contraseña</h2>
        
        {!success ? (
          <>
            <p className="forgot-password-description">
              Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="forgot-password-form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  disabled={loading}
                />
              </div>

              {error && (
                <div className="forgot-password-error">
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                className="forgot-password-submit"
                disabled={loading}
              >
                {loading ? 'Enviando...' : 'Enviar enlace de recuperación'}
              </button>
            </form>
          </>
        ) : (
          <div className="forgot-password-success">
            <div className="success-icon">✓</div>
            <h3>¡Correo enviado!</h3>
            <p>
              Si existe una cuenta con ese correo, recibirás un enlace para restablecer tu contraseña.
              Revisa tu bandeja de entrada y spam.
            </p>
            <p className="forgot-password-note">
              El enlace expirará en 1 hora.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
