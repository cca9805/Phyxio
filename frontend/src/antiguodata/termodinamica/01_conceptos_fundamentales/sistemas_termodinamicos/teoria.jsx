import { TheorySection, Concept } from '../../../../components/TheoryV2';
import { theoreticalConcepts } from './definitions.js';

export const metadata = {
  titulo: "Sistemas Termodinámicos",
  descripcion: "Clasificación, características y propiedades de los sistemas termodinámicos",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO'],
  isTheoryOnly: true
};

const SistemasTermodinamicosTheory = () => {
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

      
      <TheorySection title="Definición y Conceptos Fundamentales" variant="theoretical">
        <Concept title="Definición y Conceptos Fundamentales" variant="detailed">
          <div className="detailed-content">
            
          <p>Un sistema termodinámico es una región del espacio o una cantidad de materia que se selecciona para análisis termodinámico. Esta selección se realiza mediante la definición de fronteras que separan el sistema del resto del universo, denominado entorno o alrededores.</p>
          
          <div class="concept-breakdown">
            <div class="concept-item">
              <h4>🎯 Sistema</h4>
              <p>La porción del universo que se estudia. Puede ser una cantidad fija de materia o una región fija del espacio.</p>
            </div>
            
            <div class="concept-item">
              <h4>🌍 Entorno (Alrededores)</h4>
              <p>Todo lo que rodea al sistema y puede interactuar con él. En la práctica, se considera solo la parte del entorno que puede afectar al sistema.</p>
            </div>
            
            <div class="concept-item">
              <h4>🔲 Frontera</h4>
              <p>La superficie real o imaginaria que separa el sistema del entorno. Puede ser fija o móvil, rígida o deformable.</p>
            </div>
            
            <div class="concept-item">
              <h4>🌌 Universo Termodinámico</h4>
              <p>La combinación del sistema y su entorno. En teoría, incluye todo lo que puede influir en el análisis.</p>
            </div>
          </div>
        
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Clasificación de Sistemas" variant="theoretical">
        <Concept title="Clasificación de Sistemas" variant="detailed">
          <div className="detailed-content">
            
          <p>Los sistemas termodinámicos se clasifican según su capacidad de intercambiar energía y materia con el entorno:</p>
          
          <div class="system-types">
            <div class="system-type">
              <h4>🔓 Sistema Abierto (Volumen de Control)</h4>
              <div class="system-description">
                <p>Características:</p>
                <ul>
                  <li>Permite intercambio de energía (calor y trabajo)</li>
                  <li>Permite intercambio de materia</li>
                  <li>La masa del sistema puede variar</li>
                  <li>Las fronteras son permeables</li>
                </ul>
                <p>Ejemplos:</p>
                <ul>
                  <li>Turbina de vapor en operación</li>
                  <li>Compresor de aire</li>
                  <li>Intercambiador de calor</li>
                  <li>Motor de combustión interna</li>
                </ul>
              </div>
            </div>
            
            <div class="system-type">
              <h4>🔒 Sistema Cerrado (Masa de Control)</h4>
              <div class="system-description">
                <p>Características:</p>
                <ul>
                  <li>Permite intercambio de energía (calor y trabajo)</li>
                  <li>NO permite intercambio de materia</li>
                  <li>La masa del sistema permanece constante</li>
                  <li>Las fronteras son impermeables</li>
                </ul>
                <p>Ejemplos:</p>
                <ul>
                  <li>Gas en un cilindro con pistón</li>
                  <li>Refrigerante en un sistema sellado</li>
                  <li>Vapor en una caldera cerrada</li>
                  <li>Aire en un neumático</li>
                </ul>
              </div>
            </div>
            
            <div class="system-type">
              <h4>🔐 Sistema Aislado</h4>
              <div class="system-description">
                <p>Características:</p>
                <ul>
                  <li>NO permite intercambio de energía</li>
                  <li>NO permite intercambio de materia</li>
                  <li>Masa y energía constantes</li>
                  <li>Fronteras rígidas e impermeables</li>
                </ul>
                <p>Ejemplos:</p>
                <ul>
                  <li>Universo completo (teóricamente)</li>
                  <li>Termo perfectamente aislado</li>
                  <li>Calorímetro ideal</li>
                  <li>Sistema en equilibrio total</li>
                </ul>
              </div>
            </div>
          </div>
        
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Propiedades de los Sistemas" variant="theoretical">
        <Concept title="Propiedades de los Sistemas" variant="detailed">
          <div className="detailed-content">
            
          <p>Las propiedades termodinámicas se clasifican según su dependencia del tamaño del sistema:</p>
          
          <div class="properties-comparison">
            <div class="property-type">
              <h4>📏 Propiedades Extensivas</h4>
              <div class="property-details">
                <p>Definición: Dependen de la cantidad de materia del sistema. Son aditivas.</p>
                <p>Características:</p>
                <ul>
                  <li>Proporcionales a la masa del sistema</li>
                  <li>Se pueden sumar para subsistemas</li>
                  <li>Cambian al dividir el sistema</li>
                </ul>
                <p>Ejemplos:</p>
                <ul>
                  <li>Masa (m): kg</li>
                  <li>Volumen (V): m³</li>
                  <li>Energía interna (U): J</li>
                  <li>Entalpía (H): J</li>
                  <li>Entropía (S): J/K</li>
                </ul>
              </div>
            </div>
            
            <div class="property-type">
              <h4>🎯 Propiedades Intensivas</h4>
              <div class="property-details">
                <p>Definición: No dependen de la cantidad de materia. Son independientes del tamaño.</p>
                <p>Características:</p>
                <ul>
                  <li>Independientes de la masa del sistema</li>
                  <li>No se pueden sumar</li>
                  <li>Permanecen constantes al dividir el sistema</li>
                </ul>
                <p>Ejemplos:</p>
                <ul>
                  <li>Temperatura (T): K, °C</li>
                  <li>Presión (P): Pa, bar</li>
                  <li>Densidad (ρ): kg/m³</li>
                  <li>Calor específico (c): J/(kg·K)</li>
                  <li>Viscosidad (μ): Pa·s</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="specific-properties">
            <h4>🔄 Propiedades Específicas</h4>
            <p>Se obtienen dividiendo una propiedad extensiva entre la masa:</p>
            <ul>
              <li>Volumen específico: v = V/m (m³/kg)</li>
              <li>Energía interna específica: u = U/m (J/kg)</li>
              <li>Entalpía específica: h = H/m (J/kg)</li>
              <li>Entropía específica: s = S/m (J/(kg·K))</li>
            </ul>
          </div>
        
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Estados y Procesos" variant="theoretical">
        <Concept title="Estados y Procesos" variant="detailed">
          <div className="detailed-content">
            
          <p>Los sistemas termodinámicos pueden encontrarse en diferentes estados y experimentar diversos tipos de procesos:</p>
          
          <div class="states-processes">
            <div class="state-type">
              <h4>⚖️ Estado de Equilibrio</h4>
              <p>Un sistema está en equilibrio termodinámico cuando:</p>
              <ul>
                <li>Equilibrio térmico: Temperatura uniforme</li>
                <li>Equilibrio mecánico: Presión uniforme</li>
                <li>Equilibrio químico: Composición estable</li>
                <li>Equilibrio de fases: Fases en equilibrio</li>
              </ul>
            </div>
            
            <div class="process-type">
              <h4>🔄 Tipos de Procesos</h4>
              <ul>
                <li>Proceso cuasiestático: Sucesión de estados de equilibrio</li>
                <li>Proceso reversible: Puede invertirse sin cambios en el entorno</li>
                <li>Proceso irreversible: No puede invertirse completamente</li>
                <li>Proceso cíclico: El sistema regresa al estado inicial</li>
              </ul>
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
          <h3>Turbina vapor central eléctrica sistema abierto flujo continuo</h3>
          <p>Las centrales termoeléctricas utilizan turbinas de vapor como sistemas abiertos perfectos para la conversión de energía térmica en electricidad. Una turbina típica de 500 MW opera con vapor de alta presión que ingresa a 100 bar y 540°C, con un flujo másico de aproximadamente 300 kg/s. El vapor atraviesa múltiples etapas de expansión (alta, media y baja presión), donde se extrae trabajo mecánico que hace girar el eje a 3000 rpm, conectado directamente al generador eléctrico.</p>
          <p>El análisis termodinámico se realiza definiendo un volumen de control que engloba la turbina. En régimen estacionario, el balance de masa establece que el flujo másico de entrada debe igualar al de salida, mientras que el balance de energía relaciona la entalpía del vapor con el trabajo mecánico extraído. La eficiencia isentrópica de estas turbinas alcanza valores de 85-90%, siendo las irreversibilidades principales la fricción mecánica, la turbulencia del flujo y las pequeñas pérdidas de calor a través de la carcasa.</p>
          <p>El vapor sale de la turbina a presiones muy bajas (típicamente 0.05 bar y 35°C) hacia el condensador, donde se convierte en agua líquida que es bombeada nuevamente a la caldera, completando el ciclo Rankine. Esta configuración de sistema abierto permite un análisis claro y preciso de los flujos de energía, fundamental para optimizar el rendimiento de centrales que operan con combustibles fósiles, gas natural o energía nuclear.</p>
        </div>
        <div className="theory-subsection">
          <h3>Cilindro pistón motor combustión sistema cerrado masa control</h3>
          <p>El motor de combustión interna representa el ejemplo clásico de sistema cerrado en ingeniería automotriz. Consideremos un motor Otto de gasolina de 2.0 L de cilindrada con 4 cilindros, que desarrolla 150 CV de potencia y 200 Nm de torque a 5500 rpm. Durante cada ciclo, una masa fija de gases (mezcla aire-combustible en proporción estequiométrica 14.7:1) queda encerrada dentro del cilindro cuando se cierra la válvula de admisión.</p>
          <p>El análisis como sistema cerrado es fundamental porque la masa permanece constante durante las fases críticas de compresión, combustión y expansión. Aplicando la Primera Ley de la Termodinámica (ΔU = Q - W), podemos calcular cómo el calor liberado por la combustión de la gasolina (aproximadamente 44 MJ/kg) se convierte parcialmente en trabajo mecánico útil transmitido al pistón, luego a la biela y finalmente al cigüeñal que impulsa las ruedas del vehículo.</p>
          <p>La eficiencia térmica de estos motores es típicamente del 25-30%, lo que significa que la mayor parte de la energía química del combustible se disipa como calor en el escape y el sistema de refrigeración, además de las pérdidas por fricción mecánica. Las emisiones de gases (CO₂, NOx, hidrocarburos) son tratadas por catalizadores de tres vías que cumplen con normativas ambientales como Euro 6d-TEMP, reduciendo significativamente los contaminantes.</p>
        </div>
        <div className="theory-subsection">
          <h3>Termo vacío sistema aislado sin intercambio energía materia</h3>
          <p>El termo o botella térmica de Dewar representa la mejor aproximación práctica a un sistema aislado ideal. Su diseño de doble pared (vidrio o acero inoxidable) con vacío intermedio a presiones de 0.001 Pa prácticamente elimina la transferencia de calor por conducción y convección, ya que no hay moléculas de aire que transporten energía térmica. Adicionalmente, las superficies interiores están recubiertas con materiales reflectantes de baja emisividad (ε = 0.02-0.05), minimizando la radiación infrarroja.</p>
          <p>Un termo de 1 litro puede mantener líquidos como café o té a temperaturas muy elevadas durante períodos prolongados. Si se llena con líquido a 95°C, la temperatura se mantendrá alrededor de 85°C después de 6 horas, y aún estará cerca de 70°C tras 12 horas. Esta pérdida térmica tan lenta se debe únicamente a la conductividad residual a través de los pequeños soportes mecánicos que conectan las paredes interna y externa, y a pequeñas fugas de calor por la tapa aislante.</p>
          <p>Aunque teóricamente un sistema aislado no intercambia ni energía ni materia con el entorno, en la práctica siempre existe un intercambio mínimo e inevitable. Sin embargo, el análisis del termo como sistema aislado es una excelente aproximación que permite aplicar el principio de conservación de energía: el contenido energético del sistema permanece esencialmente constante en el tiempo. Esta tecnología tiene aplicaciones cotidianas en excursiones, camping, trabajo y oficinas, ofreciendo portabilidad y comodidad para mantener bebidas tanto calientes como frías.</p>
        </div>
        <div className="theory-subsection">
          <h3>Reactor químico industrial proceso exotérmico control temperatura</h3>
          <p>Los reactores químicos industriales como los CSTR (Continuous Stirred Tank Reactor) de 10 m³ son ejemplos paradigmáticos de sistemas abiertos con flujos continuos de reactivos y productos. En la síntesis de amoniaco mediante el proceso Haber-Bosch (N₂ + 3H₂ → 2NH₃), el reactor opera a condiciones extremas de 200 bar de presión y 450°C, con catalizadores de hierro promocionado con óxidos de potasio y aluminio. La alimentación continua es de aproximadamente 500 kg/h de gases reactivos.</p>
          <p>El análisis del balance de masa debe considerar la estequiometría de la reacción y la conversión por paso, típicamente del 15-20%, lo que requiere sistemas de recirculación de gases no convertidos y purgas periódicas para evitar la acumulación de inertes. El balance de energía es crítico porque la reacción es exotérmica (ΔH = -92 kJ/mol), generando grandes cantidades de calor que deben extraerse mediante intercambiadores de calor con serpentines de refrigeración usando agua o vapor.</p>
          <p>El control preciso de temperatura es esencial para evitar la desactivación del catalizador por sobrecalentamiento y prevenir situaciones peligrosas de "runaway" térmico donde la temperatura se dispara descontroladamente. Esta aplicación es fundamental para la producción mundial de fertilizantes nitrogenados, con más de 150 millones de toneladas anuales que alimentan aproximadamente al 50% de la población global, haciendo de este proceso uno de los más importantes industrialmente.</p>
        </div>
        <div className="theory-subsection">
          <h3>Compresor aire acondicionado flujo refrigerante análisis volumen</h3>
          <p>El compresor en un sistema de aire acondicionado es un componente clave que se analiza como sistema abierto utilizando el concepto de volumen de control. Un compresor scroll rotativo típico consume 3 kW de potencia eléctrica y procesa refrigerante R410A (un HFC de baja toxicidad), que entra como vapor saturado a 5 bar y 10°C. El mecanismo de espirales entrelazadas con órbita excéntrica comprime el gas reduciendo progresivamente su volumen.</p>
          <p>A la salida, el refrigerante emerge como vapor sobrecalentado a 25 bar y 80°C, listo para ser condensado. Con un flujo másico de 0.08 kg/s, el balance de energía en el volumen de control relaciona las entalpías de entrada y salida con el trabajo mecánico suministrado por el compresor. La eficiencia isentrópica típica es del 70-75%, y considerando que el motor eléctrico tiene un rendimiento del 90%, podemos calcular el consumo total de potencia.</p>
          <p>El coeficiente de rendimiento (COP) del sistema completo alcanza valores de 3.5-4.0 para refrigeración, lo que significa que por cada kW eléctrico consumido se extraen 3.5-4.0 kW térmicos del ambiente interior. Este análisis es fundamental para aplicaciones de climatización doméstica y comercial, donde se busca mantener confort térmico interior (22-24°C) incluso cuando las temperaturas exteriores alcanzan 35-40°C en verano, controlando además la humedad relativa (50-60%) y asegurando la calidad del aire mediante renovación y filtración de partículas, polen y bacterias.</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        <div className="theory-subsection">
          <h3>Siglo XVII primeros conceptos sistema frontera Boyle Gay-Lussac</h3>
          <p>Robert Boyle (1627-1691), químico y físico irlandés, es considerado uno de los padres de la química moderna con su obra "The Sceptical Chymist" (1661), donde introduce el concepto de elemento químico como sustancia pura. Sus experimentos con aire utilizando la bomba de vacío permitieron establecer la famosa ley de Boyle (PV = constante a temperatura fija), que representa la primera relación cuantitativa entre propiedades de gases y establece implícitamente el concepto de sistema termodinámico: una cantidad definida de gas contenida en un recipiente cerrado con fronteras de vidrio.</p>
          <p>Joseph Louis Gay-Lussac (1778-1850), químico francés, desarrolló su ley de volúmenes para gases que reaccionan en proporciones simples, ejemplificada en la reacción 2H₂ + O₂ → 2H₂O. Sus mediciones precisas de temperatura y presión requerían la identificación clara del sistema reaccionante y su aislamiento del entorno, estableciendo condiciones controladas que garantizaban la reproducibilidad experimental. Este trabajo evidenció la necesidad de definir claramente qué constituye el sistema de estudio.</p>
          <p>El desarrollo conceptual del sistema termodinámico como una separación del universo en una región de interés marcó el fundamento del análisis científico moderno. La definición de fronteras, ya fueran reales (paredes de recipientes) o imaginarias (superficies de control), fijas o móviles, rígidas o deformables, se convirtió en el primer paso esencial para cualquier análisis termodinámico riguroso.</p>
        </div>
        <div className="theory-subsection">
          <h3>Siglo XIX formalización Clausius Rankine sistema abierto cerrado</h3>
          <p>Rudolf Clausius, en la década de 1850, estableció la distinción fundamental entre sistema cerrado (masa de control constante) y sistema abierto (volumen de control con flujo de masa variable). Esta clasificación surgió naturalmente al formular la Primera y Segunda Ley de la Termodinámica para su aplicación a motores térmicos y máquinas de vapor, donde era esencial distinguir si la masa permanecía constante o si había flujos de entrada y salida.</p>
          <p>William Rankine (1820-1872), ingeniero escocés, publicó su influyente "Manual of the Steam Engine" en 1859, donde sistematizó la clasificación de sistemas y propiedades termodinámicas. Rankine distinguió claramente entre propiedades intensivas (independientes de la cantidad de materia) y extensivas (proporcionales a la masa), y desarrolló el concepto de estado termodinámico definido por variables independientes como presión, volumen y temperatura. Sus tablas de vapor para agua saturada y sobrecalentada se convirtieron en herramientas indispensables.</p>
          <p>El desarrollo matemático que formalizó las ecuaciones de balance de masa, energía y entropía durante este período permitió la aplicación práctica en ingeniería para el diseño de calderas, turbinas y condensadores. La optimización de ciclos termodinámicos impulsó la Revolución Industrial en la segunda mitad del siglo XIX, transformando radicalmente la capacidad productiva y el transporte.</p>
        </div>
        <div className="theory-subsection">
          <h3>Siglo XX Gibbs sistema heterogéneo fases componentes potenciales</h3>
          <p>Josiah Willard Gibbs publicó entre 1876-1878 su obra monumental "On the Equilibrium of Heterogeneous Substances", donde desarrolló la termodinámica de sistemas multicomponente y multifase. Gibbs introdujo conceptos revolucionarios como los potenciales químicos (μᵢ) para cada componente, la energía libre de Gibbs y los criterios de estabilidad basados en la minimización de esta función a temperatura y presión constantes.</p>
          <p>La regla de fases de Gibbs (F = C - P + 2) establece los grados de libertad de un sistema en función del número de componentes independientes (C) y el número de fases coexistentes (P). Esta relación permite predecir cuántas variables termodinámicas pueden variarse independientemente sin alterar el número de fases en equilibrio, siendo fundamental para comprender diagramas de fase complejos.</p>
          <p>Las aplicaciones de la termodinámica de Gibbs son vastas: en metalurgia permitió interpretar diagramas de fase hierro-carbono para aceros y diseñar tratamientos térmicos (temple, revenido, precipitación); en petroquímica optimizó procesos de destilación multicomponente y extracción líquido-líquido; en farmacéutica mejoró procesos de cristalización y purificación. Este trabajo sentó las bases de la termodinámica de materiales y la ciencia de ingeniería química moderna.</p>
        </div>
        <div className="theory-subsection">
          <h3>Era moderna análisis exergía disponibilidad sistemas complejos</h3>
          <p>El concepto de exergía o disponibilidad representa el trabajo máximo útil que puede obtenerse de un sistema dado un estado de referencia ambiental (típicamente T₀ = 298 K, P₀ = 1 bar). La exergía específica se define como ψ = h - h₀ - T₀(s - s₀), siendo función de la entalpía y entropía del sistema. Esta propiedad mide la "calidad" de la energía y su capacidad real de producir trabajo útil, no solo su cantidad.</p>
          <p>El análisis exergético complementa el balance de energía tradicional (Primera Ley) con un balance de exergía que cuantifica la destrucción irreversible debida a fricción, transferencia de calor con gradientes finitos de temperatura, mezcla irreversible, difusión y estrangulamiento. Esta metodología identifica dónde ocurren las mayores pérdidas en sistemas térmicos y orienta estrategias de mejora basadas en la Segunda Ley.</p>
          <p>En una central termoeléctrica típica, la eficiencia exergética (35-40%) es significativamente menor que la eficiencia energética (42-45%), revelando que no toda la energía tiene el mismo valor termodinámico. El análisis detallado muestra que la caldera destruye aproximadamente el 50% de la exergía, la turbina el 15% y el condensador el 20%. Esta información guía la optimización del diseño considerando inversión de capital, mantenimiento y análisis de ciclo de vida (LCA).</p>
          <p>En el contexto actual de sostenibilidad ambiental y lucha contra el cambio climático, el análisis exergético es fundamental para reducir emisiones de CO₂ y optimizar la transición energética hacia fuentes renovables (solar, eólica, biomasa, hidrógeno verde), buscando la descarbonización progresiva de la economía global.</p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>🎭</span> Curiosidades y Anécdotas
        </h2>
        <div className="theory-subsection">
          <h3>Sistema cerrado pistón cilindro experimento mental Carnot ciclo</h3>
          <p>En 1824, Sadi Carnot idealizó una máquina térmica perfectamente reversible basada en un cilindro con pistón sin fricción conteniendo un gas ideal. El proceso concebido era cuasiestático, es decir, infinitamente lento para mantener el equilibrio termodinámico en cada instante. El ciclo consistía en dos isotermas (expansión y compresión a temperatura constante) y dos adiabáticas (sin intercambio de calor), operando entre dos focos térmicos a temperaturas T_H (alta) y T_C (baja).</p>
          <p>La genialidad de Carnot fue demostrar que el rendimiento máximo posible es η = 1 - T_C/T_H, una expresión que depende únicamente de las temperaturas de los focos y es completamente independiente de la sustancia de trabajo utilizada (vapor de agua, aire o cualquier otro gas). Este resultado universal estableció un límite fundamental para todas las máquinas térmicas, anticipando la formulación de la Segunda Ley de la Termodinámica.</p>
          <p>Lo extraordinario es que este ciclo de Carnot jamás se ha realizado experimentalmente de manera perfecta, ya que requeriría fricción absolutamente nula, tiempo infinito de operación y reversibilidad total. Sin embargo, esta abstracción matemática reveló verdades profundas sobre los límites termodinámicos, la imposibilidad de convertir completamente calor en trabajo, y la existencia de una temperatura absoluta mínima (cero Kelvin). El ciclo de Carnot sigue siendo el fundamento teórico para el diseño y optimización de máquinas térmicas reales, guiándonos en la búsqueda de aproximaciones cada vez mejores al ideal.</p>
        </div>
        <div className="theory-subsection">
          <h3>Bomba vacío sistema aislado experimento Torricelli presión atmosférica</h3>
          <p>En 1643, Evangelista Torricelli, discípulo de Galileo, realizó un experimento histórico que revolucionó nuestra comprensión de la presión atmosférica. Tomó un tubo de vidrio de aproximadamente 1 metro de longitud cerrado en un extremo, lo llenó completamente con mercurio y lo invirtió dentro de una cuba también llena de mercurio. La columna descendió hasta estabilizarse en aproximadamente 760 mm de altura, dejando un espacio vacío en la parte superior conocido como "vacío de Torricelli" — la primera producción artificial de vacío en un laboratorio.</p>
          <p>Este experimento demostró elegantemente que la presión atmosférica (aproximadamente 101,325 Pa al nivel del mar) equilibra exactamente el peso de la columna de mercurio. Utilizando la ecuación de presión hidrostática P = ρgh, con la densidad del mercurio ρ = 13,534 kg/m³, la gravedad g = 9.81 m/s² y la altura h = 0.76 m, obtenemos un cálculo que coincide perfectamente con la presión atmosférica medida.</p>
          <p>El descubrimiento generó intensa controversia en la época, desafiando la doctrina aristotélica del "horror vacui" (la naturaleza aborrece el vacío). Blaise Pascal confirmó definitivamente la hipótesis en 1648 llevando un barómetro a la cima del Puy-de-Dôme en Francia, demostrando que la presión atmosférica disminuye con la altitud. Esta invención del barómetro tuvo aplicaciones trascendentales en meteorología, aviación, navegación y el desarrollo de la física fundamental, además de establecer el concepto de sistema aislado para experimentos controlados.</p>
        </div>
        <div className="theory-subsection">
          <h3>Sistema abierto corazón humano bomba biológica flujo continuo</h3>
          <p>El corazón humano es una fascinante bomba biológica de cuatro cavidades (dos aurículas y dos ventrículos) que funciona como un sistema abierto perfecto con volumen de control y flujo sanguíneo continuo. Bombea aproximadamente 5 L/min en reposo, pero puede alcanzar hasta 25 L/min durante ejercicio intenso. Opera con presiones de 120 mmHg (sistólica) y 80 mmHg (diastólica), completando cada ciclo cardíaco en aproximadamente 0.8 segundos a una frecuencia promedio de 75 latidos por minuto.</p>
          <p>El sistema incluye válvulas unidireccionales (tricúspide, mitral, aórtica y pulmonar) que evitan el reflujo sanguíneo y optimizan la eficiencia del bombeo. El trabajo mecánico del miocardio durante la contracción (sístole) y relajación (diástole) permite el llenado ventricular y la eyección de sangre hacia las arterias sistémicas y pulmonares. Desde una perspectiva termodinámica, el balance de masa distingue entre sangre oxigenada y desoxigenada, mientras que el balance de energía considera el metabolismo aeróbico de glucosa que produce ATP.</p>
          <p>La potencia cardíaca es de aproximadamente 1.5 W en reposo pero puede elevarse hasta 8 W durante ejercicio intenso. El miocardio consume alrededor del 10% del oxígeno total del organismo, lo que lo hace particularmente vulnerable a isquemia e infarto cuando la irrigación coronaria se compromete. Este análisis termodinámico del corazón tiene aplicaciones directas en fisiología, medicina, cardiología e ingeniería biomédica, especialmente en el desarrollo de corazones artificiales mecánicos y bioartificiales, y en técnicas de trasplante cardíaco.</p>
        </div>
        <div className="theory-subsection">
          <h3>Universo sistema aislado termodinámico entropía máxima destino</h3>
          <p>En cosmología, el universo observable se considera el sistema aislado por excelencia desde su origen hace 13.8 mil millones de años en el Big Bang. Su composición actual incluye aproximadamente 68% de energía oscura responsable de la expansión acelerada, 27% de materia oscura y solo 5% de materia bariónica (la materia ordinaria que conocemos). Según la Segunda Ley de la Termodinámica, la entropía del universo aumenta constantemente a través de procesos irreversibles.</p>
          <p>La formación de estrellas, galaxias y agujeros negros, aunque aparentemente crea orden local, aumenta la entropía global del universo. Incluso los agujeros negros, mediante la radiación de Hawking descubierta teóricamente en 1974, eventualmente se evaporarán completamente. El destino final predicho es la "muerte térmica" (heat death), un estado de equilibrio termodinámico con temperatura uniforme cercana a 10⁻³⁰ K, entropía máxima y desorden absoluto, donde no existirán gradientes de energía y será imposible realizar trabajo o sostener vida y estructuras organizadas.</p>
          <p>Esta escala temporal es inconcebiblemente vasta, estimada en 10¹⁰⁰ años, convirtiendo esta predicción en una profunda especulación científico-filosófica sobre el tiempo y la "flecha termodinámica" que marca la dirección del pasado hacia el futuro. La paradoja fascinante es que las leyes físicas fundamentales son reversibles microscópicamente, mientras que la experiencia macroscópica cotidiana muestra irreversibilidad absoluta (envejecimiento, desorden creciente). Esta asimetría temporal permanece como uno de los misterios más profundos sobre la naturaleza de la realidad y el universo.</p>
        </div>
      </div>

      <div className="theory-summary-section">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <ul>
          <li><strong>Definición de sistema termodinámico:</strong> Una porción específica del universo separada para estudio mediante fronteras reales o imaginarias, caracterizada por propiedades macroscópicas y su capacidad de intercambiar energía y materia con el entorno.</li>
          <li><strong>Clasificación según intercambios:</strong> Los sistemas se clasifican en abiertos (intercambian energía y materia), cerrados (solo energía), y aislados (ningún intercambio). Esta distinción es fundamental para seleccionar las ecuaciones de balance apropiadas.</li>
          <li><strong>Propiedades extensivas vs intensivas:</strong> Las extensivas (masa, volumen, energía) dependen de la cantidad de materia y son aditivas. Las intensivas (temperatura, presión, densidad) son independientes del tamaño del sistema y caracterizan condiciones locales.</li>
          <li><strong>Propiedades específicas:</strong> Se obtienen dividiendo propiedades extensivas entre la masa, convirtiéndolas en intensivas útiles para comparaciones y tablas termodinámicas (v = V/m, h = H/m, s = S/m).</li>
          <li><strong>Equilibrio termodinámico:</strong> Condición donde todas las propiedades macroscópicas permanecen constantes. Requiere equilibrio térmico (temperatura uniforme), mecánico (presión uniforme), químico (potenciales químicos iguales) y de fases (coexistencia estable).</li>
          <li><strong>Procesos y reversibilidad:</strong> Los procesos cuasiestáticos ocurren infinitamente lentos manteniendo equilibrio interno. Los reversibles pueden invertirse sin cambios en sistema ni entorno, mientras que los irreversibles (procesos reales) generan entropía y pérdidas de energía disponible.</li>
        </ul>
      </div>
    </>
  );
};

export default SistemasTermodinamicosTheory;