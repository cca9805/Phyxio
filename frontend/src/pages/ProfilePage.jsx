import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || ''
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState({ type: '', text: '' });
  const [passwordMessage, setPasswordMessage] = useState({ type: '', text: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordLoading, setIsPasswordLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Aquí iría la llamada al backend para actualizar el perfil
      // await updateProfile(formData);
      
      setMessage({ 
        type: 'success', 
        text: 'Perfil actualizado correctamente' 
      });
      setIsEditing(false);
      
      // Simular actualización (remover cuando se implemente el backend)
      setTimeout(() => {
        setMessage({ type: '', text: '' });
      }, 3000);
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error.message || 'Error al actualizar el perfil' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || ''
    });
    setIsEditing(false);
    setMessage({ type: '', text: '' });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setIsPasswordLoading(true);
    setPasswordMessage({ type: '', text: '' });

    // Validaciones
    if (passwordData.newPassword.length < 6) {
      setPasswordMessage({ 
        type: 'error', 
        text: 'La nueva contraseña debe tener al menos 6 caracteres' 
      });
      setIsPasswordLoading(false);
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordMessage({ 
        type: 'error', 
        text: 'Las contraseñas no coinciden' 
      });
      setIsPasswordLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al cambiar la contraseña');
      }

      setPasswordMessage({ 
        type: 'success', 
        text: 'Contraseña actualizada correctamente' 
      });
      
      // Limpiar formulario y cerrar modal después de 2 segundos
      setTimeout(() => {
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
        setShowPasswordModal(false);
        setPasswordMessage({ type: '', text: '' });
      }, 2000);
    } catch (error) {
      setPasswordMessage({ 
        type: 'error', 
        text: error.message || 'Error al cambiar la contraseña' 
      });
    } finally {
      setIsPasswordLoading(false);
    }
  };

  const handleClosePasswordModal = () => {
    setShowPasswordModal(false);
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    setPasswordMessage({ type: '', text: '' });
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No disponible';
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
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
      <div className="profile-page">
        <div className="container">
          <div className="profile-card">
            <h1>Mi Perfil</h1>
            <p>Debes iniciar sesión para ver tu perfil.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">
              <i className="bi bi-person-circle"></i>
            </div>
            <div className="profile-title">
              <h1>Mi Perfil</h1>
              <div className="tier-badge" style={{ backgroundColor: getTierColor(user.tier) }}>
                {getTierDisplayName(user.tier)}
              </div>
            </div>
          </div>

          {message.text && (
            <div className={`message ${message.type}`}>
              <i className={`bi ${message.type === 'success' ? 'bi-check-circle' : 'bi-exclamation-circle'}`}></i>
              {message.text}
            </div>
          )}

          <div className="profile-content">
            {/* Información personal */}
            <div className="profile-section">
              <div className="section-header">
                <h2>Información Personal</h2>
                {!isEditing && (
                  <button 
                    className="btn btn-outline btn-small"
                    onClick={() => setIsEditing(true)}
                  >
                    <i className="bi bi-pencil"></i> Editar
                  </button>
                )}
              </div>

              {isEditing ? (
                <form onSubmit={handleSubmit} className="profile-form">
                  <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      disabled
                    />
                    <small className="form-hint">El correo no se puede modificar</small>
                  </div>

                  <div className="form-actions">
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Guardando...' : 'Guardar Cambios'}
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-outline"
                      onClick={handleCancel}
                      disabled={isLoading}
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              ) : (
                <div className="profile-info">
                  <div className="info-row">
                    <span className="label">Nombre:</span>
                    <span className="value">{user.name || 'No especificado'}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Correo:</span>
                    <span className="value">{user.email}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Estado de verificación:</span>
                    <span className={`value status ${user.email_verified ? 'verified' : 'unverified'}`}>
                      {user.email_verified ? (
                        <>
                          <i className="bi bi-check-circle-fill"></i> Verificado
                        </>
                      ) : (
                        <>
                          <i className="bi bi-exclamation-circle-fill"></i> No verificado
                        </>
                      )}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Información de cuenta */}
            <div className="profile-section">
              <h2>Información de Cuenta</h2>
              <div className="profile-info">
                <div className="info-row">
                  <span className="label">Tipo de cuenta:</span>
                  <span className="value">
                    <span className="tier-badge-small" style={{ backgroundColor: getTierColor(user.tier) }}>
                      {getTierDisplayName(user.tier)}
                    </span>
                  </span>
                </div>
                <div className="info-row">
                  <span className="label">Miembro desde:</span>
                  <span className="value">{formatDate(user.created_at)}</span>
                </div>
                {user.subscription_end && (
                  <div className="info-row">
                    <span className="label">Suscripción válida hasta:</span>
                    <span className="value">{formatDate(user.subscription_end)}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Seguridad */}
            <div className="profile-section">
              <h2>Seguridad</h2>
              <div className="security-actions">
                <button 
                  className="btn btn-outline"
                  onClick={() => setShowPasswordModal(true)}
                >
                  <i className="bi bi-key"></i> Cambiar Contraseña
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de cambio de contraseña */}
      {showPasswordModal && (
        <div className="modal-overlay" onClick={handleClosePasswordModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Cambiar Contraseña</h2>
              <button 
                className="modal-close"
                onClick={handleClosePasswordModal}
                aria-label="Cerrar"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            {passwordMessage.text && (
              <div className={`message ${passwordMessage.type}`}>
                <i className={`bi ${passwordMessage.type === 'success' ? 'bi-check-circle' : 'bi-exclamation-circle'}`}></i>
                {passwordMessage.text}
              </div>
            )}

            <form onSubmit={handlePasswordSubmit} className="password-form">
              <div className="form-group">
                <label htmlFor="currentPassword">Contraseña Actual</label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  placeholder="Tu contraseña actual"
                  required
                  autoComplete="current-password"
                />
              </div>

              <div className="form-group">
                <label htmlFor="newPassword">Nueva Contraseña</label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  placeholder="Mínimo 6 caracteres"
                  required
                  autoComplete="new-password"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar Nueva Contraseña</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  placeholder="Repite la nueva contraseña"
                  required
                  autoComplete="new-password"
                />
              </div>

              <div className="modal-actions">
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isPasswordLoading}
                >
                  {isPasswordLoading ? 'Cambiando...' : 'Cambiar Contraseña'}
                </button>
                <button 
                  type="button" 
                  className="btn btn-outline"
                  onClick={handleClosePasswordModal}
                  disabled={isPasswordLoading}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
