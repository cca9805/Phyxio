import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Aplicaciones de la Estática",
  descripcion: "Aplicaciones prácticas de la estática en ingeniería y arquitectura",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const AplicacionesTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Aplicaciones en Ingeniería y Arquitectura">
        <p>
          La estática es la base sobre la que se diseñan innumerables estructuras que vemos a diario, desde puentes y edificios hasta componentes de maquinaria. Analizar cómo las fuerzas se distribuyen en un cuerpo en reposo es crucial para garantizar la seguridad y estabilidad.
        </p>
        <Important>
          <p>Uno de los análisis más fundamentales en ingeniería estructural es el cálculo de las fuerzas de reacción en los apoyos de una viga. Estas fuerzas son las que ejerce el soporte sobre la viga para mantenerla en equilibrio bajo las cargas aplicadas.</p>
        </Important>
      </TheorySection>

      <TheorySection title="Análisis de Viga Simplemente Apoyada">
        <Concept title="Viga con Carga Puntual">
          <p>
            Consideremos una viga de longitud <em>L</em>, apoyada en sus extremos (un apoyo fijo y un apoyo móvil) y sometida a una carga puntual <em>P</em> a una distancia <em>a</em> de un extremo. Para que la viga esté en equilibrio, la suma de todas las fuerzas y de todos los momentos debe ser cero.
          </p>
          <Formula
            expression={String.raw`R_A + R_B = P`}
            calculatorId="viga-simplemente-apoyada"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Reacción en B (tomando momentos en A)", expression: String.raw`R_B = \frac{P \cdot a}{L}` },
              { description: "Reacción en A (tomando momentos en B)", expression: String.raw`R_A = \frac{P \cdot (L-a)}{L}` },
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>R_A: Reacción en el apoyo A (N)</li>
            <li>R_B: Reacción en el apoyo B (N)</li>
            <li>P: Carga puntual aplicada (N)</li>
            <li>a: Distancia de la carga al apoyo A (m)</li>
            <li>L: Longitud total de la viga (m)</li>
          </ul>
          
          <p>
            Utilizando la sumatoria de momentos en uno de los apoyos (por ejemplo, en el apoyo A), podemos despejar la reacción en el otro apoyo (B). Luego, con la sumatoria de fuerzas verticales, encontramos la reacción en A. Este es un procedimiento estándar en el diseño de cualquier estructura.
          </p>
        </Concept>
      </TheorySection>

      <h2><span>🏗️</span> Aplicaciones Prácticas</h2>
      <div className="theory-applications-section">
        <div className="theory-subsection">
          <h3>🌉 Puentes y Viaductos</h3>
          <div className="theory-subsection">
            <p>
              El análisis estático es fundamental en el diseño de puentes. Los ingenieros calculan las reacciones en los apoyos, 
              las fuerzas internas en vigas y cables, y verifican que ningún elemento supere su resistencia máxima. El puente Golden Gate, 
              por ejemplo, soporta su propio peso (más de 800,000 toneladas) y cargas variables del tráfico mediante un sistema de cables 
              y torres diseñado con principios de estática.
            </p>
          </div>
        </div>
        <div className="theory-subsection">
          <h3>🏢 Edificios y Rascacielos</h3>
          <div className="theory-subsection">
            <p>
              Los rascacielos modernos como el Burj Khalifa (828 m) deben resistir no solo su peso propio sino también fuerzas laterales 
              del viento. El análisis estático determina cómo se distribuyen las cargas a través de columnas, vigas y cimientos. 
              Cada piso transfiere su carga a los elementos inferiores hasta llegar a la cimentación.
            </p>
          </div>
        </div>
        <div className="theory-subsection">
          <h3>🏗️ Grúas de Construcción</h3>
          <div className="theory-subsection">
            <p>
              Las grúas torre pueden levantar cargas de hasta 20 toneladas a alturas superiores a 80 metros. El análisis de momentos 
              y fuerzas de reacción es crítico para evitar el vuelco. El contrapeso en la parte posterior de la grúa genera un momento 
              que equilibra el momento producido por la carga suspendida.
            </p>
          </div>
        </div>
        <div className="theory-subsection">
          <h3>⚙️ Maquinaria Industrial</h3>
          <div className="theory-subsection">
            <p>
              Desde prensas hidráulicas hasta brazos robóticos, la estática permite calcular las fuerzas en cada articulación y 
              componente. En una excavadora, por ejemplo, se analizan las fuerzas en los cilindros hidráulicos y las reacciones 
              en los pivotes para dimensionar correctamente cada elemento.
            </p>
          </div>
        </div>
        <div className="theory-subsection">
          <h3>🚗 Estructuras de Vehículos</h3>
          <div className="theory-subsection">
            <p>
              El chasis de un automóvil se diseña usando análisis estático para distribuir el peso del motor, pasajeros y carga. 
              Los puntos de apoyo de las ruedas experimentan reacciones que varían según la distribución de peso, lo que afecta 
              al comportamiento dinámico del vehículo.
            </p>
          </div>
        </div>
        <div className="theory-subsection">
          <h3>🪑 Mobiliario y Diseño</h3>
          <div className="theory-subsection">
            <p>
              Incluso objetos cotidianos como sillas, estanterías y mesas se diseñan aplicando principios de estática. Una silla 
              debe soportar el peso de una persona sin volcarse ni romperse, lo que requiere calcular las reacciones en las patas 
              y verificar la resistencia de los materiales.
            </p>
          </div>
        </div>
      </div>

      <h2><span>📜</span> Historia y Desarrollo</h2>
      <div className="theory-history-section">
        <div className="theory-subsection">
          <h3>🏛️ Antigüedad: Construcciones Empíricas (3000 a.C. - 500 d.C.)</h3>
          <p>
            Las pirámides de Egipto, el Partenón griego y los acueductos romanos se construyeron sin teoría formal de estática, 
            pero aplicando conocimientos empíricos sobre equilibrio y distribución de cargas. Los romanos desarrollaron el arco, 
            que distribuye eficientemente las cargas verticales mediante fuerzas de compresión.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔬 Renacimiento: Nacimiento de la Estática (1500-1700)</h3>
          <p>
            Leonardo da Vinci (1452-1519) estudió el equilibrio de fuerzas en máquinas y estructuras. Simon Stevin (1548-1620) 
            formuló las primeras leyes del equilibrio de fuerzas y desarrolló el concepto de momento. Galileo Galilei (1564-1642) 
            analizó la resistencia de vigas y estableció las bases de la mecánica de materiales.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>⚖️ Era Clásica: Formalización Matemática (1700-1850)</h3>
          <p>
            Isaac Newton (1687) estableció las leyes del movimiento que incluyen el equilibrio estático como caso particular. 
            Leonhard Euler (1707-1783) desarrolló la teoría de pandeo de columnas. Charles-Augustin de Coulomb (1736-1806) 
            estudió la fricción y la resistencia de materiales.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏗️ Revolución Industrial: Aplicación Práctica (1850-1950)</h3>
          <p>
            La construcción de puentes de hierro y acero impulsó el desarrollo de métodos de análisis estructural. 
            Gustave Eiffel diseñó la Torre Eiffel (1889) aplicando cálculos precisos de estática. El desarrollo del 
            hormigón armado por Joseph Monier (1867) revolucionó la construcción.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>💻 Era Moderna: Análisis Computacional (1950-presente)</h3>
          <p>
            El método de elementos finitos (FEM), desarrollado en los años 1950-1960, permite analizar estructuras complejas 
            mediante computadoras. Software como SAP2000, ANSYS y Abaqus resuelven sistemas con millones de ecuaciones, 
            permitiendo diseñar estructuras cada vez más audaces y eficientes.
          </p>
        </div>
      </div>

      <h2><span>🎯</span> Anécdotas y Curiosidades</h2>
      <div className="theory-anecdotes-section">
        <div className="theory-subsection">
          <h3>🗼 La Torre Inclinada de Pisa</h3>
          <p>
            Comenzó a inclinarse durante su construcción en 1173 debido a un suelo blando. La torre permanece en pie porque 
            su centro de gravedad aún cae dentro de su base de apoyo. En 2001, se estabilizó extrayendo tierra del lado norte, 
            reduciendo la inclinación de 5.5° a 3.97°. Es un ejemplo perfecto de equilibrio límite.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🌉 El Colapso del Puente de Tacoma Narrows (1940)</h3>
          <p>
            Aunque el puente cumplía con los requisitos de estática, colapsó por resonancia aerodinámica (dinámica). 
            Este desastre enseñó que el análisis estático no es suficiente: también hay que considerar efectos dinámicos 
            como viento y vibraciones. El puente se retorció violentamente antes de colapsar, todo filmado en video.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏗️ El Burj Khalifa y el Viento</h3>
          <p>
            El edificio más alto del mundo (828 m) puede oscilar hasta 2 metros en su cúspide debido al viento. 
            Su forma en Y reduce las fuerzas laterales en un 25% comparado con un diseño rectangular. El análisis estático 
            determinó que necesita 192 pilotes de 1.5 m de diámetro enterrados 50 m en el suelo para soportar 500,000 toneladas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>⚖️ La Balanza de Precisión más Sensible</h3>
          <p>
            Las balanzas de fuerza atómica (AFM) pueden medir fuerzas de piconewtons (10⁻¹² N), equivalente al peso de 
            unas pocas células. Estas balanzas aplican principios de estática a escala nanométrica para estudiar fuerzas 
            entre átomos y moléculas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🎪 Equilibristas y Centro de Gravedad</h3>
          <p>
            Los equilibristas en la cuerda floja usan una barra larga (hasta 12 m) que baja su centro de gravedad combinado, 
            aumentando la estabilidad. Philippe Petit caminó entre las Torres Gemelas en 1974 a 417 m de altura, 
            aplicando intuitivamente principios de equilibrio estático.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏛️ El Panteón de Roma</h3>
          <p>
            Su cúpula de hormigón (43 m de diámetro) ha permanecido intacta desde el año 126 d.C., siendo la cúpula de 
            hormigón no reforzado más grande del mundo. Los romanos usaron hormigón más ligero en la parte superior 
            (con piedra pómez) para reducir el peso, demostrando comprensión intuitiva de la distribución de cargas.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          La estática es fundamental en el diseño de estructuras y máquinas. El análisis de vigas simplemente apoyadas 
          ilustra cómo calcular las reacciones en los apoyos usando las condiciones de equilibrio: suma de fuerzas igual 
          a cero y suma de momentos igual a cero.
        </p>
        <p>
          Desde las pirámides antiguas hasta los rascacielos modernos, los principios de estática han permitido construir 
          estructuras cada vez más grandes y complejas. El desarrollo de métodos computacionales ha revolucionado el análisis 
          estructural, pero los fundamentos siguen siendo los mismos establecidos hace siglos.
        </p>
      </div>
    </>
  );
};

export default AplicacionesTheory;
