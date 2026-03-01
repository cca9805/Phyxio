import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Dispositivos Semiconductores",
  descripcion: "Diodos y transistores bipolares: ecuaciones y características",
  isTheoryOnly: true,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

const DispositivosSemiconductoresTeoria = ({ exercises }) => {
  return (
    <>
      <TheorySection title="El Diodo y la Unión P-N">
        <Concept title="Ecuación de Shockley">
          <p>
            Un diodo se forma al unir un semiconductor tipo P y uno tipo N. Actúa como un interruptor unidireccional para la corriente.
            La relación entre el voltaje (Vd) y la corriente (Id) en un diodo se describe por la Ecuación de Shockley.
          </p>
          <Formula
            expression={String.raw`I_D = I_S (e^{\frac{V_D}{n V_T}} - 1)`}
            calculatorId="diodo-shockley"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Voltaje del Diodo", expression: String.raw`V_D = n V_T \ln(\frac{I_D}{I_S} + 1)` },
              { description: "Corriente de Saturación", expression: String.raw`I_S = \frac{I_D}{e^{\frac{V_D}{n V_T}} - 1}` }
            ]}
          />
          
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>I_D = Corriente del diodo (A - Amperios)</li>
            <li>I_S = Corriente de saturación inversa (A)</li>
            <li>V_D = Voltaje en el diodo (V - Voltios)</li>
            <li>n = Factor de idealidad (adimensional, típicamente 1-2)</li>
            <li>V_T = Voltaje térmico ≈ 25.85 mV a 300K (V)</li>
            <li>e = Número de Euler (≈ 2.718)</li>
          </ul>
          
          <Important>
            El Voltaje Térmico (V_T) es una constante que depende de la temperatura, aproximadamente 25.85 mV a 300K. 
            El Factor de Idealidad (n) es un valor empírico, usualmente entre 1 y 2.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="El Transistor Bipolar (BJT)">
        <p>
          El BJT (Bipolar Junction Transistor) es un dispositivo de tres terminales (Emisor, Base, Colector) que actúa como un amplificador o interruptor controlado por corriente.
        </p>
        
        <Concept title="Ley de Corrientes del Transistor">
          <p>La corriente que entra a un transistor debe ser igual a la que sale. La corriente del emisor es la suma de las corrientes de base y colector.</p>
          <Formula
            expression={String.raw`I_E = I_B + I_C`}
            calculatorId="ley-corrientes-bjt"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Corriente de Base", expression: String.raw`I_B = I_E - I_C` },
              { description: "Corriente de Colector", expression: String.raw`I_C = I_E - I_B` }
            ]}
          />
          
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>I_E = Corriente del emisor (A - Amperios)</li>
            <li>I_B = Corriente de la base (A - Amperios)</li>
            <li>I_C = Corriente del colector (A - Amperios)</li>
          </ul>
        </Concept>

        <Concept title="Ganancia de Corriente Beta (β)">
          <p>Beta (β) es la ganancia de corriente en configuración de emisor común. Relaciona la corriente de colector (salida) con la de base (entrada). Es la principal medida de amplificación de un BJT.</p>
          <Formula
            expression={String.raw`\beta = \frac{I_C}{I_B}`}
            calculatorId="ganancia-beta"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Corriente de Colector", expression: String.raw`I_C = \beta \cdot I_B` },
              { description: "Corriente de Base", expression: String.raw`I_B = \frac{I_C}{\beta}` }
            ]}
          />
          
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>β = Ganancia de corriente beta (adimensional, típicamente 50-300)</li>
            <li>I_C = Corriente del colector (A - Amperios)</li>
            <li>I_B = Corriente de la base (A - Amperios)</li>
          </ul>
        </Concept>

        <Concept title="Ganancia de Corriente Alfa (α)">
          <p>Alfa (α) es la ganancia de corriente en configuración de base común. Relaciona la corriente de colector con la del emisor. Su valor siempre es ligeramente menor que 1.</p>
          <Formula
            expression={String.raw`\alpha = \frac{I_C}{I_E}`}
            calculatorId="ganancia-alfa"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Corriente de Colector", expression: String.raw`I_C = \alpha \cdot I_E` },
              { description: "Corriente de Emisor", expression: String.raw`I_E = \frac{I_C}{\alpha}` }
            ]}
          />
          
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>α = Ganancia de corriente alfa (adimensional, típicamente 0.95-0.99)</li>
            <li>I_C = Corriente del colector (A - Amperios)</li>
            <li>I_E = Corriente del emisor (A - Amperios)</li>
          </ul>
        </Concept>

        <Concept title="Relación entre Alfa y Beta">
          <p>Las ganancias α y β están intrínsecamente relacionadas. Conociendo una, se puede determinar la otra.</p>
          <Formula
            expression={String.raw`\beta = \frac{\alpha}{1 - \alpha}`}
            calculatorId="relacion-alfa-beta"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Convertir β a α", expression: String.raw`\alpha = \frac{\beta}{\beta + 1}` }
            ]}
          />
          
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>β = Ganancia de corriente beta (adimensional)</li>
            <li>α = Ganancia de corriente alfa (adimensional)</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen - Dispositivos Semiconductores</h3>
        <ul>
          <li>Diodo: unión P-N que actúa como interruptor unidireccional</li>
          <li>Ecuación de Shockley: I_D = I_S(e^(V_D/nV_T) - 1)</li>
          <li>BJT: transistor bipolar de tres terminales (Emisor, Base, Colector)</li>
          <li>Ley de corrientes: I_E = I_B + I_C</li>
          <li>Ganancia β (emisor común): β = I_C/I_B (típicamente 50-300)</li>
          <li>Ganancia α (base común): α = I_C/I_E (típicamente 0.95-0.99)</li>
          <li>Relación entre ganancias: β = α/(1-α) y α = β/(β+1)</li>
        </ul>
      </div>
    </>
  );
};

export default DispositivosSemiconductoresTeoria;
