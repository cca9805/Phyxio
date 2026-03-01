import { TheorySection, Concept, Formula, Important, Example } from '../../../../../../components/TheoryV2';
import { definitions as circuitosDefinitions } from './definitions.js';

export const metadata = {
  titulo: 'Circuitos CA - Avanzado',
  descripcion: 'Contenido avanzado sobre análisis de circuitos en corriente alterna (funciones de transferencia, respuesta en frecuencia, polos y ceros).',
  isTheoryOnly: false,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

const CircuitosCAAvanzado = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Objetivo">
        <p>Material universitario sobre análisis en frecuencia y transitorios: fasores, funciones de transferencia, polos y ceros, diagramas de Bode, diseño y análisis de filtros y cálculo de potencia en CA.</p>
      </TheorySection>

      <TheorySection title="Fasores e impedancias complejas">
        <p>La representación con fasores transforma señales senoidales en números complejos (amplitud y fase). Para un elemento lineal: Ṽ = Z Ĩ, donde Z es la impedancia compleja: Z_R=R, Z_L=jωL, Z_C=1/(jωC).</p>
        <Concept title="Impedancias">
          <Formula
            expression={String.raw`Z_L = j\omega L`}
            calculatorId="impedance-inductor"
            definitions={circuitosDefinitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>Z_L: Impedancia del inductor (Ω)</li>
            <li>ω: Frecuencia angular (rad/s)</li>
            <li>L: Inductancia (H)</li>
          </ul>

          <Formula
            expression={String.raw`Z_C = \frac{1}{j\omega C}`}
            calculatorId="impedance-capacitor"
            definitions={circuitosDefinitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>Z_C: Impedancia del capacitor (Ω)</li>
            <li>ω: Frecuencia angular (rad/s)</li>
            <li>C: Capacitancia (F)</li>
          </ul>
        </Concept>
        <Concept title="Potencia en CA">
          <p>Se define la potencia aparente S=V_rms I_rms*, la potencia activa P=Re(S) y la reactiva Q=Im(S). El factor de potencia es cos(φ) = P / |S|.</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Funciones de transferencia y respuesta en frecuencia">
        <p>La función de transferencia H(s) describe la relación entre salida y entrada en dominio s. Reemplazando s = jω obtenemos la respuesta en frecuencia. El análisis de polos y ceros permite caracterizar estabilidad y comportamiento en frecuencia.</p>
        <Concept title="Diagramas de Bode">
          <p>Los diagramas de Bode muestran magnitud (dB) y fase (grados) frente a frecuencia logarítmica; permiten identificar cortes, pendientes y márgenes de estabilidad.</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Resonancia y filtros (RLC)">
        <p>Los circuitos RLC presentan resonancia en una frecuencia natural ω0 = 1/√(LC). Dependiendo del factor de calidad Q se observan picos en la magnitud. Filtros básicos: paso bajo, paso alto, banda y rechazo.</p>
        <Concept title="Impedancia serie RLC">
          <Formula
            expression={String.raw`Z = R + j(\omega L - \frac{1}{\omega C})`}
            calculatorId="impedance-series"
            definitions={circuitosDefinitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>Z: Impedancia total (Ω)</li>
            <li>R: Resistencia (Ω)</li>
            <li>ω: Frecuencia angular (rad/s)</li>
            <li>L: Inductancia (H)</li>
            <li>C: Capacitancia (F)</li>
          </ul>
        </Concept>
        <Example title="Filtro paso bajo RC (concepto)">
          <p>Impedancia de carga y función de transferencia H(jω) = 1/(1+jωRC); -3 dB en ω_c = 1/RC.</p>
        </Example>
      </TheorySection>

      <TheorySection title="Análisis con Laplace y Fourier">
        <p>Se utiliza Laplace para estudiar transitorios y Fourier para analizar señales periódicas y su contenido espectral. La transformada de Fourier es el caso particular de Laplace con s=jω en condiciones de existencia.</p>
      </TheorySection>

      <TheorySection title="Sistemas trifásicos y potencia">
        <p>Conceptos básicos de sistemas trifásicos: conexiones estrella/triángulo, tensiones y corrientes de línea y fase, potencia total en redes equilibradas y desequilibradas.</p>
      </TheorySection>

      <TheorySection title="Ejemplos y aplicaciones">
        <Example title="Análisis en frecuencia de RLC serie">
          <p>Cálculo de H(jω) y trazado de Bode; determinación de ω0 y ancho de banda para un filtro banda estrecha.</p>
        </Example>
        <Example title="Corrección del factor de potencia">
          <p>Uso de condensadores para compensar la potencia reactiva Q, cálculo de la capacidad necesaria y efectos en la corriente de línea.</p>
        </Example>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <p>Aplicaciones prácticas: diseño de filtros para audio y RF, corrección de factor de potencia en instalaciones industriales, y uso de fasores para análisis de redes de distribución.</p>
      </div>

      {/* Hechos históricos */}
      <div className="theory-history-section">
        <h2><span>📜</span> Historia</h2>
        <p>Breve reseña histórica: el desarrollo de la teoría de circuitos y la transformada de Laplace permitió sistematizar el análisis de transitorios y la respuesta en frecuencia a lo largo del siglo XX.</p>
      </div>

      {/* Datos anecdóticos */}
      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas y curiosidades</h2>
        <p>Curiosidad: el uso de diagramas de Bode proviene de la ingeniería de control y se adapta muy bien a la caracterización de filtros analógicos; muchos diseños se calibran usando prototipos RLC sencillos.</p>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3 className="concept-title">Resumen</h3>
        <div className="concept-body">
          <p>Dominar fasores, impedancias, funciones de transferencia y análisis por polos/ceros es esencial para diseñar filtros y sistemas de potencia en CA.</p>
        </div>
      </div>
    </>
  );
};

export default CircuitosCAAvanzado;
