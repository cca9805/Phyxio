import { TheorySection, Concept, Important, Example, Formula } from '../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Ondas Sonoras",
  descripcion: "Naturaleza, propagación y características de las ondas sonoras",
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const OndasSonorasTheory = ({ exercises }) => (
  <>
    {/* 3. TEORÍA PRINCIPAL */}
    <TheorySection title="¿Qué son las Ondas Sonoras?">
      <Important>
        Las ondas sonoras son ondas mecánicas longitudinales que requieren un medio material para propagarse. No pueden viajar en el vacío.
      </Important>
      <Concept title="Definición y naturaleza">
        <p>
          El sonido es producido por la vibración de un objeto, que genera perturbaciones en el medio circundante. Estas perturbaciones se propagan en forma de ondas, transportando energía pero no materia.
        </p>
      </Concept>
      <Concept title="Ondas Longitudinales">
        <p>
          En las ondas sonoras, las partículas del medio oscilan en la misma dirección en que se propaga la onda. Esto crea regiones de:
        </p>
        <ul>
          <li>Compresión: Zonas donde las partículas están más juntas (mayor presión)</li>
          <li>Rarefacción: Zonas donde las partículas están más separadas (menor presión)</li>
        </ul>
      </Concept>
      <Concept title="Características de las Ondas Sonoras">
        <ul>
          <li>Frecuencia (f): Número de oscilaciones por segundo (Hz)</li>
          <li>Longitud de onda (λ): Distancia entre dos compresiones consecutivas</li>
          <li>Amplitud (A): Máximo desplazamiento de las partículas</li>
          <li>Velocidad (v): Rapidez de propagación de la onda</li>
        </ul>
      </Concept>
    </TheorySection>

    {/* 4. FÓRMULAS Y ASPECTOS CUANTITATIVOS */}
    <TheorySection title="Fórmulas y aspectos cuantitativos de las ondas sonoras">
      <Concept title="Velocidad del sonido en un medio">
        <Formula
          expression={String.raw`v = \sqrt{\frac{B}{\rho}}`}
          calculatorId="ondas_sonoras-velocidad-medio"
          definitions={definitions}
          exercises={exercises}
          complementary={[
            { description: "Calcular Módulo de Compresibilidad (B)", expression: String.raw`B = v^2 \cdot \rho` },
            { description: "Calcular Densidad (ρ)", expression: String.raw`\rho = \frac{B}{v^2}` }
          ]}
        />
        <p><strong>Donde:</strong></p>
        <ul>
          <li>v: Velocidad del sonido (m/s)</li>
          <li>B: Módulo de compresibilidad (Pa)</li>
          <li>ρ: Densidad del medio (kg/m³)</li>
        </ul>
        <Example title="Ejemplo práctico">
          Si el módulo de compresibilidad del aire es 1.42 × 10<sup>5</sup> Pa y la densidad es 1.2 kg/m³, ¿cuál es la velocidad del sonido?
        </Example>
      </Concept>
      <Concept title="Velocidad en diferentes medios">
        <ul>
          <li>Aire (20°C): ≈ 343 m/s</li>
          <li>Agua (25°C): ≈ 1500 m/s</li>
          <li>Acero: ≈ 5000 m/s</li>
          <li>Aluminio: ≈ 6400 m/s</li>
        </ul>
        <Important>
          En general: v<sub>sólidos</sub> &gt; v<sub>líquidos</sub> &gt; v<sub>gases</sub>
        </Important>
      </Concept>
      <Concept title="Velocidad del sonido en aire">
        <Formula
          expression={String.raw`v = 331.4 + 0.6T`}
          calculatorId="ondas_sonoras-velocidad-aire"
          definitions={definitions}
          exercises={exercises}
          complementary={[
            { description: "Calcular Temperatura (T)", expression: String.raw`T = \frac{v - 331.4}{0.6}` }
          ]}
        />
        <p><strong>Donde:</strong></p>
        <ul>
          <li>v: Velocidad del sonido (m/s)</li>
          <li>T: Temperatura (°C)</li>
        </ul>
        <Example title="Ejemplo práctico">
          Si la temperatura es 25°C, ¿cuál es la velocidad del sonido en el aire?
        </Example>
      </Concept>
      <Concept title="Ecuación de ondas">
        <Formula
          expression={String.raw`v = f \lambda`}
          calculatorId="ondas_sonoras-ecuacion-ondas"
          definitions={definitions}
          exercises={exercises}
          complementary={[
            { description: "Calcular Frecuencia (f)", expression: String.raw`f = \frac{v}{\lambda}` },
            { description: "Calcular Longitud de Onda (λ)", expression: String.raw`\lambda = \frac{v}{f}` },
            { description: "Calcular Período (T)", expression: String.raw`T = \frac{1}{f}` }
          ]}
        />
        <p><strong>Donde:</strong></p>
        <ul>
          <li>v: Velocidad de propagación (m/s)</li>
          <li>f: Frecuencia (Hz)</li>
          <li>λ: Longitud de onda (m)</li>
          <li>T: Período (s)</li>
        </ul>
        <Example title="Ejemplo práctico">
          Si una onda tiene una frecuencia de 440 Hz y una longitud de onda de 0.78 m, ¿cuál es su velocidad?
        </Example>
      </Concept>
    </TheorySection>

    {/* 5. OTRAS CONSIDERACIONES (opcional) */}
    <TheorySection title="Rango audible y propagación">
      <Concept title="Clasificación por frecuencia">
        <ul>
          <li>Infrasonido: f &lt; 20 Hz (no audible para humanos)</li>
          <li>Sonido audible: 20 Hz ≤ f ≤ 20,000 Hz</li>
          <li>Ultrasonido: f &gt; 20,000 Hz (no audible para humanos)</li>
        </ul>
        <Important>
          El rango audible varía con la edad y entre especies. Algunos animales pueden detectar infrasonidos (elefantes) o ultrasonidos (murciélagos, delfines).
        </Important>
      </Concept>
      <Concept title="Medios de propagación">
        <p>
          El sonido requiere un medio material para propagarse:
        </p>
        <ul>
          <li>Gases: Propagación más lenta, mayor atenuación</li>
          <li>Líquidos: Propagación más rápida que en gases</li>
          <li>Sólidos: Propagación más rápida, menor atenuación</li>
        </ul>
      </Concept>
      <Concept title="Factores que afectan la propagación">
        <ul>
          <li>Temperatura: Mayor temperatura → mayor velocidad</li>
          <li>Densidad: Afecta la velocidad según el medio</li>
          <li>Elasticidad: Mayor elasticidad → mayor velocidad</li>
          <li>Humedad: En aire, mayor humedad → mayor velocidad</li>
        </ul>
      </Concept>
    </TheorySection>

    {/* 6. APLICACIONES */}
    <div className="theory-applications-section" title="Aplicaciones en la vida real">
      <h2><span role="img" aria-label="aplicaciones">🌍</span> Aplicaciones en la vida real</h2>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="medicina">🏥</span> Medicina y Salud</h3>
        <ul>
          <li>Ecografías (ultrasonido): Imágenes del feto durante el embarazo, diagnóstico de órganos internos sin radiación</li>
          <li>Litotripsia: Destrucción de cálculos renales usando ondas de choque sonoras</li>
          <li>Fisioterapia: Tratamiento de lesiones musculares con ultrasonido terapéutico</li>
          <li>Limpieza dental: Eliminación de sarro usando vibraciones ultrasónicas</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="industria">🏭</span> Industria y Tecnología</h3>
        <ul>
          <li>Ensayos no destructivos: Detección de grietas y fallas internas en materiales (aviones, puentes, tuberías) sin dañarlos</li>
          <li>Limpieza ultrasónica: Limpieza profunda de joyas, instrumental médico, componentes electrónicos</li>
          <li>Soldadura ultrasónica: Unión de plásticos y metales sin calor externo</li>
          <li>Medición de nivel: Sensores de nivel en tanques de líquidos y silos</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="navegacion">🌊</span> Navegación y Exploración</h3>
        <ul>
          <li>Sonar: Detección de submarinos, mapeo del fondo marino, localización de bancos de peces</li>
          <li>Ecosonda: Medición de profundidad en navegación marítima</li>
          <li>Ecolocalización: Murciélagos y delfines usan ondas sonoras para navegar y cazar</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="comunicacion">📱</span> Comunicación y Audio</h3>
        <ul>
          <li>Telefonía: Conversión de voz en señales eléctricas y viceversa</li>
          <li>Altavoces y micrófonos: Reproducción y captura de sonido en dispositivos electrónicos</li>
          <li>Cancelación de ruido: Auriculares que generan ondas inversas para eliminar ruido ambiental</li>
          <li>Asistentes de voz: Alexa, Siri, Google Assistant reconocen patrones de ondas sonoras</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="musica">🎵</span> Música y Entretenimiento</h3>
        <ul>
          <li>Instrumentos musicales: Todos producen sonido mediante vibración de cuerdas, columnas de aire o membranas</li>
          <li>Estudios de grabación: Diseño acústico para capturar y reproducir sonido con alta fidelidad</li>
          <li>Cines y teatros: Sistemas de sonido envolvente (Dolby Atmos) usando múltiples fuentes de ondas</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="auto">🚗</span> Automoción</h3>
        <ul>
          <li>Sensores de aparcamiento: Detectan obstáculos usando ondas ultrasónicas</li>
          <li>Control de ruido: Diseño de silenciadores y aislamiento acústico en vehículos</li>
          <li>Alarmas: Sistemas de seguridad que emiten ondas sonoras de alta intensidad</li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="investigacion">🔬</span> Investigación Científica</h3>
        <ul>
          <li>Sismología: Estudio de terremotos mediante ondas sísmicas (ondas sonoras en la Tierra)</li>
          <li>Acústica submarina: Estudio de comunicación de ballenas y delfines</li>
          <li>Meteorología: Detección de tornados usando ondas infrasónicas</li>
        </ul>
      </div>
      <div className="theory-section-highlight">
        <p>
          💡 Impacto en la vida cotidiana: Las ondas sonoras están presentes en prácticamente 
          todo lo que hacemos: desde la alarma que te despierta, pasando por las conversaciones, la música 
          que escuchas, hasta la ecografía que permite ver a un bebé antes de nacer. Entender las ondas 
          sonoras es entender cómo nos comunicamos con el mundo.
        </p>
      </div>
    </div>

    {/* 7. HECHOS HISTÓRICOS */}
    <div className="theory-history-section" title="Historia: Entendiendo el sonido">
      <h2><span role="img" aria-label="historia">📜</span> Historia: Entendiendo el sonido</h2>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="pitagoras">🏛️</span> Pitágoras (s. VI a.C.)</h3>
        <p>
          El filósofo griego Pitágoras fue el primero en estudiar el sonido 
          científicamente. Descubrió que las cuerdas vibrantes producen sonidos armoniosos 
          cuando sus longitudes están en proporciones simples (1:2, 2:3, 3:4). Fundó la 
          relación entre matemáticas y música.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="galileo">🔬</span> Galileo Galilei (1638)</h3>
        <p>
          Galileo fue el primero en relacionar la frecuencia de vibración 
          con el tono del sonido. Observó que una cuerda vibrando más rápido produce un 
          sonido más agudo. Estableció que el sonido es una vibración.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="boyle">🌊</span> Robert Boyle (1660)</h3>
        <p>
          El científico irlandés Robert Boyle demostró que el sonido no 
          puede propagarse en el vacío. Colocó una campana dentro de una campana de vidrio 
          y extrajo el aire con una bomba. La campana dejó de escucharse, demostrando que 
          el sonido necesita un medio material.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="mersenne">📏</span> Marin Mersenne (1636)</h3>
        <p>
          El monje francés realizó la primera medición precisa de la velocidad del 
          sonido usando ecos. Obtuvo 316 m/s, muy cercano al valor real de 343 m/s.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="chladni">🎵</span> Ernst Chladni (1787)</h3>
        <p>
          El físico alemán Ernst Chladni visualizó las ondas sonoras usando 
          placas metálicas con arena. Al hacer vibrar las placas con un arco de violín, la 
          arena formaba patrones geométricos (figuras de Chladni) que mostraban los nodos y 
          antinodos de las ondas. Fue el "padre de la acústica".
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="teoria-ondulatoria">🌊</span> Teoría ondulatoria (s. XIX)</h3>
        <p>
          En el siglo XIX, científicos como Augustin-Jean Fresnel y 
          Thomas Young consolidaron la teoría ondulatoria del sonido, 
          demostrando que el sonido es una onda mecánica longitudinal.
        </p>
      </div>
    </div>

    {/* 8. DATOS ANECDÓTICOS */}
    <div className="theory-anecdotes-section" title="Anécdotas y casos fascinantes">
      <h2><span role="img" aria-label="anécdotas">✨</span> Fenómenos fascinantes del sonido</h2>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="espacio">🌌</span> El sonido en el espacio: El silencio absoluto</h3>
        <p>
          En las películas de ciencia ficción, las explosiones en el espacio hacen ruido. 
          En realidad, el espacio es completamente silencioso. No hay aire 
          ni ningún medio, por lo que las ondas sonoras no pueden propagarse. Los astronautas 
          se comunican por radio (ondas electromagnéticas que sí viajan en el vacío).
        </p>
        <p>
          Curiosidad: En 2003, la NASA "escuchó" un agujero negro usando 
          ondas de presión en gas intergaláctico. El tono era 57 octavas por debajo del Do 
          central, ¡el sonido más grave jamás detectado!
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="ballena">🐋</span> Las ballenas y el sonido submarino</h3>
        <p>
          Las ballenas azules pueden comunicarse a más de 1,600 km de distancia 
          bajo el agua. ¿Cómo? El sonido viaja 4.3 veces más rápido en agua (1,480 m/s) que 
          en aire, y hay menos atenuación. Usan frecuencias muy bajas (10-40 Hz) que viajan 
          enormes distancias.
        </p>
        <p>
          Problema moderno: El ruido de barcos y sonar militar interfiere con 
          su comunicación, desorientando a las ballenas.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="alpes">🏔️</span> El eco más famoso: Los Alpes</h3>
        <p>
          En los Alpes suizos hay lugares donde un grito puede producir hasta 7 ecos 
          sucesivos, rebotando entre montañas. Los pastores alpinos desarrollaron el 
          "yodel" (canto tirolés) específicamente para comunicarse entre valles usando estos ecos.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="guitarra">🎸</span> La guitarra que se afina sola</h3>
        <p>
          Las cuerdas de una guitarra pueden hacer vibrar otras cuerdas por resonancia. 
          Si tocas una cuerda, las cuerdas afinadas en armónicos de esa nota vibrarán 
          "simpáticamente" sin tocarlas. Los luthiers usan esto para verificar la calidad 
          del instrumento.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="solidos">🌊</span> El sonido viaja más rápido en sólidos</h3>
        <p>
          Si pones tu oído en una vía de tren, puedes escuchar el tren mucho antes 
          que por el aire. El sonido viaja a 5,960 m/s en acero (17 veces más rápido que en aire). 
          Los nativos americanos usaban este principio poniendo el oído en el suelo para detectar 
          bisontes o caballos a kilómetros de distancia.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="grito">🔊</span> El grito más fuerte del mundo</h3>
        <p>
          El récord Guinness del grito más fuerte es de 129 dB, logrado por 
          Jill Drake en 2000. Es más fuerte que un martillo neumático (120 dB) y cercano al 
          umbral de dolor (130 dB). ¿Cómo? Técnica vocal específica y resonancia de cavidades.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="auditorio">🎭</span> El "punto dulce" de los auditorios</h3>
        <p>
          En algunos auditorios hay un "punto dulce" donde la acústica es 
          perfecta. Las ondas reflejadas de paredes y techo llegan en fase con el sonido 
          directo, creando interferencia constructiva. Los arquitectos calculan estos puntos 
          para ubicar los asientos VIP.
        </p>
      </div>
      <div className="theory-subsection">
        <h3><span role="img" aria-label="grillo">🦗</span> Grillos y temperatura</h3>
        <p>
          Puedes calcular la temperatura ambiente contando los chirridos de un grillo. La 
          frecuencia de vibración de sus alas depende de la temperatura. Fórmula: 
          T(°C) = (chirridos por minuto / 7) + 5. Funciona porque las 
          reacciones químicas en sus músculos son más rápidas con calor.
        </p>
        <div className="theory-section-highlight">
          <p>
            💡 Reflexión: Las ondas sonoras son mucho más que física abstracta. 
            Desde ballenas comunicándose a través de océanos hasta grillos midiendo la temperatura, 
            desde ecos alpinos hasta el silencio del espacio, el sonido da forma a cómo los seres 
            vivos interactúan con su entorno.
          </p>
        </div>
      </div>
    </div>

    {/* 9. RESUMEN */}
    <TheorySection className="theory-summary-section">
      <h2><span role="img" aria-label="resumen">📝</span> Resumen</h2>
      <ul>
        <li>Las ondas sonoras son ondas mecánicas longitudinales que requieren un medio material para propagarse.</li>
        <li>El sonido se produce por vibraciones y se transmite mediante compresiones y rarefacciones.</li>
        <li>La velocidad del sonido depende del medio y la temperatura.</li>
        <li>El rango audible humano es de 20 Hz a 20,000 Hz.</li>
        <li>El sonido tiene aplicaciones en medicina, industria, comunicación, música y ciencia.</li>
        <li>Fenómenos como el eco, la resonancia y la interferencia muestran la riqueza de la acústica.</li>
      </ul>
      <p><strong>Conclusión:</strong> Comprender las ondas sonoras es fundamental para entender la comunicación, la música, la tecnología y la naturaleza.</p>
    </TheorySection>
  </>
);

export default OndasSonorasTheory;
