import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as ciclo_carnotDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Ciclo de Carnot",
  descripcion: "El ciclo termodinámico reversible más eficiente posible",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CicloCarnotTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es el Ciclo de Carnot?">
        <Concept title="Definición">
          <p>
            El ciclo de Carnot es un ciclo termodinámico reversible ideal que opera entre dos 
            fuentes térmicas a temperaturas constantes. Fue propuesto por Sadi Carnot en 1824 y establece el 
            límite teórico máximo de eficiencia para cualquier máquina térmica.
          </p>
          
          <p>
            Es el ciclo más eficiente posible que puede operar entre dos temperaturas dadas, y sirve como 
            estándar de comparación para todas las máquinas térmicas reales.
          </p>

          <Important>
            <p>Características del Ciclo de Carnot:</p>
            <ul>
              <li>Totalmente reversible: No hay pérdidas por fricción ni irreversibilidades</li>
              <li>Cuatro procesos: Dos isotérmicos y dos adiabáticos</li>
              <li>Máxima eficiencia: Ninguna máquina real puede superarla</li>
              <li>Independiente del fluido: La eficiencia solo depende de las temperaturas</li>
            </ul>
          </Important>
        </Concept>

        <Concept title="Las Cuatro Etapas del Ciclo">
          <ol>
            <li>Expansión isotérmica (T_H): El gas absorbe calor Q_H del foco caliente</li>
            <li>Expansión adiabática: El gas se expande sin intercambio de calor, enfriándose</li>
            <li>Compresión isotérmica (T_C): El gas cede calor Q_C al foco frío</li>
            <li>Compresión adiabática: El gas se comprime sin intercambio de calor, calentándose</li>
          </ol>
        </Concept>
      </TheorySection>

      <TheorySection title="Eficiencia del Ciclo de Carnot">
        <Concept title="Fórmula de la Eficiencia">
          <p>
            La eficiencia del ciclo de Carnot depende únicamente de las temperaturas de los focos térmicos:
          </p>

          <Formula 
            expression={String.raw`\eta_C = 1 - \frac{T_C}{T_H}`}
            description="Eficiencia del ciclo de Carnot"
            calculatorId="ciclo_carnot-grupo-1"
            definitions={ciclo_carnotDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Temperatura del foco frío", expression: String.raw`T_C = T_H(1 - \eta_C)` },
              { description: "Temperatura del foco caliente", expression: String.raw`T_H = \frac{T_C}{1 - \eta_C}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>η_C: Eficiencia del ciclo de Carnot (adimensional, entre 0 y 1)</li>
            <li>T_C: Temperatura absoluta del foco frío (K)</li>
            <li>T_H: Temperatura absoluta del foco caliente (K)</li>
          </ul>

          <p>Nota importante: Las temperaturas DEBEN estar en Kelvin (K). La eficiencia se expresa 
          como decimal (0.4) o porcentaje (40%).</p>
        </Concept>

        <Concept title="Implicaciones de la Eficiencia">
          <ul>
            <li>η_C {'<'} 1 siempre: Es imposible convertir todo el calor en trabajo</li>
            <li>η_C aumenta con T_H: Mayor temperatura del foco caliente → mayor eficiencia</li>
            <li>η_C aumenta con menor T_C: Menor temperatura del foco frío → mayor eficiencia</li>
            <li>η_C = 1 solo si T_C = 0 K: Imposible en la práctica (tercera ley)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Trabajo y Calor en el Ciclo">
        <Concept title="Trabajo Neto">
          <p>
            El trabajo neto realizado por el ciclo es la diferencia entre el calor absorbido y el calor cedido:
          </p>

          <Formula 
            expression={String.raw`W = Q_H - Q_C`}
            description="Trabajo neto del ciclo"
            calculatorId="ciclo_carnot-grupo-1"
            definitions={ciclo_carnotDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>W: Trabajo neto realizado por el ciclo (J)</li>
            <li>Q_H: Calor absorbido del foco caliente (J)</li>
            <li>Q_C: Calor cedido al foco frío (J)</li>
          </ul>
        </Concept>

        <Concept title="Relación entre Calores y Temperaturas">
          <p>
            En el ciclo de Carnot, la relación entre los calores es proporcional a las temperaturas:
          </p>

          <Formula 
            expression={String.raw`\frac{Q_C}{Q_H} = \frac{T_C}{T_H}`}
            description="Relación de calores en Carnot"
            calculatorId="ciclo_carnot-grupo-1"
            definitions={ciclo_carnotDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>Q_C: Calor cedido al foco frío (J)</li>
            <li>Q_H: Calor absorbido del foco caliente (J)</li>
            <li>T_C: Temperatura del foco frío (K)</li>
            <li>T_H: Temperatura del foco caliente (K)</li>
          </ul>

          <p>
            Esta relación es fundamental y muestra que en un ciclo reversible, la relación de calores 
            es igual a la relación de temperaturas absolutas.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Teorema de Carnot">
        <Concept title="Enunciado del Teorema">
          <p>
            El teorema de Carnot establece dos principios fundamentales:
          </p>
          <ol>
            <li>Ninguna máquina térmica que opere entre dos focos térmicos puede ser más 
            eficiente que una máquina de Carnot operando entre los mismos focos.</li>
            <li>Todas las máquinas de Carnot que operen entre los mismos dos focos térmicos 
            tienen la misma eficiencia, independientemente del fluido de trabajo.</li>
          </ol>
        </Concept>

        <Concept title="Consecuencias">
          <ul>
            <li>La eficiencia de Carnot es un límite superior absoluto</li>
            <li>Las máquinas reales siempre tienen eficiencias menores debido a irreversibilidades</li>
            <li>La eficiencia solo depende de las temperaturas, no del diseño específico</li>
            <li>Proporciona un estándar para evaluar máquinas térmicas reales</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones Prácticas">
        <Concept title="Importancia del Ciclo de Carnot">
          <ul>
            <li>Límite teórico: Establece la máxima eficiencia posible</li>
            <li>Diseño de motores: Guía para optimizar máquinas térmicas</li>
            <li>Centrales eléctricas: Evaluación de eficiencia de turbinas</li>
            <li>Refrigeración: Base para ciclos de refrigeración ideales</li>
            <li>Investigación: Desarrollo de nuevas tecnologías energéticas</li>
          </ul>
        </Concept>

        <Concept title="Limitaciones Prácticas">
          <p>
            Aunque el ciclo de Carnot es teóricamente perfecto, es imposible de realizar en la práctica porque:
          </p>
          <ul>
            <li>Los procesos isotérmicos requieren tiempo infinito</li>
            <li>No existen procesos perfectamente reversibles</li>
            <li>Siempre hay fricción y pérdidas de calor</li>
            <li>Los materiales tienen limitaciones de temperatura</li>
          </ul>
          <p>
            Sin embargo, sigue siendo fundamental como referencia teórica y objetivo de diseño.
          </p>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>⚡ Centrales termoeléctricas de ciclo combinado</h3>
          <p>
            Las centrales de ciclo combinado modernas utilizan el principio de Carnot para maximizar la eficiencia energética. Una turbina de gas opera a temperaturas de combustión extremadamente altas (T_H ≈ 1400-1600°C = 1673-1873 K), produciendo electricidad directamente. Los gases de escape calientes (aún a 500-600°C) no se desperdician: alimentan una caldera de recuperación de calor que genera vapor para una turbina de vapor secundaria (ciclo Rankine). El resultado final: η_total ≈ 60-62%, significativamente mayor que una central térmica convencional (35-40%). Por ejemplo, la central de Irsching 4 (Alemania, Siemens) alcanzó 60.75% de eficiencia en 2011, récord mundial. Comparando con Carnot ideal: T_H = 1873 K, T_C = 298 K (ambiente) → η_Carnot = 1 - 298/1873 = 84.1%. La diferencia (84.1% - 60.75% = 23.4%) representa pérdidas reales inevitables: fricción mecánica en turbinas, irreversibilidades termodinámicas en combustión, transferencia de calor no isotérmica, pérdidas radiativas. El ciclo combinado acerca la tecnología real al límite teórico de Carnot al capturar energía en dos etapas de temperatura.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 Motores de combustión interna y eficiencia real</h3>
          <p>
            Los motores de automóviles operan bajo severas restricciones que los alejan del ciclo ideal de Carnot. Un motor de gasolina típico tiene T_H ≈ 2500 K (temperatura pico de combustión) y T_C ≈ 400 K (gases de escape), dando η_Carnot_teórico = 1 - 400/2500 = 84%. Sin embargo, la eficiencia real es solo 25-30% para motores convencionales. Las pérdidas principales: combustión irreversible (la combustión explosiva no es isotérmica, violando Carnot), fricción mecánica (pistones, cigüeñal, válvulas), pérdida de calor por paredes del cilindro (enfriamiento necesario para evitar fusión de metales), escape de gases calientes sin recuperación de energía, bombeo de gases (trabajo gastado en admisión/escape). Los motores diésel modernos alcanzan 35-40% de eficiencia gracias a mayor relación de compresión (15:1 vs 10:1 gasolina) y combustión más controlada. Fórmula 1 (2025): motores híbridos V6 turbo + MGU-H (recuperación energía térmica del turbo) + MGU-K (recuperación frenado cinético) logran η ≈ 50%, aproximándose más al límite de Carnot mediante recuperación de calor y optimización extrema de cada proceso.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>❄️ Refrigeración criogénica y licuefacción de gases</h3>
          <p>
            La licuefacción de gases (nitrógeno líquido a 77 K, helio líquido a 4.2 K) utiliza ciclos inversos de Carnot (refrigeradores). Para licuar nitrógeno: T_C = 77 K (temperatura objetivo), T_H = 300 K (ambiente). El coeficiente de rendimiento (COP) ideal de Carnot para refrigerador es COP_Carnot = T_C/(T_H - T_C) = 77/(300-77) = 0.345. Esto significa que por cada 1 kJ de trabajo mecánico invertido, se extraen idealmente 0.345 kJ de calor del nitrógeno. En la práctica, plantas industriales alcanzan COP_real ≈ 0.15-0.20 (43-58% de Carnot ideal). El proceso real (ciclo Linde-Hampson o Claude) combina: compresión isotérmica del aire (trabajo W), expansión Joule-Thomson (enfriamiento por efecto irreversible), intercambiadores de calor contracorriente (recuperación de frío de gases licuados), separación por destilación criogénica (N₂ a -196°C, O₂ a -183°C). Aplicación crítica: LNG (gas natural licuado, -162°C para transporte marítimo) requiere enormes plantas criogénicas (capacidad 5-10 millones toneladas/año). Una planta LNG moderna consume ~8-12% de la energía del gas licuado solo para el proceso de enfriamiento, limitada por irreversibilidades termodinámicas respecto a Carnot.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌞 Energía solar térmica concentrada (CSP)</h3>
          <p>
            Las plantas solares de torre (CSP - Concentrated Solar Power) emplean miles de espejos (heliostatos) para concentrar luz solar en un receptor central, alcanzando temperaturas T_H = 565-600°C (838-873 K) en sales fundidas. La sal fundida (mezcla 60% NaNO₃ + 40% KNO₃) circula a través de intercambiadores generando vapor para turbinas. Con T_C = 40°C (condensador refrigerado) = 313 K, la eficiencia teórica de Carnot es η_Carnot = 1 - 313/873 = 64.2%. La eficiencia real de la planta: η_total ≈ 15-20% (desde radiación solar incidente hasta electricidad en red). Descomponiendo pérdidas: eficiencia óptica de heliostatos (95% reflectividad × 98% limpieza × pérdidas atmosféricas) ≈ 75%, eficiencia térmica del receptor (pérdidas radiativas/convectivas a 600°C) ≈ 85%, eficiencia ciclo Rankine (vapor → electricidad, limitado por Carnot) ≈ 40%, eficiencia conversión/transmisión eléctrica ≈ 98%. Total: 0.75 × 0.85 × 0.40 × 0.98 ≈ 25% (teórico), pero factores de disponibilidad solar reducen a 15-20% anual. Ejemplo real: Planta Gemasolar (España, 19.9 MW) tiene torre de 140m, 2650 heliostatos, almacenamiento térmico de 15 horas en sales fundidas (capacidad 600 MWh), permitiendo generación nocturna. Innovación: aumentar T_H a 720-750°C con receptores cerámicos avanzados mejoraría η_Carnot a 70%, incrementando producción 20-30%.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Termogeneradores termoeléctricos (TEG)</h3>
          <p>
            Los generadores termoeléctricos convierten directamente calor en electricidad mediante el efecto Seebeck (voltaje generado por gradiente de temperatura en semiconductores). Aplicación espacial: sondas Voyager 1 y 2 (lanzadas 1977, aún operativas 2025 a 24 mil millones km de la Tierra) usan RTG (Radioisotope Thermoelectric Generator) con Pu-238 (plutonio-238, vida media 87.7 años). El plutonio decae emitiendo calor Q_H ≈ 0.56 W/gramo, manteniendo T_H ≈ 1000°C = 1273 K. Aletas refrigerantes al vacío espacial disipan calor a T_C ≈ -180°C = 93 K. Eficiencia Carnot ideal: η_Carnot = 1 - 93/1273 = 92.7%. Sin embargo, los termopares Bi₂Te₃/PbTe de los RTG alcanzan solo η_real ≈ 6-7% (figura de mérito ZT ≈ 0.6-1.0 limita conversión). Esto significa que de 470 W térmicos iniciales en Voyager 1 (1977), solo 28-33 W eléctricos son utilizables. En 2025 (48 años después): decaimiento radioactivo redujo potencia a ~220 W térmicos → 13-15 W eléctricos disponibles (suficiente para instrumentos críticos). Comparación con Carnot: la enorme diferencia (92.7% vs 6-7%) se debe a limitaciones fundamentales de materiales termoeléctricos: conductividad térmica alta (pérdida de gradiente), conductividad eléctrica limitada (resistencia interna), factor Seebeck insuficiente. Investigación actual: materiales nanostructurados (skutteruditas, clatrados) buscan ZT {'>'} 3, mejorando η_TEG a 15-20%, acercándose más a Carnot pero aún lejos del límite fundamental.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El ciclo de Carnot y la Segunda Ley
        </h2>
        
        <div className="theory-subsection">
          <h3>🎩 Sadi Carnot y las "Reflexiones" de 1824</h3>
          <p>
            Nicolas Léonard Sadi Carnot (1796-1832), ingeniero militar francés e hijo del matemático Lazare Carnot, publicó en 1824 su única obra: "Réflexions sur la puissance motrice du feu" (Reflexiones sobre la potencia motriz del fuego y sobre las máquinas adecuadas para desarrollar esta potencia). En este tratado de apenas 118 páginas, Carnot estableció los fundamentos de la termodinámica sin conocer las leyes de conservación de energía (primera ley) ni el concepto moderno de entropía. Carnot trabajaba con la teoría del calórico (calor como fluido indestructible que fluye de cuerpos calientes a fríos), teoría incorrecta pero que no invalidó sus conclusiones sobre eficiencia máxima. Su intuición clave: "La producción de potencia motriz se debe no al consumo real de calórico, sino a su transporte de un cuerpo caliente a un cuerpo frío". Carnot razonó por analogía con molinos de agua: la potencia no viene de la cantidad de agua, sino de su caída de altura. Similarmente, el trabajo viene de la "caída" de temperatura del calor. Su ciclo ideal (cuatro procesos reversibles: expansión isotérmica, adiabática, compresión isotérmica, adiabática) demostró matemáticamente que η_máxima = 1 - T_C/T_H, dependiendo solo de temperaturas, no del diseño o fluido. Trágicamente, Carnot murió en 1832 de cólera a los 36 años, sin ver el impacto revolucionario de su obra.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔥 Clausius y la formulación moderna (1850s)</h3>
          <p>
            Rudolf Clausius (1822-1888), físico alemán, reformuló las ideas de Carnot en términos modernos en una serie de artículos entre 1850-1865. Clausius rechazó la teoría del calórico y adoptó la equivalencia calor-trabajo descubierta por Joule (1843-1850): el calor es energía en movimiento molecular, no un fluido. En 1850, Clausius enunció la Segunda Ley de la Termodinámica: "El calor no puede pasar por sí mismo de un cuerpo más frío a uno más caliente". Esto formalizó por qué el ciclo de Carnot requiere trabajo neto positivo: Q_H {'>'} Q_C siempre, con diferencia W = Q_H - Q_C. En 1854, Clausius demostró que para cualquier ciclo reversible: ∮ (dQ/T) = 0, definiendo una función de estado (que más tarde llamaría "entropía" en 1865). La razón Q_C/Q_H = T_C/T_H en Carnot emerge naturalmente: en isotérmica reversible, ΔS = Q/T, y como el ciclo es cerrado, ΔS_total = 0 → Q_H/T_H = Q_C/T_C. Clausius formuló también el enunciado más general: "La entropía del universo tiende a un máximo", explicando por qué procesos irreversibles (fricción, mezcla, conducción de calor) reducen la eficiencia respecto a Carnot. Su trabajo conectó las ideas abstractas de Carnot con las leyes físicas fundamentales, estableciendo la termodinámica como ciencia rigurosa.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ Lord Kelvin y la escala absoluta de temperatura (1848)</h3>
          <p>
            William Thomson (1824-1907), más tarde Lord Kelvin, leyó las "Reflexiones" de Carnot en 1848 (traducidas al inglés) y reconoció su profundidad. En su artículo "On an Absolute Thermometric Scale" (1848), Kelvin propuso una escala de temperatura basada en el ciclo de Carnot, independiente de propiedades de sustancias específicas (expansión de mercurio, presión de gas, etc.). Su argumento: si η_Carnot = 1 - T_C/T_H es universal, entonces existe una temperatura absoluta T donde el cero absoluto corresponde a η = 1 (eficiencia perfecta). Kelvin definió: T ≡ temperatura tal que un grado representa la misma fracción de calor convertido en trabajo, sin importar la temperatura inicial. Matemáticamente: Q_C/Q_H = T_C/T_H define la razón de temperaturas absolutas. Kelvin calculó el cero absoluto en -273°C basándose en expansión de gases ideales (extrapolación a P → 0). La escala Kelvin moderna (SI, 1954-2019): 1 K = 1/273.16 de la temperatura del punto triple del agua (273.16 K ≡ 0.01°C). Redefinición 2019: 1 K definido fijando la constante de Boltzmann k_B = 1.380649 × 10⁻²³ J/K, haciendo la escala fundamentalmente microscópica (energía cinética molecular E = (3/2)k_B T). El ciclo de Carnot permanece como estándar teórico: su eficiencia η_Carnot = 1 - T_C/T_H es independiente de la definición práctica del kelvin.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏭 Revolución industrial y búsqueda de eficiencia (1800s)</h3>
          <p>
            El contexto histórico de Carnot fue la revolución industrial francesa e inglesa. Las máquinas de vapor de Newcomen (1712) y Watt (1769) transformaban carbón en movimiento mecánico, pero con eficiencias miserables: 1-3% (Newcomen) y 5-8% (Watt mejorado). Una locomotora típica de 1820 quemaba 5-10 kg de carbón por cada caballo de potencia-hora generado (η ≈ 4-6%). Carnot, motivado por el dominio industrial inglés (sus máquinas de vapor eran superiores), buscaba entender los límites teóricos: ¿por qué tanta ineficiencia? ¿Hay un límite fundamental? Su respuesta: sí, η_máxima = 1 - T_C/T_H. Para una locomotora: T_H ≈ 180°C = 453 K (vapor saturado baja presión), T_C ≈ 20°C = 293 K → η_Carnot = 1 - 293/453 = 35.3%. La eficiencia real 5-6% representaba solo 14-17% del límite de Carnot, indicando enormes pérdidas recuperables. Esta comprensión impulsó mejoras: calderas de alta presión (T_H mayor), condensadores enfriados (T_C menor), expansión múltiple (compounding), recalentamiento. Para 1900, locomotoras avanzadas alcanzaban η ≈ 12-15% y centrales eléctricas de vapor η ≈ 15-20%, acercándose a 40-50% del límite de Carnot. La teoría de Carnot no solo explicó limitaciones, sino que guió el diseño racional de máquinas térmicas durante 200 años.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌌 Aplicaciones modernas: del espacio profundo a la nanotecnología</h3>
          <p>
            El legado de Carnot se extiende a tecnologías del siglo XXI que Sadi nunca imaginó. En exploración espacial: los RTGs (generadores termoeléctricos radioisotópicos) de misiones Mars 2020 Perseverance, Curiosity, New Horizons (Plutón, 2015), y las Voyager utilizan el ciclo de Carnot en su análisis termodinámico fundamental, aunque la conversión termoeléctrica directa es ineficiente (6-8% vs 92% límite Carnot por diferencia T_H = 1273 K, T_C = 93 K). En informática cuántica: refrigeradores criogénicos de dilución (dilution refrigerators) enfrían qubits superconductores a T = 10-20 mK (0.010-0.020 K), operando múltiples etapas de Carnot inverso (bomba de calor). El COP teórico para T_C = 0.015 K, T_H = 4.2 K (helio líquido): COP_Carnot = 0.015/(4.2-0.015) = 0.0036, requiriendo ~278 W de trabajo por cada 1 W de calor extraído a 15 mK. Refrigeradores reales alcanzan COP ≈ 0.0005-0.001, consumiendo 1000-2000 W para mantener chips cuánticos a 15 mK. En motores Stirling para CHP (Combined Heat and Power) doméstico: microcogeneración con η_eléctrica ≈ 15% + η_térmica ≈ 80% = η_total ≈ 95% de aprovechamiento del combustible, aunque la conversión eléctrica sigue limitada por Carnot (T_H ≈ 650°C = 923 K, T_C ≈ 80°C = 353 K → η_Carnot = 61.8%, eficiencia real 15% es 24% del límite). El teorema de Carnot permanece como pilar: establece límites fundamentales independientes de la tecnología, guiando la búsqueda de nuevos materiales y diseños que minimicen irreversibilidades.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>📚 La muerte prematura de Sadi Carnot y sus notas perdidas</h3>
          <p>
            Sadi Carnot murió de cólera en París el 24 de agosto de 1832, a los 36 años, durante una epidemia devastadora. Por temor al contagio, la mayoría de sus pertenencias personales fueron quemadas, incluyendo notas manuscritas y correspondencia. Solo sobrevivieron fragmentos salvados por su hermano Hippolyte Carnot. En estas notas póstumas (publicadas parcialmente en 1878), se descubrió que Sadi había abandonado la teoría del calórico y calculado el equivalente mecánico del calor (cuántos julios equivalen a una caloría) en 1830-1832, dos años antes de su muerte. Su valor: ~370 kgf·m por kcal ≈ 3.6 kJ/kcal (valor moderno: 4.186 kJ/kcal), asombrosamente cercano considerando las mediciones primitivas. Esto significa que Carnot había intuido la Primera Ley de la Termodinámica (conservación de energía) 13 años antes de Joule (1843-1850) y 18 años antes de Clausius (1850). Hippolyte escribió: "Mi hermano había reconocido, en los últimos años de su vida, la inexactitud de la hipótesis del calórico". Si Carnot hubiera vivido otros 10-20 años, es probable que él mismo hubiera reformulado completamente la termodinámica, combinando sus ideas sobre ciclos reversibles con la conservación de energía. Su muerte prematura retrasó el desarrollo de la termodinámica moderna casi dos décadas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎖️ El padre olvidado de la termodinámica</h3>
          <p>
            Las "Reflexiones" de Carnot (1824) fueron casi completamente ignoradas durante 25 años. Solo se vendieron ~120 copias antes de 1850, y la mayoría de físicos prominentes de la época (Faraday, Ampère, Fourier) nunca la mencionaron. La obra estaba escrita en francés, sin matemáticas avanzadas (apenas álgebra elemental), y Carnot no pertenecía a la élite académica (era ingeniero militar, no profesor universitario). Además, la teoría del calórico, aunque incorrecta, seguía siendo mainstream en 1824, y los resultados de Carnot parecían contraintuitivos: ¿cómo puede la eficiencia máxima ser independiente del diseño mecánico? ¿Por qué no se puede mejorar indefinidamente una máquina? El reconocimiento llegó cuando Émile Clapeyron (1834) reexpresó las ideas de Carnot en forma gráfica (diagrama P-V del ciclo) y ecuaciones, haciéndolas accesibles a físicos matemáticos. William Thomson (Lord Kelvin) leyó el artículo de Clapeyron en 1848, buscó la obra original de Carnot (casi imposible de encontrar), y reconoció su genialidad. Thomson escribió: "Las conclusiones de Carnot parecen estar en perfecto acuerdo con las leyes conocidas de la naturaleza, aunque derivadas de premisas que ahora sabemos son incorrectas". Esta paradoja (conclusiones correctas desde premisas erróneas) impulsó a Clausius y Kelvin a reformular la teoría. Hoy, Carnot es reconocido como "padre de la termodinámica", pero durante su vida y 18 años después de su muerte, permaneció prácticamente desconocido.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚂 La carrera por la eficiencia: locomotoras del siglo XIX</h3>
          <p>
            En 1829, apenas 5 años después de las "Reflexiones" de Carnot, George Stephenson ganó los Rainhill Trials con su locomotora "Rocket", estableciendo la supremacía del ferrocarril. Sin embargo, la eficiencia térmica era abismal: η ≈ 4-6%. Ingenieros empíricos (Stephenson, Trevithick, Brunel) mejoraban diseños por prueba y error, sin teoría guía. Solo después de 1850, cuando Clausius y Kelvin popularizaron las ideas de Carnot, los ingenieros comprendieron limitaciones fundamentales. Calculemos una locomotora típica de 1860: vapor a 10 bar saturado = 180°C = 453 K, condensación a 40°C = 313 K → η_Carnot = 1 - 313/453 = 30.9%. Eficiencia real medida: η ≈ 6-8%, solo 19-26% del límite de Carnot. ¿Dónde se perdía energía? Combustión incompleta del carbón (20-30%), pérdidas de calor por radiación de caldera/chimenea (30-40%), escape de vapor sin expansión completa (15-20%), fricción mecánica y bombeo de agua (10-15%). Las mejoras aplicaron Carnot: calderas de alta presión (T_H aumentó a 200-250°C), expansión múltiple en cilindros compuestos (compound engines, 2-3 etapas), recalentamiento intermedio, condensadores refrigerados (T_C bajó a 30-35°C). Para 1900, locomotoras avanzadas (compound, triple expansión) alcanzaban η ≈ 12-15%, acercándose a 40-50% del límite de Carnot. Sin embargo, el límite físico de T_H ≈ 250°C (resistencia de aceros de la época) y T_C ≈ 30°C (agua de enfriamiento) fijaba η_Carnot ≈ 42%, haciendo imposible superar ~20% en práctica. Los motores diésel (1897, Rudolf Diesel) y turbinas de gas (1939, Frank Whittle) rompieron esta barrera al alcanzar T_H {'>'} 500-1500°C.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>❄️ El aire líquido de Carl von Linde y la paradoja de la eficiencia</h3>
          <p>
            Carl von Linde, ingeniero alemán, desarrolló en 1895 el primer proceso industrial práctico para licuar aire (ciclo Linde-Hampson). Su motivación: cervecerías necesitaban refrigeración para fermentación (Linde fundó en 1879 la primera empresa de refrigeración mecánica, Linde AG, aún existente 2025). Al estudiar licuefacción de gases, Linde se enfrentó a la paradoja de Carnot en refrigeración: para enfriar aire de 300 K a 80 K (nitrógeno líquido), el ciclo de Carnot inverso requiere COP_Carnot = T_C/(T_H - T_C) = 80/(300-80) = 0.364. Esto significa: por cada 1 kJ de trabajo mecánico, se extraen idealmente solo 0.364 kJ de calor del aire. Para licuar 1 kg de aire (calor latente ~200 kJ/kg + enfriamiento sensible ~220 kJ/kg = 420 kJ total), se necesitan al menos W_min = 420/0.364 = 1154 kJ ≈ 0.32 kWh. En la práctica, el proceso Linde-Hampson consumía 3-5 kWh/kg de aire líquido (10-15 veces el mínimo teórico de Carnot), debido a: expansión Joule-Thomson irreversible (coeficiente μ_JT del aire es bajo), ineficiencias de compresores (η_compresor ≈ 70-80%), pérdidas de calor en intercambiadores, trabajo de recompresión de gases no licuados. Linde mejoró el proceso añadiendo expansores con extracción de trabajo (ciclo Claude, 1902) y preenfriamiento, reduciendo consumo a ~1.5-2 kWh/kg (4-5 veces Carnot ideal). Hoy, plantas modernas de separación de aire (ASU - Air Separation Units) alcanzan 0.4-0.5 kWh/kg de O₂/N₂ líquido, pero aún 25-40% por encima del límite termodinámico fundamental de Carnot.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌡️ El motor Stirling: el ciclo casi perfecto olvidado</h3>
          <p>
            Robert Stirling, pastor presbiteriano escocés, inventó en 1816 (8 años antes de Carnot) un motor de aire caliente que operaba con combustión externa y regeneración de calor. El ciclo Stirling ideal consta de: calentamiento isocórico (volumen constante), expansión isotérmica (absorbe calor), enfriamiento isocórico, compresión isotérmica (cede calor). Con regenerador perfecto (intercambiador que almacena/devuelve calor entre fases isocóricas), la eficiencia teórica del ciclo Stirling es η_Stirling = 1 - T_C/T_H, idéntica a Carnot. ¿Por qué el motor Stirling no dominó la revolución industrial? Problemas prácticos: regeneradores reales tienen eficiencia 70-90% (no 100%), fugas de aire en pistones desplazadores (sellos mecánicos primitivos en 1800s), baja potencia específica (kg de motor por kW generado) comparado con vapor o combustión interna (ciclo Otto/Diésel opera a presiones 20-80 bar vs 2-10 bar Stirling), dificultad de control rápido de potencia (inercia térmica del regenerador). Sin embargo, el motor Stirling renació en el siglo XX para aplicaciones nicho: submarinos suecos clase Gotland (1990s) usan Stirling AIP (Air-Independent Propulsion) con O₂ líquido, operando sumergidos 2-3 semanas sin superficie; microcogeneración doméstica (Whispergen, Viessmann Vitotwin) con η_eléctrica ≈ 15% + η_térmica ≈ 80%; criogeneradores Stirling para detectores infrarrojos (FLIR, telescopios espaciales James Webb) enfriando a 70-100 K. Curiosidad histórica: si Carnot hubiera conocido el motor Stirling (inventado 8 años antes), probablemente lo habría usado como ejemplo práctico de ciclo reversible ideal, en lugar de su ciclo abstracto con pistón y dos baños térmicos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎓 La apuesta Maxwell-Boltzmann sobre el "demonio de Maxwell"</h3>
          <p>
            En 1867, James Clerk Maxwell propuso un experimento mental para desafiar la Segunda Ley: imagine un "demonio" (ser inteligente microscópico) que controla una compuerta entre dos cámaras de gas a igual temperatura. El demonio observa moléculas individuales, abriendo la compuerta solo cuando moléculas rápidas van de A → B y lentas de B → A. Resultado: sin gastar trabajo macroscópico, el gas en B se calienta y A se enfría, violando aparentemente la Segunda Ley y permitiendo η {'>'} η_Carnot. Ludwig Boltzmann, contemporáneo de Maxwell y fundador de la mecánica estadística, respondió (1870-1880s) que el demonio debe "medir" velocidades, y borrar información acumulada eventualmente, proceso que genera entropía compensando la aparente reducción. Sin embargo, la resolución completa llegó con teoría de información (Shannon, 1948) y computación termodinámica (Landauer, 1961): borrar 1 bit de información genera calor mínimo Q_min = k_B T ln(2) ≈ 3 × 10⁻²¹ J a temperatura ambiente. Si el demonio clasifica N moléculas, acumula N bits, y borrarlos genera calor N × k_B T ln(2), aumentando la entropía del universo exactamente en la cantidad que disminuyó al separar moléculas rápidas/lentas. Conclusión: la Segunda Ley es invulnerable incluso a demonios microscópicos inteligentes, y el límite de eficiencia de Carnot permanece absoluto. Aplicación moderna (2025): computadoras cuánticas reversibles (compuertas lógicas unitarias) intentan minimizar disipación de información, acercándose al límite de Landauer (~k_B T por operación), pero nunca pueden eliminarlo completamente sin violar termodinámica.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            El ciclo de Carnot es el ciclo termodinámico reversible más eficiente posible que opera entre dos 
            temperaturas fijas. Consta de cuatro procesos: expansión isotérmica (absorbe Q_H a T_H), expansión 
            adiabática (enfriamiento sin intercambio de calor), compresión isotérmica (cede Q_C a T_C), y compresión 
            adiabática (calentamiento sin intercambio de calor). Su eficiencia η_Carnot = 1 - T_C/T_H establece el 
            límite teórico máximo para cualquier máquina térmica real.
          </li>
          <li>
            El teorema de Carnot demuestra que: (1) ninguna máquina térmica que opere entre dos temperaturas puede 
            superar la eficiencia de Carnot, y (2) todas las máquinas de Carnot que operan entre las mismas 
            temperaturas tienen idéntica eficiencia, independientemente del fluido de trabajo o diseño mecánico. 
            Esto hace que la eficiencia de Carnot dependa únicamente de las temperaturas absolutas T_H y T_C.
          </li>
          <li>
            La relación entre calores en el ciclo de Carnot es Q_C/Q_H = T_C/T_H, mostrando que la razón de calores 
            intercambiados es proporcional a la razón de temperaturas absolutas. El trabajo neto extraído es 
            W = Q_H - Q_C = Q_H(1 - T_C/T_H) = η_Carnot × Q_H, demostrando que la eficiencia térmica limita la 
            fracción de calor convertible en trabajo útil.
          </li>
          <li>
            Aplicaciones prácticas incluyen: centrales termoeléctricas de ciclo combinado (η ≈ 60-62%, comparado con 
            límite de Carnot ~84%), motores de combustión interna (η ≈ 25-40%, límite Carnot ~84%), refrigeración 
            criogénica y licuefacción de gases (COP limitado por Carnot inverso), plantas solares térmicas concentradas 
            (η ≈ 15-20%), y generadores termoeléctricos espaciales (η ≈ 6-7% vs límite Carnot ~93%).
          </li>
          <li>
            Históricamente, Sadi Carnot formuló su ciclo ideal en 1824 usando la teoría del calórico (incorrecta), 
            pero sus conclusiones sobre eficiencia máxima resultaron correctas. Clausius (1850s) y Lord Kelvin (1848) 
            reformularon la teoría con base en conservación de energía y entropía, estableciendo la Segunda Ley de la 
            Termodinámica. El ciclo de Carnot sigue siendo fundamental como estándar teórico de comparación y guía 
            para el diseño de máquinas térmicas modernas, desde turbinas de gas hasta refrigeradores cuánticos.
          </li>
        </ul>
      </div>
    </>
  );
};

export default CicloCarnotTheory;
