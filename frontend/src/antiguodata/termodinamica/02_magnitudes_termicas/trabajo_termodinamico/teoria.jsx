import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as trabajoDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Trabajo Termodinámico",
  descripcion: "Transferencia de energía mediante trabajo en sistemas termodinámicos",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO'],
  isTheoryOnly: true
};

const TrabajoTermodinamicoTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es el Trabajo Termodinámico?">
        <Concept title="Definición">
          <p>
            El trabajo termodinámico es la energía transferida cuando una fuerza actúa a través de una distancia. En termodinámica, el trabajo más común es el trabajo de frontera o trabajo PdV, que ocurre cuando un sistema cambia su volumen contra una presión externa.
          </p>
          
          <p>
            Al igual que el calor, el trabajo NO es una propiedad del sistema, sino energía en tránsito. El trabajo depende del proceso seguido (trayectoria), no solo de los estados inicial y final.
          </p>

          <Important>
            <p>Convención de Signos:</p>
            <ul>
              <li>W {'>'} 0: El sistema realiza trabajo sobre el entorno (expansión)</li>
              <li>W {'<'} 0: El entorno realiza trabajo sobre el sistema (compresión)</li>
              <li>W = 0: Proceso isocórico (volumen constante)</li>
            </ul>
            <p><em>Nota: Esta es la convención de ingeniería. En física a veces se usa la convención opuesta.</em></p>
          </Important>
        </Concept>

        <Concept title="Características del Trabajo">
          <ul>
            <li>Energía en tránsito: No es una propiedad del sistema</li>
            <li>Depende de la trayectoria: Diferentes procesos dan diferentes trabajos</li>
            <li>Interacción mecánica: Involucra fuerzas y desplazamientos</li>
            <li>Relacionado con volumen: En gases, el trabajo está asociado a cambios de volumen</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Trabajo a Presión Constante (Isobárico)">
        <Concept title="Proceso Isobárico">
          <p>
            Cuando la presión permanece constante durante el proceso, el trabajo se calcula de forma simple:
          </p>

          <Formula 
            expression={String.raw`W = P \cdot \Delta V`}
            description="Trabajo en proceso isobárico (presión constante)"
            calculatorId="trabajo-presion-constante"
            definitions={trabajoDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular el Cambio de Volumen (ΔV)", expression: String.raw`\Delta V = \frac{W}{P}` },
              { description: "Calcular la Presión (P)", expression: String.raw`P = \frac{W}{\Delta V}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>W: Trabajo realizado (J)</li>
            <li>P: Presión constante (Pa)</li>
            <li>ΔV: Cambio de volumen = V<sub>final</sub> - V<sub>inicial</sub> (m³)</li>
          </ul>
        </Concept>

        <Concept title="Aplicaciones">
          <ul>
            <li>Calentamiento de agua: En una olla abierta (presión atmosférica)</li>
            <li>Pistón con peso constante: La presión se mantiene por el peso</li>
            <li>Expansión atmosférica: Procesos a presión ambiente</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Trabajo Isotérmico (Temperatura Constante)">
        <Concept title="Proceso Isotérmico en Gas Ideal">
          <p>
            Para un gas ideal en un proceso isotérmico (temperatura constante), el trabajo se calcula usando la ley de gases ideales:
          </p>

          <Formula 
            expression={String.raw`W = nRT \ln\left(\frac{V_f}{V_i}\right)`}
            description="Trabajo isotérmico para gas ideal"
            calculatorId="trabajo-isotermico"
            definitions={trabajoDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Usando presiones", expression: String.raw`W = nRT \ln\left(\frac{P_i}{P_f}\right)` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>W: Trabajo realizado (J)</li>
            <li>n: Número de moles (mol)</li>
            <li>R: Constante de gases ideales = 8.314 J/(mol·K)</li>
            <li>T: Temperatura constante (K)</li>
            <li>V<sub>f</sub>, V<sub>i</sub>: Volúmenes final e inicial (m³)</li>
          </ul>
        </Concept>

        <Concept title="Características">
          <ul>
            <li>ΔU = 0: En gas ideal isotérmico, la energía interna no cambia</li>
            <li>Q = W: Todo el calor absorbido se convierte en trabajo</li>
            <li>Expansión: Si V<sub>f</sub> {'>'} V<sub>i</sub>, entonces W {'>'} 0</li>
            <li>Compresión: Si V<sub>f</sub> {'<'} V<sub>i</sub>, entonces W {'<'} 0</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Trabajo Adiabático (Sin Transferencia de Calor)">
        <Concept title="Proceso Adiabático">
          <p>
            En un proceso adiabático, no hay transferencia de calor (Q = 0). Por la Primera Ley de la Termodinámica:
          </p>

          <Formula 
            expression={String.raw`W = -n C_v \Delta T`}
            description="Trabajo adiabático usando cambio de temperatura"
            calculatorId="trabajo-adiabatico"
            definitions={trabajoDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Primera Ley Adiabática", expression: String.raw`W = -\Delta U` },
              { description: "Calcular Moles (n)", expression: String.raw`n = \frac{-W}{C_v \Delta T}` },
              { description: "Calcular Cv", expression: String.raw`C_v = \frac{-W}{n \Delta T}` },
              { description: "Calcular ΔT", expression: String.raw`\Delta T = \frac{-W}{n C_v}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>W: Trabajo realizado (J)</li>
            <li>n: Número de moles (mol)</li>
            <li>C<sub>v</sub>: Capacidad calorífica a volumen constante (J/mol·K)</li>
            <li>ΔT: Cambio de temperatura (K)</li>
          </ul>
        </Concept>

        <Concept title="Características del Proceso Adiabático">
          <ul>
            <li>Q = 0: No hay transferencia de calor</li>
            <li>Aislamiento térmico: Paredes aislantes o proceso muy rápido</li>
            <li>Expansión adiabática: El gas se enfría (T disminuye)</li>
            <li>Compresión adiabática: El gas se calienta (T aumenta)</li>
            <li>Ejemplo: Compresión en motor diesel, expansión en turbinas</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Primera Ley de la Termodinámica">
        <Concept title="Conservación de la Energía">
          <p>
            La Primera Ley relaciona el calor, el trabajo y el cambio de energía interna:
          </p>

          <Formula 
            expression={String.raw`\Delta U = Q - W`}
            description="Primera Ley de la Termodinámica"
            calculatorId="primera-ley-trabajo"
            definitions={trabajoDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular el Trabajo (W)", expression: String.raw`W = Q - \Delta U` },
              { description: "Calcular el Calor (Q)", expression: String.raw`Q = \Delta U + W` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>ΔU: Cambio de energía interna (J)</li>
            <li>Q: Calor transferido al sistema (J)</li>
            <li>W: Trabajo realizado por el sistema (J)</li>
          </ul>
        </Concept>

        <Concept title="Interpretación">
          <ul>
            <li>Conservación: La energía no se crea ni se destruye</li>
            <li>Calor absorbido: Aumenta la energía interna o se convierte en trabajo</li>
            <li>Trabajo realizado: Proviene de la energía interna o del calor absorbido</li>
            <li>Proceso cíclico: ΔU = 0, entonces Q = W</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Trabajo en Ciclos Termodinámicos">
        <Concept title="Trabajo Neto en un Ciclo">
          <p>
            En un ciclo termodinámico completo, el sistema regresa a su estado inicial. El trabajo neto es la diferencia entre el calor absorbido y el calor cedido:
          </p>

          <Formula 
            expression={String.raw`W_{neto} = Q_{entrada} - Q_{salida}`}
            description="Trabajo neto en un ciclo termodinámico"
            calculatorId="trabajo-ciclo"
            definitions={trabajoDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Eficiencia del Ciclo", expression: String.raw`\eta = \frac{W_{neto}}{Q_{entrada}} \times 100\%` },
              { description: "Trabajo desde Eficiencia", expression: String.raw`W_{neto} = \eta \times Q_{entrada}` },
              { description: "Calor de Entrada", expression: String.raw`Q_{entrada} = \frac{W_{neto}}{\eta}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>W<sub>neto</sub>: Trabajo neto del ciclo (J)</li>
            <li>Q<sub>entrada</sub>: Calor absorbido (J)</li>
            <li>Q<sub>salida</sub>: Calor cedido (J)</li>
          </ul>
        </Concept>

        <Concept title="Aplicaciones en Máquinas Térmicas">
          <ul>
            <li>Motor de combustión: Ciclo Otto, Diesel</li>
            <li>Turbina de vapor: Ciclo Rankine</li>
            <li>Motor Stirling: Ciclo Stirling</li>
            <li>Refrigerador: Ciclo inverso (trabajo de entrada)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos Prácticos">
        <Example 
          title="Ejemplo 1: Expansión Isobárica"
          problem="Un gas a presión constante de 200 kPa se expande desde 0.5 m³ hasta 1.2 m³. ¿Cuánto trabajo realiza?"
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>P = 200 kPa = 200,000 Pa</li>
                <li>V<sub>i</sub> = 0.5 m³</li>
                <li>V<sub>f</sub> = 1.2 m³</li>
                <li>ΔV = 1.2 - 0.5 = 0.7 m³</li>
              </ul>
              
              <p>Solución:</p>
              <p>W = P × ΔV</p>
              <p>W = 200,000 Pa × 0.7 m³</p>
              <p>W = 140,000 J = 140 kJ</p>
              
              <p>Interpretación: El gas realiza 140 kJ de trabajo sobre el entorno durante la expansión.</p>
            </div>
          }
        />

        <Example 
          title="Ejemplo 2: Expansión Isotérmica"
          problem="2 moles de gas ideal a 300 K se expanden isotérmicamente desde 10 L hasta 20 L. Calcula el trabajo realizado."
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>n = 2 mol</li>
                <li>T = 300 K</li>
                <li>V<sub>i</sub> = 10 L = 0.01 m³</li>
                <li>V<sub>f</sub> = 20 L = 0.02 m³</li>
                <li>R = 8.314 J/(mol·K)</li>
              </ul>
              
              <p>Solución:</p>
              <p>W = nRT × ln(V<sub>f</sub>/V<sub>i</sub>)</p>
              <p>W = 2 × 8.314 × 300 × ln(20/10)</p>
              <p>W = 4988.4 × ln(2)</p>
              <p>W = 4988.4 × 0.693</p>
              <p>W = 3457 J ≈ 3.46 kJ</p>
              
              <p>Nota: Como es isotérmico, Q = W = 3.46 kJ</p>
            </div>
          }
        />

        <Example 
          title="Ejemplo 3: Primera Ley"
          problem="Un sistema absorbe 500 J de calor y realiza 300 J de trabajo. ¿Cuál es el cambio en su energía interna?"
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>Q = 500 J (absorbido)</li>
                <li>W = 300 J (realizado por el sistema)</li>
              </ul>
              
              <p>Solución:</p>
              <p>Primera Ley: ΔU = Q - W</p>
              <p>ΔU = 500 J - 300 J</p>
              <p>ΔU = 200 J</p>
              
              <p>Interpretación: La energía interna del sistema aumenta en 200 J. De los 500 J absorbidos, 300 J se convirtieron en trabajo y 200 J quedaron almacenados como energía interna.</p>
            </div>
          }
        />
      </TheorySection>

      <TheorySection title="Aplicaciones en Termodinámica">
        <Concept title="Importancia del Trabajo">
          <ul>
            <li>Máquinas térmicas: Convierten calor en trabajo útil</li>
            <li>Refrigeradores: Requieren trabajo para extraer calor</li>
            <li>Compresores: Realizan trabajo para comprimir gases</li>
            <li>Turbinas: Extraen trabajo de gases en expansión</li>
            <li>Motores: Ciclos termodinámicos para generar trabajo</li>
          </ul>
        </Concept>

        <Concept title="Medición del Trabajo">
          <p>Métodos:</p>
          <ul>
            <li>Diagrama P-V: Área bajo la curva del proceso</li>
            <li>Dinamómetro: Mide fuerza y desplazamiento</li>
            <li>Medidor de potencia: Integra potencia en el tiempo</li>
            <li>Calorímetro: Indirectamente por Primera Ley</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <div className="theory-subsection">
          <h3>Motor combustión interna Otto 4tiempos gasolina conversión energía química mecánica</h3>
          <p>El motor de combustión interna Otto de 4 tiempos convierte la energía química de la gasolina en energía mecánica de rotación mediante un ciclo termodinámico que incluye cuatro etapas: admisión (entrada de mezcla aire-combustible), compresión adiabática (reducción de volumen y aumento de presión/temperatura), combustión (ignición por chispa de bujía, expansión rápida de gases calientes que empujan el pistón realizando trabajo), y escape (expulsión de gases quemados). Un motor típico de 2.0 litros de cilindrada con 4 cilindros tiene una relación de compresión de 10:1, comprimiendo la mezcla a 1/10 de su volumen inicial. La mezcla aire-gasolina es estequiométrica con lambda λ = 1 (relación 14.7:1 en masa aire/combustible), controlada por inyección electrónica multipunto que usa sensores MAP (presión del múltiple) y MAF (flujo másico de aire) gestionados por la ECU (unidad de control electrónico).</p>
          
          <p>El timing de encendido es crítico: la bujía produce la chispa 20-30° antes del punto muerto superior (PMS) para que la combustión alcance su máxima presión justo después del PMS, optimizando potencia y eficiencia. El trabajo neto del ciclo W_neto = ∫PdV es el área encerrada en el diagrama presión-volumen (P-V). La eficiencia teórica del ciclo Otto ideal es η = 1 - 1/r^(γ-1), donde r es la relación de compresión y γ = 1.4 es el exponente adiabático del aire. Con r = 10, la eficiencia teórica es aproximadamente 60%, pero la eficiencia real es solo 25-30% debido a pérdidas por fricción mecánica, transferencia de calor a paredes del cilindro, combustión incompleta y trabajo de bombeo (admisión y escape).</p>
          
          <p>Un motor típico de esta categoría produce 150 CV = 110 kW de potencia máxima a 5,500 rpm y un torque (par motor) de 200 Nm a régimen medio. Estos motores son ampliamente utilizados en automoción para vehículos turismos y transporte ligero, ofreciendo un balance entre potencia, eficiencia, costo y complejidad. La evolución tecnológica incluye turboalimentación (aumento de presión de admisión para más potencia sin aumentar cilindrada), inyección directa (mayor eficiencia y control), distribución variable (optimización de llenado en diferentes regímenes) y sistemas start-stop (apagado automático en paradas para reducir consumo y emisiones).</p>
        </div>
        <div className="theory-subsection">
          <h3>Compresor aire tornillo rotativo 10bar presión herramientas neumáticas industria</h3>
          <p>El compresor de tornillo rotativo (screw compressor) utiliza dos rotores helicoidales entrelazados, uno macho (con lóbulos convexos) y otro hembra (con lóbulos cóncavos), sincronizados por engranajes que giran en sentidos opuestos. Durante la rotación, aspiran aire ambiente a 1 bar y 20°C, lo comprimen progresivamente mediante reducción del volumen de las cámaras formadas entre los rotores y la carcasa, y finalmente lo descargan a 10 bar de sobrepresión (10 veces la presión atmosférica). La compresión es aproximadamente adiabática, por lo que la temperatura de salida alcanza 80-120°C. Para evitar daños en equipos y mejorar eficiencia, es necesaria refrigeración mediante un intercooler (intercambiador de calor aire-aire o aire-agua) que reduce la temperatura a 40-60°C, condensando la humedad que se elimina con separadores coalescentes y filtros que también remueven trazas de aceite de lubricación.</p>
          
          <p>El trabajo de compresión se calcula mediante W = ∫PdV con un proceso politrópico (n = 1.3 para aire con refrigeración parcial, entre isoterma n = 1 y adiabática n = γ = 1.4). Un compresor típico industrial requiere una potencia mecánica de 75 kW, suministrada por un motor eléctrico trifásico de 400 V, 50 Hz, para entregar un caudal volumétrico de 10 m³/min a presión nominal de 10 bar. Un depósito acumulador de 500 litros amortigua pulsaciones, estabiliza la presión y proporciona reserva de aire comprimido durante picos de demanda. La red de distribución utiliza tuberías de acero galvanizado con diámetro de 50 mm y válvulas de regulación para mantener presión constante en diferentes puntos de uso.</p>
          
          <p>Las aplicaciones industriales son numerosas: herramientas neumáticas portátiles (taladros, atornilladores de impacto, lijadoras, esmeriladores), pistolas de pintura por pulverización, soplado para limpieza de piezas, y automatización industrial con actuadores neumáticos (cilindros lineales, pinzas, válvulas de control) para procesos de manufactura, ensamblaje de componentes, embalaje y manipulación de materiales. Los compresores de tornillo rotativo son preferidos en aplicaciones de uso continuo por su fiabilidad, eficiencia energética superior a los compresores de pistón alternativos, menor nivel de ruido y vibración, y mantenimiento reducido.</p>
        </div>
        <div className="theory-subsection">
          <h3>Turbina vapor central térmica 500MW generación eléctrica trabajo eje rotación</h3>
          <p>Turbina vapor multietapa alta media baja presión expansión progresiva vapor sobrecalentado entrada 540°C 100bar velocidad 200m/s conversión energía térmica cinética impulso álabes móviles rotación eje 3000rpm sincronismo red eléctrica 50Hz generador alternador trifásico transformación energía mecánica eléctrica inducción electromagnética campo magnético rotatorio devanados estator tensión generada 20kV elevación transformador 400kV transporte larga distancia minimización pérdidas Joule resistencia líneas, trabajo turbina W=Δh cambio entalpía específica vapor entrada salida rendimiento isentrópico 85-90% etapa individual global 40-45% ciclo Rankine condensador vacío 0.05bar temperatura 35°C refrigeración agua río mar torre enfriamiento evaporación natural forzada bomba alimentación presurización retorno caldera cierre ciclo termodinámico potencia eléctrica neta 500MW consumo auxiliares 5-10% bombas ventiladores transformadores regulación frecuencia demanda red estabilidad suministro base pico seguimiento carga flexibilidad operación.</p>
        </div>
        <div className="theory-subsection">
          <h3>Motor cohete propulsión espacial combustión química empuje fuerza reacción</h3>
          <p>Los motores de cohete líquido de alta eficiencia utilizan propelentes criogénicos: hidrógeno líquido (LH₂) como combustible y oxígeno líquido (LOX) como oxidante, almacenados a temperaturas extremas de -253°C y -183°C respectivamente. Potentes bombas accionadas por turbinas inyectan estos propelentes a alta presión (hasta 200 bar) en la cámara de combustión, donde reaccionan exotérmicamente según 2H₂ + O₂ → 2H₂O, liberando 241.8 kJ/mol de energía y alcanzando temperaturas de llama de aproximadamente 3,500 K. El vapor de agua sobrecalentado a alta presión se expande rápidamente a través de una tobera De Laval (convergente-divergente) que acelera el flujo a velocidades supersónicas, alcanzando velocidades de escape de hasta 4,500 m/s (Mach 13). El empuje se calcula mediante F = ṁvₑ + Aₑ(Pₑ - Pₐ), donde ṁ es el flujo másico, vₑ la velocidad de escape, Aₑ el área de salida, Pₑ la presión de los gases de escape y Pₐ la presión ambiente.</p>
          
          <p>El impulso específico I_sp = vₑ/g es la figura de mérito que mide la eficiencia propulsiva del motor: cuántos segundos puede generar 1 kg de propelente una fuerza igual a su peso. Los motores de hidrógeno-oxígeno alcanzan I_sp de 450 segundos, el mejor rendimiento químico disponible. En comparación, los motores de hidrazina/monometilhidrazina (hipergólicos, se encienden espontáneamente al contacto) alcanzan 300 s, y los motores de combustible sólido (perclorato de amonio + aluminio) logran 250 s. Los propelentes sólidos son más simples y fiables pero no pueden apagarse ni regularse, mientras que los líquidos son complejos pero ofrecen control total del empuje.</p>
          
          <p>Los motores de cohete se utilizan en lanzadores espaciales como Ariane (Europa), Falcon Heavy (SpaceX), y SLS Space Launch System (NASA) con configuraciones de etapas múltiples que se separan secuencialmente durante el ascenso para maximizar eficiencia. Para alcanzar órbita baja terrestre (LEO, 200-2,000 km de altitud) se requiere una velocidad orbital de 7.8 km/s, mientras que la velocidad de escape terrestre es 11.2 km/s. Las misiones interplanetarias a Marte, Venus o las sondas Voyager y Pioneer que exploraron el sistema solar exterior dependen críticamente de la propulsión química para vencer la gravedad terrestre, aunque una vez en el espacio se utilizan maniobras de asistencia gravitatoria (slingshots) para ahorrar propelente.</p>
        </div>
        <div className="theory-subsection">
          <h3>Prensa hidráulica multiplicación fuerza Pascal presión fluido incompresible</h3>
          <p>La prensa hidráulica aplica el Principio de Pascal: la presión aplicada a un fluido confinado en un recipiente cerrado se transmite íntegramente y en todas direcciones a todos los puntos del fluido y a las paredes del recipiente. El sistema consiste en dos cilindros conectados llenos de fluido incompresible (aceite hidráulico): un cilindro pequeño de área A₁ donde se aplica una fuerza de entrada F₁, generando una presión P = F₁/A₁, y un cilindro grande de área A₂ donde se produce una fuerza de salida F₂ = P × A₂. La multiplicación mecánica o ventaja mecánica es F₂/F₁ = A₂/A₁, determinada por la relación de áreas. Por ejemplo, si A₂ = 100 × A₁, se obtiene una ganancia de 100 veces en fuerza: aplicar 100 N en el cilindro pequeño genera 10,000 N en el grande.</p>
          
          <p>Sin embargo, el desplazamiento es inversamente proporcional: si el pistón pequeño se mueve una distancia d₁, el pistón grande se mueve solo d₂ = d₁ × (A₁/A₂), conservando la energía según el principio de trabajo: F₁ × d₁ = F₂ × d₂. El fluido hidráulico suele ser aceite mineral o sintético con viscosidad de 32-68 cSt (centistokes) a 40°C, con aditivos antidesgaste (zinc ditiofosfato) y antioxidantes para prolongar su vida útil. La filtración es crítica: partículas contaminantes de solo 5-10 μm pueden dañar válvulas de precisión y sellos, causando fugas y pérdida de presión. Sistemas modernos incluyen bombas hidráulicas (pistón, paletas, engranajes) para mantener presión constante y válvulas direccionales y de alivio para control y seguridad.</p>
          
          <p>Las prensas hidráulicas industriales se utilizan extensamente en conformado de metales: estampación (corte de formas complejas en chapas), embutición (formación de piezas huecas como carrocerías de automóviles), forja (deformación en caliente de piezas macizas) y prensado de chapas para reducir espesor o crear geometrías complejas. Las matrices y herramientas son de acero templado de alta dureza (60-65 HRC) para resistir el desgaste. Las fuerzas de prensado varían desde 1,000 toneladas (10 MN) para piezas medianas hasta 5,000 toneladas (50 MN) o más para grandes componentes, generando presiones de 100-500 MPa que producen deformación plástica permanente. Los materiales procesados incluyen aleaciones de aluminio (ductilidad alta, uso en aeroespacial), acero inoxidable (resistencia corrosión, médico y alimentario), y latón (maleabilidad, fontanería y decoración). Las aplicaciones finales abarcan componentes de automoción (puertas, capots, bastidores), electrodomésticos (carcasas de lavadoras, neveras) y construcción (perfiles estructurales, paneles).</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2><span>📜</span> Historia y Desarrollo</h2>
        <div className="theory-subsection">
          <h3>1690 Denis Papin cilindro pistón vapor primera máquina térmica precursora</h3>
          <p>Denis Papin (1647-1713), físico y matemático francés que trabajó como asistente de Christiaan Huygens y posteriormente en la Royal Society de Londres, inventó en 1690 un dispositivo revolucionario: el cilindro con pistón accionado por vapor de agua. El concepto era ingenioso: al calentar agua en el fondo de un cilindro cerrado, la ebullición generaba vapor que aumentaba la presión, elevando un pistón contra la presión atmosférica y el peso de una carga. Al retirar la fuente de calor, el vapor se condensaba creando un vacío parcial dentro del cilindro, y la presión atmosférica empujaba el pistón hacia abajo con gran fuerza, realizando trabajo útil para elevar cargas mediante un sistema de poleas.</p>
          
          <p>Este dispositivo demostró por primera vez el principio fundamental de conversión de energía térmica en energía mecánica de forma cíclica, sentando las bases conceptuales de la máquina de vapor. Aunque el dispositivo de Papin era primitivo y no se desarrolló comercialmente, inspiró desarrollos posteriores. Thomas Newcomen construyó en 1712 la primera máquina de vapor atmosférica práctica para bombeo de agua en minas, y James Watt la revolucionó en 1769 con su patente del condensador separado, mejorando dramáticamente la eficiencia al evitar que el cilindro se enfriara y calentara en cada ciclo.</p>
          
          <p>Las máquinas de vapor fueron el motor de la Revolución Industrial de los siglos XVIII y XIX, transformando profundamente la sociedad y economía: transporte (locomotoras ferroviarias desde 1804, barcos de vapor transatlánticos), manufactura (mecanización de la industria textil en Inglaterra, siderurgia con altos hornos), bombeo de agua (minería de carbón en profundidad), y generación de potencia industrial. Esta revolución tecnológica impulsó la urbanización masiva, el crecimiento exponencial de la población, y estableció las bases de la civilización industrial moderna.</p>
        </div>
        <div className="theory-subsection">
          <h3>1824 Sadi Carnot ciclo reversible ideal eficiencia máxima temperatura límite</h3>
          <p>Nicolas Léonard Sadi Carnot (1796-1832), ingeniero militar francés e hijo del destacado político Lazare Carnot, publicó en 1824 su único trabajo: "Réflexions sur la puissance motrice du feu et sur les machines propres à développer cette puissance" (Reflexiones sobre la potencia motriz del fuego y sobre las máquinas adecuadas para desarrollar esta potencia). En este tratado revolucionario, realizó un análisis teórico profundo de las máquinas térmicas, introduciendo el concepto del ciclo Carnot reversible ideal: un ciclo termodinámico de cuatro etapas que consiste en dos procesos isotérmicos (expansión a temperatura T_caliente absorbiendo calor, compresión a temperatura T_fría cediendo calor) alternados con dos procesos adiabáticos (expansión e compresión sin intercambio de calor).</p>
          
          <p>El resultado fundamental de Carnot fue demostrar que el rendimiento máximo teórico de cualquier máquina térmica operando entre dos focos térmicos está dado por η_Carnot = 1 - T_fría/T_caliente (temperaturas absolutas en Kelvin), y depende únicamente de las temperaturas de los focos térmicos, siendo independiente de la sustancia de trabajo (gas, vapor, líquido) o del diseño específico de la máquina. Este rendimiento es el máximo alcanzable solo por un proceso completamente reversible, sin irreversibilidades como fricción, turbulencia, gradientes finitos de temperatura o presión. Cualquier máquina real opera inevitablemente con rendimiento inferior al límite de Carnot debido a estas pérdidas irreversibles.</p>
          
          <p>El trabajo de Carnot fue inicialmente ignorado, pero se reconoció póstumamente como el fundamento de la Segunda Ley de la Termodinámica, formulada posteriormente por Rudolf Clausius y William Thomson (Lord Kelvin) en la década de 1850. Clausius introdujo en 1865 el concepto de entropía S, una función de estado definida mediante dS = dQ_rev/T (integral de la transferencia de calor reversible dividida por temperatura). La desigualdad de Clausius establece que dS ≥ dQ/T, con igualdad para procesos reversibles y desigualdad estricta para procesos irreversibles. Esto implica que la entropía del universo (sistema + entorno) aumenta continuamente en todos los procesos naturales, definiendo la "flecha del tiempo" termodinámica y la asimetría temporal que distingue pasado de futuro en procesos macroscópicos irreversibles.</p>
        </div>
        <div className="theory-subsection">
          <h3>1876 Nikolaus Otto motor combustión interna gasolina automoción revolución</h3>
          <p>Nikolaus August Otto (1832-1891), ingeniero alemán autodidacta, desarrolló en 1876 el primer motor de combustión interna exitoso que operaba con gasolina en un ciclo de cuatro tiempos, posteriormente denominado ciclo Otto en su honor. Este ciclo consta de cuatro etapas: (1) admisión de la mezcla aire-combustible, (2) compresión adiabática que aumenta temperatura y presión, (3) combustión iniciada por chispa de bujía seguida de expansión que realiza trabajo empujando el pistón, y (4) escape de gases quemados. Los primeros motores Otto tenían eficiencias de apenas 10-15%, pero los motores modernos alcanzan 25-30% gracias a mejoras en relación de compresión, inyección electrónica, encendido programable y reducción de fricción. Otto patentó su invento en 1877 y estableció producción en serie con la compañía Deutz-AG, iniciando la fabricación industrial de motores.</p>
          
          <p>La aplicación revolucionaria llegó con los vehículos automóviles: Gottlieb Daimler y Karl Benz desarrollaron independientemente en 1885-1886 los primeros prototipos de automóviles con motor de combustión interna, iniciando la era del transporte personal motorizado. La verdadera democratización del automóvil llegó con Henry Ford y su Model T en 1908, producido en cadena de montaje a partir de 1913, lo que redujo drásticamente los costos y lo hizo accesible económicamente a las clases medias. Esto transformó radicalmente la movilidad, el urbanismo (suburbios, autopistas, estacionamientos) y la sociedad del siglo XX, creando una dependencia masiva del petróleo y los combustibles fósiles.</p>
          
          <p>Sin embargo, el impacto ambiental de mil millones de vehículos con motor de combustión se ha vuelto insostenible: emisiones masivas de CO₂ (principal gas de efecto invernadero contribuyente al cambio climático), NOₓ y SO₂ (lluvia ácida, problemas respiratorios), partículas finas PM2.5 (cáncer pulmonar), y ozono troposférico. Esto está impulsando una transición energética hacia la electrificación del transporte con baterías de litio (vehículos eléctricos Tesla, Nissan Leaf, autonoma 300-500 km), hidrógeno con pilas de combustible (Toyota Mirai, Hyundai Nexo, emisión cero: solo agua), biocombustibles (etanol, biodiesel) y mejoras en transporte público. La sostenibilidad del futuro de la movilidad depende de estas tecnologías limpias y de energías renovables para generación eléctrica.</p>
        </div>
        <div className="theory-subsection">
          <h3>1939 Frank Whittle turbina gas jet propulsión aviación supersónica</h3>
          <p>Frank Whittle (1907-1996), ingeniero aeronáutico de la RAF (Royal Air Force británica), patentó en 1930 el concepto del turborreactor o motor a reacción (jet engine), basado en una turbina de gas con combustión continua. El motor consta de: (1) compresor axial o centrífugo que aspira y comprime aire ambiente a alta presión (5-30 bar), (2) cámara de combustión donde se inyecta queroseno (kerosene) que arde continuamente con el aire comprimido a temperaturas de 1,200-1,600°C, (3) turbina de expansión que extrae parte del trabajo de los gases calientes para accionar el compresor, y (4) escape de gases a alta velocidad (500-600 m/s) a través de una tobera propulsiva, generando empuje por reacción según la tercera ley de Newton (acción-reacción). El primer vuelo exitoso de un motor turborreactor de Whittle fue en 1939 con el avión experimental Gloster E.28/39, alcanzando velocidades de 600 km/h, el doble que los cazas con motor de pistón de la época.</p>
          
          <p>El desarrollo se aceleró durante la Segunda Guerra Mundial: Alemania desplegó el Messerschmitt Me 262 en 1944, el primer caza jet en combate operacional, y el Reino Unido el Gloster Meteor en 1944, estableciendo la superioridad aérea de los jets. En la posguerra, la tecnología revolucionó la aviación comercial: el De Havilland Comet (1952) fue el primer avión comercial a reacción, seguido por el icónico Boeing 707 (1958) y el Douglas DC-8, que democratizaron los vuelos transatlánticos reduciendo el tiempo Nueva York-Londres de 18 horas (hélice) a 7 horas (jet). Esto impulsó el turismo masivo internacional, la globalización de la economía (comercio global, cadenas de suministro just-in-time) y el intercambio cultural mundial.</p>
          
          <p>El desarrollo culminante fue el Concorde (1969-2003, operado por Air France y British Airways), primer avión comercial supersónico con velocidad de crucero Mach 2.0 (2,180 km/h, el doble de la velocidad del sonido), reduciendo el vuelo París-Nueva York a solo 3.5 horas. Sin embargo, se retiró en 2003 debido a costos operacionales excesivos (consumo de combustible 4 veces superior a subsonic jets), contaminación acústica severa en despegues y aterrizajes, y el boom sónico (onda de choque que genera estruendo ensordecedor al superar Mach 1, prohibiendo vuelos supersónicos sobre tierra). Actualmente se investigan nuevos diseños de jets supersónicos de "bajo boom" y propulsión híbrida eléctrica para reducir ruido y emisiones, buscando recuperar el transporte supersónico sostenible.</p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span>🎭</span> Curiosidades y Anécdotas</h2>
        <div className="theory-subsection">
          <h3>Trabajo negativo compresión energía suministrada sistema entorno realiza</h3>
          <p>La convención de signos en termodinámica establece que el trabajo W es positivo cuando el sistema realiza trabajo sobre el entorno (expansión de un gas empujando un pistón hacia afuera, convirtiendo energía interna en energía mecánica), y negativo cuando el entorno realiza trabajo sobre el sistema (compresión de un gas al empujar el pistón hacia adentro, aumentando la energía interna y la temperatura del gas). Esta convención puede resultar confusa para estudiantes acostumbrados a la mecánica clásica, donde el trabajo W = F · d (fuerza por desplazamiento) se considera siempre positivo cuando fuerza y desplazamiento tienen el mismo sentido. En termodinámica, sin embargo, la perspectiva es desde el sistema como referencia: el signo del trabajo indica el sentido del flujo de energía a través de la frontera del sistema (salida o entrada).</p>
          
          <p>Un ejemplo cotidiano es la bomba de bicicleta para inflar un neumático, o un compresor de aire: al empujar el pistón hacia abajo, el volumen de gas se reduce y la presión aumenta. Desde la perspectiva del gas (el sistema termodinámico), el trabajo es negativo (W {'<'} 0) porque el entorno (los brazos del usuario) están suministrando energía mecánica al sistema. Esta energía se convierte en aumento de energía interna del gas, manifestado como elevación de temperatura: después de varias compresiones, el cilindro de la bomba se calienta notablemente, algo que cualquiera puede percibir al tocar el tubo con la mano. El calor generado se disipa al ambiente por conducción y convección.</p>
          
          <p>En compresores industriales de gran escala, esta elevación de temperatura es aún más significativa (80-120°C o superior), por lo que es necesaria refrigeración activa mediante intercoolers (intercambiadores de calor aire-aire o aire-agua) que reducen la temperatura del gas comprimido entre etapas de compresión múltiple. Esto no solo evita daños térmicos en los equipos y reduce el riesgo de combustión espontánea de vapores de aceite, sino que también mejora significativamente la eficiencia termodinámica: un gas más frío es más denso y requiere menos trabajo para ser comprimido aún más, reduciendo el consumo energético total del proceso de compresión multietapa.</p>
        </div>
        <div className="theory-subsection">
          <h3>Diagrama indicador Watt medición trabajo real máquina vapor área curva P-V</h3>
          <p>James Watt (1736-1819), el célebre ingeniero escocés inventor de la máquina de vapor mejorada con condensador separado y regulador centrífugo de velocidad (governor), desarrolló en 1796 el diagrama indicador (indicator diagram), un instrumento ingenioso para medir la presión dentro del cilindro en función del volumen (determinado por la posición del pistón) durante el ciclo de trabajo. El dispositivo consistía en un mecanismo mecánico que registraba gráficamente la presión del vapor sobre papel enrollado en un tambor rotatorio sincronizado con el movimiento del pistón: un lápiz montado en una palanca articulada con un pantógrafo (sistema de amplificación mecánica) tra zaba la curva presión-volumen (P-V) del ciclo completo, permitiendo lectura precisa de las presiones durante admisión, expansión, escape y compresión.</p>
          
          <p>El área encerrada por la curva cerrada en el diagrama P-V representa geométricamente el trabajo neto W = ∮ PdV (integral cíclica) realizado por el gas en el ciclo completo. Watt utilizó este instrumento para calcular directamente la "potencia indicada" (indicated power) de sus máquinas de vapor y comparar el rendimiento efectivo con las predicciones teóricas, detectando problemas como fugas en válvulas, fricción excesiva, timing incorrecto de apertura/cierre de válvulas, y otras pérdidas que reducían la eficiencia. Esto permitió optimizar tanto el diseño como la operación de las máquinas, contribuyendo decisivamente al éxito comercial de Watt y la expansión de la Revolución Industrial.</p>
          
          <p>En la actualidad, los diagramas indicadores se utilizan extensamente en motores de combustión interna, aunque con tecnología mucho más avanzada: sensores de presión piezoeléctricos instalados en la culata del cilindro miden la presión instantánea con precisión de microsegundos y resolución de 0.01 bar, sincronizados con encoders de posición del cigüeñal (0.1° de resolución angular). Los datos se adquieren electrónicamente y se analizan por computadora, generando diagramas P-V en tiempo real que visualizan en osciloscopio o software especializado. Esto permite diagnóstico detallado de averías (fallos de inyección, problemas de encendido, fugas de compresión) e investigación y desarrollo para mejorar eficiencia, reducir consumo de combustible y minimizar emisiones contaminantes (CO₂, NOₓ, partículas), cumpliendo normativas ambientales estrictas como Euro 6 (Europa) y EPA Tier 3 (Estados Unidos).</p>
        </div>
        <div className="theory-subsection">
          <h3>Efecto Joule-Thomson expansión gas válvula temperatura cambia enfriamiento calentamiento</h3>
          <p>James Prescott Joule y William Thomson (Lord Kelvin) descubrieron en 1852 un fenómeno termodinámico sorprendente: cuando un gas real (no ideal) se expande a través de una válvula de estrangulamiento o tapón poroso, su presión disminuye drásticamente pero su temperatura puede aumentar o disminuir, dependiendo del gas y de las condiciones iniciales. Este proceso es isoentálpico (entalpía constante: H₁ = H₂) porque según la Primera Ley de la Termodinámica, el trabajo de flujo es nulo (el gas entra y sale con la misma entalpía específica) y no hay transferencia de calor con el entorno (Q = 0, proceso adiabático). El coeficiente de Joule-Thomson se define como μ_JT = (∂T/∂P)_H, la derivada parcial de la temperatura respecto a la presión manteniendo entalpía constante. Si μ_JT {'>'} 0, el gas se enfría al expandirse; si μ_JT {'<'} 0, se calienta.</p>
          
          <p>La mayoría de los gases reales (N₂, O₂, CO₂, CH₄, aire) tienen μ_JT positivo a temperatura ambiente, por lo que se enfrían al expandirse a través de una válvula. Este comportamiento se debe a desviaciones de la idealidad: las fuerzas de atracción intermoleculares de van der Waals dominan sobre la repulsión de volumen excluido. Al expandirse, las moléculas se separan, aumentando su energía potencial intermolecular (trabajo realizado contra las fuerzas de atracción), lo que disminuye su energía cinética traslacional y por tanto la temperatura. Este efecto es la base de aplicaciones industriales críticas como la refrigeración por expansión y la licuefacción de gases.</p>
          
          <p>El proceso Linde-Hampson (desarrollado independientemente por Carl von Linde en 1895 y William Hampson en 1895) utiliza el efecto Joule-Thomson para licuar aire y separar nitrógeno (-196°C) y oxígeno (-183°C) mediante destilación criogénica. El ciclo consiste en: (1) compresión del aire a alta presión (200 bar), (2) enfriamiento externo con agua o aire a temperatura ambiente, (3) expansión a través de una válvula donde la temperatura desciende drásticamente por efecto Joule-Thomson, (4) el gas enfriado retorna y preenfría el gas comprimido entrante en un intercambiador de calor, y (5) el ciclo se repite iterativamente hasta que la temperatura es suficientemente baja para licuar el aire. Sin embargo, helio (He) e hidrógeno (H₂) requieren preenfriamiento porque su temperatura de inversión (μ_JT = 0, límite superior donde el enfriamiento por efecto Joule-Thomson es posible) es muy baja: ~40 K para helio y ~200 K para hidrógeno. Por debajo de estas temperaturas μ_JT {'>'} 0 y el efecto funciona; por encima μ_JT {'<'} 0 y el gas se calentaría al expandirse, requiriendo licuefacción por expansión en turbina criogénica (proceso Claude) en lugar de válvula.</p>
        </div>
        <div className="theory-subsection">
          <h3>Motor Stirling regenerativo eficiencia Carnot teórica silencioso externo combustión</h3>
          <p>Robert Stirling (1790-1878), clérigo e ingeniero escocés, patentó en 1816 un motor de aire caliente revolucionario que opera en un ciclo cerrado regenerativo. El motor consta de dos pistones (uno desplazador que mueve el gas entre zonas caliente y fría sin cambiar volumen total, y otro de trabajo que extrae energía mecánica) en cilindros conectados entre sí. Los componentes térmicos incluyen: un calentador (foco caliente, temperatura T_H = 600-800°C con fuentes externas), un enfriador (foco frío, T_C = 50-100°C refrigerado por agua o aire), y un regenerador (intercambiador de calor que almacena y recupera calor de los gases de trabajo, mejorando drásticamente la eficiencia). El gas de trabajo (helio, hidrógeno o aire) se calienta y enfría alternativamente, expandiendose cuando está caliente (realizando trabajo) y comprimiéndose cuando está frío (consumiendo menos trabajo debido a la menor temperatura).</p>
          
          <p>La eficiencia teórica máxima del motor Stirling ideal con regeneración perfecta iguala la eficiencia de Carnot: η = 1 - T_fría/T_caliente (temperaturas absolutas en Kelvin). Por ejemplo, con T_H = 800 K y T_C = 350 K, η_Carnot = (800-350)/800 = 56%. Sin embargo, la eficiencia práctica de motores Stirling reales es de 30-40%, comparable a motores Otto y Diesel modernos, debido a imperfecciones del regenerador (no recupera el 100% del calor), pérdidas por conducción térmica parasitária, fricción mecánica y espacios muertos. Las ventajas únicas del Stirling incluyen: combustión externa (puede usar cualquier fuente de calor: energía solar concentrada, biomasa, geotérmica, calor residual industrial, combustión de residuos, incluso radioisótopos), funcionamiento extremadamente silencioso (ideal para aplicaciones residenciales y militares), pocas partes móviles (mantenimiento reducido), y emisiones muy limpias (combustión controlada y eficiente con catálisis optimizada).</p>
          
          <p>Sin embargo, su aplicación práctica ha sido limitada debido a desventajas como peso y volumen elevados para la potencia generada (potencia específica baja, ~50 W/kg vs 500-1000 W/kg para motores de combustión interna), respuesta dinámica lenta (dificultad para cambiar rápidamente de potencia), y costo inicial alto. Los nichos de aplicación incluyen: cogeneración doméstica micro-CHP (Combined Heat and Power, generación simultánea de electricidad y calefacción para viviendas con gas natural o biomasa), submarinos con propulsión AIP (Air-Independent Propulsion, operación submarina extendida sin necesidad de snorkel, silencio total para sigilo en operaciones militares), y generadores termoeléctricos de radioisótopos RTG (Radioisotope Thermoelectric Generators) utilizados por NASA en sondas espaciales como Voyager 1 y 2, y el rover Curiosity en Marte, que convierten el calor de decaimiento radiactivo de plutonio-238 (vida media 87.7 años) en electricidad durante décadas de misión en el espacio profundo donde la energía solar es insuficiente.</p>
        </div>
      </div>

      <div className="theory-summary-section">
        <h2><span>📝</span> Resumen</h2>
        <ul>
          <li><strong>Trabajo termodinámico</strong> es la energía transferida cuando una fuerza actúa a través de un desplazamiento en la frontera de un sistema. <strong>Convención de signos</strong>: W {'>'} 0 cuando el sistema realiza trabajo sobre el entorno (expansión, salida de energía), W {'<'} 0 cuando el entorno realiza trabajo sobre el sistema (compresión, entrada de energía). A diferencia del calor, el trabajo <strong>depende de la trayectoria del proceso</strong>, calculado mediante la integral ∫PdV a lo largo del camino específico seguido. No es una función de estado, se representa con diferencial inexacta đW (no dW).</li>
          <li><strong>Trabajo de frontera PdV</strong> en gases asociado a cambios de volumen contra presión externa. <strong>Proceso isotérmico</strong> (T constante): W = nRT ln(V_f/V_i) para gas ideal. <strong>Proceso adiabático</strong> (Q = 0): W = -ΔU, todo el trabajo proviene/va a energía interna. <strong>Proceso isobárico</strong> (P constante): W = PΔV, trabajo proporcional al cambio de volumen. <strong>Proceso isocórico</strong> (V constante): W = 0, no hay trabajo de frontera. Aplicaciones en ciclos termodinámicos: Otto (motores gasolina), Diesel (motores diésel), Rankine (turbinas de vapor), Brayton (turbinas de gas). Análisis mediante <strong>diagramas P-V</strong>: el área encerrada por la curva del ciclo representa el trabajo neto realizado.</li>
          <li><strong>Otras formas de trabajo</strong>: <strong>Eléctrico</strong> đW = -VdQ (voltaje × carga diferencial, negativo porque carga sale del sistema al realizar trabajo), aplicaciones en baterías, generadores. <strong>Gravitatorio</strong> đW = mgdh (masa × gravedad × altura), bombas hidráulicas, centrales hidroeléctricas. <strong>Superficie</strong> đW = γdA (tensión superficial × área), formación burbujas, membranas. <strong>Elástico</strong> đW = Fdl (fuerza × elongación), resortes, materiales elásticos. <strong>Compresibilidad</strong> en sólidos y líquidos (cambios de volumen pequeños bajo alta presión). Aplicaciones diversas en ingeniería mecánica, eléctrica, química y física de materiales.</li>
          <li><strong>Primera Ley de la Termodinámica</strong>: <strong>ΔU = Q - W</strong> (conservación de energía en sistemas cerrados). El cambio de energía interna ΔU de un sistema es igual al calor absorbido Q menos el trabajo realizado W por el sistema. Esta ley establece la <strong>equivalencia mecánica-térmica</strong> demostrada por Joule (1 cal = 4.184 J), unificando conceptualmente todas las formas de energía (térmica, mecánica, eléctrica, química, nuclear) como interconvertibles pero conservadas en su suma total. Base fundamental para análisis de máquinas térmicas, refrigeradores, procesos industriales y transformaciones energéticas.</li>
          <li><strong>Eficiencia de máquinas térmicas</strong>: <strong>η = W_neto/Q_entrada</strong> (relación entre trabajo útil extraído y calor suministrado). El <strong>ciclo de Carnot</strong> establece el límite teórico máximo para cualquier máquina térmica reversible operando entre dos focos térmicos: <strong>η_Carnot = 1 - T_fría/T_caliente</strong> (temperaturas absolutas en Kelvin). Por ejemplo, T_H = 600 K, T_C = 300 K → η_Carnot = 50%. Los motores reales tienen eficiencias de 25-30% (Otto), 35-40% (Diesel), 40-45% (Rankine), 50-60% (ciclo combinado gas) debido a pérdidas por fricción mecánica, transferencia de calor no reversible, combustión incompleta y otras irreversibilidades. La Segunda Ley de la Termodinámica limita la dirección de los procesos y genera entropía en todas las transformaciones reales.</li>
          <li><strong>Aplicaciones tecnológicas</strong>: <strong>Motores de combustión interna</strong> Otto (gasolina, 25-30%) y Diesel (diésel, 35-40%) para automoción y transporte. <strong>Turbinas de vapor</strong> (ciclo Rankine, 40-45%) en centrales térmicas para generación eléctrica de base. <strong>Turbinas de gas</strong> (ciclo Brayton, 35-40% simple, 50-60% ciclo combinado) en aviación y generación eléctrica. <strong>Compresores</strong> (aire comprimido para herramientas neumáticas, refrigeración). <strong>Bombas y sistemas hidráulicos</strong> (multiplicación de fuerza, prensas industriales). <strong>Propulsión de cohetes</strong> (espacial) y <strong>turborreactores</strong> (aviación comercial y militar). <strong>Refrigeración y climatización</strong> (bombas de calor, aire acondicionado). La conversión, almacenamiento y uso eficiente de energía son fundamentales para la sostenibilidad, impulsando desarrollo de tecnologías limpias (vehículos eléctricos, hidrógeno, energías renovables) para reducir dependencia de combustibles fósiles y mitigar cambio climático.</li>
        </ul>
      </div>
    </>
  );
};

export default TrabajoTermodinamicoTheory;
