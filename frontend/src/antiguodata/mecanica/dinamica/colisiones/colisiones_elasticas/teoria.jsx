import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions as colisionesElasticasDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Colisiones Elásticas",
  descripcion: "Colisiones donde se conservan momento y energía cinética",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const ColisionesElasticasTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es una Colisión Elástica?">
        <p>
          Una colisión elástica es aquella en la que se conservan tanto el momento lineal como la energía cinética del sistema. En estas colisiones, no hay pérdida de energía en forma de calor, sonido o deformación permanente.
        </p>
        <p>
          Las colisiones elásticas son idealizaciones que se aproximan bien en colisiones entre átomos, moléculas y bolas de billar.
        </p>
      </TheorySection>

      <TheorySection title="Principios Fundamentales">
        <Concept title="Conservación del Momento Lineal">
          <p>El momento total del sistema antes de la colisión es igual al momento total después:</p>
          <Formula expression={String.raw`m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}`} />
        </Concept>

        <Concept title="Conservación de la Energía Cinética">
          <p>La energía cinética total del sistema se conserva:</p>
          <Formula 
            expression={String.raw`\frac{1}{2}m_1 v_{1i}^2 + \frac{1}{2}m_2 v_{2i}^2 = \frac{1}{2}m_1 v_{1f}^2 + \frac{1}{2}m_2 v_{2f}^2`}
            calculatorId="colisiones-elasticas-energia"
            definitions={colisionesElasticasDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>m₁, m₂ = Masas de los objetos (kg)</li>
            <li>v₁ᵢ, v₂ᵢ = Velocidades iniciales (m/s)</li>
            <li>v₁f, v₂f = Velocidades finales (m/s)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Velocidades Finales en Colisión Elástica 1D">
        <p>
          Para una colisión elástica unidimensional entre dos objetos, las velocidades finales se pueden calcular usando:
        </p>
        
        <Concept title="Fórmulas de Velocidades Finales">
          <Formula 
            expression={String.raw`v_{1f} = \frac{(m_1 - m_2)v_{1i} + 2m_2 v_{2i}}{m_1 + m_2}`}
            calculatorId="colisiones-elasticas-velocidades"
            definitions={colisionesElasticasDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Velocidad Final Objeto 2", expression: String.raw`v_{2f} = \frac{(m_2 - m_1)v_{2i} + 2m_1 v_{1i}}{m_1 + m_2}` }
            ]}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>v₁f = Velocidad final del objeto 1 (m/s)</li>
            <li>v₂f = Velocidad final del objeto 2 (m/s)</li>
            <li>m₁, m₂ = Masas de los objetos (kg)</li>
            <li>v₁ᵢ, v₂ᵢ = Velocidades iniciales (m/s)</li>
          </ul>
        </Concept>
        
        <Concept title="Casos Especiales">
          <p>Masas Iguales (m₁ = m₂): Las velocidades se intercambian</p>
          <Example>
            <p>Si dos bolas de billar idénticas chocan y una está en reposo, la que se movía se detiene y la que estaba en reposo adquiere toda la velocidad.</p>
          </Example>
          
          <p>Objeto en Reposo (v₂ᵢ = 0): Si el segundo objeto está inicialmente en reposo, las fórmulas se simplifican</p>
          
          <p>Masa Muy Grande Choca con Masa Pequeña (m₁ &gt;&gt; m₂): El objeto grande continúa casi sin cambio, el pequeño rebota</p>
          
          <p>Masa Pequeña Choca con Masa Muy Grande (m₁ &lt;&lt; m₂): El objeto pequeño rebota, el grande permanece casi en reposo</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Coeficiente de Restitución">
        <p>
          El coeficiente de restitución (e) mide la elasticidad de una colisión:
        </p>
        <Formula expression={String.raw`e = \frac{|v_{2f} - v_{1f}|}{|v_{1i} - v_{2i}|}`} />
        
        <p><strong>Donde:</strong></p>
        <ul>
          <li>e = Coeficiente de restitución (adimensional)</li>
          <li>v₁f, v₂f = Velocidades finales (m/s)</li>
          <li>v₁ᵢ, v₂ᵢ = Velocidades iniciales (m/s)</li>
        </ul>
        
        <Important>
          <ul>
            <li>Para colisiones elásticas: e = 1</li>
            <li>Para colisiones perfectamente inelásticas: e = 0</li>
            <li>Para colisiones parcialmente elásticas: 0 &lt; e &lt; 1</li>
          </ul>
        </Important>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🔧</span> Aplicaciones en la Vida Real
        </h2>
        
        <div className="theory-subsection">
          <h3>⚛️ Física atómica y molecular</h3>
          <p>
            Colisiones entre átomos y moléculas en gases ideales, fundamentales para la teoría cinética. A temperatura ambiente, las moléculas de aire chocan miles de millones de veces por segundo en colisiones casi perfectamente elásticas, manteniendo la presión y temperatura del gas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎱 Billar profesional</h3>
          <p>
            Las bolas de billar tienen colisiones casi elásticas (e ≈ 0.95), permitiendo calcular trayectorias con precisión. Los jugadores profesionales usan física intuitiva para predecir ángulos de rebote y transferencia de energía entre bolas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Física nuclear</h3>
          <p>
            Dispersión de partículas subatómicas en aceleradores de partículas y reactores nucleares. Las colisiones elásticas entre neutrones y núcleos se usan para moderar (frenar) neutrones en reactores nucleares, controlando la reacción en cadena.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌌 Astrofísica</h3>
          <p>
            Colisiones entre asteroides y cuerpos celestes pequeños en el espacio. En el vacío del espacio, sin fricción atmosférica, las colisiones entre rocas espaciales son casi perfectamente elásticas, conservando la energía cinética del sistema.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ Péndulo de Newton</h3>
          <p>
            Juguete de escritorio que demuestra la conservación del momento y la energía. Cuando levantas una bola y la sueltas, la energía se transfiere a través de las bolas centrales (que apenas se mueven) hasta la última, que sale con la misma velocidad que la primera.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⛳ Deportes de precisión</h3>
          <p>
            Análisis de colisiones en golf, tenis y béisbol para optimizar el rendimiento. Los fabricantes diseñan pelotas y equipamiento para maximizar el coeficiente de restitución dentro de los límites reglamentarios, logrando mayor distancia y control.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        
        <div className="theory-subsection">
          <h3>🔬 Huygens y las colisiones perfectas</h3>
          <p>
            El estudio de las colisiones elásticas comenzó con Christiaan Huygens (1629-1695), quien investigó el choque de esferas y descubrió que en colisiones perfectas se conserva tanto el momento como la "vis viva" (energía cinética). Sus experimentos con péndulos fueron fundamentales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📖 La competencia de 1668</h3>
          <p>
            Isaac Newton (1643-1727) realizó experimentos con péndulos para estudiar colisiones y formuló las leyes de conservación. John Wallis, Christopher Wren y Huygens presentaron sus trabajos sobre colisiones a la Royal Society en 1668-1669, en una especie de competencia científica que avanzó enormemente el campo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌡️ Teoría cinética y física de partículas</h3>
          <p>
            En el siglo XIX, el concepto de colisión elástica se volvió fundamental en la teoría cinética de los gases desarrollada por Maxwell y Boltzmann. En el siglo XX, las colisiones elásticas se convirtieron en una herramienta esencial en física de partículas para estudiar la estructura de la materia en aceleradores como el LHC.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>⚙️ El péndulo de Newton</h3>
          <p>
            El péndulo de Newton, inventado en 1967 por el actor Simon Prebble, es una demostración perfecta de colisiones casi elásticas y se ha convertido en un icono de la física. Aunque lleva el nombre de Newton, él nunca construyó uno; el dispositivo fue creado 300 años después de su muerte.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎱 Bolas de billar de alta tecnología</h3>
          <p>
            Las bolas de billar modernas están hechas de resina fenólica, diseñada para maximizar la elasticidad de las colisiones (e ≈ 0.95). Antes se hacían de marfil, pero eran menos elásticas y más caras. Una bola de billar profesional puede costar más de 100 euros.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌌 Polvo cósmico perfecto</h3>
          <p>
            En el espacio, las colisiones entre partículas de polvo cósmico son casi perfectamente elásticas debido a la ausencia de fricción y atmósfera. Estas partículas pueden rebotar entre sí durante millones de años sin perder energía significativa.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎈 El helio que no se congela</h3>
          <p>
            Los átomos de helio tienen colisiones casi perfectamente elásticas, lo que explica por qué el helio permanece gaseoso incluso a temperaturas muy bajas. De hecho, el helio es el único elemento que no se solidifica a presión atmosférica, sin importar cuán frío esté.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚛️ El LHC y las colisiones de protones</h3>
          <p>
            En aceleradores de partículas como el LHC, las colisiones elásticas entre protones permiten estudiar la estructura interna de las partículas. Los protones chocan a 99.9999991% de la velocidad de la luz, con energías de 13 TeV, recreando condiciones del Big Bang.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⛳ Golf: récord de velocidad</h3>
          <p>
            El récord de velocidad en una colisión elástica macroscópica lo tienen las bolas de golf, que pueden alcanzar 90 m/s (324 km/h) tras el impacto con un palo. El coeficiente de restitución está limitado a 0.83 por las reglas del golf para mantener el juego justo.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          En una colisión elástica se conservan tanto el momento lineal como la energía cinética (p_total = constante y 
          E_k,total = constante). Las velocidades finales dependen de las masas y velocidades iniciales. El coeficiente de 
          restitución e = 1 caracteriza estas colisiones. Son idealizaciones que se aproximan bien en colisiones entre átomos, 
          moléculas y bolas de billar.
        </p>
      </div>
    </>
  );
};

export default ColisionesElasticasTheory;
