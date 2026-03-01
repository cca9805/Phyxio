import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Principio de Arquímedes",
  descripcion: "Empuje y flotación en fluidos",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción al Principio de Arquímedes">
        <p>
          El Principio de Arquímedes, descubierto por el matemático griego Arquímedes de Siracusa en el 
          siglo III a.C., es uno de los principios fundamentales de la hidrostática. Este principio explica 
          por qué los barcos flotan, por qué sentimos más ligeros en el agua, y cómo funcionan los submarinos 
          y los globos aerostáticos. Es la base de la flotación y ha sido crucial para el desarrollo de la 
          navegación y la ingeniería naval.
        </p>
        <p>
          La leyenda cuenta que Arquímedes descubrió este principio mientras se bañaba, observando cómo el 
          agua se desbordaba de la tina cuando él entraba. Según la historia, salió corriendo desnudo por 
          las calles gritando "¡Eureka!" (lo encontré). Aunque la anécdota puede ser apócrifa, el principio 
          que descubrió es completamente real y revolucionó nuestra comprensión de los fluidos.
        </p>
      </TheorySection>

      <TheorySection title="Enunciado del Principio de Arquímedes">
        <Concept title="Formulación Clásica">
          <p>
            El Principio de Arquímedes establece que todo cuerpo sumergido total o parcialmente en un fluido 
            experimenta una fuerza vertical ascendente (empuje o fuerza de flotación) igual al peso del 
            volumen de fluido desalojado por el cuerpo.
          </p>
          
          <Important>
            <p>
              Matemáticamente: E = ρ_fluido × V_sumergido × g. El empuje siempre actúa verticalmente hacia 
              arriba, oponiéndose al peso del cuerpo. Esta fuerza es independiente de la profundidad a la 
              que se encuentre el objeto (siempre que esté completamente sumergido) y de la forma del objeto.
            </p>
          </Important>

          <p>
            El empuje tiene tres características fundamentales:
          </p>
          <ul>
            <li>Actúa siempre en dirección vertical hacia arriba</li>
            <li>Su magnitud es igual al peso del fluido desplazado</li>
            <li>Su punto de aplicación es el centro de flotación (centroide del volumen sumergido)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Fuerza de Empuje">
        <Concept title="Cálculo del Empuje">
          <p>
            El empuje que experimenta un cuerpo sumergido se calcula mediante la fórmula fundamental:
          </p>

          <Formula
            expression={String.raw`E = \rho_f \cdot V_s \cdot g`}
            calculatorId="arquimedes-empuje"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Volumen", expression: String.raw`V_s = \frac{E}{\rho_f g}` },
              { description: "Calcular Densidad", expression: String.raw`\rho_f = \frac{E}{V_s g}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>E: Empuje o fuerza de flotación (N)</li>
            <li>ρ_f: Densidad del fluido (kg/m³)</li>
            <li>V_s: Volumen sumergido del cuerpo (m³)</li>
            <li>g: Aceleración de la gravedad (9.81 m/s²)</li>
          </ul>

          <Example>
            <p>
              Un cubo de 0.1 m de lado (volumen 0.001 m³) sumergido completamente en agua (ρ = 1000 kg/m³) 
              experimenta un empuje de E = 1000 × 0.001 × 9.81 = 9.81 N, equivalente al peso de 1 kg.
            </p>
          </Example>
        </Concept>

        <Concept title="Origen Físico del Empuje">
          <p>
            El empuje surge de la diferencia de presión entre la parte superior e inferior del objeto sumergido. 
            La presión aumenta con la profundidad (P = ρgh), por lo que la presión en la parte inferior es 
            mayor que en la superior, generando una fuerza neta hacia arriba.
          </p>
          <p>
            Para un objeto de altura h y área de sección transversal A:
          </p>
          <ul>
            <li>Presión superior: P₁ = ρgh₁</li>
            <li>Presión inferior: P₂ = ρgh₂ (donde h₂ {'>'} h₁)</li>
            <li>Fuerza neta: E = (P₂ - P₁) × A = ρg(h₂ - h₁) × A = ρgV</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Peso Aparente">
        <Concept title="Reducción del Peso en Fluidos">
          <p>
            Cuando un cuerpo está sumergido, su peso aparente (el peso que medimos con una balanza sumergida) 
            es menor que su peso real debido al empuje:
          </p>

          <Formula
            expression={String.raw`P_{ap} = P - E`}
            calculatorId="arquimedes-peso-aparente"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Empuje", expression: String.raw`E = P - P_{ap}` },
              { description: "Calcular Peso Real", expression: String.raw`P = P_{ap} + E` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>P_ap: Peso aparente (N)</li>
            <li>P: Peso real del cuerpo (N)</li>
            <li>E: Empuje del fluido (N)</li>
          </ul>

          <Example>
            <p>
              Una persona de 70 kg (686 N) con volumen corporal de 0.07 m³ sumergida en agua experimenta 
              un empuje de 686 N (casi igual a su peso). Su peso aparente es prácticamente cero, por eso 
              flotamos fácilmente en agua.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Condiciones de Flotación">
        <Concept title="Flotación, Equilibrio y Hundimiento">
          <p>
            El comportamiento de un objeto en un fluido depende de la relación entre su peso y el empuje:
          </p>

          <p>Objeto flota (P {'<'} E):</p>
          <ul>
            <li>La densidad del objeto es menor que la del fluido: ρ_objeto {'<'} ρ_fluido</li>
            <li>El objeto se sumerge parcialmente hasta que E = P</li>
            <li>Ejemplo: Madera en agua, barcos, icebergs</li>
          </ul>

          <p>Equilibrio neutro (P = E):</p>
          <ul>
            <li>La densidad del objeto es igual a la del fluido: ρ_objeto = ρ_fluido</li>
            <li>El objeto permanece en cualquier posición sin subir ni bajar</li>
            <li>Ejemplo: Submarinos en inmersión, peces con vejiga natatoria</li>
          </ul>

          <p>Objeto se hunde (P {'>'} E):</p>
          <ul>
            <li>La densidad del objeto es mayor que la del fluido: ρ_objeto {'>'} ρ_fluido</li>
            <li>El objeto desciende hasta el fondo</li>
            <li>Ejemplo: Piedras en agua, anclas, monedas</li>
          </ul>

          <Important>
            <p>
              Para objetos flotantes, solo una fracción del volumen está sumergida. La fracción sumergida 
              es igual a la relación de densidades: V_sumergido/V_total = ρ_objeto/ρ_fluido. Por ejemplo, 
              el hielo (ρ = 917 kg/m³) flota con 91.7% de su volumen bajo el agua.
            </p>
          </Important>
        </Concept>

        <Concept title="Estabilidad de Flotación">
          <p>
            Un objeto flotante puede estar en equilibrio estable, inestable o neutro dependiendo de la 
            posición relativa del centro de gravedad (CG) y el centro de flotación (CF):
          </p>
          <ul>
            <li>Estable: CF por encima del CG. Si se inclina, tiende a volver a la posición original</li>
            <li>Inestable: CF por debajo del CG. Si se inclina, tiende a volcarse</li>
            <li>Neutro: CF y CG coinciden. Permanece en cualquier orientación</li>
          </ul>
          <p>
            Los barcos se diseñan con el CG bajo y el CF alto para máxima estabilidad. Los submarinos 
            ajustan su CG y CF para controlar la orientación.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones del Principio">
        <Concept title="Determinación de Densidades">
          <p>
            El Principio de Arquímedes permite determinar la densidad de objetos y fluidos:
          </p>
          <p>
            Densidad de un objeto: ρ_objeto = (P_aire / (P_aire - P_agua)) × ρ_agua
          </p>
          <p>
            Este método, llamado pesada hidrostática, es muy preciso y se usa en laboratorios para 
            determinar densidades de sólidos irregulares, gemas, metales y aleaciones.
          </p>
        </Concept>

        <Concept title="Flotación en Diferentes Fluidos">
          <p>
            El mismo objeto flota de manera diferente en fluidos de distintas densidades:
          </p>
          <ul>
            <li>Agua dulce (ρ = 1000 kg/m³): Flotación estándar</li>
            <li>Agua de mar (ρ = 1025 kg/m³): Flota más alto (2.5% más empuje)</li>
            <li>Mar Muerto (ρ = 1240 kg/m³): Flotación extrema (24% más empuje)</li>
            <li>Mercurio (ρ = 13,600 kg/m³): Casi todo flota</li>
          </ul>
          <p>
            Los barcos flotan más alto en agua salada que en agua dulce. Las líneas de Plimsoll en los 
            cascos marcan los niveles de flotación seguros en diferentes condiciones.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Principio de Arquímedes en Gases">
        <Concept title="Flotación en Aire">
          <p>
            El Principio de Arquímedes también se aplica a gases. Un objeto en aire experimenta empuje 
            igual al peso del aire desplazado:
          </p>
          <p>
            E_aire = ρ_aire × V × g ≈ 1.2 × V × 9.81 (en kg/m³, m³, m/s²)
          </p>
          <p>
            Aunque el empuje del aire es pequeño (ρ_aire ≈ 1.2 kg/m³), es significativo para objetos 
            grandes y ligeros:
          </p>
          <ul>
            <li>Globos aerostáticos: Usan aire caliente (menos denso) o helio para flotar</li>
            <li>Dirigibles: Llenos de helio (ρ = 0.18 kg/m³) flotan en aire</li>
            <li>Corrección en balanzas de precisión: Objetos muy ligeros requieren corrección por empuje del aire</li>
          </ul>

          <Example>
            <p>
              Un globo de helio de 1 m³ desplaza 1.2 kg de aire (11.8 N) pero el helio dentro pesa solo 
              0.18 kg (1.8 N). El empuje neto es 10 N hacia arriba, suficiente para levantar 1 kg adicional.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>

        <div className="theory-subsection">
          <h3>Navegación y Transporte Marítimo</h3>
          <p>
            Los barcos son la aplicación más evidente del Principio de Arquímedes. Un barco de acero 
            (ρ = 7850 kg/m³) flota porque su forma hueca desplaza un volumen de agua cuyo peso es mayor 
            que el peso del barco. Los ingenieros navales diseñan cascos para maximizar el volumen 
            desplazado mientras minimizan el peso estructural.
          </p>
          <ul>
            <li>Portaaviones: Desplazan hasta 100,000 toneladas de agua</li>
            <li>Petroleros: Ajustan lastre para mantener estabilidad con diferentes cargas</li>
            <li>Líneas de Plimsoll: Marcan niveles de carga seguros en diferentes aguas</li>
            <li>Diques secos: Usan el principio para elevar barcos fuera del agua</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Submarinos y Vehículos Sumergibles</h3>
          <p>
            Los submarinos controlan su flotabilidad ajustando su peso mediante tanques de lastre. 
            Para sumergirse, llenan los tanques con agua de mar, aumentando su peso hasta que P {'>'} E. 
            Para emerger, expulsan el agua con aire comprimido, reduciendo el peso hasta que P {'<'} E. 
            Para mantener profundidad constante, ajustan hasta lograr P = E (flotabilidad neutra).
          </p>
          <ul>
            <li>Submarinos militares: Operan a profundidades de hasta 600 m</li>
            <li>Batiscafos: Han descendido hasta 10,916 m (Fosa de las Marianas)</li>
            <li>ROVs (vehículos operados remotamente): Usan flotadores ajustables</li>
            <li>Trajes de buceo: Chalecos compensadores controlan flotabilidad del buceador</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Aerostación y Vuelo</h3>
          <p>
            Los globos aerostáticos y dirigibles aplican el Principio de Arquímedes en aire. Un globo 
            de aire caliente flota porque el aire caliente (menos denso) dentro del globo pesa menos 
            que el aire frío desplazado. Los dirigibles modernos usan helio (ρ = 0.18 kg/m³) en lugar 
            de hidrógeno por seguridad.
          </p>
          <ul>
            <li>Globos meteorológicos: Ascienden hasta 40 km de altitud</li>
            <li>Dirigibles publicitarios: Transportan cámaras y anuncios</li>
            <li>Globos estratosféricos: Llevan instrumentos científicos</li>
            <li>Proyectos de internet: Google Loon usaba globos para conectividad</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Medición de Densidades</h3>
          <p>
            La pesada hidrostática (método de Arquímedes) es el estándar para medir densidades con 
            alta precisión. Se pesa el objeto en aire y sumergido en un fluido de densidad conocida, 
            y se calcula la densidad del objeto a partir de la diferencia de pesos.
          </p>
          <ul>
            <li>Gemología: Identificación de piedras preciosas por densidad</li>
            <li>Control de calidad: Verificación de pureza de metales y aleaciones</li>
            <li>Arqueología: Datación y autenticación de objetos antiguos</li>
            <li>Industria alimentaria: Medición de densidad de líquidos (leche, aceites)</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Hidrómetros y Densímetros</h3>
          <p>
            Los hidrómetros son instrumentos flotantes calibrados que miden la densidad de líquidos. 
            Se sumergen parcialmente en el líquido y la profundidad de inmersión indica la densidad. 
            Cuanto más denso el líquido, menos se sumerge el hidrómetro.
          </p>
          <ul>
            <li>Baterías de automóvil: Miden concentración de ácido sulfúrico</li>
            <li>Cervecería: Controlan densidad del mosto durante fermentación</li>
            <li>Acuarios: Miden salinidad del agua marina</li>
            <li>Anticongelante: Verifican concentración de etilenglicol</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Deportes Acuáticos y Recreación</h3>
          <p>
            El Principio de Arquímedes es fundamental en deportes y actividades acuáticas. Los 
            chalecos salvavidas aumentan el volumen del cuerpo sin aumentar significativamente el 
            peso, incrementando el empuje. Las tablas de surf y kayaks están diseñadas para 
            desplazar suficiente agua para soportar el peso del deportista.
          </p>
          <ul>
            <li>Natación: Flotadores y manguitos para aprendizaje</li>
            <li>Buceo: Chalecos BCD (Buoyancy Control Device) para control de profundidad</li>
            <li>Surf: Tablas con volumen calculado según peso del surfista</li>
            <li>Kayak: Diseño del casco para estabilidad y flotabilidad</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Ingeniería y Construcción</h3>
          <p>
            En construcción, el Principio de Arquímedes se aplica en cimentaciones flotantes, 
            plataformas petrolíferas y estructuras marinas. Las plataformas semisumergibles usan 
            flotabilidad controlada para mantenerse estables en aguas profundas.
          </p>
          <ul>
            <li>Plataformas petrolíferas: Flotación ajustable para estabilidad</li>
            <li>Puentes flotantes: Soportados por pontones sumergidos</li>
            <li>Diques y compuertas: Control de nivel de agua</li>
            <li>Túneles sumergidos: Secciones prefabricadas flotadas y hundidas</li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El descubrimiento de Arquímedes
        </h2>

        <div className="theory-subsection">
          <h3>Arquímedes de Siracusa (287-212 a.C.)</h3>
          <p>
            Arquímedes fue uno de los matemáticos, físicos e ingenieros más brillantes de la antigüedad. 
            Nacido en Siracusa (Sicilia), estudió en Alejandría y regresó a su ciudad natal donde realizó 
            sus descubrimientos más importantes. Además del principio de flotación, desarrolló la ley de 
            la palanca, calculó π con gran precisión, e inventó máquinas de guerra que defendieron Siracusa 
            durante años.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Corona del Rey Hierón II</h3>
          <p>
            Según la leyenda narrada por el arquitecto romano Vitruvio, el rey Hierón II de Siracusa 
            encargó una corona de oro puro. Sospechando que el orfebre había mezclado plata con el oro, 
            pidió a Arquímedes que determinara si la corona era de oro puro sin dañarla. Este problema 
            aparentemente imposible llevó a Arquímedes a su famoso descubrimiento.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Momento Eureka</h3>
          <p>
            La historia cuenta que Arquímedes estaba reflexionando sobre el problema mientras se bañaba 
            en las termas públicas. Al entrar en la tina, notó que el agua se desbordaba y que su cuerpo 
            parecía más ligero. En ese momento comprendió que el volumen de agua desplazada era igual al 
            volumen de su cuerpo sumergido, y que podía usar este principio para resolver el problema de 
            la corona.
          </p>
          <p>
            Según Vitruvio, Arquímedes estaba tan emocionado que salió corriendo desnudo por las calles 
            de Siracusa gritando "¡Eureka! ¡Eureka!" (¡Lo encontré! ¡Lo encontré!). Aunque esta anécdota 
            puede ser apócrifa, ilustra la importancia del descubrimiento.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Solución del Problema</h3>
          <p>
            Arquímedes sumergió la corona en agua y midió el volumen desplazado. Luego hizo lo mismo con 
            una masa de oro puro del mismo peso que la corona. Si la corona fuera de oro puro, ambos 
            volúmenes deberían ser iguales. Si la corona contenía plata (menos densa que el oro), 
            desplazaría más agua. El resultado demostró que el orfebre había engañado al rey.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Tratado "Sobre los Cuerpos Flotantes"</h3>
          <p>
            Arquímedes formalizó su descubrimiento en su tratado "Sobre los Cuerpos Flotantes" (Περὶ τῶν 
            ὀχουμένων), escrito alrededor del 250 a.C. Este trabajo, dividido en dos libros, es el primer 
            tratado conocido de hidrostática. En él, Arquímedes demuestra matemáticamente el principio de 
            flotación y analiza la estabilidad de cuerpos flotantes, incluyendo paraboloides de revolución.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Muerte de Arquímedes</h3>
          <p>
            Arquímedes murió en el 212 a.C. durante el asedio romano de Siracusa. Según la leyenda, 
            estaba tan absorto resolviendo un problema geométrico dibujado en la arena que no prestó 
            atención a las órdenes de un soldado romano, quien lo mató. Sus últimas palabras habrían 
            sido "No molestes mis círculos" (Noli turbare circulos meos). El general romano Marcelo, 
            quien admiraba a Arquímedes, lamentó profundamente su muerte.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Legado e Influencia</h3>
          <p>
            El Principio de Arquímedes ha sido fundamental para el desarrollo de la navegación, la 
            ingeniería naval y la hidrostática. Durante siglos, fue la base teórica para el diseño de 
            barcos. En el Renacimiento, científicos como Galileo y Stevin ampliaron el trabajo de 
            Arquímedes. Hoy, el principio sigue siendo esencial en ingeniería, oceanografía y física.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>El Iceberg del Titanic</h3>
          <p>
            El iceberg que hundió al Titanic en 1912 flotaba con aproximadamente el 90% de su masa bajo 
            el agua, siguiendo el Principio de Arquímedes. El hielo tiene una densidad de 917 kg/m³ 
            (91.7% de la densidad del agua de mar), por lo que solo el 8-10% del iceberg era visible. 
            Esta característica hace que los icebergs sean extremadamente peligrosos para la navegación, 
            ya que su tamaño real es mucho mayor de lo que aparenta.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Mar Muerto: Flotación Extrema</h3>
          <p>
            El Mar Muerto tiene una salinidad del 34% (10 veces más que el océano), lo que le da una 
            densidad de 1240 kg/m³. Esta alta densidad genera un empuje tan grande que es prácticamente 
            imposible hundirse. Las personas flotan sin esfuerzo, pudiendo leer un periódico mientras 
            están en el agua. Sin embargo, esta misma salinidad hace que sea muy doloroso si el agua 
            entra en los ojos o heridas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Los Peces y la Vejiga Natatoria</h3>
          <p>
            Los peces óseos tienen un órgano llamado vejiga natatoria que les permite controlar su 
            flotabilidad sin gastar energía nadando. Ajustando la cantidad de gas en la vejiga, pueden 
            cambiar su volumen y por tanto el empuje que reciben, logrando flotabilidad neutra a 
            cualquier profundidad. Los tiburones, que no tienen vejiga natatoria, deben nadar 
            constantemente para no hundirse.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Peso de los Astronautas en Agua</h3>
          <p>
            La NASA entrena a los astronautas en piscinas gigantes (como el Neutral Buoyancy Laboratory 
            de 12 millones de galones) donde simulan la ingravidez del espacio. Ajustando cuidadosamente 
            el lastre de los trajes espaciales, logran que el peso aparente sea cero (P = E), creando 
            una experiencia similar a la flotación en el espacio. Cada sesión de entrenamiento puede 
            durar hasta 7 horas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Principio de Arquímedes en Marte</h3>
          <p>
            Si pudiéramos llevar agua líquida a Marte, el Principio de Arquímedes funcionaría igual, 
            pero con una diferencia crucial: la gravedad marciana es solo el 38% de la terrestre 
            (g = 3.71 m/s²). Esto significa que el empuje sería menor, y objetos que flotan en la 
            Tierra podrían hundirse en Marte, y viceversa. Un barco necesitaría desplazar 2.6 veces 
            más volumen para soportar la misma carga.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Récord de Profundidad Humana</h3>
          <p>
            En 1960, Jacques Piccard y Don Walsh descendieron 10,916 metros en el batiscafo Trieste 
            hasta el punto más profundo del océano (Fosa de las Marianas). Para soportar la presión 
            de 1100 atmósferas, el batiscafo usaba una esfera de acero de 12.7 cm de espesor. Para 
            descender, llenaban tanques con perdigones de hierro (aumentando peso), y para ascender, 
            liberaban los perdigones (reduciendo peso), aplicando el Principio de Arquímedes.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Barcos de Hormigón</h3>
          <p>
            Durante las guerras mundiales, cuando el acero escaseaba, se construyeron barcos de hormigón 
            armado. Aunque el hormigón es más denso que el agua (ρ ≈ 2400 kg/m³), estos barcos flotaban 
            perfectamente gracias a su forma hueca que desplazaba suficiente agua. Algunos de estos 
            barcos todavía existen y se usan como rompeolas o arrecifes artificiales. El principio 
            demuestra que no importa el material, sino el volumen desplazado.
          </p>
        </div>
      </div>

      <div className="theory-section-highlight">
        <h2>📝 Resumen</h2>
        <p>
          El Principio de Arquímedes establece que todo cuerpo sumergido en un fluido experimenta un 
          empuje vertical ascendente igual al peso del fluido desplazado (E = ρ_fluido × V_sumergido × g). 
          Este empuje surge de la diferencia de presión entre la parte superior e inferior del objeto.
        </p>
        <p>
          El comportamiento de un objeto en un fluido depende de la relación entre su peso y el empuje: 
          flota si P {'<'} E (ρ_objeto {'<'} ρ_fluido), se hunde si P {'>'} E (ρ_objeto {'>'} ρ_fluido), 
          y permanece en equilibrio si P = E (ρ_objeto = ρ_fluido). El peso aparente de un objeto 
          sumergido es P_ap = P - E, siempre menor que su peso real.
        </p>
        <p>
          Las aplicaciones del principio son innumerables: desde la navegación marítima y los submarinos 
          hasta los globos aerostáticos y la medición de densidades. El principio funciona en cualquier 
          fluido (líquidos y gases) y es fundamental para la ingeniería naval, la aerostación, el buceo 
          y muchas tecnologías modernas.
        </p>
        <p>
          Descubierto por Arquímedes de Siracusa en el siglo III a.C., este principio ha sido la base 
          de la hidrostática durante más de 2000 años y sigue siendo esencial para comprender el 
          comportamiento de los cuerpos en fluidos.
        </p>
      </div>
    </>
  );
};

export default Theory;
