import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as propagacionDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Propagación y Fenómenos Ondulatorios",
  descripcion: "Reflexión, refracción, difracción, interferencia y dispersión de ondas electromagnéticas",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const PropagacionFenomenosTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Propagación de Ondas Electromagnéticas">
        <p>
          Las ondas electromagnéticas exhiben todos los fenómenos ondulatorios clásicos: reflexión, refracción, difracción, interferencia y polarización. Estos fenómenos son fundamentales para entender cómo la luz y otras radiaciones electromagnéticas interactúan con la materia y se propagan a través de diferentes medios.
        </p>
        <Important>
          La comprensión de estos fenómenos es crucial para el diseño de sistemas ópticos, antenas, fibras ópticas, y muchas otras tecnologías modernas. Cada fenómeno tiene aplicaciones específicas que van desde telescopios hasta comunicaciones por microondas.
        </Important>
      </TheorySection>

      <TheorySection title="Reflexión Electromagnética">
        <Concept title="Leyes de la Reflexión">
          <p>La reflexión de ondas electromagnéticas sigue las mismas leyes que la reflexión de la luz:</p>
          <ul>
            <li>Primera ley: El rayo incidente, reflejado y la normal están en el mismo plano</li>
            <li>Segunda ley: El ángulo de incidencia es igual al ángulo de reflexión</li>
          </ul>
          <Formula
            expression={String.raw`\theta_i = \theta_r`}
            calculatorId="reflexion_angulos"
            definitions={propagacionDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>θ_i = Ángulo de incidencia (medido desde la normal, rad)</li>
            <li>θ_r = Ángulo de reflexión (medido desde la normal, rad)</li>
          </ul>
        </Concept>

        <Concept title="Coeficiente de Reflexión">
          <p>La fracción de energía reflejada depende del ángulo de incidencia y las propiedades del material:</p>
          <Formula
            expression={String.raw`R = \left|\frac{n_1 \cos\theta_i - n_2 \cos\theta_t}{n_1 \cos\theta_i + n_2 \cos\theta_t}\right|^2`}
            calculatorId="coeficiente_reflexion"
            definitions={propagacionDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>R = Coeficiente de reflexión (fracción de energía reflejada, adimensional)</li>
            <li>n₁ = Índice de refracción del medio 1 (adimensional)</li>
            <li>n₂ = Índice de refracción del medio 2 (adimensional)</li>
            <li>θ_i = Ángulo de incidencia (rad)</li>
            <li>θ_t = Ángulo de transmisión (rad)</li>
          </ul>
        </Concept>

        <Example title="Reflexión Total Interna">
          <p>Condición: Cuando n₁ &gt; n₂ y θᵢ &gt; θc (ángulo crítico).</p>
          <p>Aplicaciones: Fibras ópticas, prismas, guías de onda.</p>
          <p>Ángulo crítico: θc = arcsin(n₂/n₁)</p>
        </Example>
      </TheorySection>

      <TheorySection title="Refracción y Ley de Snell">
        <Concept title="Ley de Snell">
          <p>Cuando una onda electromagnética pasa de un medio a otro, cambia su dirección según:</p>
          <Formula
            expression={String.raw`n_1 \sin\theta_i = n_2 \sin\theta_t`}
            calculatorId="ley_snell"
            definitions={propagacionDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Ángulo de transmisión", expression: String.raw`\theta_t = \arcsin\left(\frac{n_1}{n_2}\sin\theta_i\right)` },
              { description: "Ángulo crítico", expression: String.raw`\theta_c = \arcsin\left(\frac{n_2}{n_1}\right)` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>n₁ = Índice de refracción del medio 1 (adimensional)</li>
            <li>θ_i = Ángulo de incidencia (rad)</li>
            <li>n₂ = Índice de refracción del medio 2 (adimensional)</li>
            <li>θ_t = Ángulo de transmisión o refracción (rad)</li>
          </ul>
        </Concept>

        <Concept title="Índice de Refracción">
          <p>El índice de refracción relaciona la velocidad de la luz en el vacío con la velocidad en el medio:</p>
          <Formula
            expression={String.raw`n = \frac{c}{v} = \sqrt{\epsilon_r \mu_r}`}
            calculatorId="indice_refraccion"
            definitions={propagacionDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>n = Índice de refracción (adimensional)</li>
            <li>c = Velocidad de la luz en el vacío (3 × 10⁸ m/s)</li>
            <li>v = Velocidad de la luz en el medio (m/s)</li>
            <li>ε_r = Permitividad relativa del medio (adimensional)</li>
            <li>μ_r = Permeabilidad relativa del medio (adimensional)</li>
          </ul>
        </Concept>

        <Example title="Dispersión Cromática">
          <p>Causa: El índice de refracción varía con la frecuencia (n = n(λ)).</p>
          <p>Efecto: Separación de colores en prismas y gotas de lluvia.</p>
          <p>Aplicaciones: Espectroscopía, corrección de aberraciones cromáticas.</p>
        </Example>
      </TheorySection>

      <TheorySection title="Difracción">
        <Concept title="Principio de Huygens-Fresnel">
          <p>Cada punto de un frente de onda actúa como fuente de ondas secundarias esféricas:</p>
          <ul>
            <li>Difracción de Fresnel: Campo cercano, frentes de onda curvos</li>
            <li>Difracción de Fraunhofer: Campo lejano, frentes de onda planos</li>
          </ul>
        </Concept>

        <Concept title="Difracción por Rendija Simple">
          <p>Para una rendija de ancho a, los mínimos de difracción ocurren en:</p>
          <Formula
            expression={String.raw`a \sin\theta = m\lambda \quad (m = \pm 1, \pm 2, ...)`}
            calculatorId="difraccion_rendija"
            definitions={propagacionDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>a = Ancho de la rendija (m)</li>
            <li>θ = Ángulo del mínimo de difracción (rad)</li>
            <li>m = Orden del mínimo (m = ±1, ±2, ±3, ...)</li>
            <li>λ = Longitud de onda (m)</li>
          </ul>
        </Concept>

        <Concept title="Límite de Resolución">
          <p>Criterio de Rayleigh para la resolución angular mínima:</p>
          <Formula
            expression={String.raw`\theta_{min} = 1.22\frac{\lambda}{D}`}
            calculatorId="limite_resolucion"
            definitions={propagacionDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>θ_min = Ángulo de resolución mínimo (rad)</li>
            <li>λ = Longitud de onda (m)</li>
            <li>D = Diámetro de la apertura (m)</li>
          </ul>
        </Concept>

        <Example title="Aplicaciones de Difracción">
          <p>Telescopios: Límite de resolución determina el detalle observable.</p>
          <p>Redes de difracción: Separación espectral de alta resolución.</p>
          <p>Antenas: Patrón de radiación y directividad.</p>
        </Example>
      </TheorySection>

      <TheorySection title="Interferencia">
        <Concept title="Interferencia de Dos Fuentes">
          <p>Cuando dos ondas coherentes se superponen, la intensidad resultante depende de la diferencia de fase:</p>
          <Formula
            expression={String.raw`I = I_1 + I_2 + 2\sqrt{I_1 I_2}\cos\delta`}
            calculatorId="interferencia_intensidad"
            definitions={propagacionDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>I:</strong> Intensidad resultante (W/m²)</li>
            <li><strong>I₁:</strong> Intensidad de la onda 1 (W/m²)</li>
            <li><strong>I₂:</strong> Intensidad de la onda 2 (W/m²)</li>
            <li><strong>δ:</strong> Diferencia de fase entre las ondas (rad)</li>
          </ul>
        </Concept>

        <Concept title="Diferencia de Camino Óptico">
          <p>La diferencia de fase está relacionada con la diferencia de camino óptico:</p>
          <Formula
            expression={String.raw`\delta = \frac{2\pi}{\lambda}\Delta = \frac{2\pi}{\lambda}(n_2 d_2 - n_1 d_1)`}
            calculatorId="diferencia_camino"
            definitions={propagacionDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>δ:</strong> Diferencia de fase (rad)</li>
            <li><strong>λ:</strong> Longitud de onda en el vacío (m)</li>
            <li><strong>Δ:</strong> Diferencia de camino óptico (m)</li>
            <li><strong>n₁, n₂:</strong> Índices de refracción de los medios</li>
            <li><strong>d₁, d₂:</strong> Distancias recorridas en cada medio (m)</li>
          </ul>
        </Concept>

        <Concept title="Condiciones de Interferencia">
          <p>Para interferencia constructiva y destructiva:</p>
          <ul>
            <li>Constructiva: Δ = mλ (m = 0, ±1, ±2, ...)</li>
            <li>Destructiva: Δ = (m + ½)λ (m = 0, ±1, ±2, ...)</li>
          </ul>
        </Concept>

        <Example title="Experimento de Young">
          <p>Configuración: Dos rendijas separadas por distancia d.</p>
          <p>Franjas brillantes: y = mλL/d</p>
          <p>Separación de franjas: Δy = λL/d</p>
        </Example>
      </TheorySection>

      <TheorySection title="Polarización">
        <Concept title="Estados de Polarización">
          <p>Las ondas electromagnéticas pueden tener diferentes estados de polarización:</p>
          <ul>
            <li>Lineal: El vector E oscila en un plano fijo</li>
            <li>Circular: El vector E rota con amplitud constante</li>
            <li>Elíptica: El vector E rota con amplitud variable</li>
          </ul>
        </Concept>

        <Concept title="Ley de Malus">
          <p>La intensidad transmitida a través de un polarizador es:</p>
          <Formula
            expression={String.raw`I = I_0 \cos^2\theta`}
            calculatorId="ley_malus"
            definitions={propagacionDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>I = Intensidad transmitida (W/m²)</li>
            <li>I₀ = Intensidad inicial (W/m²)</li>
            <li>θ = Ángulo entre polarizador y dirección de polarización (rad)</li>
          </ul>
        </Concept>

        <Concept title="Ángulo de Brewster">
          <p>Ángulo de incidencia para el cual la reflexión está completamente polarizada:</p>
          <Formula
            expression={String.raw`\theta_B = \arctan\left(\frac{n_2}{n_1}\right)`}
            calculatorId="angulo_brewster"
            definitions={propagacionDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>θ_B = Ángulo de Brewster (rad)</li>
            <li>n₁ = Índice de refracción del primer medio (adimensional)</li>
            <li>n₂ = Índice de refracción del segundo medio (adimensional)</li>
          </ul>
        </Concept>

        <Example title="Aplicaciones de Polarización">
          <p>Gafas de sol: Reducen reflejos por polarización.</p>
          <p>Pantallas LCD: Control de luz mediante polarizadores.</p>
          <p>Comunicaciones: Multiplexación por polarización.</p>
          <p>Microscopía: Contraste por birrefringencia.</p>
        </Example>
      </TheorySection>

      <TheorySection title="Dispersión">
        <Concept title="Dispersión de Rayleigh">
          <p>Dispersión por partículas mucho menores que la longitud de onda:</p>
          <Formula
            expression={String.raw`I \propto \frac{1}{\lambda^4}`}
            calculatorId="dispersion_rayleigh"
            definitions={propagacionDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>I = Intensidad de la luz dispersada (W/m²)</li>
            <li>λ = Longitud de onda de la luz (m)</li>
          </ul>
          
          <p>Explica por qué el cielo es azul y los atardeceres son rojos.</p>
        </Concept>

        <Concept title="Dispersión de Mie">
          <p>Dispersión por partículas de tamaño comparable a la longitud de onda:</p>
          <ul>
            <li>Características: Menos dependiente de λ que Rayleigh</li>
            <li>Ejemplos: Nubes, niebla, aerosoles</li>
            <li>Aplicaciones: Lidar, análisis de partículas</li>
          </ul>
        </Concept>

        <Example title="Color del Cielo">
          <p>Azul diurno: Dispersión Rayleigh favorece λ cortas (azul).</p>
          <p>Rojo al atardecer: Camino largo filtra azul, deja rojo.</p>
          <p>Blanco de nubes: Dispersión Mie es menos selectiva en λ.</p>
        </Example>
      </TheorySection>

      <TheorySection title="Guías de Onda y Propagación Guiada">
        <Concept title="Modos de Propagación">
          <p>En guías de onda, solo ciertos modos pueden propagarse:</p>
          <ul>
            <li>Modos TE: Campo eléctrico transversal (Ez = 0)</li>
            <li>Modos TM: Campo magnético transversal (Hz = 0)</li>
            <li>Modos TEM: Ambos campos transversales (Ez = Hz = 0)</li>
          </ul>
        </Concept>

        <Concept title="Frecuencia de Corte">
          <p>Frecuencia mínima para que un modo se propague:</p>
          <Formula
            expression={String.raw`f_c = \frac{c}{2\pi}\sqrt{\left(\frac{m\pi}{a}\right)^2 + \left(\frac{n\pi}{b}\right)^2}`}
            calculatorId="frecuencia_corte"
            definitions={propagacionDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>f_c = Frecuencia de corte (Hz)</li>
            <li>c = Velocidad de la luz (3×10⁸ m/s)</li>
            <li>m, n = Números enteros que definen el modo (adimensional)</li>
            <li>a, b = Dimensiones de la guía de onda (m)</li>
          </ul>
        </Concept>

        <Example title="Fibra Óptica">
          <p>Principio: Reflexión total interna en el núcleo.</p>
          <p>Apertura numérica: NA = √(n₁² - n₂²)</p>
          <p>Ventajas: Baja pérdida, gran ancho de banda, inmunidad electromagnética.</p>
        </Example>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="concepto-fundamental">
          <h4>Fibras Ópticas en Telecomunicaciones</h4>
          <p>Las fibras ópticas utilizan reflexión total interna para transmitir datos a velocidades de terabits por segundo. Un solo cable de fibra puede transportar millones de llamadas telefónicas simultáneas o streaming de video 4K para miles de usuarios.</p>
          <p>Aplicaciones: Internet de banda ancha, redes troncales internacionales, centros de datos, televisión por cable.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Lentes y Sistemas Ópticos</h4>
          <p>La refracción es fundamental en lentes para cámaras, microscopios, telescopios y gafas. El diseño de lentes multicapa corrige aberraciones cromáticas usando la dispersión controlada.</p>
          <p>Aplicaciones: Fotografía profesional, microscopía médica, astronomía, corrección visual, proyectores.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Holografía y Almacenamiento Óptico</h4>
          <p>La interferencia de ondas permite crear hologramas tridimensionales y almacenar datos en discos CD, DVD y Blu-ray. Los patrones de interferencia codifican información que se lee con láser.</p>
          <p>Aplicaciones: Seguridad en tarjetas de crédito, arte holográfico, almacenamiento de datos, autenticación de documentos.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Radar y Detección Remota</h4>
          <p>La difracción determina la resolución de antenas de radar. Radares meteorológicos, de tráfico aéreo y militares dependen de estos principios para detectar objetos a grandes distancias.</p>
          <p>Aplicaciones: Control de tráfico aéreo, predicción meteorológica, navegación marítima, detección de velocidad.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Pantallas LCD y Tecnología de Visualización</h4>
          <p>Las pantallas LCD usan polarización para controlar el paso de luz píxel por píxel. Dos polarizadores cruzados con cristales líquidos entre ellos permiten crear imágenes de alta resolución.</p>
          <p>Aplicaciones: Smartphones, monitores de computadora, televisores, relojes digitales, instrumentos de medición.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Espectroscopía y Análisis Químico</h4>
          <p>La dispersión y difracción permiten separar luz en sus componentes espectrales para identificar elementos químicos. Cada elemento tiene un espectro único como una "huella digital".</p>
          <p>Aplicaciones: Análisis de materiales, control de calidad industrial, astronomía (composición de estrellas), medicina forense.</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De Newton a la Óptica Cuántica
        </h2>
        
        <p>
          En 1666, Isaac Newton realizó su famoso experimento del prisma, demostrando que la luz blanca se compone de colores. Aunque Newton creía que la luz eran partículas, su trabajo sobre dispersión cromática fue fundamental para entender la refracción.
        </p>
        
        <p>
          En 1678, Christiaan Huygens propuso el principio que lleva su nombre: cada punto de un frente de onda actúa como fuente de ondas secundarias. Este principio explicaba la reflexión, refracción y difracción, apoyando la teoría ondulatoria de la luz.
        </p>
        
        <p>
          En 1801, Thomas Young realizó su experimento de la doble rendija, demostrando inequívocamente la interferencia de la luz. Este experimento fue crucial para establecer la naturaleza ondulatoria de la luz y refutar la teoría corpuscular de Newton.
        </p>
        
        <p>
          En 1808, Étienne-Louis Malus descubrió la polarización por reflexión mientras observaba la luz del sol reflejada en las ventanas del Palacio de Luxemburgo a través de un cristal de calcita. Este descubrimiento accidental llevó a la ley de Malus.
        </p>
        
        <p>
          En 1850, Jean Bernard Léon Foucault y Hippolyte Fizeau midieron la velocidad de la luz en agua, demostrando que era menor que en aire. Esto confirmó la teoría ondulatoria y refutó definitivamente la teoría corpuscular de Newton.
        </p>
        
        <p>
          En 1871, Lord Rayleigh explicó por qué el cielo es azul mediante su teoría de dispersión. Demostró que la intensidad de luz dispersada es proporcional a 1/λ⁴, favoreciendo las longitudes de onda cortas (azul).
        </p>
        
        <p>
          En 1966, Charles Kao propuso usar fibras de vidrio para comunicaciones ópticas. Su trabajo sobre pérdidas en fibras ópticas le valió el Premio Nobel de Física en 2009 y revolucionó las telecomunicaciones globales.
        </p>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="concepto-fundamental">
          <h4>El experimento más hermoso de la física</h4>
          <p>
            El experimento de la doble rendija de Young ha sido votado como "el experimento más hermoso de la física". Lo fascinante es que cuando se intenta detectar por qué rendija pasa cada fotón, el patrón de interferencia desaparece, revelando la dualidad onda-partícula de la luz.
          </p>
        </div>

        <div className="concepto-fundamental">
          <h4>El descubrimiento accidental de la polarización</h4>
          <p>
            Malus descubrió la polarización por casualidad en 1808 mientras jugaba con un cristal de calcita en su ventana. Notó que la luz reflejada de las ventanas del palacio cambiaba de intensidad al rotar el cristal. Este descubrimiento casual abrió todo un campo de estudio.
          </p>
        </div>

        <div className="concepto-fundamental">
          <h4>Por qué el cielo es azul y los atardeceres rojos</h4>
          <p>
            La dispersión de Rayleigh explica ambos fenómenos. Durante el día, la luz azul se dispersa más (∝ 1/λ⁴), haciendo el cielo azul. Al atardecer, la luz atraviesa más atmósfera, dispersando todo el azul y dejando solo rojos y naranjas. En la Luna, sin atmósfera, el cielo es siempre negro.
          </p>
        </div>

        <div className="concepto-fundamental">
          <h4>Fibras ópticas más delgadas que un cabello</h4>
          <p>
            Una fibra óptica típica tiene solo 125 micrómetros de diámetro (más delgada que un cabello humano) pero puede transmitir datos a 100 Gbps a través de océanos. El cable transatlántico TAT-14 tiene 4 pares de fibras y puede transmitir 3.2 terabits por segundo.
          </p>
        </div>

        <div className="concepto-fundamental">
          <h4>El límite de resolución del ojo humano</h4>
          <p>
            El ojo humano tiene un límite de resolución de aproximadamente 1 minuto de arco (0.017°) debido a la difracción en la pupila. Esto significa que dos estrellas separadas por menos de este ángulo se ven como una sola. El telescopio Hubble, con su apertura de 2.4 m, tiene una resolución 100 veces mejor.
          </p>
        </div>

        <div className="concepto-fundamental">
          <h4>Hologramas en tu bolsillo</h4>
          <p>
            Los hologramas en tarjetas de crédito y billetes usan interferencia de luz para crear imágenes tridimensionales imposibles de copiar con fotocopiadoras. Cada holograma contiene información de toda la imagen en cada punto, por lo que incluso un fragmento pequeño puede reconstruir la imagen completa.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen: Propagación y Fenómenos Ondulatorios</h3>
        <p>
          Las ondas electromagnéticas exhiben todos los fenómenos ondulatorios clásicos que determinan cómo interactúan con la materia y se propagan:
        </p>
        <ul>
          <li>Reflexión: θ_i = θ_r, fundamental en espejos, antenas y fibras ópticas</li>
          <li>Refracción: Ley de Snell (n₁ sin θ_i = n₂ sin θ_t), base de lentes y prismas</li>
          <li>Difracción: Límite de resolución θ_min = 1.22λ/D, crucial en telescopios y antenas</li>
          <li>Interferencia: Patrones de Young, holografía y almacenamiento óptico</li>
          <li>Polarización: Ley de Malus (I = I₀ cos² θ), aplicada en LCD y gafas de sol</li>
          <li>Dispersión: Rayleigh (I ∝ 1/λ⁴), explica el color del cielo</li>
        </ul>
        <p>
          Estos fenómenos son la base de tecnologías modernas: desde telecomunicaciones por fibra óptica hasta sistemas de radar, pantallas LCD, espectroscopía y astronomía. La comprensión de la propagación ondulatoria ha sido fundamental para el desarrollo tecnológico del siglo XX y XXI.
        </p>
      </div>
    </>
  );
};

export default PropagacionFenomenosTheory; 