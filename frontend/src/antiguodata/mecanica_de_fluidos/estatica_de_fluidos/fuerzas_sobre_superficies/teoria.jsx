import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from "./definitions.js";

export const metadata = {
  titulo: "Fuerzas sobre Superficies",
  descripcion: "Fuerzas hidrostáticas en superficies sumergidas",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a las Fuerzas Hidrostáticas">
        <p>
          Cuando una superficie está sumergida en un fluido en reposo, experimenta una fuerza 
          debido a la presión del fluido. Esta fuerza es perpendicular a la superficie en cada punto 
          y su magnitud depende de la profundidad y el área de la superficie. El análisis de estas 
          fuerzas es fundamental para el diseño de estructuras hidráulicas como presas, compuertas, 
          tanques de almacenamiento y cascos de barcos.
        </p>
        <p>
          La presión en un fluido en reposo aumenta linealmente con la profundidad según la ecuación 
          P = ρgh. Como resultado, la distribución de presión sobre una superficie sumergida no es 
          uniforme, siendo mayor en las partes más profundas. Esto genera no solo una fuerza resultante, 
          sino también un momento que debe considerarse en el diseño estructural.
        </p>
      </TheorySection>

      <TheorySection title="Fuerza sobre Superficie Plana Horizontal">
        <Concept title="Cálculo de la Fuerza Hidrostática">
          <p>
            Para una superficie plana horizontal sumergida a una profundidad constante, la presión es 
            uniforme en toda la superficie. La fuerza hidrostática se calcula multiplicando la presión 
            en el centroide de la superficie por el área total.
          </p>
          <Formula 
            expression={String.raw`F = \rho g h_c A`} 
            calculatorId="fuerza-plana" 
            definitions={definitions} 
            exercises={exercises}
            complementary={[
              { description: "Calcular Profundidad", expression: String.raw`h_c = \frac{F}{\rho g A}` },
              { description: "Calcular Área", expression: String.raw`A = \frac{F}{\rho g h_c}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>F: Fuerza hidrostática (N)</li>
            <li>ρ: Densidad del fluido (kg/m³)</li>
            <li>g: Aceleración gravitacional (9.81 m/s²)</li>
            <li>h_c: Profundidad del centroide de la superficie (m)</li>
            <li>A: Área de la superficie (m²)</li>
          </ul>

          <Example>
            <p>
              Una compuerta rectangular de 2×3 m (6 m²) con su centroide a 5 m de profundidad 
              en agua experimenta una fuerza de F = 1000 × 9.81 × 5 × 6 = 294,300 N ≈ 294.3 kN.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Centro de Presión">
        <Concept title="Ubicación del Punto de Aplicación">
          <p>
            La fuerza resultante no actúa en el centroide geométrico de la superficie, sino en un 
            punto llamado centro de presión. Este punto está ubicado por debajo del centroide debido 
            a que la presión aumenta con la profundidad, haciendo que las fuerzas en la parte inferior 
            de la superficie sean mayores.
          </p>
          
          <p>
            Para una superficie plana inclinada, la profundidad del centro de presión se calcula como:
          </p>
          
          <p>
            y_cp = y_c + (I_c / (y_c × A))
          </p>

          <p>Donde:</p>
          <ul>
            <li>y_cp: Distancia del centro de presión desde la superficie libre (m)</li>
            <li>y_c: Distancia del centroide desde la superficie libre (m)</li>
            <li>I_c: Segundo momento de área respecto al eje que pasa por el centroide (m⁴)</li>
            <li>A: Área de la superficie (m²)</li>
          </ul>

          <Important>
            <p>
              El centro de presión siempre está por debajo del centroide geométrico. A mayor profundidad, 
              la diferencia entre ambos puntos disminuye. Para superficies muy profundas, el centro de 
              presión se aproxima al centroide.
            </p>
          </Important>

          <Example>
            <p>
              Para una compuerta rectangular vertical de ancho b y altura h con su borde superior en la 
              superficie, el centroide está a h/2 de profundidad, pero el centro de presión está a 2h/3 
              de profundidad, es decir, a h/6 por debajo del centroide.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Superficies Planas Inclinadas">
        <Concept title="Análisis de Superficies Inclinadas">
          <p>
            Cuando una superficie plana está inclinada respecto a la horizontal, la distribución de 
            presión sigue siendo lineal con la profundidad, pero el análisis requiere considerar la 
            geometría inclinada. La fuerza total sigue siendo F = ρ × g × h_c × A, donde h_c es la 
            profundidad vertical del centroide.
          </p>

          <p>
            Para una superficie inclinada un ángulo θ respecto a la horizontal:
          </p>
          <ul>
            <li>La profundidad del centroide: h_c = y_c × sin(θ)</li>
            <li>La fuerza actúa perpendicular a la superficie</li>
            <li>El centro de presión está más abajo que el centroide a lo largo de la superficie</li>
          </ul>

          <Example>
            <p>
              Una compuerta cuadrada de 2×2 m está inclinada 45° respecto a la horizontal, con su 
              centroide a 3 m de profundidad vertical. La fuerza sobre ella es F = 1000 × 9.81 × 3 × 4 
              = 117,720 N ≈ 117.7 kN, actuando perpendicular a la superficie.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Momento de la Fuerza Hidrostática">
        <Concept title="Momento sobre un Eje">
          <p>
            Cuando una superficie está articulada o soportada en un punto, la fuerza hidrostática 
            genera un momento que tiende a rotar la superficie. Este momento es crucial para el diseño 
            de compuertas y válvulas hidráulicas.
          </p>

          <p>
            El momento respecto a un punto se calcula como:
          </p>
          <p>
            M = F × d
          </p>

          <p>Donde:</p>
          <ul>
            <li>M: Momento (N·m)</li>
            <li>F: Fuerza hidrostática (N)</li>
            <li>d: Distancia perpendicular desde el punto de apoyo al centro de presión (m)</li>
          </ul>

          <Important>
            <p>
              Para compuertas articuladas, el momento debe ser equilibrado por un mecanismo de apertura 
              o cierre. El diseño debe considerar el momento máximo que ocurre cuando el nivel del agua 
              es máximo.
            </p>
          </Important>

          <Example>
            <p>
              Una compuerta rectangular de 2 m de ancho y 3 m de altura está articulada en su parte 
              superior. Con el agua al nivel del borde superior, la fuerza es 88,290 N actuando a 2 m 
              del eje (centro de presión a 2/3 de la altura). El momento es M = 88,290 × 2 = 176,580 N·m.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Fuerzas sobre Superficies Curvas">
        <Concept title="Componentes Horizontal y Vertical">
          <p>
            Para superficies curvas, la fuerza hidrostática no es perpendicular en toda la superficie. 
            Es más conveniente descomponer la fuerza resultante en componentes horizontal y vertical.
          </p>

          <p>Componente horizontal:</p>
          <p>
            F_h = ρ × g × h_c × A_proyectada_vertical
          </p>
          <p>
            La componente horizontal es igual a la fuerza sobre la proyección vertical de la superficie 
            curva. Actúa en el centro de presión de esta proyección.
          </p>

          <p>Componente vertical:</p>
          <p>
            F_v = ρ × g × V_fluido
          </p>
          <p>
            La componente vertical es igual al peso del volumen de fluido (real o imaginario) que está 
            directamente encima de la superficie curva. Actúa en el centroide de este volumen.
          </p>

          <Important>
            <p>
              Para superficies curvas convexas (vistas desde el fluido), el volumen de fluido es real. 
              Para superficies cóncavas, el volumen es imaginario y la fuerza vertical apunta hacia abajo.
            </p>
          </Important>

          <Example>
            <p>
              Un cilindro horizontal de 1 m de radio y 2 m de longitud está sumergido con su eje a 2 m 
              de profundidad. La componente horizontal es la fuerza sobre un rectángulo de 2×2 m. La 
              componente vertical es el peso del agua en un semicilindro de volumen π×1²×2/2 = π m³.
            </p>
          </Example>
        </Concept>

        <Concept title="Fuerza Resultante">
          <p>
            La magnitud de la fuerza resultante sobre una superficie curva se obtiene combinando las 
            componentes horizontal y vertical:
          </p>
          <p>
            F_R = √(F_h² + F_v²)
          </p>
          <p>
            La dirección de la fuerza resultante forma un ángulo θ con la horizontal:
          </p>
          <p>
            θ = tan⁻¹(F_v / F_h)
          </p>
          <p>
            La línea de acción de la fuerza resultante pasa por el punto de intersección de las líneas 
            de acción de las componentes horizontal y vertical.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Segundo Momento de Área">
        <Concept title="Momentos de Inercia para Formas Comunes">
          <p>
            El segundo momento de área (momento de inercia) es necesario para calcular el centro de 
            presión. Para formas geométricas comunes respecto a un eje que pasa por su centroide:
          </p>

          <p>Rectángulo (base b, altura h):</p>
          <ul>
            <li>I_c = (b × h³) / 12</li>
          </ul>

          <p>Círculo (radio r):</p>
          <ul>
            <li>I_c = π × r⁴ / 4</li>
          </ul>

          <p>Triángulo (base b, altura h):</p>
          <ul>
            <li>I_c = (b × h³) / 36</li>
          </ul>

          <p>
            Para calcular el momento de inercia respecto a un eje paralelo que no pasa por el centroide, 
            se usa el teorema de ejes paralelos:
          </p>
          <p>
            I = I_c + A × d²
          </p>
          <p>
            Donde d es la distancia entre los dos ejes paralelos.
          </p>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>Diseño de Presas y Diques</h3>
          <p>
            Las presas deben resistir enormes fuerzas hidrostáticas. La Presa de las Tres Gargantas en China 
            retiene 39.3 km³ de agua, generando fuerzas de millones de toneladas. El diseño considera la 
            distribución triangular de presión, con el centro de presión a 2/3 de la altura desde el fondo. 
            Las presas de gravedad usan su propio peso para resistir el vuelco, mientras que las presas de 
            arco transfieren las fuerzas a las paredes del cañón. El análisis de fuerzas hidrostáticas es 
            crítico para garantizar la estabilidad y prevenir fallos catastróficos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Compuertas Hidráulicas</h3>
          <p>
            Las compuertas controlan el flujo de agua en canales, esclusas y sistemas de riego. Las compuertas 
            radiales (Tainter) están articuladas en un punto sobre el centro de presión, minimizando el momento 
            de apertura. Las compuertas deslizantes requieren mecanismos potentes para vencer la fuerza 
            hidrostática. En el Canal de Panamá, las compuertas de las esclusas miden 20 m de alto y deben 
            resistir fuerzas de miles de toneladas. El diseño considera no solo la fuerza total sino también 
            su punto de aplicación para dimensionar los mecanismos de operación.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Tanques de Almacenamiento</h3>
          <p>
            Los tanques de agua, petróleo y productos químicos deben diseñarse para resistir la presión 
            hidrostática interna. Los tanques cilíndricos verticales experimentan fuerzas máximas en el fondo, 
            requiriendo paredes más gruesas en la base. Los tanques elevados deben considerar tanto las fuerzas 
            hidrostáticas como las cargas sísmicas. Los tanques subterráneos deben resistir tanto la presión 
            interna del líquido como la presión externa del suelo. El análisis de esfuerzos en las paredes 
            determina el espesor necesario del material.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Submarinos y Cascos de Barcos</h3>
          <p>
            Los submarinos operan a profundidades donde la presión puede superar 100 atmósferas. El casco 
            resistente debe soportar fuerzas hidrostáticas uniformes de millones de newtons. Las ventanas 
            de observación son superficies curvas diseñadas para distribuir las fuerzas eficientemente. 
            Los cascos de barcos experimentan fuerzas asimétricas debido a las olas, requiriendo análisis 
            dinámico además del estático. El Trieste descendió a 10,916 m donde la presión alcanza 1100 
            atmósferas, requiriendo una esfera de acero de 12.7 cm de espesor.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Ventanas de Acuarios</h3>
          <p>
            Los acuarios públicos tienen ventanas de observación que soportan enormes fuerzas hidrostáticas. 
            El Georgia Aquarium tiene una ventana de acrílico de 61×23 cm y 60 cm de espesor que resiste 
            la presión de 24,000 m³ de agua. Las ventanas son superficies curvas que distribuyen mejor las 
            fuerzas que las planas. El diseño considera el centro de presión para dimensionar los soportes. 
            El material debe ser transparente, resistente y capaz de soportar cargas a largo plazo sin 
            deformación significativa.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Válvulas y Esclusas</h3>
          <p>
            Las válvulas de fondo en presas controlan la descarga de agua. Deben abrirse contra la fuerza 
            hidrostática, requiriendo actuadores hidráulicos potentes. Las esclusas de navegación tienen 
            compuertas que deben sellar contra presiones diferenciales significativas. El Canal de Suez 
            no tiene esclusas, pero el Canal de Panamá tiene tres juegos que elevan barcos 26 metros. 
            Las válvulas de mariposa en tuberías grandes deben diseñarse considerando el momento de la 
            fuerza hidrostática sobre el disco.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Estructuras Offshore</h3>
          <p>
            Las plataformas petroleras offshore tienen estructuras sumergidas que experimentan fuerzas 
            hidrostáticas y de oleaje. Las plataformas de gravedad se apoyan en el fondo marino y usan 
            su peso para resistir las fuerzas. Las plataformas flotantes están ancladas y deben considerar 
            fuerzas dinámicas además de las estáticas. Los pilotes de soporte experimentan fuerzas 
            hidrostáticas que varían con la marea. El diseño debe considerar condiciones extremas como 
            huracanes y tsunamis que generan fuerzas mucho mayores que las condiciones normales.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Del Empirismo a la Ingeniería Moderna
        </h2>
        
        <div className="theory-subsection">
          <h3>Presas Antiguas (3000 a.C. - 500 d.C.)</h3>
          <p>
            Las primeras presas se construyeron en Mesopotamia y Egipto hace más de 5000 años. La Presa 
            de Sadd el-Kafara en Egipto (2600 a.C.) tenía 14 m de altura y 113 m de longitud. Los romanos 
            construyeron más de 50 presas, algunas aún en uso. La Presa de Cornalvo en España (siglo I d.C.) 
            tiene 24 m de altura. Estas estructuras se diseñaban empíricamente, sin teoría matemática, pero 
            los constructores comprendían intuitivamente que las presas debían ser más gruesas en la base 
            para resistir las mayores fuerzas hidrostáticas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Desarrollo de la Teoría (Siglo XVII-XVIII)</h3>
          <p>
            Blaise Pascal (1623-1662) estableció que la presión en un fluido actúa igualmente en todas 
            direcciones. Evangelista Torricelli (1608-1647) estudió la presión atmosférica y el flujo de 
            fluidos. Isaac Newton (1643-1727) desarrolló las leyes del movimiento que se aplican a fluidos. 
            Daniel Bernoulli (1700-1782) y Leonhard Euler (1707-1783) establecieron las ecuaciones 
            fundamentales de la mecánica de fluidos. Sin embargo, el análisis cuantitativo de fuerzas 
            hidrostáticas en superficies no se desarrolló completamente hasta el siglo XIX.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Era de la Ingeniería Hidráulica (Siglo XIX)</h3>
          <p>
            El siglo XIX vio el desarrollo sistemático de la teoría de fuerzas hidrostáticas. Jean-Victor 
            Poncelet (1788-1867) desarrolló métodos gráficos para calcular fuerzas en superficies. La 
            construcción de grandes presas requirió análisis más rigurosos. La Presa de Furens en Francia 
            (1866) fue una de las primeras diseñadas con cálculos matemáticos detallados. El desarrollo 
            de la teoría del centro de presión permitió diseños más eficientes y seguros. Los ingenieros 
            comenzaron a usar el concepto de segundo momento de área para calcular la ubicación exacta 
            del centro de presión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Desastres y Lecciones Aprendidas</h3>
          <p>
            El colapso de la Presa de South Fork en 1889 causó la inundación de Johnstown, matando a 2209 
            personas. El fallo se debió a mantenimiento inadecuado y diseño deficiente. El colapso de la 
            Presa de St. Francis en 1928 mató a 431 personas, causado por fallas geológicas no detectadas. 
            El colapso de la Presa de Malpasset en Francia (1959) mató a 423 personas. Estos desastres 
            llevaron a estándares de diseño más estrictos, inspecciones regulares y mejor comprensión de 
            las fuerzas hidrostáticas y la interacción suelo-estructura.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Análisis por Computadora (Siglo XX)</h3>
          <p>
            El desarrollo de computadoras revolucionó el análisis de fuerzas hidrostáticas. El método de 
            elementos finitos (FEM) permite analizar estructuras complejas con geometrías irregulares. 
            Los programas de diseño asistido por computadora (CAD) integran el análisis estructural. La 
            simulación por computadora permite evaluar múltiples escenarios de carga y optimizar diseños. 
            La Presa de las Tres Gargantas (2006) fue diseñada completamente por computadora, considerando 
            millones de combinaciones de carga. Los sensores modernos monitorean continuamente las fuerzas 
            reales en estructuras existentes.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Innovaciones Modernas</h3>
          <p>
            Las presas modernas usan materiales avanzados como concreto de alta resistencia y acero de 
            alta tensión. Las presas de arco de doble curvatura optimizan la distribución de fuerzas. 
            Los sistemas de monitoreo en tiempo real detectan deformaciones y cambios en las fuerzas. 
            La Presa Hoover (1936) fue pionera en usar refrigeración artificial del concreto durante el 
            curado. Las técnicas de rehabilitación permiten reforzar presas antiguas sin reconstrucción 
            completa. El análisis de riesgo probabilístico considera eventos extremos como terremotos y 
            crecidas milenarias.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>La Presa Hoover y el Concreto que Nunca Termina de Curar</h3>
          <p>
            La Presa Hoover, construida entre 1931 y 1936, contiene 3.25 millones de metros cúbicos de 
            concreto. Los ingenieros calcularon que si se hubiera vertido en un solo bloque, el calor 
            generado por la reacción química del curado habría tardado 125 años en disiparse completamente. 
            Para acelerar el proceso, se vertió en bloques más pequeños y se instalaron 945 km de tuberías 
            de refrigeración por las que circulaba agua helada. Aun así, el concreto en el interior de la 
            presa todavía está curando lentamente casi 90 años después.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Submarino que Implosionó por Error de Cálculo</h3>
          <p>
            En 1963, el submarino USS Thresher se hundió matando a las 129 personas a bordo. La investigación 
            reveló que una tubería falló debido a fuerzas hidrostáticas mayores a las calculadas. A 730 metros 
            de profundidad, la presión externa era de 73 atmósferas (7.4 MPa). Un pequeño error en el cálculo 
            del espesor del casco o una soldadura defectuosa pueden ser catastróficos. Este desastre llevó a 
            estándares de diseño y pruebas mucho más rigurosos para submarinos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Las Ventanas del Acuario de Dubai</h3>
          <p>
            El Dubai Mall Aquarium tiene una de las ventanas de observación más grandes del mundo: 32.88 metros 
            de ancho por 8.3 metros de alto. El panel de acrílico tiene 75 cm de espesor y pesa 245 toneladas. 
            La fuerza hidrostática total sobre esta ventana supera los 50 millones de newtons (5000 toneladas). 
            El centro de presión está ubicado a 2/3 de la altura desde el fondo, lo que determina dónde deben 
            colocarse los soportes estructurales más fuertes. El acrílico fue fabricado en Japón en una sola 
            pieza y transportado a Dubai en un contenedor especial.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Titanic y la Presión a Gran Profundidad</h3>
          <p>
            Los restos del Titanic yacen a 3800 metros de profundidad, donde la presión es de aproximadamente 
            380 atmósferas (38.5 MPa). A esta presión, cada metro cuadrado de superficie experimenta una fuerza 
            de 38.5 millones de newtons. Las expediciones al Titanic requieren submarinos con cascos esféricos 
            de titanio de varios centímetros de espesor. James Cameron, director de la película Titanic, ha 
            descendido al pecio 33 veces en el sumergible Mir, experimentando personalmente estas enormes 
            fuerzas hidrostáticas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Compuerta Más Grande del Mundo</h3>
          <p>
            El proyecto MOSE en Venecia incluye 78 compuertas móviles que protegen la ciudad de las inundaciones. 
            Cada compuerta mide 20 metros de ancho, hasta 30 metros de largo y pesa 300 toneladas. Cuando están 
            cerradas, deben resistir fuerzas hidrostáticas de millones de newtons debido a la diferencia de nivel 
            entre el mar Adriático y la laguna de Venecia. Las compuertas están articuladas en el fondo y se 
            elevan llenando de aire compartimentos que normalmente están llenos de agua. El diseño consideró 
            cuidadosamente el centro de presión para minimizar la fuerza necesaria para operarlas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Récord de Profundidad del Trieste</h3>
          <p>
            En 1960, el batiscafo Trieste descendió a la Fosa de las Marianas alcanzando 10,916 metros de 
            profundidad, el punto más profundo conocido de los océanos. A esta profundidad, la presión es de 
            aproximadamente 1100 atmósferas (111 MPa), equivalente a tener un elefante parado sobre cada uña. 
            La esfera de acero que protegía a los dos tripulantes tenía paredes de 12.7 cm de espesor y pesaba 
            13 toneladas. Durante el descenso, escucharon un fuerte crujido: una ventana exterior de acrílico 
            se había agrietado, pero la esfera principal resistió perfectamente las enormes fuerzas hidrostáticas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Desastre de la Presa de Vajont</h3>
          <p>
            En 1963, un deslizamiento de tierra de 260 millones de metros cúbicos cayó en el embalse de Vajont 
            en Italia, desplazando el agua y creando una ola de 250 metros de altura. Aunque la presa resistió 
            las fuerzas hidrostáticas (un testimonio de su diseño estructural), el agua desbordó la presa y 
            destruyó varios pueblos, matando a casi 2000 personas. Este desastre demostró que el análisis de 
            fuerzas hidrostáticas en presas debe considerar no solo condiciones normales, sino también eventos 
            extremos como deslizamientos de tierra que pueden generar fuerzas dinámicas mucho mayores que las 
            estáticas.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            La fuerza hidrostática sobre una superficie sumergida es F = ρ × g × h_c × A, donde h_c es la 
            profundidad del centroide.
          </li>
          <li>
            El centro de presión está siempre por debajo del centroide geométrico debido a que la presión 
            aumenta con la profundidad.
          </li>
          <li>
            Para superficies planas, la ubicación del centro de presión se calcula usando el segundo momento 
            de área: y_cp = y_c + (I_c / (y_c × A)).
          </li>
          <li>
            En superficies inclinadas, la fuerza actúa perpendicular a la superficie y su magnitud depende 
            de la profundidad vertical del centroide.
          </li>
          <li>
            Para superficies curvas, es conveniente descomponer la fuerza en componentes horizontal y vertical, 
            calculadas independientemente.
          </li>
          <li>
            La componente horizontal sobre una superficie curva es igual a la fuerza sobre su proyección vertical.
          </li>
          <li>
            La componente vertical sobre una superficie curva es igual al peso del volumen de fluido (real o 
            imaginario) directamente encima de ella.
          </li>
          <li>
            El momento de la fuerza hidrostática sobre una superficie articulada es M = F × d, donde d es la 
            distancia del punto de apoyo al centro de presión.
          </li>
          <li>
            El segundo momento de área (momento de inercia) es fundamental para calcular el centro de presión 
            y varía según la forma geométrica de la superficie.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Theory;
