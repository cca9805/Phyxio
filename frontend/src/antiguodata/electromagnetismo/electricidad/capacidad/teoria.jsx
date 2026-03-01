import { TheorySection, Concept, Formula } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Capacidad",
  descripcion: "Estudio de capacidad",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CapacidadTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Definición de Capacidad Eléctrica">
        <Concept title="Capacidad (C)">
          <p>La capacidad eléctrica (C) es la propiedad que tienen los cuerpos para mantener una carga eléctrica. Se define como la razón entre la carga (Q) y la diferencia de potencial (V).</p>
          <Formula 
            expression={String.raw`C = \frac{Q}{V}`}
            description="Donde C se mide en Faradios (F), Q en Culombios (C) y V en Voltios (V)."
            calculatorId="capacidad_definicion"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Carga (Q)", expression: String.raw`Q = C \cdot V` },
              { description: "Calcular Voltaje (V)", expression: String.raw`V = \frac{Q}{C}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>C: Capacidad eléctrica (F - Faradios)</li>
            <li>Q: Carga eléctrica (C - Culombios)</li>
            <li>V: Diferencia de potencial o voltaje (V - Voltios)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Factores Geométricos y Materiales">
        <Concept title="Capacitor de Placas Paralelas">
          <p>La capacidad depende de la geometría. Para un capacitor de placas paralelas, se calcula con el área (A), la distancia (d) y la constante dieléctrica (κ) del material.</p>
          <Formula 
            expression={String.raw`C = \frac{\kappa \cdot \epsilon_0 \cdot A}{d}`}
            description="ε₀ es la permitividad del vacío (≈ 8.85x10⁻¹² F/m). κ = 1 para el vacío."
            calculatorId="capacidad_placas_paralelas"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Área (A)", expression: String.raw`A = \frac{C \cdot d}{\kappa \cdot \epsilon_0}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>C: Capacidad (F)</li>
            <li>κ: Constante dieléctrica del material (adimensional)</li>
            <li>ε₀: Permitividad del vacío (8.85×10⁻¹² F/m)</li>
            <li>A: Área de las placas (m²)</li>
            <li>d: Distancia entre placas (m)</li>
          </ul>
        </Concept>
        <Concept title="Uso de Dieléctricos">
          <p>Al introducir un dieléctrico, la capacidad aumenta. La nueva capacidad (C) es la capacidad original (C₀) multiplicada por la constante dieléctrica (κ).</p>
          <Formula 
            expression={String.raw`C = \kappa \cdot C_0`}
            calculatorId="capacidad_dielectrico"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Constante Dieléctrica (κ)", expression: String.raw`\kappa = \frac{C}{C_0}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>C: Capacidad con dieléctrico (F)</li>
            <li>κ: Constante dieléctrica del material (adimensional)</li>
            <li>C₀: Capacidad sin dieléctrico (en vacío) (F)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Energía y Asociación de Capacitores">
        <Concept title="Energía Almacenada (U)">
          <p>Un capacitor almacena energía potencial eléctrica, que se puede calcular a partir de su capacidad y el voltaje al que está sometido.</p>
          <Formula 
            expression={String.raw`U = \frac{1}{2} C V^2`}
            calculatorId="energia_capacitor"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Capacidad (C)", expression: String.raw`C = \frac{2U}{V^2}` },
              { description: "Calcular Voltaje (V)", expression: String.raw`V = \sqrt{\frac{2U}{C}}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>U: Energía almacenada (J - Joules)</li>
            <li>C: Capacidad (F)</li>
            <li>V: Voltaje (V)</li>
          </ul>
        </Concept>
        <Concept title="Asociación en Serie">
          <p>La capacidad equivalente (Ceq) de capacitores en serie se calcula como el inverso de la suma de los inversos de cada capacidad.</p>
          <Formula 
            expression={String.raw`\frac{1}{C_{eq}} = \sum_{i=1}^{n} \frac{1}{C_i}`}
            calculatorId="capacitores_serie"
            definitions={definitions}
            exercises={exercises}
          />
          
          <p>Donde:</p>
          <ul>
            <li>C_eq: Capacidad equivalente (F)</li>
            <li>C_i: Capacidad de cada capacitor individual (F)</li>
            <li>n: Número de capacitores en serie</li>
          </ul>
        </Concept>
        <Concept title="Asociación en Paralelo">
          <p>La capacidad equivalente (Ceq) de capacitores en paralelo es la suma directa de todas las capacidades individuales.</p>
          <Formula 
            expression={String.raw`C_{eq} = \sum_{i=1}^{n} C_i`}
            calculatorId="capacitores_paralelo"
            definitions={definitions}
            exercises={exercises}
          />
          
          <p>Donde:</p>
          <ul>
            <li>C_eq: Capacidad equivalente (F)</li>
            <li>C_i: Capacidad de cada capacitor individual (F)</li>
            <li>n: Número de capacitores en paralelo</li>
          </ul>
        </Concept>
      </TheorySection>
      
      <TheorySection title="Capacitores Cilíndricos y Esféricos">
        <Concept title="Capacitor Cilíndrico (longitud L)">
          <p>Para un capacitor de geometría cilíndrica coaxial (longitud L, radios a y b):</p>
          <p>Fórmula: <code>C = (2π · ε · L) / ln(b / a)</code></p>
          <p>Donde <em>ε</em> es la permitividad del medio (ε = κ · ε₀).</p>
        </Concept>

        <Concept title="Capacitor Esférico">
          <p>Para dos esferas concéntricas de radios a y b (b &gt; a):</p>
          <p>Fórmula: <code>C = 4π · ε · (a b) / (b - a)</code></p>
          <p>En el caso de una esfera aislada respecto a infinito: <code>C = 4\pi \epsilon R</code>.</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Circuitos RC y Constante de Tiempo">
        <Concept title="Constante de tiempo (τ)">
          <p>En un circuito RC simple, la carga y descarga del condensador siguen una ley exponencial.</p>
          <p>Constante de tiempo: <code>τ = R · C</code></p>
          <p>La respuesta transitoria (carga): <code>V(t) = V₀ · (1 − e<sup>−t/τ</sup>)</code></p>
        </Concept>
        <Concept title="Aplicación: Filtro RC">
          <p>Un filtro pasa-bajo de primer orden tiene frecuencia de corte <code>f_c = 1 / (2π · R · C)</code>.</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Efectos de Temperatura y Pérdidas Dieléctricas">
        <Concept title="Temperatura">
          <p>La permitividad y la conductividad del dieléctrico pueden depender de la temperatura, afectando la capacidad y las pérdidas.</p>
        </Concept>
        <Concept title="Pérdidas Dieléctricas">
          <p>En materiales reales, la constante dieléctrica compleja introduce pérdidas; esto es relevante en aplicaciones de alta frecuencia y potencias.</p>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>

        <h3>🔋 Almacenamiento de Energía (Supercondensadores)</h3>
        <p>
          Los supercondensadores usan arquitecturas especiales para almacenar grandes cantidades de carga y entregar corrientes altas en aplicaciones de energía.
        </p>
        <ul>
          <li>Almacenamiento de energía de alta potencia</li>
          <li>Recuperación de energía en frenado regenerativo</li>
          <li>Complementan baterías en sistemas híbridos</li>
        </ul>

        <h3>⚡ Fuente de Alimentación y Filtrado</h3>
        <p>
          Los capacitores suavizan el rizado de la tensión en fuentes de alimentación y desacoplan señales en circuitos electrónicos.
        </p>
        <ul>
          <li>Condensadores de filtro en fuentes DC</li>
          <li>Condensadores de desacoplo cerca de ICs para estabilidad</li>
          <li>Reducción de ruido y pulsos transitorios</li>
        </ul>

        <h3>⏱️ Temporización y Osciladores</h3>
        <p>
          En circuitos RC y osciladores, la capacidad determina constantes de tiempo y frecuencias de resonancia.
        </p>
        <ul>
          <li>Constante de tiempo en circuitos temporizadores</li>
          <li>Tuning en radios (con inductores)</li>
        </ul>

        <h3>📱 Pantallas Táctiles Capacitivas</h3>
        <p>
          Las pantallas táctiles detectan cambios en la capacitancia local al aproximar un dedo conductor.
        </p>
        <ul>
          <li>Sensor capacitivo detecta la distorsión del campo</li>
          <li>Alta sensibilidad y baja potencia</li>
        </ul>

        <div className="theory-section-highlight">
          <p>
            💡 Conclusión: Los capacitores son componentes clave en electrónica y energía, desde estabilizar fuentes hasta permitir interfaces táctiles.
          </p>
        </div>
      </div>

      {/* Hechos históricos */}
      <div className="theory-history-section">
        <h2><span>📜</span> Historia: El condensador desde el frasco de Leyden</h2>

        <h3>🧪 Frasco de Leyden (siglo XVIII)</h3>
        <p>
          El primer dispositivo conocido capaz de almacenar carga fue el "frasco de Leyden", descubierto de forma independiente por Pieter van Musschenbroek y Ewald von Kleist alrededor de 1745-1746.
        </p>
        <p>
          Era un frasco con agua y una varilla conductora que permitía acumular carga y descargarla produciendo fuertes chispas.
        </p>

        <h3>🔬 Michael Faraday y estudios posteriores</h3>
        <p>
          Faraday investigó efectos eléctricos y dieléctricos y aportó una base experimental importante para entender la capacitancia y los dieléctricos.
        </p>

        <h3>⚙️ Desarrollo industrial</h3>
        <p>
          Con el avance de la electrónica en el siglo XX, los condensadores se convirtieron en componentes estandarizados con múltiples tipos (electrolíticos, cerámicos, película, tantalio, etc.).
        </p>
      </div>

      {/* Datos anecdóticos */}
      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas y curiosidades</h2>

        <h3>⚡ El frasco que sorprendió a Europa</h3>
        <p>
          El frasco de Leyden causó asombro en la comunidad científica por su capacidad para producir descargas peligrosas y por la curiosidad de cómo se almacenaba la electricidad.
        </p>

        <h3>🔋 Supercondensadores en récords de potencia</h3>
        <p>
          Empresas e instituciones han desarrollado supercondensadores que permiten picos de potencia y ciclos de vida muy superiores a baterías convencionales.
        </p>

        <h3>🎆 Usos en pirotecnia y chisporroteo</h3>
        <p>
          Grandes bancos de capacitores se usan en sistemas que requieren descargas rápidas, como pirotecnia controlada y generadores de impulsos.
        </p>
      </div>

      {/* Resumen (como formula-card) */}
      <div className="formula-card">
        <h3 className="concept-title">Resumen</h3>
        <div className="concept-body">
          <p>
            Los capacitores almacenan carga eléctrica y energía; su valor depende de la geometría y del dieléctrico. Se usan para almacenamiento de energía, filtrado, temporización y detección capacitiva.
          </p>
          <p>
            Comprender sus fórmulas y cómo se asocian en serie y paralelo es esencial para diseñar y analizar circuitos electrónicos.
          </p>
        </div>
      </div>
    </>
  );
};

export default CapacidadTheory;
