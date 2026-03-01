import React, { useState } from 'react';
import RestrictedContent from './RestrictedContent';
import UsageCounter, { useIncrementUsage } from './UsageCounter';
import { useTierRestrictions } from '../hooks/useTierRestrictions';
import './CalculatorWrapper.css';

/**
 * Wrapper para calculadoras que aplica restricciones de tier
 */
const CalculatorWrapper = ({ children, title, description }) => {
  const { canAccess, limits } = useTierRestrictions();
  const { incrementUsage, checkLimit } = useIncrementUsage();
  const [hasCalculated, setHasCalculated] = useState(false);

  const hasAccess = canAccess('calculators');

  // Interceptar el cálculo para incrementar el contador
  const handleCalculation = () => {
    if (checkLimit('calculations')) {
      incrementUsage('calculations');
      setHasCalculated(true);
    }
  };

  if (!hasAccess) {
    return (
      <RestrictedContent feature="calculators" showPreview={true}>
        <div className="calculator-container">
          {title && <h2>{title}</h2>}
          {description && <p className="calculator-description">{description}</p>}
          {children}
        </div>
      </RestrictedContent>
    );
  }

  return (
    <div className="calculator-container">
      {limits.maxCalculationsPerDay !== Infinity && (
        <UsageCounter type="calculations" />
      )}
      
      {title && <h2>{title}</h2>}
      {description && <p className="calculator-description">{description}</p>}
      
      {/* Clonar children y pasar handleCalculation como prop */}
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { 
            onCalculate: handleCalculation,
            disabled: !checkLimit('calculations')
          });
        }
        return child;
      })}
    </div>
  );
};

export default CalculatorWrapper;
