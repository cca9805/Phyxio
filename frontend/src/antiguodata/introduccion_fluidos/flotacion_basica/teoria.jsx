import { TheorySection, Concept, Formula, Important, ExercisesSection } from '../../../components/TheoryV2';
import Latex from 'react-latex-next';
import { definitions } from './definitions.js';
import ejercicios from './ejercicios.json';

export const metadata = {
  titulo: "Flotación Básica",
  descripcion: "Principio de Arquímedes, densidad y flotación",
  isTheoryOnly: false,
  educationLevel: "ESO",
  levels: ['ESO']
};

export default function TeoriaFlotacionBasica() {
  return (
    <>
      <TheorySection title="¿Qué es la Flotación?">
        <p>
          La flotación es el fenómeno por el cual algunos objetos se mantienen en la superficie de un líquido, mientras que otros se hunden. Este comportamiento depende de la densidad del objeto y del líquido en el que se encuentra sumergido.
        </p>
        <p>
          Cuando colocamos un objeto en agua, observamos que algunos flotan (como la madera o el corcho) mientras que otros se hunden (como una piedra o un clavo de hierro). Esta diferencia se explica mediante el principio de Arquímedes y la comparación de densidades.
        </p>
      </TheorySection>

      <TheorySection title="Principio de Arquímedes">
        <Important>
          <p>
            Todo cuerpo sumergido en un líquido recibe un empuje hacia arriba igual al peso del líquido desplazado.
          </p>
        </Important>
        
        <p>
          Este principio, descubierto por el matemático griego Arquímedes hace más de 2,000 años, explica por qué los objetos flotan o se hunden. El empuje es una fuerza que el líquido ejerce hacia arriba sobre cualquier objeto sumergido en él.
        </p>

        <Formula
          expression="E = \rho \cdot V \cdot g"
          description="Empuje: fuerza de flotación que ejerce un líquido sobre un objeto sumergido"
          calculatorId="empuje"
          definitions={definitions}
          exercises={ejercicios}
        />
      </TheorySection>

      <TheorySection title="Densidad y Flotación">
        <p>
          La densidad es la relación entre la masa de un objeto y su volumen. Se mide en kilogramos por metro cúbico (kg/m³) o gramos por centímetro cúbico (g/cm³).
        </p>

        <Concept title="Condiciones de Flotación">
          <ul>
            <li>Si la densidad del objeto es menor que la densidad del líquido: el objeto flota</li>
            <li>Si la densidad del objeto es mayor que la densidad del líquido: el objeto se hunde</li>
            <li>Si la densidad del objeto es igual a la densidad del líquido: el objeto queda en equilibrio (ni flota ni se hunde)</li>
          </ul>
        </Concept>

        <Formula
          expression="\text{Comparación: } \rho_{objeto} \text{ vs } \rho_{líquido}"
          description="Comparación de densidades para determinar si un objeto flota o se hunde"
          calculatorId="flotacion"
          definitions={definitions}
          exercises={ejercicios}
        />

        <Concept title="Densidades Comunes">
          <p>
            Algunos valores de densidad útiles para entender la flotación:
          </p>
          <ul>
            <li>Agua dulce: 1,000 kg/m³ (1 g/cm³)</li>
            <li>Agua salada: 1,030 kg/m³ (1.03 g/cm³)</li>
            <li>Hielo: 920 kg/m³ (0.92 g/cm³)</li>
            <li>Madera (pino): 500-600 kg/m³</li>
            <li>Corcho: 240 kg/m³</li>
            <li>Hierro: 7,870 kg/m³</li>
            <li>Plomo: 11,340 kg/m³</li>
            <li>Aire: 1.2 kg/m³</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos Cotidianos">
        <Concept title="Barcos">
          <p>
            Un barco de acero flota aunque el acero sea más denso que el agua. Esto ocurre porque el barco tiene una forma hueca que encierra mucho aire, haciendo que su densidad promedio (acero + aire) sea menor que la del agua. El volumen total del barco desplaza suficiente agua para generar un empuje mayor que su peso.
          </p>
        </Concept>

        <Concept title="Icebergs">
          <p>
            Un iceberg flota en el mar porque el hielo (densidad 920 kg/m³) es menos denso que el agua salada (densidad 1,030 kg/m³). Solo aproximadamente el 10% del iceberg queda visible sobre la superficie, mientras que el 90% permanece sumergido. Esta proporción depende de la diferencia de densidades.
          </p>
        </Concept>

        <Concept title="Pelotas y Juguetes">
          <p>
            Una pelota de plástico flota en la piscina porque el plástico y el aire en su interior tienen una densidad promedio mucho menor que la del agua. Por eso es difícil mantener una pelota sumergida: el empuje la impulsa constantemente hacia arriba.
          </p>
        </Concept>

        <Concept title="Huevos en Agua Salada">
          <p>
            Un huevo fresco se hunde en agua dulce pero puede flotar en agua muy salada. Al agregar sal al agua, aumentamos su densidad. Cuando la densidad del agua salada supera la densidad del huevo, este comienza a flotar. Este experimento demuestra claramente cómo la densidad del líquido afecta la flotación.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Flotación Parcial">
        <p>
          Cuando un objeto flota, no todo su volumen está sumergido. La parte sumergida desplaza exactamente el volumen de líquido necesario para que el empuje iguale el peso del objeto.
        </p>

        <Concept title="Proporción Sumergida">
          <p>
            La fracción del objeto que queda sumergida depende de la relación entre las densidades:
          </p>
          <div className="formula-display">
            <div className="formula-container">
              <div className="formula-expression">
                <Latex>{'$\\text{Fracción sumergida} = \\frac{\\rho_{objeto}}{\\rho_{líquido}}$'}</Latex>
              </div>
            </div>
          </div>
          <p>
            Por ejemplo, el hielo (920 kg/m³) en agua dulce (1,000 kg/m³) queda sumergido en una fracción de 920/1,000 = 0.92, es decir, el 92% del hielo está bajo el agua y solo el 8% visible.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Conceptos Fundamentales">
        <Concept title="Densidad">
          <p>
            La densidad es la masa por unidad de volumen. Determina si un objeto flotará o se hundirá en un líquido dado. Los materiales menos densos que el agua flotan, mientras que los más densos se hunden.
          </p>
        </Concept>

        <Concept title="Empuje">
          <p>
            El empuje es la fuerza hacia arriba que ejerce el líquido sobre un objeto sumergido. Es igual al peso del líquido desplazado por el objeto. Esta fuerza se opone al peso del objeto y determina si flotará.
          </p>
        </Concept>

        <Concept title="Equilibrio de Flotación">
          <p>
            Un objeto flota cuando el empuje hacia arriba iguala su peso hacia abajo. En este equilibrio, el objeto permanece en la superficie sin hundirse ni elevarse más. Si el empuje es mayor que el peso, el objeto emerge más; si es menor, se hunde.
          </p>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2><span>⚓</span> Aplicaciones de la Flotación</h2>
        
        <h4>Construcción Naval</h4>
        <p>
          Los barcos se diseñan con cascos que desplazan grandes volúmenes de agua, generando suficiente empuje para soportar el peso de la estructura, la carga y los pasajeros. Los ingenieros navales calculan cuidadosamente la distribución de peso y el volumen del casco para garantizar estabilidad y flotabilidad.
        </p>

        <h4>Submarinos</h4>
        <p>
          Los submarinos controlan su flotabilidad mediante tanques de lastre. Para sumergirse, llenan los tanques con agua, aumentando su densidad promedio. Para emerger, expulsan el agua con aire comprimido, reduciendo su densidad. Este control preciso permite navegar a diferentes profundidades.
        </p>

        <h4>Chalecos Salvavidas</h4>
        <p>
          Los chalecos salvavidas contienen materiales de muy baja densidad (espuma o cámaras de aire) que proporcionan empuje adicional. Esto mantiene a una persona flotando incluso si está inconsciente, manteniendo la cabeza fuera del agua para poder respirar.
        </p>

        <h4>Hidrómetros</h4>
        <p>
          Los hidrómetros son instrumentos que miden la densidad de líquidos basándose en el principio de flotación. Se sumergen en el líquido y la profundidad a la que flotan indica la densidad. Se utilizan para medir la concentración de azúcar en mostos, la carga de baterías, o la densidad de anticongelantes.
        </p>

        <h4>Globos Aerostáticos</h4>
        <p>
          Aunque flotan en aire en lugar de agua, los globos aerostáticos funcionan por el mismo principio. El aire caliente dentro del globo es menos denso que el aire frío exterior, generando empuje que eleva el globo. Controlando la temperatura del aire interior, se controla la altitud.
        </p>

        <h4>Transporte de Cargas Pesadas</h4>
        <p>
          Las barcazas y plataformas flotantes se utilizan para transportar cargas extremadamente pesadas por agua. El agua proporciona soporte mediante empuje, permitiendo mover objetos que serían imposibles de transportar por tierra, como turbinas gigantes o secciones de puentes.
        </p>
      </div>

      <div className="theory-history-section">
        <h2><span>📜</span> Historia del Principio de Arquímedes</h2>
        <p>
          Arquímedes de Siracusa (287-212 a.C.) fue uno de los matemáticos y científicos más brillantes de la antigüedad. Según la leyenda, descubrió su famoso principio mientras se bañaba. El rey Hierón II le había pedido determinar si su corona era de oro puro o contenía plata, sin dañarla.
        </p>
        <p>
          Al sumergirse en la bañera, Arquímedes notó que el agua se desbordaba. Comprendió que el volumen de agua desplazada era igual al volumen de su cuerpo sumergido. Esto le dio la clave para resolver el problema: podía comparar el volumen de la corona con el volumen de oro puro de igual peso.
        </p>
        <p>
          La emoción del descubrimiento fue tal que, según cuenta la historia, Arquímedes salió corriendo desnudo por las calles de Siracusa gritando "¡Eureka!" (lo encontré). Este principio no solo resolvió el problema de la corona, sino que se convirtió en uno de los fundamentos de la hidrostática.
        </p>
        <p>
          Durante siglos, el principio de Arquímedes ha sido fundamental para el diseño de barcos. Los fenicios, vikingos y polinesios construyeron embarcaciones basándose en conocimiento empírico de flotación. Con la comprensión científica del principio, la construcción naval se volvió más precisa y permitió diseñar barcos cada vez más grandes y eficientes.
        </p>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span>💡</span> Curiosidades sobre Flotación</h2>
        <p>
          El Mar Muerto, entre Israel y Jordania, tiene una salinidad tan alta (aproximadamente 34% de sal) que su densidad alcanza 1,240 kg/m³. Esto hace que sea prácticamente imposible hundirse en él. Los bañistas flotan sin esfuerzo, pudiendo incluso leer un periódico mientras flotan en la superficie.
        </p>
        <p>
          El Titanic se hundió en 1912 no solo por el choque con el iceberg, sino porque el agua que entró aumentó su densidad promedio por encima de la del agua de mar. Los compartimentos estancos diseñados para mantenerlo a flote no pudieron contener el agua que entraba por múltiples brechas en el casco.
        </p>
        <p>
          Los peces controlan su flotabilidad mediante un órgano llamado vejiga natatoria, llena de gas. Ajustando la cantidad de gas, pueden subir o bajar en el agua sin gastar energía nadando. Algunos peces de aguas profundas no tienen vejiga natatoria porque la presión extrema haría imposible mantenerla inflada.
        </p>
        <p>
          El portaaviones USS Gerald R. Ford, uno de los barcos más grandes del mundo, pesa más de 100,000 toneladas pero flota porque su enorme volumen desplaza suficiente agua. Si pudiéramos pesar el agua desplazada por el portaaviones, pesaría exactamente lo mismo que el barco completo.
        </p>
        <p>
          Los astronautas entrenan para caminatas espaciales en piscinas gigantes, donde se ajusta su flotabilidad para simular la ingravidez. Agregando o quitando pesos, logran que ni floten ni se hundan, creando una experiencia similar a la ausencia de gravedad del espacio.
        </p>
      </div>

      <div className="formula-card">
        <h3>Resumen: Flotación Básica</h3>
        <p>
          La flotación se explica mediante el principio de Arquímedes: todo cuerpo sumergido en un líquido recibe un empuje hacia arriba igual al peso del líquido desplazado. Este empuje determina si un objeto flotará o se hundirá.
        </p>
        <p>
          La condición fundamental para la flotación es que la densidad del objeto sea menor que la densidad del líquido. Cuando esto ocurre, el objeto flota con una parte sumergida que desplaza exactamente el volumen de líquido necesario para que el empuje iguale su peso.
        </p>
        <p>
          Este principio tiene innumerables aplicaciones prácticas, desde el diseño de barcos y submarinos hasta chalecos salvavidas y medición de densidades. Comprender la flotación nos permite explicar fenómenos cotidianos como por qué flotan los icebergs o cómo funcionan los globos aerostáticos.
        </p>
      </div>

      <ExercisesSection topicId="flotacion_basica" />
    </>
  );
}
