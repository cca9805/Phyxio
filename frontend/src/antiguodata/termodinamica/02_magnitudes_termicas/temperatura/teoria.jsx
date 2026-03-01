import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as temperaturaDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Temperatura",
  descripcion: "Medida de la energía cinética molecular y escalas de temperatura",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO'],
  isTheoryOnly: true
};

const TemperaturaTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Temperatura?">
        <Concept title="Definición">
          <p>
            La temperatura es una magnitud física que mide el grado de agitación térmica de las partículas que componen un cuerpo. A nivel microscópico, está relacionada con la energía cinética promedio de las moléculas.
          </p>
          
          <p>
            A diferencia del calor (que es energía en tránsito), la temperatura es una propiedad intensiva que indica qué tan "caliente" o "frío" está un sistema. Dos cuerpos en equilibrio térmico tienen la misma temperatura.
          </p>

          <Important>
            <p>Escalas de Temperatura:</p>
            <ul>
              <li>Kelvin (K): Escala absoluta del SI, 0 K = cero absoluto</li>
              <li>Celsius (°C): Escala centígrada, 0°C = punto de congelación del agua</li>
              <li>Fahrenheit (°F): Escala anglosajona, 32°F = punto de congelación del agua</li>
            </ul>
          </Important>
        </Concept>

        <Concept title="Características de la Temperatura">
          <ul>
            <li>Magnitud intensiva: No depende de la cantidad de materia</li>
            <li>Equilibrio térmico: Determina la dirección del flujo de calor</li>
            <li>Energía cinética: Proporcional a la agitación molecular</li>
            <li>Cero absoluto: Temperatura mínima posible (0 K = -273.15°C)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Conversión entre Celsius y Kelvin">
        <Concept title="Escala Kelvin">
          <p>
            La escala Kelvin es la escala absoluta de temperatura. El cero absoluto (0 K) representa la temperatura más baja posible, donde las partículas tienen la mínima energía cinética.
          </p>

          <Formula 
            expression={String.raw`T(K) = T(°C) + 273.15`}
            description="Conversión de Celsius a Kelvin"
            calculatorId="temperatura-celsius-kelvin"
            definitions={temperaturaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Conversión de Kelvin a Celsius", expression: String.raw`T(°C) = T(K) - 273.15` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>T(K): Temperatura en Kelvin</li>
            <li>T(°C): Temperatura en grados Celsius</li>
          </ul>
        </Concept>

        <Concept title="Puntos de Referencia">
          <ul>
            <li>Cero absoluto: 0 K = -273.15°C</li>
            <li>Punto de congelación del agua: 273.15 K = 0°C</li>
            <li>Punto de ebullición del agua: 373.15 K = 100°C</li>
            <li>Temperatura ambiente: ~298 K = ~25°C</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Conversión entre Celsius y Fahrenheit">
        <Concept title="Escala Fahrenheit">
          <p>
            La escala Fahrenheit es utilizada principalmente en Estados Unidos. Tiene 180 divisiones entre el punto de congelación (32°F) y ebullición (212°F) del agua.
          </p>

          <Formula 
            expression={String.raw`T(°F) = \frac{9}{5} \cdot T(°C) + 32`}
            description="Conversión de Celsius a Fahrenheit"
            calculatorId="temperatura-celsius-fahrenheit"
            definitions={temperaturaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Conversión de Fahrenheit a Celsius", expression: String.raw`T(°C) = \frac{5}{9} \cdot [T(°F) - 32]` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>T(°F): Temperatura en grados Fahrenheit</li>
            <li>T(°C): Temperatura en grados Celsius</li>
          </ul>
        </Concept>

        <Concept title="Comparación de Escalas">
          <table style={{width: '100%', borderCollapse: 'collapse', margin: '1em 0'}}>
            <thead>
              <tr style={{borderBottom: '2px solid #ddd'}}>
                <th style={{padding: '0.5em', textAlign: 'left'}}>Punto</th>
                <th style={{padding: '0.5em', textAlign: 'center'}}>Celsius</th>
                <th style={{padding: '0.5em', textAlign: 'center'}}>Fahrenheit</th>
                <th style={{padding: '0.5em', textAlign: 'center'}}>Kelvin</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{padding: '0.5em'}}>Cero absoluto</td><td style={{padding: '0.5em', textAlign: 'center'}}>-273.15°C</td><td style={{padding: '0.5em', textAlign: 'center'}}>-459.67°F</td><td style={{padding: '0.5em', textAlign: 'center'}}>0 K</td></tr>
              <tr><td style={{padding: '0.5em'}}>Congelación agua</td><td style={{padding: '0.5em', textAlign: 'center'}}>0°C</td><td style={{padding: '0.5em', textAlign: 'center'}}>32°F</td><td style={{padding: '0.5em', textAlign: 'center'}}>273.15 K</td></tr>
              <tr><td style={{padding: '0.5em'}}>Temperatura corporal</td><td style={{padding: '0.5em', textAlign: 'center'}}>37°C</td><td style={{padding: '0.5em', textAlign: 'center'}}>98.6°F</td><td style={{padding: '0.5em', textAlign: 'center'}}>310.15 K</td></tr>
              <tr><td style={{padding: '0.5em'}}>Ebullición agua</td><td style={{padding: '0.5em', textAlign: 'center'}}>100°C</td><td style={{padding: '0.5em', textAlign: 'center'}}>212°F</td><td style={{padding: '0.5em', textAlign: 'center'}}>373.15 K</td></tr>
            </tbody>
          </table>
        </Concept>
      </TheorySection>

      <TheorySection title="Relación con Energía Cinética">
        <Concept title="Teoría Cinética de Gases">
          <p>
            Para un gas ideal, la energía cinética promedio de traslación de una molécula está directamente relacionada con la temperatura absoluta:
          </p>

          <Formula 
            expression={String.raw`E_c = \frac{3}{2} k_B T`}
            description="Energía cinética promedio de una molécula"
            calculatorId="temperatura-energia-cinetica"
            definitions={temperaturaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Temperatura desde Energía Cinética", expression: String.raw`T = \frac{2 E_c}{3 k_B}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>E<sub>c</sub>: Energía cinética promedio (J)</li>
            <li>k<sub>B</sub>: Constante de Boltzmann = 1.381 × 10⁻²³ J/K</li>
            <li>T: Temperatura absoluta (K)</li>
          </ul>
        </Concept>

        <Concept title="Implicaciones">
          <ul>
            <li>Proporcionalidad directa: A mayor temperatura, mayor energía cinética</li>
            <li>Cero absoluto: En 0 K, la energía cinética es mínima (no nula por principio de incertidumbre)</li>
            <li>Velocidad molecular: Las moléculas se mueven más rápido a mayor temperatura</li>
            <li>Distribución de Maxwell-Boltzmann: Describe la distribución de velocidades</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos Prácticos">
        <Example 
          title="Ejemplo 1: Temperatura Ambiente"
          problem="La temperatura ambiente es de 25°C. Expresa esta temperatura en Kelvin y Fahrenheit."
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>T(°C) = 25°C</li>
              </ul>
              
              <p>Conversión a Kelvin:</p>
              <p>T(K) = T(°C) + 273.15</p>
              <p>T(K) = 25 + 273.15 = 298.15 K</p>
              
              <p>Conversión a Fahrenheit:</p>
              <p>T(°F) = (9/5) × T(°C) + 32</p>
              <p>T(°F) = (9/5) × 25 + 32 = 45 + 32 = 77°F</p>
              
              <p>Resultado: 298.15 K y 77°F</p>
            </div>
          }
        />

        <Example 
          title="Ejemplo 2: Nitrógeno Líquido"
          problem="El nitrógeno líquido hierve a 77 K. ¿Cuál es esta temperatura en °C y °F?"
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>T(K) = 77 K</li>
              </ul>
              
              <p>Conversión a Celsius:</p>
              <p>T(°C) = T(K) - 273.15</p>
              <p>T(°C) = 77 - 273.15 = -196.15°C</p>
              
              <p>Conversión a Fahrenheit:</p>
              <p>T(°F) = (9/5) × (-196.15) + 32</p>
              <p>T(°F) = -353.07 + 32 = -321.07°F</p>
              
              <p>Resultado: -196.15°C y -321.07°F</p>
              <p>Nota: Esta temperatura extremadamente baja se usa en criogenia.</p>
            </div>
          }
        />

        <Example 
          title="Ejemplo 3: Energía Cinética Molecular"
          problem="Calcula la energía cinética promedio de una molécula de gas a temperatura ambiente (300 K)."
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>T = 300 K</li>
                <li>k<sub>B</sub> = 1.381 × 10⁻²³ J/K</li>
              </ul>
              
              <p>Solución:</p>
              <p>E<sub>c</sub> = (3/2) × k<sub>B</sub> × T</p>
              <p>E<sub>c</sub> = (3/2) × 1.381×10⁻²³ × 300</p>
              <p>E<sub>c</sub> = 2.0715×10⁻²³ × 300</p>
              <p>E<sub>c</sub> = 6.21 × 10⁻²¹ J</p>
              
              <p>Interpretación: Aunque parece una energía muy pequeña, cuando se multiplica por el número de Avogadro (6.022×10²³), obtenemos la energía de un mol de gas.</p>
            </div>
          }
        />
      </TheorySection>

      <TheorySection title="Aplicaciones en Termodinámica">
        <Concept title="Importancia de la Temperatura">
          <ul>
            <li>Ecuación de estado: PV = nRT relaciona presión, volumen y temperatura</li>
            <li>Procesos isotérmicos: Procesos a temperatura constante</li>
            <li>Eficiencia de Carnot: η = 1 - T<sub>fría</sub>/T<sub>caliente</sub></li>
            <li>Equilibrio térmico: Determina la dirección del flujo de calor</li>
            <li>Cambios de fase: Ocurren a temperaturas específicas</li>
          </ul>
        </Concept>

        <Concept title="Medición de Temperatura">
          <p>Instrumentos:</p>
          <ul>
            <li>Termómetro de mercurio: Basado en expansión térmica</li>
            <li>Termopar: Genera voltaje proporcional a la temperatura</li>
            <li>Termistor: Resistencia eléctrica varía con temperatura</li>
            <li>Pirómetro: Mide temperatura por radiación infrarroja</li>
            <li>Termómetro digital: Sensor electrónico de alta precisión</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <div className="theory-subsection">
          <h3>Termómetro clínico digital cuerpo humano 37°C fiebre diagnóstico</h3>
          <p>El termómetro digital clínico constituye un instrumento fundamental en medicina doméstica y profesional para el monitoreo de la temperatura corporal. Estos dispositivos incorporan un sensor termistor NTC (coeficiente de temperatura negativo) cuya resistencia eléctrica disminuye de forma predecible con el aumento de temperatura, permitiendo mediciones con precisión de ±0.1°C en el rango clínico de 32-43°C. El tiempo de lectura típico es de 60 segundos, con pantalla LCD de dígitos grandes para fácil visualización, memoria de la última medición y señal acústica que indica la finalización del proceso de medida.</p>

          <p>La temperatura corporal normal en adultos oscila entre 36.5-37.5°C, dependiendo de la hora del día (más baja por la mañana, más alta por la tarde), el nivel de actividad física y la zona de medición. Se define fiebre como una temperatura superior a 38°C, indicando generalmente una respuesta inmunológica a infecciones bacterianas o virales. Por el contrario, la hipotermia (inferior a 35°C) representa una emergencia médica que requiere atención inmediata.</p>

          <p>Las vías de medición incluyen oral (bajo la lengua), axilar (debajo del brazo, más cómoda pero menos precisa), rectal (más precisa especialmente en pediatría) y timpánica (oído, mediante termómetros infrarrojos). El control de temperatura es esencial para el diagnóstico de infecciones, seguimiento de enfermedades y evaluación de la efectividad de tratamientos con antibióticos y antipiréticos como paracetamol o ibuprofeno, que ayudan a reducir la fiebre y aliviar el malestar asociado.</p>
        </div>
        <div className="theory-subsection">
          <h3>Horno eléctrico cocina 180-250°C control temperatura cocción alimentos</h3>
          <p>El horno eléctrico doméstico es un electrodoméstico esencial que opera típicamente con una potencia de 2-3 kW, utilizando resistencias eléctricas que convierten la energía eléctrica en calor mediante efecto Joule. El calentamiento del aire interior puede producirse por convección natural (movimiento del aire por diferencias de densidad) o forzada mediante un ventilador que garantiza una circulación homogénea y una distribución uniforme de temperatura en todo el volumen del horno.</p>

          <p>El sistema de control de temperatura utiliza un termostato, que puede ser bimetálico (dos metales con diferentes coeficientes de dilatación) o electrónico (sensor y microcontrolador), para regular el encendido y apagado de las resistencias manteniendo la temperatura de consigna con una estabilidad típica de ±5-10°C. Las temperaturas habituales de cocción incluyen 180°C para galletas y pasteles delicados, 200-220°C para pan y pizza que requieren corteza crujiente, y hasta 250°C para gratinados y asados que necesitan dorado superficial intenso.</p>

          <p>El tiempo de cocción depende del tipo de alimento, volumen, masa y contenido de humedad. A nivel químico, las temperaturas del horno provocan la reacción de Maillard (entre aminoácidos y azúcares reductores a partir de 140°C) y la caramelización de azúcares (160-180°C), procesos responsables del desarrollo de la corteza dorada, los sabores característicos tostados y las texturas crujientes deseables. Esta aplicación es fundamental en gastronomía, panadería, repostería y la industria alimentaria, contribuyendo a la nutrición y el placer culinario.</p>
        </div>
        <div className="theory-subsection">
          <h3>Aire acondicionado split inverter 24°C confort térmico climatización</h3>
          <p>Los sistemas de climatización tipo split con tecnología inverter representan la solución más eficiente para el control de temperatura en espacios habitables. Estos equipos incorporan un compresor de velocidad variable que puede modular su potencia térmica entre 1-5 kW según la demanda instantánea, funcionando como bomba de calor reversible: refrigeración en verano y calefacción en invierno. El refrigerante más común actualmente es el R32, elegido por su bajo GWP (potencial de calentamiento global) de 675 comparado con el R410A (2088), contribuyendo a la sostenibilidad ambiental.</p>

          <p>Las temperaturas de consigna recomendadas son 24-26°C en modo refrigeración (verano) y 20-22°C en calefacción (invierno), valores que optimizan el equilibrio entre confort térmico y eficiencia energética. El termostato ambiental, equipado con un sensor de temperatura preciso, controla continuamente el funcionamiento de la unidad, modulando el caudal de refrigerante y la velocidad del ventilador para mantener la temperatura deseada con mínimo consumo eléctrico. Los sistemas inverter destacan por sus altos índices de eficiencia: SEER (coeficiente estacional de refrigeración) de 6-8 y SCOP (coeficiente estacional de calefacción) de 4-5, alcanzando clasificaciones energéticas A+++ que pueden suponer ahorros del 40% respecto a equipos convencionales.</p>

          <p>Más allá del control de temperatura, estos sistemas contribuyen significativamente a la calidad del aire interior manteniendo la humedad relativa en el rango confortable de 40-60% e incorporando filtros de purificación y tecnologías de ionización que reducen partículas, alérgenos y microorganismos. El confort térmico resultante tiene impactos directos en la salud, el bienestar general, la productividad laboral, la capacidad de concentración en estudios y la calidad del sueño nocturno, aspectos cada vez más valorados en el diseño de espacios habitables eficientes.</p>
        </div>
        <div className="theory-subsection">
          <h3>Criogenia nitrógeno líquido -196°C conservación células tejidos órganos</h3>
          <p>El nitrógeno líquido (LN₂) es el fluido criogénico por excelencia en aplicaciones biomédicas, con una temperatura de ebullición de -196°C (77 K) a presión atmosférica. Su almacenamiento se realiza en tanques Dewar especiales, recipientes de doble pared con vacío intermedio que proporciona un aislamiento térmico extraordinario, minimizando la evaporación a tasas típicas del 1-2% por día. Esta propiedad lo convierte en el medio ideal para la conservación criogénica a largo plazo de material biológico sensible.</p>

          <p>La criopreservación se aplica extensamente a células madre hematopoyéticas, embriones humanos en reproducción asistida, óvulos y espermatozoides para bancos de fertilidad, tejidos especializados, sangre de cordón umbilical rica en células madre, e incluso órganos completos destinados a trasplantes. El proceso emplea técnicas de congelación ultrarápida o vitrificación (transición a estado vítreo sin formación de cristales de hielo), junto con crioprotectores como glicerol, DMSO o etilenglicol que previenen el daño celular a membranas y organelas durante el proceso de enfriamiento y calentamiento.</p>

          <p>Las tasas de supervivencia tras descongelación alcanzan el 90-95% para muchos tipos celulares cuando se emplean protocolos optimizados, permitiendo el establecimiento de bancos biológicos a largo plazo (décadas) sin deterioro apreciable del material. Esta tecnología es fundamental en medicina regenerativa, reproducción asistida, fecundación in vitro, investigación biomédica básica y el desarrollo de terapias celulares avanzadas para enfermedades degenerativas, cáncer y lesiones traumáticas.</p>
        </div>
        <div className="theory-subsection">
          <h3>Astrofísica temperatura superficie Sol 5778K radiación cuerpo negro</h3>
          <p>El Sol es una estrella de tipo espectral G2V en la secuencia principal, con una temperatura efectiva en su superficie visible (fotosfera) de 5778 K (5505°C). Esta temperatura determina la emisión de radiación electromagnética según la ley de Planck para un cuerpo negro, produciendo un espectro continuo con máximo de intensidad en 502 nm (región verde-amarilla del espectro visible), relación descrita por la ley de desplazamiento de Wien: λ<sub>max</sub> = b/T, donde b = 2.898×10⁻³ m·K es la constante de Wien.</p>

          <p>La luminosidad total del Sol alcanza 3.828×10²⁶ W, potencia radiada calculable mediante la ley de Stefan-Boltzmann: L = 4πR²σT⁴, donde R = 6.96×10⁸ m es el radio solar y σ = 5.67×10⁻⁸ W/(m²·K⁴) es la constante de Stefan-Boltzmann. Esta enorme emisión de energía tiene su origen en el núcleo solar, donde la temperatura alcanza aproximadamente 15 millones de kelvin, condiciones extremas que permiten la fusión nuclear termonuclear de hidrógeno en helio mediante la cadena protón-protón (dominante en el Sol) y el ciclo CNO (carbono-nitrógeno-oxígeno).</p>

          <p>La fusión nuclear libera energía según la ecuación de Einstein E = mc², convirtiendo aproximadamente 4 millones de toneladas de masa en energía por segundo. Con una edad actual de 4600 millones de años, el Sol se encuentra aproximadamente a la mitad de su vida en la secuencia principal, estimada en unos 10 mil millones de años totales antes de evolucionar hacia una gigante roja. La temperatura superficial del Sol determina no solo su color amarillento característico, sino también las condiciones de habitabilidad en la Tierra y la fotosíntesis que sustenta la vida tal como la conocemos.</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2><span>📜</span> Historia y Desarrollo</h2>
        <div className="theory-subsection">
          <h3>1592 Galileo termoscopio aire primera medición temperatura cualitativa</h3>
          <p>Galileo Galilei (1564-1642), el célebre físico, matemático y astrónomo italiano de la Universidad de Padua, inventó alrededor de 1592 el termoscopio de aire, considerado el primer dispositivo para detectar cambios de temperatura. Este instrumento consistía en un tubo de vidrio con un bulbo en el extremo superior, invertido y con el extremo abierto sumergido en un recipiente con agua coloreada. La clave de su funcionamiento radicaba en que el nivel de agua en la columna subía o bajaba en respuesta a los cambios de temperatura ambiente.</p>

          <p>Cuando la temperatura aumentaba, el aire dentro del bulbo se calentaba, expandía su volumen y aumentaba su presión, empujando el agua hacia abajo en la columna. Por el contrario, al enfriarse el aire se contraía, la presión disminuida y el agua ascendía. Este desplazamiento del agua proporcionaba una indicación visual cualitativa de la temperatura relativa, permitiendo observar si hacía más calor o frío, pero sin una escala cuantitativa ni puntos de calibración reproducibles.</p>

          <p>Una limitación importante del termoscopio era su sensibilidad a las variaciones de presión atmosférica, que también afectaban al nivel del agua. Esta confusión entre efectos de temperatura y presión no se resolvió hasta que Evangelista Torricelli inventó el barómetro en 1643, demostrando la existencia del vacío y permitiendo separar conceptualmente ambos fenómenos. A pesar de sus limitaciones, el termoscopio de Galileo marcó el inicio de la termometría experimental.</p>
        </div>
        <div className="theory-subsection">
          <h3>1714 Fahrenheit termómetro mercurio escala reproducible calibración</h3>
          <p>Daniel Gabriel Fahrenheit (1686-1736), físico y fabricante de instrumentos científicos alemán-polaco establecido en Ámsterdam, construyó en 1714 el primer termómetro de mercurio verdaderamente preciso y confiable. Su diseño utilizaba un tubo capilar de vidrio cerrado que contenía mercurio, aprovechando la dilatación térmica de este metal líquido, que es extraordinariamente lineal en un rango amplio de temperaturas: desde su punto de fusión a -38°C hasta su punto de ebullición a 357°C. El mercurio ofrecía además excelente estabilidad química y visibilidad, aunque su toxicidad requiere precauciones en el manejo.</p>

          <p>Fahrenheit desarrolló simultáneamente una escala de temperatura reproducible, definiendo inicialmente 0°F como la temperatura de una mezcla frigorífica de hielo, agua y sal de amoniaco, y 96°F como la temperatura del cuerpo humano. El intervalo entre el punto de congelación del agua (32°F) y su ebullición (212°F) quedaba así dividido en 180 grados, un número conveniente por ser altamente divisible. Posteriormente, la escala se redefinió usando exclusivamente los puntos fijos del agua para mayor reproducibilidad.</p>

          <p>La escala Fahrenheit ganó amplia aceptación en países anglosajones, especialmente Estados Unidos y Reino Unido, y todavía se utiliza hoy en meteorología y aviación en algunas regiones. Su principal ventaja histórica fue proporcionar graduaciones más finas que las escalas previas para el rango de temperaturas cotidianas, aunque eventualmente fue desplazada por la escala Celsius en la mayoría del mundo científico y en el uso internacional.</p>
        </div>
        <div className="theory-subsection">
          <h3>1742 Celsius escala centígrada decimal 0-100°C agua fusión ebullición</h3>
          <p>Anders Celsius (1701-1744), astrónomo sueco de la Universidad de Uppsala, propuso en 1742 una escala de temperatura basada en los puntos fijos del agua, sustancia universal y fácilmente accesible: la fusión del hielo definida como 0°C y la ebullición del agua como 100°C, ambos a presión atmosférica normal de 1 atm (101325 Pa). El intervalo entre estos dos puntos se dividió en 100 divisiones iguales, creando una escala centesimal o centígrada perfectamente alineada con el sistema decimal métrico entonces en desarrollo.</p>

          <p>Curiosamente, Celsius propuso originalmente una escala inversa donde 0° correspondía a la ebullición y 100° a la congelación. Fue Carl Linnaeus y otros científicos como Marten Strömer quienes invirtieron la escala poco después, estableciéndola en su forma actual mucho más intuitiva. La simplicidad y lógica de esta escala, con su intervalo de exactamente 100 grados entre los cambios de estado del agua, supuso una ventaja clara sobre la escala Fahrenheit con sus 180 grados.</p>

          <p>La escala Celsius ganó rápida aceptación en la comunidad científica internacional y fue formalmente adoptada por la Conferencia General de Pesas y Medidas (CGPM) en 1948 como parte del Sistema Internacional de Unidades (SI), siendo renombrada "Celsius" en honor a su inventor. Hoy es la escala de temperatura dominante en todo el mundo para uso cotidiano, meteorología, medicina, química y cocina, con la única excepción notable de Estados Unidos que aún usa Fahrenheit.</p>
        </div>
        <div className="theory-subsection">
          <h3>1848 Lord Kelvin escala absoluta termodinámica cero absoluto 0K</h3>
          <p>William Thomson, posteriormente ennoblecido como Lord Kelvin (1824-1907), físico y matemático británico de la Universidad de Glasgow, formuló en 1848 el concepto revolucionario de temperatura termodinámica absoluta. Basando su razonamiento en la Segunda Ley de la Termodinámica y el análisis del ciclo de Carnot, Kelvin demostró que la eficiencia de una máquina térmica ideal dependía únicamente de las temperaturas de los focos térmicos, independientemente de la sustancia de trabajo o del fluido empleado. Este descubrimiento implicaba la existencia de una escala de temperatura universal y absoluta.</p>

          <p>El concepto clave fue la identificación de un límite inferior absoluto de temperatura: el cero absoluto, situado a -273.15°C, temperatura teórica en la que cesaría todo movimiento térmico molecular. La Tercera Ley de la Termodinámica, formulada posteriormente por Walther Nernst, estableció la imposibilidad práctica de alcanzar exactamente esta temperatura y relacionó el cero absoluto con la entropía nula de un cristal perfecto. La escala Kelvin, con grados del mismo tamaño que los Celsius pero con origen desplazado al cero absoluto (0 K = -273.15°C), se convirtió en la unidad fundamental de temperatura del Sistema Internacional.</p>

          <p>Originalmente, el kelvin se definió usando el punto triple del agua (273.16 K exacto), pero en 2019 el SI se redefinió fijando el valor exacto de la constante de Boltzmann k<sub>B</sub> = 1.38064852×10⁻²³ J/K. Esta nueva definición conecta la temperatura directamente con la energía cinética promedio de las partículas, proporcionando una base fundamental más sólida y eliminando la dependencia de cualquier sustancia material específica. La escala Kelvin es hoy indispensable en física, química, ingeniería y todas las ciencias que requieren mediciones termodinámicas precisas.</p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span>🎭</span> Curiosidades y Anécdotas</h2>
        <div className="theory-subsection">
          <h3>Coincidencia -40°F=-40°C única temperatura idéntica ambas escalas</h3>
          <p>Las fórmulas de conversión entre las escalas Fahrenheit y Celsius son °C = (°F - 32) × 5/9 para convertir de Fahrenheit a Celsius, y su inversa °F = °C × 9/5 + 32 para la conversión opuesta. Estas ecuaciones representan una relación lineal con pendiente 9/5 e intersección en 32, lo que significa que las dos escalas son paralelas pero desplazadas. Sin embargo, existe un punto de intersección único donde ambas escalas coinciden y producen el mismo valor numérico.</p>

          <p>Para encontrar este punto, planteamos la ecuación x = (x - 32) × 5/9, donde x representa el valor buscado. Multiplicando ambos lados por 9: 9x = 5x - 160. Restando 5x de ambos lados: 4x = -160. Dividiendo por 4: x = -40. La verificación confirma que -40°F = (-40 - 32) × 5/9 = (-72) × 5/9 = -40°C. Esta coincidencia es puramente una curiosidad matemática sin significado físico especial más allá de la geometría de las escalas.</p>

          <p>No obstante, -40° representa una temperatura extremadamente baja que se registra en regiones árticas como Siberia, Alaska, el norte de Canadá y la Antártida durante el invierno polar. El récord mundial de temperatura natural más baja en la Tierra es de -89.2°C (-128.6°F), registrado en la estación rusa Vostok en la Antártida el 21 de julio de 1983, demostrando que nuestro planeta puede alcanzar fríos muy superiores al punto de coincidencia de estas dos escalas históricas.</p>
        </div>
        <div className="theory-subsection">
          <h3>Temperatura más baja alcanzada laboratorio 100picokelvin 10⁻¹⁰K átomos</h3>
          <p>El enfriamiento láser es una técnica revolucionaria que permite desacelerar átomos mediante la transferencia de momento desde fotones de radiación electromagnética. Utilizando el efecto Doppler, la frecuencia de la luz láser se ajusta precisamente a la velocidad del átomo de modo que este absorba fotones preferentemente cuando se mueve hacia la fuente de luz, frenando su movimiento. Tras ciclos repetidos de absorción y emisión espontánea, la velocidad promedio de los átomos disminuye drásticamente. Como la temperatura es proporcional a la energía cinética promedio, esta técnica permite alcanzar el límite Doppler de aproximadamente 100 microkelvin (10⁻⁴ K).</p>

          <p>Para temperaturas aún más bajas, se emplea el enfriamiento evaporativo: los átomos más rápidos (calientes) escapan de una trampa magnética u óptica, dejando atrás solo los átomos lentos (fríos) que se termalizan a temperaturas de nanokelvin (10⁻⁹ K). A estas temperaturas ultrabajas, se forma un condensado de Bose-Einstein (BEC), un estado cuántico macroscópico donde miles de átomos comparten una única función de onda colectiva. Este fenómeno fue observado experimentalmente por primera vez en 1995 en el MIT con átomos de rubidio y sodio por Eric Cornell, Carl Wieman y Wolfgang Ketterle, trabajo que les valió el Premio Nobel de Física en 2001.</p>

          <p>El récord actual de temperatura más baja alcanzada en laboratorio se sitúa alrededor de 100 picokelvin (10⁻¹⁰ K), logrado en experimentos de la NASA en condiciones de microgravedad en el espacio, donde la ausencia de gravedad permite tiempos de observación muchísimo más largos. Esta investigación fundamental en materia condensada cuántica permite estudiar efectos cuánticos a escala macroscópica, con aplicaciones potenciales en computación cuántica, sensores de precisión extrema y la comprensión de la estructura fundamental de la materia.</p>
        </div>
        <div className="theory-subsection">
          <h3>Temperatura más alta universo 10³²K instante Big Bang origen cosmos</h3>
          <p>Según la teoría del Big Bang, el universo se originó hace aproximadamente 13.8 mil millones de años en una expansión explosiva del espacio-tiempo desde una singularidad inicial de densidad y temperatura infinitas. En el primer instante teóricamente calculable, conocido como el tiempo de Planck (10⁻⁴³ segundos después del Big Bang), la temperatura alcanzó el valor extremo de la temperatura de Planck: T<sub>P</sub> = √(ℏc⁵/Gk<sub>B</sub>²) ≈ 1.4×10³² K, donde ℏ es la constante de Planck reducida, c la velocidad de la luz, G la constante gravitacional y k<sub>B</sub> la constante de Boltzmann. A esta temperatura, la energía térmica corresponde a la energía de Planck E<sub>P</sub> ≈ 2×10⁹ J.</p>

          <p>En estas condiciones extremas, las partículas elementales como quarks, gluones, leptones y bosones existían en un plasma primordial, una "sopa cósmica" donde la materia y la radiación estaban en equilibrio térmico perfecto. A medida que el universo se expandía, experimentaba un enfriamiento adiabático que permitió progresivamente la formación de protones y neutrones (microsegundos después), núcleos atómicos ligeros (primeros minutos), y finalmente átomos neutros (380,000 años después). Este último evento, la recombinación, dejó al universo transparente a la radiación, que hoy observamos como la radiación cósmica de fondo de microondas (CMB) con temperatura de 2.725 K.</p>

          <p>La teoría de la inflación cósmica propone que en los primeros 10⁻³⁶ segundos ocurrió una expansión acelerada exponencial que explica la notable homogeneidad e isotropía observada en el universo a gran escala, resolviendo el problema del horizonte. Las mediciones de precisión de la CMB realizadas por los satélites COBE (1989), WMAP (2001) y Planck (2009) han confirmado las predicciones del modelo cosmológico estándar con extraordinaria exactitud, proporcionando evidencia sólida de que el universo efectivamente experimentó estas temperaturas extremas en sus primeros instantes.</p>
        </div>
        <div className="theory-subsection">
          <h3>Fiebre defensa inmunológica temperatura elevada destruye patógenos bacterias virus</h3>
          <p>La temperatura corporal normal del ser humano se mantiene en el rango 36.5-37.5°C mediante homeostasis termorreguladora controlada por el hipotálamo, el centro de control térmico del cerebro que integra señales de receptores de temperatura periféricos (piel) y centrales (sangre, órganos internos). La fiebre o pirexia consiste en la elevación de la temperatura corporal por encima de 38°C, representando una respuesta adaptativa del sistema inmune a infecciones bacterianas, virales o procesos inflamatorios. Esta elevación es desencadenada por pirógenos: sustancias como las citocinas proinflamatorias IL-1, IL-6 y TNF-α liberadas por células inmunes (macrófagos, linfocitos) que actúan sobre el hipotálamo.</p>

          <p>El hipotálamo responde a los pirógenos aumentando el punto de consigna del "termostato" corporal, como si se elevara la temperatura objetivo. Para alcanzar este nuevo punto de referencia más alto, se inhiben los mecanismos de pérdida de calor (vasodilatación cutánea, sudoración) y se activan los de generación de calor (vasoconstricción, escalofríos, tiriteo muscular), provocando la sensación de frío característica del inicio de la fiebre. Una vez alcanzada la temperatura febril, el organismo la mantiene establemente hasta que desaparece el estímulo inmunológico.</p>

          <p>Sorprendentemente, la fiebre moderada (inferior a 40°C) tiene ventajas defensivas documentadas: acelera el metabolismo celular y la actividad enzimática, incrementa la replicación de linfocitos, potencia la producción de anticuerpos y mejora la capacidad fagocítica de los macrófagos. Además, muchas bacterias y virus patogénicos tienen rangos de temperatura óptima cercanos a 37°C y ven reducida su capacidad de supervivencia y replicación a 39-40°C. Los antipiréticos como paracetamol e ibuprofeno reducen la fiebre actuando sobre el hipotálamo, pero existe debate científico sobre si suprimir una fiebre moderada puede ser contraproducente al interferir con este proceso natural de defensa, especialmente en niños con infecciones virales comunes.</p>
        </div>
      </div>

      <div className="theory-summary-section">
        <h2><span>📝</span> Resumen</h2>
        <ul>
          <li><strong>Temperatura como magnitud intensiva:</strong> La temperatura es una magnitud intensiva que mide el grado de agitación térmica de las partículas, relacionada con la energía cinética promedio de las moléculas. En gases ideales existe proporcionalidad directa entre la temperatura absoluta (Kelvin) y la energía cinética traslacional media de las partículas: E<sub>cin</sub> = (3/2)k<sub>B</sub>T.</li>
          <li><strong>Escalas de temperatura:</strong> La escala Kelvin es la temperatura termodinámica absoluta con origen en el cero absoluto (0 K = -273.15°C), mínimo teórico donde cesaría todo movimiento térmico. La escala Celsius (uso cotidiano) define 0°C como fusión del hielo y 100°C como ebullición del agua. La escala Fahrenheit (anglosajona) establece 32°F para la fusión y 212°F para la ebullición del agua.</li>
          <li><strong>Conversión entre escalas:</strong> Las fórmulas de conversión son K = °C + 273.15, °C = (°F - 32) × 5/9 y °F = °C × 9/5 + 32. Equivalencias fundamentales: temperatura ambiente 20-25°C = 293-298 K = 68-77°F; temperatura del cuerpo humano 37°C = 310 K = 98.6°F.</li>
          <li><strong>Equilibrio térmico y Ley Cero:</strong> Cuando dos sistemas en contacto térmico alcanzan la misma temperatura, cesa el flujo neto de calor entre ellos, estableciéndose el equilibrio térmico. La Ley Cero de la Termodinámica establece la transitividad del equilibrio térmico, fundamento que permite usar termómetros como referencia universal de medición y calibración.</li>
          <li><strong>Instrumentos de medición:</strong> Los termómetros incluyen tipos clásicos (mercurio, alcohol), digitales con sensores termistores, termopares (juntura metálica que genera voltaje proporcional a temperatura), termorresistencias RTD (resistencia metálica variable), termómetros infrarrojos y pirómetros sin contacto. Aplicaciones en medicina, industria, meteorología e investigación científica.</li>
          <li><strong>Aplicaciones de la temperatura:</strong> Control de procesos industriales, tratamientos térmicos metalúrgicos (temple, revenido), climatización y refrigeración de espacios, diagnóstico médico y monitorización de salud, astrofísica estelar, física de partículas de altas energías, criogenia y conservación biológica, superconductividad, proyectos de fusión nuclear e investigación fundamental en termodinámica cuántica.</li>
        </ul>
      </div>
    </>
  );
};

export default TemperaturaTheory;
