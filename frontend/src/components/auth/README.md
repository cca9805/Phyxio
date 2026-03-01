# Componentes de Autenticación

## 📁 Estructura

```
auth/
├── AuthModals.css              # Estilos para modales
├── LoginModal.jsx              # Modal de inicio de sesión
├── RegisterModal.jsx           # Modal de registro
├── SubscriptionPlans.css       # Estilos para planes
├── SubscriptionPlans.jsx       # Componente de planes
├── UpgradePrompt.jsx          # Prompts de actualización
└── README.md                   # Este archivo
```

## 🎯 Uso de Componentes

### LoginModal

```jsx
import LoginModal from './components/auth/LoginModal';

<LoginModal 
  isOpen={showLogin}
  onClose={() => setShowLogin(false)}
  onSwitchToRegister={() => {
    setShowLogin(false);
    setShowRegister(true);
  }}
/>
```

### RegisterModal

```jsx
import RegisterModal from './components/auth/RegisterModal';

<RegisterModal 
  isOpen={showRegister}
  onClose={() => setShowRegister(false)}
  onSwitchToLogin={() => {
    setShowRegister(false);
    setShowLogin(true);
  }}
/>
```

### UpgradePrompt

```jsx
import UpgradePrompt from './components/auth/UpgradePrompt';

<UpgradePrompt 
  isOpen={showUpgrade}
  onClose={() => setShowUpgrade(false)}
  feature="calculations"
  currentTier="guest"
/>
```

### SubscriptionPlans

```jsx
import SubscriptionPlans from './components/auth/SubscriptionPlans';

<SubscriptionPlans 
  currentTier="basic"
  onSelectPlan={(tier) => console.log('Selected:', tier)}
/>
```

## 🔌 Integración con AuthContext

```jsx
import { useAuth } from '../../contexts/AuthContext';

function MiComponente() {
  const { user, checkPermission, incrementUsage } = useAuth();
  
  // Tu código aquí
}
```

## 📝 Notas

- Todos los componentes son responsivos
- Soportan dark theme automáticamente
- Incluyen validaciones
- Animaciones suaves incluidas
