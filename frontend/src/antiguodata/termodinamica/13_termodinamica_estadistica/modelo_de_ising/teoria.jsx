import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as isingDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Modelo de Ising",
  descripcion: "Modelo de sistemas magnéticos y transiciones de fase",
  isTheoryOnly: true,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};


const ModeloDeIsingTheory = ({ exercises }) => {
  return (
    <>
      {/* 1. TEORÍA PRINCIPAL */}
      <TheorySection title="Introducción al modelo de Ising">
        <Concept title="¿Qué es el modelo de Ising?">
          <p>
            El <strong>modelo de Ising</strong> es un modelo fundamental de la física estadística que describe spins interactuantes en una red. Permite estudiar transiciones de fase y fenómenos críticos de manera simple pero profunda.
          </p>
          <Important>
            A pesar de su simplicidad, el modelo de Ising exhibe comportamiento complejo y es clave para entender el magnetismo y la universalidad en física.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Definición y fórmulas principales">
        <Concept title="Hamiltoniano del modelo de Ising">
          <Formula
            expression={String.raw`H = -J \sum_{<i,j>} s_i s_j - h \sum_i s_i`}
            calculatorId="modelo_de_ising-theory"
            definitions={isingDefinitions}
            exercises={exercises}
          />
          <strong className="donde-campo">Donde:</strong>
          <ul>
            <li><b>s_i</b>: spin en el sitio i (±1)</li>
            <li><b>J</b>: constante de acoplamiento (energía de interacción)</li>
            <li><b>h</b>: campo magnético externo</li>
            <li><b>{'<'}i,j{'>'}</b>: suma sobre vecinos más cercanos</li>
          </ul>
        </Concept>
        <Concept title="Magnetización">
          <Formula
            expression={String.raw`M = \frac{1}{N} \sum_i s_i`}
            calculatorId="modelo_de_ising-theory"
            definitions={isingDefinitions}
            exercises={exercises}
          />
          <strong className="donde-campo">Donde:</strong>
          <ul>
            <li><b>M</b>: magnetización promedio</li>
            <li><b>N</b>: número de spins</li>
            <li><b>s_i</b>: spin en el sitio i (±1)</li>
          </ul>
        </Concept>
        <Concept title="Función de partición">
          <Formula
            expression={String.raw`Z = \sum_{\{s_i\}} e^{-\beta H}`}
            calculatorId="modelo_de_ising-theory"
            definitions={isingDefinitions}
            exercises={exercises}
          />
          <strong className="donde-campo">Donde:</strong>
          <ul>
            <li><b>Z</b>: función de partición</li>
            <li><b>\beta</b>: 1/(k_B T)</li>
            <li><b>H</b>: hamiltoniano del sistema</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* 2. SECCIÓN DE FÓRMULAS DERIVADAS Y EJEMPLOS */}
      <TheorySection title="Soluciones y comportamiento en distintas dimensiones">
        <Concept title="Modelo de Ising en 1D">
          <Formula
            expression={String.raw`Z = [2 \cosh(\beta J)]^N`}
            calculatorId="modelo_de_ising-theory"
            definitions={isingDefinitions}
            exercises={exercises}
          />
          <ul>
            <li>No hay transición de fase a temperatura finita</li>
            <li>La magnetización espontánea es cero para T {'>'} 0</li>
            <li>Solo hay orden perfecto a T = 0</li>
          </ul>
        </Concept>
        <Concept title="Modelo de Ising en 2D (Onsager)">
          <Formula
            expression={String.raw`k_B T_c = \frac{2J}{\ln(1+\sqrt{2})}`}
            calculatorId="modelo_de_ising-theory"
            definitions={isingDefinitions}
            exercises={exercises}
          />
          <ul>
            <li>Existe transición de fase a T_c ≈ 2.269 J/k_B</li>
            <li>Magnetización espontánea para T {'<'} T_c</li>
            <li>Calor específico diverge logarítmicamente en T_c</li>
            <li>Exponente crítico β = 1/8</li>
          </ul>
        </Concept>
        <Concept title="Modelo de Ising en 3D">
          <ul>
            <li>No tiene solución exacta conocida</li>
            <li>Temperatura crítica: k_B T_c ≈ 4.511 J</li>
            <li>Exponentes críticos universales: β ≈ 0.326, γ ≈ 1.237, ν ≈ 0.630</li>
          </ul>
        </Concept>
        <Example title="Ejemplo: Simulación Monte Carlo">
          <p>En simulaciones, se observa:</p>
          <ul>
            <li>T {'<<'} T_c: spins alineados, M ≈ ±1</li>
            <li>T ≈ T_c: dominios de todos los tamaños, M ≈ 0</li>
            <li>T {'>>'} T_c: spins desordenados, M = 0</li>
          </ul>
        </Example>
      </TheorySection>

      {/* 3. APLICACIONES */}
      <div className="theory-applications-section">
        <h2><span role="img" aria-label="aplicaciones">🌍</span> Aplicaciones en la vida real</h2>
        <ul>
          <li>Ferromagnetismo y transiciones magnéticas</li>
          <li>Transición líquido-gas cerca del punto crítico</li>
          <li>Aleaciones binarias y ordenamiento</li>
          <li>Redes neuronales y modelos de opinión</li>
        </ul>
      </div>

      {/* 4. HECHOS HISTÓRICOS */}
      <div className="theory-history-section">
        <h2><span role="img" aria-label="historia">📜</span> Hechos históricos relevantes</h2>
        <ul>
          <li>Propuesto por Wilhelm Lenz (1920), resuelto en 1D por Ernst Ising (1925)</li>
          <li>Solución exacta en 2D por Lars Onsager (1944)</li>
          <li>Modelo central en la teoría de transiciones de fase y universalidad</li>
        </ul>
        <Important>
          <strong>Relevancia:</strong> El modelo de Ising es un pilar de la física estadística y la teoría de sistemas complejos.
        </Important>
      </div>

      {/* 5. ANÉCDOTAS Y CURIOSIDADES */}
      <div className="theory-anecdotes-section">
        <h2><span role="img" aria-label="anécdotas">✨</span> Anécdotas y curiosidades</h2>
        <ul>
          <li>El modelo de Ising se usa en inteligencia artificial y biología computacional</li>
          <li>El nombre "Ising" se pronuncia "Ees-ing"</li>
          <li>El modelo de Potts y el modelo XY son generalizaciones directas</li>
        </ul>
        <Important>
          <strong>Curiosidad:</strong> El modelo de Ising es tan versátil que se ha usado para modelar mercados financieros y redes sociales.
        </Important>
      </div>

      {/* 6. RESUMEN */}
      <div className="theory-summary-section">
        <h2><span role="img" aria-label="resumen">📝</span> Resumen</h2>
        <p>
          El modelo de Ising es un sistema paradigmático para estudiar transiciones de fase, universalidad y fenómenos cooperativos en física y más allá.
        </p>
        <ul>
          <li><Formula expression={String.raw`H = -J \sum_{<i,j>} s_i s_j - h \sum_i s_i`} description="Hamiltoniano de Ising" /></li>
          <li><Formula expression={String.raw`M = \frac{1}{N} \sum_i s_i`} description="Magnetización promedio" /></li>
          <li><Formula expression={String.raw`Z = \sum_{\{s_i\}} e^{-\beta H}`} description="Función de partición" /></li>
        </ul>
        <Important>
          <strong>Clave:</strong> El modelo de Ising es un ejemplo de cómo la simplicidad puede dar lugar a una física rica y universal.
        </Important>
      </div>
    </>
  );
};

export default ModeloDeIsingTheory;
