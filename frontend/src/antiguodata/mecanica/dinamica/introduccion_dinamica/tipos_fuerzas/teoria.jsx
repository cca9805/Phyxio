import { TheorySection, Concept } from '../../../../../components/TheoryV2';

// Metadatos del tema
export const metadata = {
  titulo: "Tipos de Fuerzas",
  descripcion: "Clasificación y ejemplos de las fuerzas más comunes",
  isTheoryOnly: true,
  educationLevel: 'ESO',
  levels: ['ESO', 'BACHILLERATO']
};

const TiposFuerzasTheory = () => {
  return (
    <>
      <TheorySection title="Clasificación de las Fuerzas">
        <p>
          Las fuerzas se pueden clasificar de diferentes maneras. La clasificación más fundamental es según el tipo de contacto entre los objetos que interactúan.
        </p>
      </TheorySection>

      <TheorySection title="Fuerzas de Contacto">
        <p>
          Son fuerzas que requieren que los objetos estén en contacto físico directo. Cuando empujas una puerta, tus manos tocan la puerta.
        </p>

        <Concept title="1. Fuerza Normal (N)">
          <p>
            La fuerza normal es la fuerza perpendicular que una superficie ejerce sobre un objeto que está apoyado en ella. "Normal" significa perpendicular, no "común".
          </p>
          <ul>
            <li>Un libro sobre una mesa: la mesa empuja el libro hacia arriba</li>
            <li>Tú de pie en el suelo: el suelo te empuja hacia arriba</li>
            <li>Un coche en una rampa: la rampa empuja perpendicular a su superficie</li>
          </ul>
          <p>
            La fuerza normal evita que los objetos atraviesen las superficies. Sin ella, caeríamos a través del suelo.
          </p>
        </Concept>

        <Concept title="2. Fuerza de Fricción (f)">
          <p>
            La fricción es una fuerza que se opone al movimiento relativo entre dos superficies en contacto. Siempre actúa paralela a la superficie y en dirección opuesta al movimiento.
          </p>
          <ul>
            <li>Fricción estática: evita que un objeto comience a moverse</li>
            <li>Fricción cinética: se opone al movimiento de un objeto que ya se está moviendo</li>
          </ul>
          <p>
            La fricción depende de la naturaleza de las superficies (rugosas o lisas) y de la fuerza normal. Sin fricción, no podríamos caminar ni los coches podrían frenar.
          </p>
        </Concept>

        <Concept title="3. Tensión (T)">
          <p>
            La tensión es la fuerza que se transmite a través de una cuerda, cable o cadena cuando se tira de ella. La cuerda "tira" de los objetos en sus extremos.
          </p>
          <ul>
            <li>Una cuerda que sostiene una lámpara del techo</li>
            <li>El cable de un ascensor</li>
            <li>La cadena de una bicicleta transmitiendo fuerza</li>
          </ul>
          <p>
            La tensión siempre actúa a lo largo de la cuerda y "tira" hacia el centro de la cuerda desde ambos extremos.
          </p>
        </Concept>

        <Concept title="4. Fuerza Elástica (Fe)">
          <p>
            Es la fuerza que ejerce un objeto elástico (resorte, banda elástica) cuando se estira o comprime. Tiende a devolver el objeto a su longitud natural.
          </p>
          <ul>
            <li>Un resorte estirado tira hacia adentro</li>
            <li>Un resorte comprimido empuja hacia afuera</li>
            <li>Una banda elástica estirada tira de vuelta</li>
          </ul>
          <p>
            La fuerza elástica es proporcional a la deformación (Ley de Hooke): cuanto más estiras, más fuerza hace.
          </p>
        </Concept>

        <Concept title="5. Fuerza Aplicada (Fa)">
          <p>
            Es cualquier fuerza que una persona u objeto ejerce directamente sobre otro mediante contacto físico.
          </p>
          <ul>
            <li>Empujar una caja</li>
            <li>Tirar de una maleta</li>
            <li>Golpear una pelota con un bate</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Fuerzas a Distancia (Fuerzas de Campo)">
        <p>
          Son fuerzas que actúan sin necesidad de contacto físico directo. Actúan a través del espacio mediante campos de fuerza.
        </p>

        <Concept title="1. Fuerza Gravitatoria (Fg o Peso)">
          <p>
            La gravedad es la fuerza de atracción entre objetos con masa. En la Tierra, la gravedad nos atrae hacia el centro del planeta.
          </p>
          <ul>
            <li>El peso de los objetos (W = mg)</li>
            <li>La Luna orbitando la Tierra</li>
            <li>Los planetas orbitando el Sol</li>
            <li>Una manzana cayendo de un árbol</li>
          </ul>
          <p>
            La gravedad siempre es atractiva (nunca repulsiva) y actúa sobre toda la masa del objeto. Es la fuerza más débil de las fundamentales, pero domina a gran escala porque es siempre atractiva y de largo alcance.
          </p>
        </Concept>

        <Concept title="2. Fuerza Electromagnética">
          <p>
            Incluye las fuerzas eléctricas (entre cargas) y magnéticas (entre imanes o corrientes). Es mucho más fuerte que la gravedad.
          </p>
          <ul>
            <li>Fuerza eléctrica: atracción entre cargas opuestas, repulsión entre cargas iguales</li>
            <li>Fuerza magnética: atracción/repulsión entre imanes</li>
            <li>Un imán atrayendo clips metálicos</li>
            <li>El cabello levantándose por electricidad estática</li>
          </ul>
          <p>
            Casi todas las fuerzas de contacto (normal, fricción, tensión) son en realidad manifestaciones de fuerzas electromagnéticas a nivel atómico.
          </p>
        </Concept>

        <Concept title="3. Fuerza Nuclear Fuerte">
          <p>
            Mantiene unidos los protones y neutrones en el núcleo atómico. Es la fuerza más intensa de la naturaleza, pero solo actúa a distancias extremadamente cortas (dentro del núcleo).
          </p>
          <p>
            Sin esta fuerza, los núcleos atómicos se desintegrarían porque los protones (con carga positiva) se repelerían eléctricamente.
          </p>
        </Concept>

        <Concept title="4. Fuerza Nuclear Débil">
          <p>
            Responsable de ciertos tipos de desintegración radiactiva. Es más débil que la fuerza fuerte y electromagnética, pero más fuerte que la gravedad. También actúa solo a distancias muy cortas.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Las Cuatro Fuerzas Fundamentales">
        <p>
          Todas las fuerzas en el universo se pueden reducir a cuatro fuerzas fundamentales:
        </p>
        <ul>
          <li>Gravitatoria: atracción entre masas</li>
          <li>Electromagnética: interacción entre cargas y corrientes</li>
          <li>Nuclear fuerte: mantiene unidos los núcleos atómicos</li>
          <li>Nuclear débil: responsable de ciertos decaimientos radiactivos</li>
        </ul>
        <p>
          Todas las demás fuerzas (fricción, normal, tensión, elástica) son manifestaciones de estas cuatro fuerzas fundamentales, principalmente de la electromagnética a nivel atómico.
        </p>
      </TheorySection>

      <TheorySection title="Fuerzas Especiales en Dinámica">
        <Concept title="Fuerza Centrípeta">
          <p>
            No es un nuevo tipo de fuerza, sino el nombre que damos a cualquier fuerza que hace que un objeto se mueva en círculo. Siempre apunta hacia el centro del círculo.
          </p>
          <ul>
            <li>La gravedad mantiene la Luna en órbita (fuerza centrípeta)</li>
            <li>La tensión de una cuerda hace girar una piedra (fuerza centrípeta)</li>
            <li>La fricción mantiene un coche en una curva (fuerza centrípeta)</li>
          </ul>
        </Concept>

        <Concept title="Resistencia del Aire (Arrastre)">
          <p>
            Es un tipo especial de fricción que actúa sobre objetos que se mueven a través del aire (o cualquier fluido). Se opone al movimiento y aumenta con la velocidad.
          </p>
          <ul>
            <li>Un paracaídas usa la resistencia del aire para frenar la caída</li>
            <li>Los coches tienen formas aerodinámicas para reducir el arrastre</li>
            <li>Una pluma cae más lento que una piedra por la resistencia del aire</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🚗 Neumáticos y fricción</h3>
          <p>
            Los neumáticos están diseñados específicamente para maximizar la fricción con el asfalto. Los dibujos (surcos) evacuan el agua para mantener el contacto. En carreras, se usan neumáticos "slick" (lisos) en seco para máxima fricción, y con surcos profundos en mojado. La fricción entre neumático y asfalto es lo que permite acelerar, frenar y girar.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ Cables de acero en construcción</h3>
          <p>
            Los puentes colgantes usan cables de acero que soportan tensiones enormes. El Golden Gate Bridge tiene cables principales de 92 cm de diámetro que soportan una tensión de 63,500 toneladas cada uno. Los ingenieros calculan exactamente la tensión en cada cable para asegurar que el puente sea seguro.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🛰️ Satélites en órbita</h3>
          <p>
            Los satélites permanecen en órbita porque la gravedad actúa como fuerza centrípeta. La gravedad los "tira" constantemente hacia la Tierra, pero su velocidad lateral hace que "caigan alrededor" del planeta en lugar de caer hacia él. Es un equilibrio perfecto entre gravedad y velocidad orbital.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏃 Zapatillas deportivas</h3>
          <p>
            Las suelas de las zapatillas están diseñadas para optimizar la fricción según el deporte. Las zapatillas de running tienen surcos para tracción en diferentes superficies. Las de baloncesto tienen suelas planas para máxima fricción en canchas. Las de fútbol tienen tacos para penetrar el césped y aumentar la fricción.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎢 Montañas rusas y fuerza normal</h3>
          <p>
            En una montaña rusa, la fuerza normal varía constantemente. En la parte baja de un loop, sientes una fuerza normal muy grande (te sientes pesado). En la cima, la fuerza normal es pequeña o cero (sientes ingravidez). Los diseñadores calculan estas fuerzas para que sean emocionantes pero seguras.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔧 Herramientas y fricción</h3>
          <p>
            Las herramientas como alicates, llaves y destornilladores tienen mangos con texturas rugosas para aumentar la fricción con las manos. Sin suficiente fricción, las herramientas se resbalarían. Los guantes de trabajo también aumentan la fricción para un mejor agarre.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Descubriendo las fuerzas
        </h2>
        
        <div className="theory-subsection">
          <h3>La gravedad: De Aristóteles a Newton</h3>
          <p>
            Aristóteles creía que los objetos pesados caían más rápido porque "buscaban su lugar natural". Galileo demostró que todos los objetos caen con la misma aceleración. Newton (1687) formuló la ley de gravitación universal, mostrando que la misma fuerza que hace caer una manzana mantiene la Luna en órbita.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El electromagnetismo: Unificando fuerzas</h3>
          <p>
            Durante siglos, la electricidad y el magnetismo se consideraron fenómenos separados. En el siglo XIX, científicos como Oersted, Faraday y Ampère descubrieron conexiones entre ellos. Maxwell (1865) unificó ambos en la teoría electromagnética, mostrando que son manifestaciones de una sola fuerza fundamental.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Las fuerzas nucleares: El siglo XX</h3>
          <p>
            Las fuerzas nucleares se descubrieron en el siglo XX al estudiar la radiactividad y la estructura atómica. Rutherford descubrió el núcleo atómico (1911), pero no se entendía qué mantenía unidos a los protones. Yukawa propuso la fuerza nuclear fuerte (1935), y la fuerza débil se identificó estudiando el decaimiento beta.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La búsqueda de la unificación</h3>
          <p>
            Los físicos han logrado unificar la fuerza electromagnética y la débil en la "fuerza electrodébil" (1970s). El objetivo actual es la "Teoría del Todo" que unifique las cuatro fuerzas fundamentales. La gravedad cuántica sigue siendo el mayor desafío de la física teórica moderna.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>🧲 Los imanes y la brújula</h3>
          <p>
            Los chinos descubrieron el magnetismo hace más de 2,000 años y crearon las primeras brújulas. Durante siglos, nadie entendía cómo funcionaban. Ahora sabemos que la Tierra es un imán gigante, y las brújulas se alinean con su campo magnético. Curiosamente, el "polo norte magnético" está cerca del polo sur geográfico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦎 Los geckos y la fuerza de Van der Waals</h3>
          <p>
            Los geckos pueden caminar por paredes y techos gracias a fuerzas electromagnéticas débiles llamadas fuerzas de Van der Waals. Sus patas tienen millones de pelos microscópicos que crean suficiente contacto para generar una fuerza de adhesión. Un gecko puede soportar su peso con un solo dedo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ El rayo: Electricidad natural</h3>
          <p>
            Un rayo es una descarga eléctrica masiva entre nubes o entre nube y tierra. La fuerza eléctrica en un rayo puede alcanzar 1 billón de voltios y temperaturas de 30,000°C (cinco veces más caliente que la superficie del Sol). Benjamin Franklin demostró que los rayos son electricidad con su famoso experimento de la cometa en 1752.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏔️ La fricción salva vidas en montañismo</h3>
          <p>
            Los escaladores confían su vida a la fricción. Las cuerdas de escalada funcionan por fricción en los mosquetones. Los pies se adhieren a la roca por fricción. Incluso el magnesio que usan en las manos es para aumentar la fricción eliminando la humedad. Sin fricción, la escalada sería imposible.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌌 La gravedad moldea el universo</h3>
          <p>
            Aunque es la más débil de las cuatro fuerzas fundamentales, la gravedad domina a escala cósmica. Forma galaxias, mantiene estrellas unidas, crea agujeros negros. La gravedad del Sol mantiene a la Tierra en órbita a 150 millones de kilómetros de distancia. Es una fuerza débil pero de alcance infinito.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 La fuerza de un impacto de meteorito</h3>
          <p>
            El meteorito que extinguió a los dinosaurios hace 65 millones de años impactó con una fuerza equivalente a 10 mil millones de bombas atómicas. La fuerza del impacto creó un cráter de 180 km de diámetro y lanzó tanto polvo a la atmósfera que bloqueó el sol durante años. Es un recordatorio del poder destructivo de las fuerzas a gran escala.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <p>
          Las fuerzas se clasifican en fuerzas de contacto (normal, fricción, tensión, elástica) que requieren contacto físico, y fuerzas a distancia (gravitatoria, electromagnética, nucleares) que actúan a través del espacio.
        </p>
        <p>
          Todas las fuerzas del universo se reducen a cuatro fuerzas fundamentales: gravitatoria, electromagnética, nuclear fuerte y nuclear débil. Las fuerzas de contacto son manifestaciones de la fuerza electromagnética a nivel atómico.
        </p>
        <p>
          Cada tipo de fuerza tiene características y aplicaciones específicas. Entender los diferentes tipos de fuerzas es esencial para analizar cualquier situación física, desde empujar una caja hasta diseñar un puente o entender el movimiento de los planetas.
        </p>
      </div>
    </>
  );
};

export default TiposFuerzasTheory;
