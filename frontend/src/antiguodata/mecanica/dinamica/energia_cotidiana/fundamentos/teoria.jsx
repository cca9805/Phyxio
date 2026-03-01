import { Concept, Example, Formula, Important, TheorySection } from '../../../../../components/TheoryV2';

import { definitions as fundamentosDefinitions } from "./definitions.js";

export const metadata = {
  titulo: "Fundamentos de la Energía",
  descripcion: "Conceptos básicos sobre energía, transformaciones y eficiencia energética",
  isTheoryOnly: false,
  educationLevel: "ESO",
  levels: ['ESO']
};

const FundamentosTeoria = ({ exercises }) => {
  return (
    <TheorySection title="Fundamentos de la Energía" emoji="⚡" nivel="ESO">
      {/* Concepto 1: ¿Qué es la energía? */}
      <Concept title="¿Qué es la energía?" emoji="💡">
        <p>
          La energía es la capacidad de realizar trabajo o
          producir un cambio. Es una propiedad fundamental de la materia que se
          manifiesta de múltiples formas en nuestra vida diaria.
        </p>

        <h4>Formas de energía cotidianas:</h4>
        <ul>
          <li>
            ⚡ Energía eléctrica: Alimenta nuestros
            dispositivos electrónicos, electrodomésticos e iluminación
          </li>
          <li>
            🔥 Energía térmica: Calienta nuestros hogares y
            cocina nuestros alimentos
          </li>
          <li>
            🚗 Energía cinética: Permite el movimiento de
            vehículos y personas
          </li>
          <li>
            🍎 Energía química: Almacenada en alimentos y
            combustibles
          </li>
          <li>
            ☀️ Energía solar: Luz y calor del Sol que podemos
            aprovechar
          </li>
        </ul>
      </Concept>

      {/* Concepto 2: Transformaciones de energía */}
      <Concept title="Transformaciones de energía en casa" emoji="🔄">
        <p>
          Constantemente estamos transformando energía en nuestro entorno. Cada
          dispositivo que utilizamos convierte un tipo de energía en otro para
          realizar su función.
        </p>

        <h4>Ejemplos cotidianos:</h4>

        <div className="transformation-examples">
          <div className="transformation-card">
            <h5>💡 Bombilla</h5>
            <p>Eléctrica → Luminosa + Térmica</p>
            <p className="efficiency">Eficiencia LED: ~90% luz</p>
          </div>

          <div className="transformation-card">
            <h5>📱 Cargador de móvil</h5>
            <p>Eléctrica de red → Química (batería)</p>
            <p className="efficiency">Eficiencia: ~85%</p>
          </div>

          <div className="transformation-card">
            <h5>🏃 Corredor</h5>
            <p>Química (alimentos) → Cinética + Térmica</p>
            <p className="efficiency">Eficiencia muscular: ~25%</p>
          </div>

          <div className="transformation-card">
            <h5>☀️ Panel solar</h5>
            <p>Solar → Eléctrica</p>
            <p className="efficiency">Eficiencia: ~20%</p>
          </div>
        </div>

        <Example>
          Ruta de la energía en tu desayuno:
          <br />
          1. ☀️ Sol → cultivos (fotosíntesis)
          <br />
          2. 🌾 Energía química en alimentos
          <br />
          3. 🔥 Combustión en cocina (gas o electricidad)
          <br />
          4. 🍳 Energía térmica cocina los alimentos
          <br />
          5. 🍎 Tú consumes el alimento
          <br />
          6. 💪 Tu cuerpo convierte química → mecánica + térmica
        </Example>
      </Concept>

      {/* Concepto 3: Principio de conservación de energía */}
      <Concept title="Principio de conservación de la energía" emoji="⚖️">
        <Important>
          <p>
            Ley fundamental de la física:
          </p>
          <p style={{ fontSize: "1.2em", margin: "20px 0" }}>
            
              "La energía ni se crea ni se destruye, solo se transforma"
            
          </p>
          <p>
            Esta ley significa que la cantidad total de energía en un sistema
            cerrado permanece constante. La energía puede cambiar de una forma a
            otra, pero nunca desaparece ni aparece de la nada.
          </p>
        </Important>

        <Example>
          Péndulo: Conservación de energía mecánica
          <br />
          Un péndulo en movimiento demuestra perfectamente este principio:
          <br />• Punto más alto: Máxima energía potencial,
          velocidad = 0<br />• Bajando: Energía potencial →
          Energía cinética
          <br />• Punto más bajo: Máxima energía cinética,
          altura = 0<br />• Subiendo: Energía cinética →
          Energía potencial
          <br />
          
            E<sub>potencial</sub> + E<sub>cinética</sub> = constante
          {" "}
          (si ignoramos fricción)
        </Example>

        <Example>
          Montaña rusa: Energía en acción
          <br />• Subida inicial: Motor eléctrico aporta
          energía potencial gravitatoria
          <br />• Primera bajada: Energía potencial → Cinética
          (ganamos velocidad)
          <br />• Subidas siguientes: Cinética → Potencial
          (perdemos velocidad, ganamos altura)
          <br />• ¿Por qué no vuelve a la misma altura inicial?
          <br />
          - Fricción con el aire: Energía mecánica → Calor (se disipa)
          <br />
          - Fricción con raíles: Energía mecánica → Calor + Sonido
          <br />- Por eso la última colina siempre es más baja que la primera
        </Example>

        <h4>🌍 En el universo completo:</h4>
        <ul>
          <li>
            Toda la energía que existe hoy es la misma que había en el Big Bang
          </li>
          <li>
            Solo ha ido cambiando de forma: nuclear → luz → materia → química →
            térmica...
          </li>
          <li>
            La energía del Sol viene de fusión nuclear (masa → energía, E = mc²)
          </li>
          <li>
            Esa energía llegó a la Tierra como luz, creó plantas, se almacenó
            como petróleo...
          </li>
          <li>
            Ahora la usamos en coches, se transforma en movimiento y calor
          </li>
        </ul>

        <Important>
          Importante: Aunque la energía se conserva, su calidad no.
          El calor disperso en el ambiente es energía "degradada" que no podemos volver
          a usar eficientemente. Por eso decimos que "perdemos"
          energía, aunque técnicamente sigue existiendo.
        </Important>
      </Concept>

      {/* Concepto 4: Eficiencia energética */}
      <Concept title="Eficiencia energética" emoji="📊">
        <p>
          La eficiencia energética mide qué fracción de la energía que consumimos se aprovecha realmente para el objetivo deseado. Siempre hay pérdidas, generalmente en forma de calor.
        </p>

        <Formula
          expression="\eta = \frac{E_{\text{útil}}}{E_{\text{consumida}}} \times 100\%"
          calculatorId="eficiencia-energetica"
          definitions={fundamentosDefinitions}
          exercises={exercises}
        />

        <p>
          Donde:
        </p>
        <ul>
          <li>
            η: Eficiencia energética (en %)
          </li>
          <li>
            E_útil: Energía útil que obtenemos
          </li>
          <li>
            E_consumida: Energía total consumida
          </li>
        </ul>

        <h4>Comparativa de eficiencias:</h4>
        <table className="efficiency-table" style={{width: '100%'}}>
          <thead>
            <tr>
              <th>Dispositivo</th>
              <th>Eficiencia</th>
              <th>Pérdidas principales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>💡 Bombilla incandescente</td>
              <td>5%</td>
              <td>95% calor</td>
            </tr>
            <tr>
              <td>💡 Bombilla LED</td>
              <td>85-90%</td>
              <td>10-15% calor</td>
            </tr>
            <tr>
              <td>🔥 Caldera gas</td>
              <td>85-95%</td>
              <td>Gases de escape</td>
            </tr>
            <tr>
              <td>🚗 Motor gasolina</td>
              <td>20-30%</td>
              <td>70% calor y fricción</td>
            </tr>
            <tr>
              <td>🔋 Motor eléctrico</td>
              <td>85-95%</td>
              <td>Calor y fricción</td>
            </tr>
            <tr>
              <td>☀️ Panel solar</td>
              <td>15-22%</td>
              <td>Reflexión y calor</td>
            </tr>
          </tbody>
        </table>

        <Important>
          Mejorar la eficiencia energética es una de las formas más efectivas de
          reducir el consumo y el impacto ambiental. Pequeñas mejoras en
          eficiencia suponen grandes ahorros a largo plazo.
        </Important>

        <Example>
          Cambio de bombillas:
          <br />
          Una bombilla incandescente de 60W consume 60W pero solo produce 3W de
          luz (5% eficiencia).
          <br />
          Una LED de 8W produce la misma luz (equivalente a 60W incandescente)
          con 90% eficiencia.
          <br />
          Ahorro: 52W por bombilla = 86% menos consumo.
        </Example>
      </Concept>

      {/* Concepto 4: Ahorro con tecnología LED */}
      <Concept title="Iluminación LED: La revolución energética" emoji="💡">
        <p>
          Las bombillas LED (Light Emitting Diode) han revolucionado la
          iluminación doméstica por su altísima eficiencia energética y larga
          duración.
        </p>

        <h4>Ventajas de las LED:</h4>
        <ul>
          <li>
            ⚡ 80-90% menos consumo que bombillas
            incandescentes
          </li>
          <li>
            ⏱️ Duración: 25,000-50,000 horas (vs 1,000h
            incandescentes)
          </li>
          <li>
            🌡️ Menor calor: Son frías al tacto
          </li>
          <li>
            💰 Ahorro económico: Recuperas la inversión en
            meses
          </li>
          <li>
            ♻️ Ecológicas: Sin mercurio, menos residuos
          </li>
        </ul>

        <Formula
          expression="\text{Ahorro} = (P_{\text{incandescente}} - P_{\text{LED}}) \times h \times \text{días} \times \text{precio}"
          calculatorId="ahorro-bombilla-led"
          definitions={fundamentosDefinitions}
          exercises={exercises}
        />

        <p>
          Donde:
        </p>
        <ul>
          <li>
            P_incandescente: Potencia bombilla incandescente
            (W)
          </li>
          <li>
            P_LED: Potencia bombilla LED equivalente (W)
          </li>
          <li>
            h: Horas de uso diario
          </li>
          <li>
            días: Días al año de uso
          </li>
          <li>
            precio: Precio electricidad (€/kWh)
          </li>
        </ul>

        <Example>
          Caso real:
          <br />
          Familia con 10 bombillas de 60W usadas 5h/día:
          <br />• Incandescentes: 10 × 60W × 5h × 365 días =
          1,095 kWh/año
          <br />• LED (8W equivalentes): 10 × 8W × 5h × 365
          días = 146 kWh/año
          <br />• Ahorro: 949 kWh/año
          <br />• A 0.15 €/kWh: 142 €/año de ahorro
          <br />• Inversión LED: ~50€ (recuperada en 4 meses)
        </Example>

        <div className="led-comparison">
          <div className="bulb-card">
            <h5>💡 Incandescente</h5>
            <p>
              Potencia: 60W
            </p>
            <p>
              Luz útil: 3W
            </p>
            <p>
              Calor perdido: 57W
            </p>
            <p>
              Vida útil: 1,000h
            </p>
            <p>
              Coste 10 años: ~200€
            </p>
          </div>

          <div className="bulb-card highlight">
            <h5>💡 LED</h5>
            <p>
              Potencia: 8W
            </p>
            <p>
              Luz útil: 7W
            </p>
            <p>
              Calor perdido: 1W
            </p>
            <p>
              Vida útil: 25,000h
            </p>
            <p>
              Coste 10 años: ~30€
            </p>
          </div>
        </div>

        <Important>
          Al cambiar todas las bombillas de casa a LED, una familia media puede
          ahorrar entre 100-200€ al año en electricidad, además de reducir
          significativamente las emisiones de CO₂.
        </Important>
      </Concept>

      {/* Concepto 5: Etiquetas energéticas */}
      <Concept title="Etiquetas energéticas: Guía para comprar" emoji="🏷️">
        <p>
          Las etiquetas energéticas son obligatorias en
          electrodomésticos y proporcionan información clave sobre su consumo.
          Desde 2021, la escala va de A (más eficiente) a G (menos eficiente).
        </p>

        <h4>Información en la etiqueta:</h4>
        <ul>
          <li>
            📊 Clase energética: De A (verde) a G (rojo)
          </li>
          <li>
            ⚡ Consumo anual: En kWh/año
          </li>
          <li>
            💧 Consumo de agua: En litros/año (lavadoras,
            lavavajillas)
          </li>
          <li>
            🔊 Nivel de ruido: En decibelios (dB)
          </li>
          <li>
            📦 Capacidad: Litros, kg de carga, etc.
          </li>
        </ul>

        <div className="energy-label-guide">
          <div className="label-class a">
            A - Máxima eficiencia (verde oscuro)
          </div>
          <div className="label-class b">B - Muy eficiente (verde)</div>
          <div className="label-class c">C - Eficiente (verde claro)</div>
          <div className="label-class d">D - Medio (amarillo)</div>
          <div className="label-class e">E - Bajo (naranja)</div>
          <div className="label-class f">F - Muy bajo (naranja oscuro)</div>
          <div className="label-class g">G - Ineficiente (rojo)</div>
        </div>

        <Example>
          Comparación de frigoríficos:
          <br />• Modelo A: Clase A, 150 kWh/año → 22.5€/año (a
          0.15€/kWh)
          <br />• Modelo D: Clase D, 350 kWh/año → 52.5€/año
          <br />
          Diferencia: 30€/año × 15 años vida útil = 450€ de
          ahorro
          <br />
          Si el modelo A cuesta 100€ más, se amortiza en 3.3 años.
        </Example>

        <Important>
          Un electrodoméstico clase A puede costar más al comprarlo, pero ahorra
          mucho más dinero durante su vida útil. Además, reduce
          significativamente tu huella de carbono.
        </Important>

        <h4>Consejos de compra:</h4>
        <ul>
          <li>✅ Prioriza clase A o B siempre que sea posible</li>
          <li>✅ Calcula el ahorro a largo plazo, no solo el precio inicial</li>
          <li>✅ Ajusta el tamaño a tus necesidades reales</li>
          <li>
            ✅ Un electrodoméstico sobredimensionado consume más
            innecesariamente
          </li>
        </ul>
      </Concept>

      <div className="theory-applications-section">
        <h2>
          <span>🔧</span> Aplicaciones en la Vida Real
        </h2>
        
        <div className="theory-subsection">
          <h3>🏠 Hogares inteligentes</h3>
          <p>
            Los sistemas domóticos monitorizan el consumo energético en tiempo real, optimizando el uso de calefacción, iluminación y electrodomésticos. Un hogar inteligente puede reducir el consumo hasta un 30% apagando automáticamente dispositivos en standby, ajustando la temperatura según ocupación y aprovechando tarifas eléctricas más baratas en horas valle.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏭 Industria y cogeneración</h3>
          <p>
            Las plantas de cogeneración aprovechan el calor residual de la generación eléctrica para calefacción o procesos industriales, alcanzando eficiencias del 80-90% frente al 40% de centrales convencionales. Una fábrica con cogeneración puede reducir sus costes energéticos hasta un 40% reutilizando el calor que normalmente se desperdiciaría.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 Vehículos híbridos</h3>
          <p>
            Los coches híbridos recuperan energía durante el frenado (frenado regenerativo), convirtiéndola en electricidad para recargar la batería. Un motor de gasolina tiene 25% de eficiencia, pero un híbrido alcanza 35-40% al recuperar energía que normalmente se perdería como calor en los frenos. Esto se traduce en ahorros de combustible del 30-50% en ciudad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏢 Edificios de consumo casi nulo</h3>
          <p>
            Los edificios pasivos (Passivhaus) combinan aislamiento extremo, ventilación con recuperación de calor y orientación solar óptima, reduciendo el consumo de calefacción hasta un 90%. Un edificio pasivo consume menos de 15 kWh/m²/año en calefacción, frente a 100-200 kWh/m²/año de edificios convencionales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💾 Centros de datos eficientes</h3>
          <p>
            Los centros de datos consumen el 1% de la electricidad mundial. Google y Microsoft usan inteligencia artificial para optimizar la refrigeración, reduciendo el consumo hasta un 40%. Algunos centros aprovechan el calor residual para calentar edificios cercanos o invernaderos, convirtiendo un problema (calor) en una solución.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌾 Agricultura de precisión</h3>
          <p>
            Los sistemas de riego inteligente con sensores de humedad reducen el consumo de agua y energía de bombeo hasta un 50%. Los invernaderos con control climático automatizado optimizan temperatura, humedad y luz LED, produciendo más alimentos con menos energía. Un invernadero LED consume 70% menos que uno con iluminación tradicional.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        
        <div className="theory-subsection">
          <h3>🔥 Revolución del fuego (400,000 a.C.)</h3>
          <p>
            El control del fuego fue la primera gran revolución energética humana. Permitió cocinar alimentos (mejor digestión y nutrición), calentarse (supervivencia en climas fríos), protegerse de depredadores y trabajar de noche. La eficiencia era bajísima (menos del 10%), pero transformó completamente la evolución humana.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ Máquina de vapor (1769)</h3>
          <p>
            James Watt mejoró la máquina de vapor de Newcomen, aumentando su eficiencia del 1% al 3%. Aunque parezca poco, fue suficiente para iniciar la Revolución Industrial. Las primeras máquinas quemaban toneladas de carbón para producir poca energía útil, pero revolucionaron el transporte y la manufactura. Hoy, las turbinas de vapor alcanzan eficiencias del 40%.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💡 Bombilla incandescente (1879)</h3>
          <p>
            Thomas Edison comercializó la bombilla incandescente, transformando la iluminación mundial. Con solo 5% de eficiencia (95% se pierde como calor), era ineficiente pero revolucionaria. Durante 130 años fue el estándar hasta que las LED (2000s) la reemplazaron con 90% de eficiencia. Una LED moderna produce la misma luz que una incandescente usando 1/8 de la energía.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ Electrificación masiva (1882-1950)</h3>
          <p>
            La primera central eléctrica de Edison (1882) en Nueva York alimentaba 85 clientes. En 1950, el 90% de hogares estadounidenses tenían electricidad. La electrificación transformó la sociedad: iluminación nocturna, electrodomésticos, comunicaciones. La eficiencia de transmisión eléctrica mejoró del 40% al 95% actual gracias a transformadores y alta tensión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌍 Crisis del petróleo (1973)</h3>
          <p>
            La crisis energética de 1973 cuadruplicó el precio del petróleo, forzando a países a buscar eficiencia. Se establecieron los primeros estándares de eficiencia para coches y electrodomésticos. Japón y Europa lideraron la innovación en eficiencia energética. Un coche actual consume 50% menos combustible que uno de 1973 para el mismo rendimiento.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>♻️ Era de la sostenibilidad (1990-presente)</h3>
          <p>
            El Protocolo de Kioto (1997) y el Acuerdo de París (2015) impulsaron la eficiencia energética como herramienta contra el cambio climático. La Unión Europea estableció etiquetas energéticas obligatorias (1995) y prohibió bombillas incandescentes (2012). Hoy, la eficiencia energética es considerada la "primera fuente de energía" por su potencial de ahorro.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>💡 La bombilla centenaria</h3>
          <p>
            En el parque de bomberos de Livermore (California) hay una bombilla que lleva encendida desde 1901 (más de 120 años). Funciona a baja potencia (4W) y nunca se apaga, demostrando que las bombillas pueden durar eternamente si no se encienden y apagan constantemente. Tiene su propia webcam y millones de visitas. Irónicamente, las bombillas modernas se diseñaron con obsolescencia programada para durar menos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔋 El coste energético de Bitcoin</h3>
          <p>
            La red Bitcoin consume aproximadamente 150 TWh/año, más que países enteros como Argentina o Noruega. Una sola transacción de Bitcoin consume la misma energía que un hogar medio durante un mes. Los mineros buscan constantemente electricidad barata, instalándose cerca de centrales hidroeléctricas o usando energía renovable excedente. Esto ha generado debate sobre la sostenibilidad de las criptomonedas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏠 La casa más eficiente del mundo</h3>
          <p>
            La "Casa Activa" en Alemania produce más energía de la que consume (balance positivo). Con paneles solares, aislamiento extremo, ventanas triple acristalamiento y recuperación de calor, genera 4,000 kWh/año más de lo que usa. En invierno, el calor corporal de los habitantes y el de los electrodomésticos es suficiente para mantener 20°C sin calefacción. La familia vende el excedente eléctrico a la red.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 El récord de eficiencia en vehículos</h3>
          <p>
            En la competición Shell Eco-marathon, estudiantes diseñan vehículos ultra-eficientes. El récord es 3,771 km con un litro de gasolina (2019), equivalente a 0.026 litros/100km. Estos vehículos usan carrocerías aerodinámicas extremas, neumáticos de baja resistencia y motores optimizados. Aunque no son prácticos para uso diario, demuestran el potencial de la eficiencia energética.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ El standby invisible</h3>
          <p>
            Los dispositivos en standby (modo espera) consumen el 10% de la electricidad doméstica. Un televisor apagado pero enchufado consume 5-10W continuamente. En un hogar con 20 dispositivos en standby, esto suma 100-200W las 24 horas: 876-1,752 kWh/año (130-260€). Simplemente desenchufando dispositivos o usando regletas con interruptor, una familia puede ahorrar más de 200€/año.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌡️ El frigorífico que se paga solo</h3>
          <p>
            Un frigorífico antiguo (clase G) consume 600 kWh/año (90€/año a 0.15€/kWh). Uno moderno clase A consume 150 kWh/año (22.5€/año). El ahorro es 67.5€/año. Si el frigorífico nuevo cuesta 400€, se amortiza en 6 años. Como un frigorífico dura 15-20 años, el ahorro total es de 1,000-1,350€. Además, evita emitir 4.5 toneladas de CO₂ en su vida útil.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          La energía es la capacidad de realizar trabajo y se manifiesta en múltiples formas (eléctrica, térmica, cinética, química). 
          La energía se conserva pero se transforma constantemente. La eficiencia energética (η = E_útil/E_consumida × 100%) mide qué 
          fracción aprovechamos. Las tecnologías LED, electrodomésticos clase A y edificios eficientes pueden reducir el consumo hasta 
          un 80%, ahorrando dinero y reduciendo el impacto ambiental.
        </p>
      </div>
    </TheorySection>
  );
};

export default FundamentosTeoria;
