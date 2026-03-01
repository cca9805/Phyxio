import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions as tornilloDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Tornillo",
  descripcion: "El tornillo: plano inclinado enrollado",
  educationLevel: "ESO",
  levels: ['ESO']
};

const TornilloTheory = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="El Tornillo" emoji="🔩">
        <Concept title="¿Qué es un Tornillo?">
          <p>
            Un tornillo es un plano inclinado enrollado alrededor de un cilindro. Al girar el tornillo, 
            el plano inclinado (rosca) avanza convirtiendo movimiento rotatorio en movimiento lineal, 
            multiplicando enormemente la fuerza.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <img 
              src="/src/assets/diagrams/tornillo.svg" 
              alt="Tornillo - Plano Inclinado Enrollado" 
              style={{ maxWidth: '600px', width: '100%', height: 'auto' }}
            />
          </div>

          <h4>Principio del tornillo:</h4>
          <p>
            La ventaja mecánica depende de la distancia entre roscas (paso) y el radio de giro. 
            Un paso pequeño (roscas muy juntas) da gran VM pero avanza lentamente.
          </p>

          <Formula 
            expression={String.raw`VM = \frac{2\pi r}{p}`}
            legend="Ventaja Mecánica del tornillo: VM = (2πr) / p, donde r es radio de giro y p es paso de rosca"
            calculatorId="tornillo"
            definitions={tornilloDefinitions}
            exercises={exercises}
            complementary={[
              { 
                expression: String.raw`F_r = F_e \times \frac{2\pi r}{p}`, 
                legend: "Fuerza de resistencia" 
              },
              { 
                expression: String.raw`F_e = \frac{F_r \times p}{2\pi r}`, 
                legend: "Fuerza de esfuerzo" 
              }
            ]}
          />

          <p><strong>Donde:</strong></p>
          <ul>
            <li>VM = Ventaja mecánica (adimensional)</li>
            <li>r = Radio de giro (distancia del eje al punto donde aplicamos fuerza) (m)</li>
            <li>p = Paso de rosca (distancia entre roscas consecutivas) (m)</li>
            <li>π = Pi (3.14159...)</li>
          </ul>

          <Important>
            El tornillo tiene la MAYOR ventaja mecánica de todas las máquinas simples. Por eso 
            podemos apretar con inmensa fuerza girando simplemente con los dedos.
            <br /><br />
            Contrapartida: El tornillo avanza muy lentamente (solo un paso por vuelta completa).
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos de Tornillos">
        <Concept title="Tornillos en Acción" emoji="🔧">
          <Example>
            1. Tornillo de carpintería
            <br /><br />
            Tornillo típico: paso p = 2 mm. Destornillador con mango r = 50 mm:
            <br /><br />
            <code>VM = (2π × 50 mm) / 2 mm = 314 / 2 = 157</code>
            <br /><br />
            Si giramos con 10 N de fuerza, el tornillo penetra con:
            <br />
            <code>F = 10 N × 157 = 1570 N (≈157 kg)</code>
            <br />
            ¡Clavamos con 157 kg aplicando solo 10 N con la mano!
          </Example>

          <Example>
            2. Gato de coche (gato de tornillo)
            <br /><br />
            Tornillo con paso p ≈ 5 mm, manivela radio r ≈ 200 mm.
            <br />
            <code>VM = (2π × 200) / 5 = 1256 / 5 = 251</code>
            <br /><br />
            Para levantar coche de 1500 kg (15.000 N):
            <br />
            <code>F_manivela = 15.000 N / 251 = 59.8 N (≈6 kg)</code>
            <br />
            Levantamos 1.5 toneladas girando con solo 6 kg de esfuerzo. 
            Pero cada vuelta solo sube 5 mm.
          </Example>

          <Example>
            3. Sacacorchos
            <br /><br />
            Combina tornillo (espiral penetra en corcho, paso ≈3 mm) con palanca para extraer. 
            El tornillo penetra con gran fuerza (VM alta), luego las palancas laterales 
            multiplican fuerza para extraer el corcho atascado.
          </Example>

          <Example>
            4. Prensa de tornillo (carpintería)
            <br /><br />
            Prensas usan tornillo con paso fino (p ≈ 4 mm) y manivela larga (r ≈ 300 mm) 
            para aplicar presión uniforme al encolar maderas.
            <br /><br />
            <code>VM = (2π × 300) / 4 = 1884 / 4 = 471</code>
            <br /><br />
            Con solo 20 N en la manivela, la prensa aplica:
            <br />
            <code>F = 20 N × 471 = 9420 N (≈942 kg)</code>
            <br />
            Casi una tonelada de presión con esfuerzo mínimo.
          </Example>

          <Example>
            5. Tornillo micrométrico (palmer)
            <br /><br />
            Instrumento de medición de precisión. Tornillo con paso muy fino (p = 0.5 mm) 
            y tambor graduado radio r = 10 mm.
            <br /><br />
            <code>VM = (2π × 10) / 0.5 = 62.8 / 0.5 = 125.6</code>
            <br /><br />
            Una vuelta completa avanza solo 0.5 mm. Con 100 divisiones en el tambor, 
            cada división = 0.5/100 = 0.005 mm (5 micras). Puede medir con precisión 
            de centésimas de milímetro.
          </Example>

          <Example>
            6. Torno de banco (sujeción)
            <br /><br />
            Tornillo de banco: paso p ≈ 6 mm, barra de giro longitud ≈600 mm (r ≈300 mm).
            <br /><br />
            <code>VM = (2π × 300) / 6 = 314</code>
            <br /><br />
            Podemos apretar una pieza con más de 300 kg de fuerza girando con pocos kilos. 
            El tornillo sujeta piezas de metal con fuerza suficiente para trabajarlas 
            sin que se muevan.
          </Example>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🔧</span> Aplicaciones en la Vida Real
        </h2>
        
        <div className="theory-subsection">
          <h3>🚗 Gatos de coche</h3>
          <p>
            Los gatos de tornillo permiten levantar coches de 1.5 toneladas con esfuerzo mínimo. Con una ventaja mecánica de 250:1, girando la manivela con solo 6 kg de fuerza puedes levantar 1,500 kg. El tornillo convierte el movimiento circular en elevación lineal lenta pero poderosa.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔩 Sujeción y fijación</h3>
          <p>
            Los tornillos de carpintería y construcción penetran materiales con enorme fuerza. Un destornillador manual con VM=150 permite clavar un tornillo con 150 kg de fuerza aplicando solo 1 kg. Los tornillos autorroscantes pueden penetrar metal sin necesidad de taladrar previamente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏭 Prensas industriales</h3>
          <p>
            Las prensas de tornillo en carpintería y metalurgia aplican presiones enormes. Una prensa con VM=500 puede ejercer 5 toneladas de presión girando con 10 kg de fuerza. Se usan para encolar maderas, prensar metales y formar piezas con precisión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📏 Instrumentos de precisión</h3>
          <p>
            Los micrómetros (palmers) usan tornillos con paso de 0.5 mm para medir con precisión de centésimas de milímetro. Cada vuelta avanza solo 0.5 mm, y con 100 divisiones en el tambor, cada división representa 0.005 mm (5 micras). Esencial en manufactura de precisión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🍷 Sacacorchos</h3>
          <p>
            El sacacorchos combina un tornillo (espiral que penetra el corcho) con palancas para extraer. El tornillo penetra con gran fuerza gracias a su alta VM, luego las palancas laterales multiplican la fuerza para sacar el corcho atascado sin romperlo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🛠️ Tornos de banco</h3>
          <p>
            Los tornos de banco usan tornillos con VM=300 o más para sujetar piezas con fuerza tremenda. Pueden aplicar más de 300 kg de presión girando con 1 kg de esfuerzo, manteniendo piezas de metal inmóviles mientras se trabajan con herramientas eléctricas.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        
        <div className="theory-subsection">
          <h3>🏛️ Arquímedes y el tornillo (250 a.C.)</h3>
          <p>
            Arquímedes inventó el "tornillo de Arquímedes" para bombear agua. Es un tornillo gigante dentro de un tubo: al girarlo, el agua sube por la espiral. Se usó para irrigación en Egipto y sigue usándose hoy en plantas de tratamiento de aguas. Demostró que el tornillo puede mover líquidos además de multiplicar fuerzas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ Edad Media y Renacimiento</h3>
          <p>
            Durante la Edad Media, los tornillos se fabricaban a mano, uno por uno, haciéndolos caros. Leonardo da Vinci (1452-1519) diseñó máquinas para cortar roscas de tornillos más rápido. Las prensas de tornillo se usaban para hacer vino, aceite y papel, aplicando presiones que serían imposibles manualmente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏭 Revolución Industrial</h3>
          <p>
            Henry Maudslay inventó el torno de roscar (1800), permitiendo fabricar tornillos idénticos en masa. Esto revolucionó la manufactura: antes cada tornillo era único y no intercambiable. Joseph Whitworth estandarizó las roscas en 1841, creando el primer sistema de tornillos intercambiables.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔩 Era moderna</h3>
          <p>
            Hoy los tornillos se fabrican por millones usando máquinas automáticas. Los tornillos autorroscantes (1950s) eliminan la necesidad de taladrar. Los tornillos de titanio se usan en cirugía ortopédica para fijar huesos. Los tornillos de precisión en relojes tienen pasos de 0.1 mm, permitiendo ajustes microscópicos.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>🌊 El tornillo de Arquímedes</h3>
          <p>
            El tornillo de Arquímedes, inventado hace 2,300 años, sigue usándose hoy. En Holanda, bombea agua de los pólderes (tierras bajo el nivel del mar). En plantas de tratamiento, mueve aguas residuales. Es tan eficiente que puede mover 125,000 litros por minuto, y tan simple que casi nunca se rompe.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 El gato más pequeño</h3>
          <p>
            Los gatos de tornillo de emergencia para coches pueden caber en la palma de la mano pero levantar 2 toneladas. Con un tornillo de paso 5 mm y manivela de 20 cm, tienen VM=250. Esto significa que girando con 8 kg de fuerza, levantas 2,000 kg. ¡La física en acción!
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📏 Precisión extrema</h3>
          <p>
            Los micrómetros de precisión pueden medir diferencias de 0.001 mm (1 micra), el grosor de una bacteria. Usan tornillos con paso de 0.5 mm y tambores con 500 divisiones. Los mejores micrómetros láser pueden medir hasta 0.0001 mm (100 nanómetros), pero los mecánicos de tornillo siguen siendo estándar por su fiabilidad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ La prensa más poderosa</h3>
          <p>
            La prensa de forja más grande del mundo, en Rusia, puede ejercer 75,000 toneladas de fuerza. Aunque usa sistemas hidráulicos, el principio es similar al tornillo: convierte movimiento rotatorio en fuerza lineal enorme. Puede forjar piezas de 200 toneladas para turbinas de centrales eléctricas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦴 Tornillos en medicina</h3>
          <p>
            Los tornillos de titanio para cirugía ortopédica tienen roscas especiales que se agarran al hueso. Un tornillo de 4 mm puede soportar más de 500 kg de fuerza sin salirse. Se usan para fijar fracturas, reemplazar articulaciones y anclar implantes dentales. El cuerpo los tolera y el hueso crece alrededor.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🍷 El sacacorchos más ingenioso</h3>
          <p>
            El sacacorchos "de camarero" combina tornillo, palanca de primer género y palanca de segundo género en un dispositivo de bolsillo. El tornillo penetra con VM=100, luego dos palancas sucesivas multiplican la fuerza de extracción por 20. Puedes sacar corchos duros aplicando solo 2-3 kg de fuerza.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          El tornillo es un plano inclinado enrollado que convierte movimiento rotatorio en lineal, multiplicando enormemente la 
          fuerza. La ventaja mecánica depende del radio de giro y el paso de rosca (VM = 2πr/p). Tiene la mayor VM de todas las 
          máquinas simples. Es fundamental en sujeción, elevación, prensado y medición de precisión.
        </p>
      </div>
    </>
  );
};

export default TornilloTheory;
