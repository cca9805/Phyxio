import React from 'react';
import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as presionDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Presión",
  descripcion: "Fuerza por unidad de área en sistemas termodinámicos",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO'],
  isTheoryOnly: true
};

const PresionTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Presión?">
        <Concept title="Definición">
          <p>
            La presión es una magnitud física que mide la fuerza ejercida perpendicularmente sobre una superficie por unidad de área. Es una magnitud escalar fundamental en termodinámica y mecánica de fluidos.
          </p>
          
          <p>
            La presión se define como la relación entre la fuerza aplicada y el área sobre la cual se distribuye:
          </p>

          <Important>
            <p>Unidades de Presión:</p>
            <ul>
              <li>Pascal (Pa): Unidad del SI, 1 Pa = 1 N/m²</li>
              <li>Bar: 1 bar = 100000 Pa = 10⁵ Pa</li>
              <li>Atmósfera (atm): 1 atm = 101325 Pa</li>
              <li>mmHg o Torr: 1 mmHg = 133.322 Pa</li>
              <li>psi: 1 psi = 6894.76 Pa</li>
            </ul>
          </Important>
        </Concept>

        <Concept title="Características de la Presión">
          <ul>
            <li>Magnitud escalar: No tiene dirección, solo magnitud</li>
            <li>Actúa perpendicular: Siempre perpendicular a la superficie</li>
            <li>Se distribuye uniformemente: En un fluido en reposo</li>
            <li>Depende del área: A menor área, mayor presión para la misma fuerza</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Presión desde Fuerza y Área">
        <Concept title="Fórmula Fundamental">
          <p>
            La presión se calcula dividiendo la fuerza aplicada entre el área sobre la que actúa:
          </p>

          <Formula 
            expression={String.raw`P = \frac{F}{A}`}
            description="Presión como fuerza por unidad de área"
            calculatorId="presion-fuerza-area"
            definitions={presionDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular la Fuerza (F)", expression: String.raw`F = P \cdot A` },
              { description: "Calcular el Área (A)", expression: String.raw`A = \frac{F}{P}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>P: Presión (Pa o N/m²)</li>
            <li>F: Fuerza aplicada perpendicularmente (N)</li>
            <li>A: Área de la superficie (m²)</li>
          </ul>
        </Concept>

        <Concept title="Aplicaciones Prácticas">
          <ul>
            <li>Tacones de aguja: Concentran el peso en un área pequeña, generando alta presión</li>
            <li>Esquís: Distribuyen el peso en un área grande, reduciendo la presión sobre la nieve</li>
            <li>Cuchillos: El filo tiene área pequeña para cortar con menos fuerza</li>
            <li>Neumáticos: La presión determina el área de contacto con el suelo</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Presión Hidrostática">
        <Concept title="Presión en Fluidos">
          <p>
            La presión hidrostática es la presión que ejerce un fluido en reposo debido a su peso. Aumenta con la profundidad porque hay más fluido ejerciendo peso desde arriba.
          </p>

          <Formula 
            expression={String.raw`P = \rho \cdot g \cdot h`}
            description="Presión hidrostática en función de la profundidad"
            calculatorId="presion-hidrostatica"
            definitions={presionDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular la Profundidad (h)", expression: String.raw`h = \frac{P}{\rho \cdot g}` },
              { description: "Calcular la Densidad (ρ)", expression: String.raw`\rho = \frac{P}{g \cdot h}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>P: Presión hidrostática (Pa)</li>
            <li>ρ: Densidad del fluido (kg/m³)</li>
            <li>g: Aceleración de la gravedad (9.8 m/s²)</li>
            <li>h: Profundidad o altura de la columna de fluido (m)</li>
          </ul>
        </Concept>

        <Concept title="Principio de Pascal">
          <p>
            La presión aplicada a un fluido confinado se transmite sin disminución a todos los puntos del fluido y a las paredes del recipiente.
          </p>
          
          <p>Aplicaciones:</p>
          <ul>
            <li>Prensa hidráulica: Multiplica fuerzas usando diferencia de áreas</li>
            <li>Frenos hidráulicos: Transmiten presión del pedal a las ruedas</li>
            <li>Gatos hidráulicos: Levantan cargas pesadas con poca fuerza</li>
          </ul>
        </Concept>

        <Concept title="Presión Atmosférica">
          <p>
            La presión atmosférica es la presión ejercida por el peso de la atmósfera. A nivel del mar:
          </p>
          <ul>
            <li>Valor estándar: 101325 Pa = 1 atm = 1.01325 bar</li>
            <li>Disminuye con la altura: Aproximadamente 12 Pa por metro</li>
            <li>Varía con el clima: Sistemas de alta y baja presión</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Tipos de Presión">
        <Concept title="Clasificación">
          <ul>
            <li>Presión absoluta: Presión total medida desde el vacío perfecto</li>
            <li>Presión manométrica: Presión relativa a la presión atmosférica</li>
            <li>Presión diferencial: Diferencia entre dos presiones</li>
          </ul>

          <p>Relación:</p>
          <p style={{textAlign: 'center', fontSize: '1.1em', margin: '1em 0'}}>
            P<sub>absoluta</sub> = P<sub>manométrica</sub> + P<sub>atmosférica</sub>
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos Prácticos">
        <Example 
          title="Ejemplo 1: Presión sobre una Mesa"
          problem="Un libro de 2 kg está sobre una mesa. Si el área de contacto es de 0.02 m², ¿qué presión ejerce?"
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>m = 2 kg</li>
                <li>A = 0.02 m²</li>
                <li>g = 9.8 m/s²</li>
              </ul>
              
              <p>Solución:</p>
              <p>Paso 1: Calcular la fuerza (peso)</p>
              <p>F = m × g = 2 kg × 9.8 m/s² = 19.6 N</p>
              
              <p>Paso 2: Calcular la presión</p>
              <p>P = F / A = 19.6 N / 0.02 m² = 980 Pa</p>
              
              <p>Resultado: P = 980 Pa</p>
            </div>
          }
        />

        <Example 
          title="Ejemplo 2: Presión en una Piscina"
          problem="Calcula la presión hidrostática en el fondo de una piscina de 3 m de profundidad."
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>h = 3 m</li>
                <li>ρ = 1000 kg/m³ (agua)</li>
                <li>g = 9.8 m/s²</li>
              </ul>
              
              <p>Solución:</p>
              <p>P = ρ × g × h</p>
              <p>P = 1000 kg/m³ × 9.8 m/s² × 3 m</p>
              <p>P = 29400 Pa = 29.4 kPa</p>
              
              <p>Nota: Esta es solo la presión hidrostática. La presión total incluiría la presión atmosférica (101325 Pa).</p>
            </div>
          }
        />

        <Example 
          title="Ejemplo 3: Comparación de Presiones"
          problem="¿Quién ejerce más presión: un elefante de 5000 kg con patas de área total 0.5 m², o una bailarina de 50 kg en puntas con área 0.001 m²?"
          solution={
            <div>
              <p>Elefante:</p>
              <p>F = 5000 × 9.8 = 49000 N</p>
              <p>P = 49000 / 0.5 = 98000 Pa</p>
              
              <p>Bailarina:</p>
              <p>F = 50 × 9.8 = 490 N</p>
              <p>P = 490 / 0.001 = 490000 Pa</p>
              
              <p>Conclusión: La bailarina ejerce 5 veces más presión que el elefante, a pesar de pesar 100 veces menos. Esto demuestra la importancia del área de contacto.</p>
            </div>
          }
        />
      </TheorySection>

      <TheorySection title="Aplicaciones en Termodinámica">
        <Concept title="Importancia de la Presión">
          <ul>
            <li>Ecuación de estado: P, V y T están relacionadas en gases (PV = nRT)</li>
            <li>Procesos termodinámicos: Procesos isobáricos (presión constante)</li>
            <li>Trabajo termodinámico: W = P × ΔV en procesos isobáricos</li>
            <li>Máquinas térmicas: Diferencias de presión generan trabajo</li>
            <li>Cambios de fase: La presión afecta los puntos de ebullición y fusión</li>
          </ul>
        </Concept>

        <Concept title="Medición de Presión">
          <p>Instrumentos:</p>
          <ul>
            <li>Barómetro: Mide presión atmosférica</li>
            <li>Manómetro: Mide presión manométrica en sistemas cerrados</li>
            <li>Sensor piezoeléctrico: Medición electrónica de alta precisión</li>
            <li>Tubo de Bourdon: Manómetro mecánico común</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <div className="theory-subsection">
          <h3>Neumático automóvil presión inflado 2.2bar seguridad adherencia consumo combustible</h3>
          <p>Los neumáticos radiales modernos tienen una estructura compleja con lonas de acero y textil, y una banda de rodadura fabricada con compuesto de caucho sintético y natural, negro de humo y sílice que optimizan adherencia y resistencia al desgaste. La presión de inflado recomendada típicamente es 2.0-2.5 bar para vehículos de turismo con carga normal, especificada por el fabricante para temperatura ambiente de 20°C. La medición se realiza con manómetro digital o analógico en la válvula Schrader (válvula con núcleo y resorte que permite apertura para inflado y cierre hermético previniendo fugas).</p>

          <p>La presión correcta es crítica para seguridad: asegura área de contacto óptima con el asfalto, maximizando adherencia y minimizando distancia de frenado. Presión baja (desinflado) aumenta resistencia a la rodadura incrementando consumo de combustible 3-5%, produce desgaste irregular de la banda (más en bordes) y riesgo de reventón por sobrecalentamiento. Presión alta (sobreinflado) reduce área de contacto disminuyendo adherencia, especialmente en lluvia (aquaplaning), y produce desgaste acelerado en la parte central de la banda.</p>

          <p>Algunos sistemas usan nitrógeno en lugar de aire comprimido: el nitrógeno (N₂) es gas inerte que presenta menor variación de presión con temperatura debido a su menor coeficiente de expansión térmica y ausencia de humedad (el aire contiene vapor de agua variable). Esto proporciona estabilidad de presión más constante entre condiciones frías y calientes, ventaja apreciada en competición automovilística y aviación, aunque el beneficio en uso cotidiano es marginal comparado con verificación regular de presión.</p>
        </div>
        <div className="theory-subsection">
          <h3>Olla presión cocina rápida 2bar temperatura ebullición 120°C reducción tiempo cocción</h3>
          <p>La olla a presión es un recipiente hermético con cierre de seguridad mediante junta de silicona y válvula de regulación de presión que permite cocinar a sobrepresión típica de 2 bar (200 kPa) por encima de la presión atmosférica, alcanzando una presión absoluta total de 3 bar (1 bar atmosférica + 2 bar sobrepresión). Esta elevación de presión tiene un efecto crucial: el agua en el interior hierve a temperatura elevada de aproximadamente 120°C en lugar de los 100°C a presión atmosférica normal. Esta relación entre presión y punto de ebullición está descrita por la ecuación de Clausius-Clapeyron: dP/dT = L/(T·Δv), donde L es el calor latente de vaporización y Δv la diferencia de volumen específico entre vapor y líquido.</p>

          <p>La cocción a mayor temperatura reduce drásticamente el tiempo necesario: legumbres como garbanzos y lentejas se cocinan en 20-30 minutos en olla a presión versus 60-90 minutos en olla convencional, una reducción del 60-70%. Esto supone ahorro significativo de energía (gas o electricidad) y mejor conservación de nutrientes: las vitaminas hidrosolubles (grupo B, vitamina C) sufren menor degradación térmica debido a la menor exposición total al calor, a pesar de la temperatura más alta. El tiempo más corto compensa la temperatura ligeramente superior.</p>

          <p>La seguridad es fundamental en estos dispositivos: incorporan válvula de alivio de sobrepresión calibrada típicamente a 2.5 bar que abre automáticamente si se supera este límite, liberando vapor y previniendo explosiones. Los diseños modernos incluyen múltiples sistemas de seguridad redundantes (junta de ruptura, tapa con bloqueo que no permite apertura bajo presión) que han hecho prácticamente inexistentes los accidentes domésticos, que eran más frecuentes con modelos antiguos. El respeto a las instrucciones de uso (no llenar más de 2/3, verificar válvula limpia) garantiza operación segura.</p>
        </div>
        <div className="theory-subsection">
          <h3>Buceo submarino profundidad 40m presión 5bar descompresión enfermedad burbujas nitrógeno</h3>
          <p>En buceo recreativo la profundidad máxima recomendada es 40 metros, donde la presión hidrostática alcanza P = P<sub>atm</sub> + ρgh = 1 bar + (1025 kg/m³ × 9.8 m/s² × 40 m) / 100000 = 5 bar absolutos (o 4 bar manométricos respecto a la superficie). El buceador respira aire comprimido de botellas de aluminio o acero con presión de carga de 200 bar y capacidad de 10-15 L. El regulador tiene dos etapas: la primera reduce la presión de la botella (200 bar) a una presión intermedia (10 bar), y la segunda entrega aire a demanda del buceador a la presión ambiente exacta, permitiendo respirar normalmente a cualquier profundidad.</p>

          <p>Según la ley de Dalton de presiones parciales, el aire (79% nitrógeno, 21% oxígeno) a 5 bar tiene presión parcial de nitrógeno de 3.95 bar y oxígeno 1.05 bar. A estas presiones elevadas, el nitrógeno (gas inerte) se disuelve progresivamente en la sangre y tejidos del buceador (saturación) en función del tiempo de exposición. Durante el ascenso, si es demasiado rápido, el nitrógeno disuelto forma burbujas gaseosas en sangre y tejidos (similar a abrir una botella de refresco con gas), causando la enfermedad descompresiva (DCS, decompression sickness) con síntomas que van desde dolor articular hasta parálisis neurológica o muerte.</p>

          <p>La prevención requiere ascenso controlado con descompresión: paradas de seguridad típicamente a 5 metros durante 3 minutos para permitir la liberación gradual del nitrógeno disuelto (desaturación) sin formación de burbujas. Los buceadores usan tablas de descompresión o, más comúnmente hoy, ordenadores de buceo que calculan en tiempo real mediante algoritmos el tiempo límite sin parada (NDL, no-decompression limit) para cada profundidad según el perfil completo de la inmersión, monitorizando continuamente la saturación de nitrógeno en múltiples compartimentos corporales teóricos con diferentes velocidades de saturación/desaturación.</p>
        </div>
        <div className="theory-subsection">
          <h3>Turbina Francis central hidroeléctrica salto 100m presión 10bar generación eléctrica</h3>
          <p>Una central hidroeléctrica con embalse y altura geométrica (salto) de 100 metros convierte la energía potencial del agua en electricidad. Con un caudal turbinado de 50 m³/s, la potencia hidráulica disponible es P = ρgQH = 1000 kg/m³ × 9.8 m/s² × 50 m³/s × 100 m = 49 MW (megawatts). La presión a la entrada de la turbina es aproximadamente 10 bar = 1 MPa, generada por la columna de agua de 100 metros según P = ρgh. La turbina Francis es un tipo de turbina de reacción con flujo radial-axial, equipada con álabes móviles orientables en el distribuidor que permiten regular el caudal y optimizar el rendimiento según la demanda eléctrica instantánea.</p>

          <p>El agua entra a la turbina con velocidad de aproximadamente 30 m/s, y mediante el diseño hidrodinámico del rodete, se convierte su energía potencial, cinética y de presión en trabajo mecánico de rotación del eje a típicamente 500 rpm (revoluciones por minuto). El eje está acoplado directamente a un generador síncrono (alternador trifásico) que convierte el trabajo mecánico en energía eléctrica a tensión de generación de 10 kV (kilovoltios) y frecuencia de red de 50 Hz en Europa (60 Hz en América). El rendimiento global de una turbina Francis moderna supera el 90%, valor excepcional en conversión energética.</p>

          <p>La electricidad generada pasa por transformadores que elevan la tensión a 220 kV o 400 kV para transporte de larga distancia por la red eléctrica nacional, minimizando pérdidas óhmicas en las líneas (las pérdidas son proporcionales al cuadrado de la corriente, y alta tensión permite transportar la misma potencia con menor corriente). España está interconectada con Francia, Portugal y Marruecos, permitiendo intercambios de energía y estabilidad de la red europea. La energía hidroeléctrica es renovable, flexible (arranque/parada rápidos), y proporciona servicios de regulación de frecuencia esenciales para la estabilidad del sistema eléctrico.</p>
        </div>
        <div className="theory-subsection">
          <h3>Astronauta traje espacial presión 0.3bar oxígeno puro vacío espacio supervivencia</h3>
          <p>El espacio exterior es un vacío prácticamente perfecto con presión cercana a 10⁻¹⁴ Pa (cero absoluto para propósitos prácticos), sin atmósfera que proporcione protección contra radiación cósmica y solar, ni que modere las temperaturas extremas: +120°C expuesto al sol directo, -150°C en sombra. Para sobrevivir durante actividades extravehiculares (EVA, extravehicular activity), los astronautas usan el traje espacial EMU (Extravehicular Mobility Unit) que crea un microambiente presurizado y controlado. La presión interna del traje es de 0.3 bar = 30 kPa = 0.29 atm, significativamente inferior a la presión atmosférica terrestre de 1 atm.</p>

          <p>Aunque la presión es baja, el traje utiliza oxígeno puro al 100% (versus aire con 21% de oxígeno), lo que mantiene la presión parcial de oxígeno en 0.3 bar, superior a los 0.21 bar de presión parcial de O₂ a nivel del mar (21% de 1 atm). Esta presión parcial es suficiente para la respiración normal y el metabolismo celular, representando equivalencia fisiológica. La presurización reducida (versus usar 1 atm con aire normal) es crítica para permitir movilidad: articulaciones del traje rígido deben flexionarse contra la presión interna, y presión menor facilita el trabajo manual necesario para reparaciones en la Estación Espacial Internacional (ISS) durante EVAs que duran típicamente 6-8 horas.</p>

          <p>El sistema de soporte vital PLSS (Primary Life Support System) es una mochila en la espalda del astronauta que contiene: suministro de oxígeno comprimido, agua para refrigeración del sistema de enfriamiento por líquido que mantiene temperatura corporal confortable (el vacío impide evacuación de calor metabólico por convección), sistema de comunicación por radio, y batería eléctrica para alimentar todos los subsistemas. Antes de una EVA, el astronauta debe realizar pre-respiración de oxígeno puro durante varias horas a presión atmosférica normal para eliminar nitrógeno disuelto en sangre, previniendo enfermedad descompresiva durante la transición de 1 atm en la ISS a 0.3 atm en el traje.</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2><span>📜</span> Historia y Desarrollo</h2>
        <div className="theory-subsection">
          <h3>1643 Torricelli barómetro mercurio medición presión atmosférica descubrimiento vacío</h3>
          <p>Evangelista Torricelli 1608-1647 físico matemático italiano discípulo Galileo inventó 1643 barómetro tubo vidrio cerrado extremo superior 1metro longitud lleno mercurio invertido cubeta abierta mercurio columna desciende altura equilibrio 760mm nivel mar presión atmosférica sostiene peso columna mercurio densidad 13600kg/m³ presión P=ρgh=13600×9.8×0.76=101325Pa=1atm espacio vacío Torricelli cima tubo primer vacío artificial laboratorio experimento Magdeburgo hemisferios Otto von Guericke 1654 demostración espectacular fuerza presión atmosférica imposibilidad separar hemisferios evacuados equipos caballos.</p>
        </div>
        <div className="theory-subsection">
          <h3>1648 Pascal experimento Puy Dome altitud presión atmosférica disminuye</h3>
          <p>Blaise Pascal (1623-1662), matemático, físico y filósofo francés, formuló en 1648 una hipótesis audaz: la presión atmosférica debería disminuir con la altitud, ya que el peso de la columna de aire por encima de cualquier punto es menor a mayor altura. Para probar esta teoría experimentalmente, organizó una expedición al Puy de Dôme, un volcán extinto en la región de Auvernia en Francia, con una altura de 1,465 metros sobre el nivel del mar. Debido a su delicada salud, Pascal encomendó la tarea a su cuñado Florin Périer, quien llevó un barómetro de Torricelli (tubo de mercurio) y realizó mediciones tanto en la base como en la cumbre de la montaña.</p>
          
          <p>Los resultados fueron concluyentes: la altura de la columna de mercurio disminuyó de aproximadamente 760 mmHg en la base a cerca de 630 mmHg en la cima, una reducción de unos 130 mmHg. Esta diferencia confirmó brillantemente la hipótesis de Pascal y estableció la relación cuantitativa entre altitud y presión atmosférica. El experimento demostró que la atmósfera tiene peso y que la presión que ejerce disminuye con la altura según la ecuación barométrica. Este principio se convirtió en la base de la altimetría, permitiendo usar barómetros aneroides como altímetros en aviación, montañismo y meteorología para determinar la altitud con precisión.</p>
          
          <p>Además de sus contribuciones a la comprensión de la presión atmosférica, Pascal enunció en 1653 el famoso "Principio de Pascal": la presión aplicada a un fluido confinado en un recipiente cerrado se transmite íntegramente y en todas direcciones a todos los puntos del fluido y a las paredes del recipiente. Este principio es el fundamento de la prensa hidráulica, que permite multiplicar fuerzas mediante diferencias de áreas (F₂/F₁ = A₂/A₁), y de numerosos sistemas hidráulicos y neumáticos como frenos de automóviles, gatos hidráulicos, sistemas de elevación industrial y dirección asistida. La unidad SI de presión, el pascal (Pa), fue nombrada en su honor en reconocimiento a sus contribuciones fundamentales a la mecánica de fluidos.</p>
        </div>
        <div className="theory-subsection">
          <h3>1662 Boyle ley gases presión volumen temperatura constante inversamente proporcionales</h3>
          <p>Robert Boyle (1627-1691), químico y físico irlandés considerado uno de los fundadores de la química moderna, realizó en 1662 una serie de experimentos sistemáticos con gases utilizando una bomba de vacío y recipientes de vidrio cerrados. Manteniendo la temperatura ambiente constante, comprimió y expandió diferentes gases (principalmente aire) y midió cuidadosamente la relación entre presión y volumen. Observó que cuando comprimía un gas (reduciendo su volumen), la presión aumentaba proporcionalmente, y cuando lo expandía (aumentando su volumen), la presión disminuía en la misma proporción.</p>
          
          <p>Esta relación inversa quedó expresada matemáticamente como PV = constante para una temperatura fija y una cantidad dada de gas, conocida como la Ley de Boyle (o Ley de Boyle-Mariotte, reconociendo el trabajo independiente de Edme Mariotte en Francia en 1676). Fue la primera ley cuantitativa y reproducible sobre el comportamiento de los gases, marcando el inicio de la termodinámica de gases. Por ejemplo, si se duplica la presión sobre un gas a temperatura constante, su volumen se reduce a la mitad; si se triplica la presión, el volumen se reduce a un tercio. Esta proporcionalidad inversa refleja el hecho de que las moléculas de gas, al ser comprimidas, ocupan menos espacio pero colisionan con mayor frecuencia contra las paredes del recipiente, aumentando la presión.</p>
          
          <p>La Ley de Boyle se convirtió en uno de los pilares fundamentales de la ecuación de estado de los gases ideales PV = nRT, combinándose posteriormente con la Ley de Charles (relación entre volumen y temperatura), la Ley de Gay-Lussac (relación entre presión y temperatura) y la Ley de Avogadro (relación entre volumen y cantidad de sustancia en moles). Esta ecuación unificada permite describir y predecir el comportamiento de gases en función de presión, volumen, temperatura y cantidad de sustancia, con aplicaciones esenciales en química (cálculos estequiométricos, reacciones gaseosas), física (termodinámica, mecánica estadística) e ingeniería (diseño de equipos, procesos industriales, sistemas neumáticos y de compresión).</p>
        </div>
        <div className="theory-subsection">
          <h3>Siglo XX aviación altitudes extremas presurización cabina oxígeno suplementario</h3>
          <p>El desarrollo de la aviación comercial en el siglo XX llevó a los aviones a volar a altitudes de crucero de 10,000-12,000 metros (33,000-40,000 pies), donde la presión atmosférica es de apenas 0.25-0.20 bar (un cuarto o un quinto de la presión al nivel del mar) y la temperatura desciende a -56°C en la estratosfera inferior. Estas altitudes extremas ofrecen ventajas aerodinámicas significativas: la menor densidad del aire reduce la resistencia aerodinámica y la fricción, lo que disminuye el consumo de combustible, mejora la eficiencia y aumenta el alcance y autonomía de las aeronaves. Sin embargo, presentan un grave problema fisiológico: la presión parcial de oxígeno a esas altitudes es insuficiente para la respiración humana normal.</p>
          
          <p>A 10,000 metros de altitud, la presión parcial de oxígeno sería de aproximadamente 0.04 bar, muy por debajo del mínimo necesario de 0.16 bar para mantener la consciencia. La hipoxia (deficiencia de oxígeno) produce síntomas como mareo, confusión, pérdida de coordinación, y puede llevar rápidamente a la pérdida de consciencia e incluso la muerte en minutos. La solución adoptada universalmente es la presurización de la cabina, manteniendo una presión interna de 0.75-0.80 bar, equivalente a una altitud de 2,000-2,500 metros, perfectamente confortable y segura para pasajeros y tripulación. Este sistema neumático extrae aire de los compresores de los motores (turbinas), lo regula mediante válvulas de control y mantiene la presión diferencial entre el interior y el exterior del fuselaje.</p>
          
          <p>La presurización exige refuerzos estructurales significativos en el fuselaje para soportar la diferencia de presión (aproximadamente 0.6 bar), utilizando materiales como aleaciones de aluminio, titanio y composites de fibra de carbono. Las ventanas deben ser pequeñas, gruesas y con múltiples capas para resistir la presión. El sellado hermético de puertas y escotillas es crítico. En caso de despresurización rápida (accidente, rotura del fuselaje), las máscaras de oxígeno caen automáticamente desde compartimentos sobre los asientos, proporcionando bolsas de reserva para respiración de emergencia mientras los pilotos realizan un descenso rápido a una altitud segura por debajo de 3,000 metros, donde la presión atmosférica natural es suficiente para la supervivencia sin oxígeno suplementario. La seguridad de los sistemas de presurización es fundamental en la aviación moderna.</p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span>🎭</span> Curiosidades y Anécdotas</h2>
        <div className="theory-subsection">
          <h3>Récord profundidad buceo 332metros Ahmed Gabr 2014 Egipto presión 34bar descompresión 15horas</h3>
          <p>Ahmed Gabr, buceador egipcio y militar profesional, estableció el 18 de septiembre de 2014 el récord mundial de profundidad en buceo autónomo con escafandra al alcanzar 332.35 metros en el Mar Rojo, cerca de Dahab, Egipto. A esa profundidad extraordinaria, la presión absoluta es de aproximadamente 34 bar = 3,400 kPa = 33 atmósferas, más de 30 veces la presión al nivel del mar. El descenso duró solo 12 minutos a una velocidad controlada de 27 m/min, respirando una mezcla especial de trimix (helio, oxígeno y nitrógeno) diseñada para reducir la narcosis por nitrógeno y la toxicidad del oxígeno a profundidades extremas.</p>
          
          <p>Sin embargo, el verdadero desafío no fue el descenso sino el ascenso: Gabr tuvo que realizar una descompresión que duró aproximadamente 15 horas con paradas múltiples a profundidades entre 3 y 40 metros, cambiando progresivamente entre diferentes mezclas respiratorias (trimix, nitrox y oxígeno puro) para permitir la liberación gradual de los gases inertes (helio y nitrógeno) disueltos en sus tejidos. Esta descompresión extremadamente lenta y meticulosa es esencial para prevenir la enfermedad descomprensiva (DCS o "bends"), que puede causar embolia gaseosa arterial (AGE), parlisis, daño cerebral permanente e incluso la muerte si las burbujas de gas se forman en sangre y tejidos.</p>
          
          <p>El equipo de soporte en superficie incluyó una cámara hiperbárica de emergencia preparada para recompresión terapéutica con oxígeno al 100% en caso de complicaciones. La preparación de Gabr requirió años de entrenamiento especializado y miles de inmersiones previas para desarrollar la experiencia, condición física y adaptación fisiológica necesarias. Su récord superó la marca anterior de 318.25 metros establecida por Herbert Nitsch (Austria) en 2007. Estas inmersiónes extremas representan la superación de los límites humanos y contribuyen a la investigación científica sobre adaptación fisiológica a presiones extremas y exploración de abismos marinos profundos.</p>
        </div>
        <div className="theory-subsection">
          <h3>Fosa Marianas profundidad 11km presión 1100bar Challenger Deep sumergible Trieste 1960</h3>
          <p>La Fosa de las Marianas, ubicada en el océano Pacífico occidental, contiene el punto más profundo conocido de los océanos terrestres: el Challenger Deep, a 10,994 metros (casi 11 km) bajo el nivel del mar. A esta profundidad abismal, la presión hidrostática es de aproximadamente 1,100 bar = 110 MPa = 1,086 atmósferas, equivalente al peso de una columna de agua de 11 toneladas sobre cada centímetro cuadrado de superficie. Las condiciones son extremas: temperatura de apenas 1-4°C, oscuridad total (ausencia completa de luz solar, imposibilidad de fotosíntesis), y sin embargo, existe vida adaptada incluyendo bacterias extremófilas, anfipodos gigantes, peces abisales con bioluminiscencia y otros organismos extraordinarios que han evolucionado para sobrevivir a presiones que aplastaían instantáneamente a la mayoría de los seres vivos.</p>
          
          <p>La exploración histórica del Challenger Deep comenzó el 23 de enero de 1960, cuando el batiscafo Trieste, tripulado por Jacques Piccard (suizo) y Don Walsh (estadounidense), descendió durante 7 horas hasta tocar el fondo, permaneciendo 20 minutos para observaciones y fotografiando vida en el fondo marino antes de ascender durante 3 horas. Fue una hazaña de ingeniería: el Trieste tenía una cápsula esférica de acero con espesor de 12.7 cm para resistir la presión monstruosa, flotadores con tanques de gasolina (menos densa que el agua) para proporcionar flotabilidad, y lastre de hierro que podía liberarse para ascender. Este récord permaneció imbatido durante 52 años.</p>
          
          <p>En 2012, el cineasta James Cameron (director de Titanic y Avatar) realizó una inmersión en solitario al Challenger Deep en el sumergible Deepsea Challenger, alcanzando aproximadamente 10,908 metros de profundidad. Durante su inmersión, filmó imágenes en 3D para un documental y recolectó muestras biológicas y geológicas (sedimentos, rocas, organismos). Esta exploración científica contribuye al conocimiento de ecosistemas abisales, el origen de la vida en la Tierra, y el estudio de extremófilos que sobreviven en condiciones similares a las que podrían existir en lunas como Europa (Júpiter) o Encélado (Saturno), ambas con océanos subterráneos bajo capas de hielo. El estudio de la vida abisal es fundamental para la astrobiología y la búsqueda de vida extraterrestre.</p>
        </div>
        <div className="theory-subsection">
          <h3>Presión sangre sistólica diastólica 120/80mmHg salud cardiovascular hipertensión</h3>
          <p>La presión arterial es la fuerza que la sangre ejerce sobre las paredes de las arterias durante la circulación sistémica, cuando el corazón bombea desde el ventrículo izquierdo hacia la aorta y el resto del cuerpo, distribuyendo oxígeno y nutrientes a órganos y tejidos. Se mide con un esfigmomanómetro (tensiómetro) que incluye un manguito inflable colocado alrededor del brazo a la altura de la arteria braquial, y un estetoscopio para auscultar los sonidos de Korotkoff (aparición y desaparición de los sonidos del flujo sanguíneo). La presión se expresa con dos valores: la presión sistólica (máxima, durante la contracción ventricular o sístole) y la presión diastólica (mínima, durante la relajación ventricular o diástole). Un valor normal en adultos es 120/80 mmHg ("120 sobre 80").</p>
          
          <p>La unidad mmHg (milímetros de mercurio) es histórica, derivada del barómetro de Torricelli, y todavía se usa universalmente en medicina. En unidades SI, 120 mmHg = 16 kPa y 80 mmHg ≈ 10.7 kPa (1 mmHg = 133.322 Pa). La presión arterial varía según la actividad física, el estrés emocional, la postura, la edad y otros factores fisiológicos. Valores de 120-129/80 se consideran "elevados", mientras que 130-139/80-89 indican hipertensión de estadio 1, y ≥140/90 mmHg se clasifican como hipertensión arterial de estadio 2, una condición crónica que requiere tratamiento.</p>
          
          <p>La hipertensión arterial es un importante factor de riesgo cardiovascular, asociado con infarto agudo de miocardio, ictus cerebral (accidente cerebrovascular), insuficiencia renal crónica, retinopatía hipertensiva (daño en la retina que puede causar ceguera) y otras complicaciones graves. Los factores de riesgo incluyen edad avanzada, obesidad, sedentarismo, estrés crónico, tabaquismo, consumo excesivo de alcohol, dieta alta en sal (sodio) y antecedentes familiares. El tratamiento incluye medicación antihipertensiva (diuréticos, betabloqueantes, inhibidores de la ECA, antagonistas de los receptores de angiotensina II ARA-II, bloqueantes de canales de calcio) y cambios en el estilo de vida: ejercicio regular, dieta equilibrada baja en sodio, reducción de peso, control del estrés y cese del tabaquismo. El control periódico de la presión arterial es esencial para la prevención de complicaciones cardiovasculares.</p>
        </div>
        <div className="theory-subsection">
          <h3>Montaña Everest cima 8849m presión 0.33bar hipoxia zona muerte oxígeno suplementario</h3>
          <p>El Monte Everest, con su cima a 8,849 metros sobre el nivel del mar en la cordillera del Himalaya (frontera entre Nepal y Tíbet), es el punto más alto de la Tierra. A esa altitud extrema, la presión atmosférica es de aproximadamente 0.33 bar = 33 kPa = 0.326 atm, apenas un tercio de la presión al nivel del mar. El aire está tan rarificado que la presión parcial de oxígeno es de solo 0.07 bar, comparado con 0.21 bar al nivel del mar, insuficiente para mantener la respiración normal. La hipoxia de altitud produce síntomas graves: dolor de cabeza intenso, náuseas, vómitos, fatiga extrema, confusión mental, edema pulmonar de altitud (HAPE) y edema cerebral de altitud (HACE), ambos potencialmente mortales.</p>
          
          <p>La altitud por encima de 8,000 metros se conoce como la "zona de la muerte" (death zone), donde la permanencia prolongada es imposible para el ser humano: el cuerpo sufre deterioro físico acelerado con pérdida rápida de peso, deshidratación severa, congelación de extremidades (temperatura ambiente de -40°C, vientos de hasta 200 km/h que producen sensación térmica de -80°C), y agotamiento de reservas energéticas. Los alpinistas deben minimizar el tiempo en la zona de la muerte, idealmente solo unas horas entre el campamento final y la cumbre, y descenso rápido.</p>
          
          <p>El ascenso sin oxígeno suplementario es posible pero extremadamente peligroso y solo al alcance de alpinistas de élite: Reinhold Messner y Peter Habeler fueron los primeros en alcanzar la cumbre sin botellas de oxígeno en 1978, tras aclimatación progresiva durante semanas o meses en campos base y avanzados. La adaptación fisiológica incluye aumento de hemoglobina y eritropoyetina (EPO) producida por los riñones, resultando en policitemia (más glóbulos rojos) para compensar el transporte reducido de oxígeno. Sin embargo, la mayoría de alpinistas usan oxígeno suplementario: máscaras con reguladores conectados a botellas de 4 litros a 200 bar de presión, con caudal de 2-4 L/min, proporcionando un suplemento vital para la supervivencia y el éxito en la cumbre. La tasa de mortalidad en expediciones al Everest es del 4-5%. Kilian Jornet estableció en 2017 un récord de velocidad: 26 horas desde el campo base hasta la cima y descenso, sin oxígeno suplementario ni cuerdas fijas, tras aclimatación previa, demostrando una capacidad aeróbica extraordinaria.</p>
        </div>
      </div>

      <div className="theory-summary-section">
        <h2><span>📝</span> Resumen</h2>
        <ul>
          <li><strong>Presión</strong> es la magnitud escalar que mide la fuerza perpendicular aplicada por unidad de área, <strong>P = F/A</strong>. La unidad SI es el <strong>pascal</strong> (Pa = N/m²), aunque también se usan bar (1 bar = 10⁵ Pa), atmósfera (1 atm = 101,325 Pa), mmHg o torr (1 mmHg = 133.322 Pa) y psi (1 psi = 6,895 Pa). La <strong>presión absoluta</strong> se mide desde el vacío absoluto (cero), la <strong>presión manométrica</strong> desde la presión atmosférica local, y la <strong>presión de vacío</strong> es cuando está por debajo de la atmosférica. Se mide con barómetros (atmosférica) y manómetros (gases y líquidos en recipientes).</li>
          <li><strong>Presión atmosférica</strong> es el peso de la columna de aire desde la altura de la atmósfera hasta la superficie terrestre. A nivel del mar, su valor estándar es <strong>P₀ = 101,325 Pa = 1.01325 bar = 1 atm = 760 mmHg</strong>. Varía con la altitud (disminuye exponencialmente al subir), latitud, temperatura y condiciones meteorológicas. Los <strong>barómetros</strong> (de mercurio de Torricelli, aneroides, digitales) miden esta presión y permiten predecir el tiempo: anticiclones (alta presión, tiempo estable) y borrascas (baja presión, lluvias). Las isobaras en mapas meteorológicos conectan puntos de igual presión.</li>
          <li><strong>Presión hidrostática</strong> en fluidos en reposo aumenta linealmente con la profundidad: <strong>P = P_superficie + ρgh</strong>, donde ρ es la densidad del fluido, g la gravedad y h la profundidad. En agua (ρ = 1,000 kg/m³), la presión aumenta ~1 bar cada 10 metros de profundidad. Aplicaciones incluyen vasos comunicantes (mismo nivel en recipientes conectados), principio de Arquímedes (flotación y empuje), buceo submarinismo (cálculo de presiones, mezclas respiratorias, descompresión para prevenir la enfermedad descompresiva DCS causada por burbujas de nitrógeno).</li>
          <li><strong>Ley de Boyle</strong> establece que para un gas a temperatura constante (proceso isotérmico), presión y volumen son inversamente proporcionales: <strong>PV = constante</strong> o <strong>P₁V₁ = P₂V₂</strong>. Al comprimir un gas (reducir volumen), la presión aumenta; al expandirlo (aumentar volumen), la presión disminuye. Esta ley se combina con las de Charles (V ∝ T a presión constante), Gay-Lussac (P ∝ T a volumen constante) y Avogadro (V ∝ n a presión y temperatura constantes) para formar la <strong>ecuación de estado de gases ideales PV = nRT</strong>, fundamental en química, física e ingeniería para calcular procesos y diseñar equipos.</li>
          <li><strong>Aplicaciones industriales</strong>: neumáticos de automóvil (2.0-2.5 bar para adherencia y seguridad óptimas), ollas a presión (2 bar, 120°C, cocción rápida ahorrando tiempo y energía), aviación comercial (presurización de cabinas a 0.75-0.80 bar equivalente a 2,000-2,500 m de altitud para confort de pasajeros en crucero a 10,000-12,000 m), buceo (equipos autónomos SCUBA, mezclas respiratorias especiales trimix/nitrox, descompresión controlada), turbinas hidráulicas (generación eléctrica aprovechando presión del agua en saltos), compresores industriales (herramientas neumáticas, procesos de manufactura).</li>
          <li><strong>Fisiología y presión</strong>: la <strong>presión arterial</strong> normal es 120/80 mmHg (sistólica/diastólica = 16/10.7 kPa), indicando la fuerza de la sangre en arterias durante el ciclo cardíaco. La <strong>hipertensión</strong> (≥140/90 mmHg) es factor de riesgo cardiovascular (infarto, ictus, insuficiencia renal) que requiere tratamiento y cambios de estilo de vida. En <strong>altitud extrema</strong> como el Everest (8,849 m, presión 0.33 bar), la presión parcial de oxígeno es insuficiente (0.07 bar vs 0.21 bar al nivel del mar), causando hipoxia severa. La <strong>zona de la muerte</strong> ({'>'} 8,000 m) es inhabitable prolongadamente; la mayoría de alpinistas usan oxígeno suplementario y aclimatación progresiva para adaptación fisiológica (aumento de hemoglobina). La tasa de mortalidad en expediciones al Everest es 4-5%.</li>
        </ul>
      </div>
    </>
  );
};

export default PresionTheory;
