import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Coordenadas Generalizadas",
  descripcion: "Introducción a las coordenadas generalizadas y grados de libertad",
  isTheoryOnly: false,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

const CoordenadasGeneralizadasTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a las Coordenadas Generalizadas">
        <p>
          Las <strong>coordenadas generalizadas</strong> son un conjunto de variables independientes que 
          describen completamente la configuración de un sistema mecánico. A diferencia de las coordenadas 
          cartesianas (x, y, z), las coordenadas generalizadas pueden ser cualquier conjunto de parámetros 
          que especifiquen la posición del sistema.
        </p>

        <Important>
          Las coordenadas generalizadas simplifican el análisis de sistemas con restricciones, 
          reduciendo el número de variables necesarias para describir el movimiento.
        </Important>
      </TheorySection>

      <TheorySection title="Grados de Libertad">
        <Concept title="Definición">
          <p>
            Los <strong>grados de libertad</strong> de un sistema son el número mínimo de coordenadas 
            independientes necesarias para especificar completamente su configuración.
          </p>

          <Formula
            expression={String.raw`n = 3N - k`}
            calculatorId="grados-libertad"
            definitions={definitions}
            exercises={exercises}
          />

          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>n:</strong> Número de grados de libertad</li>
            <li><strong>N:</strong> Número de partículas del sistema</li>
            <li><strong>k:</strong> Número de restricciones (ecuaciones de ligadura)</li>
          </ul>

          <Example
            title="Ejemplo: Péndulo Simple"
            problem="Un péndulo simple consiste en una masa puntual suspendida de un hilo inextensible. ¿Cuántos grados de libertad tiene?"
            solution={
              <div>
                <p><strong>Análisis:</strong></p>
                <ul>
                  <li>N = 1 partícula → 3 coordenadas iniciales (x, y, z)</li>
                  <li>Restricción 1: Longitud constante del hilo</li>
                  <li>Restricción 2: Movimiento en un plano (z = 0)</li>
                </ul>
                <p><strong>Cálculo:</strong></p>
                <p>n = 3(1) - 2 = 1 grado de libertad</p>
                <p><strong>Coordenada generalizada:</strong> θ (ángulo con la vertical)</p>
              </div>
            }
          />
        </Concept>
      </TheorySection>

      <TheorySection title="Tipos de Coordenadas">
        <Concept title="Coordenadas Cartesianas">
          <p>
            Las coordenadas cartesianas (x, y, z) son las más intuitivas pero no siempre las más convenientes.
          </p>
          <ul>
            <li><strong>Ventaja:</strong> Fáciles de visualizar</li>
            <li><strong>Desventaja:</strong> No aprovechan simetrías del sistema</li>
          </ul>
        </Concept>

        <Concept title="Coordenadas Polares (2D)">
          <p>
            En sistemas con simetría circular, las coordenadas polares (r, θ) son más naturales.
          </p>

          <Formula
            expression={String.raw`r = \sqrt{x^2 + y^2}, \quad \theta = \arctan\left(\frac{y}{x}\right)`}
            calculatorId="transformacion-coordenadas"
            definitions={definitions}
            exercises={exercises}
          />

          <p><strong>Transformación inversa:</strong></p>
          <ul>
            <li>x = r cos(θ)</li>
            <li>y = r sin(θ)</li>
          </ul>
        </Concept>

        <Concept title="Coordenadas Esféricas (3D)">
          <p>
            Para sistemas con simetría esférica (r, θ, φ):
          </p>
          <ul>
            <li>x = r sin(θ) cos(φ)</li>
            <li>y = r sin(θ) sin(φ)</li>
            <li>z = r cos(θ)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Velocidades Generalizadas">
        <Concept title="Definición">
          <p>
            Las <strong>velocidades generalizadas</strong> son las derivadas temporales de las 
            coordenadas generalizadas.
          </p>

          <Formula
            expression={String.raw`\dot{q}_i = \frac{dq_i}{dt}`}
            calculatorId="velocidad-generalizada"
            definitions={definitions}
            exercises={exercises}
          />

          <p><strong>Notación:</strong></p>
          <ul>
            <li>qᵢ: Coordenada generalizada i</li>
            <li>q̇ᵢ: Velocidad generalizada i (derivada temporal)</li>
            <li>q̈ᵢ: Aceleración generalizada i (segunda derivada)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Restricciones">
        <Concept title="Restricciones Holónomas">
          <p>
            Son restricciones que pueden expresarse como ecuaciones que relacionan las coordenadas 
            y el tiempo:
          </p>
          <p style={{textAlign: 'center', margin: '1rem 0'}}>
            f(q₁, q₂, ..., qₙ, t) = 0
          </p>

          <p><strong>Ejemplos:</strong></p>
          <ul>
            <li>Péndulo: x² + y² = L² (longitud constante)</li>
            <li>Partícula en superficie: z = f(x, y)</li>
            <li>Cuerpo rígido: distancias entre puntos constantes</li>
          </ul>
        </Concept>

        <Concept title="Restricciones No Holónomas">
          <p>
            Son restricciones que involucran velocidades y no pueden integrarse para obtener 
            una relación entre coordenadas:
          </p>

          <p><strong>Ejemplos:</strong></p>
          <ul>
            <li>Rueda que rueda sin deslizar</li>
            <li>Patín sobre hielo</li>
            <li>Restricciones de velocidad</li>
          </ul>

          <Important>
            Las restricciones no holónomas son más difíciles de tratar y requieren 
            métodos especiales en mecánica analítica.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Ventajas de las Coordenadas Generalizadas">
        <ul>
          <li><strong>Reducción de variables:</strong> Eliminan coordenadas redundantes</li>
          <li><strong>Aprovechan simetrías:</strong> Simplifican ecuaciones de movimiento</li>
          <li><strong>Facilitan análisis:</strong> Hacen evidentes las constantes de movimiento</li>
          <li><strong>Flexibilidad:</strong> Se adaptan a la geometría del problema</li>
          <li><strong>Base para Lagrangiano:</strong> Fundamentales en mecánica analítica</li>
        </ul>
      </TheorySection>

      <TheorySection title="Ejemplos de Sistemas">
        <Example
          title="Péndulo Doble"
          problem="Sistema de dos masas conectadas por hilos inextensibles"
          solution={
            <div>
              <p><strong>Análisis:</strong></p>
              <ul>
                <li>N = 2 partículas → 6 coordenadas iniciales</li>
                <li>4 restricciones (2 longitudes + movimiento en plano)</li>
                <li>n = 6 - 4 = 2 grados de libertad</li>
              </ul>
              <p><strong>Coordenadas generalizadas:</strong> θ₁, θ₂ (ángulos de cada péndulo)</p>
            </div>
          }
        />

        <Example
          title="Partícula en Superficie"
          problem="Partícula moviéndose sobre una esfera de radio R"
          solution={
            <div>
              <p><strong>Análisis:</strong></p>
              <ul>
                <li>N = 1 partícula → 3 coordenadas iniciales</li>
                <li>1 restricción: x² + y² + z² = R²</li>
                <li>n = 3 - 1 = 2 grados de libertad</li>
              </ul>
              <p><strong>Coordenadas generalizadas:</strong> θ, φ (coordenadas esféricas)</p>
            </div>
          }
        />
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🤖 Robótica</h3>
          <p>
            Los robots industriales tienen múltiples articulaciones (grados de libertad). Un brazo robótico 
            típico tiene 6 grados de libertad: 3 para posición y 3 para orientación del efector final. 
            Las coordenadas generalizadas son los ángulos de cada articulación (θ₁, θ₂, ..., θ₆). 
            Los controladores calculan estos ángulos para mover el brazo a posiciones deseadas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 Vehículos Autónomos</h3>
          <p>
            Los coches autónomos usan coordenadas generalizadas para planificar trayectorias. Un coche 
            tiene 3 grados de libertad en 2D: posición (x, y) y orientación (θ). Las restricciones no 
            holónomas (no puede moverse lateralmente) complican el control. Los algoritmos de planificación 
            deben respetar estas restricciones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>✈️ Simulación de Vuelo</h3>
          <p>
            Los simuladores de vuelo modelan aviones con 6 grados de libertad: 3 traslacionales (x, y, z) 
            y 3 rotacionales (alabeo, cabeceo, guiñada). Las coordenadas generalizadas permiten simular 
            maniobras complejas. Los pilotos entrenan en simuladores que reproducen fielmente la dinámica 
            del avión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎮 Animación y Videojuegos</h3>
          <p>
            Los personajes en videojuegos usan esqueletos con múltiples articulaciones. Cada articulación 
            tiene grados de libertad (típicamente 1-3). Las coordenadas generalizadas son los ángulos de 
            las articulaciones. Los motores de física calculan movimientos realistas respetando restricciones 
            anatómicas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏥 Biomecánica</h3>
          <p>
            El cuerpo humano tiene aproximadamente 244 grados de libertad (considerando todas las articulaciones). 
            Los biomecánicos usan coordenadas generalizadas para analizar movimientos: caminar, correr, saltar. 
            Esto ayuda a diseñar prótesis, rehabilitación y equipamiento deportivo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🛰️ Control de Satélites</h3>
          <p>
            Los satélites en órbita tienen 6 grados de libertad. Las coordenadas generalizadas incluyen 
            elementos orbitales (semieje mayor, excentricidad, inclinación) y ángulos de orientación. 
            Los controladores ajustan la orientación usando ruedas de reacción o propulsores.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De Newton a Lagrange
        </h2>
        
        <div className="theory-subsection">
          <h3>⚙️ Isaac Newton (1687): Mecánica Vectorial</h3>
          <p>
            Newton formuló la mecánica usando fuerzas y aceleraciones en coordenadas cartesianas. 
            Su enfoque era directo pero se complicaba con restricciones. Para sistemas con ligaduras, 
            había que introducir fuerzas de restricción desconocidas, complicando las ecuaciones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📐 Joseph-Louis Lagrange (1788): Revolución Analítica</h3>
          <p>
            Lagrange revolucionó la mecánica introduciendo coordenadas generalizadas en su obra 
            "Mécanique Analytique" (1788). Su enfoque eliminaba las fuerzas de restricción, simplificando 
            enormemente el análisis. Las ecuaciones de Lagrange usan energía en lugar de fuerzas, 
            siendo más elegantes y generales.
          </p>
          <p>
            Lagrange escribió: "No encontrarás figuras en este libro". Su mecánica era puramente analítica, 
            sin diagramas geométricos. Esta abstracción permitió resolver problemas imposibles con métodos 
            newtonianos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 William Rowan Hamilton (1834): Formalismo Hamiltoniano</h3>
          <p>
            Hamilton extendió el trabajo de Lagrange introduciendo momentos generalizados conjugados 
            a las coordenadas generalizadas. Su formalismo es fundamental en mecánica cuántica y 
            teoría de campos. Las ecuaciones de Hamilton son simétricas y revelan estructura profunda 
            de la mecánica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Siglo XX: Aplicaciones Modernas</h3>
          <p>
            Las coordenadas generalizadas se volvieron esenciales con el desarrollo de robótica, 
            aeroespacial y simulación computacional. Los métodos numéricos permiten resolver sistemas 
            con cientos de grados de libertad. La mecánica analítica es base de software de simulación 
            como ADAMS, Simscape y MuJoCo.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>📚 El Libro Sin Figuras</h3>
          <p>
            La "Mécanique Analytique" de Lagrange (1788) no contiene una sola figura. Lagrange estaba 
            orgulloso de esto, considerando que la mecánica debía ser puramente analítica. Ironicamente, 
            esto hizo el libro muy difícil de leer. Ediciones posteriores agregaron figuras para ayudar 
            a los estudiantes.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🤖 El Robot con Más Grados de Libertad</h3>
          <p>
            El robot humanoide ASIMO de Honda tiene 57 grados de libertad: 7 en cada brazo, 6 en cada 
            pierna, 3 en el torso, 3 en el cuello, y 13 en cada mano. Controlar tantos grados de libertad 
            simultáneamente requiere algoritmos sofisticados basados en coordenadas generalizadas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎪 El Problema de los Tres Cuerpos</h3>
          <p>
            Tres masas interactuando gravitacionalmente tienen 9 coordenadas (3 × 3) pero solo 3 grados 
            de libertad efectivos después de eliminar movimiento del centro de masa y rotaciones. Aún así, 
            el problema no tiene solución analítica general. Henri Poincaré demostró que el movimiento 
            puede ser caótico, fundando la teoría del caos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏋️ El Cuerpo Humano: 244 Grados de Libertad</h3>
          <p>
            El cuerpo humano tiene aproximadamente 244 grados de libertad considerando todas las 
            articulaciones. La columna vertebral sola tiene ~75 grados de libertad. Controlar tantos 
            grados de libertad simultáneamente es un desafío computacional enorme, pero el cerebro lo 
            hace sin esfuerzo consciente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎮 Física de Videojuegos</h3>
          <p>
            Los motores de física en videojuegos (PhysX, Havok, Bullet) usan coordenadas generalizadas 
            para simular objetos articulados. Un personaje típico tiene 50-100 grados de libertad. 
            Los motores resuelven ecuaciones de movimiento 60 veces por segundo para animaciones fluidas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 El Problema del Estacionamiento</h3>
          <p>
            Estacionar un coche es un problema de control con restricciones no holónomas. El coche no 
            puede moverse lateralmente (restricción no holónoma), pero puede alcanzar cualquier posición 
            y orientación mediante maniobras. Este problema inspiró investigación en control de sistemas 
            no holónomos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🛸 Giroscopios y Orientación</h3>
          <p>
            Los giroscopios en smartphones y drones miden velocidades angulares (velocidades generalizadas) 
            en tres ejes. Integrando estas velocidades se obtiene la orientación (coordenadas generalizadas). 
            Los algoritmos de fusión sensorial combinan giroscopios, acelerómetros y magnetómetros para 
            orientación precisa.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          Las coordenadas generalizadas son variables independientes que describen completamente la 
          configuración de un sistema. Los grados de libertad (n = 3N - k) son el número mínimo de 
          coordenadas necesarias. Las velocidades generalizadas son las derivadas temporales de las 
          coordenadas.
        </p>
        <p>
          Las coordenadas generalizadas simplifican el análisis eliminando restricciones y aprovechando 
          simetrías. Son fundamentales en mecánica lagrangiana y hamiltoniana. Aplicaciones incluyen 
          robótica, vehículos autónomos, simulación, animación y biomecánica.
        </p>
      </div>
    </>
  );
};

export default CoordenadasGeneralizadasTheory;
