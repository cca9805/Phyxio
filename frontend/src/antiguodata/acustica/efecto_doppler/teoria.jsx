import { TheorySection, Concept, Formula } from '../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Efecto Doppler",
  descripcion: "Cambio de frecuencia por movimiento relativo entre fuente y observador",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const EfectoDopplerTheory = ({ exercises }) => (
  <>
    {/* 1. TEORÍA PRINCIPAL */}
    <TheorySection title="¿Qué es el efecto Doppler?">
      <Concept title="Definición y contexto">
        <p>El efecto Doppler es el cambio aparente en la frecuencia de una onda cuando hay movimiento relativo entre la fuente y el observador. Ocurre con todas las ondas: sonido, luz, radio, agua.</p>
        <div className="info-box">
          <ul>
            <li>🔊 Sonido: Sirenas, radares, ecografías</li>
            <li>💡 Luz: Corrimiento al rojo, astronomía</li>
            <li>📡 Radio: Radares de velocidad, satélites</li>
            <li>🌊 Agua: Estelas de barcos</li>
          </ul>
          <p>
            ¿Por qué está en Acústica? Este tema se enfoca en aplicaciones 
            acústicas porque:
          </p>
          <ul>
            <li>El efecto se descubrió y demostró primero con sonido (1842-1845)</li>
            <li>Las aplicaciones cotidianas más comunes son acústicas (sirenas, radares, ecografías)</li>
            <li>Es más intuitivo entenderlo con sonido (velocidades alcanzables, experiencia directa)</li>
            <li>Este tema se centra en aplicaciones acústicas, donde el efecto es más intuitivo y cotidiano.</li>
          </ul>
          <p>
            💡 Nota: El mismo principio matemático se aplica a la luz en astronomía 
            (corrimiento al rojo que demostró la expansión del universo). Si hay un tema de Óptica 
            disponible, encontrarás las aplicaciones electromagnéticas allí.
          </p>
        </div>
      </Concept>
      <Concept title="Explicación intuitiva">
        <ul>
          <li>Cuando una fuente se acerca: el sonido es más agudo (frecuencia mayor)</li>
          <li>Cuando se aleja: el sonido es más grave (frecuencia menor)</li>
        </ul>
        <p>La frecuencia real de la fuente no cambia, solo la percibida por el observador.</p>
      </Concept>
      <Concept title="Compresión y estiramiento de ondas">
        <ul>
          <li>Fuente acercándose: ondas comprimidas, mayor frecuencia</li>
          <li>Fuente alejándose: ondas estiradas, menor frecuencia</li>
        </ul>
        <p>El observador también puede moverse: si se acerca, percibe mayor frecuencia; si se aleja, menor.</p>
      </Concept>
      <Concept title="Velocidad del sonido como referencia">
        <ul>
          <li>v &gt; v<sub>fuente</sub>: Efecto Doppler normal</li>
          <li>v = v<sub>fuente</sub>: Barrera del sonido</li>
          <li>v &lt; v<sub>fuente</sub>: Boom sónico</li>
        </ul>
      </Concept>
    </TheorySection>

    {/* 2. FÓRMULAS Y CÁLCULOS */}
    <TheorySection title="Fórmulas del efecto Doppler">
      <Concept title="Fórmula general">
        <Formula
          expression={String.raw`f' = f \frac{v \pm v_o}{v \mp v_f}`}
          calculatorId="efecto_doppler-grupo-1"
          definitions={definitions}
          exercises={exercises}
          complementary={[
            { description: "Cambio de frecuencia (Δf)", expression: String.raw`\Delta f = f' - f` }
          ]}
        />
        <ul>
          <li>f': Frecuencia observada (Hz)</li>
          <li>f: Frecuencia emitida (Hz)</li>
          <li>v: Velocidad del sonido (m/s)</li>
          <li>vₒ: Velocidad del observador (m/s)</li>
          <li>v<sub>f</sub>: Velocidad de la fuente (m/s)</li>
        </ul>
      </Concept>
      <Concept title="Reglas de signos">
        <ul>
          <li>Observador: + si se acerca, - si se aleja</li>
          <li>Fuente: - si se acerca, + si se aleja</li>
        </ul>
      </Concept>
      <Concept title="Casos especiales">
        <b>Solo la fuente se mueve:</b>
        <Formula
          expression={String.raw`f' = f \frac{v}{v \mp v_f}`}
          calculatorId="efecto_doppler-grupo-1"
          definitions={definitions}
          exercises={exercises}
          complementary={[
            { description: "Velocidad de la fuente (v<sub>f</sub>)", expression: String.raw`v_f = v - \frac{f \cdot v}{f'}` }
          ]}
        />
        <b>Solo el observador se mueve:</b>
        <Formula
          expression={String.raw`f' = f \frac{v \pm v_o}{v}`}
          calculatorId="efecto_doppler-grupo-1"
          definitions={definitions}
          exercises={exercises}
          complementary={[
            { description: "Velocidad del observador (vₒ)", expression: String.raw`v_o = \frac{f' \cdot v}{f} - v` }
          ]}
        />
      </Concept>
    </TheorySection>

    {/* 3. APLICACIONES */}
    <div className="theory-applications-section">
      <h2><span role="img" aria-label="aplicaciones">🌍</span> Aplicaciones en la vida real</h2>
      <div className="theory-subsection">
        <h3>🚑 Ambulancias y sirenas</h3>
        <p>El cambio de tono al pasar una ambulancia es el ejemplo clásico del efecto Doppler.</p>
      </div>
      <div className="theory-subsection">
        <h3>🚗 Radar de velocidad</h3>
        <p>Los radares de tráfico miden la velocidad de los vehículos usando el cambio de frecuencia de las ondas reflejadas.</p>
      </div>
      <div className="theory-subsection">
        <h3>🏥 Ecografía Doppler</h3>
        <p>Permite medir el flujo sanguíneo y detectar problemas cardíacos de forma no invasiva.</p>
      </div>
      <div className="theory-subsection">
        <h3>🌌 Astronomía</h3>
        <p>El corrimiento al rojo y azul permite medir la velocidad de estrellas y galaxias, y fue clave para descubrir la expansión del universo.</p>
      </div>
      <div className="theory-subsection">
        <h3>🌪️ Radar meteorológico</h3>
        <p>Detecta la rotación de nubes y la velocidad del viento, fundamental para alertas de tornados.</p>
      </div>
    </div>

    {/* 4. HECHOS HISTÓRICOS */}
    <div className="theory-history-section">
      <h2><span role="img" aria-label="historia">📜</span> Historia: Hechos históricos relevantes</h2>
      <div className="theory-subsection">
        <h3>🎓 Christian Doppler (1803-1853)</h3>
        <p>Propuso el efecto en 1842 para explicar el color de las estrellas binarias.</p>
      </div>
      <div className="theory-subsection">
        <h3>🎺 Primera demostración experimental (1845)</h3>
        <p>Buys Ballot demostró el efecto con trompetistas en un tren, confirmando el cambio de tono predicho.</p>
      </div>
      <div className="theory-subsection">
        <h3>🌌 Aplicación astronómica (1868)</h3>
        <p>William Huggins aplicó el efecto a la luz de las estrellas, midiendo velocidades estelares.</p>
      </div>
      <div className="theory-subsection">
        <h3>🚗 Radar Doppler (1935)</h3>
        <p>Watson-Watt desarrolló el primer radar Doppler para aviación y defensa.</p>
      </div>
      <div className="theory-subsection">
        <h3>🏥 Ecografía Doppler (1956)</h3>
        <p>Satomura inventó la ecografía Doppler para medir el flujo sanguíneo.</p>
      </div>
      <div className="theory-subsection">
        <h3>🌪️ Radar meteorológico (1970s)</h3>
        <p>Los radares Doppler meteorológicos revolucionaron la predicción del tiempo y las alertas de tornados.</p>
      </div>
    </div>

    {/* 5. ANÉCDOTAS Y CURIOSIDADES */}
    <div className="theory-anecdotes-section">
      <h2><span role="img" aria-label="anécdotas">✨</span> Anécdotas y curiosidades</h2>
      <div className="theory-subsection">
        <h3>🚓 El radar de velocidad que cambió todo</h3>
        <p>En 1954, el primer radar Doppler de tráfico en Chicago fue tan preciso que se convirtió en evidencia legal aceptada.</p>
      </div>
      <div className="theory-subsection">
        <h3>🏎️ Fórmula 1: Velocidad en tiempo real</h3>
        <p>Los radares Doppler miden la velocidad de los coches con precisión de 0.1 km/h, optimizando la aerodinámica en carrera.</p>
      </div>
      <div className="theory-subsection">
        <h3>👶 El primer latido que escuchas</h3>
        <p>El latido fetal en ecografías Doppler es el primer sonido que muchos padres escuchan de sus hijos.</p>
      </div>
      <div className="theory-subsection">
        <h3>🌌 Descubriendo el Big Bang</h3>
        <p>Hubble usó el efecto Doppler para demostrar la expansión del universo, base del Big Bang.</p>
      </div>
      <div className="theory-subsection">
        <h3>🌪️ Salvando vidas con tornados</h3>
        <p>El radar Doppler permitió alertas tempranas y salvar cientos de vidas en tornados como el de Oklahoma en 1999.</p>
      </div>
      <div className="theory-subsection">
        <h3>🦇 Murciélagos: Maestros del Doppler</h3>
        <p>Los murciélagos usan el efecto Doppler para cazar insectos en completa oscuridad, detectando velocidad y dirección.</p>
      </div>
    </div>

    {/* 6. RESUMEN */}
    <div className="theory-summary-section">
      <h2><span>📝</span> Resumen</h2>
      <ul>
        <li>El efecto Doppler explica el cambio de frecuencia por movimiento relativo.</li>
        <li>Se aplica a sonido, luz, radio y más.</li>
        <li>Es fundamental en medicina, astronomía, meteorología y tecnología.</li>
        <li>Las fórmulas permiten calcular frecuencias y velocidades.</li>
        <li>La prevención y el uso correcto de la tecnología Doppler salvan vidas.</li>
      </ul>
    </div>
  </>
);

export default EfectoDopplerTheory;
