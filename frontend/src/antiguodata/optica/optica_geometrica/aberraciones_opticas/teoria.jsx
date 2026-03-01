import { TheorySection, Concept, Important } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "Aberraciones Ópticas",
  descripcion: "Defectos en la formación de imágenes por sistemas ópticos reales",
  isTheoryOnly: true,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const AberracionesOpticasTeoria = () => {
  return (
    <>
      <TheorySection title="¿Qué son las Aberraciones Ópticas?">
        <p>
          Las aberraciones ópticas son defectos o imperfecciones en la formación de imágenes que producen los sistemas ópticos reales. Mientras que la óptica geométrica ideal asume que todos los rayos de luz convergen perfectamente en un punto focal, en la práctica, las lentes y espejos reales presentan limitaciones que degradan la calidad de la imagen.
        </p>
        
        <Important>
          Ningún sistema óptico real es perfecto. Las aberraciones son el precio que pagamos por usar lentes y espejos con superficies esféricas simples. El diseño óptico moderno es el arte de minimizar estas imperfecciones mediante combinaciones inteligentes de elementos.
        </Important>

        <p>
          Estas aberraciones son inherentes al diseño óptico y se deben a las propiedades físicas de los materiales y a las leyes de refracción y reflexión. Comprender estas aberraciones es fundamental para el diseño de sistemas ópticos de alta calidad como cámaras, telescopios, microscopios y lentes correctivas.
        </p>
      </TheorySection>

      <TheorySection title="Clasificación de las Aberraciones">
        <p>
          Las aberraciones ópticas se clasifican en dos categorías principales:
        </p>
        
        <Concept title="1. Aberraciones Monocromáticas">
          <p>
            Ocurren incluso con luz de una sola longitud de onda (monocromática). Se deben a la geometría del sistema óptico:
          </p>
          <ul>
            <li>Aberración esférica: rayos marginales enfocan diferente que paraxiales</li>
            <li>Coma: puntos fuera del eje aparecen como cometas</li>
            <li>Astigmatismo: focos tangencial y sagital separados</li>
            <li>Curvatura de campo: imagen plana enfoca sobre superficie curva</li>
            <li>Distorsión: magnificación varía con la posición (barril/cojín)</li>
          </ul>
        </Concept>

        <Concept title="2. Aberraciones Cromáticas">
          <p>
            Ocurren debido a que el índice de refracción del material varía con la longitud de onda (dispersión cromática):
          </p>
          <ul>
            <li>Aberración cromática longitudinal: colores enfocan a distancias diferentes</li>
            <li>Aberración cromática lateral: magnificación varía con el color</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Aberración Esférica">
        <p>
          La aberración esférica ocurre cuando los rayos de luz que pasan por diferentes zonas de una lente o espejo esférico no convergen en el mismo punto focal.
        </p>

        <Concept title="Características">
          <ul>
            <li>Rayos paraxiales: Los que pasan cerca del eje óptico convergen en el foco paraxial</li>
            <li>Rayos marginales: Los que pasan por los bordes convergen en un punto más cercano a la lente</li>
            <li>Resultado: La imagen aparece borrosa, sin un punto focal definido</li>
          </ul>
        </Concept>

        <Concept title="Ejemplos Prácticos">
          <p>Fotografía:</p>
          <ul>
            <li>Al usar una lente a máxima apertura (f/1.4, f/2), las imágenes pueden aparecer suaves o con halos</li>
            <li>Cerrar el diafragma (f/8, f/11) reduce la aberración al bloquear los rayos marginales</li>
            <li>Las lentes de alta calidad usan elementos asféricos para corregir este defecto</li>
          </ul>
          
          <p>Telescopios:</p>
          <ul>
            <li>Los telescopios reflectores con espejos parabólicos eliminan la aberración esférica en el eje</li>
            <li>Los telescopios refractores requieren múltiples elementos para corregirla</li>
          </ul>
        </Concept>

        <Concept title="Métodos de Corrección">
          <ul>
            <li>Lentes asféricas: Superficies no esféricas que compensan la aberración</li>
            <li>Diafragma: Reducir la apertura para usar solo la zona central</li>
            <li>Combinación de lentes: Usar múltiples elementos con curvaturas opuestas</li>
            <li>Espejos parabólicos: En telescopios reflectores</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Coma">
        <p>
          El coma es una aberración que afecta a los rayos que llegan oblicuamente al sistema óptico. Los puntos fuera del eje aparecen como manchas con forma de cometa, de ahí su nombre.
        </p>

        <Concept title="Características">
          <ul>
            <li>Afecta principalmente a objetos fuera del eje óptico</li>
            <li>La imagen de un punto aparece como una mancha con "cola"</li>
            <li>Aumenta con la distancia al eje óptico</li>
            <li>Es proporcional al cuadrado de la apertura</li>
          </ul>
        </Concept>

        <Concept title="Ejemplos Prácticos">
          <p>Astrofotografía:</p>
          <ul>
            <li>Las estrellas en los bordes de la imagen aparecen alargadas como cometas</li>
            <li>Especialmente notable en telescopios de focal corta (gran campo)</li>
            <li>Los correctores de coma (como el Paracorr) mejoran las imágenes en los bordes</li>
          </ul>

          <p>Fotografía de paisajes:</p>
          <ul>
            <li>Lentes gran angular económicas muestran coma en las esquinas</li>
            <li>Las luces puntuales (farolas, estrellas) se ven distorsionadas en los bordes</li>
          </ul>
        </Concept>

        <Concept title="Corrección">
          <ul>
            <li>Diseño aplanático: Sistemas corregidos para coma y aberración esférica</li>
            <li>Lentes especiales: Correctores de coma para telescopios</li>
            <li>Cerrar diafragma: Reduce pero no elimina el coma</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Astigmatismo">
        <p>
          El astigmatismo ocurre cuando los rayos en planos perpendiculares (tangencial y sagital) no convergen en el mismo punto focal. Esto produce imágenes alargadas en lugar de puntuales.
        </p>

        <Concept title="Características">
          <ul>
            <li>Los rayos tangenciales y sagitales tienen focos diferentes</li>
            <li>Un punto objeto produce una imagen lineal (en dos orientaciones diferentes)</li>
            <li>Aumenta con la distancia al eje óptico</li>
            <li>Común en lentes simples y ojos humanos</li>
          </ul>
        </Concept>

        <Concept title="Ejemplos Prácticos">
          <p>Visión humana:</p>
          <ul>
            <li>El astigmatismo ocular es muy común (córnea no perfectamente esférica)</li>
            <li>Las personas con astigmatismo ven líneas verticales y horizontales con diferente nitidez</li>
            <li>Se corrige con lentes cilíndricas (lentes tóricas)</li>
            <li>Síntomas: visión borrosa, fatiga ocular, dolores de cabeza</li>
          </ul>

          <p>Fotografía:</p>
          <ul>
            <li>Lentes económicas muestran astigmatismo en los bordes</li>
            <li>Las líneas radiales y tangenciales tienen diferente nitidez</li>
            <li>Notable al fotografiar textos o patrones geométricos</li>
          </ul>
        </Concept>

        <Concept title="Corrección">
          <ul>
            <li>Lentes anastigmáticas: Diseñadas para eliminar el astigmatismo</li>
            <li>Lentes cilíndricas: Para corrección ocular</li>
            <li>Diseño óptico complejo: Múltiples elementos con curvaturas específicas</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Curvatura de Campo">
        <p>
          La curvatura de campo (o campo curvo) ocurre cuando la imagen de un objeto plano se forma sobre una superficie curva en lugar de un plano.
        </p>

        <Concept title="Características">
          <ul>
            <li>El plano focal es curvo en lugar de plano</li>
            <li>Si el centro está enfocado, los bordes están desenfocados (y viceversa)</li>
            <li>Afecta a todo el campo de visión</li>
            <li>Común en lentes simples</li>
          </ul>
        </Concept>

        <Concept title="Ejemplos Prácticos">
          <p>Fotografía:</p>
          <ul>
            <li>Al fotografiar una pared plana, no se puede enfocar todo simultáneamente</li>
            <li>Si el centro está nítido, las esquinas están borrosas</li>
            <li>Especialmente problemático en fotografía de documentos y reproducción</li>
            <li>Las lentes "flat field" están diseñadas para minimizar este efecto</li>
          </ul>

          <p>Microscopía:</p>
          <ul>
            <li>Crítico en microscopios de alta magnificación</li>
            <li>Los objetivos "plan" están corregidos para campo plano</li>
            <li>Permite observar toda la muestra enfocada simultáneamente</li>
          </ul>
        </Concept>

        <Concept title="Corrección">
          <ul>
            <li>Lentes de campo plano: Diseño específico para aplanar el campo</li>
            <li>Sensor curvo: Algunos diseños experimentales usan sensores curvos</li>
            <li>Combinación de elementos: Lentes con curvaturas compensatorias</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Distorsión">
        <p>
          La distorsión es una aberración que altera la forma de la imagen sin afectar su nitidez. Las líneas rectas aparecen curvadas.
        </p>

        <Concept title="Tipos de Distorsión">
          <p>Distorsión de barril (negativa):</p>
          <ul>
            <li>Las líneas rectas se curvan hacia afuera</li>
            <li>La magnificación disminuye hacia los bordes</li>
            <li>Común en lentes gran angular</li>
            <li>Ejemplo: Un cuadrado parece un barril abombado</li>
          </ul>

          <p>Distorsión de cojín (positiva):</p>
          <ul>
            <li>Las líneas rectas se curvan hacia adentro</li>
            <li>La magnificación aumenta hacia los bordes</li>
            <li>Común en teleobjetivos</li>
            <li>Ejemplo: Un cuadrado parece un cojín hundido</li>
          </ul>

          <p>Distorsión de bigote (compleja):</p>
          <ul>
            <li>Combinación de barril y cojín</li>
            <li>Común en zooms a ciertas distancias focales</li>
          </ul>
        </Concept>

        <Concept title="Ejemplos Prácticos">
          <p>Fotografía arquitectónica:</p>
          <ul>
            <li>Lentes gran angular (14-24mm) muestran distorsión de barril</li>
            <li>Los edificios con líneas rectas aparecen curvados</li>
            <li>Se corrige en post-procesamiento o con lentes especiales</li>
            <li>Las lentes "rectilineales" minimizan la distorsión</li>
          </ul>

          <p>Fotografía de productos:</p>
          <ul>
            <li>Crítico mantener proporciones correctas</li>
            <li>Se usan lentes macro con mínima distorsión</li>
            <li>Importante para catálogos y comercio electrónico</li>
          </ul>

          <p>Lentes ojo de pez:</p>
          <ul>
            <li>Distorsión extrema intencional (180° o más)</li>
            <li>Efecto creativo en fotografía y video</li>
            <li>Útil para panorámicas y realidad virtual</li>
          </ul>
        </Concept>

        <Concept title="Corrección">
          <ul>
            <li>Diseño óptico: Lentes rectilineales con elementos correctores</li>
            <li>Post-procesamiento: Software de edición (Lightroom, Photoshop)</li>
            <li>Perfiles de lente: Corrección automática basada en el modelo de lente</li>
            <li>Posición del diafragma: Ubicación estratégica del stop</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Aberración Cromática">
        <p>
          La aberración cromática ocurre porque el índice de refracción del vidrio varía con la longitud de onda (dispersión). Diferentes colores se enfocan en puntos diferentes.
        </p>

        <Concept title="Aberración Cromática Longitudinal (Axial)">
          <ul>
            <li>Diferentes colores tienen diferentes distancias focales</li>
            <li>La luz azul se enfoca más cerca que la roja</li>
            <li>Produce halos de color alrededor de objetos brillantes</li>
            <li>Más notable en los bordes de alto contraste</li>
          </ul>
        </Concept>

        <Concept title="Aberración Cromática Lateral (Transversal)">
          <ul>
            <li>Diferentes colores tienen diferentes magnificaciones</li>
            <li>Produce franjas de color en los bordes de la imagen</li>
            <li>Aumenta hacia los bordes del campo</li>
            <li>Visible como bordes verdes/magenta o azul/amarillo</li>
          </ul>
        </Concept>

        <Concept title="Ejemplos Prácticos">
          <p>Fotografía:</p>
          <ul>
            <li>Halos de color púrpura/verde alrededor de ramas contra el cielo</li>
            <li>Franjas de color en los bordes de edificios</li>
            <li>Más notable en lentes económicas y teleobjetivos largos</li>
            <li>Las lentes APO (apocromáticas) minimizan este efecto</li>
          </ul>

          <p>Astronomía:</p>
          <ul>
            <li>Halos de color alrededor de estrellas brillantes</li>
            <li>Los refractores apocromáticos son muy valorados</li>
            <li>Los reflectores no sufren aberración cromática (usan espejos)</li>
          </ul>

          <p>Microscopía:</p>
          <ul>
            <li>Bordes de color en muestras de alto contraste</li>
            <li>Los objetivos acromáticos corrigen rojo y azul</li>
            <li>Los objetivos apocromáticos corrigen tres colores</li>
          </ul>
        </Concept>

        <Concept title="Corrección">
          <ul>
            <li>Lentes acromáticas: Doblete de crown y flint (corrige 2 colores)</li>
            <li>Lentes apocromáticas (APO): Corrige 3 colores, usa vidrios especiales</li>
            <li>Lentes ED (Extra-low Dispersion): Vidrios con baja dispersión</li>
            <li>Lentes fluorita: Material con dispersión muy baja</li>
            <li>Post-procesamiento: Corrección digital de franjas de color</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Interacción entre Aberraciones">
        <p>
          En sistemas ópticos reales, múltiples aberraciones coexisten y se afectan mutuamente. El diseño óptico busca un balance óptimo:
        </p>

        <Concept title="Compromisos en el Diseño">
          <ul>
            <li>Costo vs. Calidad: Más elementos = mejor corrección pero mayor costo</li>
            <li>Tamaño vs. Rendimiento: Lentes compactas tienen más aberraciones</li>
            <li>Apertura vs. Aberraciones: Aperturas grandes amplifican las aberraciones</li>
            <li>Campo de visión vs. Corrección: Gran angular = más difícil corregir</li>
          </ul>
        </Concept>

        <Concept title="Estrategias de Diseño">
          <ul>
            <li>Lentes simples: Muchas aberraciones, bajo costo</li>
            <li>Dobletes: Corrigen aberración cromática y esférica</li>
            <li>Tripletes: Mejor corrección general (ej: Cooke triplet)</li>
            <li>Diseños complejos: 10-20 elementos para máxima calidad</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones y Consideraciones Prácticas">
        <Concept title="Fotografía">
          <ul>
            <li>Lentes prime: Menos elementos, menos aberraciones, más nítidas</li>
            <li>Lentes zoom: Más elementos, más compromisos, más versátiles</li>
            <li>Apertura óptima: Generalmente f/5.6 - f/8 para mínimas aberraciones</li>
            <li>Lentes profesionales: Elementos asféricos, ED, fluorita</li>
          </ul>
        </Concept>

        <Concept title="Astronomía">
          <ul>
            <li>Refractores APO: Excelente para planetas, sin aberración cromática</li>
            <li>Reflectores: Sin aberración cromática, pero pueden tener coma</li>
            <li>Schmidt-Cassegrain: Compactos, campo plano, versátiles</li>
            <li>Correctores: Aplanadores de campo, correctores de coma</li>
          </ul>
        </Concept>

        <Concept title="Microscopía">
          <ul>
            <li>Objetivos plan: Campo plano para observación uniforme</li>
            <li>Objetivos apo: Mínima aberración cromática</li>
            <li>Inmersión en aceite: Reduce aberraciones, aumenta resolución</li>
            <li>Condensador: Importante para iluminación uniforme</li>
          </ul>
        </Concept>

        <Concept title="Oftalmología">
          <ul>
            <li>Lentes intraoculares: Diseñadas para mínimas aberraciones</li>
            <li>Cirugía refractiva: Puede introducir aberraciones de alto orden</li>
            <li>Lentes de contacto: Corrección de astigmatismo con lentes tóricas</li>
            <li>Aberrometría: Medición precisa de aberraciones oculares</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>📷 Fotografía profesional y cinematografía</h3>
          <p>
            Las lentes de cine cuestan $10,000-$100,000 por su corrección extrema de aberraciones. Lentes como Zeiss Master Prime o Arri Signature usan 15-20 elementos de vidrio especial (fluorita, ED) con superficies asféricas. Corrección crítica: aberración cromática (halos de color), distorsión (líneas rectas), coma (esquinas), respiración de foco (cambio de magnificación al enfocar). Ejemplo: lente Canon 50mm f/1.2 ($1,500) vs. 50mm f/1.8 ($125) - diferencia visible a máxima apertura en nitidez de esquinas y bokeh suave.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔭 Telescopios astronómicos avanzados</h3>
          <p>
            Telescopios refractores apocromáticos (APO) de alta gama usan vidrio ED o fluorita para minimizar aberración cromática. Un APO de 150mm puede costar $5,000-$15,000. Telescopios Schmidt-Cassegrain usan placa correctora asférica para eliminar aberración esférica y coma. Telescopios Ritchey-Chrétien (como Hubble) tienen espejos hiperbólicos primario y secundario para campo amplio sin coma. Correctores de campo (aplanadores, reductores) añaden 2-3 elementos para fotografía de gran campo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>👁️ Cirugía refractiva y lentes intraoculares</h3>
          <p>
            LASIK tradicional puede inducir aberraciones de alto orden (coma, trefoil), especialmente con pupilas grandes nocturnas. LASIK guiado por frente de onda (wavefront-guided) mide aberraciones del ojo con aberrómetro Hartmann-Shack y las corrige individualmente. Lentes intraoculares (IOLs) premium para cataratas: asféricas (reducen aberración esférica), tóricas (corrigen astigmatismo), multifocales (visión lejos/cerca pero con halos nocturnos). Costo: IOL básica $0, premium $2,000-$5,000 por ojo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Microscopía de super-resolución</h3>
          <p>
            Objetivos de microscopio plan-apocromáticos (Plan-Apo) corrigen todas las aberraciones en campo plano. Cuestan $5,000-$15,000 por objetivo. Inmersión en aceite (n=1.515) reduce aberración esférica al igualar índice de refracción vidrio-medio. Óptica adaptativa en microscopía: espejos deformables compensan aberraciones en tejidos biológicos en tiempo real, mejorando resolución en profundidad. Ejemplo: cerebro de ratón vivo a 500 µm de profundidad con corrección.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📱 Cámaras de smartphones y corrección computacional</h3>
          <p>
            Lentes de smartphone tienen 5-7 elementos diminutos con alta distorsión y aberraciones. Software corrige en tiempo real: distorsión (mapeo geométrico), aberración cromática (desplazamiento de canales RGB), viñeteo (brillo bordes). Modo retrato usa IA para detectar profundidad y simular bokeh de lente f/1.4. Google Pixel usa HDR+ y apilamiento de imágenes para compensar óptica limitada. Resultado: fotos comparables a cámaras con lentes 50x más grandes.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: La búsqueda de la imagen perfecta
        </h2>
        
        <div className="theory-subsection">
          <h3>🔍 Newton y el problema cromático (1668)</h3>
          <p>
            Isaac Newton observó que lentes refractoras producían halos de color (aberración cromática). Concluyó erróneamente que era imposible corregirla y construyó el primer telescopio reflector (1668) usando espejo parabólico. Ventaja: espejos no tienen dispersión cromática. Su rechazo a refractores retrasó su desarrollo 50 años. Ironía: Chester Moor Hall (1733) demostró que dos vidrios diferentes (crown + flint) sí podían corregir el color, creando el primer doblete acromático.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📐 Seidel y las cinco aberraciones (1857)</h3>
          <p>
            Ludwig von Seidel (matemático alemán) derivó las ecuaciones que describen las cinco aberraciones monocromáticas de tercer orden: esférica, coma, astigmatismo, curvatura de campo, distorsión. Llamadas "aberraciones de Seidel". Su trabajo permitió diseñar sistemas ópticos analíticamente, prediciendo aberraciones sin construir prototipos. Base matemática del diseño óptico moderno. Antes de Seidel, el diseño óptico era prueba-y-error empírico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 Paul Rudolph y el Tessar (1902)</h3>
          <p>
            Paul Rudolph (Zeiss) diseñó la lente Tessar: 4 elementos en 3 grupos, corregida para todas las aberraciones de Seidel. Llamada "el ojo del águila" por su nitidez. Revolucionó la fotografía: compacta, económica, excelente rendimiento. Patente expiró 1945, copiada mundialmente. Derivados: Sonnar (f/1.5-f/2), Planar (simétrico, bajo distorsión). Tessar influyó en casi todas las lentes modernas. Ejemplo: lente de Hasselblad 500C que fue a la Luna.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💻 Era digital y corrección computacional (1990-presente)</h3>
          <p>
            Diseño asistido por computadora (CAD) permite optimizar lentes con 15-20 elementos, imposible analíticamente. Trazado de rayos simula millones de trayectorias. Corrección digital en post-procesamiento: Adobe Lightroom con perfiles de lente corrige distorsión y cromática automáticamente. Fotografía computacional (Google, Apple): múltiples imágenes fusionadas, corrección en tiempo real, super-resolución mediante IA. Resultado: smartphones con óptica mediocre producen imágenes excelentes.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🛰️ El error del Hubble: aberración esférica de $4.7 billones</h3>
          <p>
            El telescopio espacial Hubble (lanzado 1990) tenía aberración esférica severa: su espejo de 2.4 m se pulió con curvatura incorrecta (2 micras de error). Razón: el instrumento de prueba estaba mal calibrado. Imágenes borrosas, pánico en NASA. Solución: misión de reparación 1993 instaló COSTAR (óptica correctora, como "gafas" para el Hubble) y nuevos instrumentos con corrección integrada. Costo: $4.7 billones incluyendo misión. Después: imágenes espectaculares que revolucionaron astronomía.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📸 La "zona dulce" de las lentes: mito o realidad</h3>
          <p>
            Fotógrafos hablan de la "zona dulce" (sweet spot): apertura donde la lente es más nítida, típicamente f/5.6-f/8. Razón: a máxima apertura (f/1.4) domina aberración esférica y coma; a mínima apertura (f/16) domina difracción. El punto medio minimiza ambos efectos. Pero: lentes modernas de alta gama (Sigma Art, Zeiss Otus) son excelentes incluso a f/1.4 gracias a elementos asféricos. Prueba: test charts muestran que Otus 55mm f/1.4 es nítido completamente abierto, sin "sweet spot" necesario.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎬 Por qué las lentes de cine son tan enormes y caras</h3>
          <p>
            Lente cine vs. foto de misma focal: cine pesa 3-5x más y cuesta 10-20x más. ¿Por qué? 1) Más elementos de vidrio para minimizar aberraciones (respiración de foco, distorsión), 2) Engranajes mecánicos precisos para foco/apertura suaves, 3) Mismo tamaño frontal en todo el set (matte box compatible), 4) Sin "focus breathing" (magnificación constante), 5) Marcas de distancia grabadas, 6) T-stop en vez de f-stop (transmisión real), 7) Bokeh suave. Ejemplo: Canon CN-E 50mm T1.3 cine = $4,800 vs. EF 50mm f/1.2 foto = $1,500.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>👓 Varilux: la primera lente progresiva sin líneas (1959)</h3>
          <p>
            Lentes bifocales tradicionales tienen línea visible entre zonas lejos/cerca. Bernard Maitenaz (Essilor) inventó lentes progresivas: gradiente continuo de poder sin líneas. Problema: introduce astigmatismo no deseado en zonas laterales (aberración cilíndrica). Solución moderna: diseño computacional con superficies free-form (tallado CNC punto por punto) minimiza aberraciones. Adaptación: cerebro tarda 1-2 semanas en aprender dónde mirar. Progresivas modernas (Varilux X) tienen zonas de visión 90% más anchas que originales 1959.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            Aberraciones ópticas: defectos inevitables en sistemas reales debido a geometría (monocromáticas) y dispersión (cromáticas).
          </li>
          <li>
            Monocromáticas (5 de Seidel): esférica (rayos marginales/paraxiales), coma (fuera de eje), astigmatismo (planos tangencial/sagital), curvatura campo, distorsión (barril/cojín).
          </li>
          <li>
            Cromáticas: longitudinal (colores enfocan distancias diferentes), lateral (magnificaciones diferentes).
          </li>
          <li>
            Corrección óptica: lentes asféricas, dobletes acromáticos (crown+flint), tripletes apocromáticos (3 colores), vidrios ED/fluorita, diseño multi-elemento.
          </li>
          <li>
            Aplicaciones críticas: fotografía profesional (lentes cine $10k-$100k), astronomía (APO, Schmidt-Cassegrain), cirugía ocular (LASIK wavefront), microscopía (Plan-Apo).
          </li>
          <li>
            Historia: Newton reflector (1668), Seidel ecuaciones (1857), Tessar Zeiss (1902), Hubble error $4.7B (1990), corrección computacional (2000s).
          </li>
        </ul>
      </div>
    </>
  );
};

export default AberracionesOpticasTeoria;

