import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as estabilidadDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Estabilidad y Equilibrio",
  descripcion: "Condiciones de equilibrio, estabilidad, vuelco y tipos de equilibrio",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const EstabilidadTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Estabilidad y las Condiciones de Equilibrio">
        <p>
          En estática, la estabilidad se refiere a la capacidad de un cuerpo para permanecer en equilibrio bajo la acción de fuerzas externas. Para que sea estable, debe cumplir dos condiciones fundamentales: no trasladarse (deslizarse) y no rotar (volcar).
        </p>
        <p>
          La estabilidad es crucial en diseño estructural, vehículos, maquinaria y objetos cotidianos. Un objeto puede estar en equilibrio pero ser inestable, como un lápiz parado sobre su punta.
        </p>
      </TheorySection>

      <TheorySection title="1. Equilibrio de Traslación (ΣF = 0)">
        <Concept title="Suma de Fuerzas Nula">
          <p>
            Esta condición asegura que el objeto no se moverá de su lugar. Se basa en la Primera Ley de Newton y establece que la suma vectorial de todas las fuerzas externas que actúan sobre el cuerpo debe ser cero.
          </p>
          <Formula 
            expression={String.raw`\sum \vec{F} = 0`} 
            isPrimary={false}
            calculatorId="estabilidad-suma-fuerzas"
            definitions={estabilidadDefinitions}
            exercises={exercises}
          />
          
          <p>Donde:</p>
          <ul>
            <li>ΣF: Suma vectorial de todas las fuerzas (N)</li>
          </ul>
          
          <Example>
            Un libro sobre una mesa está en equilibrio de traslación: la fuerza normal hacia arriba equilibra 
            el peso hacia abajo (ΣFy = 0), y no hay fuerzas horizontales (ΣFx = 0).
          </Example>
          
          <Important>
            <p>Para problemas en 2D, esta ecuación vectorial se descompone en dos ecuaciones escalares:</p>
            <Formula 
              expression={String.raw`\sum F_x = 0`} 
              isPrimary={false}
              calculatorId="estabilidad-suma-fx"
              definitions={estabilidadDefinitions}
              exercises={exercises}
            />
            <p style={{textAlign: 'center', marginTop: '-10px', fontStyle: 'italic'}}>(las fuerzas horizontales se anulan)</p>
            <Formula 
              expression={String.raw`\sum F_y = 0`} 
              isPrimary={false}
              calculatorId="estabilidad-suma-fy"
              definitions={estabilidadDefinitions}
              exercises={exercises}
            />
            <p style={{textAlign: 'center', marginTop: '-10px', fontStyle: 'italic'}}>(las fuerzas verticales se anulan)</p>
          </Important>
          <p>
            Si se cumple esta condición, el objeto no acelerará ni en horizontal ni en vertical.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="2. Equilibrio de Rotación (ΣM = 0)">
        <p>
          Esta condición asegura que el objeto no girará ni volcará. Para ello, la suma de todos los <strong>momentos (o torques)</strong> respecto a cualquier punto debe ser cero.
        </p>
        <Concept title="Momento de una Fuerza (Torque)">
          <p>Un momento es el efecto de giro producido por una fuerza. Se calcula como el producto de la fuerza por la distancia perpendicular desde el punto de giro a la línea de acción de la fuerza.</p>
          <Formula
            expression="M = F \cdot d"
            calculatorId="estabilidad-momento"
            definitions={estabilidadDefinitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular Fuerza", expression: "F = M / d" },
                { description: "Calcular Distancia", expression: "d = M / F" },
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>M: Momento o torque (N·m)</li>
            <li>F: Fuerza aplicada (N)</li>
            <li>d: Distancia perpendicular al punto de giro (m)</li>
          </ul>
          
          <Example>
            En un sube y baja, si dos niños de diferente peso se sientan a distancias apropiadas del centro, 
            los momentos se equilibran (ΣM = 0) y el sube y baja permanece horizontal sin girar.
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Condición de Vuelco">
        <p>
          La estabilidad contra el vuelco depende de un balance de momentos. El "momento de vuelco", usualmente causado por una fuerza externa, es contrarrestado por un "momento estabilizador", usualmente generado por el peso del objeto.
        </p>
        <Important>
            <p>El vuelco es inminente cuando el momento de vuelco iguala o supera al momento estabilizador.</p>
        </Important>
        <Concept title="Análisis de Vuelco de un Bloque">
          <p>
            Imagina un bloque de peso W y ancho 2b, empujado por una fuerza P a una altura h. El momento de vuelco es P·h. El momento estabilizador lo genera el peso W con un brazo de palanca b (la distancia desde el pivote al centro de gravedad). La condición límite de estabilidad es:
          </p>
          <Formula
            expression="P \cdot h = W \cdot b"
            calculatorId="estabilidad-vuelco"
            definitions={estabilidadDefinitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular Peso Estabilizador (W)", expression: "W = (P h) / b" },
                { description: "Calcular Altura Máxima (h)", expression: "h = (W b) / P" },
                { description: "Calcular Base Mínima (b)", expression: "b = (P h) / W" },
            ]}
          />
          <Example>
            <p>Si la fuerza P es tal que P·h &gt; W·b, el bloque volcará. Usando esta fórmula, podemos determinar la fuerza máxima aplicable, el peso mínimo requerido o las dimensiones necesarias para garantizar la estabilidad.</p>
            
            <Example>
              Un refrigerador de 100 kg (W = 980 N) con ancho 1.2 m (b = 0.6 m) y altura 1.8 m. 
              Si se empuja a h = 1.5 m, la fuerza máxima antes de volcar es: P = (980 × 0.6) / 1.5 = 392 N.
            </Example>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Tipos de Equilibrio">
        <Concept title="Equilibrio Estable">
          <p>
            Un objeto está en equilibrio estable si, al ser desplazado ligeramente de su posición de equilibrio, 
            tiende a regresar a ella. El centro de gravedad está en su posición más baja posible.
          </p>
          <Example>
            Una bola en el fondo de un cuenco. Si la empujas, rueda de vuelta al centro. Un péndulo en reposo 
            colgando verticalmente. Los edificios están diseñados para equilibrio estable.
          </Example>
        </Concept>

        <Concept title="Equilibrio Inestable">
          <p>
            Un objeto está en equilibrio inestable si, al ser desplazado ligeramente, tiende a alejarse más 
            de su posición original. El centro de gravedad está en su posición más alta posible.
          </p>
          <Example>
            Un lápiz parado sobre su punta. La más mínima perturbación lo hace caer. Una bola en la cima 
            de una colina. Un péndulo invertido (hacia arriba) está en equilibrio inestable.
          </Example>
        </Concept>

        <Concept title="Equilibrio Neutro (Indiferente)">
          <p>
            Un objeto está en equilibrio neutro si, al ser desplazado, permanece en equilibrio en su nueva posición. 
            El centro de gravedad permanece a la misma altura.
          </p>
          <Example>
            Una bola sobre una superficie plana horizontal. Si la empujas, se queda donde la dejas. 
            Una rueda acostada sobre el suelo. Un cilindro rodando sobre una superficie plana.
          </Example>
        </Concept>

        <Important>
          <p>
            La estabilidad de un objeto depende de la posición de su centro de gravedad respecto a su base de apoyo. 
            Cuanto más bajo esté el centro de gravedad y más ancha sea la base, más estable será el objeto.
          </p>
        </Important>
      </TheorySection>

      <TheorySection title="Factor de Seguridad contra Vuelco">
        <Concept title="Margen de Estabilidad">
          <p>
            En ingeniería, no basta con que un objeto esté justo en el límite de estabilidad. Se usa un factor 
            de seguridad (FS) que es la relación entre el momento estabilizador y el momento de vuelco:
          </p>
          <p style={{textAlign: 'center', margin: '15px 0'}}>
            FS = Momento Estabilizador / Momento de Vuelco
          </p>
          <ul>
            <li>FS &gt; 1: El objeto es estable</li>
            <li>FS = 1: Límite de estabilidad (vuelco inminente)</li>
            <li>FS &lt; 1: El objeto volcará</li>
          </ul>
          <p>
            Típicamente se requiere FS ≥ 1.5 para estructuras (50% de margen de seguridad) y FS ≥ 2.0 
            para grúas y equipos críticos.
          </p>
        </Concept>
      </TheorySection>

      <h2><span>🏗️</span> Aplicaciones Prácticas</h2>
      <div className="theory-applications-section">
        <div className="theory-subsection">
          <h3>🏗️ Grúas y Equipos de Elevación</h3>
          <div className="theory-subsection">
            <p>
              Las grúas deben mantener equilibrio contra vuelco. Usan contrapesos para generar momento estabilizador. 
              Una grúa torre puede tener 20 toneladas de contrapeso para equilibrar 10 toneladas de carga a mayor distancia. 
              El factor de seguridad típico es FS = 2.0. Los sensores monitorean el momento de vuelco en tiempo real 
              y detienen la operación si se acerca al límite.
            </p>
          </div>
        </div>
        <div className="theory-subsection">
          <h3>🚗 Vehículos y Estabilidad</h3>
          <div className="theory-subsection">
            <p>
              Los automóviles se diseñan con centro de gravedad bajo para evitar vuelcos en curvas. Los SUV tienen 
              centro de gravedad más alto y son más propensos a volcar. Los autos deportivos tienen centros de gravedad 
              a solo 40 cm del suelo. Los camiones con carga alta deben reducir velocidad en curvas para evitar vuelco 
              por fuerza centrífuga.
            </p>
          </div>
        </div>
        <div className="theory-subsection">
          <h3>⛵ Barcos y Estabilidad Naval</h3>
          <div className="theory-subsection">
            <p>
              Los barcos deben ser estables contra vuelco por olas y viento. El centro de gravedad debe estar bajo 
              y el centro de flotación (empuje) alto. Los barcos de carga usan lastre (agua o arena en el fondo) 
              para bajar el centro de gravedad. Los veleros tienen quillas pesadas que actúan como contrapeso. 
              Un barco con carga mal distribuida puede volcar.
            </p>
          </div>
        </div>
        <div className="theory-subsection">
          <h3>🏢 Rascacielos y Viento</h3>
          <div className="theory-subsection">
            <p>
              Los rascacielos deben resistir momentos de vuelco por viento. El Burj Khalifa (828 m) experimenta 
              fuerzas de viento de 11,000 toneladas que generan momentos enormes. La cimentación profunda (50 m) 
              y el núcleo de hormigón generan momento estabilizador. Los amortiguadores de masa sintonizada reducen 
              oscilaciones pero no afectan la estabilidad estática.
            </p>
          </div>
        </div>
        <div className="theory-subsection">
          <h3>🏗️ Muros de Contención</h3>
          <div className="theory-subsection">
            <p>
              Los muros de contención retienen tierra y deben resistir el empuje lateral. El peso del muro genera 
              momento estabilizador. Se diseñan con base ancha y a veces con contrafuertes (extensiones hacia atrás). 
              El factor de seguridad típico contra vuelco es FS = 1.5-2.0. El análisis considera también deslizamiento 
              y capacidad portante del suelo.
            </p>
          </div>
        </div>
        <div className="theory-subsection">
          <h3>🎪 Equilibristas y Acróbatas</h3>
          <div className="theory-subsection">
            <p>
              Los equilibristas mantienen su centro de gravedad sobre la base de apoyo (cuerda, bola). Usan barras 
              largas que bajan el centro de gravedad combinado y aumentan el momento de inercia, dando más tiempo 
              para corregir desequilibrios. Los acróbatas en pirámides humanas calculan intuitivamente el equilibrio 
              de momentos.
            </p>
          </div>
        </div>
      </div>

      <h2><span>📜</span> Historia y Desarrollo</h2>
      <div className="theory-history-section">
        <div className="theory-subsection">
          <h3>🏛️ Antigüedad: Equilibrio Intuitivo (3000 a.C.)</h3>
          <p>
            Los constructores antiguos comprendían intuitivamente la estabilidad. Las pirámides egipcias tienen 
            base ancha y centro de gravedad bajo, haciéndolas extremadamente estables. Los obeliscos se tallaban 
            con centro de gravedad bajo para evitar vuelco durante transporte y erección. El Partenón griego 
            usa columnas que distribuyen cargas verticalmente, evitando momentos de vuelco.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔬 Renacimiento: Primeros Análisis (1600)</h3>
          <p>
            Galileo Galilei (1564-1642) estudió el equilibrio y la estabilidad de cuerpos. Simon Stevin (1548-1620) 
            analizó el equilibrio de fuerzas y momentos. Estos estudios establecieron las bases matemáticas 
            de la estabilidad estructural.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>⚖️ Era Clásica: Teoría de Estabilidad (1700-1850)</h3>
          <p>
            Leonhard Euler (1707-1783) desarrolló la teoría de pandeo de columnas, un tipo de inestabilidad. 
            Joseph-Louis Lagrange (1736-1813) formalizó las condiciones de equilibrio usando cálculo variacional. 
            Estos avances permitieron predecir cuándo una estructura sería estable o inestable.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏗️ Revolución Industrial: Aplicaciones Prácticas (1850-1950)</h3>
          <p>
            La construcción de puentes, edificios altos y barcos de acero requirió análisis riguroso de estabilidad. 
            Se desarrollaron métodos para calcular factores de seguridad contra vuelco. Los códigos de construcción 
            comenzaron a especificar requisitos mínimos de estabilidad.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>💻 Era Moderna: Análisis Dinámico (1950-presente)</h3>
          <p>
            El análisis de estabilidad se extendió a sistemas dinámicos: aviones, cohetes, robots. Se desarrollaron 
            métodos computacionales para analizar estabilidad bajo cargas variables (viento, sismo, olas). 
            Los sistemas de control activo pueden estabilizar objetos inherentemente inestables (como el Segway 
            o drones).
          </p>
        </div>
      </div>

      <h2><span>🎯</span> Anécdotas y Curiosidades</h2>
      <div className="theory-anecdotes-section">
        <div className="theory-subsection">
          <h3>🗼 La Torre de Pisa: Equilibrio Límite</h3>
          <p>
            La Torre de Pisa (56 m, inclinación 3.97°) está en equilibrio límite. Su centro de gravedad cae 
            justo dentro de su base, evitando el vuelco por milímetros. En 2001, se estabilizó extrayendo tierra 
            del lado norte, reduciendo la inclinación. Si la inclinación aumentara 0.5°, el centro de gravedad 
            saldría de la base y la torre colapsaría.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🚢 El Vasa: Desastre por Inestabilidad (1628)</h3>
          <p>
            El buque de guerra sueco Vasa se hundió en su viaje inaugural después de navegar solo 1,300 metros. 
            Tenía centro de gravedad demasiado alto (cañones pesados en cubiertas superiores) y lastre insuficiente. 
            Una ráfaga de viento lo inclinó, entró agua por las portas de cañones, y se hundió en minutos. 
            Este desastre enseñó la importancia del análisis de estabilidad naval.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏗️ El Colapso de la Grúa de Seattle (2019)</h3>
          <p>
            Una grúa torre colapsó durante desmontaje, matando a 4 personas. La investigación reveló que se 
            removieron pernos de estabilización prematuramente, reduciendo el momento estabilizador. El momento 
            de vuelco por viento superó el momento estabilizador y la grúa volcó. Este accidente reforzó 
            protocolos de desmontaje de grúas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🎪 Philippe Petit: Equilibrio Extremo (1974)</h3>
          <p>
            Philippe Petit caminó en cuerda floja entre las Torres Gemelas (417 m de altura, 43 m de separación) 
            sin arnés de seguridad. Usó una barra de 8 m y 25 kg para bajar su centro de gravedad combinado 
            y aumentar momento de inercia. Cruzó 8 veces en 45 minutos, demostrando control extraordinario 
            del equilibrio.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🚗 El Récord de Vuelco más Rápido</h3>
          <p>
            En pruebas de estabilidad, el Mercedes Clase A (1997) volcó durante la "maniobra del alce" 
            (cambio brusco de carril). Su centro de gravedad alto y suspensión blanda causaron vuelco a solo 
            60 km/h. Mercedes retiró 130,000 unidades y rediseñó la suspensión. Esto llevó al desarrollo del 
            control electrónico de estabilidad (ESP) ahora obligatorio en todos los autos.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🤖 El Robot Equilibrista</h3>
          <p>
            El robot Atlas de Boston Dynamics puede mantener equilibrio sobre una pierna mientras lo empujan. 
            Usa sensores y control activo para ajustar su postura 500 veces por segundo, manteniendo su centro 
            de gravedad sobre la base de apoyo. Puede caminar sobre terreno irregular, saltar y hacer volteretas, 
            demostrando control de equilibrio dinámico superior al humano.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          La estabilidad requiere dos condiciones: equilibrio de traslación (ΣF = 0) y equilibrio de rotación (ΣM = 0). 
          El equilibrio de traslación evita que el objeto se deslice, mientras que el equilibrio de rotación 
          evita que vuelque. Ambas condiciones deben cumplirse simultáneamente.
        </p>
        <p>
          Existen tres tipos de equilibrio: estable (regresa a su posición), inestable (se aleja más) y neutro 
          (permanece donde se deja). La estabilidad depende de la posición del centro de gravedad respecto a la base. 
          El vuelco ocurre cuando el momento de vuelco supera el momento estabilizador. El factor de seguridad 
          (FS) debe ser mayor que 1, típicamente 1.5-2.0 en ingeniería.
        </p>
        <p>
          Desde las pirámides antiguas hasta los rascacielos modernos y robots equilibristas, la comprensión 
          de la estabilidad ha sido fundamental en ingeniería y diseño. El análisis de estabilidad previene 
          colapsos, vuelcos y accidentes, garantizando la seguridad de estructuras, vehículos y equipos.
        </p>
      </div>
    </>
  );
};

export default EstabilidadTheory;
