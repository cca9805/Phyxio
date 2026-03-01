import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as vectoresDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Vectores en Estática",
  descripcion: "Representación, componentes y operaciones con vectores de fuerza",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const VectoresTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a los Vectores">
        <p>
          En física, no todas las cantidades son iguales. Algunas, como la temperatura o la masa, quedan completamente descritas con un solo número y se llaman escalares. Otras, como la fuerza o la velocidad, necesitan más información: una magnitud (cuán grande es) y una dirección (hacia dónde apunta). Estas cantidades se llaman vectores.
        </p>
        <Important>
          <p>Un vector es un objeto matemático que tiene magnitud, dirección y sentido. Son herramientas fundamentales en estática y en toda la física para describir fuerzas, posiciones y desplazamientos.</p>
        </Important>
      </TheorySection>

      <TheorySection title="Componentes de un Vector">
        <p>
          Trabajar con flechas puede ser complicado. Es mucho más fácil descomponer un vector en sus componentes cartesianas. Imagina la "sombra" que el vector proyecta sobre los ejes X e Y. Esas sombras son sus componentes.
        </p>
        <Concept title="Cálculo de Componentes a partir de Magnitud y Ángulo">
          <p>Si conoces la magnitud (longitud) de un vector, denotada como |V⃗|, y el ángulo (θ) que forma con el eje X positivo, puedes encontrar sus componentes usando trigonometría.</p>
          <Formula
            expression={String.raw`V_x = |\vec{V}| \cdot \cos(\theta)`}
            calculatorId="vector-components"
            definitions={vectoresDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Componente Y", expression: String.raw`V_y = |\vec{V}| \cdot \sin(\theta)` },
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>V_x: Componente X del vector</li>
            <li>V_y: Componente Y del vector</li>
            <li>|V⃗|: Magnitud (longitud) del vector</li>
            <li>θ: Ángulo con respecto al eje X positivo (grados o radianes)</li>
          </ul>
        </Concept>
        <Example>
          <p>Una fuerza de 10 N aplicada a 30° tiene una componente X de `10 * cos(30°) ≈ 8.66 N` (empuja hacia la derecha) y una componente Y de `10 * sin(30°) = 5 N` (empuja hacia arriba).</p>
        </Example>
      </TheorySection>

      <TheorySection title="Magnitud y Dirección a partir de Componentes">
        <p>
          También podemos hacer el proceso inverso. Si tienes las componentes de un vector, puedes reconstruir el vector original, calculando su magnitud y su dirección.
        </p>
        <Concept title="Cálculo de Magnitud y Ángulo">
          <p>La magnitud se encuentra usando el <strong>Teorema de Pitágoras</strong> con las componentes. La dirección (ángulo) se encuentra usando la función <strong>arcotangente</strong>.</p>
          <Formula
            expression={String.raw`|\vec{V}| = \sqrt{V_x^2 + V_y^2}`}
            calculatorId="vector-magnitude-direction"
            definitions={vectoresDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Ángulo (θ)", expression: String.raw`\theta = \text{atan2}(V_y, V_x)` },
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>|V⃗|: Magnitud del vector</li>
            <li>V_x: Componente X del vector</li>
            <li>V_y: Componente Y del vector</li>
            <li>θ: Ángulo del vector con respecto al eje X (grados o radianes)</li>
          </ul>
          
           <p>Nota: Se usa `atan2(Vy, Vx)` en lugar de `atan(Vy/Vx)` porque `atan2` considera los signos de ambas componentes para dar el ángulo correcto en el cuadrante correcto (0° a 360°).</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Operaciones con Vectores">
        <Concept title="Suma y Resta de Vectores">
          <p>
            La forma más sencilla de sumar o restar vectores es hacerlo componente a componente. La suma de dos o más vectores se llama vector resultante. Para que un sistema esté en equilibrio (un concepto clave en estática), la suma de todos los vectores de fuerza debe ser cero.
          </p>
           <Formula
            expression={String.raw`R_x = A_x + B_x`}
            calculatorId="vector-sum"
            definitions={vectoresDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Componente Y de la Resultante", expression: String.raw`R_y = A_y + B_y` },
              { description: "Resta (Componente X)", expression: String.raw`R_x = A_x - B_x` },
              { description: "Resta (Componente Y)", expression: String.raw`R_y = A_y - B_y` },
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>R_x, R_y: Componentes del vector resultante</li>
            <li>A_x, A_y: Componentes del vector A</li>
            <li>B_x, B_y: Componentes del vector B</li>
          </ul>
        </Concept>
        <Concept title="Producto Escalar (Producto Punto)">
            <p>El producto escalar es una operación entre dos vectores que da como resultado un número (un escalar). Es útil para calcular el trabajo realizado por una fuerza o para encontrar el ángulo entre dos vectores.</p>
            <Formula
                expression={String.raw`\vec{A} \cdot \vec{B} = A_x B_x + A_y B_y`}
                calculatorId="vector-dot-product"
                definitions={vectoresDefinitions}
                exercises={exercises}
                complementary={[
                  { description: "Definición Alternativa", expression: String.raw`\vec{A} \cdot \vec{B} = |\vec{A}| |\vec{B}| \cos(\theta)` },
                  { description: "Ángulo desde Producto Punto", expression: String.raw`\theta = \text{acos}\left( \frac{\vec{A} \cdot \vec{B}}{|\vec{A}| |\vec{B}|} \right)` },
                ]}
            />
            
            <p>Donde:</p>
            <ul>
              <li>A⃗ · B⃗: Producto escalar (resultado escalar)</li>
              <li>A_x, A_y: Componentes del vector A</li>
              <li>B_x, B_y: Componentes del vector B</li>
              <li>|A⃗|, |B⃗|: Magnitudes de los vectores A y B</li>
              <li>θ: Ángulo entre los dos vectores (grados o radianes)</li>
            </ul>
        </Concept>
      </TheorySection>

      <h2><span>🏗️</span> Aplicaciones Prácticas</h2>
      <div className="theory-applications-section">
        <div className="theory-subsection">
          <h3>🏗️ Análisis de Fuerzas en Estructuras</h3>
          <p>
            En el diseño de puentes y edificios, las fuerzas (peso, viento, cargas) se representan como vectores. 
            Los ingenieros descomponen cada fuerza en componentes horizontales y verticales para calcular las tensiones 
            en vigas, cables y columnas. El puente Golden Gate soporta fuerzas vectoriales de viento de hasta 160 km/h.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>✈️ Navegación Aérea y Marítima</h3>
          <p>
            Los pilotos y navegantes usan vectores para calcular rumbos. Si un avión vuela a 500 km/h hacia el norte 
            pero hay viento de 80 km/h del oeste, el vector resultante determina la velocidad y dirección real del avión. 
            Los sistemas GPS calculan posiciones usando vectores en tres dimensiones.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🎮 Gráficos por Computadora y Videojuegos</h3>
          <p>
            Los motores gráficos 3D usan vectores para representar posiciones, direcciones de luz, movimientos de cámara 
            y física de objetos. El producto escalar determina si una superficie está iluminada o en sombra. 
            Los videojuegos calculan millones de operaciones vectoriales por segundo.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🚁 Control de Drones y Robots</h3>
          <p>
            Los drones usan vectores para mantener estabilidad y navegar. Los sensores miden aceleración y rotación 
            como vectores, y el sistema de control ajusta las fuerzas de los motores (también vectores) para mantener 
            el vuelo estable. Los brazos robóticos calculan fuerzas vectoriales en cada articulación.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>⚽ Análisis Deportivo</h3>
          <p>
            En fútbol, el vector velocidad del balón se descompone para analizar tiros. Un tiro libre con efecto 
            tiene componentes de velocidad horizontal, vertical y de rotación. Los sistemas de análisis deportivo 
            rastrean vectores de posición y velocidad de jugadores en tiempo real.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔬 Física de Partículas</h3>
          <p>
            En aceleradores como el LHC del CERN, las partículas se aceleran usando campos electromagnéticos (vectores). 
            Los detectores miden el momento (vector) de las partículas resultantes de colisiones a velocidades cercanas 
            a la luz. El análisis vectorial es fundamental para descubrir nuevas partículas.
          </p>
        </div>
      </div>

      <h2><span>📜</span> Historia y Desarrollo</h2>
      <div className="theory-history-section">
        <div className="theory-subsection">
          <h3>🏛️ Antigüedad: Conceptos Intuitivos (300 a.C.)</h3>
          <p>
            Arquímedes (287-212 a.C.) usó conceptos vectoriales intuitivos al estudiar palancas y equilibrio, 
            aunque no tenía la notación matemática moderna. Comprendía que las fuerzas tienen magnitud y dirección, 
            y que se pueden combinar para producir efectos resultantes.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔬 Renacimiento: Primeros Análisis (1500-1700)</h3>
          <p>
            Simon Stevin (1548-1620) desarrolló el paralelogramo de fuerzas, demostrando gráficamente cómo sumar 
            vectores. Galileo Galilei (1564-1642) descompuso el movimiento de proyectiles en componentes horizontal 
            y vertical, estableciendo las bases del análisis vectorial en física.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>⚖️ Era Clásica: Formalización Matemática (1700-1850)</h3>
          <p>
            Isaac Newton (1687) usó cantidades vectoriales en sus leyes del movimiento, aunque sin notación formal. 
            Leonhard Euler (1707-1783) introdujo notación para representar cantidades con dirección. 
            William Rowan Hamilton (1805-1865) desarrolló el álgebra de cuaterniones, precursora del análisis vectorial moderno.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>📐 Desarrollo del Cálculo Vectorial (1850-1900)</h3>
          <p>
            Hermann Grassmann (1809-1877) y William Clifford (1845-1879) desarrollaron el álgebra geométrica. 
            Josiah Willard Gibbs (1839-1903) y Oliver Heaviside (1850-1925) crearon independientemente la notación 
            vectorial moderna que usamos hoy: V⃗, componentes (Vx, Vy, Vz), producto escalar y vectorial.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>💻 Era Moderna: Aplicaciones Computacionales (1950-presente)</h3>
          <p>
            El desarrollo de computadoras permitió cálculos vectoriales masivos. Los procesadores gráficos (GPU) 
            están optimizados para operaciones vectoriales, realizando billones de cálculos por segundo. 
            El álgebra lineal y vectorial es fundamental en inteligencia artificial, aprendizaje automático y física computacional.
          </p>
        </div>
      </div>

      <h2><span>🎯</span> Anécdotas y Curiosidades</h2>
      <div className="theory-anecdotes-section">
        <div className="theory-subsection">
          <h3>🎯 El Paralelogramo de Stevin</h3>
          <p>
            Simon Stevin demostró la regla del paralelogramo usando un experimento ingenioso: una cadena con pesos 
            colgando sobre una superficie triangular. Demostró que el equilibrio solo se logra cuando las fuerzas 
            se suman vectorialmente según la regla del paralelogramo. Este experimento está grabado en su lápida.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>✈️ El Vuelo 143 de Air Canada (1983)</h3>
          <p>
            Un Boeing 767 se quedó sin combustible a 12,000 metros por un error de conversión de unidades. 
            El piloto tuvo que planear sin motores, usando vectores de velocidad y viento para calcular el mejor 
            ángulo de descenso. Aterrizó exitosamente en una pista abandonada, salvando a todos los pasajeros. 
            Es conocido como el "Planeo de Gimli".
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🎮 El Bug del Quake III</h3>
          <p>
            El videojuego Quake III (1999) usaba un algoritmo ingenioso para calcular la raíz cuadrada inversa 
            (necesaria para normalizar vectores) llamado "Fast Inverse Square Root". Usaba un truco de bits que 
            era 4 veces más rápido que el método estándar, permitiendo gráficos 3D fluidos en computadoras de la época.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🚀 El Apolo 11 y los Vectores</h3>
          <p>
            La computadora del Apolo 11 (AGC) tenía solo 4 KB de RAM pero calculaba vectores de posición, velocidad 
            y aceleración en tiempo real para navegar a la Luna. Un error de sobrecarga de cálculos vectoriales 
            casi aborta el alunizaje, pero los ingenieros lo resolvieron priorizando los cálculos más críticos.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏐 El Efecto Magnus en Deportes</h3>
          <p>
            Cuando un balón gira mientras se mueve, experimenta una fuerza lateral (efecto Magnus) perpendicular 
            a su velocidad. Los jugadores de fútbol, tenis y béisbol usan este efecto intuitivamente. 
            Cristiano Ronaldo puede generar tiros libres con velocidades de 130 km/h y curvaturas de hasta 3 metros, 
            todo explicable con vectores de velocidad y fuerza.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔬 El Vector más Pequeño Medido</h3>
          <p>
            Los microscopios de fuerza atómica (AFM) pueden medir desplazamientos vectoriales de 0.01 nanómetros 
            (el diámetro de un átomo de hidrógeno es 0.1 nm). Esto permite "ver" átomos individuales y medir 
            fuerzas de piconewtons entre moléculas.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          Los vectores son herramientas matemáticas fundamentales que representan cantidades con magnitud, 
          dirección y sentido. Se pueden descomponer en componentes cartesianas usando trigonometría, 
          y reconstruir usando el teorema de Pitágoras y la función arcotangente.
        </p>
        <p>
          Las operaciones vectoriales incluyen suma/resta (componente a componente) y producto escalar 
          (que da un número). Estas operaciones son esenciales en estática para analizar fuerzas, 
          calcular equilibrios y resolver problemas estructurales.
        </p>
        <p>
          Desde los estudios de Arquímedes hasta las aplicaciones modernas en videojuegos, navegación 
          y física de partículas, los vectores son indispensables en ciencia e ingeniería. Su desarrollo 
          matemático en el siglo XIX permitió avances revolucionarios en física y tecnología.
        </p>
      </div>
    </>
  );
};

export default VectoresTheory;
