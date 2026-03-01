import { TheorySection, Concept, Formula } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Ondas Estacionarias",
  descripcion: "Patrones de interferencia en ondas",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Ondas Estacionarias">
        <Concept title="Formación de Ondas Estacionarias">
          <p>
            Las ondas estacionarias se forman cuando dos ondas de igual frecuencia y amplitud 
            viajan en direcciones opuestas y se superponen. A diferencia de las ondas viajeras, 
            las ondas estacionarias no transportan energía a lo largo del medio, sino que crean 
            patrones fijos de vibración.
          </p>
          <p>
            Se caracterizan por la presencia de nodos (puntos que permanecen en reposo) y 
            antinodos (puntos de máxima oscilación). La distancia entre dos nodos consecutivos 
            es igual a media longitud de onda (λ/2).
          </p>
          <p>
            La ecuación general de una onda estacionaria resulta de la superposición de dos 
            ondas viajeras:
          </p>
          <div className="formula-card">
            <p>y(x,t) = 2A sin(kx) cos(ωt)</p>
          </div>
          <p>
            Donde A es la amplitud, k es el número de onda, ω es la frecuencia angular, 
            x es la posición y t es el tiempo.
          </p>
        </Concept>

        <Concept title="Ondas Estacionarias en Cuerdas">
          <p>
            En una cuerda fija en ambos extremos, solo pueden existir ondas estacionarias 
            cuyas longitudes de onda satisfagan la condición de que la longitud de la cuerda 
            sea un múltiplo entero de media longitud de onda.
          </p>
          <Formula
            expression={String.raw`f_n = \frac{nv}{2L}`}
            calculatorId="ondas-est-frecuencia-cuerda"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Longitud de onda", expression: String.raw`\lambda_n = \frac{2L}{n}` },
              { description: "Velocidad en cuerda", expression: String.raw`v = \sqrt{\frac{T}{\mu}}` }
            ]}
          />
          <p>Donde:</p>
          <ul>
            <li>f_n: Frecuencia del armónico n (Hz)</li>
            <li>n: Número de armónico (1, 2, 3, ...)</li>
            <li>v: Velocidad de la onda (m/s)</li>
            <li>L: Longitud de la cuerda (m)</li>
            <li>T: Tensión de la cuerda (N)</li>
            <li>μ: Densidad lineal de masa (kg/m)</li>
          </ul>
          <p>
            El primer armónico (n=1) se llama frecuencia fundamental o primer modo de vibración. 
            Los armónicos superiores (n=2, 3, 4...) son múltiplos enteros de la frecuencia fundamental.
          </p>
        </Concept>

        <Concept title="Ondas Estacionarias en Tubos Sonoros">
          <p>
            Los tubos sonoros pueden ser abiertos en ambos extremos o cerrados en uno de ellos. 
            En los extremos abiertos se forman antinodos de presión (nodos de desplazamiento), 
            mientras que en los extremos cerrados se forman nodos de presión (antinodos de desplazamiento).
          </p>
          
          <h4>Tubos Abiertos</h4>
          <p>
            En un tubo abierto en ambos extremos, se forman antinodos en los dos extremos. 
            La longitud del tubo debe ser un múltiplo entero de media longitud de onda.
          </p>
          <Formula
            expression={String.raw`f_n = \frac{nv}{2L}`}
            calculatorId="ondas-est-frecuencia-tubo-abierto"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Longitud de onda", expression: String.raw`\lambda_n = \frac{2L}{n}` },
              { description: "Longitud del tubo", expression: String.raw`L = \frac{nv}{2f}` }
            ]}
          />
          <p>
            Los tubos abiertos producen todos los armónicos (n = 1, 2, 3, 4...), similar a 
            las cuerdas fijas en ambos extremos.
          </p>

          <h4>Tubos Cerrados</h4>
          <p>
            En un tubo cerrado en un extremo, se forma un nodo en el extremo cerrado y un 
            antinodo en el extremo abierto. Solo pueden existir armónicos impares.
          </p>
          <Formula
            expression={String.raw`f_n = \frac{nv}{4L} \quad (n = 1, 3, 5, ...)`}
            calculatorId="ondas-est-frecuencia-tubo-cerrado"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Longitud de onda", expression: String.raw`\lambda_n = \frac{4L}{n}` }
            ]}
          />
          <p>
            Los tubos cerrados solo producen armónicos impares (n = 1, 3, 5, 7...), lo que 
            les da un timbre característico diferente al de los tubos abiertos.
          </p>
        </Concept>

        <Concept title="Resonancia y Armónicos">
          <p>
            La resonancia ocurre cuando un sistema es excitado a una de sus frecuencias naturales 
            de vibración. En este caso, la amplitud de oscilación aumenta significativamente, 
            incluso con pequeñas fuerzas aplicadas.
          </p>
          <p>
            Los armónicos son las frecuencias naturales de vibración de un sistema. El primer 
            armónico (fundamental) tiene la frecuencia más baja, y los armónicos superiores 
            son múltiplos enteros de esta frecuencia.
          </p>
          <p>
            La serie armónica completa para una cuerda o tubo abierto es:
          </p>
          <div className="formula-card">
            <p>f₁, 2f₁, 3f₁, 4f₁, 5f₁, ...</p>
          </div>
          <p>
            Para un tubo cerrado, la serie armónica solo incluye múltiplos impares:
          </p>
          <div className="formula-card">
            <p>f₁, 3f₁, 5f₁, 7f₁, 9f₁, ...</p>
          </div>
          <p>
            El timbre de un instrumento musical depende de la combinación específica de 
            armónicos presentes y sus amplitudes relativas.
          </p>
        </Concept>

        <Concept title="Modos de Vibración">
          <p>
            Cada armónico corresponde a un modo de vibración específico del sistema. El modo 
            fundamental (n=1) tiene el menor número de nodos, mientras que los modos superiores 
            tienen más nodos.
          </p>
          <p>
            En una cuerda fija en ambos extremos:
          </p>
          <ul>
            <li>Modo 1 (fundamental): 2 nodos (en los extremos), 1 antinodo (centro)</li>
            <li>Modo 2 (segundo armónico): 3 nodos, 2 antinodos</li>
            <li>Modo 3 (tercer armónico): 4 nodos, 3 antinodos</li>
            <li>Modo n: (n+1) nodos, n antinodos</li>
          </ul>
          <p>
            La energía de vibración se distribuye entre los diferentes modos. En la práctica, 
            cuando se excita una cuerda o tubo, varios modos vibran simultáneamente, creando 
            el sonido complejo que escuchamos.
          </p>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones de las Ondas Estacionarias
        </h2>
        
        <div className="theory-subsection">
          <h3>🎸 Instrumentos Musicales de Cuerda</h3>
          <p>
            Las guitarras, violines, pianos y arpas funcionan mediante ondas estacionarias en 
            cuerdas. Al pulsar, frotar o golpear una cuerda, se generan múltiples armónicos 
            simultáneamente. La frecuencia fundamental determina la nota musical, mientras que 
            los armónicos superiores definen el timbre característico del instrumento.
          </p>
          <p>
            Los músicos modifican la longitud efectiva de la cuerda (pisando trastes o cuerdas) 
            para cambiar la frecuencia fundamental y así producir diferentes notas. La tensión 
            de las cuerdas se ajusta durante la afinación para lograr las frecuencias deseadas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎺 Instrumentos de Viento</h3>
          <p>
            Las flautas, clarinetes, trompetas y órganos producen sonido mediante ondas 
            estacionarias en columnas de aire. Los instrumentos de viento se clasifican en:
          </p>
          <ul>
            <li>Tubos abiertos: flauta, órgano (tubos abiertos), saxofón</li>
            <li>Tubos cerrados: clarinete, órgano (tubos cerrados), algunos tubos de PVC</li>
          </ul>
          <p>
            Los músicos cambian la longitud efectiva del tubo abriendo o cerrando llaves, 
            válvulas o agujeros, modificando así las frecuencias de resonancia y produciendo 
            diferentes notas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏛️ Acústica Arquitectónica</h3>
          <p>
            Las ondas estacionarias en salas de concierto, estudios de grabación y auditorios 
            pueden crear problemas acústicos. Ciertas frecuencias resuenan más que otras, 
            causando "modos de sala" que distorsionan el sonido.
          </p>
          <p>
            Los arquitectos acústicos diseñan espacios para minimizar ondas estacionarias 
            indeseables mediante:
          </p>
          <ul>
            <li>Dimensiones de sala no proporcionales (evitar cubos perfectos)</li>
            <li>Superficies difusoras que dispersan el sonido</li>
            <li>Materiales absorbentes en ubicaciones estratégicas</li>
            <li>Trampas de graves para controlar frecuencias bajas</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>🏥 Resonancia Magnética (MRI)</h3>
          <p>
            Aunque no son ondas mecánicas, los principios de resonancia y ondas estacionarias 
            se aplican en la resonancia magnética nuclear. Los núcleos atómicos en un campo 
            magnético tienen frecuencias de resonancia específicas, y al excitarlos con ondas 
            de radio a esas frecuencias, absorben energía que luego liberan, permitiendo crear 
            imágenes médicas detalladas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🍕 Hornos Microondas</h3>
          <p>
            Los hornos microondas utilizan ondas electromagnéticas estacionarias para calentar 
            alimentos. El magnetrón genera microondas a 2.45 GHz que forman patrones de ondas 
            estacionarias dentro de la cavidad del horno. Los puntos calientes corresponden a 
            antinodos y los fríos a nodos.
          </p>
          <p>
            Por eso los hornos tienen platos giratorios: para que los alimentos pasen por 
            diferentes zonas de intensidad y se calienten uniformemente, evitando que permanezcan 
            en los nodos donde no recibirían energía.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💡 Láseres y Cavidades Ópticas</h3>
          <p>
            Los láseres funcionan mediante ondas estacionarias de luz dentro de una cavidad 
            óptica formada por espejos. Solo ciertas longitudes de onda (modos) pueden existir 
            en la cavidad, determinadas por su longitud. La amplificación por emisión estimulada 
            ocurre preferentemente en estos modos de resonancia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔍 Detección de Grietas por Ultrasonido</h3>
          <p>
            En pruebas no destructivas de materiales, se utilizan ondas ultrasónicas estacionarias 
            para detectar defectos internos. Las grietas o inclusiones alteran los patrones de 
            resonancia del material, permitiendo identificar problemas sin dañar la pieza. Esta 
            técnica se usa en aviación, construcción y manufactura para garantizar la integridad 
            estructural.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia de las Ondas Estacionarias
        </h2>
        
        <div className="theory-subsection">
          <h3>🎵 Pitágoras y la Armonía Musical (siglo VI a.C.)</h3>
          <p>
            Pitágoras fue el primero en estudiar sistemáticamente la relación entre las 
            longitudes de cuerdas vibrantes y las notas musicales. Descubrió que cuerdas 
            con longitudes en proporciones simples (1:2, 2:3, 3:4) producían intervalos 
            musicales armoniosos.
          </p>
          <p>
            Aunque no comprendía el concepto de ondas estacionarias, sus experimentos con el 
            monocordio (instrumento de una sola cuerda) establecieron las bases matemáticas 
            de la música occidental y la acústica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📐 Marin Mersenne y las Leyes de las Cuerdas (1636)</h3>
          <p>
            El matemático y teólogo francés Marin Mersenne formuló las leyes que relacionan 
            la frecuencia de vibración de una cuerda con su longitud, tensión y densidad. 
            Publicó estas leyes en su obra "Harmonie Universelle", estableciendo las bases 
            cuantitativas para el estudio de las ondas en cuerdas.
          </p>
          <p>
            Mersenne también midió por primera vez la velocidad del sonido en el aire con 
            notable precisión para su época, obteniendo un valor de aproximadamente 316 m/s 
            (el valor real es 343 m/s a 20°C).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Daniel Bernoulli y los Modos de Vibración (1753)</h3>
          <p>
            Daniel Bernoulli demostró matemáticamente que una cuerda vibrante puede oscilar 
            simultáneamente en múltiples modos (armónicos). Propuso que cualquier vibración 
            compleja de una cuerda puede descomponerse en una suma de vibraciones armónicas 
            simples.
          </p>
          <p>
            Este trabajo fue fundamental para el desarrollo posterior de la teoría de Fourier 
            y el análisis espectral de señales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎨 Ernst Chladni y las Figuras Acústicas (1787)</h3>
          <p>
            El físico alemán Ernst Chladni desarrolló un método para visualizar ondas 
            estacionarias en placas vibrantes. Esparcía arena fina sobre placas metálicas 
            y las hacía vibrar con un arco de violín. La arena se acumulaba en los nodos, 
            creando patrones geométricos hermosos conocidos como "figuras de Chladni".
          </p>
          <p>
            Este método permitió por primera vez "ver" las ondas estacionarias y sus modos 
            de vibración, revolucionando el estudio de la acústica. Napoleón Bonaparte quedó 
            tan impresionado con estas demostraciones que financió investigaciones adicionales 
            de Chladni.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔊 Hermann von Helmholtz y la Resonancia (1863)</h3>
          <p>
            Hermann von Helmholtz inventó los resonadores de Helmholtz, cavidades esféricas 
            con un cuello estrecho que resuenan a frecuencias específicas. Utilizó estos 
            dispositivos para analizar los componentes armónicos de sonidos complejos, 
            incluyendo la voz humana y los instrumentos musicales.
          </p>
          <p>
            Su obra "On the Sensations of Tone" (1863) estableció las bases científicas de 
            la acústica musical y la percepción auditiva, explicando cómo el oído humano 
            descompone sonidos complejos en sus componentes armónicos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏆 Lord Rayleigh y la Teoría del Sonido (1877)</h3>
          <p>
            John William Strutt (Lord Rayleigh) publicó "The Theory of Sound", una obra 
            monumental en dos volúmenes que sistematizó todo el conocimiento sobre acústica 
            y vibraciones. Desarrolló la teoría matemática completa de las ondas estacionarias 
            en diversos sistemas: cuerdas, membranas, placas, tubos y cavidades.
          </p>
          <p>
            Su trabajo sigue siendo la base de la acústica moderna y le valió el Premio Nobel 
            de Física en 1904 (por el descubrimiento del argón, pero su trabajo en acústica 
            fue igualmente fundamental).
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y Curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🌉 El Puente de Tacoma Narrows (1940)</h3>
          <p>
            El colapso del puente de Tacoma Narrows en Washington es uno de los ejemplos más 
            dramáticos de resonancia destructiva. El 7 de noviembre de 1940, vientos de solo 
            68 km/h hicieron que el puente entrara en resonancia, oscilando violentamente hasta 
            colapsar.
          </p>
          <p>
            Aunque comúnmente se atribuye a resonancia simple, el fenómeno real fue más complejo, 
            involucrando aeroelasticidad y flutter. El incidente revolucionó el diseño de puentes 
            y estructuras, enfatizando la importancia de considerar las frecuencias naturales de 
            vibración en ingeniería.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🍷 La Voz que Rompe Copas</h3>
          <p>
            Es posible romper una copa de cristal con la voz humana si se canta exactamente a 
            su frecuencia de resonancia con suficiente intensidad. Cada copa tiene una frecuencia 
            natural determinada por su forma, tamaño y grosor del cristal.
          </p>
          <p>
            Cuando se excita a esta frecuencia, se forman ondas estacionarias en el cristal que 
            aumentan progresivamente su amplitud. Si la amplitud supera la resistencia del material, 
            el cristal se fractura. Cantantes de ópera entrenados han logrado este efecto, aunque 
            requiere una voz muy potente y un control preciso del tono.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎻 El Stradivarius y sus Armónicos</h3>
          <p>
            Los violines Stradivarius, fabricados por Antonio Stradivari en los siglos XVII y XVIII, 
            son legendarios por su sonido excepcional. Estudios modernos sugieren que su calidad 
            se debe en parte a los patrones únicos de ondas estacionarias en la madera.
          </p>
          <p>
            El tratamiento químico de la madera (posiblemente para prevenir gusanos) y el barniz 
            especial alteraron las propiedades acústicas, creando una distribución de armónicos 
            particularmente rica y equilibrada. Algunos investigadores han usado tomografía 
            computarizada y análisis de vibraciones para intentar descifrar el "secreto" de 
            Stradivari.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌌 Ondas Estacionarias en el Universo</h3>
          <p>
            Las ondas acústicas en el plasma del universo temprano (380,000 años después del 
            Big Bang) formaron patrones de ondas estacionarias a escala cósmica. Estas oscilaciones 
            acústicas bariónicas dejaron una "huella" en la distribución de galaxias que observamos 
            hoy.
          </p>
          <p>
            Los astrónomos utilizan estas ondas estacionarias cósmicas como una "regla estándar" 
            para medir distancias en el universo y estudiar su expansión. Es fascinante que los 
            mismos principios que explican una cuerda de guitarra también se apliquen a la 
            estructura del cosmos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎹 El Órgano de Viento más Grande del Mundo</h3>
          <p>
            El órgano de la Boardwalk Hall en Atlantic City tiene el tubo más largo del mundo: 
            19.5 metros de longitud y 1 metro de diámetro. Este tubo produce una nota de 8 Hz, 
            por debajo del umbral de audición humana (20 Hz), pero que se puede "sentir" como 
            una vibración en el cuerpo.
          </p>
          <p>
            El órgano completo tiene 33,114 tubos, desde 6 mm hasta 19.5 m de longitud, cubriendo 
            un rango de frecuencias extraordinario. Cuando se toca a máximo volumen, puede alcanzar 
            130 dB, comparable a un motor de avión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌍 Resonancia de Schumann</h3>
          <p>
            La cavidad entre la superficie de la Tierra y la ionosfera actúa como una guía de 
            ondas gigante que resuena a frecuencias específicas, principalmente 7.83 Hz. Estas 
            resonancias de Schumann son ondas electromagnéticas estacionarias generadas por 
            descargas eléctricas (rayos) en todo el planeta.
          </p>
          <p>
            Algunos investigadores han especulado que estas frecuencias podrían influir en los 
            ritmos biológicos humanos, aunque esta hipótesis es controvertida. Lo que es seguro 
            es que estas resonancias se utilizan para estudiar la actividad de rayos global y 
            las propiedades de la ionosfera.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🪃 El Didgeridoo Aborigen</h3>
          <p>
            El didgeridoo, instrumento de viento aborigen australiano con más de 1,500 años de 
            antigüedad, es esencialmente un tubo cerrado en un extremo. Los músicos utilizan 
            una técnica de respiración circular para mantener un sonido continuo mientras 
            modulan los armónicos con la lengua, mejillas y cuerdas vocales.
          </p>
          <p>
            Lo fascinante es que los aborígenes desarrollaron intuitivamente técnicas para 
            controlar ondas estacionarias y armónicos miles de años antes de que la ciencia 
            occidental comprendiera estos fenómenos. Estudios modernos muestran que tocar el 
            didgeridoo puede ayudar a tratar la apnea del sueño, fortaleciendo los músculos 
            de las vías respiratorias superiores.
          </p>
        </div>
      </div>

      <TheorySection title="Resumen">
        <Concept>
          <p>
            Las ondas estacionarias son patrones de vibración que se forman cuando dos ondas 
            de igual frecuencia y amplitud viajan en direcciones opuestas y se superponen. 
            Se caracterizan por nodos (puntos sin movimiento) y antinodos (puntos de máxima 
            oscilación), y no transportan energía a lo largo del medio.
          </p>
          <p>
            En cuerdas fijas en ambos extremos y tubos abiertos, las frecuencias de resonancia 
            siguen la relación f_n = nv/2L, donde n puede ser cualquier entero positivo. En 
            tubos cerrados en un extremo, solo existen armónicos impares: f_n = nv/4L con 
            n = 1, 3, 5, 7...
          </p>
          <p>
            La resonancia ocurre cuando un sistema es excitado a una de sus frecuencias naturales, 
            causando un aumento dramático en la amplitud de oscilación. Este fenómeno es 
            fundamental en instrumentos musicales, donde determina las notas que pueden producirse 
            y el timbre característico de cada instrumento.
          </p>
          <p>
            Las aplicaciones de las ondas estacionarias son extraordinariamente diversas: desde 
            la música (guitarras, violines, flautas, órganos) hasta la tecnología (láseres, 
            hornos microondas, resonancia magnética), la arquitectura acústica y la ingeniería 
            estructural. Comprender las ondas estacionarias es esencial para diseñar instrumentos 
            musicales, salas de concierto, detectar defectos en materiales y evitar resonancias 
            destructivas en estructuras.
          </p>
          <p>
            El estudio de las ondas estacionarias tiene una rica historia que se remonta a 
            Pitágoras en la antigua Grecia y ha evolucionado a través de las contribuciones de 
            Mersenne, Bernoulli, Chladni, Helmholtz y Rayleigh. Hoy en día, los principios de 
            las ondas estacionarias se aplican desde la escala subatómica (física cuántica) 
            hasta la escala cósmica (oscilaciones acústicas bariónicas en el universo).
          </p>
        </Concept>
      </TheorySection>
    </>
  );
};

export default Theory;
