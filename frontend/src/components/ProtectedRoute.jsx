import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();


  // Mostrar loading mientras se verifica la autenticación
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div className="spinner"></div>
        <p>Cargando...</p>
      </div>
    );
  }

  // Si no está autenticado, mostrar mensaje y no permitir navegación
  if (!isAuthenticated) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '80vh',
        flexDirection: 'column',
        gap: '1.5rem',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '4rem' }}>🔒</div>
        <h2>Acceso Restringido</h2>
        <p style={{ maxWidth: '500px', color: '#666' }}>
          Debes iniciar sesión o registrarte para acceder al contenido de Phyxio Calculator.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/')}
            style={{
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: '#007bff',
              color: 'white'
            }}
          >
            Ir a Inicio
          </button>
        </div>
        <p style={{ fontSize: '0.9rem', color: '#999', marginTop: '2rem' }}>
          Haz clic en "Iniciar Sesión" o "Registrarse" en la barra superior
        </p>
      </div>
    );
  }

  // Si está autenticado, renderizar el contenido
  return children;
};

export default ProtectedRoute;
