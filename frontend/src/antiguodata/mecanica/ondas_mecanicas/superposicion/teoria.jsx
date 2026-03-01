import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Superposición de Ondas",
  descripcion: "Interferencia y combinación de ondas",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Principio de Superposición">
        <Concept title="Enunciado del Principio">
          <p>
            Cuando dos o más ondas se encuentran en el mismo punto del espacio, el desplazamiento 
            resultante es la suma algebraica de los desplazamientos individuales. Este es el 
            principio de superposición.
          </p>

          <Formula
            expression={String.raw`y(x,t) = y_1(x,t) + y_2(x,t) + y_3(x,t) + \cdots`}
            description="Principio de superposición (ecuación fundamental teórica)"
          />

          <Important>
            El principio de superposición solo es válido para sistemas lineales, donde la ecuación 
            de onda es lineal. En medios no lineales, las ondas pueden interactuar de formas más complejas.
          </Important>
        </Concept>

        <Concept title="Superposición de Dos Ondas Armónicas">
          <p>
            Consideremos dos ondas armónicas con la misma frecuencia y longitud de onda:
          </p>

          <Formula
            expression={String.raw`y_1 = A_1 \sin(kx - \omega t + \phi_1)`}
            description="Primera onda (ecuación demostrativa)"
          />

          <Formula
            expression={String.raw`y_2 = A_2 \sin(kx - \omega t + \phi_2)`}
            description="Segunda onda (ecuación demostrativa)"
          />

          <p>Donde:</p>
          <ul>
            <li>A₁, A₂: Amplitudes de las ondas</li>
            <li>k: Número de onda (k = 2π/λ)</li>
            <li>ω: Frecuencia angular (ω = 2πf)</li>
            <li>φ₁, φ₂: Fases iniciales</li>
          </ul>

          <p>
            La onda resultante es:
          </p>

          <Formula
            expression={String.raw`y = y_1 + y_2 = A \sin(kx - \omega t + \phi)`}
            description="Onda resultante (derivación para llegar a la amplitud general)"
          />

          <p>Donde la amplitud resultante es:</p>

          <Formula
            expression={String.raw`A = \sqrt{A_1^2 + A_2^2 + 2A_1A_2\cos(\phi_2 - \phi_1)}`}
            calculatorId="ondas-super-amplitud-general"
            definitions={definitions}
            exercises={exercises}
          />

          <p>Y la fase resultante:</p>

          <Formula
            expression={String.raw`\tan\phi = \frac{A_1\sin\phi_1 + A_2\sin\phi_2}{A_1\cos\phi_1 + A_2\cos\phi_2}`}
            description="Fase resultante (derivación teórica)"
          />
        </Concept>
      </TheorySection>

      <TheorySection title="Interferencia">
        <Concept title="Tipos de Interferencia">
          <p>
            La interferencia es el resultado de la superposición de ondas. Puede ser:
          </p>

          <p>1. Interferencia Constructiva:</p>
          <p>
            Ocurre cuando las ondas están en fase (diferencia de fase = 0, 2π, 4π, ...):
          </p>

          <Formula
            expression={String.raw`\Delta\phi = \phi_2 - \phi_1 = 2n\pi \quad (n = 0, 1, 2, \ldots)`}
            description="Condición teórica para interferencia constructiva (lleva a la fórmula de amplitud máxima)"
          />

          <p>Donde:</p>
          <ul>
            <li>Δφ: Diferencia de fase entre las ondas</li>
            <li>n: Número entero (0, 1, 2, ...)</li>
          </ul>

          <Formula
            expression={String.raw`A_{\text{máx}} = A_1 + A_2`}
            calculatorId="ondas-super-constructiva"
            definitions={definitions}
            exercises={exercises}
          />

          <p>2. Interferencia Destructiva:</p>
          <p>
            Ocurre cuando las ondas están en contrafase (diferencia de fase = π, 3π, 5π, ...):
          </p>

          <Formula
            expression={String.raw`\Delta\phi = \phi_2 - \phi_1 = (2n+1)\pi \quad (n = 0, 1, 2, \ldots)`}
            description="Condición teórica para interferencia destructiva (lleva a la fórmula de amplitud mínima)"
          />

          <Formula
            expression={String.raw`A_{\text{mín}} = |A_1 - A_2|`}
            calculatorId="ondas-super-destructiva"
            definitions={definitions}
            exercises={exercises}
          />

          <Example
            title="Interferencia de ondas idénticas"
            problem="Dos ondas idénticas con amplitud A = 0.05 m interfieren. ¿Cuál es la amplitud resultante en interferencia constructiva y destructiva?"
            solution={
              <div>
                <p>Interferencia constructiva:</p>
                <p>A_máx = A₁ + A₂ = 0.05 + 0.05 = 0.10 m</p>
                <p>Interferencia destructiva:</p>
                <p>A_mín = |A₁ - A₂| = |0.05 - 0.05| = 0 m (cancelación total)</p>
              </div>
            }
          />
        </Concept>

        <Concept title="Diferencia de Camino">
          <p>
            Cuando dos ondas provienen de fuentes diferentes, la diferencia de fase depende de 
            la diferencia de camino recorrido:
          </p>

          <Formula
            expression={String.raw`\Delta\phi = \frac{2\pi}{\lambda}\Delta r`}
            calculatorId="ondas-super-fase-camino"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Diferencia de Camino", expression: String.raw`\Delta r = \frac{\lambda \Delta\phi}{2\pi}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>Δr: Diferencia de camino (r₂ - r₁)</li>
            <li>λ: Longitud de onda</li>
          </ul>

          <p>Condiciones en términos de diferencia de camino:</p>

          <Formula
            expression={String.raw`\Delta r = n\lambda \quad \text{(constructiva)}`}
            description="Condición de camino para interferencia constructiva (derivación teórica)"
          />

          <Formula
            expression={String.raw`\Delta r = \left(n + \frac{1}{2}\right)\lambda \quad \text{(destructiva)}`}
            description="Condición de camino para interferencia destructiva (derivación teórica)"
          />
          
          <p>El orden de interferencia se calcula como:</p>
          
          <Formula
            expression={String.raw`n = \frac{\Delta r}{\lambda}`}
            calculatorId="ondas-super-orden"
            definitions={definitions}
            exercises={exercises}
          />
        </Concept>
      </TheorySection>

      <TheorySection title="Pulsaciones (Batimientos)">
        <Concept title="Superposición de Ondas con Frecuencias Cercanas">
          <p>
            Cuando dos ondas de amplitudes iguales pero frecuencias ligeramente diferentes se superponen:
          </p>

          <Formula
            expression={String.raw`y_1 = A\sin(\omega_1 t)`}
            description="Onda 1 (ecuación demostrativa)"
          />

          <Formula
            expression={String.raw`y_2 = A\sin(\omega_2 t)`}
            description="Onda 2 (ecuación demostrativa)"
          />

          <p>Donde:</p>
          <ul>
            <li>A: Amplitud (igual para ambas ondas)</li>
            <li>ω₁, ω₂: Frecuencias angulares ligeramente diferentes</li>
          </ul>

          <p>
            La onda resultante es:
          </p>

          <Formula
            expression={String.raw`y = 2A\cos\left(\frac{\omega_1 - \omega_2}{2}t\right)\sin\left(\frac{\omega_1 + \omega_2}{2}t\right)`}
            description="Ecuación de pulsaciones (derivación que lleva a la frecuencia de pulsación)"
          />

          <p>
            Esto produce una onda con frecuencia promedio modulada por una envolvente de baja frecuencia.
          </p>

          <p>Frecuencia de pulsación:</p>

          <Formula
            expression={String.raw`f_{\text{puls}} = |f_1 - f_2|`}
            calculatorId="ondas-super-pulsacion"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Frecuencia Promedio", expression: String.raw`f_{\text{prom}} = \frac{f_1 + f_2}{2}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>f₁, f₂: Frecuencias de las ondas individuales</li>
          </ul>

          <Important>
            Las pulsaciones son audibles cuando dos sonidos de frecuencias cercanas se superponen. 
            Se escuchan como variaciones periódicas de intensidad.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Ondas Estacionarias">
        <Concept title="Superposición de Ondas Contrapropagantes">
          <p>
            Cuando dos ondas idénticas viajan en direcciones opuestas:
          </p>

          <Formula
            expression={String.raw`y_1 = A\sin(kx - \omega t)`}
            description="Onda hacia la derecha (ecuación demostrativa)"
          />

          <Formula
            expression={String.raw`y_2 = A\sin(kx + \omega t)`}
            description="Onda hacia la izquierda (ecuación demostrativa)"
          />

          <p>Donde:</p>
          <ul>
            <li>A: Amplitud de cada onda</li>
            <li>k: Número de onda</li>
            <li>ω: Frecuencia angular</li>
          </ul>

          <p>
            La superposición produce una onda estacionaria:
          </p>

          <Formula
            expression={String.raw`y = 2A\sin(kx)\cos(\omega t)`}
            description="Ecuación de onda estacionaria (derivación teórica)"
          />

          <p>Características:</p>
          <ul>
            <li>Nodos: Puntos donde y = 0 siempre (sin(kx) = 0)</li>
            <li>Antinodos: Puntos de máxima amplitud (sin(kx) = ±1)</li>
            <li>No hay propagación de energía</li>
            <li>Todos los puntos oscilan en fase o en contrafase</li>
          </ul>

          <Formula
            expression={String.raw`x_{\text{nodos}} = n\frac{\lambda}{2} \quad (n = 0, 1, 2, \ldots)`}
            description="Posición de los nodos (derivación de la ecuación de onda estacionaria)"
          />

          <Formula
            expression={String.raw`x_{\text{antinodos}} = \left(n + \frac{1}{2}\right)\frac{\lambda}{2} \quad (n = 0, 1, 2, \ldots)`}
            description="Posición de los antinodos (derivación de la ecuación de onda estacionaria)"
          />

          <p>Donde:</p>
          <ul>
            <li>λ: Longitud de onda</li>
            <li>n: Número entero (0, 1, 2, ...)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Experimento de Young (Doble Rendija)">
        <Concept title="Interferencia de Luz">
          <p>
            El experimento de la doble rendija de Thomas Young (1801) demostró la naturaleza ondulatoria 
            de la luz. La luz pasa por dos rendijas estrechas y cercanas, creando dos fuentes coherentes 
            que interfieren en una pantalla, produciendo un patrón de franjas brillantes y oscuras.
          </p>
          <p>
            La posición de las franjas brillantes (interferencia constructiva) en la pantalla está dada por:
          </p>
          <Formula
            expression={String.raw`d\sin\theta = n\lambda \quad (n = 0, 1, 2, \ldots)`}
            description="Condición para máximos de interferencia (derivación del experimento de Young)"
          />
          <p>Donde:</p>
          <ul>
            <li>d: Separación entre las rendijas</li>
            <li>θ: Ángulo respecto al centro</li>
            <li>λ: Longitud de onda de la luz</li>
            <li>n: Orden de interferencia (0, 1, 2, ...)</li>
          </ul>
          <p>
            Las franjas oscuras (interferencia destructiva) ocurren cuando:
          </p>
          <Formula
            expression={String.raw`d\sin\theta = \left(n + \frac{1}{2}\right)\lambda`}
            description="Condición para mínimos de interferencia (derivación del experimento de Young)"
          />
          <Important>
            El experimento de Young fue crucial para establecer la teoría ondulatoria de la luz, 
            superando la teoría corpuscular de Newton. Hoy sabemos que la luz tiene dualidad 
            onda-partícula, comportándose como onda en este experimento.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Interferencia en Películas Delgadas">
        <Concept title="Colores en Burbujas y Aceite">
          <p>
            Cuando la luz incide en una película delgada (burbuja de jabón, capa de aceite, alas de 
            mariposa), parte se refleja en la superficie superior y parte en la inferior. Estas dos 
            ondas reflejadas interfieren, produciendo colores brillantes que dependen del grosor de 
            la película y el ángulo de observación.
          </p>
          <p>
            La condición para interferencia constructiva (reflexión) en películas delgadas es:
          </p>
          <Formula
            expression={String.raw`2nt = \left(m + \frac{1}{2}\right)\lambda \quad (m = 0, 1, 2, \ldots)`}
            description="Condición para interferencia constructiva en películas delgadas (derivación teórica)"
          />
          <p>Donde:</p>
          <ul>
            <li>n: Índice de refracción de la película</li>
            <li>t: Grosor de la película</li>
            <li>λ: Longitud de onda de la luz en el vacío</li>
            <li>m: Orden de interferencia</li>
          </ul>
          <p>
            El factor (m + 1/2) aparece debido al cambio de fase de π que ocurre cuando la luz se 
            refleja en un medio más denso (mayor índice de refracción).
          </p>
          <Example>
            <p>
              Las burbujas de jabón muestran colores cambiantes porque su grosor varía. Donde el 
              grosor es λ/4n, se ve color brillante para esa longitud de onda. Las películas 
              antirreflejantes en lentes usan este principio: un grosor de λ/4n causa interferencia 
              destructiva, eliminando reflejos.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Cancelación Activa de Ruido">
        <Concept title="Tecnología de Superposición Destructiva">
          <p>
            La cancelación activa de ruido (ANC, Active Noise Cancellation) usa el principio de 
            superposición destructiva para eliminar sonidos no deseados. Un micrófono detecta el 
            ruido ambiental, un procesador genera una onda sonora con la misma amplitud pero fase 
            opuesta (desfase de π), y un altavoz emite esta "anti-onda".
          </p>
          <p>
            Cuando el ruido original y la anti-onda se superponen, interfieren destructivamente, 
            cancelándose mutuamente. El resultado es silencio o reducción significativa del ruido.
          </p>
          <Important>
            La ANC funciona mejor con ruidos constantes y de baja frecuencia (motores de avión, 
            aire acondicionado, tráfico). Es menos efectiva con sonidos impredecibles o de alta 
            frecuencia (voces, música) porque el sistema no tiene tiempo de generar la anti-onda.
          </Important>
          <Example>
            <p>
              Los auriculares con cancelación de ruido usan ANC para crear una "burbuja de silencio". 
              Los sistemas ANC en automóviles reducen el ruido del motor en la cabina. Algunos 
              edificios usan ANC para reducir el ruido de tráfico cerca de ventanas. La tecnología 
              puede reducir el ruido hasta 20-30 dB, haciendo un ambiente ruidoso significativamente 
              más silencioso.
            </p>
          </Example>
        </Concept>
      </TheorySection>


      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones de la Superposición de Ondas
        </h2>
        
        <div className="theory-subsection">
          <h3>🎵 Afinación de Instrumentos Musicales</h3>
          <p>
            Los músicos usan pulsaciones para afinar instrumentos. Al tocar una nota junto con un 
            diapasón o afinador, si las frecuencias difieren ligeramente, se escuchan pulsaciones 
            (variaciones periódicas de intensidad). Cuando las pulsaciones desaparecen, el instrumento 
            está afinado.
          </p>
          <p>
            Por ejemplo, si un diapasón vibra a 440 Hz (La estándar) y una cuerda a 442 Hz, se escuchan 
            2 pulsaciones por segundo. El músico ajusta la tensión de la cuerda hasta que las pulsaciones 
            se vuelven muy lentas (menos de 1 por segundo) o desaparecen completamente, indicando que 
            ambas frecuencias coinciden.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Interferometría de Precisión</h3>
          <p>
            Los interferómetros usan superposición de ondas de luz para medir distancias con precisión 
            nanométrica. El interferómetro de Michelson divide un haz de luz en dos, los envía por 
            caminos diferentes y los recombina. El patrón de interferencia revela diferencias de camino 
            menores que la longitud de onda de la luz (nanómetros).
          </p>
          <p>
            LIGO (Laser Interferometer Gravitational-Wave Observatory) usa interferometría láser con 
            brazos de 4 km para detectar ondas gravitacionales. Puede medir cambios de longitud menores 
            que el diámetro de un protón (10⁻¹⁸ m), detectando las ondulaciones del espacio-tiempo 
            causadas por colisiones de agujeros negros a miles de millones de años luz.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎧 Auriculares con Cancelación de Ruido</h3>
          <p>
            Los auriculares ANC (Active Noise Cancellation) usan micrófonos externos para captar ruido 
            ambiental. Un procesador genera una onda sonora invertida (fase opuesta) que se reproduce 
            junto con la música. La superposición destructiva cancela el ruido, creando una experiencia 
            de escucha más silenciosa.
          </p>
          <p>
            Los modelos avanzados usan múltiples micrófonos y algoritmos adaptativos que ajustan la 
            cancelación en tiempo real. Pueden reducir el ruido de baja frecuencia (motores, tráfico) 
            hasta 30 dB, equivalente a reducir el volumen a la mitad. Son especialmente efectivos en 
            aviones, trenes y oficinas ruidosas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌈 Recubrimientos Antirreflejantes</h3>
          <p>
            Las lentes de gafas, cámaras y telescopios tienen recubrimientos antirreflejantes que usan 
            interferencia destructiva. Una capa delgada de material (típicamente grosor λ/4) causa que 
            la luz reflejada de la superficie superior interfiera destructivamente con la reflejada de 
            la superficie inferior, eliminando reflejos.
          </p>
          <p>
            Los recubrimientos multicapa usan varias capas de diferentes grosores para eliminar reflejos 
            en múltiples longitudes de onda, logrando transmisión de luz superior al 99%. Esto mejora 
            la claridad de imágenes, reduce el deslumbramiento y aumenta el contraste en fotografía y 
            astronomía.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📡 Antenas en Fase (Phased Arrays)</h3>
          <p>
            Los sistemas de antenas en fase usan superposición constructiva para dirigir haces de ondas 
            de radio sin mover físicamente las antenas. Múltiples antenas emiten ondas con diferencias 
            de fase controladas electrónicamente. La interferencia constructiva crea un haz direccional 
            que puede apuntar en cualquier dirección instantáneamente.
          </p>
          <p>
            Los radares de aviones militares, sistemas de comunicación satelital y redes 5G usan phased 
            arrays. El radar AEGIS de barcos de guerra puede rastrear cientos de objetivos simultáneamente. 
            Los sistemas 5G usan beamforming para dirigir señales específicamente a cada usuario, 
            aumentando velocidad y reduciendo interferencias.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏥 Ultrasonido Médico Enfocado</h3>
          <p>
            El ultrasonido enfocado de alta intensidad (HIFU) usa superposición constructiva de ondas 
            ultrasónicas de múltiples transductores para concentrar energía en un punto específico dentro 
            del cuerpo. Las ondas individuales son inofensivas, pero su superposición en el foco genera 
            calor intenso que destruye tejido.
          </p>
          <p>
            HIFU se usa para tratar tumores (próstata, hígado, cerebro) sin cirugía. También trata 
            fibromas uterinos y temblor esencial. El procedimiento es no invasivo, sin incisiones ni 
            radiación. La precisión es milimétrica, destruyendo solo el tejido objetivo sin dañar tejido 
            circundante.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎬 Holografía</h3>
          <p>
            Los hologramas usan interferencia de luz para grabar y reproducir imágenes tridimensionales. 
            Un haz láser se divide en dos: uno ilumina el objeto (haz objeto) y otro va directamente a 
            la película (haz de referencia). La superposición de ambos crea un patrón de interferencia 
            que se graba en la película.
          </p>
          <p>
            Al iluminar el holograma con luz láser, el patrón de interferencia reconstruye la onda 
            original del objeto, creando una imagen 3D que cambia de perspectiva al moverse. Los 
            hologramas se usan en seguridad (billetes, tarjetas de crédito), almacenamiento de datos 
            de alta densidad, displays 3D y arte. La holografía digital permite crear hologramas con 
            computadoras sin necesidad de objetos físicos.
          </p>
        </div>
      </div>


      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia de la Superposición de Ondas
        </h2>
        
        <div className="theory-subsection">
          <h3>🌊 Principio de Superposición (siglo XVII)</h3>
          <p>
            El principio de superposición fue reconocido implícitamente por científicos del siglo XVII 
            al estudiar ondas en agua y sonido. Christiaan Huygens (1678) propuso que cada punto de un 
            frente de onda actúa como fuente de ondas secundarias, cuya superposición forma el nuevo 
            frente de onda (Principio de Huygens).
          </p>
          <p>
            Este principio explicaba reflexión, refracción y difracción de ondas, pero no fue 
            completamente aceptado hasta que la naturaleza ondulatoria de la luz fue demostrada en el 
            siglo XIX. El principio de superposición es fundamental en física ondulatoria y se aplica 
            a todo tipo de ondas: mecánicas, electromagnéticas y cuánticas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Thomas Young y la Doble Rendija (1801)</h3>
          <p>
            Thomas Young realizó el experimento de la doble rendija en 1801, demostrando 
            inequívocamente la naturaleza ondulatoria de la luz mediante interferencia. Hizo pasar luz 
            solar por dos rendijas estrechas y observó un patrón de franjas brillantes y oscuras en una 
            pantalla, imposible de explicar con la teoría corpuscular de Newton.
          </p>
          <p>
            Young calculó la longitud de onda de diferentes colores de luz usando la geometría del 
            patrón de interferencia. Sus resultados (violeta ~400 nm, rojo ~700 nm) fueron notablemente 
            precisos. El experimento enfrentó fuerte oposición de seguidores de Newton, pero 
            eventualmente revolucionó la óptica y estableció la teoría ondulatoria de la luz.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎵 Descubrimiento de las Pulsaciones (siglo XVIII)</h3>
          <p>
            Las pulsaciones fueron estudiadas sistemáticamente por músicos y científicos del siglo XVIII. 
            Joseph Sauveur (1653-1716), considerado el padre de la acústica musical, estudió las 
            pulsaciones y las usó para medir frecuencias de sonidos. Observó que dos diapasones con 
            frecuencias ligeramente diferentes producían variaciones periódicas de intensidad.
          </p>
          <p>
            Leonhard Euler (1707-1783) desarrolló la teoría matemática de las pulsaciones, demostrando 
            que la frecuencia de pulsación es la diferencia entre las frecuencias individuales. Las 
            pulsaciones se convirtieron en la herramienta estándar para afinación precisa de instrumentos 
            musicales, una práctica que continúa hasta hoy.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌈 Interferencia en Películas Delgadas - Newton y Hooke (1665-1704)</h3>
          <p>
            Robert Hooke observó colores en películas delgadas de mica en 1665, sugiriendo que eran 
            causados por ondas de luz. Isaac Newton estudió los "anillos de Newton" (1704): patrones 
            circulares de colores formados entre una lente convexa y una placa de vidrio plana. Aunque 
            observó interferencia, Newton interpretó erróneamente el fenómeno con su teoría corpuscular.
          </p>
          <p>
            No fue hasta el trabajo de Young y Fresnel en el siglo XIX que la interferencia en películas 
            delgadas fue correctamente explicada como superposición de ondas reflejadas en las dos 
            superficies. Hoy, este fenómeno se usa en recubrimientos antirreflejantes, filtros ópticos 
            y sensores de grosor nanométrico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📏 Interferometría de Michelson (1881-1887)</h3>
          <p>
            Albert Michelson inventó el interferómetro en 1881 para detectar el "éter luminífero" 
            (medio hipotético para la propagación de luz). El experimento de Michelson-Morley (1887) 
            usó interferencia de luz para medir diferencias de velocidad de la luz en direcciones 
            perpendiculares con precisión sin precedentes.
          </p>
          <p>
            El resultado negativo (no se detectó el éter) fue crucial para el desarrollo de la teoría 
            de la relatividad de Einstein. Michelson recibió el Premio Nobel en 1907 por sus 
            instrumentos ópticos de precisión. Los interferómetros modernos basados en su diseño miden 
            distancias con precisión atómica y detectaron ondas gravitacionales en 2015 (LIGO).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎧 Cancelación Activa de Ruido (1936-1980s)</h3>
          <p>
            Paul Lueg patentó el concepto de cancelación activa de ruido en 1936, proponiendo usar 
            superposición destructiva para eliminar sonidos no deseados. Sin embargo, la tecnología de 
            la época (válvulas de vacío) era demasiado lenta y voluminosa para implementación práctica.
          </p>
          <p>
            Con el desarrollo de microprocesadores rápidos en los 1980s, la ANC se volvió viable. Bose 
            desarrolló los primeros auriculares ANC comerciales para pilotos de aviación en 1989. En 
            los 2000s, la ANC se popularizó en auriculares de consumo. Hoy, los algoritmos adaptativos 
            y múltiples micrófonos permiten cancelación de ruido en tiempo real con latencia de 
            milisegundos.
          </p>
        </div>
      </div>


      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y Curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🎸 El "Efecto Coro" en Guitarras</h3>
          <p>
            El efecto "chorus" en guitarras eléctricas usa pulsaciones artificiales. El pedal duplica 
            la señal y desafina ligeramente una copia (típicamente 5-10 Hz de diferencia). La 
            superposición de ambas señales crea pulsaciones que suenan como múltiples guitarras tocando 
            simultáneamente, enriqueciendo el sonido.
          </p>
          <p>
            Kurt Cobain de Nirvana usaba el pedal Boss CH-1 Chorus en casi todas sus canciones, creando 
            su sonido característico. El efecto chorus también se usa en sintetizadores para crear 
            sonidos "más grandes" y en estudios de grabación para simular secciones de cuerdas. Es uno 
            de los efectos más populares en música desde los años 1970s.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌊 La Ola Perfecta de Teahupo'o</h3>
          <p>
            Teahupo'o en Tahití produce algunas de las olas más grandes y perfectas del mundo debido a 
            superposición de ondas oceánicas. Múltiples trenes de olas de diferentes tormentas viajan 
            miles de kilómetros y convergen en Teahupo'o. Cuando interfieren constructivamente sobre un 
            arrecife de coral abrupto, crean olas monstruosas de hasta 7 metros de altura.
          </p>
          <p>
            La forma del arrecife actúa como lente, enfocando la energía de las ondas en un punto 
            específico. Las olas rompen tan violentamente que el agua forma un "tubo" hueco donde los 
            surfistas pueden entrar. Teahupo'o es considerada una de las olas más peligrosas del mundo, 
            pero también una de las más codiciadas por surfistas profesionales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔭 LIGO y las Ondas Gravitacionales</h3>
          <p>
            El 14 de septiembre de 2015, LIGO detectó por primera vez ondas gravitacionales usando 
            interferometría láser. Dos agujeros negros colisionaron a 1.3 mil millones de años luz, 
            creando ondulaciones en el espacio-tiempo que viajaron hasta la Tierra. LIGO midió un cambio 
            de longitud de sus brazos de 4 km menor que 1/10,000 del diámetro de un protón.
          </p>
          <p>
            Esta medición increíblemente precisa fue posible gracias a superposición de ondas de luz 
            láser. Cualquier cambio en la longitud de los brazos altera el patrón de interferencia, 
            revelando la onda gravitacional. El descubrimiento confirmó la predicción de Einstein de 
            1916 y abrió una nueva era en astronomía. Los científicos de LIGO recibieron el Premio 
            Nobel de Física en 2017.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦋 Alas de Mariposa Morpho</h3>
          <p>
            Las mariposas Morpho de América del Sur tienen alas de un azul iridiscente brillante que no 
            proviene de pigmentos, sino de interferencia en películas delgadas. Las escamas de sus alas 
            tienen estructuras nanométricas en capas que causan interferencia constructiva para luz azul 
            (longitud de onda ~450 nm) y destructiva para otros colores.
          </p>
          <p>
            El color cambia con el ángulo de observación debido a que la diferencia de camino óptico 
            varía con el ángulo. Este "color estructural" es mucho más brillante y duradero que 
            pigmentos. Los científicos estudian estas estructuras para desarrollar pinturas y telas que 
            no se desvanecen, pantallas de bajo consumo energético y sensores químicos ultrasensibles.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎵 El Órgano de Tubos Más Grande del Mundo</h3>
          <p>
            El órgano del Boardwalk Hall en Atlantic City tiene 33,114 tubos, incluyendo el tubo más 
            grande del mundo: 19.5 metros de largo y 1 metro de diámetro, produciendo una nota de 8 Hz 
            (inaudible, pero se siente como vibración). Los tubos crean ondas estacionarias, y la 
            superposición de múltiples tubos genera el sonido característico del órgano.
          </p>
          <p>
            Cuando se tocan acordes, las pulsaciones entre notas ligeramente desafinadas crean el efecto 
            "tremolo" natural del órgano. Los organistas ajustan la afinación de tubos individuales para 
            controlar estas pulsaciones, creando diferentes "temperamentos" musicales. El órgano puede 
            producir sonidos tan fuertes (130 dB) que pueden dañar la audición, equivalente a un motor 
            a reacción.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌈 El Misterio de los Anillos de Newton</h3>
          <p>
            Isaac Newton observó patrones circulares de colores (ahora llamados "anillos de Newton") 
            entre una lente convexa y una placa de vidrio plana. Aunque midió meticulosamente los 
            diámetros de los anillos y descubrió que eran proporcionales a las raíces cuadradas de 
            números enteros, no pudo explicarlos correctamente con su teoría corpuscular de la luz.
          </p>
          <p>
            Newton propuso que las partículas de luz experimentaban "accesos de fácil reflexión y fácil 
            transmisión" periódicos, una idea extraña que anticipaba vagamente la dualidad onda-partícula. 
            No fue hasta Young y Fresnel que los anillos fueron correctamente explicados como 
            interferencia. Irónicamente, el fenómeno que lleva el nombre de Newton es evidencia contra 
            su propia teoría de la luz.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎧 El Silencio Más Ruidoso</h3>
          <p>
            Los primeros auriculares con cancelación activa de ruido (ANC) tenían un problema curioso: 
            cuando funcionaban perfectamente, algunos usuarios reportaban sentirse mareados o incómodos 
            en el "silencio artificial". El cerebro humano está acostumbrado a ruido de fondo constante 
            y su ausencia repentina puede ser desconcertante.
          </p>
          <p>
            Los fabricantes modernos de auriculares ANC incluyen un modo "transparencia" que permite 
            pasar algo de ruido ambiental, especialmente frecuencias altas (voces, alarmas). Algunos 
            usuarios reportan que el silencio total de ANC les hace más conscientes de sonidos internos 
            del cuerpo (latidos del corazón, respiración, tinnitus), lo que puede ser inquietante. El 
            "silencio perfecto" resulta ser menos deseable de lo esperado.
          </p>
        </div>
      </div>


      <TheorySection title="Resumen">
        <Concept>
          <p>
            El principio de superposición establece que cuando dos o más ondas se encuentran, el 
            desplazamiento resultante es la suma algebraica de los desplazamientos individuales. Este 
            principio fundamental explica fenómenos como interferencia, pulsaciones y ondas estacionarias.
          </p>
          <p>
            La interferencia puede ser constructiva (ondas en fase, amplitud máxima A_max = A₁ + A₂) o 
            destructiva (ondas en contrafase, amplitud mínima A_min = |A₁ - A₂|). La diferencia de fase 
            entre ondas depende de la diferencia de camino: Δφ = (2π/λ)Δr. Interferencia constructiva 
            ocurre cuando Δr = nλ, y destructiva cuando Δr = (n + 1/2)λ.
          </p>
          <p>
            Las pulsaciones resultan de la superposición de ondas con frecuencias ligeramente diferentes, 
            produciendo variaciones periódicas de amplitud con frecuencia f_puls = |f₁ - f₂|. Las ondas 
            estacionarias se forman cuando ondas idénticas viajan en direcciones opuestas, creando nodos 
            (puntos de amplitud cero) y antinodos (puntos de amplitud máxima).
          </p>
          <p>
            Las aplicaciones de la superposición son extraordinariamente diversas: desde afinación de 
            instrumentos musicales hasta detección de ondas gravitacionales, desde auriculares con 
            cancelación de ruido hasta holografía, desde recubrimientos antirreflejantes hasta 
            tratamientos médicos con ultrasonido enfocado. El experimento de la doble rendija de Young 
            demostró la naturaleza ondulatoria de la luz mediante interferencia, revolucionando la física.
          </p>
        </Concept>
      </TheorySection>
    </>
  );
};

export default Theory;
