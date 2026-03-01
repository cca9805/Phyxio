import { Formula, Concept, TheorySection, Important } from '../../../../components/TheoryV2';
import { definitions } from './definitions';
import exercises from './ejercicios.json';

// Metadatos del tema
export const metadata = {
  titulo: "Gravitación",
  descripcion: "Ley de gravitación universal y movimiento planetario",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const GravitacionTheory = () => {
  return (
    <>
      <TheorySection title="Introducción a la Gravitación">
        <p>
          La gravitación es la fuerza de atracción universal que actúa entre todos los objetos con masa. Descrita por Isaac Newton, es una de las cuatro fuerzas fundamentales de la naturaleza, responsable de fenómenos como las órbitas planetarias y la caída de los cuerpos.
        </p>
        <Important>
            <p>La constante de gravitación universal (G) es aproximadamente 6.674 × 10⁻¹¹ N·m²/kg². Su pequeño valor explica por qué no sentimos la atracción hacia objetos cotidianos, pero es crucial a escala planetaria.</p>
        </Important>
      </TheorySection>

      <TheorySection title="Leyes y Fórmulas Principales">
        <Concept title="Ley de la Gravitación Universal">
          <p>La fuerza de atracción (F) entre dos masas (m₁ y m₂) es directamente proporcional al producto de sus masas e inversamente proporcional al cuadrado de la distancia (r) que las separa.</p>
          <Formula
            expression={String.raw`F = G \frac{m_1 m_2}{r^2}`}
            calculatorId="ley-gravitacion-universal"
            definitions={definitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular Masa", expression: String.raw`m_1 = \frac{F r^2}{G m_2}` },
                { description: "Calcular Distancia", expression: String.raw`r = \sqrt{\frac{G m_1 m_2}{F}}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>F = Fuerza gravitatoria (N)</li>
            <li>G = Constante de gravitación universal (6.674×10⁻¹¹ N·m²/kg²)</li>
            <li>m₁, m₂ = Masas de los dos objetos (kg)</li>
            <li>r = Distancia entre los centros de masa (m)</li>
          </ul>
        </Concept>

        <Concept title="Aceleración Gravitatoria (g)">
          <p>La aceleración gravitatoria (g) es la aceleración que experimenta un objeto debido a la fuerza gravitatoria de un cuerpo masivo, como un planeta. Su valor depende de la masa (M) y el radio (r) del cuerpo masivo.</p>
          <Formula
            expression={String.raw`g = G \frac{M}{r^2}`}
            calculatorId="aceleracion-gravitatoria" 
            definitions={definitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular Masa del Planeta", expression: String.raw`M = \frac{g r^2}{G}` },
                { description: "Calcular Radio del Planeta", expression: String.raw`r = \sqrt{\frac{G M}{g}}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>g = Aceleración gravitatoria (m/s²)</li>
            <li>G = Constante de gravitación universal (6.674×10⁻¹¹ N·m²/kg²)</li>
            <li>M = Masa del cuerpo masivo (kg)</li>
            <li>r = Distancia desde el centro del cuerpo masivo (m)</li>
          </ul>
        </Concept>

        <Concept title="Peso de un Objeto">
            <p>El peso (P) es simplemente la fuerza gravitatoria que un planeta ejerce sobre un objeto en su superficie o cerca de ella. Se calcula usando la aceleración gravitatoria local g. Para la Tierra, g ≈ 9.8 m/s².</p>
            <Formula
                expression="P = m \cdot g"
                calculatorId="peso-terrestre"
                definitions={definitions}
                exercises={exercises}
                complementary={[
                    { description: "Calcular Masa", expression: "m = P / g" }
                ]}
            />
            
            <p><strong>Donde:</strong></p>
            <ul>
              <li>P = Peso del objeto (N)</li>
              <li>m = Masa del objeto (kg)</li>
              <li>g = Aceleración gravitatoria local (m/s²)</li>
            </ul>
        </Concept>

        <Concept title="Energía Potencial Gravitatoria (U)">
          <p>Es la energía que un sistema de dos masas posee debido a su separación en un campo gravitatorio. Por convención, es negativa, indicando que es una fuerza de atracción.</p>
          <Formula
            expression={String.raw`U = -G \frac{m_1 m_2}{r}`}
            calculatorId="energia-potencial-gravitatoria"
            definitions={definitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular Masa", expression: String.raw`m_1 = -\frac{U r}{G m_2}` },
                { description: "Calcular Distancia", expression: String.raw`r = -\frac{G m_1 m_2}{U}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>U = Energía potencial gravitatoria (J)</li>
            <li>G = Constante de gravitación universal (6.674×10⁻¹¹ N·m²/kg²)</li>
            <li>m₁, m₂ = Masas de los dos objetos (kg)</li>
            <li>r = Distancia entre los centros de masa (m)</li>
          </ul>
        </Concept>

        <Concept title="Velocidades Cósmicas">
          <p>Para que un objeto mantenga una órbita circular o escape de la atracción de un cuerpo masivo, necesita alcanzar ciertas velocidades críticas.</p>
          <Formula
            expression={String.raw`v_{orb} = \sqrt{\frac{G M}{r}}`}
            description="La velocidad orbital es la necesaria para mantener una órbita circular estable a una distancia r del centro de un cuerpo de masa M."
            calculatorId="velocidades-orbitales"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Velocidad de Escape", expression: String.raw`v_{esc} = \sqrt{\frac{2 G M}{r}}` },
              { description: "Calcular Masa desde v_orb", expression: String.raw`M = \frac{v_{orb}^2 r}{G}` },
              { description: "Calcular Radio desde v_orb", expression: String.raw`r = \frac{G M}{v_{orb}^2}` },
              { description: "Calcular Masa desde v_esc", expression: String.raw`M = \frac{v_{esc}^2 r}{2 G}` },
              { description: "Calcular Radio desde v_esc", expression: String.raw`r = \frac{2 G M}{v_{esc}^2}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>v_orb = Velocidad orbital (m/s)</li>
            <li>v_esc = Velocidad de escape (m/s)</li>
            <li>G = Constante de gravitación universal (6.674×10⁻¹¹ N·m²/kg²)</li>
            <li>M = Masa del cuerpo central (kg)</li>
            <li>r = Radio de la órbita o distancia desde el centro (m)</li>
          </ul>
        </Concept>

        <Concept title="3ª Ley de Kepler (Forma Newtoniana)">
          <p>Relaciona el período orbital (T) de un cuerpo con el radio de su órbita (r) y la masa del cuerpo central (M).</p>
          <Formula
            expression={String.raw`T^2 = \frac{4\pi^2}{G M} r^3`}
            calculatorId="tercera-ley-kepler"
            definitions={definitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular Radio Orbital", expression: String.raw`r = \sqrt[3]{\frac{G M T^2}{4\pi^2}}` },
                { description: "Calcular Masa Central", expression: String.raw`M = \frac{4\pi^2 r^3}{G T^2}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>T = Período orbital (s)</li>
            <li>G = Constante de gravitación universal (6.674×10⁻¹¹ N·m²/kg²)</li>
            <li>M = Masa del cuerpo central (kg)</li>
            <li>r = Radio de la órbita (m)</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🛰️ Satélites de comunicación y GPS</h3>
          <p>
            Los satélites GPS orbitan a 20,200 km de altura con un período de 12 horas. Su posición se calcula usando la ley de gravitación y las leyes de Kepler. El sistema GPS requiere al menos 4 satélites visibles para triangular tu posición con precisión de metros. Sin entender la gravitación, no tendríamos navegación por satélite, comunicaciones globales ni pronósticos meteorológicos precisos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 Misiones espaciales y asistencia gravitatoria</h3>
          <p>
            Las sondas espaciales usan "asistencia gravitatoria" para ganar velocidad sin gastar combustible. La sonda Voyager 2 usó la gravedad de Júpiter, Saturno, Urano y Neptuno para acelerar y cambiar de dirección. Esto permitió visitar los cuatro planetas gigantes en una sola misión. Los ingenieros calculan estas trayectorias con años de anticipación usando la ley de gravitación universal.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌊 Mareas oceánicas</h3>
          <p>
            Las mareas son causadas por la diferencia en la fuerza gravitatoria de la Luna (y el Sol) entre el lado cercano y lejano de la Tierra. La Luna atrae el agua del lado cercano más fuertemente, creando una "protuberancia". El lado lejano experimenta menos atracción, creando otra protuberancia. Por eso hay dos mareas altas al día. Las mareas vivas (más altas) ocurren cuando el Sol y la Luna se alinean.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔭 Detección de exoplanetas</h3>
          <p>
            Los astrónomos detectan planetas alrededor de otras estrellas observando el "bamboleo" gravitatorio que causan en su estrella. Un planeta masivo hace que la estrella se mueva ligeramente. Midiendo este movimiento con espectroscopía Doppler, podemos calcular la masa y órbita del planeta usando la ley de gravitación. Así se han descubierto más de 5,000 exoplanetas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚫ Agujeros negros</h3>
          <p>
            Un agujero negro es un objeto tan masivo y compacto que su velocidad de escape excede la velocidad de la luz. Usando v_esc = √(2GM/r) y v_esc = c (velocidad de la luz), podemos calcular el "radio de Schwarzschild": r_s = 2GM/c². Para el Sol, r_s ≈ 3 km. Si comprimieras el Sol a menos de 3 km de radio, se convertiría en un agujero negro.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌌 Materia oscura</h3>
          <p>
            Las galaxias giran tan rápido que deberían desintegrarse según la ley de gravitación y la masa visible. Pero no lo hacen. Esto sugiere que hay "materia oscura" invisible que proporciona gravedad adicional. Aproximadamente el 85% de la materia del universo es oscura. Su naturaleza es uno de los mayores misterios de la física moderna.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De Aristóteles a Einstein
        </h2>
        
        <div className="theory-subsection">
          <h3>Aristóteles (384-322 a.C.): La teoría geocéntrica</h3>
          <p>
            Aristóteles creía que los objetos pesados caían más rápido porque "buscaban su lugar natural" en el centro del universo (la Tierra). Pensaba que los planetas y estrellas estaban en esferas cristalinas perfectas que giraban alrededor de la Tierra. Esta visión dominó durante casi 2,000 años, aunque era incorrecta.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Johannes Kepler (1571-1630): Las leyes del movimiento planetario</h3>
          <p>
            Kepler analizó décadas de observaciones de Tycho Brahe y descubrió tres leyes empíricas del movimiento planetario: (1) Las órbitas son elipses, no círculos. (2) Los planetas barren áreas iguales en tiempos iguales. (3) T² es proporcional a r³. Estas leyes describían el movimiento, pero Kepler no sabía por qué funcionaban.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Isaac Newton (1643-1727): La ley de gravitación universal</h3>
          <p>
            En 1687, Newton publicó los Principia, donde derivó las leyes de Kepler a partir de su ley de gravitación universal (F = Gm₁m₂/r²) y sus leyes del movimiento. Demostró que la misma fuerza que hace caer una manzana mantiene la Luna en órbita. Esta unificación de la física terrestre y celeste fue revolucionaria. Newton también calculó G indirectamente, aunque su valor preciso se midió 71 años después.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Henry Cavendish (1798): Midiendo G</h3>
          <p>
            Cavendish midió la constante G usando una balanza de torsión con esferas de plomo. Su experimento fue tan preciso que su valor de G difiere solo 1% del valor moderno. Este experimento también permitió "pesar la Tierra" por primera vez, calculando su masa en 5.97 × 10²⁴ kg.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Albert Einstein (1915): Relatividad General</h3>
          <p>
            Einstein revolucionó nuestra comprensión de la gravedad con su Teoría de la Relatividad General. Mostró que la gravedad no es una fuerza, sino la curvatura del espacio-tiempo causada por la masa. Los objetos siguen trayectorias "rectas" en este espacio-tiempo curvado. La ley de Newton es una excelente aproximación a bajas velocidades y campos gravitatorios débiles, pero falla cerca de agujeros negros o a velocidades cercanas a la luz.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>🍎 La manzana de Newton: ¿Realidad o mito?</h3>
          <p>
            La historia de la manzana cayendo sobre Newton es parcialmente cierta. Newton contó que vio caer una manzana y se preguntó si la misma fuerza que la hacía caer también mantenía la Luna en órbita. Pero la manzana no le golpeó la cabeza; esa parte es un embellecimiento posterior. El árbol original aún existe en Woolsthorpe Manor, Inglaterra, y se han plantado sus descendientes en universidades de todo el mundo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌙 La Luna se aleja 3.8 cm por año</h3>
          <p>
            Las mareas terrestres transfieren momento angular a la Luna, haciéndola alejarse lentamente. Hace 4,500 millones de años, la Luna estaba 20 veces más cerca y las mareas eran 1,000 veces más altas. En el futuro lejano, la Luna estará tan lejos que su período orbital igualará la rotación terrestre (47 días), y ambos quedarán "anclados" mutuamente, siempre mostrando la misma cara.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 La velocidad de escape de la Tierra</h3>
          <p>
            Para escapar de la gravedad terrestre, un objeto debe alcanzar 11.2 km/s (40,320 km/h). Esta velocidad es independiente de la masa del objeto: una pluma y un cohete necesitan la misma velocidad. Los cohetes no alcanzan esta velocidad instantáneamente; aceleran gradualmente para minimizar la resistencia del aire y el consumo de combustible.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚫ El agujero negro más cercano</h3>
          <p>
            El agujero negro estelar más cercano conocido está a unos 1,600 años luz. Tiene unas 10 masas solares comprimidas en un radio de 30 km. Su gravedad es tan intensa que si te acercaras, la diferencia de fuerza entre tu cabeza y tus pies (fuerza de marea) te estiraría como espagueti, un fenómeno llamado "espaguetificación". Morirías mucho antes de cruzar el horizonte de eventos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌍 Gravedad cero no existe en órbita</h3>
          <p>
            Los astronautas en la Estación Espacial Internacional (400 km de altura) experimentan el 90% de la gravedad terrestre. No flotan porque no hay gravedad, sino porque están en caída libre continua. La estación y los astronautas caen hacia la Tierra constantemente, pero su velocidad lateral (7.66 km/s) hace que "fallen" el planeta, orbitándolo. Es caída libre permanente, no ausencia de gravedad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🪐 Júpiter: El escudo del Sistema Solar</h3>
          <p>
            La enorme gravedad de Júpiter (318 veces la masa terrestre) actúa como un "escudo gravitatorio" para la Tierra. Desvía o captura muchos cometas y asteroides que de otro modo podrían impactar la Tierra. En 1994, el cometa Shoemaker-Levy 9 se fragmentó y colisionó con Júpiter en un espectáculo observado por telescopios de todo el mundo. Sin Júpiter, la vida en la Tierra habría sido bombardeada con muchos más impactos.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <p>
          La ley de gravitación universal de Newton (F = Gm₁m₂/r²) establece que todos los objetos con masa se atraen con una fuerza proporcional al producto de sus masas e inversamente proporcional al cuadrado de la distancia. La constante G = 6.674 × 10⁻¹¹ N·m²/kg² es universal.
        </p>
        <p>
          La aceleración gravitatoria (g = GM/r²) determina el peso de los objetos (P = mg). Las velocidades orbital (v_orb = √(GM/r)) y de escape (v_esc = √(2GM/r)) son críticas para misiones espaciales. La tercera ley de Kepler (T² ∝ r³) relaciona el período orbital con el radio de la órbita.
        </p>
        <p>
          La gravitación explica fenómenos desde la caída de objetos hasta las órbitas planetarias, las mareas, y la estructura del universo. Es fundamental para la exploración espacial, la navegación por satélite y nuestra comprensión del cosmos.
        </p>
      </div>
    </>
  );
};

export default GravitacionTheory;
