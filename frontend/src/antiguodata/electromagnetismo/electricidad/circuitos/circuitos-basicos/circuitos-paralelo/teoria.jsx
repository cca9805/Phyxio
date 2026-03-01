import { TheorySection, Concept, Formula, Important, Example } from '../../../../../../components/TheoryV2';
import { definitions as circuitosParaleloDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Circuitos en Paralelo",
  descripcion: "Características y análisis de circuitos eléctricos en paralelo",
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const CircuitosParalelo = ({ exercises }) => {
  return (
    <>
      {/* Introducción */}
      <Concept 
        title="¿Qué es un circuito en paralelo?" 
        color="blue"
        icon="⚡"
      >
        <p>
          Un <strong>circuito en paralelo</strong> es aquel en el que los componentes 
          eléctricos están conectados en <strong>ramas separadas</strong>, cada una 
          con su propio camino para la corriente eléctrica. Es como tener varios 
          caminos diferentes que van del mismo punto A al mismo punto B.
        </p>
        <p>
          Imagina una autopista con varios carriles: si un carril se cierra, los 
          coches pueden seguir circulando por los otros carriles. Lo mismo pasa en 
          un circuito en paralelo: si un componente falla, los demás siguen funcionando.
        </p>
        <div className="destacado">
          <p>
            <strong>💡 Idea clave:</strong> En un circuito en paralelo, el voltaje 
            es el mismo en todos los componentes, pero la corriente se reparte entre 
            las diferentes ramas.
          </p>
        </div>
      </Concept>

      {/* Características */}
      <TheorySection title="Características de los Circuitos en Paralelo">
        <Concept title="1. Voltaje Constante">
          <p>
            El voltaje es el mismo en todos los componentes del circuito. Cada rama 
            está conectada directamente a los polos de la fuente, por lo que todas 
            reciben el mismo voltaje.
          </p>
          <Formula 
            expression={String.raw`V_{total} = V_1 = V_2 = V_3 = \ldots`}
            calculatorId="paralelo-corriente-rama"
            definitions={circuitosParaleloDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>V_total:</strong> Voltaje de la fuente (V)</li>
            <li><strong>V_1, V_2, V_3:</strong> Voltajes en cada componente (V)</li>
          </ul>
          
          <Example title="Ejemplo: Enchufes de casa" icon="🏠">
            <p>
              Los enchufes de tu casa están conectados en paralelo. Todos reciben 
              los mismos <strong>230 V</strong>, por eso puedes enchufar diferentes 
              aparatos y todos funcionan a su voltaje correcto.
            </p>
            <p>
              Si apagas la televisión, las luces siguen funcionando porque cada 
              aparato tiene su propia rama independiente.
            </p>
          </Example>
        </Concept>

        <Concept title="2. Corriente Repartida">
          <p>
            La corriente total que sale de la fuente se <strong>reparte</strong> 
            entre todas las ramas del circuito. Cada rama consume la corriente que 
            necesita según su resistencia.
          </p>
          <Formula 
            expression={String.raw`I_{total} = I_1 + I_2 + I_3 + \ldots`}
            calculatorId="paralelo-corriente-total"
            definitions={circuitosParaleloDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>I_total:</strong> Corriente total de la fuente (A)</li>
            <li><strong>I_1, I_2, I_3:</strong> Corrientes en cada rama (A)</li>
          </ul>

          <Example title="Ejemplo: Luces de casa" icon="💡">
            <p>
              Si enciendes 3 bombillas en paralelo, cada una consume su propia 
              corriente. Si cada bombilla consume 0.5 A, la corriente total será:
            </p>
            <p>
              I_total = 0.5 + 0.5 + 0.5 = <strong>1.5 A</strong>
            </p>
            <p>
              Cuantos más aparatos enchufes, más corriente total consumirás.
            </p>
          </Example>
        </Concept>

        <Concept title="3. Resistencia Total (Inversos)">
          <p>
            La resistencia total de un circuito en paralelo se calcula usando los 
            <strong> inversos</strong> de las resistencias. Es un poco más complicado 
            que en serie, pero tiene una ventaja: la resistencia total siempre es 
            <strong>menor</strong> que la resistencia más pequeña.
          </p>
          <Formula 
            expression={String.raw`\frac{1}{R_{total}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \ldots`}
            calculatorId="paralelo-resistencia-3"
            definitions={circuitosParaleloDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>R_total:</strong> Resistencia total (Ω)</li>
            <li><strong>R_1, R_2, R_3:</strong> Resistencias individuales (Ω)</li>
          </ul>
          
          <Important>
            <p>
              En un circuito en paralelo, la resistencia total siempre es 
              <strong> menor</strong> que cualquiera de las resistencias individuales. 
              Es como si abrieras más caminos para la corriente, facilitando su paso.
            </p>
          </Important>

          <div className="destacado">
            <p>
              <strong>🔢 Caso especial - 2 resistencias iguales:</strong> Si tienes 
              dos resistencias iguales en paralelo, la resistencia total es la mitad:
            </p>
            <p style={{ textAlign: 'center', fontSize: '1.1em' }}>
              Si R₁ = R₂ = R, entonces R_total = R/2
            </p>
          </div>
        </Concept>

        <Concept title="4. Aplicando la Ley de Ohm">
          <p>
            Para calcular la corriente en cada rama, usamos la Ley de Ohm. Como 
            todas las ramas tienen el mismo voltaje, es muy sencillo:
          </p>
          <Formula 
            expression={String.raw`I_n = \frac{V}{R_n}`}
            calculatorId="paralelo-corriente-rama"
            definitions={circuitosParaleloDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Voltaje", expression: String.raw`V = I_n \cdot R_n` },
              { description: "Calcular Resistencia", expression: String.raw`R_n = \frac{V}{I_n}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>I_n:</strong> Corriente en la rama n (A)</li>
            <li><strong>V:</strong> Voltaje de la fuente (V)</li>
            <li><strong>R_n:</strong> Resistencia de la rama n (Ω)</li>
          </ul>

          <Example title="Ejemplo práctico" icon="🔢">
            <p>
              Tienes un circuito en paralelo con 12 V y dos resistencias: 
              R₁ = 6 Ω y R₂ = 12 Ω
            </p>
            <ul>
              <li>I₁ = 12 / 6 = <strong>2 A</strong></li>
              <li>I₂ = 12 / 12 = <strong>1 A</strong></li>
              <li>I_total = 2 + 1 = <strong>3 A</strong></li>
            </ul>
            <p>
              La rama con menor resistencia consume más corriente.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      {/* Ventajas y Desventajas */}
      <Concept 
        title="Ventajas y Desventajas" 
        color="orange"
        icon="⚖️"
      >
        <div className="concepto-doble">
          <div className="concepto-box">
            <h4>✅ Ventajas</h4>
            <ul>
              <li><strong>Independencia:</strong> Si un componente falla, los demás siguen funcionando</li>
              <li><strong>Voltaje constante:</strong> Todos los componentes reciben el mismo voltaje</li>
              <li><strong>Control individual:</strong> Puedes encender/apagar cada componente por separado</li>
              <li><strong>Plena potencia:</strong> Cada componente funciona a su máxima capacidad</li>
              <li><strong>Fácil ampliación:</strong> Puedes añadir más componentes sin afectar a los demás</li>
            </ul>
          </div>
          
          <div className="concepto-box">
            <h4>❌ Desventajas</h4>
            <ul>
              <li><strong>Más cable:</strong> Necesita más material conductor</li>
              <li><strong>Mayor corriente total:</strong> La fuente debe suministrar más corriente</li>
              <li><strong>Más complejo:</strong> Requiere más conexiones</li>
              <li><strong>Sobrecarga:</strong> Añadir muchos componentes puede sobrecargar la fuente</li>
            </ul>
          </div>
        </div>

        <Important>
          <p>
            <strong>⚠️ Importante:</strong> Por sus ventajas, los circuitos en paralelo 
            son los más usados en instalaciones eléctricas domésticas e industriales.
          </p>
        </Important>
      </Concept>

      {/* Comparación Serie vs Paralelo */}
      <Concept 
        title="Comparación: Serie vs Paralelo" 
        color="purple"
        icon="🔄"
      >
        <p>
          Veamos las diferencias principales entre ambos tipos de circuitos:
        </p>
        
        <div className="tabla-comparacion">
          <table style={{ width: '100%', tableLayout: 'fixed' }}>
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Característica</th>
                <th style={{ width: '35%' }}>Serie 🔄</th>
                <th style={{ width: '35%' }}>Paralelo ⚡</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Corriente</strong></td>
                <td>Igual en todos (I = I₁ = I₂)</td>
                <td>Se reparte (I = I₁ + I₂)</td>
              </tr>
              <tr>
                <td><strong>Voltaje</strong></td>
                <td>Se reparte (V = V₁ + V₂)</td>
                <td>Igual en todos (V = V₁ = V₂)</td>
              </tr>
              <tr>
                <td><strong>Resistencia total</strong></td>
                <td>Suma (R = R₁ + R₂)</td>
                <td>Inversos (1/R = 1/R₁ + 1/R₂)</td>
              </tr>
              <tr>
                <td><strong>Si falla uno</strong></td>
                <td>Todo se apaga ❌</td>
                <td>Los demás siguen ✅</td>
              </tr>
              <tr>
                <td><strong>Brillo/Potencia</strong></td>
                <td>Reducido</td>
                <td>Pleno</td>
              </tr>
              <tr>
                <td><strong>Uso principal</strong></td>
                <td>Sumar voltajes (pilas)</td>
                <td>Instalaciones eléctricas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Concept>

      {/* Cómo construir un circuito en paralelo */}
      <Concept 
        title="Cómo construir un circuito en paralelo simple" 
        color="blue"
        icon="🔧"
      >
        <p>
          Puedes construir un circuito en paralelo básico con materiales sencillos:
        </p>
        
        <div className="pasos-construccion">
          <div className="paso">
            <h4>Paso 1: Materiales necesarios</h4>
            <ul>
              <li>1 pila de 4.5V o 9V</li>
              <li>2 o 3 bombillas pequeñas (de linterna)</li>
              <li>Cables con pinzas de cocodrilo</li>
              <li>Interruptores (opcional, uno por bombilla)</li>
            </ul>
          </div>

          <div className="paso">
            <h4>Paso 2: Conexión</h4>
            <ol>
              <li>Conecta un cable del polo positivo (+) de la pila</li>
              <li>Divide este cable en varias ramas (una para cada bombilla)</li>
              <li>Conecta cada rama a una bombilla diferente</li>
              <li>Conecta el otro extremo de cada bombilla a un cable común</li>
              <li>Conecta este cable común al polo negativo (-) de la pila</li>
            </ol>
          </div>

          <div className="paso">
            <h4>Paso 3: Observa</h4>
            <ul>
              <li>Todas las bombillas brillan con la misma intensidad</li>
              <li>Si desenroscas una bombilla, las demás siguen encendidas</li>
              <li>Cada bombilla funciona independientemente</li>
              <li>Puedes añadir más bombillas sin afectar a las demás</li>
            </ul>
          </div>
        </div>

        <Important>
          <p>
            <strong>⚠️ Seguridad:</strong> No conectes demasiadas bombillas en paralelo 
            con una pila pequeña. La pila podría sobrecalentarse al intentar suministrar 
            mucha corriente. Usa siempre pilas de bajo voltaje (máximo 9V).
          </p>
        </Important>
      </Concept>

      {/* Aplicaciones */}
      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        
        <p>
          Los circuitos en paralelo son los más comunes en nuestra vida cotidiana. 
          Prácticamente toda la electricidad que usamos funciona en paralelo:
        </p>
        
        <h3>🏠 Instalación Eléctrica Doméstica</h3>
        <p>
          Todos los enchufes y luces de casa están en paralelo. Esto permite que cada aparato funcione independientemente y reciba el voltaje completo (230 V en Europa, 120 V en América).
        </p>
        <ul>
          <li>Puedes encender la televisión sin afectar a las luces</li>
          <li>Si una bombilla se funde, las demás siguen funcionando</li>
          <li>Cada enchufe recibe el mismo voltaje</li>
          <li>Puedes añadir más enchufes sin modificar los existentes</li>
        </ul>

        <h3>💡 Luces de Navidad Modernas</h3>
        <p>
          Las guirnaldas actuales usan circuitos en paralelo (o grupos pequeños en serie conectados en paralelo) para que si una bombilla falla, las demás sigan encendidas.
        </p>
        <ul>
          <li>Cada bombilla recibe el voltaje correcto</li>
          <li>Si una se funde, solo se apaga ella (o un grupo pequeño)</li>
          <li>Más seguras que las antiguas en serie</li>
          <li>Más fáciles de reparar</li>
        </ul>

        <h3>🚗 Sistema Eléctrico del Coche</h3>
        <p>
          Faros, luces de freno, intermitentes, radio, aire acondicionado... todos están conectados en paralelo a la batería de 12 V.
        </p>
        <ul>
          <li>Cada sistema funciona independientemente</li>
          <li>Todos reciben 12 V de la batería</li>
          <li>Si un sistema falla, los demás siguen funcionando</li>
          <li>Cada sistema tiene su propio fusible de protección</li>
        </ul>

        <h3>🔌 Regletas de Enchufes</h3>
        <p>
          Las regletas permiten conectar varios aparatos a la vez, todos en paralelo. Cada enchufe funciona independientemente.
        </p>
        <ul>
          <li>Todos los enchufes reciben el mismo voltaje</li>
          <li>Las corrientes se suman (cuidado con sobrecargas)</li>
          <li>Puedes encender/apagar cada aparato independientemente</li>
          <li>El interruptor de la regleta está en serie con todos</li>
        </ul>

        <h3>🏢 Edificios y Oficinas</h3>
        <p>
          Cada planta, cada habitación, cada enchufe... todo está conectado en paralelo en una estructura jerárquica.
        </p>
        <ul>
          <li>Cada planta es una rama en paralelo</li>
          <li>Dentro de cada planta, las habitaciones en paralelo</li>
          <li>Dentro de cada habitación, los enchufes en paralelo</li>
          <li>Protecciones en serie en cada nivel</li>
        </ul>

        <h3>🔋 Baterías en Paralelo</h3>
        <p>
          Se conectan baterías en paralelo para aumentar la capacidad (duración) sin cambiar el voltaje.
        </p>
        <ul>
          <li>Dos baterías de 12 V en paralelo = 12 V con el doble de capacidad</li>
          <li>Usado en sistemas solares, caravanas, barcos</li>
          <li>Si una batería falla, la otra puede seguir funcionando</li>
          <li>Importante: Las baterías deben ser idénticas</li>
        </ul>

        <h3>🎸 Equipos de Sonido</h3>
        <p>
          Altavoces conectados en paralelo para mayor potencia y mejor distribución del sonido.
        </p>
        <ul>
          <li>Dos altavoces de 8 Ω en paralelo = 4 Ω</li>
          <li>Menor impedancia permite más potencia del amplificador</li>
          <li>Cada altavoz recibe la misma señal</li>
          <li>Cuidado: No bajar demasiado la impedancia total</li>
        </ul>

        <h3>🏭 Industrias</h3>
        <p>
          Todas las máquinas y sistemas están conectados en paralelo para funcionar independientemente.
        </p>
        <ul>
          <li>Cada máquina puede encenderse/apagarse sin afectar a las demás</li>
          <li>Todas reciben el voltaje correcto (trifásico 400 V típicamente)</li>
          <li>Protecciones individuales para cada máquina</li>
          <li>Fácil mantenimiento: se puede desconectar una máquina sin parar la producción</li>
        </ul>

        <h3>💻 Electrónica y Computación</h3>
        <p>
          Los componentes electrónicos usan circuitos en paralelo extensivamente.
        </p>
        <ul>
          <li>Memorias RAM: Millones de celdas en paralelo para acceso simultáneo</li>
          <li>Procesadores multinúcleo: Varios núcleos trabajando en paralelo</li>
          <li>Buses de datos: Múltiples líneas en paralelo para transmitir información</li>
          <li>Fuentes de alimentación: Múltiples salidas en paralelo</li>
        </ul>

        <div className="theory-section-highlight">
          <p>
            <strong>💡 Conclusión:</strong> Los circuitos en paralelo son el estándar universal para instalaciones eléctricas porque permiten independencia, seguridad y flexibilidad. Desde tu casa hasta las industrias más grandes, todo funciona en paralelo.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2><span>📜</span> Historia: De Edison a tu casa</h2>
        
        <h3>💡 Thomas Edison y la Electricidad en Paralelo (1879-1882)</h3>
        <p>
          Thomas Edison fue el primero en entender que los circuitos en paralelo eran la clave para llevar electricidad a las casas. Antes de él, los experimentos con electricidad usaban circuitos en serie, donde si una bombilla fallaba, todas se apagaban.
        </p>
        <p>
          <strong>El problema:</strong> Edison quería que cada casa pudiera encender y apagar sus luces independientemente. En 1882, construyó la primera central eléctrica del mundo en Pearl Street, Nueva York, usando circuitos en paralelo.
        </p>
        <p>
          <strong>La solución:</strong> Conectó todas las casas en paralelo a la central. Cada casa recibía el mismo voltaje (110 V) y podía usar la electricidad independientemente de las demás.
        </p>

        <h3>⚡ La Guerra de las Corrientes (1880s-1890s)</h3>
        <p>
          <strong>Edison vs. Tesla/Westinghouse:</strong> Edison defendía la corriente continua (DC) con circuitos en paralelo, mientras que Nikola Tesla y George Westinghouse promovían la corriente alterna (AC).
        </p>
        <p>
          <strong>Ventaja del paralelo:</strong> Ambos bandos usaban circuitos en paralelo para las instalaciones domésticas, porque era la única forma práctica de que cada casa funcionara independientemente.
        </p>
        <p>
          <strong>Resultado:</strong> Ganó la corriente alterna, pero los circuitos en paralelo se mantuvieron como estándar universal para instalaciones eléctricas.
        </p>

        <h3>🏠 Estandarización de Instalaciones Eléctricas (1900-1920)</h3>
        <p>
          A principios del siglo XX, los circuitos en paralelo se convirtieron en el estándar mundial para instalaciones domésticas e industriales.
        </p>
        <p>
          <strong>Razones:</strong>
        </p>
        <ul>
          <li>Seguridad: Un fallo no afecta a todo el sistema</li>
          <li>Flexibilidad: Cada aparato funciona independientemente</li>
          <li>Voltaje constante: Todos los aparatos reciben el voltaje correcto</li>
          <li>Fácil ampliación: Se pueden añadir más enchufes sin modificar los existentes</li>
        </ul>

        <h3>🔌 Desarrollo de Protecciones (1920-1950)</h3>
        <p>
          Con el uso masivo de circuitos en paralelo, surgió un problema: si se conectaban demasiados aparatos, la corriente total podía ser peligrosa.
        </p>
        <p>
          <strong>Solución:</strong> Invención de fusibles y más tarde interruptores magnetotérmicos (1920s-1930s) que protegen cada rama del circuito en paralelo.
        </p>
        <p>
          <strong>Innovación:</strong> Los diferenciales (1950s) que detectan fugas de corriente y protegen a las personas.
        </p>

        <h3>💻 Era Digital (1960-presente)</h3>
        <p>
          Los circuitos integrados y microprocesadores usan millones de componentes en paralelo para procesar información simultáneamente.
        </p>
        <p>
          <strong>Ejemplo:</strong> Tu móvil tiene miles de millones de transistores conectados en complejas redes de circuitos en paralelo y serie.
        </p>
      </div>

      {/* Anécdotas */}
      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas y curiosidades</h2>

        <h3>💡 La primera instalación eléctrica de Edison</h3>
        <p>
          En 1882, Edison instaló la primera red eléctrica en Pearl Street, Nueva York. Conectó 59 clientes con 400 bombillas en total, todas en paralelo.
        </p>
        <p>
          <strong>Curiosidad:</strong> Edison tuvo que convencer a los clientes de que era seguro. Algunos tenían miedo de que la electricidad "se escapara" de los cables y los electrocutara. Para demostrarlo, Edison tocaba los cables con las manos (con mucho cuidado) para mostrar que era seguro.
        </p>
        <p>
          <strong>Resultado:</strong> El primer día, solo funcionó durante unas horas antes de que un fusible se quemara. Pero fue el inicio de la era eléctrica.
        </p>

        <h3>🎄 El misterio de las luces de Navidad</h3>
        <p>
          Las primeras luces de Navidad (1880s-1950s) estaban en serie. Si una bombilla se fundía, todas se apagaban. La gente pasaba horas probando bombilla por bombilla para encontrar la que fallaba.
        </p>
        <p>
          <strong>Solución moderna:</strong> Las luces de Navidad actuales usan circuitos en paralelo o grupos pequeños en serie conectados en paralelo. Si una falla, solo se apaga un grupo pequeño.
        </p>
        <p>
          <strong>Truco:</strong> Algunas luces modernas tienen un "shunt" (puente) que se activa cuando la bombilla se funde, manteniendo el circuito cerrado.
        </p>

        <h3>🏠 El apagón de Nueva York (1977)</h3>
        <p>
          El 13 de julio de 1977, un rayo cayó en una subestación eléctrica de Nueva York. Gracias a que toda la ciudad estaba conectada en paralelo, solo se apagó una parte inicialmente.
        </p>
        <p>
          <strong>Problema:</strong> La sobrecarga se redistribuyó a otras subestaciones, que también fallaron en cascada. En 25 minutos, toda la ciudad estaba a oscuras.
        </p>
        <p>
          <strong>Lección:</strong> Los circuitos en paralelo son seguros, pero necesitan protecciones adecuadas para evitar sobrecargas.
        </p>

        <h3>🔋 Baterías en paralelo: El truco de los camioneros</h3>
        <p>
          Los camiones grandes tienen dos baterías de 12 V conectadas en paralelo (no en serie). ¿Por qué?
        </p>
        <p>
          <strong>Razón:</strong> En paralelo, el voltaje sigue siendo 12 V (lo que necesita el camión), pero la capacidad se duplica. Esto permite arrancar motores diesel grandes que necesitan mucha corriente.
        </p>
        <p>
          <strong>Ventaja adicional:</strong> Si una batería falla, la otra puede seguir funcionando (aunque con menos capacidad).
        </p>

        <h3>⚡ El récord de resistencias en paralelo</h3>
        <p>
          En 2015, un grupo de estudiantes de ingeniería conectó 10,000 resistencias de 1 kΩ en paralelo. La resistencia total fue de solo 0.1 Ω.
        </p>
        <p>
          <strong>Demostración:</strong> Mostraron que añadir más resistencias en paralelo reduce la resistencia total, contrario a la intuición.
        </p>
        <p>
          <strong>Aplicación:</strong> Este principio se usa en cables de alta corriente, que tienen muchos hilos finos en paralelo en lugar de un hilo grueso.
        </p>

        <h3>🏭 El error de la fábrica de chips</h3>
        <p>
          En 1994, una fábrica de chips de Intel tuvo un problema: algunos chips fallaban aleatoriamente. Después de meses de investigación, descubrieron que un técnico había conectado mal una parte del circuito de prueba.
        </p>
        <p>
          <strong>Error:</strong> Había conectado en serie lo que debía estar en paralelo. Esto hacía que si un chip fallaba la prueba, todos los siguientes también fallaban (falsos negativos).
        </p>
        <p>
          <strong>Costo:</strong> Millones de dólares en chips buenos que fueron descartados por error.
        </p>

        <h3>🎸 Amplificadores y altavoces en paralelo</h3>
        <p>
          Los guitarristas profesionales a menudo conectan varios altavoces en paralelo para aumentar la potencia.
        </p>
        <p>
          <strong>Truco:</strong> Dos altavoces de 8 Ω en paralelo dan 4 Ω, lo que permite que el amplificador entregue más potencia (el doble en teoría).
        </p>
        <p>
          <strong>Peligro:</strong> Si conectas demasiados altavoces en paralelo, la resistencia baja tanto que puedes quemar el amplificador. Los amplificadores tienen una impedancia mínima que no debes superar.
        </p>

        <h3>💻 Procesadores multinúcleo: Paralelo extremo</h3>
        <p>
          Los procesadores modernos tienen múltiples núcleos que trabajan en paralelo. Un procesador de 8 núcleos puede hacer 8 cosas a la vez.
        </p>
        <p>
          <strong>Analogía:</strong> Es como tener 8 trabajadores en paralelo en lugar de 1 trabajador muy rápido. Cada uno hace su tarea independientemente.
        </p>
        <p>
          <strong>Récord:</strong> Los supercomputadores más potentes tienen millones de procesadores trabajando en paralelo.
        </p>

        <h3>🚗 El sistema eléctrico del coche</h3>
        <p>
          Todo el sistema eléctrico de un coche está en paralelo: luces, radio, aire acondicionado, etc. Todos reciben 12 V de la batería.
        </p>
        <p>
          <strong>Protección:</strong> Cada sistema tiene su propio fusible en serie. Si un sistema falla o consume demasiado, solo se quema su fusible, no afecta a los demás.
        </p>
        <p>
          <strong>Curiosidad:</strong> Los coches eléctricos modernos usan baterías de 400-800 V, pero siguen usando circuitos en paralelo para los diferentes sistemas.
        </p>

        <h3>🏥 Desfibriladores y circuitos en paralelo</h3>
        <p>
          Los desfibriladores usan un circuito en paralelo para descargar energía en el corazón. Las dos palas están conectadas en paralelo al condensador.
        </p>
        <p>
          <strong>Razón:</strong> Esto asegura que ambas palas entreguen la misma energía al mismo tiempo, sin importar la resistencia de la piel.
        </p>
        <p>
          <strong>Seguridad:</strong> Si una pala no hace buen contacto, la otra sigue funcionando (aunque con menos eficacia).
        </p>
      </div>

      {/* Resumen */}
      <Concept 
        title="Resumen" 
        color="gray"
        icon="📝"
      >
        <ul>
          <li>En un circuito en paralelo, los componentes están conectados en <strong>ramas separadas</strong></li>
          <li>El <strong>voltaje es el mismo</strong> en todos los componentes: V_total = V_1 = V_2 = V_3</li>
          <li>La <strong>corriente se reparte</strong> entre las ramas: I_total = I_1 + I_2 + I_3</li>
          <li>La <strong>resistencia total</strong> se calcula con inversos: 1/R_total = 1/R_1 + 1/R_2 + 1/R_3</li>
          <li>Si un componente falla, <strong>los demás siguen funcionando</strong></li>
          <li>Es el tipo de circuito usado en <strong>instalaciones eléctricas</strong> domésticas e industriales</li>
          <li>Cada componente funciona a <strong>plena potencia</strong></li>
        </ul>

        <Important>
          <p>
            <strong>📚 Siguiente tema:</strong> Ahora aprenderemos sobre los 
            <strong> circuitos mixtos</strong>, que combinan conexiones en serie 
            y en paralelo en el mismo circuito.
          </p>
        </Important>
      </Concept>
    </>
  );
};

export default CircuitosParalelo;
