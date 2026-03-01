import { TheorySection, Concept, Formula } from '../../../../components/TheoryV2';
import { definitions as mcuaDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "MCUA - Movimiento Circular Uniformemente Acelerado",
  descripcion: "Movimiento circular con aceleración angular constante",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const McuaTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es el Movimiento Circular Uniformemente Acelerado (MCUA)?">
        <p>
          El Movimiento Circular Uniformemente Acelerado (MCUA) describe el movimiento de un objeto en una trayectoria circular cuya velocidad angular (ω) cambia a un ritmo constante. Esto es posible gracias a una aceleración angular (α) constante y no nula.
        </p>
        <p>
          A diferencia del MCU, la rapidez tangencial no es constante, lo que implica la existencia de una aceleración tangencial que modifica el módulo de la velocidad.
        </p>
      </TheorySection>

      <TheorySection title="Ecuaciones Fundamentales del MCUA">
        <p>Las ecuaciones del MCUA son análogas a las del MRUV, reemplazando las variables lineales (posición, velocidad, aceleración) por sus contrapartes angulares.</p>

        <Concept title="Ecuación de Velocidad Angular">
          <p>Relaciona la velocidad angular final con la velocidad inicial, la aceleración angular y el tiempo.</p>
          <Formula 
            expression={String.raw`\omega_f = \omega_0 + \alpha t`}
            calculatorId="mcua-ecuacion-velocidad"
            definitions={mcuaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Velocidad Angular Inicial", expression: String.raw`\omega_0 = \omega_f - \alpha t` },
              { description: "Calcular Aceleración Angular", expression: String.raw`\alpha = \frac{\omega_f - \omega_0}{t}` },
              { description: "Calcular Tiempo", expression: String.raw`t = \frac{\omega_f - \omega_0}{\alpha}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>ω_f = Velocidad angular final (rad/s)</li>
            <li>ω_0 = Velocidad angular inicial (rad/s)</li>
            <li>α = Aceleración angular (rad/s²)</li>
            <li>t = Tiempo transcurrido (s)</li>
          </ul>
        </Concept>

        <Concept title="Ecuación de Posición Angular">
          <p>Describe la posición angular final en función de la posición inicial, la velocidad angular inicial, el tiempo y la aceleración angular.</p>
          <Formula 
            expression={String.raw`\theta_f = \theta_0 + \omega_0 t + \frac{1}{2}\alpha t^2`}
            calculatorId="mcua-ecuacion-posicion"
            definitions={mcuaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Posición Angular Inicial", expression: String.raw`\theta_0 = \theta_f - \omega_0 t - \frac{1}{2}\alpha t^2` },
              { description: "Calcular Velocidad Angular Inicial", expression: String.raw`\omega_0 = \frac{\theta_f - \theta_0 - \frac{1}{2}\alpha t^2}{t}` },
              { description: "Calcular Aceleración Angular", expression: String.raw`\alpha = \frac{2(\theta_f - \theta_0 - \omega_0 t)}{t^2}` },
              { description: "Calcular Tiempo (Fórmula Cuadrática)", expression: String.raw`t = \frac{-\omega_0 \pm \sqrt{\omega_0^2 - 4(\frac{1}{2}\alpha)(\theta_0-\theta_f)}}{\alpha}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>θ_f = Posición angular final (rad)</li>
            <li>θ_0 = Posición angular inicial (rad)</li>
            <li>ω_0 = Velocidad angular inicial (rad/s)</li>
            <li>α = Aceleración angular (rad/s²)</li>
            <li>t = Tiempo transcurrido (s)</li>
          </ul>
        </Concept>

        <Concept title="Ecuación de Torricelli Angular">
          <p>Una ecuación útil que no depende del tiempo, relacionando velocidades angulares, aceleración y desplazamiento angular (Δθ).</p>
          <Formula 
            expression={String.raw`\omega_f^2 = \omega_0^2 + 2\alpha \Delta\theta`}
            calculatorId="mcua-ecuacion-torricelli"
            definitions={mcuaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Velocidad Angular Inicial", expression: String.raw`\omega_0^2 = \omega_f^2 - 2\alpha \Delta\theta` },
              { description: "Calcular Aceleración Angular", expression: String.raw`\alpha = \frac{\omega_f^2 - \omega_0^2}{2\Delta\theta}` },
              { description: "Calcular Desplazamiento Angular", expression: String.raw`\Delta\theta = \frac{\omega_f^2 - \omega_0^2}{2\alpha}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>ω_f = Velocidad angular final (rad/s)</li>
            <li>ω_0 = Velocidad angular inicial (rad/s)</li>
            <li>α = Aceleración angular (rad/s²)</li>
            <li>Δθ = Desplazamiento angular (rad)</li>
          </ul>
        </Concept>
        
        <Concept title="Desplazamiento con Velocidad Media">
          <p>El desplazamiento angular también se puede calcular usando la media de las velocidades angulares inicial y final.</p>
          <Formula
            expression={String.raw`\Delta\theta = \frac{1}{2}(\omega_0 + \omega_f)t`}
            calculatorId="mcua-desplazamiento-media"
            definitions={mcuaDefinitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular Tiempo", expression: String.raw`t = \frac{2\Delta\theta}{\omega_0 + \omega_f}` },
                { description: "Calcular Velocidad Inicial", expression: String.raw`\omega_0 = \frac{2\Delta\theta}{t} - \omega_f` },
                { description: "Calcular Velocidad Final", expression: String.raw`\omega_f = \frac{2\Delta\theta}{t} - \omega_0` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>Δθ = Desplazamiento angular (rad)</li>
            <li>ω_0 = Velocidad angular inicial (rad/s)</li>
            <li>ω_f = Velocidad angular final (rad/s)</li>
            <li>t = Tiempo transcurrido (s)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Aceleraciones Tangencial, Centrípeta y Total">
        <p>En el MCUA, existen dos componentes de la aceleración que son perpendiculares entre sí.</p>

        <Concept title="Aceleración Tangencial (a_t) y Aceleración Centrípeta (a_c)">
          <p>La Aceleración Tangencial (a_t) mide cómo cambia la magnitud de la velocidad tangencial y es constante. La Aceleración Centrípeta (a_c), responsable del cambio de dirección de la velocidad, no es constante, ya que depende de la velocidad angular.</p>
          <Formula
            expression={String.raw`a_t = \alpha \cdot r`}
            calculatorId="mcua-relaciones-tangenciales"
            definitions={mcuaDefinitions}
            exercises={exercises}
            isPrimary={false}
          />
           <Formula
            expression={String.raw`a_c = \omega^2 \cdot r`}
            isPrimary={false}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>a_t = Aceleración tangencial (m/s²)</li>
            <li>a_c = Aceleración centrípeta (m/s²)</li>
            <li>α = Aceleración angular (rad/s²)</li>
            <li>ω = Velocidad angular (rad/s)</li>
            <li>r = Radio de la trayectoria circular (m)</li>
          </ul>
        </Concept>

        <Concept title="Aceleración Total (a)">
          <p>Es la suma vectorial de la aceleración tangencial y la centrípeta. Su magnitud se calcula usando el Teorema de Pitágoras.</p>
          <Formula
            expression={String.raw`a = \sqrt{a_t^2 + a_c^2}`}
            calculatorId="mcua-relaciones-tangenciales"
            definitions={mcuaDefinitions}
            exercises={exercises}
            isPrimary={true}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>a = Aceleración total (m/s²)</li>
            <li>a_t = Aceleración tangencial (m/s²)</li>
            <li>a_c = Aceleración centrípeta (m/s²)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Conceptos Adicionales">
        <Concept title="Número de Vueltas (N) y Desplazamiento Lineal (s)">
          <p>El desplazamiento angular total se puede usar para calcular el número de vueltas completas y la distancia lineal recorrida (longitud de arco).</p>
          <Formula
            expression={String.raw`N = \frac{\Delta\theta}{2\pi}`}
            calculatorId="mcua-conceptos-adicionales"
            definitions={mcuaDefinitions}
            exercises={exercises}
            isPrimary={true}
          />
          <Formula
            expression={String.raw`s = \Delta\theta \cdot r`}
            calculatorId="mcua-conceptos-adicionales"
            definitions={mcuaDefinitions}
            exercises={exercises}
            isPrimary={false}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>N = Número de vueltas completas (adimensional)</li>
            <li>s = Desplazamiento lineal o longitud de arco (m)</li>
            <li>Δθ = Desplazamiento angular (rad)</li>
            <li>r = Radio de la trayectoria circular (m)</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🚗 Arranque y frenado de vehículos en curvas</h3>
          <p>
            Cuando un coche acelera o frena mientras toma una curva, experimenta MCUA. Los sistemas de control de estabilidad (ESP) monitorizan constantemente la aceleración angular de las ruedas para detectar derrapes y aplicar frenos selectivamente. Los neumáticos deben soportar tanto la aceleración tangencial (cambio de velocidad) como la centrípeta (mantener la trayectoria circular).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ Motores y maquinaria industrial</h3>
          <p>
            Cuando un motor arranca o se detiene, experimenta MCUA. Los ingenieros deben calcular las aceleraciones angulares para dimensionar correctamente los sistemas de transmisión, embragues y frenos. Un motor eléctrico industrial típico puede acelerar de 0 a 3,000 RPM en pocos segundos, generando aceleraciones angulares significativas que crean esfuerzos en los componentes mecánicos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎡 Atracciones de parques temáticos</h3>
          <p>
            Las atracciones giratorias que aceleran y desaceleran, como las tazas giratorias o el Gravitron, aplican MCUA. Los diseñadores deben calcular cuidadosamente las aceleraciones angulares para que la experiencia sea emocionante pero segura. La aceleración total (combinación de tangencial y centrípeta) determina las fuerzas G que experimentan los pasajeros.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏎️ Fórmula 1 y deportes de motor</h3>
          <p>
            Los pilotos de F1 constantemente aceleran y frenan en las curvas, experimentando MCUA. Los ingenieros analizan los datos de telemetría para optimizar las trayectorias y velocidades en cada curva. La capacidad de acelerar rápidamente al salir de una curva (alta aceleración angular) es crucial para lograr buenos tiempos de vuelta.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💿 Discos duros y almacenamiento</h3>
          <p>
            Los discos duros tradicionales (HDD) deben acelerar desde el reposo hasta 7,200 RPM (o más) en pocos segundos cuando se enciende el ordenador. Esta aceleración angular debe ser controlada cuidadosamente para evitar daños mecánicos. Los discos SSD no tienen partes móviles, pero los CD/DVD experimentan MCUA cada vez que se insertan y comienzan a girar.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌪️ Turbinas eólicas</h3>
          <p>
            Las turbinas eólicas deben acelerar y desacelerar constantemente según la velocidad del viento. Los sistemas de control ajustan la aceleración angular para optimizar la generación de energía sin sobrecargar la estructura. Una turbina grande puede tardar varios minutos en acelerar desde el reposo hasta su velocidad operativa de 10-20 RPM, pero debe poder frenar rápidamente en caso de vientos peligrosos.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El desarrollo de la cinemática rotacional
        </h2>
        
        <div className="theory-subsection">
          <h3>🔭 Galileo y el péndulo (1564-1642)</h3>
          <p>
            Aunque Galileo estudió principalmente el movimiento rectilíneo, sus observaciones del péndulo fueron fundamentales para entender el movimiento circular acelerado. Notó que el período del péndulo era independiente de la amplitud (para ángulos pequeños), lo que llevó al desarrollo de los primeros relojes de péndulo precisos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🍎 Newton y la rotación (1643-1727)</h3>
          <p>
            Isaac Newton extendió sus leyes del movimiento al movimiento rotacional. Introdujo el concepto de momento angular y demostró que las mismas leyes que gobiernan el movimiento lineal tienen análogos rotacionales. Su trabajo sobre la precesión de los equinoccios requería entender el movimiento circular acelerado de la Tierra.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ Leonhard Euler (1707-1783)</h3>
          <p>
            Euler formalizó las ecuaciones del movimiento rotacional y desarrolló las ecuaciones que llevan su nombre para describir la rotación de cuerpos rígidos. Introdujo el concepto de momento de inercia y estableció la relación entre el torque y la aceleración angular (τ = Iα), análoga a F = ma en el movimiento lineal.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏭 La Revolución Industrial (siglo XVIII-XIX)</h3>
          <p>
            Con el desarrollo de máquinas rotativas cada vez más complejas (motores de vapor, turbinas, volantes de inercia), los ingenieros necesitaron dominar el MCUA. El diseño de sistemas de transmisión, embragues y frenos requería calcular con precisión las aceleraciones angulares y los esfuerzos resultantes en los materiales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 El automóvil y la aviación (siglo XX)</h3>
          <p>
            El desarrollo del automóvil y la aviación hizo que el MCUA fuera crucial para la ingeniería. Los motores de combustión interna experimentan aceleraciones angulares extremas (de 0 a miles de RPM en segundos), y el diseño de sistemas de control de vuelo requiere entender cómo los aviones aceleran angularmente durante las maniobras.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🏎️ La aceleración angular más rápida en F1</h3>
          <p>
            Los motores de Fórmula 1 pueden acelerar de 0 a 15,000 RPM en menos de 1 segundo. Esto representa una aceleración angular de aproximadamente 1,570 rad/s². Para poner esto en perspectiva, es como si un objeto pasara de estar quieto a dar 250 vueltas completas por segundo en solo un segundo. Los componentes internos del motor experimentan fuerzas G extremas debido a esta aceleración.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌪️ Los tornados y su aceleración angular</h3>
          <p>
            Los tornados más violentos (EF5) pueden tener vientos que giran a más de 480 km/h. Lo sorprendente es la rapidez con la que se forman: un tornado puede pasar de no existir a alcanzar su máxima velocidad angular en menos de un minuto. La aceleración angular involucrada es tan extrema que puede arrancar árboles del suelo y lanzar objetos pesados a grandes distancias.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎢 El récord de aceleración en montañas rusas</h3>
          <p>
            La montaña rusa "Do-Dodonpa" en Japón tiene la aceleración lineal más alta del mundo (1.56 segundos de 0 a 180 km/h), pero cuando esta aceleración ocurre en una curva, la aceleración angular resultante es impresionante. Los pasajeros experimentan la combinación de aceleración tangencial y centrípeta, creando fuerzas G que pueden superar las 4g.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ Los motores eléctricos y su ventaja</h3>
          <p>
            Los motores eléctricos pueden lograr aceleraciones angulares mucho mayores que los motores de combustión. El Tesla Model S Plaid puede acelerar su motor eléctrico de 0 a 20,000 RPM casi instantáneamente, proporcionando un torque máximo desde el reposo. Esta capacidad de aceleración angular instantánea es una de las razones por las que los coches eléctricos tienen una aceleración tan impresionante.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌍 La desaceleración de la Tierra</h3>
          <p>
            La Tierra está experimentando una desaceleración angular muy lenta debido a las fuerzas de marea de la Luna. La velocidad angular de rotación de la Tierra disminuye aproximadamente 1.7 milisegundos por siglo. Aunque es una aceleración angular minúscula (alrededor de 10⁻²² rad/s²), significa que los días se están alargando gradualmente. Hace 400 millones de años, un día duraba solo 22 horas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 El efecto giroscópico en bicicletas</h3>
          <p>
            Cuando una bicicleta está en movimiento, las ruedas actúan como giroscopios. Si intentas girar el manillar rápidamente (aplicando una aceleración angular), las ruedas resisten el cambio debido al momento angular. Este efecto giroscópico es parte de lo que hace que sea más fácil mantener el equilibrio en una bicicleta en movimiento que cuando está parada. Los pilotos de motociclismo profesional deben entender este efecto para realizar maniobras rápidas.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            El MCUA es un movimiento circular con aceleración angular (α) constante y no nula.
          </li>
          <li>
            Las ecuaciones son análogas al MRUV: ω_f = ω_0 + αt, θ_f = θ_0 + ω_0t + ½αt², ω_f² = ω_0² + 2αΔθ.
          </li>
          <li>
            Existen dos componentes de aceleración: tangencial (a_t = αr, constante) y centrípeta (a_c = ω²r, variable).
          </li>
          <li>
            La aceleración total es la suma vectorial: a = √(a_t² + a_c²).
          </li>
          <li>
            El desplazamiento angular se relaciona con vueltas (N = Δθ/2π) y distancia lineal (s = Δθr).
          </li>
          <li>
            El MCUA es fundamental para entender motores, turbinas, atracciones y cualquier sistema rotativo que acelere o desacelere.
          </li>
        </ul>
      </div>
    </>
  );
};

export default McuaTheory;
