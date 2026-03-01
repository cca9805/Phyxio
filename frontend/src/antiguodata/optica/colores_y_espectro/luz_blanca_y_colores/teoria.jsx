import { TheorySection, Concept, Important, Example, Formula } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: 'Luz Blanca y Colores',
  descripcion: 'Qué es la luz blanca y cómo se perciben los colores según reflexión, absorción y mezcla',
  isTheoryOnly: true,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const LuzBlancaYColores = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="¿Qué es la luz blanca?" emoji="💡">
        <p>
          La luz blanca contiene un continuo de colores (longitudes de onda) dentro del espectro visible.
          Al interactuar con objetos (reflexión/absorción/transmisión) percibimos colores según qué componentes llegan a nuestros ojos.
        </p>
        <Important>
          Un objeto parece de un color porque refleja o transmite ciertas longitudes de onda y absorbe otras.
        </Important>
      </TheorySection>

      <TheorySection title="Diagrama: luz blanca, filtros y percepción" emoji="📐">
        <p>Esquema cualitativo: luz blanca atravesando filtros y reflejándose en objetos, y color percibido por el observador.</p>
        <div style={{ maxWidth: 780, margin: '1rem auto' }}>
          <svg viewBox="0 0 780 240" width="100%" height="240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Luz blanca y colores percibidos">
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0 0 L8 4 L0 8 z" fill="#000" />
              </marker>
              <linearGradient id="whiteBeam" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6a00ff" />
                <stop offset="15%" stopColor="#0033ff" />
                <stop offset="35%" stopColor="#00cc66" />
                <stop offset="55%" stopColor="#ffee00" />
                <stop offset="70%" stopColor="#ff9900" />
                <stop offset="100%" stopColor="#ff0000" />
              </linearGradient>
            </defs>

            {/* Fuente de luz blanca */}
            <rect x="20" y="95" width="80" height="50" fill="#eee" stroke="#666" />
            <text x="25" y="80" fontSize="12" fill="#fff">Luz blanca</text>
            <rect x="100" y="110" width="160" height="20" fill="url(#whiteBeam)" stroke="#333" />

            {/* Filtro azul: transmite azul, absorbe otros */}
            <rect x="280" y="95" width="30" height="50" fill="#4299e1" fillOpacity="0.6" stroke="#2b6cb0" />
            <text x="270" y="80" fontSize="12" fill="#fff">Filtro azul</text>
            <line x1="310" y1="110" x2="420" y2="110" stroke="#2b6cb0" strokeWidth="4" markerEnd="url(#arrow)" />

            {/* Objeto amarillo: refleja amarillo, absorbe azul/otros */}
            <rect x="430" y="95" width="80" height="50" fill="#f6e05e" stroke="#d69e2e" />
            <text x="430" y="80" fontSize="12" fill="#fff">Objeto amarillo</text>
            {/* reflexión hacia el observador (amarillo) */}
            <line x1="510" y1="110" x2="640" y2="95" stroke="#f6e05e" strokeWidth="4" markerEnd="url(#arrow)" />

            {/* Observador */}
            <g transform="translate(650,60)">
              <circle cx="60" cy="60" r="22" fill="#ddd" stroke="#666" />
              <circle cx="60" cy="60" r="6" fill="#000" />
              <text x="40" y="20" fontSize="12" fill="#fff">Observador</text>
            </g>
          </svg>
        </div>
      </TheorySection>

      <TheorySection title="Relación cualitativa" emoji="🧪">
        <Formula 
          title="Color percibido vs espectro"
          expression={String.raw`\text{Color percibido} \sim \text{componentes del espectro reflejadas/transmitidas hacia el ojo}`}
          where={[
            { symbol: 'Espectro incidente', description: 'Distribución de longitudes de onda de la luz que llega' },
            { symbol: 'Respuesta del objeto', description: 'Reflectancia/transmitancia espectral del material' }
          ]}
        />
      </TheorySection>

      {/* Bloques finales en orden: Aplicaciones → Historia → Anécdotas → Resumen */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <ul>
            <li>Diseño de iluminación y museografía según percepción de color.</li>
            <li>Selección de filtros para fotografía y visión científica.</li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia breve
        </h2>
        <div className="theory-subsection">
          <ul>
            <li>Newton: luz blanca como suma de colores mediante prismas.</li>
            <li>Desarrollo de modelos de color y espacios cromáticos modernos.</li>
          </ul>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas
        </h2>
        <div className="theory-subsection">
          <ul>
            <li>El mismo objeto cambia de color aparente bajo distintos iluminantes (metamerismo).</li>
            <li>Una camiseta negra se calienta más al sol: absorbe gran parte del espectro.</li>
          </ul>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            La luz blanca contiene un continuo de colores (longitudes de onda) dentro del espectro visible.
          </li>
          <li>
            Los objetos parecen de un color porque reflejan o transmiten ciertas longitudes de onda y absorben otras.
          </li>
          <li>
            El color percibido depende de las componentes del espectro reflejadas/transmitidas hacia el ojo.
          </li>
          <li>
            Los filtros ópticos modifican qué componentes espectrales pasan: un filtro azul transmite azul y absorbe otros colores.
          </li>
          <li>
            Metamerismo: el mismo objeto puede cambiar de color aparente bajo distintos iluminantes (luz solar vs LED).
          </li>
          <li>
            Objetos negros absorben gran parte del espectro y se calientan más; objetos blancos reflejan la mayoría del espectro.
          </li>
        </ul>
      </div>
    </>
  );
};

export default LuzBlancaYColores;
