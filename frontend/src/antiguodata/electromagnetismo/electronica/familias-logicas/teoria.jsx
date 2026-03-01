import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as familiasLogicasDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Familias Lógicas",
  descripcion: "Características de familias lógicas digitales: TTL y CMOS",
  isTheoryOnly: true,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

const FamiliasLogicasTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Características Clave de las Familias Lógicas">
        <Concept title="Márgenes de Ruido">
          <p>El margen de ruido cuantifica la inmunidad de una puerta lógica a las perturbaciones de voltaje. Un margen de ruido más alto indica un circuito más robusto y fiable, ya que puede tolerar mayores fluctuaciones de voltaje sin cambiar de estado incorrectamente.</p>
          <Formula 
            expression={String.raw`N_{MH} = V_{OH} - V_{IH}`}
            calculatorId="margen-de-ruido-alto"
            definitions={familiasLogicasDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Voltaje de Salida Mínimo en Alto", expression: String.raw`V_{OH} = N_{MH} + V_{IH}` },
              { description: "Voltaje de Entrada Mínimo en Alto", expression: String.raw`V_{IH} = V_{OH} - N_{MH}` }
            ]}
          />
          <p>El Margen de Ruido en Alto (N_MH) protege contra caídas de voltaje en el nivel '1'.</p>
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>N_MH = Margen de ruido en alto (V - Voltios)</li>
            <li>V_OH = Voltaje de salida mínimo en alto (V)</li>
            <li>V_IH = Voltaje de entrada mínimo en alto (V)</li>
          </ul>
          <Formula 
            expression={String.raw`N_{ML} = V_{IL} - V_{OL}`}
            calculatorId="margen-de-ruido-bajo"
            definitions={familiasLogicasDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Voltaje de Entrada Máximo en Bajo", expression: String.raw`V_{IL} = N_{ML} + V_{OL}` },
              { description: "Voltaje de Salida Máximo en Bajo", expression: String.raw`V_{OL} = V_{IL} - N_{ML}` }
            ]}
          />
          <p>El Margen de Ruido en Bajo (N_ML) protege contra picos de voltaje en el nivel '0'.</p>
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>N_ML = Margen de ruido en bajo (V - Voltios)</li>
            <li>V_IL = Voltaje de entrada máximo en bajo (V)</li>
            <li>V_OL = Voltaje de salida máximo en bajo (V)</li>
          </ul>
        </Concept>
        <Concept title="Disipación de Potencia">
          <p>La disipación de potencia (P_D) es la energía que consume un circuito integrado, la cual se libera en forma de calor. Es un factor crítico en el diseño de dispositivos, especialmente en aquellos con alta densidad de componentes o alimentados por baterías.</p>
          <Formula 
            expression={String.raw`P_D = V_{CC} \cdot I_{CC}`}
            calculatorId="disipacion-de-potencia"
            definitions={familiasLogicasDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Voltaje", expression: String.raw`V_{CC} = P_D / I_CC` },
              { description: "Calcular Corriente", expression: String.raw`I_CC = P_D / V_{CC}` }
            ]}
          />
          <p>V_CC es el voltaje de alimentación e I_CC es la corriente que fluye hacia el circuito. Una menor disipación es clave para la eficiencia energética y la gestión térmica.</p>
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>P_D = Potencia disipada (W - Vatios)</li>
            <li>V_CC = Voltaje de alimentación (V - Voltios)</li>
            <li>I_CC = Corriente de alimentación (A - Amperios)</li>
          </ul>
        </Concept>
        <Concept title="Retardo de Propagación">
          <p>El retardo de propagación (t_p) mide la velocidad de una puerta lógica. Es el tiempo que transcurre desde que cambia una entrada hasta que la salida responde a ese cambio. Un retardo menor implica una mayor velocidad de operación.</p>
          <Important>Este parámetro determina la frecuencia máxima a la que puede operar un circuito digital.</Important>
          <Formula 
            expression={String.raw`t_p = \frac{t_{PLH} + t_{PHL}}{2}`}
            calculatorId="retardo-de-propagacion"
            definitions={familiasLogicasDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Retardo Bajo a Alto", expression: String.raw`t_{PLH} = 2 * t_p - t_{PHL}` },
              { description: "Calcular Retardo Alto a Bajo", expression: String.raw`t_{PHL} = 2 * t_p - t_{PLH}` }
            ]}
          />
          <p>Se calcula como el promedio del retardo de subida (t_PLH, de bajo a alto) y el retardo de bajada (t_PHL, de alto a bajo).</p>
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>t_p = Retardo de propagación promedio (s - segundos o ns - nanosegundos)</li>
            <li>t_PLH = Retardo de propagación de bajo a alto (s o ns)</li>
            <li>t_PHL = Retardo de propagación de alto a bajo (s o ns)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Evolución de las Familias Lógicas">
        <Example title="TTL (Transistor-Transistor Logic)">
          <p>Fue la familia lógica dominante durante décadas. Introdujo el transistor multi-emisor y la salida *Totem-Pole*, mejorando la velocidad y el fan-out. Aunque ha sido reemplazada por CMOS en la mayoría de aplicaciones, sentó las bases de la electrónica digital moderna.</p>
        </Example>
        <Example title="CMOS (Complementary MOS)">
          <p>Es la tecnología predominante en la actualidad. Su principal ventaja es su consumo de potencia estático casi nulo, lo que la hace ideal para dispositivos de alta densidad y bajo consumo, como microprocesadores y memorias.</p>
          <p>Un inversor CMOS, el bloque fundamental, utiliza un par de transistores (PMOS y NMOS) de forma que nunca hay un camino directo entre la fuente de alimentación (VDD) y tierra en un estado estable. La corriente solo fluye durante las transiciones, minimizando el consumo de energía.</p>
        </Example>
      </TheorySection>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen - Familias Lógicas</h3>
        <ul>
          <li>Margen de ruido: inmunidad a perturbaciones de voltaje</li>
          <li>N_MH = V_OH - V_IH (protege nivel alto '1')</li>
          <li>N_ML = V_IL - V_OL (protege nivel bajo '0')</li>
          <li>Disipación de potencia: P_D = V_CC × I_CC (energía consumida)</li>
          <li>Retardo de propagación: t_p = (t_PLH + t_PHL)/2 (velocidad de operación)</li>
          <li>TTL: familia clásica con transistores bipolares</li>
          <li>CMOS: tecnología actual con consumo estático casi nulo</li>
        </ul>
      </div>
    </>
  );
};

export default FamiliasLogicasTheory;
