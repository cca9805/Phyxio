import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions as palancasDefinitions } from './definitions.js';


// Metadatos del tema
export const metadata = {
  titulo: "Palancas",
  descripcion: "Las palancas y sus tres géneros",
  educationLevel: "ESO",
  levels: ['ESO']
};

const PalancasTheory = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="La Ley de la Palanca" emoji="⚖️">
        <Concept title="¿Qué es una palanca?">
          <p>Una palanca es una barra rígida que gira sobre un punto de apoyo llamado fulcro. Es probablemente la máquina simple más antigua utilizada por el ser humano.</p>
  
          <h4>Elementos de toda palanca:</h4>
          <ul>
            <li>🔵 Fulcro (F): Punto de apoyo sobre el que gira la palanca</li>
            <li>🟢 Esfuerzo o Potencia (Fe): Fuerza que aplicamos nosotros</li>
            <li>🔴 Resistencia o Carga (Fr): Fuerza que queremos vencer (peso del objeto)</li>
            <li>📏 Brazo de potencia (de): Distancia del esfuerzo al fulcro</li>
            <li>📐 Brazo de resistencia (dr): Distancia de la resistencia al fulcro</li>
          </ul>

          {/* Diagrama centrado de la Ley de la Palanca */}
          <div style={{textAlign: 'center', margin: '2.5rem auto', maxWidth: '700px', padding: '1rem'}}>
            <img 
              src="/src/assets/diagrams/ley-palanca.svg" 
              alt="Diagrama de la Ley de la Palanca" 
              style={{width: '100%', height: 'auto', display: 'block', margin: '0 auto'}}
            />
          </div>

          <Formula
            expression={String.raw`F_e \cdot d_e = F_r \cdot d_r`}
            calculatorId="ley-palanca"
            definitions={palancasDefinitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular Fuerza de Resistencia", expression: String.raw`F_r = \frac{F_e \cdot d_e}{d_r}` },
                { description: "Calcular Distancia de Esfuerzo", expression: String.raw`d_e = \frac{F_r \cdot d_r}{F_e}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>F_e = Fuerza de esfuerzo aplicada (N)</li>
            <li>d_e = Distancia desde el fulcro hasta el punto de aplicación del esfuerzo (m)</li>
            <li>F_r = Fuerza de resistencia o carga (N)</li>
            <li>d_r = Distancia desde el fulcro hasta el punto de aplicación de la resistencia (m)</li>
          </ul>

          <Important>
            Esta ecuación nos dice que podemos levantar una gran carga aplicando una fuerza pequeña, 
            siempre que aumentemos suficientemente la distancia al fulcro. Es el principio del "brazo de palanca".
          </Important>

          <Example>
            Ejemplo: Levantando una roca pesada
            <br /><br />
            Queremos levantar una piedra de 200 N situada a 0.5 m del fulcro usando una barra. 
            Aplicamos nuestro esfuerzo a 2 m del fulcro:
            <br /><br />
            <code>F_e × d_e = F_r × d_r</code>
            <br />
            <code>F_e × 2 m = 200 N × 0.5 m</code>
            <br />
            <code>F_e = (200 N × 0.5 m) / 2 m = 50 N</code>
            <br /><br />
            Solo necesitamos aplicar 50 N para levantar 200 N. Reducimos el esfuerzo a ¼ 
            aumentando el brazo de potencia al cuádruple.
          </Example>
        </Concept>

        <Concept title="Ventaja Mecánica de las Palancas">
          <p>La Ventaja Mecánica (VM) es una medida de cuánto una palanca multiplica la fuerza.</p>
          
          <Formula
            expression={String.raw`VM = \frac{F_r}{F_e} = \frac{d_e}{d_r}`}
            calculatorId="ventaja-mecanica"
            definitions={palancasDefinitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular Fuerza de Resistencia", expression: String.raw`F_r = VM \cdot F_e` },
                { description: "Calcular Fuerza de Esfuerzo", expression: String.raw`F_e = \frac{F_r}{VM}` },
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>VM = Ventaja mecánica (adimensional)</li>
            <li>F_r = Fuerza de resistencia o carga (N)</li>
            <li>F_e = Fuerza de esfuerzo aplicada (N)</li>
            <li>d_e = Distancia del esfuerzo al fulcro (m)</li>
            <li>d_r = Distancia de la resistencia al fulcro (m)</li>
          </ul>

          <Important>
            • Si VM &gt; 1: La palanca multiplica la fuerza (aplicamos menos esfuerzo)
            <br />
            • Si VM = 1: No hay ventaja mecánica (misma fuerza en ambos lados)
            <br />
            • Si VM &lt; 1: La palanca reduce la fuerza pero gana velocidad y amplitud
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Los 3 Géneros de Palancas">
        <Concept title="Clasificación de Palancas">
          <p>
            Las palancas se clasifican en tres géneros o tipos según la posición relativa 
            del fulcro, el esfuerzo y la resistencia.
          </p>

          <Important>
            La clasificación depende de qué elemento está situado en el centro:
            <br />
            • 1er género: Fulcro en el centro
            <br />
            • 2º género: Resistencia en el centro
            <br />
            • 3er género: Esfuerzo en el centro
          </Important>

          <h4>📊 Tabla comparativa:</h4>
          <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1rem'}}>
            <thead>
              <tr style={{backgroundColor: 'var(--color-primary-light)', borderBottom: '2px solid var(--color-primary)'}}>
                <th style={{padding: '0.75rem', textAlign: 'left'}}>Género</th>
                <th style={{padding: '0.75rem', textAlign: 'left'}}>Posición</th>
                <th style={{padding: '0.75rem', textAlign: 'left'}}>Ventaja Mecánica</th>
                <th style={{padding: '0.75rem', textAlign: 'left'}}>Ejemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom: '1px solid var(--color-border)'}}>
                <td style={{padding: '0.75rem'}}>1er género</td>
                <td style={{padding: '0.75rem'}}>Esfuerzo—[Fulcro]—Resistencia</td>
                <td style={{padding: '0.75rem'}}>VM ≥ 1 o &lt; 1</td>
                <td style={{padding: '0.75rem'}}>Balancín, tijeras, alicates</td>
              </tr>
              <tr style={{borderBottom: '1px solid var(--color-border)'}}>
                <td style={{padding: '0.75rem'}}>2º género</td>
                <td style={{padding: '0.75rem'}}>Fulcro—[Resistencia]—Esfuerzo</td>
                <td style={{padding: '0.75rem'}}>Siempre VM &gt; 1</td>
                <td style={{padding: '0.75rem'}}>Carretilla, cascanueces</td>
              </tr>
              <tr>
                <td style={{padding: '0.75rem'}}>3er género</td>
                <td style={{padding: '0.75rem'}}>Fulcro—[Esfuerzo]—Resistencia</td>
                <td style={{padding: '0.75rem'}}>Siempre VM &lt; 1</td>
                <td style={{padding: '0.75rem'}}>Pinzas, caña, brazo</td>
              </tr>
            </tbody>
          </table>
        </Concept>

        <Concept title="Palancas de Primer Género" emoji="⚖️">
          <p>
            El fulcro está entre el esfuerzo y la resistencia. Es el tipo más versátil.
          </p>

          {/* Diagrama 1er género */}
          <div style={{textAlign: 'center', margin: '1.5rem auto', maxWidth: '600px'}}>
            <img 
              src="/src/assets/diagrams/palanca-primer-genero.svg" 
              alt="Palanca de Primer Género" 
              style={{width: '100%', height: 'auto', display: 'block', margin: '0 auto'}}
            />
          </div>

          <Important>
            • Si d_e &gt; d_r → VM &gt; 1 → Multiplicamos la fuerza
            <br />
            • Si d_e = d_r → VM = 1 → Equilibrio
            <br />
            • Si d_e &lt; d_r → VM &lt; 1 → Ganamos velocidad
          </Important>

          <Example>
            1. El balancín (sube y baja)
            <br /><br />
            Si un niño de 40 kg está a 2 m del centro, ¿a qué distancia debe sentarse un niño de 30 kg para equilibrar?
            <br />
            <code>40 kg × 2 m = 30 kg × d</code>
            <br />
            <code>d = 80 / 30 = 2.67 m</code>
          </Example>

          <Example>
            2. Las tijeras
            <br /><br />
            El tornillo central es el fulcro. Si cortamos cerca del fulcro necesitamos más fuerza pero más precisión. Si cortamos cerca de las anillas, menos esfuerzo pero menos precisión.
          </Example>

          <Example>
            3. Alicates (VM = 5)
            <br /><br />
            Si d_e = 15 cm y d_r = 3 cm: VM = 15/3 = 5
            <br />
            Si apretamos con 20 N, las puntas ejercen 100 N.
          </Example>

          <Example>
            4. Martillo sacando clavo (VM = 15)
            <br /><br />
            Clavo a 2 cm del apoyo, mango a 30 cm:
            <br />
            <code>F_e × 0.30 m = 200 N × 0.02 m</code>
            <br />
            <code>F_e = 13.3 N</code>
          </Example>

          <Example>
            5. Balanza de brazos iguales (VM = 1)
            <br /><br />
            Con d_e = d_r, no multiplica fuerza pero permite comparar masas con precisión.
          </Example>
        </Concept>

        <Concept title="Palancas de Segundo Género" emoji="🛒">
          <p>
            La resistencia está entre el fulcro y el esfuerzo. Siempre VM &gt; 1.
          </p>

          {/* Diagrama 2º género */}
          <div style={{textAlign: 'center', margin: '1.5rem auto', maxWidth: '600px'}}>
            <img 
              src="/src/assets/diagrams/palanca-segundo-genero.svg" 
              alt="Palanca de Segundo Género" 
              style={{width: '100%', height: 'auto', display: 'block', margin: '0 auto'}}
            />
          </div>

          <Important>
            Siempre multiplican la fuerza porque d_e &gt; d_r. Ideales para levantar cargas pesadas.
          </Important>

          <Example>
            1. La carretilla (VM = 3.5)
            <br /><br />
            Carga de 100 kg a 40 cm de la rueda, mangos a 140 cm:
            <br />
            <code>F_e × 1.40 m = 1000 N × 0.40 m</code>
            <br />
            <code>F_e = 285.7 N (≈29 kg)</code>
          </Example>

          <Example>
            2. Cascanueces (VM = 6)
            <br /><br />
            Si d_e = 12 cm y d_r = 2 cm: VM = 6
            <br />
            Con 50 N aplicados, la nuez recibe 300 N.
          </Example>

          <Example>
            3. El remo de barca
            <br /><br />
            El tolete es el fulcro, el agua está en medio, empujamos del extremo interior.
          </Example>

          <Example>
            4. Abrebotellas (VM = 8)
            <br /><br />
            Chapa a 1 cm del fulcro, mango a 8 cm: VM = 8
            <br />
            Si la chapa resiste 80 N, aplicamos solo 10 N.
          </Example>

          <Example>
            5. Rompenueces de pie (VM = 10)
            <br /><br />
            Con d_e = 50 cm y d_r = 5 cm: VM = 10
            <br />
            Pueden romper nueces muy duras con poco esfuerzo.
          </Example>
        </Concept>

        <Concept title="Palancas de Tercer Género" emoji="🎣">
          <p>
            El esfuerzo está entre el fulcro y la resistencia. Siempre VM &lt; 1.
          </p>

          {/* Diagrama 3er género */}
          <div style={{textAlign: 'center', margin: '1.5rem auto', maxWidth: '600px'}}>
            <img 
              src="/src/assets/diagrams/palanca-tercer-genero.svg" 
              alt="Palanca de Tercer Género" 
              style={{width: '100%', height: 'auto', display: 'block', margin: '0 auto'}}
            />
          </div>

          <Important>
            Reducen la fuerza pero ganan velocidad y amplitud de movimiento. Comunes en el cuerpo humano.
          </Important>

          <Example>
            1. Brazo humano (VM = 0.11)
            <br /><br />
            Bíceps a 4 cm del codo, mano a 35 cm: VM = 4/35 = 0.11
            <br />
            Para sostener 10 kg (100 N):
            <br />
            <code>F_biceps = 35/0.04 = 875 N (≈87.5 kg)</code>
            <br />
            El bíceps ejerce 9 veces más fuerza, pero gana velocidad de movimiento.
          </Example>

          <Example>
            2. Pinzas de depilar
            <br /><br />
            Necesitamos más fuerza pero conseguimos movimiento preciso y delicado en las puntas.
          </Example>

          <Example>
            3. Caña de pescar (VM = 0.13)
            <br /><br />
            Esfuerzo a 40 cm, pez a 3 m: VM = 0.40/3.00 = 0.13
            <br />
            Aplicamos 7.5 veces más fuerza, pero el extremo se mueve 7.5 veces más.
          </Example>

          <Example>
            4. Pala de cavar (VM = 0.71)
            <br /><br />
            Mano superior a 50 cm, punta a 70 cm: VM = 50/70 = 0.71
            <br />
            Más fuerza pero mayor penetración y movimiento de tierra.
          </Example>

          <Example>
            5. Mandíbula humana (VM = 0.4)
            <br /><br />
            Músculo a 4 cm, incisivos a 10 cm: VM = 4/10 = 0.4
            <br />
            Los molares (más cerca) permiten morder con hasta 900 N.
          </Example>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🔧</span> Aplicaciones en la Vida Real
        </h2>
        
        <div className="theory-subsection">
          <h3>🏗️ Construcción y demolición</h3>
          <p>
            Las barras de palanca (patas de cabra) son herramientas esenciales en construcción. Con una barra de 1.5 metros, un trabajador puede levantar vigas de cientos de kilos o arrancar clavos profundamente incrustados. La ventaja mecánica puede superar 20:1.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚜 Maquinaria pesada</h3>
          <p>
            Las excavadoras usan palancas hidráulicas de tercer género en sus brazos. Aunque requieren más fuerza del pistón hidráulico, ganan velocidad y alcance, permitiendo movimientos rápidos y precisos para excavar toneladas de tierra.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎹 Instrumentos musicales</h3>
          <p>
            El piano usa palancas de primer género: las teclas son palancas que transmiten el movimiento a los martillos que golpean las cuerdas. La ventaja mecánica permite tocar con suavidad mientras los martillos golpean con fuerza suficiente para producir sonido.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦴 Cuerpo humano</h3>
          <p>
            Nuestro cuerpo está lleno de palancas de tercer género. Los músculos se insertan cerca de las articulaciones (fulcros), sacrificando fuerza por velocidad. Por eso podemos mover las manos rápidamente pero necesitamos músculos fuertes.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>✂️ Herramientas de corte</h3>
          <p>
            Tijeras, alicates y cortaalambres son palancas de primer género. Las tijeras de podar tienen mangos largos y hojas cortas para multiplicar la fuerza y cortar ramas gruesas. Las tijeras de costura tienen brazos iguales para precisión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚪 Puertas y manijas</h3>
          <p>
            Una puerta es una palanca de primer género donde las bisagras son el fulcro. Por eso es más fácil abrir empujando lejos de las bisagras (mayor brazo de palanca) que cerca de ellas.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        
        <div className="theory-subsection">
          <h3>🏛️ Arquímedes y la palanca (250 a.C.)</h3>
          <p>
            Arquímedes de Siracusa fue el primero en formalizar matemáticamente el principio de la palanca. Su famosa frase "Dadme un punto de apoyo y moveré el mundo" ilustra su comprensión del poder de las palancas. Demostró que con una palanca suficientemente larga, cualquier peso puede ser movido.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏺 Palancas en la antigüedad</h3>
          <p>
            Las palancas se usaban desde la prehistoria. Los egipcios usaban palancas para mover los bloques de piedra de las pirámides (2500 a.C.). Los romanos desarrollaron balanzas de brazos iguales para comercio justo. Las catapultas medievales eran palancas gigantes de primer género.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ Revolución Industrial</h3>
          <p>
            Durante la Revolución Industrial (siglo XVIII), las palancas se combinaron con vapor y engranajes. Las prensas hidráulicas usaban palancas para multiplicar la fuerza de los pistones. Las máquinas de vapor tenían palancas que convertían el movimiento lineal de los pistones en rotación.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🤖 Era moderna</h3>
          <p>
            Hoy, las palancas siguen siendo fundamentales. Los robots industriales usan palancas en cada articulación. Los controles de aviones son palancas que transmiten los movimientos del piloto a las superficies de control. Incluso los teclados de computadora usan pequeñas palancas bajo cada tecla.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>🌍 Arquímedes y el barco del rey</h3>
          <p>
            Según Plutarco, el rey Hierón II desafió a Arquímedes a demostrar su teoría de las palancas. Arquímedes diseñó un sistema de poleas y palancas compuestas y, sentado cómodamente, movió él solo un barco de guerra completamente cargado que normalmente requería cientos de hombres. El rey quedó tan impresionado que ordenó que se creyera todo lo que Arquímedes dijera sobre mecánica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💪 La fuerza del bíceps</h3>
          <p>
            Tu bíceps ejerce aproximadamente 7 veces más fuerza que el peso que sostienes en la mano. Si sostienes una pesa de 10 kg, tu bíceps está tirando con unos 70 kg de fuerza. Esto se debe a que el brazo es una palanca de tercer género con muy poca ventaja mecánica (VM ≈ 0.14).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦖 Dinosaurios y palancas</h3>
          <p>
            El Tyrannosaurus Rex tenía una mandíbula que funcionaba como una palanca de tercer género extremadamente poderosa. Sus músculos masticadores podían generar una fuerza de mordida de hasta 57,000 Newtons (5.8 toneladas), suficiente para triturar huesos. La ventaja mecánica era baja, pero los músculos eran enormes.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎪 El equilibrista y la pértiga</h3>
          <p>
            Los equilibristas usan pértigas largas no solo para equilibrio, sino como palancas. La pértiga aumenta el momento de inercia, haciendo más lentos los movimientos de rotación. Philippe Petit usó una pértiga de 8 metros y 25 kg cuando cruzó entre las Torres Gemelas en 1974.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔨 El martillo más eficiente</h3>
          <p>
            Un martillo de carpintero es una palanca de primer género cuando sacas clavos. La ventaja mecánica puede ser de 15:1 o más. Un clavo que requeriría 300 N para sacarlo directamente, puede extraerse con solo 20 N usando el martillo correctamente. Por eso los carpinteros prefieren martillos con mangos largos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏋️ Récord de fuerza con palanca</h3>
          <p>
            En 2016, un equipo en Alemania usó una palanca de 20 metros para levantar un peso de 10 toneladas con solo 50 kg de fuerza aplicada (VM = 200:1). Demostraron que con la palanca correcta, una persona puede mover pesos increíbles. Arquímedes tenía razón: con el punto de apoyo adecuado, podrías mover el mundo.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          Las palancas son barras rígidas que giran sobre un fulcro, permitiendo multiplicar fuerzas (F_e × d_e = F_r × d_r). 
          Se clasifican en tres géneros según la posición del fulcro, esfuerzo y resistencia. La ventaja mecánica (VM) indica 
          cuánto multiplica la fuerza. Las palancas de 1er y 2º género multiplican fuerza, las de 3er género ganan velocidad. 
          Son fundamentales en herramientas, maquinaria y el cuerpo humano.
        </p>
      </div>
    </>
  );
};

export default PalancasTheory;
