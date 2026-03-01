import { useState } from 'react';
import '../styles/TheoryV2.css';
import Latex from 'react-latex-next';
import CalculadoraCommon from './CalculadoraCommon.jsx';
import { useContentInteraction } from '../contexts/ContentInteractionContext';

// --- Componentes de la UI de Teoría ---

export const TheorySection = ({ title, children }) => (
  <section className="theory-section">
    <h2 className="theory-title">{title}</h2>
    <div className="theory-content">{children}</div>
  </section>
);

export const Concept = ({ title, children }) => (
  <div className="formula-card">
    <h3 className="concept-title">{title}</h3>
    <div className="concept-body">{children}</div>
  </div>
);

export const Important = ({ children }) => (
    <div className="important-note">
        {children}
    </div>
);

export const Example = ({ title, problem, solution, children }) => {
    const [showSolution, setShowSolution] = useState(false);
    
    return (
        <div className="example-block">
            <h4 className="example-title">{title || "Ejemplo"}</h4>
            {problem && <p className="example-problem"><strong>Problema:</strong> {problem}</p>}
            
            {solution && (
                <>
                    <button 
                        onClick={() => setShowSolution(!showSolution)} 
                        className="btn btn-primary btn-sm mt-2 mb-3"
                    >
                        {showSolution ? 'Ocultar Solución' : 'Ver Solución'}
                    </button>
                    
                    {showSolution && (
                        <div className="example-solution mt-3">{solution}</div>
                    )}
                </>
            )}
            
            {children}
        </div>
    );
};

// --- Sub-componente para renderizar un único ejercicio ---
const ExerciseCard = ({ exercise }) => {
  const [showSolution, setShowSolution] = useState(false);
  const { canViewSolution, hasExercisesLeft } = useContentInteraction();

  if (!exercise) return null;

  const handleToggleSolution = async () => {
    if (showSolution) {
      // Si ya está visible, solo ocultarla
      setShowSolution(false);
      return;
    }

    // Verificar si puede ver la solución
    const canView = await canViewSolution();
    if (canView) {
      setShowSolution(true);
    }
  };

  return (
    <div className="exercise-card">
      <h5 className="exercise-title">{exercise.title}</h5>
      <p className="exercise-statement"><strong>Enunciado:</strong> {exercise.enunciado}</p>
      
      <button 
        onClick={handleToggleSolution} 
        className="btn btn-primary btn-sm mt-2"
        disabled={!hasExercisesLeft && !showSolution}
      >
        {showSolution ? 'Ocultar Solución' : 'Ver Solución'}
      </button>

      {showSolution && (
        <div className="exercise-solution mt-3">
          <strong>Solución:</strong>
            <ol className="solution-steps">
              {exercise.solution.steps.map((step, i) => {
                const looksLikeLatex = /\\[a-zA-Z]+|\\frac|\\times|\\sqrt|\$.*\$/g.test(step);
                if (looksLikeLatex) {
                  const html = katex.renderToString(step.replace(/^\$|\$$/g, ''), {
                    throwOnError: false,
                    displayMode: false
                  });
                  return (
                    <li key={i}>
                      <span className="katex" dangerouslySetInnerHTML={{ __html: html }} />
                    </li>
                  );
                }
                return (<li key={i}>{step}</li>);
              })}
            </ol>
          <p className="solution-result">{exercise.solution.result}</p>
        </div>
      )}
    </div>
  );
};

// --- Componente para mostrar ejercicios sin fórmulas ---
export const ExercisesSection = ({ exercises = [], groupId, title = "Ejercicios de Práctica" }) => {
  const [showExercises, setShowExercises] = useState(false);

  // Filtra los ejercicios para el grupo actual si se proporciona groupId
  const relevantExercises = groupId 
    ? exercises.filter(ex => ex.groupId === groupId)
    : exercises;

  if (!relevantExercises || relevantExercises.length === 0) return null;

  return (
    <div className="exercises-section-container">
      <div className="exercises-toggle-button">
        <button 
          onClick={() => setShowExercises(!showExercises)} 
          className="btn btn-success btn-lg"
        >
          {showExercises ? '📚 Ocultar Ejercicios' : '📚 Ver Ejercicios de Práctica'}
        </button>
      </div>

      {showExercises && (
        <div className="exercises-card">
          <h2 className="exercises-section-title">{title}</h2>
          {relevantExercises.map(ex => (
            <ExerciseCard key={ex.id} exercise={ex} />
          ))}
        </div>
      )}
    </div>
  );
};

