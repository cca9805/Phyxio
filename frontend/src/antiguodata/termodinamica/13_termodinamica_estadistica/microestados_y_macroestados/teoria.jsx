import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as microestadosDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Microestados y Macroestados",
  descripcion: "Descripción microscópica y macroscópica de sistemas termodinámicos",
  isTheoryOnly: true,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};


const MicroestadosYMacroestadosTheory = ({ exercises }) => {
  return (
    <>
      {/* 1. TEORÍA PRINCIPAL */}
      <TheorySection title="Introducción a la descripción estadística">
        <Concept title="¿Qué son microestados y macroestados?">
          <p>
            La <strong>termodinámica estadística</strong> conecta el mundo microscópico de las partículas individuales con el mundo macroscópico de las propiedades observables. Esta conexión se realiza a través de los conceptos de <strong>microestados</strong> y <strong>macroestados</strong>.
          </p>
          <Important>
            La termodinámica clásica describe sistemas mediante variables macroscópicas (P, V, T), mientras que la estadística explica estas propiedades a partir del comportamiento colectivo de un número enorme de partículas microscópicas.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Microestados: descripción microscópica">
        <Concept title="Definición de microestado">
          <p>
            Un <strong>microestado</strong> es una especificación completa y detallada del estado de cada partícula individual en un sistema. Para un sistema clásico, esto significa conocer la posición y el momento de cada partícula. Para un sistema cuántico, implica conocer el estado cuántico de cada partícula.
          </p>
          <p>Matemáticamente:</p>
          <ul>
            <li><strong>Sistema clásico:</strong> <Formula expression={String.raw`\{(\vec{r}_1, \vec{p}_1), (\vec{r}_2, \vec{p}_2), ..., (\vec{r}_N, \vec{p}_N)\}`} /></li>
            <li><strong>Sistema cuántico:</strong> <Formula expression={String.raw`|\psi\rangle = |n_1, n_2, ..., n_N\rangle`} /></li>
          </ul>
          <p>donde N es el número total de partículas en el sistema.</p>
        </Concept>
        <Concept title="Características de los microestados">
          <ul>
            <li><strong>Especificidad completa:</strong> Un microestado contiene toda la información posible sobre el sistema a nivel microscópico.</li>
            <li><strong>Número astronómico:</strong> Para un sistema macroscópico típico (10²³ partículas), el número de microestados posibles es inmenso.</li>
            <li><strong>Inaccesibilidad experimental:</strong> Es imposible medir o seguir microestados individuales en sistemas macroscópicos.</li>
            <li><strong>Evolución temporal:</strong> Los microestados cambian continuamente debido al movimiento y las interacciones de las partículas.</li>
          </ul>
        </Concept>
        <Example title="Ejemplo: sistema de dos partículas">
          Considera dos partículas distinguibles en una caja dividida en dos mitades (izquierda L y derecha R). Los posibles microestados son:
          <ul>
            <li>Microestado 1: (L,L)</li>
            <li>Microestado 2: (L,R)</li>
            <li>Microestado 3: (R,L)</li>
            <li>Microestado 4: (R,R)</li>
          </ul>
          Total: 4 microestados posibles.
        </Example>
      </TheorySection>

      <TheorySection title="Macroestados: descripción macroscópica">
        <Concept title="Definición de macroestado">
          <p>
            Un <strong>macroestado</strong> es una descripción del sistema en términos de variables macroscópicas observables, como presión (P), volumen (V), temperatura (T), energía (E), número de partículas (N), etc.
          </p>
          <Important>
            Un macroestado NO especifica el estado de cada partícula individual, sino solo propiedades promedio o globales del sistema completo.
          </Important>
        </Concept>
        <Concept title="Relación entre macroestados y microestados">
          <p>
            Un único macroestado puede ser realizado por un número enorme de microestados diferentes. Esta multiplicidad es clave para entender la entropía y la segunda ley de la termodinámica desde una perspectiva estadística.
          </p>
        </Concept>
        <Example title="Ejemplo: distribución de partículas">
          Dos partículas en una caja dividida:
          <ul>
            <li><strong>Macroestado A:</strong> Ambas en la mitad izquierda → (L,L), Ω = 1</li>
            <li><strong>Macroestado B:</strong> Una en cada mitad → (L,R), (R,L), Ω = 2</li>
            <li><strong>Macroestado C:</strong> Ambas en la mitad derecha → (R,R), Ω = 1</li>
          </ul>
          El macroestado B es más probable porque puede realizarse de más formas.
        </Example>
      </TheorySection>

      {/* 2. SECCIÓN DE FÓRMULAS PRINCIPALES */}
      <TheorySection title="Fórmulas principales y derivadas">
        <Concept title="Multiplicidad y entropía">
          <Formula
            expression={String.raw`S = k_B \ln \Omega`}
            calculatorId="microestados_y_macroestados-theory"
            definitions={microestadosDefinitions}
            exercises={exercises}
          />
          <strong className="donde-campo">Donde:</strong>
          <ul>
            <li><b>S</b>: entropía (J/K)</li>
            <li><b>k_B</b>: constante de Boltzmann (J/K)</li>
            <li><b>Ω</b>: multiplicidad (adimensional)</li>
          </ul>
        </Concept>
        <Concept title="Probabilidad de un macroestado">
          <Formula
            expression={String.raw`P = \frac{\Omega}{\Omega_{\text{total}}}`}
            calculatorId="microestados_y_macroestados-theory"
            definitions={microestadosDefinitions}
            exercises={exercises}
          />
          <strong className="donde-campo">Donde:</strong>
          <ul>
            <li><b>P</b>: probabilidad (adimensional)</li>
            <li><b>Ω</b>: multiplicidad del macroestado</li>
            <li><b>Ω_total</b>: número total de microestados</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* 3. APLICACIONES */}
      <div className="theory-applications-section">
        <h2><span role="img" aria-label="aplicaciones">🌍</span> Aplicaciones en la vida real</h2>
        <ul>
          <li>Explicación microscópica de la entropía y la irreversibilidad.</li>
          <li>Predicción de la dirección de procesos espontáneos.</li>
          <li>Base para la física de materiales, biofísica y cosmología.</li>
          <li>Modelado de sistemas complejos en computación y teoría de la información.</li>
        </ul>
      </div>

      {/* 4. HECHOS HISTÓRICOS */}
      <div className="theory-history-section">
        <h2><span role="img" aria-label="historia">📜</span> Hechos históricos relevantes</h2>
        <ul>
          <li>Ludwig Boltzmann (1844-1906) desarrolló la conexión entre microestados, macroestados y entropía.</li>
          <li>James Clerk Maxwell introdujo el concepto de distribución de velocidades y microestados.</li>
          <li>La ecuación S = k_B ln(Ω) está grabada en la tumba de Boltzmann en Viena.</li>
        </ul>
        <Important>
          <strong>Relevancia:</strong> La estadística de microestados es la base de la física moderna y la comprensión de la irreversibilidad.
        </Important>
      </div>

      {/* 5. ANÉCDOTAS Y CURIOSIDADES */}
      <div className="theory-anecdotes-section">
        <h2><span role="img" aria-label="anécdotas">✨</span> Anécdotas y curiosidades</h2>
        <ul>
          <li>La ecuación de Boltzmann fue tan revolucionaria que generó debates filosóficos sobre el tiempo y el azar.</li>
          <li>El concepto de microestado es fundamental en criptografía y teoría de la información.</li>
          <li>El número de microestados de un mol de gas es tan grande que supera el número de átomos en el universo observable.</li>
        </ul>
        <Important>
          <strong>Curiosidad:</strong> El concepto de microestado se usa en algoritmos de inteligencia artificial y simulaciones Monte Carlo.
        </Important>
      </div>

      {/* 6. RESUMEN */}
      <div className="theory-summary-section">
        <h2><span role="img" aria-label="resumen">📝</span> Resumen</h2>
        <p>
          Los microestados y macroestados permiten conectar la física microscópica con la termodinámica macroscópica. La multiplicidad determina la probabilidad y la entropía, y explica la irreversibilidad de los procesos naturales.
        </p>
        <ul>
          <li><Formula expression={String.raw`S = k_B \ln \Omega`} description="Entropía y multiplicidad" /></li>
          <li><Formula expression={String.raw`P = \frac{\Omega}{\Omega_{\text{total}}}`} description="Probabilidad de macroestado" /></li>
        </ul>
        <Important>
          <strong>Clave:</strong> La estadística de microestados es la base de la física moderna y la comprensión de la irreversibilidad.
        </Important>
      </div>
    </>
  );
};

export default MicroestadosYMacroestadosTheory;