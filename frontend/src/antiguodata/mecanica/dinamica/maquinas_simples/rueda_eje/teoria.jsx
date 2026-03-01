import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions as ruedaEjeDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Rueda y Eje",
  descripcion: "Rueda y eje: multiplicación de fuerza por rotación",
  educationLevel: "ESO",
  levels: ['ESO']
};

const RuedaEjeTheory = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="La Rueda y el Eje" emoji="⚙️">
        <Concept title="¿Qué es la Rueda y Eje?">
          <p>
            La rueda y el eje consisten en dos cilindros unidos que giran juntos. Al girar 
            la rueda grande (radio R), el eje pequeño (radio r) gira con ella, multiplicando 
            la fuerza aplicada.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <img 
              src="/src/assets/diagrams/rueda-eje.svg" 
              alt="Rueda y Eje - Palanca Rotatoria" 
              style={{ maxWidth: '600px', width: '100%', height: 'auto' }}
            />
          </div>

          <h4>Principio de la rueda-eje:</h4>
          <p>
            Aplicamos fuerza en el perímetro grande (rueda) y obtenemos gran fuerza en el 
            perímetro pequeño (eje). La VM depende del cociente de radios.
          </p>

          <Formula 
            expression={String.raw`VM = \frac{R}{r}`}
            legend="Ventaja Mecánica: VM = R / r, donde R es radio de la rueda y r es radio del eje"
            calculatorId="rueda-eje"
            definitions={ruedaEjeDefinitions}
            exercises={exercises}
            complementary={[
              { 
                expression: String.raw`F_r = F_e \times \frac{R}{r}`, 
                legend: "Fuerza de resistencia" 
              },
              { 
                expression: String.raw`F_e = \frac{F_r \times r}{R}`, 
                legend: "Fuerza de esfuerzo" 
              }
            ]}
          />

          <p><strong>Donde:</strong></p>
          <ul>
            <li>VM = Ventaja mecánica (adimensional)</li>
            <li>R = Radio de la rueda (donde aplicamos la fuerza) (m)</li>
            <li>r = Radio del eje (donde está la carga) (m)</li>
          </ul>

          <Important>
            Si R es mucho mayor que r, obtenemos gran VM. Ejemplo: volante de barco con 
            rueda grande conectada a eje pequeño del timón multiplica la fuerza para 
            mover el timón fácilmente.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos de Rueda-Eje">
        <Concept title="Aplicaciones Cotidianas" emoji="🎡">
          <Example>
            1. Pozo con manivela
            <br /><br />
            Manivela radio R = 30 cm, cilindro (tambor) radio r = 10 cm.
            <br />
            <code>VM = R / r = 30 / 10 = 3</code>
            <br /><br />
            Cubo con agua pesa 90 N. Al girar la manivela aplicamos:
            <br />
            <code>F = 90 N / 3 = 30 N</code>
            <br />
            Subimos 9 kg de agua aplicando solo 3 kg en la manivela.
          </Example>

          <Example>
            2. Carrete de pesca
            <br /><br />
            Manivela R ≈ 10 cm, carrete interno r ≈ 2 cm.
            <br />
            <code>VM = 10 / 2 = 5</code>
            <br /><br />
            Si el pez tira con 100 N, giramos la manivela con solo:
            <br />
            <code>F = 100 N / 5 = 20 N</code>
            <br />
            Podemos recoger peces grandes (10 kg) con esfuerzo moderado (2 kg en la manivela).
          </Example>

          <Example>
            3. Volante del coche
            <br /><br />
            Volante R ≈ 25 cm, columna de dirección r ≈ 3 cm conectada al piñón.
            <br />
            <code>VM = 25 / 3 ≈ 8.3</code>
            <br /><br />
            Aunque hoy los coches tienen dirección asistida, mecánicamente el volante 
            grande multiplica ×8 la fuerza para girar las ruedas. Antes de la asistencia, 
            girar un volante pequeño sería agotador.
          </Example>

          <Example>
            4. Persiana enrollable
            <br /><br />
            Cinta/manivela R ≈ 20 cm, tubo enrollador r ≈ 4 cm.
            <br />
            <code>VM = 20 / 4 = 5</code>
            <br /><br />
            Persiana pesa 50 N. Tiramos de la cinta con:
            <br />
            <code>F = 50 N / 5 = 10 N</code>
            <br />
            Subimos 5 kg de persiana con solo 1 kg de esfuerzo en la cinta.
          </Example>
        </Concept>

        <Concept title="Rueda-Eje Invertida" emoji="⚡">
          <p>
            Podemos usar la rueda-eje al revés: aplicar fuerza en el eje pequeño para 
            obtener mayor velocidad (pero menos fuerza) en la rueda grande.
          </p>

          <Important>
            Ejemplos de rueda-eje invertida:
            <br />• Ventilador: motor gira eje rápido, aspas grandes se mueven más lento pero 
            mueven mucho aire
            <br />• Bicicleta: pedales (plato grande r) conectados a rueda trasera (piñón pequeño R). 
            Cambiamos fuerza por velocidad
            <br />• Torno de alfarero: pedal mueve rueda grande que gira disco de arcilla. 
            Multiplicamos velocidad de giro
          </Important>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🔧</span> Aplicaciones en la Vida Real
        </h2>
        
        <div className="theory-subsection">
          <h3>🚗 Volantes de dirección</h3>
          <p>
            El volante del coche es una rueda grande (R=25 cm) conectada a una columna pequeña (r=3 cm), dando VM=8. Antes de la dirección asistida, esta ventaja mecánica era esencial para girar las ruedas. Hoy, aunque hay asistencia eléctrica o hidráulica, el volante grande sigue facilitando el control preciso.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎣 Carretes de pesca</h3>
          <p>
            Los carretes tienen manivela grande (R=10 cm) y carrete interno pequeño (r=2 cm), VM=5. Esto permite recoger peces grandes aplicando fuerza moderada. Un pez de 10 kg tirando con 100 N puede recogerse girando con solo 20 N. Los carretes de pesca deportiva tienen relaciones de hasta 6:1.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚪 Manijas y pomos</h3>
          <p>
            Las manijas de puertas son rueda-eje: giramos la manija (rueda) que rota un eje interno que retrae el pestillo. Una manija de 10 cm de radio conectada a un eje de 1 cm da VM=10, permitiendo abrir puertas con poco esfuerzo incluso si el pestillo está atascado.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ Cabrestantes y malacates</h3>
          <p>
            Los cabrestantes en barcos y remolques usan manivelas grandes para enrollar cables. Con VM=10, un trabajador puede tirar de cargas de 1 tonelada aplicando solo 100 kg de fuerza. Los malacates eléctricos modernos usan el mismo principio pero con motor.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎡 Norias y ruedas de agua</h3>
          <p>
            Las ruedas de agua históricas usaban el principio inverso: el agua empuja la rueda grande, que gira un eje pequeño conectado a molinos. La rueda grande captura más energía del agua, y el eje pequeño gira más rápido, ideal para moler grano.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔧 Destornilladores</h3>
          <p>
            Los destornilladores con mango grueso (R=2 cm) y punta pequeña (r=0.3 cm) tienen VM=6.7. Esto multiplica el torque aplicado, permitiendo apretar tornillos con fuerza. Los destornilladores de carraca usan el mismo principio para apretar sin soltar el mango.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        
        <div className="theory-subsection">
          <h3>🏺 Invención de la rueda (3500 a.C.)</h3>
          <p>
            La rueda se inventó en Mesopotamia alrededor del 3500 a.C., inicialmente para alfarería. El torno de alfarero es una rueda-eje: el alfarero empuja una rueda grande con el pie, que gira un disco pequeño donde moldea la arcilla. La rueda grande gira lentamente pero con mucha inercia, manteniendo velocidad constante.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚰 Pozos y norias</h3>
          <p>
            Los pozos con manivela aparecieron en la antigua Grecia (500 a.C.). Una manivela grande conectada a un tambor pequeño permitía subir cubos pesados con esfuerzo moderado. Las norias (ruedas de agua) se usaban en Egipto y Mesopotamia para irrigación, aprovechando la corriente del río.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ Edad Media: molinos</h3>
          <p>
            Los molinos de agua y viento medievales usaban ruedas grandes para capturar energía (agua o viento) conectadas a ejes pequeños que giraban piedras de molino. Una rueda de agua de 5 metros de diámetro conectada a un eje de 50 cm tenía VM=10, multiplicando el torque para moler toneladas de grano diariamente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚢 Navegación: timones y cabrestantes</h3>
          <p>
            Los barcos grandes desarrollaron volantes de timón enormes (hasta 2 metros de diámetro) para controlar timones masivos. Los cabrestantes con manivelas largas permitían a la tripulación izar anclas de varias toneladas. En el siglo XIX, los barcos de vapor usaban ruedas de paletas gigantes conectadas a ejes de máquinas de vapor.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>🎡 La noria más grande</h3>
          <p>
            La noria de Hama en Siria, construida en el siglo XIII, tiene 20 metros de diámetro. El río Orontes la hace girar, y sube agua 20 metros para irrigar campos. Funciona continuamente desde hace 800 años sin motor ni electricidad, solo usando la fuerza del agua y el principio de rueda-eje.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 El volante más grande</h3>
          <p>
            Los camiones antiguos tenían volantes de hasta 60 cm de diámetro porque no tenían dirección asistida. Girar las ruedas de un camión cargado requería enorme fuerza, y el volante grande (VM=20 o más) era esencial. Los conductores desarrollaban brazos muy fuertes de tanto girar el volante.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎣 El pez más grande</h3>
          <p>
            El récord de pesca deportiva es un tiburón blanco de 1,208 kg capturado en 1959. El pescador usó un carrete con VM=5, lo que significa que el pez tiraba con más de 1,000 kg de fuerza, pero el pescador solo necesitaba aplicar 200 kg en la manivela. Aun así, la batalla duró horas y casi rompe el carrete.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚓ Anclas gigantes</h3>
          <p>
            El Titanic tenía anclas de 15 toneladas cada una. Para izarlas, usaban cabrestantes con VM=15 operados por 20 hombres. Cada hombre aplicaba unos 50 kg de fuerza en las manivelas, y juntos generaban suficiente fuerza para levantar las 15 toneladas lentamente. Sin la ventaja mecánica, habría sido imposible.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏺 Alfarería de alta velocidad</h3>
          <p>
            Los tornos de alfarero modernos pueden girar a 300 RPM. Usan el principio inverso de rueda-eje: un motor pequeño gira un eje que conecta a un disco grande. El disco grande gira más lento que el motor pero con más torque, perfecto para moldear arcilla pesada sin que el motor se atasque.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎪 La rueda de la fortuna</h3>
          <p>
            La primera rueda de la fortuna (Chicago, 1893) tenía 80 metros de diámetro y pesaba 2,200 toneladas con pasajeros. Un motor de vapor de 1,000 HP la hacía girar usando un eje central. La rueda gigante actuaba como volante de inercia: una vez en movimiento, seguía girando con poco esfuerzo del motor.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          La rueda y el eje son dos cilindros unidos que giran juntos, multiplicando fuerza o velocidad según la dirección de 
          aplicación (VM = R/r). Aplicando fuerza en la rueda grande obtenemos gran fuerza en el eje pequeño. Es fundamental en 
          volantes, carretes, manivelas, cabrestantes y molinos. Puede usarse invertida para ganar velocidad a costa de fuerza.
        </p>
      </div>
    </>
  );
};

export default RuedaEjeTheory;
