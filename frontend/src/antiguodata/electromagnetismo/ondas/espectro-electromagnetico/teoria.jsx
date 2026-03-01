import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as ondasDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Espectro Electromagnético",
  descripcion: "Clasificación completa del espectro electromagnético por frecuencia y longitud de onda",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const OndasTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Ondas Electromagnéticas: La Danza de la Luz">
        <p>
          Las ondas electromagnéticas (OEM) son perturbaciones acopladas de campos eléctricos y magnéticos que se propagan por el espacio, transportando energía e información sin necesidad de un medio material. La luz visible, las microondas y las ondas de radio son todas formas de ondas electromagnéticas.
        </p>
        <Important>
          La predicción y descripción de estas ondas es uno de los mayores triunfos de las ecuaciones de Maxwell, unificando la electricidad, el magnetismo y la óptica.
        </Important>
      </TheorySection>

      <TheorySection title="Relación Fundamental de Onda">
        <p>
          La propiedad más básica que comparten todas las ondas es la relación entre su velocidad de propagación, su frecuencia y su longitud de onda. 
        </p>
        <Concept title="Velocidad, Frecuencia y Longitud de Onda">
          <p>La velocidad de una onda es directamente proporcional a su frecuencia (cuántas crestas pasan por segundo) y a su longitud de onda (la distancia entre crestas).</p>
          <Formula
            expression={String.raw`v = f \lambda`}
            calculatorId="ondas_relacion_fundamental"
            definitions={ondasDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Frecuencia", expression: String.raw`f = \frac{v}{\lambda}` },
              { description: "Longitud de onda", expression: String.raw`\lambda = \frac{v}{f}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>v = Velocidad de propagación de la onda (m/s)</li>
            <li>f = Frecuencia de la onda (Hz)</li>
            <li>λ = Longitud de onda (m)</li>
          </ul>
        </Concept>
        <Example title="Luz en el Vacío">
          En el vacío, la velocidad v es la velocidad de la luz, c. Por lo tanto, para cualquier onda electromagnética en el vacío (radio, luz, rayos X), se cumple que c = fλ.
        </Example>
      </TheorySection>

      <TheorySection title="Propiedades en el Vacío">
        <p>
          En el vacío, las propiedades de las ondas electromagnéticas están directamente dictadas por las constantes fundamentales del universo.
        </p>
        <Concept title="Relación de Amplitud E/B">
          <p>Las magnitudes del campo eléctrico (E) y magnético (B) no son independientes. Están intrínsecamente ligadas por la velocidad de la luz, c.</p>
          <Formula
            expression={String.raw`E = c B`}
            calculatorId="ondas_relacion_E_B"
            definitions={ondasDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Campo Magnético", expression: String.raw`B = \frac{E}{c}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>E = Magnitud del campo eléctrico (V/m)</li>
            <li>c = Velocidad de la luz en el vacío (3×10⁸ m/s)</li>
            <li>B = Magnitud del campo magnético (T)</li>
          </ul>
        </Concept>

        <Concept title="Intensidad (Vector de Poynting)">
          <p>Las ondas electromagnéticas transportan energía. La intensidad (potencia por unidad de área) está dada por la magnitud del Vector de Poynting, que depende de ambos campos.</p>
          <Formula
            expression={String.raw`S = \frac{1}{\mu_0} E B`}
            calculatorId="ondas_vector_poynting"
            definitions={ondasDefinitions}
            exercises={exercises}
            complementary={[
                { description: "Campo Eléctrico", expression: String.raw`E = \frac{S \cdot \mu_0}{B}` },
                { description: "Campo Magnético", expression: String.raw`B = \frac{S \cdot \mu_0}{E}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>S = Intensidad de la onda (W/m²)</li>
            <li>μ₀ = Permeabilidad magnética del vacío (4π×10⁻⁷ T·m/A)</li>
            <li>E = Magnitud del campo eléctrico (V/m)</li>
            <li>B = Magnitud del campo magnético (T)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ondas en Medios Materiales">
        <p>
          Cuando la luz o cualquier onda electromagnética viaja a través de un material (como agua o vidrio), su velocidad disminuye. Este fenómeno se describe mediante el índice de refracción.
        </p>
        <Concept title="Índice de Refracción">
          <p>El índice de refracción n de un material es el factor por el cual la velocidad de la luz se reduce en comparación con su velocidad en el vacío c.</p>
          <Formula
            expression={String.raw`v = \frac{c}{n}`}
            calculatorId="ondas_velocidad_medio"
            definitions={ondasDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Índice de Refracción", expression: String.raw`n = \frac{c}{v}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>v = Velocidad de la luz en el medio (m/s)</li>
            <li>c = Velocidad de la luz en el vacío (3×10⁸ m/s)</li>
            <li>n = Índice de refracción del medio (adimensional)</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <p>
          El espectro electromagnético es fundamental para innumerables tecnologías modernas. Las ondas de radio 
          permiten comunicaciones inalámbricas y transmisiones de TV. Las microondas calientan alimentos y transmiten 
          datos por WiFi. La luz infrarroja se usa en controles remotos y visión nocturna. La luz visible nos permite 
          ver el mundo. La luz ultravioleta esteriliza agua y detecta billetes falsos. Los rayos X permiten ver dentro 
          del cuerpo humano y analizar estructuras cristalinas. Los rayos gamma se usan en radioterapia contra el cáncer 
          y en la esterilización de equipos médicos.
        </p>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2><span>📜</span> Historia del espectro electromagnético</h2>
        <p>
          En 1800, William Herschel descubrió la radiación infrarroja al medir la temperatura más allá del rojo visible. 
          En 1801, Johann Ritter descubrió la radiación ultravioleta. James Clerk Maxwell predijo matemáticamente la 
          existencia de ondas electromagnéticas en 1865, unificando electricidad, magnetismo y luz. Heinrich Hertz 
          confirmó experimentalmente las ondas de radio en 1887. Wilhelm Röntgen descubrió los rayos X en 1895. 
          Paul Villard descubrió los rayos gamma en 1900. A lo largo del siglo XX, se exploraron todas las regiones 
          del espectro, desde ondas de radio de kilómetros de longitud hasta rayos gamma de tamaño subatómico.
        </p>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas y curiosidades</h2>
        <p>
          El espectro visible (luz que podemos ver) representa menos del 0.0035% de todo el espectro electromagnético. 
          Las abejas pueden ver luz ultravioleta, lo que les permite ver patrones en flores invisibles para nosotros. 
          Las serpientes de cascabel pueden detectar radiación infrarroja, permitiéndoles "ver" el calor de sus presas 
          en la oscuridad total. Un solo fotón de rayos gamma tiene más energía que mil millones de fotones de luz visible. 
          Las ondas de radio de las primeras transmisiones de TV de los años 1930 siguen viajando por el espacio y ya 
          han alcanzado miles de estrellas. El fondo cósmico de microondas es radiación electromagnética del Big Bang 
          que aún podemos detectar hoy, 13,800 millones de años después.
        </p>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3 className="concept-title">Resumen</h3>
        <div className="concept-body">
          <ul>
            <li>Las ondas electromagnéticas son perturbaciones de campos eléctricos y magnéticos</li>
            <li>Relación fundamental: v = fλ (velocidad = frecuencia × longitud de onda)</li>
            <li>En el vacío, todas viajan a la velocidad de la luz c = 3×10⁸ m/s</li>
            <li>Los campos E y B están relacionados: E = cB</li>
            <li>La intensidad se calcula con el vector de Poynting: S = EB/μ₀</li>
            <li>En medios materiales, la velocidad disminuye según el índice de refracción: v = c/n</li>
            <li>El espectro abarca desde ondas de radio hasta rayos gamma</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OndasTheory;
