import React, { createContext, useContext, useState, useEffect } from 'react';

// API Base URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Tipos de suscripción
export const SUBSCRIPTION_TIERS = {
  GUEST: 'guest',
  DEMO: 'demo',
  BASIC: 'basic',
  PREMIUM: 'premium',
  EDUCATOR: 'educator',
  ADMIN: 'admin'  // Solo para desarrolladores/propietarios
};

// Límites por tier
export const TIER_LIMITS = {
  [SUBSCRIPTION_TIERS.GUEST]: {
    calculators: 0,
    exercisesPerTopic: 0,
    canSaveFavorites: false,
    canExportPDF: false,
    canSaveHistory: false
  },
  [SUBSCRIPTION_TIERS.DEMO]: {
    calculators: 10, // 10 cálculos por día
    exercisesPerTopic: 3,
    canSaveFavorites: false,
    canExportPDF: false,
    canSaveHistory: false,
    durationDays: 7
  },
  [SUBSCRIPTION_TIERS.BASIC]: {
    calculators: 50, // 50 cálculos por día
    exercisesPerTopic: 5,
    subtopicsPerTopic: 1, // Solo 1 subtema por tema principal
    canSaveFavorites: true,
    canExportPDF: false,
    canSaveHistory: true
  },
  [SUBSCRIPTION_TIERS.PREMIUM]: {
    calculators: Infinity,
    exercisesPerTopic: Infinity,
    subtopicsPerTopic: Infinity,
    canSaveFavorites: true,
    canExportPDF: true,
    canSaveHistory: true,
    canTakeNotes: true
  },
  [SUBSCRIPTION_TIERS.EDUCATOR]: {
    calculators: Infinity,
    exercisesPerTopic: Infinity,
    subtopicsPerTopic: Infinity,
    canSaveFavorites: true,
    canExportPDF: true,
    canSaveHistory: true,
    canTakeNotes: true,
    canManageGroups: true,
    canAssignTasks: true,
    canViewProgress: true
  },
  [SUBSCRIPTION_TIERS.ADMIN]: {
    calculators: Infinity,
    exercisesPerTopic: Infinity,
    subtopicsPerTopic: Infinity,
    canSaveFavorites: true,
    canExportPDF: true,
    canSaveHistory: true,
    canTakeNotes: true,
    canManageGroups: true,
    canAssignTasks: true,
    canViewProgress: true,
    canManageUsers: true,        // Solo admin
    canGenerateCodes: true,      // Solo admin
    canViewAllStats: true,       // Solo admin
    canManageSubscriptions: true // Solo admin
  }
};

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Helper para hacer requests con autenticación
const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('phyxio_token');
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers
    }
  };

  const response = await fetch(`${API_URL}${endpoint}`, config);
  const data = await response.json();

  if (!response.ok) {
    // Si hay errores de validación detallados, mostrarlos
    if (data.errors && Array.isArray(data.errors)) {
      const errorMessages = data.errors.map(err => err.message).join(', ');
      throw new Error(errorMessages);
    }
    throw new Error(data.message || 'Error en la petición');
  }

  return data;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [usage, setUsage] = useState({
    calculatorsToday: 0,
    exercisesToday: 0,
    pdfsToday: 0,
    lastReset: new Date().toDateString()
  });

  // Cargar usuario desde token al iniciar
  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem('phyxio_token');
        
        if (token) {
          // Verificar token y obtener usuario
          const data = await apiRequest('/auth/me');
          
          if (data.success) {
            setUser(data.data);
            // Cargar usage del usuario
            await loadUsage();
          }
        }
      } catch (error) {
        console.error('Error loading user:', error);
        // Token inválido, limpiar
        localStorage.removeItem('phyxio_token');
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  // Cargar usage del usuario
  const loadUsage = async () => {
    try {
      const data = await apiRequest('/user/usage');
      
      if (data.success) {
        setUsage({
          calculatorsToday: data.data.today.calculators,
          exercisesToday: data.data.today.exercises,
          pdfsToday: data.data.today.pdfs,
          lastReset: data.data.today.date
        });
      }
    } catch (error) {
      console.error('Error loading usage:', error);
    }
  };

  // Login
  const login = async (email, password) => {
    try {
      const data = await apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });

      if (data.success) {
        localStorage.setItem('phyxio_token', data.data.token);
        setUser(data.data.user);
        await loadUsage();
        return data.data.user;
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  // Registro
  const register = async (email, password, name) => {
    try {
      const data = await apiRequest('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email, password, name })
      });

      if (data.success) {
        localStorage.setItem('phyxio_token', data.data.token);
        setUser(data.data.user);
        await loadUsage();
        return data.data.user;
      }
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    }
  };

  // Logout
  const logout = async () => {
    try {
      await apiRequest('/auth/logout', { method: 'POST' });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('phyxio_token');
      setUser(null);
      setUsage({
        calculatorsToday: 0,
        exercisesToday: 0,
        pdfsToday: 0,
        lastReset: new Date().toDateString()
      });
    }
  };

  // Actualizar tier
  const upgradeTier = async (newTier) => {
    try {
      const data = await apiRequest('/subscription/upgrade', {
        method: 'POST',
        body: JSON.stringify({ tier: newTier })
      });

      if (data.success) {
        // Recargar usuario
        const userData = await apiRequest('/auth/me');
        if (userData.success) {
          setUser(userData.data);
        }
        return true;
      }
    } catch (error) {
      console.error('Upgrade error:', error);
      throw error;
    }
  };

  // Cancelar suscripción
  const cancelSubscription = async () => {
    try {
      const data = await apiRequest('/subscription/cancel', {
        method: 'POST'
      });

      if (data.success) {
        // Recargar usuario
        const userData = await apiRequest('/auth/me');
        if (userData.success) {
          setUser(userData.data);
        }
        return true;
      }
    } catch (error) {
      console.error('Cancel subscription error:', error);
      throw error;
    }
  };

  // Registrar uso de calculadora
  const recordCalculatorUse = async () => {
    try {
      const data = await apiRequest('/user/usage/calculator', {
        method: 'POST'
      });

      if (data.success) {
        setUsage(prev => ({
          ...prev,
          calculatorsToday: data.data.calculators_used
        }));
      }
    } catch (error) {
      console.error('Error recording calculator use:', error);
    }
  };

  // Registrar uso de ejercicio
  const recordExerciseUse = async () => {
    try {
      const data = await apiRequest('/user/usage/exercise', {
        method: 'POST'
      });

      if (data.success) {
        setUsage(prev => ({
          ...prev,
          exercisesToday: data.data.exercises_completed
        }));
      }
    } catch (error) {
      console.error('Error recording exercise use:', error);
    }
  };

  // Registrar exportación de PDF
  const recordPDFExport = async () => {
    try {
      const data = await apiRequest('/user/usage/pdf', {
        method: 'POST'
      });

      if (data.success) {
        setUsage(prev => ({
          ...prev,
          pdfsToday: data.data.pdfs_exported
        }));
      }
    } catch (error) {
      console.error('Error recording PDF export:', error);
    }
  };

  // Verificar si puede usar calculadora
  const canUseCalculator = () => {
    if (!user) {
      return { allowed: false, reason: 'login_required' };
    }

    const limits = TIER_LIMITS[user.tier];
    
    if (limits.calculators === 0) {
      return { allowed: false, reason: 'tier_upgrade_required' };
    }

    if (limits.calculators === Infinity) {
      return { allowed: true };
    }

    if (usage.calculatorsToday >= limits.calculators) {
      return { allowed: false, reason: 'daily_limit_reached' };
    }

    return { allowed: true };
  };

  // Verificar si puede ver ejercicio
  const canViewExercise = (exerciseIndex) => {
    if (!user) {
      return { allowed: false, reason: 'login_required' };
    }

    const limits = TIER_LIMITS[user.tier];
    
    if (limits.exercisesPerTopic === 0) {
      return { allowed: false, reason: 'tier_upgrade_required' };
    }

    if (limits.exercisesPerTopic === Infinity) {
      return { allowed: true };
    }

    if (exerciseIndex >= limits.exercisesPerTopic) {
      return { allowed: false, reason: 'exercise_limit_reached' };
    }

    return { allowed: true };
  };

  const getRemainingCalculators = () => {
    if (!user) return 0;
    
    const limits = TIER_LIMITS[user.tier];
    if (limits.calculators === Infinity) return Infinity;
    
    return Math.max(0, limits.calculators - usage.calculatorsToday);
  };

  const getDaysUntilExpiration = () => {
    if (!user || !user.subscription_end) return null;
    
    const end = new Date(user.subscription_end);
    const now = new Date();
    const diffTime = end - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays > 0 ? diffDays : 0;
  };

  const value = {
    user,
    loading,
    usage,
    login,
    register,
    logout,
    upgradeTier,
    cancelSubscription,
    canUseCalculator,
    recordCalculatorUse,
    recordExerciseUse,
    recordPDFExport,
    canViewExercise,
    getRemainingCalculators,
    getDaysUntilExpiration,
    isAuthenticated: !!user,
    tier: user?.tier || SUBSCRIPTION_TIERS.GUEST,
    limits: user ? TIER_LIMITS[user.tier] : TIER_LIMITS[SUBSCRIPTION_TIERS.GUEST]
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
