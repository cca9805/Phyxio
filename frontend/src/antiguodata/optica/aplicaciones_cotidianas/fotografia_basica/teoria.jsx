import { TheorySection, Concept, Example } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "Fotografía básica: Óptica en cámaras (ESO)",
  descripcion: "Cómo funcionan lentes, diafragmas y enfoque en cámaras y su aplicación cotidiana.",
  isTheoryOnly: true,
  educationLevel: "ESO",
  levels: ['ESO']
};

export default function TeoriaFotografiaBasica() {
  return (
    <div>
      <TheorySection title="Introducción a la fotografía">
        <Concept>
          <p>
            La fotografía combina lentes, apertura y sensores para formar imágenes. La lente forma una imagen real en el sensor; el diafragma controla la cantidad de luz y la distancia focal determina el encuadre y la perspectiva.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Lente y ecuación de la lente fina">
        <Concept title="Ecuación de la lente fina">
          <pre style={{ background: '#f7f7f7', padding: 8 }}>1/f = 1/do + 1/di</pre>
          <p>Donde <code>f</code> es la distancia focal, <code>do</code> la distancia al objeto y <code>di</code> la distancia a la imagen.</p>
        </Concept>

        <figure style={{ maxWidth: 600, margin: '0 auto' }}>
          <img src="/assets/optica/fotografia_basica.svg" alt="Esquema camara" style={{ width: '100%', height: 'auto', border: '1px solid #eee' }} />
          <figcaption style={{ textAlign: 'center' }}>Esquema simplificado de una cámara: lente, diafragma y sensor.</figcaption>
        </figure>
      </TheorySection>

      <TheorySection title="Apertura y profundidad de campo">
        <Concept>
          <p>
            La apertura (f-stop) controla cuánta luz entra: números bajos (p. ej. f/1.8) = apertura grande = menos profundidad de campo (fondo desenfocado); números altos (p. ej. f/16) = apertura pequeña = mayor profundidad de campo.
          </p>
        </Concept>

        <Concept title="Ejemplos prácticos">
          <ul>
            <li>Retrato: usa una distancia focal larga y apertura amplia para separar sujeto y fondo.</li>
            <li>Paisaje: usa apertura pequeña y enfoque a hiperfocal para máxima nitidez.</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>📱 Fotografía con smartphones</h3>
          <p>
            Los teléfonos modernos usan múltiples lentes (gran angular, teleobjetivo, macro) para simular cámaras profesionales. Aunque el sensor es pequeño (~1/2.5"), el software compensa mediante HDR computacional, fusión de múltiples exposiciones y procesamiento de IA. Las lentes tienen distancias focales equivalentes de 13-26mm (gran angular) y 50-150mm (tele).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎥 Cine y producción audiovisual</h3>
          <p>
            Los directores de fotografía eligen lentes según la emoción deseada: gran angular (24mm) exagera perspectiva y profundidad; teleobjetivo (85-200mm) comprime distancias y aísla sujetos. La apertura controla no solo exposición sino también el "look" cinemático: f/1.4-f/2.8 crea bokeh suave, f/5.6-f/11 mantiene toda la escena nítida.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Microscopía y fotografía científica</h3>
          <p>
            Los microscopios ópticos utilizan objetivos de alta magnificación (4x-100x) combinados con oculares. La apertura numérica (NA) del objetivo determina resolución: objetivos de inmersión en aceite alcanzan NA~1.4, resolviendo detalles de ~200 nm. Las cámaras científicas capturan imágenes de células, tejidos y cristales con precisión micrométrica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 Visión artificial y conducción autónoma</h3>
          <p>
            Los coches autónomos usan cámaras con diferentes distancias focales: gran angular (120°) para detección periférica, teleobjetivo para reconocimiento de señales a distancia. La apertura fija (típicamente f/2.0) maximiza entrada de luz nocturna, mientras el autoenfoque rápido (~30ms) rastrea objetos en movimiento.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌌 Fotografía de paisaje y naturaleza</h3>
          <p>
            Los fotógrafos de paisaje buscan máxima profundidad de campo usando f/11-f/16 y enfoque a distancia hiperfocal (donde tanto primer plano como infinito están nítidos). Usan filtros polarizadores para oscurecer cielos y reducir reflejos, y filtros ND graduados para equilibrar exposición entre cielo brillante y tierra oscura.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎭 Fotografía macro y close-up</h3>
          <p>
            Las lentes macro (relación 1:1) permiten fotografiar insectos, flores y detalles a tamaño real en el sensor. La profundidad de campo es extremadamente pequeña (~1mm a f/16), requiriendo técnicas de apilamiento de enfoque (focus stacking): combinar múltiples fotos con enfoque ligeramente diferente para crear una imagen completamente nítida.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De la cámara oscura al smartphone
        </h2>
        
        <div className="theory-subsection">
          <h3>🏛️ La cámara oscura (siglo V a.C. - Renacimiento)</h3>
          <p>
            El filósofo chino Mozi y el griego Aristóteles observaron que la luz pasando por un pequeño agujero proyecta una imagen invertida. Durante el Renacimiento, artistas como Leonardo da Vinci usaron cámaras oscuras (cuartos oscuros con un agujero) para trazar perspectivas precisas en sus pinturas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📸 Primera fotografía permanente (1826-1827)</h3>
          <p>
            Joseph Nicéphore Niépce creó la primera fotografía permanente usando una cámara oscura con lente y una placa de peltre cubierta de betún. La exposición duró ~8 horas. Su socio Louis Daguerre perfeccionó el proceso, creando el daguerrotipo (1839), que reducía el tiempo de exposición a minutos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎬 Película fotográfica y cámaras portátiles (1888)</h3>
          <p>
            George Eastman (Kodak) introdujo la primera cámara portátil con rollo de película flexible. Su eslogan "You press the button, we do the rest" democratizó la fotografía. Las cámaras reflex de lente única (SLR) aparecieron en los 1930s, permitiendo ver exactamente lo que la lente ve mediante un espejo y prisma.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💻 Fotografía digital (1975-presente)</h3>
          <p>
            Steven Sasson de Kodak construyó la primera cámara digital en 1975: pesó 3.6 kg, capturaba 0.01 megapíxeles y grababa en cinta magnética. Las primeras cámaras digitales comerciales llegaron en los 1990s. Hoy, los sensores CMOS de smartphones tienen 50+ megapíxeles, graban 4K/8K y procesan imágenes con IA en tiempo real.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🤖 Fotografía computacional (2010-presente)</h3>
          <p>
            La fotografía moderna usa múltiples exposiciones, fusionadas por software: HDR combina fotos claras y oscuras; focus stacking apila múltiples enfoques; modo retrato usa IA para segmentar sujeto y fondo. Google introdujo Night Sight (2018), capturando detalles en casi total oscuridad mediante alineación y fusión de docenas de fotogramas.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🕳️ La fotografía más antigua (1826) aún existe</h3>
          <p>
            La "Vista desde la ventana en Le Gras" de Niépce, la foto más antigua que sobrevive, se conserva en la Universidad de Texas. Debido a la exposición de 8+ horas, el Sol iluminó ambos lados del edificio, creando una iluminación "imposible". Hoy vale millones y requiere conservación especial debido a la fragilidad del betún.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 La foto más cara jamás vendida</h3>
          <p>
            "Rhein II" de Andreas Gursky se vendió por $4.3 millones en 2011, record para una fotografía. Muestra el río Rin con composición minimalista, pero Gursky digitó la imagen, eliminando una fábrica y paseadores de perros. ¿Es fotografía o arte digital? El debate sobre manipulación digital en fotografía continúa.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>👁️ Nuestros ojos no tienen "apertura" fija</h3>
          <p>
            La pupila humana varía de ~2mm (luz brillante) a ~8mm (oscuridad), equivalente a un rango de f/8 a f/2. Sin embargo, el ojo ajusta exposición principalmente químicamente (adaptación visual), no mecánicamente como una cámara. Podemos adaptarnos a un rango de 10¹⁰ en luminosidad, mientras las cámaras capturan solo ~10⁴ en una sola foto (sin HDR).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎨 El "efecto bokeh" es una "aberración" deseable</h3>
          <p>
            El bokeh (fondo desenfocado suave) es técnicamente una aberración óptica, pero los fotógrafos lo adoran. La forma del bokeh depende del diafragma: lentes caras usan 9-11 aspas curvas para bokeh circular suave; lentes baratas usan 5-7 aspas rectas, creando bokeh poligonal. Algunos fotográfos hacen plantillas personalizadas (corazones, estrellas) para el diafragma.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📱 Los smartphones tienen sensores minúsculos, pero...
          </h3>
          <p>
            Un sensor de iPhone (~1/2.5", ~25 mm²) es 30 veces más pequeño que una cámara full-frame (36×24 mm, 864 mm²). Esto limita profundidad de campo y rango dinámico. Sin embargo, los smartphones compensan con IA: fusión de múltiples fotogramas, reducción de ruido computacional, y Deep Fusion (iPhone) analiza cada píxel para optimizar detalle y textura.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌙 Fotografía nocturna "imposible"</h3>
          <p>
            El modo Night Sight de Google Pixel captura fotos en condiciones de &lt; 1 lux (más oscuro que luz de luna llena). Toma 15+ fotogramas de 1-4 segundos cada uno, alinea cada píxel compensando movimiento de mano, y fusiona todo reduciendo ruido. Matemáticamente, es como tener una exposición de minutos, pero sin trípode.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            Las cámaras usan lentes convergentes para formar imágenes reales en el sensor o película.
          </li>
          <li>
            Ecuación de la lente fina: 1/f = 1/dₒ + 1/dᵢ, relaciona distancia focal, objeto e imagen.
          </li>
          <li>
            La apertura (f-stop) controla cantidad de luz y profundidad de campo: f/1.8 = mucha luz, fondo desenfocado; f/16 = poca luz, todo nítido.
          </li>
          <li>
            Distancia focal determina ángulo de visión: gran angular (24mm) = amplio; teleobjetivo (200mm) = estrecho.
          </li>
          <li>
            Profundidad de campo: zona nítida, depende de apertura, distancia focal y distancia al sujeto.
          </li>
          <li>
            Fotografía computacional moderna: HDR, Night Sight, focus stacking, modo retrato con IA.
          </li>
        </ul>
      </div>
    </div>
  );
}
