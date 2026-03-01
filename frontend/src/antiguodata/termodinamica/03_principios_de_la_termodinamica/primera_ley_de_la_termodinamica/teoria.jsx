import React from 'react';
import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as primeraLeyDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Primera Ley de la Termodinámica",
  descripcion: "Conservación de la energía en procesos termodinámicos",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO'],
  isTheoryOnly: true
};

const PrimeraLeyTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Primera Ley de la Termodinámica?">
        <Concept title="Definición">
          <p>
            La Primera Ley de la Termodinámica es el principio de conservación de la energía aplicado a sistemas termodinámicos. Establece que la energía no se crea ni se destruye, solo se transforma de una forma a otra.
          </p>
          <p>
            En un sistema cerrado, el cambio en la energía interna es igual al calor transferido al sistema menos el trabajo realizado por el sistema.
          </p>
          <Important>
            <p>Enunciado de la Primera Ley:</p>
            <p>"La energía del universo es constante. La energía puede transformarse de una forma a otra, pero no puede crearse ni destruirse."</p>
          </Important>
        </Concept>
        <Concept title="Características de la Primera Ley">
          <ul>
            <li>Conservación de energía: La energía total permanece constante</li>
            <li>Transformación: La energía puede cambiar de forma (calor ↔ trabajo)</li>
            <li>Balance energético: Entrada - Salida = Acumulación</li>
            <li>Universal: Se aplica a todos los procesos termodinámicos</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuación Fundamental">
        <Concept title="Primera Ley para Sistemas Cerrados">
          <p>
            Para un sistema cerrado (masa constante), la Primera Ley se expresa como:
          </p>
          <Formula 
            expression={String.raw`\Delta U = Q - W`}
            description="Primera Ley de la Termodinámica para sistemas cerrados"
            calculatorId="primera-ley-basica"
            definitions={primeraLeyDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Calor (Q)", expression: String.raw`Q = \Delta U + W` },
              { description: "Calcular Trabajo (W)", expression: String.raw`W = Q - \Delta U` }
            ]}
          />
          <p>Donde:</p>
          <ul>
            <li>ΔU: Cambio de energía interna del sistema (J)</li>
            <li>Q: Calor transferido al sistema (J)</li>
            <li>W: Trabajo realizado por el sistema (J)</li>
          </ul>
        </Concept>
        <Concept title="Convención de Signos">
          <ul>
            <li>Q {'>'} 0: El sistema absorbe calor (endotérmico)</li>
            <li>Q {'<'} 0: El sistema cede calor (exotérmico)</li>
            <li>W {'>'} 0: El sistema realiza trabajo (expansión)</li>
            <li>W {'<'} 0: Se realiza trabajo sobre el sistema (compresión)</li>
            <li>ΔU {'>'} 0: La energía interna aumenta</li>
            <li>ΔU {'<'} 0: La energía interna disminuye</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones en la Vida Real">
        <Concept title="Uso Cotidiano">
          <ul>
            <li>Cocina: Conversión de energía eléctrica/gas en calor</li>
            <li>Calefacción: Transferencia de energía para calentar espacios</li>
            <li>Ejercicio físico: Conversión de energía química en trabajo mecánico</li>
            <li>Baterías: Almacenamiento y liberación de energía</li>
          </ul>
        </Concept>
        <Concept title="Aplicaciones Industriales">
          <ul>
            <li>Motores de combustión: Conversión de energía química en trabajo</li>
            <li>Turbinas de vapor: Generación de electricidad</li>
            <li>Compresores: Aumento de presión mediante trabajo</li>
            <li>Intercambiadores de calor: Transferencia eficiente de energía</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2><span className="emoji-icon">🔧</span> Aplicaciones en la Vida Real</h2>
        
        <div className="theory-subsection">
          <h3>Motor combustión interna Otto 4tiempos gasolina ΔU=Q-W eficiencia térmica 25-30% automóvil transporte</h3>
          <p>El motor de combustión interna Otto opera mediante un ciclo termodinámico de cuatro tiempos: (1) admisión de mezcla aire-gasolina, (2) compresión adiabática con relación de compresión 9:1 a 11:1 que eleva presión y temperatura, (3) combustión (explosión) iniciada por chispa de bujía que alcanza temperatura de 2,500 K y presión máxima de 60 bar, expansión que realiza trabajo empujando el pistón, y (4) escape de gases quemados. El trabajo mecánico del pistón se transfiere al cigüeñal que rota y finalmente a las ruedas, generando típicamente 100 kW de potencia en un motor moderno de automoción de 1.6-2.0 litros de cilindrada.</p>
          
          <p>La Primera Ley de la Termodinámica ΔU = Q - W gobierna el balance energético: la energía química del combustible (gasolina con poder calorífico 44 MJ/kg) se libera como calor Q en la combustión, del cual una parte se convierte en trabajo mecánico W y el resto aumenta la energía interna ΔU o se pierde. La eficiencia térmica real es solo 25-30% debido a pérdidas significativas: gases de escape calientes se llevan 35% de la energía, refrigeración del motor disipa 30%, fricción mecánica consume 5%, y solo el 25-30% restante se transforma en trabajo útil. El balance energético completo confirma que toda la energía química se contabiliza entre trabajo, calor disipado y energía residual en gases de escape.</p>
          
          <p>Las emisiones contaminantes (CO₂ responsable de cambio climático, NOx óxidos de nitrógeno que causan smog y lluvia ácida, HC hidrocarburos no quemados) están reguladas por normativa Euro 6 en Europa que exige catalizadores de tres vías con metales preciosos (platino, paladio, rodio) para reducir emisiones en más del 95%. Las aplicaciones son masivas: automoción personal y transporte ligero (mil millones de vehículos globalmente), generadores eléctricos portátiles para emergencias y zonas remotas, motocicletas y vehículos recreativos.</p>
        </div>

        <div className="theory-subsection">
          <h3>Compresor aire acondicionado trabajo compresión aumento presión temperatura refrigerante R-410A COP 3.5 bomba calor</h3>
          <p>El compresor es el corazón de un sistema de aire acondicionado o bomba de calor, disponible en tipos scroll (espirales entrelazadas), rotativo (pistón rotatorio) o alternativo (pistón lineal). Comprime el refrigerante R-410A (mezcla zeotro³pica de difluorometano R-32 y pentafluoroetano R-125) desde presión baja del evaporador (5 bar) hasta presión alta del condensador (20 bar). Este trabajo de compresión típico de 2 kW suministrado por motor eléctrico aumenta tanto la presión como la temperatura del refrigerante desde 40°C a la salida del evaporador hasta 80°C a la entrada del condensador.</p>
          
          <p>La Primera Ley ΔU = Q - W se aplica al ciclo completo: el trabajo eléctrico W entra al sistema, el evaporador absorbe calor Q_frío del espacio refrigerado (interior del edificio), y el condensador rechaza calor Q_caliente al ambiente exterior. El balance energético es Q_caliente = Q_frío + W, confirmando conservación de energía. El coeficiente de rendimiento o performance COP = Q_frío/W = 3.5 indica que por cada 1 kW de trabajo eléctrico consumido, se extraen 3.5 kW de calor del espacio refrigerado (eficiencia aparente mayor al 100% porque no viola termodinámica: el sistema mueve calor, no lo genera). Con 800 W de consumo eléctrico, la capacidad de refrigeración es 2,800 W, suficiente para climatizar una habitación de 25-30 m².</p>
          
          <p>La eficiencia energética clase A++ según etiquetado europeo representa consumo anual reducido (≈ 180 kWh para uso típico), ahorrando costos y reduciendo emisiones de CO₂. Aplicaciones incluyen climatización residencial (confort térmico verano 24-26°C), comercial (oficinas, tiendas, centros comerciales), conservación de alimentos (supermercados, cámaras frigoríficas), y bombas de calor reversibles para calefacción invernal (modo inverso con COP_calefacción ≈ 4.0). El ciclo es esencialmente un ciclo Rankine inverso de compresión de vapor.</p>
        </div>

        <div className="theory-subsection">
          <h3>Caldera gas condensación alta eficiencia 95% recuperación calor latent vapour combustión CH₄ calefacción ACS</h3>
          <p>La caldera de condensación de gas natural (metano CH₄) representa la tecnología más eficiente disponible para calefacción doméstica, con eficiencias de 95-98% respecto al poder calorífico inferior (PCI = 50 MJ/kg para CH₄). La combustión completa CH₄ + 2O₂ → CO₂ + 2H₂O + 802 kJ/mol se realiza con exceso de aire del 20% (factor lambda λ = 1.2) para garantizar oxidación total, alcanzando temperatura de llama de 1,800°C. Un intercambiador de calor primario de acero inoxidable o aleación de aluminio transfiere energía térmica a agua de calefacción que circula a 80°C en radiadores o suelo radiante (40-50°C).</p>
          
          <p>La innovación clave es un intercambiador secundario adicional que enfría los gases de escape por debajo del punto de rocío (54-57°C) hasta 40°C, condensando el vapor de agua producido en la combustión. Esta condensación recupera el calor latente de vaporización de 2,257 kJ/kg (a presión atmosférica), que representa aproximadamente 11% de la energía total liberada por el metano. Sin condensación, este calor se pierde en los gases de escape calientes (calderas convencionales eficiencia 80-85% respecto PCI, pero solo 72-77% respecto al poder calorífico superior PCS que incluye calor latente). El balance energético de Primera Ley Q_combustible = Q_útil + Q_pérdidas muestra que las pérdidas se reducen a solo 2-5% gracias a la recuperación completa.</p>
          
          <p>Las calderas modernas modulan potencia entre 20-100% mediante control proporcional-integral-derivativo (PID) de la válvula de gas y ventilador, adaptando suministro calorífico a demanda real (calefacción de espacios + agua caliente sanitaria ACS). El rendimiento estacional SCOP (Seasonal Coefficient of Performance) típico es 1.05-1.10, considerando pérdidas por arranques/paradas y standby. Aplicaciones incluyen calefacción residencial unifamiliar y multifamiliar, calefacción de distrito urbano, y ACS (agua caliente sanitaria 40-60°C). La Directiva ErP (Energy-related Products) europea exige etiquetado energético A+++ a D y prohíbe calderas de baja eficiencia desde 2015, impulsando adopción masiva de tecnología de condensación para reducción de consumo energético y emisiones de CO₂.</p>
        </div>

        <div className="theory-subsection">
          <h3>Turbina vapor central térmica 500MW expansión 100bar-0.05bar temperatura 540°C ciclo Rankine eficiencia 40%</h3>
          <p>Una turbina de vapor de gran escala en una central térmica de 500 MW combina etapas de reacción e impulso con álabes móviles (rotor) y fijos (estator) que expanden vapor sobrecalentado desde condiciones de entrada de 540°C y 100 bar hasta escape al condensador a 0.05 bar (vacío parcial) y 32°C. Esta expansión masiva genera trabajo mecánico de rotación del eje a 3,000 rpm (revoluciones por minuto), sincronizado con frecuencia de red eléctrica de 50 Hz (Europa, Asia) mediante generador síncrono que produce electricidad trifásica. La eficiencia isoentrópica de la turbina es 88%, indicando que el trabajo real es 88% del trabajo ideal reversible isoentrópico (sin generación de entropía).</p>
          
          <p>El ciclo Rankine real incluye: bomba de alimentación (comprime agua líquida de 0.05 bar a 100 bar, trabajo bomba ≈ 10 MW), caldera (vaporiza y sobrecalienta agua hasta 540°C 100 bar), opcionalmente recalentador intermedio (recalienta vapor parcialmente expandido para evitar condensación en últimas etapas turbina), turbina de expansión (genera trabajo mecánico 500 MW eléctricos más ≈ 12 MW pérdidas mecánicas/generador = 512 MW eje), y condensador (rechaza calor residual ≈ 750 MW a agua de refrigeración de río/mar/torre). La Primera Ley en forma de entalpía ΔH = Q - W aplicada a la turbina da: trabajo = h_entrada - h_salida = 3,400 - 2,200 = 1,200 kJ/kg. Con caudal másico de vapor de 420 kg/s, potencia = 420 × 1,200 = 504,000 kW ≈ 500 MW.</p>
          
          <p>La eficiencia térmica global del ciclo es η = W_neto/Q_entrada ≈ 40%, limitada por temperatura relativamente baja del vapor (540°C vs temperaturas teoréticamente ideales {'>'} 1,000°C impedidas por límites de materiales). Aplicaciones: generación eléctrica de base con combustibles fósiles (carbón, gas natural en ciclo combinado), energía nuclear (fissión uranio-235 en reactores agua presurizada/ebulliente), geotermia (vapor geotérmico natural), y cogeneración o CHP (Combined Heat and Power) donde el calor residual se aprovecha para calefacción distrito o procesos industriales, aumentando eficiencia global al 80-90%.</p>
        </div>

        <div className="theory-subsection">
          <h3>Refrigerador doméstico COP 2.5 trabajo compresor 150W extracción calor 375W conservación alimentos 4°C evaporador -18°C congelador</h3>
          <p>Un refrigerador doméstico típico utiliza un compresor hermético (sellado, sin mantenimiento) de 150 W de potencia eléctrica que comprime refrigerante R600a (isobutano, hidrocarburo natural con bajo potencial de calentamiento global GWP ≈ 3, sustituyendo CFCs y HCFCs prohibidos por Protocolo Montreal). El ciclo de compresión de vapor consta de: evaporador (serpentín dentro del compartimento refrigerado a -5°C que absorbe calor Q_frío de alimentos y aire interior), compresor (trabajo W de compresión que eleva presión y temperatura del refrigerante), condensador (serpentín en parte posterior que disipa calor Q_caliente al ambiente exterior), y válvula de expansión capilar (tubo estrecho que reduce bruscamente presión y temperatura mediante expansión isoentálpica, efecto Joule-Thomson).</p>
          
          <p>La Primera Ley de conservación de energía aplicada al ciclo completo establece el balance térmico: Q_caliente = Q_frío + W, donde el calor rechazado al ambiente (525 W) es la suma del calor extraído del interior (375 W) más el trabajo de compresión (150 W). El coeficiente de rendimiento COP = Q_frío/W = 375/150 = 2.5 indica que por cada vatio de electricidad consumido, se extraen 2.5 vatios de calor del espacio refrigerado. Esto no viola termodinámica porque el sistema no genera energía, sino que bombea calor desde baja temperatura (interior) a alta temperatura (exterior), proceso que requiere aporte de trabajo externo según Segunda Ley.</p>
          
          <p>La eficiencia energética clase A+++ según etiquetado europeo corresponde a consumo anual de aproximadamente 180 kWh (vs 400-500 kWh para modelos antiguos clase C), logrando ahorro sustancial mediante aislamiento de poliuretano expandido de 50 mm de espesor en paredes, termostato electrónico preciso para control temperatura compartimentos refrigerador (4°C óptimo conservación alimentos frescos) y congelador (-18°C para conservación a largo plazo carne, pescado, vegetales), y descongelación automática mediante resistencia térmica periódica que elimina escarcha acumulada. Aplicaciones: conservación alimentos doméstica (todos los hogares desarrollados), comercial (supermercados con vitrinas refrigeradas COP 1.5-2.0), y hostelería (restaurantes, hoteles con cámaras frigoríficas profesionales).</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2><span className="emoji-icon">📜</span> Contexto Histórico</h2>
        
        <div className="theory-subsection">
          <h3>1824 Sadi Carnot Réflexions puissance motrice feu ciclo reversible eficiencia máxima temperatura calórico teoría incorrecta resultado correcto</h3>
          <p>Nicolas Léonard Sadi Carnot (1796-1832), ingeniero militar francés e hijo del destacado político Lazare Carnot, publicó en 1824 su única obra "Réflexions sur la puissance motrice du feu et sur les machines propres à développer cette puissance" (Reflexiones sobre la potencia motriz del fuego y sobre las máquinas adecuadas para desarrollar esta potencia). Este tratado revolucionario presentó un análisis teórico profundo de las máquinas térmicas, introduciendo el concepto del ciclo Carnot ideal reversible compuesto de cuatro procesos: dos isotermas (expansión absorbiendo calor a temperatura alta T_caliente, compresión cediendo calor a temperatura baja T_fría) alternadas con dos adiabáticas (expansión y compresión sin intercambio de calor). Carnot demostró que la eficiencia máxima η = 1 - T_fría/T_caliente es independiente de la sustancia de trabajo (gas, vapor) o diseño específico de la máquina, dependiendo únicamente de las temperaturas absolutas de los focos térmicos.</p>
          
          <p>Paradójicamente, Carnot basó su razonamiento en la teoría del calórico (calórico como sustancia indestructible que fluye de alta a baja temperatura, análogo al agua cayendo de una cascada generando trabajo), teoría incorrecta que sería reemplazada décadas después por la comprensión moderna del calor como forma de energía. A pesar del razonamiento erróneo, el resultado de Carnot era correcto: su fórmula de eficiencia máxima es exacta y representa un límite termodinámico fundamental que ninguna máquina real puede superar. Esta notable coincidencia se debe a que Carnot capturó correctamente la esencia física del proceso reversible, aunque con terminología conceptualmente incorrecta. Trágicamente, Carnot murió prematuramente en 1832 de cólera a la edad de 36 años, y sus notas personales (que mostraban evolución hacia comprensión correcta del calor como energía) fueron quemadas por precaución sanitaria.</p>
          
          <p>El reconocimiento póstumo de Carnot llegó en la década de 1850 cuando William Thomson (Lord Kelvin) y Rudolf Clausius rescataron su trabajo del olvido, reconociéndolo como el fundamento de la Segunda Ley de la Termodinámica. Clausius introdujo el concepto de entropía S (1865) y demostró que los procesos irreversibles aumentan la entropía del universo, mientras los reversibles (como el ciclo de Carnot) mantienen entropía constante. El límite de eficiencia de Carnot explica por qué ningún motor térmico real alcanza 100% de eficiencia: siempre debe rechazar calor al foco frío, y la fracción convertible en trabajo está limitada fundamentalmente por las temperaturas operativas, estableciendo la flecha temporal termodinámica y la inevitabilidad de la degradación energética.</p>
        </div>

        <div className="theory-subsection">
          <h3>1840s James Prescott Joule equivalente mecánico calor 4.184J=1cal experimento paletas rotación agua fricción conversión trabajo calor</h3>
          <p>James Prescott Joule (1818-1889), cervecero y científico autodidacta británico de Salford, realizó entre 1840 y 1850 una serie de experimentos meticulosos de precisión extraordinaria para determinar el equivalente mecánico del calor, demostrando cuantitativamente que calor y trabajo son formas interconvertibles de energía. Su aparato experimental clásico consistía en un recipiente aislado térmicamente lleno de agua, dentro del cual rotaban paletas accionadas por la caída controlada de pesas mediante poleas. El trabajo gravitatorio realizado por las pesas (masa × gravedad × altura de caída) se disipaba completamente como fricción entre las paletas y el agua, calentando el líquido de forma medible. Joule utilizó termómetros sensibles capaces de detectar cambios de 0.01°F (≈ 0.006°C), logrando precisión sin precedentes para la época.</p>
          
          <p>Tras repetir meticulosamente el experimento 40 veces con diferentes masas y alturas de caída para minimizar errores sistemáticos y aleatorios, Joule obtuvo un valor medio del equivalente mecánico del calor de 4.184 julios por caloría (J/cal), donde 1 caloría se define como la energía necesaria para elevar 1 gramo de agua 1°C (específicamente de 14.5°C a 15.5°C). Este resultado, notable por su exactitud (valor moderno aceptado: 4.184 J/cal exacto por definición desde 1948), constituyó la demostración experimental definitiva de que el calor no es una sustancia material (calórico) sino una forma de energía equivalente al trabajo mecánico. Esto estableció la base empírica de la Primera Ley de la Termodinámica: la energía se conserva en todas sus transformaciones en el universo, unificando mecánica, termodinámica y fenómenos eléctricos en un marco conceptual coherente.</p>
          
          <p>Otros científicos como Hermann von Helmholtz (Alemania) y Julius Robert von Mayer (médico alemán que propuso conservación de energía en 1842 basándose en observaciones fisiológicas de marineros en trópicos) contribuyeron paralelamente al desarrollo de estas ideas, aunque Joule proporcionó la evidencia experimental más convincente. Una anécdota famosa cuenta que durante su luna de miel en Suiza en 1847, Joule llevó consigo un termómetro sensible a la cascada de Sallanches, intentando (sin éxito debido a turbulencia y evaporación) medir el aumento de temperatura del agua al caer 150 metros por conversión de energía potencial gravitatoria en calor. Su trabajo fue finalmente reconocido por la Royal Society de Londres con la medalla Copley en 1870, uno de los mayores honores científicos británicos, consolidando su legado como pionero de la termodinámica moderna.</p>
        </div>

        <div className="theory-subsection">
          <h3>1850 Rudolf Clausius formulación matemática Primera Ley ΔU=Q-W energía interna función estado diferencial exacta integral independiente camino</h3>
          <p>Rudolf Clausius (1822-1888), físico alemán profesor en Zürich y Bonn, publicó en 1850 el artículo fundamental "Über die bewegende Kraft der Wärme und die Gesetze, welche sich daraus für die Wärmelehre selbst ableiten lassen" (Sobre la fuerza motriz del calor y las leyes que pueden derivarse de ella para la teoría del calor), donde presentó la formulación matemática rigurosa y moderna de la Primera Ley de la Termodinámica. Clausius introdujo el concepto crucial de energía interna U como función de estado del sistema (depende solo del estado actual, no de la historia), expresando la Primera Ley como ΔU = Q - W, donde el cambio de energía interna ΔU = ∫dU es una integral de línea independiente de la trayectoria seguida en el espacio de estados (P,V,T), siendo dU un diferencial exacto.</p>
          
          <p>En contraste, el calor Q y el trabajo W son funciones dependientes del camino o proceso: diferentes trayectorias entre los mismos estados inicial y final dan diferentes valores de Q y W, aunque su diferencia Q - W siempre es igual a ΔU (función de estado). Matemáticamente se representan con diferenciales inexactas δQ y δW (delta minúscula) en lugar de dQ, dW, indicando que no existe una "función calor" Q(P,V,T) o "función trabajo" W(P,V,T) cuyas diferenciales totales sean integrables. Esta distinción fundamental entre funciones de estado (U, H, S, G, A) y funciones de proceso (Q, W) es central en termodinámica teórica. Clausius estableció claramente el principio de equivalencia y conservación de energía: en un universo aislado (sistema + entorno sin intercambio externo), la energía total se conserva absolutamente en todas las transformaciones.</p>
          
          <p>Más allá de la Primera Ley, Clausius realizó contribuciones fundamentales a la Segunda Ley al introducir en 1865 el concepto revolucionario de entropía S, definida mediante dS = δQ_rev/T (integrando calor reversible dividido por temperatura absoluta). Demostró que la entropía aumenta en procesos irreversibles (dS_universo {'>'} 0), concepto que explica la dirección temporal de procesos naturales (flecha del tiempo termodinámica) y la degradación energética (energía de alta calidad como trabajo mecánico se convierte irreversiblemente en calor de baja temperatura). Clausius formuló proféticamente las dos leyes en forma memorable: "La energía del universo es constante; la entropía del universo tiende a un máximo", especulando sobre la eventual "muerte térmica" del universo en equilibrio termodinámico final de máxima entropía (temperatura uniforme, sin gradientes, procesos cesados), tema de debate científico y filosófico que persiste en cosmología moderna.</p>
        </div>

        <div className="theory-subsection">
          <h3>1905 Albert Einstein equivalencia masa-energía E=mc² relatividad especial Primera Ley generalizada nuclear fusión fisión</h3>
          <p>Albert Einstein (1879-1955) publicó en su annus mirabilis de 1905 el artículo revolucionario sobre relatividad especial "Zur Elektrodynamik bewegter Körper" (Sobre la electrodinámica de cuerpos en movimiento), del cual se deriva como consecuencia inesperada y profunda la equivalencia masa-energía expresada en la ecuación más famosa de la física: E = mc², donde c = 2.998 × 10⁸ m/s es la velocidad de la luz en el vacío. Esta relación establece que masa y energía son manifestaciones intercambiables de una misma magnitud física fundamental: una partícula en reposo de masa m posee energía intrínseca E_reposo = mc², cantidad colosal debido al factor c² ≈ 9 × 10¹⁶ m²/s². Por ejemplo, 1 kg de masa equivale a 9 × 10¹⁶ J = 90 petajulios = 21 megatoneladas de TNT, energía suficiente para suministrar electricidad a una ciudad durante meses.</p>
          
          <p>Las aplicaciones prácticas de E = mc² son esenciales en física nuclear: fisión de uranio-235 (bombardeo con neutroni térmico produce ²³⁵U → ¹¹⁴Ba + ⁸⁶Kr + 3n + 200 MeV, equivalente a defecto de masa Δm ≈ 0.215 u = 200 MeV/c²), iniciando reacción en cadena exotérmica explotada en reactores nucleares de potencia y (históricamente) bombas atómicas Hiroshima/Nagasaki 1945. Fusión nuclear en el Sol y estrellas convierte hidrógeno en helio mediante cadena protón-protón: 4¹H → ⁴He + 2e⁺ + 2ν_e + 2γ, liberando 26.7 MeV por reacción (0.7% de masa se convierte en energía), fuente de luz y calor que sostiene vida en la Tierra. La curva de energía de enlace nuclear por nucleón muestra máximo en hierro-56 (8.8 MeV/nucleón), explicando por qué fusión de elementos ligeros (H, He, Li) y fisión de elementos pesados (U, Pu) liberan energía, mientras fusión de elementos pesados o fisión de ligeros requieren energía.</p>
          
          <p>La Primera Ley de la Termodinámica se generaliza en relatividad para incluir masa-energía: la conservación total es de energía-masa combinadas, permitiendo transformaciones mutuas. Aplicaciones médicas incluyen tomografía por emisión de positrones (PET): aniquilación e⁺ + e⁻ → 2γ produce dos fotones de 511 keV (m_e c²) en direcciones opuestas, detectados para localizar tumores marcados con radioisótopos emisores de positrones. Astrofísica moderna explica energía de supernovas, agujeros negros, y radiación de fondo cósmico mediante E = mc², consolidando la relatividad como pilar fundamental de la física del siglo XX junto a mecánica cuántica.</p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span className="emoji-icon">💡</span> Curiosidades y Anécdotas</h2>
        
        <div className="theory-subsection">
          <h3>Paradoja movimiento perpetuo máquina imposible Primera Ley violación conservación energía intentos históricos fracasos patentes rechazadas oficinas</h3>
          <p>El movimiento perpetuo de primera especie se refiere a una máquina hipotética que produciría trabajo de manera continua sin recibir energía externa, violando flagrantemente la Primera Ley de la Termodinámica (conservación de energía). A lo largo de la historia, innumerables inventores han intentado crear tales dispositivos, todos condenados al fracaso por razones físicas fundamentales. Leonardo da Vinci (siglo XV) esbozó diseños de ruedas desequilibradas con pesos móviles que supuestamente rotarían eternamente, y péndulos con contrapesos que mantendrían oscilación perpetua. En el siglo XVII, Johann Bessler (Orffyreus) afirmó haber construido una rueda de 3 metros de diámetro en Kassel que giraba continuamente, atrayendo atención internacional. Sin embargo, tras su muerte en 1745, se descubrió que era un engaño fraudulento: criados ocultos movían cuerdas para mantener la rotación.</p>
          
          <p>Durante el siglo XIX proliferaron inventores que presentaban diseños ingeniosos de máquinas de movimiento perpetuo, promoviendo inversiones fraudulentas. Las oficinas de patentes (USPTO en Estados Unidos, EPO en Europa) finalmente adoptaron cláusulas específicas rechazando automáticamente solicitudes de patentes de movimiento perpetuo, citando imposibilidad termodinámica. Los intentos modernos incluyen dispositivos con imanes permanentes aprovechando fuerzas magnéticas, o flotación magnética con superconductores. Sin embargo, análisis riguroso revela que fricción inevitable (aire, rodamientos, histéresis magnética) disipa energía como calor, deteniendo eventualmente cualquier movimiento. Incluso superconductores en levitación magnética (efecto Meissner, resistencia eléctrica cero) requieren energía inicial para enfriar a temperatura criogénica ({'<'} 100 K) y mantenimiento continuo de refrigeración.</p>
          \n          <p>La educación pública sobre leyes físicas fundamentales ha reducido pero no eliminado estas afirmaciones pseudocientíficas. La Primera Ley es inexorable: energía no se crea ni se destruye, solo se transforma, y toda máquina real tiene pérdidas disipativas que requieren aporte continuo de energía externa. Comprender por qué el movimiento perpetuo es imposible es esencial para alfabetización científica básica y protección contra fraudes energéticos que explotan esperanzas de \"energía gratis\" en un mundo con crisis energética y climática.</p>
        </div>

        <div className="theory-subsection">
          <h3>Experimento Joule luna miel cascada Sallanches 1847 intento medir aumento temperatura agua caída 150metros fracaso sensibilidad termómetro</h3>
          <p>Una anécdota romántica y científica legendaria cuenta que James Joule, durante su luna de miel en 1847 con Amelia Grimes, llevó consigo un termómetro sensible en su viaje a Suiza. Al visitar la cascada de Sallanches con altura de caída de aproximadamente 150 metros, Joule realizó un cálculo teórico de la conversión de energía potencial gravitatoria en calor del agua: ΔT = gh/c = (10 m/s² × 150 m)/(4,200 J/(kg·°C)) = 0.36°C, donde g es aceleración gravitatoria, h altura, y c calor específico del agua. Este aumento térmico de 0.36°C debería ser medible con termómetros de la época (sensibilidad típica 0.1-0.2°F ≈ 0.05-0.1°C). Sin embargo, el experimento resultó un fracaso completo por múltiples razones prácticas.</p>
          
          <p>Los problemas incluían: salpicadura y atomización del agua cayendo que aumentaba área superficial expuesta al aire frío, evaporación acelerada que enfriaba el agua (calor latente de vaporización 2,257 kJ/kg absorbe calor), mezcla turbulenta con aire ambiente a diferente temperatura, y ausencia de condiciones controladas ideales de laboratorio (recipiente aislado, volumen definido, agitación homogénea). Las variables incontroladas generaron ruido experimental que enmascaró completamente la pequeña señal térmica buscada, imposibilitando medición concluyente. A pesar del resultado negativo, la anécdota ilustra la perseverancia obsesiva de Joule en su búsqueda de la verdad sobre la naturaleza de la energía y el equivalente mecánico del calor, incluso durante momentos personales como su luna de miel.</p>
          
          <p>La confirmación definitiva llegó posteriormente en su laboratorio de Manchester mediante experimentos controlados con el aparato de paletas rotativas, donde pudo aislar térmicamente el sistema, medir con precisión instrumental excepcional (termómetros calibrados 0.01°F), y eliminar variables confusoras. Esta historia destaca la importancia del control experimental riguroso en ciencia: grandes descubrimientos requieren no solo intuición brillante e ideas innovadoras, sino también diseño experimental meticuloso, precisión instrumental adecuada, y análisis estadístico de múltiples repeticiones para distinguir señal real de ruido experimental.</p>
        </div>

        <div className="theory-subsection">
          <h3>Efecto Joule-Thomson expansión gas válvula temperatura cambia coeficiente positivo negativo hidrógeno helio temperatura inversión licuefacción gases</h3>
          <p>El efecto Joule-Thomson, descubierto en 1852 por James Prescott Joule y William Thomson (Lord Kelvin), describe el cambio de temperatura que experimenta un gas real al expandirse a través de una válvula porosa o capilar en un proceso isentálpico (entalpía constante ΔH = 0). El coeficiente de Joule-Thomson μ_JT = (∂T/∂P)_H (derivada parcial de temperatura respecto a presión manteniendo entalpía constante) puede ser positivo (enfriamiento al expandirse) o negativo (calentamiento al expandirse), dependiendo del gas y de la temperatura inicial. La mayoría de gases (N₂, O₂, CO₂, aire) tienen μ_JT {'>'} 0 a temperatura ambiente, enfriándose significativamente durante expansión, fenómeno explotado industrialmente en licuefacción de gases mediante el proceso Linde desarrollado en 1895.</p>
          
          <p>Sin embargo, hidrógeno (H₂) y helio (He) presentan comportamiento anómalo: tienen temperaturas de inversión muy bajas (200 K para H₂, 40 K para He), por debajo de las cuales μ_JT {'>'} 0 (enfriamiento) pero por encima μ_JT {'<'} 0 (calentamiento). A temperatura ambiente (300 K), estos gases se calientan al expandirse, imposibilitando licuefacción directa por efecto Joule-Thomson. Se requiere pre-enfriamiento usando nitrógeno líquido (-196°C = 77 K) para reducir temperatura inicial por debajo de la inversión, o alternativamente el proceso Claude que expande el gas en turbina o pistón con émbolo, extrayendo trabajo mecánico que reduce temperatura más eficientemente que expansión irreversible en válvula.</p>
          
          <p>Las aplicaciones prácticas en criogenia e industria de gases licuados son esenciales: GNL (gas natural licuado) para transporte marítimo internacional (-162°C), oxígeno líquido medicinal para hospitales y terapia respiratoria, nitrógeno líquido para conservación criogénica de células y tejidos biológicos, y separación de aire por destilación fraccionada para obtener O₂, N₂ y Ar puros (99.99+%). La comprensión del efecto Joule-Thomson requiere termodinámica de gases reales con ecuaciones de estado como van der Waals que incorporan fuerzas intermoleculares y volumen molecular finito, desviándose del comportamiento ideal PV = nRT.</p>
        </div>

        <div className="theory-subsection">
          <h3>Metabolismo humano 2000kcal/día equivalente 100W bombilla continua energía alimentos ATP hidrólisis trabajo mecánico calor corporal</h3>
          <p>El cuerpo humano es una extraordinaria máquina térmica biológica que convierte energía química de alimentos en trabajo mecánico (contracción muscular, movimiento) y calor corporal (mantenimiento temperatura 37°C). La energía metabólica proviene de macronutrientes con diferentes contenidos calóricos: carbohidratos (4 kcal/g, glucosa, almidón), lípidos (9 kcal/g, grasas, aceites, fuente más densa), y proteínas (4 kcal/g, aminoácidos, función estructural primaria). El consumo diario de un adulto promedio es aproximadamente 2,000 kcal = 8,400 kJ, equivalente a potencia metabólica media de 8,400 kJ / (24 h × 3,600 s/h) = 97 W ≈ 100 W, comparable a una bombilla incandescente tradicional funcionando continuamente 24 horas.</p>
          
          <p>La conversión energética ocurre mediante respiración celular aeróbica en mitocondrias: glucólisis (citoplasma) + ciclo de Krebs (matriz mitocondrial) + cadena de transporte de electrones (membrana interna) oxidan glucosa C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energía, sintetizando adenosín trifosfato (ATP) que almacena energía en enlaces fosfato de alta energía (~30.5 kJ/mol). La eficiencia de conversión es ~38% (38 ATP por glucosa vs máximo teórico 100%), el resto (62%) se disipa como calor metabólico que mantiene temperatura corporal homeostática. El trabajo mecánico de músculos esqueléticos (contracción actina-miosina consumiendo ATP) tiene eficiencia 20-25%, mientras 75-80% se disipa como calor eliminado por convección (flujo sanguíneo periférico, vasodilatación), radiación infrarroja, y evaporación de sudor (600 kcal/litro H₂O evaporada, mecanismo más eficiente en ejercicio intenso).</p>
          
          <p>La termorregulación hipotalámica mantiene temperatura central 37°C ± 0.5°C (homeostasis) mediante retroalimentación negativa: hipotermia activa termogénesis (temblor muscular, grasa parda), hipertermia activa sudoración y vasodilatación. Durante ejercicio físico intenso (maratón 42 km), el metabolismo puede aumentar 10× hasta 1,000 W (gasto total ~3,000 kcal), explicando pérdida de peso mediante balance energético Primera Ley aplicada a biología: si consumo calórico {'<'} gasto metabólico, déficit se compensa oxidando reservas adiposas (1 kg grasa ≈ 7,700 kcal). Comprender el metabolismo desde perspectiva termodinámica es fundamental para nutrición, medicina deportiva, obesidad, diabetes y enfermedades metabólicas.</p>
        </div>
      </div>

      <div className="theory-summary-section">
        <h2><span className="emoji-icon">📋</span> Resumen de Conceptos Clave</h2>
        
        <ul className="key-points-list">
          <li><strong>Primera Ley de la Termodinámica</strong>: principio de conservación de energía formulado como ΔU = Q - W, donde ΔU es cambio de energía interna (función de estado independiente del camino), Q calor transferido al sistema (positivo absorbido, negativo cedido), y W trabajo realizado por el sistema (positivo expansión, negativo compresión). Establece equivalencia entre calor y trabajo como formas de energía en tránsito que modifican la energía interna del sistema.</li>
          <li><strong>Energía interna U</strong>: energía total microscópica del sistema incluyendo energía cinética traslacional, rotacional y vibracional de moléculas, energía potencial de interacciones intermoleculares (van der Waals, enlaces hidrógeno), enlaces químicos intramoleculares, y energía nuclear en nucleones. Depende de temperatura, presión y composición del sistema. Para gas ideal monoatómico U = (3/2)nRT, para real incluye términos de interacción adicionales.</li>
          <li><strong>Calor Q</strong>: transferencia espontánea de energía térmica entre sistemas a diferentes temperaturas, fluyendo de alta a baja temperatura (Segunda Ley). Mecanismos: conducción (sólidos, gradiente térmico, ley Fourier), convección (fluidos, movimiento másico, natural/forzada), radiación (ondas electromagnéticas, ley Stefan-Boltzmann, independiente de medio). Proceso adiabático Q = 0 (aislamiento térmico perfecto o tiempo muy corto). Medición: calorímetro.</li>
          <li><strong>Trabajo W</strong>: transferencia de energía mediante fuerza actuando a través de desplazamiento en frontera móvil del sistema. Tipos: frontera PdV (expansión/compresión gases), eléctrico (carga moviéndose en campo), gravitatorio (cambio altura), superficie (cambio área), elástico (deformación). Cálculo: W = ∫PdV para gases, dependiente de trayectoria termodinámica (isotérmica, adiabática, isobárica, isocórica). Convención signos: W {'>'} 0 sistema realiza trabajo sobre entorno.</li>
          <li><strong>Aplicaciones tecnológicas</strong>: motores térmicos Otto/Diesel (25-40% eficiencia, automoci ón), turbinas vapor Rankine (40-45%, generación eléctrica), compresores/refrigeradores (COP 2-4, climatización), calderas condensación (95-98%, calefacción eficiente), intercambiadores calor (recuperación energía industrial), cogeneración CHP (80-90% eficiencia global, aprovechamiento calor residual). Análisis energético identifica pérdidas y optimiza diseño para máxima eficiencia y sostenibilidad.</li>
          <li><strong>Procesos termodinámicos</strong>: isotérmico (T constante, ΔU = 0 gas ideal, Q = W), isobárico (P constante, W = PΔV), isocórico (V constante, W = 0, ΔU = Q), adiabático (Q = 0, W = -ΔU), politrópico (caso general PVⁿ = constante). Ciclos cerrados (estado final = inicial, ΔU = 0, Q_neto = W_neto) fundamentan máquinas térmicas. Eficiencia límite Carnot η = 1 - T_fría/T_caliente establece máximo teórico insuperable para conversión calor → trabajo.</li>
        </ul>
      </div>
    </>
  );
};

export default PrimeraLeyTheory;
