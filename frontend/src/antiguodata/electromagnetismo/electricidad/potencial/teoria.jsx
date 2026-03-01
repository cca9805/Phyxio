import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Potencial Eléctrico",
  descripcion: "Potencial eléctrico, energía potencial y diferencia de potencial",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const PotencialTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Potencial Eléctrico">
        <Concept title="¿Qué es el potencial eléctrico?">
          <p>
            El potencial eléctrico es una magnitud escalar que representa la energía potencial 
            eléctrica por unidad de carga en un punto del espacio. Es como la "altura" en un 
            campo gravitatorio: las cargas positivas tienden a moverse de mayor a menor potencial, 
            igual que los objetos caen de mayor a menor altura.
          </p>
          <p>
            Se mide en voltios (V) y es fundamental para entender circuitos eléctricos: 
            la diferencia de potencial (voltaje) es lo que hace que la corriente fluya.
          </p>
        </Concept>

        <Concept title="Potencial de una Carga Puntual">
          <p>
            El potencial eléctrico (V) es la energía potencial por unidad de carga. Para una 
            carga puntual (q) que crea el campo, el potencial a una distancia (r) se calcula 
            tomando como referencia el infinito (V = 0).
          </p>
          <Formula 
            expression={String.raw`V = k \frac{q}{r}`}
            description="Potencial eléctrico creado por una carga puntual"
            calculatorId="potencial_puntual"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Carga (q)", expression: String.raw`q = \frac{V \cdot r}{k}` },
              { description: "Calcular Distancia (r)", expression: String.raw`r = k \frac{q}{V}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>V: Potencial eléctrico (V - Voltios)</li>
            <li>k: Constante de Coulomb (8.99×10⁹ N·m²/C²)</li>
            <li>q: Carga eléctrica (C - Culombios)</li>
            <li>r: Distancia a la carga (m - metros)</li>
          </ul>

          <Example title="Ejemplo: Potencial de un protón" icon="⚛️">
            <p>Calcular el potencial eléctrico a 1 nm de un protón (q = 1.6×10⁻¹⁹ C):</p>
            <ul>
              <li>V = k·q/r = (8.99×10⁹)·(1.6×10⁻¹⁹)/(1×10⁻⁹)</li>
              <li>V = 1.44 V</li>
            </ul>
            <p>Este es el potencial típico a escala atómica.</p>
          </Example>
        </Concept>
        <Concept title="Energía Potencial de un Sistema de Cargas">
          <p>
            La energía potencial eléctrica (U) de un sistema de dos cargas es el trabajo 
            requerido para traerlas desde el infinito hasta una separación (r). Representa 
            la energía almacenada en el sistema debido a su configuración.
          </p>
          <Formula 
            expression={String.raw`U = k \frac{q_1 q_2}{r}`}
            description="Energía potencial de un sistema de dos cargas"
            calculatorId="energia_potencial_sistema"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Carga (q)", expression: String.raw`q_1 = \frac{U \cdot r}{k \cdot q_2}` },
              { description: "Calcular Distancia (r)", expression: String.raw`r = \frac{k \cdot q_1 q_2}{U}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>U: Energía potencial eléctrica (J - Joules)</li>
            <li>k: Constante de Coulomb (8.99×10⁹ N·m²/C²)</li>
            <li>q₁, q₂: Cargas eléctricas (C - Culombios)</li>
            <li>r: Distancia entre las cargas (m - metros)</li>
          </ul>

          <Important>
            Si las cargas tienen el mismo signo, U es positiva (repulsión). 
            Si tienen signos opuestos, U es negativa (atracción).
          </Important>

          <Example title="Ejemplo: Energía de dos electrones" icon="⚡">
            <p>Dos electrones separados 1 μm (q = -1.6×10⁻¹⁹ C cada uno):</p>
            <ul>
              <li>U = k·q₁·q₂/r = (8.99×10⁹)·(-1.6×10⁻¹⁹)²/(1×10⁻⁶)</li>
              <li>U = 2.3×10⁻²² J (positiva, se repelen)</li>
            </ul>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Diferencia de Potencial (Voltaje)">
        <Concept title="Voltaje y Energía">
          <p>
            La diferencia de potencial (ΔV) entre dos puntos es el cambio en la energía 
            potencial (ΔU) de una carga de prueba (q) que se mueve entre esos puntos, 
            dividido por el valor de dicha carga.
          </p>
          <Formula 
            expression={String.raw`\Delta V = \frac{\Delta U}{q}`}
            description="La diferencia de potencial también se conoce como voltaje"
            calculatorId="potencial_energia"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Cambio de Energía (ΔU)", expression: String.raw`\Delta U = \Delta V \cdot q` },
              { description: "Calcular Carga (q)", expression: String.raw`q = \frac{\Delta U}{\Delta V}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>ΔV: Diferencia de potencial o voltaje (V - Voltios)</li>
            <li>ΔU: Cambio en energía potencial (J - Joules)</li>
            <li>q: Carga de prueba (C - Culombios)</li>
          </ul>

          <Example title="Ejemplo: Batería de 9V" icon="🔋">
            <p>Una batería de 9V mueve un electrón (q = -1.6×10⁻¹⁹ C):</p>
            <ul>
              <li>ΔU = q·ΔV = (-1.6×10⁻¹⁹)·(9) = -1.44×10⁻¹⁸ J</li>
              <li>El electrón gana energía cinética (se acelera)</li>
            </ul>
          </Example>
        </Concept>

        <Concept title="Potencial en un Campo Eléctrico Uniforme">
          <p>
            En un campo eléctrico uniforme (E), la diferencia de potencial (ΔV) entre dos 
            puntos está relacionada con la distancia (d) que los separa, medida en la 
            dirección del campo.
          </p>
          <Important>
            El potencial eléctrico siempre disminuye en la dirección del campo eléctrico.
          </Important>
          <Formula 
            expression={String.raw`\Delta V = -E \cdot d`}
            description="Diferencia de potencial en un campo uniforme"
            calculatorId="potencial_campo_uniforme"
            definitions={definitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular Campo Eléctrico (E)", expression: String.raw`E = -\frac{\Delta V}{d}` },
                { description: "Calcular Distancia (d)", expression: String.raw`d = -\frac{\Delta V}{E}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>ΔV: Diferencia de potencial (V - Voltios)</li>
            <li>E: Campo eléctrico uniforme (N/C o V/m)</li>
            <li>d: Distancia en la dirección del campo (m - metros)</li>
          </ul>

          <p>
            El signo negativo indica que el potencial V disminuye a medida que uno se 
            mueve en la dirección de E.
          </p>

          <Example title="Ejemplo: Placas paralelas" icon="⚡">
            <p>Dos placas separadas 2 cm con campo E = 1000 V/m:</p>
            <ul>
              <li>ΔV = -E·d = -(1000)·(0.02) = -20 V</li>
              <li>El potencial disminuye 20 V entre las placas</li>
            </ul>
          </Example>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h3>🏠 Aplicaciones del Potencial Eléctrico</h3>
        <ul>
          <li>Baterías y pilas: Proporcionan diferencia de potencial para hacer circular corriente</li>
          <li>Circuitos eléctricos: El voltaje es la "presión" que mueve los electrones</li>
          <li>Electrocardiograma (ECG): Mide diferencias de potencial en el corazón</li>
          <li>Pantallas CRT: Aceleran electrones con alto voltaje (15-30 kV)</li>
          <li>Rayos: Diferencias de potencial de millones de voltios entre nubes y tierra</li>
          <li>Condensadores: Almacenan energía mediante diferencia de potencial</li>
        </ul>
      </div>

      <div className="theory-history-section">
        <h3>📜 Historia del Concepto de Potencial</h3>
        <p>
          El concepto de potencial eléctrico fue desarrollado por Alessandro Volta en 1800, 
          quien inventó la primera batería (pila voltaica). La unidad de potencial, el voltio, 
          lleva su nombre en su honor.
        </p>
        <p>
          Antes de Volta, se conocía la electricidad estática pero no se entendía cómo 
          mantener un flujo continuo de corriente. Su invención revolucionó el estudio de 
          la electricidad al proporcionar una fuente constante de diferencia de potencial.
        </p>
      </div>

      <div className="theory-anecdotes-section">
        <h3>💡 Curiosidades</h3>
        <p>
          El voltaje de una anguila eléctrica puede alcanzar los 600 V, suficiente para 
          aturdir a un humano. Generan esta diferencia de potencial mediante células 
          especializadas llamadas electrocitos, que actúan como pequeñas baterías en serie.
        </p>
        <p>
          Los rayos pueden tener diferencias de potencial de hasta 100 millones de voltios. 
          Sin embargo, lo peligroso no es solo el voltaje sino la corriente: un rayo típico 
          transporta 30,000 amperios durante una fracción de segundo.
        </p>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>El potencial eléctrico es la energía potencial por unidad de carga</li>
          <li>Se mide en voltios (V) y es una magnitud escalar</li>
          <li>Para una carga puntual: V = k·q/r</li>
          <li>La energía potencial de dos cargas: U = k·q₁·q₂/r</li>
          <li>La diferencia de potencial (voltaje) es ΔV = ΔU/q</li>
          <li>En un campo uniforme: ΔV = -E·d</li>
          <li>El potencial disminuye en la dirección del campo eléctrico</li>
        </ul>
      </div>
    </>
  );
};

export default PotencialTheory;
