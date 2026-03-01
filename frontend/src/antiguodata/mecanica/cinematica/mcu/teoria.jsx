import { TheorySection, Concept, Formula } from '../../../../components/TheoryV2';
import { definitions as mcuDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "MCU - Movimiento Circular Uniforme",
  descripcion: "Movimiento circular con velocidad angular constante",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const McuTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es el Movimiento Circular Uniforme (MCU)?">
        <p>
          El Movimiento Circular Uniforme (MCU) describe el movimiento de un objeto que se desplaza a lo largo de una trayectoria circular con una rapidez constante.
        </p>
        <p>
          Aunque la rapidez (el módulo del vector velocidad) es constante, la dirección del vector velocidad cambia continuamente, apuntando siempre de forma tangente a la trayectoria. Este cambio en la dirección implica que existe una aceleración, conocida como aceleración centrípeta, que siempre apunta hacia el centro del círculo.
        </p>
      </TheorySection>

      <TheorySection title="Conceptos y Magnitudes Fundamentales">

        <Concept title="Período (T) y Frecuencia (f)">
          <p>El Período (T) es el tiempo que tarda un objeto en completar una vuelta completa, medido en segundos (s). La Frecuencia (f) es el número de vueltas por unidad de tiempo, medida en Hertz (Hz).</p>
          <Formula 
            expression={String.raw`f = \frac{1}{T}`}
            calculatorId="mcu-periodo-frecuencia"
            definitions={mcuDefinitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular el Período (T)", expression: String.raw`T = \frac{1}{f}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>f = Frecuencia (Hz o s⁻¹)</li>
            <li>T = Período (s)</li>
          </ul>
        </Concept>

        <Concept title="Velocidad Angular (ω)">
          <p>Mide la rapidez con la que cambia el ángulo en el centro del círculo (desplazamiento angular por unidad de tiempo), medida en radianes por segundo (rad/s).</p>
          <Formula 
            expression={String.raw`\omega = \frac{\Delta\theta}{t}`}
            calculatorId="mcu-omega-desplazamiento"
            definitions={mcuDefinitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular el Desplazamiento Angular (Δθ)", expression: String.raw`\Delta\theta = \omega \cdot t` },
                { description: "Calcular el Tiempo (t)", expression: String.raw`t = \frac{\Delta\theta}{\omega}` }
            ]}
          />
          <p className="mt-3">También se puede expresar en función del período o la frecuencia:</p>
          <Formula
            expression={String.raw`\omega = 2\pi f`}
            calculatorId="mcu-omega-frec-periodo"
            definitions={mcuDefinitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular la Frecuencia (f)", expression: String.raw`f = \frac{\omega}{2\pi}` },
                { description: "Calcular a partir del Período (T)", expression: String.raw`\omega = \frac{2\pi}{T}` },
                { description: "Calcular el Período (T)", expression: String.raw`T = \frac{2\pi}{\omega}` },
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>ω = Velocidad angular (rad/s)</li>
            <li>Δθ = Desplazamiento angular (rad)</li>
            <li>t = Tiempo (s)</li>
            <li>f = Frecuencia (Hz)</li>
            <li>T = Período (s)</li>
          </ul>
        </Concept>

        <Concept title="Velocidad Tangencial (v)">
          <p>Es la velocidad lineal del objeto, tangente a la trayectoria. Su magnitud es constante y se mide en metros por segundo (m/s).</p>
          <Formula 
            expression={String.raw`v = \omega \cdot r`}
            calculatorId="mcu-velocidad-tangencial"
            definitions={mcuDefinitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular la Velocidad Angular (ω)", expression: String.raw`\omega = \frac{v}{r}` },
                { description: "Calcular el Radio (r)", expression: String.raw`r = \frac{v}{\omega}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>v = Velocidad tangencial (m/s)</li>
            <li>ω = Velocidad angular (rad/s)</li>
            <li>r = Radio de la trayectoria circular (m)</li>
          </ul>
        </Concept>

        <Concept title="Aceleración Centrípeta (a_c)">
          <p>Es la aceleración que apunta hacia el centro del círculo, responsable de mantener al objeto en su trayectoria circular. Se mide en metros por segundo al cuadrado (m/s²).</p>
          <Formula 
            expression={String.raw`a_c = \frac{v^2}{r}`}
            calculatorId="mcu-aceleracion-centripeta"
            definitions={mcuDefinitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular a partir de la Velocidad Angular (ω)", expression: String.raw`a_c = \omega^2 \cdot r` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>a_c = Aceleración centrípeta (m/s²)</li>
            <li>v = Velocidad tangencial (m/s)</li>
            <li>ω = Velocidad angular (rad/s)</li>
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
          <h3>🎡 Parques de atracciones</h3>
          <p>
            Las norias, carruseles y otras atracciones giratorias son ejemplos perfectos de MCU. Los ingenieros calculan la velocidad angular óptima para que la experiencia sea emocionante pero segura. La London Eye, por ejemplo, gira a una velocidad tan lenta (0.26 m/s) que los pasajeros pueden subir y bajar sin que se detenga, completando una vuelta en aproximadamente 30 minutos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔧 Maquinaria industrial</h3>
          <p>
            Motores, turbinas, ventiladores y todo tipo de maquinaria rotativa funcionan bajo los principios del MCU. Los ingenieros deben calcular las velocidades angulares, las fuerzas centrípetas y las tensiones en los materiales para garantizar que las máquinas funcionen de manera eficiente y segura. Un motor de coche típico gira entre 1,000 y 6,000 RPM (revoluciones por minuto).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🛰️ Satélites y órbitas</h3>
          <p>
            Los satélites en órbita circular alrededor de la Tierra realizan MCU. La Estación Espacial Internacional (ISS) orbita a unos 400 km de altura con una velocidad de 7.66 km/s, completando una vuelta completa cada 90 minutos. La aceleración centrípeta necesaria para mantener esta órbita es proporcionada por la fuerza gravitacional terrestre.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏎️ Curvas en carreteras y circuitos</h3>
          <p>
            Cuando un coche toma una curva a velocidad constante, experimenta MCU. Los ingenieros de carreteras diseñan curvas peraltadas (inclinadas) para que la fuerza normal ayude a proporcionar la aceleración centrípeta necesaria, reduciendo la dependencia de la fricción. En circuitos de Fórmula 1, las curvas están diseñadas con peraltes de hasta 18 grados.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ Centrifugadoras</h3>
          <p>
            Las centrifugadoras médicas y de laboratorio utilizan MCU para separar sustancias de diferentes densidades. Al girar a altas velocidades (hasta 15,000 RPM), generan aceleraciones centrípetas de miles de g, forzando a las partículas más densas hacia el exterior. Esto permite separar componentes de la sangre, purificar ADN o analizar muestras.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌀 Lavadoras y secadoras</h3>
          <p>
            Durante el ciclo de centrifugado, el tambor de una lavadora gira a alta velocidad (hasta 1,600 RPM). La ropa experimenta una gran aceleración centrípeta que la empuja contra las paredes del tambor, mientras el agua escapa por los agujeros. Una lavadora típica puede generar aceleraciones de hasta 5g durante el centrifugado.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El estudio del movimiento circular
        </h2>
        
        <div className="theory-subsection">
          <h3>🏛️ Aristóteles y el movimiento circular (384-322 a.C.)</h3>
          <p>
            Aristóteles consideraba que el movimiento circular era el movimiento "perfecto" y natural de los cuerpos celestes. Creía que los planetas y estrellas se movían en círculos perfectos porque era el movimiento más perfecto y divino. Aunque su física era incorrecta, su énfasis en el movimiento circular influyó en el pensamiento científico durante casi 2,000 años.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔭 Copérnico y las órbitas circulares (1473-1543)</h3>
          <p>
            Nicolás Copérnico propuso el modelo heliocéntrico del sistema solar, con los planetas orbitando el Sol en círculos. Aunque más tarde se descubrió que las órbitas son elípticas, su trabajo fue revolucionario porque desafió la visión geocéntrica dominante y estableció las bases para el estudio moderno de la mecánica celeste.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🍎 Newton y la fuerza centrípeta (1643-1727)</h3>
          <p>
            Isaac Newton fue el primero en comprender que el movimiento circular requiere una fuerza constante dirigida hacia el centro (fuerza centrípeta). En sus Principia Mathematica (1687), demostró que esta fuerza es necesaria para cambiar continuamente la dirección de la velocidad. También calculó que la fuerza gravitacional proporciona exactamente la fuerza centrípeta necesaria para mantener a la Luna en órbita.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎡 La Revolución Industrial y las máquinas rotativas</h3>
          <p>
            Durante los siglos XVIII y XIX, la Revolución Industrial trajo un auge en el desarrollo de máquinas rotativas: ruedas de agua, molinos, motores de vapor y más tarde motores eléctricos. Los ingenieros tuvieron que dominar los principios del MCU para diseñar máquinas eficientes y seguras. El desarrollo de los rodamientos de bolas en el siglo XIX fue crucial para reducir la fricción en sistemas rotativos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 La era espacial (siglo XX)</h3>
          <p>
            Con el lanzamiento del Sputnik en 1957, el MCU se volvió fundamental para la ingeniería aeroespacial. Los científicos tuvieron que calcular con precisión las velocidades orbitales, períodos y aceleraciones centrípetas para colocar satélites en órbita. Hoy en día, miles de satélites orbitan la Tierra en trayectorias circulares cuidadosamente calculadas.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🌍 La Tierra como centrifugadora gigante</h3>
          <p>
            Debido a la rotación de la Tierra, una persona en el ecuador experimenta una aceleración centrípeta de aproximadamente 0.034 m/s² (0.3% de g). Esto hace que peses ligeramente menos en el ecuador que en los polos. Una persona de 70 kg pesa unos 240 gramos menos en el ecuador que en los polos debido a esta aceleración centrípeta.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎢 La montaña rusa más rápida</h3>
          <p>
            Formula Rossa en Abu Dhabi es la montaña rusa más rápida del mundo, alcanzando 240 km/h. En sus curvas más cerradas, los pasajeros experimentan aceleraciones centrípetas de hasta 4.8g (47 m/s²). Los pasajeros deben usar gafas protectoras porque a esa velocidad, incluso un insecto podría causar lesiones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏎️ Las fuerzas G en Fórmula 1</h3>
          <p>
            Los pilotos de Fórmula 1 experimentan aceleraciones centrípetas de hasta 6g en las curvas más cerradas. En la curva 8 del circuito de Turquía (antes de su modificación), los pilotos sostenían 5g durante 7 segundos consecutivos, una de las exigencias físicas más extremas en el deporte. Para soportar estas fuerzas, los pilotos entrenan intensamente su cuello y core.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌀 El récord de velocidad de rotación</h3>
          <p>
            Los pulsares (estrellas de neutrones que giran rápidamente) son los objetos con mayor velocidad angular conocidos en el universo. El pulsar más rápido conocido, PSR J1748-2446ad, gira 716 veces por segundo. Su superficie ecuatorial se mueve a aproximadamente el 24% de la velocidad de la luz, experimentando aceleraciones centrípetas inimaginables.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 El problema de la "fuerza centrífuga"</h3>
          <p>
            Muchas personas hablan de la "fuerza centrífuga" que empuja hacia afuera en un movimiento circular. En realidad, esta fuerza no existe en un marco de referencia inercial. Lo que sentimos como "empuje hacia afuera" es simplemente nuestra inercia: nuestro cuerpo quiere seguir en línea recta según la Primera Ley de Newton, pero la fuerza centrípeta (real) nos obliga a seguir la trayectoria circular.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🛸 Gravedad artificial en el espacio</h3>
          <p>
            En películas de ciencia ficción, las estaciones espaciales crean "gravedad artificial" mediante rotación. Esto es físicamente correcto: si una estación espacial cilíndrica gira, los astronautas en su interior experimentarían una aceleración centrípeta que simularía la gravedad. Para simular 1g en una estación de 100 metros de radio, necesitaría girar a 9.5 RPM (una vuelta cada 6.3 segundos).
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            El MCU es un movimiento circular con rapidez constante pero dirección de velocidad cambiante.
          </li>
          <li>
            El período (T) es el tiempo de una vuelta completa; la frecuencia (f) es el número de vueltas por segundo: f = 1/T.
          </li>
          <li>
            La velocidad angular (ω) mide el cambio de ángulo por unidad de tiempo: ω = 2πf = 2π/T.
          </li>
          <li>
            La velocidad tangencial (v) es la velocidad lineal del objeto: v = ωr.
          </li>
          <li>
            La aceleración centrípeta (a_c) apunta hacia el centro y mantiene el movimiento circular: a_c = v²/r = ω²r.
          </li>
          <li>
            Aunque la rapidez es constante, existe aceleración porque la dirección de la velocidad cambia continuamente.
          </li>
        </ul>
      </div>
    </>
  );
};

export default McuTheory;
