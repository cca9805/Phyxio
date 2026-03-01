import { TheorySection, Concept, Formula, Important, Example } from '../../../../../../components/TheoryV2';
import { definitions as circuitosMixtosDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Circuitos Mixtos",
  descripcion: "Análisis de circuitos que combinan conexiones en serie y en paralelo",
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const CircuitosMixtos = ({ exercises }) => {
  return (
    <>
      {/* Introducción */}
      <Concept 
        title="¿Qué es un circuito mixto?" 
        color="blue"
        icon="🔀"
      >
        <p>
          Un <strong>circuito mixto</strong> (también llamado circuito combinado) 
          es aquel que tiene componentes conectados tanto en <strong>serie</strong> 
          como en <strong>paralelo</strong> en el mismo circuito. Es la combinación 
          de ambos tipos de conexiones.
        </p>
        <p>
          Los circuitos mixtos son muy comunes en la vida real. Por ejemplo, en tu 
          casa, los enchufes están en paralelo, pero cada enchufe puede tener un 
          interruptor en serie que lo controla.
        </p>
        <div className="destacado">
          <p>
            <strong>💡 Idea clave:</strong> Para analizar un circuito mixto, debemos 
            identificar qué partes están en serie y qué partes están en paralelo, 
            y luego aplicar las reglas correspondientes a cada sección.
          </p>
        </div>
      </Concept>

      {/* Cómo identificar serie y paralelo */}
      <Concept 
        title="Identificar conexiones serie y paralelo" 
        color="purple"
        icon="🔍"
      >
        <p>
          El primer paso para resolver un circuito mixto es identificar correctamente 
          qué componentes están en serie y cuáles en paralelo:
        </p>

        <div className="concepto-doble">
          <div className="concepto-box">
            <h4>🔄 Están en SERIE si:</h4>
            <ul>
              <li>Están conectados uno detrás de otro</li>
              <li>La corriente pasa por uno y luego por el otro</li>
              <li>No hay ramificaciones entre ellos</li>
              <li>Comparten el mismo cable sin divisiones</li>
            </ul>
          </div>
          
          <div className="concepto-box">
            <h4>⚡ Están en PARALELO si:</h4>
            <ul>
              <li>Están conectados en ramas separadas</li>
              <li>Tienen los mismos puntos de conexión (inicio y fin)</li>
              <li>La corriente se divide entre ellos</li>
              <li>Cada uno tiene su propio camino</li>
            </ul>
          </div>
        </div>

        <Example title="Ejemplo visual" icon="📐">
          <p>
            Imagina este circuito: Una pila conectada a una resistencia R₁, 
            luego a dos resistencias R₂ y R₃ en paralelo, y finalmente a una 
            resistencia R₄ antes de volver a la pila.
          </p>
          <ul>
            <li><strong>En serie:</strong> R₁, el grupo (R₂//R₃), y R₄</li>
            <li><strong>En paralelo:</strong> R₂ y R₃ entre sí</li>
          </ul>
        </Example>
      </Concept>

      {/* Método de resolución */}
      <TheorySection title="Método para Resolver Circuitos Mixtos">
        <Concept title="Paso 1: Simplificar el Paralelo">
          <p>
            Primero, identifica los componentes que están en paralelo y calcula 
            su resistencia equivalente usando la fórmula del paralelo:
          </p>
          <Formula 
            expression={String.raw`\frac{1}{R_{paralelo}} = \frac{1}{R_1} + \frac{1}{R_2} + \ldots`}
            calculatorId="mixto-resistencia-paralelo"
            definitions={circuitosMixtosDefinitions}
            exercises={exercises}
          />
          
          <p>
            Ahora puedes reemplazar ese grupo en paralelo por una sola resistencia 
            equivalente.
          </p>
        </Concept>

        <Concept title="Paso 2: Sumar las Resistencias en Serie">
          <p>
            Una vez simplificado el paralelo, te queda un circuito en serie. 
            Suma todas las resistencias (incluyendo la equivalente del paralelo):
          </p>
          <Formula 
            expression={String.raw`R_{total} = R_1 + R_{eq-paralelo} + R_3 + \ldots`}
            calculatorId="mixto-resistencia-total"
            definitions={circuitosMixtosDefinitions}
            exercises={exercises}
          />
        </Concept>

        <Concept title="Paso 3: Calcular la Corriente Total">
          <p>
            Con la resistencia total, calcula la corriente que sale de la fuente 
            usando la Ley de Ohm:
          </p>
          <Formula 
            expression={String.raw`I_{total} = \frac{V_{fuente}}{R_{total}}`}
            calculatorId="mixto-corriente-total"
            definitions={circuitosMixtosDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Voltaje Fuente", expression: String.raw`V_{fuente} = I_{total} \cdot R_{total}` },
              { description: "Calcular Resistencia Total", expression: String.raw`R_{total} = \frac{V_{fuente}}{I_{total}}` }
            ]}
          />
          
          <p>
            Esta corriente circula por todas las resistencias que están en serie 
            con la fuente.
          </p>
        </Concept>

        <Concept title="Paso 4: Calcular Voltajes y Corrientes Individuales">
          <p>
            Ahora puedes calcular el voltaje en cada componente y las corrientes 
            en las ramas paralelas:
          </p>
          
          <div className="formulas-grupo">
            <p><strong>Para componentes en serie:</strong></p>
            <Formula 
              expression={String.raw`V = I_{total} \times R`}
              calculatorId="mixto-voltaje-componente"
              definitions={circuitosMixtosDefinitions}
              exercises={exercises}
            />
            
            <p><strong>Para ramas en paralelo:</strong></p>
            <Formula 
              expression={String.raw`I_{rama} = \frac{V_{paralelo}}{R_{rama}}`}
              calculatorId="mixto-corriente-rama"
              definitions={circuitosMixtosDefinitions}
              exercises={exercises}
            />
          </div>
        </Concept>
      </TheorySection>

      {/* Ejemplo completo paso a paso */}
      <Concept 
        title="Ejemplo completo paso a paso" 
        color="green"
        icon="📝"
      >
        <p>
          <strong>Problema:</strong> Un circuito tiene una fuente de 12 V conectada 
          a una resistencia R₁ = 2 Ω en serie, luego a dos resistencias en paralelo 
          (R₂ = 6 Ω y R₃ = 12 Ω), y finalmente a otra resistencia R₄ = 1 Ω en serie. 
          Calcula la corriente total y el voltaje en cada resistencia.
        </p>

        <div className="solucion-paso-a-paso">
          <div className="paso-solucion">
            <h4>Paso 1: Simplificar el paralelo (R₂ y R₃)</h4>
            <p>1/R_eq = 1/6 + 1/12 = 0.1667 + 0.0833 = 0.25</p>
            <p>R_eq = 1/0.25 = <strong>4 Ω</strong></p>
          </div>

          <div className="paso-solucion">
            <h4>Paso 2: Sumar resistencias en serie</h4>
            <p>R_total = R₁ + R_eq + R₄</p>
            <p>R_total = 2 + 4 + 1 = <strong>7 Ω</strong></p>
          </div>

          <div className="paso-solucion">
            <h4>Paso 3: Calcular corriente total</h4>
            <p>I_total = V / R_total = 12 / 7 = <strong>1.71 A</strong></p>
            <p>Esta corriente pasa por R₁, el grupo paralelo, y R₄</p>
          </div>

          <div className="paso-solucion">
            <h4>Paso 4: Calcular voltajes en serie</h4>
            <p>V₁ = I_total × R₁ = 1.71 × 2 = <strong>3.42 V</strong></p>
            <p>V_paralelo = I_total × R_eq = 1.71 × 4 = <strong>6.84 V</strong></p>
            <p>V₄ = I_total × R₄ = 1.71 × 1 = <strong>1.71 V</strong></p>
            <p>Verificación: 3.42 + 6.84 + 1.71 ≈ 12 V ✓</p>
          </div>

          <div className="paso-solucion">
            <h4>Paso 5: Calcular corrientes en paralelo</h4>
            <p>I₂ = V_paralelo / R₂ = 6.84 / 6 = <strong>1.14 A</strong></p>
            <p>I₃ = V_paralelo / R₃ = 6.84 / 12 = <strong>0.57 A</strong></p>
            <p>Verificación: 1.14 + 0.57 = 1.71 A ✓</p>
          </div>
        </div>

        <Important>
          <p>
            <strong>🎯 Resumen del ejemplo:</strong> I_total = 1.71 A, 
            V₁ = 3.42 V, V₂ = V₃ = 6.84 V, V₄ = 1.71 V, 
            I₂ = 1.14 A, I₃ = 0.57 A
          </p>
        </Important>
      </Concept>

      {/* Consejos prácticos */}
      <Concept 
        title="Consejos para resolver circuitos mixtos" 
        color="red"
        icon="💡"
      >
        <div className="consejos-lista">
          <div className="consejo">
            <h4>1. Dibuja el circuito</h4>
            <p>
              Hacer un esquema claro te ayuda a visualizar las conexiones. 
              Marca con colores diferentes las partes en serie y en paralelo.
            </p>
          </div>

          <div className="consejo">
            <h4>2. Simplifica paso a paso</h4>
            <p>
              No intentes resolver todo de golpe. Simplifica primero los paralelos 
              más internos, luego los siguientes, hasta tener un circuito serie simple.
            </p>
          </div>

          <div className="consejo">
            <h4>3. Verifica tus resultados</h4>
            <p>
              Comprueba que la suma de voltajes en serie da el voltaje total, 
              y que la suma de corrientes en paralelo da la corriente total.
            </p>
          </div>

          <div className="consejo">
            <h4>4. Trabaja de fuera hacia dentro</h4>
            <p>
              Calcula primero la resistencia total y la corriente total. 
              Luego ve "entrando" en el circuito para calcular valores individuales.
            </p>
          </div>

          <div className="consejo">
            <h4>5. Usa unidades consistentes</h4>
            <p>
              Trabaja siempre en Ω, V y A. Si tienes kΩ o mA, conviértelos primero 
              para evitar errores.
            </p>
          </div>
        </div>
      </Concept>

      {/* Aplicaciones */}
      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        
        <p>
          Los circuitos mixtos son los más comunes en la vida real. Prácticamente cualquier instalación eléctrica combina conexiones en serie y en paralelo:
        </p>
        
        <h3>🏠 Instalación Doméstica</h3>
        <p>
          Tu casa es un circuito mixto complejo. Los enchufes están en paralelo para funcionar independientemente, pero cada circuito tiene protecciones en serie.
        </p>
        <ul>
          <li>Interruptor general en serie (controla toda la casa)</li>
          <li>Diferencial en serie (protege contra fugas)</li>
          <li>Magnetotérmicos en serie (protegen cada circuito)</li>
          <li>Enchufes en paralelo dentro de cada circuito</li>
          <li>Interruptores de luz en serie con cada bombilla</li>
        </ul>

        <h3>🚗 Sistema Eléctrico del Coche</h3>
        <p>
          El coche combina serie (fusibles y protecciones) con paralelo (todos los sistemas conectados a la batería).
        </p>
        <ul>
          <li>Batería conecta a todos los sistemas en paralelo (12 V para todos)</li>
          <li>Cada sistema tiene su fusible en serie (protección individual)</li>
          <li>Luces en paralelo, pero cada una con su interruptor en serie</li>
          <li>Radio, aire acondicionado, etc. en paralelo con sus controles en serie</li>
        </ul>

        <h3>💡 Luces con Interruptores</h3>
        <p>
          Varias luces en paralelo (para que funcionen independientemente), cada una con su interruptor en serie (para controlarla).
        </p>
        <ul>
          <li>Todas las luces reciben el mismo voltaje (paralelo)</li>
          <li>Cada interruptor controla solo su luz (serie)</li>
          <li>Si una luz se funde, las demás siguen funcionando</li>
          <li>Puedes encender/apagar cada luz independientemente</li>
        </ul>

        <h3>🔌 Regleta con Interruptor</h3>
        <p>
          Los enchufes están en paralelo (funcionan independientemente), pero todos controlados por un interruptor general en serie.
        </p>
        <ul>
          <li>Interruptor en serie controla toda la regleta</li>
          <li>Enchufes en paralelo entre sí</li>
          <li>Fusible o magnetotérmico en serie (protección)</li>
          <li>Cada aparato enchufado funciona independientemente</li>
        </ul>

        <h3>🎄 Luces de Navidad Avanzadas</h3>
        <p>
          Grupos pequeños de luces en serie (para reducir voltaje), conectados en paralelo entre sí (para independencia).
        </p>
        <ul>
          <li>Cada grupo de 10-20 luces en serie (reduce voltaje a cada LED)</li>
          <li>Grupos conectados en paralelo (si un grupo falla, los demás siguen)</li>
          <li>Más eficiente que todo en serie o todo en paralelo</li>
          <li>Permite usar LEDs de bajo voltaje con fuente de 230 V</li>
        </ul>

        <h3>🏢 Edificios Comerciales</h3>
        <p>
          Cada planta en paralelo (funcionan independientemente), pero con protecciones en serie en cada nivel.
        </p>
        <ul>
          <li>Interruptor general del edificio en serie</li>
          <li>Cada planta es una rama en paralelo</li>
          <li>Cada planta tiene su magnetotérmico en serie</li>
          <li>Dentro de cada planta, habitaciones en paralelo</li>
          <li>Cada habitación con su protección en serie</li>
        </ul>

        <div className="theory-section-highlight">
          <p>
            <strong>💡 Conclusión:</strong> Los circuitos mixtos son la norma en el mundo real. Combinan las ventajas de serie (control y protección) con las de paralelo (independencia y flexibilidad).
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2><span>📜</span> Historia: La evolución de los circuitos complejos</h2>
        
        <h3>⚡ Gustav Kirchhoff y las Leyes de Circuitos (1845)</h3>
        <p>
          El físico alemán Gustav Kirchhoff fue el primero en desarrollar un método sistemático para analizar circuitos complejos (mixtos) con sus famosas leyes.
        </p>
        <p>
          <strong>Ley de corrientes (nodos):</strong> La suma de corrientes que entran en un nodo es igual a la suma de las que salen. Esto es fundamental para analizar circuitos en paralelo.
        </p>
        <p>
          <strong>Ley de voltajes (mallas):</strong> La suma de voltajes en un circuito cerrado es cero. Esto es clave para analizar circuitos en serie.
        </p>
        <p>
          <strong>Impacto:</strong> Con estas dos leyes, Kirchhoff hizo posible analizar cualquier circuito, por complejo que fuera. Tenía solo 21 años cuando las publicó.
        </p>

        <h3>🔌 Desarrollo de Redes Eléctricas (1880-1920)</h3>
        <p>
          Con la expansión de la electricidad, los ingenieros necesitaban diseñar redes cada vez más complejas que combinaban serie y paralelo.
        </p>
        <p>
          <strong>Problema:</strong> Las primeras redes eléctricas eran caóticas. Cada ingeniero diseñaba a su manera, sin métodos estandarizados.
        </p>
        <p>
          <strong>Solución:</strong> Se desarrollaron métodos sistemáticos basados en las leyes de Kirchhoff para analizar y diseñar circuitos mixtos complejos.
        </p>

        <h3>📻 Era de la Radio y Electrónica (1920-1950)</h3>
        <p>
          Los circuitos de radio y los primeros dispositivos electrónicos usaban circuitos mixtos complejos con resistencias, condensadores y bobinas.
        </p>
        <p>
          <strong>Innovación:</strong> Los ingenieros desarrollaron "trucos" para simplificar circuitos mixtos, como el teorema de Thévenin y Norton.
        </p>

        <h3>💻 Circuitos Integrados (1958-presente)</h3>
        <p>
          Jack Kilby (Texas Instruments) y Robert Noyce (Intel) inventaron el circuito integrado, que contiene millones de componentes en serie y paralelo en un chip diminuto.
        </p>
        <p>
          <strong>Complejidad:</strong> Un procesador moderno tiene miles de millones de transistores conectados en circuitos mixtos extremadamente complejos.
        </p>

        <h3>🏠 Instalaciones Eléctricas Modernas (1950-presente)</h3>
        <p>
          Las instalaciones eléctricas domésticas e industriales modernas son circuitos mixtos complejos con múltiples niveles de protección.
        </p>
        <ul>
          <li>Interruptor general del edificio en serie</li>
          <li>Cada planta es una rama en paralelo</li>
          <li>Cada planta tiene su magnetotérmico en serie</li>
          <li>Dentro de cada planta, habitaciones en paralelo</li>
        </ul>
      </div>

      {/* Anécdotas */}
      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas y curiosidades</h2>

        <h3>🎓 Kirchhoff: El genio precoz</h3>
        <p>
          Gustav Kirchhoff publicó sus famosas leyes de circuitos cuando tenía solo 21 años, en 1845. Era todavía estudiante universitario.
        </p>
        <p>
          <strong>Curiosidad:</strong> Las leyes surgieron de su tesis doctoral. Su profesor pensó que eran "demasiado simples" para ser importantes. Hoy son fundamentales en ingeniería eléctrica.
        </p>

        <h3>🏠 El error del electricista novato</h3>
        <p>
          En 2010, un electricista novato instaló el sistema eléctrico de una casa nueva. Conectó todos los enchufes en serie en lugar de en paralelo.
        </p>
        <p>
          <strong>Resultado:</strong> Cuando los dueños enchufaban algo, el voltaje se repartía entre todos los enchufes. Si enchufaban una lámpara, recibía 230 V. Si enchufaban dos cosas, cada una recibía 115 V.
        </p>
        <p>
          <strong>Costo:</strong> Miles de euros y semanas de trabajo. Una lección cara sobre la importancia de entender circuitos mixtos.
        </p>

        <h3>🎄 Luces de Navidad: La evolución</h3>
        <p>
          Las luces de Navidad han evolucionado de serie puro a circuitos mixtos sofisticados.
        </p>
        <p>
          <strong>1880s-1950s:</strong> Serie puro. Si una se fundía, todas se apagaban.
        </p>
        <p>
          <strong>1960s-1990s:</strong> Grupos de 10-20 luces en serie, conectados en paralelo.
        </p>
        <p>
          <strong>2000s-presente:</strong> LEDs con circuitos mixtos complejos. Cada LED tiene su propio circuito de protección.
        </p>

        <h3>🚗 El sistema eléctrico del coche</h3>
        <p>
          Un coche moderno tiene más de 100 circuitos eléctricos diferentes, todos conectados en un circuito mixto complejo.
        </p>
        <p>
          <strong>Complejidad:</strong> Un coche de lujo puede tener más de 5 km de cables y 1000 conexiones. Todo debe funcionar perfectamente.
        </p>

        <h3>💡 El truco del divisor de voltaje</h3>
        <p>
          Los divisores de voltaje son circuitos mixtos simples pero increíblemente útiles. Se usan en millones de dispositivos.
        </p>
        <p>
          <strong>Aplicación sorprendente:</strong> Los joysticks de las consolas usan divisores de voltaje. Cuando mueves el stick, cambias la resistencia de un potenciómetro.
        </p>

        <h3>🏭 El apagón en cascada de 2003</h3>
        <p>
          El 14 de agosto de 2003, un apagón afectó a 50 millones de personas en EE.UU. y Canadá. Fue causado por un problema en un circuito mixto complejo.
        </p>
        <p>
          <strong>Lección:</strong> Los circuitos mixtos complejos necesitan protecciones redundantes. Un fallo en un punto puede propagarse si no está bien diseñado.
        </p>

        <h3>🔌 Regletas: El circuito mixto de tu escritorio</h3>
        <p>
          Una regleta con interruptor es un circuito mixto simple pero perfecto.
        </p>
        <p>
          <strong>Peligro común:</strong> Conectar demasiados aparatos. Los enchufes están en paralelo, así que las corrientes se suman.
        </p>
        <p>
          <strong>Regla de oro:</strong> No conectes más de 3000 W en una regleta estándar (230 V × 13 A ≈ 3000 W).
        </p>

        <h3>📱 Tu móvil: Millones de circuitos mixtos</h3>
        <p>
          Un smartphone moderno tiene miles de millones de transistores organizados en circuitos mixtos extremadamente complejos.
        </p>
        <p>
          <strong>Asombroso:</strong> Todo esto funciona con una batería de 3.7 V y consume solo unos pocos vatios. La eficiencia de los circuitos mixtos modernos es increíble.
        </p>

        <h3>🏥 Desfibriladores: Circuitos mixtos que salvan vidas</h3>
        <p>
          Los desfibriladores usan circuitos mixtos para entregar una descarga eléctrica controlada al corazón.
        </p>
        <p>
          <strong>Precisión:</strong> El circuito mixto permite entregar exactamente la energía necesaria (150-360 J) en el momento preciso.
        </p>
      </div>

      {/* Resumen */}
      <Concept 
        title="Resumen" 
        color="gray"
        icon="📝"
      >
        <ul>
          <li>Un <strong>circuito mixto</strong> combina conexiones en serie y en paralelo</li>
          <li>Para resolverlo: <strong>simplifica el paralelo</strong> primero, luego suma las series</li>
          <li>Calcula la <strong>corriente total</strong> con la resistencia total</li>
          <li>Usa la corriente total para calcular <strong>voltajes en serie</strong></li>
          <li>Usa los voltajes para calcular <strong>corrientes en paralelo</strong></li>
          <li>Siempre <strong>verifica</strong> que las sumas de voltajes y corrientes sean correctas</li>
          <li>Los circuitos mixtos son los <strong>más comunes</strong> en instalaciones reales</li>
        </ul>

        <Important>
          <p>
            <strong>🎓 Has completado Circuitos Básicos:</strong> Ahora conoces los 
            tres tipos fundamentales de circuitos eléctricos. Con estos conocimientos 
            puedes entender cómo funciona la electricidad en tu casa, en los coches, 
            y en la mayoría de dispositivos eléctricos.
          </p>
        </Important>
      </Concept>
    </>
  );
};

export default CircuitosMixtos;
