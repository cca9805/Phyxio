
import { Formula, Concept, TheorySection, Important } from '../../../../components/TheoryV2';
import { definitions } from './definitions';

// Metadatos del tema
export const metadata = {
  titulo: "Masas y Poleas",
  descripcion: "Sistemas de masas conectadas por poleas",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const MasasPoleasTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a Sistemas de Masas y Poleas">
        <p>
          Los sistemas de masas y poleas son un modelo fundamental en la dinámica para entender cómo se transmiten las fuerzas y cómo se mueven los objetos interconectados. Analizaremos tres configuraciones clásicas, asumiendo siempre una polea ideal (sin masa ni fricción) y una cuerda inextensible (la tensión es uniforme).
        </p>
        <Important>
          <p>La clave para resolver estos problemas es aplicar la Segunda Ley de Newton (F=ma) a cada masa por separado y luego combinar las ecuaciones para encontrar la aceleración del sistema y la tensión en la cuerda.</p>
        </Important>
      </TheorySection>

      <TheorySection title="Casos de Estudio">
        <Concept title="La Máquina de Atwood">
          <p>Consiste en dos masas (m₁ y m₂) conectadas por una cuerda que pasa por una polea vertical. La masa más pesada tira de la más ligera, generando una aceleración constante en el sistema.</p>
          <Formula
            expression={String.raw`a = g \frac{m_1 - m_2}{m_1 + m_2}`}
            description="La aceleración (a) depende de la diferencia de masas. Si las masas son iguales, la aceleración es cero."
            complementary={[
              {
                expression: String.raw`m_1 = m_2 \frac{g+a}{g-a}`,
                description: "Despeje para calcular la masa m₁ conociendo m₂ y la aceleración."
              },
              {
                expression: String.raw`m_2 = m_1 \frac{g-a}{g+a}`,
                description: "Despeje para calcular la masa m₂ conociendo m₁ y la aceleración."
              }
            ]}
            calculatorId="maquina-atwood"
            definitions={definitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>a = Aceleración del sistema (m/s²)</li>
            <li>g = Aceleración de la gravedad (9.8 m/s²)</li>
            <li>m₁ = Masa más pesada (kg)</li>
            <li>m₂ = Masa más ligera (kg)</li>
          </ul>
          
          <p className="mt-4">La tensión (T) es la misma en toda la cuerda y es la fuerza que siente cada masa.</p>
          <Formula
            expression={String.raw`T = \frac{2 g m_1 m_2}{m_1 + m_2}`}
            calculatorId="maquina-atwood"
            definitions={definitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>T = Tensión en la cuerda (N)</li>
            <li>g = Aceleración de la gravedad (9.8 m/s²)</li>
            <li>m₁, m₂ = Masas de los objetos (kg)</li>
          </ul>
        </Concept>

        <Concept title="Masa en Mesa Horizontal">
          <p>Un bloque (m₁) sobre una mesa sin fricción está conectado por una cuerda a una masa colgante (m₂). El peso de la masa colgante (m₂g) es la fuerza que acelera todo el sistema.</p>
          <Formula
            expression={String.raw`a = \frac{m_2 g}{m_1 + m_2}`}
            description="La aceleración es menor que 'g' porque la masa total del sistema (m₁ + m₂) debe ser acelerada."
            complementary={[
              {
                expression: String.raw`m_1 = \frac{m_2(g-a)}{a}`,
                description: "Despeje para calcular la masa en la mesa m₁."
              },
              {
                expression: String.raw`m_2 = \frac{m_1 a}{g-a}`,
                description: "Despeje para calcular la masa colgante m₂."
              }
            ]}
            calculatorId="mesa-horizontal"
            definitions={definitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>a = Aceleración del sistema (m/s²)</li>
            <li>m₁ = Masa sobre la mesa (kg)</li>
            <li>m₂ = Masa colgante (kg)</li>
            <li>g = Aceleración de la gravedad (9.8 m/s²)</li>
          </ul>
          
           <p className="mt-4">Si se considera el <strong>coeficiente de fricción dinámico (μ)</strong> en la mesa, la fuerza de rozamiento se opone al movimiento.</p>
          <Formula
            expression={String.raw`a = \frac{g(m_2 - \mu m_1)}{m_1 + m_2}`}
            description="Si m₂ ≤ μm₁, la fricción estática es suficiente para mantener el sistema en reposo (a=0)."
            complementary={[
                {
                    expression: String.raw`m_2 = \frac{m_1(a + g\mu)}{g-a}`,
                    description: "Despeje para calcular la masa colgante m₂."
                },
                {
                    expression: String.raw`m_1 = \frac{m_2(g-a)}{a+g\mu}`,
                    description: "Despeje para calcular la masa en la mesa m₁."
                },
                {
                    expression: String.raw`\mu = \frac{m_2 g - a(m_1+m_2)}{g m_1}`,
                    description: "Despeje para calcular el coeficiente de fricción μ."
                }
            ]}
            calculatorId="mesa-horizontal"
            definitions={definitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>a = Aceleración del sistema (m/s²)</li>
            <li>g = Aceleración de la gravedad (9.8 m/s²)</li>
            <li>m₁ = Masa sobre la mesa (kg)</li>
            <li>m₂ = Masa colgante (kg)</li>
            <li>μ = Coeficiente de fricción dinámico (adimensional)</li>
          </ul>
        </Concept>

        <Concept title="Masa en Plano Inclinado">
          <p>Un bloque (m₁) en un plano inclinado (ángulo θ) se conecta a una masa colgante (m₂). Aquí, la componente del peso de m₁ paralela al plano (m₁g·sin(θ)) se opone o contribuye a la fuerza de la masa colgante.</p>
          <Formula
            expression={String.raw`a = \frac{g(m_2 - m_1 \sin(\theta))}{m_1 + m_2}`}
            description="La dirección de la aceleración depende de si m₂ es mayor o menor que m₁sin(θ)."
            complementary={[
                {
                    expression: String.raw`m_2 = \frac{m_1(a + g\sin(\theta))}{g-a}`,
                    description: "Despeje para calcular la masa colgante m₂."
                },
                {
                    expression: String.raw`m_1 = \frac{m_2(g-a)}{a+g\sin(\theta)}`,
                    description: "Despeje para calcular la masa en el plano m₁."
                }
            ]}
            calculatorId="plano-inclinado"
            definitions={definitions}
            exercises={exercises}
          />
          <p className="mt-4">Añadiendo fricción, la fuerza de rozamiento (μN = μm₁g·cos(θ)) también se opone al movimiento.</p>
          <Formula
            expression={String.raw`a = \frac{g(m_2 - m_1 \sin(\theta) - \mu m_1 \cos(\theta))}{m_1 + m_2}`}
            complementary={[
                {
                    expression: String.raw`m_2 = \frac{m_1(a + g(\sin(\theta) + \mu\cos(\theta)))}{g-a}`,
                    description: "Despeje para calcular la masa colgante m₂."
                }
            ]}
            calculatorId="plano-inclinado"
            definitions={definitions}
            exercises={exercises}
          />
          
          <p><strong>Donde:</strong></p>
          <ul>
            <li>a = Aceleración del sistema (m/s²)</li>
            <li>g = Aceleración de la gravedad (9.8 m/s²)</li>
            <li>m₁ = Masa en el plano inclinado (kg)</li>
            <li>m₂ = Masa colgante (kg)</li>
            <li>θ = Ángulo del plano inclinado (grados)</li>
            <li>μ = Coeficiente de fricción dinámico (adimensional)</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🔧</span> Aplicaciones en la Vida Real
        </h2>
        
        <div className="theory-subsection">
          <h3>🏗️ Grúas y construcción</h3>
          <p>
            Las grúas de construcción usan sistemas de poleas múltiples para levantar cargas pesadas con menos esfuerzo. Un sistema de poleas compuesto puede multiplicar la fuerza aplicada por un factor de 4, 6 o más, permitiendo a un motor pequeño levantar toneladas de material.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚡 Teleféricos y funiculares</h3>
          <p>
            Los teleféricos y funiculares son aplicaciones directas de sistemas de masas y poleas. En un funicular, dos cabinas conectadas por un cable se equilibran mutuamente, reduciendo la energía necesaria para subir la pendiente. El sistema es esencialmente una máquina de Atwood en un plano inclinado.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏋️ Máquinas de gimnasio</h3>
          <p>
            Las máquinas de pesas en gimnasios usan poleas para cambiar la dirección de la fuerza y permitir ejercicios en diferentes ángulos. Las poleas también permiten ajustar la resistencia efectiva: una polea simple mantiene el peso, mientras que sistemas de poleas múltiples pueden reducir o aumentar la resistencia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚢 Aparejos náuticos</h3>
          <p>
            Los veleros usan sistemas complejos de poleas (aparejos) para controlar las velas con menos esfuerzo. Un aparejo de 4:1 permite a un marinero aplicar solo 25 kg de fuerza para controlar una vela que genera 100 kg de tensión. Esto es crucial para manejar velas grandes en condiciones de viento fuerte.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎭 Teatro y escenografía</h3>
          <p>
            Los teatros usan sistemas de poleas y contrapesos para mover decorados, telones y actores. Los contrapesos equilibran el peso de los elementos escénicos, permitiendo que un solo operador mueva objetos de cientos de kilos con facilidad y precisión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚁 Helicópteros de rescate</h3>
          <p>
            Los helicópteros de rescate usan poleas para subir personas o cargas. El sistema de polea permite controlar la velocidad de ascenso y reduce la carga en el cable. En rescates en montaña, los equipos usan sistemas de poleas para evacuar heridos por terreno difícil.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        
        <div className="theory-subsection">
          <h3>⚙️ La máquina de Atwood (1784)</h3>
          <p>
            George Atwood (1745-1807), matemático inglés, inventó la máquina de Atwood en 1784 como un dispositivo de demostración para verificar las leyes del movimiento de Newton. Su máquina permitía "ralentizar" la gravedad usando masas casi iguales, facilitando mediciones precisas de aceleración con los instrumentos de la época.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏛️ Poleas en la antigüedad</h3>
          <p>
            Las poleas se usaban desde la antigua Grecia. Arquímedes (287-212 a.C.) diseñó sistemas de poleas compuestas y supuestamente dijo: "Dadme un punto de apoyo y moveré el mundo". Se cuenta que demostró su sistema moviendo un barco completo él solo usando un sistema de poleas, impresionando al rey Hierón II de Siracusa.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ Revolución Industrial</h3>
          <p>
            Durante la Revolución Industrial (siglos XVIII-XIX), los sistemas de poleas se volvieron fundamentales para la maquinaria. Las fábricas textiles usaban sistemas complejos de poleas y correas para transmitir potencia desde una máquina de vapor central a docenas de telares. Esto transformó la manufactura y la construcción.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Herramienta educativa</h3>
          <p>
            La máquina de Atwood se convirtió en un instrumento estándar en laboratorios de física durante los siglos XIX y XX. Permitía a los estudiantes medir la aceleración de la gravedad con precisión y verificar experimentalmente las predicciones de la mecánica newtoniana. Hoy sigue siendo una demostración clásica en cursos de física.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>🏛️ Arquímedes y el barco</h3>
          <p>
            Según Plutarco, Arquímedes diseñó un sistema de poleas compuestas para demostrar su principio de ventaja mecánica. El rey Hierón II le desafió a mover algo imposible, y Arquímedes, sentado cómodamente, movió un barco de guerra completamente cargado él solo usando un sistema de poleas. El rey quedó tan impresionado que ordenó que se creyera todo lo que Arquímedes dijera.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚖️ La precisión de Atwood</h3>
          <p>
            La máquina de Atwood era tan precisa que permitió medir la aceleración de la gravedad con un error de menos del 1% en el siglo XVIII. Usando masas que diferían en solo unos gramos, Atwood podía hacer que el sistema se moviera tan lentamente que podía medir tiempos con un reloj de péndulo, logrando precisión sin cronómetros modernos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎪 El récord de poleas</h3>
          <p>
            El sistema de poleas más complejo jamás construido probablemente esté en los teatros de ópera clásicos. El Teatro alla Scala de Milán tiene más de 200 poleas y contrapesos para mover decorados. Un solo operador puede mover decorados de varias toneladas con precisión milimétrica, creando cambios de escena espectaculares.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚡 El funicular más empinado</h3>
          <p>
            El funicular Gelmer en Suiza tiene una pendiente de 106%, la más empinada del mundo para un funicular de pasajeros. El sistema usa el peso de la cabina que baja para ayudar a subir la otra, reduciendo el consumo de energía. Es un ejemplo perfecto de la máquina de Atwood en un plano inclinado extremo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏋️ Ventaja mecánica extrema</h3>
          <p>
            Los sistemas de poleas compuestas pueden lograr ventajas mecánicas de 20:1 o más. Esto significa que aplicando 5 kg de fuerza puedes levantar 100 kg. Sin embargo, hay un compromiso: para levantar la carga 1 metro, debes tirar de la cuerda 20 metros. La energía total se conserva, pero la fuerza se reduce.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎬 Efectos especiales con poleas</h3>
          <p>
            Antes de los efectos digitales, las películas usaban sistemas elaborados de poleas y cables para hacer "volar" a los actores. En la película original de Superman (1978), Christopher Reeve volaba usando un sistema de poleas y cables tan complejo que requería un equipo de 12 personas para operarlo. Los cables se pintaban de azul para eliminarlos en post-producción.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          Los sistemas de masas y poleas demuestran cómo se transmiten fuerzas a través de cuerdas y poleas. La máquina de 
          Atwood (a = g(m₁-m₂)/(m₁+m₂)) es el caso clásico con dos masas verticales. En sistemas con fricción o planos inclinados, 
          se deben considerar fuerzas adicionales. La tensión en la cuerda es uniforme si la polea es ideal. Estos sistemas son 
          fundamentales en ingeniería, construcción y maquinaria.
        </p>
      </div>
    </>
  );
};

export default MasasPoleasTheory;
