
// 1. IMPORTACIONES
import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as fermiDefinitions } from './definitions.js';

// 2. METADATA
export const metadata = {
  titulo: "Gas de Fermi",
  descripcion: "El gas de Fermi describe el comportamiento de fermiones no interactuantes bajo el principio de exclusión de Pauli, fundamental en física de la materia condensada y astrofísica.",
  isTheoryOnly: false,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

// 3. TEORÍA PRINCIPAL
const GasDeFermiTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción al Gas de Fermi">
        <Concept title="¿Qué es el Gas de Fermi?">
          <p>Un <strong>gas de Fermi</strong> es un sistema de partículas con spin semientero (fermiones) que no interactúan entre sí y obedecen el principio de exclusión de Pauli: ningún fermión puede ocupar el mismo estado cuántico que otro.</p>
          <ul>
            <li>Ejemplo: electrones en metales, neutrones en estrellas de neutrones.</li>
            <li>Presión de degeneración: existe incluso a T = 0 K.</li>
          </ul>
        </Concept>
        <Important>
          El gas de Fermi es esencial para entender la estructura de la materia y fenómenos astrofísicos extremos.
        </Important>
      </TheorySection>

      <TheorySection title="Distribución de Fermi-Dirac">
        <Concept title="Función de Distribución">
          <Formula
            expression={String.raw`f(E) = \frac{1}{e^{(E-\mu)/(k_B T)} + 1}`}
            calculatorId="fermi-dirac"
            definitions={fermiDefinitions}
            exercises={exercises}
          />
          <strong>Donde:</strong>
          <ul>
            <li><b>f(E)</b>: probabilidad de ocupación</li>
            <li><b>E</b>: energía del estado</li>
            <li><b>\mu</b>: potencial químico</li>
            <li><b>k_B</b>: constante de Boltzmann</li>
            <li><b>T</b>: temperatura absoluta</li>
          </ul>
          <Important>
            A T = 0 K, todos los estados con E {'<'} E_F están ocupados, los demás vacíos.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Fórmulas Fundamentales">
        <Concept title="Energía de Fermi">
          <Formula
            expression={String.raw`E_F = \frac{\hbar^2}{2m}(3\pi^2 n)^{2/3}`}
            calculatorId="energia-fermi"
            definitions={fermiDefinitions}
            exercises={exercises}
          />
          <strong>Donde:</strong>
          <ul>
            <li><b>E_F</b>: energía de Fermi</li>
            <li><b>\hbar</b>: constante de Planck reducida</li>
            <li><b>m</b>: masa del fermión</li>
            <li><b>n</b>: densidad numérica</li>
          </ul>
        </Concept>
        <Concept title="Temperatura de Fermi">
          <Formula
            expression={String.raw`T_F = \frac{E_F}{k_B}`}
            calculatorId="temperatura-fermi"
            definitions={fermiDefinitions}
            exercises={exercises}
          />
          <strong>Donde:</strong>
          <ul>
            <li><b>T_F</b>: temperatura de Fermi</li>
            <li><b>E_F</b>: energía de Fermi</li>
            <li><b>k_B</b>: constante de Boltzmann</li>
          </ul>
        </Concept>
        <Concept title="Velocidad de Fermi">
          <Formula
            expression={String.raw`v_F = \sqrt{2E_F/m} = \frac{\hbar}{m}(3\pi^2 n)^{1/3}`}
            calculatorId="velocidad-fermi"
            definitions={fermiDefinitions}
            exercises={exercises}
          />
          <strong>Donde:</strong>
          <ul>
            <li><b>v_F</b>: velocidad de Fermi</li>
            <li><b>E_F</b>: energía de Fermi</li>
            <li><b>m</b>: masa del fermión</li>
            <li><b>n</b>: densidad numérica</li>
            <li><b>\hbar</b>: constante de Planck reducida</li>
          </ul>
        </Concept>
        <Concept title="Energía Total a T = 0">
          <Formula
            expression={String.raw`U = \frac{3}{5} N E_F`}
            calculatorId="energia-total-fermi"
            definitions={fermiDefinitions}
            exercises={exercises}
          />
          <strong>Donde:</strong>
          <ul>
            <li><b>U</b>: energía total</li>
            <li><b>N</b>: número de partículas</li>
            <li><b>E_F</b>: energía de Fermi</li>
          </ul>
        </Concept>
        <Concept title="Presión de Degeneración">
          <Formula
            expression={String.raw`P = \frac{2}{5} n E_F`}
            calculatorId="presion-fermi"
            definitions={fermiDefinitions}
            exercises={exercises}
          />
          <strong>Donde:</strong>
          <ul>
            <li><b>P</b>: presión de degeneración</li>
            <li><b>n</b>: densidad numérica</li>
            <li><b>E_F</b>: energía de Fermi</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos Prácticos">
        <Example title="Ejemplo: Cobre">
          <p>Calcula E_F, T_F y v_F para electrones en Cu (n = 8.5 × 10²⁸ m⁻³).</p>
          <ul>
            <li>n = 8.5 × 10²⁸ m⁻³</li>
            <li>m_e = 9.109 × 10⁻³¹ kg</li>
          </ul>
          <p>E_F = (ℏ²/2m)(3π²n)^(2/3) = 1.13 × 10⁻¹⁸ J = 7.05 eV</p>
          <p>T_F = E_F/k_B = 81,800 K</p>
          <p>v_F = √(2E_F/m) = 1.57 × 10⁶ m/s</p>
          <Important>
            A 300 K, T/T_F ≈ 0.004, los electrones están altamente degenerados.
          </Important>
        </Example>
      </TheorySection>

      {/* 6. APLICACIONES */}
      <div className="theory-applications-section">
        <h2><span role="img" aria-label="aplicaciones">🌍</span> Aplicaciones en la vida real</h2>
        <ul>
          <li>Electrones en metales: explican conductividad eléctrica y térmica.</li>
          <li>Enanas blancas: presión de degeneración electrónica sostiene la estrella.</li>
          <li>Estrellas de neutrones: presión de degeneración neutrónica estabiliza la estrella.</li>
          <li>Semiconductores: nivel de Fermi determina propiedades eléctricas.</li>
        </ul>
      </div>

      {/* 7. HECHOS HISTÓRICOS */}
      <div className="theory-history-section">
        <h2><span role="img" aria-label="historia">📜</span> Hechos históricos relevantes</h2>
        <ul>
          <li>Wolfgang Pauli propuso el principio de exclusión en 1925.</li>
          <li>Enrico Fermi y Paul Dirac desarrollaron la estadística de fermiones en 1926.</li>
          <li>Modelo de gas de Fermi aplicado a electrones en metales por Arnold Sommerfeld (1928).</li>
          <li>Presión de degeneración explica la estabilidad de enanas blancas y estrellas de neutrones.</li>
        </ul>
        <div className="theory-section-highlight">
          <strong>Descubridor:</strong> Enrico Fermi<br/>
          <strong>Año:</strong> 1926<br/>
          <strong>Lugar:</strong> Italia
        </div>
      </div>

      {/* 8. DATOS ANECDÓTICOS */}
      <div className="theory-anecdotes-section">
        <h2><span role="img" aria-label="anécdotas">✨</span> Anécdotas y curiosidades</h2>
        <ul>
          <li>El gas de Fermi predice que los electrones en metales se mueven a velocidades cercanas al 1% de la velocidad de la luz.</li>
          <li>La presión de degeneración es tan grande que puede sostener una estrella contra el colapso gravitacional.</li>
          <li>El modelo de gas de Fermi es la base de la física de semiconductores y dispositivos electrónicos modernos.</li>
        </ul>
        <div className="theory-section-highlight">
          <strong>Aplicación sorprendente:</strong> El gas de Fermi explica el enfriamiento de estrellas y la estabilidad de la materia en condiciones extremas.
        </div>
      </div>

      {/* 9. RESUMEN */}
      <div className="theory-summary-section">
        <h2><span role="img" aria-label="resumen">📝</span> Resumen</h2>
        <p>
          El gas de Fermi describe sistemas de partículas que obedecen el principio de exclusión de Pauli. Es fundamental para entender la estructura de la materia, la física de metales, semiconductores y objetos astrofísicos como enanas blancas y estrellas de neutrones.
        </p>
        <ul>
          <li>Distribución de Fermi-Dirac: <Formula expression={String.raw`f(E) = \frac{1}{e^{(E-\mu)/(k_B T)} + 1}`} /></li>
          <li>Energía de Fermi: <Formula expression={String.raw`E_F = \frac{\hbar^2}{2m}(3\pi^2 n)^{2/3}`} /></li>
          <li>Presión de degeneración: <Formula expression={String.raw`P = \frac{2}{5} n E_F`} /></li>
        </ul>
        <Important>
          El gas de Fermi es clave para la física moderna y la tecnología electrónica.
        </Important>
      </div>
    </>
  );
};

// 10. EXPORTACIÓN
export default GasDeFermiTheory;
