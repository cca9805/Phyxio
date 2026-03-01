import { TheorySection, Concept, Example } from '../../../../../components/TheoryV2';

export const metadata = {
  titulo: "Gráficas Básicas del Movimiento",
  descripcion: "Representación gráfica del movimiento",
  isTheoryOnly: true,
  educationLevel: "ESO",
  levels: ['ESO']
};

const GraficasBasicas = () => {
  return (
    <>
      <Concept 
        title="¿Por qué usar gráficas?" 
        color="green"
        icon="📊"
      >
        <p>
          Las gráficas son una herramienta muy poderosa para visualizar y entender el movimiento. Con solo un vistazo, podemos saber si un objeto está parado, moviéndose rápido, acelerando, frenando...
        </p>
        <p>
          Es como "ver una fotografía del movimiento". En este tema aprenderemos a leer e interpretar las gráficas más importantes de la cinemática.
        </p>
        <div className="destacado">
          <p>
            💡 Importante: No te preocupes por calcular cosas complicadas. Aquí solo aprenderemos a interpretar visualmente lo que nos dicen las gráficas.
          </p>
        </div>
      </Concept>

      <Concept 
        title="Gráfica Posición-Tiempo (x-t)" 
        color="blue"
        icon="📍"
      >
        <p>
          La gráfica posición-tiempo (también llamada x-t o s-t) nos muestra dónde está el objeto en cada momento.
        </p>
        <ul>
          <li>Eje horizontal (X): Representa el tiempo (t)</li>
          <li>Eje vertical (Y): Representa la posición (x o s)</li>
        </ul>

        <div className="casos-grafica">
          <div className="caso-grafico">
            <h4>🚫 Objeto en reposo (parado)</h4>
            <p>
              Si un objeto está parado, su posición no cambia con el tiempo. La gráfica es una línea horizontal.
            </p>
            <div className="grafica-visual">
              <div className="ejes">
                <div className="eje-y">Posición (x)</div>
                <div className="grafico-contenido">
                  <div className="linea-horizontal">━━━━━━━━━━━━━</div>
                  <div className="etiqueta">Línea horizontal = objeto parado</div>
                </div>
                <div className="eje-x">Tiempo (t) →</div>
              </div>
            </div>
            <p className="interpretacion">
              Interpretación: El objeto está siempre en la misma posición. No hay movimiento.
            </p>
          </div>

          <div className="caso-grafico">
            <h4>➡️ Movimiento uniforme (velocidad constante)</h4>
            <p>
              Si el objeto se mueve a velocidad constante, la gráfica es una línea recta inclinada.
            </p>
            <div className="grafica-visual">
              <div className="ejes">
                <div className="eje-y">Posición (x)</div>
                <div className="grafico-contenido">
                  <div className="linea-inclinada">╱</div>
                  <div className="etiqueta">Línea inclinada = velocidad constante</div>
                </div>
                <div className="eje-x">Tiempo (t) →</div>
              </div>
            </div>
            <p className="interpretacion">
              Interpretación: Cada segundo que pasa, el objeto recorre la misma distancia. Movimiento Rectilíneo Uniforme (MRU).
            </p>
            <div className="nota-pendiente">
              <p>
                🔍 Detalle: La inclinación (pendiente) de la línea nos indica la velocidad:
              </p>
              <ul>
                <li>Más inclinada: Mayor velocidad</li>
                <li>Menos inclinada: Menor velocidad</li>
              </ul>
            </div>
          </div>

          <div className="caso-grafico">
            <h4>📈 Movimiento acelerado</h4>
            <p>
              Si el objeto acelera (aumenta su velocidad), la gráfica es una curva que cada vez se inclina más.
            </p>
            <div className="grafica-visual">
              <div className="ejes">
                <div className="eje-y">Posición (x)</div>
                <div className="grafico-contenido">
                  <div className="curva-acelerada">⌐</div>
                  <div className="etiqueta">Curva hacia arriba = aceleración positiva</div>
                </div>
                <div className="eje-x">Tiempo (t) →</div>
              </div>
            </div>
            <p className="interpretacion">
              Interpretación: Cada segundo que pasa, el objeto recorre MÁS distancia que en el segundo anterior. Está acelerando.
            </p>
          </div>

          <div className="caso-grafico">
            <h4>📉 Movimiento decelerado (frenando)</h4>
            <p>
              Si el objeto frena (disminuye su velocidad), la gráfica es una curva que cada vez se inclina menos, hasta hacerse horizontal.
            </p>
            <div className="grafica-visual">
              <div className="ejes">
                <div className="eje-y">Posición (x)</div>
                <div className="grafico-contenido">
                  <div className="curva-frenada">⌐̃</div>
                  <div className="etiqueta">Curva que se aplana = frenando</div>
                </div>
                <div className="eje-x">Tiempo (t) →</div>
              </div>
            </div>
            <p className="interpretacion">
              Interpretación: Cada segundo que pasa, el objeto recorre MENOS distancia, hasta detenerse (línea horizontal).
            </p>
          </div>
        </div>

        <Example title="Ejemplo práctico: Coche en ciudad" icon="🚗">
          <p>
            Imagina un coche que arranca desde un semáforo, circula a velocidad constante, y luego frena en otro semáforo:
          </p>
          <div className="ejemplo-completo">
            <div className="fase">
              Fase 1 (0-5s): Arranca → Curva hacia arriba (acelera)
            </div>
            <div className="fase">
              Fase 2 (5-15s): Circula → Línea recta inclinada (velocidad constante)
            </div>
            <div className="fase">
              Fase 3 (15-20s): Frena → Curva que se aplana (decelera)
            </div>
            <div className="fase">
              Fase 4 (20s en adelante): Parado → Línea horizontal
            </div>
          </div>
        </Example>
      </Concept>

      <Concept 
        title="Gráfica Velocidad-Tiempo (v-t)" 
        color="purple"
        icon="🏃"
      >
        <p>
          La gráfica velocidad-tiempo (también llamada v-t) nos muestra qué tan rápido va el objeto en cada momento.
        </p>
        <ul>
          <li>Eje horizontal (X): Representa el tiempo (t)</li>
          <li>Eje vertical (Y): Representa la velocidad (v)</li>
        </ul>

        <div className="casos-grafica">
          <div className="caso-grafico">
            <h4>🚫 Objeto en reposo</h4>
            <p>
              Si un objeto está parado, su velocidad es cero. La gráfica es una línea sobre el eje horizontal (v = 0).
            </p>
            <div className="grafica-visual">
              <div className="ejes">
                <div className="eje-y">Velocidad (v)</div>
                <div className="grafico-contenido">
                  <div className="linea-cero">━━━━━━━━━━━━━ (v = 0)</div>
                  <div className="etiqueta">Línea en v=0 = objeto parado</div>
                </div>
                <div className="eje-x">Tiempo (t) →</div>
              </div>
            </div>
          </div>

          <div className="caso-grafico">
            <h4>➡️ Movimiento uniforme</h4>
            <p>
              Si el objeto se mueve a velocidad constante, la gráfica es una línea horizontal por encima de v=0.
            </p>
            <div className="grafica-visual">
              <div className="ejes">
                <div className="eje-y">Velocidad (v)</div>
                <div className="grafico-contenido">
                  <div className="linea-horizontal-v">━━━━━━━━━━━━━</div>
                  <div className="etiqueta">Línea horizontal = velocidad constante (MRU)</div>
                </div>
                <div className="eje-x">Tiempo (t) →</div>
              </div>
            </div>
            <p className="interpretacion">
              Interpretación: La velocidad no cambia. El objeto siempre va a la misma rapidez.
            </p>
          </div>

          <div className="caso-grafico">
            <h4>📈 Aceleración constante (MRUA)</h4>
            <p>
              Si el objeto acelera de manera constante, la gráfica es una línea recta inclinada hacia arriba.
            </p>
            <div className="grafica-visual">
              <div className="ejes">
                <div className="eje-y">Velocidad (v)</div>
                <div className="grafico-contenido">
                  <div className="linea-inclinada-v">╱</div>
                  <div className="etiqueta">Línea inclinada hacia arriba = acelerando</div>
                </div>
                <div className="eje-x">Tiempo (t) →</div>
              </div>
            </div>
            <p className="interpretacion">
              Interpretación: La velocidad aumenta de forma constante. Cada segundo, gana la misma cantidad de velocidad.
            </p>
            <div className="nota-pendiente">
              <p>
                🔍 Detalle: La inclinación de la línea nos indica la aceleración:
              </p>
              <ul>
                <li>Más inclinada: Mayor aceleración</li>
                <li>Menos inclinada: Menor aceleración</li>
              </ul>
            </div>
          </div>

          <div className="caso-grafico">
            <h4>📉 Frenada constante</h4>
            <p>
              Si el objeto frena de manera constante, la gráfica es una línea recta inclinada hacia abajo.
            </p>
            <div className="grafica-visual">
              <div className="ejes">
                <div className="eje-y">Velocidad (v)</div>
                <div className="grafico-contenido">
                  <div className="linea-declinada-v">\</div>
                  <div className="etiqueta">Línea inclinada hacia abajo = frenando</div>
                </div>
                <div className="eje-x">Tiempo (t) →</div>
              </div>
            </div>
            <p className="interpretacion">
              Interpretación: La velocidad disminuye de forma constante hasta llegar a cero (se detiene).
            </p>
          </div>
        </div>

        <Example title="Ejemplo práctico: Tren en estación" icon="🚂">
          <p>
            Un tren que arranca desde una estación, viaja a velocidad constante, y luego frena al llegar a la siguiente estación:
          </p>
          <div className="ejemplo-completo">
            <div className="fase">
              Fase 1 (0-30s): Arranca → Línea inclinada hacia arriba (acelera hasta 80 km/h)
            </div>
            <div className="fase">
              Fase 2 (30-300s): Viaja → Línea horizontal a 80 km/h (velocidad constante)
            </div>
            <div className="fase">
              Fase 3 (300-330s): Frena → Línea inclinada hacia abajo (decelera hasta 0 km/h)
            </div>
            <div className="fase">
              Fase 4 (330s en adelante): Parado → Línea en v=0
            </div>
          </div>
        </Example>
      </Concept>

      <Concept 
        title="Comparando ambas gráficas" 
        color="orange"
        icon="🔄"
      >
        <p>
          Es muy útil ver cómo se relacionan las gráficas x-t y v-t para el mismo movimiento:
        </p>

        <div className="comparacion-tabla">
          <table>
            <thead>
              <tr>
                <th>Situación</th>
                <th>Gráfica x-t</th>
                <th>Gráfica v-t</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Objeto parado</td>
                <td>Línea horizontal (posición constante)</td>
                <td>Línea en v=0 (velocidad cero)</td>
              </tr>
              <tr>
                <td>Velocidad constante (MRU)</td>
                <td>Línea recta inclinada</td>
                <td>Línea horizontal (v = constante)</td>
              </tr>
              <tr>
                <td>Acelerando (MRUA)</td>
                <td>Curva hacia arriba (parábola)</td>
                <td>Línea recta inclinada hacia arriba</td>
              </tr>
              <tr>
                <td>Frenando</td>
                <td>Curva que se aplana</td>
                <td>Línea recta inclinada hacia abajo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="nota-importante">
          <p>
            💡 Truco para recordar:
          </p>
          <ul>
            <li>
              Si la gráfica x-t es una línea recta → la gráfica v-t es horizontal (velocidad constante)
            </li>
            <li>
              Si la gráfica x-t es curva → la gráfica v-t es inclinada (hay aceleración)
            </li>
          </ul>
        </div>
      </Concept>

      <Concept 
        title="Practica la interpretación" 
        color="red"
        icon="🎯"
      >
        <p>
          Aquí tienes algunas situaciones. Intenta imaginar cómo serían sus gráficas:
        </p>

        <div className="ejercicios-practica">
          <div className="ejercicio">
            <h4>Ejercicio 1: 🚴 Ciclista</h4>
            <p>
              Un ciclista está parado en un semáforo. Cuando el semáforo se pone en verde, empieza a pedalear y alcanza rápidamente 20 km/h, y luego mantiene esa velocidad durante todo el trayecto.
            </p>
            <details>
              <summary>Ver respuesta</summary>
              <div className="respuesta">
                <p>Gráfica x-t:</p>
                <ul>
                  <li>Primero: línea horizontal (parado)</li>
                  <li>Luego: curva hacia arriba (acelera)</li>
                  <li>Finalmente: línea recta inclinada (velocidad constante)</li>
                </ul>
                <p>Gráfica v-t:</p>
                <ul>
                  <li>Primero: línea en v=0 (parado)</li>
                  <li>Luego: línea inclinada hacia arriba (acelera)</li>
                  <li>Finalmente: línea horizontal en v=20 km/h (constante)</li>
                </ul>
              </div>
            </details>
          </div>

          <div className="ejercicio">
            <h4>Ejercicio 2: 🛗 Ascensor</h4>
            <p>
              Un ascensor sube del piso 0 al piso 10 a velocidad constante, y luego se detiene.
            </p>
            <details>
              <summary>Ver respuesta</summary>
              <div className="respuesta">
                <p>Gráfica x-t:</p>
                <ul>
                  <li>Sube: línea recta inclinada hacia arriba</li>
                  <li>Se detiene: línea horizontal (permanece en piso 10)</li>
                </ul>
                <p>Gráfica v-t:</p>
                <ul>
                  <li>Sube: línea horizontal (velocidad constante positiva)</li>
                  <li>Se detiene: línea que baja hasta v=0</li>
                </ul>
              </div>
            </details>
          </div>

          <div className="ejercicio">
            <h4>Ejercicio 3: ⚽ Pelota rodando</h4>
            <p>
              Empujas una pelota por el suelo. Al principio va rápido, pero por la fricción va perdiendo velocidad hasta detenerse.
            </p>
            <details>
              <summary>Ver respuesta</summary>
              <div className="respuesta">
                <p>Gráfica x-t:</p>
                <ul>
                  <li>Curva que cada vez se inclina menos (se aplana) hasta ser horizontal</li>
                </ul>
                <p>Gráfica v-t:</p>
                <ul>
                  <li>Línea inclinada hacia abajo desde una velocidad inicial hasta v=0</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </Concept>

      <div className="theory-applications-section">
        <h2><span>📱</span> Aplicaciones de las Gráficas del Movimiento</h2>
        
        <h4>Análisis de Accidentes de Tráfico</h4>
        <p>
          Los investigadores de accidentes utilizan gráficas velocidad-tiempo para reconstruir lo que sucedió. Las marcas de frenado en el asfalto permiten calcular la velocidad inicial y determinar si el conductor iba demasiado rápido o frenó a tiempo.
        </p>

        <h4>Entrenamiento Deportivo</h4>
        <p>
          Los entrenadores de atletismo analizan gráficas de velocidad de los corredores para identificar en qué fase de la carrera pierden velocidad. Esto permite diseñar entrenamientos específicos para mejorar la aceleración inicial o mantener la velocidad en los últimos metros.
        </p>

        <h4>Sistemas de Navegación GPS</h4>
        <p>
          Los dispositivos GPS registran continuamente tu posición y tiempo, generando gráficas posición-tiempo. Estas gráficas permiten calcular tu velocidad promedio, detectar atascos de tráfico y estimar tiempos de llegada.
        </p>

        <h4>Control de Ascensores</h4>
        <p>
          Los sistemas de control de ascensores utilizan gráficas de movimiento para programar aceleraciones y frenadas suaves. Un ascensor bien programado acelera gradualmente, mantiene velocidad constante y frena suavemente para evitar incomodidad a los pasajeros.
        </p>

        <h4>Montañas Rusas</h4>
        <p>
          Los diseñadores de montañas rusas crean gráficas detalladas de velocidad y aceleración para cada sección del recorrido. Esto garantiza que la atracción sea emocionante pero segura, controlando las fuerzas G que experimentan los pasajeros.
        </p>
      </div>

      <div className="theory-history-section">
        <h2><span>📜</span> Historia de las Gráficas del Movimiento</h2>
        <p>
          Las gráficas como herramienta para representar el movimiento tienen una historia fascinante. Galileo Galilei (1564-1642) fue pionero en usar representaciones geométricas para estudiar el movimiento, aunque no utilizaba gráficas en el sentido moderno.
        </p>
        <p>
          René Descartes (1596-1650) desarrolló el sistema de coordenadas cartesianas que lleva su nombre, estableciendo la base matemática para representar relaciones entre variables mediante gráficas. Este sistema revolucionó la forma de visualizar conceptos matemáticos y físicos.
        </p>
        <p>
          En el siglo XVII, Isaac Newton utilizó representaciones gráficas para ilustrar sus leyes del movimiento. Aunque sus gráficas eran más rudimentarias que las actuales, demostraron el poder de la visualización para comprender fenómenos físicos complejos.
        </p>
        <p>
          Durante la Revolución Industrial del siglo XIX, las gráficas del movimiento se volvieron esenciales para diseñar máquinas y sistemas de transporte. Los ingenieros ferroviarios creaban gráficas detalladas de velocidad y posición para optimizar horarios y garantizar la seguridad.
        </p>
        <p>
          En el siglo XX, con la llegada de las computadoras, las gráficas del movimiento se volvieron herramientas estándar en física, ingeniería y educación. Los sensores modernos pueden registrar miles de datos por segundo, generando gráficas extremadamente precisas del movimiento de cualquier objeto.
        </p>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span>💡</span> Curiosidades sobre Gráficas del Movimiento</h2>
        <p>
          Los velocímetros de los coches modernos registran continuamente la velocidad y pueden generar gráficas del viaje completo. Algunos seguros de automóviles utilizan estos datos para ofrecer descuentos a conductores que mantienen velocidades seguras y aceleran/frenan suavemente.
        </p>
        <p>
          En las carreras de Fórmula 1, los ingenieros analizan cientos de gráficas en tiempo real: velocidad, aceleración, temperatura de frenos, presión de neumáticos. Una pequeña anomalía en una gráfica puede indicar un problema mecánico antes de que cause un accidente.
        </p>
        <p>
          Los smartphones modernos contienen acelerómetros que registran constantemente el movimiento del dispositivo. Las aplicaciones de fitness utilizan estos datos para generar gráficas de tu actividad: pasos dados, pisos subidos, velocidad de carrera, etc.
        </p>
        <p>
          Durante el alunizaje del Apollo 11 en 1969, los controladores de misión monitoreaban gráficas de velocidad y altitud en tiempo real. Neil Armstrong tuvo que tomar control manual cuando las gráficas mostraron que el módulo lunar se dirigía a un cráter peligroso.
        </p>
        <p>
          Los sismógrafos generan gráficas del movimiento del suelo durante terremotos. Estas gráficas no solo registran la intensidad del terremoto, sino que también permiten determinar su epicentro triangulando datos de múltiples estaciones.
        </p>
      </div>

      <div className="formula-card">
        <h3>Resumen: Gráficas Básicas del Movimiento</h3>
        <p>
          Las gráficas son herramientas visuales poderosas para entender el movimiento. La gráfica posición-tiempo (x-t) muestra dónde está un objeto en cada momento, mientras que la gráfica velocidad-tiempo (v-t) muestra qué tan rápido se mueve.
        </p>
        <p>
          En la gráfica x-t: una línea horizontal indica reposo, una línea recta inclinada indica velocidad constante, y una curva indica aceleración. En la gráfica v-t: una línea en v=0 indica reposo, una línea horizontal indica velocidad constante, y una línea inclinada indica aceleración.
        </p>
        <p>
          Con práctica, aprenderás a "leer" estas gráficas intuitivamente, como un lenguaje visual del movimiento. Esta habilidad es fundamental no solo en física, sino en muchas aplicaciones tecnológicas y científicas modernas.
        </p>
      </div>
    </>
  );
};

export default GraficasBasicas;
