import { TheorySection, Concept } from '../../../../../components/TheoryV2';

// Metadatos del tema
export const metadata = {
  titulo: "¿Qué es la Dinámica?",
  descripcion: "Introducción al estudio de las causas del movimiento",
  isTheoryOnly: true,
  educationLevel: 'ESO',
  levels: ['ESO', 'BACHILLERATO']
};

const QueEsDinamicaTheory = () => {
  return (
    <>
      <TheorySection title="¿Qué es la Dinámica?">
        <p>
          La dinámica es la rama de la física que estudia las causas del movimiento. Mientras que la cinemática describe cómo se mueven los objetos (posición, velocidad, aceleración), la dinámica explica por qué se mueven de esa manera.
        </p>
        <p>
          La pregunta fundamental de la dinámica es: ¿Qué hace que un objeto cambie su estado de movimiento? La respuesta es: las fuerzas.
        </p>
      </TheorySection>

      <TheorySection title="Diferencia entre Cinemática y Dinámica">
        <Concept title="Cinemática: El 'Cómo'">
          <p>
            La cinemática responde preguntas como:
          </p>
          <ul>
            <li>¿Qué distancia recorrió el coche?</li>
            <li>¿A qué velocidad se mueve?</li>
            <li>¿Cuánto tarda en detenerse?</li>
            <li>¿Cuál es su aceleración?</li>
          </ul>
          <p>
            La cinemática describe el movimiento sin preocuparse por sus causas. Es como ver una película del movimiento sin saber qué lo provocó.
          </p>
        </Concept>

        <Concept title="Dinámica: El 'Por Qué'">
          <p>
            La dinámica responde preguntas como:
          </p>
          <ul>
            <li>¿Por qué el coche acelera?</li>
            <li>¿Qué fuerza lo hace frenar?</li>
            <li>¿Por qué es más difícil mover un camión que una bicicleta?</li>
            <li>¿Qué mantiene a los planetas en órbita?</li>
          </ul>
          <p>
            La dinámica estudia las fuerzas que causan el movimiento. Es entender el guion detrás de la película.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="El Concepto Central: La Fuerza">
        <p>
          El concepto fundamental de la dinámica es la fuerza. Una fuerza es una interacción que puede cambiar el estado de movimiento de un objeto.
        </p>
        <p>
          Las fuerzas pueden:
        </p>
        <ul>
          <li>Poner en movimiento un objeto en reposo</li>
          <li>Detener un objeto en movimiento</li>
          <li>Cambiar la dirección del movimiento</li>
          <li>Cambiar la rapidez del movimiento</li>
          <li>Deformar un objeto</li>
        </ul>
      </TheorySection>

      <TheorySection title="Ejemplos Cotidianos de Dinámica">
        <Concept title="Empujar un carrito de supermercado">
          <p>
            Cuando empujas un carrito, aplicas una fuerza. Si el carrito está vacío (poca masa), acelera rápidamente. Si está lleno (mucha masa), acelera más lentamente con la misma fuerza. Esto es dinámica en acción.
          </p>
        </Concept>

        <Concept title="Frenar en bicicleta">
          <p>
            Cuando aprietas los frenos, la fricción entre las pastillas y las ruedas crea una fuerza que se opone al movimiento. Esta fuerza causa una aceleración negativa (desaceleración) que te detiene.
          </p>
        </Concept>

        <Concept title="Lanzar una pelota">
          <p>
            Tu mano aplica una fuerza sobre la pelota durante el lanzamiento, acelerándola. Una vez que la pelota sale de tu mano, la gravedad (otra fuerza) la hace caer, y la resistencia del aire (otra fuerza más) la frena.
          </p>
        </Concept>

        <Concept title="Estar de pie">
          <p>
            Incluso cuando estás quieto, la dinámica está presente. La gravedad te empuja hacia abajo, pero el suelo te empuja hacia arriba con la misma fuerza. Estas fuerzas están en equilibrio, por eso no te mueves.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Las Leyes de Newton: El Fundamento de la Dinámica">
        <p>
          La dinámica clásica se basa en tres leyes fundamentales formuladas por Isaac Newton en el siglo XVII:
        </p>
        <ul>
          <li>Primera Ley (Inercia): Un objeto mantiene su estado de movimiento a menos que una fuerza actúe sobre él</li>
          <li>Segunda Ley (F = ma): La fuerza causa aceleración proporcional a la masa</li>
          <li>Tercera Ley (Acción-Reacción): Toda fuerza tiene una fuerza igual y opuesta</li>
        </ul>
        <p>
          Estas leyes, que estudiaremos en detalle más adelante, son la base para entender todo el movimiento en nuestro universo cotidiano.
        </p>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🚗 Ingeniería automotriz</h3>
          <p>
            Los ingenieros usan la dinámica para diseñar sistemas de frenado, suspensión y seguridad. Calculan las fuerzas en colisiones para diseñar airbags y zonas de deformación que protejan a los pasajeros. Un coche moderno es un laboratorio de dinámica en movimiento.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ Construcción de edificios y puentes</h3>
          <p>
            Los arquitectos e ingenieros civiles deben entender las fuerzas que actúan sobre estructuras: el peso, el viento, los terremotos. La dinámica estructural asegura que los edificios y puentes soporten estas fuerzas sin colapsar.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 Exploración espacial</h3>
          <p>
            Cada misión espacial es un ejercicio de dinámica. Los ingenieros calculan las fuerzas necesarias para escapar de la gravedad terrestre, las fuerzas para maniobrar en el espacio, y las fuerzas para aterrizar en otros planetas. Sin dinámica, no habría exploración espacial.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚽ Deportes y biomecánica</h3>
          <p>
            Los entrenadores y fisioterapeutas usan principios de dinámica para mejorar el rendimiento deportivo y prevenir lesiones. Analizan las fuerzas en las articulaciones durante un salto, un golpe o una carrera para optimizar la técnica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎢 Diseño de montañas rusas</h3>
          <p>
            Las montañas rusas son pura dinámica aplicada. Los diseñadores calculan las fuerzas G que experimentan los pasajeros en cada curva y caída, asegurando que sean emocionantes pero seguras. Demasiada fuerza puede ser peligrosa; muy poca, aburrida.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏥 Medicina y rehabilitación</h3>
          <p>
            Los médicos usan la dinámica para entender lesiones por impacto, diseñar prótesis que soporten las fuerzas del cuerpo, y crear programas de rehabilitación que fortalezcan músculos considerando las fuerzas que deben soportar.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El nacimiento de la dinámica
        </h2>
        
        <div className="theory-subsection">
          <h3>Aristóteles (384-322 a.C.): El primer intento</h3>
          <p>
            Aristóteles fue el primero en intentar explicar el movimiento de forma sistemática. Creía que los objetos pesados caían más rápido que los ligeros y que todo movimiento requería una fuerza constante. Aunque estaba equivocado, su trabajo dominó el pensamiento durante casi 2,000 años.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Galileo Galilei (1564-1642): La revolución comienza</h3>
          <p>
            Galileo desafió a Aristóteles con experimentos. Demostró que todos los objetos caen con la misma aceleración (ignorando la resistencia del aire) y que un objeto en movimiento no necesita una fuerza constante para seguir moviéndose. Estos descubrimientos prepararon el terreno para Newton.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Isaac Newton (1643-1727): La síntesis magistral</h3>
          <p>
            En 1687, Newton publicó "Philosophiæ Naturalis Principia Mathematica" (Principios Matemáticos de la Filosofía Natural), donde formuló sus tres leyes del movimiento. Este libro revolucionó la física y estableció la dinámica como ciencia exacta. Newton no solo explicó el movimiento en la Tierra, sino también el movimiento de los planetas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El legado de Newton</h3>
          <p>
            Las leyes de Newton funcionaron perfectamente durante más de 200 años, explicando desde el movimiento de proyectiles hasta las órbitas planetarias. Solo a principios del siglo XX, con Einstein y la mecánica cuántica, se descubrió que las leyes de Newton son aproximaciones (muy buenas) que fallan a velocidades cercanas a la luz o a escalas atómicas.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>🍎 La manzana de Newton: ¿Mito o realidad?</h3>
          <p>
            La historia de que Newton descubrió la gravedad cuando una manzana le cayó en la cabeza es parcialmente cierta. Newton mismo contó que vio caer una manzana en el jardín de su madre y se preguntó: "¿Por qué cae hacia abajo y no hacia arriba o hacia los lados?" Esta simple pregunta lo llevó a desarrollar la ley de gravitación universal. Pero no hay evidencia de que la manzana le golpeara la cabeza.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚂 El experimento mental del tren</h3>
          <p>
            Galileo imaginó un barco moviéndose suavemente. Dentro del barco, las moscas vuelan, el agua cae verticalmente, y todo parece normal. No puedes saber si el barco se mueve o está quieto sin mirar afuera. Este experimento mental fue revolucionario: demostró que el movimiento es relativo y que las leyes de la física son las mismas en sistemas que se mueven a velocidad constante.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 La pluma y el martillo en la Luna</h3>
          <p>
            En 1971, el astronauta David Scott realizó el experimento de Galileo en la Luna. Dejó caer simultáneamente una pluma y un martillo. Sin atmósfera que cause resistencia, ambos cayeron exactamente al mismo tiempo, confirmando que la gravedad acelera todos los objetos por igual. Este simple experimento, transmitido en vivo, demostró visualmente un principio fundamental de la dinámica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏃 Correr en el espacio</h3>
          <p>
            En la Estación Espacial Internacional, los astronautas deben hacer ejercicio para mantener sus músculos y huesos fuertes. Pero sin gravedad, ¿cómo corres en una cinta? La solución: arneses elásticos que tiran del astronauta hacia la cinta, simulando el peso. Es un ejemplo perfecto de cómo la ausencia de una fuerza (gravedad) cambia completamente el movimiento.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎱 El truco de la mesa</h3>
          <p>
            Puedes quitar un mantel de una mesa sin tirar los platos al suelo si lo haces muy rápido. ¿Por qué? Por la inercia (primera ley de Newton). Los platos tienden a permanecer en reposo. Si el mantel se mueve tan rápido que la fricción no tiene tiempo de acelerar significativamente los platos, estos se quedan donde están. Es física pura convertida en truco de magia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 El cinturón de seguridad salva vidas</h3>
          <p>
            Cuando un coche frena bruscamente, el coche se detiene pero tu cuerpo quiere seguir moviéndose (inercia). Sin cinturón, seguirías hacia adelante a la velocidad original, chocando contra el parabrisas. El cinturón aplica una fuerza que te desacelera junto con el coche. Es un dispositivo simple que aprovecha las leyes de Newton para salvar millones de vidas cada año.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <p>
          La dinámica es el estudio de las causas del movimiento, centrándose en las fuerzas que hacen que los objetos cambien su estado de movimiento. Mientras la cinemática describe cómo se mueven los objetos, la dinámica explica por qué se mueven así.
        </p>
        <p>
          El concepto fundamental es la fuerza, que puede acelerar, frenar, cambiar la dirección o deformar objetos. Las tres leyes de Newton son la base de la dinámica clásica y explican el movimiento desde una pelota hasta los planetas.
        </p>
        <p>
          La dinámica tiene aplicaciones en ingeniería, medicina, deportes, construcción y exploración espacial. Entender las fuerzas y cómo afectan el movimiento es esencial para diseñar tecnología segura y eficiente.
        </p>
      </div>
    </>
  );
};

export default QueEsDinamicaTheory;
