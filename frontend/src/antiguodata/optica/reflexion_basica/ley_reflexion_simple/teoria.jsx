import { TheorySection, Concept, Important, Example, Formula } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "Ley de Reflexión",
  descripcion: "Reflexión de la luz y ley de reflexión",
  isTheoryOnly: true,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const LeyReflexionTheory = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Reflexión?" emoji="↩️">
        <p>
          La reflexión es el fenómeno por el cual la luz rebota cuando 
          choca contra una superficie. Gracias a la reflexión podemos ver los objetos 
          que no emiten luz propia.
        </p>

        <Important>
          Este tema proporciona una base conceptual visual para ESO sobre la ley fundamental de reflexión de la luz.
          Vemos los objetos porque la luz rebota en ellos y llega a nuestros ojos. 
          Sin reflexión, solo veríamos las fuentes de luz directas (Sol, bombillas, etc.).
        </Important>
      </TheorySection>

      <TheorySection title="Ley de Reflexión" emoji="📐">
        <Concept title="La regla fundamental">
          <p>
            La ley de reflexión establece que:
          </p>

          <Formula
            title="Ley de Reflexión"
            expression={`i = r`}
            where={[
              { symbol: 'i', description: 'Ángulo de incidencia medido desde la normal' },
              { symbol: 'r', description: 'Ángulo de reflexión medido desde la normal' }
            ]}
          />

          <h4>Elementos de la reflexión:</h4>
          <ul>
            <li>📍 Punto de incidencia: Donde el rayo toca la superficie</li>
            <li>➡️ Rayo incidente: Rayo que llega a la superficie</li>
            <li>↩️ Rayo reflejado: Rayo que rebota de la superficie</li>
            <li>⬆️ Normal: Línea perpendicular a la superficie en el punto de incidencia</li>
            <li>📐 Ángulo de incidencia (i): Ángulo entre el rayo incidente y la normal</li>
            <li>📐 Ángulo de reflexión (r): Ángulo entre el rayo reflejado y la normal</li>
          </ul>

          <Formula
            expression={String.raw`i = r`}
          />
          <p>Donde:</p>
          <ul>
            <li>i: Ángulo de incidencia medido desde la normal.</li>
            <li>r: Ángulo de reflexión medido desde la normal.</li>
          </ul>

          <Important>
            Los ángulos SIEMPRE se miden desde la normal (línea perpendicular), 
            NO desde la superficie.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Tipos de Reflexión" emoji="🔍">
        <Concept title="1. Reflexión especular (regular)">
          <p>
            Ocurre en superficies lisas y pulidas como espejos, agua tranquila, 
            metal pulido. Los rayos paralelos se reflejan también paralelos.
          </p>

          <h4>Características:</h4>
          <ul>
            <li>✨ Superficie muy lisa</li>
            <li>↔️ Rayos paralelos permanecen paralelos</li>
            <li>🪞 Se forma una imagen clara</li>
            <li>💎 Ejemplos: espejos, agua tranquila, vidrio</li>
          </ul>

          <Example>
            Ejemplo: Cuando te miras en un espejo, ves tu imagen clara 
            porque la reflexión es especular.
          </Example>
        </Concept>

        <Concept title="2. Reflexión difusa (irregular)">
          <p>
            Ocurre en superficies rugosas o ásperas como papel, madera, 
            tela, pared. Los rayos paralelos se reflejan en todas direcciones.
          </p>

          <h4>Características:</h4>
          <ul>
            <li>🏔️ Superficie rugosa o irregular</li>
            <li>🌟 Rayos se dispersan en todas direcciones</li>
            <li>❌ No se forma imagen clara</li>
            <li>📄 Ejemplos: papel, madera, ropa, paredes</li>
          </ul>

          <Example>
            Ejemplo: Puedes leer un libro porque el papel refleja la luz 
            de forma difusa hacia tus ojos, pero no ves tu reflejo en él.
          </Example>

          <Important>
            Aunque la reflexión difusa parece "desordenada", cada rayo individual 
            sigue cumpliendo la ley de reflexión. La diferencia está en que la superficie 
            tiene muchas orientaciones diferentes.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos Cotidianos" emoji="🏠">
        <Concept title="Reflexión especular">
          <ul>
            <li>🪞 Espejos del baño</li>
            <li>🚗 Retrovisores de coches</li>
            <li>💧 Superficie del agua tranquila (lagos, piscinas)</li>
            <li>📱 Pantalla del móvil apagada</li>
            <li>🍴 Cucharas y tenedores pulidos</li>
            <li>💿 CDs y DVDs</li>
            <li>🏢 Ventanas de edificios</li>
          </ul>
        </Concept>

        <Concept title="Reflexión difusa">
          <ul>
            <li>📄 Papel (por eso podemos leer)</li>
            <li>🧱 Paredes pintadas</li>
            <li>👕 Ropa</li>
            <li>🪵 Madera</li>
            <li>🌳 Hojas de árboles</li>
            <li>🚗 Pintura mate del coche</li>
            <li>📚 Páginas de libros</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Experimentos Simples" emoji="🧪">
        <Concept title="1. Comprobar la ley de reflexión">
          <h4>Materiales:</h4>
          <ul>
            <li>Espejo pequeño</li>
            <li>Linterna o puntero láser</li>
            <li>Papel blanco</li>
            <li>Transportador</li>
          </ul>

          <h4>Procedimiento:</h4>
          <ol>
            <li>Coloca el espejo vertical sobre el papel</li>
            <li>Dibuja una línea perpendicular al espejo (normal)</li>
            <li>Apunta la luz al espejo con diferentes ángulos</li>
            <li>Marca el rayo incidente y el reflejado</li>
            <li>Mide los ángulos con el transportador</li>
            <li>Comprueba que son iguales</li>
          </ol>
        </Concept>

        <Concept title="2. Reflexión especular vs difusa">
          <h4>Materiales:</h4>
          <ul>
            <li>Espejo</li>
            <li>Papel blanco</li>
            <li>Linterna</li>
          </ul>

          <h4>Procedimiento:</h4>
          <ol>
            <li>En una habitación oscura, apunta la linterna al espejo</li>
            <li>Observa cómo se refleja la luz (un solo rayo definido)</li>
            <li>Ahora apunta al papel blanco</li>
            <li>Observa cómo la luz se dispersa en todas direcciones</li>
          </ol>
        </Concept>

        <Concept title="3. Reflexión en agua">
          <h4>Materiales:</h4>
          <ul>
            <li>Recipiente con agua</li>
            <li>Linterna</li>
          </ul>

          <h4>Procedimiento:</h4>
          <ol>
            <li>Con el agua tranquila, apunta la linterna desde arriba</li>
            <li>Observa la reflexión especular</li>
            <li>Agita el agua</li>
            <li>Observa cómo la reflexión se vuelve difusa</li>
          </ol>
        </Concept>
      </TheorySection>

      {/* Bloques finales en orden estricto: Aplicaciones → Historia → Anécdotas → Resumen */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>Reflectores ópticos y faros</h3>
          <p>
            Linternas y faros automotrices usan reflectores parabólicos basados en reflexión especular (foco fuente luz en punto focal parábola f=5-50 cm, rayos reflejados emergen paralelos haz colimado, alcance 50-300 m faros LED 1,000-3,000 lúmenes, eficiencia 80-95% vs lentes refractivas 60-75%). Faros halógenos H4/H7 bulbos 55-100W temperatura 3,200K vida 500-1,000h vs LED 6,000K vida 30,000-50,000h consumo 15-25W. Reflectores aluminio anodizado o plateado reflectancia 85-95%, sellados policarbonato anti-UV resistencia impactos. Faros adaptativos AFS (Adaptive Front-lighting System) motores paso-paso giran reflector ±15° siguiendo volante-velocidad mejoran visibilidad curvas 25-40%, sistemas premium Audi/BMW/Mercedes matrix LED 84-140 LEDs individuales control apagan zonas selectivas evitan deslumbrar tráfico contrario detección cámaras 100-400m.
          </p>

          <h3>Fotografía y cine profesional</h3>
          <p>
            Reflectores fotografía redirigen luz natural/artificial basados ley reflexión i=r (paneles reflectores plegables 5-in-1: plateado especular 95% duro contrasty, dorado 85% cálido sunset, blanco difusor 75% suave natural, negro absorbe negativo fill, translúcido scrim difumina luz directa, tamaños 60-150 cm $20-$100 Neewer-Godox). Estudios profesionales softboxes octabox 80-150 cm interior plateado exterior difusor tela blanca convierte luz puntual fuente area ratio 1:4-1:16 suaviza sombras duras wraps rostro, speedlights Godox V1 76Ws GN60 zoom 28-200mm head magnético con reflectores clip-on beauty dish/snoot/barndoors $250. Cine HMI 1.2-18 kW daylight 5,600K con fresnels lentes escalonadas concentran haz 10-60° ajustable spot/flood, reflectores M90/M40 parabólicos 2-4 m diámetro bounces 95% luz solar escenas exteriores suplir fill shadows, book lights 2.4×2.4 m frames ultrabounce fabric 90% reflectancia iluminación beauty alta frecuencia poros skin.
          </p>

          <h3>Retrorreflectores seguridad vial</h3>
          <p>
            Catadioptras bicicletas/autos usan prismas esquina cubo (corner cube retroreflectors) reflejan luz exactamente hacia fuente independiente ángulo incidencia ±40° (triple reflexión interna 90° caras mutuamente perpendiculares invierte dirección rayo, coeficiente intensidad luminosa RA 10-50 cd/lux reflectores bici clase IZ vs 180-250 cd/lux retrovisores camión clase IIIA norma ECE R3/R104, eficiencia 70-90% entrada-retorno luz vs 5-15% espejos planos). Señales tráfico tipo III diamond grade microprismas hexagonales 50-100 μm base acrílico láminas 3M-Avery visibilidad nocturna 300-500 m faros 700-1,200 cd/(lux·m²) reflectancia específica, durabilidad 10-12 años UV-resistente. Marcadores viales "cats eyes" botones reflectores bidireccionales hemisféricos vidrio-polycarbonato montaje empotrado asfalto resistencia 20-40 toneladas espaciado 10-20 m carreteras niebla-lluvia guía lanes, inventor Percy Shaw 1934 UK patent millonario. Ropa alta visibilidad clase 3 EN ISO 20471 combinan fluorescentes día amarillo/naranja factor luminancia β≥0.4 + retrorreflectores noche cintas prismáticas 330-500 cd/(lux·m²) trabajadores construcción-emergencias visibles 150-300 m.
          </p>

          <h3>Telescopios reflectores astronómicos</h3>
          <p>
            Telescopios Newton, Cassegrain, Ritchey-Chrétien usan espejos primarios parabólicos-hiperbólicos reflexión especular captan luz estrellas débiles (primarios diámetro 15-400 cm f/4-f/8 relación focal, reflectancia aluminio 88-92% visible o plata 95-98%, recubrimientos protegidos SiO₂ overcoat 20-50 nm durabilidad 2-5 años, realuminización profesional ~$1M telescopios 10m clase). Amateurs construyen Dobsonianos 20-60 cm Pyrex-Sodalime espejos pulido manual pitch lap + óxido cerio rouge λ/8 calidad 6-12 meses trabajo $200-$1,000 materiales vs comprar $3k-$15k. Profesionales: VLT 4×8.2m Chile, Keck 2×10m Hawaii 36 segmentos hexagonales control activo nanómetros, ELT proyecto 39m 798 segmentos 1.4m cada adaptive optics compensa turbulencia atmosférica 1kHz. Secundarios hiperbólicos-elípticos doblan camino óptico acortan tubo 2-3× facilita montaje, spider vanes 3-4 brazos 1-3mm grosor soporte secundario crean difracción spikes estrellas brillantes fotografía Airy disk.
          </p>

          <h3>Reflectores solares concentración energía</h3>
          <p>
            CSP (Concentrated Solar Power) plantas termosolares canal parabólico cilíndrico reflectores aluminio-vidrio 6-12 m ancho 100-150 m longitud rastreo 1-eje siguen Sol este-oeste concentración 70-100× soles enfocan tubo receptor vacío aceite sintético Therminol/Dowtherm 300-400°C genera vapor turbina 50-250 MW eléctricos (SEGS California 354 MW 9 plantas 1984-1991, Solana Arizona 280 MW 2013 almacenamiento sales fundidas 6h $2B). Torre central helióstatos campo 1,000-10,000 espejos planos 20-150 m² individual tracking 2-ejes precisión ±1 miliradian reflejan receptor torre 100-200 m altura concentración 600-1,000× soles sales fundidas 60% NaNO₃+40% KNO₃ 565°C almacenamiento térmico 7-15h despacho nocturno (Ivanpah California 392 MW 173,500 helióstatos 2014, Gemasolar España 20 MW 2,650 helióstatos torre 140m factor capacidad 75% record). Discos parabólicos 5-25 m diámetro motor Stirling 10-50 kW eléctricos focal concentración 1,500-3,000× soles eficiencia record 31.25% SES 2008, modulares off-grid remotos. Hornos solares investigación Odeillo Francia concentrador parabólico 54 m 3,500°C fundición materiales cerámicos-metálicos ultra-alta temperatura.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        <div className="theory-subsection">
          <h3>Antigüedad clásica y primeras observaciones (300 a.C. - 1000 d.C.)</h3>
          <p>
            Euclides "Catoptrica" (Optics) ~300 a.C. primeras leyes reflexión especular espejos planos-curvos, principio rayos viajan líneas rectas, ángulos iguales intuido geométricamente sin normal explícita, 58 proposiciones óptica geométrica incluyen reflexiones múltiples espejos angulados. Herón Alejandría ~60 d.C. "Catoptrica" principio camino mínimo luz refleja punto A→espejo→punto B trayectoria más corta equivale ángulo incidencia=ángulo reflexión, precursor Fermat siglo XVII principio tiempo mínimo. Alhazen (Ibn al-Haytham) "Kitab al-Manazir" (Book of Optics) 1011-1021 tratado 7 volúmenes revolución óptica experimental: ley reflexión formal ángulos medidos desde normal perpendicular superficie, experimentos empíricos cámaras oscuras demuestran propagación rectilínea, refutación teoría extramission griega (ojos emiten rayos) establece luz viaja objetos→ojos, traducido latín "De aspectibus" 1200s influencia Bacon-Kepler-Descartes renacimiento óptica europea. Espejos metálicos bronce-especulum antiquísimos pulido mecánico reflectancia 60-75% aplicaciones cosméticos-ceremonias, espejos ardientes leyenda Arquímedes Siracusa 212 a.C. posiblemente espejos cóncavos bronce enfocan sol quemar velas barcos 30-50m distancia (réplicas modernas MIT 2005 confirman posible).
          </p>

          <h3>Renacimiento y formulación matemática (1300-1700)</h3>
          <p>
            Roger Bacon "Opus Majus" 1267 estudia espejos esféricos-parabólicos magnificación imágenes aplicaciones telescopios primitivos, describe reflexión-refracción leyes cualitativas precursoras Snell. Leonardo da Vinci cuadernos 1480s-1510s dibujos detallados reflexión agua-espejos metálicos, anatomía ojo cristalino lente comparación óptica geométrica, cámara oscura proyección invertida. Galileo telescopio refractor 1609 lentes convexas-cóncavas no reflectores, pero observaciones Luna montañas-cráteres luz-sombra validan ley reflexión cuerpos celestes no lisos perfectos. Newton "Opticks" 1704 libro III parte sobre reflexión: mediciones precisas ángulos incidencia-reflexión confirman i=r exactitud ±0.1°, experimentos reflexión interna total vidrio-agua ángulo crítico, telescopio reflector 1668 espejo primario metal speculum evita aberración cromática lentes, diseño Newton estándar amateurs siglos. Huygens "Traité de la Lumière" 1690 teoría ondulatoria principio Huygens wavefronts cada punto frente onda fuente secundaria wavelets, explica reflexión: frente onda incidente genera wavelets superficie reflectante construyen frente onda reflejado ángulo i=r geométricamente, compatible Fermat principio tiempo mínimo ondas.
          </p>

          <h3>Óptica geométrica moderna (1800-1900)</h3>
          <p>
            Formalización reflexión difusa Lambert "Photometria" 1760 ley Lambert superficie difusora ideal intensidad luminosa I=I₀cos(θ) ángulo visión, reflectancia difusa lambertiana independiente dirección observación, explica papel-yeso reflejan uniformemente todas direcciones vs especular espejos. Desarrollo recubrimientos metálicos espejos: Liebig 1835 plateado químico AgNO₃ reflectancia 90-95%, Foucault 1857 aplicación telescopios reflectores primarios vidrio-plata superior bronce 60-70%, aluminio evaporado vacío Strong-Draper 1932 reflectancia 88-92% UV-visible-IR ventajas peso-costo. Rayleigh "Theory of Sound" 1877 criterio rugosidad superficie reflexión especular vs difusa: especular si rugosidad RMS δ {' < '} λ/(8cos(θ)) donde θ incidencia, cuantifica transición liso-rugoso longitud onda dependiente, radio microondas λ=3cm superficie "lisa" si δ{' < '}4mm, luz visible λ=500nm requiere δ{' < '}60nm pulido óptico. Michelson interferómetro 1881 experimentos éter usa espejos semiplatina beam splitters reflexión parcial 50:50% transmisión:reflexión, null result velocidad luz constante precursor relatividad Einstein 1905.
          </p>

          <h3>Tecnología moderna reflexión (1900-2024)</h3>
          <p>
            Recubrimientos dieléctricos multicapa 1940s-50s deposición vacío capas λ/4 grosor óptico índices alternos alto-bajo (TiO₂ n=2.3 / SiO₂ n=1.46) interferencia constructiva reflectancia {'>'}99% banda estrecha, láseres cavidad resonante espejos R=99.99-99.999% pérdidas {' < '}100 ppm. Retrorreflectores esquina cubo Apollo 11-17 misiones Luna 1969-1972 depositan arrays 100-300 prismas sílice fundida 3.8 cm estaciones cinco sitios, láser ranging Earth-Moon mide distancia 384,400 km precisión ±1 mm tiempos ida-vuelta 2.5s fotones, científicos confirman Luna se aleja 3.8 cm/año mareas, test relatividad general equivalence principle precisión 10⁻¹³. Espejos dieléctricos LIGO (Laser Interferometer Gravitational-wave Observatory) 2015 primera detección ondas gravitacionales: espejos 40 kg 34 cm diámetro SiO₂-Ta₂O₅ 40 capas ion-beam sputtering reflectancia R=99.9999% pérdidas 1 ppm, brazos 4 km vacuum beam splitter 50:50 detecta cambios longitud ΔL~10⁻¹⁸ m colisiones agujeros negros-estrellas neutrones Nobel física 2017. Metamateriales reflexión perfecta teóricos: superlens Pendry 2000 índice refractivo negativo n=-1 reflexión perfecta sin pérdidas, plasmónico nanoestructuras Ag/Au periodo 50-200 nm demostraciones laboratorio R{'>'}99.9% 2018-2022, aplicaciones futuras computación fotónica qubits reflexión no-recíproca Faraday aisladores.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y Curiosidades
        </h2>
        <div className="theory-subsection">
          <h3>Visibilidad planetaria por reflexión solar</h3>
          <p>
            Planetas Venus-Marte-Júpiter-Saturno visibles noche reflejan luz solar no emiten propia, albedos (fracción luz reflejada) varían: Venus 75% nubes ácido sulfúrico reflectancia altísima brillantez magnitud -4.7 objeto más brillante nocturno tras Luna, Tierra 30% nubes-océanos-hielo, Luna 12% regolito rocoso gris basalto-anortosita reflexión difusa, Marte 25% óxido hierro polvo rojo, Júpiter 52% nubes amoníaco-metano bandas, Saturno 47% hielo agua anillos 90% reflectancia espectacular telescopios. Asteroides carbónicos tipo C albedo 3-9% oscurísimos carbón absorben 91-97% luz difícil detección requieren telescopios grandes, metálicos tipo M 10-20% hierro-níquel reflectivos, rocosos tipo S 15-25% silicatos. Cometas activos perihelio subliman hielo coma+cola reflejan-dispersan luz solar colas 10⁶-10⁸ km visibles ojo desnudo Halley-Hale-Bopp magnitud -1 apariciones 76 años/4,200 años. Satélites artificiales Iridium flares reflejos especulares antenas paneles solares 8×10° precisión geometría órbita-observador magnitud -9 brevemente 5-20s brillantez Iss -5.9 tercer objeto brillante cielo.
          </p>

          <h3>Reflectores bicicletas y retroreflexión</h3>
          <p>
            Catadioptras bicicletas obligatorios legislación tráfico mayoría países (FMVSS 136 USA, ECE R3 Europa) requieren delantero blanco/amarillo + trasero rojo + laterales ruedas amarillo-ámbar, funcionamiento passivo sin baterías basado prismas esquina cubo retroreflectan luz faros vehículos exactamente hacia conductor, eficiencia retorno 70-90% vs espejos planos 5-15% dispersan direcciones. Radios ruedas clips prismas 12-36 unidades per wheel parpadean rotación 200-600 RPM ciclista movimiento detección periférica conductor 300-500m vs estático 150-200m factor crítico seguridad nocturna. Ropa ciclista norma EN 13356 retrorreflectores prismáticos cintas 3M Scotchlite microprismas hexagonales 50-100 μm coeficiente retroreflexión 330-500 cd/(lux·m²) vs esferas vidrio 100-200 cd/(lux·m²) generación anterior. Estudios accidentología UK-Netherlands ciclistas equipo retrorreflectivo reducen colisiones nocturnas 30-50% conductores detectan 2-3s antes velocidades 50-90 km/h distancia frenado critical. Inventor Percy Shaw 1934 patenta "cats eyes" botones viales retroreflectores UK millonario, inspiración reflejos ojos gatos tapetum lucidum capa reflectante retina nocturna amplifica luz 6× mejora visión crepuscular.
          </p>

          <h3>Experimento medición velocidad luz Foucault-Fizeau</h3>
          <p>
            Fizeau 1849 primera medición terrestre velocidad luz (previas Rømer 1676 eclipses Júpiter-Io astronómico): rueda dentada 720 dientes gira 12.6 rev/s ventanas 25 μs modula haz luz viaja 8,633 m espejo retorna bloqueada siguiente diente, calcula c=313,000 km/s error 5% valor real 299,792 km/s. Foucault 1862 mejora método espejo rotatorio 800 rev/s desvía haz reflejado distancia focal 20 m imagen desplazada Δx=0.7 mm mide tiempo vuelta 2L/c geometría ángulos, obtiene c=298,000±500 km/s precisión 0.6% laboratorio compacto vs Fizeau campo abierto 8 km. Michelson 1879-1926 perfecciona técnica espejos octagonales rotativos 528 rev/s trayectorias 35 km Mount Wilson-Mount San Antonio vacuum tubes finalmente c=299,796±4 km/s error 13 ppm, establece estándar pre-láser. Definición moderna metro 1983 CGPM basada velocidad luz exacta c=299,792,458 m/s define metro longitud viaja luz vacío 1/299,792,458 segundo, invierte relación: c constante fundamental define distancias, relojes atómicos cesio-133 9,192,631,770 periodos definen segundo precisión 10⁻¹⁶ GPS satellites master timing.
          </p>

          <h3>Espejismos y reflexión total interna atmósfera</h3>
          <p>
            Espejismos inferiores desierto-asfalto gradiente temperatura aire caliente superficie n≈1.00026 vs aire frío altura n≈1.00029 diferencia Δn≈3×10⁻⁵, rayos luz objeto lejano (cielo, árbol) curvan hacia abajo refracción continua capas índice gradual, ángulo rasante superficies gradiente dn/dh≈-10⁻⁶ m⁻¹ alcanza crítico reflexión total interna rayo rebota hacia arriba simula "charco agua" reflejo invertido suelo, distancia aparición 300-500m altura observador 1.5-2m, velocidad vehículo 80-120 km/h espejismo avanza ilusoriamente inalcanzable. Espejismos superiores Fata Morgana regiones polares-océanos inversión temperatura aire frío superficie-cálido altura estabiliza atmósfera, objetos horizonte (barcos, islas, témpanos) aparecen flotantes-distorsionados-multiplicados castillos aire, canales estrechos rayan verticales comprimen imágenes transforman irreconocibles, visibilidad 50-100 km objetos normalmente invisibles 20-30 km curvatura Tierra. Vikings navegación Atlántico Norte posiblemente usaban espejismos detectar tierra icebergs días antes visible directo ventaja estratégica exploración-comercio rutas Groenlandia-Islandia-América. Astronomía: seeing atmosférico turbulencias aire índice refracción fluctuante distorsionan frentes onda estrellas image dancing blur FWHM 1-3 arcsec limitación telescopios terrestres vs 0.05 arcsec difracción teórica 1m aperture, óptica adaptativa espejos deformables 1,000 actuadores compensan 100×/s mejora 10-20× resolución approach Hubble ground-based.
          </p>

          <h3>Radar stealth y absorción vs reflexión</h3>
          <p>
            Aviones stealth F-117 Nighthawk, B-2 Spirit, F-22 Raptor reducen radar cross-section (RCS) metros cuadrados aviones convencionales 1-100 m² a 0.0001-0.001 m² (fracción pelota tenis) técnicas: geometría facetada ángulos planos desvían reflexiones fuera radar emisor i=r explotan ley reflexión especular evitan retorno, bordes afilados leading edges difractan ondas lateralmente, materiales absorbentes radar RAM (Radar Absorbent Material) ferritas-polímeros carbono grosor λ/4 frecuencia radar X-band 8-12 GHz λ=2.5-3.75 cm absorben 90-99% energía EM disipan calor vs reflejar. Paint F-35 capa 0.5-2 mm hexagonal ferrite tiles pérdidas dieléctricas convierten microondas térmica, mantenimiento intensivo humedad-grietas degradan efectividad requiere repintado frecuente $50k-$200k cada aircraft. Sea Shadows IX-529 stealth barco 1984 poliedros angulados tumblehome hull slope inward reduce waterline RCS, operaciones nocturnas invisible radar costero 5-20 km. Contraste submarinos radar surface search X-band detectan periscopios-snorkels metal mástiles 1-5 m² RCS distancia 10-30 km, stealth submarines conning tower composite-anechoic coating arrays rubber tiles pyramid structures absorben active sonar 2-10 kHz reduce detección 50-80% passive acoustic.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <ul>
          <li>La reflexión es el fenómeno por el cual la luz rebota al chocar contra una superficie, permitiéndonos ver objetos que no emiten luz propia</li>
          <li>La ley de reflexión establece que el ángulo de incidencia i es igual al ángulo de reflexión r, ambos medidos desde la normal (perpendicular a la superficie)</li>
          <li>Reflexión especular: ocurre en superficies lisas (espejos, agua tranquila) donde rayos paralelos se reflejan paralelos formando imágenes claras</li>
          <li>Reflexión difusa: ocurre en superficies rugosas (papel, madera) donde rayos se dispersan en todas direcciones sin formar imagen, pero cada rayo individual cumple i=r</li>
          <li>Aplicaciones: faros LED parabólicos, reflectores fotografía profesional, retrorreflectores seguridad vial (cats eyes, catadioptras), telescopios astronómicos, concentradores solares CSP</li>
          <li>Historia desde Euclides-Herón (300 a.C.) formalizando i=r, Alhazen 1021 óptica experimental, Newton-Foucault telescopios reflectores siglo XVII-XIX, hasta espejos LIGO R=99.9999% detectan ondas gravitacionales 2015</li>
        </ul>
      </div>
    </>
  );
};

export default LeyReflexionTheory;
