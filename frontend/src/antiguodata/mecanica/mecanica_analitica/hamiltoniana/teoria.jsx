import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Mecánica Hamiltoniana",
  descripcion: "Formulación hamiltoniana de la mecánica clásica",
  isTheoryOnly: false,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

const HamiltonianaTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a la Mecánica Hamiltoniana">
        <p>
          La mecánica hamiltoniana es otra reformulación de la mecánica clásica, 
          introducida por William Rowan Hamilton en 1833. Utiliza el espacio de fases (posiciones y momentos) 
          en lugar del espacio de configuración (posiciones y velocidades) del formalismo lagrangiano.
        </p>

        <Important>
          La mecánica hamiltoniana es fundamental para la mecánica cuántica, la mecánica estadística 
          y la teoría de sistemas dinámicos.
        </Important>
      </TheorySection>

      <TheorySection title="La Función Hamiltoniana">
        <Concept title="Definición">
          <p>
            El Hamiltoniano H de un sistema es la suma de su energía cinética 
            y su energía potencial (energía total):
          </p>

          <Formula
            expression={String.raw`H(q, p, t) = T + V`}
            calculatorId="hamiltoniano"
            definitions={definitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>H: Función hamiltoniana (J)</li>
            <li>T: Energía cinética (J)</li>
            <li>V: Energía potencial (J)</li>
            <li>q: Coordenadas generalizadas</li>
            <li>p: Momentos generalizados</li>
          </ul>

          <Important>
            Nota: H = T + V (suma), mientras que L = T - V (resta). El Hamiltoniano 
            representa la energía total del sistema.
          </Important>
        </Concept>

        <Concept title="Transformación de Legendre">
          <p>
            El Hamiltoniano se obtiene del Lagrangiano mediante una transformación de Legendre:
          </p>

          <Formula
            expression={String.raw`H = \sum_i p_i\dot{q}_i - L`}
            calculatorId="hamiltoniano"
            definitions={definitions}
            exercises={exercises}
          />

          <p>
            Esta transformación cambia las variables independientes de (q, q̇, t) a (q, p, t).
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuaciones de Hamilton">
        <Concept title="Ecuaciones Canónicas">
          <p>
            Las ecuaciones de Hamilton son un sistema de ecuaciones diferenciales 
            de primer orden:
          </p>

          <Formula
            expression={String.raw`\dot{q}_i = \frac{\partial H}{\partial p_i}, \quad \dot{p}_i = -\frac{\partial H}{\partial q_i}`}
            description="Ecuaciones canónicas de Hamilton"
          />

          <p>Interpretación:</p>
          <ul>
            <li>Primera ecuación: Relaciona velocidad con momento</li>
            <li>Segunda ecuación: Relaciona cambio de momento con fuerza</li>
            <li>Son 2n ecuaciones de primer orden (vs n ecuaciones de segundo orden de Lagrange)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Espacio de Fases">
        <Concept title="Definición">
          <p>
            El espacio de fases es un espacio 2n-dimensional donde cada punto 
            representa un estado completo del sistema:
          </p>
          <ul>
            <li>n coordenadas generalizadas (q₁, q₂, ..., qₙ)</li>
            <li>n momentos generalizados (p₁, p₂, ..., pₙ)</li>
          </ul>

          <p>Propiedades:</p>
          <ul>
            <li>Cada punto representa un estado único del sistema</li>
            <li>La evolución temporal es una trayectoria en este espacio</li>
            <li>El volumen en el espacio de fases se conserva (Teorema de Liouville)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplo: Oscilador Armónico">
        <Concept title="Hamiltoniano">
          <Formula
            expression={String.raw`H = \frac{p^2}{2m} + \frac{1}{2}kx^2`}
            calculatorId="oscilador-hamiltoniano"
            definitions={definitions}
            exercises={exercises}
          />

          <p>Ecuaciones de Hamilton:</p>
          <ul>
            <li>ẋ = ∂H/∂p = p/m</li>
            <li>ṗ = -∂H/∂x = -kx</li>
          </ul>

          <p>
            Estas dos ecuaciones de primer orden son equivalentes a la ecuación de segundo orden 
            mẍ + kx = 0.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Ventajas de la Formulación Hamiltoniana">
        <ul>
          <li>Simetría: Trata posiciones y momentos en pie de igualdad</li>
          <li>Conservación: H se conserva si no depende explícitamente del tiempo</li>
          <li>Espacio de fases: Visualización geométrica del movimiento</li>
          <li>Mecánica cuántica: Base directa para la cuantización</li>
          <li>Mecánica estadística: Fundamental para la teoría de ensambles</li>
          <li>Sistemas dinámicos: Análisis de estabilidad y caos</li>
        </ul>
      </TheorySection>

      <TheorySection title="Comparación: Lagrange vs Hamilton">
        <table style={{width: '100%', borderCollapse: 'collapse', margin: '1rem 0'}}>
          <thead>
            <tr style={{borderBottom: '2px solid #ccc'}}>
              <th style={{padding: '0.5rem'}}>Aspecto</th>
              <th style={{padding: '0.5rem'}}>Lagrange</th>
              <th style={{padding: '0.5rem'}}>Hamilton</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom: '1px solid #eee'}}>
              <td style={{padding: '0.5rem'}}>Función</td>
              <td style={{padding: '0.5rem'}}>L = T - V</td>
              <td style={{padding: '0.5rem'}}>H = T + V</td>
            </tr>
            <tr style={{borderBottom: '1px solid #eee'}}>
              <td style={{padding: '0.5rem'}}>Variables</td>
              <td style={{padding: '0.5rem'}}>(q, q̇, t)</td>
              <td style={{padding: '0.5rem'}}>(q, p, t)</td>
            </tr>
            <tr style={{borderBottom: '1px solid #eee'}}>
              <td style={{padding: '0.5rem'}}>Ecuaciones</td>
              <td style={{padding: '0.5rem'}}>n de 2° orden</td>
              <td style={{padding: '0.5rem'}}>2n de 1° orden</td>
            </tr>
            <tr>
              <td style={{padding: '0.5rem'}}>Mejor para</td>
              <td style={{padding: '0.5rem'}}>Obtener ecuaciones</td>
              <td style={{padding: '0.5rem'}}>Análisis teórico</td>
            </tr>
          </tbody>
        </table>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>⚛️ Mecánica Cuántica</h3>
          <p>
            La mecánica hamiltoniana es la base directa de la mecánica cuántica. El operador Hamiltoniano 
            en mecánica cuántica (Ĥ) se obtiene reemplazando p por -iℏ∂/∂x en el Hamiltoniano clásico. 
            La ecuación de Schrödinger (iℏ∂ψ/∂t = Ĥψ) es la versión cuántica de las ecuaciones de Hamilton. 
            Todos los cálculos en química cuántica, física de semiconductores y nanotecnología usan 
            formalismos hamiltonianos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌡️ Mecánica Estadística</h3>
          <p>
            La mecánica estadística usa el espacio de fases hamiltoniano para calcular propiedades 
            termodinámicas. La función de partición canónica Z = ∫exp(-H/kT)dqdp integra sobre el 
            espacio de fases. Las simulaciones de Monte Carlo y dinámica molecular usan ecuaciones de 
            Hamilton para simular sistemas de miles de partículas, prediciendo propiedades de materiales, 
            proteínas y fluidos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔭 Astrofísica y Mecánica Celeste</h3>
          <p>
            Los sistemas planetarios se analizan usando mecánica hamiltoniana. El espacio de fases permite 
            visualizar órbitas y estudiar estabilidad. Los integradores simplécticos (que conservan la 
            estructura hamiltoniana) se usan para simular evolución de sistemas solares durante millones 
            de años. La NASA usa estos métodos para planificar trayectorias de sondas espaciales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎮 Simulación de Física</h3>
          <p>
            Los motores de física en videojuegos y simuladores usan integradores hamiltonianos para 
            conservar energía. Los métodos simplécticos (Verlet, leapfrog) mantienen H constante incluso 
            con pasos de tiempo grandes, evitando que los objetos ganen o pierdan energía artificialmente. 
            Esto es crucial para simulaciones realistas de largo plazo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Aceleradores de Partículas</h3>
          <p>
            El diseño de aceleradores como el LHC usa mecánica hamiltoniana para calcular trayectorias 
            de partículas en campos electromagnéticos. El espacio de fases permite analizar estabilidad 
            de haces y optimizar enfoque. Los códigos de simulación (MAD-X, ELEGANT) resuelven ecuaciones 
            de Hamilton para millones de partículas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💊 Dinámica Molecular en Farmacología</h3>
          <p>
            El diseño de fármacos usa dinámica molecular hamiltoniana para simular interacciones entre 
            moléculas y proteínas. Las simulaciones predicen cómo un fármaco se une a su objetivo, 
            permitiendo optimizar estructura antes de síntesis. Esto acelera el desarrollo de medicamentos 
            y reduce costos.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Hamilton y la Revolución Matemática
        </h2>
        
        <div className="theory-subsection">
          <h3>🎓 William Rowan Hamilton (1833): El Genio Irlandés</h3>
          <p>
            William Rowan Hamilton desarrolló su formulación de la mecánica en 1833, a los 28 años. 
            Hamilton era un prodigio: a los 13 años dominaba 13 idiomas, a los 22 fue nombrado Astrónomo 
            Real de Irlanda. Su formulación unificó óptica y mecánica, mostrando que ambas seguían 
            principios variacionales similares.
          </p>
          <p>
            Hamilton buscaba una formulación que tratara tiempo y espacio simétricamente, anticipando 
            ideas de relatividad. Su trabajo fue inicialmente ignorado por ser demasiado abstracto, 
            pero se volvió fundamental en el siglo XX.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📐 Los Cuaterniones: Obsesión de Hamilton</h3>
          <p>
            Hamilton dedicó los últimos 22 años de su vida a los cuaterniones (extensión de números 
            complejos a 4D), convencido de que revolucionarían la física. Aunque los cuaterniones no 
            tuvieron el impacto que esperaba, su mecánica hamiltoniana sí lo tuvo. Irónicamente, Hamilton 
            consideraba los cuaterniones su mayor logro, no su mecánica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚛️ Conexión con Mecánica Cuántica (1925)</h3>
          <p>
            En 1925, Werner Heisenberg y Erwin Schrödinger desarrollaron mecánica cuántica usando 
            formalismo hamiltoniano. Heisenberg reemplazó variables clásicas por matrices, Schrödinger 
            por operadores. Paul Dirac demostró que ambos enfoques eran equivalentes y generalizó el 
            formalismo hamiltoniano a mecánica cuántica.
          </p>
          <p>
            Richard Feynman desarrolló la formulación de integrales de camino (1948), otra extensión 
            del principio hamiltoniano. La mecánica hamiltoniana se convirtió en lenguaje universal 
            de la física teórica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌌 Teoría del Caos (1960s-1980s)</h3>
          <p>
            El espacio de fases hamiltoniano fue crucial para el desarrollo de la teoría del caos. 
            Henri Poincaré (1890s) descubrió que sistemas hamiltonianos simples pueden tener comportamiento 
            caótico. Edward Lorenz (1963) y Mitchell Feigenbaum (1970s) desarrollaron la teoría moderna 
            del caos usando herramientas hamiltonianas.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🌉 El Puente de Brougham</h3>
          <p>
            Hamilton tuvo su epifanía sobre los cuaterniones mientras caminaba con su esposa por el 
            Puente de Brougham en Dublín (1843). Tan emocionado estaba que grabó las ecuaciones 
            fundamentales (i²=j²=k²=ijk=-1) en la piedra del puente con su navaja. Hoy hay una placa 
            conmemorativa en ese lugar.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📚 El Libro Nunca Terminado</h3>
          <p>
            Hamilton trabajó en un tratado masivo sobre cuaterniones durante 22 años. A su muerte (1865), 
            dejó miles de páginas de manuscritos. Su amigo Peter Tait publicó póstumamente "Elements of 
            Quaternions" (1866), pero el libro era tan denso que pocos lo leyeron. La mecánica hamiltoniana, 
            publicada en artículos breves, tuvo mucho más impacto.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 Conservación del Volumen en Espacio de Fases</h3>
          <p>
            El Teorema de Liouville (1838) establece que el volumen en el espacio de fases se conserva 
            bajo evolución hamiltoniana. Esto significa que un "fluido" de estados iniciales mantiene 
            su volumen aunque cambie de forma. Esta propiedad es fundamental en mecánica estadística 
            y explica por qué la entropía no puede decrecer.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔄 Integradores Simplécticos</h3>
          <p>
            Los métodos numéricos estándar (Runge-Kutta) no conservan la estructura hamiltoniana, 
            causando deriva de energía en simulaciones largas. Los integradores simplécticos (Verlet, 
            leapfrog) conservan H exactamente, permitiendo simular sistemas durante tiempos arbitrariamente 
            largos. La órbita de Plutón se ha simulado durante 4 mil millones de años usando estos métodos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌀 Caos Hamiltoniano</h3>
          <p>
            Sistemas hamiltonianos simples pueden ser caóticos. El péndulo doble es determinista (conociendo 
            estado inicial, podemos predecir el futuro) pero caótico (pequeños cambios en condiciones 
            iniciales causan divergencia exponencial). Este caos es diferente del caos disipativo: conserva 
            energía pero es impredecible a largo plazo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚛️ De Clásico a Cuántico</h3>
          <p>
            La "cuantización canónica" reemplaza variables clásicas por operadores: {'{'} q,p {'}'} → [q̂,p̂] = iℏ. 
            Esta receta simple convierte cualquier sistema clásico en cuántico. Aunque no siempre funciona 
            perfectamente (problemas de ordenamiento), es el método estándar para construir teorías cuánticas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎮 Física de Videojuegos</h3>
          <p>
            Los motores de física modernos (Unity, Unreal) usan integradores simplécticos para conservar 
            energía. Esto evita que objetos "exploten" o "colapsen" en simulaciones largas. El método 
            Verlet es especialmente popular: simple, rápido y conserva energía perfectamente.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          La mecánica hamiltoniana reformula la mecánica usando el Hamiltoniano H = T + V en el espacio 
          de fases (q, p). Las ecuaciones de Hamilton (q̇ = ∂H/∂p, ṗ = -∂H/∂q) son 2n ecuaciones de 
          primer orden, simétricas y elegantes.
        </p>
        <p>
          El formalismo hamiltoniano es fundamental en mecánica cuántica, mecánica estadística, teoría 
          del caos y simulación numérica. El espacio de fases permite visualizar dinámicas complejas 
          y el Teorema de Liouville garantiza conservación de volumen.
        </p>
      </div>
    </>
  );
};

export default HamiltonianaTheory;
