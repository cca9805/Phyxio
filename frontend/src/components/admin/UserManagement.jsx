import { useState, useEffect } from 'react';
import axios from 'axios';
import './UserManagement.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  });
  
  // Filtros
  const [filters, setFilters] = useState({
    tier: 'all',
    search: '',
    sortBy: 'created_at',
    order: 'DESC'
  });

  // Modal de edición
  const [selectedUser, setSelectedUser] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [pagination.page, filters]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('phyxio_token');
      
      const params = new URLSearchParams({
        page: pagination.page,
        limit: pagination.limit,
        ...filters
      });

      const response = await axios.get(`${API_URL}/admin/users?${params}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        setUsers(response.data.data.users);
        setPagination(response.data.data.pagination);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error al cargar usuarios');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setPagination(prev => ({ ...prev, page: 1 })); // Reset a primera página
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setEditModalOpen(true);
  };

  const handleDeleteUser = async (userId, userName) => {
    if (!confirm(`¿Estás seguro de eliminar al usuario ${userName}?`)) {
      return;
    }

    try {
      const token = localStorage.getItem('phyxio_token');
      const response = await axios.delete(`${API_URL}/admin/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        alert('Usuario eliminado correctamente');
        fetchUsers();
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Error al eliminar usuario');
    }
  };

  const handleChangeTier = async (userId, currentTier) => {
    const newTier = prompt(
      'Ingresa el nuevo tier (guest, demo, basic, premium, educator):',
      currentTier
    );

    if (!newTier || newTier === currentTier) return;

    const validTiers = ['guest', 'demo', 'basic', 'premium', 'educator'];
    if (!validTiers.includes(newTier)) {
      alert('Tier inválido');
      return;
    }

    try {
      const token = localStorage.getItem('phyxio_token');
      const response = await axios.put(
        `${API_URL}/admin/users/${userId}/tier`,
        { tier: newTier },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        alert(`Tier actualizado a ${newTier}`);
        fetchUsers();
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Error al cambiar tier');
    }
  };

  const getTierBadgeClass = (tier) => {
    const classes = {
      guest: 'tier-guest',
      demo: 'tier-demo',
      basic: 'tier-basic',
      premium: 'tier-premium',
      educator: 'tier-educator',
      admin: 'tier-admin'
    };
    return classes[tier] || 'tier-guest';
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading && users.length === 0) {
    return <div className="loading">⏳ Cargando usuarios...</div>;
  }

  return (
    <div className="user-management">
      <div className="management-header">
        <h2>👥 Gestión de Usuarios</h2>
        <div className="stats-summary">
          <span className="stat-item">Total: {pagination.total}</span>
        </div>
      </div>

      {/* Filtros */}
      <div className="filters">
        <div className="filter-group">
          <label>🔍 Buscar:</label>
          <input
            type="text"
            placeholder="Nombre o email..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label>🏷️ Tier:</label>
          <select
            value={filters.tier}
            onChange={(e) => handleFilterChange('tier', e.target.value)}
            className="filter-select"
          >
            <option value="all">Todos</option>
            <option value="guest">Guest</option>
            <option value="demo">Demo</option>
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="educator">Educator</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="filter-group">
          <label>📅 Ordenar:</label>
          <select
            value={filters.sortBy}
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
            className="filter-select"
          >
            <option value="created_at">Fecha registro</option>
            <option value="name">Nombre</option>
            <option value="email">Email</option>
            <option value="tier">Tier</option>
          </select>
        </div>

        <div className="filter-group">
          <label>⬆️⬇️ Orden:</label>
          <select
            value={filters.order}
            onChange={(e) => handleFilterChange('order', e.target.value)}
            className="filter-select"
          >
            <option value="DESC">Descendente</option>
            <option value="ASC">Ascendente</option>
          </select>
        </div>
      </div>

      {error && <div className="error-message">❌ {error}</div>}

      {/* Tabla de usuarios */}
      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Tier</th>
              <th>Suscripción hasta</th>
              <th>Registrado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`tier-badge ${getTierBadgeClass(user.tier)}`}>
                    {user.tier ? user.tier.toUpperCase() : 'N/A'}
                    {user.is_admin && ' 👑'}
                  </span>
                </td>
                <td>{formatDate(user.subscription_end)}</td>
                <td>{formatDate(user.created_at)}</td>
                <td>
                  <div className="action-buttons">
                    {!user.is_admin && (
                      <>
                        <button
                          className="btn-action btn-edit"
                          onClick={() => handleChangeTier(user.id, user.tier)}
                          title="Cambiar tier"
                        >
                          🔄
                        </button>
                        <button
                          className="btn-action btn-delete"
                          onClick={() => handleDeleteUser(user.id, user.name)}
                          title="Eliminar usuario"
                        >
                          🗑️
                        </button>
                      </>
                    )}
                    {user.is_admin && (
                      <span className="admin-badge">🔐 Admin</span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="pagination">
        <button
          className="pagination-btn"
          onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
          disabled={pagination.page === 1}
        >
          ← Anterior
        </button>
        
        <span className="pagination-info">
          Página {pagination.page} de {pagination.pages} ({pagination.total} usuarios)
        </span>
        
        <button
          className="pagination-btn"
          onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
          disabled={pagination.page >= pagination.pages}
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
};

export default UserManagement;
