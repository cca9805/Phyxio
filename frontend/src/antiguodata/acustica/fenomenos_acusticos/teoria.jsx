import { TheorySection, Concept, Formula } from '../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Fenómenos Acústicos",
  descripcion: "Reflexión, refracción, difracción e interferencia del sonido",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};


const FenomenosAcusticosTheory = ({ exercises }) => (
  <>
    {/* TEORÍA PRINCIPAL */}
    <TheorySection title="Fenómenos Acústicos">
      <p>
        Las ondas sonoras experimentan los mismos fenómenos que otras ondas: reflexión, refracción, difracción e interferencia.
      </p>
    </TheorySection>

    <TheorySection title="Reflexión del Sonido">
      <p>
        Cuando una onda sonora encuentra una superficie, parte de la energía se refleja. La ley de reflexión establece que el ángulo de incidencia es igual al ángulo de reflexión.
      </p>
      <Concept title="Eco">
        <p>
          El eco es la reflexión del sonido que llega al oyente con un retardo perceptible (≥ 0.1 s). Para que se produzca eco, la superficie reflectora debe estar a una distancia mínima:
        </p>
        <Formula
          expression={String.raw`d = \frac{v \cdot t}{2}`}
          calculatorId="fenomenos_acusticos-grupo-1"
          definitions={definitions}
          exercises={exercises}
          complementary={[
            { description: "Calcular Tiempo (t)", expression: String.raw`t = \frac{2d}{v}` },
            { description: "Calcular Velocidad (v)", expression: String.raw`v = \frac{2d}{t}` }
          ]}
        />
        <p>Donde:</p>
        <ul>
          <li>d: Distancia mínima (m)</li>
          <li>v: Velocidad del sonido (m/s)</li>
          <li>t: Tiempo mínimo perceptible (s)</li>
        </ul>
        <p>Para aire a 20°C: d ≈ 17 m (con t = 0.1 s)</p>
      </Concept>
      <Concept title="Reverberación">
        <p>
          Múltiples reflexiones que se superponen, creando una prolongación del sonido después de que la fuente deja de emitir.
        </p>
      </Concept>
    </TheorySection>

    <TheorySection title="Refracción del Sonido">
      <p>
        La refracción ocurre cuando el sonido pasa de un medio a otro con diferente velocidad de propagación, o cuando hay gradientes de temperatura en el mismo medio.
      </p>
      <Concept title="Efectos de la Temperatura">
        <ul>
          <li>El sonido se refracta hacia zonas más frías</li>
          <li>Por la noche, el sonido se propaga más lejos (inversión térmica)</li>
          <li>Durante el día, el sonido tiende a curvarse hacia arriba</li>
        </ul>
      </Concept>
    </TheorySection>

    <TheorySection title="Difracción del Sonido">
      <p>
        La difracción permite que el sonido "rodee" obstáculos y se propague a través de aberturas. Es más notable cuando:
      </p>
      <ul>
        <li>La longitud de onda es comparable o mayor que el tamaño del obstáculo</li>
        <li>Los sonidos graves (λ grande) se difractan más que los agudos</li>
      </ul>
      <p>
        Por esto podemos escuchar sonidos detrás de esquinas, especialmente los graves.
      </p>
    </TheorySection>

    <TheorySection title="Interferencia del Sonido">
      <p>
        Cuando dos ondas sonoras se superponen, pueden interferir constructiva o destructivamente.
      </p>
      <Concept title="Interferencia Constructiva">
        <p>
          Ocurre cuando las ondas están en fase (diferencia de camino = nλ):
        </p>
        <Formula
          expression={String.raw`\Delta x = n\lambda`}
          calculatorId="fenomenos_acusticos-grupo-1"
          definitions={definitions}
          exercises={exercises}
          complementary={[
            { description: "Calcular Longitud de Onda (λ)", expression: String.raw`\lambda = \frac{\Delta x}{n}` },
            { description: "Calcular Orden (n)", expression: String.raw`n = \frac{\Delta x}{\lambda}` }
          ]}
        />
        <p>Donde:</p>
        <ul>
          <li>Δx: Diferencia de camino (m)</li>
          <li>n: Número entero (0, 1, 2, ...)</li>
          <li>λ: Longitud de onda (m)</li>
        </ul>
        <p>Resultado: Aumento de intensidad (sonido más fuerte)</p>
      </Concept>
      <Concept title="Interferencia Destructiva">
        <p>
          Ocurre cuando las ondas están en contrafase (diferencia de camino = (n + ½)λ):
        </p>
        <Formula
          expression={String.raw`\Delta x = \left(n + \frac{1}{2}\right)\lambda`}
          calculatorId="fenomenos_acusticos-grupo-1"
          definitions={definitions}
          exercises={exercises}
          complementary={[
            { description: "Calcular Longitud de Onda (λ)", expression: String.raw`\lambda = \frac{\Delta x}{n + 0.5}` }
          ]}
        />
        <p>Donde:</p>
        <ul>
          <li>Δx: Diferencia de camino (m)</li>
          <li>n: Número entero (0, 1, 2, ...)</li>
          <li>λ: Longitud de onda (m)</li>
        </ul>
        <p>Resultado: Disminución de intensidad (sonido más débil o silencio)</p>
      </Concept>
      <Concept title="Pulsaciones (Batimientos)">
        <p>
          Cuando dos sonidos de frecuencias ligeramente diferentes interfieren, se producen pulsaciones:
        </p>
        <Formula
          expression={String.raw`f_{pulsación} = |f_1 - f_2|`}
          calculatorId="fenomenos_acusticos-grupo-1"
          definitions={definitions}
          exercises={exercises}
          complementary={[
            { description: "Calcular Frecuencia 2 (f₂)", expression: String.raw`f_2 = f_1 \pm f_{pulsación}` }
          ]}
        />
        <p>Donde:</p>
        <ul>
          <li>f_pulsación: Frecuencia de pulsación (Hz)</li>
          <li>f₁, f₂: Frecuencias de los dos sonidos (Hz)</li>
        </ul>
      </Concept>
    </TheorySection>

    {/* APLICACIONES */}
    <div className="theory-applications-section">
      <h2>🌍 Aplicaciones en la vida real</h2>
      <div className="theory-subsection">
        <h3>🏛️ Arquitectura y Diseño Acústico</h3>
        <ul>
          <li>Salas de conciertos: Uso de reflexiones controladas para distribuir el sonido uniformemente sin ecos</li>
          <li>Teatros: Superficies curvas que reflejan el sonido hacia la audiencia (concha acústica)</li>
          <li>Estudios de grabación: Paneles difusores que dispersan reflexiones para evitar ondas estacionarias</li>
          <li>Cines: Materiales absorbentes en paredes para minimizar reflexiones y mejorar claridad</li>
          <li>Aulas y oficinas: Control de reverberación mediante paneles acústicos para mejorar inteligibilidad</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🎵 Música y Audio</h3>
        <ul>
          <li>Afinación de instrumentos: Los afinadores detectan pulsaciones entre la nota tocada y la referencia</li>
          <li>Afinación de pianos: Técnicos escuchan pulsaciones para ajustar cuerdas con precisión de 0.1 Hz</li>
          <li>Efectos de audio: Chorus, flanger y phaser usan interferencia para crear sonidos envolventes</li>
          <li>Acústica de instrumentos: Diseño de cajas de resonancia considerando reflexiones internas</li>
          <li>Mezcla estéreo: Uso de diferencias de fase (interferencia) para crear sensación espacial</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🔇 Cancelación de Ruido</h3>
        <ul>
          <li>Auriculares ANC: Micrófonos captan ruido ambiental y generan ondas inversas (interferencia destructiva)</li>
          <li>Cabinas de avión: Sistemas activos que reducen ruido del motor hasta 20 dB</li>
          <li>Automóviles premium: Cancelación activa de ruido de motor y carretera</li>
          <li>Oficinas abiertas: Sistemas de enmascaramiento que usan interferencia para mejorar privacidad</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🌊 Navegación y Exploración</h3>
        <ul>
          <li>Sonar activo: Emisión de pulsos y detección de ecos para localizar objetos submarinos</li>
          <li>Sonar pasivo: Escucha de sonidos reflejados y refractados para detectar submarinos</li>
          <li>Ecosondas: Medición de profundidad marina mediante tiempo de eco</li>
          <li>Mapeo del fondo marino: Uso de reflexiones para crear mapas topográficos submarinos</li>
          <li>Detección de bancos de peces: Reflexiones de ultrasonido en cardúmenes</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🏥 Medicina</h3>
        <ul>
          <li>Ecografías: Reflexiones de ultrasonido en interfaces de tejidos para crear imágenes</li>
          <li>Doppler fetal: Interferencia de ondas para medir flujo sanguíneo y latido cardíaco</li>
          <li>Litotripsia: Ondas de choque enfocadas mediante reflexión para destruir cálculos</li>
          <li>Audiometrías: Detección de umbrales usando interferencia y enmascaramiento</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🔬 Investigación Científica</h3>
        <ul>
          <li>Sismología: Análisis de reflexiones y refracciones de ondas sísmicas para estudiar el interior de la Tierra</li>
          <li>Prospección petrolífera: Ondas sísmicas reflejadas revelan capas geológicas</li>
          <li>Acústica submarina: Estudio de refracción por gradientes de temperatura y salinidad</li>
          <li>Meteorología: Detección de inversiones térmicas mediante refracción de sonido</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🏭 Industria</h3>
        <ul>
          <li>Ensayos no destructivos: Detección de defectos internos mediante análisis de reflexiones</li>
          <li>Medición de espesor: Tiempo de eco para medir grosor de materiales</li>
          <li>Control de calidad: Detección de burbujas o inclusiones en fundiciones</li>
          <li>Limpieza ultrasónica: Interferencia de ondas crea cavitación para limpieza profunda</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🎭 Entretenimiento y Eventos</h3>
        <ul>
          <li>Sistemas de PA: Diseño de arrays de altavoces usando interferencia constructiva para dirigir sonido</li>
          <li>Efectos especiales: Uso de reflexiones y difracción para crear ambientes sonoros inmersivos</li>
          <li>Acústica de estadios: Control de ecos y reflexiones para 50,000+ espectadores</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🏠 Vida Cotidiana</h3>
        <ul>
          <li>Ecos en casa: Alfombras y cortinas absorben reflexiones para reducir reverberación</li>
          <li>Escuchar tras esquinas: Difracción permite oír sonidos sin línea de visión directa</li>
          <li>Zonas muertas en habitaciones: Interferencia destructiva crea puntos donde el sonido es más débil</li>
          <li>Megáfonos: Forma cónica enfoca el sonido mediante reflexiones</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🦇 Naturaleza</h3>
        <ul>
          <li>Ecolocalización de murciélagos: Análisis de ecos para navegar y cazar en oscuridad total</li>
          <li>Delfines: Sonar biológico con precisión de milímetros usando reflexiones</li>
          <li>Ballenas: Comunicación a largas distancias aprovechando refracción en capas oceánicas</li>
        </ul>
      </div>
      <div className="theory-section-highlight">
        <p>
          💡 Fenómenos omnipresentes: Cada vez que escuchas un eco, oyes música 
          estéreo, usas auriculares con cancelación de ruido, o ves una ecografía, estás 
          experimentando reflexión, interferencia, difracción o refracción. Estos fenómenos no 
          son curiosidades de laboratorio, son la base de tecnologías que usamos a diario y que 
          han revolucionado la medicina, la navegación y el entretenimiento.
        </p>
      </div>
    </div>

    {/* HECHOS HISTÓRICOS */}
    <div className="theory-history-section">
      <h2>📜 Historia: Descubriendo los fenómenos acústicos</h2>
      <div className="theory-subsection">
        <h3>🏛️ Antiguos griegos y romanos</h3>
        <p>
          Los arquitectos griegos y romanos ya conocían empíricamente la reflexión del sonido. 
          Los teatros griegos (como Epidauro, 350 a.C.) tenían acústica perfecta 
          gracias al diseño que aprovechaba reflexiones constructivas.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🔬 Marin Mersenne (1636)</h3>
        <p>
          El monje francés Marin Mersenne fue el primero en medir la velocidad 
          del sonido usando el eco. Disparó un cañón y midió el tiempo hasta escuchar el eco 
          desde una pared lejana. Obtuvo 316 m/s (valor real: 343 m/s a 20°C).
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🌊 Thomas Young (1801)</h3>
        <p>
          Thomas Young demostró la interferencia de ondas con su famoso 
          experimento de la doble rendija (con luz). Posteriormente aplicó los mismos 
          principios al sonido, demostrando que el sonido también es una onda.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🎵 Hermann von Helmholtz (1863)</h3>
        <p>
          El físico alemán estudió las pulsaciones y la interferencia en 
          música. Explicó por qué ciertos intervalos musicales suenan consonantes (sin 
          pulsaciones) y otros disonantes (con pulsaciones rápidas).
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🏗️ Wallace Sabine (1900)</h3>
        <p>
          Fundó la acústica arquitectónica moderna estudiando la reverberación. 
          Desarrolló fórmulas para predecir el tiempo de reverberación en salas, revolucionando 
          el diseño de auditorios.
        </p>
      </div>
    </div>

    {/* ANÉCDOTAS Y CURIOSIDADES */}
    <div className="theory-anecdotes-section">
      <h2>✨ Anécdotas y fenómenos fascinantes</h2>
      <div className="theory-subsection">
        <h3>🏛️ El teatro de Epidauro: 2,400 años de acústica perfecta</h3>
        <p>
          El teatro griego de Epidauro (350 a.C.) tiene una acústica tan perfecta que puedes 
          escuchar una moneda caer en el escenario desde la última fila (55 metros de distancia). 
          Durante siglos fue un misterio. En 2007, científicos descubrieron que los asientos de 
          piedra actúan como filtros acústicos que suprimen frecuencias bajas 
          (ruido ambiental) y amplifican las frecuencias del habla humana por reflexión.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🗣️ El muro de los susurros (Catedral de San Pablo, Londres)</h3>
        <p>
          En la cúpula de la Catedral de San Pablo hay una galería circular donde puedes 
          susurrar en un punto y ser escuchado perfectamente a 34 metros de 
          distancia en el lado opuesto. Las ondas sonoras viajan pegadas a la pared curva por 
          reflexiones sucesivas, sin dispersarse.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🎸 Cancelación de ruido: Del silencio al éxito</h3>
        <p>
          En 1978, el Dr. Amar Bose (fundador de Bose) volaba en un avión ruidoso y no podía 
          disfrutar de la música. Tuvo la idea de usar interferencia destructiva 
          para cancelar el ruido. Tardó 20 años en perfeccionar la tecnología. Hoy, los 
          auriculares con cancelación activa de ruido son un mercado de miles de millones.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🦇 Murciélagos y la difracción</h3>
        <p>
          Los murciélagos usan ultrasonidos (frecuencias muy altas, λ pequeña) para ecolocalización. 
          ¿Por qué no usan sonidos graves? Porque los sonidos graves se difractan 
          demasiado alrededor de objetos pequeños (insectos). Los ultrasonidos, con longitud de 
          onda pequeña, rebotan en objetos diminutos, permitiendo detectar presas de pocos milímetros.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🎵 Afinando con pulsaciones</h3>
        <p>
          Los afinadores de piano usan las pulsaciones para afinar. Tocan dos 
          cuerdas simultáneamente y escuchan el "wah-wah-wah" de las pulsaciones. Cuando las 
          pulsaciones desaparecen (frecuencia de pulsación = 0 Hz), las cuerdas están perfectamente 
          afinadas. Un afinador experto puede detectar pulsaciones de 0.1 Hz.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🌊 El "cañón sónico" de la Segunda Guerra Mundial</h3>
        <p>
          Los alemanes intentaron crear un arma usando interferencia constructiva: 
          múltiples altavoces sincronizados para crear un haz de sonido intenso. La idea era 
          derribar aviones. Fracasó porque:
        </p>
        <ul>
          <li>El sonido se difracta demasiado (no se puede enfocar como un láser)</li>
          <li>La potencia necesaria era impráctica</li>
          <li>Los aviones eran demasiado rápidos</li>
        </ul>
        <p>Pero el concepto inspiró tecnologías modernas como altavoces direccionales.</p>
      </div>
      <div className="theory-subsection">
        <h3>🏔️ El eco más largo del mundo</h3>
        <p>
          En 2014, Trevor Cox registró el eco más largo del mundo en un túnel de petróleo 
          abandonado en Escocia: ¡112 segundos! Un aplauso se escuchaba durante casi 2 
          minutos. El túnel de 3 km actúa como una guía de ondas perfecta con miles de reflexiones.
        </p>
      </div>
      <div className="theory-section-highlight">
        <p>
          💡 Reflexión: Los fenómenos acústicos no son solo teoría abstracta. 
          Desde teatros antiguos hasta auriculares modernos, desde afinación de pianos hasta 
          ecolocalización de murciélagos, estos principios dan forma a cómo experimentamos y 
          usamos el sonido en nuestra vida diaria.
        </p>
      </div>
    </div>
  </>
);

export default FenomenosAcusticosTheory;
