import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Presión Hidrostática",
  descripcion: "Presión ejercida por fluidos en reposo",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a la Presión Hidrostática">
        <p>
          La presión hidrostática es la presión que ejerce un fluido en reposo debido exclusivamente 
          a su peso. A diferencia de la presión general en fluidos, la presión hidrostática se refiere 
          específicamente a la componente de presión causada por la columna de fluido suprayacente. 
          Este concepto es fundamental para entender fenómenos como la flotación, el diseño de presas, 
          el funcionamiento de vasos comunicantes y los límites de profundidad en buceo.
        </p>
        <p>
          La característica más notable de la presión hidrostática es que aumenta linealmente con la 
          profundidad, independientemente de la forma del recipiente que contiene el fluido. Esta 
          propiedad, conocida como la Paradoja Hidrostática de Stevin, significa que un tubo delgado 
          de gran altura ejerce la misma presión en su base que un tanque ancho de la misma altura.
        </p>

        <Important>
          <p>
            La presión hidrostática depende únicamente de tres factores: la densidad del fluido (ρ), 
            la aceleración gravitacional (g) y la profundidad (h). No depende del volumen total de 
            fluido, la forma del recipiente, ni la masa total del líquido.
          </p>
        </Important>
      </TheorySection>

      <TheorySection title="Ley Fundamental de la Hidrostática">
        <Concept title="Ecuación de Presión Hidrostática">
          <p>
            La presión hidrostática a una profundidad h en un fluido homogéneo e incompresible se 
            calcula mediante la ecuación fundamental:
          </p>

          <Formula
            expression={String.raw`P = \rho g h`}
            calculatorId="presion-hidrostatica-basica"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Profundidad", expression: String.raw`h = \frac{P}{\rho g}` },
              { description: "Calcular Densidad", expression: String.raw`\rho = \frac{P}{g h}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>P: Presión hidrostática (Pa)</li>
            <li>ρ: Densidad del fluido (kg/m³)</li>
            <li>g: Aceleración gravitacional (9.81 m/s²)</li>
            <li>h: Profundidad medida desde la superficie libre (m)</li>
          </ul>

          <p>Características fundamentales:</p>
          <ul>
            <li>La presión aumenta linealmente con la profundidad (relación directamente proporcional)</li>
            <li>La presión es independiente de la forma del recipiente (Paradoja Hidrostática)</li>
            <li>La presión es la misma en todos los puntos a la misma profundidad en un fluido continuo</li>
            <li>La presión actúa perpendicular a cualquier superficie sumergida</li>
            <li>La presión es igual en todas las direcciones en un punto dado (Principio de Pascal)</li>
          </ul>

          <Example>
            <p>
              A 10 metros de profundidad en agua dulce (ρ = 1000 kg/m³), la presión hidrostática es 
              P = 1000 × 9.81 × 10 = 98,100 Pa ≈ 98.1 kPa. Esto equivale a aproximadamente 0.97 atm, 
              casi una atmósfera adicional de presión solo por el peso del agua.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Presión Total y Presión Absoluta">
        <Concept title="Presión Total en un Fluido">
          <p>
            La presión total en un punto sumergido incluye tanto la presión atmosférica (o la presión 
            en la superficie del fluido) como la presión hidrostática debida a la columna de fluido:
          </p>

          <Formula
            expression={String.raw`P_{total} = P_0 + \rho g h`}
            calculatorId="presion-total"
            definitions={definitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>P_total: Presión total o absoluta en el punto (Pa)</li>
            <li>P₀: Presión en la superficie del fluido (Pa), típicamente P_atm = 101,325 Pa</li>
            <li>ρgh: Presión hidrostática debida a la columna de fluido (Pa)</li>
          </ul>

          <Important>
            <p>
              En recipientes abiertos a la atmósfera, P₀ = P_atm = 101,325 Pa. En recipientes cerrados 
              o presurizados, P₀ puede ser diferente. Por ejemplo, en un tanque presurizado, P₀ podría 
              ser 200 kPa, y la presión total a 5 m de profundidad sería P_total = 200,000 + 49,050 = 
              249,050 Pa.
            </p>
          </Important>

          <Example>
            <p>
              A 20 metros de profundidad en el océano (ρ = 1025 kg/m³), la presión total es 
              P_total = 101,325 + (1025 × 9.81 × 20) = 101,325 + 201,105 = 302,430 Pa ≈ 302.4 kPa ≈ 3 atm. 
              Un buceador a esta profundidad experimenta tres veces la presión atmosférica.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Variación de Presión con la Profundidad">
        <Concept title="Diferencia de Presión entre Dos Puntos">
          <p>
            La diferencia de presión entre dos puntos separados verticalmente en un fluido homogéneo 
            depende únicamente de la diferencia de altura entre ellos:
          </p>

          <Formula
            expression={String.raw`\Delta P = \rho g \Delta h`}
            calculatorId="diferencia-presion"
            definitions={definitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>ΔP: Diferencia de presión entre los dos puntos (Pa)</li>
            <li>Δh: Diferencia de altura vertical entre los puntos (m)</li>
          </ul>

          <p>
            Esta ecuación es fundamental para entender vasos comunicantes, sifones y sistemas de 
            nivelación. Si dos puntos están a la misma altura en un fluido continuo en reposo, 
            tienen la misma presión, independientemente de la trayectoria que los conecte.
          </p>

          <Example>
            <p>
              En una piscina, la diferencia de presión entre la superficie (h = 0) y el fondo (h = 3 m) 
              es ΔP = 1000 × 9.81 × 3 = 29,430 Pa. Esta diferencia es constante sin importar si medimos 
              en el centro de la piscina o cerca de las paredes.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Paradoja Hidrostática de Stevin">
        <Concept title="Independencia de la Forma del Recipiente">
          <p>
            La Paradoja Hidrostática, demostrada por Simon Stevin en 1586, establece que la presión 
            en el fondo de un recipiente depende solo de la profundidad del líquido, no de la forma 
            del recipiente ni del volumen total de líquido. Esto significa que recipientes de formas 
            muy diferentes pero con la misma profundidad de líquido ejercen la misma presión en el fondo.
          </p>

          <p>Ejemplos de la paradoja:</p>
          <ul>
            <li>Un tubo delgado de 10 m de altura con 1 litro de agua ejerce la misma presión en su 
                base (98,100 Pa) que un tanque de 10 m de altura con 1000 litros de agua</li>
            <li>Un recipiente en forma de embudo invertido (ancho arriba, estrecho abajo) ejerce la 
                misma presión en el fondo que un cilindro de la misma altura</li>
            <li>Un recipiente en forma de reloj de arena ejerce presiones diferentes en sus dos bases 
                solo si las profundidades son diferentes</li>
          </ul>

          <Important>
            <p>
              Esta paradoja desafió la intuición de los científicos durante siglos. Parece contradictorio 
              que un pequeño volumen de agua en un tubo delgado pueda ejercer la misma presión que un 
              gran volumen en un tanque ancho. La explicación es que las paredes del recipiente soportan 
              parte del peso del agua, y la presión en el fondo depende solo de la columna vertical de 
              fluido directamente encima.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Vasos Comunicantes">
        <Concept title="Principio de Vasos Comunicantes">
          <p>
            Los vasos comunicantes son recipientes conectados por su base que contienen el mismo fluido. 
            El principio establece que el fluido alcanza el mismo nivel en todos los recipientes, 
            independientemente de sus formas o tamaños, siempre que estén abiertos a la misma presión 
            (típicamente la atmosférica).
          </p>

          <p>Explicación física:</p>
          <ul>
            <li>Si los niveles fueran diferentes, habría una diferencia de presión en la base común</li>
            <li>Esta diferencia de presión causaría un flujo de fluido del lado de mayor presión al 
                de menor presión</li>
            <li>El flujo continúa hasta que los niveles se igualan y las presiones en la base se equilibran</li>
            <li>En equilibrio: P₁ = P₂, por lo tanto P_atm + ρgh₁ = P_atm + ρgh₂, lo que implica h₁ = h₂</li>
          </ul>

          <p>Aplicaciones prácticas:</p>
          <ul>
            <li>Sistemas de nivelación en construcción</li>
            <li>Medidores de nivel de líquidos</li>
            <li>Sistemas de distribución de agua</li>
            <li>Sifones y sistemas de drenaje</li>
          </ul>

          <Example>
            <p>
              Si conectamos tres recipientes de formas diferentes (cilíndrico, cónico y esférico) por 
              su base y vertemos agua, el agua alcanzará exactamente el mismo nivel en los tres, sin 
              importar que el cilindro contenga 1 litro, el cono 0.5 litros y la esfera 2 litros.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Gradiente de Presión">
        <Concept title="Tasa de Cambio de Presión">
          <p>
            El gradiente de presión hidrostática es la tasa de cambio de presión con respecto a la 
            profundidad. Para un fluido homogéneo e incompresible, este gradiente es constante:
          </p>

          <p>
            dP/dh = ρg
          </p>

          <p>
            Esto significa que por cada metro de profundidad adicional, la presión aumenta en ρg pascales. 
            Para agua dulce, este gradiente es aproximadamente 9,810 Pa/m o 9.81 kPa/m.
          </p>

          <p>Gradientes típicos:</p>
          <ul>
            <li>Agua dulce (ρ = 1000 kg/m³): 9.81 kPa/m</li>
            <li>Agua de mar (ρ = 1025 kg/m³): 10.05 kPa/m</li>
            <li>Mercurio (ρ = 13,600 kg/m³): 133.4 kPa/m</li>
            <li>Aceite (ρ = 900 kg/m³): 8.83 kPa/m</li>
            <li>Aire a nivel del mar (ρ ≈ 1.2 kg/m³): 0.012 kPa/m</li>
          </ul>

          <Important>
            <p>
              Para gases, el gradiente de presión no es constante porque la densidad varía con la presión 
              y la temperatura. La atmósfera terrestre, por ejemplo, tiene un gradiente de presión que 
              disminuye exponencialmente con la altitud según la ecuación barométrica.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones Específicas de Presión Hidrostática">
        <Concept title="Buceo y Límites de Profundidad">
          <p>
            La presión hidrostática es el factor limitante principal en el buceo. Cada 10 metros de 
            profundidad en agua añaden aproximadamente 1 atmósfera de presión:
          </p>

          <p>Límites de buceo:</p>
          <ul>
            <li>Buceo recreativo: máximo 40 m (5 atm)</li>
            <li>Buceo técnico: hasta 100 m (11 atm)</li>
            <li>Buceo comercial con campana: hasta 300 m (31 atm)</li>
            <li>Récord de buceo en apnea: 214 m (22 atm)</li>
            <li>Submarinos militares: hasta 600 m (61 atm)</li>
            <li>Batiscafos de investigación: hasta 11,000 m (1100 atm)</li>
          </ul>

          <p>
            Los buceadores deben considerar la presión hidrostática para calcular el consumo de aire, 
            los tiempos de descompresión y los riesgos de barotrauma. La enfermedad descompresiva ocurre 
            cuando la presión disminuye demasiado rápido durante el ascenso, causando que el nitrógeno 
            disuelto en la sangre forme burbujas peligrosas.
          </p>
        </Concept>

        <Concept title="Torres de Agua y Distribución">
          <p>
            Las torres de agua elevadas utilizan la presión hidrostática para distribuir agua sin bombas. 
            La presión disponible en las tuberías al nivel del suelo es:
          </p>

          <p>
            P = ρgh
          </p>

          <p>
            Una torre de 30 metros proporciona aproximadamente 294 kPa (3 atm) de presión, suficiente 
            para abastecer edificios de varios pisos. En rascacielos, se usan bombas para elevar el 
            agua a tanques en pisos intermedios, creando zonas de presión para evitar presiones excesivas 
            en los pisos inferiores.
          </p>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <ul>
          <li>Distribución de agua mediante torres y depósitos.</li>
          <li>Diseño y seguridad de presas y embalses.</li>
          <li>Cálculo de presiones para buceadores y vehículos sumergidos.</li>
          <li>Instrumentación: manómetros, barómetros y sensores de nivel.</li>
        </ul>
      </div>
    </>
  );
};

export default Theory;
