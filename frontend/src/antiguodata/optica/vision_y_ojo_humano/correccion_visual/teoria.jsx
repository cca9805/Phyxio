import { TheorySection, Concept, Important } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "Corrección Visual",
  descripcion: "Gafas, lentillas y cirugía láser",
  educationLevel: "ESO",
  levels: ['ESO'],
  isTheoryOnly: true
};

const CorreccionVisualTheory = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="Métodos de Corrección Visual" emoji="🩺">
        <p>
          Los defectos visuales se pueden corregir de varias formas. 
          La elección depende del tipo de defecto, la edad, el estilo de vida 
          y las preferencias personales.
        </p>
      </TheorySection>

      <TheorySection title="Gafas" emoji="👓">
        <Concept title="Ventajas">
          <ul>
            <li>✅ Fáciles de usar</li>
            <li>✅ No requieren contacto con el ojo</li>
            <li>✅ Se pueden cambiar fácilmente</li>
            <li>✅ Protegen los ojos</li>
            <li>✅ Económicas</li>
          </ul>
        </Concept>

        <Concept title="Tipos de lentes">
          <ul>
            <li>👓 Monofocales (una graduación)</li>
            <li>👓 Bifocales (dos graduaciones)</li>
            <li>👓 Progresivas (graduación variable)</li>
            <li>🕶️ Con filtro UV</li>
            <li>🌞 Fotocromáticas (se oscurecen al sol)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Lentillas" emoji="👁️">
        <Concept title="Ventajas">
          <ul>
            <li>✅ Mayor campo de visión</li>
            <li>✅ Ideales para deporte</li>
            <li>✅ No se empañan</li>
            <li>✅ Estética (no se ven)</li>
          </ul>
        </Concept>

        <Concept title="Tipos">
          <ul>
            <li>📅 Diarias (usar y tirar)</li>
            <li>📅 Mensuales</li>
            <li>🌙 De uso prolongado</li>
            <li>🎨 De colores (cosméticas)</li>
          </ul>
        </Concept>

        <Important>
          Este tema proporciona una base práctica para ESO sobre métodos corrección visual gafas-lentillas-cirugía.
          Las lentillas requieren higiene estricta manos lavadas 20-30s jabón antibacterial antes manipularlas, solución conservante polihexanida-polyquad desinfecta 6-8h overnight storage case reemplazar 3 meses previene contaminación bacterias-hongos-Acanthamoeba keratitis infección severa puede causar ceguera permanente.
        </Important>
      </TheorySection>

      <TheorySection title="Cirugía Láser" emoji="⚕️">
        <Concept title="LASIK">
          <p>
            Técnica más común que remodela la córnea con láser para corregir 
            miopía, hipermetropía y astigmatismo.
          </p>
          <ul>
            <li>⏱️ Procedimiento rápido (10-15 minutos)</li>
            <li>💤 Anestesia local (gotas)</li>
            <li>🏥 Ambulatorio (no requiere ingreso)</li>
            <li>👁️ Recuperación rápida (1-2 días)</li>
            <li>🎯 Resultados permanentes</li>
          </ul>
        </Concept>

        <Concept title="Requisitos">
          <ul>
            <li>👤 Edad mínima: 18 años</li>
            <li>📊 Graduación estable (sin cambios en 1-2 años)</li>
            <li>👁️ Córnea con grosor suficiente</li>
            <li>🩺 Sin enfermedades oculares</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Cuidado de las Gafas y Lentillas" emoji="🧼">
        <Concept title="Gafas">
          <ul>
            <li>🧼 Limpiar con agua y jabón suave</li>
            <li>🧻 Secar con paño de microfibra</li>
            <li>📦 Guardar en estuche cuando no se usan</li>
            <li>🔧 Ajustar periódicamente en óptica</li>
          </ul>
        </Concept>

        <Concept title="Lentillas">
          <ul>
            <li>🧼 Lavarse las manos antes de manipularlas</li>
            <li>💧 Usar solo solución específica para lentillas</li>
            <li>🚫 Nunca usar agua del grifo</li>
            <li>📅 Respetar el tiempo de uso</li>
            <li>🛏️ No dormir con ellas (salvo las específicas)</li>
            <li>👨‍⚕️ Revisiones periódicas</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Bloques finales en orden estricto: Aplicaciones → Historia → Anécdotas → Resumen */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>Lentes oftalmológicas monofocales-progresivas tecnología</h3>
          <p>
            Gafas monofocales potencia única esfera corrección miopía-hipermetropía cilindro astigmatismo receta ejemplo OD -3.00 -0.75 x 180 ojo derecho esfera -3.00D miopía moderada cilindro -0.75D astigmatismo miópico eje 180° horizontal OI -2.75 -1.00 x 10 izquierdo diferente graduación anisometropía común 0.25-0.50D diferencia tolerada {'>'} 1D prisma base-out compensación diploplia double vision riesgo, materiales lentes CR-39 polímero plástico estándar n=1.498 índice refracción ligero resistente impactos $50-$150 precio accesible policarbonato n=1.586 más delgado 20% ligero UV protección inherente niños-deportes alto índice n=1.67-1.74 reduces grosor 40-60% miopía alta -8D+ estética cosmetic superior caro $200-$500.
          </p>

          <h3>Lentes contacto blandas rígidas permeables oxígeno RGP</h3>
          <p>
            Contactos blandas hidrogel HEMA hidroxietil metacrilato 38-75% contenido agua Dk permeabilidad oxígeno 20-30 Barrer convencionales primera generación 1970s-1990s, silicona-hidrogel segunda generación 1999 revoluciona lotrafilcon A Dk/t 175 uso prolongado 30 días continuos aprobado FDA oxígeno atraviesa siloxano channels marcas modernas Acuvue Oasys Dk/t 147 Biofinity Dk/t 160 Air Optix Dk/t 138 precio $30-$60 mensuales $15-$30 diarias, RGP materiales fluorosilicone Dk 50-150 geometría precisa nitidez superior astigmatismo irregular queratocono agudeza 20/15-20/20 mejor blandas comfort inicial adaptación 1-2 semanas nicho 5-10% mercado.
          </p>

          <h3>Cirugía refractiva LASIK-PRK-SMILE láser corneal</h3>
          <p>
            LASIK láser-assisted in situ keratomileusis técnica dominante 90% procedimientos refractivos mundial 40M realizados: flap corneal 90-120 μm grosor femtosegundo láser levanta expone estroma excimer ArF 193 nm ablaciona tejido fotodisrupción precisión 0.25 μm pulso zona óptica 6-6.5 mm blend 8-9 mm wavefront-guided custom tratamientos recovery rápido 80-90% 20/20 primer día completo 1 semana $2,000-$3,000 ojo. PRK photorefractive keratectomy surface ablation sin flap córneas delgadas dolor 2-3 días recovery slower 1 semana funcional. SMILE small incision lenticule extraction innovación femto crea lenticule 3D extrae incisión 2-4 mm sin flap ablación preserva biomecánica inervación sequedad menos -1D a -10D miopía 30-40% mercado.
          </p>

          <h3>Ortoqueratología lentes nocturnas moldeo corneal reversible</h3>
          <p>
            Orto-K orthokeratology lentes rígidas RGP diseño especial reverse geometry zona central plana flattens córnea mid-peripheral curva moldea epithelial redistribution 50 μm overnight 6-8 horas sueño morning removal visión clara diurna sin lentes temporal reversible 24-48 horas, indicaciones miopía leve-moderada -1D a -6D astigmatismo {'<'}1.5D población pediátrica niños 6-16 años progresión miópica control estudios ralentiza elongación axial 30-60% reducción vs gafas convencionales, costo $1,000-$2,000 initial fitting lentes reemplazo anual $300-$500.
          </p>

          <h3>Implantes faquícos ICL alta miopía-hipermetropía extrema</h3>
          <p>
            Phakic IOLs intraocular lenses implantadas cámara posterior preservan cristalino natural indicaciones miopía extrema -8D a -20D hipermetropía +4D a +10D grosor corneal insuficiente LASIK-PRK, ICL implantable collamer lens STAAR Surgical material collamer colágeno-polímero biocompatible posiciona posterior iris anterior cristalino sulco ciliar vault gap 250-750 μm preserva acomodación residual jóvenes {'<'}40 años, ventajas reversibilidad explante posible calidad óptica superior zona 6-7 mm completa aberraciones mínimas complicaciones cataratas 1-2% vault insuficiente glaucoma angle-closure iridotomía preventiva Nd:YAG preoperatoria costo $4,000-$6,000 ojo indicación restringida casos extremos specialist.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        <div className="theory-subsection">
          <h3>Primeras gafas Italia siglo XIII invención revolucionaria</h3>
          <p>
            Gafas correctoras emergen norte Italia Venecia-Florencia 1280-1290 invención anónima no documentada origen debates históricos atribuciones múltiples Salvino D'Armate Alessandro della Spina frailes dominicos Pisa conventos escritorios medievales scribes copistas manuscritos presbicia vista cansada edad 40+ problema universal, lentes convexas vidrio soplado artesanos Murano secretos guardados monopolio commercial potencia +1D a +3D magnification lectura cerca primera aplicación práctica óptica refractiva. Difusión rápida Europa 1300s comercio Mediterranean Venecia hub central exporta lentes readers monjes-escribas-comerciantes price high 50-100 florines oro 2-4 meses salario artesano, representaciones artísticas pinturas Tommaso da Modena 1352 fresco Treviso Cardinals Chapter House retrato Cardenal Hugo Provence gafas nariz earliest depiction glasses arte occidental 70 años invención rapid diffusion.
          </p>

          <h3>Lentes contacto siglo XIX-XX Fick-Wichterle revoluciones</h3>
          <p>
            Adolf Fick oftalmólogo alemán Zurich 1887 fabrica primeras lentes contacto viables vidrio soplado artesanos Suiza escleral large 18-21 mm diámetro cubren esclera completa córnea vault espacio llena solución salina tolerancia limitada 1-2 horas peso vidrio hipoxia severa aplicaciones queratocono astigmatismo irregular. PMMA polymethyl methacrylate 1936 desarrollo William Feinbloom ligero durable, 1948 Kevin Tuohy corneal lenses 9-10 mm diámetro solo córnea comfort mejora problema PMMA impermeable oxígeno Dk=0 hipoxia crónica. Otto Wichterle-Drahoslav Lím checos 1959 inventan hidrogel HEMA hidroxietil metacrilato polímero hidrófilo absorbe agua 38-75% gel soft flexible comfort instant revolución permeabilidad Dk 8-20 Barrer, comercialización Bausch+Lomb 1965 SofLens FDA 1971 mercado explode millions. Silicona-hidrogel 1999 Ciba Vision Night+Day lotrafilcon A Dk/t 175 breakthrough oxígeno siloxano macromolecules 30-day continuous wear FDA approved paradigm shift daily disposables conveniente.
          </p>

          <h3>Cirugía refractiva queratotomía radial RK 1970s precursor</h3>
          <p>
            Svyatoslav Fyodorov Rusia 1970s desarrolla queratotomía radial RK radial keratotomy incisiones anteriores 90-95% grosor patrón radial 4-8-16 incisiones centro córnea periferia aplana curvatura central reduce poder refractivo miopía -1D a -6D, procedimiento mecánico cuchilla diamante calibrada variabilidad resultados ±1D 60-70% 20/20 vs LASIK 90-95%, complicaciones fluctuación diurna visión morning mejor tarde peor hipermetropía progresiva shift +0.5D a +2D década debilita biomecánica traumatismo ruptura globe incisiones nunca curan 100% contraindica deportes contacto military pilots. LASIK 1990 Ioannis Pallikaris Grecia combina microkeratome flap excimer laser paradigm nuevo accuracy ±0.25-0.50D 90-95% 20/20 superiority replaces RK completamente 2000s obsolete.
          </p>

          <h3>Excimer láser 193 nm ArF IBM-Columbia development</h3>
          <p>
            Excimer excited dimer láser argon fluoride ArF 193 nm ultravioleta desarrollo IBM 1970s Rangaswamy Srinivasan químico estudia fotodisrupción ablación precisa materiales orgánicos polímeros biological tissues sin daño térmico cold ablation photochemical rompe enlaces moleculares directamente. Stephen Trokel oftalmólogo Columbia University NYC 1983 aplica cornea bovine ex-vivo experimentos demuestra ablación controlada 0.25 μm pulso reshape curvatura potencial corrección refractiva patente 1985 licencia VISX-Summit-Alcon FDA trials 1995 FDA aprueba PRK photorefractive keratectomy primera técnica excimer comercial mercado boom 1990s-2000s millones procedimientos. Mecanismo fotodisrupción 193 nm energía fotón 6.4 eV excede enlaces covalentes C-C 3.5 eV C-N 3.0 eV rompe directamente moléculas colágeno queratina estroma fragments eyectan pluma vapor-plasma acústico shock wave audible click 100-500 Hz repetition rate scanner galvanometric mirrors XY deflection precisión sub-micron ±0.25D clinical outcomes reproducibility high ISO-CE-FDA certifications Class III highest risk regulatory approval years trials long-term safety established acceptance mainstream ophthalmology standard care 30 años technology foundational laser vision.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y Curiosidades
        </h2>
        <div className="theory-subsection">
          <h3>Franklin bifocales invención práctica 1784 genio polímata</h3>
          <p>
            Benjamin Franklin 1706-1790 científico-inventor-político padece presbicia vista cansada edad 50+ años necesita gafas lectura +2D cerca diferentes distancia +0.5D lejos frustración cambiar constantly pares múltiples confusión, solución ingeniosa 1784 Paris embajador Francia corta lentes mitad horizontal superior distancia inferior lectura cementa marco único bifocal primera vez history invención práctica carta amigo George Whatley describe advantages convenience seamless transition tareas walking-reading automatic zona apropiada campo visual head-tilt intuitive, adopción gradual 1800s fabricantes ópticos Europa-USA visible line demarcation estética compromiso funcionalidad prioritaria. Progresivas modernas 1950s-1959 Bernard Maitenaz Essilor Francia inventa Varilux primera lente progresiva sin línea transition gradual infinitas focales distancia-intermedia-cerca corridor 10-14 mm aberraciones periféricas swim effect distortion digital freeform surfacing CNC personalizado PD-vertex-tilt customized adaptación 1-2 semanas 20-30% rechazan initial frustration educación paciente critical.
          </p>

          <h3>Lentillas colores cosméticas pigmentos iris artificial</h3>
          <p>
            Contactos coloreados cosméticos cambian apariencia iris azul-verde-avellana-gris pigmentos impresos superficie posterior zona óptica central 6-8 mm transparente pupila visión no obstruida periferia colored annulus imita patterns naturales radial streaks dots, poblaciones iris oscuro marrón-negro dominante mundial 80-90% asiáticos-africanos-latinos deseo ojos claros Western ideal beauty standards media Hollywood blue-eyed aspirational cultural imperialism controversial self-image body dysmorphia, industria mercado $500M anual 2023 crecimiento 10-15% yearly demanda Asia-LatAm adopción jóvenes 18-35 años moda-social media Instagram-TikTok influencers promote selfies filters digital-physical augmentation blur boundaries authentic-enhanced identity online personas curated. Riesgos médicos lentillas cosméticas sin receta over-counter no reguladas FDA Class III medical devices require prescription enforcement lax online vendors contaminación bacteriana manufacturing standards absent materiales tóxicos pigmentos heavy metals lead-cadmium leach abrasion corneal epithelial damage ulceración infections Pseudomonas keratitis cicatrices opacidades visión permanente casos severos enucleation ojo removido prevention educación pública ophthalmology societies warning dangers fitting profesional necesario base curve diameter match individual anatomy one-size-fits-all fallacy dangerous.
          </p>

          <h3>Monovisión presbyopia dominant-non dominant eye split tasks</h3>
          <p>
            Monovision estrategia corrección presbicia vista cansada edad 40+ acomodación perdida cristalino rígido +1.5D a +3D adición lectura, técnica contactos-LASIK corrige ojo dominante distancia 0.00D plena non-dominant cerca -1.50D a -2.50D miopía inducida lectura-móvil cerebro suppression alterna inputs ojo apropiado tarea neuroplasticity adaptación 1-4 semanas initial confusion diplopia transient fusion tolerance desarrolla, ventajas evita bifocales-progresivas líneas-distorsiones freedom contacts instant vs glasses LASIK irreversible trial preoperative simulation obligatorio predict success 70-80% adaptan 20-30% rechazan binocular vision disrupted stereopsis depth perception reducida 30-50% fine motor tasks threading-catching contraindicated precision surgery-piloting safety critical. Candidatos desk workers lectura-ordenador predomina distance occasional conducción daylight moderate speeds vs night driving rain-fog challenging halos starbursts monovision exacerbates pupila {'>'} 6 mm darkness complaints alternative progressive contacts multifocal IOLs bifocal implants cataract surgery simultaneous vision concentric zones distance-near rings diffractive-refractive split light 60/40 ratio brain selects defocus blur suppressed 80-85% satisfaction surveys long-term 5-10 años stable.
          </p>

          <h3>LASIK astronautas NASA aprueba 2007 visión crítica misiones</h3>
          <p>
            NASA históricamente prohibía cirugía refractiva astronautas candidatos 20/20 uncorrected visión requisito estricto natural eyesight gafas toleradas contactos prohibidas microgravedad lágrimas no drenan gravity-assisted flotan ojos irritación surface tension bubbles lenses float-off spacewalks EVA helmets incompatibles, preocupación LASIK flap stability microgravity-reentry G-forces 3-4 G× Soyuz 8-10 G× emergencia dislocation riesgo theoretical estudios militares pilotos fighter jets F-16-F-18 6-9 G× LASIK aprobado Air Force 2000 Navy 2007 sin incidentes thousands pilots performance maintained extrapolate NASA re-evaluates 2007 aprueba LASIK PRK requirements 1 año post-op estabilización completa refracción ±0.50D córnea topografía normal grosor residual {'>'} 250 μm cleared medical, beneficio operacional freedom gafas helmets spacesuits field-of-view FOV limitado peripheral vision compromised glasses frames obstruct lateral awareness safety hazard critical emergencias fire-decompression seconds reacción vital peripheral detection survival visual system unobstructed optimal performance mission success crew safety paramount justify adoption evidence-based policy change science-informed modern aerospace medicine.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <ul>
          <li>👓 Gafas: monofocales esfera-cilindro eje materiales CR-39 n=1.498 $50-$150 policarbonato n=1.586 alto índice n=1.67-1.74 delgado $200-$500, progresivas presbicia ADD +1.5D a +3D transición gradual corredor 10-14 mm adaptación 1-2 semanas freeform digital CNC custom $300-$800</li>
          <li>👁️ Contactos blandas: hidrogel HEMA 38-75% agua Dk 20-30 vs silicona-hidrogel Dk/t 100-175 oxígeno superior 30 días uso prolongado $30-$60 mensuales $15-$30 diarias, RGP Dk 50-150 geometría precisa astigmatismo irregular queratocono nitidez 20/15 adaptación 1-2 semanas nicho 5-10%</li>
          <li>⚕️ LASIK: flap 90-120 μm femto excimer ArF 193 nm ablación 0.25 μm zona 6-6.5 mm wavefront custom recovery 1 día 80-90% 20/20 $2,000-$3,000, PRK surface sin flap dolor 2-3 días slower recovery, SMILE lenticule incisión 2-4 mm biomecánica preserva sequedad menos -1D a -10D miopía innovación 30-40%</li>
          <li>🌙 Orto-K: lentes nocturnas RGP reverse geometry moldea epithelial 50 μm 6-8h sueño visión diurna -1D a -6D reversible 24-48h temporal niños control miopía progresión 30-60% reducción elongación axial $1,000-$2,000 initial reemplazo $300-$500</li>
          <li>👁️ ICL phakic IOLs: cámara posterior collamer biocompatible miopía -8D a -20D hipermetropía +4D a +10D grosor corneal insuficiente reversible explante calidad óptica zona 6-7 mm completa cataratas 1-2% glaucoma iridotomía preventiva $4,000-$6,000 specialist</li>
          <li>Historia: gafas Italia 1280-1290 Venecia vidrio Murano convexas presbicia +1D a +3D Tommaso 1352 arte earliest depiction, bifocales Franklin 1784 horizontal superior-inferior progresivas Maitenaz 1959 Varilux gradual, contactos Fick 1887 vidrio escleral Wichterle 1959 HEMA hidrogel revolución silicona-hidrogel 1999 Dk/t 175 breakthrough, RK Fyodorov 1970s radial incisiones LASIK 1990 Pallikaris flap-excimer 90-95% accuracy excimer Srinivasan-Trokel 1983 193 nm fotodisrupción FDA 1995 PRK 40M procedimientos</li>
        </ul>
      </div>
    </>
  );
};

export default CorreccionVisualTheory;
