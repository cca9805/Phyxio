import React from 'react';
import { TheorySection, Concept, Formula, Important, Example } from '../../../../../../components/TheoryV2';
import { definitions as circuitosSerieDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Circuitos en Serie",
  descripcion: "Características y análisis de circuitos eléctricos en serie",
  categoria: "electromagnetismo",
  subcategoria: "electricidad",
  tema: "circuitos-basicos",
  subtema: "circuitos-serie",
  icono: "🔗",
  palette: "yellow",
  educationLevel: "ESO",
  prerequisites: ["corriente-ohm"],
  related: ["circuitos-paralelo", "circuitos-mixtos"],
  levels: ['ESO']
};

const CircuitosSerie = ({ exercises }) => {
  return (
    <>
      {/* Introducción */}
      <Concept 
        title="¿Qué es un circuito en serie?" 
        color="blue"
        icon="🔄"
      >
        <p>
          Un <strong>circuito en serie</strong> es aquel en el que los componentes 
          eléctricos (bombillas, resistencias, etc.) están conectados uno detrás 
          de otro, formando un <strong>único camino</strong> para la corriente eléctrica.
        </p>
        <p>
          Imagina una fila de personas tomadas de la mano: si una persona suelta 
          la mano, se rompe toda la cadena. Lo mismo pasa en un circuito en serie: 
          si un componente falla, todo el circuito deja de funcionar.
        </p>
        <Important>
          <p>
            <strong>💡 Idea clave:</strong> En un circuito en serie, la corriente 
            eléctrica es la misma en todos los componentes, pero el voltaje se 
            reparte entre ellos.
          </p>
        </Important>
      </Concept>

      {/* Características */}
      <TheorySection title="Características de los Circuitos en Serie">
        <Concept title="1. Corriente Constante">
          <p>
            La corriente eléctrica es la misma en todos los puntos del circuito. 
            No importa dónde midas, siempre obtendrás el mismo valor.
          </p>
          <Formula 
            expression={String.raw`I_{total} = I_1 = I_2 = I_3 = \ldots`}
            calculatorId="circuitos_serie"
            definitions={circuitosSerieDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>I_total:</strong> Corriente total del circuito (A)</li>
            <li><strong>I_1, I_2, I_3:</strong> Corriente en cada componente (A)</li>
          </ul>
          
          <Example title="Ejemplo: Luces de Navidad antiguas" icon="🎄">
            <p>
              Las guirnaldas de luces de Navidad antiguas están conectadas en serie. 
              Si una bombilla se funde, se rompe el circuito y <strong>todas las demás 
              se apagan</strong> porque la corriente no puede circular.
            </p>
            <p>
              Por eso, cuando una luz se funde, hay que revisar todas las bombillas 
              una por una hasta encontrar la que está rota.
            </p>
          </Example>
        </Concept>

        <Concept title="2. Voltaje Repartido">
          <p>
            El voltaje total de la fuente (pila o batería) se <strong>reparte</strong> 
            entre todos los componentes del circuito. Cada componente "consume" 
            parte del voltaje.
          </p>
          <Formula 
            expression={String.raw`V_{total} = V_1 + V_2 + V_3 + \ldots`}
            calculatorId="circuitos_serie"
            definitions={circuitosSerieDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>V_total:</strong> Voltaje de la fuente (V)</li>
            <li><strong>V_1, V_2, V_3:</strong> Voltajes en cada componente (V)</li>
          </ul>

          <Example title="Ejemplo: Pilas en una linterna" icon="🔦">
            <p>
              Si pones dos pilas de 1.5 V en serie en una linterna, el voltaje 
              total es: V_total = 1.5 V + 1.5 V = <strong>3 V</strong>
            </p>
            <p>
              Este voltaje se reparte entre la bombilla y la resistencia interna 
              de las pilas.
            </p>
          </Example>
        </Concept>

        <Concept title="3. Resistencia Total">
          <p>
            La resistencia total del circuito es la <strong>suma</strong> de todas 
            las resistencias individuales. Es como si pusieras obstáculos uno detrás 
            de otro en el camino de la corriente.
          </p>
          <Formula 
            expression={String.raw`R_{total} = R_1 + R_2 + R_3 + \ldots`}
            calculatorId="circuitos_serie"
            definitions={circuitosSerieDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>R_total:</strong> Resistencia total (Ω)</li>
            <li><strong>R_1, R_2, R_3:</strong> Resistencias individuales (Ω)</li>
          </ul>
          
          <Important>
            <p>
              En un circuito en serie, la resistencia total siempre es 
              <strong> mayor</strong> que cualquiera de las resistencias individuales.
            </p>
          </Important>
        </Concept>

        <Concept title="4. Aplicando la Ley de Ohm">
          <p>
            Una vez que conocemos la resistencia total, podemos calcular la corriente 
            que circula por el circuito usando la Ley de Ohm:
          </p>
          <Formula 
            expression={String.raw`I = \frac{V_{total}}{R_{total}}`}
            calculatorId="circuitos_serie"
            definitions={circuitosSerieDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Voltaje Total", expression: String.raw`V_{total} = I \cdot R_{total}` },
              { description: "Calcular Resistencia Total", expression: String.raw`R_{total} = \frac{V_{total}}{I}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>I:</strong> Corriente del circuito (A)</li>
            <li><strong>V_total:</strong> Voltaje de la fuente (V)</li>
            <li><strong>R_total:</strong> Resistencia total (Ω)</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Ventajas y Desventajas */}
      <Concept 
        title="Ventajas y Desventajas" 
        color="orange"
        icon="⚖️"
      >
        <TheorySection title="Ventajas y Desventajas">
          <Concept title="✅ Ventajas" color="green">
            <ul>
              <li><strong>Simplicidad:</strong> Fácil de construir y entender</li>
              <li><strong>Ahorro de cable:</strong> Usa menos material conductor</li>
              <li><strong>Control conjunto:</strong> Todos los componentes se encienden/apagan juntos</li>
              <li><strong>Suma de voltajes:</strong> Útil para aumentar el voltaje (pilas en serie)</li>
            </ul>
          </Concept>
          <Concept title="❌ Desventajas" color="red">
            <ul>
              <li><strong>Fallo en cadena:</strong> Si un componente falla, todo se apaga</li>
              <li><strong>Menor brillo:</strong> Los componentes no funcionan a plena potencia</li>
              <li><strong>Sin control individual:</strong> No puedes encender solo uno</li>
              <li><strong>Mayor resistencia:</strong> Dificulta el paso de corriente</li>
            </ul>
          </Concept>
        </TheorySection>
      </Concept>

      {/* Aplicaciones */}
      <Concept 
        title="Aplicaciones en la vida diaria" 
        color="green"
        icon="🏠"
      >
        <p>
          Aunque los circuitos en serie tienen limitaciones, se usan en muchas 
          situaciones cotidianas:
        </p>
        
        <TheorySection title="Ejemplos de la vida diaria">
          <Example title="🎄 Luces de Navidad">
            <p><strong>Luces de Navidad:</strong> Algunas guirnaldas antiguas usan circuitos en serie (las modernas usan paralelo).</p>
          </Example>
          <Example title="🔦 Linternas">
            <p><strong>Linternas:</strong> Las pilas están conectadas en serie para sumar voltajes y dar más luz.</p>
          </Example>
          <Example title="🔋 Baterías de dispositivos">
            <p><strong>Baterías de dispositivos:</strong> Muchos aparatos usan varias pilas en serie (mandos, juguetes).</p>
          </Example>
          <Example title="🎮 Mandos de videojuegos">
            <p><strong>Mandos de videojuegos:</strong> Las pilas se colocan en serie para obtener el voltaje necesario.</p>
          </Example>
          <Example title="🚗 Luces de freno">
            <p><strong>Luces de freno:</strong> En algunos vehículos antiguos, las luces traseras están en serie.</p>
          </Example>
          <Example title="🔌 Interruptores de seguridad">
            <p><strong>Interruptores de seguridad:</strong> Se ponen en serie para que todos deban estar cerrados.</p>
          </Example>
        </TheorySection>
      </Concept>

      {/* Cómo construir un circuito en serie */}
      <Concept 
        title="Cómo construir un circuito en serie simple" 
        color="purple"
        icon="🔧"
      >
        <p>
          Puedes construir un circuito en serie básico con materiales sencillos:
        </p>
        
        <TheorySection title="Cómo construir un circuito en serie simple">
          <Important>
            <strong>Paso 1: Materiales necesarios</strong>
            <ul>
              <li>1 pila de 4.5V o 9V</li>
              <li>2 o 3 bombillas pequeñas (de linterna)</li>
              <li>Cables con pinzas de cocodrilo</li>
              <li>1 interruptor (opcional)</li>
            </ul>
          </Important>
          <Important>
            <strong>Paso 2: Conexión</strong>
            <ol>
              <li>Conecta un cable del polo positivo (+) de la pila a la primera bombilla</li>
              <li>Conecta la primera bombilla a la segunda bombilla</li>
              <li>Conecta la última bombilla al polo negativo (-) de la pila</li>
              <li>Si quieres, añade un interruptor en cualquier punto del circuito</li>
            </ol>
          </Important>
          <Important>
            <strong>Paso 3: Observa</strong>
            <ul>
              <li>Las bombillas brillan con menos intensidad que si estuvieran solas</li>
              <li>Si desenroscas una bombilla, todas se apagan</li>
              <li>La corriente es la misma en todas las bombillas</li>
            </ul>
          </Important>
        </TheorySection>

        <Important>
          <p>
            <strong>⚠️ Seguridad:</strong> Usa siempre pilas de bajo voltaje (máximo 9V) 
            para experimentos caseros. Nunca uses la corriente de la red eléctrica (230V).
          </p>
        </Important>
      </Concept>

      {/* Resumen */}
      <Concept 
        title="Resumen" 
        color="gray"
        icon="📝"
      >
        <ul>
          <li>En un circuito en serie, los componentes están conectados <strong>uno tras otro</strong></li>
          <li>La <strong>corriente es la misma</strong> en todos los componentes: I_total = I_1 = I_2 = I_3</li>
          <li>El <strong>voltaje se reparte</strong> entre los componentes: V_total = V_1 + V_2 + V_3</li>
          <li>La <strong>resistencia total</strong> es la suma: R_total = R_1 + R_2 + R_3</li>
          <li>Si un componente falla, <strong>todo el circuito se interrumpe</strong></li>
          <li>Se usa para <strong>sumar voltajes</strong> (pilas en serie) y en aplicaciones simples</li>
        </ul>

        <Important>
          <p>
            <strong>📚 Siguiente tema:</strong> Ahora aprenderemos sobre los 
            <strong> circuitos en paralelo</strong>, donde los componentes tienen 
            caminos independientes para la corriente y funcionan de forma muy diferente.
          </p>
        </Important>
      </Concept>
    </>
  );
};

export default CircuitosSerie;
