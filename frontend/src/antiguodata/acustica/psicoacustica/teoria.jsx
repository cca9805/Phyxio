import { TheorySection, Concept, Important, Formula } from '../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Psicoacústica",
  descripcion: "Estudio de la percepción del sonido por el ser humano",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const PsicoacusticaTheory = ({ exercises }) => (
  <>
    {/* 3. TEORÍA PRINCIPAL */}
    <TheorySection title="¿Qué es la Psicoacústica?">
      <Important>
        La psicoacústica es la rama de la acústica que estudia la percepción subjetiva del sonido por el ser humano. Investiga cómo el sistema auditivo humano procesa las ondas sonoras y cómo el cerebro interpreta estas señales.
      </Important>
      <Concept title="Diferencia con la acústica física">
        <p>
          A diferencia de la acústica física que mide propiedades objetivas del sonido (frecuencia, amplitud, fase), la psicoacústica se enfoca en cómo percibimos estas propiedades (tono, volumen, timbre).
        </p>
      </Concept>
    </TheorySection>

    <TheorySection title="Propiedades Perceptuales del Sonido">
      <Concept title="Sonoridad (Loudness)">
        <p>
          La sonoridad es la percepción subjetiva de la intensidad del sonido. Se mide en fonos o sones.
        </p>
        <Formula
          expression={String.raw`S = 2^{(\beta - 40)/10}`}
          calculatorId="psicoacustica-grupo-1"
          definitions={definitions}
          exercises={exercises}
        />
        <p>Donde:</p>
        <ul>
          <li>S: Sonoridad (sones)</li>
          <li>β: Nivel de intensidad (dB)</li>
        </ul>
        <ul>
          <li>Fono: Unidad de nivel de sonoridad (relacionada con dB)</li>
          <li>Sone: Unidad de sonoridad (escala lineal)</li>
          <li>Umbral de audición: 0 dB SPL a 1 kHz</li>
          <li>Umbral de dolor: ~120-130 dB SPL</li>
        </ul>
        <Important>
          Curvas de Fletcher-Munson: Muestran que la sensibilidad del oído varía con la frecuencia. A bajas intensidades, somos menos sensibles a frecuencias bajas y muy altas.
        </Important>
      </Concept>
      <Concept title="Tono (Pitch)">
        <p>
          El tono es la percepción subjetiva de la frecuencia del sonido. Aunque está relacionado con la frecuencia, no es lo mismo:
        </p>
        <ul>
          <li>Frecuencia alta: Percibida como tono agudo</li>
          <li>Frecuencia baja: Percibida como tono grave</li>
          <li>Rango audible: 20 Hz a 20,000 Hz (varía con la edad)</li>
          <li>Máxima sensibilidad: Entre 2,000 y 5,000 Hz</li>
        </ul>
        <Important>
          Nota: La percepción del tono no es lineal. Una duplicación de frecuencia se percibe como un intervalo de octava, independientemente de la frecuencia inicial.
        </Important>
      </Concept>
      <Concept title="Timbre">
        <p>
          El timbre es la cualidad que permite distinguir dos sonidos con el mismo tono y sonoridad. Depende de:
        </p>
        <ul>
          <li>Armónicos: Frecuencias múltiplos de la fundamental</li>
          <li>Envolvente temporal: Ataque, sostenimiento, decaimiento</li>
          <li>Modulaciones: Vibrato, trémolo</li>
          <li>Ruido: Componentes no armónicos</li>
        </ul>
        <p>
          El timbre es lo que nos permite distinguir un violín de un piano tocando la misma nota.
        </p>
      </Concept>
    </TheorySection>

    <TheorySection title="Fenómenos Psicoacústicos">
      <Concept title="Enmascaramiento">
        <p>
          El enmascaramiento ocurre cuando un sonido (enmascarador) impide la percepción de otro sonido (enmascarado):
        </p>
        <ul>
          <li>Enmascaramiento simultáneo: Ambos sonidos ocurren al mismo tiempo</li>
          <li>Enmascaramiento temporal: El enmascarador afecta sonidos antes o después</li>
          <li>Enmascaramiento en frecuencia: Más efectivo en frecuencias cercanas</li>
        </ul>
        <Important>
          Aplicación: Compresión de audio (MP3, AAC) elimina información enmascarada.
        </Important>
      </Concept>
      <Concept title="Efecto de Precedencia (Haas)">
        <p>
          Cuando escuchamos el mismo sonido desde dos fuentes con un retraso menor a ~40 ms, percibimos un solo sonido proveniente de la fuente que llegó primero.
        </p>
        <ul>
          <li>Retraso &lt; 1 ms: Fusión completa, cambio de timbre</li>
          <li>1-5 ms: Localización hacia la primera fuente</li>
          <li>5-40 ms: Efecto de precedencia máximo</li>
          <li>&gt; 40 ms: Percepción de eco</li>
        </ul>
        <Important>
          Aplicación: Diseño de sistemas de sonido en auditorios.
        </Important>
      </Concept>
      <Concept title="Bandas Críticas">
        <p>
          El oído humano divide el espectro de frecuencias en aproximadamente 24 bandas críticas. Sonidos dentro de la misma banda crítica interactúan más fuertemente.
        </p>
        <Formula
          expression={String.raw`\Delta f = 25 + 75\left(1 + 1.4\left(\frac{f}{1000}\right)^2\right)^{0.69}`}
          calculatorId="psicoacustica-grupo-3"
          definitions={definitions}
          exercises={exercises}
        />
        <p>Donde:</p>
        <ul>
          <li>Δf: Ancho de banda crítica (Hz)</li>
          <li>f: Frecuencia central (Hz)</li>
        </ul>
        <ul>
          <li>Ancho: ~100 Hz en bajas frecuencias, aumenta con la frecuencia</li>
          <li>Función: Base del procesamiento auditivo</li>
          <li>Relación: Escala de Bark (24 bandas críticas)</li>
          <li>Aplicación: Enmascaramiento, compresión de audio (MP3, AAC)</li>
        </ul>
      </Concept>
      <Concept title="Tonos Combinados">
        <p>
          Cuando dos tonos puros se presentan simultáneamente, el oído puede generar tonos adicionales que no están presentes en el estímulo:
        </p>
        <p>Tono Diferencial:</p>
        <Formula
          expression={String.raw`f_d = |f_2 - f_1|`}
          calculatorId="psicoacustica-grupo-3"
          definitions={definitions}
          exercises={exercises}
        />
        <p>Donde:</p>
        <ul>
          <li>fₐ: Frecuencia del tono diferencial (Hz)</li>
          <li>f₁, f₂: Frecuencias de los tonos presentados (Hz)</li>
        </ul>
        <p>Tono de Suma:</p>
        <Formula
          expression={String.raw`f_s = f_1 + f_2`}
          calculatorId="psicoacustica-grupo-3"
          definitions={definitions}
          exercises={exercises}
        />
        <p>Donde:</p>
        <ul>
          <li>fₛ: Frecuencia del tono de suma (Hz)</li>
          <li>f₁, f₂: Frecuencias de los tonos presentados (Hz)</li>
        </ul>
        <ul>
          <li>Tono diferencial: f₂ - f₁ (más común y audible)</li>
          <li>Tono de suma: f₁ + f₂ (menos audible)</li>
          <li>Tonos cúbicos: 2f₁ - f₂, 2f₂ - f₁ (productos de distorsión)</li>
        </ul>
        <Important>
          Estos tonos se generan por no linealidades en el sistema auditivo.
        </Important>
      </Concept>
    </TheorySection>

    <TheorySection title="Localización Espacial del Sonido">
      <Concept title="Claves Binaurales">
        <p>
          El cerebro usa diferencias entre los oídos para localizar sonidos:
        </p>
        <p>Diferencia Interaural de Tiempo (ITD):</p>
        <Formula
          expression={String.raw`ITD = \frac{a \sin(\theta)}{c}`}
          calculatorId="psicoacustica-grupo-2"
          definitions={definitions}
          exercises={exercises}
        />
        <p>Donde:</p>
        <ul>
          <li>ITD: Diferencia interaural de tiempo (ms)</li>
          <li>a: Distancia entre oídos (~0.18 m)</li>
          <li>θ: Ángulo de azimut (grados)</li>
          <li>c: Velocidad del sonido (343 m/s)</li>
        </ul>
        <p>Diferencia Interaural de Nivel (ILD):</p>
        <Formula
          expression={String.raw`ILD = 20 \log_{10}\left(\frac{d_2}{d_1}\right)`}
          calculatorId="psicoacustica-grupo-2"
          definitions={definitions}
          exercises={exercises}
        />
        <p>Donde:</p>
        <ul>
          <li>ILD: Diferencia interaural de nivel (dB)</li>
          <li>d₁: Distancia al oído cercano (m)</li>
          <li>d₂: Distancia al oído lejano (m)</li>
        </ul>
        <ul>
          <li>ITD: Efectivo para frecuencias bajas (&lt;1500 Hz)</li>
          <li>ILD: Efectivo para frecuencias altas (&gt;1500 Hz)</li>
          <li>Aplicación: Localización horizontal (azimut)</li>
        </ul>
      </Concept>
      <Concept title="Claves Espectrales">
        <p>
          La forma del pabellón auditivo (oreja) modifica el espectro del sonido según su dirección:
        </p>
        <ul>
          <li>HRTF: Head-Related Transfer Function</li>
          <li>Función: Localización vertical y frontal/posterior</li>
          <li>Individual: Varía entre personas</li>
        </ul>
        <Important>
          Aplicación: Audio 3D, realidad virtual.
        </Important>
      </Concept>
    </TheorySection>

    {/* 6. APLICACIONES */}
    <div className="theory-applications-section" title="Aplicaciones en la vida real" type="applications">
      <div className="theory-subsection">
        <h3>🎵 Compresión de Audio Digital</h3>
        <ul>
          <li>MP3 (1993): Reduce archivos de audio a 1/10 del tamaño eliminando frecuencias enmascaradas. Un archivo de 50 MB se convierte en 5 MB sin pérdida perceptible para la mayoría de oyentes.</li>
          <li>AAC (usado por Apple/YouTube): Mejora del MP3, usa modelos más sofisticados de enmascaramiento temporal y frecuencial.</li>
          <li>Opus (usado por WhatsApp/Discord): Códec moderno que adapta la compresión en tiempo real según el contenido (voz vs música).</li>
          <li>Impacto: Sin psicoacústica, no existirían Spotify, YouTube Music, o streaming de audio. ¡La música digital moderna depende de ella!</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🎧 Tecnología de Audio</h3>
        <ul>
          <li>Cancelación activa de ruido (ANC): Auriculares como AirPods Pro o Sony WH-1000XM5 usan enmascaramiento y cancelación de fase para eliminar ruido ambiental.</li>
          <li>Audio espacial: Dolby Atmos, Apple Spatial Audio y DTS:X crean sensación 3D usando ITD, ILD y HRTF personalizada.</li>
          <li>Ecualización adaptativa: Auriculares que ajustan automáticamente el sonido según tu perfil auditivo y el ruido ambiental.</li>
          <li>Compresión dinámica: Reduce el rango dinámico para escuchar música en ambientes ruidosos sin perder detalles.</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🏥 Medicina y Audífonos</h3>
        <ul>
          <li>Audífonos digitales: Usan curvas isofónicas para amplificar selectivamente las frecuencias que el usuario ha perdido, sin amplificar todo.</li>
          <li>Terapia para tinnitus: Generadores de ruido que enmascaran el zumbido usando principios de enmascaramiento frecuencial.</li>
          <li>Implantes cocleares: Estimulan diferentes regiones de la cóclea según la frecuencia, imitando la tonotopía natural.</li>
          <li>Audiometrías avanzadas: Miden no solo umbrales, sino también enmascaramiento y resolución frecuencial.</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>📞 Telecomunicaciones</h3>
        <ul>
          <li>Códecs de voz: Skype, Zoom y Teams usan códecs que eliminan frecuencias no esenciales para el habla (fuera de 300-3400 Hz).</li>
          <li>Supresión de eco: Elimina el eco en videollamadas usando modelos de enmascaramiento temporal.</li>
          <li>Reducción de ruido de fondo: Krisp, NVIDIA RTX Voice usan IA entrenada con modelos psicoacústicos para separar voz de ruido.</li>
          <li>5G y VoLTE: Usan códecs avanzados (EVS) que adaptan la calidad según el ancho de banda disponible.</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🎬 Cine y Entretenimiento</h3>
        <ul>
          <li>Mezcla de audio cinematográfico: Ingenieros usan enmascaramiento para que diálogos destaquen sobre música y efectos.</li>
          <li>Efectos de sonido: Diseñados en frecuencias de máxima sensibilidad (2-5 kHz) para máximo impacto emocional.</li>
          <li>Ilusiones auditivas: Tono de Shepard usado en Dunkirk, Inception y The Dark Knight para crear tensión infinita.</li>
          <li>Sistemas de cine en casa: Dolby Atmos y DTS:X crean experiencias inmersivas usando localización binaural.</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🎮 Videojuegos</h3>
        <ul>
          <li>Audio posicional: Juegos como CS:GO, Valorant y Call of Duty usan ITD/ILD para que puedas localizar enemigos por el sonido.</li>
          <li>Reverberación adaptativa: El sonido cambia según el espacio virtual (cueva, catedral, exterior).</li>
          <li>Compresión en tiempo real: Consolas comprimen audio usando psicoacústica para ahorrar memoria sin perder calidad.</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🎼 Producción Musical</h3>
        <ul>
          <li>Masterización: Ingenieros usan enmascaramiento para crear mezclas donde cada instrumento tiene su "espacio" frecuencial.</li>
          <li>Compresión multibanda: Procesa diferentes bandas de frecuencia según su importancia perceptual.</li>
          <li>Síntesis de sonido: Instrumentos virtuales que suenan "reales" porque incluyen armónicos y envolventes que el oído espera.</li>
          <li>Loudness normalization: Spotify, YouTube y Apple Music usan LUFS (basado en curvas isofónicas) para normalizar volumen entre canciones.</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🏗️ Arquitectura Acústica</h3>
        <ul>
          <li>Diseño de salas: Optimizadas para frecuencias de máxima sensibilidad (2-5 kHz) donde está el habla y la música.</li>
          <li>Materiales absorbentes: Seleccionados según qué frecuencias necesitan atenuarse (basado en bandas críticas).</li>
          <li>Sistemas de refuerzo sonoro: Usan modelos de enmascaramiento para evitar que altavoces interfieran entre sí.</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🚗 Industria Automotriz</h3>
        <ul>
          <li>Cancelación de ruido activa: Coches de lujo usan micrófonos y altavoces para cancelar ruido del motor y carretera.</li>
          <li>Alertas sonoras: Diseñadas en frecuencias de máxima detectabilidad (~3000 Hz) para asegurar que se escuchen.</li>
          <li>Sonido de motor sintético: Coches eléctricos generan sonidos artificiales para peatones, optimizados psicoacústicamente.</li>
        </ul>
      </div>
      <div className="theory-section-highlight">
        <p>
          💡 Impacto global: La psicoacústica no es solo teoría académica. 
          Es la base de una industria de billones de dólares que incluye 
          streaming de música, telecomunicaciones, videojuegos, cine, y tecnología de audio. 
          Cada vez que usas Spotify, haces una videollamada, o juegas online, estás usando 
          psicoacústica sin saberlo.
        </p>
      </div>
    </div>

    <div className="theory-history-section" title="Historia: Los pioneros de la psicoacústica" type="history">
      <div className="theory-subsection">
        <h3>🎵 Hermann von Helmholtz (1821-1894)</h3>
        <p>El físico y fisiólogo alemán Hermann von Helmholtz es considerado el padre de la psicoacústica. Su obra "On the Sensations of Tone" (1863) estableció las bases científicas de la percepción auditiva.</p>
        <p>Contribuciones clave:</p>
        <ul>
          <li>Teoría de la resonancia de la cóclea (precursora de la teoría de lugar)</li>
          <li>Análisis de armónicos y timbre</li>
          <li>Explicación de consonancia y disonancia</li>
          <li>Invención del resonador de Helmholtz</li>
        </ul>
        <p>Anécdota: Helmholtz era también músico aficionado. Construyó una serie de resonadores esféricos de diferentes tamaños para analizar los componentes de frecuencia de sonidos complejos, ¡el primer "analizador de espectro" mecánico!</p>
      </div>
      <div className="theory-subsection">
        <h3>🔊 Harvey Fletcher (1884-1981)</h3>
        <p>Trabajando en Bell Labs, Fletcher desarrolló el concepto de bandas críticas y creó los primeros diagramas de igual sonoridad (curvas de Fletcher-Munson, 1933).</p>
        <p>Legado: Sus investigaciones fueron fundamentales para el desarrollo de la telefonía, la compresión de audio y los audífonos. También fue pionero en el audio estereofónico.</p>
      </div>
      <div className="theory-subsection">
        <h3>👂 Georg von Békésy (1899-1972)</h3>
        <p>Ganó el Premio Nobel de Medicina en 1961 por descubrir el mecanismo físico de estimulación dentro de la cóclea. Demostró que diferentes frecuencias estimulan diferentes regiones de la membrana basilar.</p>
        <p>Experimento legendario: Békésy construyó modelos mecánicos gigantes de la cóclea y también experimentó con su propio oído, perforando su tímpano para insertar instrumentos de medición. ¡Dedicación extrema a la ciencia!</p>
      </div>
      <div className="theory-subsection">
        <h3>🎚️ Stanley Smith Stevens (1906-1973)</h3>
        <p>Psicólogo de Harvard que desarrolló la escala de sonoridad en sones y la ley de potencia de Stevens, que describe la relación entre estímulo físico y percepción.</p>
        <p>Innovación: Introdujo métodos psicofísicos rigurosos para medir la percepción subjetiva, estableciendo la psicoacústica como ciencia cuantitativa.</p>
      </div>
      <div className="theory-subsection">
        <h3>🔬 Ernst Terhardt (1934-2022)</h3>
        <p>Desarrolló la teoría del tono virtual en los años 1970s, explicando cómo percibimos tonos fundamentales que no están físicamente presentes en el sonido.</p>
        <p>Aplicación moderna: Su trabajo es fundamental para la compresión de audio (MP3, AAC) y la síntesis de sonido en dispositivos pequeños como teléfonos móviles.</p>
      </div>
    </div>

    <div className="theory-anecdotes-section" title="Anécdotas y curiosidades psicoacústicas" type="anecdotes">
      <div className="theory-subsection">
        <h3>🎧 El "tono fantasma" del MP3</h3>
        <p>Los códecs de audio como MP3 eliminan frecuencias que "no deberíamos oír" según modelos psicoacústicos. Sin embargo, algunos oyentes entrenados (especialmente músicos) pueden detectar la diferencia entre un archivo sin comprimir y uno MP3 a 320 kbps.</p>
        <p>Debate: ¿Es real o placebo? Estudios doble ciego muestran que solo ~5% de personas pueden distinguirlos consistentemente. ¡La psicoacústica no es perfecta para todos!</p>
      </div>
      <div className="theory-subsection">
        <h3>🔇 El "silencio más ruidoso"</h3>
        <p>En cámaras anecoicas (lugares extremadamente silenciosos), las personas empiezan a escuchar su propio cuerpo: corazón latiendo, sangre fluyendo, articulaciones crujiendo. Algunos incluso reportan alucinaciones auditivas.</p>
        <p>Explicación: El cerebro está acostumbrado a ruido de fondo constante. En ausencia total de sonido, amplifica su "ganancia" interna, haciendo audibles sonidos normalmente imperceptibles e incluso generando ruido neural aleatorio que interpretamos como sonido.</p>
      </div>
      <div className="theory-subsection">
        <h3>🎵 El "tono de Shepard": la escalera infinita</h3>
        <p>Roger Shepard creó en 1964 un tono que parece subir infinitamente sin llegar nunca a ningún lado. Es una ilusión auditiva similar a la escalera de Penrose visual.</p>
        <p>Cómo funciona: Combina múltiples octavas con volúmenes que aumentan y disminuyen gradualmente. El cerebro se enfoca en las frecuencias medias que suben, ignorando las que desaparecen y aparecen en los extremos.</p>
        <p>Uso en cine: Hans Zimmer lo usó en "Dunkirk" para crear tensión constante. Christopher Nolan también lo usó en "The Dark Knight" y "Inception".</p>
      </div>
      <div className="theory-subsection">
        <h3>👶 Los bebés y la música</h3>
        <p>Los bebés de 6 meses pueden distinguir cualquier intervalo musical de cualquier cultura, incluyendo microtonos que los adultos occidentales no pueden percibir. A los 12 meses, esta habilidad se "especializa" en la música de su cultura.</p>
        <p>Implicación: La percepción musical no es completamente innata, sino que se moldea por la exposición cultural. ¡Somos "programados" por la música que escuchamos de bebés!</p>
      </div>
      <div className="theory-subsection">
        <h3>🎸 El "tono perdido" de Jimi Hendrix</h3>
        <p>Algunos guitarristas afirman que el sonido único de Jimi Hendrix no puede ser replicado, incluso con el mismo equipo. Análisis psicoacústicos sugieren que parte de su sonido venía de distorsión armónica específica de sus amplificadores vintage sobrecargados.</p>
        <p>Curiosidad: Los amplificadores modernos son "demasiado perfectos". Los músicos buscan amplificadores vintage porque sus "imperfecciones" (distorsión armónica, compresión natural) crean tonos que el oído humano encuentra más "cálidos" y "musicales".</p>
      </div>
      <div className="theory-subsection">
        <h3>🦇 Ecolocalización humana</h3>
        <p>Daniel Kish, ciego desde bebé, desarrolló la capacidad de "ver" con sonido haciendo chasquidos con la lengua y escuchando los ecos. Puede andar en bicicleta, hacer senderismo y navegar por ciudades.</p>
        <p>Neurociencia: Estudios de fMRI muestran que su corteza visual se activa cuando procesa ecos. Su cerebro literalmente "ve" con los oídos, demostrando la plasticidad neuronal y las capacidades ocultas del sistema auditivo humano.</p>
      </div>
      <div className="theory-subsection">
        <h3>🎼 El "acorde del diablo"</h3>
        <p>El tritono (intervalo de tres tonos enteros) fue llamado "diabolus in musica" en la Edad Media y prohibido por la Iglesia. Psicoacústicamente, crea una sensación de tensión porque su relación de frecuencias (45:32) no es simple.</p>
        <p>Uso moderno: Es fundamental en el blues, jazz y rock. La intro de "Black Sabbath" de Black Sabbath usa un tritono, ¡aprovechando su sonido "diabólico" intencionalmente!</p>
      </div>
      <div className="theory-subsection">
        <h3>🔊 El "efecto McGurk"</h3>
        <p>Si ves un video de alguien diciendo "ga-ga" pero el audio dice "ba-ba", tu cerebro puede escuchar "da-da". La visión influye en lo que oímos.</p>
        <p>Implicación: La percepción auditiva no es solo auditiva. El cerebro integra información visual, táctil y contextual. Por eso la música en vivo "suena mejor" que grabada, ¡parte de la experiencia es visual!</p>
      </div>
    </div>

    {/* 9. RESUMEN */}
    <TheorySection className="theory-summary-section" title="Pérdida Auditiva">
      <Important>
        <p>
          La exposición prolongada a sonidos intensos puede causar daño permanente:
        </p>
        <ul>
          <li>85 dB: Límite seguro para 8 horas de exposición</li>
          <li>100 dB: Límite seguro para 15 minutos</li>
          <li>120 dB: Umbral de dolor, daño inmediato</li>
        </ul>
        <p>
          La pérdida auditiva inducida por ruido (NIHL) es irreversible y afecta primero las frecuencias altas (~4 kHz).
        </p>
      </Important>
    </TheorySection>
  </>
);

export default PsicoacusticaTheory;
