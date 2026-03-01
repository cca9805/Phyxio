import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions as poleasDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Poleas",
  descripcion: "Poleas fijas, móviles y polipastos",
  educationLevel: "ESO",
  levels: ['ESO']
};

const PoleasTheory = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="¿Qué es una Polea?" emoji="⚙️">
        <Concept title="Introducción a las Poleas">
          <p>
            Una polea es una rueda acanalada que gira libremente alrededor de un eje. Por la ranura 
            (garganta) pasa una cuerda, cadena o cable. Las poleas son fundamentales en la construcción, 
            transporte de cargas y sistemas mecánicos.
          </p>

          <h4>Componentes de una polea:</h4>
          <ul>
            <li>🔵 Disco o rueda: La parte circular que gira</li>
            <li>⚫ Eje: Centro sobre el que gira la rueda</li>
            <li>🟤 Garganta o canal: Ranura por donde pasa la cuerda</li>
            <li>🪢 Cuerda/cable: Transmite la fuerza</li>
          </ul>

          <Important>
            Función principal: Las poleas pueden cambiar la dirección de una fuerza aplicada y/o 
            reducir el esfuerzo necesario para levantar una carga, dependiendo de su configuración.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Polea Fija" emoji="🏗️">
        <Concept title="Polea Fija: Cambiando la Dirección">
          <p>
            Una polea fija está sujeta a un punto fijo y NO se desplaza. La cuerda pasa por la garganta: 
            un extremo tiene la carga y del otro tiramos nosotros.
          </p>

          {/* Diagrama polea fija */}
          <div style={{textAlign: 'center', margin: '1.5rem auto', maxWidth: '400px'}}>
            <img 
              src="/src/assets/diagrams/polea-fija.svg" 
              alt="Polea Fija" 
              style={{width: '100%', height: 'auto', display: 'block', margin: '0 auto'}}
            />
          </div>

          <Formula 
            expression={String.raw`VM = 1`}
            legend="Ventaja Mecánica de polea fija = 1 (NO multiplica la fuerza)"
          />

          <Important>
            La polea fija NO reduce el esfuerzo. Si la carga pesa 100 N, debemos tirar con 100 N. 
            Su ventaja es que cambia la dirección: tiramos hacia ABAJO (aprovechando nuestro peso) 
            en lugar de empujar hacia ARRIBA.
          </Important>

          <Example>
            1. Izar una bandera
            <br /><br />
            Tiramos hacia abajo y la bandera sube. Si pesa 5 N, tiramos con 5 N. VM = 1.
          </Example>

          <Example>
            2. Pozo tradicional con cubo
            <br /><br />
            Si el cubo lleno pesa 100 N (≈10 kg), tiramos con 100 N. No ahorramos fuerza, 
            pero es más cómodo tirar hacia abajo.
          </Example>

          <Example>
            3. Persianas enrollables
            <br /><br />
            Tiramos de un lado para subir y del otro para bajar. Control fácil aunque no ahorramos fuerza.
          </Example>

          <Example>
            4. Campana de iglesia
            <br /><br />
            Una campana de 500 kg requiere 5000 N. El campanero tira hacia abajo con 5000 N, 
            aprovechando su peso corporal.
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Polea Móvil" emoji="🏋️">
        <Concept title="Polea Móvil: Reduciendo el Esfuerzo">
          <p>
            Una polea móvil NO está fija, sino que se mueve con la carga. Un extremo de la cuerda 
            está fijo, la cuerda pasa por la polea (que sostiene la carga), y del otro extremo tiramos.
          </p>

          {/* Diagrama polea móvil */}
          <div style={{textAlign: 'center', margin: '1.5rem auto', maxWidth: '400px'}}>
            <img 
              src="/src/assets/diagrams/polea-movil.svg" 
              alt="Polea Móvil" 
              style={{width: '100%', height: 'auto', display: 'block', margin: '0 auto'}}
            />
          </div>

          <Formula 
            expression={String.raw`F_e = \frac{F_r}{2}`}
            calculatorId="polea-movil"
            definitions={poleasDefinitions}
            exercises={exercises}
            legend="Fuerza necesaria: Fe = Fr / 2. Si la carga pesa 100 N, tiramos con 50 N."
            complementary={[
                { description: "Calcular Fuerza de Resistencia", expression: String.raw`F_r = F_e \times 2` },
                { description: "Ventaja Mecánica", expression: String.raw`VM = 2` }
            ]}
          />

          <Important>
            Con una polea móvil, la carga se reparte entre dos tramos de cuerda. Solo necesitamos 
            aplicar la MITAD de la fuerza. Contrapartida: Debemos tirar el DOBLE de cuerda. 
            Para elevar 1 m, tiramos 2 m de cuerda.
          </Important>

          <Example>
            1. Grúas de construcción simples
            <br /><br />
            Para elevar una viga de 200 kg (2000 N):
            <br />
            <code>F_e = 2000 N / 2 = 1000 N (≈100 kg)</code>
            <br />
            El motor solo necesita ejercer 1000 N en lugar de 2000 N. VM = 2.
          </Example>

          <Example>
            2. Polipastos de taller
            <br /><br />
            Un motor de 150 kg (1500 N) se levanta con solo 750 N. Un mecánico de 70 kg 
            puede levantarlo colgándose de la cadena.
          </Example>

          <Example>
            3. Aparejos de veleros
            <br /><br />
            Si la tensión del viento es 400 N, con polea móvil el marinero tira con 200 N.
          </Example>

          <Example>
            4. Ascensores primitivos
            <br /><br />
            Para subir una cabina de 500 kg (5000 N), el operador tiraba con 2500 N.
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Polipasto" emoji="🏗️">
        <Concept title="Polipasto: Sistema de Poleas Múltiples">
          <p>
            Un polipasto (aparejo) combina varias poleas fijas y móviles. Permite levantar 
            cargas muy pesadas con poco esfuerzo.
          </p>

          {/* Diagrama polipasto */}
          <div style={{textAlign: 'center', margin: '1.5rem auto', maxWidth: '400px'}}>
            <img 
              src="/src/assets/diagrams/polipasto.svg" 
              alt="Polipasto - Sistema de Poleas" 
              style={{width: '100%', height: 'auto', display: 'block', margin: '0 auto'}}
            />
          </div>

          <Formula 
            expression={String.raw`F_e = \frac{F_r}{n}`}
            calculatorId="polipasto"
            definitions={poleasDefinitions}
            exercises={exercises}
            legend="Fuerza necesaria: Fe = Fr / n. Divide la carga entre el número de tramos."
            complementary={[
                { description: "Calcular Fuerza de Resistencia", expression: String.raw`F_r = F_e \times n` },
                { description: "Ventaja Mecánica", expression: String.raw`VM = n` }
            ]}
          />

          <Important>
            Regla práctica: Cuenta cuántos tramos de cuerda sostienen la carga móvil. 
            Ese número es tu VM.
            <br />
            • 2 tramos → VM = 2 (esfuerzo = mitad)
            <br />
            • 4 tramos → VM = 4 (esfuerzo = cuarta parte)
            <br />
            • 6 tramos → VM = 6 (esfuerzo = sexta parte)
          </Important>

          <Example>
            1. Polipasto 2:1 (Factor 2)
            <br /><br />
            1 polea fija + 1 móvil = 2 tramos. Para 400 N, tiramos 200 N.
            Tiramos 2 m de cuerda para subir 1 m.
          </Example>

          <Example>
            2. Polipasto 4:1 (Factor 4)
            <br /><br />
            2 poleas fijas + 2 móviles = 4 tramos. Para levantar motor de 300 kg (3000 N):
            <br />
            <code>F_e = 3000 N / 4 = 750 N (≈75 kg)</code>
            <br />
            Tiramos 4 m de cadena para elevar 1 m.
          </Example>

          <Example>
            3. Polipasto 6:1 (Factor 6)
            <br /><br />
            3 poleas fijas + 3 móviles = 6 tramos. Para viga de 1200 kg (12.000 N):
            <br />
            <code>F_e = 12.000 N / 6 = 2000 N (≈200 kg)</code>
            <br />
            Dos trabajadores (100 kg cada uno) levantan más de 1 tonelada.
          </Example>

          <Example>
            4. Grúas torre (Factor 8:1)
            <br /><br />
            Levantando paleta de 2000 kg (20.000 N):
            <br />
            <code>F_motor = 20.000 N / 8 = 2500 N</code>
            <br />
            Motor de 10 kW levanta cargas enormes lentamente.
          </Example>

          <Example>
            5. Rescate vertical (Factor 3:1)
            <br /><br />
            Para subir persona de 80 kg (800 N) por acantilado:
            <br />
            <code>F_e = 800 N / 3 = 267 N (≈27 kg)</code>
            <br />
            Un rescatador iza al herido con solo 27 kg de esfuerzo.
          </Example>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🔧</span> Aplicaciones en la Vida Real
        </h2>
        
        <div className="theory-subsection">
          <h3>🏗️ Construcción y grúas</h3>
          <p>
            Las grúas torre usan polipastos con ventajas mecánicas de 6:1 a 12:1. Una grúa con VM=8 puede levantar 8 toneladas con un motor que genera solo 1 tonelada de fuerza. Los polipastos eléctricos modernos pueden levantar cargas de hasta 50 toneladas controladas por un solo operador.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏢 Ascensores</h3>
          <p>
            Los ascensores usan poleas con contrapesos. El contrapeso equilibra el peso de la cabina vacía más la mitad de la carga máxima. Esto reduce el consumo energético hasta un 50% y permite usar motores más pequeños. Un ascensor de 8 personas puede funcionar con un motor de solo 15 kW.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⛵ Veleros y navegación</h3>
          <p>
            Los aparejos de veleros combinan poleas fijas y móviles para controlar velas enormes. Un marinero de 70 kg puede controlar una vela que genera 500 kg de tensión usando un aparejo 8:1. Los veleros de competición tienen docenas de poleas para ajustar cada vela con precisión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏋️ Gimnasios</h3>
          <p>
            Las máquinas de gimnasio usan poleas fijas para cambiar la dirección de la fuerza, haciendo los ejercicios más ergonómicos. Aunque no reducen el peso (VM=1), permiten trabajar músculos desde ángulos imposibles con pesas libres. Las poleas de cable permiten movimientos fluidos y controlados.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚡 Teleféricos</h3>
          <p>
            Los teleféricos usan poleas gigantes de hasta 5 metros de diámetro. El cable pasa por poleas en cada torre, soportando cabinas de varias toneladas. El sistema de poleas distribuye el peso uniformemente, permitiendo transportar cientos de personas por hora a través de montañas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧗 Rescate y escalada</h3>
          <p>
            Los equipos de rescate usan polipastos 3:1 o 5:1 para izar personas por acantilados o edificios. Un rescatador de 80 kg puede izar a una víctima de 100 kg usando un polipasto 3:1, aplicando solo 33 kg de fuerza. Estos sistemas salvan vidas en montañas, cuevas y rescates urbanos.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        
        <div className="theory-subsection">
          <h3>🏛️ Poleas en la antigüedad (1500 a.C.)</h3>
          <p>
            Las poleas se usaban en Mesopotamia y Egipto para pozos y construcción. Los egipcios usaban poleas simples para levantar bloques de piedra en las pirámides. Los griegos desarrollaron poleas más sofisticadas, y Arquímedes (287-212 a.C.) diseñó el primer polipasto documentado, combinando múltiples poleas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚓ Navegación medieval</h3>
          <p>
            Durante la Edad Media, los veleros desarrollaron aparejos complejos con docenas de poleas. Los marineros podían controlar velas enormes usando sistemas de poleas que multiplicaban su fuerza. Esto permitió la era de los grandes veleros y la exploración oceánica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏭 Revolución Industrial</h3>
          <p>
            La Revolución Industrial (siglo XVIII) vio la explosión del uso de poleas. Las fábricas textiles usaban sistemas de poleas y correas para transmitir potencia desde máquinas de vapor a cientos de telares. Los puertos desarrollaron grúas con polipastos para cargar barcos más rápido.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ Era moderna</h3>
          <p>
            En el siglo XX, las poleas se combinaron con motores eléctricos e hidráulicos. Las grúas torre modernas pueden levantar 20 toneladas a 100 metros de altura. Los ascensores de alta velocidad usan poleas de precisión con rodamientos magnéticos, alcanzando velocidades de 20 m/s (72 km/h).
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>🏛️ Arquímedes y el barco del rey</h3>
          <p>
            Arquímedes diseñó un polipasto compuesto para demostrar el poder de las poleas al rey Hierón II de Siracusa. Usando un sistema de poleas, Arquímedes, sentado cómodamente, movió él solo un barco de guerra completamente cargado que normalmente requería cientos de hombres. El rey quedó tan impresionado que financió todos los proyectos de Arquímedes.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🗼 El ascensor más rápido del mundo</h3>
          <p>
            El ascensor del Shanghai Tower alcanza 73.8 km/h (20.5 m/s), subiendo 632 metros en menos de un minuto. Usa poleas de precisión con rodamientos magnéticos que giran a 2,000 RPM sin fricción. El sistema de poleas y contrapesos pesa más de 50 toneladas pero permite un viaje suave y silencioso.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚡 El teleférico más largo</h3>
          <p>
            El teleférico de Mérida (Venezuela) era el más largo del mundo con 12.5 km y 4,765 metros de desnivel. Usaba poleas gigantes de 5 metros de diámetro en cada torre. El cable principal tenía 5 cm de grosor y pesaba más de 100 toneladas. Podía transportar 1,000 personas por hora a través de los Andes.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⛵ El récord de aparejos</h3>
          <p>
            Los grandes veleros del siglo XIX como el Preussen (1902) tenían más de 200 poleas en sus aparejos. Un solo marinero podía controlar velas de 500 m² usando sistemas de poleas 10:1. El barco tenía 5 mástiles y 47 velas, todo controlado por una tripulación de solo 45 hombres gracias a las poleas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ La grúa más grande</h3>
          <p>
            La grúa Taisun en China puede levantar 20,000 toneladas (el peso de 200 ballenas azules). Usa un sistema de polipastos con VM=32, lo que significa que los motores generan "solo" 625 toneladas de fuerza. El sistema de poleas tiene cables de 15 cm de diámetro y poleas de 8 metros.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎪 Poleas en el circo</h3>
          <p>
            Los trapecistas usan poleas para subir a las alturas. Un sistema de poleas 2:1 permite que un asistente de 70 kg levante a un trapecista de 60 kg con solo 30 kg de esfuerzo. Las redes de seguridad también usan poleas para tensarlas correctamente, soportando impactos de hasta 2 toneladas.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          Las poleas son ruedas acanaladas que cambian la dirección de fuerzas. Las poleas fijas (VM=1) solo cambian dirección. 
          Las poleas móviles (VM=2) reducen el esfuerzo a la mitad. Los polipastos combinan múltiples poleas, dividiendo la carga 
          entre n tramos de cuerda (F_e = F_r/n). Son fundamentales en construcción, transporte y maquinaria.
        </p>
      </div>
    </>
  );
};

export default PoleasTheory;
