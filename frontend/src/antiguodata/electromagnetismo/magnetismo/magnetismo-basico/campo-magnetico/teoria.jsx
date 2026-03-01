import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';

export const metadata = {
  titulo: "Campo Magnético",
  descripcion: "Líneas de campo, brújulas y el campo magnético terrestre",
  isTheoryOnly: true,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const CampoMagnetico = ({ exercises }) => {
  return (
    <>
      <Concept title="¿Qué es un campo magnético?" color="purple" icon="🌀">
        <p>
          El campo magnético es la región del espacio alrededor de un 
          imán donde se manifiestan fuerzas magnéticas. Es invisible pero podemos 
          visualizarlo con limaduras de hierro o brújulas.
        </p>
        <div className="destacado">
          <p>
            💡 Idea clave: El campo magnético es un campo vectorial: 
            en cada punto tiene una dirección y una intensidad. Se representa con 
            líneas de campo.
          </p>
        </div>
      </Concept>

      <TheorySection title="Líneas de Campo Magnético">
        <Concept title="Visualización del campo">
          <div className="svg-container" style={{textAlign: 'center', margin: '20px 0'}}>
            <svg width="500" height="350" viewBox="0 0 500 350">
              <text x="150" y="25" fontSize="16" fontWeight="bold">Líneas de Campo Magnético</text>
              
              {/* Imán */}
              <rect x="180" y="150" width="70" height="50" rx="5" fill="#e57373" stroke="#333" strokeWidth="2"/>
              <rect x="250" y="150" width="70" height="50" rx="5" fill="#64b5f6" stroke="#333" strokeWidth="2"/>
              <text x="215" y="180" fontSize="20" fontWeight="bold" fill="white">N</text>
              <text x="285" y="180" fontSize="20" fontWeight="bold" fill="white">S</text>
              
              {/* Líneas de campo */}
              <g stroke="#9c27b0" strokeWidth="2" fill="none">
                {/* Líneas superiores */}
                <path d="M 180 150 Q 100 80, 180 50 Q 250 20, 320 50 Q 400 80, 320 150"/>
                <path d="M 180 160 Q 120 110, 180 80 Q 250 60, 320 80 Q 380 110, 320 160"/>
                <path d="M 180 170 Q 140 140, 180 120 Q 250 100, 320 120 Q 360 140, 320 170"/>
                
                {/* Líneas inferiores */}
                <path d="M 180 200 Q 100 270, 180 300 Q 250 330, 320 300 Q 400 270, 320 200"/>
                <path d="M 180 190 Q 120 240, 180 270 Q 250 290, 320 270 Q 380 240, 320 190"/>
                <path d="M 180 180 Q 140 210, 180 230 Q 250 250, 320 230 Q 360 210, 320 180"/>
                
                {/* Líneas laterales */}
                <path d="M 180 175 L 100 175"/>
                <path d="M 320 175 L 400 175"/>
              </g>
              
              {/* Flechas */}
              <polygon points="315,145 320,150 315,155" fill="#9c27b0"/>
              <polygon points="315,195 320,200 315,205" fill="#9c27b0"/>
            </svg>
          </div>

          <div className="info-box">
            <h3>Propiedades de las líneas de campo</h3>
            <ul>
              <li>Salen del polo Norte y entran por el polo Sur</li>
              <li>Nunca se cruzan entre sí</li>
              <li>Más juntas = campo más intenso</li>
              <li>Más separadas = campo más débil</li>
              <li>Son líneas cerradas (continúan dentro del imán)</li>
              <li>La tangente indica la dirección del campo</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="La Brújula">
        <Concept title="Detector de campo magnético">
          <p>
            Una brújula es simplemente un imán pequeño que puede girar 
            libremente. Se alinea con el campo magnético presente.
          </p>

          <Example title="Experimento con brújulas" icon="🧭">
            <p>Coloca varias brújulas alrededor de un imán:</p>
            <ul>
              <li>Cerca del polo Norte: Las agujas apuntan hacia afuera</li>
              <li>Cerca del polo Sur: Las agujas apuntan hacia el imán</li>
              <li>A los lados: Las agujas se curvan siguiendo las líneas de campo</li>
            </ul>
            <p>Las brújulas "dibujan" las líneas de campo magnético.</p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Campo Magnético Terrestre">
        <Concept title="La Tierra: un imán gigante" color="blue" icon="🌍">
          <p>
            La Tierra tiene un campo magnético generado por el movimiento del hierro 
            fundido en su núcleo externo. Funciona como un imán gigante.
          </p>

          <div className="info-box">
            <h3>Características del campo terrestre</h3>
            <ul>
              <li>Polo Norte magnético: Cerca del polo Norte geográfico (Canadá)</li>
              <li>Polo Sur magnético: Cerca del polo Sur geográfico (Antártida)</li>
              <li>Intensidad: ≈50 μT (microteslas) en la superficie</li>
              <li>Inclinación: Varía según la latitud</li>
              <li>Declinación: Diferencia entre Norte magnético y geográfico</li>
              <li>Inversiones: Los polos se han invertido cientos de veces</li>
            </ul>
          </div>

          <Important>
            <p>
              🛡️ Protección vital: El campo magnético terrestre nos 
              protege del viento solar (partículas cargadas del Sol). Sin él, la 
              radiación solar habría eliminado nuestra atmósfera hace millones de años.
            </p>
          </Important>
        </Concept>

        <Concept title="Auroras boreales y australes" color="green" icon="🌌">
          <p>
            Las auroras son uno de los fenómenos más espectaculares 
            causados por el campo magnético terrestre.
          </p>
          <ul>
            <li>Partículas del viento solar llegan a la Tierra</li>
            <li>El campo magnético las desvía hacia los polos</li>
            <li>Chocan con la atmósfera a gran altura</li>
            <li>Excitan átomos de oxígeno y nitrógeno</li>
            <li>Producen luz de colores: verde, rojo, azul, violeta</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Intensidad del Campo">
        <Concept title="Medición del campo magnético">
          <p>
            La intensidad del campo magnético se mide en teslas (T) 
            o gauss (G). 1 T = 10,000 G.
          </p>

          <div className="info-box">
            <h3>Intensidades típicas</h3>
            <ul>
              <li>Campo terrestre: 50 μT (0.5 G)</li>
              <li>Imán de nevera: 5 mT (50 G)</li>
              <li>Imán de neodimio: 1 T (10,000 G)</li>
              <li>Resonancia magnética (MRI): 1.5-3 T</li>
              <li>Electroimán de laboratorio: hasta 45 T</li>
              <li>Estrella de neutrones: 10⁸ T</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <ul>
          <li>Navegación: Brújulas, GPS</li>
          <li>Medicina: Resonancia magnética (MRI)</li>
          <li>Industria: Separadores magnéticos</li>
          <li>Investigación: Aceleradores de partículas</li>
          <li>Transporte: Trenes maglev</li>
          <li>Almacenamiento: Discos duros, cintas magnéticas</li>
        </ul>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2><span>📜</span> Historia del campo magnético</h2>
        <p>
          En 1600, William Gilbert fue el primero en proponer que la Tierra es un imán gigante. 
          En 1820, Hans Christian Ørsted descubrió que las corrientes eléctricas crean campos magnéticos, 
          unificando electricidad y magnetismo. Michael Faraday introdujo el concepto de "líneas de campo" 
          en 1831 para visualizar las fuerzas magnéticas. James Clerk Maxwell formalizó matemáticamente 
          el electromagnetismo en 1865, demostrando que la luz es una onda electromagnética.
        </p>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas y curiosidades</h2>
        <p>
          El campo magnético terrestre se invierte cada 200,000-300,000 años en promedio, aunque la última 
          inversión ocurrió hace 780,000 años. Durante una inversión, el campo se debilita pero no desaparece 
          completamente. Las palomas y muchas aves migratorias tienen magnetita en sus cerebros que les permite 
          detectar el campo magnético terrestre para orientarse. Los científicos han descubierto que Marte 
          perdió su campo magnético hace 4,000 millones de años, lo que permitió que el viento solar eliminara 
          su atmósfera, convirtiendo el planeta en un desierto frío.
        </p>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3 className="concept-title">Resumen</h3>
        <div className="concept-body">
          <ul>
            <li>El campo magnético es la región donde actúan fuerzas magnéticas</li>
            <li>Se visualiza con líneas de campo que van de N a S</li>
            <li>Las brújulas se alinean con el campo magnético</li>
            <li>La Tierra tiene un campo magnético que nos protege</li>
            <li>Se mide en teslas (T) o gauss (G)</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CampoMagnetico;
