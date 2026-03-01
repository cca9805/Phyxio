import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as friccionDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Fricción",
  descripcion: "Fuerza de rozamiento estática y cinética",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const FriccionTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a la Fuerza de Fricción">
        <p>
          La fuerza de fricción o fuerza de rozamiento es una fuerza que se opone al movimiento (o al intento de movimiento) entre dos superficies en contacto. Es una fuerza fundamental en nuestra vida diaria: nos permite caminar, frenar un coche y sujetar objetos. Sin embargo, también puede ser una fuente de pérdida de energía.
        </p>
        <Important>
          <p>La fricción siempre actúa en dirección paralela a las superficies en contacto y en sentido opuesto al movimiento relativo o al intento de movimiento.</p>
        </Important>
      </TheorySection>

      <TheorySection title="Tipos de Fuerza de Fricción">
        <p>
          Existen principalmente dos tipos de fuerza de fricción, dependiendo de si los objetos están en movimiento o no.
        </p>
        <Concept title="1. Fricción Estática (fs)">
          <p>Es la fuerza que se opone al inicio del deslizamiento. Aumenta para igualar la fuerza que se aplica hasta alcanzar un valor máximo. Mientras el objeto no se mueva, la fuerza de fricción estática es igual y opuesta a la fuerza aplicada.</p>
          <Formula expression={String.raw`F_{aplicada} = f_s`} />
          <p>La fuerza máxima que la fricción estática puede ejercer antes de que el objeto empiece a moverse se calcula con:</p>
          <Formula
            expression={String.raw`f_{s, \text{max}} = \mu_s \cdot N`}
            calculatorId="static-friction"
            definitions={friccionDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Coeficiente Estático", expression: String.raw`\mu_s = \frac{f_{s, \text{max}}}{N}` },
              { description: "Calcular Fuerza Normal", expression: String.raw`N = \frac{f_{s, \text{max}}}{\mu_s}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>f_s,max = Fuerza de fricción estática máxima (N)</li>
            <li>μ_s = Coeficiente de fricción estática (adimensional)</li>
            <li>N = Fuerza normal (N)</li>
          </ul>
           <Example>
            <p>Al empujar suavemente un mueble pesado, este no se mueve porque la fricción estática iguala tu empuje. Si empujas con más fuerza, la fricción estática aumenta hasta su límite. Si superas ese límite, el mueble se moverá.</p>
          </Example>
        </Concept>
        
        <Concept title="2. Fricción Cinética (fk)">
          <p>También llamada fricción dinámica, es la fuerza que se opone al movimiento de un objeto que ya está deslizando sobre una superficie. Generalmente, esta fuerza es de magnitud constante y menor que la fricción estática máxima.</p>
           <Important>
            <p>Es más fácil mantener un objeto en movimiento que empezar a moverlo desde el reposo. Esto se debe a que, para los mismos materiales, μk menor que μs.</p>
           </Important>
          <Formula
            expression={String.raw`f_k = \mu_k \cdot N`}
            calculatorId="kinetic-friction"
            definitions={friccionDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Coeficiente Cinético", expression: String.raw`\mu_k = \frac{f_k}{N}` },
              { description: "Calcular Fuerza Normal", expression: String.raw`N = \frac{f_k}{\mu_k}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>f_k = Fuerza de fricción cinética (N)</li>
            <li>μ_k = Coeficiente de fricción cinética (adimensional)</li>
            <li>N = Fuerza normal (N)</li>
          </ul>
        </Concept>
      </TheorySection>

       <TheorySection title="Fricción en un Plano Inclinado">
        <p>
           En un plano inclinado, la fuerza de fricción se opone a la componente del peso que tira del objeto hacia abajo del plano (F_paralela = mg × sin(θ)).
        </p>
        <Concept title="Condición de Deslizamiento Inminente">
          <p>Un objeto está a punto de deslizar cuando la componente paralela del peso es igual a la fuerza de fricción estática máxima.</p>
          <Formula expression={String.raw`mg \sin(\theta) = \mu_s N`} />
          <p>Como la Fuerza Normal en un plano inclinado es N = mg × cos(θ), podemos simplificar la ecuación para encontrar el ángulo crítico de reposo:</p>
          <Formula expression={String.raw`\mu_s = \tan(\theta)`} />
          <Example>
            <p>Si colocas una moneda sobre una tabla y la inclinas lentamente, la moneda empezará a deslizar en el ángulo exacto en que la tangente de ese ángulo es igual al coeficiente de fricción estática entre la moneda y la tabla.</p>
          </Example>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🚗 Neumáticos y seguridad vial</h3>
          <p>
            Los neumáticos están diseñados para maximizar la fricción con el asfalto. Los dibujos (surcos) evacuan el agua para mantener contacto directo. En seco, un neumático de coche tiene μ ≈ 0.7-1.0. En mojado, puede bajar a μ ≈ 0.4-0.6. Los neumáticos de carreras "slick" (lisos) tienen μ ≈ 1.5 en seco, pero son peligrosos en mojado. La distancia de frenado es inversamente proporcional al coeficiente de fricción.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>👟 Calzado deportivo</h3>
          <p>
            Las suelas de zapatillas están diseñadas para optimizar la fricción según el deporte. Las zapatillas de baloncesto tienen suelas planas de goma para máxima fricción en canchas (μ ≈ 0.8-1.0). Las de fútbol tienen tacos para penetrar el césped y aumentar fricción. Las de escalada usan goma especial con μ ≈ 1.2-1.5 en roca. Sin suficiente fricción, los atletas no podrían acelerar, frenar o cambiar de dirección.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🛑 Sistemas de frenado ABS</h3>
          <p>
            El sistema ABS (Anti-lock Braking System) evita que las ruedas se bloqueen al frenar. Una rueda bloqueada tiene fricción cinética (menor) en lugar de estática (mayor). El ABS pulsa los frenos rápidamente para mantener las ruedas al borde del deslizamiento, donde la fricción estática es máxima. Esto reduce la distancia de frenado hasta un 20% y mantiene el control direccional.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏔️ Escalada y equipamiento</h3>
          <p>
            Los escaladores dependen completamente de la fricción. Las manos en magnesio aumentan fricción eliminando humedad. Los pies en zapatillas de goma especial se adhieren a la roca por fricción. Las cuerdas funcionan por fricción en los mosquetones. Los dispositivos de aseguramiento usan fricción para detener caídas. Sin fricción, la escalada sería imposible.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏭 Lubricación industrial</h3>
          <p>
            En maquinaria, la fricción causa desgaste y pérdida de energía. Los lubricantes (aceites, grasas) reducen el coeficiente de fricción de μ ≈ 0.3-0.5 (metal-metal seco) a μ ≈ 0.05-0.1 (metal-metal lubricado). Esto reduce el calor generado, el desgaste y el consumo de energía. Los motores modernos usan aceites sintéticos que mantienen baja fricción incluso a altas temperaturas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎿 Deportes de invierno</h3>
          <p>
            El esquí y el patinaje sobre hielo funcionan porque el hielo tiene muy baja fricción (μ ≈ 0.02-0.05). La presión de los esquís o patines derrite una fina capa de hielo, creando una película de agua que actúa como lubricante. Los esquiadores enceran sus esquís para reducir aún más la fricción. Sin esta baja fricción, estos deportes no existirían.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Entendiendo la fricción
        </h2>
        
        <div className="theory-subsection">
          <h3>Leonardo da Vinci (1452-1519): Los primeros estudios</h3>
          <p>
            Leonardo da Vinci fue el primero en estudiar sistemáticamente la fricción. En sus cuadernos, observó que la fricción es proporcional a la carga (fuerza normal) e independiente del área de contacto. También notó que la fricción cinética es menor que la estática. Aunque no publicó sus descubrimientos, sus observaciones fueron notablemente precisas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Guillaume Amontons (1663-1705): Las leyes de la fricción</h3>
          <p>
            Amontons redescubrió independientemente las observaciones de Leonardo y las formalizó en dos leyes: (1) La fricción es proporcional a la carga normal, y (2) La fricción es independiente del área de contacto aparente. Estas leyes, publicadas en 1699, fueron fundamentales para la ingeniería de máquinas durante la Revolución Industrial.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Charles-Augustin de Coulomb (1736-1806): El coeficiente de fricción</h3>
          <p>
            Coulomb realizó experimentos extensos sobre fricción y formuló la ley que lleva su nombre: f = μN. Introdujo el concepto del coeficiente de fricción (μ) como una propiedad de los materiales en contacto. También distinguió claramente entre fricción estática y cinética, observando que μ_estática mayor que μ_cinética. Sus trabajos se publicaron en 1781.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Siglo XX: Comprensión microscópica</h3>
          <p>
            En el siglo XX, con microscopios electrónicos y teoría atómica, se entendió que la fricción surge de interacciones electromagnéticas entre átomos de las superficies. Las superficies "lisas" son en realidad rugosas a escala microscópica. La fricción viene de la deformación de estas asperezas y de enlaces químicos temporales entre superficies. Esta comprensión permitió desarrollar lubricantes y materiales de baja fricción.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>🧊 El misterio del hielo resbaladizo</h3>
          <p>
            Durante siglos se creyó que el hielo es resbaladizo porque la presión de los patines lo derrite. Pero en 2018, investigadores descubrieron que el hielo tiene una capa cuasi-líquida en su superficie incluso sin presión, causada por vibraciones moleculares. Esta capa existe hasta -30°C y es la verdadera razón de la baja fricción del hielo. El misterio tardó más de 150 años en resolverse.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦎 Los geckos desafían la gravedad</h3>
          <p>
            Los geckos pueden caminar por paredes y techos gracias a fuerzas de Van der Waals, no fricción tradicional. Sus patas tienen millones de pelos microscópicos (setae) que crean contacto íntimo con superficies. Un gecko puede soportar su peso con un solo dedo. Pueden "pegar" y "despegar" sus patas 15 veces por segundo. Esta "fricción molecular" inspiró adhesivos reutilizables.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏎️ La Fórmula 1 y la fricción extrema</h3>
          <p>
            Los neumáticos de F1 pueden generar fuerzas de fricción de hasta 3.5 G en curvas. Esto significa que un coche de 800 kg experimenta fuerzas laterales de 2,800 kg. Los neumáticos se calientan a 100°C para maximizar fricción. Duran solo 100-200 km porque el desgaste por fricción es enorme. Un juego de neumáticos puede costar 2,000 euros.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 Fricción en el espacio</h3>
          <p>
            En el vacío del espacio, no hay fricción del aire, pero sí fricción entre piezas mecánicas. Sin atmósfera, los lubricantes se evaporan. Los satélites usan lubricantes sólidos (grafito, disulfuro de molibdeno) o recubrimientos especiales. Curiosamente, en el vacío, dos metales limpios pueden "soldarse en frío" por fricción si se tocan, un problema serio para mecanismos espaciales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎸 La fricción hace música</h3>
          <p>
            Los instrumentos de cuerda frotada (violín, violonchelo) producen sonido por fricción. El arco, cubierto de resina, se adhiere a la cuerda por fricción estática, la tira, y luego se suelta (fricción cinética). Este ciclo "stick-slip" ocurre cientos de veces por segundo, haciendo vibrar la cuerda. Sin fricción, estos instrumentos no podrían existir.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏔️ El récord de fricción más baja</h3>
          <p>
            El material con menor fricción conocido es el grafeno sobre grafeno con orientación específica, con μ ≈ 0.001. Es 100 veces más resbaladizo que el teflón (μ ≈ 0.1). En el otro extremo, el caucho sobre asfalto seco puede alcanzar μ ≈ 1.5. Esta diferencia de 1,500 veces muestra el enorme rango de fricción entre materiales.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <p>
          La fricción es una fuerza que se opone al movimiento entre superficies en contacto. Existen dos tipos principales: fricción estática (f_s,max = μ_s × N), que se opone al inicio del movimiento, y fricción cinética (f_k = μ_k × N), que se opone al movimiento en curso.
        </p>
        <p>
          El coeficiente de fricción estática es siempre mayor que el cinético (μ_s mayor que μ_k), por eso es más difícil empezar a mover un objeto que mantenerlo en movimiento. La fricción depende de la fuerza normal y de los materiales en contacto, pero es independiente del área de contacto aparente.
        </p>
        <p>
          La fricción es esencial para la vida cotidiana: permite caminar, frenar vehículos y sujetar objetos. En ingeniería, se busca maximizarla (neumáticos, frenos) o minimizarla (lubricación, rodamientos) según la aplicación. Entender la fricción es fundamental para diseñar sistemas mecánicos eficientes y seguros.
        </p>
      </div>
    </>
  );
};

export default FriccionTheory;
