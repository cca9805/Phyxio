import { TheorySection, Concept, Formula } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Fuentes de Campo Magnético",
  descripcion: "Campo magnético generado por corrientes: alambre, espira, solenoide y toroide",
  isTheoryOnly: true,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const FuentesCampoTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Fuentes de Campo Magnético">
        <Concept title="Campo de un Alambre Recto Infinito">
          <p>Para un alambre conductor largo y rectilíneo que transporta una corriente (I), la magnitud del campo magnético (B) a una distancia perpendicular (r) del alambre se calcula con la Ley de Ampère.</p>
          <Formula 
            expression={String.raw`B = \frac{\mu_0 I}{2 \pi r}`}
            calculatorId="campo_alambre_recto"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Corriente (I)", expression: String.raw`I = \frac{B \cdot 2 \pi r}{\mu_0}` },
              { description: "Calcular Distancia (r)", expression: String.raw`r = \frac{\mu_0 I}{2 \pi B}` }
            ]}
          />
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>B = Campo magnético (T - Teslas)</li>
            <li>μ₀ = Permeabilidad del vacío (4π × 10⁻⁷ T·m/A)</li>
            <li>I = Corriente eléctrica (A - Amperios)</li>
            <li>r = Distancia perpendicular al alambre (m - metros)</li>
          </ul>
        </Concept>
        <Concept title="Campo en el Centro de una Espira Circular">
          <p>Para una espira circular de radio (R) por la que circula una corriente (I), el campo magnético (B) en su centro es perpendicular al plano de la espira.</p>
          <Formula 
            expression={String.raw`B = \frac{\mu_0 I}{2 R}`}
            calculatorId="campo_espira_circular"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Corriente (I)", expression: String.raw`I = \frac{B \cdot 2 R}{\mu_0}` },
              { description: "Calcular Radio (R)", expression: String.raw`R = \frac{\mu_0 I}{2 B}` }
            ]}
          />
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>B = Campo magnético en el centro (T - Teslas)</li>
            <li>μ₀ = Permeabilidad del vacío (4π × 10⁻⁷ T·m/A)</li>
            <li>I = Corriente eléctrica (A - Amperios)</li>
            <li>R = Radio de la espira (m - metros)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Dispositivos Electromagnéticos">
        <Concept title="Campo en un Solenoide Ideal">
          <p>Un solenoide es una bobina larga y cilíndrica. Para un solenoide ideal con (n) vueltas por unidad de longitud y una corriente (I), el campo magnético (B) en su interior es uniforme y paralelo al eje.</p>
          <Formula 
            expression={String.raw`B = \mu_0 n I`}
            calculatorId="campo_solenoide"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Densidad de Vueltas (n)", expression: String.raw`n = \frac{B}{\mu_0 I}` },
              { description: "Calcular Corriente (I)", expression: String.raw`I = \frac{B}{\mu_0 n}` }
            ]}
          />
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>B = Campo magnético interior (T - Teslas)</li>
            <li>μ₀ = Permeabilidad del vacío (4π × 10⁻⁷ T·m/A)</li>
            <li>n = Densidad de vueltas (vueltas/metro)</li>
            <li>I = Corriente eléctrica (A - Amperios)</li>
          </ul>
        </Concept>
        <Concept title="Campo en un Toroide">
          <p>Un toroide es un solenoide curvado en forma de donut. El campo magnético (B) en su interior a una distancia (r) del centro depende del número total de vueltas (N) y la corriente (I).</p>
          <Formula 
            expression={String.raw`B = \frac{\mu_0 N I}{2 \pi r}`}
            calculatorId="campo_toroide"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Nº de Vueltas (N)", expression: String.raw`N = \frac{B \cdot 2 \pi r}{\mu_0 I}` },
              { description: "Calcular Corriente (I)", expression: String.raw`I = \frac{B \cdot 2 \pi r}{\mu_0 N}` },
              { description: "Calcular Radio (r)", expression: String.raw`r = \frac{\mu_0 N I}{2 \pi B}` }
            ]}
          />
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>B = Campo magnético interior (T - Teslas)</li>
            <li>μ₀ = Permeabilidad del vacío (4π × 10⁻⁷ T·m/A)</li>
            <li>N = Número total de vueltas (adimensional)</li>
            <li>I = Corriente eléctrica (A - Amperios)</li>
            <li>r = Distancia desde el centro del toroide (m - metros)</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen - Fuentes de Campo Magnético</h3>
        <ul>
          <li>Alambre recto infinito: B = μ₀I/(2πr)</li>
          <li>Centro de espira circular: B = μ₀I/(2R)</li>
          <li>Interior de solenoide: B = μ₀nI (campo uniforme)</li>
          <li>Interior de toroide: B = μ₀NI/(2πr)</li>
          <li>μ₀ = 4π × 10⁻⁷ T·m/A (permeabilidad del vacío)</li>
          <li>El campo magnético es generado por corrientes eléctricas</li>
        </ul>
      </div>
    </>
  );
};

export default FuentesCampoTheory;
