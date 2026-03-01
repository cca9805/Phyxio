import { Formula, Concept, TheorySection, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions';
import exercises from './ejercicios.json';

// Metadatos del tema
export const metadata = {
  titulo: "Movimiento e Impulso",
  descripcion: "Conservación del momento lineal y colisiones",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const MovimientoImpulsoTeoria = () => {
  return (
    <TheorySection title="Movimiento e Impulso">
        <p>
          El estudio del movimiento y el impulso es fundamental en la dinámica, ya que permite analizar cómo las fuerzas afectan el estado de movimiento de los cuerpos y cómo se produce el cambio en la cantidad de movimiento.
        </p>

        <Concept title="Cantidad de Movimiento (Momentum)">
            <p>La cantidad de movimiento (también llamada momentum) es una magnitud física que describe el movimiento de un objeto y se define como el producto de su masa por su velocidad. Es una magnitud vectorial.</p>
            <Formula
                expression="p = m \cdot v"
                description="p: Cantidad de movimiento (kg·m/s), m: Masa (kg), v: Velocidad (m/s)"
                calculatorId="cantidad-movimiento"
                definitions={definitions}
                exercises={exercises}
                complementary={[
                    { expression: "m = p / v", description: "Calcular la masa a partir de la cantidad de movimiento y la velocidad." },
                    { expression: "v = p / m", description: "Calcular la velocidad a partir de la cantidad de movimiento y la masa." }
                ]}
            />
            
            <p><strong>Donde:</strong></p>
            <ul>
              <li>p = Cantidad de movimiento o momento lineal (kg·m/s)</li>
              <li>m = Masa del objeto (kg)</li>
              <li>v = Velocidad del objeto (m/s)</li>
            </ul>
        </Concept>

        <Concept title="Impulso">
            <p>El impulso es el efecto de una fuerza aplicada durante un intervalo de tiempo. Representa el cambio en la cantidad de movimiento de un cuerpo.</p>
            <Formula
                expression="J = F_{prom} \cdot \Delta t"
                description="J: Impulso (N·s), F: Fuerza promedio (N), Δt: Intervalo de tiempo (s)"
                calculatorId="impulso"
                definitions={definitions}
                exercises={exercises}
                complementary={[
                    { expression: "F_{prom} = J / \\Delta t", description: "Calcular la fuerza promedio a partir del impulso y el tiempo." },
                    { expression: "\\Delta t = J / F_{prom}", description: "Calcular el intervalo de tiempo a partir del impulso y la fuerza." }
                ]}
            />
            
            <p><strong>Donde:</strong></p>
            <ul>
              <li>J = Impulso (N·s o kg·m/s)</li>
              <li>F_prom = Fuerza promedio aplicada (N)</li>
              <li>Δt = Intervalo de tiempo (s)</li>
            </ul>
        </Concept>

        <Concept title="Teorema del Impulso y la Cantidad de Movimiento">
            <p>El teorema del impulso establece que el impulso total aplicado a un cuerpo es igual al cambio en su cantidad de movimiento.</p>
            <Formula
                expression="J = \Delta p = m \cdot (v_f - v_i)"
                description="v_i: Velocidad inicial, v_f: Velocidad final"
                calculatorId="teorema-impulso-momentum"
                definitions={definitions}
                exercises={exercises}
                complementary={[
                    { expression: "v_f = v_i + J / m", description: "Calcular la velocidad final." },
                    { expression: "v_i = v_f - J / m", description: "Calcular la velocidad inicial." },
                    { expression: "m = J / (v_f - v_i)", description: "Calcular la masa." }
                ]}
            />
            
            <p><strong>Donde:</strong></p>
            <ul>
              <li>J = Impulso (N·s)</li>
              <li>Δp = Cambio en la cantidad de movimiento (kg·m/s)</li>
              <li>m = Masa del objeto (kg)</li>
              <li>v_f = Velocidad final (m/s)</li>
              <li>v_i = Velocidad inicial (m/s)</li>
            </ul>
        </Concept>

        <Concept title="Conservación de la Cantidad de Movimiento">
            <p>En un sistema aislado (sin fuerzas externas), la cantidad de movimiento total se conserva. Esto es crucial en el análisis de choques (colisiones).</p>
            <Formula
                expression="\sum p_{inicial} = \sum p_{final}"
                description="La suma de las cantidades de movimiento antes de la colisión es igual a la suma después de la colisión."
            />
            <Important>
                <p>Choque Elástico: Se conserva la cantidad de movimiento y la energía cinética. Ejemplo: bolas de billar.</p>
                <p>Choque Inelástico: Se conserva la cantidad de movimiento, pero no la energía cinética. Ejemplo: dos coches que chocan y quedan pegados.</p>
            </Important>
            <Formula
                expression="v_f = \frac{m_1 v_{i1} + m_2 v_{i2}}{m_1 + m_2}"
                description="Fórmula para la velocidad final en una colisión perfectamente inelástica."
                calculatorId="colision-inelastica"
                definitions={definitions}
                exercises={exercises}
                complementary={[
                    { expression: "m_1 = m_2(v_f - v_{i2}) / (v_{i1} - v_f)", description: "Despeje para la masa 1." }
                ]}
            />
            
            <p><strong>Donde:</strong></p>
            <ul>
              <li>v_f = Velocidad final común después de la colisión (m/s)</li>
              <li>m₁, m₂ = Masas de los objetos (kg)</li>
              <li>v_i1, v_i2 = Velocidades iniciales de los objetos (m/s)</li>
            </ul>
        </Concept>

      <div className="theory-applications-section">
        <h2>
          <span>🔧</span> Aplicaciones en la Vida Real
        </h2>
        
        <div className="theory-subsection">
          <h3>🚗 Airbags en automóviles</h3>
          <p>
            Aumentan el tiempo de colisión, reduciendo la fuerza del impacto sobre los pasajeros. Un airbag puede extender el tiempo de colisión de 0.01 segundos a 0.1 segundos, reduciendo la fuerza en un factor de 10. Esto puede significar la diferencia entre lesiones menores y fatales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎾 Deportes de raqueta</h3>
          <p>
            Los jugadores aplican impulso a la pelota para cambiar su velocidad y dirección. Un saque de tenis profesional puede cambiar el momento de una pelota de 58 gramos de 0 a 70 m/s en 0.005 segundos, aplicando una fuerza promedio de más de 800 N.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 Cohetes espaciales</h3>
          <p>
            Expulsan gases a alta velocidad hacia atrás, generando impulso que los propulsa hacia adelante. El Saturn V expulsaba 15 toneladas de combustible por segundo a 2,500 m/s, generando un impulso masivo que lo llevó a la Luna.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🥊 Boxeo y protección</h3>
          <p>
            Los guantes acolchados aumentan el tiempo de contacto, reduciendo la fuerza del golpe. Un golpe sin guante dura 0.001 segundos, mientras que con guante dura 0.01 segundos, reduciendo la fuerza en un factor de 10 para el mismo impulso.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🪂 Paracaídas y aterrizajes</h3>
          <p>
            Aumentan el tiempo de frenado al aterrizar, reduciendo la fuerza de impacto. Los paracaidistas profesionales doblan las rodillas al aterrizar para extender el tiempo de contacto con el suelo, reduciendo la fuerza sobre sus piernas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔨 Martillos y herramientas</h3>
          <p>
            Concentran el impulso en un tiempo corto para maximizar la fuerza aplicada. Un martillo de 500 gramos moviéndose a 10 m/s puede generar fuerzas de más de 5,000 N al impactar en 0.001 segundos, suficiente para clavar un clavo en madera dura.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        
        <div className="theory-subsection">
          <h3>🎓 René Descartes y la cantidad de movimiento</h3>
          <p>
            El concepto de cantidad de movimiento fue introducido por René Descartes (1596-1650), quien lo llamó "cantidad de movimiento" y lo definió como el producto de la masa por la velocidad. Descartes propuso que esta cantidad se conservaba en el universo, una idea revolucionaria para su época.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📖 Newton y los Principia</h3>
          <p>
            Isaac Newton (1643-1727) refinó el concepto en sus "Principia Mathematica" (1687), formulando su segunda ley del movimiento en términos de cambio de momento: F = dp/dt. Newton también estableció el principio de conservación del momento en colisiones, demostrando que era una consecuencia de su tercera ley.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ El desarrollo del concepto de impulso</h3>
          <p>
            El término "impulso" fue desarrollado posteriormente para describir el efecto de una fuerza aplicada durante un tiempo. Este concepto resultó fundamental para el análisis de colisiones y explosiones, y es esencial en la ingeniería moderna, desde el diseño de vehículos seguros hasta la propulsión de cohetes y el análisis de impactos en estructuras.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>🦟 El mosquito vs el parabrisas</h3>
          <p>
            Un mosquito que choca contra el parabrisas de un coche experimenta la misma fuerza que el coche (tercera ley de Newton), pero su pequeña masa hace que sufra una enorme desaceleración. Si el coche frena a 1 m/s², el mosquito desacelera a millones de m/s², explicando por qué no sobrevive al impacto.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧑‍🚀 Moverse en el espacio</h3>
          <p>
            Los astronautas en el espacio pueden moverse lanzando objetos en dirección opuesta, aplicando el principio de conservación del momento. Si un astronauta de 80 kg lanza una herramienta de 2 kg a 5 m/s, él retrocederá a 0.125 m/s. Es la única forma de moverse sin empujar contra algo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⛳ Récord de velocidad en golf</h3>
          <p>
            El récord de velocidad de una pelota de golf es de 339.6 km/h (94.3 m/s), alcanzado por Ryan Winther en 2013. Esto requiere aplicar un impulso enorme en el tiempo de contacto de apenas 0.0005 segundos, generando fuerzas de más de 10,000 N.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🕷️ Arañas saltarinas</h3>
          <p>
            Las arañas saltarinas pueden saltar hasta 50 veces su longitud corporal, generando un impulso increíble con sus patas traseras. No usan músculos para saltar, sino presión hidráulica: bombean fluido a sus patas traseras que se extienden explosivamente, como un resorte liberándose.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔫 Disparar en el espacio</h3>
          <p>
            En el espacio, disparar un arma empujaría al astronauta hacia atrás con la misma cantidad de movimiento que la bala hacia adelante. Una bala de 10 gramos a 400 m/s empujaría a un astronauta de 80 kg a 0.05 m/s. Por eso las armas en el espacio son peligrosas: no solo por la bala, sino por el retroceso.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦘 Los canguros y la eficiencia energética</h3>
          <p>
            Los canguros son maestros de la conservación de energía: sus tendones almacenan energía elástica que se convierte en impulso para el siguiente salto. Pueden saltar a 60 km/h usando menos energía que un mamífero cuadrúpedo del mismo tamaño corriendo a la misma velocidad. Sus tendones actúan como resortes perfectos.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          La cantidad de movimiento (p = mv) describe el movimiento de un objeto. El impulso (J = FΔt) es el cambio en la 
          cantidad de movimiento. En un sistema aislado, la cantidad de movimiento total se conserva (p_total = constante). 
          Este principio es fundamental para analizar colisiones, explosiones y propulsión. Los airbags y paracaídas funcionan 
          aumentando el tiempo de colisión para reducir la fuerza.
        </p>
      </div>

    </TheorySection>
  );
};

export default MovimientoImpulsoTeoria;
