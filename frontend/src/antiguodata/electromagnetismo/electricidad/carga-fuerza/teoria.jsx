import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as cargaFuerzaDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Carga y Fuerza",
  descripcion: "Interacción electrostática: carga, fuerza y campo eléctrico",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CargaFuerzaTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Carga Eléctrica y Ley de Coulomb">
        <Concept title="Carga Eléctrica">
          <p>La carga eléctrica es una propiedad fundamental de la materia, responsable de las interacciones electrostáticas. Puede ser positiva o negativa, y se mide en Culombios (C).</p>
          <Important>Cargas del mismo signo se repelen, mientras que cargas de signo opuesto se atraen.</Important>
        </Concept>
        <Concept title="Ley de Coulomb">
          <p>Describe la magnitud de la fuerza (F) entre dos cargas puntuales (q₁ y q₂). Esta fuerza es directamente proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia (r) que las separa.</p>
          <Formula 
            expression={String.raw`F = k \frac{|q_1 q_2|}{r^2}`}
            description="k es la constante de Coulomb (≈ 8.99x10⁹ N·m²/C²). La fuerza se mide en Newtons (N)."
            calculatorId="ley-coulomb"
            definitions={cargaFuerzaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Distancia (r)", expression: String.raw`r = \sqrt{k \frac{|q_1 q_2|}{F}}` },
              { description: "Calcular Carga (q)", expression: String.raw`|q_2| = \frac{F r^2}{k |q_1|}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>F: Fuerza eléctrica (N)</li>
            <li>k: Constante de Coulomb (8.99×10⁹ N·m²/C²)</li>
            <li>q₁, q₂: Cargas eléctricas (C)</li>
            <li>r: Distancia entre las cargas (m)</li>
          </ul>
          
          <h4>Forma vectorial</h4>
          <p>La Ley de Coulomb puede expresarse en forma vectorial para indicar la dirección de la fuerza. La dirección depende del signo de las cargas: cargas del mismo signo resultan en una fuerza repulsiva, cargas de signo opuesto resultan en una fuerza atractiva.</p>

          <h4>Justificación física</h4>
          <p>La ley se obtuvo empíricamente. Puede entenderse como la ley de la inversa del cuadrado que surge de la conservación de flujo en 3D: la densidad de flujo que atraviesa una superficie es proporcional a 1/r².</p>
          
          <Example
            title="Cálculo de la fuerza entre dos cargas"
            problem={"Dos cargas, +3 µC y -5 µC, separadas 20 cm. Calcular la magnitud de la fuerza."}
            solution={
              <div>
                <ol>
                  <li>Convertir unidades: q₁ = 3×10⁻⁶ C, q₂ = 5×10⁻⁶ C, r = 0.20 m.</li>
                  <li>Aplicar Ley de Coulomb: F = k · |q₁ q₂| / r².</li>
                  <li>Sustituir: F = 8.99×10⁹ · (3e-6 · 5e-6) / (0.2)².</li>
                  <li>Calcular: numerador = 8.99×10⁹ · 15e-12 ≈ 1.3485×10⁻¹; denominador = 0.04 → F ≈ 3.37 N.</li>
                </ol>
                <p>Resultado: ≈ 3.37 N (atracción).</p>
              </div>
            }
          />

          <Example
            title="Superposición de fuerzas: tres cargas en línea"
            problem={"q1=+2 nC en x=0, q2=-3 nC en x=4 m. ¿Cuál es la fuerza sobre q3=+1 nC en x=2 m?"}
            solution={
              <div>
                <ol>
                  <li>Calcular distancia q1–q3: r13 = 2 m; q2–q3: r23 = 2 m.</li>
                  <li>F13 = k·|q1·q3|/r13² = 8.99e9·(2e-9·1e-9)/4 = 4.495e-9 N (dirección: repulsión hacia +x).</li>
                  <li>F23 = k·|q2·q3|/r23² = 8.99e9·(3e-9·1e-9)/4 = 6.7425e-9 N (dirección: atracción hacia -x debido a q2 negativa).</li>
                  <li>Sumar vectores (signos): F_total = F13 (→) - F23 (←) = 4.495e-9 - 6.7425e-9 = -2.2475e-9 N → magnitud 2.25e-9 N hacia -x.</li>
                </ol>
                <p>Resultado: ≈ 2.25×10⁻⁹ N hacia la izquierda (neto).</p>
              </div>
            }
          />
        </Concept>
      </TheorySection>

      <TheorySection title="Campo Eléctrico">
        <Concept title="Definición de Campo Eléctrico">
          <p>Una carga eléctrica crea un campo eléctrico (E) en el espacio que la rodea. Este campo ejerce una fuerza sobre cualquier otra carga que se coloque en su interior. Se define como la fuerza (F) por unidad de carga (q).</p>
          <Formula 
            expression={String.raw`E = \frac{F}{q}`}
            description="El campo eléctrico se mide en Newtons por Culombio (N/C)."
            calculatorId="campo-electrico-definicion"
            definitions={cargaFuerzaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Fuerza (F)", expression: String.raw`F = E \cdot q` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>E: Campo eléctrico (N/C)</li>
            <li>F: Fuerza eléctrica (N)</li>
            <li>q: Carga de prueba (C)</li>
          </ul>
        </Concept>
        <Concept title="Campo de una Carga Puntual">
          <p>El campo eléctrico (E) generado por una única carga fuente (Q) a una cierta distancia (r) se puede calcular directamente sin necesidad de una carga de prueba.</p>
          <Formula 
            expression={String.raw`E = k \frac{|Q|}{r^2}`}
            calculatorId="campo-electrico-puntual"
            definitions={cargaFuerzaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Carga Fuente (Q)", expression: String.raw`|Q| = \frac{E r^2}{k}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>E: Campo eléctrico (N/C)</li>
            <li>k: Constante de Coulomb (8.99×10⁹ N·m²/C²)</li>
            <li>Q: Carga fuente (C)</li>
            <li>r: Distancia a la carga (m)</li>
          </ul>
        </Concept>
        <Example>
          <p>El principio de superposición establece que el campo eléctrico total en un punto, debido a múltiples cargas, es la suma vectorial de los campos eléctricos creados por cada carga individual en ese punto.</p>
        </Example>
      </TheorySection>

      <TheorySection title="Potencial y Energía">
        <Concept title="Energía potencial entre dos cargas">
          <p>La energía potencial electrostática entre dos cargas puntuales q₁ y q₂ separadas por distancia r es:</p>
          <Formula
            expression={String.raw`U = k \frac{q_1 q_2}{r}`}
            description="Energía potencial electrostática (J)."
            calculatorId="energia-coulomb"
            definitions={cargaFuerzaDefinitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>U: Energía potencial electrostática (J)</li>
            <li>k: Constante de Coulomb (8.99×10⁹ N·m²/C²)</li>
            <li>q₁, q₂: Cargas eléctricas (C)</li>
            <li>r: Distancia entre las cargas (m)</li>
          </ul>
          <p>Observe el signo: si las cargas tienen el mismo signo, U es positiva (sistema requiere energía para acercarlas); si de signos opuestos, U es negativa (libera energía al aproximarlas).</p>
        </Concept>

        <Concept title="Relación entre campo y potencial">
          <p>El campo eléctrico se relaciona con el potencial escalar V. Para una carga puntual:</p>
          <Formula
            expression={String.raw`V = k \frac{q}{r}`}
            description="Potencial eléctrico (V)."
            calculatorId="potencial-puntual"
            definitions={cargaFuerzaDefinitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>V: Potencial eléctrico (V)</li>
            <li>k: Constante de Coulomb (8.99×10⁹ N·m²/C²)</li>
            <li>q: Carga fuente (C)</li>
            <li>r: Distancia a la carga (m)</li>
          </ul>
        </Concept>

        <Example
          title="Energía entre cargas"
          problem={"Dos cargas +2 µC y +3 µC separadas 5 cm. ¿Cuál es la energía potencial?"}
          solution={<div>
            <ol>
              <li>q1 = 2e-6 C, q2 = 3e-6 C, r = 0.05 m</li>
              <li>U = k·q1·q2 / r = 8.99e9 · (2e-6 · 3e-6) / 0.05 ≈ 1.0788 J</li>
            </ol>
            <p>Resultado: ≈ 1.08 J (positivo, repulsivo).</p>
          </div>}
        />
      </TheorySection>

      <TheorySection title="Nota: Ley de Gauss (breve)">
        <Concept title="Interpretación de flujo">
          <p>La Ley de Gauss relaciona el flujo eléctrico a través de una superficie cerrada con la carga encerrada. Es una herramienta potente para obtener campos con simetría.</p>
          <Important>La forma integral general de la Ley de Gauss requiere integración de superficies y geometrías arbitrarias. Para una carga puntual y superficie esférica, al aplicar Gauss se recupera la dependencia 1/r² del campo.</Important>
        </Concept>
      </TheorySection>
      
      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <h3>🔬 Instrumentación y Sensores</h3>
        <p>Medidores de campo eléctrico, sensores de carga y detectores electrostáticos emplean los principios de la interacción carga-fuerza.</p>
        <h3>⚡ Control de Cargas en Industria</h3>
        <p>Procesos industriales usan campos eléctricos para manipular partículas cargadas (precipitadores electrostáticos, impresoras láser).</p>
        <h3>🧪 Experimentos Fundamentales</h3>
        <p>Experimentos como el de Millikan o mediciones de Coulomb ilustran la cuantización y la magnitud de la carga eléctrica.</p>
      </div>

      {/* Hechos históricos */}
      <div className="theory-history-section">
        <h2><span>📜</span> Historia</h2>
        <p>La ley de Coulomb y las mediciones de carga sentaron las bases de la electrostática clásica; experimentos históricos permitieron cuantificar la carga del electrón.</p>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas y curiosidades</h2>
        <p>Historias sobre el frasco de Leyden y experimentos de laboratorio que muestran la naturaleza sorprendente de las cargas eléctricas.</p>
      </div>

      {/* Resumen como formula-card */}
      <div className="formula-card">
        <h3 className="concept-title">Resumen</h3>
        <div className="concept-body">
          <p>La interacción entre cargas se rige por la Ley de Coulomb; la magnitud de la fuerza depende del producto de cargas y de la inversa del cuadrado de la distancia. El concepto de campo eléctrico permite describir la fuerza por unidad de carga.</p>
          <p>Estas herramientas permiten calcular fuerzas, campos y distancias, y forman la base para aplicaciones prácticas en instrumentación, energía y electrónica.</p>
        </div>
      </div>
    </>
  );
};

export default CargaFuerzaTheory;
