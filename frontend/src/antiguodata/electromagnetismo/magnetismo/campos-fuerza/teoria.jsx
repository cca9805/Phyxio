import { TheorySection, Concept, Formula } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Campos y Fuerza Magnética",
  descripcion: "Fuerza de Lorentz, movimiento circular y momento dipolar magnético",
  isTheoryOnly: true,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CamposFuerzaTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Fuerza de Lorentz sobre una carga">
        <Concept title="Fuerza de Lorentz">
          <p>Una carga eléctrica q que se mueve con una velocidad v dentro de un campo magnético B experimenta una fuerza, conocida como Fuerza de Lorentz. Esta fuerza es siempre perpendicular tanto a la velocidad como al campo magnético.</p>
          <Formula 
            expression={String.raw`F = |q| v B \sin(\theta)`}
            calculatorId="fuerza_lorentz_carga"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Carga (|q|)", expression: String.raw`|q| = \frac{F}{v B \sin(\theta)}` },
              { description: "Calcular Velocidad (v)", expression: String.raw`v = \frac{F}{|q| B \sin(\theta)}` },
              { description: "Calcular Campo (B)", expression: String.raw`B = \frac{F}{|q| v \sin(\theta)}` }
            ]}
          />
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>F = Fuerza de Lorentz (N - Newtons)</li>
            <li>|q| = Magnitud de la carga eléctrica (C - Culombios)</li>
            <li>v = Velocidad de la carga (m/s)</li>
            <li>B = Campo magnético (T - Teslas)</li>
            <li>θ = Ángulo entre la velocidad y el campo magnético (grados o radianes)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Fuerza sobre un conductor con corriente">
        <Concept title="Fuerza sobre un Conductor">
          <p>Un conductor rectilíneo de longitud L por el que circula una corriente I también experimenta una fuerza cuando se encuentra en un campo magnético B.</p>
          <Formula 
            expression={String.raw`F = I L B \sin(\theta)`}
            calculatorId="fuerza_lorentz_conductor"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Corriente (I)", expression: String.raw`I = \frac{F}{L B \sin(\theta)}` },
              { description: "Calcular Longitud (L)", expression: String.raw`L = \frac{F}{I B \sin(\theta)}` },
              { description: "Calcular Campo (B)", expression: String.raw`B = \frac{F}{I L \sin(\theta)}` }
            ]}
          />
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>F = Fuerza magnética sobre el conductor (N - Newtons)</li>
            <li>I = Corriente eléctrica (A - Amperios)</li>
            <li>L = Longitud del conductor (m - metros)</li>
            <li>B = Campo magnético (T - Teslas)</li>
            <li>θ = Ángulo entre el conductor y el campo magnético (grados o radianes)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Movimiento y Energía">
        <Concept title="Radio de la Trayectoria Circular">
          <p>Si una partícula cargada entra perpendicularmente a un campo magnético uniforme, la fuerza de Lorentz actúa como una fuerza centrípeta, obligando a la partícula a seguir una trayectoria circular.</p>
          <Formula 
            expression={String.raw`r = \frac{m v}{|q| B}`}
            calculatorId="movimiento_circular_magnetico"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Masa (m)", expression: String.raw`m = \frac{r |q| B}{v}` },
              { description: "Calcular Velocidad (v)", expression: String.raw`v = \frac{r |q| B}{m}` },
              { description: "Calcular Carga (|q|)", expression: String.raw`|q| = \frac{m v}{r B}` },
              { description: "Calcular Campo (B)", expression: String.raw`B = \frac{m v}{r |q|}` }
            ]}
          />
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>r = Radio de la trayectoria circular (m - metros)</li>
            <li>m = Masa de la partícula (kg - kilogramos)</li>
            <li>v = Velocidad de la partícula (m/s)</li>
            <li>|q| = Magnitud de la carga eléctrica (C - Culombios)</li>
            <li>B = Campo magnético (T - Teslas)</li>
          </ul>
        </Concept>
        <Concept title="Momento Dipolar Magnético">
          <p>El momento dipolar magnético (μ) es una medida de la tendencia de una espira a alinearse con un campo magnético externo. Depende del número de vueltas (N), la corriente (I) y el área (A) de la espira.</p>
          <Formula 
            expression={String.raw`\mu = N I A`}
            calculatorId="momento_dipolar_magnetico"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Nº de Vueltas (N)", expression: String.raw`N = \frac{\mu}{I A}` },
              { description: "Calcular Corriente (I)", expression: String.raw`I = \frac{\mu}{N A}` },
              { description: "Calcular Área (A)", expression: String.raw`A = \frac{\mu}{N I}` }
            ]}
          />
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>μ = Momento dipolar magnético (A·m²)</li>
            <li>N = Número de vueltas de la espira (adimensional)</li>
            <li>I = Corriente eléctrica (A - Amperios)</li>
            <li>A = Área de la espira (m² - metros cuadrados)</li>
          </ul>
        </Concept>
        <Concept title="Torque Magnético">
          <p>El torque (τ) que un campo B ejerce sobre la espira tiende a alinear el momento dipolar con el campo.</p>
          <Formula 
            expression={String.raw`\tau = \mu B \sin(\theta)`}
            calculatorId="torque_magnetico"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Momento Dipolar (μ)", expression: String.raw`\mu = \frac{\tau}{B \sin(\theta)}` },
              { description: "Calcular Campo (B)", expression: String.raw`B = \frac{\tau}{\mu \sin(\theta)}` }
            ]}
          />
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>τ = Torque magnético (N·m)</li>
            <li>μ = Momento dipolar magnético (A·m²)</li>
            <li>B = Campo magnético (T - Teslas)</li>
            <li>θ = Ángulo entre el momento dipolar y el campo magnético (grados o radianes)</li>
          </ul>
        </Concept>
        <Concept title="Energía Potencial Magnética">
          <p>La energía potencial (U) de la espira en el campo magnético depende de su orientación. Es mínima cuando el momento dipolar está alineado con el campo.</p>
          <Formula 
            expression={String.raw`U = -\mu B \cos(\theta)`}
            calculatorId="energia_potencial_magnetica"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Momento Dipolar (μ)", expression: String.raw`\mu = -\frac{U}{B \cos(\theta)}` },
              { description: "Calcular Campo (B)", expression: String.raw`B = -\frac{U}{\mu \cos(\theta)}` }
            ]}
          />
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>U = Energía potencial magnética (J - Joules)</li>
            <li>μ = Momento dipolar magnético (A·m²)</li>
            <li>B = Campo magnético (T - Teslas)</li>
            <li>θ = Ángulo entre el momento dipolar y el campo magnético (grados o radianes)</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen - Campos y Fuerza Magnética</h3>
        <ul>
          <li>Fuerza de Lorentz sobre carga: F = |q|vBsin(θ)</li>
          <li>Fuerza sobre conductor: F = ILBsin(θ)</li>
          <li>Radio de trayectoria circular: r = mv/(|q|B)</li>
          <li>Momento dipolar magnético: μ = NIA</li>
          <li>Torque magnético: τ = μBsin(θ)</li>
          <li>Energía potencial magnética: U = -μBcos(θ)</li>
          <li>La fuerza magnética es siempre perpendicular a la velocidad y al campo</li>
        </ul>
      </div>
    </>
  );
};

export default CamposFuerzaTheory;
