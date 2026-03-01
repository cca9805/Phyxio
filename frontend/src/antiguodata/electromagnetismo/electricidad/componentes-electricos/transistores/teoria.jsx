import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions as transistoresDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Transistores",
  descripcion: "Componentes que controlan y amplifican señales eléctricas",
  isTheoryOnly: false,
  educationLevel: "ESO",
  levels: ['ESO']
};

const Transistores = ({ exercises }) => {
  return (
    <>
      <Concept title="¿Qué es un transistor?" color="blue" icon="🎛️">
        <p>
          Un transistor es un componente semiconductor que puede 
          controlar una corriente grande con una corriente pequeña. 
          Es como un grifo electrónico: una pequeña señal controla un flujo grande de corriente.
        </p>
        <p>
          Los transistores son los componentes más importantes de la electrónica moderna. 
          Tu móvil, ordenador y casi cualquier dispositivo electrónico contienen millones 
          o miles de millones de transistores.
        </p>
        <div className="destacado">
          <p>
            💡 Idea clave: Un transistor BJT tiene tres terminales: 
            Base (control), Colector (entrada) y Emisor (salida).
          </p>
        </div>
      </Concept>

      <TheorySection title="Ganancia de Corriente">
        <Concept title="Amplificación">
          <p>
            La ganancia (β o h_FE) indica cuánto amplifica el transistor:
          </p>
          <Formula 
            expression={String.raw`I_C = \beta \cdot I_B`}
            calculatorId="transistores"
            definitions={transistoresDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Ganancia (β)", expression: String.raw`\beta = \frac{I_C}{I_B}` },
              { description: "Calcular Corriente base (I_B)", expression: String.raw`I_B = \frac{I_C}{\beta}` }
            ]}
          />
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>I_C: Corriente de colector (A)</li>
            <li>β: Ganancia del transistor (adimensional)</li>
            <li>I_B: Corriente de base (A)</li>
          </ul>
          <p>Típicamente β = 100 a 300</p>
          <Example title="Control de LED" icon="💡">
            <p>
              Con un transistor de β=100, solo necesitamos 0.2 mA en la base para 
              controlar 20 mA en el LED. ¡Amplificación de 100 veces!
            </p>
          </Example>
        </Concept>

        <Concept title="Resistencia de base">
          <Formula 
            expression={String.raw`R_B = \frac{V_{in} - V_{BE}}{I_B}`}
            calculatorId="transistores"
            definitions={transistoresDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Voltaje entrada (V_in)", expression: String.raw`V_{in} = R_B \cdot I_B + V_{BE}` },
              { description: "Calcular Corriente base (I_B)", expression: String.raw`I_B = \frac{V_{in} - V_{BE}}{R_B}` }
            ]}
          />
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>R_B: Resistencia de base (Ω)</li>
            <li>V_in: Voltaje de entrada (V)</li>
            <li>V_BE: Voltaje base-emisor (típicamente 0.7V)</li>
            <li>I_B: Corriente de base (A)</li>
          </ul>
          <Important>
            <p>
              💡 Truco: Para saturación garantizada, usa una corriente 
              de base 3 veces mayor que la mínima necesaria.
            </p>
          </Important>
        </Concept>
      </TheorySection>



      <div className="theory-applications-section">
        <h3>🏠 Aplicaciones Cotidianas</h3>
        <div className="ejemplos-grid">
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">💻</span>
            <p>Procesadores: Miles de millones de transistores microscópicos</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">💾</span>
            <p>Memorias: Cada bit se almacena con transistores</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🎵</span>
            <p>Amplificadores: Amplifican señales de audio</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">⚙️</span>
            <p>Control de motores: Encienden/apagan con señales pequeñas</p>
          </div>
        </div>
      </div>

      <div className="theory-history-section">
        <h3>💻 Historia: Transistores en Procesadores</h3>
        <p>
          Los procesadores modernos son el ejemplo más impresionante del uso de transistores:
        </p>
        <div className="conceptos-fundamentales">
          <div className="concepto-fundamental">
            <h4>1971 - Intel 4004</h4>
            <p>2,300 transistores</p>
          </div>
          <div className="concepto-fundamental">
            <h4>2010 - Core i7</h4>
            <p>1,170 millones</p>
          </div>
          <div className="concepto-fundamental">
            <h4>2023 - Apple M3</h4>
            <p>92,000 millones</p>
          </div>
        </div>
        <p>
          Los transistores modernos miden solo 3 nanómetros. 
          ¡Cabrían 30,000 en el grosor de un cabello humano!
        </p>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>Los transistores controlan corrientes grandes con señales pequeñas</li>
          <li>La ganancia (β) típica es 100-300</li>
          <li>Se usan como interruptores o amplificadores</li>
          <li>Son la base de procesadores y memorias</li>
          <li>Un procesador moderno tiene miles de millones de ellos</li>
        </ul>
      </div>
    </>
  );
};

export default Transistores;
