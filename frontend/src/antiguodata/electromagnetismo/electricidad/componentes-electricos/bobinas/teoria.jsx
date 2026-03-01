import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions as bobinasDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Bobinas",
  descripcion: "Componentes que crean campos magnéticos con corriente eléctrica",
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const Bobinas = ({ exercises }) => {
  return (
    <>
      <Concept title="¿Qué es una bobina?" color="blue" icon="🌀">
        <p>
          Una bobina (o inductor) es un componente formado por un cable enrollado en espiral. Cuando pasa corriente por ella, crea un campo magnético.
        </p>
        <p>
          Es como un electroimán: mientras circula corriente, se comporta como un imán. Cuando la corriente cambia, la bobina se opone a ese cambio.
        </p>
        <div className="destacado">
          <p>
            💡 Idea clave: Las bobinas almacenan energía en un campo magnético, a diferencia de los condensadores que la almacenan en un campo eléctrico.
          </p>
        </div>
      </Concept>

      <TheorySection title="Inductancia y Energía">
        <Concept title="Energía almacenada">
          <Formula 
            expression={String.raw`E = \frac{1}{2} L I^2`}
            calculatorId="bobinas"
            definitions={bobinasDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Inductancia (L)", expression: String.raw`L = \frac{2E}{I^2}` },
              { description: "Calcular Corriente (I)", expression: String.raw`I = \sqrt{\frac{2E}{L}}` }
            ]}
          />
          <p>Donde:</p>
          <ul>
            <li>L: Inductancia (henrios, H)</li>
            <li>I: Corriente (amperios, A)</li>
            <li>E: Energía almacenada (julios, J)</li>
          </ul>
        </Concept>

        <Concept title="Reactancia inductiva">
          <p>
            En corriente alterna, las bobinas se oponen al paso de corriente con una reactancia inductiva:
          </p>
          <Formula 
            expression={String.raw`X_L = 2\pi f L`}
            calculatorId="bobinas"
            definitions={bobinasDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Inductancia (L)", expression: String.raw`L = \frac{X_L}{2\pi f}` },
              { description: "Calcular Frecuencia (f)", expression: String.raw`f = \frac{X_L}{2\pi L}` }
            ]}
          />
          <p>Donde:</p>
          <ul>
            <li>X_L: Reactancia inductiva (ohmios, Ω)</li>
            <li>f: Frecuencia (hercios, Hz)</li>
            <li>L: Inductancia (henrios, H)</li>
          </ul>
          
          <Example title="Filtro de altavoz" icon="🔊">
            <p>
              Una bobina de 1 mH en un altavoz de graves bloquea frecuencias altas (agudos) dejando pasar solo los graves. A 16 kHz tiene una reactancia de ~100 Ω que limita el paso de esas frecuencias.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <div className="ejemplos-grid">
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🔌</span>
            <p>Transformadores: Cambian el voltaje de la corriente alterna</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">⚙️</span>
            <p>Motores eléctricos: Convierten electricidad en movimiento</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">📱</span>
            <p>Carga inalámbrica: Transfieren energía sin cables</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🔊</span>
            <p>Filtros de audio: Separan frecuencias en altavoces</p>
          </div>
        </div>
      </div>

      {/* Hechos históricos */}
      <div className="theory-history-section">
        <h2><span>📜</span> Historia</h2>
        <p>
          Las bobinas fueron fundamentales en el desarrollo de la electricidad. Michael Faraday descubrió en 1831 que una corriente variable en una bobina podía inducir corriente en otra bobina cercana, sentando las bases de los transformadores y generadores eléctricos.
        </p>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas y curiosidades</h2>
        <p>
          Las bobinas de Tesla, inventadas por Nikola Tesla en 1891, pueden generar voltajes de millones de voltios y crear espectaculares rayos eléctricos. Aunque parecen peligrosas, la alta frecuencia hace que la corriente circule por la superficie de la piel sin causar daño interno.
        </p>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3 className="concept-title">Resumen</h3>
        <div className="concept-body">
          <ul>
            <li>Las bobinas crean campos magnéticos con corriente</li>
            <li>Almacenan energía en el campo magnético</li>
            <li>Se oponen a cambios de corriente (reactancia inductiva)</li>
            <li>Son la base de transformadores y motores</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Bobinas;
