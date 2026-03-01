import { TheorySection, Concept, Important } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "¿Qué es la luz?",
  descripcion: "Introducción a la naturaleza de la luz como radiación electromagnética visible, su dualidad onda-partícula y sus interacciones fundamentales con la materia.",
  isTheoryOnly: true,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const QueEsLaLuzTeoria = () => {
  return (
    <>
      <TheorySection title="¿Qué es la luz?">
        <p>
          La luz es una forma de energía que se manifiesta como radiación electromagnética visible para el ojo humano. Es fundamental para la vida en la Tierra, ya que permite la visión, la fotosíntesis y la transmisión de información a través de señales ópticas.
        </p>
        <p>
          La luz se propaga en línea recta y puede viajar a través del vacío, a diferencia del sonido, que necesita un medio material. Su velocidad en el vacío es de aproximadamente 300.000 km/s.
        </p>
        <p>
          Históricamente, la luz ha sido estudiada desde diferentes perspectivas: como partículas (teoría corpuscular), como ondas (teoría ondulatoria) y, actualmente, como una combinación de ambas (teoría cuántica). Esta dualidad onda-partícula es una de las características más fascinantes de la luz.
        </p>
        <p>
          La luz puede interactuar con la materia de diversas formas: puede reflejarse, refractarse, dispersarse, absorberse y transmitirse. Estas interacciones explican fenómenos cotidianos como el arcoíris, los espejos, las lentes y los colores que percibimos.
        </p>
        <p>
          Además de la luz visible, existen otras formas de radiación electromagnética como los rayos ultravioleta, infrarrojos, microondas y rayos X, que no son perceptibles por el ojo humano pero tienen aplicaciones científicas y tecnológicas muy importantes.
        </p>
        <p>
          En resumen, la luz es esencial para comprender el mundo que nos rodea y para el desarrollo de la ciencia y la tecnología. Su estudio nos permite entender desde el funcionamiento de nuestros ojos hasta el diseño de instrumentos ópticos avanzados.
        </p>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>📡 Comunicación y tecnología</h3>
          <p>
            La fibra óptica transmite Internet de alta velocidad guiando luz a través de cables de vidrio ultrapuros. Las pantallas LED y OLED controlan millones de puntos de luz para crear imágenes a color. Los códigos de barras y lectores ópticos usan reflexión de luz para leer información instantáneamente en supermercados y almacenes.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚕️ Salud y ciencia</h3>
          <p>
            Los láseres médicos permiten cirugías mínimamente invasivas con precisión milimétrica. La fototerapia trata enfermedades de la piel usando luz controlada. Los microscopios ópticos revolucionaron la biología al permitir observar células y microorganismos. La espectroscopía identifica sustancias químicas analizando cómo absorben o emiten luz.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De corpúsculos a cuantos
        </h2>
        
        <div className="theory-subsection">
          <h3>🔬 Newton vs Huygens (siglo XVII)</h3>
          <p>
            Isaac Newton propuso en 1704 que la luz estaba formada por corpúsculos (partículas diminutas) que viajaban en línea recta. Christiaan Huygens defendió en 1690 que la luz era una onda que se propagaba por el éter. Ambas teorías explicaban reflexión y refracción, pero diferían en predicciones sobre difracción e interferencia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ Maxwell unifica luz y electromagnetismo (1865)</h3>
          <p>
            James Clerk Maxwell demostró matemáticamente que la luz es una onda electromagnética que viaja a 300,000 km/s. Sus ecuaciones unificaron electricidad, magnetismo y óptica en una sola teoría. Predijo correctamente la existencia de ondas de radio, microondas y rayos X antes de ser descubiertas experimentalmente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>✨ Einstein y el fotón (1905)</h3>
          <p>
            Albert Einstein explicó el efecto fotoeléctrico proponiendo que la luz está compuesta por cuantos de energía llamados fotones. Esta idea revolucionaria resolvió contradicciones que la teoría ondulatoria no podía explicar. Consolidó la dualidad onda-partícula: la luz se comporta como onda al propagarse y como partícula al interactuar con materia.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>⏱️ Vivimos en el pasado lumínico</h3>
          <p>
            La luz del Sol tarda 8 minutos y 20 segundos en recorrer los 150 millones de kilómetros hasta la Tierra. Cuando miras al Sol (¡nunca directamente!), lo ves como era hace 8 minutos. La luz de la estrella más cercana, Próxima Centauri, tarda 4.2 años en llegarnos. Ver galaxias lejanas es literalmente observar el pasado del universo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 El límite cósmico de velocidad</h3>
          <p>
            Nada puede viajar más rápido que la luz en el vacío: 299,792,458 m/s exactos. Esta velocidad es tan fundamental que se usa para definir el metro. Si pudieras viajar a la velocidad de la luz, darías 7.5 vueltas a la Tierra en un solo segundo. La teoría de la relatividad de Einstein demostró que alcanzar esta velocidad requeriría energía infinita para objetos con masa.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌈 Colores que no existen</h3>
          <p>
            El magenta no existe como longitud de onda única en el espectro electromagnético. Es una invención de nuestro cerebro para representar la mezcla de rojo y azul. Nuestros ojos solo tienen receptores para tres colores (RGB), pero percibimos millones de tonalidades gracias al procesamiento cerebral. Algunos animales como las aves ven colores ultravioleta que nosotros ni siquiera podemos imaginar.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            La luz es radiación electromagnética visible que se propaga en línea recta a 300,000 km/s en el vacío.
          </li>
          <li>
            Presenta dualidad onda-partícula: se comporta como onda al propagarse y como partícula (fotón) al interactuar.
          </li>
          <li>
            Interactúa con la materia mediante reflexión, refracción, dispersión, absorción y transmisión.
          </li>
          <li>
            Historia: Newton (corpúsculos) → Huygens (ondas) → Maxwell (electromagnética) → Einstein (fotones).
          </li>
          <li>
            Aplicaciones: fibra óptica, pantallas LED, láseres médicos, microscopía, espectroscopía.
          </li>
          <li>
            Curiosidad: Ver el cielo es observar el pasado del universo debido al tiempo de viaje de la luz.
          </li>
        </ul>
      </div>
    </>
  );
};

export default QueEsLaLuzTeoria;
