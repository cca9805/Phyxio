
// 1. IMPORTACIONES
import React from 'react';
import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as gasIdealDefinitions } from './definitions.js';

// 2. METADATA
export const metadata = {
  titulo: "Gas Ideal Cuántico",
  descripcion: "El gas ideal cuántico describe el comportamiento de bosones y fermiones no interactuantes bajo las estadísticas de Bose-Einstein y Fermi-Dirac.",
  isTheoryOnly: false,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

// 3. TEORÍA PRINCIPAL
const GasIdealCuanticoTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción al Gas Ideal Cuántico">
        <Concept title="¿Qué es un Gas Ideal Cuántico?">
          <p>Un <strong>gas ideal cuántico</strong> es un sistema de partículas idénticas no interactuantes que obedece la mecánica cuántica. Según el spin, siguen la estadística de Fermi-Dirac (fermiones) o Bose-Einstein (bosones).</p>
          <ul>
            <li>Fermiones: electrones, protones, neutrones, ³He</li>
            <li>Bosones: fotones, fonones, ⁴He, ⁸⁷Rb</li>
          </ul>
        </Concept>
        <Important>
          El comportamiento cuántico se manifiesta cuando la longitud de onda térmica λ_T es comparable a la distancia entre partículas: n λ_T³ ≈ 1.
        </Important>
      </TheorySection>

      <TheorySection title="Longitud de Onda Térmica y Degeneración">
        <Concept title="Longitud de de Broglie Térmica">
          <Formula
            expression={String.raw`\lambda_T = \frac{h}{\sqrt{2\pi m k_B T}}`}
            calculatorId="longitud-termica"
            definitions={gasIdealDefinitions}
            exercises={exercises}
          />
          <strong>Donde:</strong>
          <ul>
            <li><b>h</b>: constante de Planck</li>
            <li><b>m</b>: masa de la partícula</li>
            <li><b>k_B</b>: constante de Boltzmann</li>
            <li><b>T</b>: temperatura</li>
          </ul>
          <Important>
            Cuando λ_T es comparable a n⁻¹/³, los efectos cuánticos son importantes.
          </Important>
        </Concept>
        <Concept title="Criterio de Degeneración Cuántica">
          <Formula
            expression={String.raw`n \lambda_T^3 \approx 1`}
            calculatorId="criterio-degeneracion"
            definitions={gasIdealDefinitions}
            exercises={exercises}
          />
          <strong>Donde:</strong>
          <ul>
            <li><b>n</b>: densidad numérica</li>
            <li><b>\lambda_T</b>: longitud de onda térmica</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Estadística de Fermi-Dirac">
        <Concept title="Función de Distribución">
          <Formula
            expression={String.raw`f_{FD}(E) = \frac{1}{e^{(E-\mu)/(k_B T)} + 1}`}
            calculatorId="fermi-dirac"
            definitions={gasIdealDefinitions}
            exercises={exercises}
          />
          <strong>Donde:</strong>
          <ul>
            <li><b>E</b>: energía</li>
            <li><b>\mu</b>: potencial químico</li>
            <li><b>k_B</b>: constante de Boltzmann</li>
            <li><b>T</b>: temperatura</li>
          </ul>
        </Concept>
        <Concept title="Energía de Fermi">
          <Formula
            expression={String.raw`E_F = \frac{\hbar^2}{2m}(3\pi^2 n)^{2/3}`}
            calculatorId="energia-fermi"
            definitions={gasIdealDefinitions}
            exercises={exercises}
          />
          <strong>Donde:</strong>
          <ul>
            <li><b>E_F</b>: energía de Fermi</li>
            <li><b>\hbar</b>: constante de Planck reducida</li>
            <li><b>m</b>: masa</li>
            <li><b>n</b>: densidad numérica</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Estadística de Bose-Einstein">
        <Concept title="Función de Distribución">
          <Formula
            expression={String.raw`f_{BE}(E) = \frac{1}{e^{(E-\mu)/(k_B T)} - 1}`}
            calculatorId="bose-einstein"
            definitions={gasIdealDefinitions}
            exercises={exercises}
          />
          <strong>Donde:</strong>
          <ul>
            <li><b>E</b>: energía</li>
            <li><b>\mu</b>: potencial químico</li>
            <li><b>k_B</b>: constante de Boltzmann</li>
            <li><b>T</b>: temperatura</li>
          </ul>
        </Concept>
        <Concept title="Temperatura Crítica de BEC">
          <Formula
            expression={String.raw`T_c = \frac{2\pi\hbar^2}{m k_B} \left(\frac{n}{\zeta(3/2)}\right)^{2/3}`}
            calculatorId="temperatura-bec"
            definitions={gasIdealDefinitions}
            exercises={exercises}
          />
          <strong>Donde:</strong>
          <ul>
            <li><b>T_c</b>: temperatura crítica</li>
            <li><b>\hbar</b>: constante de Planck reducida</li>
            <li><b>m</b>: masa</li>
            <li><b>n</b>: densidad numérica</li>
            <li><b>\zeta(3/2)</b>: función zeta de Riemann</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Comparación de Estadísticas">
        <Concept title="Tabla Comparativa">
          <table style={{width: '100%', borderCollapse: 'collapse', margin: '1rem 0'}}>
            <thead>
              <tr style={{borderBottom: '2px solid #333'}}>
                <th style={{padding: '0.5rem', textAlign: 'left'}}>Propiedad</th>
                <th style={{padding: '0.5rem', textAlign: 'left'}}>Fermi-Dirac</th>
                <th style={{padding: '0.5rem', textAlign: 'left'}}>Bose-Einstein</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.5rem'}}>Spin</td>
                <td style={{padding: '0.5rem'}}>Semientero (1/2, 3/2, ...)</td>
                <td style={{padding: '0.5rem'}}>Entero (0, 1, 2, ...)</td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.5rem'}}>Ocupación máxima</td>
                <td style={{padding: '0.5rem'}}>1 (Pauli)</td>
                <td style={{padding: '0.5rem'}}>Ilimitada</td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.5rem'}}>Ejemplos</td>
                <td style={{padding: '0.5rem'}}>e⁻, p⁺, n, ³He</td>
                <td style={{padding: '0.5rem'}}>γ, fonones, ⁴He</td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.5rem'}}>Fenómeno especial</td>
                <td style={{padding: '0.5rem'}}>Presión de degeneración</td>
                <td style={{padding: '0.5rem'}}>Condensación BEC</td>
              </tr>
              <tr>
                <td style={{padding: '0.5rem'}}>C_V (T→0)</td>
                <td style={{padding: '0.5rem'}}>∝ T (lineal)</td>
                <td style={{padding: '0.5rem'}}>∝ T^(3/2)</td>
              </tr>
            </tbody>
          </table>
        </Concept>
      </TheorySection>

      {/* 6. APLICACIONES */}
      <div className="theory-applications-section">
        <h2><span role="img" aria-label="aplicaciones">🌍</span> Aplicaciones en la vida real</h2>
        <ul>
          <li>Electrones en metales: explican conductividad y calor específico.</li>
          <li>Enanas blancas y estrellas de neutrones: presión de degeneración.</li>
          <li>Condensados de Bose-Einstein: superfluidez y superconductividad.</li>
          <li>Radiación de cuerpo negro y fonones en sólidos.</li>
        </ul>
      </div>

      {/* 7. HECHOS HISTÓRICOS */}
      <div className="theory-history-section">
        <h2><span role="img" aria-label="historia">📜</span> Hechos históricos relevantes</h2>
        <ul>
          <li>Enrico Fermi y Paul Dirac desarrollaron la estadística de fermiones (1926).</li>
          <li>Satyendra Nath Bose y Albert Einstein desarrollaron la estadística de bosones (1924-25).</li>
          <li>El BEC fue observado experimentalmente en ⁸⁷Rb en 1995 (Cornell, Wieman, Ketterle).</li>
        </ul>
        <div className="theory-section-highlight">
          <strong>Descubridores:</strong> Fermi, Dirac, Bose, Einstein<br/>
          <strong>Años:</strong> 1924-1926<br/>
          <strong>Lugar:</strong> Europa
        </div>
      </div>

      {/* 8. DATOS ANECDÓTICOS */}
      <div className="theory-anecdotes-section">
        <h2><span role="img" aria-label="anécdotas">✨</span> Anécdotas y curiosidades</h2>
        <ul>
          <li>El BEC fue predicho en 1925 pero no observado hasta 70 años después.</li>
          <li>El gas ideal cuántico explica la estabilidad de la materia y fenómenos como la superfluidez.</li>
          <li>La estadística de Bose-Einstein permite la existencia de láseres y superconductores.</li>
        </ul>
        <div className="theory-section-highlight">
          <strong>Aplicación sorprendente:</strong> El BEC permite simular universos cuánticos en laboratorio.
        </div>
      </div>

      {/* 9. RESUMEN */}
      <div className="theory-summary-section">
        <h2><span role="img" aria-label="resumen">📝</span> Resumen</h2>
        <p>
          El gas ideal cuántico describe el comportamiento colectivo de bosones y fermiones. Explica la conductividad, la superfluidez, la presión de degeneración y la radiación de cuerpo negro, siendo fundamental en física moderna y tecnología.
        </p>
        <ul>
          <li>Longitud de onda térmica: <Formula expression={String.raw`\lambda_T = \frac{h}{\sqrt{2\pi m k_B T}}`} /></li>
          <li>Distribución Fermi-Dirac: <Formula expression={String.raw`f_{FD}(E) = \frac{1}{e^{(E-\mu)/(k_B T)} + 1}`} /></li>
          <li>Distribución Bose-Einstein: <Formula expression={String.raw`f_{BE}(E) = \frac{1}{e^{(E-\mu)/(k_B T)} - 1}`} /></li>
        </ul>
        <Important>
          El gas ideal cuántico es clave para la física de la materia condensada y la astrofísica.
        </Important>
      </div>
    </>
  );
};

// 10. EXPORTACIÓN
export default GasIdealCuanticoTheory;
