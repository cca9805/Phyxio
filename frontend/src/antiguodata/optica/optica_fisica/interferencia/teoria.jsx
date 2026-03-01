import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Interferencia",
  descripcion: "Superposición de ondas luminosas creando patrones de máximos y mínimos por diferencias de fase.",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const InterferenciaTeoria = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Interferencia?">
        <p>
          La interferencia es el fenómeno que ocurre cuando dos o más ondas luminosas se superponen en el mismo punto del espacio. El resultado depende de la diferencia de fase entre las ondas, pudiendo producir refuerzo (interferencia constructiva) o cancelación (interferencia destructiva).
        </p>
        <Important>
          La interferencia es una prueba definitiva de la naturaleza ondulatoria de la luz y es fundamental en muchas aplicaciones tecnológicas y científicas.
        </Important>
      </TheorySection>

      <TheorySection title="Principio de Superposición">
        <Concept title="Superposición de Ondas">
          <p>
            Cuando dos ondas se encuentran, la amplitud resultante es la suma algebraica de las amplitudes individuales:
          </p>
          <Formula 
            expression={String.raw`E_{total} = E_1 + E_2 \quad \text{(Derivada del principio de superposición)}`}
          />
          <p>
            Para ondas sinusoidales con la misma frecuencia:
          </p>
          <Formula 
            expression={String.raw`E = E_1\sin(\omega t) + E_2\sin(\omega t + \phi) \quad \text{(Derivada de ondas armónicas)}`}
          />
          <p>Donde:</p>
          <ul>
            <li>φ: Diferencia de fase entre las ondas</li>
            <li>ω: Frecuencia angular</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Condiciones para Interferencia Observable">
        <p>
          Para observar patrones de interferencia estables, las fuentes de luz deben ser coherentes:
        </p>
        <ul>
          <li>Misma frecuencia: Las ondas deben tener la misma longitud de onda</li>
          <li>Relación de fase constante: La diferencia de fase no debe variar con el tiempo</li>
          <li>Misma polarización: O al menos componentes en la misma dirección</li>
        </ul>
        <p>
          Las fuentes ordinarias (bombillas, sol) no son coherentes. Se requieren técnicas especiales como división de frente de onda o división de amplitud.
        </p>
      </TheorySection>

      <TheorySection title="Interferencia Constructiva y Destructiva">
        <Concept title="Interferencia Constructiva">
          <p>
            Ocurre cuando las ondas están en fase (diferencia de camino = múltiplo entero de λ):
          </p>
          <Formula 
            expression={String.raw`\Delta = m\lambda \quad (m = 0, 1, 2, ...)`}
            calculatorId="interferencia-constructiva"
            definitions={definitions}
            exercises={exercises}
          />
          <p>
            Resultado: Máximo de intensidad (luz brillante)
          </p>
        </Concept>

        <Concept title="Interferencia Destructiva">
          <p>
            Ocurre cuando las ondas están en contrafase (diferencia de camino = múltiplo impar de λ/2):
          </p>
          <Formula 
            expression={String.raw`\Delta = (m + \frac{1}{2})\lambda \quad (m = 0, 1, 2, ...)`}
            calculatorId="interferencia-destructiva"
            definitions={definitions}
            exercises={exercises}
          />
          <p>
            Resultado: Mínimo de intensidad (oscuridad)
          </p>
        </Concept>

        <Concept title="Intensidad Resultante">
          <p>
            Para dos ondas de igual amplitud:
          </p>
          <Formula 
            expression={String.raw`I = 4I_0\cos^2\left(\frac{\delta}{2}\right) \quad \text{(Derivada de superposición de amplitudes)}`}
          />
          <p>Donde:</p>
          <ul>
            <li>I₀: Intensidad de cada onda individual</li>
            <li>δ: Diferencia de fase = (2π/λ)Δ</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Experimento de Young (Doble Rendija)">
        <Concept title="Descripción">
          <p>
            Thomas Young (1801) demostró la naturaleza ondulatoria de la luz haciendo pasar luz por dos rendijas estrechas y paralelas, produciendo un patrón de franjas brillantes y oscuras en una pantalla.
          </p>
        </Concept>

        <Concept title="Condición de Máximos">
          <Formula 
            expression={String.raw`d\sin\theta = m\lambda \quad \text{(Derivada de diferencia de camino)}`}
          />
          <p>
            Para ángulos pequeños (sin θ ≈ tan θ ≈ θ):
          </p>
          <Formula 
            expression={String.raw`y_m = \frac{m\lambda L}{d}`}
            calculatorId="doble-rendija-young"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>d: Separación entre rendijas</li>
            <li>L: Distancia a la pantalla</li>
            <li>y_m: Posición del m-ésimo máximo</li>
            <li>m: Orden del máximo (0, ±1, ±2, ...)</li>
          </ul>
        </Concept>

        <Concept title="Separación entre Franjas">
          <Formula 
            expression={String.raw`\Delta y = \frac{\lambda L}{d} \quad \text{(Derivada de y_m)}`}
          />
          <p>
            La separación entre franjas es constante y proporcional a la longitud de onda.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Interferencia en Películas Delgadas">
        <Concept title="Principio">
          <p>
            Cuando la luz incide sobre una película delgada (jabón, aceite, recubrimientos), parte se refleja en la superficie superior y parte en la inferior. Estas dos ondas reflejadas interfieren.
          </p>
        </Concept>

        <Concept title="Diferencia de Camino Óptico">
          <p>
            Para incidencia normal:
          </p>
          <Formula 
            expression={String.raw`\Delta = 2nt \quad \text{(Derivada de geometría)}`}
          />
          <p>Donde:</p>
          <ul>
            <li>n: Índice de refracción de la película</li>
            <li>t: Espesor de la película</li>
          </ul>
        </Concept>

        <Concept title="Cambio de Fase por Reflexión">
          <p>
            Cuando la luz se refleja en un medio más denso (n mayor), sufre un cambio de fase de π (equivalente a λ/2):
          </p>
          <ul>
            <li>Reflexión en superficie superior: Cambio de fase si n_película &gt; n_aire</li>
            <li>Reflexión en superficie inferior: Cambio de fase si n_sustrato &gt; n_película</li>
          </ul>
        </Concept>

        <Concept title="Condiciones de Interferencia">
          <p>
            Considerando el cambio de fase por reflexión:
          </p>
          <p>Interferencia constructiva (máximos):</p>
          <Formula 
            expression={String.raw`2nt = (m + \frac{1}{2})\lambda \quad \text{(un cambio de fase)}`}
          />
          <p>Interferencia destructiva (mínimos):</p>
          <Formula 
            expression={String.raw`2nt = m\lambda \quad \text{(un cambio de fase)}`}
            calculatorId="pelicula-delgada"
            definitions={definitions}
            exercises={exercises}
          />
        </Concept>
      </TheorySection>

      <TheorySection title="Anillos de Newton">
        <Concept title="Configuración">
          <p>
            Se forman cuando una lente plano-convexa se coloca sobre una superficie plana de vidrio. El espacio de aire entre ellas varía con la distancia al punto de contacto, creando anillos concéntricos.
          </p>
        </Concept>

        <Concept title="Radio de los Anillos">
          <p>
            Para el m-ésimo anillo oscuro:
          </p>
          <Formula 
            expression={String.raw`r_m = \sqrt{m\lambda R} \quad \text{(Derivada de 2nt = mλ)}`}
          />
          <p>Donde:</p>
          <ul>
            <li>R: Radio de curvatura de la lente</li>
            <li>λ: Longitud de onda de la luz</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Interferómetro de Michelson">
        <Concept title="Principio de Funcionamiento">
          <p>
            Divide un haz de luz en dos caminos perpendiculares usando un divisor de haz (beam splitter). Los haces se reflejan en espejos y se recombinan, produciendo interferencia.
          </p>
        </Concept>

        <Concept title="Aplicaciones">
          <ul>
            <li>Medición de longitudes de onda: Con precisión nanométrica</li>
            <li>Medición de índices de refracción: De gases y líquidos</li>
            <li>Detección de ondas gravitacionales: LIGO usa este principio</li>
            <li>Metrología: Definición del metro (históricamente)</li>
            <li>Espectroscopía: Transformada de Fourier</li>
          </ul>
        </Concept>

        <Concept title="Diferencia de Camino">
          <p>
            El cambio en el patrón de interferencia al mover un espejo una distancia d:
          </p>
          <Formula 
            expression={String.raw`\Delta = 2d \quad \text{(Derivada de ida y vuelta)}`}
          />
          <p>
            Cada franja que pasa corresponde a un cambio de λ/2 en la posición del espejo.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Recubrimientos Antirreflejantes">
        <Concept title="Principio">
          <p>
            Se aplica una película delgada sobre lentes para reducir reflexiones mediante interferencia destructiva.
          </p>
        </Concept>

        <Concept title="Espesor Óptimo">
          <p>
            Para mínima reflexión en longitud de onda λ:
          </p>
          <Formula 
            expression={String.raw`t = \frac{\lambda}{4n} \quad \text{(Derivada de 2nt = (m+1/2)λ)}`}
          />
          <p>Donde:</p>
          <ul>
            <li>n: Índice de refracción del recubrimiento</li>
          </ul>
          <p>
            El índice óptimo del recubrimiento es: n = √(n_vidrio × n_aire)
          </p>
        </Concept>

        <Concept title="Recubrimientos Multicapa">
          <ul>
            <li>Múltiples capas para reducir reflexión en amplio rango de λ</li>
            <li>Usados en objetivos fotográficos de alta calidad</li>
            <li>Pueden reducir reflexión de ~4% a &lt;0.5%</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🎥 Películas de jabón y aceite: colores naturales</h3>
          <p>
            Las burbujas de jabón muestran colores iridiscentes por interferencia en películas delgadas. El espesor varía (100-1000 nm), cambiando qué longitudes de onda interfieren constructivamente. Justo antes de estallar, la película es tan delgada (&lt;25 nm) que aparece negra. Las manchas de aceite en agua (gasolina en charcos) crean arcoíris similares. Espesor típico: 200-500 nm.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📸 Recubrimientos antirreflejantes en lentes</h3>
          <p>
            Las gafas, cámaras y telescopios usan capas delgadas (MgF₂, espesor λ/4 ≈ 100 nm) para reducir reflejos del 4% a &lt;1%. Los objetivos profesionales tienen 7-15 capas multicapa optimizadas para todo el espectro visible. Sin recubrimiento, una cámara con 10 elementos de vidrio perdería 34% de luz por reflexiones. Los recubrimientos también protegen contra rayado y repelen agua.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Microscopía de contraste interferencial (DIC)</h3>
          <p>
            Convierte diferencias de fase (invisibles) en diferencias de intensidad (visibles), revelando detalles de células vivas sin teñir. Usa prismas Nomarski para dividir luz en dos haces que atraviesan la muestra con ligera separación. Diferencias de índice de refracción o espesor crean interferencia, generando imagen 3D pseudocolor. Esencial en biología celular y control de calidad de semiconductores.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌊 LIGO: detectando ondas gravitacionales</h3>
          <p>
            Los observatorios LIGO son interferómetros de Michelson gigantes (brazos de 4 km) que detectan ondas gravitacionales. Cuando una onda pasa, estira un brazo y comprime el otro en cantidades menores que 1/10,000 del diámetro de un protón (10⁻¹⁹ m). La interferencia láser detecta este cambio ínfimo. En 2015 detectaron por primera vez ondas de colisión de agujeros negros, confirmando predicción de Einstein (1916).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🛰️ Filtros de interferencia en astronomía</h3>
          <p>
            Los filtros Fabry-Pérot (dos espejos paralelos semitransparentes) seleccionan longitudes de onda con precisión de 0.1 nm. Permiten observar emisiones específicas: línea H-α del hidrógeno (656.3 nm) en nebulosas, Ca II K (393.4 nm) en cromosfera solar. Los telescopios usan filtros ajustables (cambiando separación de espejos) para espectroscopía de alta resolución sin dispersar luz.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Ondas vs partículas
        </h2>
        
        <div className="theory-subsection">
          <h3>💡 Thomas Young y el experimento de la doble rendija (1801)</h3>
          <p>
            Thomas Young realizó el experimento definitivo que demostró la naturaleza ondulatoria de la luz. Hizo pasar luz solar por dos rendijas estrechas y observó franjas de interferencia en una pantalla. Calculó la longitud de onda de la luz (~570 nm para amarillo) décadas antes de que se conociera la velocidad de la luz. Su trabajo desafió la teoría corpuscular de Newton y fue inicialmente rechazado por la Royal Society.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧼 Hooke y Newton: colores de películas delgadas (1665)</h3>
          <p>
            Robert Hooke observó colores en pompas de jabón y láminas de mica, proponiéndolos como evidencia ondulatoria. Isaac Newton estudió sistemáticamente "anillos de Newton" colocando lentes sobre vidrio plano, midiendo radios de anillos oscuros y brillantes. Ironía: Newton usó sus propios datos para defender teoría corpuscular, cuando evidenciaban interferencia. Publicó resultados en "Opticks" (1704).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔍 Michelson-Morley: el experimento "fallido" (1887)</h3>
          <p>
            Albert Michelson y Edward Morley diseñaron un interferómetro ultrapreciso para detectar el "éter luminífero" (medio hipotético para ondas luminosas). Esperaban ver cambio en interferencia al rotar el aparato (Tierra moviéndose por el éter). Resultado: ningún cambio detectable. Este "fracaso" demolió la teoría del éter y allanó camino para relatividad especial de Einstein (1905). Michelson recibió Nobel 1907.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏅 Definición del metro por interferometría (1960-1983)</h3>
          <p>
            Hasta 1960, el metro era una barra de platino-iridio en París. En 1960 se redefinió: 1,650,763.73 longitudes de onda de luz naranja de kriptón-86 (medidas por interferometría). En 1983, definición actual: distancia que luz recorre en 1/299,792,458 segundos. La interferometría láser ahora mide distancias con precisión de nanómetros, base de la metrología moderna y fabricación de chips.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🎨 ¿Por qué las burbujas son negras antes de estallar?</h3>
          <p>
            Cuando una burbuja está por estallar, su pared adelgaza hasta &lt;25 nm (menos de λ/10 para luz visible). A este espesor, la reflexión de ambas superficies interfiere destructivamente para todas las longitudes visibles, resultando en negro. En contraste, burbujas gruesas (300 nm) muestran colores brillantes. Las burbujas "envejecen" de arriba hacia abajo por gravedad, mostrando arcoíris verticales antes del negro final.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦋 Alas de mariposas morpho: azul sin pigmento</h3>
          <p>
            Las mariposas morpho (Sudamérica) tienen alas azul brillante metálico sin pigmentos azules. Sus escamas tienen nanoestructuras (capas espaciadas ~200 nm) que causan interferencia constructiva para azul (450 nm) y destructiva para otros colores. El azul es visible desde cualquier ángulo (diferente a iridiscencia de CDs). Este "color estructural" no se desvanece con el tiempo, a diferencia de pigmentos orgánicos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 El interferómetro más sensible del mundo</h3>
          <p>
            LIGO puede detectar cambios de longitud menores que 1/10,000 del diámetro de un protón (10⁻¹⁹ m) en brazos de 4 km. Equivale a medir distancia Tierra-estrella más cercana (Alfa Centauri, 4.3 años luz) con precisión del ancho de un cabello humano. Para lograrlo, espejos están aislados de vibraciones sísmicas, térmicas y cuánticas. Los láseres son estabilizados a 1 parte en 10²¹.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎭 La paradoja del doble rendija cuántica</h3>
          <p>
            El experimento de Young funciona incluso disparando fotones uno a uno: cada fotón "interfiere consigo mismo", creando el patrón gradualmente. Pero si detectas por cuál rendija pasa, el patrón desaparece (colapso de función de onda). Richard Feynman llamó esto "el único misterio" de la mecánica cuántica. En 1961 Claus Jönsson hizo el experimento con electrones, y en 2002 fue votado "el experimento más bello de la física".
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            Interferencia: superposición de ondas creando máximos (en fase, Δ = mλ) y mínimos (contrafase, Δ = (m+1/2)λ).
          </li>
          <li>
            Doble rendija de Young: y = mλL/d; demostración clásica de naturaleza ondulatoria (1801).
          </li>
          <li>
            Películas delgadas: 2nt = mλ; colores de burbujas, aceite, recubrimientos antirreflejantes (t = λ/4n).
          </li>
          <li>
            Interferómetro de Michelson: mediciones precisas (λ, n), LIGO detecta ondas gravitacionales (Δ = 2d).
          </li>
          <li>
            Aplicaciones: recubrimientos ópticos, filtros, microscopía DIC, metrología, astronomía interferométrica.
          </li>
          <li>
            Historia: Young (1801) → Michelson-Morley (1887) → definición metro (1960) → LIGO (2015).
          </li>
        </ul>
      </div>
    </>
  );
};

export default InterferenciaTeoria;
