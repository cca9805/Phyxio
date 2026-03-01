import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as calorDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Calor",
  descripcion: "Transferencia de energía térmica entre sistemas",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO'],
  isTheoryOnly: true
};

const CalorTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es el Calor?">
        <Concept title="Definición">
          <p>
            El calor es la energía que se transfiere entre sistemas o cuerpos debido a una diferencia de temperatura. Es importante distinguir que el calor NO es una propiedad del sistema, sino energía en tránsito.
          </p>
          
          <p>
            El calor fluye espontáneamente desde el cuerpo de mayor temperatura hacia el de menor temperatura hasta alcanzar el equilibrio térmico. Este proceso es irreversible según la Segunda Ley de la Termodinámica.
          </p>

          <Important>
            <p>Convención de Signos:</p>
            <ul>
              <li>Q {'>'} 0: El sistema recibe calor (proceso endotérmico)</li>
              <li>Q {'<'} 0: El sistema cede calor (proceso exotérmico)</li>
              <li>Q = 0: Proceso adiabático (sin transferencia de calor)</li>
            </ul>
          </Important>
        </Concept>

        <Concept title="Características del Calor">
          <ul>
            <li>Energía en tránsito: No es una propiedad del sistema</li>
            <li>Requiere diferencia de temperatura: No hay transferencia sin ΔT</li>
            <li>Dirección espontánea: De mayor a menor temperatura</li>
            <li>Diferente de temperatura: Calor es energía, temperatura es medida</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Calor Sensible">
        <Concept title="Cambio de Temperatura">
          <p>
            El calor sensible es el calor que produce un cambio de temperatura en una sustancia sin cambiar su fase. Se calcula mediante la ecuación fundamental:
          </p>

          <Formula 
            expression={String.raw`Q = m \cdot c \cdot \Delta T`}
            description="Calor sensible para cambio de temperatura"
            calculatorId="calor-sensible"
            definitions={calorDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular la Masa (m)", expression: String.raw`m = \frac{Q}{c \cdot \Delta T}` },
              { description: "Calcular el Calor Específico (c)", expression: String.raw`c = \frac{Q}{m \cdot \Delta T}` },
              { description: "Calcular el Cambio de Temperatura (ΔT)", expression: String.raw`\Delta T = \frac{Q}{m \cdot c}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>Q: Calor transferido (J)</li>
            <li>m: Masa de la sustancia (kg)</li>
            <li>c: Calor específico (J/kg·K)</li>
            <li>ΔT: Cambio de temperatura (K o °C)</li>
          </ul>
        </Concept>

        <Concept title="Calor Específico">
          <p>
            El calor específico es la cantidad de calor necesaria para elevar la temperatura de 1 kg de sustancia en 1 K. Es una propiedad característica de cada material.
          </p>

          <table style={{width: '100%', borderCollapse: 'collapse', margin: '1em 0'}}>
            <thead>
              <tr style={{borderBottom: '2px solid #ddd'}}>
                <th style={{padding: '0.5em', textAlign: 'left'}}>Sustancia</th>
                <th style={{padding: '0.5em', textAlign: 'right'}}>c (J/kg·K)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{padding: '0.5em'}}>Agua</td><td style={{padding: '0.5em', textAlign: 'right'}}>4186</td></tr>
              <tr><td style={{padding: '0.5em'}}>Hielo</td><td style={{padding: '0.5em', textAlign: 'right'}}>2090</td></tr>
              <tr><td style={{padding: '0.5em'}}>Vapor de agua</td><td style={{padding: '0.5em', textAlign: 'right'}}>2010</td></tr>
              <tr><td style={{padding: '0.5em'}}>Aluminio</td><td style={{padding: '0.5em', textAlign: 'right'}}>900</td></tr>
              <tr><td style={{padding: '0.5em'}}>Hierro</td><td style={{padding: '0.5em', textAlign: 'right'}}>450</td></tr>
              <tr><td style={{padding: '0.5em'}}>Cobre</td><td style={{padding: '0.5em', textAlign: 'right'}}>385</td></tr>
              <tr><td style={{padding: '0.5em'}}>Plomo</td><td style={{padding: '0.5em', textAlign: 'right'}}>130</td></tr>
            </tbody>
          </table>

          <p>
            Observación: El agua tiene uno de los calores específicos más altos, lo que la hace excelente para almacenar energía térmica y regular temperatura.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Calor Latente">
        <Concept title="Cambio de Fase">
          <p>
            El calor latente es el calor necesario para cambiar la fase de una sustancia sin cambiar su temperatura. Durante un cambio de fase, la temperatura permanece constante.
          </p>

          <Formula 
            expression={String.raw`Q = m \cdot L`}
            description="Calor latente para cambio de fase"
            calculatorId="calor-latente"
            definitions={calorDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular la Masa (m)", expression: String.raw`m = \frac{Q}{L}` },
              { description: "Calcular el Calor Latente (L)", expression: String.raw`L = \frac{Q}{m}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>Q: Calor transferido (J)</li>
            <li>m: Masa de la sustancia (kg)</li>
            <li>L: Calor latente específico (J/kg)</li>
          </ul>
        </Concept>

        <Concept title="Tipos de Calor Latente">
          <ul>
            <li>Fusión (L<sub>f</sub>): Sólido → Líquido (ej: hielo → agua, 334 kJ/kg)</li>
            <li>Vaporización (L<sub>v</sub>): Líquido → Gas (ej: agua → vapor, 2257 kJ/kg)</li>
            <li>Sublimación: Sólido → Gas directamente (ej: hielo seco)</li>
            <li>Solidificación: Líquido → Sólido (libera calor)</li>
            <li>Condensación: Gas → Líquido (libera calor)</li>
          </ul>

          <p>
            Nota: El calor latente de vaporización es mucho mayor que el de fusión porque se requiere más energía para separar completamente las moléculas.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Capacidad Calorífica">
        <Concept title="Definición">
          <p>
            La capacidad calorífica (C) es la cantidad de calor necesaria para elevar la temperatura de un sistema completo en 1 K. Es una propiedad extensiva que depende de la masa.
          </p>

          <Formula 
            expression={String.raw`C = m \cdot c`}
            description="Capacidad calorífica de un sistema"
            calculatorId="capacidad-calorifica"
            definitions={calorDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Relación con el Calor", expression: String.raw`Q = C \cdot \Delta T` },
              { description: "Capacidad desde Calor", expression: String.raw`C = \frac{Q}{\Delta T}` },
              { description: "Cambio de Temperatura", expression: String.raw`\Delta T = \frac{Q}{C}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>C: Capacidad calorífica (J/K)</li>
            <li>m: Masa total del sistema (kg)</li>
            <li>c: Calor específico del material (J/kg·K)</li>
          </ul>
        </Concept>

        <Concept title="Aplicaciones">
          <ul>
            <li>Tanques de almacenamiento térmico: Alta capacidad calorífica</li>
            <li>Regulación climática: Los océanos regulan la temperatura global</li>
            <li>Sistemas de calefacción: Radiadores con alta capacidad</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos Prácticos">
        <Example 
          title="Ejemplo 1: Calentar Agua para Té"
          problem="¿Cuánto calor se necesita para calentar 250 g de agua desde 20°C hasta 100°C? (c_agua = 4186 J/kg·K)"
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>m = 250 g = 0.25 kg</li>
                <li>c = 4186 J/(kg·K)</li>
                <li>T<sub>inicial</sub> = 20°C</li>
                <li>T<sub>final</sub> = 100°C</li>
                <li>ΔT = 100 - 20 = 80 K</li>
              </ul>
              
              <p>Solución:</p>
              <p>Q = m × c × ΔT</p>
              <p>Q = 0.25 kg × 4186 J/(kg·K) × 80 K</p>
              <p>Q = 83,720 J = 83.72 kJ</p>
              
              <p>Resultado: Se necesitan aproximadamente 84 kJ para hervir el agua del té.</p>
            </div>
          }
        />

        <Example 
          title="Ejemplo 2: Derretir Hielo"
          problem="¿Cuánto calor se requiere para fundir completamente 2 kg de hielo a 0°C? (L_f = 334 kJ/kg)"
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>m = 2 kg</li>
                <li>L<sub>f</sub> = 334 kJ/kg = 334,000 J/kg</li>
                <li>Temperatura constante: 0°C</li>
              </ul>
              
              <p>Solución:</p>
              <p>Q = m × L<sub>f</sub></p>
              <p>Q = 2 kg × 334,000 J/kg</p>
              <p>Q = 668,000 J = 668 kJ</p>
              
              <p>Interpretación: Se necesitan 668 kJ para fundir 2 kg de hielo. Durante este proceso, la temperatura permanece en 0°C mientras el hielo cambia de fase a agua líquida.</p>
            </div>
          }
        />

        <Example 
          title="Ejemplo 3: Proceso Completo - Hielo a Agua Tibia"
          problem="Calcular el calor total para convertir 1 kg de hielo a -5°C en agua a 20°C. (c_hielo = 2090 J/kg·K, L_f = 334 kJ/kg, c_agua = 4186 J/kg·K)"
          solution={
            <div>
              <p>Proceso en 3 etapas:</p>
              
              <p>Etapa 1 - Calentar hielo de -5°C a 0°C:</p>
              <p>Q₁ = m × c<sub>hielo</sub> × ΔT</p>
              <p>Q₁ = 1 × 2090 × 5 = 10,450 J</p>
              
              <p>Etapa 2 - Fundir hielo a 0°C:</p>
              <p>Q₂ = m × L<sub>f</sub></p>
              <p>Q₂ = 1 × 334,000 = 334,000 J</p>
              
              <p>Etapa 3 - Calentar agua de 0°C a 20°C:</p>
              <p>Q₃ = m × c<sub>agua</sub> × ΔT</p>
              <p>Q₃ = 1 × 4186 × 20 = 83,720 J</p>
              
              <p>Calor total:</p>
              <p>Q<sub>total</sub> = Q₁ + Q₂ + Q₃</p>
              <p>Q<sub>total</sub> = 10,450 + 334,000 + 83,720 = 428,170 J ≈ 428 kJ</p>
              
              <p>Observación: La mayor parte del calor (78%) se usa en la fusión del hielo.</p>
            </div>
          }
        />
      </TheorySection>

      <TheorySection title="Mecanismos de Transferencia de Calor">
        <Concept title="Tres Formas de Transferencia">
          <p>1. Conducción</p>
          <ul>
            <li>Transferencia por contacto directo entre moléculas</li>
            <li>Predominante en sólidos</li>
            <li>Ejemplo: Calentar una cuchara metálica</li>
            <li>Ley de Fourier: q = -k × A × (dT/dx)</li>
          </ul>

          <p>2. Convección</p>
          <ul>
            <li>Transferencia por movimiento de fluidos</li>
            <li>Ocurre en líquidos y gases</li>
            <li>Ejemplo: Calentamiento del agua en una olla</li>
            <li>Puede ser natural (por densidad) o forzada (ventilador)</li>
          </ul>

          <p>3. Radiación</p>
          <ul>
            <li>Transferencia por ondas electromagnéticas</li>
            <li>No requiere medio material</li>
            <li>Ejemplo: Calor del Sol llegando a la Tierra</li>
            <li>Ley de Stefan-Boltzmann: P = σ × A × T⁴</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones en Termodinámica">
        <Concept title="Importancia del Calor">
          <ul>
            <li>Primera Ley: ΔU = Q - W (conservación de energía)</li>
            <li>Entalpía: H = U + PV (calor a presión constante)</li>
            <li>Entropía: dS = δQ/T (medida del desorden)</li>
            <li>Máquinas térmicas: Convierten calor en trabajo</li>
            <li>Refrigeradores: Extraen calor de un espacio frío</li>
          </ul>
        </Concept>

        <Concept title="Medición del Calor">
          <p>Instrumentos y Métodos:</p>
          <ul>
            <li>Calorímetro: Mide calor específico y calor latente</li>
            <li>Bomba calorimétrica: Mide calor de combustión</li>
            <li>Calorímetro diferencial: Análisis térmico de materiales</li>
            <li>Termografía infrarroja: Visualiza pérdidas de calor</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <div className="theory-subsection">
          <h3>Caldera condensación gas natural 24kW calefacción agua caliente sanitaria</h3>
          <p>Las calderas murales de condensación representan la tecnología más eficiente disponible actualmente para calefacción doméstica y producción de agua caliente sanitaria (ACS). Estas calderas queman gas natural, principalmente metano (CH₄), con combustión completa utilizando un exceso de aire (lambda λ=1.3) que garantiza la oxidación total del combustible, produciendo una llama azul característica en el quemador. El quemador modulante puede variar su potencia térmica continuamente en el rango 3-24 kW según la demanda instantánea de calefacción o ACS, optimizando el consumo de gas y mejorando el confort.</p>

          <p>La clave de su excepcional eficiencia (hasta 107% sobre el PCI, poder calorífico inferior) radica en la recuperación del calor latente de condensación del vapor de agua presente en los gases de combustión. Mientras que las calderas convencionales expulsan estos gases a 120-160°C desperdiciando esta energía, las calderas de condensación incorporan un intercambiador especial de acero inoxidable o aluminio-silicio que enfría los gases hasta 40-60°C, provocando la condensación del vapor de agua y recuperando aproximadamente 11% adicional de energía térmica. Este condensado es ligeramente ácido (pH 4-5) debido al ácido carbónico formado, requiriendo materiales resistentes a la corrosión y un neutralizador alcalino antes del vertido.</p>

          <p>Las aplicaciones incluyen calefacción con radiadores de baja temperatura (45-55°C), suelo radiante (30-40°C) y producción de ACS con acumulación (tanques de 40-60 L) o instantánea con prioridad sanitaria. Los termostatos modulantes con comunicación OpenTherm optimizan la eficiencia energética, alcanzando clasificación de clase A y logrando ahorros del 30% en consumo de gas comparado con calderas convencionales, con reducción proporcional de emisiones de CO₂ y NOx, cumpliendo las exigentes normativas europeas de ecodiseño ErP y certificación CE.</p>
        </div>
        <div className="theory-subsection">
          <h3>Nevera compresor ciclo refrigeración extracción calor interior 4°C conservación</h3>
          <p>El refrigerador doméstico típico tiene un volumen total de unos 300 L, distribuidos en un compartimento de refrigeración de 250 L y un congelador de 50 L. Las temperaturas óptimas son 2-8°C (idealmente 4°C) para el compartimento principal y -18°C para el congelador, rangos que permiten la conservación de alimentos frescos durante días a semanas, y congelados durante meses o años dependiendo del tipo de alimento. El sistema funciona mediante un ciclo de compresión de vapor usando refrigerante R600a (isobutano), un hidrocarburo natural ecológico con muy bajo GWP (potencial de calentamiento global) de apenas 3, comparado con refrigerantes sintéticos antiguos como el R134a (GWP 1430).</p>

          <p>El corazón del sistema es el compresor hermético de pistón o rotativo (100-150 W de potencia eléctrica) que comprime el vapor refrigerante elevando su presión y temperatura. El ciclo consta de cuatro componentes principales: el evaporador (serpentín interior) absorbe calor Q<sub>evap</sub> de los alimentos y el aire de la cámara mediante cambio de fase líquido-vapor a baja presión (~1 bar) y temperatura (-10°C); el compresor eleva la presión del vapor; el condensador (rejilla posterior) disipa el calor absorbido más el trabajo del compresor al ambiente Q<sub>cond</sub> por convección natural o forzada con ventilador; y la válvula de expansión capilar estrangula el flujo provocando caída brusca de presión y temperatura, cerrando el ciclo.</p>

          <p>El aislamiento térmico es crítico: espuma de poliuretano expandido (PUR) de 40-50 mm de espesor con conductividad térmica de solo 0.022 W/(m·K) minimiza las pérdidas de frío. La junta magnética de la puerta garantiza hermeticidad, reduciendo la infiltración de aire caliente exterior. Los modelos eficientes clase A+++ consumen 150-250 kWh/año, logrando ahorros significativos de electricidad. La etiqueta energética obligatoria en la UE informa a los consumidores sobre el consumo, incentivando la elección de equipos más eficientes.</p>
        </div>
        <div className="theory-subsection">
          <h3>Intercambiador calor placas contracorriente eficiencia 90% industria alimentaria</h3>
          <p>Los intercambiadores de calor de placas (PHE, plate heat exchanger) son equipos compactos y eficientes ampliamente utilizados en la industria alimentaria. Consisten en múltiples placas delgadas de acero inoxidable AISI 316 (resistente a la corrosión) con juntas de elastómero NBR (nitrilo) o EPDM (etileno-propileno) que resisten temperaturas y presiones operacionales típicas. Las placas presentan corrugaciones diseñadas para inducir turbulencia en los fluidos, mejorando drásticamente el coeficiente de transferencia de calor hasta 3000-7000 W/(m²·K), muy superior a intercambiadores tubulares. Con superficies de intercambio de 10-100 m², estos equipos ofrecen gran capacidad en espacios reducidos.</p>

          <p>La configuración en contracorriente, donde los fluidos caliente y frío circulan en sentidos opuestos, maximiza la diferencia de temperatura media logarítmica (LMTD), alcanzando efectividades de transferencia del 85-95%, valores excepcionales en la ingeniería térmica. Los PHE son compactos (hasta 5 veces más pequeños que intercambiadores tubulares equivalentes), ligeros y desmontables, facilitando la limpieza mediante sistemas CIP (cleaning in place) con soluciones ácidas o alcalinas, desinfección con vapor y esterilización completa, requisitos esenciales en industria alimentaria.</p>

          <p>Una aplicación crítica es la pasteurización de leche: calentamiento rápido a 72°C durante 15 segundos (proceso HTST, high temperature short time) que destruye patógenos peligrosos como Mycobacterium tuberculosis, Salmonella y Listeria, mientras conserva nutrientes, vitaminas y sabor. Tras la pasteurización, la leche se enfría rápidamente a 4°C para almacenamiento y distribución en cadena de frío con trazabilidad completa. Estos procesos térmicos son puntos de control críticos (PCC) en sistemas APPCC (análisis de peligros y puntos de control críticos), garantizando la seguridad alimentaria según la normativa sanitaria europea Reglamento CE 852/2004 sobre higiene de los productos alimenticios.</p>
        </div>
        <div className="theory-subsection">
          <h3>Horno industrial tratamiento térmico acero temple 850°C dureza resistencia</h3>
          <p>Los hornos industriales para tratamiento térmico de aceros utilizan resistencias eléctricas y operan con atmósfera controlada (nitrógeno, argón) o vacío para prevenir la oxidación superficial y la descarburación (pérdida de carbono superficial) de las piezas. Alcanzan temperaturas máximas de 1200°C con control de precisión ±2°C mediante termopares tipo K (cromel-alumel, rango 0-1100°C) o tipo S (platino-rodio, hasta 1600°C), con registro continuo de temperatura y tiempo para trazabilidad del ciclo térmico aplicado a cada pieza.</p>

          <p>El proceso de temple de un acero C45 (aleación con 0.45% de carbono) ilustra la aplicación: primero se calienta la pieza hasta 850°C, temperatura de austenización donde el acero adquiere estructura cristalina FCC (cúbica centrada en las caras) con alta solubilidad de carbono. Tras mantenimiento de 30-60 minutos para homogeneización por difusión, se realiza un enfriamiento brusco (temple) sumergiendo la pieza en agua, aceite o polímero a velocidad superior a la velocidad crítica de temple. Esto evita la transformación difusional a perlita y ferrita, forzando la formación de martensita, estructura metaestable tetragonal centrada en el cuerpo (BCT) de dureza extrema 600-700 HV (Vickers) pero con fragilidad elevada.</p>

          <p>Para reducir la fragilidad manteniendo dureza adecuada, se realiza un revenido posterior: calentamiento a 200-400°C que reduce la dureza a 450-550 HV pero aumenta significativamente la tenacidad y resiliencia (resistencia al impacto). Estos tratamientos son esenciales para fabricar componentes mecánicos de alta responsabilidad: engranajes de transmisión, ejes y cigüeñales de motores, herramientas de corte, matrices de estampación y forja, todos requiriendo combinación de alta resistencia al desgaste, fatiga mecánica y tenacidad para soportar cargas variables sin fractura.</p>
        </div>
        <div className="theory-subsection">
          <h3>Energía geotérmica flujo calor interior Tierra 0.065W/m² gradiente temperatura</h3>
          <p>El calor interno de la Tierra tiene un doble origen: la desintegración radiactiva de elementos de larga vida como uranio-238, torio-232 y potasio-40 presentes en la corteza y el manto (responsable de aproximadamente el 50% del flujo térmico), y el calor primordial de la formación del planeta hace 4500 millones de años, cuando la acreción de materia y la compresión gravitatoria convirtieron energía potencial en térmica. Las temperaturas internas escalan desde 0-1000°C en la corteza, 1000-3500 K en el manto, hasta 5000-6000 K en el núcleo. El flujo promedio de calor geotérmico en superficie es de 0.065 W/m² con un gradiente geotérmico medio de 25-30°C/km de profundidad.</p>

          <p>Este gradiente presenta variaciones tectónicas dramáticas: en zonas de subducción puede ser de 10°C/km (corteza fría descendente), mientras que en dorsales oceánicas y puntos calientes como Islandia, Yellowstone, Japón y Nueva Zelanda alcanza 100-200°C/km, manifestándose en intensa actividad volcánica, fuentes termales y géiseres espectaculares. Estas anomalías geotérmicas positivas son ideales para el aprovechamiento energético. La geotermia se clasifica según la temperatura del recurso: alta entalpía (&gt;150°C) permite generación eléctrica directa con turbinas de vapor en centrales de 5-100 MW; geotermia media (90-150°C) se usa para calefacción de distrito urbano mediante redes de distribución de agua caliente.</p>

          <p>La geotermia de baja entalpía (&lt;90°C), la más extendida geográficamente, se aprovecha mediante bombas de calor geotérmicas con intercambiadores enterrados en sondas verticales (50-200 m de profundidad) o colectores horizontales. Estos sistemas alcanzan coeficientes de rendimiento (COP) de 4-5, significando que por cada kWh eléctrico consumido se obtienen 4-5 kWh térmicos, eficiencia extraordinaria comparada con calefacción eléctrica directa o calderas de combustión. La energía geotérmica es renovable a escala humana (el calor se regenera), no emite CO₂ durante operación, es independiente de condiciones meteorológicas y proporciona energía base constante, contribuyendo significativamente a la sostenibilidad ambiental y la transición energética.</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2><span>📜</span> Historia y Desarrollo</h2>
        <div className="theory-subsection">
          <h3>Siglo XVIII teoría calórico sustancia fluido imponderable fluye cuerpos calientes fríos</h3>
          <p>Antoine Lavoisier (1743-1794), el célebre químico francés considerado padre de la química moderna, fue uno de los principales proponentes de la teoría del calórico en el siglo XVIII. Según esta teoría, el calórico era una sustancia material real, un fluido sutil e imponderable (sin masa detectable) contenido en todos los cuerpos en cantidad fija. El calentamiento de un objeto se explicaba como la absorción de calórico, mientras que el enfriamiento representaba su pérdida. El calórico fluía espontáneamente desde cuerpos de mayor concentración (calientes) hacia los de menor concentración (fríos), similar al flujo de agua entre niveles diferentes de altura.</p>

          <p>Esta teoría tuvo éxito inicial porque explicaba intuitivamente numerosos fenómenos térmicos observables: la dilatación de los materiales (el calórico ocupaba espacio entre las partículas), los cambios de estado como fusión y ebullición (absorción de calórico rompía enlaces), y la expansión de gases con temperatura (más calórico generaba mayor presión). La analogía con la hidráulica era pedagógicamente atractiva y facilitaba cálculos calorímétricos mediante conservación del calórico total en sistemas aislados.</p>

          <p>Sin embargo, los experimentos de fricción de Rumford (1798) y especialmente los meticulosos trabajos de Joule (1840s) sobre generación de calor mediante trabajo mecánico contradecían frontalmente el principio de conservación del calórico, demostrando que el calor podía crearse o destruirse mediante conversión con trabajo. La teoría fue finalmente rechazada a mediados del siglo XIX con el desarrollo de la termodinámica y la formulación de la Primera Ley, estableciendo la equivalencia entre calor y trabajo, y el concepto moderno del calor como energía en tránsito y no como una sustancia material.</p>
        </div>
        <div className="theory-subsection">
          <h3>1798 Conde Rumford experimento perforación cañones generación calor fricción</h3>
          <p>Benjamin Thompson, Conde Rumford (1753-1814), fue un físico estadounidense de origen humilde que alcanzó prestigio en Europa, trabajando como supervisor del Arsenal de Munich en Baviera. Durante la fabricación de cañones de artillería, observó un fenómeno intrigante: la perforación y taladrado del interior del tubo de bronce mediante herramientas metálicas generaba fricción que producía un calentamiento tan intenso que el agua utilizada para refrigerar el cilindro llegaba a hervir. La cantidad de calor generada era enorme y, lo más sorprendente, aparentemente inagotable mientras continuara el trabajo mecánico de perforación.</p>

          <p>Este fenómeno era inexplicable mediante la teoría del calórico dominante: si el calor fuera una sustancia material contenida en el bronce con capacidad calorífica limitada, debería agotarse rápidamente durante el taladrado continuo. Rumford realizó un experimento cuantitativo midiendo el calor generado en función del tiempo y del trabajo mecánico realizado (fuerza de caballos), concluyendo que el calor no podía ser una sustancia material sino una forma de movimiento o agitación de las partículas componentes del cuerpo, y que la energía mecánica se convertía en energía térmica mediante fricción y rozamiento.</p>

          <p>Publicó sus resultados en 1798 en un célebre artículo en Philosophical Transactions de la Royal Society de Londres. Sin embargo, la recepción fue escéptica: la comunidad científica estaba dominada por la prestigiosa teoría del calórico de Lavoisier, y existía resistencia al cambio de paradigma (concepto que Thomas Kuhn formalizaría siglos después). No obstante, el trabajo de Rumford fue una anticipación crucial de la Primera Ley de la Termodinámica, precursor directo de los experimentos de Joule en los 1840s que cuantificarían con precisión el equivalente mecánico del calor.</p>
        </div>
        <div className="theory-subsection">
          <h3>1840s James Joule equivalente mecánico calor 4.184J=1cal conservación energía</h3>
          <p>James Prescott Joule (1818-1889), físico autodidacta y cervecero próspero de Manchester, Inglaterra, dedicó décadas a experimentos meticulosos sobre el calentamiento de agua mediante agitación mecánica. Su diseño experimental clásico utilizaba un sistema de paletas rotatorias (paddle wheel) sumergidas en un recipiente aislado con agua, accionadas por pesas descendentes cuya energía potencial gravitatoria se convertía completamente en trabajo mecánico de fricción sobre el líquido. La agitación disipaba esta energía mecánica como calor, elevando la temperatura del agua, que Joule medía con termómetros extraordinariamente sensibles (precisión de 0.01°C, excepcional para la época).</p>

          <p>Mediante cuidadosa calorimetría, calculando la masa de agua, su capacidad calorífica, el cambio de temperatura, y comparándolo con el trabajo mecánico aplicado (calculable exactamente desde la altura y masa de las pesas), Joule determinó el equivalente mecánico del calor: inicialmente obtuvo aproximadamente 1 cal = 4.15 J, valor notablemente cercano al moderno 1 cal = 4.184 J (donde "julio" fue posteriormente nombrado en su honor). Esta exactitud era extraordinaria dada la instrumentación limitada del siglo XIX, testimonio de su dedicación y meticulosidad experimental.</p>

          <p>Joule publicó artículos sucesivos entre 1843-1850 refinando sus mediciones, ganando gradualmente el reconocimiento de la comunidad científica gracias al apoyo crucial de William Thomson (Lord Kelvin) quien divulgó ampliamente sus resultados. Este trabajo fue fundamental para la formulación de la Primera Ley de la Termodinámica (conservación de energía: ΔU = Q - W), desarrollada paralelamente por Rudolf Clausius y Hermann von Helmholtz. El concepto de energía como magnitud unificadora que conecta mecánica, calor, electricidad, magnetismo y luz en diferentes formas de manifestación de un principio universal revolucionó la física del siglo XIX.</p>
        </div>
        <div className="theory-subsection">
          <h3>Siglo XX mecánica cuántica estadística interpretación microscópica calor fonones</h3>
          <p>El desarrollo de la mecánica cuántica en los años 1920s por Schrödinger, Heisenberg y Born revolucionó la comprensión microscópica del calor. La cuantización de la energía en niveles discretos para átomos, moléculas y especialmente en sólidos cristalinos (con red periódica de átomos) llevó al concepto de vibraciones colectivas cuantizadas de la red: los fonones, cuasipartículas bosónicas con energía ℏω (donde ℏ es la constante de Planck reducida y ω la frecuencia angular) y momento cristalino ℏk (donde k es el vector de onda). La relación de dispersión ω(k) caracteriza los modos acústicos y ópticos de vibración del cristal.</p>

          <p>La conducción térmica en sólidos se comprende como transporte de fonones que sufren colisiones (scattering) con fronteras del material, impurezas y defectos cristalinos, generando resistencia térmica. La ley de Fourier de conducción q = -λ∇T adquiere fundamento microscópico, donde el coeficiente λ depende de la temperatura, la estructura cristalina y los mecanismos de dispersión fonónica. En metales, la conductividad térmica tiene también una contribución electrónica dominante de electrones libres en la banda de conducción, relacionada con la conductividad eléctrica mediante la ley de Wiedemann-Franz: λ/σ = LT, donde L = 2.45×10⁻⁸ W·Ω/K² es el número de Lorenz.</p>

          <p>En materiales aislantes la conducción es puramente fonónica, mientras que en semiconductores como silicio y germanio es mixta (fonónica + electrónica, dependiendo del dopaje y temperatura). Esta comprensión cuántica es fundamental en electrónica moderna para la gestión térmica de chips y microprocesadores que disipan decenas a cientos de watts en volúmenes milimétricos, requiriendo refrigeración líquida, pastas térmicas de alta conductividad y diseño térmico cuidadoso para overclocking manteniendo rendimiento y estabilidad sin degradación por sobrecalentamiento.</p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span>🎭</span> Curiosidades y Anécdotas</h2>
        <div className="theory-subsection">
          <h3>Joule luna miel cascada Sallanches medir temperatura agua caída energía potencial</h3>
          <p>James Joule se casó en 1847 con Amelia Grimes y eligió Suiza como destino para su luna de miel, visitando los Alpes. Durante su viaje romántico, no pudo resistir la tentación de realizar un experimento: visitó la cascada de Sallanches cerca de Chamonix, con una caída de aproximadamente 120 metros y un caudal de agua considerable. Como todo buen científico experimental, Joule llevó consigo un termómetro de alta precisión (±0.01°C) con la intención de medir la diferencia de temperatura del agua entre la base y la cima de la cascada.</p>

          <p>Su razonamiento era elegante: la energía potencial gravitatoria (mgh) del agua en la cima debería convertirse en energía cinética durante la caída y finalmente disiparse como calor mediante fricción, viscosidad y turbulencia al impactar en la base. La elevación de temperatura era calculable teóricamente: ΔT = gh/c<sub>p</sub>, donde h es la altura (120 m), g la gravedad (9.8 m/s²) y c<sub>p</sub> la capacidad calorífica del agua (4180 J/kg·K). Su predicción era ΔT ≈ (9.8 × 120) / 4180 ≈ 0.28°C, un cambio detectable con su termómetro.</p>

          <p>Desafortunadamente, la medición resultó extremadamente difícil debido a factores prácticos: evaporación del agua durante la caída, salpicadura y mezcla con aire frío, y enfriamiento evaporativo intenso en la base de la cascada. El resultado fue inconcluyente, pero la anécdota es ilustrativa de la pasión científica extraordinaria de Joule y su obsesión por verificar el equivalente mecánico del calor en cualquier circunstancia de la vida cotidiana, incluso durante su luna de miel. Esta curiosidad insaciable caracterizó toda su carrera científica.</p>
        </div>
        <div className="theory-subsection">
          <h3>Caloría alimentaria 1kcal=1000cal confusión mayúscula minúscula etiquetas nutricionales</h3>
          <p>La caloría (cal, con minúscula) es la unidad tradicional de energía térmica, definida como la cantidad de calor necesaria para elevar la temperatura de 1 gramo de agua en 1°C (específicamente desde 14.5°C hasta 15.5°C, la "caloría a 15°C" que es la definición estándar). Su equivalencia con el julio, la unidad SI de energía, es exactamente 1 cal = 4.184 J. Sin embargo, en nutrición y dietética existe una confusión histórica problemática: la "caloría alimentaria" escrita con mayúscula (Cal o Caloría) es en realidad 1 kcal = 1000 cal, es decir, una kilocaloría.</p>

          <p>Esta nomenclatura ambigua genera confusión en las etiquetas nutricionales: en Estados Unidos se usa "Cal" (con mayúscula) que significa kilocalorías, mientras que en Europa se usa "kcal" explícitamente para mayor claridad. Los valores típicos para un adulto son: requerimiento energético diario de 2000-2500 kcal (mujer/hombre con actividad moderada), del cual 1200-1800 kcal corresponden al metabolismo basal (gasto en reposo para mantener funciones vitales: cerebro, corazón, hígado, riñones, respiración, circulación, termorregulación), y 500-1000 kcal adicionales para actividad física (ejercicio, deporte, trabajo manual).</p>

          <p>El contenido energético de los macronutrientes es: carbohidratos 4 kcal/g, proteínas 4 kcal/g, lípidos (grasas) 9 kcal/g, y alcohol etanol 7 kcal/g. El agua, vitaminas, minerales y fibra no aportan energía metabolizable (0 kcal). El balance energético entre ingesta y gasto determina el peso corporal: equilibrio mantiene estabilidad, exceso produce aumento (sobrepeso, obesidad), déficit genera reducción. La epidemia global de obesidad refleja desequilibrios crónicos entre consumo energético elevado y gasto reducido por sedentarismo.</p>
        </div>
        <div className="theory-subsection">
          <h3>Efecto Mpemba agua caliente congela más rápido fría contradicción intuición</h3>
          <p>Erasto Mpemba, un estudiante de secundaria en Tanzania en 1963, estaba en una clase de cocina preparando helados cuando observó algo extraño: la mezcla de leche y azúcar caliente que colocó en el congelador se solidificó antes que la mezcla fría de sus compañeros. Su observación fue recibida con incredulidad y burla, pero persistío y consultó al profesor de física Denis Osborne de la Universidad de Dar es Salaam. Juntos realizaron verificación experimental sistemática que confirmó el fenómeno, publicándolo en 1969 en la revista Physics Education. El efecto fue nombrado "efecto Mpemba" en honor al estudiante descubridor, reconocimiento poco común para un no-científico.</p>

          <p>La explicación del efecto involucra múltiples factores físicos que interactúan de forma compleja: (1) evaporación preferencial del agua caliente reduce la masa total a congelar; (2) convección más intensa en agua caliente produce circulación que homogeneiza la temperatura y permite enfriamiento más eficiente; (3) gases disueltos (oxígeno, nitrógeno, CO₂) son menos solubles a alta temperatura y se liberan como burbujas, elevando ligeramente el punto de congelación; (4) el agua fría puede experimentar supercooling (subenfriamiento metaestable por debajo de 0°C) debido a mayor barrera de nucleación, retardando la formación de cristales de hielo; (5) las diferencias en la estructura de enlaces de hidrógeno (agua caliente tiene estructura relajada, fría más tensionada) pueden afectar la energía de activación para cristalización.</p>

          <p>A pesar de estas explicaciones plausibles, el efecto Mpemba sigue siendo controvertido en la comunidad científica debido a dificultades en su reproducibilidad consistente. Las condiciones experimentales resultan críticas: volumen del recipiente, material y aislamiento térmico, agitación inicial, definición precisa de "congelado", etc. El debate actual en física estadística y termodinámica de no equilibrio continúa investigando los mecanismos fundamentales de este fenómeno contra-intuitivo que desafía la noción simple de que "lo más frío siempre se congela primero".</p>
        </div>
        <div className="theory-subsection">
          <h3>Termo vacío Dewar invención 1892 criogenia licuefacción gases conservación</h3>
          <p>James Dewar (1842-1923), químico y físico escocés de la prestigiosa Royal Institution de Londres, fue un pionero en la investigación de gases a baja temperatura, logrando la licuefacción del hidrógeno (20 K, -253°C), oxígeno (90 K, -183°C) y nitrógeno (77 K, -196°C). Sin embargo, enfrentaba un problema práctico serio: los líquidos criogénicos se evaporaban rápidamente debido a la transferencia de calor del ambiente por conducción (contacto directo), convección (movimiento del aire) y radiación infrarroja. Necesitaba un recipiente con aislamiento térmico extraordinario para conservarlos el tiempo suficiente para realizar experimentos.</p>

          <p>En 1892, Dewar inventó un recipiente ingenioso: la "botella Dewar" o recipiente de vacío, consistente en una doble pared de vidrio con el espacio intermedio evacuado a presión inferior a 0.001 Pa (aproximadamente una millonésima de la presión atmosférica). El vacío elimina prácticamente la conducción y convección por ausencia de moléculas de aire. Además, la superficie interior se recubría con una capa plateada reflectante tipo espejo con emisividad muy baja (0.02-0.05), que reduce drásticamente la transferencia por radiación infrarroja. Esta combinación proporcionaba un aislamiento térmico extraordinario, permitiendo conservar líquidos criogénicos durante días o incluso semanas, revolucionando la investigación en criogenia y espectroscopia a temperatura controlada.</p>

          <p>Curiosamente, Dewar no patentó su invención, lo que permitió su rápida comercialización. En 1913, la compañía Stanley adaptó el diseño para crear el termo de bebidas calientes y frías, que se popularizó masivamente entre soldados durante la Primera Guerra Mundial. A lo largo del siglo XX, el diseño evolucionó con materiales mejorados (acero inoxidable en lugar de vidrio frágil, tapones de plástico), mayor capacidad y portabilidad. Hoy, el principio del vacío Dewar sigue siendo fundamental tanto en aplicaciones científicas criogénicas como en los termos domésticos cotidianos que mantienen nuestro café caliente o agua fría durante horas.</p>
        </div>
      </div>

      <div className="theory-summary-section">
        <h2><span>📝</span> Resumen</h2>
        <ul>
          <li><strong>Calor como energía en tránsito:</strong> El calor es energía que se transfiere entre sistemas debido a diferencia de temperatura, fluyendo espontáneamente desde cuerpos calientes hacia fríos hasta alcanzar el equilibrio térmico (cesación del intercambio). La Segunda Ley de la Termodinámica establece la dirección e irreversibilidad de este flujo en procesos naturales.</li>
          <li><strong>Mecanismos de transferencia:</strong> (1) Conducción: contacto directo en sólidos y líquidos, ley de Fourier q = -λ∇T proporcional al gradiente de temperatura. (2) Convección: movimiento de masa en fluidos, corrientes térmicas naturales (flotación) o forzadas (ventilador, bomba). (3) Radiación: ondas electromagnéticas infrarrojas, ley de Stefan-Boltzmann P = εσAT⁴ donde ε es emisividad (cuerpo negro ε=1).</li>
          <li><strong>Capacidad calorífica y calor específico:</strong> Capacidad calorífica C = Q/ΔT es la energía necesaria para elevar la temperatura de un sistema completo en 1 K (propiedad extensiva). Calor específico c = C/m normaliza por masa de la sustancia (propiedad intensiva). Agua: c = 4180 J/(kg·K), valor excepcionalmente alto utilizado en termorregulación, climatización, almacenamiento térmico y aplicaciones industriales.</li>
          <li><strong>Calor latente de cambio de fase:</strong> Energía necesaria para cambio de fase a temperatura constante: L = Q/m. Fusión (L<sub>f</sub>): sólido→líquido; vaporización (L<sub>v</sub>): líquido→gas; sublimación: sólido→gas directo. Agua: L<sub>f</sub> = 334 kJ/kg (hielo), L<sub>v</sub> = 2257 kJ/kg (vapor). Aplicaciones: climatización, refrigeración, conservación de alimentos, destilación industrial, secado por evaporación.</li>
          <li><strong>Primera Ley de la Termodinámica:</strong> ΔU = Q - W expresa la conservación de energía para sistemas cerrados: el cambio de energía interna ΔU es igual al calor absorbido Q menos el trabajo realizado W. Establece la equivalencia mecánica-térmica cuantificada por Joule: 1 cal = 4.184 J. Unifica conceptualmente energía en todas sus formas de manifestación (mecánica, térmica, eléctrica, química).</li>
          <li><strong>Aplicaciones tecnológicas del calor:</strong> Calefacción y refrigeración doméstica e industrial, generación eléctrica en centrales térmicas (carbón, gas, nuclear), tratamientos térmicos en industria metalúrgica (temple, revenido), procesos alimentarios (pasteurización, esterilización), industria química (destilación, evaporación, secado), energía geotérmica renovable contribuyendo a sostenibilidad y protección del medio ambiente.</li>
        </ul>
      </div>
    </>
  );
};

export default CalorTheory;
