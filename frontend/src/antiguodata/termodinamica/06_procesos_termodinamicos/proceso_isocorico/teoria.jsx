import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as proceso_isocoricoDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Proceso Isocórico",
  descripcion: "Procesos termodinámicos a volumen constante. Comprende las relaciones entre presión y temperatura cuando el volumen permanece constante.",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const ProcesoIsocoricoTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es un Proceso Isocórico?">
        <Concept title="Definición">
          <p>
            Un proceso isocórico (también llamado isométrico o isovolumérico) es un proceso termodinámico en el cual el volumen del sistema permanece constante durante todo el proceso. El término proviene del griego "isos" (igual) y "chora" (espacio/volumen).
          </p>
          
          <p>
            Este tipo de proceso ocurre en recipientes rígidos cerrados donde el volumen no puede cambiar, como tanques de gas, bombas calorimétricas o cualquier contenedor de paredes fijas.
          </p>

          <Important>
            <p>Características Clave:</p>
            <ul>
              <li>Volumen constante: V = constante durante todo el proceso</li>
              <li>Trabajo nulo: W = 0 (no hay cambio de volumen)</li>
              <li>Presión variable: La presión cambia proporcionalmente a la temperatura</li>
              <li>Representación gráfica: Línea vertical en un diagrama P-V</li>
            </ul>
          </Important>
        </Concept>

        <Concept title="Ley de Gay-Lussac">
          <p>
            En un proceso isocórico, la presión y la temperatura están relacionadas por la Ley de Gay-Lussac:
          </p>
          <p style={{textAlign: 'center', fontSize: '1.1em', margin: '1em 0'}}>
            P / T = constante
          </p>
          <p>
            Esto significa que si la temperatura aumenta, la presión también aumenta proporcionalmente, y viceversa.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Trabajo en Proceso Isocórico">
        <Concept title="Trabajo Nulo">
          <p>
            En un proceso isocórico, el trabajo realizado es siempre cero porque no hay cambio de volumen:
          </p>

          <Formula 
            expression={String.raw`W = 0`}
            description="Trabajo en proceso a volumen constante"
            calculatorId="proceso_isocorico-grupo-1"
            definitions={proceso_isocoricoDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>W: Trabajo realizado (J) - siempre es cero en procesos isocóricos</li>
          </ul>

          <Important>
            <p>Explicación:</p>
            <p>El trabajo termodinámico se define como W = ∫P dV. Si el volumen es constante (dV = 0), entonces el trabajo es cero independientemente de la presión.</p>
          </Important>
        </Concept>

        <Concept title="Representación Gráfica">
          <p>
            En un diagrama P-V, un proceso isocórico se representa como una línea vertical. Como no hay área bajo la curva, el trabajo es cero.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Calor y Energía Interna">
        <Concept title="Calor Transferido">
          <p>
            El calor transferido en un proceso isocórico se calcula usando la capacidad calorífica a volumen constante:
          </p>

          <Formula 
            expression={String.raw`Q = nC_v\Delta T`}
            description="Calor en proceso a volumen constante"
            calculatorId="proceso_isocorico-grupo-1"
            definitions={proceso_isocoricoDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Relación P-T (Ley de Gay-Lussac)", expression: String.raw`\frac{P_i}{T_i} = \frac{P_f}{T_f}` },
              { description: "Cambio de energía interna", expression: String.raw`\Delta U = Q` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>Q: Calor transferido (J)</li>
            <li>n: Número de moles del gas (mol)</li>
            <li>C<sub>v</sub>: Capacidad calorífica a volumen constante (J/(mol·K))</li>
            <li>ΔT: Cambio de temperatura = T<sub>f</sub> - T<sub>i</sub> (K)</li>
          </ul>
        </Concept>

        <Concept title="Primera Ley Simplificada">
          <p>
            Como W = 0 en un proceso isocórico, la primera ley se simplifica:
          </p>

          <Formula 
            expression={String.raw`\Delta U = Q`}
            description="Cambio de energía interna igual al calor"
            calculatorId="proceso_isocorico-grupo-1"
            definitions={proceso_isocoricoDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>ΔU: Cambio de energía interna (J)</li>
            <li>Q: Calor transferido (J)</li>
          </ul>

          <Important>
            <p>Interpretación:</p>
            <p>Todo el calor transferido se convierte directamente en cambio de energía interna, ya que no se realiza trabajo. Esto hace que los procesos isocóricos sean muy eficientes para cambiar la temperatura de un gas.</p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos Prácticos">
        <Example 
          title="Ejemplo 1: Calentamiento Isocórico"
          problem="3 moles de gas (C_v = 20.8 J/(mol·K)) se calientan de 300 K a 400 K en un recipiente rígido. Calcula Q y ΔU."
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>n = 3 mol</li>
                <li>C<sub>v</sub> = 20.8 J/(mol·K)</li>
                <li>T<sub>i</sub> = 300 K</li>
                <li>T<sub>f</sub> = 400 K</li>
                <li>ΔT = 100 K</li>
              </ul>
              
              <p>Solución:</p>
              <p>1. Trabajo: W = 0 (volumen constante)</p>
              <p>2. Calor: Q = nC<sub>v</sub>ΔT = 3 × 20.8 × 100 = 6240 J</p>
              <p>3. Energía interna: ΔU = Q = 6240 J</p>
              
              <p>Resultados:</p>
              <ul>
                <li>W = 0 J</li>
                <li>Q = 6.24 kJ (calor absorbido)</li>
                <li>ΔU = 6.24 kJ (aumento de energía interna)</li>
              </ul>
            </div>
          }
        />

        <Example 
          title="Ejemplo 2: Aumento de Presión"
          problem="Un gas en un tanque rígido está a 100 kPa y 300 K. Si se calienta hasta 450 K, ¿cuál será la presión final?"
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>P<sub>i</sub> = 100 kPa = 100000 Pa</li>
                <li>T<sub>i</sub> = 300 K</li>
                <li>T<sub>f</sub> = 450 K</li>
                <li>V = constante</li>
              </ul>
              
              <p>Solución:</p>
              <p>Usando la Ley de Gay-Lussac:</p>
              <p>P<sub>i</sub>/T<sub>i</sub> = P<sub>f</sub>/T<sub>f</sub></p>
              <p>P<sub>f</sub> = (P<sub>i</sub> × T<sub>f</sub>) / T<sub>i</sub></p>
              <p>P<sub>f</sub> = (100000 Pa × 450 K) / 300 K</p>
              <p>P<sub>f</sub> = 150000 Pa = 150 kPa</p>
              
              <p>Resultado: P<sub>f</sub> = 150 kPa</p>
              <p>Nota: La presión aumentó en un 50% porque la temperatura aumentó en un 50%.</p>
            </div>
          }
        />
      </TheorySection>

      <TheorySection title="Comparación con Proceso Isobárico">
        <Concept title="Diferencias Clave">
          <table style={{width: '100%', borderCollapse: 'collapse', margin: '1em 0'}}>
            <thead>
              <tr style={{borderBottom: '2px solid #333'}}>
                <th style={{padding: '0.5em', textAlign: 'left'}}>Característica</th>
                <th style={{padding: '0.5em', textAlign: 'left'}}>Isocórico (V = cte)</th>
                <th style={{padding: '0.5em', textAlign: 'left'}}>Isobárico (P = cte)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.5em'}}>Trabajo</td>
                <td style={{padding: '0.5em'}}>W = 0</td>
                <td style={{padding: '0.5em'}}>W = PΔV</td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.5em'}}>Calor</td>
                <td style={{padding: '0.5em'}}>Q = nC<sub>v</sub>ΔT</td>
                <td style={{padding: '0.5em'}}>Q = nC<sub>p</sub>ΔT</td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.5em'}}>Primera Ley</td>
                <td style={{padding: '0.5em'}}>ΔU = Q</td>
                <td style={{padding: '0.5em'}}>ΔU = Q - W</td>
              </tr>
              <tr>
                <td style={{padding: '0.5em'}}>Gráfica P-V</td>
                <td style={{padding: '0.5em'}}>Línea vertical</td>
                <td style={{padding: '0.5em'}}>Línea horizontal</td>
              </tr>
            </tbody>
          </table>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🔬 Bomba calorimétrica</h3>
          <p>
            La bomba calorimétrica es un dispositivo de volumen constante usado para medir el calor de combustión de sustancias. 
            Al quemar una muestra en un recipiente rígido sumergido en agua, todo el calor liberado se transfiere al agua 
            sin realizar trabajo (W = 0). Esto permite calcular con precisión el valor calorífico de combustibles, alimentos 
            y materiales. Las bombas calorimétricas modernas pueden alcanzar presiones de hasta 30 atm durante la combustión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏠 Tanques de gas y seguridad</h3>
          <p>
            Los tanques de gas domésticos e industriales son recipientes rígidos que experimentan procesos isocóricos. 
            Cuando la temperatura ambiente aumenta, la presión interna puede subir peligrosamente. Por ejemplo, un tanque 
            a 20°C y 200 kPa alcanzará 270 kPa a 50°C. Por eso las normativas exigen válvulas de seguridad y se prohíbe 
            exponer los tanques al sol directo o fuentes de calor.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🍲 Olla a presión</h3>
          <p>
            La olla a presión funciona como un sistema casi isocórico: el volumen de vapor es prácticamente constante 
            debido a la válvula cerrada. Al calentar, la presión aumenta siguiendo la Ley de Gay-Lussac, elevando el 
            punto de ebullición del agua hasta 120-125°C. Esto reduce el tiempo de cocción en un 70% comparado con 
            cocción normal, ahorrando energía.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 Ciclo Otto en motores de gasolina</h3>
          <p>
            El ciclo Otto incluye dos procesos isocóricos fundamentales: la combustión (ignición) y el escape. 
            Durante la combustión, la mezcla se quema casi instantáneamente a volumen constante, aumentando la presión 
            de 20 bar a 60-80 bar en milisegundos. Esta súbita elevación de presión es lo que impulsa el pistón hacia abajo. 
            En el escape, el enfriamiento isocórico reduce la presión antes de expulsar los gases.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚠️ Aerosoles y advertencias de seguridad</h3>
          <p>
            Los envases de aerosoles contienen gas propelente a alta presión en un recipiente rígido. Las advertencias 
            "No exponer al sol" y "No incinerar" se basan en el proceso isocórico: si la temperatura aumenta de 20°C 
            a 60°C, la presión puede duplicarse, causando explosión. A 100°C, la presión puede triplicarse, superando 
            la resistencia del envase.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El estudio del volumen constante
        </h2>
        
        <div className="theory-subsection">
          <h3>🌡️ Jacques Charles y los primeros experimentos (1787)</h3>
          <p>
            Jacques Charles fue el primero en estudiar sistemáticamente la relación entre temperatura y presión a volumen 
            constante. Aunque realizó sus experimentos en 1787, no los publicó. Descubrió que la presión de un gas aumenta 
            aproximadamente 1/273 de su valor por cada grado Celsius de aumento de temperatura, anticipando el concepto 
            de cero absoluto (-273°C).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Joseph Louis Gay-Lussac y la ley del volumen constante (1802)</h3>
          <p>
            Gay-Lussac publicó en 1802 sus experimentos que confirmaban y extendían el trabajo de Charles. 
            Estableció matemáticamente que P/T = constante para un gas a volumen constante. Esta relación se conoce 
            como "Ley de Gay-Lussac" o "Segunda Ley de Charles". Sus experimentos fueron más precisos, usando 
            termómetros de mercurio y manómetros calibrados.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💣 Pierre-Eugène Berthelot y la bomba calorimétrica (1879)</h3>
          <p>
            Berthelot inventó la bomba calorimétrica moderna, un dispositivo isocórico para medir calores de combustión. 
            Su diseño usaba un recipiente de acero capaz de soportar 25 atmósferas, sumergido en un calorímetro de agua. 
            Este invento revolucionó la termoquímica, permitiendo medir con precisión la energía contenida en combustibles 
            y alimentos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 Nikolaus Otto y el ciclo de cuatro tiempos (1876)</h3>
          <p>
            Otto diseñó el primer motor práctico de combustión interna de cuatro tiempos, incorporando procesos isocóricos. 
            Su innovación clave fue la combustión a volumen constante (isocórica), que generaba mayor presión que la combustión 
            isobárica usada en motores anteriores. Esto aumentó la eficiencia del 4% de los motores de Lenoir al 14% del 
            motor de Otto, revolucionando el transporte.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🥘 Denis Papin y la olla a presión (1679)</h3>
          <p>
            Mucho antes de formalizar la termodinámica, Denis Papin inventó el "digestor" o primera olla a presión. 
            Aunque no comprendía la Ley de Gay-Lussac (se formularía 123 años después), Papin sabía empíricamente 
            que al calentar un recipiente cerrado, la presión aumentaba y el agua hervía a mayor temperatura, 
            cocinando más rápido. Su invento anticipó aplicaciones prácticas de procesos isocóricos.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>💥 El desastre del tanque en Texas (2013)</h3>
          <p>
            En Texas, un tanque de fertilizante explotó debido a un proceso isocórico descontrolado. Un incendio calentó 
            el tanque rígido de nitrato de amonio de 25°C a aproximadamente 200°C. La presión aumentó de 1 atm a casi 
            1.6 atm según la Ley de Gay-Lussac, pero la descomposición térmica del nitrato generó gases adicionales, 
            multiplicando la presión hasta que el tanque explotó. La explosión equivalió a 7-10 toneladas de TNT, 
            dejando un cráter de 27 metros.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>☀️ El misterio de los neumáticos en verano</h3>
          <p>
            Los conductores notan que la presión de los neumáticos aumenta en verano. Un neumático inflado a 32 psi (2.2 bar) 
            a 15°C alcanzará 36 psi (2.5 bar) a 45°C. Aunque los neumáticos no son completamente rígidos, la variación de 
            volumen es mínima (&lt;5%), por lo que el proceso es casi isocórico. Este aumento del 12% en presión mejora 
            la respuesta del vehículo pero aumenta el desgaste y el riesgo de reventón.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎆 Fuegos artificiales y procesos isocóricos</h3>
          <p>
            Los fuegos artificiales explotan mediante un proceso isocórico extremo. La pólvora se quema en una carcasa 
            rígida a volumen constante. En milisegundos, la temperatura salta de 20°C a 2700°C, aumentando la presión 
            más de 900 veces (según T_final/T_inicial = 2973K/293K ≈ 10 veces, más la generación de gases). 
            Esta súbita presión rompe la carcasa, produciendo el estallido característico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧊 El experimento del hielo en recipiente rígido</h3>
          <p>
            Si llenas completamente un recipiente rígido con agua y lo congelas, el recipiente se romperá. 
            Aunque el hielo ocupa más volumen que el agua líquida, el recipiente rígido no permite expansión. 
            Esto crea una presión isocórica que puede alcanzar 2000 atm a -20°C, suficiente para romper acero. 
            Este fenómeno fractura rocas en la naturaleza (meteorización por congelación) y rompe tuberías en invierno.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🍿 Las palomitas de maíz y la explosión isocórica</h3>
          <p>
            Cada grano de maíz es un pequeño recipiente rígido que contiene agua. Al calentar a 180°C, el agua se vaporiza 
            pero no puede escapar. La presión aumenta según la Ley de Gay-Lussac hasta alcanzar 9-10 atm (unas 135 psi). 
            Cuando la presión supera la resistencia de la cáscara, el grano explota súbitamente, vaporizando el almidón 
            húmedo del interior. El "pop" es la onda de choque de este mini proceso isocórico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 El incidente del Apollo 13 y los tanques criogénicos</h3>
          <p>
            El accidente del Apollo 13 en 1970 fue causado por un proceso isocórico descontrolado. Un tanque de oxígeno 
            líquido (-183°C) tenía un calentador defectuoso que elevó localmente la temperatura. En el tanque rígido, 
            el oxígeno líquido se vaporizó rápidamente, aumentando la presión de 2 bar a más de 70 bar en segundos. 
            El tanque explotó, dañando severamente la nave. Este accidente llevó a rediseñar todos los sistemas criogénicos 
            con múltiples válvulas de alivio de presión.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            Un proceso isocórico ocurre a volumen constante (V = cte), típicamente en recipientes rígidos 
            como tanques, bombas calorimétricas u ollas a presión.
          </li>
          <li>
            El trabajo es siempre cero (W = 0) porque no hay cambio de volumen (W = ∫P dV = 0 si dV = 0).
          </li>
          <li>
            La presión y temperatura están relacionadas por la Ley de Gay-Lussac: P/T = constante. 
            Un aumento de temperatura causa un aumento proporcional de presión.
          </li>
          <li>
            Todo el calor transferido se convierte en cambio de energía interna (ΔU = Q), 
            calculado mediante Q = nCvΔT.
          </li>
          <li>
            Aplicaciones prácticas: bomba calorimétrica, tanques de gas, ollas a presión, ciclo Otto, 
            aerosoles, y cualquier sistema donde el volumen no puede cambiar.
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProcesoIsocoricoTheory;
