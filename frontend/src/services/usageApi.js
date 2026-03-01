import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

/**
 * Cliente de API para tracking de uso
 */
class UsageAPI {
  /**
   * Obtiene el token de autenticación
   */
  getAuthHeader() {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  /**
   * Obtiene el uso actual del usuario
   */
  async getCurrentUsage() {
    try {
      const response = await axios.get(`${API_URL}/usage/current`, {
        headers: this.getAuthHeader()
      });
      return response.data;
    } catch (error) {
      console.error('Error obteniendo uso actual:', error);
      throw error;
    }
  }

  /**
   * Valida si el usuario puede realizar una acción
   */
  async validateAction(type) {
    try {
      const response = await axios.post(
        `${API_URL}/usage/validate`,
        { type },
        { headers: this.getAuthHeader() }
      );
      return response.data;
    } catch (error) {
      console.error('Error validando acción:', error);
      throw error;
    }
  }

  /**
   * Trackea el uso de una acción
   */
  async trackUsage(type) {
    try {
      const response = await axios.post(
        `${API_URL}/usage/track`,
        { type },
        { headers: this.getAuthHeader() }
      );
      return response.data;
    } catch (error) {
      console.error('Error trackeando uso:', error);
      
      // Si es un error 403, el límite fue alcanzado
      if (error.response && error.response.status === 403) {
        return error.response.data;
      }
      
      throw error;
    }
  }

  /**
   * Obtiene estadísticas de uso
   */
  async getStats(days = 7) {
    try {
      const response = await axios.get(`${API_URL}/usage/stats`, {
        params: { days },
        headers: this.getAuthHeader()
      });
      return response.data;
    } catch (error) {
      console.error('Error obteniendo estadísticas:', error);
      throw error;
    }
  }

  /**
   * Obtiene los límites del tier actual
   */
  async getLimits() {
    try {
      const response = await axios.get(`${API_URL}/usage/limits`, {
        headers: this.getAuthHeader()
      });
      return response.data;
    } catch (error) {
      console.error('Error obteniendo límites:', error);
      throw error;
    }
  }

  /**
   * Sincroniza el uso local con el servidor
   */
  async syncUsage(calculations, exercises) {
    try {
      const response = await axios.post(
        `${API_URL}/usage/sync`,
        { calculations, exercises },
        { headers: this.getAuthHeader() }
      );
      return response.data;
    } catch (error) {
      console.error('Error sincronizando uso:', error);
      throw error;
    }
  }
}

export default new UsageAPI();
