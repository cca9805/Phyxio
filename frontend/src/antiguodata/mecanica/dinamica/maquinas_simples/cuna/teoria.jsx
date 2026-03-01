import { TheorySection, Concept, Important, Example } from '../../../../../components/TheoryV2';

// Metadatos del tema
export const metadata = {
  titulo: "Cuña",
  descripcion: "La cuña: plano inclinado móvil",
  isTheoryOnly: true,
  educationLevel: "ESO",
  levels: ['ESO']
};

const CunaTheory = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="La Cuña" emoji="🪓">
        <Concept title="¿Qué es una Cuña?">
          <p>
            Una cuña es un plano inclinado que se mueve para separar, cortar o partir objetos. 
            En lugar de mover el objeto por el plano, movemos el plano (cuña) a través del objeto.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <img 
              src="/src/assets/diagrams/cuna.svg" 
              alt="Cuña - Plano Inclinado Móvil" 
              style={{ maxWidth: '600px', width: '100%', height: 'auto' }}
            />
          </div>

          <h4>Principio de la cuña:</h4>
          <p>
            La cuña convierte una fuerza aplicada longitudinalmente (golpe) en dos fuerzas perpendiculares 
            que separan el material. Cuanto más aguda sea la cuña (menor ángulo), mayor es la VM.
          </p>

          <Important>
            La ventaja mecánica depende del ángulo:
            <br />
            • Cuña fina (ángulo pequeño): Gran VM, separa fácilmente pero debe penetrar más
            <br />
            • Cuña gruesa (ángulo grande): Menor VM, más fuerza pero penetra poco
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos de Cuñas">
        <Concept title="Herramientas con Cuña" emoji="🔪">
          <Example>
            1. Hacha para partir leña (ángulo 25-35°)
            <br /><br />
            Al golpear, la cuña penetra y las fuerzas perpendiculares separan las fibras de madera.
            <br /><br />
            Si golpeamos con 500 N y VM ≈ 4, la fuerza perpendicular que separa alcanza 2000 N 
            en cada lado. Por eso podemos partir troncos gruesos con un golpe seco.
          </Example>

          <Example>
            2. Cuchillo de cocina (ángulo 15-20°)
            <br /><br />
            Un cuchillo bien afilado es una cuña muy fina. Por eso corta con poco esfuerzo: VM alta.
            <br /><br />
            Cuchillo desafilado tiene filo redondeado (ángulo mayor, VM menor) → necesitamos más fuerza. 
            Al afilar, recuperamos el ángulo fino y la alta VM.
          </Example>

          <Example>
            3. Cincel de carpintero (ángulo ≈20°)
            <br /><br />
            Se golpea con mazo aplicando fuerza longitudinal, y el cincel separa la madera limpiamente.
            <br /><br />
            Con un golpe de 300 N en el mango, el cincel puede ejercer más de 1000 N perpendiculares 
            separando las fibras, permitiendo cortes precisos a favor de la veta.
          </Example>

          <Example>
            4. Bulldozer y excavadora (cuñas industriales)
            <br /><br />
            La pala del bulldozer actúa como cuña gigante que penetra en el terreno. La excavadora 
            tiene dientes en forma de cuña en el cucharón.
            <br /><br />
            Un bulldozer aplica varias toneladas de fuerza, y la cuña de la pala multiplica esa 
            fuerza perpendicular para romper tierra compactada o hielo.
          </Example>

          <Example>
            5. Cuña de rescate (bomberos)
            <br /><br />
            Los bomberos usan cuñas neumáticas o hidráulicas para abrir puertas atascadas. 
            Se introduce en una rendija y se expande.
            <br /><br />
            Una cuña neumática puede generar 10.000 N de fuerza de separación a partir de presión 
            relativamente baja del compresor. La geometría de cuña multiplica la fuerza disponible.
          </Example>

          <Example>
            6. Dientes humanos (biomecánica)
            <br /><br />
            Nuestros incisivos frontales tienen forma de cuña afilada (ángulo ≈30°) para cortar alimentos. 
            Los caninos son cuñas más puntiagudas (≈20°) para desgarrar.
            <br /><br />
            Cuando mordemos con 200 N de fuerza, la forma de cuña concentra esa fuerza en área pequeña 
            (alta presión), permitiéndonos cortar alimentos resistentes como zanahoria o manzana.
          </Example>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🔧</span> Aplicaciones en la Vida Real
        </h2>
        
        <div className="theory-subsection">
          <h3>🪓 Herramientas de corte</h3>
          <p>
            Hachas, cuchillos, cinceles y tijeras son cuñas que concentran la fuerza en un borde afilado. Un hacha bien afilada (ángulo 25°) puede partir un tronco con un golpe de 500 N, generando más de 2,000 N de fuerza perpendicular que separa las fibras de madera.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ Construcción y demolición</h3>
          <p>
            Los bulldozers usan palas en forma de cuña para penetrar y mover tierra. Las excavadoras tienen dientes de cuña en el cucharón para romper tierra compactada. Las cuñas de rescate permiten a los bomberos abrir puertas atascadas o separar estructuras colapsadas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦷 Odontología</h3>
          <p>
            Los dientes humanos son cuñas biológicas. Los incisivos (ángulo ~30°) cortan alimentos, los caninos (~20°) desgarran carne, y los molares tienen cúspides en forma de cuña para triturar. Un mordisco de 200 N se concentra en área pequeña, cortando alimentos duros.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>✈️ Aerodinámica</h3>
          <p>
            Las alas de avión tienen forma de cuña en el borde de ataque para "cortar" el aire con mínima resistencia. Los barcos tienen proas en forma de cuña para separar el agua eficientemente. Los trenes de alta velocidad tienen morro en cuña para reducir resistencia aerodinámica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🪵 Partir leña</h3>
          <p>
            Las cuñas metálicas para partir leña se insertan en grietas y se golpean con mazo. Una cuña de 30° golpeada con 400 N puede generar más de 1,500 N de fuerza de separación, partiendo troncos gruesos que serían imposibles de partir con hacha.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏔️ Escalada</h3>
          <p>
            Los pitones y friends de escalada son cuñas que se insertan en grietas de roca. Al tirar de ellos, la forma de cuña hace que se encajen más fuerte, soportando el peso del escalador. Pueden aguantar más de 2,000 kg de fuerza.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        
        <div className="theory-subsection">
          <h3>🪨 Edad de Piedra (2.5 millones de años)</h3>
          <p>
            Las primeras herramientas humanas fueron cuñas de piedra. Los homínidos tallaban piedras para crear bordes afilados en forma de cuña, usándolas para cortar carne, raspar pieles y trabajar madera. El hacha de mano achelense (1.7 millones de años) es una cuña simétrica que se usó durante más de un millón de años.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚒️ Edad de Bronce y Hierro</h3>
          <p>
            Con el descubrimiento de la metalurgia (3000 a.C.), las cuñas de metal revolucionaron la construcción y agricultura. Los cinceles de bronce permitieron tallar piedra con precisión. Las hachas de hierro (1200 a.C.) eran más duraderas y afiladas, acelerando la deforestación y construcción.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏛️ Construcción monumental</h3>
          <p>
            Los egipcios y romanos usaban cuñas de madera para partir bloques de piedra en canteras. Insertaban cuñas de madera seca en grietas, las mojaban, y la expansión de la madera al absorber agua partía la roca limpiamente. Este método se usó para construir pirámides, templos y acueductos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔪 Acero moderno</h3>
          <p>
            El desarrollo del acero de alta calidad en el siglo XIX permitió crear cuñas extremadamente afiladas y duraderas. Los cuchillos de acero inoxidable (1913) mantienen el filo mucho más tiempo. Hoy, las cuñas de carburo de tungsteno o cerámica son aún más duras, usándose en cirugía y manufactura de precisión.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>🪓 El hacha más antigua</h3>
          <p>
            El hacha de mano más antigua conocida tiene 1.7 millones de años y fue encontrada en Kenia. Es una cuña de piedra tallada simétricamente que cabía perfectamente en la mano. Nuestros ancestros usaron el mismo diseño de cuña durante más de un millón de años, demostrando su eficacia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔪 El cuchillo más afilado</h3>
          <p>
            Los bisturís de obsidiana (vidrio volcánico) son las cuñas más afiladas que existen, con bordes de solo 3 nanómetros de grosor (500 veces más fino que un bisturí de acero). Algunos cirujanos los usan para cirugías delicadas porque cortan con menos daño tisular, aunque son frágiles.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦷 La mordida más fuerte</h3>
          <p>
            El cocodrilo de agua salada tiene la mordida más fuerte del reino animal: 16,000 N (1.6 toneladas). Sus dientes cónicos en forma de cuña concentran esa fuerza en áreas pequeñas, pudiendo atravesar huesos y caparazones de tortuga. Los dientes de tiburón también son cuñas perfectas para desgarrar.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏔️ Partir montañas</h3>
          <p>
            En minería, se usan cuñas hidráulicas gigantes para partir roca. Pueden generar fuerzas de más de 100 toneladas, partiendo bloques de roca de decenas de metros. El proceso es similar a las cuñas de madera de los egipcios, pero con potencia hidráulica moderna.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>✈️ Romper la barrera del sonido</h3>
          <p>
            Los aviones supersónicos tienen morro en forma de cuña muy aguda para "cortar" el aire a velocidades supersónicas. El Concorde tenía un morro que se bajaba para mejorar visibilidad en aterrizaje y se levantaba en vuelo para reducir resistencia. La forma de cuña era esencial para superar Mach 2.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🪵 El récord de partir leña</h3>
          <p>
            El récord mundial de partir leña es de 655 bloques en una hora, logrado por Laurence O'Toole en 2007. Usaba un hacha perfectamente afilada (cuña de 28°) y técnica impecable. Cada golpe generaba suficiente fuerza de separación para partir el bloque limpiamente, demostrando la eficiencia de la cuña.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          La cuña es un plano inclinado móvil que convierte fuerza longitudinal en fuerzas perpendiculares de separación 
          (F_perpendicular = F_aplicada × VM). Cuanto más agudo el ángulo, mayor la ventaja mecánica. Las cuñas son fundamentales 
          en herramientas de corte, construcción, odontología y aerodinámica. Desde hachas prehistóricas hasta bisturís modernos, 
          la cuña es una de las máquinas simples más versátiles.
        </p>
      </div>
    </>
  );
};

export default CunaTheory;
