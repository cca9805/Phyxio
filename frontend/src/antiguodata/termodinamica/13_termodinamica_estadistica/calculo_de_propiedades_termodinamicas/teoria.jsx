import React from 'react';
import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as propiedadesDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Cálculo de Propiedades Termodinámicas",
  descripcion: "Obtención de propiedades macroscópicas desde la función de partición",
  isTheoryOnly: false,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

const CalculodePropiedadesTermodinamicasTheory = ({ exercises }) => {
  return (
    <>
      <div className="theory-intro-section">
        <h2>¿Para qué se usa el cálculo de propiedades termodinámicas?</h2>
        <p>
          El cálculo de propiedades termodinámicas permite predecir y entender el comportamiento de sistemas físicos en función de variables como la temperatura, presión y volumen. Estas propiedades —como la energía interna, la entropía, la presión o el calor específico— son esenciales para diseñar motores, refrigeradores, procesos industriales, materiales y dispositivos tecnológicos. Por ejemplo, conocer el calor específico de un material es clave para la ingeniería térmica, mientras que la energía libre de Helmholtz es fundamental en el diseño de baterías y sistemas químicos. En resumen, la termodinámica aplicada es la base para optimizar procesos, ahorrar energía y desarrollar nuevas tecnologías en la industria, la investigación y la vida cotidiana.
        </p>
      </div>

      {/* --- TEORÍA Y FÓRMULAS AGRUPADAS POR CONCEPTO --- */}
      <TheorySection title="Conexión Estadística-Termodinámica y Propiedades Fundamentales">
        <Concept title="Función de Partición y Energía Interna">
          <p>
            La mecánica estadística es el puente entre el comportamiento microscópico de las partículas y las propiedades macroscópicas que medimos en el laboratorio. La <strong>función de partición</strong> es la herramienta central: resume toda la información estadística del sistema y permite deducir energía, entropía, presión y más, a partir de la probabilidad de los estados microscópicos.
          </p>
          <Important>
            La función de partición Z contiene toda la información termodinámica del sistema. Todas las propiedades se obtienen mediante derivadas de ln Z. Comprender Z es comprender la termodinámica desde la estadística.
          </Important>
          <p>
            La energía interna representa la suma de todas las energías microscópicas (cinética y potencial) de las partículas del sistema. En estadística, se obtiene a partir de la función de partición, reflejando cómo la temperatura y la estructura de los estados afectan la energía total.
          </p>
          <Formula
            expression={String.raw`U = -\frac{\partial \ln Z}{\partial \beta}`}
            calculatorId="energia-interna-z"
            definitions={propiedadesDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Forma alternativa", expression: String.raw`U = k_B T^2 \frac{\partial \ln Z}{\partial T}` }
            ]}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>U:</strong> Energía interna (J)</li>
            <li><strong>Z:</strong> Función de partición canónica</li>
            <li><strong>β:</strong> Inverso de la temperatura, β = 1/(k_B T) (1/J)</li>
            <li><strong>k_B:</strong> Constante de Boltzmann (1.381 × 10⁻²³ J/K)</li>
            <li><strong>T:</strong> Temperatura absoluta (K)</li>
          </ul>
        </Concept>
        <Concept title="Entropía">
          <p>
            La entropía mide el desorden o la cantidad de información que falta para describir completamente el estado microscópico del sistema. En estadística, se relaciona con el número de microestados accesibles y se calcula a partir de la función de partición y la energía interna.
          </p>
          <Formula
            expression={String.raw`S = k_B \ln Z + \frac{U}{T}`}
            calculatorId="entropia-z"
            definitions={propiedadesDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Forma compacta", expression: String.raw`S = k_B (\ln Z + \beta U)` }
            ]}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>S:</strong> Entropía (J/K)</li>
            <li><strong>k_B:</strong> Constante de Boltzmann (1.381 × 10⁻²³ J/K)</li>
            <li><strong>Z:</strong> Función de partición canónica</li>
            <li><strong>U:</strong> Energía interna (J)</li>
            <li><strong>T:</strong> Temperatura absoluta (K)</li>
            <li><strong>β:</strong> Inverso de la temperatura, β = 1/(k_B T) (1/J)</li>
          </ul>
        </Concept>
        <Concept title="Energía Libre de Helmholtz">
          <p>
            La energía libre de Helmholtz es la cantidad de energía disponible para realizar trabajo a temperatura y volumen constantes. Es fundamental en procesos donde el sistema puede intercambiar energía con el entorno, y se obtiene directamente de la función de partición.
          </p>
          <Formula
            expression={String.raw`F = -k_B T \ln Z`}
            calculatorId="helmholtz-z"
            definitions={propiedadesDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular función de partición (Z)", expression: String.raw`Z = e^{-F/(k_B T)}` },
              { description: "Calcular temperatura (T)", expression: String.raw`T = -\frac{F}{k_B \ln Z}` }
            ]}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>F:</strong> Energía libre de Helmholtz (J)</li>
            <li><strong>k_B:</strong> Constante de Boltzmann (1.381 × 10⁻²³ J/K)</li>
            <li><strong>T:</strong> Temperatura absoluta (K)</li>
            <li><strong>Z:</strong> Función de partición canónica</li>
          </ul>
          <p>
            Esta es la relación más directa. Todas las demás propiedades se derivan de F.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Propiedades Derivadas y Fluctuaciones">
        <Concept title="Presión">
          <p>
            La presión es la fuerza que ejerce el sistema sobre las paredes del recipiente. En estadística, se relaciona con cómo cambia la energía libre de Helmholtz al variar el volumen, y se puede calcular a partir de la función de partición.
          </p>
          <Formula
            expression={String.raw`P = -\frac{\partial F}{\partial V} = k_B T \frac{\partial \ln Z}{\partial V}`}
            calculatorId="presion-z"
            definitions={propiedadesDefinitions}
            exercises={exercises}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>P:</strong> Presión (Pa)</li>
            <li><strong>F:</strong> Energía libre de Helmholtz (J)</li>
            <li><strong>V:</strong> Volumen (m³)</li>
            <li><strong>k_B:</strong> Constante de Boltzmann (1.381 × 10⁻²³ J/K)</li>
            <li><strong>T:</strong> Temperatura absoluta (K)</li>
            <li><strong>Z:</strong> Función de partición canónica</li>
          </ul>
        </Concept>
        <Concept title="Calor Específico">
          <p>
            El calor específico indica cuánta energía se necesita para aumentar la temperatura del sistema en una unidad. En estadística, se relaciona con la variación de la energía interna respecto a la temperatura y con las fluctuaciones de la energía.
          </p>
          <Formula
            expression={String.raw`C_V = \frac{\partial U}{\partial T} = k_B \beta^2 \frac{\partial^2 \ln Z}{\partial \beta^2}`}
            calculatorId="calor-especifico-z"
            definitions={propiedadesDefinitions}
            exercises={exercises}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>C_V:</strong> Calor específico a volumen constante (J/K)</li>
            <li><strong>U:</strong> Energía interna (J)</li>
            <li><strong>T:</strong> Temperatura absoluta (K)</li>
            <li><strong>k_B:</strong> Constante de Boltzmann (1.381 × 10⁻²³ J/K)</li>
            <li><strong>β:</strong> Inverso de la temperatura, β = 1/(k_B T) (1/J)</li>
            <li><strong>Z:</strong> Función de partición canónica</li>
          </ul>
        </Concept>
        <Concept title="Fluctuación de Energía">
          <p>
            En sistemas microscópicos, la energía no es constante sino que fluctúa alrededor de un valor promedio. La magnitud de estas fluctuaciones está relacionada con el calor específico y la temperatura, y es fundamental para entender fenómenos como la estabilidad de los sistemas y el ruido térmico.
          </p>
          <Formula
            expression={String.raw`\langle (\Delta E)^2 \rangle = k_B T^2 C_V`}
            calculatorId="fluctuacion-energia"
            definitions={propiedadesDefinitions}
            exercises={exercises}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>⟨(ΔE)²⟩:</strong> Fluctuación cuadrática media de la energía (J²)</li>
            <li><strong>k_B:</strong> Constante de Boltzmann (1.381 × 10⁻²³ J/K)</li>
            <li><strong>T:</strong> Temperatura absoluta (K)</li>
            <li><strong>C_V:</strong> Calor específico a volumen constante (J/K)</li>
          </ul>
          <p>
            Las fluctuaciones están relacionadas con la capacidad calorífica.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplo: Gas Ideal Monoatómico">
        <Concept title="Función de Partición del Gas Ideal">
          <p>
            El gas ideal monoatómico es un modelo fundamental en termodinámica. Su función de partición resume cómo las partículas, consideradas puntuales y no interaccionantes, distribuyen su energía en el espacio y la velocidad. A partir de esta función se deducen todas las propiedades macroscópicas del gas.
          </p>
          <Formula
            expression={String.raw`Z = \frac{V^N}{N!} \left(\frac{2\pi m k_B T}{h^2}\right)^{3N/2}`}
            calculatorId="z-gas-ideal"
            definitions={propiedadesDefinitions}
            exercises={exercises}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>Z:</strong> Función de partición canónica</li>
            <li><strong>V:</strong> Volumen (m³)</li>
            <li><strong>N:</strong> Número de partículas</li>
            <li><strong>m:</strong> Masa de una partícula (kg)</li>
            <li><strong>k_B:</strong> Constante de Boltzmann (1.381 × 10⁻²³ J/K)</li>
            <li><strong>T:</strong> Temperatura absoluta (K)</li>
            <li><strong>h:</strong> Constante de Planck (6.626 × 10⁻³⁴ J·s)</li>
          </ul>
          <Example title="Cálculo de Propiedades">
            A partir de esta Z, obtenemos:
            <ul>
              <li><strong>Energía:</strong> U = (3/2)Nk_B T</li>
              <li><strong>Presión:</strong> PV = Nk_B T</li>
              <li><strong>Entropía:</strong> S = Nk_B [ln(V/N) + (3/2)ln(2πmk_B T/h²) + 5/2]</li>
              <li><strong>Calor específico:</strong> C_V = (3/2)Nk_B</li>
            </ul>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Casos Límite y Ejemplos Especiales">
        <Concept title="Comportamiento a T→0 y T→∞">
          <p>
            <strong>A T→0:</strong> La energía interna y la entropía tienden a valores mínimos, cumpliendo el tercer principio de la termodinámica. El calor específico se anula, reflejando que el sistema no puede absorber más energía térmica.
          </p>
          <p>
            <strong>A T→∞:</strong> La función de partición crece rápidamente, la energía interna y la entropía alcanzan los valores clásicos predichos por la equipartición. El calor específico se aproxima a un valor constante (ejemplo: (3/2)Nk_B para un gas ideal monoatómico).
          </p>
        </Concept>
        <Concept title="Z→1 y sistemas de pocos estados">
          <p>
            Cuando la función de partición Z ≈ 1, el sistema solo tiene un microestado accesible (por ejemplo, a T→0). Todas las propiedades termodinámicas reflejan la ausencia de desorden y energía térmica.
          </p>
        </Concept>
      </TheorySection>


      {/* --- SECCIONES FINALES SEGÚN LA GUÍA --- */}
      <div className="theory-applications-section">
        <h2><span role="img" aria-label="aplicaciones">🌍</span> Aplicaciones en la vida real</h2>
        <ul>
          <li>Diseño de motores térmicos y refrigeradores eficientes.</li>
          <li>Optimización de procesos químicos y baterías.</li>
          <li>Desarrollo de materiales con propiedades térmicas específicas.</li>
          <li>Simulación de procesos industriales y control de calidad.</li>
        </ul>
      </div>

      <div className="theory-history-section">
        <h2><span role="img" aria-label="historia">📜</span> Hechos históricos relevantes</h2>
        <p>
          La función de partición fue introducida por Josiah Willard Gibbs y Ludwig Boltzmann a finales del siglo XIX. Su desarrollo permitió conectar la estadística con la termodinámica y revolucionó la física moderna.
        </p>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span role="img" aria-label="anecdotas">✨</span> Anécdotas y curiosidades</h2>
        <ul>
          <li>La función de partición resume toda la física estadística de un sistema en una sola expresión matemática.</li>
          <li>El cálculo de propiedades desde Z permite predecir comportamientos de materiales antes de fabricarlos.</li>
          <li>El concepto de función de partición es clave en física, química, biología y hasta en finanzas (modelos de riesgo y sistemas complejos).</li>
          <li>El desarrollo de la estadística moderna permitió entender por qué el calor específico de los sólidos disminuye a bajas temperaturas, resolviendo un enigma clásico.</li>
        </ul>
      </div>

      <div className="theory-summary-section">
        <h2><span role="img" aria-label="resumen">📝</span> Resumen</h2>
        <p>
          El cálculo de propiedades termodinámicas a partir de la función de partición permite conectar la física estadística con la observación experimental y la ingeniería. Dominar estos conceptos es clave para comprender y diseñar sistemas físicos y tecnológicos en la ciencia moderna.
        </p>
        <ul>
          <li>La función de partición es el puente entre micro y macroscópico.</li>
          <li>Permite deducir todas las propiedades termodinámicas relevantes.</li>
          <li>Su comprensión es esencial en física, química e ingeniería.</li>
        </ul>
      </div>
    </>
  );
};

export default CalculodePropiedadesTermodinamicasTheory;
