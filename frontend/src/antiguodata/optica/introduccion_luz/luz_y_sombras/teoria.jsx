import { TheorySection, Concept, Important } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "Luz y Sombras",
  descripcion: "Formación de sombras y penumbras como consecuencia de la propagación rectilínea de la luz y su interacción con objetos opacos.",
  isTheoryOnly: true,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const LuzYSombrasTeoria = () => {
  return (
    <>
      <TheorySection title="Luz y Sombras">
        <p>
          La luz se propaga en línea recta, lo que da lugar a la formación de sombras cuando un objeto opaco bloquea su paso. Este fenómeno es fundamental para entender cómo percibimos profundidad y volumen en el mundo que nos rodea.
        </p>
        <p>
          Cuando la luz incide sobre un objeto, puede ser absorbida, reflejada o transmitida. Si el objeto es opaco, la luz no lo atraviesa y se genera una zona oscura detrás: la sombra. Su forma y tamaño dependen de la posición de la fuente de luz, el tamaño del objeto y la distancia a la superficie de proyección.
        </p>
        
        <Concept title="Tipos de sombras">
          <ul>
            <li>Sombra propia: Zona del objeto que no recibe luz directamente.</li>
            <li>Sombra proyectada: Zona oscura que se forma sobre otra superficie detrás del objeto.</li>
            <li>Penumbra: Zona de transición entre sombra y luz, con iluminación parcial.</li>
          </ul>
        </Concept>

        <p>
          Una fuente de luz puntual produce sombras nítidas con bordes definidos. Una fuente extensa (como el Sol) crea penumbras con bordes difusos. Este principio explica desde sombras cotidianas hasta fenómenos astronómicos como los eclipses.
        </p>
      </TheorySection>

      <TheorySection title="Sombra vs Penumbra">
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #ddd', backgroundColor: '#f5f5f5' }}>
                <th style={{ padding: '8px', textAlign: 'left' }}>Concepto</th>
                <th style={{ padding: '8px', textAlign: 'left' }}>Descripción</th>
                <th style={{ padding: '8px', textAlign: 'left' }}>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '6px' }}>Sombra</td>
                <td style={{ padding: '6px' }}>Zona sin luz directa (borde nítido si la fuente es puntual).</td>
                <td style={{ padding: '6px' }}>Sombra de un lápiz bajo una lámpara pequeña.</td>
              </tr>
              <tr>
                <td style={{ padding: '6px' }}>Penumbra</td>
                <td style={{ padding: '6px' }}>Zona con iluminación parcial (borde difuso si la fuente es extensa).</td>
                <td style={{ padding: '6px' }}>Sombra bajo la luz del Sol (bordes suaves).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </TheorySection>

      <TheorySection title="Diagrama: luz, objeto y sombra">
        <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
          <svg viewBox="0 0 420 140" width="60%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagrama sombra y penumbra">
            {/* Fuente de luz (círculo) */}
            <circle cx="50" cy="70" r="18" fill="#FFD54F" stroke="#FBC02D" />
            <text x="20" y="30" fontSize="12">Fuente</text>
            {/* Objeto opaco (rectángulo) */}
            <rect x="160" y="50" width="20" height="40" fill="#616161" />
            <text x="155" y="45" fontSize="12">Objeto</text>
            {/* Pantalla */}
            <rect x="360" y="20" width="6" height="100" fill="#B0BEC5" />
            <text x="340" y="15" fontSize="12">Pantalla</text>
            {/* Rayos delimitando sombra*/}
            <line x1="68" y1="62" x2="360" y2="62" stroke="#FFA000" strokeDasharray="4 3" />
            <line x1="68" y1="78" x2="360" y2="78" stroke="#FFA000" strokeDasharray="4 3" />
            {/* Región de sombra proyectada */}
            <rect x="360" y="62" width="6" height="16" fill="#424242" opacity="0.5" />
            <text x="300" y="60" fontSize="12">Sombra</text>
            <text x="300" y="90" fontSize="12">Penumbra</text>
          </svg>
        </div>
        <Important>
          Si la fuente es extensa, aparecen bordes difusos (penumbra). Con fuente puntual, la sombra es nítida.
        </Important>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>📸 Fotografía y cine</h3>
          <p>
            El control de sombras es esencial para crear profundidad, drama y composición en imágenes. Los fotógrafos usan reflectores y difusores para suavizar o intensificar sombras. En cine, la iluminación en tres puntos (luz principal, relleno y contraluz) manipula sombras para modelar rostros y objetos. El claroscuro, técnica heredada de la pintura renacentista, usa contrastes extremos de luz y sombra para efectos dramáticos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ Arquitectura e iluminación</h3>
          <p>
            Los arquitectos diseñan edificios considerando cómo la luz solar proyectará sombras a lo largo del día. Las celosias y parasoles controlan la entrada de luz mientras crean patrones de sombras decorativos. El reloj de sol, uno de los instrumentos científicos más antiguos, mide el tiempo basado en la sombra proyectada por un gnomon. En iluminación urbana, se evitan sombras molestas mientras se resaltan monumentos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌑 Eclipses y astronomía</h3>
          <p>
            Los eclipses solares ocurren cuando la Luna proyecta su sombra sobre la Tierra. La umbra (sombra total) crea un eclipse total, mientras la penumbra produce un eclipse parcial. Los eclipses lunares suceden cuando la Tierra proyecta su sombra sobre la Luna. Los anillos de Saturno proyectan sombras sobre el planeta. Estudiar sombras en otros planetas ayuda a determinar la altura de montañas y cráteres.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎨 Arte y diseño</h3>
          <p>
            Las sombras dan volumen y realismo a dibujos y pinturas. El sombreado con lápiz o carbón crea gradientes que imitan cómo la luz modela objetos tridimensionales. El arte del teatro de sombras chino lleva más de 2000 años creando historias con siluetas proyectadas. Los artistas del street art usan sombras pintadas para crear ilusiones 3D espectaculares en superficies planas.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Sombras que enseñaron ciencia
        </h2>
        
        <div className="theory-subsection">
          <h3>🏛️ Eratóstenes mide la Tierra (240 a.C.)</h3>
          <p>
            El matemático griego Eratóstenes calculó la circunferencia de la Tierra con asombrosa precisión usando solo sombras. Observó que al mediodía del solsticio de verano, el Sol no proyectaba sombra en Siene (actual Asuán), mientras en Alejandría proyectaba un ángulo de 7.2°. Midiendo la distancia entre ambas ciudades y usando geometría, obtuvo 39,250 km, apenas 2% de error respecto al valor real (40,075 km).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌑 Aristarco y la distancia a la Luna (280 a.C.)</h3>
          <p>
            Aristarco de Samos usó los eclipses lunares para estimar el tamaño y distancia de la Luna. Durante un eclipse, la Tierra proyecta su sombra sobre la Luna. Midiendo cuánto tarda la Luna en atravesar completamente la sombra terrestre, calculó que la distancia Tierra-Luna era aproximadamente 60 veces el radio terrestre. Aunque sus herramientas eran primitivas, su método era científicamente correcto.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🕯️ Relojes de sol: la ciencia del tiempo (3500 a.C.)</h3>
          <p>
            Los egipcios y babilonios crearon los primeros relojes de sol hace más de 5000 años. Un obelisco (gnomon) proyecta una sombra que se mueve con el Sol, marcando las horas. Los griegos perfeccionaron el diseño con relojes hemisféricos que corregian variaciones estacionales. Hasta la invención del reloj mecánico en el siglo XIV, los relojes de sol fueron el estándar de precisión temporal.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🌒 La sombra de la Tierra es redonda</h3>
          <p>
            Los antiguos griegos observaron que durante los eclipses lunares, la sombra de la Tierra proyectada sobre la Luna es siempre circular, sin importar la hora o estación. Esta fue una de las primeras pruebas de que la Tierra es esférica, no plana. Si fuera un disco plano, la sombra sería elíptica o lineal dependiendo de la orientación. Aristóteles usó este argumento en el 350 a.C. para defender la esfericidad terrestre.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>☘️ La sombra de Hiroshima</h3>
          <p>
            En 1945, la explosión nuclear de Hiroshima emitió un flash de luz tan intenso que instantáneamente vaporizaba todo a su paso. Las personas y objetos que bloqueaban la luz dejaron "sombras" permanentes en muros y pavimentos, ya que esas zonas protegidas no sufrieron el blanqueo extremo de la superficies expuestas. Estas sombras térmicas, conservadas como memorial, son testimonios trágicos del poder destructivo de la radiación luminosa intensa.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌄 Sombras azules en la nieve</h3>
          <p>
            ¿Por qué las sombras sobre nieve blanca se ven azules? La nieve refleja toda la luz del Sol (que parece blanca), pero las sombras solo reciben luz dispersada del cielo azul. Nuestros ojos, ajustados al blanco brillante de la nieve iluminada, perciben las zonas sombreadas como azuladas por contraste. Este efecto es más notable al atardecer, cuando la luz solar es amarillo-anaranjada, intensificando el azul de las sombras por contraste complementario.
          </p>
        </div>
      </div>

      <div className="theory-section-highlight">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            Las sombras se forman por la propagación rectilínea de la luz bloqueada por objetos opacos.
          </li>
          <li>
            Tipos: sombra propia (zona no iluminada del objeto), sombra proyectada (sobre otra superficie), penumbra (zona parcialmente iluminada).
          </li>
          <li>
            Fuente puntual → sombra nítida; fuente extensa → sombra con penumbra (bordes difusos).
          </li>
          <li>
            Historia: Eratóstenes midió la Tierra (240 a.C.), Aristarco estimó la distancia lunar usando eclipses.
          </li>
          <li>
            Aplicaciones: fotografía (control de profundidad), arquitectura (relojes de sol), astronomía (eclipses).
          </li>
          <li>
            Curiosidad: La sombra circular de la Tierra en la Luna demostró que nuestro planeta es esférico.
          </li>
        </ul>
      </div>
    </>
  );
};

export default LuzYSombrasTeoria;
