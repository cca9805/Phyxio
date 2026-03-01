import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions as colisionesInelasticasDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Colisiones Inelásticas",
  descripcion: "Colisiones donde se conserva el momento pero no la energía cinética",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const ColisionesInelasticasTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es una Colisión Inelástica?">
        <p>
          Una colisión inelástica es aquella en la que se conserva el momento lineal pero no se conserva la energía cinética. Parte de la energía cinética se transforma en otras formas de energía como calor, sonido, deformación o energía interna.
        </p>
        <p>
          Las colisiones inelásticas son más comunes en la vida real que las elásticas. Ejemplos incluyen choques de automóviles, caída de objetos, y la mayoría de colisiones macroscópicas.
        </p>
      </TheorySection>

      <TheorySection title="Colisiones Perfectamente Inelásticas">
        <p>
          En una colisión perfectamente inelástica, los objetos quedan unidos después del choque, moviéndose juntos con una velocidad común. Esta es la colisión con la máxima pérdida de energía cinética posible mientras se conserva el momento.
        </p>
        
        <Concept title="Velocidad Final Conjunta">
          <Formula 
            expression={String.raw`v_f = \frac{m_1 v_{1i} + m_2 v_{2i}}{m_1 + m_2}`}
            calculatorId="colisiones-inelasticas-perfecta"
            definitions={colisionesInelasticasDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>v_f = Velocidad final conjunta (m/s)</li>
            <li>m₁, m₂ = Masas de los objetos (kg)</li>
            <li>v₁ᵢ, v₂ᵢ = Velocidades iniciales (m/s)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Energía Perdida">
        <p>
          La energía cinética perdida en una colisión inelástica se transforma en calor, sonido, deformación y energía interna.
        </p>
        
        <Concept title="Cálculo de Energía Perdida">
          <Formula 
            expression={String.raw`\Delta K = K_i - K_f`}
            calculatorId="colisiones-inelasticas-energia"
            definitions={colisionesInelasticasDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>ΔK = Energía perdida (J)</li>
            <li>K_i = Energía cinética inicial (J)</li>
            <li>K_f = Energía cinética final (J)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Coeficiente de Restitución">
        <p>
          El <strong>coeficiente de restitución</strong> (e) caracteriza el grado de elasticidad de una colisión:
        </p>
        
        <Concept title="Medida de Elasticidad">
          <Formula 
            expression={String.raw`e = \frac{|v_{2f} - v_{1f}|}{|v_{1i} - v_{2i}|}`}
            calculatorId="colisiones-inelasticas-coeficiente"
            definitions={colisionesInelasticasDefinitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>e = Coeficiente de restitución (adimensional)</li>
            <li>v₁f, v₂f = Velocidades finales (m/s)</li>
            <li>v₁ᵢ, v₂ᵢ = Velocidades iniciales (m/s)</li>
          </ul>
        </Concept>
        
        <Important>
          <ul>
            <li>e = 1: Colisión elástica</li>
            <li>0 &lt; e &lt; 1: Colisión parcialmente inelástica</li>
            <li>e = 0: Colisión perfectamente inelástica</li>
          </ul>
        </Important>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🔧</span> Aplicaciones en la Vida Real
        </h2>
        
        <div className="theory-subsection">
          <h3>🚗 Seguridad automotriz</h3>
          <p>
            Diseño de zonas de deformación programada que absorben energía en colisiones, protegiendo a los ocupantes. Los coches modernos tienen "zonas de arrugamiento" que se deforman inelásticamente, convirtiendo energía cinética en deformación plástica y calor, reduciendo la fuerza sobre los pasajeros.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏀 Deportes y rebotes</h3>
          <p>
            Análisis de rebotes de pelotas y balones para optimizar el diseño y el rendimiento deportivo. Las pelotas de baloncesto, tenis y fútbol están diseñadas con coeficientes de restitución específicos para el juego: demasiado elásticas y serían incontrolables, muy inelásticas y no rebotarían.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 Balística forense</h3>
          <p>
            Estudio del impacto de proyectiles en blancos, fundamental en balística forense y militar. Los investigadores analizan la deformación de balas y el daño en objetivos para reconstruir eventos, determinar distancias de disparo y tipos de armas usadas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔨 Ingeniería de materiales</h3>
          <p>
            Pruebas de resistencia al impacto para evaluar la durabilidad de materiales. Los ingenieros dejan caer pesos sobre materiales o los golpean con martillos instrumentados para medir cuánta energía absorben antes de romperse, crucial para diseñar cascos, armaduras y estructuras.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🪐 Formación planetaria</h3>
          <p>
            Formación de planetas por acreción de material cósmico mediante colisiones inelásticas. Las partículas de polvo en el disco protoplanetario chocan y se pegan, creciendo gradualmente desde granos microscópicos hasta planetesimales de kilómetros, y eventualmente planetas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ Ingeniería antisísmica</h3>
          <p>
            Diseño de estructuras que absorben energía sísmica mediante deformación controlada. Los edificios modernos tienen amortiguadores y materiales que se deforman inelásticamente durante terremotos, disipando energía y protegiendo la estructura principal del colapso.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        
        <div className="theory-subsection">
          <h3>🔬 Los primeros experimentos</h3>
          <p>
            El estudio de las colisiones inelásticas se desarrolló paralelamente al de las elásticas. Christiaan Huygens y John Wallis (1616-1703) observaron que en colisiones reales siempre se pierde energía cinética, a diferencia del caso ideal elástico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚗️ Mariotte y Newton: materiales importan</h3>
          <p>
            Edme Mariotte (1620-1684) realizó experimentos con bolas de diferentes materiales y descubrió que la pérdida de energía depende del material. Isaac Newton estudió el coeficiente de restitución experimentalmente, dejando caer bolas sobre diferentes superficies y midiendo la altura del rebote.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌡️ Termodinámica y seguridad moderna</h3>
          <p>
            En el siglo XIX, con el desarrollo de la termodinámica, se comprendió que la energía "perdida" en colisiones inelásticas se transforma en calor y energía interna. Este conocimiento fue crucial para el desarrollo de la seguridad automotriz en el siglo XX, donde las zonas de deformación programada salvan millones de vidas anualmente.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>🚗 Diseño que salva vidas</h3>
          <p>
            Los airbags y las zonas de deformación en los coches están diseñados para maximizar la pérdida de energía cinética, convirtiendo una colisión en más inelástica para proteger a los ocupantes. Un coche moderno puede absorber hasta el 70% de la energía de un impacto frontal a 50 km/h mediante deformación.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏀 El baloncesto que se detiene</h3>
          <p>
            Una pelota de baloncesto pierde aproximadamente el 20% de su energía en cada rebote (e ≈ 0.8), por eso eventualmente se detiene. Si la dejas caer desde 2 metros, rebotará a 1.6 metros, luego 1.28 metros, y así sucesivamente hasta detenerse después de unos 20 rebotes.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>☄️ Meteoritos y cráteres</h3>
          <p>
            Los meteoritos que impactan la Tierra tienen colisiones perfectamente inelásticas (e = 0), quedando incrustados y creando cráteres. El meteorito que creó el Cráter del Meteorito en Arizona tenía 50 metros de diámetro y liberó energía equivalente a 10 megatones de TNT, toda convertida en calor, sonido y deformación.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌙 El nacimiento de la Luna</h3>
          <p>
            En la formación de la Luna, se cree que un objeto del tamaño de Marte (llamado Theia) chocó con la Tierra primitiva hace 4,500 millones de años en una colisión inelástica masiva. Los escombros de esta colisión se agruparon para formar la Luna. La energía liberada fue suficiente para fundir ambos cuerpos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⛳ Golf: el coeficiente perfecto</h3>
          <p>
            Las pelotas de golf están diseñadas con un coeficiente de restitución cercano a 0.83 (límite reglamentario), optimizado para maximizar la distancia de vuelo. Si fueran más elásticas, volarían más lejos pero serían más difíciles de controlar. Los fabricantes gastan millones en I+D para acercarse al límite.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🪐 Los anillos de Saturno</h3>
          <p>
            Los anillos de Saturno se formaron probablemente por colisiones inelásticas de lunas pequeñas que se fragmentaron. Las partículas de los anillos (desde polvo hasta rocas del tamaño de casas) continúan chocando inelásticamente, perdiendo energía y aplanándose gradualmente en un disco delgado.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          En una colisión inelástica se conserva el momento lineal pero no la energía cinética (p_total = constante pero 
          E_k,perdida &gt; 0). En colisiones perfectamente inelásticas, los objetos quedan unidos moviéndose juntos. El coeficiente 
          de restitución (0 ≤ e &lt; 1) mide el grado de inelasticidad. La energía perdida se transforma en calor, sonido y deformación.
        </p>
      </div>
    </>
  );
};

export default ColisionesInelasticasTheory;
