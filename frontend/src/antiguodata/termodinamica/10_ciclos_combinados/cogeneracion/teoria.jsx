import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as cogeneracionDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Cogeneración",
  descripcion: "Producción simultánea de electricidad y calor útil",
  isTheoryOnly: true,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CogeneracionTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Cogeneración?">
        <Concept title="Definición">
          <p>
            La cogeneración es la producción simultánea de electricidad (o trabajo mecánico) y calor útil a partir de una sola fuente de energía primaria. Aprovecha el calor residual que normalmente se desperdiciaría.
          </p>

          <Important>
            <p>Principio: en lugar de desechar el calor residual, se aprovecha para:</p>
            <ul>
              <li>Calefacción de edificios</li>
              <li>Agua caliente sanitaria</li>
              <li>Procesos industriales</li>
              <li>Refrigeración por absorción</li>
            </ul>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Eficiencia de Cogeneración">
        <Concept title="Eficiencia Global">
          <Formula 
            expression={String.raw`\eta_{cogen} = \frac{W + Q_{util}}{Q_{entrada}}`}
            description="Eficiencia de cogeneración"
            calculatorId="cogeneracion-grupo-1"
            definitions={cogeneracionDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Relación calor/potencia", expression: String.raw`\text{RCP} = \frac{Q_{util}}{W}` },
              { description: "Energía total útil", expression: String.raw`E_{util} = W + Q_{util}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>η<sub>cogen</sub>: eficiencia de cogeneración (adimensional)</li>
            <li>W: trabajo eléctrico producido (J)</li>
            <li>Q<sub>util</sub>: calor útil aprovechado (J)</li>
            <li>Q<sub>entrada</sub>: energía de entrada del combustible (J)</li>
          </ul>

          <p>Eficiencias típicas:</p>
          <ul>
            <li>Cogeneración: 80–90%</li>
            <li>Generación eléctrica sola: 35–45%</li>
            <li>Caldera sola: 80–85%</li>
          </ul>
        </Concept>

        <Concept title="Factor de Ahorro de Energía">
          <Formula 
            expression={String.raw`\text{FAE} = 1 - \frac{Q_{cogen}}{Q_{separado}}`}
            description="Factor de ahorro de energía"
            calculatorId="cogeneracion-grupo-1"
            definitions={cogeneracionDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Ahorro absoluto", expression: String.raw`\Delta Q = Q_{separado} - Q_{cogen}` },
              { description: "Porcentaje de ahorro", expression: String.raw`\text{Ahorro\%} = \text{FAE} \times 100` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>FAE: factor de ahorro de energía (adimensional)</li>
            <li>Q<sub>cogen</sub>: combustible usado en cogeneración (J)</li>
            <li>Q<sub>separado</sub>: combustible en producción separada (J)</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>🏥 Sectores de aplicación</h3>
          <p>
            Hospitales, universidades, industria alimentaria, hoteles y centros comerciales combinan electricidad con calor útil (o frío por absorción) para maximizar eficiencia y reducir costes.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏭 Motores y turbinas</h3>
          <p>
            Motores alternativos diésel/gas y turbinas de gas son tecnologías comunes de cogeneración. El calor del refrigerante, aceite y escape se recupera para procesos o climatización.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>❄️ Absorción y trigeneración</h3>
          <p>
            La refrigeración por absorción (NH₃-H₂O o LiBr-H₂O) convierte calor en frío; la trigeneración añade climatización a electricidad y calor, útil en hoteles y centros comerciales.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y evolución de la cogeneración
        </h2>
        <div className="theory-subsection">
          <h3>♻️ Eficiencia y emisiones</h3>
          <p>
            El encarecimiento del combustible y la reducción de emisiones impulsaron la adopción de turbinas de gas, motores alternativos y ciclos de vapor integrados para aprovechar el calor residual.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>📈 Políticas y tarifas</h3>
          <p>
            Incentivos, tarifas de compra de excedentes y esquemas de balance neto han favorecido la cogeneración distribuida en sectores con alta demanda térmica continua.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        <div className="theory-subsection">
          <h3>🧮 RCP y diseño</h3>
          <p>
            La relación calor/potencia (RCP) guía el dimensionamiento del sistema. La absorción permite convertir calor en frío y sistemas bien diseñados superan el 85% de eficiencia global.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔧 Integración térmica</h3>
          <p>
            Mapear curvas de demanda térmica y perfiles de operación permite ubicar intercambiadores y acumuladores térmicos, maximizando uso de calor y minimizando vertidos.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>⚖️ Balance económico</h3>
          <p>
            El éxito depende de la simultaneidad de demandas térmicas y eléctricas, costos de combustible y precios de electricidad. El dimensionamiento evita sobregeneración y penalizaciones.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>Produce electricidad y calor útil en una sola planta.</li>
          <li>Eficiencia: η_cogen = (W + Q_util) / Q_entrada.</li>
          <li>Ahorro: FAE = 1 − (Q_cogen / Q_separado).</li>
          <li>Aplicaciones: hospitales, campus, industria y hoteles.</li>
        </ul>
      </div>
    </>
  );
};

export default CogeneracionTheory;
