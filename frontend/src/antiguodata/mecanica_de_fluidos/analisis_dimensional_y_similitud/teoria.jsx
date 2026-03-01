import { TheorySection, Concept, Formula } from '../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Análisis Dimensional y Similitud",
  descripcion: "Números adimensionales y similitud en mecánica de fluidos",
  isTheoryOnly: false,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

const Theory = ({ exercises }) => (
  <>
    <TheorySection title="¿Qué es el Análisis Dimensional?">
      <p>
        El análisis dimensional es una herramienta fundamental en mecánica de fluidos que permite simplificar problemas complejos mediante el uso de números adimensionales. Estos números relacionan diferentes fuerzas y efectos físicos presentes en un flujo, permitiendo caracterizar el comportamiento del fluido sin necesidad de resolver las ecuaciones completas.
      </p>
      <p>
        Los números adimensionales son combinaciones de variables físicas (densidad, velocidad, viscosidad, etc.) que resultan en cantidades sin unidades. Su valor indica qué fuerzas o efectos dominan en un fenómeno particular, facilitando la clasificación y predicción del comportamiento de flujos.
      </p>
    </TheorySection>

    <TheorySection title="Principio de Similitud">
      <p>
        El principio de similitud establece que dos sistemas físicos diferentes exhibirán comportamientos similares si sus números adimensionales relevantes son iguales. Este principio es la base del modelado a escala: un modelo reducido de un avión, barco o estructura hidráulica puede predecir el comportamiento del prototipo real si se mantienen los números adimensionales apropiados.
      </p>
      <p>
        Existen tres tipos de similitud: geométrica (proporciones espaciales), cinemática (patrones de movimiento) y dinámica (fuerzas). La similitud dinámica, que requiere igualdad de números adimensionales, es la más importante en mecánica de fluidos.
      </p>
    </TheorySection>

    <TheorySection title="Número de Reynolds (Re)">
      <Concept title="Definición y Significado Físico">
        <p>
          El número de Reynolds es el parámetro adimensional más importante en mecánica de fluidos. Representa la relación entre las fuerzas inerciales y las fuerzas viscosas en un flujo. Valores bajos indican que la viscosidad domina (flujo laminar), mientras que valores altos indican que la inercia domina (flujo turbulento).
        </p>
        <Formula 
          expression={String.raw`Re = \frac{\rho v L}{\mu}`} 
          calculatorId="numero-reynolds" 
          definitions={definitions}
          exercises={exercises}
          complementary={[
            { description: "Calcular la Velocidad desde Reynolds", expression: String.raw`v = \frac{Re \cdot \mu}{\rho \cdot L}` },
            { description: "Calcular la Viscosidad desde Reynolds", expression: String.raw`\mu = \frac{\rho \cdot v \cdot L}{Re}` }
          ]}
        />
        
        <p>Donde:</p>
        <ul>
          <li>Re = Número de Reynolds (adimensional)</li>
          <li>ρ = Densidad del fluido (kg/m³)</li>
          <li>v = Velocidad característica (m/s)</li>
          <li>L = Longitud característica (m)</li>
          <li>μ = Viscosidad dinámica (Pa·s)</li>
        </ul>
      </Concept>

      <Concept title="Regímenes de Flujo">
        <p>
          El número de Reynolds permite clasificar el flujo en tres regímenes:
        </p>
        <ul>
          <li>Re menor que 2300: Flujo laminar (capas ordenadas, predecible)</li>
          <li>Re entre 2300 y 4000: Flujo de transición (inestable)</li>
          <li>Re mayor que 4000: Flujo turbulento (caótico, mezcla intensa)</li>
        </ul>
        <p>
          Estos valores son aproximados y pueden variar según la geometría y condiciones del flujo. En tuberías, el flujo laminar se caracteriza por un perfil de velocidad parabólico, mientras que el turbulento presenta un perfil más plano con fluctuaciones aleatorias.
        </p>
      </Concept>
    </TheorySection>

    <TheorySection title="Número de Mach (M)">
      <Concept title="Compresibilidad del Flujo">
        <p>
          El número de Mach relaciona la velocidad del flujo con la velocidad del sonido en el medio. Es fundamental para determinar si los efectos de compresibilidad son significativos. En gases, cuando M es mayor que 0.3, la densidad varía apreciablemente y el flujo debe tratarse como compresible.
        </p>
        <Formula 
          expression={String.raw`M = \frac{v}{c}`} 
          calculatorId="numero-mach" 
          definitions={definitions}
          exercises={exercises}
          complementary={[
            { description: "Calcular la Velocidad desde Mach", expression: String.raw`v = M \cdot c` },
            { description: "Calcular la Velocidad del Sonido desde Mach", expression: String.raw`c = \frac{v}{M}` }
          ]}
        />
        
        <p>Donde:</p>
        <ul>
          <li>M = Número de Mach (adimensional)</li>
          <li>v = Velocidad del flujo (m/s)</li>
          <li>c = Velocidad del sonido en el medio (m/s)</li>
        </ul>
      </Concept>

      <Concept title="Clasificación de Flujos Compresibles">
        <p>
          Según el número de Mach, los flujos se clasifican en:
        </p>
        <ul>
          <li>M menor que 0.3: Flujo incompresible (variaciones de densidad despreciables)</li>
          <li>M entre 0.3 y 0.8: Flujo subsónico (compresibilidad moderada)</li>
          <li>M entre 0.8 y 1.2: Flujo transónico (ondas de choque locales)</li>
          <li>M entre 1.2 y 5: Flujo supersónico (ondas de choque oblicuas)</li>
          <li>M mayor que 5: Flujo hipersónico (efectos térmicos extremos)</li>
        </ul>
      </Concept>
    </TheorySection>

    <TheorySection title="Número de Froude (Fr)">
      <Concept title="Efectos Gravitacionales">
        <p>
          El número de Froude compara las fuerzas inerciales con las fuerzas gravitacionales. Es especialmente importante en flujos con superficie libre (canales, ríos, olas) y en el diseño de barcos. Un valor de Fr = 1 indica flujo crítico, donde la velocidad del flujo iguala la velocidad de propagación de ondas superficiales.
        </p>
        <Formula 
          expression={String.raw`Fr = \frac{v}{\sqrt{gL}}`} 
          calculatorId="numero-froude" 
          definitions={definitions}
          exercises={exercises}
          complementary={[
            { description: "Calcular la Velocidad desde Froude", expression: String.raw`v = Fr \cdot \sqrt{gL}` },
            { description: "Calcular la Longitud desde Froude", expression: String.raw`L = \frac{(v/Fr)^2}{g}` }
          ]}
        />
        
        <p>Donde:</p>
        <ul>
          <li>Fr = Número de Froude (adimensional)</li>
          <li>v = Velocidad del flujo (m/s)</li>
          <li>g = Aceleración gravitacional (9.81 m/s²)</li>
          <li>L = Longitud característica (m)</li>
        </ul>
      </Concept>

      <Concept title="Regímenes de Flujo en Canales">
        <p>
          El número de Froude clasifica el flujo en canales abiertos:
        </p>
        <ul>
          <li>Fr menor que 1: Flujo subcrítico (tranquilo, profundo, lento)</li>
          <li>Fr igual a 1: Flujo crítico (velocidad mínima de energía específica)</li>
          <li>Fr mayor que 1: Flujo supercrítico (rápido, poco profundo, torrencial)</li>
        </ul>
        <p>
          En flujo subcrítico, las perturbaciones pueden propagarse aguas arriba. En flujo supercrítico, las perturbaciones solo se propagan aguas abajo. Esta distinción es crucial para el diseño de estructuras hidráulicas como vertederos y compuertas.
        </p>
      </Concept>
    </TheorySection>

    <TheorySection title="Número de Weber (We)">
      <Concept title="Tensión Superficial">
        <p>
          El número de Weber relaciona las fuerzas inerciales con las fuerzas de tensión superficial. Es fundamental en fenómenos que involucran interfaces líquido-gas, como la formación de gotas, burbujas, atomización de combustibles y flujos capilares. Valores altos indican que la tensión superficial es despreciable.
        </p>
        <Formula 
          expression={String.raw`We = \frac{\rho v^2 L}{\sigma}`} 
          calculatorId="numero-weber" 
          definitions={definitions}
          exercises={exercises}
          complementary={[
            { description: "Calcular la Velocidad desde Weber", expression: String.raw`v = \sqrt{\frac{We \cdot \sigma}{\rho \cdot L}}` },
            { description: "Calcular la Tensión Superficial desde Weber", expression: String.raw`\sigma = \frac{\rho \cdot v^2 \cdot L}{We}` }
          ]}
        />
        
        <p>Donde:</p>
        <ul>
          <li>We = Número de Weber (adimensional)</li>
          <li>ρ = Densidad del fluido (kg/m³)</li>
          <li>v = Velocidad característica (m/s)</li>
          <li>L = Longitud característica (m)</li>
          <li>σ = Tensión superficial (N/m)</li>
        </ul>
      </Concept>

      <Concept title="Criterios de Ruptura">
        <p>
          El número de Weber determina el comportamiento de gotas y burbujas:
        </p>
        <ul>
          <li>We menor que 1: Dominan fuerzas de tensión superficial (gota estable)</li>
          <li>We entre 1 y 12: Deformación de la gota</li>
          <li>We mayor que 12: Ruptura y atomización de la gota</li>
        </ul>
        <p>
          En inyectores de combustible, se busca We mayor que 100 para garantizar una atomización completa y mejorar la combustión. En impresoras de inyección de tinta, se controla We para formar gotas uniformes sin satélites.
        </p>
      </Concept>
    </TheorySection>

    <TheorySection title="Número de Euler (Eu)">
      <Concept title="Caídas de Presión">
        <p>
          El número de Euler relaciona las diferencias de presión con las fuerzas inerciales. Es útil para caracterizar pérdidas de carga en tuberías, válvulas, codos y otros accesorios. También se utiliza en el análisis de cavitación y en el diseño de turbomáquinas.
        </p>
        <Formula 
          expression={String.raw`Eu = \frac{\Delta p}{\rho v^2}`} 
          calculatorId="numero-euler" 
          definitions={definitions}
          exercises={exercises}
          complementary={[
            { description: "Calcular la Diferencia de Presión desde Euler", expression: String.raw`\Delta p = Eu \cdot \rho \cdot v^2` },
            { description: "Calcular la Velocidad desde Euler", expression: String.raw`v = \sqrt{\frac{\Delta p}{Eu \cdot \rho}}` }
          ]}
        />
        
        <p>Donde:</p>
        <ul>
          <li>Eu = Número de Euler (adimensional)</li>
          <li>Δp = Diferencia de presión (Pa)</li>
          <li>ρ = Densidad del fluido (kg/m³)</li>
          <li>v = Velocidad característica (m/s)</li>
        </ul>
      </Concept>

      <Concept title="Aplicaciones en Sistemas de Tuberías">
        <p>
          El número de Euler es constante para geometrías similares operando en el mismo régimen de flujo. Esto permite:
        </p>
        <ul>
          <li>Predecir caídas de presión en sistemas a escala</li>
          <li>Caracterizar coeficientes de pérdida en accesorios</li>
          <li>Diseñar sistemas de distribución de fluidos</li>
          <li>Optimizar el consumo energético en bombeo</li>
        </ul>
        <p>
          En válvulas y restricciones, Eu se relaciona con el coeficiente de pérdida K mediante Eu = 2K. Valores típicos: codo de 90° (K ≈ 0.9), válvula de compuerta abierta (K ≈ 0.2), válvula de globo (K ≈ 10).
        </p>
      </Concept>
    </TheorySection>

    <TheorySection title="Teorema de Buckingham (Teorema π)">
      <p>
        El teorema π de Buckingham es la base matemática del análisis dimensional. Establece que si un problema físico involucra n variables y k dimensiones fundamentales (masa, longitud, tiempo), entonces puede expresarse mediante (n - k) grupos adimensionales independientes.
      </p>
      <p>
        Por ejemplo, la fuerza de arrastre sobre una esfera depende de: diámetro D, velocidad v, densidad ρ, viscosidad μ. Son 4 variables con 3 dimensiones fundamentales, resultando en 4 - 3 = 1 grupo adimensional: el coeficiente de arrastre CD = F/(½ρv²A), que depende solo del número de Reynolds.
      </p>
      <p>
        Este teorema permite reducir drásticamente el número de experimentos necesarios. En lugar de variar cada parámetro individualmente (miles de combinaciones), solo se varían los grupos adimensionales (decenas de casos).
      </p>
    </TheorySection>

    <TheorySection title="Similitud Dinámica y Modelado a Escala">
      <p>
        Para que un modelo a escala represente fielmente el prototipo, deben cumplirse las condiciones de similitud:
      </p>
      <ul>
        <li>Similitud geométrica: Todas las dimensiones escaladas por el mismo factor</li>
        <li>Similitud cinemática: Patrones de flujo idénticos (líneas de corriente proporcionales)</li>
        <li>Similitud dinámica: Números adimensionales iguales en modelo y prototipo</li>
      </ul>
      <p>
        En la práctica, es imposible mantener todos los números adimensionales simultáneamente. Por ejemplo, un modelo de barco a escala 1:10 con similitud de Froude (Fr_modelo = Fr_prototipo) tendría un Reynolds 1000 veces menor, violando la similitud de Reynolds. Se debe identificar qué número adimensional domina el fenómeno y mantener ese.
      </p>
      <p>
        Criterios de selección: En flujos con superficie libre (barcos, canales) domina Froude. En flujos internos (tuberías, aerodinámica) domina Reynolds. En atomización domina Weber. En flujos compresibles domina Mach.
      </p>
    </TheorySection>

    <div className="theory-applications-section">
      <h2>
        <span>🌍</span> Aplicaciones en la vida real
      </h2>
      
      <div className="theory-subsection">
        <h3>✈️ Diseño aeronáutico</h3>
        <p>
          Los túneles de viento utilizan modelos a escala de aviones para predecir su comportamiento aerodinámico. Manteniendo el número de Reynolds y Mach iguales entre modelo y prototipo, se pueden medir fuerzas de sustentación y arrastre con precisión. El Boeing 787 fue probado en túneles de viento a velocidades de hasta Mach 0.95, permitiendo optimizar su diseño antes de construir el primer prototipo real.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🚢 Ingeniería naval</h3>
        <p>
          Los tanques de prueba de modelos navales utilizan similitud de Froude para predecir la resistencia al avance de barcos. Un modelo a escala 1:20 de un buque portacontenedores se prueba a velocidades reducidas para mantener Fr constante. Las mediciones de resistencia se escalan al prototipo, permitiendo optimizar el diseño del casco y reducir el consumo de combustible hasta un 15%.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🏗️ Hidráulica de canales</h3>
        <p>
          Los modelos físicos de presas, vertederos y canales utilizan similitud de Froude para estudiar el comportamiento del flujo. La presa de las Tres Gargantas en China fue probada en un modelo a escala 1:100, permitiendo identificar zonas de erosión, optimizar el diseño del aliviadero y garantizar la seguridad de la estructura antes de su construcción.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>💉 Inyección de combustible</h3>
        <p>
          Los inyectores de motores diésel y turbinas de gas se diseñan controlando el número de Weber. Para We mayor que 100, se garantiza la atomización completa del combustible en gotas menores de 50 micras, mejorando la eficiencia de combustión y reduciendo emisiones contaminantes. Los inyectores modernos operan con We entre 200 y 1000.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🏥 Flujo sanguíneo</h3>
        <p>
          El número de Reynolds en arterias humanas varía entre 100 (capilares) y 4000 (aorta). En la aorta, Re ≈ 2000 indica flujo de transición, con turbulencia pulsátil que puede contribuir a la formación de placas ateroscleróticas. Los stents cardiovasculares se diseñan para mantener Re en rangos que minimicen la turbulencia y la trombosis.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🌊 Predicción de tsunamis</h3>
        <p>
          Los modelos físicos de tsunamis utilizan similitud de Froude para estudiar la propagación de olas y su impacto en costas. Después del tsunami de 2011 en Japón, se construyeron modelos a escala de ciudades costeras para diseñar barreras de protección más efectivas. La similitud de Froude permite escalar correctamente la velocidad y altura de las olas.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🏭 Diseño de tuberías industriales</h3>
        <p>
          El número de Reynolds determina el régimen de flujo en tuberías industriales. Para Re mayor que 4000 (turbulento), las pérdidas de carga son proporcionales a v², mientras que para Re menor que 2300 (laminar), son proporcionales a v. Esta distinción es crucial para dimensionar bombas y calcular costos energéticos. Una refinería típica puede ahorrar millones de euros anuales optimizando el régimen de flujo.
        </p>
      </div>
    </div>

    <div className="theory-history-section">
      <h2>
        <span>📜</span> Historia: El desarrollo del análisis dimensional
      </h2>
      
      <div className="theory-subsection">
        <h3>🔬 Osborne Reynolds (1842-1912)</h3>
        <p>
          El ingeniero británico Osborne Reynolds realizó en 1883 su famoso experimento con flujo de agua en tuberías de vidrio, inyectando tinta para visualizar el flujo. Descubrió la transición entre flujo laminar y turbulento, identificando el parámetro adimensional que lleva su nombre. Su trabajo estableció las bases de la mecánica de fluidos moderna y demostró que el comportamiento del flujo depende de un número adimensional, no de las variables individuales.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>⚓ William Froude (1810-1879)</h3>
        <p>
          El ingeniero naval británico William Froude desarrolló el primer tanque de pruebas de modelos navales en 1871. Descubrió que la resistencia de ola de un barco depende del número que lleva su nombre, permitiendo predecir el comportamiento de barcos reales mediante modelos a escala. Su trabajo revolucionó el diseño naval, reduciendo el tiempo y costo de desarrollo de nuevos buques.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🎯 Edgar Buckingham (1867-1940)</h3>
        <p>
          El físico estadounidense Edgar Buckingham formuló en 1914 el teorema π, que proporciona un método sistemático para determinar grupos adimensionales en cualquier problema físico. Este teorema es la base matemática del análisis dimensional y ha sido aplicado en innumerables campos de la ingeniería y la física. Buckingham trabajó en el National Bureau of Standards (ahora NIST) y su teorema sigue siendo fundamental en la investigación experimental.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>✈️ Ernst Mach (1838-1916)</h3>
        <p>
          El físico austríaco Ernst Mach fue pionero en el estudio de flujos supersónicos. En 1887 fotografió por primera vez ondas de choque generadas por proyectiles supersónicos, utilizando la técnica de schlieren que él mismo perfeccionó. El número de Mach, que relaciona la velocidad del flujo con la velocidad del sonido, fue nombrado en su honor por el aerodinamicista Jakob Ackeret en 1929.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>💧 Moritz Weber (1871-1951)</h3>
        <p>
          El ingeniero alemán Moritz Weber estudió los efectos de la tensión superficial en flujos. El número de Weber, que relaciona fuerzas inerciales y de tensión superficial, fue nombrado en su honor. Sus investigaciones fueron fundamentales para entender fenómenos como la formación de gotas, la atomización de líquidos y el flujo capilar, con aplicaciones en motores de combustión, impresoras de inyección de tinta y procesos químicos.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🌊 Leonhard Euler (1707-1783)</h3>
        <p>
          El matemático suizo Leonhard Euler formuló las ecuaciones fundamentales de la mecánica de fluidos en 1757. El número de Euler, que relaciona diferencias de presión con fuerzas inerciales, lleva su nombre en reconocimiento a sus contribuciones. Euler también desarrolló el concepto de líneas de corriente y fue el primero en formular las ecuaciones de conservación de masa y momento para fluidos ideales.
        </p>
      </div>
    </div>

    <div className="theory-anecdotes-section">
      <h2>
        <span>✨</span> Anécdotas y curiosidades
      </h2>
      
      <div className="theory-subsection">
        <h3>🎨 El experimento de Reynolds con tinta</h3>
        <p>
          Osborne Reynolds utilizó un aparato ingeniosamente simple: un tubo de vidrio con agua y un filamento de tinta inyectado en el centro. A bajas velocidades, la tinta formaba una línea recta perfecta (flujo laminar). Al aumentar la velocidad, la línea súbitamente se desintegraba en remolinos caóticos (flujo turbulento). Este experimento, que cualquiera puede reproducir en casa, reveló uno de los fenómenos más complejos de la física: la turbulencia, que aún hoy no se comprende completamente.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🚢 El Titanic y la similitud de Froude</h3>
        <p>
          Antes de construir el Titanic, se probó un modelo a escala 1:48 en el tanque de pruebas de Froude en Inglaterra. Las pruebas predijeron correctamente la velocidad máxima del barco (23 nudos) y su consumo de carbón. Sin embargo, no se probó la maniobrabilidad a baja velocidad, lo que habría revelado la dificultad para evitar el iceberg. Este caso ilustra la importancia de probar todos los escenarios operativos, no solo las condiciones de diseño.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>💨 Rompiendo la barrera del sonido</h3>
        <p>
          En 1947, Chuck Yeager rompió la barrera del sonido (Mach 1) en el Bell X-1. Los ingenieros diseñaron el avión basándose en datos de túneles de viento supersónicos y en la forma de balas calibre .50, que ya volaban supersónicamente. El número de Mach fue crucial para predecir el comportamiento del avión: cerca de Mach 1, las ondas de choque generan vibraciones extremas (el "muro del sonido"), pero una vez superado, el vuelo se vuelve suave nuevamente.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>☕ El misterio del café que salpica</h3>
        <p>
          ¿Por qué el café salpica más al caminar que al correr? El número de Froude explica este fenómeno. La frecuencia natural de oscilación del líquido en una taza depende de √(g/L). Al caminar (≈2 pasos/segundo), esta frecuencia coincide con la frecuencia de nuestros pasos, generando resonancia y grandes olas. Al correr (≈3 pasos/segundo), las frecuencias no coinciden y el café se mueve menos. La solución: caminar más rápido o más lento, o usar una taza más grande o más pequeña.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🐜 Hormigas nadando en miel</h3>
        <p>
          Para una hormiga nadando en miel, el número de Reynolds es aproximadamente 0.001, millones de veces menor que para un humano en agua (Re ≈ 10⁶). A escalas tan pequeñas, la viscosidad domina completamente: nadar en miel para una hormiga es como nadar en cemento para nosotros. Este principio explica por qué los microorganismos usan flagelos rotativos en lugar de aletas: a Re muy bajo, el movimiento de vaivén no genera propulsión neta.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🌧️ Gotas de lluvia perfectas</h3>
        <p>
          Contrario a la creencia popular, las gotas de lluvia no tienen forma de lágrima. Para gotas pequeñas (menor que 1 mm), la tensión superficial (We menor que 1) las mantiene esféricas. Gotas mayores se aplanan por la resistencia del aire, adoptando forma de hamburguesa. Gotas mayores de 5 mm (We mayor que 12) se rompen en gotas más pequeñas. Por eso, la lluvia más intensa tiene gotas de aproximadamente 5 mm: es el tamaño máximo estable según el número de Weber.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🏎️ Fórmula 1 y similitud imposible</h3>
        <p>
          Los equipos de Fórmula 1 usan modelos a escala 1:2 en túneles de viento. Para mantener el número de Reynolds, deberían duplicar la velocidad del aire, pero esto generaría números de Mach demasiado altos (efectos de compresibilidad no deseados). La solución: usan aire presurizado (5 atmósferas) para aumentar la densidad y así aumentar Re sin aumentar tanto la velocidad. Aun así, la similitud no es perfecta, y los datos deben corregirse mediante complejos modelos computacionales.
        </p>
      </div>
    </div>

    <div className="formula-card">
      <h3>📝 Resumen</h3>
      <ul>
        <li>
          El análisis dimensional utiliza números adimensionales para simplificar problemas complejos y caracterizar el comportamiento de flujos.
        </li>
        <li>
          El número de Reynolds (Re = ρvL/μ) compara fuerzas inerciales y viscosas, determinando si el flujo es laminar (Re menor que 2300) o turbulento (Re mayor que 4000).
        </li>
        <li>
          El número de Mach (M = v/c) indica la importancia de efectos de compresibilidad. Para M menor que 0.3, el flujo puede tratarse como incompresible.
        </li>
        <li>
          El número de Froude (Fr = v/√(gL)) relaciona fuerzas inerciales y gravitacionales, siendo crucial en flujos con superficie libre como canales y diseño naval.
        </li>
        <li>
          El número de Weber (We = ρv²L/σ) compara fuerzas inerciales y de tensión superficial, determinando la estabilidad de gotas y burbujas.
        </li>
        <li>
          El número de Euler (Eu = Δp/(ρv²)) relaciona diferencias de presión con fuerzas inerciales, útil para caracterizar pérdidas de carga.
        </li>
        <li>
          El teorema π de Buckingham permite determinar sistemáticamente los grupos adimensionales relevantes en cualquier problema físico.
        </li>
        <li>
          La similitud dinámica requiere igualdad de números adimensionales entre modelo y prototipo, permitiendo el modelado a escala en ingeniería.
        </li>
      </ul>
    </div>
  </>
);

export default Theory;
