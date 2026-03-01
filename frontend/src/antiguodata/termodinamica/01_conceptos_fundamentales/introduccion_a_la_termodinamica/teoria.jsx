import { TheorySection, Concept } from '../../../../components/TheoryV2';
import { theoreticalConcepts } from './definitions.js';

export const metadata = {
  titulo: "Introducción a la Termodinámica",
  descripcion: "Fundamentos históricos, conceptuales y epistemológicos de la termodinámica como ciencia",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO'],
  isTheoryOnly: true
};

const IntroduccionALaTermodinamicaTheory = () => {
  return (
    <>
      <TheorySection title="Introducción" variant="theoretical">
        <div className="theory-only-intro">
          <p className="theory-description">
            {theoreticalConcepts.mainTopic} es un área fundamental de la termodinámica que 
            abarca {theoreticalConcepts.description.toLowerCase()}. Este subtema desarrolla los conceptos 
            teóricos esenciales para la comprensión profunda de los principios termodinámicos.
          </p>
          <div className="main-concept-highlight">
            <h4>💡 Concepto Principal:</h4>
            <p className="main-concept">{theoreticalConcepts.mainConcept}</p>
          </div>
        </div>
      </TheorySection>

      
      <TheorySection title="Definición y Alcance" variant="theoretical">
        <Concept title="Definición y Alcance" variant="detailed">
          <div className="detailed-content">
            
          <p>La termodinámica (del griego θερμός, thermós: 'caliente' y δύναμις, dýnamis: 'fuerza') es una rama fundamental de la física que estudia los fenómenos relacionados con el calor, el trabajo y la energía. Esta disciplina se ocupa de describir los estados de equilibrio a escala macroscópica y los procesos de intercambio de energía entre sistemas.</p>
          
          <p>El alcance de la termodinámica abarca:</p>
          <ul>
            <li>Sistemas macroscópicos: Estudia sistemas con un gran número de partículas (≈10²³)</li>
            <li>Propiedades emergentes: Se enfoca en propiedades que surgen del comportamiento colectivo</li>
            <li>Estados de equilibrio: Describe sistemas en equilibrio térmico, mecánico y químico</li>
            <li>Procesos de transformación: Analiza cómo los sistemas evolucionan entre estados</li>
          </ul>
        
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Desarrollo Histórico" variant="theoretical">
        <Concept title="Desarrollo Histórico" variant="detailed">
          <div className="detailed-content">
            
          <p>La termodinámica se desarrolló durante los siglos XVIII y XIX, impulsada por la revolución industrial y la necesidad de optimizar las máquinas térmicas:</p>
          
          <div class="timeline">
            <div class="timeline-item">
              <h4>1760-1840: Fundamentos Empíricos</h4>
              <ul>
                <li>Joseph Black (1728-1799): Conceptos de calor específico y calor latente</li>
                <li>Benjamin Thompson (Conde Rumford, 1753-1814): Demostró la equivalencia entre trabajo mecánico y calor</li>
                <li>Sadi Carnot (1796-1832): "Reflexiones sobre la potencia motriz del fuego" (1824) - Fundamentos del ciclo de Carnot</li>
              </ul>
            </div>
            
            <div class="timeline-item">
              <h4>1840-1870: Formulación de las Leyes</h4>
              <ul>
                <li>James Prescott Joule (1818-1889): Equivalente mecánico del calor, Primera Ley</li>
                <li>Rudolf Clausius (1822-1888): Formulación de la Segunda Ley, concepto de entropía</li>
                <li>William Thomson (Lord Kelvin, 1824-1907): Escala absoluta de temperatura, enunciado de Kelvin-Planck</li>
              </ul>
            </div>
            
            <div class="timeline-item">
              <h4>1870-1900: Consolidación Teórica</h4>
              <ul>
                <li>Josiah Willard Gibbs (1839-1903): Termodinámica química, potenciales termodinámicos</li>
                <li>Ludwig Boltzmann (1844-1906): Interpretación estadística de la entropía</li>
                <li>Walther Nernst (1864-1941): Tercera Ley de la Termodinámica</li>
              </ul>
            </div>
          </div>
        
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Relación con Otras Disciplinas" variant="theoretical">
        <Concept title="Relación con Otras Disciplinas" variant="detailed">
          <div className="detailed-content">
            
          <p>La termodinámica mantiene conexiones fundamentales con múltiples áreas del conocimiento:</p>
          
          <div class="discipline-connections">
            <div class="connection-item">
              <h4>🔬 Mecánica Estadística</h4>
              <p>Proporciona la base microscópica de los fenómenos termodinámicos. La mecánica estadística explica las propiedades macroscópicas a partir del comportamiento de las partículas individuales. Entropía interpretación Boltzmann S=k_B·ln(Ω) multiplicidad microestados función partición canónica Z=Σexp(-E_i/k_BT) energía libre Helmholtz F=-k_BT·ln(Z) potenciales termodinámicos derivación microscópica ensemble estadístico promedio temporal ergódico equivalencia mecánica cuántica operadores observables valores esperados teoría densidad matriz.</p>
            </div>
            
            <div class="connection-item">
              <h4>⚗️ Química Física</h4>
              <p>La termodinámica química estudia los cambios energéticos en las reacciones químicas, equilibrios químicos y transiciones de fase. Energía libre Gibbs ΔG criterio espontaneidad reacción ΔG&lt;0 espontánea ΔG&gt;0 no espontánea ΔG=0 equilibrio constante equilibrio K relación ΔG°=-RT·ln(K) temperatura dependencia ecuación van't Hoff d(ln K)/dT=ΔH°/RT² entalpía reacción cambio equilibrio temperatura Le Chatelier presión concentración catálisis cinética química velocidad reacción mecanismos moleculares energía activación Arrhenius termodinámica equilibrio cinética velocidad aproximación estado estacionario.</p>
            </div>
            
            <div class="connection-item">
              <h4>🏭 Ingeniería</h4>
              <p>Aplicación en el diseño de motores térmicos, sistemas de refrigeración, turbinas, calderas y procesos industriales. Ciclo Rankine centrales térmicas ciclo Brayton turbinas gas aviación ciclo Otto Diesel automoción refrigeración compresión vapor absorción bomba calor climatización eficiencia energética cogeneración ciclo combinado rendimiento térmico optimización exergía análisis Segunda Ley irreversibilidades generación entropía pérdidas trabajo disponible mejora diseño simulación computacional Aspen HYSYS PRO/II software ingeniería procesos químicos.</p>
            </div>
            
            <div class="connection-item">
              <h4>🌍 Ciencias de la Tierra</h4>
              <p>Estudios de la atmósfera, oceanografía, geotermia y procesos geológicos que involucran transferencia de energía. Circulación atmosférica gradientes temperatura presión vientos convección Hadley Ferrel polar transporte calor ecuatorial polar balance radiación terrestre meteorología predicción tiempo clima cambio climático efecto invernadero CO₂ metano vapor agua forzamiento radiativo temperatura global calentamiento antropogénico océanos circulación termohalina corrientes marinas Gulf Stream Kuroshio transporte calor masa sal regulación clima almacenamiento CO₂ acidificación impacto ecosistemas marinos.</p>
            </div>
            
            <div class="connection-item">
              <h4>🧬 Biología</h4>
              <p>Bioenergética, metabolismo celular, y procesos biológicos que involucran transformaciones de energía. ATP adenosín trifosfato moneda energética universal célula hidrólisis ATP→ADP+Pi liberación energía ΔG°=-30.5kJ/mol acoplamiento reacciones endergónicas ΔG&gt;0 no espontáneas respiración celular glucólisis ciclo Krebs cadena transporte electrones fosforilación oxidativa síntesis ATP rendimiento 30-32 ATP/glucosa eficiencia 40% resto calor disipado homeostasis térmica endotermos temperatura corporal 37°C humanos metabolismo basal 1500-2000kcal/día termogénesis tiriteo grasa parda adaptación frío termorregulación.</p>
            </div>
            
            <div class="connection-item">
              <h4>🌌 Cosmología y Astrofísica</h4>
              <p>Termodinámica universo expansión cosmológica energía oscura materia oscura radiación cósmica fondo microondas CMB temperatura 2.725K residuo Big Bang entropía universo aumenta irreversibilidad expansión acelerada destino último muerte térmica equilibrio térmico temperatura uniforme cese procesos actividad cósmica horizonte eventos agujeros negros termodinámica Hawking radiación temperatura T_H=ℏc³/8πGMk_B evaporación información paradoja entropía área horizonte Bekenstein-Hawking S=k_Bc³A/4ℏG holografía gravedad cuántica.</p>
            </div>
          </div>
        
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Leyes Fundamentales de la Termodinámica" variant="theoretical">
        <Concept title="Los Cuatro Pilares de la Termodinámica" variant="detailed">
          <div className="detailed-content">
            
          <div class="fundamental-laws">
            <div class="law-item">
              <h4>⚖️ Ley Cero: Equilibrio Térmico</h4>
              <p>Si dos sistemas están en equilibrio térmico con un tercero, entonces están en equilibrio térmico entre sí. Esta ley establece concepto temperatura propiedad transitiva equivalencia térmica termómetro instrumento medición referencia calibración escala termodinámica absoluta Kelvin relativa Celsius fundamento termometría experimental comparación sistemas aislados contacto térmico membrana diatérmica transferencia calor flujo energía térmica equilibrio igualdad temperatura cesación intercambio.</p>
            </div>
            
            <div class="law-item">
              <h4>🔄 Primera Ley: Conservación de la Energía</h4>
              <p>La energía no se crea ni se destruye, solo se transforma. Para un sistema cerrado ΔU=Q-W cambio energía interna U calor absorbido Q trabajo realizado W convención signos Q&gt;0 calor absorbido sistema Q&lt;0 cedido entorno W&gt;0 trabajo realizado por sistema expansión W&lt;0 sobre sistema compresión energía interna función estado depende solo estado inicial final independiente camino trayectoria proceso reversible irreversible calor trabajo funciones trayectoria dependen proceso específico seguido integral ∮dU=0 ciclo cerrado ∮đQ≠0 ∮đW≠0.</p>
              <p>Enunciado Joule equivalencia mecánica calor 1cal=4.184J trabajo mecánico fricción genera calor conversión energía mecánica térmica conservación total experimento paddle wheel agitación agua calentamiento medición equivalente cuantitativo unificación conceptos anteriormente separados calor sustancia calórico desechado teoría cinética molecular agitación térmica movimiento traslacional rotacional vibracional moléculas temperatura medida energía cinética promedio.</p>
            </div>
            
            <div class="law-item">
              <h4>📈 Segunda Ley: Entropía y Dirección de Procesos</h4>
              <p>Enunciado Clausius calor fluye espontáneamente cuerpo caliente frío nunca sentido opuesto sin intervención externa refrigerador bomba calor requieren trabajo entrada transferencia calor frío caliente violación imposible perpetuum mobile segunda especie máquina térmica convierte íntegramente calor trabajo ciclo sin cambio entorno eficiencia Carnot límite superior η=1-T_fría/T_caliente temperaturas absolutas.</p>
              <p>Enunciado Kelvin-Planck imposible dispositivo operando ciclo absorba calor única fuente producir trabajo neto equivalente máquina térmica eficiencia 100% viola Segunda Ley siempre parte calor debe ceder sumidero frío condensador refrigeración rechazo térmico inevitable entropía universo aumenta procesos naturales dS_universo≥0 igualdad proceso reversible ideal desigualdad irreversible real fricción gradientes temperatura presión concentración finitos mezcla difusión expansión libre trabajo perdido exergía destruida.</p>
              <p>Entropía interpretación estadística Boltzmann desorden molecular multiplicidad microestados configuraciones microscópicas compatibles macroestado dado sistema aislado evoluciona estado probabilidad mayor entropía máxima equilibrio termodinámico flecha tiempo asimetría temporal irreversibilidad macroscópica vs reversibilidad microscópica leyes Newton mecánica cuántica Schrödinger paradoja aparente resolución estadística sistemas muchas partículas comportamiento colectivo promedio.</p>
            </div>
            
            <div class="law-item">
              <h4>❄️ Tercera Ley: Entropía en el Cero Absoluto</h4>
              <p>Entropía sustancia cristalina perfecta cero absoluto temperatura T=0K es cero S(0K)=0 enunciado Nernst consecuencia imposibilidad alcanzar 0K número finito etapas enfriamiento proceso isotermo T→0 requiere extracción calor infinitesimal Q→0 cambio entropía dS=dQ/T→0 más lentamente dQ asintótico inalcanzable práctica temperatura más baja alcanzada laboratorio 100pK=10⁻¹⁰K enfriamiento láser desaceleración átomos condensado Bose-Einstein temperatura crítica transición fase cuántica coherencia macroscópica.</p>
              <p>Consecuencias Tercera Ley capacidad calorífica C_p→0 cuando T→0 coeficiente expansión térmica α→0 compresibilidad isoterma β→0 propiedades térmicas vanishing comportamiento T³ sólidos Debye red cristalina fonones cuantización energía vibracional frecuencia corte temperatura Debye Θ_D característica material diamante 2230K cobre 343K plomo 105K criogenia helio líquido 4.2K hidrógeno 20K nitrógeno 77K aplicación superconductores imanes CERN telescopios infrarrojos detectores SQUID sensibilidad extrema.</p>
            </div>
          </div>
        
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Métodos y Enfoques de la Termodinámica" variant="theoretical">
        <Concept title="Termodinámica Clásica vs Estadística" variant="detailed">
          <div className="detailed-content">
            
          <div class="approach-comparison">
            <div class="approach-item">
              <h4>📐 Termodinámica Clásica (Fenomenológica)</h4>
              <p>Enfoque macroscópico observacional empírico basado leyes fundamentales experimentales sin referencia estructura atómica molecular interior caja negra relaciones propiedades medibles presión temperatura volumen energía entropía ecuaciones estado funciones termodinámicas potenciales energía interna U entalpía H energía libre Gibbs G Helmholtz F relaciones Maxwell derivadas parciales identidades matemáticas transformadas Legendre variables conjugadas.</p>
              <p>Ventajas generalidad aplicabilidad universal independiente detalles microscópicos validez sistemas complejos desconocimiento estructura atómica histórico previo mecánica cuántica siglo XIX Carnot Clausius Kelvin Gibbs formulación completa rigurosa matemática axiomática postulados Carathéodory geometría diferencial moderna formulación estados accesibles inaccesibles.</p>
              <p>Limitaciones ausencia interpretación física profunda significado entropía oscuro misterioso magnitud abstracta sin imagen intuitiva imposibilidad cálculo propiedades ab initio desde primeros principios requiere datos experimentales mediciones laboratorio tablas correlaciones empíricas falta predicción nuevos fenómenos descubrimiento guiado experimento teoría sigue observación.</p>
            </div>
            
            <div class="approach-item">
              <h4>⚛️ Termodinámica Estadística (Mecánica Estadística)</h4>
              <p>Enfoque microscópico mecanicista basado comportamiento partículas individuales átomos moléculas electrones núcleos leyes mecánica clásica Newton cuántica Schrödinger hamiltoniano sistema función onda estados energía probabilidad configuración ensemble microcanónico energía fija canónico temperatura fija gran canónico potencial químico fijo intercambio partículas.</p>
              <p>Conexión macro-micro función partición Z suma estados Boltzmann Z=Σ_i g_i exp(-E_i/k_BT) degeneración g_i energía nivel E_i todas propiedades termodinámicas derivables energía libre F=-k_BT ln(Z) presión P=-∂F/∂V entropía S=-∂F/∂T energía interna U=F+TS entalpía H=U+PV potencial químico μ=∂F/∂N capacidad calorífica C_V=∂U/∂T cálculo teórico predicción experimental verificación.</p>
              <p>Interpretación entropía Boltzmann S=k_B ln(Ω) logaritmo número microestados accesibles Ω medida probabilidad configuración macroestado desorden información teoría Shannon entropía información I=-Σ p_i ln(p_i) equivalencia formal probabilidad p_i estado i sistema aislado equiprobabilidad Ω estados entropía máxima principio máxima entropía inferencia Bayesiana estado conocimiento incompleto.</p>
              <p>Aplicaciones fluctuaciones térmicas desviaciones promedio σ²=⟨(ΔE)²⟩=k_BT²C_V proporcionales capacidad calorífica movimiento browniano Einstein 1905 difusión partículas suspendidas ⟨x²⟩=2Dt confirmación existencia átomos Perrin 1908 Premio Nobel teoría transiciones fase Ising ferromagnetismo orden-desorden crítico exponentes universales grupo renormalización Wilson fenómenos críticos.</p>
            </div>
          </div>
        
          </div>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>Motores combustión interna automoción vehículos Otto Diesel</h3>
          <p>Los motores de combustión interna son el corazón de la mayoría de los vehículos actuales, transformando la energía química del combustible en trabajo mecánico mediante ciclos termodinámicos. El ciclo Otto, empleado en motores de gasolina, opera en cuatro tiempos (admisión, compresión, combustión y escape) alcanzando temperaturas de combustión de 2000-2500 K y presiones máximas de 50-80 bar. Sin embargo, debido a las irreversibilidades inherentes (fricción, transmisión de calor a través de gradientes finitos, combustión no instantánea), la eficiencia térmica real solo alcanza el 25-30%, muy por debajo del límite teórico de Carnot. La potencia específica típica es de 50-100 kW por litro de cilindrada.</p>
          <p>El ciclo Diesel presenta ventajas termodinámicas significativas gracias a su mayor relación de compresión (15:1 hasta 22:1, comparado con 8:1-12:1 del Otto). Esta compresión elevada eleva la temperatura del aire por encima del punto de autoencendido del gasóleo, permitiendo la combustión sin bujías. La mayor relación de compresión resulta en eficiencias térmicas superiores del 35-45%, lo que explica el menor consumo de combustible de los motores diesel. Además, generan mayor torque a bajos regímenes de giro, haciéndolos ideales para camiones, transporte pesado y maquinaria industrial donde se requiere fuerza de tracción.</p>
          <p>Los turbocargadores modernos recuperan energía de los gases de escape, que de otro modo se desperdiciaría, utilizándola para impulsar una turbina que acciona un compresor de aire. Este aire comprimido aumenta la densidad de la carga admitida en los cilindros (sobrealimentación), permitiendo quemar más combustible y generar más potencia sin aumentar la cilindrada (downsizing). Esta tecnología ha permitido reducir el tamaño de los motores manteniendo o incluso superando la potencia, con la ventaja de menores emisiones de CO₂ y mejor consumo, cumpliendo normativas estrictas como Euro 6 en Europa.</p>
        </div>
        <div className="theory-subsection">
          <h3>Centrales térmicas generación eléctrica ciclo Rankine vapor</h3>
          <p>Las centrales térmicas convencionales generan electricidad mediante el ciclo Rankine, un proceso termodinámico que convierte calor en trabajo mecánico usando agua/vapor como fluido de trabajo. La combustión de carbón, gas natural o fuel oil en una caldera produce gases calientes que vaporizan agua líquida a presiones típicas de 200 bar, generando vapor sobrecalentado a temperaturas de 540-560°C. Este vapor de alta energía se expande a través de turbinas de alta, media y baja presión escalonadas, donde su entalpía se convierte en trabajo mecánico rotacional que acciona un alternador, generando entre 500-1000 MW de potencia eléctrica en instalaciones de gran escala.</p>
          <p>Tras expandirse en las turbinas, el vapor de escape a baja presión (aproximadamente 0.05 bar y 35°C) debe condensarse de nuevo a líquido para cerrar el ciclo. Esto se logra en un condensador refrigerado con agua de río, mar o torres de enfriamiento. Una bomba de alimentación presuriza el agua líquida condensada y la retorna a la caldera, completando el ciclo Rankine cerrado. A pesar de estas sofisticadas instalaciones, la eficiencia global de una central térmica convencional alcanza típicamente solo el 35-42%, limitada fundamentalmente por el teorema de Carnot y las irreversibilidades reales del proceso.</p>
          <p>Las centrales de ciclo combinado representan la tecnología de generación térmica más eficiente disponible actualmente. Combinan una turbina de gas (ciclo Brayton) con una turbina de vapor (ciclo Rankine): primero, la turbina de gas de 400-600 MW genera electricidad quemando gas natural; luego, sus gases de escape a 550°C, en lugar de desperdiciarse, se aprovechan en una caldera de recuperación para generar vapor que alimenta una segunda turbina de vapor. Esta configuración en cascada eleva la eficiencia global hasta un impresionante 55-60%, récord tecnológico que supone reducciones sustanciales en el consumo de combustible y emisiones de CO₂, crucial para la transición energética y mitigación del cambio climático.</p>
        </div>
        <div className="theory-subsection">
          <h3>Refrigeración doméstica ciclo compresión vapor fluido frigorígeno</h3>
          <p>El refrigerador doméstico es una bomba de calor que transfiere energía térmica desde el interior frío hacia el exterior cálido, operando en contra del flujo espontáneo de calor y requiriendo trabajo externo. Un compresor eléctrico (consumo típico 100-200 W) comprime un fluido frigorígeno como R600a (isobutano) o R134a, elevando su presión desde aproximadamente 1 bar hasta 8-12 bar en un proceso adiabático que también incrementa su temperatura hasta 60-80°C. Este vapor caliente y presurizado fluye hacia el condensador (serpentín en la parte posterior), donde cede calor al ambiente por convección natural o forzada, licuificándose en el proceso.</p>
          <p>El líquido frigorígeno a alta presión pasa luego por una válvula de expansión termostática, donde sufre un estrangulamiento que reduce abruptamente su presión y temperatura. Este fluido bifasico (líquido+vapor) frío entra al evaporador situado dentro del compartimento refrigerado, donde a -18°C (temperatura típica del congelador) absorbe calor de los alimentos y el aire interior, completando su evaporación. La carga térmica extraída Q_frío es típicamente 150-300 W, representando el calor que debe removerse continuamente para mantener las temperaturas deseadas.</p>
          <p>La eficiencia de este sistema se mide mediante el Coeficiente de Prestación (COP), definido como la relación entre el calor extraído y el trabajo consumido: COP = Q_frío/W. Los refrigeradores modernos alcanzan COP de 2.5-3.5, significando que por cada vatio eléctrico consumido, extraen 2.5-3.5 vatios de calor del interior. Los modelos de clase energética A+++ consumen apenas 150-250 kWh/año, resultado de mejoras en aislamiento térmico, compresores eficientes y controles inteligentes, cumpliendo estrictas normativas de ecodiseño de la Unión Europea.</p>
        </div>
        <div className="theory-subsection">
          <h3>Destilación industrial separación mezclas líquidos volátiles</h3>
          <p>La destilación industrial es uno de los procesos de separación más importantes en la industria química y petroquímica, aprovechando las diferencias en volatilidad (presión de vapor) de los componentes de una mezcla líquida. En una refinería de petróleo, el crudo se separa mediante destilación fraccionada en una columna de hasta 50 metros de altura equipada con 20-100 platos perforados o empaquetamiento estructurado. Cada plato constituye una etapa de equilibrio termodinámico donde el vapor ascendente (rico en componentes volátiles) contacta con el líquido descendente (rico en componentes pesados), intercambiando masa y calor. Las fracciones se extraen a diferentes alturas: gasolina (40-200°C), queroseno (150-250°C), diesel (250-350°C) y aceites pesados (350-400°C).</p>
          <p>La destilación atmosférica opera a presión normal (1 bar), pero para productos muy pesados que se degradarían térmicamente a sus temperaturas de ebullición atmosféricas elevadas, se emplea destilación a vacío (0.1 bar o menos). Según la relación de Clausius-Clapeyron, reducir la presión disminuye proporcionalmente la temperatura de ebullición, permitiendo destilar compuestos sensibles sin descomposición térmica, preservando su calidad y valor comercial. Esta técnica es esencial para obtener aceites lubricantes, ceras y asfaltos de alta calidad.</p>
          <p>En destilación de etanol, existe un azeotropo agua-etanol al 96% en masa que impide alcanzar mayores purezas por destilación convencional. Para producir alcohol absoluto (99.5-99.9% pureza) necesario en aplicaciones farmacéuticas, química fina y bioetanol combustible, se recurre a destilación extractiva o azeotrópica: se añade un tercer componente (benceno, ciclohexano o glicerol) que modifica las volatilidades relativas, "rompiendo" el azeotropo y permitiendo la separación completa. Estos procesos demuestran cómo la comprensión profunda del equilibrio termodinámico líquido-vapor permite diseñar procesos de separación altamente eficientes.</p>
        </div>
        <div className="theory-subsection">
          <h3>Bomba calor climatización reversible calefacción refrigeración</h3>
          <p>Las bombas de calor representan una de las tecnologías de climatización más eficientes energéticamente disponibles, capaces de operar tanto en modo calefacción (invierno) como refrigeración (verano) mediante inversión del ciclo termodinámico. Un sistema aire-aire split con compresor inverter de velocidad variable puede suministrar 1-5 kW de potencia térmica. En modo calefacción invernal, el sistema extrae calor del aire exterior (incluso a -15°C) a través del evaporador y lo transfiere al interior (20-25°C) mediante el condensador. El Coeficiente de Prestación (COP) en calefacción alcanza valores de 3.5-5.0, lo que significa que por cada kW eléctrico consumido (700-1200 W típicos), se suministran 3.5-5.0 kW de calor al interior, representando ahorros del 60-75% comparado con resistencias eléctricas convencionales.</p>
          <p>En modo refrigeración durante el verano, el ciclo se invierte: el evaporador interior extrae calor del espacio climatizado y el condensador exterior lo disipa al ambiente, incluso con temperaturas exteriores de 35-45°C. La eficiencia se expresa mediante el EER (Energy Efficiency Ratio), con valores típicos de 3.0-4.5 en equipos modernos. La tecnología inverter ajusta continuamente la velocidad del compresor según la demanda térmica, evitando los ciclos on-off bruscos de los sistemas convencionales y mejorando sustancialmente la eficiencia global y el confort térmico.</p>
          <p>Los sistemas de aerotermia y geotermia representan evoluciones avanzadas de la bomba de calor. La geotermia aprovecha la temperatura constante del subsuelo (10-15°C durante todo el año a profundidades de 80-150 m), independiente de las condiciones climáticas superficiales. Mediante perforaciones verticales e intercambiadores enterrados, se establece un sumidero/fuente térmica extremadamente estable que permite COPs superiores a 4-5 incluso en condiciones climáticas extremas. Aunque la inversión inicial es mayor, estos sistemas son considerados energía renovable, contribuyen significativamente a la certificación energética de edificios (CTE DB-HE en España) y son esenciales para edificios de consumo casi nulo (ECCN o "Passivhaus"), el estándar de sostenibilidad energética más exigente.</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        <div className="theory-subsection">
          <h3>1760-1840 fundamentos empíricos Black Thompson Carnot máquinas</h3>
          <p>Joseph Black (1728-1799), médico y químico escocés profesor en Glasgow y Edimburgo, realizó en 1760 descubrimientos fundamentales que establecieron las bases cuantitativas de la termometría. Demostró que diferentes materiales requ ieren cantidades diferentes de calor para elevar su temperatura: introdujo el concepto de calor específico (agua: 4.18 kJ/(kg·K) vs hierro: 0.45 kJ/(kg·K)). Más crucialmente, descubrió el calor latente: durante los cambios de estado (fusión o vaporización), una sustancia absorbe o libera enormes cantidades de calor sin cambiar su temperatura. Para el hielo-agua, el calor latente de fusión es 334 kJ/kg, mientras que para agua-vapor es 2257 kJ/kg, casi 7 veces mayor. Estos descubrimientos establecieron los fundamentos de la calorimetría científica.</p>
          <p>Benjamin Thompson, Conde Rumford (1753-1814), desafió la teoría del calórico vigente mediante experimentos de perforación de cañones en el Arsenal de Munich (1798). Observó que la fricción mecánica generaba cantidades aparentemente ilimitadas de calor, imposibles de explicar si el calor fuera un fluido material conservado ("calórico"). Concluyó que el calor era una forma de movimiento o energía, no una sustancia. Este trabajo fue precursor de la Primera Ley de la Termodinámica, estableciendo la equivalencia entre energía mecánica y térmica, aunque no cuantificó la relación exacta.</p>
          <p>Sadi Carnot (1796-1832), ingeniero militar francés, publicó en 1824 "Réflexions sur la puissance motrice du feu", obra revolucionaria que estableció los límites fundamentales de las máquinas térmicas. Mediante razonamiento teórico puro, sin ecuaciones complejas, demostró que el rendimiento máximo de cualquier máquina térmica operando entre dos focos térmicos depende únicamente de sus temperaturas: η_máx = 1 - T_fría/T_caliente. El ciclo de Carnot, completamente reversible, representa este límite inalcanzable en la práctica. Este trabajo anticipó la Segunda Ley de la Termodinámica y conceptos como entropía e irreversibilidad, aunque Carnot murió prematuramente sin ver reconocido su genio.</p>
        </div>
        <div className="theory-subsection">
          <h3>1840-1870 formulación leyes Joule Clausius Kelvin energía</h3>
          <p>James Prescott Joule (1818-1889), cervecero y físico autodidacta inglés, realizó en la década de 1840 experimentos meticulosos con un dispositivo de paletas giratorias sumergidas en agua. Demostró que el trabajo mecánico de las paletas eleva la temperatura del agua de forma reproducible y cuantificable, estableciendo el equivalente mecánico del calor: 1 caloría = 4.184 julios, con una precisión notable para su época. Este resultado fundó la Primera Ley de la Termodinámica (conservación de la energía): ΔU = Q - W, donde la energía interna U de un sistema cambia por intercambio de calor Q y realización de trabajo W, proporcionando base cuantitativa rigurosa a la ciencia térmica.</p>
          <p>Rudolf Clausius (1822-1888), físico alemán, formuló en 1850 la Segunda Ley: "El calor no puede fluir espontáneamente de un cuerpo frío a uno caliente", estableciendo la direccionalidad irreversible de los procesos naturales. Introdujo el concepto revolucionario de entropía S como función de estado, cuyo cambio satisface dS ≥ dQ/T (igualdad para procesos reversibles, desigualdad para irreversibles). Clausius demostró que la entropía del universo siempre aumenta en procesos espontáneos, estableciendo una "flecha del tiempo" termodinámica fundamental.</p>
          <p>William Thomson, Lord Kelvin (1824-1907), físico y matemático británico, propuso en 1848 la escala absoluta de temperatura basada en principios termodinámicos puros, independiente de sustancias particulares. El cero absoluto (0 K = -273.15°C) representa la temperatura mínima teórica donde cesa el movimiento térmico molecular. Kelvin también formuló su enunciado de la Segunda Ley (Kelvin-Planck): "Es imposible construir una máquina térmica que, operando en ciclos, convierta íntegramente calor en trabajo", equivalente al enunciado de Clausius pero enfatizando la imposibilidad del móvil perpetuo de segunda especie.</p>
        </div>
        <div className="theory-subsection">
          <h3>1870-1900 consolidación Gibbs Boltzmann Nernst potenciales estadística</h3>
          <p>Josiah Willard Gibbs (1839-1903), físico y químico estadounidense profesor en Yale, publicó "On the Equilibrium of Heterogeneous Substances" (1876-1878), un trabajo monumental de 300 páginas que fundó la termodinámica química moderna. Introdujo los potenciales termodinámicos: energía libre de Gibbs G = H - TS (donde H es entalpía, S entropía, T temperatura) y energía libre de Helmholtz F = U - TS, que determinan la espontaneidad y equilibrio de reacciones químicas. Su regla de fases relaciona el número de grados de libertad, fases y componentes en sistemas multicomponente, siendo fundamental para metalurgia, ingeniería de materiales y química industrial.</p>
          <p>Ludwig Boltzmann (1844-1906), físico austríaco, estableció el puente entre termodinámica macroscópica y mecánica microscópica mediante su interpretación estadística de la entropía: S = k_B · ln(Ω), donde k_B = 1.38×10⁻²³ J/K es la constante de Boltzmann y Ω es el número de microestados (configuraciones microscópicas) compatibles con un macroestado dado. Esta ecuación, grabada en su tumba en Viena, explica por qué la entropía aumenta: los sistemas evolucionan hacia estados con mayor multiplicidad de configuraciones microscópicas, unificando termodinámica clásica con mecánica estadística y física cuántica.</p>
          <p>Walther Nernst (1864-1941), químico alemán, enunció en 1906 la Tercera Ley de la Termodinámica: "La entropía de una sustancia cristalina pura en equilibrio se aproxima a cero cuando la temperatura tiende al cero absoluto", S(0K) = 0. Esta ley implica que el cero absoluto es inalcanzable mediante un número finito de procesos, y que el calor específico de todas las sustancias tiende a cero cuando T → 0. Nernst recibió el Premio Nobel de Química en 1920 por este trabajo, completando el edificio conceptual de las leyes fundamentales de la termodinámica.</p>
        </div>
        <div className="theory-subsection">
          <h3>Siglo XX aplicaciones ingeniería tecnología aviación espacial</h3>
          <p>El desarrollo de la aviación civil y militar durante los años 1950s-1970s representó una aplicación masiva de la termodinámica de gases. Los turborreactores y turbofanes operan según el ciclo Brayton (compresión-combustión-expansión), donde el aire atmosférico se comprime, se calienta mediante combustión de queroseno (Jet A-1), y se expande generando empuje propulsivo. A altitud de crucero (10,000 m), con temperatura exterior de -56°C y presión de 0.25 bar, estos motores alcanzan eficiencias térmicas del 40-50%, optimizando consumo de combustible para autonomías de 12,000-15,000 km en vuelos transoceánticos.</p>
          <p>La conquista espacial (Apollo 1969, alunizaje) requirió cohetes Saturn V con motores F-1 de queroseno/oxígeno líquido generando empujes de 6.7 MN al nivel del mar. La combustión a 2900 kg/s producía temperaturas de cámara de 3300 K y presiones de 70 bar. Los gases se expandían en la tobera De Laval alcanzando velocidades supersónicas (Mach 3-4), con impulso específico de 263 s, demostrando la aplicación extrema de prin cipios termodinámicos en propulsión espacial.</p>
          <p>Las centrales nucleares aplican termodinámica a la fisión de uranio-235, donde cada fisión libera 200 MeV. El moderador (agua ligera/pesada o grafito) ralentiza neutrones manteniendo la reacción en cadena controlada. El refrigerante primario (300°C, 155 bar) transfiere calor al circuito secundario, generando vapor (285°C) que acciona turbinas eléctricas. Los reactores PWR (agua presurizada) y BWR (agua en ebullición) incorporan múltiples sistemas de seguridad y contención, estableciendo estándares de ingeniería termodinámica nuclear.</p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>🎭</span> Curiosidades y Anécdotas
        </h2>
        <div className="theory-subsection">
          <h3>Carnot muerte prematura 36años cólera obra olvidada redescubierta</h3>
          <p>Sadi Carnot (1796-1832), hijo del matemático y militar Lazare Carnot, publicó su único trabajo en 1824: "Réflexions sur la puissance motrice du feu". Vendiendo apenas 100 ejemplares, fue completamente ignorado por la comunidad científica de su época, donde las máquinas de vapor se desarrollaban empíricamente por ingenieros prácticos, sin interés por teorías abstractas. En 1832, durante la epidemia de cólera en París, Carnot murió prematuramente a los 36 años. Trágicamente, todos sus manuscritos y notas de experimentos fueron quemados como medida de desinfección, represent ando una pérdida irreparable de potenciales trabajos inéditos.</p>
          <p>El redescubrimiento de su obra llegó en 1850, cuando Clausius y Kelvin leyeron su trabajo y reconocieron su genialidad: Carnot había anticipado la Segunda Ley de la Termodinámica y establecido los límites fundamentales de eficiencia de las máquinas térmicas dos décadas antes de su formulación matemática rigurosa. Hoy, Carnot es considerado el padre de la termodinámica moderna, fundador de la ciencia de transformaciones energéticas y límites universales de eficiencia, demostrando que las ideas verdaderamente revolucionarias pueden tardar décadas en ser comprendidas y apreciadas.</p>
        </div>
        <div className="theory-subsection">
          <h3>Boltzmann suicidio depresión rechazo teorías atomismo estadística</h3>
          <p>Ludwig Boltzmann (1844-1906), físico teórico austríaco, fue un defensor apasionado del atomismo (existencia real de átomos y moléculas) en una época donde figuras influyentes como Ernst Mach y Wilhelm Ostwald defendían el "energeticismo" fenomenológico, rechazando entidades microscópicas inobservables. La microscopía de la época era insuficiente para evidencia directa, y las paradojas teóricas de Boltzmann (paradoja de inversión temporal de Loschmidt, recurrencia de Poincaré) sobre cómo la mecánica reversible podía generar irreversibilidad termodinámica, generaban debates acalorados en congresos, dejando a la comunidad científica profundamente dividida.</p>
          <p>Boltzmann sufría depresión crónica, aislamiento académico y salud frágil (asma, bronquitis), realizando viajes de climaterapia buscando alivio. El 5 de septiembre de 1906, en Duino (Trieste), mientras su hija mayor y esposa paseaban por la playa, Boltzmann se suicidó por ahorcamiento en su hotel, una tragedia personal y científica devastadora. Irónicamente, su reivindicación llegó póstumamente: en 1905 Einstein publicó su teoría del movimiento browniano, y en 1908 Perrin confirmó experimentalmente la existencia de átomos, validando completamente las ideas de Boltzmann. Su constante k_B y su ecuación S = k_B ln(Ω) son pilares de la física estadística, mecánica cuántica y termodinámica irreversible modernas.</p>
        </div>
        <div className="theory-subsection">
          <h3>Gibbs genio solitario Yale publicaciones oscuras reconocimiento tardío</h3>
          <p>Josiah Willard Gibbs (1839-1903) nació, vivió y murió en New Haven, Connecticut, siendo profesor en Yale durante 32 años. Nunca se casó, dedicándose exclusivamente a la ciencia con una vida modesta y ascética. Publicó sus trabajos fundamentales de termodinámica en "Transactions of the Connecticut Academy" (1876-1878), una revista local de circulación limitada. Además, escribió en inglés cuando el alemán y francés dominaban la ciencia europea, resultando mayormente ignorado por sus contemporáneos. James Clerk Maxwell en Inglaterra reconoció su importancia y envió copias a colegas europeos; Ostwald tradujo su obra al alemán en 1892, iniciando una difusión más amplia.</p>
          <p>A pesar de su salario profesoral modesto, Gibbs heredó una fortuna familiar que le permitió independencia económica total, dedicándose a la investigación pura sin presiones por aplicaciones inmediatas, convirtiéndose en mecenas de la ciencia desinteresada. Einstein lo llamó en 1910 "la mente más grande en la historia estadounidense". Los potenciales termodinámicos de Gibbs son la base de la industria química moderna: equilibrios de fases, diagramas de estado y regla de fases tienen aplicación universal en materiales, aleaciones, cerámicas, polímeros y bioquímica, demostrando que el genio científico puede florecer en aislamiento relativo cuando se combinan brillantez intelectual, dedicación absoluta e independencia económica.</p>
        </div>
        <div className="theory-subsection">
          <h3>Eficiencia Carnot límite teórico inalcanzable fricción pérdidas reales</h3>
          <p>El ciclo de Carnot establece el rendimiento máximo teórico de cualquier máquina térmica: η_Carnot = 1 - T_fría/T_caliente, dependiendo únicamente de las temperaturas absolutas de los focos térmicos, independientemente de la sustancia de trabajo (gas ideal, vapor de agua, amoniaco, etc.) o propiedades específicas del fluido. Por ejemplo, un motor térmico con T_caliente = 600 K (327°C, temperatura de combustión) y T_fría = 300 K (27°C, ambiente) tendría η_Carnot = 1 - 300/600 = 0.50 = 50% como máximo teórico absolutamente reversible, sin ninguna irreversibilidad.</p>
          <p>En la realidad, los motores Otto alcanzan eficiencias de 25-30%, los Diesel de 35-45%, y las centrales térmicas convencionales de 35-42%, muy por debajo del límite de Carnot. Las pérdidas provienen de múltiples irreversibilidades inevitables: fricción mecánica (rozamiento de pistones, cojinetes), transmisión de calor a través de gradientes finitos de temperatura, combustión irreversible con mezcla turbulenta, escape de gases calientes por la chimenea, y necesidad de refrigeración que extrae calor útil del sistema. Cada una de estas irreversibilidades genera entropía, reduciendo el trabajo útil extraible.</p>
          <p>Los ciclos combinados gas-vapor modernos alcanzan eficiencias de 55-60%, la mejor aproximación tecnológica actual al límite de Carnot. Con T_combustión = 1600 K y T_ambiente = 300 K, el límite teórico sería η_max = 1 - 300/1600 = 81%, todavía físicamente inalcanzable. La Segunda Ley de la Termodinámica impone esta restricción fundamental: ningún proceso real puede alcanzar la eficiencia de Carnot, haciendo imposible el perpetuum mobile de segunda especie (motor con eficiencia 100%), pues violaría el principio de aumento de entropía del universo.</p>
        </div>
      </div>

      <div className="theory-summary-section">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <ul>
          {theoreticalConcepts.keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default IntroduccionALaTermodinamicaTheory;