import { useState, useEffect } from 'react';
import axios from 'axios';
import './CodeManagement.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const CodeManagement = () => {
  const [codes, setCodes] = useState([]);
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
    status: 'all',
    tier: 'all'
  });

  // Modal de creación
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [newCode, setNewCode] = useState({
    tier: 'demo',
    expires_in_days: 7,
    max_uses: 1,
    description: ''
  });

  useEffect(() => {
    fetchCodes();
  }, [pagination.page, filters]);

  const fetchCodes = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('phyxio_token');

      const params = new URLSearchParams({
        page: pagination.page,
        limit: pagination.limit,
        ...filters
      });

      const response = await axios.get(`${API_URL}/admin/codes?${params}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        setCodes(response.data.data.codes);
        setPagination(response.data.data.pagination);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error al cargar códigos');
      console.error('Error fetching codes:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCode = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('phyxio_token');
      const response = await axios.post(
        `${API_URL}/admin/codes`,
        newCode,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        const createdCode = response.data.data;
        alert(
          `✅ Código creado exitosamente!\n\n` +
          `Código: ${createdCode.access_code}\n` +
          `Tier: ${createdCode.tier}\n` +
          `Expira: ${new Date(createdCode.expires_at).toLocaleString('es-ES')}\n\n` +
          `Guarda este código en un lugar seguro.`
        );
        
        setCreateModalOpen(false);
        setNewCode({
          tier: 'demo',
          expires_in_days: 30,
          max_uses: 1,
          description: ''
        });
        fetchCodes();
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Error al crear código');
    }
  };

  const handleDeleteCode = async (codeId, accessCode) => {
    if (!confirm(`¿Estás seguro de eliminar el código ${accessCode}?`)) {
      return;
    }

    try {
      const token = localStorage.getItem('phyxio_token');
      const response = await axios.delete(`${API_URL}/admin/codes/${codeId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        alert('Código eliminado correctamente');
        fetchCodes();
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Error al eliminar código');
    }
  };

  const handleInvalidateCode = async (codeId, accessCode) => {
    if (!confirm(`¿Invalidar el código ${accessCode}?`)) {
      return;
    }

    try {
      const token = localStorage.getItem('phyxio_token');
      const response = await axios.put(
        `${API_URL}/admin/codes/${codeId}/invalidate`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        alert('Código invalidado correctamente');
        fetchCodes();
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Error al invalidar código');
    }
  };

  const getStatusBadge = (code) => {
    const now = new Date();
    const expiresAt = new Date(code.expires_at);

    if (code.is_used) {
      return <span className="status-badge status-used">✓ Usado</span>;
    } else if (expiresAt < now) {
      return <span className="status-badge status-expired">⏰ Expirado</span>;
    } else {
      return <span className="status-badge status-active">✓ Activo</span>;
    }
  };

  const getTierBadgeClass = (tier) => {
    const classes = {
      demo: 'tier-demo',
      basic: 'tier-basic',
      premium: 'tier-premium',
      educator: 'tier-educator'
    };
    return classes[tier] || 'tier-demo';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('📋 Código copiado al portapapeles');
  };

  if (loading && codes.length === 0) {
    return <div className="loading">⏳ Cargando códigos...</div>;
  }

  return (
    <div className="code-management">
      <div className="management-header">
        <h2>🎫 Códigos Temporales</h2>
        <button
          className="btn-create"
          onClick={() => setCreateModalOpen(true)}
        >
          ➕ Generar Código
        </button>
      </div>

      {/* Filtros */}
      <div className="filters">
        <div className="filter-group">
          <label>📊 Estado:</label>
          <select
            value={filters.status}
            onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
            className="filter-select"
          >
            <option value="all">Todos</option>
            <option value="active">Activos</option>
            <option value="used">Usados</option>
            <option value="expired">Expirados</option>
          </select>
        </div>

        <div className="filter-group">
          <label>🏷️ Tier:</label>
          <select
            value={filters.tier}
            onChange={(e) => setFilters(prev => ({ ...prev, tier: e.target.value }))}
            className="filter-select"
          >
            <option value="all">Todos</option>
            <option value="demo">Demo</option>
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="educator">Educator</option>
          </select>
        </div>
      </div>

      {error && <div className="error-message">❌ {error}</div>}

      {/* Tabla de códigos */}
      <div className="codes-table-container">
        <table className="codes-table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Tier</th>
              <th>Estado</th>
              <th>Creado</th>
              <th>Expira</th>
              <th>Usado por</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {codes.map(code => (
              <tr key={code.id}>
                <td>
                  <div className="code-cell">
                    <span className="code-text">{code.access_code}</span>
                    <button
                      className="btn-copy"
                      onClick={() => copyToClipboard(code.access_code)}
                      title="Copiar código"
                    >
                      📋
                    </button>
                  </div>
                </td>
                <td>
                  <span className={`tier-badge ${getTierBadgeClass(code.tier)}`}>
                    {code.tier.toUpperCase()}
                  </span>
                </td>
                <td>{getStatusBadge(code)}</td>
                <td>{formatDate(code.created_at)}</td>
                <td>{formatDate(code.expires_at)}</td>
                <td>{code.used_by_email || '-'}</td>
                <td>
                  <div className="action-buttons">
                    {!code.is_used && (
                      <button
                        className="btn-action btn-invalidate"
                        onClick={() => handleInvalidateCode(code.id, code.access_code)}
                        title="Invalidar código"
                      >
                        🚫
                      </button>
                    )}
                    <button
                      className="btn-action btn-delete"
                      onClick={() => handleDeleteCode(code.id, code.access_code)}
                      title="Eliminar código"
                    >
                      🗑️
                    </button>
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
          Página {pagination.page} de {pagination.pages} ({pagination.total} códigos)
        </span>

        <button
          className="pagination-btn"
          onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
          disabled={pagination.page >= pagination.pages}
        >
          Siguiente →
        </button>
      </div>

      {/* Modal de creación */}
      {createModalOpen && (
        <div className="modal-overlay" onClick={() => setCreateModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>➕ Generar Nuevo Código</h3>
              <button
                className="modal-close"
                onClick={() => setCreateModalOpen(false)}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateCode} className="code-form">
              <div className="form-group">
                <label>Tier:</label>
                <select
                  value={newCode.tier}
                  onChange={(e) => setNewCode(prev => ({ ...prev, tier: e.target.value }))}
                  required
                >
                  <option value="demo">Demo (1 día)</option>
                  <option value="basic">Basic (30 días)</option>
                  <option value="premium">Premium (30 días)</option>
                  <option value="educator">Educator (30 días)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Días de validez:</label>
                <input
                  type="number"
                  min="1"
                  max="365"
                  value={newCode.expires_in_days}
                  onChange={(e) => setNewCode(prev => ({ ...prev, expires_in_days: parseInt(e.target.value) }))}
                  required
                />
              </div>

              <div className="form-group">
                <label>Descripción (opcional):</label>
                <textarea
                  value={newCode.description}
                  onChange={(e) => setNewCode(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Ej: Código para estudiante Juan Pérez..."
                  rows="3"
                />
              </div>

              <div className="form-actions">
                <button type="button" onClick={() => setCreateModalOpen(false)} className="btn-cancel">
                  Cancelar
                </button>
                <button type="submit" className="btn-submit">
                  Generar Código
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeManagement;
