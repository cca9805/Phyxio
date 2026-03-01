import { useState, useEffect } from 'react';
import Footer from './components/Footer.jsx';
import { Routes, Route, Outlet, useLocation, Navigate } from 'react-router-dom';
import { useUsageSync } from './hooks/useUsageSync';
import V2Router from "./v2/pages/V2Router";

// Importar componentes de layout
import { Navbar, Sidebar } from './components/NavbarSidebar';

// Importar páginas
import Constantes from './pages/Constantes';
import ResetPasswordPage from './pages/ResetPasswordPage';
import EmailVerificationPage from './pages/EmailVerificationPage';

// Importar sistema de autenticación
import { AuthProvider } from './contexts/AuthContext';
import LoginModal from './components/auth/LoginModal';
import RegisterModal from './components/auth/RegisterModal';
import TemporalCodeModal from './components/auth/TemporalCodeModal';
import ForgotPasswordModal from './components/auth/ForgotPasswordModal';

// Importar panel de administración
import AdminPanel from './pages/admin/AdminPanel';

// Importar componente de ruta protegida
import ProtectedRoute from './components/ProtectedRoute';

// Importar página de suscripción
import SubscriptionPage from './pages/SubscriptionPage';

// Importar página de perfil
import ProfilePage from './pages/ProfilePage';

// Importar página de uso
import UsagePage from './pages/UsagePage';

// Importar mapa del sitio
import phyxioMapYaml from "./v2/map/phyxio-map.yaml?raw";

// Componente que define el Layout principal de la aplicación
const AppLayout = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false); // Por defecto, la sidebar estará contraída
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false); // Estado para sidebar móvil
  const [isMobile, setIsMobile] = useState(false); // Detectar si es móvil
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Estado del tema
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showTemporalModal, setShowTemporalModal] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const location = useLocation();

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cargar preferencia de tema desde localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkTheme(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Cerrar sidebar móvil al cambiar de ruta
  useEffect(() => {
    if (isMobile) {
      setMobileSidebarOpen(false);
    }
  }, [location, isMobile]);

  // Toggle sidebar móvil
  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!isMobileSidebarOpen);
  };

  // Cerrar sidebar móvil al hacer clic en el overlay
  const closeMobileSidebar = () => {
    setMobileSidebarOpen(false);
  };

  // Toggle tema
  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="app-container">
      <Navbar 
        onMenuClick={toggleMobileSidebar} 
        isMobile={isMobile}
        isDark={isDarkTheme}
        onThemeToggle={toggleTheme}
        onLoginClick={() => setShowLoginModal(true)}
        onRegisterClick={() => setShowRegisterModal(true)}
      />
      <div className="main-content-area">
          {/* Overlay oscuro para móvil */}
          {isMobile && (
            <div 
              className={`sidebar-overlay ${isMobileSidebarOpen ? 'active' : ''}`}
              onClick={closeMobileSidebar}
            />
          )}
          
          <div 
            className={`sidebar-container ${isMobileSidebarOpen ? 'sidebar-open' : ''}`}
            onMouseEnter={() => !isMobile && setSidebarExpanded(true)}
            onMouseLeave={() => !isMobile && setSidebarExpanded(false)}
          >
            <Sidebar 
              isExpanded={isMobile ? true : isSidebarExpanded}
              isMobile={isMobile}
              onLinkClick={isMobile ? closeMobileSidebar : undefined}
            />
          </div>
          <main className="main-content">
            {/* Outlet renderizará la página que corresponda a la ruta actual */}
            <Outlet />
          </main>
      </div>

      {/* Modales de autenticación */}
      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToRegister={() => {
          setShowLoginModal(false);
          setShowRegisterModal(true);
        }}
        onSwitchToTemporal={() => {
          setShowLoginModal(false);
          setShowTemporalModal(true);
        }}
        onSwitchToForgot={() => {
          setShowLoginModal(false);
          setShowForgotModal(true);
        }}
      />
      <RegisterModal 
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onSwitchToLogin={() => {
          setShowRegisterModal(false);
          setShowLoginModal(true);
        }}
      />
      <ForgotPasswordModal
        isOpen={showForgotModal}
        onClose={() => setShowForgotModal(false)}
      />
      <TemporalCodeModal 
        isOpen={showTemporalModal}
        onClose={() => setShowTemporalModal(false)}
      />
      {/* Pie de página global */}
      <Footer />
    </div>
  );
};

// Componente interno que usa el hook de sincronización
const AppRoutes = () => {
  // Sincronizar uso con el backend (dentro del AuthProvider)
  useUsageSync();
  
  return (
    <Routes>
      {/* Rutas especiales (sin AppLayout) */}
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      <Route path="/verify-email/:token" element={<EmailVerificationPage />} />
      
      {/* Todas las rutas se renderizan dentro de AppLayout */}
      <Route element={<AppLayout />}>

        {/* Rutas version 2 */}
        <Route path="/v2/*" element={<V2Router />} />


        {/* Ruta de inicio (pública) */}
        <Route path="/" element={<Navigate to="/v2" replace />} />
        
        {/* Rutas protegidas - requieren autenticación */}
        <Route path="/constantes" element={<ProtectedRoute><Constantes /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="/subscription" element={<ProtectedRoute><SubscriptionPage /></ProtectedRoute>} />
        <Route path="/usage" element={<ProtectedRoute><UsagePage /></ProtectedRoute>} />
        
        {/* Compatibilidad legacy */}
        <Route path="/fisica/*" element={<Navigate to="/v2" replace />} />
        
        {/* Fallback global */}
        <Route path="*" element={<Navigate to="/v2" replace />} />

        



      </Route>
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
