import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import usageApi from '../services/usageApi';

/**
 * Hook para sincronizar el uso con el backend
 */
export const useUsageSync = () => {
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    // Verificar que el usuario esté autenticado y tenga un token válido
    if (!isAuthenticated || !user) {
      return;
    }

    // Verificar que exista un token en localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }

    const syncWithBackend = async () => {
      try {
        // Obtener uso local
        const storedData = localStorage.getItem('dailyUsage');
        const today = new Date().toDateString();
        
        let localUsage = { calculations: 0, exercises: 0 };
        
        if (storedData) {
          const parsed = JSON.parse(storedData);
          if (parsed.date === today) {
            localUsage = parsed.usage;
          }
        }

        // Sincronizar con el backend
        const response = await usageApi.syncUsage(
          localUsage.calculations,
          localUsage.exercises
        );

        if (response.success) {
          // Actualizar localStorage con los datos sincronizados
          const syncedData = {
            date: today,
            usage: response.usage
          };
          localStorage.setItem('dailyUsage', JSON.stringify(syncedData));
          
          // Disparar evento para actualizar UI
          window.dispatchEvent(new CustomEvent('usageUpdated', { 
            detail: response.usage 
          }));
          
          console.log('✅ Uso sincronizado con el backend:', response.usage);
        }
      } catch (error) {
        // Silenciar errores de autenticación para no llenar la consola
        if (error.response?.status === 401) {
          console.log('ℹ️ Usuario no autenticado, usando solo localStorage');
        } else {
          console.error('Error sincronizando uso:', error);
        }
        // No bloquear la aplicación si falla la sincronización
      }
    };

    // Sincronizar al cargar (con un pequeño delay para asegurar que el token esté listo)
    const initialTimeout = setTimeout(syncWithBackend, 1000);

    // Sincronizar cada 5 minutos
    const interval = setInterval(syncWithBackend, 5 * 60 * 1000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isAuthenticated, user]);
};

export default useUsageSync;
