import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Número de Mach",
  descripcion: "Relación entre velocidad del flujo y velocidad del sonido",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción al Número de Mach">
        <p>
          El número de Mach es un parámetro adimensional fundamental en la mecánica de fluidos 
          compresibles que relaciona la velocidad de un flujo con la velocidad del sonido en ese 
          medio. Nombrado en honor al físico austriaco Ernst Mach, este número es crucial para 
          caracterizar el comportamiento de flujos de alta velocidad.
        </p>
        <p>
          El número de Mach determina si los efectos de compresibilidad son significativos y qué 
          tipo de fenómenos físicos ocurrirán en el flujo. Es el parámetro más importante para 
          clasificar regímenes de flujo compresible y diseñar vehículos de alta velocidad.
        </p>
      </TheorySection>

      <TheorySection title="Definición y Cálculo">
        <Concept title="Definición del Número de Mach">
          <p>
            El número de Mach es un parámetro adimensional que relaciona la velocidad 
            de un flujo con la velocidad del sonido en ese medio.
          </p>

          <Formula
            expression={String.raw`M = \frac{V}{a}`}
            calculatorId="numero-mach"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Velocidad (V = Ma)", expression: String.raw`V = Ma` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>M: Número de Mach (adimensional)</li>
            <li>V: Velocidad del flujo (m/s)</li>
            <li>a: Velocidad del sonido en el medio (m/s)</li>
          </ul>

          <Example>
            <p>
              Un avión que vuela a 850 km/h (236 m/s) en aire donde la velocidad del sonido es 
              340 m/s tiene un número de Mach de M = 236/340 = 0.694 (subsónico).
            </p>
          </Example>
        </Concept>

        <Concept title="Interpretación Física">
          <p>
            El número de Mach representa la relación entre dos velocidades características:
          </p>
          <ul>
            <li>M {'<'} 1: El flujo es más lento que las ondas de presión (subsónico)</li>
            <li>M = 1: El flujo viaja a la misma velocidad que las ondas de presión (sónico)</li>
            <li>M {'>'} 1: El flujo es más rápido que las ondas de presión (supersónico)</li>
          </ul>

          <Important>
            <p>
              Cuando M {'>'} 1, las ondas de presión no pueden propagarse aguas arriba, lo que 
              genera fenómenos únicos como ondas de choque y comportamiento discontinuo del flujo.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Regímenes de Flujo">
        <Concept title="Clasificación por Número de Mach">
          <p>
            El número de Mach permite clasificar el flujo en diferentes regímenes, cada uno con 
            características físicas distintas:
          </p>

          <p>Incompresible (M {'<'} 0.3):</p>
          <ul>
            <li>Efectos de compresibilidad despreciables (cambios de densidad {'<'} 5%)</li>
            <li>Se pueden usar ecuaciones de flujo incompresible</li>
            <li>Típico en aviación de baja velocidad, ventiladores, bombas</li>
          </ul>

          <p>Subsónico compresible (0.3 ≤ M {'<'} 0.8):</p>
          <ul>
            <li>Efectos de compresibilidad significativos pero flujo subsónico</li>
            <li>Requiere correcciones de compresibilidad</li>
            <li>Aviación comercial de crucero (Boeing 737: M = 0.78)</li>
          </ul>

          <p>Transónico (0.8 ≤ M {'<'} 1.2):</p>
          <ul>
            <li>Mezcla de regiones subsónicas y supersónicas</li>
            <li>Aparecen ondas de choque locales</li>
            <li>Aumento dramático de resistencia ("barrera del sonido")</li>
            <li>Régimen más complejo de analizar</li>
          </ul>

          <p>Supersónico (1.2 ≤ M {'<'} 5):</p>
          <ul>
            <li>Todo el flujo es supersónico</li>
            <li>Ondas de choque y expansión bien definidas</li>
            <li>Aviones militares, Concorde (M = 2.04)</li>
          </ul>

          <p>Hipersónico (M ≥ 5):</p>
          <ul>
            <li>Efectos térmicos extremos</li>
            <li>Disociación molecular, ionización</li>
            <li>Reentrada atmosférica, misiles balísticos</li>
          </ul>

          <Important>
            <p>
              Los efectos de compresibilidad se vuelven significativos cuando M {'>'} 0.3. Por 
              debajo de este valor, el flujo puede tratarse como incompresible con error menor al 5%.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Velocidad del Sonido">
        <Concept title="En Gases Ideales">
          <p>
            La velocidad del sonido en un gas ideal depende de la temperatura y las propiedades 
            del gas:
          </p>

          <Formula
            expression={String.raw`a = \sqrt{\gamma RT}`}
            calculatorId="velocidad-sonido"
            definitions={definitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>a: Velocidad del sonido (m/s)</li>
            <li>γ: Coeficiente adiabático (γ = cp/cv = 1.4 para aire)</li>
            <li>R: Constante específica del gas (287 J/kg·K para aire)</li>
            <li>T: Temperatura absoluta (K)</li>
          </ul>

          <p>Valores típicos en aire:</p>
          <ul>
            <li>A -40°C (233 K): 306 m/s (altitud de crucero)</li>
            <li>A 0°C (273 K): 331 m/s</li>
            <li>A 15°C (288 K): 340 m/s (nivel del mar estándar)</li>
            <li>A 20°C (293 K): 343 m/s</li>
            <li>A 100°C (373 K): 387 m/s</li>
          </ul>

          <Example>
            <p>
              A la altitud de crucero de un avión comercial (11,000 m), la temperatura es 
              aproximadamente -56°C (217 K). La velocidad del sonido es a = √(1.4 × 287 × 217) 
              = 295 m/s, significativamente menor que al nivel del mar.
            </p>
          </Example>
        </Concept>

        <Concept title="Dependencia de la Temperatura">
          <p>
            La velocidad del sonido es proporcional a la raíz cuadrada de la temperatura absoluta. 
            Esto tiene implicaciones importantes:
          </p>
          <ul>
            <li>A mayor altitud (menor temperatura), menor velocidad del sonido</li>
            <li>Un avión a velocidad constante tiene mayor número de Mach a mayor altitud</li>
            <li>El calentamiento aerodinámico aumenta localmente la velocidad del sonido</li>
          </ul>

          <p>
            Relación simplificada para aire: a ≈ 20.05√T (m/s, con T en K)
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones del Número de Mach">
        <Concept title="Diseño Aeronáutico">
          <p>
            El número de Mach de diseño determina completamente la forma y características de 
            una aeronave:
          </p>
          <ul>
            <li>Aviones subsónicos (M {'<'} 0.8): Alas rectas, perfiles gruesos</li>
            <li>Aviones transónicos (M ≈ 0.8-0.9): Alas en flecha, perfiles supercríticos</li>
            <li>Aviones supersónicos (M {'>'} 1.2): Alas delta, perfiles delgados, nariz puntiaguda</li>
          </ul>
        </Concept>

        <Concept title="Correcciones de Compresibilidad">
          <p>
            Para flujo subsónico compresible (0.3 {'<'} M {'<'} 0.8), se aplican correcciones 
            a los resultados de teoría incompresible:
          </p>

          <Formula
            expression={String.raw`C_{L,compresible} = \frac{C_{L,incompresible}}{\sqrt{1-M^2}}`}
          />

          <p>
            Esta corrección de Prandtl-Glauert muestra que los coeficientes aerodinámicos aumentan 
            con el número de Mach, especialmente cerca de M = 1.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Número de Mach Local vs Global">
        <Concept title="Variación Local">
          <p>
            El número de Mach puede variar localmente alrededor de un cuerpo. En un perfil alar 
            subsónico, el flujo acelera sobre la superficie superior, alcanzando números de Mach 
            locales mayores que el Mach de vuelo.
          </p>

          <Important>
            <p>
              Un avión volando a M = 0.85 (subsónico) puede tener regiones supersónicas locales 
              (M {'>'} 1) sobre el ala. Esto genera ondas de choque locales y es el origen de la 
              resistencia transónica.
            </p>
          </Important>
        </Concept>

        <Concept title="Número de Mach Crítico">
          <p>
            El número de Mach crítico (Mcr) es el Mach de vuelo al cual aparece por primera vez 
            M = 1 localmente sobre el cuerpo. Para perfiles alares típicos: Mcr ≈ 0.7-0.85.
          </p>
          <p>
            Por encima de Mcr, aparecen ondas de choque locales que aumentan dramáticamente la 
            resistencia. El diseño transónico busca maximizar Mcr.
          </p>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>

        <div className="theory-subsection">
          <h3>Aviación Comercial</h3>
          <p>
            Los aviones comerciales modernos cruzan típicamente a M = 0.78-0.85, optimizando 
            velocidad y eficiencia de combustible. El número de Mach de crucero es una especificación 
            fundamental del diseño.
          </p>
          <ul>
            <li>Boeing 737: M = 0.78-0.79 (crucero típico)</li>
            <li>Airbus A320: M = 0.78 (crucero económico)</li>
            <li>Boeing 787: M = 0.85 (crucero rápido)</li>
            <li>Airbus A380: M = 0.85 (crucero típico)</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Aviación Militar</h3>
          <p>
            Los aviones militares operan en un rango amplio de números de Mach, desde subsónico 
            bajo en combate cerrado hasta supersónico alto en interceptación.
          </p>
          <ul>
            <li>F-16: M = 2.0 (máximo), M = 0.9 (combate típico)</li>
            <li>F-22 Raptor: M = 1.8 sin postquemador (supercruise)</li>
            <li>MiG-31: M = 2.83 (interceptor de alta velocidad)</li>
            <li>SR-71 Blackbird: M = 3.3 (récord para aviones tripulados)</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Propulsión</h3>
          <p>
            El número de Mach determina el tipo de motor óptimo para una aeronave:
          </p>
          <ul>
            <li>M {'<'} 0.6: Motores de hélice (turbohélices)</li>
            <li>M = 0.6-0.9: Turbofanes de alto bypass</li>
            <li>M = 0.9-2.5: Turbofanes de bajo bypass, turbojets</li>
            <li>M = 2.5-5: Turbojets, ramjets</li>
            <li>M {'>'} 5: Scramjets, motores cohete</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Instrumentación de Vuelo</h3>
          <p>
            Los indicadores de Mach son instrumentos estándar en aviones de alta velocidad. Miden 
            la relación entre presión dinámica y presión estática para calcular el número de Mach.
          </p>
          <ul>
            <li>Machmeter: Instrumento dedicado que muestra M directamente</li>
            <li>Sistemas de datos de aire: Calculan M de presiones medidas</li>
            <li>Limitaciones de Mach: Alertas cuando se excede Mmax</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Túneles de Viento</h3>
          <p>
            Los túneles de viento se clasifican por su rango de números de Mach. Cada tipo requiere 
            diseño y tecnología específicos.
          </p>
          <ul>
            <li>Túneles subsónicos: M = 0-0.4</li>
            <li>Túneles transónicos: M = 0.8-1.2 (requieren paredes perforadas)</li>
            <li>Túneles supersónicos: M = 1.5-5 (requieren toberas variables)</li>
            <li>Túneles hipersónicos: M {'>'} 5 (requieren calentamiento del aire)</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Meteorología y Fenómenos Naturales</h3>
          <p>
            El número de Mach también se aplica a fenómenos naturales de alta velocidad:
          </p>
          <ul>
            <li>Tornados: Vientos hasta M ≈ 0.3 en el vórtice</li>
            <li>Huracanes: Vientos máximos M ≈ 0.2</li>
            <li>Erupciones volcánicas: Gases expulsados hasta M ≈ 1-2</li>
            <li>Meteoritos: Entrada atmosférica a M ≈ 20-70</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Deportes y Récords</h3>
          <p>
            Varios récords de velocidad se expresan en términos de número de Mach:
          </p>
          <ul>
            <li>Récord de velocidad terrestre: Thrust SSC alcanzó M = 1.02 (1228 km/h)</li>
            <li>Caída libre: Felix Baumgartner alcanzó M = 1.25 en su salto estratosférico</li>
            <li>Récord de velocidad en agua: Spirit of Australia alcanzó 511 km/h (M ≈ 0.42 en agua)</li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Ernst Mach y el número que lleva su nombre
        </h2>

        <div className="theory-subsection">
          <h3>Ernst Mach (1838-1916)</h3>
          <p>
            Ernst Mach fue un físico y filósofo austriaco que realizó contribuciones fundamentales 
            a la física experimental, especialmente en el estudio de ondas de choque y flujo 
            supersónico. Aunque el número de Mach lleva su nombre, él nunca lo definió formalmente.
          </p>
          <p>
            Mach fue pionero en la fotografía de alta velocidad, capturando las primeras imágenes 
            de ondas de choque generadas por proyectiles supersónicos en 1887. Estas fotografías 
            revelaron por primera vez la estructura de las ondas de choque.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Primeros Estudios de Flujo de Alta Velocidad</h3>
          <p>
            En el siglo XIX, los ingenieros de artillería notaron que los proyectiles experimentaban 
            un aumento dramático de resistencia al acercarse a la velocidad del sonido. Este fenómeno 
            no podía explicarse con la teoría de flujo incompresible.
          </p>
          <p>
            Los experimentos de Mach demostraron que este aumento de resistencia estaba relacionado 
            con la formación de ondas de choque cuando la velocidad del proyectil superaba la 
            velocidad del sonido.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Formalización del Número de Mach (1929)</h3>
          <p>
            El término "número de Mach" fue propuesto por el ingeniero suizo Jakob Ackeret en 1929, 
            13 años después de la muerte de Mach. Ackeret reconoció que la relación V/a era el 
            parámetro fundamental para caracterizar flujo compresible.
          </p>
          <p>
            Ackeret desarrolló la teoría de perfiles delgados en flujo supersónico, demostrando 
            que todas las características del flujo dependían principalmente del número de Mach.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Era de la Aviación Supersónica (1940s-1950s)</h3>
          <p>
            Durante la Segunda Guerra Mundial y la posguerra, el número de Mach se convirtió en 
            el parámetro central del diseño aeronáutico. La "barrera del sonido" (M = 1) era 
            considerada un límite fundamental.
          </p>
          <p>
            Chuck Yeager rompió la barrera del sonido en 1947, alcanzando M = 1.06. Este logro 
            demostró que M = 1 no era una barrera física sino un desafío de diseño.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Desarrollo de Instrumentación</h3>
          <p>
            Los primeros indicadores de Mach aparecieron en aviones militares en los años 1950. 
            Estos instrumentos mecánicos usaban cápsulas aneroide para medir la relación de presiones 
            y calcular el número de Mach.
          </p>
          <p>
            Los sistemas modernos de datos de aire calculan el número de Mach digitalmente usando 
            sensores de presión de alta precisión y correcciones por temperatura.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Récords de Velocidad</h3>
          <p>
            La carrera por alcanzar números de Mach cada vez mayores impulsó el desarrollo 
            aeronáutico durante décadas:
          </p>
          <ul>
            <li>1947: Bell X-1 alcanza M = 1.06 (primer vuelo supersónico)</li>
            <li>1953: Douglas Skyrocket alcanza M = 2.005</li>
            <li>1956: Bell X-2 alcanza M = 3.196</li>
            <li>1967: X-15 alcanza M = 6.72 (récord aún vigente para aviones tripulados)</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Aplicaciones Modernas</h3>
          <p>
            Hoy, el número de Mach es un parámetro estándar en aerodinámica, propulsión y diseño 
            de vehículos de alta velocidad. Se usa en simulaciones CFD, túneles de viento y 
            especificaciones de rendimiento de aeronaves.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>El Machmeter del Concorde</h3>
          <p>
            El Concorde tenía un machmeter prominente en el panel de instrumentos que mostraba 
            el número de Mach con dos decimales. Los pasajeros podían ver el indicador desde sus 
            asientos, mostrando típicamente M = 2.02-2.04 durante el crucero supersónico.
          </p>
          <p>
            Este era un punto de orgullo para los pasajeros, que podían ver en tiempo real que 
            viajaban al doble de la velocidad del sonido. El Concorde era el único avión comercial 
            donde los pasajeros podían experimentar vuelo supersónico sostenido.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Mach 0.99 vs Mach 1.01</h3>
          <p>
            La diferencia entre M = 0.99 y M = 1.01 parece mínima (solo 2% de velocidad), pero 
            las características del flujo son radicalmente diferentes. A M = 0.99, el flujo es 
            completamente subsónico. A M = 1.01, aparecen ondas de choque y el comportamiento 
            cambia completamente.
          </p>
          <p>
            Esta transición abrupta en M = 1 es la razón por la que se llamaba "barrera del sonido". 
            No es una barrera física sino una transición de régimen de flujo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Récord Imposible de Felix Baumgartner</h3>
          <p>
            En 2012, Felix Baumgartner saltó desde 39 km de altitud, alcanzando M = 1.25 en caída 
            libre (1358 km/h). Fue el primer humano en romper la barrera del sonido sin vehículo.
          </p>
          <p>
            A esa altitud, la velocidad del sonido es solo 295 m/s debido a la baja temperatura 
            (-56°C). Al nivel del mar, la misma velocidad de caída sería solo M = 1.1. El número 
            de Mach depende tanto de la velocidad como de las condiciones atmosféricas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Thrust SSC: El Auto Supersónico</h3>
          <p>
            En 1997, el Thrust SSC se convirtió en el primer vehículo terrestre en romper la 
            barrera del sonido, alcanzando M = 1.02 (1228 km/h). Usaba dos motores de turbofán 
            de avión Phantom F-4.
          </p>
          <p>
            El vehículo generó un boom sónico audible, confirmando que había superado M = 1. 
            Este récord demuestra que el número de Mach se aplica a cualquier objeto en movimiento, 
            no solo aeronaves.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Mach Número en el Agua</h3>
          <p>
            El concepto de número de Mach también se aplica en agua, aunque la velocidad del sonido 
            en agua es mucho mayor (≈1500 m/s vs 340 m/s en aire). Los torpedos supercavitantes 
            pueden alcanzar M ≈ 0.3 en agua (≈450 km/h).
          </p>
          <p>
            A estas velocidades, se forma una burbuja de vapor alrededor del torpedo (supercavitación), 
            reduciendo dramáticamente la resistencia. Es el equivalente acuático del vuelo supersónico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Misterio del Mach Crítico</h3>
          <p>
            Los primeros diseñadores de aviones a reacción descubrieron que la resistencia aumentaba 
            dramáticamente antes de alcanzar M = 1. Un avión podía experimentar problemas severos 
            a M = 0.85, mucho antes de la "barrera del sonido".
          </p>
          <p>
            El misterio se resolvió al comprender que el flujo sobre el ala alcanzaba M = 1 localmente 
            antes que el avión completo. Este número de Mach crítico (Mcr) se convirtió en un 
            parámetro clave de diseño transónico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Mach 10: El Límite de los Materiales</h3>
          <p>
            A M = 10, el calentamiento aerodinámico es tan extremo que la temperatura de estancamiento 
            alcanza 6000°C, suficiente para vaporizar cualquier material conocido. Los vehículos 
            hipersónicos deben usar enfriamiento activo o materiales ablativos.
          </p>
          <p>
            El X-43A de la NASA alcanzó M = 9.6 en 2004, el récord para vehículos con motor 
            respirador de aire. A esta velocidad, el aire delante del vehículo se ioniza parcialmente, 
            creando un plasma que interfiere con las comunicaciones por radio.
          </p>
        </div>
      </div>

      <div className="theory-section-highlight">
        <h2>📝 Resumen</h2>
        <p>
          El número de Mach (M = V/a) es un parámetro adimensional que relaciona la velocidad del 
          flujo con la velocidad del sonido. Es el parámetro fundamental para caracterizar flujo 
          compresible y determina qué fenómenos físicos ocurrirán.
        </p>
        <p>
          Los regímenes de flujo se clasifican por número de Mach: incompresible (M {'<'} 0.3), 
          subsónico compresible (0.3-0.8), transónico (0.8-1.2), supersónico (1.2-5) e hipersónico 
          (M {'>'} 5). Cada régimen tiene características físicas distintas y requiere enfoques de 
          diseño diferentes.
        </p>
        <p>
          La velocidad del sonido en gases ideales es a = √(γRT), dependiendo de la temperatura. 
          En aire a 15°C, a = 340 m/s. A mayor altitud (menor temperatura), la velocidad del sonido 
          disminuye, por lo que un avión a velocidad constante tiene mayor número de Mach a mayor 
          altitud.
        </p>
        <p>
          El número de Mach es fundamental en diseño aeronáutico, propulsión, instrumentación de 
          vuelo y túneles de viento. Determina la forma óptima de vehículos, el tipo de motor 
          apropiado y las características del flujo alrededor del cuerpo.
        </p>
      </div>
    </>
  );
};

export default Theory;
