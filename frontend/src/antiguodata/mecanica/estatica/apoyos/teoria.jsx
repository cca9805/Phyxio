import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as apoyosDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Apoyos Estructurales",
  descripcion: "Tipos de apoyos, reacciones y análisis de estructuras",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const ApoyosTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a los Apoyos Estructurales">
        <p>
          En estática, los apoyos son los elementos que conectan una estructura a un punto fijo o a otra estructura. 
          Su función es restringir el movimiento y transmitir cargas, generando fuerzas de reacción para mantener el equilibrio. 
          El tipo de apoyo determina cuántos grados de libertad se restringen y, por tanto, cuántas reacciones se generan.
        </p>
        <p>
          Comprender los tipos de apoyos es fundamental para analizar correctamente cualquier estructura, desde una simple 
          viga hasta un puente complejo. Cada apoyo tiene características específicas que afectan al comportamiento estructural.
        </p>
      </TheorySection>

      <TheorySection title="Tipos de Apoyos y sus Reacciones">
        <Concept title="1. Apoyo de Rodillo (o Apoyo Móvil)">
          <p>
            Impide el movimiento en una única dirección, perpendicular a la superficie de apoyo. Permite el desplazamiento 
            paralelo a la superficie y la rotación. Genera una reacción de fuerza normal (N) perpendicular a la superficie.
          </p>
          <p>
            Grados de libertad restringidos: 1 (traslación perpendicular)
          </p>
          <p>
            Reacciones: 1 fuerza (R)
          </p>
          <Example>
            Ejemplos: Ruedas de un vagón sobre rieles, apoyos de dilatación en puentes, rodamientos.
          </Example>
        </Concept>

        <Concept title="2. Apoyo de Pasador (Articulación o Rótula)">
          <p>
            Impide cualquier traslación en el plano (movimientos en X e Y), pero permite la rotación libre alrededor del pasador. 
            Genera dos reacciones de fuerza: una horizontal (Ax) y una vertical (Ay).
          </p>
          <p>
            Grados de libertad restringidos: 2 (traslación en X y Y)
          </p>
          <p>
            Reacciones: 2 fuerzas (Rx, Ry)
          </p>
          <Example>
            Ejemplos: Bisagras de puertas, articulaciones en estructuras metálicas, conexiones de brazos robóticos.
          </Example>
        </Concept>

        <Concept title="3. Apoyo Fijo (Empotramiento o Encastre)">
          <p>
            Impide cualquier movimiento de traslación y también la rotación. Es el apoyo más restrictivo. 
            Genera tres reacciones: dos fuerzas (Ax, Ay) y un momento (Ma).
          </p>
          <p>
            Grados de libertad restringidos: 3 (traslación en X, Y y rotación)
          </p>
          <p>
            Reacciones: 2 fuerzas (Rx, Ry) + 1 momento (M)
          </p>
          <Example>
            Ejemplos: Postes de luz empotrados en el suelo, vigas en voladizo de edificios, mástiles de barcos.
          </Example>
        </Concept>

        <Concept title="4. Apoyo Deslizante Guiado">
          <p>
            Permite el desplazamiento en una dirección específica pero impide el movimiento perpendicular y la rotación. 
            Genera una fuerza perpendicular a la dirección de deslizamiento y un momento.
          </p>
          <p>
            Grados de libertad restringidos: 2 (traslación perpendicular y rotación)
          </p>
          <p>
            Reacciones: 1 fuerza + 1 momento
          </p>
          <Example>
            Ejemplos: Guías de cajones, rieles de puertas correderas, sistemas de expansión térmica.
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Determinación Estática de Estructuras">
        <Important>
          <p>
            Una estructura es estáticamente determinada (isostática) cuando el número de ecuaciones de equilibrio 
            es igual al número de incógnitas (reacciones). Si hay más incógnitas que ecuaciones, la estructura es 
            hiperestática y requiere métodos adicionales de análisis.
          </p>
        </Important>

        <Concept title="Ecuaciones de Equilibrio en 2D">
          <p>Para estructuras en el plano, disponemos de 3 ecuaciones de equilibrio:</p>
          <ul>
            <li>ΣFx = 0 (suma de fuerzas horizontales)</li>
            <li>ΣFy = 0 (suma de fuerzas verticales)</li>
            <li>ΣM = 0 (suma de momentos respecto a cualquier punto)</li>
          </ul>
          <p>
            Si una estructura tiene exactamente 3 reacciones desconocidas, podemos resolverlas con estas 3 ecuaciones. 
            Si tiene más de 3 reacciones, es hiperestática.
          </p>
        </Concept>

        <Concept title="Grado de Hiperestaticidad">
          <p>
            El grado de hiperestaticidad (n) indica cuántas reacciones "sobran" respecto a las ecuaciones disponibles:
          </p>
          <p>
            n = (número de reacciones) - (número de ecuaciones de equilibrio)
          </p>
          <ul>
            <li>n = 0: Estructura isostática (determinada)</li>
            <li>n {'>'} 0: Estructura hiperestática de grado n</li>
            <li>n {'<'} 0: Estructura hipostática (inestable, mecanismo)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Cálculo de Reacciones en Vigas">
        <Important>
          <p>Para que una estructura esté en equilibrio, la suma de todas las fuerzas y todos los momentos que actúan sobre ella debe ser igual a cero: ΣFx = 0, ΣFy = 0, ΣM = 0.</p>
        </Important>

        <Concept title="Viga Simplemente Apoyada">
          <p>Un caso común con un pasador en un extremo (A) y un rodillo en el otro (B). Las reacciones se calculan a partir del equilibrio de fuerzas y momentos.</p>
           <Formula
            expression={String.raw`R_B = \frac{P \cdot a}{L}`}
            calculatorId="reacciones-viga-simple"
            definitions={apoyosDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Reacción en A", expression: String.raw`R_A = P - R_B` },
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>R_B: Reacción en el apoyo B (N)</li>
            <li>P: Carga puntual aplicada (N)</li>
            <li>a: Distancia de la carga al apoyo A (m)</li>
            <li>L: Longitud de la viga (m)</li>
            <li>R_A: Reacción en el apoyo A (N)</li>
          </ul>
        </Concept>

        <Concept title="Viga en Voladizo">
          <p>Una viga empotrada en un extremo (A) y libre en el otro. El empotramiento genera una fuerza y un momento de reacción.</p>
          <Formula
            expression={String.raw`R_A = P`}
            calculatorId="reacciones-viga-voladizo"
            definitions={apoyosDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Momento en A", expression: String.raw`M_A = P \cdot L` },
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>R_A: Reacción vertical en el empotramiento A (N)</li>
            <li>P: Carga puntual aplicada (N)</li>
            <li>M_A: Momento de reacción en el empotramiento (N·m)</li>
            <li>L: Longitud de la viga en voladizo (m)</li>
          </ul>
        </Concept>
      </TheorySection>

      <h2><span>🏗️</span> Aplicaciones Prácticas</h2>
      <div className="theory-applications-section">
        <div className="theory-subsection">
          <h3>🌉 Puentes con Apoyos de Dilatación</h3>
          <div className="theory-subsection">
            <p>
              Los puentes largos experimentan expansión y contracción térmica. Por ello, se usa un apoyo fijo en un extremo 
              y apoyos móviles (rodillos) en el otro, permitiendo el movimiento longitudinal sin generar tensiones excesivas. 
              El puente Golden Gate tiene juntas de expansión que permiten hasta 1.6 metros de movimiento.
            </p>
          </div>
        </div>
        <div className="theory-subsection">
          <h3>🏢 Vigas en Voladizo en Edificios</h3>
          <div className="theory-subsection">
            <p>
              Los balcones y marquesinas son vigas empotradas en un extremo. El empotramiento en la pared genera una fuerza 
              vertical y un momento que equilibran el peso del voladizo y las cargas que soporta. El Burj Al Arab tiene 
              voladizos de hasta 27 metros sostenidos por empotramientos masivos.
            </p>
          </div>
        </div>
        <div className="theory-subsection">
          <h3>🚪 Bisagras y Articulaciones</h3>
          <div className="theory-subsection">
            <p>
              Las puertas se apoyan en bisagras (pasadores) que permiten la rotación pero impiden el desplazamiento. 
              Las fuerzas en las bisagras se calculan usando equilibrio de momentos. Una puerta pesada puede generar 
              reacciones de cientos de newtons en cada bisagra.
            </p>
          </div>
        </div>
        <div className="theory-subsection">
          <h3>🏗️ Grúas Torre</h3>
          <div className="theory-subsection">
            <p>
              La base de una grúa torre actúa como empotramiento, resistiendo no solo el peso de la estructura sino también 
              el momento generado por la carga suspendida. Las reacciones en la base pueden superar las 1000 toneladas en 
              grúas grandes.
            </p>
          </div>
        </div>
        <div className="theory-subsection">
          <h3>🚂 Vagones de Tren</h3>
          <div className="theory-subsection">
            <p>
              Los vagones se apoyan sobre ruedas (rodillos) que permiten el movimiento longitudinal pero restringen el 
              movimiento vertical. Las reacciones en cada rueda se calculan considerando la distribución de carga del vagón.
            </p>
          </div>
        </div>
        <div className="theory-subsection">
          <h3>⚙️ Maquinaria Industrial</h3>
          <div className="theory-subsection">
            <p>
              Las prensas hidráulicas, tornos y fresadoras se montan sobre apoyos que deben absorber fuerzas y vibraciones. 
              El tipo de apoyo determina la estabilidad y precisión de la máquina.
            </p>
          </div>
        </div>
      </div>

      <h2><span>📜</span> Historia y Desarrollo</h2>
      <div className="theory-history-section">
        <div className="theory-subsection">
          <h3>🏛️ Antigüedad: Apoyos Empíricos (3000 a.C. - 500 d.C.)</h3>
          <p>
            Los constructores antiguos usaban apoyos simples sin teoría formal. Las columnas griegas actuaban como apoyos 
            de pasador, permitiendo pequeñas rotaciones. Los romanos desarrollaron arcos que distribuyen cargas mediante 
            compresión, eliminando la necesidad de apoyos complejos en el centro del vano.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔬 Renacimiento: Primeros Análisis (1500-1700)</h3>
          <p>
            Leonardo da Vinci (1452-1519) estudió las reacciones en apoyos de vigas y poleas. Galileo Galilei (1564-1642) 
            analizó vigas en voladizo y calculó las fuerzas en el empotramiento. Simon Stevin (1548-1620) formalizó el 
            concepto de equilibrio de fuerzas en apoyos.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>⚖️ Era Clásica: Teoría de Apoyos (1700-1850)</h3>
          <p>
            Leonhard Euler (1707-1783) desarrolló la teoría de vigas y clasificó los tipos de apoyos según los grados de 
            libertad restringidos. Charles-Augustin de Coulomb (1736-1806) estudió la fricción en apoyos y su efecto en 
            las reacciones.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏗️ Revolución Industrial: Apoyos Metálicos (1850-1950)</h3>
          <p>
            La construcción de puentes de hierro y acero requirió apoyos que permitieran la dilatación térmica. 
            Se desarrollaron apoyos de rodillo y deslizantes. El puente de Brooklyn (1883) incorporó apoyos innovadores 
            que permitían movimientos de varios centímetros.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔧 Era Moderna: Apoyos Especializados (1950-presente)</h3>
          <p>
            Se desarrollaron apoyos elastoméricos (neopreno) que absorben vibraciones y permiten pequeños movimientos. 
            Los apoyos sísmicos con aisladores permiten que edificios se muevan durante terremotos sin colapsar. 
            El Viaducto de Millau (2004) usa apoyos especiales que permiten movimientos de hasta 40 cm por dilatación térmica.
          </p>
        </div>
      </div>

      <h2><span>🎯</span> Anécdotas y Curiosidades</h2>
      <div className="theory-anecdotes-section">
        <div className="theory-subsection">
          <h3>🌉 El Puente de Dilatación más Largo</h3>
          <p>
            El puente Akashi Kaikyō en Japón (1991 m de vano central) puede expandirse hasta 2 metros debido a cambios 
            de temperatura. Sus apoyos móviles permiten este movimiento sin generar tensiones destructivas. Durante su 
            construcción, el terremoto de Kobe (1995) separó las torres 1 metro, pero la estructura flexible lo soportó.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🗼 La Torre Eiffel y sus Apoyos</h3>
          <p>
            Cada una de las cuatro patas de la Torre Eiffel se apoya sobre un sistema de articulaciones que permite 
            pequeños movimientos. La torre puede inclinarse hasta 18 cm en días calurosos debido a la expansión térmica 
            del lado expuesto al sol. Los apoyos absorben estos movimientos sin dañar la estructura.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏗️ El Voladizo más Largo del Mundo</h3>
          <p>
            El Capital Gate en Abu Dhabi tiene una inclinación de 18° (4 veces más que la Torre de Pisa) y un voladizo 
            de 35 metros. El empotramiento en la base genera momentos enormes que se contrarrestan con un núcleo de 
            hormigón armado de 1.5 metros de espesor.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🚪 La Bisagra más Grande</h3>
          <p>
            Las compuertas del Canal de Panamá son las bisagras más grandes del mundo. Cada hoja pesa 745 toneladas y 
            mide 20 metros de alto. Las bisagras deben soportar no solo el peso sino también la presión del agua, 
            generando reacciones de miles de toneladas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏛️ Columnas sin Mortero</h3>
          <p>
            El Partenón griego se construyó sin mortero entre las columnas y el entablamento. Las columnas actúan como 
            apoyos de pasador, permitiendo pequeños movimientos durante terremotos. Esta flexibilidad ha permitido que 
            la estructura sobreviva 2,500 años en una zona sísmica.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🎢 Montañas Rusas y Apoyos Dinámicos</h3>
          <p>
            Las vías de montañas rusas usan apoyos que deben resistir no solo el peso estático sino también fuerzas 
            dinámicas de hasta 6G. Los apoyos se diseñan con factores de seguridad de 5-10 veces la carga máxima esperada. 
            Algunos tramos usan apoyos flexibles que absorben vibraciones.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          Los apoyos estructurales son elementos fundamentales que conectan las estructuras al suelo o entre sí, 
          restringiendo movimientos y generando reacciones. Los tres tipos principales son: rodillo (1 reacción), 
          pasador (2 reacciones) y empotramiento (3 reacciones).
        </p>
        <p>
          El análisis de reacciones en apoyos se realiza aplicando las ecuaciones de equilibrio: suma de fuerzas 
          horizontales, verticales y momentos igual a cero. Una estructura es isostática cuando el número de reacciones 
          iguala al número de ecuaciones disponibles.
        </p>
        <p>
          La correcta selección del tipo de apoyo es crucial en el diseño estructural, considerando factores como 
          dilatación térmica, movimientos sísmicos y cargas dinámicas. Desde los templos griegos hasta los puentes 
          modernos, los apoyos han evolucionado para permitir estructuras cada vez más audaces y seguras.
        </p>
      </div>
    </>
  );
};

export default ApoyosTheory;
