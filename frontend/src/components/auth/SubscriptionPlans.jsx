import React from 'react';
import { useAuth, SUBSCRIPTION_TIERS } from '../../contexts/AuthContext';
import './SubscriptionPlans.css';

const PLANS = [
  {
    id: SUBSCRIPTION_TIERS.DEMO,
    name: 'Demo',
    price: 0,
    period: '7 días',
    description: 'Prueba gratuita',
    features: [
      '✅ Teoría completa',
      '✅ 10 cálculos por día',
      '✅ 3 ejercicios por tema',
      '⏱️ Válido por 7 días'
    ],
    cta: 'Probar Gratis',
    popular: false
  },
  {
    id: SUBSCRIPTION_TIERS.BASIC,
    name: 'Básico',
    price: 4.99,
    period: 'mes',
    description: 'Para estudiantes',
    features: [
      '✅ Teoría completa',
      '✅ 50 cálculos por día',
      '✅ 5 ejercicios por tema',
      '✅ 1 subtema por tema',
      '✅ Guardar favoritos',
      '✅ Historial de cálculos'
    ],
    cta: 'Suscribirse',
    popular: false
  },
  {
    id: SUBSCRIPTION_TIERS.PREMIUM,
    name: 'Premium',
    price: 9.99,
    period: 'mes',
    yearlyPrice: 89.99,
    description: 'Acceso completo',
    features: [
      '✅ Todo ilimitado',
      '✅ Calculadoras sin límite',
      '✅ Todos los ejercicios',
      '✅ Exportar a PDF',
      '✅ Notas personales',
      '✅ Soporte prioritario'
    ],
    cta: 'Comenzar Premium',
    popular: true
  },
  {
    id: SUBSCRIPTION_TIERS.EDUCATOR,
    name: 'Educador',
    price: 19.99,
    period: 'mes',
    yearlyPrice: 179.99,
    description: 'Para profesores',
    features: [
      '✅ Todo de Premium',
      '✅ Gestión de grupos',
      '✅ Asignar tareas',
      '✅ Ver progreso',
      '✅ Material didáctico',
      '✅ Soporte dedicado'
    ],
    cta: 'Plan Educador',
    popular: false
  }
];

const SubscriptionPlans = ({ onClose, onSelectPlan }) => {
  const { user, tier } = useAuth();
  const [billingPeriod, setBillingPeriod] = React.useState('monthly');

  const handleSelectPlan = (plan) => {
    if (onSelectPlan) {
      onSelectPlan(plan, billingPeriod);
    }
  };

  return (
    <div className="subscription-plans">
      <div className="plans-header">
        <h2>Elige tu Plan</h2>
        <p>Selecciona el plan que mejor se adapte a tus necesidades</p>
        
        {user && tier !== SUBSCRIPTION_TIERS.GUEST && (
          <div className="current-plan-badge">
            Plan actual: <strong>{tier}</strong>
          </div>
        )}

        <div className="billing-toggle">
          <button
            className={billingPeriod === 'monthly' ? 'active' : ''}
            onClick={() => setBillingPeriod('monthly')}
          >
            Mensual
          </button>
          <button
            className={billingPeriod === 'yearly' ? 'active' : ''}
            onClick={() => setBillingPeriod('yearly')}
          >
            Anual
            <span className="discount-badge">-25%</span>
          </button>
        </div>
      </div>

      <div className="plans-grid">
        {PLANS.map((plan) => {
          const isCurrentPlan = user && tier === plan.id;
          const price = billingPeriod === 'yearly' && plan.yearlyPrice
            ? plan.yearlyPrice
            : plan.price;
          const period = billingPeriod === 'yearly' ? 'año' : plan.period;

          return (
            <div
              key={plan.id}
              className={`plan-card ${plan.popular ? 'popular' : ''} ${isCurrentPlan ? 'current' : ''}`}
            >
              {plan.popular && <div className="popular-badge">Más Popular</div>}
              {isCurrentPlan && <div className="current-badge">Plan Actual</div>}

              <div className="plan-header">
                <h3>{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="plan-price">
                  {price === 0 ? (
                    <span className="price-free">Gratis</span>
                  ) : (
                    <>
                      <span className="price-amount">{price}€</span>
                      <span className="price-period">/{period}</span>
                    </>
                  )}
                </div>
                {billingPeriod === 'yearly' && plan.yearlyPrice && (
                  <p className="yearly-savings">
                    Ahorras {(plan.price * 12 - plan.yearlyPrice).toFixed(2)}€ al año
                  </p>
                )}
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <button
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-block`}
                onClick={() => handleSelectPlan(plan)}
                disabled={isCurrentPlan}
              >
                {isCurrentPlan ? 'Plan Actual' : plan.cta}
              </button>
            </div>
          );
        })}
      </div>

      <div className="plans-footer">
        <p>💳 Pago seguro con Stripe</p>
        <p>🔒 Cancela cuando quieras</p>
        <p>✉️ Soporte por email</p>
      </div>

      {onClose && (
        <button className="close-plans" onClick={onClose}>
          Cerrar
        </button>
      )}
    </div>
  );
};

export default SubscriptionPlans;
