import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as energia_internaDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Energía Interna",
  descripcion: "Energía total contenida en un sistema termodinámico. Comprende la energía cinética y potencial microscópica, su relación con la primera ley de la termodinámica, y su aplicación en gases ideales y procesos termodinámicos.",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const EnergiaInternaTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Energía Interna?">
        <Concept title="Definición">
          <p>
            La energía interna (U) es la energía total contenida en un sistema termodinámico. 
            Incluye todas las formas de energía microscópica: energía cinética de las moléculas, energía 
            potencial de las interacciones intermoleculares, energía vibracional, rotacional y electrónica.
          </p>
          
          <p>
            Es una función de estado, lo que significa que su valor depende únicamente del estado actual 
            del sistema, no del camino seguido para llegar a ese estado.
          </p>

          <Important>
            <p>Características de la Energía Interna:</p>
            <ul>
              <li>Función de estado: Depende solo del estado actual (P, V, T)</li>
              <li>Propiedad extensiva: Proporcional a la cantidad de materia</li>
              <li>No medible directamente: Solo se pueden medir cambios (ΔU)</li>
              <li>Para gases ideales: Depende únicamente de la temperatura</li>
            </ul>
          </Important>
        </Concept>

        <Concept title="Componentes de la Energía Interna">
          <ul>
            <li>Energía cinética molecular: Movimiento traslacional, rotacional y vibracional</li>
            <li>Energía potencial intermolecular: Interacciones entre moléculas</li>
            <li>Energía de enlace: Enlaces químicos dentro de las moléculas</li>
            <li>Energía electrónica: Estados electrónicos de átomos y moléculas</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Primera Ley de la Termodinámica">
        <Concept title="Cambio de Energía Interna">
          <p>
            La primera ley de la termodinámica relaciona el cambio de energía interna con el calor 
            y el trabajo:
          </p>

          <Formula 
            expression={String.raw`\Delta U = Q - W`}
            description="Primera ley de la termodinámica"
            calculatorId="energia_interna-grupo-1"
            definitions={energia_internaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calor absorbido", expression: String.raw`Q = \Delta U + W` },
              { description: "Trabajo realizado", expression: String.raw`W = Q - \Delta U` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>ΔU: Cambio de energía interna del sistema (J)</li>
            <li>Q: Calor transferido al sistema (J) - positivo si entra, negativo si sale</li>
            <li>W: Trabajo realizado por el sistema (J) - positivo si el sistema lo realiza</li>
          </ul>

          <p>Convención de signos:</p>
          <ul>
            <li>Q &gt; 0: El sistema absorbe calor</li>
            <li>Q &lt; 0: El sistema cede calor</li>
            <li>W &gt; 0: El sistema realiza trabajo (expansión)</li>
            <li>W &lt; 0: Se realiza trabajo sobre el sistema (compresión)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Energía Interna en Gases Ideales">
        <Concept title="Relación con la Temperatura">
          <p>
            Para un gas ideal, la energía interna depende únicamente de la temperatura y se calcula como:
          </p>

          <Formula 
            expression={String.raw`U = nC_v T`}
            description="Energía interna de un gas ideal"
            calculatorId="energia_interna-grupo-1"
            definitions={energia_internaDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>U: Energía interna total (J)</li>
            <li>n: Número de moles del gas (mol)</li>
            <li>C<sub>v</sub>: Capacidad calorífica a volumen constante (J/(mol·K))</li>
            <li>T: Temperatura absoluta (K)</li>
          </ul>

          <p>Valores típicos de C<sub>v</sub>:</p>
          <ul>
            <li>Gases monoatómicos: C<sub>v</sub> = (3/2)R ≈ 12.47 J/(mol·K)</li>
            <li>Gases diatómicos: C<sub>v</sub> = (5/2)R ≈ 20.79 J/(mol·K)</li>
            <li>Gases poliatómicos: C<sub>v</sub> = 3R ≈ 24.94 J/(mol·K)</li>
          </ul>
        </Concept>

        <Concept title="Cambio de Energía Interna">
          <p>
            El cambio de energía interna cuando varía la temperatura es:
          </p>

          <Formula 
            expression={String.raw`\Delta U = nC_v\Delta T`}
            description="Cambio de energía interna"
            calculatorId="energia_interna-grupo-1"
            definitions={energia_internaDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>ΔU: Cambio de energía interna (J)</li>
            <li>n: Número de moles (mol)</li>
            <li>C<sub>v</sub>: Capacidad calorífica a volumen constante (J/(mol·K))</li>
            <li>ΔT: Cambio de temperatura = T<sub>f</sub> - T<sub>i</sub> (K)</li>
          </ul>

          <p>
            Esta relación es válida para cualquier proceso en un gas ideal, independientemente de si 
            el volumen es constante o no.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Energía Interna en Procesos Termodinámicos">
        <Concept title="Procesos Específicos">
          <ul>
            <li>Proceso Isotérmico (T constante): ΔU = 0 para gases ideales</li>
            <li>Proceso Isocórico (V constante): ΔU = Q (no hay trabajo)</li>
            <li>Proceso Adiabático (Q = 0): ΔU = -W</li>
            <li>Proceso Isobárico (P constante): ΔU = Q - PΔV</li>
          </ul>
        </Concept>

        <Concept title="Ciclos Termodinámicos">
          <p>
            En un ciclo termodinámico completo, el sistema regresa a su estado inicial, por lo que:
          </p>
          <p style={{textAlign: 'center', fontSize: '1.1em', margin: '1em 0'}}>
            ΔU<sub>ciclo</sub> = 0
          </p>
          <p>
            Esto implica que en un ciclo completo: Q<sub>neto</sub> = W<sub>neto</sub>
          </p>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🚗 Motores de combustión interna</h3>
          <p>
            Los motores de automóviles (Otto y Diesel) funcionan mediante cambios controlados de energía interna. 
            Durante la compresión, el trabajo negativo sobre el gas (W &lt; 0) aumenta su energía interna y temperatura 
            (ΔU = -W). En la combustión, el calor liberado (Q &gt; 0) aumenta drásticamente ΔU, elevando la presión. 
            Durante la expansión, el gas realiza trabajo (W &gt; 0) disminuyendo su energía interna. Un motor de gasolina 
            típico (2.0 L, 150 CV) realiza 2000-6000 ciclos por minuto, cada uno manipulando la energía interna de 
            ~0.5 litros de mezcla aire-combustible. La eficiencia (~25%) depende directamente de cuánta energía interna 
            se convierte en trabajo útil.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>❄️ Refrigeradores y aires acondicionados</h3>
          <p>
            Los sistemas de refrigeración transportan energía interna desde el interior frío hacia el exterior caliente 
            usando la primera ley. El refrigerante absorbe calor del interior (Q &gt; 0, aumentando ΔU), se comprime 
            (W &lt; 0, aumentando más ΔU), cede calor al exterior (Q &lt; 0, disminuyendo ΔU), y se expande 
            (W &gt; 0, disminuyendo más ΔU). Un refrigerador doméstico típico (200 W) transfiere ~800 W de energía 
            interna desde el interior a 5°C hacia la cocina a 25°C. El coeficiente de rendimiento (COP = 4) significa 
            que por cada joule de trabajo eléctrico, se transfieren 4 joules de energía interna.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💨 Bombas de calor geotérmicas</h3>
          <p>
            Las bombas de calor geotérmicas explotan la energía interna constante del subsuelo (10-15°C a 2 metros de 
            profundidad). En invierno, extraen energía interna del suelo mediante un fluido que circula por tuberías 
            enterradas. El fluido absorbe calor (aumenta ΔU), se comprime (aumenta más ΔU y T), y cede calor al interior 
            de la casa. Una bomba de 10 kW puede calentar 200 m² extrayendo ~40 kW de energía interna del subsuelo 
            (COP = 4). En verano, el proceso se invierte: la energía interna del aire interior se "deposita" en el suelo 
            más frío. Estas bombas ahorran 50-70% de energía vs calefacción eléctrica convencional porque mueven energía 
            interna en lugar de generarla.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>☕ Termos y aislamiento térmico</h3>
          <p>
            Un termo mantiene la temperatura del café caliente minimizando cambios en su energía interna. El diseño 
            de doble pared con vacío entre ellas elimina la conducción y convección (Q ≈ 0). El vidrio plateado refleja 
            radiación infrarroja, reduciendo Q radiativo. Aplicando la primera ley: si Q ≈ 0 y W = 0 (volumen constante), 
            entonces ΔU ≈ 0, manteniendo la temperatura. Un termo de calidad conserva café a 80°C durante 6-8 horas, 
            reduciendo la pérdida de energía interna a ~20 J/s (vs ~200 J/s en taza ordinaria). La tecnología de vacío 
            super-aislante (VIP) moderna alcanza conductividades de 0.004 W/(m·K), 10 veces mejor que aire.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏃 Metabolismo humano y calorías</h3>
          <p>
            El cuerpo humano es un sistema termodinámico que gestiona energía interna mediante alimentos (Q entrante), 
            trabajo muscular (W saliente) y calor corporal (Q saliente). Una persona en reposo metaboliza ~80 W, 
            equivalente a una bombilla. Durante ejercicio intenso, el metabolismo alcanza 1000-1500 W, generando enorme 
            energía interna que debe disiparse como calor (sudoración, respiración). Los alimentos aportan energía: 
            1 gramo de grasa = 37 kJ de energía interna, carbohidratos = 17 kJ/g, proteínas = 17 kJ/g. Un maratón 
            (42 km) consume ~10,000 kJ de energía interna almacenada, equivalente a ~2400 kcal. La eficiencia muscular 
            (~25%) significa que solo 25% de la energía interna se convierte en trabajo mecánico; el resto se disipa 
            como calor.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El descubrimiento de la energía interna
        </h2>
        
        <div className="theory-subsection">
          <h3>🔥 Joule y la equivalencia calor-trabajo (1840s)</h3>
          <p>
            James Prescott Joule demostró experimentalmente entre 1840-1849 que el calor es una forma de energía, no un 
            fluido misterioso ("calórico"). Su experimento más famoso: un peso descendente hacía girar paletas en agua, 
            calentándola. Midiendo el trabajo mecánico y el aumento de temperatura, determinó que 4.186 joules de trabajo 
            producen el mismo efecto que 1 caloría de calor. Esto estableció que la energía interna puede aumentar por 
            calor o trabajo, sentando bases para la primera ley. Joule repitió el experimento con mercurio, aceite, 
            e incluso en su luna de miel midió la temperatura de cascadas suizas (predijo que el agua debía ser más 
            caliente abajo). Su obsesión perfeccionista dio precisión de 1% a la constante J = 4.186 J/cal.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ Helmholtz y la conservación de la energía (1847)</h3>
          <p>
            Hermann von Helmholtz formuló matemáticamente el principio de conservación de la energía en su tratado 
            "Über die Erhaltung der Kraft" (1847). Demostró que en sistemas aislados, la suma de energía cinética, 
            potencial y "fuerza viva" (energía interna) permanece constante. Helmholtz unificó mecánica, calor, 
            electricidad y magnetismo bajo un mismo principio, estableciendo que la energía no se crea ni destruye, 
            solo se transforma. Aplicó esto al cuerpo humano, demostrando que los músculos convierten energía química 
            (alimentos) en trabajo mecánico y calor. Su trabajo fue inicialmente rechazado por ser "demasiado matemático", 
            pero eventualmente revolucionó la física y fundó la termodinámica moderna.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌡️ Clausius y la primera ley (1850)</h3>
          <p>
            Rudolf Clausius formuló explícitamente la primera ley de la termodinámica en 1850: "En cualquier proceso, 
            el cambio de energía interna de un sistema es igual al calor añadido menos el trabajo realizado". 
            Su formulación matemática ΔU = Q - W se convirtió en piedra angular de la termodinámica. Clausius introdujo 
            el concepto de "energía interna" (U) como función de estado, distinta del calor y trabajo que son 
            transferencias de energía. También demostró que la energía interna de gases ideales depende solo de la 
            temperatura, no de presión o volumen. Su trabajo resolvió la controversia entre la teoría del calórico y 
            la teoría cinética, estableciendo definitivamente que el calor es energía en tránsito, no una sustancia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Maxwell y la teoría cinética (1860s)</h3>
          <p>
            James Clerk Maxwell desarrolló la teoría cinética de gases (1860-1867), explicando la energía interna 
            microscópicamente. Demostró que la temperatura es proporcional a la energía cinética promedio de las 
            moléculas: (3/2)kT por molécula. Esto conectó la termodinámica macroscópica (U, Q, W) con la mecánica 
            molecular. Maxwell derivó la distribución de velocidades moleculares y calculó propiedades de transporte 
            (viscosidad, conductividad térmica) desde primeros principios. Su trabajo explicó por qué C_v = (3/2)R 
            para gases monoatómicos: cada grado de libertad traslacional contribuye (1/2)kT a la energía interna. 
            Esta conexión micro-macro fue fundamental para validar la primera ley y el concepto de energía interna.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎓 Gibbs y las funciones de estado (1870s)</h3>
          <p>
            Josiah Willard Gibbs refinó el concepto de energía interna como función de estado en su obra maestra 
            "On the Equilibrium of Heterogeneous Substances" (1873-1878). Demostró matemáticamente que U depende solo 
            de variables de estado (S, V, n), no del camino termodinámico: dU = TdS - PdV + μdn. Gibbs introdujo 
            los potenciales termodinámicos (U, H, A, G) como herramientas para analizar equilibrio y espontaneidad. 
            Mostró que en procesos cíclicos, ΔU = 0 porque U es función de estado, mientras Q y W dependen del camino. 
            Este formalismo matemático riguroso transformó la termodinámica de ciencia empírica a disciplina deductiva, 
            permitiendo predecir comportamientos sin realizar experimentos.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>💍 Joule y su luna de miel científica (1847)</h3>
          <p>
            James Joule se casó en 1847 y pasó su luna de miel en Chamonix, Francia, cerca del Mont Blanc. Mientras 
            su esposa admiraba los Alpes, Joule llevaba un termómetro gigante y medía obsesivamente la temperatura del 
            agua en cascadas. Razonaba que el agua en caída libre convierte energía potencial en cinética, y al 
            estrellarse en el fondo, esta energía cinética debe convertirse en energía interna (calor). Calculó que 
            una caída de 778 pies debía aumentar la temperatura 1°F. Las mediciones confirmaron su predicción dentro 
            del margen de error. Su esposa, según cuenta la historia, toleró pacientemente este comportamiento excéntrico. 
            Este experimento de "luna de miel" demostró que la energía interna puede aumentar por trabajo mecánico, no solo por calor.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🍺 La cervecería de Joule y sus experimentos</h3>
          <p>
            James Joule era hijo de un cervecero próspero en Manchester y realizaba sus experimentos en el sótano de la 
            cervecería familiar. Usaba equipos improvisados: termómetros de precisión fabricados personalmente, pesas de 
            la cervecería, y recipientes de cobre de las cubas de fermentación. Su obsesión con la temperatura le venía 
            de controlar fermentaciones: sabía que la cerveza requiere control térmico preciso. En 1843, midió el 
            equivalente mecánico del calor agitando agua con paletas, determinando que 772.55 libras-fuerza·pie = 
            1 BTU. La precisión de Joule (error &lt;1%) asombró a la comunidad científica, pero fue posible gracias a 
            su experiencia cervecera en mediciones térmicas precisas. Ironía: la energía interna de la cerveza (etanol) 
            viene de procesos bioquímicos que Joule estudiaba inconscientemente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧊 El desastre del Titanic y la energía interna del agua</h3>
          <p>
            Cuando el Titanic chocó con el iceberg el 14 de abril de 1912, no fue la masa de hielo lo que lo hundió, 
            sino la transferencia masiva de energía interna. El agua del océano Atlántico Norte estaba a -2°C 
            (líquida por la salinidad). Al entrar en contacto con el casco de acero a temperatura ambiente (~10-15°C), 
            el agua absorbió violentamente la energía interna del acero (Q &gt; 0 para el agua, Q &lt; 0 para el acero). 
            El acero se volvió frágil al perder energía interna, fracturándose como vidrio. Ingenieros calculan que 
            ~100 toneladas de agua a -2°C absorvieron ~10 GJ de energía interna del casco en los primeros minutos. 
            Este shock térmico, combinado con el impacto mecánico, causó fracturas que el diseño del barco no anticipó. 
            Lección dolorosa: la energía interna puede ser letal cuando se transfiere rápidamente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌋 La energía interna de los volcanes</h3>
          <p>
            El magma volcánico es un almacén colosal de energía interna. La erupción del Monte Santa Helena (1980) 
            liberó ~24 megatones de energía térmica, equivalente a 1000 bombas atómicas de Hiroshima. Esta energía interna 
            proviene del manto terrestre a 1000-1300°C. Cuando el magma asciende, la presión disminuye (proceso 
            aproximadamente adiabático), convirtiendo energía interna en trabajo de expansión (W &gt; 0, ΔU &lt; 0). 
            Gases disueltos (CO₂, H₂O) se liberan explosivamente: el agua líquida a alta presión (P = 100 MPa, T = 800°C) 
            tiene enorme energía interna; al descomprimir instantáneamente a P = 0.1 MPa, se expande 1000 veces su volumen 
            (ΔU = -W masivo). Esta conversión explosiva de energía interna en trabajo mecánico lanza rocas a velocidades 
            supersónicas. Los vulcanólogos miden flujo de calor (Q) para predecir erupciones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 Los cohetes y la energía interna del combustible</h3>
          <p>
            El Saturn V, cohete que llevó humanos a la Luna, quemaba 15 toneladas de combustible por segundo, 
            liberando 190 GJ/s de energía interna química. La combustión H₂ + O₂ → H₂O libera 241.8 kJ/mol de energía 
            interna almacenada en enlaces químicos. Los gases de escape a 3000 K tienen energía interna U = nC_vT enorme. 
            Estos gases se expanden en la tobera (proceso aproximadamente adiabático), convirtiendo energía interna en 
            energía cinética: ΔU = -W genera gases a 3000 m/s. La eficiencia de conversión (~60%) depende de cuánta 
            energía interna se convierte en energía cinética dirigida vs calor desperdiciado. El Saturn V tenía 3.4 × 10¹² J 
            de energía interna en combustible al despegue. Sin la primera ley (ΔU = Q - W) y el concepto de energía interna, 
            el cálculo de rendimiento de cohetes sería imposible.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧪 La energía interna del café instantáneo</h3>
          <p>
            El proceso de liofilización (freeze-drying) para crear café instantáneo es un tour de force de control de 
            energía interna. El café líquido se congela a -40°C, concentrando energía interna en enlaces de hielo. 
            Luego se coloca en vacío (P = 0.1 kPa), donde el hielo sublima directamente a vapor sin pasar por fase líquida. 
            Este proceso requiere el calor latente de sublimación: 2838 kJ/kg de energía interna debe absorberse (Q &gt; 0). 
            A baja presión, la sublimación ocurre a -30°C en lugar de 100°C, preservando aromas volátiles. Cada kilogramo 
            de café instantáneo representa ~5 kg de café líquido y requirió ~14 MJ de energía para remover el agua sin 
            dañar compuestos aromáticos. El resultado: café que reconstruyes añadiendo agua caliente, que aporta la 
            energía interna que se removió durante la liofilización.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            La energía interna (U) es la energía total microscópica de un sistema, incluyendo energía cinética y 
            potencial molecular. Es una función de estado: depende solo del estado actual (P, V, T), no del camino.
          </li>
          <li>
            La primera ley de la termodinámica relaciona el cambio de energía interna con calor y trabajo: ΔU = Q - W. 
            Esto establece la conservación de la energía en procesos termodinámicos.
          </li>
          <li>
            Para gases ideales, la energía interna depende únicamente de la temperatura: U = nC_vT. El cambio de energía 
            interna es ΔU = nC_vΔT, válido para cualquier proceso con gas ideal.
          </li>
          <li>
            En procesos específicos: isotérmico (ΔU = 0), isocórico (ΔU = Q), adiabático (ΔU = -W), isobárico 
            (ΔU = Q - PΔV). En ciclos completos: ΔU_ciclo = 0, por lo que Q_neto = W_neto.
          </li>
          <li>
            Aplicaciones prácticas: motores de combustión (conversión energía química → mecánica), refrigeración 
            (transporte de energía interna), bombas de calor (aprovechamiento de energía geotérmica), termos 
            (conservación de energía interna), metabolismo humano (gestión de calorías como energía interna). 
            El concepto es fundamental para diseñar sistemas energéticos eficientes.
          </li>
        </ul>
      </div>
    </>
  );
};

export default EnergiaInternaTheory;
