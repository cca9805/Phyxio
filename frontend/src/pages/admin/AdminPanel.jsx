import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import UserManagement from '../../components/admin/UserManagement';
import CodeManagement from '../../components/admin/CodeManagement';
import Statistics from '../../components/admin/Statistics';
import './AdminPanel.css';

const AdminPanel = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('users');

  useEffect(() => {
    // Verificar que el usuario sea admin
    if (!user || (user.tier !== 'admin' && !user.is_admin)) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user || (user.tier !== 'admin' && !user.is_admin)) {
    return null;
  }

  const tabs = [
    { id: 'users', label: 'Usuarios', icon: '👥' },
    { id: 'codes', label: 'Códigos Temporales', icon: '🎫' },
    { id: 'stats', label: 'Estadísticas', icon: '📊' }
  ];

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>🔐 Panel de Administración</h1>
        <p className="admin-subtitle">Bienvenido, {user.name}</p>
      </div>

      <div className="admin-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`admin-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="admin-content">
        {activeTab === 'users' && <UserManagement />}
        {activeTab === 'codes' && <CodeManagement />}
        {activeTab === 'stats' && <Statistics />}
      </div>
    </div>
  );
};

export default AdminPanel;
