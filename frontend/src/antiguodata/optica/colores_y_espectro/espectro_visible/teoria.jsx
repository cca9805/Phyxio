import { TheorySection, Concept, Important, Example, Formula } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: 'Espectro Visible',
  descripcion: 'Rango de longitudes de onda visibles (≈380–700 nm) y colores asociados',
  isTheoryOnly: true,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const EspectroVisible = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="¿Qué es el espectro visible?" emoji="🌈">
        <p>
             El espectro visible es el conjunto de longitudes de onda de la luz que el ojo humano puede detectar
             aproximadamente entre 380 nm y 700 nm. Cada rango se percibe como un color.
        </p>
        <ul>
          <li>Violeta ≈ 380–430 nm</li>
          <li>Azul ≈ 430–500 nm</li>
          <li>Verde ≈ 500–570 nm</li>
          <li>Amarillo ≈ 570–590 nm</li>
          <li>Naranja ≈ 590–620 nm</li>
          <li>Rojo ≈ 620–700 nm</li>
        </ul>
        <Important>
          Los límites exactos varían entre individuos y condiciones de observación.
        </Important>
      </TheorySection>

      <TheorySection title="Dispersión con prisma (cualitativo)" emoji="🔺">
        <p>Un prisma separa la luz blanca porque cada longitud de onda se refracta con un ángulo diferente.</p>
        <div style={{ maxWidth: 760, margin: '1rem auto' }}>
          <svg viewBox="0 0 760 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dispersión de luz blanca por prisma">
            {/* Luz blanca incidente */}
            <line x1="40" y1="110" x2="260" y2="110" stroke="#ccc" strokeWidth="6" />
            <text x="50" y="95" fontSize="12" fill="#fff">Luz blanca</text>
            {/* Prisma */}
            <polygon points="300,60 360,110 300,160" fill="#eef" stroke="#666" />
            {/* Rayos dispersos (cualitativos) */}
            <line x1="360" y1="110" x2="600" y2="90" stroke="#6a00ff" strokeWidth="3" />
            <line x1="360" y1="110" x2="610" y2="105" stroke="#0033ff" strokeWidth="3" />
            <line x1="360" y1="110" x2="620" y2="120" stroke="#00cc66" strokeWidth="3" />
            <line x1="360" y1="110" x2="630" y2="135" stroke="#ffee00" strokeWidth="3" />
            <line x1="360" y1="110" x2="640" y2="150" stroke="#ff9900" strokeWidth="3" />
            <line x1="360" y1="110" x2="650" y2="165" stroke="#ff0000" strokeWidth="3" />
            {/* Etiquetas */}
            <text x="610" y="85" fontSize="12" fill="#fff">Violeta</text>
            <text x="625" y="100" fontSize="12" fill="#fff">Azul</text>
            <text x="635" y="118" fontSize="12" fill="#fff">Verde</text>
            <text x="645" y="132" fontSize="12" fill="#fff">Amarillo</text>
            <text x="655" y="148" fontSize="12" fill="#fff">Naranja</text>
            <text x="665" y="165" fontSize="12" fill="#fff">Rojo</text>
          </svg>
        </div>
        <Important>
          En materiales reales, el índice de refracción depende de la longitud de onda (dispersión), por eso se separan los colores.
        </Important>
      </TheorySection>

      <TheorySection title="Diagrama: barra de espectro y marcas" emoji="📐">
        <p>Visualización cualitativa del espectro visible con marcas de longitud de onda.</p>
        <div style={{ maxWidth: 760, margin: '1rem auto' }}>
          <svg viewBox="0 0 760 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Espectro visible 380–700 nm">
            {/* Barra de espectro */}
            <defs>
              <linearGradient id="spectra" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6a00ff" />
                <stop offset="15%" stopColor="#0033ff" />
                <stop offset="35%" stopColor="#00cc66" />
                <stop offset="55%" stopColor="#ffee00" />
                <stop offset="70%" stopColor="#ff9900" />
                <stop offset="100%" stopColor="#ff0000" />
              </linearGradient>
            </defs>
            <rect x="40" y="80" width="680" height="40" fill="url(#spectra)" stroke="#333" />

            {/* Marcas de longitud de onda */}
            {[
              { x: 40, label: '380 nm' },
              { x: 160, label: '430 nm' },
              { x: 280, label: '500 nm' },
              { x: 380, label: '570 nm' },
              { x: 460, label: '590 nm' },
              { x: 560, label: '620 nm' },
              { x: 720, label: '700 nm' }
            ].map((m, i) => (
              <g key={i}>
                <line x1={m.x} y1="70" x2={m.x} y2="130" stroke="#555" />
                <text x={m.x - 18} y="60" fontSize="12" fill="#fff">{m.label}</text>
              </g>
            ))}

            {/* Etiquetas de colores */}
            <text x="60" y="150" fontSize="12">Violeta</text>
            <text x="190" y="150" fontSize="12">Azul</text>
            <text x="310" y="150" fontSize="12">Verde</text>
            <text x="400" y="150" fontSize="12">Amarillo</text>
            <text x="480" y="150" fontSize="12">Naranja</text>
            <text x="630" y="150" fontSize="12">Rojo</text>
            <text x="60" y="150" fontSize="12" fill="#fff">Violeta</text>
            <text x="190" y="150" fontSize="12" fill="#fff">Azul</text>
            <text x="310" y="150" fontSize="12" fill="#fff">Verde</text>
            <text x="400" y="150" fontSize="12" fill="#fff">Amarillo</text>
            <text x="480" y="150" fontSize="12" fill="#fff">Naranja</text>
            <text x="630" y="150" fontSize="12" fill="#fff">Rojo</text>
          </svg>
        </div>
      </TheorySection>

      <TheorySection title="Relaciones básicas" emoji="📘">
        <Formula 
          title="Frecuencia y longitud de onda"
          expression={String.raw`c = \lambda\, f`}
          where={[
            { symbol: 'c', description: 'Velocidad de la luz (≈ 3\times10^8 m/s)' },
            { symbol: '\\lambda', description: 'Longitud de onda (m)' },
            { symbol: 'f', description: 'Frecuencia (Hz)' }
          ]}
        />
        <Concept title="Energía de fotón (opcional)">
          <Formula 
            title="Relación de Planck"
            expression={String.raw`E = h\, f = \frac{h\, c}{\lambda}`}
            where={[
              { symbol: 'E', description: 'Energía del fotón (J)' },
              { symbol: 'h', description: 'Constante de Planck (6.626\times10^{-34} J·s)' }
            ]}
          />
        </Concept>
      </TheorySection>

      {/* Bloques finales en orden: Aplicaciones → Historia → Anécdotas → Resumen */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <ul>
            <li>Espectrofotometría y análisis de materiales por absorción/reflexión.</li>
            <li>Iluminación y percepción del color en diseño arquitectónico.</li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia breve
        </h2>
        <div className="theory-subsection">
          <ul>
            <li>Newton: descomposición de la luz blanca con prismas.</li>
            <li>Desarrollo de espectros y líneas de Fraunhofer en óptica clásica.</li>
          </ul>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas
        </h2>
        <div className="theory-subsection">
          <ul>
            <li>Las "colores puros" del arcoíris son mezclas continuas; los límites son convencionales.</li>
            <li>Muchos animales perciben rangos distintos (p. ej., UV en algunas aves e insectos).</li>
          </ul>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            El espectro visible abarca aproximadamente de 380 nm a 700 nm, rango que el ojo humano puede detectar.
          </li>
          <li>
            Colores por rango: violeta (380-430 nm), azul (430-500 nm), verde (500-570 nm), amarillo (570-590 nm), naranja (590-620 nm), rojo (620-700 nm).
          </li>
          <li>
            La dispersión con prisma separa la luz blanca porque el índice de refracción depende de la longitud de onda.
          </li>
          <li>
            Relación fundamental: c = λ·f, donde c es la velocidad de la luz, λ la longitud de onda y f la frecuencia.
          </li>
          <li>
            Energía del fotón: E = h·f = (h·c)/λ, donde h es la constante de Planck.
          </li>
          <li>
            Los límites exactos del espectro visible varían entre individuos y condiciones de observación.
          </li>
        </ul>
      </div>
    </>
  );
};

export default EspectroVisible;
