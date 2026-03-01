import { TheorySection, Concept, Formula } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Análisis Diferencial de Fluidos",
  descripcion: "Ecuaciones diferenciales y flujo potencial en mecánica de fluidos",
  isTheoryOnly: false,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

const Theory = ({ exercises }) => (
  <>
    <TheorySection title="Introducción al Análisis Diferencial">
      <p>
        El análisis diferencial de fluidos estudia el comportamiento local del flujo mediante ecuaciones diferenciales. A diferencia del análisis integral (como Bernoulli), que considera volúmenes finitos, el análisis diferencial examina elementos infinitesimales de fluido, permitiendo describir variaciones espaciales y temporales con gran detalle.
      </p>
      <p>
        Este enfoque es fundamental para resolver problemas complejos de flujo, diseñar perfiles aerodinámicos, predecir patrones de turbulencia y desarrollar simulaciones computacionales (CFD - Computational Fluid Dynamics).
      </p>
    </TheorySection>

    <TheorySection title="Ecuación de Continuidad Diferencial">
      <Concept title="Conservación de Masa Local">
        <p>
          La ecuación de continuidad en forma diferencial expresa que la masa se conserva en cada punto del fluido:
        </p>
        <p>
          ∂ρ/∂t + ∇·(ρv⃗) = 0
        </p>
        <p>
          Para flujo incompresible (ρ = constante), se simplifica a:
        </p>
        <p>
          ∇·v⃗ = ∂u/∂x + ∂v/∂y + ∂w/∂z = 0
        </p>
        <p>
          Esta ecuación indica que la divergencia del campo de velocidad es cero: el fluido no se comprime ni se expande.
        </p>
      </Concept>
    </TheorySection>

    <TheorySection title="Vorticidad y Circulación">
      <Concept title="Vorticidad">
        <p>
          La vorticidad mide la rotación local del fluido. Es el rotacional del campo de velocidad:
        </p>
        <p>
          ω⃗ = ∇ × v⃗
        </p>
        <p>
          En 2D (flujo plano), la vorticidad tiene solo componente z:
        </p>
        <Formula 
          expression={String.raw`\omega = \frac{\partial v}{\partial x} - \frac{\partial u}{\partial y}`} 
          calculatorId="vorticidad-2d" 
          definitions={definitions} 
          exercises={exercises}
        />
        <p>Donde:</p>
        <ul>
          <li>ω: Vorticidad (1/s)</li>
          <li>u, v: Componentes de velocidad en x, y (m/s)</li>
          <li>ω mayor que 0: Rotación antihoraria</li>
          <li>ω menor que 0: Rotación horaria</li>
          <li>ω = 0: Flujo irrotacional</li>
        </ul>
      </Concept>

      <Concept title="Magnitud de Vorticidad">
        <Formula 
          expression={String.raw`|\vec{\omega}| = \sqrt{\omega_x^2 + \omega_y^2 + \omega_z^2}`} 
          calculatorId="magnitud-vorticidad" 
          definitions={definitions} 
          exercises={exercises}
        />
        <p>
          La magnitud de vorticidad indica la intensidad de rotación del fluido, independientemente de la dirección.
        </p>
      </Concept>

      <Concept title="Circulación">
        <p>
          La circulación es la integral de línea de la velocidad alrededor de un contorno cerrado:
        </p>
        <Formula 
          expression={String.raw`\Gamma = \oint \vec{v} \cdot d\vec{l}`} 
          calculatorId="circulacion" 
          definitions={definitions} 
          exercises={exercises}
        />
        <p>
          Por el teorema de Stokes, la circulación está relacionada con la vorticidad: Γ = ∫∫ ω⃗·dA⃗. En flujo irrotacional, la circulación es cero en cualquier contorno que no encierre singularidades.
        </p>
      </Concept>
    </TheorySection>

    <TheorySection title="Función de Corriente">
      <Concept title="Definición">
        <p>
          Para flujo 2D incompresible, existe una función de corriente ψ tal que:
        </p>
        <Formula 
          expression={String.raw`u = \frac{\partial\psi}{\partial y}, \quad v = -\frac{\partial\psi}{\partial x}`} 
          calculatorId="funcion-corriente" 
          definitions={definitions} 
          exercises={exercises}
        />
        <p>
          Esta definición garantiza automáticamente que se cumple la ecuación de continuidad (∂u/∂x + ∂v/∂y = 0).
        </p>
      </Concept>

      <Concept title="Líneas de Corriente">
        <p>
          Las curvas ψ = constante son líneas de corriente. El fluido se mueve tangente a estas líneas, nunca las cruza.
        </p>
        <Formula 
          expression={String.raw`Q = \psi_2 - \psi_1`} 
          calculatorId="caudal-corriente" 
          definitions={definitions} 
          exercises={exercises}
        />
        <p>
          La diferencia entre dos valores de ψ da el caudal volumétrico (por unidad de profundidad) que fluye entre esas dos líneas de corriente.
        </p>
      </Concept>
    </TheorySection>

    <TheorySection title="Potencial de Velocidad">
      <Concept title="Flujo Irrotacional">
        <p>
          Para flujo irrotacional (ω⃗ = 0), existe un potencial de velocidad φ tal que:
        </p>
        <Formula 
          expression={String.raw`\vec{v} = \nabla\phi \quad \Rightarrow \quad u = \frac{\partial\phi}{\partial x}, \quad v = \frac{\partial\phi}{\partial y}`} 
          calculatorId="potencial-velocidad" 
          definitions={definitions} 
          exercises={exercises}
        />
        <p>
          Las curvas φ = constante son líneas equipotenciales, perpendiculares a las líneas de corriente.
        </p>
      </Concept>

      <Concept title="Ecuación de Laplace">
        <p>
          Para flujo incompresible e irrotacional, el potencial satisface la ecuación de Laplace:
        </p>
        <p>
          ∇²φ = ∂²φ/∂x² + ∂²φ/∂y² = 0
        </p>
        <p>
          Esta ecuación permite resolver problemas de flujo potencial mediante métodos analíticos o numéricos.
        </p>
      </Concept>
    </TheorySection>

    <TheorySection title="Soluciones Elementales de Flujo Potencial">
      <Concept title="Flujo Uniforme">
        <Formula 
          expression={String.raw`\phi = U_\infty x, \quad \psi = U_\infty y`} 
          calculatorId="flujo-uniforme" 
          definitions={definitions} 
          exercises={exercises}
        />
        <p>
          Representa flujo paralelo con velocidad constante U∞ en dirección x. Es la solución más simple y se usa como flujo base para superposición.
        </p>
      </Concept>

      <Concept title="Fuente y Sumidero">
        <Formula 
          expression={String.raw`\phi = \frac{m}{2\pi}\ln(r), \quad \psi = \frac{m}{2\pi}\theta`} 
          calculatorId="fuente-sumidero" 
          definitions={definitions} 
          exercises={exercises}
        />
        <p>
          Una fuente (m mayor que 0) emite fluido radialmente desde un punto. Un sumidero (m menor que 0) absorbe fluido. La intensidad m es el caudal volumétrico total emitido o absorbido.
        </p>
      </Concept>

      <Concept title="Superposición">
        <p>
          Debido a la linealidad de la ecuación de Laplace, las soluciones se pueden superponer. Por ejemplo:
        </p>
        <ul>
          <li>Flujo uniforme + fuente = flujo alrededor de un cuerpo semi-infinito</li>
          <li>Fuente + sumidero = doblete</li>
          <li>Flujo uniforme + doblete = flujo alrededor de un cilindro</li>
          <li>Flujo uniforme + vórtice = sustentación en perfil aerodinámico</li>
        </ul>
      </Concept>
    </TheorySection>

    <div className="theory-applications-section">
      <h2>
        <span>🌍</span> Aplicaciones en la vida real
      </h2>
      
      <div className="theory-subsection">
        <h3>✈️ Diseño aerodinámico</h3>
        <p>
          El análisis diferencial es fundamental para diseñar perfiles aerodinámicos de aviones. Los ingenieros utilizan teoría de flujo potencial para calcular la distribución de presión alrededor de alas, optimizando la sustentación y minimizando el arrastre. El método de paneles, basado en superposición de fuentes y sumideros, permite diseñar formas complejas. Boeing y Airbus usan estas técnicas en las etapas iniciales de diseño antes de simulaciones CFD completas.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🌊 Predicción de corrientes oceánicas</h3>
        <p>
          La función de corriente se usa para modelar corrientes oceánicas a gran escala. Las líneas ψ = constante representan corrientes como la Corriente del Golfo. Los oceanógrafos calculan el transporte de masa entre corrientes usando diferencias de ψ, permitiendo predecir el movimiento de contaminantes, nutrientes y calor en los océanos. Esto es crucial para modelos climáticos y predicción de huracanes.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🏎️ Aerodinámica de vehículos</h3>
        <p>
          El análisis de vorticidad ayuda a entender y reducir el arrastre en vehículos. Los vórtices generados en bordes y esquinas aumentan el arrastre. Los ingenieros de Fórmula 1 usan visualización de vorticidad en túneles de viento y CFD para optimizar alerones, difusores y carrocería. Reducir la vorticidad en zonas críticas puede disminuir el arrastre hasta un 10%, mejorando velocidad máxima y eficiencia de combustible.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🌪️ Predicción de tornados</h3>
        <p>
          Los meteorólogos usan análisis de vorticidad para predecir la formación de tornados. El radar Doppler mide la velocidad del viento, permitiendo calcular la vorticidad en tormentas. Valores altos de vorticidad vertical (mayor que 0.01 1/s) indican rotación intensa que puede generar tornados. Esta información permite emitir alertas tempranas, salvando vidas. El análisis de circulación también ayuda a estimar la intensidad de tornados.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>💨 Diseño de turbinas eólicas</h3>
        <p>
          La teoría de flujo potencial se aplica al diseño de palas de turbinas eólicas. La distribución de circulación a lo largo de la pala determina la sustentación y, por tanto, la potencia generada. Los ingenieros optimizan la forma de las palas usando teoría de línea sustentadora (basada en vórtices) para maximizar la eficiencia. Las turbinas modernas alcanzan eficiencias del 45-50% gracias a estos métodos de diseño.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🏥 Flujo sanguíneo en arterias</h3>
        <p>
          El análisis diferencial ayuda a entender el flujo sanguíneo en arterias. La vorticidad en bifurcaciones arteriales está relacionada con la formación de placas ateroscleróticas: zonas de alta vorticidad y bajo esfuerzo cortante favorecen la acumulación de lípidos. Los médicos usan simulaciones CFD basadas en ecuaciones diferenciales para planificar cirugías vasculares y diseñar stents que minimicen la perturbación del flujo.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🎮 Simulación de fluidos en videojuegos</h3>
        <p>
          Los videojuegos modernos usan versiones simplificadas de ecuaciones diferenciales de fluidos para simular humo, agua y explosiones en tiempo real. Técnicas como "Smoothed Particle Hydrodynamics" (SPH) resuelven ecuaciones de continuidad y momento en partículas, creando efectos visuales realistas. Juegos como "Half-Life 2" y "Uncharted" utilizan estas técnicas para mejorar la inmersión del jugador.
        </p>
      </div>
    </div>

    <div className="theory-history-section">
      <h2>
        <span>📜</span> Historia: El desarrollo de las ecuaciones diferenciales de fluidos
      </h2>
      
      <div className="theory-subsection">
        <h3>🔬 Leonhard Euler (1707-1783)</h3>
        <p>
          Euler fue el primero en formular las ecuaciones diferenciales del movimiento de fluidos en 1757. Sus ecuaciones (ecuaciones de Euler) describen fluidos no viscosos y son la base del análisis diferencial moderno. Euler también introdujo el concepto de líneas de corriente y desarrolló la teoría de flujo potencial. Su trabajo estableció las bases matemáticas de la mecánica de fluidos.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>⚙️ Claude-Louis Navier y George Stokes</h3>
        <p>
          Navier (1822) y Stokes (1845) extendieron las ecuaciones de Euler para incluir efectos viscosos, resultando en las famosas ecuaciones de Navier-Stokes. Estas ecuaciones son fundamentales en mecánica de fluidos moderna pero extremadamente difíciles de resolver. De hecho, demostrar la existencia de soluciones suaves para las ecuaciones de Navier-Stokes en 3D es uno de los Problemas del Milenio con premio de 1 millón de dólares.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🌀 Hermann von Helmholtz (1821-1894)</h3>
        <p>
          Helmholtz desarrolló la teoría de vorticidad en 1858, demostrando sus famosos teoremas: los vórtices se mueven con el fluido, su intensidad se conserva, y no pueden terminar en el interior del fluido. Estos teoremas son fundamentales para entender turbulencia, tornados y la estela de aviones. También explicó por qué los anillos de humo son estables.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>✈️ Ludwig Prandtl y la capa límite</h3>
        <p>
          En 1904, Prandtl revolucionó la mecánica de fluidos con su teoría de capa límite. Demostró que los efectos viscosos se concentran en una delgada capa cerca de superficies sólidas, mientras que fuera de ella el flujo puede tratarse como potencial (no viscoso). Esta idea permitió resolver problemas prácticos de aerodinámica que eran imposibles con las ecuaciones completas de Navier-Stokes.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🖥️ La era computacional</h3>
        <p>
          En los años 1960-1970, el desarrollo de computadoras permitió resolver numéricamente las ecuaciones diferenciales de fluidos. Los primeros códigos CFD (Computational Fluid Dynamics) fueron desarrollados en NASA y laboratorios militares. Hoy, CFD es indispensable en diseño aeroespacial, automotriz, y muchas otras industrias. Programas como ANSYS Fluent y OpenFOAM resuelven millones de ecuaciones diferenciales simultáneamente.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🏆 Premios Nobel relacionados</h3>
        <p>
          Aunque no existe Nobel de Matemáticas, varios Nobeles de Física han sido otorgados por trabajos relacionados con fluidos: Heike Kamerlingh Onnes (1913) por licuefacción de gases, Pyotr Kapitsa (1978) por física de bajas temperaturas y fluidos, y más recientemente, trabajos en turbulencia y transiciones de fase han sido reconocidos. El problema de turbulencia sigue siendo uno de los grandes desafíos de la física.
        </p>
      </div>
    </div>

    <div className="theory-anecdotes-section">
      <h2>
        <span>✨</span> Anécdotas y curiosidades
      </h2>
      
      <div className="theory-subsection">
        <h3>💰 El problema del millón de dólares</h3>
        <p>
          Las ecuaciones de Navier-Stokes son uno de los siete Problemas del Milenio del Clay Mathematics Institute, con premio de 1 millón de dólares. El desafío es demostrar que siempre existen soluciones suaves (sin singularidades) en 3D, o encontrar un contraejemplo. Después de 170 años, nadie ha resuelto este problema. Es irónico que usemos estas ecuaciones diariamente en ingeniería sin saber si siempre tienen solución matemática rigurosa.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🌀 Los anillos de humo de Helmholtz</h3>
        <p>
          Helmholtz quedó fascinado con los anillos de humo que hacían los fumadores. Desarrolló toda una teoría matemática para explicar por qué son estables y pueden viajar largas distancias. Construyó una máquina que generaba anillos de humo gigantes para sus demostraciones. Hoy sabemos que los anillos de vórtice existen en muchas escalas: desde anillos de humo hasta vórtices en atmósferas de planetas gigantes como Júpiter.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>✈️ El misterio de la sustentación</h3>
        <p>
          Aunque volamos aviones desde 1903, la explicación exacta de la sustentación sigue siendo debatida. La explicación popular de Bernoulli (aire más rápido arriba = menor presión) es incompleta. La explicación correcta involucra circulación y el teorema de Kutta-Joukowski: la sustentación es proporcional a la circulación alrededor del ala. Pero ¿por qué existe esa circulación? La respuesta completa requiere análisis de capa límite y condición de Kutta en el borde de salida.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🏐 La pelota curva en béisbol</h3>
        <p>
          Los lanzadores de béisbol pueden hacer que la pelota curve hasta 45 cm en su trayectoria. Esto se debe al efecto Magnus: la rotación de la pelota crea circulación, generando una fuerza lateral (teorema de Kutta-Joukowski). Una pelota con efecto a 150 km/h y 1800 rpm puede experimentar una fuerza lateral de 4 N, suficiente para la curva dramática. Los físicos usan ecuaciones diferenciales de fluidos para calcular estas trayectorias.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🌊 El tsunami invisible</h3>
        <p>
          En mar abierto, un tsunami puede tener solo 30-60 cm de altura pero viajar a 800 km/h. Es prácticamente invisible y los barcos pasan sobre él sin notarlo. La función de corriente ψ para un tsunami muestra que la energía se distribuye en toda la columna de agua (hasta 4000 m de profundidad). Al llegar a aguas poco profundas, la conservación de energía concentra el flujo verticalmente, creando olas de 10-30 metros. El análisis diferencial permite predecir este comportamiento.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🎨 Arte y fluidos</h3>
        <p>
          El artista japonés Hokusai pintó "La Gran Ola de Kanagawa" en 1831, capturando perfectamente la estructura de vórtices en una ola rompiente. Siglos después, análisis CFD de olas rompientes muestra patrones de vorticidad casi idénticos a los del cuadro. Hokusai, sin conocer ecuaciones diferenciales, capturó intuitivamente la física del flujo. Hoy, artistas digitales usan simulaciones de fluidos basadas en Navier-Stokes para crear efectos visuales realistas.
        </p>
      </div>

      <div className="theory-subsection">
        <h3>🦈 Tiburones y reducción de arrastre</h3>
        <p>
          La piel de tiburón tiene microestructuras (dentículos dérmicos) que reducen el arrastre hasta un 8% al controlar la vorticidad en la capa límite. Los trajes de baño Speedo LZR Racer, inspirados en tiburones, fueron tan efectivos que se rompieron 93 récords mundiales en 2008-2009 antes de ser prohibidos. Ahora, estas texturas se aplican en aviones y barcos. El análisis diferencial de la capa límite explica cómo estas microestructuras suprimen vórtices turbulentos.
        </p>
      </div>
    </div>

    <div className="formula-card">
      <h3>📝 Resumen</h3>
      <ul>
        <li>
          El análisis diferencial estudia el flujo mediante ecuaciones que describen el comportamiento local del fluido.
        </li>
        <li>
          La vorticidad (ω⃗ = ∇ × v⃗) mide la rotación local del fluido. En flujo irrotacional, ω⃗ = 0.
        </li>
        <li>
          La función de corriente ψ satisface u = ∂ψ/∂y, v = -∂ψ/∂x, garantizando continuidad automáticamente.
        </li>
        <li>
          El potencial de velocidad φ existe para flujo irrotacional: v⃗ = ∇φ.
        </li>
        <li>
          Para flujo incompresible e irrotacional, φ satisface la ecuación de Laplace: ∇²φ = 0.
        </li>
        <li>
          Soluciones elementales (flujo uniforme, fuente, sumidero, vórtice) se pueden superponer para modelar flujos complejos.
        </li>
        <li>
          Aplicaciones: diseño aerodinámico, predicción meteorológica, simulación CFD, análisis de turbulencia.
        </li>
        <li>
          Las ecuaciones de Navier-Stokes, que incluyen viscosidad, son uno de los problemas abiertos más importantes de las matemáticas.
        </li>
      </ul>
    </div>
  </>
);

export default Theory;
