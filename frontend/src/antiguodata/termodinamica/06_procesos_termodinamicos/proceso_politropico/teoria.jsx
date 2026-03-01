import { TheorySection, Concept } from '../../../../components/TheoryV2';
import { theoreticalConcepts } from './definitions.js';

export const metadata = {
  titulo: "Proceso Politrópico",
  descripcion: "Generalización de los procesos termodinámicos mediante un índice politrópico variable. Comprende cómo un solo parámetro (n) unifica todos los procesos ideales.",
  isTheoryOnly: true,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const ProcesoPolitropicoTheory = () => {
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

      <TheorySection title="Ecuación Politrópica" variant="theoretical">
        <Concept title="Definición General" variant="detailed">
          <div className="detailed-content">
            <p>Un proceso politrópico sigue la relación:</p>
            <div className="formula-display">PV<sup>n</sup> = constante</div>
            <p>Donde n es el índice politrópico que caracteriza el proceso.</p>
          </div>
        </Concept>

        <Concept title="Casos Especiales" variant="detailed">
          <div className="detailed-content">
            <p>Según el valor de n, obtenemos los procesos ideales:</p>
            <ul>
              <li>n = 0: PV<sup>0</sup> = P = constante → Proceso Isobárico</li>
              <li>n = 1: PV = constante → Proceso Isotérmico (gas ideal)</li>
              <li>n = γ: PV<sup>γ</sup> = constante → Proceso Adiabático</li>
              <li>n → ∞: V = constante → Proceso Isocórico</li>
            </ul>
            <p>Todos los procesos termodinámicos ideales son casos especiales del proceso politrópico.</p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Trabajo y Calor" variant="theoretical">
        <Concept title="Expresiones Generales" variant="detailed">
          <div className="detailed-content">
            <p>Trabajo en proceso politrópico:</p>
            <div className="formula-display">W = (P₂V₂ - P₁V₁) / (1 - n) = nR(T₁ - T₂) / (n - 1)</div>
            
            <p>Calor en proceso politrópico:</p>
            <div className="formula-display">Q = nC<sub>n</sub>ΔT</div>
            <p>Donde C<sub>n</sub> = C<sub>v</sub>(γ - n)/(1 - n) es la capacidad calorífica politrópica.</p>
          </div>
        </Concept>

        <Concept title="Relación con Procesos Ideales" variant="detailed">
          <div className="detailed-content">
            <ul>
              <li>n = 0: W = PΔV, Q = nC<sub>p</sub>ΔT (isobárico)</li>
              <li>n = 1: W = Q = nRT ln(V₂/V₁) (isotérmico)</li>
              <li>n = γ: Q = 0, W = -ΔU (adiabático)</li>
              <li>n → ∞: W = 0, Q = nC<sub>v</sub>ΔT (isocórico)</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Procesos Reales" variant="theoretical">
        <Concept title="Aplicación a Máquinas Reales" variant="detailed">
          <div className="detailed-content">
            <p>Los procesos en máquinas reales raramente son ideales. El índice politrópico permite modelar:</p>
            <ul>
              <li>Compresores: Típicamente 1 &lt; n &lt; γ (con algo de intercambio de calor)</li>
              <li>Expansores/Turbinas: También 1 &lt; n &lt; γ</li>
              <li>Efectos de fricción: Modifican el valor de n</li>
              <li>Transferencia de calor: Hace que n difiera de γ</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Determinación Experimental de n" variant="detailed">
          <div className="detailed-content">
            <p>El índice politrópico se puede determinar experimentalmente mediante:</p>
            <ul>
              <li>Mediciones de P y V en diferentes estados</li>
              <li>Gráfica log(P) vs log(V): pendiente = -n</li>
              <li>Análisis de datos de compresores/expansores reales</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🏭 Compresores industriales</h3>
          <p>
            Los compresores de aire industriales operan mediante procesos politrópicos con índice típicamente 
            entre 1.2 y 1.35 (entre isotérmico n=1 y adiabático n=1.4 para aire). El enfriamiento parcial durante 
            la compresión hace que n &lt; γ. Los fabricantes especifican el índice politrópico de sus equipos: 
            un compresor con n=1.25 indica que está parcialmente enfriado. Compresores multi-etapa con enfriamiento 
            intermedio se acercan más a n=1 (isotérmico), siendo más eficientes energéticamente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ Turbinas de gas</h3>
          <p>
            Las turbinas de gas en centrales eléctricas y motores de avión tienen expansiones politrópicas con 
            n ≈ 1.3-1.35. La transferencia de calor a través de las paredes de la turbina y las pérdidas por fricción 
            modifican el proceso respecto al adiabático ideal (n=γ=1.4). Los ingenieros usan el índice politrópico 
            para calcular la eficiencia real: una turbina con n=1.32 tendrá menor trabajo de salida que una adiabática 
            ideal, pero el modelo politrópico predice con precisión el comportamiento real.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 Motores de combustión interna</h3>
          <p>
            En motores reales, la compresión y expansión no son adiabáticas perfectas. El índice politrópico medido 
            experimentalmente varía entre 1.25-1.35 en compresión (transferencia de calor hacia las paredes del cilindro) 
            y 1.2-1.3 en expansión (gases calientes transfieren calor al cilindro). Fabricantes como BMW y Mercedes 
            miden estos índices mediante sensores de presión en cilindros, optimizando el diseño del motor para acercarse 
            al proceso adiabático ideal y maximizar eficiencia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>❄️ Sistemas de refrigeración</h3>
          <p>
            Los compresores de refrigeradores y aires acondicionados operan con procesos politrópicos donde n=1.1-1.2, 
            significativamente menor que el valor adiabático. Esto se debe al enfriamiento intencional mediante aletas 
            de enfriamiento en el compresor. Un n menor significa menos trabajo de compresión y menor temperatura de 
            descarga, protegiendo el aceite lubricante del compresor. Los ingenieros de HVAC diseñan específicamente 
            para mantener n bajo mediante sistemas de enfriamiento.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Calibración de instrumentos</h3>
          <p>
            Los manómetros y medidores de flujo se calibran considerando procesos politrópicos. Cuando un gas fluye 
            rápidamente a través de una restricción (orificio, válvula), experimenta un proceso politrópico con 
            n=1.2-1.3. Los instrumentos deben compensar esta relación P-V para medir correctamente. Los estándares 
            ISO 5167 para medición de flujo especifican usar modelos politrópicos en lugar de isotérmicos o adiabáticos 
            para mayor precisión.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El desarrollo del concepto politrópico
        </h2>
        
        <div className="theory-subsection">
          <h3>📐 Origen del término "politrópico" (siglo XIX)</h3>
          <p>
            El término "politrópico" (del griego "poly" = muchos, "tropos" = cambios) fue introducido en el siglo XIX 
            para describir procesos donde tanto presión como volumen cambian según una relación de potencia. A diferencia 
            de los procesos ideales con nombre específico (isotérmico, adiabático), el proceso politrópico era la 
            generalización matemática que unificaba todos estos casos especiales bajo una sola ecuación: PVⁿ = constante.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔧 Gustav Zeuner y la termodinámica técnica (1860s)</h3>
          <p>
            Gustav Zeuner, ingeniero alemán, fue pionero en aplicar procesos politrópicos al análisis de máquinas de vapor. 
            En su obra "Technische Thermodynamik" (1866), Zeuner demostró que las máquinas reales no seguían procesos 
            ideales, sino politrópicos con índices específicos. Midió experimentalmente n ≈ 1.3 en cilindros de vapor, 
            introduciendo el concepto de "exponente de expansión" que difería del valor adiabático teórico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ Desarrollo de compresores de aire (1880-1920)</h3>
          <p>
            Con la industrialización del siglo XX, los compresores de aire se volvieron ubicuos. Ingenieros descubrieron 
            que el rendimiento real de compresores se predecía mejor con índices politrópicos n=1.2-1.35 que con el modelo 
            adiabático. Frank Richards (1919) publicó tablas extensivas de índices politrópicos para diferentes tipos de 
            compresores, estableciendo estándares industriales que se usan hasta hoy.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>✈️ Turbinas de gas y aviación (1930-1950)</h3>
          <p>
            El desarrollo de turbinas de gas para aviación durante la Segunda Guerra Mundial requirió modelos precisos. 
            Sir Frank Whittle y Hans von Ohain, inventores independientes del motor a reacción, usaron análisis politrópico 
            para predecir eficiencia de compresores y turbinas. Von Ohain determinó que n=1.32 era óptimo para turbinas 
            de su diseño, estableciendo principios que siguen vigentes en turbinas modernas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💻 Era computacional y optimización (1970-presente)</h3>
          <p>
            Con la llegada de computadoras, el análisis politrópico se sofisticó enormemente. Programas de CFD 
            (Computational Fluid Dynamics) calculan índices politrópicos locales en cada punto de un compresor o turbina. 
            La industria aeroespacial moderna (GE, Rolls-Royce, Pratt & Whitney) usa modelos politrópicos variables 
            donde n cambia durante el proceso, prediciendo con 99% de precisión el comportamiento de turbinas que generan 
            80,000 libras de empuje.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🔊 El secreto del silbato de tren</h3>
          <p>
            Los antiguos silbatos de vapor de trenes usaban expansión politrópica del vapor (n≈1.13) para generar sonido. 
            Ingenieros descubrieron que este índice específico producía el tono más penetrante. Un silbato isotérmico (n=1) 
            sería demasiado grave, uno adiabático (n=1.3) demasiado agudo. El índice politrópico de 1.13 generaba el 
            característico sonido de 90-110 Hz que se oía a kilómetros, salvando vidas al advertir de trenes aproximándose.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎺 Los instrumentos de viento y la física</h3>
          <p>
            Cuando un músico toca una trompeta o clarinete, el aire en el instrumento experimenta compresiones y expansiones 
            rápidas. Los físicos musicales descubrieron que estos procesos son politrópicos con n≈1.38 (muy cerca de γ=1.4 
            del aire). Esto explica por qué los instrumentos de viento son más fáciles de tocar en clima frío: el aire frío 
            tiene menor capacidad calorífica, cambiando ligeramente n y la impedancia acústica del instrumento.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌋 Erupciones volcánicas como procesos politrópicos</h3>
          <p>
            Los vulcanólogos modelan erupciones volcánicas como expansiones politrópicas de gases a alta presión. 
            La erupción del Monte Santa Helena (1980) fue analizada como un proceso politrópico con n≈1.1, indicando 
            transferencia significativa de calor del magma a los gases. Este modelo permitió calcular que la presión 
            inicial era 30 MPa (300 atm) y la explosión liberó energía equivalente a 24 megatones de TNT. El índice 
            politrópico bajo (cercano a isotérmico) explica por qué la erupción fue tan prolongada.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎈 El dilema del globo en el coche</h3>
          <p>
            Si atas un globo de helio en un coche cerrado y aceleras bruscamente, el globo se mueve hacia adelante 
            (contraintuitivo). Este fenómeno involucra procesos politrópicos del aire: al acelerar, el aire en la parte 
            trasera se comprime politrópicamente (n≈1.4), aumentando su densidad. El globo de helio, menos denso, 
            experimenta una fuerza de flotación hacia la zona de menor presión (adelante). Este efecto se usa en 
            centrífugas de laboratorio para separar sustancias mediante compresión politrópica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔋 Baterías de aire comprimido</h3>
          <p>
            Las baterías de aire comprimido (CAES - Compressed Air Energy Storage) almacenan electricidad comprimiendo 
            aire en cavernas subterráneas. El proceso de compresión es politrópico con n=1.25-1.3 (con enfriamiento parcial). 
            El problema es que al expandir el aire para recuperar energía, se enfría dramáticamente por expansión politrópica, 
            reduciendo eficiencia. Las plantas modernas precalientan el aire con gas natural antes de expandirlo, 
            modificando el índice politrópico hacia valores más favorables (n≈1.15), mejorando eficiencia del 50% al 70%.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎬 Efectos especiales de Star Wars</h3>
          <p>
            Los icónicos sonidos de los motores TIE Fighter de Star Wars fueron creados combinando rugidos de elefantes 
            con sonidos de aire comprimido liberado súbitamente. Los técnicos de sonido descubrieron empíricamente que 
            una expansión politrópica rápida (n≈1.35) de aire a 200 psi creaba el silbido característico. Sin saberlo, 
            Ben Burtt (diseñador de sonido) estaba aplicando termodinámica para crear uno de los efectos sonoros más 
            reconocibles del cine.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            Un proceso politrópico sigue la ecuación PVⁿ = constante, donde n es el índice politrópico. 
            Esta ecuación generaliza todos los procesos termodinámicos ideales como casos especiales.
          </li>
          <li>
            Casos especiales: n=0 (isobárico), n=1 (isotérmico), n=γ (adiabático), n→∞ (isocórico). 
            Cualquier proceso real puede modelarse con un valor apropiado de n.
          </li>
          <li>
            En procesos reales, típicamente 1 &lt; n &lt; γ debido a transferencia parcial de calor y fricción. 
            Compresores industriales tienen n=1.2-1.35, turbinas n=1.3-1.35.
          </li>
          <li>
            El trabajo se calcula como W = (P₂V₂ - P₁V₁)/(1 - n) y el calor como Q = nCₙΔT, donde Cₙ es 
            la capacidad calorífica politrópica que varía con n.
          </li>
          <li>
            Aplicaciones prácticas: diseño de compresores, turbinas de gas, motores de combustión interna, 
            sistemas de refrigeración, análisis de máquinas térmicas reales, y cualquier proceso donde tanto 
            presión como volumen cambian significativamente.
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProcesoPolitropicoTheory;
