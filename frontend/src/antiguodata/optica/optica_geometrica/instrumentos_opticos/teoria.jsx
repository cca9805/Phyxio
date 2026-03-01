import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions } from './definitions';

// Metadatos del tema
export const metadata = {
  titulo: "Instrumentos Ópticos",
  descripcion: "Microscopios, telescopios y otros instrumentos ópticos para ampliar las capacidades del ojo humano",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const InstrumentosOpticosTeoria = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="¿Qué son los Instrumentos Ópticos?">
        <p>
          Los instrumentos ópticos son dispositivos que utilizan lentes, espejos y prismas para modificar la trayectoria de la luz y formar imágenes. Estos instrumentos amplían las capacidades del ojo humano, permitiéndonos ver objetos muy pequeños, muy lejanos o con mayor detalle.
        </p>
        <p>
          Los instrumentos ópticos se basan en los principios de reflexión y refracción de la luz, combinando múltiples elementos ópticos para lograr el efecto deseado.
        </p>
        <Important>
          Los instrumentos ópticos son esenciales en ciencia, medicina, industria y astronomía. Desde el microscopio que revela células hasta el telescopio que explora galaxias, estos dispositivos han revolucionado nuestra comprensión del universo a todas las escalas.
        </Important>
      </TheorySection>

      <TheorySection title="El Ojo Humano">
        <Concept title="Estructura y Funcionamiento">
          <p>
            El ojo humano es el instrumento óptico natural más sofisticado. Sus componentes principales son:
          </p>
          <ul>
            <li>Córnea: Primera superficie refractiva (n ≈ 1.376)</li>
            <li>Humor acuoso: Líquido entre córnea y cristalino</li>
            <li>Cristalino: Lente biconvexa ajustable (acomodación)</li>
            <li>Humor vítreo: Gel transparente que llena el globo ocular</li>
            <li>Retina: Superficie sensible a la luz con fotorreceptores</li>
            <li>Fóvea: Zona de máxima agudeza visual</li>
          </ul>
        </Concept>

        <Concept title="Acomodación">
          <p>
            El ojo puede enfocar objetos a diferentes distancias mediante la acomodación, proceso por el cual el cristalino cambia su curvatura gracias a los músculos ciliares.
          </p>
          <ul>
            <li>Punto próximo: Distancia mínima de visión nítida (~25 cm para un ojo joven)</li>
            <li>Punto remoto: Distancia máxima de visión nítida (infinito para un ojo normal)</li>
          </ul>
        </Concept>

        <Concept title="Defectos de la Visión">
          <ul>
            <li>Miopía: El ojo enfoca antes de la retina. Se corrige con lentes divergentes (negativas)</li>
            <li>Hipermetropía: El ojo enfoca después de la retina. Se corrige con lentes convergentes (positivas)</li>
            <li>Astigmatismo: Curvatura irregular de córnea o cristalino. Se corrige con lentes cilíndricas</li>
            <li>Presbicia: Pérdida de acomodación con la edad. Se corrige con lentes de lectura</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="La Lupa (Lente de Aumento)">
        <Concept title="Principio de Funcionamiento">
          <p>
            Una lupa es una lente convergente simple que produce una imagen virtual, derecha y ampliada de un objeto cercano. El objeto se coloca entre el foco y la lente.
          </p>
        </Concept>

        <Concept title="Aumento Angular">
          <p>
            El poder de ampliación de una lupa se mide por su aumento angular:
          </p>
          <Formula 
            expression={String.raw`M = \frac{\theta'}{\theta} = \frac{D}{f}`}
            calculatorId="aumento-lupa"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>M: Aumento angular</li>
            <li>θ': Ángulo subtendido por la imagen</li>
            <li>θ: Ángulo subtendido por el objeto a 25 cm</li>
            <li>D: Distancia mínima de visión (típicamente 25 cm)</li>
            <li>f: Distancia focal de la lupa</li>
          </ul>
          <p>
            Una lupa típica tiene aumentos entre 2× y 20×.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="El Microscopio Compuesto">
        <Concept title="Estructura">
          <p>
            El microscopio compuesto utiliza dos sistemas de lentes para lograr grandes aumentos:
          </p>
          <ul>
            <li>Objetivo: Lente convergente cerca del objeto, forma una imagen real, invertida y ampliada</li>
            <li>Ocular: Lente convergente que actúa como lupa, observa la imagen formada por el objetivo</li>
          </ul>
        </Concept>

        <Concept title="Aumento Total">
          <p>
            El aumento total es el producto de los aumentos del objetivo y el ocular:
          </p>
          <Formula 
            expression={String.raw`M_{total} = m_o \times m_e = -\frac{L \times D}{f_o \times f_e}`}
            calculatorId="aumento-microscopio"
            definitions={definitions}
            exercises={exercises}
          />
          <p>
            Los microscopios ópticos pueden alcanzar aumentos de hasta 1000× a 2000×, con un límite de resolución de aproximadamente 200 nm (debido a la difracción de la luz visible).
          </p>
        </Concept>

        <Concept title="Distancia Óptica del Tubo">
          <p>
            La longitud del tubo del microscopio (L) es la distancia entre el foco imagen del objetivo y el foco objeto del ocular, típicamente 160 mm en microscopios estándar.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="El Telescopio">
        <p>
          Los telescopios son instrumentos diseñados para observar objetos lejanos. Existen dos tipos principales:
        </p>

        <Concept title="Telescopio Refractor (Kepleriano)">
          <p>
            Utiliza lentes para formar la imagen:
          </p>
          <ul>
            <li>Objetivo: Lente convergente de gran diámetro y focal larga</li>
            <li>Ocular: Lente convergente de focal corta</li>
            <li>Forma imágenes invertidas</li>
            <li>Usado en astronomía y observación terrestre (con prisma inversor)</li>
          </ul>
          <Formula 
            expression={String.raw`M = -\frac{f_o}{f_e}`}
            calculatorId="aumento-telescopio"
            definitions={definitions}
            exercises={exercises}
          />
        </Concept>

        <Concept title="Telescopio Reflector (Newtoniano)">
          <p>
            Utiliza espejos en lugar de lentes:
          </p>
          <ul>
            <li>Espejo primario: Espejo cóncavo parabólico que recoge la luz</li>
            <li>Espejo secundario: Espejo plano que desvía la luz hacia el ocular</li>
            <li>Ventajas: Sin aberración cromática, más económico para grandes aperturas</li>
            <li>Usado principalmente en astronomía</li>
          </ul>
        </Concept>

        <Concept title="Poder de Resolución">
          <p>
            La capacidad de un telescopio para distinguir dos objetos cercanos depende de su apertura:
          </p>
          <Formula 
            expression={String.raw`\theta_{min} = 1.22\frac{\lambda}{D}`}
            calculatorId="poder-resolucion"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>θ_min: Ángulo mínimo resoluble (radianes)</li>
            <li>λ: Longitud de onda de la luz</li>
            <li>D: Diámetro de la apertura</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="La Cámara Fotográfica">
        <Concept title="Componentes Principales">
          <ul>
            <li>Objetivo: Sistema de lentes que forma la imagen</li>
            <li>Diafragma: Controla la cantidad de luz (número f)</li>
            <li>Obturador: Controla el tiempo de exposición</li>
            <li>Sensor/Película: Registra la imagen</li>
          </ul>
        </Concept>

        <Concept title="Número f (f-number)">
          <p>
            Relaciona la distancia focal con el diámetro de la apertura:
          </p>
          <Formula 
            expression={String.raw`f/\# = \frac{f}{D}`}
            calculatorId="numero-f"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>f: Distancia focal del objetivo (mm)</li>
            <li>D: Diámetro de la apertura (mm)</li>
          </ul>
          <p>
            Valores típicos: f/1.4, f/2, f/2.8, f/4, f/5.6, f/8, f/11, f/16, f/22
          </p>
          <p>
            Un número f menor significa más luz y menor profundidad de campo.
          </p>
        </Concept>

        <Concept title="Profundidad de Campo">
          <p>
            Es el rango de distancias en el que los objetos aparecen enfocados. Depende de:
          </p>
          <ul>
            <li>Apertura del diafragma (número f)</li>
            <li>Distancia focal del objetivo</li>
            <li>Distancia al objeto</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="El Proyector">
        <Concept title="Funcionamiento">
          <p>
            Un proyector utiliza una lente convergente para formar una imagen real, invertida y ampliada sobre una pantalla.
          </p>
          <ul>
            <li>El objeto (diapositiva o pantalla LCD) se coloca entre f y 2f</li>
            <li>La imagen se forma más allá de 2f, ampliada</li>
            <li>Se requiere una fuente de luz intensa</li>
            <li>El objeto debe estar invertido para que la imagen proyectada sea derecha</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🔬 Microscopía Médica y Biológica</h3>
          <p>
            Los microscopios compuestos son fundamentales en medicina para diagnóstico de enfermedades. En laboratorios clínicos se analizan muestras de sangre (leucocitos, eritrocitos), biopsias de tejidos (detección de cáncer), y cultivos microbianos (bacterias, hongos). Un microscopio óptico típico de laboratorio cuesta entre $3,000-$15,000, con objetivos de inmersión en aceite (100×) que alcanzan resoluciones de 200 nm. La microscopía de fluorescencia (equipos desde $50,000) revolucionó la biología celular, permitiendo visualizar proteínas específicas marcadas con fluoróforos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔭 Astronomía y Exploración Espacial</h3>
          <p>
            Los telescopios terrestres y espaciales han transformado nuestra comprensión del universo. El telescopio Hubble (apertura 2.4 m, costo $4,700 millones) orbita sobre la atmósfera, evitando distorsiones y capturando imágenes de galaxias a 13,000 millones de años luz. Los telescopios terrestres modernos como el VLT (Very Large Telescope, 4 espejos de 8.2 m) utilizan óptica adaptativa que corrige turbulencias atmosféricas en tiempo real. El James Webb (apertura 6.5 m, infrarrojo, $10,000 millones) observa las primeras galaxias formadas tras el Big Bang.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📷 Fotografía Digital y Smartphones</h3>
          <p>
            Las cámaras fotográficas han evolucionado desde película química hasta sensores digitales. Los smartphones actuales integran múltiples cámaras: gran angular (equivalente 24mm), teleobjetivo (70-100mm), ultra gran angular (13mm). La fotografía computacional combina óptica con algoritmos: modo retrato simula bokeh mediante machine learning, HDR+ captura múltiples exposiciones fusionadas, y el modo noche acumula fotones durante segundos compensando movimientos. Cámaras profesionales (Canon R5, Sony A1) cuestan $4,000-$6,500, con objetivos desde $1,000 (50mm f/1.8) hasta $13,000 (400mm f/2.8).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌐 Fibra Óptica en Telecomunicaciones</h3>
          <p>
            Internet global depende de cables de fibra óptica submarinos que transmiten datos mediante pulsos de luz infrarroja (1,550 nm). Un solo cable transoceánico (TAT-14 América-Europa) transporta 5.2 Tbps sobre 15,000 km usando amplificadores ópticos cada 50-100 km. La fibra monomodo (núcleo 9 µm) alcanza velocidades de 100 Gbps por canal con multiplexación DWDM (80-160 canales simultáneos). En medicina, los endoscopios flexibles (diámetro 5-15 mm) contienen haces de 10,000-50,000 fibras individuales que transmiten imagen desde el interior del cuerpo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏭 Metrología y Control de Calidad Industrial</h3>
          <p>
            Los instrumentos ópticos son esenciales en fabricación de precisión. Microscopios metalográficos (aumentos 50×-1000×, precio $15,000-$80,000) inspeccionan microestructuras de metales para detectar defectos, grietas o inclusiones. Los proyectores de perfiles (aumentos 10×-100×) miden dimensiones de piezas mecánicas con precisión de 1 µm. En semiconductores, los microscopios de inspección óptica automática (AOI) verifican circuitos impresos a velocidades de 30-50 cm²/s, detectando defectos de soldadura de 0.1 mm.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El desarrollo de los instrumentos ópticos
        </h2>
        
        <div className="theory-subsection">
          <h3>🔬 Los Primeros Microscopios (1590-1676)</h3>
          <p>
            Los ópticos holandeses Hans y Zacharias Janssen crearon el primer microscopio compuesto en 1590, combinando dos lentes convexas en un tubo. Anton van Leeuwenhoek (1632-1723) perfeccionó microscopios de lente única que alcanzaban 270× de aumento, descubriendo bacterias (1676), espermatozoides (1677) y glóbulos rojos (1674). Sus lentes esféricas de vidrio pulido manual (diámetro 1-3 mm) tenían calidad excepcional para la época. Robert Hooke publicó Micrographia (1665), acuñando el término "célula" al observar corcho, e ilustrando pulgas, moscas y cristales de nieve.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔭 Revolución de los Telescopios (1608-1990)</h3>
          <p>
            Hans Lippershey solicitó la primera patente de telescopio en 1608 (negada por ser demasiado simple). Galileo Galilei construyó su propio telescopio refractor (1609, aumento 20×) y descubrió lunas de Júpiter, fases de Venus, manchas solares y cráteres lunares, revolucionando la astronomía. Isaac Newton inventó el telescopio reflector (1668) para evitar aberración cromática, diseño base de todos los grandes telescopios modernos. El telescopio Hale (Monte Palomar, espejo 5 m, 1948) dominó la astronomía 40 años. El Hubble (1990) fue el primer gran telescopio espacial, inicialmente con defecto óptico corregido en 1993.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📷 La Fotografía: de Daguerrotipo a Digital (1826-2000)</h3>
          <p>
            Nicéphore Niépce capturó la primera fotografía permanente en 1826 (exposición 8 horas, placa de peltre). Louis Daguerre desarrolló el daguerrotipo (1839, exposición minutos, imágenes en plata pulida). George Eastman democratizó la fotografía con la cámara Kodak (1888, "Usted aprieta el botón, nosotros hacemos el resto") y película en rollo. Las cámaras SLR (Single Lens Reflex) 35mm dominaron 1950-2000, con enfoque réflex mediante pentaprisma. La Kodak DCS-100 (1991, 1.3 MP, $13,000) fue la primera DSLR comercial. Canon EOS 5D (2005, 12.8 MP, full frame) popularizó fotografía digital profesional.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💡 Fibra Óptica: de Experimento a Infraestructura Global (1840-2000)</h3>
          <p>
            Daniel Colladon y Jacques Babinet demostraron guía de luz en chorros de agua (1840). John Tyndall popularizó el efecto (1854). El físico indio Narinder Singh Kapany acuñó el término "fibra óptica" (1956) y fabricó las primeras fibras de vidrio de baja pérdida. Charles Kao y George Hockham propusieron fibras ópticas para telecomunicaciones (1966), prediciendo pérdidas {'<'}20 dB/km. Corning Glass fabricó fibras con 17 dB/km (1970), revolucionando las comunicaciones. El primer sistema comercial TAT-8 (1988) conectó USA-Europa-Francia con 280 Mbps. Kao ganó el Nobel de Física 2009 por sus contribuciones.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🛰️ El Error del Hubble: $4,700 Millones en Juego</h3>
          <p>
            El telescopio espacial Hubble fue lanzado en 1990 con gran expectativa, pero sus primeras imágenes estaban borrosas. El espejo primario de 2.4 m tenía un defecto de fabricación: era demasiado plano en los bordes por 2.2 micras (1/50 del grosor de un cabello humano), causando aberración esférica. El error se originó en un instrumento de prueba mal ensamblado en Perkin-Elmer. NASA organizó la misión de reparación STS-61 (1993) que instaló COSTAR (Corrective Optics Space Telescope Axial Replacement), un sistema de espejos correctores que funcionó como "lentes de contacto" espaciales, restaurando la visión del Hubble.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦠 Los 'Animalcules' de Leeuwenhoek: Primera Visualización de Microorganismos</h3>
          <p>
            Anton van Leeuwenhoek era comerciante de telas en Delft, Holanda, sin formación científica formal. Usaba lupas para inspeccionar calidad de tejidos y se obsesionó con fabricar lentes perfectas. En 1676, decidió observar agua de lluvia estancada y se asombró al descubrir "animalcules" (pequeños animales): las primeras bacterias observadas en la historia. Sus cartas a la Royal Society de Londres describían "pequeñas criaturas que se movían muy graciosamente". La comunidad científica inicialmente dudó, pero Robert Hooke confirmó las observaciones. Leeuwenhoek fabricó más de 500 microscopios en su vida, pero nunca reveló su técnica secreta de pulido.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚖️ El Telescopio de Galileo vs. la Inquisición</h3>
          <p>
            Galileo construyó telescopios con aumentos de 8× a 30× entre 1609-1610. Sus descubrimientos (lunas de Júpiter, fases de Venus, manchas solares) contradecían el geocentrismo ptolemaico defendido por la Iglesia. Publicó "Sidereus Nuncius" (El Mensajero Sideral, 1610) causando sensación. La Iglesia le advirtió no defender el heliocentrismo (1616). Galileo publicó "Diálogo sobre los dos máximos sistemas del mundo" (1632) comparando geocentrismo y heliocentrismo, con un personaje (Simplicio) defendiendo torpemente a Ptolomeo. El Papa Urbano VIII se sintió ridiculizado y ordenó juicio. Galileo fue condenado por herejía (1633), forzado a retractarse, y pasó sus últimos 9 años bajo arresto domiciliario. La Iglesia Católica lo rehabilitó oficialmente en 1992.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📸 La Cámara 'Fotográfica' más Grande del Mundo</h3>
          <p>
            El Legacy Survey of Space and Time (LSST) del Observatorio Vera C. Rubin en Chile posee la cámara digital más grande jamás construida para astronomía: 3,200 megapíxeles (resolución suficiente para ver una pelota de golf a 24 km). El sensor mide 64 cm de diámetro, pesa 3 toneladas, y opera a -100°C. Cada imagen ocupa 6 GB y capturará el cielo completo cada 3 noches durante 10 años, generando 60 PB (petabytes) de datos. El proyecto costó $680 millones. Las lentes fueron pulidas durante años con precisión nanométrica: una irregularidad mayor a 100 nm en superficies de 1.6 m de diámetro arruinaría las imágenes. La primera luz está prevista para 2025.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>Los instrumentos ópticos (lupa, microscopio, telescopio, cámara) combinan lentes y espejos para ampliar las capacidades del ojo humano, permitiendo observar objetos microscópicos (células, bacterias) y astronómicos (galaxias, exoplanetas).</li>
          <li>La lupa (M = D/f) produce imágenes virtuales ampliadas con aumentos típicos de 2×-20×. El microscopio compuesto (M = m_o × m_e) alcanza aumentos de 1000×-2000× combinando objetivo y ocular, con límite de resolución ~200 nm por difracción.</li>
          <li>Los telescopios refractores usan lentes (M = -f_o/f_e), mientras los reflectores usan espejos parabólicos evitando aberración cromática. El poder de resolución (θ_min = 1.22λ/D) mejora con mayor apertura: telescopios de 1 m resuelven ~10⁻⁷ rad.</li>
          <li>Las cámaras fotográficas controlan exposición mediante número f (f/# = f/D) y tiempo de obturador. Valores f menores (f/1.4-f/2.8) capturan más luz pero reducen profundidad de campo. La fotografía computacional moderna combina óptica con algoritmos (HDR, modo noche).</li>
          <li>Historia: Primeros microscopios Janssen (1590) y Leeuwenhoek descubrió bacterias (1676). Galileo revolucionó astronomía con telescopio (1609). Fotografía desde Niépce (1826) hasta era digital (1991+). Fibra óptica de Kao (1966) transformó telecomunicaciones globales.</li>
          <li>Aplicaciones: Microscopios en diagnóstico médico ($3k-$80k), telescopios espaciales (Hubble $4.7B, Webb $10B), cámaras profesionales ($4k-$6.5k), fibra óptica submarina (TAT-14 transporta 5.2 Tbps), y metrología industrial (AOI detecta defectos 0.1 mm).</li>
        </ul>
      </div>
    </>
  );
};

export default InstrumentosOpticosTeoria;
