import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Principio de Mínima Acción",
  descripcion: "Principio variacional fundamental de la mecánica",
  isTheoryOnly: false,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

const PrincipioMinimaAccionTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="El Principio de Mínima Acción">
        <p>
          El Principio de Mínima Acción (o Principio de Hamilton) es uno de los 
          principios más fundamentales de la física. Establece que la trayectoria real que sigue 
          un sistema entre dos estados es aquella que hace estacionaria (generalmente mínima) 
          la acción.
        </p>

        <Important>
          Este principio unifica toda la mecánica clásica y es la base de la mecánica cuántica 
          (integral de caminos de Feynman) y la teoría de campos.
        </Important>
      </TheorySection>

      <TheorySection title="La Acción">
        <Concept title="Definición">
          <p>
            La acción S es la integral temporal del Lagrangiano:
          </p>

          <Formula
            expression={String.raw`S[q(t)] = \int_{t_1}^{t_2} L(q, \dot{q}, t) \, dt`}
            calculatorId="accion"
            definitions={definitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>S: Acción (unidades: J·s o kg·m²/s)</li>
            <li>L: Lagrangiano del sistema</li>
            <li>t₁, t₂: Tiempos inicial y final</li>
            <li>q(t): Trayectoria del sistema</li>
          </ul>

          <p>Interpretación:</p>
          <ul>
            <li>S es un funcional: asigna un número a cada trayectoria posible</li>
            <li>Tiene dimensiones de energía × tiempo</li>
            <li>En mecánica cuántica: ℏ (constante de Planck reducida) tiene las mismas unidades</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Principio de Hamilton">
        <Concept title="Enunciado">
          <p>
            De todas las trayectorias posibles entre dos puntos (q₁, t₁) y (q₂, t₂), 
            el sistema sigue aquella que hace estacionaria la acción:
          </p>

          <Formula
            expression={String.raw`\delta S = 0`}
            description="Condición de estacionariedad"
          />

          <p>
            Esto significa que pequeñas variaciones de la trayectoria no cambian la acción 
            en primer orden.
          </p>

          <Important>
            "Estacionaria" no siempre significa "mínima". Puede ser un mínimo, máximo o 
            punto de silla. Sin embargo, en la mayoría de los casos físicos es un mínimo.
          </Important>
        </Concept>

        <Concept title="Derivación de Euler-Lagrange">
          <p>
            Aplicando el cálculo variacional a δS = 0, se obtienen las ecuaciones de Euler-Lagrange:
          </p>

          <Formula
            expression={String.raw`\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = 0`}
            description="Ecuaciones de Euler-Lagrange desde el principio de Hamilton"
          />

          <p>
            Por tanto, el principio de mínima acción es equivalente a las ecuaciones de Euler-Lagrange, 
            que a su vez son equivalentes a las leyes de Newton.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplo: Partícula Libre">
        <Concept title="Cálculo de la Acción">
          <p>
            Para una partícula libre (V = 0), el Lagrangiano es L = ½mẋ².
          </p>

          <Formula
            expression={String.raw`S = \frac{1}{2}m\frac{(x_2-x_1)^2}{t_2-t_1}`}
            calculatorId="accion-ejemplos"
            definitions={definitions}
            exercises={exercises}
          />

          <Example
            title="Trayectoria de mínima acción"
            problem="Una partícula libre va de x₁ = 0 a x₂ = 10 m en tiempo Δt = 2 s. ¿Cuál es la trayectoria?"
            solution={
              <div>
                <p>Análisis:</p>
                <p>La acción es S = ½m(Δx)²/Δt = ½m(100)/2 = 25m</p>
                <p>Para minimizar S con Δx y Δt fijos, la trayectoria debe ser una línea recta.</p>
                <p>Resultado: x(t) = x₁ + (x₂-x₁)t/Δt = 5t</p>
                <p>Velocidad constante: v = 5 m/s (MRU)</p>
              </div>
            }
          />
        </Concept>
      </TheorySection>

      <TheorySection title="Interpretación Física">
        <Concept title="¿Por qué 'Mínima'?">
          <p>
            La naturaleza "elige" la trayectoria de mínima acción porque:
          </p>
          <ul>
            <li>Minimiza el "costo" energético-temporal del movimiento</li>
            <li>Es la trayectoria más "eficiente" en cierto sentido</li>
            <li>Refleja una economía fundamental de la naturaleza</li>
          </ul>
        </Concept>

        <Concept title="Conexión con Óptica">
          <p>
            El principio de mínima acción en mecánica es análogo al principio de Fermat en óptica:
          </p>
          <ul>
            <li>Óptica: La luz sigue el camino de tiempo mínimo</li>
            <li>Mecánica: Las partículas siguen el camino de acción mínima</li>
          </ul>
          <p>
            Esta analogía fue clave para el desarrollo de la mecánica ondulatoria y la mecánica cuántica.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Importancia Histórica y Moderna">
        <ul>
          <li><strong>Unificación:</strong> Unifica mecánica, óptica y electromagnetismo</li>
          <li><strong>Mecánica Cuántica:</strong> Base de la integral de caminos de Feynman</li>
          <li><strong>Teoría de Campos:</strong> Fundamental en física de partículas</li>
          <li><strong>Relatividad:</strong> Se generaliza naturalmente a la relatividad</li>
          <li><strong>Simetrías:</strong> Conexión profunda con leyes de conservación (Teorema de Noether)</li>
        </ul>
      </TheorySection>

      <TheorySection title="Cálculo Variacional">
        <Concept title="Conceptos Básicos">
          <p>
            El cálculo variacional estudia cómo encontrar funciones que extremizan funcionales:
          </p>
          <ul>
            <li>Funcional: "Función de funciones" - asigna un número a cada función</li>
            <li>Variación: δq(t) - pequeño cambio en la trayectoria</li>
            <li>Condición de extremo: δS = 0</li>
          </ul>

          <p>Procedimiento:</p>
          <ol>
            <li>Considerar trayectoria q(t) + εη(t) donde η(t₁) = η(t₂) = 0</li>
            <li>Calcular S[q + εη]</li>
            <li>Derivar respecto a ε y evaluar en ε = 0</li>
            <li>Igualar a cero: dS/dε|ε=0 = 0</li>
            <li>Obtener ecuaciones de Euler-Lagrange</li>
          </ol>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>⚛️ Física de Partículas y el Modelo Estándar</h3>
          <p>
            El Modelo Estándar de física de partículas se formula completamente usando el principio de 
            mínima acción. La acción del Modelo Estándar contiene términos para quarks, leptones, bosones 
            gauge y el campo de Higgs. Cada interacción fundamental (electromagnética, débil, fuerte) 
            deriva de la acción mediante δS = 0. El descubrimiento del bosón de Higgs (2012, LHC) confirmó 
            predicciones basadas en el principio variacional.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌌 Relatividad General y Cosmología</h3>
          <p>
            Einstein formuló la Relatividad General usando la acción de Einstein-Hilbert: S = ∫R√(-g) d⁴x, 
            donde R es la curvatura del espaciotiempo. Las ecuaciones de campo de Einstein se obtienen 
            aplicando δS = 0. Los modelos cosmológicos (Big Bang, expansión acelerada, agujeros negros) 
            se calculan usando este principio. Los detectores de ondas gravitacionales (LIGO, Virgo) 
            usan predicciones basadas en la acción de Einstein-Hilbert.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 Control Óptimo y Robótica</h3>
          <p>
            El control óptimo usa el principio de mínima acción para encontrar trayectorias que minimizan 
            "costo" (tiempo, energía, combustible). Los cohetes espaciales optimizan trayectorias usando 
            cálculo variacional (problema de Goddard). Los drones y robots autónomos calculan rutas óptimas 
            minimizando una función de costo (acción). Tesla Autopilot y sistemas de navegación usan 
            variantes del principio variacional para planificar trayectorias seguras y eficientes.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💡 Óptica y Fotónica</h3>
          <p>
            El principio de Fermat (la luz sigue el camino de tiempo mínimo) es análogo al principio de 
            mínima acción. El diseño de lentes, fibras ópticas y sistemas láser usa cálculo variacional. 
            Los metamateriales (materiales con propiedades ópticas exóticas) se diseñan optimizando la 
            acción electromagnética. Las comunicaciones por fibra óptica (internet global) se basan en 
            principios variacionales para minimizar pérdidas y dispersión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧮 Mecánica Cuántica: Integral de Caminos de Feynman</h3>
          <p>
            Richard Feynman (1948) reformuló la mecánica cuántica usando el principio de mínima acción. 
            En su formulación, una partícula "explora" todos los caminos posibles, cada uno con amplitud 
            exp(iS/ℏ). Los caminos cercanos al de mínima acción interfieren constructivamente, dominando 
            la probabilidad. Esta formulación es fundamental en teoría cuántica de campos, cromodinámica 
            cuántica (QCD) y cálculos en el LHC.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎮 Gráficos por Computadora y Animación</h3>
          <p>
            Los motores de física en videojuegos y películas usan principios variacionales para simular 
            movimientos realistas. La animación de telas, fluidos y cuerpos deformables se calcula 
            minimizando una función de energía (acción discreta). Pixar, ILM y estudios de efectos 
            visuales implementan solvers variacionales para simular física compleja en tiempo real o 
            pre-renderizado.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📡 GPS y Navegación Satelital</h3>
          <p>
            Los satélites GPS calculan sus órbitas usando el principio de mínima acción en el campo 
            gravitacional terrestre. Las correcciones relativistas (dilatación temporal) se calculan 
            usando la acción relativista. Los receptores GPS resuelven un problema variacional para 
            determinar posición: minimizar el error entre tiempos medidos y calculados. Sin estas 
            correcciones basadas en principios variacionales, el GPS acumularía errores de ~10 km/día.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De Maupertuis a Feynman
        </h2>
        
        <div className="theory-subsection">
          <h3>🎭 Pierre de Maupertuis (1744): El Principio Original</h3>
          <p>
            Pierre de Maupertuis, matemático y filósofo francés, propuso en 1744 que "la naturaleza 
            actúa siempre por los caminos más simples". Formuló el principio de mínima acción como 
            una ley universal, argumentando que reflejaba la perfección divina de la creación. Su 
            formulación original era: "La cantidad de acción necesaria para producir un cambio en la 
            naturaleza es la menor posible".
          </p>
          <p>
            Maupertuis definió la acción como el producto de masa, velocidad y distancia (mvs). Aunque 
            su definición era imprecisa, la idea central era revolucionaria: la naturaleza optimiza. 
            Esta propuesta generó controversia filosófica: ¿implica que la naturaleza tiene "propósito" 
            (teleología)? Voltaire se burló de Maupertuis, pero la idea sobrevivió.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📐 Leonhard Euler (1744): Formalización Matemática</h3>
          <p>
            Leonhard Euler, el matemático más prolífico de la historia, formalizó el principio de 
            Maupertuis usando cálculo variacional. Euler desarrolló las ecuaciones que llevan su nombre 
            (ecuaciones de Euler-Lagrange) para encontrar funciones que extremizan integrales. Aunque 
            Euler era escéptico sobre las implicaciones filosóficas, reconoció el poder matemático del 
            principio.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎓 Joseph-Louis Lagrange (1788): Aplicación a la Mecánica</h3>
          <p>
            Lagrange aplicó sistemáticamente el principio de mínima acción a la mecánica en su 
            "Mécanique Analytique" (1788). Definió la acción como S = ∫L dt donde L = T - V, y demostró 
            que δS = 0 conduce a las ecuaciones de movimiento. Lagrange eliminó la controversia filosófica 
            tratando el principio como una herramienta matemática, no una declaración sobre la "intención" 
            de la naturaleza.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ William Rowan Hamilton (1834): Reformulación</h3>
          <p>
            Hamilton reformuló el principio en 1834, conectándolo con la óptica geométrica. Demostró 
            que el principio de Fermat (luz sigue camino de tiempo mínimo) y el principio de mínima 
            acción son análogos. Esta unificación de mecánica y óptica fue profética: 90 años después, 
            la mecánica cuántica revelaría que las partículas tienen propiedades ondulatorias.
          </p>
          <p>
            Hamilton también introdujo la función principal S(q,t), cuyas derivadas dan el momento y 
            la energía. Esta formulación fue crucial para el desarrollo de la mecánica cuántica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌟 Richard Feynman (1948): Integral de Caminos</h3>
          <p>
            Richard Feynman revolucionó la mecánica cuántica con su formulación de integral de caminos 
            (1948). En lugar de una sola trayectoria de mínima acción, Feynman propuso que las partículas 
            cuánticas "exploran" todos los caminos posibles simultáneamente. Cada camino contribuye con 
            amplitud exp(iS/ℏ), donde S es la acción clásica.
          </p>
          <p>
            Los caminos cercanos al de mínima acción interfieren constructivamente (tienen fases similares), 
            mientras que caminos alejados se cancelan por interferencia destructiva. En el límite clásico 
            (ℏ → 0), solo el camino de mínima acción sobrevive. Esta formulación unificó mecánica clásica 
            y cuántica de forma elegante.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Impacto Moderno</h3>
          <p>
            Hoy, el principio de mínima acción es la base de toda la física fundamental. El Modelo 
            Estándar, la Relatividad General, la Teoría de Cuerdas y todas las teorías de campos se 
            formulan usando acciones. Emmy Noether (1918) demostró que cada simetría de la acción 
            corresponde a una ley de conservación, conectando profundamente simetría, conservación y 
            el principio variacional.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🎭 La Controversia Filosófica</h3>
          <p>
            Cuando Maupertuis propuso el principio de mínima acción (1744), argumentó que demostraba 
            la existencia de Dios: "La naturaleza actúa de la manera más económica posible, reflejando 
            la perfección divina". Esto generó un debate filosófico intenso. ¿Cómo puede una partícula 
            "saber" qué camino minimiza la acción antes de recorrerlo? ¿Implica esto teleología 
            (propósito en la naturaleza)?
          </p>
          <p>
            Voltaire se burló de Maupertuis en su sátira "Diatribe du docteur Akakia" (1752), ridiculizando 
            la idea de que Dios se preocupa por minimizar integrales. Irónicamente, el principio sobrevivió 
            y se convirtió en la base de la física moderna, aunque despojado de sus implicaciones teológicas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌈 La Luz "Sabe" el Camino Más Rápido</h3>
          <p>
            El principio de Fermat (1662) establece que la luz sigue el camino de tiempo mínimo. Esto 
            explica la refracción: cuando la luz pasa de aire a agua, se dobla porque "elige" el camino 
            que minimiza el tiempo total. Pero, ¿cómo "sabe" la luz qué camino es más rápido antes de 
            recorrerlo? Esta paradoja desconcertó a físicos durante siglos.
          </p>
          <p>
            La respuesta llegó con Feynman: la luz cuántica "explora" todos los caminos simultáneamente. 
            Los caminos cercanos al de tiempo mínimo interfieren constructivamente, dominando la 
            probabilidad. La luz no "sabe" el camino; simplemente, la mecánica cuántica hace que ese 
            camino sea el más probable.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 Feynman y el Camino Más Largo</h3>
          <p>
            En su formulación de integral de caminos, Feynman demostró algo sorprendente: en mecánica 
            cuántica, las partículas pueden tomar el camino de acción máxima, o cualquier camino 
            intermedio. Todos los caminos contribuyen, pero los cercanos al de mínima acción dominan 
            por interferencia constructiva. Esto significa que, en principio, una partícula puede ir 
            de A a B dando la vuelta al universo, aunque con probabilidad infinitesimal.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📡 GPS y Relatividad</h3>
          <p>
            Los satélites GPS orbitan a ~20,000 km de altura, donde el tiempo transcurre más rápido 
            que en la superficie terrestre (dilatación gravitacional: +45 μs/día). También se mueven 
            a ~14,000 km/h, donde el tiempo transcurre más lento (dilatación por velocidad: -7 μs/día). 
            El efecto neto es +38 μs/día, que acumularía errores de ~10 km/día sin correcciones.
          </p>
          <p>
            Estas correcciones se calculan usando la acción relativista, derivada del principio de 
            mínima acción en espaciotiempo curvo. Sin el principio variacional y la Relatividad General, 
            el GPS sería inútil. Cada vez que usas Google Maps, estás beneficiándote del principio de 
            mínima acción.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎬 Pixar y la Acción Discreta</h3>
          <p>
            Los animadores de Pixar usan una versión discreta del principio de mínima acción para 
            simular telas, pelo y fluidos. En lugar de ∫L dt, usan ΣLᵢΔt (suma sobre pasos de tiempo). 
            El sistema "elige" la configuración que minimiza la energía total (acción discreta). Esto 
            permite simular física compleja de forma eficiente: el pelo de Mérida (Brave) con 111,700 
            hebras, o el agua en Finding Nemo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌌 La Acción del Universo</h3>
          <p>
            En cosmología, se puede calcular la acción total del universo observable: S_universo ≈ 10¹²³ 
            (en unidades de ℏ). Este número gigantesco refleja que el universo está profundamente en 
            el régimen clásico (S &gt;&gt; ℏ), donde el principio de mínima acción domina completamente. 
            Solo en escalas microscópicas (S ~ ℏ) aparecen efectos cuánticos significativos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔄 Simetría y Conservación</h3>
          <p>
            El Teorema de Noether (1918) conecta simetrías de la acción con leyes de conservación: 
            si S es invariante bajo traslaciones temporales → energía conservada; si S es invariante 
            bajo traslaciones espaciales → momento conservado; si S es invariante bajo rotaciones → 
            momento angular conservado. Esta conexión profunda entre simetría y conservación es una 
            de las ideas más bellas de la física.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          El Principio de Mínima Acción establece que los sistemas físicos evolucionan siguiendo 
          trayectorias que hacen estacionaria la acción S = ∫L dt. Aplicando δS = 0 mediante cálculo 
          variacional, se obtienen las ecuaciones de Euler-Lagrange, equivalentes a las leyes de Newton.
        </p>
        <p>
          Este principio unifica mecánica, óptica, electromagnetismo y todas las teorías fundamentales. 
          Propuesto por Maupertuis (1744), formalizado por Euler y Lagrange, reformulado por Hamilton 
          (1834) y extendido a mecánica cuántica por Feynman (1948), es la base conceptual de la física 
          moderna. Aplicaciones incluyen física de partículas, relatividad, control óptimo, GPS, y 
          animación por computadora.
        </p>
      </div>
    </>
  );
};

export default PrincipioMinimaAccionTheory;
