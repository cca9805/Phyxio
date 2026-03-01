import { TheorySection, Concept, Example } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "Instrumentos simples: Lupas y lentes (ESO)",
  descripcion: "Uso de lupas y lentes en aplicaciones cotidianas y su fundamento óptico.",
  isTheoryOnly: true,
  educationLevel: "ESO",
  levels: ['ESO']
};

export default function TeoriaInstrumentosSimples() {
  return (
    <div>
      <TheorySection title="Instrumentos simples: Lupas y lentes">
        <Concept>
          <p>
            Las lupas, lentes convergentes y otros instrumentos simples aprovechan la refracción para formar imágenes ampliadas o más nítidas de objetos próximos.
          </p>
        </Concept>

        <Concept title="Lupa (lente simple)">
          <p>
            Una lupa es una lente convergente que produce una imagen virtual ampliada cuando el objeto está dentro de la distancia focal. La magnificación depende de la distancia focal y de la posición del ojo.
          </p>
        </Concept>

        <Concept title="Microscopio simple (dos lentes)">
          <p>
            Un microscopio simple combina una lente objetiva (que forma una imagen real aumentada) y una ocular (lupa) que amplía esa imagen.
          </p>
        </Concept>

        <Concept title="Actividades">
          <ul>
            <li>Observa letras pequeñas con una lupa y mide la distancia a la que aparecen nítidas.</li>
            <li>Construye un microscopio casero con dos lentes de distinto foco para ver estructura de una hoja.</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🔍 Lupas y lectura</h3>
          <p>
            Las lupas simples (lentes convergentes) ayudan a personas con baja visión a leer textos pequeños. Una lupa de 10x (distancia focal ~25mm) amplía letras hasta 10 veces su tamaño angular, facilitando la lectura. Las lupas electrónicas modernas combinan cámara y pantalla, permitiendo magnificación hasta 50x con ajuste de contraste y color.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Microscopios en educación y biología</h3>
          <p>
            Los microscopios ópticos compuestos usan dos lentes: el objetivo (magnificación 4x-100x) forma una imagen real aumentada, y el ocular (10x-20x) actúa como lupa para observar esa imagen. Magnificación total = objetivo × ocular. Permiten ver células (~10 μm), bacterias (~1 μm) y estructuras subcelulares.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📍 Inspección de joyería y monedas</h3>
          <p>
            Joyeros y numismáticos usan lupas de joyero (10x-30x) para examinar sellos, detalles de gemas y autenticidad de monedas. Estas lupas tienen lentes acromáticas (combinan dos vidrios) para reducir aberración cromática. Algunas incluyen iluminación LED para realzar detalles en metales y piedras.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🥿 Dermatoscopios en medicina</h3>
          <p>
            Los dermatólogos usan dermatoscopios (lupas especializadas de 10x-20x con iluminación polarizada) para examinar lunares y lesiones cutáneas. La iluminación polarizada reduce reflejos de la piel, permitiendo ver estructuras subepidérmicas. Esto mejora detección temprana de melanomas y reduce biopsias innecesarias.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎭 Proyectores y retroproyectores</h3>
          <p>
            Los proyectores usan lentes convergentes para amplificar imágenes de una fuente pequeña (LCD, DLP) a una pantalla grande. La distancia focal determina el "throw ratio": lentes de corta distancia focal (gran angular) permiten proyectar imágenes grandes desde cerca; lentes de larga distancia focal requieren mayor distancia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🐜 Observación de insectos y naturaleza</h3>
          <p>
            Las lupas de campo (5x-10x) permiten observar insectos, flores y texturas sin dañar los especimenes. Los biólogos las usan para identificar especies en campo. Lupas con iluminación UV revelan patrones fluorescentes en flores (invisibles al ojo) que guían a polinizadores.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De las piedras de lectura a los microscopios
        </h2>
        
        <div className="theory-subsection">
          <h3>📚 Piedras de lectura (siglo I-Edad Media)</h3>
          <p>
            Los romanos ya usaban esferas de vidrio llenas de agua como lupas rudimentarias para leer textos. En la Edad Media, monjes utilizaban "piedras de lectura" (hemisferios de vidrio pulido) para magnificar manuscritos. Estas eran las precursoras de las lupas modernas, pero sin marco ni mango.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>👓 Primeras gafas (siglo XIII)</h3>
          <p>
            Las primeras gafas para corrección visual aparecieron en Italia (~1290), usando lentes convexas para presbicia. Aunque su propósito era corregir visión, demostraron el poder de las lentes convergentes. Los fabricantes de gafas venecianos guardaban sus técnicas como secretos comerciales celosamente protegidos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Invención del microscopio compuesto (1590)</h3>
          <p>
            Los ópticos holandeses Zacharias Janssen y su padre Hans crearon el primer microscopio compuesto, combinando dos lentes convergentes en un tubo. Aunque la calidad era pobre (aberraciones cromáticas severas), podía magnificar hasta 10x. Galileo mejoró el diseño llamando su versión "occhiolino" (ojito).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦠 Antonie van Leeuwenhoek y las "animalicula" (1670s)</h3>
          <p>
            El comerciante holandés Antonie van Leeuwenhoek creó lupas simples extremadamente potentes (~300x) puliendo lentes esféricas minúsculas (&lt;1mm de diámetro). Fue el primero en observar bacterias, espermatozoides, protozoos y glóbulos rojos. Nunca reveló su técnica de pulido, y sus mejores lupas siguen siendo misterio.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌈 Lentes acromáticas (1733)</h3>
          <p>
            Chester Moor Hall inventó las lentes acromáticas combinando vidrio crown (bajo índice) y flint (alto índice) para cancelar aberración cromática. Esto revolucionó microscopios y telescopios: las imágenes ya no tenían halos de color. El astrónomo John Dollond patentó el diseño en 1758 y lo comercializó.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🔥 La lupa puede encender fuego... pero es difícil</h3>
          <p>
            En películas, las lupas encienden fuego instantáneamente, pero en realidad se necesita: 1º lupa grande (&gt;50mm), 2º sol brillante, 3º material muy inflamable (yesca seca, papel negro), y 4º paciencia. La lupa concentra luz en un punto focal, alcanzando ~300-400°C. Los Juegos Olímpicos usan espejos parabólicos (más eficientes) para encender la antorcha.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🐜 Leeuwenhoek vio espermatozoides... por accidente</h3>
          <p>
            En 1677, Leeuwenhoek examinó semen humano con su microscopio y descubrió "animalicula" moviéndose. Su carta a la Royal Society fue inicialmente rechazada por "indecente", pero posteriormente aceptada. Hoy sabemos que observó espermatozoides (~50 μm), visibles con lupas potentes. Esto contradecía la teoría de "homonculo" (humano preformado en el esperma).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎭 Sherlock Holmes y la lupa: mito vs realidad</h3>
          <p>
            Sherlock Holmes es icónicamente representado con una lupa gigante, pero en las historias originales de Conan Doyle, casi nunca la usa. La imagen proviene de ilustraciones teatrales y cinematográficas. En realidad, los detectives victorianos usaban lupas de joyero (10x) para examinar fibras, cenizas y documentos falsificados.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📦 Amazon vendió lupas durante el eclipse solar... ¡mal!</h3>
          <p>
            Durante el eclipse solar de 2017, Amazon retiró ventas de algunas lupas porque gente preguntaba si podían usarse para ver el eclipse. ¡NUNCA uses lupas, telescopios o binoculares sin filtros solares! Concentran la luz solar ~100-1000x, quemando la retina instantáneamente y causando ceguera permanente. Solo gafas con certificación ISO 12312-2 son seguras.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 El microscopio más simple: una gota de agua</h3>
          <p>
            Una gota de agua sobre una superficie transparente actúa como lupa simple. La tensión superficial crea una lente hemisférica con distancia focal ~5mm, magnificando ~3-5x. Antonie van Leeuwenhoek probó esto antes de dominar el pulido de vidrio. Hoy, cientídicos desarrollan "microscopios de gota" de bajo costo para diagnóstico médico en países en desarrollo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>👁️ Las lupas no corrigen la visión, solo magnifican</h3>
          <p>
            Mucha gente confunde lupas con gafas de lectura. Las gafas de lectura (+1.00 a +3.50 dioptrías) corrigen presbicia modificando el enfoque del ojo; las lupas (&gt;5x) magnifican objetos sin corregir defectos visuales. Una persona con buena visión puede usar una lupa; una persona con presbicia necesita gafas de lectura (o contactos) incluso para usar una lupa.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            Las lupas son lentes convergentes que producen imágenes virtuales ampliadas de objetos cercanos.
          </li>
          <li>
            Magnificación depende de la distancia focal: lentes de foco corto (~25mm) magnifican más que las de foco largo.
          </li>
          <li>
            Funcionan cuando el objeto está dentro de la distancia focal de la lente.
          </li>
          <li>
            Microscopios compuestos combinan lente objetiva (forma imagen real aumentada) y ocular (actúa como lupa).
          </li>
          <li>
            Magnificación total del microscopio = magnificación del objetivo × magnificación del ocular.
          </li>
          <li>
            Aplicaciones: lectura, biología, joyería, medicina (dermatoscopia), educación, inspección de calidad.
          </li>
        </ul>
      </div>
    </div>
  );
}
