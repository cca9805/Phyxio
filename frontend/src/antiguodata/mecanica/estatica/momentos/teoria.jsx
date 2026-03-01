import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as momentosDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Momentos y Torque",
  descripcion: "Momento de una fuerza, torque, equilibrio rotacional y teorema de Varignon",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const MomentosTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Momento de una Fuerza (Torque)">
        <p>
          En estática, no solo importa cuánta fuerza se aplica, sino también dónde se aplica. El momento, también conocido como torque, es la medida de la capacidad de una fuerza para hacer girar un objeto alrededor de un punto o eje. Es, en esencia, una "fuerza de giro".
        </p>
        <p>
          Experimentamos momentos constantemente: al abrir una puerta (aplicamos fuerza lejos de las bisagras), 
          al usar una llave inglesa (más larga = más fácil aflojar tuercas), o al balancearnos en un sube y baja. 
          El momento determina si un objeto permanece en equilibrio rotacional o comienza a girar.
        </p>
      </TheorySection>

      <TheorySection title="Cálculo del Momento: Las Fórmulas">
        <Concept title="Momento con Fuerza Perpendicular">
          <p>
            Cuando la fuerza es perpendicular al brazo de palanca, el cálculo es directo. Usa la calculadora para la fórmula principal o sus despejes.
          </p>
          <Formula 
              expression="M = F * d" 
              definitions={momentosDefinitions}
              calculatorId="momento-simple"
              exercises={exercises}
              complementary={[
                { description: "Calcular Fuerza (F = M/d)", expression: "F = M / d" },
                { description: "Calcular Distancia (d = M/F)", expression: "d = M / F" },
              ]}
              />
          
          <p>Donde:</p>
          <ul>
            <li>M: Momento o torque (N·m)</li>
            <li>F: Fuerza aplicada (N)</li>
            <li>d: Distancia perpendicular (brazo de palanca) (m)</li>
          </ul>
          
          <Example>
            Una fuerza de 50 N aplicada a 0.3 m del eje de giro genera un momento de M = 50 × 0.3 = 15 N·m. 
            Si duplicamos la distancia a 0.6 m, el momento se duplica a 30 N·m, haciendo más fácil girar el objeto.
          </Example>
        </Concept>
        
        <Concept title="Momento con Fuerza en Ángulo">
          <p>
            En casos más generales, cuando la fuerza forma un ángulo con el brazo de palanca, la fórmula incluye el seno de dicho ángulo.
          </p>
          <Formula 
              expression="M = F * r * sin(θ)" 
              definitions={momentosDefinitions}
              calculatorId="momento-fuerza-angulo"
              exercises={exercises}
              complementary={[
                { description: "Calcular Fuerza (F = M/(r*sinθ))", expression: "F = M/(r*sinθ)" },
                { description: "Calcular Distancia (r = M/(F*sinθ))", expression: "r = M/(F*sinθ)" },
                { description: "Calcular Ángulo (θ = asin(M/(F*r)))", expression: "θ = asin(M/(F*r))" }
              ]}
              />
          
          <p>Donde:</p>
          <ul>
            <li>M: Momento o torque (N·m)</li>
            <li>F: Fuerza aplicada (N)</li>
            <li>r: Distancia desde el punto de giro (m)</li>
            <li>θ: Ángulo entre la fuerza y el brazo de palanca (grados o radianes)</li>
          </ul>
          
          <Example>
            Si aplicas 100 N a 0.5 m del eje con un ángulo de 30°, el momento es M = 100 × 0.5 × sin(30°) = 25 N·m. 
            Si la fuerza fuera perpendicular (90°), el momento sería máximo: M = 100 × 0.5 × sin(90°) = 50 N·m.
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Convención de Signos y Equilibrio">
        <Concept title="Signos y Equilibrio Rotacional">
          <p>
            Para diferenciar las direcciones de giro, usamos una convención de signos:
          </p>
          <ul>
              <li>Momento Positivo (+): Rotación en sentido antihorario.</li>
              <li>Momento Negativo (-): Rotación en sentido horario.</li>
          </ul>
          <Important>
              <p>Para que un objeto no rote (equilibrio rotacional), la suma de todos los momentos que actúan sobre él debe ser cero:</p>
              <Formula 
                expression="ΣM = 0"
                calculatorId="momentos-equilibrio"
                definitions={momentosDefinitions}
                exercises={exercises}
              />
              
              <p>Donde:</p>
              <ul>
                <li>ΣM: Suma algebraica de todos los momentos (N·m)</li>
              </ul>
              
              <Example>
                En un sube y baja, si un niño de 30 kg está a 2 m del centro y otro de 40 kg está al otro lado, 
                ¿a qué distancia debe sentarse el segundo para equilibrar? Los momentos deben ser iguales: 
                30 × 9.8 × 2 = 40 × 9.8 × d, entonces d = 1.5 m.
              </Example>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Teorema de Varignon">
        <Concept title="Momento por Componentes">
          <p>
            El Teorema de Varignon establece que el momento de una fuerza es igual a la suma de los momentos de sus componentes. Es un método muy útil para evitar cálculos trigonométricos complejos.
          </p>
          <Formula 
              expression="M_O = (Fy * x) - (Fx * y)"
              definitions={momentosDefinitions}
              calculatorId="momento-varignon"
              exercises={exercises}
              complementary={[
                { description: "Calcular Fuerza Y (Fy = (M+Fx*y)/x)", expression: "Fy = (M+Fx*y)/x" },
                { description: "Calcular Fuerza X (Fx = (Fy*x-M)/y)", expression: "Fx = (Fy*x-M)/y" }
              ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>M_O: Momento respecto al punto O (N·m)</li>
            <li>Fx: Componente horizontal de la fuerza (N)</li>
            <li>Fy: Componente vertical de la fuerza (N)</li>
            <li>x: Distancia horizontal desde el punto O (m)</li>
            <li>y: Distancia vertical desde el punto O (m)</li>
          </ul>
        </Concept>
      </TheorySection>

      <h2><span>🏗️</span> Aplicaciones Prácticas</h2>
      <div className="theory-applications-section">
        <div className="theory-subsection">
          <h3>🔧 Llaves y Herramientas</h3>
          <p>
            Las llaves inglesas, destornilladores y llaves de tuercas aplican momentos para aflojar o apretar. 
            Una llave más larga genera mayor momento con la misma fuerza. Las llaves dinamométricas permiten 
            aplicar un momento específico (por ejemplo, 100 N·m) para no dañar roscas. Los mecánicos usan 
            llaves de hasta 1 metro para tuercas muy apretadas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🚪 Puertas y Bisagras</h3>
          <p>
            Las puertas se diseñan para abrirse fácilmente aplicando fuerza lejos de las bisagras (máximo brazo de palanca). 
            Si empujas cerca de las bisagras, necesitas mucha más fuerza. Las puertas pesadas de bancos tienen manijas 
            extra largas para reducir la fuerza necesaria. Las puertas automáticas usan motores que generan el momento 
            necesario para abrirlas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏗️ Grúas y Brazos Mecánicos</h3>
          <p>
            Las grúas torre deben equilibrar el momento de la carga suspendida con el momento del contrapeso. 
            Si una grúa levanta 10 toneladas a 40 m del eje, genera un momento de 4,000 kN·m que debe equilibrarse 
            con un contrapeso de 20 toneladas a 20 m del otro lado. Los brazos robóticos calculan momentos en cada 
            articulación para mover cargas con precisión.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🚗 Motores y Transmisiones</h3>
          <p>
            Los motores de automóviles generan torque (momento) que se transmite a las ruedas. Un motor puede producir 
            400 N·m de torque a 3000 rpm. La transmisión multiplica este torque: en primera marcha puede llegar a 
            2000 N·m en las ruedas, permitiendo arrancar desde reposo o subir pendientes pronunciadas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>⚙️ Engranajes y Poleas</h3>
          <p>
            Los sistemas de engranajes transmiten y modifican momentos. Un engranaje pequeño moviendo uno grande 
            multiplica el torque pero reduce la velocidad. Las bicicletas usan este principio: en marchas bajas, 
            el plato grande y piñón pequeño multiplican el torque para subir cuestas. Los relojes mecánicos usan 
            engranajes para distribuir el momento del resorte.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏋️ Ejercicio y Biomecánica</h3>
          <p>
            Los músculos generan momentos en las articulaciones. Al levantar un peso con el brazo extendido, 
            el bíceps debe generar un momento mucho mayor que el peso del objeto porque el brazo de palanca del músculo 
            (5 cm) es mucho menor que el del peso (30 cm). Por eso es más difícil sostener pesos con el brazo extendido.
          </p>
        </div>
      </div>

      <h2><span>📜</span> Historia y Desarrollo</h2>
      <div className="theory-history-section">
        <div className="theory-subsection">
          <h3>🏛️ Antigüedad: Palancas de Arquímedes (250 a.C.)</h3>
          <p>
            Arquímedes (287-212 a.C.) fue el primero en estudiar sistemáticamente las palancas y el principio del momento. 
            Su famosa frase "Dadme un punto de apoyo y moveré el mundo" ilustra que con un brazo de palanca suficientemente 
            largo, una fuerza pequeña puede generar un momento enorme. Desarrolló la ley de la palanca: F₁ × d₁ = F₂ × d₂.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔬 Renacimiento: Estudios de Leonardo (1500)</h3>
          <p>
            Leonardo da Vinci (1452-1519) estudió momentos en máquinas, poleas y mecanismos. Diseñó grúas y sistemas 
            de engranajes aplicando principios de momento. Sus cuadernos contienen análisis detallados de cómo las 
            fuerzas generan rotación en diferentes configuraciones mecánicas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>⚖️ Era Clásica: Formalización Matemática (1700)</h3>
          <p>
            Pierre Varignon (1654-1722) formuló su teorema en 1687, demostrando que el momento de una fuerza es igual 
            a la suma de los momentos de sus componentes. Leonhard Euler (1707-1783) desarrolló las ecuaciones de 
            equilibrio rotacional y estudió la dinámica de cuerpos rígidos en rotación.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏗️ Revolución Industrial: Aplicaciones Mecánicas (1800-1900)</h3>
          <p>
            El desarrollo de máquinas de vapor, motores y transmisiones requirió cálculos precisos de torque. 
            James Watt (1736-1819) diseñó reguladores centrífugos que controlaban el torque de máquinas de vapor. 
            La construcción de puentes metálicos y estructuras complejas impulsó el análisis de momentos en vigas y armaduras.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>💻 Era Moderna: Análisis Computacional (1950-presente)</h3>
          <p>
            Los motores eléctricos modernos tienen sensores de torque que miden momentos en tiempo real. 
            Los sistemas de control ajustan el torque con precisión de milisegundos. En robótica, cada articulación 
            calcula momentos continuamente para movimientos precisos. Los simuladores de vuelo y videojuegos calculan 
            momentos de inercia y torques para física realista.
          </p>
        </div>
      </div>

      <h2><span>🎯</span> Anécdotas y Curiosidades</h2>
      <div className="theory-anecdotes-section">
        <div className="theory-subsection">
          <h3>🏛️ Arquímedes y la Defensa de Siracusa</h3>
          <p>
            Durante el asedio romano de Siracusa (214-212 a.C.), Arquímedes diseñó máquinas de guerra basadas en 
            palancas y momentos. Sus catapultas usaban brazos largos para lanzar proyectiles enormes. Según la leyenda, 
            también diseñó "garras" que usaban momentos para volcar barcos romanos. Los romanos tenían tanto miedo 
            que huían al ver cualquier viga saliendo de las murallas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔧 La Llave Inglesa más Grande del Mundo</h3>
          <p>
            La llave inglesa más grande mide 5.5 metros y pesa 1,200 kg. Fue fabricada en Alemania para apretar 
            tuercas de turbinas eólicas gigantes. Puede generar momentos de hasta 25,000 N·m. Se necesita una grúa 
            para moverla y varios operarios para usarla.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🚗 El Motor con Mayor Torque</h3>
          <p>
            El motor diésel Wärtsilä-Sulzer RTA96-C, usado en superpetroleros, genera 7,603,850 N·m de torque 
            (7.6 millones de newton-metro). Mide 13.5 metros de alto y pesa 2,300 toneladas. Un solo cilindro 
            tiene el tamaño de un automóvil pequeño. Puede mover barcos de 400,000 toneladas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏋️ El Récord de Torque Humano</h3>
          <p>
            El récord mundial de levantamiento de peso muerto es de 501 kg (Eddie Hall, 2016). Al levantar, 
            los músculos de la espalda generan momentos enormes en la columna vertebral. Los discos intervertebrales 
            soportan fuerzas de compresión superiores a 3,000 kg durante el levantamiento. Por eso es crucial 
            la técnica correcta para distribuir los momentos.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🌪️ Tornados y Momentos Atmosféricos</h3>
          <p>
            Los tornados más potentes (EF5) generan momentos de rotación tan grandes que pueden arrancar edificios 
            de sus cimientos. El tornado de Moore, Oklahoma (2013) tenía vientos de 340 km/h y generaba momentos 
            capaces de lanzar automóviles a cientos de metros. La rotación se debe a diferencias de presión que 
            crean momentos en la atmósfera.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🎢 Montañas Rusas y Momentos de Inercia</h3>
          <p>
            Las montañas rusas más extremas generan fuerzas G que crean momentos en el cuello y columna. 
            El "Formula Rossa" en Abu Dhabi acelera de 0 a 240 km/h en 4.9 segundos, generando momentos que 
            obligan a los pasajeros a usar gafas protectoras. Los diseñadores calculan cuidadosamente los momentos 
            para que sean emocionantes pero seguros.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          El momento o torque es la medida de la capacidad de una fuerza para hacer girar un objeto. 
          Se calcula como M = F × d cuando la fuerza es perpendicular, o M = F × r × sin(θ) cuando forma un ángulo. 
          El brazo de palanca (distancia al eje) es crucial: mayor distancia = mayor momento con la misma fuerza.
        </p>
        <p>
          Para equilibrio rotacional, la suma de todos los momentos debe ser cero (ΣM = 0). Los momentos antihorarios 
          se consideran positivos y los horarios negativos. El Teorema de Varignon permite calcular momentos 
          descomponiendo fuerzas en componentes, simplificando cálculos complejos.
        </p>
        <p>
          Desde las palancas de Arquímedes hasta los motores modernos, el concepto de momento es fundamental 
          en ingeniería mecánica, estructural y robótica. Aplicaciones cotidianas incluyen herramientas, puertas, 
          motores, grúas y hasta el funcionamiento de nuestros músculos.
        </p>
      </div>
    </>
  );
};

export default MomentosTheory;
