import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as flotabilidadDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Flotabilidad y Estabilidad",
  descripcion: "Principio de Arquímedes y estabilidad de cuerpos flotantes",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Principio de Arquímedes">
        <p>
          El Principio de Arquímedes establece que todo cuerpo sumergido en un fluido experimenta 
          una fuerza vertical hacia arriba (empuje) igual al peso del fluido desplazado. Este principio 
          fundamental de la hidrostática explica por qué los objetos flotan o se hunden en los fluidos.
        </p>

        <Important>
          "Todo cuerpo sumergido en un fluido recibe un empuje de abajo hacia arriba igual 
          al peso del volumen de fluido desplazado"
        </Important>

        <Concept title="Empuje o Fuerza de Flotación">
          <p>
            El empuje es la fuerza resultante de las presiones que el fluido ejerce sobre todas las 
            superficies del cuerpo sumergido. Como la presión aumenta con la profundidad, la presión 
            en la parte inferior del objeto es mayor que en la superior, generando una fuerza neta 
            hacia arriba.
          </p>
          
          <Formula
            expression={String.raw`E = \rho_{fluido} \cdot g \cdot V_{sumergido}`}
            description="Empuje sobre un cuerpo sumergido"
            calculatorId="principio-arquimedes"
            definitions={flotabilidadDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>E: Empuje o fuerza de flotación (N)</li>
            <li>ρ_fluido: Densidad del fluido (kg/m³)</li>
            <li>g: Aceleración gravitacional (9.81 m/s²)</li>
            <li>V_sumergido: Volumen del cuerpo sumergido (m³)</li>
          </ul>

          <p>Características del empuje:</p>
          <ul>
            <li>Actúa verticalmente hacia arriba</li>
            <li>Se aplica en el centro de flotación (centroide del volumen sumergido)</li>
            <li>Es independiente de la profundidad (solo depende del volumen)</li>
            <li>Es independiente de la densidad del objeto</li>
            <li>Es proporcional a la densidad del fluido</li>
          </ul>

          <Example>
            <p>
              Un cubo de 1 m³ sumergido en agua experimenta un empuje de E = 1000 × 9.81 × 1 = 9810 N 
              (aproximadamente 1 tonelada de fuerza). El mismo cubo en mercurio experimentaría un empuje 
              de 133,416 N, más de 13 veces mayor debido a la mayor densidad del mercurio.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Condiciones de Flotación">
        <Concept title="Equilibrio de Fuerzas">
          <p>
            Para que un cuerpo flote en equilibrio estático, el empuje debe igualar exactamente al peso 
            del objeto. Esta condición determina qué fracción del volumen quedará sumergida y si el 
            objeto flotará, se hundirá o permanecerá en equilibrio neutro.
          </p>

          <Formula
            expression={String.raw`E = W \quad \Rightarrow \quad \rho_{fluido} \cdot V_{sumergido} = \rho_{objeto} \cdot V_{total}`}
            description="Condición de flotación en equilibrio"
            calculatorId="condicion-flotacion"
            definitions={flotabilidadDefinitions}
            exercises={exercises}
          />

          <p>Tres casos posibles:</p>
          <ul>
            <li>E {'>'} W: El cuerpo asciende (ρ_objeto {'<'} ρ_fluido)</li>
            <li>E = W: El cuerpo flota en equilibrio</li>
            <li>E {'<'} W: El cuerpo se hunde (ρ_objeto {'>'} ρ_fluido)</li>
          </ul>

          <Important>
            <p>
              Un objeto flotará si su densidad promedio es menor que la del fluido. Por eso los barcos 
              de acero flotan: aunque el acero es más denso que el agua, el barco contiene mucho aire, 
              haciendo que su densidad promedio sea menor que la del agua.
            </p>
          </Important>
        </Concept>

        <Concept title="Fracción Sumergida">
          <p>
            La fracción del volumen que queda sumergida cuando un objeto flota en equilibrio depende 
            únicamente de la relación entre las densidades del objeto y del fluido. Esta relación es 
            independiente del tamaño o forma del objeto.
          </p>

          <Formula
            expression={String.raw`\frac{V_{sumergido}}{V_{total}} = \frac{\rho_{objeto}}{\rho_{fluido}}`}
            description="Fracción del volumen sumergido"
            isPrimary={false}
          />

          <p>Ejemplos comunes:</p>
          <ul>
            <li>Hielo en agua: 917/1000 = 91.7% sumergido (solo 8.3% visible)</li>
            <li>Madera (ρ=600): 600/1000 = 60% sumergido</li>
            <li>Corcho (ρ=240): 240/1000 = 24% sumergido</li>
            <li>Aceite en agua (ρ=850): 85% sumergido</li>
          </ul>

          <Example>
            <p>
              Los icebergs son famosos por tener solo el 10% de su volumen visible sobre el agua. 
              Esto se debe a que el hielo tiene una densidad de 917 kg/m³ y el agua de mar 1025 kg/m³, 
              resultando en 89.5% sumergido. Esta característica los hace especialmente peligrosos para 
              la navegación, como demostró trágicamente el hundimiento del Titanic.
            </p>
          </Example>
        </Concept>

        <Concept title="Peso Aparente">
          <p>
            Cuando un objeto está completamente sumergido en un fluido, su peso aparente es la diferencia 
            entre su peso real y el empuje. Esta reducción del peso es la razón por la que los objetos 
            parecen más ligeros bajo el agua.
          </p>
          
          <Formula
            expression={String.raw`W_{aparente} = W - E`}
            description="Peso aparente de un objeto sumergido"
            calculatorId="peso-aparente"
            definitions={flotabilidadDefinitions}
            exercises={exercises}
          />

          <p>
            El peso aparente es la fuerza neta que se siente al sostener un objeto sumergido. Es menor 
            que el peso real debido al empuje. Los buceadores experimentan esto constantemente: objetos 
            pesados en tierra se vuelven manejables bajo el agua.
          </p>

          <Example>
            <p>
              Una roca de granito (ρ = 2700 kg/m³) de 100 kg tiene un peso real de 981 N. Sumergida en 
              agua, desplaza 0.037 m³ y experimenta un empuje de 363 N. Su peso aparente es solo 618 N, 
              una reducción del 37%. Esto explica por qué los buzos pueden mover rocas grandes bajo el agua.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Estabilidad de Cuerpos Flotantes">
        <p>
          La estabilidad de un cuerpo flotante determina si regresará a su posición original después 
          de una pequeña perturbación. Este concepto es crucial en el diseño naval, donde la estabilidad 
          puede significar la diferencia entre un barco seguro y uno que se vuelca fácilmente.
        </p>

        <Concept title="Centros Importantes">
          <p>Tres puntos clave definen la estabilidad:</p>
          <ul>
            <li>G (Centro de Gravedad): Punto donde actúa el peso del cuerpo. Depende de la distribución de masa.</li>
            <li>B (Centro de Flotación): Centroide del volumen sumergido, donde actúa el empuje. Cambia cuando el cuerpo se inclina.</li>
            <li>M (Metacentro): Punto de intersección de la línea de acción del empuje cuando el cuerpo se inclina ligeramente. Su posición relativa a G determina la estabilidad.</li>
          </ul>

          <Important>
            <p>
              La posición relativa de estos tres puntos determina completamente la estabilidad del cuerpo 
              flotante. Si M está por encima de G, el cuerpo es estable. Si M está por debajo de G, el 
              cuerpo es inestable y tenderá a volcarse.
            </p>
          </Important>
        </Concept>

        <Concept title="Altura Metacéntrica">
          <p>
            La altura metacéntrica (GM) es la distancia vertical entre el centro de gravedad (G) y el 
            metacentro (M). Es el parámetro más importante para evaluar la estabilidad de un cuerpo flotante.
          </p>
          
          <Formula
            expression={String.raw`GM = \frac{I}{V_{sumergido}} - BG`}
            description="Altura metacéntrica (criterio de estabilidad)"
            calculatorId="estabilidad-metacentrica"
            definitions={flotabilidadDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>GM: Altura metacéntrica (m)</li>
            <li>I: Momento de inercia del área de flotación respecto al eje de inclinación (m⁴)</li>
            <li>V_sumergido: Volumen sumergido (m³)</li>
            <li>BG: Distancia vertical entre B y G (m, positiva si G está arriba de B)</li>
          </ul>

          <p>Criterio de estabilidad:</p>
          <ul>
            <li>GM {'>'} 0: Estable (M por encima de G) - El cuerpo regresa a su posición original</li>
            <li>GM = 0: Indiferente (M coincide con G) - El cuerpo permanece en cualquier posición</li>
            <li>GM {'<'} 0: Inestable (M por debajo de G) - El cuerpo se vuelca</li>
          </ul>

          <Example>
            <p>
              Los barcos típicamente tienen GM entre 0.5 y 2 metros. Un GM muy grande hace al barco muy 
              estable pero incómodo (movimientos bruscos). Un GM pequeño hace al barco más confortable 
              pero menos seguro. Los diseñadores navales deben encontrar el equilibrio óptimo.
            </p>
          </Example>
        </Concept>

        <Concept title="Momento de Restauración">
          <p>
            Cuando un cuerpo flotante se inclina un ángulo θ respecto a la vertical, aparece un momento 
            restaurador que tiende a devolverlo a su posición original (si es estable) o a volcarlo 
            (si es inestable).
          </p>

          <Formula
            expression={String.raw`M_{restaurador} = W \times GM \times \sin(\theta)`}
            description="Momento restaurador"
            isPrimary={false}
          />

          <p>
            Si GM {'>'} 0, el momento tiende a devolver el cuerpo a su posición vertical (estable). 
            Cuanto mayor sea GM, mayor será el momento restaurador y más rápido regresará el cuerpo 
            a su posición original. Sin embargo, un GM muy grande puede causar movimientos bruscos 
            e incómodos.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Densidad Relativa y Flotación">
        <Concept title="Gravedad Específica">
          <p>
            La densidad relativa o gravedad específica (SG) es la relación entre la densidad de una 
            sustancia y la densidad del agua. Es un número adimensional que indica inmediatamente si 
            una sustancia flotará en agua.
          </p>

          <Formula
            expression={String.raw`SG = \frac{\rho_{sustancia}}{\rho_{agua}}`}
            description="Gravedad específica"
            calculatorId="densidad-relativa"
            definitions={flotabilidadDefinitions}
            exercises={exercises}
          />

          <p>Interpretación:</p>
          <ul>
            <li>SG {'<'} 1: La sustancia flota en agua (menos densa que el agua)</li>
            <li>SG = 1: La sustancia tiene flotabilidad neutra en agua</li>
            <li>SG {'>'} 1: La sustancia se hunde en agua (más densa que el agua)</li>
          </ul>

          <Example>
            <p>
              El corcho tiene SG ≈ 0.24, por lo que flota con solo el 24% sumergido. El plomo tiene 
              SG ≈ 11.3, por lo que se hunde rápidamente. El aceite de oliva tiene SG ≈ 0.92, por lo 
              que flota en agua pero se hunde en alcohol (SG ≈ 0.79).
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Capacidad de Carga">
        <Concept title="Carga Máxima de Flotación">
          <p>
            La capacidad de carga de un objeto flotante es la masa adicional que puede soportar antes 
            de hundirse completamente. Este concepto es fundamental en el diseño de barcos, balsas y 
            cualquier estructura flotante.
          </p>

          <Formula
            expression={String.raw`m_{carga} = \rho_{fluido} \cdot V_{total} - m_{objeto}`}
            description="Carga máxima de flotación"
            calculatorId="carga-maxima"
            definitions={flotabilidadDefinitions}
            exercises={exercises}
          />

          <p>
            La masa máxima total que puede soportar el objeto es igual a la masa del fluido que 
            desplazaría si estuviera completamente sumergido. La carga útil es esta masa máxima menos 
            la masa del propio objeto.
          </p>

          <Example>
            <p>
              Un bote de 500 kg con un volumen de 2 m³ puede desplazar un máximo de 2000 kg de agua. 
              Por lo tanto, puede transportar hasta 1500 kg de carga antes de hundirse. Si se sobrecarga, 
              el bote se hundirá progresivamente hasta que el empuje iguale al peso total.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Volumen Desplazado">
        <Concept title="Desplazamiento en Diseño Naval">
          <p>
            En ingeniería naval, el "desplazamiento" se refiere al peso del agua desplazada por un barco, 
            que por el principio de Arquímedes es igual al peso total del barco. El volumen desplazado 
            se puede calcular conociendo el peso del objeto.
          </p>

          <Formula
            expression={String.raw`V_{desplazado} = \frac{W}{\rho_{fluido} \cdot g}`}
            description="Volumen desplazado desde peso"
            calculatorId="volumen-desplazado"
            definitions={flotabilidadDefinitions}
            exercises={exercises}
          />

          <p>
            Este cálculo es esencial para determinar el calado (profundidad sumergida) de un barco y 
            para verificar que no exceda los límites de diseño. Los barcos tienen marcas de calado en 
            el casco que indican cuánto peso están transportando.
          </p>

          <Example>
            <p>
              Un portaaviones nuclear de 100,000 toneladas (980 MN) desplaza aproximadamente 100,000 m³ 
              de agua de mar. Esto significa que el casco del portaaviones ocupa un volumen de 100,000 m³ 
              bajo la línea de flotación, equivalente a un cubo de 46 metros de lado.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>Diseño y Construcción Naval</h3>
          <p>
            El principio de Arquímedes es fundamental en el diseño de barcos. Los ingenieros navales 
            calculan el desplazamiento (peso del agua desplazada) para determinar la capacidad de carga. 
            El calado (profundidad sumergida) indica cuánto peso transporta el barco. La línea de flotación 
            marca el nivel del agua en el casco. Los barcos modernos tienen GM entre 0.5-2 m para equilibrar 
            estabilidad y confort. Los portaaviones, con GM de 2-3 m, son muy estables pero tienen movimientos 
            bruscos en mares agitados.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Submarinos y Vehículos Submarinos</h3>
          <p>
            Los submarinos controlan su flotabilidad mediante tanques de lastre. En superficie, los tanques 
            están vacíos de agua, haciendo que la densidad promedio sea menor que el agua. Para sumergirse, 
            llenan los tanques con agua hasta que la densidad promedio iguala la del agua (flotabilidad neutra). 
            Para emerger, expulsan el agua con aire comprimido. Los submarinos nucleares pueden permanecer 
            sumergidos meses ajustando continuamente su flotabilidad. Los ROVs (vehículos operados remotamente) 
            usan el mismo principio para explorar las profundidades oceánicas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Globos Aerostáticos y Dirigibles</h3>
          <p>
            Los globos de aire caliente funcionan porque el aire caliente (ρ ≈ 0.95 kg/m³ a 100°C) es menos 
            denso que el aire frío (ρ ≈ 1.2 kg/m³). Un globo de 2000 m³ puede generar 5000 N de empuje neto. 
            Los globos de helio (ρ = 0.18 kg/m³) son más eficientes y no requieren calentamiento continuo. 
            El dirigible Hindenburg usaba hidrógeno (ρ = 0.09 kg/m³), el gas más ligero, pero su inflamabilidad 
            causó el desastre de 1937. Los dirigibles modernos usan helio por seguridad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Plataformas Petroleras Flotantes</h3>
          <p>
            Las plataformas semisumergibles flotan en aguas de hasta 3000 m de profundidad. Tienen grandes 
            pontones sumergidos que proporcionan estabilidad mediante alta altura metacéntrica. Durante 
            tormentas, pueden lastrar los pontones para sumergirse más y reducir el efecto de las olas. 
            Las plataformas SPAR tienen un cilindro vertical lastrado que se extiende 200 m bajo el agua, 
            proporcionando estabilidad excepcional. El desplazamiento de estas estructuras puede superar 
            las 100,000 toneladas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Salvavidas y Equipos de Flotación</h3>
          <p>
            Los chalecos salvavidas están diseñados para proporcionar al menos 7.5 kg de empuje adicional, 
            suficiente para mantener la cabeza fuera del agua. Los chalecos inflables usan CO₂ comprimido 
            para inflarse instantáneamente. Las balsas salvavidas tienen múltiples cámaras de aire para 
            redundancia. Los trajes de supervivencia en agua fría incluyen flotación integrada y aislamiento. 
            Los equipos de buceo usan chalecos de control de flotabilidad (BCD) que permiten ajustar la 
            flotabilidad inflando o desinflando con aire del tanque.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Boyas y Señalización Marítima</h3>
          <p>
            Las boyas de navegación deben permanecer estables en condiciones adversas. Las boyas de campana 
            tienen un centro de gravedad bajo y alta altura metacéntrica para resistir volcamiento. Las boyas 
            de datos oceanográficos flotan parcialmente sumergidas y transmiten información sobre corrientes, 
            temperatura y salinidad. Las boyas de amarre para barcos deben soportar grandes fuerzas sin hundirse. 
            El diseño considera el peso de las cadenas y la carga dinámica del oleaje.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Deportes Acuáticos y Recreación</h3>
          <p>
            Las tablas de surf tienen volumen calculado según el peso del surfista para proporcionar flotabilidad 
            adecuada. Las tablas de paddle tienen mayor volumen para estabilidad al estar de pie. Los kayaks 
            tienen compartimentos estancos que mantienen flotabilidad incluso si se llenan de agua. Las motos 
            acuáticas usan espuma de flotación que no puede comprimirse. Los trajes de neopreno proporcionan 
            flotabilidad adicional además de aislamiento térmico. La natación sincronizada aprovecha el control 
            preciso de flotabilidad mediante posición corporal y movimientos.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De Arquímedes a la Ingeniería Naval Moderna
        </h2>
        
        <div className="theory-subsection">
          <h3>Arquímedes y el Descubrimiento (287-212 a.C.)</h3>
          <p>
            Según la leyenda, Arquímedes descubrió su famoso principio mientras se bañaba. Al notar que el 
            agua se desbordaba cuando entraba en la bañera, comprendió que el volumen de agua desplazada era 
            igual al volumen de su cuerpo sumergido. Emocionado por el descubrimiento, corrió desnudo por las 
            calles de Siracusa gritando "¡Eureka!" (lo encontré). Este momento representa uno de los primeros 
            ejemplos documentados del método científico: observación, comprensión y aplicación.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Corona del Rey Hierón II</h3>
          <p>
            El rey Hierón II de Siracusa encargó a Arquímedes verificar si una corona era de oro puro o si 
            el orfebre había mezclado plata. Arquímedes no podía fundir la corona, así que usó su principio: 
            sumergió la corona y una masa igual de oro puro en agua, midiendo el volumen desplazado por cada 
            una. La corona desplazó más agua que el oro puro, demostrando que contenía un metal menos denso 
            (plata). Este fue el primer uso práctico del concepto de densidad y flotación para análisis de 
            materiales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Construcción Naval en la Antigüedad</h3>
          <p>
            Aunque los constructores navales antiguos no conocían la teoría de Arquímedes, aplicaban sus 
            principios empíricamente. Los fenicios (1200 a.C.) construyeron barcos mercantes que transportaban 
            hasta 150 toneladas. Los romanos desarrollaron barcos de guerra con múltiples cubiertas. Los vikingos 
            (800-1100 d.C.) diseñaron drakkars con cascos poco profundos que podían navegar en ríos y océanos. 
            Todos estos diseños se basaban en prueba y error, ajustando la forma del casco para optimizar 
            flotabilidad y estabilidad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Leonardo da Vinci y el Renacimiento (1452-1519)</h3>
          <p>
            Leonardo da Vinci estudió extensamente la flotación y estabilidad de barcos. Sus cuadernos contienen 
            dibujos detallados de cascos y análisis de centros de gravedad y flotación. Diseñó un submarino 
            primitivo con tanques de lastre, anticipándose 400 años a los submarinos modernos. También estudió 
            la resistencia del agua al movimiento de barcos, sentando bases para la hidrodinámica naval. Sin 
            embargo, muchos de sus diseños permanecieron secretos en sus cuadernos hasta siglos después.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Desarrollo de la Teoría de Estabilidad (Siglo XVIII)</h3>
          <p>
            Pierre Bouguer (1698-1758) publicó el primer tratado científico sobre arquitectura naval, 
            introduciendo el concepto de metacentro. Leonhard Euler (1707-1783) desarrolló las ecuaciones 
            matemáticas de la estabilidad de barcos. William Froude (1810-1879) estableció las leyes de 
            similitud para pruebas de modelos en tanques de prueba, revolucionando el diseño naval. Sus 
            experimentos demostraron que modelos a escala podían predecir el comportamiento de barcos reales, 
            permitiendo optimizar diseños antes de la construcción.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Submarinos y Guerras Mundiales</h3>
          <p>
            El primer submarino militar exitoso fue el Turtle (1776) de David Bushnell, usado en la Guerra 
            de Independencia Americana. El Nautilus de Robert Fulton (1800) demostró la viabilidad de la 
            propulsión submarina. Durante la Primera Guerra Mundial, los U-boats alemanes demostraron el 
            potencial militar de los submarinos. En la Segunda Guerra Mundial, los submarinos se volvieron 
            armas decisivas. El desarrollo de submarinos nucleares en los años 1950 permitió permanencia 
            submarina indefinida, transformando la guerra naval y la exploración oceánica.
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
            El Titanic se hundió en 1912 después de chocar con un iceberg. Solo el 10% del iceberg era visible 
            sobre el agua, haciendo imposible ver su verdadero tamaño en la oscuridad. El iceberg tenía 
            aproximadamente 400,000 toneladas y se extendía 100 metros bajo el agua. La colisión abrió una 
            serie de agujeros en el casco, permitiendo que entrara agua. A medida que los compartimentos se 
            llenaban, la densidad promedio del barco aumentaba hasta que el empuje ya no podía sostener el peso, 
            y el barco se hundió en menos de 3 horas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Vasa: Un Desastre de Estabilidad</h3>
          <p>
            El Vasa era un buque de guerra sueco que se hundió en su viaje inaugural en 1628, apenas 1300 metros 
            después de zarpar. El problema fue un centro de gravedad demasiado alto y altura metacéntrica 
            insuficiente. El rey había ordenado agregar un segundo nivel de cañones, elevando el centro de 
            gravedad sin ampliar el casco. Una ráfaga de viento inclinó el barco, el agua entró por las portas 
            de los cañones, y se hundió en minutos. El Vasa fue recuperado en 1961 y ahora es un museo, un 
            recordatorio permanente de la importancia de la estabilidad naval.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Desastre del Hindenburg</h3>
          <p>
            El Hindenburg era el dirigible más grande jamás construido, con 245 metros de largo y 200,000 m³ 
            de hidrógeno. Podía transportar 72 pasajeros cruzando el Atlántico en 3 días. En 1937, mientras 
            aterrizaba en Nueva Jersey, se incendió y se destruyó en 37 segundos, matando a 36 personas. El 
            hidrógeno, aunque proporcionaba excelente flotación (ρ = 0.09 kg/m³), era extremadamente inflamable. 
            Este desastre terminó la era de los dirigibles de pasajeros. Los dirigibles modernos usan helio 
            (ρ = 0.18 kg/m³), que aunque proporciona menos empuje, es completamente seguro.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Mar Muerto: Flotación Extrema</h3>
          <p>
            El Mar Muerto tiene una salinidad del 34%, haciendo que su densidad sea 1240 kg/m³, un 24% mayor 
            que el agua dulce. Esta densidad es tan alta que es prácticamente imposible hundirse. Los bañistas 
            flotan sin esfuerzo, pudiendo leer un periódico mientras flotan en posición vertical. Sin embargo, 
            esta alta salinidad hace que el agua sea extremadamente irritante para los ojos y cualquier herida. 
            El Mar Muerto está 430 metros bajo el nivel del mar y se está reduciendo a razón de 1 metro por año 
            debido a la evaporación y el uso del agua del río Jordán.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Peces y Control de Flotabilidad</h3>
          <p>
            Los peces óseos tienen una vejiga natatoria llena de gas que les permite controlar su flotabilidad 
            sin gastar energía nadando. Pueden ajustar la cantidad de gas para mantener flotabilidad neutra a 
            cualquier profundidad. Los tiburones, sin embargo, no tienen vejiga natatoria y deben nadar 
            constantemente para no hundirse. Los peces globo pueden inflarse tragando agua o aire, aumentando 
            su volumen hasta 3 veces y reduciendo su densidad promedio, lo que los hace flotar y los protege 
            de depredadores. Los peces abisales tienen vejigas natatorias especiales que resisten presiones 
            de hasta 1000 atmósferas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Récord de Profundidad del Trieste</h3>
          <p>
            En 1960, el batiscafo Trieste descendió a la Fosa de las Marianas, alcanzando 10,916 metros de 
            profundidad, el punto más profundo del océano. Para soportar la presión de 1100 atmósferas, tenía 
            una esfera de acero de 12.7 cm de espesor. Para descender, llenaba tanques con agua de mar. Para 
            ascender, soltaba lastre de hierro. El flotador principal contenía 85,000 litros de gasolina, que 
            es menos densa que el agua y casi incompresible. Este diseño permitió al Trieste controlar su 
            flotabilidad a profundidades extremas donde el agua es significativamente más densa debido a la 
            compresión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Barcos de Hormigón en la Segunda Guerra Mundial</h3>
          <p>
            Durante la Segunda Guerra Mundial, la escasez de acero llevó a construir barcos de hormigón armado. 
            Aunque el hormigón es más denso que el agua (ρ ≈ 2400 kg/m³), los barcos flotaban porque el casco 
            contenía mucho aire, haciendo que la densidad promedio fuera menor que el agua. Se construyeron más 
            de 100 barcos de hormigón, algunos de hasta 7000 toneladas. Aunque eran más pesados y lentos que 
            los barcos de acero, eran resistentes a minas magnéticas y corrosión. Varios de estos barcos todavía 
            existen como rompeolas o arrecifes artificiales.
          </p>
        </div>
      </div>

      <div className="theory-section-highlight">
        <h2>Resumen</h2>
        <p>
          El Principio de Arquímedes establece que todo cuerpo sumergido en un fluido experimenta un empuje 
          vertical hacia arriba igual al peso del fluido desplazado (E = ρ_fluido × g × V_sumergido). Este 
          principio explica la flotación, el hundimiento y el peso aparente de los objetos en fluidos.
        </p>
        <p>
          Un objeto flotará si su densidad promedio es menor que la del fluido. La fracción sumergida es igual 
          a la relación de densidades (V_sumergido/V_total = ρ_objeto/ρ_fluido). El peso aparente de un objeto 
          sumergido es su peso real menos el empuje (W_aparente = W - E).
        </p>
        <p>
          La estabilidad de cuerpos flotantes se determina por la altura metacéntrica (GM). Si GM {'>'} 0, el 
          cuerpo es estable y regresará a su posición original después de una perturbación. Si GM {'<'} 0, el 
          cuerpo es inestable y tenderá a volcarse. El diseño naval moderno optimiza GM para equilibrar 
          estabilidad y confort.
        </p>
        <p>
          Las aplicaciones prácticas incluyen diseño de barcos, submarinos, globos aerostáticos, plataformas 
          petroleras, equipos de flotación y deportes acuáticos. El principio de Arquímedes, descubierto hace 
          más de 2200 años, sigue siendo fundamental en la ingeniería moderna.
        </p>
      </div>
    </>
  );
};

export default Theory;
