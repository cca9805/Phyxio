import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as terceraLeyDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Tercera Ley de la Termodinámica",
  descripcion: "Entropía en el cero absoluto y sus consecuencias",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO'],
  isTheoryOnly: true
};

const TerceraLeyTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Tercera Ley de la Termodinámica?">
        <Concept title="Definición">
          <p>
            La Tercera Ley de la Termodinámica establece que la entropía de un cristal perfecto en el cero absoluto es cero. Esta ley proporciona un punto de referencia absoluto para medir la entropía.
          </p>
          <Important>
            <p>Enunciado de la Tercera Ley:</p>
            <p>"La entropía de un sistema en equilibrio termodinámico tiende a cero cuando la temperatura se aproxima al cero absoluto (0 K)."</p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Entropía Absoluta">
        <Concept title="Cálculo de Entropía Absoluta">
          <p>
            La Tercera Ley permite calcular la entropía absoluta de una sustancia:
          </p>
          <Formula 
            expression={String.raw`S(T) \approx C_p \cdot \ln\left(\frac{T}{T_0}\right)`}
            description="Entropía absoluta aproximada"
            calculatorId="tercera-ley-entropia"
            definitions={terceraLeyDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Capacidad Calorífica", expression: String.raw`C_p = \frac{S(T)}{\ln\left(\frac{T}{T_0}\right)}` }
            ]}
          />
          <p>Donde:</p>
          <ul>
            <li>S(T): Entropía absoluta a temperatura T (J/K)</li>
            <li>C<sub>p</sub>: Capacidad calorífica promedio (J/K)</li>
            <li>T: Temperatura final (K)</li>
            <li>T<sub>0</sub>: Temperatura inicial (K)</li>
          </ul>
        </Concept>

        <Concept title="Inalcanzabilidad del Cero Absoluto">
          <p>
            Una consecuencia importante de la Tercera Ley es que es imposible alcanzar el cero absoluto (0 K) mediante un número finito de procesos.
          </p>
          <ul>
            <li>La capacidad calorífica tiende a cero cuando T → 0 K</li>
            <li>Se requiere extraer cada vez menos calor, pero con mayor dificultad</li>
            <li>Los récords actuales están en el orden de nanokelvin (10⁻⁹ K)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Temperaturas Criogénicas">
        <Concept title="Conversión de Temperaturas">
          <p>
            En criogenia, es fundamental trabajar con temperaturas absolutas (Kelvin):
          </p>
          <Formula 
            expression={String.raw`T(K) = T(°C) + 273.15`}
            description="Conversión de Celsius a Kelvin"
            calculatorId="tercera-ley-temperatura"
            definitions={terceraLeyDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Conversión a Celsius", expression: String.raw`T(°C) = T(K) - 273.15` }
            ]}
          />
          <p>Temperaturas de referencia:</p>
          <ul>
            <li>Helio líquido: 4.2 K (-269°C)</li>
            <li>Nitrógeno líquido: 77 K (-196°C)</li>
            <li>Oxígeno líquido: 90 K (-183°C)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos Prácticos">
        <Example 
          title="Ejemplo 1: Entropía a 0 K"
          problem="¿Por qué la entropía de un cristal perfecto es cero a 0 K?"
          solution={
            <div>
              <p>Explicación:</p>
              <p>A 0 K, un cristal perfecto tiene todas sus moléculas en posiciones fijas y ordenadas. No hay movimiento térmico ni desorden molecular.</p>
              <p>Según S = k ln(W), donde W es el número de microestados:</p>
              <ul>
                <li>A 0 K: W = 1 (solo un microestado)</li>
                <li>S = k ln(1) = 0</li>
              </ul>
            </div>
          }
        />

        <Example 
          title="Ejemplo 2: Nitrógeno Líquido"
          problem="El nitrógeno líquido hierve a -196°C. ¿Cuál es esta temperatura en Kelvin?"
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>T = -196°C</li>
              </ul>
              <p>Solución:</p>
              <p>T(K) = T(°C) + 273.15</p>
              <p>T(K) = -196 + 273.15</p>
              <p>T = 77.15 K ≈ 77 K</p>
            </div>
          }
        />
      </TheorySection>

      <TheorySection title="Aplicaciones en la Vida Real">
        <Concept title="Tecnología Moderna">
          <ul>
            <li>Resonancia magnética (MRI): Imanes superconductores enfriados con helio líquido</li>
            <li>Aceleradores de partículas: LHC opera a 1.9 K</li>
            <li>Telescopios espaciales: Detectores infrarrojos criogénicos</li>
            <li>Almacenamiento de gases: GNL (gas natural licuado)</li>
          </ul>
        </Concept>

        <Concept title="Investigación Científica">
          <ul>
            <li>Física cuántica: Condensados de Bose-Einstein</li>
            <li>Computación cuántica: Qubits superconductores</li>
            <li>Metrología: Estándares de temperatura</li>
            <li>Astrofísica: Simulación de condiciones del espacio</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2><span className="emoji-icon">🔧</span> Aplicaciones en la Vida Real</h2>
        
        <div className="theory-subsection">
          <h3>Resonancia magnética nuclear superconductor NbTi 9K imán 1.5-3Tesla helio líquido 4.2K criostato pérdidas minimizadas diagnóstico médico</h3>
          <p>Los equipos de resonancia magnética nuclear (RMN o MRI por sus siglas en inglés) en hospitales emplean imanes superconductores de aleación niobio-titanio (NbTi) con temperatura crítica de superconductividad T_c=9K, capaces de generar campos magnéticos intensos y estables de 1.5-3 Tesla (30000-60000 veces el campo magnético terrestre). La bobina superconductora en configuración de solenoide se refrigera continuamente con helio líquido a 4.2K dentro de un criostato con aislamiento térmico de vacío multicapa que minimiza pérdidas térmicas por radiación y conducción. Al no presentar resistencia eléctrica, la corriente fluye persistentemente sin necesidad de fuente externa de voltaje, manteniendo el campo magnético constante durante años.</p>
          <p>El funcionamiento de la RMN se basa en la resonancia de los núcleos de hidrógeno (protones) en el agua y grasas del cuerpo humano. El campo magnético intenso alinea los espines nucleares, y una secuencia de pulsos de radiofrecuencia a 63.8MHz (para 1.5T) excita los protones a estados de mayor energía. Los tiempos de relajación T1 (longitudinal, retorno al equilibrio) y T2 (transversal, desfase de espines) varían según el tejido, permitiendo distinguir materia gris, blanca, líquido cefalorraquídeo, tumores, lesiones y accidentes cerebrovasculares en imágenes anatómicas y funcionales detalladas. Las aplicaciones se extienden a diagnóstico médico de cerebro, columna, articulaciones, y a investigación en neurociencia, sin emplear radiación ionizante como los rayos X.</p>
          <p>El consumo de helio líquido en RMN representa un desafío logístico y económico debido a la escasez mundial de este recurso no renovable (el helio atmosférico escapa al espacio por su baja masa molecular). Sistemas modernos de reciclado recuperan el helio evaporado, reduciendo consumo de 1000 litros/año a 50 litros/año. Los costes de operación y mantenimiento incluyen reposición de helio (~500€/litro), electricidad para compresores de refrigeración, y revisiones técnicas periódicas. Desde la perspectiva de la Tercera Ley de la Termodinámica, el enfriamiento hasta 4.2K se aproxima al límite S(0K)=0 donde la entropía alcanza su valor mínimo y el orden cristalino de la aleación superconductora es máximo, permitiendo la coherencia cuántica macroscópica necesaria para la superconductividad.</p>
        </div>

        <div className="theory-subsection">
          <h3>Licuefacción helio gas criogenia 4.2K ciclo Collins Linde pre-enfriamiento nitrógeno 77K expansión Joule-Thomson temperatura inversión 40K</h3>
          <p>El helio es un gas noble con el punto de ebullición más bajo de todos los elementos: 4.2K a presión atmosférica (1atm), resultado de su masa atómica ligera (4u) y fuerzas intermoleculares de Van der Waals extremadamente débiles. Su temperatura crítica T_c=5.2K y presión crítica P_c=2.3atm establecen el límite por encima del cual no puede existir líquido independientemente de la presión aplicada. La licuefacción de helio es el proceso criogénico más desafiante técnicamente, requiriendo ciclos termodinámicos sofisticados como el ciclo Collins de múltiples etapas o el proceso Linde con pre-enfriamiento escalonado mediante otros criógenos como nitrógeno líquido a 77K.</p>
          <p>El proceso típico comienza con compresión del helio gaseoso a ~20bar, seguido de pre-enfriamiento mediante intercambiador de calor con nitrógeno líquido hasta 77K. Posteriormente, el gas fluye por intercambiadores de calor de contracorriente donde se enfría por contacto con helio frío que retorna del proceso, alcanzando temperaturas cercanas a 40K. A continuación, una válvula de expansión Joule-Thomson (isentálpica ΔH=0) reduce la presión a 1atm, provocando enfriamiento adicional. Sin embargo, el helio presenta un coeficiente Joule-Thomson positivo (enfriamiento) solo por debajo de su temperatura de inversión T_inv≈40K; por encima de esta temperatura, la expansión causa calentamiento, explicando la necesidad del pre-enfriamiento previo. Para mayor eficiencia, el ciclo Claude emplea un expansor de pistón o turbina que recupera trabajo mecánico, alcanzando eficiencias del 25% en la conversión de trabajo eléctrico en helio licuado.</p>
          <p>La producción mundial de helio alcanza ~160 millones de metros cúbicos por año, extraído principalmente de yacimientos de gas natural en Estados Unidos (40%), Qatar (30%) y Argelia (10%), donde el helio se acumula por desintegración radiactiva de uranio y torio en la corteza terrestre durante miles de millones de años. Las aplicaciones críticas incluyen superconductores en RMN, aceleradores de partículas como el LHC del CERN (96 toneladas de helio líquido enfriando 27km de imanes a 1.9K mediante helio superfluido presurizado), detectores infrarrojos en telescopios espaciales como el James Webb, y fabricación de semiconductores. La Tercera Ley se manifiesta en la capacidad calorífica del helio sólido a bajas temperaturas, que sigue la ley de Debye C∝T³, tendiendo a cero cuando T→0K, haciendo progresivamente más difícil extraer calor residual al aproximarse al cero absoluto, consistente con el principio de inalcanzabilidad de 0K.</p>
        </div>

        <div className="theory-subsection">
          <h3>Condensado Bose-Einstein 170nanokelvin rubidio-87 bosones función onda macroscópica coherencia cuántica enfriamiento láser evaporativo trampa magnética</h3>
          <p>El condensado de Bose-Einstein (BEC) representa un estado cuántico de la materia alcanzado a temperaturas extremadamente bajas de ~170nK (nanokelvin=10⁻⁹K), donde un gas de átomos bosones como rubidio-87 (⁸⁷Rb) o sodio-23 (²³Na) con espín entero (I=3/2 para Rb-87) obedece la estadística de Bose-Einstein. Al descender por debajo de la temperatura crítica T_c=3.31(n/ζ(3/2))^(2/3)ħ²/(mk_B), donde n es la densidad atómica, ζ la función zeta de Riemann, ħ la constante de Planck reducida, m la masa atómica y k_B la constante de Boltzmann, una fracción macroscópica de átomos (típicamente 10⁵-10⁷ átomos) ocupan el estado fundamental cuántico con energía mínima, formando una función de onda coherente con fase cuántica definida, observable en experimentos de interferencia.</p>
          <p>La preparación del BEC requiere un enfriamiento sofisticado en dos etapas: primero, enfriamiento láser Doppler que reduce la temperatura de una nube de átomos desde ~500K ambiente hasta ~100μK mediante presión de radiación de seis haces láser contrapropagados (melaza óptica), seguido de confinamiento en una trampa magneto-óptica (MOT). Segundo, enfriamiento evaporativo donde se reduce progresivamente la profundidad del potencial magnético permitiendo escapar a los átomos más energéticos, llevando la temperatura a 170nK=1.7×10⁻⁷K. Eric Cornell, Carl Wieman y Wolfgang Ketterle lograron la primera observación de BEC en 1995 en rubidio-87 y sodio-23, recibiendo el Premio Nobel de Física 2001 por abrir un nuevo campo de investigación en física cuántica.</p>
          <p>Las aplicaciones del BEC incluyen simulación de sistemas cuánticos de muchos cuerpos (superconductividad, superfluidez, magnetismo) en entornos controlados, interferometría atómica de alta precisión para giroscopios inerciales (sensibilidad 10⁻¹¹rad/s), gravimetría para detección de recursos minerales y agua subterránea, metrología de tiempo (relojes atómicos de estroncio con exactitud 10⁻¹⁸), y computación cuántica con átomos neutros en redes ópticas formando qubits. Los atom chips integran trampas magnéticas miniaturizadas en microchips para manipular BECs. Desde la perspectiva de la Tercera Ley, al aproximarse a 170nK la entropía del gas S→0 cuando T→0K, alcanzando el estado de orden cuántico máximo donde la entropía residual es prácticamente nula, consistente con S(0K)=0 para un cristal perfecto en el cero absoluto.</p>
        </div>

        <div className="theory-subsection">
          <h3>Refrigeración dilución helio-3 helio-4 temperatura 2milikelvin física estado sólido qubits superconductores computación cuántica detectores partículas</h3>
          <p>El refrigerador de dilución explota las propiedades cuánticas de la mezcla de dos isótopos de helio: helio-3 (³He, fermión con espín 1/2, raro y costoso) y helio-4 (⁴He, bosón con espín 0, abundante). Por debajo de 0.87K se produce una separación espontánea de fases: una fase concentrada en ³He y otra fase diluida donde el ³He (concentración ~6.4% en equilibrio) se disuelve en ⁴He superfluido de viscosidad cero. La dilución endotérmica del ³He desde la fase concentrada a la diluida en la cámara de mezcla absorbe calor del entorno, proporcionando refrigeración continua con temperaturas mínimas alcanzables de 2mK=0.002K. Una bomba de circulación extrae ³He diluido, lo recomprime y enfría, retornándolo a la fase concentrada para cerrar el ciclo.</p>
          <p>La potencia de refrigeración típica es ~400μW a 100mK, suficiente para estabilizar experimentos de física de bajas temperaturas. Las aplicaciones críticas incluyen: (1) Qubits superconductores para computación cuántica (procesadores de Google Sycamore, IBM Quantum, Rigetti) con 50 a 100 qubits operando a 10-15mK para maximizar tiempos de coherencia cuántica T1 (relajación energética ~100μs) y T2 (desfase ~50μs), minimizando excitaciones térmicas que causan errores cuánticos; (2) Detectores de partículas bolométricos para búsqueda de materia oscura (experimentos CDMS, SuperCDMS) que miden mínimos depósitos de energía (&lt;1keV) de hipotéticas WIMPs mediante cambios de temperatura en cristales de germanio a 20mK; (3) Investigación fundamental de propiedades cuánticas de materia condensada como superconductividad no convencional, fases topológicas y líquidos de espín.</p>
          <p>Los refrigeradores de dilución comerciales (fabricantes Oxford Instruments, Bluefors) cuestan entre 500000 y 1000000€ y operan continuamente durante meses enfriando muestras experimentales en criostatos de vacío con aislamiento térmico multicapa. El consumo eléctrico es ~10kW para compresores y bombas. Desde la perspectiva de la Tercera Ley de la Termodinámica, la imposibilidad de alcanzar el cero absoluto (0K) mediante un número finito de procesos se manifiesta claramente: al descender la temperatura de 10mK a 2mK se requiere un esfuerzo exponencialmente mayor debido a que la capacidad calorífica C→0 cuando T→0 según la ley de Debye C∝T³ para sólidos, haciendo progresivamente más difícil extraer calor residual. El límite termodinámico fundamental S(0K)=0 es asintóticamente inalcanzable en la práctica.</p>
        </div>

        <div className="theory-subsection">
          <h3>Superconductividad alta temperatura YBa₂Cu₃O₇ 92K nitrógeno líquido 77K resistencia cero aplicación cables transmisión motores levitación magnética</h3>
          <p>Los superconductores de alta temperatura son materiales cerámicos cupratos como YBa₂Cu₃O₇ (YBCO, itrio-bario-cobre-oxígeno) con temperatura crítica T_c=92K, superior al punto de ebullición del nitrógeno líquido (77K a 1atm). Este avance revolucionario descubierto por Bednorz y Müller en 1986 (Nobel Física 1987) permite refrigeración económica y accesible (~0.20€/litro N₂ líquido) comparada con helio líquido (4.2K, ~500€/litro), abriendo aplicaciones tecnológicas viables. Por debajo de T_c, el YBCO presenta resistencia eléctrica exactamente cero, capacidad de transportar densidades de corriente crítica J_c≈10⁶A/cm² (1000 veces superior al cobre), y campo magnético crítico H_c≈100 Tesla para superconductores tipo II con estructura de vórtices de Abrikosov.</p>
          <p>Las aplicaciones comerciales incluyen: (1) Cables de transmisión eléctrica superconductores que eliminan pérdidas resistivas (5-10% en redes convencionales), instalados en proyectos piloto como la SmartGrid de la ciudad de Chicago y el proyecto Ampacimon en Europa, transportando gigavatios en secciones compactas refrigeradas con N₂ líquido; (2) Motores y generadores eléctricos superconductores ultra-compactos de alta potencia en buques de propulsión eléctrica (clase Zumwalt de la US Navy con motores de 36.5MW); (3) Levitación magnética (efecto Meissner de expulsión de campo magnético) en trenes Maglev como el japonés L0 Series que alcanza 600km/h flotando sobre rieles superconductores con fricción prácticamente nula; (4) Limitadores de corriente superconductores (SFCL) para protección de redes eléctricas contra cortocircuitos, transicionando instantáneamente a estado normal y limitando corriente; (5) Transformadores superconductores ultra-compactos con eficiencia 99.5%, eliminando pérdidas por corrientes parásitas.</p>
          <p>La investigación actual busca comprender el mecanismo microscópico de superconductividad en cupratos (formación de pares de Cooper mediados por fonones, polarones o fluctuaciones magnéticas) y descubrir materiales con T_c aún más alta. Los superconductores de hierro (FeAs) alcanzan T_c≈55K, y recientemente los hidruros de lantano bajo presión extrema (LaH₁₀ a 190GPa≈1.9 millones de atmósferas) han alcanzado el récord de T_c=250K (-23°C), aunque la presión requerida es impráctica tecnológicamente. El objetivo último es superconductividad a temperatura ambiente y presión atmosférica. Desde la Tercera Ley de la Termodinámica, la entropía del estado superconductor es menor que la del estado normal a la misma temperatura T{'<'}T_c, ya que los electrones forman pares de Cooper con orden cuántico de largo alcance, reduciendo grados de libertad térmicos, consistente con S_super{'<'}S_normal y ambos tendiendo a cero cuando T→0K.</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2><span className="emoji-icon">📜</span> Contexto Histórico</h2>
        
        <div className="theory-subsection">
          <h3>1906 Walther Nernst teorema calor Tercera Ley entropía cero temperatura absoluta principio inalcanzabilidad Nobel Química 1920</h3>
          <p>Walther Nernst, físico-químico alemán y profesor en Berlín, postuló en 1906 su célebre teorema del calor tras estudiar el comportamiento de reacciones químicas a temperaturas próximas al cero absoluto. Observó experimentalmente que la variación de entropía en reacciones químicas ΔS→0 cuando T→0K, conduciendo a la formulación de la Tercera Ley de la Termodinámica: "La entropía de una sustancia pura en forma de cristal perfecto tiende a cero cuando la temperatura se aproxima al cero absoluto", matemáticamente S(0K)=0. Este principio fundamental fue publicado formalmente en 1912 y proporcionó un punto de referencia absoluto para calcular entropías absolutas de sustancias, superando la limitación de la Segunda Ley que solo determinaba cambios de entropía ΔS.</p>
          <p>El teorema de Nernst permitió calcular constantes de equilibrio químico a cualquier temperatura mediante datos termodinámicos tabulados (ΔG°=ΔH°-TΔS°), con aplicaciones fundamentales en química industrial y metalurgia. Nernst también formuló el principio de inalcanzabilidad del cero absoluto: "Es imposible alcanzar el cero absoluto mediante un número finito de procesos termodinámicos", consecuencia directa de que la capacidad calorífica C→0 cuando T→0, requiriendo extraer cantidades infinitesimales de calor residual con esfuerzo progresivamente mayor. Sus contribuciones abarcan termodinámica, electroquímica (ecuación de Nernst para potenciales de pila), y la invención de la lámpara Nernst de filamento de óxidos metálicos que compitió con la lámpara incandescente de Edison en la década de 1900.</p>
          <p>Walther Nernst recibió el Premio Nobel de Química en 1920 por su trabajo en termoquímica, reconociendo su contribución al enlace entre ciencia fundamental e industria. Durante la Primera Guerra Mundial, participó en el desarrollo de gases tóxicos para guerra química junto a Fritz Haber, controversia ética que marcó la imagen pública de científicos alemanes de la época. La síntesis de amoníaco mediante el proceso Haber-Bosch (Haber Nobel Química 1918), calculada termodinámicamente usando datos de entropía absoluta derivados del teorema de Nernst, revolucionó la agricultura mundial permitiendo producción masiva de fertilizantes nitrogenados, pero también de explosivos militares. La Tercera Ley de Nernst permanece como pilar fundamental de la termodinámica clásica y cuántica, esencial para criogenia, física de bajas temperaturas y materiales cuánticos.</p>
        </div>

        <div className="theory-subsection">
          <h3>1911 Heike Kamerlingh Onnes descubrimiento superconductividad mercurio 4.2K resistencia cero Nobel Física 1913 licuefacción helio 1908</h3>
          <p>Heike Kamerlingh Onnes, físico experimental holandés y director del laboratorio criogénico de la Universidad de Leiden, logró en 1908 la primera licuefacción de helio alcanzando 4.2K=−269°C, récord mundial de bajas temperaturas de la época que abrió una nueva frontera en física experimental. Su laboratorio se convirtió en el centro mundial pionero en criogenia, desarrollando técnicas de aislamiento térmico, bombeo de vacío y medición de propiedades físicas a temperaturas extremas. En 1911, Kamerlingh Onnes realizó experimentos midiendo la resistencia eléctrica de mercurio ultrapuro durante enfriamiento progresivo, esperando observar la disminución gradual predicha por la teoría clásica de conducción eléctrica en metales.</p>
          <p>El 8 de abril de 1911, Kamerlingh Onnes observó un fenómeno completamente inesperado: al alcanzar T_c=4.19K, la resistencia eléctrica del mercurio cayó abruptamente a cero dentro de la resolución experimental (~10⁻⁶Ω), desapareciendo totalmente en lugar de disminuir asintóticamente. Denominó este nuevo estado "superconductividad" (supergeleidend en holandés), el primer fenómeno cuántico observable a escala macroscópica descubierto antes del desarrollo de la mecánica cuántica por Schrödinger y Heisenberg en 1925-1926. Kamerlingh Onnes recibió el Premio Nobel de Física en 1913 "por sus investigaciones sobre las propiedades de la materia a bajas temperaturas que condujeron, entre otras cosas, a la producción de helio líquido", reconocimiento que precedió al pleno entendimiento teórico del fenómeno.</p>
          <p>La investigación posterior reveló que numerosos metales presentan superconductividad: estaño (T_c=3.7K), plomo (7.2K), niobio (9.2K). El efecto Meissner, descubierto por Walther Meissner en 1933, demostró que los superconductores expulsan completamente el campo magnético de su interior (diamagnetismo perfecto χ=−1), permitiendo levitación magnética de imanes permanentes sobre superconductores enfriados. La teoría microscópica BCS (Bardeen-Cooper-Schrieffer, Nobel 1972) explicó en 1957 que la superconductividad surge de la formación de pares de Cooper: parejas de electrones ligados por interacción mediada por fonones (vibraciones de la red cristalina) que se comportan como bosones, condensando en un estado cuántico coherente de energía mínima con gap de energía ΔE≈k_BT_c. Las aplicaciones actuales incluyen imanes de RMN, aceleradores de partículas (LHC), cables de transmisión sin pérdidas y qubits superconductores para computación cuántica, testimonio de un descubrimiento que revolucionó física y tecnología en el siglo XX.</p>
        </div>

        <div className="theory-subsection">
          <h3>1927 Giauque Debye enfriamiento adiabático desmagnetización sales paramagnéticas temperatura 0.25K aplicación laboratorio criogenia</h3>
          <p>En 1927, William Giauque (Estados Unidos) y Peter Debye (Países Bajos-Alemania) propusieron independientemente un método revolucionario para alcanzar temperaturas por debajo de 1K: el enfriamiento adiabático por desmagnetización de sales paramagnéticas. El principio termodinámico se basa en reducir la entropía magnética de un sistema mediante aplicación de un campo magnético intenso (~2Tesla=20000 gauss) a una muestra paramagnética como sulfato de gadolinio Gd₂(SO₄)₃ inicialmente a temperatura T_i≈1K en contacto térmico con un baño de helio líquido. El campo magnético alinea los espines electrónicos desapareados de los iones Gd³⁺, aumentando el orden magnético y disminuyendo la entropía magnética S_mag, mientras el calor generado se disipa al baño de helio manteniendo la temperatura constante.</p>
          <p>Posteriormente, se aísla térmicamente la muestra (proceso adiabático: Q=0) y se retira lentamente el campo magnético externo. Los espines electrónicos se desalinean aleatoriamente por agitación térmica, aumentando S_mag nuevamente. Dado que el proceso es adiabático y reversible, la entropía total se conserva: ΔS_total=ΔS_red+ΔS_mag=0, donde S_red es la entropía de la red cristalina (fonones). El aumento de entropía magnética debe compensarse con una disminución de entropía de la red, lo que solo puede lograrse reduciendo la temperatura: T_f{'<'}T_i. William Giauque realizó la primera demostración experimental exitosa en 1933 en su laboratorio de Berkeley, alcanzando temperaturas de 0.25K=250mK, récord mundial que posteriormente mejoró hasta 0.004K=4mK, valíendole el Premio Nobel de Química en 1949 por sus contribuciones a termodinámica de bajas temperaturas.</p>
          <p>El enfriamiento por desmagnetización adiabática nuclear (ADR nuclear) extiende el método a espines nucleares en lugar de electrónicos, alcanzando temperaturas récord de ~1μK (microkelvin=10⁻⁶K) en metales como cobre. Los espines nucleares tienen momentos magnéticos 1000 veces menores que los electrónicos (relación masa protón/electrón ≈1836), requiriendo campos magnéticos superiores (8-10Tesla) y temperaturas iniciales más bajas (10mK) obtenidas con refrigeradores de dilución. Este método es fundamental en investigación de materia condensada a temperaturas extremas, donde se observan transiciones de fase cuánticas, superfluidez en helio-3, y comportamientos exóticos de sólidos cuánticos. La Tercera Ley de la Termodinámica se manifiesta claramente: conforme T→0K, la capacidad calorífica C→0 según la ley de Debye para sólidos C∝T³, haciendo exponencialmente más difícil extraer calor residual, confirmando la inalcanzabilidad práctica del cero absoluto pese a poder aproximarse extraordinariamente (nanokelvin en gases ultrafríos).</p>
        </div>

        <div className="theory-subsection">
          <h3>1995 Cornell Wieman Ketterle condensado Bose-Einstein 170nanokelvin rubidio-87 sodio-23 Nobel Física 2001 estado materia predicción Einstein 1925</h3>
          <p>Eric Cornell y Carl Wieman del JILA (Joint Institute for Laboratory Astrophysics, Colorado) y Wolfgang Ketterle del MIT (Massachusetts) lograron independientemente en 1995 la primera observación experimental del condensado de Bose-Einstein (BEC) en gases ultrafríos de rubidio-87 (⁸⁷Rb) a 170nK y sodio-23 (²³Na) a 2μK respectivamente, cumpliendo una predicción teórica formulada 70 años antes. Satyendra Nath Bose desarrolló en 1924 una nueva estadística cuántica para fotones (partículas de luz) que Albert Einstein extendió inmediatamente a átomos con espín entero (bosones) en 1925, prediciendo que por debajo de una temperatura crítica T_c una fracción macroscópica de bosones ocuparía el estado cuántico fundamental con momento p=0, formando un "superfluido" con propiedades cuánticas coherentes observables macroscópicamente.</p>
          <p>La realización experimental requirió desarrollar técnicas sofisticadas de enfriamiento láser: (1) Enfriamiento Doppler mediante seis haces láser contrapropagados desafinados ligeramente por debajo de la transición atómica, frenando átomos por presión de radiación (cada fotón absorbido transfiere momento ħk) hasta alcanzar temperaturas de ~100μK limitadas por retroceso fotónico, una técnica por la que Steven Chu, Claude Cohen-Tannoudji y William Phillips recibieron el Nobel de Física 1997; (2) Captura en trampa magneto-óptica (MOT) combinando gradientes de campo magnético con luz láser polarizada para confinar espacialmente ~10⁷ átomos en volumen milimétrico; (3) Enfriamiento evaporativo selectivo reduciendo progresivamente la profundidad del potencial de la trampa magnética, permitiendo escapar solo a los átomos más energéticos (cola de alta energía de la distribución de velocidades de Maxwell-Boltzmann), llevando la temperatura final a 170nK=1.7×10⁻⁷K.</p>
          <p>La observación del BEC se realizó mediante imagen de absorción: apagando súbitamente la trampa magnética, la nube atómica cae libremente expandiéndose, y un pulso de luz láser proyecta la sombra de los átomos sobre una cámara CCD. Por encima de T_c, la distribución espacial es gaussiana (distribución térmica normal); por debajo de T_c, aparece un pico central estrecho característico del condensado donde ~80% de los átomos ocupan el estado fundamental con longitud de onda de De Broglie λ_dB=h/√(2πmk_BT)≈1μm comparable al espaciado interatómico, formando una función de onda cuántica coherente con fase definida observable en experimentos de interferencia entre dos BECs. Cornell, Wieman y Ketterle recibieron el Premio Nobel de Física 2001 "por el logro de la condensación de Bose-Einstein en gases diluidos de átomos alcalinos, y por estudios tempranos fundamentales de las propiedades de los condensados". El BEC abrió un campo nuevo en física: materia cuántica ultrafría, con aplicaciones en simulación cuántica de sistemas de muchos cuerpos, metrología de precisión (relojes atómicos, interferómetros), y computación cuántica con átomos neutros, representando la exploración experimental más cercana al cero absoluto y la Tercera Ley de la Termodinámica.</p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span className="emoji-icon">💡</span> Curiosidades y Anécdotas</h2>
        
        <div className="theory-subsection">
          <h3>Helio-3 superfluido temperatura 2.6milikelvin viscosidad cero conductividad térmica infinita pares Cooper fermiones analogía superconductor BCS</h3>
          <p>El helio-3 (³He) es un isótopo extremadamente raro del helio (solo 0.0001% del helio natural terrestre) clasificado como fermión con espín nuclear 1/2, obedeciendo por tanto la estadística de Fermi-Dirac que prohíbe que dos fermiones ocupen el mismo estado cuántico (principio de exclusión de Pauli). A diferencia del helio-4 que presenta superfluidez a 2.17K, el ³He requiere temperaturas extraordinariamente bajas para exhibir superfluidez: la temperatura crítica es T_c=2.6mK=0.0026K bajo presión de ~30bar. Por debajo de T_c, el ³He superfluido manifiesta viscosidad exactamente cero (flujo sin fricción a través de capilares), conductividad térmica infinita (propagación de ondas térmicas "segundo sonido"), y fenómenos cuánticos macroscópicos análogos a la superconductividad.</p>
          <p>El mecanismo microscópico de superfluidez en ³He involucra formación de pares de Cooper: dos átomos de ³He con espines opuestos se ligan mediante una interacción atractiva débil mediada por intercambio de fluctuaciones de espín, formando un bosón compuesto (espín total 0 o 1) que puede condensar en un estado cuántico coherente similar a la teoría BCS de superconductividad. Las fases superfluidas ³He-A y ³He-B presentan extraordinaria complejidad: la fase A exhibe quiralidad y momento angular orbital L=1 con estructura de orden anisotrópica, mientras la fase B es isotrópica con apareamiento de espín-triplete. Estas propiedades se investigan mediante refrigeradores de dilución que alcanzan 0.1mK en cámaras experimentales presurizadas con ³He líquido.</p>
          <p>Las aplicaciones fundamentales incluyen simulación de física de muchos cuerpos cuánticos, comprensión de estados exóticos de materia, y analogías astrofísicas con interiores de estrellas de neutrones donde quarks pueden formar pares en estado superfluido a densidades extremas 10¹⁵g/cm³. David Lee, Douglas Osheroff y Robert Richardson descubrieron las fases superfluidas del ³He en 1972 en Cornell University, recibiendo el Premio Nobel de Física 1996 "por su descubrimiento de superfluidez en helio-3", abriendo un campo nuevo en física cuántica de materia condensada. Desde la perspectiva de la Tercera Ley, la entropía del ³He superfluido tiende a cero cuando T→0K debido al orden cuántico macroscópico de la función de onda de pares de Cooper, consistente con S(0K)=0 para el estado fundamental.</p>
        </div>

        <div className="theory-subsection">
          <h3>Entropía residual vidrio desorden congelado estructura amorfa violación aparente Tercera Ley metaestabilidad equilibrio temperatura infinita</h3>
          <p>El vidrio es un sólido amorfo con estructura microscópica desordenada similar a un líquido pero con viscosidad macroscópica tan alta (~10¹³poise) que el tiempo de relajación estructural supera años o siglos a temperatura ambiente. La transición vítrea ocurre a temperatura T_g (por ejemplo, ~600°C para vidrio de ventana SiO₂) cuando un líquido subenfriado se solidifica sin cristalizar debido a enfriamiento rápido que impide la organización periódica de átomos. Esta estructura congelada desordenada posee múltiples configuraciones metaestables equivalentes en energía, implicando un número significativo de microestados Ω accesibles incluso a 0K, resultando en entropía residual S(0K){'>'} según S=k_B ln(Ω).</p>
          <p>Esta entropía residual aparentemente viola la Tercera Ley de la Termodinámica que establece S(0K)=0 para cristales perfectos en equilibrio. La resolución radica en que el vidrio no está en equilibrio termodinámico verdadero: es un estado metaestable cinéticamente atrapado. Si se calentara el vidrio a temperatura suficientemente alta y se mantuviera durante tiempo infinito, eventualmente cristalizaría alcanzando el estado de equilibrio con S(0K)=0. La transición de Kauzmann predice una temperatura T_K{'<'}T_g donde la entropía del líquido subenfriado igualaría la del cristal, generando la "paradoja de Kauzmann": ¿qué sucede físicamente en T_K? El debate continúa sobre si la transición vítrea es una transición de fase verdadera (primer o segundo orden) o un fenómeno puramente cinético con tiempos de relajación divergentes τ→∞ cuando T→T_K.</p>
          <p>Las aplicaciones tecnológicas del vidrio son ubicuas: ventanas arquitectónicas, envases, fibra óptica de telecomunicaciones (SiO₂ ultrapuro con atenuación ~0.2dB/km a 1550nm), displays de pantallas LCD/OLED (vidrios de aluminosilicato), y polímeros amorfos en plásticos. Otros materiales presentan entropía residual genuina: el hielo Ih tiene S_residual≈3.4J/(K·mol) debido al desorden en orientaciones de moléculas H₂O en la red cristalina (existen múltiples configuraciones de puentes de hidrógeno con energía equivalente). Desde la perspectiva de la Tercera Ley, solo sistemas en equilibrio termodinámico verdadero satisfacen S(0K)=0; los sistemas metaestables como vidrios violan aparentemente esta ley pero no fundamentalmente, ya que no están en el estado de mínima energía accesible en tiempo infinito.</p>
        </div>

        <div className="theory-subsection">
          <h3>Récord temperatura baja 38picokelvin gas sodio MIT 2003 deceleración expansión microgravedad laboratorio espacial futuro</h3>
          <p>El récord de temperatura más baja alcanzada en laboratorio es 38pK (picokelvin=38×10⁻¹²K), logrado en 2003 por el grupo de Wolfgang Ketterle en MIT con un gas de átomos de sodio enfriado mediante técnicas de láser y confinamiento magnético. El proceso comienza con enfriamiento láser Doppler hasta ~100μK, seguido de enfriamiento evaporativo en trampa magnética hasta formar un condensado de Bose-Einstein a ~500nK. Posteriormente, se desacelera la expansión del condensado mediante un campo magnético con gradiente espacial controlado que frena los átomos, reduciendo su velocidad promedio a 0.4mm/s. A esta velocidad, la energía cinética traslacional E_cin=½mv²≈10⁻³²J corresponde a una temperatura efectiva de 38pK según la equipartición de energía E_cin=½k_BT.</p>
          <p>La limitación fundamental en Tierra es la gravedad: los átomos ultrafríos caen libremente a 9.8m/s², permitiendo observarlos solo durante ~10ms antes de que salgan del campo de visión de cámaras de detección. Esta restricción motivó el desarrollo del Cold Atom Lab (CAL) instalado en la Estación Espacial Internacional (ISS) en 2018 por la NASA. En condiciones de microgravedad (aceleración residual ~10⁻⁶g), los condensados flotan libremente durante segundos o minutos, permitiendo alcanzar temperaturas efectivas de 50pK y realizar experimentos de física cuántica con tiempos de observación ~1000 veces más largos. La microgravedad también permite trampas más débiles, reduciendo perturbaciones sobre los átomos y mejorando la sensibilidad de mediciones.</p>
          <p>Las aplicaciones científicas incluyen investigación de condensados de Bose-Einstein con interacciones ajustables mediante resonancias de Feshbach, simulación cuántica de sistemas de muchos cuerpos (modelos de Hubbard, transiciones de fase cuánticas), y tests de precisión de relatividad general mediante interferometría atómica sensible a campos gravitatorios con resolución ~10⁻¹⁵g. Detectores de ondas gravitacionales del futuro podrían emplear interferómetros atómicos en espacio con brazos de kilómetros, sensibles a ondas de frecuencias 0.1-10Hz inaccesibles a LIGO terrestre (10-1000Hz). Desde la perspectiva de la Tercera Ley, alcanzar 38pK representa acercarse extraordinariamente al cero absoluto, pero la inalcanzabilidad fundamental S(0K)=0 mediante procesos finitos permanece: temperaturas sub-picokelvin requerirían técnicas aún más sofisticadas con rendimientos decrecientes exponencialmente al aproximarse a 0K.</p>
        </div>

        <div className="theory-subsection">
          <h3>Temperatura negativa Kelvin inversión población distribución energía láser sistemas acotados spin nuclear entropía decreciente orden superior</h3>
          <p>La temperatura negativa en kelvin es un concepto contraintuitivo que no significa "más frío que el cero absoluto" sino "más caliente que infinito positivo" en el sentido termodinámico. Ocurre en sistemas cuánticos con espectro de energía acotado superiormente (número finito de niveles energéticos) cuando se invierte la población: la mayoría de partículas ocupan estados excitados de alta energía y solo una minoría el estado fundamental. En equilibrio térmico normal a temperatura positiva T{'>'} la distribución de Boltzmann N(E)∝exp(-E/k_BT) predice población decreciente con energía. A temperatura negativa T{'<'}0, la población aumenta con energía, situación termodinámicamente consistente mediante la definición fundamental β=1/(k_BT) donde β se vuelve negativo.</p>
          <p>Los sistemas con temperatura negativa incluyen: (1) Espines nucleares en campos magnéticos: en resonancia magnética nuclear (RMN), un pulso de radiofrecuencia de 180° invierte las poblaciones de niveles Zeeman, creando transitoriamente temperatura negativa T≈-10⁻⁶K que dura microsegundos antes de relajación T1 al equilibrio térmico; (2) Láseres: la inversión de población entre niveles atómicos o moleculares mediante bombeo óptico (excitación selectiva con luz externa) crea temperatura negativa efectiva, permitiendo emisión estimulada coherente que amplifica luz; (3) Sistemas ópticos no lineales: en 2013, investigadores de LMU Munich crearon temperatura negativa en gas cuántico bosónico de átomos de potasio confinado en trampa óptica, alcanzando temperaturas de -10⁻⁹K (nanokelvin negativos) mediante ingeniería de potencial periódico que acota la energía cinética máxima.</p>
          <p>Desde la perspectiva de la entropía, sistemas a temperatura negativa tienen entropía decreciente como función de energía: dS/dE=1/T{'<'}0, lo que aparentemente contradice la Segunda Ley (entropía debe aumentar). Sin embargo, la resolución es que estos sistemas están en estados de orden superior con entropía S menor que el equilibrio térmico ordinario: la inversión de población representa configuración altamente organizada mantenida por suministro externo continuo de energía (bombeo láser, pulsos RF). Al cesar el bombeo, el sistema relaja hacia equilibrio térmico positivo aumentando entropía. Respecto a la Tercera Ley, la temperatura negativa no viola S(0K)=0 porque T negativa representa estados excitados lejos del estado fundamental; cuando T→0K desde valores negativos (pasando por T=-∞, luego T=+∞, bajando a +0K), el sistema alcanza eventualmente el estado fundamental con entropía cero, consistente con la formulación rigurosa de la Tercera Ley en términos de la función β=1/(k_BT).</p>
        </div>
      </div>

      <div className="theory-summary-section">
        <h2><span className="emoji-icon">📋</span> Resumen de Conceptos Clave</h2>
        
        <ul className="key-points-list">
          <li><strong>Tercera Ley Termodinámica</strong>: la entropía de una sustancia pura en forma de cristal perfecto tiende a cero cuando la temperatura se aproxima al cero absoluto, S(0K)=0, representando el estado de orden máximo donde los átomos ocupan posiciones bien definidas en la red cristalina periódica sin desorden térmico. Este principio proporciona un punto de referencia absoluto para calcular entropías absolutas de sustancias, superando la limitación de la Segunda Ley que solo determina cambios de entropía ΔS.</li>
          <li><strong>Principio de inalcanzabilidad</strong>: es imposible alcanzar el cero absoluto 0K=-273.15°C mediante un número finito de procesos termodinámicos, consecuencia directa de que la capacidad calorífica C→0 cuando T→0, requiriendo extraer cantidades infinitesimales de calor residual con esfuerzo exponencialmente creciente. Esta limitación termodinámica fundamental distingue el cero absoluto de un límite práctico: no es meramente difícil técnicamente, sino imposible en principio según las leyes de la termodinámica.</li>
          <li><strong>Capacidad calorífica a bajas temperaturas</strong>: en el límite T→0K, la capacidad calorífica de sólidos sigue la ley de Debye C∝T³ (fonones acústicos, vibraciones cuantizadas de la red cristalina), mientras que la contribución electrónica en metales es C_electrones∝T (electrones libres en banda de conducción). Este comportamiento cuántico C→0 cuando T→0 explica la inalcanzabilidad del cero absoluto: al descender temperatura de 1mK a 0.1mK se requiere extraer solo Q=∫CdT≈C_promedio×ΔT, pero C_promedio disminuye drásticamente haciendo progresivamente más difícil cada década de reducción.</li>
          <li><strong>Entropía residual y metaestabilidad</strong>: algunos materiales como vidrios y hielo hexagonal Ih presentan entropía residual S(0K){'>'} debido a desorden congelado en configuraciones metaestables con múltiples microestados degenerados. Esta aparente violación de la Tercera Ley se resuelve reconociendo que solo sistemas en equilibrio termodinámico verdadero satisfacen S(0K)=0; los vidrios no están en equilibrio sino atrapados cinéticamente en mínimos locales de energía libre. Si se calentaran a temperatura suficientemente alta durante tiempo infinito, cristalizarían alcanzando el estado fundamental con entropía cero.</li>
          <li><strong>Aplicaciones tecnológicas criogénicas</strong>: la Tercera Ley gobierna tecnologías que operan a temperaturas extremadamente bajas: helio líquido a 4.2K para superconductores en imanes de resonancia magnética nuclear (RMN) hospitalaria y aceleradores de partículas (LHC del CERN con 27km de imanes a 1.9K), refrigeradores de dilución alcanzando 2mK para qubits superconductores en computación cuántica (Google, IBM, procesadores de 100+ qubits), condensados de Bose-Einstein a 170nK en física atómica ultrafría, y criogenia espacial para detectores infrarrojos en telescopios (James Webb a 7K). Cada aplicación enfrenta desafíos termodinámicos impuestos por C→0.</li>
          <li><strong>Fenómenos cuánticos macroscópicos</strong>: al aproximarse al cero absoluto, las propiedades cuánticas microscópicas se manifiestan a escala macroscópica observable: superconductividad (resistencia eléctrica exactamente cero, levitación magnética por efecto Meissner), superfluidez (viscosidad cero, flujo sin fricción en capilares), condensación de Bose-Einstein (ocupación macroscópica del estado fundamental con función de onda coherente observable en interferencia), y coherencia cuántica de largo alcance en qubits. Estos fenómenos representan estados de orden cuántico máximo con entropía mínima S→0, consistente con la Tercera Ley, y son esenciales para tecnologías cuánticas emergentes del siglo XXI.</li>
        </ul>
      </div>
    </>
  );
};

export default TerceraLeyTheory;
