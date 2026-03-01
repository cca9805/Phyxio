import { TheorySection, Concept, Example } from '../../../../../components/TheoryV2';

export const metadata = {
  titulo: "Tipos de Movimiento",
  descripcion: "Clasificación de los diferentes tipos de movimiento",
  isTheoryOnly: true,
  educationLevel: "ESO",
  levels: ['ESO']
};

const TiposDeMovimiento = () => {
  return (
    <>
      <Concept 
        title="¿Cómo clasificamos los movimientos?" 
        color="purple"
        icon="🔄"
      >
        <p>
          Ahora que ya sabemos qué es el movimiento, vamos a ver que no todos los movimientos son iguales. Podemos clasificarlos según diferentes criterios.
        </p>
        <p>
          En este tema aprenderemos a distinguir los tipos de movimiento más importantes que encontramos en la vida cotidiana.
        </p>
      </Concept>

      <Concept 
        title="Clasificación según la trayectoria" 
        color="blue"
        icon="📐"
      >
        <p>
          Una de las formas más intuitivas de clasificar movimientos es según el tipo de trayectoria que sigue el objeto:
        </p>

        <div className="tipos-trayectoria">
          <div className="tipo-movimiento">
            <h4>➡️ Movimiento Rectilíneo</h4>
            <p>
              El objeto se mueve en línea recta. La trayectoria es una línea recta.
            </p>
            <div className="ejemplos-tipo">
              <p>Ejemplos:</p>
              <ul>
                <li>Un tren en una vía recta</li>
                <li>Un objeto que cae verticalmente</li>
                <li>Un coche en una autopista recta</li>
                <li>Una pelota rodando por un carril recto</li>
              </ul>
            </div>
            <div className="visual-trayectoria">
              🚗 ──────────────────➡️
            </div>
          </div>

          <div className="tipo-movimiento">
            <h4>🔄 Movimiento Circular</h4>
            <p>
              El objeto se mueve siguiendo una circunferencia. La trayectoria es circular.
            </p>
            <div className="ejemplos-tipo">
              <p>Ejemplos:</p>
              <ul>
                <li>Una noria de feria</li>
                <li>Las aspas de un ventilador</li>
                <li>Un satélite orbitando la Tierra</li>
                <li>Una rueda de bicicleta girando</li>
              </ul>
            </div>
            <div className="visual-trayectoria">
              🎡 ⭕ (trayectoria circular)
            </div>
          </div>

          <div className="tipo-movimiento">
            <h4>🌊 Movimiento Curvilíneo</h4>
            <p>
              El objeto se mueve siguiendo una curva que no es ni recta ni circular. Es el caso más general.
            </p>
            <div className="ejemplos-tipo">
              <p>Ejemplos:</p>
              <ul>
                <li>Una pelota lanzada al aire (parábola)</li>
                <li>Un coche tomando una curva en carretera</li>
                <li>Un avión al despegar o aterrizar</li>
                <li>Un patinador haciendo una curva</li>
              </ul>
            </div>
            <div className="visual-trayectoria">
              ⚽ 〰️〰️〰️ (trayectoria curva)
            </div>
          </div>
        </div>

        <div className="nota-importante">
          <p>
            💡 Nota: Muchos movimientos en la vida real combinan varios tipos. Por ejemplo, un coche en ciudad hace movimientos rectilíneos en las rectas y curvilíneos en las curvas.
          </p>
        </div>
      </Concept>

      <Concept 
        title="Clasificación según la velocidad" 
        color="green"
        icon="🏃"
      >
        <p>
          Otra forma importante de clasificar movimientos es según cómo cambia (o no cambia) la velocidad del objeto:
        </p>

        <div className="tipos-velocidad">
          <div className="tipo-movimiento">
            <h4>⚖️ Movimiento Uniforme</h4>
            <p>
              La velocidad es constante. El objeto se mueve siempre a la misma rapidez y en la misma dirección.
            </p>
            <div className="caracteristicas">
              <p>Características:</p>
              <ul>
                <li>La velocidad no cambia con el tiempo</li>
                <li>No hay aceleración (aceleración = 0)</li>
                <li>En tiempos iguales, recorre distancias iguales</li>
              </ul>
            </div>
            <div className="ejemplos-tipo">
              <p>Ejemplos:</p>
              <ul>
                <li>Un coche en autopista con el control de crucero activado</li>
                <li>Un tren en un tramo recto de vía a velocidad constante</li>
                <li>Una cinta transportadora en funcionamiento</li>
              </ul>
            </div>
            <div className="velocimetro">
              🚗 velocímetro: 100 km/h → 100 km/h → 100 km/h (constante)
            </div>
          </div>

          <div className="tipo-movimiento">
            <h4>📈 Movimiento Acelerado (o Variado)</h4>
            <p>
              La velocidad cambia con el tiempo. El objeto puede ir más rápido, más lento, o cambiar de dirección.
            </p>
            <div className="caracteristicas">
              <p>Características:</p>
              <ul>
                <li>La velocidad varía (aumenta o disminuye)</li>
                <li>Hay aceleración (aceleración ≠ 0)</li>
                <li>En tiempos iguales, puede recorrer distancias diferentes</li>
              </ul>
            </div>
            
            <div className="subtipos">
              <div className="subtipo">
                <h5>⬆️ Acelerado (acelera)</h5>
                <p>La velocidad aumenta con el tiempo.</p>
                <p className="ejemplo-inline">
                  Ejemplo: Un coche arrancando desde un semáforo
                </p>
                <div className="velocimetro">
                  🚗 0 km/h → 20 km/h → 40 km/h → 60 km/h
                </div>
              </div>

              <div className="subtipo">
                <h5>⬇️ Decelerado (frena)</h5>
                <p>La velocidad disminuye con el tiempo.</p>
                <p className="ejemplo-inline">
                  Ejemplo: Un coche frenando al llegar a un semáforo en rojo
                </p>
                <div className="velocimetro">
                  🚗 60 km/h → 40 km/h → 20 km/h → 0 km/h
                </div>
              </div>
            </div>
          </div>
        </div>
      </Concept>

      <Concept 
        title="Tipos de movimiento combinados" 
        color="orange"
        icon="🎯"
      >
        <p>
          Al combinar ambas clasificaciones (trayectoria + velocidad), obtenemos los tipos de movimiento más comunes que estudiaremos en cinemática:
        </p>

        <div className="tabla-combinaciones">
          <table>
            <thead>
              <tr>
                <th>Trayectoria</th>
                <th>Velocidad</th>
                <th>Nombre</th>
                <th>Abreviatura</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>➡️ Rectilínea</td>
                <td>⚖️ Uniforme</td>
                <td>Movimiento Rectilíneo Uniforme</td>
                <td>MRU</td>
              </tr>
              <tr>
                <td>➡️ Rectilínea</td>
                <td>📈 Acelerado</td>
                <td>Movimiento Rectilíneo Uniformemente Acelerado</td>
                <td>MRUA</td>
              </tr>
              <tr>
                <td>🔄 Circular</td>
                <td>⚖️ Uniforme</td>
                <td>Movimiento Circular Uniforme</td>
                <td>MCU</td>
              </tr>
              <tr>
                <td>🔄 Circular</td>
                <td>📈 Acelerado</td>
                <td>Movimiento Circular Uniformemente Acelerado</td>
                <td>MCUA</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="nota-combinaciones">
          <p>
            🎓 Para profundizar: Cada uno de estos tipos tiene sus propias ecuaciones y características. Los estudiaremos en detalle en temas posteriores (MRU, MRUA, MCU, MCUA).
          </p>
        </div>
      </Concept>

      <Concept 
        title="Comparando movimientos reales" 
        color="red"
        icon="🔬"
      >
        <p>
          Veamos algunos ejemplos de la vida real y clasifiquémoslos:
        </p>

        <Example title="Ejemplo 1: Ascensor" icon="🛗">
          <p>
            Un ascensor que sube desde la planta baja hasta el piso 5:
          </p>
          <ul>
            <li>
              Al arrancar: Movimiento rectilíneo acelerado (aumenta velocidad verticalmente)
            </li>
            <li>
              En el medio: Movimiento rectilíneo uniforme (velocidad constante vertical)
            </li>
            <li>
              Al llegar: Movimiento rectilíneo decelerado (disminuye velocidad hasta detenerse)
            </li>
          </ul>
          <p>
            Conclusión: El ascensor combina varios tipos de movimiento en su recorrido completo.
          </p>
        </Example>

        <Example title="Ejemplo 2: Noria de feria" icon="🎡">
          <p>
            Una noria que gira a velocidad constante:
          </p>
          <ul>
            <li>Trayectoria: Circular (sigue una circunferencia)</li>
            <li>Velocidad: Uniforme (gira a velocidad constante)</li>
            <li>Tipo: Movimiento Circular Uniforme (MCU)</li>
          </ul>
        </Example>

        <Example title="Ejemplo 3: Pelota lanzada al aire" icon="⚽">
          <p>
            Lanzas una pelota hacia arriba:
          </p>
          <ul>
            <li>Trayectoria: Curvilínea (parábola)</li>
            <li>
              Velocidad: Acelerada (la gravedad la decelera al subir y la acelera al bajar)
            </li>
            <li>
              Tipo: Movimiento parabólico (un tipo especial de movimiento curvilíneo)
            </li>
          </ul>
        </Example>

        <Example title="Ejemplo 4: Coche en autopista" icon="🚗">
          <p>
            Un coche viajando por autopista con control de crucero:
          </p>
          <ul>
            <li>Trayectoria: Rectilínea (si la autopista es recta)</li>
            <li>Velocidad: Uniforme (120 km/h constantes)</li>
            <li>Tipo: Movimiento Rectilíneo Uniforme (MRU)</li>
          </ul>
        </Example>
      </Concept>

      <Concept 
        title="Otros tipos de movimiento (avanzado)" 
        color="purple"
        icon="🎓"
      >
        <p>
          Además de los tipos básicos que hemos visto, existen otros movimientos más complejos que estudiarás en cursos avanzados:
        </p>

        <div className="tipos-avanzados">
          <div className="tipo-avanzado">
            <h4>⏱️ Movimiento Pendular</h4>
            <p>
              Un objeto suspendido que oscila de un lado a otro bajo la acción de la gravedad. Es un movimiento periódico (se repite) y curvilíneo (sigue un arco de circunferencia).
            </p>
            <p className="ejemplo-inline">
              Ejemplos: Péndulo de un reloj, columpio, lámpara colgante oscilando
            </p>
          </div>

          <div className="tipo-avanzado">
            <h4>🌊 Movimiento Armónico Simple (MAS)</h4>
            <p>
              Un movimiento oscilatorio donde la fuerza que actúa sobre el objeto es proporcional a su desplazamiento. Es el modelo matemático que describe muchos fenómenos periódicos en la naturaleza.
            </p>
            <p className="ejemplo-inline">
              Ejemplos: Masa en un resorte, péndulo simple (para ángulos pequeños), moléculas vibrando
            </p>
          </div>

          <div className="tipo-avanzado">
            <h4>🔄 Movimiento Relativo</h4>
            <p>
              El movimiento depende del observador. Un objeto puede estar en reposo para un observador y en movimiento para otro. Este concepto es fundamental en la teoría de la relatividad.
            </p>
            <p className="ejemplo-inline">
              Ejemplos: Pasajero caminando en un tren en movimiento, avión visto desde tierra vs desde otro avión
            </p>
          </div>
        </div>

        <div className="nota-avanzado">
          <p>
            💡 Estos movimientos requieren matemáticas más avanzadas (trigonometría, ecuaciones diferenciales) y conceptos físicos más profundos. Los estudiarás en Bachillerato y Universidad.
          </p>
        </div>
      </Concept>

      <Concept 
        title="Próximos temas recomendados" 
        color="blue"
        icon="🎓"
      >
        <p>
          Ahora que conoces los tipos básicos de movimiento, puedes profundizar en cada uno. Te recomendamos seguir este orden:
        </p>

        <div className="cards-temas">
          <div className="card-tema mru">
            <div className="tema-header">
              <span className="tema-emoji">➡️</span>
              <h4>1. Movimiento Rectilíneo Uniforme (MRU)</h4>
            </div>
            <div className="tema-descripcion">
              <p>
                El movimiento más simple: línea recta a velocidad constante.
              </p>
              <div className="tema-contenido">
                Aprenderás:
                <ul>
                  <li>Ecuaciones del MRU: x = x₀ + v·t</li>
                  <li>Problemas de encuentro entre móviles</li>
                  <li>Gráficas detalladas x-t y v-t</li>
                  <li>Velocidad media y velocidad instantánea</li>
                </ul>
              </div>
              <div className="tema-nivel">
                Nivel: Bachillerato / ESO avanzado
              </div>
            </div>
            <div className="tema-enlace">
              <p>
                🔗 Ir al tema: Busca "MRU" en el menú de Cinemática
              </p>
            </div>
          </div>

          <div className="card-tema mrua">
            <div className="tema-header">
              <span className="tema-emoji">📈</span>
              <h4>2. Movimiento Rectilíneo Uniformemente Acelerado (MRUA)</h4>
            </div>
            <div className="tema-descripcion">
              <p>
                Movimiento en línea recta con aceleración constante. El más común en la vida real.
              </p>
              <div className="tema-contenido">
                Aprenderás:
                <ul>
                  <li>Ecuaciones del MRUA: v = v₀ + a·t, x = x₀ + v₀·t + ½a·t²</li>
                  <li>Caída libre y lanzamiento vertical</li>
                  <li>Frenado de vehículos</li>
                  <li>Gráficas parabólicas en x-t</li>
                </ul>
              </div>
              <div className="tema-nivel">
                Nivel: Bachillerato / ESO avanzado
              </div>
              <div className="tema-prerequisitos">
                Requisitos: Entender bien MRU (recomendado estudiar MRU antes)
              </div>
            </div>
            <div className="tema-enlace">
              <p>
                🔗 Ir al tema: Busca "MRUA" en el menú de Cinemática
              </p>
            </div>
          </div>

          <div className="card-tema mcu">
            <div className="tema-header">
              <span className="tema-emoji">🔄</span>
              <h4>3. Movimiento Circular Uniforme (MCU)</h4>
            </div>
            <div className="tema-descripcion">
              <p>
                Movimiento en círculo a velocidad angular constante. Muy presente en máquinas y tecnología.
              </p>
              <div className="tema-contenido">
                Aprenderás:
                <ul>
                  <li>Velocidad angular (ω) y periodo (T)</li>
                  <li>Relación entre velocidad lineal y angular</li>
                  <li>Aceleración centrípeta</li>
                  <li>Aplicaciones: ruedas, satélites, centrifugadoras</li>
                </ul>
              </div>
              <div className="tema-nivel">
                Nivel: Bachillerato
              </div>
              <div className="tema-prerequisitos">
                Requisitos: Conocer MRU y conceptos de ángulos
              </div>
            </div>
            <div className="tema-enlace">
              <p>
                🔗 Ir al tema: Busca "MCU" en el menú de Cinemática
              </p>
            </div>
          </div>

          <div className="card-tema mcua">
            <div className="tema-header">
              <span className="tema-emoji">🌀</span>
              <h4>4. Movimiento Circular Uniformemente Acelerado (MCUA)</h4>
            </div>
            <div className="tema-descripcion">
              <p>
                Movimiento circular con aceleración angular constante. Como un ventilador que arranca o frena.
              </p>
              <div className="tema-contenido">
                Aprenderás:
                <ul>
                  <li>Aceleración angular (α)</li>
                  <li>Ecuaciones análogas al MRUA pero rotacionales</li>
                  <li>Motores que arrancan y frenan</li>
                  <li>Combinación de aceleraciones (tangencial + centrípeta)</li>
                </ul>
              </div>
              <div className="tema-nivel">
                Nivel: Bachillerato avanzado
              </div>
              <div className="tema-prerequisitos">
                Requisitos: Haber estudiado MCU y MRUA
              </div>
            </div>
            <div className="tema-enlace">
              <p>
                🔗 Ir al tema: Busca "MCUA" en el menú de Cinemática
              </p>
            </div>
          </div>
        </div>

        <div className="otros-temas">
          <h4>Otros temas de cinemática avanzada:</h4>
          <div className="otro-tema">
            <h5>🎯 Movimiento Parabólico (MP)</h5>
            <p>
              Cuando lanzas una pelota al aire, sigue una trayectoria parabólica. Es una combinación de MRU horizontal y caída libre vertical.
            </p>
            <p className="nivel-tema">Nivel: Bachillerato</p>
          </div>
        </div>
      </Concept>

      <Concept 
        title="Consejos para seguir aprendiendo" 
        color="orange"
        icon="💡"
      >
        <div className="consejos-lista">
          <div className="consejo-item">
            <h4>1️⃣ Empieza por el MRU</h4>
            <p>
              Es el más sencillo y te dará la base para entender todos los demás. Asegúrate de dominarlo antes de pasar al siguiente.
            </p>
          </div>

          <div className="consejo-item">
            <h4>2️⃣ Practica con ejercicios</h4>
            <p>
              Cada tema tiene problemas resueltos y ejercicios propuestos. Intenta resolverlos por ti mismo antes de ver la solución.
            </p>
          </div>

          <div className="consejo-item">
            <h4>3️⃣ Dibuja las situaciones</h4>
            <p>
              Hacer un esquema o diagrama de cada problema te ayudará a visualizarlo mejor. Marca las posiciones iniciales, velocidades y direcciones.
            </p>
          </div>

          <div className="consejo-item">
            <h4>4️⃣ Usa las gráficas</h4>
            <p>
              Las gráficas son una herramienta poderosa. Intenta dibujar la gráfica de cada problema para entenderlo mejor.
            </p>
          </div>

          <div className="consejo-item">
            <h4>5️⃣ Relaciona con la vida real</h4>
            <p>
              Siempre que puedas, piensa en ejemplos cotidianos que se parezcan al problema. La física tiene más sentido cuando la conectas con tu experiencia.
            </p>
          </div>

          <div className="consejo-item">
            <h4>6️⃣ No te agobies con las fórmulas</h4>
            <p>
              Al principio puede parecer que hay muchas fórmulas. Pero en realidad, todas se derivan de unas pocas ideas básicas. Con la práctica, las recordarás sin esfuerzo.
            </p>
          </div>
        </div>
      </Concept>

      <div className="theory-applications-section">
        <h2><span>🚀</span> Aplicaciones de la Clasificación de Movimientos</h2>
        
        <h4>Diseño de Vehículos</h4>
        <p>
          Los ingenieros automotrices diseñan sistemas de suspensión, frenos y dirección considerando los diferentes tipos de movimiento que experimentará el vehículo: rectilíneo en autopistas, circular en curvas, acelerado al arrancar y frenar.
        </p>

        <h4>Animación y Videojuegos</h4>
        <p>
          Los animadores programan movimientos de personajes y objetos clasificándolos según su tipo. Un personaje caminando sigue un movimiento rectilíneo uniforme, mientras que al saltar describe una parábola (movimiento curvilíneo acelerado).
        </p>

        <h4>Robótica Industrial</h4>
        <p>
          Los robots en fábricas ejecutan movimientos programados: rectilíneos para transportar piezas, circulares para operaciones de soldadura, y acelerados para optimizar tiempos de ciclo sin dañar componentes.
        </p>

        <h4>Navegación Marítima y Aérea</h4>
        <p>
          Los sistemas de navegación calculan rutas óptimas combinando diferentes tipos de movimiento. Los aviones siguen trayectorias curvilíneas al despegar y aterrizar, rectilíneas en crucero, y circulares al esperar permiso para aterrizar.
        </p>

        <h4>Deportes y Entrenamiento</h4>
        <p>
          Los entrenadores analizan los movimientos de atletas clasificándolos por tipo. Un velocista realiza movimiento rectilíneo acelerado, un patinador artístico combina movimientos circulares y curvilíneos, y un nadador alterna entre acelerado y uniforme.
        </p>
      </div>

      <div className="theory-history-section">
        <h2><span>📜</span> Historia de la Clasificación del Movimiento</h2>
        <p>
          Los filósofos griegos antiguos, especialmente Aristóteles (384-322 a.C.), fueron los primeros en intentar clasificar los movimientos. Aristóteles distinguía entre movimientos "naturales" (como la caída de objetos) y "violentos" (causados por fuerzas externas).
        </p>
        <p>
          Galileo Galilei (1564-1642) revolucionó el estudio del movimiento al realizar experimentos sistemáticos. Estudió el movimiento rectilíneo uniforme y el movimiento uniformemente acelerado, estableciendo las bases matemáticas para describirlos.
        </p>
        <p>
          Isaac Newton (1643-1727) unificó la comprensión del movimiento con sus tres leyes. Demostró que los mismos principios rigen tanto el movimiento de objetos terrestres como el de los cuerpos celestes, eliminando la distinción aristotélica entre movimientos "naturales" y "violentos".
        </p>
        <p>
          En el siglo XIX, con el desarrollo de la mecánica analítica por Lagrange y Hamilton, se establecieron métodos matemáticos generales para describir cualquier tipo de movimiento, sin importar cuán complejo sea.
        </p>
        <p>
          En el siglo XX, la teoría de la relatividad de Einstein mostró que la clasificación del movimiento depende del observador. Lo que para un observador es movimiento rectilíneo uniforme, para otro en movimiento relativo puede ser curvilíneo.
        </p>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span>💡</span> Curiosidades sobre Tipos de Movimiento</h2>
        <p>
          Los planetas realizan movimiento circular (aproximadamente) alrededor del Sol, pero no es perfectamente uniforme. La velocidad varía según la distancia al Sol, siendo más rápidos cuando están más cerca (perihelio) y más lentos cuando están más lejos (afelio).
        </p>
        <p>
          Las montañas rusas combinan todos los tipos de movimiento en pocos minutos: rectilíneo acelerado en las subidas, curvilíneo en las bajadas y loops, y circular en los giros cerrados. Los diseñadores calculan meticulosamente cada transición para garantizar seguridad y emoción.
        </p>
        <p>
          Los satélites geoestacionarios realizan movimiento circular uniforme con un período exacto de 24 horas, manteniéndose siempre sobre el mismo punto de la Tierra. Esto los hace ideales para comunicaciones y observación meteorológica.
        </p>
        <p>
          El movimiento de un péndulo es un ejemplo clásico de movimiento periódico curvilíneo. Galileo descubrió que el período de oscilación es independiente de la amplitud (para ángulos pequeños), observando las lámparas de la catedral de Pisa.
        </p>
        <p>
          Los patinadores artísticos aprovechan la conservación del momento angular en movimientos circulares. Al acercar los brazos al cuerpo durante un giro, aumentan su velocidad angular sin aplicar fuerza externa, demostrando principios fundamentales de la física del movimiento circular.
        </p>
      </div>

      <div className="formula-card">
        <h3>Resumen: Tipos de Movimiento</h3>
        <p>
          Los movimientos se clasifican según dos criterios principales: la trayectoria (rectilínea, circular o curvilínea) y la velocidad (uniforme o acelerada). Esta clasificación nos ayuda a entender y predecir el comportamiento de objetos en movimiento.
        </p>
        <p>
          Los tipos fundamentales son: MRU (rectilíneo uniforme), MRUA (rectilíneo uniformemente acelerado), MCU (circular uniforme) y MCUA (circular uniformemente acelerado). La mayoría de movimientos reales combinan varios tipos en diferentes fases.
        </p>
        <p>
          Comprender esta clasificación es esencial para analizar situaciones cotidianas, desde el funcionamiento de vehículos hasta el diseño de atracciones de feria. Con práctica, aprenderás a identificar rápidamente el tipo de movimiento que realiza cualquier objeto en tu entorno.
        </p>
      </div>
    </>
  );
};

export default TiposDeMovimiento;
