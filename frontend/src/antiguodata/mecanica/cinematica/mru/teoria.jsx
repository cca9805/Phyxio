import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as mruDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Movimiento Rectilíneo Uniforme",
  descripcion: "Movimiento con velocidad constante",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const MruTheory = ({ exercises }) => (
  <>
    <TheorySection title="¿Qué es el MRU?">
      <p>
        El Movimiento Rectilíneo Uniforme (MRU) es el movimiento más simple en física. Un objeto se mueve en línea recta con velocidad constante.
      </p>
      <Important>
        En el MRU, la velocidad NO cambia. No hay aceleración.
      </Important>
    </TheorySection>

    <TheorySection title="Ecuaciones Fundamentales">
      <Concept title="Ecuación de la Velocidad">
        <p>La velocidad se define como la relación entre la distancia recorrida y el tiempo empleado:</p>
        <Formula
          expression={String.raw`v = \frac{d}{t}`}
          calculatorId="mru-velocidad-distancia"
          definitions={mruDefinitions}
          exercises={exercises}
          complementary={[
            { description: "Despejar distancia", expression: String.raw`d = v \cdot t` },
            { description: "Despejar tiempo", expression: String.raw`t = \frac{d}{v}` }
          ]}
        />
        <strong>Donde:</strong>
        <ul>
          <li>v = Velocidad (m/s)</li>
          <li>d = Distancia recorrida (m)</li>
          <li>t = Tiempo transcurrido (s)</li>
        </ul>
      </Concept>
      <Concept title="Ecuación de Posición">
        <p>Permite calcular la posición final de un objeto en función de su posición inicial, velocidad y tiempo:</p>
        <Formula
          expression={String.raw`x_f = x_0 + v \cdot t`}
          calculatorId="mru-ecuacion-posicion"
          definitions={mruDefinitions}
          exercises={exercises}
          complementary={[
            { description: "Despejar velocidad", expression: String.raw`v = \frac{x_f - x_0}{t}` },
            { description: "Despejar tiempo", expression: String.raw`t = \frac{x_f - x_0}{v}` },
            { description: "Despejar posición inicial", expression: String.raw`x_0 = x_f - v \cdot t` }
          ]}
        />
        <strong>Donde:</strong>
        <ul>
          <li>x_f = Posición final (m)</li>
          <li>x_0 = Posición inicial (m)</li>
          <li>v = Velocidad (m/s)</li>
          <li>t = Tiempo transcurrido (s)</li>
        </ul>
      </Concept>
    </TheorySection>

    <TheorySection title="Ejemplo Práctico">
      <Example title="Cálculo de velocidad de un tren">
        Un tren recorre 450 km en 2.5 horas. ¿Cuál es su velocidad promedio en m/s?
        <ul>
          <li>Datos: d = 450 km = 450000 m, t = 2.5 h = 9000 s</li>
          <li>Fórmula: v = d / t</li>
          <li>Sustitución: v = 450000 m / 9000 s = 50 m/s</li>
        </ul>
        <strong>Respuesta:</strong> La velocidad promedio es 50 m/s.
      </Example>
    </TheorySection>

    <div className="theory-applications-section">
      <h2><span role="img" aria-label="aplicaciones">🌍</span> Aplicaciones en la vida real</h2>
      <div className="theory-subsection">
        <h3>🚄 Transporte ferroviario</h3>
        <p>
          Los trenes de alta velocidad como el AVE español o el Shinkansen japonés mantienen velocidades constantes durante largos tramos de su recorrido. Los ingenieros utilizan las ecuaciones del MRU para calcular tiempos de viaje, planificar horarios y optimizar el consumo de energía en los tramos donde el tren circula a velocidad constante.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>✈️ Aviación comercial</h3>
        <p>
          Durante la fase de crucero, los aviones comerciales mantienen una velocidad constante (típicamente entre 800-900 km/h). Los pilotos y sistemas de navegación utilizan las ecuaciones del MRU para calcular el tiempo estimado de llegada, el consumo de combustible y ajustar la ruta según las condiciones del viento.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🏭 Cintas transportadoras industriales</h3>
        <p>
          En fábricas y almacenes, las cintas transportadoras se diseñan para moverse a velocidad constante. Los ingenieros calculan la velocidad óptima de la cinta para maximizar la producción, considerando la distancia que deben recorrer los productos y el tiempo disponible en cada etapa del proceso.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🚗 Control de crucero en automóviles</h3>
        <p>
          El sistema de control de crucero (cruise control) mantiene el vehículo a una velocidad constante sin necesidad de presionar el acelerador. Este sistema aplica los principios del MRU para mantener la velocidad deseada, ajustando automáticamente la potencia del motor según las condiciones del terreno.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🎢 Diseño de atracciones</h3>
        <p>
          En parques de atracciones, algunos tramos de montañas rusas o atracciones acuáticas están diseñados para mantener velocidad constante. Los ingenieros utilizan las ecuaciones del MRU para calcular la duración de estos tramos y garantizar la seguridad de los pasajeros.
        </p>
      </div>
    </div>

    <div className="theory-history-section">
      <h2><span role="img" aria-label="historia">📜</span> Historia: El estudio del movimiento uniforme</h2>
      <div className="theory-subsection">
        <h3>🏛️ Aristóteles y el movimiento (384-322 a.C.)</h3>
        <p>
          Aristóteles fue el primero en intentar clasificar los tipos de movimiento. Aunque sus ideas sobre el movimiento uniforme eran incorrectas (creía que se necesitaba una fuerza constante para mantener un objeto en movimiento), su trabajo estableció las bases para el estudio sistemático del movimiento.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🔭 Galileo Galilei (1564-1642)</h3>
        <p>
          Galileo fue el primero en comprender correctamente el MRU. A través de sus experimentos con planos inclinados y péndulos, demostró que un objeto en movimiento tiende a mantener su velocidad constante si no actúan fuerzas sobre él. Introdujo el concepto de que la velocidad es la relación entre distancia y tiempo (v = d/t).
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🍎 Isaac Newton (1643-1727)</h3>
        <p>
          Newton formalizó el concepto del MRU en su Primera Ley del Movimiento (Ley de la Inercia): "Un objeto en movimiento permanecerá en movimiento con velocidad constante a menos que actúe sobre él una fuerza externa". Esta ley explica por qué existe el MRU y bajo qué condiciones se produce.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>📐 Desarrollo de la cinemática (siglo XVII-XVIII)</h3>
        <p>
          Durante los siglos XVII y XVIII, matemáticos y físicos como René Descartes y Leonhard Euler desarrollaron el sistema de coordenadas y las ecuaciones matemáticas que usamos hoy para describir el MRU. La ecuación x_f = x_0 + v·t se convirtió en la base para describir cualquier movimiento rectilíneo.
        </p>
      </div>
    </div>

    <div className="theory-anecdotes-section">
      <h2><span role="img" aria-label="anécdotas">✨</span> Anécdotas y curiosidades</h2>
      <div className="theory-subsection">
        <h3>🌌 El movimiento más uniforme del universo</h3>
        <p>
          Las sondas espaciales Voyager 1 y 2, lanzadas en 1977, viajan por el espacio interestelar a velocidad prácticamente constante (unos 17 km/s). Sin fricción ni resistencia del aire, estas naves son el ejemplo más perfecto de MRU que hemos creado. Voyager 1 ya está a más de 23 mil millones de kilómetros de la Tierra y seguirá viajando a velocidad constante durante miles de años.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🏃 El récord de velocidad constante</h3>
        <p>
          El atleta keniano Eliud Kipchoge logró correr un maratón (42.195 km) en menos de 2 horas en 2019, manteniendo una velocidad promedio increíblemente constante de 5.88 m/s (21.2 km/h). Lo asombroso es que su velocidad varió menos del 2% durante toda la carrera, demostrando un control extraordinario del ritmo.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🚄 El tren más puntual del mundo</h3>
        <p>
          Los trenes Shinkansen de Japón son famosos por su puntualidad extrema. En 2018, el retraso promedio fue de solo 0.9 minutos. Esto es posible gracias al control preciso de la velocidad constante en cada tramo, calculado con las ecuaciones del MRU. Los maquinistas siguen perfiles de velocidad tan precisos que el margen de error es de apenas unos segundos en viajes de varias horas.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🎯 La paradoja del movimiento uniforme</h3>
        <p>
          En la vida real, el MRU perfecto es casi imposible de lograr en la Tierra debido a la fricción y la resistencia del aire. Incluso un objeto deslizándose sobre hielo eventualmente se detendrá. El único lugar donde el MRU puede existir de forma perfecta es en el vacío del espacio, donde no hay fuerzas de fricción.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>⚡ La velocidad constante de la luz</h3>
        <p>
          La luz en el vacío es el único fenómeno natural que siempre viaja a velocidad constante: 299,792,458 m/s. Esta velocidad es tan fundamental que se usa para definir el metro: un metro es la distancia que recorre la luz en 1/299,792,458 segundos. La luz es el ejemplo perfecto de MRU a escala cósmica.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🎬 Efectos especiales y MRU</h3>
        <p>
          En el cine, cuando ves escenas de naves espaciales moviéndose suavemente por el espacio, los animadores están aplicando MRU. A diferencia de los aviones que necesitan motores constantemente encendidos, las naves en el espacio pueden apagar sus motores y seguir moviéndose a velocidad constante indefinidamente, tal como predice la Primera Ley de Newton.
        </p>
      </div>
    </div>

    <div className="theory-summary-section">
      <h2><span role="img" aria-label="resumen">📝</span> Resumen</h2>
      <ul>
        <li>El MRU es un movimiento en línea recta con velocidad constante (aceleración = 0).</li>
        <li>La ecuación fundamental es v = d/t, que relaciona velocidad, distancia y tiempo.</li>
        <li>La ecuación de posición x_f = x_0 + v·t permite calcular la ubicación de un objeto en cualquier momento.</li>
        <li>El MRU es una idealización; en la Tierra siempre hay fuerzas de fricción que eventualmente modifican la velocidad.</li>
        <li>En el espacio, sin fricción, el MRU puede mantenerse indefinidamente según la Primera Ley de Newton.</li>
      </ul>
    </div>
  </>
);
export default MruTheory;