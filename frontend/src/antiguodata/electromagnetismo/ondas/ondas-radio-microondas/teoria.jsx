import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as radioDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Ondas de Radio y Microondas",
  descripcion: "Propagación, antenas y aplicaciones de ondas de radio y microondas en comunicaciones",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const RadioMicroondasTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Ondas de Radio y Microondas: Las Ondas de la Comunicación">
        <p>
          Las ondas de radio (3 kHz - 300 MHz) y microondas (300 MHz - 300 GHz) son las frecuencias más utilizadas en las comunicaciones modernas. Desde la radio AM/FM hasta el WiFi, 5G y GPS, estas ondas son la base de nuestra sociedad conectada.
        </p>
        <Important>
          Las propiedades de propagación de estas ondas dependen fuertemente de la frecuencia: las ondas de radio pueden viajar grandes distancias y atravesar obstáculos, mientras que las microondas son más direccionales pero transportan más información.
        </Important>
      </TheorySection>

      <TheorySection title="Clasificación por Frecuencia">
        <Concept title="Bandas de Radio">
          <p>Las ondas de radio se clasifican en bandas según su frecuencia, cada una con características de propagación específicas:</p>
          <ul>
            <li>VLF (3-30 kHz): Navegación submarina, comunicaciones de largo alcance</li>
            <li>LF (30-300 kHz): Radio navegación, señales horarias</li>
            <li>MF (300 kHz-3 MHz): Radio AM, navegación marítima</li>
            <li>HF (3-30 MHz): Radio de onda corta, comunicaciones internacionales</li>
            <li>VHF (30-300 MHz): Radio FM, televisión, comunicaciones aéreas</li>
          </ul>
        </Concept>

        <Concept title="Bandas de Microondas">
          <p>Las microondas se utilizan para comunicaciones de alta capacidad y aplicaciones especializadas:</p>
          <ul>
            <li>UHF (300 MHz-3 GHz): Televisión, telefonía móvil, GPS</li>
            <li>SHF (3-30 GHz): WiFi, Bluetooth, radar, comunicaciones satelitales</li>
            <li>EHF (30-300 GHz): 5G, radioastronomía, aplicaciones militares</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Propagación de Ondas de Radio">
        <Concept title="Pérdidas de Propagación en Espacio Libre">
          <p>La potencia de una onda electromagnética disminuye con la distancia según la ley del cuadrado inverso. En espacio libre, las pérdidas se calculan con la ecuación de Friis.</p>
          <Formula
            expression={String.raw`P_r = P_t \cdot G_t \cdot G_r \cdot \left(\frac{\lambda}{4\pi d}\right)^2`}
            calculatorId="radio_perdidas_propagacion"
            definitions={radioDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Pérdidas en dB", expression: String.raw`L_{dB} = 20\log_{10}\left(\frac{4\pi d}{\lambda}\right)` },
              { description: "Distancia máxima", expression: String.raw`d_{max} = \frac{\lambda}{4\pi} \sqrt{\frac{P_t G_t G_r}{P_{r,min}}}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>Pr = Potencia recibida (W)</li>
            <li>Pt = Potencia transmitida (W)</li>
            <li>Gt = Ganancia de antena transmisora (adimensional)</li>
            <li>Gr = Ganancia de antena receptora (adimensional)</li>
            <li>λ = Longitud de onda (m)</li>
            <li>d = Distancia entre antenas (m)</li>
          </ul>
        </Concept>

        <Concept title="Frecuencia vs Longitud de Onda">
          <p>La relación fundamental entre frecuencia y longitud de onda determina las características de propagación y el tamaño de las antenas.</p>
          <Formula
            expression={String.raw`\lambda = \frac{c}{f}`}
            calculatorId="radio_frecuencia_longitud"
            definitions={radioDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Frecuencia", expression: String.raw`f = \frac{c}{\lambda}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>λ = Longitud de onda (m)</li>
            <li>c = Velocidad de la luz (3 × 10⁸ m/s)</li>
            <li>f = Frecuencia (Hz)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Antenas y Radiación">
        <Concept title="Antena Dipolo">
          <p>La antena más básica es el dipolo de media onda, cuya longitud está directamente relacionada con la frecuencia de operación.</p>
          <Formula
            expression={String.raw`L = \frac{\lambda}{2} = \frac{c}{2f}`}
            calculatorId="radio_antena_dipolo"
            definitions={radioDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Frecuencia de resonancia", expression: String.raw`f = \frac{c}{2L}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>L = Longitud del dipolo (m)</li>
            <li>λ = Longitud de onda (m)</li>
            <li>c = Velocidad de la luz (3 × 10⁸ m/s)</li>
            <li>f = Frecuencia de operación (Hz)</li>
          </ul>
        </Concept>

        <Concept title="Ganancia de Antena">
          <p>La ganancia de una antena indica cuánto concentra la potencia radiada en una dirección específica comparada con una antena isotrópica.</p>
          <Formula
            expression={String.raw`G = \frac{P_{radiada}}{P_{isotrópica}} = \frac{4\pi A_{ef}}{\lambda^2}`}
            calculatorId="radio_ganancia_antena"
            definitions={radioDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Área efectiva", expression: String.raw`A_{ef} = \frac{G \lambda^2}{4\pi}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>G = Ganancia de la antena (adimensional)</li>
            <li>P_radiada = Potencia radiada en dirección específica (W)</li>
            <li>P_isotrópica = Potencia de antena isotrópica (W)</li>
            <li>A_ef = Área efectiva de la antena (m²)</li>
            <li>λ = Longitud de onda (m)</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="concepto-fundamental">
          <h4>WiFi y Bluetooth</h4>
          <p>WiFi (2.4 GHz y 5 GHz): Utiliza microondas para comunicaciones de alta velocidad en distancias cortas. La frecuencia más alta permite mayor ancho de banda pero menor alcance. Presente en hogares, oficinas, cafeterías y espacios públicos.</p>
          <p>Bluetooth (2.4 GHz): Usa la misma banda ISM que WiFi pero con menor potencia, optimizado para dispositivos de bajo consumo. Aplicaciones: auriculares inalámbricos, teclados, ratones, altavoces portátiles, dispositivos IoT.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Telefonía Móvil y 5G</h4>
          <p>4G LTE: Opera en múltiples bandas (700 MHz - 2.6 GHz) para balancear cobertura y capacidad. Velocidades de hasta 100 Mbps en movimiento.</p>
          <p>5G: Utiliza frecuencias desde 600 MHz hasta 39 GHz, incluyendo ondas milimétricas para velocidades ultra-altas en distancias cortas. Aplicaciones: streaming 4K/8K, realidad virtual, vehículos autónomos, cirugía remota.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>GPS y Navegación</h4>
          <p>GPS L1 (1575.42 MHz): Señal principal para navegación civil con precisión de aproximadamente 3 metros. Usado en smartphones, navegadores de automóviles, aplicaciones de mapas.</p>
          <p>GPS L2 (1227.60 MHz): Señal militar y aplicaciones de alta precisión. Galileo y GLONASS: Sistemas alternativos que mejoran la precisión y disponibilidad global.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Radio y Televisión</h4>
          <p>Radio AM (530-1700 kHz): Alcance de cientos de kilómetros, especialmente de noche. Ideal para noticias y programas hablados.</p>
          <p>Radio FM (88-108 MHz): Mayor calidad de audio, alcance de 50-100 km. Usado para música y entretenimiento.</p>
          <p>Televisión Digital (470-890 MHz): Transmisión de alta definición con múltiples canales por frecuencia.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Radar y Detección</h4>
          <p>Radar meteorológico (2.7-3 GHz): Detección de precipitaciones y tormentas hasta 400 km de distancia.</p>
          <p>Radar de tráfico (24 GHz): Control de velocidad en carreteras.</p>
          <p>Radar aeronáutico (1-18 GHz): Control de tráfico aéreo y navegación de aviones.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Comunicaciones Satelitales</h4>
          <p>Banda C (4-8 GHz): Televisión satelital, comunicaciones de larga distancia.</p>
          <p>Banda Ku (12-18 GHz): Internet satelital, transmisiones de TV directa al hogar.</p>
          <p>Banda Ka (26-40 GHz): Satélites de alta capacidad para internet de banda ancha.</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De Marconi al 5G
        </h2>
        
        <p>
          En 1895, Guglielmo Marconi realizó la primera transmisión de radio exitosa, enviando señales a una distancia de 2.4 km. Este logro revolucionó las comunicaciones y le valió el Premio Nobel de Física en 1909.
        </p>
        
        <p>
          En 1901, Marconi logró la primera transmisión transatlántica de radio, enviando la letra "S" en código Morse desde Cornwall, Inglaterra, hasta Terranova, Canadá. Muchos científicos creían que era imposible debido a la curvatura de la Tierra, pero las ondas de radio se reflejaron en la ionosfera.
        </p>
        
        <p>
          Durante la Segunda Guerra Mundial, el desarrollo del radar usando microondas fue crucial para detectar aviones enemigos. El magnetrón de cavidad, inventado en 1940, permitió generar microondas de alta potencia, revolucionando tanto el radar como posteriormente los hornos microondas domésticos.
        </p>
        
        <p>
          En 1947, los Laboratorios Bell desarrollaron el concepto de red celular, dividiendo áreas geográficas en "células" con antenas que reutilizan frecuencias. Este concepto es la base de toda la telefonía móvil moderna.
        </p>
        
        <p>
          En 1973, Martin Cooper de Motorola realizó la primera llamada desde un teléfono móvil celular, el Motorola DynaTAC, que pesaba 1.1 kg. La primera red comercial 1G se lanzó en Japón en 1979.
        </p>
        
        <p>
          El WiFi fue desarrollado en 1997 basándose en investigaciones de radioastronomía de los años 70. El estándar IEEE 802.11 ha evolucionado desde 2 Mbps hasta más de 10 Gbps en WiFi 6E.
        </p>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="concepto-fundamental">
          <h4>El horno microondas: un descubrimiento accidental</h4>
          <p>
            En 1945, Percy Spencer, ingeniero de Raytheon, estaba probando un magnetrón de radar cuando notó que una barra de chocolate en su bolsillo se había derretido. Intrigado, probó con palomitas de maíz y luego con un huevo, que explotó en la cara de un colega. Este accidente llevó al desarrollo del primer horno microondas comercial en 1947, que pesaba 340 kg y costaba $5,000.
          </p>
        </div>

        <div className="concepto-fundamental">
          <h4>La banda ISM: frecuencias libres para todos</h4>
          <p>
            Las bandas ISM (Industrial, Scientific and Medical) a 2.4 GHz y 5 GHz son de uso libre sin licencia. Por eso WiFi, Bluetooth, hornos microondas y monitores de bebés comparten estas frecuencias. Esto puede causar interferencias: un horno microondas funcionando puede ralentizar tu WiFi porque ambos usan 2.4 GHz.
          </p>
        </div>

        <div className="concepto-fundamental">
          <h4>El GPS fue militar antes que civil</h4>
          <p>
            El GPS fue desarrollado por el Departamento de Defensa de EE.UU. en los años 70 y se hizo completamente operativo en 1995. Hasta el año 2000, la señal civil tenía una "disponibilidad selectiva" que degradaba intencionalmente la precisión a 100 metros. Cuando se eliminó esta restricción, la precisión mejoró a 3-5 metros, revolucionando la navegación civil.
          </p>
        </div>

        <div className="concepto-fundamental">
          <h4>La primera llamada móvil fue a un rival</h4>
          <p>
            El 3 de abril de 1973, Martin Cooper realizó la primera llamada desde un teléfono móvil celular. ¿A quién llamó? A Joel Engel, su rival en los Laboratorios Bell, para anunciarle que Motorola había ganado la carrera por desarrollar el primer teléfono móvil portátil. La batería del DynaTAC duraba solo 20 minutos de conversación pero tardaba 10 horas en cargarse.
          </p>
        </div>

        <div className="concepto-fundamental">
          <h4>Las ondas de radio viajan al espacio</h4>
          <p>
            Todas las transmisiones de radio y TV desde los años 1930 están viajando por el espacio a la velocidad de la luz. Esto significa que nuestras primeras transmisiones ya han recorrido más de 90 años luz. Si hay civilizaciones alienígenas a esa distancia con receptores suficientemente sensibles, podrían estar viendo programas de los años 30.
          </p>
        </div>

        <div className="concepto-fundamental">
          <h4>El 5G y las teorías conspirativas</h4>
          <p>
            A pesar de las teorías conspirativas, las ondas de 5G son radiación no ionizante, igual que la radio FM o el WiFi, solo que a frecuencias más altas. La energía de un fotón de 5G (39 GHz) es aproximadamente 0.00016 eV, millones de veces menor que la necesaria para ionizar átomos (13.6 eV). La luz visible tiene más energía que las ondas de 5G.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen: Ondas de Radio y Microondas</h3>
        <p>
          Las ondas de radio (3 kHz - 300 MHz) y microondas (300 MHz - 300 GHz) son fundamentales para las comunicaciones modernas. Sus propiedades de propagación dependen de la frecuencia: frecuencias bajas viajan más lejos y atraviesan obstáculos, mientras que frecuencias altas permiten mayor ancho de banda pero menor alcance.
        </p>
        <ul>
          <li>Relación fundamental: λ = c/f determina el tamaño de antenas y características de propagación</li>
          <li>Pérdidas de propagación: aumentan con la distancia y la frecuencia según la ecuación de Friis</li>
          <li>Antenas: el dipolo de media onda (L = λ/2) es la antena más básica y eficiente</li>
        </ul>
        <p>
          Aplicaciones omnipresentes: desde la radio AM/FM hasta WiFi, 5G, GPS, Bluetooth, radar y comunicaciones satelitales. Estas tecnologías han transformado la sociedad, permitiendo comunicación instantánea global, navegación precisa y acceso ubicuo a información.
        </p>
      </div>
    </>
  );
};

export default RadioMicroondasTheory;