import { TheorySection, Concept, Example, Formula } from '../../../../../components/TheoryV2';

export const metadata = {
  titulo: "Movimientos Cotidianos",
  descripcion: "Ejemplos de movimiento en la vida diaria",
  isTheoryOnly: true,
  educationLevel: "ESO",
  levels: ['ESO']
};

const MovimientosCotidianos = () => {
  return (
    <>
      <Concept 
        title="Física en acción: Analizando movimientos reales" 
        color="orange"
        icon="🚗"
      >
        <p>
          Hasta ahora hemos aprendido la teoría sobre el movimiento. Ahora es el momento de aplicarla a situaciones reales que vivimos cada día.
        </p>
        <p>
          En este tema vamos a analizar movimientos cotidianos usando lo que ya sabemos sobre velocidad, trayectorias y gráficas. ¡Verás que la física está en todas partes!
        </p>
      </Concept>

      <Concept 
        title="Problema 1: Viaje en coche por autopista" 
        color="blue"
        icon="🚙"
      >
        <div className="enunciado-problema">
          <h4>📋 Situación:</h4>
          <p>
            Una familia va de Madrid a Valencia en coche. La distancia es de 360 kilómetros y tardan 3 horas en llegar, viajando por autopista a velocidad constante.
          </p>
          <p>Preguntas:</p>
          <ul>
            <li>¿A qué velocidad media viajan?</li>
            <li>¿Qué tipo de movimiento realizan?</li>
            <li>¿Si hubieran ido al doble de velocidad, cuánto habrían tardado?</li>
          </ul>
        </div>

        <div className="solucion-problema">
          <h4>✅ Solución paso a paso:</h4>
          
          <div className="paso">
            <h5>📝 Paso 1: Identificar los datos</h5>
            <ul>
              <li>Distancia (d): 360 km</li>
              <li>Tiempo (t): 3 horas</li>
              <li>Velocidad (v): ¿?</li>
            </ul>
          </div>

          <div className="paso">
            <h5>🧮 Paso 2: Calcular la velocidad media</h5>
            <p>
              Sabemos que la velocidad es la distancia recorrida dividida por el tiempo:
            </p>
            <Formula>
              {"v = \\frac{d}{t}"}
            </Formula>
            <p>Sustituimos los valores:</p>
            <Formula>
              {"v = \\frac{360 \\text{ km}}{3 \\text{ h}} = 120 \\text{ km/h}"}
            </Formula>
            <p className="resultado">
              🎯 Respuesta 1: Viajan a una velocidad media de 120 km/h.
            </p>
          </div>

          <div className="paso">
            <h5>🔍 Paso 3: Identificar el tipo de movimiento</h5>
            <p>
              El enunciado dice que viajan a velocidad constante por autopista (línea recta):
            </p>
            <ul>
              <li>Trayectoria: Rectilínea (autopista recta)</li>
              <li>Velocidad: Constante (120 km/h)</li>
            </ul>
            <p className="resultado">
              🎯 Respuesta 2: Es un Movimiento Rectilíneo Uniforme (MRU).
            </p>
          </div>

          <div className="paso">
            <h5>⚡ Paso 4: Calcular tiempo al doble de velocidad</h5>
            <p>
              Si viajan al doble de velocidad: v = 240 km/h
            </p>
            <p>Despejamos el tiempo de la fórmula de velocidad:</p>
            <Formula>
              {"t = \\frac{d}{v} = \\frac{360 \\text{ km}}{240 \\text{ km/h}} = 1.5 \\text{ horas}"}
            </Formula>
            <p className="resultado">
              🎯 Respuesta 3: Habrían tardado 1.5 horas (1 hora y 30 minutos), es decir, la mitad del tiempo.
            </p>
          </div>

          <div className="conclusion">
            <p>
              💡 Conclusión: En un movimiento uniforme, si duplicas la velocidad, reduces el tiempo a la mitad. Son magnitudes inversamente proporcionales.
            </p>
          </div>
        </div>
      </Concept>

      <Concept 
        title="Problema 2: Corredor en una carrera" 
        color="green"
        icon="🏃"
      >
        <div className="enunciado-problema">
          <h4>📋 Situación:</h4>
          <p>
            Un corredor participa en una carrera de 100 metros. Arranca desde reposo (v=0) y acelera constantemente hasta alcanzar 10 m/s en 5 segundos.
          </p>
          <p>Preguntas:</p>
          <ul>
            <li>¿Cuál es su aceleración?</li>
            <li>¿Qué tipo de movimiento realiza?</li>
            <li>¿Qué distancia recorre en esos 5 segundos?</li>
          </ul>
        </div>

        <div className="solucion-problema">
          <h4>✅ Solución paso a paso:</h4>
          
          <div className="paso">
            <h5>📝 Paso 1: Identificar los datos</h5>
            <ul>
              <li>Velocidad inicial (v₀): 0 m/s (arranca desde reposo)</li>
              <li>Velocidad final (v): 10 m/s</li>
              <li>Tiempo (t): 5 segundos</li>
              <li>Aceleración (a): ¿?</li>
            </ul>
          </div>

          <div className="paso">
            <h5>🧮 Paso 2: Calcular la aceleración</h5>
            <p>
              La aceleración es el cambio de velocidad dividido por el tiempo:
            </p>
            <Formula>
              {"a = \\frac{v - v_0}{t}"}
            </Formula>
            <p>Sustituimos:</p>
            <Formula>
              {"a = \\frac{10 \\text{ m/s} - 0 \\text{ m/s}}{5 \\text{ s}} = \\frac{10}{5} = 2 \\text{ m/s}^2"}
            </Formula>
            <p className="resultado">
              🎯 Respuesta 1: La aceleración es 2 m/s². Esto significa que cada segundo, su velocidad aumenta en 2 m/s.
            </p>
          </div>

          <div className="paso">
            <h5>🔍 Paso 3: Identificar el tipo de movimiento</h5>
            <p>
              El corredor:
            </p>
            <ul>
              <li>Corre en línea recta: Trayectoria rectilínea</li>
              <li>Acelera constantemente: Velocidad no constante</li>
            </ul>
            <p className="resultado">
              🎯 Respuesta 2: Es un Movimiento Rectilíneo Uniformemente Acelerado (MRUA).
            </p>
          </div>

          <div className="paso">
            <h5>📏 Paso 4: Calcular la distancia recorrida</h5>
            <p>
              Para un MRUA con velocidad inicial cero, usamos:
            </p>
            <Formula>
              {"d = \\frac{1}{2} \\cdot a \\cdot t^2"}
            </Formula>
            <p>Sustituimos:</p>
            <Formula>
              {"d = \\frac{1}{2} \\cdot 2 \\text{ m/s}^2 \\cdot (5 \\text{ s})^2 = 1 \\cdot 25 = 25 \\text{ m}"}
            </Formula>
            <p className="resultado">
              🎯 Respuesta 3: Recorre 25 metros durante esos 5 segundos de aceleración.
            </p>
          </div>

          <div className="conclusion">
            <p>
              💡 Curiosidad: Si después de alcanzar 10 m/s mantuviera esa velocidad constante, recorrería los 75 metros restantes hasta completar los 100 m en solo 7.5 segundos adicionales.
            </p>
          </div>
        </div>
      </Concept>

      <Concept 
        title="Problema 3: Noria de feria" 
        color="purple"
        icon="🎡"
      >
        <div className="enunciado-problema">
          <h4>📋 Situación:</h4>
          <p>
            Una noria de feria tiene un radio de 10 metros y da una vuelta completa cada 30 segundos, girando a velocidad constante.
          </p>
          <p>Preguntas:</p>
          <ul>
            <li>¿Qué tipo de movimiento realiza?</li>
            <li>¿Cuál es el perímetro de la circunferencia?</li>
            <li>¿A qué velocidad se mueve una persona en la noria?</li>
          </ul>
        </div>

        <div className="solucion-problema">
          <h4>✅ Solución paso a paso:</h4>
          
          <div className="paso">
            <h5>📝 Paso 1: Identificar el tipo de movimiento</h5>
            <p>
              La noria:
            </p>
            <ul>
              <li>Gira en círculo: Trayectoria circular</li>
              <li>Velocidad constante: Da vueltas uniformemente</li>
            </ul>
            <p className="resultado">
              🎯 Respuesta 1: Es un Movimiento Circular Uniforme (MCU).
            </p>
          </div>

          <div className="paso">
            <h5>📏 Paso 2: Calcular el perímetro</h5>
            <p>
              El perímetro de una circunferencia se calcula con:
            </p>
            <Formula>
              {"P = 2 \\cdot \\pi \\cdot r"}
            </Formula>
            <p>Donde r es el radio (10 m). Sustituimos:</p>
            <Formula>
              {"P = 2 \\cdot 3.14 \\cdot 10 \\text{ m} = 62.8 \\text{ m}"}
            </Formula>
            <p className="resultado">
              🎯 Respuesta 2: El perímetro es aproximadamente 62.8 metros. Esta es la distancia que recorre una persona en cada vuelta completa.
            </p>
          </div>

          <div className="paso">
            <h5>🧮 Paso 3: Calcular la velocidad</h5>
            <p>
              La velocidad es la distancia recorrida (perímetro) dividida por el tiempo de una vuelta:
            </p>
            <Formula>
              {"v = \\frac{P}{t} = \\frac{62.8 \\text{ m}}{30 \\text{ s}} = 2.09 \\text{ m/s}"}
            </Formula>
            <p className="resultado">
              🎯 Respuesta 3: Una persona se mueve a aproximadamente 2.09 m/s (unos 7.5 km/h).
            </p>
          </div>

          <div className="conclusion">
            <p>
              💡 Nota interesante: Aunque la velocidad (rapidez) es constante, la dirección del movimiento cambia continuamente. Por eso, aunque parezca que no acelera, en realidad sí hay una aceleración centrípeta que cambia la dirección del movimiento (esto lo verás en cursos más avanzados).
            </p>
          </div>
        </div>
      </Concept>

      <Concept 
        title="Problema 4: Ascensor en un edificio" 
        color="red"
        icon="🛗"
      >
        <div className="enunciado-problema">
          <h4>📋 Situación:</h4>
          <p>
            Un ascensor sube desde la planta baja hasta el piso 15. Cada piso tiene una altura de 3 metros. El ascensor:
          </p>
          <ul>
            <li>Fase 1: Acelera durante 2 segundos hasta alcanzar 2 m/s</li>
            <li>Fase 2: Mantiene 2 m/s durante un tiempo</li>
            <li>Fase 3: Frena durante 2 segundos hasta detenerse</li>
          </ul>
          <p>Pregunta: ¿Cuánto tiempo dura el viaje completo?</p>
        </div>

        <div className="solucion-problema">
          <h4>✅ Solución paso a paso:</h4>
          
          <div className="paso">
            <h5>📝 Paso 1: Calcular la altura total</h5>
            <p>
              Hay 15 pisos de 3 metros cada uno:
            </p>
            <Formula>
              {"h = 15 \\times 3 \\text{ m} = 45 \\text{ m}"}
            </Formula>
            <p>El ascensor debe subir 45 metros en total.</p>
          </div>

          <div className="paso">
            <h5>📏 Paso 2: Distancia en Fase 1 (aceleración)</h5>
            <p>
              El ascensor arranca desde reposo (v₀ = 0) y alcanza v = 2 m/s en t = 2 s. La aceleración es:
            </p>
            <Formula>
              {"a = \\frac{2 \\text{ m/s} - 0}{2 \\text{ s}} = 1 \\text{ m/s}^2"}
            </Formula>
            <p>La distancia recorrida en esta fase:</p>
            <Formula>
              {"d_1 = \\frac{1}{2} \\cdot a \\cdot t^2 = \\frac{1}{2} \\cdot 1 \\cdot 2^2 = 2 \\text{ m}"}
            </Formula>
            <p>Recorre 2 metros mientras acelera.</p>
          </div>

          <div className="paso">
            <h5>🛑 Paso 3: Distancia en Fase 3 (frenado)</h5>
            <p>
              Por simetría (mismo tiempo, misma aceleración pero en sentido contrario), en la fase de frenado también recorre:
            </p>
            <Formula>
              {"d_3 = 2 \\text{ m}"}
            </Formula>
          </div>

          <div className="paso">
            <h5>➡️ Paso 4: Distancia en Fase 2 (velocidad constante)</h5>
            <p>
              La distancia que falta por recorrer es:
            </p>
            <Formula>
              {"d_2 = 45 - 2 - 2 = 41 \\text{ m}"}
            </Formula>
            <p>
              A velocidad constante de 2 m/s, el tiempo necesario es:
            </p>
            <Formula>
              {"t_2 = \\frac{d_2}{v} = \\frac{41 \\text{ m}}{2 \\text{ m/s}} = 20.5 \\text{ s}"}
            </Formula>
          </div>

          <div className="paso">
            <h5>⏱️ Paso 5: Tiempo total</h5>
            <p>
              Sumamos los tiempos de las tres fases:
            </p>
            <Formula>
              {"t_{total} = t_1 + t_2 + t_3 = 2 + 20.5 + 2 = 24.5 \\text{ s}"}
            </Formula>
            <p className="resultado">
              🎯 Respuesta: El viaje completo dura 24.5 segundos (unos 25 segundos).
            </p>
          </div>

          <div className="conclusion">
            <p>
              💡 Reflexión: Este problema combina tres tipos de movimiento (MRUA + MRU + MRUA). En la vida real, la mayoría de movimientos son combinaciones de varios tipos básicos.
            </p>
          </div>
        </div>
      </Concept>

      <Concept 
        title="Comparando todos los movimientos" 
        color="gray"
        icon="📊"
      >
        <p>
          Ahora que hemos analizado diferentes movimientos, comparemos sus características:
        </p>

        <div className="tabla-comparativa">
          <table>
            <thead>
              <tr>
                <th>Situación</th>
                <th>Tipo de movimiento</th>
                <th>Característica principal</th>
                <th>Velocidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>🚙 Coche en autopista</td>
                <td>MRU</td>
                <td>Línea recta, velocidad constante</td>
                <td>120 km/h (constante)</td>
              </tr>
              <tr>
                <td>🏃 Corredor acelerando</td>
                <td>MRUA</td>
                <td>Línea recta, acelera constantemente</td>
                <td>De 0 a 10 m/s</td>
              </tr>
              <tr>
                <td>🎡 Noria girando</td>
                <td>MCU</td>
                <td>Trayectoria circular, velocidad constante</td>
                <td>2.09 m/s (constante)</td>
              </tr>
              <tr>
                <td>🛗 Ascensor</td>
                <td>Combinado</td>
                <td>Acelera + constante + frena</td>
                <td>Variable (0 → 2 → 0 m/s)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="observaciones">
          <h4>🔍 Observaciones importantes:</h4>
          <ul>
            <li>
              MRU: Es el más simple. Velocidad constante, sin aceleración. Fácil de calcular.
            </li>
            <li>
              MRUA: Hay aceleración constante. Usamos fórmulas con t² (cuadráticas).
            </li>
            <li>
              MCU: Aunque la rapidez es constante, la dirección cambia continuamente.
            </li>
            <li>
              Combinados: La mayoría de movimientos reales son combinaciones. Se resuelven por fases.
            </li>
          </ul>
        </div>
      </Concept>

      <div className="theory-applications-section">
        <h2><span>🚀</span> Aplicaciones del Análisis de Movimientos</h2>
        
        <h4>Sistemas de Navegación y GPS</h4>
        <p>
          Los dispositivos GPS analizan continuamente tu movimiento para calcular velocidad, tiempo estimado de llegada y rutas óptimas. Utilizan los mismos principios que hemos estudiado: distancia, velocidad y tiempo.
        </p>

        <h4>Diseño de Montañas Rusas</h4>
        <p>
          Los ingenieros calculan meticulosamente cada fase del recorrido: aceleraciones, velocidades máximas y frenadas. Deben garantizar que las fuerzas G sean emocionantes pero seguras, aplicando las ecuaciones del MRUA en cada sección.
        </p>

        <h4>Control de Tráfico Aéreo</h4>
        <p>
          Los controladores monitorizan la velocidad y trayectoria de cada avión en tiempo real. Calculan distancias de seguridad y tiempos de llegada usando las mismas fórmulas de movimiento que hemos visto.
        </p>

        <h4>Robótica y Automatización</h4>
        <p>
          Los robots industriales programan sus movimientos con precisión milimétrica. Cada brazo robótico sigue trayectorias calculadas, acelerando y frenando suavemente para evitar daños y maximizar eficiencia.
        </p>

        <h4>Deportes de Alto Rendimiento</h4>
        <p>
          Los entrenadores analizan el movimiento de atletas usando cámaras de alta velocidad y sensores. Estudian aceleraciones, velocidades máximas y técnicas de frenado para optimizar el rendimiento deportivo.
        </p>
      </div>

      <div className="theory-history-section">
        <h2><span>📜</span> Historia del Estudio del Movimiento</h2>
        <p>
          El estudio sistemático del movimiento comenzó con Galileo Galilei en el siglo XVII. Galileo fue el primero en realizar experimentos cuantitativos sobre el movimiento, rodando bolas por planos inclinados para estudiar la aceleración.
        </p>
        <p>
          Isaac Newton (1643-1727) revolucionó nuestra comprensión del movimiento con sus tres leyes. Su obra "Principia Mathematica" estableció las bases matemáticas para describir cualquier tipo de movimiento, desde una manzana cayendo hasta los planetas orbitando el Sol.
        </p>
        <p>
          Durante la Revolución Industrial, el estudio del movimiento se volvió crucial para diseñar máquinas eficientes. Los ingenieros necesitaban calcular velocidades de engranajes, aceleraciones de pistones y trayectorias de proyectiles.
        </p>
        <p>
          En el siglo XX, la fotografía de alta velocidad permitió estudiar movimientos demasiado rápidos para el ojo humano. Eadweard Muybridge capturó el galope de caballos en 1878, demostrando que las cuatro patas se levantan del suelo simultáneamente.
        </p>
        <p>
          Hoy, sensores y computadoras analizan movimientos en tiempo real con precisión extraordinaria. Desde airbags que se despliegan en milisegundos hasta satélites que ajustan su órbita, el análisis del movimiento es fundamental en la tecnología moderna.
        </p>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span>💡</span> Curiosidades sobre Movimientos Cotidianos</h2>
        <p>
          Los ascensores modernos de rascacielos pueden alcanzar velocidades de 20 m/s (72 km/h). El ascensor del Burj Khalifa en Dubái sube 140 pisos en menos de un minuto, acelerando y frenando tan suavemente que apenas lo notas.
        </p>
        <p>
          Usain Bolt, el hombre más rápido del mundo, alcanzó 12.4 m/s (44.6 km/h) en su récord de 100 metros. Curiosamente, su aceleración máxima no fue al inicio sino entre los 60 y 80 metros, cuando ya llevaba velocidad.
        </p>
        <p>
          Las montañas rusas más rápidas del mundo superan los 200 km/h. La Formula Rossa en Abu Dhabi acelera de 0 a 240 km/h en solo 4.9 segundos, una aceleración similar a la de un caza de combate.
        </p>
        <p>
          Los trenes bala japoneses (Shinkansen) son tan precisos que su retraso promedio es de solo 18 segundos al año. Esto requiere cálculos extremadamente precisos de aceleración, velocidad de crucero y frenado en cada trayecto.
        </p>
        <p>
          La Estación Espacial Internacional orbita la Tierra a 7.66 km/s (27,600 km/h), completando una vuelta cada 90 minutos. A esa velocidad, los astronautas ven 16 amaneceres cada día.
        </p>
      </div>

      <div className="formula-card">
        <h3>Resumen: Movimientos Cotidianos</h3>
        <p>
          La física nos ayuda a entender y predecir movimientos cotidianos. Con unas pocas fórmulas básicas podemos resolver situaciones muy variadas: desde un viaje en coche hasta el funcionamiento de un ascensor.
        </p>
        <p>
          Es importante identificar el tipo de movimiento antes de empezar a calcular: MRU (velocidad constante), MRUA (aceleración constante), MCU (circular uniforme) o combinaciones de estos. Los movimientos reales suelen ser combinaciones de varios tipos básicos.
        </p>
        <p>
          Las fórmulas clave son: v = d/t para velocidad, a = (v-v₀)/t para aceleración, y d = ½at² para distancia en MRUA. Con práctica, aprenderás a identificar qué tipo de movimiento realizan los objetos en tu día a día y podrás aplicar la física para entenderlos mejor.
        </p>
      </div>
    </>
  );
};

export default MovimientosCotidianos;
