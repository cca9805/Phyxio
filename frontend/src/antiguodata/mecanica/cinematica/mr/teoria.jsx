import { TheorySection, Concept, Formula } from '../../../../components/TheoryV2';
import { definitions as mrDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "MR - Movimiento Relativo",
  descripcion: "Movimiento observado desde diferentes sistemas de referencia",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const MrTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción al Movimiento Relativo">
        <p>
          El Movimiento Relativo estudia cómo las mediciones de posición, velocidad y aceleración de un objeto dependen del sistema de referencia desde el cual se observan. No existe un movimiento 'absoluto'; todo movimiento es relativo a algo más.
        </p>
      </TheorySection>

      <TheorySection title="Movimiento Relativo en Una Dimensión (1D)">
        <p>En 1D, el movimiento se analiza a lo largo de una línea recta. Las ecuaciones son sencillas diferencias o sumas algebraicas.</p>
        <Concept title="Posición y Velocidad Relativa (1D)">
          <p>La posición y velocidad de un objeto A respecto a un objeto B se obtienen restando las magnitudes correspondientes de B a las de A.</p>
          <Formula
            expression={String.raw`x_{\text{ab}} = x_a - x_b`}
            calculatorId="mr-1d"
            definitions={mrDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Velocidad Relativa", expression: String.raw`v_{\text{ab}} = v_a - v_b` },
              { description: "Calcular Posición Absoluta", expression: String.raw`x_a = x_{\text{ab}} + x_b` },
              { description: "Calcular Velocidad Absoluta", expression: String.raw`v_a = v_{\text{ab}} + v_b` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>x_ab = Posición de A relativa a B (m)</li>
            <li>v_ab = Velocidad de A relativa a B (m/s)</li>
            <li>x_a, x_b = Posiciones absolutas de A y B (m)</li>
            <li>v_a, v_b = Velocidades absolutas de A y B (m/s)</li>
          </ul>
        </Concept>
      </TheorySection>
      
      <TheorySection title="Transformaciones de Galileo">
        <p>Las Transformaciones de Galileo nos permiten relacionar las mediciones entre dos sistemas de referencia inerciales (uno fijo, S, y otro móvil, S', que se mueve con velocidad constante V respecto a S).</p>
        <Concept title="Ecuaciones de Galileo (1D)">
          <Formula
            expression={String.raw`x = x' + V \cdot t`}
            calculatorId="mr-galileo"
            definitions={mrDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Posición en sistema móvil", expression: String.raw`x' = x - V \cdot t` },
              { description: "Relación de velocidades", expression: String.raw`v = v' + V` },
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>x = Posición en el sistema fijo S (m)</li>
            <li>x' = Posición en el sistema móvil S' (m)</li>
            <li>V = Velocidad del sistema S' respecto a S (m/s)</li>
            <li>v = Velocidad en el sistema fijo S (m/s)</li>
            <li>v' = Velocidad en el sistema móvil S' (m/s)</li>
            <li>t = Tiempo (s)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Problemas de Encuentro">
        <p>Un problema clásico de cinemática es determinar cuándo y dónde se encontrarán dos objetos en movimiento.</p>
        <Concept title="Tiempo de Encuentro (1D)">
          <p>Se calcula igualando las ecuaciones de posición de los dos móviles y despejando el tiempo (t).</p>
          <Formula
            expression={String.raw`t_{\text{enc}} = \frac{x_{b0} - x_{a0}}{v_a - v_b}`}
            calculatorId="mr-encuentro-1d"
            definitions={mrDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>t_enc = Tiempo de encuentro (s)</li>
            <li>x_a0 = Posición inicial del móvil A (m)</li>
            <li>x_b0 = Posición inicial del móvil B (m)</li>
            <li>v_a = Velocidad del móvil A (m/s)</li>
            <li>v_b = Velocidad del móvil B (m/s)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Movimiento Relativo en Dos Dimensiones (2D)">
        <p>Cuando el movimiento ocurre en un plano, utilizamos vectores para describir la posición y la velocidad. Las operaciones se realizan por componentes.</p>
        <Concept title="Operaciones con Vectores 2D">
          <p>La suma y resta de vectores es fundamental para resolver problemas en 2D.</p>
           <Formula
            expression={String.raw`\vec{R} = \vec{A} + \vec{B}`}
            calculatorId="mr-vectores-2d"
            definitions={mrDefinitions}
            exercises={exercises}
            complementary={[
                { description: "Resta de vectores", expression: String.raw`\vec{R} = \vec{A} - \vec{B}` },
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>R⃗ = Vector resultante</li>
            <li>A⃗ = Primer vector</li>
            <li>B⃗ = Segundo vector</li>
          </ul>
        </Concept>
        <Concept title="Velocidad Relativa y Composición (2D)">
          <p>El principio de superposición se aplica para componer velocidades, como en el caso de un barco que cruza un río o un avión volando con viento.</p>
          <Formula
            expression={String.raw`\vec{v}_{ab} = \vec{v}_a - \vec{v}_b`}
            calculatorId="mr-2d"
            definitions={mrDefinitions}
            exercises={exercises}
            complementary={[
                { description: "Composición de Velocidades", expression: String.raw`\vec{v}_{ac} = \vec{v}_{ab} + \vec{v}_{bc}` },
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>v⃗_ab = Velocidad de A relativa a B (vector)</li>
            <li>v⃗_a = Velocidad absoluta de A (vector)</li>
            <li>v⃗_b = Velocidad absoluta de B (vector)</li>
            <li>v⃗_ac = Velocidad de A relativa a C (vector)</li>
            <li>v⃗_bc = Velocidad de B relativa a C (vector)</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🚢 Navegación marítima y aérea</h3>
          <p>
            Los pilotos y capitanes deben calcular constantemente velocidades relativas para compensar corrientes de agua o viento. Un avión que vuela de Madrid a Londres debe ajustar su rumbo considerando el viento lateral para llegar exactamente a su destino. Sin estos cálculos, el avión podría desviarse cientos de kilómetros.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 Seguridad vial y adelantamientos</h3>
          <p>
            Cuando adelantas un vehículo en carretera, tu velocidad relativa respecto al otro coche determina cuánto tiempo necesitas para completar la maniobra de forma segura. Si ambos van a 100 km/h, tu velocidad relativa es casi cero y el adelantamiento es peligroso. Por eso es crucial aumentar significativamente la velocidad al adelantar.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🛰️ Misiones espaciales y acoplamiento</h3>
          <p>
            El acoplamiento de naves espaciales a la Estación Espacial Internacional requiere cálculos precisos de movimiento relativo. Aunque ambas se mueven a más de 27,000 km/h respecto a la Tierra, la nave debe aproximarse con una velocidad relativa de solo unos centímetros por segundo para un acoplamiento seguro.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚽ Deportes y estrategia</h3>
          <p>
            En fútbol, un jugador debe calcular intuitivamente la velocidad relativa entre él, el balón y sus compañeros para realizar pases precisos. Un pase adelantado considera no solo dónde está el compañero, sino dónde estará cuando el balón llegue, aplicando principios de movimiento relativo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚁 Rescate y operaciones de emergencia</h3>
          <p>
            Los helicópteros de rescate marítimo deben calcular la velocidad relativa entre el helicóptero, el barco en movimiento y las corrientes oceánicas para realizar rescates seguros. Un error en estos cálculos puede ser fatal en condiciones de mar agitado.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 Sistemas de defensa antimisiles</h3>
          <p>
            Los sistemas de defensa deben calcular la velocidad relativa entre un misil interceptor y su objetivo para determinar el punto exacto de intercepción. Con velocidades que pueden superar los 5,000 km/h, estos cálculos deben ser extremadamente precisos y realizarse en milisegundos.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De Galileo a Einstein
        </h2>
        
        <p>
          El concepto de movimiento relativo tiene una historia fascinante que revolucionó nuestra comprensión del universo.
        </p>

        <div className="theory-subsection">
          <h3>Galileo Galilei (1564-1642)</h3>
          <p>
            Galileo fue el primero en formular claramente el principio de relatividad del movimiento. En su obra "Diálogo sobre los dos máximos sistemas del mundo" (1632), describió su famoso experimento mental del barco: los pasajeros en un barco que se mueve suavemente no pueden determinar si están en movimiento o en reposo mediante experimentos mecánicos realizados dentro del barco.
          </p>
          <p>
            Este principio fue revolucionario porque desafió la física aristotélica que dominaba desde hacía casi 2,000 años. Aristóteles creía en el movimiento absoluto, pero Galileo demostró que el movimiento solo tiene sentido en relación con un sistema de referencia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Isaac Newton (1643-1727)</h3>
          <p>
            Newton incorporó las ideas de Galileo en sus leyes del movimiento, pero introdujo el concepto de "espacio absoluto" como marco de referencia universal. Aunque sus leyes funcionaban perfectamente para velocidades cotidianas, esta idea del espacio absoluto sería cuestionada siglos después.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Albert Einstein (1879-1955)</h3>
          <p>
            En 1905, Einstein publicó su Teoría de la Relatividad Especial, que extendió el principio de Galileo a todos los fenómenos físicos, incluida la luz. Demostró que las transformaciones de Galileo son solo aproximaciones válidas a bajas velocidades, y que a velocidades cercanas a la luz, se necesitan las transformaciones de Lorentz.
          </p>
          <p>
            Einstein eliminó completamente la noción de espacio y tiempo absolutos, mostrando que incluso el tiempo es relativo y depende del sistema de referencia. Esta fue una de las revoluciones más profundas en la historia de la física.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>🚂 El experimento mental del tren de Einstein</h3>
          <p>
            Einstein desarrolló su teoría de la relatividad pensando en trenes. Imaginó un rayo cayendo en un tren en movimiento y se preguntó: ¿un observador en el tren y otro en el andén verían el rayo caer en el mismo lugar? Esta simple pregunta lo llevó a revolucionar la física. Curiosamente, Einstein nunca realizó experimentos en laboratorio; todo su trabajo fue puramente teórico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>✈️ El récord de velocidad relativa más alto</h3>
          <p>
            En 2018, la sonda Parker Solar Probe alcanzó una velocidad de 700,000 km/h respecto al Sol, convirtiéndose en el objeto humano más rápido jamás construido. Sin embargo, su velocidad relativa respecto a la Tierra es mucho menor debido a que ambos orbitan el Sol. Este es un ejemplo perfecto de cómo la velocidad relativa depende del sistema de referencia elegido.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌍 La Tierra se mueve, pero no lo sentimos</h3>
          <p>
            La Tierra gira sobre su eje a unos 1,670 km/h en el ecuador, orbita el Sol a 107,000 km/h, y el Sistema Solar se mueve por la galaxia a 828,000 km/h. Sin embargo, no sentimos ninguno de estos movimientos porque todo nuestro entorno se mueve con nosotros. Es el ejemplo perfecto del principio de Galileo: no existe un movimiento absoluto.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎾 La pelota más rápida del mundo</h3>
          <p>
            En tenis, el servicio más rápido registrado fue de 263 km/h. Pero desde el punto de vista de la pelota, es la raqueta la que se mueve a esa velocidad hacia ella. Este cambio de perspectiva es fundamental en el análisis de colisiones y es exactamente lo que estudia el movimiento relativo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 El problema de los tres cuerpos</h3>
          <p>
            Calcular el movimiento relativo de tres objetos que se atraen gravitacionalmente (como el Sol, la Tierra y la Luna) es uno de los problemas más difíciles de la física. No tiene solución analítica general y requiere simulaciones por computadora. Este problema ha fascinado a matemáticos y físicos durante siglos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏃 La paradoja del corredor</h3>
          <p>
            Si corres bajo la lluvia, ¿te mojas más o menos que si caminas? La respuesta depende del movimiento relativo entre tú y las gotas de lluvia. Estudios han demostrado que correr reduce el tiempo de exposición, pero aumenta la cantidad de gotas que golpean tu frente. El resultado óptimo depende del ángulo de la lluvia y tu velocidad.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <p>
          El Movimiento Relativo nos enseña que no existe un movimiento absoluto; todo movimiento debe medirse respecto a un sistema de referencia. Las transformaciones de Galileo permiten relacionar las mediciones entre diferentes sistemas de referencia inerciales, y son fundamentales para resolver problemas de encuentro, navegación y composición de velocidades. En dos dimensiones, el uso de vectores es esencial para describir correctamente el movimiento relativo.
        </p>
        <p>
          Este concepto es la base de aplicaciones prácticas en navegación, seguridad vial, misiones espaciales y deportes, y fue el punto de partida para el desarrollo de la Teoría de la Relatividad de Einstein, una de las revoluciones más importantes en la historia de la ciencia.
        </p>
      </div>
    </>
  );
};

export default MrTheory;
