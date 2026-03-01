import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions as dispersionDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Dispersión (Scattering)",
  descripcion: "Estudio de colisiones con cambio de dirección",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const DispersionTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Dispersión?">
        <p>
          La dispersión o scattering es el proceso por el cual partículas o radiación cambian de dirección debido a la interacción con otras partículas o campos. Es fundamental en física de partículas, física nuclear, óptica y muchas otras áreas.
        </p>
        <p>
          A diferencia de las colisiones unidimensionales, la dispersión involucra cambios en la dirección del movimiento, requiriendo un análisis bidimensional o tridimensional.
        </p>
      </TheorySection>

      <TheorySection title="Conceptos Fundamentales">
        <Concept title="Ángulo de Dispersión">
          <p>
            El ángulo de dispersión (θ) es el ángulo entre la dirección inicial de la partícula incidente y su dirección final después de la colisión.
          </p>
          <Formula 
            expression={String.raw`\theta = \arctan\left(\frac{v_y}{v_x}\right)`}
            calculatorId="dispersion-angulo"
            definitions={dispersionDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>θ = Ángulo de dispersión (grados)</li>
            <li>v_x = Componente x de velocidad final (m/s)</li>
            <li>v_y = Componente y de velocidad final (m/s)</li>
          </ul>
        </Concept>

        <Concept title="Parámetro de Impacto">
          <p>
            El parámetro de impacto (b) es la distancia perpendicular entre la trayectoria inicial de la partícula incidente y el centro del blanco.
          </p>
          <Formula 
            expression={String.raw`b = d \sin(\alpha)`}
            calculatorId="dispersion-parametro"
            definitions={dispersionDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>b = Parámetro de impacto (m)</li>
            <li>d = Distancia inicial (m)</li>
            <li>α = Ángulo de aproximación (grados)</li>
          </ul>
          
          <Important>
            <p>El parámetro de impacto determina el ángulo de dispersión: impactos más cercanos (b pequeño) producen mayor desviación.</p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Dispersión Elástica en Dos Dimensiones">
        <p>
          En una colisión elástica bidimensional, se conservan tanto el momento como la energía cinética en cada componente.
        </p>
        
        <Concept title="Conservación del Momento">
          <p><strong>Componente x:</strong></p>
          <Formula 
            expression={String.raw`m_1 v_{1i} = m_1 v_{1f} \cos(\theta_1) + m_2 v_{2f} \cos(\theta_2)`}
            calculatorId="dispersion-2d"
            definitions={dispersionDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Componente y", expression: String.raw`0 = m_1 v_{1f} \sin(\theta_1) + m_2 v_{2f} \sin(\theta_2)` },
              { description: "Velocidad final 2", expression: String.raw`v_{2f} = \sqrt{(v_{2f,x})^2 + (v_{2f,y})^2}` },
              { description: "Ángulo final 2", expression: String.raw`\theta_2 = \arctan\left(\frac{v_{2f,y}}{v_{2f,x}}\right)` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>m₁, m₂ = Masas de los objetos (kg)</li>
            <li>v₁ᵢ = Velocidad inicial del objeto 1 (m/s)</li>
            <li>v₁f, v₂f = Velocidades finales (m/s)</li>
            <li>θ₁, θ₂ = Ángulos de dispersión (grados)</li>
            <li>v₂f,x, v₂f,y = Componentes de velocidad (m/s)</li>
          </ul>
        </Concept>
        
        <Concept title="Caso Especial: Masas Iguales">
          <p>Cuando m₁ = m₂ y el blanco está en reposo:</p>
          <Formula expression={String.raw`\theta_1 + \theta_2 = 90°`} />
          <p>Las partículas salen en direcciones perpendiculares.</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Sección Eficaz">
        <p>
          La sección eficaz (σ) es una medida de la probabilidad de que ocurra una dispersión. Tiene unidades de área.
        </p>
        
        <Concept title="Sección Eficaz Total">
          <Formula 
            expression={String.raw`\sigma = \pi b^2`}
            calculatorId="dispersion-seccion"
            definitions={dispersionDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>σ = Sección eficaz (m²)</li>
            <li>b = Parámetro de impacto máximo (m)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Dispersión de Rutherford">
        <p>
          El experimento de dispersión de Rutherford (1911) fue crucial para descubrir el núcleo atómico. Estudió la dispersión de partículas alfa por núcleos atómicos.
        </p>
        
        <Example>
          <p>La observación de dispersión a grandes ángulos llevó a Rutherford a proponer el modelo nuclear del átomo, donde la masa está concentrada en un núcleo pequeño y denso.</p>
        </Example>
      </TheorySection>

      <TheorySection title="Tipos de Dispersión">
        <Concept title="1. Dispersión Elástica">
          <p>Se conserva la energía cinética. Ejemplos:</p>
          <ul>
            <li>Dispersión de bolas de billar</li>
            <li>Dispersión de partículas alfa por núcleos (Rutherford)</li>
            <li>Dispersión de neutrones por núcleos a bajas energías</li>
          </ul>
        </Concept>
        
        <Concept title="2. Dispersión Inelástica">
          <p>Parte de la energía se transfiere a estados internos. Ejemplos:</p>
          <ul>
            <li>Dispersión Compton (fotones por electrones)</li>
            <li>Dispersión Raman (luz por moléculas)</li>
            <li>Excitación de niveles nucleares</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🔧</span> Aplicaciones en la Vida Real
        </h2>
        
        <div className="theory-subsection">
          <h3>🔬 Cristalografía de rayos X</h3>
          <p>
            Determinación de estructuras moleculares mediante dispersión de rayos X por cristales. Esta técnica permitió descubrir la estructura del ADN en 1953 y sigue siendo fundamental para diseñar medicamentos, estudiando cómo las moléculas se pliegan y interactúan.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📡 Radar y detección</h3>
          <p>
            Dispersión de ondas electromagnéticas para detectar objetos y medir distancias. Los radares meteorológicos detectan gotas de lluvia, los radares de tráfico aéreo rastrean aviones, y los radares de velocidad miden la velocidad de vehículos, todos basados en dispersión de ondas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌈 Lidar y mapeo 3D</h3>
          <p>
            Dispersión de luz láser para mediciones atmosféricas y topográficas de alta precisión. Los coches autónomos usan lidar para crear mapas 3D del entorno en tiempo real, disparando millones de pulsos láser por segundo y midiendo la dispersión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏥 Tomografía médica</h3>
          <p>
            Dispersión Compton en imágenes médicas para diagnóstico no invasivo. Los escáneres CT usan la dispersión de rayos X para crear imágenes 3D del interior del cuerpo, detectando tumores, fracturas y otras anomalías sin cirugía.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧪 Análisis de materiales</h3>
          <p>
            Dispersión de neutrones y rayos X para estudiar propiedades de materiales. Los científicos bombardean materiales con neutrones o rayos X y analizan los patrones de dispersión para determinar estructura cristalina, defectos y propiedades magnéticas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌅 Astronomía y atmósfera</h3>
          <p>
            Dispersión de luz por polvo interestelar, explicando el color azul del cielo y el rojo de los atardeceres. La dispersión Rayleigh por moléculas de aire dispersa más la luz azul que la roja, creando los colores que vemos en el cielo.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        
        <div className="theory-subsection">
          <h3>⚛️ El experimento de Rutherford (1909-1911)</h3>
          <p>
            El estudio moderno de la dispersión comenzó con Ernest Rutherford (1871-1937) y su famoso experimento. Hans Geiger y Ernest Marsden, bajo la dirección de Rutherford, bombardearon láminas delgadas de oro con partículas alfa, esperando que todas pasaran con poca desviación.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💥 El descubrimiento del núcleo</h3>
          <p>
            La observación de que algunas partículas se dispersaban a grandes ángulos (incluso rebotaban) fue sorprendente y llevó a Rutherford a proponer el modelo nuclear del átomo en 1911. Esto revolucionó la física atómica y sentó las bases de la física nuclear moderna, reemplazando el modelo del "pudín de pasas" de Thomson.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Dispersión y estructura de la materia</h3>
          <p>
            En el siglo XX, la dispersión se convirtió en la herramienta principal para estudiar la estructura de la materia. Los experimentos de dispersión profundamente inelástica en los años 1960-70 en el SLAC revelaron la estructura de quarks dentro de los protones, confirmando el modelo de quarks y ganando el Premio Nobel en 1990.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>💥 La sorpresa de Rutherford</h3>
          <p>
            Rutherford describió su sorpresa al ver partículas alfa rebotadas: "Fue como disparar un proyectil de 15 pulgadas contra papel de seda y que rebotara y te golpeara". Esperaba que todas las partículas pasaran casi sin desviarse, pero algunas rebotaban directamente hacia atrás, revelando un núcleo denso y pequeño.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌤️ Por qué el cielo es azul</h3>
          <p>
            El cielo es azul debido a la dispersión Rayleigh: la luz azul (longitud de onda corta) se dispersa mucho más que la roja (longitud de onda larga) por las moléculas de aire. La dispersión es proporcional a 1/λ⁴, por lo que la luz azul se dispersa casi 10 veces más que la roja.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌅 Atardeceres rojos</h3>
          <p>
            Los atardeceres son rojos porque la luz atraviesa más atmósfera al horizonte, dispersando todo el azul y dejando solo el rojo. La luz del Sol al atardecer viaja a través de 40 veces más atmósfera que al mediodía, eliminando completamente los azules y verdes.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>👁️ Contando destellos en la oscuridad</h3>
          <p>
            El experimento de Rutherford usó una pantalla de sulfuro de zinc que brillaba cuando era golpeada por partículas alfa, y los científicos contaban los destellos a mano en la oscuridad. Geiger y Marsden pasaron horas en cuartos oscuros contando destellos individuales, un trabajo tedioso pero que cambió la física.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💡 Compton y la naturaleza de la luz</h3>
          <p>
            La dispersión Compton (1923) demostró la naturaleza corpuscular de la luz, ganando a Arthur Compton el Premio Nobel en 1927. Observó que los rayos X dispersados por electrones tenían menor energía (mayor longitud de onda), demostrando que la luz se comporta como partículas en colisiones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚓 Radares de velocidad</h3>
          <p>
            Los radares de velocidad de la policía funcionan midiendo el cambio de frecuencia de ondas dispersadas por vehículos en movimiento (efecto Doppler). Emiten ondas a 24 o 35 GHz y miden el cambio de frecuencia: si el vehículo se acerca, la frecuencia aumenta; si se aleja, disminuye.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          La dispersión estudia colisiones con cambio de dirección. El ángulo de dispersión depende del parámetro de impacto. 
          En colisiones elásticas 2D se conservan momento y energía en cada componente. Para masas iguales, las partículas salen 
          perpendiculares (θ₁ + θ₂ = 90°). La sección eficaz mide la probabilidad de dispersión. El experimento de Rutherford 
          descubrió el núcleo atómico.
        </p>
      </div>
    </>
  );
};

export default DispersionTheory;
