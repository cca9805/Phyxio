import { TheorySection, Concept, Formula, Important, Example, ExercisesSection } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';
import ejercicios from './ejercicios.json';

// Metadatos del tema
export const metadata = {
  titulo: "Transformadores",
  descripcion: "Transformadores eléctricos: concepto, tipos y aplicaciones cotidianas",
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const TransformadoresTheory = () => {
  return (
    <>
      <TheorySection title="¿Qué es un Transformador?">
        <Concept title="Concepto Básico">
          <p>
            Un transformador es un dispositivo eléctrico que permite cambiar el voltaje de la corriente alterna. 
            Es el aparato que hace posible que podamos usar nuestros móviles, portátiles y otros dispositivos que necesitan voltajes diferentes 
            al que llega a nuestras casas (230V en España).
          </p>
          <Important>
            Los transformadores solo funcionan con corriente alterna (CA), no con corriente continua (CC). 
            Por eso los cargadores de móvil tienen dos partes: el transformador (que baja de 230V a 5V) y un rectificador 
            (que convierte CA en CC).
          </Important>
        </Concept>

        <Concept title="¿Cómo Funciona?">
          <p>
            Un transformador tiene dos bobinas de cable enrolladas alrededor de un núcleo de hierro:
          </p>
          <ul>
            <li>Bobina primaria: Conectada a la fuente de voltaje (entrada)</li>
            <li>Bobina secundaria: Conectada al dispositivo que queremos alimentar (salida)</li>
            <li>Núcleo de hierro: Transmite la energía magnética entre las bobinas</li>
          </ul>
          <p>
            Cuando pasa corriente alterna por la bobina primaria, crea un campo magnético variable en el núcleo. 
            Este campo magnético induce un voltaje en la bobina secundaria. El voltaje de salida depende del número de vueltas 
            de cada bobina.
          </p>
        </Concept>

        <svg viewBox="0 0 400 180" className="circuit-svg" style={{ maxWidth: '500px', margin: '20px auto' }}>
          {/* Núcleo del transformador */}
          <rect x="170" y="50" width="60" height="80" fill="#8B4513" stroke="#654321" strokeWidth="2" rx="3"/>
          
          {/* Bobina primaria (izquierda) */}
          <g>
            <circle cx="155" cy="60" r="5" fill="none" stroke="#FF6B6B" strokeWidth="2"/>
            <circle cx="155" cy="72" r="5" fill="none" stroke="#FF6B6B" strokeWidth="2"/>
            <circle cx="155" cy="84" r="5" fill="none" stroke="#FF6B6B" strokeWidth="2"/>
            <circle cx="155" cy="96" r="5" fill="none" stroke="#FF6B6B" strokeWidth="2"/>
            <circle cx="155" cy="108" r="5" fill="none" stroke="#FF6B6B" strokeWidth="2"/>
            <circle cx="155" cy="120" r="5" fill="none" stroke="#FF6B6B" strokeWidth="2"/>
            <text x="80" y="93" fontSize="11" fill="#FF6B6B" fontWeight="bold">Primaria (N₁)</text>
          </g>
          
          {/* Bobina secundaria (derecha) */}
          <g>
            <circle cx="245" cy="72" r="5" fill="none" stroke="#4ECDC4" strokeWidth="2"/>
            <circle cx="245" cy="84" r="5" fill="none" stroke="#4ECDC4" strokeWidth="2"/>
            <circle cx="245" cy="96" r="5" fill="none" stroke="#4ECDC4" strokeWidth="2"/>
            <circle cx="245" cy="108" r="5" fill="none" stroke="#4ECDC4" strokeWidth="2"/>
            <text x="255" y="93" fontSize="11" fill="#4ECDC4" fontWeight="bold">Secundaria (N₂)</text>
          </g>
          
          {/* Conexiones entrada */}
          <line x1="60" y1="60" x2="150" y2="60" stroke="#FF6B6B" strokeWidth="2"/>
          <line x1="60" y1="120" x2="150" y2="120" stroke="#FF6B6B" strokeWidth="2"/>
          <text x="15" y="93" fontSize="12" fill="currentColor" fontWeight="bold">V₁ = 230V</text>
          
          {/* Conexiones salida */}
          <line x1="250" y1="72" x2="340" y2="72" stroke="#4ECDC4" strokeWidth="2"/>
          <line x1="250" y1="108" x2="340" y2="108" stroke="#4ECDC4" strokeWidth="2"/>
          <text x="350" y="93" fontSize="12" fill="currentColor" fontWeight="bold">V₂</text>
          
          {/* Campo magnético */}
          <path d="M 200 45 L 200 30" stroke="#FFD700" strokeWidth="2" markerEnd="url(#arrow-tf)"/>
          <path d="M 200 135 L 200 150" stroke="#FFD700" strokeWidth="2" markerEnd="url(#arrow-tf)"/>
          <text x="160" y="18" fontSize="10" fill="#FFD700">Campo magnético</text>
          
          {/* Definición de flecha */}
          <defs>
            <marker id="arrow-tf" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <polygon points="0 0, 8 4, 0 8" fill="#FFD700"/>
            </marker>
          </defs>
        </svg>
      </TheorySection>

      <TheorySection title="Tipos de Transformadores">
        <Concept title="Transformador Reductor">
          <p>
            Un transformador es reductor cuando el voltaje de salida es menor que el de entrada.
          </p>
          <p>
            Características:
          </p>
          <ul>
            <li>La bobina secundaria tiene menos vueltas que la primaria (N₂ &lt; N₁)</li>
            <li>Reduce el voltaje: V₂ &lt; V₁</li>
            <li>Es el tipo más común en casa</li>
          </ul>
          <Example title="Ejemplos cotidianos">
            <ul>
              <li>🔌 Cargador de móvil: 230V → 5V (reduce 46 veces)</li>
              <li>💻 Adaptador de portátil: 230V → 19V (reduce 12 veces)</li>
              <li>🔔 Timbre de casa: 230V → 12V (reduce 19 veces)</li>
              <li>🎮 Consola de videojuegos: 230V → 12V</li>
              <li>💡 Luces LED de bajo voltaje: 230V → 12V</li>
            </ul>
          </Example>
        </Concept>

        <Concept title="Transformador Elevador">
          <p>
            Un transformador es elevador cuando el voltaje de salida es mayor que el de entrada.
          </p>
          <p>
            Características:
          </p>
          <ul>
            <li>La bobina secundaria tiene más vueltas que la primaria (N₂ &gt; N₁)</li>
            <li>Aumenta el voltaje: V₂ &gt; V₁</li>
            <li>Menos común en casa, más en industria</li>
          </ul>
          <Example title="Ejemplos de uso">
            <ul>
              <li>⚡ Transporte de electricidad: 20.000V → 400.000V (para reducir pérdidas)</li>
              <li>🔬 Tubos de rayos X: 230V → 100.000V</li>
              <li>📺 Televisores antiguos (CRT): 230V → 25.000V</li>
              <li>⚡ Bobinas de Tesla: Para experimentos de alta tensión</li>
            </ul>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Relación de Transformación">
        <Concept title="Fórmula Básica">
          <p>
            La relación entre los voltajes de entrada y salida depende del número de vueltas de cada bobina:
          </p>
          <Formula
            expression={String.raw`\frac{V_2}{V_1} = \frac{N_2}{N_1}`}
            calculatorId="transformadores_eso"
            definitions={definitions}
            exercises={ejercicios}
            complementary={[
              { description: "Calcular V₁", expression: String.raw`V_1 = V_2 \times \frac{N_1}{N_2}` },
              { description: "Calcular N₁", expression: String.raw`N_1 = N_2 \times \frac{V_1}{V_2}` }
            ]}
          />
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>V₁ = Voltaje de entrada (primario) en voltios (V)</li>
            <li>V₂ = Voltaje de salida (secundario) en voltios (V)</li>
            <li>N₁ = Número de vueltas de la bobina primaria</li>
            <li>N₂ = Número de vueltas de la bobina secundaria</li>
          </ul>
          <p>
            Esta fórmula nos dice que:
          </p>
          <ul>
            <li>Si N₂ &lt; N₁ → V₂ &lt; V₁ (transformador reductor)</li>
            <li>Si N₂ &gt; N₁ → V₂ &gt; V₁ (transformador elevador)</li>
            <li>Si N₂ = N₁ → V₂ = V₁ (transformador de aislamiento)</li>
          </ul>
        </Concept>

        <Example title="Ejemplo: Cargador de móvil">
          <p>Problema: Un cargador de móvil tiene 2300 vueltas en la bobina primaria y 50 vueltas en la secundaria. 
          Si se conecta a 230V, ¿qué voltaje da a la salida?</p>
          <p>Solución:</p>
          <p>Datos: V₁ = 230V, N₁ = 2300 vueltas, N₂ = 50 vueltas</p>
          <p>Aplicamos la fórmula: V₂/230 = 50/2300</p>
          <p>V₂ = 230 × (50/2300) = 230 × 0.0217 = 5V</p>
          <p>Resultado: El cargador da 5V, perfecto para cargar un móvil 📱</p>
        </Example>

        <Important>
          Conservación de la energía: Un transformador no crea energía, solo cambia el voltaje. 
          Si aumenta el voltaje, disminuye la corriente (y viceversa). La potencia se mantiene aproximadamente igual: P₁ ≈ P₂
        </Important>
      </TheorySection>

      <TheorySection title="Aplicaciones Cotidianas">
        <Concept title="En Casa">
          <ul>
            <li>
              🔌 Cargadores de dispositivos: Todos los cargadores (móviles, tablets, portátiles) 
              llevan un transformador que reduce el voltaje de 230V a 5V, 12V o 19V según el dispositivo.
            </li>
            <li>
              🔔 Timbres: Los timbres de casa funcionan a 12V por seguridad. Un transformador 
              reduce los 230V de la red a 12V.
            </li>
            <li>
              💡 Iluminación LED: Muchas luces LED funcionan a 12V. Se usa un transformador 
              para reducir el voltaje de forma segura.
            </li>
            <li>
              🎵 Equipos de audio: Amplificadores y equipos de música llevan transformadores 
              para obtener los voltajes que necesitan sus circuitos.
            </li>
          </ul>
        </Concept>

        <Concept title="En la Red Eléctrica">
          <p>
            Los transformadores son <strong>esenciales</strong> para el transporte de electricidad:
          </p>
          <ol>
            <li>
              En la central eléctrica: Transformadores elevadores suben el voltaje de 20.000V 
              a 400.000V para el transporte de larga distancia.
            </li>
            <li>
              ¿Por qué alta tensión? A mayor voltaje, menor corriente para la misma potencia. 
              Menos corriente = menos pérdidas por calor en los cables.
            </li>
            <li>
              Subestaciones: Transformadores reductores bajan el voltaje a 20.000V para 
              distribución regional.
            </li>
            <li>
              Transformadores de barrio: Esos cilindros que ves en los postes reducen de 
              20.000V a 230V para las casas.
            </li>
          </ol>
          <Important>
            Sin transformadores, sería imposible transportar electricidad a largas distancias de forma eficiente. 
            ¡Son la clave del sistema eléctrico moderno!
          </Important>
        </Concept>

        <Concept title="Seguridad">
          <p>
            ⚠️ Precauciones importantes:
          </p>
          <ul>
            <li>Nunca abras un transformador o cargador. Aunque esté desconectado, puede tener condensadores cargados.</li>
            <li>Si un cargador se calienta mucho, huele raro o hace ruido, desconéctalo inmediatamente.</li>
            <li>Usa siempre el cargador original de cada dispositivo. Voltajes incorrectos pueden dañar el aparato.</li>
            <li>No uses cargadores dañados o con cables pelados.</li>
            <li>Los transformadores de la calle (en postes) son de ALTA TENSIÓN. ¡Nunca te acerques a ellos!</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Curiosidades">
        <Concept title="¿Sabías que...?">
          <ul>
            <li>
              📱 Tu móvil: El cargador de tu móvil tiene un transformador que reduce el voltaje 
              46 veces (de 230V a 5V). ¡Eso es mucha reducción!
            </li>
            <li>
              ⚡ Transporte eficiente: Gracias a los transformadores, se puede transportar 
              electricidad a más de 1000 km con pérdidas de solo el 3-5%.
            </li>
            <li>
              🔌 Cargadores inalámbricos: También usan transformadores, pero sin cables visibles. 
              La energía se transmite por inducción electromagnética.
            </li>
            <li>
              🌍 Diferentes voltajes: En España usamos 230V, pero en EE.UU. usan 120V. 
              Por eso necesitas un transformador si viajas allí con tus aparatos.
            </li>
            <li>
              🔋 Carga rápida: Los cargadores de carga rápida pueden dar hasta 20V o más, 
              usando transformadores especiales que pueden variar el voltaje según lo que necesite el móvil.
            </li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen - Transformadores</h3>
        <ul>
          <li>Los transformadores cambian el voltaje de la corriente alterna</li>
          <li>Funcionan por inducción electromagnética entre dos bobinas</li>
          <li>Transformador reductor: N₂ &lt; N₁ → V₂ &lt; V₁ (cargadores, timbres)</li>
          <li>Transformador elevador: N₂ &gt; N₁ → V₂ &gt; V₁ (transporte de electricidad)</li>
          <li>La relación de voltajes depende del número de vueltas: V₂/V₁ = N₂/N₁</li>
          <li>Son esenciales para el transporte eficiente de electricidad</li>
          <li>Aplicaciones cotidianas: cargadores, timbres, iluminación LED</li>
        </ul>
      </div>

      <ExercisesSection 
        exercises={ejercicios} 
        groupId="transformadores_eso"
        title="Ejercicios de Práctica - Transformadores"
      />
    </>
  );
};

export default TransformadoresTheory;
