import { TheorySection, Concept } from '../../../../components/TheoryV2';
import { theoreticalConcepts } from './definitions.js';

export const metadata = {
  titulo: "Estado y Equilibrio Termodinámico",
  descripcion: "Conceptos fundamentales de estado termodinámico y condiciones de equilibrio",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO'],
  isTheoryOnly: true
};

const EstadoYEquilibrioTheory = () => {
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

      
      <TheorySection title="Estado Termodinámico" variant="theoretical">
        <Concept title="Estado Termodinámico" variant="detailed">
          <div className="detailed-content">
            
          <p>El estado termodinámico es la condición de un sistema definida por los valores de sus propiedades termodinámicas en un momento dado.</p>
          
          <div class="state-concepts">
            <div class="concept-detail">
              <h4>📊 Variables de Estado</h4>
              <p>Son las propiedades independientes que definen completamente el estado del sistema:</p>
              <ul>
                <li>Propiedades primarias: Presión (P), Volumen (V), Temperatura (T)</li>
                <li>Propiedades derivadas: Energía interna (U), Entalpía (H), Entropía (S)</li>
                <li>Número mínimo: Para un sistema simple, dos propiedades intensivas independientes</li>
              </ul>
            </div>
            
            <div class="concept-detail">
              <h4>🔗 Funciones de Estado</h4>
              <p>Propiedades que dependen únicamente del estado actual del sistema, no del camino seguido:</p>
              <ul>
                <li>Su valor es independiente de la historia del sistema</li>
                <li>Su diferencial es exacta: ∫dF = F₂ - F₁</li>
                <li>Ejemplos: U, H, S, G, A (potenciales termodinámicos)</li>
              </ul>
            </div>
            
            <div class="concept-detail">
              <h4>📈 Ecuaciones de Estado</h4>
              <p>Relaciones matemáticas entre las variables de estado:</p>
              <ul>
                <li>Gas ideal: PV = nRT</li>
                <li>Van der Waals: (P + a/V²)(V - b) = RT</li>
                <li>Virial: PV = RT(1 + B/V + C/V² + ...)</li>
              </ul>
            </div>
          </div>
        
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Equilibrio Termodinámico" variant="theoretical">
        <Concept title="Equilibrio Termodinámico" variant="detailed">
          <div className="detailed-content">
            
          <p>Un sistema está en equilibrio termodinámico cuando todas sus propiedades macroscópicas permanecen constantes en el tiempo, sin influencias externas netas.</p>
          
          <div class="equilibrium-types">
            <div class="equilibrium-type">
              <h4>🌡️ Equilibrio Térmico</h4>
              <div class="eq-description">
                <p>Condición: Temperatura uniforme en todo el sistema</p>
                <p>Criterio: T₁ = T₂ = ... = Tₙ</p>
                <p>Significado: No hay transferencia neta de calor entre partes del sistema</p>
                <p>Ejemplo: Un café que alcanza la temperatura ambiente</p>
              </div>
            </div>
            
            <div class="equilibrium-type">
              <h4>⚖️ Equilibrio Mecánico</h4>
              <div class="eq-description">
                <p>Condición: Presión uniforme (sin fuerzas externas)</p>
                <p>Criterio: P₁ = P₂ = ... = Pₙ</p>
                <p>Significado: No hay movimiento macroscópico de materia</p>
                <p>Ejemplo: Gas en un recipiente sin gradientes de presión</p>
              </div>
            </div>
            
            <div class="equilibrium-type">
              <h4>⚗️ Equilibrio Químico</h4>
              <div class="eq-description">
                <p>Condición: Potencial químico uniforme para cada especie</p>
                <p>Criterio: μᵢ₁ = μᵢ₂ = ... = μᵢₙ para cada componente i</p>
                <p>Significado: No hay reacciones químicas netas</p>
                <p>Ejemplo: Mezcla de gases sin reacción</p>
              </div>
            </div>
            
            <div class="equilibrium-type">
              <h4>🔄 Equilibrio de Fases</h4>
              <div class="eq-description">
                <p>Condición: Coexistencia estable de fases</p>
                <p>Criterio: T, P y μ iguales en todas las fases</p>
                <p>Significado: No hay transferencia neta de masa entre fases</p>
                <p>Ejemplo: Agua líquida en equilibrio con su vapor</p>
              </div>
            </div>
          </div>
        
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Procesos Cuasiestáticos y Reversibilidad" variant="theoretical">
        <Concept title="Procesos Cuasiestáticos y Reversibilidad" variant="detailed">
          <div className="detailed-content">
            
          <div class="process-concepts">
            <div class="process-type">
              <h4>🐌 Procesos Cuasiestáticos</h4>
              <div class="process-description">
                <p>Definición: Proceso que ocurre tan lentamente que el sistema pasa por una sucesión de estados de equilibrio.</p>
                <p>Características:</p>
                <ul>
                  <li>Velocidad infinitesimalmente lenta</li>
                  <li>Sistema siempre en equilibrio interno</li>
                  <li>Proceso idealmente reversible</li>
                  <li>Representable como línea en diagrama de estado</li>
                </ul>
                <p>Importancia: Permite el análisis termodinámico riguroso</p>
              </div>
            </div>
            
            <div class="process-type">
              <h4>↩️ Procesos Reversibles</h4>
              <div class="process-description">
                <p>Definición: Proceso que puede invertirse sin dejar cambios en el sistema ni en el entorno.</p>
                <p>Condiciones:</p>
                <ul>
                  <li>Ausencia de fricción</li>
                  <li>Sin gradientes finitos de temperatura</li>
                  <li>Sin gradientes finitos de presión</li>
                  <li>Sin efectos de histéresis</li>
                </ul>
                <p>Significado: Proceso ideal que maximiza el trabajo útil</p>
              </div>
            </div>
            
            <div class="process-type">
              <h4>↪️ Procesos Irreversibles</h4>
              <div class="process-description">
                <p>Definición: Proceso real que no puede invertirse completamente.</p>
                <p>Causas de irreversibilidad:</p>
                <ul>
                  <li>Fricción mecánica</li>
                  <li>Transferencia de calor con diferencia finita de temperatura</li>
                  <li>Expansión libre de gases</li>
                  <li>Mezcla espontánea</li>
                  <li>Reacciones químicas espontáneas</li>
                </ul>
                <p>Consecuencia: Generación de entropía</p>
              </div>
            </div>
          </div>
        
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Criterios de Equilibrio y Estabilidad" variant="theoretical">
        <Concept title="Criterios de Equilibrio y Estabilidad" variant="detailed">
          <div className="detailed-content">
            
          <div class="stability-criteria">
            <h4>📐 Criterios Matemáticos de Equilibrio</h4>
            
            <div class="criterion">
              <h5>🎯 Equilibrio Estable</h5>
              <p>El sistema regresa al equilibrio tras pequeñas perturbaciones restauración posición original estabilidad mecánica térmica química análisis derivadas segundas potenciales termodinámicos convexidad funciones condiciones suficientes necesarias existencia mínimo local global cuenca atracción:</p>
              <ul>
                <li>Criterio energético: Energía interna mínima (a S,V constantes) derivada segunda positiva convexidad función</li>
                <li>Criterio entrópico: Entropía máxima (a U,V constantes) derivada segunda negativa concavidad máximo entropía</li>
                <li>Criterio de Gibbs: Energía libre de Gibbs mínima (a T,P constantes) mínimo función potencial condiciones laboratorio</li>
                <li>Criterio Helmholtz: Energía libre Helmholtz mínima (a T,V constantes) sistemas volumen fijo temperatura controlada</li>
                <li>Condiciones estabilidad térmica capacidad calorífica positiva mecánica compresibilidad isoterma positiva difusional coeficiente difusión positivo</li>
              </ul>
            </div>
            
            <div class="criterion">
              <h5>⚖️ Equilibrio Inestable</h5>
              <p>Pequeñas perturbaciones alejan al sistema del equilibrio divergencia exponencial trayectoria separación estado inicial inestabilidad intrínseca máximo local energía silla montar topología espacio fases:</p>
              <ul>
                <li>Derivadas segundas negativas energía interna convexidad invertida máximo local energía</li>
                <li>Sistemas metaestables sobresaturación supersaturación sobrefusión barrera energética activación nucleación transición fase</li>
                <li>Ejemplos físicos bola cima montaña lápiz vertical punta inversión péndulo arriba equilibrio inestable perturbación caída</li>
                <li>Transiciones fase primer orden discontinuidad derivadas primera volumen entropía coexistencia fases metaestabilidad temporal</li>
              </ul>
            </div>
            
            <div class="criterion">
              <h5>🌊 Equilibrio Metaestable</h5>
              <p>Estado aparentemente estable temporalmente duradero pero fundamentalmente inestable mínimo local no global energía libre barrera energética impide transición espontánea estado verdadero equilibrio mínimo absoluto cinética lenta activación térmica túnel cuántico fluctuaciones estadísticas superan barrera nucleación:</p>
              <ul>
                <li>Sobrefusión agua líquida -15°C hielo cristalización súbita nucleación impurezas rugosidad pared recipiente</li>
                <li>Supersaturación vapor agua nubes atmósfera condensación precipitación lluvia nieve partículas núcleos condensación aerosoles</li>
                <li>Diamante condiciones normales grafito estable termodinámicamente barrera enorme transformación diamante metaestable indefinidamente joyas gemas</li>
                <li>Vidrio sólido amorfo líquido subenfriado relajación estructural viscosidad alta 10¹²Pa·s temperatura transición vítrea T_g cristalización evitada enfriamiento rápido temple</li>
              </ul>
            </div>
            
            <div class="criterion">
              <h5>⚡ Fluctuaciones y Teorema de Fluctuación-Disipación</h5>
              <p>Equilibrio termodinámico no estado estático sino dinámico fluctuaciones microscópicas continuas propiedades macroscópicas promedio temporal espacial ensemble estadístico desviaciones cuadráticas medias relacionadas respuesta perturbaciones externas teorema fluctuación-disipación Einstein Onsager Kubo fórmula Green-Kubo coeficientes transporte integrales autocorrelación funciones respuesta lineal:</p>
              <ul>
                <li>Fluctuaciones energía ⟨(ΔU)²⟩=k_BT²C_V proporcionales capacidad calorífica temperatura absoluta Boltzmann</li>
                <li>Fluctuaciones densidad ⟨(Δρ)²⟩ relacionadas compresibilidad isoterma dispersión luz Rayleigh opalescencia crítica punto crítico divergencia</li>
                <li>Movimiento browniano Einstein 1905 difusión partículas ⟨x²⟩=2Dt coeficiente difusión D=k_BT/6πηr Stokes radio η viscosidad</li>
                <li>Ruido térmico Johnson-Nyquist resistencia eléctrica voltaje fluctuaciones ⟨V²⟩=4k_BTRΔf ancho banda temperatura electrónica amplificadores límite detección señal</li>
              </ul>
            </div>
          </div>
        
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Transiciones de Fase y Diagrama de Fases" variant="theoretical">
        <Concept title="Transiciones de Fase y Diagrama de Fases" variant="detailed">
          <div className="detailed-content">
            
          <div class="phase-transitions">
            <h4>🔄 Clasificación de Transiciones de Fase</h4>
            
            <div class="transition-type">
              <h5>1️⃣ Transiciones de Primer Orden</h5>
              <p>Discontinuidad derivadas primera energía libre Gibbs volumen entropía calor latente absorción emisión energía coexistencia fases temperatura presión transición isotérmica isobárica:</p>
              <ul>
                <li>Fusión sólido-líquido hielo agua 0°C 1atm calor latente 334kJ/kg volumen disminuye 9% agua anomalía densidad máxima 4°C</li>
                <li>Vaporización líquido-vapor agua 100°C 1atm calor latente 2257kJ/kg ebullición evaporación sublimación sólido-vapor hielo CO₂ seco</li>
                <li>Solidificación cristalización nucleación crecimiento cristales red ordenada periódica difracción rayos X estructura cristalina</li>
                <li>Condensación vapor-líquido nucleación homogénea heterogénea gotas supersaturación crítica radio Kelvin presión vapor curvatura</li>
              </ul>
            </div>
            
            <div class="transition-type">
              <h5>2️⃣ Transiciones de Segundo Orden</h5>
              <p>Continuidad derivadas primera discontinuidad derivadas segunda capacidad calorífica compresibilidad expansividad térmica sin calor latente cambio simetría orden parámetro crítico exponentes universales grupo renormalización Wilson:</p>
              <ul>
                <li>Ferromagnetismo hierro cobalto níquel temperatura Curie T_C=770°C hierro magnetización espontánea desaparece paramagnético ordenamiento espines dominios magnéticos</li>
                <li>Superconductividad resistencia eléctrica cero temperatura crítica T_c superconductores convencionales BCS teoría Cooper pares electrones alta temperatura cupratos T_c=135K presión</li>
                <li>Superfluidez helio-4 temperatura lambda λ=2.17K viscosidad cero flujo sin fricción efecto fuente condensado Bose-Einstein coherencia cuántica</li>
                <li>Transición orden-desorden aleaciones binarias cristalinas orden parámetro ocupación sitios red temperatura crítica simetría roturas</li>
              </ul>
            </div>
            
            <div class="transition-type">
              <h5>📊 Diagrama de Fases P-T</h5>
              <p>Representación gráfica regiones estabilidad fases sólido líquido vapor líneas equilibrio bifásico coexistencia dos fases temperatura presión puntos especiales triple crítico topología compleja sustancias polimorfismo múltiples fases sólidas:</p>
              <ul>
                <li>Punto triple coexistencia tres fases invariante temperatura presión únicas agua 273.16K 611.657Pa definición escala Kelvin antigua</li>
                <li>Punto crítico límite superior región bifásica líquido-vapor distinción desaparece fluido supercrítico propiedades intermedias agua 374°C 221bar CO₂ 31°C 73.8bar</li>
                <li>Línea fusión pendiente positiva mayoría sustancias negativa agua hielo presión favorece líquida volumen menor patinaje hielo presión cuchillas</li>
                <li>Línea vaporización exponencial Clausius-Clapeyron dp/dT=L/TΔv presión vapor aumenta exponencial temperatura calor latente L diferencia volumen Δv</li>
              </ul>
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
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>Refrigerador doméstico equilibrio térmico estabilización temperatura</h3>
          <p>El refrigerador doméstico es un ejemplo cotidiano de sistema que busca constantemente el equilibrio térmico dinámico. El interior mantiene temperaturas objetivo de -18°C en el congelador y 4°C en el compartimento fresco mediante un termostato electrónico con sensor NTC (coeficiente de temperatura negativo) que controla el compresor en ciclos ON-OFF de 15-25 minutos.</p>
          <p>El estado de equilibrio térmico se alcanza cuando el flujo de calor entrante desde el exterior (Q_entrada) a través del aislamiento de poliuretano (λ = 0.025 W/m·K, espesor 5 cm) es exactamente compensado por la extracción de calor del evaporador (Q_salida). La potencia de refrigeración típica es de 150-300 W, suficiente para manejar la carga térmica de los alimentos almacenados, las aperturas de puerta y la infiltración de aire ambiente.</p>
          <p>En estado estacionario, la temperatura se mantiene constante con fluctuaciones de ±1°C debido a la banda muerta de histeresis del termostato, que evita ciclos demasiado frecuentes y el consecuente desgaste del compresor. Los refrigeradores modernos de clase energética A+++ consumen 250-400 kWh anuales, cumpliendo con estrictas normativas europeas de eficiencia energética que minimizan el impacto ambiental y los costos operativos.</p>
        </div>
        <div className="theory-subsection">
          <h3>Calentador agua hogar estado transitorio calentamiento equilibrio</h3>
          <p>Un termo eléctrico de 80 litros con resistencia de 2000 W ejemplifica perfectamente la transición entre estados termodinámicos. Para calentar el agua desde 15°C inicial hasta 60°C final, el tiempo de calentamiento se calcula mediante t = mcΔT/P, donde m = 80 kg, c = 4.18 kJ/kg·K, ΔT = 45 K y P = 2 kW, resultando en aproximadamente 1.9 horas. Durante este proceso transitorio, la temperatura aumenta gradualmente siguiendo una curva exponencial de primer orden.</p>
          <p>Una vez alcanzado el equilibrio térmico a 60°C, el termostato desconecta la resistencia. Sin embargo, existen pérdidas de calor a través del aislamiento de lana de vidrio (λ = 0.04 W/m·K, espesor 3 cm), con un flujo térmico exterior de Q_perdida = 10-20 W. Esto causa un enfriamiento lento de aproximadamente 5°C en 24 horas sin uso.</p>
          <p>El termostato reactiva el calentamiento cuando la temperatura desciende del límite inferior, manteniendo el agua en una banda de 58-62°C que asegura confort para duchas, cocina y lavado. Este control de histeiresis optimiza el consumo energético evitando ciclos demasiado frecuentes y prolongando la vida útil del equipo.</p>
        </div>
        <div className="theory-subsection">
          <h3>Habitación climatizada aire acondicionado control temperatura confort</h3>
          <p>Consideremos un dormitorio de 20 m² y 50 m³ de volumen equipado con un aire acondicionado split de 3 kW de capacidad de refrigeración. Con temperatura exterior de 35°C y objetivo interior de 24°C, el sistema en modo automático utiliza un compresor inverter de velocidad variable para ajuste continuo según la carga térmica. Las ventanas con doble acristalamiento (U = 1.2 W/m²·K) y las paredes con 10 cm de poliestireno (λ = 0.035 W/m·K) minimizan la transmisión de calor.</p>
          <p>El equilibrio térmico en estado estable se alcanza cuando el calor que ingresa del exterior (Q_entrada ≈ 800 W, incluyendo ganancias solares, ocupación y equipos) es exactamente compensado por la extracción del aire acondicionado (Q_salida = 800 W). Este balance energético mantiene la temperatura constante en 24°C con humedad relativa de 50-60%, condiciones óptimas para confort térmico.</p>
          <p>El control preciso de temperatura y humedad no solo proporciona bienestar y mejora la productividad, sino que también favorece la calidad del sueño y contribuye a la salud general. Estas aplicaciones son fundamentales en hogares, oficinas, hospitales y otros ambientes donde se requieren condiciones controladas para el desempeño humano óptimo.</p>
        </div>
        <div className="theory-subsection">
          <h3>Reactor químico equilibrio isotermo exotérmico control temperatura</h3>
          <p>Un reactor tipo batch de 5 m³ para la reacción de esterificación entre ácido acético y etanol (produciendo acetato de etilo y agua) con catálisis ácida de H₂SO₄ opera a 80°C y presión atmosférica. Esta reacción reversible alcanza un equilibrio químico caracterizado por la constante de equilibrio K_eq, que relaciona las concentraciones de reactivos y productos según la estequiometría.</p>
          <p>Dado que la reacción es exotérmica (ΔH = -20 kJ/mol), genera aproximadamente 100 kW de potencia térmica que debe extraerse para mantener el equilibrio térmico isotermo. El sistema utiliza una chaqueta de refrigeración con circulación de agua a 50 L/min, que entra a 20°C y sale a 35°C. Un sensor PT100 de alta precisión (±1°C) monitorea la temperatura, mientras que un controlador PID modula el caudal de agua refrigerante mediante una válvula.</p>
          <p>El control isotermo preciso es crítico para optimizar el rendimiento y alcanzar conversiones de 85-90%. Variaciones de temperatura afectarían la constante de equilibrio y la cinética de reacción, comprometiendo la calidad y cantidad de producto. Posteriormente, los productos se purifican mediante destilación y técnicas de separación apropiadas.</p>
        </div>
        <div className="theory-subsection">
          <h3>Motor automóvil régimen crucero equilibrio mecánico térmico</h3>
          <p>Un vehículo circulando en autopista a velocidad constante de 120 km/h con motor de combustión interna de 2.0 L turboalimentado entregando 60 kW (aproximadamente 25% de su carga máxima) ilustra perfectamente el equilibrio mecánico. La fuerza de tracción en las ruedas iguala exactamente la resistencia aerodinámica y la resistencia de rodadura, resultando en aceleración nula y velocidad estable.</p>
          <p>Simultáneamente, el motor alcanza equilibrio térmico a 90°C gracias al sistema de refrigeración con mezcla agua-glicol (50/50) que circula mediante una bomba hacia el radiador, donde un ventilador eléctrico facilita el intercambio de calor con el aire ambiente. De los 240 kW térmicos generados por la combustión, solo 60 kW se convierten en trabajo mecánico útil, mientras que los 180 kW restantes se disipan como calor residual: aproximadamente 100 kW por el escape y 80 kW por el sistema de refrigeración.</p>
          <p>El termostato, calibrado para abrir a 88°C, regula la circulación hacia el radiador, estabilizando la temperatura de operación. Mantener este equilibrio térmico es crucial para la eficiencia de combustible, el control de emisiones, la lubricación adecuada y la minimización del desgaste, prolongando significativamente la durabilidad de los componentes del motor.</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        <div className="theory-subsection">
          <h3>1760s Black descubrimiento equilibrio térmico calor específico</h3>
          <p>Joseph Black (1728-1799), profesor de química y medicina en las universidades de Glasgow y Edimburgo, realizó experimentos pioneros que establecieron la distinción conceptual fundamental entre calor y temperatura. Sus estudios con mezclas de agua a diferentes temperaturas demostraron que la temperatura final de equilibrio térmico es intermedia y proporcional a las masas y calores específicos de los componentes, introduciendo el concepto cuantitativo de capacidad calorífica.</p>
          <p>Mediante su técnica de calorimetría con hielo, Black descubrió los calores latentes de fusión y vaporización, demostrando que grandes cantidades de calor podían absorberse durante cambios de estado sin variación de temperatura. Este descubrimiento revolucionario contradecía la intuición de la época que consideraba el calor como un fluido material (calórico) que simplemente se conservaba, y preparó el terreno para el concepto moderno de energía y su conservación.</p>
          <p>El trabajo de Black estableció el equilibrio como concepto central en termodinámica clásica, fundamental para el análisis de sistemas, procesos reversibles e irreversibles, y la dirección temporal de los fenómenos naturales. Esta "flecha termodinámica" sería formalizada posteriormente en el siglo XIX con la Segunda Ley y el concepto de entropía desarrollado por Clausius y Boltzmann.</p>
        </div>
        <div className="theory-subsection">
          <h3>1840s-1850s Joule equivalente mecánico calor conservación energía</h3>
          <p>James Prescott Joule (1818-1889), cervecero y físico autodidacta de Manchester, realizó meticulosos experimentos con su famoso "paddle wheel" (rueda de paletas) donde la agitación mecánica del agua producía calentamiento medible. Utilizando termómetros extraordinariamente sensibles (0.01°F de precisión), determinó cuantitativamente el equivalente mecánico del calor: 1 caloría = 4.184 julios. Este resultado demostró la conservación de energía y la transformación de trabajo en calor mediante procesos irreversibles como fricción y viscosidad.</p>
          <p>Los experimentos de Joule condujeron directamente a la formulación de la Primera Ley de la Termodinámica: ΔU = Q - W, estableciendo que la energía interna U es una función de estado y que calor y trabajo son formas de transferencia de energía. El principio de conservación total de energía en el universo y el concepto de equilibrio energético mediante balances de entrada, salida y acumulación se volvieron fundamentales en ingeniería y física.</p>
          <p>Inicialmente, el reconocimiento de Joule fue limitado. La Royal Society rechazó varios de sus artículos por provenir de un "amateur" sin credenciales académicas formales, generando controversia. Sin embargo, durante la década de 1850, su colaboración con William Thomson (Lord Kelvin) llevó a la aceptación gradual y la consolidación de la teoría moderna de la energía, reconociendo a Joule como uno de los fundadores de la termodinámica.</p>
        </div>
        <div className="theory-subsection">
          <h3>1870s-1880s Gibbs equilibrio químico potenciales termodinámicos</h3>
          <p>Josiah Willard Gibbs (1839-1903), físico y químico de la Universidad de Yale en Connecticut, publicó su obra monumental "On the Equilibrium of Heterogeneous Substances" entre 1876-1878. Con más de 300 páginas publicadas en las Transactions of the Connecticut Academy, una revista local de circulación muy limitada, el trabajo fue inicialmente ignorado por la comunidad científica internacional debido a su difícil acceso y complejidad matemática.</p>
          <p>Gibbs desarrolló el tratamiento matemático riguroso del equilibrio en sistemas heterogéneos con múltiples fases y componentes químicos. Introdujo los potenciales termodinámicos fundamentales: la energía libre de Gibbs (G = H - TS) y la energía libre de Helmholtz (F = U - TS), estableciendo criterios de espontaneidad basados en la minimización de estas funciones a temperatura y presión constantes. Su famosa regla de fases (F = C - P + 2) relaciona los grados de libertad con el número de componentes y fases en equilibrio.</p>
          <p>El reconocimiento internacional llegó tarde, cuando James Clerk Maxwell en Inglaterra, Wilhelm Ostwald en Alemania y Henri Le Chatelier en Francia tradujeron y difundieron su trabajo por Europa. La termodinámica de Gibbs se convirtió en el fundamento de la química física del siglo XX, con aplicaciones universales en sistemas desde agua pura y CO₂ hasta aleaciones metálicas complejas y soluciones electrolíticas.</p>
        </div>
        <div className="theory-subsection">
          <h3>Siglo XX mecánica estadística Boltzmann equilibrio microscópico</h3>
          <p>Ludwig Boltzmann (1844-1906) proporcionó la interpretación estadística del equilibrio termodinámico, estableciendo que un estado macroscópico de equilibrio corresponde a la configuración microscópica de máxima probabilidad entre todas las posibles disposiciones de partículas, átomos y moléculas. La distribución de Maxwell-Boltzmann describe las velocidades y energías de las partículas mediante una función exponencial que depende de la temperatura, relacionando la energía cinética promedio con k_BT, donde k_B = 1.38×10⁻²³ J/K es la constante de Boltzmann.</p>
          <p>La famosa ecuación de entropía estadística S = k_B ln(Ω), grabada en su tumba en Viena, relaciona la entropía macroscópica con la multiplicidad de microestados Ω compatibles con un macroestado dado. El equilibrio corresponde a la máxima entropía y máxima probabilidad, explicando la irreversibilidad de procesos naturales como la evolución espontánea desde estados menos probables (ordenados) hacia estados más probables (desordenados).</p>
          <p>El trabajo de Boltzmann estableció el puente entre la termodinámica clásica y la mecánica cuántica. Planck lo aplicó a la radiación del cuerpo negro, Einstein a los calores específicos de sólidos, y Debye a las vibraciones cristalinas (fonones). Este desarrollo de la física estadística cuántica durante el siglo XX permitió aplicaciones en materia condensada, gases ideales y reales, líquidos, sólidos y transiciones de fase, unificando la descripción microscópica y macroscópica de la materia.</p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>🎭</span> Curiosidades y Anécdotas
        </h2>
        <div className="theory-subsection">
          <h3>Café enfriamiento curva exponencial ley Newton enfriamiento</h3>
          <p>Una taza de café recién servido a 90°C en un ambiente a 20°C experimenta enfriamiento espontáneo hacia el equilibrio térmico con el entorno, siguiendo la ley de enfriamiento de Newton: dT/dt = -k(T - T_amb). La constante k depende de la superficie de transferencia, el coeficiente de convección h y el material de la taza (cerámica, vidrio o acero inoxidable). La solución de esta ecuación diferencial es T(t) = T_amb + (T₀ - T_amb)e⁻ᵏᵗ, mostrando un decaimiento exponencial con constante de tiempo τ = 1/k, típicamente 10-20 minutos para una taza de cerámica en aire tranquilo.</p>
          <p>Este experimento cotidiano es ideal para la enseñanza práctica de termodinámica en laboratorios universitarios. Los estudiantes pueden medir la temperatura a intervalos de 2 minutos con un termómetro simple y graficar ln(T - T_amb) versus tiempo. Si la ley de Newton es válida, el gráfico resultará en una línea recta con pendiente -k, permitiendo verificar experimentalmente el modelo teórico.</p>
          <p>La simplicidad y accesibilidad de este experimento lo convierte en una herramienta pedagógica valiosa que conecta conceptos abstractos de equilibrio térmico, transferencia de calor y ecuaciones diferenciales con una experiencia tangible y fácilmente reproducible por cualquier estudiante.</p>
        </div>
        <div className="theory-subsection">
          <h3>Termo vacío Dewar equilibrio térmico retardado aislamiento</h3>
          <p>James Dewar (1842-1923), químico y físico escocés, inventó el vaso Dewar en 1892 como un recipiente de doble pared de vidrio con vacío intermedio para proporcionar aislamiento térmico excepcional. Su propósito original era mantener gases licuados criogénicos: nitrógeno líquido a -196°C, oxígeno a -183°C e hidrógeno a -253°C para investigaciones de laboratorio a temperaturas extremadamente bajas.</p>
          <p>La aplicación comercial llegó en 1904 cuando una empresa alemana patentó la botella "Thermos" para uso doméstico, permitiendo conservar bebidas calientes y frías. Esta innovación revolucionó la portabilidad de café y té para el trabajo, excursiones y camping, popularizándose mundialmente durante el siglo XX y convirtiéndose en un artículo indispensable del hogar moderno.</p>
          <p>El equilibrio térmico se retarda de horas a días porque el vacío elimina la conducción y convección del aire, mientras que la superficie interior espejada reflectante reduce drásticamente la radiación infrarroja. Las pérdidas mínimas e inevitables ocurren por el soporte mecánico del cuello y la tapa, causando un enfriamiento gradual. Un líquido inicialmente a 95°C se mantiene a 85°C después de 6 horas y aún a 70°C tras 12 horas, demostrando la utilidad práctica y comodidad de este ingenioso dispositivo termodinámico.</p>
        </div>
        <div className="theory-subsection">
          <h3>Superconductor resistencia cero equilibrio cuántico temperatura crítica</h3>
          <p>En 1911, Heike Kamerlingh Onnes descubrió que el mercurio pierde completamente su resistencia eléctrica al enfriarse por debajo de su temperatura crítica T_c = 4.2 K (-268.95°C), permitiendo corrientes persistentes indefinidamente sin disipación de energía. Este fenómeno parece violar la Segunda Ley de la Termodinámica, pero en realidad representa un estado cuántico macroscópico de equilibrio donde los electrones forman pares de Cooper mediante interacción atractiva mediada por fonones de la red cristalina, creando coherencia de fase en la función de onda colectiva.</p>
          <p>El efecto Meissner, descubierto en 1933, demostró que los superconductores expulsan completamente los campos magnéticos de su interior, exhibiendo diamagnetismo perfecto. Este fenómeno permite la levitación magnética espectacular donde un imán flota sobre la superficie de un superconductor, principio aprovechado en los trenes maglev de Japón que alcanzan velocidades de 600 km/h, representando el futuro del transporte de alta velocidad.</p>
          <p>El descubrimiento de superconductores de alta temperatura en 1986 por Bednorz y Müller (Premio Nobel 1987) revolucionó el campo. Cerámicas de óxidos de cobre con T_c = 90 K (-183°C) pueden enfriarse con nitrógeno líquido, accesible y económico, en lugar del costoso y escaso helio líquido necesario para los 4.2 K. Las aplicaciones potenciales incluyen cables de transmisión sin pérdidas, generadores compactos y potentes bobinas superconductoras que generan campos magnéticos intensos (3-7 Tesla) para resonancia magnética nuclear (RMN), permitiendo diagnóstico médico con imágenes detalladas de tejidos blandos y cerebro.</p>
        </div>
        <div className="theory-subsection">
          <h3>Muerte térmica universo equilibrio termodinámico final destino</h3>
          <p>Hipótesis cosmológica destino final universo expansión acelerada energía oscura densidad materia disminuye tiempo estrellas agotan combustible hidrógeno fusión nuclear cesa enanas blancas enfriar enanas negras temperatura ambiente cósmico 2.7K radiación fondo microondas dilución expansión, evaporación agujeros negros radiación Hawking tiempo evaporación t∼(M/M☉)³10⁶⁷años agujero negro masa solar M☉ masivos supermasivos Sagitario A* centro galáctica 4millones M☉ evaporación 10¹⁰⁰años, estado final equilibrio térmico temperatura uniforme 10⁻³⁰K entropía máxima desorden absoluto sin gradientes energía imposibilidad trabajo vida estructuras organizadas muerte térmica heat death Clausius 1850s especulación filosófica científica destino trágico universo Segunda Ley entropía aumenta inevitablemente tiempo finito infinito flecha temporal asimetría direccionalidad pasado futuro misterio fundamental naturaleza realidad existencia.</p>
        </div>
      </div>

      <div className="theory-summary-section">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <ul>
          <li><strong>Estado termodinámico completo:</strong> Queda determinado por un conjunto mínimo de propiedades independientes (generalmente dos intensivas para sistemas simples), permitiendo calcular todas las demás propiedades mediante ecuaciones de estado y relaciones termodinámicas.</li>
          <li><strong>Funciones de estado vs variables de proceso:</strong> Las funciones de estado (U, H, S, G, F) dependen solo del estado actual, no del camino seguido. Sus diferenciales son exactas (∫dF = F₂ - F₁), a diferencia del calor y trabajo que dependen de la trayectoria del proceso.</li>
          <li><strong>Equilibrio termodinámico múltiple:</strong> Requiere simultáneamente equilibrio térmico (temperatura uniforme), mecánico (presión uniforme), químico (potenciales químicos iguales) y de fases (coexistencia estable). Todas las propiedades macroscópicas permanecen constantes en el tiempo.</li>
          <li><strong>Procesos cuasiestáticos ideales:</strong> Ocurren infinitamente lentos pasando por sucesivos estados de equilibrio interno. Permiten representación como líneas en diagramas de estado y análisis termodinámico riguroso, aunque son imposibles de realizar perfectamente en la práctica.</li>
          <li><strong>Reversibilidad termodinámica:</strong> Los procesos reversibles pueden invertirse sin dejar cambios en sistema ni entorno, maximizando trabajo útil. Requieren ausencia de fricción, gradientes finitos de temperatura/presión e histeiresis. Los procesos irreversibles (reales) generan entropía irrecuperable.</li>
          <li><strong>Criterios de estabilidad:</strong> El equilibrio estable corresponde a mínimos de potenciales termodinámicos apropiados: energía interna mínima (a S,V constantes), entropía máxima (a U,V constantes), o energía libre de Gibbs mínima (a T,P constantes). Derivadas segundas positivas garantizan estabilidad.</li>
        </ul>
      </div>
    </>
  );
};

export default EstadoYEquilibrioTheory;