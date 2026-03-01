
import React from 'react';
import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as boltzmannGibbsDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Distribuciones de Boltzmann y Gibbs",
  descripcion: "Teoría, fórmulas, aplicaciones, historia y curiosidades sobre las distribuciones estadísticas fundamentales en termodinámica.",
  isTheoryOnly: false,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

const DistribucionesDeBoltzmannYGibbsTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción">
        <p>
          Las <strong>distribuciones de Boltzmann y Gibbs</strong> son la base de la termodinámica estadística. Permiten predecir cómo se distribuyen las partículas y la energía en sistemas en equilibrio térmico, conectando el mundo microscópico con las propiedades macroscópicas.
        </p>
        <Important>
          Estas distribuciones explican fenómenos como la distribución de velocidades en gases, la ocupación de niveles energéticos, el equilibrio químico y la probabilidad de microestados.
        </Important>
      </TheorySection>

      <TheorySection title="Distribución de Boltzmann">
        <Concept title="Fórmula General">
          <p>
            La <strong>distribución de Boltzmann</strong> describe la población de partículas en un estado de energía ε<sub>i</sub>:
          </p>
          <Formula
            expression={"n_i = (N / Z) g_i e^{-ε_i / (k_B T)}"}
            description="Número de partículas en el estado i."
            calculatorId="boltzmann-ni"
            definitions={boltzmannGibbsDefinitions}
            exercises={exercises}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>n<sub>i</sub>:</strong> Número de partículas en el estado i</li>
            <li><strong>N:</strong> Número total de partículas</li>
            <li><strong>g<sub>i</sub>:</strong> Degeneración del estado i</li>
            <li><strong>ε<sub>i</sub>:</strong> Energía del estado i</li>
            <li><strong>k<sub>B</sub>:</strong> Constante de Boltzmann</li>
            <li><strong>T:</strong> Temperatura</li>
            <li><strong>Z:</strong> Función de partición</li>
          </ul>
        </Concept>
        <Concept title="Factor de Boltzmann">
          <p>
            El <strong>factor de Boltzmann</strong> es la probabilidad relativa de encontrar una partícula en un estado de energía ε:
          </p>
          <Formula
            expression={"f_B = e^{-ε / (k_B T)}"}
            description="Factor de Boltzmann."
            calculatorId="boltzmann-factor"
            definitions={boltzmannGibbsDefinitions}
            exercises={exercises}
          />
        </Concept>
        <Example title="Ejemplo: Dos Niveles Energéticos">
          Considera un sistema con dos niveles: ε₀ = 0 y ε₁ = ΔE. La razón de poblaciones es:
          <Formula
            expression={"n_1 / n_0 = e^{-ΔE / (k_B T)}"}
            calculatorId="boltzmann-ratio"
            definitions={boltzmannGibbsDefinitions}
            exercises={exercises}
          />
        </Example>
      </TheorySection>

      <TheorySection title="Distribución de Gibbs">
        <Concept title="Fórmula General">
          <p>
            La <strong>distribución de Gibbs</strong> da la probabilidad de que el sistema esté en un microestado de energía E<sub>i</sub>:
          </p>
          <Formula
            expression={"P_i = (1 / Z) * exp(-E_i / (k_B * T))"}
            description="Probabilidad de microestado i."
            calculatorId="gibbs-pi"
            definitions={boltzmannGibbsDefinitions}
            exercises={exercises}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>P<sub>i</sub>:</strong> Probabilidad del microestado i</li>
            <li><strong>E<sub>i</sub>:</strong> Energía del microestado i</li>
            <li><strong>Z:</strong> Función de partición</li>
            <li><strong>k<sub>B</sub>:</strong> Constante de Boltzmann</li>
            <li><strong>T:</strong> Temperatura</li>
          </ul>
        </Concept>
        <Concept title="Función de Partición">
          <p>
            La <strong>función de partición</strong> Z es el factor de normalización que aparece en ambas distribuciones y resume toda la información termodinámica del sistema:
          </p>
          <Formula
            expression={"Z = sum_i [g_i * exp(-epsilon_i / (k_B * T))]"}
            description="Función de partición para partículas."
            calculatorId="partition-z"
            definitions={boltzmannGibbsDefinitions}
            exercises={exercises}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>g<sub>i</sub>:</strong> Degeneración del estado i</li>
            <li><strong>epsilon<sub>i</sub>:</strong> Energía del estado i</li>
            <li><strong>k<sub>B</sub>:</strong> Constante de Boltzmann</li>
            <li><strong>T:</strong> Temperatura</li>
          </ul>
          <Important>
            Si se conoce Z, se puede deducir toda la termodinámica del sistema.
          </Important>
          <Example title="Ejemplo: Dos Niveles Energéticos">
            Para un sistema de dos niveles:
            <Formula
              expression={"Z = g_1 * exp(-epsilon_1 / (k_B * T)) + g_2 * exp(-epsilon_2 / (k_B * T))"}
              definitions={boltzmannGibbsDefinitions}
              exercises={exercises}
            />
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Propiedades Termodinámicas desde Z">
        <Concept title="Energía Interna, Entropía y Energía Libre">
          <p>
            Una vez conocida la función de partición, se pueden calcular propiedades macroscópicas:
          </p>
          <ul>
            <li><strong>Energía interna:</strong> {'<'}E{'>'} = -∂ ln Z / ∂β, β = 1/(k<sub>B</sub>T)</li>
            <li><strong>Entropía:</strong> S = k<sub>B</sub> ln Z + k<sub>B</sub>T (∂ ln Z / ∂T)</li>
            <li><strong>Energía libre de Helmholtz:</strong> F = -k<sub>B</sub>T ln Z</li>
            <li><strong>Presión:</strong> P = k<sub>B</sub>T (∂ ln Z / ∂V)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Resumen y Conceptos Clave">
        <Important>
          <strong>Puntos fundamentales:</strong>
          <ul>
            <li>Boltzmann: n<sub>i</sub> ∝ g<sub>i</sub> e<sup>-ε<sub>i</sub> / (k<sub>B</sub>T)</sup></li>
            <li>Gibbs: P<sub>i</sub> = (1/Z) e<sup>-E<sub>i</sub> / (k<sub>B</sub>T)</sup></li>
            <li>Factor de Boltzmann: e<sup>-E / (k<sub>B</sub>T)</sup></li>
            <li>Función de partición Z: contiene toda la información termodinámica</li>
            <li>Temperatura: controla el balance entre energía y entropía</li>
          </ul>
        </Important>
      </TheorySection>

      {/* Secciones especiales al final */}
      <div className="theory-history-section">
        <h2><span>📜</span> Historia: Origen de las distribuciones</h2>
        <p>
          Ludwig Boltzmann (1844-1906) y Josiah Willard Gibbs (1839-1903) sentaron las bases de la estadística moderna. Sus distribuciones permitieron conectar la física microscópica con la macroscópica y explicar el comportamiento de sistemas complejos.
        </p>
        <ul className="theory-subsection">
          <li>1872: Boltzmann formula la ecuación de transporte y la distribución exponencial.</li>
          <li>1902: Gibbs publica "Elementary Principles in Statistical Mechanics".</li>
          <li>Siglo XX: Aplicaciones en física, química y biología.</li>
        </ul>
      </div>
      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <ul>
          <li>Distribución de velocidades de Maxwell-Boltzmann en gases.</li>
          <li>Fórmula barométrica para la atmósfera.</li>
          <li>Equilibrio químico y constantes de equilibrio.</li>
          <li>Propiedades de semiconductores y materiales.</li>
        </ul>
      </div>
      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas y curiosidades</h2>
        <ul>
          <li>El factor de Boltzmann aparece en la ecuación de la probabilidad de vida en la Tierra según la entropía del universo.</li>
          <li>La función de partición es tan poderosa que, en teoría, permite calcular cualquier propiedad macroscópica si se conocen todos los microestados.</li>
          <li>La estadística de Boltzmann-Gibbs es la base de la física estadística clásica, pero fue superada en sistemas cuánticos por Fermi-Dirac y Bose-Einstein.</li>
        </ul>
      </div>
    </>
  );
};

export default DistribucionesDeBoltzmannYGibbsTheory;
