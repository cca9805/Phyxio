import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Principio de Pascal",
  descripcion: "Transmisión de presión en fluidos",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción al Principio de Pascal">
        <p>
          El Principio de Pascal, formulado por el matemático y físico francés Blaise Pascal en 1653, 
          es uno de los fundamentos más importantes de la hidrostática y la base de innumerables 
          aplicaciones tecnológicas modernas. Este principio describe cómo se comporta la presión en 
          fluidos confinados y ha revolucionado la ingeniería mecánica, permitiendo la amplificación 
          de fuerzas de manera eficiente.
        </p>
        <p>
          A diferencia de los sólidos, donde las fuerzas se transmiten en direcciones específicas, 
          los fluidos transmiten presión uniformemente en todas las direcciones. Esta propiedad única 
          es la que hace posible que una pequeña fuerza aplicada en un punto pueda generar una fuerza 
          mucho mayor en otro punto del sistema, siempre que se use la geometría adecuada.
        </p>
      </TheorySection>

      <TheorySection title="Enunciado del Principio de Pascal">
        <Concept title="Formulación Clásica">
          <p>
            El Principio de Pascal establece que un cambio de presión aplicado a un fluido incompresible 
            confinado en un recipiente se transmite íntegramente y sin disminución a todos los puntos 
            del fluido y a las paredes del recipiente que lo contiene.
          </p>
          
          <Important>
            <p>
              Matemáticamente, si aplicamos una presión adicional ΔP en cualquier punto de un fluido 
              confinado, esa misma presión adicional ΔP aparece en todos los demás puntos del fluido. 
              Esto es válido para fluidos incompresibles (líquidos) en recipientes cerrados.
            </p>
          </Important>

          <p>
            Este principio tiene tres condiciones esenciales:
          </p>
          <ul>
            <li>El fluido debe ser incompresible (prácticamente todos los líquidos lo son)</li>
            <li>El fluido debe estar confinado en un recipiente cerrado</li>
            <li>La transmisión es instantánea (en la práctica, a la velocidad del sonido en el fluido)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Prensa Hidráulica">
        <Concept title="Principio de Funcionamiento">
          <p>
            La aplicación más conocida del Principio de Pascal es la prensa hidráulica, inventada por 
            Joseph Bramah en 1795. Consiste en dos cilindros de diferentes áreas conectados por un tubo 
            lleno de fluido incompresible (generalmente aceite hidráulico).
          </p>

          <Formula
            expression={String.raw`\frac{F_1}{A_1} = \frac{F_2}{A_2}`}
            calculatorId="pascal-prensa"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular F₂", expression: String.raw`F_2 = F_1 \cdot \frac{A_2}{A_1}` },
              { description: "Calcular F₁", expression: String.raw`F_1 = F_2 \cdot \frac{A_1}{A_2}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>F₁: Fuerza aplicada en el émbolo pequeño (N)</li>
            <li>A₁: Área del émbolo pequeño (m²)</li>
            <li>F₂: Fuerza generada en el émbolo grande (N)</li>
            <li>A₂: Área del émbolo grande (m²)</li>
          </ul>

          <p>
            Como la presión es la misma en ambos émbolos (P₁ = P₂), tenemos F₁/A₁ = F₂/A₂. 
            Si A₂ es mayor que A₁, entonces F₂ será mayor que F₁, logrando amplificación de fuerza.
          </p>

          <Example>
            <p>
              Si aplicamos 100 N en un émbolo de 0.01 m² (10 cm²) y el émbolo grande tiene 0.1 m² (100 cm²), 
              la fuerza generada será F₂ = 100 × (0.1/0.01) = 1,000 N. Hemos amplificado la fuerza 10 veces.
            </p>
          </Example>
        </Concept>

        <Concept title="Ventaja Mecánica">
          <p>
            La ventaja mecánica (VM) de una prensa hidráulica es la relación entre la fuerza de salida 
            y la fuerza de entrada, que es igual a la relación entre las áreas:
          </p>

          <Formula
            expression={String.raw`VM = \frac{F_2}{F_1} = \frac{A_2}{A_1}`}
            calculatorId="pascal-prensa"
            definitions={definitions}
            exercises={exercises}
          />

          <p>
            Una ventaja mecánica de 20 significa que la fuerza se amplifica 20 veces. Sin embargo, 
            por conservación de la energía, el desplazamiento del émbolo grande es inversamente 
            proporcional a la amplificación de fuerza.
          </p>

          <Important>
            <p>
              Conservación del trabajo: W₁ = W₂, por lo tanto F₁ × d₁ = F₂ × d₂. Si la fuerza se 
              amplifica 20 veces, el desplazamiento se reduce a 1/20. No se crea energía, solo se 
              transforma fuerza en desplazamiento o viceversa.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Presión en Sistemas Hidráulicos">
        <Concept title="Cálculo de Presión">
          <p>
            En un sistema hidráulico, la presión se calcula dividiendo la fuerza aplicada por el área 
            del émbolo. Esta presión se transmite uniformemente a todo el fluido:
          </p>

          <p>
            P = F₁/A₁ = F₂/A₂
          </p>

          <p>
            Los sistemas hidráulicos industriales típicamente operan a presiones entre 10 y 35 MPa 
            (100-350 bar). Sistemas especiales pueden alcanzar 70 MPa (700 bar) o más.
          </p>

          <Example>
            <p>
              Un sistema de frenos de automóvil opera a aproximadamente 10 MPa (100 bar). Si el pistón 
              maestro tiene 2 cm² de área, una fuerza de 200 N en el pedal genera esta presión. En cada 
              rueda, pistones de 10 cm² generan 1,000 N de fuerza de frenado.
            </p>
          </Example>
        </Concept>

        <Concept title="Fluidos Hidráulicos">
          <p>
            Los fluidos hidráulicos deben cumplir varios requisitos:
          </p>
          <ul>
            <li>Incompresibilidad: Mínima variación de volumen con la presión</li>
            <li>Viscosidad adecuada: Ni muy espeso ni muy fluido</li>
            <li>Estabilidad térmica: Resistencia a altas temperaturas</li>
            <li>Lubricación: Protección de componentes móviles</li>
            <li>Resistencia a la oxidación y corrosión</li>
          </ul>

          <p>
            Los aceites minerales son los más comunes, pero también se usan fluidos sintéticos, 
            emulsiones agua-aceite y fluidos biodegradables según la aplicación.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Limitaciones y Consideraciones Prácticas">
        <Concept title="Pérdidas y Eficiencia">
          <p>
            En sistemas reales, existen pérdidas que reducen la eficiencia:
          </p>
          <ul>
            <li>Fricción en sellos y válvulas: Pérdida de 5-15% de la fuerza</li>
            <li>Compresibilidad del fluido: Aunque pequeña, causa retrasos en la respuesta</li>
            <li>Fugas: Reducen la presión y requieren mantenimiento</li>
            <li>Calentamiento: La fricción genera calor que puede degradar el fluido</li>
          </ul>

          <p>
            Los sistemas hidráulicos bien diseñados alcanzan eficiencias del 85-95%. El mantenimiento 
            regular es crucial para mantener el rendimiento.
          </p>
        </Concept>

        <Concept title="Seguridad en Sistemas Hidráulicos">
          <p>
            Las altas presiones en sistemas hidráulicos presentan riesgos:
          </p>
          <ul>
            <li>Válvulas de alivio: Limitan la presión máxima del sistema</li>
            <li>Mangueras reforzadas: Resisten presiones extremas sin reventar</li>
            <li>Protección contra fugas: Un chorro de aceite a alta presión puede penetrar la piel</li>
            <li>Bloqueo de energía: Procedimientos para despresuriz ar antes del mantenimiento</li>
          </ul>

          <Important>
            <p>
              Nunca buscar fugas con las manos en sistemas presurizados. Un chorro de fluido hidráulico 
              a 20 MPa puede penetrar la piel y causar lesiones graves. Usar siempre cartón o papel para 
              detectar fugas.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Diferencia con Otros Principios">
        <Concept title="Pascal vs Arquímedes">
          <p>
            Aunque ambos son principios de la hidrostática, tienen aplicaciones diferentes:
          </p>

          <p>Principio de Pascal:</p>
          <ul>
            <li>Trata sobre transmisión de presión en fluidos confinados</li>
            <li>Aplicación: Sistemas hidráulicos, amplificación de fuerzas</li>
            <li>Requiere fluido incompresible en recipiente cerrado</li>
          </ul>

          <p>Principio de Arquímedes:</p>
          <ul>
            <li>Trata sobre flotación y empuje en fluidos</li>
            <li>Aplicación: Barcos, globos, submarinos</li>
            <li>Válido para fluidos abiertos o cerrados</li>
          </ul>
        </Concept>

        <Concept title="Pascal vs Bernoulli">
          <p>
            El Principio de Pascal se aplica a fluidos en reposo, mientras que el Principio de Bernoulli 
            describe fluidos en movimiento. En sistemas hidráulicos, cuando el fluido se mueve lentamente, 
            Pascal es una buena aproximación. A altas velocidades, deben considerarse efectos dinámicos 
            descritos por Bernoulli.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Cálculos Avanzados">
        <Concept title="Sistemas con Múltiples Émbolos">
          <p>
            En sistemas complejos con varios émbolos, la presión es la misma en todos los puntos 
            (despreciando diferencias de altura). Cada émbolo genera una fuerza proporcional a su área:
          </p>

          <p>
            P = F₁/A₁ = F₂/A₂ = F₃/A₃ = ... = constante
          </p>

          <p>
            Esto permite distribuir fuerza a múltiples puntos, como en los frenos de un automóvil 
            donde un pistón maestro acciona cuatro pistones (uno por rueda).
          </p>
        </Concept>

        <Concept title="Efecto de la Altura">
          <p>
            En sistemas muy altos, la presión hidrostática (ρgh) puede ser significativa. La presión 
            total en un punto es:
          </p>

          <p>
            P_total = P_aplicada + ρgh
          </p>

          <p>
            Para aceite hidráulico (ρ ≈ 900 kg/m³), cada metro de altura añade aproximadamente 8.8 kPa 
            (0.088 bar). En sistemas de pocos metros, esto es despreciable comparado con las presiones 
            de operación (10-35 MPa).
          </p>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>Frenos Hidráulicos de Automóviles</h3>
          <p>
            Los frenos hidráulicos son la aplicación más común del Principio de Pascal. Cuando el conductor 
            pisa el pedal, un pistón maestro de aproximadamente 2 cm² genera presión en el líquido de frenos 
            (típicamente 10 MPa o 100 bar). Esta presión se transmite instantáneamente a los cuatro pistones 
            de freno en las ruedas, cada uno con área de 10-15 cm². Una fuerza de 200 N en el pedal genera 
            1,000-1,500 N en cada rueda, totalizando 4,000-6,000 N de fuerza de frenado. Los sistemas ABS 
            (Anti-lock Braking System) modulan esta presión hasta 20 veces por segundo para evitar el bloqueo 
            de las ruedas. Los frenos de disco modernos operan a presiones aún mayores para vehículos pesados.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Prensas Hidráulicas Industriales</h3>
          <p>
            Las prensas hidráulicas se usan para formar metales, comprimir materiales, estampar piezas y 
            ensayar materiales. La prensa hidráulica más grande del mundo, en China, genera 80,000 toneladas 
            de fuerza (800 millones de newtons) para forjar componentes de turbinas y reactores nucleares. 
            Estas máquinas operan a presiones de 30-40 MPa (300-400 bar). Una prensa típica de taller puede 
            generar 20-100 toneladas con un pistón accionado manualmente. Las prensas hidráulicas son 
            preferidas sobre las mecánicas porque proporcionan fuerza constante durante toda la carrera y 
            son más compactas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Gatos Hidráulicos</h3>
          <p>
            Los gatos hidráulicos permiten levantar vehículos y cargas pesadas con mínimo esfuerzo. Un gato 
            de botella típico puede levantar 2-20 toneladas con una fuerza manual de 20-50 N en la palanca. 
            La ventaja mecánica combinada de la palanca y el sistema hidráulico puede ser de 400:1 o más. 
            Los gatos de piso usados en talleres tienen ruedas y pueden levantar 2-3 toneladas a 50 cm de 
            altura. Los gatos hidráulicos son esenciales en construcción, minería y rescate. Durante el 
            rescate de los 33 mineros chilenos en 2010, gatos hidráulicos gigantes levantaron la cápsula 
            de rescate 700 metros.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Excavadoras y Maquinaria Pesada</h3>
          <p>
            Las excavadoras, retroexcavadoras, grúas y cargadores usan cilindros hidráulicos para generar 
            fuerzas enormes. Una excavadora grande puede generar 30-40 toneladas de fuerza de excavación. 
            Los cilindros hidráulicos operan a 25-35 MPa (250-350 bar). El brazo de una excavadora tiene 
            múltiples cilindros que trabajan coordinadamente, todos accionados por la misma bomba hidráulica. 
            Los sistemas hidráulicos permiten control preciso: el operador puede mover cargas de 20 toneladas 
            con precisión de centímetros. La maquinaria pesada moderna usa electrohidráulica, combinando 
            válvulas electrónicas con cilindros hidráulicos para control computarizado.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Sistemas de Dirección Asistida</h3>
          <p>
            La dirección hidráulica asistida usa el Principio de Pascal para reducir el esfuerzo necesario 
            para girar el volante. Una bomba hidráulica accionada por el motor genera presión (típicamente 
            10-15 MPa). Cuando el conductor gira el volante, una válvula direcciona el fluido a un cilindro 
            que asiste el movimiento. Esto reduce la fuerza necesaria en el volante de 50-100 N a solo 5-10 N. 
            Los sistemas modernos usan dirección electrohidráulica o completamente eléctrica, pero millones 
            de vehículos aún usan dirección hidráulica tradicional. Los camiones y autobuses requieren 
            asistencia hidráulica debido al peso sobre las ruedas delanteras.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Elevadores y Montacargas</h3>
          <p>
            Los elevadores hidráulicos usan un cilindro vertical que empuja la cabina hacia arriba. Son 
            comunes en edificios de hasta 6-8 pisos (20-25 metros). Un elevador para 8 personas (600 kg) 
            requiere aproximadamente 6,000 N de fuerza. Con un cilindro de 0.03 m² (30 cm de diámetro), 
            la presión necesaria es 200 kPa (2 bar), fácilmente generada por una bomba pequeña. Los 
            elevadores hidráulicos son más simples y económicos que los de cable para edificios bajos. 
            Los montacargas en talleres y almacenes también usan sistemas hidráulicos, levantando vehículos 
            completos para mantenimiento. Las plataformas de tijera hidráulicas son comunes en construcción 
            y mantenimiento.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Sistemas de Control de Vuelo</h3>
          <p>
            Los aviones grandes usan sistemas hidráulicos para mover las superficies de control (alerones, 
            timones, flaps). A altas velocidades, las fuerzas aerodinámicas son tan grandes que sería 
            imposible moverlas manualmente. Los sistemas hidráulicos de aviación operan a presiones muy 
            altas: 21 MPa (3000 psi) en aviones comerciales, hasta 28 MPa (4000 psi) en aviones militares. 
            Los Boeing 747 tienen cuatro sistemas hidráulicos independientes para redundancia. Cada sistema 
            puede generar más de 100 kW de potencia hidráulica. Los actuadores hidráulicos mueven superficies 
            de control de varios metros cuadrados contra fuerzas de decenas de toneladas. La pérdida total 
            de sistemas hidráulicos es extremadamente rara pero catastrófica, como en el vuelo United 232 
            en 1989.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De Pascal a la Hidráulica Moderna
        </h2>
        
        <div className="theory-subsection">
          <h3>Blaise Pascal y el Descubrimiento (1653)</h3>
          <p>
            Blaise Pascal (1623-1662), matemático, físico y filósofo francés, formuló su principio en 1653 
            a los 30 años. Pascal realizó experimentos con barriles llenos de agua, demostrando que la 
            presión aplicada en un punto se transmitía a todos los demás puntos. Su experimento más famoso 
            involucró un barril de vino con un tubo delgado de 10 metros insertado en la tapa. Al llenar 
            el tubo con agua, la presión generada por la columna de agua (aunque el volumen era pequeño) 
            fue suficiente para romper el barril. Este experimento dramático demostró que la presión depende 
            de la altura, no del volumen. Pascal publicó sus hallazgos en "Traité de l'équilibre des liqueurs" 
            (Tratado sobre el equilibrio de los líquidos) en 1663, póstumamente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Joseph Bramah y la Primera Prensa Hidráulica (1795)</h3>
          <p>
            Joseph Bramah (1748-1814), ingeniero británico, inventó la prensa hidráulica en 1795, aplicando 
            el Principio de Pascal a la ingeniería práctica. Su diseño usaba agua como fluido y sellos de 
            cuero para evitar fugas. La prensa de Bramah podía generar fuerzas de varias toneladas con 
            esfuerzo manual mínimo. Bramah también inventó la cerradura de seguridad y el inodoro moderno, 
            pero su prensa hidráulica fue su contribución más significativa. Las prensas de Bramah se usaron 
            para arrancar árboles, comprimir algodón, estampar metales y construir puentes. Una de sus 
            prensas, construida en 1796, aún existe en el Museo de Ciencias de Londres.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Desarrollo de Sellos y Fluidos (Siglo XIX)</h3>
          <p>
            El mayor desafío de los sistemas hidráulicos tempranos era las fugas. Los sellos de cuero se 
            desgastaban rápidamente y no resistían altas presiones. En la década de 1850, se desarrollaron 
            sellos de goma vulcanizada que mejoraron significativamente la confiabilidad. El uso de aceite 
            mineral en lugar de agua comenzó en la década de 1870. El aceite tenía ventajas: mejor lubricación, 
            no se congelaba, no causaba corrosión y tenía menor compresibilidad. Sin embargo, el aceite era 
            inflamable, un problema en minas y fábricas. Los fluidos hidráulicos sintéticos resistentes al 
            fuego se desarrollaron en el siglo XX.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Frenos Hidráulicos en Automóviles (1918)</h3>
          <p>
            Malcolm Loughead (más tarde Lockheed) inventó el freno hidráulico para automóviles en 1918. 
            Antes, los autos usaban frenos mecánicos con cables y palancas, que requerían gran fuerza y 
            ajuste frecuente. Los frenos hidráulicos de Loughead usaban el Principio de Pascal para 
            transmitir fuerza del pedal a las cuatro ruedas simultáneamente. Chrysler fue el primer 
            fabricante en adoptar frenos hidráulicos en 1924. Para 1940, todos los autos nuevos tenían 
            frenos hidráulicos. El desarrollo de frenos de disco en los 1950s y sistemas ABS en los 1970s 
            fueron mejoras sobre el concepto básico de Loughead. Los frenos hidráulicos han salvado millones 
            de vidas al hacer los vehículos más seguros y controlables.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Maquinaria Pesada y Construcción (Siglo XX)</h3>
          <p>
            El desarrollo de excavadoras, bulldozers y grúas hidráulicas revolucionó la construcción en el 
            siglo XX. La primera excavadora hidráulica comercial fue construida por Poclain en Francia en 
            1951. Antes, las excavadoras usaban cables y poleas, limitando su alcance y precisión. Los 
            cilindros hidráulicos permitieron movimientos más suaves y controlados. Caterpillar, Komatsu y 
            otros fabricantes desarrollaron maquinaria cada vez más grande y potente. La construcción de 
            presas, carreteras, túneles y rascacielos modernos sería imposible sin maquinaria hidráulica. 
            El Canal de Panamá, ampliado en 2016, usó excavadoras hidráulicas gigantes que movieron 150 
            millones de metros cúbicos de tierra.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Hidráulica en Aviación (1930s-presente)</h3>
          <p>
            Los primeros aviones usaban cables para controlar las superficies de vuelo. A medida que los 
            aviones crecieron y volaron más rápido, las fuerzas aerodinámicas se volvieron demasiado grandes 
            para control manual. Los sistemas hidráulicos de control de vuelo se introdujeron en los 1930s. 
            El Boeing B-17 Flying Fortress (1935) fue uno de los primeros bombarderos con controles 
            hidráulicos. Los aviones a reacción modernos son completamente dependientes de sistemas 
            hidráulicos. El Airbus A380, el avión de pasajeros más grande, tiene sistemas hidráulicos que 
            operan a 35 MPa (5000 psi) y pueden generar más de 200 kW de potencia. Los sistemas fly-by-wire 
            modernos usan computadoras para controlar actuadores hidráulicos, permitiendo maniobras imposibles 
            con control manual.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Innovaciones Modernas (Siglo XXI)</h3>
          <p>
            La hidráulica moderna incorpora electrónica, sensores y control computarizado. Los sistemas 
            electrohidráulicos usan válvulas proporcionales controladas electrónicamente para precisión 
            extrema. Los fluidos hidráulicos biodegradables reducen el impacto ambiental. Los sistemas 
            hidráulicos regenerativos capturan energía durante el frenado, mejorando la eficiencia. Las 
            excavadoras híbridas combinan motores eléctricos con sistemas hidráulicos, reduciendo el consumo 
            de combustible hasta 30%. La investigación actual se enfoca en fluidos inteligentes que cambian 
            viscosidad con campos eléctricos o magnéticos, y en sistemas hidráulicos miniaturizados para 
            robótica y dispositivos médicos.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>El Experimento del Barril de Pascal</h3>
          <p>
            En 1646, Blaise Pascal realizó un experimento que asombró a sus contemporáneos. Insertó un tubo 
            delgado de 10 metros de altura en la tapa de un barril de vino lleno. Cuando llenó el tubo con 
            agua (solo unos pocos litros), la presión generada por la columna de agua fue suficiente para 
            romper el barril, que contenía cientos de litros. Los espectadores esperaban que el pequeño 
            volumen de agua en el tubo no pudiera afectar el barril grande, pero Pascal demostró que la 
            presión depende de la altura, no del volumen. Este experimento dramático convenció a muchos 
            escépticos del principio que ahora lleva su nombre. El barril explotó con tal fuerza que empapó 
            a los espectadores con vino.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Prensa que Levantó el London Bridge</h3>
          <p>
            En 1851, durante la construcción del nuevo London Bridge, los ingenieros necesitaban levantar 
            enormes bloques de piedra de 50 toneladas. Usaron prensas hidráulicas diseñadas por William 
            Armstrong, basadas en el Principio de Pascal. Estas prensas podían levantar las piedras con 
            precisión milimétrica usando solo la fuerza de dos hombres operando bombas manuales. Los 
            espectadores quedaron asombrados al ver cómo cargas que requerirían cientos de hombres con 
            poleas podían moverse suavemente con mínimo esfuerzo. Armstrong se hizo famoso y su compañía, 
            Armstrong Whitworth, se convirtió en uno de los mayores fabricantes de maquinaria hidráulica 
            del mundo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Rescate de los Mineros Chilenos (2010)</h3>
          <p>
            En 2010, 33 mineros quedaron atrapados a 700 metros bajo tierra en la mina San José en Chile. 
            El rescate requirió perforar un túnel de 66 cm de diámetro y extraer a los mineros en una 
            cápsula. Gatos hidráulicos gigantes, operando según el Principio de Pascal, levantaron la 
            cápsula de rescate (llamada Fénix) los 700 metros hasta la superficie. Cada viaje tomaba 15 
            minutos. Los sistemas hidráulicos fueron elegidos por su confiabilidad y capacidad de generar 
            fuerza constante. Los 33 mineros fueron rescatados exitosamente en 22 horas. Este rescate 
            demostró la importancia de la tecnología hidráulica en situaciones de vida o muerte. El evento 
            fue transmitido en vivo a mil millones de personas en todo el mundo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Fuerza de un Dedo</h3>
          <p>
            En demostraciones educativas, se usa una prensa hidráulica donde un niño presionando con un 
            dedo un émbolo pequeño puede levantar un automóvil en el émbolo grande. Con una ventaja mecánica 
            de 1000:1, una fuerza de 20 N (presión de un dedo) genera 20,000 N (2 toneladas) en el otro 
            lado. Estas demostraciones ilustran dramáticamente el poder del Principio de Pascal. Sin embargo, 
            el niño debe mover su émbolo 1000 veces más distancia que el movimiento del auto, demostrando 
            la conservación de la energía. Estas prensas son populares en museos de ciencia y ferias 
            educativas para enseñar física de manera memorable.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Récord de Presión Hidráulica</h3>
          <p>
            La prensa hidráulica más potente del mundo está en China y puede generar 80,000 toneladas de 
            fuerza (800 millones de newtons). Esta máquina monstruosa se usa para forjar componentes gigantes 
            de una sola pieza para turbinas, reactores nucleares y barcos. El pistón principal tiene varios 
            metros de diámetro y opera a presiones de 40 MPa (400 bar). La prensa pesa más de 20,000 toneladas 
            y requiere cimientos especiales de 30 metros de profundidad. Puede forjar piezas de 400 toneladas, 
            comprimiéndolas como si fueran plastilina. La construcción de esta prensa tomó 5 años y costó 
            cientos de millones de dólares. Representa el límite actual de la tecnología hidráulica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Frenos que Salvaron Vidas</h3>
          <p>
            Antes de los frenos hidráulicos, los accidentes automovilísticos eran mucho más comunes y 
            mortales. Los frenos mecánicos con cables requerían gran fuerza, se desajustaban frecuentemente 
            y a menudo fallaban en una o más ruedas. En 1924, cuando Chrysler introdujo frenos hidráulicos 
            en todos sus modelos, la tasa de accidentes de sus vehículos cayó dramáticamente. Los conductores 
            reportaban que podían detener el auto con un dedo en el pedal. Los frenos hidráulicos se 
            convirtieron en estándar en la década de 1940. Se estima que los frenos hidráulicos han salvado 
            millones de vidas en los últimos 100 años. El desarrollo posterior de frenos de disco y ABS 
            mejoró aún más la seguridad, pero todos se basan en el Principio de Pascal.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Misterio del Vuelo 232</h3>
          <p>
            En 1989, el vuelo United 232 (un DC-10) sufrió una falla catastrófica del motor central que 
            destruyó los tres sistemas hidráulicos independientes del avión. Sin hidráulica, los pilotos 
            no podían controlar las superficies de vuelo. El capitán Al Haynes y su tripulación lograron 
            controlar parcialmente el avión usando solo los motores de las alas, variando su potencia para 
            girar. Después de 44 minutos de vuelo sin control, lograron un aterrizaje de emergencia en Sioux 
            City, Iowa. De 296 personas a bordo, 185 sobrevivieron, un milagro considerando que el avión 
            era técnicamente incontrolable. Este accidente llevó a mejoras en el diseño de sistemas 
            hidráulicos de aviación para evitar fallas simultáneas. Demostró tanto la importancia crítica 
            de los sistemas hidráulicos como la habilidad extraordinaria de los pilotos.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            El Principio de Pascal establece que la presión aplicada a un fluido confinado se transmite 
            íntegramente a todos los puntos del fluido.
          </li>
          <li>
            En una prensa hidráulica: F₁/A₁ = F₂/A₂, permitiendo amplificar fuerzas.
          </li>
          <li>
            La ventaja mecánica es VM = F₂/F₁ = A₂/A₁, la relación entre las áreas.
          </li>
          <li>
            Por conservación de energía: F₁ × d₁ = F₂ × d₂. Si la fuerza se amplifica, el desplazamiento 
            se reduce proporcionalmente.
          </li>
          <li>
            Los fluidos hidráulicos deben ser incompresibles, tener viscosidad adecuada y resistir altas 
            temperaturas.
          </li>
          <li>
            Los sistemas hidráulicos típicos operan a 10-35 MPa (100-350 bar).
          </li>
          <li>
            Aplicaciones principales: frenos de vehículos, prensas industriales, gatos hidráulicos, 
            maquinaria pesada, elevadores y sistemas de control de vuelo.
          </li>
          <li>
            Las pérdidas por fricción y fugas reducen la eficiencia real a 85-95%.
          </li>
          <li>
            La seguridad es crítica: las altas presiones pueden causar lesiones graves.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Theory;
