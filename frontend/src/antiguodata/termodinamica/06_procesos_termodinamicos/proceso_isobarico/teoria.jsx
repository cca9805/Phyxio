import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as proceso_isobaricoDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Proceso Isobárico",
  descripcion: "Procesos termodinámicos a presión constante. Comprende las relaciones entre volumen y temperatura cuando la presión permanece constante.",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const ProcesoIsobaricoTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es un Proceso Isobárico?">
        <Concept title="Definición">
          <p>
            Un proceso isobárico es un proceso termodinámico en el cual la presión del sistema permanece constante durante todo el proceso. El término proviene del griego "isos" (igual) y "baros" (peso/presión).
          </p>
          
          <p>
            Este tipo de proceso es común en sistemas abiertos a la atmósfera y en cilindros con pistones móviles sin fricción, donde la presión externa permanece constante.
          </p>

          <Important>
            <p>Características Clave:</p>
            <ul>
              <li>Presión constante: P = constante durante todo el proceso</li>
              <li>Volumen variable: El volumen puede aumentar o disminuir</li>
              <li>Temperatura variable: La temperatura cambia proporcionalmente al volumen</li>
              <li>Representación gráfica: Línea horizontal en un diagrama P-V</li>
            </ul>
          </Important>
        </Concept>

        <Concept title="Ley de Charles">
          <p>
            En un proceso isobárico, el volumen y la temperatura están relacionados por la Ley de Charles:
          </p>
          <p style={{textAlign: 'center', fontSize: '1.1em', margin: '1em 0'}}>
            V / T = constante
          </p>
          <p>
            Esto significa que si la temperatura aumenta, el volumen también aumenta proporcionalmente, y viceversa.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Trabajo en Proceso Isobárico">
        <Concept title="Fórmula del Trabajo">
          <p>
            El trabajo realizado en un proceso isobárico es el producto de la presión constante por el cambio de volumen:
          </p>

          <Formula 
            expression={String.raw`W = P \Delta V = P(V_f - V_i)`}
            description="Trabajo en proceso a presión constante"
            calculatorId="proceso_isobarico-grupo-1"
            definitions={proceso_isobaricoDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calor transferido", expression: String.raw`Q = nC_p\Delta T` },
              { description: "Relación T-V (Ley de Charles)", expression: String.raw`\frac{V_i}{T_i} = \frac{V_f}{T_f}` },
              { description: "Cambio de energía interna", expression: String.raw`\Delta U = nC_v\Delta T` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>W: Trabajo realizado por o sobre el sistema (J)</li>
            <li>P: Presión constante del proceso (Pa)</li>
            <li>ΔV: Cambio de volumen = V<sub>f</sub> - V<sub>i</sub> (m³)</li>
            <li>V<sub>i</sub>: Volumen inicial (m³)</li>
            <li>V<sub>f</sub>: Volumen final (m³)</li>
          </ul>

          <Important>
            <p>Interpretación del Signo:</p>
            <ul>
              <li>W &gt; 0: Expansión (V<sub>f</sub> &gt; V<sub>i</sub>), el sistema realiza trabajo</li>
              <li>W &lt; 0: Compresión (V<sub>f</sub> &lt; V<sub>i</sub>), se realiza trabajo sobre el sistema</li>
            </ul>
          </Important>
        </Concept>

        <Concept title="Representación Gráfica">
          <p>
            En un diagrama P-V, un proceso isobárico se representa como una línea horizontal. El área bajo esta línea representa el trabajo realizado:
          </p>
          <p style={{textAlign: 'center', margin: '1em 0'}}>
            Área = P × ΔV = Trabajo
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Calor y Energía Interna">
        <Concept title="Calor Transferido">
          <p>
            El calor transferido en un proceso isobárico se calcula usando la capacidad calorífica a presión constante:
          </p>

          <Formula 
            expression={String.raw`Q = nC_p\Delta T`}
            description="Calor en proceso a presión constante"
            calculatorId="proceso_isobarico-grupo-1"
            definitions={proceso_isobaricoDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>Q: Calor transferido (J)</li>
            <li>n: Número de moles del gas (mol)</li>
            <li>C<sub>p</sub>: Capacidad calorífica a presión constante (J/(mol·K))</li>
            <li>ΔT: Cambio de temperatura = T<sub>f</sub> - T<sub>i</sub> (K)</li>
          </ul>
        </Concept>

        <Concept title="Cambio de Energía Interna">
          <p>
            El cambio de energía interna en un proceso isobárico:
          </p>

          <Formula 
            expression={String.raw`\Delta U = nC_v\Delta T`}
            description="Cambio de energía interna"
            calculatorId="proceso_isobarico-grupo-1"
            definitions={proceso_isobaricoDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>ΔU: Cambio de energía interna (J)</li>
            <li>n: Número de moles del gas (mol)</li>
            <li>C<sub>v</sub>: Capacidad calorífica a volumen constante (J/(mol·K))</li>
            <li>ΔT: Cambio de temperatura (K)</li>
          </ul>
        </Concept>

        <Concept title="Primera Ley de la Termodinámica">
          <p>
            Aplicando la primera ley (ΔU = Q - W) a un proceso isobárico:
          </p>
          <ul>
            <li>Q = ΔU + W: El calor se divide entre cambiar la energía interna y realizar trabajo</li>
            <li>C<sub>p</sub> = C<sub>v</sub> + R: Relación de Mayer</li>
            <li>Q = nC<sub>p</sub>ΔT: Calor total absorbido o cedido</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos Prácticos">
        <Example 
          title="Ejemplo 1: Expansión Isobárica"
          problem="Un gas a 200 kPa se expande de 0.5 m³ a 1.5 m³ a presión constante. Calcula el trabajo realizado."
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>P = 200 kPa = 200000 Pa</li>
                <li>V<sub>i</sub> = 0.5 m³</li>
                <li>V<sub>f</sub> = 1.5 m³</li>
              </ul>
              
              <p>Solución:</p>
              <p>W = P × (V<sub>f</sub> - V<sub>i</sub>)</p>
              <p>W = 200000 Pa × (1.5 - 0.5) m³</p>
              <p>W = 200000 × 1 = 200000 J = 200 kJ</p>
              
              <p>Resultado: W = 200 kJ (el gas realiza trabajo al expandirse)</p>
            </div>
          }
        />

        <Example 
          title="Ejemplo 2: Calentamiento Isobárico"
          problem="2 moles de gas ideal (C_p = 29.1 J/(mol·K)) se calientan de 300 K a 400 K a presión constante. Calcula Q, W y ΔU."
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>n = 2 mol</li>
                <li>C<sub>p</sub> = 29.1 J/(mol·K)</li>
                <li>T<sub>i</sub> = 300 K, T<sub>f</sub> = 400 K</li>
                <li>ΔT = 100 K</li>
                <li>R = 8.314 J/(mol·K)</li>
              </ul>
              
              <p>Solución:</p>
              <p>1. Calor: Q = nC<sub>p</sub>ΔT = 2 × 29.1 × 100 = 5820 J</p>
              <p>2. C<sub>v</sub> = C<sub>p</sub> - R = 29.1 - 8.314 = 20.786 J/(mol·K)</p>
              <p>3. ΔU = nC<sub>v</sub>ΔT = 2 × 20.786 × 100 = 4157.2 J</p>
              <p>4. W = Q - ΔU = 5820 - 4157.2 = 1662.8 J</p>
              
              <p>Resultados:</p>
              <ul>
                <li>Q = 5.82 kJ (calor absorbido)</li>
                <li>W = 1.66 kJ (trabajo realizado por el gas)</li>
                <li>ΔU = 4.16 kJ (aumento de energía interna)</li>
              </ul>
            </div>
          }
        />
      </TheorySection>

      <TheorySection title="Comparación con Otros Procesos">
        <Concept title="Procesos Termodinámicos Ideales">
          <table style={{width: '100%', borderCollapse: 'collapse', margin: '1em 0'}}>
            <thead>
              <tr style={{borderBottom: '2px solid #333'}}>
                <th style={{padding: '0.5em', textAlign: 'left'}}>Proceso</th>
                <th style={{padding: '0.5em', textAlign: 'left'}}>Constante</th>
                <th style={{padding: '0.5em', textAlign: 'left'}}>Trabajo</th>
                <th style={{padding: '0.5em', textAlign: 'left'}}>Calor</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.5em'}}>Isobárico</td>
                <td style={{padding: '0.5em'}}>P = cte</td>
                <td style={{padding: '0.5em'}}>W = PΔV</td>
                <td style={{padding: '0.5em'}}>Q = nC<sub>p</sub>ΔT</td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.5em'}}>Isocórico</td>
                <td style={{padding: '0.5em'}}>V = cte</td>
                <td style={{padding: '0.5em'}}>W = 0</td>
                <td style={{padding: '0.5em'}}>Q = nC<sub>v</sub>ΔT</td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.5em'}}>Isotérmico</td>
                <td style={{padding: '0.5em'}}>T = cte</td>
                <td style={{padding: '0.5em'}}>W = nRT ln(V<sub>f</sub>/V<sub>i</sub>)</td>
                <td style={{padding: '0.5em'}}>Q = W</td>
              </tr>
              <tr>
                <td style={{padding: '0.5em'}}>Adiabático</td>
                <td style={{padding: '0.5em'}}>Q = 0</td>
                <td style={{padding: '0.5em'}}>W = -ΔU</td>
                <td style={{padding: '0.5em'}}>Q = 0</td>
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
          <h3>🍲 Cocción de alimentos en ollas abiertas</h3>
          <p>
            Cuando cocinas agua o alimentos en una olla abierta, el proceso es isobárico a presión atmosférica (101.325 kPa). 
            Al calentar, el agua aumenta su temperatura y se evapora, expandiéndose a presión constante. El vapor que escapa 
            es resultado de esta expansión isobárica. Por eso el agua hierve a 100°C al nivel del mar: a esta temperatura, 
            la presión de vapor iguala la presión atmosférica, permitiendo ebullición isobárica continua.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎈 Globos aerostáticos</h3>
          <p>
            Los globos aerostáticos operan mediante expansión isobárica. Al calentar el aire interior con quemadores de propano, 
            el aire se expande a presión atmosférica constante (el globo está abierto en la parte inferior). Según la Ley de 
            Charles (V/T = constante a P constante), el volumen aumenta proporcionalmente a la temperatura. El aire caliente, 
            menos denso, genera flotación. Un globo típico requiere calentar 2800 m³ de aire de 15°C a 100°C para levantar 
            500 kg, siguiendo perfectamente un proceso isobárico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚂 Calderas de vapor</h3>
          <p>
            Las calderas industriales y de locomotoras generan vapor a presión constante. Agua líquida se convierte en vapor 
            a temperatura fija (por ejemplo, 100°C a 1 atm, 180°C a 10 atm) absorbiendo calor latente. Este proceso isobárico 
            requiere Q = nC_p ΔT más el calor de vaporización. Las calderas modernas operan a presiones de 100-200 bar, 
            produciendo vapor sobrecalentado en procesos isobáricos controlados. La primera ley aplicada a calderas 
            (Q = ΔU + W) determina la eficiencia térmica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 Ciclo Diesel</h3>
          <p>
            El motor diesel utiliza combustión isobárica como diferencia clave respecto al motor Otto. Después de comprimir 
            aire adiabáticamente hasta 30-50 bar, el combustible se inyecta y arde mientras el pistón desciende, manteniendo 
            presión constante. Este proceso isobárico permite extraer más trabajo que la combustión isocórica del Otto. 
            Rudolf Diesel diseñó este ciclo en 1893, logrando eficiencias del 30% cuando los motores de gasolina apenas 
            alcanzaban 20%. Los motores diesel modernos alcanzan 45% de eficiencia gracias a la combustión isobárica optimizada.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>☁️ Formación de nubes orográficas</h3>
          <p>
            Cuando el viento empuja aire húmedo contra una montaña, el aire asciende y se expande aproximadamente de forma 
            isobárica (la presión cambia gradualmente con la altura, pero localmente es casi constante). Al expandirse, 
            el aire se enfría según la Ley de Charles. Cuando alcanza el punto de rocío, el vapor de agua condensa formando 
            nubes orográficas que permanecen "estacionarias" en la ladera. Este proceso isobárico de expansión-enfriamiento 
            es responsable de las lluvias en regiones montañosas.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El descubrimiento de la presión constante
        </h2>
        
        <div className="theory-subsection">
          <h3>🎈 Jacques Charles y los globos (1787)</h3>
          <p>
            Jacques Charles, inventor de los globos de hidrógeno, descubrió experimentalmente la relación V/T = constante 
            a presión constante en 1787. Observó que al calentar aire en un globo abierto (presión atmosférica constante), 
            el volumen aumentaba proporcionalmente a la temperatura. Aunque realizó mediciones precisas, nunca publicó sus 
            resultados. Esta ley se conoce como "Ley de Charles" aunque él nunca la formalizó matemáticamente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Joseph Louis Gay-Lussac y la publicación oficial (1802)</h3>
          <p>
            Gay-Lussac publicó en 1802 la ley que relaciona volumen y temperatura a presión constante, atribuyendo el 
            descubrimiento a Charles. Sus experimentos fueron más sistemáticos: midió la expansión de gases desde 0°C hasta 
            100°C a presión atmosférica constante, determinando que todos los gases se expanden aproximadamente 1/273 de su 
            volumen por cada grado Celsius. Esto estableció las bases para el concepto de cero absoluto (-273°C).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚂 James Watt y la máquina de vapor (1769)</h3>
          <p>
            Aunque Watt no formalizó la termodinámica, su máquina de vapor mejorada operaba mediante procesos isobáricos. 
            Introdujo el condensador separado y el cilindro de doble efecto, donde el vapor se admitía y expandía a presión 
            prácticamente constante. Sus mejoras aumentaron la eficiencia del 1% de las máquinas de Newcomen al 4-5%, 
            iniciando la Revolución Industrial. El concepto de trabajo PΔV en procesos isobáricos fue fundamental para 
            estos avances.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ Rudolf Diesel y el motor de combustión (1893)</h3>
          <p>
            Diesel revolucionó los motores al introducir combustión isobárica en lugar de isocórica. Mientras Otto usaba 
            explosión instantánea a volumen constante, Diesel inyectaba combustible gradualmente, manteniendo presión constante 
            durante la expansión. Esta innovación permitió usar combustibles más baratos (aceites pesados) y alcanzar mayores 
            eficiencias. El primer motor diesel práctico (1897) logró 26% de eficiencia, récord mundial para la época, 
            demostrando la ventaja termodinámica de procesos isobáricos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌡️ Desarrollo de termómetros de gas (siglo XIX)</h3>
          <p>
            Durante el siglo XIX, físicos como Gay-Lussac y Regnault desarrollaron termómetros de gas a presión constante. 
            Estos instrumentos usaban la expansión isobárica del gas para medir temperatura con gran precisión. El termómetro 
            de gas a presión constante se convirtió en estándar primario de temperatura, estableciendo la escala absoluta. 
            William Thomson (Lord Kelvin) usó estos principios para definir la escala Kelvin en 1848, basándose en 
            procesos isobáricos ideales.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🎈 El primer vuelo en globo de los hermanos Montgolfier (1783)</h3>
          <p>
            Los hermanos Montgolfier realizaron el primer vuelo tripulado en globo aerostático el 21 de noviembre de 1783. 
            Aunque desconocían la teoría termodinámica (Gay-Lussac publicaría la ley 19 años después), aplicaban expansión 
            isobárica empíricamente. Calentaban aire con paja y lana húmeda, observando que el globo se inflaba a presión 
            constante. El vuelo duró 25 minutos y alcanzó 900 metros, inaugurando la aviación mediante un proceso isobárico 
            que aún hoy usamos en globos aerostáticos modernos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌋 La explosión del Monte Santa Helena (1980)</h3>
          <p>
            La erupción del Monte Santa Helena fue desencadenada por una expansión isobárica catastrófica. El magma calentó 
            agua subterránea, vaporizándola a presión geológica constante (inicialmente equilibrada por la roca). Cuando 
            un terremoto fracturó el flanco de la montaña, la presión se liberó súbitamente. El agua sobrecalentada se 
            expandió isobáricamente hacia la presión atmosférica, multiplicando su volumen 1000 veces en segundos. 
            Esta expansión explosiva liberó energía equivalente a 24 megatones de TNT, un proceso isobárico apocalíptico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>☕ El misterio del café que hierve diferente en altura</h3>
          <p>
            En La Paz, Bolivia (3600 m de altura), el agua hierve a 87°C en lugar de 100°C. Esto frustra a cocineros porque 
            los alimentos tardan más en cocerse. La razón es termodinámica: a menor presión atmosférica (65 kPa en La Paz vs 
            101 kPa al nivel del mar), la ebullición isobárica ocurre a menor temperatura. Los residentes usan ollas de presión 
            para restaurar condiciones de cocción "normales", elevando artificialmente la presión para que el agua hierva a 
            100°C nuevamente. Este fenómeno afecta incluso la preparación del café: el agua a 87°C extrae menos compuestos 
            aromáticos, alterando el sabor.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 El motor de Stirling de la NASA</h3>
          <p>
            La NASA desarrolló motores Stirling para misiones espaciales que operan con procesos isobáricos extremadamente 
            eficientes. A diferencia de motores convencionales, el Stirling usa expansión y compresión isobáricas en 
            diferentes cámaras, alcanzando eficiencias del 40%. En 1986, la NASA probó un motor Stirling que funcionó 
            continuamente durante 5 años sin mantenimiento. Este motor, que aplicaba procesos isobáricos con helio a alta 
            presión, demostró que la termodinámica bien aplicada puede crear máquinas extraordinariamente confiables.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎪 Las palomitas de maíz como explosión isobárica</h3>
          <p>
            Cada grano de maíz contiene agua (14% de su peso) encerrada en una cáscara dura. Al calentar, el agua se vaporiza 
            y presuriza el interior. Cuando la temperatura alcanza 180°C, la presión interna llega a 9 atm. La cáscara 
            finalmente se rompe, y el vapor se expande súbitamente hacia presión atmosférica (1 atm). Esta expansión isobárica 
            instantánea multiplica el volumen por 9, vaporizando el almidón húmedo del interior y creando la textura esponjosa. 
            El "pop" es la onda de choque de esta mini-explosión isobárica que ocurre en 9 milisegundos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏔️ Los buzos y la enfermedad de descompresión</h3>
          <p>
            Los buzos que ascienden demasiado rápido sufren "la enfermedad de descompresión" o "las burbujas". 
            Durante la inmersión, respiran aire comprimido que disuelve más nitrógeno en la sangre (según la presión). 
            Al ascender, la presión disminuye y el nitrógeno debe salir de la sangre. Si el ascenso es isobárico y gradual 
            (presión cambia lentamente), el nitrógeno se exhala normalmente. Pero si es rápido, el nitrógeno se expande 
            isobáricamente formando burbujas en tejidos y sangre, causando dolor intenso o muerte. Los buzos aprenden que 
            procesos isobáricos lentos son seguros; los rápidos, letales.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            Un proceso isobárico ocurre a presión constante (P = cte), típicamente en sistemas abiertos a la atmósfera 
            o con pistones móviles sin fricción.
          </li>
          <li>
            El volumen y temperatura están relacionados por la Ley de Charles: V/T = constante. Si la temperatura aumenta, 
            el volumen aumenta proporcionalmente.
          </li>
          <li>
            El trabajo realizado es W = PΔV, directamente proporcional al cambio de volumen. Es positivo en expansión 
            (el sistema realiza trabajo) y negativo en compresión.
          </li>
          <li>
            El calor transferido es Q = nC_p ΔT, usando la capacidad calorífica a presión constante. El cambio de energía 
            interna es ΔU = nC_v ΔT. La relación de Mayer establece que C_p = C_v + R.
          </li>
          <li>
            Aplicaciones prácticas: cocción en ollas abiertas, globos aerostáticos, calderas de vapor, ciclo Diesel, 
            formación de nubes, y cualquier proceso donde la presión se mantiene constante mediante contacto con un 
            reservorio de presión (atmósfera, pistón libre).
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProcesoIsobaricoTheory;
