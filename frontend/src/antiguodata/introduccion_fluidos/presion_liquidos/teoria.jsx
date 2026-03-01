import { TheorySection, Concept, Formula, Important, Example, ExercisesSection } from '../../../components/TheoryV2';
import { definitions } from './definitions.js';
import ejercicios from './ejercicios.json';

export const metadata = {
  titulo: "Presión en Líquidos",
  descripcion: "Cómo los líquidos transmiten presión y sus aplicaciones",
  isTheoryOnly: false,
  educationLevel: "ESO",
  levels: ['ESO']
};

const Theory = () => {
  return (
    <>
      <TheorySection title="La Presión en los Líquidos">
        <p>
          Los líquidos, a diferencia de los gases, son incompresibles: no se pueden comprimir fácilmente. Esto les da propiedades especiales para transmitir presión de manera eficiente y uniforme.
        </p>

        <Important>
          <p>🌊 Principio fundamental: La presión en un líquido aumenta con la profundidad</p>
          <p>Cuanto más profundo estés bajo el agua, mayor será la presión que sientes.</p>
        </Important>
      </TheorySection>

      <TheorySection title="Presión Hidrostática">
        <p>
          La presión hidrostática es la presión que ejerce un líquido en reposo debido a su propio peso. Esta presión actúa en todas las direcciones y aumenta linealmente con la profundidad.
        </p>

        <Concept title="¿Por qué aumenta la presión con la profundidad?">
          <p>
            Imagina que estás bajo el agua. Sobre tu cabeza hay una columna de agua que tiene peso. Cuanto más profundo estés, más larga es esa columna y más peso hay sobre ti. Cada capa de agua añade su peso a la presión total.
          </p>
        </Concept>

        <Formula
          expression="P = P_{atm} + \rho \cdot g \cdot h"
          description="Presión total en un líquido: presión atmosférica más presión hidrostática"
          calculatorId="presion-hidrostatica"
          definitions={definitions}
          exercises={ejercicios}
        />

        <Example title="Presión en una piscina">
          <p>
            Superficie (0 m): Solo presión atmosférica = 101,325 Pa
          </p>
          <p>
            1 metro de profundidad: P = 101,325 + (1000 × 10 × 1) = 111,325 Pa
          </p>
          <p>
            5 metros de profundidad: P = 101,325 + (1000 × 10 × 5) = 151,325 Pa
          </p>
          <p>
            Cada 10 metros bajo el agua, la presión aumenta aproximadamente 1 atmósfera.
          </p>
        </Example>

        <Important>
          <p>🏊 ¿Por qué duelen los oídos al bucear?</p>
          <p>
            La presión del agua aumenta con la profundidad, pero la presión dentro de tus oídos se mantiene igual. Esta diferencia de presión causa dolor. Los buceadores aprenden a "compensar" la presión soplando suavemente con la nariz tapada, igualando la presión interna con la externa.
          </p>
        </Important>
      </TheorySection>

      <TheorySection title="Vasos Comunicantes">
        <p>
          Los vasos comunicantes son recipientes conectados por su base. Un principio importante: el líquido alcanza la misma altura en todos ellos, independientemente de la forma o tamaño de cada recipiente.
        </p>

        <Concept title="¿Por qué el agua llega a la misma altura?">
          <p>
            La presión en el fondo debe ser la misma en todos los recipientes conectados. Como la presión depende de la altura del líquido (P = ρgh), si las alturas fueran diferentes, el líquido fluiría del lado más alto al más bajo hasta equilibrarse. El equilibrio se alcanza cuando las alturas son iguales.
          </p>
        </Concept>

        <Example title="Aplicaciones de los vasos comunicantes">
          <ul>
            <li>🚰 Fontanería doméstica: El agua en las tuberías busca el mismo nivel</li>
            <li>🏗️ Nivel de obra: Instrumento para nivelar construcciones</li>
            <li>⛲ Fuentes ornamentales: El agua sube hasta el nivel del depósito</li>
            <li>🚽 Cisterna del inodoro: Mantiene el nivel constante</li>
            <li>🏛️ Acueductos romanos: Utilizaban este principio para transportar agua</li>
          </ul>
        </Example>
      </TheorySection>

      <TheorySection title="Principio de Pascal">
        <p>
          El Principio de Pascal establece que la presión aplicada a un líquido encerrado se transmite sin disminución a todos los puntos del líquido y a las paredes del recipiente. Esta propiedad es fundamental para muchas aplicaciones tecnológicas.
        </p>

        <Important>
          <p>💡 En palabras simples: Si aprietas un líquido en un punto, la presión se transmite a todo el líquido por igual.</p>
        </Important>

        <Concept title="La Prensa Hidráulica">
          <p>
            La prensa hidráulica es una aplicación directa del Principio de Pascal. Permite multiplicar fuerzas usando líquidos incompresibles.
          </p>
          
          <p>¿Cómo funciona?</p>
          <ol>
            <li>Aplicas una fuerza pequeña en un émbolo pequeño (área A₁)</li>
            <li>Esto crea una presión en el líquido: P = F₁/A₁</li>
            <li>Esta presión se transmite uniformemente a un émbolo grande (área A₂)</li>
            <li>La fuerza resultante es: F₂ = P × A₂</li>
          </ol>

          <Formula
            expression="\frac{F_1}{A_1} = \frac{F_2}{A_2}"
            description="Principio de Pascal aplicado a prensa hidráulica: la presión es igual en ambos émbolos"
            calculatorId="prensa-hidraulica"
            definitions={definitions}
            exercises={ejercicios}
          />
        </Concept>

        <Example title="Elevador de coches (gato hidráulico)">
          <p>
            Un mecánico aplica 100 N en un émbolo de 2 cm² de área. El émbolo grande tiene 200 cm² (100 veces mayor).
          </p>
          <p>
            Fuerza resultante: F₂ = 100 N × (200/2) = 10,000 N = 1 tonelada
          </p>
          <p>
            ¡Con 100 N de fuerza puede levantar un coche de 1 tonelada!
          </p>
        </Example>

        <Important>
          <p>⚠️ Ley de conservación de energía:</p>
          <p>
            Aunque se multiplica la fuerza, no se "crea" energía. Si el émbolo pequeño baja 10 cm, el grande sube solo 0.1 cm. El trabajo (F × d) es el mismo en ambos lados. La ventaja mecánica en fuerza se compensa con la desventaja en distancia.
          </p>
        </Important>
      </TheorySection>

      <TheorySection title="Aplicaciones en la Vida Cotidiana">
        <Concept title="🚗 Frenos Hidráulicos del Coche">
          <p>
            Cuando pisas el pedal del freno, aplicas presión a un líquido (líquido de frenos) que transmite esa presión instantáneamente a las cuatro ruedas, multiplicando tu fuerza para detener el coche de manera uniforme y segura.
          </p>
        </Concept>

        <Concept title="💉 Jeringuillas e Inyecciones">
          <p>
            Al empujar el émbolo de una jeringuilla, creas presión en el líquido que se transmite uniformemente, expulsando el contenido de manera controlada. La presión es la misma en todo el líquido, garantizando una inyección uniforme.
          </p>
        </Concept>

        <Concept title="🏗️ Excavadoras y Maquinaria Pesada">
          <p>
            Los brazos de las excavadoras usan cilindros hidráulicos. Un motor pequeño puede mover brazos enormes gracias al principio de Pascal, permitiendo levantar cargas de varias toneladas con precisión.
          </p>
        </Concept>

        <Concept title="✈️ Controles de Aviones">
          <p>
            Los alerones y timones de los aviones se controlan mediante sistemas hidráulicos que amplifican la fuerza del piloto. Esto permite mover superficies de control grandes con esfuerzo mínimo, incluso a altas velocidades.
          </p>
        </Concept>

        <Concept title="🎢 Atracciones de Feria">
          <p>
            Muchas atracciones usan sistemas hidráulicos para elevar las cabinas o mover plataformas pesadas de forma segura y controlada. La precisión del control hidráulico garantiza movimientos suaves y seguros.
          </p>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2><span>🔧</span> Aplicaciones Tecnológicas de la Presión en Líquidos</h2>
        
        <h4>Sistemas de Dirección Asistida</h4>
        <p>
          Los vehículos modernos utilizan sistemas hidráulicos para asistir la dirección. Una bomba hidráulica multiplica la fuerza aplicada al volante, permitiendo girar las ruedas con facilidad incluso cuando el vehículo está detenido.
        </p>

        <h4>Prensas Industriales</h4>
        <p>
          Las prensas hidráulicas industriales pueden generar fuerzas de miles de toneladas para conformar metales, comprimir materiales o fabricar piezas. Son esenciales en la industria automotriz, aeroespacial y de construcción.
        </p>

        <h4>Sistemas de Suspensión</h4>
        <p>
          Algunos vehículos de lujo utilizan suspensión hidráulica que ajusta automáticamente la altura y rigidez según las condiciones de la carretera. Los sistemas hidráulicos permiten cambios rápidos y precisos en la suspensión.
        </p>

        <h4>Plataformas Elevadoras</h4>
        <p>
          Las plataformas elevadoras de tijera utilizan cilindros hidráulicos para levantar cargas pesadas a diferentes alturas. Son fundamentales en almacenes, construcción y mantenimiento de edificios.
        </p>

        <h4>Turbinas Hidroeléctricas</h4>
        <p>
          Las centrales hidroeléctricas aprovechan la presión del agua almacenada en embalses. La presión hidrostática del agua a gran profundidad se convierte en energía cinética que mueve las turbinas generadoras de electricidad.
        </p>

        <h4>Sistemas de Frenado ABS</h4>
        <p>
          Los sistemas antibloqueo de frenos (ABS) modulan rápidamente la presión hidráulica en cada rueda para evitar el bloqueo durante frenadas de emergencia. Esto mantiene el control direccional del vehículo.
        </p>
      </div>

      <div className="theory-history-section">
        <h2><span>📜</span> Historia de la Presión Hidráulica</h2>
        <p>
          El estudio de la presión en líquidos tiene raíces antiguas. Arquímedes (287-212 a.C.) fue pionero en el estudio de fluidos, aunque el concepto de presión hidrostática no se formalizó hasta mucho después.
        </p>
        <p>
          Blaise Pascal (1623-1662) realizó experimentos fundamentales sobre la presión en líquidos. En 1648, demostró que la presión atmosférica disminuye con la altitud mediante experimentos en el Puy de Dôme. Su trabajo sobre la transmisión de presión en fluidos confinados llevó al principio que lleva su nombre.
        </p>
        <p>
          Joseph Bramah patentó la primera prensa hidráulica práctica en 1795, revolucionando la industria. Su invención permitió generar fuerzas enormes de manera controlada, abriendo nuevas posibilidades en manufactura y construcción.
        </p>
        <p>
          En el siglo XIX, William Armstrong desarrolló la grúa hidráulica, utilizando agua a presión para levantar cargas pesadas en puertos. Este sistema se expandió a elevadores hidráulicos en edificios y sistemas de alcantarillado en ciudades.
        </p>
        <p>
          El siglo XX vio la aplicación masiva de sistemas hidráulicos en vehículos. Los frenos hidráulicos, inventados por Malcolm Loughead en 1918, se convirtieron en estándar en la industria automotriz, mejorando dramáticamente la seguridad vial.
        </p>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span>💡</span> Curiosidades sobre Presión en Líquidos</h2>
        <p>
          En la Fosa de las Marianas (11,000 m de profundidad), la presión es de aproximadamente 1,100 atmósferas, equivalente a tener 50 aviones jumbo apilados sobre cada metro cuadrado. Solo vehículos especialmente diseñados pueden soportar estas presiones extremas.
        </p>
        <p>
          Los submarinos militares modernos pueden sumergirse hasta 300-500 metros. Más profundo, el casco de acero se deformaría por la presión. Los submarinos de investigación como el Alvin pueden llegar a 4,500 metros usando esferas de titanio.
        </p>
        <p>
          El récord de buceo libre (sin equipo) es de 214 metros, alcanzado por Herbert Nitsch en 2007. A esa profundidad, la presión es de aproximadamente 22 atmósferas. Los buceadores libres entrenan durante años para adaptar su cuerpo a estas presiones extremas.
        </p>
        <p>
          Las presas hidroeléctricas más altas del mundo, como la presa de Jinping I en China (305 m), deben soportar presiones hidrostáticas enormes en su base. El hormigón en la base debe resistir más de 30 atmósferas de presión constante.
        </p>
        <p>
          Los pulpos y otros cefalópodos pueden cambiar de forma gracias a un sistema hidrostático interno. Bombean agua a diferentes partes de su cuerpo para moverse, cambiar de forma y escapar de depredadores, demostrando la versatilidad de los sistemas hidráulicos en la naturaleza.
        </p>
        <p>
          El Titanic se hundió a 3,800 metros de profundidad donde la presión es de 380 atmósferas. Esta presión extrema ha preservado muchos artefactos pero también ha colapsado estructuras del barco. Los restos están siendo gradualmente consumidos por bacterias adaptadas a alta presión.
        </p>
      </div>

      <div className="formula-card">
        <h3>Resumen: Presión en Líquidos</h3>
        <p>
          La presión en líquidos aumenta linealmente con la profundidad debido al peso de la columna de líquido. La presión hidrostática se suma a la presión atmosférica para dar la presión total en cualquier punto del líquido.
        </p>
        <p>
          El Principio de Pascal establece que la presión aplicada a un líquido confinado se transmite uniformemente en todas las direcciones. Este principio es la base de las prensas hidráulicas, que permiten multiplicar fuerzas de manera controlada y eficiente.
        </p>
        <p>
          Las aplicaciones de la presión hidráulica son fundamentales en la tecnología moderna, desde frenos de automóviles hasta maquinaria pesada y sistemas de control de aviones. Los vasos comunicantes demuestran que los líquidos buscan el mismo nivel, principio utilizado en fontanería y nivelación.
        </p>
      </div>

      <ExercisesSection topicId="presion_liquidos" />
    </>
  );
};

export default Theory;
