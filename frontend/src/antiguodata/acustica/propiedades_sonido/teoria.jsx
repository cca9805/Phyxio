// 1. IMPORTACIONES
import { TheorySection, Concept, Important, Example, Formula } from '../../../components/TheoryV2';
import { definitions } from './definitions';


// 2. METADATA
export const metadata = {
  titulo: "Propiedades del sonido",
  descripcion: "Intensidad, frecuencia y timbre: las tres propiedades fundamentales del sonido. Cómo se miden, cómo se perciben y cómo se aplican en la vida real.",
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};


// 3. TEORÍA PRINCIPAL
const PropiedadesSonidoTheory = ({ exercises }) => (
  <>
    <TheorySection title="Propiedades fundamentales del sonido">
      <Important>
        Intensidad, frecuencia y timbre son las tres propiedades clave que determinan cómo percibimos y utilizamos el sonido en la vida diaria y en la tecnología.
      </Important>
      <Concept title="Intensidad del sonido">
        <p>
          La <strong>intensidad</strong> es la cantidad de energía que una onda sonora transporta por unidad de tiempo y por unidad de superficie perpendicular a la dirección de propagación. Se mide en W/m².
        </p>
        <Formula
          expression={String.raw`I = \frac{P}{A}`}
          calculatorId="propiedades_sonido-grupo-1"
          definitions={definitions}
          exercises={exercises}
          complementary={[
            { description: "Calcular Potencia (P)", expression: String.raw`P = I \cdot A` },
            { description: "Calcular Área (A)", expression: String.raw`A = \frac{P}{I}` }
          ]}
        />
        <p><strong>Donde:</strong></p>
        <ul>
          <li>I: Intensidad (W/m²)</li>
          <li>P: Potencia (W)</li>
          <li>A: Área (m²)</li>
        </ul>
        <Example title="Ejemplo práctico: Cálculo de intensidad">
          Si una fuente sonora emite 5 W de potencia y el área de propagación es 2 m², la intensidad será:
          <br />
          I = 5 / 2 = 2.5 W/m²
        </Example>
      </Concept>
      <Concept title="Nivel de Intensidad Sonora (Decibeles)">
        <Formula
          expression={String.raw`\beta = 10 \log_{10}\left(\frac{I}{I_0}\right)`}
          calculatorId="propiedades_sonido-grupo-1"
          definitions={definitions}
          exercises={exercises}
          complementary={[
            { description: "Calcular Intensidad (I)", expression: String.raw`I = I_0 \cdot 10^{\beta/10}` }
          ]}
        />
        <p><strong>Donde:</strong></p>
        <ul>
          <li>β: Nivel de intensidad (dB)</li>
          <li>I: Intensidad del sonido (W/m²)</li>
          <li>I₀: Intensidad de referencia = 10⁻¹² W/m²</li>
        </ul>
        <Example title="Ejemplo práctico: Decibeles">
          Si la intensidad de un sonido es 1 × 10⁻⁶ W/m², su nivel en decibeles será:
          <br />
          β = 10 log₁₀(1×10⁻⁶ / 1×10⁻¹²) = 60 dB
        </Example>
      </Concept>
      <Concept title="Escala de Decibeles">
        <ul>
          <li>0 dB: Umbral de audición</li>
          <li>30 dB: Susurro</li>
          <li>60 dB: Conversación normal</li>
          <li>90 dB: Tráfico intenso</li>
          <li>120 dB: Umbral del dolor</li>
          <li>140 dB: Avión despegando</li>
        </ul>
      </Concept>
    </TheorySection>

    <TheorySection title="Frecuencia y Tono">
      <Important>
        La frecuencia determina el tono del sonido: frecuencias altas producen sonidos agudos, frecuencias bajas producen sonidos graves.
      </Important>
      <Concept title="Notas Musicales">
        <ul>
          <li>La central (A4): 440 Hz</li>
          <li>Do central (C4): 261.63 Hz</li>
          <li>Octava: Duplicar la frecuencia</li>
        </ul>
        <Example title="Ejemplo práctico: Octava">
          Si una nota tiene 220 Hz, la nota una octava superior será 440 Hz.
        </Example>
      </Concept>
    </TheorySection>

    <TheorySection title="Timbre">
      <Important>
        El timbre permite distinguir dos sonidos de igual intensidad y frecuencia producidos por fuentes diferentes. Depende de los armónicos presentes en el sonido.
      </Important>
      <Concept title="Armónicos">
        <Formula
          expression={String.raw`f_n = n \cdot f_1`}
          calculatorId="propiedades_sonido-grupo-1"
          definitions={definitions}
          exercises={exercises}
          complementary={[
            { description: "Calcular Frecuencia Fundamental (f₁)", expression: String.raw`f_1 = \frac{f_n}{n}` },
            { description: "Calcular Número de Armónico (n)", expression: String.raw`n = \frac{f_n}{f_1}` }
          ]}
        />
        <p><strong>Donde:</strong></p>
        <ul>
          <li>fₙ: Frecuencia del armónico n (Hz)</li>
          <li>n: Número del armónico (1, 2, 3, ...)</li>
          <li>f₁: Frecuencia fundamental (Hz)</li>
        </ul>
        <Example title="Ejemplo práctico: Armónicos">
          Si la frecuencia fundamental de una cuerda es 200 Hz, el tercer armónico será:
          <br />
          f₃ = 3 × 200 Hz = 600 Hz
        </Example>
      </Concept>
    </TheorySection>

    <TheorySection title="Intensidad y Distancia">
      <Concept title="Intensidad de Fuente Puntual">
        <Formula
          expression={String.raw`I = \frac{P}{4\pi r^2}`}
          calculatorId="propiedades_sonido-grupo-1"
          definitions={definitions}
          exercises={exercises}
          complementary={[
            { description: "Calcular Distancia (r)", expression: String.raw`r = \sqrt{\frac{P}{4\pi I}}` },
            { description: "Calcular Potencia (P)", expression: String.raw`P = I \cdot 4\pi r^2` }
          ]}
        />
        <p><strong>Donde:</strong></p>
        <ul>
          <li>I: Intensidad (W/m²)</li>
          <li>P: Potencia de la fuente (W)</li>
          <li>r: Distancia a la fuente (m)</li>
        </ul>
        <p>
          La intensidad disminuye con el cuadrado de la distancia (ley del inverso del cuadrado).
        </p>
        <Example title="Ejemplo práctico: Intensidad y distancia">
          Si una fuente de 10 W emite sonido de forma esférica, ¿cuál es la intensidad a 2 m?
          <br />
          I = 10 / (4π × 2²) ≈ 0.199 W/m²
        </Example>
      </Concept>
    </TheorySection>

    {/* 5. OTRAS CONSIDERACIONES (opcional, omitido si no aplica) */}

    {/* 6. APLICACIONES */}
    <div className="theory-applications-section" title="Aplicaciones en la vida real">
      <h2><span role="img" aria-label="aplicaciones">🌍</span> Aplicaciones en la vida real</h2>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="música">🎵</span> Música y Audio</h3>
        <ul>
          <li>Afinación de instrumentos: Los afinadores electrónicos miden la frecuencia exacta para ajustar instrumentos al estándar A440 Hz</li>
          <li>Ecualizadores: Ajustan la intensidad de diferentes frecuencias para mejorar la calidad del sonido</li>
          <li>Compresores de audio: Controlan la intensidad para evitar distorsión y mejorar la claridad</li>
          <li>Síntesis de sonido: Creación de timbres artificiales combinando diferentes armónicos</li>
          <li>Mezcla y masterización: Balance de intensidades y frecuencias para producción musical profesional</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="acústica">🏛️</span> Acústica Arquitectónica</h3>
        <ul>
          <li>Salas de conciertos: Diseño para optimizar la intensidad y distribución del sonido sin amplificación</li>
          <li>Estudios de grabación: Control del timbre mediante materiales absorbentes y difusores</li>
          <li>Teatros: Geometría diseñada para que la intensidad sea uniforme en todas las butacas</li>
          <li>Aulas y oficinas: Reducción de reverberación para mejorar la inteligibilidad del habla</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="protección">🛡️</span> Control de Ruido y Protección</h3>
        <ul>
          <li>Medidores de decibelios: Monitoreo de niveles de intensidad en lugares de trabajo y ocio</li>
          <li>Barreras acústicas: Reducción de intensidad del tráfico en zonas residenciales</li>
          <li>Protección auditiva: Tapones y orejeras diseñados para reducir intensidad sin distorsionar frecuencias</li>
          <li>Normativa laboral: Límites de intensidad (85 dB) para prevenir daño auditivo</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="tecnología">🔊</span> Tecnología de Audio</h3>
        <ul>
          <li>Altavoces: Diseño de woofers (graves), tweeters (agudos) según frecuencias que reproducen</li>
          <li>Micrófonos: Diferentes tipos capturan mejor ciertas frecuencias (dinámicos, condensador, ribbon)</li>
          <li>Formatos de compresión: MP3, AAC eliminan frecuencias que el oído humano detecta menos (psicoacústica)</li>
          <li>Sistemas de sonido envolvente: Distribución de intensidad en múltiples canales (5.1, 7.1, Atmos)</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="medicina">🏥</span> Medicina y Diagnóstico</h3>
        <ul>
          <li>Audiometrías: Medición de umbrales de intensidad y frecuencia para detectar pérdida auditiva</li>
          <li>Timpanometría: Evaluación de la función del oído medio mediante cambios de presión</li>
          <li>Audífonos: Amplificación selectiva de frecuencias según el tipo de pérdida auditiva</li>
          <li>Implantes cocleares: Estimulación eléctrica que simula diferentes frecuencias</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="dispositivos">📱</span> Dispositivos Inteligentes</h3>
        <ul>
          <li>Reconocimiento de voz: Análisis de frecuencias y timbres para identificar palabras y hablantes</li>
          <li>Cancelación activa de ruido: Generación de ondas inversas para reducir intensidad de ruido ambiental</li>
          <li>Asistentes virtuales: Filtrado de frecuencias para aislar voz humana del ruido de fondo</li>
          <li>Apps de medición: Sonómetros en smartphones para medir intensidad ambiental</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="cine">🎬</span> Cine y Entretenimiento</h3>
        <ul>
          <li>Efectos de sonido: Manipulación de frecuencias e intensidad para crear atmósferas</li>
          <li>Doblaje: Igualación de timbre entre voces originales y dobladas</li>
          <li>Diseño sonoro: Creación de paisajes sonoros con diferentes intensidades y frecuencias</li>
          <li>Salas IMAX: Sistemas de alta intensidad (hasta 100 dB) con control preciso de frecuencias</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="investigación">🔬</span> Investigación y Forense</h3>
        <ul>
          <li>Análisis de voz: Identificación de personas por el timbre único de su voz</li>
          <li>Autenticidad de grabaciones: Detección de manipulaciones mediante análisis espectral</li>
          <li>Bioacústica: Estudio de comunicación animal mediante análisis de frecuencias</li>
        </ul>
      </div>
      <div className="theory-section-highlight">
        <p>
          💡 Conexión con la vida diaria: Cada vez que ajustas el volumen de tu móvil (intensidad), cambias de emisora de radio (frecuencia), o reconoces la voz de un amigo (timbre), estás experimentando las tres propiedades fundamentales del sonido. Estas propiedades no son conceptos abstractos, son la base de toda la tecnología de audio que usamos a diario.
        </p>
      </div>
    </div>

    {/* 7. HECHOS HISTÓRICOS */}
    <div className="theory-history-section" title="Historia: Midiendo el sonido">
      <h2><span role="img" aria-label="historia">📜</span> Historia: Midiendo el sonido</h2>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="pitágoras">🎵</span> Pitágoras y las proporciones musicales (s. VI a.C.)</h3>
        <p>
          Pitágoras descubrió que las cuerdas con longitudes en proporciones simples (1:2, 2:3, 3:4) producen sonidos armoniosos. Fue el primer estudio cuantitativo de las propiedades del sonido, relacionando matemáticas con percepción auditiva.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="chladni">🔬</span> Ernst Chladni y las figuras acústicas (1787)</h3>
        <p>
          El físico alemán Ernst Chladni visualizó las vibraciones sonoras esparciendo arena sobre placas metálicas y haciéndolas vibrar con un arco de violín. La arena formaba patrones geométricos (figuras de Chladni) que mostraban los nodos y antinodos de las ondas. Demostró que el timbre depende de los modos de vibración.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="bell">📊</span> Alexander Graham Bell y el decibel (1920s)</h3>
        <p>
          La unidad decibel (dB) fue nombrada en honor a Alexander Graham Bell, inventor del teléfono. Originalmente se llamaba "bel", pero resultó ser una unidad demasiado grande, por lo que se adoptó el decibel (1/10 de bel).
        </p>
        <p>
          ¿Por qué escala logarítmica? El oído humano percibe la intensidad de forma logarítmica. Un sonido 10 veces más intenso no se percibe como "10 veces más fuerte", sino como "el doble de fuerte". La escala de decibeles refleja esta percepción.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="fourier">🎼</span> Joseph Fourier y el análisis espectral (1822)</h3>
        <p>
          El matemático francés Joseph Fourier demostró que cualquier señal periódica (incluido el sonido) puede descomponerse en una suma de ondas sinusoidales simples (serie de Fourier). Esto explicó matemáticamente el timbre: diferentes instrumentos tienen diferentes combinaciones de armónicos.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="fletcher">🔊</span> Harvey Fletcher y las curvas de igual sonoridad (1933)</h3>
        <p>
          El físico estadounidense Harvey Fletcher (Bell Labs) creó las curvas de Fletcher-Munson, que muestran cómo el oído humano percibe diferentes frecuencias a distintas intensidades. Descubrió que somos más sensibles a frecuencias entre 2-5 kHz (rango de la voz humana).
        </p>
        <p>
          Aplicación práctica: Los controles de "loudness" en equipos de audio compensan estas curvas, aumentando graves y agudos a volumen bajo.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="a440">🎹</span> Estándar de afinación A440 (1939)</h3>
        <p>
          En 1939, una conferencia internacional estableció que el La central (A4) debe ser 440 Hz. Antes de esto, cada país y orquesta usaba afinaciones diferentes (entre 415-466 Hz), causando problemas cuando músicos de diferentes lugares tocaban juntos.
        </p>
        <p>
          Curiosidad: Algunos músicos prefieren A432 Hz, alegando que suena "más natural", pero no hay evidencia científica de esto.
        </p>
      </div>
    </div>

    {/* 8. DATOS ANECDÓTICOS */}
    <div className="theory-anecdotes-section" title="Anécdotas y casos fascinantes">
      <h2><span role="img" aria-label="anécdotas">✨</span> Anécdotas y curiosidades</h2>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="krakatoa">🔊</span> El sonido más fuerte jamás registrado</h3>
        <p>
          La erupción del volcán Krakatoa en 1883 produjo el sonido más fuerte de la historia moderna: 310 dB a 160 km de distancia. Se escuchó a 4,800 km (como escuchar algo en Madrid desde Nueva York). La onda de presión dio la vuelta al mundo 7 veces.
        </p>
        <p>
          Comparación: 194 dB es el límite teórico del sonido en aire (presión atmosférica completa). Por encima de eso, ya no es "sonido" sino una onda de choque.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="stradivarius">🎸</span> El timbre único de un Stradivarius</h3>
        <p>
          Los violines Stradivarius (hechos por Antonio Stradivari en 1700s) son famosos por su timbre único. ¿Por qué? Análisis espectrales muestran que tienen armónicos más equilibrados que violines modernos. Teorías:
        </p>
        <ul>
          <li>Madera tratada con minerales específicos</li>
          <li>Barniz con composición química única</li>
          <li>Pequeña Edad de Hielo: madera más densa</li>
          <li>Geometría exacta de las cajas de resonancia</li>
        </ul>
        <p>
          Valor: Un Stradivarius puede costar más de $15 millones. Solo quedan unos 650 en el mundo.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="voz">🎤</span> La voz humana: Un instrumento complejo</h3>
        <p>
          La voz humana tiene un timbre único porque combina:
        </p>
        <ul>
          <li>Frecuencia fundamental: Determinada por las cuerdas vocales (80-250 Hz)</li>
          <li>Formantes: Resonancias de la garganta, boca y nariz (500-3500 Hz)</li>
          <li>Armónicos: Hasta 20 armónicos audibles</li>
        </ul>
        <p>
          Reconocimiento: Puedes identificar a alguien por teléfono (que filtra frecuencias) porque los formantes son únicos para cada persona, como una huella digital acústica.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="silencio">🔇</span> El silencio más silencioso del mundo</h3>
        <p>
          La cámara anecoica de Microsoft en Redmond tiene un nivel de ruido de -20.6 dB (por debajo del umbral de audición). Es tan silenciosa que:
        </p>
        <ul>
          <li>Puedes escuchar tu corazón latiendo</li>
          <li>Escuchas tus pulmones respirando</li>
          <li>Escuchas tu sangre circulando</li>
          <li>La mayoría de personas no aguanta más de 45 minutos (desorientación)</li>
        </ul>
        <p>
          Uso: Probar micrófonos, altavoces y dispositivos electrónicos sin interferencias.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="oído-absoluto">🎵</span> El "tono perfecto" o oído absoluto</h3>
        <p>
          Solo el 1 en 10,000 personas tiene oído absoluto: pueden identificar cualquier nota sin referencia. Mozart, Beethoven y Jimi Hendrix lo tenían. Curiosamente:
        </p>
        <ul>
          <li>Es más común en personas que hablan idiomas tonales (chino, vietnamita)</li>
          <li>Debe desarrollarse antes de los 6 años</li>
          <li>Puede ser una "maldición": las canciones desafinadas son dolorosas</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="cocktail">🔊</span> El efecto "cocktail party"</h3>
        <p>
          En una fiesta ruidosa (80 dB), puedes enfocarte en una conversación específica ignorando el resto. Tu cerebro filtra frecuencias y timbres para aislar una voz. Esto es imposible para micrófonos sin inteligencia artificial.
        </p>
        <p>
          Aplicación: Los audífonos modernos usan IA para replicar este efecto, amplificando voces y reduciendo ruido de fondo.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="notas">🎼</span> La nota más grave y más aguda</h3>
        <p>
          Nota más grave audible: 20 Hz (órgano de tubos gigantes). Más que "escucharla", la sientes vibrar en tu pecho.
        </p>
        <p>
          Nota más aguda audible: 20,000 Hz (solo niños y jóvenes). Con la edad, perdemos sensibilidad a agudos (presbiacusia).
        </p>
        <p>
          Experimento: Busca "hearing test frequency sweep" en YouTube para descubrir tu límite superior de audición.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="piano">🎹</span> El piano: 88 teclas, 230 cuerdas</h3>
        <p>
          Un piano tiene 88 teclas pero 230 cuerdas. ¿Por qué? Cada nota tiene 1-3 cuerdas afinadas a la misma frecuencia para aumentar intensidad y enriquecer el timbre. Las cuerdas vibran juntas por resonancia.
        </p>
        <p>
          Tensión total: Las 230 cuerdas ejercen unas 20 toneladas de tensión sobre el armazón de hierro del piano.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="insectos">🦗</span> Insectos y ultrasonido</h3>
        <p>
          Algunos insectos producen sonidos de 100,000 Hz (5 veces por encima de nuestro límite). Las polillas pueden detectar el ultrasonido de murciélagos y realizar maniobras evasivas en milisegundos.
        </p>
      </div>
      <div className="theory-section-highlight">
        <p>
          💡 Reflexión: Las propiedades del sonido (intensidad, frecuencia, timbre) no son solo conceptos abstractos. Determinan por qué un Stradivarius vale millones, por qué puedes reconocer voces por teléfono, por qué el Krakatoa se escuchó a 4,800 km, y por qué el silencio absoluto puede ser ensordecedor.
        </p>
      </div>
    </div>

    {/* 9. RESUMEN */}
    <TheorySection className="theory-summary-section">
      <h2><span role="img" aria-label="resumen">📝</span> Resumen</h2>
      <ul>
        <li>La intensidad, frecuencia y timbre son las propiedades fundamentales del sonido.</li>
        <li>La intensidad se mide en W/m² y decibelios; la frecuencia en Hz; el timbre depende de los armónicos.</li>
        <li>Estas propiedades explican desde la música hasta la tecnología de audio y la comunicación.</li>
      </ul>
      <p>
        Comprender estas propiedades permite entender fenómenos cotidianos y aplicaciones tecnológicas, así como proteger la salud auditiva.
      </p>
    </TheorySection>
  </>
);

// 10. EXPORTACIÓN
export default PropiedadesSonidoTheory;