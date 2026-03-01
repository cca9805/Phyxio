import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as estructurasDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Análisis de Estructuras",
  descripcion: "Armaduras, vigas, método de nodos y secciones, equilibrio estructural",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const EstructurasTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a las Estructuras">
        <p>
          Las estructuras son conjuntos de elementos diseñados para soportar cargas y transmitirlas de forma segura a los cimientos o apoyos. Su análisis es clave en ingeniería civil, mecánica y arquitectura para garantizar la estabilidad y seguridad.
        </p>
        <p>
          El análisis estructural permite determinar las fuerzas internas en cada elemento, verificar que no se excedan 
          los límites de resistencia de los materiales, y optimizar el diseño para usar la mínima cantidad de material 
          manteniendo la seguridad.
        </p>
        <Concept title="Tipos de Estructuras">
            <p>Vigas: Elementos horizontales que soportan cargas perpendiculares a su eje. Trabajan principalmente a flexión.</p>
            <p>Columnas: Elementos verticales que soportan cargas de compresión axial. Pueden fallar por pandeo si son esbeltas.</p>
            <p>Armaduras (Cerchas): Estructuras formadas por barras conectadas en nodos mediante pasadores, creando triángulos 
            para soportar cargas de manera eficiente. Cada barra trabaja solo a tracción o compresión pura.</p>
            <p>Marcos: Estructuras con conexiones rígidas entre elementos, capaces de resistir momentos flectores.</p>
            <Example>
              Los puentes de celosía son armaduras clásicas. La Torre Eiffel es una armadura tridimensional gigante. 
              Los edificios modernos usan marcos de hormigón o acero con conexiones rígidas.
            </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Análisis de Estructuras y Condiciones de Equilibrio">
        <Concept title="Condiciones de Equilibrio Estático">
          <p>
            Para que una estructura sea estable, debe estar en equilibrio estático. Esto significa que no debe moverse ni rotar. Las dos condiciones fundamentales para el equilibrio son:
          </p>
          <Important>
            <p>1. La suma de todas las fuerzas externas es cero.</p>
            <Formula 
              expression="\\sum \\vec{F} = 0" 
              isPrimary={false}
              calculatorId="estructuras-suma-fuerzas"
              definitions={estructurasDefinitions}
              exercises={exercises}
            />
            
            <p>Donde:</p>
            <ul>
              <li>ΣF: Suma vectorial de todas las fuerzas (N)</li>
            </ul>
            
            <p>2. La suma de todos los momentos (o torques) respecto a cualquier punto es cero.</p>
            <Formula 
              expression="\\sum \\vec{M} = 0" 
              isPrimary={false}
              calculatorId="estructuras-suma-momentos"
              definitions={estructurasDefinitions}
              exercises={exercises}
            />
            
            <p>Donde:</p>
            <ul>
              <li>ΣM: Suma de todos los momentos (N·m)</li>
            </ul>
            
            <Example>
              Un puente simplemente apoyado con una carga en el centro debe cumplir: suma de fuerzas verticales = 0 
              (las reacciones en los apoyos equilibran la carga) y suma de momentos = 0 (los momentos de las reacciones 
              equilibran el momento de la carga).
            </Example>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="El Método de los Nodos">
        <p>
          El Método de los Nodos es una técnica fundamental para analizar armaduras. Se basa en aplicar la primera condición de equilibrio (la suma de fuerzas es cero) a cada uno de los nodos (uniones) de la estructura.
        </p>
        <Concept title="Principio del Método">
          <p>Si la estructura completa está en equilibrio, cada uno de sus nodos también debe estarlo. En un nodo, las fuerzas de las barras que concurren en él, junto con cualquier fuerza externa aplicada, deben anularse mutuamente.</p>
          <p>Esto se resume en una idea clave: la suma de todas las fuerzas en un nodo es cero. Por lo tanto, si conocemos algunas de las fuerzas que actúan sobre el nodo, podemos calcular las desconocidas.</p>
          <Formula
            expression="\\sum \\vec{F}_{nodo} = 0"
            calculatorId="equilibrio-nodo"
            definitions={estructurasDefinitions}
            exercises={exercises}
            complementary={[
                { description: "Calcular Fuerza Equilibrante", expression: "E = -R" },
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>ΣF_nodo: Suma de todas las fuerzas en el nodo (N)</li>
            <li>E: Fuerza equilibrante (N)</li>
            <li>R: Fuerza resultante (N)</li>
          </ul>
          
          <p>La fuerza equilibrante es la fuerza que se necesita para que el nodo quede en equilibrio. Es igual en magnitud y opuesta en dirección a la fuerza resultante de todas las demás fuerzas que actúan sobre el nodo.</p>
          
          <Example>
            En una armadura triangular simple, si en un nodo concurren dos barras y una carga externa de 1000 N hacia abajo, 
            las fuerzas en las barras deben sumar 1000 N hacia arriba para equilibrar. Usando trigonometría y las ecuaciones 
            ΣFx = 0 y ΣFy = 0, se calculan las fuerzas en cada barra.
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Método de las Secciones">
        <Concept title="Análisis por Corte">
          <p>
            El Método de las Secciones es complementario al método de nodos. Consiste en "cortar" la armadura 
            por una sección imaginaria que atraviese las barras cuyas fuerzas queremos calcular, y aplicar 
            equilibrio a una de las partes resultantes.
          </p>
          <p>
            Este método es especialmente útil cuando solo necesitamos conocer las fuerzas en algunas barras 
            específicas, sin tener que analizar toda la estructura nodo por nodo.
          </p>
          <Important>
            <p>
              La sección debe cortar máximo 3 barras cuyas fuerzas sean desconocidas, para poder resolver 
              el sistema con las 3 ecuaciones de equilibrio disponibles (ΣFx = 0, ΣFy = 0, ΣM = 0).
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Tipos de Fuerzas en Elementos Estructurales">
        <Concept title="Tracción y Compresión">
          <p>
            En armaduras ideales (con conexiones de pasador), cada barra trabaja solo a tracción o compresión axial:
          </p>
          <ul>
            <li>Tracción: La barra se estira. Las fuerzas internas "jalan" hacia afuera en los extremos.</li>
            <li>Compresión: La barra se acorta. Las fuerzas internas "empujan" hacia adentro en los extremos.</li>
          </ul>
          <p>
            Las barras a compresión pueden fallar por pandeo (doblarse lateralmente) si son esbeltas, 
            incluso antes de alcanzar la resistencia del material.
          </p>
        </Concept>

        <Concept title="Flexión y Cortante">
          <p>
            En vigas y marcos con conexiones rígidas, además de fuerzas axiales, aparecen:
          </p>
          <ul>
            <li>Momento flector: Hace que la viga se curve. Genera tensiones de tracción en una cara y compresión en la otra.</li>
            <li>Fuerza cortante: Tiende a "cortar" la viga transversalmente. Genera tensiones de corte.</li>
          </ul>
          <Example>
            Una viga simplemente apoyada con carga en el centro tiene momento flector máximo en el centro 
            (donde se curva más) y cortante máximo en los apoyos (donde cambia bruscamente la pendiente).
          </Example>
        </Concept>
      </TheorySection>

      <h2><span>🏗️</span> Aplicaciones Prácticas</h2>
      <div className="theory-applications-section">
        <div className="theory-subsection">
          <h3>🌉 Puentes de Celosía</h3>
          <p>
            Los puentes de celosía (armaduras) son estructuras eficientes que usan barras trianguladas. 
            El puente de Quebec (549 m de vano) es una celosía cantilever. El puente Golden Gate usa cables 
            (elementos a tracción pura) y torres (compresión). El análisis de nodos permite calcular la fuerza 
            en cada elemento y dimensionarlo adecuadamente.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏢 Rascacielos y Edificios Altos</h3>
          <p>
            Los rascacielos modernos usan marcos de acero o hormigón con conexiones rígidas. El Burj Khalifa 
            (828 m) tiene un núcleo central de hormigón que resiste momentos flectores del viento. Las columnas 
            perimetrales trabajan a compresión. El análisis estructural determina el tamaño de cada elemento 
            para resistir cargas gravitatorias y laterales (viento, sismo).
          </p>
        </div>
        <div className="theory-subsection">
          <h3>✈️ Estructuras Aeronáuticas</h3>
          <p>
            Las alas de aviones son vigas en voladizo que soportan flexión. El fuselaje es una estructura 
            tipo marco que resiste presurización y cargas aerodinámicas. Los aviones comerciales tienen 
            factores de seguridad de 1.5 (deben soportar 1.5 veces la carga máxima esperada). El análisis 
            estructural es crítico para seguridad y eficiencia.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏗️ Torres de Transmisión Eléctrica</h3>
          <p>
            Las torres de alta tensión son armaduras tridimensionales que soportan cables pesados y fuerzas 
            de viento. Pueden tener alturas de 100+ metros. El método de nodos permite calcular las fuerzas 
            en cada barra. Las barras a compresión son más gruesas para evitar pandeo.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏟️ Estadios y Techos de Gran Luz</h3>
          <p>
            Los estadios modernos tienen techos que cubren vanos de 200+ metros sin columnas intermedias. 
            Usan armaduras espaciales (tridimensionales) o estructuras tensadas (cables). El estadio Olímpico 
            de Múnich (1972) usa una cubierta de cables tensados. El análisis estructural optimiza el uso 
            de material manteniendo seguridad.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🚂 Grúas y Maquinaria Pesada</h3>
          <p>
            Las grúas torre son armaduras verticales que soportan cargas asimétricas. El brazo horizontal 
            (pluma) es una viga en voladizo con contrapeso. Las grúas pueden levantar 20+ toneladas a 80+ metros 
            de altura. El análisis estructural garantiza que no vuelquen ni colapsen bajo carga máxima.
          </p>
        </div>
      </div>

      <h2><span>📜</span> Historia y Desarrollo</h2>
      <div className="theory-history-section">
        <div className="theory-subsection">
          <h3>🏛️ Antigüedad: Estructuras Empíricas (3000 a.C. - 500 d.C.)</h3>
          <p>
            Las pirámides egipcias, el Partenón griego y los acueductos romanos se construyeron sin teoría 
            formal de estructuras. Los romanos desarrollaron el arco y la bóveda, que distribuyen cargas 
            eficientemente mediante compresión. El Panteón de Roma (126 d.C.) tiene una cúpula de 43 m que 
            permanece intacta 1900 años después.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔬 Renacimiento: Primeros Análisis (1500-1700)</h3>
          <p>
            Leonardo da Vinci (1452-1519) estudió la resistencia de vigas y cables. Galileo Galilei (1564-1642) 
            analizó la resistencia de vigas en voladizo, estableciendo las bases de la mecánica de materiales. 
            Robert Hooke (1635-1703) formuló la ley de elasticidad que lleva su nombre.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>⚖️ Era Clásica: Teoría Estructural (1700-1850)</h3>
          <p>
            Leonhard Euler (1707-1783) desarrolló la teoría de pandeo de columnas. Charles-Augustin de Coulomb 
            (1736-1806) estudió la resistencia de materiales. Claude-Louis Navier (1785-1836) estableció las 
            ecuaciones fundamentales de la teoría de vigas. Estos avances permitieron diseñar estructuras 
            basándose en cálculos en lugar de solo experiencia.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏗️ Revolución Industrial: Estructuras Metálicas (1850-1950)</h3>
          <p>
            La producción masiva de hierro y acero revolucionó la construcción. El puente de Brooklyn (1883) 
            fue el primer puente colgante de gran vano. La Torre Eiffel (1889) demostró el potencial de las 
            estructuras metálicas. Se desarrollaron métodos sistemáticos de análisis estructural (método de nodos, 
            método de secciones, líneas de influencia).
          </p>
        </div>
        <div className="theory-subsection">
          <h3>💻 Era Moderna: Análisis Computacional (1950-presente)</h3>
          <p>
            El método de elementos finitos (FEM), desarrollado en los 1950-1960, revolucionó el análisis estructural. 
            Software como SAP2000, ETABS y ANSYS permite analizar estructuras extremadamente complejas. 
            Los rascacielos modernos, puentes de gran vano y estructuras espaciales serían imposibles sin 
            análisis computacional. La optimización topológica permite diseñar estructuras con mínimo peso.
          </p>
        </div>
      </div>

      <h2><span>🎯</span> Anécdotas y Curiosidades</h2>
      <div className="theory-anecdotes-section">
        <div className="theory-subsection">
          <h3>🌉 El Colapso del Puente de Quebec (1907)</h3>
          <p>
            Durante su construcción, el puente de Quebec colapsó matando a 75 trabajadores. La causa fue un 
            error de cálculo en las fuerzas de compresión de las barras inferiores, que pandearon. Este desastre 
            llevó a regulaciones más estrictas en ingeniería estructural y la creación de colegios profesionales 
            de ingenieros en Canadá.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🗼 La Torre Eiffel: Récord de Eficiencia</h3>
          <p>
            La Torre Eiffel (324 m, 10,100 toneladas) tiene una presión en la base de solo 4.5 kg/cm², 
            menor que una persona sentada. Gustave Eiffel optimizó cada elemento usando análisis estructural. 
            La torre puede oscilar hasta 15 cm en vientos fuertes. Fue la estructura más alta del mundo durante 
            41 años (1889-1930).
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏗️ El Edificio más Alto: Burj Khalifa</h3>
          <p>
            El Burj Khalifa (828 m) usa 330,000 m³ de hormigón y 39,000 toneladas de acero. Su núcleo central 
            resiste momentos flectores del viento de hasta 11,000 toneladas-metro. Puede oscilar 2 metros en 
            su cúspide. El análisis estructural requirió simulaciones de elementos finitos con millones de nodos. 
            Tiene 192 pilotes de 1.5 m de diámetro enterrados 50 m en el suelo.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🌉 El Puente más Largo: Danyang-Kunshan</h3>
          <p>
            El viaducto Danyang-Kunshan en China mide 164.8 km, el puente más largo del mundo. Usa 450,000 toneladas 
            de acero y 2.5 millones de m³ de hormigón. Tardó 4 años en construirse con 10,000 trabajadores. 
            El análisis estructural consideró terremotos, tifones y asentamientos diferenciales del suelo.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏟️ El Techo más Grande sin Columnas</h3>
          <p>
            El estadio de los Cowboys de Dallas tiene un techo retráctil que cubre 29,000 m² sin columnas intermedias. 
            Usa vigas de acero de 180 m de largo que pesan 3,200 toneladas cada una. El análisis estructural 
            consideró cargas de viento, nieve y el peso propio de las pantallas gigantes suspendidas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🚀 La Estructura más Alta: Torre KVLY</h3>
          <p>
            La torre de transmisión KVLY en Dakota del Norte mide 628 m (más alta que el CN Tower). Es una 
            armadura de acero con cables tensores. Pesa solo 864 toneladas gracias al diseño optimizado. 
            Puede oscilar hasta 1.5 m en vientos fuertes. El análisis estructural consideró cargas de hielo 
            de hasta 25 mm de espesor en los cables.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          Las estructuras son conjuntos de elementos diseñados para soportar cargas y transmitirlas a los apoyos. 
          El análisis estructural se basa en dos condiciones de equilibrio: suma de fuerzas igual a cero y 
          suma de momentos igual a cero. Estas condiciones se aplican a la estructura completa y a cada elemento.
        </p>
        <p>
          El Método de los Nodos analiza armaduras aplicando equilibrio a cada nodo. El Método de las Secciones 
          corta la estructura y analiza una parte. Las armaduras trabajan con barras a tracción o compresión pura. 
          Las vigas y marcos también experimentan flexión y cortante.
        </p>
        <p>
          Desde las construcciones empíricas antiguas hasta los rascacielos modernos, el análisis estructural 
          ha evolucionado de métodos manuales a simulaciones computacionales complejas. El desarrollo de la 
          teoría estructural y los materiales modernos (acero, hormigón armado) ha permitido construir estructuras 
          cada vez más audaces, eficientes y seguras.
        </p>
      </div>
    </>
  );
};

export default EstructurasTheory;
