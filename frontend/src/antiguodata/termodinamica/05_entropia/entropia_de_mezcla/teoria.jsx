import { TheorySection, Concept } from '../../../../components/TheoryV2';
import { theoreticalConcepts } from './definitions.js';

// Metadatos del tema teórico
export const metadata = {
  titulo: "Entropía de Mezcla",
  descripcion: "Cambio de entropía asociado a la mezcla de sustancias y sus implicaciones termodinámicas",
  isTheoryOnly: true,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const EntropiaDeMezclaTheory = () => {
  return (
    <>
      <TheorySection title="Introducción" variant="theoretical">
        <div className="theory-only-intro">
          <p className="theory-description">
            {theoreticalConcepts.mainTopic} es un área fundamental de la termodinámica que 
            abarca {theoreticalConcepts.description.toLowerCase()}. Este subtema desarrolla los conceptos 
            teóricos esenciales para la comprensión profunda de los principios termodinámicos.
          </p>
          <div className="main-concept-highlight">
            <h4>💡 Concepto Principal:</h4>
            <p className="main-concept">{theoreticalConcepts.mainConcept}</p>
          </div>
        </div>
      </TheorySection>

      <TheorySection title="Fundamentos de la Entropía de Mezcla" variant="theoretical">
        <Concept title="Proceso de Mezcla" variant="detailed">
          <div className="detailed-content">
            <p>Cuando dos o más sustancias se mezclan:</p>
            <ul>
              <li>Las moléculas se dispersan en un volumen mayor</li>
              <li>Aumenta el número de configuraciones microscópicas posibles</li>
              <li>La entropía del sistema aumenta</li>
              <li>El proceso es espontáneo e irreversible</li>
            </ul>
            <p>Ejemplo: Dos gases separados por una partición. Al remover la partición, se mezclan espontáneamente y nunca se separan por sí solos.</p>
          </div>
        </Concept>

        <Concept title="Fórmula para Gases Ideales" variant="detailed">
          <div className="detailed-content">
            <p>Para la mezcla de gases ideales:</p>
            <div className="formula-display">ΔS<sub>mezcla</sub> = -nR Σ(x<sub>i</sub> ln x<sub>i</sub>)</div>
            <p>Donde:</p>
            <ul>
              <li>n: Número total de moles</li>
              <li>R: Constante universal de gases</li>
              <li>x<sub>i</sub>: Fracción molar del componente i</li>
            </ul>
            <p>Nota: ΔS<sub>mezcla</sub> siempre es positivo (ln x<sub>i</sub> es negativo para x<sub>i</sub> &lt; 1)</p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="La Paradoja de Gibbs" variant="theoretical">
        <Concept title="Planteamiento de la Paradoja" variant="detailed">
          <div className="detailed-content">
            <p>Pregunta: ¿Qué sucede si mezclamos dos gases idénticos?</p>
            <ul>
              <li>Según la fórmula clásica: ΔS &gt; 0 (habría aumento de entropía)</li>
              <li>Físicamente: No hay cambio real (son el mismo gas)</li>
              <li>Contradicción aparente: La fórmula predice un cambio que no ocurre</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Resolución de la Paradoja" variant="detailed">
          <div className="detailed-content">
            <p>La paradoja se resuelve considerando:</p>
            <ul>
              <li>Indistinguibilidad cuántica: Partículas idénticas son fundamentalmente indistinguibles</li>
              <li>Corrección de Gibbs: Se debe dividir por N! para evitar contar estados equivalentes</li>
              <li>Resultado: Para gases idénticos, ΔS<sub>mezcla</sub> = 0 (como debe ser)</li>
            </ul>
            <p>Implicación: La entropía de mezcla solo existe cuando las sustancias son distinguibles.</p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones" variant="theoretical">
        <Concept title="Mezclas de Gases" variant="detailed">
          <div className="detailed-content">
            <p>Ejemplos prácticos:</p>
            <ul>
              <li>Aire: Mezcla de N₂, O₂, Ar, etc. (alta entropía de mezcla)</li>
              <li>Gases de escape: Mezclas complejas de productos de combustión</li>
              <li>Atmósfera: Mezcla natural de gases</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Soluciones Líquidas" variant="detailed">
          <div className="detailed-content">
            <p>En soluciones:</p>
            <ul>
              <li>Soluciones ideales: Comportamiento similar a gases ideales</li>
              <li>Soluciones reales: Incluyen efectos de interacción molecular</li>
              <li>Entalpía de mezcla: Puede ser positiva, negativa o cero</li>
              <li>Espontaneidad: Determinada por ΔG = ΔH - TΔS</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Aleaciones Metálicas" variant="detailed">
          <div className="detailed-content">
            <p>En metalurgia:</p>
            <ul>
              <li>La entropía de mezcla favorece la formación de soluciones sólidas</li>
              <li>A altas temperaturas, TΔS puede dominar sobre ΔH</li>
              <li>Explica la solubilidad de metales en estado sólido</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Irreversibilidad de la Mezcla" variant="theoretical">
        <Concept title="Separación de Mezclas" variant="detailed">
          <div className="detailed-content">
            <p>Para separar una mezcla:</p>
            <ul>
              <li>Se requiere trabajo externo (no es espontáneo)</li>
              <li>La entropía del universo debe aumentar en el proceso total</li>
              <li>Métodos: destilación, filtración, centrifugación, etc.</li>
              <li>Todos requieren energía y generan entropía en el entorno</li>
            </ul>
            <p>Conclusión: La mezcla espontánea es irreversible desde el punto de vista termodinámico.</p>
          </div>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>Industria y Tecnología</h3>
          <ul>
            <li>
              🏭 Producción de aire industrial: La separación de aire en sus componentes (N₂, O₂, Ar) 
              requiere vencer la entropía de mezcla, consumiendo grandes cantidades de energía en 
              plantas criogénicas.
            </li>
            <li>
              ⚒️ Metalurgia: La entropía de mezcla favorece la formación de aleaciones a altas 
              temperaturas. Por ejemplo, el acero inoxidable es una solución sólida de hierro, cromo 
              y níquel estabilizada por la entropía de mezcla.
            </li>
            <li>
              🔌 Baterías de litio: Los electrolitos líquidos son mezclas cuya estabilidad depende 
              del equilibrio entre entropía de mezcla y entalpía de interacción molecular.
            </li>
            <li>
              🧪 Semiconductores: La fabricación de aleaciones semiconductoras (GaAs, InP) requiere 
              controlar cuidadosamente la entropía de mezcla para obtener composiciones precisas.
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Química y Farmacéutica</h3>
          <ul>
            <li>
              💊 Formulación de medicamentos: La solubilidad de principios activos en diferentes 
              disolventes depende de la entropía de mezcla, crucial para diseñar fármacos efectivos.
            </li>
            <li>
              🧫 Polímeros: Las mezclas de polímeros (blends) se estabilizan por entropía de mezcla, 
              permitiendo crear materiales con propiedades combinadas.
            </li>
            <li>
              ☕ Soluciones acuosas: Desde el café hasta bebidas isotónicas, todas las soluciones 
              líquidas cotidianas existen gracias a la entropía de mezcla favorable.
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Medio Ambiente y Atmósfera</h3>
          <ul>
            <li>
              🌍 Composición atmosférica: El aire es una mezcla estable de gases debido a la alta 
              entropía de mezcla. Sin ella, los gases se estratificarían por densidad.
            </li>
            <li>
              💧 Oceanografía: La mezcla de corrientes oceánicas con diferentes salinidades y 
              temperaturas está impulsada por cambios en la entropía de mezcla.
            </li>
            <li>
              🏭 Contaminación: La dispersión de contaminantes en aire y agua es un proceso 
              irreversible favorecido por el aumento de entropía de mezcla.
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Criogenia y Gases Industriales</h3>
          <ul>
            <li>
              ❄️ Licuefacción de gases: Separar mezclas de gases (como gas natural) en sus 
              componentes requiere procesos criogénicos que consumen energía para vencer la 
              entropía de mezcla.
            </li>
            <li>
              🏬 Gases medicinales: La producción de oxígeno puro para uso médico implica separar 
              el O₂ del aire, proceso que debe superar la entropía de mezcla de ~5.8 J/(mol·K).
            </li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: La Paradoja de Gibbs y el Nacimiento de la Mecánica Estadística
        </h2>
        
        <div className="theory-subsection">
          <h3>Josiah Willard Gibbs (1839-1903)</h3>
          <p>
            El físico estadounidense J. Willard Gibbs, trabajando en la Universidad de Yale, fue quien 
            identificó por primera vez la paradoja relacionada con la entropía de mezcla de gases idénticos 
            en la década de 1870. En su obra fundamental "On the Equilibrium of Heterogeneous Substances" 
            (1876-1878), Gibbs estableció las bases de la termodinámica química.
          </p>
          <p>
            Gibbs observó que según la termodinámica clásica, mezclar dos volúmenes de gas idéntico 
            debería aumentar la entropía, pero físicamente no hay cambio real. Esta contradicción aparente 
            se conoció como la "Paradoja de Gibbs".
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Resolución Cuántica (Siglo XX)</h3>
          <p>
            La paradoja no se resolvió completamente hasta el desarrollo de la mecánica cuántica en la 
            década de 1920. Los científicos descubrieron que:
          </p>
          <ul>
            <li>
              Las partículas idénticas son fundamentalmente indistinguibles en mecánica cuántica
            </li>
            <li>
              Se debe dividir el número de microestados por N! (factorial del número de partículas) 
              para evitar contar estados equivalentes
            </li>
            <li>
              Esta corrección hace que ΔS = 0 para la mezcla de gases idénticos
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Ludwig Boltzmann y la Interpretación Estadística</h3>
          <p>
            En 1877, Ludwig Boltzmann propuso su famosa relación S = k ln W, conectando la entropía 
            con el número de microestados (W). Esta interpretación estadística de la entropía fue 
            fundamental para entender la entropía de mezcla: cuando dos gases se mezclan, el número 
            de configuraciones posibles aumenta dramáticamente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Max Planck y la Constante de Boltzmann</h3>
          <p>
            Max Planck, al estudiar la radiación del cuerpo negro en 1900, fue quien nombró la 
            constante k en honor a Boltzmann. Irónicamente, Boltzmann nunca usó esta constante 
            explícitamente en sus trabajos. La fórmula S = k ln W fue grabada en la tumba de 
            Boltzmann en Viena.
          </p>
        </div>

        <div className="theory-section-highlight">
          <h4>🎯 Impacto Histórico</h4>
          <p>
            La paradoja de Gibbs jugó un papel crucial en el desarrollo de la mecánica estadística y 
            fue una de las primeras indicaciones de que la física clásica era incompleta, preparando 
            el camino para la revolución cuántica del siglo XX.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🤯 La Mezcla que No Se Puede Deshacer</h3>
          <p>
            Imagina que accidentalmente mezclas sal y pimienta. Separarlas grano por grano es tedioso 
            pero posible. Sin embargo, si mezclas dos gases diferentes en un recipiente, es 
            termodinámicamente imposible separarlos espontáneamente. ¡Necesitarías una cantidad enorme de 
            energía para hacerlo! Por ejemplo, separar el nitrógeno del oxígeno en 1 metro cúbico de 
            aire a temperatura ambiente requiere al menos 5.7 kJ de trabajo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌍 El Aire: Una Mezcla Milagrosa</h3>
          <p>
            El aire que respiramos es una mezcla de gases (78% N₂, 21% O₂, 1% otros) que ha permanecido 
            mezclada durante millones de años. ¡Sin la entropía de mezcla, el oxígeno, siendo más denso, 
            se hundiría hacia el suelo y el nitrógeno flotaría arriba! La vida en la Tierra como la 
            conocemos sería imposible.
          </p>
          <p>
            La entropía de mezcla del aire a 25°C y 1 atm es aproximadamente 5.76 J/(mol·K). Para toda 
            la atmósfera terrestre (~5×10¹⁸ kg), esto representa una energía del orden de 10²⁶ joules 
            asociada a mantener los gases mezclados.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🍾 El Champagne y la Entropía</h3>
          <p>
            Cuando abres una botella de champagne o refresco, el CO₂ disuelto en el líquido escapa 
            formando burbujas. Este proceso es irreversible y favorecido por el aumento de entropía: 
            el CO₂ pasa de estar mezclado en el líquido (baja entropía) a dispersarse en el aire 
            (alta entropía). ¡No puedes volver a meter las burbujas en la botella!
          </p>
        </div>

        <div className="theory-subsection">
          <h3>☕ Café y Leche: Un Amor Entrópico</h3>
          <p>
            Cuando agregas leche al café, la mezcla ocurre espontáneamente por difusión. Ver este 
            proceso en reversa (la leche separándose del café por sí sola) violaría la segunda ley de 
            la termodinámica. La mezcla aumenta la entropía en aproximadamente 6-8 J/K para una taza 
            estándar, haciendo el proceso irreversible.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 El Demonio de Maxwell</h3>
          <p>
            En 1867, James Clerk Maxwell propuso un experimento mental: un "demonio" que pudiera separar 
            moléculas rápidas de lentas en un gas, aparentemente violando la segunda ley. La resolución 
            de esta paradoja requirió comprender que el demonio necesitaría información, y borrar esa 
            información genera entropía. ¡Incluso un demonio no puede violar la termodinámica!
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔥 Récord de Separación de Mezclas</h3>
          <p>
            La planta de separación de aire más grande del mundo, en Qatar, produce más de 10,000 toneladas 
            de oxígeno por día. Para lograr esto, debe vencer continuamente la entropía de mezcla del 
            aire, consumiendo aproximadamente 600 MW de potencia. ¡Es como alimentar una ciudad pequeña 
            solo para separar gases!
          </p>
        </div>

        <div className="theory-section-highlight">
          <h4>💡 Dato Curioso: La Muerte Térmica del Universo</h4>
          <p>
            Según algunos modelos cosmológicos, el universo eventualmente alcanzará un estado de "muerte 
            térmica" donde toda la energía estará uniformemente distribuida (máxima entropía, incluyendo 
            entropía de mezcla). En ese punto, no sería posible ningún proceso espontáneo... ¡ni siquiera 
            la vida! Afortunadamente, esto tomaría 10¹⁰⁰ años aproximadamente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧬 Aleaciones de Alta Entropía</h3>
          <p>
            En 2004, se descubrió una nueva clase de materiales llamados "aleaciones de alta entropía" 
            (High-Entropy Alloys, HEAs). Estas aleaciones contienen 5 o más elementos en proporciones 
            similares, y su estabilidad proviene principalmente de la alta entropía de mezcla. Algunos 
            de estos materiales tienen propiedades extraordinarias: resistencia extrema, dureza superior 
            al acero, y estabilidad a temperaturas criogénicas. ¡La entropía se usa para crear los 
            materiales del futuro!
          </p>
        </div>
      </div>
    </>
  );
};

export default EntropiaDeMezclaTheory;
