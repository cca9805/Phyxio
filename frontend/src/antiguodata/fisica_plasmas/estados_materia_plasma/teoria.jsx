import { TheorySection, Concept, Formula, Important, Example } from '../../../components/TheoryV2';
import { definitions as estadosPlasmaDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Estados de la Materia - Plasma",
  descripcion: "El cuarto estado de la materia: características y propiedades",
  isTheoryOnly: false,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

const EstadosPlasmaTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es el Plasma?">
        <p>
          El plasma es el cuarto estado de la materia, después del sólido, líquido y gaseoso. Se forma cuando un gas se calienta a temperaturas tan altas que los electrones se separan de los núcleos atómicos, creando un gas ionizado de partículas cargadas.
        </p>
        <p>
          El plasma es el estado más abundante de la materia visible en el universo, constituyendo más del 99% de toda la materia observable, incluyendo las estrellas, el medio interestelar y las auroras.
        </p>
      </TheorySection>

      <TheorySection title="Características del Plasma">
        <Concept title="Propiedades Fundamentales">
          <ul>
            <li>Conductividad eléctrica: Alta conductividad debido a las cargas libres</li>
            <li>Respuesta a campos magnéticos: Fuerte interacción con campos electromagnéticos</li>
            <li>Cuasineutralidad: Densidad de cargas positivas ≈ densidad de cargas negativas</li>
            <li>Comportamiento colectivo: Las partículas interactúan a largas distancias</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Temperatura y Energía del Plasma">
        <p>
          La temperatura del plasma se relaciona directamente con la energía cinética promedio de las partículas:
        </p>
        
        <Concept title="Energía Térmica">
          <Formula 
            expression={String.raw`E = \frac{3}{2}k_B T`}
            calculatorId="plasma-temperatura"
            definitions={estadosPlasmaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Temperatura desde energía", expression: String.raw`T = \frac{2E}{3k_B}` },
              { description: "Energía en eV", expression: String.raw`E(eV) = \frac{E(J)}{e}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>E = Energía térmica promedio por partícula (J)</li>
            <li>k_B = Constante de Boltzmann (1.38×10⁻²³ J/K)</li>
            <li>T = Temperatura absoluta (K)</li>
            <li>e = Carga elemental (1.60×10⁻¹⁹ C)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Densidad del Plasma">
        <p>
          La densidad del plasma se caracteriza por el número de partículas por unidad de volumen:
        </p>
        
        <Concept title="Densidad Numérica">
          <Formula 
            expression={String.raw`n = \frac{N}{V}`}
            calculatorId="plasma-densidad"
            definitions={estadosPlasmaDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>n = Densidad numérica (partículas/m³)</li>
            <li>N = Número total de partículas</li>
            <li>V = Volumen (m³)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Frecuencia de Plasma">
        <p>
          La frecuencia de plasma es una característica fundamental que describe las oscilaciones colectivas de los electrones:
        </p>
        
        <Concept title="Oscilaciones del Plasma">
          <Formula 
            expression={String.raw`\omega_p = \sqrt{\frac{ne^2}{\varepsilon_0 m_e}}`}
            calculatorId="plasma-frecuencia"
            definitions={estadosPlasmaDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>ω_p = Frecuencia angular de plasma (rad/s)</li>
            <li>n = Densidad electrónica (m⁻³)</li>
            <li>e = Carga elemental (1.602×10⁻¹⁹ C)</li>
            <li>ε₀ = Permitividad del vacío (8.85×10⁻¹² F/m)</li>
            <li>m_e = Masa del electrón (9.11×10⁻³¹ kg)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Tipos de Plasma">
        <Concept title="Clasificación por Temperatura">
          <ul>
            <li>Plasma frío: T &lt; 10⁴ K (descargas eléctricas, fluorescentes)</li>
            <li>Plasma tibio: 10⁴ K &lt; T &lt; 10⁶ K (ionosfera, auroras)</li>
            <li>Plasma caliente: T &gt; 10⁶ K (interior estelar, fusión nuclear)</li>
          </ul>
        </Concept>
        
        <Concept title="Clasificación por Densidad">
          <ul>
            <li>Plasma de baja densidad: n &lt; 10¹⁶ m⁻³ (espacio interestelar)</li>
            <li>Plasma de densidad media: 10¹⁶ &lt; n &lt; 10²² m⁻³ (ionosfera)</li>
            <li>Plasma de alta densidad: n &gt; 10²² m⁻³ (descargas, fusión)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Condiciones para la Formación de Plasma">
        <Important>
          <p>Para que se forme plasma se requieren dos condiciones principales:</p>
          <ul>
            <li>Ionización suficiente: Energía térmica mayor que la energía de ionización</li>
            <li>Criterio de Debye: El sistema debe ser lo suficientemente grande comparado con la longitud de Debye</li>
          </ul>
        </Important>
      </TheorySection>

      <TheorySection title="Ejemplos en la Naturaleza">
        <ul>
          <li>Sol y estrellas: Plasma de fusión nuclear (T ~ 10⁷ K)</li>
          <li>Viento solar: Plasma de baja densidad en el espacio</li>
          <li>Ionosfera terrestre: Plasma atmosférico (50-1000 km de altitud)</li>
          <li>Auroras boreales: Interacción del viento solar con la magnetosfera</li>
          <li>Rayos: Plasma transitorio en descargas eléctricas</li>
          <li>Nebulosas: Plasma interestelar ionizado por radiación estelar</li>
        </ul>
      </TheorySection>

      <div className="theory-applications-section">
        <h2><span>🔬</span> Aplicaciones del Plasma</h2>
        
        <div className="theory-subsection">
          <h4>Lámparas Fluorescentes y de Descarga</h4>
          <p>Las lámparas fluorescentes contienen plasma de mercurio a baja presión (0.8 Pa) que emite principalmente luz ultravioleta a 254 nm cuando se excita eléctricamente. Esta radiación UV es invisible, pero excita un recubrimiento de fósforo en las paredes del tubo que convierte la UV en luz visible.</p>
          <p>La eficiencia luminosa es 4-5 veces mayor que las lámparas incandescentes porque no desperdician energía en calor infrarrojo. Las lámparas de sodio de alta presión (alumbrado público) producen luz amarilla característica a 589 nm con eficiencias de 100-150 lm/W. Las lámparas de xenón de alta intensidad (proyectores de cine, faros automotrices) generan plasma a 30 atmósferas y 6000 K, produciendo luz blanca similar al Sol. El plasma en estas lámparas tiene densidades de 10²¹-10²³ m⁻³ y temperaturas de 5,000-10,000 K.</p>
        </div>

        <div className="theory-subsection">
          <h4>Propulsión Espacial con Plasma</h4>
          <p>Los motores iónicos ionizan xenón mediante bombardeo electrónico, creando plasma. Rejillas electrostáticas aceleran los iones positivos a velocidades de 30-40 km/s, generando empuje. Aunque el empuje es bajo (90-200 mN), el impulso específico es 10 veces mayor que cohetes químicos.</p>
          <p>La sonda Dawn de NASA operó motores iónicos durante 5.9 años acumulados, logrando 11 km/s de cambio de velocidad total, imposible con propulsión química. Los motores Hall (usados en satélites Starlink) aceleran plasma completo usando campos magnéticos cruzados, logrando empujes de 50-500 mN con impulsos específicos de 1,500-3,000 s. Los motores VASIMR calientan plasma con ondas de radiofrecuencia a millones de grados, expandiéndolo magnéticamente para generar empuje variable. El plasma en estos motores tiene densidades de 10¹⁷-10¹⁹ m⁻³ y temperaturas electrónicas de 3-10 eV.</p>
        </div>

        <div className="theory-subsection">
          <h4>Procesamiento de Semiconductores</h4>
          <p>El grabado por plasma (plasma etching) es fundamental en la fabricación de microchips. Plasmas de gases reactivos como CF₄, SF₆ o Cl₂ a presiones de 1-100 Pa atacan químicamente el silicio mientras iones bombardean físicamente la superficie, logrando grabado anisotrópico vertical con resoluciones nanométricas.</p>
          <p>La deposición química de vapor asistida por plasma (PECVD) deposita capas dieléctricas (SiO₂, Si₃N₄) y conductoras a temperaturas de 200-400°C, mucho menores que CVD térmico (800-1000°C), protegiendo estructuras sensibles. El sputtering por plasma deposita metales (Al, Cu, W) bombardeando un blanco con iones de argón, arrancando átomos que se depositan en la oblea. Intel, TSMC y Samsung procesan millones de obleas anualmente usando cientos de pasos de plasma. El plasma en estos procesos tiene densidades de 10¹⁶-10¹⁸ m⁻³ y temperaturas electrónicas de 2-5 eV, mientras los iones permanecen fríos (0.03-0.1 eV).</p>
        </div>

        <div className="theory-subsection">
          <h4>Fusión Nuclear Controlada</h4>
          <p>Los reactores de fusión buscan confinar plasma de deuterio-tritio a 100-150 millones de kelvin (10-15 keV) con densidades de 10²⁰ m⁻³ durante segundos, cumpliendo el criterio de Lawson (nτ &gt; 10²⁰ s/m³) para fusión neta.</p>
          <p>El tokamak ITER usará campos magnéticos toroidales de 5.3 Tesla para confinar 840 m³ de plasma, buscando producir 500 MW de potencia de fusión con 50 MW de entrada (Q=10). El confinamiento magnético enfrenta inestabilidades como disrupciones (colapso súbito del plasma) y modos localizados en el borde (ELMs) que expulsan energía violentamente. El confinamiento inercial en NIF comprime una cápsula de combustible con 192 láseres entregando 2.05 MJ, logrando ignición en 2022 con 3.15 MJ de salida. El plasma de fusión alcanza densidades de 10³¹ m⁻³ (100 veces el plomo) durante nanosegundos.</p>
        </div>

        <div className="theory-subsection">
          <h4>Tratamiento de Superficies</h4>
          <p>El plasma atmosférico frío (CAP) opera a temperatura ambiente pero contiene especies reactivas (radicales OH, O, átomos excitados) que modifican superficies sin dañar el material base. La limpieza por plasma remueve contaminantes orgánicos de obleas de silicio antes de fotolitografía, crítico para rendimiento de chips.</p>
          <p>La activación por plasma bombardea polímeros (polipropileno, polietileno) con iones de oxígeno, creando grupos funcionales polares (-OH, -COOH) que mejoran adhesión de tintas y pegamentos 10 veces. La industria automotriz trata parachoques plásticos antes de pintar. Los recubrimientos DLC (diamond-like carbon) por plasma depositan carbono amorfo duro en herramientas de corte y implantes médicos, reduciendo fricción y desgaste. El plasma de barrera dieléctrica (DBD) opera a presión atmosférica generando microdescargas de nanosegundos, usado en esterilización médica y tratamiento de textiles.</p>
        </div>

        <div className="theory-subsection">
          <h4>Medicina con Plasma</h4>
          <p>El plasma atmosférico frío (CAP) mata bacterias, virus y células cancerosas mediante especies reactivas de oxígeno y nitrógeno, sin dañar tejidos sanos. En esterilización, el plasma de peróxido de hidrógeno (sistema Sterrad) esteriliza instrumentos quirúrgicos en 45 minutos a temperatura ambiente, ideal para endoscopios y dispositivos electrónicos.</p>
          <p>En oncología, estudios clínicos muestran que CAP induce apoptosis en células cancerosas selectivamente, tratando melanomas y tumores orales tópicamente. En cicatrización de heridas, CAP acelera la curación eliminando bacterias resistentes a antibióticos (MRSA) y estimulando proliferación celular. Hospitales en Alemania y Japón usan dispositivos CAP portátiles para tratar úlceras diabéticas crónicas. Los bisturíes de plasma (argón plasma coagulation) cortan tejido y coagulan simultáneamente, minimizando sangrado en cirugía gastrointestinal y neurocirugía.</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2><span>📜</span> Historia del Plasma</h2>
        
        <div className="theory-subsection">
          <h4>El Descubrimiento del Cuarto Estado (1879)</h4>
          <p>William Crookes investigó descargas eléctricas en tubos de vidrio evacuados en los años 1870s, observando un resplandor misterioso que llamó "materia radiante". En 1879, propuso que este fenómeno representaba un cuarto estado de la materia, distinto de sólido, líquido y gas.</p>
          <p>Sin embargo, el término "plasma" fue acuñado por Irving Langmuir en 1928 mientras estudiaba descargas eléctricas en General Electric. Langmuir notó que el gas ionizado se comportaba como un fluido que fluía alrededor de electrodos, recordándole al plasma sanguíneo. El nombre pegó, aunque no tiene relación con plasma biológico. Langmuir desarrolló la teoría de sondas electrostáticas para medir densidad y temperatura de plasma, herramientas aún usadas hoy. Recibió el Premio Nobel de Química en 1932 por su trabajo en química de superficies, que incluía estudios de plasma.</p>
        </div>

        <div className="theory-subsection">
          <h4>Fusión Nuclear y la Bomba H (1950s)</h4>
          <p>El Proyecto Manhattan desarrolló la bomba atómica de fisión en 1945, pero Edward Teller y Stanislaw Ulam propusieron una bomba de fusión termonuclear (bomba H) que sería mil veces más potente. La primera prueba exitosa, Ivy Mike en 1952, vaporizó la isla Elugelab en el Pacífico, liberando 10.4 megatones.</p>
          <p>La bomba H crea plasma a 100 millones de kelvin mediante una bomba de fisión primaria, iniciando fusión de deuterio-tritio. Este éxito demostró que la fusión era posible, inspirando esfuerzos para lograr fusión controlada para energía. En 1951, Lyman Spitzer propuso el stellarator, el primer diseño de reactor de fusión magnética. Los soviéticos desarrollaron el tokamak en los años 1950s, que demostró ser más efectivo. La carrera por fusión controlada continúa 70 años después, con ITER representando la culminación de décadas de investigación internacional.</p>
        </div>

        <div className="theory-subsection">
          <h4>Plasma en el Espacio (1950s-1960s)</h4>
          <p>En 1958, el Explorer 1 de Estados Unidos descubrió los cinturones de radiación de Van Allen, regiones de plasma atrapado por el campo magnético terrestre. Este descubrimiento reveló que el espacio cercano a la Tierra está lleno de plasma, no vacío como se pensaba.</p>
          <p>En 1959, la sonda soviética Luna 1 detectó el viento solar, un flujo continuo de plasma del Sol que llena el sistema solar. Hannes Alfvén desarrolló la magnetohidrodinámica (MHD) para describir el comportamiento del plasma en campos magnéticos, recibiendo el Premio Nobel de Física en 1970. Los estudios espaciales revelaron que el 99% del universo visible es plasma: estrellas, nebulosas, medio interestelar, jets de agujeros negros. La física de plasmas pasó de curiosidad de laboratorio a ciencia fundamental del cosmos.</p>
        </div>

        <div className="theory-subsection">
          <h4>Revolución de Semiconductores (1970s-1980s)</h4>
          <p>En 1965, John Coburn y Harold Winters de IBM descubrieron que el plasma podía grabar silicio selectivamente, revolucionando la fabricación de semiconductores. El grabado químico húmedo era isotrópico y limitaba la miniaturización a ~10 μm.</p>
          <p>El grabado por plasma permitía patrones verticales con resolución micrométrica, habilitando la Ley de Moore. En 1979, el grabado reactivo por iones (RIE) combinó bombardeo físico y ataque químico, logrando anisotropía perfecta. Applied Materials, Lam Research y Tokyo Electron comercializaron equipos de plasma que se volvieron estándar en fabricación de chips. Sin plasma, los transistores no habrían pasado de 10 μm en 1970 a 5 nm en 2020, un factor de 2000. Los smartphones, internet y la revolución digital son posibles gracias al plasma.</p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span>💡</span> Curiosidades y Anécdotas</h2>
        
        <div className="theory-subsection">
          <h4>El 99% del Universo es Plasma</h4>
          <p>Aunque el plasma es raro en la Tierra (solo en rayos, auroras y tecnología), es el estado dominante del universo. Todas las estrellas son esferas de plasma de fusión nuclear. El medio interestelar, el espacio entre estrellas, es plasma ionizado por radiación estelar. Los jets de agujeros negros son plasma acelerado a velocidades relativistas.</p>
          <p>Irónicamente, los humanos evolucionamos en el 1% del universo donde el plasma es raro (superficies planetarias), por lo que nos parece exótico. Para un observador cósmico, los sólidos, líquidos y gases serían los estados raros y extraños. El plasma es el estado "normal" del universo, y nosotros vivimos en una burbuja fría y densa donde la materia se condensa en formas inusuales.</p>
        </div>

        <div className="theory-subsection">
          <h4>Auroras: Plasma Natural en la Tierra</h4>
          <p>Las auroras boreales y australes son uno de los pocos plasmas naturales visibles en la Tierra. Ocurren cuando el viento solar (plasma del Sol) choca con la magnetosfera terrestre, canalizándose hacia los polos magnéticos. Electrones energéticos (1-10 keV) colisionan con oxígeno y nitrógeno en la atmósfera superior (100-400 km), ionizándolos y creando plasma.</p>
          <p>El oxígeno emite luz verde a 557.7 nm (la aurora más común) y roja a 630 nm (auroras altas). El nitrógeno emite azul y púrpura. Las auroras más intensas ocurren durante tormentas solares cuando eyecciones de masa coronal golpean la Tierra. En 1859, la tormenta Carrington creó auroras visibles en el Caribe y Cuba, y telégrafos funcionaron sin baterías por corrientes inducidas. Una tormenta similar hoy colapsaría redes eléctricas y satélites, causando billones en daños.</p>
        </div>

        <div className="theory-subsection">
          <h4>Rayos: Plasma de 30,000 Kelvin</h4>
          <p>Un rayo típico transporta 30,000 amperes y calienta el aire a 30,000 K, cinco veces la temperatura del Sol. Esta temperatura extrema ioniza completamente el aire, creando un canal de plasma de 2-3 cm de diámetro. El plasma se expande supersónicamente, generando la onda de choque que oímos como trueno.</p>
          <p>Los rayos producen óxidos de nitrógeno que fertilizan el suelo, fijando nitrógeno atmosférico. Cada año, 1.4 mil millones de rayos golpean la Tierra, produciendo 5 millones de toneladas de fertilizante natural. Los rayos volcánicos ocurren cuando ceniza cargada en erupciones crea plasma, un espectáculo aterrador. Los rayos en Júpiter son 1000 veces más potentes que en la Tierra, con canales de plasma de kilómetros de diámetro. El plasma de rayos dura microsegundos, pero alcanza las temperaturas más altas naturales en la Tierra.</p>
        </div>

        <div className="theory-subsection">
          <h4>El Tokamak Soviético que Cambió Todo</h4>
          <p>En los años 1950s-1960s, Estados Unidos y la Unión Soviética competían por lograr fusión controlada. Los diseños estadounidenses (stellarators) lograban confinamiento pobre. En 1968, científicos soviéticos del Instituto Kurchatov reportaron temperaturas de plasma de 10 millones de kelvin en su tokamak T-3, 10 veces mejores que diseños occidentales.</p>
          <p>Los científicos occidentales eran escépticos, sospechando propaganda de Guerra Fría. En 1969, un equipo británico visitó Moscú con equipos de diagnóstico láser para verificar independientemente. Los resultados soviéticos eran reales. Este descubrimiento cambió la investigación de fusión mundial: todos abandonaron otros diseños y adoptaron tokamaks. La colaboración científica trascendió la Guerra Fría. ITER es un tokamak basado en diseños soviéticos, con Rusia como socio fundador. El T-3 demostró que la cooperación científica puede superar rivalidades políticas.</p>
        </div>

        <div className="theory-subsection">
          <h4>Plasma en tu Bolsillo</h4>
          <p>Aunque parezca exótico, interactúas con plasma diariamente. Las lámparas fluorescentes en oficinas y hogares contienen plasma de mercurio. Las pantallas de plasma (aunque obsoletas) tenían millones de celdas microscópicas de plasma. Los letreros de neón son tubos de plasma de neón o argón.</p>
          <p>Si soldaste algo, usaste plasma de argón a 20,000 K. Si volaste en avión, los motores iónicos de satélites que proporcionan GPS usan plasma de xenón. Si usas smartphone, los chips fueron fabricados con cientos de pasos de grabado y deposición por plasma. El tratamiento de plasma hace que la tinta se adhiera a envases plásticos de alimentos. El plasma está tan integrado en tecnología moderna que es invisible, pero fundamental para la civilización del siglo XXI.</p>
        </div>

        <div className="theory-subsection">
          <h4>El Sueño de la Fusión: 50 Años de "30 Años Más"</h4>
          <p>Desde los años 1950s, los científicos han predicho que la fusión nuclear controlada está "30 años en el futuro". En 1976, un científico bromeó que la fusión siempre estará 30 años en el futuro porque el financiamiento es insuficiente. Esta broma se volvió realidad: el progreso en fusión correlaciona directamente con inversión.</p>
          <p>En 1976, un estudio del DOE estadounidense proyectó que con financiamiento agresivo, fusión comercial llegaría en 1990. Con financiamiento moderado, en 2005. Con financiamiento mínimo (lo que ocurrió), nunca. ITER, iniciado en 1985, se retrasó décadas por disputas políticas y recortes presupuestarios. Su costo se disparó de $5 mil millones a $25 mil millones. Sin embargo, en 2022, NIF logró ignición por primera vez, demostrando que fusión neta es posible. Empresas privadas como Commonwealth Fusion Systems recaudan miles de millones, acelerando el progreso. Quizás la fusión finalmente llegue en... 30 años.</p>
        </div>
      </div>

      <TheorySection className="theory-summary-section">
        <h2>
          <span role="img" aria-label="resumen">
            📝
          </span>{" "}
          Resumen
        </h2>
        <p>
          El plasma es el cuarto estado de la materia, formado cuando un gas se ioniza separando electrones de núcleos, creando un gas de partículas cargadas. Es el estado más abundante del universo (99% de materia visible), incluyendo estrellas, medio interestelar y auroras. Sus propiedades fundamentales son alta conductividad eléctrica, respuesta a campos magnéticos, cuasineutralidad (cargas positivas ≈ negativas) y comportamiento colectivo de partículas.
        </p>
        <p>
          La energía térmica se relaciona con temperatura mediante E = (3/2)k_BT, donde k_B = 1.38×10⁻²³ J/K. La densidad numérica n = N/V caracteriza partículas por volumen. La frecuencia de plasma ω_p = √(ne²/ε₀m_e) describe oscilaciones colectivas de electrones. El plasma se clasifica por temperatura (frío &lt;10⁴ K, tibio 10⁴-10⁶ K, caliente &gt;10⁶ K) y densidad (baja &lt;10¹⁶ m⁻³, media 10¹⁶-10²² m⁻³, alta &gt;10²² m⁻³).
        </p>
        <p>
          Las aplicaciones tecnológicas incluyen lámparas fluorescentes (plasma de mercurio a 10,000 K), propulsión espacial con motores iónicos (impulso específico 3,000-10,000 s), procesamiento de semiconductores mediante grabado y deposición por plasma (resoluciones nanométricas), fusión nuclear buscando confinar plasma a 100-150 millones de kelvin cumpliendo el criterio de Lawson (nτ &gt; 10²⁰ s/m³), tratamiento de superficies para limpieza y activación, y medicina con plasma frío para esterilización y cicatrización. Ejemplos naturales incluyen el Sol (fusión nuclear), viento solar, ionosfera terrestre (50-1000 km altitud), auroras (interacción magnetosférica), rayos (descargas a 30,000 K) y nebulosas (plasma interestelar). El plasma es fundamental tanto en el cosmos como en tecnología moderna, desde la fabricación de chips hasta la búsqueda de energía de fusión limpia e ilimitada.
        </p>
      </TheorySection>
    </>
  );
};

export default EstadosPlasmaTheory;
