import { Concept, Important, Example } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "Cambios de Estado",
  descripcion: "Cómo la materia cambia entre sólido, líquido y gas",
  educationLevel: "ESO",
  levels: ['ESO'],
  isTheoryOnly: true
};

const CambiosDeEstado = () => {
  return (
    <>
      {/* Introducción */}
      <Concept 
        title="Los tres estados de la materia" 
        color="blue"
        icon="⚛️"
      >
        <p>
          La materia puede existir en tres estados principales: sólido, 
          líquido y gas. La diferencia está en cómo se 
          organizan y mueven las moléculas.
        </p>

        <div className="info-box">
          <h3>Características de cada estado</h3>
          
          <p>🧊 SÓLIDO</p>
          <ul>
            <li>Moléculas muy juntas y ordenadas</li>
            <li>Solo vibran en su posición</li>
            <li>Forma y volumen definidos</li>
            <li>Ejemplo: hielo, madera, metal</li>
          </ul>

          <p>💧 LÍQUIDO</p>
          <ul>
            <li>Moléculas juntas pero desordenadas</li>
            <li>Pueden moverse y deslizarse</li>
            <li>Volumen definido, forma variable</li>
            <li>Ejemplo: agua, aceite, alcohol</li>
          </ul>

          <p>💨 GAS</p>
          <ul>
            <li>Moléculas muy separadas y desordenadas</li>
            <li>Se mueven libremente a gran velocidad</li>
            <li>Forma y volumen variables</li>
            <li>Ejemplo: aire, vapor de agua, oxígeno</li>
          </ul>
        </div>
      </Concept>

      {/* Los 6 cambios de estado */}
      <Concept 
        title="Los 6 cambios de estado" 
        color="purple"
        icon="🔄"
      >
        <p>
          La materia puede cambiar de un estado a otro cuando se le añade o quita calor. 
          Hay 6 cambios de estado posibles:
        </p>

        <div className="cambios-estado-grid">
          <div className="cambio-estado">
            <h4>🧊 → 💧 FUSIÓN</h4>
            <p>Sólido a Líquido</p>
            <p>Se añade calor. Ejemplo: hielo derritiéndose (0°C)</p>
          </div>

          <div className="cambio-estado">
            <h4>💧 → 🧊 SOLIDIFICACIÓN</h4>
            <p>Líquido a Sólido</p>
            <p>Se quita calor. Ejemplo: agua congelándose (0°C)</p>
          </div>

          <div className="cambio-estado">
            <h4>💧 → 💨 VAPORIZACIÓN</h4>
            <p>Líquido a Gas</p>
            <p>Se añade calor. Ejemplo: agua hirviendo (100°C)</p>
          </div>

          <div className="cambio-estado">
            <h4>💨 → 💧 CONDENSACIÓN</h4>
            <p>Gas a Líquido</p>
            <p>Se quita calor. Ejemplo: vapor formando gotas en espejo</p>
          </div>

          <div className="cambio-estado">
            <h4>🧊 → 💨 SUBLIMACIÓN</h4>
            <p>Sólido a Gas (directo)</p>
            <p>Se añade calor. Ejemplo: hielo seco, naftalina</p>
          </div>

          <div className="cambio-estado">
            <h4>💨 → 🧊 SUBLIMACIÓN INVERSA</h4>
            <p>Gas a Sólido (directo)</p>
            <p>Se quita calor. Ejemplo: escarcha formándose</p>
          </div>
        </div>
      </Concept>

      {/* Fusión */}
      <Concept 
        title="Fusión: De sólido a líquido" 
        color="blue"
        icon="🧊"
      >
        <p>
          La fusión ocurre cuando un sólido absorbe suficiente calor para 
          que sus moléculas rompan la estructura ordenada y empiecen a moverse libremente.
        </p>

        <div className="info-box">
          <h3>Características de la fusión</h3>
          <ul>
            <li>Temperatura constante: Durante la fusión, la temperatura no cambia</li>
            <li>Punto de fusión: Temperatura específica para cada sustancia</li>
            <li>Absorbe calor: Proceso endotérmico (necesita energía)</li>
            <li>Reversible: Se puede volver a solidificar</li>
          </ul>
        </div>

        <p>Puntos de fusión comunes:</p>
        <ul>
          <li>Hielo (agua): 0°C</li>
          <li>Mantequilla: ~35°C</li>
          <li>Chocolate: ~34°C</li>
          <li>Hierro: 1538°C</li>
          <li>Oro: 1064°C</li>
        </ul>

        <Example 
          title="Ejemplo: Cubito de hielo derritiéndose"
          problem="Sacas un cubito de hielo del congelador (-18°C) y lo dejas en un vaso a temperatura ambiente (20°C). ¿Qué ocurre?"
          solution={
            <div style={{color: '#1f2937'}}>
              <p>Proceso paso a paso:</p>
              <ol>
                <li>Calentamiento del hielo: El hielo absorbe calor y su temperatura sube de -18°C a 0°C</li>
                <li>Fusión: Al llegar a 0°C, el hielo empieza a derretirse. La temperatura se mantiene en 0°C mientras hay hielo</li>
                <li>Calentamiento del agua: Una vez todo el hielo se ha derretido, el agua líquida absorbe calor y su temperatura sube de 0°C hacia 20°C</li>
                <li>Equilibrio: Finalmente, el agua alcanza la temperatura ambiente (20°C)</li>
              </ol>
              
              <p>Observación importante: Durante la fusión (paso 2), aunque el hielo sigue absorbiendo calor, su temperatura no cambia. Todo el calor se usa para romper los enlaces entre moléculas.</p>
            </div>
          }
        />
      </Concept>

      {/* Vaporización */}
      <Concept 
        title="Vaporización: De líquido a gas" 
        color="red"
        icon="💨"
      >
        <p>
          La vaporización es el cambio de líquido a gas. Puede ocurrir de dos formas:
        </p>

        <div className="info-box">
          <h3>1. Ebullición</h3>
          <p>
            Ocurre en toda la masa del líquido cuando alcanza su punto de ebullición. 
            Se forman burbujas de vapor en el interior del líquido.
          </p>
          <ul>
            <li>Agua: 100°C (a nivel del mar)</li>
            <li>Alcohol: 78°C</li>
            <li>Aceite: ~300°C</li>
          </ul>

          <h3>2. Evaporación</h3>
          <p>
            Ocurre solo en la superficie del líquido, a cualquier temperatura. Las moléculas 
            más rápidas escapan del líquido.
          </p>
          <ul>
            <li>Ejemplo: charco secándose al sol</li>
            <li>Ejemplo: ropa tendida secándose</li>
            <li>Ejemplo: sudor evaporándose de tu piel</li>
          </ul>
        </div>

        <Important>
          <p>
            💡 Diferencia clave: La ebullición ocurre a temperatura 
            específica en todo el líquido. La evaporación ocurre a cualquier 
            temperatura solo en la superficie.
          </p>
        </Important>
      </Concept>

      {/* Condensación */}
      <Concept 
        title="Condensación: De gas a líquido" 
        color="blue"
        icon="💧"
      >
        <p>
          La condensación ocurre cuando un gas pierde calor y sus moléculas 
          se juntan formando un líquido.
        </p>

        <div className="ejemplos-grid">
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🪟</span>
            <p>
              Ventanas empañadas: El vapor de agua del aire se condensa 
              en el cristal frío formando gotitas.
            </p>
          </div>
          
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🚿</span>
            <p>
              Espejo del baño: El vapor de la ducha caliente se condensa 
              en el espejo frío.
            </p>
          </div>
          
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🌧️</span>
            <p>
              Lluvia: El vapor de agua en las nubes se condensa formando 
              gotas que caen.
            </p>
          </div>

          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🥤</span>
            <p>
              Bebida fría: El vapor de agua del aire se condensa en el 
              exterior del vaso frío.
            </p>
          </div>

          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🌅</span>
            <p>
              Rocío matutino: El vapor de agua se condensa en plantas 
              y objetos fríos durante la noche.
            </p>
          </div>

          <div className="ejemplo-item">
            <span className="ejemplo-emoji">☁️</span>
            <p>
              Nubes: Vapor de agua que se condensa en pequeñas gotitas 
              suspendidas en el aire.
            </p>
          </div>
        </div>

        <Important>
          <p>
            ⚠️ Cuidado: El vapor de agua es invisible. Lo que vemos salir 
            de una olla hirviendo son pequeñas gotitas de agua (condensación), no vapor puro.
          </p>
        </Important>
      </Concept>

      {/* Sublimación */}
      <Concept 
        title="Sublimación: Directo de sólido a gas" 
        color="purple"
        icon="❄️"
      >
        <p>
          La sublimación es el cambio directo de sólido a gas, sin pasar 
          por el estado líquido. Es menos común pero muy interesante.
        </p>

        <div className="info-box">
          <h3>Ejemplos de sublimación</h3>
          
          <p>🧊 Hielo seco (CO₂ sólido)</p>
          <ul>
            <li>Temperatura: -78°C</li>
            <li>Sublima directamente a gas a temperatura ambiente</li>
            <li>Usado en efectos especiales (humo artificial)</li>
            <li>Nunca se derrite, siempre pasa a gas</li>
          </ul>

          <p>🦋 Naftalina (bolas antipolillas)</p>
          <ul>
            <li>Sublima lentamente a temperatura ambiente</li>
            <li>Por eso se hace más pequeña con el tiempo</li>
            <li>El olor es el gas de naftalina</li>
          </ul>

          <p>❄️ Nieve en días muy fríos</p>
          <ul>
            <li>En climas muy secos y fríos</li>
            <li>La nieve desaparece sin derretirse</li>
            <li>Pasa directamente a vapor de agua</li>
          </ul>

          <p>🧊 Hielo en el congelador</p>
          <ul>
            <li>Los cubitos se hacen más pequeños con el tiempo</li>
            <li>Subliman muy lentamente</li>
            <li>Por eso se forman cristales de hielo en las paredes</li>
          </ul>
        </div>
      </Concept>

      {/* Temperatura durante cambios de estado */}
      <Concept 
        title="¿Por qué la temperatura no cambia durante un cambio de estado?" 
        color="orange"
        icon="🌡️"
      >
        <p>
          Durante un cambio de estado, la temperatura permanece constante aunque se siga 
          añadiendo o quitando calor. ¿Por qué?
        </p>

        <div className="destacado">
          <p>
            Explicación: El calor que se añade no se usa para aumentar la 
            temperatura (velocidad de las moléculas), sino para romper o formar enlaces 
            entre las moléculas.
          </p>
        </div>

        <p>Ejemplo con agua:</p>
        <ul>
          <li>
            Fusión (0°C): El calor rompe los enlaces del hielo. Las moléculas 
            pasan de estar ordenadas (sólido) a desordenadas (líquido).
          </li>
          <li>
            Ebullición (100°C): El calor rompe los enlaces del agua líquida. 
            Las moléculas se separan completamente (gas).
          </li>
        </ul>

        <Important>
          <p>
            🔑 Concepto clave: Se necesita mucha más energía para vaporizar 
            agua (2257 kJ/kg) que para fundirla (334 kJ/kg). Por eso tarda más en hervir 
            que en derretirse.
          </p>
        </Important>
      </Concept>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>Refrigeración criogénica: Conservación de muestras biológicas</h3>
          <p>
            El nitrógeno líquido, con un punto de ebullición de -196°C a presión atmosférica, es fundamental para el almacenamiento criogénico de material biológico. Los bancos de tejidos y clínicas de reproducción asistida utilizan esta tecnología para criopreservar células, gametos (óvulos y espermatozoides), embriones, tejidos y muestras genéticas durante períodos indefinidos.
          </p>
          <p>
            A esta temperatura extremadamente baja, toda actividad metabólica celular cesa completamente, preservando la estructura molecular y genética sin degradación. El nitrógeno líquido sublima directamente a gas a presión atmosférica, lo que evita el daño celular causado por la formación de grandes cristales de hielo. Las muestras se almacenan en tanques Dewar especializados de 20-50 litros con aislamiento de vacío, que minimizan la pérdida por evaporación a aproximadamente 1-3% diario.
          </p>
          <p>
            Esta tecnología es esencial en medicina reproductiva (permitiendo planificación familiar flexible), investigación biológica (conservación de líneas celulares), y conservación de biodiversidad (bancos genéticos de especies amenazadas). Las muestras pueden mantener viabilidad durante décadas e incluso siglos, siendo restauradas mediante protocolos de descongelación controlada cuando se necesiten.
          </p>
        </div>
        
        <div className="theory-subsection">
          <h3>Destilación industrial: Separación de mezclas por punto de ebullición</h3>
          <p>
            Las torres de fraccionamiento de petróleo en refinerías son estructuras imponentes de 50-70 metros de altura que explotan las diferencias en los puntos de ebullición de hidrocarburos para separarlos. El petróleo crudo calentado ingresa a la base de la torre, y los diferentes componentes se vaporizan y condensan a distintas alturas según su temperatura de ebullición: gases livianos (~20°C), naftas (70-180°C), keroseno (150-275°C), y gasóleo (200-350°C).
          </p>
          <p>
            Los vapores ascienden por la torre, encontrando platos colectores a temperaturas progresivamente decrecientes. Cuando alcanzan una altura donde la temperatura es inferior a su punto de ebullición, condensan y son recogidos. Este gradiente térmico vertical permite una separación eficiente de múltiples fracciones simultáneamente.
          </p>
          <p>
            La destilación también es fundamental en la producción de alcohol etílico a partir de vino, cerveza u otros fermentados. El etanol tiene un punto de ebullición de 78°C, significativamente inferior al del agua (100°C), permitiendo su separación por calentamiento controlado. Mediante múltiples etapas de rectificación, se pueden alcanzar concentraciones de 40-96% en volumen, produciendo desde licores hasta alcohol industrial. Este proceso es absolutamente fundamental en la industria química y petroquímica moderna.
          </p>
        </div>
        
        <div className="theory-subsection">
          <h3>Liofilización: Preservación de alimentos por sublimación</h3>
          <p>
            La liofilización (freeze-drying) es una técnica avanzada de deshidratación que produce café instantáneo, frutas deshidratadas, y alimentos espaciales de alta calidad. El proceso opera en vacío a presiones de 0.1-0.5 mbar y temperaturas de aproximadamente -40°C, condiciones en las cuales el agua sólida (hielo) sublima directamente a vapor sin pasar por la fase líquida.
          </p>
          <p>
            Esta sublimación directa elimina el 95-99% del contenido de agua mientras mantiene la estructura celular intacta, preservando notablemente el sabor, aroma, nutrientes y vitaminas. A diferencia del secado convencional por calor, que puede desnaturalizar proteínas y destruir compuestos volátiles, la liofilización preserva la calidad orgánoléptica y nutricional. Los productos liofilizados se rehidratan rápidamente cuando se añade agua.
          </p>
          <p>
            Los alimentos liofilizados pueden almacenarse a temperatura ambiente con una vida útil de 2-25 años en envase sellado herméticamente, sin necesidad de refrigeración. Esta tecnología es esencial en la industria alimentaria, farmacéutica (estabilización de medicamentos y vacunas para transporte sin cadena de frío), y programas espaciales (raciones de astronautas ligeras y compactas). La liofilización representa la aplicación más sofisticada de la sublimación en tecnología alimentaria.
          </p>
        </div>
        
        <div className="theory-subsection">
          <h3>Climatización reversible: Bombas de calor y aires acondicionados</h3>
          <p>
            Los sistemas de aire acondicionado modernos tipo split utilizan ciclos de cambios de estado de refrigerantes (como el R-32) para transferir calor eficientemente. El ciclo termodinámico involucra cuatro cambios de estado continuos: evaporación, compresión, condensación y expansión, pudiendo operar de manera reversible tanto para enfriar en verano como para calentar en invierno.
          </p>
          <p>
            En modo refrigeración, el evaporador interior absorbe calor de la habitación (típicamente a 22°C) mediante la vaporización del refrigerante líquido a aproximadamente -10°C. El compresor eléctrico eleva la presión y temperatura del gas a 60-80°C. El condensador exterior libera este calor al ambiente mediante la condensación del gas a líquido. Finalmente, una válvula de expansión reduce bruscamente la presión, enfriando el refrigerante para repetir el ciclo.
          </p>
          <p>
            Los sistemas modernos ofrecen potencias frigoríficas de 2-7 kW con eficiencias energéticas (SEER) de 6-8, lo que significa que por cada kW eléctrico consumido, transfieren 6-8 kW térmicos, superando ampliamente la eficiencia de calefacción eléctrica directa. Esta tecnología de cambios de estado controlados es fundamental para el confort térmico en hogares y oficinas de todo el mundo.
          </p>
        </div>
        
        <div className="theory-subsection">
          <h3>Fundición de metales: Base de la manufactura industrial</h3>
          <p>
            La fundición de metales mediante fusión y solidificación controlada es fundamental en la manufactura de piezas industriales. El aluminio, con un punto de fusión de 660°C, se funde típicamente en hornos de inducción a 700-750°C y se cuela en moldes de arena o cerámica. Durante el enfriamiento, la solidificación forma una estructura cristalina cuyas propiedades mecánicas dependen críticamente de la velocidad de enfriamiento.
          </p>
          <p>
            El acero y el hierro, con puntos de fusión cercanos a 1538°C, requieren altos hornos donde el mineral de hierro (óxidos) se reduce con carbón de coque a temperaturas de 1600-1800°C. El metal fundido se separa de la escoria (impurezas) por diferencia de densidad. El moldeo por inyección de precisión permite tolerancias dimensionales de ±0.1 mm, habilitando la producción masiva de componentes estructurales para automoción y aeronáutica.
          </p>
          <p>
            Después de la fundición, los tratamientos térmicos como el temple (enfriamiento rápido) y el revenido (recalentamiento controlado) modifican la microestructura metalúrgica, ajustando propiedades como dureza y tenacidad según la aplicación específica. La fundición es la base de la industria metalúrgica y manufacturera, transformándose minerales en prácticamente todos los productos metálicos de nuestra civilización.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        <div className="theory-subsection">
          <h3>Antigüedad: Observación empírica de transformaciones de la materia</h3>
          <p>
            Las civilizaciones antiguas de Mesopotamia y Egipto, desde aproximadamente 3000 a.C., dominaron la fundición de metales como cobre, bronce y hierro. Aunque no comprendían los fundamentos científicos, poseían un conocimiento práctico profundo sobre los puntos de fusión y las temperaturas elevadas necesarias, desarrollando hornos alimentados con carbón vegetal capaces de alcanzar las temperaturas requeridas.
          </p>
          <p>
            El vidrio soplado, desarrollado alrededor de 1500 a.C. en Fenicia, requiere fundir arena (sílice) a temperaturas de 1500-1700°C junto con soda (carbonato de sodio) de cenizas vegetales como fundente. El enfriamiento controlado permitía crear transparencia y formas deseadas. La cerámica, mediante cocción de arcilla a 900-1200°C, producía una transformación físico-química irreversible que confería dureza e impermeabilización a las vasijas de almacenamiento.
          </p>
          <p>
            La destilación, desarrollada en la alquimia medieval árabe, permitió la producción de alcoholes, esencias y perfumes utilizando aparatos alambique que explotaban las diferencias en puntos de ebullición. Estas tecnologías de manipulación de cambios de estado fueron fundamentales para el desarrollo de la civilización, aunque su comprensión teórica tardaría milenios en llegar.
          </p>
        </div>
        
        <div className="theory-subsection">
          <h3>Siglo XVII: Boyle y la distinción entre cambios físicos y químicos</h3>
          <p>
            Robert Boyle, en su obra revolucionaria "The Sceptical Chymist" (1661), estableció por primera vez la distinción fundamental entre cambios físicos y químicos. Los cambios físicos, como la fusión y la solidificación, son reversibles y alteran solo la forma o estado de una sustancia mientras conservan su identidad química. Por el contrario, los cambios químicos, como la combustión y la oxidación, son generalmente irreversibles y alteran la composición molecular, produciendo nuevas sustancias.
          </p>
          <p>
            Boyle realizó experimentos pioneros con su bomba de vacío, demostrando que la evaporación puede ocurrir a presiones bajas incluso a temperatura ambiente, estableciendo por primera vez la relación entre presión y cambios de estado. Sus experimentos cuantitativos y reproducibles representan el fundamento del método científico moderno aplicado a la química.
          </p>
          <p>
            Este trabajo marcó la transición de la alquimia empírica y supersticiosa hacia una ciencia racional basada en experimentación rigurosa y mediciones cuantitativas. Boyle es considerado uno de los fundadores de la química moderna precisamente por esta sistematización del conocimiento sobre transformaciones de la materia.
          </p>
        </div>
        
        <div className="theory-subsection">
          <h3>1780s: Lavoisier y la conservación de la masa en cambios de estado</h3>
          <p>
            Antoine Lavoisier, utilizando balanzas analíticas de extraordinaria precisión (sensibilidad de 0.1 mg), demostró mediante experimentos meticulosos que la masa total se conserva durante las transformaciones tanto físicas como químicas. Este principio, conocido como la Ley de Conservación de la Masa, fue demostrado de manera particularmente elegante en sistemas cerrados.
          </p>
          <p>
            En un experimento célebre, Lavoisier calentó mercurio en un recipiente cerrado, observando la formación de óxido de mercurio rojo. Al pesar cuidadosamente el sistema antes y después, demostró que la masa inicial y final eran idénticas, refutando definitivamente la teoría del flogisto que había dominado la química durante décadas. Similar rigor aplicó a la fusión y solidificación del agua: la masa permanecía constante durante la transición a 0°C, confirmada mediante mediciones termométricas precisas.
          </p>
          <p>
            Lavoisier también estableció la nomenclatura química moderna, distinguiendo claramente entre elementos y compuestos, y entre sustancias simples y complejas. Su obra "Traité Élémentaire de Chimie" (1789) inauguró la revolución química cuantitativa, donde las mediciones precisas y las matemáticas se convirtieron en herramientas fundamentales de la ciencia química.
          </p>
        </div>
        
        <div className="theory-subsection">
          <h3>Siglo XIX: Termodinámica y comprensión molecular de los cambios de estado</h3>
          <p>
            La teoría cinética de gases, desarrollada por Clausius, Maxwell y Boltzmann durante las décadas de 1850-1870, estableció la relación fundamental entre temperatura y energía cinética molecular. Los cambios de estado se comprendieron finalmente como manifestaciones macroscópicas de la energía y el movimiento de agitación térmica de las moléculas.
          </p>
          <p>
            Joseph Black, ya en la década de 1760, había descubierto mediante calorimetría precisa el concepto de calor latente: la energía requerida para romper los enlaces intermoleculares durante la fusión y vaporización sin cambiar la temperatura. Determinó que el agua requiere 334 kJ/kg para fundirse y 2257 kJ/kg para vaporizarse, cantidades enormes comparadas con el calor específico (4.18 kJ/(kg·K)).
          </p>
          <p>
            Los diagramas de fase presión-temperatura, desarrollados en este periodo, revelaron el punto triple del agua (0.01°C y 611 Pa) donde coexisten en equilibrio los tres estados simultáneamente, un fenómeno notable. La ecuación de Clausius-Clapeyron proporcionó una relación matemática cuantitativa entre la pendiente de las curvas de transición en el diagrama de fases y la entalpía del cambio de estado, unificando termodinámica y física estadística.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>🎭</span> Curiosidades y Anécdotas
        </h2>
        <div className="theory-subsection">
          <h3>La anomalía del agua: El hielo que flota salvó la vida en la Tierra</h3>
          <p>
            La mayoría de las sustancias tienen una fase sólida más densa que su fase líquida, por lo que se hunden cuando se solidifican. El agua es una notable excepción: el hielo tiene una densidad de 0.92 g/cm³, mientras que el agua líquida a 4°C tiene una densidad de 1.00 g/cm³. Esta anomalía hace que el hielo flote en el agua, un fenómeno que parece trivial pero que tiene consecuencias biológicas extraordinarias.
          </p>
          <p>
            La razón de esta anomalía reside en la estructura cristalina hexagonal del hielo, estabilizada por enlaces de hidrógeno. Cuando el agua se congela, las moléculas se organizan en una red espaciada que ocupa mayor volumen que el agua líquida, donde las moléculas están más desordenadas y compactas. Esta peculiaridad química literalmente salvó la biodiversidad del planeta.
          </p>
          <p>
            En invierno, cuando la temperatura del aire desciende por debajo de 0°C, los lagos y océanos comienzan a congelarse desde la superficie. La capa de hielo superficial actúa como un aislante térmico, protegiendo el agua profunda que permanece líquida a temperaturas de 0-4°C. Los peces y organismos acuáticos pueden sobrevivir bajo esta capa protectora. Si el hielo se hundiera como la mayoría de los sólidos, los océanos y lagos se congelarían de abajo hacia arriba, atrapando y destruyendo toda la vida acuática, causando una extinción masiva de la biosfera. Esta peculiaridad del agua es fundamental para la existencia de vida tal como la conocemos.
          </p>
        </div>
        
        <div className="theory-subsection">
          <h3>Hielo seco: El protagonista invisible de Hollywood y las discotecas</h3>
          <p>
            El hielo seco (CO₂ sólido a -78°C) sublima directamente a gas a temperatura ambiente sin pasar por la fase líquida. Esta sublimación produce una niebla densa y blanca espectacular: el CO₂ frío condensa el vapor de agua presente en el aire ambiente, creando la característica nube que se arrastra por el suelo (el CO₂ es más denso que el aire y permanece cerca del suelo).
          </p>
          <p>
            Este efecto visual ha sido ampliamente explotado en el cine. Películas icónicas como "Alien" (1979) y "Blade Runner" (1982) utilizaron extensivamente hielo seco para crear atmósferas misteriosas y futuristas en sus escenas. En conciertos, eventos y discotecas, las máquinas de humo utilizan 5-10 kg de hielo seco sumergido en tanques de agua caliente, produciendo una sublimación rápida que genera cortinas de niebla con una duración de 20-30 minutos.
          </p>
          <p>
            Sin embargo, el hielo seco presenta un peligro real: el CO₂ gas es más denso que el aire y puede desplazar el oxígeno en espacios cerrados mal ventilados, causando asfixia. Por ello, su uso requiere ventilación adecuada y medidas de seguridad. Esta aplicación espectacular demuestra cómo un fenómeno físico fundamental se convierte en una herramienta práctica de efectos especiales en nuestra vida cotidiana.
          </p>
        </div>
        
        <div className="theory-subsection">
          <h3>El punto triple del agua: La referencia fundamental de la termometría</h3>
          <p>
            El punto triple del agua es la única condición específica de temperatura y presión en la cual coexisten en equilibrio simultáneo los tres estados de la materia: sólido (hielo), líquido (agua) y gas (vapor). Esta condición singular ocurre a exactamente 0.01°C (273.16 K) y 611.657 Pa de presión, una presión muy reducida comparada con la atmosférica (101,325 Pa).
          </p>
          <p>
            Las celdas de punto triple son patrones de calibración de termómetros de precisión en laboratorios nacionales de metrología. Su reproducibilidad es extraordinaria: ±0.0001 K de incertidumbre, lo que las convierte en referencias termométricas primarias. De 1954 a 2019, la definición oficial del kelvin se basaba en este punto: un kelvin era exactamente 1/273.16 de la diferencia de temperatura entre el punto triple del agua y el cero absoluto.
          </p>
          <p>
            En 2019, el Sistema Internacional de Unidades redefinió el kelvin basándose en la constante de Boltzmann (kB) con un valor fijo, haciendo la definición independiente de las propiedades específicas del agua. Sin embargo, el punto triple del agua sigue siendo una referencia fundamental en la termometría científica, demostrando cómo un fenómeno físico singular puede servir como base metrológica para toda una civilización tecnológica.
          </p>
        </div>
        
        <div className="theory-subsection">
          <h3>La nieve que desaparece sin derretirse: Sublimación en la naturaleza</h3>
          <p>
            En climas fríos y secos como las montañas de alta altitud de los Andes o el Himalaya, la nieve puede evaporarse directamente sin pasar por la fase líquida mediante sublimación. Esto ocurre cuando la presión atmosférica es baja y la humedad relativa es mínima, permitiendo que las moléculas de agua escapen del cristal de hielo directamente al aire como vapor.
          </p>
          <p>
            El fenómeno de evaporación de nieve es particularmente dramático con los vientos Chinook en Canadá o los Foehn en los Alpes. Estos vientos cálidos y secos pueden reducir una capa de nieve de 30 cm en un solo día, sin que la temperatura supere nunca los 0°C. Los glaciares de la Antártida pierden masa principalmente por este mecanismo: aproximadamente el 90% de la ablación (pérdida de masa) es por sublimación directa, y solo el 10% por fusión superficial.
          </p>
          <p>
            Un ejemplo cotidiano de este fenómeno es la ropa tendida en el exterior durante el invierno a -10°C: se seca completamente aunque esté congelada. El agua congelada en los cristales de hielo del tejido sublima directamente al aire seco durante las heladas intensas. Este comportamiento contradice la intuición común sobre los cambios de estado, que asume que el agua debe fundirse antes de evaporarse, demostrando la importancia de comprender los diagramas de fase y las condiciones de presión y temperatura que gobiernan las transiciones entre estados de la materia.
          </p>
        </div>
      </div>

      <div className="theory-summary-section">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <ul>
          <li>
            <strong>Tres estados fundamentales de la materia:</strong> Los estados sólido, líquido y gaseoso se distinguen por el ordenamiento y movilidad molecular. En el estado sólido, las moléculas están ordenadas en estructuras cristalinas con vibración limitada. En el líquido, están desordenadas pero con movilidad limitada por enlaces intermoleculares. En el gas, están completamente separadas con movimiento libre en todo el volumen disponible. Cada estado tiene propiedades distintivas de forma y volumen que determinan su comportamiento macroscópico.
          </li>
          <li>
            <strong>Fusión: De sólido a líquido absorbiendo calor latente:</strong> La fusión es la transición de sólido a líquido que ocurre a temperatura constante (punto de fusión) mientras se absorbe calor latente de fusión. Esta energía rompe los enlaces cristalinos sin incrementar la temperatura. Para el agua, el punto de fusión es 0°C y el calor latente es 334 kJ/kg, una cantidad considerable de energía que explica por qué el hielo enfría tan efectivamente las bebidas.
          </li>
          <li>
            <strong>Vaporización: Ebullición versus evaporación:</strong> La transición de líquido a gas ocurre mediante dos mecanismos distintos. La ebullición es la vaporización en todo el volumen del líquido a una temperatura específica (100°C para el agua a presión atmosférica). La evaporación es la vaporización superficial que puede ocurrir a cualquier temperatura. Ambos procesos requieren el calor latente de vaporización (2257 kJ/kg para el agua), significativamente mayor que el de fusión, lo que refleja la energía necesaria para separar completamente las moléculas.
          </li>
          <li>
            <strong>Condensación: El proceso inverso que libera calor:</strong> La condensación es la transición de gas a líquido que ocurre mediante enfriamiento, liberando el calor latente de vaporización al ambiente. Este proceso es responsable de la formación de gotas, la aparición de nubes en la atmósfera, la lluvia, el rocío matinal, y otros fenómenos meteorológicos cotidianos. La condensación es fundamental en el ciclo hidrológico de la Tierra y en tecnologías de climatización.
          </li>
          <li>
            <strong>Sublimación: Transición directa sólido-gas:</strong> La sublimación es la transición directa de sólido a gas sin pasar por la fase líquida, ocurriendo en condiciones específicas de baja presión o alta temperatura. El hielo seco (CO₂ a -78°C), la naftalina, y la nieve en climas fríos y secos subliman naturalmente. El proceso inverso (gas a sólido directamente) se llama deposición. La sublimación es explotada tecnológicamente en la liofilización para preservar alimentos y medicamentos.
          </li>
          <li>
            <strong>Aplicaciones tecnológicas fundamentales:</strong> Los cambios de estado son la base de tecnologías esenciales en la sociedad moderna: refrigeración criogénica para conservación de muestras biológicas, destilación industrial para separación de mezclas (petroquímica, alcoholes), liofilización para preservación de alimentos, fundición de metales para manufactura industrial, y climatización mediante bombas de calor. Estas aplicaciones demuestran cómo la comprensión de la física y termodinámica de los cambios de estado se traduce directamente en tecnología práctica que sustenta nuestra civilización.
          </li>
        </ul>
      </div>
    </>
  );
};

export default CambiosDeEstado;
