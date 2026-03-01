import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Dispositivos Fotónicos",
  descripcion: "Dispositivos semiconductores que generan, detectan o controlan la luz",
  isTheoryOnly: true,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

const DispositivosFotonicosTeoria = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Dispositivos Fotónicos">
        <p>
          Los dispositivos fotónicos son componentes semiconductores diseñados para generar, detectar o controlar la luz (fotones). 
          Su funcionamiento se basa en la conversión de energía eléctrica en luz o viceversa, aprovechando las propiedades cuánticas de los materiales semiconductores.
        </p>
      </TheorySection>

      <TheorySection title="Principios Fundamentales">
        <Concept title="El Fotón y su Energía">
          <p>
            La partícula fundamental de la luz es el fotón. La energía de un fotón determina el color de la luz y es inversamente proporcional a su longitud de onda. 
            Esta relación es clave para entender el funcionamiento de los dispositivos fotónicos.
          </p>
          <Formula
            expression={String.raw`E = \frac{h \cdot c}{\lambda}`}
            calculatorId="energia-foton"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Longitud de Onda", expression: String.raw`\lambda = \frac{h \cdot c}{E}` }
            ]}
          />
          
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>E = Energía del fotón (J - Joules o eV - electronvoltios)</li>
            <li>h = Constante de Planck (6.626 × 10⁻³⁴ J·s)</li>
            <li>c = Velocidad de la luz (3 × 10⁸ m/s)</li>
            <li>λ = Longitud de onda (m - metros o nm - nanómetros)</li>
          </ul>
          
          <Important>
            Un gap de energía grande (E_g) en un material produce un fotón de alta energía (longitud de onda corta), como la luz azul o ultravioleta. 
            Un gap de energía pequeño produce un fotón de baja energía (longitud de onda larga), como la luz roja o infrarroja.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Dispositivos Emisores de Luz">
        <Concept title="Diodo Emisor de Luz (LED)">
          <p>
            Un LED (Light-Emitting Diode) es un diodo que emite luz de forma incoherente cuando se polariza directamente. 
            Este fenómeno se llama emisión espontánea: al aplicar un voltaje, los electrones se recombinan con huecos, liberando su energía en forma de fotones de manera aleatoria.
          </p>
          <p>
            El voltaje necesario para que un LED emita luz (voltaje directo, Vf) está directamente relacionado con la energía de la banda prohibida del material.
          </p>
          <Formula
            expression={String.raw`V_f \approx \frac{E}{q}`}
            calculatorId="voltaje-led"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Energía del Fotón", expression: String.raw`E \approx V_f \cdot q` }
            ]}
          />
          
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>V_f = Voltaje directo del LED (V - Voltios)</li>
            <li>E = Energía del fotón emitido (J - Joules o eV)</li>
            <li>q = Carga del electrón (1.602 × 10⁻¹⁹ C)</li>
          </ul>
        </Concept>
        <Concept title="Diodo Láser">
          <p>
            Un diodo láser también genera luz, pero de forma coherente, monocromática y direccional. Esto se logra mediante la emisión estimulada dentro de una cavidad óptica.
          </p>
          <p>
            Un fotón inicial estimula la emisión de más fotones idénticos en fase y dirección, creando un haz de luz amplificado y preciso. 
            Uno de los espejos de la cavidad es semitransparente para permitir la salida del haz láser.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Dispositivos Detectores de Luz">
        <Concept title="Fotodiodo">
          <p>
            Un fotodiodo opera de manera inversa a un LED. Convierte la energía lumínica (fotones) en una corriente eléctrica (fotocorriente). 
            Cuando un fotón con suficiente energía incide en el material, genera un par electrón-hueco, contribuyendo a la corriente.
          </p>
        </Concept>
        <Concept title="Responsividad">
          <p>
            La responsividad (R) mide la eficiencia con la que un fotodiodo convierte la potencia óptica incidente (luz) en fotocorriente eléctrica. Se expresa en Amperios por Vatio (A/W).
          </p>
          <Formula
            expression={String.raw`R = \frac{I_p}{P_{in}}`}
            calculatorId="responsividad-fotodiodo"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Fotocorriente", expression: String.raw`I_p = R \cdot P_{in}` },
              { description: "Potencia Óptica Incidente", expression: String.raw`P_{in} = \frac{I_p}{R}` }
            ]}
          />
          
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>R = Responsividad (A/W - Amperios por Vatio)</li>
            <li>I_p = Fotocorriente generada (A - Amperios)</li>
            <li>P_in = Potencia óptica incidente (W - Vatios)</li>
          </ul>
        </Concept>
        <Concept title="Eficiencia Cuántica (QE)">
          <p>
            La Eficiencia Cuántica (QE) es una medida más fundamental. Representa el porcentaje de fotones que inciden en el detector y que logran generar un par electrón-hueco (y por tanto, corriente).
          </p>
          <p>
            Una QE del 100% significaría que cada fotón incidente produce un electrón de corriente. Está directamente relacionada con la responsividad y la longitud de onda de la luz.
          </p>
          <Formula
            expression={String.raw`QE = R \cdot \frac{h \cdot c}{q \cdot \lambda}`}
            calculatorId="eficiencia-cuantica"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Responsividad", expression: String.raw`R = QE \cdot \frac{q \cdot \lambda}{h \cdot c}` },
              { description: "Longitud de Onda", expression: String.raw`\lambda = R \cdot \frac{h \cdot c}{QE \cdot q}` }
            ]}
          />
          
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>QE = Eficiencia cuántica (adimensional, 0 a 1 o 0% a 100%)</li>
            <li>R = Responsividad (A/W)</li>
            <li>h = Constante de Planck (6.626 × 10⁻³⁴ J·s)</li>
            <li>c = Velocidad de la luz (3 × 10⁸ m/s)</li>
            <li>q = Carga del electrón (1.602 × 10⁻¹⁹ C)</li>
            <li>λ = Longitud de onda de la luz (m)</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen - Dispositivos Fotónicos</h3>
        <ul>
          <li>Los dispositivos fotónicos convierten energía eléctrica en luz o viceversa</li>
          <li>Energía del fotón: E = h·c/λ (determina el color de la luz)</li>
          <li>LED: emite luz incoherente por emisión espontánea (V_f ≈ E/q)</li>
          <li>Diodo láser: emite luz coherente, monocromática y direccional</li>
          <li>Fotodiodo: convierte luz en corriente eléctrica (fotocorriente)</li>
          <li>Responsividad (R): eficiencia de conversión luz → corriente (A/W)</li>
          <li>Eficiencia cuántica (QE): porcentaje de fotones que generan corriente</li>
        </ul>
      </div>
    </>
  );
};

export default DispositivosFotonicosTeoria;
