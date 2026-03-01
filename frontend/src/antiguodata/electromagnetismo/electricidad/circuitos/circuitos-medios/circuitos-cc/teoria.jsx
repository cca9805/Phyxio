import { TheorySection, Concept, Formula, Important, Example } from '../../../../../../components/TheoryV2';
import { definitions as circuitosDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Circuitos de corriente continua (CC)",
  descripcion: "Estudio de circuitos cc",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CircuitosCCTeoria = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Conceptos Fundamentales de Circuitos de CC">
        <Concept title="Ley de Ohm">
          <p>La Ley de Ohm es el pilar de los circuitos eléctricos. Establece que la diferencia de potencial (V) en un conductor es directamente proporcional a la corriente (I) que lo atraviesa y a su resistencia (R).</p>
          <Formula 
            expression={String.raw`V = I \cdot R`}
            description="Donde V es el voltaje (Voltios), I es la corriente (Amperios) y R es la resistencia (Ohmios, Ω)."
            calculatorId="ley-de-ohm"
            definitions={circuitosDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Corriente (I)", expression: String.raw`I = \frac{V}{R}` },
              { description: "Calcular Resistencia (R)", expression: String.raw`R = \frac{V}{I}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>V: Voltaje o diferencia de potencial (V - Voltios)</li>
            <li>I: Corriente eléctrica (A - Amperios)</li>
            <li>R: Resistencia eléctrica (Ω - Ohmios)</li>
          </ul>
        </Concept>
        <Concept title="Potencia Eléctrica">
          <p>La potencia (P) es la velocidad a la que se consume la energía en un circuito. Se calcula como el producto del voltaje y la corriente.</p>
          <Formula 
            expression={String.raw`P = V \cdot I`}
            description="La potencia se mide en Vatios (W). Usando la Ley de Ohm, también puede expresarse como P = I²R o P = V²/R."
            calculatorId="potencia-electrica"
            definitions={circuitosDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Voltaje (V)", expression: String.raw`V = \frac{P}{I}` },
              { description: "Calcular Corriente (I)", expression: String.raw`I = \frac{P}{V}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>P: Potencia eléctrica (W - Vatios)</li>
            <li>V: Voltaje (V - Voltios)</li>
            <li>I: Corriente (A - Amperios)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Asociación de Resistencias">
        <p>Las resistencias en un circuito pueden combinarse de dos maneras principales: en serie o en paralelo, para obtener una resistencia equivalente (Req).</p>
        <Concept title="Resistencias en Serie">
          <p>Cuando las resistencias se conectan una tras otra, la resistencia total es la suma de todas las resistencias individuales. La corriente es la misma a través de todas ellas.</p>
          <Formula 
            expression={String.raw`R_{eq} = R_1 + R_2 + ... + R_n`}
            calculatorId="asociacion-resistencias-serie"
            definitions={circuitosDefinitions}
            exercises={exercises}
          />
          
          <p>Donde:</p>
          <ul>
            <li>R_eq: Resistencia equivalente (Ω)</li>
            <li>R₁, R₂, ..., R_n: Resistencias individuales (Ω)</li>
            <li>n: Número de resistencias en serie</li>
          </ul>
        </Concept>
        <Concept title="Resistencias en Paralelo">
          <p>Cuando las resistencias se conectan en ramas separadas, el inverso de la resistencia total es la suma de los inversos de cada resistencia. El voltaje es el mismo en todas ellas.</p>
          <Formula 
            expression={String.raw`\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + ... + \frac{1}{R_n}`}
            calculatorId="asociacion-resistencias-paralelo"
            definitions={circuitosDefinitions}
            exercises={exercises}
          />
          
          <p>Donde:</p>
          <ul>
            <li>R_eq: Resistencia equivalente (Ω)</li>
            <li>R₁, R₂, ..., R_n: Resistencias individuales (Ω)</li>
            <li>n: Número de resistencias en paralelo</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Análisis de Circuitos Básicos">
        <Concept title="Divisor de Voltaje">
          <p>En un circuito en serie, el voltaje total se divide entre las resistencias. Esta fórmula permite calcular el voltaje (Vₓ) en una resistencia específica (Rₓ) sin calcular primero la corriente.</p>
          <Formula 
            expression={String.raw`V_x = V_T \cdot \frac{R_x}{R_{eq}}`}
            description="Donde V_T es el voltaje total y R_eq es la resistencia equivalente en serie."
            calculatorId="divisor-voltaje"
            definitions={circuitosDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Voltaje Total (VT)", expression: String.raw`V_T = V_x \cdot \frac{R_{eq}}{R_x}` },
              { description: "Calcular Resistencia (Rx)", expression: String.raw`R_x = R_{eq} \cdot \frac{V_x}{V_T}` },
              { description: "Calcular Resistencia Equivalente (Req)", expression: String.raw`R_{eq} = R_x \cdot \frac{V_T}{V_x}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>V_x: Voltaje en la resistencia específica (V)</li>
            <li>V_T: Voltaje total del circuito (V)</li>
            <li>R_x: Resistencia específica (Ω)</li>
            <li>R_eq: Resistencia equivalente total en serie (Ω)</li>
          </ul>
        </Concept>
        <Concept title="Divisor de Corriente">
          <p>En un circuito en paralelo, la corriente total se divide entre las ramas. Esta fórmula permite calcular la corriente (Iₓ) en una rama específica (Rₓ).</p>
          <Formula 
            expression={String.raw`I_x = I_T \cdot \frac{R_{eq}}{R_x}`}
            description="Donde I_T es la corriente total y R_eq es la resistencia equivalente en paralelo."
            calculatorId="divisor-corriente"
            definitions={circuitosDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Corriente Total (IT)", expression: String.raw`I_T = I_x \cdot \frac{R_x}{R_{eq}}` },
              { description: "Calcular Resistencia de Rama (Rx)", expression: String.raw`R_x = R_{eq} \cdot \frac{I_T}{I_x}` },
              { description: "Calcular Resistencia Equivalente (Req)", expression: String.raw`R_{eq} = R_x \cdot \frac{I_x}{I_T}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>I_x: Corriente en la rama específica (A)</li>
            <li>I_T: Corriente total del circuito (A)</li>
            <li>R_x: Resistencia de la rama específica (Ω)</li>
            <li>R_eq: Resistencia equivalente total en paralelo (Ω)</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Aplicaciones, Historia, Anécdotas y Resumen (orden obligatorio segun plantilla) */}
      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <ul>
          <li>Dimensionado de resistencias y fuentes en electrónica básica.</li>
          <li>Diseño de divisores de voltaje para sensores y referencias.</li>
          <li>Cálculo de disipación de potencia en resistencias y protección térmica.</li>
        </ul>
      </div>

      <div className="theory-history-section">
        <h2><span>📜</span> Historia</h2>
        <p>La Ley de Ohm fue formulada por Georg Simon Ohm en 1827 y es la base del análisis de circuitos eléctricos desde entonces.</p>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas y curiosidades</h2>
        <p>El uso de divisores de voltaje es una técnica tan antigua como los primeros circuitos electrónicos; es una herramienta básica en instrumentación y electrónica analógica.</p>
      </div>

      <div className="formula-card">
        <h3 className="concept-title">Resumen</h3>
        <div className="concept-body">
          <ul>
            <li>V = I·R (Ohm)</li>
            <li>P = V·I = I²R = V²/R</li>
            <li>R_eq (serie) = Σ R_i ; 1/R_eq (paralelo) = Σ 1/R_i</li>
            <li>Divisor de voltaje y de corriente para análisis rápido</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CircuitosCCTeoria;
