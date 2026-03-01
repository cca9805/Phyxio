import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Ondas de Choque",
  descripcion: "Discontinuidades en flujo supersónico",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a las Ondas de Choque">
        <p>
          Las ondas de choque son uno de los fenómenos más dramáticos y característicos del flujo 
          supersónico. Representan discontinuidades abruptas en las propiedades del flujo donde 
          la presión, temperatura y densidad cambian de forma casi instantánea en distancias del 
          orden de nanómetros.
        </p>
        <p>
          Estas ondas son fundamentales en aerodinámica supersónica, propulsión de cohetes, 
          explosiones y muchos otros fenómenos de alta velocidad. Comprender las ondas de choque 
          es esencial para el diseño de vehículos supersónicos e hipersónicos.
        </p>
      </TheorySection>

      <TheorySection title="Naturaleza de las Ondas de Choque">
        <Concept title="Definición y Características">
          <p>
            Una onda de choque es una discontinuidad abrupta en las propiedades del flujo que 
            ocurre cuando un flujo supersónico se desacelera o encuentra un obstáculo. A través 
            de una onda de choque:
          </p>
          <ul>
            <li>La presión aumenta dramáticamente (puede multiplicarse por 10 o más)</li>
            <li>La temperatura aumenta significativamente</li>
            <li>La densidad aumenta</li>
            <li>La velocidad disminuye (pero puede seguir siendo supersónica)</li>
            <li>El número de Mach disminuye</li>
            <li>La entropía aumenta (proceso irreversible)</li>
          </ul>

          <Important>
            Las ondas de choque son procesos irreversibles que generan pérdidas de energía. 
            El flujo pierde presión total al atravesar un choque, lo que reduce la eficiencia 
            de sistemas supersónicos.
          </Important>
        </Concept>

        <Concept title="Espesor de la Onda de Choque">
          <p>
            Aunque las ondas de choque se modelan como discontinuidades matemáticas, en realidad 
            tienen un espesor finito del orden de algunos caminos libres medios moleculares 
            (típicamente 10⁻⁷ m en aire a presión atmosférica).
          </p>
          <p>
            Este espesor es tan pequeño comparado con dimensiones típicas de ingeniería que es 
            válido tratarlas como discontinuidades. Sin embargo, a presiones muy bajas (grandes 
            altitudes) o escalas muy pequeñas (microfluídica), el espesor puede ser significativo.
          </p>
        </Concept>

        <Concept title="Condición de Existencia">
          <p>
            Las ondas de choque solo pueden existir en flujo supersónico (M {'>'} 1). En flujo 
            subsónico, las perturbaciones se propagan aguas arriba y el flujo se ajusta 
            gradualmente sin formar discontinuidades.
          </p>
          <p>
            En flujo supersónico, las perturbaciones no pueden propagarse aguas arriba (viajan 
            más lento que el flujo), por lo que el flujo no puede "anticipar" el obstáculo y 
            debe ajustarse abruptamente mediante una onda de choque.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Choque Normal">
        <Concept title="Geometría y Características">
          <p>
            Un choque normal es una onda de choque perpendicular a la dirección del flujo. Es 
            el tipo más simple de onda de choque y ocurre en:
          </p>
          <ul>
            <li>Entrada de motores supersónicos</li>
            <li>Delante de cuerpos romos en flujo supersónico</li>
            <li>Túneles de viento supersónicos</li>
            <li>Toberas convergentes-divergentes (si están mal diseñadas)</li>
          </ul>
        </Concept>

        <Concept title="Relaciones de Choque Normal">
          <p>
            Las propiedades del flujo después del choque se relacionan con las propiedades antes 
            del choque mediante las ecuaciones de Rankine-Hugoniot:
          </p>

          <p>Relación de presión:</p>
          <Formula
            expression={String.raw`\frac{P_2}{P_1} = 1 + \frac{2\gamma}{\gamma+1}(M_1^2 - 1)`}
            calculatorId="ondas-choque"
            definitions={definitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>P₂/P₁: Relación de presión estática</li>
            <li>M₁: Número de Mach antes del choque</li>
            <li>γ: Coeficiente adiabático (1.4 para aire)</li>
          </ul>

          <Example>
            <p>
              Para un flujo de aire a M₁ = 2.0, la presión aumenta P₂/P₁ = 1 + (2×1.4/2.4)×(4-1) 
              = 4.5 veces. A M₁ = 3.0, aumenta 10.3 veces. El aumento de presión es muy sensible 
              al número de Mach.
            </p>
          </Example>
        </Concept>

        <Concept title="Número de Mach Después del Choque">
          <p>
            El número de Mach siempre disminuye al atravesar un choque normal. Para choques 
            fuertes (M₁ grande), el Mach después del choque tiende a un valor límite:
          </p>

          <Formula
            expression={String.raw`M_2^2 = \frac{M_1^2 + \frac{2}{\gamma-1}}{\frac{2\gamma M_1^2}{\gamma-1} - 1}`}
            calculatorId="ondas-choque"
            definitions={definitions}
            exercises={exercises}
          />

          <p>
            Para aire (γ = 1.4), cuando M₁ → ∞, M₂ → 0.378. Esto significa que incluso un flujo 
            extremadamente supersónico se reduce a M ≈ 0.38 después de un choque normal fuerte.
          </p>

          <Example>
            <p>
              Un flujo a M₁ = 2.5 se reduce a M₂ = 0.513 después del choque. El flujo sigue 
              siendo subsónico pero cercano a M = 0.5. Para M₁ = 5.0, M₂ = 0.415.
            </p>
          </Example>
        </Concept>

        <Concept title="Otras Relaciones">
          <p>
            Relación de temperatura: T₂/T₁ = [1 + (2γ/(γ+1))(M₁²-1)] × [(2+(γ-1)M₁²)/((γ+1)M₁²)]
          </p>
          <p>
            Relación de densidad: ρ₂/ρ₁ = ((γ+1)M₁²) / (2+(γ-1)M₁²)
          </p>
          <p>
            Para M₁ = 2.0 en aire: T₂/T₁ = 1.687 (aumento del 69%), ρ₂/ρ₁ = 2.667
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Choque Oblicuo">
        <Concept title="Geometría y Formación">
          <p>
            Un choque oblicuo forma un ángulo β (ángulo de onda) con la dirección del flujo. 
            Ocurre cuando el flujo supersónico debe cambiar de dirección, como en:
          </p>
          <ul>
            <li>Bordes de ataque de alas delta</li>
            <li>Conos supersónicos</li>
            <li>Rampas de compresión en entradas de motores</li>
            <li>Superficies deflectoras</li>
          </ul>
        </Concept>

        <Concept title="Componentes del Flujo">
          <p>
            En un choque oblicuo, el flujo se descompone en:
          </p>
          <ul>
            <li>Componente normal al choque: experimenta las relaciones de choque normal</li>
            <li>Componente tangencial al choque: permanece constante</li>
          </ul>
          <p>
            Solo la componente normal (M₁ sin β) experimenta el choque. Esto hace que los choques 
            oblicuos sean menos severos que los normales para el mismo M₁.
          </p>
        </Concept>

        <Concept title="Ventajas del Choque Oblicuo">
          <p>
            Los choques oblicuos son preferibles a los normales porque:
          </p>
          <ul>
            <li>Menores pérdidas de presión total</li>
            <li>Menor aumento de entropía</li>
            <li>Mayor eficiencia en compresión supersónica</li>
            <li>Permiten que el flujo permanezca supersónico después del choque</li>
          </ul>
          <p>
            Por esto, las entradas de motores supersónicos usan múltiples choques oblicuos en 
            lugar de un solo choque normal.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Ondas de Expansión">
        <Concept title="Expansión vs Compresión">
          <p>
            Mientras que las ondas de choque comprimen el flujo (aumentan presión), las ondas 
            de expansión lo expanden (disminuyen presión). A diferencia de los choques, las 
            expansiones son:
          </p>
          <ul>
            <li>Procesos continuos (no discontinuos)</li>
            <li>Isentrópicos (reversibles, sin pérdidas)</li>
            <li>Aceleran el flujo (aumentan M)</li>
            <li>Disminuyen presión y temperatura</li>
          </ul>
        </Concept>

        <Concept title="Abanico de Expansión de Prandtl-Meyer">
          <p>
            Cuando un flujo supersónico gira alejándose de sí mismo (esquina convexa), se forma 
            un abanico de expansión: una región de ondas de Mach infinitesimales donde el flujo 
            acelera gradualmente.
          </p>
          <p>
            Este fenómeno es crucial en el diseño de toberas supersónicas, donde la expansión 
            controlada acelera el flujo de forma eficiente sin pérdidas.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones de las Ondas de Choque">
        <Concept title="Propulsión Supersónica">
          <p>
            Las entradas de motores supersónicos usan ondas de choque para desacelerar el aire 
            de velocidad supersónica a subsónica antes de la combustión:
          </p>
          <ul>
            <li>Entrada de rampa simple: un choque oblicuo + un choque normal</li>
            <li>Entrada de múltiples rampas: varios choques oblicuos débiles + choque normal final</li>
            <li>Entrada de cono: choque cónico axisimétrico</li>
          </ul>
          <p>
            El diseño óptimo minimiza las pérdidas usando múltiples choques oblicuos débiles en 
            lugar de un choque normal fuerte.
          </p>
        </Concept>

        <Concept title="Túneles de Viento Supersónicos">
          <p>
            Los túneles supersónicos deben manejar cuidadosamente las ondas de choque:
          </p>
          <ul>
            <li>Tobera convergente-divergente para acelerar el flujo</li>
            <li>Sección de prueba con paredes perforadas para evitar reflexiones de choques</li>
            <li>Difusor con choques controlados para recuperar presión</li>
          </ul>
        </Concept>

        <Concept title="Diseño de Vehículos Supersónicos">
          <p>
            La forma de vehículos supersónicos se diseña para controlar las ondas de choque:
          </p>
          <ul>
            <li>Narices puntiagudas: generan choques oblicuos débiles en lugar de choques normales fuertes</li>
            <li>Alas delta: choques oblicuos en los bordes de ataque</li>
            <li>Perfiles delgados: minimizan la intensidad de los choques</li>
            <li>Diseño de área transversal: controla la posición y fuerza de los choques</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Fenómenos Relacionados">
        <Concept title="Boom Sónico">
          <p>
            El boom sónico es el sonido característico de un objeto supersónico, causado por la 
            onda de choque que genera. En realidad son dos booms: uno del choque de proa y otro 
            del choque de cola.
          </p>
          <p>
            La intensidad del boom depende del tamaño del vehículo, su altitud y su número de 
            Mach. Los booms sónicos pueden romper ventanas y causar molestias, lo que llevó a 
            prohibir vuelos supersónicos sobre tierra.
          </p>
        </Concept>

        <Concept title="Interacción de Ondas de Choque">
          <p>
            Las ondas de choque pueden interactuar entre sí de formas complejas:
          </p>
          <ul>
            <li>Reflexión regular: un choque oblicuo se refleja en una pared</li>
            <li>Reflexión de Mach: a ángulos grandes, se forma un choque normal perpendicular a la pared</li>
            <li>Intersección de choques: dos choques oblicuos se encuentran</li>
            <li>Choque-capa límite: interacción que puede causar separación del flujo</li>
          </ul>
        </Concept>

        <Concept title="Ondas de Choque en Explosiones">
          <p>
            Las explosiones generan ondas de choque esféricas que se propagan en todas direcciones. 
            La sobrepresión detrás del choque causa el daño destructivo de las explosiones.
          </p>
          <p>
            La intensidad del choque disminuye con la distancia según leyes de escalamiento. El 
            estudio de ondas de choque de explosiones es fundamental en ingeniería de seguridad 
            y defensa.
          </p>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>

        <div className="theory-subsection">
          <h3>Aviación Supersónica</h3>
          <p>
            Todos los aviones supersónicos generan ondas de choque que determinan su resistencia 
            aerodinámica y eficiencia:
          </p>
          <ul>
            <li>Concorde: Diseño optimizado para minimizar resistencia de onda a M = 2.0</li>
            <li>F-22 Raptor: Entrada de motor con choques oblicuos múltiples</li>
            <li>SR-71 Blackbird: Cono de entrada ajustable para diferentes números de Mach</li>
            <li>X-15: Manejo de choques a M = 6.7 con calentamiento extremo</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Propulsión</h3>
          <p>
            Las ondas de choque son fundamentales en motores de alta velocidad:
          </p>
          <ul>
            <li>Turbojets supersónicos: Entrada con sistema de choques para desacelerar aire</li>
            <li>Ramjets: Compresión mediante choques oblicuos sin compresor mecánico</li>
            <li>Scramjets: Combustión supersónica con choques controlados</li>
            <li>Toberas de cohete: Expansión supersónica con ondas de Mach</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Reentrada Atmosférica</h3>
          <p>
            Los vehículos de reentrada generan ondas de choque intensas que causan calentamiento 
            extremo:
          </p>
          <ul>
            <li>Cápsulas Apollo: Choque de proa con temperaturas de 3000°C</li>
            <li>Space Shuttle: Diseño de nariz roma para distribuir calentamiento</li>
            <li>SpaceX Dragon: Escudo térmico ablativo para absorber energía del choque</li>
            <li>Meteoritos: Choque genera plasma luminoso visible como estrella fugaz</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Medicina</h3>
          <p>
            Las ondas de choque tienen aplicaciones médicas sorprendentes:
          </p>
          <ul>
            <li>Litotricia: Destrucción de cálculos renales con ondas de choque focalizadas</li>
            <li>Tratamiento de lesiones: Terapia de ondas de choque para tendinitis y fracturas</li>
            <li>Investigación: Estudio de efectos de explosiones en tejidos</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Industria y Manufactura</h3>
          <p>
            Las ondas de choque se usan en procesos industriales:
          </p>
          <ul>
            <li>Limpieza ultrasónica: Microondas de choque en líquidos</li>
            <li>Conformado de metales: Explosiones controladas para dar forma</li>
            <li>Síntesis de materiales: Choques de alta presión para crear diamantes sintéticos</li>
            <li>Compactación de polvos: Ondas de choque para sinterizar materiales</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Investigación Científica</h3>
          <p>
            Las ondas de choque son herramientas de investigación en física de alta energía:
          </p>
          <ul>
            <li>Tubos de choque: Generación de condiciones extremas de presión y temperatura</li>
            <li>Astrofísica: Estudio de supernovas y choques interestelares</li>
            <li>Fusión por confinamiento inercial: Compresión de combustible con choques convergentes</li>
            <li>Ecuaciones de estado: Determinación de propiedades de materiales a presiones extremas</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Fenómenos Naturales</h3>
          <p>
            Las ondas de choque ocurren en muchos fenómenos naturales:
          </p>
          <ul>
            <li>Rayos: Choque generado por expansión explosiva del canal de plasma</li>
            <li>Volcanes: Ondas de choque de erupciones explosivas</li>
            <li>Meteoritos: Choque de entrada atmosférica y choque de impacto</li>
            <li>Supernovas: Ondas de choque cósmicas que se propagan por años luz</li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Del estudio de proyectiles a la era supersónica
        </h2>

        <div className="theory-subsection">
          <h3>Primeras Observaciones (Siglo XIX)</h3>
          <p>
            Las ondas de choque fueron observadas por primera vez en el contexto de balística. 
            Los ingenieros de artillería notaron fenómenos extraños alrededor de proyectiles de 
            alta velocidad que no podían explicarse con la teoría clásica.
          </p>
          <p>
            En 1887, Ernst Mach y Peter Salcher capturaron las primeras fotografías de ondas de 
            choque usando fotografía schlieren de alta velocidad. Estas imágenes revolucionarias 
            mostraron por primera vez la estructura de las ondas de choque alrededor de proyectiles 
            supersónicos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Teoría de Rankine-Hugoniot (1870s)</h3>
          <p>
            William Rankine (1870) y Pierre-Henri Hugoniot (1887) desarrollaron independientemente 
            las ecuaciones que describen las relaciones a través de ondas de choque. Estas 
            ecuaciones, conocidas como relaciones de Rankine-Hugoniot, siguen siendo fundamentales 
            hoy.
          </p>
          <p>
            Hugoniot murió joven a los 38 años, pero su trabajo sobre ondas de choque en gases 
            se convirtió en la base de toda la teoría moderna de flujo compresible.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Era de la Aviación Supersónica (1940s-1950s)</h3>
          <p>
            Durante la Segunda Guerra Mundial, el desarrollo de aviones de alta velocidad hizo 
            que las ondas de choque pasaran de curiosidad científica a problema de ingeniería 
            crítico. Los aviones que se acercaban a la velocidad del sonido experimentaban 
            vibraciones violentas y pérdida de control.
          </p>
          <p>
            El Bell X-1, pilotado por Chuck Yeager en 1947, fue el primer avión en superar la 
            velocidad del sonido en vuelo nivelado. El diseño del X-1 incorporó conocimientos 
            sobre ondas de choque, incluyendo alas delgadas y nariz puntiaguda.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Desarrollo de Entradas Supersónicas (1950s-1960s)</h3>
          <p>
            El desarrollo de motores a reacción supersónicos requirió entender cómo usar ondas 
            de choque para desacelerar eficientemente el aire. Los ingenieros descubrieron que 
            múltiples choques oblicuos débiles eran más eficientes que un solo choque normal fuerte.
          </p>
          <p>
            El SR-71 Blackbird (1964) incorporó un sistema de entrada ajustable con cono móvil 
            que optimizaba el sistema de choques para diferentes velocidades de vuelo, permitiendo 
            operación eficiente de M = 0.8 a M = 3.2.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Tubos de Choque (1899-presente)</h3>
          <p>
            El tubo de choque, inventado por Paul Vieille en 1899, se convirtió en la herramienta 
            fundamental para estudiar ondas de choque en laboratorio. Consiste en un tubo dividido 
            por una membrana: un lado a alta presión, otro a baja presión.
          </p>
          <p>
            Cuando la membrana se rompe, se genera una onda de choque que viaja hacia el lado de 
            baja presión. Los tubos de choque modernos pueden generar condiciones equivalentes a 
            M = 20 o más, permitiendo estudiar reentrada hipersónica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Boom Sónico y Regulación (1960s-1970s)</h3>
          <p>
            El desarrollo de aviones supersónicos comerciales (Concorde, Tu-144) trajo el problema 
            del boom sónico a la atención pública. Los booms causaban molestias y daños menores, 
            llevando a prohibiciones de vuelo supersónico sobre tierra.
          </p>
          <p>
            La NASA realizó extensos estudios sobre booms sónicos, incluyendo el proyecto Oklahoma 
            City (1964) donde se expuso a una ciudad a booms sónicos diarios durante 6 meses para 
            estudiar la reacción pública.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Aplicaciones Médicas (1980s-presente)</h3>
          <p>
            En 1980, Christian Chaussy realizó el primer tratamiento exitoso de cálculos renales 
            usando ondas de choque extracorpóreas (litotricia). Este descubrimiento abrió un nuevo 
            campo de aplicaciones médicas de ondas de choque.
          </p>
          <p>
            Hoy, la litotricia es un procedimiento estándar que ha tratado a millones de pacientes, 
            evitando cirugías invasivas. Las ondas de choque también se usan para tratar lesiones 
            ortopédicas y estimular curación de tejidos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Era Moderna (2000s-presente)</h3>
          <p>
            La investigación actual se enfoca en:
          </p>
          <ul>
            <li>Diseño de boom sónico bajo para permitir vuelos supersónicos sobre tierra</li>
            <li>Scramjets para vuelo hipersónico (M {'>'} 5)</li>
            <li>Simulación computacional de interacciones complejas de choques</li>
            <li>Ondas de choque en fusión nuclear por confinamiento inercial</li>
          </ul>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>El Boom Sónico del Concorde</h3>
          <p>
            El Concorde generaba un boom sónico tan intenso que podía escucharse a 80 km de 
            distancia. La sobrepresión era de aproximadamente 100 Pa (1 mbar), suficiente para 
            hacer vibrar ventanas y ocasionalmente romperlas.
          </p>
          <p>
            Los pilotos del Concorde debían acelerar a supersónico sobre el océano para evitar 
            quejas. Había rutas específicas sobre el Atlántico donde el boom no afectaba a nadie. 
            Esta restricción limitó severamente las rutas comerciales viables.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Cono Móvil del SR-71</h3>
          <p>
            El SR-71 Blackbird tenía un cono de entrada que se movía hacia adelante y atrás hasta 
            66 cm durante el vuelo para optimizar el sistema de ondas de choque. Este movimiento 
            era controlado automáticamente por computadora.
          </p>
          <p>
            Si el cono se atascaba en la posición incorrecta, el motor podía experimentar "unstart" 
            (apagado de entrada), causando pérdida de empuje asimétrica y violenta guiñada. Los 
            pilotos debían reaccionar en menos de un segundo para evitar perder el control.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Ondas de Choque Visibles</h3>
          <p>
            En condiciones de alta humedad, las ondas de choque pueden volverse visibles como 
            discos de condensación. La caída de presión detrás del choque causa enfriamiento 
            adiabático que condensa el vapor de agua.
          </p>
          <p>
            Las fotografías espectaculares de aviones supersónicos con discos de condensación 
            visibles muestran exactamente dónde están las ondas de choque. Este fenómeno también 
            ocurre en explosiones y en el boom sónico de vehículos terrestres supersónicos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Látigo: Onda de Choque en Miniatura</h3>
          <p>
            El chasquido de un látigo es en realidad un pequeño boom sónico. La punta del látigo 
            acelera a velocidad supersónica (hasta M = 2), generando una onda de choque que 
            produce el sonido característico.
          </p>
          <p>
            Este fue uno de los primeros objetos hechos por humanos en superar la velocidad del 
            sonido, miles de años antes de los aviones. El fenómeno no fue comprendido hasta que 
            se fotografiaron las ondas de choque en 1927.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Ondas de Choque en el Espacio</h3>
          <p>
            Las supernovas generan ondas de choque que se propagan por el espacio interestelar 
            a velocidades de miles de km/s. La onda de choque de la supernova de Casiopea A 
            (observada en 1680) todavía se está expandiendo y es visible en telescopios.
          </p>
          <p>
            Estas ondas de choque cósmicas comprimen y calientan el gas interestelar, desencadenando 
            la formación de nuevas estrellas. Son fundamentales para la evolución química del 
            universo, dispersando elementos pesados creados en la supernova.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Problema del Unstart</h3>
          <p>
            En motores supersónicos, un "unstart" ocurre cuando el sistema de ondas de choque 
            en la entrada colapsa y es expulsado fuera de la entrada. Esto causa pérdida instantánea 
            de empuje y puede generar fuerzas asimétricas peligrosas.
          </p>
          <p>
            El X-15 experimentó varios unstarts violentos. En un caso, el piloto Pete Knight 
            experimentó un unstart a M = 5 que generó una desaceleración de 8g y casi le hace 
            perder el control. Los unstarts fueron uno de los problemas más peligrosos del programa X-15.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Litotricia: De la Guerra a la Medicina</h3>
          <p>
            La litotricia (destrucción de cálculos renales con ondas de choque) fue descubierta 
            accidentalmente. Los investigadores notaron que los trabajadores de fábricas de 
            municiones expuestos a ondas de choque de explosiones tenían menos cálculos renales.
          </p>
          <p>
            Esto llevó a experimentos que demostraron que ondas de choque focalizadas podían 
            pulverizar cálculos sin dañar tejido circundante. Hoy, más de un millón de tratamientos 
            de litotricia se realizan anualmente en el mundo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Récord de Presión</h3>
          <p>
            Las ondas de choque más intensas creadas en laboratorio alcanzan presiones de varios 
            terapascales (millones de atmósferas). Estas presiones, generadas en instalaciones 
            de fusión por confinamiento inercial, son comparables a las del centro de planetas 
            gigantes.
          </p>
          <p>
            En el National Ignition Facility (NIF), 192 láseres convergen en una cápsula de 
            combustible, generando ondas de choque convergentes que comprimen el combustible a 
            densidades 100 veces mayores que el plomo sólido.
          </p>
        </div>
      </div>

      <div className="theory-section-highlight">
        <h2>📝 Resumen</h2>
        <p>
          Las ondas de choque son discontinuidades abruptas en flujo supersónico donde la presión, 
          temperatura y densidad aumentan dramáticamente mientras la velocidad disminuye. Son 
          procesos irreversibles que generan pérdidas de energía.
        </p>
        <p>
          Los choques normales son perpendiculares al flujo y causan las mayores pérdidas. Los 
          choques oblicuos forman un ángulo con el flujo y son más eficientes. Las relaciones de 
          Rankine-Hugoniot describen cómo cambian las propiedades a través del choque.
        </p>
        <p>
          Las ondas de choque son fundamentales en propulsión supersónica, donde se usan para 
          desacelerar el aire antes de la combustión. El diseño óptimo usa múltiples choques 
          oblicuos débiles en lugar de un choque normal fuerte.
        </p>
        <p>
          Las aplicaciones van desde aviación supersónica y reentrada atmosférica hasta medicina 
          (litotricia), manufactura y investigación científica. El boom sónico es la manifestación 
          audible de las ondas de choque generadas por objetos supersónicos.
        </p>
      </div>
    </>
  );
};

export default Theory;
