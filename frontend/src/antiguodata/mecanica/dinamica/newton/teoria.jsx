import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as newtonDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Leyes de Newton",
  descripcion: "Principios fundamentales de la dinámica y el movimiento",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const NewtonTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a las Leyes de Newton">
        <p>
          Las Leyes de Newton, formuladas por Sir Isaac Newton en el siglo XVII, son los cimientos de la mecánica clásica. Estos tres principios fundamentales describen la relación entre las fuerzas que actúan sobre un objeto y el movimiento resultante de ese objeto. Entender estas leyes es esencial para analizar casi cualquier problema de movimiento en el mundo macroscópico, desde lanzar una pelota hasta diseñar un puente o un cohete.
        </p>
      </TheorySection>

      <TheorySection title="Primera Ley de Newton: El Principio de Inercia">
        <p>
          La primera ley, a menudo llamada Ley de la Inercia, establece que un objeto permanecerá en su estado de movimiento actual a menos que una fuerza externa neta actúe sobre él.
        </p>
        <Important>
          <p>"Un objeto en reposo permanece en reposo, y un objeto en movimiento permanece en movimiento con velocidad constante (en línea recta y a la misma rapidez), a menos que sea obligado a cambiar su estado por fuerzas que actúan sobre él."</p>
        </Important>
        <Concept title="Inercia y Masa">
          <p>La inercia es la resistencia intrínseca de un objeto a cambiar su estado de movimiento. La masa (m) es la medida cuantitativa de la inercia. Cuanta más masa tiene un objeto, más difícil es ponerlo en movimiento, detenerlo o cambiar su dirección.</p>
          <Example>
            <p>Imagina empujar un carrito de supermercado vacío y luego uno lleno. El carrito lleno (mayor masa) opone mucha más resistencia a ser movido (mayor inercia).</p>
          </Example>
        </Concept>
        <Concept title="Equilibrio de Fuerzas">
          <p>La condición clave de la primera ley es que la fuerza neta (la suma vectorial de todas las fuerzas) sea cero. Cuando esto ocurre, se dice que el objeto está en equilibrio.</p>
           <Formula expression={String.raw`\sum \vec{F} = 0 \iff \vec{a} = 0`} />
          <p>Esto no significa que no haya fuerzas actuando, sino que las fuerzas existentes se anulan entre sí. Un libro sobre una mesa está en equilibrio porque la fuerza normal de la mesa hacia arriba cancela exactamente la fuerza del peso del libro hacia abajo.</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Segunda Ley de Newton: La Ley Fundamental de la Dinámica">
        <p>
          La segunda ley es la más poderosa y cuantitativa. Describe qué sucede cuando una fuerza neta <em>no nula</em> actúa sobre un objeto: el objeto acelera.
        </p>
        <Important>
          <p>"La aceleración de un objeto es directamente proporcional a la fuerza neta que actúa sobre él e inversamente proporcional a su masa."</p>
        </Important>
        <Concept title="La Fórmula del Movimiento">
          <p>Esta ley se expresa con una de las ecuaciones más famosas de la física. La fuerza es un vector, y la aceleración resultante tendrá la misma dirección y sentido que la fuerza neta.</p>
          <Formula
            expression={String.raw`\vec{F}_{neta} = m \cdot \vec{a}`}
            calculatorId="newton-second-law"
            definitions={newtonDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Masa", expression: String.raw`m = F / a` },
              { description: "Calcular Aceleración", expression: String.raw`a = F / m` },
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>F⃗_neta = Fuerza neta o resultante (N)</li>
            <li>m = Masa del objeto (kg)</li>
            <li>a⃗ = Aceleración (m/s²)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Tercera Ley de Newton: Principio de Acción y Reacción">
        <p>
          La tercera ley describe una propiedad fundamental de todas las fuerzas: siempre ocurren en pares.
        </p>
        <Important>
          <p>"Por cada acción, hay una reacción igual y opuesta."</p>
        </Important>
        <Concept title="Pares de Fuerzas">
          <p>Si un objeto A ejerce una fuerza sobre un objeto B (la "acción"), entonces el objeto B simultáneamente ejerce una fuerza de igual magnitud y en dirección opuesta sobre el objeto A (la "reacción").</p>
          <Formula expression={String.raw`\vec{F}_{AB} = -\vec{F}_{BA}`} />
          <p>Crucial: El par de acción-reacción siempre actúa sobre cuerpos diferentes. Por esta razón, nunca se cancelan mutuamente.</p>
          <Example>
            <p>Cuando saltas, tus pies empujan la Tierra hacia abajo (acción). La Tierra, a su vez, te empuja a ti hacia arriba (reacción), y esa es la fuerza que te acelera hacia el cielo. La fuerza sobre la Tierra es igual, pero como su masa es inmensa, su aceleración es despreciable.</p>
          </Example>
        </Concept>
      </TheorySection>

       <TheorySection title="Aplicaciones y Fuerzas Comunes">
        <Concept title="Peso y Plano Inclinado">
          <p>El peso (P) es la fuerza de gravedad que un planeta ejerce sobre un objeto. En un plano inclinado, el peso se descompone en dos componentes: una paralela al plano (que tiende a mover el objeto) y una normal o perpendicular al plano.</p>
          <Formula
            expression={String.raw`P = m \cdot g`}
            calculatorId="newton-weight"
            definitions={newtonDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Componente Paralela", expression: String.raw`F_\parallel = P \cdot \sin(\theta)` },
              { description: "Componente Normal", expression: String.raw`F_\perp = N = P \cdot \cos(\theta)` },
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>P = Peso del objeto (N)</li>
            <li>m = Masa del objeto (kg)</li>
            <li>g = Aceleración de la gravedad (9.8 m/s²)</li>
            <li>F_∥ = Componente paralela al plano inclinado (N)</li>
            <li>F_⊥ o N = Componente perpendicular o fuerza normal (N)</li>
            <li>θ = Ángulo de inclinación del plano (grados o radianes)</li>
          </ul>
        </Concept>
        <Concept title="Cálculos Inversos en el Plano Inclinado">
          <p>A menudo, conocemos las fuerzas y necesitamos determinar propiedades del sistema, como la masa del objeto o la inclinación del plano. Esto se logra despejando las variables de las ecuaciones de componentes.</p>
          <Formula
            expression={String.raw`m = \frac{N}{g \cdot \cos(\theta)}`}
            calculatorId="newton-inclined-plane"
            definitions={newtonDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Masa desde Peso", expression: String.raw`m = P / g` },
              { description: "Masa desde F. Paralela", expression: String.raw`m = \frac{F_\parallel}{g \cdot \sin(\theta)}` },
              { description: "Ángulo desde F. Paralela", expression: String.raw`\theta = \text{asin}\left(\frac{F_\parallel}{m \cdot g}\right)` },
              { description: "Ángulo desde F. Normal", expression: String.raw`\theta = \text{acos}\left(\frac{N}{m \cdot g}\right)` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>m = Masa del objeto (kg)</li>
            <li>N = Fuerza normal (N)</li>
            <li>g = Aceleración de la gravedad (9.8 m/s²)</li>
            <li>θ = Ángulo de inclinación del plano (grados o radianes)</li>
            <li>F_∥ = Componente paralela al plano inclinado (N)</li>
            <li>P = Peso del objeto (N)</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🚗 Seguridad automotriz y airbags</h3>
          <p>
            Los airbags están diseñados usando la segunda ley de Newton. En una colisión, el coche se detiene bruscamente (gran desaceleración). Sin airbag, tu cuerpo golpearía el volante con una fuerza enorme (F = ma). El airbag aumenta el tiempo de desaceleración, reduciendo la fuerza sobre tu cuerpo. Es la diferencia entre detenerte en 0.01 segundos (fuerza letal) o 0.1 segundos (fuerza tolerable).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 Propulsión de cohetes</h3>
          <p>
            Los cohetes funcionan por la tercera ley de Newton. El motor expulsa gases hacia abajo (acción) y los gases empujan el cohete hacia arriba (reacción). No necesitan "empujar contra el aire"; funcionan mejor en el vacío del espacio. El Saturn V expulsaba 15 toneladas de combustible por segundo, generando una fuerza de reacción de 34 millones de Newtons.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ Diseño de estructuras</h3>
          <p>
            Los ingenieros civiles usan las leyes de Newton para diseñar edificios y puentes. Cada viga, columna y cable debe soportar fuerzas específicas sin acelerar (equilibrio, primera ley). Calculan las fuerzas en cada componente para asegurar que la estructura permanezca en equilibrio bajo su propio peso, el peso de ocupantes, el viento y los terremotos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚽ Análisis deportivo</h3>
          <p>
            Los entrenadores usan la segunda ley para optimizar el rendimiento. En un lanzamiento de béisbol, la fuerza que el pitcher aplica a la pelota (y el tiempo de aplicación) determina su aceleración y velocidad final. Los lanzadores profesionales pueden generar fuerzas de más de 300 N en una pelota de 145 gramos, acelerándola a más de 160 km/h.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🛫 Aviación y sustentación</h3>
          <p>
            Un avión vuela porque las alas generan una fuerza de sustentación hacia arriba que equilibra el peso hacia abajo (primera ley). Para despegar, los motores deben generar suficiente empuje para acelerar el avión hasta que la sustentación supere el peso (segunda ley). Un Boeing 747 necesita alcanzar unos 290 km/h para generar suficiente sustentación.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏋️ Levantamiento de pesas</h3>
          <p>
            Cuando levantas una pesa, aplicas una fuerza hacia arriba mayor que el peso de la pesa, causando una aceleración hacia arriba (segunda ley). La pesa también te empuja hacia abajo con la misma fuerza (tercera ley), por eso sientes el esfuerzo. Los levantadores de potencia pueden generar fuerzas de más de 4,000 N al levantar 400 kg.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Newton y la revolución científica
        </h2>
        
        <div className="theory-subsection">
          <h3>Isaac Newton (1643-1727): El genio solitario</h3>
          <p>
            Isaac Newton formuló sus tres leyes del movimiento en su obra maestra "Philosophiæ Naturalis Principia Mathematica" (Principios Matemáticos de la Filosofía Natural), publicada en 1687. Este libro es considerado uno de los más importantes en la historia de la ciencia. Newton tenía solo 23 años cuando comenzó a desarrollar estas ideas durante la Gran Plaga de Londres (1665-1666), cuando la universidad cerró y él regresó a la granja familiar.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El contexto histórico</h3>
          <p>
            Antes de Newton, la física aristotélica dominaba: se creía que los objetos pesados caían más rápido y que todo movimiento requería una fuerza constante. Galileo había cuestionado estas ideas, pero fue Newton quien las unificó en un marco matemático coherente. Sus leyes no solo explicaban el movimiento en la Tierra, sino también el movimiento de los planetas, unificando la física terrestre y celeste por primera vez.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La rivalidad con Hooke</h3>
          <p>
            Robert Hooke, contemporáneo de Newton, afirmó que había sugerido la ley del inverso del cuadrado para la gravedad antes que Newton. Esto llevó a una amarga disputa. Newton retrasó la publicación de los Principia durante años debido a esta controversia. Finalmente, el astrónomo Edmund Halley convenció a Newton de publicar y financió la impresión del libro.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El impacto duradero</h3>
          <p>
            Las leyes de Newton dominaron la física durante más de 200 años. Permitieron predecir eclipses, calcular órbitas planetarias, diseñar máquinas y entender el movimiento en general. Solo a principios del siglo XX, con Einstein y la mecánica cuántica, se descubrió que las leyes de Newton son aproximaciones (muy buenas) que fallan a velocidades cercanas a la luz o a escalas atómicas. Pero para el mundo cotidiano, siguen siendo perfectamente válidas.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>🍎 La manzana que cambió el mundo</h3>
          <p>
            La historia de la manzana cayendo sobre la cabeza de Newton es parcialmente cierta. Newton mismo contó que vio caer una manzana en el jardín de su madre y se preguntó: "¿Por qué cae hacia abajo?" Esta simple observación lo llevó a desarrollar la ley de gravitación universal. Pero la manzana no le golpeó la cabeza; esa parte es un mito añadido posteriormente para hacer la historia más dramática.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚂 El truco del mantel</h3>
          <p>
            Puedes quitar un mantel de una mesa sin tirar los platos al suelo si lo haces muy rápido. Esto demuestra la primera ley de Newton: los platos tienen inercia y tienden a permanecer en reposo. Si el mantel se mueve tan rápido que la fricción no tiene tiempo de acelerar significativamente los platos, estos se quedan donde están. Es física pura convertida en truco de magia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏃 Correr en el espacio</h3>
          <p>
            En la Estación Espacial Internacional, los astronautas no pueden simplemente "correr" porque no hay gravedad que los empuje contra el suelo. Usan cintas de correr con arneses elásticos que los tiran hacia la cinta, simulando el peso. Sin esta fuerza hacia abajo, no habría fuerza normal, y sin fuerza normal, no habría fricción para impulsarse. Es un ejemplo perfecto de cómo las tres leyes trabajan juntas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎱 El récord de fuerza G</h3>
          <p>
            El piloto de pruebas John Stapp soportó 46.2 G en un trineo cohete en 1954 (46 veces su peso). Según la segunda ley, su cuerpo experimentó una fuerza de 46 × 80 kg × 9.8 m/s² ≈ 36,000 N. Sobrevivió gracias a un arnés especialmente diseñado que distribuyó la fuerza. Este experimento mejoró dramáticamente la seguridad en aviación y automovilismo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 El cohete más potente</h3>
          <p>
            El Saturn V, que llevó al hombre a la Luna, generaba 34 millones de Newtons de empuje. Según la tercera ley, los gases expulsados empujaban el cohete con la misma fuerza hacia arriba. A pesar de esta fuerza colosal, el cohete aceleraba lentamente al principio porque su masa era de 3,000 toneladas. A medida que quemaba combustible y perdía masa, la aceleración aumentaba (segunda ley: a = F/m).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦅 El águila y la serpiente</h3>
          <p>
            Cuando un águila atrapa una serpiente en vuelo, ambos experimentan la misma fuerza (tercera ley). El águila tira de la serpiente hacia arriba, y la serpiente tira del águila hacia abajo con la misma fuerza. Pero el águila tiene mucha más masa, por lo que su aceleración es menor (segunda ley). El águila puede controlar el movimiento porque puede generar sustentación adicional con sus alas.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <p>
          Las tres Leyes de Newton son los fundamentos de la mecánica clásica y explican todo el movimiento en nuestro mundo cotidiano.
        </p>
        <ul>
          <li>Primera Ley (Inercia): Un objeto mantiene su estado de movimiento a menos que una fuerza neta actúe sobre él. Si ΣF = 0, entonces a = 0.</li>
          <li>Segunda Ley (F = ma): La fuerza neta causa aceleración proporcional a la masa. Es la ley más poderosa y cuantitativa de la dinámica.</li>
          <li>Tercera Ley (Acción-Reacción): Toda fuerza tiene una fuerza igual y opuesta. Los pares acción-reacción actúan sobre cuerpos diferentes y nunca se cancelan.</li>
        </ul>
        <p>
          Estas leyes permiten analizar y predecir el movimiento de objetos desde una pelota hasta un cohete espacial. Son válidas para velocidades mucho menores que la luz y objetos mucho mayores que átomos. Aunque fueron formuladas hace más de 300 años, siguen siendo la base de la ingeniería moderna y la física aplicada.
        </p>
      </div>
    </>
  );
};

export default NewtonTheory;
