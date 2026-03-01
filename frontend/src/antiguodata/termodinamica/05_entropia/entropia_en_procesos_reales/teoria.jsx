import { TheorySection, Concept, Formula } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Entropía en Procesos Reales",
  descripcion: "Generación de entropía, irreversibilidades y análisis exergético en procesos termodinámicos reales",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const EntropiaEnProcesosRealesTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a los Procesos Reales">
        <p>
          En la práctica, todos los procesos termodinámicos son irreversibles y generan entropía. 
          A diferencia de los procesos ideales (reversibles) que estudiamos en teoría, los procesos 
          reales involucran fricciones, turbulencias, transferencias de calor con diferencias finitas 
          de temperatura, mezclas, y otras irreversibilidades que aumentan la entropía del universo.
        </p>
        <p>
          Comprender la generación de entropía en procesos reales es fundamental para:
        </p>
        <ul>
          <li>Evaluar la eficiencia real de máquinas térmicas y dispositivos</li>
          <li>Identificar fuentes de pérdidas energéticas</li>
          <li>Optimizar procesos industriales</li>
          <li>Diseñar sistemas más eficientes</li>
        </ul>
      </TheorySection>

      <TheorySection title="Irreversibilidad y Generación de Entropía">
        <Concept title="Principio de Generación de Entropía">
          <p>
            La Segunda Ley de la Termodinámica establece que la entropía total del universo 
            (sistema + entorno) siempre aumenta en procesos reales espontáneos:
          </p>
          <Formula
            expression={String.raw`S_{gen} = \Delta S_{total} = \Delta S_{sistema} + \Delta S_{entorno} \geq 0`}
            calculatorId="generacion-entropia"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular ΔS_sistema", expression: String.raw`\Delta S_{sistema} = S_{gen} - \Delta S_{entorno}` },
              { description: "Calcular ΔS_entorno", expression: String.raw`\Delta S_{entorno} = S_{gen} - \Delta S_{sistema}` }
            ]}
          />
          <p>Donde:</p>
          <ul>
            <li>S<sub>gen</sub>: Entropía generada (J/K)</li>
            <li>ΔS<sub>sistema</sub>: Cambio de entropía del sistema</li>
            <li>ΔS<sub>entorno</sub>: Cambio de entropía del entorno</li>
          </ul>
          <p>Interpretación:</p>
          <ul>
            <li>S<sub>gen</sub> &gt; 0: Proceso irreversible (real)</li>
            <li>S<sub>gen</sub> = 0: Proceso reversible (ideal)</li>
            <li>S<sub>gen</sub> &lt; 0: Proceso imposible</li>
          </ul>
        </Concept>

        <Concept title="Fuentes de Irreversibilidad">
          <p>Las principales causas de generación de entropía en procesos reales son:</p>
          <ul>
            <li>
              Fricción mecánica: El rozamiento entre superficies móviles convierte trabajo 
              en calor irrecuperable
            </li>
            <li>
              Transferencia de calor con ΔT finito: El calor fluye naturalmente de alta 
              a baja temperatura, generando entropía
            </li>
            <li>
              Expansión sin restricción: Los gases que se expanden libremente generan entropía 
              sin realizar trabajo útil
            </li>
            <li>
              Mezcla de sustancias: La mezcla espontánea de gases o líquidos diferentes es irreversible
            </li>
            <li>
              Reacciones químicas: Las reacciones espontáneas son irreversibles
            </li>
            <li>
              Resistencia eléctrica: La corriente eléctrica disipa energía como calor (efecto Joule)
            </li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Eficiencia Isentrópica">
        <p>
          La eficiencia isentrópica es una medida del desempeño real de un dispositivo comparado 
          con su comportamiento ideal (isentrópico, sin generación de entropía).
        </p>

        <Concept title="Eficiencia Isentrópica de Turbinas">
          <p>
            En una turbina, el proceso ideal sería isentrópico (sin pérdidas). La eficiencia 
            isentrópica compara el trabajo real obtenido con el trabajo ideal:
          </p>
          <Formula
            expression={String.raw`\eta_s = \frac{W_{real}}{W_{isentropico}} \times 100\%`}
            calculatorId="eficiencia-isentropica-turbina"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular W_real", expression: String.raw`W_{real} = \eta_s \cdot W_{isentropico}` },
              { description: "Calcular W_isentrópico", expression: String.raw`W_{isentropico} = \frac{W_{real}}{\eta_s}` }
            ]}
          />
          <p>
            Las turbinas reales tienen eficiencias típicas del 80-90% debido a fricciones, 
            fugas y turbulencias.
          </p>
        </Concept>

        <Concept title="Eficiencia Isentrópica de Compresores">
          <p>
            Para compresores y bombas, la eficiencia se define inversamente, ya que queremos 
            minimizar el trabajo requerido:
          </p>
          <Formula
            expression={String.raw`\eta_s = \frac{W_{isentropico}}{W_{real}} \times 100\%`}
            calculatorId="eficiencia-isentropica-compresor"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular W_real", expression: String.raw`W_{real} = \frac{W_{isentropico}}{\eta_s}` },
              { description: "Calcular W_isentrópico", expression: String.raw`W_{isentropico} = \eta_s \cdot W_{real}` }
            ]}
          />
          <p>
            Un compresor real siempre requiere más trabajo que el ideal debido a las 
            irreversibilidades internas.
          </p>
        </Concept>

        <Concept title="Aplicaciones en Otros Dispositivos">
          <ul>
            <li>
              Bombas: Similar a compresores, eficiencias típicas 70-85%
            </li>
            <li>
              Toberas: Basada en energía cinética, eficiencias 90-95%
            </li>
            <li>
              Difusores: Inversa a toberas, eficiencias 80-90%
            </li>
            <li>
              Intercambiadores de calor: Basada en efectividad térmica
            </li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Irreversibilidad y Exergía">
        <Concept title="Pérdida de Disponibilidad">
          <p>
            La irreversibilidad (I) cuantifica la pérdida de trabajo útil debido a la 
            generación de entropía en un proceso:
          </p>
          <Formula
            expression={String.raw`I = T_0 S_{gen}`}
            calculatorId="perdida-disponibilidad"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular T_0", expression: String.raw`T_0 = \frac{I}{S_{gen}}` },
              { description: "Calcular S_gen", expression: String.raw`S_{gen} = \frac{I}{T_0}` }
            ]}
          />
          <p>Donde:</p>
          <ul>
            <li>I: Irreversibilidad o trabajo perdido (J)</li>
            <li>T<sub>0</sub>: Temperatura ambiente (K)</li>
            <li>S<sub>gen</sub>: Entropía generada (J/K)</li>
          </ul>
          <p>
            Esta ecuación relaciona directamente la generación de entropía con la pérdida 
            económica de energía útil.
          </p>
        </Concept>

        <Concept title="Exergía o Disponibilidad">
          <p>
            La exergía es la máxima cantidad de trabajo útil que puede obtenerse de un sistema 
            cuando alcanza equilibrio con el ambiente a través de procesos reversibles.
          </p>
          <p>
            A diferencia de la energía (que se conserva), la exergía se destruye en procesos 
            irreversibles. El análisis exergético identifica dónde y cuánta exergía se destruye, 
            permitiendo optimizar procesos.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Análisis de Procesos Reales">
        <Concept title="Balance de Entropía">
          <p>
            Para cualquier sistema en estado estacionario, el balance de entropía es:
          </p>
          <div className="formula-display">
            Σ(Q/T) + Σ(ṁs)<sub>entrada</sub> - Σ(ṁs)<sub>salida</sub> + Ṡ<sub>gen</sub> = 0
          </div>
          <p>
            Este balance permite calcular la generación de entropía conociendo los flujos 
            de masa, calor y propiedades termodinámicas.
          </p>
        </Concept>

        <Concept title="Minimización de Irreversibilidades">
          <p>Estrategias para reducir la generación de entropía:</p>
          <ul>
            <li>
              Reducir diferencias de temperatura: Usar intercambiadores con mayor área 
              para transferencia de calor más suave
            </li>
            <li>
              Minimizar fricción: Usar lubricantes, superficies pulidas, diseños aerodinámicos
            </li>
            <li>
              Expansión controlada: Usar turbinas en lugar de válvulas para recuperar trabajo
            </li>
            <li>
              Aislamiento térmico: Minimizar pérdidas de calor al ambiente
            </li>
            <li>
              Recuperación de calor: Aprovechar calores residuales mediante cogeneración
            </li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>Centrales Térmicas y Nucleares</h3>
          <ul>
            <li>
              🏭 Turbinas de vapor: Las turbinas de gran escala (&gt;1000 MW) tienen eficiencias 
              isentrópicas del 85-92%. Una mejora del 1% en eficiencia puede ahorrar millones 
              de dólares anuales en combustible.
            </li>
            <li>
              ⚡ Condensadores: La generación de entropía en condensadores limita la eficiencia 
              global del ciclo Rankine. Por eso se construyen cerca de ríos o mares para usar 
              agua fría como sumidero térmico.
            </li>
            <li>
              🌡️ Sobrecalentadores: Reducen la humedad en turbinas y mejoran la eficiencia 
              al minimizar irreversibilidades por condensación dentro de la turbina.
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Aviación y Propulsión</h3>
          <ul>
            <li>
              ✈️ Motores turbofán: La eficiencia isentrópica de compresores y turbinas determina 
              el consumo de combustible. Motores modernos alcanzan 88-92% de eficiencia isentrópica 
              en compresores.
            </li>
            <li>
              🚀 Toberas de cohetes: Las toberas supersónicas tienen eficiencias del 96-99%, 
              críticas para maximizar el impulso específico.
            </li>
            <li>
              🛩️ Sistemas de aire acondicionado: Los ciclos de refrigeración en aviones usan 
              análisis de generación de entropía para minimizar el peso del sistema.
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Refrigeración y Climatización</h3>
          <ul>
            <li>
              ❄️ Compresores de refrigeradores: Representan el 80% del consumo eléctrico. 
              Mejorar su eficiencia isentrópica del 70% al 80% reduce significativamente el 
              consumo energético doméstico.
            </li>
            <li>
              🏢 Chillers industriales: El análisis exergético identifica que las mayores pérdidas 
              ocurren en compresores (45%) y válvulas de expansión (35%).
            </li>
            <li>
              🌡️ Bombas de calor: Las bombas de calor geotérmicas minimizan irreversibilidades 
              al trabajar con diferencias de temperatura pequeñas.
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Industria Química y Petroquímica</h3>
          <ul>
            <li>
              ⚗️ Separación criogénica: La separación de aire en N₂ y O₂ genera entropía 
              significativa. Las plantas modernas usan análisis exergético para optimizar 
              columnas de destilación.
            </li>
            <li>
              🛢️ Refinerías: Las irreversibilidades en hornos, reactores y torres de destilación 
              representan pérdidas del orden de 20-30% de la exergía de entrada.
            </li>
            <li>
              🧪 Reactores químicos: Las reacciones exotérmicas generan entropía. El diseño 
              óptimo minimiza gradientes de temperatura y concentración.
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Automoción</h3>
          <ul>
            <li>
              🚗 Turbocompresores: Mejoran la eficiencia del motor al recuperar energía de 
              gases de escape. Su eficiencia isentrópica típica es 60-70% en turbo y 75-85% 
              en compresor.
            </li>
            <li>
              🔋 Sistemas híbridos: El análisis exergético optimiza la gestión de energía entre 
              motor térmico y eléctrico, identificando cuándo usar cada uno.
            </li>
            <li>
              🛞 Frenos regenerativos: Reducen irreversibilidades al convertir energía cinética 
              en eléctrica en lugar de disiparla como calor.
            </li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De la Teoría a la Práctica
        </h2>
        
        <div className="theory-subsection">
          <h3>Sadi Carnot y la Eficiencia Ideal (1824)</h3>
          <p>
            Sadi Carnot fue el primero en establecer límites teóricos de eficiencia para máquinas 
            térmicas con su famoso ciclo de Carnot. Sin embargo, reconoció que "las máquinas reales 
            nunca pueden alcanzar la perfección del ciclo ideal debido a fricciones y pérdidas de calor".
          </p>
          <p>
            Carnot identificó que la diferencia entre eficiencias ideales y reales se debía a 
            "causas perturbadoras", lo que hoy llamamos irreversibilidades.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>William Thomson (Lord Kelvin) y la Disponibilidad (1850s)</h3>
          <p>
            Lord Kelvin introdujo el concepto de "energía disponible" al estudiar por qué las 
            máquinas térmicas reales eran menos eficientes que las ideales. Reconoció que en 
            procesos irreversibles se "degrada" la capacidad de realizar trabajo.
          </p>
          <p>
            En 1852, Thomson formuló: "Es imposible, mediante operaciones cíclicas, extraer calor 
            de un cuerpo y producir trabajo sin modificación en otros cuerpos" - estableciendo 
            límites fundamentales a procesos reales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>J. Willard Gibbs y la Exergía (1873)</h3>
          <p>
            Josiah Willard Gibbs desarrolló el concepto de "energía libre" o "energía disponible", 
            precursor de la exergía moderna. Su trabajo estableció las bases matemáticas para 
            cuantificar el trabajo máximo obtenible de un sistema.
          </p>
          <p>
            Gibbs demostró que la función de Gibbs (G = H - TS) determina la espontaneidad de 
            procesos y el trabajo útil disponible.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Desarrollo del Análisis Exergético (1950s-1970s)</h3>
          <p>
            En los años 1950s, Zoran Rant (Yugoslavia) acuñó el término "exergía" (del griego 
            ex + ergon = "trabajo desde"). El análisis exergético se desarrolló como herramienta 
            práctica para ingeniería durante la crisis energética de los 1970s.
          </p>
          <p>
            Pioneros como Jan Szargut (Polonia) y Myron Tribus (EE.UU.) aplicaron el análisis 
            exergético a plantas de potencia, refinerías y procesos químicos, demostrando que 
            podía identificar pérdidas ocultas al análisis energético tradicional.
          </p>
        </div>

        <div className="theory-section-highlight">
          <h4>🎯 Impacto en la Ingeniería Moderna</h4>
          <p>
            El análisis de irreversibilidades y exergía es ahora estándar en diseño de:
          </p>
          <ul>
            <li>Centrales de generación eléctrica (mejoras de eficiencia del 30% al 60%)</li>
            <li>Motores de aviación (consumo reducido en 50% desde 1960)</li>
            <li>Sistemas de refrigeración (COPs mejorados de 2 a 4+)</li>
            <li>Procesos industriales (ahorros energéticos del 15-30%)</li>
          </ul>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>💡 El Misterio del Condensador Perdido</h3>
          <p>
            En 1765, James Watt observó que la máquina de vapor de Newcomen perdía el 80% del calor 
            al enfriar y calentar alternadamente el cilindro. Su solución: un condensador separado. 
            Esta simple idea redujo las irreversibilidades y duplicó la eficiencia, lanzando la 
            Revolución Industrial.
          </p>
          <p>
            Hoy sabemos que Watt intuitivamente minimizó la generación de entropía al evitar 
            ciclos térmicos innecesarios. ¡Sin conocer la termodinámica formal!
          </p>
        </div>

        <div className="theory-subsection">
          <h3>✈️ El Ahorro que Vale Oro</h3>
          <p>
            En motores turbofán modernos, mejorar la eficiencia isentrópica del compresor en 
            apenas un 1% puede ahorrar hasta $1 millón de dólares por avión en combustible 
            durante su vida útil (25-30 años).
          </p>
          <p>
            Por esta razón, fabricantes como GE, Rolls-Royce y Pratt & Whitney invierten miles 
            de millones en I+D para reducir irreversibilidades microscópicas en álabes de turbinas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏭 La Planta que se Autorregula</h3>
          <p>
            Las plantas químicas modernas usan análisis exergético en tiempo real para detectar 
            equipos degradados. Cuando la generación de entropía en una bomba aumenta un 10%, 
            el sistema alerta de posible mantenimiento antes de fallas catastróficas.
          </p>
          <p>
            Esta monitorización exergética ha reducido paros no programados en 40% en la industria 
            petroquímica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 El Turbo que Sopla Aire Frío</h3>
          <p>
            Los turbocompresores comprimen aire a 150-200°C, generando calor por irreversibilidades. 
            Los intercoolers (enfriadores intermedios) reducen esta temperatura a 40-60°C antes de 
            entrar al motor, mejorando la densidad del aire y la eficiencia volumétrica.
          </p>
          <p>
            Sin intercooler, un turbo generaría tanta entropía que el motor perdería potencia en 
            lugar de ganarla. ¡La termodinámica manda!
          </p>
        </div>

        <div className="theory-subsection">
          <h3>❄️ La Válvula que Desperdicia Energía</h3>
          <p>
            En sistemas de refrigeración domésticos, la válvula de expansión genera el 25-35% de 
            todas las irreversibilidades del sistema. Es el componente menos eficiente, pero el 
            más simple y barato.
          </p>
          <p>
            Sistemas comerciales usan turboexpansores en su lugar, recuperando trabajo de la 
            expansión y mejorando el COP en un 15-20%. El costo adicional se paga en 2-3 años 
            de ahorros energéticos.
          </p>
        </div>

        <div className="theory-section-highlight">
          <h4>🔥 Dato Extremo: El Récord de Eficiencia</h4>
          <p>
            La central de ciclo combinado Bouchain (Francia) alcanzó en 2016 un récord mundial 
            de eficiencia: 62.22%. Esto significa que de cada 100 J de gas natural, se convierten 
            62.22 J en electricidad.
          </p>
          <p>
            Compare con centrales de carbón antiguas (30-35%) o motores de gasolina (25-30%). 
            La clave: minimizar generación de entropía en cada componente mediante análisis 
            exergético exhaustivo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌡️ El Frío que Cuesta Caro</h3>
          <p>
            Enfriar algo a -196°C (nitrógeno líquido) requiere aproximadamente 1.5 kWh/kg de 
            energía eléctrica, pero el mínimo teórico (sin irreversibilidades) es solo 0.2 kWh/kg.
          </p>
          <p>
            La diferencia (87% de pérdidas) se debe a irreversibilidades en compresores, 
            intercambiadores y válvulas. Las plantas criogénicas son campos de batalla contra 
            la generación de entropía, donde cada mejora marginal vale millones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 La Paradoja del Superaislante</h3>
          <p>
            Los mejores aislantes térmicos (aerogeles) reducen pérdidas de calor en 99.9%, pero 
            nunca eliminan completamente las irreversibilidades. Incluso en sistemas superaislados, 
            microvibraciones y radiación térmica generan entropía.
          </p>
          <p>
            En laboratorios criogénicos de física cuántica, alcanzar 0.001 K requiere semanas de 
            enfriamiento y consume más energía que una ciudad pequeña, todo para minimizar 
            generación de entropía microscópica.
          </p>
        </div>
      </div>
    </>
  );
};

export default EntropiaEnProcesosRealesTheory;
