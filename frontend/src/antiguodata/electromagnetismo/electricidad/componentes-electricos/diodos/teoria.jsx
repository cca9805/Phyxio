import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions as diodosDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Diodos",
  descripcion: "Componentes que permiten el paso de corriente en un solo sentido",
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const Diodos = ({ exercises }) => {
  return (
    <>
      <Concept title="¿Qué es un diodo?" color="blue" icon="➡️">
        <p>
          Un diodo es un componente que permite el paso de corriente en un solo sentido. Es como una válvula de un solo sentido para la electricidad.
        </p>
        <p>
          Si conectas el diodo correctamente, la corriente pasa. Si lo conectas al revés, la corriente se bloquea.
        </p>
        <div className="destacado">
          <p>
            💡 Idea clave: Los diodos tienen dos terminales: ánodo (+) y cátodo (-). La corriente solo fluye de ánodo a cátodo.
          </p>
        </div>
      </Concept>

      <TheorySection title="LEDs - Diodos Emisores de Luz">
        <Concept title="El diodo más popular">
          <p>
            Los LEDs son diodos especiales que emiten luz cuando conducen. Son la base de la iluminación moderna.
          </p>
          <Formula 
            expression={String.raw`R = \frac{V_s - V_{LED}}{I_{LED}}`}
            calculatorId="diodos"
            definitions={diodosDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Voltaje fuente (V_s)", expression: String.raw`V_s = R \cdot I_{LED} + V_{LED}` },
              { description: "Calcular Corriente LED (I_LED)", expression: String.raw`I_{LED} = \frac{V_s - V_{LED}}{R}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>R: Resistencia limitadora (Ω)</li>
            <li>V_s: Voltaje de la fuente (V)</li>
            <li>V_LED: Voltaje del LED (V)</li>
            <li>I_LED: Corriente del LED (A)</li>
          </ul>
          
          <Example title="LED rojo con pila de 9V" icon="💡">
            <p>
              Para un LED rojo (2V, 20mA) con una pila de 9V:
            </p>
            <ul>
              <li>Voltaje en resistencia: 9V - 2V = 7V</li>
              <li>Resistencia: R = 7V / 0.02A = 350 Ω</li>
              <li>Usar resistencia comercial: 330 Ω o 390 Ω</li>
            </ul>
          </Example>

          <div className="tabla-simbolos" style={{width: '100%', overflowX: 'auto'}}>
            <table style={{width: '100%', minWidth: '300px'}}>
              <thead>
                <tr>
                  <th style={{width: '50%'}}>Color LED</th>
                  <th style={{width: '50%'}}>Voltaje típico</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Rojo</td><td>1.8 - 2.2 V</td></tr>
                <tr><td>Verde</td><td>2.0 - 2.4 V</td></tr>
                <tr><td>Azul</td><td>3.0 - 3.4 V</td></tr>
                <tr><td>Blanco</td><td>3.0 - 3.6 V</td></tr>
              </tbody>
            </table>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Rectificación">
        <Concept title="Convertir AC en DC">
          <p>
            Los diodos rectificadores convierten corriente alterna (AC) en continua (DC):
          </p>
          <Formula 
            expression={String.raw`V_{DC} = \frac{2(V_{peak} - 2V_d)}{\pi}`}
            calculatorId="diodos"
            definitions={diodosDefinitions}
            exercises={exercises}
          />
          
          <p>Donde:</p>
          <ul>
            <li>V_DC: Voltaje de corriente continua (V)</li>
            <li>V_peak: Voltaje pico de AC (V)</li>
            <li>V_d: Caída de voltaje del diodo (~0.7V)</li>
          </ul>
          
          <Example title="Cargador de móvil" icon="🔌">
            <p>
              Un cargador usa un puente rectificador (4 diodos) para convertir los 230V AC de la red en DC. Luego un transformador reduce el voltaje a 5V para cargar el móvil.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <div className="ejemplos-grid">
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">💡</span>
            <p>Iluminación LED: Casas, coches, pantallas</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🔌</span>
            <p>Cargadores: Rectifican AC a DC</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">☀️</span>
            <p>Paneles solares: Cada célula es un fotodiodo</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">📺</span>
            <p>Mandos a distancia: LEDs infrarrojos</p>
          </div>
        </div>
      </div>

      {/* Hechos históricos */}
      <div className="theory-history-section">
        <h2><span>📜</span> Historia</h2>
        <p>
          El primer diodo semiconductor fue inventado en 1874 por Karl Ferdinand Braun. Los LEDs fueron inventados en 1962 por Nick Holonyak Jr., quien trabajaba en General Electric. Los primeros LEDs solo emitían luz roja, y no fue hasta los años 90 que se inventaron los LEDs azules, lo que permitió crear LEDs blancos.
        </p>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas y curiosidades</h2>
        <p>
          Los LEDs son tan eficientes que pueden durar más de 50.000 horas (más de 5 años encendidos continuamente). El inventor del LED azul, Shuji Nakamura, ganó el Premio Nobel de Física en 2014 porque su invención permitió crear LEDs blancos, revolucionando la iluminación mundial.
        </p>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3 className="concept-title">Resumen</h3>
        <div className="concept-body">
          <ul>
            <li>Los diodos permiten corriente en un solo sentido</li>
            <li>Los LEDs emiten luz y son muy eficientes</li>
            <li>Los rectificadores convierten AC en DC</li>
            <li>Tienen caída de tensión típica de 0.7V (silicio)</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Diodos;
