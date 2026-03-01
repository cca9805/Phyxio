import { TheorySection, Concept, Formula } from '../../../../components/TheoryV2';
import { definitions as conceptosDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Conceptos Básicos",
  descripcion: "Fundamentos de transferencia de calor",
  isTheoryOnly: true,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const ConceptosBasicosTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Fundamentos">
        <Concept title="Mecanismos de Transferencia">
          <p>Existen tres mecanismos fundamentales:</p>
          <ul>
            <li>Conducción: en sólidos, sin movimiento del material</li>
            <li>Convección: en fluidos, con movimiento del material</li>
            <li>Radiación: por ondas electromagnéticas, sin medio</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Resistencia Térmica">
        <Concept title="Analogía Eléctrica">
          <Formula 
            expression={String.raw`Q = \frac{\Delta T}{R_{th}}`}
            description="Flujo de calor"
            calculatorId="conceptos_basicos-grupo-1"
            definitions={conceptosDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Analogía con Ley de Ohm", expression: String.raw`I = \frac{V}{R}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>Q: flujo de calor (W) — análogo a corriente eléctrica</li>
            <li>ΔT: diferencia de temperatura (K) — análogo a voltaje</li>
            <li>R_th: resistencia térmica (K/W) — análogo a resistencia eléctrica</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>🏠 Aislamiento térmico</h3>
          <p>
            El concepto de resistencia térmica guía el diseño de muros, ventanas y techos para minimizar pérdidas de calor en edificios.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🧪 Electrónica y disipación</h3>
          <p>
            Disipadores y pastas térmicas reducen R_th entre chip y ambiente, manteniendo temperaturas seguras en componentes electrónicos.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🚗 Automoción</h3>
          <p>
            Sistemas de refrigeración de motores y baterías gestionan conducción y convección para extraer calor eficientemente.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y evolución
        </h2>
        <div className="theory-subsection">
          <h3>📘 Analogías y modelos</h3>
          <p>
            La analogía térmica-eléctrica (Ohm) facilitó el análisis de sistemas multicapa, estableciendo herramientas didácticas para cálculo de flujos.
          </p>
        </div>
      </div>

      {/* Anécdotas, curiosidades y aplicaciones */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        <div className="theory-subsection">
          <h3>🧱 Capas en serie/paralelo</h3>
          <p>
            Como en electricidad, resistencias térmicas se combinan en serie y paralelo; diseñar la secuencia correcta reduce pérdidas y evita puentes térmicos.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🌡️ Unidades y conversión</h3>
          <p>
            R_th en K/W y conductividad k en W/m·K relacionan geometría y material; confundir unidades genera errores de diseño significativos.
          </p>
        </div>
        <ul>
          <li>El <strong>primer termómetro</strong> fue inventado por Galileo en 1592, usando aire y agua.</li>
          <li>La <strong>transferencia de calor</strong> es clave en la vida: los mamíferos regulan su temperatura gracias a mecanismos de conducción, convección y radiación.</li>
          <li>El <strong>efecto invernadero</strong> es un ejemplo natural de transferencia de calor por radiación y retención de energía.</li>
          <li>Las <strong>mantas térmicas</strong> de emergencia reflejan la radiación infrarroja del cuerpo, evitando la pérdida de calor.</li>
          <li>En la industria, la eficiencia de motores y reactores depende de controlar la transferencia de calor.</li>
          <li>Un <strong>mito</strong>: "El metal siempre está frío". En realidad, solo transfiere calor más rápido que otros materiales.</li>
        </ul>
        <h3>Aplicaciones cotidianas</h3>
        <ul>
          <li>Refrigeradores y aires acondicionados funcionan extrayendo calor de un espacio y liberándolo en otro.</li>
          <li>La ropa de invierno atrapa aire, reduciendo la transferencia de calor por convección.</li>
          <li>Los termos mantienen bebidas calientes o frías minimizando la transferencia de calor.</li>
        </ul>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>Mecanismos: conducción, convección y radiación.</li>
          <li>Analogía: Q = ΔT / R_th, como I = V / R.</li>
          <li>Aplicaciones: aislamiento, electrónica, automoción.</li>
          <li>Diseño: combinar capas y materiales para minimizar pérdidas.</li>
        </ul>
      </div>
    </>
  );
};

export default ConceptosBasicosTheory;
