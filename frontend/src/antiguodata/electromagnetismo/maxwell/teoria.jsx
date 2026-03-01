import { TheorySection, Concept, Formula, Important, Example } from '../../../components/TheoryV2';
import { definitions as maxwellDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Ecuaciones de Maxwell",
  descripcion: "Las cuatro ecuaciones fundamentales del electromagnetismo",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const MaxwellTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Las Ecuaciones de Maxwell: La Sinfonía del Electromagnetismo">
        <p>
          Las ecuaciones de Maxwell son un conjunto de cuatro ecuaciones fundamentales, publicadas por James Clerk Maxwell en 1861, que describen el comportamiento de los campos eléctricos y magnéticos y su interacción con la materia. Representan la unificación de todos los fenómenos eléctricos y magnéticos y predijeron la existencia de las ondas electromagnéticas.
        </p>
        <Important>
          Estas ecuaciones son la base de toda la ingeniería eléctrica, electrónica y de telecomunicaciones. Aunque sus formas integrales y diferenciales son complejas, podemos usar versiones simplificadas para resolver problemas comunes.
        </Important>
      </TheorySection>

      <TheorySection title="1. Ley de Gauss para el Campo Eléctrico">
        <p>
          Esta ley describe cómo las cargas eléctricas son las fuentes de los campos eléctricos. La forma integral, ∮ E · dA = Q_enc / ε₀, establece que el flujo eléctrico total que sale de una superficie cerrada es proporcional a la carga eléctrica encerrada.
        </p>
        <Concept title="Aplicación: Campo de una Carga Puntual">
          <p>Para una carga puntual rodeada por una superficie esférica, la ley de Gauss se simplifica a una fórmula algebraica que nos permite calcular el campo eléctrico a una distancia r.</p>
          <Formula
            expression={String.raw`E = \frac{Q_{enc}}{4 \pi \varepsilon_0 r^2}`}
            calculatorId="maxwell_ley_de_gauss"
            definitions={maxwellDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Carga encerrada", expression: String.raw`Q_{enc} = E \cdot 4 \pi \varepsilon_0 r^2` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>E = Campo eléctrico (N/C o V/m)</li>
            <li>Q_enc = Carga eléctrica encerrada (C)</li>
            <li>ε₀ = Permitividad del vacío = 8.85 × 10⁻¹² C²/(N·m²)</li>
            <li>r = Distancia desde la carga (m)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="2. Ley de Gauss para el Campo Magnético">
        <Concept title="Inexistencia de Monopolos Magnéticos">
          <p>La forma integral de esta ley es ∮ B · dA = 0. Su significado es profundo: el flujo magnético neto a través de cualquier superficie cerrada es siempre cero.</p>
          <p>
            Esto implica que no puedes aislar un polo norte o un polo sur. Si cortas un imán, obtienes dos imanes nuevos, cada uno con su propio polo norte y sur. Las líneas de campo magnético siempre forman bucles cerrados.
          </p>
          <Example title="Visualización">
            Imagina las líneas de campo saliendo del polo norte de un imán y entrando por el polo sur. Dentro del imán, las líneas continúan, cerrando el bucle. Cualquier superficie que encierre una parte del imán tendrá tantas líneas entrando como saliendo, resultando en un flujo neto de cero.
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="3. Ley de Faraday de la Inducción">
        <p>
          Esta ley es el principio detrás de los generadores y transformadores. Describe cómo un campo magnético cambiante induce una corriente eléctrica. Su forma integral es ∮ E · dl = -dΦ_B/dt.
        </p>
        <Concept title="Aplicación: FEM Inducida en una Bobina">
          <p>En la práctica, esta ley nos permite calcular el voltaje (Fuerza Electromotriz o FEM) inducido en una bobina con N vueltas cuando el flujo magnético a través de ella cambia en el tiempo.</p>
          <Formula
            expression={String.raw`FEM = -N \frac{\Delta \Phi_B}{\Delta t}`}
            calculatorId="maxwell_ley_de_faraday"
            definitions={maxwellDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Cambio de Flujo Magnético", expression: String.raw`\Delta \Phi_B = -\frac{FEM \cdot \Delta t}{N}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>FEM = Fuerza electromotriz inducida (V)</li>
            <li>N = Número de vueltas de la bobina</li>
            <li>ΔΦ_B = Cambio en el flujo magnético (Wb)</li>
            <li>Δt = Intervalo de tiempo (s)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="4. Ley de Ampère-Maxwell">
        <p>
          Esta ley describe cómo se generan los campos magnéticos. Su forma integral, ∮ B · dl = μ₀(I_enc + ε₀ dΦ_E/dt), nos dice que los campos magnéticos son creados tanto por corrientes eléctricas como por campos eléctricos cambiantes.
        </p>
        <Concept title="Aplicación: Campo Magnético Alrededor de un Cable">
          <p>
            Una de las aplicaciones más directas de la ley de Ampère es calcular el campo magnético a una distancia r de un cable largo y recto que transporta una corriente I. En este caso, la ley se simplifica enormemente.
          </p>
          <Formula
            expression={String.raw`B = \frac{\mu_0 I}{2 \pi r}`}
            calculatorId="maxwell_ley_de_ampere"
            definitions={maxwellDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Corriente eléctrica", expression: String.raw`I = \frac{B \cdot 2 \pi r}{\mu_0}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>B = Campo magnético (T)</li>
            <li>μ₀ = Permeabilidad del vacío = 4π × 10⁻⁷ T·m/A</li>
            <li>I = Corriente eléctrica (A)</li>
            <li>r = Distancia desde el cable (m)</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <p>
          Las ecuaciones de Maxwell son la base de toda la tecnología moderna de comunicaciones y energía. 
          Permiten el diseño de antenas, sistemas de radar, telecomunicaciones inalámbricas, resonancia magnética, 
          transformadores eléctricos, motores, generadores y prácticamente cualquier dispositivo que use campos 
          electromagnéticos. Sin estas ecuaciones, no existirían los teléfonos móviles, WiFi, radio, televisión, 
          ni la distribución de energía eléctrica tal como la conocemos.
        </p>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2><span>📜</span> Historia de las ecuaciones de Maxwell</h2>
        <p>
          James Clerk Maxwell publicó sus ecuaciones en 1861-1862, unificando todos los fenómenos eléctricos y 
          magnéticos conocidos en cuatro ecuaciones elegantes. Su trabajo se basó en los descubrimientos previos 
          de Coulomb, Gauss, Ampère y Faraday. La contribución más revolucionaria de Maxwell fue agregar el 
          "término de corriente de desplazamiento" a la ley de Ampère, lo que predijo la existencia de ondas 
          electromagnéticas que viajan a la velocidad de la luz. En 1887, Heinrich Hertz confirmó experimentalmente 
          la existencia de estas ondas, validando la teoría de Maxwell y abriendo la era de las telecomunicaciones.
        </p>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas y curiosidades</h2>
        <p>
          Maxwell murió a los 48 años sin ver la confirmación experimental de sus ondas electromagnéticas. 
          Einstein tenía una fotografía de Maxwell en su oficina y lo consideraba uno de los tres físicos más 
          importantes de la historia, junto con Newton y Lorentz. Las ecuaciones de Maxwell originalmente eran 
          20 ecuaciones con 20 variables; Oliver Heaviside y Josiah Willard Gibbs las simplificaron a las cuatro 
          ecuaciones vectoriales que conocemos hoy. Cuando Maxwell predijo que la luz era una onda electromagnética, 
          unificó la óptica con el electromagnetismo, uno de los mayores logros de la física. Las ecuaciones de 
          Maxwell son tan fundamentales que permanecen inalteradas incluso en la teoría de la relatividad de Einstein.
        </p>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3 className="concept-title">Resumen</h3>
        <div className="concept-body">
          <ul>
            <li>Las cuatro ecuaciones de Maxwell unifican electricidad y magnetismo</li>
            <li>Ley de Gauss eléctrica: Las cargas crean campos eléctricos</li>
            <li>Ley de Gauss magnética: No existen monopolos magnéticos</li>
            <li>Ley de Faraday: Campos magnéticos cambiantes inducen campos eléctricos</li>
            <li>Ley de Ampère-Maxwell: Corrientes y campos eléctricos cambiantes crean campos magnéticos</li>
            <li>Predicen la existencia de ondas electromagnéticas que viajan a la velocidad de la luz</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MaxwellTheory;
