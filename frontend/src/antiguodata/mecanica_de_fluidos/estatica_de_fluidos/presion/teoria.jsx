import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as presionDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Presión en Fluidos",
  descripcion: "Presión hidrostática y sus aplicaciones",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a la Presión en Fluidos">
        <p>
          La presión en un fluido es la fuerza normal por unidad de área ejercida sobre una superficie. 
          A diferencia de los sólidos, donde las fuerzas pueden actuar en direcciones específicas, en 
          fluidos en reposo la presión actúa perpendicular a cualquier superficie y es la misma en todas 
          las direcciones en un punto dado. Este principio, conocido como Principio de Pascal, es 
          fundamental para entender el comportamiento de los fluidos.
        </p>
        <p>
          La presión es una magnitud escalar que se mide en pascales (Pa) en el Sistema Internacional, 
          donde 1 Pa = 1 N/m². Sin embargo, debido a que el pascal es una unidad pequeña, es común usar 
          kilopascales (kPa), megapascales (MPa), o unidades tradicionales como atmósferas (atm), 
          milímetros de mercurio (mmHg) y libras por pulgada cuadrada (psi).
        </p>

        <Important>
          <p>
            La presión en un fluido aumenta linealmente con la profundidad debido al peso del fluido 
            suprayacente. Esta es la base de la presión hidrostática, que explica por qué sentimos 
            mayor presión en nuestros oídos al bucear más profundo o por qué las presas deben ser más 
            gruesas en la base.
          </p>
        </Important>
      </TheorySection>

      <TheorySection title="Presión Hidrostática">
        <Concept title="Ley Fundamental de la Hidrostática">
          <p>
            La presión hidrostática es la presión ejercida por un fluido en reposo debido a su peso. 
            Para un fluido incompresible (como los líquidos), la presión aumenta linealmente con la 
            profundidad según la ecuación fundamental:
          </p>

          <Formula
            expression={String.raw`P = \rho g h`}
            calculatorId="presion-hidrostatica"
            definitions={presionDefinitions}
            exercises={exercises}
            complementary={[
              { 
                description: "Calcular profundidad desde presión", 
                expression: String.raw`h = \frac{P}{\rho g}` 
              },
              { 
                description: "Calcular densidad desde presión", 
                expression: String.raw`\rho = \frac{P}{g h}` 
              }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>P: Presión hidrostática (Pa)</li>
            <li>ρ: Densidad del fluido (kg/m³)</li>
            <li>g: Aceleración gravitacional (9.81 m/s²)</li>
            <li>h: Profundidad o altura de la columna de fluido (m)</li>
          </ul>

          <p>Características importantes:</p>
          <ul>
            <li>La presión aumenta linealmente con la profundidad</li>
            <li>La presión es independiente de la forma del recipiente (Paradoja Hidrostática)</li>
            <li>La presión es la misma en todos los puntos a la misma profundidad</li>
            <li>La presión actúa perpendicular a cualquier superficie</li>
            <li>La presión en un punto es igual en todas las direcciones (Principio de Pascal)</li>
          </ul>

          <Example>
            <p>
              En el fondo de una piscina de 3 m de profundidad, la presión hidrostática es 
              P = 1000 × 9.81 × 3 = 29,430 Pa ≈ 29.4 kPa. Esto equivale a aproximadamente 0.29 atm, 
              casi un tercio de la presión atmosférica adicional.
            </p>
          </Example>
        </Concept>

        <Concept title="Paradoja Hidrostática">
          <p>
            Un resultado sorprendente de la ley de presión hidrostática es que la presión en el fondo 
            de un recipiente depende solo de la profundidad del líquido, no de la forma del recipiente 
            ni del volumen total de líquido. Esto significa que recipientes de formas muy diferentes 
            pero con la misma profundidad de líquido ejercen la misma presión en el fondo.
          </p>
          <p>
            Esta paradoja fue estudiada por Simon Stevin en el siglo XVI y desafió la intuición de 
            muchos científicos de la época. Explica por qué una columna delgada de agua puede ejercer 
            la misma presión en su base que un tanque ancho de la misma altura.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Tipos de Presión">
        <Concept title="Presión Absoluta">
          <p>
            La presión absoluta es la presión total medida desde el vacío perfecto (presión cero). 
            En un fluido sumergido, la presión absoluta incluye tanto la presión atmosférica como 
            la presión hidrostática del fluido:
          </p>

          <Formula
            expression={String.raw`P_{abs} = P_{atm} + \rho g h`}
            calculatorId="presion-absoluta"
            definitions={presionDefinitions}
            exercises={exercises}
          />

          <p>
            La presión absoluta es siempre positiva y es la que realmente experimenta un objeto 
            sumergido. Es la presión que se usa en ecuaciones termodinámicas y en la ley de los 
            gases ideales.
          </p>

          <Example>
            <p>
              A 10 metros de profundidad en agua, la presión absoluta es P_abs = 101,325 + (1000 × 9.81 × 10) 
              = 101,325 + 98,100 = 199,425 Pa ≈ 199.4 kPa ≈ 1.97 atm. Casi el doble de la presión atmosférica.
            </p>
          </Example>
        </Concept>

        <Concept title="Presión Manométrica">
          <p>
            La presión manométrica (o relativa) es la presión medida respecto a la presión atmosférica. 
            Es la presión que miden la mayoría de los manómetros comerciales:
          </p>

          <Formula
            expression={String.raw`P_{man} = P_{abs} - P_{atm}`}
            calculatorId="presion-manometrica"
            definitions={presionDefinitions}
            exercises={exercises}
          />

          <p>Interpretación de la presión manométrica:</p>
          <ul>
            <li>P_man {'>'} 0: Presión por encima de la atmosférica (sobrepresión)</li>
            <li>P_man = 0: Presión atmosférica</li>
            <li>P_man {'<'} 0: Vacío parcial (presión por debajo de la atmosférica)</li>
          </ul>

          <Important>
            <p>
              Es crucial especificar si una presión es absoluta o manométrica. Por ejemplo, "2 atm" 
              podría significar 2 atm absolutas (el doble de la presión atmosférica) o 2 atm manométricas 
              (3 atm absolutas). En ingeniería, se usan las abreviaturas "abs" y "man" o "g" (gauge) 
              para evitar confusiones.
            </p>
          </Important>
        </Concept>

        <Concept title="Presión Atmosférica">
          <p>
            La presión atmosférica es la presión ejercida por el peso de la atmósfera terrestre. 
            Varía con la altitud, el clima y la temperatura, pero se define un valor estándar a 
            nivel del mar:
          </p>

          <p>Valores de referencia de la presión atmosférica estándar:</p>
          <ul>
            <li>101,325 Pa (valor exacto del SI)</li>
            <li>101.325 kPa</li>
            <li>1 atm (atmósfera estándar)</li>
            <li>1.01325 bar</li>
            <li>760 mmHg o 760 Torr</li>
            <li>14.7 psi (libras por pulgada cuadrada)</li>
            <li>1013.25 mbar o hPa (hectopascales, usado en meteorología)</li>
          </ul>

          <p>
            La presión atmosférica disminuye aproximadamente 12 Pa por metro de elevación cerca del 
            nivel del mar, o equivalentemente, 1 kPa por cada 83 metros. A 5,500 metros de altitud 
            (Ciudad de México, La Paz), la presión es solo el 50% de la presión al nivel del mar.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Variación de Presión con la Altura">
        <Concept title="Diferencia de Presión entre Dos Puntos">
          <p>
            La diferencia de presión entre dos puntos separados verticalmente en un fluido incompresible es:
          </p>

          <Formula
            expression={String.raw`\Delta P = \rho g \Delta h`}
            calculatorId="variacion-presion"
            definitions={presionDefinitions}
            exercises={exercises}
          />

          <p>
            Esta ecuación es válida para fluidos incompresibles (líquidos). Para gases, la densidad 
            varía significativamente con la altura y la presión, requiriendo la ecuación barométrica 
            que considera la variación exponencial de la presión con la altitud.
          </p>

          <Example>
            <p>
              La diferencia de presión entre la superficie y el fondo de una piscina de 5 m es 
              ΔP = 1000 × 9.81 × 5 = 49,050 Pa ≈ 49 kPa. Esta diferencia es independiente de la 
              presión atmosférica y del tamaño de la piscina.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Fuerza sobre Superficies">
        <Concept title="Fuerza Debida a la Presión">
          <p>
            La fuerza ejercida por un fluido sobre una superficie es el producto de la presión por 
            el área de la superficie:
          </p>

          <Formula
            expression={String.raw`F = P \cdot A`}
            calculatorId="fuerza-presion"
            definitions={presionDefinitions}
            exercises={exercises}
            complementary={[
              { 
                description: "Calcular presión desde fuerza", 
                expression: String.raw`P = \frac{F}{A}` 
              },
              { 
                description: "Calcular área desde fuerza", 
                expression: String.raw`A = \frac{F}{P}` 
              }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>F: Fuerza normal a la superficie (N)</li>
            <li>P: Presión del fluido (Pa)</li>
            <li>A: Área de la superficie (m²)</li>
          </ul>

          <Important>
            <p>
              Para superficies sumergidas donde la presión varía con la profundidad, se debe usar 
              la presión en el centroide de la superficie para calcular la fuerza total. El punto 
              de aplicación de esta fuerza (centro de presión) está por debajo del centroide debido 
              a que la presión aumenta con la profundidad.
            </p>
          </Important>
        </Concept>

        <Concept title="Superficies Horizontales">
          <p>
            Para una superficie horizontal sumergida a profundidad constante:
          </p>
          <ul>
            <li>La presión es uniforme sobre toda la superficie</li>
            <li>F = ρgh × A, donde h es la profundidad de la superficie</li>
            <li>La fuerza actúa perpendicular a la superficie</li>
            <li>El centro de presión coincide con el centroide geométrico</li>
          </ul>
        </Concept>

        <Concept title="Superficies Verticales e Inclinadas">
          <p>
            Para superficies verticales o inclinadas sumergidas:
          </p>
          <ul>
            <li>La presión varía linealmente con la profundidad</li>
            <li>Se usa la presión en el centroide: P_c = ρgh_c</li>
            <li>F = P_c × A = ρgh_c × A</li>
            <li>El centro de presión está por debajo del centroide geométrico</li>
            <li>Para una superficie rectangular vertical, el centro de presión está a 2/3 de la altura desde la superficie</li>
          </ul>

          <Example>
            <p>
              Una compuerta rectangular de 2×3 m está sumergida verticalmente con su borde superior 
              a 4 m de profundidad. El centroide está a h_c = 4 + 1.5 = 5.5 m. La fuerza es 
              F = 1000 × 9.81 × 5.5 × 6 = 323,730 N ≈ 324 kN.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones de Manometría">
        <Concept title="Columna de Líquido Equivalente">
          <p>
            Cualquier presión puede expresarse como la altura de una columna de líquido que produciría 
            esa presión:
          </p>

          <Formula
            expression={String.raw`h = \frac{P}{\rho g}`}
            calculatorId="columna-equivalente"
            definitions={presionDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>h: Altura de la columna de líquido (m)</li>
            <li>P: Presión a medir (Pa)</li>
            <li>ρ: Densidad del líquido manométrico (kg/m³)</li>
            <li>g: Aceleración gravitacional (9.81 m/s²)</li>
          </ul>

          <p>
            Este principio es la base de los manómetros de columna líquida. El mercurio (ρ = 13,600 kg/m³) 
            es común porque su alta densidad permite columnas más cortas. La presión atmosférica estándar 
            (101,325 Pa) equivale a 760 mm de mercurio, de ahí la unidad "mmHg" o "Torr".
          </p>
        </Concept>

        <Concept title="Tipos de Manómetros">
          <p>Manómetro de tubo en U:</p>
          <ul>
            <li>Mide diferencias de presión entre dos puntos</li>
            <li>ΔP = ρ_man × g × h, donde h es la diferencia de altura</li>
            <li>Simple, preciso y no requiere calibración</li>
          </ul>

          <p>Barómetro de mercurio:</p>
          <ul>
            <li>Mide presión atmosférica absoluta</li>
            <li>Tubo cerrado al vacío en un extremo</li>
            <li>Altura estándar: 760 mm a nivel del mar</li>
            <li>Inventado por Torricelli en 1643</li>
          </ul>

          <p>Manómetro de Bourdon:</p>
          <ul>
            <li>Tubo metálico curvo que se endereza con la presión</li>
            <li>Lectura mecánica mediante aguja y escala</li>
            <li>Robusto, usado en industria</li>
            <li>Mide presión manométrica</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>Buceo y Deportes Acuáticos</h3>
          <p>
            Los buceadores experimentan directamente los efectos de la presión hidrostática. A 10 metros 
            de profundidad, la presión es el doble de la atmosférica (2 atm). Esto comprime el aire en 
            los pulmones a la mitad de su volumen. Los buceadores deben ascender lentamente para evitar 
            la enfermedad descompresiva: el nitrógeno disuelto en la sangre a alta presión forma burbujas 
            peligrosas si la presión disminuye demasiado rápido. El récord mundial de buceo en apnea es 
            214 metros (Herbert Nitsch, 2007), donde la presión alcanza 22 atmósferas. Los buceadores 
            profesionales trabajan rutinariamente a 50-100 metros usando mezclas especiales de gases.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Presas Hidroeléctricas</h3>
          <p>
            Las presas más grandes del mundo soportan fuerzas hidrostáticas colosales. La Presa de las 
            Tres Gargantas en China retiene agua hasta 175 metros de altura. La presión en la base es 
            aproximadamente 1.7 MPa (17 atm), generando una fuerza total de billones de newtons sobre 
            la estructura. La presa tiene 2,335 metros de longitud y 181 metros de altura, con un espesor 
            en la base de 115 metros para resistir el momento de vuelco. La distribución triangular de 
            presión (cero en la superficie, máxima en el fondo) determina que las presas deben ser más 
            gruesas en la base. La Presa Hoover en EE.UU. genera 2,080 MW de electricidad aprovechando 
            la presión del agua.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Sistemas de Frenos Hidráulicos</h3>
          <p>
            Los frenos de automóviles y aviones usan el Principio de Pascal para multiplicar la fuerza 
            del conductor. Cuando pisas el pedal del freno, aplicas una fuerza de quizás 200 N sobre un 
            pistón maestro de 2 cm² de área, generando una presión de 1 MPa (10 atm). Esta presión se 
            transmite por el líquido de frenos a pistones más grandes (10 cm²) en cada rueda, produciendo 
            fuerzas de 1,000 N por rueda. El sistema multiplica la fuerza por 5 en cada rueda, totalizando 
            4,000 N de fuerza de frenado con solo 200 N de esfuerzo del conductor. Los frenos ABS modulan 
            esta presión hasta 20 veces por segundo para evitar el bloqueo de las ruedas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Aviación y Altimetría</h3>
          <p>
            Los altímetros de aviones son barómetros calibrados que miden la presión atmosférica para 
            determinar la altitud. La presión disminuye aproximadamente 12 Pa/m cerca del nivel del mar. 
            A 10,000 metros (altitud de crucero típica), la presión es solo 26 kPa (0.26 atm), un cuarto 
            de la presión al nivel del mar. Las cabinas de aviones se presurizan a 75-80 kPa (equivalente 
            a 2,000-2,500 m de altitud) para comodidad de los pasajeros. Los pilotos ajustan el altímetro 
            a la presión local antes del despegue. Un error de 1 hPa en la configuración causa un error 
            de 8 metros en la lectura de altitud, crítico durante el aterrizaje.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Medicina: Presión Arterial</h3>
          <p>
            La presión arterial se mide en mmHg porque históricamente se usaban manómetros de mercurio. 
            Una presión "normal" de 120/80 mmHg significa 120 mmHg (16 kPa) durante la sístole (contracción 
            del corazón) y 80 mmHg (10.7 kPa) durante la diástole (relajación). La hipertensión (presión 
            alta, {'>'} 140/90) afecta a mil millones de personas y es un factor de riesgo para infartos 
            y derrames cerebrales. Las jirafas tienen la presión arterial más alta de todos los mamíferos 
            (280/180 mmHg) para bombear sangre hasta su cerebro, 2-3 metros por encima del corazón. Los 
            astronautas en microgravedad experimentan redistribución de fluidos corporales porque no hay 
            gradiente de presión hidrostática.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Construcción de Túneles Submarinos</h3>
          <p>
            El Túnel del Canal de la Mancha (Eurotúnel) pasa 75 metros bajo el lecho marino, con 40 metros 
            de agua encima. La presión del agua en el techo del túnel es aproximadamente 400 kPa (4 atm). 
            Durante la construcción, las tuneladoras trabajaron bajo presión de aire comprimido para evitar 
            inundaciones. Los trabajadores entraban a través de esclusas de aire, similar a submarinos. 
            El Túnel Seikan en Japón alcanza 240 metros bajo el nivel del mar, con presiones de agua de 
            2.4 MPa (24 atm). Los ingenieros deben diseñar revestimientos de concreto y acero capaces de 
            resistir estas presiones durante décadas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Torres de Agua y Distribución</h3>
          <p>
            Las torres de agua elevadas usan la presión hidrostática para distribuir agua sin bombas. 
            Una torre de 30 metros de altura proporciona una presión de 294 kPa (3 atm) en las tuberías 
            al nivel del suelo, suficiente para abastecer edificios de varios pisos. La Torre de Agua de 
            Goldfield en Nevada (65 metros) es una de las más altas de EE.UU. En rascacielos, se usan 
            bombas para elevar el agua a tanques en pisos intermedios, creando zonas de presión. Sin esto, 
            la presión en los pisos inferiores sería excesiva (más de 1 MPa en un edificio de 100 pisos), 
            dañando tuberías y grifos.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De Aristóteles a la Física Moderna
        </h2>
        
        <div className="theory-subsection">
          <h3>Aristóteles y la Antigüedad (384-322 a.C.)</h3>
          <p>
            Aristóteles creía que el agua no tenía peso en el agua, un error que persistió durante siglos. 
            Los ingenieros romanos construyeron acueductos impresionantes sin comprender completamente la 
            presión hidrostática. El Acueducto de Segovia (siglo I d.C.) transportaba agua 15 km usando 
            solo gravedad, pero los romanos no podían explicar matemáticamente por qué funcionaba. Herón 
            de Alejandría (siglo I d.C.) inventó la primera máquina de vapor y fuentes ornamentales que 
            usaban presión de aire y agua, pero sin teoría formal.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Simon Stevin y la Paradoja Hidrostática (1586)</h3>
          <p>
            El matemático flamenco Simon Stevin demostró que la presión en el fondo de un recipiente 
            depende solo de la profundidad del líquido, no de la forma del recipiente. Esto contradecía 
            la intuición: un tubo delgado de 10 metros de altura ejerce la misma presión en su base que 
            un tanque ancho de 10 metros. Stevin también explicó por qué los barcos flotan y desarrolló 
            las bases de la hidrostática. Su libro "De Beghinselen der Weeghconst" (1586) estableció 
            principios que aún usamos hoy.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Evangelista Torricelli y el Barómetro (1643)</h3>
          <p>
            Torricelli, discípulo de Galileo, inventó el barómetro de mercurio en 1643. Llenó un tubo 
            de vidrio de 1 metro con mercurio, lo invirtió en un recipiente y observó que la columna 
            descendía a 760 mm, dejando vacío en la parte superior. Concluyó correctamente que la presión 
            atmosférica sostenía la columna. Este fue el primer vacío artificial creado por el hombre. 
            El experimento demostró que el aire tiene peso y presión, revolucionando la física. La unidad 
            "torr" (1 torr = 1 mmHg) honra su nombre.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Blaise Pascal y el Principio de Pascal (1648)</h3>
          <p>
            Blaise Pascal realizó experimentos cruciales sobre presión. En 1648, pidió a su cuñado que 
            llevara un barómetro a la cima del Puy de Dôme (1,465 m). La columna de mercurio descendió 
            de 760 mm a 660 mm, demostrando que la presión atmosférica disminuye con la altitud. Pascal 
            también estableció que la presión aplicada a un fluido confinado se transmite uniformemente 
            en todas direcciones (Principio de Pascal), base de la hidráulica moderna. Escribió: "La 
            naturaleza no tiene horror al vacío", refutando la creencia aristotélica de 2000 años.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Daniel Bernoulli y la Hidrodinámica (1738)</h3>
          <p>
            Daniel Bernoulli publicó "Hydrodynamica" en 1738, estableciendo las bases matemáticas de la 
            mecánica de fluidos. Aunque es más conocido por la ecuación de Bernoulli para fluidos en 
            movimiento, también contribuyó a la comprensión de la presión hidrostática. Bernoulli fue 
            el primero en aplicar el cálculo y la teoría de probabilidades a problemas de fluidos. Su 
            trabajo sobre presión sanguínea fue pionero en biomecánica. La familia Bernoulli produjo 
            ocho matemáticos destacados en tres generaciones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Experimento de Magdeburgo (1654)</h3>
          <p>
            Otto von Guericke, alcalde de Magdeburgo, realizó una demostración espectacular ante el 
            Emperador del Sacro Imperio Romano. Creó dos hemisferios de cobre de 50 cm de diámetro, 
            los unió y extrajo el aire con una bomba de vacío que él mismo inventó. Luego enganchó 8 
            caballos a cada hemisferio tirando en direcciones opuestas. Los caballos no pudieron separar 
            los hemisferios. La presión atmosférica (1 atm sobre 0.2 m²) generaba una fuerza de 20,000 N 
            (2 toneladas). Cuando permitió que entrara aire, los hemisferios se separaron fácilmente. 
            Esta demostración dramática convenció a los escépticos del poder de la presión atmosférica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Desarrollo de Manómetros y Sensores (Siglos XIX-XX)</h3>
          <p>
            Eugène Bourdon inventó el manómetro de tubo Bourdon en 1849, revolucionando la medición de 
            presión industrial. El tubo metálico curvo se endereza con la presión, moviendo una aguja. 
            Este diseño robusto sigue siendo el estándar en industria. En el siglo XX, se desarrollaron 
            sensores electrónicos: piezoeléctricos (1950s), de capacitancia (1970s) y MEMS (1980s). 
            Los sensores MEMS modernos son microscópicos y extremadamente precisos, usados en teléfonos, 
            automóviles y dispositivos médicos. Sin embargo, los manómetros de mercurio siguen siendo 
            estándares de calibración en laboratorios nacionales de metrología.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>El Récord de Profundidad del Trieste</h3>
          <p>
            En 1960, el batiscafo Trieste descendió a la Fosa de las Marianas alcanzando 10,916 metros, 
            el punto más profundo de los océanos. La presión era aproximadamente 1,100 atmósferas (111 MPa), 
            equivalente a tener un elefante parado sobre cada uña. La esfera de acero que protegía a los 
            dos tripulantes (Jacques Piccard y Don Walsh) tenía paredes de 12.7 cm de espesor y pesaba 
            13 toneladas. Durante el descenso, escucharon un fuerte crujido: una ventana exterior de 
            acrílico se había agrietado. Afortunadamente, la esfera principal resistió perfectamente. 
            Permanecieron en el fondo solo 20 minutos. Este récord se mantuvo durante 52 años hasta que 
            James Cameron descendió en 2012 en el Deepsea Challenger.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Paradoja del Barril de Pascal</h3>
          <p>
            En 1646, Blaise Pascal realizó un experimento dramático para demostrar la presión hidrostática. 
            Insertó un tubo delgado de 10 metros de altura en un barril de vino lleno. Subió a un balcón 
            y vertió agua en el tubo. Cuando el tubo se llenó, la presión en el fondo del barril aumentó 
            tanto que las duelas del barril se separaron y el barril explotó. El peso del agua en el tubo 
            delgado (quizás 10 kg) generó suficiente presión para romper el barril que contenía cientos 
            de kilogramos de vino. Este experimento demostró que la presión depende de la altura, no del 
            volumen total de líquido, desafiando la intuición de la época.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Desastre del Submarino Thresher</h3>
          <p>
            En 1963, el submarino nuclear USS Thresher se hundió durante pruebas de inmersión profunda, 
            matando a las 129 personas a bordo. A 730 metros de profundidad, la presión externa era de 
            73 atmósferas (7.4 MPa). Una tubería falló, probablemente debido a soldaduras defectuosas que 
            no resistieron la presión. El agua entrante a alta presión actuó como un chorro de corte, 
            dañando sistemas eléctricos. El submarino perdió propulsión y continuó hundiéndose hasta 
            2,600 metros, donde la presión de 260 atmósferas colapsó el casco como una lata de refresco. 
            Este desastre llevó a estándares de diseño y pruebas mucho más rigurosos para submarinos. 
            Los restos nunca fueron recuperados debido a la profundidad extrema.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Presión en el Monte Everest</h3>
          <p>
            En la cima del Monte Everest (8,848 m), la presión atmosférica es solo 33 kPa (0.33 atm), 
            un tercio de la presión al nivel del mar. El oxígeno disponible es insuficiente para sostener 
            la vida humana por períodos prolongados. Los alpinistas experimentan hipoxia severa: confusión, 
            pérdida de coordinación, edema cerebral y pulmonar. La mayoría usa oxígeno suplementario por 
            encima de 8,000 m (la "zona de la muerte"). Sin embargo, algunos alpinistas de élite han 
            alcanzado la cima sin oxígeno, incluyendo Reinhold Messner en 1978. Sus cuerpos se adaptan 
            produciendo más glóbulos rojos y aumentando la capacidad pulmonar. Aun así, permanecen en la 
            cima solo minutos antes de descender.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Misterio de la Campana de Buceo</h3>
          <p>
            Las campanas de buceo han sido usadas desde la antigüedad. Aristóteles describió en 332 a.C. 
            cómo Alejandro Magno descendió en una campana de vidrio. El principio es simple: el aire 
            atrapado en la campana se comprime con la presión del agua, pero no se escapa. A 10 metros, 
            la presión es 2 atm, comprimiendo el aire a la mitad de su volumen. Los buceadores pueden 
            respirar este aire comprimido. Edmund Halley (del cometa Halley) mejoró el diseño en 1690, 
            agregando barriles de aire para reponer el oxígeno. Las campanas modernas se usan en 
            construcción submarina y rescate, alcanzando profundidades de 300 metros con mezclas especiales 
            de gases.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Tormenta de Presión Más Baja</h3>
          <p>
            El tifón Tip en 1979 registró la presión atmosférica más baja jamás medida: 870 hPa (87 kPa), 
            más de 14 kPa por debajo de la presión normal. Esta presión extremadamente baja generó vientos 
            de 305 km/h. La diferencia de presión entre el centro del tifón y el aire circundante creó 
            una fuerza ascendente masiva que alimentó la tormenta. Los barómetros en barcos cercanos 
            mostraron caídas de presión tan rápidas que los marineros pensaron que los instrumentos estaban 
            rotos. El tifón Tip fue la tormenta tropical más intensa jamás registrada, con un diámetro de 
            2,220 km, casi la mitad del ancho de Estados Unidos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Presión en el Espacio</h3>
          <p>
            En el espacio exterior, la presión es esencialmente cero (menos de 10⁻¹⁰ Pa). Los astronautas 
            en la Estación Espacial Internacional viven en una burbuja presurizada a 101 kPa (1 atm). 
            Durante caminatas espaciales, usan trajes presurizados a 30 kPa (0.3 atm) de oxígeno puro, 
            suficiente para respirar pero lo bastante bajo para permitir movilidad. Si un astronauta 
            estuviera expuesto al vacío sin traje, no "explotaría" como en las películas, pero perdería 
            la consciencia en 15 segundos por falta de oxígeno. Los fluidos corporales hervirían a 
            temperatura corporal (ebullismo), y la exposición prolongada sería fatal. Los astronautas 
            deben pre-respirar oxígeno puro durante horas antes de caminatas espaciales para eliminar 
            nitrógeno de la sangre y evitar la enfermedad descompresiva.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            La presión en un fluido es la fuerza normal por unidad de área: P = F/A.
          </li>
          <li>
            La presión hidrostática aumenta linealmente con la profundidad: P = ρgh.
          </li>
          <li>
            La presión absoluta incluye la presión atmosférica: P_abs = P_atm + ρgh.
          </li>
          <li>
            La presión manométrica es relativa a la atmosférica: P_man = P_abs - P_atm.
          </li>
          <li>
            La presión atmosférica estándar es 101,325 Pa = 1 atm = 760 mmHg.
          </li>
          <li>
            La diferencia de presión entre dos puntos es ΔP = ρg Δh.
          </li>
          <li>
            La fuerza sobre una superficie es F = P × A, usando la presión en el centroide para 
            superficies sumergidas.
          </li>
          <li>
            La presión es independiente de la forma del recipiente (Paradoja Hidrostática).
          </li>
          <li>
            El Principio de Pascal establece que la presión aplicada a un fluido confinado se transmite 
            uniformemente en todas direcciones.
          </li>
          <li>
            Los manómetros miden presión usando columnas de líquido: h = P/(ρg).
          </li>
        </ul>
      </div>
    </>
  );
};

export default Theory;
