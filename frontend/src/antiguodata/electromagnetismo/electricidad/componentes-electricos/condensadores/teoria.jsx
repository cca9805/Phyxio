import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions as condensadoresDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Condensadores",
  descripcion: "Componentes que almacenan energía eléctrica temporalmente",
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const Condensadores = ({ exercises }) => {
  return (
    <>
      <Concept title="¿Qué es un condensador?" color="blue" icon="🔋">
        <p>
          Un condensador (o capacitor) es un componente que almacena energía eléctrica temporalmente. Es como una batería recargable muy rápida, pero solo guarda energía durante poco tiempo.
        </p>
        <p>
          Funciona como un "depósito de electricidad": se carga cuando le llega corriente y se descarga cuando la necesitamos.
        </p>
        <div className="destacado">
          <p>
            💡 Idea clave: Los condensadores almacenan energía en un campo eléctrico entre dos placas conductoras separadas por un aislante.
          </p>
        </div>
      </Concept>

      <TheorySection title="Capacidad">
        <Concept title="¿Cuánta carga puede almacenar?">
          <p>
            La capacidad mide cuánta carga eléctrica puede almacenar un condensador para un voltaje dado:
          </p>
          <Formula 
            expression={String.raw`C = \frac{Q}{V}`}
            calculatorId="condensadores"
            definitions={condensadoresDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Carga (Q)", expression: String.raw`Q = C \cdot V` },
              { description: "Calcular Voltaje (V)", expression: String.raw`V = \frac{Q}{C}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>C: Capacidad (faradios, F)</li>
            <li>Q: Carga almacenada (culombios, C)</li>
            <li>V: Voltaje (voltios, V)</li>
          </ul>

          <p>Unidades comunes:</p>
          <ul>
            <li>1 F (faradio) = 1,000,000 μF (microfaradios)</li>
            <li>1 μF = 1,000 nF (nanofaradios)</li>
            <li>1 nF = 1,000 pF (picofaradios)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Energía Almacenada">
        <Concept title="¿Cuánta energía guarda?">
          <p>
            La energía que puede almacenar un condensador depende de su capacidad y el voltaje:
          </p>
          <Formula 
            expression={String.raw`E = \frac{1}{2} C V^2`}
            calculatorId="condensadores"
            definitions={condensadoresDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Capacidad (C)", expression: String.raw`C = \frac{2E}{V^2}` },
              { description: "Calcular Voltaje (V)", expression: String.raw`V = \sqrt{\frac{2E}{C}}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>E: Energía almacenada (julios, J)</li>
            <li>C: Capacidad (faradios, F)</li>
            <li>V: Voltaje (voltios, V)</li>
          </ul>

          <Example title="Ejemplo: Flash de cámara" icon="📸">
            <p>
              Un condensador de 1000 μF cargado a 300V almacena:
            </p>
            <p>
              E = ½ × 0.001 × 300² = 45 J
            </p>
            <p>
              ¡Suficiente para producir un destello brillante! Por eso los condensadores grandes pueden ser peligrosos incluso desconectados.
            </p>
          </Example>

          <Important>
            <p>
              ⚠️ Precaución: Los condensadores grandes pueden mantener carga peligrosa durante horas o días. Siempre descárgalos con una resistencia antes de manipularlos.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Carga y Descarga">
        <Concept title="Constante de tiempo RC">
          <p>
            Los condensadores no se cargan ni descargan instantáneamente. El proceso sigue una curva exponencial:
          </p>
          <Formula 
            expression={String.raw`\tau = R \cdot C`}
            calculatorId="condensadores"
            definitions={condensadoresDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Resistencia (R)", expression: String.raw`R = \frac{\tau}{C}` },
              { description: "Calcular Capacidad (C)", expression: String.raw`C = \frac{\tau}{R}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>τ: Constante de tiempo (segundos, s)</li>
            <li>R: Resistencia (ohmios, Ω)</li>
            <li>C: Capacidad (faradios, F)</li>
          </ul>

          <p>Tiempos característicos:</p>
          <ul>
            <li>En 1τ: carga/descarga al 63%</li>
            <li>En 3τ: carga/descarga al 95%</li>
            <li>En 5τ: carga/descarga al 99% (prácticamente completo)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Tipos de Condensadores">
        <Concept title="Principales tipos" color="purple">
          <div className="conceptos-fundamentales">
            <div className="concepto-fundamental">
              <h4>Cerámicos</h4>
              <p>Pequeños, económicos, no polarizados. Usos: filtros, alta frecuencia</p>
            </div>
            <div className="concepto-fundamental">
              <h4>Electrolíticos</h4>
              <p>Gran capacidad, polarizados (+ y -). Usos: fuentes de alimentación, audio</p>
            </div>
            <div className="concepto-fundamental">
              <h4>Supercondensadores</h4>
              <p>Capacidad enorme (Faradios). Usos: respaldo de energía, vehículos eléctricos</p>
            </div>
          </div>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <div className="ejemplos-grid">
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">📸</span>
            <p>Flash de cámaras: Almacenan energía para el destello</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🔌</span>
            <p>Fuentes de alimentación: Suavizan el voltaje</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">📱</span>
            <p>Pantallas táctiles: Detectan el toque por cambios de capacidad</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">💾</span>
            <p>Memorias RAM: Cada bit se almacena en un condensador</p>
          </div>
        </div>
      </div>

      {/* Hechos históricos */}
      <div className="theory-history-section">
        <h2><span>📜</span> Historia</h2>
        <p>
          El primer condensador fue la "botella de Leyden", inventada en 1745 por Pieter van Musschenbroek. Era un frasco de vidrio recubierto de metal que podía almacenar carga eléctrica. Benjamin Franklin usó botellas de Leyden en sus famosos experimentos con rayos.
        </p>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas y curiosidades</h2>
        <p>
          Los supercondensadores modernos pueden almacenar tanta energía que se usan en autobuses eléctricos que se recargan en cada parada en solo 20 segundos. También se usan en sistemas de frenado regenerativo de coches híbridos para capturar la energía del frenado.
        </p>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3 className="concept-title">Resumen</h3>
        <div className="concept-body">
          <ul>
            <li>Los condensadores almacenan energía eléctrica temporalmente</li>
            <li>La capacidad mide cuánta carga pueden guardar</li>
            <li>Se cargan y descargan siguiendo una curva exponencial</li>
            <li>Hay diferentes tipos según la aplicación</li>
            <li>Son esenciales en fuentes de alimentación y memorias</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Condensadores;
