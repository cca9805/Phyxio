import { TheorySection, Concept, Formula, Important, Example } from '../../../../../../components/TheoryV2';
import { definitions as transitoriosDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Transitorios",
  descripcion: "Estudio de transitorios",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const TransitoriosTeoria = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Fenómenos Transitorios en Circuitos">
        <p>Los fenómenos transitorios ocurren en los circuitos de CC cuando se produce un cambio brusco, como cerrar o abrir un interruptor. La respuesta del circuito no es instantánea, sino que evoluciona desde un estado inicial a un estado final estable. Esto es debido a los elementos que almacenan energía: capacitores e inductores.</p>
      </TheorySection>

      <TheorySection title="La Constante de Tiempo (τ)">
        <p>La constante de tiempo (τ) es una medida de la rapidez con la que un circuito responde a un cambio. Indica el tiempo necesario para que la variable (voltaje o corriente) alcance aproximadamente el 63.2% de su cambio total.</p>
        <Concept title="Circuito RC">
          <p>En un circuito Resistencia-Capacitor, la constante de tiempo depende de la resistencia y la capacitancia totales vistas por el capacitor.</p>
          <Formula 
            expression={String.raw`\tau = R \cdot C`}
            description="Donde R es la resistencia en Ohmios (Ω) y C es la capacitancia en Faradios (F)."
            calculatorId="constante-tiempo-rc"
            definitions={transitoriosDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Resistencia (R)", expression: String.raw`R = \frac{\tau}{C}` },
              { description: "Calcular Capacitancia (C)", expression: String.raw`C = \frac{\tau}{R}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>τ: Constante de tiempo (s)</li>
            <li>R: Resistencia (Ω)</li>
            <li>C: Capacitancia (F)</li>
          </ul>
        </Concept>
        <Concept title="Circuito RL">
          <p>En un circuito Resistencia-Inductor, la constante de tiempo depende de la inductancia y la resistencia totales vistas por el inductor.</p>
          <Formula 
            expression={String.raw`\tau = \frac{L}{R}`}
            description="Donde L es la inductancia en Henrios (H) y R es la resistencia en Ohmios (Ω)."
            calculatorId="constante-tiempo-rl"
            definitions={transitoriosDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Inductancia (L)", expression: String.raw`L = \tau \cdot R` },
              { description: "Calcular Resistencia (R)", expression: String.raw`R = \frac{L}{\tau}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>τ: Constante de tiempo (s)</li>
            <li>L: Inductancia (H)</li>
            <li>R: Resistencia (Ω)</li>
          </ul>
        </Concept>
        <Important>Después de 5 constantes de tiempo (5τ), se considera que el circuito ha alcanzado su estado estable final.</Important>
      </TheorySection>

      <TheorySection title="Comportamiento del Capacitor">
        <Concept title="Carga de un Capacitor">
          <p>Cuando un capacitor inicialmente descargado se conecta a una fuente de voltaje a través de una resistencia, su voltaje aumenta exponencialmente.</p>
          <Formula 
            expression={String.raw`V_C(t) = V_f (1 - e^{-t/\tau})`}
            description="Vf es el voltaje de la fuente, t es el tiempo y τ es la constante de tiempo RC."
            calculatorId="comportamiento-capacitor-carga"
            definitions={transitoriosDefinitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular Voltaje Final (Vf)", expression: String.raw`V_f = \frac{V_C(t)}{1 - e^{-t/\tau}}` },
                { description: "Calcular Tiempo (t)", expression: String.raw`t = -\tau \cdot \ln(1 - \frac{V_C(t)}{V_f})` },
                { description: "Calcular Constante de Tiempo (τ)", expression: String.raw`\tau = \frac{-t}{\ln(1 - \frac{V_C(t)}{V_f})}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>V_C(t): Voltaje en el capacitor en el tiempo t (V)</li>
            <li>V_f: Voltaje final de la fuente (V)</li>
            <li>t: Tiempo transcurrido (s)</li>
            <li>τ: Constante de tiempo RC (s)</li>
            <li>e: Número de Euler (≈ 2.718)</li>
          </ul>
        </Concept>
        <Concept title="Descarga de un Capacitor">
          <p>Cuando un capacitor cargado se desconecta de la fuente y se conecta a una resistencia, su voltaje disminuye exponencialmente.</p>
          <Formula 
            expression={String.raw`V_C(t) = V_0 \cdot e^{-t/\tau}`}
            description="V0 es el voltaje inicial del capacitor."
            calculatorId="comportamiento-capacitor-descarga"
            definitions={transitoriosDefinitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular Voltaje Inicial (V0)", expression: String.raw`V_0 = \frac{V_C(t)}{e^{-t/\tau}}` },
                { description: "Calcular Tiempo (t)", expression: String.raw`t = -\tau \cdot \ln(\frac{V_C(t)}{V_0})` },
                { description: "Calcular Constante de Tiempo (τ)", expression: String.raw`\tau = \frac{-t}{\ln(\frac{V_C(t)}{V_0})}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>V_C(t): Voltaje en el capacitor en el tiempo t (V)</li>
            <li>V_0: Voltaje inicial del capacitor (V)</li>
            <li>t: Tiempo transcurrido (s)</li>
            <li>τ: Constante de tiempo RC (s)</li>
            <li>e: Número de Euler (≈ 2.718)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Comportamiento del Inductor">
        <Concept title="Carga (o Energización) de un Inductor">
          <p>Cuando un inductor se conecta a una fuente a través de una resistencia, la corriente que pasa por él aumenta exponencialmente hasta un valor final.</p>
          <Formula 
            expression={String.raw`I_L(t) = I_f (1 - e^{-t/\tau})`}
            description="If es la corriente final (V/R) y τ es la constante de tiempo RL."
            calculatorId="comportamiento-inductor-carga"
            definitions={transitoriosDefinitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular Corriente Final (If)", expression: String.raw`I_f = \frac{I_L(t)}{1 - e^{-t/\tau}}` },
                { description: "Calcular Tiempo (t)", expression: String.raw`t = -\tau \cdot \ln(1 - \frac{I_L(t)}{I_f})` },
                { description: "Calcular Constante de Tiempo (τ)", expression: String.raw`\tau = \frac{-t}{\ln(1 - \frac{I_L(t)}{I_f})}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>I_L(t): Corriente en el inductor en el tiempo t (A)</li>
            <li>I_f: Corriente final = V/R (A)</li>
            <li>t: Tiempo transcurrido (s)</li>
            <li>τ: Constante de tiempo RL (s)</li>
            <li>e: Número de Euler (≈ 2.718)</li>
          </ul>
        </Concept>
        <Concept title="Descarga (o Desenergización) de un Inductor">
          <p>Cuando la fuente de voltaje se retira de un circuito RL, la energía almacenada en el inductor se disipa a través de la resistencia, y la corriente disminuye exponencialmente.</p>
          <Formula 
            expression={String.raw`I_L(t) = I_0 \cdot e^{-t/\tau}`}
            description="I0 es la corriente inicial que fluía por el inductor y τ es la constante de tiempo RL."
            calculatorId="comportamiento-inductor-descarga"
            definitions={transitoriosDefinitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular Corriente Inicial (I0)", expression: String.raw`I_0 = \frac{I_L(t)}{e^{-t/\tau}}` },
                { description: "Calcular Tiempo (t)", expression: String.raw`t = -\tau \cdot \ln(\frac{I_L(t)}{I_0})` },
                { description: "Calcular Constante de Tiempo (τ)", expression: String.raw`\tau = \frac{-t}{\ln(\frac{I_L(t)}{I_0})}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>I_L(t): Corriente en el inductor en el tiempo t (A)</li>
            <li>I_0: Corriente inicial en el inductor (A)</li>
            <li>t: Tiempo transcurrido (s)</li>
            <li>τ: Constante de tiempo RL (s)</li>
            <li>e: Número de Euler (≈ 2.718)</li>
          </ul>
        </Concept>
        <Important>El voltaje en un inductor es máximo al inicio (t=0) y decae a cero, mientras que la corriente es cero al inicio y aumenta hasta su valor máximo.</Important>
      </TheorySection>
      
      {/* Aplicaciones, Historia, Anécdotas y Resumen (orden obligatorio segun plantilla) */}
      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <p>Los transitorios son relevantes en el diseño de filtros, circuitos de temporización, fuentes de alimentación y en cualquier sistema donde se necesite conocer la respuesta ante conmutaciones rápidas.</p>
      </div>

      <div className="theory-history-section">
        <h2><span>📜</span> Historia</h2>
        <p>El estudio de transitorios se desarrolló con el avance del análisis de circuitos y la teoría de redes en el siglo XIX y XX, cuando se comprendió el papel de la capacitancia y la inductancia en la dinámica temporal de los circuitos eléctricos.</p>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas y curiosidades</h2>
        <p>Ingenieros en radio y telecomunicaciones perfeccionaron técnicas para gestionar transitorios en transmisores y receptores, lo que permitió mejores arranques y menor distorsión en señales amplificadas.</p>
      </div>

      <div className="formula-card">
        <h3 className="concept-title">Resumen</h3>
        <div className="concept-body">
          <ul>
            <li>La constante de tiempo τ caracteriza la velocidad de respuesta en RC y RL</li>
            <li>En RC: τ = R · C. En RL: τ = L / R</li>
            <li>Las respuestas de carga y descarga son exponenciales; después de ~5τ el sistema está cerca del estado final</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TransitoriosTeoria;
