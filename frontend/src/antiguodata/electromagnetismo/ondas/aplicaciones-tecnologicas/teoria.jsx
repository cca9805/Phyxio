import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as aplicacionesDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Aplicaciones Tecnológicas de Ondas Electromagnéticas",
  descripcion: "Comunicaciones, radar, medicina, astronomía y tecnologías emergentes",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const AplicacionesTecnologicasTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Aplicaciones Tecnológicas de Ondas Electromagnéticas">
        <p>
          Las ondas electromagnéticas son la base de innumerables tecnologías modernas que transforman nuestra vida diaria. Desde las comunicaciones inalámbricas hasta la medicina de precisión, cada banda del espectro electromagnético tiene aplicaciones específicas que aprovechan sus propiedades únicas de propagación, penetración y interacción con la materia.
        </p>
        <Important>
          El desarrollo continuo de nuevas aplicaciones electromagnéticas impulsa la innovación en campos como 5G, Internet de las Cosas (IoT), medicina personalizada, exploración espacial y computación cuántica. Comprender estos principios es esencial para los ingenieros del futuro.
        </Important>
      </TheorySection>

      <TheorySection title="Comunicaciones Inalámbricas">
        <Concept title="Sistemas de Comunicación por Radio">
          <p>Las ondas de radio permiten comunicaciones a larga distancia aprovechando diferentes mecanismos de propagación:</p>
          <ul>
            <li>Onda terrestre: Propagación directa hasta el horizonte</li>
            <li>Onda ionosférica: Reflexión en capas ionizadas (HF)</li>
            <li>Onda troposférica: Dispersión en la troposfera (VHF/UHF)</li>
          </ul>
        </Concept>

        <Concept title="Ecuación de Friis">
          <p>Relaciona la potencia recibida con la transmitida en comunicaciones por radio:</p>
          <Formula
            expression={String.raw`P_r = P_t G_t G_r \left(\frac{\lambda}{4\pi R}\right)^2`}
            calculatorId="ecuacion_friis"
            definitions={aplicacionesDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>P_r = Potencia recibida (W)</li>
            <li>P_t = Potencia transmitida (W)</li>
            <li>G_t = Ganancia de la antena transmisora (adimensional)</li>
            <li>G_r = Ganancia de la antena receptora (adimensional)</li>
            <li>λ = Longitud de onda (m)</li>
            <li>R = Distancia entre antenas (m)</li>
          </ul>
        </Concept>

        <Concept title="Tecnologías Celulares">
          <p>Evolución de las comunicaciones móviles:</p>
          <ul>
            <li>2G (GSM): 900/1800 MHz, comunicación digital</li>
            <li>3G (UMTS): 2.1 GHz, datos de banda ancha</li>
            <li>4G (LTE): 700 MHz - 2.6 GHz, alta velocidad</li>
            <li>5G: Sub-6 GHz y mmWave (24-100 GHz), ultra-baja latencia</li>
          </ul>
        </Concept>

        <Example title="WiFi y Bluetooth">
          <p>WiFi (IEEE 802.11): 2.4 GHz y 5 GHz, hasta 9.6 Gbps (WiFi 6E).</p>
          <p>Bluetooth: 2.4 GHz ISM, comunicación de corto alcance.</p>
          <p>Ventajas: Sin cables, movilidad, múltiples dispositivos.</p>
        </Example>
      </TheorySection>

      <TheorySection title="Sistemas de Radar">
        <Concept title="Principio del Radar">
          <p>El radar (Radio Detection and Ranging) detecta objetos midiendo el tiempo de vuelo de pulsos electromagnéticos:</p>
          <Formula
            expression={String.raw`R = \frac{ct}{2}`}
            calculatorId="distancia_radar"
            definitions={aplicacionesDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>R = Distancia al objetivo (m)</li>
            <li>c = Velocidad de la luz (3×10⁸ m/s)</li>
            <li>t = Tiempo de vuelo del pulso (s)</li>
          </ul>
        </Concept>

        <Concept title="Ecuación del Radar">
          <p>Potencia recibida de un objetivo a distancia R:</p>
          <Formula
            expression={String.raw`P_r = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4}`}
            calculatorId="ecuacion_radar"
            definitions={aplicacionesDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>P_r = Potencia recibida (W)</li>
            <li>P_t = Potencia transmitida (W)</li>
            <li>G = Ganancia de la antena (adimensional)</li>
            <li>λ = Longitud de onda (m)</li>
            <li>σ = Sección transversal radar del objetivo (m²)</li>
            <li>R = Distancia al objetivo (m)</li>
          </ul>
        </Concept>

        <Concept title="Tipos de Radar">
          <p>Diferentes aplicaciones requieren diferentes configuraciones:</p>
          <ul>
            <li>Radar meteorológico: Banda S (2-4 GHz), detección de precipitación</li>
            <li>Radar de tráfico aéreo: Banda L (1-2 GHz), largo alcance</li>
            <li>Radar automotriz: 24/77 GHz, sistemas de asistencia</li>
            <li>Radar de apertura sintética (SAR): Imágenes de alta resolución</li>
          </ul>
        </Concept>

        <Example title="Efecto Doppler en Radar">
          <p>Principio: Cambio de frecuencia por movimiento relativo.</p>
          <p>Aplicaciones: Medición de velocidad, radar meteorológico Doppler.</p>
          <p>Fórmula: Δf = (2v/c) × f₀ para objetivos en movimiento.</p>
        </Example>
      </TheorySection>

      <TheorySection title="Aplicaciones Médicas">
        <Concept title="Resonancia Magnética (MRI)">
          <p>Utiliza campos magnéticos y ondas de radiofrecuencia para generar imágenes:</p>
          <ul>
            <li>Campo magnético: 0.5-7 Tesla, alineación de protones</li>
            <li>RF de excitación: 21-300 MHz según campo magnético</li>
            <li>Ventajas: Sin radiación ionizante, excelente contraste de tejidos blandos</li>
          </ul>
        </Concept>

        <Concept title="Diatermia y Hipertermia">
          <p>Calentamiento controlado de tejidos con ondas electromagnéticas mediante la absorción de energía electromagnética. La potencia disipada depende de las propiedades eléctricas del tejido (conductividad y permitividad) y de la intensidad de los campos eléctrico y magnético aplicados.</p>
          <ul>
            <li>Frecuencias típicas: 13.56 MHz, 27.12 MHz, 433 MHz, 915 MHz, 2.45 GHz</li>
            <li>Aplicaciones: Fisioterapia, tratamiento de tumores, rehabilitación</li>
            <li>Mecanismo: Calentamiento dieléctrico y conducción iónica</li>
          </ul>
        </Concept>

        <Concept title="Ablación por Microondas">
          <p>Destrucción térmica de tumores usando microondas (915 MHz o 2.45 GHz):</p>
          <ul>
            <li>Mecanismo: Calentamiento dieléctrico del agua tisular</li>
            <li>Ventajas: Mínimamente invasivo, control preciso</li>
            <li>Aplicaciones: Tumores hepáticos, pulmonares, renales</li>
          </ul>
        </Concept>

        <Example title="Termografía Infrarroja">
          <p>Principio: Detección de radiación térmica (8-14 μm).</p>
          <p>Aplicaciones: Detección de fiebre, diagnóstico vascular, oncología.</p>
          <p>Ventajas: No invasivo, detección a distancia, tiempo real.</p>
        </Example>
      </TheorySection>

      <TheorySection title="Astronomía y Exploración Espacial">
        <Concept title="Radioastronomía">
          <p>Observación del universo en ondas de radio (10 MHz - 1 THz):</p>
          <ul>
            <li>Ventana de radio: Atmósfera transparente 10 MHz - 10 GHz</li>
            <li>Fuentes: Púlsares, quásares, galaxias activas, CMB</li>
            <li>Técnicas: Interferometría, síntesis de apertura</li>
          </ul>
        </Concept>

        <Concept title="Comunicaciones Espaciales">
          <p>Enlaces de comunicación con naves espaciales y satélites:</p>
          <Formula
            expression={String.raw`\text{SNR} = \frac{P_r}{k T_s B}`}
            calculatorId="snr_comunicaciones"
            definitions={aplicacionesDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>SNR = Relación señal-ruido (adimensional)</li>
            <li>P_r = Potencia recibida (W)</li>
            <li>k = Constante de Boltzmann (1.38×10⁻²³ J/K)</li>
            <li>T_s = Temperatura del sistema (K)</li>
            <li>B = Ancho de banda (Hz)</li>
          </ul>
        </Concept>

        <Concept title="Navegación por Satélite">
          <p>Sistemas GNSS (GPS, GLONASS, Galileo, BeiDou):</p>
          <ul>
            <li>Frecuencias: L1 (1575 MHz), L2 (1227 MHz), L5 (1176 MHz)</li>
            <li>Principio: Trilateración basada en tiempo de vuelo</li>
            <li>Precisión: Metros (civil) a centímetros (diferencial)</li>
          </ul>
        </Concept>

        <Example title="Telescopio Espacial James Webb">
          <p>Rango espectral: 0.6-28 μm (infrarrojo cercano y medio).</p>
          <p>Ventajas: Sin absorción atmosférica, temperatura criogénica.</p>
          <p>Aplicaciones: Formación estelar, exoplanetas, universo temprano.</p>
        </Example>
      </TheorySection>

      <TheorySection title="Tecnologías Emergentes">
        <Concept title="Comunicaciones Terahertz">
          <p>Banda de 0.1-10 THz para aplicaciones de ultra-alta velocidad:</p>
          <ul>
            <li>Ventajas: Ancho de banda enorme, alta resolución</li>
            <li>Desafíos: Alta absorción atmosférica, tecnología inmadura</li>
            <li>Aplicaciones: 6G, imágenes de seguridad, espectroscopía</li>
          </ul>
        </Concept>

        <Concept title="Metamateriales">
          <p>Materiales artificiales con propiedades electromagnéticas no naturales:</p>
          <ul>
            <li>Índice negativo: n &lt; 0, propagación retrógrada</li>
            <li>Cloaking: Invisibilidad electromagnética</li>
            <li>Superlentes: Resolución sub-longitud de onda</li>
          </ul>
        </Concept>

        <Concept title="Comunicación Cuántica">
          <p>Transmisión de información usando propiedades cuánticas de fotones:</p>
          <ul>
            <li>Distribución de claves cuánticas (QKD): Seguridad incondicional</li>
            <li>Entrelazamiento cuántico: Correlaciones no locales</li>
            <li>Internet cuántico: Red global de computadoras cuánticas</li>
          </ul>
        </Concept>

        <Example title="Transferencia Inalámbrica de Energía">
          <p>Acoplamiento inductivo: Campo cercano, alta eficiencia, corto alcance.</p>
          <p>Haz de microondas: Campo lejano, largo alcance, menor eficiencia.</p>
          <p>Aplicaciones: Carga de vehículos eléctricos, satélites de energía solar.</p>
        </Example>
      </TheorySection>

      <TheorySection title="Sensores y Detección Remota">
        <Concept title="Lidar (Light Detection and Ranging)">
          <p>Detección y medición usando pulsos láser:</p>
          <Formula
            expression={String.raw`R = \frac{ct}{2}, \quad \Delta R = \frac{c}{2B}`}
            calculatorId="resolucion_lidar"
            definitions={aplicacionesDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>R = Distancia al objetivo (m)</li>
            <li>c = Velocidad de la luz (3×10⁸ m/s)</li>
            <li>t = Tiempo de vuelo (s)</li>
            <li>ΔR = Resolución en distancia (m)</li>
            <li>B = Ancho de banda del pulso (Hz)</li>
          </ul>
        </Concept>

        <Concept title="Sensores Multiespectrales">
          <p>Detección en múltiples bandas del espectro electromagnético:</p>
          <ul>
            <li>Visible: 400-700 nm, color verdadero</li>
            <li>Infrarrojo cercano: 700-1400 nm, vegetación</li>
            <li>Infrarrojo térmico: 8-14 μm, temperatura superficial</li>
            <li>Microondas: 1-100 GHz, penetración de nubes</li>
          </ul>
        </Concept>

        <Concept title="Aplicaciones Ambientales">
          <p>Monitoreo del medio ambiente usando sensores remotos:</p>
          <ul>
            <li>Agricultura de precisión: Índices de vegetación, estrés hídrico</li>
            <li>Cambio climático: Temperatura global, nivel del mar</li>
            <li>Desastres naturales: Detección temprana, evaluación de daños</li>
          </ul>
        </Concept>

        <Example title="Satélites de Observación Terrestre">
          <p>Landsat: Monitoreo multidecadal de la superficie terrestre.</p>
          <p>Sentinel: Programa Copernicus de la ESA para observación global.</p>
          <p>Aplicaciones: Agricultura, urbanización, deforestación, clima.</p>
        </Example>
      </TheorySection>

      <TheorySection title="Seguridad y Defensa">
        <Concept title="Sistemas de Guerra Electrónica">
          <p>Uso del espectro electromagnético para ventaja militar:</p>
          <ul>
            <li>ESM (Electronic Support Measures): Interceptación y análisis</li>
            <li>ECM (Electronic Countermeasures): Interferencia y engaño</li>
            <li>ECCM (Electronic Counter-Countermeasures): Protección</li>
          </ul>
        </Concept>

        <Concept title="Detección de Amenazas">
          <p>Tecnologías electromagnéticas para seguridad:</p>
          <ul>
            <li>Escáneres de cuerpo completo: Ondas milimétricas (24-30 GHz)</li>
            <li>Detección de explosivos: Espectroscopía terahertz</li>
            <li>Radar de penetración terrestre: Detección de túneles, minas</li>
          </ul>
        </Concept>

        <Example title="Sistemas Anti-Drone">
          <p>Detección: Radar, RF, óptico, acústico.</p>
          <p>Neutralización: Interferencia RF, láser de alta potencia.</p>
          <p>Aplicaciones: Aeropuertos, eventos, instalaciones críticas.</p>
        </Example>
      </TheorySection>

      <TheorySection title="Internet de las Cosas (IoT)">
        <Concept title="Tecnologías de Conectividad IoT">
          <p>Diferentes tecnologías para diferentes aplicaciones IoT:</p>
          <ul>
            <li>LoRaWAN: 868/915 MHz, largo alcance, bajo consumo</li>
            <li>NB-IoT: Bandas celulares, cobertura profunda</li>
            <li>Zigbee: 2.4 GHz, malla, domótica</li>
            <li>Sigfox: Sub-GHz, ultra-bajo consumo</li>
          </ul>
        </Concept>

        <Concept title="Eficiencia Energética">
          <p>Optimización del consumo en dispositivos IoT:</p>
          <Formula
            expression={String.raw`E_{total} = P_{tx} t_{tx} + P_{rx} t_{rx} + P_{sleep} t_{sleep}`}
            calculatorId="energia_iot"
            definitions={aplicacionesDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>E_total = Energía total consumida (J)</li>
            <li>P_tx = Potencia en transmisión (W)</li>
            <li>t_tx = Tiempo en transmisión (s)</li>
            <li>P_rx = Potencia en recepción (W)</li>
            <li>t_rx = Tiempo en recepción (s)</li>
            <li>P_sleep = Potencia en modo sleep (W)</li>
            <li>t_sleep = Tiempo en modo sleep (s)</li>
          </ul>
        </Concept>

        <Example title="Smart Cities">
          <p>Sensores ambientales: Calidad del aire, ruido, temperatura.</p>
          <p>Gestión de tráfico: Semáforos inteligentes, parking dinámico.</p>
          <p>Servicios públicos: Alumbrado adaptativo, gestión de residuos.</p>
        </Example>
      </TheorySection>

      {/* Historia */}
      <div className="theory-history-section">
        <h2><span>📜</span> Historia de las aplicaciones electromagnéticas</h2>
        <p>
          La era de las aplicaciones electromagnéticas comenzó con Guglielmo Marconi, quien realizó la primera 
          transmisión de radio transatlántica en 1901. Durante la Segunda Guerra Mundial, el desarrollo del radar 
          revolucionó la detección y el combate aéreo. En 1947, los Laboratorios Bell inventaron el transistor, 
          iniciando la era de la electrónica moderna. El lanzamiento del Sputnik en 1957 marcó el inicio de las 
          comunicaciones satelitales. En 1973, Martin Cooper realizó la primera llamada desde un teléfono móvil. 
          La invención del WiFi en 1997 y el despliegue de 4G en 2009 transformaron las comunicaciones inalámbricas. 
          Hoy, el 5G y las tecnologías cuánticas prometen revolucionar nuevamente nuestro mundo conectado.
        </p>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas y curiosidades</h2>
        <p>
          El primer mensaje enviado por Marconi a través del Atlántico fue simplemente la letra "S" en código Morse. 
          Durante la Segunda Guerra Mundial, el radar británico fue tan secreto que se difundió el rumor de que los 
          pilotos comían zanahorias para ver mejor de noche. El primer teléfono móvil pesaba 1 kg y costaba 4,000 dólares. 
          El WiFi fue inventado accidentalmente mientras se buscaba detectar agujeros negros. El GPS fue desarrollado 
          por el ejército estadounidense y se abrió al uso civil en 2000. Un solo satélite GPS cuesta más de 500 millones 
          de dólares. Las ondas de radio de las primeras transmisiones de TV siguen viajando por el espacio y ya han 
          recorrido más de 80 años luz.
        </p>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3 className="concept-title">Resumen</h3>
        <div className="concept-body">
          <ul>
            <li>Las ondas electromagnéticas son fundamentales para las comunicaciones modernas</li>
            <li>El radar utiliza el tiempo de vuelo para detectar objetos y medir distancias</li>
            <li>Aplicaciones médicas incluyen MRI, diatermia y ablación por microondas</li>
            <li>La radioastronomía permite observar el universo en frecuencias invisibles</li>
            <li>Tecnologías emergentes: terahertz, metamateriales, comunicación cuántica</li>
            <li>IoT conecta miles de millones de dispositivos usando diferentes tecnologías RF</li>
            <li>Cada banda del espectro tiene aplicaciones específicas optimizadas</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AplicacionesTecnologicasTheory;
