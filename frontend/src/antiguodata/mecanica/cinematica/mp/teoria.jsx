import { TheorySection, Concept, Formula } from '../../../../components/TheoryV2';
import { definitions as mpDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "MP - Movimiento Parabólico",
  descripcion: "Movimiento de proyectiles en trayectoria parabólica",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const MpTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es el Movimiento Parabólico?">
        <p>
          El Movimiento Parabólico, también conocido como tiro de proyectil, describe el movimiento de un objeto lanzado en un campo gravitatorio uniforme, despreciando la resistencia del aire. La trayectoria resultante es una parábola.
        </p>
        <p>
          Este movimiento es una combinación de un movimiento rectilíneo uniforme (MRU) en el eje horizontal y un movimiento rectilíneo uniformemente acelerado (MRUA) en el eje vertical.
        </p>
      </TheorySection>

      <TheorySection title="Descomposición de la Velocidad">
        <p>La clave para analizar el movimiento parabólico es descomponer la velocidad inicial (v₀) en sus componentes horizontal (v₀x) y vertical (v₀y) usando el ángulo de lanzamiento (θ).</p>
        <Concept title="Componentes de la Velocidad Inicial">
          <p>La componente horizontal es constante, mientras que la vertical cambia debido a la gravedad.</p>
          <Formula
            expression={String.raw`v_{0x} = v_0 \cos(\theta)`}
            calculatorId="mp-componentes-velocidad"
            definitions={mpDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Componente Vertical", expression: String.raw`v_{0y} = v_0 \sin(\theta)` },
              { description: "Velocidad Inicial Total", expression: String.raw`v_0 = \sqrt{v_{0x}^2 + v_{0y}^2}` },
              { description: "Ángulo de Lanzamiento", expression: String.raw`\theta = \tan^{-1}\left(\frac{v_{0y}}{v_{0x}}\right)` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>v_0x = Componente horizontal de la velocidad inicial (m/s)</li>
            <li>v_0y = Componente vertical de la velocidad inicial (m/s)</li>
            <li>v_0 = Velocidad inicial total (m/s)</li>
            <li>θ = Ángulo de lanzamiento respecto a la horizontal (grados o radianes)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Parámetros Clave del Vuelo">
        <p>Para una trayectoria simétrica (punto de inicio y fin a la misma altura), podemos calcular fácilmente la altura máxima, el tiempo de vuelo y el alcance.</p>
        <Concept title="Altura Máxima (hₘₐₓ)">
          <p>Es el punto más alto de la trayectoria, donde la componente vertical de la velocidad es cero.</p>
          <Formula 
            expression={String.raw`h_{\text{max}} = \frac{v_{0y}^2}{2g}`}
            calculatorId="mp-altura-maxima"
            definitions={mpDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular v₀y desde Altura Máxima", expression: String.raw`v_{0y} = \sqrt{2gh_{\text{max}}}` },
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>h_max = Altura máxima alcanzada (m)</li>
            <li>v_0y = Componente vertical de la velocidad inicial (m/s)</li>
            <li>g = Aceleración de la gravedad (9.8 m/s²)</li>
          </ul>
        </Concept>
        <Concept title="Tiempo de Vuelo (tᵥ) y Tiempo de Subida (tₛ)">
          <p>El tiempo de subida es el tiempo para alcanzar la altura máxima, y el tiempo de vuelo es el doble (en trayectoria simétrica).</p>
          <Formula 
            expression={String.raw`t_v = \frac{2v_{0y}}{g}`}
            calculatorId="mp-tiempo-vuelo"
            definitions={mpDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Tiempo de Subida", expression: String.raw`t_s = \frac{v_{0y}}{g}` },
              { description: "Calcular v₀y desde Tiempo de Vuelo", expression: String.raw`v_{0y} = \frac{t_v \cdot g}{2}` },
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>t_v = Tiempo de vuelo total (s)</li>
            <li>t_s = Tiempo de subida hasta altura máxima (s)</li>
            <li>v_0y = Componente vertical de la velocidad inicial (m/s)</li>
            <li>g = Aceleración de la gravedad (9.8 m/s²)</li>
          </ul>
        </Concept>
        <Concept title="Alcance Horizontal (R)">
          <p>Es la distancia horizontal total recorrida por el proyectil.</p>
          <Formula 
            expression={String.raw`R = \frac{v_0^2 \sin(2\theta)}{g}`}
            calculatorId="mp-alcance-horizontal"
            definitions={mpDefinitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular v₀ desde Alcance", expression: String.raw`v_0 = \sqrt{\frac{R \cdot g}{\sin(2\theta)}}` },
                { description: "Calcular Ángulo θ desde Alcance", expression: String.raw`\theta = \frac{1}{2} \sin^{-1}\left(\frac{R \cdot g}{v_0^2}\right)` },
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>R = Alcance horizontal (m)</li>
            <li>v_0 = Velocidad inicial (m/s)</li>
            <li>θ = Ángulo de lanzamiento (grados o radianes)</li>
            <li>g = Aceleración de la gravedad (9.8 m/s²)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Cinemática Instantánea">
        <p>Podemos determinar la posición y velocidad del proyectil en cualquier instante de tiempo (t).</p>
        <Concept title="Posición y Velocidad Instantáneas">
          <p>Las ecuaciones describen la evolución del proyectil en el tiempo.</p>
          <Formula 
            expression={String.raw`x(t) = v_{0x} \cdot t`}
            description="Posición horizontal"
            calculatorId="mp-cinematica-instantanea"
            definitions={mpDefinitions}
            exercises={exercises}
          />
          <Formula 
            expression={String.raw`y(t) = v_{0y}t - \frac{1}{2}gt^2`}
            description="Posición vertical"
            isPrimary={false}
          />
           <Formula 
            expression={String.raw`v_y(t) = v_{0y} - gt`}
            description="Velocidad vertical"
            isPrimary={false}
          />
           <Formula 
            expression={String.raw`v(t) = \sqrt{v_x^2 + v_y(t)^2}`}
            description="Velocidad total"
            isPrimary={false}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>x(t) = Posición horizontal en el tiempo t (m)</li>
            <li>y(t) = Posición vertical en el tiempo t (m)</li>
            <li>v_y(t) = Velocidad vertical en el tiempo t (m/s)</li>
            <li>v(t) = Velocidad total en el tiempo t (m/s)</li>
            <li>v_0x = Componente horizontal de la velocidad inicial (m/s)</li>
            <li>v_0y = Componente vertical de la velocidad inicial (m/s)</li>
            <li>g = Aceleración de la gravedad (9.8 m/s²)</li>
            <li>t = Tiempo transcurrido (s)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuación de la Trayectoria">
        <p>Al eliminar el tiempo de las ecuaciones de posición, obtenemos una ecuación que relaciona directamente la altura (y) con la distancia horizontal (x).</p>
        <Concept title="Trayectoria y(x)">
          <p>Esta fórmula describe la forma parabólica del movimiento, independientemente del tiempo.</p>
          <Formula 
            expression={String.raw`y(x) = x \tan(\theta) - \frac{g x^2}{2 v_0^2 \cos^2(\theta)}`}
            calculatorId="mp-trayectoria"
            definitions={mpDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>y(x) = Altura en función de la distancia horizontal (m)</li>
            <li>x = Distancia horizontal (m)</li>
            <li>θ = Ángulo de lanzamiento (grados o radianes)</li>
            <li>g = Aceleración de la gravedad (9.8 m/s²)</li>
            <li>v_0 = Velocidad inicial (m/s)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Casos Especiales">
        <Concept title="Lanzamiento Horizontal">
          <p>Un caso particular del movimiento parabólico ocurre cuando un objeto es lanzado horizontalmente desde cierta altura (θ=0). En esta situación, la velocidad inicial vertical es cero (v₀y = 0).</p>
          <Formula 
            expression={String.raw`x = v_{0x} \sqrt{\frac{2h}{g}}`}
            calculatorId="mp-lanzamiento-horizontal"
            definitions={mpDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>x = Alcance horizontal (m)</li>
            <li>v_0x = Velocidad horizontal inicial (m/s)</li>
            <li>h = Altura inicial de lanzamiento (m)</li>
            <li>g = Aceleración de la gravedad (9.8 m/s²)</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>⚽ Deportes con balón</h3>
          <p>
            El movimiento parabólico es fundamental en deportes como fútbol, baloncesto, béisbol y golf. Los jugadores profesionales intuitivamente calculan el ángulo y velocidad óptimos para que el balón siga la trayectoria deseada. En baloncesto, el ángulo ideal para un tiro libre es aproximadamente 45-50 grados. Los sistemas de análisis deportivo rastrean las trayectorias parabólicas para mejorar el rendimiento.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💧 Fuentes y sistemas de riego</h3>
          <p>
            El diseño de fuentes ornamentales y sistemas de riego por aspersión se basa en el movimiento parabólico. Los ingenieros calculan el ángulo y presión del agua para lograr el alcance deseado. Los aspersores de jardín típicamente operan a 30-45 grados para maximizar la cobertura. Las fuentes del Bellagio en Las Vegas utilizan cálculos precisos de trayectorias parabólicas para crear espectáculos coreografiados.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 Balística y artillería</h3>
          <p>
            Históricamente, el movimiento parabólico fue estudiado para mejorar la precisión de cañones y catapultas. Aunque los proyectiles reales experimentan resistencia del aire, las ecuaciones del movimiento parabólico proporcionan una primera aproximación útil. Los sistemas modernos de artillería utilizan computadoras que corrigen las trayectorias parabólicas ideales considerando viento, temperatura y rotación de la Tierra.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 Lanzamiento de suministros</h3>
          <p>
            Los aviones de carga lanzan suministros humanitarios siguiendo trayectorias parabólicas calculadas. Los pilotos deben considerar la velocidad del avión, la altura y el viento para que los paquetes caigan en la zona objetivo. Durante la Segunda Guerra Mundial, el bombardeo de precisión requería cálculos manuales de trayectorias parabólicas, considerando la velocidad del avión y la altura de vuelo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎪 Acrobacias y espectáculos</h3>
          <p>
            Los artistas de circo que se lanzan desde cañones humanos, los motociclistas que saltan rampas y los esquiadores acrobáticos siguen trayectorias parabólicas. Evel Knievel, el famoso motociclista acrobático, calculaba cuidadosamente sus saltos usando principios de movimiento parabólico. Un error de cálculo de solo unos grados en el ángulo de despegue podía resultar en un aterrizaje fallido.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ Demolición controlada</h3>
          <p>
            En la demolición de edificios, los ingenieros calculan las trayectorias parabólicas de los escombros para asegurar que caigan en zonas seguras. Los explosivos se colocan estratégicamente para que las estructuras colapsen siguiendo trayectorias predecibles. La demolición del Kingdome en Seattle en 2000 requirió cálculos precisos para que los 130,000 toneladas de escombros cayeran hacia adentro.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El estudio de los proyectiles
        </h2>
        
        <div className="theory-subsection">
          <h3>🏛️ Aristóteles y la antigüedad (384-322 a.C.)</h3>
          <p>
            Aristóteles creía que los proyectiles se movían en línea recta hasta que se "agotaba" su ímpetu, momento en el cual caían verticalmente. Esta teoría incorrecta dominó el pensamiento occidental durante casi 2,000 años. Los ingenieros militares de la antigüedad diseñaban catapultas y balistas basándose en la experiencia práctica más que en teoría correcta.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔭 Galileo Galilei (1564-1642)</h3>
          <p>
            Galileo fue el primero en comprender correctamente el movimiento parabólico. Demostró experimentalmente que un proyectil sigue una trayectoria parabólica y que este movimiento puede descomponerse en dos componentes independientes: horizontal (uniforme) y vertical (acelerado). Su trabajo "Discursos y demostraciones matemáticas" (1638) estableció las bases matemáticas del movimiento de proyectiles.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 Tartaglia y la balística (1499-1557)</h3>
          <p>
            Niccolò Tartaglia, matemático italiano, fue pionero en aplicar matemáticas a la artillería. Aunque no comprendía completamente la física, determinó experimentalmente que el ángulo de 45 grados proporciona el máximo alcance (en ausencia de resistencia del aire). Su libro "Nova Scientia" (1537) fue el primer tratado científico sobre balística.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🍎 Isaac Newton (1643-1727)</h3>
          <p>
            Newton unificó el movimiento de proyectiles con la mecánica celeste. Demostró que la misma fuerza (gravedad) que hace caer una manzana mantiene a la Luna en órbita. Su famoso "experimento mental" del cañón en una montaña ilustra cómo, con suficiente velocidad, un proyectil podría orbitar la Tierra, conectando el movimiento parabólico con el movimiento orbital.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💣 Primera y Segunda Guerra Mundial</h3>
          <p>
            Las guerras mundiales impulsaron el desarrollo de tablas balísticas precisas. Los artilleros usaban complejas tablas que consideraban no solo el movimiento parabólico ideal, sino también resistencia del aire, viento, temperatura y rotación de la Tierra (efecto Coriolis). El desarrollo de computadoras analógicas durante la Segunda Guerra Mundial fue impulsado por la necesidad de calcular trayectorias de proyectiles rápidamente.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🏀 El tiro perfecto de baloncesto</h3>
          <p>
            Los físicos han calculado que el ángulo óptimo para un tiro libre en baloncesto es de aproximadamente 52 grados (no 45 grados como en el vacío). Esto se debe al tamaño del aro y la necesidad de que el balón entre con un ángulo que maximice las probabilidades. Stephen Curry, considerado uno de los mejores tiradores de la NBA, lanza consistentemente a ángulos entre 48-52 grados con una velocidad inicial de unos 7 m/s.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚾ El home run más largo</h3>
          <p>
            El home run más largo verificado en béisbol fue golpeado por Mickey Mantle en 1953, viajando aproximadamente 565 pies (172 metros). Asumiendo que salió del bate a 45 grados, la velocidad inicial habría sido de unos 50 m/s (180 km/h). Sin embargo, en la realidad, la resistencia del aire reduce significativamente el alcance comparado con el movimiento parabólico ideal.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 El récord de lanzamiento de jabalina</h3>
          <p>
            El récord mundial de lanzamiento de jabalina masculino es de 98.48 metros (Jan Železný, 1996). Curiosamente, el ángulo óptimo para lanzar jabalina no es 45 grados, sino alrededor de 30-35 grados. Esto se debe a que la jabalina genera sustentación aerodinámica (como un ala de avión), lo que extiende su alcance más allá de lo que predice el movimiento parabólico simple.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💧 Las fuentes más altas del mundo</h3>
          <p>
            La Fuente del Rey Fahd en Arabia Saudita lanza agua a 260 metros de altura, la más alta del mundo. Para alcanzar esa altura, el agua debe salir a aproximadamente 71 m/s (256 km/h). La fuente utiliza bombas especiales que generan presiones enormes. Si se lanzara a 45 grados, el agua alcanzaría una distancia horizontal de más de 500 metros.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 El salto más largo en moto</h3>
          <p>
            Robbie Maddison estableció el récord de salto más largo en motocicleta en 2008: 106.98 metros (351 pies). Despegó de una rampa a aproximadamente 130 km/h (36 m/s) con un ángulo de unos 20 grados. Estuvo en el aire durante aproximadamente 3 segundos. Los cálculos de movimiento parabólico fueron cruciales para diseñar las rampas de despegue y aterrizaje.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎪 El cañón humano</h3>
          <p>
            Los artistas de cañón humano pueden ser lanzados a velocidades de hasta 90 km/h (25 m/s) y volar distancias de más de 60 metros. David "The Bullet" Smith Jr. estableció un récord volando 59.43 metros en 2018. Los cálculos de trayectoria deben ser extremadamente precisos: un error de 1 grado en el ángulo de lanzamiento puede hacer que el artista falle la red de seguridad por varios metros.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌍 El efecto Coriolis en proyectiles</h3>
          <p>
            Para proyectiles de largo alcance, la rotación de la Tierra (efecto Coriolis) desvía la trayectoria. Un proyectil disparado hacia el norte en el hemisferio norte se desviará hacia la derecha. Durante la Primera Guerra Mundial, los artilleros alemanes que bombardeaban París desde 120 km de distancia tenían que corregir sus cálculos parabólicos considerando que la rotación de la Tierra desviaba los proyectiles hasta 1 km.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            El movimiento parabólico combina MRU horizontal y MRUV vertical bajo la acción de la gravedad.
          </li>
          <li>
            La velocidad inicial se descompone en: v_0x = v_0·cos(θ) y v_0y = v_0·sin(θ).
          </li>
          <li>
            La altura máxima es h_max = v_0y²/(2g) y ocurre cuando v_y = 0.
          </li>
          <li>
            El tiempo de vuelo (trayectoria simétrica) es t_v = 2v_0y/g.
          </li>
          <li>
            El alcance horizontal es R = v_0²·sin(2θ)/g, máximo cuando θ = 45°.
          </li>
          <li>
            La trayectoria es una parábola descrita por y(x) = x·tan(θ) - gx²/(2v_0²cos²(θ)).
          </li>
          <li>
            El lanzamiento horizontal (θ = 0°) es un caso especial donde v_0y = 0.
          </li>
        </ul>
      </div>
    </>
  );
};

export default MpTheory;
