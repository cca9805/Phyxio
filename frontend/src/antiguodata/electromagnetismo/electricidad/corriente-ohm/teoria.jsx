import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Corriente y Ley de Ohm",
  descripcion: "Corriente eléctrica, resistencia y la Ley de Ohm",
  isTheoryOnly: false,
  educationLevel: "ESO",
  levels: ['ESO']
};

const CorrienteOhmTheory = ({ exercises }) => {

  return (
    <>
      <TheorySection title="Corriente Eléctrica">
        <Concept title="¿Qué es la Corriente Eléctrica?">
          <p>La corriente eléctrica es el flujo dirigido y continuo de portadores de carga eléctrica, como electrones en un conductor. Para que este flujo ocurra, es necesaria una diferencia de potencial (voltaje) entre dos puntos, que actúa como una "fuerza" que impulsa a las cargas a moverse.</p>
          <p>La intensidad de la corriente (I) se define como la cantidad de carga neta (ΔQ) que atraviesa una sección transversal del conductor en una unidad de tiempo (Δt).</p>
          <Formula 
            expression={String.raw`I = \frac{\Delta Q}{\Delta t}`}
            description="La unidad de corriente en el Sistema Internacional es el Amperio (A), que equivale a un Culombio por segundo (1 A = 1 C/s)."
            calculatorId="definicion_corriente"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Carga (ΔQ)", expression: String.raw`\Delta Q = I \cdot \Delta t` },
              { description: "Calcular Tiempo (Δt)", expression: String.raw`\Delta t = \frac{\Delta Q}{I}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>I: Intensidad de corriente eléctrica (A - Amperios)</li>
            <li>ΔQ: Carga eléctrica que atraviesa la sección (C - Culombios)</li>
            <li>Δt: Intervalo de tiempo (s - segundos)</li>
          </ul>
          
          <Important>Por convención, el sentido de la corriente es el del flujo de cargas positivas, es decir, del punto de mayor potencial al de menor potencial. Esto es opuesto al flujo real de los electrones en los metales.</Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Resistencia y Ley de Ohm">
        <Concept title="Ley de Ohm">
          <p>La Ley de Ohm describe la relación fundamental entre voltaje, corriente y resistencia en muchos materiales. Establece que, para un conductor a temperatura constante, la diferencia de potencial (V) aplicada es directamente proporcional a la corriente (I) que circula por él.</p>
          <p>La constante de esta proporcionalidad es la resistencia eléctrica (R), que representa la oposición del material al paso de la corriente.</p>
          <Formula 
            expression={String.raw`V = I \cdot R`}
            description="La resistencia se mide en Ohmios (Ω). Un material tiene una resistencia de 1 Ω si una diferencia de potencial de 1 V produce una corriente de 1 A."
            calculatorId="ley_ohm"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Corriente (I)", expression: String.raw`I = \frac{V}{R}` },
              { description: "Calcular Resistencia (R)", expression: String.raw`R = \frac{V}{I}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>V: Diferencia de potencial o voltaje (V - Voltios)</li>
            <li>I: Intensidad de corriente (A - Amperios)</li>
            <li>R: Resistencia eléctrica (Ω - Ohmios)</li>
          </ul>
          
          <Example>No todos los materiales obedecen la Ley de Ohm (por ejemplo, los semiconductores). Aquellos que sí lo hacen (como la mayoría de los metales en un rango de temperaturas) se denominan materiales óhmicos.</Example>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h3>🏠 Aplicaciones Cotidianas</h3>
        <div className="ejemplos-grid">
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">💡</span>
            <p>Bombillas: La corriente fluye por el filamento generando luz</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🔌</span>
            <p>Electrodomésticos: Todos funcionan con corriente eléctrica</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🔋</span>
            <p>Baterías: Proporcionan corriente continua a dispositivos portátiles</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">⚡</span>
            <p>Instalaciones eléctricas: La Ley de Ohm permite calcular corrientes y voltajes</p>
          </div>
        </div>
      </div>

      <div className="theory-history-section">
        <h3>📜 Historia</h3>
        <p>
          La Ley de Ohm fue formulada por el físico alemán Georg Simon Ohm en 1827. 
          Inicialmente, su trabajo fue recibido con escepticismo por la comunidad científica, 
          pero con el tiempo se convirtió en uno de los pilares fundamentales de la teoría eléctrica.
        </p>
        <p>
          Ohm realizó experimentos meticulosos con diferentes materiales y longitudes de cables, 
          estableciendo la relación matemática entre voltaje, corriente y resistencia que hoy 
          lleva su nombre.
        </p>
      </div>

      <div className="theory-anecdotes-section">
        <h3>💡 Anécdotas</h3>
        <p>
          Cuando Ohm publicó su ley en 1827, el Ministerio de Educación de Prusia criticó 
          duramente su trabajo, considerándolo "especulaciones inútiles". Ohm incluso perdió 
          su puesto de profesor como consecuencia.
        </p>
        <p>
          Sin embargo, años después, la Royal Society de Londres le otorgó la Medalla Copley 
          en 1841, reconociendo finalmente la importancia de su descubrimiento. Hoy, la unidad 
          de resistencia eléctrica lleva su nombre: el Ohmio (Ω).
        </p>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>La corriente eléctrica es el flujo de cargas eléctricas a través de un conductor</li>
          <li>Se mide en Amperios (A) y se calcula como I = ΔQ / Δt</li>
          <li>La Ley de Ohm establece que V = I × R</li>
          <li>La resistencia (R) representa la oposición al paso de la corriente</li>
          <li>Esta ley es fundamental para el diseño de circuitos eléctricos</li>
        </ul>
      </div>
    </>
  );
};

export default CorrienteOhmTheory;
