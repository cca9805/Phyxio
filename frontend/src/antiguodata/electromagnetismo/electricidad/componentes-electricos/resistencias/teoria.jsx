import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions as resistenciasDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Resistencias",
  descripcion: "Componentes que limitan el paso de corriente eléctrica",
  isTheoryOnly: false,
  educationLevel: "ESO",
  levels: ['ESO']
};

const Resistencias = ({ exercises }) => {
  return (
    <>
      <Concept 
        title="¿Qué es una resistencia?" 
        color="blue"
        icon="⚡"
      >
        <p>
          Una resistencia (o resistor) es un componente eléctrico que 
          dificulta el paso de la corriente eléctrica. Es como una tubería 
          estrecha que reduce el flujo de agua.
        </p>
        <p>
          Su función principal es limitar la corriente que circula por un 
          circuito, protegiendo otros componentes o controlando el funcionamiento del circuito.
        </p>
        <div className="destacado">
          <p>
            💡 Idea clave: Las resistencias convierten parte de la 
            energía eléctrica en calor. Por eso se calientan cuando funcionan.
          </p>
        </div>
      </Concept>

      <TheorySection title="Ley de Ohm">
        <Concept title="La relación fundamental">
          <p>
            La Ley de Ohm relaciona el voltaje, la corriente y la resistencia:
          </p>
          <Formula 
            expression={String.raw`V = I \cdot R`}
            calculatorId="resistencias"
            definitions={resistenciasDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Corriente (I)", expression: String.raw`I = \frac{V}{R}` },
              { description: "Calcular Resistencia (R)", expression: String.raw`R = \frac{V}{I}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>V: Voltaje (voltios, V)</li>
            <li>I: Corriente (amperios, A)</li>
            <li>R: Resistencia (ohmios, Ω)</li>
          </ul>

          <Example title="Ejemplo: LED con resistencia" icon="💡">
            <p>
              Queremos conectar un LED rojo (2V, 20mA) a una pila de 9V. 
              Necesitamos una resistencia para limitar la corriente.
            </p>
            <p>
              Cálculo:
            </p>
            <ul>
              <li>Voltaje en resistencia: V_R = 9V - 2V = 7V</li>
              <li>Corriente: I = 20 mA = 0.02 A</li>
              <li>Resistencia: R = V / I = 7 / 0.02 = 350 Ω</li>
            </ul>
            <p>
              Usaríamos una resistencia comercial de 330 Ω o 390 Ω.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Código de Colores">
        <Concept title="Leer resistencias por sus bandas">
          <p>
            Las resistencias tienen bandas de colores que indican su valor. 
            Es un código estándar internacional inventado en 1920.
          </p>
          
          <div className="tabla-simbolos" style={{ width: '100%', overflowX: 'auto' }}>
            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ width: '40%' }}>Color</th>
                  <th style={{ width: '30%' }}>Valor</th>
                  <th style={{ width: '30%' }}>Multiplicador</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Negro</td><td>0</td><td>×1</td></tr>
                <tr><td>Marrón</td><td>1</td><td>×10</td></tr>
                <tr><td>Rojo</td><td>2</td><td>×100</td></tr>
                <tr><td>Naranja</td><td>3</td><td>×1k</td></tr>
                <tr><td>Amarillo</td><td>4</td><td>×10k</td></tr>
                <tr><td>Verde</td><td>5</td><td>×100k</td></tr>
                <tr><td>Azul</td><td>6</td><td>×1M</td></tr>
              </tbody>
            </table>
          </div>

          <Formula 
            expression={String.raw`R = (\text{banda1} \times 10 + \text{banda2}) \times \text{multiplicador}`}
            calculatorId="resistencias"
            definitions={resistenciasDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>banda1, banda2: Primeras dos bandas de color</li>
            <li>multiplicador: Tercera banda de color</li>
            <li>R: Resistencia en ohmios (Ω)</li>
          </ul>

          <Example title="Ejemplo: Rojo-Violeta-Naranja-Dorado" icon="🎨">
            <p>
              Lectura:
            </p>
            <ul>
              <li>1ª banda (Rojo): 2</li>
              <li>2ª banda (Violeta): 7</li>
              <li>3ª banda (Naranja): ×1000</li>
              <li>4ª banda (Dorado): ±5%</li>
            </ul>
            <p>
              Valor: 27 × 1000 = 27,000 Ω = 27 kΩ ± 5%
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Potencia de las Resistencias">
        <Concept title="¿Cuánto calor disipan?">
          <p>
            Las resistencias se calientan al funcionar. La potencia indica 
            cuánto calor pueden disipar sin dañarse:
          </p>
          <Formula 
            expression={String.raw`P = I^2 \cdot R = \frac{V^2}{R}`}
            calculatorId="resistencias"
            definitions={resistenciasDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Corriente (I)", expression: String.raw`I = \sqrt{\frac{P}{R}}` },
              { description: "Calcular Resistencia (R)", expression: String.raw`R = \frac{P}{I^2} = \frac{V^2}{P}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>P: Potencia (vatios, W)</li>
            <li>I: Corriente (amperios, A)</li>
            <li>R: Resistencia (ohmios, Ω)</li>
            <li>V: Voltaje (voltios, V)</li>
          </ul>

          <Important>
            <p>
              ⚠️ Importante: Si una resistencia disipa más potencia 
              de la que puede soportar, se sobrecalienta y puede quemarse o incluso 
              provocar un incendio.
            </p>
          </Important>

          <div className="conceptos-fundamentales">
            <div className="concepto-fundamental">
              <h4>1/4 W (0.25 W)</h4>
              <p>Circuitos electrónicos pequeños</p>
            </div>
            <div className="concepto-fundamental">
              <h4>1/2 W (0.5 W)</h4>
              <p>Uso general</p>
            </div>
            <div className="concepto-fundamental">
              <h4>1 W - 5 W</h4>
              <p>Circuitos de potencia</p>
            </div>
          </div>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h3>🏠 Aplicaciones Cotidianas</h3>
        <div className="ejemplos-grid">
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">💡</span>
            <p>
              LEDs: Limitan la corriente para que no se quemen
            </p>
          </div>
          
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🔥</span>
            <p>
              Calefactores: Convierten electricidad en calor
            </p>
          </div>
          
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🌙</span>
            <p>
              Sensores de luz (LDR): Farolas que se encienden solas
            </p>
          </div>

          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🎚️</span>
            <p>
              Control de volumen: Potenciómetros en equipos de audio
            </p>
          </div>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>Las resistencias limitan el paso de corriente eléctrica</li>
          <li>Siguen la Ley de Ohm: V = I × R</li>
          <li>Se identifican por su código de colores</li>
          <li>Disipan potencia en forma de calor</li>
          <li>Son esenciales para proteger componentes como LEDs</li>
        </ul>
      </div>
    </>
  );
};

export default Resistencias;
