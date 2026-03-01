import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as bernoulliDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Ecuación de Bernoulli",
  descripcion: "Conservación de energía en fluidos en movimiento",
  isTheoryOnly: false,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Ecuación de Bernoulli">
        <p>
          La ecuación de Bernoulli es una expresión de la conservación de energía 
          para fluidos en movimiento. Relaciona presión, velocidad y altura en diferentes puntos 
          de una línea de corriente.
        </p>

        <Important>
          La suma de la energía de presión, energía cinética y energía potencial por unidad 
          de volumen permanece constante a lo largo de una línea de corriente.
        </Important>

        <Concept title="Forma General">
          <Formula
            expression={String.raw`P + \frac{1}{2}\rho v^2 + \rho g h = \text{constante}`}
            description="Ecuación de Bernoulli"
            calculatorId="ecuacion-bernoulli"
            definitions={bernoulliDefinitions}
            exercises={exercises}
          />

          <p>Términos de la ecuación:</p>
          <ul>
            <li>P: Presión estática (Pa) - energía de presión</li>
            <li>½ρv²: Presión dinámica (Pa) - energía cinética por volumen</li>
            <li>ρgh: Presión hidrostática (Pa) - energía potencial por volumen</li>
          </ul>

          <p>Hipótesis de validez:</p>
          <ul>
            <li>Flujo estacionario (no varía con el tiempo)</li>
            <li>Fluido incompresible (ρ = constante)</li>
            <li>Fluido no viscoso (sin fricción)</li>
            <li>A lo largo de una línea de corriente</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuación de Continuidad">
        <Concept title="Conservación de Masa">
          <p>
            Para flujo incompresible, el caudal volumétrico se conserva:
          </p>

          <Formula
            expression={String.raw`A_1 v_1 = A_2 v_2 = Q`}
            description="Ecuación de continuidad"
            calculatorId="continuidad"
            definitions={bernoulliDefinitions}
            exercises={exercises}
          />

          <p>
            Donde A es el área de la sección transversal y v es la velocidad. Esto implica que 
            cuando el área disminuye, la velocidad aumenta.
          </p>
        </Concept>

        <Concept title="Caudal Volumétrico">
          <Formula
            expression={String.raw`Q = A \cdot v`}
            description="Caudal volumétrico"
            calculatorId="caudal"
            definitions={bernoulliDefinitions}
            exercises={exercises}
          />

          <p>Unidades comunes:</p>
          <ul>
            <li>m³/s (SI)</li>
            <li>L/s = 0.001 m³/s</li>
            <li>L/min = 1.667 × 10⁻⁵ m³/s</li>
            <li>gpm (galones por minuto) = 6.309 × 10⁻⁵ m³/s</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones Importantes">
        <Concept title="Teorema de Torricelli">
          <p>
            Velocidad de salida de un líquido por un orificio:
          </p>

          <Formula
            expression={String.raw`v = \sqrt{2gh}`}
            description="Velocidad de salida (Torricelli)"
            calculatorId="torricelli"
            definitions={bernoulliDefinitions}
            exercises={exercises}
          />

          <p>
            Es equivalente a la velocidad de caída libre desde altura h. Se obtiene aplicando 
            Bernoulli entre la superficie del líquido y el orificio.
          </p>
        </Concept>

        <Concept title="Tubo de Pitot">
          <p>
            Dispositivo para medir velocidad de fluidos:
          </p>

          <Formula
            expression={String.raw`v = \sqrt{\frac{2(P_{estancamiento} - P_{estatica})}{\rho}}`}
            description="Velocidad con tubo de Pitot"
            calculatorId="tubo-pitot"
            definitions={bernoulliDefinitions}
            exercises={exercises}
          />

          <p>
            Usado en aviones para medir velocidad del aire. El tubo enfrenta el flujo 
            (presión de estancamiento) y tiene orificios laterales (presión estática).
          </p>
        </Concept>

        <Concept title="Presión Dinámica">
          <Formula
            expression={String.raw`P_{din} = \frac{1}{2}\rho v^2`}
            description="Presión dinámica"
            calculatorId="presion-dinamica"
            definitions={bernoulliDefinitions}
            exercises={exercises}
          />

          <p>
            Representa la energía cinética por unidad de volumen. Es la presión que se 
            sentiría al detener completamente el fluido.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Carga Total">
        <Concept title="Altura Piezométrica">
          <p>
            La ecuación de Bernoulli se puede expresar en términos de altura (metros de columna):
          </p>

          <Formula
            expression={String.raw`H = \frac{P}{\rho g} + \frac{v^2}{2g} + z`}
            description="Carga total"
            calculatorId="carga-total"
            definitions={bernoulliDefinitions}
            exercises={exercises}
          />

          <p>Componentes:</p>
          <ul>
            <li>P/(ρg): Carga de presión (m)</li>
            <li>v²/(2g): Carga de velocidad (m)</li>
            <li>z: Carga de posición (m)</li>
          </ul>

          <p>
            Esta forma es útil en hidráulica porque todas las energías se expresan como alturas.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos Resueltos">
        <Example 
          title="Ejemplo 1: Tanque con Orificio"
          problem="Un tanque tiene un orificio a 4 m por debajo de la superficie. Calcula la velocidad de salida."
          solution={
            <div>
              <p>Aplicar Torricelli:</p>
              <p>v = √(2gh) = √(2 × 9.81 × 4)</p>
              <p>v = √78.48 = 8.86 m/s</p>
              <p>Resultado: v = 8.86 m/s = 31.9 km/h</p>
            </div>
          }
        />

        <Example 
          title="Ejemplo 2: Reducción de Tubería"
          problem="Agua fluye a 3 m/s en una tubería de 10 cm de diámetro que se reduce a 5 cm. Calcula la nueva velocidad y el cambio de presión."
          solution={
            <div>
              <p>Continuidad:</p>
              <p>A₁/A₂ = (d₁/d₂)² = (10/5)² = 4</p>
              <p>v₂ = 4 × v₁ = 4 × 3 = 12 m/s</p>
              
              <p>Bernoulli (horizontal):</p>
              <p>P₁ + ½ρv₁² = P₂ + ½ρv₂²</p>
              <p>ΔP = ½ρ(v₁² - v₂²) = 500(9 - 144)</p>
              <p>ΔP = -67,500 Pa = -67.5 kPa</p>
              <p>La presión disminuye 67.5 kPa</p>
            </div>
          }
        />

        <Example 
          title="Ejemplo 3: Tubo de Pitot"
          problem="Un tubo de Pitot en un avión mide una diferencia de presión de 3 kPa (ρ_aire = 1.2 kg/m³). Calcula la velocidad."
          solution={
            <div>
              <p>Datos:</p>
              <p>ΔP = 3000 Pa, ρ = 1.2 kg/m³</p>
              
              <p>Solución:</p>
              <p>v = √(2ΔP/ρ) = √(2 × 3000 / 1.2)</p>
              <p>v = √5000 = 70.7 m/s</p>
              <p>Resultado: v = 70.7 m/s = 254 km/h</p>
            </div>
          }
        />
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>✈️ Aviación y sustentación</h3>
          <p>
            El principio de Bernoulli explica la sustentación de las alas de avión. El perfil aerodinámico del ala hace que el aire fluya más rápido por la parte superior que por la inferior. Según Bernoulli, mayor velocidad implica menor presión, creando una diferencia de presión que genera fuerza hacia arriba. Un Boeing 747 genera aproximadamente 1.8 millones de newtons de sustentación gracias a este principio.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏎️ Aerodinámica de vehículos</h3>
          <p>
            Los alerones en autos de Fórmula 1 utilizan Bernoulli de forma inversa: crean mayor velocidad debajo del alerón, generando baja presión que "succiona" el auto hacia el suelo. Esto permite velocidades de hasta 300 km/h en curvas. Los difusores bajo el chasis aceleran el aire, reduciendo la presión y aumentando el agarre hasta en un 40%.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚿 Sistemas de fontanería</h3>
          <p>
            En edificios altos, la ecuación de Bernoulli determina la presión del agua en cada piso. Por cada 10 metros de altura, la presión disminuye aproximadamente 1 bar (100 kPa). Los ingenieros diseñan sistemas de bombeo y tanques elevados para mantener presión adecuada (mínimo 1.5 bar) en todos los pisos, considerando tanto la altura como las pérdidas por fricción.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔥 Chimeneas y ventilación</h3>
          <p>
            El viento que pasa sobre una chimenea crea baja presión en la parte superior (efecto Venturi), mejorando el tiro y la extracción de humos. Este principio también explica por qué las ventanas se abren hacia afuera cuando hay viento fuerte: el aire rápido exterior crea presión menor que el aire estático interior, generando una fuerza de succión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💉 Atomizadores y nebulizadores</h3>
          <p>
            Los perfumes, pinturas en spray y nebulizadores médicos funcionan por Bernoulli. Un flujo rápido de aire pasa sobre un tubo sumergido en líquido, creando baja presión que succiona el líquido hacia arriba. Al salir, se atomiza en gotas finas de 1-10 micras. Los inhaladores para asma utilizan este principio para administrar medicamentos directamente a los pulmones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚽ Efecto Magnus en deportes</h3>
          <p>
            Aunque el efecto Magnus involucra rotación, Bernoulli ayuda a explicarlo. Una pelota con efecto arrastra aire: un lado gira en dirección del movimiento (mayor velocidad relativa, menor presión) y el otro en contra (menor velocidad, mayor presión). Esta diferencia de presión curva la trayectoria. En fútbol, un tiro libre con efecto puede curvarse hasta 2 metros en 30 metros de distancia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏥 Medición de flujo sanguíneo</h3>
          <p>
            Los catéteres con sensores de presión utilizan el principio de Bernoulli para medir el flujo sanguíneo en arterias. La diferencia de presión entre dos puntos permite calcular la velocidad del flujo. Esto es crucial para diagnosticar estenosis (estrechamientos) arteriales: una reducción del 50% en diámetro puede cuadruplicar la velocidad del flujo y reducir significativamente la presión aguas abajo.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Daniel Bernoulli y la hidrodinámica
        </h2>
        
        <div className="theory-subsection">
          <h3>👨‍🔬 Daniel Bernoulli (1700-1782)</h3>
          <p>
            Daniel Bernoulli, matemático y físico suizo, publicó su obra maestra "Hydrodynamica" en 1738, donde presentó por primera vez la ecuación que lleva su nombre. Provenía de una familia de matemáticos brillantes (su padre Johann y su tío Jakob también fueron matemáticos destacados), pero su relación con su padre fue tensa debido a rivalidades académicas. Johann incluso publicó su propia obra "Hydraulica" con fecha falsa anterior para reclamar prioridad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 El experimento original</h3>
          <p>
            Bernoulli realizó experimentos con tubos de diferentes diámetros conectados, midiendo la altura del agua en tubos verticales (piezómetros) a lo largo del flujo. Observó que cuando el agua fluía más rápido (en secciones estrechas), la altura en los tubos era menor, demostrando la relación inversa entre velocidad y presión. Estos experimentos fueron revolucionarios porque cuantificaron por primera vez la energía en fluidos en movimiento.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚖️ Leonhard Euler y la formulación matemática</h3>
          <p>
            Aunque Bernoulli descubrió el principio, fue su contemporáneo Leonhard Euler quien en 1755 derivó matemáticamente la ecuación en su forma moderna usando cálculo diferencial. Euler generalizó el trabajo de Bernoulli y lo conectó con las leyes de Newton, estableciendo las bases de la mecánica de fluidos moderna. La ecuación que usamos hoy es realmente la "ecuación de Bernoulli-Euler".
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 Controversia con su padre</h3>
          <p>
            La relación entre Daniel y su padre Johann se deterioró cuando Daniel ganó el premio de la Academia de Ciencias de París en 1734, compartiéndolo con su padre. Johann, celoso, expulsó a Daniel de su casa y nunca más le habló. Incluso intentó minimizar los logros de su hijo publicando trabajos similares con fechas falsificadas. Esta rivalidad familiar es uno de los episodios más tristes en la historia de la ciencia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌊 Aplicación a la teoría cinética de gases</h3>
          <p>
            Bernoulli no solo trabajó en hidrodinámica. En "Hydrodynamica" también propuso la primera teoría cinética de gases, sugiriendo que la presión de un gas resulta del impacto de moléculas en movimiento contra las paredes del contenedor. Esta idea, adelantada más de un siglo a su tiempo, fue ignorada hasta que fue redescubierta en el siglo XIX por Maxwell y Boltzmann.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>✈️ Redescubrimiento en la era de la aviación</h3>
          <p>
            Aunque la ecuación de Bernoulli se conocía desde el siglo XVIII, su importancia práctica no fue plenamente apreciada hasta principios del siglo XX con el desarrollo de la aviación. Los hermanos Wright y otros pioneros de la aviación utilizaron túneles de viento y el principio de Bernoulli para diseñar perfiles aerodinámicos. En 1903, el primer vuelo motorizado validó experimentalmente las predicciones de Bernoulli sobre sustentación.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🏠 La cortina de ducha que se pega</h3>
          <p>
            ¿Por qué la cortina de ducha se pega a tu cuerpo cuando abres el agua caliente? Bernoulli lo explica: el agua cayendo arrastra aire hacia abajo, creando un flujo rápido cerca de la cortina. Este aire rápido tiene menor presión que el aire estático del otro lado, empujando la cortina hacia adentro. Es el mismo principio que mantiene a los aviones en el aire, pero en tu baño.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎈 El globo que no se cae</h3>
          <p>
            Si soplas aire entre dos globos colgantes, en lugar de separarse, se atraen. El aire rápido entre ellos crea baja presión (Bernoulli), mientras que el aire estático a los lados tiene presión normal, empujando los globos uno hacia el otro. Este experimento simple demuestra que la intuición puede engañarnos: esperamos que el aire los separe, pero Bernoulli dice lo contrario.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚂 El peligro de los trenes rápidos</h3>
          <p>
            Las estaciones de tren tienen líneas amarillas de seguridad por una razón relacionada con Bernoulli. Cuando un tren pasa a alta velocidad (200+ km/h), crea una zona de baja presión a su lado. La diferencia de presión puede ser de 2-3 kPa, suficiente para succionar a una persona hacia el tren. En 2008, un estudio en Japón midió fuerzas de hasta 300 N (equivalente a 30 kg empujando) en maniquíes cerca de trenes Shinkansen.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏐 La pelota de ping-pong flotante</h3>
          <p>
            Un experimento clásico: sopla aire hacia arriba y coloca una pelota de ping-pong en el chorro. La pelota flota establemente. Si intentas empujarla hacia un lado, vuelve al centro. ¿Por qué? El aire rápido en el centro tiene baja presión (Bernoulli). Si la pelota se desvía, un lado queda en aire lento (alta presión) que la empuja de vuelta. Es un equilibrio estable creado por diferencias de presión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌪️ Techos que vuelan en huracanes</h3>
          <p>
            Durante huracanes, los techos no son arrancados por el viento empujando desde arriba, sino succionados desde abajo. El viento rápido sobre el techo (150+ km/h) crea presión muy baja (efecto Bernoulli), mientras que el aire estático dentro de la casa mantiene presión normal. Esta diferencia puede generar fuerzas de 50,000 N en un techo típico, suficiente para arrancarlo. Por eso se recomienda abrir ventanas en huracanes: igualar presiones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🍷 El misterio del vino que no cae</h3>
          <p>
            Si viertes vino lentamente de una botella, el líquido puede "trepar" por el exterior en lugar de caer directamente. Este efecto, llamado "efecto Coandă", está relacionado con Bernoulli: el líquido que fluye pegado a la superficie crea baja presión que atrae más líquido. Es el mismo principio que permite a los helicópteros volar: el aire "se pega" a las palas del rotor debido a diferencias de presión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎪 El truco del papel y el libro</h3>
          <p>
            Coloca un papel sobre un libro y sopla horizontalmente entre ellos. En lugar de volar, el papel se pega al libro. Bernoulli explica: el aire rápido entre papel y libro tiene baja presión, mientras que el aire estático arriba del papel tiene presión normal, empujándolo hacia abajo. Este principio se usa en sistemas de manipulación industrial: ventosas neumáticas que sostienen objetos sin tocarlos, solo con flujo de aire.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            La ecuación de Bernoulli expresa la conservación de energía en fluidos: P + ½ρv² + ρgh = constante.
          </li>
          <li>
            Los tres términos representan energía de presión, energía cinética y energía potencial por unidad de volumen.
          </li>
          <li>
            Es válida para flujo estacionario, incompresible, no viscoso, a lo largo de una línea de corriente.
          </li>
          <li>
            La ecuación de continuidad (A₁v₁ = A₂v₂) complementa a Bernoulli, expresando conservación de masa.
          </li>
          <li>
            El teorema de Torricelli (v = √(2gh)) es un caso especial de Bernoulli para salida de líquidos.
          </li>
          <li>
            El tubo de Pitot mide velocidad de fluidos comparando presión de estancamiento y presión estática.
          </li>
          <li>
            La carga total (H = P/(ρg) + v²/(2g) + z) expresa Bernoulli en términos de altura, útil en hidráulica.
          </li>
          <li>
            Aplicaciones: sustentación de aviones, aerodinámica de vehículos, sistemas hidráulicos, atomizadores, ventilación.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Theory;
