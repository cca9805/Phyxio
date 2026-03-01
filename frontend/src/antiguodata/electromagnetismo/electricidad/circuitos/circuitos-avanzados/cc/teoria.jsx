import { TheorySection, Concept, Formula, Important, Example } from '../../../../../../components/TheoryV2';
import { definitions as circuitosDefinitions } from './definitions.js';

export const metadata = {
  titulo: 'Circuitos CC - Avanzado',
  descripcion: 'Contenido avanzado sobre análisis de circuitos en corriente continua (Thévenin/Norton avanzados, Laplace, estado-espacio).',
  isTheoryOnly: false,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

const CircuitosCCAvanzado = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Objetivo">
        <p>Contenido universitario para el análisis avanzado de circuitos en corriente continua: equivalentes de circuito en presencia de fuentes dependientes, transformada de Laplace para transitorios, representación en espacio de estados y técnicas simbólicas para resolución.</p>
      </TheorySection>

      <TheorySection title="Thévenin y Norton con fuentes dependientes">
        <p>Los equivalentes de Thévenin y Norton se obtienen mediante la combinación de fuentes y resistencias vistas desde un par de terminales. Con fuentes dependientes, es necesario mantener las variables de control cuando se calculan las resistencias equivalentes: se suelen fijar las fuentes independientes a cero y analizar la respuesta a una fuente de prueba.</p>
        <Concept title="Procedimiento">
          <ul>
            <li>Apagar fuentes independientes (fuentes de tensión → cortocircuito, fuentes de corriente → circuito abierto).</li>
            <li>Aplicar una fuente de prueba en los terminales para calcular la resistencia equivalente si hay elementos dependientes.</li>
            <li>Calcular la tensión a circuito abierto (Vth) y la corriente de cortocircuito (Isc) para obtener Rth = Vth / Isc.</li> 
          </ul>
        </Concept>
        <Example title="Ejemplo rápido">
          <p>Considere un circuito con una fuente dependiente controlada por la corriente en una rama interna: para obtener Rth colocamos una fuente de prueba y resolvemos por análisis de nodos/ mallas llevando la dependencia en la ecuación.</p>
        </Example>
        <Concept title="Cálculos">
          <Formula
            expression={String.raw`V_{th} = V_{oc};\quad R_{th} = \frac{V_{oc}}{I_{sc}}`}
            calculatorId="thevenin-from-voc-isc"
            definitions={circuitosDefinitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>V_th: Voltaje de Thévenin (V)</li>
            <li>V_oc: Voltaje de circuito abierto (V)</li>
            <li>R_th: Resistencia de Thévenin (Ω)</li>
            <li>I_sc: Corriente de cortocircuito (A)</li>
          </ul>

          <Formula
            expression={String.raw`V_{th} = I_{sc} \cdot R_{th}`}
            calculatorId="norton-to-thevenin"
            definitions={circuitosDefinitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>V_th: Voltaje de Thévenin (V)</li>
            <li>I_sc: Corriente de cortocircuito (A)</li>
            <li>R_th: Resistencia de Thévenin (Ω)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Transformada de Laplace y análisis de transitorios">
        <p>La transformada de Laplace permite resolver ecuaciones diferenciales lineales convirtiéndolas en algebraicas en la variable compleja s. Para circuitos RLC obtenemos la función de transferencia y la respuesta completa combinando la respuesta natural y la respuesta forzada.</p>
        <p>Transformadas: I(s)=ℒ{'{'}i(t){'}'}, V(s)=Z(s)I(s); Z_R=R, Z_L=sL, Z_C=1/(sC).</p>
        <Concept title="Pasos para resolver un transitorio">
          <ol>
            <li>Transformar esquemas a dominio s (impedancias equivalentes).</li>
            <li>Incluir condiciones iniciales como fuentes equivalentes (por ejemplo, tensión inicial en un capacitor se modela por una fuente en serie en s).</li>
            <li>Resolver el circuito algebraicamente en s y aplicar transformada inversa para obtener i(t), v(t).</li>
          </ol>
        </Concept>
      </TheorySection>

      <TheorySection title="Modelado en espacio de estados">
        <p>Para sistemas con múltiples energías almacenadas (varios inductores y condensadores) la representación en espacio de estados es útil. Se escribe ẋ=Ax+Bu, y=Cx+Du donde x contiene variables de estado (corrientes de inductores, tensiones en condensadores).</p>
        <Concept title="Ventajas">
          <ul>
            <li>Manejo directo de sistemas multivariable.</li>
            <li>Facilita análisis de estabilidad y diseño por métodos modernos (observadores, controladores).</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Técnicas simbólicas y análisis paramétrico">
        <p>El uso de álgebra simbólica (por ejemplo con expresiones en s) permite obtener resultados generales en términos de parámetros R, L, C, útiles para estudio de polos, ceros y condiciones límite (p. ej. L→0, C→∞).</p>
      </TheorySection>

      <TheorySection title="Ejemplos resueltos">
        <Example title="Transitorio en RLC serie">
          <p>Obtener la respuesta i(t) para un RLC serie con tensión inicial en el condensador: se transforma a s, se resuelve por mallas y se aplica la transformada inversa considerando la naturaleza de las raíces del polinomio característico (subamortiguado, críticamente amortiguado, sobreamortiguado).</p>
        </Example>
        <Example title="Equivalente de Thévenin con fuente dependiente">
          <p>Se muestra el procedimiento completo con la fuente de prueba y la obtención de Rth y Vth.</p>
        </Example>
      </TheorySection>
      
      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <p>Aplicaciones en instrumentación, modelado de sensores y diseño de analizadores de potencia. Uso de equivalentes de Thévenin/Norton para simplificar redes y diseñar etapas de medición.</p>
      </div>

      {/* Hechos históricos */}
      <div className="theory-history-section">
        <h2><span>📜</span> Historia</h2>
        <p>Breve nota histórica: Thévenin y Norton desarrollaron herramientas de equivalencia de circuitos en el siglo XIX/XX; estas transformaciones se consolidaron con el avance de la teoría de circuitos y el análisis de redes eléctricas.</p>
      </div>

      {/* Datos anecdóticos */}
      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas y curiosidades</h2>
        <p>Curiosidad: estas transformaciones son especialmente útiles en instrumentación cuando se modelan fuentes internas de sensores y se simplifica la estimación de sensibilidad frente a cargas.</p>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3 className="concept-title">Resumen</h3>
        <div className="concept-body">
          <p>El estudiante debe saber cómo obtener equivalentes de Thévenin/Norton, cómo usar la transformada de Laplace para transitorios y cuándo emplear modelos en espacio de estados para sistemas multivariable.</p>
        </div>
      </div>
    </>
  );
};

export default CircuitosCCAvanzado;
