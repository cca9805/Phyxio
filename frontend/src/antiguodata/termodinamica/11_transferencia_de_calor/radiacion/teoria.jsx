import React from 'react';
import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as radiacionDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Radiación",
  descripcion: "Transferencia de calor por ondas electromagnéticas",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const RadiacionTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Radiación Térmica">
        <div className="detailed-content">
          <p>La radiación es un mecanismo de transferencia de calor que no requiere un medio material, transmitiéndose mediante ondas electromagnéticas.</p>
        </div>
      </TheorySection>

      <TheorySection title="Ley de Stefan-Boltzmann">
        <Concept title="Ecuación">
          <Formula 
            expression={String.raw`Q = \varepsilon\sigma A(T^4 - T_{amb}^4)`}
            description="Ley de Stefan-Boltzmann"
            calculatorId="radiacion-grupo-1"
            definitions={radiacionDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Potencia radiada", expression: String.raw`P = \varepsilon\sigma AT^4`, calculatorId: 'radiacion-grupo-1', definitionId: 'potencia-radiacion' },
              { description: "Flujo por área", expression: String.raw`q = \varepsilon\sigma T^4`, calculatorId: 'radiacion-grupo-1', definitionId: 'flujo-por-area' }
            ]}
          />

          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>Q:</strong> Flujo de calor por radiación (W)</li>
            <li><strong>ε:</strong> Emisividad (0-1, adimensional)</li>
            <li><strong>σ:</strong> Constante de Stefan-Boltzmann = 5.67×10⁻⁸ W/(m²·K⁴)</li>
            <li><strong>A:</strong> Área de superficie (m²)</li>
            <li><strong>T:</strong> Temperatura absoluta de superficie (K)</li>
            <li><strong>T_amb:</strong> Temperatura ambiente (K)</li>
          </ul>

          <p><strong>Emisividad típica:</strong></p>
          <ul>
            <li>Cuerpo negro: ε = 1.0</li>
            <li>Superficies oxidadas: ε = 0.6-0.9</li>
            <li>Metales pulidos: ε = 0.02-0.1</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Sección de Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <ul>
          <li>Cálculo de radiación en hornos industriales y procesos a alta temperatura.</li>
          <li>Diseño de sistemas de climatización y calefacción por radiación.</li>
          <li>Control térmico en satélites y sistemas aeroespaciales (management radiativo).</li>
          <li>Instrumentación y sensores térmicos (cámaras termográficas y sensores IR).</li>
          <li>Análisis de balance energético en procesos y aplicaciones de ingeniería.</li>
        </ul>
      </div>

      {/* Sección de Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Ley de Stefan-Boltzmann
        </h2>
        <p>
          La ley empírica de Stefan fue propuesta por Josef Stefan en 1879 y más tarde justificada teóricamente por Ludwig Boltzmann en 1884 aplicando principios termodinámicos. 
          El estudio de la radiación llevó a Max Planck a formular la ley de radiación del cuerpo negro, que fue crucial para el desarrollo de la mecánica cuántica.
        </p>
      </div>

      {/* Sección de Anécdotas y Curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        <ul>
          <li>El concepto de cuerpo negro fue central para resolver la llamada "catástrofe ultravioleta" y dio origen a la teoría cuántica.</li>
          <li>La radiación de fondo cósmico es un ejemplo de cuerpo negro a escala cósmica y permitió estimar la temperatura del universo en sus primeras etapas.</li>
          <li>En la práctica, la emisividad depende de la superficie y el acabado: superficies pulidas tienen emisividad muy baja comparadas con superficies rugosas.</li>
        </ul>
      </div>

      {/* Sección de Resumen */}
      <div className="formula-card">
        <h3>Resumen</h3>
        <p>
          La radiación térmica es un mecanismo de transferencia de energía que no requiere medio material y está gobernada por la ley de Stefan-Boltzmann. 
          Para ingeniería, la emisividad y la diferencia de temperaturas son factores clave y en sistemas reales se combinan con conducción y convección.
        </p>
      </div>

    </>
  );
};

export default RadiacionTheory;
