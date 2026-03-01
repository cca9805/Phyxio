import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Dispersión",
  descripcion: "Separación de la luz en sus componentes de color al depender el índice de refracción de la longitud de onda.",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const DispersionTeoria = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Dispersión?">
        <p>
          La dispersión es el fenómeno por el cual el índice de refracción de un material varía con la longitud de onda de la luz. Esto causa que diferentes colores se refracten en ángulos ligeramente diferentes, separando la luz blanca en sus componentes espectrales.
        </p>
        <Important>
          La dispersión es responsable de fenómenos naturales como el arcoíris y el color azul del cielo.
        </Important>
      </TheorySection>

      <TheorySection title="Dispersión en Prismas">
        <Concept title="Prisma Óptico">
          <p>Un prisma de vidrio separa la luz blanca en un espectro continuo de colores (rojo, naranja, amarillo, verde, azul, índigo, violeta).</p>
          <ul>
            <li>Luz roja: Menor índice de refracción, menor desviación</li>
            <li>Luz violeta: Mayor índice de refracción, mayor desviación</li>
          </ul>
        </Concept>

        <Concept title="Ángulo de Desviación">
          <p>Para un prisma de ángulo A y ángulo de incidencia i:</p>
          <Formula 
            expression={String.raw`\delta = i + i' - A \quad \text{(Derivada de geometría del prisma)}`}
          />
          <p>Donde:</p>
          <ul>
            <li>δ: Ángulo de desviación</li>
            <li>i': Ángulo de emergencia</li>
          </ul>
        </Concept>

        <Concept title="Desviación Mínima">
          <p>Ocurre cuando el rayo pasa simétricamente por el prisma:</p>
          <Formula 
            expression={String.raw`n = \frac{\sin\left(\frac{A + \delta_m}{2}\right)}{\sin\left(\frac{A}{2}\right)} \quad \text{(Derivada de δ = i + i' - A)}`}
          />
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuación de Cauchy">
        <Concept title="Dependencia con la Longitud de Onda">
          <p>El índice de refracción varía con λ según la ecuación de Cauchy:</p>
          <Formula 
            expression={String.raw`n(\lambda) = A + \frac{B}{\lambda^2}`}
            calculatorId="ecuacion-cauchy"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>A, B: Constantes del material</li>
            <li>λ: Longitud de onda</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ángulo de Desviación en Prisma">
        <Concept title="Fórmula Aproximada">
          <p>Para ángulos pequeños, la desviación es proporcional al índice:</p>
          <Formula 
            expression={String.raw`\delta = (n - 1) \times A`}
            calculatorId="angulo-desviacion-prisma"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>n: Índice de refracción</li>
            <li>A: Ángulo del prisma</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Poder Dispersivo">
        <Concept title="Definición">
          <p>Mide la capacidad de un material para separar colores:</p>
          <Formula 
            expression={String.raw`\omega = \frac{n_F - n_C}{n_D - 1}`}
            calculatorId="poder-dispersivo"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>n_F, n_C, n_D: Índices para líneas espectrales azul (F), roja (C) y amarilla (D)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="El Arcoíris">
        <Concept title="Formación">
          <p>Se forma por refracción, reflexión interna y dispersión de la luz solar en gotas de agua:</p>
          <ol>
            <li>Refracción al entrar en la gota (dispersión)</li>
            <li>Reflexión interna en la parte posterior</li>
            <li>Refracción al salir (más dispersión)</li>
          </ol>
        </Concept>

        <Concept title="Ángulos del Arcoíris">
          <ul>
            <li>Arcoíris primario: ~42° (rojo arriba, violeta abajo)</li>
            <li>Arcoíris secundario: ~51° (colores invertidos, más tenue)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Dispersión de Rayleigh">
        <Concept title="Principio">
          <p>Partículas mucho más pequeñas que λ dispersan luz con intensidad proporcional a 1/λ⁴:</p>
          <Formula 
            expression={String.raw`I \propto \frac{1}{\lambda^4} \quad \text{(Derivada de ecuaciones de Maxwell)}`}
          />
        </Concept>

        <Concept title="Consecuencias">
          <ul>
            <li>Cielo azul: Luz azul se dispersa más que la roja</li>
            <li>Atardeceres rojos: Luz azul dispersada fuera de la línea de visión</li>
            <li>Luna roja: Durante eclipses lunares</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Espectroscopía">
        <Concept title="Tipos de Espectros">
          <ul>
            <li>Continuo: Todas las longitudes de onda (cuerpo negro)</li>
            <li>Emisión: Líneas brillantes características de cada elemento</li>
            <li>Absorción: Líneas oscuras sobre continuo (estrellas)</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🔬 Espectroscopía y química analítica</h3>
          <p>
            Los espectrómetros usan prismas o redes de difracción para separar luz por longitudes de onda. Cada elemento químico emite o absorbe líneas espectrales únicas como una huella digital. La espectroscopía identifica elementos en muestras desconocidas: contaminantes en agua, composición de aleaciones, pureza de fármacos. En medicina forense, analiza residuos en escenas del crimen.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌟 Astronomía: descifrando el universo</h3>
          <p>
            La dispersión de luz estelar revela composición, temperatura, velocidad y distancia de estrellas. Las líneas de Fraunhofer (oscuras en espectro solar) identifican hidrógeno, helio, hierro, calcio. El corrimiento al rojo (redshift) de galaxias confirmó la expansión del universo. Los exoplanetas se detectan analizando cómo absorben luz estelar al pasar frente a su estrella.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌈 Arcoíris y fenómenos atmosféricos</h3>
          <p>
            El arcoíris primario (42°) se forma con una reflexión interna en gotas de lluvia. El secundario (51°) tiene dos reflexiones y colores invertidos. Los halos lunares y solares son dispersión en cristales de hielo hexagonales. Las glorias (anillos de colores alrededor de sombras en nubes) combinan difracción y dispersión. La banda oscura entre arcoíris primario y secundario se llama banda de Alejandro.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📷 Óptica y corrección de aberraciones</h3>
          <p>
            La aberración cromática (bordes de color en imágenes) ocurre porque el vidrio dispersa colores. Las lentes acromáticas combinan vidrio crown (bajo poder dispersivo) y flint (alto) para corregirlo. Las cámaras profesionales usan lentes apocromáticas (3+ colores corregidos). Los telescopios refractores modernos son tripletes apocromáticos para astronomía de alta precisión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌌 Color del cielo: dispersión de Rayleigh</h3>
          <p>
            El cielo es azul porque moléculas de aire (N₂, O₂) dispersan luz azul (450 nm) 16 veces más que luz roja (650 nm) según 1/λ⁴. Al atardecer, la luz atraviesa más atmósfera y el azul se dispersa completamente, dejando rojos y naranjas. En la Luna no hay atmósfera: el cielo es negro y las sombras son muy oscuras. La contaminación añade partículas grandes que dispersan todos los colores, blanqueando el cielo.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Separando la luz
        </h2>
        
        <div className="theory-subsection">
          <h3>🌈 Newton y el prisma (1666)</h3>
          <p>
            Isaac Newton realizó el famoso experimento del prisma durante la peste en Cambridge. Demostró que la luz blanca está compuesta de colores (rojo a violeta) y no es el prisma el que añade color. Usando un segundo prisma invertido, recombinó los colores en luz blanca nuevamente. Conclusión revolucionaria: el color es propiedad de la luz, no de los objetos. Publicó sus hallazgos en "Opticks" (1704).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⭐ Fraunhofer y las líneas oscuras (1814-1815)</h3>
          <p>
            Joseph von Fraunhofer, fabricante de lentes alemán, perfeccionó prismas y observó 576 líneas oscuras en el espectro solar (hoy líneas de Fraunhofer). Las etiquetaron A, B, C... hasta K. No sabía su origen, pero las usó para caracterizar vidrios ópticos por su poder dispersivo. Más tarde se descubrió que son absorción de elementos en la atmósfera solar: línea D (sodio), H y K (calcio ionizado).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧪 Kirchhoff y Bunsen: nacimiento de la espectroscopía (1859)</h3>
          <p>
            Gustav Kirchhoff y Robert Bunsen demostraron que cada elemento químico produce líneas espectrales únicas. Calentaron sales metálicas en llama (mechero Bunsen) y analizaron su luz. Descubrieron dos nuevos elementos: cesio (1860, líneas azules) y rubidio (1861, líneas rojas). Kirchhoff explicó las líneas de Fraunhofer: el Sol emite espectro continuo, pero elementos en su atmósfera absorben longitudes específicas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌌 Lord Rayleigh: ¿por qué el cielo es azul? (1871)</h3>
          <p>
            John William Strutt (Lord Rayleigh) derivó matemáticamente la dispersión por partículas pequeñas: intensidad proporcional a 1/λ⁴. Explicó el color azul del cielo (luz azul dispersada por moléculas de aire) y atardeceres rojos (luz azul dispersada fuera de vista). Inicialmente propuso que partículas de polvo causaban el azul, pero luego Einstein (1910) confirmó que son fluctuaciones moleculares. Rayleigh ganó el Nobel de Física 1904.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🌈 El arcoíris imposible: cuatro reflexiones</h3>
          <p>
            El arcoíris terciario (3 reflexiones, ~40° hacia el Sol) y cuaternario (4 reflexiones, ~45°) son tan tenues que fueron fotografiados por primera vez en 2011 por Raymond Lee. Requieren condiciones perfectas: gotas grandes, Sol bajo, fondo oscuro. Los antiguos griegos creían que el arcoíris era un puente entre dioses y humanos. En realidad, cada observador ve su propio arcoíris único según su posición.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🤖 Descubriendo helio en el Sol antes que en Tierra</h3>
          <p>
            En 1868, durante un eclipse solar, Jules Janssen y Norman Lockyer observaron una línea amarilla desconocida (587.6 nm) en el espectro solar. La llamaron "helio" (del griego helios, Sol) porque no correspondía a ningún elemento terrestre conocido. Recién en 1895, William Ramsay aisló helio en Tierra al calentar uranio. Es el único elemento descubierto primero en el espacio.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💎 Diamantes y dispersión: el "fuego"</h3>
          <p>
            Los diamantes tienen alto índice de refracción (n=2.42) y alto poder dispersivo. El "fuego" (flashes de color) es dispersión de luz blanca separada en colores. El corte brillante de 57 facetas maximiza reflexiones internas y dispersión. Los diamantes sintéticos y circonitas tienen mayor dispersión que diamantes naturales, produciendo más fuego (a veces demasiado, delatando falsificaciones).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌍 Marte tiene atardeceres azules</h3>
          <p>
            En Marte, la atmósfera tenue (1% de la Tierra) contiene polvo fino rojizo. Durante el día, el cielo es amarillo-marrón por dispersión del polvo. Pero al atardecer, la luz atraviesa más atmósfera y el azul se dispersa hacia el observador mientras rojo se dispersa fuera. Resultado: atardeceres azules, opuesto a la Tierra. Las imágenes de rovers como Curiosity y Perseverance lo confirman.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            Dispersión: dependencia del índice de refracción con la longitud de onda, separando luz blanca en colores.
          </li>
          <li>
            Ecuación de Cauchy: n(λ) = A + B/λ²; violeta (mayor n) se desvía más que rojo (menor n).
          </li>
          <li>
            Arcoíris: refracción + reflexión interna + dispersión en gotas; primario 42°, secundario 51° (invertido).
          </li>
          <li>
            Dispersión de Rayleigh: I ∝ 1/λ⁴; cielo azul (luz azul dispersada), atardeceres rojos (azul fuera de vista).
          </li>
          <li>
            Espectroscopía: líneas espectrales únicas por elemento; astronomía (composición estelar), química analítica.
          </li>
          <li>
            Historia: Newton (prisma 1666) → Fraunhofer (líneas 1814) → Kirchhoff/Bunsen (espectroscopía 1859) → Rayleigh (cielo azul 1871).
          </li>
        </ul>
      </div>
    </>
  );
};

export default DispersionTeoria;
