import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions as centroMasaDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Centro de Masa",
  descripcion: "Punto donde se concentra toda la masa de un sistema",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CentroMasaTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es el Centro de Masa?">
        <p>
          El centro de masa (CM) de un sistema es el punto donde se puede considerar concentrada toda la masa del sistema para analizar su movimiento traslacional. Es el promedio ponderado de las posiciones de todas las partículas, donde el peso es la masa de cada partícula.
        </p>
        <p>
          El centro de masa es fundamental para entender el movimiento de sistemas complejos, ya que se mueve como si toda la masa estuviera concentrada en ese punto y todas las fuerzas externas actuaran sobre él.
        </p>
      </TheorySection>

      <TheorySection title="Posición del Centro de Masa">
        <Concept title="En Una Dimensión">
          <Formula 
            expression={String.raw`x_{cm} = \frac{m_1 x_1 + m_2 x_2 + ...}{m_1 + m_2 + ...}`}
            calculatorId="centro-masa-posicion"
            definitions={centroMasaDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>x_cm = Posición del centro de masa (m)</li>
            <li>m₁, m₂ = Masas de las partículas (kg)</li>
            <li>x₁, x₂ = Posiciones de las partículas (m)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Velocidad del Centro de Masa">
        <p>
          La velocidad del centro de masa se obtiene derivando su posición respecto al tiempo:
        </p>
        
        <Concept title="Velocidad del CM">
          <Formula 
            expression={String.raw`v_{cm} = \frac{m_1 v_1 + m_2 v_2 + ...}{m_1 + m_2 + ...}`}
            calculatorId="centro-masa-velocidad"
            definitions={centroMasaDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>v_cm = Velocidad del centro de masa (m/s)</li>
            <li>v₁, v₂ = Velocidades de las partículas (m/s)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Momento Total y Centro de Masa">
        <p>
          El momento total del sistema es igual a la masa total multiplicada por la velocidad del centro de masa:
        </p>
        
        <Concept title="Relación Momento-CM">
          <Formula 
            expression={String.raw`\vec{p}_{total} = M_{total} \vec{v}_{cm}`}
            calculatorId="centro-masa-momento"
            definitions={centroMasaDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>p_total = Momento total del sistema (kg·m/s)</li>
            <li>M_total = Masa total del sistema (kg)</li>
            <li>v_cm = Velocidad del centro de masa (m/s)</li>
          </ul>
        </Concept>
        
        <Important>
          <p>El centro de masa se mueve como si toda la masa estuviera concentrada en él y llevara todo el momento del sistema.</p>
        </Important>
      </TheorySection>

      <TheorySection title="Segunda Ley de Newton para el Centro de Masa">
        <p>
          La aceleración del centro de masa depende únicamente de las fuerzas externas:
        </p>
        
        <Concept title="Fuerza y Aceleración del CM">
          <Formula 
            expression={String.raw`\vec{F}_{ext} = M_{total} \vec{a}_{cm}`}
            calculatorId="centro-masa-segunda-ley"
            definitions={centroMasaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Aceleración", expression: String.raw`a_{cm} = \frac{F_{ext}}{M_{total}}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>F_ext = Fuerza externa neta sobre el sistema (N)</li>
            <li>M_total = Masa total del sistema (kg)</li>
            <li>a_cm = Aceleración del centro de masa (m/s²)</li>
          </ul>
        </Concept>
        
        <Important>
          <p>Las fuerzas internas (fuerzas entre partículas del sistema) no afectan el movimiento del centro de masa. Solo las fuerzas externas pueden cambiar el momento total del sistema.</p>
        </Important>
      </TheorySection>

      <TheorySection title="Conservación del Momento y Centro de Masa">
        <p>
          Si no hay fuerzas externas, el centro de masa se mueve con velocidad constante (o permanece en reposo).
        </p>
        
        <Example>
          <p>En colisiones donde no hay fuerzas externas, el centro de masa mantiene su velocidad constante antes, durante y después de la colisión.</p>
        </Example>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🔧</span> Aplicaciones en la Vida Real
        </h2>
        
        <div className="theory-subsection">
          <h3>🚗 Análisis de colisiones</h3>
          <p>
            El CM mantiene velocidad constante durante choques de vehículos, permitiendo reconstruir accidentes. Los investigadores usan las marcas de frenado y la posición final de los vehículos para calcular velocidades antes del impacto, sabiendo que el centro de masa del sistema se movió en línea recta.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 Cohetes y propulsión</h3>
          <p>
            El CM del sistema cohete-gases se conserva, explicando cómo los cohetes se mueven en el espacio. Aunque el cohete acelera hacia adelante y los gases hacia atrás, el centro de masa del sistema completo permanece en el mismo lugar (o se mueve a velocidad constante si ya estaba en movimiento).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏃 Deportes de alto rendimiento</h3>
          <p>
            Análisis de saltos y lanzamientos en atletismo, gimnasia y clavados para optimizar técnicas. Los entrenadores usan cámaras de alta velocidad para rastrear el centro de masa de los atletas, mejorando la eficiencia del movimiento y reduciendo el riesgo de lesiones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⭐ Astronomía y sistemas binarios</h3>
          <p>
            Movimiento de sistemas binarios de estrellas, donde ambas orbitan alrededor de su centro de masa común. Este punto, llamado baricentro, puede estar dentro de una estrella, entre ellas, o incluso fuera de ambas si tienen masas similares.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦿 Biomecánica y prótesis</h3>
          <p>
            Análisis del movimiento humano para mejorar la marcha, prevenir lesiones y diseñar prótesis. El centro de masa del cuerpo humano está aproximadamente a la altura del ombligo, y su trayectoria durante la marcha revela problemas de equilibrio o coordinación.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🤖 Robótica y equilibrio</h3>
          <p>
            Control de equilibrio en robots bípedos y cuadrúpedos mediante el seguimiento del centro de masa. Los robots humanoides como Atlas de Boston Dynamics calculan constantemente la posición de su centro de masa para mantener el equilibrio mientras caminan, corren o saltan.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        
        <div className="theory-subsection">
          <h3>⚖️ Arquímedes y el centro de gravedad</h3>
          <p>
            El concepto de centro de masa tiene sus raíces en los trabajos de Arquímedes (287-212 a.C.) sobre el centro de gravedad de figuras geométricas. Arquímedes demostró que el centro de gravedad de un triángulo está en la intersección de sus medianas, y desarrolló métodos para encontrarlo en figuras complejas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Huygens y Newton</h3>
          <p>
            Christiaan Huygens (1629-1695) desarrolló el concepto moderno de centro de masa en su estudio de colisiones y péndulos. Isaac Newton (1643-1727) formalizó la relación entre el centro de masa y el momento total en sus "Principia Mathematica", demostrando que el centro de masa de un sistema se mueve como si toda la masa estuviera concentrada en ese punto.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌌 De la mecánica celeste a la física de partículas</h3>
          <p>
            El concepto se volvió fundamental en la mecánica celeste para describir el movimiento de sistemas planetarios y estelares. En el siglo XX, el centro de masa se convirtió en una herramienta esencial en física de partículas, donde los experimentos en aceleradores se analizan en el "sistema del centro de masa" para simplificar los cálculos.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>⭕ Centro de masa fuera del objeto</h3>
          <p>
            El centro de masa de un objeto puede estar fuera del objeto mismo, como en un anillo o un boomerang. En un anillo, el centro de masa está en el centro del hueco. Esto también ocurre en objetos con forma de C o U, donde el centro de masa está en el espacio vacío.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏊 Clavadistas y parábolas perfectas</h3>
          <p>
            Los clavadistas olímpicos controlan su rotación moviendo brazos y piernas, pero su centro de masa sigue una parábola perfecta determinada solo por la velocidad inicial y la gravedad. Pueden hacer piruetas complejas, pero su centro de masa no puede cambiar de trayectoria una vez en el aire.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌍 La Tierra y la Luna bailan juntas</h3>
          <p>
            La Tierra y la Luna orbitan alrededor de su centro de masa común, que está a unos 4,700 km del centro de la Tierra (dentro de la Tierra, a unos 1,700 km bajo la superficie). Técnicamente, la Tierra no orbita el Sol en una elipse perfecta, sino que "tambalea" alrededor del baricentro Tierra-Luna.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎪 Equilibristas y física</h3>
          <p>
            Los equilibristas en la cuerda floja usan una barra larga para bajar su centro de masa y aumentar la estabilidad. La barra también aumenta el momento de inercia, haciendo más lento cualquier movimiento de rotación. Philippe Petit usó una barra de 8 metros y 25 kg cuando cruzó entre las Torres Gemelas en 1974.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧑‍🚀 Centro de masa inmóvil en el espacio</h3>
          <p>
            En el espacio, si un astronauta lanza un objeto, tanto el astronauta como el objeto se mueven en direcciones opuestas, pero su centro de masa permanece inmóvil (o se mueve a velocidad constante). Es imposible cambiar la posición del centro de masa sin empujar contra algo externo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>☀️ El Sol no está en el centro</h3>
          <p>
            El centro de masa del sistema solar no está en el centro del Sol, sino cerca de su superficie debido a la influencia de Júpiter. A veces está incluso fuera del Sol. Esto causa un pequeño "bamboleo" en el Sol que los astrónomos usan para detectar planetas alrededor de otras estrellas.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          El centro de masa es el punto donde se concentra toda la masa de un sistema. Se mueve como si toda la masa estuviera 
          ahí y todas las fuerzas externas actuaran sobre él (F_ext = M_total × a_cm). Las fuerzas internas no afectan su 
          movimiento. Si no hay fuerzas externas, el centro de masa mantiene velocidad constante (conservación del momento).
        </p>
      </div>
    </>
  );
};

export default CentroMasaTheory;
