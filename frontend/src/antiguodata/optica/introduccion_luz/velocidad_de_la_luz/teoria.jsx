import { TheorySection, Concept, Important, Formula } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Velocidad de la luz",
  descripcion: "Constante fundamental de la naturaleza que representa la velocidad máxima de propagación de ondas electromagnéticas en el vacío: 299,792,458 m/s.",
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const VelocidadDeLaLuzTeoria = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="¿Qué es la velocidad de la luz?">
        <p>
          La velocidad de la luz es una de las constantes fundamentales de la naturaleza. Representa la rapidez con la que las ondas electromagnéticas se propagan en el vacío: exactamente 299,792,458 metros por segundo (~300,000 km/s).
        </p>
        <p>
          Se representa con la letra c (del latín celeritas, "rapidez") y aparece en ecuaciones fundamentales como E = mc² de Einstein, que relaciona energía y masa.
        </p>
        
        <Important>
          La velocidad de la luz en el vacío es la velocidad máxima posible en el universo según la teoría de la relatividad.
        </Important>

        <p>
          En medios materiales (agua, vidrio, aire), la luz viaja más despacio por interacción con partículas. En agua: ~225,000 km/s; en vidrio: ~200,000 km/s.
        </p>
        <Formula
          expression={String.raw`c = 299{,}792{,}458\ \text{m/s}`}
          definitions={definitions}
        />
      </TheorySection>

      <TheorySection title="Año luz: una distancia, no un tiempo">
        <Concept title="Definición">
          <p>
            Un año luz es la distancia que recorre la luz en un año: aproximadamente 9.46 × 10¹² km (9.46 billones de kilómetros). Se usa en astronomía para medir distancias interestelares e intergalácticas.
          </p>
        </Concept>
        <Formula
          expression={String.raw`d = c\,t`}
          calculatorId="velocidad-de-la-luz"
          definitions={definitions}
          exercises={exercises}
        />
        <p>Donde:</p>
        <ul>
          <li>c: velocidad de la luz (299,792,458 m/s)</li>
          <li>t: tiempo transcurrido</li>
          <li>d: distancia recorrida</li>
        </ul>
        <Important>
          Próxima Centauri (estrella más cercana) está a 4.2 años luz. La galaxia de Andrómeda está a 2.5 millones de años luz.
        </Important>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>⚡ Relámpagos y truenos</h3>
          <p>
            Durante una tormenta, vemos el relámpago instantáneamente, pero el trueno tarda en llegar porque el sonido viaja a solo 343 m/s (casi un millón de veces más lento que la luz). Contando los segundos entre relámpago y trueno, y dividiendo por 3, se calcula la distancia en kilómetros. Esta diferencia de velocidades salva vidas: al ver el relámpago, tienes tiempo de buscar refugio antes de que llegue la tormenta.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📡 Comunicaciones satelitales</h3>
          <p>
            Los satélites geoestacionarios orbitan a 36,000 km de altura. Las señales de TV o internet satelital tardan ~240 ms en hacer el viaje de ida y vuelta (retardo perceptible en videollamadas). Los satélites GPS usan cálculos precisos de la velocidad de la luz para triangular tu posición con precisión de metros. Un error de 1 nanosegundo en la medición del tiempo equivale a 30 cm de error en la posición.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Fibra óptica e internet</h3>
          <p>
            La fibra óptica transmite datos usando pulsos de luz que viajan a ~200,000 km/s (66% de c debido al índice de refracción del vidrio). Un cable submarino entre Nueva York y Londres tiene 5,500 km, lo que significa un retardo mínimo de ~28 ms. En trading de alta frecuencia, milisegundos valen millones, por lo que los cables siguen rutas más directas para minimizar distancia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔭 Astronomía: máquina del tiempo</h3>
          <p>
            Ver estrellas es literalmente observar el pasado. La luz de Betelgeuse tarda 642 años en llegarnos; si explotara hoy, no lo sabríamos hasta el año 2667. Los telescopios espaciales como el James Webb observan galaxias tan lejanas que su luz lleva 13,500 millones de años viajando, mostrándonos el universo primitivo poco después del Big Bang.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Midiendo lo imposible
        </h2>
        
        <div className="theory-subsection">
          <h3>🕯️ Galileo intenta y falla (1638)</h3>
          <p>
            Galileo Galilei intentó medir la velocidad de la luz usando linternas en colinas separadas. Él y un asistente descubrirían sus lámparas simultáneamente y medirían el retardo. El experimento falló porque la luz es demasiado rápida para reacciones humanas. Sin embargo, su intuición era correcta: la luz tiene velocidad finita (no instantánea como creía Aristóteles).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🪐 Ole Rømer y las lunas de Júpiter (1676)</h3>
          <p>
            El astrónomo danés Ole Rømer observó que los eclipses de Io (luna de Júpiter) se adelantaban o retrasaban según la distancia Tierra-Júpiter. Concluyó que la luz tardaba ~22 minutos en cruzar el diámetro de la órbita terrestre. Esto le dio una estimación de 220,000 km/s, el primer valor cuantitativo de c. Fue una revolución: la luz no es instantánea, tiene velocidad medible.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ Fizeau: ruedas dentadas terrestres (1849)</h3>
          <p>
            Hipólito Fizeau hizo pasar luz por una rueda dentada giratoria hacia un espejo a 8.6 km. Ajustando la velocidad de rotación, la luz pasaba por un hueco de ida y volvía por el siguiente hueco. Obtuvo 313,000 km/s, demostrando que la velocidad de la luz podía medirse en Tierra sin necesidad de observaciones astronómicas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏆 Michelson: precisión extrema (1879-1926)</h3>
          <p>
            Albert Michelson perfeccionó el método usando espejos octogonales giratorios y distancias de 35 km entre montañas de California. Obtuvo 299,796 km/s (¡1 km/s). Su trabajo le valió el Premio Nobel de Física en 1907. En 1983, la velocidad de la luz se definió exactamente como 299,792,458 m/s, y el metro pasó a definirse en función de c.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>☀️ Siempre vemos el pasado</h3>
          <p>
            La luz del Sol tarda 8 minutos y 20 segundos en llegar a la Tierra. Si el Sol desapareciera ahora mismo, seguiríamos viéndolo durante 8 minutos más. La Luna está a 1.3 segundos-luz (la vemos como era hace 1.3 segundos). Cuando miras a alguien a 3 metros, lo ves como era hace 10 nanosegundos. Literalmente, nunca vemos el presente: siempre observamos el pasado.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 El límite cósmico de velocidad</h3>
          <p>
            Según Einstein, nada con masa puede alcanzar la velocidad de la luz porque requeriría energía infinita. A 90% de c, un objeto tiene el doble de masa que en reposo. A 99.99% de c, su masa es 70 veces mayor. Los aceleradores de partículas como el LHC aceleran protones hasta 99.9999991% de c, pero nunca llegan al 100%. La luz puede ir a c porque los fotones no tienen masa.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🐌 La luz "lenta" de Harvard (1999)</h3>
          <p>
            La física Lene Hau consiguió ralentizar luz hasta 17 m/s (61 km/h, velocidad de un ciclista) usando un condensado de Bose-Einstein de átomos de sodio a temperatura casi cero absoluto. En 2001, la detuvo completamente y la "guardó" durante fracciones de segundo. En 2013, científicos alemanes detuvieron luz durante un minuto completo. Esto podría revolucionar la computación cuántica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🐢 ¿Más rápido que la luz? La paradoja del láser</h3>
          <p>
            Si apuntas un láser a la Luna y mueves tu muñeca rápidamente, el punto en la Luna se mueve más rápido que c. ¿Contradicción? No: ningún objeto físico ni información viaja más rápido que la luz. El punto es solo una ilusión (como una sombra proyectada). Los fotones individuales siguen viajando a c en línea recta desde tu láser a la Luna.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            Velocidad de la luz en el vacío: c = 299,792,458 m/s (exacta por definición desde 1983).
          </li>
          <li>
            Es la velocidad máxima posible según relatividad; aparece en E = mc² y define el metro.
          </li>
          <li>
            En medios materiales viaja más lento: agua (~225,000 km/s), vidrio (~200,000 km/s).
          </li>
          <li>
            Año luz = distancia que recorre luz en 1 año ≈ 9.46 × 10¹² km. Fórmula: d = c × t.
          </li>
          <li>
            Historia: Galileo (fallido) → Rømer (1676, Júpiter) → Fizeau (1849, rueda) → Michelson (Nobel 1907).
          </li>
          <li>
            Curiosidad: Ver el universo es observar su pasado; la luz del Sol tarda 8 min 20 s en llegarnos.
          </li>
        </ul>
      </div>
    </>
  );
};

export default VelocidadDeLaLuzTeoria;
