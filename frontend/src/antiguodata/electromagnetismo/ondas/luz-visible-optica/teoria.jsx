import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as opticaDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Luz Visible y Óptica",
  descripcion: "Propiedades de la luz visible, reflexión, refracción, interferencia y aplicaciones ópticas",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const LuzVisibleOpticaTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Luz Visible: El Espectro que Vemos">
        <p>
          La luz visible es la pequeña porción del espectro electromagnético que nuestros ojos pueden detectar, abarcando longitudes de onda desde aproximadamente 380 nm (violeta) hasta 700 nm (rojo). Esta radiación electromagnética es responsable de toda la información visual que percibimos del mundo.
        </p>
        <Important>
          Aunque la luz visible representa menos del 1% del espectro electromagnético completo, es fundamental para la vida en la Tierra y ha sido la base del desarrollo de la óptica, una de las ramas más antiguas y aplicadas de la física.
        </Important>
      </TheorySection>

      <TheorySection title="El Espectro Visible y el Color">
        <Concept title="Longitudes de Onda y Colores">
          <p>Cada color corresponde a un rango específico de longitudes de onda:</p>
          <ul>
            <li>Violeta: 380-450 nm</li>
            <li>Azul: 450-495 nm</li>
            <li>Verde: 495-570 nm</li>
            <li>Amarillo: 570-590 nm</li>
            <li>Naranja: 590-620 nm</li>
            <li>Rojo: 620-700 nm</li>
          </ul>
        </Concept>

        <Concept title="Energía de los Fotones">
          <p>La energía de un fotón de luz visible está directamente relacionada con su frecuencia y, por tanto, con su color.</p>
          <Formula
            expression={String.raw`E = h f = \frac{h c}{\lambda}`}
            calculatorId="optica_energia_foton"
            definitions={opticaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Frecuencia", expression: String.raw`f = \frac{E}{h}` },
              { description: "Longitud de onda", expression: String.raw`\lambda = \frac{h c}{E}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>E = Energía del fotón (J)</li>
            <li>h = Constante de Planck (6.626 × 10⁻³⁴ J·s)</li>
            <li>f = Frecuencia de la luz (Hz)</li>
            <li>c = Velocidad de la luz (3 × 10⁸ m/s)</li>
            <li>λ = Longitud de onda (m)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Reflexión y Refracción">
        <Concept title="Ley de Snell">
          <p>Cuando la luz pasa de un medio a otro, cambia de dirección según la ley de Snell, que relaciona los ángulos de incidencia y refracción con los índices de refracción de los medios.</p>
          <Formula
            expression={String.raw`n_1 \sin \theta_1 = n_2 \sin \theta_2`}
            calculatorId="optica_ley_snell"
            definitions={opticaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Ángulo de refracción", expression: String.raw`\theta_2 = \arcsin\left(\frac{n_1 \sin \theta_1}{n_2}\right)` },
              { description: "Índice de refracción", expression: String.raw`n_2 = \frac{n_1 \sin \theta_1}{\sin \theta_2}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>n₁ = Índice de refracción del primer medio (adimensional)</li>
            <li>θ₁ = Ángulo de incidencia (rad)</li>
            <li>n₂ = Índice de refracción del segundo medio (adimensional)</li>
            <li>θ₂ = Ángulo de refracción (rad)</li>
          </ul>
        </Concept>

        <Concept title="Ángulo Crítico y Reflexión Total">
          <p>Cuando la luz viaja de un medio más denso a uno menos denso, existe un ángulo crítico más allá del cual ocurre reflexión total interna.</p>
          <Formula
            expression={String.raw`\theta_c = \arcsin\left(\frac{n_2}{n_1}\right)`}
            calculatorId="optica_angulo_critico"
            definitions={opticaDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>θc = Ángulo crítico (rad)</li>
            <li>n₁ = Índice de refracción del medio más denso (adimensional)</li>
            <li>n₂ = Índice de refracción del medio menos denso (adimensional)</li>
          </ul>
        </Concept>

        <Concept title="Velocidad de la Luz en Medios">
          <p>La velocidad de la luz en un medio material es menor que en el vacío, determinada por el índice de refracción del material.</p>
          <Formula
            expression={String.raw`v = \frac{c}{n}`}
            calculatorId="optica_velocidad_medio"
            definitions={opticaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Índice de refracción", expression: String.raw`n = \frac{c}{v}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>v = Velocidad de la luz en el medio (m/s)</li>
            <li>c = Velocidad de la luz en el vacío (3 × 10⁸ m/s)</li>
            <li>n = Índice de refracción del medio (adimensional)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Interferencia y Difracción">
        <Concept title="Interferencia de Doble Rendija">
          <p>Cuando la luz coherente pasa por dos rendijas paralelas, se produce un patrón de interferencia con máximos y mínimos de intensidad.</p>
          <Formula
            expression={String.raw`d \sin \theta = m \lambda`}
            calculatorId="optica_doble_rendija"
            definitions={opticaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Ángulo del máximo", expression: String.raw`\theta = \arcsin\left(\frac{m \lambda}{d}\right)` },
              { description: "Separación de rendijas", expression: String.raw`d = \frac{m \lambda}{\sin \theta}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>d = Separación entre las dos rendijas (m)</li>
            <li>θ = Ángulo del máximo de interferencia (rad)</li>
            <li>m = Orden del máximo (m = 0, ±1, ±2, ...)</li>
            <li>λ = Longitud de onda de la luz (m)</li>
          </ul>
        </Concept>

        <Concept title="Difracción por Rendija Simple">
          <p>Una rendija simple produce un patrón de difracción con un máximo central y mínimos laterales.</p>
          <Formula
            expression={String.raw`a \sin \theta = m \lambda`}
            calculatorId="optica_rendija_simple"
            definitions={opticaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Ángulo del mínimo", expression: String.raw`\theta = \arcsin\left(\frac{m \lambda}{a}\right)` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>a = Ancho de la rendija (m)</li>
            <li>θ = Ángulo del mínimo de difracción (rad)</li>
            <li>m = Orden del mínimo (m = ±1, ±2, ±3, ...)</li>
            <li>λ = Longitud de onda de la luz (m)</li>
          </ul>
        </Concept>

        <Concept title="Red de Difracción">
          <p>Una red de difracción con múltiples rendijas produce máximos de interferencia muy definidos, útiles para espectroscopía.</p>
          <Formula
            expression={String.raw`d \sin \theta = m \lambda`}
            calculatorId="optica_red_difraccion"
            definitions={opticaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Resolución espectral", expression: String.raw`\frac{\lambda}{\Delta \lambda} = m N` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>d = Separación entre rendijas de la red (m)</li>
            <li>θ = Ángulo del máximo de difracción (rad)</li>
            <li>m = Orden del máximo (m = 0, ±1, ±2, ...)</li>
            <li>λ = Longitud de onda de la luz (m)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Polarización">
        <Concept title="Ley de Malus">
          <p>Cuando luz polarizada pasa a través de un polarizador, la intensidad transmitida depende del ángulo entre la dirección de polarización y el eje del polarizador.</p>
          <Formula
            expression={String.raw`I = I_0 \cos^2 \theta`}
            calculatorId="optica_ley_malus"
            definitions={opticaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Ángulo de polarización", expression: String.raw`\theta = \arccos\sqrt{\frac{I}{I_0}}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>I = Intensidad transmitida (W/m²)</li>
            <li>I₀ = Intensidad inicial de la luz polarizada (W/m²)</li>
            <li>θ = Ángulo entre la polarización y el eje del polarizador (rad)</li>
          </ul>
        </Concept>

        <Concept title="Ángulo de Brewster">
          <p>El ángulo de Brewster es el ángulo de incidencia para el cual la luz reflejada está completamente polarizada.</p>
          <Formula
            expression={String.raw`\theta_B = \arctan\left(\frac{n_2}{n_1}\right)`}
            calculatorId="optica_angulo_brewster"
            definitions={opticaDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>θB = Ángulo de Brewster (rad)</li>
            <li>n₁ = Índice de refracción del primer medio (adimensional)</li>
            <li>n₂ = Índice de refracción del segundo medio (adimensional)</li>
          </ul>
        </Concept>
      </TheorySection>



      <TheorySection title="Óptica Geométrica vs Óptica Ondulatoria">
        <Concept title="Óptica Geométrica">
          <p>Válida cuando las dimensiones del sistema son mucho mayores que la longitud de onda:</p>
          <ul>
            <li>La luz viaja en líneas rectas (rayos)</li>
            <li>Reflexión y refracción siguen leyes geométricas</li>
            <li>Aplicable a lentes, espejos, prismas</li>
          </ul>
        </Concept>

        <Concept title="Óptica Ondulatoria">
          <p>Necesaria cuando las dimensiones son comparables a la longitud de onda:</p>
          <ul>
            <li>Interferencia y difracción son importantes</li>
            <li>Coherencia y polarización son relevantes</li>
            <li>Aplicable a redes de difracción, holografía</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="concepto-fundamental">
          <h4>Fibra Óptica</h4>
          <p>Principio: Reflexión total interna en el núcleo de la fibra.</p>
          <p>Ventajas: Alta velocidad, baja atenuación, inmunidad electromagnética.</p>
          <p>Aplicaciones: Internet de alta velocidad, telecomunicaciones globales, medicina (endoscopios para cirugías mínimamente invasivas), sensores industriales.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Láseres</h4>
          <p>Características: Luz coherente, monocromática y direccional.</p>
          <p>Tipos: Láser de He-Ne (632.8 nm), láser de diodo (varios colores), láser de CO₂.</p>
          <p>Aplicaciones: Comunicaciones por fibra óptica, cirugía ocular (LASIK), corte y soldadura industrial, lectores de códigos de barras, punteros láser, investigación científica.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Displays y Pantallas</h4>
          <p>LCD: Utilizan polarización y cristales líquidos para controlar la luz. Presentes en monitores, televisores y smartphones.</p>
          <p>OLED: Diodos orgánicos que emiten luz directamente, ofreciendo negros profundos y bajo consumo energético.</p>
          <p>LED: Semiconductores que emiten luz por electroluminiscencia, usados en iluminación eficiente y pantallas de gran formato.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Espectroscopía</h4>
          <p>Principio: Análisis de la luz emitida o absorbida por materiales para identificar su composición.</p>
          <p>Aplicaciones: Análisis químico en laboratorios, astronomía (composición de estrellas y galaxias), control de calidad en industria alimentaria y farmacéutica, detección de contaminantes.</p>
          <p>Instrumentos: Espectrómetros, espectrógrafos, interferómetros.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Fotografía y Cámaras</h4>
          <p>Sensores CCD/CMOS: Convierten fotones en señales eléctricas para capturar imágenes digitales.</p>
          <p>Lentes: Enfocan la luz usando refracción, permitiendo zoom y enfoque selectivo.</p>
          <p>Filtros: Seleccionan longitudes de onda específicas para efectos artísticos o científicos (UV, IR, polarizadores).</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Realidad Virtual y Aumentada</h4>
          <p>Utilizan óptica avanzada para crear experiencias inmersivas mediante lentes especiales, pantallas de alta resolución y sistemas de seguimiento ocular basados en luz infrarroja.</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El descubrimiento de la naturaleza de la luz
        </h2>
        
        <p>
          La naturaleza de la luz ha sido uno de los debates más largos de la física. En el siglo XVII, Isaac Newton propuso que la luz estaba compuesta por partículas (corpúsculos), mientras que Christiaan Huygens defendía que era una onda. Durante más de un siglo, la teoría corpuscular dominó debido al prestigio de Newton.
        </p>
        
        <p>
          En 1801, Thomas Young realizó su famoso experimento de la doble rendija, demostrando inequívocamente la naturaleza ondulatoria de la luz mediante patrones de interferencia. Este experimento revolucionó la óptica y estableció la teoría ondulatoria como la correcta.
        </p>
        
        <p>
          En 1865, James Clerk Maxwell unificó la electricidad, el magnetismo y la óptica al demostrar que la luz es una onda electromagnética. Sus ecuaciones predijeron la velocidad de la luz y explicaron todos los fenómenos ópticos conocidos.
        </p>
        
        <p>
          Sin embargo, en 1905, Albert Einstein demostró con el efecto fotoeléctrico que la luz también se comporta como partículas (fotones), resucitando parcialmente la teoría corpuscular de Newton. Esta dualidad onda-partícula se convirtió en uno de los pilares de la mecánica cuántica.
        </p>
        
        <p>
          En 1960, Theodore Maiman construyó el primer láser funcional usando un cristal de rubí, abriendo una nueva era en la óptica aplicada. Desde entonces, los láseres han revolucionado las comunicaciones, la medicina y la industria.
        </p>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="concepto-fundamental">
          <h4>El experimento más hermoso de la física</h4>
          <p>
            El experimento de la doble rendija de Young ha sido votado como "el experimento más hermoso de la física" por lectores de Physics World. Lo fascinante es que cuando se intenta detectar por qué rendija pasa cada fotón, el patrón de interferencia desaparece, demostrando el principio de incertidumbre cuántico.
          </p>
        </div>

        <div className="concepto-fundamental">
          <h4>La velocidad de la luz no siempre es constante</h4>
          <p>
            Aunque la velocidad de la luz en el vacío es constante (299,792,458 m/s), en materiales puede ser mucho menor. En el agua es un 25% más lenta, y en diamante un 59% más lenta. En 1999, científicos lograron reducir la velocidad de la luz a solo 17 m/s usando un condensado de Bose-Einstein.
          </p>
        </div>

        <div className="concepto-fundamental">
          <h4>El cielo azul y los atardeceres rojos</h4>
          <p>
            El cielo es azul debido a la dispersión de Rayleigh: las moléculas de aire dispersan más la luz azul (longitud de onda corta) que la roja. Al atardecer, la luz atraviesa más atmósfera, dispersando todo el azul y dejando solo los rojos y naranjas, creando espectaculares puestas de sol.
          </p>
        </div>

        <div className="concepto-fundamental">
          <h4>Gafas de sol polarizadas</h4>
          <p>
            Las gafas de sol polarizadas utilizan la ley de Malus para bloquear el deslumbramiento. La luz reflejada en superficies horizontales (agua, carreteras) está polarizada horizontalmente, y las gafas tienen un filtro vertical que la bloquea, reduciendo el brillo hasta un 99%.
          </p>
        </div>

        <div className="concepto-fundamental">
          <h4>Fibra óptica más rápida que el cobre</h4>
          <p>
            Una sola fibra óptica del grosor de un cabello humano puede transmitir 10 terabits por segundo, equivalente a 250 DVDs por segundo. Esto es posible gracias a la reflexión total interna y al uso de múltiples longitudes de onda simultáneamente (multiplexación por división de longitud de onda).
          </p>
        </div>

        <div className="concepto-fundamental">
          <h4>El láser más potente del mundo</h4>
          <p>
            El National Ignition Facility en California tiene 192 láseres que convergen en un punto del tamaño de una goma de borrar, generando 500 terawatts de potencia durante unos nanosegundos. Esta energía se usa para investigar fusión nuclear y recrear condiciones del interior de las estrellas.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen: Luz Visible y Óptica</h3>
        <p>
          La luz visible es la porción del espectro electromagnético que podemos ver, con longitudes de onda entre 380 nm (violeta) y 700 nm (rojo). Su comportamiento se describe mediante dos enfoques complementarios:
        </p>
        <ul>
          <li>Óptica geométrica: Trata la luz como rayos que se reflejan y refractan según leyes geométricas (ley de Snell, reflexión total).</li>
          <li>Óptica ondulatoria: Considera la luz como ondas que interfieren y se difractan, explicando fenómenos como los patrones de Young y la polarización.</li>
        </ul>
        <p>
          Las aplicaciones modernas de la óptica son omnipresentes: desde las fibras ópticas que transmiten internet a velocidades increíbles, hasta los láseres usados en medicina y comunicaciones, pasando por las pantallas LCD y OLED que usamos diariamente. La comprensión de la luz ha sido fundamental para el desarrollo tecnológico del siglo XXI.
        </p>
      </div>
    </>
  );
};

export default LuzVisibleOpticaTheory;