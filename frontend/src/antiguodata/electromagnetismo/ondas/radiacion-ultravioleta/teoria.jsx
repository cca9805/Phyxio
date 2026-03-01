import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as uvDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Radiación Ultravioleta",
  descripcion: "Efectos biológicos, aplicaciones médicas e industriales de la radiación UV",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const RadiacionUltravioletaTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Radiación Ultravioleta: Más Allá del Violeta">
        <p>
          La radiación ultravioleta (UV) abarca longitudes de onda desde 10 nm hasta 400 nm, con frecuencias de 750 THz a 30 PHz. Aunque invisible al ojo humano, la radiación UV tiene efectos profundos en la materia biológica y es fundamental en muchas aplicaciones tecnológicas e industriales.
        </p>
        <Important>
          La radiación UV transporta más energía por fotón que la luz visible, lo que le permite romper enlaces químicos y causar reacciones fotoquímicas. Esta alta energía es tanto beneficiosa (esterilización, síntesis de vitamina D) como peligrosa (daño al ADN, cáncer de piel).
        </Important>
      </TheorySection>

      <TheorySection title="Clasificación de la Radiación UV">
        <Concept title="Bandas del Ultravioleta">
          <p>La radiación UV se clasifica en tres bandas principales según sus efectos biológicos:</p>
          <ul>
            <li>UV-A (315-400 nm): "Luz negra", bronceado, envejecimiento de la piel</li>
            <li>UV-B (280-315 nm): Síntesis de vitamina D, quemaduras solares, daño al ADN</li>
            <li>UV-C (100-280 nm): Germicida, completamente absorbida por la atmósfera</li>
          </ul>
        </Concept>

        <Concept title="Energía por Banda">
          <p>La energía de los fotones UV aumenta significativamente con la frecuencia:</p>
          <Formula
            expression={String.raw`E_{UV} = \frac{hc}{\lambda}`}
            calculatorId="uv_energia_foton"
            definitions={uvDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Longitud de onda", expression: String.raw`\lambda = \frac{hc}{E}` }
            ]}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li>E_UV = Energía del fotón UV (eV)</li>
            <li>h = Constante de Planck (6.626×10⁻³⁴ J·s)</li>
            <li>c = Velocidad de la luz (3×10⁸ m/s)</li>
            <li>λ = Longitud de onda (nm)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Interacción con la Atmósfera">
        <Concept title="Absorción Atmosférica">
          <p>La atmósfera terrestre filtra selectivamente la radiación UV, protegiendo la vida en la superficie:</p>
          <ul>
            <li>Capa de ozono: Absorbe 97-99% de UV-B y toda la UV-C</li>
            <li>Vapor de agua: Absorbe parcialmente UV-A</li>
            <li>Oxígeno molecular: Absorbe UV-C de alta energía</li>
          </ul>
        </Concept>

        <Concept title="Índice UV">
          <p>El índice UV cuantifica la intensidad de la radiación UV solar que llega a la superficie terrestre.</p>
          <Formula
            expression={String.raw`\text{Índice UV} = k \int_{280}^{400} E(\lambda) \cdot S(\lambda) \, d\lambda`}
            calculatorId="uv_indice_uv"
            definitions={uvDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>Índice UV = Índice ultravioleta (adimensional)</li>
            <li>k = Constante de normalización (40 m²/W)</li>
            <li>E(λ) = Irradiancia espectral solar (W/m²/nm)</li>
            <li>S(λ) = Función de respuesta eritémica de la piel</li>
            <li>λ = Longitud de onda (nm)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Efectos Biológicos">
        <Concept title="Daño al ADN">
          <p>La radiación UV-B y UV-C puede causar daño directo al ADN formando dímeros de timina, que pueden llevar a mutaciones y cáncer.</p>
          <ul>
            <li>Dosis mínima eritémica (MED): Cantidad mínima de UV que causa enrojecimiento</li>
            <li>Factor de protección solar (SPF): Medida de protección contra UV-B</li>
            <li>Reparación del ADN: Mecanismos celulares para corregir daño UV</li>
          </ul>
        </Concept>

        <Concept title="Síntesis de Vitamina D">
          <p>La radiación UV-B (280-315 nm) es esencial para la síntesis de vitamina D en la piel humana.</p>
          <ul>
            <li>Proceso: 7-dehidrocolesterol → previtamina D₃ → vitamina D₃</li>
            <li>Longitud de onda óptima: ~295 nm</li>
            <li>Factores: Latitud, estación, hora del día, tipo de piel</li>
          </ul>
        </Concept>
      </TheorySection>



      <TheorySection title="Protección y Seguridad">
        <Concept title="Protección Personal">
          <p>La exposición excesiva a UV requiere medidas de protección:</p>
          <ul>
            <li>Protector solar: SPF indica protección contra UV-B</li>
            <li>Ropa protectora: UPF (Factor de Protección Ultravioleta)</li>
            <li>Gafas de sol: Filtros UV-A y UV-B</li>
            <li>Sombreros: Protección física directa</li>
          </ul>
        </Concept>

        <Concept title="Protección en el Trabajo">
          <p>Trabajadores expuestos a fuentes UV artificiales necesitan protección especial:</p>
          <ul>
            <li>Soldadura: Máscaras con filtros UV específicos</li>
            <li>Lámparas germicidas: Protección ocular y cutánea</li>
            <li>Laboratorios: Cabinas de seguridad UV</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Detección y Medición">
        <Concept title="Detectores UV">
          <p>La detección de radiación UV requiere materiales y técnicas especializadas:</p>
          <ul>
            <li>Fotodiodos de SiC: Sensibles a UV-C, ciegos a luz visible</li>
            <li>Tubos fotomultiplicadores: Alta sensibilidad, amplio rango espectral</li>
            <li>Detectores de diamante: Resistentes a radiación, UV-C profundo</li>
          </ul>
        </Concept>

        <Concept title="Espectroscopía UV">
          <p>La espectroscopía UV-Vis analiza la absorción de luz UV y visible por moléculas:</p>
          <ul>
            <li>Transiciones electrónicas: Promoción de electrones a niveles superiores</li>
            <li>Aplicaciones: Análisis químico, determinación de concentraciones</li>
            <li>Ley de Beer-Lambert: Relación entre absorción y concentración</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Fuentes de Radiación UV">
        <Concept title="Fuentes Naturales">
          <ul>
            <li>Sol: Principal fuente natural, espectro continuo</li>
            <li>Estrellas: Estrellas calientes emiten más UV</li>
            <li>Rayos: Descargas eléctricas atmosféricas</li>
          </ul>
        </Concept>

        <Concept title="Fuentes Artificiales">
          <ul>
            <li>Lámparas de mercurio: Líneas espectrales intensas (254 nm, 365 nm)</li>
            <li>LEDs UV: Eficientes, longitudes de onda específicas</li>
            <li>Láseres UV: Coherentes, alta intensidad, aplicaciones precisas</li>
            <li>Lámparas de xenón: Espectro continuo, simulación solar</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2><span>🔬</span> Aplicaciones Tecnológicas</h2>
        
        <div className="concepto-fundamental">
          <h4>Esterilización UV-C</h4>
          <p>La radiación UV-C a 254 nm es altamente germicida, destruyendo microorganismos al dañar irreversiblemente su ADN y ARN. Esta longitud de onda coincide con el pico de absorción de los ácidos nucleicos, maximizando la efectividad.</p>
          <p>En purificación de agua, las lámparas UV-C eliminan el 99.99% de bacterias, virus y protozoos sin agregar químicos ni alterar el sabor. En hospitales, robots UV-C desinfectan quirófanos y habitaciones entre pacientes. Durante la pandemia COVID-19, la esterilización UV-C se expandió masivamente para desinfectar mascarillas, transporte público y espacios cerrados. En la industria alimentaria, esteriliza superficies de envasado y prolonga la vida útil de productos sin afectar su calidad.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Lámparas UV para Análisis</h4>
          <p>La luz negra (UV-A a 365 nm) hace fluorescer materiales que absorben UV y reemiten luz visible. Este fenómeno es fundamental en múltiples aplicaciones de detección y análisis.</p>
          <p>En seguridad, los billetes auténticos contienen tintas fluorescentes invisibles bajo luz normal pero brillantes bajo UV. En forense, detecta fluidos corporales, huellas dactilares y evidencias en escenas del crimen. En control de calidad industrial, revela grietas y defectos en materiales mediante líquidos penetrantes fluorescentes. En geología, identifica minerales por sus patrones de fluorescencia característicos. En arte, autentica obras detectando restauraciones y falsificaciones mediante análisis de pigmentos fluorescentes.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Fotolitografía UV</h4>
          <p>La fabricación de microchips depende de la fotolitografía UV, donde luz ultravioleta de alta energía modifica químicamente fotoresinas para crear patrones microscópicos. La longitud de onda determina la resolución mínima alcanzable.</p>
          <p>La industria evolucionó desde UV-A (365 nm) en los años 1970s hasta UV-C profundo (193 nm) actual, permitiendo transistores de 5 nanómetros. La litografía UV extrema (EUV) a 13.5 nm está revolucionando la fabricación de chips de 3 nm y menores. Cada reducción de longitud de onda permite duplicar la densidad de transistores, cumpliendo la Ley de Moore. Esta tecnología también fabrica MEMS (sistemas microelectromecánicos), sensores, y dispositivos médicos implantables.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Fototerapia Médica</h4>
          <p>La radiación UV-B controlada trata enfermedades de la piel aprovechando sus efectos biológicos específicos. La fototerapia de banda estrecha (311-313 nm) es especialmente efectiva y segura.</p>
          <p>En psoriasis, la UV-B reduce la proliferación excesiva de células cutáneas, aliviando placas y picazón en el 70% de pacientes. Para vitíligo, estimula la repigmentación de áreas despigmentadas. En ictericia neonatal, la luz azul-UV descompone la bilirrubina acumulada, evitando daño cerebral. El tratamiento de eczema severo con UV-B reduce inflamación y picazón cuando otros tratamientos fallan. La terapia es ambulatoria, con sesiones de pocos minutos varias veces por semana.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Curado UV en Industria</h4>
          <p>Los recubrimientos y adhesivos fotocurables se solidifican instantáneamente bajo luz UV, revolucionando procesos industriales. Los fotoiniciadores en la fórmula absorben UV y desencadenan polimerización rápida.</p>
          <p>En impresión, las tintas UV se secan al instante, permitiendo impresión de alta velocidad sin solventes volátiles. En odontología, los composites dentales se endurecen en segundos bajo lámparas UV, permitiendo restauraciones en una sola visita. En fabricación de smartphones, los adhesivos UV unen pantallas y componentes con precisión. En recubrimientos de pisos y muebles, el curado UV crea acabados duros y resistentes sin emisiones tóxicas. El proceso ahorra energía al eliminar hornos de secado.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Espectroscopía UV-Visible</h4>
          <p>La espectroscopía UV-Vis mide cómo las moléculas absorben luz ultravioleta y visible, revelando su estructura electrónica y concentración. Cada molécula tiene un espectro de absorción característico como una huella digital.</p>
          <p>En farmacia, verifica la pureza y concentración de medicamentos en control de calidad. En bioquímica, cuantifica proteínas y ácidos nucleicos mediante absorción a 280 nm y 260 nm respectivamente. En química ambiental, detecta contaminantes orgánicos en agua a concentraciones de partes por billón. En astronomía, analiza la composición química de estrellas y galaxias mediante sus espectros UV. Los espectrofotómetros UV-Vis son equipos estándar en laboratorios por su versatilidad, rapidez y bajo costo.</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2><span>📜</span> Historia de la Radiación UV</h2>
        
        <div className="concepto-fundamental">
          <h4>El Descubrimiento de Ritter (1801)</h4>
          <p>Johann Wilhelm Ritter descubrió la radiación ultravioleta apenas un año después del descubrimiento del infrarrojo por Herschel. Inspirado por el hallazgo de Herschel, Ritter investigó si existía radiación invisible más allá del extremo violeta del espectro.</p>
          <p>Usando cloruro de plata, que se oscurece con la luz, Ritter colocó el compuesto más allá del violeta en un espectro dispersado por un prisma. El cloruro de plata se oscureció más rápidamente que en cualquier parte del espectro visible, demostrando la existencia de "rayos químicos" o "rayos deoxidantes". Este descubrimiento fue fundamental para entender que el espectro electromagnético se extendía más allá de la luz visible en ambas direcciones.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>La Capa de Ozono y el Premio Nobel</h4>
          <p>En 1913, Charles Fabry y Henri Buisson descubrieron que la atmósfera terrestre absorbe fuertemente la radiación UV por debajo de 300 nm. En 1930, Sydney Chapman propuso el mecanismo químico de formación y destrucción del ozono estratosférico.</p>
          <p>El ozono (O₃) se forma cuando la radiación UV-C rompe moléculas de oxígeno (O₂), y los átomos libres se combinan con otras moléculas de O₂. Este ozono absorbe UV-B y UV-C, protegiendo la vida en la superficie. En 1974, Mario Molina y Sherwood Rowland descubrieron que los clorofluorocarbonos (CFCs) destruyen el ozono estratosférico. Su trabajo llevó al Protocolo de Montreal (1987) que prohibió los CFCs, y les valió el Premio Nobel de Química en 1995 junto con Paul Crutzen.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Desarrollo de Lámparas Germicidas</h4>
          <p>En 1878, Arthur Downes y Thomas Blunt descubrieron que la luz solar mata bacterias. En 1903, Niels Finsen recibió el Premio Nobel de Medicina por usar luz UV concentrada para tratar lupus vulgar (tuberculosis cutánea), la primera aplicación médica de la radiación UV.</p>
          <p>En 1930, se desarrollaron las primeras lámparas de vapor de mercurio de baja presión que emiten eficientemente a 254 nm, la longitud de onda germicida óptima. Durante la Segunda Guerra Mundial, estas lámparas se instalaron masivamente en hospitales militares para reducir infecciones. En los años 1950s, se adoptaron para purificación de agua municipal. Hoy, la esterilización UV-C es estándar en tratamiento de agua, aire acondicionado de hospitales, y laboratorios de bioseguridad.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Revolución de la Fotolitografía</h4>
          <p>En 1958, Jay Lathrop y James Nall inventaron la fotolitografía para fabricar transistores, usando luz visible para transferir patrones a obleas de silicio. En los años 1970s, la industria adoptó lámparas de mercurio UV (365 nm) para mejorar la resolución.</p>
          <p>La carrera por transistores más pequeños impulsó el desarrollo de fuentes UV de menor longitud de onda. En 1990, se introdujo el láser excimer KrF (248 nm). En 2000, el láser ArF (193 nm) permitió la era de los nanómetros. En 2019, ASML lanzó la litografía UV extrema (EUV) a 13.5 nm, requiriendo espejos multicapa de precisión atómica y operación en vacío. Cada generación costó miles de millones en investigación pero permitió la revolución digital moderna.</p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span>💡</span> Curiosidades y Anécdotas</h2>
        
        <div className="concepto-fundamental">
          <h4>El Agujero de Ozono Antártico</h4>
          <p>En 1985, científicos británicos en la Antártida descubrieron una disminución dramática del ozono estratosférico cada primavera austral. El "agujero" era tan inesperado que inicialmente pensaron que sus instrumentos estaban defectuosos. Datos satelitales confirmaron el fenómeno: el ozono disminuía hasta 70% sobre la Antártida.</p>
          <p>Las condiciones únicas de la Antártida (frío extremo, vórtice polar aislado, nubes estratosféricas) aceleran la destrucción de ozono por CFCs. El descubrimiento galvanizó la acción internacional, resultando en el Protocolo de Montreal, el tratado ambiental más exitoso de la historia. Gracias a la eliminación de CFCs, el agujero de ozono está sanando y se espera su recuperación completa para 2070.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Bronceado y Vitamina D: La Paradoja UV</h4>
          <p>La radiación UV-B es simultáneamente esencial y peligrosa para la salud humana. Es la única fuente natural de vitamina D, crucial para huesos, sistema inmune y prevención de enfermedades. Sin embargo, también causa cáncer de piel, el cáncer más común en humanos.</p>
          <p>La evolución humana optimizó el color de piel según la latitud: piel oscura en el ecuador protege contra exceso de UV, mientras que piel clara en latitudes altas maximiza la síntesis de vitamina D con poca luz solar. La migración humana moderna creó desajustes: personas de piel clara en Australia tienen tasas altísimas de cáncer de piel, mientras que personas de piel oscura en países nórdicos sufren deficiencia de vitamina D. La recomendación actual es exposición solar moderada (10-15 minutos diarios) con protección en exposiciones prolongadas.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Visión UV en Animales</h4>
          <p>Muchos animales ven radiación UV que es invisible para humanos. Las abejas ven en UV para localizar néctar: las flores tienen patrones UV que actúan como "pistas de aterrizaje" invisibles para nosotros. Los pájaros usan visión UV para seleccionar pareja, ya que el plumaje refleja UV de manera que indica salud y genética.</p>
          <p>Los renos del Ártico ven en UV para detectar líquenes (su alimento) que absorben UV y aparecen oscuros contra la nieve brillante. Algunos peces ven UV para detectar plancton. Curiosamente, los humanos nacemos con capacidad de ver UV cercano, pero el cristalino del ojo lo filtra. Personas que han tenido cirugía de cataratas con lentes artificiales reportan ver UV como un color azul-violeta fantasmal.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>El Misterio de la Fluorescencia de los Escorpiones</h4>
          <p>Los escorpiones brillan intensamente en verde-azul bajo luz UV, un fenómeno descubierto accidentalmente en 1954 por científicos que usaban lámparas UV para buscar minerales en el desierto. Todos los escorpiones fluorescen, incluso fósiles de 400 millones de años.</p>
          <p>El compuesto responsable está en su exoesqueleto y persiste después de la muerte. Durante décadas, el propósito biológico fue un misterio. Investigaciones recientes sugieren que los escorpiones usan fluorescencia para detectar luz lunar: su cuerpo entero actúa como un sensor UV que les indica cuándo es seguro salir a cazar. En noches de luna llena (más UV), permanecen escondidos para evitar depredadores. Esta adaptación única convierte todo su cuerpo en un ojo primitivo para luz UV.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Billetes y Seguridad UV</h4>
          <p>La primera aplicación de seguridad UV en billetes fue en 1929 en Alemania, usando fibras fluorescentes invisibles bajo luz normal. Hoy, prácticamente todos los billetes del mundo incorporan múltiples características UV: tintas fluorescentes, fibras embebidas, marcas de agua que brillan, y patrones complejos visibles solo bajo UV.</p>
          <p>Los falsificadores inicialmente no podían replicar estas características porque las tintas fluorescentes especiales eran secretas y difíciles de obtener. Sin embargo, con el tiempo, las falsificaciones mejoraron. Los bancos centrales respondieron con características UV cada vez más sofisticadas: fluorescencia de múltiples colores, patrones que cambian bajo diferentes longitudes de onda UV, y tintas que fluorescen solo bajo UV-A pero no UV-C. La carrera armamentista entre falsificadores y fabricantes de billetes continúa.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Protector Solar: De Aceite de Oliva a Nanotecnología</h4>
          <p>Los antiguos egipcios usaban aceite de oliva y extracto de arroz como protección solar primitiva. El primer protector solar comercial fue creado en 1938 por Franz Greiter después de quemarse severamente en los Alpes. En 1944, Benjamin Green desarrolló "Red Vet Pet" para soldados en el Pacífico, una pasta roja pegajosa que evolucionó en Coppertone.</p>
          <p>El concepto de SPF (Factor de Protección Solar) se introdujo en 1962. Los primeros protectores solo bloqueaban UV-B; la protección UV-A llegó en los años 1990s. Los protectores modernos usan nanopartículas de óxido de zinc y dióxido de titanio que son transparentes pero bloquean UV eficientemente. La controversia actual gira en torno a ingredientes que dañan arrecifes de coral, llevando a Hawaii y otros lugares a prohibir ciertos protectores solares.</p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen: Radiación Ultravioleta</h3>
        <p>
          La radiación ultravioleta (10-400 nm) es invisible pero altamente energética, capaz de romper enlaces químicos y causar reacciones fotoquímicas. Se clasifica en UV-A (315-400 nm) para bronceado y fluorescencia, UV-B (280-315 nm) para síntesis de vitamina D y quemaduras, y UV-C (100-280 nm) germicida absorbida por la atmósfera.
        </p>
        <p>
          La energía de fotones UV (E = hc/λ) aumenta con frecuencia, siendo UV-C la más energética y peligrosa. La capa de ozono estratosférico absorbe 97-99% de UV-B y toda la UV-C, protegiendo la vida terrestre. El índice UV cuantifica la intensidad solar UV, guiando medidas de protección personal.
        </p>
        <p>
          Las aplicaciones tecnológicas son vastas: esterilización UV-C de agua y aire sin químicos, lámparas UV-A para detección forense y autenticación, fotolitografía UV para fabricar microchips nanométricos, fototerapia médica para enfermedades cutáneas, curado instantáneo de adhesivos y recubrimientos, y espectroscopía UV-Vis para análisis químico. La radiación UV tiene efectos biológicos duales: esencial para vitamina D pero causante de daño al ADN y cáncer de piel, requiriendo balance entre exposición beneficiosa y protección contra excesos.
        </p>
      </div>
    </>
  );
};

export default RadiacionUltravioletaTheory;