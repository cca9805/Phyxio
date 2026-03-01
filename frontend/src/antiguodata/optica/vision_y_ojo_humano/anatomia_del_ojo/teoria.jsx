import { TheorySection, Concept, Important, Example } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "Anatomía del Ojo Humano",
  descripcion: "Partes del ojo y sus funciones",
  educationLevel: "ESO",
  levels: ['ESO'],
  isTheoryOnly: true
};

const AnatomiaOjoTheory = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="El Ojo Humano - Nuestra Cámara Natural" emoji="👁️">
        <p>
          El ojo humano es un órgano increíble que funciona como una cámara fotográfica biológica. 
          Capta la luz del entorno y la transforma en señales eléctricas que el cerebro interpreta 
          como imágenes.
        </p>

        <Important>
          Este tema proporciona una base visual para ESO sobre anatomía del ojo humano y sus componentes estructurales.
          El ojo humano puede distinguir unos 10 millones de colores diferentes y adaptarse 
          a condiciones de luz que varían en un factor de 10 mil millones (rango dinámico 10¹⁰ desde luz estelar tenue 10⁻⁶ cd/m² hasta nieve brillante sol 10⁴ cd/m²).
        </Important>
      </TheorySection>

      <TheorySection title="Partes Externas del Ojo" emoji="🔍">
        <Concept title="Estructuras protectoras">
          <h4>1. Párpados 👁️</h4>
          <ul>
            <li>Función: Protegen el ojo del polvo, luz intensa y objetos</li>
            <li>Parpadeo: Distribuye lágrimas y limpia la superficie</li>
            <li>Frecuencia: Parpadeamos unas 15-20 veces por minuto</li>
          </ul>

          <h4>2. Pestañas 👁️</h4>
          <ul>
            <li>Función: Filtran partículas y protegen del polvo</li>
            <li>Sensibilidad: Detectan objetos cercanos y provocan el parpadeo</li>
          </ul>

          <h4>3. Cejas 🤨</h4>
          <ul>
            <li>Función: Desvían el sudor y agua de lluvia</li>
            <li>Expresión: También ayudan en la comunicación no verbal</li>
          </ul>

          <h4>4. Glándulas lagrimales 💧</h4>
          <ul>
            <li><strong>Función:</strong> Producen lágrimas que lubrican y limpian el ojo</li>
            <li><strong>Composición:</strong> Agua, sales, proteínas y enzimas antibacterianas</li>
            <li><strong>Drenaje:</strong> Las lágrimas se drenan por el conducto lagrimal hacia la nariz</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Partes del Globo Ocular" emoji="⚪">
        <Concept title="Capas del ojo">
          <h4>1. Esclerótica (Blanco del ojo) ⚪</h4>
          <ul>
            <li><strong>Qué es:</strong> Capa externa dura y blanca</li>
            <li><strong>Función:</strong> Protege y da forma al ojo</li>
            <li><strong>Características:</strong> Opaca, resistente, fibrosa</li>
          </ul>

          <h4>2. Córnea 💎</h4>
          <ul>
            <li><strong>Qué es:</strong> Parte transparente frontal del ojo</li>
            <li><strong>Función:</strong> Primera lente que refracta (desvía) la luz</li>
            <li><strong>Características:</strong> Transparente, sin vasos sanguíneos, muy sensible</li>
            <li><strong>Potencia:</strong> Proporciona el 70% del poder de enfoque del ojo</li>
          </ul>

          <Important>
            La córnea es la única parte del cuerpo que no tiene vasos sanguíneos. 
            Se nutre del oxígeno del aire y del humor acuoso.
          </Important>

          <h4>3. Iris 🎨</h4>
          <ul>
            <li><strong>Qué es:</strong> Parte coloreada del ojo (azul, verde, marrón, etc.)</li>
            <li><strong>Función:</strong> Controla la cantidad de luz que entra al ojo</li>
            <li><strong>Características:</strong> Tiene músculos que se contraen y relajan</li>
            <li><strong>Único:</strong> El patrón del iris es único en cada persona (como las huellas dactilares)</li>
          </ul>

          <h4>4. Pupila ⚫</h4>
          <ul>
            <li><strong>Qué es:</strong> Orificio negro en el centro del iris</li>
            <li><strong>Función:</strong> Permite el paso de la luz hacia el interior del ojo</li>
            <li><strong>Tamaño variable:</strong>
              <ul>
                <li>☀️ Se contrae (miosis) con luz intensa → pupila pequeña</li>
                <li>🌙 Se dilata (midriasis) en oscuridad → pupila grande</li>
              </ul>
            </li>
          </ul>

          <Example>
            <strong>Experimento:</strong> Mírate al espejo en una habitación oscura y enciende 
            la luz de repente. Verás cómo tus pupilas se contraen rápidamente para proteger 
            la retina del exceso de luz.
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Sistema de Enfoque" emoji="🔍">
        <Concept title="Lentes naturales del ojo">
          <h4>5. Cristalino 🔍</h4>
          <ul>
            <li><strong>Qué es:</strong> Lente biconvexa transparente y flexible</li>
            <li><strong>Función:</strong> Enfoca la luz en la retina (segunda lente del ojo)</li>
            <li><strong>Acomodación:</strong> Cambia de forma para enfocar objetos cercanos o lejanos
              <ul>
                <li>👀 Objetos cercanos → cristalino más grueso (más potencia)</li>
                <li>🏔️ Objetos lejanos → cristalino más delgado (menos potencia)</li>
              </ul>
            </li>
            <li><strong>Potencia:</strong> Proporciona el 30% del poder de enfoque del ojo</li>
          </ul>

          <h4>6. Músculos ciliares 💪</h4>
          <ul>
            <li><strong>Qué son:</strong> Músculos que rodean el cristalino</li>
            <li><strong>Función:</strong> Controlan la forma del cristalino
              <ul>
                <li>Contraídos → cristalino más grueso (visión de cerca)</li>
                <li>Relajados → cristalino más delgado (visión de lejos)</li>
              </ul>
            </li>
          </ul>

          <Important>
            La capacidad de acomodación del cristalino disminuye con la edad. 
            Por eso las personas mayores necesitan gafas de lectura (presbicia o vista cansada).
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Interior del Ojo" emoji="💧">
        <Concept title="Líquidos y cámaras">
          <h4>7. Humor acuoso 💧</h4>
          <ul>
            <li><strong>Qué es:</strong> Líquido transparente entre la córnea y el cristalino</li>
            <li><strong>Función:</strong> Nutre la córnea y el cristalino, mantiene la presión ocular</li>
            <li><strong>Ubicación:</strong> Cámara anterior (entre córnea e iris) y posterior (entre iris y cristalino)</li>
          </ul>

          <h4>8. Humor vítreo 🌊</h4>
          <ul>
            <li><strong>Qué es:</strong> Gel transparente que llena el interior del ojo</li>
            <li><strong>Función:</strong> Mantiene la forma esférica del ojo, sostiene la retina</li>
            <li><strong>Características:</strong> Gelatinoso, transparente, ocupa el 80% del volumen del ojo</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Sistema de Detección" emoji="📸">
        <Concept title="La retina - La película fotográfica del ojo">
          <h4>9. Retina 📸</h4>
          <ul>
            <li><strong>Qué es:</strong> Capa interna sensible a la luz (como el sensor de una cámara)</li>
            <li><strong>Función:</strong> Capta la luz y la convierte en señales eléctricas</li>
            <li><strong>Células fotorreceptoras:</strong>
              <ul>
                <li>🌙 <strong>Bastones</strong> (120 millones): Visión en blanco y negro, sensibles a poca luz</li>
                <li>🎨 <strong>Conos</strong> (6-7 millones): Visión en color, necesitan más luz
                  <ul>
                    <li>🔴 Conos rojos (sensibles a longitudes de onda largas)</li>
                    <li>🟢 Conos verdes (sensibles a longitudes de onda medias)</li>
                    <li>🔵 Conos azules (sensibles a longitudes de onda cortas)</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

          <h4>10. Mácula y Fóvea 🎯</h4>
          <ul>
            <li><strong>Mácula:</strong> Zona central de la retina con mayor concentración de conos</li>
            <li><strong>Fóvea:</strong> Punto central de la mácula, zona de máxima agudeza visual</li>
            <li><strong>Función:</strong> Visión detallada y en color (leer, reconocer caras)</li>
          </ul>

          <h4>11. Punto ciego 🚫</h4>
          <ul>
            <li><strong>Qué es:</strong> Zona donde el nervio óptico sale del ojo</li>
            <li><strong>Característica:</strong> No tiene fotorreceptores, no detecta luz</li>
            <li><strong>Compensación:</strong> El cerebro "rellena" la información faltante</li>
          </ul>

          <Example>
            <strong>Experimento del punto ciego:</strong> Cierra el ojo izquierdo, mira fijamente 
            una X con el ojo derecho y acerca/aleja un punto negro a su lado. En cierta distancia, 
            el punto desaparecerá (está en tu punto ciego).
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Sistema de Transmisión" emoji="⚡">
        <Concept title="Del ojo al cerebro">
          <h4>12. Nervio óptico ⚡</h4>
          <ul>
            <li><strong>Qué es:</strong> Cable de fibras nerviosas que conecta el ojo con el cerebro</li>
            <li><strong>Función:</strong> Transmite las señales eléctricas desde la retina al cerebro</li>
            <li><strong>Composición:</strong> Más de 1 millón de fibras nerviosas</li>
            <li><strong>Velocidad:</strong> Las señales viajan a unos 120 m/s</li>
          </ul>

          <h4>13. Coroides 🩸</h4>
          <ul>
            <li><strong>Qué es:</strong> Capa intermedia entre la esclerótica y la retina</li>
            <li><strong>Función:</strong> Contiene vasos sanguíneos que nutren la retina</li>
            <li><strong>Características:</strong> Rica en melanina (pigmento oscuro) que absorbe luz dispersa</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Comparación: Ojo vs Cámara Fotográfica" emoji="📷">
        <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1rem'}}>
          <thead>
            <tr style={{backgroundColor: 'var(--color-primary-light)', borderBottom: '2px solid var(--color-primary)'}}>
              <th style={{padding: '0.75rem', textAlign: 'left'}}>Parte del Ojo</th>
              <th style={{padding: '0.75rem', textAlign: 'left'}}>Equivalente en Cámara</th>
              <th style={{padding: '0.75rem', textAlign: 'left'}}>Función</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom: '1px solid var(--color-border)'}}>
              <td style={{padding: '0.75rem'}}>Córnea + Cristalino</td>
              <td style={{padding: '0.75rem'}}>Lente objetivo</td>
              <td style={{padding: '0.75rem'}}>Enfocan la luz</td>
            </tr>
            <tr style={{borderBottom: '1px solid var(--color-border)'}}>
              <td style={{padding: '0.75rem'}}>Iris</td>
              <td style={{padding: '0.75rem'}}>Diafragma</td>
              <td style={{padding: '0.75rem'}}>Controla cantidad de luz</td>
            </tr>
            <tr style={{borderBottom: '1px solid var(--color-border)'}}>
              <td style={{padding: '0.75rem'}}>Pupila</td>
              <td style={{padding: '0.75rem'}}>Apertura</td>
              <td style={{padding: '0.75rem'}}>Deja pasar la luz</td>
            </tr>
            <tr style={{borderBottom: '1px solid var(--color-border)'}}>
              <td style={{padding: '0.75rem'}}>Retina</td>
              <td style={{padding: '0.75rem'}}>Sensor/Película</td>
              <td style={{padding: '0.75rem'}}>Capta la imagen</td>
            </tr>
            <tr style={{borderBottom: '1px solid var(--color-border)'}}>
              <td style={{padding: '0.75rem'}}>Nervio óptico</td>
              <td style={{padding: '0.75rem'}}>Cable de datos</td>
              <td style={{padding: '0.75rem'}}>Transmite información</td>
            </tr>
            <tr style={{borderBottom: '1px solid var(--color-border)'}}>
              <td style={{padding: '0.75rem'}}>Párpados</td>
              <td style={{padding: '0.75rem'}}>Tapa del objetivo</td>
              <td style={{padding: '0.75rem'}}>Protegen</td>
            </tr>
          </tbody>
        </table>
      </TheorySection>

      {/* Bloques finales en orden estricto: Aplicaciones → Historia → Anécdotas → Resumen */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>Oftalmología diagnóstico enfermedades oculares</h3>
          <p>
            Exámenes oftalmológicos comprenden evaluación completa anatomía ojo detectan patologías temprano: refracción autorefractómetros-phorópteros miden errores refractivos miopía-hipermetropía-astigmatismo precisión ±0.25D generan prescripción lentes correctores gafas-contactos, tonometría mide presión intraocular PIO normal 10-21 mmHg elevación {'>'} 21 mmHg glaucoma factor riesgo neuropatía óptica ceguera irreversible afecta 80M personas mundial tratamiento gotas prostaglandinas reducen PIO 20-30% cirugía trabeculectomía-iStent drenaje humor acuoso. Biomicroscopia lámpara hendidura slit lamp magnificación 5×-40× iluminación focal 10-20 mm ancho examina córnea estructura capas estroma 500 μm grosor transparencia distrofias Fuchs guttata endoteliales, cristalino opacidades cataratas clasificación nuclear-cortical-subcapsular posterior madurez incipiente-inmadura-madura-hipermadura cirugía facoemulsificación ultrasonido 40 kHz fragmenta núcleo lenticular aspiración implanta IOL intraocular lens +10D a +30D potencia calcula biometría axial longitud ojo 22-26 mm fórmulas Barrett-Haigis-Holladay precisión ±0.5D refracción postoperatoria objetivo. Oftalmoscopía directa-indirecta visualiza retina fondo ojo vasos sanguíneos arteriolas-vénulas disco óptico excavación glaucomatosa CDR cup-disc ratio {'>'} 0.6 anormal mácula fóvea 1.5 mm diámetro 150,000 conos/mm² máxima agudeza visual 20/10 best, patologías retinopatía diabética exudados hemorragias edema macular tratamiento láser fotocoagulación argón 532 nm anti-VEGF bevacizumab-ranibizumab inyecciones intravítreas mensuales, degeneración macular relacionada edad DMRE forma seca atrofia geográfica EPR epitelio pigmentario húmeda neovascularización coroidea CNV membranas fluido subretinal OCT optical coherence tomography resolución axial 5-7 μm grosor capas retinales cuantifica edema micrones monitoreo tratamiento.
          </p>

          <h3>Optometría corrección visual lentes contacto-gafas</h3>
          <p>
            Refracción subjetiva test agudeza visual carta Snellen letras tamaño decreciente 20/20 visión normal 20/40-20/200 baja visión 20/200+ ceguera legal, foróptero lentes prueba combinaciones esfera cilindro eje determina prescripción final paciente compara opciones "¿mejor 1 o 2?" técnica subjetiva duetos Jackson ±0.25D steps refinamiento, retinoscopía objetiva reflejo rojo pupilar luz examiner sweep determina error refractivo neutralización movimiento with-against estimación inicial automatización autorefractómetros infrarrojo 840-950 nm sensores CCD miden frente onda aberraciones HOA higher-order coma-trefoil-esférica pupila 3-6 mm dilatada. Lentes contacto blandas hidrogel HEMA 38-75% contenido agua Dk permeabilidad oxígeno 20-30 Barrer convencionales vs silicona-hidrogel lotrafilcon-senofilcon Dk/t transmisibilidad 100-175 Dk/t·cm necesario córnea 24 Dk/t mínimo evita hipoxia edema uso prolongado 30 días continuos aprobado FDA, diseño base curve BC 8.3-9.0 mm radio curvatura ajuste lágrima película 3-10 μm grosor diámetro total 13.8-14.5 mm cubre córnea limbo margen esclera centrado óptica zona central 8-9 mm periferia 3-3.5 mm transición movimiento parpadeo 0.5-1 mm desplazamiento salud fisiológica intercambio lágrima oxigenación. Gafas monturas materiales acetato celulosa-propionato ligero flexible alergias mínimas metal acero inoxidable-titanio-berilio resistente hipoalergénico peso 15-25g completas vs acetato 20-35g, puente nasal ajuste plaquetas nasales 18-22 mm anchura distancia interpupilar PD 54-74 mm adultos centra lentes óptica eje visual varillas patillas temporales longitud 135-150 mm curva mastoides behind-ear 40-50 mm wrap comfort seguridad ajustes optician heating reshaping, tratamientos lentes antirreflejantes multicapa MgF₂-ZrO₂ reflexión Fresnel 8-12% por superficie reduce 0.5-2% transmisión 98-99.5% contraste nitidez eliminan halos nocturnos conducción, hidrofóbicos-oleofóbicos repelen agua-grasa ángulo contacto 110-120° vs 30-50° untreated gotas resbalan limpieza fácil huellas reducidas, fotocromáticos transiciones cromógenos orgánicos spiro-oxazines-naphthopyrans reacción UV 295-380 nm activan oscurecen 30-60s transmisión 80-85% claro a 8-20% oscuro reversion 2-5 min indoor temperatura dependiente frío slower respuesta.
          </p>

          <h3>Cirugía refractiva láser corneal LASIK-PRK-SMILE</h3>
          <p>
            LASIK laser-assisted in situ keratomileusis procedimiento ambulatorio anestesia tópica gotas proparacaína-tetracaína 10-15 min por ojo indoloro: microquerátomo cuchilla mecánica Moria-Hansatome o femtosegundo láser IntraLase 150 kHz Ziemer LDV 1 MHz crea flap corneal bisagra superior grosor 90-120 μm diámetro 8.5-9.5 mm levanta expone estroma, excimer láser ArF 193 nm ultravioleta ablaciona tejido estroma fotodisrupción rompe enlaces moleculares colágeno sin daño térmico precisión 0.25 μm por pulso frecuencia 200-500 Hz reshape curvatura corneal aplanamiento miopía -1D a -12D remoción 12-14 μm por dioptría zona óptica 6-6.5 mm transición blend 8-9 mm diámetro total minimizan aberraciones HOA visión nocturna halos starbursts, hipermetropía +1D a +6D steepening periferia central preservación, astigmatismo cilindro tórico eje orientado corrección simultánea esfera-cilindro combinado tratamientos custom wavefront-guided Zyoptix-iDesign mapa aberraciones 1,200-20,000 puntos pupila dilatada optimiza calidad visual postoperatoria. Recuperación visual rápida 80-90% pacientes 20/20-20/25 primer día 95-98% semana estabilización 1-3 meses, complicaciones secuedad ocular transitoria 6-12 meses lágrimas artificiales frecuentes hialuronato sódico 0.1-0.3% gel drops, ectasia corneal rara 0.04-0.6% incidencia screening preoperatorio grosor mínimo 480-500 μm residual stromal bed 250 μm seguro biomecánica topografía Pentacam detección queratocono subclínico contraindica cirugía, retratamientos enhancement 5-10% pacientes regresión refractiva años levanta flap original re-ablate adicional o PRK surface. PRK photorefractive keratectomy variante surface removal epithelial 50 μm alcohol-brush mecánica o transepitelial láser directo ablación estroma igual LASIK sin flap, dolor postoperatorio 2-3 días epitelialización regeneración lente contacto terapéutica BCL bandage protect 5-7 días antibióticos-esteroides tópicos recovery slower visual 1 semana útil 1 mes óptimo vs LASIK inmediato, ventajas córneas delgadas {'<'} 500 μm grosor insuficiente flap actividades contacto deportes combat-boxing flap displacement risk eliminado, haze cicatricial riesgo mitomicina-C MMC 0.02% 20-60 seg aplicación intraoperatoria inhibe fibroblastos reducción haze 1-2% incidencia vs 5-10% sin MMC ablaciones profundas {'>'}100 μm. SMILE small incision lenticule extraction técnica innovadora femtosegundo crea lenticule 3D grosor calculado miopía -1D a -10D diámetro 6-6.5 mm extrae incisión pequeña 2-4 mm lateral sin flap ablación preserva biomecánica corneal inervación lacrimal superior menos sequedad reportada estudios, limitación actual hipermetropía-astigmatismo alto no trata solo miopía-astigmatismo miópico combinado, adopción creciente Zeiss VisuMax sistema único aprobado mercado competencia futuro.
          </p>

          <h3>Realidad virtual aumentada displays óptica ocular</h3>
          <p>
            Headsets VR Meta Quest 3 $500 Valve Index $999 Apple Vision Pro $3,500 usan lentes Fresnel anillos concéntricos grosor reducido 20-40 mm vs convexas 60-80 mm peso crítico comfort sesiones prolongadas 1-3h gaming-training, desventaja artefactos god rays halos fuentes luz brillantes difracción transiciones anillos visible contraste alto, alternativa lentes pancake polarizadores circulares left-right + reflector parcial 50/50 beamsplitter pliegan camino óptico luz bounces ida-vuelta 3-4 veces distancia ojo-display 50 mm reduce 30 mm compacto delgado form factor glasses-like futuro, pérdida luz 75-80% absorción polarizadores requiere displays más brillantes 500-1,000 nits vs 200-400 nits Fresnel consumo energía aumenta baterías duran 2-3h vs 4-6h trade-off aceptable calidad imagen superior distorsión {'<'}2% FOV 80% central vs 5-10% Fresnel. Field of view FOV horizontal 90-110° típico humano binocular 200° monocular 160° limitación actual inmersión periférica expansión FOV 120-130° prototipos Pimax 8KX 170-200° FOV ultra-wide compromiso resolución píxeles spread mayor área PPD pixels-per-degree disminuye 15-20 PPD central vs 25-30 PPD estándar legibilidad texto afectada VR desktop virtual screens aplicaciones productividad. Resolución displays 1832×1920 Quest 2 por ojo 2000×2040 Quest 3 mejora 10% 2064×2208 Valve Index pancake achieves similar effective mejora nitidez óptica compensates PPD cálculo FOV/resolution ejemplo 100° FOV 2000 px horizontal = 20 PPD límite agudeza visual humana 60 PPD fóvea central 1-2° discriminación 20/20 visión normal periférica 10-15 PPD suficiente detección movimiento spatial awareness navegación, futuro microOLED Sony 4000×4000 1.3" diagonal 60 PPD foveated rendering eye-tracking concentra GPU compute fóvea 2-5° alta resolución periferia 20-30% resolution scaling dinámico mantiene framerate 90-120 Hz latencia motion-to-photon {'<'}20 ms crítica evitar motion sickness náusea VR afecta 20-40% usuarios primeras experiencias adaptación.
          </p>

          <h3>Fotografía cine sensor-lente analogía retina-cristalino</h3>
          <p>
            Cámara estructura paralela ojo humano: lente objetivo cristalino converge luz forma imagen invertida, iris diafragma controla apertura f-stop f/1.4-f/22 diámetro abertura focal length/f-number ejemplo 50mm f/2.0 aperture Ø=25mm grande permite luz depth-of-field shallow 10-50cm vs f/16 Ø=3.1mm pequeña DOF deep 1m-infinito foco crítico retrato-paisaje artístico elección, sensor digital retina capta imagen convierte señales eléctricas CCD charge-coupled-device transferencia secuencial vs CMOS complementary-metal-oxide-semiconductor lectura paralela dominante 2010+ fabricación económica integración electrónica on-chip ADC converters reducción ruido mejor rango dinámico 12-14 stops captura escenas alto contraste 10,000:1 luces-sombras simultáneo vs ojo 10 stops single adaptation 10¹⁰ total mediante adaptación light-dark 30 min complete. Tamaño sensor full-frame 36×24 mm equivale 35mm film formato clásico APS-C 23.6×15.7 mm crop factor 1.5-1.6× reduce ángulo visión efectivo teleefecto micro-four-thirds 17.3×13 mm 2× crop compacto ligero trade-off resolución ruido high-ISO, resolución megapíxeles Sony A7R V 61 MP Canon EOS R5 45 MP print quality póster tamaño A0 detalle recorte digital cropping zoom post-production flexibilidad vs ojo 576 MP estimado equivalente 120M conos 5-6M sensibles color fóvea alta densidad 150k-200k conos/mm² 1.5 mm diámetro área crítica lectura, fotosites píxeles sensor 4-8 μm spacing vs conos/bastones 2-5 μm spacing retina comparable densidad escala física aunque mechanisms completamente diferentes electrónica-química fototransducción rodopsina G-protein cascade amplificación 10⁶ fotón-single detección scotopic visión nocturna bastones sensibilidad extrema.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        <div className="theory-subsection">
          <h3>Antigüedad clásica teorías visión extramission-intromission</h3>
          <p>
            Griegos antiguos debates filosóficos naturaleza visión: teoría extramission Platón-Euclides-Ptolomeo sostiene ojos emiten rayos visuales tocan objetos permiten ver geometría óptica correcta leyes reflexión-refracción pero física errónea energía imposible emite observador pasivo contradice experiencia oscuridad, Empédocles combina extramission luz exterior necesaria también fuego interno ojo dual mechanism, atomistas Demócrito-Epicuro proponen eidola imágenes atómicas superficies objetos fluyen aires entran ojos intromission precursor moderno material emanations. Aristóteles rechaza extramission propone medio transparente aire-agua actualizado potencia acto luz sol activa medium permite color forma viajar ojo qualitative philosophy sin matemática geométrica limitación época medieval escolástica domina teoría aristotélica 1,500 años autoridad dogma impide avances experimentales ciencia empírica renacimiento siglos XV-XVI libera pensamiento.
          </p>

          <h3>Islam medieval Alhazen revolución científica óptica</h3>
          <p>
            Ibn al-Haytham (Alhazen) 965-1040 Basra-Cairo científico polimático escribió Kitab al-Manazir "Book of Optics" 1011-1021 tratado monumental 7 volúmenes revoluciona ciencia visual: refuta extramission experimentos luz-cámara oscura demuestra intromission luz viaja objetos-ojos modelo correcto físico, anatomía ojo describe córnea humor acuoso cristalino humor vítreo retina nervio óptico ilustraciones detalladas disección animal-humano conocimiento médico Galeno 200 d.C. expande estructura función, teoría visión imagen forma cristalino recibe luz refractada córnea transmite nervio óptico cerebro ventrículo frontal senso comune procesa percepción error localización imagen retina correcta descubierto Kepler 1604 inversión imagen, óptica geométrica leyes reflexión refracción espejos planos-curvos lentes convergentes-divergentes trazado rayos cámara oscura principio fotografía siglos posteriores, método experimental sistemático hipótesis-experimento-conclusión rechaza especulación filosófica autoritaria Aristóteles-Ptolomeo establece método científico moderno 600 años antes Francis Bacon 1620 Novum Organum Galileo 1638 Two New Sciences fundadores reconocidos ciencia europea, traducción latín "De Aspectibus" Gerard Cremona 1200s transmite conocimiento Islam a Europa influencia masiva Roger Bacon 1267 Opus Majus óptica, Witelo 1270 Perspectiva enciclopedia, Johannes Kepler 1604 Ad Vitellionem Paralipomena teoría retina imagen invertida astronómica óptica telescopio revoluciona observación celeste Galileo 1609.
          </p>

          <h3>Renacimiento anatomía moderna Vesalio-Leonardo oftalmología</h3>
          <p>
            Andreas Vesalius "De humani corporis fabrica" 1543 atlas anatómico ilustraciones grabados madera detalle exquisito revoluciona medicina medieval basada textos antiguos Galeno errores perpetuados 1,400 años vs observación directa disección cadáveres humanos Padua Universidad anatomía escuela europea líder, ojo sección transversal capas córnea-esclera cristalino humor vítreo retina nervio óptico túnica vascular úvea iris-cuerpo ciliar-coroides irrigación sanguínea nutrición oxigenación tejidos. Leonardo da Vinci 1452-1519 cuadernos estudios anatómicos 240+ dibujos ojo estructura función observaciones perspectiva artística-científica integración renacentista, experimentos óptica cámara oscura imagen invertida lente ojo proyecta escena exterior retina interno cabeza analogía pintura canvas cerebro pinta realidad mental construcción percepción insight moderno neurociencia cognitiva 500 años anticipado genio universal. Oftalmología clínica emerge siglo XVI-XVII tratados enfermedades oculares cataratas glaucoma estrabismo cirugía primitiva couching cataracts aguja desplaza cristalino opaco inferior campo visual restaura parcial translucent visión borrosa sin lente cristalino afáquico hipermetropía extrema +10D a +15D corrección anteojos gruesos convexos magnifican distorsionan imágenes, técnica usada India-Medio Oriente-Europa siglos riesgo infección-inflamación-retinal detachment complicaciones frecuentes ceguera irreversible 30-50% casos éxito limitado vs moderna facoemulsificación IOL implantes tasa éxito 95-98% restauración visión 20/20-20/40 mayoría pacientes transformación medicina.
          </p>

          <h3>Siglo XX oftalmología moderna tecnología imaging cirugía</h3>
          <p>
            Hermann von Helmholtz inventa oftalmoscopio 1851 primer instrumento visualiza retina vivo fondo ojo revoluciona diagnóstico retinopatías desprendimiento glaucoma degeneración macular antes imposible examinar interior mysteries ojo opened medicina interna ocular, principio iluminación oblicua espejo cóncavo refleja luz lámpara ojo paciente observador mira través apertura central espejo ve reflejo rojo retina vasos sanguíneos disco óptico mácula estructuras detalles magnificadas lentes condensadoras +13D a +20D oftalmoscopio directo magnificación 15× campo estrecho 5-10° vs indirecto binocular lente +14D a +28D handheld magnificación 2-5× campo amplio 25-40° visión estereoscópica 3D profundidad elevación papilar edema disco cupping glaucomatoso. Lámpara hendidura Allvar Gullstrand 1911 Nobel Física Fisiología microscopio binocular iluminación focal slit beam 0.1-14 mm ancho ajustable examen córnea ángulos iridocorneales Trabecular meshwork gonioscopy cristalino opacidades cataratas tipo localización cámara anterior profundidad 2.5-3.5 mm normal shallow angle-closure glaucoma risk vítreo floaters opacities retina lentes +60D a +90D fundoscopy viewing magnificación 10-16× resolución celular detalle vascular microaneurismas diabéticos exudados duros cotton-wool spots hemorragias flame-shaped dot-blot classification severity. Fluorescein angiography FA 1960s inyecta colorante fluoresceína sódica 500 mg vena brazo circula capta fotografías secuenciales 30-60s rápidas revela dinámica vascular perfusión isquemia áreas non-perfusion neovascularización membranas CNV leakage edema tratamiento planning fotocoagulación láser anti-VEGF inyecciones, OCT optical coherence tomography 1991 James Fujimoto MIT interferometría infrarroja 840 nm resolución axial 3-7 μm cortes transversales retina capas NFL-GCL-IPL-INL-OPL-ONL-ELM-photoreceptors-RPE-choroid grosor cuantifica micrones edema macular cystoid spaces SRF subretinal fluid PED pigment epithelial detachment drusen DMRE geographic atrophy monitoring progression tratamiento response quantitative objective reproducible revoluciona oftalmología clínica research trials endpoints regulatory FDA approvals based OCT measurements.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y Curiosidades
        </h2>
        <div className="theory-subsection">
          <h3>Parpadeo frecuencia inconsciente protección limpieza</h3>
          <p>
            Promedio adultos parpadean 15-20 veces minuto 1,200 veces hora 28,800 veces día despierto 16h 10.5 millones veces año cierra ojos total acumulado 1.2 horas diarias 18 días anuales darkness parpadeo, duración single blink 100-150 milisegundos ultra-rápido cerebro suprime imagen durante cierre evita percepción intermitencia darkness saccadic suppression visual continuidad ilusión fluida, frecuencia variable actividad concentrada lectura-ordenador-videojuegos reduce 3-8 blinks/min esfuerzo atención fija pantalla fatiga ocular sequedad síndrome ojo seco computer vision CVS afecta 50-90% trabajadores oficina usuarios digitales 6-8h diarias, solución regla 20-20-20 cada 20 minutos mirar 20 pies (6 metros) distancia 20 segundos relaja acomodación cristalino estimula parpadeo completo lubricación lágrima precorneal film 3 capas lipídica-acuosa-mucina grosor total 3-10 μm estabilidad 10-30 segundos break-up time BUT test diagnóstico sequedad {'<'}10s anormal tratamiento lágrimas artificiales carboximetilcelulosa-hialuronato frecuencia 4-8× día casos severos ciclosporina 0.05% Restasis anti-inflamatorio tópico aumenta producción lagrimal endógena 3-6 meses terapia.
          </p>

          <h3>Agudeza visual 20/20 significado clínico límites</h3>
          <p>
            Notación Snellen 20/20 significa distancia 20 pies (6 metros) paciente lee letras tamaño estándar persona visión normal también lee esa distancia numerador distancia test denominador distancia normal, 20/40 paciente lee 20 pies lo normal lee 40 pies visión peor mitad size letras doble grandes necesarias, 20/10 super-vision paciente lee 20 pies lo normal requiere 10 pies acercarse visión doble aguda posible humanos jóvenes 10-20 años fóvea óptima 150k-200k conos/mm² densidad máxima spacing 2.5 μm resolución teórica 60 cycles/degree límite difracción pupila 3 mm λ=555nm verde pico sensibilidad fotópica, atletas profesionales pilotos fighter halcones águilas reportan 20/8 a 20/5 agudeza excepcional genética entrenamiento discutido límite físico aperture diffraction Rayleigh criterion, ceguera legal USA definición 20/200 mejor ojo corregido o campo visual {'<'}20° diámetro tunnel vision vs normal 160-180° monocular 200° binocular, registro más bajo agudeza medida 20/400-20/800 severa cataracts maculopatía avanzada tratamiento quirúrgico restaura frecuentemente 20/30-20/60 funcional conducir leer actividades diarias independencia calidad vida.
          </p>

          <h3>Visión color tricromática conos RGB daltonismo genética</h3>
          <p>
            Humanos visión tricromática 3 tipos conos sensibles longitudes onda diferentes: S-cones short λ=420nm azul 6-7% total conos fóvea ausentes central 0.3° rod-free zone, M-cones medium λ=530nm verde 32-34% distribución, L-cones long λ=560nm rojo 60-62% mayoría dominan luminancia resolución espacial color ratio evolutionary older trichromacy mammals most dichromats primates solo desarrollan tricromacy 30M años ago genetic duplication opsin genes chromosome X, combinación señales 3 canales cerebro corteza visual V1-V4-IT procesa 10 millones colores discriminables Munsell color space CIE 1931 chromaticity gamut humano cubre espectro visible 380-780 nm complementary colors opponent-process theory Hering rojo-verde azul-amarillo negro-blanco contraste simultáneo inducción cromática afterimages negative. Daltonismo color vision deficiency CVD afecta 8% hombres europeos 0.5% mujeres herencia recesiva ligada X cromosoma genes OPN1LW-OPN1MW largo-medio opsinas cluster tandem susceptible recombinación crossing-over unequal produce fusión-deleción genes defecto protanopia ausencia L-cones 1% deuteranopia ausencia M-cones 1% red-green confusion más común combinado protanomaly-deuteranomaly debilitado 6% total affected, tritanopia ausencia S-cones rara 0.001% autosómica cromosoma 7 blue-yellow confusión preserva red-green, test diagnóstico Ishihara plates 38 círculos números ocultos dots colores confusión CVD no distingue vs normal ve claro, aplicaciones semáforos posición vertical rojo arriba-amarillo medio-verde abajo redundancia forma no solo color accessibility design web contraste suficiente colorblind-friendly palettes simulators Coblis visualiza sitios CVD perspective inclusive.
          </p>

          <h3>Presión intraocular glaucoma ladrón silencioso visión</h3>
          <p>
            PIO presión intraocular líquido humor acuoso rellena cámara anterior-posterior entre córnea-iris-cristalino producido cuerpo ciliar procesos 2-3 μL/min tasa drenaje ángulo iridocorneal Trabecular meshwork-Schlemm canal flujo salida sistema venoso episcleral equilibrio producción-drenaje mantiene PIO normal 10-21 mmHg promedio 15-16 mmHg, elevación {'>'} 21 mmHg hipertensión ocular OHT factor riesgo mayor glaucoma pero no siempre desarrolla 5-10% conversión anual monitoring frecuente 3-6 meses OCT RNFL grosor capa fibras nerviosas retina adelgaza progressive damage, glaucoma neuropatía óptica crónica degenerativa daño irreversible células ganglionares RGCs axones forman nervio óptico 1.2M fibras transmiten señales retina cerebro LGN lateral geniculate nucleus tálamo V1 corteza visual occipital procesamiento, elevada PIO comprime presión mechanical stress cabeza nervio óptico lamina cribrosa estructura colágeno elástica porosa permite axones salir ojo presión diferencial intraocular-intracraneana deforma posteriores backward bowing excavación cupping disco óptico CDR cup-disc ratio {'>'} 0.6 vertical asimetría 0.2 entre ojos red flags sospecha, pérdida campo visual periférico inicial arcuate scotomas superior-inferior Bjerrum nasal step avanza lentamente años-décadas asintomático silencioso paciente no nota pérdida adaptación inconsciente tunnel vision final tardío 10-20% campo central preservado isla visión residual ceguera irreversible etapa terminal, tratamiento gotas tópicas prostaglandins latanoprost-bimatoprost aumentan uveoescleral outflow reducen PIO 25-35% primera línea beta-blockers timolol 0.5% reduce producción acuosa 20-25% contraindicaciones asma-bradicardia, cirugía trabeculectomía crea fístula nueva drainage bleb conjuntiva filtra acuoso espacio subconjuntival éxito 60-80% 5 años controla PIO {'<'}15 mmHg target bajo previene progresión, implantes tubo-shunt Ahmed-Baerveldt casos refractarios múltiples cirugías previas fallidas neovascular glaucoma diabético secondary elevación PIO {'>'} 40-50 mmHg aguda angle-closure emergency tratamiento inmediato.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <ul>
          <li>👁️ El ojo humano pesa 7-8 gramos mide 24 mm diámetro distingue 10 millones colores adaptación rango dinámico 10¹⁰ desde visión escotópica nocturna 10⁻⁶ cd/m² hasta fotópica diurna 10⁴ cd/m² nieve sol brillante</li>
          <li>Anatomía externa: párpados protegen parpadeo 15-20×/min distribuye lágrima film 3-10 μm grosor 10-30s estabilidad, pestañas filtran partículas sensibilidad táctil refle jo, cejas desvían sudor expresión facial comunicación</li>
          <li>Córnea transparente avascular primera lente +43D poder refractivo total grosor 540 μm central 5 capas epitelio-Bowman-estroma-Descemet-endotelio cirugía LASIK-PRK reshape curvatura corrige miopía-hipermetropía-astigmatismo</li>
          <li>Cristalino lente biconvexa flexible +15D a +20D joven acomodación rango amplitud 10-12D edad 10 años disminuye 1-2D edad 50 presbicia vista cansada lectura +1.5D a +3D gafas, cataratas opacificación edad 60+ años cirugía facoemulsificación IOL implante restaura visión</li>
          <li>Retina tejido neural 10 capas 120M bastones visión escotópica monocromática sensibilidad extrema 1 fotón detección 6M conos visión fotópica color tricromática S-M-L opsinas λ=420-530-560nm fóvea 1.5 mm diámetro 150k-200k conos/mm² agudeza máxima 20/10-20/20 límite difracción, células ganglionares RGCs 1.2M axones nervio óptico transmiten LGN-V1 procesamiento cerebral construcción percepción</li>
          <li>Aplicaciones: oftalmología OCT resolución 5-7 μm grosor capas retinales diagnóstico edema-DMRE-glaucoma monitoreo tratamiento cuantitativo, optometría lentes contacto silicona-hidrogel Dk/t 100-175 oxigenación córnea 30 días uso continuo, cirugía refractiva LASIK 40M procedimientos mundial corrección -12D a +6D recuperación visual 1 día 95-98% éxito 20/20, realidad virtual Quest 3-Vision Pro lentes Fresnel-pancake FOV 90-110° resolución 2000×2040 PPD 20-25 inmersión digital, fotografía sensor full-frame 36×24mm 45-61 MP analogía retina captura imagen procesamiento</li>
        </ul>
      </div>
    </>
  );
};

export default AnatomiaOjoTheory;
