import { TheorySection, Concept, Important, Example, Formula } from '../../../../components/TheoryV2';

// Metadatos del tema
export const metadata = {
  titulo: "Defectos Visuales",
  descripcion: "Miopía, hipermetropía, astigmatismo y su corrección",
  educationLevel: "ESO",
  levels: ['ESO'],
  isTheoryOnly: true
};

const DefectosVisualesTheory = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="Defectos Visuales" emoji="👓">
        <p>
          Los defectos visuales son problemas en el funcionamiento del ojo que impiden que las 
          imágenes se formen correctamente en la retina. Los más comunes son la miopía, 
          hipermetropía y astigmatismo.
        </p>

        <Important>
          Este tema proporciona una base práctica para ESO sobre defectos visuales comunes miopía-hipermetropía-astigmatismo y sus correcciones.
          En un ojo normal (emétrope emetropía), la imagen se forma exactamente sobre la retina distancia focal 22-24 mm coincide longitud axial ojo perfecto enfoque. 
          En los defectos visuales refractivos, la imagen se forma antes (miopía ojo largo 24-26 mm focal anterior retina), después (hipermetropía ojo corto 20-22 mm focal posterior), o de forma distorsionada (astigmatismo córnea irregular curvatura desigual meridianos).
        </Important>
      </TheorySection>

      <TheorySection title="Miopía - No veo bien de lejos" emoji="🔍">
        <Concept title="¿Qué es la miopía?">
          <p>
            La miopía es un defecto visual en el que no se ve bien de lejos, 
            pero sí de cerca. Esto ocurre porque la imagen se forma antes de la retina.
          </p>

          <h4>Causas de la miopía:</h4>
          <ul>
            <li>👁️ El ojo es demasiado largo (más común)</li>
            <li>🔍 El cristalino tiene demasiada potencia</li>
            <li>📐 La córnea es demasiado curva</li>
          </ul>

          <h4>Síntomas:</h4>
          <ul>
            <li>❌ Visión borrosa de objetos lejanos (pizarra, señales de tráfico)</li>
            <li>✅ Visión clara de objetos cercanos (libro, móvil)</li>
            <li>😣 Entrecerrar los ojos para ver mejor de lejos</li>
            <li>🤕 Dolores de cabeza por esfuerzo visual</li>
          </ul>

          <Example>
            Ejemplo cotidiano: Una persona con miopía puede leer un libro 
            sin problemas, pero no puede ver claramente lo que escribe el profesor en la pizarra.
          </Example>
        </Concept>

        <Concept title="Corrección de la miopía">
          <p>
            La miopía se corrige con <strong>lentes divergentes</strong> (cóncavas), que 
            dispersan la luz antes de que entre en el ojo, haciendo que la imagen se forme 
            sobre la retina.
          </p>

          <h4>Opciones de corrección:</h4>
          <ul>
            <li>👓 <strong>Gafas con lentes divergentes</strong> (negativas, más delgadas en el centro)</li>
            <li>👁️ <strong>Lentillas</strong> (más cómodas para deporte)</li>
            <li>⚕️ <strong>Cirugía láser</strong> (LASIK, PRK - a partir de 18 años)</li>
          </ul>

          <Important>
            Las graduaciones para miopía se expresan con números negativos: -1.00, -2.50, -5.00 dioptrías.
            Cuanto mayor es el número, mayor es la miopía.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Hipermetropía - No veo bien de cerca" emoji="📖">
        <Concept title="¿Qué es la hipermetropía?">
          <p>
            La hipermetropía es un defecto visual en el que <strong>no se ve bien de cerca</strong>, 
            aunque la visión de lejos puede ser buena. La imagen se forma <strong>detrás de la retina</strong>.
          </p>

          <h4>Causas de la hipermetropía:</h4>
          <ul>
            <li>👁️ El ojo es demasiado corto (más común)</li>
            <li>🔍 El cristalino tiene poca potencia</li>
            <li>📐 La córnea es demasiado plana</li>
          </ul>

          <h4>Síntomas:</h4>
          <ul>
            <li>❌ Visión borrosa de objetos cercanos (lectura, móvil)</li>
            <li>✅ Visión relativamente buena de lejos (puede compensarse con esfuerzo)</li>
            <li>😫 Fatiga ocular al leer o trabajar de cerca</li>
            <li>🤕 Dolores de cabeza frecuentes</li>
          </ul>

          <Example>
            Ejemplo cotidiano: Una persona con hipermetropía puede ver 
            la televisión sin problemas, pero le cuesta leer el periódico o usar el móvil.
          </Example>
        </Concept>

        <Concept title="Corrección de la hipermetropía">
          <p>
            La hipermetropía se corrige con lentes convergentes (convexas), 
            que concentran la luz antes de que entre en el ojo, haciendo que la imagen se 
            forme sobre la retina.
          </p>

          <h4>Opciones de corrección:</h4>
          <ul>
            <li>👓 Gafas con lentes convergentes (positivas, más gruesas en el centro)</li>
            <li>👁️ Lentillas</li>
            <li>⚕️ Cirugía láser (menos común que para miopía)</li>
          </ul>

          <Important>
            Las graduaciones para hipermetropía se expresan con números positivos: +1.00, +2.50, +4.00 dioptrías.
            Cuanto mayor es el número, mayor es la hipermetropía.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Astigmatismo - Visión distorsionada" emoji="🌀">
        <Concept title="¿Qué es el astigmatismo?">
          <p>
            El astigmatismo es un defecto visual en el que la visión es distorsionada 
            tanto de cerca como de lejos. Esto ocurre porque la córnea o el cristalino tienen 
            una forma irregular (como un balón de rugby en lugar de una pelota de fútbol).
          </p>

          <h4>Causas del astigmatismo:</h4>
          <ul>
            <li>🏈 Córnea con forma irregular (ovalada en lugar de esférica)</li>
            <li>🔍 Cristalino con curvatura desigual</li>
            <li>🧬 Suele ser congénito (de nacimiento)</li>
          </ul>

          <h4>Síntomas:</h4>
          <ul>
            <li>🌀 Visión borrosa o distorsionada a todas las distancias</li>
            <li>📏 Las líneas rectas pueden parecer onduladas</li>
            <li>😵 Dificultad para distinguir detalles finos</li>
            <li>🤕 Fatiga ocular y dolores de cabeza</li>
            <li>💡 Halos alrededor de las luces por la noche</li>
          </ul>

          <Example>
            Ejemplo cotidiano: Una persona con astigmatismo puede confundir 
            letras similares como H, M, N o números como 8 y 0.
          </Example>
        </Concept>

        <Concept title="Corrección del astigmatismo">
          <p>
            El astigmatismo se corrige con lentes cilíndricas (tóricas), 
            que tienen diferente potencia en diferentes ejes para compensar la forma irregular 
            de la córnea.
          </p>

          <h4>Opciones de corrección:</h4>
          <ul>
            <li>👓 Gafas con lentes cilíndricas (tienen un "eje" específico)</li>
            <li>👁️ Lentillas tóricas (deben mantenerse en posición correcta)</li>
            <li>⚕️ Cirugía láser (remodela la córnea)</li>
          </ul>

          <Important>
            El astigmatismo puede combinarse con miopía o hipermetropía. La graduación incluye 
            tres valores: esfera (miopía/hipermetropía), cilindro (astigmatismo) y eje (orientación).
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Otros Defectos Visuales" emoji="👁️">
        <Concept title="Presbicia - Vista cansada">
          <p>
            La presbicia, conocida como "vista cansada", es la pérdida de capacidad 
            para enfocar de cerca que aparece con la edad (generalmente después de los 40 años).
          </p>

          <h4>Causa:</h4>
          <ul>
            <li>⏰ El cristalino pierde elasticidad con la edad</li>
            <li>💪 Los músculos ciliares se debilitan</li>
            <li>🔍 Dificultad para acomodar (cambiar el enfoque)</li>
          </ul>

          <h4>Corrección:</h4>
          <ul>
            <li>👓 Gafas de lectura (+1.00 a +3.00 dioptrías)</li>
            <li>🔄 Lentes progresivas o bifocales</li>
            <li>👁️ Lentillas multifocales</li>
          </ul>
        </Concept>

        <Concept title="Daltonismo - Ceguera al color">
          <p>
            El daltonismo es la <strong>dificultad para distinguir ciertos colores</strong>, 
            especialmente rojo y verde. Es un defecto genético ligado al cromosoma X.
          </p>

          <h4>Tipos:</h4>
          <ul>
            <li>🔴🟢 Deuteranomalía (dificultad con rojo-verde) - más común</li>
            <li>🔴 Protanopia (no ve el rojo)</li>
            <li>🟢 Deuteranopia (no ve el verde)</li>
            <li>🔵🟡 Tritanopia (no ve azul-amarillo) - muy raro</li>
          </ul>

          <Important>
            El daltonismo no tiene cura, pero existen gafas especiales y filtros que pueden 
            ayudar a distinguir mejor los colores.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Comparación de Defectos Visuales" emoji="📊">
        <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1rem'}}>
          <thead>
            <tr style={{backgroundColor: 'var(--color-primary-light)', borderBottom: '2px solid var(--color-primary)'}}>
              <th style={{padding: '0.75rem', textAlign: 'left'}}>Defecto</th>
              <th style={{padding: '0.75rem', textAlign: 'left'}}>Problema</th>
              <th style={{padding: '0.75rem', textAlign: 'left'}}>Imagen se forma</th>
              <th style={{padding: '0.75rem', textAlign: 'left'}}>Corrección</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom: '1px solid var(--color-border)'}}>
              <td style={{padding: '0.75rem'}}><strong>Miopía</strong></td>
              <td style={{padding: '0.75rem'}}>No ve bien de lejos</td>
              <td style={{padding: '0.75rem'}}>Antes de la retina</td>
              <td style={{padding: '0.75rem'}}>Lentes divergentes (-)</td>
            </tr>
            <tr style={{borderBottom: '1px solid var(--color-border)'}}>
              <td style={{padding: '0.75rem'}}><strong>Hipermetropía</strong></td>
              <td style={{padding: '0.75rem'}}>No ve bien de cerca</td>
              <td style={{padding: '0.75rem'}}>Detrás de la retina</td>
              <td style={{padding: '0.75rem'}}>Lentes convergentes (+)</td>
            </tr>
            <tr style={{borderBottom: '1px solid var(--color-border)'}}>
              <td style={{padding: '0.75rem'}}><strong>Astigmatismo</strong></td>
              <td style={{padding: '0.75rem'}}>Visión distorsionada</td>
              <td style={{padding: '0.75rem'}}>Forma irregular</td>
              <td style={{padding: '0.75rem'}}>Lentes cilíndricas</td>
            </tr>
            <tr style={{borderBottom: '1px solid var(--color-border)'}}>
              <td style={{padding: '0.75rem'}}><strong>Presbicia</strong></td>
              <td style={{padding: '0.75rem'}}>Vista cansada (edad)</td>
              <td style={{padding: '0.75rem'}}>Detrás (cerca)</td>
              <td style={{padding: '0.75rem'}}>Gafas de lectura (+)</td>
            </tr>
          </tbody>
        </table>
      </TheorySection>

      <TheorySection title="Cuidado de la Vista" emoji="🩺">
        <Concept title="Consejos para cuidar tus ojos">
          <h4>Prevención y cuidados:</h4>
          <ul>
            <li>👓 Usa gafas de sol con protección UV</li>
            <li>💻 Descansa la vista cada 20 minutos (regla 20-20-20)</li>
            <li>💡 Trabaja con buena iluminación</li>
            <li>📏 Mantén distancia adecuada al leer (30-40 cm)</li>
            <li>🥕 Alimentación rica en vitamina A (zanahorias, verduras)</li>
            <li>👨‍⚕️ Revisiones oftalmológicas periódicas</li>
            <li>🚭 No fumar (daña la retina)</li>
          </ul>

          <Important>
            Regla 20-20-20: Cada 20 minutos, mira algo a 20 pies (6 metros) 
            de distancia durante 20 segundos. Esto ayuda a reducir la fatiga ocular.
          </Important>
        </Concept>
      </TheorySection>

      {/* Bloques finales en orden estricto: Aplicaciones → Historia → Anécdotas → Resumen */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>Optometría refracción subjetiva diagnóstico errores refractivos</h3>
          <p>
            Examen refractivo optométrico evaluación completa agudeza visual carta Snellen 20/20 normal 20/40-20/200 baja visión, foróptero lentes prueba combinaciones esfera -12D a +12D cilindro -6D a +6D eje 0-180° determina prescripción óptima paciente compara \"¿mejor 1 o 2?\" técnica subjetiva duetos Jackson ±0.25D steps refinamiento final, autorefractómetros objetivos infrarrojo 840 nm sensores CCD miden frente onda aberraciones estimación inicial automatización rápida 30-60s procedimiento vs manual 5-10 min foróptero tradicional precisión ±0.50D suficiente screening confirmación subjetiva necesaria patient response crítico preference tolerancia individual variabilidad. Miopía epidemia moderna prevalencia mundial 30-40% población desarrollada urbana 80-90% jóvenes asiáticos Singapur-Corea-China-Japón factores educación intensiva 10-14h diarias lectura-escritura indoor close-work distancia 20-40 cm acomodación constante estrés ciliar outdoor time {'<'}1h diaria vs recomendado 2-3h sol luz brillante 10,000-100,000 lux dopamine retinal release protective effect inhibe elongación axial estudios Sydney-Singapore intervención aumentar outdoor reduce incidencia 30-50% prevención efectiva cost-free behavioral modification, tratamientos control miopía atropine 0.01% gotas nocturnas antagonista muscarínico relaja acomodación reduce progresión 30-60% efectividad lentes Orto-K nocturnas defocus miópico periférico 30-50% control combinación synergistic 60-80% reduction progression potente. Hipermetropía latente vs manifiesta acomodación compensa edad joven 10-30 años amplitud 10-12D reserva oculta hipermetropía total +4D a +6D manifiesta +1D a +2D medida sin ciclopléjico latente diferencia revela tropicamide 0.5-1% paraliza músculo ciliar 20-30 min mid-dilated pupils 6-8 mm refracción ciclopléjica accuracy aumenta detección completa prescripción adecuada niños crítico amblyopia prevention ojo perezoso deprivación visual desarrollo neural crítico 0-7 años ventana plasticidad. Astigmatismo irregular queratocono ectasia corneal protrusión cónica apex inferior-temporal adelgaza estroma 300-400 μm vs normal 540 μm debilidad biomecánica progresiva adolescencia 15-25 años agudeza visual 20/40-20/200 severo gafas insuficientes corrigen RGP lentes rígidas vault apex gap lágrima neutraliza irregularidad 20/15-20/20 recovery notable, cross-linking corneal CXL riboflavin 0.1% UV-A 365 nm 3-30 min photopolymerization enlaces covalentes colágeno aumenta rigidez 300-400% stabiliza progresión 95-98% casos procedimiento outpatient anestesia tópica recovery 1 semana preserva visión existente no mejora previene deterioro futuro gold standard treatment queratocono modern era.
          </p>

          <h3>Lentes correctoras monofocales progresivas tecnología avanzada</h3>
          <p>
            Prescripción óptica receta oftálmica formato estándar OD/OI (oculus dexter/sinister) esfera cilindro eje ejemplo típico miopía miópica astigmatismo OD -3.00 -0.75 x 180 significa esfera -3.00D miopía moderada cilindro -0.75D astigmatismo miópico eje 180° horizontal meridiano más plano vs 90° vertical steep OI -2.75 -1.00 x 10 izquierdo anisometropía diferencia 0.25D esfera tolerable común 0.50-1.00D compensación prismática base-out necesaria {'>'} 1D evita diplopia double vision estrabismo latente descompensado, adición cerca ADD presbicia +1.50D típico edad 45 años +2.00D 50 años +2.50D 55-60 años progresión 0.25-0.50D década cristalino rigidez aumenta acomodación disminuye amplitud 10D jóvenes 20 años 1-2D mayores 60 años insuficiente lectura 30-40 cm distancia Harmon ergonomía óptima. Materiales lentes high-index n=1.67-1.74 reducen grosor 40-60% estética cosmética miopía alta -8D+ vs CR-39 standard n=1.498 grueso central delgado periférico invierte divergentes aspecto antiestético social self-consciousness vanity consideration válido quality vida psychological wellbeing precio premium $200-$500 vs $50-$150 convencional investment justified comfort appearance confidence, tratamientos superficiales antirreflejos multicapa MgF₂-TiO₂-SiO₂ 4-8 capas λ/4 grosor óptico destructive interference reflexión Fresnel 8-12% por superficie reduce 0.5-2% residual transmisión 98-99.5% contraste nitidez halos nocturnos conducción eliminados crítico safety driving essential polarizados reducen glare reflejo agua-asfalto-nieve 50-99% filtrado mejora comfort visual outdoor activities water-sports skiing hiking fotocromáticos transiciones cromógenos orgánicos spiro-oxazines UV 295-380 nm activa oscurece 30-60s transmisión 80-85% claro indoor 8-20% oscuro outdoor reversión 2-5 min temperatura dependiente frío slower respuesta verano rápido indoor-outdoor convenience single pair versatility eliminates second sunglasses carrying switching.
          </p>

          <h3>Cirugía refractiva láser corrección permanente LASIK-PRK</h3>
          <p>
            LASIK procedimiento ambulatorio 10-15 min por ojo anestesia tópica gotas proparacaína-tetracaína indolora: femtosegundo láser IntraLase 150 kHz Ziemer LDV 1 MHz crea flap corneal 90-120 μm grosor 8.5-9.5 mm diámetro bisagra superior preserva nervios limbo inervación reduce sequedad vs microqueratomo mecánico Moria-Hansatome cuchilla oscilante 15,000 rpm menos predecible grosor ±10-20 μm variabilidad, levanta flap expone estroma excimer ArF 193 nm ablaciona tejido fotodisrupción precisión 0.25 μm pulso frecuencia 200-500 Hz reshape curvatura aplanamiento miopía -1D a -12D remoción 12-14 μm por dioptría zona óptica 6-6.5 mm transición blend 8-9 mm minimiza aberraciones HOA coma-trefoil-esférica visi ón nocturna halos starbursts pupila grande {'>'} 6-7 mm darkness tratamientos wavefront-guided custom Zyoptix-iDesign mapean 1,200-20,000 puntos aberraciones pupila dilatada optimiza outcomes. Recovery visual rápido 80-90% pacientes 20/20-20/25 primer día 95-98% semana estabilización 1-3 meses refracciones finales check-ups 1-3-6-12 meses seguimiento lifetime estable 10-20 años regresión mínima -0.25D a -0.50D década aceptable retreatment 5-10% pacientes enhancement levanta flap original re-ablate adicional tissue disponible bed residual {'>'} 250 μm biomecánica segura, complicaciones ectasia corneal rara 0.04-0.6% incidencia screening preoperatorio riguroso topografía Pentacam detecta queratocono subcl ínico irregular asimetría posterior elevación contraindica procedimiento evita catastrophic outcome progressive thinning visual deterioration irreversible requires transplant PKP-DALK ultimate treatment failure prevention critical, sequedad ocular transitoria 6-12 meses lágrimas artificiales hialuronato sodio 0.1-0.3% gel drops frecuente 4-8× día síntomas burning-foreign body sensation photophobia majority resuelve nerves regeneran inervación recupera 80-90% baseline long-term persistent 5-10% casos severos punctal plugs bloquea drenaje lagrimal aumenta volumen película precorneal thermal-silicone duración 3-6 meses replaceable.
          </p>

          <h3>Terapia visual ortóptica estrabismo ambliopía rehabilitación</h3>
          <p>
            Estrabismo desalineación ojos esotropía convergente endo-turn exotropía divergente exo-turn hipertropia vertical up-down medido prism diopters Δ cantidad desviación 1Δ = 1 cm desplazamiento 1 m distancia cover-uncover test detecta tropía manifiesta vs foria latente compensada fusión binocular mantiene alineación esfuerzo, causas refractivas hipermetropía alta +3D a +6D acomodación excesiva convergencia asociada ratio AC/A accommodation-convergence 3-5:1 normal {'>'} 6:1 alto riesgo esotropía acomodativa corrige gafas plena corrección hiperm etropía +bifocales reducen acomodación cerca relajan convergencia realinea ojos tratamiento conservador evita cirugía 60-70% casos éxito, cirugía músculos extraoculares recession-resection ajusta longitud-inserción rectus medial-lateral obliquos modifica fuerzas rotacionales torque angle strabismus complejos vertical-torsional patterns bajo anestesia general niños 30-60 min procedimiento outpatient recovery 1-2 semanas restricciones natación-deportes contacto mes complete healing, ambliopía ojo perezoso deprivación visual desarrollo neural crítico período sensible 0-7 años plasticidad máxima ventana cierre gradual adolescencia permanente adulthood tratamiento timing crítico early detection screening pediátrico 6-12 meses yearly exams detect risk factors anisometropia diferencia {'>'} 1D entre ojos estrabismo constante cataratas congénitas ptosis severa eyelid droop obstrucción axis visual, terapia oclusión patching ojo dominante fuerte fuerza uso ojo débil estimula cortex visual V1 desarrollo conexiones neurales fortalece vía visual amblyopic eye horas diarias patching 2-6h según severidad edad younger mayor horas necesarias compliance desafío children resist patching social embarrassment discomfort atropine penalization alternativa dilata blur ojo fuerte prefiere débil ojo target comparable outcomes menos invasivo mejor tolerancia drops vs patch psychosocial impact menor.
          </p>

          <h3>Prevención salud visual hábitos protección UV pantallas</h3>
          <p>
            Protección UV ultravioleta 290-400 nm espectro UVA 315-400 nm UVB 280-315 nm UVC 100-280 nm absorbido atmósfera ozono no alcanza superficie, exposición crónica UV cataractogénesis opacificación cristalino cortical-nuclear-posterior edad promedio 60-70 años desarrolla {'>'} 50% población mundial 20M ciegos cataratas annually WHO estadísticas, pterigion crecimiento tejido conjuntival fibrovascular sobre córnea nasal típico surfers-outdoor workers equator latitudes altas UV exposición prolongada años-décadas irritación redness foreign body sensation progresión lenta 1-2 mm década advanced obstrucción axis visual cirugía excision recurrencia 30-40% sin mitomicina-C MMC 0.02% application intraoperative inhibits fibroblasts reduces recurrence 5-10% mejora outcomes, gafas sol protección UV400 bloquea 99-100% UVA/UVB crítico polarizados reducen glare reflejo agua-nieve-asfalto 50-99% outdoor activities water-sports skiing essential fotocromáticos darken bright sunlight convenience single pair versátil indoor-outdoor transitions, blue light 400-500 nm HEV high-energy-visible potencial fototoxicidad retinal macular células RPE epitelio pigmentario mitochondrial stress oxidative damage acumulativo décadas exposición crónica pantallas LED smartphones-tablets-computers emiten 30-50% blue peak 450-460 nm vs sunlight 20-30% proportional menor intensidad absoluta 100-1,000 lux indoor vs 10,000-100,000 outdoor duration 6-12h diarias pantallas vs 2-4h sunlight cumulative exposure comparable controversia evidencia mixta estudios animales high-intensity damage human-relevance uncertain precautionary filters blue-light-blocking lenses yellow-tinted absorb 20-60% 400-500 nm range mejora sleep circadian rhythm melatonin suppression reduce 450-480 nm pre-bedtime 2h exposure disrupts onset insomnia prevalence 30-40% population digital-age epidemic screen-time moderation behavioral interventions primary prevention filters supplementary.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        <div className="theory-subsection">
          <h3>Primeras descripciones miopía-hipermetropía Aristóteles-Galeno</h3>
          <p>
            Aristóteles 384-322 a.C. \"De Sensu et Sensibilibus\" observa individuos acercan objetos cara visión cercana superior lejana myopes término griego μύω myein cerrar ojos entrecerrar comportamiento característico miopes reducen aberraciones pupila pequeña pinhole effect mejora nitidez lejos vs hipermétropes extienden brazos alejan lectura dificultad cerca presbicia vista cansada edad confundida hipermetropía distinción conceptual ausente medicina antigua síntomas similares causa diferente acomodación cristalino vs longitud axial ojo moderna diferenciación Donders 1864 revoluciona oftalmología. Galeno 129-200 d.C. médico romano Imperio tratados oftalmológicos \"De usu partium\" anatomía ojo describe córnea-cristalino-humor vítreo teoría errónea imagen forma cristalino transmite nervio óptico cerebro función cristalino lente refractiva no comprende estructura similar Alhazen 1021 corrige retina verdadera receptor neural Kepler 1604 confirma imagen invertida retina geometría óptica precisa, tratamientos Galeno inexistentes corrección quirúrgica cataratas couching aguja desplaza cristalino opaco campo visual restaura parcial visión borrosa aphakic sin lente +10D a +15D hipermetropía extrema errores refractivos miopía-hipermetropía no reconocidos tratables esperar invención gafas siglo XIII Italia Venecia-Florencia 1280-1290 lentes convexas presbicia primera aplicación corrección visual.
          </p>

          <h3>Invención gafas Italia siglo XIII revolución óptica</h3>
          <p>
            Lentes correctoras emergen norte Italia 1280-1290 invención anónima debates históricos atribuciones Salvino D'Armate Florencia Alessandro della Spina Pisa frailes dominicos transmiten conocimiento conventos escritorios medievales scribes copistas manuscritos iluminados presbicia universal problema edad 40+ pérdida acomodación cristalino rigidez progresiva lectura cerca imposible trabajo intelectual monástico-académico productividad decline seriousness, vidrio soplado artesanos Murano Venecia secretos guardados monopolio commercial centurias cristal transparencia óptica superior Europa competidores quality control critical optical performance magnification +1D a +3D potencia lectura cerca 30-40 cm distancia ergonómica, difusión rápida 1300s comercio Mediterranean Venecia hub exporta lentes Europa monjes-escribas-comerciantes educated classes literacy monopolio iglesia-aristocracia price exclusivo 50-100 florines oro 2-4 meses salario artesano skilled worker expensive investment justified productivity años adicionales carrera value invaluable. Representaciones artísticas Tommaso da Modena 1352 fresco Treviso Cardinals Chapter House retrato Cardenal Hugo Provence gafas nariz lectura libro earliest depiction glasses arte occidental documenta widespread adoption 70 años invención rapid cultural diffusion integration daily life normalización social, miopía lentes cóncavas divergentes tardías 1451 Nicolás Cusa filósofo alemán \"De Beryllo\" menciona negativas corrección pero fabricación compleja grinding técnicas curvatura interior difícil artesanos dominan 1500s Renacimiento demand menor prevalencia baja época pre-industrial outdoor lifestyle agricultura-caza sun exposure protective vs moderna epidemic urbana educación intensiva indoor close-work causal.
          </p>

          <h3>Donders ametropías clasificación científica 1864 oftalmología moderna</h3>
          <p>
            Frans Cornelis Donders oftalmólogo holandés Utrecht 1864 publica \"On the Anomalies of Accommodation and Refraction of the Eye\" tratado monumental revoluciona oftalmología establece clasificación científica sistemática errores refractivos ametropías vs emetropía ojo normal perfecto enfoque retina: miopía myopia ojo largo axial length 24-26 mm vs normal 22-24 mm imagen focal anterior retina objetos lejanos borrosos cerca claros corrección lentes divergentes negativas -1D a -12D potencia, hipermetropía hyperopia ojo corto 20-22 mm focal posterior retina cerca borrosa lejos clara acomodación jóvenes compensa esfuerzo fatiga cefalea corrección convergentes positivas +1D a +6D potencia, astigmatismo irregular curvatura corneal meridianos diferentes potencia vertical-horizontal ejemplo 42D vs 44D diferencia 2D cilindro corrección lentes tóricas cilíndricas eje específico orientación. Concepto dioptría D unidad poder refractivo inventa Donders sistema métrico decimal recíproco distancia focal metros f=1m → P=1D, f=0.5m → P=2D, f=0.25m → P=4D progresión geométrica rational científico vs previo confuso pulgadas-pies conversiones complicadas estandarización internacional facilitates prescripciones comunicación ópticos-oftalmólogos worldwide adoption rápida 1870s-1880s universal modern era, retinoscopía técnica objetiva refracción inventa Donders reflejo rojo pupilar luz examiner sweep movimiento neutralización determina error refractivo sin respuesta verbal paciente aplicable niños-no verbales-malingerers faking symptoms objective measurement revolutionizes clinical practice accuracy mejora diagnóstico tratamiento ametropías corrección adecuada gafas-lentillas outcomes visual significativamente optimizados calidad vida independencia funcional lectura-conducción-trabajo productivity societal impact enormous contribution humanity vision care foundational.
          </p>

          <h3>Excimer láser oftalmología 1980s-1990s LASIK revolución</h3>
          <p>
            Excimer argon fluoride ArF 193 nm ultravioleta desarrollo IBM 1970s Rangaswamy Srinivasan químico estudia fotodisrupción ablación precisa materiales orgánicos polímeros tejidos biológicos sin daño térmico cold ablation photochemical bonds rompe directamente 6.4 eV energía fotón excede covalent C-C 3.5 eV C-N 3.0 eV. Stephen Trokel oftalmólogo Columbia University NYC 1983 aplica córnea bovine ex-vivo demuestra ablación controlada reshape curvatura potencial corrección refractiva patente 1985 licencia VISX-Summit-Alcon competencia desarrollo devices, FDA trials extensos conejos-monkeys primates safety-efficacy estudios 1988-1995 PRK photorefractive keratectomy aprobado primera técnica excimer comercial USA mercado abre boom 1990s millones procedimientos, limitación PRK dolor postoperatorio 2-3 días epitelización regeneración recovery slower 1 semana funcional pacientes discomfort significativo adoption limitada. LASIK breakthrough 1990 Ioannis Pallikaris oftalmólogo Grecia Creta combina microqueratomo crea flap corneal 160 μm grosor mecánico levanta estroma expone ablaciona excimer reposiciona flap adherence natural sin suturas epitelio intacto dolor mínimo recovery immediate 80-90% 20/20 primer día revolucionario patient acceptance explode 1990s-2000s dominates refractive surgery 90% procedimientos worldwide 40M realizados desde inception, refinamientos tecnológicos femtosegundo láser IntraLase 2001 reemplaza microqueratomo mecánico flap creación all-laser LASIK precision mejora grosor ±5 μm vs mecánico ±15-20 μm variability complications reducidas flap irregular-buttonhole-free cap incidencia {'<'} 0.1% vs 1-2% blade safety profile superior adopción rápida premium practices $3,000-$4,000 vs blade $2,000-$2,500 cost-effectiveness debatable outcomes similar long-term patient preference psychological blade-free reassurance marketing advantage, wavefront-guided custom ablations 2002-2005 mapean aberraciones higher-order coma-trefoil-spherical personaliza tratamiento individual topography-guided Contoura 2013-2016 irregular astigmatism post-trauma-keratoconus frustrated LASIK-PRK anteriores rescue procedures salvage vision casos complejos expansion indicaciones frontiers refractive surgery continues evolve technology advances exponential capabilities transformative.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y Curiosidades
        </h2>
        <div className="theory-subsection">
          <h3>Miopía genética vs ambiental nature-nurture debate</h3>
          <p>
            Estudios gemelos twin studies concordancia miopía idénticos monozygotic 80-90% vs fraternos dizygotic 40-50% heredabilidad 60-80% componente genético fuerte pero no determinista environmental factors críticos modulan expresión, genes identificados GWAS genome-wide association 400+ loci susceptibilidad pequeño efecto individual 0.1-0.5D cada uno acumulativo polygenic predisposición multifactorial complexity no single major gene Mendelian pattern autosomal dominant-recessive ausente herencia compleja interacción multiple variants. Epidemia miopía Asia prevalencia explota 1950s-2024 Singapur 10% generación padres 1960s a 80-90% hijos-nietos 2020s velocidad cambio 3-4 décadas demasiado rápido evolución genética explicar environment crítico causative factor educación intensiva presión académica competitiva Confucian culture valores learning-achievement 10-14h diarias estudio close-work distancia 20-40 cm acomodación constante stress ciliar indoor tiempo 90-95% despertar daylight exposure {'<'}30 min diaria insuficiente vs recomendado 2-3h outdoor bright light 10,000-100,000 lux dopamine retinal release neurotransmitter regula growth ocular inhibits axial elongation protective mechanism, intervenciones randomized controlled trials Sydney-Singapore aumentar outdoor tiempo escolar 40-80 min adicionales daily reduce incidencia miopía 30-50% effect-size significant cost-free behavioral modification implementable policy-level escuelas urbanas recreos outdoor obligatorio playground time structured schedule compliance enforcement parental education awareness campaigns public health initiative promising scalable prevention strategy epidemic containment future generations sight preservation global priority WHO recognizes burden disability economic cost billions visual impairment productivity loss avoidable preventable action necessary.
          </p>

          <h3>Hipermetropía latente acomodación oculta engaño diagnóstico</h3>
          <p>
            Hipermetropía total suma manifiesta +2D refracción sin ciclopléjico + latente +3D paralizada músculo ciliar tropicamide = +5D total oculta acomodación compensa joven 10-30 años amplitud 10-12D reserva sufficient mask defecto aparente visión 20/20 agudeza normal examen rutinario pass screening no detecta problema subyacente fatiga cefalea eyestrain síntomas atribuidos otros causas stress-sueño-deshidratación misdiagnosis común, edad 40+ presbicia cristalino rigidez acomodación disminuye 1-2D residual insuficiente compensar latente hipermetropía emerges suddenly síntomas visión borrosa cerca-lejos simultaneous presbyopia + hyperopia descompensated manifestation confuso paciente \"súbito\" realidad gradual décadas oculto revealed loss compensation mechanism, ciclopléjico refracción tropicamida 0.5-1% gotas paraliza acomodación 20-30 min mid-dilatado pupila 6-8 mm refracción accurate total hipermetropía revela verdadera magnitud prescripción adecuada gafas plena corrección evita eyestrain headaches fatigue mejora calidad vida productivity comfort visual, niños crítico amblyopia prevención deprivación unilateral anisometropic amblyopia diferencia {'>'} 1D entre ojos ojo más hipermétrope blur deprivation desarrollo neural V1 corteza visual período sensible 0-7 años ventana cierre ojo perezoso permanente adulthood irreversible screening pediátrico 6-12 meses-yearly exams cycloplegic refraction obligatorio detecta risk factors early intervention patching-atropine tratamiento success 80-90% compliance crítico timing essential sooner mejor outcomes visual 20/20-20/30 achievable full correction glasses contact lenses amblyopia resolved normal binocular vision restored.
          </p>

          <h3>Astigmatismo irregular queratocono juvenil progresivo</h3>
          <p>
            Queratocono keratoconus ectasia corneal degeneración progresiva adelgaza estroma central-paracentral protrusión cónica apex típico inferior-temporal grosor reduce 540 μm normal a 300-400 μm afectado debilidad biomecánica colágeno lamelas desorganizadas cross-links insuficientes mechanical stress intraocular pressure 15 mmHg constant force deforma forwards bulging irregular astigmatism aumenta +1D a +8D cilindro eje oblicuo 45-135° rotates progresión agudeza visual deteriora 20/20 infancia a 20/40-20/200 adolescencia 15-25 años peak progression stabiliza 30+ generalmente. Prevalencia 1:2,000 población general subdiagnosed oftalmólogos generales miss subtle early signs topografía corneal essential Pentacam elevation map posterior surface steepening {'>'} 40D central inferior-superior asymmetry {'>'} 1.5D pachymetry thinnest point {'<'} 480 μm red flags screening, factores riesgo eye-rubbing vigorous frotarse ojos alergias crónicas eczema-hay fever-asthma atopic triad liberan histamine itching prurito círculo vicioso mechanical trauma cornea acumulativo years abuse breakdown colágeno acelerado progression estudios demuestran cessation rubbing slows progression 50-70% behavioral modification critical counseling pacientes adolescentes teenagers hábito inconsciente awareness training self-control techniques antihistamínicos tópicos olopatadine-ketotifen reduce itching breaks cycle protección cornea preserves structure, genética familial clustering 10-15% casos first-degree relatives affected herencia compleja polygenic no simple Mendelian dominant-recessive múltiples genes susceptibilidad environmental triggers rubbing-UV-hormones adolescent puberty growth spurts hormonal changes influence onset progression females-males similar prevalence ratio 1:1 controversia literature histórica suggested males 2:1 bias referral patterns specialty clinics selection bias community studies equal distribution. Tratamientos modernos cross-linking CXL riboflavin + UV-A stabiliza 95-98% casos halt progression preserves vision avoid transplant PKP-DALK penetrating-deep-anterior-lamellar keratoplasty 10-20% advanced cases last resort complications rejection-infection-irregular-astigmatism recurrent problema quality life impacted significantly cost $15,000-$30,000 procedure plus immunosuppression lifelong risks prevention priority CXL early intervention $2,500-$4,000 outpatient single session cost-effective preserves native tissue avoids surgery superior outcomes patient satisfaction high acceptance growing worldwide adoption standard care keratoconus management.
          </p>

          <h3>Cirugía LASIK astronautas militares aprobación controversial</h3>
          <p>
            NASA histórico prohibición cirugía refractiva astronautas candidatos 20/20 uncorrected visión requisito natural eyesight gafas toleradas contactos prohibidas microgravedad lágrimas no drenan gravity-assisted flotan superficie tension bubbles irritación lenses float-off spacewalks EVA helmets visors incompatibles, preocupación LASIK flap stability microgravedad reentry G-forces 3-4 G× Soyuz capsule 8-10 G× emergency ballistic descent ablative reentry plasma 3,000°C heating shield deceleration extreme dislocation riesgo flap dehiscence theoretical no evidence real-world trauma estudios terrestres accidentes boxeo-airbag deployment casos raros flap displacement {'<'} 0.1% incidencia 6+ meses postoperative healing adherencia 90% tensile strength sufficient resist physiological G-loads reasonable expectations. Militares US Air Force Navy estudios extensos fighter pilots F-16 Falcon-F-18 Hornet 6-9 G× sustained maniobras combat dogfighting aerial acrobatics high-performance demands visual acuity critical targeting weapons systems HUD heads-up-display night-vision goggles compatibility LASIK no contraindica estudios 1990s-2000s thousands pilots operated outcomes excellent performance maintained missions successful zero incidents flap complications combat zones deployment Iraq-Afghanistan dust-sand-heat extremo environments tolerance demonstrated Air Force 2000 aprueba LASIK aviadores Navy 2007 sigue precedent policies updated evidence-based risk assessment scientific literature supports safety efficacy long-term stability documented. NASA re-evaluates 2007 aprueba LASIK-PRK astronautas requirements strict 1 año postoperative stabilization refracción ±0.50D fluctuation máximo córnea topografía normal no ectasia grosor residual {'>'} 250 μm biomechanics segura complications ausentes screening rigorous candidates selectos cleared medical flight status operational readiness, beneficio eliminates glasses helmets spacesuits complex interface restrictive field-of-view FOV lateral obstruction frames peripheral awareness compromised safety hazard emergencias fire-decompression-collision seconds reaction vital visual system unobstructed optimal mission success crew preservation paramount LASIK enables freedom operational advantage justifies adoption policy evidence trumps tradition dogma outdated restrictions abandoned progressive science-informed modern aerospace medicine decisions rational risk-benefit analysis favorable outcomes proven track-record decades experience worldwide millions procedures safety profile established acceptance mainstream normalized.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <ul>
          <li>👁️ Defectos refractivos: miopía ojo largo 24-26 mm imagen focal anterior retina objetos lejanos borrosos cerca claros corrección lentes divergentes negativas -1D a -12D, hipermetropía ojo corto 20-22 mm focal posterior cerca borrosa lejos clara acomodación compensa jóvenes fatiga cefalea convergentes positivas +1D a +6D, astigmatismo córnea irregular curvatura meridianos desiguales distorsión todas distancias lentes cilíndricas tóricas eje específico orientación</li>
          <li>📊 Prevalencia epidemiológica: miopía 30-40% población mundial desarrollada urbana 80-90% jóvenes asiáticos Singapur-Corea-China educación intensiva 10-14h indoor close-work outdoor {'<'}1h causal, hipermetropía 5-10% variable edad acomodación oculta latente vs manifiesta ciclopléjico revela total, astigmatismo 30-40% población mayoría leve {'<'}1D cilindro irregular queratocono 1:2,000 ectasia progresiva adolescencia 15-25 años cross-linking CXL stabiliza</li>
          <li>🔬 Diagnóstico refracción: examen optométrico agudeza Snellen 20/20 normal foróptero lentes prueba esfera-cilindro-eje subjective \"¿mejor 1 o 2?\" duetos ±0.25D refinamiento, autorefractómetros objetivos infrarrojo 840 nm aberraciones frente onda ±0.50D estimación inicial, ciclopléjico tropicamida 0.5-1% paraliza acomodación 20-30 min hipermetropía latente revela total prescripción adecuada niños amblyopia prevención deprivación screening 6-12 meses essential</li>
          <li>👓 Corrección lentes: gafas monofocales esfera-cilindro materiales CR-39 n=1.498 estándar policarbonato n=1.586 niños high-index n=1.67-1.74 delgado miopía alta progresivas presbicia ADD +1.5D a +3D transición gradual $300-$800, contactos blandas silicona-hidrogel Dk/t 100-175 oxígeno 30 días uso prolongado diarias conveniente RGP Dk 50-150 geometría precisa astigmatismo irregular queratocono nitidez 20/15 superior</li>
          <li>⚕️ Cirugía refractiva: LASIK flap 90-120 μm femto excimer ArF 193 nm ablación 0.25 μm zona 6-6.5 mm wavefront custom recovery 1 día 80-90% 20/20 $2,000-$3,000 ojo complicaciones ectasia 0.04-0.6% screening grosor residual {'>'} 250 μm seguro, PRK surface sin flap dolor 2-3 días slower recovery córneas delgadas actividades contacto, SMILE lenticule incisión 2-4 mm biomecánica preserva sequedad menos -1D a -10D innovación 30-40% mercado</li>
          <li>Historia: Aristóteles 384-322 a.C. observa myopes-hyperopes comportamiento Donders 1864 clasificación científica ametropías dioptría D unidad inventa sistema métrico retinoscopía objetiva revoluciona, gafas Italia 1280-1290 convexas presbicia concavas 1451 Cusa miopía fabricación compleja, excimer Srinivasan-Trokel 1983 193 nm fotodisrupción FDA 1995 PRK aprueba LASIK 1990 Pallikaris flap-excimer 40M procedimientos femto 2001 all-laser wavefront 2002 custom aboliciones topography-guided 2013 irregular astigmatism expansion</li>
        </ul>
      </div>
    </>
  );
};

export default DefectosVisualesTheory;
