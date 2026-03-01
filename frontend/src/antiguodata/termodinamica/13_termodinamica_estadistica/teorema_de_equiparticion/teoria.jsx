import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as equiparticionDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Teorema de Equipartición",
  descripcion: "Relación entre temperatura y energía promedio por grado de libertad en sistemas clásicos.",
  isTheoryOnly: false,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};


const TeoremaDeEquiparticionTheory = ({ exercises }) => (
  <>
    <TheorySection title="Introducción y Contexto">
      <Concept title="¿Qué es el teorema de equipartición?">
        <p>
          El <strong>teorema de equipartición de la energía</strong> es un resultado fundamental de la mecánica estadística clásica. Relaciona la temperatura con la energía promedio asociada a cada grado de libertad cuadrático de un sistema en equilibrio térmico.
        </p>
        <Important>
          Cada grado de libertad cuadrático aporta <Formula inline expression={String.raw`\frac{1}{2}k_B T`} /> a la energía promedio.
        </Important>
        <p>
          Un término es <em>cuadrático</em> si aparece como el cuadrado de una coordenada o momento en la energía: <Formula inline expression={String.raw`p^2/(2m)`} />, <Formula inline expression={String.raw`(1/2)kx^2`} />, etc.
        </p>
      </Concept>
    </TheorySection>

    <TheorySection title="Enunciado Matemático y Fórmulas">
      <Concept title="Forma General">
        <p>Para cualquier término cuadrático en el hamiltoniano:</p>
        <Formula
          expression={String.raw`\left\langle \frac{1}{2} \alpha q^2 \right\rangle = \frac{1}{2} k_B T`}
          calculatorId="equiparticion-general"
          definitions={equiparticionDefinitions}
          exercises={exercises}
          complementary={[
            { description: "Calcular la temperatura (T)", expression: String.raw`T = \frac{\langle \alpha q^2 \rangle}{k_B}` }
          ]}
        />
        <strong>Donde:</strong>
        <ul>
          <li><b>q</b>: Coordenada o momento generalizado</li>
          <li><b>\alpha</b>: Constante positiva</li>
          <li><b>k_B</b>: Constante de Boltzmann (1.381 × 10⁻²³ J/K)</li>
          <li><b>T</b>: Temperatura absoluta (K)</li>
        </ul>
      </Concept>
      <Concept title="Energía Total">
        <p>Si un sistema tiene <Formula inline expression={String.raw`f`} /> grados de libertad cuadráticos:</p>
        <Formula
          expression={String.raw`U = \frac{f}{2} N k_B T`}
          calculatorId="energia-equiparticion"
          definitions={equiparticionDefinitions}
          exercises={exercises}
          complementary={[
            { description: "Por partícula", expression: String.raw`\langle E \rangle = \frac{f}{2} k_B T` },
            { description: "Calcular la temperatura (T)", expression: String.raw`T = \frac{2U}{f N k_B}` },
            { description: "Calcular grados de libertad (f)", expression: String.raw`f = \frac{2U}{N k_B T}` }
          ]}
        />
        <strong>Donde:</strong>
        <ul>
          <li><b>U</b>: Energía interna total (J)</li>
          <li><b>f</b>: Número de grados de libertad cuadráticos</li>
          <li><b>N</b>: Número de partículas</li>
          <li><b>k_B</b>: Constante de Boltzmann (1.381 × 10⁻²³ J/K)</li>
          <li><b>T</b>: Temperatura absoluta (K)</li>
        </ul>
      </Concept>
    </TheorySection>

    <TheorySection title="Aplicaciones">
      <Concept title="Gas Monoatómico">
        <p>Un átomo libre tiene 3 grados de libertad traslacionales (<Formula inline expression={String.raw`p_x^2`} />, <Formula inline expression={String.raw`p_y^2`} />, <Formula inline expression={String.raw`p_z^2`} />):</p>
        <Formula
          expression={String.raw`U = \frac{3}{2} N k_B T`}
          calculatorId="gas-monoatomico-energia"
          definitions={equiparticionDefinitions}
          exercises={exercises}
          complementary={[
            { description: "Calor específico", expression: String.raw`C_V = \frac{3}{2} N k_B` },
            { description: "Calcular la temperatura (T)", expression: String.raw`T = \frac{2U}{3 N k_B}` },
            { description: "Calcular número de partículas (N)", expression: String.raw`N = \frac{2U}{3 k_B T}` }
          ]}
        />
        <strong>Donde:</strong>
        <ul>
          <li><b>U</b>: Energía interna (J)</li>
          <li><b>N</b>: Número de partículas</li>
          <li><b>k_B</b>: Constante de Boltzmann (1.381 × 10⁻²³ J/K)</li>
          <li><b>T</b>: Temperatura absoluta (K)</li>
          <li><b>C_V</b>: Calor específico a volumen constante (J/K)</li>
        </ul>
        <Example title="Ejemplo: Helio">
          Para 1 mol de He a T = 300 K:
          <ul>
            <li>U = (3/2) × (6.022 × 10²³) × (1.381 × 10⁻²³) × 300</li>
            <li>U ≈ 3741 J</li>
            <li>C_V = (3/2)R ≈ 12.47 J/(mol·K)</li>
          </ul>
        </Example>
      </Concept>
      <Concept title="Gas Diatómico">
        <p>Una molécula diatómica tiene 5 grados de libertad activos a temperatura ambiente:</p>
        <ul>
          <li>3 traslacionales</li>
          <li>2 rotacionales (alrededor de ejes perpendiculares al eje molecular)</li>
        </ul>
        <Formula
          expression={String.raw`U = \frac{5}{2} N k_B T`}
          calculatorId="gas-diatomico-energia"
          definitions={equiparticionDefinitions}
          exercises={exercises}
          complementary={[
            { description: "Calor específico", expression: String.raw`C_V = \frac{5}{2} N k_B` },
            { description: "Calcular la temperatura (T)", expression: String.raw`T = \frac{2U}{5 N k_B}` },
            { description: "Calcular número de partículas (N)", expression: String.raw`N = \frac{2U}{5 k_B T}` }
          ]}
        />
        <strong>Donde:</strong>
        <ul>
          <li><b>U</b>: Energía interna (J)</li>
          <li><b>N</b>: Número de partículas</li>
          <li><b>k_B</b>: Constante de Boltzmann (1.381 × 10⁻²³ J/K)</li>
          <li><b>T</b>: Temperatura absoluta (K)</li>
          <li><b>C_V</b>: Calor específico a volumen constante (J/K)</li>
        </ul>
      </Concept>
      <Concept title="Sólido (Ley de Dulong-Petit)">
        <p>Cada átomo en un sólido tiene 6 grados de libertad (3 cinéticos + 3 potenciales):</p>
        <Formula
          expression={String.raw`U = 3 N k_B T`}
          calculatorId="solido-energia"
          definitions={equiparticionDefinitions}
          exercises={exercises}
          complementary={[
            { description: "Calor específico molar", expression: String.raw`C_V = 3R \approx 25 \text{ J/(mol·K)}` },
            { description: "Calcular la temperatura (T)", expression: String.raw`T = \frac{U}{3 N k_B}` },
            { description: "Calcular número de partículas (N)", expression: String.raw`N = \frac{U}{3 k_B T}` }
          ]}
        />
        <strong>Donde:</strong>
        <ul>
          <li><b>U</b>: Energía interna (J)</li>
          <li><b>N</b>: Número de partículas</li>
          <li><b>k_B</b>: Constante de Boltzmann (1.381 × 10⁻²³ J/K)</li>
          <li><b>T</b>: Temperatura absoluta (K)</li>
          <li><b>C_V</b>: Calor específico molar (J/(mol·K))</li>
          <li><b>R</b>: Constante universal de los gases (8.314 J/(mol·K))</li>
        </ul>
        <p>Esta es la famosa <strong>ley de Dulong-Petit</strong>, válida a altas temperaturas.</p>
      </Concept>
    </TheorySection>

    <TheorySection title="Limitaciones del Teorema">
      <Concept title="Efectos Cuánticos">
        <p>El teorema de equipartición es clásico y falla cuando los efectos cuánticos son importantes:</p>
        <Important>
          Un grado de libertad solo contribuye <Formula inline expression={String.raw`\frac{1}{2}k_B T`} /> si su energía característica <Formula inline expression={String.raw`\hbar\omega`} /> es mucho menor que <Formula inline expression={String.raw`k_B T`} />. Si <Formula inline expression={String.raw`\hbar\omega \gg k_B T`} />, el grado de libertad está "congelado".
        </Important>
        <ul>
          <li><strong>Rotación de H₂:</strong> Se congela por debajo de ~100 K</li>
          <li><strong>Vibración molecular:</strong> Requiere T {'>'} 1000 K para activarse</li>
          <li><strong>Sólidos a bajas T:</strong> <Formula inline expression={String.raw`C_V \to 0`} /> cuando <Formula inline expression={String.raw`T \to 0`} /> (ley de Debye)</li>
        </ul>
      </Concept>
      <Example title="Ejemplo: Calor Específico del Hidrógeno">
        El H₂ muestra tres regímenes:
        <ul>
          <li><strong>T {'<'} 100 K:</strong> <Formula inline expression={String.raw`C_V \approx \frac{3}{2}R`} /> (solo traslación)</li>
          <li><strong>100 K {'<'} T {'<'} 1000 K:</strong> <Formula inline expression={String.raw`C_V \approx \frac{5}{2}R`} /> (traslación + rotación)</li>
          <li><strong>T {'>'} 1000 K:</strong> <Formula inline expression={String.raw`C_V \approx \frac{7}{2}R`} /> (traslación + rotación + vibración)</li>
        </ul>
      </Example>
    </TheorySection>

    <div className="theory-applications-section">
      <h2><span role="img" aria-label="aplicaciones">🌍</span> Aplicaciones en la vida real</h2>
      <ul>
        <li>Predicción del calor específico de gases y sólidos a distintas temperaturas.</li>
        <li>Diseño de motores térmicos y análisis de eficiencia.</li>
        <li>Explicación de la capacidad calorífica de materiales y su variación con la temperatura.</li>
        <li>Base para la interpretación de espectros vibracionales y rotacionales en moléculas.</li>
      </ul>
    </div>

    <div className="theory-history-section">
      <h2><span role="img" aria-label="historia">📜</span> Hechos históricos relevantes</h2>
      <ul>
        <li>El teorema de equipartición fue formulado en el siglo XIX por James Clerk Maxwell y Ludwig Boltzmann.</li>
        <li>Su fracaso a bajas temperaturas motivó el desarrollo de la mecánica cuántica.</li>
        <li>La ley de Dulong-Petit fue una de las primeras evidencias experimentales de la equipartición en sólidos.</li>
      </ul>
      <Important>
        <strong>Relevancia:</strong> El teorema de equipartición es clave para la termodinámica y la física estadística.
      </Important>
    </div>

    <div className="theory-anecdotes-section">
      <h2><span role="img" aria-label="anécdotas">✨</span> Anécdotas y curiosidades</h2>
      <ul>
        <li>El fallo del teorema de equipartición para la radiación del cuerpo negro llevó a la crisis de la física clásica y al nacimiento de la física cuántica.</li>
        <li>La ley de Dulong-Petit predice un valor universal para el calor específico molar de los sólidos a altas temperaturas.</li>
        <li>En la práctica, muchos grados de libertad están "congelados" a temperatura ambiente y solo se activan a temperaturas muy altas.</li>
      </ul>
      <Important>
        <strong>Dato curioso:</strong> El teorema de equipartición es una de las pocas leyes físicas que predice valores numéricos universales a partir de principios estadísticos.
      </Important>
    </div>

    <div className="theory-summary-section">
      <h2><span role="img" aria-label="resumen">📝</span> Resumen</h2>
      <p>
        El teorema de equipartición conecta la temperatura con la energía promedio de los grados de libertad de un sistema clásico. Es fundamental para entender el calor específico de gases y sólidos, pero falla cuando los efectos cuánticos son importantes.
      </p>
      <ul>
        <li><Formula inline expression={String.raw`\langle E \rangle = \frac{1}{2}k_B T`} /> por grado de libertad cuadrático</li>
        <li><Formula inline expression={String.raw`U = \frac{f}{2} N k_B T`} /> para f grados de libertad</li>
        <li>Gas monoatómico: <Formula inline expression={String.raw`U = \frac{3}{2} N k_B T`} /></li>
        <li>Gas diatómico: <Formula inline expression={String.raw`U = \frac{5}{2} N k_B T`} /></li>
        <li>Sólido: <Formula inline expression={String.raw`U = 3 N k_B T`} /> (ley de Dulong-Petit)</li>
        <li>Falla a bajas temperaturas (efectos cuánticos)</li>
      </ul>
      <Important>
        <strong>Utilidad práctica:</strong> Permite predecir el comportamiento térmico de materiales y fundamenta la termodinámica clásica.
      </Important>
    </div>
  </>
);

export default TeoremaDeEquiparticionTheory;
