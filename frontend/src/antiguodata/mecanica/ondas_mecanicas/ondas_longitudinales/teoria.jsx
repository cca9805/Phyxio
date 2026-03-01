import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Ondas Longitudinales",
  descripcion: "Ondas con oscilación paralela a la propagación",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Ondas Longitudinales">
        <Concept title="Introducción a las Ondas Longitudinales">
          <p>
            En las ondas longitudinales, las partículas del medio oscilan paralelamente 
            a la dirección de propagación de la onda. La perturbación crea regiones de compresión y rarefacción 
            que se propagan a través del medio.
          </p>
          <Important>
            <p>
              El sonido es el ejemplo más común de onda longitudinal. Las ondas longitudinales pueden 
              propagarse en sólidos, líquidos y gases.
            </p>
          </Important>
          <Example>
            <p>
              Ejemplos de ondas longitudinales: ondas sonoras en el aire, ondas sísmicas tipo P, 
              ondas en resortes comprimidos, ultrasonido en medicina.
            </p>
          </Example>
        </Concept>

        <Concept title="Compresiones y Rarefacciones">
          <p>
            Una onda longitudinal se caracteriza por regiones alternadas de alta y baja densidad:
          </p>
          <ul>
            <li>Compresiones: Regiones donde las partículas están más juntas (mayor densidad y presión)</li>
            <li>Rarefacciones: Regiones donde las partículas están más separadas (menor densidad y presión)</li>
          </ul>
          <p>
            La longitud de onda λ es la distancia entre dos compresiones consecutivas o dos rarefacciones consecutivas.
          </p>
        </Concept>

        <Concept title="Velocidad del Sonido en Aire">
          <p>
            La velocidad del sonido en aire depende principalmente de la temperatura. 
            Una fórmula aproximada muy útil relaciona la velocidad con la temperatura en grados Celsius:
          </p>
          <Formula
            expression={String.raw`v \approx 331 + 0.6T_C`}
            calculatorId="ondas-long-v-aire"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Temperatura", expression: String.raw`T_C = \frac{v - 331}{0.6}` }
            ]}
          />
          <p>Donde:</p>
          <ul>
            <li>v: Velocidad del sonido (m/s)</li>
            <li>T_C: Temperatura en grados Celsius (°C)</li>
          </ul>
          <Example>
            <p>
              A 0°C: v ≈ 331 m/s<br/>
              A 20°C: v ≈ 343 m/s<br/>
              A 30°C: v ≈ 349 m/s
            </p>
          </Example>
          

        </Concept>

        <Concept title="Velocidad en Sólidos">
          <p>
            La velocidad de ondas longitudinales en una barra sólida depende del módulo de Young 
            (rigidez del material) y su densidad:
          </p>
          <Formula
            expression={String.raw`v = \sqrt{\frac{E}{\rho}}`}
            calculatorId="ondas-long-v-solido"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Módulo de Young", expression: String.raw`E = \rho v^2` },
              { description: "Calcular Densidad", expression: String.raw`\rho = \frac{E}{v^2}` }
            ]}
          />
          <p>Donde:</p>
          <ul>
            <li>v: Velocidad (m/s)</li>
            <li>E: Módulo de Young (Pa o GPa)</li>
            <li>ρ: Densidad del material (kg/m³)</li>
          </ul>
          <Important>
            <p>
              El sonido viaja mucho más rápido en sólidos que en gases. Por ejemplo, en acero 
              viaja a aproximadamente 5000 m/s, comparado con 343 m/s en aire.
            </p>
          </Important>
          <Example>
            <p>
              Velocidades típicas en sólidos:<br/>
              - Acero: ~5000 m/s<br/>
              - Aluminio: ~5100 m/s<br/>
              - Vidrio: ~5500 m/s<br/>
              - Granito: ~6000 m/s
            </p>
          </Example>
          

        </Concept>

        <Concept title="Velocidad en Líquidos">
          <p>
            La velocidad del sonido en un líquido depende del módulo de compresibilidad 
            (resistencia a la compresión) y la densidad:
          </p>
          <Formula
            expression={String.raw`v = \sqrt{\frac{B}{\rho}}`}
            calculatorId="ondas-long-v-liquido"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Módulo de compresibilidad", expression: String.raw`B = \rho v^2` },
              { description: "Calcular Densidad", expression: String.raw`\rho = \frac{B}{v^2}` }
            ]}
          />
          <p>Donde:</p>
          <ul>
            <li>v: Velocidad (m/s)</li>
            <li>B: Módulo de compresibilidad (Pa o GPa)</li>
            <li>ρ: Densidad del líquido (kg/m³)</li>
          </ul>
          <Example>
            <p>
              Velocidades típicas en líquidos:<br/>
              - Agua (20°C): ~1480 m/s<br/>
              - Agua de mar: ~1530 m/s<br/>
              - Mercurio: ~1450 m/s
            </p>
          </Example>
          

        </Concept>

        <Concept title="Ondas Sísmicas P (Primarias)">
          <p>
            Las ondas sísmicas P son ondas longitudinales que se propagan a través de la Tierra durante 
            un terremoto. Son las más rápidas de todas las ondas sísmicas, viajando a velocidades de 
            6-8 km/s en la corteza terrestre y hasta 13 km/s en el núcleo.
          </p>
          <p>
            Las ondas P pueden viajar a través de sólidos, líquidos y gases, lo que las hace únicas 
            entre las ondas sísmicas. Son las primeras en llegar a los sismógrafos, de ahí su nombre 
            "primarias". La diferencia de tiempo entre la llegada de ondas P y ondas S permite calcular 
            la distancia al epicentro del terremoto.
          </p>
          <Important>
            <p>
              Las ondas P comprimen y expanden el material en la dirección de propagación, similar 
              a como el sonido viaja por el aire. Esta capacidad de atravesar líquidos permitió 
              descubrir que el núcleo externo de la Tierra es líquido.
            </p>
          </Important>
        </Concept>

        <Concept title="Ultrasonido y Aplicaciones">
          <p>
            El ultrasonido son ondas longitudinales con frecuencias superiores a 20 kHz, por encima 
            del rango audible humano. Estas ondas tienen numerosas aplicaciones en medicina, industria 
            y tecnología.
          </p>
          <p>
            En medicina, el ultrasonido (2-18 MHz) se usa para crear imágenes del interior del cuerpo. 
            Las ondas se reflejan en tejidos con diferentes densidades, y el tiempo de retorno determina 
            la profundidad de cada estructura. Es seguro porque no usa radiación ionizante.
          </p>
          <p>
            En industria, el ultrasonido se usa para detectar defectos internos en materiales (ensayos 
            no destructivos), limpiar piezas delicadas (limpieza ultrasónica), soldar plásticos y 
            metales, y medir distancias con alta precisión.
          </p>
          <Example>
            <p>
              Aplicaciones del ultrasonido:<br/>
              - Ecografías médicas (embarazo, corazón)<br/>
              - Detección de grietas en aviones<br/>
              - Limpieza de joyas y lentes<br/>
              - Soldadura de plásticos<br/>
              - Medición de nivel en tanques
            </p>
          </Example>
        </Concept>
      </TheorySection>


      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones de las Ondas Longitudinales
        </h2>
        
        <div className="theory-subsection">
          <h3>🏥 Ultrasonido Médico</h3>
          <p>
            El ultrasonido usa ondas longitudinales de alta frecuencia (2-18 MHz) para crear imágenes del interior del cuerpo sin radiación. Las ondas se reflejan en tejidos con diferentes densidades, permitiendo visualizar órganos, vasos sanguíneos y el feto durante el embarazo.
          </p>
          <p>
            Los ecocardiogramas usan ultrasonido para evaluar el corazón en tiempo real, detectando problemas valvulares y midiendo la función cardíaca. El Doppler ultrasónico mide el flujo sanguíneo detectando cambios en la frecuencia de las ondas reflejadas por células sanguíneas en movimiento.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔊 Sonar y Navegación Submarina</h3>
          <p>
            Los submarinos y barcos usan sonar (Sound Navigation And Ranging) para detectar objetos bajo el agua. El sonar activo emite pulsos de sonido y mide el tiempo de retorno del eco. La distancia al objeto es d = vt/2, donde v ≈ 1500 m/s en agua de mar.
          </p>
          <p>
            El sonar se usa para mapear el fondo oceánico, detectar bancos de peces, localizar naufragios y evitar colisiones. Los delfines y ballenas usan ecolocalización natural similar, emitiendo clicks de alta frecuencia para navegar y cazar.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌍 Sismología y Exploración Geológica</h3>
          <p>
            Las ondas sísmicas P (longitudinales) revelan la estructura interna de la Tierra. Viajan a través de sólidos y líquidos, permitiendo estudiar el núcleo, manto y corteza. La velocidad de las ondas P cambia en diferentes capas, creando refracciones que los sismólogos analizan.
          </p>
          <p>
            En exploración petrolera, se generan ondas sísmicas artificiales con explosiones controladas. Las ondas reflejadas revelan capas de roca y depósitos de petróleo/gas. Esta técnica (sísmica de reflexión) es fundamental en la industria energética.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔍 Ensayos No Destructivos (END)</h3>
          <p>
            El ultrasonido industrial detecta defectos internos en materiales sin dañarlos. Las ondas longitudinales (0.5-25 MHz) se propagan por metales, plásticos y cerámicas. Grietas, burbujas o inclusiones reflejan las ondas, revelando su ubicación y tamaño.
          </p>
          <p>
            Esta técnica inspecciona soldaduras, tuberías, alas de aviones y componentes críticos. Es esencial en aviación, construcción y manufactura para garantizar seguridad estructural sin destruir las piezas inspeccionadas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧼 Limpieza Ultrasónica</h3>
          <p>
            Los limpiadores ultrasónicos usan ondas longitudinales de alta frecuencia (20-400 kHz) para limpiar objetos delicados. Las ondas crean burbujas microscópicas que colapsan violentamente (cavitación), desprendiendo suciedad sin dañar la superficie.
          </p>
          <p>
            Se usa para limpiar joyas, lentes, instrumentos quirúrgicos, componentes electrónicos y piezas industriales. Es más efectivo que la limpieza manual y alcanza grietas y cavidades inaccesibles.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ Medición de Distancias y Niveles</h3>
          <p>
            Los sensores ultrasónicos miden distancias emitiendo pulsos y midiendo el tiempo de retorno. Se usan en sistemas de estacionamiento de automóviles, robots autónomos, medición de nivel en tanques industriales y sistemas de seguridad.
          </p>
          <p>
            Son económicos, precisos (±1 mm) y funcionan en condiciones adversas (polvo, vapor). Los drones usan sensores ultrasónicos para mantener altitud constante cerca del suelo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔧 Soldadura y Procesamiento de Materiales</h3>
          <p>
            La soldadura ultrasónica usa ondas longitudinales de alta potencia para unir plásticos y metales sin calor externo. Las vibraciones (20-40 kHz) generan fricción en la interfaz, fundiendo localmente el material y creando una unión sólida.
          </p>
          <p>
            Se usa en industria automotriz (tableros, luces), electrónica (baterías, circuitos) y embalaje (sellado de envases). Es rápida, limpia y no requiere adhesivos ni consumibles.
          </p>
        </div>
      </div>


      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia de las Ondas Longitudinales
        </h2>
        
        <div className="theory-subsection">
          <h3>🎵 Pitágoras y la Naturaleza del Sonido (siglo VI a.C.)</h3>
          <p>
            Pitágoras fue el primero en estudiar sistemáticamente el sonido, aunque no comprendía que era una onda longitudinal. Descubrió que cuerdas con longitudes en proporciones simples producían intervalos armoniosos, estableciendo las bases matemáticas de la música.
          </p>
          <p>
            Los griegos antiguos debatieron si el sonido era una onda o partículas. Aristóteles propuso correctamente que el sonido requiere un medio para propagarse, observando que no hay sonido en el vacío.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Robert Boyle y el Vacío (1660)</h3>
          <p>
            Robert Boyle demostró experimentalmente que el sonido no puede viajar en el vacío. Colocó una campana sonando dentro de una bomba de vacío y observó que el sonido se debilitaba a medida que se extraía el aire, desapareciendo completamente en el vacío.
          </p>
          <p>
            Este experimento confirmó que el sonido requiere un medio material para propagarse, a diferencia de la luz. Fue un hito en la comprensión de la naturaleza ondulatoria del sonido.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📐 Isaac Newton y la Velocidad del Sonido (1687)</h3>
          <p>
            Isaac Newton calculó teóricamente la velocidad del sonido en aire en su obra "Principia" (1687). Derivó la fórmula v = √(P/ρ) basándose en la elasticidad del aire, obteniendo ~290 m/s, un 15% menor que el valor real de 343 m/s a 20°C.
          </p>
          <p>
            El error se debió a que Newton asumió un proceso isotérmico (temperatura constante), cuando en realidad las compresiones y rarefacciones son adiabáticas (sin intercambio de calor). Laplace corrigió esto en 1816 introduciendo el coeficiente adiabático γ.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌊 Ondas Sísmicas y Estructura de la Tierra (1889-1936)</h3>
          <p>
            Ernst von Rebeur-Paschwitz detectó las primeras ondas sísmicas de un terremoto lejano (1889). Richard Dixon Oldham (1906) identificó ondas P (longitudinales) y S (transversales), descubriendo que las ondas S no atraviesan el núcleo terrestre, demostrando que es líquido.
          </p>
          <p>
            Inge Lehmann (1936) descubrió el núcleo interno sólido analizando ondas P que se reflejaban inesperadamente. Estos descubrimientos revelaron la estructura interna de la Tierra usando solo ondas mecánicas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔊 Desarrollo del Sonar (1915-1918)</h3>
          <p>
            Durante la Primera Guerra Mundial, el hundimiento del Titanic (1912) y la amenaza de submarinos alemanes motivaron el desarrollo del sonar. Paul Langevin (Francia) y Reginald Fessenden (Canadá) desarrollaron independientemente sistemas de detección submarina usando ultrasonido (1915-1918).
          </p>
          <p>
            El primer sonar operacional se instaló en barcos aliados en 1918. Después de la guerra, el sonar se usó para mapear el fondo oceánico, descubriendo montañas submarinas, fosas oceánicas y la dorsal mesoatlántica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏥 Ultrasonido Médico (1940-1960)</h3>
          <p>
            Karl Dussik (Austria, 1942) fue el primero en usar ultrasonido para diagnóstico médico, intentando detectar tumores cerebrales. Ian Donald (Escocia, 1958) desarrolló el primer ecógrafo práctico para obstetricia, revolucionando el cuidado prenatal.
          </p>
          <p>
            El desarrollo del ultrasonido Doppler (1960s) permitió medir flujo sanguíneo. Hoy, el ultrasonido es una herramienta médica esencial, segura y económica, usada en millones de procedimientos anuales.
          </p>
        </div>
      </div>


      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y Curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🌋 Krakatoa: El Sonido Más Fuerte de la Historia</h3>
          <p>
            La erupción del volcán Krakatoa en Indonesia (1883) produjo el sonido más fuerte jamás registrado: ~310 dB a 160 km de distancia. El sonido viajó alrededor del mundo 4 veces, detectado por barómetros globalmente. A 4800 km de distancia, el sonido aún era audible como "cañonazos distantes".
          </p>
          <p>
            La onda de presión rompió tímpanos de marineros a 64 km. Para comparación, un concierto de rock alcanza ~120 dB, y 150 dB puede causar muerte instantánea. Krakatoa superó por mucho cualquier sonido producido por humanos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦇 Murciélagos: Maestros del Ultrasonido</h3>
          <p>
            Los murciélagos emiten clicks de ultrasonido (20-200 kHz) y analizan los ecos para navegar y cazar en completa oscuridad. Su biosonar es tan preciso que pueden detectar un insecto de 2 mm a 5 metros de distancia y distinguir entre diferentes especies por la "firma acústica" del eco.
          </p>
          <p>
            Algunos murciélagos pueden detectar cables de 0.08 mm de diámetro. Las polillas han evolucionado contramedidas: algunas tienen "pelaje" que absorbe ultrasonido, otras pueden detectar los clicks y realizar maniobras evasivas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🐋 Ballenas: Comunicación a Miles de Kilómetros</h3>
          <p>
            Las ballenas azules producen sonidos de baja frecuencia (10-40 Hz) que viajan miles de kilómetros bajo el agua. Antes de la contaminación acústica moderna, se estima que podían comunicarse a través de océanos enteros, hasta 10,000 km de distancia.
          </p>
          <p>
            El canto de las ballenas jorobadas puede durar 20 minutos y alcanzar 180 dB. Cada población tiene su propio "dialecto" que evoluciona con el tiempo. Los científicos han documentado "modas" musicales que se propagan entre poblaciones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏔️ Avalanchas y Ondas Infrasónicas</h3>
          <p>
            Las avalanchas generan ondas infrasónicas (frecuencias por debajo de 20 Hz, inaudibles para humanos) que viajan grandes distancias. Los sistemas de detección de avalanchas usan sensores infrasónicos para alertar automáticamente, dando minutos preciosos de advertencia.
          </p>
          <p>
            Los elefantes también usan infrasonido para comunicarse a distancias de hasta 10 km. Pueden detectar tormentas lejanas y terremotos antes que los humanos, sintiendo las vibraciones infrasónicas con sus patas y trompa.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎸 El Sonido Viaja Más Rápido en Helio</h3>
          <p>
            En helio, el sonido viaja a ~970 m/s (casi 3 veces más rápido que en aire). Por eso la voz suena aguda al inhalar helio: las frecuencias de resonancia de las cuerdas vocales aumentan proporcionalmente a la velocidad del sonido.
          </p>
          <p>
            Contrariamente a la creencia popular, el helio no cambia la frecuencia fundamental de las cuerdas vocales, sino las frecuencias de resonancia del tracto vocal. El efecto es temporal y seguro en pequeñas cantidades, pero inhalar helio puro puede causar asfixia por falta de oxígeno.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔇 La Habitación Más Silenciosa del Mundo</h3>
          <p>
            La cámara anecoica de Microsoft en Redmond (Washington) tiene un nivel de ruido de -20.6 dB, el más bajo jamás registrado. Las paredes absorben 99.99% del sonido. En este silencio extremo, puedes escuchar tu corazón latir, pulmones respirar y sangre circular.
          </p>
          <p>
            La mayoría de las personas no pueden permanecer más de 45 minutos en la habitación. Sin referencias auditivas, el cerebro comienza a generar alucinaciones sonoras. Se usa para probar equipos electrónicos y estudiar percepción auditiva.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💥 Estampido Sónico: Rompiendo la Barrera del Sonido</h3>
          <p>
            Cuando un objeto supera la velocidad del sonido (Mach 1, ~343 m/s en aire), crea un estampido sónico: un "boom" explosivo causado por ondas de choque. Chuck Yeager fue el primero en romper la barrera del sonido en 1947 en el Bell X-1.
          </p>
          <p>
            El Concorde (avión supersónico comercial) volaba a Mach 2 (2450 km/h), creando estampidos sónicos que prohibieron vuelos supersónicos sobre tierra. El estampido puede romper ventanas y asustar animales. Los jets militares modernos alcanzan Mach 3+.
          </p>
        </div>
      </div>


      <TheorySection title="Resumen">
        <Concept>
          <p>
            Las ondas longitudinales son perturbaciones donde las partículas del medio oscilan paralelamente 
            a la dirección de propagación, creando regiones alternadas de compresión (alta densidad) y 
            rarefacción (baja densidad). El sonido es el ejemplo más común de onda longitudinal.
          </p>
          <p>
            La velocidad del sonido depende del medio: en aire varía con la temperatura (v ≈ 331 + 0.6T_C), 
            en sólidos depende del módulo de Young y la densidad (v = √(E/ρ)), y en líquidos depende del 
            módulo de compresibilidad (v = √(B/ρ)). El sonido viaja más rápido en sólidos (~5000 m/s en 
            acero) que en líquidos (~1480 m/s en agua) y gases (~343 m/s en aire a 20°C).
          </p>
          <p>
            Las ondas sísmicas P son ondas longitudinales que viajan a través de la Tierra, siendo las 
            más rápidas de todas las ondas sísmicas. Pueden atravesar sólidos y líquidos, lo que permitió 
            descubrir que el núcleo externo de la Tierra es líquido. El ultrasonido (frecuencias &gt; 20 kHz) 
            tiene numerosas aplicaciones en medicina, industria y tecnología.
          </p>
          <p>
            Las aplicaciones de las ondas longitudinales son extraordinariamente diversas: desde medicina 
            (ecografías, Doppler) hasta navegación submarina (sonar), exploración geológica (sísmica), 
            ensayos no destructivos, limpieza ultrasónica, medición de distancias y soldadura de materiales. 
            Comprender las ondas longitudinales es esencial en acústica, sismología, medicina y múltiples 
            campos de la ingeniería.
          </p>
          <p>
            El estudio de las ondas longitudinales tiene una rica historia desde Pitágoras hasta el 
            desarrollo del ultrasonido médico moderno. Hoy en día, estas ondas son herramientas 
            indispensables en ciencia, medicina, industria y exploración, desde detectar terremotos 
            hasta visualizar bebés en el útero.
          </p>
        </Concept>
      </TheorySection>
    </>
  );
};

export default Theory;
