
import React from 'react';
import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as montecarloDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Simulaciones Monte Carlo",
  descripcion: "Métodos estocásticos para sistemas termodinámicos",
  isTheoryOnly: false,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};



const SimulacionesMonteCarloTheory = ({ exercises }) => {
  return (
    <>
      {/* 1. TEORÍA PRINCIPAL */}
      <TheorySection title="¿Qué es el método Monte Carlo?">
        <p>
          El <strong>método Monte Carlo</strong> es una técnica computacional que utiliza números aleatorios para simular sistemas físicos complejos. Es fundamental en mecánica estadística y física computacional para estimar promedios y distribuciones cuando el cálculo directo es inviable.
        </p>
        <Important>
          Permite muestrear configuraciones con probabilidad proporcional al factor de Boltzmann {'$e^{-\\beta E}$'}, evitando recorrer todas las configuraciones posibles.
        </Important>
      </TheorySection>

      {/* 2. FÓRMULAS Y ALGORITMOS */}
      <TheorySection title="Algoritmo de Metropolis y fórmulas clave">
        <Concept title="Criterio de aceptación de Metropolis">
          <Formula
            expression={String.raw`P_{\text{aceptar}} = \min\left(1, e^{-\beta \Delta E}\right)`}
            calculatorId="metropolis-criterio"
            definitions={montecarloDefinitions}
            exercises={exercises}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><b>P_aceptar</b>: probabilidad de aceptar el movimiento</li>
            <li><b>\beta</b>: {'$1/(k_B T)$'}</li>
            <li><b>\Delta E</b>: cambio de energía</li>
          </ul>
        </Concept>
        <Concept title="Pasos del algoritmo de Metropolis">
          <ol>
            <li>Partir de una configuración inicial</li>
            <li>Proponer un cambio aleatorio</li>
            <li>Calcular {'$\\Delta E$'}</li>
            <li>Si {'$\\Delta E < 0$'}: aceptar siempre</li>
            <li>Si {'$\\Delta E > 0$'}: aceptar con probabilidad {'$e^{-\\beta \\Delta E}$'}</li>
            <li>Repetir hasta alcanzar equilibrio</li>
          </ol>
        </Concept>
        <Concept title="Promedio Monte Carlo">
          <Formula
            expression={String.raw`\langle A \rangle = \frac{1}{N} \sum_{i=1}^{N} A_i`}
            calculatorId="promedio-mc"
            definitions={montecarloDefinitions}
            exercises={exercises}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><b>⟨A⟩</b>: valor promedio de la observable</li>
            <li><b>N</b>: número de muestras</li>
            <li><b>A_i</b>: valor de la observable en la configuración {'$i$'}</li>
          </ul>
        </Concept>
        <Concept title="Error estadístico">
          <Formula
            expression={String.raw`\sigma_A = \sqrt{\frac{\langle A^2 \rangle - \langle A \rangle^2}{N_{\text{eff}}}}`}
            calculatorId="error-mc"
            definitions={montecarloDefinitions}
            exercises={exercises}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><b>\sigma_A</b>: error estadístico</li>
            <li><b>⟨A^2⟩</b>: promedio del cuadrado</li>
            <li><b>{'N_{\text{eff}}'}</b>: muestras independientes</li>
          </ul>
        </Concept>
        <Example title="Ejemplo práctico: aceptación de un movimiento">
          <p>
            Si en una simulación se propone un cambio con {'$\\Delta E = 1 \\times 10^{-21}$'} J a {'$T = 300$'} K, la probabilidad de aceptación es:
          </p>
          <ul>
            <li>Calcular {'$\\beta = 1/(k_B T)$'}</li>
            <li>Calcular {'$e^{-\\beta \\Delta E}$'}</li>
            <li>Aplicar el criterio de Metropolis</li>
          </ul>
        </Example>
      </TheorySection>

      {/* 3. APLICACIONES */}
      <div className="theory-applications-section">
        <h2><span role="img" aria-label="aplicaciones">🌍</span> Aplicaciones en la vida real</h2>
        <ul>
          <li>Simulación del modelo de Ising y sistemas magnéticos</li>
          <li>Simulación de gases y líquidos</li>
          <li>Estudio de polímeros y proteínas</li>
          <li>Predicción de mercados y finanzas</li>
        </ul>
      </div>

      {/* 4. HECHOS HISTÓRICOS */}
      <div className="theory-history-section">
        <h2><span role="img" aria-label="historia">📜</span> Hechos históricos relevantes</h2>
        <ul>
          <li>El método Monte Carlo fue desarrollado en los años 1940 para problemas nucleares</li>
          <li>El algoritmo de Metropolis fue propuesto en 1953</li>
        </ul>
        <Important>
          <strong>Relevancia:</strong> Monte Carlo revolucionó la simulación de sistemas complejos en física y química computacional.
        </Important>
      </div>

      {/* 5. ANÉCDOTAS Y CURIOSIDADES */}
      <div className="theory-anecdotes-section">
        <h2><span role="img" aria-label="anécdotas">✨</span> Anécdotas y curiosidades</h2>
        <ul>
          <li>El nombre "Monte Carlo" proviene del famoso casino, por el uso de azar</li>
          <li>Se usa en biología, inteligencia artificial, y predicción de mercados</li>
        </ul>
        <Important>
          <strong>Curiosidad:</strong> El método es tan versátil que se usa desde física de partículas hasta simulaciones sociales.
        </Important>
      </div>

      {/* 6. RESUMEN */}
      <div className="theory-summary-section">
        <h2><span role="img" aria-label="resumen">📝</span> Resumen</h2>
        <p>
          El método Monte Carlo es esencial para la simulación moderna de sistemas complejos. Permite estimar promedios, errores y distribuciones en sistemas donde el cálculo exacto es inviable.
        </p>
        <ul>
          <li><Formula expression={String.raw`P_{\text{aceptar}} = \min\left(1, e^{-\beta \Delta E}\right)`} description="Criterio de Metropolis" /></li>
          <li><Formula expression={String.raw`\langle A \rangle = \frac{1}{N} \sum_{i=1}^{N} A_i`} description="Promedio Monte Carlo" /></li>
          <li><Formula expression={String.raw`\sigma_A = \sqrt{\frac{\langle A^2 \rangle - \langle A \rangle^2}{N_{\text{eff}}}}`} description="Error estadístico" /></li>
        </ul>
        <Important>
          <strong>Clave:</strong> Monte Carlo es una herramienta transversal en la ciencia y la ingeniería.
        </Important>
      </div>
    </>
  );
};

export default SimulacionesMonteCarloTheory;
