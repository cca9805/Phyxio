import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as equilibrioDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Equilibrio",
  descripcion: "Condiciones de equilibrio traslacional y rotacional",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const EquilibrioTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Equilibrio y la Primera Ley de Newton">
        <Concept title="Definición de Equilibrio">
          <p>
            El concepto de equilibrio es la aplicación directa de la Primera Ley de Newton, también conocida como la Ley de la Inercia. Esta ley postula que un objeto no cambiará su estado de movimiento a menos que una fuerza neta externa actúe sobre él.
          </p>
          <Important>
            <p>Un objeto está en equilibrio cuando la suma vectorial de todas las fuerzas que actúan sobre él es cero. Esto implica que el objeto está en reposo (equilibrio estático) o se mueve a una velocidad constante (equilibrio dinámico).</p>
          </Important>
          <Formula 
            expression={String.raw`\sum \vec{F} = 0 \implies \vec{a} = 0`}
            calculatorId="equilibrio-definicion"
            definitions={equilibrioDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>ΣF = Suma vectorial de todas las fuerzas (N)</li>
            <li>a = Aceleración (m/s²)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Condiciones de Equilibrio">
        <p>
          Para que un cuerpo extenso esté en equilibrio total, debe satisfacer dos condiciones simultáneamente: una para el movimiento de traslación y otra para el movimiento de rotación.
        </p>
        <Concept title="1. Equilibrio Traslacional">
          <p>La suma de todas las fuerzas externas debe ser cero. Esto asegura que el centro de masa del objeto no se acelera. Se descompone en los ejes X e Y:</p>
          <Formula 
            expression={String.raw`\sum F_x = 0 \quad \text{y} \quad \sum F_y = 0`}
            calculatorId="equilibrio-traslacional"
            definitions={equilibrioDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>ΣF_x = Suma de fuerzas en el eje X (N)</li>
            <li>ΣF_y = Suma de fuerzas en el eje Y (N)</li>
          </ul>
          
           <Example>
            <p>Un semáforo colgado de cables está en equilibrio traslacional. La tensión de los cables hacia arriba y hacia los lados se cancela exactamente con el peso del semáforo hacia abajo.</p>
          </Example>
        </Concept>
        
        <Concept title="2. Equilibrio Rotacional">
          <p>La suma de todos los momentos de fuerza (torques) alrededor de cualquier punto debe ser cero. Esto asegura que el objeto no rota o que rota a una velocidad angular constante.</p>
           <Formula 
            expression={String.raw`\sum \tau = 0`}
            calculatorId="equilibrio-rotacional-suma"
            definitions={equilibrioDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>Στ = Suma de todos los torques o momentos de fuerza (N·m)</li>
          </ul>
          
          <p>Esta condición es crucial para entender cómo funcionan las palancas, las balanzas y por qué los objetos no se vuelcan.</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Momento de Fuerza (Torque)">
        <Concept title="Definición del Torque">
          <p>
            El momento de fuerza, o torque (τ), es la capacidad de una fuerza para provocar una rotación alrededor de un eje o punto de pivote (fulcro). No es solo la fuerza, sino dónde y cómo se aplica.
          </p>
          <Important>
            <p>El torque depende de la magnitud de la fuerza, la distancia desde el punto de giro y el ángulo de aplicación.</p>
          </Important>
          <Formula
            expression={String.raw`\tau = r \cdot F \cdot \sin(\theta)`}
            calculatorId="torque-concepts"
            definitions={equilibrioDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Fuerza", expression: String.raw`F = \frac{\tau}{r \cdot \sin(\theta)}` },
              { description: "Calcular Distancia", expression: String.raw`r = \frac{\tau}{F \cdot \sin(\theta)}` },
              { description: "Calcular Ángulo", expression: String.raw`\theta = \text{asin}\left(\frac{\tau}{r \cdot F}\right)` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>τ = Torque o momento de fuerza (N·m)</li>
            <li>r = Distancia desde el eje de rotación hasta el punto de aplicación de la fuerza (m)</li>
            <li>F = Magnitud de la fuerza aplicada (N)</li>
            <li>θ = Ángulo entre el vector de posición y el vector de fuerza (grados o radianes)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicación: La Palanca">
        <p>
          El ejemplo más clásico de equilibrio rotacional es la palanca. Para que una palanca (como un balancín) esté equilibrada, el torque que tiende a girarla en un sentido debe ser igual al torque que tiende a girarla en el sentido opuesto.
        </p>
        <Concept title="Condición de Equilibrio de la Palanca">
          <p>Si dos fuerzas, F₁ (esfuerzo) y F₂ (resistencia), se aplican perpendicularmente a distancias r₁ y r₂ del fulcro, la condición de equilibrio es:</p>
          <Formula
            expression={String.raw`F_1 \cdot r_1 = F_2 \cdot r_2`}
            calculatorId="rotational-equilibrium"
            definitions={equilibrioDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Distancia r₁", expression: String.raw`r_1 = \frac{F_2 \cdot r_2}{F_1}` },
              { description: "Calcular Fuerza F₂", expression: String.raw`F_2 = \frac{F_1 \cdot r_1}{r_2}` },
              { description: "Calcular Distancia r₂", expression: String.raw`r_2 = \frac{F_1 \cdot r_1}{F_2}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>F₁ = Fuerza de esfuerzo (N)</li>
            <li>r₁ = Distancia de F₁ al fulcro (m)</li>
            <li>F₂ = Fuerza de resistencia (N)</li>
            <li>r₂ = Distancia de F₂ al fulcro (m)</li>
          </ul>
          
          <Example>
            <p>En un balancín, una persona más pesada (mayor F) debe sentarse más cerca del centro (menor r) para equilibrar a una persona más ligera sentada más lejos del centro.</p>
          </Example>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🏗️ Construcción de rascacielos</h3>
          <p>
            Los rascacielos deben estar en equilibrio perfecto bajo su propio peso, el peso de los ocupantes, el viento y los terremotos. Los ingenieros calculan las fuerzas en cada viga y columna para asegurar equilibrio traslacional. También calculan los torques para evitar que el edificio se vuelque. El Burj Khalifa (828 m) tiene un sistema de contrapesos y una estructura en Y que distribuye las fuerzas para mantener el equilibrio.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚖️ Balanzas de precisión</h3>
          <p>
            Las balanzas de brazos iguales funcionan por equilibrio rotacional. Cuando los pesos en ambos lados son iguales, los torques se cancelan y la balanza está horizontal. Las balanzas analíticas de laboratorio pueden medir diferencias de 0.0001 gramos detectando mínimos desequilibrios en el torque. Son esenciales en química, farmacia y joyería.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌉 Puentes colgantes</h3>
          <p>
            Los puentes colgantes como el Golden Gate están en equilibrio bajo tensiones enormes. Los cables principales soportan el peso del puente y el tráfico, creando fuerzas de tensión de miles de toneladas. Las torres deben estar en equilibrio bajo estas fuerzas verticales y las fuerzas horizontales del viento. Un error en el cálculo del equilibrio puede causar el colapso del puente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚁 Helicópteros en vuelo estacionario</h3>
          <p>
            Un helicóptero en vuelo estacionario está en equilibrio dinámico perfecto. La sustentación de las aspas hacia arriba equilibra exactamente el peso hacia abajo. El torque del rotor principal se equilibra con el torque del rotor de cola. Cualquier desequilibrio causa movimiento: más sustentación y sube, menos y baja. Los pilotos ajustan constantemente para mantener el equilibrio.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎪 Equilibristas y funambulistas</h3>
          <p>
            Los equilibristas que caminan sobre cuerdas flojas usan una vara larga para mantener el equilibrio. La vara aumenta el momento de inercia, haciendo más difícil que el torque de su peso los haga rotar y caer. Constantemente ajustan su posición para mantener su centro de masa directamente sobre la cuerda, asegurando que el torque neto sea cero.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏋️ Levantamiento de pesas y biomecánica</h3>
          <p>
            Al levantar una pesa, tu cuerpo debe estar en equilibrio. Los músculos generan torques alrededor de las articulaciones para equilibrar el torque del peso. Por ejemplo, al hacer una sentadilla, el torque del peso de la barra alrededor de tu cadera debe equilibrarse con el torque de tus músculos de la espalda y piernas. Los entrenadores analizan estos torques para prevenir lesiones.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De Arquímedes a la mecánica moderna
        </h2>
        
        <div className="theory-subsection">
          <h3>Arquímedes (287-212 a.C.): El padre de la estática</h3>
          <p>
            Arquímedes fue el primero en estudiar sistemáticamente el equilibrio y las palancas. Su famosa frase "Dadme un punto de apoyo y moveré el mundo" ilustra su comprensión del principio de la palanca. Demostró matemáticamente que una fuerza pequeña aplicada a gran distancia del fulcro puede equilibrar una fuerza grande aplicada cerca del fulcro. Sus trabajos sobre centros de gravedad y equilibrio fueron revolucionarios.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Leonardo da Vinci (1452-1519): Aplicaciones prácticas</h3>
          <p>
            Leonardo da Vinci estudió extensamente el equilibrio en sus diseños de máquinas y estructuras. Sus cuadernos contienen diagramas detallados de palancas, poleas y sistemas en equilibrio. Aunque no formuló leyes matemáticas, su comprensión intuitiva del equilibrio fue notable. Diseñó grúas, puentes y máquinas voladoras aplicando principios de equilibrio.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Isaac Newton (1643-1727): Formalización matemática</h3>
          <p>
            Newton formalizó el concepto de equilibrio en su Primera Ley del Movimiento. Estableció que un objeto en equilibrio (ΣF = 0) permanece en reposo o en movimiento rectilíneo uniforme. Esta ley unificó el equilibrio estático (objeto en reposo) y el equilibrio dinámico (objeto moviéndose a velocidad constante) bajo un mismo principio matemático.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Leonhard Euler (1707-1783): Equilibrio rotacional</h3>
          <p>
            Euler extendió el concepto de equilibrio a la rotación. Formuló las ecuaciones de equilibrio rotacional (Στ = 0) y desarrolló la teoría de momentos de inercia. Sus trabajos permitieron analizar el equilibrio de cuerpos rígidos complejos, no solo de puntos materiales. Esto fue fundamental para la ingeniería estructural y la mecánica de máquinas.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>⚖️ La corona de Hierón II</h3>
          <p>
            Según la leyenda, el rey Hierón II de Siracusa pidió a Arquímedes verificar si su corona era de oro puro o contenía plata. Arquímedes usó una balanza y el principio de flotación para resolver el problema sin dañar la corona. Comparó el peso de la corona en aire y en agua con el de un bloque de oro puro del mismo peso. Esta historia ilustra el uso práctico del equilibrio en la antigüedad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🗼 La Torre de Pisa: Equilibrio precario</h3>
          <p>
            La Torre de Pisa se inclina porque el suelo bajo un lado es más blando. El centro de masa de la torre está desplazado del centro de la base, creando un torque que la inclina más. Los ingenieros han estabilizado la torre extrayendo tierra del lado alto, moviendo el centro de masa de vuelta sobre la base. Si el centro de masa se desplaza demasiado, el torque será tan grande que la torre colapsará.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎪 Philippe Petit y las Torres Gemelas</h3>
          <p>
            En 1974, Philippe Petit caminó sobre una cuerda floja entre las Torres Gemelas de Nueva York a 417 metros de altura. Usó una vara de equilibrio de 8 metros y 25 kg. La vara aumentó su momento de inercia, dándole más tiempo para reaccionar a desequilibrios. Caminó durante 45 minutos, demostrando un control extraordinario del equilibrio rotacional de su cuerpo.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <p>
          El equilibrio es la aplicación directa de la Primera Ley de Newton. Un objeto está en equilibrio cuando la suma de todas las fuerzas es cero (ΣF = 0), lo que implica aceleración cero.
        </p>
        <p>
          Para equilibrio completo de un cuerpo rígido, se requieren dos condiciones: equilibrio traslacional (ΣFx = 0 y ΣFy = 0) y equilibrio rotacional (Στ = 0). El torque (τ = r·F·sin θ) mide la capacidad de una fuerza para causar rotación.
        </p>
        <p>
          Las palancas son el ejemplo clásico de equilibrio rotacional: F₁·r₁ = F₂·r₂. Este principio es fundamental en ingeniería estructural, diseño de máquinas, biomecánica y muchas aplicaciones cotidianas desde balanzas hasta rascacielos.
        </p>
      </div>
    </>
  );
};

export default EquilibrioTheory;
