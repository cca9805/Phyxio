import {
  TheorySection,
  Concept,
  Important,
  Formula,
} from "../../../components/TheoryV2";
import { definitions } from "./definitions";

export const metadata = {
  titulo: "Ultrasonido",
  descripcion:
    "El ultrasonido es una onda mecánica de alta frecuencia, inaudible para el ser humano, con aplicaciones fundamentales en medicina, industria, ciencia y vida cotidiana.",
  isTheoryOnly: false,
  educationLevel: "ESO",
  levels: ["ESO", "BACHILLERATO"],
};

const UltrasonidoTheory = ({ exercises = [] }) => (
  <>
    {/* 3. TEORÍA PRINCIPAL */}
    <TheorySection title="¿Qué es el Ultrasonido?">
      <Important>
        El ultrasonido son ondas sonoras con frecuencias superiores a 20 kHz,
        inaudibles para el ser humano, pero con aplicaciones fundamentales en
        medicina, industria y ciencia.
      </Important>
      <Concept title="Rangos de frecuencia">
        <ul>
          <li>Ultrasonido bajo: 20-100 kHz (limpieza, soldadura)</li>
          <li>Ultrasonido medio: 100 kHz - 1 MHz (ensayos no destructivos)</li>
          <li>Ultrasonido alto: 1-20 MHz (diagnóstico médico)</li>
          <li>Ultrasonido muy alto: &gt; 20 MHz (microscopía acústica)</li>
        </ul>
      </Concept>
      <Concept title="Generación">
        <ul>
          <li>Efecto piezoeléctrico: Cristales vibran al aplicar voltaje</li>
          <li>Materiales: Cuarzo, titanato de bario, PZT</li>
          <li>Frecuencia: Determinada por el grosor del cristal</li>
          <li>Reversible: También detectan ultrasonido</li>
        </ul>
      </Concept>
      <Concept title="Propagación">
        <ul>
          <li>Ondas longitudinales en medios sólidos, líquidos y gaseosos</li>
          <li>Velocidad en agua: ~1,480 m/s</li>
          <li>Velocidad en tejidos blandos: ~1,540 m/s</li>
          <li>Velocidad en hueso: ~3,500 m/s</li>
          <li>Velocidad en aire: ~340 m/s (alta atenuación)</li>
        </ul>
        <Important>
          Atenuación: Aumenta con la frecuencia. Frecuencias más altas penetran
          menos pero tienen mejor resolución.
        </Important>
      </Concept>
      <Concept title="Reflexión e Impedancia Acústica">
        <ul>
          <li>
            Al cambiar de medio, parte de la onda se refleja y parte se
            transmite
          </li>
          <li>Impedancia acústica: Z = ρ × c</li>
          <li>Mayor diferencia de impedancia → mayor reflexión</li>
        </ul>
        <ul>
          <li>Z: Impedancia acústica (kg/m²·s o Rayl)</li>
          <li>ρ: Densidad del medio (kg/m³)</li>
          <li>c: Velocidad del sonido en el medio (m/s)</li>
        </ul>
      </Concept>
    </TheorySection>

    {/* 4. FÓRMULAS Y ASPECTOS CUANTITATIVOS */}
    <TheorySection title="Fórmulas y Aspectos Cuantitativos">
      <Concept title="Impedancia acústica">
        <Formula
          expression={String.raw`Z = \rho \cdot c`}
          calculatorId="ultrasonido-impedancia"
          definitions={definitions}
          exercises={exercises}
        />
        <ul>
          <li>Z: Impedancia acústica (Rayl)</li>
          <li>ρ: Densidad (kg/m³)</li>
          <li>c: Velocidad del sonido (m/s)</li>
        </ul>
      </Concept>
    </TheorySection>

    {/* 6. APLICACIONES */}
    <div
      className="theory-applications-section"
      title="Aplicaciones en la vida real"
    >
      <h2>
        <span role="img" aria-label="aplicaciones">
          🌍
        </span>{" "}
        Aplicaciones en la vida real
      </h2>
      {/* Aplicaciones Detalladas */}
      <div className="theory-subsection">
        <h3>🏥 Diagnóstico por Imágenes</h3>

        <ul>
          <h4>
            La ecografía o ultrasonografía es una técnica de imagen no invasiva:
          </h4>
          <li>Frecuencias típicas: 2-20 MHz</li>
          <li>Principio: Eco de ondas reflejadas en interfaces de tejidos</li>
          <li>Ventajas: No ionizante, tiempo real, portátil, económico</li>
          <li>Aplicaciones: Obstetricia, cardiología, abdomen, vascular</li>
        </ul>

        <ul>
          <h4>Modos de imagen:</h4>
          <li>Modo A: Amplitud (unidimensional)</li>
          <li>Modo B: Brillo (imagen 2D)</li>
          <li>Modo M: Movimiento (tiempo vs profundidad)</li>
          <li>Doppler: Medición de flujo sanguíneo</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🏥 Medicina Diagnóstica</h3>
        <ul>
          <li>
            Ecografía obstétrica: Monitoreo del desarrollo fetal, detección de
            anomalías, determinación de sexo (2-5 MHz)
          </li>
          <li>
            Ecocardiografía: Evaluación de válvulas cardíacas, función
            ventricular, detección de coágulos (2-4 MHz)
          </li>
          <li>
            Ecografía abdominal: Diagnóstico de hígado, riñones, vesícula,
            páncreas (3-5 MHz)
          </li>
          <li>
            Ecografía vascular: Detección de trombosis, estenosis arterial,
            várices (5-10 MHz)
          </li>
          <li>
            Ecografía musculoesquelética: Lesiones de tendones, ligamentos,
            músculos (7-15 MHz)
          </li>
          <li>
            Ecografía de tiroides: Detección de nódulos, cáncer tiroideo (10-15
            MHz)
          </li>
          <li>
            Ecografía ocular: Desprendimiento de retina, tumores oculares (10-20
            MHz)
          </li>
          <li>
            Ecografía Doppler: Medición de flujo sanguíneo en tiempo real,
            detección de insuficiencias
          </li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>💊 Medicina Terapéutica</h3>
        <ul>
          <li>
            Litotripsia extracorpórea (ESWL): Destrucción de cálculos renales
            sin cirugía (frecuencias de choque)
          </li>
          <li>
            HIFU (High-Intensity Focused Ultrasound): Ablación de tumores
            prostáticos, uterinos, hepáticos sin incisiones
          </li>
          <li>
            Fisioterapia ultrasónica: Tratamiento de lesiones musculares,
            tendinitis, bursitis (1-3 MHz, 0.5-2 W/cm²)
          </li>
          <li>
            Trombolisis asistida: Disolución de coágulos sanguíneos combinando
            ultrasonido con fármacos
          </li>
          <li>
            Sonoforesis: Administración transdérmica de medicamentos usando
            ultrasonido
          </li>
          <li>
            Cicatrización de fracturas: Estimulación de formación ósea (LIPUS -
            Low Intensity Pulsed Ultrasound)
          </li>
          <li>
            Limpieza dental: Eliminación de sarro y placa mediante cavitación
            (25-40 kHz)
          </li>
          <li>
            Cirugía ultrasónica: Bisturí armónico para corte y coagulación
            simultánea
          </li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🔒 Seguridad y Consideraciones</h3>
        <Important>
          <p>
            Aunque el ultrasonido diagnóstico es generalmente seguro, existen
            consideraciones:
          </p>
          <ul>
            <li>Calentamiento tisular: A altas intensidades</li>
            <li>Cavitación: Formación de burbujas en tejidos</li>
            <li>Efectos mecánicos: Estrés por radiación</li>
            <li>Principio ALARA: "As Low As Reasonably Achievable"</li>
          </ul>
          <p>
            El ultrasonido industrial de alta potencia requiere protección
            auditiva, ya que puede generar componentes audibles y subarmónicos.
          </p>
        </Important>
      </div>
      <div className="theory-subsection">
        <h3>🏭 Industria y Control de Calidad</h3>
        <ul>
          <li>Industrias: Aeroespacial, automotriz, construcción</li>
          <li>
            Ensayos no destructivos (NDT): Detección de grietas, porosidad,
            delaminaciones en soldaduras y materiales
          </li>
          <li>
            Inspección aeroespacial: Verificación de integridad en alas,
            fuselajes, motores de aviones
          </li>
          <li>
            Control de calidad automotriz: Inspección de piezas fundidas,
            soldaduras de chasis
          </li>
          <li>
            Medición de espesor: Monitoreo de corrosión en tuberías, tanques,
            cascos de barcos
          </li>
          <li>
            Detección de defectos en rieles: Inspección de vías férreas para
            prevenir descarrilamientos
          </li>
          <li>
            Caracterización de materiales: Medición de propiedades elásticas,
            densidad, homogeneidad
          </li>
          <li>
            Inspección de hormigón: Detección de vacíos, grietas en estructuras
            de concreto
          </li>
        </ul>
        <p>Técnicas: Pulso-eco, transmisión, phased array, TOFD</p>
      </div>
      <div className="theory-subsection">
        <h3>🧼 Limpieza y Procesamiento</h3>
        <p>Limpieza profunda mediante cavitación:</p>
        <ul>
          <li>Frecuencias: 20-400 kHz</li>
          <li>Principio: Burbujas microscópicas colapsan violentamente</li>
          <li>Aplicaciones: Joyería, instrumental médico, electrónica</li>
          <li>Ventajas: Limpia áreas inaccesibles, no abrasivo</li>
        </ul>
        <ul>
          <li>
            Limpieza de joyas: Eliminación de suciedad en ranuras y grabados (40
            kHz)
          </li>
          <li>
            Limpieza de instrumental médico: Esterilización de herramientas
            quirúrgicas (40-80 kHz)
          </li>
          <li>
            Limpieza de componentes electrónicos: Placas de circuito, conectores
            (40-170 kHz)
          </li>
          <li>Limpieza de lentes ópticas: Gafas, lentes de cámara sin rayar</li>
          <li>
            Desgasificación de líquidos: Eliminación de burbujas en resinas,
            aceites
          </li>
          <li>Homogeneización: Mezcla uniforme de suspensiones, emulsiones</li>
          <li>
            Extracción: Obtención de compuestos de plantas (aceites esenciales,
            principios activos)
          </li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🔩 Unión y procesamiento de materiales</h3>
        <ul>
          <li>Soldadura ultrasónica: Plásticos, metales (sin calor externo)</li>
          <li>Mecanizado: Materiales duros y frágiles</li>
          <li>Emulsificación: Mezcla de líquidos inmiscibles</li>
          <li>Atomización: Generación de aerosoles</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🔧 Manufactura y Ensamblaje</h3>
        <ul>
          <li>
            Soldadura ultrasónica de plásticos: Unión de componentes sin
            adhesivos (20-40 kHz)
          </li>
          <li>Soldadura de metales: Aluminio, cobre sin fusión (20-70 kHz)</li>
          <li>Corte ultrasónico: Alimentos, textiles, materiales compuestos</li>
          <li>
            Mecanizado de cerámicas: Perforación y corte de materiales duros
          </li>
          <li>
            Sellado de envases: Tubos de pasta dental, bolsas de alimentos
          </li>
          <li>Estampado en caliente: Marcado de plásticos, textiles</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>📏 Medición y Sensores</h3>
        <ul>
          <li>
            Sensores de aparcamiento: Detección de obstáculos en automóviles
            (40-48 kHz)
          </li>
          <li>
            Medidores de nivel: Tanques de líquidos, silos de granos (20-200
            kHz)
          </li>
          <li>Caudalímetros: Medición de flujo en tuberías sin contacto</li>
          <li>Medidores de distancia: Robótica, automatización industrial</li>
          <li>
            Detección de fugas: Aire comprimido, gas, vacío en sistemas
            industriales
          </li>
          <li>
            Anemómetros ultrasónicos: Medición de velocidad del viento sin
            partes móviles
          </li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🦇 Ecolocalización Animal</h3>
        <h4>Varios animales usan ultrasonido para navegar y cazar</h4>
        <ul>
          <li>Murciélagos: 20-120 kHz, detección de insectos</li>
          <li>Delfines: 40-130 kHz, navegación y comunicación</li>
          <li>Ballenas: Hasta 200 kHz, caza en aguas profundas</li>
          <li>Musarañas: Navegación en oscuridad</li>
        </ul>
        <h4>
          Los murciélagos pueden detectar objetos de 0.1 mm y distinguir
          texturas mediante ultrasonido.
        </h4>
      </div>
      <div className="theory-subsection">
        <h3>🔬 Investigación Científica</h3>
        <ul>
          <li>
            Microscopía acústica (SAM): Imagen de estructuras internas a escala
            nanométrica (100 MHz - 2 GHz)
          </li>
          <li>
            Espectroscopía ultrasónica: Análisis de propiedades moleculares
          </li>
          <li>
            Levitación acústica: Suspensión de objetos sin contacto para
            experimentos
          </li>
          <li>Manipulación celular: Separación y clasificación de células</li>
          <li>Cristalografía: Estudio de estructuras cristalinas</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🏠 Aplicaciones Domésticas</h3>
        <ul>
          <li>
            Humidificadores ultrasónicos: Generación de niebla fina para
            ambientes (1.7 MHz)
          </li>
          <li>
            Limpiadores de joyas caseros: Dispositivos portátiles de limpieza
          </li>
          <li>
            Repelentes de plagas: Dispositivos que emiten ultrasonido
            (efectividad cuestionable)
          </li>
          <li>
            Sensores de proximidad: Puertas automáticas, sistemas de seguridad
          </li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🌊 Aplicaciones Marinas</h3>
        <ul>
          <li>
            Sonar de alta frecuencia: Mapeo detallado del fondo marino (100-500
            kHz)
          </li>
          <li>
            Detección de peces: Localización de cardúmenes para pesca comercial
          </li>
          <li>
            Comunicación submarina: Transmisión de datos entre vehículos
            submarinos
          </li>
          <li>Inspección de cascos: Detección de corrosión, incrustaciones</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🦇 Inspiración Biológica</h3>
        <ul>
          <li>
            Sistemas de navegación: Robots inspirados en ecolocalización de
            murciélagos
          </li>
          <li>
            Bastones para ciegos: Dispositivos que usan ultrasonido para
            detectar obstáculos
          </li>
          <li>
            Gafas sónicas: Ayudas para navegación de personas con discapacidad
            visual
          </li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>📡 Otras Aplicaciones Variadas</h3>
        <ul>
          <li>
            Medición de distancia: Sensores de proximidad, estacionamiento
          </li>
          <li>Control de nivel: Tanques de líquidos</li>
          <li>Medición de flujo: Caudalímetros ultrasónicos</li>
          <li>Humidificadores: Generación de niebla fina</li>
          <li>Repelentes: Ahuyentar plagas (efectividad debatida)</li>
          <li>Comunicación submarina: Alternativa a radio en agua</li>
          <li>Microscopía acústica: Imagen de alta resolución</li>
        </ul>
      </div>
      <div className="theory-section-highlight">
        <p>
          💡 Impacto transformador: El ultrasonido ha revolucionado la medicina
          (permitiendo ver bebés antes de nacer sin radiación), la industria
          (detectando fallas invisibles que podrían causar accidentes), y la
          vida cotidiana (desde limpiar joyas hasta aparcar el coche). Es una
          tecnología invisible pero omnipresente que salva vidas, mejora
          productos y facilita tareas diarias.
        </p>
      </div>
    </div>

    {/* 7. HECHOS HISTÓRICOS */}
    <div
      className="theory-history-section"
      title="Historia: Del descubrimiento a la revolución médica"
    >
      <h2>
        <span role="img" aria-label="historia">
          📜
        </span>{" "}
        Historia: Del descubrimiento a la revolución médica
      </h2>
      <div className="theory-subsection">
        <h3>🔬 Lazzaro Spallanzani (1794)</h3>
        <p>
          El biólogo italiano Lazzaro Spallanzani fue el primero en estudiar la
          ecolocalización de murciélagos. Observó que los murciélagos ciegos
          podían navegar perfectamente, pero si les tapaba los oídos, chocaban
          con obstáculos. Concluyó que usaban sonidos inaudibles para los
          humanos, aunque no pudo demostrarlo con la tecnología de su época.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>⚡ Pierre Curie (1880)</h3>
        <p>
          Los hermanos Pierre y Jacques Curie descubrieron el efecto
          piezoeléctrico: ciertos cristales generan voltaje cuando se comprimen,
          y viceversa. Este descubrimiento es la base de todos los transductores
          ultrasónicos modernos.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🌊 Paul Langevin (1917)</h3>
        <p>
          Durante la Primera Guerra Mundial, el físico francés Paul Langevin
          desarrolló el primer dispositivo práctico de ultrasonido: un sonar
          para detectar submarinos alemanes. Usó cristales de cuarzo
          piezoeléctricos para generar y detectar ondas ultrasónicas en agua.
        </p>
        <p>
          Anécdota: Langevin mató peces a 1 km de distancia con su prototipo de
          alta potencia, demostrando el poder destructivo del ultrasonido
          enfocado.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🏭 Primeras aplicaciones industriales (1920s-1930s)</h3>
        <p>
          En los años 1920, el ruso Sergei Sokolov propuso usar ultrasonido para
          detectar defectos en metales. En 1929, desarrolló el primer sistema de
          inspección ultrasónica para la industria.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🏥 Karl Dussik - Primera ecografía médica (1942)</h3>
        <p>
          El neurólogo austríaco Karl Dussik fue el primero en usar ultrasonido
          para diagnóstico médico. Intentó localizar tumores cerebrales midiendo
          la transmisión de ultrasonido a través del cráneo. Aunque no tuvo
          éxito, abrió el camino.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🔊 George Ludwig (1949)</h3>
        <p>
          El estadounidense George Ludwig realizó estudios sistemáticos sobre
          cómo el ultrasonido se propaga en tejidos biológicos. Midió
          velocidades de propagación e impedancias acústicas de diferentes
          órganos, estableciendo las bases científicas de la ecografía moderna.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>👶 Ian Donald - Revolución obstétrica (1958)</h3>
        <p>
          El obstetra escocés Ian Donald desarrolló la primera ecografía
          obstétrica práctica. En 1958 publicó imágenes de un feto usando
          ultrasonido. Revolucionó la obstetricia, permitiendo monitorear
          embarazos sin radiación.
        </p>
        <p>
          Impacto: Antes de Donald, los médicos solo podían escuchar el latido
          fetal. Ahora podían ver al bebé, detectar anomalías y salvar vidas.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>💓 Inge Edler y Hellmuth Hertz - Ecocardiografía (1953)</h3>
        <p>
          El cardiólogo sueco Inge Edler y el físico Hellmuth Hertz (hijo del
          descubridor de las ondas de radio) desarrollaron la primera
          ecocardiografía. Pudieron visualizar el movimiento de las válvulas
          cardíacas en tiempo real.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🎯 Christian Doppler aplicado (1960s)</h3>
        <p>
          En los años 1960, se aplicó el efecto Doppler al ultrasonido médico,
          permitiendo medir la velocidad del flujo sanguíneo. Esto revolucionó
          el diagnóstico vascular y cardíaco.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>💻 Imagen 2D en tiempo real (1970s)</h3>
        <p>
          En los años 1970, los avances en electrónica y computación permitieron
          crear imágenes 2D en tiempo real. Los ecógrafos pasaron de ser equipos
          de investigación a herramientas clínicas rutinarias.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🎨 Imagen 3D y 4D (1990s-2000s)</h3>
        <p>
          En los años 1990, se desarrolló la ecografía 3D, permitiendo ver
          volúmenes completos. La ecografía 4D (3D en tiempo real) permitió a
          los padres ver a sus bebés moviéndose antes de nacer, creando un
          vínculo emocional prenatal.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🔥 HIFU - Cirugía sin bisturí (2000s)</h3>
        <p>
          El ultrasonido enfocado de alta intensidad (HIFU) se aprobó para
          tratamiento de tumores. Permite destruir tejido canceroso sin
          incisiones, usando calor generado por ultrasonido enfocado.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🏆 Premio Nobel relacionado (2003)</h3>
        <p>
          Paul Lauterbur y Peter Mansfield ganaron el Nobel de Medicina por
          desarrollar la resonancia magnética (MRI). Aunque no es ultrasonido,
          comparte el objetivo: imagen médica no invasiva sin radiación.
        </p>
      </div>
      <div className="theory-section-highlight">
        <p>
          💡 De arma de guerra a salvavidas: El ultrasonido nació como arma para
          hundir submarinos (1917) y se convirtió en una de las tecnologías
          médicas más importantes del siglo XX. Hoy, millones de bebés son
          monitoreados con ultrasonido, tumores son destruidos sin cirugía, y
          defectos en aviones son detectados antes de causar accidentes. Un
          siglo de evolución desde matar peces a salvar vidas.
        </p>
      </div>
    </div>

    {/* 8. DATOS ANECDÓTICOS */}
    <div
      className="theory-anecdotes-section"
      title="Anécdotas y casos fascinantes"
    >
      <h2>
        <span role="img" aria-label="anécdotas">
          ✨
        </span>{" "}
        Anécdotas y curiosidades
      </h2>
      <div className="theory-subsection">
        <h3>🐟 El experimento letal de Langevin (1917)</h3>
        <p>
          Cuando Paul Langevin probó su primer sonar de alta potencia, colocó
          peces en un tanque de agua. Al activar el ultrasonido, los peces
          murieron instantáneamente a 1 km de distancia. Esto demostró que el
          ultrasonido enfocado podía ser letal, pero también que podía detectar
          objetos a grandes distancias.
        </p>
        <p>
          Consecuencia: Este descubrimiento llevó al desarrollo de la
          litotripsia (destrucción de cálculos renales) y HIFU (ablación de
          tumores) décadas después.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>👶 La primera "foto" de un bebé (1958)</h3>
        <p>
          Cuando Ian Donald mostró las primeras imágenes de un feto por
          ultrasonido, los médicos estaban escépticos. Una madre embarazada vio
          la imagen borrosa y preguntó: "¿Eso es mi bebé?". Donald respondió:
          "Sí, y está bien". Ella lloró de emoción. Fue el primer vínculo
          emocional prenatal documentado.
        </p>
        <p>
          Impacto cultural: Hoy, las ecografías 3D/4D son un ritual del
          embarazo. Los padres comparten imágenes en redes sociales, algo
          impensable hace 60 años.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🦇 Murciélagos vs. Polillas: Guerra evolutiva</h3>
        <p>
          Los murciélagos usan ultrasonido (20-120 kHz) para cazar polillas.
          Pero las polillas evolucionaron órganos timpánicos que detectan
          ultrasonido. Cuando "escuchan" un murciélago, realizan maniobras
          evasivas erráticas.
        </p>
        <p>
          Contraataque: Algunas polillas tigre emiten sus propios ultrasonidos
          para "aturdir" el sonar del murciélago, como un contramedida
          electrónica natural.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🏥 El cálculo renal de 3 cm destruido sin cirugía</h3>
        <p>
          En 1980, el primer paciente tratado con litotripsia extracorpórea
          (ESWL) tenía un cálculo renal de 3 cm. Los médicos enfocaron ondas de
          choque ultrasónicas desde fuera del cuerpo. En 45 minutos, el cálculo
          se fragmentó en arena que el paciente expulsó naturalmente. Sin
          incisiones, sin anestesia general.
        </p>
        <p>
          Revolución: Antes, requería cirugía mayor con semanas de recuperación.
          Ahora, el paciente se va a casa el mismo día.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🔍 El defecto que salvó 273 vidas (1988)</h3>
        <p>
          En 1988, una inspección ultrasónica de rutina detectó una grieta
          microscópica en el fuselaje del vuelo Aloha Airlines 243. La grieta
          era invisible a simple vista. Días después, otro avión del mismo
          modelo sufrió descompresión explosiva en vuelo por una grieta similar,
          matando a 1 persona.
        </p>
        <p>
          Resultado: Todos los aviones de ese modelo fueron inspeccionados con
          ultrasonido. Se encontraron 273 aviones con grietas similares. El
          ultrasonido evitó múltiples catástrofes.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🎨 El "retrato" más caro del mundo</h3>
        <p>
          En 2021, una ecografía 3D de un feto fue vendida como NFT (arte
          digital) por $28,000. El comprador argumentó que era "el primer
          retrato de una persona antes de nacer". Aunque controvertido, muestra
          cómo el ultrasonido ha cambiado nuestra percepción de la vida
          prenatal.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🧼 La limpieza imposible</h3>
        <p>
          Los limpiadores ultrasónicos pueden limpiar lugares imposibles de
          alcanzar. En 2019, restauradores usaron ultrasonido para limpiar un
          reloj del siglo XVII sin desmontarlo. Las burbujas de cavitación
          entraron en engranajes microscópicos, eliminando 300 años de suciedad
          sin dañar el mecanismo.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🌊 El Titanic y el sonar que llegó tarde</h3>
        <p>
          El Titanic se hundió en 1912, 5 años antes de que Langevin inventara
          el sonar. Si hubiera tenido sonar, habría detectado el iceberg a 2 km
          de distancia, con tiempo suficiente para evitarlo. Después del
          Titanic, el desarrollo del sonar se aceleró.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🦷 Dientes más limpios que nunca</h3>
        <p>
          Los limpiadores dentales ultrasónicos (25-40 kHz) generan 30,000
          vibraciones por segundo. Esto crea burbujas microscópicas que colapsan
          violentamente, destruyendo bacterias y desprendiendo sarro. Es tan
          efectivo que algunos dentistas lo llaman "el cepillo del futuro".
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🎯 Levitación acústica: Ciencia ficción real</h3>
        <p>
          Científicos han logrado levitar objetos usando ondas ultrasónicas
          enfocadas. En 2018, levitaron una gota de agua, la movieron en el aire
          y la depositaron sin tocarla. Aplicaciones futuras: ensamblaje de
          componentes electrónicos sin contacto, manipulación de células vivas.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🏗️ El puente que "escucha" sus grietas</h3>
        <p>
          El puente Golden Gate tiene sensores ultrasónicos permanentes que
          monitorean grietas 24/7. Si una grieta crece, el sistema alerta
          automáticamente. Es como darle al puente un "sistema nervioso" que
          detecta dolor antes de que sea grave.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🐋 Ballenas vs. Sonar militar</h3>
        <p>
          El sonar militar de alta potencia (200+ dB) puede desorientar y dañar
          a ballenas y delfines. En 2000, 17 ballenas vararon en las Bahamas
          después de ejercicios navales con sonar. Autopsias mostraron
          hemorragias cerebrales causadas por ultrasonido intenso.
        </p>
        <p>
          Dilema ético: El sonar salva vidas de marineros detectando submarinos,
          pero daña vida marina. Ahora hay protocolos para reducir potencia en
          zonas con cetáceos.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🔬 Viendo lo invisible: Microscopía acústica</h3>
        <p>
          La microscopía acústica (100 MHz - 2 GHz) puede "ver" dentro de chips
          electrónicos sin abrirlos. Detecta defectos de fabricación invisibles
          para microscopios ópticos. Es como una "radiografía" para electrónica.
        </p>
      </div>
      <div className="theory-section-highlight">
        <p>
          💡 Reflexión: El ultrasonido es una tecnología invisible que está en
          todas partes: en el hospital donde naciste (ecografía), en el avión
          que te lleva de vacaciones (inspección de seguridad), en tu dentista
          (limpieza), en tu coche (sensores de aparcamiento), y hasta en la
          naturaleza (murciélagos cazando). Es el sonido que no oímos pero que
          ha transformado la medicina, la industria y nuestra comprensión de la
          vida.
        </p>
      </div>
    </div>

    {/* 9. RESUMEN */}
    <TheorySection className="theory-summary-section">
      <h2>
        <span role="img" aria-label="resumen">
          📝
        </span>{" "}
        Resumen
      </h2>
      <ul>
        <li>
          El ultrasonido es una onda mecánica de alta frecuencia con
          aplicaciones en medicina, industria, ciencia y vida cotidiana.
        </li>
        <li>Su generación y detección se basa en el efecto piezoeléctrico.</li>
        <li>
          La seguridad depende de la intensidad y el uso adecuado (principio
          ALARA).
        </li>
        <li>
          Ha revolucionado el diagnóstico médico, la inspección industrial y la
          tecnología doméstica.
        </li>
      </ul>
      <Important>
        El ultrasonido es una herramienta versátil, segura y transformadora,
        invisible pero esencial en la sociedad moderna.
      </Important>
    </TheorySection>
  </>
);

export default UltrasonidoTheory;
