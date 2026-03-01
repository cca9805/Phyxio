import React, { useState, useEffect, useMemo, useRef } from 'react';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import { useContentInteraction } from '../contexts/ContentInteractionContext';

// --- Helpers ---
function formatNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) return num;
    return String(num);
}

// --- Componente Principal Modificado ---
export default function CalculadoraCommon({ calculators = [], initialSelectedCalcId = null }) {
    const [selectedCalcId, setSelectedCalcId] = useState(null);

    useEffect(() => {
      if (!calculators || calculators.length === 0) {
        setSelectedCalcId(null);
        return;
      }

      // If an initialSelectedCalcId is provided and matches an available calculator,
      // prefer it; otherwise default to the first calculator in the list.
      if (initialSelectedCalcId) {
        const found = calculators.find(c => c.id === initialSelectedCalcId);
        if (found) {
          setSelectedCalcId(initialSelectedCalcId);
          return;
        }
      }

      setSelectedCalcId(calculators[0].id);
    }, [calculators, initialSelectedCalcId]);

    // --- LÓGICA CONDICIONAL ---
    if (calculators.length === 1) {
        const calculator = calculators[0];
        if (calculator.isOperative === false) {
            return (
                <div className='alert alert-warning'>
                    <h5 className='alert-heading'>Calculadora no disponible</h5>
                    <p>{calculator.warning}</p>
                </div>
            );
        }
        return <CalculatorInterface calculator={calculator} />;
    }

    if (!calculators || calculators.length === 0) {
        return <div className='alert alert-info'>No hay calculadoras disponibles.</div>;
    }
    
    // --- LÓGICA PARA MÚLTIPLES CALCULADORAS (con selector) ---
    const handleSelectChange = (event) => {
        setSelectedCalcId(event.target.value);
    };

    const selectedCalculator = useMemo(() => 
        calculators.find(c => c.id === selectedCalcId)
    , [selectedCalcId, calculators]);

    return (
        <div className='calculator-common'>
            <div className='mb-3'>
                <label htmlFor='calculator-select' className='form-label fw-bold'>Selecciona una calculadora:</label>
                <select 
                    id='calculator-select' 
                    value={selectedCalcId || ''} 
                    onChange={handleSelectChange}
                    className='form-select'
                >
                    {calculators.map(calc => (
                        <option key={calc.id} value={calc.id}>
                            {calc.title}
                        </option>
                    ))}
                </select>
            </div>

            {selectedCalculator && (
                selectedCalculator.isOperative === false ? (
                    <div className='alert alert-warning'>
                        <h5 className='alert-heading'>Calculadora no disponible</h5>
                        <p>{selectedCalculator.warning}</p>
                    </div>
                ) : (
                    <CalculatorInterface calculator={selectedCalculator} />
                )
            )}
        </div>
    );
}

// --- Interfaz de una Sola Calculadora ---
function CalculatorInterface({ calculator }) {
  if (calculator.type === 'interactive-visual') {
    return <InteractiveCalculator calculator={calculator} />;
  }
  return <FormBasedCalculator calculator={calculator} />; 
}

// --- Calculadora de Formulario (CORREGIDA) ---
function FormBasedCalculator({ calculator }) {
  const { id, title, description, variables, output, resolve, constants } = calculator;
  const { trackCalculation } = useContentInteraction();
  
  const initialValues = useMemo(() => {
    const initial = {};
    variables.forEach(v => {
      if (v.type === 'select' && v.options && v.options.length > 0) {
        initial[v.symbol] = v.options[0].value; 
      } else {
        initial[v.symbol] = '';
      }
    });
    return initial;
  }, [variables]);

  const [values, setValues] = useState(initialValues);
  const [result, setResult] = useState(null);

  const outputArray = Array.isArray(output) ? output : [output];

  useEffect(() => {
    setValues(initialValues);
    setResult(null);
  }, [id, initialValues]);

  const handleChange = (symbol, value) => {
    const isNumericInput = variables.find(v => v.symbol === symbol)?.type !== 'select';
    const processedValue = isNumericInput ? Number(value) : value;
    setValues(prev => ({ ...prev, [symbol]: processedValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Verificar y registrar el uso
    const canCalculate = await trackCalculation();
    if (!canCalculate) {
      return; // No permitir el cálculo si se alcanzó el límite
    }
    
    const resolved = resolve(values);
    setResult(resolved);
  };
  
  return (
    <div className='calculadora-card'>
      {description && <p className='text-muted text-center'>{description}</p>}
      {calculator.formula && (
        <div className='calculator-formula'>
          <Latex>{`$${calculator.formula}$`}</Latex>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className='row g-3'>
          {variables.map((v) => (
            <div className='col-md-4 col-sm-6' key={v.symbol}>
              <label htmlFor={v.symbol} className='form-label fw-bold'>
                {v.label} {v.unit && <small className='text-muted'>({v.unit})</small>}
              </label>
              {v.type === 'select' ? (
                <select
                  id={v.symbol}
                  value={values[v.symbol] || ''}
                  onChange={e => handleChange(v.symbol, e.target.value)}
                  className='form-select'
                >
                  {v.options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              ) : (
                <input
                  type='number'
                  step='any'
                  id={v.symbol}
                  value={values[v.symbol] || ''}
                  onChange={e => handleChange(v.symbol, e.target.value)}
                  className='form-control'
                  placeholder={v.example || ''}
                  required
                />
              )}
            </div>
          ))}
        </div>

        {constants && constants.length > 0 && (
            <div className='mt-3'>
                <h6>Constantes utilizadas:</h6>
                <ul className='list-unstyled list-inline'>
                    {constants.map(c => (
                        <li key={c.symbol} className='list-inline-item me-3'>
                           <small className='text-muted'>{c.label} ({c.symbol}): <strong>{c.value} {c.unit}</strong></small>
                        </li>
                    ))}
                </ul>
            </div>
        )}

        <div className='d-grid gap-2 col-6 mx-auto mt-4'>
          <button type='submit' className='btn btn-primary'>Calcular</button>
        </div>
      </form>

      {result && (
        <div className='mt-4'>
          {result.error ? (
            <div className='alert alert-danger'>{result.error}</div>
          ) : (
            <div className='resultados-card'>
              <h5 className='alert-heading'>Resultados:</h5>
              {outputArray.map(o => {
                const resultValue = result.result[o.symbol];
                const displayValue = typeof resultValue === 'number' ? formatNumber(resultValue) : resultValue;
                return (
                    <p key={o.symbol} className='mb-1'>
                        <strong>{o.label}:</strong> {displayValue} {o.unit}
                    </p>
                );
              })}
              <hr />
              <details>
                <summary>Ver pasos del cálculo</summary>
                <div className='pasos'>
                  {result.steps && result.steps.map((step, index) => {
                      const content = step.includes('=') ? `$${step}$` : step;
                      return (
                          <div key={index} style={{ whiteSpace: 'pre-wrap' }}>
                              <Latex>{content}</Latex>
                          </div>
                      );
                  })}
                </div>
              </details>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// --- Calculadora Interactiva (Sin cambios) ---
function InteractiveCalculator({ calculator }) {
  // ... (código sin cambios)
  return <div>...</div>;
}
