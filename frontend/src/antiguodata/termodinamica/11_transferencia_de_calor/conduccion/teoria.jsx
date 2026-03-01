import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as conduccionDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Conducción",
  descripcion: "Transferencia de calor por conducción en sólidos",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const ConduccionTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Conducción Térmica">
        <Concept title="Definición">
          <p>
            La <strong>conducción</strong> es el mecanismo de transferencia de calor a través de un medio material 
            sin movimiento macroscópico del material. Ocurre por la transferencia de energía cinética entre 
            moléculas adyacentes.
          </p>

          <Important>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Requiere contacto físico directo</li>
              <li>No hay movimiento del material</li>
              <li>Predominante en sólidos</li>
              <li>Depende de la conductividad térmica del material</li>
            </ul>
          </Important>
        </Concept>
      </TheorySection>


      <TheorySection title="Ley de Fourier y Resistencia Térmica">
        <Concept title="Ecuación Fundamental">
          <Formula 
            expression={String.raw`Q = -kA\frac{dT}{dx}`}
            description="Ley de Fourier de la conducción"
            calculatorId="conduccion-grupo-1"
            definitions={conduccionDefinitions}
            exercises={exercises}
            complementary={[
              {
                description: "Flujo de calor superficial",
                expression: String.raw`q = \frac{Q}{A}`,
                calculatorId: "conduccion-grupo-1",
                definitionId: "flujo-superficial",
                exercises: exercises
              },
              {
                description: "Gradiente térmico",
                expression: String.raw`\frac{dT}{dx} = -\frac{Q}{kA}`,
                calculatorId: "conduccion-grupo-1",
                definitionId: "gradiente-termico",
                exercises: exercises
              },
              {
                description: "Resistencia térmica",
                expression: String.raw`R_{cond} = \frac{L}{kA}`
              },
              {
                description: "Analogía eléctrica",
                expression: String.raw`Q = \frac{\Delta T}{R_{cond}}`,
                calculatorId: "conduccion-grupo-1",
                definitionId: "analogía-electrica",
                exercises: exercises
              },
              {
                description: "Conductancia",
                expression: String.raw`C = \frac{1}{R_{cond}} = \frac{kA}{L}`,
                calculatorId: "conduccion-grupo-1",
                definitionId: "conductancia",
                exercises: exercises
              }
            ]}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>Q:</strong> Flujo de calor (W)</li>
            <li><strong>k:</strong> Conductividad térmica del material (W/(m·K))</li>
            <li><strong>A:</strong> Área de transferencia (m²)</li>
            <li><strong>dT/dx:</strong> Gradiente de temperatura (K/m)</li>
            <li><strong>L:</strong> Espesor del material (m)</li>
            <li><strong>R_cond:</strong> Resistencia térmica (K/W)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Conductividad Térmica">
        <Concept title="Valores Típicos">
          <p><strong>Buenos conductores (metales):</strong></p>
          <ul>
            <li>Cobre: 400 W/(m·K)</li>
            <li>Aluminio: 237 W/(m·K)</li>
            <li>Acero: 50 W/(m·K)</li>
          </ul>

          <p><strong>Aislantes:</strong></p>
          <ul>
            <li>Lana de vidrio: 0.04 W/(m·K)</li>
            <li>Poliestireno: 0.03 W/(m·K)</li>
            <li>Aire: 0.026 W/(m·K)</li>
          </ul>
        </Concept>
      </TheorySection>


      {/* Sección de Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <ul>
          <li>Diseño de aislantes térmicos para la construcción y la industria.</li>
          <li>Transferencia de calor en procesadores y dispositivos electrónicos.</li>
          <li>Optimización de sistemas de calefacción y refrigeración.</li>
          <li>Estudio de la transferencia de calor en la corteza terrestre y aplicaciones geotérmicas.</li>
        </ul>
      </div>

      {/* Sección de Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: La ley de Fourier
        </h2>
        <p>La ley de Fourier fue formulada por Jean-Baptiste Joseph Fourier en 1822, quien estudió la propagación del calor en sólidos y sentó las bases de la teoría matemática de la conducción térmica.</p>
      </div>

      {/* Sección de Anécdotas y Curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        <ul>
          <li>El descubrimiento de la ley de Fourier revolucionó la ingeniería térmica.</li>
          <li>Algunos materiales como la aerogel tienen conductividades térmicas extremadamente bajas, siendo usados en trajes espaciales.</li>
          <li>La transferencia de calor por conducción es la razón por la que los metales se sienten fríos al tacto.</li>
        </ul>
      </div>

      {/* Sección de Resumen */}
      <div className="formula-card">
        <h3>Resumen</h3>
        <p>
          La conducción es un mecanismo de transferencia de calor en sólidos gobernado por la ley de Fourier. Su comprensión es esencial para diseñar aislantes, disipadores y entender el transporte de calor en materiales.
        </p>
      </div>
    </>
  );
};

export default ConduccionTheory;
