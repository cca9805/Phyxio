import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as resistenciaDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Resistencia Térmica Equivalente",
  descripcion: "Combinación de resistencias térmicas en sistemas compuestos, serie y paralelo. Cálculo de flujo de calor y analogía eléctrica.",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const getDefinitionById = (id) => resistenciaDefinitions.find(d => d.id === id) || {};

const ResistenciaTheory = ({ exercises }) => {
  return (
    <div>
      {/* Título e introducción */}
      <div className="theory-title-section">
        <h1>Resistencia Térmica Equivalente</h1>
        <p>
          La <strong>resistencia térmica</strong> es un concepto fundamental en transferencia de calor que permite analizar cómo se oponen los materiales y las interfaces al flujo de energía térmica. Se utiliza la analogía eléctrica para modelar el paso del calor como si fuera una corriente eléctrica, facilitando el cálculo en sistemas compuestos.
        </p>
      </div>

      {/* Teoría ampliada */}
      <div className="theory-main-section">
        <h2>Teoría y conceptos clave</h2>
        <p>
          En sistemas reales, el calor suele atravesar varias capas de materiales y puede intercambiarse con el ambiente. Para analizar estos sistemas, se combinan resistencias térmicas en <strong>serie</strong> (el calor pasa secuencialmente por cada material) y en <strong>paralelo</strong> (el calor puede dividirse en varios caminos simultáneos).
        </p>
        <Important>
          <p> <strong>Analogía eléctrica:</strong> El flujo de calor <strong>"Q"</strong> es análogo a la corriente eléctrica, la diferencia de temperatura <strong>"ΔT"</strong> al voltaje, y la resistencia térmica <strong>"R"</strong> a la resistencia eléctrica.
           
          </p>
        </Important>
        <p>
          <strong>Resistencia por conducción:</strong> Depende del espesor, conductividad y área del material. <br />
          <strong>Resistencia por convección:</strong> Depende del coeficiente de convección y el área de intercambio.
        </p>
      </div>

      {/* Fórmulas fundamentales */}
      <div className="theory-formulas-section">
        <h2>Fórmulas fundamentales</h2>
        <Concept title="Resistencias en Serie">
          <Formula
            expression={String.raw`R_{total} = R_1 + R_2 + R_3 + ...`}
            description="Resistencias térmicas en serie"
            calculatorId="resistencia-serie"
            definitions={resistenciaDefinitions}
            exercises={exercises}
            complementary={getDefinitionById('resistencia-serie').complementary || []}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>R_total:</strong> Resistencia total (K/W)</li>
            <li><strong>R₁, R₂, R₃:</strong> Resistencias individuales (K/W)</li>
          </ul>
          <p>En serie, el calor fluye a través de todas las resistencias secuencialmente.</p>
        </Concept>

        <Concept title="Resistencias en Paralelo">
          <Formula
              expression={String.raw`\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + ...`}
            calculatorId="resistencia-paralelo"
            definitions={resistenciaDefinitions}
            exercises={exercises}
            complementary={getDefinitionById('resistencia-paralelo').complementary || []}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>R_eq:</strong> Resistencia equivalente (K/W)</li>
            <li><strong>R₁, R₂, R₃:</strong> Resistencias individuales (K/W)</li>
          </ul>
          <p>En paralelo, el calor se divide entre múltiples caminos.</p>
        </Concept>

        <Concept title="Resistencia por Conducción">
          <Formula
            expression={String.raw`R_{cond} = \frac{L}{kA}`}
            description="Resistencia por conducción"
            calculatorId="resistencia-conduccion"
            definitions={resistenciaDefinitions}
            exercises={exercises}
            complementary={getDefinitionById('resistencia-conduccion').complementary || []}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>R_cond:</strong> Resistencia por conducción (K/W)</li>
            <li><strong>L:</strong> Espesor (m)</li>
            <li><strong>k:</strong> Conductividad térmica (W/(m·K))</li>
            <li><strong>A:</strong> Área (m²)</li>
          </ul>
        </Concept>

        <Concept title="Resistencia por Convección">
          <Formula
            expression={String.raw`R_{conv} = \frac{1}{hA}`}
            description="Resistencia por convección"
            calculatorId="resistencia-conveccion"
            definitions={resistenciaDefinitions}
            exercises={exercises}
            complementary={getDefinitionById('resistencia-conveccion').complementary || []}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>R_conv:</strong> Resistencia por convección (K/W)</li>
            <li><strong>h:</strong> Coeficiente de convección (W/(m²·K))</li>
            <li><strong>A:</strong> Área (m²)</li>
          </ul>
        </Concept>

        <Concept title="Analogía eléctrica">
          <Formula
            expression={String.raw`Q = \frac{\Delta T}{R_{total}}`}
            description="Analogía eléctrica: flujo de calor"
            calculatorId="analogía-electrica"
            definitions={resistenciaDefinitions}
            exercises={exercises}
            complementary={getDefinitionById('analogía-electrica').complementary || []}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>Q:</strong> Flujo de calor (W)</li>
            <li><strong>ΔT:</strong> Diferencia de temperatura (K)</li>
            <li><strong>R_total:</strong> Resistencia total (K/W)</li>
          </ul>
        </Concept>

        <Concept title="Conductancia térmica">
          <Formula
            expression={String.raw`C = \frac{1}{R_{total}}`}
            description="Conductancia térmica"
            calculatorId="conductancia"
            definitions={resistenciaDefinitions}
            exercises={exercises}
            complementary={getDefinitionById('conductancia').complementary || []}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>C:</strong> Conductancia (W/K)</li>
            <li><strong>R_total:</strong> Resistencia total (K/W)</li>
          </ul>
        </Concept>

        <Concept title="Flujo de calor superficial">
          <Formula
            expression={String.raw`q = \frac{Q}{A}`}
            description="Flujo de calor superficial"
            calculatorId="flujo-superficial"
            definitions={resistenciaDefinitions}
            exercises={exercises}
            complementary={getDefinitionById('flujo-superficial').complementary || []}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>q:</strong> Flujo de calor superficial (W/m²)</li>
            <li><strong>Q:</strong> Flujo de calor (W)</li>
            <li><strong>A:</strong> Área (m²)</li>
          </ul>
        </Concept>
      </div>

      {/* Sección de Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <ul>
          <li>Diseño de muros y fachadas con aislamiento térmico.</li>
          <li>Cálculo de la transferencia de calor en intercambiadores y envolventes térmicas.</li>
          <li>Dimensionamiento de sistemas de aislamiento térmico para equipos industriales.</li>
          <li>Optimización energética en la construcción y la industria.</li>
        </ul>
      </div>

      {/* Sección de Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y analogía eléctrica
        </h2>
        <p>
          El concepto de resistencia térmica y su analogía con la resistencia eléctrica surgieron en el siglo XIX, permitiendo a los ingenieros modelar sistemas térmicos complejos con herramientas similares a las de los circuitos eléctricos. Esta aproximación facilitó el desarrollo de métodos de aislamiento y la optimización de procesos industriales.
        </p>
      </div>

      {/* Sección de Anécdotas y Curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        <ul>
          <li>La analogía eléctrica se usa con frecuencia para comparar sistemas térmicos y eléctricos en ingeniería.</li>
          <li>El aislamiento térmico eficiente reduce energía y coste en edificaciones.</li>
          <li>En la naturaleza, la piel y la grasa de los animales funcionan como aislantes térmicos.</li>
        </ul>
      </div>

      {/* Sección de Resumen */}
      <div className="formula-card">
        <h3>Resumen</h3>
        <p>
          Las resistencias térmicas pueden combinarse en serie y paralelo; su cálculo permite estimar pérdidas y ganancias térmicas y diseñar sistemas de aislamiento. La analogía eléctrica simplifica el análisis y es clave en la ingeniería térmica moderna.
        </p>
      </div>
    </div>
  );
};

export default ResistenciaTheory;
