import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Mecánica Lagrangiana",
  descripcion: "Formulación lagrangiana de la mecánica clásica",
  isTheoryOnly: false,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

const LagrangianaTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a la Mecánica Lagrangiana">
        <p>
          La mecánica lagrangiana es una reformulación de la mecánica clásica introducida 
          por Joseph-Louis Lagrange en 1788. En lugar de trabajar con fuerzas (como en la mecánica newtoniana), 
          trabaja con energías y utiliza el principio de mínima acción.
        </p>

        <Important>
          La mecánica lagrangiana es especialmente poderosa para sistemas con restricciones 
          y aprovecha las simetrías del sistema de manera natural.
        </Important>
      </TheorySection>

      <TheorySection title="La Función Lagrangiana">
        <Concept title="Definición">
          <p>
            El Lagrangiano L de un sistema es la diferencia entre su energía cinética 
            y su energía potencial:
          </p>

          <Formula
            expression={String.raw`L(q, \dot{q}, t) = T - V`}
            calculatorId="lagrangiano"
            definitions={definitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>L: Función lagrangiana (J)</li>
            <li>T: Energía cinética del sistema (J)</li>
            <li>V: Energía potencial del sistema (J)</li>
            <li>q: Coordenadas generalizadas</li>
            <li>q̇: Velocidades generalizadas</li>
            <li>t: Tiempo</li>
          </ul>

          <Important>
            El signo menos es crucial: L = T - V, no T + V. Esto proviene del 
            principio de mínima acción.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuaciones de Euler-Lagrange">
        <Concept title="Ecuación Fundamental">
          <p>
            Las ecuaciones de Euler-Lagrange son las ecuaciones de movimiento 
            en la formulación lagrangiana:
          </p>

          <Formula
            expression={String.raw`\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = 0`}
            description="Ecuación de Euler-Lagrange"
          />

          <p>Para cada coordenada generalizada qᵢ:</p>
          <ol>
            <li>Calcular ∂L/∂q̇ᵢ (derivada parcial respecto a la velocidad)</li>
            <li>Derivar temporalmente: d/dt(∂L/∂q̇ᵢ)</li>
            <li>Calcular ∂L/∂qᵢ (derivada parcial respecto a la posición)</li>
            <li>Igualar: d/dt(∂L/∂q̇ᵢ) - ∂L/∂qᵢ = 0</li>
          </ol>

          <Important>
            Estas ecuaciones reemplazan las leyes de Newton F = ma, pero son más 
            generales y funcionan en cualquier sistema de coordenadas.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Momento Generalizado">
        <Concept title="Definición">
          <p>
            El momento generalizado conjugado a la coordenada qᵢ se define como:
          </p>

          <Formula
            expression={String.raw`p_i = \frac{\partial L}{\partial \dot{q}_i}`}
            calculatorId="momento-generalizado"
            definitions={definitions}
            exercises={exercises}
          />

          <p>Interpretación:</p>
          <ul>
            <li>Si qᵢ es una coordenada cartesiana → pᵢ es el momento lineal</li>
            <li>Si qᵢ es un ángulo → pᵢ es el momento angular</li>
            <li>En general, pᵢ es la "cantidad de movimiento" asociada a qᵢ</li>
          </ul>
        </Concept>

        <Concept title="Conservación del Momento">
          <p>
            Si el Lagrangiano no depende explícitamente de una coordenada qᵢ 
            (coordenada cíclica o ignorable), entonces su momento conjugado se conserva:
          </p>

          <Formula
            expression={String.raw`\frac{\partial L}{\partial q_i} = 0 \quad \Rightarrow \quad p_i = \text{constante}`}
            description="Conservación del momento generalizado"
          />

          <p>Ejemplos:</p>
          <ul>
            <li>Si L no depende de x → pₓ se conserva (conservación del momento lineal)</li>
            <li>Si L no depende de θ → pθ se conserva (conservación del momento angular)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos Clásicos">
        <Concept title="Péndulo Simple">
          <p>
            Para un péndulo de longitud L y masa m, usando el ángulo θ como coordenada generalizada:
          </p>

          <Formula
            expression={String.raw`L = \frac{1}{2}mL^2\dot{\theta}^2 + mgL\cos\theta`}
            calculatorId="pendulo-simple"
            definitions={definitions}
            exercises={exercises}
          />

          <p>Componentes:</p>
          <ul>
            <li>T = ½mL²θ̇²: Energía cinética</li>
            <li>V = -mgL cos(θ): Energía potencial (tomando V=0 en θ=90°)</li>
          </ul>

          <Example
            title="Ecuación de movimiento del péndulo"
            problem="Aplicar Euler-Lagrange al péndulo simple"
            solution={
              <div>
                <p>Paso 1: ∂L/∂θ̇ = mL²θ̇</p>
                <p>Paso 2: d/dt(∂L/∂θ̇) = mL²θ̈</p>
                <p>Paso 3: ∂L/∂θ = -mgL sin(θ)</p>
                <p>Paso 4: mL²θ̈ - (-mgL sin(θ)) = 0</p>
                <p>Resultado: θ̈ + (g/L) sin(θ) = 0</p>
                <p>Esta es la ecuación de movimiento del péndulo simple.</p>
              </div>
            }
          />
        </Concept>

        <Concept title="Oscilador Armónico">
          <p>
            Para una masa m conectada a un resorte de constante k:
          </p>

          <Formula
            expression={String.raw`L = \frac{1}{2}m\dot{x}^2 - \frac{1}{2}kx^2`}
            calculatorId="oscilador-armonico"
            definitions={definitions}
            exercises={exercises}
          />

          <p>Componentes:</p>
          <ul>
            <li>T = ½mẋ²: Energía cinética</li>
            <li>V = ½kx²: Energía potencial elástica</li>
          </ul>

          <Example
            title="Ecuación de movimiento del oscilador"
            problem="Aplicar Euler-Lagrange al oscilador armónico"
            solution={
              <div>
                <p>Paso 1: ∂L/∂ẋ = mẋ</p>
                <p>Paso 2: d/dt(∂L/∂ẋ) = mẍ</p>
                <p>Paso 3: ∂L/∂x = -kx</p>
                <p>Paso 4: mẍ - (-kx) = 0</p>
                <p>Resultado: mẍ + kx = 0 → ẍ + ω²x = 0</p>
                <p>donde ω = √(k/m) es la frecuencia angular.</p>
              </div>
            }
          />
        </Concept>
      </TheorySection>

      <TheorySection title="Ventajas de la Formulación Lagrangiana">
        <ul>
          <li>Independiente del sistema de coordenadas: Funciona en cualquier sistema</li>
          <li>Trata restricciones automáticamente: No necesita fuerzas de restricción</li>
          <li>Revela simetrías: Coordenadas cíclicas → constantes de movimiento</li>
          <li>Escalares vs vectores: Trabaja con energías (escalares) en lugar de fuerzas (vectores)</li>
          <li>Generalizable: Base para mecánica cuántica y teoría de campos</li>
          <li>Sistemático: Procedimiento algorítmico para obtener ecuaciones</li>
        </ul>
      </TheorySection>

      <TheorySection title="Comparación: Newton vs Lagrange">
        <table style={{width: '100%', borderCollapse: 'collapse', margin: '1rem 0'}}>
          <thead>
            <tr style={{borderBottom: '2px solid #ccc'}}>
              <th style={{padding: '0.5rem', textAlign: 'left'}}>Aspecto</th>
              <th style={{padding: '0.5rem', textAlign: 'left'}}>Newton</th>
              <th style={{padding: '0.5rem', textAlign: 'left'}}>Lagrange</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom: '1px solid #eee'}}>
              <td style={{padding: '0.5rem'}}>Cantidad fundamental</td>
              <td style={{padding: '0.5rem'}}>Fuerza (vector)</td>
              <td style={{padding: '0.5rem'}}>Energía (escalar)</td>
            </tr>
            <tr style={{borderBottom: '1px solid #eee'}}>
              <td style={{padding: '0.5rem'}}>Ecuación básica</td>
              <td style={{padding: '0.5rem'}}>F = ma</td>
              <td style={{padding: '0.5rem'}}>d/dt(∂L/∂q̇) - ∂L/∂q = 0</td>
            </tr>
            <tr style={{borderBottom: '1px solid #eee'}}>
              <td style={{padding: '0.5rem'}}>Coordenadas</td>
              <td style={{padding: '0.5rem'}}>Preferiblemente cartesianas</td>
              <td style={{padding: '0.5rem'}}>Cualquier sistema</td>
            </tr>
            <tr style={{borderBottom: '1px solid #eee'}}>
              <td style={{padding: '0.5rem'}}>Restricciones</td>
              <td style={{padding: '0.5rem'}}>Requiere fuerzas de restricción</td>
              <td style={{padding: '0.5rem'}}>Automáticas</td>
            </tr>
            <tr>
              <td style={{padding: '0.5rem'}}>Mejor para</td>
              <td style={{padding: '0.5rem'}}>Problemas simples, intuición</td>
              <td style={{padding: '0.5rem'}}>Sistemas complejos, simetrías</td>
            </tr>
          </tbody>
        </table>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🤖 Robótica y Manipuladores</h3>
          <p>
            La mecánica lagrangiana es fundamental en el diseño y control de robots. Los brazos robóticos 
            industriales (como los de fábricas de automóviles) usan ecuaciones de Euler-Lagrange para 
            calcular las fuerzas necesarias en cada articulación. El software de control (ROS, MATLAB Robotics) 
            implementa formalismos lagrangianos para planificar trayectorias y evitar colisiones. Los robots 
            humanoides (Boston Dynamics, Tesla Optimus) usan estas ecuaciones para mantener equilibrio y 
            coordinar movimientos complejos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔭 Mecánica Celeste y Astrofísica</h3>
          <p>
            Las órbitas planetarias se calculan usando el formalismo lagrangiano. El problema de los tres 
            cuerpos (Sol-Tierra-Luna) se analiza con coordenadas generalizadas que simplifican enormemente 
            los cálculos. Los puntos de Lagrange (L1-L5) donde se estacionan satélites como el James Webb 
            se descubren usando este formalismo. La NASA y ESA usan ecuaciones lagrangianas para diseñar 
            trayectorias de misiones espaciales, aprovechando simetrías para ahorrar combustible.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚛️ Física de Partículas y Teoría de Campos</h3>
          <p>
            El Modelo Estándar de física de partículas se formula usando densidades lagrangianas. Cada 
            partícula y fuerza fundamental tiene su término en el Lagrangiano total. El bosón de Higgs 
            se predijo a partir de consideraciones lagrangianas sobre simetría. Los aceleradores como el 
            LHC usan teoría lagrangiana para predecir resultados de colisiones y diseñar detectores.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎮 Animación y Efectos Visuales</h3>
          <p>
            Los estudios de animación (Pixar, ILM) usan mecánica lagrangiana para simular movimientos 
            realistas. Las cadenas cinemáticas (pelo, tela, cadenas) se modelan con coordenadas generalizadas. 
            Los motores de física (Houdini, Maya) implementan solvers lagrangianos para simular sistemas 
            con restricciones complejas. Esto permite animar personajes con ropa, pelo y accesorios que 
            se mueven de forma natural.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ Ingeniería Estructural y Mecánica</h3>
          <p>
            El análisis de vibraciones en puentes, edificios y maquinaria usa formalismos lagrangianos. 
            Los modos normales de vibración se obtienen de las ecuaciones de Euler-Lagrange. El diseño 
            de suspensiones de vehículos, sistemas de amortiguación y estructuras antisísmicas se basa 
            en estos principios. Software como ANSYS y COMSOL implementan solvers lagrangianos para 
            análisis dinámico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧬 Biomecánica y Medicina</h3>
          <p>
            El análisis de la marcha humana usa coordenadas generalizadas (ángulos de articulaciones) 
            y ecuaciones lagrangianas. Los sistemas de captura de movimiento en hospitales calculan 
            fuerzas en articulaciones para diagnosticar problemas. El diseño de prótesis y exoesqueletos 
            usa mecánica lagrangiana para optimizar movimientos y minimizar esfuerzo. Los simuladores 
            quirúrgicos entrenan médicos usando física lagrangiana para movimientos realistas.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Lagrange y la Revolución Analítica
        </h2>
        
        <div className="theory-subsection">
          <h3>🎓 Joseph-Louis Lagrange (1788): El Matemático Italiano</h3>
          <p>
            Joseph-Louis Lagrange (1736-1813) desarrolló su formulación de la mecánica en su obra maestra 
            "Mécanique Analytique" (1788). Nacido en Turín como Giuseppe Lodovico Lagrangia, se mudó a 
            París donde se convirtió en uno de los matemáticos más influyentes de su época. Su objetivo 
            era crear una mecánica puramente analítica, sin diagramas ni figuras geométricas.
          </p>
          <p>
            Lagrange se enorgullecía de que su "Mécanique Analytique" no contenía ni una sola figura. 
            Quería demostrar que la mecánica podía ser completamente algebraica, sin necesidad de 
            intuición geométrica. Esta abstracción, aunque inicialmente criticada, se convirtió en la 
            base de la física teórica moderna.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔗 Conexión con Euler y el Cálculo Variacional</h3>
          <p>
            Las ecuaciones de Euler-Lagrange combinan el trabajo de Leonhard Euler sobre cálculo variacional 
            (1744) con las contribuciones de Lagrange. Euler había desarrollado las ecuaciones para problemas 
            de optimización, pero Lagrange las aplicó sistemáticamente a la mecánica. Esta colaboración 
            intelectual (aunque Euler era 29 años mayor) fue fundamental para el desarrollo de la física 
            matemática.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ El Principio de Mínima Acción</h3>
          <p>
            Pierre de Maupertuis propuso el principio de mínima acción (1744), argumentando que la naturaleza 
            siempre minimiza la "acción". Euler lo formalizó matemáticamente, y Lagrange lo convirtió en 
            la base de su mecánica. William Rowan Hamilton (1834) reformuló el principio, creando el 
            formalismo hamiltoniano. Esta línea de desarrollo (Maupertuis → Euler → Lagrange → Hamilton) 
            es una de las más importantes en la historia de la física.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌟 Impacto en la Física Moderna</h3>
          <p>
            La mecánica lagrangiana influyó profundamente en el desarrollo de la física del siglo XX. 
            Emmy Noether (1918) demostró que cada simetría del Lagrangiano corresponde a una ley de 
            conservación (Teorema de Noether). Richard Feynman (1948) extendió el formalismo lagrangiano 
            a mecánica cuántica con su formulación de integrales de camino. Hoy, todas las teorías 
            fundamentales (Modelo Estándar, Relatividad General) se expresan en lenguaje lagrangiano.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>📖 El Libro Sin Figuras</h3>
          <p>
            Lagrange se enorgullecía de que su "Mécanique Analytique" (1788) no contenía ni una sola 
            figura o diagrama. Quería demostrar que la mecánica podía ser completamente algebraica. 
            Irónicamente, esto hizo el libro extremadamente difícil de leer, y muchos físicos de la época 
            lo encontraron incomprensible. Hoy se considera una obra maestra, pero en su tiempo fue 
            criticado por ser demasiado abstracto.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>👑 Favorito de Napoleón</h3>
          <p>
            Napoleón Bonaparte admiraba profundamente a Lagrange y lo nombró Senador y Conde del Imperio. 
            Napoleón asistía ocasionalmente a las conferencias de Lagrange en la École Polytechnique, 
            aunque admitía no entender mucho. Cuando Lagrange murió (1813), Napoleón ordenó que fuera 
            enterrado en el Panteón de París, el mayor honor para un ciudadano francés.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 Coordenadas Cíclicas y Conservación</h3>
          <p>
            Si el Lagrangiano no depende de una coordenada qᵢ (coordenada cíclica), su momento conjugado 
            se conserva automáticamente. Esta es una forma elegante de descubrir leyes de conservación: 
            si L no depende de x → momento lineal conservado; si L no depende de θ → momento angular 
            conservado. Esta conexión entre simetría y conservación fue formalizada por Emmy Noether en 
            1918 (Teorema de Noether).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔄 El Signo Menos Crucial</h3>
          <p>
            El Lagrangiano es L = T - V (resta), no T + V (suma). Este signo menos proviene del principio 
            de mínima acción y es fundamental para obtener las ecuaciones correctas. Muchos estudiantes 
            se confunden porque el Hamiltoniano es H = T + V (suma). La diferencia refleja que son 
            transformaciones de Legendre una de la otra, cambiando variables independientes.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🤖 Robots y Lagrange</h3>
          <p>
            Los robots modernos usan ecuaciones de Euler-Lagrange para calcular dinámicas. Un brazo 
            robótico de 6 articulaciones requiere resolver 6 ecuaciones acopladas. El formalismo 
            lagrangiano hace esto sistemático: definir coordenadas generalizadas (ángulos), calcular 
            T y V, aplicar Euler-Lagrange. Software como ROS (Robot Operating System) tiene librerías 
            que automatizan este proceso.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎬 Pixar y la Mecánica Lagrangiana</h3>
          <p>
            Los estudios de animación como Pixar usan mecánica lagrangiana para simular pelo, tela y 
            cadenas. Cada hebra de pelo es una cadena de segmentos con restricciones. Las ecuaciones 
            de Euler-Lagrange calculan cómo se mueve cada segmento. Esto permite que el pelo de 
            personajes como Mérida (Brave) se mueva de forma realista, con más de 100,000 hebras 
            simuladas individualmente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌌 Puntos de Lagrange en el Espacio</h3>
          <p>
            Los puntos de Lagrange (L1-L5) son posiciones donde un objeto pequeño puede orbitar 
            establemente bajo la influencia gravitacional de dos cuerpos grandes (Sol-Tierra). El 
            telescopio James Webb está en L2, a 1.5 millones de km de la Tierra. Estos puntos se 
            descubrieron usando el formalismo lagrangiano aplicado al problema de tres cuerpos. Son 
            "estacionamientos" naturales en el espacio donde los satélites necesitan muy poco combustible.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          La mecánica lagrangiana reformula la mecánica clásica usando el Lagrangiano L = T - V y las 
          ecuaciones de Euler-Lagrange: d/dt(∂L/∂q̇ᵢ) - ∂L/∂qᵢ = 0. Este formalismo es independiente 
          del sistema de coordenadas, trata restricciones automáticamente y revela simetrías del sistema.
        </p>
        <p>
          Las coordenadas cíclicas (donde ∂L/∂qᵢ = 0) conducen a momentos conservados, conectando 
          simetrías con leyes de conservación. El formalismo es fundamental en robótica, mecánica celeste, 
          física de partículas, animación y teoría de campos. Desarrollado por Lagrange en 1788, sigue 
          siendo la base de la física teórica moderna.
        </p>
      </div>
    </>
  );
};

export default LagrangianaTheory;
