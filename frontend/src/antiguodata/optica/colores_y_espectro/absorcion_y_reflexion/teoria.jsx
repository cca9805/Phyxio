import { TheorySection, Concept, Important, Example, Formula } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: 'Absorción y Reflexión de Colores',
  descripcion: 'Cómo los objetos absorben unos colores y reflejan otros',
  isTheoryOnly: true,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const AbsorcionReflexionColores = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="¿Qué significa absorción y reflexión?" emoji="🎨">
        <p>
          Cuando la luz blanca (mezcla de colores) incide en un objeto, parte de esa luz puede
          ser absorbida y parte ser reflejada. El color que percibimos es el
          conjunto de longitudes de onda que el objeto refleja o transmite hacia nuestros ojos.
        </p>
        <ul>
          <li>Reflexión: el objeto devuelve ciertos colores; esos son los que vemos.</li>
          <li>Absorción: el objeto retiene (convierte en calor) otros colores; no los vemos.</li>
        </ul>
        <Important>
          Un objeto rojo refleja principalmente componentes rojos y absorbe gran parte de los verdes/azules.
        </Important>
      </TheorySection>

      <TheorySection title="Diagrama: luz blanca, filtros y objeto" emoji="📐">
        <p>Esquema cualitativo de cómo la luz blanca interactúa con filtros y objetos de distinto color.</p>
        <div style={{ maxWidth: 760, margin: '1rem auto' }}>
          <svg viewBox="0 0 760 240" width="100%" height="240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Absorción y reflexión de colores">
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0 0 L8 4 L0 8 z" fill="#000" />
              </marker>
            </defs>

            {/* Fuente de luz blanca */}
            <g transform="translate(10,30)">
              <rect x="0" y="60" width="80" height="40" fill="#eee" stroke="#666" />
              <text x="10" y="55" fontSize="12">Luz blanca</text>
              {/* rayo blanco compuesto por segmentos RGB */}
              <line x1="80" y1="80" x2="180" y2="80" stroke="#999" strokeWidth="2" markerEnd="url(#arrow)" />
              <line x1="80" y1="76" x2="180" y2="76" stroke="#e53e3e" strokeWidth="3" />
              <line x1="80" y1="80" x2="180" y2="80" stroke="#38b2ac" strokeWidth="3" />
              <line x1="80" y1="84" x2="180" y2="84" stroke="#3182ce" strokeWidth="3" />
            </g>

            {/* Filtro verde: transmite verde, absorbe rojo/azul */}
            <g transform="translate(200,30)">
              <rect x="0" y="50" width="40" height="60" fill="#68d391" fillOpacity="0.5" stroke="#2f855a" />
              <text x="-10" y="40" fontSize="12">Filtro verde</text>
              {/* rayo transmitido (verde) */}
              <line x1="40" y1="80" x2="140" y2="80" stroke="#38b2ac" strokeWidth="3" markerEnd="url(#arrow)" />
              {/* absorbed components indication */}
              <line x1="20" y1="72" x2="20" y2="60" stroke="#e53e3e" strokeWidth="3" />
              <line x1="20" y1="88" x2="20" y2="100" stroke="#3182ce" strokeWidth="3" />
            </g>

            {/* Objeto rojo: refleja rojo, absorbe otros */}
            <g transform="translate(340,30)">
              <rect x="0" y="50" width="80" height="60" fill="#f56565" stroke="#c53030" />
              <text x="0" y="40" fontSize="12">Objeto rojo</text>
              {/* rayo incidente (verde) desde filtro */}
              <line x1="-200" y1="80" x2="0" y2="80" stroke="#38b2ac" strokeWidth="3" />
              {/* reflexión (principalmente rojo) hacia el ojo */}
              <line x1="80" y1="80" x2="200" y2="60" stroke="#e53e3e" strokeWidth="3" markerEnd="url(#arrow)" />
              {/* absorción representada como segmentos internos */}
              <line x1="40" y1="72" x2="40" y2="60" stroke="#38b2ac" strokeWidth="3" />
              <line x1="60" y1="88" x2="60" y2="100" stroke="#3182ce" strokeWidth="3" />
            </g>

            {/* Ojo/Observador */}
            <g transform="translate(560,10)">
              <circle cx="60" cy="100" r="20" fill="#ddd" stroke="#666" />
              <circle cx="60" cy="100" r="6" fill="#000" />
              <text x="40" y="40" fontSize="12">Observador</text>
            </g>
          </svg>
        </div>
      </TheorySection>

      <TheorySection title="Relación cualitativa: color percibido" emoji="🧪">
        <Formula 
          title="Color percibido (cualitativo)"
          expression={String.raw`\text{Color percibido} \approx \text{colores (longitudes de onda)} \; \text{reflejados/transmitidos}`}
          where={[
            { symbol: 'R', description: 'Componentes reflejadas (p.ej., rojo en objeto rojo)' },
            { symbol: 'A', description: 'Componentes absorbidas (no contribuyen al color visto)' }
          ]}
        />
      </TheorySection>

      <TheorySection title="Síntesis de color: aditiva y sustractiva" emoji="🧩">
        <Concept title="Aditiva (luces)">
          <p>
            La síntesis aditiva combina luces de distintos colores. RGB (rojo, verde, azul) es el modelo base de
            pantallas: sumando luces se obtiene blanco; apagando componentes se obtienen colores.
          </p>
        </Concept>
        <Concept title="Sustractiva (pigmentos)">
          <p>
            La síntesis sustractiva usa tintas/pigmentos que absorben selectivamente. CMY (cian, magenta, amarillo)
            es el modelo base en impresión: añadir pigmentos quita componentes de la luz incidente.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Iluminantes y metamerismo" emoji="💡">
        <p>
          El color percibido depende del iluminante (espectro de la luz) y del observador. Dos objetos pueden parecer
          del mismo color bajo un iluminante y diferente bajo otro: metamerismo.
        </p>
        <Example>
          Compara una prenda bajo luz solar y bajo luz LED fría: el tono puede cambiar por diferencias en el espectro.
        </Example>
      </TheorySection>

      <TheorySection title="Curvas de reflectancia (cualitativas)" emoji="📈">
        <p>
          Una curva de reflectancia muestra qué fracción de luz se refleja a cada longitud de onda. Un objeto rojo
          refleja más en torno al rojo y menos en el verde/azul.
        </p>
        <Formula 
          title="Reflectancia espectral (definición)"
          expression={String.raw`R(\lambda) = \frac{I_{ref}(\lambda)}{I_{inc}(\lambda)}`}
          where={[
            { symbol: 'R(\lambda)', description: 'Reflectancia en la longitud de onda λ' },
            { symbol: 'I_{ref}', description: 'Intensidad reflejada espectral' },
            { symbol: 'I_{inc}', description: 'Intensidad incidente espectral' }
          ]}
        />
      </TheorySection>

      <TheorySection title="Atenuación: Beer–Lambert (cualitativo)" emoji="🧪">
        <p>
          En medios semitransparentes, la intensidad transmitida disminuye aproximadamente de forma exponencial con el espesor.
        </p>
        <Formula 
          title="Ley de Beer–Lambert"
          expression={String.raw`I(\lambda) = I_0(\lambda)\, e^{-\alpha(\lambda)\, x}`}
          where={[
            { symbol: 'I(\lambda)', description: 'Intensidad transmitida a λ' },
            { symbol: 'I_0(\lambda)', description: 'Intensidad incidente a λ' },
            { symbol: '\u03b1(\lambda)', description: 'Coeficiente de absorción (depende de λ)' },
            { symbol: 'x', description: 'Espesor del medio' }
          ]}
        />
      </TheorySection>

      {/* Bloques finales en orden: Aplicaciones → Historia → Anécdotas → Resumen */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>Aplicaciones cotidianas</h3>
          <ul>
            <li>Diseño de pinturas y tintes según reflexión/absorción deseada.</li>
            <li>Filtros fotográficos para realzar ciertos colores.</li>
          </ul>
          <h3>Aplicaciones tecnológicas</h3>
          <ul>
            <li>Pantallas y sensores con filtros de color (Bayer).</li>
            <li>Iluminación LED ajustando espectro para percepción de color.</li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia breve
        </h2>
        <div className="theory-subsection">
          <ul>
            <li>Estudios del espectro visibles desde Newton con prismas.</li>
            <li>Desarrollo de síntesis aditiva/sustractiva de color en el siglo XX.</li>
          </ul>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas
        </h2>
        <div className="theory-subsection">
          <ul>
            <li>Un tomate bajo luz verde puede verse oscuro: se absorbe el verde que recibe.</li>
            <li>Las camisetas negras absorben más luz y se calientan más al sol.</li>
          </ul>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            El color percibido depende del espectro reflejado/transmitido por el objeto y del espectro de la luz incidente.
          </li>
          <li>
            Los filtros modifican qué componentes llegan al objeto; lo reflejado (no absorbido) determina el color que vemos.
          </li>
          <li>
            Síntesis aditiva (RGB): combina luces para formar colores. Síntesis sustractiva (CMY): pigmentos que absorben componentes.
          </li>
          <li>
            Metamerismo: dos objetos pueden parecer del mismo color bajo un iluminante y diferente bajo otro.
          </li>
          <li>
            Curva de reflectancia R(λ): fracción de luz reflejada a cada longitud de onda.
          </li>
          <li>
            Ley de Beer-Lambert: intensidad transmitida disminuye exponencialmente con el espesor del medio absorbente.
          </li>
        </ul>
      </div>
    </>
  );
};

export default AbsorcionReflexionColores;
