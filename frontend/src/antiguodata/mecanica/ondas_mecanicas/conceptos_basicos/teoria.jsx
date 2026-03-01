import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Conceptos Básicos de Ondas",
  descripcion: "Propiedades fundamentales de las ondas mecánicas",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a las Ondas Mecánicas">
        <p>
          Una onda mecánica es una perturbación que se propaga a través de un medio material, 
          transportando energía sin transportar materia. Las partículas del medio oscilan alrededor de su 
          posición de equilibrio mientras la onda avanza.
        </p>
        <Important>
          <p>
            Las ondas mecánicas requieren un medio material para propagarse. No pueden viajar en el vacío.
          </p>
        </Important>
        <Example>
          <p>
            Ejemplos de ondas mecánicas: ondas en cuerdas, ondas sonoras, ondas sísmicas, ondas en resortes, 
            ondas en la superficie del agua.
          </p>
        </Example>
      </TheorySection>

      <TheorySection title="Características de una Onda">
        <Concept title="Parámetros Fundamentales">
          <p>
            Las ondas se caracterizan por varios parámetros fundamentales:
          </p>
          <ul>
            <li>Amplitud (A): Máximo desplazamiento de las partículas desde su posición de equilibrio (m)</li>
            <li>Longitud de onda (λ): Distancia entre dos puntos consecutivos en fase (m)</li>
            <li>Periodo (T): Tiempo que tarda la onda en completar una oscilación (s)</li>
            <li>Frecuencia (f): Número de oscilaciones por unidad de tiempo (Hz)</li>
            <li>Velocidad (v): Rapidez con que se propaga la perturbación (m/s)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Relación Frecuencia-Periodo">
        <Concept title="Frecuencia y Periodo">
          <p>
            La frecuencia y el periodo son inversamente proporcionales. Si una onda oscila más rápido 
            (mayor frecuencia), su periodo es menor.
          </p>
          <Formula
            expression={String.raw`f = \frac{1}{T}`}
            calculatorId="ondas-frecuencia-periodo"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Periodo", expression: String.raw`T = \frac{1}{f}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>f: Frecuencia (Hz)</li>
            <li>T: Periodo (s)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuación Fundamental de las Ondas">
        <Concept title="Velocidad de Propagación">
          <p>
            La velocidad de propagación de una onda está relacionada con su frecuencia y longitud de onda. 
            Esta es una de las ecuaciones más importantes en el estudio de ondas.
          </p>
          <Formula
            expression={String.raw`v = \lambda \cdot f`}
            calculatorId="ondas-velocidad"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Longitud de onda", expression: String.raw`\lambda = \frac{v}{f}` },
              { description: "Calcular Frecuencia", expression: String.raw`f = \frac{v}{\lambda}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>v: Velocidad de propagación (m/s)</li>
            <li>λ: Longitud de onda (m)</li>
            <li>f: Frecuencia (Hz)</li>
          </ul>

          <p>
            También puede expresarse en función del periodo:
          </p>
          <Formula
            expression={String.raw`v = \frac{\lambda}{T}`}
            calculatorId="ondas-velocidad-periodo"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Longitud de onda", expression: String.raw`\lambda = v \cdot T` },
              { description: "Calcular Periodo", expression: String.raw`T = \frac{\lambda}{v}` }
            ]}
          />

          <Example>
            <p>
              El sonido en el aire a 20°C viaja a aproximadamente 343 m/s. Una nota musical de 440 Hz 
              (La central) tiene una longitud de onda de λ = 343/440 ≈ 0.78 m.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Número de Onda">
        <Concept title="Número de Onda (k)">
          <p>
            El número de onda (k) representa cuántos radianes de fase hay por metro de distancia. 
            Es útil para describir la variación espacial de la onda.
          </p>
          <Formula
            expression={String.raw`k = \frac{2\pi}{\lambda}`}
            calculatorId="ondas-numero-onda"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Longitud de onda", expression: String.raw`\lambda = \frac{2\pi}{k}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>k: Número de onda (rad/m)</li>
            <li>λ: Longitud de onda (m)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Frecuencia Angular">
        <Concept title="Frecuencia Angular (ω)">
          <p>
            La frecuencia angular (ω) relaciona la frecuencia con el movimiento circular y describe 
            cuántos radianes de fase ocurren por segundo.
          </p>
          <Formula
            expression={String.raw`\omega = 2\pi f`}
            calculatorId="ondas-frecuencia-angular"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Frecuencia", expression: String.raw`f = \frac{\omega}{2\pi}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>ω: Frecuencia angular (rad/s)</li>
            <li>f: Frecuencia (Hz)</li>
          </ul>

          <p>
            También puede expresarse en función del periodo:
          </p>
          <Formula
            expression={String.raw`\omega = \frac{2\pi}{T}`}
            calculatorId="ondas-omega-periodo"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Periodo", expression: String.raw`T = \frac{2\pi}{\omega}` }
            ]}
          />
        </Concept>
      </TheorySection>
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🎵 Música e Instrumentos Musicales</h3>
          <p>
            Los instrumentos musicales funcionan generando ondas mecánicas con frecuencias específicas. 
            Una guitarra produce ondas en las cuerdas (transversales) que se transmiten al aire como ondas 
            sonoras (longitudinales). La nota La central (440 Hz) tiene una longitud de onda de ~78 cm en 
            el aire. Los pianos tienen cuerdas de diferentes longitudes y tensiones para producir diferentes 
            frecuencias: las cuerdas graves son más largas y gruesas (menor frecuencia), las agudas son más 
            cortas y finas (mayor frecuencia).
          </p>
          <p>
            Los instrumentos de viento (flauta, trompeta) crean ondas estacionarias en columnas de aire. 
            La longitud del tubo determina las frecuencias resonantes. Los estudios de grabación usan 
            análisis de frecuencias (espectrogramas) para ecualizar y mezclar música, aplicando directamente 
            los conceptos de frecuencia, amplitud y longitud de onda.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌊 Ondas Sísmicas y Geología</h3>
          <p>
            Los terremotos generan dos tipos principales de ondas: ondas P (primarias, longitudinales, 
            v ≈ 6-8 km/s) y ondas S (secundarias, transversales, v ≈ 3-4 km/s). Las ondas P viajan más 
            rápido y llegan primero a los sismógrafos. La diferencia de tiempo entre la llegada de ondas 
            P y S permite calcular la distancia al epicentro usando v = d/t.
          </p>
          <p>
            Los geólogos usan ondas sísmicas artificiales (explosiones controladas) para explorar el 
            subsuelo. Las ondas reflejadas revelan capas de roca, depósitos de petróleo y gas. Esta 
            técnica (sísmica de reflexión) es fundamental en la industria petrolera. Las ondas sísmicas 
            también revelaron la estructura interna de la Tierra: núcleo, manto y corteza, basándose en 
            cómo las ondas se refractan y reflejan en diferentes capas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏥 Ultrasonido Médico</h3>
          <p>
            El ultrasonido usa ondas mecánicas de alta frecuencia (2-18 MHz, muy por encima del rango 
            audible de 20-20,000 Hz) para crear imágenes del interior del cuerpo. Un transductor emite 
            pulsos de ultrasonido que se reflejan en tejidos con diferentes densidades. El tiempo de 
            retorno (t = 2d/v) determina la profundidad de cada estructura.
          </p>
          <p>
            La velocidad del sonido varía según el tejido: músculo (~1,580 m/s), grasa (~1,450 m/s), 
            hueso (~4,080 m/s). Los ecógrafos calculan distancias usando v = λf y miden tiempos de eco. 
            El ultrasonido es seguro (no usa radiación ionizante) y se usa para monitorear embarazos, 
            diagnosticar problemas cardíacos (ecocardiogramas) y guiar biopsias.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔊 Sonar y Navegación Submarina</h3>
          <p>
            Los submarinos y barcos usan sonar (Sound Navigation And Ranging) para detectar objetos bajo 
            el agua. El sonar activo emite pulsos de sonido (frecuencias típicas: 1-500 kHz) y mide el 
            tiempo de retorno del eco. La distancia al objeto es d = vt/2, donde v ≈ 1,500 m/s en agua 
            de mar (varía con temperatura y salinidad).
          </p>
          <p>
            Los delfines y ballenas usan ecolocalización natural, emitiendo clicks de alta frecuencia 
            (hasta 150 kHz) y analizando los ecos para "ver" su entorno. Los murciélagos usan el mismo 
            principio en el aire (frecuencias 20-200 kHz). Esta biosonar es tan precisa que los murciélagos 
            pueden detectar insectos de 2 mm a varios metros de distancia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📡 Comunicaciones y Tecnología</h3>
          <p>
            Aunque las ondas electromagnéticas dominan las comunicaciones modernas, las ondas mecánicas 
            siguen siendo cruciales. Los micrófonos convierten ondas sonoras en señales eléctricas, y los 
            altavoces hacen lo contrario. Los teléfonos capturan ondas de voz (300-3,400 Hz) y las 
            transmiten digitalmente.
          </p>
          <p>
            Los sistemas de cancelación de ruido (auriculares Bose, Sony) generan ondas con fase opuesta 
            (desfase de 180°) para cancelar ruido ambiental mediante interferencia destructiva. Los 
            estudios de acústica arquitectónica diseñan salas de conciertos y teatros optimizando la 
            propagación de ondas sonoras para evitar ecos y puntos muertos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ Ensayos No Destructivos (END)</h3>
          <p>
            La industria usa ultrasonido para detectar defectos internos en materiales sin dañarlos. 
            Las ondas ultrasónicas (0.5-25 MHz) se propagan por metales, plásticos y cerámicas. Las 
            grietas, burbujas o inclusiones reflejan las ondas, revelando su ubicación y tamaño. Esta 
            técnica inspecciona soldaduras, tuberías, alas de aviones y componentes críticos.
          </p>
          <p>
            Los puentes y edificios se monitorean con sensores de vibración que detectan cambios en las 
            frecuencias naturales de resonancia. Un cambio en la frecuencia puede indicar daño estructural. 
            Después de terremotos, los ingenieros usan estas técnicas para evaluar la integridad de 
            estructuras sin demolerlas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌊 Tsunamis y Alerta Temprana</h3>
          <p>
            Los tsunamis son ondas mecánicas gigantes generadas por terremotos submarinos. En aguas 
            profundas (4,000 m), viajan a v = √(gh) ≈ 200 m/s (720 km/h), con longitudes de onda de 
            100-200 km pero amplitudes de solo 1 m (imperceptibles para barcos). Al llegar a aguas 
            someras, la velocidad disminuye pero la amplitud aumenta dramáticamente (hasta 30+ m).
          </p>
          <p>
            Los sistemas de alerta de tsunamis (DART - Deep-ocean Assessment and Reporting of Tsunamis) 
            usan boyas con sensores de presión en el fondo marino. Detectan el paso de tsunamis midiendo 
            cambios de presión causados por la onda. Calculando v = λf y conociendo la batimetría, 
            predicen tiempos de llegada a costas con minutos u horas de anticipación, salvando miles de vidas.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El Estudio de las Ondas
        </h2>
        
        <div className="theory-subsection">
          <h3>🎻 Galileo y las Cuerdas Vibrantes (1638)</h3>
          <p>
            Galileo Galilei fue uno de los primeros en estudiar sistemáticamente las ondas mecánicas. 
            En su obra "Discorsi" (1638), describió cómo la frecuencia de vibración de una cuerda depende 
            de su longitud, tensión y masa. Observó que cuerdas más cortas vibran más rápido (mayor 
            frecuencia), estableciendo las bases de la acústica musical.
          </p>
          <p>
            Galileo también estudió el péndulo, notando que su periodo es independiente de la amplitud 
            (para oscilaciones pequeñas). Aunque el péndulo no es exactamente una onda, su movimiento 
            periódico comparte matemáticas similares (movimiento armónico simple).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌊 Robert Hooke y las Ondas Elásticas (1660s)</h3>
          <p>
            Robert Hooke estudió la propagación de ondas en materiales elásticos. Su ley de elasticidad 
            (F = -kx, 1660) es fundamental para entender cómo las ondas se propagan en sólidos. Hooke 
            también experimentó con ondas sonoras, demostrando que el sonido no puede viajar en el vacío 
            (experimento de la campana en una bomba de vacío, 1660).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📐 La Ecuación de Onda: D'Alembert y Euler (1746-1748)</h3>
          <p>
            Jean le Rond d'Alembert derivó la primera ecuación de onda matemática (1746) estudiando 
            cuerdas vibrantes: ∂²y/∂t² = v²∂²y/∂x². Esta ecuación describe cómo una perturbación se 
            propaga con velocidad v. Leonhard Euler (1748) generalizó la solución, mostrando que 
            cualquier función de la forma f(x - vt) es solución (onda viajera hacia la derecha).
          </p>
          <p>
            Daniel Bernoulli (1753) propuso que cualquier onda puede descomponerse en suma de ondas 
            sinusoidales simples, anticipando el análisis de Fourier. Esta idea fue controversial: 
            Euler y D'Alembert la rechazaron inicialmente, argumentando que solo funciones "suaves" 
            podían ser soluciones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎼 Joseph Fourier y el Análisis de Ondas (1822)</h3>
          <p>
            Joseph Fourier revolucionó el estudio de ondas con su "Théorie analytique de la chaleur" 
            (1822). Demostró que cualquier función periódica puede expresarse como suma infinita de 
            senos y cosenos (serie de Fourier). Aunque desarrolló esto para estudiar conducción de calor, 
            el análisis de Fourier se convirtió en la herramienta fundamental para estudiar ondas.
          </p>
          <p>
            El análisis de Fourier permite descomponer ondas complejas (como música o voz) en sus 
            frecuencias componentes. Hoy, la Transformada Rápida de Fourier (FFT, 1965) es esencial 
            en procesamiento de señales, compresión de audio (MP3), y análisis espectral.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌍 Ondas Sísmicas y Estructura de la Tierra (1889-1936)</h3>
          <p>
            Ernst von Rebeur-Paschwitz detectó las primeras ondas sísmicas de un terremoto lejano (1889), 
            demostrando que las ondas sísmicas viajan a través de la Tierra. Richard Dixon Oldham (1906) 
            identificó ondas P y S, y descubrió que las ondas S no atraviesan el núcleo terrestre, 
            demostrando que el núcleo es líquido.
          </p>
          <p>
            Inge Lehmann (1936) descubrió el núcleo interno sólido analizando ondas sísmicas que se 
            reflejaban inesperadamente. Andrija Mohorovičić (1909) descubrió la discontinuidad entre 
            corteza y manto (Moho) observando cambios abruptos en la velocidad de ondas sísmicas. Estos 
            descubrimientos revelaron la estructura interna de la Tierra usando solo ondas mecánicas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔊 Desarrollo del Sonar (1915-1918)</h3>
          <p>
            Durante la Primera Guerra Mundial, el hundimiento del Titanic (1912) y la amenaza de 
            submarinos alemanes motivaron el desarrollo del sonar. Paul Langevin (Francia) y Reginald 
            Fessenden (Canadá) desarrollaron independientemente sistemas de detección submarina usando 
            ultrasonido (1915-1918). El primer sonar operacional se instaló en barcos aliados en 1918.
          </p>
          <p>
            Después de la guerra, el sonar se usó para mapear el fondo oceánico, descubriendo montañas 
            submarinas, fosas oceánicas y la dorsal mesoatlántica. Estos descubrimientos fueron cruciales 
            para la teoría de tectónica de placas (1960s).
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🌉 El Colapso del Puente de Tacoma Narrows (1940)</h3>
          <p>
            El 7 de noviembre de 1940, el puente de Tacoma Narrows en Washington colapsó espectacularmente 
            debido a resonancia. Vientos de solo 67 km/h generaron ondas estacionarias en el puente, con 
            frecuencia igual a la frecuencia natural de resonancia de la estructura. La amplitud de las 
            oscilaciones creció hasta que el puente se retorció y colapsó.
          </p>
          <p>
            El colapso fue filmado y se convirtió en el ejemplo clásico de resonancia destructiva. Desde 
            entonces, los ingenieros diseñan puentes considerando cuidadosamente sus frecuencias de 
            resonancia. Curiosamente, el puente había oscilado visiblemente desde su apertura (4 meses 
            antes), ganándose el apodo "Galloping Gertie" (Gertie la Galopante).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦇 Murciélagos: Maestros del Ultrasonido</h3>
          <p>
            Los murciélagos emiten clicks de ultrasonido (20-200 kHz) y analizan los ecos para navegar 
            y cazar en completa oscuridad. Su biosonar es tan preciso que pueden detectar un insecto de 
            2 mm a 5 metros de distancia. Algunos murciélagos pueden distinguir entre diferentes especies 
            de insectos por la "firma acústica" del eco.
          </p>
          <p>
            Las polillas han evolucionado contramedidas: algunas tienen "pelaje" que absorbe ultrasonido 
            (reduciendo el eco), otras pueden detectar los clicks de murciélagos y realizar maniobras 
            evasivas. Esta "carrera armamentista" evolutiva ha durado millones de años, refinando tanto 
            el sonar de murciélagos como las defensas de polillas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎸 La Frecuencia 432 Hz: ¿Mito o Realidad?</h3>
          <p>
            Algunos músicos afirman que afinar instrumentos a 432 Hz (en lugar del estándar 440 Hz) 
            produce música más "armoniosa" o "natural". Argumentan que 432 Hz está en "resonancia con 
            el universo". Sin embargo, no hay evidencia científica que respalde estas afirmaciones.
          </p>
          <p>
            La frecuencia estándar de 440 Hz para el La central fue adoptada internacionalmente en 1939. 
            Antes, diferentes países usaban frecuencias diferentes (entre 415-460 Hz), causando problemas 
            cuando orquestas internacionales tocaban juntas. La elección de 440 Hz fue pragmática, no 
            mística: es un compromiso entre diferentes tradiciones musicales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌊 La Ola Más Grande Jamás Medida</h3>
          <p>
            En 1958, un deslizamiento de tierra en la Bahía de Lituya (Alaska) generó una ola de 524 
            metros de altura, la más alta jamás registrada. La ola arrasó árboles hasta esa altura en 
            las laderas de la bahía. Aunque técnicamente no fue un tsunami (fue una ola de impacto local), 
            demuestra el poder destructivo de las ondas mecánicas en agua.
          </p>
          <p>
            El tsunami del Océano Índico (2004) viajó a través de todo el océano a ~800 km/h. Las ondas 
            llegaron a África Oriental (5,000 km de distancia) 7 horas después del terremoto. La energía 
            total del tsunami fue equivalente a ~26 megatones de TNT, comparable a 1,500 bombas atómicas 
            de Hiroshima.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔇 El Sonido Más Fuerte de la Historia</h3>
          <p>
            La erupción del volcán Krakatoa (1883) produjo el sonido más fuerte jamás registrado: ~310 dB 
            (para comparación, un jet a 30 m produce ~150 dB). El sonido se escuchó a 4,800 km de distancia 
            y dio la vuelta al mundo 4 veces, detectado por barómetros globalmente. La onda de presión 
            rompió tímpanos de marineros a 64 km de distancia.
          </p>
          <p>
            Por encima de ~194 dB en aire, las "ondas sonoras" se convierten en ondas de choque: la 
            presión oscila entre vacío total y el doble de la presión atmosférica. A estos niveles, el 
            concepto de "sonido" pierde sentido: es más una explosión que una onda sonora.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎵 El Efecto Doppler en la Vida Cotidiana</h3>
          <p>
            Cuando una ambulancia pasa, su sirena suena más aguda al acercarse y más grave al alejarse. 
            Este es el efecto Doppler: la frecuencia percibida cambia debido al movimiento relativo. 
            Si la ambulancia se acerca a 30 m/s y la sirena emite 1,000 Hz, escuchas ~1,090 Hz (más agudo). 
            Al alejarse, escuchas ~920 Hz (más grave).
          </p>
          <p>
            Los radares de velocidad de la policía usan el efecto Doppler con ondas electromagnéticas. 
            Los médicos usan Doppler ultrasónico para medir flujo sanguíneo: la sangre que se acerca al 
            transductor refleja ultrasonido con frecuencia ligeramente mayor, revelando velocidad y 
            dirección del flujo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎼 Instrumentos y Física de Ondas</h3>
          <p>
            Un violín Stradivarius (siglo XVII-XVIII) puede valer millones de dólares. Los luthiers 
            (constructores de violines) ajustan meticulosamente el grosor de la madera para optimizar 
            las frecuencias de resonancia. La madera debe ser lo suficientemente rígida para transmitir 
            ondas rápidamente, pero lo suficientemente flexible para vibrar eficientemente.
          </p>
          <p>
            Los órganos de tubos en catedrales tienen tubos de hasta 10 metros de largo para producir 
            notas graves (16 Hz, casi infrasonido). La longitud del tubo determina la longitud de onda 
            de la onda estacionaria: L = λ/2 para tubos cerrados, L = λ/4 para tubos abiertos. El órgano 
            de la Catedral de Passau (Alemania) tiene 17,974 tubos, el más grande del mundo.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          Las ondas mecánicas son perturbaciones que se propagan a través de un medio material, 
          transportando energía sin transportar materia. Se caracterizan por parámetros fundamentales: 
          amplitud (A), longitud de onda (λ), periodo (T), frecuencia (f = 1/T), y velocidad (v = λf).
        </p>
        <p>
          El número de onda (k = 2π/λ) y la frecuencia angular (ω = 2πf) son útiles para describir 
          ondas matemáticamente. Las relaciones fundamentales v = λf y f = 1/T conectan todos los 
          parámetros ondulatorios.
        </p>
        <p>
          Las ondas mecánicas tienen aplicaciones vastas: música (instrumentos), medicina (ultrasonido), 
          geología (ondas sísmicas), navegación (sonar), comunicaciones (micrófonos/altavoces), e 
          ingeniería (ensayos no destructivos). El estudio de ondas, iniciado por Galileo (1638) y 
          formalizado por D'Alembert y Euler (1746-1748), es fundamental en física moderna.
        </p>
      </div>
    </>
  );
};

export default Theory;
