import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as refrigeracionDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Refrigeración y Bombas de Calor",
  descripcion: "Dispositivos que transfieren calor de baja a alta temperatura",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const RefrigeracionBombasCalorTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Refrigeradores y Bombas de Calor">
        <Concept title="Definición">
          <p>
            Los refrigeradores y las bombas de calor son máquinas térmicas 
            que operan en sentido inverso: consumen trabajo para transferir calor desde un foco frío hacia 
            un foco caliente, en contra del flujo natural del calor.
          </p>

          <Important>
            <p>Diferencia Principal:</p>
            <ul>
              <li>Refrigerador: Su objetivo es extraer calor del espacio frío (enfriar)</li>
              <li>Bomba de calor: Su objetivo es entregar calor al espacio caliente (calentar)</li>
            </ul>
            <p>Ambos usan el mismo ciclo termodinámico, solo cambia el propósito.</p>
          </Important>
        </Concept>

        <Concept title="Principio de Funcionamiento">
          <ol>
            <li>Se realiza trabajo W sobre el sistema</li>
            <li>Se extrae calor Q<sub>C</sub> del espacio frío</li>
            <li>Se entrega calor Q<sub>H</sub> al espacio caliente</li>
            <li>Cumple: Q<sub>H</sub> = Q<sub>C</sub> + W</li>
          </ol>
        </Concept>
      </TheorySection>

      <TheorySection title="Coeficiente de Rendimiento (COP)">
        <Concept title="COP de Refrigerador">
          <p>
            El coeficiente de rendimiento mide cuánto calor se extrae por unidad de trabajo:
          </p>

          <Formula 
            expression={String.raw`\text{COP}_R = \frac{Q_C}{W}`}
            description="COP de refrigerador"
            calculatorId="refrigeracion-grupo-1"
            definitions={refrigeracionDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Forma alternativa", expression: String.raw`\text{COP}_R = \frac{Q_C}{Q_H - Q_C}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>COP<sub>R</sub>: Coeficiente de rendimiento del refrigerador (adimensional)</li>
            <li>Q<sub>C</sub>: Calor extraído del espacio frío (J)</li>
            <li>W: Trabajo requerido (J)</li>
          </ul>

          <p>Nota: COP<sub>R</sub> puede ser mayor que 1. Valores típicos: 2-6.</p>
        </Concept>

        <Concept title="COP de Bomba de Calor">
          <p>
            Para bombas de calor, el COP mide cuánto calor se entrega por unidad de trabajo:
          </p>

          <Formula 
            expression={String.raw`\text{COP}_{HP} = \frac{Q_H}{W}`}
            description="COP de bomba de calor"
            calculatorId="refrigeracion-grupo-1"
            definitions={refrigeracionDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>COP<sub>HP</sub>: Coeficiente de rendimiento de bomba de calor (adimensional)</li>
            <li>Q<sub>H</sub>: Calor entregado al espacio caliente (J)</li>
            <li>W: Trabajo requerido (J)</li>
          </ul>

          <p>Relación: COP<sub>HP</sub> = COP<sub>R</sub> + 1 (siempre mayor que el refrigerador)</p>
        </Concept>
      </TheorySection>

      <TheorySection title="COP de Carnot">
        <Concept title="COP Máximo para Refrigerador">
          <p>
            El COP máximo teórico para un refrigerador de Carnot es:
          </p>

          <Formula 
            expression={String.raw`\text{COP}_{R,Carnot} = \frac{T_C}{T_H - T_C}`}
            description="COP de Carnot para refrigerador"
            calculatorId="refrigeracion-grupo-1"
            definitions={refrigeracionDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>COP<sub>R,Carnot</sub>: COP máximo del refrigerador (adimensional)</li>
            <li>T<sub>C</sub>: Temperatura absoluta del espacio frío (K)</li>
            <li>T<sub>H</sub>: Temperatura absoluta del espacio caliente (K)</li>
          </ul>

          <p>Observaciones:</p>
          <ul>
            <li>COP aumenta cuando T<sub>C</sub> y T<sub>H</sub> están más cercanas</li>
            <li>COP disminuye cuando la diferencia de temperatura aumenta</li>
            <li>Los refrigeradores reales tienen COP menor que Carnot</li>
          </ul>
        </Concept>

        <Concept title="COP Máximo para Bomba de Calor">
          <p>
            El COP máximo teórico para una bomba de calor de Carnot es:
          </p>

          <Formula 
            expression={String.raw`\text{COP}_{HP,Carnot} = \frac{T_H}{T_H - T_C}`}
            description="COP de Carnot para bomba de calor"
            calculatorId="refrigeracion-grupo-1"
            definitions={refrigeracionDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>COP<sub>HP,Carnot</sub>: COP máximo de bomba de calor (adimensional)</li>
            <li>T<sub>H</sub>: Temperatura absoluta del espacio caliente (K)</li>
            <li>T<sub>C</sub>: Temperatura absoluta del espacio frío (K)</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🏠 Bombas de calor aire-aire (HVAC residencial)</h3>
          <p>
            Las bombas de calor de aire-aire (split e inverter) dominan la climatización residencial en climas templados. Operan con ciclo de compresión de vapor: compresor eleva presión y temperatura del refrigerante, condensador cede calor al ambiente interior (modo calefacción) o exterior (modo refrigeración), válvula de expansión reduce presión, evaporador absorbe calor del aire. COP estacional (SCOP) típico: 3.0-4.5 a 7°C exterior; desciende a 2.0-2.5 a -5°C y puede ser {'<'} 2 por debajo de -10°C por escarcha en el evaporador y ciclos de desescarche. Un equipo de 3.5 kW térmicos con COP 3 requiere ~1.17 kW eléctricos, entregando 3.5 kW de calor; comparado con resistencias eléctricas (COP = 1), ahorra ~67% energía. Tecnología inverter ajusta velocidad del compresor para reducir ciclos de arranque/parada, mejorando confort y eficiencia parcial carga. Refrigerantes modernos (R32, GWP ≈ 675) sustituyen R410A (GWP ≈ 2088) por menor impacto climático; R290 (propano) emerge con altísima eficiencia pero exige medidas de seguridad (inflamable). Limitación: rendimiento decrece con aire exterior muy frío; soluciones híbridas combinan caldera gas {'+'} bomba de calor.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌡️ Aire acondicionado de precisión y data centers</h3>
          <p>
            Los data centers requieren control térmico continuo y preciso (24/7). Sistemas CRAC/CRAH (Computer Room Air Conditioner/Air Handler) usan ciclos de refrigeración con evaporadores de expansión directa o agua helada (chillers) para mantener aire de retorno 27°C y suministro 18-21°C. EER/SEER típicos equivalen a COP 3-5; diseños de free-cooling y economizadores usan aire exterior frío para elevar COP efectivo a 8-12 en climas fríos. Chillers centrífugos de gran escala (1-5 MW) con compresores magnéticos oil-free reducen pérdidas y mantenimiento. Estrategias: pasillos fríos/calientes, contención, elevación de setpoints (cada 1°C reduce consumo ~2-4%), aprovechamiento de calor residual para calefacción de edificios contiguos (district heating). Refrigerantes de bajo GWP (HFO-1234ze, R514A) reemplazan R134a y R123. Métrica PUE (Power Usage Effectiveness) indica eficiencia global: PUE 1.2-1.4 en centros modernos vs 2.0 en antiguos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>❄️ Refrigeración comercial e industrial</h3>
          <p>
            Supermercados, frigoríficos y plantas alimentarias emplean sistemas de múltiples evaporadores y racks de compresores. Arquitecturas en cascada (CO₂ transcrítico R744 en baja temperatura, amoníaco R717 o HFO en alta) logran alta eficiencia y bajo impacto ambiental. CO₂ transcrítico requiere recuperación de calor en gas cooler y control de válvula de bypass para maximizar COP; COP típicos: 2.5-3.5 en climas templados, menor en climas cálidos salvo con enfriamiento adiabático. Amoníaco (R717) ofrece rendimiento superior y cero GWP pero es tóxico; se usa en instalaciones industriales con estrictas medidas de seguridad. Sistemas de bombeo de refrigerante secundario (glicol) reducen carga de refrigerante en salas de venta. La recuperación de calor permite calentar agua sanitaria y espacios, elevando COP global del sitio a 5-7. Normativas europeas F-Gas impulsan transición a refrigerantes naturales y HFO de muy bajo GWP.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧪 Criogenia y licuefacción de gases (LNG, oxígeno líquido)</h3>
          <p>
            La criogenia produce temperaturas {'<'} 120 K para licuar gases. Plantas de LNG (gas natural licuado) enfrían metano a ~111 K usando ciclos mixtos (MR) con múltiples refrigerantes (etano, propano, nitrógeno) en etapas de expansión; eficiencia equivalente a COP ~0.1-0.3 por grandes diferencias de temperatura y irreversibilidades. El ciclo de Claude y Brayton (expansión con trabajo en turbinas) mejora eficiencia respecto a Joule-Thomson puro (expansión sin trabajo). Aplicaciones: almacenamiento y transporte energético (buques LNG), propelente espacial (oxígeno líquido LOX y hidrógeno líquido LH₂), investigación superconductividad. Ingeniería térmica extrema exige intercambiadores de placas y aletas, aislamiento multilayer (MLI) y vacío profundo para minimizar cargas térmicas parásitas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌍 Bombas de calor geotérmicas (ground-source)</h3>
          <p>
            Las bombas de calor geotérmicas usan el subsuelo como fuente y sumidero térmico casi isoterma (~10-15°C todo el año). Colectores horizontales o sondas verticales (50-150 m) intercambian calor con un circuito cerrado de agua/glicol, proporcionando evaporación a temperatura más alta en invierno y condensación a temperatura más baja en verano. Resultado: COP 4-6 en calefacción y EER 20-30 en refrigeración, superiores a aire-aire. Inversión inicial elevada (perforaciones) se compensa con costos operativos mínimos y vida útil larga (30-50 años sondas). Integración con suelo radiante y depósitos de inercia optimiza operación continua a baja temperatura (35-45°C). Barreras: necesidad de terreno/aparcamiento, permisos, geología adecuada; beneficios: reducción drástica de emisiones y estabilidad energética en climas extremos.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: de Linde y Carrier al boom de las bombas de calor
        </h2>
        
        <div className="theory-subsection">
          <h3>🧊 Carl von Linde y la refrigeración moderna (1876-1895)</h3>
          <p>
            Carl von Linde, ingeniero alemán, desarrolló en 1876 el primer refrigerador industrial de amoníaco con compresión de vapor, posibilitando producción de hielo y conservación de alimentos a gran escala. Su empresa, Linde AG, perfeccionó procesos de licuefacción de aire (1895) mediante ciclos de Joule-Thomson con precoolers, habilitando separación criogénica de oxígeno y nitrógeno. La refrigeración transformó cadenas de suministro: cámaras frigoríficas, transporte refrigerado y fabricación de cerveza todo el año. A finales del siglo XIX, amoníaco, dióxido de azufre y cloruro de metilo se usaban como refrigerantes, con riesgos de toxicidad e inflamabilidad que impulsaron la búsqueda de alternativas seguras.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌬️ Willis Carrier y el aire acondicionado (1902)</h3>
          <p>
            En 1902, Willis Carrier diseñó el primer sistema moderno de aire acondicionado para controlar humedad y temperatura en una imprenta de Brooklyn. Su innovación combinó enfriamiento por serpentines de agua helada y control de humedad por condensación, creando condiciones estables para procesos industriales. En décadas siguientes, el aire acondicionado se expandió a cines, oficinas y hogares, transformando demografía y productividad en climas cálidos (boom urbano Sun Belt en EE.UU.). Carrier fundó Carrier Corporation, estandarizó cálculos psicrométricos y difundió el uso de diagramas de Mollier para diseño HVAC.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>♻️ El Protocolo de Montreal y la transición de refrigerantes (1987 → hoy)</h3>
          <p>
            El descubrimiento del agotamiento de la capa de ozono por CFC (R12) llevó al Protocolo de Montreal (1987), que prohibió CFC y luego HCFC (R22). La industria migró a HFC (R134a, R404A) sin ozono pero con alto potencial de calentamiento global (GWP). En 2016, la Enmienda de Kigali añadió reducción de HFC, impulsando refrigerantes de bajo GWP: HFO (1234yf, 1234ze), naturales (CO₂ R744, amoníaco R717, hidrocarburos R290/R600a). Esta transición redefinió diseño y seguridad: sensores de fugas, ventilación, zonas ATEX para inflamables, y nuevas aceites y materiales. Resultado: menores emisiones indirectas y directas, con eficiencia comparable o superior.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ Bombas de calor: de nicho a protagonista (2000-2025)</h3>
          <p>
            La mejora de compresores inverter, intercambiadores microcanal y controles avanzados llevó a bombas de calor residenciales a COP 3-5 incluso en climas fríos con refrigerantes R32/R290. Políticas de descarbonización y electrificación (UE, Japón, EE.UU.) dispararon su adopción: ventas récord en Europa 2022-2024, sustituyendo calderas de gas en millones de hogares. Sistemas aire-agua para radiadores de baja temperatura y suelo radiante, y bombas de calor hidrónicas comerciales para edificios de oficinas y hospitales, muestran viabilidad técnica y económica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧯 Seguridad y normativas: del empirismo a estándares rigurosos</h3>
          <p>
            Incidentes históricos con refrigerantes tóxicos/Inflamables impulsaron normativas como EN 378 y ASHRAE 15, clasificando refrigerantes (A1 no tóxico/no inflamable, A2L levemente inflamable, B2 tóxico) y definiendo límites de carga, ventilación y detectores. La seguridad moderna permitió reintroducir refrigerantes naturales con medidas adecuadas, manteniendo alta eficiencia y minimizando impacto ambiental.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>📈 COP vs clima: por qué tu bomba no “rinde” igual en invierno</h3>
          <p>
            El COP depende fuertemente de la diferencia de temperatura entre fuente y sumidero. A 7°C exterior y 35°C impulsión, una bomba aire-agua puede tener COP 4; a -7°C exterior, el COP cae a ~2.3 por mayor salto térmico y escarcha en evaporador. Los ciclos de desescarche invierten el ciclo temporalmente para calentar el evaporador, consumiendo energía sin aportar calor a la vivienda, reduciendo COP horario. Por eso los catálogos usan SCOP/SEER (promedio estacional) más representativo que COP instantáneo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌀 Inverter vs on/off: eficiencia y confort</h3>
          <p>
            Compresores inverter modulan velocidad para igualar carga térmica, evitando arranques frecuentes. Esto mejora eficiencia en carga parcial y mantiene temperatura estable, reduciendo ruido y consumo. Equipos on/off sufren “short cycling”: arranques/paradas que elevan consumo y desgaste; aunque su COP nominal puede ser similar a plena carga, su rendimiento estacional es inferior.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌿 Impacto climático de los refrigerantes: GWP y fugas</h3>
          <p>
            El potencial de calentamiento global (GWP) mide impacto relativo al CO₂. R410A (GWP ~2088) tiene gran impacto si hay fugas; R32 reduce a ~675 y mejora eficiencia por menor viscosidad y mejor transferencia de calor. CO₂ (R744) tiene GWP = 1 pero requiere operación transcrítica; amoníaco (R717) GWP ~0 y alta eficiencia, pero tóxico; hidrocarburos (R290) GWP {'<'} 10 y excelente rendimiento, aunque inflamables. Buen diseño y mantenimiento minimizan fugas y maximizan eficiencia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🛁 ACS con bomba de calor: números reales</h3>
          <p>
            Un termo de 200 L con bomba de calor aire puede calentar agua de 15°C a 55°C con COP medio ~2.5 en clima templado, consumiendo ~3.2 kWh para 8 kWh térmicos. La recuperación de calor del aire extraído de cocinas/baños eleva COP efectivo. En climas fríos, resistencias de apoyo aseguran temperatura objetivo, reduciendo el COP global.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ Suelo radiante y baja temperatura: pareja ideal</h3>
          <p>
            Las bombas de calor alcanzan COP máximo cuando entregan calor a 30-40°C. Sistemas de suelo radiante y fan-coils de baja temperatura permiten impulsiones bajas, mejorando COP y confort por distribución uniforme. Radiadores tradicionales requieren 60-70°C; muchas bombas modernas aire-agua pueden alcanzar 60°C, pero el COP cae notablemente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔁 Recuperación y reutilización de calor: eficiencia sistémica</h3>
          <p>
            Supermercados y data centers recuperan calor de condensadores para calentar tiendas o edificios, elevando el COP sistémico a valores de 5-7. Este enfoque de eficiencia integrada reduce emisiones y costes operativos, demostrando que el diseño del sistema es tan importante como el COP del equipo individual.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            Refrigeradores y bombas de calor transfieren calor desde un foco frío a uno caliente consumiendo trabajo, operando típicamente mediante compresión de vapor: compresor, condensador, válvula de expansión y evaporador. Cumplen Q_H = Q_C + W y sus prestaciones se miden con COP (refrigeración) y COP_HP (calefacción).
          </li>
          <li>
            Los límites termodinámicos vienen dados por el ciclo de Carnot: COP_R,Carnot = T_C/(T_H - T_C) y COP_HP,Carnot = T_H/(T_H - T_C). La eficiencia real depende de la diferencia de temperaturas y de irreversibilidades (fricción, intercambios no ideales, desescarche).
          </li>
          <li>
            Aplicaciones clave: HVAC residencial e industrial, data centers, refrigeración comercial/industrial y criogenia (LNG, gases industriales). La recuperación de calor y el diseño sistémico pueden elevar la eficiencia global muy por encima del COP del equipo individual.
          </li>
          <li>
            Historia y regulación han guiado la selección de refrigerantes: de CFC/HCFC a HFC y ahora HFO y refrigerantes naturales (CO₂, amoníaco, hidrocarburos) por impacto ambiental (ozono y GWP). Normativas modernas aseguran seguridad y viabilidad técnica.
          </li>
          <li>
            Para maximizar rendimiento: minimizar saltos térmicos, usar emisores de baja temperatura, controles inverter, mantenimiento para evitar fugas y escarcha, y considerar fuentes geotérmicas para COP superiores (4-6). El SCOP/SEER refleja el desempeño estacional real.
          </li>
        </ul>
      </div>
    </>
  );
};

export default RefrigeracionBombasCalorTheory;
