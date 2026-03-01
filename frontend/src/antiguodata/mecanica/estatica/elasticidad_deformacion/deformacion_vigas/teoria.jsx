import { TheorySection, Concept, Formula } from '../../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Deformación en Vigas",
  descripcion: "Deflexión y deformación de vigas bajo carga",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const DeformacionVigasTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a la Deflexión de Vigas">
        <Concept title="¿Qué es la deflexión?">
          <p>
            La deflexión es la deformación que experimenta una viga cuando se le aplica una carga transversal. 
            Cuando una viga se flexiona, su eje longitudinal se curva, y la distancia vertical desde la posición 
            original hasta la posición deformada se conoce como deflexión (δ).
          </p>
          <p>
            La deflexión es crítica en el diseño estructural porque:
          </p>
          <ul>
            <li>Afecta la funcionalidad de la estructura (puertas que no cierran, pisos que vibran)</li>
            <li>Puede causar daños en elementos no estructurales (grietas en paredes, ventanas rotas)</li>
            <li>Genera incomodidad visual y psicológica en los usuarios</li>
            <li>Puede indicar que la estructura está cerca de su límite de resistencia</li>
          </ul>
        </Concept>

        <Concept title="Ecuación de la Elástica">
          <p>
            La deflexión de vigas se rige por la ecuación diferencial de la elástica, desarrollada por Leonhard Euler:
          </p>
          <Formula
            expression={String.raw`EI \frac{d^2y}{dx^2} = M(x)`}
            description="Ecuación diferencial de la elástica"
          />
          <p>Donde:</p>
          <ul>
            <li>E: Módulo de Young del material (Pa)</li>
            <li>I: Momento de inercia de la sección transversal (m⁴)</li>
            <li>y: Deflexión en la posición x (m)</li>
            <li>x: Posición a lo largo de la viga (m)</li>
            <li>M(x): Momento flector en la posición x (N·m)</li>
          </ul>
          <p>
            El producto EI se conoce como rigidez a la flexión. Cuanto mayor sea este valor, 
            menor será la deflexión para una carga dada.
          </p>
        </Concept>

        <Concept title="Condiciones de Contorno">
          <p>
            Para resolver la ecuación de la elástica, necesitamos condiciones de contorno que dependen 
            del tipo de apoyo:
          </p>
          <ul>
            <li>Apoyo simple: y = 0 (deflexión nula en el apoyo)</li>
            <li>Empotramiento: y = 0 y dy/dx = 0 (deflexión y pendiente nulas)</li>
            <li>Extremo libre: M = 0 y V = 0 (momento y cortante nulos)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Viga en Voladizo">
        <Concept title="Carga Puntual en el Extremo">
          <p>
            Una viga en voladizo está empotrada en un extremo y libre en el otro. Cuando se aplica 
            una carga puntual F en el extremo libre, la deflexión máxima ocurre en ese punto.
          </p>
          <Formula
            expression={String.raw`\delta = \frac{FL^3}{3EI}`}
            calculatorId="deflexion-viga-voladizo-puntual"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>δ: Deflexión máxima en el extremo libre (m)</li>
            <li>F: Carga puntual aplicada (N)</li>
            <li>L: Longitud de la viga (m)</li>
            <li>E: Módulo de Young del material (Pa)</li>
            <li>I: Momento de inercia de la sección (m⁴)</li>
          </ul>
          <p>
            Nota importante: La deflexión es proporcional al cubo de la longitud. Esto significa que 
            si duplicamos la longitud de la viga, la deflexión se multiplica por 8.
          </p>
        </Concept>

        <Concept title="Carga Distribuida Uniforme">
          <p>
            Cuando la viga en voladizo soporta una carga distribuida uniforme w (N/m) a lo largo 
            de toda su longitud, la deflexión máxima también ocurre en el extremo libre.
          </p>
          <Formula
            expression={String.raw`\delta = \frac{wL^4}{8EI}`}
            calculatorId="deflexion-viga-voladizo-distribuida"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>δ: Deflexión máxima en el extremo libre (m)</li>
            <li>w: Carga distribuida uniforme (N/m)</li>
            <li>L: Longitud de la viga (m)</li>
            <li>E: Módulo de Young del material (Pa)</li>
            <li>I: Momento de inercia de la sección (m⁴)</li>
          </ul>
        </Concept>

        <Concept title="Pendiente en el Extremo">
          <p>
            Además de la deflexión, es importante conocer la pendiente (ángulo de rotación) en el extremo 
            libre de la viga en voladizo con carga puntual:
          </p>
          <Formula
            expression={String.raw`\theta = \frac{FL^2}{2EI}`}
            calculatorId="pendiente-viga-voladizo"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>θ: Pendiente en el extremo libre (radianes)</li>
            <li>F: Carga puntual aplicada (N)</li>
            <li>L: Longitud de la viga (m)</li>
            <li>E: Módulo de Young del material (Pa)</li>
            <li>I: Momento de inercia de la sección (m⁴)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Viga Simplemente Apoyada">
        <Concept title="Carga Puntual en el Centro">
          <p>
            Una viga simplemente apoyada tiene apoyos en ambos extremos que permiten rotación pero no 
            desplazamiento vertical. Cuando se aplica una carga puntual F en el centro, la deflexión 
            máxima ocurre en ese punto.
          </p>
          <Formula
            expression={String.raw`\delta = \frac{FL^3}{48EI}`}
            calculatorId="deflexion-viga-apoyada-central"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>δ: Deflexión máxima en el centro (m)</li>
            <li>F: Carga puntual aplicada en el centro (N)</li>
            <li>L: Longitud de la viga (m)</li>
            <li>E: Módulo de Young del material (Pa)</li>
            <li>I: Momento de inercia de la sección (m⁴)</li>
          </ul>
          <p>
            Observa que la deflexión es 16 veces menor que en una viga en voladizo de la misma longitud 
            con la misma carga. Esto demuestra la eficiencia de los apoyos en ambos extremos.
          </p>
        </Concept>

        <Concept title="Carga Distribuida Uniforme">
          <p>
            Para una viga simplemente apoyada con carga distribuida uniforme w a lo largo de toda su longitud:
          </p>
          <Formula
            expression={String.raw`\delta = \frac{5wL^4}{384EI}`}
            calculatorId="deflexion-viga-apoyada-distribuida"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>δ: Deflexión máxima en el centro (m)</li>
            <li>w: Carga distribuida uniforme (N/m)</li>
            <li>L: Longitud de la viga (m)</li>
            <li>E: Módulo de Young del material (Pa)</li>
            <li>I: Momento de inercia de la sección (m⁴)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Momento de Inercia">
        <Concept title="Importancia del Momento de Inercia">
          <p>
            El momento de inercia (I) es una propiedad geométrica de la sección transversal que mide 
            su resistencia a la flexión. Cuanto mayor sea I, menor será la deflexión para una carga dada.
          </p>
          <p>
            El momento de inercia depende de cómo está distribuido el material respecto al eje neutro. 
            El material alejado del eje neutro contribuye más a la rigidez, por eso las vigas en I son 
            tan eficientes.
          </p>
        </Concept>

        <Concept title="Sección Rectangular">
          <p>
            Para una sección rectangular de base b y altura h:
          </p>
          <Formula
            expression={String.raw`I = \frac{bh^3}{12}`}
            calculatorId="momento-inercia-rectangular"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>I: Momento de inercia (m⁴)</li>
            <li>b: Base de la sección (m)</li>
            <li>h: Altura de la sección (m)</li>
          </ul>
          <p>
            Nota: El momento de inercia es proporcional al cubo de la altura. Duplicar la altura 
            multiplica la rigidez por 8, mientras que duplicar la base solo la duplica.
          </p>
        </Concept>

        <Concept title="Sección Circular">
          <p>
            Para una sección circular de diámetro d:
          </p>
          <Formula
            expression={String.raw`I = \frac{\pi d^4}{64}`}
            calculatorId="momento-inercia-circular"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>I: Momento de inercia (m⁴)</li>
            <li>d: Diámetro de la sección (m)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Límites de Deflexión en Diseño">
        <Concept title="Criterios de Diseño">
          <p>
            Los códigos de construcción establecen límites máximos de deflexión para garantizar 
            funcionalidad y confort. Algunos límites típicos son:
          </p>
          <ul>
            <li>Vigas de piso: L/360 (para evitar grietas en acabados)</li>
            <li>Vigas de techo: L/240 (menos crítico)</li>
            <li>Vigas que soportan maquinaria: L/600 (muy restrictivo)</li>
            <li>Puentes peatonales: L/500 a L/1000 (para evitar sensación de inseguridad)</li>
          </ul>
          <p>
            Donde L es la longitud de la viga. Por ejemplo, una viga de 6 m de longitud en un piso 
            no debería deflectarse más de 6000/360 = 16.7 mm.
          </p>
        </Concept>

        <Concept title="Deflexión vs Resistencia">
          <p>
            Es importante entender que una viga puede fallar por deflexión excesiva antes de fallar 
            por resistencia. Una viga puede ser lo suficientemente fuerte para soportar la carga sin 
            romperse, pero deflectarse tanto que cause problemas funcionales.
          </p>
          <p>
            Por esta razón, en vigas largas o con cargas ligeras, el diseño suele estar controlado 
            por deflexión, no por resistencia.
          </p>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>Ingeniería Civil y Construcción</h3>
          <p>
            Los puentes son el ejemplo más visible de deflexión de vigas. El Puente Golden Gate puede 
            deflectarse hasta 3 metros en el centro con viento fuerte. Los ingenieros diseñan los puentes 
            para que esta deflexión sea segura y no cause alarma en los usuarios.
          </p>
          <p>
            En edificios, las vigas de piso deben diseñarse cuidadosamente para evitar vibraciones molestas 
            cuando las personas caminan. Un piso que cumple con los requisitos de resistencia puede ser 
            inaceptable si vibra demasiado.
          </p>
          <p>
            Los rascacielos modernos como el Burj Khalifa (828 m) pueden deflectarse hasta 1.5 metros en 
            la punta debido al viento. Esta deflexión es completamente segura y está dentro de los límites 
            de diseño.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Industria Aeronáutica</h3>
          <p>
            Las alas de los aviones son vigas en voladizo que deben soportar enormes cargas durante el vuelo. 
            Las alas de un Boeing 787 pueden deflectarse hasta 7.6 metros en las puntas durante las pruebas 
            de carga extrema sin romperse. Esta flexibilidad es intencional y ayuda a absorber turbulencias.
          </p>
          <p>
            Los ingenieros aeronáuticos deben equilibrar la rigidez (para eficiencia aerodinámica) con la 
            flexibilidad (para absorber cargas dinámicas). Demasiada rigidez puede causar fallas catastróficas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Industria Automotriz</h3>
          <p>
            El chasis de un automóvil actúa como una viga que debe ser lo suficientemente rígida para 
            mantener la geometría de suspensión, pero lo suficientemente flexible para absorber impactos. 
            Los ingenieros usan análisis de deflexión para optimizar el diseño del chasis.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Aplicaciones Cotidianas</h3>
          <p>
            Las estanterías en tu casa son vigas simplemente apoyadas. Si están muy cargadas o son muy largas, 
            se pandean visiblemente. Los fabricantes de muebles usan cálculos de deflexión para determinar 
            el espaciado máximo entre soportes.
          </p>
          <p>
            Los trampolines y las tablas de buceo están diseñados específicamente para maximizar la deflexión 
            controlada. La energía almacenada durante la deflexión se devuelve al usuario, proporcionando 
            el impulso necesario.
          </p>
          <p>
            Cuando caminas sobre un piso de madera, este se deflecta ligeramente bajo tus pies. Aunque no 
            lo notes, esta deflexión es real y debe estar dentro de límites aceptables para evitar daños 
            en acabados como baldosas o yeso.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Aplicaciones Médicas</h3>
          <p>
            Los implantes ortopédicos, como las placas para fracturas óseas, deben diseñarse con la rigidez 
            adecuada. Demasiada rigidez puede causar atrofia ósea, mientras que muy poca puede resultar en 
            mala consolidación de la fractura.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Tecnología y Sensores</h3>
          <p>
            Los microscopios de fuerza atómica (AFM) utilizan microvigas en voladizo que se deflectan 
            cantidades microscópicas al interactuar con superficies a escala atómica. Midiendo esta deflexión, 
            pueden crear imágenes de átomos individuales.
          </p>
          <p>
            Muchos sensores de fuerza y presión funcionan midiendo la deflexión de vigas pequeñas. Desde 
            básculas digitales hasta sensores de presión en neumáticos, el principio es el mismo.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De Galileo a los Rascacielos Modernos
        </h2>
        
        <div className="theory-subsection">
          <h3>Los Inicios: Galileo Galilei (1638)</h3>
          <p>
            Todo comenzó en el Arsenal de Venecia, donde se construían barcos. Los constructores notaban 
            que los barcos a veces se rompían cuando eran botados al agua, especialmente si eran muy grandes. 
            Galileo Galilei, intrigado por este problema, realizó los primeros estudios científicos sobre 
            la resistencia de vigas.
          </p>
          <p>
            En su obra "Discorsi e Dimostrazioni Matematiche" (1638), Galileo analizó vigas en voladizo 
            y propuso las primeras teorías sobre su resistencia. Aunque sus conclusiones no eran completamente 
            correctas (asumió que la tensión era uniforme en la sección), sentó las bases para el estudio 
            científico de las estructuras.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Revolución Matemática: Leonhard Euler (1744)</h3>
          <p>
            Un siglo después, el matemático suizo Leonhard Euler desarrolló la ecuación diferencial que 
            gobierna la deflexión de vigas, conocida como la "ecuación de la elástica". Trabajando en la 
            Academia de Ciencias de San Petersburgo, Euler demostró que la curvatura de una viga es 
            proporcional al momento flector.
          </p>
          <p>
            La ecuación de Euler (EI d²y/dx² = M) es una de las ecuaciones más importantes en ingeniería 
            estructural y sigue siendo la base del análisis de vigas hoy en día.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Teoría Moderna: Claude-Louis Navier (1826)</h3>
          <p>
            El ingeniero francés Claude-Louis Navier desarrolló la teoría completa de flexión de vigas, 
            incluyendo la distribución de tensiones en la sección transversal. Su trabajo permitió a los 
            ingenieros diseñar estructuras con confianza matemática en lugar de depender solo de la experiencia.
          </p>
          <p>
            Navier también fue pionero en el uso de hierro en puentes, aplicando sus teorías al diseño 
            de estructuras reales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Los Teoremas de Mohr (1868)</h3>
          <p>
            Christian Otto Mohr, ingeniero alemán, desarrolló métodos gráficos para calcular deflexiones 
            conocidos como los "teoremas de área-momento". Estos métodos simplificaron enormemente los 
            cálculos y fueron ampliamente utilizados antes de la era de las computadoras.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Desastre del Puente de Tacoma Narrows (1940)</h3>
          <p>
            El 7 de noviembre de 1940, el Puente de Tacoma Narrows en Washington colapsó espectacularmente 
            solo cuatro meses después de su inauguración. El puente comenzó a oscilar violentamente con 
            vientos de solo 68 km/h, alcanzando deflexiones de varios metros antes de colapsar.
          </p>
          <p>
            Este desastre cambió para siempre el diseño de puentes. Los ingenieros aprendieron que no 
            basta con calcular la deflexión estática; también deben considerar la dinámica, la resonancia 
            y la aeroelasticidad. El colapso fue filmado y se convirtió en uno de los videos educativos 
            más famosos en ingeniería.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Torre Eiffel (1889)</h3>
          <p>
            Gustave Eiffel fue uno de los primeros ingenieros en realizar cálculos detallados de deflexión 
            por viento. La Torre Eiffel, con 300 metros de altura, fue diseñada para deflectarse hasta 
            15 cm en la punta con viento fuerte. Los cálculos de Eiffel fueron tan precisos que la torre 
            se comporta exactamente como él predijo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Edificio Citicorp Center (1978)</h3>
          <p>
            En 1978, un año después de completarse el Citicorp Center en Nueva York, se descubrió un error 
            en los cálculos de deflexión por viento. El edificio podría colapsar en un huracán. Durante 
            tres meses, en secreto, se reforzó la estructura trabajando de noche. El público no supo del 
            problema hasta años después. Este caso ilustra la importancia crítica de los cálculos correctos 
            de deflexión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Era Digital</h3>
          <p>
            Con la llegada de las computadoras en la segunda mitad del siglo XX, el análisis de deflexión 
            se revolucionó. El método de elementos finitos permite calcular deflexiones en estructuras 
            complejas que serían imposibles de analizar manualmente. Hoy, los ingenieros pueden simular 
            el comportamiento de estructuras completas bajo cualquier combinación de cargas.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>El Poder del Cubo</h3>
          <p>
            La deflexión es proporcional al cubo de la longitud (L³). Esto significa que si duplicas la 
            longitud de una viga, la deflexión se multiplica por 8. Si la triplicas, se multiplica por 27. 
            Esta relación cúbica explica por qué es tan difícil construir estructuras muy largas sin apoyos 
            intermedios.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Las Alas Flexibles del Boeing 787</h3>
          <p>
            Durante las pruebas de certificación, las alas del Boeing 787 Dreamliner fueron dobladas hasta 
            que las puntas se elevaron 7.6 metros (25 pies) sin romperse. Esto es aproximadamente 1.5 veces 
            la deflexión máxima esperada en vuelo. Los pasajeros pueden ver las alas flexionarse varios 
            metros durante el vuelo, especialmente en turbulencias.
          </p>
          <p>
            Esta flexibilidad no es un defecto, es una característica de diseño. Las alas rígidas serían 
            más pesadas y más propensas a fallas catastróficas bajo cargas extremas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Puente Golden Gate Baila</h3>
          <p>
            El Puente Golden Gate en San Francisco puede deflectarse hasta 3 metros verticalmente en el 
            centro con viento fuerte. Además, puede moverse hasta 8 metros lateralmente. Los ingenieros 
            diseñaron el puente para ser flexible, no rígido, porque la rigidez excesiva podría causar 
            fallas catastróficas.
          </p>
          <p>
            En días ventosos, los trabajadores del puente pueden sentir el movimiento bajo sus pies. 
            Es completamente seguro, pero puede ser inquietante para quienes no están acostumbrados.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Los Rascacielos se Mueven</h3>
          <p>
            El Burj Khalifa, el edificio más alto del mundo (828 m), puede deflectarse hasta 1.5 metros 
            en la punta con viento fuerte. Los ocupantes de los pisos superiores pueden sentir el movimiento, 
            especialmente en días ventosos. Para reducir este movimiento, el edificio tiene amortiguadores 
            de masa sintonizada.
          </p>
          <p>
            El Taipei 101 tiene una esfera de 660 toneladas suspendida cerca de la cima que actúa como 
            péndulo para contrarrestar la deflexión por viento. Los visitantes pueden ver este péndulo 
            en acción.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Magia de la Viga en I</h3>
          <p>
            Una viga con sección en forma de I puede ser 10-20 veces más rígida que una viga rectangular 
            del mismo peso. Esto se debe a que el momento de inercia depende de qué tan lejos está el 
            material del eje neutro. Las alas de la I están lejos del centro, maximizando la rigidez.
          </p>
          <p>
            Esta es la razón por la que casi todas las vigas estructurales tienen forma de I, H o T. 
            Es una de las innovaciones más importantes en la historia de la construcción.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Los Árboles son Ingenieros Expertos</h3>
          <p>
            Los árboles son vigas en voladizo naturales optimizadas por millones de años de evolución. 
            Un árbol alto debe soportar su propio peso más las cargas de viento, nieve y hielo. Los árboles 
            desarrollan madera de reacción en el lado sometido a tensión, aumentando su rigidez donde más 
            se necesita.
          </p>
          <p>
            Los ingenieros estudian los árboles para aprender sobre diseño estructural eficiente. La forma 
            cónica de los troncos minimiza la deflexión mientras optimiza el uso de material.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Trampolines y Tablas de Buceo</h3>
          <p>
            A diferencia de la mayoría de las estructuras donde queremos minimizar la deflexión, los 
            trampolines y las tablas de buceo están diseñados para maximizarla de forma controlada. 
            La energía almacenada durante la deflexión se devuelve al usuario, proporcionando el impulso.
          </p>
          <p>
            Los trampolines olímpicos pueden deflectarse más de 1 metro. Los ingenieros ajustan la rigidez 
            para diferentes deportes y niveles de habilidad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Problema de las Estanterías</h3>
          <p>
            ¿Por qué las estanterías largas se pandean en el medio? Porque la deflexión aumenta con el 
            cubo de la longitud. Una estantería de 2 metros se deflecta 8 veces más que una de 1 metro 
            con la misma carga. Por eso los fabricantes recomiendan soportes cada 60-80 cm para estanterías 
            cargadas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Sensores Microscópicos</h3>
          <p>
            Los microscopios de fuerza atómica (AFM) usan microvigas en voladizo más delgadas que un cabello 
            humano. Estas vigas se deflectan distancias menores que el diámetro de un átomo cuando tocan 
            una superficie. Midiendo esta deflexión microscópica con láseres, pueden crear imágenes de 
            átomos individuales.
          </p>
        </div>
      </div>

      <TheorySection title="Resumen">
        <Concept title="Puntos Clave">
          <ul>
            <li>La deflexión de vigas depende de la carga, longitud, módulo de elasticidad y momento de inercia</li>
            <li>La deflexión es proporcional al cubo de la longitud (duplicar L multiplica δ por 8)</li>
            <li>El momento de inercia es proporcional al cubo de la altura de la sección</li>
            <li>Las vigas simplemente apoyadas son mucho más rígidas que las vigas en voladizo</li>
            <li>Los códigos de construcción limitan la deflexión para garantizar funcionalidad</li>
            <li>La deflexión puede controlar el diseño más que la resistencia en vigas largas</li>
            <li>Las secciones en I son mucho más eficientes que las rectangulares</li>
          </ul>
        </Concept>
      </TheorySection>
    </>
  );
};

export default DeformacionVigasTheory;
