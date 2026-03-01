import { Concept, Important, Example } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "Dilatación Térmica",
  descripcion: "Por qué los materiales se expanden con el calor y se contraen con el frío",
  educationLevel: "ESO",
  levels: ['ESO'],
  isTheoryOnly: true
};

const DilatacionTermica = () => {
  return (
    <>
      <Concept 
        title="¿Qué es la dilatación térmica?" 
        color="blue"
        icon="📏"
      >
        <p>
          La dilatación térmica es el aumento de tamaño de un material cuando 
          se calienta. Cuando se enfría, ocurre lo contrario: contracción térmica.
        </p>
        <div className="destacado">
          <p>
            💡 Explicación: Al calentarse, las moléculas vibran más rápido y 
            necesitan más espacio. Al enfriarse, vibran menos y se juntan más.
          </p>
        </div>
      </Concept>

      <Concept 
        title="Tipos de dilatación" 
        color="purple"
        icon="📐"
      >
        <div className="info-box">
          <h3>1. Dilatación Lineal</h3>
          <p>El objeto se alarga en una dirección (longitud)</p>
          <ul>
            <li>Ejemplos: Cables, rieles de tren, puentes</li>
            <li>Efecto: Aumenta la longitud</li>
          </ul>

          <h3>2. Dilatación Superficial</h3>
          <p>El objeto se expande en dos dimensiones (área)</p>
          <ul>
            <li>Ejemplos: Láminas metálicas, ventanas</li>
            <li>Efecto: Aumenta el área</li>
          </ul>

          <h3>3. Dilatación Volumétrica</h3>
          <p>El objeto se expande en tres dimensiones (volumen)</p>
          <ul>
            <li>Ejemplos: Líquidos en termómetros, gases</li>
            <li>Efecto: Aumenta el volumen</li>
          </ul>
        </div>
      </Concept>

      <Concept 
        title="Ejemplos cotidianos de dilatación" 
        color="green"
        icon="🏠"
      >
        <div className="ejemplos-grid">
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🌡️</span>
            <p>
              Termómetro de mercurio: El mercurio se dilata con el calor 
              y sube por el tubo. Así medimos la temperatura.
            </p>
          </div>
          
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🚂</span>
            <p>
              Rieles de tren: Se dejan espacios entre rieles para que 
              puedan dilatarse en verano sin deformarse.
            </p>
          </div>
          
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🌉</span>
            <p>
              Puentes: Tienen juntas de dilatación para permitir que 
              el metal se expanda y contraiga con la temperatura.
            </p>
          </div>

          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🔩</span>
            <p>
              Tapa atascada: Calentar la tapa con agua caliente la dilata 
              y se abre más fácilmente.
            </p>
          </div>

          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🪟</span>
            <p>
              Ventanas de aluminio: En verano se dilatan y pueden atascarse. 
              En invierno se contraen y quedan holgadas.
            </p>
          </div>

          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🎈</span>
            <p>
              Globo al sol: El aire dentro se dilata y el globo se hincha 
              más. Si hace mucho calor, puede explotar.
            </p>
          </div>
        </div>
      </Concept>

      <Concept 
        title="Materiales y su dilatación" 
        color="orange"
        icon="🔧"
      >
        <p>
          No todos los materiales se dilatan igual. Algunos se expanden mucho, otros muy poco.
        </p>

        <table style={{width: '100%', borderCollapse: 'collapse', margin: '1em 0'}}>
          <thead>
            <tr style={{borderBottom: '2px solid #ddd'}}>
              <th style={{padding: '0.5em', textAlign: 'left'}}>Material</th>
              <th style={{padding: '0.5em', textAlign: 'center'}}>Dilatación</th>
              <th style={{padding: '0.5em', textAlign: 'left'}}>Observación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{padding: '0.5em'}}>Aluminio</td>
              <td style={{padding: '0.5em', textAlign: 'center'}}>Alta</td>
              <td style={{padding: '0.5em'}}>Se dilata mucho, ventanas se atascan</td>
            </tr>
            <tr>
              <td style={{padding: '0.5em'}}>Acero</td>
              <td style={{padding: '0.5em', textAlign: 'center'}}>Media</td>
              <td style={{padding: '0.5em'}}>Usado en construcción, dilatación moderada</td>
            </tr>
            <tr>
              <td style={{padding: '0.5em'}}>Vidrio</td>
              <td style={{padding: '0.5em', textAlign: 'center'}}>Baja</td>
              <td style={{padding: '0.5em'}}>Se dilata poco, puede romperse con cambios bruscos</td>
            </tr>
            <tr>
              <td style={{padding: '0.5em'}}>Hormigón</td>
              <td style={{padding: '0.5em', textAlign: 'center'}}>Baja</td>
              <td style={{padding: '0.5em'}}>Similar al acero, por eso se usan juntos</td>
            </tr>
            <tr>
              <td style={{padding: '0.5em'}}>Agua</td>
              <td style={{padding: '0.5em', textAlign: 'center'}}>Especial</td>
              <td style={{padding: '0.5em'}}>Se expande al congelarse (anomalía)</td>
            </tr>
          </tbody>
        </table>
      </Concept>

      <Concept 
        title="El caso especial del agua" 
        color="blue"
        icon="💧"
      >
        <p>
          El agua es única: se expande al congelarse en lugar de contraerse. 
          Por eso el hielo flota.
        </p>

        <div className="info-box">
          <h3>¿Por qué es importante?</h3>
          <ul>
            <li>
              Hielo flota: Si el hielo fuera más denso que el agua, se hundiría. 
              Los lagos se congelarían de abajo arriba y los peces morirían.
            </li>
            <li>
              Tuberías rotas: El agua congelada en tuberías se expande y las rompe. 
              Por eso hay que protegerlas en invierno.
            </li>
            <li>
              Rocas agrietadas: El agua entra en grietas, se congela, se expande 
              y rompe la roca (meteorización).
            </li>
            <li>
              Botellas de vidrio: Nunca metas una botella llena de agua en el 
              congelador, puede explotar.
            </li>
          </ul>
        </div>

        <Important>
          <p>
            ⚠️ Dato curioso: El agua alcanza su máxima densidad a 4°C, no a 0°C. 
            Por eso el agua más fría (y densa) se hunde al fondo de los lagos, mientras el hielo 
            flota en la superficie.
          </p>
        </Important>
      </Concept>

      <Example 
        title="Ejemplo: Abrir una tapa atascada"
        problem="Tienes un frasco de mermelada con la tapa metálica atascada. ¿Cómo usar la dilatación térmica para abrirlo?"
        solution={
          <div style={{color: '#1f2937'}}>
            <p>Solución:</p>
            <ol>
              <li>
                Calienta solo la tapa: Pon la tapa bajo agua caliente durante 
                30 segundos (no todo el frasco).
              </li>
              <li>
                La tapa se dilata: El metal de la tapa se expande más que el 
                vidrio del frasco porque el metal se dilata más.
              </li>
              <li>
                Se afloja: La tapa ahora es ligeramente más grande y se puede 
                girar más fácilmente.
              </li>
            </ol>

            <p>¿Por qué funciona?</p>
            <ul>
              <li>El metal (tapa) tiene mayor coeficiente de dilatación que el vidrio (frasco)</li>
              <li>Al calentarse, la tapa se expande más que el frasco</li>
              <li>Esto crea un pequeño espacio que permite girar la tapa</li>
            </ul>

            <p>Alternativa: También puedes golpear suavemente el borde de la tapa 
            para romper el sello de vacío.</p>
          </div>
        }
      />

      <Concept 
        title="Aplicaciones en ingeniería" 
        color="red"
        icon="🏗️"
      >
        <p>Juntas de dilatación</p>
        <ul>
          <li>Puentes tienen espacios para que el metal se expanda en verano</li>
          <li>Edificios altos tienen juntas para absorber dilatación</li>
          <li>Carreteras tienen cortes cada ciertos metros</li>
        </ul>

        <p>Cables eléctricos</p>
        <ul>
          <li>Se instalan con cierta holgura (curvatura)</li>
          <li>En verano se dilatan y la curvatura disminuye</li>
          <li>En invierno se contraen y la curvatura aumenta</li>
          <li>Si estuvieran tensos, se romperían en invierno</li>
        </ul>

        <p>Termostatos bimetálicos</p>
        <ul>
          <li>Dos metales con diferente dilatación pegados</li>
          <li>Al calentarse, se curvan porque uno se dilata más</li>
          <li>Esto abre o cierra un circuito eléctrico</li>
          <li>Usado en planchas, calefactores, neveras</li>
        </ul>
      </Concept>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
          <div className="theory-subsection">
            <h3>Puentes e infraestructura: Juntas de expansión para compensación térmica</h3>
            <p>
              El puente Golden Gate de San Francisco, con sus 2737 metros de longitud, es un ejemplo espectacular de cómo la dilatación térmica debe considerarse en el diseño estructural. El acero de la estructura tiene un coeficiente de expansión lineal α = 12×10⁻⁶/°C. Con una diferencia de temperatura entre verano e invierno de aproximadamente 30°C, la variación de longitud es ΔL = αL₀ΔT = (12×10⁻⁶)(2737)(30) ≈ 0.98 m, es decir, casi un metro de cambio dimensional estacional.
            </p>
            <p>
              Para permitir esta expansión sin generar tensiones destructivas, los puentes incorporan juntas de dilatación: ranuras de 5-10 cm que permiten el movimiento libre de la estructura. Sin estas juntas, las tensiones térmicas podrían causar deformaciones, fisuras e incluso el colapso estructural. El hormigón armado, utilizado en pilares y cimientos, tiene un coeficiente de expansión similar (α = 10×10⁻⁶/°C), garantizando compatibilidad térmica entre materiales.
            </p>
            <p>
              El diseño de juntas de expansión es fundamental en ingeniería civil moderna, aplicándose no solo en puentes sino también en vías ferroviarias, edificios de gran altura, autopistas y acueductos. Estas consideraciones térmicas son esenciales para la seguridad y durabilidad a largo plazo de las infraestructuras públicas.
            </p>
        </div>
        <div className="theory-subsection">
          <h3>Termostatos bimetálicos: Control de temperatura mecánico</h3>
            <p>
              Los termostatos bimetálicos explotan ingeniosamente las diferencias en coeficientes de expansión térmica para crear dispositivos de control automático. Consisten en una lámina formada por dos metales diferentes soldados entre sí: típicamente latón (α = 19×10⁻⁶/°C) e invar o acero (α = 12×10⁻⁶/°C). Cuando la temperatura ambiente sube, el latón se dilata más que el acero, causando una curvatura diferencial de la lámina.
            </p>
            <p>
              Esta curvatura mecánica abre un contacto eléctrico, desconectando la calefacción. Cuando la temperatura baja, la lámina se curva en sentido contrario, cerrando el circuito y reactivando el calentador. Este mecanismo de retroalimentación negativa logra un control de temperatura con precisión de ±1°C sin necesidad de electrónica compleja, utilizando únicamente componentes mecánicos robustos y económicos.
            </p>
            <p>
              Los termostatos bimetálicos se encuentran en innumerables aplicaciones: termostatos clásicos de calefacción, planchas domésticas, hornos, sistemas HVAC antiguos, tostadoras, cafeteras y muchos otros electrodomésticos. Aunque la tecnología digital los está reemplazando gradualmente, su simplicidad, fiabilidad y bajo coste los mantienen relevantes en numerosas aplicaciones industriales y domésticas.
            </p>
        </div>
        <div className="theory-subsection">
          <h3>Termómetros de mercurio: Medición clásica de temperatura corporal</h3>
            <p>
              Los termómetros de mercurio en vidrio, clásicos en medicina hasta hace pocas décadas, funcionan explotando la alta dilatación volumétrica del mercurio líquido (β = 181×10⁻⁶/°C) dentro de un capilar de vidrio Pyrex que tiene una dilatación mínima (α = 3×10⁻⁶/°C). Esta diferencia garantiza que prácticamente toda la expansión observada corresponde al mercurio, no al contenedor.
            </p>
            <p>
              Para el rango de temperatura corporal humana de 35-42°C, la variación de volumen del mercurio es perfectamente proporcional a la temperatura, permitiendo una escala graduada lineal con precisión de 0.1°C. El diseño incluye un depósito inferior de 1-2 mL de mercurio conectado a un capilar extremadamente fino (0.2 mm de diámetro), lo que amplifica visualmente el movimiento de la columna de mercurio.
            </p>
            <p>
              Un estrangulamiento en el capilar evita que el mercurio retroceda espontáneamente, manteniendo la lectura máxima hasta que se sacude el termómetro deliberadamente. Aunque estos termómetros son precisos y fiables, están obsoletos actualmente debido a la toxicidad del mercurio, habiendo sido reemplazados por termómetros digitales con sensores electrónicos e infrarrojos que ofrecen mayor seguridad y rapidez de respuesta.
            </p>
        </div>
        <div className="theory-subsection">
          <h3>Tuberías de gas y agua: Compensadores de dilatación en instalaciones</h3>
            <p>
              Las redes de distribución de gas natural utilizan tuberías de acero que se extienden por kilómetros, expuestas a variaciones de temperatura del suelo entre 10-25°C según la estación y la profundidad de enterramiento. Estas tuberías operan a presiones de 4-7 bar, y la dilatación lineal de los tramos rectos debe compensarse para evitar tensiones excesivas.
            </p>
            <p>
              La compensación se logra mediante curvas naturales del trazado y dispositivos llamados "liras de expansión": secciones de tubería en forma de U que permiten la elongación térmica sin generar tensiones mecánicas peligrosas. Las válvulas y juntas mecánicas utilizan sellados con elastómeros compatibles con movimientos térmicos de ±5 mm.
            </p>
            <p>
              En sistemas de calefacción con radiadores, el agua circula a 70-90°C por tuberías de cobre (α = 17×10⁻⁶/°C), experimentando dilatación significativa desde la instalación a temperatura ambiente. Se utilizan abrazaderas flotantes que permiten el deslizamiento axial de las tuberías, controlando la expansión sin restringirla. El diseño adecuado de instalaciones considerando efectos térmicos es fundamental para evitar fugas, roturas y problemas de mantenimiento en sistemas de fluidos.
            </p>
        </div>
        <div className="theory-subsection">
          <h3>Fibra óptica: Estabilidad dimensional para telecomunicaciones globales</h3>
            <p>
              Los cables de fibra óptica modernos utilizan sílice fundida (SiO₂) como material principal, que tiene un coeficiente de expansión térmica extremadamente bajo: α = 0.5×10⁻⁶/°C, aproximadamente diez veces menor que los metales comunes. Esta estabilidad dimensional excepcional es crucial para mantener la calidad de transmisión óptica a través de variaciones ambientales de -40°C a +70°C en instalaciones exteriores, enterradas y submarinas.
            </p>
            <p>
              Las fibras transmiten señales ópticas en longitudes de onda de 1310 nm y 1550 nm (infrarrojo cercano). La variación del índice de refracción con la temperatura es apenas 10⁻⁵/°C, minimizando la dispersión cromática. La atenuación de la señal es de solo 0.2-0.4 dB/km, permitiendo transmisiones de 80-120 km sin necesidad de amplificadores o repetidores.
            </p>
            <p>
              Los cables submarinos transatlánticos, que se extienden por más de 6000 km de longitud, deben compensar diferencias de temperatura entre las corrientes marinas profundas frías y las aguas superficiales cálidas. La baja expansión térmica de la fibra de sílice es esencial para mantener la integridad de las comunicaciones globales: Internet de banda ancha, videoconferencia y streaming de datos que sustentan la economía digital moderna.
            </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        <div className="theory-subsection">
            <h3>Antigüedad: Observación empírica de la dilatación de metales</h3>
            <p>
              Los herreros y forjadores de la antigüedad poseían un conocimiento práctico profundo sobre la expansión térmica del hierro y acero. Durante la forja a 1000-1200°C, observaban cómo los metales se expandían con el calentamiento y se contraían durante el enfriamiento. Una aplicación ingeniosa era el ajuste de aros metálicos a las ruedas de carros: calentaban el aro metálico hasta que se expandiera lo suficiente para colocarlo sobre la rueda de madera, y al enfriarse, se contraía, apretando y fijando firmemente la rueda.
            </p>
            <p>
              Durante la construcción de estructuras metálicas en la Edad Media, los artesanos incorporaban tolerancias y holguras empíricas para compensar la dilatación, aunque carecían de comprensión teórica del fenómeno. Galileo Galilei desarrolló en 1592 un termoscopio primitivo que utilizaba la dilatación del aire para mover una columna de líquido, funcionando como indicador cualitativo de temperatura, pero sin escala graduada ni calibración cuantitativa.
            </p>
        </div>
        <div className="theory-subsection">
          <h3>1740s-1760s: Mediciones cuantitativas de la expansión metálica</h3>
            <p>
              Pieter van Musschenbroek en Holanda realizó experimentos sistemáticos sobre la dilatación lineal de metales como hierro, cobre y latón, obteniendo las primeras mediciones precisas de coeficientes de expansión relativos. Desarrolló aparatos especializados llamados dilatómetros: una varilla metálica sometida a calentamiento controlado mientras se medía su elongación mediante tornillos micrométricos con resolución de 0.01 mm.
            </p>
            <p>
              Jean-André Deluc, físico suizo, publicó en 1772 tablas extensas de coeficientes de dilatación para diversos materiales: sólidos, líquidos y gases. Estas tablas se convirtieron en el fundamento de la termometría científica y la calibración de instrumentos de medición. Este trabajo estableció las bases para la comprensión cuantitativa del fenómeno térmico de expansión de la materia, permitiendo predicciones numéricas en lugar de simples observaciones cualitativas.
            </p>
        </div>
        <div className="theory-subsection">
          <h3>1820s-1840s: Teoría cinética y comprensión molecular</h3>
            <p>
              John Herapath y Robert Mayer desarrollaron las primeras formulaciones de la teoría cinética de gases, relacionando la temperatura con la energía cinética de las moléculas en movimiento de agitación térmica. Comprendieron que el calentamiento aumenta la velocidad de vibración molecular, incrementando la distancia promedio de separación entre átomos, lo que se manifiesta macroscópicamente como expansión.
            </p>
            <p>
              Se formuló la ley de dilatación lineal ΔL = αL₀ΔT, donde el coeficiente α es característico de cada material y depende de su estructura cristalina y los enlaces atómicos. Para gases ideales, la dilatación volumétrica es extrema, descrita por la ley de Charles (V ∝ T a presión constante), reflejando la expansión libre y alta compresibilidad de los gases.
            </p>
            <p>
              Estos desarrollos fueron fundamentales para la termodinámica clásica y la física estadística, proporcionando por primera vez una comprensión microscópica de las propiedades térmicas de la materia, conectando el comportamiento macroscópico observable con el movimiento molecular a escala atómica.
            </p>
        </div>
        <div className="theory-subsection">
          <h3>Siglo XX: Materiales de baja expansión Invar y Zerodur</h3>
            <p>
              Charles Édouard Guillaume descubrió en 1896 el Invar, una aleación de hierro-níquel con 36% de níquel que presenta un coeficiente de expansión extraordinariamente bajo: α = 1.2×10⁻⁶/°C, aproximadamente diez veces menor que el acero común. Este descubrimiento le valió el Premio Nobel de Física en 1920. El Invar encontró aplicaciones inmediatas en metrología para fabricar reglas y patrones de longitud estables, así como en péndulos de relojes de precisión donde la estabilidad dimensional frente a variaciones de temperatura es crucial.
            </p>
            <p>
              En 1968, la empresa Schott desarrolló Zerodur, una vitrocerámica con un coeficiente de expansión casi nulo: α = 0.05×10⁻⁶/°C. Este material revolucionó la astronomía observacional al permitir la fabricación de espejos para telescopios con deformación térmica prácticamente cero, maximizando la resolución óptica. También es fundamental en óptica adaptativa, donde las deformaciones térmicas mínimas son críticas.
            </p>
            <p>
              El desarrollo de estos materiales de ingeniería térmica avanzada ha sido esencial para componentes de precisión en instrumentación científica, tecnología aeroespacial, sistemas láser e interferometría de alta precisión, donde la estabilidad dimensional frente a fluctuaciones de temperatura determina el desempeño del sistema.
            </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>🎭</span> Curiosidades y Anécdotas
        </h2>
        <div className="theory-subsection">
            <h3>La Torre Eiffel crece 15 cm en verano por dilatación del acero</h3>
            <p>
              La icónica Torre Eiffel de París, con sus 324 metros de altura y 10,100 toneladas de acero forjado ensamblado mediante 18,000 piezas remachadas, experimenta un fenómeno fascinante de expansión térmica estacional. Entre el verano parisino (temperaturas cercanas a 35°C) y el invierno (alrededor de 5°C), existe una diferencia de aproximadamente 30°C.
            </p>
            <p>
              Con el coeficiente de dilatación lineal del acero α = 12×10⁻⁶/°C, el cambio de altura es ΔH = αH₀ΔT = (12×10⁻⁶)(324)(30) ≈ 0.12 m, es decir, aproximadamente 15 centímetros de crecimiento vertical estacional. Además, la estructura presenta una ligera inclinación hacia el lado más soleado debido al calentamiento desigual durante el día.
            </p>
            <p>
              Gustave Eiffel, en su diseño de 1889, anticipó brillantemente estos efectos ambientales, incorporando juntas de expansión y tolerancias calculadas meticulosamente. La estructura es deliberadamente flexible, oscilando con el viento y acomodando el movimiento térmico sin tensiones destructivas. Este diseño ingenieril con visión de anticipación de efectos ambientales convirtió a la Torre Eiffel no solo en un ícono de París, sino también en un monumento a la ciencia e ingeniería aplicadas.
            </p>
        </div>
        <div className="theory-subsection">
          <h3>El agua y su anomalía de densidad máxima a 4°C</h3>
            <p>
              La mayoría de las sustancias exhiben contracción monotónica al enfriarse: su densidad aumenta continuamente a medida que la temperatura baja. El agua es una notable excepción que literalmente salvó la vida en la Tierra. El agua alcanza su densidad máxima de 1.000 g/cm³ a 4°C, no a 0°C como sería de esperar. Esta anomalía se debe a la estructura única de los enlaces de hidrógeno que comienzan a formar una estructura cristalina incipiente antes de la congelación completa.
            </p>
            <p>
              Al enfriarse de 4°C a 0°C, el agua se expande anómalamente, disminuyendo su densidad de 0.998 g/cm³ a 0.917 g/cm³ al convertirse en hielo. Esta es la razón por la cual el hielo flota sobre el agua líquida. La consecuencia de esta peculiaridad química es crucial para los ecosistemas acuáticos: en invierno, lagos, ríos y océanos se congelan desde la superficie hacia abajo, formando una capa de hielo superficial que aísla térmicamente el agua profunda, que permanece líquida a aproximadamente 4°C.
            </p>
            <p>
              Si el agua se comportara "normalmente" como la mayoría de las sustancias, se congelaría de abajo hacia arriba, atrapando y matando toda la vida acuática: peces, plantas y microorganismos. Esto habría causado una extinción masiva de la biosfera acuática. Esta peculiaridad química y física del agua, resultado de sus enlaces de hidrógeno únicos, literalmente salvó la biodiversidad del planeta y permitió la evolución de la vida compleja tal como la conocemos.
            </p>
        </div>
        <div className="theory-subsection">
          <h3>Cables eléctricos: La catenaria y la flecha de compensación térmica</h3>
            <p>
              Las líneas de transmisión de alta tensión (400 kV) utilizan cables de aluminio reforzado con acero (ACSR) de 2-3 cm de diámetro, suspendidos en vanos de 300-500 metros entre torres. Durante el verano, con temperaturas de 40°C, los cables se dilatan, provocando una elongación de 1-2 metros por vano. Esta elongación aumenta la "flecha" de la catenaria (la curvatura del cable colgante) en un 5-10%, reduciendo la distancia de seguridad crítica entre el cable y el suelo o la vegetación.
            </p>
            <p>
              En invierno, a -20°C, los cables se contraen, aumentando la tensión mecánica con riesgo de rotura, especialmente bajo la carga adicional de hielo y nieve. El diseño de líneas eléctricas debe calcular la flecha máxima para la temperatura máxima de operación, que puede alcanzar 80-90°C durante cortocircuitos o sobrecargas. Las torres de suspensión incorporan cadenas de aisladores que permiten movimiento horizontal y vertical para compensar la dilatación.
            </p>
            <p>
              La ingeniería eléctrica moderna considera simultáneamente efectos térmicos y mecánicos para garantizar la seguridad y fiabilidad del suministro energético. Los cálculos de flecha y tensión son críticos: demasiada flecha podría causar contacto con vegetación o estructuras, mientras que tensión excesiva podría romper el cable. Este equilibrio entre consideraciones térmicas y mecánicas es fundamental en el diseño de infraestructuras eléctricas.
            </p>
        </div>
        <div className="theory-subsection">
          <h3>El termostato bimetálico: Un descubrimiento accidental de Harrison</h3>
            <p>
              John Harrison, el famoso relojero inglés del siglo XVIII, buscaba resolver el problema de la longitud en la navegación mediante un cronómetro marino de precisión. Uno de los desafíos principales era la compensación térmica del péndulo, cuya longitud variaba con la temperatura, afectando su periodo de oscilación y, por tanto, la precisión del reloj.
            </p>
            <p>
              Durante su experimentación con aleaciones metálicas que tenían diferentes coeficientes de expansión (latón y acero), Harrison observó accidentalmente que una lámina bimetálica se curvaba predeciblemente con los cambios de temperatura. Inmediatamente reconoció la aplicación potencial: control automático de temperatura mediante mecanismos de retroalimentación negativa para termorregulación sin intervención humana.
            </p>
            <p>
              Harrison patentó esta innovación en 1761, revolucionando el control térmico industrial y doméstico durante el siglo siguiente. Su descubrimiento es el antecesor directo de los termostatos modernos: desde los mecánicos clásicos hasta los digitales programables, la tecnología de edificios inteligentes con IoT, sensores inalámbricos y control remoto por smartphone. Este es un ejemplo perfecto de serendipia en el descubrimiento científico: buscando solucionar un problema específico (navegación marítima), Harrison descubrió accidentalmente una solución a un problema completamente diferente (control automático de temperatura) que tendría aplicaciones universales.
            </p>
        </div>
      </div>

      <div className="theory-summary-section">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <ul>
            <li>
              <strong>Dilatación térmica como fenómeno universal:</strong> La dilatación térmica es la expansión de los materiales al calentarse y su contracción al enfriarse. Este fenómeno ocurre porque el calentamiento aumenta la agitación molecular, incrementando la distancia promedio entre átomos y moléculas. Es un fenómeno universal presente en prácticamente toda la materia: sólidos, líquidos y gases.
            </li>
            <li>
              <strong>Tres tipos de dilatación:</strong> La dilatación lineal afecta principalmente a la longitud de objetos unidimensionales como varillas y cables. La dilatación superficial afecta al área de láminas y placas bidimensionales. La dilatación volumétrica afecta al volumen de líquidos y gases tridimensionales. Cada tipo tiene coeficientes característicos del material: α (lineal), β (superficial ≈ 2α), y γ (volumétrico ≈ 3α).
            </li>
            <li>
              <strong>Coeficiente de expansión lineal:</strong> El coeficiente α relaciona el cambio de longitud con la temperatura mediante ΔL = αL₀ΔT. Los metales típicamente tienen α = 10-20×10⁻⁶/°C, los polímeros valores mayores (50-200×10⁻⁶/°C), mientras que vidrios y cerámicas tienen valores menores (1-10×10⁻⁶/°C). Este coeficiente es fundamental para el diseño de estructuras y componentes sometidos a variaciones térmicas.
            </li>
            <li>
              <strong>Aplicaciones prácticas omnipresentes:</strong> La dilatación térmica es considerada en innumerables aplicaciones: termómetros de mercurio que miden temperatura mediante expansión volumétrica, termostatos bimetálicos para control automático, juntas de dilatación en puentes y rieles ferroviarios, compensadores de expansión en tuberías de gas y agua, y diseño estructural que considera efectos térmicos para evitar tensiones y fallos mecánicos.
            </li>
            <li>
              <strong>La anomalía del agua:</strong> El agua presenta una anomalía única: su densidad máxima ocurre a 4°C, no a 0°C. Al enfriarse de 4°C a 0°C, el agua se expande anómalamente en lugar de contraerse. Esto hace que el hielo flote sobre el agua líquida, permitiendo que los cuerpos de agua se congelen desde la superficie hacia abajo. Esta peculiaridad es crucial para los ecosistemas acuáticos: permite la supervivencia de vida acuática durante el invierno en lagos y océanos, ya que el agua profunda permanece líquida a 4°C bajo la capa protectora de hielo superficial.
            </li>
            <li>
              <strong>Materiales de baja expansión:</strong> Materiales especiales como Invar (α = 1.2×10⁻⁶/°C) y Zerodur (α = 0.05×10⁻⁶/°C) tienen coeficientes de expansión extraordinariamente bajos. Estos materiales son esenciales en aplicaciones de precisión: patrones metrológicos de longitud, óptica astronómica para espejos de telescopios, instrumentación científica de alta precisión, y tecnología aeroespacial donde la estabilidad dimensional frente a variaciones de temperatura es crítica para el desempeño del sistema.
            </li>
        </ul>
      </div>
    </>
  );
};

export default DilatacionTermica;
