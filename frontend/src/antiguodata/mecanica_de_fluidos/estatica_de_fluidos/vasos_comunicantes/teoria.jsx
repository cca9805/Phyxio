import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Vasos Comunicantes",
  descripcion: "Equilibrio de fluidos en recipientes conectados",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a los Vasos Comunicantes">
        <p>
          Los vasos comunicantes son recipientes conectados entre sí por su parte inferior que contienen 
          uno o más fluidos. Este sistema es uno de los ejemplos más claros y prácticos del principio 
          fundamental de la hidrostática: en un fluido en equilibrio, todos los puntos situados a la 
          misma profundidad tienen la misma presión.
        </p>
        <p>
          El principio de los vasos comunicantes fue conocido desde la antigüedad y ha sido fundamental 
          para el desarrollo de sistemas de distribución de agua, acueductos, sistemas de nivelación y 
          numerosas aplicaciones en ingeniería hidráulica. Su simplicidad y efectividad lo convierten 
          en uno de los conceptos más útiles de la mecánica de fluidos.
        </p>
      </TheorySection>

      <TheorySection title="Principio Fundamental">
        <Concept title="Vasos con el Mismo Líquido">
          <p>
            Cuando varios recipientes de cualquier forma o tamaño están conectados por su base y 
            contienen el mismo líquido, el nivel del líquido alcanza la misma altura en todos ellos, 
            independientemente de la forma o el diámetro de cada recipiente.
          </p>
          
          <Important>
            <p>
              Este comportamiento se debe a que la presión en el punto de conexión debe ser la misma 
              para todos los recipientes. Como P = ρgh, si la densidad (ρ) y la gravedad (g) son 
              constantes, la altura (h) debe ser igual en todos los vasos para que la presión sea 
              la misma.
            </p>
          </Important>

          <p>
            Características del equilibrio en vasos comunicantes:
          </p>
          <ul>
            <li>La superficie libre del líquido forma un plano horizontal</li>
            <li>La altura es independiente de la forma o sección de los recipientes</li>
            <li>La presión en el punto de conexión es igual para todos los vasos</li>
            <li>El sistema busca el estado de mínima energía potencial</li>
          </ul>

          <Example>
            <p>
              Si conectamos tres recipientes (uno cilíndrico, uno cónico y uno irregular) por su base 
              y vertemos agua, el nivel del agua será exactamente el mismo en los tres, sin importar 
              que el recipiente cónico sea más ancho arriba o que el irregular tenga forma caprichosa.
            </p>
          </Example>
        </Concept>

        <Concept title="Demostración del Principio">
          <p>
            Consideremos dos vasos comunicantes con el mismo líquido. En el punto de conexión (punto A), 
            la presión debe ser la misma desde ambos lados:
          </p>
          <p>
            Presión desde el vaso 1: P_A = P_atm + ρgh₁
          </p>
          <p>
            Presión desde el vaso 2: P_A = P_atm + ρgh₂
          </p>
          <p>
            Igualando ambas expresiones: P_atm + ρgh₁ = P_atm + ρgh₂
          </p>
          <p>
            Simplificando: ρgh₁ = ρgh₂, por lo tanto: h₁ = h₂
          </p>
          <p>
            Esta demostración confirma que las alturas deben ser iguales cuando el líquido es el mismo.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Vasos con Líquidos Diferentes">
        <Concept title="Líquidos Inmiscibles">
          <p>
            Cuando los vasos comunicantes contienen dos líquidos inmiscibles (que no se mezclan) de 
            diferentes densidades, las alturas que alcanzan son inversamente proporcionales a sus 
            densidades. El líquido menos denso alcanza mayor altura para equilibrar la presión.
          </p>

          <Formula
            expression={String.raw`\rho_1 \cdot h_1 = \rho_2 \cdot h_2`}
            calculatorId="vasos-comunicantes"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular h₁", expression: String.raw`h_1 = \frac{\rho_2 \cdot h_2}{\rho_1}` },
              { description: "Calcular ρ₂", expression: String.raw`\rho_2 = \frac{\rho_1 \cdot h_1}{h_2}` },
              { description: "Calcular ρ₁", expression: String.raw`\rho_1 = \frac{\rho_2 \cdot h_2}{h_1}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>ρ₁: Densidad del líquido 1 (kg/m³)</li>
            <li>h₁: Altura del líquido 1 desde el punto de contacto (m)</li>
            <li>ρ₂: Densidad del líquido 2 (kg/m³)</li>
            <li>h₂: Altura del líquido 2 desde el punto de contacto (m)</li>
          </ul>

          <Example>
            <p>
              En un tubo en U se coloca agua (ρ = 1000 kg/m³) en una rama y aceite (ρ = 800 kg/m³) en 
              la otra. Si el agua alcanza 0.4 m de altura, el aceite alcanzará: h₂ = (1000 × 0.4) / 800 
              = 0.5 m. El aceite, al ser menos denso, sube más alto para equilibrar la presión.
            </p>
          </Example>
        </Concept>

        <Concept title="Interfaz entre Líquidos">
          <p>
            La superficie de separación entre dos líquidos inmiscibles en vasos comunicantes se llama 
            interfaz. Esta interfaz se sitúa en una posición tal que la presión es la misma en ambos 
            lados del punto de contacto.
          </p>
          <p>
            Características de la interfaz:
          </p>
          <ul>
            <li>Se forma una superficie de separación nítida entre líquidos inmiscibles</li>
            <li>El líquido más denso queda en la parte inferior</li>
            <li>La interfaz es horizontal cuando el sistema está en equilibrio</li>
            <li>La posición de la interfaz depende de las densidades y volúmenes de ambos líquidos</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Tubo en U">
        <Concept title="Configuración Clásica">
          <p>
            El tubo en U es la configuración más común de vasos comunicantes. Consiste en un tubo 
            doblado en forma de U que conecta dos ramas verticales. Esta configuración se usa 
            extensamente en manómetros, barómetros y experimentos de laboratorio.
          </p>
          <p>
            Aplicaciones del tubo en U:
          </p>
          <ul>
            <li>Manómetros de columna líquida para medir presiones</li>
            <li>Determinación de densidades de líquidos desconocidos</li>
            <li>Demostración del principio de Pascal</li>
            <li>Medición de diferencias de presión en sistemas cerrados</li>
          </ul>
        </Concept>

        <Concept title="Tubo en U con Líquidos Diferentes">
          <p>
            Cuando se introducen dos líquidos inmiscibles en un tubo en U, se establece un equilibrio 
            donde las presiones en el punto de contacto (interfaz) son iguales. Este principio permite 
            determinar densidades relativas de líquidos.
          </p>
          <p>
            Procedimiento para determinar densidad desconocida:
          </p>
          <ul>
            <li>Se introduce un líquido de densidad conocida en una rama</li>
            <li>Se introduce el líquido de densidad desconocida en la otra rama</li>
            <li>Se miden las alturas h₁ y h₂ desde la interfaz</li>
            <li>Se aplica la ecuación: ρ_desconocida = ρ_conocida × (h_conocida / h_desconocida)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Equilibrio y Estabilidad">
        <Concept title="Condiciones de Equilibrio">
          <p>
            Un sistema de vasos comunicantes está en equilibrio cuando:
          </p>
          <ul>
            <li>La presión en todos los puntos a la misma profundidad es igual</li>
            <li>No hay flujo neto de líquido entre los vasos</li>
            <li>Las superficies libres están en reposo (sin oscilaciones)</li>
            <li>La energía potencial del sistema es mínima</li>
          </ul>
        </Concept>

        <Concept title="Perturbaciones y Retorno al Equilibrio">
          <p>
            Si se perturba el equilibrio (por ejemplo, añadiendo líquido en uno de los vasos), el 
            sistema responde redistribuyendo el líquido hasta alcanzar nuevamente el mismo nivel en 
            todos los vasos. Este proceso involucra:
          </p>
          <ul>
            <li>Flujo inicial desde el vaso con mayor nivel hacia los de menor nivel</li>
            <li>Oscilaciones amortiguadas alrededor de la posición de equilibrio</li>
            <li>Disipación de energía por viscosidad y fricción</li>
            <li>Retorno gradual al estado de equilibrio con niveles iguales</li>
          </ul>
          <p>
            La velocidad de retorno al equilibrio depende de la viscosidad del líquido, el diámetro 
            de los tubos de conexión y la diferencia inicial de niveles.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Presión en Vasos Comunicantes">
        <Concept title="Distribución de Presión">
          <p>
            En un sistema de vasos comunicantes, la presión varía con la profundidad según la ley 
            fundamental de la hidrostática: P = P_atm + ρgh. Sin embargo, la característica distintiva 
            es que a igual profundidad, la presión es la misma en todos los vasos.
          </p>
          <p>
            Puntos clave sobre la presión:
          </p>
          <ul>
            <li>En la superficie libre: P = P_atm (presión atmosférica)</li>
            <li>En el punto de conexión: P es igual para todos los vasos</li>
            <li>A mayor profundidad: P aumenta linealmente con h</li>
            <li>La diferencia de presión entre dos puntos: ΔP = ρg Δh</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Sistemas Complejos">
        <Concept title="Múltiples Vasos Comunicantes">
          <p>
            Cuando se conectan más de dos vasos, el principio sigue siendo válido: todos alcanzan 
            el mismo nivel si contienen el mismo líquido. La cantidad de líquido en cada vaso depende 
            de su sección transversal, pero la altura es siempre la misma.
          </p>
          <p>
            Distribución del volumen:
          </p>
          <ul>
            <li>Vasos de mayor sección contienen más volumen de líquido</li>
            <li>Vasos de menor sección contienen menos volumen</li>
            <li>La altura es independiente de la sección</li>
            <li>El volumen total se conserva (V_total = Σ A_i × h)</li>
          </ul>
        </Concept>

        <Concept title="Vasos con Conexiones a Diferentes Alturas">
          <p>
            Si los vasos están conectados a diferentes alturas, el nivel del líquido se ajusta de 
            manera que la presión en cada punto de conexión sea consistente con la columna de líquido 
            sobre él. Esto puede resultar en niveles diferentes en los vasos.
          </p>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>

        <div className="theory-subsection">
          <h3>Sistemas de Distribución de Agua</h3>
          <p>
            Los acueductos y sistemas de distribución de agua potable utilizan el principio de vasos 
            comunicantes para transportar agua desde fuentes elevadas hasta las ciudades. El agua fluye 
            por gravedad y se distribuye uniformemente alcanzando el mismo nivel en todos los puntos 
            conectados.
          </p>
          <ul>
            <li>Tanques de agua elevados: Distribuyen agua por gravedad a edificios</li>
            <li>Redes de tuberías: El agua alcanza el mismo nivel en todos los puntos conectados</li>
            <li>Torres de agua: Mantienen presión constante en el sistema</li>
            <li>Sistemas de riego: Distribución uniforme del agua en campos agrícolas</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Construcción y Nivelación</h3>
          <p>
            El nivel de manguera o nivel de agua es una herramienta de construcción basada en vasos 
            comunicantes. Consiste en una manguera transparente llena de agua que permite marcar puntos 
            al mismo nivel en lugares distantes o con obstáculos visuales.
          </p>
          <ul>
            <li>Nivelación de terrenos: Establecer referencias horizontales</li>
            <li>Construcción de cimientos: Asegurar que estén al mismo nivel</li>
            <li>Instalación de pisos: Verificar horizontalidad en grandes áreas</li>
            <li>Topografía básica: Mediciones de nivel sin instrumentos ópticos</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Acueductos Históricos</h3>
          <p>
            Los romanos construyeron acueductos monumentales basados en el principio de vasos 
            comunicantes. Estos sistemas transportaban agua desde manantiales en las montañas hasta 
            las ciudades, manteniendo una pendiente suave y constante.
          </p>
          <ul>
            <li>Acueducto de Segovia (España): 15 km de longitud, 167 arcos</li>
            <li>Pont du Gard (Francia): 49 m de altura, tres niveles de arcos</li>
            <li>Acueducto de los Milagros (Mérida): Abastecía agua a Emerita Augusta</li>
            <li>Acueducto de Cartago: 132 km, el más largo del Imperio Romano</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Sistemas Hidráulicos</h3>
          <p>
            Los sistemas hidráulicos de maquinaria pesada, frenos de automóviles y elevadores 
            hidráulicos utilizan el principio de vasos comunicantes combinado con el principio de 
            Pascal para transmitir fuerza y movimiento.
          </p>
          <ul>
            <li>Frenos hidráulicos: Transmiten presión uniformemente a todas las ruedas</li>
            <li>Elevadores de autos: Levantan vehículos aplicando presión en un punto</li>
            <li>Prensas hidráulicas: Multiplican fuerza para trabajos industriales</li>
            <li>Dirección hidráulica: Facilitan el giro del volante en vehículos</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Instrumentos de Medición</h3>
          <p>
            Numerosos instrumentos de medición de presión y nivel utilizan vasos comunicantes como 
            principio de funcionamiento. Estos dispositivos son simples, confiables y no requieren 
            energía eléctrica.
          </p>
          <ul>
            <li>Manómetros de columna líquida: Miden presión de gases y líquidos</li>
            <li>Barómetros de mercurio: Miden presión atmosférica</li>
            <li>Indicadores de nivel: Muestran nivel de líquido en tanques</li>
            <li>Piezómetros: Miden presión en tuberías y conductos</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Fontanería y Plomería</h3>
          <p>
            Los sistemas de fontanería doméstica e industrial utilizan vasos comunicantes para 
            distribuir agua y mantener niveles constantes en diferentes dispositivos.
          </p>
          <ul>
            <li>Sifones: Transfieren líquidos entre recipientes</li>
            <li>Trampas de agua: Evitan paso de gases en desagües</li>
            <li>Tanques de inodoros: Mantienen nivel constante de agua</li>
            <li>Sistemas de calefacción: Distribuyen agua caliente uniformemente</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Agricultura y Riego</h3>
          <p>
            Los sistemas de riego por gravedad utilizan vasos comunicantes para distribuir agua de 
            manera uniforme en campos agrícolas sin necesidad de bombas eléctricas.
          </p>
          <ul>
            <li>Riego por surcos: El agua fluye por canales conectados</li>
            <li>Riego por inundación: Distribución uniforme en parcelas</li>
            <li>Sistemas de drenaje: Evacuación de exceso de agua</li>
            <li>Acequias: Canales de distribución tradicionales</li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De la antigüedad a la ingeniería moderna
        </h2>

        <div className="theory-subsection">
          <h3>Conocimiento en la Antigüedad</h3>
          <p>
            El principio de los vasos comunicantes era conocido empíricamente desde la antigüedad. 
            Las civilizaciones mesopotámicas, egipcias y chinas utilizaban sistemas de canales y 
            acueductos que funcionaban basándose en este principio, aunque no lo habían formalizado 
            matemáticamente.
          </p>
          <p>
            Los egipcios (3000 a.C.) construyeron sistemas de irrigación en el valle del Nilo que 
            distribuían agua mediante canales conectados. Los babilonios desarrollaron sistemas 
            similares en Mesopotamia, aprovechando los ríos Tigris y Éufrates.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Los Acueductos Romanos</h3>
          <p>
            Los romanos (500 a.C. - 500 d.C.) fueron maestros en la aplicación práctica de los vasos 
            comunicantes. Construyeron más de 400 acueductos en todo el Imperio, transportando millones 
            de litros de agua diariamente a las ciudades.
          </p>
          <p>
            El ingeniero romano Vitruvio (siglo I a.C.) describió en su obra "De Architectura" los 
            principios de diseño de acueductos, incluyendo el concepto de que el agua busca su propio 
            nivel. Los romanos entendían que el agua podía subir y bajar siguiendo el terreno, siempre 
            que el punto de llegada estuviera más bajo que el de origen.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Arquímedes y la Hidrostática</h3>
          <p>
            Arquímedes de Siracusa (287-212 a.C.) fue el primero en formalizar matemáticamente los 
            principios de la hidrostática en su tratado "Sobre los Cuerpos Flotantes". Aunque no 
            trató específicamente los vasos comunicantes, estableció las bases teóricas sobre presión 
            y equilibrio de fluidos que explican su comportamiento.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Edad Media y Renacimiento</h3>
          <p>
            Durante la Edad Media, el conocimiento hidráulico se preservó principalmente en el mundo 
            islámico. Los ingenieros árabes desarrollaron sistemas sofisticados de distribución de agua 
            en ciudades como Córdoba, Damasco y Bagdad.
          </p>
          <p>
            En el Renacimiento, Leonardo da Vinci (1452-1519) realizó extensos estudios sobre 
            hidráulica y diseñó sistemas de canales y esclusas. Sus cuadernos contienen numerosos 
            dibujos de sistemas de vasos comunicantes y sus aplicaciones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Formalización Científica (Siglo XVII)</h3>
          <p>
            En el siglo XVII, científicos como Evangelista Torricelli (1608-1647), Blaise Pascal 
            (1623-1662) y Robert Boyle (1627-1691) formalizaron los principios de la hidrostática 
            y la presión de fluidos.
          </p>
          <p>
            Pascal demostró experimentalmente que la presión se transmite uniformemente en un fluido 
            confinado (Principio de Pascal, 1647), lo que explica el comportamiento de los vasos 
            comunicantes. Torricelli inventó el barómetro de mercurio (1643), un dispositivo basado 
            en el principio de vasos comunicantes.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Revolución Industrial</h3>
          <p>
            Durante la Revolución Industrial (siglos XVIII-XIX), el principio de vasos comunicantes 
            se aplicó masivamente en sistemas hidráulicos industriales, máquinas de vapor, sistemas 
            de frenos y elevadores hidráulicos.
          </p>
          <p>
            Joseph Bramah (1748-1814) inventó la prensa hidráulica (1795), que combinaba vasos 
            comunicantes con el principio de Pascal para multiplicar fuerzas. William Armstrong 
            (1810-1900) desarrolló la grúa hidráulica (1846), revolucionando el manejo de cargas 
            pesadas en puertos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Aplicaciones Modernas</h3>
          <p>
            En el siglo XX y XXI, el principio de vasos comunicantes sigue siendo fundamental en 
            ingeniería hidráulica, sistemas de distribución de agua, instrumentación industrial y 
            numerosas aplicaciones tecnológicas. Su simplicidad y confiabilidad lo mantienen vigente 
            en la era digital.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>El Acueducto de Segovia: 2000 Años Sin Cemento</h3>
          <p>
            El Acueducto de Segovia, construido por los romanos alrededor del año 50 d.C., transporta 
            agua desde 17 km de distancia utilizando el principio de vasos comunicantes. Lo asombroso 
            es que sus 167 arcos de piedra granítica están ensamblados sin ningún tipo de argamasa o 
            cemento, solo por la precisión del corte y el peso de las piedras.
          </p>
          <p>
            El acueducto ha funcionado continuamente durante casi 2000 años, suministrando agua a la 
            ciudad de Segovia hasta 1973. Su punto más alto alcanza 28.5 metros sobre el suelo, y la 
            pendiente del canal es de apenas 1%, suficiente para que el agua fluya por gravedad 
            manteniendo el mismo nivel en todo el recorrido.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Sifón Invertido Romano</h3>
          <p>
            Los romanos desarrollaron una técnica ingeniosa llamada "sifón invertido" para cruzar 
            valles profundos sin construir arcos enormes. El agua descendía por un lado del valle en 
            tuberías de plomo o cerámica, cruzaba el fondo y subía por el otro lado hasta casi el 
            mismo nivel inicial, siguiendo el principio de vasos comunicantes.
          </p>
          <p>
            El sifón del acueducto de Lyon (Francia) descendía 100 metros y volvía a subir, soportando 
            presiones de hasta 10 atmósferas. Las tuberías de plomo tenían paredes de hasta 2 cm de 
            espesor para resistir la presión. Este sistema demuestra el profundo conocimiento práctico 
            que los romanos tenían del comportamiento de los fluidos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Nivel de Agua: Herramienta Milenaria</h3>
          <p>
            El nivel de agua o nivel de manguera es una de las herramientas más antiguas y precisas 
            para establecer referencias horizontales. Los constructores de las pirámides de Egipto 
            (2500 a.C.) probablemente usaron canales llenos de agua para nivelar la base de las 
            pirámides con una precisión asombrosa.
          </p>
          <p>
            La Gran Pirámide de Giza tiene una base de 230 metros de lado con una diferencia de nivel 
            de solo 2 cm entre las esquinas, una precisión del 0.009%. Esta exactitud habría sido 
            imposible sin un sistema de nivelación basado en agua, aprovechando que la superficie del 
            agua siempre forma un plano horizontal perfecto.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Los Jardines Colgantes de Babilonia</h3>
          <p>
            Los legendarios Jardines Colgantes de Babilonia, una de las Siete Maravillas del Mundo 
            Antiguo, habrían utilizado un sofisticado sistema de vasos comunicantes para elevar agua 
            desde el río Éufrates hasta las terrazas superiores, situadas a más de 20 metros de altura.
          </p>
          <p>
            Aunque no se ha encontrado evidencia arqueológica definitiva, las descripciones antiguas 
            mencionan un sistema de "tornillos sin fin" (tornillos de Arquímedes) y canales conectados 
            que distribuían el agua uniformemente por todas las terrazas, manteniendo los jardines 
            exuberantes en medio del desierto mesopotámico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Experimento de Pascal con Barriles</h3>
          <p>
            En 1646, Blaise Pascal realizó un experimento dramático para demostrar el principio de 
            vasos comunicantes y la transmisión de presión en fluidos. Conectó un tubo delgado y largo 
            (de unos 10 metros) a un barril de vino completamente lleno y sellado.
          </p>
          <p>
            Al verter agua en el tubo delgado desde una ventana superior, la presión en el fondo del 
            tubo aumentó tanto que el barril explotó, a pesar de que solo se añadieron unos pocos 
            litros de agua. Este experimento demostró que la presión depende de la altura de la columna 
            de líquido, no de su volumen total, un concepto revolucionario en su época.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Canal de Panamá y las Esclusas</h3>
          <p>
            El Canal de Panamá (inaugurado en 1914) utiliza un sistema de esclusas que funciona 
            enteramente por gravedad, basándose en el principio de vasos comunicantes. Cada esclusa 
            es esencialmente un sistema de vasos comunicantes gigante que eleva o desciende barcos 
            de hasta 80,000 toneladas.
          </p>
          <p>
            Las compuertas se abren y el agua fluye naturalmente entre las cámaras hasta alcanzar el 
            mismo nivel, elevando o descendiendo el barco sin necesidad de bombas. El sistema usa 
            aproximadamente 200 millones de litros de agua dulce por cada barco que transita, agua 
            que proviene del lago Gatún y fluye por gravedad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Misterio del Sifón Automático</h3>
          <p>
            Los sifones son dispositivos fascinantes basados en vasos comunicantes que pueden 
            transferir líquido de un recipiente a otro más bajo sin necesidad de bombas. Lo curioso 
            es que el líquido debe "subir" primero antes de descender, aparentemente desafiando la 
            gravedad.
          </p>
          <p>
            Durante siglos se creyó que los sifones funcionaban por presión atmosférica, pero 
            experimentos recientes (2010) demostraron que funcionan incluso en el vacío. El mecanismo 
            real involucra la cohesión molecular del líquido y la presión hidrostática, creando una 
            columna continua que "tira" del líquido hacia arriba y luego hacia abajo. Este fenómeno 
            sigue siendo objeto de investigación en física de fluidos.
          </p>
        </div>
      </div>

      <div className="theory-section-highlight">
        <h2>📝 Resumen</h2>
        <p>
          Los vasos comunicantes son recipientes conectados por su base que contienen uno o más fluidos. 
          El principio fundamental establece que cuando contienen el mismo líquido, el nivel alcanza la 
          misma altura en todos los recipientes, independientemente de su forma o tamaño. Esto se debe 
          a que la presión en el punto de conexión debe ser igual para todos los vasos.
        </p>
        <p>
          Cuando los vasos contienen líquidos inmiscibles de diferentes densidades, las alturas son 
          inversamente proporcionales a las densidades: ρ₁h₁ = ρ₂h₂. El líquido menos denso alcanza 
          mayor altura para equilibrar la presión en el punto de contacto (interfaz).
        </p>
        <p>
          Las aplicaciones del principio son extensas y fundamentales: sistemas de distribución de agua, 
          acueductos, herramientas de nivelación en construcción, manómetros, sistemas hidráulicos, 
          fontanería, sistemas de riego y numerosos instrumentos de medición. Su simplicidad y 
          confiabilidad lo han mantenido vigente desde la antigüedad hasta la actualidad.
        </p>
        <p>
          El principio de vasos comunicantes ha sido conocido y aplicado desde hace más de 4000 años, 
          desde los sistemas de irrigación egipcios hasta los modernos sistemas hidráulicos. Los 
          acueductos romanos representan la aplicación más monumental de este principio, algunos de 
          los cuales siguen funcionando después de 2000 años.
        </p>
      </div>
    </>
  );
};

export default Theory;
