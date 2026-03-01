import { TheorySection, Concept, Formula, Important, Example } from '../../../components/TheoryV2';
import { definitions as acusticaArquitectonicaDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Acústica Arquitectónica",
  descripcion: "Estudio de la propagación, control y diseño del sonido en espacios arquitectónicos. Incluye reverberación, absorción, aislamiento y parámetros de calidad acústica.",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const AcusticaArquitectonicaTheory = ({ exercises }) => {
  return (
    <>
      {/* Introducción */}
      <TheorySection title="¿Qué es la Acústica Arquitectónica?">
        <Concept title="Definición general">
          <p>
            La acústica arquitectónica estudia el comportamiento del sonido en espacios cerrados y su aplicación al diseño de edificios, auditorios, aulas y cualquier espacio donde la calidad sonora sea relevante.
          </p>
        </Concept>
        <Important>
          Una buena acústica arquitectónica mejora la experiencia auditiva, la inteligibilidad del habla y la calidad de la música en recintos.
        </Important>
      </TheorySection>

      {/* Sección de teoría y fórmulas principales */}
      <TheorySection title="Reverberación y Absorción">
        <Concept title="Fórmula de Sabine">
          <p>
            La reverberación es la persistencia del sonido en un recinto después de que la fuente ha dejado de emitir. La fórmula de Sabine permite calcular el tiempo de reverberación:
          </p>
          <Formula
            expression={String.raw`T_R = 0.161 \frac{V}{A}`}
            calculatorId="acustica_arquitectonica-grupo-1"
            definitions={acusticaArquitectonicaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Volumen (V)", expression: String.raw`V = \frac{T_R \cdot A}{0.161}` },
              { description: "Calcular Absorción (A)", expression: String.raw`A = \frac{0.161 \cdot V}{T_R}` }
            ]}
          />
          <strong>Donde:</strong>
          <ul>
            <li>TR: Tiempo de reverberación (s)</li>
            <li>V: Volumen del recinto (m³)</li>
            <li>A: Absorción total (m²)</li>
          </ul>
        </Concept>
        <Concept title="Fórmula de Eyring">
          <p>
            Para recintos con alta absorción (α &gt; 0.3), la fórmula de Eyring es más precisa:
          </p>
          <Formula
            expression={String.raw`T_R = 0.161 \frac{V}{-S \ln(1-\alpha_{medio})}`}
            calculatorId="acustica_arquitectonica-eyring"
            definitions={acusticaArquitectonicaDefinitions}
            exercises={exercises}
          />
          <strong>Donde:</strong>
          <ul>
            <li>S: Área total de superficies (m²)</li>
            <li>α<sub>medio</sub>: Coeficiente de absorción medio</li>
          </ul>
        </Concept>
        <Concept title="Coeficiente de Absorción">
          <p>
            El coeficiente de absorción (α) indica la fracción de energía sonora absorbida por un material:
          </p>
          <ul>
            <li>α = 0: Reflexión total (superficie dura)</li>
            <li>α = 1: Absorción total (superficie perfectamente absorbente)</li>
          </ul>
        </Concept>
        <Concept title="Materiales Absorbentes">
          <ul>
            <li>Alta absorción: Cortinas gruesas, alfombras, espuma acústica</li>
            <li>Baja absorción: Concreto, vidrio, metal</li>
          </ul>
        </Concept>
        <Concept title="Tiempo de Reverberación Óptimo">
          <ul>
            <li>Palabra hablada: 0.5 - 1.0 s</li>
            <li>Música de cámara: 1.0 - 1.5 s</li>
            <li>Música sinfónica: 1.5 - 2.0 s</li>
            <li>Música coral: 2.0 - 3.0 s</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Aislamiento y Calidad Acústica">
        <Concept title="Aislamiento Acústico">
          <p>
            El aislamiento acústico busca impedir la transmisión del sonido entre espacios. Métodos:
          </p>
          <ul>
            <li>Masa: Paredes gruesas y densas</li>
            <li>Desacoplamiento: Dobles paredes con cámara de aire</li>
            <li>Amortiguamiento: Materiales viscoelásticos</li>
            <li>Absorción: Materiales porosos en cavidades</li>
          </ul>
        </Concept>
        <Concept title="Índice de Transmisión Sonora (STC)">
          <p>
            El STC (Sound Transmission Class) mide la capacidad de una pared o elemento constructivo para bloquear el sonido:
          </p>
          <ul>
            <li>STC 25: Conversación normal claramente audible</li>
            <li>STC 35: Conversación audible pero no inteligible</li>
            <li>STC 45: Conversación fuerte apenas audible</li>
            <li>STC 50: Sonidos fuertes apenas perceptibles</li>
            <li>STC 60+: Aislamiento excelente (estudios profesionales)</li>
          </ul>
        </Concept>
        <Concept title="Claridad e Inteligibilidad">
          <p>Claridad (C80): Relación entre energía sonora temprana (primeros 80 ms) y tardía. Importante para música:</p>
          <ul>
            <li>C80 &lt; 0 dB: Sonido difuso, bueno para música romántica</li>
            <li>C80 &gt; 2 dB: Sonido claro, bueno para música barroca</li>
          </ul>
          <p>Inteligibilidad (STI): Índice de 0 a 1 que mide qué tan bien se entiende el habla:</p>
          <ul>
            <li>STI &lt; 0.3: Mala inteligibilidad</li>
            <li>STI 0.45-0.6: Aceptable</li>
            <li>STI 0.6-0.75: Buena</li>
            <li>STI &gt; 0.75: Excelente</li>
          </ul>
        </Concept>
        <Concept title="Geometría y Difusión">
          <p>
            La geometría afecta dramáticamente la acústica:
          </p>
          <ul>
            <li>Forma de caja: Genera ondas estacionarias (modos propios)</li>
            <li>Forma de abanico: Buena distribución del sonido</li>
            <li>Forma de viñedo: Intimidad y claridad (Filarmónica de Berlín)</li>
            <li>Superficies paralelas: Producen ecos flutter</li>
          </ul>
          <p>Difusión acústica: Superficies irregulares (difusores) dispersan el sonido uniformemente, evitando reflexiones especulares y mejorando la sensación espacial.</p>
        </Concept>
      </TheorySection>

      {/* Aplicaciones */}
      <div className="theory-applications-section">
        <h2><span role="img" aria-label="aplicaciones">🌍</span> Aplicaciones en la vida real</h2>
        <div className="theory-subsection">
          <h3>🎵 Salas de Conciertos y Auditorios</h3>
          <ul>
            <li>Parámetros óptimos: TR = 1.8-2.2 s para música sinfónica, difusión lateral para sensación de envolvimiento, forma de viñedo para visibilidad.</li>
            <li>Ejemplos famosos: Musikverein de Viena (TR = 2.0 s), Boston Symphony Hall (primer diseño científico de Sabine), Walt Disney Concert Hall (acústica de Yasuhisa Toyota).</li>
            <li>Tecnología moderna: Paneles acústicos móviles que ajustan el TR según el tipo de evento (ópera vs rock vs conferencia).</li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3>🎙️ Estudios de Grabación</h3>
          <ul>
            <li>Parámetros: TR = 0.2-0.4 s (muy seco), alta absorción para evitar coloración del sonido, geometría no paralela para eliminar ondas estacionarias.</li>
            <li>Salas de control: Diseñadas con precisión milimétrica para respuesta plana, usando trampas de graves y difusores específicos.</li>
            <li>Estudios famosos: Abbey Road (The Beatles), Capitol Studios (Frank Sinatra), Electric Lady Studios (Jimi Hendrix).</li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3>🎭 Teatros y Óperas</h3>
          <ul>
            <li>Parámetros: TR = 0.8-1.2 s, STI &gt; 0.7 para inteligibilidad perfecta, reflexiones tempranas controladas para claridad.</li>
            <li>Diseño histórico: Teatros griegos como Epidauro (2400 años) tienen acústica perfecta sin tecnología moderna.</li>
            <li>Desafíos: Balance entre inteligibilidad del habla y calidez musical para ópera.</li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3>🏫 Aulas y Espacios Educativos</h3>
          <ul>
            <li>Parámetros: TR = 0.6-0.8 s, STI &gt; 0.65, absorción principalmente en techo para mantener paredes reflectantes.</li>
            <li>Importancia: Mala acústica reduce comprensión en 25-30%, afectando especialmente a niños con dificultades de aprendizaje.</li>
            <li>Soluciones: Paneles acústicos en techo, alfombras, cortinas, sistemas de refuerzo sonoro para aulas grandes.</li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3>🏢 Oficinas y Espacios de Trabajo</h3>
          <ul>
            <li>Oficinas abiertas: Absorción en techo, paneles divisorios con STC 20-25, zonas de silencio para concentración.</li>
            <li>Salas de reuniones: TR = 0.4-0.6 s, STI &gt; 0.7 para videoconferencias, tratamiento de esquinas para eliminar ecos.</li>
            <li>Impacto en productividad: Estudios muestran que ruido excesivo reduce productividad en 66% y aumenta estrés.</li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3>🏠 Home Theaters y Salas de Cine</h3>
          <ul>
            <li>Parámetros: TR = 0.3-0.5 s, absorción en pared posterior para eliminar ecos, difusión lateral para sensación espacial.</li>
            <li>Tratamiento típico: Trampas de graves en esquinas, paneles absorbentes en primera reflexión, difusores en paredes laterales.</li>
            <li>Sistemas Dolby Atmos: Requieren acústica controlada para que altavoces de techo funcionen correctamente.</li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3>⛪ Iglesias y Catedrales</h3>
          <ul>
            <li>Parámetros: TR = 3-8 s (intencional), crea sensación de grandeza y espiritualidad, ideal para música sacra y coros.</li>
            <li>Ejemplos: Catedral de Notre-Dame (TR ≈ 8 s), Basílica de San Pedro (TR ≈ 10 s en algunas frecuencias).</li>
            <li>Desafío moderno: Instalar sistemas de refuerzo sonoro sin arruinar la acústica natural para sermones inteligibles.</li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3>🏥 Hospitales y Centros de Salud</h3>
          <ul>
            <li>Importancia: Ruido excesivo aumenta estrés de pacientes, retrasa recuperación y aumenta errores médicos.</li>
            <li>Soluciones: Techos absorbentes, puertas con STC &gt; 40, pisos que no amplifican pasos, alarmas optimizadas.</li>
            <li>Normativas: OMS recomienda &lt; 35 dB en habitaciones de pacientes.</li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3>🏨 Hoteles y Restaurantes</h3>
          <ul>
            <li>Habitaciones de hotel: STC &gt; 50 entre habitaciones, aislamiento de ruido de impacto (pasos), ventanas con doble acristalamiento.</li>
            <li>Restaurantes: TR = 0.6-0.8 s para permitir conversación sin gritar, absorción en techo, materiales que no amplifican ruido de platos.</li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3>🏟️ Estadios y Espacios Deportivos</h3>
          <ul>
            <li>Desafío: Espacios enormes con TR muy largo, sistemas de refuerzo sonoro para anuncios inteligibles.</li>
            <li>Solución: Arrays de altavoces direccionales, delays para sincronizar sonido con distancia, absorción selectiva.</li>
          </ul>
        </div>
        <div className="theory-section-highlight">
          <p>
            💡 Impacto económico: La acústica arquitectónica es una industria multimillonaria. Un diseño acústico deficiente puede costar millones en correcciones (como la Ópera de Sídney, que requirió renovación acústica de $150 millones). Por el contrario, buena acústica aumenta el valor de propiedades, mejora productividad en oficinas, y es esencial para la experiencia en espacios de entretenimiento.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2><span role="img" aria-label="historia">📜</span> Historia de la Acústica Arquitectónica</h2>
        <div className="theory-subsection">
          <h3>Wallace Clement Sabine (1868-1919)</h3>
          <p>
            El padre de la acústica arquitectónica moderna. En 1895, la Universidad de Harvard le encargó resolver el desastre acústico del Fogg Lecture Hall, donde las conferencias eran ininteligibles debido a la reverberación excesiva.
          </p>
          <p>
            Sin formación en acústica, Sabine pasó años experimentando. Trabajaba de noche para evitar ruido ambiental, usando un cronómetro y un silbato de órgano. Transportaba cojines de asientos del teatro Sanders para medir cómo diferentes materiales absorbían el sonido.
          </p>
          <p>
            En 1900 publicó su famosa fórmula: T<sub>R</sub> = 0.161 V/A. Lo notable es que fue completamente empírica, sin teoría matemática previa. Simplemente midió, midió y midió hasta encontrar el patrón.
          </p>
          <p>
            Su primer proyecto fue el Boston Symphony Hall (1900), que diseñó basándose en las proporciones del Leipzig Gewandhaus. Más de 120 años después, sigue siendo considerada una de las mejores salas de conciertos del mundo.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>Evolución Histórica</h3>
          <ul>
            <li>500 a.C. - Antigua Grecia: Anfiteatros con acústica perfecta sin conocimientos científicos. El Teatro de Epidauro permitía escuchar un susurro desde 50 metros.</li>
            <li>Siglo I - Roma: Vitruvio escribe sobre acústica en "De Architectura", describiendo el uso de vasijas resonantes.</li>
            <li>Edad Media: Catedrales góticas diseñadas para reverberación extrema (8-10 s) que hacía el canto gregoriano "celestial".</li>
            <li>1900 - Sabine: Formaliza la acústica como ciencia.</li>
            <li>1930 - Carl Eyring: Mejora la fórmula de Sabine para alta absorción.</li>
            <li>1950s-60s: Desarrollo de materiales acústicos modernos (fibra de vidrio, espumas).</li>
            <li>1970s-80s: Primeras simulaciones por computadora.</li>
            <li>2000s: Auralization - escuchar virtualmente una sala antes de construirla.</li>
          </ul>
        </div>
      </div>

      {/* Anécdotas */}
      <div className="theory-anecdotes-section">
        <h2><span role="img" aria-label="anécdotas">✨</span> Anécdotas y Curiosidades</h2>
        <div className="theory-subsection">
          <h3>🎭 El Desastre del Royal Albert Hall</h3>
          <p>
            Inaugurado en 1871 en Londres, el Royal Albert Hall tenía un eco tan severo que los músicos escuchaban su propia música con medio segundo de retraso. Durante 100 años fue un problema sin solución. En 1969 instalaron "platillos voladores" (difusores circulares colgantes) que finalmente resolvieron el problema.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏛️ El Milagro de Epidauro</h3>
          <p>
            El Teatro de Epidauro (350 a.C.) tiene una acústica tan perfecta que una moneda cayendo en el escenario se escucha en la última fila (55 metros). Durante siglos se creyó que era por el viento o la geometría. En 2007 se descubrió que los asientos de piedra caliza actúan como filtros acústicos que suprimen frecuencias bajas (ruido ambiental) y amplifican las frecuencias del habla humana.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🎵 La Sala de los Beatles</h3>
          <p>
            Los estudios Abbey Road (Londres) tienen una geometría específica diseñada en los años 30. La Sala 2, donde los Beatles grabaron la mayoría de sus álbumes, tiene un techo inclinado y paredes no paralelas que crean una reverberación única. Muchos productores modernos intentan recrear ese sonido digitalmente, pero nunca suena igual.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔇 El Lugar Más Silencioso del Mundo</h3>
          <p>
            La cámara anecoica de Microsoft en Redmond tiene un nivel de ruido de -20.6 dB (más silencioso que el umbral de audición humano). Las paredes absorben el 99.99% del sonido. La gente no aguanta más de 45 minutos porque empiezas a escuchar tu corazón, pulmones, estómago... y puede causar alucinaciones auditivas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏠 ¿Por Qué Cantar en la Ducha Suena Mejor?</h3>
          <p>
            Las paredes duras del baño (azulejos) reflejan el sonido creando reverberación. Además, las dimensiones pequeñas generan resonancias en frecuencias que amplifican tu voz. El vapor de agua también absorbe frecuencias altas, suavizando el sonido. ¡Es como tener un estudio de grabación gratis!
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🎼 Catedrales Diseñadas para Dios</h3>
          <p>
            Las catedrales góticas tienen reverberaciones de 8-10 segundos (¡5 veces más que una sala de conciertos!). No era un error: se diseñaban así intencionalmente. El canto gregoriano con esa reverberación extrema creaba una sensación "celestial" que hacía sentir la presencia divina. La música barroca posterior tuvo que adaptarse a estos espacios.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🎻 La Filarmónica de Berlín</h3>
          <p>
            Diseñada por Hans Scharoun en 1963, tiene forma de "viñedo" con el público rodeando la orquesta en terrazas. Fue revolucionaria: en lugar de la tradicional "caja de zapatos", creó intimidad visual y acústica. Cada asiento está a máximo 30 metros del director. Su acústica es tan buena que muchas salas modernas copian su diseño.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="theory-summary-section">
        <h2><span role="img" aria-label="resumen">📝</span> Resumen</h2>
        <ul>
          <li>La acústica arquitectónica estudia la propagación, control y diseño del sonido en espacios arquitectónicos.</li>
          <li>El tiempo de reverberación (TR) es clave para la calidad acústica y se calcula con la fórmula de Sabine o Eyring.</li>
          <li>El aislamiento acústico y la absorción de materiales determinan la privacidad y el confort sonoro.</li>
          <li>La geometría y los materiales de la sala afectan la difusión, claridad e inteligibilidad.</li>
          <li>Aplicaciones en auditorios, teatros, aulas, oficinas, hospitales, hoteles y más.</li>
        </ul>
        <Important>
          Una buena acústica arquitectónica es esencial para la calidad de vida, la productividad y la experiencia cultural en la sociedad moderna.
        </Important>
      </div>
    </>
  );
};

export default AcusticaArquitectonicaTheory;


