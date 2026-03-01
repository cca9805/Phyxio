import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as rayosDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Rayos X y Rayos Gamma",
  descripcion: "Radiación ionizante de alta energía, aplicaciones médicas e industriales",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const RayosXGammaTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Rayos X y Gamma: Radiación de Alta Energía">
        <p>
          Los rayos X (0.01-10 nm) y rayos gamma (&lt;0.01 nm) son formas de radiación electromagnética de muy alta energía, capaces de ionizar átomos y penetrar profundamente en la materia. Su descubrimiento revolucionó la medicina y abrió nuevos campos en la física nuclear.
        </p>
        <Important>
          Esta radiación ionizante puede causar daño biológico significativo, pero controlada adecuadamente es invaluable para diagnóstico médico, tratamiento de cáncer, esterilización industrial y análisis de materiales. La protección radiológica es fundamental en todas sus aplicaciones.
        </Important>
      </TheorySection>

      <TheorySection title="Diferencias entre Rayos X y Rayos Gamma">
        <Concept title="Origen y Características">
          <p>Aunque ambos son radiación electromagnética de alta energía, difieren en su origen:</p>
          <ul>
            <li>Rayos X: Producidos por transiciones electrónicas en átomos o desaceleración de electrones</li>
            <li>Rayos Gamma: Emitidos por núcleos atómicos en transiciones nucleares</li>
            <li>Energía típica X: 100 eV - 100 keV</li>
            <li>Energía típica γ: 10 keV - 10 MeV</li>
          </ul>
        </Concept>

        <Concept title="Unidades de Energía: eV, keV y MeV">
          <p>En física de alta energía, la energía de fotones se expresa en electronvoltios (eV) en lugar de julios, por ser más conveniente para escalas atómicas y nucleares:</p>
          <ul>
            <li>1 eV (electronvoltio) = Energía que adquiere un electrón al ser acelerado por 1 voltio</li>
            <li>1 eV = 1.602 × 10⁻¹⁹ julios (una cantidad extremadamente pequeña en escala macroscópica)</li>
            <li>1 keV (kiloelectronvoltio) = 1,000 eV = 10³ eV</li>
            <li>1 MeV (megaelectronvoltio) = 1,000,000 eV = 10⁶ eV</li>
          </ul>
          <p>Para poner en perspectiva: la luz visible tiene energías de 1.6-3.3 eV, los rayos X médicos típicamente 50-150 keV, y los rayos gamma del Cobalto-60 usado en radioterapia tienen 1.17 y 1.33 MeV. Un fotón de 1 MeV tiene más de 300,000 veces la energía de un fotón de luz verde.</p>
        </Concept>

        <Concept title="Energía de Fotones de Alta Energía">
          <p>La energía de estos fotones se expresa comúnmente en keV o MeV debido a sus altos valores.</p>
          <Formula
            expression={String.raw`E_{keV} = \frac{1.24}{\lambda_{nm}}`}
            calculatorId="rayos_energia_keV"
            definitions={rayosDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Longitud de onda", expression: String.raw`\lambda_{nm} = \frac{1.24}{E_{keV}}` }
            ]}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li>E = Energía del fotón (keV)</li>
            <li>λ = Longitud de onda (nm)</li>
            <li>1.24 = Constante simplificada (hc en keV·nm)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Producción de Rayos X">
        <Concept title="Tubo de Rayos X">
          <p>Los rayos X se producen cuando electrones acelerados chocan contra un ánodo metálico:</p>
          <ul>
            <li>Cátodo: Emite electrones por emisión termoiónica</li>
            <li>Aceleración: Alto voltaje (kV) acelera electrones</li>
            <li>Ánodo: Material pesado (tungsteno) donde impactan electrones</li>
            <li>Eficiencia: Solo ~1% se convierte en rayos X, 99% en calor</li>
          </ul>
        </Concept>

        <Concept title="Energía Máxima">
          <p>La energía máxima de los rayos X está limitada por el voltaje de aceleración:</p>
          <Formula
            expression={String.raw`E_{max} = eV_{acelerador}`}
            calculatorId="rayos_energia_maxima"
            definitions={rayosDefinitions}
            exercises={exercises}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li>E_max = Energía máxima de los rayos X (keV)</li>
            <li>e = Carga del electrón</li>
            <li>V_acelerador = Voltaje de aceleración (kV)</li>
            <li>Relación: 1 kV = 1 keV para electrones</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Interacción con la Materia">
        <Concept title="Atenuación Exponencial">
          <p>La intensidad de rayos X/gamma disminuye exponencialmente al atravesar materia:</p>
          <Formula
            expression={String.raw`I = I_0 e^{-\mu x}`}
            calculatorId="rayos_atenuacion"
            definitions={rayosDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Espesor de semiatenuación", expression: String.raw`x_{1/2} = \frac{\ln(2)}{\mu} = \frac{0.693}{\mu}` }
            ]}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li>I = Intensidad atenuada</li>
            <li>I₀ = Intensidad inicial</li>
            <li>μ = Coeficiente de atenuación lineal (cm⁻¹)</li>
            <li>x = Espesor del material (cm)</li>
            <li>e = Base del logaritmo natural (2.718...)</li>
          </ul>
        </Concept>

        <Concept title="Blindaje y Protección">
          <p>El blindaje efectivo depende del material y energía de la radiación:</p>
          <Formula
            expression={String.raw`x_{blindaje} = \frac{\ln(\text{Factor de reducción})}{\mu}`}
            calculatorId="rayos_blindaje"
            definitions={rayosDefinitions}
            exercises={exercises}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li>x_blindaje = Espesor necesario de blindaje (cm)</li>
            <li>Factor de reducción = I₀/I deseado</li>
            <li>μ = Coeficiente de atenuación del material (cm⁻¹)</li>
            <li>ln = Logaritmo natural</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Protección Radiológica">
        <Concept title="Principios ALARA">
          <p>As Low As Reasonably Achievable - Tan bajo como sea razonablemente posible:</p>
          <ul>
            <li>Tiempo: Minimizar tiempo de exposición</li>
            <li>Distancia: Ley del cuadrado inverso (I ∝ 1/r²)</li>
            <li>Blindaje: Materiales de alta densidad (plomo, tungsteno)</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2><span>🔬</span> Aplicaciones Tecnológicas</h2>
        
        <div className="concepto-fundamental">
          <h4>Radiografía Diagnóstica</h4>
          <p>La radiografía convencional es la técnica de imagen médica más utilizada mundialmente. Los rayos X atraviesan el cuerpo y diferentes tejidos los atenúan en distintos grados, creando una imagen de contraste en una placa detectora.</p>
          <p>Los huesos, ricos en calcio, atenúan fuertemente los rayos X y aparecen blancos. Los tejidos blandos atenúan moderadamente y aparecen en tonos grises. El aire en pulmones atenúa mínimamente y aparece negro. Las energías típicas son 50-70 kVp para extremidades, 70-90 kVp para tórax, y 100-120 kVp para abdomen. La radiografía dental usa 60-70 kVp con exposiciones de milisegundos. Medios de contraste como bario (para tracto digestivo) y yodo (para vasos sanguíneos) mejoran la visualización de estructuras específicas.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Tomografía Computarizada (CT)</h4>
          <p>La CT revolucionó el diagnóstico médico al proporcionar imágenes transversales tridimensionales del cuerpo. Un tubo de rayos X rota alrededor del paciente tomando cientos de proyecciones desde diferentes ángulos, que una computadora reconstruye en imágenes 3D detalladas.</p>
          <p>La CT moderna puede adquirir imágenes de todo el cuerpo en segundos, detectando tumores de pocos milímetros. La angiografía CT visualiza vasos sanguíneos con contraste yodado, diagnosticando aneurismas y bloqueos. La CT cardíaca sincronizada con el ECG captura el corazón en movimiento. Sin embargo, la dosis de radiación es 100-500 veces mayor que una radiografía simple, requiriendo justificación médica cuidadosa. Los avances en reconstrucción iterativa reducen la dosis hasta 80% manteniendo calidad de imagen.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Radioterapia Oncológica</h4>
          <p>La radioterapia usa rayos X de muy alta energía (6-25 MV) o rayos gamma para destruir células cancerosas. La radiación daña el ADN celular, siendo las células cancerosas más sensibles que las normales debido a su rápida división.</p>
          <p>Los aceleradores lineales (LINAC) modernos usan técnicas como IMRT (radioterapia de intensidad modulada) que moldea el haz de radiación para conformarse exactamente al tumor, minimizando daño a tejido sano. La radiocirugía estereotáctica (Gamma Knife, CyberKnife) entrega dosis ablativas precisas a tumores cerebrales en una sola sesión. La braquiterapia coloca fuentes radiactivas (Iridio-192, Cesio-137) directamente en o cerca del tumor. Un tratamiento típico de radioterapia externa administra 60-70 Gy en 30-35 fracciones diarias durante 6-7 semanas.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Radiografía Industrial</h4>
          <p>La radiografía industrial inspecciona la integridad interna de componentes sin destruirlos. Es crucial en industrias aeroespacial, nuclear, petroquímica y de construcción para garantizar seguridad y calidad.</p>
          <p>Inspecciona soldaduras en tuberías y estructuras detectando grietas, porosidad, inclusiones y falta de fusión invisibles externamente. En fundiciones, revela cavidades internas y defectos de colada. En la industria aeroespacial, verifica la integridad de álabes de turbina y componentes críticos. Para acero grueso (&gt;10 cm), se usan rayos gamma de Iridio-192 o Cobalto-60, o aceleradores de rayos X de varios MeV. La radiografía digital con detectores de panel plano permite inspección en tiempo real y procesamiento de imagen avanzado.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Esterilización por Radiación Gamma</h4>
          <p>La irradiación gamma con Cobalto-60 (1.17 y 1.33 MeV) esteriliza productos médicos desechables, alimentos y materiales farmacéuticos. Los rayos gamma penetran profundamente en cajas selladas, esterilizando el contenido sin abrirlas.</p>
          <p>Esteriliza jeringas, guantes, suturas, implantes y equipos médicos empaquetados, siendo el método preferido para materiales sensibles al calor. En alimentos, elimina bacterias patógenas (Salmonella, E. coli) y parásitos, extiende vida útil y previene germinación en papas y cebollas. La dosis típica es 25-50 kGy para esterilización médica y 1-10 kGy para alimentos. El proceso no hace radiactivos los productos ni altera significativamente sus propiedades. Más de 200 instalaciones de irradiación operan mundialmente, procesando miles de toneladas diarias.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Fluorescencia de Rayos X (XRF)</h4>
          <p>La XRF analiza la composición elemental de materiales sin destruirlos. Cuando rayos X inciden en una muestra, excitan átomos que emiten rayos X característicos de cada elemento, creando una "huella digital" elemental.</p>
          <p>En arqueología, identifica pigmentos en pinturas antiguas y autentifica artefactos sin dañarlos. En minería, analiza concentraciones de minerales en muestras de exploración. En control ambiental, detecta metales pesados en suelos y agua. En manufactura, verifica composición de aleaciones y recubrimientos. Los equipos portátiles XRF permiten análisis in situ en segundos, detectando elementos desde magnesio hasta uranio en concentraciones de partes por millón.</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2><span>📜</span> Historia de los Rayos X y Gamma</h2>
        
        <div className="concepto-fundamental">
          <h4>El Descubrimiento Accidental de Röntgen (1895)</h4>
          <p>Wilhelm Conrad Röntgen descubrió los rayos X el 8 de noviembre de 1895 mientras experimentaba con tubos de rayos catódicos en su laboratorio de Würzburg, Alemania. Notó que una pantalla fluorescente brillaba a varios metros del tubo, incluso cuando este estaba cubierto con cartón negro.</p>
          <p>Röntgen pasó siete semanas investigando en secreto esta "nueva clase de rayos" que llamó "rayos X" por su naturaleza desconocida. Descubrió que penetraban la mayoría de materiales pero eran bloqueados por metales y huesos. El 22 de diciembre de 1895, tomó la primera radiografía de la mano de su esposa Anna Bertha, mostrando claramente sus huesos y anillo. La imagen causó sensación mundial. Röntgen publicó su descubrimiento el 28 de diciembre y recibió el primer Premio Nobel de Física en 1901. Rechazó patentar su descubrimiento, queriendo que beneficiara a toda la humanidad.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Los Rayos Gamma y la Radiactividad</h4>
          <p>Paul Villard descubrió los rayos gamma en 1900 mientras estudiaba la radiación del radio. Observó una radiación más penetrante que los rayos alfa y beta ya conocidos. Ernest Rutherford la nombró "rayos gamma" en 1903, completando la nomenclatura griega (alfa, beta, gamma).</p>
          <p>En 1914, Rutherford y Edward Andrade demostraron que los rayos gamma eran radiación electromagnética similar a los rayos X pero de mayor energía y origen nuclear. Marie Curie y su hija Irène desarrollaron unidades móviles de rayos X durante la Primera Guerra Mundial, salvando miles de vidas al permitir localizar balas y metralla en soldados heridos. Marie Curie acuñó el término "Petites Curies" para estas unidades. Trágicamente, tanto Marie como Irène murieron de enfermedades relacionadas con exposición a radiación, antes de que se comprendieran completamente sus peligros.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Desarrollo de la Tomografía Computarizada</h4>
          <p>Godfrey Hounsfield, ingeniero de EMI, y Allan Cormack, físico sudafricano, desarrollaron independientemente la tomografía computarizada en los años 1960s. Hounsfield construyó el primer escáner CT clínico en 1971, tardando 5 minutos en adquirir datos y 2.5 horas en reconstruir una imagen.</p>
          <p>El primer paciente fue escaneado el 1 de octubre de 1971 en el Atkinson Morley Hospital de Londres, revelando un quiste cerebral. La CT revolucionó el diagnóstico neurológico, permitiendo ver el cerebro sin cirugía. Hounsfield y Cormack compartieron el Premio Nobel de Medicina en 1979. Los escáneres modernos son millones de veces más rápidos, adquiriendo imágenes de cuerpo completo en segundos. La unidad Hounsfield (HU) mide la atenuación de rayos X en CT, honrando su inventor.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Radioterapia: De Radio a Aceleradores Lineales</h4>
          <p>Apenas meses después del descubrimiento de los rayos X, médicos comenzaron a usarlos para tratar cáncer. En 1896, Emil Grubbe en Chicago trató el primer paciente con cáncer de mama usando rayos X. Marie Curie aisló el radio en 1898, y pronto se usó en braquiterapia insertando agujas de radio en tumores.</p>
          <p>En los años 1950s, el Cobalto-60 reemplazó al radio como fuente de rayos gamma para radioterapia externa, siendo más seguro y económico. Los aceleradores lineales médicos aparecieron en los años 1950s, produciendo rayos X de muy alta energía (megavoltaje) que penetran profundamente con menos daño a la piel. La radioterapia moderna usa técnicas guiadas por imagen (IGRT), adaptativas y de intensidad modulada (IMRT) que eran ciencia ficción hace décadas. Aproximadamente 50% de pacientes con cáncer reciben radioterapia como parte de su tratamiento.</p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span>💡</span> Curiosidades y Anécdotas</h2>
        
        <div className="concepto-fundamental">
          <h4>La Mano de Anna Bertha Röntgen</h4>
          <p>La primera radiografía de la historia, tomada por Röntgen de la mano de su esposa el 22 de diciembre de 1895, causó una reacción inesperada. Al ver los huesos de su propia mano, Anna Bertha exclamó "¡He visto mi muerte!" La imagen mostraba claramente los huesos de sus dedos y su anillo de bodas, creando una sensación de ver el interior del cuerpo que era perturbadora para la época.</p>
          <p>Esta radiografía se volvió icónica instantáneamente. Cuando Röntgen presentó su descubrimiento en enero de 1896, la imagen circuló por periódicos mundiales en días. Inspiró tanto fascinación científica como temor público. Algunos periódicos sensacionalistas afirmaron que los rayos X podían ver a través de la ropa, llevando a propuestas de "ropa interior a prueba de rayos X". La imagen original se conserva en el Deutsches Museum de Múnich.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Las "Chicas del Radio" y la Tragedia Olvidada</h4>
          <p>En los años 1920s, cientos de mujeres trabajaban pintando esferas de relojes con pintura luminosa de radio en fábricas de Estados Unidos. Las supervisoras les enseñaban a afilar los pinceles con los labios para lograr trazos finos, ingiriendo así radio constantemente. El radio era considerado saludable en esa época, vendiéndose en tónicos y cosméticos.</p>
          <p>Las trabajadoras comenzaron a sufrir anemia severa, fracturas espontáneas de mandíbula y cáncer. Cuando demandaron a sus empleadores, las compañías negaron responsabilidad y usaron tácticas dilatorias esperando que las mujeres murieran antes del juicio. El caso de las "Radium Girls" estableció precedentes legales cruciales sobre responsabilidad corporativa por salud ocupacional y llevó a regulaciones de seguridad radiológica. Su sacrificio involuntario salvó innumerables vidas futuras al revelar los peligros de la radiación.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>El Incidente del Cobalto-60 en México</h4>
          <p>En diciembre de 1983, ladrones robaron un camión de carga en México sin saber que transportaba una fuente de Cobalto-60 de radioterapia desechada. Abrieron el contenedor de plomo buscando objetos valiosos, exponiendo la fuente altamente radiactiva. Vendieron el metal como chatarra a un depósito que lo fundió, contaminando 5000 toneladas de acero con material radiactivo.</p>
          <p>El acero contaminado se usó en construcción de edificios y fabricación de mesas de cocina, distribuyéndose por México y Estados Unidos. Detectores de radiación en Los Álamos, Nuevo México, alertaron cuando un camión con patas de mesa pasó cerca del laboratorio. La investigación reveló la magnitud del desastre. Recuperar y descontaminar todo el material costó millones de dólares. Los ladrones sufrieron quemaduras por radiación severas. El incidente llevó a regulaciones más estrictas sobre manejo y rastreo de fuentes radiactivas.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Rayos X en el Espacio y Agujeros Negros</h4>
          <p>Los agujeros negros son invisibles en luz visible, pero brillan intensamente en rayos X. Cuando materia cae hacia un agujero negro, se calienta a millones de grados por fricción en el disco de acreción, emitiendo rayos X antes de cruzar el horizonte de eventos.</p>
          <p>El primer agujero negro confirmado, Cygnus X-1, fue descubierto en 1964 por su emisión de rayos X. Los telescopios espaciales de rayos X como Chandra y XMM-Newton han revelado miles de agujeros negros, estrellas de neutrones y remanentes de supernovas. La atmósfera terrestre absorbe completamente los rayos X cósmicos, por lo que estos telescopios deben operar en el espacio. En 2019, el Event Horizon Telescope capturó la primera imagen de un agujero negro (M87*), pero fueron observaciones de rayos X las que primero revelaron su existencia y propiedades.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>El Misterio de la Fluoroscopia de Zapatos</h4>
          <p>Entre 1920 y 1970, miles de zapaterías en Estados Unidos y Europa tenían máquinas de fluoroscopia de rayos X. Los clientes metían sus pies en la máquina y miraban a través de un visor para ver los huesos de sus pies dentro de los zapatos, supuestamente para verificar el ajuste perfecto.</p>
          <p>Estas máquinas no tenían blindaje adecuado y operaban continuamente mientras se usaban, exponiendo a clientes, vendedores y especialmente niños (que las usaban repetidamente por diversión) a dosis masivas de radiación. No había regulación ni límites de uso. Algunos vendedores desarrollaron dermatitis por radiación en las manos. El peligro se reconoció gradualmente y las máquinas fueron prohibidas en los años 1950s-1970s. Hoy son recordadas como un ejemplo clásico de tecnología mal aplicada sin considerar riesgos a largo plazo.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Röntgen y su Rechazo a la Fortuna</h4>
          <p>Wilhelm Röntgen pudo haberse vuelto inmensamente rico patentando su descubrimiento de los rayos X. Empresas y gobiernos le ofrecieron fortunas por los derechos. Sin embargo, Röntgen rechazó todas las ofertas, insistiendo en que su descubrimiento pertenecía a la humanidad y debía estar libremente disponible para beneficio médico.</p>
          <p>Donó su dinero del Premio Nobel a su universidad. Cuando murió en 1923, estaba en bancarrota debido a la hiperinflación alemana de posguerra. Su tumba en Giessen, Alemania, es simple y modesta. Irónicamente, si hubiera patentado los rayos X, habría sido uno de los hombres más ricos del mundo. Su decisión altruista permitió que la tecnología de rayos X se desarrollara y difundiera rápidamente, salvando millones de vidas. Es recordado no solo como científico brillante sino como modelo de integridad científica.</p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen: Rayos X y Rayos Gamma</h3>
        <p>
          Los rayos X (0.01-10 nm) y rayos gamma (&lt;0.01 nm) son radiación electromagnética de muy alta energía capaz de ionizar átomos. Difieren en origen: rayos X de transiciones electrónicas o frenado de electrones, rayos gamma de transiciones nucleares. Sus energías típicas son 100 eV-100 keV para rayos X y 10 keV-10 MeV para rayos gamma.
        </p>
        <p>
          La energía se relaciona con longitud de onda mediante E(keV) = 1.24/λ(nm). En tubos de rayos X, la energía máxima iguala el voltaje de aceleración (E_max = eV). La atenuación en materia sigue ley exponencial I = I₀e^(-μx), donde μ es el coeficiente de atenuación. El blindaje efectivo requiere espesor x = ln(Factor)/μ para lograr la reducción deseada.
        </p>
        <p>
          Las aplicaciones médicas incluyen radiografía diagnóstica (50-120 kVp), tomografía computarizada para imágenes 3D, y radioterapia oncológica (6-25 MV) que destruye células cancerosas. Industrialmente se usan en radiografía de soldaduras y componentes, esterilización gamma de productos médicos y alimentos, y fluorescencia de rayos X para análisis elemental. La protección radiológica sigue principios ALARA: minimizar tiempo de exposición, maximizar distancia (ley del cuadrado inverso), y usar blindaje apropiado de plomo o tungsteno. El descubrimiento de Röntgen en 1895 revolucionó la medicina, y los avances continuos en tecnología de rayos X y gamma siguen salvando vidas diariamente.
        </p>
      </div>
    </>
  );
};

export default RayosXGammaTheory;
