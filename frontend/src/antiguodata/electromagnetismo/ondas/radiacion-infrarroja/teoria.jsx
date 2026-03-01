import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as infrarrojaDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Radiación Infrarroja y Térmica",
  descripcion: "Radiación de cuerpo negro, leyes de Stefan-Boltzmann y Wien, aplicaciones térmicas",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const RadiacionInfrarrojaTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Radiación Infrarroja: El Calor Invisible">
        <p>
          La radiación infrarroja (IR) abarca longitudes de onda desde 700 nm hasta 1 mm, correspondiendo a frecuencias de 300 GHz a 430 THz. Esta radiación está íntimamente relacionada con el calor: todos los objetos con temperatura superior al cero absoluto emiten radiación infrarroja.
        </p>
        <Important>
          La radiación infrarroja es la forma principal de transferencia de calor por radiación. Su intensidad y distribución espectral dependen únicamente de la temperatura del objeto emisor, siguiendo las leyes de la radiación de cuerpo negro.
        </Important>
      </TheorySection>

      <TheorySection title="Clasificación de la Radiación Infrarroja">
        <Concept title="Bandas del Infrarrojo">
          <p>La radiación infrarroja se divide en tres bandas principales según su longitud de onda:</p>
          <ul>
            <li>IR Cercano (NIR, 0.7-1.4 μm): Aplicaciones en fibra óptica, espectroscopía</li>
            <li>IR Medio (MIR, 1.4-3 μm): Detección de gases, aplicaciones militares</li>
            <li>IR Lejano (FIR, 3-1000 μm): Radiación térmica, calefacción, astronomía</li>
          </ul>
        </Concept>

        <Concept title="Ventanas Atmosféricas">
          <p>La atmósfera terrestre absorbe selectivamente ciertas longitudes de onda infrarrojas, creando "ventanas" donde la transmisión es alta:</p>
          <ul>
            <li>Ventana de 3-5 μm: Usada en cámaras térmicas militares</li>
            <li>Ventana de 8-14 μm: Ideal para termografía civil y meteorología</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Radiación de Cuerpo Negro">
        <Concept title="Ley de Stefan-Boltzmann">
          <p>La potencia total radiada por un cuerpo negro es proporcional a la cuarta potencia de su temperatura absoluta.</p>
          <Formula
            expression={String.raw`P = \sigma A T^4`}
            calculatorId="infrarroja_stefan_boltzmann"
            definitions={infrarrojaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Temperatura", expression: String.raw`T = \sqrt[4]{\frac{P}{\sigma A}}` },
              { description: "Área", expression: String.raw`A = \frac{P}{\sigma T^4}` }
            ]}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li>P = Potencia radiada (W)</li>
            <li>σ = Constante de Stefan-Boltzmann (5.67×10⁻⁸ W·m⁻²·K⁻⁴)</li>
            <li>A = Área de la superficie (m²)</li>
            <li>T = Temperatura absoluta (K)</li>
          </ul>
        </Concept>

        <Concept title="Ley de Desplazamiento de Wien">
          <p>La longitud de onda de máxima emisión de un cuerpo negro es inversamente proporcional a su temperatura.</p>
          <Formula
            expression={String.raw`\lambda_{max} = \frac{b}{T}`}
            calculatorId="infrarroja_ley_wien"
            definitions={infrarrojaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Temperatura", expression: String.raw`T = \frac{b}{\lambda_{max}}` }
            ]}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li>λ_max = Longitud de onda de máxima emisión (m)</li>
            <li>b = Constante de Wien (2.898×10⁻³ m·K)</li>
            <li>T = Temperatura absoluta (K)</li>
          </ul>
        </Concept>

        <Concept title="Ley de Planck">
          <p>La distribución espectral de la radiación de cuerpo negro está dada por la función de Planck, que describe la intensidad por unidad de longitud de onda.</p>
          <Formula
            expression={String.raw`B(\lambda,T) = \frac{2hc^2}{\lambda^5} \frac{1}{e^{\frac{hc}{\lambda k_B T}} - 1}`}
            calculatorId="infrarroja_planck"
            definitions={infrarrojaDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>B(λ,T) = Radiancia espectral (W·m⁻²·sr⁻¹·m⁻¹)</li>
            <li>h = Constante de Planck (6.626×10⁻³⁴ J·s)</li>
            <li>c = Velocidad de la luz (3×10⁸ m/s)</li>
            <li>λ = Longitud de onda (m)</li>
            <li>k_B = Constante de Boltzmann (1.38×10⁻²³ J/K)</li>
            <li>T = Temperatura absoluta (K)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Emisividad y Cuerpos Reales">
        <Concept title="Emisividad">
          <p>Los objetos reales no son cuerpos negros perfectos. Su capacidad de emitir radiación se caracteriza por la emisividad (ε), que varía entre 0 y 1.</p>
          <Formula
            expression={String.raw`P = \varepsilon \sigma A T^4`}
            calculatorId="infrarroja_emisividad"
            definitions={infrarrojaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Emisividad", expression: String.raw`\varepsilon = \frac{P}{\sigma A T^4}` }
            ]}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li>P = Potencia radiada (W)</li>
            <li>ε = Emisividad del material (0-1, adimensional)</li>
            <li>σ = Constante de Stefan-Boltzmann (5.67×10⁻⁸ W·m⁻²·K⁻⁴)</li>
            <li>A = Área de la superficie (m²)</li>
            <li>T = Temperatura absoluta (K)</li>
          </ul>
        </Concept>

        <Example title="Valores Típicos de Emisividad">
          <ul>
            <li>Piel humana: ε ≈ 0.98 (casi cuerpo negro perfecto)</li>
            <li>Agua: ε ≈ 0.96</li>
            <li>Asfalto: ε ≈ 0.95</li>
            <li>Aluminio pulido: ε ≈ 0.05 (muy reflectivo)</li>
            <li>Acero oxidado: ε ≈ 0.80</li>
          </ul>
        </Example>
      </TheorySection>

      <TheorySection title="Detección y Medición">
        <Concept title="Detectores Térmicos">
          <p>Miden el calentamiento producido por la absorción de radiación infrarroja:</p>
          <ul>
            <li>Termopares: Simples y económicos, respuesta lenta</li>
            <li>Bolómetros: Alta sensibilidad, usados en cámaras térmicas</li>
            <li>Detectores piroelétricos: Respuesta rápida a cambios de temperatura</li>
          </ul>
        </Concept>

        <Concept title="Detectores Fotónicos">
          <p>Convierten directamente los fotones IR en señales eléctricas:</p>
          <ul>
            <li>Fotodiodos de InGaAs: IR cercano (0.9-1.7 μm)</li>
            <li>Detectores de HgCdTe: IR medio y lejano, alta sensibilidad</li>
            <li>Detectores cuánticos: Requieren refrigeración, muy sensibles</li>
          </ul>
        </Concept>
      </TheorySection>


      <div className="theory-applications-section">
        <h2><span>🔬</span> Aplicaciones Tecnológicas</h2>
        
        <div className="concepto-fundamental">
          <h4>Termografía y Cámaras Térmicas</h4>
          <p>Las cámaras térmicas detectan la radiación infrarroja emitida por objetos para crear imágenes térmicas que revelan diferencias de temperatura invisibles al ojo humano. Operan típicamente en la ventana atmosférica de 8-14 μm, donde la transmisión del aire es óptima.</p>
          <p>En medicina, la termografía detecta inflamaciones, problemas circulatorios y tumores mediante patrones de calor anormales. En construcción, identifica fugas de calor, puentes térmicos y defectos de aislamiento. En industria, el mantenimiento predictivo usa termografía para detectar sobrecalentamientos en equipos eléctricos, motores y rodamientos antes de que fallen. En seguridad, las cámaras térmicas permiten visión nocturna sin iluminación, detectando personas y animales por su calor corporal.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Calefacción por Infrarrojos</h4>
          <p>Los calefactores infrarrojos emiten radiación IR que calienta directamente los objetos y personas sin calentar el aire intermedio, similar a cómo el Sol calienta la Tierra. Este principio ofrece ventajas significativas sobre la calefacción convectiva.</p>
          <p>La eficiencia energética es superior porque no se pierde energía calentando el aire que sube al techo. El calentamiento es instantáneo al encender el dispositivo, sin tiempo de espera. No generan corrientes de aire que muevan polvo y alérgenos, beneficiando a personas con alergias. Se usan en hogares como paneles radiantes, en industria para secado de pinturas y barnices, en agricultura para invernaderos, y en medicina como terapia para dolores musculares y articulares.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Astronomía Infrarroja</h4>
          <p>Los telescopios infrarrojos revolucionaron la astronomía al permitir observar objetos fríos y regiones oscurecidas por polvo cósmico. La radiación infrarroja penetra las nubes de polvo que bloquean la luz visible, revelando procesos ocultos del universo.</p>
          <p>El Telescopio Espacial Spitzer (2003-2020) descubrió miles de galaxias distantes, estudió la formación de estrellas en nebulosas oscuras y detectó planetas extrasolares mediante su calor. El Telescopio Espacial James Webb (lanzado en 2021) observa en infrarrojo cercano y medio, estudiando las primeras galaxias del universo, la formación de sistemas planetarios y la composición de atmósferas exoplanetarias. Desde tierra, observatorios como el Very Large Telescope usan óptica adaptativa para compensar la turbulencia atmosférica en observaciones infrarrojas.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Comunicaciones por Fibra Óptica</h4>
          <p>Las telecomunicaciones modernas dependen de la transmisión de luz infrarroja cercana a través de fibras ópticas de vidrio. Se usan tres ventanas principales: 850 nm (primera ventana, distancias cortas), 1310 nm (segunda ventana, dispersión mínima) y 1550 nm (tercera ventana, atenuación mínima de 0.2 dB/km).</p>
          <p>La fibra óptica ofrece ventajas cruciales: ancho de banda enorme permitiendo transmitir terabits por segundo, inmunidad a interferencias electromagnéticas, seguridad contra interceptación, y pérdidas mínimas permitiendo enlaces transoceánicos sin repetidores cada 100 km. Los cables submarinos de fibra óptica conectan continentes, transportando el 99% del tráfico de internet internacional. En ciudades, las redes FTTH (Fiber To The Home) llevan internet de alta velocidad directamente a los hogares.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Sensores de Movimiento y Proximidad</h4>
          <p>Los sensores PIR (Passive Infrared) detectan cambios en la radiación infrarroja del entorno, activándose cuando una persona o animal se mueve en su campo de visión. Son pasivos porque solo detectan radiación, sin emitirla.</p>
          <p>Se usan masivamente en sistemas de seguridad para detectar intrusos, en iluminación automática para ahorrar energía, en domótica para controlar climatización según ocupación, y en automóviles para detectar peatones. Los sensores activos de proximidad emiten pulsos IR y miden el tiempo de retorno, usándose en smartphones para apagar la pantalla durante llamadas, en robótica para evitar obstáculos, y en sistemas de estacionamiento automático.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Espectroscopía Infrarroja</h4>
          <p>La espectroscopía IR analiza cómo las moléculas absorben radiación infrarroja en frecuencias específicas correspondientes a sus vibraciones moleculares. Cada enlace químico tiene frecuencias características, creando una "huella digital" molecular.</p>
          <p>En química, identifica compuestos desconocidos y verifica la pureza de sustancias. En farmacia, controla la calidad de medicamentos. En forense, analiza drogas, explosivos y evidencias. En control ambiental, detecta contaminantes atmosféricos y gases de efecto invernadero. Los satélites meteorológicos usan espectroscopía IR para medir concentraciones de CO₂, metano y vapor de agua en la atmósfera, monitoreando el cambio climático.</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2><span>📜</span> Historia del Infrarrojo</h2>
        
        <div className="concepto-fundamental">
          <h4>El Descubrimiento de Herschel (1800)</h4>
          <p>El astrónomo William Herschel descubrió la radiación infrarroja accidentalmente mientras investigaba el calor de diferentes colores de luz. Usando un prisma para dispersar la luz solar y termómetros para medir la temperatura de cada color, notó que el termómetro colocado más allá del rojo (donde no había luz visible) registraba la temperatura más alta.</p>
          <p>Este experimento revolucionario demostró que existía radiación invisible más allá del espectro visible. Herschel llamó a esta radiación "rayos caloríficos" o "rayos oscuros". Su descubrimiento abrió el camino para entender que la luz visible era solo una pequeña parte del espectro electromagnético.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Desarrollo de la Teoría del Cuerpo Negro</h4>
          <p>En el siglo XIX, los físicos estudiaron cómo los objetos calientes emiten radiación. Josef Stefan descubrió experimentalmente en 1879 que la potencia radiada es proporcional a T⁴, y Ludwig Boltzmann derivó esta ley teóricamente en 1884 usando termodinámica.</p>
          <p>Wilhelm Wien formuló en 1893 su ley de desplazamiento, explicando por qué los objetos más calientes emiten luz de menor longitud de onda. El problema del cuerpo negro alcanzó su crisis cuando las teorías clásicas predecían la "catástrofe ultravioleta" (energía infinita a longitudes de onda cortas). Max Planck resolvió este problema en 1900 introduciendo la cuantización de la energía, naciendo así la física cuántica.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Aplicaciones Militares en el Siglo XX</h4>
          <p>Durante la Segunda Guerra Mundial, ambos bandos desarrollaron detectores infrarrojos para visión nocturna y búsqueda de objetivos. Los alemanes crearon el dispositivo "Vampir" para rifles, permitiendo disparar en oscuridad total. Los aliados desarrollaron sistemas IR para detectar aviones y barcos enemigos.</p>
          <p>La Guerra Fría aceleró el desarrollo de tecnología infrarroja. Los misiles guiados por calor, como el AIM-9 Sidewinder (1956), revolucionaron el combate aéreo al seguir automáticamente el calor de los motores enemigos. Los satélites espía infrarrojos detectaban lanzamientos de misiles balísticos mediante su firma térmica. Esta tecnología militar eventualmente se transfirió a aplicaciones civiles.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Era Moderna: Telescopios Espaciales</h4>
          <p>La astronomía infrarroja despegó con telescopios espaciales que evitan la absorción atmosférica. El IRAS (1983) realizó el primer estudio completo del cielo en infrarrojo. El Telescopio Espacial Spitzer (2003-2020) descubrió miles de galaxias ocultas y estudió la formación estelar.</p>
          <p>El Telescopio Espacial James Webb, lanzado en 2021, representa la culminación de décadas de desarrollo. Con su espejo de 6.5 metros y detectores infrarrojos ultra-sensibles enfriados a -233°C, observa las primeras galaxias formadas después del Big Bang, estudia atmósferas de exoplanetas buscando signos de vida, y revela los secretos de la formación de estrellas y planetas.</p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span>💡</span> Curiosidades y Anécdotas</h2>
        
        <div className="concepto-fundamental">
          <h4>El Experimento Accidental de Herschel</h4>
          <p>William Herschel no buscaba descubrir nueva radiación, sino simplemente encontrar el filtro de color más cómodo para observar el Sol con su telescopio. Al medir la temperatura de cada color, colocó un termómetro de control fuera del espectro visible "para medir la temperatura ambiente". Para su sorpresa, este termómetro de control registró la temperatura más alta de todos, revelando la existencia de radiación invisible.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Visión Infrarroja de las Serpientes</h4>
          <p>Las serpientes de cascabel, boas y pitones tienen órganos termorreceptores llamados "fosetas loreales" que detectan radiación infrarroja. Estos órganos son tan sensibles que pueden detectar cambios de temperatura de 0.003°C, permitiendo a la serpiente "ver" el calor de presas de sangre caliente en completa oscuridad. Es como tener una cámara térmica natural integrada en la cabeza.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>El Misterio de la Radiación de Fondo</h4>
          <p>En 1965, Arno Penzias y Robert Wilson detectaron un ruido persistente en su antena de radio que no podían eliminar. Inicialmente pensaron que era causado por excrementos de palomas en la antena. Después de limpiarla meticulosamente, el ruido persistía. Resultó ser la radiación de fondo de microondas del Big Bang, uno de los descubrimientos más importantes de la cosmología, que les valió el Premio Nobel en 1978.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Termografía Médica y Cáncer de Mama</h4>
          <p>En los años 1960s, se descubrió que los tumores cancerosos tienen temperatura ligeramente superior al tejido circundante debido a su mayor actividad metabólica y vascularización. Esto llevó a investigar la termografía como herramienta de detección de cáncer de mama. Aunque no reemplazó a la mamografía (que es más precisa), la termografía sigue usándose como complemento, especialmente en mujeres jóvenes con tejido mamario denso donde la mamografía es menos efectiva.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>El Problema del Enfriamiento de Detectores</h4>
          <p>Los detectores infrarrojos más sensibles deben enfriarse a temperaturas criogénicas (cerca del cero absoluto) para reducir el ruido térmico. El Telescopio Espacial James Webb usa helio líquido y refrigeradores criogénicos para mantener sus detectores a -233°C. Sin este enfriamiento, el calor del propio detector generaría más señal infrarroja que los objetos celestes que intenta observar, como intentar ver estrellas con una linterna encendida frente a tus ojos.</p>
        </div>

        <div className="concepto-fundamental">
          <h4>Calefacción Infrarroja en la Antigüedad</h4>
          <p>Aunque no entendían la física, los romanos ya usaban calefacción radiante en sus termas mediante el sistema "hypocaustum": un espacio bajo el suelo donde circulaban gases calientes de un horno. El calor radiaba desde el suelo y las paredes, calentando directamente a las personas sin calentar mucho el aire, exactamente el principio de la calefacción infrarroja moderna. Este sistema era tan eficiente que algunas termas romanas permanecían cálidas durante días después de apagar el horno.</p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen: Radiación Infrarroja y Térmica</h3>
        <p>
          La radiación infrarroja es la forma principal de transferencia de calor por radiación, emitida por todos los objetos con temperatura superior al cero absoluto. Se clasifica en IR cercano (0.7-1.4 μm), medio (1.4-3 μm) y lejano (3-1000 μm), cada uno con aplicaciones específicas.
        </p>
        <p>
          Las leyes fundamentales son: la Ley de Stefan-Boltzmann (P = σAT⁴) que relaciona la potencia radiada con la cuarta potencia de la temperatura, la Ley de Wien (λ_max = b/T) que determina la longitud de onda de máxima emisión, y la Ley de Planck que describe la distribución espectral completa. Los objetos reales tienen emisividad ε entre 0 y 1, modificando la radiación de cuerpo negro ideal.
        </p>
        <p>
          Las aplicaciones tecnológicas abarcan termografía para diagnóstico médico e inspección industrial, calefacción eficiente por radiación directa, astronomía infrarroja para observar a través del polvo cósmico, comunicaciones por fibra óptica que transportan el 99% del tráfico de internet, sensores de movimiento y proximidad, y espectroscopía para identificación molecular. La comprensión de la radiación infrarroja fue crucial para el desarrollo de la física cuántica y sigue siendo fundamental en tecnologías modernas desde smartphones hasta telescopios espaciales.
        </p>
      </div>
    </>
  );
};

export default RadiacionInfrarrojaTheory;
