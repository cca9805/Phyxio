import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/EmailVerificationPage.css';

const EmailVerificationPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    verifyEmail();
  }, [token]);

  const verifyEmail = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/auth/verify-email/${token}`);
      
      if (response.data.success) {
        setSuccess(true);
        setEmail(response.data.data.email);
        
        // Redireccionar al inicio después de 3 segundos
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        setError(response.data.message || 'Error al verificar el email');
      }
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('Error al verificar el email. El enlace puede haber expirado.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="email-verification-page">
        <div className="email-verification-container">
          <div className="verification-loading">
            <div className="spinner"></div>
            <p>Verificando tu correo electrónico...</p>
          </div>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="email-verification-page">
        <div className="email-verification-container">
          <div className="verification-success">
            <div className="success-icon">✓</div>
            <h2>¡Email Verificado!</h2>
            <p>Tu correo electrónico <strong>{email}</strong> ha sido verificado exitosamente.</p>
            <p className="verification-redirect">
              Redirigiendo al inicio...
            </p>
            <button 
              className="verification-button"
              onClick={() => navigate('/')}
            >
              Ir al Inicio Ahora
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="email-verification-page">
      <div className="email-verification-container">
        <div className="verification-error-state">
          <div className="error-icon">✕</div>
          <h2>Verificación Fallida</h2>
          <p>{error}</p>
          <div className="verification-actions">
            <button 
              className="verification-button"
              onClick={() => navigate('/')}
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
