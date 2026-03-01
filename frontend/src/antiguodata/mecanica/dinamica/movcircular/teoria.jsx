import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';
import exercises from './ejercicios.json';

// Metadatos del tema
export const metadata = {
  titulo: "Movimiento Circular",
  descripcion: "Dinámica del movimiento circular y fuerza centrípeta",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const MovCircularTheory = () => {
  return (
    <>
      <TheorySection title="Introducción al Movimiento Circular">
        <p>
          El Movimiento Circular es el que describe un cuerpo que se mueve alrededor de un punto fijo, llamado centro, a una distancia constante, llamada radio. Aunque la rapidez del objeto sea constante, su velocidad está cambiando continuamente de dirección, lo que implica que existe una aceleración.
        </p>
        <Important>
          <p>La aceleración en el movimiento circular uniforme no cambia la rapidez del objeto, solo la dirección de su velocidad.</p>
        </Important>
      </TheorySection>

      <TheorySection title="Conceptos Fundamentales">
        <Concept title="Velocidad Angular (ω) y Tangencial (v)">
          <p>La Velocidad Angular (ω) mide la rapidez con la que cambia el ángulo. La Velocidad Tangencial (v) es la velocidad lineal del objeto en un instante, y es siempre tangente a la trayectoria.</p>
          <Formula
            expression={String.raw`v = \omega \cdot r`}
            calculatorId="velocidad-angular-tangencial"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Velocidad Angular", expression: String.raw`\omega = \frac{v}{r}` },
              { description: "Calcular Radio", expression: String.raw`r = \frac{v}{\omega}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>v = Velocidad tangencial (m/s)</li>
            <li>ω = Velocidad angular (rad/s)</li>
            <li>r = Radio de la trayectoria circular (m)</li>
          </ul>
        </Concept>

        <Concept title="Aceleración Centrípeta (ac)">
          <p>Es la aceleración que apunta constantemente hacia el centro de la trayectoria circular. Es la responsable de cambiar la dirección de la velocidad y mantener al objeto en su órbita. Se puede calcular de dos formas:</p>
          <Formula
            expression={String.raw`a_c = \frac{v^2}{r}`}
          />
          <Formula
            expression={String.raw`a_c = \omega^2 \cdot r`}
            calculatorId="aceleracion-centripeta"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Velocidad Tangencial", expression: String.raw`v = \sqrt{a_c \cdot r}` },
              { description: "Calcular Radio desde v", expression: String.raw`r = \frac{v^2}{a_c}` },
              { description: "Calcular Velocidad Angular", expression: String.raw`\omega = \sqrt{\frac{a_c}{r}}` },
              { description: "Calcular Radio desde ω", expression: String.raw`r = \frac{a_c}{\omega^2}` }
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

        <Concept title="Fuerza Centrípeta (Fc)">
          <p>Según la Segunda Ley de Newton, si hay una aceleración, debe haber una fuerza neta. La Fuerza Centrípeta es la fuerza resultante que apunta hacia el centro y que causa la aceleración centrípeta. No es un nuevo tipo de fuerza, sino la suma de fuerzas reales como la tensión, la gravedad o la normal.</p>
          <Formula
            expression={String.raw`F_c = m \cdot a_c`}
            calculatorId="fuerza-centripeta"
            definitions={definitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular Masa", expression: String.raw`m = \frac{F_c}{a_c}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>F_c = Fuerza centrípeta (N)</li>
            <li>m = Masa del objeto (kg)</li>
            <li>a_c = Aceleración centrípeta (m/s²)</li>
          </ul>
        </Concept>

        <Concept title="Período (T) y Frecuencia (f)">
          <p>El Período (T) es el tiempo que tarda un objeto en completar una revolución completa. La Frecuencia (f) es el número de revoluciones por unidad de tiempo. Son inversamente proporcionales.</p>
          <Formula
            expression={String.raw`T = \frac{1}{f}`}
            calculatorId="periodo-frecuencia"
            definitions={definitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular Frecuencia", expression: String.raw`f = \frac{1}{T}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>T = Período (s)</li>
            <li>f = Frecuencia (Hz o s⁻¹)</li>
            <li>ω = Velocidad angular (rad/s)</li>
          </ul>
          
          <p>La velocidad angular también se puede expresar en función de estas propiedades:</p>
           <Formula
            expression={String.raw`\omega = \frac{2\pi}{T}`}
          />
           <Formula
            expression={String.raw`\omega = 2\pi \cdot f`}
            calculatorId="velocidad-angular-periodo"
            definitions={definitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular Período", expression: String.raw`T = \frac{2\pi}{\omega}` },
                { description: "Calcular Frecuencia", expression: String.raw`f = \frac{\omega}{2\pi}` }
            ]}
          />
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🎢 Montañas rusas y loops</h3>
          <p>
            En un loop vertical de montaña rusa, la fuerza centrípeta necesaria para mantener el vagón en la trayectoria circular viene de la combinación de la normal y el peso. En la parte superior del loop, ambas fuerzas apuntan hacia abajo (centro). La velocidad mínima para no caer es cuando la normal es cero y solo el peso proporciona la fuerza centrípeta: v_min = √(gr). Los diseñadores calculan esto para garantizar seguridad y emoción.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🛰️ Satélites en órbita</h3>
          <p>
            Los satélites permanecen en órbita porque la gravedad proporciona exactamente la fuerza centrípeta necesaria. A 400 km de altura (Estación Espacial Internacional), la velocidad orbital es de 7.66 km/s y el período es de 92 minutos. Si van más rápido, escapan de la órbita; más lento, caen a la Tierra. Los satélites geoestacionarios orbitan a 35,786 km con período de 24 horas, permaneciendo sobre el mismo punto terrestre.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏎️ Peralte en curvas de carretera</h3>
          <p>
            Las curvas de autopistas están peraltadas (inclinadas) para que la componente del peso ayude a proporcionar la fuerza centrípeta necesaria. Esto reduce la dependencia de la fricción y permite tomar curvas a mayor velocidad de forma segura. El ángulo óptimo de peralte depende de la velocidad de diseño y el radio de la curva: tan(θ) = v²/(gr). Las pistas de NASCAR tienen peraltes de hasta 33°.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌀 Centrifugadoras médicas</h3>
          <p>
            Las centrifugadoras separan componentes de la sangre usando fuerza centrípeta. Girando a 3,000-15,000 rpm, generan aceleraciones de hasta 20,000 g. Los componentes más densos (glóbulos rojos) experimentan mayor fuerza centrípeta y se mueven hacia afuera, separándose del plasma. Este proceso es esencial en bancos de sangre y laboratorios clínicos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚁 Rotores de helicóptero</h3>
          <p>
            Las aspas del rotor de un helicóptero experimentan enormes fuerzas centrípetas. Un rotor de 15 metros girando a 300 rpm genera aceleraciones de 150 g en las puntas. Los materiales deben soportar estas fuerzas sin romperse. La fuerza centrípeta también causa que las aspas se estiren varios centímetros durante el vuelo, lo cual debe considerarse en el diseño.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏃 Atletismo en pista</h3>
          <p>
            Los corredores en pistas curvas se inclinan hacia el centro para que la componente horizontal de la normal proporcione la fuerza centrípeta. A mayor velocidad, mayor inclinación. Los velocistas en curvas de 200m pueden inclinarse hasta 20°. Las pistas están diseñadas con curvas de radio específico (36.5 m en pistas estándar) para optimizar el rendimiento y reducir el riesgo de lesiones.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De los planetas a las partículas
        </h2>
        
        <div className="theory-subsection">
          <h3>Isaac Newton (1643-1727): La gravedad como fuerza centrípeta</h3>
          <p>
            Newton fue el primero en entender que la Luna permanece en órbita porque la gravedad proporciona la fuerza centrípeta necesaria. En su experimento mental del "cañón de Newton", imaginó disparar un proyectil horizontalmente desde una montaña muy alta. A suficiente velocidad, el proyectil "caería" alrededor de la Tierra, entrando en órbita. Esta idea unificó la física terrestre y celeste, mostrando que las mismas leyes gobiernan manzanas y planetas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Christiaan Huygens (1629-1695): La fuerza centrífuga</h3>
          <p>
            Huygens estudió el movimiento circular y derivó la fórmula de la aceleración centrípeta (a_c = v²/r) en 1659, antes que Newton publicara sus leyes. También introdujo el concepto de "fuerza centrífuga" (hacia afuera), aunque hoy entendemos que es una fuerza ficticia que aparece en sistemas de referencia rotatorios. Su trabajo fue fundamental para entender el movimiento de los planetas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Siglo XIX: Aplicaciones industriales</h3>
          <p>
            Durante la Revolución Industrial, el movimiento circular se volvió crucial. Las máquinas de vapor tenían volantes que giraban a altas velocidades. Los ingenieros debían calcular las fuerzas centrípetas para evitar que los volantes se desintegraran. Se desarrollaron reguladores centrífugos que usaban la fuerza centrípeta para controlar automáticamente la velocidad de las máquinas, un ejemplo temprano de control automático.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Siglo XX: Aceleradores de partículas</h3>
          <p>
            Los aceleradores de partículas modernos usan campos magnéticos para proporcionar la fuerza centrípeta que mantiene las partículas en trayectorias circulares. El Gran Colisionador de Hadrones (LHC) tiene 27 km de circunferencia y acelera protones al 99.9999991% de la velocidad de la luz. A esas velocidades, los efectos relativistas son significativos, pero el principio básico de la fuerza centrípeta sigue siendo válido.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>🌙 La Luna se aleja de la Tierra</h3>
          <p>
            La Luna se aleja de la Tierra a 3.8 cm por año. Esto ocurre porque las mareas terrestres transfieren momento angular a la Luna, aumentando su velocidad orbital. Según la mecánica orbital, mayor velocidad significa órbita más alta. En 50 mil millones de años, la Luna estaría tan lejos que su período orbital igualaría la rotación terrestre (47 días), y ambos quedarían "anclados" mutuamente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎡 La noria más grande del mundo</h3>
          <p>
            El Ain Dubai (Ojo de Dubái) tiene 250 metros de diámetro y gira a 0.25 rpm. En la parte superior, los pasajeros experimentan una aceleración centrípeta de solo 0.009 m/s² (0.001 g), casi imperceptible. Sin embargo, la estructura debe soportar fuerzas centrípetas enormes debido a su masa de 9,000 toneladas. Los ingenieros calcularon cada componente para resistir estas fuerzas durante décadas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏎️ El récord de fuerza G en curva</h3>
          <p>
            Los pilotos de F1 experimentan hasta 6 G laterales en curvas rápidas. Esto significa que su cabeza (5 kg) "pesa" 30 kg empujando hacia un lado. Los músculos del cuello deben soportar esta fuerza durante toda la carrera. Los pilotos entrenan específicamente para fortalecer el cuello. Sin este entrenamiento, podrían sufrir lesiones graves o perder el conocimiento.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌀 El experimento del cubo de Newton</h3>
          <p>
            Newton realizó un experimento famoso: llenó un cubo con agua, lo colgó de una cuerda y lo giró hasta que la cuerda se retorciera. Al soltar, el cubo giraba y el agua formaba una superficie cóncava. Newton usó esto para argumentar que el movimiento rotatorio es absoluto, no relativo. Este experimento generó debates filosóficos sobre la naturaleza del espacio que continúan hasta hoy.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 Gravedad artificial en el espacio</h3>
          <p>
            Para crear gravedad artificial en el espacio, se propone hacer girar estaciones espaciales. Una estación de 100 m de radio girando a 3 rpm generaría 1 g en el borde exterior (la fuerza centrípeta simularía la gravedad). Sin embargo, el gradiente de "gravedad" entre la cabeza y los pies podría causar mareos. Por eso se necesitan radios grandes, lo cual hace estas estaciones muy costosas de construir.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 El efecto Magnus en deportes</h3>
          <p>
            Cuando una pelota gira mientras se mueve, el aire a un lado se mueve más rápido que al otro (efecto Magnus), creando una fuerza perpendicular al movimiento. Esto causa que las pelotas curven en el aire. Los futbolistas usan esto para "doblar" tiros libres. Los jugadores de béisbol lanzan "curvas" que pueden desviar la pelota hasta 45 cm. Es movimiento circular aplicado al aire alrededor de la pelota.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <p>
          El movimiento circular requiere una aceleración centrípeta (a_c = v²/r = ω²r) que apunta constantemente hacia el centro, cambiando la dirección de la velocidad sin cambiar su magnitud. Esta aceleración es causada por una fuerza centrípeta (F_c = ma_c), que no es un nuevo tipo de fuerza sino la suma de fuerzas reales como tensión, gravedad o normal.
        </p>
        <p>
          La velocidad tangencial (v) y angular (ω) están relacionadas por v = ωr. El período (T) es el tiempo de una revolución completa, y la frecuencia (f = 1/T) es el número de revoluciones por segundo. La velocidad angular también se expresa como ω = 2π/T = 2πf.
        </p>
        <p>
          El movimiento circular es fundamental en tecnología moderna: desde satélites en órbita hasta centrifugadoras médicas, desde montañas rusas hasta aceleradores de partículas. Entender la fuerza centrípeta es esencial para diseñar sistemas seguros y eficientes que involucren rotación.
        </p>
      </div>
    </>
  );
};

export default MovCircularTheory;
