import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as diagramasDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Diagramas en Estática",
  descripcion: "Diagramas de cuerpo libre, cortante y momento flector",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const DiagramasTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="El Diagrama de Cuerpo Libre (DCL)">
        <p>
          El Diagrama de Cuerpo Libre (DCL) es, sin duda, la herramienta más importante de toda la estática. Es un dibujo simplificado que traduce un problema físico complejo del mundo real en un "mapa de fuerzas" claro y sencillo que podemos resolver con matemáticas. Dominar el DCL es el primer y más crucial paso para resolver casi cualquier problema de equilibrio.
        </p>
        <Important>
          <p>La idea central es aislar un objeto de interés de su entorno y dibujar todas las fuerzas externas que actúan sobre él.</p>
        </Important>
      </TheorySection>

      <TheorySection title="Pasos para Construir un DCL">
        <ol>
          <li>Elige y Aísla tu Objeto: Decide qué objeto vas a analizar e imagina que lo liberas de todo lo que lo rodea.</li>
          <li>Dibuja un Contorno Simplificado: Un punto o un cuadro es suficiente.</li>
          <li>Identifica y Dibuja Fuerzas Externas: Dibuja flechas para cada fuerza que el entorno ejerce sobre tu objeto (peso, contacto, tensión).</li>
          <li>Establece un Sistema de Coordenadas: Dibuja los ejes X e Y para poder descomponer las fuerzas.</li>
          <li>Etiqueta Todo: Nombra cada fuerza (W, N, T) y anota ángulos y dimensiones.</li>
        </ol>
      </TheorySection>

      <TheorySection title="Fuerzas Comunes y Cálculo de Peso">
        <p>
          Varias fuerzas aparecen constantemente en los DCL. La más fundamental es el peso, que es la fuerza de la gravedad actuando sobre la masa de un objeto.
        </p>
        <Concept title="El Peso (W)">
            <p>El peso es la fuerza de atracción gravitatoria. Siempre actúa verticalmente hacia abajo. Se calcula con la siguiente fórmula:</p>
            <Formula
                expression="W = m \cdot g"
                calculatorId="diagramas-peso"
                definitions={diagramasDefinitions}
                exercises={exercises}
                complementary={[
                    { description: "Calcular Masa", expression: "m = W / g" },
                    { description: "Calcular Gravedad", expression: "g = W / m" },
                ]}
            />
            
            <p>Donde:</p>
            <ul>
              <li>W: Peso (N)</li>
              <li>m: Masa (kg)</li>
              <li>g: Aceleración gravitacional (9.81 m/s²)</li>
            </ul>
            
            <Example>
              Un objeto de 50 kg tiene un peso W = 50 × 9.81 = 490.5 N. En la Luna (g = 1.62 m/s²), 
              el mismo objeto pesaría solo 81 N, aunque su masa sigue siendo 50 kg.
            </Example>
        </Concept>
        <Concept title="Otras Fuerzas Comunes">
          <ul>
            <li>Fuerza Normal (N): Reacción de una superficie, siempre perpendicular a esta.</li>
            <li>Tensión (T): Fuerza de tracción de una cuerda o cable, siempre en la dirección del cable.</li>
            <li>Fricción (f): Se opone al movimiento, siempre paralela a la superficie de contacto.</li>
            <li>Reacciones en Apoyos: Fuerzas que los apoyos ejercen sobre la estructura para mantenerla en equilibrio.</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicación: Bloque en Plano Inclinado">
        <p>
          El plano inclinado es un caso de estudio clásico para aplicar DCL. Aquí, es útil inclinar el sistema de coordenadas para que el eje X sea paralelo a la superficie.
        </p>
        <Important>
          <p>Al inclinar los ejes, la única fuerza que se necesita descomponer es el peso (W), simplificando enormemente el problema.</p>
          
          <Example>
            Un bloque de 10 kg en un plano inclinado 30° tiene W = 98 N. Las componentes son: 
            W_∥ = 98 × sin(30°) = 49 N (tiende a deslizarlo hacia abajo) y 
            W_⊥ = 98 × cos(30°) = 84.9 N (lo presiona contra el plano).
          </Example>
        </Important>
        <Concept title="Descomposición del Peso">
          <p>El vector del peso (W) se descompone en dos componentes relativas al plano inclinado:</p>
          <Formula
            expression="W_\perp = W \cdot \cos(\theta)"
            calculatorId="diagramas-componentes"
            definitions={diagramasDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Componente Paralela", expression: "W_\parallel = W \cdot \sin(\theta)" },
              { description: "Calcular Peso desde W⊥", expression: "W = W_\perp / \cos(\theta)" },
              { description: "Calcular Peso desde W∥", expression: "W = W_\parallel / \sin(\theta)" },
              { description: "Calcular Ángulo", expression: "\theta = \text{asin}(W_\parallel / W)" }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>W_⊥: Componente perpendicular del peso (N)</li>
            <li>W_∥: Componente paralela del peso (N)</li>
            <li>W: Peso total (N)</li>
            <li>θ: Ángulo de inclinación del plano (grados o radianes)</li>
          </ul>
          
          <Example>
            <p>Con estas componentes, las ecuaciones de equilibrio (asumiendo que el objeto no se mueve) son:</p>
            <p>$\sum F_y = N - W_\perp = 0 \implies N = W \cos(\theta)$</p>
            <p>$\sum F_x = f - W_\parallel = 0 \implies f = W \sin(\theta)$</p>
            <p>Estas ecuaciones permiten calcular la fuerza normal y la fuerza de fricción necesarias para mantener el bloque en equilibrio.</p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Diagramas de Cortante y Momento Flector">
        <p>
          Los diagramas de cortante (V) y momento flector (M) son representaciones gráficas que muestran cómo varían 
          estas fuerzas internas a lo largo de una viga. Son herramientas esenciales para diseñar vigas y determinar 
          dónde ocurren los esfuerzos máximos.
        </p>

        <Concept title="Fuerza Cortante (V)">
          <p>
            La fuerza cortante en una sección de la viga es la suma algebraica de todas las fuerzas verticales 
            a un lado de esa sección. Tiende a "cortar" la viga transversalmente.
          </p>
          <p>Convención de signos:</p>
          <ul>
            <li>Cortante positivo: Fuerzas que tienden a rotar la sección en sentido horario</li>
            <li>Cortante negativo: Fuerzas que tienden a rotar la sección en sentido antihorario</li>
          </ul>
        </Concept>

        <Concept title="Momento Flector (M)">
          <p>
            El momento flector en una sección es la suma algebraica de los momentos de todas las fuerzas 
            a un lado de esa sección. Hace que la viga se curve.
          </p>
          <p>Convención de signos:</p>
          <ul>
            <li>Momento positivo: Hace que la viga se curve cóncava hacia arriba (sonrisa)</li>
            <li>Momento negativo: Hace que la viga se curve cóncava hacia abajo (ceño fruncido)</li>
          </ul>
          <Important>
            <p>
              El momento flector máximo determina el esfuerzo máximo en la viga. El diseño estructural 
              busca que este esfuerzo no exceda la resistencia del material.
            </p>
          </Important>
        </Concept>

        <Concept title="Relaciones entre Carga, Cortante y Momento">
          <p>Existen relaciones matemáticas fundamentales:</p>
          <ul>
            <li>La pendiente del diagrama de cortante en un punto es igual a la carga en ese punto</li>
            <li>La pendiente del diagrama de momento en un punto es igual al cortante en ese punto</li>
            <li>El cortante es cero donde el momento es máximo o mínimo</li>
          </ul>
          <Example>
            En una viga simplemente apoyada con carga uniforme, el cortante varía linealmente de positivo 
            a negativo, cruzando por cero en el centro. El momento es máximo en el centro (donde V = 0) 
            y tiene forma parabólica.
          </Example>
        </Concept>
      </TheorySection>

      <h2><span>🏗️</span> Aplicaciones Prácticas</h2>
      <div className="theory-applications-section">
        <div className="theory-subsection">
          <h3>🏗️ Diseño de Vigas en Construcción</h3>
          <p>
            Los ingenieros estructurales usan diagramas de cortante y momento para dimensionar vigas. 
            Una viga de acero en un edificio debe resistir el momento flector máximo sin exceder el esfuerzo 
            admisible (típicamente 250 MPa para acero estructural). Los diagramas permiten identificar dónde 
            reforzar la viga o usar secciones más grandes.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🌉 Análisis de Puentes</h3>
          <p>
            Los puentes se analizan usando DCL y diagramas de momento. El puente Golden Gate tiene momentos 
            flectores enormes en las torres debido al peso de los cables y el tablero. Los diagramas permiten 
            calcular las tensiones en cada punto y verificar que no excedan la capacidad del material.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>✈️ Alas de Aviones</h3>
          <p>
            Las alas son vigas en voladizo que soportan fuerzas aerodinámicas distribuidas. Los diagramas 
            de cortante y momento determinan dónde colocar los largueros (elementos estructurales principales). 
            El momento flector máximo ocurre en la raíz del ala, donde se une al fuselaje.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏗️ Grúas y Brazos Mecánicos</h3>
          <p>
            El brazo de una grúa es una viga en voladizo con carga en el extremo. El DCL muestra las reacciones 
            en la base y el momento flector máximo. Los diagramas permiten dimensionar el brazo para que no 
            colapse bajo la carga máxima. Las grúas torre pueden tener momentos de 10,000+ kN·m en la base.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🚗 Chasis de Vehículos</h3>
          <p>
            El chasis de un automóvil se analiza como un sistema de vigas. Los DCL muestran las cargas del motor, 
            pasajeros y equipaje. Los diagramas de momento identifican puntos críticos donde reforzar la estructura. 
            Los vehículos todoterreno tienen chasis más rígidos para resistir momentos flectores en terreno irregular.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏋️ Equipamiento Deportivo</h3>
          <p>
            Los trampolines, barras de gimnasia y tablas de snowboard se analizan como vigas. El DCL muestra 
            las fuerzas del atleta y las reacciones en los apoyos. Los diagramas de momento determinan dónde 
            ocurre el máximo esfuerzo. Las barras de gimnasia deben flexionarse sin romperse bajo cargas de 1000+ N.
          </p>
        </div>
      </div>

      <h2><span>📜</span> Historia y Desarrollo</h2>
      <div className="theory-history-section">
        <div className="theory-subsection">
          <h3>🏛️ Antigüedad: Análisis Intuitivo (300 a.C.)</h3>
          <p>
            Arquímedes (287-212 a.C.) usó conceptos similares al DCL al estudiar palancas y equilibrio, 
            aunque sin la notación formal moderna. Los constructores romanos aplicaban principios de equilibrio 
            intuitivamente al diseñar arcos y acueductos.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔬 Renacimiento: Primeros Diagramas (1600-1700)</h3>
          <p>
            Galileo Galilei (1564-1642) analizó vigas en voladizo dibujando fuerzas, precursor del DCL moderno. 
            Robert Hooke (1635-1703) estudió la deformación de vigas bajo carga. Simon Stevin (1548-1620) 
            desarrolló métodos gráficos para sumar fuerzas, base de los DCL.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>⚖️ Era Clásica: Formalización (1800-1850)</h3>
          <p>
            Claude-Louis Navier (1785-1836) desarrolló la teoría matemática de vigas y estableció las ecuaciones 
            de cortante y momento. Introdujo los diagramas de cortante y momento como herramientas de diseño. 
            Estos métodos se convirtieron en estándar en ingeniería civil.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏗️ Revolución Industrial: Estandarización (1850-1950)</h3>
          <p>
            La construcción de puentes y edificios de hierro y acero requirió métodos sistemáticos de análisis. 
            Los diagramas de cortante y momento se enseñaban en todas las escuelas de ingeniería. 
            Se desarrollaron métodos gráficos y tablas para facilitar los cálculos.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>💻 Era Moderna: Análisis Computacional (1950-presente)</h3>
          <p>
            Software como SAP2000, ETABS y ANSYS generan automáticamente DCL y diagramas de cortante/momento 
            para estructuras complejas. Los estudiantes aún aprenden a dibujarlos manualmente para comprender 
            los conceptos fundamentales. Los métodos computacionales permiten analizar estructuras que serían 
            imposibles de resolver a mano.
          </p>
        </div>
      </div>

      <h2><span>🎯</span> Anécdotas y Curiosidades</h2>
      <div className="theory-anecdotes-section">
        <div className="theory-subsection">
          <h3>🌉 El Puente de Tacoma Narrows (1940)</h3>
          <p>
            El colapso de este puente se debió parcialmente a un análisis incompleto de las fuerzas dinámicas. 
            Los diagramas de momento estático eran correctos, pero no consideraron la resonancia aerodinámica. 
            El puente se retorció violentamente antes de colapsar. Este desastre enseñó que los DCL deben incluir 
            todas las fuerzas relevantes, incluyendo las dinámicas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🗼 La Torre Eiffel y sus Diagramas</h3>
          <p>
            Gustave Eiffel calculó manualmente los diagramas de momento para cada elemento de la torre. 
            Usó más de 18,000 piezas metálicas unidas con 2.5 millones de remaches. Los diagramas mostraron 
            que la forma parabólica de la torre distribuye óptimamente las cargas de viento. Los cálculos 
            originales de Eiffel siguen siendo válidos 135 años después.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>✈️ El Vuelo 243 de Aloha Airlines (1988)</h3>
          <p>
            Un Boeing 737 perdió parte del techo del fuselaje en pleno vuelo debido a fatiga del material. 
            Los diagramas de momento mostraban concentraciones de esfuerzo en los remaches. La inspección 
            inadecuada no detectó grietas microscópicas. El piloto logró aterrizar con solo una víctima. 
            Este accidente mejoró los protocolos de inspección estructural.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏗️ El Edificio Más Esbelto</h3>
          <p>
            Steinway Tower en Nueva York (relación altura/ancho de 24:1) tiene diagramas de momento extremos 
            debido al viento. El momento flector en la base puede superar 100,000 kN·m en vientos fuertes. 
            El edificio usa un núcleo de hormigón armado de 1.5 m de espesor y amortiguadores de masa sintonizada 
            para reducir oscilaciones.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🎢 Montañas Rusas y Fuerzas G</h3>
          <p>
            Los rieles de montañas rusas se diseñan usando diagramas de momento considerando fuerzas dinámicas 
            de hasta 6G. El momento flector máximo ocurre en los loops y curvas cerradas. Los diseñadores usan 
            factores de seguridad de 5-10 veces la carga máxima. Los rieles se inspeccionan diariamente con 
            ultrasonido para detectar grietas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏋️ El Récord de Levantamiento</h3>
          <p>
            Eddie Hall levantó 500 kg en peso muerto (2016). Su columna vertebral actuó como una viga en compresión 
            con momento flector. Los discos intervertebrales soportaron fuerzas de 3,000+ kg. El DCL de su cuerpo 
            muestra por qué la técnica correcta es crucial: distribuye el momento entre múltiples vértebras en lugar 
            de concentrarlo en una sola.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          El Diagrama de Cuerpo Libre (DCL) es la herramienta fundamental de la estática. Consiste en aislar 
          un objeto y dibujar todas las fuerzas externas que actúan sobre él. Los pasos son: elegir el objeto, 
          dibujarlo simplificado, identificar fuerzas, establecer coordenadas y etiquetar todo.
        </p>
        <p>
          Los diagramas de cortante y momento flector muestran cómo varían las fuerzas internas a lo largo 
          de una viga. El cortante tiende a cortar la viga transversalmente, mientras que el momento la hace 
          curvarse. El momento máximo determina el esfuerzo máximo y es crítico para el diseño estructural.
        </p>
        <p>
          Desde los estudios de Arquímedes hasta el software moderno, los diagramas han sido esenciales en 
          ingeniería. Permiten visualizar fuerzas complejas, identificar puntos críticos y diseñar estructuras 
          seguras y eficientes. Dominar los DCL y diagramas de cortante/momento es fundamental para cualquier 
          ingeniero estructural o mecánico.
        </p>
      </div>
    </>
  );
};

export default DiagramasTheory;
