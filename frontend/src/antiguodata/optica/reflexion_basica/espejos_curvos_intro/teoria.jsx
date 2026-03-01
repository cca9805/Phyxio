import { TheorySection, Concept, Important, Example, Formula } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "Espejos Curvos (Introducción)",
  descripcion: "Visión cualitativa de espejos cóncavos y convexos: tipos de imágenes, formación y aplicaciones prácticas",
  isTheoryOnly: true,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const EspejosCurvosIntro = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="Espejos cóncavos y convexos">
        <p>
          Los espejos curvos tienen superficies con curvatura que producen efectos distintos sobre los rayos de luz:
        </p>
        <ul>
          <li>Espejo cóncavo: la superficie refleja hacia adentro (como una cuchara), puede concentrar la luz y formar imágenes reales.</li>
          <li>Espejo convexo: la superficie refleja hacia fuera, dispersa los rayos y forma imágenes virtuales más pequeñas.</li>
        </ul>

        <Important>
          En esta introducción nos centramos en una descripción cualitativa: qué tipo de imágenes forman y aplicaciones prácticas. Este tema proporciona una base conceptual visual para ESO antes de abordar fórmulas cuantitativas en bachillerato.
        </Important>
      </TheorySection>

      <TheorySection title="Diagrama básico">
        <p>El siguiente dibujo muestra, de forma esquemática, cómo se comportan los rayos en espejos cóncavos y convexos.</p>

        <div style={{ maxWidth: 800, margin: '1rem auto' }}>
          <svg viewBox="0 0 800 280" width="100%" height="280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rayos en espejos cóncavos y convexos">
            <defs>
              <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                <path d="M0 0 L10 5 L0 10 z" fill="#e74c3c" />
              </marker>
              <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                <path d="M0 0 L10 5 L0 10 z" fill="#3498db" />
              </marker>
            </defs>

            {/* ESPEJO CÓNCAVO (izquierda) */}
            <g transform="translate(40,30)">
              <text x="80" y="0" fontSize="14" fontWeight="bold" fill="#2c3e50">Espejo Cóncavo</text>
              
              {/* Eje óptico */}
              <line x1="0" y1="110" x2="320" y2="110" stroke="#95a5a6" strokeWidth="1" strokeDasharray="3 3" />
              
              {/* Espejo cóncavo - curva que refleja hacia dentro (abierto hacia la izquierda) */}
              <path d="M 60 30 Q 100 110 60 190" fill="none" stroke="#2c3e50" strokeWidth="4" />
              
              {/* Centro de curvatura C (delante del espejo) */}
              <circle cx="160" cy="110" r="3" fill="#34495e" />
              <text x="165" y="100" fontSize="12" fill="#34495e">C</text>
              
              {/* Foco F (a mitad entre C y el espejo) */}
              <circle cx="110" cy="110" r="3" fill="#e74c3c" />
              <text x="115" y="100" fontSize="12" fill="#e74c3c">F</text>
              
              {/* RAYO 1: Paralelo al eje → refleja pasando por F */}
              <line x1="0" y1="70" x2="62" y2="70" stroke="#e74c3c" strokeWidth="2" markerEnd="url(#arrowRed)" />
              <text x="5" y="65" fontSize="11" fill="#e74c3c">1</text>
              {/* Rayo reflejado hacia F */}
              <line x1="62" y1="70" x2="110" y2="110" stroke="#3498db" strokeWidth="2" markerEnd="url(#arrowBlue)" />
              
              {/* RAYO 2: Pasa por F → refleja paralelo al eje */}
              <line x1="0" y1="140" x2="110" y2="110" stroke="#e74c3c" strokeWidth="2" markerEnd="url(#arrowRed)" />
              <text x="5" y="145" fontSize="11" fill="#e74c3c">2</text>
              {/* Rayo reflejado paralelo */}
              <line x1="60" y1="80" x2="-20" y2="80" stroke="#3498db" strokeWidth="2" markerEnd="url(#arrowBlue)" />
              
              {/* RAYO 3: Pasa por C → refleja sobre sí mismo */}
              <line x1="0" y1="110" x2="160" y2="110" stroke="#e74c3c" strokeWidth="2" markerEnd="url(#arrowRed)" />
              <text x="5" y="105" fontSize="11" fill="#e74c3c">3</text>
              {/* Rayo reflejado en la misma dirección */}
              <line x1="60" y1="110" x2="-20" y2="110" stroke="#3498db" strokeWidth="2" markerEnd="url(#arrowBlue)" />
              
              {/* Leyenda */}
              <text x="10" y="220" fontSize="11" fill="#7f8c8d">Rayo incidente (rojo) → Rayo reflejado (azul)</text>
            </g>

            {/* ESPEJO CONVEXO (derecha) */}
            <g transform="translate(440,30)">
              <text x="70" y="0" fontSize="14" fontWeight="bold" fill="#2c3e50">Espejo Convexo</text>
              
              {/* Eje óptico */}
              <line x1="-20" y1="110" x2="320" y2="110" stroke="#95a5a6" strokeWidth="1" strokeDasharray="3 3" />
              
              {/* Espejo convexo - curva que refleja hacia fuera (abierto hacia la derecha) */}
              <path d="M 260 30 Q 220 110 260 190" fill="none" stroke="#2c3e50" strokeWidth="4" />
              
              {/* Centro de curvatura virtual C (detrás del espejo) */}
              <circle cx="140" cy="110" r="3" fill="#95a5a6" fillOpacity="0.5" />
              <text x="125" y="100" fontSize="11" fill="#7f8c8d">C (virtual)</text>
              
              {/* Foco virtual F (detrás del espejo, a mitad entre espejo y C) */}
              <circle cx="200" cy="110" r="3" fill="#e67e22" fillOpacity="0.7" />
              <text x="185" y="100" fontSize="11" fill="#e67e22">F (virtual)</text>
              
              {/* RAYO 1: Paralelo al eje → refleja alejándose como si viniera de F */}
              <line x1="0" y1="70" x2="258" y2="70" stroke="#e74c3c" strokeWidth="2" markerEnd="url(#arrowRed)" />
              <text x="5" y="65" fontSize="11" fill="#e74c3c">1</text>
              {/* Rayo reflejado divergente */}
              <line x1="258" y1="70" x2="320" y2="30" stroke="#3498db" strokeWidth="2" markerEnd="url(#arrowBlue)" />
              {/* Prolongación virtual hacia F (línea punteada) */}
              <line x1="258" y1="70" x2="200" y2="110" stroke="#3498db" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6" />
              
              {/* RAYO 2: Apunta hacia F virtual → refleja paralelo */}
              <line x1="0" y1="140" x2="200" y2="110" stroke="#e74c3c" strokeWidth="2" markerEnd="url(#arrowRed)" />
              <text x="5" y="145" fontSize="11" fill="#e74c3c">2</text>
              {/* Rayo reflejado paralelo */}
              <line x1="258" y1="120" x2="320" y2="120" stroke="#3498db" strokeWidth="2" markerEnd="url(#arrowBlue)" />
              
              {/* RAYO 3: Apunta hacia C virtual → refleja sobre sí mismo */}
              <line x1="0" y1="110" x2="140" y2="110" stroke="#e74c3c" strokeWidth="2" markerEnd="url(#arrowRed)" />
              <text x="5" y="105" fontSize="11" fill="#e74c3c">3</text>
              {/* Rayo reflejado */}
              <line x1="260" y1="110" x2="320" y2="110" stroke="#3498db" strokeWidth="2" markerEnd="url(#arrowBlue)" />
              
              {/* Leyenda */}
              <text x="-10" y="220" fontSize="11" fill="#7f8c8d">Rayos reflejados divergen (foco virtual)</text>
            </g>
          </svg>
        </div>
        
        <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#ecf0f1', borderRadius: '4px' }}>
          <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}>
            <strong>Rayos principales:</strong>
          </p>
          <ul style={{ margin: '0.5rem 0', fontSize: '0.85rem' }}>
            <li><strong>Rayo 1 (paralelo):</strong> Llega paralelo al eje óptico. En cóncavo refleja pasando por F; en convexo refleja alejándose como si viniera de F virtual.</li>
            <li><strong>Rayo 2 (focal):</strong> Pasa por F (o apunta hacia F virtual). En cóncavo refleja paralelo al eje; en convexo también refleja paralelo.</li>
            <li><strong>Rayo 3 (central):</strong> Pasa por el centro de curvatura C. Refleja sobre sí mismo en ambos tipos de espejo.</li>
          </ul>
        </div>
      </TheorySection>

      <TheorySection title="Relaciones cualitativas">
        <Formula 
          title="Imagen en espejo cóncavo (caso cualitativo)"
          expression={`\\text{Dependiendo de la posición del objeto (respecto a }f\\text{ y }2f\\text{): imagen real/virtual, invertida/derecha, tamaño variable}`}
          where={[
            { symbol: 'f', description: 'Distancia focal (positiva en cóncavo)' },
            { symbol: '2f', description: 'Doble de la distancia focal' }
          ]}
        />
        <Formula 
          title="Imagen en espejo convexo (cualitativo)"
          expression={`\\text{Siempre virtual, derecha y reducida; foco e imagen virtuales}`}
        />
      </TheorySection>

      <TheorySection title="Aplicaciones y ejemplos">
        <Concept title="Usos cotidianos">
          <ul>
            <li>Espejos cóncavos: maquillaje, telescopios reflectores (concentración de luz)</li>
            <li>Espejos convexos: seguridad en carreteras, espejos en tiendas para amplia visión</li>
          </ul>

          <Example>
            Actividad: Observa un espejo convexo y uno cóncavo (o una cuchara) y describe cómo cambia la imagen según la distancia.
          </Example>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>🌍 Aplicaciones de los Espejos Curvos</h2>
        
        <div className="application-item">
          <h3>🪞 Espejos de Maquillaje y Baño</h3>
          <p>
            Los espejos cóncavos con aumentos de 5× a 10× (distancias focales de 10-20 cm) son esenciales en cosmética y cuidado personal. Cuando colocas tu rostro entre el foco y el espejo (típicamente a 10-15 cm), se forma una imagen virtual ampliada y derecha. Los modelos con iluminación LED (5000-6500K, CRI {'>'}90) eliminan sombras y proporcionan luz similar a la natural. Los espejos de doble cara combinan un lado normal (plano, aumento 1×) y otro cóncavo (5×-10×), montados en brazos extensibles que permiten ajustar la distancia. Materiales modernos usan vidrio plateado con protección contra humedad, durando 10-15 años en ambientes de baño. Precio: $15-$80 según calidad y características LED.
          </p>
        </div>

        <div className="application-item">
          <h3>🚗 Espejos Retrovisores Convexos</h3>
          <p>
            Los espejos laterales de automóviles son convexos con radios de curvatura de 1-2 m, proporcionando un campo de visión 2-3× mayor que un espejo plano. La advertencia "los objetos están más cerca de lo que parecen" indica que las imágenes virtuales reducidas (típicamente 60-70% del tamaño real) distorsionan la percepción de distancia. Los espejos convexos en intersecciones peligrosas y salidas de garajes tienen diámetros de 30-60 cm con radios de 2-4 m, cubriendo ángulos de 90-180° y visibles hasta 10-20 m. Materiales: acrílico ($20-$40, resistente a impactos), policarbonato ($40-$80, anti-UV), o vidrio ($80-$150, mejor claridad óptica pero frágil). Los espejos panorámicos interiores modernos son planos en el centro (visión real) y convexos en los bordes (campo amplio).
          </p>
        </div>

        <div className="application-item">
          <h3>🔭 Telescopios Reflectores</h3>
          <p>
            Los telescopios reflectores usan espejos cóncavos parabólicos como objetivo principal. El diseño newtoniano (1668) tiene un espejo secundario plano a 45° que desvía la luz al ocular lateral. El Gran Telescopio Canarias (GTC) tiene un espejo primario de 10.4 m de diámetro formado por 36 segmentos hexagonales, cada uno controlado por actuadores con precisión de nanómetros. El espejo parabólico elimina aberración esférica concentrando todos los rayos paralelos en un foco perfecto. Los telescopios Schmidt-Cassegrain combinan espejo primario cóncavo con secundario convexo, plegando el camino óptico y reduciendo la longitud física a 25-30% de la focal efectiva. Materiales: vidrio Pyrex (coeficiente expansión térmica bajo), recubierto con aluminio (reflectancia 88-92%) o plata mejorada (95-98%). Los espejos grandes requieren realuminización cada 1-2 años, costando $1-$3 millones para telescopios profesionales.
          </p>
        </div>

        <div className="application-item">
          <h3>🌞 Concentradores Solares Parabólicos</h3>
          <p>
            Los concentradores solares de canal parabólico (CSP - Concentrated Solar Power) usan espejos cóncavos cilíndricos que concentran radiación solar 30-100× en un tubo receptor con fluido térmico (aceite sintético o sales fundidas a 300-565°C). La planta Ivanpah (California, 392 MW) usa 173,500 helióstatos (espejos planos) que rastrean el sol con precisión de 0.1° y concentran luz en torres centrales. Los hornos solares como el de Odeillo (Francia) tienen espejos parabólicos de 54 m de altura que alcanzan 3,500°C en el foco, fundiendo metales y probando materiales aeroespaciales. Los concentradores parabólicos compuestos (CPC) para aplicaciones domésticas ($2k-$8k) tienen aperturas de 1-3 m² y eficiencias del 60-70%, calentando agua a 80-150°C. Recubrimientos: aluminio anodizado (durabilidad 15-20 años) o películas reflectantes multicapa (reflectancia 94-96%).
          </p>
        </div>

        <div className="application-item">
          <h3>🏪 Espejos de Seguridad en Comercios</h3>
          <p>
            Los espejos convexos hemisféricos en tiendas y supermercados (diámetros 30-80 cm) proporcionan vigilancia de 90-360° desde un solo punto. Un espejo de 45 cm montado en esquina cubre ~12-15 m de pasillo, detectando movimientos en puntos ciegos. Los espejos parabólicos de inspección vehicular (usados en aduanas, militares) permiten ver bajo chasis sin agacharse, con mangos telescópicos de 50-150 cm y espejos de 20-30 cm a 45°. Los espejos acústicos parabólicos (micrófonos direccionales) concentran ondas sonoras en el foco, captando conversaciones hasta 100-300 m de distancia, usados en vigilancia y grabación de naturaleza. Los materiales anti-empañamiento (recubrimientos hidrofílicos) evitan condensación en espejos de baño y retrovisores, dispersando agua en película delgada (grosor {'<'}100 nm) que mantiene transparencia.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>📜 Historia de los Espejos Curvos</h2>
        
        <div className="history-item">
          <h3>🔥 Espejos Ardientes de Arquímedes (Siglo III a.C.)</h3>
          <p>
            La leyenda cuenta que Arquímedes (287-212 a.C.) defendió Siracusa usando espejos cóncavos para concentrar luz solar e incendiar barcos romanos a 50-100 m. Los experimentos modernos (MIT 2005, Discovery Channel 2010) demostraron que es teóricamente posible con condiciones ideales: 127 espejos planos de 1.5 m² coordinados por 127 personas, apuntando al mismo punto del barco durante 10 minutos bajo sol intenso, lograron carbonizar madera a 30 m. Sin embargo, la viabilidad militar es cuestionable: requiere mar en calma, sol cenital, objetivo estático, y coordinación perfecta. Alternativamente, historiadores sugieren que Arquímedes pudo usar espejos para deslumbrar y desorientar a los marineros romanos, táctica más práctica que la incineración directa. Los textos antiguos de Diocles (siglo II a.C.) describen espejos parabólicos y sus propiedades de concentración focal.
          </p>
        </div>

        <div className="history-item">
          <h3>🔭 Telescopios Reflectores: Newton a Herschel (1668-1789)</h3>
          <p>
            Isaac Newton inventó el telescopio reflector en 1668 para evitar la aberración cromática de los refractores. Su primer modelo tenía un espejo primario de bronce especular (aleación cobre-estaño pulido) de 3.3 cm de diámetro y focal de 15 cm, logrando aumentos de 38×. James Short (1710-1768) perfeccionó el pulido de espejos esféricos y parabólicos, fabricando más de 1,000 telescopios con técnicas secretas que murieron con él. William Herschel (1738-1822) construyó el telescopio más grande de su época: espejo de 1.2 m de diámetro, 12 m de focal, pesando 1 tonelada (1789). Con él descubrió Urano (1781), dos lunas de Saturno, y catalogó miles de nebulosas. Los espejos metálicos tenían problemas: se deslustraban rápidamente (requiriendo repulido mensual), pesaban mucho, y tenían baja reflectancia (60-65%). El plateado de vidrio (Léon Foucault, 1857) revolucionó la óptica: espejos de vidrio recubiertos con plata química eran más ligeros, estables, y reflectantes (90-92%).
          </p>
        </div>

        <div className="history-item">
          <h3>🚗 Espejos Retrovisores en Automóviles (1906-1969)</h3>
          <p>
            El primer espejo retrovisor automotriz lo instaló Dorothy Levitt en 1906, sugiriendo en su libro "The Woman and the Car" usar un espejo de mano para ver el tráfico trasero. Ray Harroun montó el primer espejo retrovisor interior en su Marmon Wasp durante las 500 Millas de Indianápolis de 1911, eliminando la necesidad de un mecánico copiloto. Los espejos laterales se estandarizaron en los años 1960s con regulaciones de seguridad: Estados Unidos requirió espejo lateral izquierdo en 1968 y derecho en 1980s. Los espejos convexos ("wide angle") se adoptaron universalmente en espejos laterales por proporcionar campo visual 2-3× mayor. Los espejos asféricos modernos (convexos graduales desde 1990s) combinan zona plana (60% interior, visión real) con zona convexa (40% exterior, ángulo muerto), reduciendo distorsión. Innovaciones recientes: electrocrómicos (anti-deslumbramiento automático, 1990s), calefactados (anti-empañamiento), y cámaras digitales (Tesla Model 3, Audi e-tron) que reemplazan espejos por pantallas, reduciendo resistencia aerodinámica 5-7%.
          </p>
        </div>

        <div className="history-item">
          <h3>☀️ Concentradores Solares Modernos (1878-2020)</h3>
          <p>
            Augustin Mouchot presentó en la Exposición Universal de París (1878) un concentrador solar parabólico que impulsaba una máquina de vapor, generando 0.5 HP (373 W). Frank Shuman construyó en Egipto (1912-1913) la primera planta solar de canal parabólico a escala industrial, con 1,200 m² de espejos cilíndricos bombeando 22,500 litros/minuto de agua para irrigación. El proyecto se abandonó con el descubrimiento de petróleo barato. La crisis del petróleo de 1970s revivió el interés: la planta SEGS (Solar Energy Generating Systems) en California (1984-1991) instaló 354 MW en 9 plantas con canales parabólicos, operando 35+ años. Las torres solares como Gemasolar (España, 2011, 19.9 MW) usan 2,650 helióstatos rastreando el sol que concentran luz 1,000× en receptor central con sales fundidas (565°C), almacenando calor 15 horas para generación nocturna. La planta Noor (Marruecos, 2016-2018, 580 MW) es el complejo solar concentrado más grande del mundo, combinando torres y canales parabólicos, costando $9 mil millones y reduciendo emisiones 760,000 toneladas CO₂/año.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>✨ Curiosidades sobre Espejos Curvos</h2>
        
        <div className="anecdote-item">
          <h3>🥄 El Experimento de la Cuchara</h3>
          <p>
            Una cuchara común demuestra ambos tipos de espejos curvos en un solo objeto. El lado cóncavo (interior) funciona como lente convergente: si miras tu reflejo muy cerca (5-10 cm), apareces ampliado y derecho; alejándote (15-25 cm), cruzas el foco y tu imagen se invierte (apareces cabeza abajo) y se reduce. El lado convexo (exterior) siempre muestra tu rostro reducido (50-70% del tamaño) y derecho, sin importar la distancia. Esta dualidad hace que las cucharas sean herramientas didácticas excelentes en física: los estudiantes pueden experimentar con formación de imágenes reales vs virtuales, medir aproximadamente la distancia focal (punto donde la imagen se invierte), y entender por qué los espejos de maquillaje son cóncavos. Experimento avanzado: sostén una cuchara bajo el sol enfocando la luz en un punto; el lado cóncavo concentra radiación en un spot brillante de 2-5 mm, alcanzando temperaturas suficientes para quemar papel en 10-30 segundos (¡supervisión adulta requerida!).
          </p>
        </div>

        <div className="anecdote-item">
          <h3>🎨 Espejos Anamórficos en Arte</h3>
          <p>
            Los espejos cilíndricos convexos (tubos reflectantes) transforman dibujos distorsionados (anamorfosis) en imágenes reconocibles. Los artistas del Renacimiento (Leonardo da Vinci, Hans Holbein) creaban pinturas que parecían abstractas pero revelaban mensajes secretos al reflejarse en espejos curvos. El ejemplo más famoso es "Los Embajadores" de Holbein (1533): una mancha diagonal en primer plano se revela como una calavera perfecta al verla desde ángulo oblicuo o con espejo cilíndrico. Aplicaciones modernas incluyen publicidad en estadios (logos distorsionados en el césped que se ven correctos desde cámaras aéreas) y arte callejero (murales que cobran sentido solo desde puntos específicos). Los espejos esféricos convexos aparecen en pinturas flamencas del siglo XV (Jan van Eyck) reflejando escenas completas en 180°, proporcionando contexto espacial y profundidad. Los museos de ciencia modernos usan espejos parabólicos enfrentados para crear "ilusiones holográficas": un objeto en el foco de uno aparece flotando en el otro, con paralaje 3D perfecto.
          </p>
        </div>

        <div className="anecdote-item">
          <h3>🔊 Espejos Acústicos y Radares Prehistóricos</h3>
          <p>
            Antes de la invención del radar (1930s-1940s), se construyeron "espejos acústicos" parabólicos de concreto para detección temprana de aviones. Reino Unido instaló 15 espejos gigantes (5-9 m de diámetro, algunos cilíndricos de 60 m) en la costa entre 1916-1930. Funcionaban concentrando ondas sonoras de motores de avión (frecuencias 50-500 Hz) en micrófonos colocados en el foco, detectando bombarderos a 15-30 km con 10-15 minutos de antelación. Operadores entrenados identificaban tipo de aeronave por el patrón de sonido. Los sistemas quedaron obsoletos con el radar Chain Home (1938) que detectaba a 200+ km, pero algunos espejos aún existen como monumentos en Denge y Hythe. Aplicación moderna: micrófonos parabólicos (diámetros 30-90 cm) usados en deportes (captar conversaciones en campo), naturaleza (grabar cantos de aves a 100 m), y vigilancia. La ganancia típica es 20-30 dB comparada con micrófono omnidireccional, equivalente a amplificar volumen 10-30×. Limitación: sólo captan frecuencias con longitudes de onda menores al diámetro del plato (parábola de 50 cm efectiva para {'>'}680 Hz).
          </p>
        </div>

        <div className="anecdote-item">
          <h3>🌈 Aberraciones y Espejos Perfectos</h3>
          <p>
            Los espejos esféricos simples no enfocan perfectamente: rayos paralelos lejanos del eje no convergen en el foco, creando aberración esférica. Para luz paralela al eje, el radio ideal del espejo debe seguir una parábola, no un círculo. La diferencia es pequeña para ángulos pequeños (aproximación paraxial: errores {'<'}1% si apertura {'<'}f/8), pero crítica en telescopios grandes. El telescopio Hubble sufrió el error óptico más caro de la historia: su espejo primario de 2.4 m fue pulido con precisión perfecta (λ/20 = 27 nm) pero hacia la forma esférica equivocada, 2.2 μm demasiado plano en el borde. El defecto, causado por un reflector mal calibrado durante pruebas, produjo aberración esférica que desenfocaba imágenes. La reparación en 1993 (misión STS-61) costó ~$700 millones e instaló el sistema COSTAR (lentes correctoras) que compensaban el error. Las imágenes post-reparación fueron 10× más nítidas. Los espejos modernos evitan esto usando: 1) Forma parabólica perfecta (pulido CNC guiado por láser, precisión 10 nm), 2) Óptica adaptativa (deformación del espejo en tiempo real para compensar turbulencia atmosférica, 1000 actuadores ajustándose 100× por segundo), o 3) Espejos segmentados (hexágonos individuales controlados independientemente, como el James Webb con 18 segmentos de berilio recubiertos en oro).
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h2>📝 Resumen de Conceptos Clave</h2>
        <ul>
          <li>Los espejos cóncavos concentran luz reflejando hacia adentro; pueden formar imágenes reales (invertidas) cuando el objeto está más allá del foco, o virtuales (derechas y ampliadas) cuando está entre el foco y el espejo</li>
          <li>Los espejos convexos dispersan luz reflejando hacia fuera; siempre forman imágenes virtuales, derechas y reducidas (60-70% del tamaño), proporcionando campos visuales amplios (2-3× mayor que espejos planos)</li>
          <li>La formación de imágenes en espejos cóncavos depende de la posición del objeto respecto a la distancia focal (f) y el doble de esta (2f): objeto más allá de 2f → imagen real, invertida, reducida; objeto entre f y 2f → imagen real, invertida, ampliada; objeto entre foco y espejo → imagen virtual, derecha, ampliada</li>
          <li>Aplicaciones cóncavas aprovechan la concentración: telescopios reflectores (GTC 10.4 m), espejos de maquillaje (aumentos 5×-10×), concentradores solares (temperaturas hasta 3,500°C), faros parabólicos (haces colimados)</li>
          <li>Aplicaciones convexas aprovechan el campo amplio: retrovisores automotrices (radios 1-2 m, visión 90-180°), espejos de seguridad en comercios (vigilancia hemisférica 360°), mirillas de puertas</li>
          <li>Los espejos parabólicos eliminan aberración esférica enfocando todos los rayos paralelos en un punto focal perfecto, esenciales en telescopios astronómicos y sistemas ópticos de precisión donde la calidad de imagen es crítica</li>
        </ul>
      </div>
    </>
  );
};

export default EspejosCurvosIntro;
