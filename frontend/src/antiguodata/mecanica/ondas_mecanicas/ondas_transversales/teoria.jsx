import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Ondas Transversales",
  descripcion: "Ondas con oscilación perpendicular a la propagación",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a las Ondas Transversales">
        <p>
          En las ondas transversales, las partículas del medio oscilan perpendicularmente 
          a la dirección de propagación de la onda. La perturbación se mueve en una dirección mientras las 
          partículas se mueven arriba y abajo (o lado a lado).
        </p>
        <Important>
          <p>
            No confundir la velocidad de propagación de la onda con la velocidad de oscilación de las partículas. 
            Son dos movimientos diferentes.
          </p>
        </Important>
        <Example>
          <p>
            Ejemplos de ondas transversales: ondas en cuerdas, ondas electromagnéticas, ondas en la superficie del agua, 
            ondas sísmicas tipo S.
          </p>
        </Example>
      </TheorySection>

      <TheorySection title="Velocidad en una Cuerda Tensa">
        <Concept title="Propagación en Cuerdas">
          <p>
            La velocidad de propagación de una onda transversal en una cuerda depende de dos factores: 
            la tensión en la cuerda y su densidad lineal de masa.
          </p>
          <Formula
            expression={String.raw`v = \sqrt{\frac{T}{\mu}}`}
            calculatorId="ondas-trans-cuerda"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Tensión", expression: String.raw`T = \mu v^2` },
              { description: "Calcular Densidad lineal", expression: String.raw`\mu = \frac{T}{v^2}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>v: Velocidad de propagación (m/s)</li>
            <li>T: Tensión en la cuerda (N)</li>
            <li>μ: Densidad lineal de masa (kg/m)</li>
          </ul>

          <p>
            La densidad lineal μ = m/L, donde m es la masa y L la longitud de la cuerda.
          </p>

          <Example>
            <p>
              Una cuerda de guitarra con μ = 0.001 kg/m bajo una tensión de 100 N transmite ondas a 
              v = √(100/0.001) ≈ 316 m/s.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Velocidad de las Partículas">
        <Concept title="Velocidad Transversal">
          <p>
            Las partículas del medio oscilan con un movimiento armónico simple. La velocidad máxima 
            de oscilación de una partícula depende de la amplitud y la frecuencia angular de la onda.
          </p>
          <Formula
            expression={String.raw`v_{max} = A \omega`}
            calculatorId="ondas-trans-velocidad-particula"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Amplitud", expression: String.raw`A = \frac{v_{max}}{\omega}` },
              { description: "Calcular Frecuencia angular", expression: String.raw`\omega = \frac{v_{max}}{A}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>vmax: Velocidad máxima de la partícula (m/s)</li>
            <li>A: Amplitud (m)</li>
            <li>ω: Frecuencia angular (rad/s)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Aceleración de las Partículas">
        <Concept title="Aceleración Transversal">
          <p>
            La aceleración máxima de las partículas en su movimiento oscilatorio es proporcional 
            al cuadrado de la frecuencia angular.
          </p>
          <Formula
            expression={String.raw`a_{max} = A \omega^2`}
            calculatorId="ondas-trans-aceleracion"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Amplitud", expression: String.raw`A = \frac{a_{max}}{\omega^2}` },
              { description: "Calcular Frecuencia angular", expression: String.raw`\omega = \sqrt{\frac{a_{max}}{A}}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>amax: Aceleración máxima (m/s²)</li>
            <li>A: Amplitud (m)</li>
            <li>ω: Frecuencia angular (rad/s)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Polarización de Ondas Transversales">
        <Concept title="¿Qué es la Polarización?">
          <p>
            La polarización es una propiedad exclusiva de las ondas transversales. Describe la dirección 
            en la que oscilan las partículas del medio (o el campo eléctrico en ondas electromagnéticas) 
            perpendicular a la dirección de propagación.
          </p>
          <p>
            Una onda está polarizada linealmente cuando todas las partículas oscilan en el mismo plano. 
            Si la dirección de oscilación cambia aleatoriamente, la onda está no polarizada. Las ondas 
            longitudinales no pueden polarizarse porque las partículas solo oscilan en la dirección de propagación.
          </p>
          <Important>
            <p>
              La luz natural (del Sol) está no polarizada, pero puede polarizarse al reflejarse en superficies 
              o al pasar por filtros polarizadores. Las gafas de sol polarizadas bloquean la luz reflejada 
              horizontalmente, reduciendo el deslumbramiento.
            </p>
          </Important>
          <Example>
            <p>
              Aplicaciones de la polarización: gafas de sol polarizadas, pantallas LCD, fotografía (filtros 
              polarizadores), análisis de tensiones en materiales transparentes, comunicaciones ópticas, 
              estudios astronómicos.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Ondas Electromagnéticas">
        <Concept title="Naturaleza Transversal de la Luz">
          <p>
            Las ondas electromagnéticas (luz, radio, microondas, rayos X) son ondas transversales donde 
            los campos eléctrico y magnético oscilan perpendicularmente entre sí y perpendiculares a la 
            dirección de propagación. A diferencia de las ondas mecánicas, no necesitan un medio material 
            y viajan a la velocidad de la luz en el vacío (c ≈ 3×10⁸ m/s).
          </p>
          <p>
            El espectro electromagnético abarca desde ondas de radio (longitudes de onda de kilómetros) 
            hasta rayos gamma (longitudes de onda menores que átomos). Todas son ondas transversales y 
            viajan a la misma velocidad en el vacío, diferenciándose solo en frecuencia y longitud de onda.
          </p>
          <Important>
            <p>
              La luz visible es solo una pequeña fracción del espectro electromagnético (400-700 nm). 
              Nuestros ojos evolucionaron para detectar esta región porque es donde el Sol emite más energía 
              y donde la atmósfera es más transparente.
            </p>
          </Important>
          <Example>
            <p>
              Espectro electromagnético (de menor a mayor frecuencia): ondas de radio, microondas, infrarrojo, 
              luz visible, ultravioleta, rayos X, rayos gamma. Cada tipo tiene aplicaciones específicas: 
              comunicaciones, cocina, visión térmica, fotografía, esterilización, diagnóstico médico, 
              tratamiento de cáncer.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Ondas Sísmicas S (Secundarias)">
        <Concept title="Ondas de Corte en la Tierra">
          <p>
            Las ondas sísmicas S (secundarias o de corte) son ondas transversales que se propagan a través 
            de la Tierra durante un terremoto. Las partículas del suelo oscilan perpendicularmente a la 
            dirección de propagación de la onda. Son más lentas que las ondas P (longitudinales), viajando 
            a velocidades de 3-5 km/s en la corteza terrestre.
          </p>
          <p>
            Una característica crucial de las ondas S es que no pueden propagarse a través de líquidos, 
            solo a través de sólidos. Esta propiedad permitió a los sismólogos descubrir que el núcleo 
            externo de la Tierra es líquido: las ondas S desaparecen al llegar al núcleo, creando una 
            "zona de sombra" donde no se detectan.
          </p>
          <Important>
            <p>
              Las ondas S causan más daño estructural que las ondas P porque producen movimientos de corte 
              (cizallamiento) que los edificios soportan peor. Llegan después de las ondas P, dando segundos 
              preciosos de advertencia en sistemas de alerta temprana de terremotos.
            </p>
          </Important>
          <Example>
            <p>
              En el terremoto de México de 1985, las ondas S causaron la mayor parte del daño estructural. 
              La diferencia de tiempo entre la llegada de ondas P y S permite calcular la distancia al 
              epicentro: cada segundo de diferencia representa aproximadamente 8 km de distancia.
            </p>
          </Example>
        </Concept>
      </TheorySection>


      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones de las Ondas Transversales
        </h2>
        
        <div className="theory-subsection">
          <h3>🎸 Instrumentos Musicales de Cuerda</h3>
          <p>
            Guitarras, violines, pianos y arpas generan sonido mediante ondas transversales en cuerdas. 
            La frecuencia fundamental depende de la tensión, longitud y densidad lineal de la cuerda 
            (f = v/2L = (1/2L)√(T/μ)). Los músicos afinan instrumentos ajustando la tensión de las cuerdas.
          </p>
          <p>
            Las cuerdas más gruesas (mayor μ) producen notas más graves, mientras que mayor tensión produce 
            notas más agudas. Los trastes en guitarras acortan la longitud efectiva de la cuerda, aumentando 
            la frecuencia. Las cajas de resonancia amplifican el sonido mediante resonancia acústica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📡 Comunicaciones Inalámbricas</h3>
          <p>
            Las ondas electromagnéticas (transversales) son la base de todas las comunicaciones inalámbricas: 
            radio, televisión, telefonía móvil, WiFi, Bluetooth, GPS y satélites. Cada tecnología usa 
            diferentes frecuencias del espectro electromagnético optimizadas para su aplicación.
          </p>
          <p>
            Las ondas de radio FM (88-108 MHz) viajan largas distancias y atraviesan obstáculos. El WiFi 
            (2.4 y 5 GHz) ofrece mayor ancho de banda pero menor alcance. Los satélites usan microondas 
            (1-40 GHz) que penetran la atmósfera con mínima atenuación. La fibra óptica usa luz infrarroja 
            para transmitir datos a velocidades de terabits por segundo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Microscopía y Diagnóstico Médico</h3>
          <p>
            Los rayos X (ondas electromagnéticas transversales de alta frecuencia) penetran tejidos blandos 
            pero son absorbidos por huesos y metales, creando imágenes médicas. La tomografía computarizada 
            (CT) usa múltiples rayos X desde diferentes ángulos para crear imágenes 3D detalladas.
          </p>
          <p>
            La resonancia magnética (MRI) usa ondas de radio para excitar átomos de hidrógeno en el cuerpo, 
            generando imágenes de tejidos blandos sin radiación ionizante. Los microscopios electrónicos 
            usan ondas de electrones (que tienen propiedades ondulatorias transversales) para visualizar 
            estructuras a escala nanométrica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌊 Detección de Terremotos y Estructura Terrestre</h3>
          <p>
            Las ondas sísmicas S (transversales) son fundamentales en sismología. Su incapacidad para 
            atravesar líquidos reveló que el núcleo externo de la Tierra es líquido. Los sismógrafos 
            detectan ondas S para determinar la magnitud, ubicación y profundidad de terremotos.
          </p>
          <p>
            Los sistemas de alerta temprana de terremotos detectan las ondas P (más rápidas) y envían 
            alertas antes de que lleguen las ondas S (más destructivas), dando segundos o minutos para 
            tomar medidas de seguridad. Japón y México tienen sistemas avanzados que detienen trenes y 
            cierran válvulas de gas automáticamente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎬 Tecnología de Pantallas y Proyección</h3>
          <p>
            Las pantallas LCD usan filtros polarizadores para controlar la luz (onda transversal). Cada 
            píxel tiene cristales líquidos que rotan la polarización de la luz, permitiendo que pase o 
            sea bloqueada. Las gafas 3D pasivas usan polarización: cada lente filtra luz polarizada en 
            direcciones perpendiculares, enviando imágenes diferentes a cada ojo.
          </p>
          <p>
            Los proyectores de cine IMAX usan polarización para crear efectos 3D. Las pantallas OLED 
            emiten luz polarizada directamente, eliminando la necesidad de retroiluminación. La tecnología 
            de realidad virtual usa pantallas de alta frecuencia de refresco para minimizar el mareo por 
            movimiento.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>☀️ Energía Solar y Fotovoltaica</h3>
          <p>
            Los paneles solares convierten luz (ondas electromagnéticas transversales) en electricidad 
            mediante el efecto fotoeléctrico. Los fotones de luz excitan electrones en materiales 
            semiconductores (típicamente silicio), generando corriente eléctrica. La eficiencia depende 
            de la frecuencia de la luz: luz azul y UV son más energéticas que luz roja.
          </p>
          <p>
            Los paneles solares modernos alcanzan eficiencias del 20-25%, convirtiendo una cuarta parte 
            de la energía solar en electricidad. Los concentradores solares usan espejos para enfocar luz 
            en células de alta eficiencia. La energía solar es la fuente de energía renovable de más 
            rápido crecimiento, con costos que han caído 90% en la última década.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔭 Astronomía y Exploración Espacial</h3>
          <p>
            Los telescopios detectan ondas electromagnéticas transversales de objetos celestes en todo el 
            espectro: radio, infrarrojo, visible, ultravioleta, rayos X y gamma. Cada rango revela 
            diferentes fenómenos: radio (púlsares, agujeros negros), infrarrojo (estrellas nacientes), 
            visible (galaxias), rayos X (agujeros negros activos).
          </p>
          <p>
            El telescopio espacial James Webb observa en infrarrojo, detectando las primeras galaxias del 
            universo cuya luz se ha desplazado al rojo por la expansión cósmica. Los radiotelescopios como 
            ALMA estudian nubes moleculares donde nacen estrellas. La polarización de la luz estelar revela 
            campos magnéticos en el espacio interestelar.
          </p>
        </div>
      </div>


      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia de las Ondas Transversales
        </h2>
        
        <div className="theory-subsection">
          <h3>🎵 Pitágoras y las Cuerdas Vibrantes (siglo VI a.C.)</h3>
          <p>
            Pitágoras descubrió que cuerdas con longitudes en proporciones simples (1:2, 2:3, 3:4) producen 
            intervalos musicales armoniosos (octava, quinta, cuarta). Aunque no comprendía que eran ondas 
            transversales, estableció las bases matemáticas de la acústica musical y la relación entre 
            física y música.
          </p>
          <p>
            La leyenda cuenta que Pitágoras descubrió esto al escuchar martillos de diferentes pesos 
            golpeando yunques, produciendo sonidos armoniosos. Aunque la historia es probablemente apócrifa, 
            sus experimentos con cuerdas tensadas fueron reales y revolucionarios para su época.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌊 Robert Hooke y la Naturaleza de la Luz (1665)</h3>
          <p>
            Robert Hooke propuso que la luz era una onda transversal, anticipándose a la teoría ondulatoria 
            de la luz. En su obra "Micrographia" (1665), describió la luz como "pulsos" que se propagan 
            perpendicularmente a su dirección de viaje, similar a ondas en agua.
          </p>
          <p>
            Hooke también estudió la polarización de la luz al observar cristales birrefringentes (que 
            dividen la luz en dos rayos polarizados perpendicularmente). Sus ideas fueron eclipsadas por 
            la teoría corpuscular de Newton, pero fueron reivindicadas en el siglo XIX.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Thomas Young y la Interferencia de la Luz (1801)</h3>
          <p>
            Thomas Young demostró la naturaleza ondulatoria de la luz con su famoso experimento de la doble 
            rendija (1801). La luz que pasa por dos rendijas crea un patrón de interferencia (franjas 
            brillantes y oscuras), fenómeno imposible de explicar con partículas pero natural para ondas.
          </p>
          <p>
            Young también explicó la polarización de la luz, proponiendo que las ondas luminosas son 
            transversales, no longitudinales como se creía. Este fue un avance conceptual crucial que 
            diferenciaba la luz del sonido. Su trabajo enfrentó fuerte oposición de seguidores de Newton, 
            pero eventualmente fue aceptado.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ James Clerk Maxwell y las Ondas Electromagnéticas (1865)</h3>
          <p>
            James Clerk Maxwell unificó electricidad, magnetismo y luz en sus ecuaciones del electromagnetismo 
            (1865). Predijo que las ondas electromagnéticas son transversales, con campos eléctrico y 
            magnético oscilando perpendicularmente entre sí y a la dirección de propagación. Calculó que 
            viajan a la velocidad de la luz, concluyendo que la luz es una onda electromagnética.
          </p>
          <p>
            Heinrich Hertz verificó experimentalmente las predicciones de Maxwell en 1887, generando y 
            detectando ondas de radio. Demostró que tienen las mismas propiedades que la luz: reflexión, 
            refracción, interferencia y polarización. Este descubrimiento revolucionó las comunicaciones 
            y confirmó la naturaleza transversal de todas las ondas electromagnéticas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌍 Richard Dixon Oldham y las Ondas Sísmicas S (1906)</h3>
          <p>
            Richard Dixon Oldham identificó por primera vez las ondas sísmicas S (secundarias, transversales) 
            en 1906, distinguiéndolas de las ondas P (primarias, longitudinales). Observó que las ondas S 
            no atraviesan el núcleo terrestre, concluyendo que el núcleo debe ser líquido, ya que las ondas 
            transversales no se propagan en líquidos.
          </p>
          <p>
            Este descubrimiento revolucionó la geofísica, revelando la estructura interna de la Tierra sin 
            necesidad de perforarla. Inge Lehmann (1936) refinó este modelo descubriendo el núcleo interno 
            sólido al detectar ondas P reflejadas inesperadamente. Las ondas sísmicas siguen siendo la 
            principal herramienta para estudiar el interior terrestre.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📺 Desarrollo de Tecnologías de Polarización (1928-1938)</h3>
          <p>
            Edwin Land inventó el filtro polarizador sintético (Polaroid) en 1928, revolucionando la óptica. 
            Antes, los filtros polarizadores eran cristales naturales caros y frágiles. El Polaroid usaba 
            moléculas alineadas en plástico para absorber luz polarizada en una dirección, siendo económico 
            y duradero.
          </p>
          <p>
            Esta invención hizo posibles las gafas de sol polarizadas (1936), reduciendo el deslumbramiento 
            al bloquear luz reflejada horizontalmente. En 1938, Land demostró el cine 3D usando polarización, 
            donde cada ojo ve una imagen diferente a través de filtros polarizadores perpendiculares. Hoy, 
            la polarización es esencial en pantallas LCD, fotografía y análisis de materiales.
          </p>
        </div>
      </div>


      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y Curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🎸 La Cuerda de Guitarra Más Rápida</h3>
          <p>
            Las cuerdas de guitarra eléctrica pueden vibrar a frecuencias superiores a 1000 Hz, con ondas 
            transversales viajando a más de 400 m/s. La cuerda más aguda (mi) de una guitarra eléctrica 
            tiene una densidad lineal de solo 0.0001 kg/m y puede soportar tensiones de hasta 80 N sin 
            romperse.
          </p>
          <p>
            Eddie Van Halen revolucionó la guitarra eléctrica con su técnica de "tapping", golpeando las 
            cuerdas en el mástil para crear ondas transversales desde múltiples puntos simultáneamente. 
            Esto genera armónicos complejos imposibles de lograr con técnicas tradicionales, creando su 
            sonido característico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌈 El Cielo Azul y los Atardeceres Rojos</h3>
          <p>
            El cielo es azul debido a la dispersión de Rayleigh: las ondas electromagnéticas transversales 
            de luz azul (longitud de onda corta) se dispersan más que la luz roja (longitud de onda larga) 
            al interactuar con moléculas de aire. La luz azul se dispersa en todas direcciones, llenando 
            el cielo.
          </p>
          <p>
            Al atardecer, la luz solar atraviesa más atmósfera. La luz azul se dispersa completamente, 
            dejando solo luz roja y naranja que llega directamente a nuestros ojos. En Marte, el cielo es 
            rojizo durante el día y azul al atardecer, exactamente lo opuesto a la Tierra, debido a las 
            diferentes propiedades de su atmósfera y polvo en suspensión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🐝 Las Abejas Ven la Polarización</h3>
          <p>
            Las abejas pueden detectar la polarización de la luz (propiedad de ondas transversales), 
            usándola como brújula para navegar. La luz del cielo está parcialmente polarizada en patrones 
            que dependen de la posición del Sol. Las abejas tienen fotorreceptores especializados en sus 
            ojos que detectan la dirección de polarización.
          </p>
          <p>
            Incluso en días nublados, cuando el Sol no es visible, las abejas pueden navegar usando la 
            polarización de la luz que penetra las nubes. Esta habilidad es tan precisa que pueden 
            comunicar la ubicación de flores a otras abejas con errores menores a 5 grados. Algunos pájaros 
            migratorios también usan polarización para orientarse durante vuelos de miles de kilómetros.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📡 El Mensaje de Arecibo</h3>
          <p>
            En 1974, el radiotelescopio de Arecibo transmitió un mensaje hacia el cúmulo globular M13 
            usando ondas de radio (electromagnéticas transversales) a 2380 MHz. El mensaje contenía 
            información sobre la humanidad, el ADN, el sistema solar y el propio telescopio, codificada 
            en 1679 bits (producto de dos primos: 23×73).
          </p>
          <p>
            El mensaje viaja a la velocidad de la luz y tardará 25,000 años en llegar a M13. Una respuesta 
            tardaría otros 25,000 años en regresar. Aunque es principalmente simbólico, demuestra nuestra 
            capacidad de enviar información a través del espacio usando ondas transversales. El telescopio 
            de Arecibo colapsó en 2020, terminando 57 años de descubrimientos científicos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌊 El Terremoto que Cambió la Rotación de la Tierra</h3>
          <p>
            El terremoto de Japón de 2011 (magnitud 9.1) fue tan poderoso que las ondas sísmicas S 
            (transversales) redistribuyeron masa en la Tierra, acortando el día en 1.8 microsegundos y 
            desplazando el eje de rotación terrestre 17 cm. El terremoto liberó energía equivalente a 
            9,320 gigatoneladas de TNT.
          </p>
          <p>
            Las ondas sísmicas S viajaron por toda la Tierra, detectadas por sismógrafos globalmente. 
            El tsunami resultante viajó a 800 km/h en aguas profundas, alcanzando alturas de 40 metros 
            en la costa. Los sistemas de alerta temprana detectaron las ondas P y enviaron alertas, 
            salvando miles de vidas al dar minutos de advertencia antes de que llegaran las ondas S más 
            destructivas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 El Experimento Más Hermoso de la Física</h3>
          <p>
            El experimento de la doble rendija de Young (1801) fue votado como "el experimento más hermoso 
            de la física" en una encuesta de Physics World (2002). Demuestra la naturaleza ondulatoria 
            transversal de la luz de manera elegante y visual: luz pasando por dos rendijas crea un patrón 
            de interferencia de franjas brillantes y oscuras.
          </p>
          <p>
            Lo más sorprendente es que el experimento funciona incluso enviando fotones individuales uno 
            por uno. Cada fotón "interfiere consigo mismo", pasando por ambas rendijas simultáneamente 
            (superposición cuántica). Cuando se intenta observar por cuál rendija pasa, el patrón de 
            interferencia desaparece. Este experimento revela la dualidad onda-partícula y el papel del 
            observador en mecánica cuántica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎻 El Violín Stradivarius</h3>
          <p>
            Los violines Stradivarius (fabricados por Antonio Stradivari en los siglos XVII-XVIII) son 
            legendarios por su sonido único. Las ondas transversales en sus cuerdas se transmiten a la 
            caja de resonancia con eficiencia excepcional. Estudios modernos sugieren que la madera fue 
            tratada con minerales que alteraron su densidad y elasticidad.
          </p>
          <p>
            Un Stradivarius puede costar más de 15 millones de dólares. Solo sobreviven 650 de los 1,100 
            instrumentos que Stradivari fabricó. Análisis con tomografía computarizada y espectrometría 
            revelan que la madera tiene propiedades únicas, posiblemente debido al clima frío de la "Pequeña 
            Edad de Hielo" que produjo madera más densa. Sin embargo, pruebas a ciegas muestran que músicos 
            profesionales no siempre pueden distinguir un Stradivarius de violines modernos de alta calidad.
          </p>
        </div>
      </div>


      <TheorySection title="Resumen">
        <Concept>
          <p>
            Las ondas transversales son perturbaciones donde las partículas del medio oscilan perpendicularmente 
            a la dirección de propagación. Ejemplos incluyen ondas en cuerdas, ondas electromagnéticas, ondas 
            en la superficie del agua y ondas sísmicas tipo S. A diferencia de las ondas longitudinales, las 
            ondas transversales pueden polarizarse.
          </p>
          <p>
            La velocidad de propagación en una cuerda tensa depende de la tensión y la densidad lineal 
            (v = √(T/μ)). Las partículas del medio oscilan con movimiento armónico simple, con velocidad 
            máxima vmax = Aω y aceleración máxima amax = Aω², donde A es la amplitud y ω la frecuencia angular.
          </p>
          <p>
            La polarización es una propiedad exclusiva de ondas transversales que describe la dirección de 
            oscilación perpendicular a la propagación. Las ondas electromagnéticas son transversales con 
            campos eléctrico y magnético oscilando perpendicularmente entre sí. Las ondas sísmicas S son 
            transversales y no pueden atravesar líquidos, revelando que el núcleo externo terrestre es líquido.
          </p>
          <p>
            Las aplicaciones de las ondas transversales son extraordinariamente diversas: desde instrumentos 
            musicales hasta comunicaciones inalámbricas, diagnóstico médico, detección de terremotos, 
            tecnología de pantallas, energía solar y astronomía. Comprender las ondas transversales es 
            fundamental en física, ingeniería, música, geofísica y prácticamente todas las tecnologías 
            modernas de comunicación y detección.
          </p>
        </Concept>
      </TheorySection>
    </>
  );
};

export default Theory;
