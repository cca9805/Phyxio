import React, { useState } from 'react';
import './AuthModals.css';

const TemporalCodeModal = ({ isOpen, onClose }) => {
  const [accessCode, setAccessCode] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
      
      const response = await fetch(`${API_URL}/temporal/activate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_code: accessCode.toUpperCase(),
          password,
          email
        })
      });

      const data = await response.json();

      if (data.success) {
        // Guardar token y recargar
        localStorage.setItem('phyxio_token', data.data.token);
        alert('¡Código activado exitosamente! Tu cuenta ha sido creada.');
        window.location.reload();
      } else {
        setError(data.message || 'Error al activar el código');
      }
    } catch (err) {
      setError('Error de conexión. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <h2>🎫 Activar Código Temporal</h2>
        <p className="modal-subtitle">
          Ingresa tu código de acceso temporal para crear tu cuenta
        </p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="accessCode">Código de Acceso</label>
            <input
              type="text"
              id="accessCode"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
              placeholder="Ej: ABC12345"
              maxLength="8"
              required
              style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '16px', fontWeight: '600' }}
            />
            <small style={{ display: 'block', marginTop: '4px', color: '#6b7280' }}>
              Código de 8 caracteres proporcionado
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="codePassword">Contraseña del Código</label>
            <input
              type="password"
              id="codePassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Tu Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
            />
            <small style={{ display: 'block', marginTop: '4px', color: '#6b7280' }}>
              Se usará para crear tu cuenta permanente
            </small>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary btn-block"
            disabled={loading}
          >
            {loading ? 'Activando...' : 'Activar Código y Crear Cuenta'}
          </button>
        </form>

        <div className="auth-footer">
          <p style={{ textAlign: 'center', marginTop: '16px', color: '#6b7280' }}>
            ¿No tienes un código? Contacta al administrador
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemporalCodeModal;
