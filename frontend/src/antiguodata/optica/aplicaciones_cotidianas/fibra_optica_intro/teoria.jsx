import { TheorySection, Concept, Example } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "Introducción a la Fibra Óptica (ESO)",
  descripcion: "Conceptos básicos sobre fibra óptica y sus aplicaciones cotidianas.",
  isTheoryOnly: true,
  educationLevel: "ESO",
  levels: ['ESO']
};

export default function TeoriaFibraOptica() {
  return (
    <div>
      <TheorySection title="Introducción">
        <Concept title="¿Qué es la fibra óptica?">
          <p>
            La fibra óptica es un medio de transmisión formado por un núcleo de vidrio o plástico (core) rodeado por una cubierta de índice refractivo menor (cladding). La luz se propaga a lo largo del núcleo gracias a la reflexión total interna, lo que permite transportar grandes cantidades de información a largas distancias con muy poca pérdida.
          </p>
        </Concept>
        <Concept title="Ventajas">
          <ul>
            <li>Ancho de banda muy alto</li>
            <li>Baja atenuación</li>
            <li>Inmunidad a interferencias electromagnéticas</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Estructura y funcionamiento">
        <Concept>
          <p>
            Una fibra típica tiene un núcleo (core) por donde viaja la luz y una cubierta (cladding) que mantiene la luz dentro del núcleo. Cuando el rayo de luz incide en la frontera núcleo–cubierta con un ángulo mayor que el ángulo crítico, ocurre la reflexión total interna y la luz queda guiada.
          </p>
        </Concept>

        <figure style={{ maxWidth: 700, margin: '0 auto' }}>
          <svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
            {/* Capa protectora externa (coating) */}
            <ellipse cx="350" cy="150" rx="320" ry="80" fill="#2c3e50" opacity="0.3"/>
            <text x="0" y="110" fill="#2c3e50" fontSize="12" fontWeight="bold">Coating (protección)</text>
            
            {/* Cladding (cubierta) */}
            <ellipse cx="350" cy="150" rx="280" ry="60" fill="#3498db" opacity="0.4"/>
            <text x="0" y="190" fill="#2980b9" fontSize="12" fontWeight="bold">Cladding (n₂≈1.46)</text>
            
            {/* Core (núcleo) */}
            <ellipse cx="350" cy="150" rx="240" ry="40" fill="#e74c3c" opacity="0.6"/>
            <text x="0" y="150" fill="#c0392b" fontSize="12" fontWeight="bold">Core (n₁≈1.48)</text>
            
            {/* Rayos de luz guiados */}
            {/* Rayo 1 - zigzag superior */}
            <path d="M 100,130 L 180,110 L 260,130 L 340,110 L 420,130 L 500,110 L 580,130" 
                  stroke="#f39c12" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <circle cx="100" cy="130" r="4" fill="#f39c12"/>
            
            {/* Rayo 2 - zigzag central */}
            <path d="M 100,150 L 200,150 L 300,150 L 400,150 L 500,150 L 600,150" 
                  stroke="#27ae60" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <circle cx="100" cy="150" r="4" fill="#27ae60"/>
            
            {/* Rayo 3 - zigzag inferior */}
            <path d="M 100,170 L 180,190 L 260,170 L 340,190 L 420,170 L 500,190 L 580,170" 
                  stroke="#9b59b6" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <circle cx="100" cy="170" r="4" fill="#9b59b6"/>
            
            {/* Puntos de reflexión en los límites */}
            <circle cx="180" cy="110" r="3" fill="#fff" opacity="0.8"/>
            <circle cx="260" cy="130" r="3" fill="#fff" opacity="0.8"/>
            <circle cx="340" cy="110" r="3" fill="#fff" opacity="0.8"/>
            <circle cx="420" cy="130" r="3" fill="#fff" opacity="0.8"/>
            <circle cx="500" cy="110" r="3" fill="#fff" opacity="0.8"/>
            
            <circle cx="180" cy="190" r="3" fill="#fff" opacity="0.8"/>
            <circle cx="260" cy="170" r="3" fill="#fff" opacity="0.8"/>
            <circle cx="340" cy="190" r="3" fill="#fff" opacity="0.8"/>
            <circle cx="420" cy="170" r="3" fill="#fff" opacity="0.8"/>
            <circle cx="500" cy="190" r="3" fill="#fff" opacity="0.8"/>
            
            {/* Flechas indicando dirección */}
            <path d="M 575,130 L 585,130 L 580,125 M 580,135 L 585,130" 
                  stroke="#f39c12" strokeWidth="2" fill="none"/>
            <path d="M 595,150 L 605,150 L 600,145 M 600,155 L 605,150" 
                  stroke="#27ae60" strokeWidth="2" fill="none"/>
            <path d="M 575,170 L 585,170 L 580,165 M 580,175 L 585,170" 
                  stroke="#9b59b6" strokeWidth="2" fill="none"/>
            
            {/* Etiquetas de los rayos */}
            <text x="610" y="133" fill="#f39c12" fontSize="12">Reflexión total</text>
            <text x="610" y="153" fill="#27ae60" fontSize="12">Rayo axial</text>
            <text x="610" y="173" fill="#9b59b6" fontSize="12">Reflexión total</text>
            
            {/* Título y anotaciones */}
            <text x="250" y="30" fill="#34495e" fontSize="18" fontWeight="bold">Estructura de Fibra Óptica</text>
            <text x="180" y="270" fill="#7f8c8d" fontSize="13">Luz guiada por reflexión total interna (n₁ &gt; n₂)</text>
          </svg>
          <figcaption style={{ textAlign: 'center' }}>Esquema completo: coating, cladding y core, con rayos guiados mediante reflexión total interna.</figcaption>
        </figure>
      </TheorySection>

      <TheorySection title="Tipos y aplicaciones">
        <Concept title="Tipos de fibra">
          <p>
            Monomodo: núcleo muy pequeño, usado en enlaces de larga distancia y telecomunicaciones.<br />
            Multimodo: núcleo más ancho, usado en redes locales y aplicaciones de corto alcance.
          </p>
        </Concept>

        <Concept title="Aplicaciones cotidianas">
          <ul>
            <li>Conexiones FTTH (fibra hasta el hogar)</li>
            <li>Backbone de Internet y enlaces de datos de alta velocidad</li>
            <li>Sensores médicos y redes industriales</li>
          </ul>
        </Concept>

        <Example title="Demostración casera" problem="¿Cómo demostrar el guiado de la luz?" solution={"Apunta una linterna a un hilo fino de agua: la luz se mantiene guiada siguiendo la corriente, demostrando un comportamiento análogo a la fibra óptica."}>
          <p>Este experimento es sencillo y visual: utiliza una linterna y un chorro de agua fino en una habitación oscura.</p>
        </Example>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>📶 Internet y telecomunicaciones</h3>
          <p>
            Las compañías de telecomunicaciones utilizan fibra óptica para conectar ciudades y continentes. Los cables submarinos transoceánicos, que transportan más del 99% del tráfico de Internet internacional, están hechos de miles de fibras ópticas. Una sola fibra puede transmitir terabits por segundo, equivalente a millones de llamadas telefónicas simultáneas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏠 FTTH - Fibra hasta el hogar</h3>
          <p>
            Cada vez más hogares tienen conexión directa de fibra óptica (FTTH), permitiendo velocidades de 1 Gbps o más. A diferencia del cable de cobre que pierde señal con la distancia, la fibra mantiene alta velocidad incluso a kilómetros del nodo central. Esto permite streaming 4K/8K, videollamadas HD y juegos online sin latencia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏥 Medicina: Endoscopios y cirugía mínimamente invasiva</h3>
          <p>
            Los endoscopios médicos utilizan fibras ópticas para iluminar y observar el interior del cuerpo sin necesidad de cirugía abierta. Un haz de fibras lleva luz al interior mientras otro haz transmite la imagen de vuelta. Esto permite diagnóstico y procedimientos quirúrgicos con recuperación más rápida y menos riesgo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏛️ Sensores industriales y monitoreo estructural</h3>
          <p>
            Las fibras ópticas se usan como sensores de temperatura, presión y vibración en puentes, túneles y edificios. Como son inmunes a interferencias electromagnéticas, pueden operar en ambientes hostiles (plantas químicas, centrales eléctricas). Detectan micro-deformaciones mediante cambios en la propagación de la luz, alertando de posibles fallos estructurales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📡 Iluminación decorativa y señalización</h3>
          <p>
            Las fibras ópticas de plástico se utilizan en iluminación decorativa (p. ej. cielos estrellados en techos, letreros luminosos). Una sola fuente LED alimenta cientos de fibras que distribuyen la luz sin calor ni electricidad en los puntos finales, ideal para zonas húmedas o explosivas.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De la luz guiada a Internet
        </h2>
        
        <div className="theory-subsection">
          <h3>🔬 John Tyndall demuestra el guiado de luz (1854)</h3>
          <p>
            El físico irlandés John Tyndall demostró que la luz puede ser guiada dentro de un chorro de agua mediante reflexión total interna. Apuntó un haz de luz a un chorro que caía de un tanque, y la audiencia observó cómo la luz seguía la trayectoria curvada del agua. Este fue el primer experimento documentado del principio que sustenta la fibra óptica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💡 Primeras fibras de vidrio (1920s-1950s)</h3>
          <p>
            En los años 1920, investigadores crearon fibras de vidrio para aplicaciones médicas (endoscopios primitivos), pero la pérdida de luz era enorme: ~1000 dB/km, lo que significaba que prácticamente toda la luz se perdía en distancias cortas. Las fibras eran útiles solo para ver a través de unos pocos metros.
          </p>
        </div>

          <div className="theory-subsection">
            <h3>🎯 Charles Kao y la fibra de baja pérdida (1966)</h3>
            <p>
              El ingeniero Charles Kao propuso que si las impurezas del vidrio se eliminaban, la fibra podría lograr pérdidas &lt;20 dB/km, haciéndola viable para telecomunicaciones. En 1970, Corning Glass produjo la primera fibra con pérdidas de 17 dB/km. Kao recibió el Premio Nobel de Física en 2009 por revolucionar las telecomunicaciones.
            </p>
          </div>        <div className="theory-subsection">
          <h3>🌐 La era de Internet por fibra (1980s-presente)</h3>
          <p>
            En los 1980s, compañías telefónicas empezaron a desplegar fibra para llamadas de larga distancia. En los 1990s, los primeros cables submarinos de fibra conectaron continentes. Hoy, la fibra óptica es la columna vertebral de Internet global, con pérdidas &lt; 0.2 dB/km y capacidades que crecen exponencialmente gracias a técnicas de multiplexación.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🌊 Cables submarinos: la infraestructura invisible de Internet</h3>
          <p>
            Más de 450 cables submarinos de fibra óptica cruzan los océanos, totalizando más de 1.3 millones de kilómetros. El cable TAT-14 (Atlántico) puede transmitir 3.2 Tbps. Cuando un tiburonesborda muerde un cable (sí, ocurre), puede afectar Internet de países enteros. Google, Facebook y Amazon invierten miles de millones en cables privados.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 La fibra más veloz: 178 Tbps en una sola fibra</h3>
          <p>
            En 2020, investigadores japoneses lograron transmitir 178 terabits por segundo (Tbps) en una sola fibra de 4 núcleos, equivalente a transmitir 178,000 películas HD por segundo. Usaron multiplexación por longitud de onda: cada "color" de luz transporta un canal independiente, como tener cientos de autopistas en paralelo dentro del mismo cable.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔍 La fibra es más fina que un cabello humano</h3>
          <p>
            El núcleo de una fibra monomodo típica mide solo 9 micrómetros de diámetro, unas 10 veces más delgado que un cabello humano (~100 μm). A pesar de ser tan delgada, la fibra de vidrio es extremadamente fuerte: puede soportar más tensión que un alambre de acero del mismo grosor gracias a su estructura molecular ordenada.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ Latencia: la fibra gana... a medias</h3>
          <p>
            La luz viaja a ~200,000 km/s en fibra de vidrio (~2/3 de c en vacío), más rápido que las señales eléctricas en cables de cobre. Sin embargo, la ruta más corta no siempre es la más rápida: los traders de alta frecuencia pagan millones por líneas de microondas directas (que viajan a ~c) entre Londres y Frankfurt, ganando milisegundos sobre la fibra subterránea más larga.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💧 El truco del agua funciona de verdad</h3>
          <p>
            El experimento de John Tyndall (1854) todavía se replica en ferias de ciencia: apunta un láser a una botella de agua con un agujero lateral, y verás el láser "seguir" el chorro de agua que cae. Es la misma reflexión total interna que en la fibra óptica, pero con agua (n≈1.33) y aire (n=1). Funciona porque el ángulo crítico es ~49° para agua-aire.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌟 Fibras "invisibles" en el océano</h3>
          <p>
            Algunas fibras ópticas submarinas utilizan amplificadores ópticos cada 50-100 km para compensar pérdidas sin convertir la señal a eléctrica. Estos amplificadores usan láseres de bombeo y fibras dopadas con erbio que amplifican la luz directamente. Un cable puede tener cientos de amplificadores sumergidos a 8000 metros de profundidad, funcionando autónomamente durante 25 años.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            La fibra óptica es un cable de vidrio o plástico que guía luz mediante reflexión total interna.
          </li>
          <li>
            Tiene un núcleo (core) de índice refractivo alto rodeado por una cubierta (cladding) de índice menor.
          </li>
          <li>
            Permite transmisión de datos a velocidades de terabits por segundo con pérdidas mínimas.
          </li>
          <li>
            Aplicaciones: Internet, telecomunicaciones, medicina (endoscopios), sensores industriales.
          </li>
          <li>
            Fibra monomodo (núcleo pequeño, larga distancia) vs multimodo (núcleo mayor, corta distancia).
          </li>
          <li>
            Es inmune a interferencias electromagnéticas, más liviana y delgada que cables de cobre.
          </li>
        </ul>
      </div>
    </div>
  );
}
