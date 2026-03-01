import React from 'react';
import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as cuanticaDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Aplicaciones de la Estadística Cuántica",
  descripcion: "Teoría y aplicaciones de la estadística cuántica: radiación, sólidos, gases y condensados.",
  isTheoryOnly: false,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

const AplicacionesdelaEstadisticaCuanticaTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Radiación de Cuerpo Negro">
        <p>
          La <strong>ley de Planck</strong> describe cómo un cuerpo negro (un objeto ideal que absorbe y emite toda la radiación) distribuye su energía en diferentes frecuencias cuando está a una temperatura dada. Este fenómeno fue clave para el nacimiento de la mecánica cuántica, ya que la física clásica no podía explicar por qué la radiación ultravioleta no se hacía infinita (catástrofe ultravioleta). La estadística cuántica permitió entender cómo la energía se distribuye en paquetes discretos (cuantos), resolviendo este problema y abriendo la puerta a la física moderna.
        </p>
        <Concept title="Densidad Espectral de Energía">
          <p>
            La densidad espectral de energía indica cuánta energía radiante emite un cuerpo negro por unidad de volumen, por cada frecuencia, a una temperatura dada. Es fundamental para entender la radiación térmica y el color de los objetos calientes, como el Sol o una barra de metal al rojo vivo.
          </p>
          <Formula
            expression={String.raw`u(\nu, T) = \frac{8\pi h \nu^3}{c^3} \frac{1}{e^{h\nu/k_B T} - 1}`}
            calculatorId="planck-ley"
            definitions={cuanticaDefinitions}
            exercises={exercises}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>u(ν,T):</strong> Densidad espectral de energía (J·s/m³)</li>
            <li><strong>h:</strong> Constante de Planck (6.626 × 10⁻³⁴ J·s)</li>
            <li><strong>ν:</strong> Frecuencia de la radiación (Hz)</li>
            <li><strong>c:</strong> Velocidad de la luz (3 × 10⁸ m/s)</li>
            <li><strong>k_B:</strong> Constante de Boltzmann (1.381 × 10⁻²³ J/K)</li>
            <li><strong>T:</strong> Temperatura absoluta (K)</li>
          </ul>
        </Concept>
        <Concept title="Ley de Stefan-Boltzmann">
          <p>
            La ley de Stefan-Boltzmann establece que la energía total emitida por un cuerpo negro es proporcional a la cuarta potencia de su temperatura. Esto significa que pequeños aumentos de temperatura producen grandes incrementos en la energía emitida. Es crucial para comprender el balance energético de planetas, estrellas y hornos industriales.
          </p>
          <Formula
            expression={String.raw`u_{\text{total}} = \frac{4\sigma}{c} T^4`}
            calculatorId="stefan-boltzmann"
            definitions={cuanticaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Constante de Stefan-Boltzmann", expression: String.raw`\sigma = 5.67 \times 10^{-8} \text{ W/(m}^2\text{·K}^4\text{)}` }
            ]}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>u_total:</strong> Densidad de energía total (J/m³)</li>
            <li><strong>σ:</strong> Constante de Stefan-Boltzmann (5.67 × 10⁻⁸ W/(m²·K⁴))</li>
            <li><strong>c:</strong> Velocidad de la luz (3 × 10⁸ m/s)</li>
            <li><strong>T:</strong> Temperatura absoluta (K)</li>
          </ul>
        </Concept>
        <Concept title="Ley de Desplazamiento de Wien">
          <p>
            La ley de desplazamiento de Wien indica que la longitud de onda en la que un cuerpo negro emite la mayor parte de su energía depende inversamente de la temperatura. Por eso, los objetos más calientes emiten luz más azulada y los más fríos, más rojiza. Esta ley permite, por ejemplo, estimar la temperatura de las estrellas a partir de su color.
          </p>
          <Formula
            expression={String.raw`\lambda_{\mathrm{max}} T = 2.898 \times 10^{-3}\ \mathrm{m\cdot K}`}
            calculatorId="wien-ley"
            definitions={cuanticaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular longitud de onda máxima", expression: String.raw`\lambda_{\text{max}} = \frac{2.898 \times 10^{-3}}{T}` },
              { description: "Calcular temperatura", expression: String.raw`T = \frac{2.898 \times 10^{-3}}{\lambda_{\text{max}}}` }
            ]}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>λ_max:</strong> Longitud de onda del máximo de emisión (m)</li>
            <li><strong>T:</strong> Temperatura absoluta (K)</li>
          </ul>
        </Concept>
      </TheorySection>



      {/* ...existing code... */}

      <TheorySection title="Calor Específico de Sólidos">
        <Concept title="Modelo de Einstein">
          <p>
            El modelo de Einstein para el calor específico de los sólidos fue uno de los primeros intentos de aplicar la mecánica cuántica a la materia condensada. Einstein propuso que los átomos de un sólido vibran como osciladores cuánticos independientes, cada uno con la misma frecuencia. Este modelo explica por qué el calor específico disminuye a bajas temperaturas, algo que la física clásica no podía justificar.
          </p>
          <Formula
            expression={String.raw`C_V = 3Nk_B \left(\frac{\Theta_E}{T}\right)^2 \frac{e^{\Theta_E/T}}{(e^{\Theta_E/T} - 1)^2}`}
            calculatorId="einstein-calor"
            definitions={cuanticaDefinitions}
            exercises={exercises}
            complementary={[
              { 
                description: "Temperatura de Einstein", 
                expression: String.raw`\Theta_E = \frac{\hbar\omega}{k_B}` 
              }
            ]}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>C_V:</strong> Calor específico a volumen constante (J/K)</li>
            <li><strong>N:</strong> Número de átomos</li>
            <li><strong>k_B:</strong> Constante de Boltzmann (1.381 × 10⁻²³ J/K)</li>
            <li><strong>Θ_E:</strong> Temperatura de Einstein (K)</li>
            <li><strong>T:</strong> Temperatura absoluta (K)</li>
            <li><strong>ℏ:</strong> Constante de Planck reducida (1.055 × 10⁻³⁴ J·s)</li>
            <li><strong>ω:</strong> Frecuencia angular de vibración (rad/s)</li>
          </ul>
        </Concept>

        <Concept title="Modelo de Debye">
          <p>
            El modelo de Debye perfeccionó el de Einstein al considerar que los átomos de un sólido vibran con diferentes frecuencias, formando un espectro continuo de vibraciones llamadas fonones. Este modelo describe mucho mejor el comportamiento del calor específico a bajas temperaturas, mostrando que es proporcional a T³, en acuerdo con los experimentos.
          </p>
          <Formula
            expression={String.raw`C_V = 9Nk_B \left(\frac{T}{\Theta_D}\right)^3 \int_0^{\Theta_D/T} \frac{x^4 e^x}{(e^x - 1)^2} dx`}
            calculatorId="debye-calor"
            definitions={cuanticaDefinitions}
            exercises={exercises}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>C_V:</strong> Calor específico a volumen constante (J/K)</li>
            <li><strong>N:</strong> Número de átomos</li>
            <li><strong>k_B:</strong> Constante de Boltzmann (1.381 × 10⁻²³ J/K)</li>
            <li><strong>Θ_D:</strong> Temperatura de Debye (K)</li>
            <li><strong>T:</strong> Temperatura absoluta (K)</li>
          </ul>
          <Important>
            A bajas temperaturas: C_V ∝ T³ (ley de Debye)
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Gas de Electrones en Metales">
        <Concept title="Energía de Fermi">
          <p>
            La energía de Fermi es el nivel de energía más alto que pueden ocupar los electrones en un metal a temperatura cero absoluto. Es un concepto fundamental para entender el comportamiento de los electrones en sólidos, la conductividad eléctrica y el calor específico electrónico. Determina la distribución de los electrones y explica por qué sólo los que están cerca de este nivel pueden participar en procesos físicos a bajas temperaturas.
          </p>
          <Formula
            expression={String.raw`E_F = \frac{\hbar^2}{2m} (3\pi^2 n)^{2/3}`}
            calculatorId="energia-fermi"
            definitions={cuanticaDefinitions}
            exercises={exercises}
            complementary={[
              { 
                description: "Calcular densidad de electrones", 
                expression: String.raw`n = \frac{1}{3\pi^2} \left(\frac{2m E_F}{\hbar^2}\right)^{3/2}` 
              }
            ]}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>E_F:</strong> Energía de Fermi (J)</li>
            <li><strong>ℏ:</strong> Constante de Planck reducida (1.055 × 10⁻³⁴ J·s)</li>
            <li><strong>m:</strong> Masa del electrón (9.109 × 10⁻³¹ kg)</li>
            <li><strong>n:</strong> Densidad de electrones (1/m³)</li>
          </ul>
        </Concept>

        <Concept title="Calor Específico Electrónico">
          <p>
            El calor específico electrónico describe cuánta energía se requiere para aumentar la temperatura de los electrones en un metal. Aunque la mayoría de los electrones no pueden cambiar de estado debido al principio de exclusión de Pauli, los que están cerca de la energía de Fermi sí pueden hacerlo, y su contribución es fundamental para entender el comportamiento térmico de los metales a bajas temperaturas.
          </p>
          <Formula
            expression={String.raw`C_V^{\text{el}} = \frac{\pi^2}{2} n k_B^2 T / E_F`}
            calculatorId="calor-electronico"
            definitions={cuanticaDefinitions}
            exercises={exercises}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>C_V^el:</strong> Calor específico electrónico (J/K)</li>
            <li><strong>n:</strong> Densidad de electrones (1/m³)</li>
            <li><strong>k_B:</strong> Constante de Boltzmann (1.381 × 10⁻²³ J/K)</li>
            <li><strong>T:</strong> Temperatura absoluta (K)</li>
            <li><strong>E_F:</strong> Energía de Fermi (J)</li>
          </ul>
          <p>
            El calor específico electrónico es lineal en T a bajas temperaturas.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Condensación de Bose-Einstein">
        <p>
          A temperaturas suficientemente bajas, los bosones pueden ocupar masivamente 
          el estado fundamental.
        </p>

        <Concept title="Temperatura Crítica">
          <p>
            La temperatura crítica es el valor por debajo del cual un conjunto de bosones (partículas con espín entero) comienza a ocupar masivamente el estado fundamental, formando un condensado de Bose-Einstein. Este fenómeno cuántico, observado a temperaturas extremadamente bajas, permite estudiar nuevos estados de la materia y tiene aplicaciones en tecnologías avanzadas como relojes atómicos y sensores cuánticos.
          </p>
          <Formula
            expression={String.raw`T_c = \frac{2\pi\hbar^2}{m k_B} \left(\frac{n}{\zeta(3/2)}\right)^{2/3}`}
            calculatorId="bec-temperatura"
            definitions={cuanticaDefinitions}
            exercises={exercises}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>T_c:</strong> Temperatura crítica de condensación (K)</li>
            <li><strong>ℏ:</strong> Constante de Planck reducida (1.055 × 10⁻³⁴ J·s)</li>
            <li><strong>m:</strong> Masa de la partícula (kg)</li>
            <li><strong>k_B:</strong> Constante de Boltzmann (1.381 × 10⁻²³ J/K)</li>
            <li><strong>n:</strong> Densidad de partículas (1/m³)</li>
            <li><strong>ζ(3/2):</strong> Función zeta de Riemann evaluada en 3/2 ≈ 2.612</li>
          </ul>
        </Concept>

        <Example title="Ejemplo: Rubidio-87">
          Para ⁸⁷Rb con n = 10¹⁴ cm⁻³:
          <ul>
            <li>T_c ≈ 200 nK</li>
            <li>Primer BEC observado en 1995</li>
            <li>Premio Nobel 2001</li>
          </ul>
        </Example>
      </TheorySection>
      {/* Secciones especiales al final */}
      <div className="theory-history-section">
        <h2><span>📜</span> Historia: Origen de la estadística cuántica</h2>
        <p>
          La estadística cuántica surge a principios del siglo XX con los trabajos de Planck, Einstein, Bose, Fermi y Dirac. La explicación de la radiación de cuerpo negro y el comportamiento de electrones y fonones en sólidos impulsó el desarrollo de la mecánica cuántica y la física moderna.
        </p>
        <ul className="theory-subsection">
          <li>1900: Planck introduce la cuantización de la energía.</li>
          <li>1924: Bose y Einstein desarrollan la estadística de bosones.</li>
          <li>1926: Fermi y Dirac formulan la estadística de fermiones.</li>
          <li>1995: Primer condensado de Bose-Einstein observado experimentalmente.</li>
        </ul>
      </div>
      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <ul>
          <li>La ley de Planck es la base de la tecnología de sensores infrarrojos y cámaras térmicas.</li>
          <li>El modelo de Debye y Einstein explica el calor específico de materiales y su uso en criogenia.</li>
          <li>La estadística de Fermi-Dirac es esencial para entender la conductividad eléctrica en metales y semiconductores.</li>
          <li>La condensación de Bose-Einstein tiene aplicaciones en relojes atómicos, sensores cuánticos y simulación cuántica.</li>
        </ul>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas, curiosidades y casos límite</h2>
        <ul>
          <li>La "catástrofe ultravioleta" predicha por la física clásica fue uno de los grandes enigmas resueltos por la estadística cuántica.</li>
          <li>El primer condensado de Bose-Einstein se logró con átomos de rubidio a temperaturas de nanokelvin.</li>
          <li>La estadística de Fermi-Dirac explica por qué la materia es estable: los electrones no pueden ocupar el mismo estado cuántico.</li>
          <li>La radiación de cuerpo negro permite estimar la temperatura de estrellas y planetas a partir de su espectro.</li>
          <li><strong>Casos límite:</strong> El calor específico de Einstein y Debye tiende al valor clásico (3R) a altas temperaturas, pero cae rápidamente a bajas T, mostrando la transición clásico-cuántica.</li>
          <li>En el límite de altas temperaturas, la ley de Planck recupera la ley de Rayleigh-Jeans (clásica), y a bajas T predice correctamente la caída exponencial.</li>
          <li>El BEC solo ocurre a densidades muy altas y temperaturas extremadamente bajas, imposibles de alcanzar en la vida cotidiana.</li>
        </ul>
        <h3>Aplicaciones futuras</h3>
        <ul>
          <li>Desarrollo de sensores cuánticos ultraprecisos y computadoras cuánticas basadas en condensados de Bose-Einstein.</li>
          <li>Materiales topológicos y superconductores exóticos, cuyo comportamiento depende de la estadística cuántica.</li>
          <li>Simulación cuántica de sistemas complejos para resolver problemas imposibles para supercomputadoras clásicas.</li>
        </ul>
        <h3>Anécdotas históricas</h3>
        <ul>
          <li>El experimento de Lummer y Pringsheim (1899) midió la radiación de cuerpo negro y motivó la ley de Planck.</li>
          <li>El descubrimiento experimental del BEC en 1995 fue galardonado con el Nobel en 2001.</li>
        </ul>
        <h3>Mitos y malentendidos comunes</h3>
        <ul>
          <li>"La estadística cuántica solo importa a temperaturas cercanas al cero absoluto": en realidad, explica propiedades de materiales y radiación en un rango amplio de condiciones.</li>
          <li>"Solo afecta a partículas individuales": la estadística cuántica determina el comportamiento colectivo de grandes sistemas, como metales, semiconductores y estrellas.</li>
        </ul>
      </div>
    </>
  );
};

export default AplicacionesdelaEstadisticaCuanticaTheory;
