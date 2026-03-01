import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as mruvDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "MRUV - Movimiento Rectilíneo Uniformemente Variado",
  descripcion: "Movimiento en línea recta con aceleración constante",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const MruvTheory = ({ exercises }) => (
  <>
    <TheorySection title="¿Qué es el Movimiento Rectilíneo Uniformemente Variado (MRUV)?">
      <p>
        El MRUV, también llamado MRUA, describe el movimiento de un objeto en línea recta con aceleración constante. Es la base para analizar caídas libres, frenados y lanzamientos verticales.
      </p>
      <Important>
        En el MRUV, la aceleración es constante y diferente de cero. La velocidad cambia de forma uniforme.
      </Important>
      <Example title="Ejemplo didáctico: cálculo de velocidad final">
        <>
          Un coche parte del reposo y acelera a 3 m/s² durante 5 segundos. ¿Qué velocidad alcanza?
          <ul>
            <li>Datos: v₀ = 0 m/s, a = 3 m/s², t = 5 s</li>
            <li>Fórmula: v_f = v₀ + a·t</li>
            <li>Sustitución: v_f = 0 + (3 m/s² × 5 s) = 15 m/s</li>
          </ul>
          <strong>Respuesta:</strong> El coche alcanza una velocidad de 15 m/s.
        </>
      </Example>
    </TheorySection>

    <TheorySection title="Ecuaciones Fundamentales y Complementarias">
      <Concept title="Ecuación de la Velocidad">
        <p>Permite calcular la velocidad final de un objeto con aceleración constante:</p>
        <Formula
          expression={String.raw`v_f = v_0 + a t`}
          calculatorId="mruv-ecuacion-velocidad"
          definitions={mruvDefinitions}
          exercises={exercises}
          complementary={[
            { description: "Despejar velocidad inicial", expression: String.raw`v_0 = v_f - a t` },
            { description: "Despejar aceleración", expression: String.raw`a = \frac{v_f - v_0}{t}` },
            { description: "Despejar tiempo", expression: String.raw`t = \frac{v_f - v_0}{a}` }
          ]}
        />
        <strong>Donde:</strong>
        <ul>
          <li>v_f = Velocidad final (m/s)</li>
          <li>v_0 = Velocidad inicial (m/s)</li>
          <li>a = Aceleración (m/s²)</li>
          <li>t = Tiempo transcurrido (s)</li>
        </ul>
      </Concept>
      <Concept title="Ecuación de la Posición">
        <p>Permite calcular la posición final de un objeto con aceleración constante:</p>
        <Formula
          expression={String.raw`x_f = x_0 + v_0 t + \frac{1}{2} a t^2`}
          calculatorId="mruv-ecuacion-posicion"
          definitions={mruvDefinitions}
          exercises={exercises}
          complementary={[
            { description: "Despejar aceleración", expression: String.raw`a = \frac{2(x_f - x_0 - v_0 t)}{t^2}` }
          ]}
        />
        <strong>Donde:</strong>
        <ul>
          <li>x_f = Posición final (m)</li>
          <li>x_0 = Posición inicial (m)</li>
          <li>v_0 = Velocidad inicial (m/s)</li>
          <li>a = Aceleración (m/s²)</li>
          <li>t = Tiempo transcurrido (s)</li>
        </ul>
      </Concept>
      <Concept title="Ecuación de Torricelli (sin tiempo)">
        <p>Relaciona velocidades, aceleración y desplazamiento, útil cuando no se conoce el tiempo:</p>
        <Formula
          expression={String.raw`v_f^2 = v_0^2 + 2a(x_f - x_0)`}
          calculatorId="mruv-ecuacion-torricelli"
          definitions={mruvDefinitions}
          exercises={exercises}
          complementary={[
            { description: "Despejar aceleración", expression: String.raw`a = \frac{v_f^2 - v_0^2}{2(x_f - x_0)}` }
          ]}
        />
        <strong>Donde:</strong>
        <ul>
          <li>v_f = Velocidad final (m/s)</li>
          <li>v_0 = Velocidad inicial (m/s)</li>
          <li>a = Aceleración (m/s²)</li>
          <li>x_f = Posición final (m)</li>
          <li>x_0 = Posición inicial (m)</li>
        </ul>
      </Concept>
      <Concept title="Ecuación de la Posición por Velocidad Media">
        <p>Calcula la posición final usando la velocidad media. Útil cuando se conocen v₀ y v_f, pero no la aceleración.</p>
        <Formula
          expression={String.raw`x_f = x_0 + \frac{v_0 + v_f}{2} t`}
          calculatorId="mruv-posicion-velocidad-media"
          definitions={mruvDefinitions}
          exercises={exercises}
          complementary={[
            { description: "Despejar tiempo", expression: String.raw`t = \frac{2(x_f - x_0)}{v_0 + v_f}` }
          ]}
        />
        <strong>Donde:</strong>
        <ul>
          <li>x_f = Posición final (m)</li>
          <li>x_0 = Posición inicial (m)</li>
          <li>v_0 = Velocidad inicial (m/s)</li>
          <li>v_f = Velocidad final (m/s)</li>
          <li>t = Tiempo transcurrido (s)</li>
        </ul>
      </Concept>
    </TheorySection>

    <TheorySection title="Casos Especiales: Caída Libre y Tiro Vertical">
      <Concept title="Caída Libre">
        <p>MRUV donde un cuerpo cae verticalmente desde el reposo (v₀=0) bajo la gravedad (a=g).</p>
        <Formula
          expression={String.raw`h = \frac{1}{2} g t^2`}
          calculatorId="mruv-caida-libre"
          definitions={mruvDefinitions}
          exercises={exercises}
          complementary={[
            { description: "Despejar tiempo", expression: String.raw`t = \sqrt{\frac{2h}{g}}` }
          ]}
        />
        <strong>Donde:</strong>
        <ul>
          <li>h = Altura de caída (m)</li>
          <li>g = Aceleración de la gravedad (9.8 m/s²)</li>
          <li>t = Tiempo de caída (s)</li>
        </ul>
      </Concept>
      <Concept title="Tiro Vertical">
        <p>Objeto lanzado verticalmente. La aceleración es la gravedad (a=-g si el eje Y apunta hacia arriba) y v₀ ≠ 0.</p>
        <Formula
          expression={String.raw`h_{max} = \frac{v_0^2}{2g}`}
          calculatorId="mruv-tiro-vertical"
          definitions={mruvDefinitions}
          exercises={exercises}
          complementary={[
            { description: "Tiempo de subida", expression: String.raw`t_s = \frac{v_0}{g}` },
            { description: "Tiempo de vuelo", expression: String.raw`t_v = \frac{2v_0}{g}` }
          ]}
        />
        <strong>Donde:</strong>
        <ul>
          <li>h_max = Altura máxima (m)</li>
          <li>v_0 = Velocidad inicial (m/s)</li>
          <li>g = Aceleración de la gravedad (9.8 m/s²)</li>
          <li>t_s = Tiempo de subida (s)</li>
          <li>t_v = Tiempo de vuelo total (s)</li>
        </ul>
      </Concept>
    </TheorySection>

    {/* Aplicaciones */}
    <div className="theory-applications-section">
      <h2><span>🌍</span> Aplicaciones en la vida real</h2>
      <div className="theory-subsection">
        <h3>🚗 Seguridad vial y frenado</h3>
        <p>
          Las ecuaciones del MRUV son fundamentales para calcular las distancias de frenado de vehículos. Los ingenieros de tráfico las utilizan para determinar distancias de seguridad y zonas de frenado.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🚀 Lanzamiento de cohetes</h3>
        <p>
          Durante el despegue, los cohetes experimentan MRUV mientras sus motores proporcionan aceleración constante.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🎢 Montañas rusas</h3>
        <p>
          Las montañas rusas aplican MRUV en caídas y subidas, calculando velocidades máximas y fuerzas G.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>⚽ Deportes y balística</h3>
        <p>
          En deportes, el tiro vertical sigue MRUV. Se estudian altura máxima y tiempo de vuelo para optimizar técnicas.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🏗️ Construcción y caída de objetos</h3>
        <p>
          En construcción, se calcula el tiempo y velocidad de caída de objetos para seguridad.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🛬 Aterrizaje de aviones</h3>
        <p>
          Los pilotos usan MRUV para calcular la distancia y tiempo de frenado tras el aterrizaje.
        </p>
      </div>
    </div>

    {/* Historia */}
    <div className="theory-history-section">
      <h2><span>📜</span> Historia y personajes clave</h2>
      <div className="theory-subsection">
        <h3>🔭 Galileo Galilei</h3>
        <p>
          Galileo estudió el movimiento acelerado y la caída libre, descubriendo la proporcionalidad d ∝ t².
        </p>
      </div>
      <div className="theory-subsection">
        <h3>📐 Evangelista Torricelli</h3>
        <p>
          Torricelli desarrolló la ecuación v² = v₀² + 2aΔx, útil para calcular sin conocer el tiempo.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🍎 Isaac Newton</h3>
        <p>
          Newton formalizó la aceleración en su Segunda Ley (F = ma) y calculó g ≈ 9.8 m/s².
        </p>
      </div>
      <div className="theory-subsection">
        <h3>⏱️ El problema de medir el tiempo</h3>
        <p>
          Galileo usó péndulos y su pulso para medir el tiempo, ya que los relojes eran imprecisos.
        </p>
      </div>
    </div>

    {/* Anécdotas y curiosidades */}
    <div className="theory-anecdotes-section">
      <h2><span>✨</span> Anécdotas y curiosidades</h2>
      <div className="theory-subsection">
        <h3>🌙 El experimento del martillo y la pluma</h3>
        <p>
          En la Luna, un martillo y una pluma caen igual de rápido, confirmando la teoría de Galileo.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🏃 Usain Bolt y la aceleración humana</h3>
        <p>
          Bolt alcanza 12.4 m/s tras acelerar 60 m. Su aceleración media es 2.5 m/s²; un guepardo llega a 5 m/s².
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🎯 La caída más larga sobrevivida</h3>
        <p>
          Vesna Vulović sobrevivió a una caída de 10,160 m. La nieve y restos amortiguaron el impacto.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🚗 Récord de aceleración en tierra</h3>
        <p>
          Dragsters aceleran de 0 a 160 km/h en menos de 1 s, con aceleraciones mayores a 40 m/s².
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🎪 El salto más alto del mundo</h3>
        <p>
          Felix Baumgartner saltó desde 39 km, alcanzando 1,357 km/h en caída libre.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>⚡ La aceleración de un rayo</h3>
        <p>
          Un rayo puede acelerar electrones a 10¹⁵ m/s², un billón de veces mayor que g.
        </p>
      </div>
    </div>

    {/* Resumen */}
    <div className="theory-summary-section">
      <h3>📝 Resumen</h3>
      <ul>
        <li>El MRUV es un movimiento en línea recta con aceleración constante y no nula.</li>
        <li>Las ecuaciones fundamentales: v_f = v_0 + at, x_f = x_0 + v_0t + ½at², v_f² = v_0² + 2aΔx.</li>
        <li>Caída libre y tiro vertical son casos especiales con a = g.</li>
        <li>En caída libre: h = ½gt² y v = gt.</li>
        <li>En tiro vertical: h_max = v_0²/(2g), t_vuelo = 2v_0/g.</li>
        <li>El MRUV es clave en física, ingeniería y deportes.</li>
      </ul>
    </div>
  </>
)