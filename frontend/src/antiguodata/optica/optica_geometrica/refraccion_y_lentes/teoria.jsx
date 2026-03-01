import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions } from './definitions';

// Metadatos del tema
export const metadata = {
  titulo: "Refracción y Lentes",
  descripcion: "Ley de Snell, índice de refracción y lentes ópticas que permiten enfocar y controlar la luz",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const RefraccionLentesTeoria = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Refracción?">
        <p>
          La refracción es el cambio de dirección que experimenta un rayo de luz al pasar de un medio a otro con diferente densidad óptica. Este fenómeno ocurre porque la velocidad de la luz varía en diferentes medios.
        </p>
        <p>
          Cuando la luz pasa de un medio menos denso (como el aire) a uno más denso (como el agua o el vidrio), se acerca a la normal. Cuando pasa de un medio más denso a uno menos denso, se aleja de la normal.
        </p>
        <Important>
          La refracción es responsable de fenómenos cotidianos como que una pajita en un vaso de agua parezca doblada, que las piscinas parezcan menos profundas, y del funcionamiento de todas las lentes (gafas, cámaras, telescopios).
        </Important>
      </TheorySection>

      <TheorySection title="Índice de Refracción">
        <Concept title="Definición">
          <p>
            El índice de refracción (n) es una medida de cuánto se reduce la velocidad de la luz en un medio comparado con su velocidad en el vacío:
          </p>
          <Formula 
            expression={String.raw`n = \frac{c}{v}`}
          />
          <p>Donde:</p>
          <ul>
            <li>n: Índice de refracción (adimensional)</li>
            <li>c: Velocidad de la luz en el vacío (3×10⁸ m/s)</li>
            <li>v: Velocidad de la luz en el medio (m/s)</li>
          </ul>
        </Concept>

        <Concept title="Índices de Refracción Comunes">
          <ul>
            <li>Vacío: n = 1.0000 (por definición)</li>
            <li>Aire: n ≈ 1.0003</li>
            <li>Agua: n ≈ 1.33</li>
            <li>Vidrio: n ≈ 1.5 - 1.9</li>
            <li>Diamante: n ≈ 2.42</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ley de Snell">
        <Concept title="Ecuación de Snell">
          <p>
            Relaciona los ángulos de incidencia y refracción con los índices de refracción de los dos medios:
          </p>
          <Formula 
            expression={String.raw`n_1 \sin(\theta_1) = n_2 \sin(\theta_2)`}
            calculatorId="ley-snell"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>n₁: Índice de refracción del primer medio</li>
            <li>θ₁: Ángulo de incidencia (respecto a la normal)</li>
            <li>n₂: Índice de refracción del segundo medio</li>
            <li>θ₂: Ángulo de refracción (respecto a la normal)</li>
          </ul>
        </Concept>

        <Concept title="Reflexión Total Interna">
          <p>
            Cuando la luz pasa de un medio más denso a uno menos denso (n₁ {'>'} n₂), existe un ángulo crítico a partir del cual toda la luz se refleja:
          </p>
          <Formula 
            expression={String.raw`\theta_c = \arcsin\left(\frac{n_2}{n_1}\right)`}
            calculatorId="angulo-critico"
            definitions={definitions}
            exercises={exercises}
          />
          <p>
            Este fenómeno es la base del funcionamiento de las fibras ópticas y los prismas totalmente reflectantes.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Lentes Ópticas">
        <p>
          Una lente es un medio transparente limitado por dos superficies, de las cuales al menos una es curva. Las lentes refractan la luz y pueden formar imágenes de los objetos.
        </p>

        <Concept title="Lentes Convergentes (Positivas)">
          <p>
            Son más gruesas en el centro que en los bordes. Hacen converger los rayos de luz paralelos en un punto focal.
          </p>
          <ul>
            <li>Biconvexa: Ambas superficies son convexas</li>
            <li>Planoconvexa: Una superficie plana y otra convexa</li>
            <li>Menisco convergente: Una superficie cóncava y otra convexa (más curvada)</li>
          </ul>
          <p>Aplicaciones: Lupas, lentes de lectura, objetivos de cámaras</p>
        </Concept>

        <Concept title="Lentes Divergentes (Negativas)">
          <p>
            Son más delgadas en el centro que en los bordes. Hacen diverger los rayos de luz paralelos como si provinieran de un punto focal.
          </p>
          <ul>
            <li>Bicóncava: Ambas superficies son cóncavas</li>
            <li>Planocóncava: Una superficie plana y otra cóncava</li>
            <li>Menisco divergente: Una superficie convexa y otra cóncava (más curvada)</li>
          </ul>
          <p>Aplicaciones: Corrección de miopía, visores, telescopios</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuación de las Lentes Delgadas">
        <Concept title="Ecuación del Fabricante de Lentes">
          <p>
            Relaciona la distancia focal con el índice de refracción y los radios de curvatura:
          </p>
          <Formula 
            expression={String.raw`\frac{1}{f} = (n-1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)`}
            calculatorId="ecuacion-fabricante"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>f: Distancia focal de la lente (cm)</li>
            <li>n: Índice de refracción del material de la lente</li>
            <li>R₁: Radio de curvatura de la primera superficie (cm)</li>
            <li>R₂: Radio de curvatura de la segunda superficie (cm)</li>
          </ul>
        </Concept>

        <Concept title="Ecuación de las Lentes">
          <p>
            Relaciona las distancias del objeto, la imagen y la distancia focal:
          </p>
          <Formula 
            expression={String.raw`\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}`}
            calculatorId="ecuacion-lentes-delgadas"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>f: Distancia focal (cm)</li>
            <li>d_o: Distancia del objeto a la lente (cm)</li>
            <li>d_i: Distancia de la imagen a la lente (cm)</li>
          </ul>
          <p>Convención de signos:</p>
          <ul>
            <li>f {'>'} 0 para lentes convergentes, f {'<'} 0 para lentes divergentes</li>
            <li>d_i {'>'} 0 para imágenes reales, d_i {'<'} 0 para imágenes virtuales</li>
          </ul>
        </Concept>

        <Concept title="Aumento Lateral">
          <Formula 
            expression={String.raw`m = -\frac{d_i}{d_o} = \frac{h_i}{h_o}`}
            calculatorId="aumento-lateral"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>m: Aumento lateral</li>
            <li>h_i: Altura de la imagen (cm)</li>
            <li>h_o: Altura del objeto (cm)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Potencia de una Lente (Dioptrías)">
        <Concept title="Definición">
          <p>
            La potencia de una lente es la inversa de su distancia focal expresada en metros:
          </p>
          <Formula 
            expression={String.raw`P = \frac{1}{f}`}
            calculatorId="potencia-lente"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>P: Potencia en dioptrías (D o m⁻¹)</li>
            <li>f: Distancia focal en metros (m)</li>
          </ul>
          <p>Interpretación:</p>
          <ul>
            <li>P {'>'} 0: Lente convergente</li>
            <li>P {'<'} 0: Lente divergente</li>
            <li>Mayor |P|: Mayor capacidad de convergencia/divergencia</li>
          </ul>
        </Concept>

        <Concept title="Lentes en Contacto">
          <p>
            Cuando dos lentes delgadas están en contacto, la potencia total es la suma de las potencias individuales:
          </p>
          <Formula 
            expression={String.raw`P_{total} = P_1 + P_2`}
            calculatorId="lentes-contacto"
            definitions={definitions}
            exercises={exercises}
          />
        </Concept>
      </TheorySection>

      <TheorySection title="Construcción de Rayos Principales">
        <p>
          Para lentes convergentes y divergentes, se trazan tres rayos principales:
        </p>
        <ol>
          <li>Rayo paralelo: Un rayo paralelo al eje óptico pasa por el foco (convergente) o parece venir del foco (divergente)</li>
          <li>Rayo focal: Un rayo que pasa por el foco se refracta paralelo al eje óptico</li>
          <li>Rayo central: Un rayo que pasa por el centro óptico no se desvía</li>
        </ol>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>🌍 Aplicaciones de la Refracción y Lentes</h2>
        
        <div className="application-item">
          <h3>👓 Corrección Visual</h3>
          <p>
            Las lentes oftálmicas corrigen defectos refractivos del ojo humano. La miopía (dificultad para ver de lejos) se corrige con lentes divergentes de potencia negativa (típicamente -1D a -10D), que desplazan el foco hacia atrás. La hipermetropía (dificultad para ver de cerca) requiere lentes convergentes (+1D a +6D). El astigmatismo se corrige con lentes tóricas que tienen diferentes potencias en ejes perpendiculares. Las lentes progresivas modernas ($300-$800) combinan múltiples graduaciones para presbicia. Las lentes de contacto (inventadas en 1887 por Adolf Fick) usan materiales hidrogel con 38-75% de contenido acuático y permeabilidad al oxígeno de 20-200 Dk/t para uso diario, con reemplazos mensuales o diarios.
          </p>
        </div>

        <div className="application-item">
          <h3>📷 Fotografía y Óptica de Imágenes</h3>
          <p>
            Los objetivos fotográficos modernos son sistemas complejos de 6-20 lentes que corrigen aberraciones cromáticas y esféricas. Un objetivo estándar de 50mm f/1.8 ($200) tiene 6 elementos en 5 grupos, mientras que un zoom profesional 24-70mm f/2.8 ($1,800-$2,400) puede tener 18 elementos con vidrios de dispersión extra-baja (ED) y recubrimientos antirreflejos multicapa que reducen reflejos del 4% al 0.2% por superficie. La apertura f/número define la relación focal/diámetro: f/1.4 captura 4× más luz que f/2.8. Los smartphones modernos (iPhone 15 Pro, Galaxy S24 Ultra) integran 3-5 cámaras con distancias focales equivalentes de 13mm-120mm, lentes de 7 elementos, y estabilización óptica de ±3° que compensa vibraciones.
          </p>
        </div>

        <div className="application-item">
          <h3>🔬 Instrumentos Científicos</h3>
          <p>
            Los microscopios ópticos compuestos alcanzan aumentos de 40×-1000× con resolución límite de ~200 nm (criterio de Rayleigh: λ/2NA, con λ=550nm y apertura numérica NA=1.4 en inmersión). Los microscopios confocales ($50k-$150k) usan láser y pinhole para secciones ópticas de 0.5-1 μm, eliminando luz fuera de foco. Los telescopios refractores como el Gran Refractor de Yerkes (102 cm de diámetro, construido en 1897, $300k de la época) usan objetivos acromáticos que combinan crown y flint glass para reducir aberración cromática. Los sistemas de enfoque láser industrial ($5k-$25k) concentran luz en spots de 10-50 μm con profundidades de campo de 100-500 μm para corte, soldadura y grabado con potencias de 30W-6kW.
          </p>
        </div>

        <div className="application-item">
          <h3>🌐 Fibra Óptica y Telecomunicaciones</h3>
          <p>
            Las fibras ópticas monomodo (núcleo de 8-10 μm) transmiten datos a 10-100 Gbps por canal con pérdidas de 0.2 dB/km a 1550 nm, permitiendo enlaces transoceánicos de 10,000 km sin repetidores. El cable submarino MAREA (Microsoft-Facebook, 2018) tiene 8 pares de fibras con capacidad de 160 Tbps entre Virginia y Bilbao. La refracción total interna (ncore=1.4682, ncladding=1.4628) confina la luz con ángulo crítico de 81.9°. Los amplificadores EDFA (Erbium-Doped Fiber Amplifier) bombean iones Er³⁺ con láser de 980 nm para amplificar señales cada 80-100 km con ganancia de 20-30 dB. Las fibras multimodo (núcleo 50-62.5 μm) se usan en redes locales hasta 2 km con LED o VCSEL de 850 nm. Los conectores SC, LC y MPO ($5-$50) tienen pérdidas de inserción de 0.1-0.3 dB.
          </p>
        </div>

        <div className="application-item">
          <h3>🎬 Realidad Virtual y Holografía</h3>
          <p>
            Los cascos VR modernos (Meta Quest 3, $500; Apple Vision Pro, $3,500) usan lentes de Fresnel o pancake que reducen grosor a 20-40 mm mientras mantienen campos de visión de 90-110°. Las lentes pancake (polarizadores + reflector parcial) pliegan el camino óptico reduciendo la distancia ojo-pantalla de 50 mm a 30 mm, con distorsión {'<'}2% en el 80% del FOV. Los displays alcanzan 2000×2000 píxeles por ojo (25 PPD) con tasas de refresco de 90-120 Hz. La holografía digital usa matrices de fase SLM (Spatial Light Modulator) con 1920×1080 píxeles de 8 μm modulando fase de luz coherente (láser 532 nm, 635 nm) para reconstruir frentes de onda 3D con profundidad de reconstrucción de 100-500 mm. Los hologramas de volumen de reflexión (Lippmann-Denisyuk) usan emulsiones fotográficas de haluro de plata con resolución de 3000-5000 líneas/mm.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>📜 Historia de la Refracción y las Lentes</h2>
        
        <div className="history-item">
          <h3>🔮 Lentes Antiguas y Primeras Observaciones</h3>
          <p>
            Las primeras lentes conocidas son las "lentes de Nimrud" (750-710 a.C.), cristales de roca tallados encontrados en el palacio asirio de Kalhu (actual Irak). Los romanos usaban esferas de vidrio llenas de agua como lupas (Séneca, 4 a.C. - 65 d.C., describió la ampliación). Las "piedras de lectura" medievales (berilo pulido, de ahí "brillen" en alemán para gafas) se documentan desde el siglo IX. Alhazen (Ibn al-Haytham, 965-1040) en su "Kitab al-Manazir" describió la refracción y fabricó lentes planoconvexas, sentando bases de la óptica geométrica. Roger Bacon (1220-1292) propuso usar lentes para corregir la visión, registrando observaciones sobre aumento. Las primeras gafas documentadas aparecen en Italia hacia 1286 (sermón de Giordano da Pisa menciona invención 20 años antes).
          </p>
        </div>

        <div className="history-item">
          <h3>📐 Descubrimiento de la Ley de Snell</h3>
          <p>
            Willebrord Snellius (1580-1626) descubrió experimentalmente la ley de refracción en 1621, aunque no la publicó (sus notas se perdieron). René Descartes (1596-1650) derivó independientemente la ley en "La Dioptrique" (1637) usando analogías mecánicas de partículas de luz. Thomas Harriot (1560-1621) había encontrado la relación hacia 1602 pero no publicó. La constante "índice de refracción" fue introducida por Snellius, quien midió n₁sin(θ₁) = n₂sin(θ₂) para agua (n≈1.33) y vidrio (n≈1.5). La explicación ondulatoria de Christian Huygens (1678) y la derivación de Pierre de Fermat usando el principio de tiempo mínimo (1662) consolidaron la comprensión teórica. Augustin Fresnel (1818) unificó todo con la teoría ondulatoria electromagnética.
          </p>
        </div>

        <div className="history-item">
          <h3>🔬 Desarrollo de Lentes Compuestas y Acromáticas</h3>
          <p>
            La aberración cromática (Newton observó en 1666 que vidrios simples dispersan colores) limitó telescopios refractores hasta el siglo XVIII. John Dollond (1706-1761) patentó en 1758 el objetivo acromático combinando lentes crown (n=1.517, dispersión baja) y flint (n=1.620, dispersión alta) que cancelan dispersión manteniendo potencia. El telescopio acromático de 76 cm del Observatorio de Pulkovo (1839, $50k) permitió descubrimientos estelares. Joseph von Fraunhofer (1787-1826) desarrolló vidrios ópticos de alta calidad, midiendo 574 líneas espectrales del Sol y calculando dispersiones con precisión de 10⁻⁴. Carl Zeiss y Ernst Abbe (1860-1905) revolucionaron fabricación óptica con diseño sistemático usando teoría de aberraciones, introduciendo objetivos apocromáticos (corrección de 3 colores) y cálculo de números de Abbe (V = (nD-1)/(nF-nC)).
          </p>
        </div>

        <div className="history-item">
          <h3>💎 Lentes Modernas y Materiales Avanzados</h3>
          <p>
            El siglo XX introdujo plásticos ópticos: CR-39 (Columbia Resin #39, 1940, n=1.498, densidad 1.32 g/cm³) reemplazó vidrio en gafas por ser 50% más ligero. El policarbonato (1970s, n=1.586, resistencia al impacto 10× mayor) se usa en gafas de seguridad y visores. Los vidrios de alto índice (n=1.7-1.9, introducidos en 1980s) permiten lentes 40% más delgadas. Los recubrimientos antirreflejos multicapa (1930s, refinados en 1970s-1990s) con capas de MgF₂, TiO₂, ZrO₂ de grosor λ/4 (138 nm para 550 nm) reducen reflexión del 8% al 0.5%, transmitiendo 99.5% de luz. Las lentes asféricas computarizadas (diseño CAD desde 1980s, fabricación CNC con precisión de 0.1 μm) eliminan aberración esférica. Las lentes fotocromáticas (Corning PhotoGray, 1964) usan cristales de haluro de plata o moléculas espiropiranos que cambian estructura con UV, oscureciendo en 30 segundos y aclarando en 2-5 minutos.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>✨ Curiosidades sobre Refracción y Lentes</h2>
        
        <div className="anecdote-item">
          <h3>🌅 Los Espejismos y la Refracción Atmosférica</h3>
          <p>
            Los espejismos inferiores (típicos en desiertos y carreteras calientes) ocurren cuando el aire caliente cerca del suelo (n≈1.00026 a 50°C) tiene menor índice que el aire frío superior (n≈1.00029 a 20°C). Rayos de luz del cielo se curvan hacia arriba por refracción gradual, creando la ilusión de agua. La curvatura sigue r = n₀/(dn/dh) donde dn/dh≈-10⁻⁶ m⁻¹ es el gradiente vertical del índice. Para ángulo de visión de 1° respecto al suelo, el espejismo aparece a ~300-500 m. Los espejismos superiores (fata Morgana) en regiones polares o sobre agua fría invierten la estratificación, proyectando imágenes de barcos u objetos distantes flotando en el aire. El fenómeno permitió observar barcos a 50-100 km en condiciones excepcionales. Los mirages también afectan astronomía: la "seeing" atmosférica (turbulencia con células de 10-20 cm) limita resolución de telescopios terrestres a ~1 arcsec, razón por la cual Hubble en órbita alcanza 0.05 arcsec.
          </p>
        </div>

        <div className="anecdote-item">
          <h3>🌈 El Ángulo Mágico del Arcoíris</h3>
          <p>
            René Descartes calculó en 1637 que el arcoíris primario aparece a 42° del antisol por refracción en gotas de lluvia (0.5-5 mm de diámetro). La luz entra, se refleja una vez internamente, y sale con dispersión: rojo a 42.5° (n=1.331), violeta a 40.8° (n=1.343). El arcoíris secundario (dos reflexiones internas) aparece a 51° con colores invertidos y 43% de intensidad del primario. Entre ambos arcos está la "banda oscura de Alexander" con 30% menos brillo. Los arcoíris supernumerarios (franjas adicionales dentro del arco primario) son interferencia de ondas, visibles cuando gotas son uniformes (0.5-1 mm). Isaac Newton estudió arcoíris artificiales con prismas en 1666, descomponiendo luz blanca en espectro. Los arcoíris lunares (moonbows) ocurren con luna llena y lluvia nocturna, apareciendo blanquecinos al ojo humano por baja intensidad, pero coloridos en fotografías de larga exposición. Registros más espectaculares: arcoíris doble completo sobre Yosemite (1979), y arcoíris circular visto desde avión (ángulo completo de 360° centrado en la sombra del avión).
          </p>
        </div>

        <div className="anecdote-item">
          <h3>🔬 El Problema de las "Lentes Perfectas"</h3>
          <p>
            Durante siglos, fabricar lentes de calidad uniforme fue imposible. Las lentes de Galileo (1609) tenían burbujas y estrías que causaban aberraciones, limitando aumentos útiles a 30×. El vidrio óptico moderno requiere homogeneidad de índice de refracción Δn {'<'} 10⁻⁶ en todo el volumen. Pierre-Louis Guinand (1748-1824) desarrolló hacia 1805 el proceso de "stirring" (agitación de vidrio fundido durante 24-48 horas a 1400°C) que eliminó estrías. Fraunhofer refinó la técnica, produciendo blanks de vidrio de 200 mm con variación Δn {'<'} 5×10⁻⁶. El pulido de superficies fue igualmente crítico: lentes modernas de precisión tienen desviaciones de λ/10 (55 nm para luz verde) en el 95% de la superficie, alcanzado con polidores planetarios CNC y slurries de óxido de cerio de 1-5 μm durante 6-12 horas. Los telescopios espaciales como Hubble requieren λ/20 (27 nm), logrado con pulido iónico y láser. El error de fabricación del espejo primario de Hubble en 1990 fue de solo 2.2 μm (borde muy plano), pero causó aberración esférica masiva que costó $4.7 mil millones reparar en 1993 con lentes correctoras COSTAR.
          </p>
        </div>

        <div className="anecdote-item">
          <h3>💡 Fibra Óptica: De Experimento a Internet Global</h3>
          <p>
            El físico Daniel Colladon demostró en 1840-1842 guiado de luz en chorros de agua curvos en la Universidad de Ginebra, fenómeno redescubierto por John Tyndall en 1854 ante la Royal Society. Las primeras fibras ópticas flexibles las fabricó Clarence Hansell en 1920s para transmitir imágenes. Heinrich Lamm intentó en 1930 usar fibras para endoscopios médicos (haz de fibras de cuarzo de 50 μm), pero la alta atenuación (1000 dB/km) lo hizo impracticable. El avance llegó en 1966 cuando Charles Kao y George Hockham (Nobel de Física 2009) publicaron que sílice ultrapura podría alcanzar {'<'}20 dB/km. Corning Glass Works logró en 1970 fibras de 17 dB/km, cayendo a 4 dB/km en 1975 y 0.2 dB/km en 1979. El primer sistema comercial se instaló en 1977 en Chicago (2 km, 45 Mbps). Hoy, el cable submarino 2Africa (45,000 km, $1 mil millones, 2024) conecta 33 países con 180 Tbps usando 16 pares de fibra y amplificadores cada 60 km. La latencia física mínima por refracción (v=c/n=2×10⁸ m/s en fibra) es 5 ms por 1000 km, limitando trading algorítmico intercontinental.
          </p>
        </div>

        <div className="anecdote-item">
          <h3>👁️ La Cirugía Refractiva LASIK</h3>
          <p>
            La queratomileusis (del griego "tallar la córnea") la propuso José Ignacio Barraquer en 1949 en Bogotá, usando un microtomo para cortar lámina corneal, congelarla, tallar curvatura con torno, y reimplantarla. La técnica evolució a LASIK (Laser-Assisted In Situ Keratomileusis) en 1989 cuando Ioannis Pallikaris combinó microkeratomo y láser excimer. El láser excimer de ArF (193 nm) ablaciona córnea con precisión de 0.25 μm por pulso, removiendo 10-15 μm de grosor corneal por dioptría corregida. Un tratamiento de -3D remueve ~45 μm en zona central de 6-7 mm en 15-30 segundos (100-200 pulsos). Los sistemas modernos (VISX Star S4, Wavelight EX500, $500k-$750k) usan eye-tracking a 500-1400 Hz para compensar microsacadas oculares (0.5-1 Hz, amplitud 0.1-0.5 mm). Las técnicas de "wavefront-guided" miden aberraciones de orden alto (coma, trefoil) con sensores Hartmann-Shack (array de 200 lenslets proyectando spots), creando mapa de 50-200 puntos. Post-operatorio, el índice de refracción corneal cambia de n=1.376 a efectivamente menor por adelgazamiento central. Efectos secundarios incluyen halos nocturnos (15-20% pacientes primer mes, {'<'}5% permanente) y ojo seco (glándulas lagrimales tardan 6-12 meses en normalizarse). Más de 40 millones de procedimientos realizados globalmente desde 1990, con tasa de satisfacción de 95% y coste de $2,000-$4,000 por ojo.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h2>📝 Resumen de Conceptos Clave</h2>
        <ul>
          <li>La refracción cambia la dirección de propagación de la luz al atravesar medios con diferentes índices (n = c/v), siguiendo la Ley de Snell: n₁sin(θ₁) = n₂sin(θ₂)</li>
          <li>La reflexión total interna ocurre cuando n₁ {'>'} n₂ y θ₁ {'>'} θc = arcsin(n₂/n₁), base de fibras ópticas y prismas</li>
          <li>Las lentes convergentes (positivas, f {'>'} 0) concentran luz paralela en el foco; las divergentes (negativas, f {'<'} 0) dispersan luz como desde un foco virtual</li>
          <li>La ecuación de lentes delgadas (1/f = 1/do + 1/di) relaciona posiciones de objeto e imagen, con aumento m = -di/do = hi/ho</li>
          <li>La potencia de una lente P = 1/f (dioptrías D = m⁻¹) indica capacidad de convergencia; lentes en contacto suman potencias: Ptotal = P₁ + P₂</li>
          <li>Aplicaciones abarcan corrección visual (gafas -10D a +6D), fotografía (objetivos f/1.4-f/16 con múltiples elementos), instrumentos científicos (microscopios 1000×, telescopios), telecomunicaciones (fibra óptica 0.2 dB/km), y tecnología VR/holografía (FOV 110°, lentes pancake)</li>
        </ul>
      </div>
    </>
  );
};

export default RefraccionLentesTeoria;
