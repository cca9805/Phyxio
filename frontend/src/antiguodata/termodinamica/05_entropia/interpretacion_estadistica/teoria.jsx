import { TheorySection, Concept } from '../../../../components/TheoryV2';
import { theoreticalConcepts } from './definitions.js';

// Metadatos del tema teórico
export const metadata = {
  titulo: "Interpretación Estadística de la Entropía",
  descripcion: "Fundamentos microscópicos de la entropía y su relación con la probabilidad de los estados",
  isTheoryOnly: true,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const InterpretacionEstadisticaTheory = () => {
  return (
    <>
      <TheorySection title="Introducción" variant="theoretical">
        <div className="theory-only-intro">
          <p className="theory-description">
            {theoreticalConcepts.mainTopic} es un área fundamental de la termodinámica que 
            abarca {theoreticalConcepts.description.toLowerCase()}. Este subtema desarrolla los conceptos 
            teóricos esenciales para la comprensión profunda de los principios termodinámicos.
          </p>
          <div className="main-concept-highlight">
            <h4>💡 Concepto Principal:</h4>
            <p className="main-concept">{theoreticalConcepts.mainConcept}</p>
          </div>
        </div>
      </TheorySection>

      <TheorySection title="Microestados y Macroestados" variant="theoretical">
        <Concept title="Definiciones Fundamentales" variant="detailed">
          <div className="detailed-content">
            <p>Microestado: Configuración microscópica específica del sistema (posiciones y velocidades de todas las partículas).</p>
            <p>Macroestado: Estado termodinámico observable caracterizado por variables macroscópicas (P, V, T, etc.).</p>
            <div className="example-box">
              <h5>Ejemplo: Gas en un recipiente</h5>
              <ul>
                <li>Macroestado: P = 1 atm, V = 1 L, T = 300 K</li>
                <li>Microestados: Infinitas configuraciones de posiciones y velocidades moleculares compatibles con ese macroestado</li>
              </ul>
            </div>
          </div>
        </Concept>

        <Concept title="Multiplicidad de Estados" variant="detailed">
          <div className="detailed-content">
            <p>Multiplicidad (W): Número de microestados compatibles con un macroestado dado.</p>
            <ul>
              <li>Macroestados con mayor W son más probables de observar</li>
              <li>El sistema evoluciona naturalmente hacia macroestados de mayor W</li>
              <li>El equilibrio termodinámico corresponde al macroestado de máxima W</li>
              <li>La multiplicidad aumenta exponencialmente con el número de partículas</li>
            </ul>
            <div className="example-box">
              <h5>Analogía: Lanzamiento de Monedas</h5>
              <p>
                Al lanzar 10 monedas, el macroestado "5 caras y 5 cruces" tiene W = 252 microestados. 
                El macroestado "10 caras" tiene W = 1. Por tanto, obtener aproximadamente 50% caras 
                es 252 veces más probable que obtener 100% caras.
              </p>
            </div>
          </div>
        </Concept>

        <Concept title="Espacio de Fases" variant="detailed">
          <div className="detailed-content">
            <p>
              El espacio de fases es un espacio multidimensional donde cada punto representa un 
              microestado completo del sistema (todas las posiciones q y momentos p de todas las partículas).
            </p>
            <ul>
              <li>Para N partículas en 3D: espacio de fases de 6N dimensiones (3N posiciones + 3N momentos)</li>
              <li>Un macroestado corresponde a una región del espacio de fases</li>
              <li>W es proporcional al volumen de esa región</li>
              <li>La evolución temporal es una trayectoria en el espacio de fases</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="La Ecuación de Boltzmann" variant="theoretical">
        <Concept title="Fórmula Fundamental de la Entropía Estadística" variant="detailed">
          <div className="detailed-content">
            <div className="formula-display" style={{fontSize: '1.5em', margin: '20px 0', textAlign: 'center'}}>
              S = k<sub>B</sub> ln(W)
            </div>
            <p>Donde:</p>
            <ul>
              <li>S: Entropía del sistema (J/K)</li>
              <li>k<sub>B</sub>: Constante de Boltzmann = 1.381 × 10<sup>-23</sup> J/K</li>
              <li>W: Número de microestados accesibles (multiplicidad)</li>
              <li>ln: Logaritmo natural</li>
            </ul>
            <p>
              Significado profundo: La entropía es proporcional al logaritmo del número de formas 
              en que se puede realizar un estado macroscópico. Mide la "cantidad de ignorancia" 
              sobre el microestado exacto del sistema.
            </p>
          </div>
        </Concept>

        <Concept title="¿Por qué el Logaritmo?" variant="detailed">
          <div className="detailed-content">
            <p>El logaritmo en la ecuación de Boltzmann es esencial por varias razones:</p>
            <ul>
              <li>
                Aditividad: Para dos sistemas independientes A y B, W<sub>total</sub> = W<sub>A</sub> × W<sub>B</sub>. 
                Con el logaritmo: S<sub>total</sub> = k<sub>B</sub> ln(W<sub>A</sub> × W<sub>B</sub>) = 
                k<sub>B</sub> ln(W<sub>A</sub>) + k<sub>B</sub> ln(W<sub>B</sub>) = S<sub>A</sub> + S<sub>B</sub>. 
                ¡La entropía es aditiva!
              </li>
              <li>
                Conexión con termodinámica: El logaritmo hace que S sea proporcional a N (número de partículas), 
                que es una propiedad extensiva.
              </li>
              <li>
                Escala apropiada: W puede ser astronómicamente grande (10^(10^23)), el logaritmo lo reduce 
                a valores manejables.
              </li>
            </ul>
          </div>
        </Concept>

        <Concept title="Consecuencias de la Ecuación de Boltzmann" variant="detailed">
          <div className="detailed-content">
            <ul>
              <li>
                Mayor desorden → Mayor W → Mayor S: Estados desordenados tienen vastamente más 
                microestados que estados ordenados.
              </li>
              <li>
                Procesos espontáneos: Evolucionan hacia estados de mayor W (mayor probabilidad), 
                lo que implica mayor S.
              </li>
              <li>
                Irreversibilidad: Volver a un estado de menor W es estadísticamente posible pero 
                extremadamente improbable (probabilidad ~ 10^(-10^23)).
              </li>
              <li>
                Equilibrio: Corresponde al macroestado con máxima W, que es el más probable. 
                El sistema permanece allí porque salir es estadísticamente improbable.
              </li>
              <li>
                Fluctuaciones: En sistemas pequeños o durante tiempos cortos, pueden observarse 
                desviaciones temporales hacia estados de menor S.
              </li>
            </ul>
          </div>
        </Concept>

        <Concept title="Cálculo de la Multiplicidad" variant="detailed">
          <div className="detailed-content">
            <p>Para diferentes sistemas:</p>
            <ul>
              <li>
                Gas ideal: W ∝ V<sup>N</sup> (V = volumen, N = número de partículas). 
                Al duplicar el volumen, W aumenta por factor 2<sup>N</sup> ≈ 10^(10^23).
              </li>
              <li>
                Distribución de energía: W depende de cuántas formas hay de distribuir 
                la energía total entre las partículas (tema de mecánica estadística avanzada).
              </li>
              <li>
                Sólidos cristalinos: W incluye vibraciones térmicas de los átomos en la red.
              </li>
              <li>
                Sistemas cuánticos: W cuenta estados cuánticos accesibles dentro de la energía disponible.
              </li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Conexión Micro-Macro" variant="theoretical">
        <Concept title="Puente entre Mecánica Estadística y Termodinámica" variant="detailed">
          <div className="detailed-content">
            <p>La ecuación de Boltzmann es el puente fundamental entre dos descripciones del mundo físico:</p>
            <table style={{width: '100%', marginTop: '15px', borderCollapse: 'collapse'}}>
              <thead>
                <tr>
                  <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Mecánica Estadística (Micro)</th>
                  <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Termodinámica (Macro)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>Microestados individuales</td>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>Macroestados observables</td>
                </tr>
                <tr>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>Multiplicidad W</td>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>Entropía S</td>
                </tr>
                <tr>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>Probabilidad</td>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>Segunda ley</td>
                </tr>
                <tr>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>Leyes reversibles</td>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>Procesos irreversibles</td>
                </tr>
                <tr>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>Determinista (en principio)</td>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>Estadístico (en práctica)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Concept>

        <Concept title="Ejemplo Cuantitativo: Expansión de un Gas" variant="detailed">
          <div className="detailed-content">
            <p>Considere 1 mol de gas ideal que se expande de V<sub>1</sub> = 1 L a V<sub>2</sub> = 2 L:</p>
            <ul>
              <li>
                Multiplicidad inicial: W<sub>1</sub> ∝ V<sub>1</sub><sup>N</sup>
              </li>
              <li>
                Multiplicidad final: W<sub>2</sub> ∝ V<sub>2</sub><sup>N</sup> = (2V<sub>1</sub>)<sup>N</sup> = 2<sup>N</sup> × V<sub>1</sub><sup>N</sup>
              </li>
              <li>
                W<sub>2</sub>/W<sub>1</sub> = 2<sup>N</sup> = 2<sup>6.022×10^23</sup> ≈ 10<sup>1.8×10^23</sup>
              </li>
              <li>
                Cambio de entropía: ΔS = k<sub>B</sub> ln(W<sub>2</sub>/W<sub>1</sub>) = k<sub>B</sub> N ln(2) = R ln(2) ≈ 5.76 J/K
              </li>
            </ul>
            <p>
              La probabilidad de que el gas vuelva espontáneamente al volumen V<sub>1</sub> es 
              1/W<sub>2</sub>/W<sub>1</sub> = 1/2<sup>N</sup> ≈ 10<sup>-1.8×10^23</sup>. 
              ¡Prácticamente imposible!
            </p>
          </div>
        </Concept>

        <Concept title="Naturaleza Estadística de la Segunda Ley" variant="detailed">
          <div className="detailed-content">
            <p>La interpretación estadística revela que:</p>
            <ul>
              <li>
                La segunda ley no es absoluta: Violaciones son teóricamente posibles, 
                pero tienen probabilidad exponencialmente pequeña.
              </li>
              <li>
                Violaciones microscópicas son observables: En sistemas pequeños (nanoscale) 
                o tiempos cortos, se pueden medir violaciones temporales de la segunda ley.
              </li>
              <li>
                Para sistemas macroscópicos: La probabilidad de violación es tan pequeña 
                (~10<sup>-10^23</sup>) que nunca se observará en la vida del universo.
              </li>
              <li>
                Irreversibilidad emerge del número: Con N ~ 10<sup>23</sup> partículas, 
                el comportamiento estadístico se vuelve efectivamente determinista.
              </li>
              <li>
                Teorema de fluctuación-disipación: Cuantifica las violaciones temporales 
                de la segunda ley en sistemas pequeños.
              </li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Entropía e Información" variant="theoretical">
        <Concept title="Entropía como Medida de Ignorancia" variant="detailed">
          <div className="detailed-content">
            <p>
              Desde una perspectiva informacional, la entropía mide nuestra "ignorancia" sobre 
              el microestado exacto del sistema. Conocer el macroestado deja W microestados 
              posibles, y S = k<sub>B</sub> ln(W) cuantifica esta incertidumbre.
            </p>
            <ul>
              <li>S = 0 (W = 1): Conocimiento completo (un solo microestado posible)</li>
              <li>S grande (W enorme): Gran incertidumbre (muchos microestados compatibles)</li>
              <li>Al obtener información sobre el sistema, S puede disminuir localmente</li>
              <li>Pero obtener información requiere gastar energía, aumentando S globalmente</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Conexión con Teoría de la Información" variant="detailed">
          <div className="detailed-content">
            <p>
              Claude Shannon desarrolló la teoría de la información en 1948, definiendo la 
              entropía de Shannon: H = -Σ p<sub>i</sub> log(p<sub>i</sub>). Esta fórmula es 
              matemáticamente idéntica a la entropía de Boltzmann cuando p<sub>i</sub> = 1/W 
              (estados equiprobables).
            </p>
            <p>
              Esta conexión profunda sugiere que la entropía termodinámica y la entropía 
              informacional son conceptos fundamentalmente relacionados. Ambas miden incertidumbre.
            </p>
          </div>
        </Concept>

        <Concept title="Demonio de Maxwell Revisitado" variant="detailed">
          <div className="detailed-content">
            <p>
              Desde la perspectiva estadística-informacional, la resolución del demonio de 
              Maxwell es clara:
            </p>
            <ul>
              <li>El demonio necesita información sobre las velocidades moleculares</li>
              <li>Almacenar esta información reduce la entropía de su memoria</li>
              <li>Borrar la memoria para continuar operando genera entropía</li>
              <li>La entropía generada al borrar compensa exactamente la reducción en el gas</li>
              <li>El balance neto: ΔS<sub>total</sub> ≥ 0, segunda ley preservada</li>
            </ul>
            <p>
              Este resultado (principio de Landauer) establece un límite fundamental energético 
              para la computación: borrar 1 bit de información genera al menos k<sub>B</sub> T ln(2) 
              de entropía.
            </p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Implicaciones Filosóficas" variant="theoretical">
        <Concept title="Reduccionismo vs Emergencia" variant="detailed">
          <div className="detailed-content">
            <p>
              La interpretación estadística de la entropía ilustra un profundo principio filosófico:
            </p>
            <ul>
              <li>
                Las leyes fundamentales (mecánica) son reversibles y deterministas
              </li>
              <li>
                Las leyes termodinámicas (segunda ley) son irreversibles y estadísticas
              </li>
              <li>
                La irreversibilidad emerge del comportamiento colectivo de muchas partículas
              </li>
              <li>
                Esta es una forma de "emergencia": propiedades del todo que no existen en las partes
              </li>
            </ul>
          </div>
        </Concept>

        <Concept title="Tiempo y Memoria" variant="detailed">
          <div className="detailed-content">
            <p>
              La entropía define la "flecha del tiempo": el futuro es la dirección de aumento de S. 
              Nuestra memoria funciona en esta dirección porque:
            </p>
            <ul>
              <li>Recordar el pasado es posible (el pasado dejó correlaciones, baja entropía)</li>
              <li>Recordar el futuro es imposible (el futuro aún no ha creado correlaciones)</li>
              <li>Formar memorias es un proceso de reducción local de entropía</li>
              <li>Pero requiere aumento global de entropía (metabolismo cerebral)</li>
            </ul>
            <p>
              Sin la segunda ley y el aumento de entropía, no existiría el concepto de tiempo ni 
              de memoria.
            </p>
          </div>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>Física y Mecánica Estadística</h3>
          <ul>
            <li>
              🔬 Mecánica estadística: La ecuación de Boltzmann es el fundamento de toda la 
              mecánica estadística moderna. Permite calcular propiedades termodinámicas 
              (presión, calor específico, etc.) desde primeros principios microscópicos.
            </li>
            <li>
              🧪 Física de materia condensada: Se usa para entender transiciones de fase 
              (fusión, evaporación, magnetismo) como cambios en la multiplicidad de estados.
            </li>
            <li>
              ⚛️ Mecánica cuántica estadística: La fórmula se extiende a sistemas cuánticos, 
              donde W cuenta estados cuánticos. Fundamental para entender superconductividad, 
              superfluidez, condensados de Bose-Einstein.
            </li>
            <li>
              🌌 Astrofísica: Se aplica al estudio de agujeros negros (entropía de Bekenstein-Hawking), 
              estrellas de neutrones, y el universo temprano.
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Química y Bioquímica</h3>
          <ul>
            <li>
              ⚗️ Equilibrio químico: La constante de equilibrio K está relacionada con la 
              diferencia en multiplicidad (entropía) entre reactivos y productos. Las reacciones 
              proceden hacia mayor W total.
            </li>
            <li>
              🧬 Plegamiento de proteínas: Las proteínas se pliegan en estructuras específicas 
              (baja entropía configuracional) porque esto maximiza interacciones favorables y 
              entropía del solvente. El balance determina la estructura final.
            </li>
            <li>
              🧫 Auto-ensamblaje: Membranas celulares, micelas, y estructuras supramoleculares 
              se forman espontáneamente cuando aumentan la entropía total del sistema (incluido 
              el solvente).
            </li>
            <li>
              💊 Diseño de fármacos: La unión fármaco-receptor depende del balance entropía-entalpía. 
              Un fármaco que reduce mucho la entropía al unirse puede tener mala afinidad.
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Información y Computación</h3>
          <ul>
            <li>
              💾 Límites termodinámicos de la computación: El principio de Landauer establece 
              que borrar información disipa al menos k<sub>B</sub> T ln(2) ≈ 3×10<sup>-21</sup> J 
              por bit a temperatura ambiente. Los computadores actuales disipan ~10<sup>8</sup> 
              veces más, pero computadores cuánticos futuros podrían acercarse a este límite.
            </li>
            <li>
              🔐 Criptografía: La entropía de Shannon mide la impredecibilidad de claves 
              criptográficas. Una clave de n bits tiene entropía máxima n bits si todos los 
              valores son equiprobables.
            </li>
            <li>
              📊 Compresión de datos: Los algoritmos de compresión sin pérdida no pueden reducir 
              la entropía de Shannon por debajo de un límite fundamental. La compresión óptima 
              alcanza este límite.
            </li>
            <li>
              🤖 Aprendizaje automático: Muchos algoritmos (como máxima entropía, aprendizaje 
              de Boltzmann) se basan explícitamente en conceptos de entropía estadística.
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Sistemas Complejos</h3>
          <ul>
            <li>
              📈 Econofísica: Modelos estadísticos de mercados financieros usan conceptos de 
              entropía para cuantificar incertidumbre y diversidad.
            </li>
            <li>
              🧠 Neurociencia: Algunos modelos de procesamiento cerebral usan entropía para 
              medir complejidad de patrones neuronales y eficiencia de codificación.
            </li>
            <li>
              🌱 Ecología: La diversidad de especies en ecosistemas se cuantifica con índices 
              de entropía (Shannon, Simpson).
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Nanotecnología</h3>
          <ul>
            <li>
              🔬 Motores moleculares: A escala nanométrica, fluctuaciones térmicas son 
              significativas. Los motores moleculares (como ATP sintasa) operan en régimen 
              donde la segunda ley es estadística, no absoluta.
            </li>
            <li>
              ⚙️ Máquinas térmicas nanoscópicas: Se han construido "máquinas de Carnot" de 
              pocos átomos donde se observan violaciones temporales de la segunda ley.
            </li>
            <li>
              🧲 Trampa óptica: Permiten medir trabajo y calor en sistemas de partículas 
              individuales, verificando experimentalmente teoremas de fluctuación.
            </li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Del Desorden al Orden Conceptual
        </h2>
        
        <div className="theory-subsection">
          <h3>Ludwig Boltzmann - El Arquitecto (1844-1906)</h3>
          <p>
            Ludwig Boltzmann desarrolló la interpretación estadística de la entropía entre 1866 
            y 1877. Su artículo de 1877 "Sobre la relación entre la segunda ley de la teoría 
            mecánica del calor y el cálculo de probabilidades" estableció la ecuación 
            S = k ln W (aunque él usó una notación diferente).
          </p>
          <p>
            Boltzmann enfrentó fuerte oposición de científicos eminentes como Ernst Mach y 
            Wilhelm Ostwald, quienes rechazaban la teoría atómica y argumentaban que la 
            termodinámica no necesitaba átomos. Los ataques constantes, combinados con 
            problemas de salud mental, llevaron a Boltzmann al suicidio en 1906.
          </p>
          <p>
            Trágicamente, solo meses después de su muerte, Jean Perrin verificó experimentalmente 
            la existencia de átomos mediante observaciones de movimiento browniano, validando 
            completamente el trabajo de Boltzmann.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Max Planck - El Embajador (1858-1947)</h3>
          <p>
            Max Planck fue uno de los pocos contemporáneos que apoyó el trabajo de Boltzmann. 
            En 1900, Planck usó métodos estadísticos similares para derivar su famosa ley de 
            radiación del cuerpo negro, dando nacimiento a la mecánica cuántica.
          </p>
          <p>
            Planck fue quien escribió la ecuación de Boltzmann en su forma moderna S = k ln W 
            y propuso que la constante k se llamara "constante de Boltzmann" en su honor. 
            Esta constante conecta el mundo microscópico con el macroscópico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Josiah Willard Gibbs - El Sistematizador (1839-1903)</h3>
          <p>
            Independientemente de Boltzmann, el físico estadounidense J. W. Gibbs desarrolló 
            un formalismo más general de mecánica estadística. Su "ensemble" de Gibbs 
            proporciona métodos sistemáticos para calcular propiedades termodinámicas.
          </p>
          <p>
            Gibbs trabajó en relativo aislamiento en Yale. Su obra monumental "Elementary 
            Principles in Statistical Mechanics" (1902) fue inicialmente poco apreciada, 
            pero eventualmente se reconoció como fundamental.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Paul y Tatiana Ehrenfest - Los Clarificadores (1900-1933)</h3>
          <p>
            El matrimonio Ehrenfest escribió en 1911 el artículo más claro sobre mecánica 
            estadística hasta esa fecha, clarificando conceptos que Boltzmann había dejado 
            confusos. Introdujeron la distinción clara entre ergodicidad y cuasi-ergodicidad.
          </p>
          <p>
            Trágicamente, Paul Ehrenfest, quien sufría de depresión, también se suicidó en 
            1933. Su muerte y la de Boltzmann reflejan las enormes presiones intelectuales 
            de trabajar en estas ideas profundas y controversiales.
          </p>
        </div>

        <div className="theory-section-highlight">
          <h4>🎯 La Controversia de la Reversibilidad</h4>
          <p>
            En la década de 1890, dos importantes objeciones atacaron la teoría de Boltzmann:
          </p>
          <ul>
            <li>
              Paradoja de Loschmidt (1876): Si las leyes microscópicas son reversibles, 
              ¿cómo puede surgir la irreversibilidad?
            </li>
            <li>
              Paradoja del retorno de Poincaré (1890): En sistema finito, el teorema de 
              Poincaré garantiza que eventualmente regresará cerca de cualquier estado inicial. 
              ¿Cómo puede entonces la entropía aumentar indefinidamente?
            </li>
          </ul>
          <p>
            Boltzmann respondió brillantemente: La segunda ley es estadística. El tiempo de 
            retorno de Poincaré es tan astronomicamente largo que nunca se observará. Las 
            leyes fundamentales permiten reversibilidad, pero la probabilidad de observarla 
            es prácticamente cero.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Verificación Experimental (Siglo XX)</h3>
          <p>
            Durante el siglo XX, múltiples experimentos verificaron predicciones de la 
            mecánica estadística:
          </p>
          <ul>
            <li>
              Jean Perrin (1908): Midió el número de Avogadro estudiando movimiento browniano, 
              confirmando teoría cinética.
            </li>
            <li>
              Otto Stern (1920): Experimento de Stern-Gerlach verificó la cuantización del 
              momento angular, validando mecánica estadística cuántica.
            </li>
            <li>
              Experimentos modernos (2000s): Con pinzas ópticas y AFM, se pueden medir trabajo 
              y calor en sistemas de partículas individuales, verificando teoremas de fluctuación 
              y observando violaciones temporales de la segunda ley.
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Claude Shannon - El Puente (1916-2001)</h3>
          <p>
            En 1948, Claude Shannon publicó "A Mathematical Theory of Communication", 
            estableciendo la teoría de la información. Su definición de entropía informacional 
            es matemáticamente idéntica a la de Boltzmann.
          </p>
          <p>
            Cuando Shannon consultó a John von Neumann sobre qué nombre usar para su medida 
            de incertidumbre, von Neumann supuestamente respondió: "Llámala entropía. 
            Nadie sabe realmente qué es la entropía, así siempre ganarás los debates."
          </p>
          <p>
            Esta conexión entre termodinámica e información es ahora fundamental en física 
            de la información cuántica y computación.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>📖 La Tumba más Científica del Mundo</h3>
          <p>
            En el Cementerio Central de Viena, la tumba de Ludwig Boltzmann tiene grabada 
            su ecuación S = k log W. Es probablemente la única tumba en el mundo con una 
            ecuación fundamental de la física.
          </p>
          <p>
            Curiosamente, Boltzmann nunca escribió la ecuación exactamente en esta forma. 
            Él usaba H en lugar de S y escribía el logaritmo en base e. Fue Max Planck quien 
            la escribió en la forma moderna, y propuso poner esta versión en la tumba.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎲 La Apuesta de un Billón de Años</h3>
          <p>
            Imagine un gas en la mitad de un recipiente. La probabilidad de que espontáneamente 
            todas las moléculas se muevan a una mitad es aproximadamente (1/2)<sup>N</sup> donde 
            N ≈ 10<sup>23</sup>.
          </p>
          <p>
            Si observara el gas cada nanosegundo (10<sup>-9</sup> s) esperando este evento, 
            el tiempo esperado es 2<sup>10^23</sup> nanosegundos ≈ 10<sup>10^23</sup> años. 
            El universo tiene solo 1.4 × 10<sup>10</sup> años. ¡Necesitarías esperar 10<sup>10^23 - 10</sup> 
            vidas del universo!
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔮 El Teorema del Mono Mecanógrafo</h3>
          <p>
            Un mono tecleando al azar eventualmente escribirá las obras completas de Shakespeare. 
            Esto es análogo a la paradoja del retorno de Poincaré: en tiempo suficiente, 
            cualquier configuración se repetirá.
          </p>
          <p>
            El tiempo esperado es 26<sup>~5,000,000</sup> (26 letras, ~5 millones de caracteres 
            en Shakespeare) ≈ 10<sup>7,000,000</sup> teclas. Si el mono teclea 1 tecla por 
            segundo, esto tomaría 10<sup>7,000,000</sup> segundos ≈ 10<sup>6,999,983</sup> años. 
            Hace que la edad del universo parezca un pestañeo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌡️ El Huevo que se Desrompe</h3>
          <p>
            Las ecuaciones de la mecánica son simétricas en el tiempo: funcionan igual hacia 
            adelante o atrás. Entonces, ¿por qué nunca vemos un huevo roto "desromperse" y 
            volver a estar entero?
          </p>
          <p>
            Respuesta: El huevo roto tiene vastamente más microestados (W enorme) que el huevo 
            entero (W pequeño). La probabilidad de que las piezas espontáneamente se reorganicen 
            en un huevo entero es 1/W ≈ 10<sup>-10^23</sup>. No es imposible, solo ridículamente 
            improbable.
          </p>
          <p>
            Richard Feynman dijo: "Un filósofo preguntó: '¿Por qué puedo recordar el pasado 
            pero no el futuro?' En lugar de responderle, el físico debería hacerle otra pregunta: 
            '¿Cómo recuerdas el pasado?' La respuesta está en la entropía."
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💻 El Bit más Barato del Mundo</h3>
          <p>
            El principio de Landauer establece que borrar 1 bit de información disipa al menos 
            k<sub>B</sub> T ln(2) de energía como calor. A temperatura ambiente (300 K), esto es:
          </p>
          <p>
            E<sub>min</sub> = (1.381 × 10<sup>-23</sup> J/K) × (300 K) × ln(2) ≈ 2.87 × 10<sup>-21</sup> J
          </p>
          <p>
            Los computadores modernos usan ~10<sup>8</sup> veces más energía por operación. 
            Hay enorme margen para mejorar eficiencia energética, pero hay un límite fundamental. 
            La computación nunca será completamente gratuita energéticamente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Viendo la Segunda Ley Romperse</h3>
          <p>
            En 2002, usando pinzas ópticas, científicos observaron por primera vez violaciones 
            temporales de la segunda ley en sistemas de partículas individuales. Durante intervalos 
            cortos (~2 segundos), la entropía disminuyó espontáneamente.
          </p>
          <p>
            Esto no viola la segunda ley: los teoremas de fluctuación predicen exactamente 
            con qué frecuencia y magnitud ocurren estas violaciones. Para sistemas macroscópicos, 
            la probabilidad es prácticamente cero, pero para sistemas nanoscópicos es medible.
          </p>
        </div>

        <div className="theory-section-highlight">
          <h4>💡 La Ecuación Más Triste</h4>
          <p>
            Arthur Eddington escribió en 1927: "La ley de que la entropía siempre aumenta 
            sostiene la posición suprema entre las leyes de la Naturaleza. Si alguien te 
            señala que tu teoría favorita del universo está en desacuerdo con las ecuaciones 
            de Maxwell, tanto peor para las ecuaciones de Maxwell. Si se encuentra que contradice 
            la observación, bueno, los experimentadores a veces se equivocan. Pero si tu teoría 
            contradice la segunda ley de la termodinámica, no puedo darte esperanza; no hay 
            nada más que el colapso más humillante."
          </p>
          <p>
            La segunda ley, con su interpretación estadística de Boltzmann, es posiblemente 
            la ley más fundamental y universal de la física.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧠 El Cerebro de Boltzmann</h3>
          <p>
            Una paradoja moderna: si el universo existe en un estado de alta entropía y 
            esperamos tiempo infinito, fluctuaciones estadísticas eventualmente crearán 
            cualquier configuración, incluyendo un cerebro consciente ("cerebro de Boltzmann") 
            con memorias falsas.
          </p>
          <p>
            Es vastamente más probable que un solo cerebro se forme por fluctuación que todo 
            un universo ordenado. Entonces, ¿por qué observamos un universo entero en lugar 
            de ser un cerebro de Boltzmann?
          </p>
          <p>
            Esta paradoja sugiere que nuestras teorías cosmológicas podrían estar incompletas, 
            o que el universo no existe en un estado de máxima entropía por tiempo infinito. 
            Boltzmann mismo identificó este problema en sus escritos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 La Constante más Personal</h3>
          <p>
            La constante de Boltzmann k<sub>B</sub> = 1.381 × 10<sup>-23</sup> J/K es única 
            entre las constantes fundamentales de la física: no es una propiedad del universo 
            sino de nuestra elección de unidades.
          </p>
          <p>
            Si midiéramos temperatura en julios en lugar de kelvins, k<sub>B</sub> = 1. 
            La constante solo existe porque históricamente definimos temperatura antes de 
            entender su relación con energía. En unidades naturales usadas por físicos teóricos, 
            k<sub>B</sub> = 1 y desaparece de todas las ecuaciones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌌 La Entropía del Universo</h3>
          <p>
            La entropía total del universo observable es dominada por agujeros negros. 
            Un agujero negro de masa solar tiene entropía S ≈ 10<sup>54</sup> k<sub>B</sub>, 
            vastamente mayor que cualquier otra cosa del mismo tamaño.
          </p>
          <p>
            Si caes en un agujero negro, tu entropía (≈ 10<sup>28</sup> k<sub>B</sub>) se 
            convierte en entropía del agujero negro. La información no se destruye, pero se 
            vuelve prácticamente imposible de recuperar. Este es el "problema de información 
            del agujero negro" que Stephen Hawking estudió durante décadas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔄 El Milagro de la Vida</h3>
          <p>
            Los seres vivos parecen violar la segunda ley: creamos orden (reducimos entropía) 
            a partir de comida desorganizada. Erwin Schrödinger escribió en "¿Qué es la Vida?" 
            (1944): "Los organismos se alimentan de entropía negativa."
          </p>
          <p>
            La resolución: los seres vivos son sistemas abiertos. Consumimos energía química 
            de alta calidad (baja entropía) y devolvemos calor (alta entropía). El balance 
            neto: aumentamos la entropía del universo, satisfaciendo la segunda ley.
          </p>
          <p>
            La vida no viola la segunda ley; la aprovecha. Somos estructuras disipativas que 
            existen precisamente porque aumentan la entropía del universo de manera eficiente.
          </p>
        </div>
      </div>
    </>
  );
};

export default InterpretacionEstadisticaTheory;
