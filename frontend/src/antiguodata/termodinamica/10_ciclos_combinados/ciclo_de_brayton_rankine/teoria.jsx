import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as ciclo_combinadoDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Ciclo Brayton-Rankine",
  descripcion: "Combinación de ciclos de gas (Brayton) y vapor (Rankine) mediante un generador de vapor de recuperación (HRSG) para lograr eficiencias de planta superiores (55-65%) y mejor aprovechamiento del combustible.",
  isTheoryOnly: true,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CicloBraytonRankineTheory = ({ exercises }) => {
  return (
    <>
     <TheorySection title="¿Qué es un Ciclo Combinado?">
        <Concept title="Definición">
          <p>
            Un ciclo combinado Brayton-Rankine es un sistema que integra una turbina de gas (ciclo Brayton) con una turbina de vapor (ciclo Rankine) para maximizar la eficiencia energética. Los gases de escape calientes de la turbina de gas se usan para generar vapor en el ciclo Rankine mediante un generador de vapor de recuperación (HRSG).
          </p>

          <Important>
            <p>Componentes del Sistema:</p>
            <ul>
              <li>Ciclo superior (Brayton): turbina de gas que produce electricidad</li>
              <li>Generador de vapor de recuperación (HRSG): aprovecha gases de escape para crear vapor</li>
              <li>Ciclo inferior (Rankine): turbina de vapor que produce electricidad adicional</li>
              <li>Condensador: enfría el vapor para cerrar el ciclo</li>
            </ul>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Eficiencia del Ciclo Combinado">
        <Concept title="Fórmula de Eficiencia">
          <p>
            La eficiencia del ciclo combinado es superior a la suma simple de eficiencias individuales:
          </p>

          <Formula 
            expression={String.raw`\eta_{CC} = \eta_{Brayton} + \eta_{Rankine}(1 - \eta_{Brayton})`}
            description="Eficiencia del ciclo combinado"
            calculatorId="ciclo_de_brayton_rankine-grupo-1"
            definitions={ciclo_combinadoDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Eficiencia alternativa", expression: String.raw`\eta_{CC} = 1 - (1 - \eta_{Brayton})(1 - \eta_{Rankine})` },
              { description: "Mejora de eficiencia", expression: String.raw`\Delta\eta = \eta_{CC} - \eta_{Brayton}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>η<sub>CC</sub>: eficiencia del ciclo combinado (adimensional)</li>
            <li>η<sub>Brayton</sub>: eficiencia del ciclo Brayton (turbina de gas)</li>
            <li>η<sub>Rankine</sub>: eficiencia del ciclo Rankine (turbina de vapor)</li>
          </ul>

          <p>Eficiencias típicas:</p>
          <ul>
            <li>Turbina de gas sola: 35–45%</li>
            <li>Ciclo combinado: 55–65%</li>
            <li>Mejora: 15–20 puntos porcentuales</li>
          </ul>
        </Concept>

        <Concept title="Trabajo Total">
          <Formula 
            expression={String.raw`W_{total} = W_{Brayton} + W_{Rankine}`}
            description="Trabajo total del sistema"
            calculatorId="ciclo_de_brayton_rankine-grupo-1"
            definitions={ciclo_combinadoDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Potencia total", expression: String.raw`P_{total} = P_{Brayton} + P_{Rankine}` },
              { description: "Relación de trabajos", expression: String.raw`\frac{W_{Rankine}}{W_{Brayton}} = \text{ratio típico: 0.3-0.5}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>W<sub>total</sub>: trabajo total producido (J)</li>
            <li>W<sub>Brayton</sub>: trabajo de la turbina de gas (J)</li>
            <li>W<sub>Rankine</sub>: trabajo de la turbina de vapor (J)</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>✅ Ventajas del ciclo combinado</h3>
          <p>
            Alta eficiencia (55–65%) frente a ciclos simples (35–45%), flexibilidad de operación y menor impacto ambiental por mejor aprovechamiento del combustible.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏭 Usos típicos</h3>
          <p>
            Centrales CCGT para base y pico, cogeneración industrial, plantas químicas y refinerías aprovechando gases residuales para generar vapor.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🌡️ HRSG y niveles de presión</h3>
          <p>
            Los HRSG suelen tener uno, dos o tres niveles de presión (baja/media/alta) con sobrecalentamiento y recalentamiento. Múltiples niveles incrementan la recuperación térmica y elevan la eficiencia del ciclo inferior.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔁 Recalentamiento y extracción</h3>
          <p>
            El recalentamiento intermedio reduce humedad en últimas etapas de la turbina de vapor y aumenta el trabajo específico. Extracciones para precalentar agua de alimentación mejoran la eficiencia del tren Rankine.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y evolución del ciclo combinado
        </h2>
        <div className="theory-subsection">
          <h3>🔧 HRSG y temperaturas de entrada</h3>
          <p>
            La combinación Brayton+Rankine se consolidó con mayores temperaturas de entrada a turbina y HRSG más eficientes, popularizándose por su alta eficiencia y menores emisiones desde finales del siglo XX.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>⚡ Récords de eficiencia</h3>
          <p>
            Plantas modernas han declarado eficiencias superiores al 62% mediante optimización de compresores/turbinas, materiales avanzados y diseño de HRSG multicuerpo con bajas pérdidas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🌍 Despliegue global</h3>
          <p>
            La expansión de gas natural y la necesidad de generación flexible impulsaron el despliegue de CCGT en redes eléctricas, complementando renovables con arranque rápido y buena modulación.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        <div className="theory-subsection">
          <h3>🏁 Eficiencias récord y diseño</h3>
          <p>
            Algunas plantas superan el 62% en condiciones óptimas; recalentamiento, múltiples presiones en HRSG y el balance entre presión/temperatura del Brayton y la curva del Rankine son claves de rendimiento.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🧪 Materiales y refrigeración</h3>
          <p>
            Superaleaciones, recubrimientos de barrera térmica y refrigeración interna/por película permiten mayores T de entrada a turbina, elevando la eficiencia del ciclo superior.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>📊 Punto óptimo de r_p</h3>
          <p>
            La relación de presiones óptima del Brayton depende de la T máxima y del uso de regeneración; en CCGT se ajusta para maximizar recuperación en el HRSG sin penalizar el núcleo gas.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>Brayton (gas) + HRSG + Rankine (vapor) elevan η de planta.</li>
          <li>η típica: 55–65%; mejora de 15–20 puntos vs ciclo simple.</li>
          <li>Trabajo total: W_total = W_Brayton + W_Rankine.</li>
          <li>Claves: optimizar HRSG, reheat y parámetros del Brayton.</li>
        </ul>
      </div>
    </>
  );
};

export default CicloBraytonRankineTheory;
