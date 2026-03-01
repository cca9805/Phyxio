import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Campos Eléctricos",
  descripcion: "Campo eléctrico, líneas de campo y principio de superposición",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CamposElectricosTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Definición de Campo Eléctrico">
        <p>
          El campo eléctrico es una región del espacio donde una carga eléctrica experimenta una fuerza. Se representa con la letra E y es una cantidad vectorial.
        </p>
        <Important>
          <p>"Una carga eléctrica no siente su propio campo, solo el de las demás cargas."</p>
        </Important>
        <Concept title="Relación entre Fuerza y Campo">
          <p>La fuerza F que experimenta una carga de prueba q en un campo E se define como:</p>
          <Formula
            expression={String.raw`E = \frac{F}{q}`}
            calculatorId="campo-electrico-fuerza"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Fuerza (F)", expression: String.raw`F = q \cdot E` },
              { description: "Calcular Carga (q)", expression: String.raw`q = \frac{F}{E}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>E: Campo eléctrico (N/C)</li>
            <li>F: Fuerza eléctrica (N)</li>
            <li>q: Carga de prueba (C)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Campo de una Carga Puntual">
        <p>
          Una carga puntual q crea un campo eléctrico radial a su alrededor. La magnitud de este campo a una distancia r se calcula con la Ley de Coulomb.
        </p>
        <Concept title="Cálculo del Campo Puntual">
          <p>La magnitud del campo es directamente proporcional a la carga e inversamente proporcional al cuadrado de la distancia.</p>
          <Formula
            expression={String.raw`E = k \frac{|q|}{r^2}`}
            calculatorId="campo-puntual"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Carga (|q|)", expression: String.raw`|q| = \frac{E \cdot r^2}{k}` },
              { description: "Calcular Distancia (r)", expression: String.raw`r = \sqrt{\frac{k \cdot |q|}{E}}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>E: Campo eléctrico (N/C)</li>
            <li>k: Constante de Coulomb (8.99×10⁹ N·m²/C²)</li>
            <li>q: Carga fuente (C)</li>
            <li>r: Distancia a la carga (m)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Dipolos Eléctricos">
        <Concept title="Momento Dipolar Eléctrico">
          <p>Un dipolo consiste en dos cargas de igual magnitud y signo opuesto separadas por una distancia d. El momento dipolar eléctrico (p) es una medida de esta separación de cargas.</p>
          <Formula
            expression={String.raw`p = q \cdot d`}
            calculatorId="momento-dipolar"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Carga (q)", expression: String.raw`q = \frac{p}{d}` },
              { description: "Calcular Distancia (d)", expression: String.raw`d = \frac{p}{q}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>p: Momento dipolar eléctrico (C·m)</li>
            <li>q: Magnitud de la carga (C)</li>
            <li>d: Distancia de separación entre cargas (m)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title={<><span role="img" aria-label="Aplicaciones">🌍</span> Aplicaciones en la vida real</>}>
        <Important><strong>📺 Pantallas y Televisores:</strong> Los televisores CRT y osciloscopios usan campos eléctricos para dirigir haces de electrones y crear imágenes.</Important>
        <Important><strong>⚡ Precipitadores Electrostáticos:</strong> Dispositivos industriales que usan campos eléctricos para limpiar gases y purificar aire.</Important>
        <Important><strong>🖨️ Impresoras Láser y Fotocopiadoras:</strong> Usan campos eléctricos para atraer tóner al papel en los lugares correctos.</Important>
        <Important><strong>🔬 Microscopios Electrónicos:</strong> Usan campos eléctricos para enfocar haces de electrones y obtener imágenes de alta resolución.</Important>
        <Important><strong>💧 Experimento de Millikan:</strong> Usó campos eléctricos para medir la carga del electrón en 1909.</Important>
        <Important><strong>🎨 Pintura Electrostática:</strong> Industria automotriz usa campos eléctricos para pintar coches de forma uniforme y eficiente.</Important>
        <Important><strong>⚡ Generadores Van de Graaff:</strong> Generan campos eléctricos enormes para experimentos y demostraciones.</Important>
        <Important><strong>💻 Transistores y Chips:</strong> Los transistores modernos usan campos eléctricos para controlar el flujo de electrones.</Important>
        <Important>💡 Conclusión: Los campos eléctricos son fundamentales en tecnología moderna, desde pantallas hasta chips de computadora. Entenderlos es clave para la física y la ingeniería.</Important>
      </TheorySection>

      <TheorySection title={<><span role="img" aria-label="Historia">📜</span> Historia: Descubriendo el campo eléctrico</>}>
        <Important><strong>⚡ Michael Faraday y el Concepto de Campo (1830s):</strong> Propuso que las cargas eléctricas crean un campo en el espacio que las rodea.</Important>
        <Important><strong>Innovación:</strong> Antes de Faraday, se pensaba que las fuerzas eléctricas actuaban a distancia instantáneamente. Faraday propuso que el espacio entre cargas tenía propiedades físicas reales.</Important>
        <Important><strong>Líneas de campo:</strong> Inventó el concepto de líneas de fuerza para visualizar cómo se propagan las fuerzas eléctricas.</Important>
        <Important><strong>📐 James Clerk Maxwell y las Ecuaciones (1860s):</strong> Formalizó matemáticamente el concepto de campo eléctrico de Faraday en sus ecuaciones.</Important>
        <Important><strong>Unificación:</strong> Maxwell demostró que electricidad, magnetismo y luz son manifestaciones del mismo fenómeno: campos electromagnéticos.</Important>
        <Important><strong>Predicción:</strong> Sus ecuaciones predijeron la existencia de ondas electromagnéticas antes de que fueran descubiertas.</Important>
        <Important><strong>💧 Robert Millikan y la Carga del Electrón (1909):</strong> Usó campos eléctricos para medir la carga del electrón con su experimento de la gota de aceite.</Important>
        <Important><strong>Descubrimiento:</strong> La carga siempre era múltiplo de 1.6 x 10^-19 C, demostrando que la carga está cuantizada.</Important>
        <Important><strong>⚛️ Modelo Atómico y Campos (1900-1930):</strong> El descubrimiento de la estructura atómica reveló que los átomos se mantienen unidos por campos eléctricos.</Important>
        <Important><strong>💻 Transistores y Electrónica (1947-presente):</strong> La invención del transistor demostró que los campos eléctricos podían controlar el flujo de electrones en semiconductores.</Important>
      </TheorySection>

      <TheorySection title={<><span role="img" aria-label="Anécdotas">✨</span> Anécdotas y curiosidades</>}>
        <Important><strong>⚡ Faraday: El genio autodidacta:</strong> Michael Faraday nunca fue a la universidad. Aprendió ciencia leyendo los libros que encuadernaba y llegó a ser uno de los físicos más influyentes.</Important>
        <Important><strong>💧 Millikan y las gotas rebeldes:</strong> El experimento de Millikan requería paciencia extrema y fue repetido miles de veces para obtener mediciones precisas.</Important>
        <Important><strong>🎪 Generadores Van de Graaff:</strong> Famosos por hacer que el pelo se erice. El generador más grande del mundo está en Boston y puede generar 2 millones de voltios.</Important>
        <Important><strong>📺 Los primeros televisores:</strong> Usaban campos eléctricos para "pintar" imágenes en la pantalla. El principio sigue siendo fundamental en tecnología.</Important>
        <Important><strong>🏭 Chimeneas limpias:</strong> Las centrales térmicas y fábricas usan campos eléctricos para limpiar sus emisiones, capturando más del 99% de las partículas.</Important>
        <Important><strong>🔬 Aceleradores de partículas:</strong> El LHC usa campos eléctricos para acelerar protones a casi la velocidad de la luz, permitiendo grandes descubrimientos.</Important>
        <Important><strong>💉 Electroforesis:</strong> Técnica de laboratorio que usa campos eléctricos para separar proteínas, ADN y otras moléculas.</Important>
        <Important><strong>📱 Pantallas Táctiles Capacitivas:</strong> Tu móvil detecta tu dedo usando cambios en el campo eléctrico.</Important>
        <Important>💡 Omnipresencia: Los campos eléctricos están en todas partes: desde tu móvil hasta los aceleradores de partículas más grandes del mundo. Son una de las herramientas más versátiles de la física y la tecnología.</Important>
      </TheorySection>

      <Important title="Resumen">
        <p>
          Los campos eléctricos son regiones del espacio donde las cargas experimentan fuerzas. Desde su conceptualización por Faraday en el siglo XIX hasta su aplicación en tecnología moderna, los campos eléctricos son fundamentales para entender la electricidad y el electromagnetismo.
        </p>
        <p>
          Las fórmulas principales permiten calcular la intensidad del campo desde la fuerza sobre una carga, el campo creado por cargas puntuales, y el momento dipolar de sistemas de dos cargas. Estas herramientas son esenciales en física, ingeniería eléctrica, y tecnología moderna.
        </p>
        <p>
          Aplicaciones prácticas incluyen televisores CRT, precipitadores electrostáticos, impresoras láser, microscopios electrónicos, y transistores. Los campos eléctricos son omnipresentes en nuestra vida cotidiana y en la investigación científica de vanguardia.
        </p>
      </Important>
    </>
  );
};

export default CamposElectricosTheory;
