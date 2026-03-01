import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions as planoInclinadoDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Plano Inclinado",
  descripcion: "El plano inclinado y sus aplicaciones",
  educationLevel: "ESO",
  levels: ['ESO']
};

const PlanoInclinadoTheory = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="El Plano Inclinado" emoji="⛰️">
        <Concept title="¿Qué es un Plano Inclinado?">
          <p>
            El plano inclinado es una superficie plana inclinada respecto a la horizontal. Es una de 
            las máquinas simples más antiguas. Permite elevar objetos pesados aplicando una fuerza 
            menor que si los levantáramos verticalmente.
          </p>

          <h4>Principio:</h4>
          <p>
            En lugar de levantar un objeto verticalmente (altura h), lo desplazamos por una rampa de 
            longitud L. Como L es mayor que h, la fuerza necesaria se reduce proporcionalmente.
          </p>

          {/* Diagrama plano inclinado */}
          <div style={{textAlign: 'center', margin: '1.5rem auto', maxWidth: '500px'}}>
            <img 
              src="/src/assets/diagrams/plano-inclinado.svg" 
              alt="Plano Inclinado" 
              style={{width: '100%', height: 'auto', display: 'block', margin: '0 auto'}}
            />
          </div>

          <Formula 
            expression={String.raw`F_e = \frac{m \cdot g \cdot h}{L}`}
            calculatorId="plano-inclinado"
            definitions={planoInclinadoDefinitions}
            exercises={exercises}
            legend="Fuerza para subir por plano inclinado (sin fricción): Fe = (m·g·h) / L"
            complementary={[
                { description: "Calcular Masa Máxima", expression: String.raw`m = \frac{F_e \cdot L}{g \cdot h}` },
                { description: "Ventaja Mecánica", expression: String.raw`VM = \frac{L}{h}` }
            ]}
          />

          <p><strong>Donde:</strong></p>
          <ul>
            <li>F_e = Fuerza de esfuerzo paralela al plano (N)</li>
            <li>m = Masa del objeto (kg)</li>
            <li>g = Aceleración gravedad (9.8 m/s²)</li>
            <li>h = Altura vertical a alcanzar (m)</li>
            <li>L = Longitud de la rampa (m)</li>
          </ul>

          <Important>
            Cuanto más larga la rampa para una misma altura, menor el esfuerzo. 
            Pero recorremos mayor distancia.
            <br /><br />
            Ejemplo: Rampa de 10 m para 2 m altura → VM = 10/2 = 5. 
            Solo necesitamos 1/5 de la fuerza, pero empujamos 5 veces más distancia.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos de Planos Inclinados">
        <Concept title="Rampas de Accesibilidad" emoji="🚚">
          <Example>
            1. Rampa para silla de ruedas
            <br /><br />
            Normativa: pendiente máxima 8-10% (0.8-1 m altura por cada 10 m horizontales).
            <br /><br />
            Para subir escalón de 0.5 m con rampa de 6 m:
            <br />
            <code>VM = L / h = 6 / 0.5 = 12</code>
            <br /><br />
            Silla + persona = 100 kg (1000 N):
            <br />
            <code>F_e = (1000 N × 0.5 m) / 6 m = 83.3 N (≈8.3 kg)</code>
            <br />
            Solo empuja con 8.3 kg en lugar de levantar 100 kg verticalmente.
          </Example>

          <Example>
            2. Rampa de carga para camiones
            <br /><br />
            Rampa típica de 3 m para subir 0.6 m al camión.
            <br />
            VM = 3 / 0.6 = 5
            <br /><br />
            Para caja de 150 kg (1500 N):
            <br />
            <code>F_e = (1500 N × 0.6 m) / 3 m = 300 N (≈30 kg)</code>
            <br />
            El trabajador empuja 30 kg en lugar de levantar 150 kg.
          </Example>
        </Concept>

        <Concept title="Carreteras de Montaña" emoji="🏔️">
          <Example>
            3. Carretera en zigzag
            <br /><br />
            Montaña de 500 m altura, carretera de 10 km (10.000 m): VM = 20.
            <br /><br />
            Coche de 1200 kg necesita:
            <br />
            <code>F_e = (12.000 N × 500 m) / 10.000 m = 600 N</code>
            <br />
            El motor vence 600 N (además de fricción), no los 12.000 N del peso total.
          </Example>

          <Example>
            4. Aníbal cruzando los Alpes (218 a.C.)
            <br /><br />
            Subió 2000 m siguiendo pasos de 40 km:
            <br />
            <code>VM = 40.000 / 2000 = 20</code>
            <br />
            Sus elefantes (5000 kg cada uno) solo vencían 1/20 de su peso en cada momento.
          </Example>
        </Concept>

        <Concept title="Construcciones Antiguas" emoji="🏛️">
          <Example>
            5. Pirámides de Egipto
            <br /><br />
            Bloques de 2500 kg (25.000 N). Gran Pirámide: 146 m altura.
            <br /><br />
            Teoría rampa espiral de 1500 m total:
            <br />
            <code>VM = 1500 / 146 = 10.27</code>
            <br />
            <code>F_e = 25.000 N / 10.27 = 2434 N (≈243 kg)</code>
            <br />
            10-15 trabajadores arrastraban cada bloque por la rampa (con rodillos de madera).
          </Example>

          <Example>
            6. Subir muebles por escalera
            <br /><br />
            Sofá de 80 kg al primer piso (3 m altura). Escalera ≈4.5 m longitud.
            <br />
            <code>VM = 4.5 / 3 = 1.5</code>
            <br />
            <code>F_e = (800 N × 3 m) / 4.5 m = 533 N (≈53 kg)</code>
            <br />
            Entre dos personas (27 kg cada una), suben el sofá por las escaleras.
          </Example>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🔧</span> Aplicaciones en la Vida Real
        </h2>
        
        <div className="theory-subsection">
          <h3>♿ Accesibilidad universal</h3>
          <p>
            Las rampas de accesibilidad permiten que personas en silla de ruedas, con carritos de bebé o equipaje pesado accedan a edificios. La normativa exige pendientes máximas del 8-10% (8-10 cm de altura por metro de longitud), garantizando que cualquier persona pueda subir sin ayuda.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏔️ Carreteras de montaña</h3>
          <p>
            Las carreteras en zigzag por montañas son planos inclinados que permiten a los vehículos subir pendientes imposibles en línea recta. Una carretera que sube 1,000 metros en 20 km tiene una pendiente del 5%, manejable para cualquier coche. En línea recta sería una pared vertical.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚚 Logística y carga</h3>
          <p>
            Las rampas de carga en camiones, almacenes y muelles permiten mover cargas pesadas con carretillas o transpaletas. Una rampa de 3 metros para subir 60 cm reduce el esfuerzo a 1/5, permitiendo que un trabajador mueva cajas de 150 kg aplicando solo 30 kg de fuerza.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ Construcción histórica</h3>
          <p>
            Las pirámides de Egipto se construyeron usando rampas temporales. Los bloques de 2.5 toneladas se arrastraban por rampas de tierra y arena, reduciendo la fuerza necesaria. Aunque se necesitaban muchos trabajadores, era posible sin maquinaria moderna.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎢 Montañas rusas</h3>
          <p>
            La primera subida de una montaña rusa es un plano inclinado que convierte energía eléctrica en energía potencial. La cadena tira de los vagones por la rampa, almacenando energía que se liberará en las bajadas. Cuanto más larga y suave la subida, menos potencia necesita el motor.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏠 Tejados inclinados</h3>
          <p>
            Los tejados son planos inclinados que facilitan el deslizamiento de agua y nieve. En zonas con mucha nieve, los tejados tienen pendientes de 45° o más para que la nieve se deslice sola, evitando acumulaciones peligrosas que podrían colapsar la estructura.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        
        <div className="theory-subsection">
          <h3>🏛️ Antiguo Egipto (2500 a.C.)</h3>
          <p>
            Los egipcios usaron rampas masivas para construir las pirámides. La teoría más aceptada es que construyeron rampas en espiral alrededor de la pirámide, aumentando su longitud a medida que la pirámide crecía. Para la Gran Pirámide de Keops (146 metros), la rampa habría tenido varios kilómetros de longitud.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏔️ Caminos romanos</h3>
          <p>
            Los romanos fueron maestros en construir carreteras con pendientes suaves. La Vía Apia (312 a.C.) usaba zigzags para subir colinas, permitiendo que carros pesados transitaran por todo el imperio. Muchas de estas carreteras siguen en uso 2,000 años después.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚂 Ferrocarriles (siglo XIX)</h3>
          <p>
            Los trenes no pueden subir pendientes pronunciadas (máximo 3-4%). Los ingenieros victorianos diseñaron líneas férreas con túneles, puentes y zigzags para mantener pendientes suaves. El ferrocarril transandino usa zigzags donde el tren sube hacia adelante, retrocede por un desvío, y vuelve a avanzar en dirección opuesta, ganando altura gradualmente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>♿ Movimiento de accesibilidad (siglo XX)</h3>
          <p>
            Las rampas de accesibilidad se volvieron obligatorias en muchos países a partir de los años 1970-1990. La Americans with Disabilities Act (1990) en EE.UU. estableció estándares de pendiente máxima (1:12, es decir, 1 metro de altura por cada 12 de longitud), revolucionando el diseño urbano y arquitectónico.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>🐘 Aníbal y los elefantes (218 a.C.)</h3>
          <p>
            Aníbal cruzó los Alpes con 37 elefantes de guerra, subiendo 2,000 metros siguiendo pasos de montaña que eran planos inclinados naturales. Los elefantes, que pesaban hasta 5 toneladas, pudieron subir porque los pasos tenían pendientes suaves (aunque el viaje duró 15 días y solo sobrevivieron unos pocos elefantes).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏔️ La carretera más empinada</h3>
          <p>
            Baldwin Street en Nueva Zelanda es la calle más empinada del mundo con pendiente del 35% (19°). Subir caminando es agotador, y en coche hay que usar primera marcha. Si fuera más empinada, los coches no podrían subir porque las ruedas patinarían antes de tener suficiente tracción.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎿 Pistas de esquí</h3>
          <p>
            Las pistas de esquí se clasifican por pendiente: verdes (6-25%), azules (25-40%), rojas (40-55%), negras (&gt;55%). Una pista negra con 60% de pendiente significa que por cada 100 metros horizontales, bajas 60 metros verticalmente. ¡Es casi como caer por un tobogán!
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚂 El tren más empinado</h3>
          <p>
            El funicular de Pilatus en Suiza tiene la pendiente más pronunciada del mundo para un tren de cremallera: 48% (25.6°). Usa un sistema especial de engranajes que se agarran a una cremallera central. Los trenes normales no pueden superar el 4% de pendiente porque las ruedas patinarían.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ El misterio de las pirámides</h3>
          <p>
            Aún se debate cómo se construyeron las rampas para las pirámides. Una rampa recta hasta la cima de la Gran Pirámide (146 m) con pendiente del 10% habría tenido 1.5 km de longitud y habría requerido más material que la propia pirámide. Por eso se cree que usaron rampas en espiral o zigzag.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎢 La montaña rusa más alta</h3>
          <p>
            Kingda Ka en Nueva Jersey tiene una subida inicial de 139 metros. La rampa de lanzamiento acelera los vagones de 0 a 206 km/h en 3.5 segundos usando un sistema hidráulico. La subida es tan empinada (90°, vertical) que no es realmente un plano inclinado, ¡es una pared! Por eso necesita el lanzamiento inicial.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          El plano inclinado reduce la fuerza necesaria para elevar objetos aumentando la distancia recorrida. La ventaja mecánica 
          es el cociente entre la longitud de la rampa y la altura (VM = L/h). Cuanto más larga la rampa, menor el esfuerzo pero 
          mayor la distancia. Es fundamental en accesibilidad, transporte, construcción y carreteras de montaña.
        </p>
      </div>
    </>
  );
};

export default PlanoInclinadoTheory;
