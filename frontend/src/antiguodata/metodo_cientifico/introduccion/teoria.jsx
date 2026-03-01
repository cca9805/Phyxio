import { TheorySection, Concept, Important, Example } from '../../../components/TheoryV2';

export const metadata = {
  titulo: "Introducción al Método Científico",
  descripcion: "Fundamentos del método científico y su aplicación en la física",
  isTheoryOnly: true,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const MetodoCientificoTheory = () => {
  return (
    <>
      <TheorySection title="¿Qué es el Método Científico?">
        <p>
          El método científico es un proceso sistemático para adquirir conocimientos sobre el mundo natural. 
          Es la base de toda investigación en física y otras ciencias. A diferencia de otras formas de 
          conocimiento, el método científico se basa en la observación, la experimentación y la verificación 
          empírica.
        </p>
        
        <Important>
          <p>
            El método científico no es un conjunto rígido de pasos, sino una forma de pensar y trabajar 
            que garantiza que nuestras conclusiones sean objetivas y reproducibles. Es autocorrectivo: 
            los errores se descubren y corrigen mediante la experimentación y la revisión por pares.
          </p>
        </Important>

        <p>
          El método científico ha sido fundamental en el desarrollo de la ciencia moderna, permitiendo 
          distinguir entre conocimiento científico y creencias, supersticiones o pseudociencia.
        </p>
      </TheorySection>

      <TheorySection title="Pasos del Método Científico">
        <Concept title="1. Observación">
          <p>
            Todo comienza con la observación cuidadosa y detallada de un fenómeno o problema. La observación 
            puede ser casual o sistemática, pero debe ser precisa y objetiva.
          </p>
          <p>
            Tipos de observación:
          </p>
          <ul>
            <li>Cualitativa: Describe características (color, forma, comportamiento)</li>
            <li>Cuantitativa: Mide propiedades con números (longitud, masa, tiempo)</li>
          </ul>
          <Example>
            <p>
              Observación: Los objetos caen al suelo cuando los soltamos. Observamos que algunos caen 
              más rápido que otros, y que la velocidad parece aumentar durante la caída.
            </p>
          </Example>
        </Concept>

        <Concept title="2. Pregunta o Problema">
          <p>
            A partir de la observación, formulamos una pregunta específica que queremos responder. Una 
            buena pregunta científica es clara, medible y puede investigarse mediante experimentos.
          </p>
          <p>
            Características de una buena pregunta:
          </p>
          <ul>
            <li>Específica y clara</li>
            <li>Puede responderse mediante observación o experimentación</li>
            <li>No es demasiado amplia ni demasiado estrecha</li>
            <li>Conduce a hipótesis comprobables</li>
          </ul>
          <Example>
            <p>
              Preguntas: ¿Por qué caen los objetos? ¿Caen todos a la misma velocidad? ¿Cómo afecta la 
              masa a la velocidad de caída? ¿Qué factores influyen en el tiempo de caída?
            </p>
          </Example>
        </Concept>

        <Concept title="3. Hipótesis">
          <p>
            La hipótesis es una explicación provisional del fenómeno, basada en conocimientos previos y 
            observaciones. Debe ser comprobable mediante experimentos y falsable (puede ser refutada).
          </p>
          <p>
            Una buena hipótesis:
          </p>
          <ul>
            <li>Es específica y clara</li>
            <li>Se basa en conocimiento previo</li>
            <li>Puede probarse experimentalmente</li>
            <li>Hace predicciones verificables</li>
          </ul>
          <Example>
            <p>
              Hipótesis: "Todos los objetos caen con la misma aceleración, independientemente de su masa, 
              cuando se desprecia la resistencia del aire". Esta hipótesis puede probarse midiendo tiempos 
              de caída para objetos de diferentes masas.
            </p>
          </Example>
        </Concept>

        <Concept title="4. Experimentación">
          <p>
            Diseñamos y realizamos experimentos para poner a prueba la hipótesis. El experimento debe ser:
          </p>
          <ul>
            <li>Reproducible: Otros científicos deben poder repetirlo y obtener resultados similares</li>
            <li>Controlado: Solo cambiamos una variable a la vez (variable independiente)</li>
            <li>Medible: Obtenemos datos cuantitativos precisos</li>
            <li>Objetivo: Los resultados no dependen de quién realiza el experimento</li>
          </ul>
          <p>
            Durante la experimentación, medimos la variable dependiente mientras variamos la independiente 
            y mantenemos constantes todas las demás variables (variables controladas).
          </p>
        </Concept>

        <Concept title="5. Análisis de Resultados">
          <p>
            Analizamos los datos obtenidos usando matemáticas, gráficas y estadística. Buscamos patrones, 
            relaciones y tendencias. Este análisis incluye:
          </p>
          <ul>
            <li>Organización de datos en tablas</li>
            <li>Representación gráfica</li>
            <li>Cálculo de promedios, desviaciones y errores</li>
            <li>Identificación de relaciones matemáticas</li>
            <li>Detección de valores atípicos o errores</li>
          </ul>
        </Concept>

        <Concept title="6. Conclusión">
          <p>
            Determinamos si los resultados apoyan o refutan la hipótesis. Es importante recordar que:
          </p>
          <ul>
            <li>Un experimento no "demuestra" una hipótesis, solo la apoya o refuta</li>
            <li>Si la hipótesis es refutada, se formula una nueva y se repite el proceso</li>
            <li>Si la hipótesis es apoyada, se realizan más experimentos para confirmarla</li>
            <li>Los resultados negativos también son valiosos: enseñan qué no funciona</li>
          </ul>
        </Concept>

        <Concept title="7. Comunicación">
          <p>
            Los resultados se comparten con la comunidad científica mediante informes, artículos y 
            presentaciones para que otros puedan:
          </p>
          <ul>
            <li>Verificar los resultados repitiendo el experimento</li>
            <li>Usar el conocimiento en sus propias investigaciones</li>
            <li>Criticar y mejorar el trabajo</li>
            <li>Construir sobre estos resultados</li>
          </ul>
          <p>
            La comunicación científica es esencial: el conocimiento no avanza si no se comparte.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Variables en el Experimento">
        <Concept title="Variable Independiente">
          <p>
            Es la variable que el experimentador cambia deliberadamente para observar su efecto. Se coloca 
            en el eje X de las gráficas.
          </p>
          <p>
            Características:
          </p>
          <ul>
            <li>Es la causa que estamos investigando</li>
            <li>La controlamos directamente</li>
            <li>Variamos sus valores de forma sistemática</li>
          </ul>
          <Example>
            <p>
              En un experimento de caída libre, la variable independiente podría ser la altura desde la 
              que se suelta el objeto, o la masa del objeto.
            </p>
          </Example>
        </Concept>

        <Concept title="Variable Dependiente">
          <p>
            Es la variable que cambia como respuesta a la variable independiente. Es lo que medimos. 
            Se coloca en el eje Y de las gráficas.
          </p>
          <p>
            Características:
          </p>
          <ul>
            <li>Es el efecto que observamos</li>
            <li>No la controlamos directamente</li>
            <li>Su valor depende de la variable independiente</li>
          </ul>
          <Example>
            <p>
              En un experimento de caída libre, la variable dependiente podría ser el tiempo que tarda 
              en caer, o la velocidad al llegar al suelo.
            </p>
          </Example>
        </Concept>

        <Concept title="Variables Controladas">
          <p>
            Son las variables que se mantienen constantes durante el experimento para evitar que afecten 
            los resultados. Solo queremos que la variable independiente cause cambios en la dependiente.
          </p>
          <p>
            Importancia:
          </p>
          <ul>
            <li>Permiten aislar el efecto de la variable independiente</li>
            <li>Garantizan que los cambios observados se deben a la variable que estamos estudiando</li>
            <li>Hacen el experimento válido y confiable</li>
          </ul>
          <Example>
            <p>
              En un experimento de caída libre, las variables controladas incluyen: la altura desde la 
              que se sueltan los objetos, la presencia de aire (o hacer el experimento en vacío), la 
              forma de los objetos, la temperatura ambiente, etc.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Teorías y Leyes Científicas">
        <Concept title="Ley Científica">
          <p>
            Una ley describe qué sucede en la naturaleza. Es una relación matemática entre variables que 
            se ha verificado repetidamente en diferentes condiciones. Las leyes son descriptivas, no 
            explicativas.
          </p>
          <p>
            Características:
          </p>
          <ul>
            <li>Describe patrones observados en la naturaleza</li>
            <li>Se expresa matemáticamente</li>
            <li>Se ha verificado en múltiples experimentos</li>
            <li>Es universal (aplica en todas las condiciones donde se ha probado)</li>
            <li>No explica por qué ocurre, solo describe cómo ocurre</li>
          </ul>
          <Example>
            <p>
              Segunda Ley de Newton: F = ma. Describe la relación entre fuerza, masa y aceleración, 
              pero no explica por qué existe esta relación.
            </p>
          </Example>
        </Concept>

        <Concept title="Teoría Científica">
          <p>
            Una teoría explica por qué sucede algo. Es una explicación amplia y bien fundamentada de 
            algún aspecto del mundo natural, respaldada por múltiples líneas de evidencia.
          </p>
          <p>
            Características:
          </p>
          <ul>
            <li>Explica fenómenos observados</li>
            <li>Integra múltiples leyes y observaciones</li>
            <li>Hace predicciones verificables</li>
            <li>Puede modificarse con nueva evidencia</li>
            <li>Es el nivel más alto de conocimiento científico</li>
          </ul>
          <Important>
            <p>
              Una teoría científica no es una "suposición" o "idea sin probar". Es la explicación más 
              sólida y respaldada que tenemos de un fenómeno natural. Ha superado múltiples pruebas 
              experimentales y predicciones exitosas.
            </p>
          </Important>
          <Example>
            <p>
              Teoría de la Gravitación Universal de Newton: Explica por qué los objetos se atraen, 
              cómo funciona la gravedad, y predice el movimiento de planetas, cometas y satélites.
            </p>
          </Example>
        </Concept>

        <Concept title="Relación entre Leyes y Teorías">
          <p>
            Las leyes y teorías se complementan:
          </p>
          <ul>
            <li>Las leyes describen patrones (qué)</li>
            <li>Las teorías explican los mecanismos (por qué)</li>
            <li>Una teoría puede explicar múltiples leyes</li>
            <li>Las teorías pueden predecir nuevas leyes</li>
          </ul>
          <p>
            Ejemplo: La teoría de la gravitación explica la ley de caída libre y la ley de movimiento 
            planetario de Kepler.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Características del Conocimiento Científico">
        <Concept title="Objetividad">
          <p>
            El conocimiento científico se basa en hechos observables, no en opiniones personales, creencias 
            o preferencias. Los resultados deben ser independientes de quién realiza la observación.
          </p>
        </Concept>

        <Concept title="Verificabilidad">
          <p>
            Puede ser comprobado mediante experimentos repetibles. Otros científicos deben poder verificar 
            los resultados siguiendo los mismos métodos.
          </p>
        </Concept>

        <Concept title="Sistematicidad">
          <p>
            Sigue un proceso ordenado y lógico. No es aleatorio ni caótico, sino que sigue el método 
            científico de forma estructurada.
          </p>
        </Concept>

        <Concept title="Universalidad">
          <p>
            Las leyes de la física son las mismas en todas partes del universo. Un experimento realizado 
            en España debe dar los mismos resultados que uno realizado en Japón, si las condiciones son 
            las mismas.
          </p>
        </Concept>

        <Concept title="Predictividad">
          <p>
            Permite hacer predicciones sobre eventos futuros. Si conocemos las leyes, podemos predecir 
            qué sucederá en situaciones similares.
          </p>
        </Concept>

        <Concept title="Provisionalidad">
          <p>
            Puede cambiar cuando se descubren nuevas evidencias. El conocimiento científico no es absoluto 
            ni definitivo; se actualiza constantemente con nuevos descubrimientos.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Importancia en la Física">
        <p>
          En física, el método científico nos permite:
        </p>
        <ul>
          <li>Descubrir las leyes fundamentales que gobiernan el universo</li>
          <li>Desarrollar tecnología basada en principios físicos comprobados</li>
          <li>Predecir el comportamiento de sistemas físicos</li>
          <li>Distinguir entre afirmaciones científicas y pseudociencia</li>
          <li>Construir conocimiento de forma acumulativa y verificable</li>
        </ul>

        <Important>
          <p>
            Galileo Galilei fue uno de los primeros en aplicar rigurosamente el método científico a la 
            física, combinando experimentación, observación cuidadosa y análisis matemático. Sus trabajos 
            sentaron las bases de la física moderna.
          </p>
        </Important>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>

        <div className="theory-subsection">
          <h3>Investigación Científica</h3>
          <p>
            El método científico es la base de toda investigación científica moderna:
          </p>
          <ul>
            <li>Investigación médica: Desarrollo de medicamentos y tratamientos</li>
            <li>Investigación tecnológica: Desarrollo de nuevos materiales y dispositivos</li>
            <li>Investigación ambiental: Estudio del cambio climático y sus efectos</li>
            <li>Investigación espacial: Exploración del universo y desarrollo de tecnologías espaciales</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Control de Calidad</h3>
          <p>
            Las empresas usan el método científico para:
          </p>
          <ul>
            <li>Probar la calidad de productos mediante experimentos controlados</li>
            <li>Desarrollar nuevos productos siguiendo un proceso sistemático</li>
            <li>Resolver problemas de producción mediante hipótesis y pruebas</li>
            <li>Mejorar procesos mediante análisis de datos</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Medicina y Salud</h3>
          <p>
            El método científico es fundamental en medicina:
          </p>
          <ul>
            <li>Ensayos clínicos para probar nuevos tratamientos</li>
            <li>Diagnóstico médico basado en observación y pruebas</li>
            <li>Desarrollo de vacunas mediante investigación sistemática</li>
            <li>Epidemiología: Estudio de enfermedades y su propagación</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Educación</h3>
          <p>
            El método científico se enseña para desarrollar:
          </p>
          <ul>
            <li>Pensamiento crítico y analítico</li>
            <li>Habilidades de resolución de problemas</li>
            <li>Capacidad de cuestionar y verificar información</li>
            <li>Comprensión de cómo funciona la ciencia</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Resolución de Problemas Cotidianos</h3>
          <p>
            Aplicamos el método científico inconscientemente en la vida diaria:
          </p>
          <ul>
            <li>Diagnosticar problemas técnicos (¿por qué no funciona mi ordenador?)</li>
            <li>Probar soluciones de forma sistemática</li>
            <li>Tomar decisiones basadas en evidencia</li>
            <li>Evaluar afirmaciones y noticias</li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El desarrollo del método científico
        </h2>

        <div className="theory-subsection">
          <h3>Antigüedad Clásica (600 a.C. - 200 d.C.)</h3>
          <p>
            Los filósofos griegos como Tales de Mileto, Aristóteles y Arquímedes comenzaron a usar la 
            observación y el razonamiento para entender la naturaleza. Sin embargo, a menudo confiaban 
            más en el razonamiento puro que en la experimentación.
          </p>
          <p>
            Aristóteles (384-322 a.C.) realizó observaciones sistemáticas pero sus conclusiones a veces 
            eran incorrectas porque no las verificó experimentalmente. Por ejemplo, afirmó que los 
            objetos pesados caen más rápido que los ligeros, algo que Galileo refutaría 2000 años después.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Renacimiento: El Nacimiento del Método Experimental (1400s-1600s)</h3>
          <p>
            Leonardo da Vinci (1452-1519) combinó observación cuidadosa con experimentación, aunque 
            muchos de sus experimentos no fueron publicados.
          </p>
          <p>
            Francis Bacon (1561-1626) propuso el método inductivo: partir de observaciones específicas 
            para llegar a conclusiones generales. En su obra "Novum Organum" (1620), describió un método 
            sistemático de investigación.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Galileo Galilei: El Padre del Método Científico Moderno (1564-1642)</h3>
          <p>
            Galileo revolucionó la ciencia al combinar:
          </p>
          <ul>
            <li>Observación cuidadosa con instrumentos (telescopio, planos inclinados)</li>
            <li>Experimentación controlada y reproducible</li>
            <li>Análisis matemático de los resultados</li>
            <li>Publicación de métodos y resultados para verificación</li>
          </ul>
          <p>
            Sus experimentos con planos inclinados para estudiar la caída de objetos fueron fundamentales. 
            Diluyó la gravedad para poder medir tiempos con mayor precisión, mostrando que la distancia 
            es proporcional al cuadrado del tiempo.
          </p>
          <p>
            Galileo también fue pionero en usar el telescopio para observaciones astronómicas, descubriendo 
            las lunas de Júpiter, las fases de Venus y las manchas solares, refutando la idea aristotélica 
            de un universo perfecto e inmutable.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>René Descartes y el Método Deductivo (1596-1650)</h3>
          <p>
            Descartes propuso el método deductivo en "Discurso del Método" (1637): partir de principios 
            generales para llegar a conclusiones específicas. Su enfoque complementó el inductivo de Bacon.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Isaac Newton: Síntesis del Método (1643-1727)</h3>
          <p>
            Newton combinó observación, experimentación y matemáticas en "Principia Mathematica" (1687). 
            Estableció las leyes del movimiento y la gravitación universal, mostrando cómo el método científico 
            podía revelar las leyes fundamentales del universo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Siglo XIX: Formalización del Método</h3>
          <p>
            John Stuart Mill (1806-1873) formalizó los métodos de inferencia científica en "Sistema de 
            Lógica" (1843), describiendo métodos de diferencia, concordancia y variaciones concomitantes.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Siglo XX: Falsacionismo de Popper</h3>
          <p>
            Karl Popper (1902-1994) propuso que una teoría científica debe ser falsable: debe poder ser 
            refutada mediante experimentos. Una teoría que no puede ser falsada no es científica. Esta 
            idea ayudó a distinguir ciencia de pseudociencia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Era Moderna: Método Científico en la Práctica</h3>
          <p>
            Hoy, el método científico es la base de toda investigación científica, desde física de 
            partículas hasta biología molecular. Se ha refinado pero los principios fundamentales 
            establecidos por Galileo siguen siendo válidos.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>La Torre de Pisa y Galileo</h3>
          <p>
            Aunque la historia de Galileo soltando objetos desde la Torre de Pisa es probablemente 
            apócrifa, ilustra perfectamente el método científico. Si realmente ocurrió, Galileo habría 
            observado que objetos de diferente masa caen al mismo tiempo, refutando a Aristóteles.
          </p>
          <p>
            Lo que sí hizo Galileo fue usar planos inclinados para "diluir" la gravedad y poder medir 
            tiempos con mayor precisión. Este ingenioso método experimental permitió descubrir la ley 
            de caída libre.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Manzana de Newton</h3>
          <p>
            La historia de Newton y la manzana que cayó de un árbol probablemente es exagerada, pero 
            ilustra cómo una observación aparentemente simple puede llevar a grandes descubrimientos. 
            Newton observó que la manzana cae hacia la Tierra y se preguntó si la misma fuerza que 
            atrae la manzana también mantiene a la Luna en órbita.
          </p>
          <p>
            Esta conexión entre fenómenos aparentemente diferentes (caída de objetos y movimiento 
            planetario) es característica del pensamiento científico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Experimento de Michelson-Morley</h3>
          <p>
            En 1887, Michelson y Morley intentaron medir la velocidad de la Tierra respecto al "éter" 
            (un medio hipotético para las ondas de luz). El experimento no encontró evidencia del éter, 
            lo que fue considerado un "fracaso".
          </p>
          <p>
            Sin embargo, este "fracaso" fue crucial: llevó a Einstein a desarrollar la teoría de la 
            relatividad especial. A veces, los experimentos que no confirman la hipótesis son los más 
            importantes.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Serendipia en la Ciencia</h3>
          <p>
            Muchos descubrimientos importantes ocurrieron por accidente mientras se investigaba otra cosa:
          </p>
          <ul>
            <li>Penicilina: Alexander Fleming descubrió la penicilina cuando un moho contaminó sus 
            placas de cultivo</li>
            <li>Rayos X: Wilhelm Röntgen descubrió los rayos X mientras experimentaba con tubos de 
            rayos catódicos</li>
            <li>Post-it: El adhesivo débil fue un "error" que resultó útil</li>
          </ul>
          <p>
            Esto muestra que la observación cuidadosa y la mente abierta son esenciales en ciencia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Método Científico vs Pseudociencia</h3>
          <p>
            El método científico ayuda a distinguir ciencia real de pseudociencia:
          </p>
          <ul>
            <li>Ciencia: Hipótesis falsables, experimentos reproducibles, resultados verificables</li>
            <li>Pseudociencia: Afirmaciones no falsables, "evidencia" no reproducible, rechazo a 
            verificación</li>
          </ul>
          <p>
            Ejemplos de pseudociencia: Astrología, homeopatía (sin evidencia científica sólida), 
            teorías de conspiración sin evidencia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Método Científico en la Vida Diaria</h3>
          <p>
            Aplicamos el método científico sin darnos cuenta:
          </p>
          <ul>
            <li>Observación: "Mi coche no arranca"</li>
            <li>Hipótesis: "Puede ser la batería"</li>
            <li>Experimento: "Pruebo las luces"</li>
            <li>Análisis: "Las luces funcionan, no es la batería"</li>
            <li>Nueva hipótesis: "Puede ser el motor de arranque"</li>
            <li>Y así sucesivamente...</li>
          </ul>
        </div>
      </div>

      <div className="theory-section-highlight">
        <h2>📝 Resumen</h2>
        <p>
          El método científico es un proceso sistemático para adquirir conocimientos sobre el mundo natural. 
          Consiste en: observación, formulación de preguntas, hipótesis, experimentación, análisis de 
          resultados, conclusiones y comunicación. No es un conjunto rígido de pasos, sino una forma de 
          pensar que garantiza objetividad y reproducibilidad.
        </p>
        <p>
          En un experimento, la variable independiente es la que cambiamos, la dependiente es la que 
          medimos, y las controladas se mantienen constantes. Las leyes científicas describen qué sucede 
          (F = ma), mientras que las teorías explican por qué sucede (teoría de la gravitación).
        </p>
        <p>
          El conocimiento científico es objetivo, verificable, sistemático, universal, predictivo y 
          provisional. Galileo Galilei fue pionero en aplicar rigurosamente el método científico, 
          combinando experimentación, observación y análisis matemático.
        </p>
        <p>
          El método científico es fundamental en investigación, medicina, tecnología y resolución de 
          problemas. Permite distinguir entre ciencia y pseudociencia, y es la base del avance del 
          conocimiento humano.
        </p>
      </div>
    </>
  );
};

export default MetodoCientificoTheory;
