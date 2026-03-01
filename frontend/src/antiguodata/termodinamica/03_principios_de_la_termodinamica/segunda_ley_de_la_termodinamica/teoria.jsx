import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as segundaLeyDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Segunda Ley de la Termodinámica",
  descripcion: "Entropía, irreversibilidad y dirección de los procesos",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO'],
  isTheoryOnly: true
};

const SegundaLeyTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Segunda Ley de la Termodinámica?">
        <Concept title="Definición">
          <p>
            La Segunda Ley de la Termodinámica establece la dirección en la que ocurren los procesos naturales y define el concepto de entropía. Indica que la entropía del universo siempre aumenta en procesos espontáneos.
          </p>
          <Important>
            <p>Enunciados de la Segunda Ley:</p>
            <ul>
              <li>Clausius: "Es imposible que el calor fluya espontáneamente de un cuerpo frío a uno caliente"</li>
              <li>Kelvin-Planck: "Es imposible construir una máquina que convierta completamente calor en trabajo"</li>
            </ul>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Entropía">
        <Concept title="Cambio de Entropía">
          <p>
            La entropía es una medida del desorden o aleatoriedad de un sistema. Para un proceso reversible:
          </p>
          <Formula 
            expression={String.raw`\Delta S = \frac{Q_{rev}}{T}`}
            description="Cambio de entropía en proceso reversible"
            calculatorId="segunda-ley-entropia"
            definitions={segundaLeyDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Calor Reversible", expression: String.raw`Q_{rev} = \Delta S \cdot T` },
              { description: "Entropía Gas Ideal", expression: String.raw`\Delta S = n \cdot R \cdot \ln\left(\frac{V_f}{V_i}\right)` }
            ]}
          />
          <p>Donde:</p>
          <ul>
            <li>ΔS: Cambio de entropía (J/K)</li>
            <li>Q<sub>rev</sub>: Calor transferido reversiblemente (J)</li>
            <li>T: Temperatura absoluta (K)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Máquinas Térmicas">
        <Concept title="Eficiencia de Máquinas Térmicas">
          <p>
            La eficiencia de una máquina térmica está limitada por la Segunda Ley:
          </p>
          <Formula 
            expression={String.raw`\eta = \frac{W}{Q_H} = 1 - \frac{Q_C}{Q_H}`}
            description="Eficiencia de máquina térmica"
            calculatorId="segunda-ley-maquinas"
            definitions={segundaLeyDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Trabajo de Máquina", expression: String.raw`W = Q_H - Q_C` },
              { description: "Eficiencia de Carnot", expression: String.raw`\eta_{Carnot} = 1 - \frac{T_C}{T_H}` }
            ]}
          />
          <p>Donde:</p>
          <ul>
            <li>η: Eficiencia (adimensional)</li>
            <li>W: Trabajo neto producido (J)</li>
            <li>Q<sub>H</sub>: Calor absorbido del foco caliente (J)</li>
            <li>Q<sub>C</sub>: Calor cedido al foco frío (J)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Coeficiente de Rendimiento">
        <Concept title="COP de Refrigeradores">
          <p>
            El coeficiente de rendimiento (COP) mide la eficiencia de refrigeradores y bombas de calor:
          </p>
          <Formula 
            expression={String.raw`COP_R = \frac{Q_C}{W}`}
            description="Coeficiente de rendimiento de refrigerador"
            calculatorId="segunda-ley-cop"
            definitions={segundaLeyDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Trabajo de Refrigerador", expression: String.raw`W = \frac{Q_C}{COP_R}` }
            ]}
          />
          <p>Donde:</p>
          <ul>
            <li>COP<sub>R</sub>: Coeficiente de rendimiento</li>
            <li>Q<sub>C</sub>: Calor extraído del espacio frío (J)</li>
            <li>W: Trabajo consumido (J)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos Prácticos">
        <Example 
          title="Ejemplo 1: Cambio de Entropía"
          problem="Un sistema absorbe 500 J de calor a 300 K de forma reversible. Calcula el cambio de entropía."
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>Q<sub>rev</sub> = 500 J</li>
                <li>T = 300 K</li>
              </ul>
              <p>Solución:</p>
              <p>ΔS = Q<sub>rev</sub> / T</p>
              <p>ΔS = 500 J / 300 K</p>
              <p>ΔS = 1.67 J/K</p>
            </div>
          }
        />

        <Example 
          title="Ejemplo 2: Eficiencia de Carnot"
          problem="Una máquina de Carnot opera entre 500 K y 300 K. ¿Cuál es su eficiencia máxima?"
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>T<sub>H</sub> = 500 K</li>
                <li>T<sub>C</sub> = 300 K</li>
              </ul>
              <p>Solución:</p>
              <p>η<sub>Carnot</sub> = 1 - T<sub>C</sub>/T<sub>H</sub></p>
              <p>η<sub>Carnot</sub> = 1 - 300/500 = 0.4</p>
              <p>η<sub>Carnot</sub> = 40%</p>
            </div>
          }
        />
      </TheorySection>

      <TheorySection title="Aplicaciones en la Vida Real">
        <Concept title="Uso Cotidiano">
          <ul>
            <li>Refrigeradores: Transferencia de calor del frío al caliente</li>
            <li>Motores: Limitación en la eficiencia de conversión</li>
            <li>Aire acondicionado: Bombas de calor</li>
          </ul>
        </Concept>
        <Concept title="Aplicaciones Industriales">
          <ul>
            <li>Centrales eléctricas: Eficiencia limitada por temperaturas</li>
            <li>Procesos químicos: Dirección de reacciones</li>
            <li>Criogenia: Límites en enfriamiento</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2><span className="emoji-icon">🔧</span> Aplicaciones en la Vida Real</h2>
        
        <div className="theory-subsection">
          <h3>Ciclo Carnot máquina térmica ideal eficiencia máxima η=1-T_C/T_H temperatura reservorio caliente 600K fría 300K rendimiento 50%</h3>
          <p>El ciclo Carnot representa la máquina térmica ideal reversible, compuesta por cuatro procesos termodinámicos: expansión isotérmica a temperatura caliente T_H=600K donde el sistema absorbe calor Q_H del foco caliente, expansión adiabática donde la temperatura disminuye sin intercambio de calor, compresión isotérmica a temperatura fría T_C=300K donde el sistema cede calor Q_C al foco frío, y compresión adiabática que retorna el sistema al estado inicial. Este ciclo teórico establece el límite superior de eficiencia para cualquier máquina térmica operando entre dos reservorios térmicos dados.</p>
          <p>La eficiencia térmica del ciclo Carnot viene determinada exclusivamente por las temperaturas absolutas de los dos reservorios: η=(T_H-T_C)/T_H=(600-300)/600=0.50 o 50%. Este resultado fundamental de la Segunda Ley de la Termodinámica indica que ninguna máquina real puede superar este rendimiento operando entre las mismas temperaturas, independientemente del diseño o la sustancia de trabajo empleada. La eficiencia depende únicamente de la diferencia de temperatura relativa, lo que explica por qué las centrales térmicas buscan maximizar T_H (vapor sobrecalentado a 540-600°C) y minimizar T_C (condensador a 30-40°C) para mejorar el rendimiento.</p>
          <p>Las máquinas térmicas reales presentan eficiencias significativamente inferiores al límite de Carnot debido a la irreversibilidad inherente a los procesos: los motores Otto de gasolina alcanzan 25-30%, los motores Diesel 35-40%, y las centrales térmicas de vapor 40-45%. Las pérdidas se deben a fricción mecánica, transferencia de calor con diferencias finitas de temperatura, turbulencia en fluidos, combustión irreversible y tiempos limitados de los procesos. El ciclo Carnot sirve como referencia teórica imprescindible en ingeniería térmica para evaluar el margen de mejora tecnológico y las limitaciones fundamentales impuestas por la Segunda Ley en la conversión de energía térmica en trabajo mecánico.</p>
        </div>

        <div className="theory-subsection">
          <h3>Bomba calor aerotermia COP 4.0 extracción calor aire exterior -5°C calefacción interior 20°C consumo 1kW aporte 4kW</h3>
          <p>La bomba de calor aerotérmica aire-agua constituye un sistema de climatización que extrae energía térmica del aire exterior mediante un ciclo termodinámico de compresión de vapor con refrigerante R-32. El evaporador situado en la unidad exterior opera a -5°C=268K absorbiendo calor del ambiente (Q_C=3kW), el compresor eléctrico aporta trabajo mecánico (W=1kW) elevando la presión y temperatura del refrigerante, y el condensador en la unidad interior cede calor al agua de calefacción a 45°C=318K (Q_H=4kW). Este principio permite "bombear" calor desde un foco frío al ambiente interior caliente, proceso imposible espontáneamente según la Segunda Ley de la Termodinámica.</p>
          <p>El coeficiente de rendimiento COP=Q_H/W=4.0 indica que por cada kW eléctrico consumido, el sistema aporta 4kW térmicos a la vivienda, representando una eficiencia energética 4 veces superior a una caldera de gas (η≈0.95) y muy superior a calefacción eléctrica por resistencia (COP=1.0). La Segunda Ley establece el límite teórico de Carnot: COP_máx=T_H/(T_H-T_C)=318/(318-268)=6.36, de modo que la bomba real alcanza 4.0/6.36=63% de la eficiencia ideal. Las pérdidas se deben a fricción en el compresor, irreversibilidad en transferencia de calor con diferencias finitas de temperatura, caídas de presión en válvulas y tuberías, y pérdidas eléctricas en el motor.</p>
          <p>La eficiencia de la bomba de calor disminuye al bajar la temperatura exterior: a -10°C el COP puede reducirse a 2.5, requiriendo resistencias eléctricas de apoyo en climas extremos. Su aplicación se extiende a calefacción residencial, comercial e industrial, producción de agua caliente sanitaria (ACS), y climatización integrada con suelo radiante. El etiquetado energético A+++ y la normativa europea ErP (Ecodesign) impulsan su adopción, especialmente combinada con electricidad renovable fotovoltaica para reducir emisiones de CO₂ en edificación. La aerotermia representa una tecnología clave en la transición energética hacia la descarbonización del sector térmico según directrices de eficiencia energética.</p>
        </div>

        <div className="theory-subsection">
          <h3>Central térmica carbón 1000MW eficiencia 38% temperatura vapor 540°C presión 180bar condensador 30°C torre refrigeración pérdidas</h3>
          <p>La central térmica de carbón pulverizado opera mediante un ciclo Rankine donde el combustible se quema en una caldera para producir vapor sobrecalentado a 540°C=813K y 180bar. Este vapor de alta presión impulsa una turbina de vapor de múltiples etapas (alta, media y baja presión) que acciona un generador eléctrico produciendo 1000MW de potencia eléctrica. Tras expandirse en la turbina, el vapor se condensa en un condensador de vacío a 0.04bar y 30°C=303K, donde el calor residual se disipa mediante una torre de refrigeración evaporativa con caudal de agua de 40m³/s proveniente de un río o mediante circuito cerrado, liberando aproximadamente 1600MW térmicos al ambiente.</p>
          <p>La eficiencia térmica de la central alcanza 38%, lo que significa que de 2632MW térmicos de entrada por combustión del carbón, solo 1000MW se convierten en electricidad útil. La Segunda Ley establece el límite de Carnot para estas temperaturas: η_C=1-T_C/T_H=1-303/813=0.627 o 63%, de modo que la planta real opera al 38/63=60% de la eficiencia ideal. Las pérdidas principales incluyen: gases de escape de la chimenea a 200°C que arrastran 8-10% de la energía, radiación y convección en la caldera (3-5%), fricción mecánica en turbina y generador (2-3%), pérdidas en el transformador (1%), y la gran cantidad de calor residual cedido al condensador (52%) impuesto por la Segunda Ley.</p>
          <p>Para mejorar la eficiencia se emplean tecnologías de cogeneración que recuperan el calor residual para calefacción urbana de distrito, alcanzando eficiencias globales del 85%. La central emite aproximadamente 820g de CO₂ por kWh eléctrico generado, motivando normativas de reducción de emisiones y desarrollo de tecnologías de captura y almacenamiento de carbono (CCS). La transición energética hacia renovables (solar, eólica) y el cierre progresivo de plantas de carbón responde a compromisos climáticos internacionales, aunque la Segunda Ley de la Termodinámica seguirá limitando la eficiencia de cualquier central térmica basada en combustibles fósiles o biomasa.</p>
        </div>

        <div className="theory-subsection">
          <h3>Motor Otto ciclo real eficiencia 28% relación compresión 10:1 temperatura combustión 2300K pérdidas escape fricción refrigeración</h3>
          <p>El motor de combustión interna Otto de cuatro tiempos (admisión, compresión, explosión, escape) opera con una mezcla de aire y gasolina que se comprime con una relación volumétrica de 10:1, alcanzando una presión de 20bar y temperatura de 600K antes de la ignición. La chispa de la bujía inicia la combustión prácticamente isocórica elevando la temperatura a 2300K y la presión a 60bar, seguida de una expansión que realiza trabajo sobre el pistón. Los gases de escape se liberan a aproximadamente 800K, arrastrando una fracción significativa de la energía del combustible. Este ciclo termodinámico real difiere del ciclo Otto ideal en múltiples aspectos debido a procesos irreversibles.</p>
          <p>La eficiencia térmica real del motor alcanza solo 28%, muy inferior al 60% del ciclo ideal con la misma relación de compresión, debido a las limitaciones impuestas por la Segunda Ley de la Termodinámica. Las pérdidas energéticas se distribuyen aproximadamente: gases de escape (35%), refrigeración del motor por el sistema de agua (30%), fricción mecánica en pistones, bielas y árboles de levas (7%), y trabajo útil en el cigüeñal (28%). La irreversibilidad de la combustión con turbulencia, la transferencia de calor con diferencias finitas de temperatura entre gases y paredes del cilindro, y el tiempo limitado de los procesos reducen drásticamente el rendimiento respecto al límite teórico.</p>
          <p>Para reducir emisiones contaminantes (NOx, HC, CO) se emplean catalizadores de tres vías que convierten químicamente estos gases en H₂O, CO₂ y N₂, cumpliendo normativas Euro 6. Tecnologías modernas como inyección directa de combustible, turbocomprensores y downsizing (reducción de cilindrada manteniendo potencia) han elevado la eficiencia hasta 35% en los mejores diseños. Los vehículos híbridos que combinan motor térmico con eléctrico recuperan energía del frenado regenerativo, alcanzando eficiencias globales del 40%. Sin embargo, la Segunda Ley impone límites fundamentales a la conversión de energía química en trabajo mecánico en cualquier motor térmico.</p>
        </div>

        <div className="theory-subsection">
          <h3>Refrigerador doméstico COP 2.8 temperatura evaporador -5°C condensador 40°C compresor 120W extracción calor 336W congelador -18°C</h3>
          <p>El refrigerador doméstico funciona mediante un ciclo de compresión de vapor con un compresor hermético que circula refrigerante R600a (isobutano) por el sistema. En el evaporador situado en el interior del frigorífico, el refrigerante a -5°C=268K absorbe calor de los alimentos y el aire interior con una tasa de 336W, vaporizándose en el proceso. El compresor consume 120W de energía eléctrica para comprimir el vapor, elevando su presión y temperatura. En el condensador ubicado en la parte posterior, el refrigerante a 40°C=313K cede 456W de calor al ambiente (336W extraídos + 120W del compresor), condensándose de nuevo a líquido, que luego pasa por una válvula de expansión capilar que reduce su presión y temperatura, completando el ciclo.</p>
          <p>El coeficiente de rendimiento COP=Q_C/W=336/120=2.8 cuantifica la eficiencia del refrigerador, indicando que por cada 120W consumidos se extraen 336W de calor del interior. La Segunda Ley establece el límite teórico de Carnot: COP_máx=T_C/(T_H-T_C)=268/(313-268)=5.96, de modo que el refrigerador real alcanza 2.8/5.96=47% de la eficiencia ideal de Carnot. Las pérdidas se deben a fricción en el compresor, irreversibilidad en las transferencias de calor (el evaporador requiere estar más frío que el interior del frigorífico, y el condensador más caliente que el ambiente), caídas de presión en tuberías y válvulas, y pérdidas eléctricas en el motor del compresor.</p>
          <p>El aislamiento térmico de poliuretano expandido con conductividad 0.02W/(m·K) y espesor 50mm minimiza las infiltraciones de calor desde el exterior, reduciendo el trabajo del compresor. Un refrigerador clase A+++ consume aproximadamente 150kWh/año, cumpliendo con la normativa europea de ecoetiqueta energética que clasifica electrodomésticos por su eficiencia. Las aplicaciones se extienden más allá del hogar: conservación de alimentos en supermercados, transporte refrigerado en logística de cadena de frío, y almacenamiento farmacéutico de medicamentos y vacunas. El compartimento congelador opera a -18°C para preservación a largo plazo, requiriendo mayor trabajo del compresor según lo establecido por la Segunda Ley de la Termodinámica.</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2><span className="emoji-icon">📜</span> Contexto Histórico</h2>
        
        <div className="theory-subsection">
          <h3>1824 Sadi Carnot Réflexions análisis máquinas térmicas ciclo reversible eficiencia máxima temperatura fundamento Segunda Ley calórico error</h3>
          <p>Nicolas Léonard Sadi Carnot, ingeniero militar francés e hijo del matemático Lazare Carnot, publicó en 1824 su obra fundamental "Réflexions sur la puissance motrice du feu et sur les machines propres à développer cette puissance" (Reflexiones sobre la potencia motriz del fuego). En este trabajo pionero, Carnot realizó un análisis teórico profundo del rendimiento de las máquinas de vapor, proponiendo un ciclo termodinámico ideal compuesto por cuatro procesos reversibles: dos isotermas y dos adiabáticas. Demostró que el trabajo máximo obtenible y la eficiencia η=1-T_fría/T_caliente dependen únicamente de las temperaturas de los dos reservorios térmicos, anticipando el concepto de temperatura absoluta aunque sin conocer aún la escala Kelvin.</p>
          <p>Paradójicamente, Carnot basó su razonamiento en la teoría del calórico, que consideraba el calor como una sustancia indestructible que fluye de temperatura alta a baja, teoría que posteriormente se demostró errónea. Sin embargo, sus conclusiones sobre la eficiencia máxima y la imposibilidad de conversión completa de calor en trabajo resultaron correctas, constituyendo un principio fundamental de la Segunda Ley de la Termodinámica. Carnot estableció que toda máquina térmica requiere necesariamente un reservorio frío al que ceder calor, imposibilitando la conversión total de energía térmica en trabajo mecánico, límite termodinámico fundamental que ninguna tecnología puede superar.</p>
          <p>Trágicamente, Carnot falleció prematuramente en 1832 de cólera a la edad de 36 años, y muchos de sus manuscritos fueron quemados por precaución sanitaria de la época. Su hermano Hippolyte recuperó algunos documentos, pero el reconocimiento de la trascendencia de su trabajo llegó décadas después, cuando William Thomson (Lord Kelvin) y Rudolf Clausius en la década de 1850 reformularon la termodinámica sobre bases matemáticas rigurosas. El ciclo de Carnot se reconoció entonces como la máquina térmica ideal reversible que define el límite superior de eficiencia, y sus ideas sobre la irreversibilidad y la dirección de los procesos naturales se convirtieron en la esencia de la Segunda Ley de la Termodinámica moderna.</p>
        </div>

        <div className="theory-subsection">
          <h3>1850 Rudolf Clausius formulación Segunda Ley enunciado calor fluye espontáneamente temperatura alta baja irreversibilidad natural</h3>
          <p>Rudolf Clausius, físico alemán y profesor en Zürich, publicó en 1850 su artículo seminal "Über die bewegende Kraft der Wärme und die Gesetze, welche sich daraus für die Wärmelehre selbst ableiten lassen" (Sobre la fuerza motriz del calor), donde formuló matemáticamente tanto la Primera como la Segunda Ley de la Termodinámica. Su enunciado de la Segunda Ley establece: "Es imposible un proceso cuyo único efecto sea la transferencia de calor de un cuerpo frío a uno caliente", capturando la espontaneidad y direccionalidad inherente de los procesos térmicos. Este principio introduce el concepto de "flecha del tiempo" termodinámico, distinguiendo procesos naturales espontáneos de aquellos que requieren trabajo externo.</p>
          <p>Clausius desarrolló la desigualdad fundamental ∮δQ/T≤0 para ciclos cerrados, donde la igualdad se aplica a procesos reversibles ideales y la desigualdad a procesos irreversibles reales. Esta expresión matemática cuantifica la irreversibilidad inherente a todos los procesos naturales, explicando por qué las máquinas térmicas reales siempre presentan eficiencias inferiores al límite de Carnot. Las pérdidas se deben a fricción mecánica, turbulencia en fluidos, transferencia de calor con diferencias finitas de temperatura, y tiempos limitados que impiden alcanzar estados de equilibrio verdadero. La formulación de Clausius proporcionó la base matemática para evaluar cuantitativamente el rendimiento de motores, refrigeradores y centrales térmicas.</p>
          <p>En 1865, Clausius introdujo el concepto revolucionario de entropía S, acuñando el término del griego τροπή (tropé, transformación). Definió la entropía como una magnitud de estado mediante dS=δQ_rev/T, donde δQ_rev es el calor transferido reversiblemente a temperatura T. La entropía cuantifica el grado de dispersión de la energía y el desorden molecular en un sistema. La genialidad de Clausius fue reconocer que en procesos irreversibles la entropía del universo siempre aumenta, formulando el principio fundamental: "La energía del universo es constante; la entropía del universo tiende a un máximo". Posteriormente, Ludwig Boltzmann proporcionó la interpretación estadística microscópica S=k_B ln(Ω), conectando la termodinámica macroscópica con la mecánica estadística y la teoría cinética de gases.</p>
        </div>

        <div className="theory-subsection">
          <h3>1851 William Thomson Lord Kelvin enunciado Segunda Ley imposibilidad conversión completa calor trabajo ciclo único reservorio</h3>
          <p>William Thomson, posteriormente Lord Kelvin, físico y matemático británico de la Universidad de Glasgow, propuso en 1851 un enunciado alternativo de la Segunda Ley de la Termodinámica: "Es imposible construir una máquina térmica que, operando en un ciclo, extraiga calor de un único reservorio y lo convierta íntegramente en trabajo". Este enunciado, conocido como el principio de Kelvin-Planck, es lógicamente equivalente al de Clausius, como puede demostrarse por contradicción: si se pudiera violar uno, también se podría violar el otro. El enunciado de Kelvin descarta la existencia del movimiento perpetuo de segunda especie, máquinas que no violan la conservación de energía (Primera Ley) pero sí la direccionalidad de los procesos (Segunda Ley), alcanzando eficiencias del 100%.</p>
          <p>Kelvin había introducido previamente en 1848 la escala de temperatura absoluta basada en el ciclo de Carnot, definiendo el cero absoluto en 0K=-273.15°C mediante extrapolación de la ley de gases ideales. Esta escala termodinámica, independiente de la sustancia termométrica empleada, resultó fundamental para la formulación precisa de las leyes de la termodinámica. La constante de proporcionalidad en la relación PV=NkT para gases ideales lleva su nombre: constante de Boltzmann k_B=1.38×10⁻²³J/K, aunque históricamente fue determinada posteriormente. El límite de eficiencia de Carnot η=1-T_C/T_H se expresa elegantemente en esta escala absoluta, mostrando que alcanzar eficiencia unitaria requeriría T_C=0K (cero absoluto) o T_H=∞, ambos imposibles físicamente.</p>
          <p>Más allá de la termodinámica, Kelvin realizó contribuciones fundamentales en telegrafía transoceánica, resolviendo problemas de atenuación de señales en cables submarinos del Atlántico en la década de 1860, lo que le valió título nobiliario en 1892. También trabajó en el análisis del envejecimiento del Sol, proponiendo junto a Helmholtz que la energía solar procedía de contracción gravitatoria (mecanismo Helmholtz-Kelvin), estimando la edad del Sol en 20-40 millones de años. Esta cifra entraba en conflicto con las evidencias geológicas y la teoría de la evolución de Darwin que requerían escalas temporales de cientos de millones de años. La resolución llegó con el descubrimiento de la radiactividad por Becquerel (1896) y posteriormente la fusión nuclear, revelando que el Sol obtiene su energía de reacciones termonucleares 4H→He, con una edad real de 4600 millones de años.</p>
        </div>

        <div className="theory-subsection">
          <h3>1877 Ludwig Boltzmann interpretación estadística entropía S=k_B ln Ω microestados macroestado probabilidad desorden información</h3>
          <p>Ludwig Boltzmann, físico austriaco y profesor en Viena, estableció en 1877 la conexión fundamental entre la termodinámica macroscópica y la mecánica estadística microscópica mediante su célebre ecuación de la entropía: S=k_B ln(Ω), donde Ω es el número de microestados (configuraciones microscópicas de posiciones y velocidades moleculares) compatibles con un macroestado dado (definido por variables como presión, volumen, temperatura). La constante de Boltzmann k_B=1.38×10⁻²³J/K relaciona la temperatura con la energía cinética molecular promedio. Esta interpretación estadística revela que el aumento de entropía en procesos espontáneos corresponde a la evolución hacia estados de mayor probabilidad, con mayor número de microestados posibles, es decir, mayor desorden molecular.</p>
          <p>Boltzmann desarrolló la teoría cinética de gases, derivando la distribución de velocidades moleculares Maxwell-Boltzmann y las ecuaciones de transporte que describen viscosidad, conductividad térmica y difusión en términos de colisiones moleculares. Su H-teorema (1872) demostró matemáticamente que la función H=-∫f ln(f)dv (relacionada con la entropía) aumenta monotónicamente en un gas no equilibrado hasta alcanzar el máximo en equilibrio, proporcionando una demostración microscópica de la Segunda Ley. Sin embargo, esta conclusión provocó una polémica profunda: las ecuaciones de Newton que gobiernan el movimiento molecular son reversibles temporalmente (t→-t), ¿cómo puede emerger la irreversibilidad macroscópica de leyes microscópicas reversibles?</p>
          <p>Las paradojas de Loschmidt (1876, inversión temporal de velocidades debería decrecer la entropía) y Zermelo (1896, teorema de recurrencia de Poincaré implica que el sistema debería retornar arbitrariamente cerca de cualquier estado inicial) cuestionaron el fundamento del H-teorema. Boltzmann respondió que la irreversibilidad es estadística, no absoluta: las fluctuaciones pueden decrecer momentáneamente la entropía, pero en escalas temporales astronómicamente grandes. Un sistema macroscópico de 10²³ moléculas tiene una probabilidad prácticamente nula de retornar espontáneamente a un estado de baja entropía. Tras décadas de controversia y depresión personal, Boltzmann se suicidó en 1906, sin llegar a ver la plena aceptación de sus ideas. Su ecuación S=k_B ln(Ω) está grabada en su tumba en Viena, y hoy es fundamental en física estadística, mecánica cuántica, termodinámica de información (entropía de Shannon) y teoría de la información.</p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span className="emoji-icon">💡</span> Curiosidades y Anécdotas</h2>
        
        <div className="theory-subsection">
          <h3>Demonio Maxwell paradoja 1867 criatura inteligente puerta molecular separación rápidas lentas violación aparente Segunda Ley resolución información</h3>
          <p>James Clerk Maxwell propuso en 1867 un célebre experimento mental conocido como el "demonio de Maxwell": una criatura inteligente microscópica controla una puerta entre dos compartimentos de un gas inicialmente en equilibrio térmico. El demonio observa la velocidad de cada molécula que se aproxima y abre la puerta selectivamente: permite pasar moléculas rápidas (alta energía cinética) del compartimento B al A, y moléculas lentas (baja energía) de A a B. Con el tiempo, el compartimento A se calienta y B se enfría, creando una diferencia de temperatura sin realizar trabajo macroscópico aparente, lo que constituiría una violación flagrante de la Segunda Ley de la Termodinámica. Esta paradoja desafió la comprensión fundamental de la irreversibilidad durante décadas.</p>
          <p>La resolución de la paradoja llegó en el siglo XX mediante la física de la información. Leó Szilárd demostró en 1929 que la medición de la velocidad de cada molécula requiere obtener información, proceso que consume energía. Rolf Landauer estableció en 1961 el principio fundamental: el borrado de información tiene un coste energético mínimo de k_B T ln(2) por bit borrado, disipando necesariamente calor al entorno e incrementando su entropía. Charles Bennett refinó en 1982 estos conceptos mostrando que la computación puede ser reversible, pero el demonio debe eventualmente borrar su memoria para funcionar cíclicamente, compensando exactamente el decremento de entropía del gas con el incremento en el entorno, preservando así la Segunda Ley.</p>
          <p>En 2010, Shoichi Toyabe y colaboradores realizaron una demostración experimental del demonio de Maxwell usando una trampa óptica láser con una partícula microscópica de poliestireno. Mediante retroalimentación electrónica basada en observación de la posición de la partícula, extrajeron trabajo de fluctuaciones térmicas en aparente violación de la Segunda Ley, pero el análisis completo incluyendo el coste energético del procesamiento de información confirmó la validez universal de la Segunda Ley. Esta conexión profunda entre termodinámica e información es fundamental en computación cuántica, donde operaciones lógicas reversibles minimizan disipación, y en teoría de la información, donde la entropía de Shannon S=-Σp_i ln(p_i) mide la incertidumbre de mensajes, con unidades de bits en lugar de julios/kelvin.</p>
        </div>

        <div className="theory-subsection">
          <h3>Flecha tiempo direccionalidad cosmológica termodinámica psicológica entropía universo aumenta Big Bang baja entropía inicial destino térmico</h3>
          <p>La "flecha del tiempo" se refiere a la asimetría observada entre pasado y futuro en procesos naturales, manifestada en tres formas interrelacionadas: la flecha cosmológica (expansión del universo desde el Big Bang), la flecha termodinámica (aumento de entropía según la Segunda Ley), y la flecha psicológica (memoria del pasado pero no del futuro). Paradójicamente, las leyes fundamentales de la física a nivel microscópico son reversibles temporalmente: las ecuaciones de Newton, Maxwell, Schrödinger y Einstein permanecen invariantes bajo inversión temporal t→-t. La irreversibilidad macroscópica emerge estadísticamente del comportamiento colectivo de ~10²³ partículas, donde estados de alta entropía (desordenados) son abrumadoramente más probables que estados de baja entropía (ordenados).</p>
          <p>El origen de la flecha del tiempo reside en las condiciones iniciales del universo hace 13800 millones de años. El universo primordial tras el Big Bang se encontraba en un estado de bajísima entropía: una distribución extremadamente homogénea de materia y radiación a temperatura ~3000K, observada hoy como el fondo cósmico de microondas (CMB) a 2.7K tras el enfriamiento por expansión. Esta homogeneidad inicial contrasta con la estructura actual del universo: galaxias, estrellas, planetas, vida, resultado de la gravitación que agrupa materia localmente disminuyendo entropía en esas regiones, pero aumentando enormemente la entropía global mediante generación de radiación en estrellas. La entropía del universo observable ha crecido de ~10⁸⁸k_B inicialmente a ~10¹⁰⁴k_B actualmente, dominada por agujeros negros supermasivos.</p>
          <p>Los agujeros negros tienen una entropía colosal dada por la fórmula de Bekenstein-Hawking: S=k_B c³A/(4Għ), proporcional al área A del horizonte de eventos (no al volumen), donde c es la velocidad de la luz, G la constante gravitatoria y ħ la constante de Planck reducida. Un agujero negro estelar de 10 masas solares tiene S~10⁶⁰k_B, y los supermasivos de 10⁹ masas solares alcanzan S~10⁹⁰k_B. Stephen Hawking demostró en 1974 que los agujeros negros emiten radiación térmica a temperatura T=ħc³/(8πGMk_B), evaporándose lentamente en escalas de 10⁶⁷ años para agujeros estelares. El destino último del universo, si la expansión acelerada actual continúa indefinidamente, es la "muerte térmica": equilibrio termodinámico a temperatura uniforme cercana al cero absoluto con entropía máxima posible, donde no pueden ocurrir más procesos irreversibles en tiempo t→∞.</p>
        </div>

        <div className="theory-subsection">
          <h3>Eficiencia fotosíntesis 1-2% solar química glucosa límite termodinámico 11% pérdidas espectro absorción respiración plantas biocombustibles</h3>
          <p>La fotosíntesis de las plantas convierte energía solar en energía química almacenada en glucosa mediante la reacción global 6CO₂+6H₂O+luz→C₆H₁₂O₆+6O₂, con una eficiencia típica de apenas 1-2% en cultivos naturales. Los cultivos optimizados como caña de azúcar y maíz alcanzan 3-4% en condiciones ideales de luz, agua y nutrientes. ¿Por qué una eficiencia tan baja en un proceso evolutivamente perfeccionado durante 3000 millones de años? El límite termodinámico teórico basado en el ciclo de Carnot operando entre la temperatura del Sol (5800K) y la Tierra (300K) sería η_Carnot=1-300/5800=95%, sugiriendo un enorme margen de mejora. Sin embargo, múltiples pérdidas intrínsecas reducen drásticamente la eficiencia alcanzable a un límite práctico de ~11%.</p>
          <p>Las pérdidas principales incluyen: (1) Espectro de absorción limitado: la clorofila absorbe principalmente en las bandas azul (400-500nm) y roja (600-700nm), utilizando solo 43% de la radiación solar fotosintéticamente activa (PAR), reflejando la luz verde (por eso las hojas son verdes); (2) Energía de fotones: los fotones azules tienen energía excesiva (3.1eV) respecto a la requerida (1.8eV), disipándose el exceso como calor por fluorescencia y desexcitación (~20% de pérdidas); (3) Respiración: las plantas consumen 30-50% de la glucosa producida en su propia respiración celular para mantenimiento, crecimiento y reproducción, especialmente durante la noche cuando no hay fotosíntesis; (4) Limitaciones cinéticas: la enzima RuBisCO que fija CO₂ tiene baja especificidad y puede fijar O₂ en fotorrespiración, proceso que consume energía sin producir glucosa.</p>
          <p>A pesar de la baja eficiencia, la fotosíntesis sustenta toda la vida en la Tierra y tiene aplicaciones cruciales en agricultura para producción de alimentos, y en biocombustibles como etanol (fermentación de caña de azúcar, maíz) y biodiesel (aceites vegetales). La investigación en fotosíntesis artificial busca superar estas limitaciones mediante catalizadores químicos y células fotoelectroquímicas que dividen agua en H₂ y O₂ usando luz solar, alcanzando eficiencias de 10-15% en prototipos de laboratorio. El hidrógeno producido serviría como combustible renovable sin emisiones de CO₂. Comprender las restricciones termodinámicas y cinéticas de la fotosíntesis natural, impuestas por la Segunda Ley, guía el diseño racional de sistemas artificiales más eficientes para captura y almacenamiento de energía solar.</p>
        </div>

        <div className="theory-subsection">
          <h3>Entropía agujeros negros área horizonte eventos temperatura Hawking evaporación radiación información paradoja resolución holografía</h3>
          <p>Los agujeros negros son objetos astrofísicos extremos donde la gravedad relativista es tan intensa que ni siquiera la luz puede escapar del horizonte de eventos, superficie esférica de radio de Schwarzschild r_s=2GM/c². Según la relatividad general de Einstein, la materia colapsa hacia una singularidad central de densidad infinita. Jacob Bekenstein propuso en 1972 que los agujeros negros poseen entropía termodinámica proporcional al área de su horizonte de eventos: S=k_B c³A/(4Għ)=k_B c³(4πr_s²)/(4Għ), donde A=4πr_s² es el área, G la constante de gravitación universal y ħ la constante de Planck reducida. Esta entropía es colosal: un agujero negro estelar de 10 masas solares tiene S≈10⁶⁰k_B, millones de órdenes de magnitud superior a la entropía del Sol (~10⁵⁷k_B).</p>
          <p>Stephen Hawking descubrió en 1974 que los agujeros negros emiten radiación térmica cuántica a temperatura T=ħc³/(8πGMk_B) debido a fluctuaciones cuánticas del vacío cerca del horizonte (creación de pares partícula-antipartícula donde una cae al agujero y otra escapa). Para un agujero negro estelar de 10M_☉, T≈6nanokelvin (billonésimas de kelvin), mientras que agujeros supermasivos de 10⁹M_☉ en centros galácticos tienen T≈0.6picokelvin. Esta radiación causa evaporación lenta: el tiempo de vida es proporcional a M³, alcanzando t_evap≈10⁶⁷años para agujeros estelares, enormemente superior a la edad actual del universo de 10¹⁰años≈1.4×10¹⁰años. Los agujeros negros microscópicos primordiales de masa ~10¹⁵g creados en el Big Bang habrían evaporado completamente en 13800 millones de años.</p>
          <p>La radiación de Hawking conduce a la paradoja de la información: si un agujero negro evapora completamente emitiendo radiación térmica aleatoria, ¿qué sucede con la información cuántica de la materia que cayó originalmente? Esto violaría la unitaridad de la mecánica cuántica, principio fundamental que establece la conservación de información. La resolución propuesta involucra el principio holográfico y la correspondencia AdS/CFT de Juan Maldacena: la entropía de un volumen 3D está completamente codificada en su frontera 2D (el horizonte), sugiriendo que la información no se destruye sino que se codifica en correlaciones sutiles de la radiación emitida. La entropía de entrelazamiento cuántico entre el interior y exterior del agujero juega un papel crucial. Esta área activa de investigación conecta gravedad cuántica, teoría de cuerdas y termodinámica, buscando una teoría unificada donde la Segunda Ley emerja de principios cuánticos fundamentales.</p>
        </div>
      </div>

      <div className="theory-summary-section">
        <h2><span className="emoji-icon">📋</span> Resumen de Conceptos Clave</h2>
        
        <ul className="key-points-list">
          <li><strong>Segunda Ley Termodinámica</strong>: establece que la entropía de un sistema aislado aumenta en procesos irreversibles espontáneos y permanece constante en procesos reversibles ideales, definiendo la direccionalidad temporal ("flecha del tiempo") de los procesos naturales. Ningún proceso real puede disminuir la entropía del universo (sistema + entorno), lo que impone límites fundamentales a la eficiencia de conversión energética y descarta el movimiento perpetuo de segunda especie.</li>
          <li><strong>Entropía S</strong>: magnitud de estado que mide el grado de desorden molecular o dispersión de energía en un sistema, relacionada con la probabilidad de microestados mediante S=k_B ln(Ω) de Boltzmann. La desigualdad fundamental dS≥δQ/T establece que la igualdad se aplica a procesos reversibles y la desigualdad a irreversibles. La entropía alcanza su valor máximo en equilibrio termodinámico, estado final de cualquier sistema aislado donde no pueden ocurrir más procesos espontáneos.</li>
          <li><strong>Enunciado Clausius</strong>: "Es imposible un proceso cuyo único efecto sea la transferencia de calor de un cuerpo frío a uno caliente", capturando la espontaneidad inherente del flujo de calor desde temperatura alta a baja. Este principio explica por qué refrigeradores y bombas de calor requieren trabajo externo para transferir calor "cuesta arriba" térmicamente, contra el gradiente natural de temperatura establecido por la Segunda Ley.</li>
          <li><strong>Enunciado Kelvin-Planck</strong>: "Es imposible construir una máquina térmica que, operando en un ciclo, extraiga calor de un único reservorio y lo convierta íntegramente en trabajo", descartando eficiencias del 100%. Toda máquina térmica debe operar entre dos reservorios (foco caliente y foco frío) y necesariamente ceder calor al reservorio frío, limitando la eficiencia a valores menores que la unidad según η {'<'} 1-T_C/T_H, el límite de Carnot.</li>
          <li><strong>Ciclo Carnot</strong>: máquina térmica ideal reversible compuesta por dos procesos isotérmicos (absorción/cesión de calor a temperatura constante) y dos procesos adiabáticos (sin intercambio de calor). Define la eficiencia máxima alcanzable η_Carnot=1-T_C/T_H=(T_H-T_C)/T_H operando entre temperaturas absolutas T_H (foco caliente) y T_C (foco frío). Todas las máquinas reales (motores Otto 25-30%, Diesel 35-40%, centrales térmicas Rankine 40-45%) tienen eficiencias inferiores debido a irreversibilidades como fricción, transferencia de calor con diferencias finitas de temperatura, turbulencia y tiempos limitados de procesos.</li>
          <li><strong>Aplicaciones prácticas</strong>: la Segunda Ley gobierna centrales térmicas de carbón/gas/nuclear (eficiencia típica 38-45% limitada por Carnot), motores de combustión interna (25-35%), refrigeradores domésticos (COP≈2.8), bombas de calor aerotérmicas (COP≈4.0), y aire acondicionado. El coeficiente de rendimiento COP=Q_útil/W cuantifica eficiencia en sistemas de refrigeración/calefacción. Las pérdidas inevitables por irreversibilidad se disipan como calor al ambiente, aumentando la entropía del entorno. Optimizar la eficiencia energética de estos sistemas dentro de los límites termodinámicos es crucial para reducir consumo de combustibles fósiles y emisiones de CO₂ en la transición hacia energías renovables.</li>
        </ul>
      </div>
    </>
  );
};

export default SegundaLeyTheory;
