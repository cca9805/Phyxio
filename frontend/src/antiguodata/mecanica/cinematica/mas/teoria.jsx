import { TheorySection, Concept, Formula } from '../../../../components/TheoryV2';
import { definitions as masDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "MAS - Movimiento Armónico Simple",
  descripcion: "Movimiento oscilatorio periódico con fuerza restauradora",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const MasTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es el Movimiento Armónico Simple (MAS)?">
        <p>
          El Movimiento Armónico Simple (MAS) es un tipo de movimiento oscilatorio periódico que ocurre cuando una fuerza restauradora es directamente proporcional al desplazamiento del objeto desde su posición de equilibrio.
        </p>
        <p>
          Este movimiento es fundamental en física, ya que modela una gran variedad de fenómenos, desde el balanceo de un péndulo hasta las vibraciones de los átomos en una red cristalina.
        </p>
      </TheorySection>

      <TheorySection title="Parámetros Fundamentales del MAS">
        <p>El MAS se describe mediante varios parámetros clave que definen su comportamiento cíclico.</p>
        <Concept title="Frecuencia, Período y Frecuencia Angular">
          <p>Estas tres magnitudes están interrelacionadas y describen el ritmo de la oscilación.</p>
          <Formula
            expression={String.raw`\omega = \frac{2\pi}{T}`}
            calculatorId="mas-parametros-fundamentales"
            definitions={masDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Período (T)", expression: String.raw`T = \frac{2\pi}{\omega}` },
              { description: "Calcular Frecuencia (f)", expression: String.raw`f = \frac{1}{T}` },
              { description: "Calcular Frecuencia Angular (ω)", expression: String.raw`\omega = 2\pi f` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>ω = Frecuencia angular (rad/s)</li>
            <li>T = Período (s)</li>
            <li>f = Frecuencia (Hz o s⁻¹)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Sistemas Oscilatorios Comunes">
        <Concept title="Sistema Masa-Resorte">
          <p>Es el modelo canónico del MAS. La frecuencia angular depende de la masa (m) y la constante elástica del resorte (k).</p>
          <Formula 
            expression={String.raw`\omega = \sqrt{\frac{k}{m}}`}
            calculatorId="mas-sistema-resorte"
            definitions={masDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Constante Elástica (k)", expression: String.raw`k = m \cdot \omega^2` },
              { description: "Calcular Masa (m)", expression: String.raw`m = \frac{k}{\omega^2}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>ω = Frecuencia angular (rad/s)</li>
            <li>k = Constante elástica del resorte (N/m)</li>
            <li>m = Masa del objeto (kg)</li>
          </ul>
        </Concept>
        <Concept title="Péndulo Simple">
          <p>Para pequeñas oscilaciones, un péndulo simple se aproxima a un MAS. Su frecuencia angular depende de la longitud (L) y la gravedad (g).</p>
          <Formula 
            expression={String.raw`\omega = \sqrt{\frac{g}{L}}`}
            calculatorId="mas-pendulo-simple"
            definitions={masDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Longitud (L)", expression: String.raw`L = \frac{g}{\omega^2}` },
              { description: "Calcular Gravedad (g)", expression: String.raw`g = L \cdot \omega^2` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>ω = Frecuencia angular (rad/s)</li>
            <li>g = Aceleración de la gravedad (9.8 m/s²)</li>
            <li>L = Longitud del péndulo (m)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Cinemática del MAS">
        <p>Las ecuaciones de posición, velocidad y aceleración describen el estado del oscilador en cualquier instante de tiempo.</p>
        <Concept title="Ecuaciones de Movimiento">
          <p>La posición, velocidad y aceleración varían sinusoidalmente en el tiempo.</p>
          <Formula 
            expression={String.raw`x(t) = A \cos(\omega t + \phi)`}
            calculatorId="mas-cinematica"
            definitions={masDefinitions}
            exercises={exercises}
          />
          <Formula 
            expression={String.raw`v(t) = -A\omega \sin(\omega t + \phi)`}
            isPrimary={false}
          />
          <Formula 
            expression={String.raw`a(t) = -A\omega^2 \cos(\omega t + \phi)`}
            isPrimary={false}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>x(t) = Posición en función del tiempo (m)</li>
            <li>v(t) = Velocidad en función del tiempo (m/s)</li>
            <li>a(t) = Aceleración en función del tiempo (m/s²)</li>
            <li>A = Amplitud de la oscilación (m)</li>
            <li>ω = Frecuencia angular (rad/s)</li>
            <li>φ = Fase inicial (rad)</li>
            <li>t = Tiempo (s)</li>
          </ul>
        </Concept>
        <Concept title="Valores Máximos">
          <p>La velocidad es máxima en el punto de equilibrio y la aceleración es máxima en los extremos.</p>
          <Formula 
            expression={String.raw`v_{max} = A \cdot \omega`}
            isPrimary={false}
          />
          <Formula 
            expression={String.raw`a_{max} = A \cdot \omega^2`}
            isPrimary={false}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>v_max = Velocidad máxima (m/s)</li>
            <li>a_max = Aceleración máxima (m/s²)</li>
            <li>A = Amplitud de la oscilación (m)</li>
            <li>ω = Frecuencia angular (rad/s)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Dinámica y Energía del MAS">
        <p>La dinámica se rige por la Ley de Hooke y la energía mecánica total se conserva en un sistema ideal.</p>
        <Concept title="Fuerza y Aceleración">
          <p>La fuerza restauradora es proporcional y opuesta al desplazamiento, lo que genera una aceleración variable.</p>
          <Formula 
            expression={String.raw`F = -k \cdot x`}
            calculatorId="mas-dinamica"
            definitions={masDefinitions}
            exercises={exercises}
          />
          <Formula 
            expression={String.raw`a(x) = -\omega^2 \cdot x`}
            isPrimary={false}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>F = Fuerza restauradora (N)</li>
            <li>k = Constante elástica (N/m)</li>
            <li>x = Desplazamiento desde el equilibrio (m)</li>
            <li>a(x) = Aceleración en función de la posición (m/s²)</li>
            <li>ω = Frecuencia angular (rad/s)</li>
          </ul>
        </Concept>
        <Concept title="Energía del Sistema">
          <p>La energía total es la suma de la energía cinética y potencial elástica, y permanece constante.</p>
          <Formula 
            expression={String.raw`E = \frac{1}{2}kA^2`}
            calculatorId="mas-energia"
            definitions={masDefinitions}
            exercises={exercises}
          />
           <Formula 
            expression={String.raw`E_p = \frac{1}{2}kx^2`}
            isPrimary={false}
          />
           <Formula 
            expression={String.raw`E_k = E - E_p`}
            isPrimary={false}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>E = Energía mecánica total (J)</li>
            <li>E_p = Energía potencial elástica (J)</li>
            <li>E_k = Energía cinética (J)</li>
            <li>k = Constante elástica (N/m)</li>
            <li>A = Amplitud de la oscilación (m)</li>
            <li>x = Desplazamiento desde el equilibrio (m)</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🏗️ Ingeniería sísmica y edificios</h3>
          <p>
            Los edificios altos oscilan como péndulos invertidos cuando son sacudidos por el viento o terremotos. Los ingenieros diseñan amortiguadores de masa sintonizada (TMD) que oscilan en MAS con una frecuencia específica para contrarrestar las vibraciones del edificio. El Taipei 101 tiene una esfera de 660 toneladas que actúa como péndulo para estabilizar el edificio durante tifones y terremotos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎸 Instrumentos musicales</h3>
          <p>
            Las cuerdas de guitarras, violines y pianos vibran en MAS cuando son pulsadas o golpeadas. La frecuencia de oscilación determina la nota musical producida. Los luthiers ajustan la tensión, longitud y masa de las cuerdas para lograr las frecuencias deseadas. Un diapasón de 440 Hz (nota La) oscila exactamente 440 veces por segundo en MAS casi perfecto.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ Suspensión de vehículos</h3>
          <p>
            Los sistemas de suspensión de coches utilizan resortes y amortiguadores que siguen principios del MAS. Los resortes absorben los impactos de baches oscilando, mientras que los amortiguadores disipan la energía para evitar oscilaciones prolongadas. Los ingenieros calculan la constante elástica óptima para proporcionar comodidad sin comprometer la estabilidad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⏰ Relojes mecánicos</h3>
          <p>
            Los relojes de péndulo y los relojes de pulsera mecánicos utilizan osciladores armónicos para medir el tiempo. El péndulo de un reloj de pared oscila con un período constante (típicamente 1 o 2 segundos). Los relojes de pulsera usan un volante de inercia con un resorte espiral que oscila a frecuencias de 2.5 a 5 Hz, proporcionando precisión de segundos por día.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Microscopía de fuerza atómica (AFM)</h3>
          <p>
            Los microscopios de fuerza atómica utilizan un microcantiléver que oscila en MAS cerca de la superficie de una muestra. Cambios minúsculos en la frecuencia de oscilación revelan la topografía atómica de la superficie. Esta técnica permite "ver" átomos individuales y se usa en nanotecnología, biología molecular y ciencia de materiales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📡 Circuitos electrónicos LC</h3>
          <p>
            Los circuitos LC (inductor-capacitor) oscilan eléctricamente en MAS, con la carga eléctrica oscilando entre el capacitor y el inductor. Estos circuitos son fundamentales en radios, televisores y sistemas de comunicación inalámbrica. La frecuencia de oscilación determina qué estación de radio sintonizas: FM 100 MHz significa que el circuito oscila 100 millones de veces por segundo.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El descubrimiento de las oscilaciones armónicas
        </h2>
        
        <div className="theory-subsection">
          <h3>🔭 Galileo Galilei y el péndulo (1564-1642)</h3>
          <p>
            Según la leyenda, Galileo descubrió el isocronismo del péndulo (que el período es independiente de la amplitud) observando una lámpara oscilante en la catedral de Pisa en 1582. Usó su propio pulso para medir el tiempo y notó que las oscilaciones grandes y pequeñas tardaban lo mismo. Este descubrimiento fue fundamental para el desarrollo de relojes precisos y el estudio del MAS.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⏰ Christiaan Huygens y el reloj de péndulo (1629-1695)</h3>
          <p>
            Huygens inventó el primer reloj de péndulo preciso en 1656, revolucionando la medición del tiempo. Derivó matemáticamente la fórmula del período del péndulo (T = 2π√(L/g)) y demostró que un péndulo cicloidal (no circular) es perfectamente isócrono. Sus relojes eran 60 veces más precisos que los anteriores, con errores de solo 15 segundos por día.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔧 Robert Hooke y la ley de elasticidad (1635-1703)</h3>
          <p>
            En 1660, Hooke descubrió que la fuerza de un resorte es proporcional a su extensión (F = -kx), conocida como Ley de Hooke. Publicó su descubrimiento en 1678 como un anagrama latino: "ceiiinosssttuv" que significa "Ut tensio, sic vis" (Como la extensión, así la fuerza). Esta ley es fundamental para entender el MAS en sistemas masa-resorte.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🍎 Isaac Newton y la dinámica (1643-1727)</h3>
          <p>
            Newton aplicó sus leyes del movimiento al MAS, demostrando que la aceleración es proporcional y opuesta al desplazamiento (a = -ω²x). En sus Principia Mathematica (1687), analizó el movimiento de péndulos y demostró que para pequeñas oscilaciones, el período es independiente de la masa del péndulo, solo depende de su longitud.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📐 Leonhard Euler y las ecuaciones diferenciales (1707-1783)</h3>
          <p>
            Euler desarrolló el formalismo matemático completo del MAS usando ecuaciones diferenciales. Introdujo la notación exponencial compleja (e^(iωt)) que simplifica enormemente los cálculos de oscilaciones. Su trabajo permitió analizar sistemas oscilatorios complejos y sentó las bases para la mecánica cuántica del siglo XX.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🌉 El colapso del puente de Tacoma Narrows</h3>
          <p>
            En 1940, el puente de Tacoma Narrows en Washington colapsó espectacularmente debido a resonancia. Vientos de solo 68 km/h hicieron que el puente oscilara con amplitudes crecientes hasta que se destruyó. El viento excitaba la frecuencia natural de oscilación del puente (MAS), y sin suficiente amortiguamiento, las oscilaciones crecieron hasta el colapso. Este desastre cambió para siempre el diseño de puentes.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎵 El diapasón perfecto</h3>
          <p>
            Un diapasón de 440 Hz (nota La) es tan preciso que se usa como estándar internacional para afinar instrumentos. Cuando se golpea, oscila en MAS casi perfecto durante más de un minuto. La frecuencia es tan estable que varía menos de 0.1 Hz incluso con cambios de temperatura. Los diapasones de cuarzo modernos son aún más precisos, con variaciones de solo 0.001 Hz.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏃 La frecuencia natural del cuerpo humano</h3>
          <p>
            El cuerpo humano tiene una frecuencia de resonancia de aproximadamente 5 Hz (el torso) y 20-30 Hz (la cabeza). Por eso, las vibraciones de cierta frecuencia son particularmente incómodas o peligrosas. Los asientos de helicópteros y vehículos todo terreno están diseñados para aislar estas frecuencias. La exposición prolongada a vibraciones resonantes puede causar daños en órganos internos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌍 El péndulo de Foucault</h3>
          <p>
            En 1851, Léon Foucault demostró la rotación de la Tierra usando un péndulo de 67 metros en el Panteón de París. El plano de oscilación del péndulo permanece fijo en el espacio mientras la Tierra gira debajo de él. En el Polo Norte, el plano rota 360° en 24 horas. Este experimento proporcionó la primera prueba directa de la rotación terrestre sin observar las estrellas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚛️ Los átomos como osciladores</h3>
          <p>
            Los átomos en un sólido oscilan alrededor de sus posiciones de equilibrio en MAS. A temperatura ambiente, oscilan a frecuencias de 10¹³ Hz (10 billones de veces por segundo) con amplitudes de solo 0.1 nanómetros. Estas oscilaciones determinan propiedades como la capacidad calorífica, la conductividad térmica y la expansión térmica de los materiales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎪 El columpio perfecto</h3>
          <p>
            Para alcanzar la máxima altura en un columpio, debes "bombear" (agacharte y estirarte) exactamente a la frecuencia natural del columpio (típicamente 0.5 Hz o una oscilación cada 2 segundos). Esto es un ejemplo de resonancia: pequeños empujones sincronizados con la frecuencia natural pueden producir oscilaciones muy grandes. Los niños descubren intuitivamente esta física sin conocer las ecuaciones del MAS.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 El oscilador armónico cuántico</h3>
          <p>
            En mecánica cuántica, el oscilador armónico es uno de los pocos sistemas que se pueden resolver exactamente. Las moléculas vibran como osciladores armónicos cuánticos, pero con una diferencia crucial: la energía está cuantizada en niveles discretos (E = ℏω(n + ½)). Incluso en el estado de energía más bajo (n=0), el oscilador tiene energía de punto cero (½ℏω), nunca está completamente quieto.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            El MAS es un movimiento oscilatorio donde la fuerza restauradora es proporcional al desplazamiento: F = -kx.
          </li>
          <li>
            La frecuencia angular ω relaciona período y frecuencia: ω = 2π/T = 2πf.
          </li>
          <li>
            Para un sistema masa-resorte: ω = √(k/m). Para un péndulo simple: ω = √(g/L).
          </li>
          <li>
            La posición varía sinusoidalmente: x(t) = A·cos(ωt + φ), donde A es la amplitud y φ la fase inicial.
          </li>
          <li>
            La velocidad máxima es v_max = Aω (en el equilibrio) y la aceleración máxima es a_max = Aω² (en los extremos).
          </li>
          <li>
            La energía mecánica total se conserva: E = ½kA², oscilando entre energía cinética y potencial.
          </li>
          <li>
            El MAS es fundamental en física, desde péndulos y resortes hasta átomos vibrando y circuitos eléctricos.
          </li>
        </ul>
      </div>
    </>
  );
};

export default MasTheory;
