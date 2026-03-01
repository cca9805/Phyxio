import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Ley de Hooke",
  descripcion: "Relación entre esfuerzo y deformación en el rango elástico",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const LeyHookeTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="La Ley de Hooke: Fundamento de la Elasticidad">
        <p>
          La Ley de Hooke es una de las leyes más importantes en mecánica de materiales. Establece 
          que, dentro del límite elástico, existe una relación lineal entre el esfuerzo aplicado 
          a un material y la deformación resultante. Esta ley es la base del diseño estructural 
          y permite predecir cómo se comportarán los materiales bajo carga.
        </p>
        <p>
          Robert Hooke descubrió esta ley en 1660 estudiando resortes, pero su aplicación se extiende 
          a todos los materiales elásticos: metales, polímeros, cerámicas, e incluso tejidos biológicos.
        </p>
      </TheorySection>

      <TheorySection title="Enunciado de la Ley de Hooke">
        <Concept title="Forma General">
          <p>
            La Ley de Hooke establece que el esfuerzo (σ) es directamente proporcional a la 
            deformación unitaria (ε) en el rango elástico:
          </p>
          <Formula
            expression={String.raw`\sigma = E\epsilon`}
            description="Ley de Hooke en términos de esfuerzo y deformación"
          />
          <p>Donde:</p>
          <ul>
            <li>σ: Esfuerzo normal (Pa)</li>
            <li>E: Módulo de Young o módulo de elasticidad (Pa)</li>
            <li>ε: Deformación unitaria (adimensional)</li>
          </ul>
          <p>
            El módulo de Young (E) es la constante de proporcionalidad que caracteriza la rigidez 
            del material. Materiales con E alto (como el acero) son rígidos y se deforman poco. 
            Materiales con E bajo (como la goma) son flexibles y se deforman mucho.
          </p>
        </Concept>

        <Concept title="Forma para Resortes">
          <p>
            Para resortes y elementos elásticos, la Ley de Hooke se expresa como:
          </p>
          <Formula
            expression={String.raw`F = k \Delta x`}
            description="Ley de Hooke para resortes"
          />
          <p>Donde:</p>
          <ul>
            <li>F: Fuerza aplicada (N)</li>
            <li>k: Constante elástica del resorte (N/m)</li>
            <li>Δx: Deformación o elongación (m)</li>
          </ul>
          <Example>
            Un resorte con k = 500 N/m se comprime 10 cm (0.1 m). La fuerza necesaria es: 
            F = 500 × 0.1 = 50 N. Si duplicamos la compresión a 20 cm, la fuerza se duplica a 100 N. 
            Esta relación lineal es característica de la Ley de Hooke.
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Forma Práctica para Barras y Cables">
        <Concept title="Alargamiento de Barras">
          <p>
            Para calcular el alargamiento de una barra o cable sometido a tensión, combinamos 
            la Ley de Hooke (σ = Eε) con las definiciones de esfuerzo (σ = F/A) y deformación 
            (ε = ΔL/L₀):
          </p>

          <Formula
            expression={String.raw`\Delta L = \frac{FL_0}{AE}`}
            calculatorId="ley-hooke-alargamiento"
            definitions={definitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>ΔL: Alargamiento o acortamiento (m)</li>
            <li>F: Fuerza aplicada (N)</li>
            <li>L₀: Longitud original (m)</li>
            <li>A: Área de la sección transversal (m²)</li>
            <li>E: Módulo de Young del material (Pa)</li>
          </ul>

          <p>
            Esta fórmula es fundamental en ingeniería estructural. Nos dice que el alargamiento:
          </p>
          <ul>
            <li>Es proporcional a la fuerza F (más fuerza = más alargamiento)</li>
            <li>Es proporcional a la longitud L₀ (cables más largos se alargan más)</li>
            <li>Es inversamente proporcional al área A (cables más gruesos se alargan menos)</li>
            <li>Es inversamente proporcional a E (materiales más rígidos se alargan menos)</li>
          </ul>

          <Example>
            Un cable de acero (E = 200 GPa) de 10 m de longitud y 2 cm² de área soporta 40 kN. 
            El alargamiento es: ΔL = (40000 × 10) / (2×10⁻⁴ × 200×10⁹) = 0.01 m = 10 mm. 
            Si duplicamos la longitud a 20 m, el alargamiento se duplica a 20 mm.
          </Example>
        </Concept>

        <Concept title="Cálculo de Fuerza">
          <p>
            Si conocemos el alargamiento deseado o máximo permitido, podemos calcular la fuerza:
          </p>
          <Formula
            expression={String.raw`F = \frac{AE\Delta L}{L_0}`}
            calculatorId="ley-hooke-fuerza"
            definitions={definitions}
            exercises={exercises}
          />
          <p>
            Esta fórmula es útil para determinar la carga máxima que puede soportar un elemento 
            sin exceder una deformación límite.
          </p>
        </Concept>

        <Concept title="Cálculo de Área Necesaria">
          <p>
            En diseño estructural, a menudo necesitamos determinar el área mínima para que la 
            deformación no exceda un límite:
          </p>
          <Formula
            expression={String.raw`A = \frac{FL_0}{E\Delta L}`}
            calculatorId="ley-hooke-area"
            definitions={definitions}
            exercises={exercises}
          />
          <p>
            Esta fórmula permite dimensionar cables, barras y otros elementos estructurales.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Límite Elástico y Región de Validez">
        <Concept title="Región Elástica">
          <p>
            La Ley de Hooke solo es válida en la región elástica del material, donde la deformación 
            es reversible. Si retiramos la carga, el material regresa a su forma original sin 
            deformación permanente.
          </p>
          <Important>
            Más allá del límite elástico, el material entra en la región plástica donde la Ley 
            de Hooke ya no es válida. La deformación se vuelve permanente y la relación esfuerzo-deformación 
            deja de ser lineal.
          </Important>
        </Concept>

        <Concept title="Límites Elásticos Típicos">
          <p>Algunos límites elásticos aproximados:</p>
          <ul>
            <li>Acero estructural: 250 MPa (deformación ~0.125%)</li>
            <li>Aluminio: 100-150 MPa (deformación ~0.14-0.21%)</li>
            <li>Cobre: 70 MPa (deformación ~0.06%)</li>
            <li>Hormigón (compresión): 15-30 MPa (deformación ~0.05-0.1%)</li>
            <li>Madera: 30-50 MPa (deformación ~0.3-0.5%)</li>
          </ul>
          <p>
            En diseño, se aplican factores de seguridad (típicamente 1.5-3.0) para garantizar 
            que el esfuerzo de trabajo esté bien por debajo del límite elástico.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Energía Elástica">
        <Concept title="Energía Almacenada">
          <p>
            Cuando un material se deforma elásticamente, almacena energía que puede recuperarse 
            al retirar la carga. Esta energía es el área bajo la curva esfuerzo-deformación:
          </p>
          <p style={{textAlign: 'center', margin: '15px 0'}}>
            U = ½ F × ΔL = ½ k × (Δx)²
          </p>
          <p>
            Esta energía elástica es la base del funcionamiento de resortes, arcos, catapultas, 
            y muchos dispositivos mecánicos. Los trampolines, por ejemplo, almacenan la energía 
            cinética del atleta como energía elástica y la devuelven para impulsarlo hacia arriba.
          </p>
          <Example>
            Un resorte con k = 1000 N/m comprimido 20 cm almacena: U = ½ × 1000 × (0.2)² = 20 J. 
            Esta energía es suficiente para lanzar un objeto de 100 g a una altura de 20 m 
            (despreciando fricción).
          </Example>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🏗️ Diseño de Estructuras</h3>
          <p>
            Los ingenieros usan la Ley de Hooke para calcular deformaciones en puentes, edificios 
            y torres. Los cables de suspensión en puentes se dimensionan para que el alargamiento 
            bajo carga máxima no exceda límites seguros (típicamente L/1000). El puente Golden Gate 
            tiene cables de 92 cm de diámetro que se alargan varios metros bajo carga, pero siempre 
            dentro del rango elástico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 Suspensiones de Vehículos</h3>
          <p>
            Los resortes de suspensión en automóviles siguen la Ley de Hooke. Se diseñan con 
            constantes elásticas específicas para proporcionar confort (k bajo = suave) o manejo 
            deportivo (k alto = firme). Un auto típico tiene k ≈ 20-30 kN/m por rueda. Los amortiguadores 
            disipan la energía elástica para evitar oscilaciones prolongadas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚖️ Básculas y Dinamómetros</h3>
          <p>
            Las básculas mecánicas usan resortes calibrados según la Ley de Hooke. La deformación 
            del resorte es proporcional al peso, y una escala graduada convierte la deformación 
            en lectura de masa. Los dinamómetros de laboratorio funcionan igual: miden fuerza 
            midiendo la elongación de un resorte calibrado.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎸 Instrumentos Musicales</h3>
          <p>
            Las cuerdas de instrumentos musicales son resortes que siguen la Ley de Hooke. La tensión 
            en la cuerda determina su frecuencia de vibración. Afinar un instrumento es ajustar 
            la tensión (y por tanto la deformación) de las cuerdas. Las cuerdas de guitarra tienen 
            k ≈ 100-500 N/m dependiendo del calibre.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏋️ Equipamiento Deportivo</h3>
          <p>
            Las pértigas de salto con pértiga son barras de fibra de vidrio o carbono que se flexionan 
            siguiendo la Ley de Hooke, almacenando hasta 2000 J de energía elástica. Los arcos de 
            tiro con arco almacenan energía elástica al tensarse (hasta 100 J) y la transfieren 
            a la flecha. Las raquetas de tenis usan la elasticidad de las cuerdas y el marco para 
            aumentar la velocidad de la pelota.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Microscopía de Fuerza Atómica (AFM)</h3>
          <p>
            Los AFM usan microvigas en voladizo (cantilevers) que se deflectan según la Ley de Hooke 
            al interactuar con superficies a escala atómica. Estas vigas tienen k ≈ 0.01-100 N/m 
            y pueden detectar fuerzas de piconewtons (10⁻¹² N). La deflexión se mide con láser, 
            permitiendo crear imágenes de átomos individuales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏥 Dispositivos Médicos</h3>
          <p>
            Los stents cardíacos son tubos de malla metálica que se expanden elásticamente para 
            mantener arterias abiertas. Los catéteres usan la elasticidad de materiales poliméricos 
            para navegar por vasos sanguíneos. Los aparatos de ortodoncia aplican fuerzas constantes 
            usando resortes y alambres elásticos que siguen la Ley de Hooke.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔋 Almacenamiento de Energía</h3>
          <p>
            Los resortes de reloj mecánico almacenan energía elástica que se libera gradualmente 
            para mover el mecanismo. Los juguetes de cuerda funcionan igual. Algunos sistemas 
            experimentales de almacenamiento de energía a gran escala usan la compresión elástica 
            de materiales para almacenar energía renovable.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De los Resortes a la Teoría de Elasticidad
        </h2>
        
        <div className="theory-subsection">
          <h3>🔬 Robert Hooke (1660): El Descubrimiento</h3>
          <p>
            Robert Hooke, científico inglés y contemporáneo de Isaac Newton, descubrió la ley que 
            lleva su nombre en 1660 mientras estudiaba resortes. Sin embargo, publicó su descubrimiento 
            en forma de anagrama en latín: "ceiiinosssttuv", que significa "Ut tensio, sic vis" 
            (Como la extensión, así la fuerza).
          </p>
          <p>
            Hooke mantuvo su descubrimiento en secreto durante 18 años, revelándolo finalmente en 1678. 
            Su motivación era proteger su prioridad científica en una época de intensa competencia 
            entre científicos. Este descubrimiento fue fundamental para el desarrollo de relojes 
            mecánicos precisos, que revolucionaron la navegación marítima.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ Aplicación a Materiales (1700-1800)</h3>
          <p>
            Durante el siglo XVIII, científicos como Thomas Young y Leonhard Euler extendieron 
            la Ley de Hooke de resortes a materiales en general. Young introdujo el módulo de 
            elasticidad (módulo de Young) en 1807, cuantificando la rigidez de diferentes materiales. 
            Esto permitió aplicar la Ley de Hooke al diseño de estructuras de hierro y acero.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ Revolución Industrial (1800-1900)</h3>
          <p>
            La construcción de puentes de hierro y acero requirió cálculos precisos de deformaciones. 
            Los ingenieros como Isambard Kingdom Brunel y Gustave Eiffel aplicaron la Ley de Hooke 
            para diseñar estructuras cada vez más audaces. La Torre Eiffel (1889) fue un triunfo 
            de la aplicación de la teoría de elasticidad: Eiffel calculó las deformaciones por 
            viento y temperatura con precisión notable.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Límites de la Ley de Hooke (1900-presente)</h3>
          <p>
            En el siglo XX, se descubrió que la Ley de Hooke es una aproximación válida solo para 
            pequeñas deformaciones. La mecánica de fractura (Griffith, 1920) estudió cómo los 
            materiales fallan más allá del límite elástico. La teoría de plasticidad (von Mises, 
            Tresca) describió el comportamiento no lineal en la región plástica.
          </p>
          <p>
            Los materiales modernos como composites, polímeros y aleaciones con memoria de forma 
            tienen comportamientos más complejos que la simple Ley de Hooke. Sin embargo, la ley 
            sigue siendo fundamental para el diseño estructural en el rango elástico.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🔐 El Anagrama Secreto</h3>
          <p>
            Hooke publicó su descubrimiento como anagrama "ceiiinosssttuv" en 1676, revelando 
            su significado solo en 1678. Esta práctica era común en el siglo XVII para establecer 
            prioridad sin revelar detalles. Galileo hizo lo mismo con sus descubrimientos astronómicos. 
            Hoy nos parece extraño, pero en una época sin patentes ni publicaciones científicas 
            formales, era una forma de proteger descubrimientos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⏰ Relojes y Navegación</h3>
          <p>
            La Ley de Hooke fue crucial para desarrollar relojes mecánicos precisos. John Harrison 
            usó resortes diseñados según la Ley de Hooke para crear cronómetros marinos (1735) 
            que permitieron determinar la longitud en el mar con precisión. Esto resolvió uno de 
            los problemas más importantes de la navegación y salvó innumerables vidas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 El Resorte Perfecto No Existe</h3>
          <p>
            Ningún resorte real sigue la Ley de Hooke perfectamente. Todos tienen pequeñas no linealidades, 
            histéresis (la curva de carga difiere de la de descarga) y fatiga (k disminuye con ciclos). 
            Los resortes de precisión en instrumentos científicos se calibran individualmente y se 
            mantienen a temperatura constante para minimizar estas desviaciones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦘 Tendones: Resortes Biológicos</h3>
          <p>
            Los tendones de canguro son resortes biológicos casi perfectos que siguen la Ley de Hooke. 
            Almacenan hasta 70% de la energía cinética del salto como energía elástica y la devuelven 
            en el siguiente salto. Esto permite a los canguros viajar largas distancias con mínimo 
            gasto energético. Los humanos también usamos elasticidad de tendones al correr, recuperando 
            hasta 35% de la energía del impacto.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ El Puente que Rebota</h3>
          <p>
            El Puente del Milenio en Londres (2000) tuvo que cerrarse días después de inaugurarse 
            porque oscilaba excesivamente cuando la gente caminaba. El problema era resonancia: 
            la frecuencia natural del puente (determinada por su rigidez elástica según la Ley de Hooke) 
            coincidía con la frecuencia de paso de las personas. Se instalaron amortiguadores para 
            disipar la energía elástica y resolver el problema.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎸 Afinación Musical</h3>
          <p>
            La frecuencia de una cuerda es proporcional a la raíz cuadrada de su tensión (que sigue 
            la Ley de Hooke). Para subir una octava (duplicar frecuencia), hay que cuadruplicar 
            la tensión. Las cuerdas de piano soportan tensiones de hasta 1000 N cada una, sumando 
            20 toneladas en total. El marco de hierro fundido del piano existe para resistir esta 
            enorme fuerza elástica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 Resortes en el Espacio</h3>
          <p>
            Los rovers marcianos usan suspensiones con resortes diseñados según la Ley de Hooke, 
            pero calibrados para la gravedad marciana (38% de la terrestre). Los satélites usan 
            resortes para desplegar paneles solares y antenas. En gravedad cero, los resortes 
            funcionan igual que en la Tierra porque la Ley de Hooke no depende de la gravedad.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          La Ley de Hooke establece que, en el rango elástico, el esfuerzo es proporcional a la 
          deformación: σ = Eε. Para resortes: F = kΔx. Para barras y cables: ΔL = FL₀/(AE).
        </p>
        <p>
          Esta ley es válida solo en la región elástica, donde la deformación es reversible. 
          Más allá del límite elástico, el material entra en la región plástica y la ley deja 
          de ser válida.
        </p>
        <p>
          La Ley de Hooke es fundamental en ingeniería estructural, diseño mecánico, y muchas 
          aplicaciones desde relojes hasta puentes. Los materiales almacenan energía elástica 
          cuando se deforman, que puede recuperarse al retirar la carga.
        </p>
      </div>
    </>
  );
};

export default LeyHookeTheory;
