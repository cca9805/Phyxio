import { Concept, Important, Example } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "Diferencia entre Calor y Temperatura",
  descripcion: "Conceptos fundamentales: qué es el calor, qué es la temperatura y cómo se relacionan",
  educationLevel: "ESO",
  levels: ['ESO'],
  isTheoryOnly: true
};

const DiferenciaCalorTemperatura = () => {
  return (
    <>
      {/* Introducción */}
      <Concept 
        title="¿Son lo mismo calor y temperatura?" 
        color="blue"
        icon="❓"
      >
        <p>
          En el lenguaje cotidiano usamos "calor" y "temperatura" como sinónimos: 
          "hace mucho calor hoy" o "la temperatura está alta". Pero en física, 
          <strong> son conceptos completamente diferentes</strong>.
        </p>
        <div className="destacado">
          <p>
            <strong>💡 Diferencia clave:</strong> La <strong>temperatura</strong> mide qué tan 
            caliente o frío está algo. El <strong>calor</strong> es la energía que se transfiere 
            de un cuerpo caliente a uno frío.
          </p>
        </div>
      </Concept>

      {/* ¿Qué es la temperatura? */}
      <Concept 
        title="¿Qué es la temperatura?" 
        color="purple"
        icon="🌡️"
      >
        <p>
          La <strong>temperatura</strong> es una medida de qué tan agitadas están las moléculas 
          de un material. Cuanto más rápido se mueven las moléculas, mayor es la temperatura.
        </p>

        <div className="info-box">
          <h3>Características de la temperatura</h3>
          <ul>
            <li><strong>Se mide con termómetros</strong> en grados Celsius (°C), Kelvin (K) o Fahrenheit (°F)</li>
            <li><strong>Es una propiedad</strong> del objeto: cada cosa tiene su temperatura</li>
            <li><strong>No depende del tamaño:</strong> una taza de café y una piscina pueden estar a la misma temperatura</li>
            <li><strong>Indica dirección del flujo de calor:</strong> el calor va de mayor a menor temperatura</li>
          </ul>
        </div>

        <p><strong>Escalas de temperatura más comunes:</strong></p>
        <ul>
          <li><strong>Celsius (°C):</strong> Agua se congela a 0°C y hierve a 100°C</li>
          <li><strong>Kelvin (K):</strong> Escala científica, 0 K = -273.15°C (cero absoluto)</li>
          <li><strong>Fahrenheit (°F):</strong> Usada en EE.UU., agua se congela a 32°F y hierve a 212°F</li>
        </ul>
      </Concept>

      {/* ¿Qué es el calor? */}
      <Concept 
        title="¿Qué es el calor?" 
        color="red"
        icon="🔥"
      >
        <p>
          El <strong>calor</strong> es la energía que se transfiere entre dos cuerpos que están 
          a diferente temperatura. Siempre fluye del cuerpo más caliente al más frío, nunca al revés.
        </p>

        <div className="info-box">
          <h3>Características del calor</h3>
          <ul>
            <li><strong>Es energía en movimiento:</strong> no es una propiedad, es un proceso</li>
            <li><strong>Se mide en julios (J)</strong> o calorías (cal)</li>
            <li><strong>Depende de la cantidad de materia:</strong> calentar una piscina requiere más calor que una taza</li>
            <li><strong>Fluye espontáneamente:</strong> de caliente a frío, nunca al revés (sin ayuda externa)</li>
          </ul>
        </div>

        <Important>
          <p>
            <strong>🔑 Concepto clave:</strong> El calor NO es algo que "tiene" un objeto. 
            Es energía que se <strong>transfiere</strong> entre objetos. Cuando decimos "hace calor", 
            realmente queremos decir "la temperatura es alta".
          </p>
        </Important>
      </Concept>

      {/* Comparación directa */}
      <Concept 
        title="Comparación: Temperatura vs Calor" 
        color="green"
        icon="⚖️"
      >
        <table style={{width: '100%', borderCollapse: 'collapse', margin: '1em 0'}}>
          <thead>
            <tr style={{borderBottom: '2px solid #ddd'}}>
              <th style={{padding: '0.5em', textAlign: 'left'}}>Aspecto</th>
              <th style={{padding: '0.5em', textAlign: 'center'}}>Temperatura</th>
              <th style={{padding: '0.5em', textAlign: 'center'}}>Calor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{padding: '0.5em'}}><strong>¿Qué es?</strong></td>
              <td style={{padding: '0.5em'}}>Medida de agitación molecular</td>
              <td style={{padding: '0.5em'}}>Energía en transferencia</td>
            </tr>
            <tr>
              <td style={{padding: '0.5em'}}><strong>Unidades</strong></td>
              <td style={{padding: '0.5em'}}>°C, K, °F</td>
              <td style={{padding: '0.5em'}}>Julios (J), calorías (cal)</td>
            </tr>
            <tr>
              <td style={{padding: '0.5em'}}><strong>Instrumento</strong></td>
              <td style={{padding: '0.5em'}}>Termómetro</td>
              <td style={{padding: '0.5em'}}>Calorímetro</td>
            </tr>
            <tr>
              <td style={{padding: '0.5em'}}><strong>Depende del tamaño</strong></td>
              <td style={{padding: '0.5em'}}>NO</td>
              <td style={{padding: '0.5em'}}>SÍ</td>
            </tr>
            <tr>
              <td style={{padding: '0.5em'}}><strong>Ejemplo</strong></td>
              <td style={{padding: '0.5em'}}>El café está a 80°C</td>
              <td style={{padding: '0.5em'}}>El café transfiere calor al aire</td>
            </tr>
          </tbody>
        </table>
      </Concept>

      {/* Equilibrio térmico */}
      <Concept 
        title="Equilibrio térmico" 
        color="teal"
        icon="⚖️"
      >
        <p>
          Cuando dos objetos a diferente temperatura se ponen en contacto, el calor fluye 
          del más caliente al más frío hasta que ambos alcanzan la misma temperatura. 
          En ese momento se dice que están en <strong>equilibrio térmico</strong>.
        </p>

        <div className="ejemplo-visual">
          <p><strong>Ejemplo: Café con leche</strong></p>
          <ol>
            <li><strong>Inicio:</strong> Café a 90°C, leche a 5°C</li>
            <li><strong>Mezcla:</strong> El calor fluye del café (caliente) a la leche (fría)</li>
            <li><strong>Equilibrio:</strong> Ambos alcanzan una temperatura intermedia (~50°C)</li>
            <li><strong>Resultado:</strong> Ya no hay transferencia de calor, están en equilibrio</li>
          </ol>
        </div>

        <Important>
          <p>
            <strong>⚠️ Importante:</strong> En el equilibrio térmico, las temperaturas son iguales, 
            pero eso NO significa que cada sustancia haya recibido la misma cantidad de calor.
          </p>
        </Important>
      </Concept>

      {/* Ejemplos cotidianos */}
      <Concept 
        title="Ejemplos de la vida diaria" 
        color="orange"
        icon="🏠"
      >
        <div className="ejemplos-grid">
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">☕</span>
            <p>
              <strong>Café enfriándose:</strong> El café (alta temperatura) transfiere calor 
              al aire (baja temperatura) hasta alcanzar temperatura ambiente.
            </p>
          </div>
          
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🧊</span>
            <p>
              <strong>Bebida con hielo:</strong> El hielo (0°C) absorbe calor de la bebida 
              (20°C), derritiéndose y enfriando la bebida.
            </p>
          </div>
          
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🌡️</span>
            <p>
              <strong>Termómetro médico:</strong> Mide tu temperatura corporal (37°C) cuando 
              alcanza equilibrio térmico contigo.
            </p>
          </div>

          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🍳</span>
            <p>
              <strong>Cocinar un huevo:</strong> La sartén (alta temperatura) transfiere calor 
              al huevo (baja temperatura), cocinándolo.
            </p>
          </div>

          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🏖️</span>
            <p>
              <strong>Arena de playa:</strong> Puede estar a 60°C (alta temperatura), pero 
              tiene poca masa, así que transfiere poco calor a tus pies.
            </p>
          </div>

          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🌊</span>
            <p>
              <strong>Mar en verano:</strong> Está a 25°C (temperatura moderada), pero tiene 
              mucha masa, así que puede absorber mucho calor del Sol.
            </p>
          </div>
        </div>
      </Concept>

      {/* Ejemplo práctico */}
      <Example 
        title="Ejemplo: ¿Por qué el metal se siente más frío que la madera?"
        problem="En una habitación a 20°C, tocas una mesa de metal y una de madera. El metal se siente mucho más frío, aunque ambos están a la misma temperatura. ¿Por qué?"
        solution={
          <div style={{color: '#1f2937'}}>
            <p><strong>Explicación:</strong></p>
            <p>
              Ambas mesas están a 20°C (misma temperatura), pero tu mano está a 37°C. 
              Cuando las tocas, tu mano transfiere calor a las mesas.
            </p>
            
            <ul>
              <li>
                <strong>Metal:</strong> Es buen conductor térmico. Absorbe el calor de tu mano 
                muy rápidamente, haciendo que tu piel se enfríe rápido. Por eso se siente frío.
              </li>
              <li>
                <strong>Madera:</strong> Es mal conductor (aislante). Absorbe el calor de tu mano 
                muy lentamente, así que tu piel mantiene su temperatura. Por eso se siente templada.
              </li>
            </ul>

            <p><strong>Conclusión:</strong></p>
            <p>
              La sensación de "frío" o "caliente" no depende solo de la temperatura del objeto, 
              sino también de la <strong>velocidad</strong> con que transfiere calor.
            </p>
          </div>
        }
      />

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>Climatización de edificios: Control térmico eficiente</h3>
          <p>
            Los sistemas de climatización modernos (HVAC) en edificios residenciales y comerciales utilizan principios fundamentales de temperatura y transferencia de calor para mantener el confort térmico. Un sistema típico residencial tiene una potencia de 3 a 5 kW y emplea termostatos digitales con precisión de ±0.5°C que monitorean constantemente la temperatura ambiente.
          </p>
          <p>
            El rango de confort térmico para humanos está entre 18°C y 24°C. Cuando la temperatura interior está fuera de este rango, el sistema activa intercambiadores de calor o bombas de calor con eficiencia COP (Coefficient of Performance) de 3 a 4, lo que significa que por cada unidad de energía eléctrica consumida, transfieren 3 a 4 unidades de energía térmica.
          </p>
          <p>
            El aislamiento térmico es crucial: materiales como el poliuretano con conductividad térmica λ=0.022 W/(m·K) minimizan el flujo de calor a través de paredes y techos, reduciendo las pérdidas energéticas en un 30-40%. Los edificios pasivos (estándar Passivhaus) optimizan tanto el aislamiento que su demanda de calefacción es inferior a 15 kWh/m²·año, representando un ahorro energético significativo comparado con edificios convencionales que consumen 100-200 kWh/m²·año.
          </p>
        </div>
        
        <div className="theory-subsection">
          <h3>Industria alimentaria: Procesado térmico de productos</h3>
          <p>
            La pasteurización de leche es un ejemplo clásico de control preciso de temperatura y tiempo. El tratamiento HTST (High Temperature Short Time) consiste en calentar la leche a 72°C durante exactamente 15 segundos, temperatura suficiente para eliminar patógenos como Listeria y Salmonella sin alterar significativamente las propiedades nutricionales.
          </p>
          <p>
            Este proceso utiliza intercambiadores de calor de placas de acero inoxidable con áreas de contacto de 10 a 50 m², donde la leche fluye en láminas delgadas para maximizar la transferencia de calor. Inmediatamente después, la leche se enfría rápidamente a 4°C para mantener la cadena de frío y conservar el producto.
          </p>
          <p>
            La esterilización UHT (Ultra High Temperature) va más allá: calienta la leche a 135-150°C durante solo 2 a 5 segundos, temperatura suficiente para destruir esporas de bacterias como Clostridium botulinum. Esto permite una vida útil de 6 a 12 meses a temperatura ambiente sin refrigeración. La diferencia clave está en que la temperatura más alta permite tiempos más cortos, preservando mejor el sabor y nutrientes mientras garantiza la seguridad alimentaria.
          </p>
        </div>
        
        <div className="theory-subsection">
          <h3>Electrónica: Disipación de calor en dispositivos semiconductores</h3>
          <p>
            Los procesadores modernos como el Intel Core i9 tienen un TDP (Thermal Design Power) de 125 a 250W, generando una cantidad masiva de calor concentrado en una superficie muy pequeña (aproximadamente 1-2 cm²). Sin refrigeración adecuada, estos chips alcanzarían temperaturas superiores a 100°C en segundos, causando daños permanentes.
          </p>
          <p>
            Los disipadores de calor fabricados en aluminio (conductividad térmica 205 W/(m·K)) o cobre (400 W/(m·K)) transfieren eficientemente este calor desde el chip hacia el ambiente. La pasta térmica aplicada entre el chip y el disipador tiene conductividad de 0.8 a 8.5 W/(m·K), rellenando microscópicas imperfecciones de la superficie para reducir la resistencia térmica del contacto.
          </p>
          <p>
            Los sistemas de refrigeración líquida AIO (All-In-One) con radiadores de 240 a 360 mm y convección forzada mediante ventiladores a 1200-2500 RPM mantienen la temperatura del procesador por debajo de 85°C, umbral donde los procesadores modernos activan el "throttling" (reducción automática de frecuencia) para proteger los componentes. Esta gestión térmica es esencial para mantener el rendimiento y la longevidad del hardware.
          </p>
        </div>
        
        <div className="theory-subsection">
          <h3>Medicina: Termometría clínica y diagnóstico febril</h3>
          <p>
            La medición precisa de la temperatura corporal es fundamental en el diagnóstico médico. Los termómetros digitales modernos, especialmente los infrarrojos timpánicos (de oído), ofrecen un tiempo de respuesta de 1 a 3 segundos y miden temperaturas corporales en el rango de 35°C a 42°C con precisión de ±0.1°C. La fiebre se define generalmente como una temperatura superior a 38°C.
          </p>
          <p>
            Los termómetros de mercurio tradicionales, aunque muy precisos, requerían 3 a 5 minutos de contacto axilar, oral o rectal para alcanzar el equilibrio térmico con el cuerpo. Los modernos sensores digitales utilizan termistores o sensores infrarrojos que detectan la radiación térmica emitida por el tímpano, cuya temperatura refleja fielmente la temperatura interna del cuerpo.
          </p>
          <p>
            Durante la pandemia de COVID-19, la termografía infrarroja mediante cámaras térmicas FLIR con resolución de 320×240 píxeles se utilizó ampliamente para el screening masivo en aeropuertos y fronteras. Estas cámaras miden la temperatura superficial de la piel, correlacionándola con la temperatura interna para detectar posibles casos febriles asintomáticos, permitiendo evaluar múltiples personas simultáneamente a distancia.
          </p>
        </div>
        
        <div className="theory-subsection">
          <h3>Astronomía: Medición de temperatura estelar por espectroscopía</h3>
          <p>
            La temperatura de las estrellas se determina mediante la Ley de Wien, que relaciona la temperatura de un cuerpo negro con la longitud de onda de máxima emisión: λmax = 2.898×10⁻³/T. El Sol, con una temperatura superficial de 5778 K, tiene su emisión máxima en 502 nm (luz verde-amarilla), razón por la cual lo percibimos amarillo.
          </p>
          <p>
            Las estrellas tipo O, las más calientes con temperaturas de 30,000 a 50,000 K, emiten principalmente radiación ultravioleta y se ven azules. Las enanas rojas tipo M, las más frías y comunes del universo, tienen temperaturas de 2300 a 3800 K y emiten principalmente en el infrarrojo cercano, apareciendo rojas o anaranjadas.
          </p>
          <p>
            La energía térmica interior de las estrellas es aún más extrema: el núcleo solar alcanza aproximadamente 15 millones de grados Kelvin, donde ocurre la fusión nuclear que convierte hidrógeno en helio. Esta energía se transfiere hacia la superficie mediante zonas de convección y radiativa, procesos que toman cientos de miles de años. La relación entre temperatura y color de las estrellas es la base de la clasificación espectral (OBAFGKM), herramienta fundamental en astrofísica.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        <div className="theory-subsection">
          <h3>Siglo XVIII: La confusa teoría del calórico como sustancia fluida</h3>
          <p>
            Durante el siglo XVIII, los científicos creían que el calor era una sustancia material llamada "calórico", un fluido invisible e imponderable (sin peso) que permeaba toda la materia. Antoine Lavoisier, en la década de 1780, fue uno de los principales proponentes de esta teoría, postulando que el calórico se conservaba: la cantidad total en el universo era constante.
          </p>
          <p>
            Según esta teoría, la temperatura de un cuerpo era simplemente una medida de la concentración de calórico en él: más calórico significaba mayor temperatura. Cuando dos cuerpos se ponían en contacto, el calórico fluía del que tenía más concentración al que tenía menos, hasta que ambos alcanzaban el mismo nivel.
          </p>
          <p>
            Esta teoría fue dominante hasta que Benjamin Thompson (Conde de Rumford) realizó experimentos cruciales en 1798. Mientras supervisaba la perforación de cañones en Múnich, observó que la fricción mecánica generaba cantidades aparentemente indefinidas de calor. Si el calórico fuera una sustancia conservada, debería agotarse eventualmente, pero el calor seguía produciéndose mientras continuara el trabajo mecánico. Esto contradecía fundamentalmente la teoría del calórico y demostró que el calor era una forma de energía, no una sustancia material. Esta observación marcó una revolución conceptual en la termodinámica.
          </p>
        </div>
        
        <div className="theory-subsection">
          <h3>1840s-1850s: La equivalencia mecánica del calor según Joule</h3>
          <p>
            James Prescott Joule, un cervecero inglés y físico autodidacta, realizó entre 1843 y 1850 una serie de experimentos meticulosos que demostraron definitivamente la equivalencia entre trabajo mecánico y calor. Su experimento más famoso involucraba un sistema de pesas que caían y hacían girar unas paletas sumergidas en agua dentro de un recipiente aislado térmicamente.
          </p>
          <p>
            Midiendo con termómetros de extraordinaria precisión (0.005°F), Joule determinó que el trabajo mecánico realizado por las pesas al caer siempre producía la misma cantidad de calor en el agua: aproximadamente 4.184 julios de trabajo producían el calor necesario para elevar la temperatura de 1 gramo de agua en 1°C (1 caloría). Esta relación, conocida como el equivalente mecánico del calor, fue reproducida durante más de 40 años de investigación.
          </p>
          <p>
            Este trabajo estableció la Primera Ley de la Termodinámica: la energía se conserva, pudiendo transformarse entre formas mecánicas y térmicas pero nunca crearse o destruirse. La unidad del Sistema Internacional para energía, el "julio", fue nombrada en su honor, reconociendo su contribución fundamental a la unificación de la mecánica y la termodinámica.
          </p>
        </div>
        
        <div className="theory-subsection">
          <h3>Siglo XIX: La teoría cinética de gases de Boltzmann y Maxwell</h3>
          <p>
            En la década de 1870, Ludwig Boltzmann estableció la relación microscópica fundamental entre temperatura y energía cinética molecular. Para un gas ideal, demostró que la energía cinética promedio de las moléculas está directamente relacionada con la temperatura absoluta mediante la ecuación Ek = (3/2)kBT, donde kB = 1.381×10⁻²³ J/K es la constante de Boltzmann.
          </p>
          <p>
            Paralelamente, James Clerk Maxwell desarrolló la distribución estadística de velocidades moleculares en un gas, mostrando cómo la temperatura y presión determinan la distribución de velocidades de las partículas. Esta teoría microscópica proporcionó una fundamentación física profunda al concepto de temperatura: no es más que una medida de la agitación térmica promedio de las partículas que componen la materia.
          </p>
          <p>
            El equilibrio térmico entre dos sistemas se comprende ahora como la igualdad de las energías cinéticas promedias de sus moléculas. Cuando dos gases a diferentes temperaturas se ponen en contacto, las colisiones moleculares en la interfaz transfieren energía hasta que ambos sistemas alcanzan la misma temperatura. Esta teoría cinética-molecular se convirtió en la base de la física estadística y la termodinámica clásica moderna.
          </p>
        </div>
        
        <div className="theory-subsection">
          <h3>Siglo XX: Desarrollo de termometría y estándares internacionales ITS-90</h3>
          <p>
            En 1990, la comunidad científica internacional adoptó la Escala Internacional de Temperatura ITS-90 (International Temperature Scale), que define puntos fijos basados en transiciones de fase de sustancias puras altamente reproducibles. El punto de referencia fundamental es el punto triple del agua a 273.16 K (0.01°C), donde coexisten simultáneamente hielo, agua líquida y vapor en equilibrio.
          </p>
          <p>
            Los termómetros de resistencia de platino estándar (SPRT, Standard Platinum Resistance Thermometer) son el estándar primario para el rango de -259.3467°C (punto triple del hidrógeno) hasta 961.78°C (punto de solidificación de la plata). Estos instrumentos de precisión se calibran en laboratorios nacionales de metrología y sirven como referencia para toda la cadena de trazabilidad de mediciones de temperatura en industria y ciencia.
          </p>
          <p>
            Para temperaturas superiores a 1234.93°C (punto de solidificación del oro), se utilizan termómetros de radiación basados en la Ley de Planck, técnica conocida como pirometría óptica. Este sistema permite mediciones con precisión del orden de milikelvin a nivel de investigación. La ITS-90 representa la unificación de escalas termométricas a nivel internacional, garantizando que las mediciones de temperatura sean consistentes y comparables en todo el mundo.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>🎭</span> Curiosidades y Anécdotas
        </h2>
        <div className="theory-subsection">
          <h3>La paradoja del tacto: misma temperatura, sensaciones diferentes</h3>
          <p>
            Un experimento clásico de las aulas de física demuestra de manera espectacular la diferencia entre calor y temperatura. Coloca un bloque de metal (por ejemplo, aluminio) y un trozo de madera (por ejemplo, pino) en la misma habitación durante varias horas, hasta que ambos alcancen la temperatura ambiente de 20°C. Cuando tocas ambos materiales con tu mano, percibes el metal como mucho más frío que la madera, a pesar de que están exactamente a la misma temperatura.
          </p>
          <p>
            Esta ilusión sensorial se debe a la diferencia en las conductividades térmicas de los materiales. El aluminio tiene una conductividad térmica de aproximadamente 205 W/(m·K), mientras que la madera de pino tiene apenas 0.12 W/(m·K). Tu piel está normalmente a 33-35°C, así que cuando tocas el material a 20°C, el calor fluye desde tu mano hacia el objeto. El metal, con su alta conductividad, extrae calor de tu mano aproximadamente 1700 veces más rápido que la madera.
          </p>
          <p>
            Los termorreceptores fríos en tu piel responden no a la temperatura absoluta del objeto, sino a la velocidad a la que tu piel pierde calor. El metal activa intensamente estos receptores, enviando una señal al cerebro de "frío intenso", mientras que la madera los activa débilmente. Esta demostración ilustra perfectamente que nuestra percepción térmica depende de la transferencia de calor (un proceso), no solo de la temperatura (una propiedad).
          </p>
        </div>
        
        <div className="theory-subsection">
          <h3>El cero absoluto: un límite inalcanzable según la Tercera Ley</h3>
          <p>
            La temperatura más baja teóricamente posible es el cero absoluto: 0 K o -273.15°C. A esta temperatura, cesaría todo movimiento molecular... o al menos eso sugiere la física clásica. Sin embargo, la Tercera Ley de la Termodinámica, formulada por Walther Nernst en 1906, establece que es físicamente imposible alcanzar el cero absoluto mediante un número finito de procesos.
          </p>
          <p>
            El récord experimental actual es asombroso: científicos del MIT lograron enfriar átomos de rubidio hasta aproximadamente 100 picokelvin (100 pK = 10⁻¹⁰ K) en 2003, utilizando técnicas de enfriamiento láser. Sin embargo, incluso a estas temperaturas extremadamente bajas, persiste lo que se llama "energía del punto cero". El principio de incertidumbre de Heisenberg (ΔxΔp ≥ ℏ/2) impide que las partículas estén completamente en reposo: si supusiéramos posición y momento exactamente cero, violaríamos este principio fundamental.
          </p>
          <p>
            Para un oscilador armónico cuántico, la energía mínima es E₀ = (1/2)ℏω, que nunca puede ser cero. Esta "energía del punto cero" persiste incluso en el hipotético cero absoluto. Este límite fundamental de la naturaleza ilustra cómo la mecánica cuántica impone restricciones absolutas a lo que podemos alcanzar, independientemente de nuestra tecnología.
          </p>
        </div>
        
        <div className="theory-subsection">
          <h3>Fahrenheit y su extraña escala de 96 grados para el cuerpo humano</h3>
          <p>
            En 1724, Daniel Gabriel Fahrenheit desarrolló una escala de temperatura que hoy nos parece bastante arbitraria. Definió el 0°F como la temperatura de una mezcla de hielo, agua y cloruro de amonio (la temperatura más baja que podía crear de manera reproducible en su laboratorio). El punto de congelación del agua pura quedaba en 32°F, y decidió que la temperatura del cuerpo humano sano sería exactamente 96°F.
          </p>
          <p>
            ¿Por qué 96? Según algunos historiadores, Fahrenheit eligió este número porque permitía dividir su termómetro de mercurio en 96 partes iguales entre estos dos puntos de referencia (0°F y 96°F), facilitando la fabricación de termómetros graduados con las herramientas disponibles. Sin embargo, mediciones más precisas posteriores mostraron que la temperatura corporal oral normal es aproximadamente 98.6°F (37.0°C), no 96°F.
          </p>
          <p>
            A pesar de su naturaleza arbitraria, la escala Fahrenheit sigue siendo el estándar en Estados Unidos, las Bahamas y Myanmar. El resto del mundo adoptó la escala Celsius (métrica y decimal) durante las décadas de 1960-70. Esta persistencia de Fahrenheit es un fascinante ejemplo de cómo los estándares históricos pueden sobrevivir por inercia cultural, incluso cuando alternativas más lógicas están disponibles.
          </p>
        </div>
        
        <div className="theory-subsection">
          <h3>El efecto Mpemba: cuando el agua caliente congela antes que la fría</h3>
          <p>
            En 1963, Erasto Mpemba, un estudiante de secundaria en Tanzania, observó algo aparentemente imposible: el helado que hacía a partir de leche caliente se congelaba más rápido que el hecho con leche fría. Cuando presentó esta observación en clase, fue ridiculizado por sus profesores, quienes le dijeron que debía ser un error experimental. Sin embargo, Mpemba persistió, y el fenómeno ahora lleva su nombre.
          </p>
          <p>
            Sorprendentemente, este fenómeno había sido observado antes por personajes como Aristóteles y Francis Bacon, pero fue generalmente ignorado por la comunidad científica por considerarse contraintuitivo. Las explicaciones propuestas incluyen: (1) la evaporación reduce la masa del agua caliente, dejando menos para congelar; (2) la convección en el agua caliente distribuye el calor más eficientemente hacia las paredes del recipiente; (3) los gases disueltos en el agua fría retardan la formación de núcleos de cristalización; y (4) el "superenfriamiento" del agua fría retrasa su solidificación.
          </p>
          <p>
            En 2016, Nature Physics publicó un estudio mostrando que la evidencia experimental del efecto Mpemba es inconsistente y depende fuertemente de las condiciones experimentales específicas. El debate continúa abierto, ilustrando cómo incluso fenómenos aparentemente simples de la física cotidiana pueden esconder complejidades que desafían nuestra comprensión actual.
          </p>
        </div>
      </div>

      <div className="theory-summary-section">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <ul>
          <li>
            <strong>Temperatura como medida de agitación molecular:</strong> La temperatura es una propiedad intrínseca de los cuerpos que mide la intensidad de la energía cinética promedio de las partículas que los componen. Es independiente de la cantidad de materia y se expresa en escalas como Celsius (°C), Kelvin (K) o Fahrenheit (°F). A nivel microscópico, representa el grado de agitación térmica de átomos y moléculas.
          </li>
          <li>
            <strong>Calor como proceso de transferencia de energía:</strong> El calor no es una propiedad de los cuerpos, sino un proceso de transferencia de energía que ocurre espontáneamente desde regiones de mayor temperatura hacia regiones de menor temperatura. Es una magnitud extensiva que depende de la masa y naturaleza de la sustancia involucrada, y se mide en julios (J) o calorías (cal), donde 1 cal = 4.184 J.
          </li>
          <li>
            <strong>Equilibrio térmico y la Ley Cero de la Termodinámica:</strong> Cuando dos o más cuerpos en contacto térmico alcanzan la misma temperatura, se establece el equilibrio térmico y cesa el flujo neto de calor entre ellos. Este principio fundamental, conocido como la Ley Cero de la Termodinámica, es la base de toda termometría y permite definir operacionalmente la temperatura.
          </li>
          <li>
            <strong>Conductividad térmica y percepción subjetiva:</strong> La conductividad térmica es una propiedad de los materiales que determina la velocidad con la que pueden transferir calor. Los metales tienen valores altos (por ejemplo, cobre: 400 W/(m·K)), mientras que los aislantes tienen valores bajos (por ejemplo, lana: 0.04 W/(m·K)). Nuestra sensación táctil de "frío" o "calor" depende más de la velocidad de transferencia de calor que de la temperatura absoluta del objeto.
          </li>
          <li>
            <strong>Escalas de temperatura y sus conversiones:</strong> Existen tres escalas principales: Celsius (basada en puntos de fusión y ebullición del agua a presión atmosférica), Kelvin (escala absoluta científica donde 0 K = -273.15°C representa el cero absoluto), y Fahrenheit (escala histórica anglosajona). Las conversiones entre escalas siguen relaciones lineales simples basadas en puntos fijos de calibración.
          </li>
          <li>
            <strong>Aplicaciones tecnológicas fundamentales:</strong> La distinción entre calor y temperatura es esencial en innumerables aplicaciones: climatización de edificios (sistemas HVAC), refrigeración industrial, procesos térmicos en la industria alimentaria, termometría médica para diagnóstico, gestión térmica en electrónica para evitar sobrecalentamiento de CPUs, y medición de temperatura estelar en astronomía mediante espectroscopía. Estos principios son fundamentales para la civilización moderna.
          </li>
        </ul>
      </div>
    </>
  );
};

export default DiferenciaCalorTemperatura;
