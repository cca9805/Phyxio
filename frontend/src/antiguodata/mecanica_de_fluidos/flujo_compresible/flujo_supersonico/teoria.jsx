import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Flujo Supersónico",
  descripcion: "Características del flujo a velocidades supersónicas",
  isTheoryOnly: true,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción al Flujo Supersónico">
        <p>
          El flujo supersónico es aquel en el que la velocidad del fluido es mayor que la velocidad 
          del sonido en ese medio (M {'>'} 1). Este régimen de flujo presenta características 
          radicalmente diferentes al flujo subsónico, con fenómenos únicos como ondas de choque, 
          ondas de expansión y comportamiento contraintuitivo en conductos.
        </p>
        <p>
          El estudio del flujo supersónico es fundamental para el diseño de aviones supersónicos, 
          cohetes, misiles, túneles de viento de alta velocidad y toberas de propulsión. Los efectos 
          de compresibilidad dominan completamente el comportamiento del flujo, y las ecuaciones 
          simplificadas del flujo incompresible ya no son válidas.
        </p>
      </TheorySection>

      <TheorySection title="Características Fundamentales">
        <Concept title="Propagación de Perturbaciones">
          <p>
            La diferencia más fundamental entre flujo subsónico y supersónico es cómo se propagan 
            las perturbaciones de presión:
          </p>

          <Important>
            <p>
              En flujo subsónico (M {'<'} 1): Las ondas de presión viajan más rápido que el flujo, 
              por lo que pueden propagarse aguas arriba e informar al flujo de obstáculos adelante.
            </p>
            <p>
              En flujo supersónico (M {'>'} 1): Las ondas de presión viajan más lento que el flujo, 
              quedando confinadas a una región cónica detrás del objeto. El flujo no puede "anticipar" 
              obstáculos.
            </p>
          </Important>

          <p>
            Esta diferencia fundamental explica por qué:
          </p>
          <ul>
            <li>Los objetos supersónicos generan ondas de choque</li>
            <li>El flujo supersónico no puede ajustarse suavemente a cambios de geometría</li>
            <li>Se requieren formas aerodinámicas completamente diferentes</li>
            <li>El comportamiento en conductos es opuesto al flujo subsónico</li>
          </ul>
        </Concept>

        <Concept title="Cono de Mach">
          <p>
            Cuando un objeto se mueve a velocidad supersónica, las ondas de presión que genera 
            quedan confinadas dentro de un cono llamado cono de Mach. El ángulo del cono (ángulo 
            de Mach) está relacionado con el número de Mach:
          </p>

          <Formula
            expression={String.raw`\sin(\mu) = \frac{1}{M}`}
          />

          <p>Donde:</p>
          <ul>
            <li>μ: Ángulo de Mach (grados)</li>
            <li>M: Número de Mach</li>
          </ul>

          <Example>
            <p>
              Para M = 2, el ángulo de Mach es μ = arcsin(1/2) = 30°. Esto significa que las 
              perturbaciones quedan confinadas dentro de un cono de 30° desde la dirección del 
              movimiento. Para M = 3, μ = 19.5°, un cono más estrecho.
            </p>
          </Example>

          <p>
            Fuera del cono de Mach, el flujo no es perturbado por el objeto. Dentro del cono, 
            el flujo experimenta cambios abruptos de presión, temperatura y densidad.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Ondas de Choque">
        <Concept title="Naturaleza de las Ondas de Choque">
          <p>
            Una onda de choque es una discontinuidad abrupta en las propiedades del flujo que 
            ocurre cuando un flujo supersónico encuentra un obstáculo o cambio de geometría. 
            A través de la onda de choque:
          </p>
          <ul>
            <li>La presión aumenta bruscamente (típicamente 2-10 veces)</li>
            <li>La temperatura aumenta significativamente</li>
            <li>La densidad aumenta</li>
            <li>La velocidad disminuye (pero puede seguir siendo supersónica)</li>
            <li>El número de Mach disminuye</li>
            <li>La entropía aumenta (proceso irreversible)</li>
          </ul>

          <Important>
            <p>
              Las ondas de choque son procesos irreversibles que generan pérdidas de energía. 
              Cuanto más fuerte es el choque (mayor M₁), mayores son las pérdidas. Por esto, 
              el diseño supersónico busca minimizar la intensidad de las ondas de choque.
            </p>
          </Important>
        </Concept>

        <Concept title="Tipos de Ondas de Choque">
          <p>
            Choque Normal:
          </p>
          <ul>
            <li>Perpendicular a la dirección del flujo</li>
            <li>El flujo después del choque es siempre subsónico</li>
            <li>Genera las mayores pérdidas de presión total</li>
            <li>Ocurre en entradas de motores, toberas y conductos</li>
          </ul>

          <p>
            Choque Oblicuo:
          </p>
          <ul>
            <li>Inclinado respecto a la dirección del flujo</li>
            <li>El flujo puede permanecer supersónico después del choque</li>
            <li>Genera menores pérdidas que el choque normal</li>
            <li>Ocurre en superficies inclinadas, alas en flecha, conos</li>
          </ul>

          <p>
            Choque Curvo (Bow Shock):
          </p>
          <ul>
            <li>Forma curva delante de cuerpos romos</li>
            <li>Combinación de choque normal en el centro y oblicuo en los lados</li>
            <li>Genera alta resistencia aerodinámica</li>
            <li>Típico en narices de cohetes, proyectiles, meteoritos</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ondas de Expansión">
        <Concept title="Expansión de Prandtl-Meyer">
          <p>
            Cuando un flujo supersónico encuentra una esquina convexa (que se aleja del flujo), 
            se produce una expansión suave mediante un abanico de ondas de expansión llamado 
            expansión de Prandtl-Meyer.
          </p>

          <p>
            A través de las ondas de expansión:
          </p>
          <ul>
            <li>La presión disminuye</li>
            <li>La temperatura disminuye</li>
            <li>La densidad disminuye</li>
            <li>La velocidad aumenta</li>
            <li>El número de Mach aumenta</li>
            <li>El proceso es aproximadamente isentrópico (reversible)</li>
          </ul>

          <Important>
            <p>
              A diferencia de las ondas de choque, las ondas de expansión son procesos isentrópicos 
              que no generan pérdidas significativas. Por esto, el diseño supersónico favorece 
              expansiones sobre compresiones.
            </p>
          </Important>
        </Concept>

        <Concept title="Ángulo de Expansión">
          <p>
            El ángulo total de expansión (función de Prandtl-Meyer) depende del número de Mach 
            inicial y final. Para aire (γ = 1.4):
          </p>

          <Formula
            expression={String.raw`\nu(M) = \sqrt{\frac{\gamma+1}{\gamma-1}} \arctan\sqrt{\frac{\gamma-1}{\gamma+1}(M^2-1)} - \arctan\sqrt{M^2-1}`}
          />

          <p>
            Esta función permite calcular el cambio de dirección del flujo en una expansión 
            supersónica. Es fundamental para el diseño de toberas y perfiles supersónicos.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Comportamiento en Conductos">
        <Concept title="Inversión del Comportamiento Subsónico">
          <p>
            En flujo supersónico, el comportamiento en conductos es opuesto al flujo subsónico:
          </p>

          <p>
            Conducto Convergente (área disminuye):
          </p>
          <ul>
            <li>Flujo subsónico: Acelera, presión disminuye</li>
            <li>Flujo supersónico: Desacelera, presión aumenta</li>
          </ul>

          <p>
            Conducto Divergente (área aumenta):
          </p>
          <ul>
            <li>Flujo subsónico: Desacelera, presión aumenta</li>
            <li>Flujo supersónico: Acelera, presión disminuye</li>
          </ul>

          <Important>
            <p>
              Esta inversión de comportamiento es la razón por la que las toberas supersónicas 
              (toberas de Laval) tienen una sección divergente después de la garganta. El flujo 
              alcanza M = 1 en la garganta y continúa acelerando en la sección divergente.
            </p>
          </Important>
        </Concept>

        <Concept title="Relación Área-Velocidad">
          <p>
            La ecuación de continuidad para flujo compresible muestra la relación entre cambios 
            de área, velocidad y densidad:
          </p>

          <Formula
            expression={String.raw`\frac{dA}{A} = \frac{dV}{V}(M^2 - 1)`}
          />

          <p>
            Esta ecuación explica el comportamiento contraintuitivo:
          </p>
          <ul>
            <li>Para M {'<'} 1: dA y dV tienen signos opuestos (comportamiento normal)</li>
            <li>Para M {'>'} 1: dA y dV tienen el mismo signo (comportamiento invertido)</li>
            <li>Para M = 1: dA debe ser cero (punto de inflexión, garganta)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Resistencia Aerodinámica Supersónica">
        <Concept title="Resistencia de Onda">
          <p>
            En flujo supersónico, la resistencia aerodinámica está dominada por la resistencia 
            de onda, causada por las ondas de choque generadas por el cuerpo. Esta resistencia 
            es mucho mayor que la resistencia viscosa.
          </p>

          <p>
            Componentes de la resistencia supersónica:
          </p>
          <ul>
            <li>Resistencia de onda: 70-90% del total (ondas de choque)</li>
            <li>Resistencia viscosa: 10-20% (fricción de piel)</li>
            <li>Resistencia inducida: Menor que en subsónico</li>
          </ul>

          <p>
            La resistencia de onda aumenta dramáticamente cerca de M = 1 (barrera del sonido) 
            y luego disminuye gradualmente a números de Mach más altos.
          </p>
        </Concept>

        <Concept title="Formas Aerodinámicas Supersónicas">
          <p>
            Las formas óptimas para flujo supersónico son radicalmente diferentes a las subsónicas:
          </p>

          <p>
            Características de diseño supersónico:
          </p>
          <ul>
            <li>Narices puntiagudas o cónicas (no redondeadas)</li>
            <li>Alas delgadas con bordes de ataque afilados</li>
            <li>Alas en flecha o delta para reducir resistencia</li>
            <li>Fuselajes esbeltos con baja relación área/longitud</li>
            <li>Superficies planas o ligeramente curvadas</li>
          </ul>

          <Example>
            <p>
              El Concorde tenía alas delta con borde de ataque muy afilado y fuselaje extremadamente 
              esbelto. Su nariz era puntiaguda y se bajaba durante el despegue y aterrizaje para 
              mejorar la visibilidad del piloto. Estas características eran optimizadas para M = 2.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Regímenes de Velocidad">
        <Concept title="Clasificación por Número de Mach">
          <p>
            El flujo supersónico se subdivide en varios regímenes según el número de Mach:
          </p>

          <p>
            Supersónico bajo (1.2 {'<'} M {'<'} 3):
          </p>
          <ul>
            <li>Ondas de choque moderadamente fuertes</li>
            <li>Calentamiento aerodinámico manejable</li>
            <li>Aviones supersónicos comerciales y militares</li>
            <li>Ejemplos: Concorde (M = 2.04), F-15 (M = 2.5)</li>
          </ul>

          <p>
            Supersónico alto (3 {'<'} M {'<'} 5):
          </p>
          <ul>
            <li>Ondas de choque muy fuertes</li>
            <li>Calentamiento aerodinámico significativo</li>
            <li>Aviones de reconocimiento, misiles</li>
            <li>Ejemplos: SR-71 Blackbird (M = 3.3), misiles crucero</li>
          </ul>

          <p>
            Hipersónico (M {'>'} 5):
          </p>
          <ul>
            <li>Ondas de choque extremadamente fuertes</li>
            <li>Calentamiento aerodinámico extremo (miles de °C)</li>
            <li>Efectos químicos (disociación molecular, ionización)</li>
            <li>Vehículos de reentrada, misiles balísticos</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>

        <div className="theory-subsection">
          <h3>Aviación Supersónica Militar</h3>
          <p>
            Los aviones de combate modernos operan rutinariamente en régimen supersónico. El diseño 
            de estos aviones debe equilibrar el rendimiento supersónico con la maniobrabilidad 
            subsónica y la eficiencia de crucero.
          </p>
          <ul>
            <li>F-22 Raptor: Supercruise a M = 1.8 sin postquemador</li>
            <li>MiG-31: Interceptor diseñado para M = 2.83</li>
            <li>Eurofighter Typhoon: M = 2.0 con alas delta-canard</li>
            <li>Su-57: Diseño stealth optimizado para supersónico</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Aviación Supersónica Comercial</h3>
          <p>
            El Concorde (1976-2003) fue el único avión comercial supersónico exitoso, volando a 
            M = 2.04. Proyectos actuales buscan revivir el transporte supersónico con mejor 
            eficiencia y menor impacto ambiental.
          </p>
          <ul>
            <li>Boom Supersonic Overture: M = 1.7, entrada en servicio prevista 2029</li>
            <li>Aerion AS2: Proyecto cancelado, buscaba M = 1.4</li>
            <li>Spike S-512: Jet ejecutivo supersónico en desarrollo</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Propulsión de Cohetes</h3>
          <p>
            Los gases de escape de los cohetes alcanzan velocidades supersónicas (M = 3-4) en la 
            tobera. El diseño de la tobera debe optimizar la expansión supersónica para maximizar 
            el empuje.
          </p>
          <ul>
            <li>Motores Merlin de SpaceX: Expansión supersónica optimizada</li>
            <li>RS-25 del SLS: Tobera con relación de expansión 77:1</li>
            <li>Motores de cohetes sólidos: Toberas con geometría fija</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Misiles y Proyectiles</h3>
          <p>
            La mayoría de los misiles modernos operan en régimen supersónico o hipersónico. El 
            diseño debe minimizar la resistencia de onda mientras mantiene estabilidad y control.
          </p>
          <ul>
            <li>Misiles crucero: M = 0.8-3.0 dependiendo del tipo</li>
            <li>Misiles aire-aire: M = 3-5 para interceptación</li>
            <li>Misiles balísticos: M {'>'} 20 durante reentrada</li>
            <li>Proyectiles de artillería: M = 2-3 típicamente</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Túneles de Viento Supersónicos</h3>
          <p>
            Los túneles de viento supersónicos son esenciales para probar diseños aeronáuticos. 
            Utilizan toberas convergentes-divergentes para acelerar el aire hasta el número de 
            Mach deseado.
          </p>
          <ul>
            <li>Túneles transónicos: M = 0.8-1.2</li>
            <li>Túneles supersónicos: M = 1.5-5</li>
            <li>Túneles hipersónicos: M {'>'} 5</li>
            <li>Túneles de choque: Simulan reentrada atmosférica</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Reentrada Atmosférica</h3>
          <p>
            Los vehículos que regresan del espacio experimentan flujo hipersónico extremo durante 
            la reentrada. El calentamiento aerodinámico puede alcanzar 1650°C en la superficie.
          </p>
          <ul>
            <li>Cápsulas espaciales: Forma roma para máxima resistencia</li>
            <li>Transbordador espacial: Diseño de sustentación para control</li>
            <li>SpaceX Dragon: Escudo térmico ablativo</li>
            <li>Starship: Baldosas de cerámica reutilizables</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Fenómenos Naturales</h3>
          <p>
            El flujo supersónico ocurre naturalmente en varios fenómenos atmosféricos y espaciales.
          </p>
          <ul>
            <li>Meteoritos: Generan ondas de choque al entrar en la atmósfera</li>
            <li>Truenos: Ondas de choque generadas por rayos</li>
            <li>Erupciones volcánicas: Gases supersónicos en explosiones</li>
            <li>Vientos solares: Flujo supersónico de plasma del Sol</li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: La conquista de la velocidad supersónica
        </h2>

        <div className="theory-subsection">
          <h3>Primeros Estudios Teóricos (1887-1920)</h3>
          <p>
            Ernst Mach (1887) fue el primero en estudiar sistemáticamente el flujo supersónico, 
            fotografiando ondas de choque generadas por proyectiles. Introdujo el concepto del 
            número de Mach y el ángulo de Mach.
          </p>
          <p>
            Ludwig Prandtl (1904) y Theodore von Kármán (1930s) desarrollaron la teoría matemática 
            del flujo supersónico, incluyendo las ecuaciones para ondas de choque y expansión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Barrera del Sonido (1940s)</h3>
          <p>
            Durante la Segunda Guerra Mundial, los aviones de combate comenzaron a experimentar 
            problemas severos al acercarse a la velocidad del sonido: pérdida de control, vibraciones 
            violentas y aumento dramático de resistencia. Muchos creían que era imposible superar 
            la "barrera del sonido".
          </p>
          <p>
            El 14 de octubre de 1947, Chuck Yeager rompió la barrera del sonido en el Bell X-1, 
            alcanzando M = 1.06 a 13,000 metros de altitud. Este logro demostró que el vuelo 
            supersónico era posible con el diseño adecuado.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Era de los Aviones Supersónicos (1950s-1960s)</h3>
          <p>
            Los años 1950 y 1960 vieron una explosión de desarrollo de aviones supersónicos militares. 
            El F-100 Super Sabre (1954) fue el primer caza supersónico en servicio. El MiG-21, 
            F-4 Phantom y otros siguieron.
          </p>
          <p>
            El programa X-15 (1959-1968) alcanzó M = 6.7, estableciendo récords que aún se mantienen 
            para aviones tripulados con motor cohete.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Aviación Comercial Supersónica (1969-2003)</h3>
          <p>
            El Concorde (primer vuelo 1969, servicio 1976-2003) y el Tu-144 soviético fueron los 
            únicos aviones comerciales supersónicos. El Concorde volaba a M = 2.04, cruzando el 
            Atlántico en 3.5 horas.
          </p>
          <p>
            El programa fue técnicamente exitoso pero económicamente inviable debido al alto consumo 
            de combustible, ruido del boom sónico y costos operativos. El último vuelo del Concorde 
            fue en 2003.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>SR-71 Blackbird (1964-1998)</h3>
          <p>
            El SR-71 Blackbird fue el avión tripulado más rápido jamás construido, con velocidad 
            máxima de M = 3.3 (3540 km/h). Operó como avión de reconocimiento estratégico durante 
            la Guerra Fría.
          </p>
          <p>
            Su diseño incorporaba tecnologías revolucionarias: fuselaje de titanio, combustible 
            especial JP-7, motores híbridos turbojet-ramjet, y sistemas de enfriamiento avanzados 
            para manejar temperaturas de 427°C.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Desarrollo de Misiles Supersónicos</h3>
          <p>
            Los misiles supersónicos se desarrollaron paralelamente a los aviones. Los misiles 
            balísticos intercontinentales (ICBM) alcanzan velocidades hipersónicas (M {'>'} 20) 
            durante la reentrada.
          </p>
          <p>
            Los misiles crucero supersónicos como el BrahMos (M = 3) y los misiles hipersónicos 
            en desarrollo (M = 5-10) representan la frontera actual de la tecnología supersónica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Futuro del Vuelo Supersónico</h3>
          <p>
            Varias compañías están desarrollando nuevos aviones supersónicos comerciales con mejor 
            eficiencia y menor impacto ambiental. Boom Supersonic, Aerion y Spike Aerospace buscan 
            revivir el transporte supersónico para la década de 2030.
          </p>
          <p>
            La NASA está investigando diseños de "boom sónico silencioso" que podrían permitir 
            vuelos supersónicos sobre tierra, actualmente prohibidos en muchos países.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>El Boom Sónico del Concorde</h3>
          <p>
            El Concorde generaba un boom sónico tan potente que estaba prohibido volar supersónico 
            sobre tierra. El boom podía romper ventanas y causar daños estructurales menores. Por 
            esto, solo aceleraba a supersónico sobre el océano.
          </p>
          <p>
            El boom sónico no es un evento único sino una onda de choque continua que sigue al 
            avión. Cualquier persona en tierra bajo la trayectoria del Concorde escuchaba el boom 
            cuando la onda de choque llegaba a su posición.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El SR-71 que Goteaba Combustible</h3>
          <p>
            El SR-71 Blackbird estaba diseñado para operar a M = 3.3, donde el calentamiento 
            aerodinámico elevaba la temperatura del fuselaje a 427°C. A esta temperatura, el 
            fuselaje se expandía varios centímetros.
          </p>
          <p>
            En tierra, el avión tenía holguras entre paneles que permitían la expansión térmica. 
            Estas holguras hacían que el combustible goteara en tierra. Solo cuando el avión 
            alcanzaba velocidad supersónica y se calentaba, los paneles se expandían y sellaban 
            correctamente. Era normal ver charcos de combustible bajo un SR-71 estacionado.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Paradoja del Conducto Supersónico</h3>
          <p>
            Cuando los ingenieros comenzaron a diseñar toberas supersónicas, descubrieron algo 
            contraintuitivo: para acelerar un flujo supersónico, ¡hay que aumentar el área del 
            conducto! Esto va contra toda intuición basada en flujo subsónico.
          </p>
          <p>
            Esta paradoja llevó años en comprenderse completamente. Gustaf de Laval la descubrió 
            experimentalmente en 1888, pero la explicación teórica completa no llegó hasta los 
            trabajos de Prandtl en los 1900s.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Meteorito de Chelyabinsk</h3>
          <p>
            En 2013, un meteorito de 20 metros entró en la atmósfera sobre Rusia a velocidad 
            hipersónica (M ≈ 60). La onda de choque generada rompió ventanas en un radio de 200 km, 
            hiriendo a más de 1500 personas.
          </p>
          <p>
            El meteorito generó una onda de choque tan intensa que fue detectada por sensores 
            infrasónicos alrededor del mundo. La energía liberada fue equivalente a 500 kilotones 
            de TNT, 30 veces la bomba de Hiroshima.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Látigo que Rompe la Barrera del Sonido</h3>
          <p>
            El chasquido característico de un látigo es en realidad un pequeño boom sónico. La 
            punta del látigo acelera hasta velocidades supersónicas (M ≈ 1.4) cuando se hace 
            chasquear correctamente.
          </p>
          <p>
            Este fue uno de los primeros objetos hechos por humanos en alcanzar velocidad supersónica, 
            miles de años antes de que entendiéramos la física detrás del fenómeno. El látigo genera 
            una onda de choque en miniatura que produce el sonido característico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Avión Invisible a Sí Mismo</h3>
          <p>
            A velocidades supersónicas, un avión no puede "escuchar" sus propios motores porque 
            el sonido viaja más lento que el avión. Los pilotos del Concorde reportaban que el 
            vuelo supersónico era extremadamente silencioso dentro de la cabina.
          </p>
          <p>
            Esta característica también significa que un avión supersónico no puede detectar 
            acústicamente obstáculos adelante. Toda la información debe venir de radar o sistemas 
            visuales, ya que las ondas sonoras quedan atrás del avión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Récord Imposible del X-15</h3>
          <p>
            El X-15 alcanzó M = 6.7 en 1967, un récord que aún se mantiene para aviones tripulados 
            con motor cohete. A esta velocidad, la temperatura del fuselaje alcanzaba 650°C, 
            requiriendo una aleación especial de níquel (Inconel X).
          </p>
          <p>
            El piloto William J. Knight, quien estableció el récord, reportó que el avión brillaba 
            de color rojo cereza por el calentamiento aerodinámico. Las ventanas de cuarzo se 
            deformaban por el calor, distorsionando la visión del piloto.
          </p>
        </div>
      </div>

      <div className="theory-section-highlight">
        <h2>📝 Resumen</h2>
        <p>
          El flujo supersónico (M {'>'} 1) presenta características radicalmente diferentes al flujo 
          subsónico. Las ondas de presión no pueden propagarse aguas arriba, quedando confinadas 
          dentro de un cono de Mach. Esto impide que el flujo "anticipe" obstáculos, generando ondas 
          de choque y comportamiento discontinuo.
        </p>
        <p>
          Las ondas de choque son discontinuidades abruptas donde la presión, temperatura y densidad 
          aumentan bruscamente, mientras que la velocidad y el número de Mach disminuyen. Son procesos 
          irreversibles que generan pérdidas. Las ondas de expansión, por el contrario, son procesos 
          isentrópicos donde el flujo acelera suavemente.
        </p>
        <p>
          En conductos supersónicos, el comportamiento es opuesto al subsónico: un conducto divergente 
          acelera el flujo, mientras que uno convergente lo desacelera. Esta inversión explica por qué 
          las toberas supersónicas tienen sección divergente después de la garganta.
        </p>
        <p>
          Las aplicaciones incluyen aviación militar y comercial supersónica, propulsión de cohetes, 
          misiles, túneles de viento y reentrada atmosférica. El diseño supersónico requiere formas 
          aerodinámicas completamente diferentes: narices puntiagudas, alas delgadas y fuselajes esbeltos 
          para minimizar la resistencia de onda.
        </p>
      </div>
    </>
  );
};

export default Theory;
