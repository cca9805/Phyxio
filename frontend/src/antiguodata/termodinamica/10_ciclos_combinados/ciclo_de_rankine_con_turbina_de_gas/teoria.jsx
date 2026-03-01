import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as eficiencia_globalDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Ciclo Rankine con Turbina de Gas",
  descripcion: "Configuración combinada donde una turbina de gas (ciclo Brayton) alimenta un generador de vapor de recuperación (HRSG) para accionar una turbina de vapor (ciclo Rankine), elevando la eficiencia global de la planta.",
  isTheoryOnly: true,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CicloRankineTurbinaGasTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es Rankine con Turbina de Gas?">
        <Concept title="Definición">
          <p>
            En esta configuración, la turbina de gas entrega gases de escape a alta temperatura al HRSG (generador de vapor de recuperación), que produce vapor para una turbina de vapor en ciclo Rankine. Se aprovecha el calor que de otra forma se perdería, incrementando la eficiencia global de la planta.
          </p>

          <Important>
            <p>Componentes principales:</p>
            <ul>
              <li>Turbina de gas (ciclo Brayton)</li>
              <li>HRSG (generador de vapor de recuperación)</li>
              <li>Turbina de vapor (ciclo Rankine)</li>
              <li>Condensador y sistema de alimentación</li>
            </ul>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Eficiencia Global de la Planta">
        <Concept title="Fórmula General">
          <Formula 
            expression={String.raw`\eta_{global} = \frac{\sum W_{salida} + \sum Q_{util}}{\sum Q_{entrada}}`}
            description="Eficiencia global del sistema"
            calculatorId="ciclo_de_rankine_con_turbina_de_gas-grupo-1"
            definitions={eficiencia_globalDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Pérdidas totales", expression: String.raw`Q_{perdidas} = \sum Q_{entrada} - (\sum W_{salida} + \sum Q_{util})` },
              { description: "Factor de pérdidas", expression: String.raw`f_{perdidas} = 1 - \eta_{global}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>η<sub>global</sub>: eficiencia global del sistema (adimensional)</li>
            <li>ΣW<sub>salida</sub>: suma de todo el trabajo útil producido (J)</li>
            <li>ΣQ<sub>util</sub>: suma de todo el calor útil aprovechado (J)</li>
            <li>ΣQ<sub>entrada</sub>: suma de toda la energía de entrada (J)</li>
          </ul>
        </Concept>

        <Concept title="Factor de Capacidad">
          <Formula 
            expression={String.raw`\text{FC} = \frac{\text{Energía real producida}}{\text{Energía máxima posible}}`}
            description="Factor de capacidad"
            calculatorId="ciclo_de_rankine_con_turbina_de_gas-grupo-1"
            definitions={eficiencia_globalDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Horas equivalentes", expression: String.raw`h_{equiv} = \text{FC} \times 8760` },
              { description: "Disponibilidad", expression: String.raw`\text{Disponibilidad} = \frac{\text{Horas operativas}}{\text{Horas totales}}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>FC: factor de capacidad (adimensional)</li>
            <li>Energía real: energía efectivamente producida en un período</li>
            <li>Energía máxima: energía que se produciría a capacidad nominal</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>🏭 Usos típicos</h3>
          <p>
            Centrales CCGT de base y pico, cogeneración con vapor de proceso, refinerías y químicas aprovechando gases residuales, y modernización con HRSG para elevar rendimiento.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>⚙️ Factores de eficiencia</h3>
          <p>
            Aislamiento e intercambiadores (pérdidas térmicas), fricción y mantenimiento (mecánicas), transformadores y cables (eléctricas) y operación parcial condicionan η_global.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🌡️ Niveles de presión en HRSG</h3>
          <p>
            HRSG mono/multi-nivel aprovechan mejor el perfil térmico del escape. Tres niveles con sobrecalentamiento y recalentamiento maximizan recuperación y mejoran el ciclo Rankine.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔁 Recalentamiento en Rankine</h3>
          <p>
            El recalentamiento intermedio reduce humedad en etapas bajas y aumenta trabajo específico, clave para durabilidad y eficiencia en turbinas de vapor.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y evolución de Rankine + GT
        </h2>
        <div className="theory-subsection">
          <h3>🔗 Integración con HRSG</h3>
          <p>
            El aumento de T de entrada a turbina y HRSG modulares eficientes popularizaron estas plantas, superando en eficiencia a configuraciones simples.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>⚡ Flexibilidad y redes</h3>
          <p>
            La capacidad de modular potencia y arrancar rápido convirtió a Rankine+GT en aliado de renovables variables, estabilizando redes con demanda cambiante.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        <div className="theory-subsection">
          <h3>🧮 Diseño y rendimiento</h3>
          <p>
            El ajuste de presión/temperatura del Brayton moldea la curva de vapor del HRSG; recalentamiento y múltiples presiones elevan la parte Rankine. Eficiencias de planta pueden superar 60%.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>💧 Control de humedad</h3>
          <p>
            Limitar humedad en últimas etapas evita erosión; el recalentamiento y presión de condensación baja mejoran el salto de entalpía y el rendimiento global.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>Configuración: Brayton (gas) + HRSG + Rankine (vapor).</li>
          <li>Objetivo: elevar η_global aprovechando calor de escape.</li>
          <li>Fórmula base: η_global = (ΣW_sal + ΣQ_util) / ΣQ_ent.</li>
          <li>Aplicaciones: CCGT, cogeneración industrial y modernización.</li>
        </ul>
      </div>
    </>
  );
};

export default CicloRankineTurbinaGasTheory;
