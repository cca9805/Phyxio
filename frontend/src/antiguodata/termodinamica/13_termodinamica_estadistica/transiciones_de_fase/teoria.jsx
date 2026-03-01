import { TheorySection, Concept, Important, Example } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "Transiciones de Fase",
  descripcion: "Cambios de estado y ruptura de simetría desde la perspectiva estadística.",
  isTheoryOnly: true,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};


const TransicionesDeFaseTheory = () => (
  <>
    <TheorySection title="Introducción y Contexto">
      <Concept title="¿Qué es una transición de fase?">
        <p>
          Una <strong>transición de fase</strong> es un cambio cualitativo en las propiedades macroscópicas de un sistema cuando se varían parámetros externos como temperatura o presión. Desde la perspectiva de la termodinámica estadística, las transiciones de fase emergen del comportamiento colectivo de un número muy grande de partículas.
        </p>
        <Important>
          Las transiciones de fase son fenómenos cooperativos que solo ocurren en el límite termodinámico (N → ∞). Representan singularidades en los potenciales termodinámicos y están asociadas con cambios en la simetría del sistema.
        </Important>
        <p><strong>Ejemplos comunes de transiciones de fase:</strong></p>
        <ul>
          <li>Sólido ↔ Líquido (fusión/solidificación)</li>
          <li>Líquido ↔ Gas (evaporación/condensación)</li>
          <li>Paramagnético ↔ Ferromagnético</li>
          <li>Normal ↔ Superconductor</li>
          <li>Normal ↔ Superfluido</li>
        </ul>
      </Concept>
    </TheorySection>

    <TheorySection title="Clasificación y Parámetro de Orden">
      <Concept title="Clasificación de Ehrenfest">
        <p>Paul Ehrenfest clasificó las transiciones de fase según el orden de la derivada del potencial termodinámico que presenta una discontinuidad:</p>
        <ul>
          <li><strong>Primer orden:</strong> Discontinuidad en la primera derivada (S, V, N), calor latente, coexistencia de fases.</li>
          <li><strong>Segundo orden:</strong> Discontinuidad en la segunda derivada (C_p, κ_T, α), sin calor latente, no hay coexistencia de fases.</li>
        </ul>
        <Important>
          En transiciones de segundo orden, el parámetro de orden cambia continuamente desde cero, mientras que en transiciones de primer orden cambia discontinuamente.
        </Important>
      </Concept>
      <Concept title="Parámetro de Orden">
        <p>El <strong>parámetro de orden</strong> es una cantidad que caracteriza el grado de orden en el sistema:</p>
        <ul>
          <li>Es cero en una fase (desordenada) y no cero en la otra (ordenada).</li>
        </ul>
        <p><strong>Ejemplos:</strong></p>
        <ul>
          <li>Ferromagnetismo: Magnetización M</li>
          <li>Líquido-gas: Diferencia de densidad Δρ = ρ_líquido - ρ_gas</li>
          <li>Superconductividad: Función de onda macroscópica Ψ</li>
          <li>Cristalización: Amplitud de la red cristalina</li>
        </ul>
      </Concept>
      <Example title="Ejemplo: Transición Ferromagnética">
        En un ferromagneto como el hierro:
        <ul>
          <li><strong>Por encima de T_C:</strong> Fase paramagnética (M = 0, spins aleatorios, alta simetría)</li>
          <li><strong>Por debajo de T_C:</strong> Fase ferromagnética (M ≠ 0, spins alineados, simetría rota)</li>
          <li><strong>En T = T_C:</strong> M → 0 continuamente, susceptibilidad magnética y longitud de correlación divergen</li>
        </ul>
      </Example>
    </TheorySection>

    <TheorySection title="Teoría de Landau y Ruptura de Simetría">
      <Concept title="Expansión de Landau">
        <p>Lev Landau desarrolló una teoría fenomenológica basada en la expansión del potencial termodinámico en potencias del parámetro de orden φ:</p>
        <div style={{textAlign: 'center', margin: '1.5rem 0', fontSize: '1.2rem'}}>
          F(T, φ) = F₀(T) + a(T)φ² + b(T)φ⁴ + ...
        </div>
        <ul>
          <li>a(T) = a₀(T - T_c) cambia de signo en T_c</li>
          <li>b &gt; 0 para estabilidad</li>
          <li>Minimizando F respecto a φ: φ² ∝ (T_c - T) para T &lt; T_c</li>
        </ul>
        <Important>
          La teoría de Landau predice exponentes críticos "clásicos" válidos lejos del punto crítico, pero falla cerca de él debido a fluctuaciones.
        </Important>
      </Concept>
      <Concept title="Ruptura Espontánea de Simetría">
        <p>En transiciones continuas, el sistema pasa de un estado simétrico (φ = 0) a uno con simetría rota (φ ≠ 0):</p>
        <ul>
          <li>Por encima de T_c: único mínimo en φ = 0</li>
          <li>Por debajo de T_c: dos mínimos equivalentes en φ = ±φ₀</li>
          <li>El sistema elige uno de los mínimos, rompiendo la simetría</li>
        </ul>
        <p>Este concepto es fundamental en materia condensada y física de partículas (mecanismo de Higgs).</p>
      </Concept>
    </TheorySection>

    <TheorySection title="Fenómenos Críticos y Universalidad">
      <Concept title="Punto Crítico y Exponentes Críticos">
        <p>En el <strong>punto crítico</strong> las dos fases se vuelven indistinguibles, aparecen fluctuaciones en todas las escalas y las propiedades físicas divergen o se anulan.</p>
        <ul>
          <li>Parámetro de orden: φ ∝ |T - T_c|^β</li>
          <li>Susceptibilidad: χ ∝ |T - T_c|^(-γ)</li>
          <li>Calor específico: C ∝ |T - T_c|^(-α)</li>
          <li>Longitud de correlación: ξ ∝ |T - T_c|^(-ν)</li>
        </ul>
        <Important>
          Los exponentes críticos son universales: sistemas físicamente diferentes pero con la misma simetría y dimensionalidad tienen los mismos exponentes críticos.
        </Important>
      </Concept>
      <Concept title="Universalidad">
        <p>La <strong>universalidad</strong> implica que sistemas muy diferentes pueden pertenecer a la misma clase de universalidad, determinada por la dimensionalidad y la simetría, no por los detalles microscópicos.</p>
        <ul>
          <li>Ejemplo: Modelo de Ising 3D describe ferromagnetos, líquido-gas, aleaciones binarias (β ≈ 0.326, γ ≈ 1.237, ν ≈ 0.630)</li>
        </ul>
      </Concept>
    </TheorySection>

    <TheorySection title="Grupo de Renormalización">
      <Concept title="Idea Central">
        <p>El <strong>grupo de renormalización</strong> (Wilson) explica la universalidad y permite calcular exponentes críticos:</p>
        <ul>
          <li>Fluctuaciones en todas las escalas cerca del punto crítico</li>
          <li>El sistema es autosimilar a diferentes escalas</li>
          <li>La transformación de renormalización elimina grados de libertad de corto alcance</li>
          <li>Los puntos fijos determinan los exponentes críticos</li>
        </ul>
        <Important>
          El grupo de renormalización revolucionó la comprensión de las transiciones de fase y tiene aplicaciones en teoría cuántica de campos y física de partículas.
        </Important>
      </Concept>
    </TheorySection>

    <TheorySection title="Aplicaciones y Ejemplos">
      <Concept title="Transiciones en Sistemas Físicos">
        <p><strong>Superconductividad:</strong> Transición de segundo orden en superconductores tipo II, parámetro de orden: función de onda macroscópica, ruptura de simetría gauge U(1).</p>
        <p><strong>Superfluidez:</strong> Helio-4 se vuelve superfluido por debajo de 2.17 K, transición λ, condensación de Bose-Einstein.</p>
        <p><strong>Cristales Líquidos:</strong> Múltiples fases con diferentes grados de orden, transiciones nemática, esméctica, aplicaciones en pantallas LCD.</p>
      </Concept>
      <Concept title="Transiciones en el Universo Temprano">
        <p>Las transiciones de fase jugaron un papel crucial en la evolución del universo:</p>
        <ul>
          <li>Transición electrodébil: T ≈ 10¹⁵ K, ruptura de simetría electrodébil</li>
          <li>Transición QCD: T ≈ 10¹² K, confinamiento de quarks</li>
          <li>Inflación cósmica: posiblemente una transición de fase</li>
        </ul>
      </Concept>
    </TheorySection>

    <div className="theory-applications-section">
      <h2><span role="img" aria-label="aplicaciones">🌍</span> Aplicaciones en la vida real</h2>
      <ul>
        <li>Diseño de materiales con propiedades específicas (superconductores, cristales líquidos).</li>
        <li>Explicación de fenómenos naturales como la formación de nubes o la solidificación de metales.</li>
        <li>Modelado de sistemas biológicos y sociales con transiciones de fase.</li>
        <li>Aplicaciones en cosmología y física de partículas.</li>
      </ul>
    </div>

    <div className="theory-history-section">
      <h2><span role="img" aria-label="historia">📜</span> Hechos históricos relevantes</h2>
      <ul>
        <li>Paul Ehrenfest propuso la clasificación de transiciones de fase por el orden de la discontinuidad.</li>
        <li>Lev Landau desarrolló la teoría fenomenológica de transiciones de fase.</li>
        <li>Kadanoff y Wilson crearon el grupo de renormalización, revolucionando la física de transiciones críticas.</li>
      </ul>
      <Important>
        <strong>Relevancia:</strong> El estudio de transiciones de fase ha impulsado avances en física, química y ciencia de materiales.
      </Important>
    </div>

    <div className="theory-anecdotes-section">
      <h2><span role="img" aria-label="anécdotas">✨</span> Anécdotas y curiosidades</h2>
      <ul>
        <li>El término "transición de fase" se usa también en biología, sociología y economía para describir cambios colectivos.</li>
        <li>El modelo de Ising, creado para el magnetismo, se usa hoy en día en redes neuronales y teoría de información.</li>
        <li>La transición λ del helio superfluido debe su nombre a la forma de la curva de calor específico.</li>
      </ul>
      <Important>
        <strong>Dato curioso:</strong> El estudio de transiciones de fase conecta la física fundamental con aplicaciones tecnológicas y fenómenos cotidianos.
      </Important>
    </div>

    <div className="theory-summary-section">
      <h2><span role="img" aria-label="resumen">📝</span> Resumen</h2>
      <p>
        Las transiciones de fase son cambios colectivos que implican ruptura de simetría y aparición de nuevos estados de la materia. Su estudio une la física estadística, la termodinámica y la física de partículas, y tiene aplicaciones desde la tecnología hasta la cosmología.
      </p>
      <ul>
        <li>Primer orden: calor latente, discontinuidad en S, V</li>
        <li>Segundo orden: sin calor latente, discontinuidad en C_p, κ_T</li>
        <li>Parámetro de orden: mide el grado de orden</li>
        <li>Ruptura de simetría y universalidad</li>
        <li>Grupo de renormalización y autosimilaridad</li>
      </ul>
      <Important>
        <strong>Utilidad práctica:</strong> Permite diseñar materiales, entender el universo y modelar sistemas complejos.
      </Important>
    </div>
  </>
);

export default TransicionesDeFaseTheory;
