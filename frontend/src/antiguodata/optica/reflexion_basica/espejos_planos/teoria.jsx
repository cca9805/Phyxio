import { TheorySection, Concept, Important, Example, Formula } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "Espejos planos",
  descripcion: "Propiedades e imágenes formadas por espejos planos",
  isTheoryOnly: true,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const EspejosPlanosTheory = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="¿Qué es un espejo plano?" emoji="🪞">
        <p>
          Un espejo plano es una superficie pulida y plana que refleja la luz
          de forma especular. Produce imágenes virtuales que parecen estar
          detrás del espejo.
        </p>

        <Important>
          Este tema proporciona una base conceptual visual para ESO sobre espejos planos y formación de imágenes virtuales.
          La imagen en un espejo plano es virtual, derecha (no invertida verticalmente),
          del mismo tamaño que el objeto y a la misma distancia detrás del espejo
          que el objeto delante del espejo.
        </Important>
      </TheorySection>

      <TheorySection title="Propiedades de la imagen" emoji="📏">
        <Concept title="Características principales">
          <ul>
            <li>🟢 Imagen virtual: no puede proyectarse sobre una pantalla.</li>
            <li>↔️ Misma altura que el objeto.</li>
            <li>↩️ La imagen está a la misma distancia que el objeto respecto al espejo.</li>
            <li>🔁 Inversión lateral: izquierda y derecha se intercambian.</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Diagrama: rayo incidente y reflejado" emoji="📐">
        <p>En este diagrama se muestra un rayo incidente, la normal y el rayo reflejado.</p>

        <div style={{ maxWidth: 640, margin: '1rem auto' }}>
          <svg viewBox="0 0 400 200" width="80%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagrama de reflexión en espejo plano">
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
                <path d="M0 0 L10 5 L0 10 z" fill="#000" />
              </marker>
            </defs>

            {/* espejo: línea vertical */}
            <line x1="200" y1="10" x2="200" y2="190" stroke="#444" strokeWidth="4" />

            {/* normal en el punto de incidencia (punto en y=100) */}
            <line x1="200" y1="30" x2="200" y2="170" stroke="#888" strokeWidth="1" strokeDasharray="6 4" />

            {/* rayo incidente (desde la izquierda arriba hacia el punto 200,100) */}
            <line x1="40" y1="40" x2="200" y2="100" stroke="#d9534f" strokeWidth="3" markerEnd="url(#arrow)" />
            <text x="30" y="30" fontSize="12">Rayo incidente</text>

            {/* rayo reflejado (desde 200,100 hacia la izquierda abajo, simétrico respecto a la normal) */}
            <line x1="200" y1="100" x2="40" y2="160" stroke="#0275d8" strokeWidth="3" markerEnd="url(#arrow)" />
            <text x="30" y="180" fontSize="12">Rayo reflejado</text>

            {/* punto de incidencia */}
            <circle cx="200" cy="100" r="3" fill="#000" />
            <text x="215" y="105" fontSize="12">Punto</text>

            {/* ángulos (i) y (r) indicativos */}
            <path d="M200 100 L170 80 A30 30 0 0 0 200 70" fill="none" stroke="#666" strokeWidth="1" />
            <text x="160" y="75" fontSize="12">i</text>

            <path d="M200 100 L170 120 A30 30 0 0 1 200 130" fill="none" stroke="#666" strokeWidth="1" />
            <text x="160" y="135" fontSize="12">r</text>
          </svg>
        </div>

        <Important>
          En un espejo plano el ángulo de incidencia es igual al ángulo de reflexión;
          la imagen se forma por la prolongación de los rayos reflejados hacia atrás.
        </Important>

        <Formula 
          title="Ley de Reflexión en espejo plano"
          expression={`i = r`} 
          where={[
            { symbol: 'i', description: 'Ángulo de incidencia medido desde la normal' },
            { symbol: 'r', description: 'Ángulo de reflexión medido desde la normal' }
          ]}
        />
      </TheorySection>

      <TheorySection title="Experimento simple" emoji="🧪">
        <Concept title="Cómo comprobar la posición de la imagen">
          <h4>Materiales:</h4>
          <ul>
            <li>Espejo plano pequeño</li>
            <li>Figura (pequeña) o lápiz</li>
            <li>Transportador</li>
            <li>Papel y lápiz</li>
          </ul>

          <h4>Procedimiento:</h4>
          <ol>
            <li>Coloca la figura frente al espejo a una distancia conocida.</li>
            <li>Mide la distancia desde la figura al espejo.</li>
            <li>Observa la imagen aparente detrás del espejo y mide su distancia.</li>
            <li>Comprueba que la distancia imagen–espejo coincide con objeto–espejo.</li>
          </ol>
        </Concept>
      </TheorySection>

      {/* Bloques finales en orden estricto: Aplicaciones → Historia → Anécdotas → Resumen */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>Espejos domésticos y decoración</h3>
          <p>
            Los espejos planos son ubicuos en hogares: espejos de baño (40×60 cm a 60×120 cm típicos, aluminio con capa protectora 95-98% reflectancia, grosor 3-6 mm vidrio flotado), espejos de cuerpo entero (40×150 cm, marcos madera/metal/plástico $30-$300), espejos decorativos (diseños artísticos con biseles, enmarcados ornamentales Renacimiento-Art Déco, mercado global $4.2B en 2023). Iluminación integrada LED en espejos modernos (5,000-6,500K temperatura color, CRI {'>'}90, consumo 10-30W, anti-empañamiento resistivo 20-50W). Espejos inteligentes (smart mirrors) con pantallas integradas ($500-$3,000, widgets clima/noticias, comandos voz, conectividad IoT).
          </p>

          <h3>Retrovisores automotrices</h3>
          <p>
            Espejos interiores planos (25×7 cm típico, campo visual 30-40°, prisma día/noche Bauer 1932 tilt 4-5° reduce deslumbramiento 80-90%, electrocrómicos desde 1990s gel electrocrómico 0.5-3s oscurecimiento, sensores fotodiodos 2-3 detectan faros traseros). Laterales exteriores planos lado conductor (obligatorios desde 1960s FMVSS 111, calefactados 5-15W resistivos anti-hielo, ajuste eléctrico 2-4 motores, rebatimiento automático estacionamiento, asféricos convexos lado pasajero "objects closer" campo 2-3×). Cámaras digitales reemplazan espejos (Audi e-tron 2018, Honda e 2020, pantallas OLED 7-12", reduce drag 5-7%, campo visión ampliado 180-200°, visión nocturna infrarroja).
          </p>

          <h3>Instrumentación óptica profesional</h3>
          <p>
            Bancos ópticos de precisión usan espejos planos de primera superficie (aluminio evaporado al vacío 300-500 nm grosor, planicidad λ/10 a λ/20 = 32-64 nm RMS, rugosidad {' < '}5 Å, monturas cinemáticas 3-6 puntos contacto ajuste micrométrico 10 μm resolución, Newport-Thorlabs $200-$2,000). Interferómetros Michelson-Twyman-Green requieren espejos planicidad λ/100 = 6.3 nm ($5k-$50k, mediciones deformación 0.01 μm, control térmico ±0.1°C evita deriva). Periscópicos en submarinos (espejos planos dobles 45° prismas Porro, longitud tubos 3-10 m, diámetro objetivos 8-15 cm, aumentos 1.5×-12×, campo 6-60°, periscópicos modernos optrónicos CCD/thermal $2M-$10M).
          </p>

          <h3>Danza y estudios fitness</h3>
          <p>
            Estudios danza requieren espejos de cuerpo completo sin distorsión (altura 2-3 m, ancho 1.2-1.8 m por sección, instalación paredes completas 10-30 m lineales, grosor 5-6 mm vidrio templado seguridad, reflectancia 92-95%, planicidad ±0.5 mm por metro evita ondulaciones, costo $80-$150 por m², instalación profesional adhesivos estructurales Sikaflex/3M VHB $30-$60 por m²). Gimnasios usan espejos para corrección postural ejercicios (observación forma técnica sentadillas/peso muerto/press, feedback visual tiempo real mejora 15-25% técnica estudios biomecánicos). Espejos ballet barre altura 1.8-2.5 m desde suelo, iluminación uniforme 500-1,000 lux evita sombras duras.
          </p>

          <h3>Sistemas láser y alineación</h3>
          <p>
            Espejos planos dieléctricos multicapa para láseres alta potencia (reflectancia {'>'}99.9% longitud específica, HfO₂/SiO₂ alternan λ/4 grosor óptico 20-80 capas, daño umbral 10-50 J/cm² pulsos nanosegundos, planicidad λ/20 frente onda, rugosidad {' < '}2 Å RMS, Edmund Optics-CVI Laser $500-$5,000). Espejos galvanométricos escáner láser (galvos 5-20 mm diámetro, frecuencias 100-8,000 Hz, precisión ±5-50 μrad, aleaciones berilio-cobre baja inercia, sistemas XY marcan 1,000-7,000 mm/s velocidades, aplicaciones litografía/grabado/corte/show láser, Cambridge Technology-Scanlab $1k-$20k). Espejos planos alineación HeNe referencia (λ=632.8 nm, potencia 1-5 mW, divergencia 1 mrad, colimación {' < '}0.5 mrad permite alineación óptica 10-100 m distancias precisión ±0.1 mm).
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        <div className="theory-subsection">
          <h3>Espejos antiguos (6000 a.C. - 1500)</h3>
          <p>
            Primeros espejos: obsidiana pulida Anatolia 6000 a.C. (reflectancia 5-10%, superficie vítrea natural), cobre pulido Mesopotamia 4000 a.C. (reflectancia 40-60%, oxidación verdín requiere repulido frecuente), bronce pulido Egipto-China 2000 a.C. (aleación Cu-Sn 70:30, reflectancia 60-70%, patina verde CuCO₃). Espejos metálicos romanos bronce-estaño (speculum metal 67% Cu + 33% Sn, reflectancia 70-75%, frágil difícil pulir, ejemplares Pompeya museo Nápoles). Espejos vidrio plomo romanos siglo I (backing vidrio soplado con amalgama plomo-estaño, reflectancia 50-60%, piezas pequeñas 5-15 cm diámetro excavaciones Herculaneum). Edad Media espejos convexos vidrio (catedral Arnolfini van Eyck 1434, backing mercurio-estaño, imágenes miniatura decorativas).
          </p>

          <h3>Revolución vidrio plateado (1500-1900)</h3>
          <p>
            Venecia monopolio espejos cristal siglo XVI (isla Murano maestros vidrieros, backing amalgama mercurio-estaño aplicación hojas estaño + mercurio líquido presión rodillos, reflectancia 75-85%, espejos Versalles Galería Espejos 357 espejos 1684 $1.5M equivalente actual, exportación castigada pena muerte proteger secretos). Proceso Justus von Liebig 1835 depósito químico plata (solución AgNO₃ + azúcar reductor glucosa deposita Ag metálica uniforme superficie vidrio, reflectancia 90-95%, revoluciona industria espejos accesibles, patente $10k-$50k licencias). Vidrio flotado Pilkington 1959 (estaño fundido 1,050°C baño flotación vidrio plano grosor uniforme ±0.1 mm, superficie perfecta planicidad λ/4 sin pulido, costo reducción 80-90%, vidrio espejos modernos 90% proceso float). Protección cobre-pintura siglo XX (capa cobre 50-100 nm protege plata oxidación H₂S ambiente, pintura backing epoxy/poliuretano impermeabiliza humedad, durabilidad 20-30 años ambientes normales).
          </p>

          <h3>Espejos primera superficie (1850-1950)</h3>
          <p>
            Foucault plateado químico 1857 aplicación telescopios (depósito plata espejo cóncavo vidrio, reflectancia 90-92% visible 300-700 nm, sin absorción vidrio atravesar backing, telescopio reflector 80 cm 1862). Aluminio evaporado al vacío Strong-Draper 1932 (campana vacío 10⁻⁵-10⁻⁶ torr, filamento tungsteno evapora aluminio 1,200-1,400°C, depósito 80-150 nm grosor, reflectancia 88-92% visible + 95-98% IR, oxidación natural Al₂O₃ 2-5 nm protege, telescopios Hale 200" Palomar 1948 aluminio). Recubrimientos dieléctricos multicapa 1940s-50s (λ/4 grosor óptico MgF₂/SiO₂/TiO₂ alternan, interferencia constructiva reflectancia {'>'}99% longitudes específicas, láseres rubí 1960 espejos cavidad resonante, tecnología deposición vapor PVD-CVD control 1-5 nm precisión grosor). Espejos protegidos overcoated SiO₂ o MgF₂ 1960s-70s (20-100 nm capa dieléctrica protección mecánica sobre aluminio-plata, limpieza acetona-etanol sin degradar, durabilidad ambiental 5-10× mayor).
          </p>

          <h3>Espejos modernos avanzados (1950-2024)</h3>
          <p>
            Espejos dieléctricos alta reflectancia (HfO₂/SiO₂ 40-80 capas λ/4, R {'>'}99.99% banda estrecha 10-50 nm, pérdidas {' < '}10 ppm laser ultrabajo ruido, deposición ion-beam sputtering IBS control 0.1 nm grosor, rugosidad {' < '}1 Å RMS AFM, laser gravitacional LIGO espejos 40 kg óptica cuántica R=99.9999% pérdidas 1 ppm fused silica $500k-$2M). Espejos segmentados telescopios (Keck 1993-96 36 segmentos hexagonales 1.8 m Zerodur, control activo 3 actuadores por segmento posición ±4 nm, sensores capacitivos feedback 100 Hz, Webb 2021 18 segmentos berilio 1.32 m gold 100 nm coating R=98% IR 0.6-28 μm criogénico -233°C). Smart mirrors pantallas integradas (LG-Samsung 2015-2020 Android display LCD/OLED detrás espejo semitransparente 70:30 transmisión:reflexión, touchscreen capacitivo, apps widgets clima/calendario/noticias, cámaras RGB reconocimiento facial, luces LED circadianas 2,700-6,500K, mercado $2.8B 2023 proyectado $8.5B 2030). Metamateriales espejos perfectos teóricos (metamaterial plasmónico nanoestructuras Ag/Au periodo 50-200 nm, reflectancia R{'>'}100% teórico cancelación radiativa pérdidas, demostraciones laboratorio R=99.7-99.9% 2018-2022, aplicaciones futuras computación fotónica qubits).
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y Curiosidades
        </h2>
        <div className="theory-subsection">
          <h3>Inversión lateral y confusión ambulancias</h3>
          <p>
            Ambulancias escriben "AMBULANCIA" invertido horizontalmente en capó (letras espejo reversa lateral izquierda{'↔'}derecha, conductores adelante leen correctamente retrovisor plano interior, fenómeno inversión lateral espejos planos conserva arriba-abajo invierte izquierda-derecha, ley reflexión i=r simétrico normal pero observador humano interpreta profundidad invertida, estudio psicología percepción Gregory 1997). Selfies smartphones invierten imagen automáticamente (cámara frontal muestra preview espejo para facilitar encuadre familiaridad rostro propio, foto final guardada no invertida muestra como otros ven, opción configuración iOS/Android toggle mirror/normal, usuarios prefieren 65-75% versión espejo por exposición mere-exposure effect Zajonc 1968, asimetría facial percibida 5-15% diferencias partes izquierda-derecha rostro estudios antropométricos). Letras ambiguas simétricas (A H I M O T U V W X Y mayúsculas simétricas verticales no cambian espejo, B C D E F G J K L N P Q R S Z se ven invertidas, números 0 1 8 simétricos, 2 3 4 5 6 7 9 se invierten, palíndromos visuales SWIMS/TACOCAT leen igual).
          </p>

          <h3>Ley reflexión y ángulos fotógrafos</h3>
          <p>
            Fotógrafos usan espejos planos iluminación reflectores rebote (paneles espejo 60×90 cm o 120×180 cm dirigir luz solar intensa 100,000 lux localizada sujeto outdoor, ángulo incidencia = ángulo reflexión permite calcular posicionamiento exacto, reflector espejo vs blanco difusor: espejo mantiene 90-95% intensidad direccional especular, blanco difunde 60-80% omnidireccional suave, aplicaciones películas Hollywood reflectores grandes 2.4×2.4 m "bounce boards" escenas desierto/nieve). Ring lights espejos múltiples (anillos LED 10-45 cm diámetro 96-600 LEDs con espejo central plano 5-15 cm, catchlights circulares simétricos pupilas modelos, reflectancia especular espejo crea highlights definidos vs difusor suave, maquilladores-influencers prefieren espejo nitidez 8-12" típico $50-$300, videollamadas Zoom ring lights boom 2020 pandemia mercado $500M). Periscopios cámaras smartphones (módulos periscópicos Huawei P30 Pro 2019 + Samsung S20 Ultra 2020, prisma 90° + espejo plano dentro chasis 8-10 mm grosor, zoom óptico 5×-10× focal 125-240 mm equivalente, distancia focal física 13-35 mm plegado 90° lateralmente, conjunto lentes 4-6 elementos plástico asférico, sensor 8-48 MP 1/2"-1/3.6", apertura f/3.4-f/4.9).
          </p>

          <h3>Espejos infinitos y fractales</h3>
          <p>
            Dos espejos planos paralelos enfrentados crean "túnel infinito" (reflexiones múltiples imagen rebota espejos n veces, cada rebote absorbe 2-5% luz coating imperfecto, visibles 20-40 reflexiones hasta brillodemasiado débil {' < '}1% inicial, distancia aparente imagen n-ésima = 2nd donde d separación espejos 50-200 cm típico instalaciones arte, efecto Droste recursividad visual art galleries museos instalaciones LED infinito Yayoi Kusama "Infinity Mirror Rooms" desde 1965). Barbería clásica dos espejos (espejo delante cliente + espejo trasero peluquero 1-2 m distancia, cliente ve nuca infinitas veces retroalimentación visual corte, ángulo leve 2-5° entre espejos rompe simetría perfecta evita mareo prolonged gaze, psicología evita 100% paralelismo). Caleidoscopios geométricos (3 espejos 60° triángulo equilátero, simetría hexagonal 6-fold, objetos extremo multiplican patrones, invento Brewster 1816 patent, juguetes educativos ciencia-arte, versiones adultas arte vidriero $50-$500). Fractal Droste effect fotografía (Escher "Print Gallery" 1956 litografía recursiva, transformación logarítmica conforme espiral, foto dentro foto ad infinitum, algoritmos Photoshop plugin Droste effect 2006 mapeo exponencial-logarítmico).
          </p>

          <h3>Test plano espejo astronomía</h3>
          <p>
            Test Foucault 1858 mide planicidad espejos astronómicos (fuente luz puntual filo navaja edge cerca foco espejo, observador mira superficie retroiluminada, navaja corta rayos convergentes punto focal, defectos superficie aparecen sombras irregularidades ±λ/4=160 nm visibles ojo, imperfecciones zonas altas reflejan diferente, mapeo zonal roza precisión 1/10 λ = 55 nm RMS, telescopios amateurs fabrican espejos primarios vidrio Pyrex 15-40 cm diámetro f/4-f/8 pulido manual pitch lap + rouge 6-12 meses, costo materiales $50-$300 vs comprar $500-$3,000). Interferómetros Fizeau-Twyman-Green 1890s-1930s (patrón franjas interferencia mide frente onda λ/20 precisión, láser HeNe 632.8 nm referencia, franjas rectas=plano perfecto, curvadas=aberración esférica, software análisis Zernike polynomials descompone modos aberración, industria óptica profesional calibración $50k-$500k sistemas). Webb Space Telescope espejos λ/20 RMS (berilio pulido deposición gold 100 nm, cryogenic test -240°C simulación espacio vacío, rayos X Chandra λ/10 iridium coating, fabricación Ball Aerospace 18 segmentos $1-$2M cada, ensamblaje alineación nanómetros 2016-2021).
          </p>

          <h3>Supersticiones y psicología espejos</h3>
          <p>
            Romper espejo 7 años mala suerte (superstición romana reflejo captura alma, daño espejo hiere alma, 7 años renovación ciclo vida romana, vidrio-plata espejos caros siglos XVI-XVIII equivalente salario anual criado, miedo romper patrimonio cristalizó superstición, estudios antropología folklore 2,000 culturas 80% asocian espejos espíritus/almas/otro mundo). Cubrir espejos tras muerte (judaísmo shiva 7 días luto cubre espejos evita vanidad, Islam similar tapar reflectores, creencia alma difunto atrapada espejo, vampiros sin reflejo folklore eslavo romanos consideraban reflejo proyección alma no-muertos carecen). Test espejo autoconsciencia (Gallup 1970 marca roja frente animales, espejos observan si tocan marca propia, superan: humanos 18-24 meses, grandes simios chimpancés/bonobos/orangutanes/gorilas algunos, delfines/orcas/elefantes/urracas, implica self-awareness reconocimiento yo, 95% especies fallan tocan espejo como otro animal). Dismorfobia espejos (trastorno dismórfico corporal BDD obsesión defectos físicos imperceptibles otros, evitan o revisan espejos compulsivamente horas, prevalencia 1.7-2.4% población, comorbilidad ansiedad/depresión 75-80%, tratamiento CBT + SSRI).
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <ul>
          <li>Un espejo plano produce imágenes virtuales simétricas del mismo tamaño, ubicadas a igual distancia detrás del espejo que el objeto está delante</li>
          <li>La inversión lateral (izquierda{'↔'}derecha) ocurre porque los rayos se reflejan simétricamente respecto a la normal, conservando arriba-abajo</li>
          <li>La ley de reflexión i = r se cumple exactamente midiendo ángulos desde la normal perpendicular a la superficie</li>
          <li>Aplicaciones domésticas (baño, decoración, retrovisores), profesionales (bancos ópticos, danza, láser) y científicas (instrumentación de precisión)</li>
          <li>Históricamente evolucionaron desde obsidiana-bronce-amalgamas (reflectancia 5-75%) hasta plata-aluminio modernos (90-98%), espejos dieléctricos multicapa láser {'>'}99.99%</li>
          <li>Fenómenos curiosos incluyen túneles infinitos, inversión texto ambulancias, test autoconsciencia psicológica, y supersticiones culturales espejos-alma</li>
        </ul>
      </div>
    </>
  );
};

export default EspejosPlanosTheory;