export const Formula = ({ expression, description, complementary = [], calculatorId, definitions, exercises = [], donde, children }) => {
  const [showComplementary, setShowComplementary] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [openToDefinitionId, setOpenToDefinitionId] = useState(null);
  const [showExercises, setShowExercises] = useState(false);

  // Complementary calculators to render automatically (like MRU)
  const complementaryCalculators = complementary
    .filter(comp => comp.definitionId && (comp.showCalculator === true || comp.showCalculator === undefined))
    .map(comp => {
      if (!definitions) return null;
      const calcDef = definitions.find(def => def.id === comp.definitionId);
      if (!calcDef) return null;
      return (
        <div key={comp.definitionId} style={{ marginTop: 16, marginBottom: 8 }}>
          <Formula
            expression={calcDef.formula}
            description={calcDef.title}
            calculatorId={calcDef.groupId}
            definitions={definitions}
            exercises={exercises}
          />
        </div>
      );
    });

  // Hook para controlar el uso
  const { hasCalculationsLeft, hasExercisesLeft } = useContentInteraction();

  // Filtra las definiciones de calculadora para el grupo actual
  const getCalculatorDefinitions = () => {
    if (!definitions || !calculatorId) return [];
    return definitions.filter(def => def.groupId === calculatorId);
  };

  // Filtra los ejercicios para el grupo actual
  const relevantExercises = exercises.filter(ex => ex.groupId === calculatorId);

  const calculatorDefinitions = getCalculatorDefinitions();

  // Backwards compatibility: if `expression` prop is not provided, allow passing
  // the LaTeX string as children: <Formula>{"v = ..."}</Formula>
  const expr = expression ?? (typeof children === 'string' ? children : undefined);

  // Normalize LaTeX input to avoid double-wrapping and formatting issues.
  const normalizeLatex = (input) => {
    if (!input && input !== 0) return '';
    const s = String(input).trim();

    // If already contains explicit delimiters or common LaTeX display markers,
    // return as-is to avoid wrapping twice.
    if (s.startsWith('$$') || s.startsWith('$') || s.startsWith('\\(') || s.startsWith('\\[')) {
      return s;
    }

    // Otherwise, wrap as display math.
    return `$$${s}$$`;
  };

  // Manejador para abrir calculadora (sin contar uso)
  const handleOpenCalculator = () => {
    // Reset any direct-open attempt
    setOpenToDefinitionId(null);
    setShowCalculator(!showCalculator);
  };

  // Manejador para abrir ejercicios (siempre permitido)
  const handleOpenExercises = () => {
    setShowExercises(!showExercises);
  };

  return (
    <div className="formula-container">
      <div className="formula-expression">
        <Latex>{normalizeLatex(expr)}</Latex>
      </div>
      {description && <p className="formula-description">{description}</p>}
      
      {donde && Object.keys(donde).length > 0 && (
        <div className="formula-donde">
          <strong>Donde:</strong>
          <ul className="donde-list">
            {Object.entries(donde).map(([variable, descripcion], index) => (
              <li key={index}>
                <Latex>{`$${variable}$`}</Latex>: {descripcion}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="formula-actions">
        {complementary.length > 0 && (
          <button onClick={() => setShowComplementary(!showComplementary)} className="btn btn-secondary">
            {showComplementary ? 'Ocultar Despejes' : 'Ver Despejes'}
          </button>
        )}
        {relevantExercises.length > 0 && (
            <button onClick={handleOpenExercises} className="btn btn-success">
                {showExercises ? 'Ocultar Ejercicios' : 'Ver Ejercicios'}
            </button>
        )}
        {calculatorDefinitions && calculatorDefinitions.length > 0 && (
          <button 
            onClick={handleOpenCalculator} 
            className="btn btn-info"
            disabled={!hasCalculationsLeft && !showCalculator}
          >
            {showCalculator ? 'Cerrar Calculadora' : 'Abrir Calculadora'}
          </button>
        )}
      </div>

      {showComplementary && (
        <div className="complementary-formulas">
          <h4 className="complementary-title">Fórmulas Complementarias (Despejes)</h4>
          {complementary.map((comp, index) => (
            <div key={index} className="complementary-formula-item">
              {comp.description && <p className="formula-description">{comp.description}</p>}
              <div className="formula-expression">
                <Latex>{normalizeLatex(comp.expression)}</Latex>
              </div>
              {comp.definitionId && (
                <div className="mt-1">
                  <button
                    className="btn btn-link"
                    onClick={() => { setOpenToDefinitionId(comp.definitionId); setShowCalculator(true); }}
                  >
                    Abrir calculadora
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {showExercises && relevantExercises.length > 0 && (
          <div className="exercises-card">
              <h2 className="exercises-section-title">Ejercicios de Práctica</h2>
              {relevantExercises.map(ex => (
                  <ExerciseCard key={ex.id} exercise={ex} />
              ))}
          </div>
      )}

      {showCalculator && calculatorDefinitions && calculatorDefinitions.length > 0 && (
        <div className="calculator-section">
          <CalculadoraCommon calculators={calculatorDefinitions} initialSelectedCalcId={openToDefinitionId} />
        </div>
      )}

      {/* Render complementary calculators automatically if present */}
      {complementaryCalculators && complementaryCalculators.length > 0 && complementaryCalculators}
    </div>
  );
};
