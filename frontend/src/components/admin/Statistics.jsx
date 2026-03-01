import { useState, useEffect } from 'react';
import axios from 'axios';
import './Statistics.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const Statistics = () => {
  const [overview, setOverview] = useState(null);
  const [userStats, setUserStats] = useState(null);
  const [usageStats, setUsageStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [period, setPeriod] = useState('30');

  useEffect(() => {
    fetchAllStats();
  }, [period]);

  const fetchAllStats = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('phyxio_token');
      const headers = { Authorization: `Bearer ${token}` };

      // Fetch en paralelo
      const [overviewRes, userRes, usageRes] = await Promise.all([
        axios.get(`${API_URL}/admin/stats/overview`, { headers }),
        axios.get(`${API_URL}/admin/stats/users?period=${period}`, { headers }),
        axios.get(`${API_URL}/admin/stats/usage?period=${period}`, { headers })
      ]);

      setOverview(overviewRes.data.data);
      setUserStats(userRes.data.data);
      setUsageStats(usageRes.data.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Error al cargar estadísticas');
      console.error('Error fetching stats:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">⏳ Cargando estadísticas...</div>;
  }

  if (error) {
    return <div className="error-message">❌ {error}</div>;
  }

  return (
    <div className="statistics">
      <div className="stats-header">
        <h2>📊 Estadísticas del Sistema</h2>
        <div className="period-selector">
          <label>Período:</label>
          <select value={period} onChange={(e) => setPeriod(e.target.value)}>
            <option value="7">Últimos 7 días</option>
            <option value="30">Últimos 30 días</option>
            <option value="90">Últimos 90 días</option>
            <option value="365">Último año</option>
          </select>
        </div>
      </div>

      {/* Overview Cards */}
      {overview && (
        <div className="overview-grid">
          <div className="stat-card">
            <div className="card-icon">👥</div>
            <div className="card-content">
              <h3>Total Usuarios</h3>
              <p className="stat-number">{overview.users.total}</p>
              <span className="stat-detail">
                {overview.users.active} activos este mes
              </span>
            </div>
          </div>

          <div className="stat-card">
            <div className="card-icon">📈</div>
            <div className="card-content">
              <h3>Nuevos Registros</h3>
              <p className="stat-number">{overview.users.recent}</p>
              <span className="stat-detail">Últimos 30 días</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="card-icon">🎫</div>
            <div className="card-content">
              <h3>Códigos Activos</h3>
              <p className="stat-number">{overview.codes.active}</p>
              <span className="stat-detail">
                {overview.codes.used} usados / {overview.codes.total} total
              </span>
            </div>
          </div>

          <div className="stat-card">
            <div className="card-icon">⏰</div>
            <div className="card-content">
              <h3>Códigos Expirados</h3>
              <p className="stat-number">{overview.codes.expired}</p>
              <span className="stat-detail">Pendientes de limpieza</span>
            </div>
          </div>
        </div>
      )}

      {/* Distribución por Tier */}
      {overview && (
        <div className="section">
          <h3>🏷️ Distribución de Usuarios por Tier</h3>
          <div className="tier-distribution">
            {overview.users.byTier.map(item => (
              <div key={item.tier} className="tier-bar-container">
                <div className="tier-label">
                  <span className={`tier-badge tier-${item.tier}`}>
                    {item.tier.toUpperCase()}
                  </span>
                  <span className="tier-count">{item.count} usuarios</span>
                </div>
                <div className="tier-bar">
                  <div
                    className={`tier-fill tier-${item.tier}`}
                    style={{
                      width: `${(item.count / overview.users.total) * 100}%`
                    }}
                  />
                </div>
                <span className="tier-percentage">
                  {((item.count / overview.users.total) * 100).toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Suscripciones próximas a expirar */}
      {userStats && userStats.expiringSubscriptions.length > 0 && (
        <div className="section">
          <h3>⚠️ Suscripciones Próximas a Expirar (Próximos 7 días)</h3>
          <div className="expiring-table">
            <table>
              <thead>
                <tr>
                  <th>Usuario</th>
                  <th>Email</th>
                  <th>Tier</th>
                  <th>Expira</th>
                </tr>
              </thead>
              <tbody>
                {userStats.expiringSubscriptions.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`tier-badge tier-${user.tier}`}>
                        {user.tier.toUpperCase()}
                      </span>
                    </td>
                    <td className="expiring-date">
                      {new Date(user.subscription_end).toLocaleDateString('es-ES')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Top Temas */}
      {usageStats && usageStats.topTopics.length > 0 && (
        <div className="section">
          <h3>🔥 Temas Más Visitados</h3>
          <div className="top-list">
            {usageStats.topTopics.slice(0, 10).map((topic, index) => (
              <div key={index} className="top-item">
                <span className="top-rank">{index + 1}</span>
                <span className="top-name">{topic.details || 'Sin nombre'}</span>
                <span className="top-count">{topic.count} visitas</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Top Calculadoras */}
      {usageStats && usageStats.topCalculators.length > 0 && (
        <div className="section">
          <h3>🧮 Calculadoras Más Usadas</h3>
          <div className="top-list">
            {usageStats.topCalculators.slice(0, 10).map((calc, index) => (
              <div key={index} className="top-item">
                <span className="top-rank">{index + 1}</span>
                <span className="top-name">{calc.details || 'Sin nombre'}</span>
                <span className="top-count">{calc.count} cálculos</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Registros por día */}
      {userStats && userStats.registrationsByDay.length > 0 && (
        <div className="section">
          <h3>📅 Registros por Día (Últimos {period} días)</h3>
          <div className="timeline">
            {userStats.registrationsByDay
              .slice(0, 15)
              .map((item, index) => (
                <div key={index} className="timeline-item">
                  <span className="timeline-date">
                    {new Date(item.date).toLocaleDateString('es-ES', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                  <div className="timeline-bar-container">
                    <div
                      className={`timeline-bar tier-${item.tier}`}
                      style={{
                        width: `${Math.min((item.count / Math.max(...userStats.registrationsByDay.map(d => d.count))) * 100, 100)}%`
                      }}
                    />
                  </div>
                  <span className="timeline-count">
                    {item.count} ({item.tier})
                  </span>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;
