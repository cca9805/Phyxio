import { TheorySection, Concept, Important, Example, Formula } from '../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Resonancia",
  descripcion: "Resonancia en tubos, cuerdas y frecuencias naturales",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const ResonanciaTheory = ({ exercises }) => (
  <>
    {/* 3. TEORÍA PRINCIPAL */}
    <TheorySection title="Resonancia Acústica">
      <Important>
        La resonancia ocurre cuando un sistema es excitado a su frecuencia natural, produciendo oscilaciones de gran amplitud.
      </Important>
      <Concept title="¿Qué es la Frecuencia Natural?">
        <ul>
          <li>Geometría: Tamaño, forma, longitud</li>
          <li>Propiedades del material: Elasticidad, densidad, rigidez</li>
          <li>Condiciones de frontera: Extremos fijos, libres, o mixtos</li>
        </ul>
        <p>
          Ejemplo cotidiano: Cuando golpeas una copa de cristal, vibra a su frecuencia natural produciendo un tono característico. Cada copa tiene su propia frecuencia según su tamaño y grosor.
        </p>
      </Concept>
      <Concept title="Condiciones para la Resonancia">
        <ol>
          <li>Frecuencia de excitación = Frecuencia natural: La fuerza externa debe oscilar a la misma frecuencia que el sistema</li>
          <li>Transferencia de energía: La energía se transfiere eficientemente del excitador al sistema</li>
          <li>Amortiguamiento bajo: Poca disipación de energía permite que la amplitud crezca</li>
        </ol>
        <Important>
          Resultado: La amplitud de vibración aumenta dramáticamente, pudiendo ser cientos de veces mayor que la amplitud de la fuerza excitadora.
        </Important>
      </Concept>
      <Concept title="Resonancia Constructiva vs. Destructiva">
        <ul>
          <li>Instrumentos musicales: Amplificación natural del sonido</li>
          <li>Cajas de resonancia: Guitarras, violines aumentan volumen</li>
          <li>Salas de conciertos: Acústica optimizada para ciertas frecuencias</li>
          <li>Antenas: Recepción eficiente de señales de radio</li>
        </ul>
        <ul>
          <li>Puentes: Colapso por viento o tráfico (Tacoma Narrows)</li>
          <li>Edificios: Daño por terremotos si frecuencia coincide</li>
          <li>Maquinaria: Vibraciones excesivas causan desgaste</li>
          <li>Aviones: Aleteo de alas (flutter) puede ser catastrófico</li>
        </ul>
      </Concept>
      <Concept title="Factor de Calidad (Q)">
        <ul>
          <li>Q alto: Resonancia muy pronunciada, pico estrecho, poco amortiguamiento</li>
          <li>Q bajo: Resonancia suave, pico ancho, mucho amortiguamiento</li>
        </ul>
        <ul>
          <li>Diapasón (Q ≈ 1000): Vibra durante mucho tiempo a una frecuencia muy precisa</li>
          <li>Tambor (Q ≈ 10): Vibra brevemente, sonido se apaga rápido</li>
          <li>Copa de cristal (Q ≈ 10000): Puede vibrar durante minutos</li>
        </ul>
      </Concept>
    </TheorySection>

    {/* 4. FÓRMULAS */}
    <TheorySection title="Resonancia en Tubos">
      <Concept title="Tubo Abierto (ambos extremos abiertos)">
        <Formula
          expression={String.raw`f_n = n \frac{v}{2L}`}
          calculatorId="resonancia-grupo-1"
          definitions={definitions}
          exercises={exercises}
          complementary={[{ description: "Calcular Longitud (L)", expression: String.raw`L = n \frac{v}{2f_n}` },{ description: "Calcular Velocidad (v)", expression: String.raw`v = \frac{2Lf_n}{n}` }]}
        />
        <ul>
          <li>fₙ: Frecuencia del n-ésimo armónico (Hz)</li>
          <li>n: Número del armónico (1, 2, 3, ...)</li>
          <li>v: Velocidad del sonido (m/s)</li>
          <li>L: Longitud del tubo (m)</li>
        </ul>
        <Important>Todos los armónicos están presentes.</Important>
      </Concept>
      <Concept title="Tubo Cerrado (un extremo cerrado)">
        <Formula
          expression={String.raw`f_n = n \frac{v}{4L}`}
          calculatorId="resonancia-grupo-1"
          definitions={definitions}
          exercises={exercises}
          complementary={[{ description: "Calcular Longitud (L)", expression: String.raw`L = n \frac{v}{4f_n}` },{ description: "Calcular Velocidad (v)", expression: String.raw`v = \frac{4Lf_n}{n}` }]}
        />
        <ul>
          <li>fₙ: Frecuencia (Hz)</li>
          <li>n: Armónico impar (1, 3, 5, ...)</li>
          <li>v: Velocidad del sonido (m/s)</li>
          <li>L: Longitud del tubo (m)</li>
        </ul>
        <Important>Solo armónicos impares están presentes.</Important>
      </Concept>
    </TheorySection>
    <TheorySection title="Resonancia en Cuerdas">
      <Concept title="Frecuencia en Cuerda Tensa">
        <Formula
          expression={String.raw`f_n = n \frac{1}{2L}\sqrt{\frac{T}{\mu}}`}
          calculatorId="resonancia-grupo-1"
          definitions={definitions}
          exercises={exercises}
        />
        <ul>
          <li>fₙ: Frecuencia del n-ésimo armónico (Hz)</li>
          <li>n: Número del armónico (1, 2, 3, ...)</li>
          <li>L: Longitud de la cuerda (m)</li>
          <li>T: Tensión de la cuerda (N)</li>
          <li>μ: Densidad lineal (kg/m)</li>
        </ul>
      </Concept>
      <Concept title="Velocidad en la Cuerda">
        <Formula
          expression={String.raw`v = \sqrt{\frac{T}{\mu}}`}
          calculatorId="resonancia-grupo-1"
          definitions={definitions}
          exercises={exercises}
          complementary={[{ description: "Calcular Tensión (T)", expression: String.raw`T = v^2 \cdot \mu` },{ description: "Calcular Densidad Lineal (μ)", expression: String.raw`\mu = \frac{T}{v^2}` }]}
        />
        <ul>
          <li>v: Velocidad de la onda (m/s)</li>
          <li>T: Tensión de la cuerda (N)</li>
          <li>μ: Densidad lineal (kg/m)</li>
        </ul>
      </Concept>
    </TheorySection>

    {/* 5. OTRAS CONSIDERACIONES */}
    <TheorySection title="Modos de Vibración">
      <Concept title="Nodos y Antinodos">
        <ul>
          <li>Nodos: Puntos que permanecen inmóviles (amplitud = 0)</li>
          <li>Antinodos: Puntos de máxima amplitud de vibración</li>
        </ul>
        <Important>
          En tubos abiertos: Antinodos en ambos extremos (presión mínima, desplazamiento máximo). En tubos cerrados: Nodo en el extremo cerrado, antinodo en el abierto. En cuerdas: Nodos en ambos extremos.
        </Important>
      </Concept>
      <Concept title="Figuras de Chladni">
        <ul>
          <li>Se esparce arena fina sobre una placa metálica</li>
          <li>Se hace vibrar la placa con un arco de violín</li>
          <li>La arena se acumula en los nodos (donde no hay vibración)</li>
          <li>Forma patrones geométricos hermosos y complejos</li>
        </ul>
        <Important>
          Aplicación moderna: Diseño de altavoces y paneles acústicos para evitar modos de vibración indeseados.
        </Important>
      </Concept>
    </TheorySection>

    <TheorySection title="Resonancia Simpática">
      <Concept title="Vibración por Simpatía">
        <ul>
          <li>Cuerdas de guitarra: Si tocas una cuerda, otras cuerdas afinadas a armónicos de esa nota vibrarán solas</li>
          <li>Copas de cristal: Una copa puede hacer vibrar a otra cercana si están afinadas igual</li>
          <li>Diapasones: Dos diapasones iguales: uno vibrando hace vibrar al otro a distancia</li>
          <li>Puentes: Soldados rompen el paso al cruzar puentes para evitar resonancia simpática</li>
        </ul>
        <Important>
          Mecanismo: El primer objeto vibra y emite ondas sonoras. Si la frecuencia coincide con la natural del segundo objeto, este absorbe energía eficientemente y comienza a vibrar.
        </Important>
      </Concept>
      <Concept title="Instrumentos con Cuerdas Simpáticas">
        <ul>
          <li>Sitar (India): 6-7 cuerdas tocadas + 13 cuerdas simpáticas que resuenan libremente</li>
          <li>Viola d'amore: 7 cuerdas tocadas + 7 cuerdas simpáticas debajo</li>
          <li>Hardanger fiddle (Noruega): 4 cuerdas tocadas + 4-5 cuerdas simpáticas</li>
          <li>Piano: Cuando pisas el pedal, todas las cuerdas pueden resonar simpáticamente</li>
        </ul>
        <Important>
          Efecto sonoro: Las cuerdas simpáticas añaden armónicos y reverberación natural, creando un sonido más rico y envolvente.
        </Important>
      </Concept>
    </TheorySection>

    <TheorySection title="Resonadores de Helmholtz">
      <Concept title="Principio de Funcionamiento">
        <ul>
          <li>Estructura: Volumen de aire (cavidad) + cuello (abertura)</li>
          <li>Analogía: Como soplar en una botella vacía</li>
          <li>Frecuencia de resonancia: Depende del volumen de la cavidad y dimensiones del cuello</li>
        </ul>
        <Important>
          Aplicaciones prácticas: Silenciadores de automóviles, acústica arquitectónica, instrumentos musicales, ocarina.
        </Important>
      </Concept>
      <Concept title="Resonancia en Cavidades del Cuerpo">
        <ul>
          <li>Cavidad oral: Modifica el timbre de la voz (vocales)</li>
          <li>Cavidad nasal: Añade resonancia nasal</li>
          <li>Faringe: Amplifica ciertas frecuencias de la voz</li>
          <li>Senos paranasales: Contribuyen a la resonancia de la voz</li>
        </ul>
        <Important>
          Por esto: Tu voz suena diferente cuando tienes la nariz tapada o cuando la escuchas grabada (no percibes la resonancia ósea interna).
        </Important>
      </Concept>
    </TheorySection>

    <TheorySection title="Amortiguamiento y Resonancia">
      <Concept title="Tipos de Amortiguamiento">
        <ul>
          <li>Fricción con el aire o líquidos</li>
          <li>Fricción interna del material</li>
          <li>Pérdida de energía por emisión de ondas</li>
        </ul>
        <Important>
          El amortiguamiento reduce la amplitud de vibración. Ejemplo: Péndulo en aceite, goma, diapasón emitiendo sonido.
        </Important>
      </Concept>
      <Concept title="Control de Resonancia">
        <ul>
          <li>Cambiar frecuencia natural: Modificar masa, rigidez o geometría</li>
          <li>Añadir amortiguamiento: Materiales absorbentes, amortiguadores</li>
          <li>Amortiguadores de masa sintonizada (TMD): Masa que vibra en contrafase para cancelar resonancia</li>
          <li>Aislamiento de vibraciones: Montajes elásticos que no transmiten vibraciones</li>
        </ul>
        <Important>
          Ejemplos reales: Taipei 101, puentes modernos, lavadoras, raquetas de tenis.
        </Important>
      </Concept>
    </TheorySection>

      {/* Aplicaciones */}
      <div className="theory-applications-section">
        <h2><span role="img" aria-label="aplicaciones">🌍</span> Aplicaciones en la vida real</h2>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="viento">🎺</span> Instrumentos de Viento</h3>
          <ul>
            <li>Flautas y flautines: Tubos abiertos que resuenan en todos los armónicos, produciendo sonido brillante</li>
            <li>Clarinetes: Tubos cerrados que resuenan solo en armónicos impares, dando timbre característico</li>
            <li>Trompetas y trombones: Tubos con válvulas que cambian la longitud efectiva para diferentes notas</li>
            <li>Órganos de tubos: Miles de tubos de diferentes longitudes, cada uno resonando a una frecuencia específica</li>
            <li>Saxofones: Tubos cónicos con resonancia compleja que combina características de viento-madera y metal</li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="cuerda">🎸</span> Instrumentos de Cuerda</h3>
          <ul>
            <li>Guitarras: Cuerdas de diferentes tensiones y densidades para producir diferentes notas</li>
            <li>Violines: Caja de resonancia amplifica las vibraciones de las cuerdas por resonancia simpática</li>
            <li>Pianos: Martillos golpean cuerdas tensadas que resuenan en múltiples armónicos</li>
            <li>Arpas: Cuerdas de diferentes longitudes afinadas a escala musical</li>
            <li>Bajos eléctricos: Cuerdas gruesas con baja tensión para frecuencias graves</li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="arquitectura">🏛️</span> Acústica Arquitectónica</h3>
          <ul>
            <li>Salas de conciertos: Diseño de dimensiones para evitar resonancias indeseadas (frecuencias que se amplifican excesivamente)</li>
            <li>Estudios de grabación: Trampas de graves (bass traps) para absorber resonancias de baja frecuencia</li>
            <li>Auditorios: Cálculo de modos de resonancia de la sala para distribución uniforme del sonido</li>
            <li>Iglesias y catedrales: Resonancia natural que amplifica voces y órganos sin amplificación eléctrica</li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="audio">🔊</span> Tecnología de Audio</h3>
          <ul>
            <li>Altavoces: Cajas diseñadas para resonar a frecuencias específicas (bass reflex, horn-loaded)</li>
            <li>Ecualizadores paramétricos: Ajuste de frecuencias de resonancia para mejorar calidad de sonido</li>
            <li>Filtros acústicos: Resonadores de Helmholtz para absorber frecuencias problemáticas</li>
            <li>Micrófonos de condensador: Diafragma que resuena con ondas sonoras</li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="ingenieria">🏗️</span> Ingeniería y Construcción</h3>
          <ul>
            <li>Puentes: Diseño para evitar resonancia con viento o tráfico (lección del Tacoma Narrows)</li>
            <li>Edificios altos: Amortiguadores de masa sintonizada para contrarrestar resonancia por viento</li>
            <li>Maquinaria industrial: Montajes anti-vibración para evitar resonancia destructiva</li>
            <li>Tuberías: Diseño para evitar resonancia que cause ruido o daño (golpe de ariete)</li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="medicina">🔬</span> Medicina y Diagnóstico</h3>
          <ul>
            <li>Resonancia magnética (MRI): Aunque no es acústica, usa principio similar de resonancia</li>
            <li>Litotripsia: Ondas de choque sintonizadas a frecuencia de resonancia de cálculos renales</li>
            <li>Terapia ultrasónica: Frecuencias de resonancia de tejidos para tratamiento</li>
            <li>Diagnóstico de huesos: Análisis de frecuencias de resonancia para detectar fracturas</li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="telecom">📡</span> Telecomunicaciones</h3>
          <ul>
            <li>Antenas: Diseñadas para resonar a frecuencias específicas de transmisión</li>
            <li>Filtros de radio: Circuitos resonantes que seleccionan frecuencias deseadas</li>
            <li>Cristales de cuarzo: Resuenan a frecuencias precisas para relojes y osciladores</li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="auto">🚗</span> Automoción</h3>
          <ul>
            <li>Silenciadores: Cámaras de resonancia que cancelan frecuencias del motor</li>
            <li>Suspensión: Diseñada para evitar resonancia con irregularidades del camino</li>
            <li>Carrocería: Refuerzos para evitar resonancia que cause ruido o vibración</li>
          </ul>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="energia">⚡</span> Energía y Electrónica</h3>
          <ul>
            <li>Transformadores: Diseño para minimizar resonancia que cause zumbido</li>
            <li>Generadores eólicos: Palas diseñadas para evitar resonancia destructiva</li>
            <li>Circuitos LC: Resonancia eléctrica análoga a resonancia acústica</li>
          </ul>
        </div>
        <div className="theory-section-highlight">
          <p>
            💡 Doble cara de la resonancia: La resonancia puede ser tu mejor aliada (instrumentos musicales, amplificación natural) o tu peor enemiga (puentes colapsando, edificios vibrando). Entender y controlar la resonancia es fundamental en ingeniería, música y arquitectura. Cada objeto tiene su frecuencia natural, y conocerla es la clave para aprovecharla o evitarla.
          </p>
        </div>
      </div>

      {/* 7. HECHOS HISTÓRICOS */}
      <div className="theory-history-section" title="Historia: Descubriendo la resonancia">
        <h2><span role="img" aria-label="historia">📜</span> Historia: Descubriendo la resonancia</h2>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="pitagoras">🎵</span> Pitágoras y las cuerdas vibrantes (s. VI a.C.)</h3>
          <p>
            Pitágoras descubrió que cuerdas con longitudes en proporciones simples (1:2, 2:3, 3:4) producen sonidos armoniosos. Fue el primer estudio de resonancia, aunque no entendía el concepto de frecuencia. Estableció la base matemática de la música occidental.
          </p>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="mersenne">🔬</span> Marin Mersenne y las leyes de las cuerdas (1636)</h3>
          <p>
            El monje francés Marin Mersenne formuló las leyes que relacionan la frecuencia de una cuerda con su longitud, tensión y densidad. Descubrió que:
          </p>
          <ul>
            <li>La frecuencia es inversamente proporcional a la longitud</li>
            <li>La frecuencia es proporcional a la raíz cuadrada de la tensión</li>
            <li>La frecuencia es inversamente proporcional a la raíz cuadrada de la densidad</li>
          </ul>
          <p>
            Estas leyes son la base del diseño de instrumentos de cuerda.
          </p>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="bernoulli">🌊</span> Daniel Bernoulli y los modos de vibración (1753)</h3>
          <p>
            El matemático suizo Daniel Bernoulli demostró que una cuerda puede vibrar en múltiples modos simultáneamente (armónicos). Esto explicó por qué los instrumentos musicales tienen timbres complejos.
          </p>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="fourier">🎼</span> Joseph Fourier y el análisis armónico (1822)</h3>
          <p>
            Joseph Fourier demostró que cualquier vibración periódica puede descomponerse en una suma de ondas sinusoidales simples (serie de Fourier). Esto revolucionó el estudio de la resonancia y permitió analizar matemáticamente el timbre de los instrumentos.
          </p>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="helmholtz">🔊</span> Hermann von Helmholtz y los resonadores (1863)</h3>
          <p>
            El físico alemán Hermann von Helmholtz inventó los resonadores de Helmholtz: esferas huecas con un cuello que resuenan a frecuencias específicas. Los usó para analizar sonidos complejos identificando sus componentes armónicos.
          </p>
          <p>
            Aplicación moderna: Los resonadores de Helmholtz se usan en silenciadores de automóviles y acústica arquitectónica para absorber frecuencias específicas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="sax">🎺</span> Adolphe Sax y el saxofón (1840)</h3>
          <p>
            El belga Adolphe Sax inventó el saxofón combinando principios de resonancia de tubos cónicos (como el oboe) con boquilla de caña simple (como el clarinete). El resultado fue un instrumento con resonancia única que combina características de viento-madera y viento-metal.
          </p>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="sabine">🏛️</span> Wallace Sabine y la resonancia arquitectónica (1900)</h3>
          <p>
            El físico estadounidense Wallace Sabine estudió cómo las salas resuenan a diferentes frecuencias. Descubrió que la forma y materiales de una sala determinan qué frecuencias se amplifican o atenúan. Fundó la acústica arquitectónica moderna.
          </p>
        </div>
      </div>

      {/* 8. DATOS ANECDÓTICOS */}
      <div className="theory-anecdotes-section" title="Anécdotas y casos fascinantes">
        <h2><span role="img" aria-label="anécdotas">✨</span> Anécdotas y curiosidades</h2>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="tacoma">🌉</span> El puente de Tacoma Narrows (1940)</h3>
          <p>
            El 7 de noviembre de 1940, el puente de Tacoma Narrows en Washington colapsó espectacularmente debido a resonancia. Vientos de solo 68 km/h hicieron que el puente oscilara cada vez más hasta destruirse.
          </p>
          <p>
            ¿Qué pasó? El viento creó vórtices que excitaron la frecuencia natural del puente. La resonancia amplificó las oscilaciones hasta que la estructura no pudo soportarlo. Hay video del colapso, uno de los más famosos de la ingeniería.
          </p>
          <p>
            Lección: Los ingenieros ahora diseñan puentes considerando resonancia y aeroelasticidad. Se añaden amortiguadores para evitar oscilaciones.
          </p>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="copa">🍷</span> Romper una copa con la voz</h3>
          <p>
            Es posible romper una copa de cristal cantando su frecuencia de resonancia. ¿Cómo funciona?
          </p>
          <ul>
            <li>Cada copa tiene una frecuencia natural (depende de tamaño, grosor, material)</li>
            <li>Si cantas esa frecuencia exacta con suficiente volumen (100+ dB)</li>
            <li>La copa entra en resonancia y vibra cada vez más</li>
            <li>Las vibraciones exceden la resistencia del cristal y se rompe</li>
          </ul>
          <p>
            Realidad: Es muy difícil sin amplificación. Los cantantes de ópera pueden hacerlo, pero necesitan oído absoluto y potencia vocal excepcional. Más fácil con un altavoz.
          </p>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="guitarra">🎸</span> La "nota del diablo" en guitarras</h3>
          <p>
            Algunas guitarras tienen una "nota muerta" (dead note): una nota específica que suena apagada y sin sustain. ¿Por qué?
          </p>
          <p>
            La frecuencia de esa nota coincide con una frecuencia de resonancia del mástil o cuerpo de la guitarra. En lugar de vibrar la cuerda, la energía se transfiere al mástil por resonancia, matando la nota.
          </p>
          <p>
            Solución: Luthiers ajustan el peso del clavijero o añaden masa al mástil para cambiar su frecuencia de resonancia.
          </p>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="organo">🎺</span> El órgano más grande del mundo</h3>
          <p>
            El órgano de la Boardwalk Hall en Atlantic City tiene tubos de hasta 19.5 metros de largo. El tubo más grande produce 8 Hz (infrasonido), que no se escucha pero se siente vibrar en el pecho.
          </p>
          <p>
            Cálculo: Para un tubo abierto, L = v/(2f) = 343/(2×8) ≈ 21.4 m. El tubo real es más corto porque está parcialmente cerrado.
          </p>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="sanpablo">🏛️</span> El susurro de la Catedral de San Pablo</h3>
          <p>
            En la Galería de los Susurros de la Catedral de San Pablo (Londres), puedes susurrar en un lado de la cúpula circular y escucharse perfectamente a 32 metros de distancia.
          </p>
          <p>
            ¿Cómo? La forma circular crea resonancia. Las ondas sonoras viajan pegadas a la pared curva sin dispersarse, amplificándose por reflexiones múltiples. Es un resonador acústico natural.
          </p>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="stradivarius">🎻</span> El misterio del Stradivarius</h3>
          <p>
            Los violines Stradivarius tienen resonancia excepcional. Análisis modernos muestran que:
          </p>
          <ul>
            <li>La madera tiene densidad óptima (tratamiento químico o edad)</li>
            <li>El grosor de la tapa varía milimétricamente para optimizar resonancia</li>
            <li>Los agujeros en forma de "f" están posicionados para maximizar radiación sonora</li>
            <li>El barniz afecta la amortiguación de vibraciones</li>
          </ul>
          <p>
            Ciencia vs. mito: Estudios ciegos muestran que músicos profesionales no siempre prefieren Stradivarius sobre violines modernos bien hechos. Parte del valor es histórico y psicológico.
          </p>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="helicoptero">🚁</span> Resonancia en helicópteros</h3>
          <p>
            Los helicópteros tienen una frecuencia de resonancia peligrosa llamada "ground resonance". Si las aspas se desbalancean mientras está en tierra, pueden entrar en resonancia con el tren de aterrizaje y destruir el helicóptero en segundos.
          </p>
          <p>
            Prevención: Los pilotos deben despegar o apagar inmediatamente si detectan vibraciones anormales. Los helicópteros modernos tienen amortiguadores especiales.
          </p>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="schumann">🎼</span> La resonancia de Schumann (7.83 Hz)</h3>
          <p>
            La Tierra tiene una frecuencia de resonancia natural de 7.83 Hz, causada por descargas eléctricas (rayos) en la cavidad entre la superficie y la ionosfera. Es como un tubo resonante gigante.
          </p>
          <p>
            Pseudociencia: Algunos afirman que esta frecuencia afecta la salud humana. No hay evidencia científica, pero es un fenómeno real y medible.
          </p>
        </div>
        <div className="theory-subsection">
          <h3><span role="img" aria-label="simpatica">🎵</span> Resonancia simpática en instrumentos</h3>
          <p>
            En una guitarra, si tocas una cuerda, las otras cuerdas vibran ligeramente por resonancia simpática. Esto enriquece el timbre. Algunos instrumentos lo explotan:
          </p>
          <ul>
            <li>Sitar: Tiene 13 cuerdas simpáticas que no se tocan pero resuenan</li>
            <li>Piano: Cuando pisas el pedal, todas las cuerdas pueden resonar</li>
            <li>Viola d'amore: 7 cuerdas tocadas + 7 cuerdas simpáticas</li>
          </ul>
        </div>
        <div className="theory-section-highlight">
          <p>
            💡 Reflexión: La resonancia puede ser hermosa (música, arquitectura) o destructiva (puentes, helicópteros). Entender las frecuencias naturales es crucial en ingeniería, música y diseño. Un mismo principio físico crea sinfonías y derriba puentes.
          </p>
        </div>
      </div>
    </>
  );

export default ResonanciaTheory;
