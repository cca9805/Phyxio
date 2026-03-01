import { TheorySection, Concept, Important, Formula } from '../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Acústica Musical",
  descripcion: "Física del sonido aplicada a la música e instrumentos musicales",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const AcusticaMusicalTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Acústica Musical?">
        <p>
          La acústica musical es la rama de la acústica que estudia la producción, propagación y percepción del sonido en el contexto musical. Investiga cómo los instrumentos musicales generan sonido y cómo las propiedades físicas del sonido se relacionan con las cualidades musicales.
        </p>
      </TheorySection>

      <TheorySection title="Fundamentos Musicales">
        <Concept title="Notas y Frecuencias" variant="detailed">
          <div className="detailed-content">
            <p>
              En música occidental, las notas se organizan en una escala cromática de 12 semitonos:
            </p>
            
            <Formula
              expression={String.raw`f = 440 \times 2^{(n-69)/12}`}
              calculatorId="acustica_musical-grupo-1"
              definitions={definitions}
              exercises={exercises}
            />
            
            <p>Donde:</p>
            <ul>
              <li>f: Frecuencia de la nota (Hz)</li>
              <li>n: Número MIDI de la nota (0-127)</li>
              <li>69: Número MIDI del La de afinación (A4 = 440 Hz)</li>
            </ul>
            
            <ul>
              <li>La central (A4): 440 Hz (estándar de afinación)</li>
              <li>Octava: Duplicación de frecuencia (A5 = 880 Hz)</li>
              <li>Semitono: Factor de 2^(1/12) ≈ 1.0595</li>
            </ul>
            <p>
              Ejemplo de frecuencias:
            </p>
            <ul>
              <li>Do central (C4): 261.63 Hz</li>
              <li>Re (D4): 293.66 Hz</li>
              <li>Mi (E4): 329.63 Hz</li>
              <li>Fa (F4): 349.23 Hz</li>
              <li>Sol (G4): 392.00 Hz</li>
              <li>La (A4): 440.00 Hz</li>
              <li>Si (B4): 493.88 Hz</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Intervalos Musicales" variant="detailed">
          <div className="detailed-content">
            <p>
              Los intervalos son relaciones de frecuencia entre notas:
            </p>
            
            <Formula
              expression={String.raw`r = \frac{f_2}{f_1}`}
              calculatorId="acustica_musical-grupo-1"
              definitions={definitions}
              exercises={exercises}
            />
            
            <p>Donde:</p>
            <ul>
              <li>r: Relación de intervalo</li>
              <li>f₁, f₂: Frecuencias de las dos notas (Hz)</li>
            </ul>
            
            <p>Intervalos principales:</p>
            <ul>
              <li>Octava: 2:1 (más consonante)</li>
              <li>Quinta justa: 3:2</li>
              <li>Cuarta justa: 4:3</li>
              <li>Tercera mayor: 5:4</li>
              <li>Tercera menor: 6:5</li>
            </ul>
            <p>
              Los intervalos con relaciones de números enteros pequeños suenan más consonantes debido a la coincidencia de armónicos.
            </p>
          </div>
        </Concept>

        <Concept title="Escalas y Temperamentos" variant="detailed">
          <div className="detailed-content">
            <p>
              Temperamento igual: Sistema moderno donde cada semitono tiene la misma relación de frecuencia (2^(1/12)). Permite tocar en cualquier tonalidad.
            </p>
            <p>
              Afinación justa: Basada en relaciones de números enteros. Más consonante pero limitada a ciertas tonalidades.
            </p>
            <p>
              Temperamento pitagórico: Basado en quintas justas (3:2). Usado históricamente.
            </p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Instrumentos Musicales">
        <Concept title="Clasificación Acústica" variant="detailed">
          <div className="detailed-content">
            <p>
              Los instrumentos se clasifican según su mecanismo de producción de sonido:
            </p>
            <ul>
              <li>Cordófonos: Cuerdas vibrantes (guitarra, violín, piano)</li>
              <li>Aerófonos: Columnas de aire vibrantes (flauta, trompeta, órgano)</li>
              <li>Membranófonos: Membranas vibrantes (tambores, timbales)</li>
              <li>Idiófonos: El cuerpo del instrumento vibra (xilófono, campanas)</li>
              <li>Electrófonos: Generación electrónica (sintetizadores)</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Instrumentos de Cuerda" variant="detailed">
          <div className="detailed-content">
            <p>
              La frecuencia fundamental de una cuerda vibrante depende de:
            </p>
            <div className="formula-display">f = (1/2L) × √(T/μ)</div>
            <p>Donde:</p>
            <ul>
              <li>L: Longitud de la cuerda</li>
              <li>T: Tensión de la cuerda</li>
              <li>μ: Densidad lineal (masa/longitud)</li>
            </ul>
            <p>
              Modos de vibración: La cuerda vibra en armónicos (f, 2f, 3f, ...) que determinan el timbre.
            </p>
            <p>
              Ejemplos:
            </p>
            <ul>
              <li>Violín: Arco excita múltiples armónicos, caja de resonancia amplifica</li>
              <li>Guitarra: Pulsación excita armónicos, cuerpo resuena</li>
              <li>Piano: Martillo golpea cuerda, tabla armónica amplifica</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Instrumentos de Viento" variant="detailed">
          <div className="detailed-content">
            <p>
              La frecuencia depende de la longitud de la columna de aire:
            </p>
            <div className="formula-display">f = v / λ</div>
            <p>
              Tubo abierto (ambos extremos): λ = 2L/n (n = 1, 2, 3, ...)
            </p>
            <p>
              Tubo cerrado (un extremo): λ = 4L/n (n = 1, 3, 5, ...) - solo armónicos impares
            </p>
            <p>
              Clasificación:
            </p>
            <ul>
              <li>Madera: Flauta, clarinete, oboe, saxofón</li>
              <li>Metal: Trompeta, trombón, tuba, trompa</li>
            </ul>
            <p>
              Mecanismo de excitación:
            </p>
            <ul>
              <li>Bisel: Flauta (corriente de aire dividida)</li>
              <li>Lengüeta simple: Clarinete, saxofón</li>
              <li>Lengüeta doble: Oboe, fagot</li>
              <li>Boquilla: Trompeta, trombón (labios vibran)</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Instrumentos de Percusión" variant="detailed">
          <div className="detailed-content">
            <p>
              Membranófonos (tambores):
            </p>
            <ul>
              <li>Vibración de membrana tensada</li>
              <li>Modos de vibración complejos (no armónicos)</li>
              <li>Tono definido (timbales) o indefinido (tambor)</li>
            </ul>
            <p>
              Idiófonos:
            </p>
            <ul>
              <li>Barras: Xilófono, marimba, vibráfono</li>
              <li>Placas: Gong, platillos</li>
              <li>Campanas: Modos de vibración complejos</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Acústica de Salas de Concierto">
        <Concept title="Tiempo de Reverberación" variant="detailed">
          <div className="detailed-content">
            <p>
              El tiempo de reverberación (RT60) es el tiempo que tarda el sonido en decaer 60 dB:
            </p>
            <div className="formula-display">RT60 = 0.161 × V / A</div>
            <p>Donde:</p>
            <ul>
              <li>V: Volumen de la sala (m³)</li>
              <li>A: Absorción acústica total (m²)</li>
            </ul>
            <p>
              Valores óptimos:
            </p>
            <ul>
              <li>Música de cámara: 1.3-1.7 s</li>
              <li>Música sinfónica: 1.8-2.2 s</li>
              <li>Ópera: 1.5-1.8 s</li>
              <li>Teatro/palabra: 0.8-1.2 s</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Cualidades Acústicas" variant="detailed">
          <div className="detailed-content">
            <p>
              Una buena sala de conciertos debe tener:
            </p>
            <ul>
              <li>Claridad: Definición de notas individuales</li>
              <li>Calidez: Balance de frecuencias bajas</li>
              <li>Intimidad: Primeras reflexiones tempranas</li>
              <li>Envolvimiento: Sensación espacial</li>
              <li>Balance: Distribución uniforme del sonido</li>
              <li>Ausencia de defectos: Sin ecos, resonancias</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Síntesis y Procesamiento de Audio">
        <Concept title="Síntesis de Sonido" variant="detailed">
          <div className="detailed-content">
            <p>
              Métodos para generar sonidos artificialmente:
            </p>
            <ul>
              <li>Síntesis aditiva: Suma de ondas senoidales (armónicos)</li>
              <li>Síntesis sustractiva: Filtrado de ondas ricas en armónicos</li>
              <li>Síntesis FM: Modulación de frecuencia</li>
              <li>Síntesis granular: Manipulación de granos de sonido</li>
              <li>Modelado físico: Simulación de instrumentos reales</li>
              <li>Muestreo: Reproducción de grabaciones</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Efectos de Audio" variant="detailed">
          <div className="detailed-content">
            <p>
              Procesamiento para modificar el sonido:
            </p>
            <ul>
              <li>Reverberación: Simulación de espacios acústicos</li>
              <li>Delay/Eco: Repeticiones del sonido</li>
              <li>Chorus: Múltiples copias desafinadas</li>
              <li>Flanger/Phaser: Modulación de fase</li>
              <li>Distorsión: Saturación armónica</li>
              <li>Compresión: Control de dinámica</li>
              <li>Ecualización: Ajuste de frecuencias</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      {/* Aplicaciones */}
      <div className="theory-applications-section">
        <h2 style={{marginTop: 0, display: 'flex', alignItems: 'center', gap: '0.5em'}}>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>🎵 Producción Musical Profesional</h3>
          <ul>
            <li>
              Grabación: Micrófonos posicionados según patrones de armónicos del 
              instrumento, salas diseñadas para capturar frecuencias específicas.
            </li>
            <li>
              Mezcla: Ecualización basada en espectro armónico, cada instrumento 
              en su "espacio" frecuencial para evitar enmascaramiento.
            </li>
            <li>
              Masterización: Ajuste final usando curvas isofónicas para que suene 
              bien en cualquier sistema (auriculares, altavoces, coche).
            </li>
            <li>
              Ejemplos: Abbey Road Studios, Capitol Records, Electric Lady Studios 
              usan principios de acústica musical en cada paso.
            </li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3>🎸 Diseño y Fabricación de Instrumentos</h3>
          <ul>
            <li>
              Guitarras: Longitud de cuerda, tensión y grosor calculados para 
              afinación estándar (E2 = 82.4 Hz). Caja de resonancia amplifica armónicos específicos.
            </li>
            <li>
              Pianos: 88 teclas cubren 27.5 Hz (A0) a 4186 Hz (C8). Cuerdas más 
              gruesas y largas para graves, más finas y cortas para agudos.
            </li>
            <li>
              Instrumentos de viento: Longitud de tubo determina frecuencia 
              fundamental. Agujeros y llaves permiten cambiar la longitud efectiva.
            </li>
            <li>
              Violines Stradivarius: Su sonido único viene de proporciones exactas, 
              barniz especial y envejecimiento de la madera que afecta armónicos.
            </li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3>🎧 Tecnología de Audio Digital</h3>
          <ul>
            <li>
              Sintetizadores: Generan sonidos combinando ondas senoidales en 
              frecuencias armónicas. Síntesis FM, aditiva y sustractiva basadas en teoría de Fourier.
            </li>
            <li>
              Auto-Tune y corrección de tono: Detecta frecuencia fundamental y 
              la ajusta al semitono más cercano de la escala temperada.
            </li>
            <li>
              Samplers: Reproducen instrumentos reales capturando no solo la nota 
              fundamental sino todos sus armónicos y envolvente temporal.
            </li>
            <li>
              Plugins VST: Emulaciones digitales de instrumentos y efectos usando 
              modelos matemáticos de acústica musical.
            </li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3>🎬 Cine y Bandas Sonoras</h3>
          <ul>
            <li>
              Composición cinematográfica: Hans Zimmer, John Williams usan 
              intervalos específicos para evocar emociones (quintas para heroísmo, tritonos para 
              tensión).
            </li>
            <li>
              Diseño de sonido: Efectos creados combinando frecuencias armónicas 
              para sonidos "imposibles" pero creíbles.
            </li>
            <li>
              Mezcla Dolby Atmos: Instrumentos posicionados en espacio 3D usando 
              principios de localización de sonido.
            </li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3>🎮 Videojuegos</h3>
          <ul>
            <li>
              Música adaptativa: Cambia según la acción del jugador, transiciones 
              suaves entre tonalidades y tempos.
            </li>
            <li>
              Síntesis en tiempo real: Consolas generan música usando síntesis 
              por frecuencias moduladas (FM) para ahorrar memoria.
            </li>
            <li>
              Audio posicional: Instrumentos y efectos posicionados en espacio 3D 
              para inmersión.
            </li>
            <li>
              Ejemplos: The Legend of Zelda, Final Fantasy, Journey tienen bandas 
              sonoras que usan acústica musical avanzada.
            </li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3>📱 Aplicaciones Móviles</h3>
          <ul>
            <li>
              Afinadores: Apps como GuitarTuna detectan frecuencia fundamental 
              usando FFT (Fast Fourier Transform) y muestran desviación en cents.
            </li>
            <li>
              Apps de aprendizaje: Yousician, Simply Piano detectan notas tocadas 
              y dan feedback en tiempo real.
            </li>
            <li>
              Identificación de canciones: Shazam crea "huella digital" basada en 
              espectro de frecuencias y armónicos únicos de cada canción.
            </li>
            <li>
              Metrónomo y DAWs móviles: GarageBand, FL Studio Mobile permiten 
              producción musical completa en smartphone.
            </li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3>🎓 Educación Musical</h3>
          <ul>
            <li>
              Enseñanza de teoría: Visualización de ondas y espectros ayuda a 
              entender intervalos, acordes y armonía.
            </li>
            <li>
              Entrenamiento auditivo: Apps que entrenan reconocimiento de 
              intervalos, acordes y progresiones armónicas.
            </li>
            <li>
              Análisis de interpretación: Software que analiza afinación, timing 
              y dinámica de estudiantes.
            </li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3>🔬 Investigación y Musicología</h3>
          <ul>
            <li>
              Análisis de grabaciones históricas: Restauración de grabaciones 
              antiguas eliminando ruido pero preservando armónicos originales.
            </li>
            <li>
              Estudio de instrumentos antiguos: Análisis espectral de Stradivarius, 
              Amati y otros instrumentos históricos.
            </li>
            <li>
              Etnomusicología: Estudio de escalas no occidentales (pentatónicas, 
              microtonales) y su base acústica.
            </li>
            <li>
              Neurociencia musical: Cómo el cerebro procesa intervalos, armonía 
              y ritmo.
            </li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3>🎤 Tecnología de Voz</h3>
          <ul>
            <li>
              Síntesis de voz: Siri, Alexa, Google Assistant generan voz humana 
              combinando frecuencias fundamentales y formantes (armónicos vocales).
            </li>
            <li>
              Reconocimiento de voz: Detecta fonemas analizando patrones de 
              frecuencias y armónicos específicos de cada sonido.
            </li>
            <li>
              Efectos vocales: Vocoder, talk box, harmonizer usan principios de 
              acústica musical para transformar voz.
            </li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3>🏛️ Preservación Cultural</h3>
          <ul>
            <li>
              Reconstrucción de instrumentos antiguos: Usando análisis acústico 
              de fragmentos arqueológicos para recrear sonidos perdidos.
            </li>
            <li>
              Afinación histórica: Recreación de afinaciones antiguas (La = 415 Hz 
              barroco, La = 466 Hz romántico) para interpretaciones auténticas.
            </li>
            <li>
              Documentación de tradiciones orales: Análisis de escalas y sistemas 
              tonales de culturas indígenas.
            </li>
          </ul>
        </div>
        <div className="theory-subsection">
          <div className="theory-section-highlight">
            <p>
              💡 Impacto cultural y económico: La acústica musical es la base de 
              una industria global de $25 billones que incluye producción musical, 
              streaming (Spotify, Apple Music), fabricación de instrumentos, educación musical, 
              videojuegos y cine. Desde Pitágoras hasta Spotify, la comprensión de las frecuencias 
              musicales ha transformado la cultura humana.
            </p>
          </div>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De Pitágoras a Helmholtz
        </h2>
        <div className="theory-subsection">
          <h3>🎵 Pitágoras (c. 570-495 a.C.)</h3>
          <p>
            El filósofo griego Pitágoras descubrió las razones matemáticas de los intervalos musicales. 
            Según la leyenda, pasó por una herrería y notó que los martillos producían sonidos armoniosos cuando 
            sus pesos tenían razones simples (2:1, 3:2, 4:3).
          </p>
          <p>
            Experimento: Pitágoras experimentó con cuerdas de igual tensión y grosor, variando 
            solo la longitud. Descubrió que:
          </p>
          <ul>
            <li>Razón 2:1 → Octava (Do-Do')</li>
            <li>Razón 3:2 → Quinta perfecta (Do-Sol)</li>
            <li>Razón 4:3 → Cuarta perfecta (Do-Fa)</li>
          </ul>
          <p>
            Este fue el primer intento de explicar la música con matemáticas, estableciendo 
            las bases de la teoría musical occidental.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🎻 Marin Mersenne (1588-1648)</h3>
          <p>
            El monje francés Marin Mersenne formuló las leyes de las cuerdas vibrantes en 1636. 
            Demostró matemáticamente cómo la frecuencia de una cuerda depende de su longitud, tensión, 
            densidad y grosor.
          </p>
          <p>
            Legado: Sus leyes permitieron el diseño científico de instrumentos de cuerda 
            y establecieron la acústica musical como ciencia cuantitativa.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🎹 Andreas Werckmeister (1645-1706)</h3>
          <p>
            El organista alemán Andreas Werckmeister desarrolló el temperamento igual, 
            el sistema de afinación que usamos hoy. Dividió la octava en 12 semitonos iguales, 
            permitiendo tocar en cualquier tonalidad.
          </p>
          <p>
            Controversia: El temperamento igual "desafina" ligeramente todos los intervalos 
            (excepto la octava) para que todos sean igualmente utilizables. Bach escribió "El clave bien 
            temperado" (1722) para demostrar las posibilidades de este sistema.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔬 Joseph Sauveur (1653-1716)</h3>
          <p>
            El matemático francés Joseph Sauveur acuñó el término "acústica" en 1701. 
            Fue el primero en medir frecuencias absolutas y propuso el La = 256 Hz como estándar 
            (aunque hoy usamos 440 Hz).
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🎵 Hermann von Helmholtz (1821-1894)</h3>
          <p>
            El físico alemán Hermann von Helmholtz escribió "On the Sensations of Tone" (1863), 
            la obra más influyente en acústica musical. Explicó el timbre como 
            la combinación de armónicos y desarrolló resonadores para analizar espectros sonoros.
          </p>
          <p>
            Innovación: Helmholtz construyó resonadores esféricos de diferentes tamaños 
            (resonadores de Helmholtz) para aislar y estudiar frecuencias específicas. ¡El primer 
            "analizador de espectro" mecánico!
          </p>
        </div>
      </div>

      {/* Anécdotas */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades musicales
        </h2>

        <h3>🎻 El misterio de los Stradivarius</h3>
        <p>
          Los violines fabricados por Antonio Stradivari (1644-1737) en Cremona, Italia, son 
          considerados los mejores del mundo. Un Stradivarius puede valer más de $15 millones.
        </p>
        <p>
          ¿Por qué suenan tan bien? Teorías incluyen:
        </p>
        <ul>
          <li>Madera de árboles que crecieron durante la "Pequeña Edad de Hielo" (más densa)</li>
          <li>Barniz especial con minerales que afectan la resonancia</li>
          <li>Proporciones exactas que optimizan armónicos específicos</li>
          <li>Envejecimiento de 300+ años que modifica las propiedades de la madera</li>
        </ul>
        <p>
          Debate: Estudios ciegos muestran que músicos profesionales no siempre 
          pueden distinguir un Stradivarius de un violín moderno de alta calidad. ¿Es el sonido 
          o el mito?
        </p>

        <h3>🎼 El La de 440 Hz no siempre fue estándar</h3>
        <p>
          La frecuencia del La central ha variado enormemente a lo largo de la historia:
        </p>
        <ul>
          <li>Barroco (1700s): La = 415 Hz (casi un semitono más bajo)</li>
        </ul>
        {/* Anécdotas */}
          <div className="theory-anecdotes-section">
            <h2>
              <span>✨</span> Anécdotas y curiosidades musicales
            </h2>
            <div className="theory-subsection">
              <h3>🎻 El misterio de los Stradivarius</h3>
              <p>
                Los violines fabricados por Antonio Stradivari (1644-1737) en Cremona, Italia, son considerados los mejores del mundo. Un Stradivarius puede valer más de $15 millones.
              </p>
              <p>
                ¿Por qué suenan tan bien? Teorías incluyen:
              </p>
              <ul>
                <li>Madera de árboles que crecieron durante la "Pequeña Edad de Hielo" (más densa)</li>
                <li>Barniz especial con minerales que afectan la resonancia</li>
                <li>Proporciones exactas que optimizan armónicos específicos</li>
                <li>Envejecimiento de 300+ años que modifica las propiedades de la madera</li>
              </ul>
              <p>
                Debate: Estudios ciegos muestran que músicos profesionales no siempre pueden distinguir un Stradivarius de un violín moderno de alta calidad. ¿Es el sonido o el mito?
              </p>
            </div>
            <div className="theory-subsection">
              <h3>🎼 El La de 440 Hz no siempre fue estándar</h3>
              <p>
                La frecuencia del La central ha variado enormemente a lo largo de la historia:
              </p>
              <ul>
                <li>Barroco (1700s): La = 415 Hz (casi un semitono más bajo)</li>
                <li>Mozart (1780s): La = 421-423 Hz</li>
                <li>Romántico (1850s): La = 450-466 Hz (¡más agudo que hoy!)</li>
                <li>Estándar actual (1939): La = 440 Hz (ISO 16)</li>
              </ul>
              <p>
                Consecuencia: La música barroca tocada con afinación moderna suena más brillante y tensa de lo que los compositores pretendían. Por eso existen orquestas de "instrumentos de época" que usan afinaciones históricas.
              </p>
            </div>
            <div className="theory-subsection">
              <h3>🎵 El efecto Shepard: la escalera infinita</h3>
              <p>
                Roger Shepard creó en 1964 un tono que parece subir infinitamente sin llegar nunca a ningún lado. Es como la escalera de Penrose, pero en sonido.
              </p>
              <p>
                Cómo funciona: Combina múltiples octavas de la misma nota. Mientras unas suben y se hacen más fuertes, otras bajan y se desvanecen. El cerebro se enfoca en las que suben, ignorando las que desaparecen.
              </p>
              <p>
                Uso en cine: Hans Zimmer lo usó en "Dunkirk" para crear tensión constante. También aparece en "The Dark Knight" y "Inception" de Christopher Nolan.
              </p>
            </div>
            <div className="theory-subsection">
              <h3>🎸 El "tono perdido" de Jimi Hendrix</h3>
              <p>
                Muchos guitarristas intentan replicar el sonido de Jimi Hendrix sin éxito, incluso usando el mismo equipo. Análisis espectrales revelan que parte de su sonido único venía de distorsión armónica específica de sus amplificadores vintage sobrecargados.
              </p>
              <p>
                Paradoja: Los amplificadores modernos son "demasiado perfectos". Sus "imperfecciones" (distorsión armónica, compresión natural) creaban armónicos que el oído humano encuentra más "cálidos" y "musicales".
              </p>
            </div>
            <div className="theory-subsection">
              <h3>🎹 El "acorde del diablo"</h3>
              <p>
                El tritono (intervalo de tres tonos enteros, como Do-Fa#) fue llamado "diabolus in musica" en la Edad Media y supuestamente prohibido por la Iglesia.
              </p>
              <p>
                Razón acústica: Su relación de frecuencias (45:32) no es simple, creando una sensación de tensión e inestabilidad. El cerebro "quiere" que resuelva a un intervalo consonante.
              </p>
              <p>
                Uso moderno: Es fundamental en blues, jazz y rock. La intro de "Black Sabbath" de Black Sabbath usa un tritono, ¡aprovechando su sonido "diabólico" intencionalmente!
              </p>
            </div>
            <div className="theory-subsection">
              <h3>🎼 Pulsaciones (beats) y afinación</h3>
              <p>
                Cuando dos frecuencias están ligeramente desafinadas, se escucha una oscilación de volumen (pulsaciones o "beats"). La frecuencia de pulsación es la diferencia entre las dos frecuencias.
              </p>
              <p>
                Aplicación práctica: Los afinadores de piano usan pulsaciones para afinar con precisión. Cuando dos cuerdas están perfectamente afinadas, las pulsaciones desaparecen.
              </p>
              <p>
                Ejemplo: Si tocas 440 Hz y 442 Hz simultáneamente, escucharás 2 pulsaciones por segundo (442 - 440 = 2 Hz).
              </p>
            </div>
            <div className="theory-subsection">
              <h3>🎵 Resonancia simpática</h3>
              <p>
                Si tocas una nota fuerte en un piano con el pedal sostenido, otras cuerdas empiezan a vibrar "por simpatía" si sus frecuencias son armónicos de la nota tocada.
              </p>
              <p>
                Instrumentos que lo aprovechan:
              </p>
              <ul>
                <li>Sitar indio: Tiene 13 cuerdas simpáticas que resuenan automáticamente</li>
                <li>Viola d'amore: Instrumento barroco con 7 cuerdas simpáticas</li>
                <li>Piano: El pedal sostenido permite resonancia simpática entre cuerdas</li>
              </ul>
            </div>
            <div className="theory-subsection">
              <h3>🎤 Formantes vocales</h3>
              <p>
                Las vocales cantadas (a, e, i, o, u) se distinguen por formantes: picos de frecuencia específicos creados por la forma de la boca y garganta.
              </p>
              <p>
                Curiosidad: Los cantantes de ópera entrenan para mantener formantes claros incluso en notas muy agudas. Por eso puedes entender la letra en ópera pero no siempre en rock.
              </p>
            </div>
            <div className="theory-subsection">
              <h3>🎸 El "tono de Tartini"</h3>
              <p>
                Giuseppe Tartini (1692-1770) descubrió que al tocar dos notas simultáneamente en el violín, se escucha un tercer tono fantasma (tono diferencial) cuya frecuencia es la diferencia entre las dos notas.
              </p>
              <p>
                Ejemplo: Si tocas 800 Hz y 1000 Hz, escucharás también 200 Hz (1000 - 800 = 200). Este tono no existe físicamente, ¡lo genera tu cerebro!
              </p>
            </div>
          </div>
      </div>
    </>
  );
};

export default AcusticaMusicalTheory;

