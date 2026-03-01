import { TheorySection, Concept, Example, Important } from '../../../../../components/TheoryV2';

export const metadata = {
  titulo: "Qué es el Movimiento",
  descripcion: "Introducción al concepto de movimiento en física",
  isTheoryOnly: true,
  educationLevel: "ESO",
  levels: ['ESO']
};

const QueEsMovimiento = () => {
  return (
    <>
      {/* Introducción */}
      <Concept 
        title="¿Qué significa moverse?" 
        color="blue"
        icon="❓"
      >
        <p>
          Todos los días vemos cosas que se mueven: coches en la calle, 
          pájaros en el cielo, personas caminando, las nubes... Pero, ¿qué es 
          realmente el movimiento?
        </p>
        <p>
          En física, decimos que un objeto está en movimiento cuando 
          cambia su posición con respecto a un punto de referencia, 
          a medida que pasa el tiempo.
        </p>
        <div className="destacado">
          <p>
            💡 Idea clave: El movimiento es un <em>cambio de posición 
            en el espacio a lo largo del tiempo</em>.
          </p>
        </div>
      </Concept>

      {/* El movimiento es relativo */}
      <Concept 
        title="El movimiento es relativo" 
        color="purple"
        icon="👀"
      >
        <p>
          Una de las ideas más importantes del movimiento es que depende 
          del observador. Es lo que llamamos el sistema de referencia.
        </p>
        
        <Example title="Ejemplo: El pasajero del tren" icon="🚂">
          <p>
            Imagina que estás en un tren que se mueve a velocidad constante. Si miras 
            a tu compañero sentado a tu lado:
          </p>
          <ul>
            <li>
              Para ti (dentro del tren): Tu compañero está <em>quieto</em>, 
              no se mueve respecto a ti.
            </li>
            <li>
              Para alguien en el andén: Tu compañero se está <em>moviendo</em> 
              junto con el tren a gran velocidad.
            </li>
          </ul>
          <p>
            ¿Quién tiene razón? ¡Ambos! El movimiento depende del 
            sistema de referencia que elijamos.
          </p>
        </Example>

        <div className="destacado">
          <p>
            🎯 Importante: Siempre que hablemos de movimiento, 
            debemos especificar <em>respecto a qué</em> se está moviendo un objeto.
          </p>
        </div>
      </Concept>

      {/* Ejemplos cotidianos */}
      <Concept 
        title="Movimientos a nuestro alrededor" 
        color="green"
        icon="🌍"
      >
        <p>
          El movimiento está presente en todas partes. Veamos algunos ejemplos 
          que encontramos en nuestro día a día:
        </p>
        
        <div className="ejemplos-grid">
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🚗</span>
            <p>Coches y autobuses: Se desplazan por las calles cambiando constantemente de posición.</p>
          </div>
          
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">⚽</span>
            <p>Balones y pelotas: Cuando juegas, la pelota se mueve siguiendo diferentes trayectorias.</p>
          </div>
          
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🛗</span>
            <p>Ascensores: Suben y bajan transportando personas entre plantas.</p>
          </div>
          
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🌤️</span>
            <p>Las nubes: Se desplazan lentamente por el cielo empujadas por el viento.</p>
          </div>
          
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🚴</span>
            <p>Ciclistas: Se mueven sobre dos ruedas recorriendo distancias.</p>
          </div>
          
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">✈️</span>
            <p>Aviones: Vuelan a gran altura y a altas velocidades.</p>
          </div>
          
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🌊</span>
            <p>Las olas del mar: Se mueven hacia la orilla en un movimiento periódico.</p>
          </div>
          
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🏃</span>
            <p>Personas corriendo: Atletas o simplemente gente haciendo ejercicio.</p>
          </div>

          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🌍</span>
            <p>La Tierra misma: Gira sobre sí misma y alrededor del Sol, aunque no lo percibamos.</p>
          </div>

          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🚁</span>
            <p>Helicópteros: Pueden moverse en cualquier dirección: arriba, abajo, adelante, atrás.</p>
          </div>
        </div>
      </Concept>

      {/* Trayectoria vs Desplazamiento */}
      <Concept 
        title="Trayectoria y Desplazamiento" 
        color="orange"
        icon="📍"
      >
        <p>
          Cuando un objeto se mueve, podemos describir su movimiento de dos formas diferentes:
        </p>
        
        <div className="concepto-doble">
          <div className="concepto-box">
            <h4>🛤️ Trayectoria</h4>
            <p>
              Es el camino completo que recorre un objeto. 
              Es la línea (real o imaginaria) que une todas las posiciones 
              por las que pasa el objeto.
            </p>
            <p className="ejemplo-inline">
              Ejemplo: Si caminas desde tu casa hasta el colegio 
              dando vueltas por varias calles, la trayectoria es todo ese recorrido.
            </p>
          </div>
          
          <div className="concepto-box">
            <h4>📏 Desplazamiento</h4>
            <p>
              Es la distancia más corta entre la posición 
              inicial y la posición final. Es una línea recta, como "a vuelo 
              de pájaro".
            </p>
            <p className="ejemplo-inline">
              Ejemplo: Siguiendo el caso anterior, el desplazamiento 
              sería la línea recta desde tu casa al colegio, sin importar el camino 
              que hayas tomado.
            </p>
          </div>
        </div>

        <Example title="Comparación visual" icon="🗺️">
          <p>
            Imagina que vas de la posición A a la posición B:
          </p>
          <ul>
            <li>
              Trayectoria: 🔵 → 🔵 → 🔵 → 🔵 → 🔵 
              (puede ser curva, con muchos giros)
            </li>
            <li>
              Desplazamiento: 🔵 ➡️ 🔵 
              (siempre es la línea recta más corta)
            </li>
          </ul>
          <p>
            Nota: La trayectoria es siempre <em>mayor o igual</em> 
            al desplazamiento. Solo son iguales cuando el movimiento es en línea recta 
            sin cambiar de dirección.
          </p>
        </Example>
      </Concept>

      {/* Conceptos básicos */}
      <Concept 
        title="Conceptos fundamentales" 
        color="red"
        icon="🧩"
      >
        <p>
          Para describir el movimiento de manera precisa, necesitamos entender 
          tres conceptos básicos:
        </p>

        <div className="conceptos-fundamentales">
          <div className="concepto-fundamental">
            <h4>📍 Posición</h4>
            <p>
              Es el lugar donde se encuentra un objeto en un 
              momento determinado. Se mide con respecto a un punto de referencia 
              (el origen).
            </p>
            <p className="formula-simple">
              Ejemplo: "Estoy a 5 metros de la puerta" o "El coche está en el kilómetro 150"
            </p>
          </div>

          <div className="concepto-fundamental">
            <h4>🏃 Velocidad</h4>
            <p>
              Es la rapidez con la que cambia la posición de un objeto. 
              Nos dice qué tan rápido se mueve algo.
            </p>
            <p className="formula-simple">
              Ejemplo: "El coche va a 100 km/h" o "Camino a 5 km/h"
            </p>
            <p>
              <em>Nota:</em> La velocidad tiene magnitud (cuánto) 
              y dirección (hacia dónde).
            </p>
          </div>

          <div className="concepto-fundamental">
            <h4>⏱️ Tiempo</h4>
            <p>
              Es la duración del movimiento. Cuánto tarda un objeto 
              en ir de un lugar a otro.
            </p>
            <p className="formula-simple">
              Ejemplo: "Tardé 10 minutos en llegar" o "El tren llega en 2 horas"
            </p>
          </div>
        </div>

        <div className="destacado">
          <p>
            🔗 Relación entre conceptos: Estos tres conceptos están 
            muy relacionados. La velocidad nos dice cómo cambia la posición con el tiempo:
          </p>
          <p style={{ textAlign: 'center', fontSize: '1.2em', margin: '10px 0' }}>
            Velocidad = Cambio de posición / Tiempo
          </p>
        </div>
      </Concept>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🚗 Transporte y navegación</h3>
          <p>
            El concepto de movimiento es fundamental en todos los sistemas de transporte. 
            Los GPS calculan constantemente tu posición y velocidad para indicarte el 
            camino más rápido. Los sistemas de control de tráfico monitorizan el movimiento 
            de vehículos para optimizar los semáforos y reducir atascos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎮 Videojuegos y animación</h3>
          <p>
            Todos los videojuegos utilizan los conceptos de posición, velocidad y trayectoria 
            para crear movimientos realistas. Los personajes, vehículos y objetos se mueven 
            siguiendo las mismas leyes físicas que estudiamos aquí, aunque a veces se 
            simplifican para hacer el juego más divertido.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚽ Deportes</h3>
          <p>
            En deportes como el fútbol, baloncesto o tenis, entender el movimiento es 
            crucial. Los entrenadores analizan las trayectorias de los balones, la velocidad 
            de los jugadores y sus posiciones para mejorar las estrategias de juego. Los 
            sistemas de análisis deportivo rastrean cada movimiento en tiempo real.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 Exploración espacial</h3>
          <p>
            Las agencias espaciales como la NASA calculan con precisión extrema las 
            trayectorias de cohetes y satélites. Un pequeño error en el cálculo del 
            movimiento podría hacer que una misión espacial falle completamente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏥 Medicina</h3>
          <p>
            Los médicos estudian el movimiento del cuerpo humano para diagnosticar 
            problemas. Por ejemplo, analizan cómo camina una persona (su trayectoria 
            y velocidad) para detectar lesiones o enfermedades neurológicas.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El estudio del movimiento
        </h2>
        
        <div className="theory-subsection">
          <h3>🏛️ Aristóteles y la antigüedad (384-322 a.C.)</h3>
          <p>
            El filósofo griego Aristóteles fue uno de los primeros en intentar explicar 
            el movimiento de forma sistemática. Aunque muchas de sus ideas resultaron 
            ser incorrectas (como que los objetos pesados caen más rápido), su trabajo 
            sentó las bases para el estudio científico del movimiento.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔭 Galileo Galilei (1564-1642)</h3>
          <p>
            Galileo revolucionó el estudio del movimiento con sus experimentos. Fue el 
            primero en usar matemáticas para describir el movimiento y demostró que todos 
            los objetos caen a la misma velocidad (sin considerar la resistencia del aire). 
            Sus estudios del movimiento de proyectiles y péndulos fueron fundamentales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🍎 Isaac Newton (1643-1727)</h3>
          <p>
            Newton completó el trabajo de Galileo creando las tres leyes del movimiento 
            que llevan su nombre. Estas leyes explican por qué y cómo se mueven los objetos, 
            desde una pelota hasta los planetas. Su trabajo unificó el estudio del movimiento 
            en la Tierra y en el espacio.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ Albert Einstein (1879-1955)</h3>
          <p>
            Einstein demostró que el movimiento es aún más relativo de lo que pensábamos. 
            Su teoría de la relatividad mostró que el tiempo y el espacio cambian dependiendo 
            de la velocidad a la que te mueves. A velocidades cercanas a la luz, el tiempo 
            se ralentiza y las distancias se acortan.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🌍 ¿Estás quieto ahora mismo?</h3>
          <p>
            Aunque estés sentado leyendo esto, en realidad te estás moviendo a velocidades 
            increíbles. La Tierra gira sobre sí misma a unos 1.670 km/h en el ecuador. 
            Además, se mueve alrededor del Sol a 107.000 km/h. Y el Sistema Solar completo 
            se mueve por la galaxia a 828.000 km/h. ¡Nunca estás realmente quieto!
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚄 El tren más rápido del mundo</h3>
          <p>
            El tren de levitación magnética japonés (maglev) alcanzó 603 km/h en 2015. 
            A esa velocidad, recorrería la distancia entre Madrid y Barcelona (unos 620 km) 
            en poco más de una hora. Estos trenes "flotan" sobre las vías usando imanes, 
            eliminando la fricción.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ La velocidad de la luz</h3>
          <p>
            La luz viaja a 299.792.458 metros por segundo (casi 300.000 km/s). Es tan 
            rápida que podría dar 7,5 vueltas a la Tierra en un solo segundo. Nada en el 
            universo puede moverse más rápido que la luz, según la teoría de Einstein.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🐌 El animal más lento</h3>
          <p>
            El perezoso de tres dedos es uno de los animales más lentos del mundo, moviéndose 
            a solo 0,24 km/h. En contraste, el guepardo puede alcanzar 120 km/h en carreras 
            cortas. ¡El guepardo es 500 veces más rápido!
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 La paradoja del movimiento de Zenón</h3>
          <p>
            El filósofo griego Zenón propuso una paradoja famosa: para llegar a un destino, 
            primero debes recorrer la mitad del camino, luego la mitad de lo que queda, 
            luego la mitad de eso... y así infinitamente. ¿Cómo es posible llegar entonces? 
            Esta paradoja confundió a los filósofos durante siglos hasta que se desarrolló 
            el cálculo matemático.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            El movimiento es el cambio de posición de un objeto 
            con respecto a un punto de referencia, a lo largo del tiempo.
          </li>
          <li>
            El movimiento es relativo: depende del observador 
            (sistema de referencia).
          </li>
          <li>
            La trayectoria es el camino completo que recorre un objeto.
          </li>
          <li>
            El desplazamiento es la línea recta más corta entre 
            la posición inicial y final.
          </li>
          <li>
            Los conceptos básicos son: posición, velocidad 
            y tiempo.
          </li>
        </ul>

        <Important>
          <p>
            📚 Siguiente tema: Ahora que sabes qué es el movimiento, 
            aprenderemos sobre los diferentes tipos de movimiento 
            que existen.
          </p>
        </Important>
      </div>
    </>
  );
};

export default QueEsMovimiento;
