import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as centroDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Centro de Masa y Centroide",
  descripcion: "Centroide, centro de masa, momento de inercia y teorema de Steiner",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CentroTeoria = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Centroide, Centro de Masa y Momento de Inercia">
        <p>
          En estática, entender la distribución geométrica de las formas es crucial para predecir su comportamiento bajo carga. Los conceptos de centroide, centro de masa y momento de inercia son fundamentales para el diseño y análisis de estructuras.
        </p>
        <p>
          El centroide es el "centro geométrico" de una figura, mientras que el centro de masa es el punto donde se concentra toda la masa. Para objetos homogéneos (densidad uniforme), ambos coinciden. El momento de inercia mide la resistencia a la flexión o torsión.
        </p>
      </TheorySection>

      <TheorySection title="Centroide y Centro de Masa">
        <p>
          El centroide es el centro geométrico de un área o volumen. Para un objeto con densidad uniforme, el centroide coincide con el centro de masa, que es el punto de equilibrio del objeto. Para formas compuestas, el centroide se calcula dividiendo la forma en áreas más simples.
        </p>
        <Concept title="Centroide de Formas Simples">
          <p>Para formas geométricas básicas, el centroide se ubica en un punto conocido, a menudo determinado por simetría.</p>
          <Formula 
            expression="C_{rectángulo} = (b/2, h/2)"
            calculatorId="centroide-rectangulo"
            definitions={centroDefinitions}
            exercises={exercises}
          />
          
          <p>Donde:</p>
          <ul>
            <li>C: Coordenadas del centroide (x, y)</li>
            <li>b: Base del rectángulo (m)</li>
            <li>h: Altura del rectángulo (m)</li>
          </ul>
          
          <Example>
            Un rectángulo de 4 m de base y 2 m de altura tiene su centroide en (2, 1), justo en el centro geométrico.
          </Example>
          
          <Formula 
            expression="C_{triángulo} = (b/3, h/3)"
            calculatorId="centroide-triangulo"
            definitions={centroDefinitions}
            exercises={exercises}
          />
          
          <p>Donde:</p>
          <ul>
            <li>C: Coordenadas del centroide (x, y)</li>
            <li>b: Base del triángulo (m)</li>
            <li>h: Altura del triángulo (m)</li>
          </ul>
          
          <Example>
            Un triángulo rectángulo con base 6 m y altura 3 m tiene su centroide a 1/3 de la altura desde la base: (2, 1).
          </Example>
        </Concept>
        <Concept title="Centroide de Formas Compuestas">
          <p>Para un área compuesta, el centroide general (X, Y) se calcula como la suma ponderada de los centroides de las áreas individuales (A_i) y sus coordenadas (x_i, y_i).</p>
          <Formula 
            expression={String.raw`X = \frac{\sum x_i A_i}{\sum A_i}`}
            calculatorId="centroide-compuesto-x"
            definitions={centroDefinitions}
            exercises={exercises}
          />
          
          <p>Donde:</p>
          <ul>
            <li>X: Coordenada X del centroide compuesto (m)</li>
            <li>x_i: Coordenada X del centroide de cada área individual (m)</li>
            <li>A_i: Área de cada forma individual (m²)</li>
          </ul>
          
          <Formula 
            expression={String.raw`Y = \frac{\sum y_i A_i}{\sum A_i}`}
            calculatorId="centroide-compuesto-y"
            definitions={centroDefinitions}
            exercises={exercises}
          />
          
          <p>Donde:</p>
          <ul>
            <li>Y: Coordenada Y del centroide compuesto (m)</li>
            <li>y_i: Coordenada Y del centroide de cada área individual (m)</li>
            <li>A_i: Área de cada forma individual (m²)</li>
          </ul>
          
          <Example>
            Una viga en forma de T se divide en dos rectángulos: el alma (vertical) y el ala (horizontal). 
            El centroide compuesto se calcula ponderando las áreas de cada parte por sus centroides individuales.
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Momento de Inercia de un Área">
        <p>
          El momento de inercia (I) es una propiedad geométrica que cuantifica la resistencia de una sección transversal a la flexión o a la torsión. Un mayor momento de inercia indica una mayor rigidez estructural. Se mide en unidades de longitud a la cuarta potencia (por ejemplo, m⁴).
        </p>
        <Important>
          <p>El momento de inercia depende crucialmente del eje respecto al cual se calcula.</p>
        </Important>
        <Concept title="Inercia para Formas Comunes (Ejes Centroidales)">
          <p>Momento de inercia para un rectángulo y un círculo con respecto a sus ejes que pasan por el centroide.</p>
          <Formula
            expression={String.raw`I_{x, rect} = \frac{b h^3}{12}`}
            calculatorId="inercia-rectangulo"
            definitions={centroDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Base", expression: String.raw`b = \frac{12 \cdot I_x}{h^3}` },
              { description: "Calcular Altura", expression: String.raw`h = \sqrt[3]{\frac{12 \cdot I_x}{b}}` },
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>I_x: Momento de inercia respecto al eje X centroidal (m⁴)</li>
            <li>b: Base del rectángulo (m)</li>
            <li>h: Altura del rectángulo (m)</li>
          </ul>
          
          <Example>
            Una viga rectangular de 0.2 m de base y 0.4 m de altura tiene I_x = (0.2 × 0.4³) / 12 = 0.00107 m⁴. 
            Si duplicamos la altura a 0.8 m, la inercia se multiplica por 8 (porque h³), llegando a 0.00853 m⁴.
          </Example>
          
          <Formula
            expression={String.raw`I_{círculo} = \frac{\pi r^4}{4}`}
            calculatorId="inercia-circulo"
            definitions={centroDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Radio", expression: String.raw`r = \sqrt[4]{\frac{4 \cdot I}{\pi}}` },
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>I: Momento de inercia del círculo (m⁴)</li>
            <li>r: Radio del círculo (m)</li>
            <li>π: Constante pi (≈ 3.14159)</li>
          </ul>
        </Concept>
        <Concept title="Teorema de Ejes Paralelos (Steiner)">
          <p>Este teorema es fundamental para calcular el momento de inercia de una forma respecto a un eje que no pasa por su centroide. Permite 'transferir' el momento de inercia a un eje paralelo.</p>
           <Important>
             <p>La inercia respecto a un eje cualquiera (I) es igual a la inercia respecto al eje centroidal paralelo (I_c) más el área (A) por el cuadrado de la distancia (d) entre ambos ejes.</p>
           </Important>
          <Formula
            expression={String.raw`I = I_c + A d^2`}
            calculatorId="teorema-steiner"
            definitions={centroDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Inercia Centroidal", expression: "I_c = I - A d^2" },
              { description: "Calcular Área", expression: String.raw`A = \frac{I - I_c}{d^2}` },
              { description: "Calcular Distancia", expression: String.raw`d = \sqrt{\frac{I - I_c}{A}}` },
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>I: Momento de inercia respecto al eje paralelo (m⁴)</li>
            <li>I_c: Momento de inercia respecto al eje centroidal (m⁴)</li>
            <li>A: Área de la sección transversal (m²)</li>
            <li>d: Distancia entre los ejes paralelos (m)</li>
          </ul>
          
          <Example>
            Un rectángulo de 0.1 m × 0.2 m tiene I_c = 6.67×10⁻⁵ m⁴ respecto a su eje centroidal. 
            Si calculamos la inercia respecto a un eje en su base (d = 0.1 m), obtenemos: 
            I = 6.67×10⁻⁵ + (0.02 × 0.1²) = 2.67×10⁻⁴ m⁴, cuatro veces mayor.
          </Example>
        </Concept>
      </TheorySection>

      <h2><span>🏗️</span> Aplicaciones Prácticas</h2>
      <div className="theory-applications-section">
        <div className="theory-subsection">
          <h3>🏗️ Diseño de Vigas y Perfiles Estructurales</h3>
          <p>
            Las vigas en I, H y T se diseñan para maximizar el momento de inercia con el mínimo material. 
            Concentran material lejos del eje neutro (centroide), aumentando la resistencia a la flexión. 
            Una viga en I puede ser 10 veces más rígida que una rectangular del mismo peso. Los rascacielos 
            usan perfiles con momentos de inercia optimizados para resistir vientos y terremotos.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🌉 Puentes y Estructuras de Gran Vano</h3>
          <p>
            El diseño de puentes requiere calcular el centroide de secciones compuestas (hormigón + acero). 
            El momento de inercia determina cuánto se deflectará el puente bajo carga. El puente Golden Gate 
            tiene vigas con momentos de inercia enormes para soportar su propio peso (más de 800,000 toneladas) 
            y las cargas del tráfico.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>✈️ Diseño Aeronáutico</h3>
          <p>
            Las alas de aviones se diseñan con perfiles que maximizan el momento de inercia para resistir 
            fuerzas de flexión durante el vuelo. El centro de masa del avión debe estar adelante del centro 
            de presión aerodinámica para estabilidad. Un Boeing 747 tiene su centro de masa calculado con 
            precisión de milímetros para garantizar vuelo seguro.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🚗 Industria Automotriz</h3>
          <p>
            El chasis de un automóvil se diseña calculando el centroide y momento de inercia de la estructura. 
            El centro de masa bajo mejora la estabilidad en curvas. Los autos deportivos tienen centros de masa 
            a solo 40 cm del suelo. Las barras antivuelco tienen alto momento de inercia para resistir torsión.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏋️ Equipamiento Deportivo</h3>
          <p>
            Los bates de béisbol, raquetas de tenis y palos de golf se diseñan controlando el centro de masa 
            y momento de inercia. Un bate con centro de masa más alejado del mango genera más potencia pero 
            es más difícil de controlar. Las raquetas modernas usan materiales compuestos para optimizar 
            la distribución de masa.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏢 Análisis Sísmico de Edificios</h3>
          <p>
            El centro de masa y centro de rigidez de un edificio deben coincidir para evitar torsión durante 
            terremotos. Si no coinciden, el edificio puede girar y colapsar. Los ingenieros calculan estos 
            centros para cada piso y ajustan la distribución de muros y columnas. El Burj Khalifa tiene su 
            centro de masa calculado con precisión extrema.
          </p>
        </div>
      </div>

      <h2><span>📜</span> Historia y Desarrollo</h2>
      <div className="theory-history-section">
        <div className="theory-subsection">
          <h3>🏛️ Antigüedad: Conceptos Intuitivos (250 a.C.)</h3>
          <p>
            Arquímedes (287-212 a.C.) fue el primero en estudiar el centro de gravedad sistemáticamente. 
            Demostró que el centro de gravedad de un triángulo está en la intersección de sus medianas, 
            a 1/3 de la altura desde la base. También estudió el equilibrio de palancas usando el concepto 
            de centro de masa.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔬 Renacimiento: Primeros Cálculos (1500-1700)</h3>
          <p>
            Leonardo da Vinci (1452-1519) estudió el centro de gravedad en sus diseños de máquinas y estructuras. 
            Galileo Galilei (1564-1642) analizó la resistencia de vigas y estableció que la resistencia depende 
            de la distribución de material (precursor del concepto de momento de inercia).
          </p>
        </div>
        <div className="theory-subsection">
          <h3>⚖️ Era Clásica: Formalización Matemática (1700-1850)</h3>
          <p>
            Leonhard Euler (1707-1783) desarrolló la teoría matemática del momento de inercia y su relación 
            con la resistencia a la flexión. Jakob Steiner (1796-1863) formuló su famoso teorema de ejes paralelos 
            en 1830, revolucionando el cálculo de momentos de inercia para formas compuestas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏗️ Revolución Industrial: Aplicaciones Estructurales (1850-1950)</h3>
          <p>
            La construcción de puentes y edificios de hierro y acero requirió cálculos precisos de momentos de inercia. 
            Se desarrollaron perfiles optimizados (vigas I, H, T) que maximizan la rigidez con mínimo peso. 
            Gustave Eiffel usó estos principios en la Torre Eiffel (1889), optimizando cada elemento estructural.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>💻 Era Moderna: Análisis Computacional (1950-presente)</h3>
          <p>
            El método de elementos finitos (FEM) permite calcular centroides y momentos de inercia de formas 
            arbitrariamente complejas. Software como AutoCAD, SolidWorks y ANSYS calculan automáticamente estas 
            propiedades. Los diseños modernos optimizan la distribución de material usando algoritmos genéticos 
            y topología computacional.
          </p>
        </div>
      </div>

      <h2><span>🎯</span> Anécdotas y Curiosidades</h2>
      <div className="theory-anecdotes-section">
        <div className="theory-subsection">
          <h3>🏛️ El Método de Arquímedes</h3>
          <p>
            Arquímedes encontró el centro de gravedad de figuras complejas usando un método ingenioso: 
            colgaba modelos de cartón de diferentes puntos y trazaba líneas verticales. La intersección 
            de estas líneas era el centro de gravedad. Este método experimental se usa aún hoy para objetos 
            de forma irregular.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🗼 La Torre Eiffel y su Centroide</h3>
          <p>
            La Torre Eiffel (324 m) tiene su centro de masa a solo 116 metros del suelo, muy bajo para su altura. 
            Esto le da estabilidad excepcional. Gustave Eiffel calculó que la presión en la base es de solo 
            4.5 kg/cm², menor que la de una persona sentada en una silla. La distribución de masa está 
            perfectamente optimizada.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>✈️ El Vuelo 232 de United Airlines (1989)</h3>
          <p>
            Un DC-10 perdió todos los sistemas hidráulicos y solo podía controlar el avión con los motores. 
            El piloto tuvo que compensar cambios en el centro de masa causados por el consumo de combustible 
            y movimiento de pasajeros. Logró un aterrizaje de emergencia salvando 185 de 296 personas, 
            un logro extraordinario de control del centro de masa.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏗️ El Edificio más Esbelto del Mundo</h3>
          <p>
            Steinway Tower en Nueva York tiene una relación altura/ancho de 24:1 (435 m de alto, 18 m de ancho). 
            Su momento de inercia está optimizado con un núcleo de hormigón armado y amortiguadores de masa 
            sintonizada de 800 toneladas en la cúspide. Puede oscilar hasta 1 metro en vientos fuertes sin 
            daño estructural.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🎯 El Equilibrio Imposible</h3>
          <p>
            Los artistas de equilibrio pueden balancear objetos en posiciones aparentemente imposibles 
            encontrando su centro de masa. El récord mundial es apilar 5,428 monedas en una sola moneda base, 
            logrando que el centro de masa combinado caiga exactamente sobre el punto de apoyo. Requiere 
            precisión de fracciones de milímetro.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🚀 El Centro de Masa de la ISS</h3>
          <p>
            La Estación Espacial Internacional (ISS) tiene su centro de masa calculado constantemente. 
            Cuando llegan naves de suministro o se mueven módulos, el centro de masa cambia y los giroscopios 
            deben reajustarse. Un error de cálculo podría hacer que la estación gire descontroladamente. 
            El centro de masa se monitorea con precisión de centímetros.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          El centroide es el centro geométrico de una figura, mientras que el centro de masa es el punto 
          de equilibrio considerando la distribución de masa. Para objetos homogéneos, ambos coinciden. 
          El centroide de formas compuestas se calcula como la suma ponderada de los centroides individuales 
          por sus áreas.
        </p>
        <p>
          El momento de inercia (I) mide la resistencia de una sección a la flexión o torsión. Depende 
          crucialmente del eje de referencia. Para formas simples como rectángulos (I = bh³/12) y círculos 
          (I = πr⁴/4), existen fórmulas directas. El Teorema de Steiner (I = I_c + Ad²) permite calcular 
          la inercia respecto a ejes paralelos al centroidal.
        </p>
        <p>
          Estos conceptos son fundamentales en ingeniería estructural, aeronáutica, automotriz y mecánica. 
          Desde los estudios de Arquímedes hasta los análisis computacionales modernos, el cálculo de 
          centroides y momentos de inercia permite diseñar estructuras eficientes, seguras y optimizadas.
        </p>
      </div>
    </>
  );
};

export default CentroTeoria;
