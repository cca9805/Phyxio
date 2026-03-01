import { TheorySection, Concept } from '../../../../components/TheoryV2';
import { theoreticalConcepts } from './definitions.js';

export const metadata = {
  titulo: "Frontera y Entorno",
  descripcion: "Definición precisa de fronteras del sistema y caracterización de las interacciones con el entorno",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO'],
  isTheoryOnly: true
};

const FronteraYEntornoTheory = () => {
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

      
      <TheorySection title="Concepto de Frontera" variant="theoretical">
        <Concept title="Concepto de Frontera" variant="detailed">
          <div className="detailed-content">
            
          <p>La frontera es el límite que define qué pertenece al sistema y qué al entorno. Su correcta definición es crucial para el análisis termodinámico.</p>
          
          <div class="boundary-types">
            <div class="boundary-type">
              <h4>🔲 Fronteras Físicas</h4>
              <ul>
                <li>Paredes sólidas: Recipientes, tuberías, cilindros</li>
                <li>Membranas: Permeables o semipermeables</li>
                <li>Interfaces: Superficie líquido-vapor</li>
              </ul>
            </div>
            
            <div class="boundary-type">
              <h4>📐 Fronteras Imaginarias</h4>
              <ul>
                <li>Superficies de control: Para análisis de flujo</li>
                <li>Planos de simetría: En sistemas simétricos</li>
                <li>Límites conceptuales: Para aislar fenómenos</li>
              </ul>
            </div>
          </div>
          
          <div class="boundary-properties">
            <h4>🏗️ Propiedades de las Fronteras</h4>
            <div class="property-grid">
              <div class="property">
                <h5>Rigidez</h5>
                <p>Rígida: No permite cambio de volumen</p>
                <p>Móvil: Permite expansión/compresión</p>
              </div>
              <div class="property">
                <h5>Permeabilidad</h5>
                <p>Impermeable: No permite paso de materia</p>
                <p>Permeable: Permite intercambio de masa</p>
              </div>
              <div class="property">
                <h5>Conductividad Térmica</h5>
                <p>Adiabática: No permite transferencia de calor</p>
                <p>Diatérmica: Permite intercambio térmico</p>
              </div>
            </div>
          </div>
        
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Caracterización del Entorno" variant="theoretical">
        <Concept title="Caracterización del Entorno" variant="detailed">
          <div className="detailed-content">
            
          <p>El entorno o alrededores comprende todo lo que rodea al sistema y puede interactuar con él.</p>
          
          <div class="environment-concepts">
            <div class="env-concept">
              <h4>🌍 Entorno Inmediato</h4>
              <p>La porción del entorno que está en contacto directo con la frontera del sistema y puede intercambiar energía o materia con él.</p>
              <ul>
                <li>Afecta directamente al sistema</li>
                <li>Sus propiedades influyen en el comportamiento del sistema</li>
                <li>Debe considerarse en el análisis termodinámico</li>
              </ul>
            </div>
            
            <div class="env-concept">
              <h4>🌌 Entorno Lejano</h4>
              <p>Regiones distantes que no interactúan significativamente con el sistema en la escala de tiempo del proceso estudiado.</p>
              <ul>
                <li>Efecto despreciable en el sistema</li>
                <li>Puede ignorarse en el análisis</li>
                <li>Actúa como reservorio infinito</li>
              </ul>
            </div>
          </div>
          
          <div class="reservoir-types">
            <h4>🏛️ Tipos de Reservorios</h4>
            <div class="reservoir">
              <h5>🌡️ Reservorio Térmico</h5>
              <p>Sistema tan grande que su temperatura permanece constante durante el intercambio de calor.</p>
              <p>Ejemplos: Atmósfera, océanos, hornos industriales</p>
            </div>
            <div class="reservoir">
              <h5>⚖️ Reservorio de Presión</h5>
              <p>Sistema que mantiene presión constante durante el intercambio de trabajo.</p>
              <p>Ejemplos: Atmósfera, sistemas hidráulicos grandes</p>
            </div>
            <div class="reservoir">
              <h5>⚗️ Reservorio de Materia</h5>
              <p>Sistema que mantiene composición constante durante el intercambio de masa.</p>
              <p>Ejemplos: Océanos para vapor de agua, atmósfera para gases</p>
            </div>
          </div>
        
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Interacciones Sistema-Entorno" variant="theoretical">
        <Concept title="Interacciones Sistema-Entorno" variant="detailed">
          <div className="detailed-content">
            
          <p>Las interacciones entre sistema y entorno determinan cómo evoluciona el sistema termodinámico.</p>
          
          <div class="interaction-types">
            <div class="interaction">
              <h4>🔥 Transferencia de Calor</h4>
              <div class="interaction-details">
                <p>Mecanismo: Diferencia de temperatura</p>
                <p>Dirección: De mayor a menor temperatura</p>
                <p>Tipos:</p>
                <ul>
                  <li>Conducción a través de fronteras sólidas</li>
                  <li>Convección en fronteras fluidas</li>
                  <li>Radiación a través del espacio</li>
                </ul>
              </div>
            </div>
            
            <div class="interaction">
              <h4>⚙️ Transferencia de Trabajo</h4>
              <div class="interaction-details">
                <p>Mecanismo: Fuerzas que actúan a través de distancias</p>
                <p>Tipos:</p>
                <ul>
                  <li>Trabajo de frontera: Expansión/compresión</li>
                  <li>Trabajo de eje: Rotación de turbinas/compresores</li>
                  <li>Trabajo eléctrico: Corriente eléctrica</li>
                  <li>Trabajo magnético: Campos magnéticos</li>
                </ul>
              </div>
            </div>
            
            <div class="interaction">
              <h4>💨 Transferencia de Masa</h4>
              <div class="interaction-details">
                <p>Mecanismo: Gradientes de potencial químico</p>
                <p>Formas:</p>
                <ul>
                  <li>Flujo convectivo de fluidos</li>
                  <li>Difusión molecular</li>
                  <li>Evaporación/condensación</li>
                  <li>Reacciones químicas en la frontera</li>
                </ul>
              </div>
            </div>
          </div>
        
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Puntos Clave" variant="theoretical">
        <Concept title="Resumen de Conceptos Fundamentales" variant="summary">
          <div className="key-points-summary">
            <ul className="key-points-list">
              {theoreticalConcepts.keyPoints.map((point, index) => (
                <li key={index} className="key-point">
                  {index + 1}. {point}
                </li>
              ))}
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <div className="theory-subsection">
          <h3>Pared aislante edificio frontera térmica intercambio limitado</h3>
          <p>El muro exterior de una vivienda moderna de 30 cm de espesor actúa como frontera térmica entre el sistema (habitación interior) y el entorno (ambiente exterior). Esta frontera multicapa típicamente incluye ladrillo hueco, 12 cm de aislamiento térmico de lana mineral (λ = 0.035 W/m·K) y yeso interior. En verano, con temperatura interior de 25°C y exterior de 35°C, la diferencia de 10 K genera un flujo térmico hacia el interior.</p>
          <p>La transmitancia térmica U = 0.25 W/m²·K caracteriza la calidad de la frontera, permitiendo calcular el flujo de calor mediante Q = U · A · ΔT. Para una pared de 20 m², la carga térmica será Q = 0.25 × 20 × 10 = 50 W, que debe compensarse con climatización para mantener el confort térmico interior.</p>
          <p>El diseño apropiado de esta frontera es fundamental en arquitectura bioclimática y construcción sostenible. Una frontera bien aislada (U baja) reduce significativamente el consumo energético de calefacción y refrigeración, disminuyendo costos operativos y emisiones de CO₂, cumpliendo con normativas como el Código Técnico de Edificación o estándares Passivhaus.</p>
        </div>
        <div className="theory-subsection">
          <h3>Ventana doble vidrio frontera semipermeable radiación transparente</h3>
          <p>Las ventanas con acristalamiento LOW-E (baja emisividad) representan fronteras selectivas sofisticadas. El recubrimiento de óxidos metálicos (plata o estaño) en la superficie interior permite el paso de luz visible con 80% de transparencia, pero refleja el 70% de la radiación infrarroja térmica, reduciendo drásticamente la transferencia de calor por radiación.</p>
          <p>La cámara intermedia rellena con gas argón de 16 mm (λ = 0.016 W/m·K, inferior al aire con 0.024 W/m·K) minimiza la conducción térmica. El resultado es una transmitancia U = 1.1 W/m²·K, comparada con U = 5.7 W/m²·K de vidrio simple, logrando una reducción de pérdidas térmicas del 80%.</p>
          <p>Esta frontera selectiva crea un "efecto invernadero" beneficioso: permite la entrada de radiación solar visible que calienta el interior, pero impide la salida de radiación infrarroja emitida por objetos interiores. Esta asimetría mejora significativamente la eficiencia energética de edificios, siendo especialmente valiosa en climas fríos donde se busca maximizar ganancias solares mientras se minimizan pérdidas térmicas.</p>
        </div>
        <div className="theory-subsection">
          <h3>Membrana semipermeable ósmosis inversa filtración agua potable</h3>
          <p>En plantas de desalinización por ósmosis inversa, membranas semipermeables de poliamida con poros de 0.0001 μm actúan como fronteras altamente selectivas. Aplicando presión de 25 bar (superior a la presión osmótica natural), se fuerza el paso de moléculas de agua H₂O desde agua salada (35,000 ppm de sólidos disueltos totales) hacia el lado de agua dulce, mientras los iones Na⁺, Cl⁻ y sales minerales son bloqueados con 99% de rechazo.</p>
          <p>El proceso genera dos corrientes: el permeado con 200 ppm de TDS (apta para consumo humano) y el concentrado o salmuera con 70,000 ppm que requiere gestión ambiental apropiada, a menudo mediante recirculación parcial o dilución antes de descarga. La selectividad de esta frontera artificial se basa en exclusión por tamaño molecular y efectos de carga eléctrica superficial.</p>
          <p>Esta tecnología es fundamental para regiones con escasez de agua dulce, especialmente en Medio Oriente, España, Israel y zonas áridas. Las desaladoras modernas producen agua potable sostenible y económicamente viable, siendo esenciales para la seguridad hídrica en el contexto del cambio climático y el crecimiento poblacional.</p>
        </div>
        <div className="theory-subsection">
          <h3>Pulmones alvéolos frontera intercambio gases respiración</h3>
          <p>Los pulmones humanos contienen aproximadamente 300 millones de alvéolos que proporcionan una superficie total de intercambio gaseoso de 70 m² en adultos. La membrana alvéolo-capilar tiene apenas 0.5 μm de espesor, funcionando como frontera biológica de permeabilidad selectiva optimizada para difusión rápida de O₂ y CO₂ entre aire alveolar y sangre capilar.</p>
          <p>El intercambio es impulsado por gradientes de presión parcial: el O₂ alveolar (100 mmHg) difunde hacia sangre venosa (40 mmHg), mientras el CO₂ venoso (46 mmHg) se elimina hacia aire alveolar (40 mmHg). En reposo, se consumen aproximadamente 250 mL/min de O₂ y se producen 200 mL/min de CO₂, tasas que aumentan dramáticamente durante ejercicio intenso.</p>
          <p>Este intercambio gaseoso es esencial para el metabolismo celular aeróbico que produce ATP, la moneda energética de la vida. Alteraciones en esta frontera (enfisema, fibrosis, edema pulmonar) comprometen gravemente el intercambio y pueden ser fatales. La comprensión de esta frontera biológica es fundamental en fisiología, medicina respiratoria, ventilación mecánica y oxigenoterapia para pacientes críticos.</p>
        </div>
        <div className="theory-subsection">
          <h3>Condensador refrigeración frontera móvil fase líquida vapor</h3>
          <p>En el condensador de un sistema de aire acondicionado, el refrigerante R410A entra como vapor sobrecalentado a 80°C y 25 bar, y sale como líquido subenfriado a 40°C y 24.5 bar. La frontera entre las fases líquida y vapor es móvil, avanzando progresivamente a lo largo del serpentín conforme ocurre la condensación, representando un caso fascinante de frontera dinámica interna al sistema.</p>
          <p>El calor latente de condensación (aproximadamente 275 kJ/kg para R410A) se transfiere al aire exterior mediante un ventilador que fuerza 3000 m³/h de aire a 35°C sobre el serpentín. Con un flujo másico de refrigerante de 0.08 kg/s, la potencia térmica disipada es aproximadamente 3.5 kW, que incluye el calor extraído del espacio climatizado más el trabajo del compresor.</p>
          <p>Aunque el proceso es continuo y estacionario a nivel macroscópico, a nivel microscópico la frontera líquido-vapor es dinámica con equilibrio termodinámico local en cada punto del serpentín. La posición de esta frontera móvil depende de las condiciones de operación (flujo de refrigerante, temperatura ambiente, velocidad de aire), y su control apropiado es crucial para la eficiencia del ciclo de refrigeración.</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2><span>📜</span> Historia y Desarrollo</h2>
        <div className="theory-subsection">
          <h3>Siglo XVII Boyle recipiente cerrado frontera impermeable experimentos</h3>
          <p>Robert Boyle (1627-1691) realizó sus célebres experimentos con aire utilizando bomba de vacío y recipientes de vidrio cerrados, estableciendo implícitamente el concepto de frontera física clara que separa el gas contenido del exterior o vacío circundante. Esta frontera rígida e impermeable de vidrio fue esencial para descubrir su famosa ley PV = constante a temperatura fija, la primera cuantificación del comportamiento de gases en sistemas cerrados.</p>
          <p>La definición explícita de la frontera del sistema permitió el control de variables experimentales necesario para la reproducibilidad de resultados, marcando el inicio del método científico experimental moderno en termodinámica. Sin una frontera claramente definida, las propiedades del sistema no podrían medirse de manera consistente ni relacionarse cuantitativamente.</p>
          <p>El trabajo de Boyle estableció que la correcta definición de fronteras no es un mero formalismo, sino una necesidad práctica fundamental para cualquier análisis científico riguroso de sistemas físicos, principio que permanece válido hasta nuestros días en todas las ramas de la ciencia experimental.</p>
        </div>
        <div className="theory-subsection">
          <h3>Siglo XIX termodinámica clásica definición sistema frontera entorno</h3>
          <p>Durante el desarrollo de la termodinámica clásica por Carnot, Clausius, Kelvin y otros en el siglo XIX, la formulación de las leyes Primera (conservación de energía) y Segunda (entropía) requirió una definición rigurosa de sistema termodinámico, frontera y entorno. Se volvió evidente que sin especificar claramente qué constituye el sistema y qué queda fuera, las leyes termodinámicas no podían aplicarse de manera consistente.</p>
          <p>La clasificación sistemática de fronteras según sus propiedades físicas emergió naturalmente: diatérmicas (permiten transferencia de calor) vs adiabáticas (no lo permiten), permeables vs impermeables (intercambio de materia), y móviles vs fijas (trabajo de frontera). Esta tipología permitió analizar sistemáticamente los intercambios de energía y materia entre sistema y entorno.</p>
          <p>El análisis de procesos reversibles e irreversibles también dependió críticamente de cómo se definen las fronteras. Un proceso puede ser reversible dentro del sistema pero irreversible considerando sistema + entorno. Esta precisión conceptual estableció el fundamento matemático y físico de la termodinámica moderna, convirtiendo una colección de observaciones empíricas en una disciplina científica rigurosa y predictiva.</p>
        </div>
        <div className="theory-subsection">
          <h3>Siglo XX mecánica estadística Boltzmann frontera estadística</h3>
          <p>Ludwig Boltzmann proporcionó la interpretación microscópica de la frontera como una superficie de control en el espacio de fases (configuracional y de momentos) que delimita las partículas pertenecientes al sistema. Esta visión estadística introdujo los conceptos de ensemble microcanónico (sistema aislado, energía fija), canónico (temperatura fija, intercambio de energía) y gran canónico (potencial químico fijo, intercambio de energía y partículas).</p>
          <p>Desde esta perspectiva, las propiedades macroscópicas del sistema son promedios estadísticos sobre los microestados accesibles, y la frontera determina qué microestados se incluyen en el promedio. Las fluctuaciones de propiedades macroscópicas cerca del equilibrio reflejan las fluctuaciones microscópicas de partículas que cruzan la frontera o interactúan cerca de ella.</p>
          <p>La hipótesis ergódica establece la equivalencia entre promedios temporales y promedios sobre el ensemble, fundamental para conectar la mecánica estadística con mediciones experimentales. Esta teoría ha sido esencial para la física estadística cuántica moderna y encuentra aplicación directa en simulaciones computacionales mediante Métodos de Monte Carlo y dinámica molecular, herramientas indispensables en ciencia de materiales, química computacional y física de materia condensada.</p>
        </div>
        <div className="theory-subsection">
          <h3>Era moderna nanotecnología fronteras atómicas cuánticas confinamiento</h3>
          <p>En materiales nanoestructurados con dimensiones de 1-100 nm, las propiedades interfaciales dominan sobre las volumétricas debido a la altísima relación superficie/volumen. Los puntos cuánticos (quantum dots), por ejemplo, confínan electrones en dimensiones comparables a su longitud de onda de de Broglie, creando niveles de energía discretos y efectos de tamaño cuántico que modifican dramáticamente las propiedades ópticas y electrónicas del material.</p>
          <p>Las aplicaciones tecnológicas son vastas: en electrónica y optoelectrónica se utilizan en LEDs de alta eficiencia y displays QLED de nueva generación. En fotovoltaica, las células solares de tercera generación basadas en puntos cuánticos alcanzan eficiencias de conversión superiores al 30%, superando potencialmente el límite de Shockley-Queisser (33.7%) para células de unión simple mediante aprovechamiento de múltiples longitudes de onda.</p>
          <p>En medicina, las nanopartículas funcionalizadas permiten drug delivery (liberación controlada de fármacos) y terapia dirigida contra cáncer, donde las fronteras nanoestructuradas se diseñan para responder a estímulos específicos (pH, temperatura, campo magnético) liberando el fármaco selectivamente en tejido tumoral. También se utilizan como agentes de contraste en imagenología médica avanzada, mejorando el diagnóstico precoz de enfermedades oncológicas y neurodegenerativas.</p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span>🎭</span> Curiosidades y Anécdotas</h2>
        <div className="theory-subsection">
          <h3>Hemisferios Magdeburgo vacío demostración espectacular presión atmosférica</h3>
          <p>Otto von Guericke 1602-1686 alcalde Magdeburgo inventor bomba vacío 1650 experimento público famoso dos hemisferios bronce 50cm diámetro unidos sellados evacuación aire interior vacío parcial presión 0.1bar equipos 8caballos cada lado intentaron separar imposible fuerza adhesión presión atmosférica exterior 1bar diferencia 0.9bar superficie πr²=0.2m² fuerza total 18000N=1800kg demostración poder atmósfera existencia vacío posible contra aristotélicos horror vacui.</p>
        </div>
        <div className="theory-subsection">
          <h3>Célula membrana plasmática frontera viva selectividad inteligente</h3>
          <p>Bicapa lipídica fosfolípidos cabeza hidrófila cola hidrofóbica espesor 7-10nm frontera celular separa citoplasma medio extracelular permeabilidad selectiva canales iónicos Na⁺ K⁺ Ca²⁺ Cl⁻ bomba sodio-potasio ATPasa transporte activo 3Na⁺ salida 2K⁺ entrada consumo ATP mantiene gradiente electroquímico potencial membrana -70mV reposo neurona despolarización acción potencial propagación señal nerviosa sinapsis neurotransmisor comunicación cerebro pensamiento conciencia base bioquímica eléctrica vida inteligencia.</p>
        </div>
        <div className="theory-subsection">
          <h3>Agujero negro horizonte sucesos frontera causal unidireccional</h3>
          <p>Radio Schwarzschild r_s=2GM/c² masa M agujero negro Sagitario A* centro Vía Láctea 4millones M☉ radio 12millones km 0.08UA horizonte sucesos superficie esférica frontera causal información materia energía entrada imposible salida velocidad escape c velocidad luz infinita relatividad general Einstein curvatura espacio-tiempo extrema singularidad central densidad infinita física clásica colapso teoría, paradoja información Hawking 1974 radiación térmica evaporación agujero negro temperatura T=ℏc³/8πGMk_B inversamente proporcional masa tiempo evaporación t∼(M/M☉)³10⁶⁷años debate entropía información cuántica conservación unitaridad mecánica cuántica vs relatividad general incompatibilidad fundamental gravedad cuántica teoría cuerdas loop gravedad pendiente unificación física.</p>
        </div>
        <div className="theory-subsection">
          <h3>Termopan invención accidental ahorro energético millones hogares</h3>
          <p>Charles Haven 1930 inventor estadounidense trabajaba aislamiento térmico descubrió accidentalmente doble vidrio separado cámara aire sellada reducción dramática transmisión calor patent patente 1934 fabricación industrial ventanas termopan difusión construcción 1950s-1960s Europa Norteamérica regiones frías, evolución tecnológica triple vidrio gases nobles argón kriptón conductividad λ=0.016-0.009W/m·K inferior aire 0.024W/m·K recubrimientos LOW-E emisividad ε=0.10-0.20 vs vidrio normal 0.84 transmitancia U=0.7-1.4W/m²·K ahorro calefacción refrigeración 30-50% consumo energético anual edificio amortización inversión 5-8años normativa construcción CTE código técnico edificación España Passivhaus Alemania estándar internacional eficiencia energética consumo casi nulo sostenibilidad medioambiental.</p>
        </div>
      </div>

      <div className="theory-summary-section">
        <h2><span>📝</span> Resumen</h2>
        <ul>
          <li><strong>Frontera como superficie de separación:</strong> Define qué pertenece al sistema y qué al entorno. Puede ser real (paredes físicas, membranas) o imaginaria (superficies de control, planos de simetría). Su correcta definición es el primer paso esencial para cualquier análisis termodinámico riguroso.</li>
          <li><strong>Clasificación según propiedades:</strong> Las fronteras se caracterizan por rigidez (rígidas vs móviles, permitiendo trabajo de frontera), permeabilidad (impermeables vs permeables a materia) y conductividad térmica (adiabáticas vs diatérmicas, bloqueando o permitiendo transferencia de calor).</li>
          <li><strong>Entorno inmediato vs lejano:</strong> El entorno inmediato interactúa directamente con el sistema y debe considerarse en el análisis. El entorno lejano tiene efecto despreciable y puede ignorarse. Los reservorios (térmicos, de presión, de materia) son tan grandes que mantienen propiedades constantes durante la interacción.</li>
          <li><strong>Interacciones sistema-entorno:</strong> Incluyen transferencia de calor (conducción, convección, radiación) impulsada por gradientes de temperatura, trabajo (frontera, eje, eléctrico, magnético) por fuerzas a través de distancias, y transferencia de masa por flujo convectivo, difusión o reacciones químicas.</li>
          <li><strong>Fronteras selectivas avanzadas:</strong> Membranas semipermeables, recubrimientos LOW-E, catalizadores heterogéneos y fronteras biológicas (membranas celulares, alvéolos pulmonares) exhiben selectividad sofisticada según tamaño molecular, carga eléctrica, longitud de onda o afinidad química.</li>
          <li><strong>Impacto en análisis termodinámico:</strong> La definición apropiada de fronteras determina qué ecuaciones de balance aplicar (masa, energía, momento), qué intercambios considerar y cómo formular las condiciones de contorno. Errores en esta definición conducen a análisis incorrectos y predicciones erróneas.</li>
        </ul>
      </div>
    </>
  );
};

export default FronteraYEntornoTheory;