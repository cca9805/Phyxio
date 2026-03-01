import { TheorySection, Concept, Formula, Important, Example } from '../../../../../../components/TheoryV2';
import { definitions as circuitosCaDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Circuitos de corriente alterna (CA)",
  descripcion: "Estudio de circuitos ca",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CircuitosCaTeoria = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Componentes en Corriente Alterna (CA)">
        <p>En corriente alterna, además de las resistencias, existen dos tipos de componentes pasivos que almacenan energía: inductores y capacitores. Su oposición al paso de la corriente se denomina reactancia.</p>
        <Concept title="Reactancia Inductiva (XL)">
          <p>Es la oposición de un inductor al cambio de corriente. Aumenta linealmente con la frecuencia (f) y la inductancia (L).</p>
          <Formula 
            expression={String.raw`X_L = 2\pi f L`}
            description="Donde f es la frecuencia en Hertz (Hz) y L es la inductancia en Henrios (H)."
            calculatorId="reactancia-inductiva"
            definitions={circuitosCaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Inductancia (L)", expression: String.raw`L = \frac{X_L}{2\pi f}` },
              { description: "Calcular Frecuencia (f)", expression: String.raw`f = \frac{X_L}{2\pi L}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>X_L: Reactancia inductiva (Ω - Ohmios)</li>
            <li>f: Frecuencia (Hz - Hertz)</li>
            <li>L: Inductancia (H - Henrios)</li>
          </ul>
        </Concept>
        <Concept title="Reactancia Capacitiva (XC)">
          <p>Es la oposición de un capacitor al cambio de voltaje. Disminuye a medida que aumenta la frecuencia (f) y la capacitancia (C).</p>
          <Formula 
            expression={String.raw`X_C = \frac{1}{2\pi f C}`}
            description="Donde C es la capacitancia en Faradios (F)."
            calculatorId="reactancia-capacitiva"
            definitions={circuitosCaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Capacitancia (C)", expression: String.raw`C = \frac{1}{2\pi f X_C}` },
              { description: "Calcular Frecuencia (f)", expression: String.raw`f = \frac{1}{2\pi X_C C}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>X_C: Reactancia capacitiva (Ω - Ohmios)</li>
            <li>f: Frecuencia (Hz - Hertz)</li>
            <li>C: Capacitancia (F - Faradios)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Impedancia y Ley de Ohm en CA">
        <Concept title="Impedancia (Z)">
          <p>La impedancia es la oposición total de un circuito al flujo de corriente alterna. Es una magnitud compleja que combina la resistencia (R) y la reactancia total (X = XL - XC).</p>
          <Formula 
            expression={String.raw`Z = \sqrt{R^2 + (X_L - X_C)^2}`}
            description="La impedancia se mide en Ohmios (Ω). Representa la magnitud del fasor de impedancia."
            calculatorId="impedancia-serie"
            definitions={circuitosCaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Resistencia (R)", expression: String.raw`R = \sqrt{Z^2 - X^2}` },
              { description: "Calcular Reactancia Neta (X)", expression: String.raw`X = \sqrt{Z^2 - R^2}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>Z: Impedancia (Ω - Ohmios)</li>
            <li>R: Resistencia (Ω - Ohmios)</li>
            <li>X_L: Reactancia inductiva (Ω)</li>
            <li>X_C: Reactancia capacitiva (Ω)</li>
            <li>X: Reactancia neta = X_L - X_C (Ω)</li>
          </ul>
        </Concept>
        <Concept title="Ley de Ohm para CA">
          <p>Al igual que en CC, la Ley de Ohm se aplica en CA, pero usando la impedancia en lugar de la resistencia.</p>
          <Formula 
            expression={String.raw`V = I \cdot Z`}
            description="V e I son generalmente valores eficaces (RMS)."
            calculatorId="ley-ohm-ca"
            definitions={circuitosCaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Corriente (I)", expression: String.raw`I = \frac{V}{Z}` },
              { description: "Calcular Impedancia (Z)", expression: String.raw`Z = \frac{V}{I}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>V: Voltaje eficaz (RMS) (V - Voltios)</li>
            <li>I: Corriente eficaz (RMS) (A - Amperios)</li>
            <li>Z: Impedancia (Ω - Ohmios)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Potencia en Corriente Alterna">
        <p>En CA, la potencia es más compleja que en CC y se descompone en varios tipos.</p>
        <Concept title="Potencia Aparente (S)">
          <p>Es el producto del voltaje y la corriente eficaces (RMS). Representa la potencia total que la fuente entrega al circuito.</p>
          <Formula 
            expression={String.raw`S = V_{rms} \cdot I_{rms}`}
            description="Se mide en Volt-Amperios (VA)."
            calculatorId="potencia-aparente-ca"
            definitions={circuitosCaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Voltaje (Vrms)", expression: String.raw`V_{rms} = \frac{S}{I_{rms}}` },
              { description: "Calcular Corriente (Irms)", expression: String.raw`I_{rms} = \frac{S}{V_{rms}}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>S: Potencia aparente (VA - Volt-Amperios)</li>
            <li>V_rms: Voltaje eficaz (V - Voltios)</li>
            <li>I_rms: Corriente eficaz (A - Amperios)</li>
          </ul>
        </Concept>
        <Concept title="Potencia Activa (P) y Factor de Potencia (FP)">
          <p>La Potencia Activa (P) es la potencia real consumida por el circuito, disipada como calor. El Factor de Potencia (FP) es la fracción de la potencia aparente que se convierte en potencia activa.</p>
          <Formula 
            expression={String.raw`P = S \cdot \cos(\theta) = V_{rms} I_{rms} \cdot FP`}
            description="P se mide en Vatios (W). FP es el coseno del ángulo de fase θ entre voltaje y corriente."
            calculatorId="potencia-ca"
            definitions={circuitosCaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Factor de Potencia (FP)", expression: String.raw`FP = \frac{P}{S}` },
              { description: "Calcular Potencia Aparente (S)", expression: String.raw`S = \frac{P}{FP}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>P: Potencia activa (W - Vatios)</li>
            <li>S: Potencia aparente (VA - Volt-Amperios)</li>
            <li>θ: Ángulo de fase entre voltaje y corriente (grados o radianes)</li>
            <li>FP: Factor de potencia = cos(θ) (adimensional, 0 a 1)</li>
            <li>V_rms: Voltaje eficaz (V)</li>
            <li>I_rms: Corriente eficaz (A)</li>
          </ul>
        </Concept>
        <Important>Un FP de 1 (o 100%) indica la máxima eficiencia, donde toda la potencia aparente es consumida como potencia activa.</Important>
      </TheorySection>

      {/* Aplicaciones, Historia, Anécdotas y Resumen (orden obligatorio segun plantilla) */}
      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <ul>
          <li>Corrección del factor de potencia en industrias para reducir penalizaciones y mejorar eficiencia.</li>
          <li>Diseño de filtros RLC en audio y comunicaciones usando reactancias dependientes de frecuencia.</li>
          <li>Dimensionado de transformadores y protecciones en función de la potencia aparente S y corriente RMS.</li>
        </ul>
      </div>

      <div className="theory-history-section">
        <h2><span>📜</span> Historia</h2>
        <p>El análisis de corriente alterna se formalizó con el uso de fasores y números complejos a finales del siglo XIX, mejorando el tratamiento de impedancias y fases en ingeniería eléctrica.</p>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas y curiosidades</h2>
        <p>En sistemas de distribución antiguos, la mala gestión del factor de potencia provocaba pérdidas económicas importantes y obligó a estandarizar prácticas de compensación con bancos de condensadores.</p>
      </div>

      <div className="formula-card">
        <h3 className="concept-title">Resumen</h3>
        <div className="concept-body">
          <p>Resumen rápido: X_L = 2πfL; X_C = 1/(2πfC); Z = √(R² + (X_L - X_C)²); S = V_rms·I_rms; P = S·FP.</p>
        </div>
      </div>
    </>
  );
};

export default CircuitosCaTeoria;
