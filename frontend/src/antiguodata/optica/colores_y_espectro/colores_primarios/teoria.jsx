import { TheorySection, Concept, Important, Example, Formula } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: 'Colores Primarios',
  descripcion: 'Modelos de primarios: aditiva (RGB) y sustractiva (CMY/CMYK)',
  isTheoryOnly: true,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const ColoresPrimarios = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="¿Qué son los colores primarios?" emoji="🎨">
        <p>
          Los colores primarios dependen del modelo de mezcla:
        </p>
        <ul>
          <li>Aditiva (luces): RGB (rojo, verde, azul). Sumando luces se obtiene blanco.</li>
          <li>Sustractiva (pigmentos): CMY (cian, magenta, amarillo). Añadiendo pigmentos se quitan componentes.</li>
        </ul>
        <Important>
          RGB se usa en pantallas y dispositivos emisivos; CMY/CMYK en impresión y pigmentos.
        </Important>
      </TheorySection>

      <TheorySection title="Diagrama: mezcla aditiva RGB" emoji="📐">
        <p>Superposición de luces de colores primarios produce secundarios y, con los tres, blanco.</p>
        <div style={{ maxWidth: 640, margin: '1rem auto' }}>
          <svg viewBox="0 0 640 240" width="100%" height="240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mezcla aditiva RGB">
            {/* círculos translúcidos para RGB */}
            <circle cx="240" cy="120" r="80" fill="rgba(255,0,0,0.5)" />
            <circle cx="320" cy="120" r="80" fill="rgba(0,255,0,0.5)" />
            <circle cx="280" cy="60" r="80" fill="rgba(0,0,255,0.5)" />
            {/* etiquetas */}
            <text x="210" y="210" fontSize="12">Rojo (R)</text>
            <text x="330" y="210" fontSize="12">Verde (G)</text>
            <text x="270" y="30" fontSize="12">Azul (B)</text>
            {/* zonas resultantes (aprox.) */}
            <text x="255" y="115" fontSize="12">Blanco (R+G+B)</text>
            <text x="300" y="150" fontSize="12">Amarillo (R+G)</text>
            <text x="240" y="80" fontSize="12">Magenta (R+B)</text>
            <text x="335" y="80" fontSize="12">Cian (G+B)</text>
          </svg>
        </div>
      </TheorySection>

      <TheorySection title="Diagrama: mezcla sustractiva CMY" emoji="📐">
        <p>Superposición de pigmentos quita componentes del espectro; CMY ideal tiende a negro.</p>
        <div style={{ maxWidth: 640, margin: '1rem auto' }}>
          <svg viewBox="0 0 640 240" width="100%" height="240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mezcla sustractiva CMY">
            <circle cx="240" cy="120" r="80" fill="rgba(0,255,255,0.5)" />
            <circle cx="320" cy="120" r="80" fill="rgba(255,0,255,0.5)" />
            <circle cx="280" cy="60" r="80" fill="rgba(255,255,0,0.5)" />
            <text x="210" y="210" fontSize="12">Cian (C)</text>
            <text x="330" y="210" fontSize="12">Magenta (M)</text>
            <text x="270" y="30" fontSize="12">Amarillo (Y)</text>
            <text x="265" y="115" fontSize="12">Negro ideal (C+M+Y)</text>
            <text x="300" y="150" fontSize="12">Rojo (M+Y absorben C)</text>
            <text x="230" y="80" fontSize="12">Verde (C+Y absorben M)</text>
            <text x="335" y="80" fontSize="12">Azul (C+M absorben Y)</text>
          </svg>
        </div>
      </TheorySection>

      <TheorySection title="Modelos y fórmulas" emoji="📘">
        <Concept title="RGB (aditivo)">
          <Formula 
            title="Composición aditiva"
            expression={String.raw`\text{Color} = f(R, G, B)`}
            where={[
              { symbol: 'R,G,B', description: 'Componentes de luz roja, verde, azul (0-1)' }
            ]}
          />
        </Concept>
        <Concept title="CMY/CMYK (sustractivo)">
          <Formula 
            title="Conversión simple RGB→CMY"
            expression={String.raw`C = 1-R,\; M = 1-G,\; Y = 1-B`}
            where={[
              { symbol: 'C,M,Y', description: 'Pigmentos cian, magenta, amarillo (0-1)' }
            ]}
          />
          <Important>
            En impresión se añade K (negro) para mejorar contraste y economía de tinta.
          </Important>
        </Concept>
      </TheorySection>

      {/* Bloques finales: Aplicaciones → Historia → Anécdotas → Resumen */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <ul>
            <li>Pantallas (RGB) y calibración de color.</li>
            <li>Impresión (CMYK) y gestión cromática.</li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia breve
        </h2>
        <div className="theory-subsection">
          <ul>
            <li>Prismas y espectro (Newton) → modelos de color modernos.</li>
            <li>Televisión y monitores RGB; impresión CMYK.</li>
          </ul>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas
        </h2>
        <div className="theory-subsection">
          <ul>
            <li>Dos pantallas pueden mostrar colores distintos con el mismo archivo: diferente calibración/iluminante.</li>
            <li>La mezcla de pinturas no sigue exactamente las sumas ideales CMY por espectros reales de pigmentos.</li>
          </ul>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            Los colores primarios dependen del modelo: RGB (aditivo, luces) y CMY/CMYK (sustractivo, pigmentos).
          </li>
          <li>
            RGB: sumando rojo, verde y azul se obtiene blanco. Usado en pantallas y dispositivos emisivos.
          </li>
          <li>
            CMY: cian, magenta y amarillo absorben componentes; idealmente producen negro. Usado en impresión.
          </li>
          <li>
            CMYK: añade negro (K) para mejor contraste y economía de tinta en impresión.
          </li>
          <li>
            Conversión simple RGB→CMY: C=1-R, M=1-G, Y=1-B.
          </li>
          <li>
            Mezcla aditiva produce secundarios: rojo+verde=amarillo, rojo+azul=magenta, verde+azul=cian.
          </li>
        </ul>
      </div>
    </>
  );
};

export default ColoresPrimarios;
