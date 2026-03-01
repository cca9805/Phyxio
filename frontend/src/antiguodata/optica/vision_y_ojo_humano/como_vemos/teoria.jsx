import { TheorySection, Concept, Important, Example } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "¿Cómo Vemos?",
  descripcion: "Proceso de visión y formación de imágenes",
  educationLevel: "ESO",
  levels: ['ESO'],
  isTheoryOnly: true
};

const ComoVemosTheory = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="El Proceso de la Visión" emoji="👀">
        <p>
          Ver es un proceso complejo que involucra tanto al ojo como al cerebro. 
          La luz entra en el ojo, se enfoca en la retina, y el cerebro interpreta 
          las señales eléctricas para crear la imagen que "vemos".
        </p>

        <Important>
          Este tema proporciona una base visual para ESO sobre el proceso completo de visión desde entrada luz hasta procesamiento cerebral.
          La imagen que se forma en la retina está invertida (boca abajo vertical horizont al flip 180°), 
          pero el cerebro la interpreta correctamente mediante procesamiento corteza visual V1-V4 construcción percepción orientation-reversal learned infancia primeros meses desarrollo neural.
        </Important>
      </TheorySection>

      <TheorySection title="Pasos del Proceso Visual" emoji="🔢">
        <Concept title="1. Entrada de luz">
          <p>
            La luz reflejada por los objetos entra al ojo a través de la córnea, 
            que actúa como la primera lente.
          </p>
        </Concept>

        <Concept title="2. Control de luz">
          <p>
            El iris ajusta el tamaño de la pupila para controlar la cantidad de luz 
            que entra, protegiéndonos de la luz excesiva.
          </p>
        </Concept>

        <Concept title="3. Enfoque">
          <p>
            El cristalino cambia de forma (acomodación) para enfocar la luz 
            exactamente en la retina, tanto para objetos cercanos como lejanos.
          </p>
        </Concept>

        <Concept title="4. Formación de imagen">
          <p>
            La luz enfocada forma una imagen invertida en la retina. 
            Los fotorreceptores (conos y bastones) detectan la luz.
          </p>
        </Concept>

        <Concept title="5. Conversión a señales">
          <p>
            Los fotorreceptores convierten la luz en señales eléctricas mediante 
            un proceso llamado fototransducción.
          </p>
        </Concept>

        <Concept title="6. Transmisión al cerebro">
          <p>
            Las señales eléctricas viajan por el nervio óptico hasta el cerebro 
            a una velocidad de unos 120 m/s.
          </p>
        </Concept>

        <Concept title="7. Interpretación">
          <p>
            El cerebro (corteza visual) procesa las señales, invierte la imagen, 
            añade color, profundidad y movimiento, creando la percepción visual final.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Conos y Bastones" emoji="🎨">
        <Concept title="Bastones - Visión nocturna">
          <ul>
            <li>🌙 Funcionan con poca luz</li>
            <li>⚫⚪ Visión en blanco y negro</li>
            <li>📊 120 millones en cada ojo</li>
            <li>📍 Distribuidos por toda la retina</li>
          </ul>
        </Concept>

        <Concept title="Conos - Visión en color">
          <ul>
            <li>☀️ Necesitan más luz</li>
            <li>🎨 Visión en color</li>
            <li>📊 6-7 millones en cada ojo</li>
            <li>🎯 Concentrados en la fóvea</li>
            <li>🔴🟢🔵 Tres tipos: rojos, verdes y azules</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Adaptación a la Luz" emoji="💡">
        <Concept title="Adaptación a la oscuridad">
          <p>
            Cuando pasas de un lugar iluminado a uno oscuro, tus ojos necesitan 
            tiempo para adaptarse (20-30 minutos). Los bastones se vuelven más sensibles.
          </p>
        </Concept>

        <Concept title="Adaptación a la luz">
          <p>
            Cuando pasas de la oscuridad a la luz, la adaptación es más rápida 
            (1-2 minutos). La pupila se contrae para proteger la retina.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="El Punto Ciego" emoji="🚫">
        <p>
          Todos tenemos un punto ciego en cada ojo donde el nervio óptico sale 
          de la retina. No hay fotorreceptores en esa zona, pero normalmente 
          no lo notamos porque:
        </p>
        <ul>
          <li>🧠 El cerebro "rellena" la información faltante</li>
          <li>👁️👁️ Los dos ojos se compensan mutuamente</li>
          <li>👀 Los ojos están en constante movimiento</li>
        </ul>
      </TheorySection>

      {/* Bloques finales en orden estricto: Aplicaciones → Historia → Anécdotas → Resumen */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>Neurociencia visual procesamiento corteza cerebral fMRI</h3>
          <p>
            Vía visual retina-cerebro: células ganglionares RGCs 1.2M axones nervio óptico quiasma óptico hemicampos visuales cruzan contralateral nasal fibers temporal ipsilateral preserva mapa retinotopologico tracto óptico LGN lateral geniculate nucleus tálamo 6 capas magnocelular M layers 1-2 ventral movimiento contraste temporal transient response, parvocelular P layers 3-6 dorsal color forma resolución espacial detalle sustained, koniocellular K intercalados blue-yellow oponencia chromatic pathways, radiación óptica fibras Meyer's loop temporal lobe loop inferior campo visual superior lesiones produce quadrantanopia homonymous defecto cuadrante superior-inferior contralateral, V1 corteza visual primaria estriada área 17 Brodmann lóbulo occipital recibe input LGN procesa orientación bordes Hubel-Wiesel Nobel 1981 descubren columnas orientación simple-complex-hypercomplex cells jerarquía detección features características visuales, retinotopía mapa fóvea central magnificación cortical 50% V1 procesa 10° centrales campo visual vs 10% periferia 90° restantes énfasis resolución central lectura reconocimiento facial. V2-V5 áreas extraestriadas procesamiento especializado: V2 contornos ilusorios completamiento figuras, V3 forma dinámica movimiento global, V4 color constancia cromática lesiones acromatopsia cerebral mundo gris monocromático preserva conos retina intactos procesamiento perdido, V5/MT+ movimiento dirección velocidad optic flow navegación daño akinetopsia movimiento congelado frames estáticos no fluido rare bilateral lesiones case L.M. paciente famosa Zihl 1983 describe mundo snapshots, vías ventral-dorsal "what-where": ventral stream temporal lobe IT inferotemporal cortex reconocimiento objetos caras lugares memory visual prosopagnosia daño fusiform face area FFA lesiones bilaterales no reconocen rostros familiares familiares-celebridades preserva otras categorías selectividad, dorsal stream parietal cortex IPS intraparietal sulcus acción espacial reaching-grasping manipulación objetos ataxia óptica lesiones coordinación visuomotora mano perdida guiado visual movements.
          </p>

          <h3>Realidad aumentada proyección retinal displays wearables</h3>
          <p>
            AR glasses Microsoft HoloLens 2 $3,500 Magic Leap 2 $3,299 Vuzix Blade $1,000 superponen imágenes digitales mundo real campo visión usuario waveguides difractivos planar optics grosor 2-4 mm transparente see-through 40-60% transmisión ambient light proyector micro-OLED-LCOS 1920×1080 por ojo brightness 2,000-4,000 nits combate ambient sunlight outdoor usability vs VR opaco darkness total 200-400 nits suficientes, FOV field-of-view limitación AR actual 43-52° diagonal HoloLens vs humano 200° binocular tunnel effect restricts immersion expansión futuro 80-100° targets mejora experiencia periférica awareness. Retinal projection displays advanced concept láser RGB escanea directamente retina bypassing lentes pupila Microvision showWX+ $500 pico-projector 15 lm brightness 848×480 resolución ojo desnudo ve imagen flotante espacio virtual screen equivalente 60" a 3m distancia percibida portable pocket-size 100g, ventaja infinite depth-of-field todo enfoque simultáneo sin acomodación vergence-accommodation conflict problema VR/AR convencional focal plane fijo vergence variable mismatch causa fatiga visual headaches sessions {'>'} 30 min estudios 40-60% usuarios síntomas, láser clase 1 seguro {'<'}0.4 mW potencia espejo MEMS microelectromechanical raster scan horizontal-vertical 15-60 kHz refresh pixel-by-pixel construye imagen persistencia retinal 16 ms fusión temporal flicker fusion 60 Hz mínimo smooth motion perception. Aplicaciones médicas HUD heads-up-display cirugía laparoscópica overlay anotaciones realtime imaging CT-MRI slices proyectados campo quirúrgico guiado navegación precisión submilimétrica reduces tiempo operatorio 15-30% minimiza errores anatomía compleja neurocirugeía vascular oncología resecciones tumorales márgenes claros, industriales inspección calidad manufactura ensamblaje automotriz Boeing usa AR assembly wings fuselaje reduce errores 40% training tiempo 25% faster instrucciones visuales paso-a-paso manos libres workers productividad, educacional anatomía 3D modelos corazón-cerebro-esquelético overlay cuerpo estudiante interactivo disecta virtual layers órganos sistemas aprendizaje kinestético engagement 80% retention vs 20% lecture tradicional pasivo.
          </p>

          <h3>Autonomía vehículos visión computacional LIDAR-cámaras</h3>
          <p>
            Tesla Autopilot Full Self-Driving Beta visión pura 8 cámaras surround 360° cobertura sin LIDAR controversial decisión Elon Musk argumenta humanos conducen solo ojos suficiente visión replicate autonomous capability vs competidores Waymo-Cruise-Argo usan sensor fusion LIDAR-radar-cámaras redundancia robustez, cámaras wide-angle 120° FOV frontal-laterales fisheye 180° trasera pillar-mounted estereoscopic depth 50-250m rango resolución 1280×960 frames 36 fps captura movimiento rápido 100 km/h velocidades highway, procesamiento neural networks convolutional CNN arquitecturas ResNet-EfficientNet entrenadas millones imágenes labeled datasets detección objetos peatones-ciclistas-vehículos bounding boxes clasificación confianza scores {'>'} 0.95 threshold decisions, segmentación semántica pixel-level carril-calle-acera-edificios mapa scene understanding path planning trajectory optimization avoiding obstacles dynamic replanning realtime 10-30 Hz update rate latencia crítica {'<'}100 ms react emergency braking sudden pedestrian jaywalking scenarios. LIDAR light detection ranging láser pulsado 905nm infrarrojo mide tiempo vuelta TOF distance precision ±1-2 cm genera point cloud 3D millones puntos/s resolución angular 0.1-0.2° Velodyne HDL-64E $75k 64 láseres spinning 360° 10-20 Hz rotation vs solid-state MEMS scanning Luminar Iris $1k goal automotive-grade cost-reduction mass-production, ventaja noche lluvia niebla fog penetration activo emisor propio photons no depende luz ambiente vs cámaras passive requieren iluminación externo streetlights-headlights degraded visibility conditions challenging, desventaja clasificación objetos point cloud geometría pura sin color-texture limited semantic understanding requiere cámaras complementarias RGB data fusion algoritmos Kalman filter-particle filter tracking temporal consistency frame-to-frame velocidad estimación predict future positions 1-3 segundos anticipation planning.
          </p>

          <h3>Psicofísica percepción umbrales Weber-Fechner</h3>
          <p>
            Psicofísica Gustav Fechner 1860 "Elemente der Psychophysik" fundador disciplina estudia relación estímulos físicos sensaciones subjetivas percibidas cuantifica experiencia consciente matemáticamente scaling psychometric functions, ley Weber ΔI/I = k umbral diferencia justo notable JND just-noticeable-difference constante Weber fracción intensidad original ejemplo brillo k = 0.08 = 8% cambio detectable 100 cd/m² requiere aumento 8 cd/m² notar diferencia 1000 cd/m² necesita 80 cd/m² proporción constante absoluto varible, ley Fechner S = k log(I) sensación percibida proporcional logaritmo intensidad estímulo comprime rango dinámico 10¹⁰ luminancia 10⁻⁶-10⁴ cd/m² escala perceptual manejable lineal subjetiva doubling intensidad no duplica brightness percibido aumenta fijo amount steps equal sensation, modificación Stevens power law S = aIⁿ exponente n varía modalidad sensorial brillo n=0.33 compresivo loudness n=0.6 expansivo electric shock n=3.5 super-expansivo dolor crece rápido intensidad protective evolutionary advantage avoid damage. Umbrales absolutos mínima energía detectable visión 5-7 fotones llegan córnea 1-2 absorben rodopsina bastones single-photon detection capability quantum efficiency extraordinaria sensibilidad humana máxima bio-detector, experimentos clásicos Hecht-Shlaer-Pirenne 1942 sujetos dark-adapted 30 min reportan flashes 510 nm verde pico scotopic sensibilidad tasa detección 60% corresponde 5-14 fotones córnea atenuación ocular medios 50% absorción 2-7 fotones retina 1-2 bastones activados suficientes señal neural consciencia percepción "veo algo" dim light remarkable physiology.
          </p>

          <h3>Ilusiónes ópticas cognitivas Gestalt procesamiento top-down</h3>
          <p>
            Ilusión Muller-Lyer flechas longitud idéntica líneas centrales una termina puntas hacia afuera {'<'}-{'>'} otra hacia dentro {'>'}-{'<'} percibida 20-30% más larga primera explicación perspectiva Gregory 1963 esquinas interiores-exteriores habitaciones 3D cues profundidad misapplied contexto 2D drawing esquina exterior distante retina pequeña constancia tamaño compensa aumenta percibido vs interior cercana grande reducción perceived length mismatch, ilusiones geométricas Ponzo líneas paralelas ferrocarril convergen horizonte superior aparece mayor por perspectiva lineal depth cue override metric, Ebbinghaus círculos idénticos rodeados grandes aparece pequeño viceversa contexto relativo comparación contraste simultáneo modula percepción size-constancy mechanisms fallan ambiguous stimuli. Triángulo Kanizsa contornos ilusorios subjective contours tres pac-man circles orientados forman triángulo blanco brillante ausente imagen real cerebro completa gaps filling-in Gestalt closure continuidad buena forma preferencias perceptuales organization visual field meaningful wholes partes fragmentadas, leyes Gestalt proximidad-similaridad-continuidad-cierre-figura-fondo principles Max Wertheimer 1920s Köhler-Koffka fundadores escuela Berlín revoluciona psicología percepción holistic processes no elementarista Wundt structuralism atomistic sensations, top-down processing expectativas conocimiento previo influyen interpretación bottom-up sensory data ambiguos Necker cube reversible perspective flips voluntario-involuntario bistable perception competing interpretations oscilan corteza frontal decision circuits biasing V1 feedback modulation, aplicaciones diseño gráfico camuflaje militar breaking Gestalt grouping disruptía figure-ground segregation invisible backgrounds, arte Escher impossible figures Penrose triangle-staircase contradicciones geométricas localmente coherentes globally imposible 3D engages visual-cognitive systems reveals constructive nature perception realidad interna modelo cerebro no cámara pasiva.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        <div className="theory-subsection">
          <h3>Teorías antiguas emisión-recepción luz visión</h3>
          <p>
            Griegos debates extramission-intromission: Platón Timaeus ~360 a.C. teoría fuego visual ojos emiten rayos tocan objetos combinan luz externa permitir visión geometría óptica especulación filosófica metafísica ideal forms sensorial apariencia engañosa shadows cave allegory percepción imperfecta realidad verdadera, Euclides "Optics" 300 a.C. matemático axiomatiza visual rays propagación líneas rectas leyes reflexión espejos planos-curvos perspectiva tamaño angular objetos lejanos pequeños distancia inversa aunque física errónea geometría correcta aplicaciones prácticas agrimensura arquitectura óptica instrumental. Aristóteles rechaza extramission propone medio transparente aire-agua actualizado luz viaja forma-color objetos ojo pasivo recibe sensorio commune integra cinco sentidos vista-oído-tacto-gusto-olfato percepción unificada cualitativa no matemática influencia medieval Escolasticismo dogma católico Aquínate 1200s síntesis Aristóteles-Cristianismo impide progreso experimental hasta Renacimiento liberación autoridad church-state separación ciencia-religión secular inquiry. Alhazen Ibn al-Haytham 965-1040 revoluciona "Book of Optics" 1021 refuta extramission experimentos luz entra ojos intromission modelo correcto anatomía detallada córnea-cristalino-humor vítreo-retina nervio óptico cerebro imagen forma cristalino error localización corregido Kepler 1604 retina verdadera receptor neural, método experimental sistema hipótesis-test-conclusión fundador científico 600 años antes Bacon-Galileo Europa reconoce contribución Islam golden age 800-1200 preserva-expande conocimiento griego-romano mientras Europa medieval Dark Ages estancamiento cultural intellectual.
          </p>

          <h3>Kepler imagen retinal invertida 1604 revolución óptica</h3>
          <p>
            Johannes Kepler "Ad Vitellionem Paralipomena" 1604 tratado óptica astronómica complementa Witelo medieval 1270 Perspectiva enciclopedia luz-visión, breakthrough descubre imagen retina invertida upside-down horizontal-vertical luz objeto punto A diverge entra pupila converge cristalino lente biconvexa foco retina punto A' posterior rayo superior proyecta inferior viceversa inversión geométrica inevitable óptica refractiva, Kepler reconoce problema percepción: ¿cómo vemos derecha si imagen invertida? soluciona deja filosofía Aristotle anima sensible intelecto agente interpreta no competencia matemático-astrónomo boundaries disciplinas época separación ciencias naturales-filosofía no clara unificación posterior siglos XVIII-XIX, significancia astronómica aplica telescopio refractor Galileo 1609 diseño Kepler 1611 dos lentes convexas objetivo-ocular aumentos mayores 30× vs 8-20× galileano lente cóncava ocular imagen invertida problema terrestre aceptable celeste Luna-planetas-estrellas sin orientación absoluto arriba-abajo izquierda-derecha convencional observación, desarrollo prisma-erector systems añade lente tercera fourth invierte nuevamente imagen derecha uso militar spyglasses binoculares terrestres birding-hunting applications.
          </p>

          <h3>Descubrimiento punto ciego Mariotte 1660 demostración ingenious</h3>
          <p>
            Edme Mariotte físico francés 1660 presenta Académie Royale Sciences experimento demuestra punctum caecum blind spot retina localización disco óptico nervio óptico sale ojo sin fotorreceptores conos-bastones área 1.5×2 mm oval ángulo visual 5-6° horizontales 7-8° verticales nasal campo visual temporal ojo derecho 15-17° desde fijación central, demostración dos círculos papel separados 60-70 mm distancia horizontal observador cierra ojo izquierdo fija ojo derecho círculo izquierdo acerca-aleja papel distancia 25-30 cm círculo derecho desaparece proyección cae exactamente punctum caecum invisible ausencia receptores, cerebro filling-in completa gaps información circundante interpolación color-textura contexto no nota normalmente salvo experimentos deliberados condiciones controladas, binocularidad compensa ojos hemicampos visuales opuestos punto ciego ojo derecho temporal campo cubierto ojo izquierdo nasal viceversa redundancia evolucionaria robustez sistema visual bilateral simetría vertebrados, aplicaciones clínicas perimetría mapeo campos visuales scotomas blind spots patológicos glaucoma retinopatía lesiones neurológicas stroke V1 hemianopsia homonymous loss hemicampo contralateral bilateral cegueza cortical Anton syndrome denial blindness anosognosia bizarre neurology.
          </p>

          <h3>Hubel-Wiesel columnas orientación V1 Nobel 1981</h3>
          <p>
            David Hubel-Torsten Wiesel 1958-1962 Harvard Medical School electrofisiología single-unit recordings neuronas V1 corteza visual primaria gatos anestesiados presentan estímulos visuales barras luz orientaciones diferentes miden respuestas firing rate spikes/s action potentials, descubrimiento revolucionario neuronas selectivas orientación específica 0-180° responden máximo preferred angle ±10-15° tuning curve campana gaussiana no responden ortogonal 90° diferencia, jerarquía procesamiento simple cells receptive fields elongated ON-OFF regions paralelas detectan bordes barras orientación precisa posición retina específica, complex cells receptive fields más grandes toleran posición lateral mantienen orientación selectividad movimiento dirección preferida responden barra cruza field any location dentro boundaries, hypercomplex (end-stopped) cells detectan longitud barra terminaciones esquinas ángulos features geométricas complejas construcción representations objetos shapes. Arquitectura columnar organización vertical V1 penetran electrodo perpendicular superficie cortical neuronas misma orientación preferida columna 0.5 mm diámetro oblicuo atraviesan columnas adyacentes orientaciones rotan 10-15° secuencialmente 180° ciclo completo pinwheel centers singularidades topológicas todas orientaciones convergen mapa continuo smooth orientation preference dominios intercalados ocular dominancia columns ojo izquierdo-derecho inputs segregados ancho 0.5-1 mm alternating stripes visualizados transneuronal transport radioactive tracers autoradiography Hubel-Wiesel Nobel 1981 transforman neurociencia visual paradigm feature detection hierarchical processing basis perceptual organization Gestalt principles implementados biología código neural, extensión macacos rhesus monkeys anatomía similar humanos extrapolación primate cortex organiza parallel estructura función conservada evolución 25M años divergencia Old World monkeys homología cerebro visual fundamentals shared.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y Curiosidades
        </h2>
        <div className="theory-subsection">
          <h3>Inversión imagen retinal cerebro corrige aprendizaje</h3>
          <p>
            Experimento George Stratton psicólogo Berkeley 1896 usa gafas inversoras prismas invierten imagen vertical-horizontal mundo aparece upside-down primeros días desorientación severa náusea dificultad caminar manipular objetos coordinación visuomotora disrupted mano sube imagen cerebro procesa baja mismatch motor commands visual feedback confusion total, tras 3-5 días adaptación gradual cerebro plasticidad neural reinterpreta señales invertidas mundo derecha-up nuevamente coordinación restaura parcial 8 días experimento original completo funcional casi normal navegación tareas cotidianas realizar, remover gafas segunda inversión mundo aparece invertido nuevamente readaptación rápida 1-2 días vuelta baseline percepción original demuestra visión construcción activa cerebro no registro pasivo imagen retinal input processing top-down expectativas modulate bottom-up sensory data learned associations spatial relationships visuomotor calibration childhood desarrollo neural crítico period primeros meses-años vida establece mappings ojo-mano-cuerpo-espacio flexible adulthood limited extent neuroplasticity cortical reorganization posible ejercicios rehabilitación stroke daño cerebral terapia ocupacional visual training.
          </p>

          <h3>Visión ciega blindsight corteza dañada respuestas inconscientes</h3>
          <p>
            Blindsight fenómeno neurológico pacientes daño bilateral V1 corteza visual primaria occipital stroke-trauma-tumor bilateral ceguera cortical campo visual completo no ven conscientemente reportan blackness oscuridad total, experimento clásico Lawrence Weiskrantz 1970s paciente D.B. hemianopsia derecha complete blind hemicampo lesion V1 izquierdo, test forced-choice presenta estímulos hemicampo ciego luz-oscuridad objetos-movimiento pide adivinar guess location-direction chance 50% expectativa sorprendentemente acierta 70-90% casos significativamente mejor azar statistical significance subconcscious detection preserved, vías visuales alternativas bypass V1: superior colliculus tectum mesencéfalo estructura evolutivamente antigua reptiles-mamíferos recibe input retinal directo 10% RGCs proyectan colliculus vs 90% LGN-V1 primary pathway, colliculus-pulvinar-extrastriate cortex V2-V3-V5/MT motion detection reflexes rápidos orienting saccades eye-movements hacia estímulos salientes sudden motion threats evolutionary advantage predator detection survival mechanism operates unconsciously automatic no requiere awareness V1-mediated consciousness qualia subjective experience seeing, pacientes niegan ver algo insisten guessing puro incredulidad resultados accuracy frustration fenómeno bizarre filosofically intriguing dissociation visual awareness performance unconscious vision zombie mode philosophical debates consciousness neural correlates NCC David Chalmers hard problem subjective qualia no explicable completamente neurociencia funcional activity alone qualitative feel redness warmth pain irreducible physicalism contentious metaphysics.
          </p>

          <h3>Efecto McGurk audio-visual integración multisensorial ilusión</h3>
          <p>
            Harry McGurk-John MacDonald 1976 descubren ilusión perceptual robusta demostración vídeo persona pronuncia sílaba "ba" audio pista desincronizada muestra boca articulando "ga" oyente percibe tercer fusión "da" ni audio puro ni visual solo combinación integrada cerebro construye percepción comprometida inputs contradictorios prioritiza información visual lips-movement sobre auditivo soundwave cuando conflicto resuelve ponderación relativa confiabilidad cues ambiente ruidoso visibilidad alta vista domina reverso oscuridad audio claro hearing overrides, effect persiste conocimiento consciente ilusión incluso explican fenómeno saben mismatch todavía perciben "da" no pueden oyen "ba" puro automatic obligatory processing bajo nivel neural fusion ocurre etapas tempranas superior temporal sulcus STS integración auditory-visual streams precede awareness conscious reflection top-down control limitado override bottom-up interactions hardwired evolved mechanisms. Aplicaciones tecnología speech recognition systems incorporan visual lip-reading mejoran accuracy 20-30% ambientes ruidosos coctail party effect filtering background noise focus target speaker, virtual avatars animación facial precisa sincronizada phoneme-viseme correspondencia evita uncanny valley mismatch audio-visual desincronización {'>'} 50 ms detecta disrupts immersion video games CGI films dubbing foreign languages challenging match lip movements diferentes lenguas fonemas articulaciones varied actors voiceover artists skilled minimize discrepancies visual cues subtle most viewers tolerate 100-200 ms lag threshold perception quality production standards broadcast television cinema strict timing requirements professional tools synchronize audio-video tracks frame-accurate editing post-production.
          </p>

          <h3>Visión periférica detección movimiento baja resolución</h3>
          <p>
            Retina humana anatomically specialized fóvea centralis 1.5 mm diámetro ángulo visual 5° alta densidad conos 150k-200k/mm² spacing 2-3 μm resolución máxima 60 cycles/degree agudeza visual 20/10-20/20 lectura reconocimiento facial tareas detalle fino vs periferia 10°-90° excentricidad densidad decrece exponencialmente 10k-50k conos/mm² bastones dominan 120k-160k/mm² monochromatic scotopic visión nocturna motion detection sensibilidad movimiento excellente resolución espacial pobre 20/200-20/400 equivalente legal blindness central field alone, función evolutiva detección amenazas predadores periferia sudden motion orienting reflex rápido saccade eye-movement 200-300°/s velocity fija target central fovea examen detallado identify friend-foe decision fight-flight survival advantage, experimento demostración fija mirada punto central pantalla presenta letras periferia 20-30° excentricidad imposible leer identificar formas borrosas colores washed-out pasteles saturación reduce vs fóvea vividness brillante contraste alto, objeto mueve flashes change-blindness fenómeno miss grandes cambios escena si no fijación directa attentional blindness Simons-Chabris gorilla experiment 1999 sujetos cuentan pases baloncesto video persona disfraz gorilla cruza escena 50% no notan selective attention tunnel focus task-irrelevant stimuli ignored filtered cortical gating mechanisms limited capacity consciousness procesamiento consciente bottleneck filtro atencional Broadbent 1958 modelo clásico psicología cognitiva information processing paradigm.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <ul>
          <li>👀 Proceso visión: luz entra córnea pupila iris ajusta diámetro 2-8 mm luminosidad cristalino acomoda +15D a +20D enfoque objetos 10 cm-infinito distancia imagen forma retina invertida 180° vertical-horizontal cerebro corrige procesamiento V1-corteza visual orientación aprendida infancia</li>
          <li>Fotorreceptores retina: 120M bastones scotopic visión nocturna monocromática sensibilidad extrema 1-2 fotones detección rodopsina 500 nm pico absorción periferia dominan 10°-90° excentricidad movimiento rápido 6M conos photopic visión diurna color tricromática S-M-L opsinas λ=420-530-560nm RGB fóvea 1.5 mm 150k-200k/mm² densidad agudeza 20/10-20/20</li>
          <li>Vía neural: RGCs 1.2M axones nervio óptico quiasma hemicampos cruzan LGN tálamo 6 capas magno-parvo-konio radiación óptica V1 corteza visual primaria estriada columnas orientación Hubel-Wiesel simple-complex-hypercomplex cells jerarquía detección features bordes movimiento, V2-V5 extraestriadas forma color movimiento ventral-dorsal streams what-where</li>
          <li>Adaptación luz: oscuridad dark-adaptation 20-30 min bastones sensibilidad aumenta 10,000× rhodopsin regeneration lenta luz bright-adaptation 1-2 min pupila constricción 8mm a 2mm rápida protección retinal bleaching photopigments saturación temporal, rango dinámico total 10¹⁰ luminancia 10⁻⁶ starlight a 10⁴ cd/m² snow sunlight</li>
          <li>Punto ciego punctum caecum disco óptico nervio sale retina 1.5×2 mm oval 5-7° visual angle 15° temporal ojo derecho nasal izquierdo sin fotorreceptores ausente imagen cerebro filling-in completa gaps interpolación color-textura contexto binocularidad compensa hemicampos opuestos redundancia invisible normalmente Mariotte 1660 experimento demostración</li>
          <li>Aplicaciones: neurociencia fMRI mapeo V1-V5 activación BOLD signal 1-3% cambio resolución espacial 1-3 mm voxels temporal 1-2 s TR, AR glasses HoloLens-Magic Leap waveguides FOV 43-52° proyección retinal láser MEMS infinite DOF, autonomía Tesla 8 cámaras 360° CNN ResNet detección objetos segmentación semántica vs LIDAR point cloud 3D ±1-2 cm precision sensor fusion, psicofísica Weber-Fechner JND umbrales logarithmic scaling Stevens power law, ilusiónes Gestalt Kanizsa top-down Necker cube bistable Escher impossible</li>
        </ul>
      </div>
    </>
  );
};

export default ComoVemosTheory;
