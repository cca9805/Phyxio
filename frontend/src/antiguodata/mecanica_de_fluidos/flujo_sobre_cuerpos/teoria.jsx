import { TheorySection, Concept, Formula, Important, Example } from '../../../components/TheoryV2';
import { definitions } from "./definitions.js";

export const metadata = {
  titulo: "Flujo sobre Cuerpos",
  descripcion: "Análisis de arrastre y sustentación en cuerpos sumergidos en fluidos",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción al Flujo sobre Cuerpos">
        <p>
          Cuando un fluido fluye alrededor de un cuerpo sólido, se generan fuerzas sobre el cuerpo. 
          Las dos fuerzas principales son el arrastre (paralelo al flujo) y la sustentación 
          (perpendicular al flujo). Estas fuerzas son fundamentales en el diseño de vehículos, 
          estructuras y sistemas aerodinámicos.
        </p>
        <p>
          El análisis del flujo sobre cuerpos involucra comprender cómo la forma, la velocidad, 
          la densidad del fluido y las propiedades de la superficie afectan las fuerzas resultantes. 
          Este conocimiento es esencial en ingeniería aeronáutica, automotriz, naval y de estructuras.
        </p>
      </TheorySection>

      <TheorySection title="Fuerza de Arrastre">
        <Concept title="Ecuación del Arrastre">
          <p>
            La fuerza de arrastre es la resistencia que experimenta un cuerpo al moverse a través de un fluido. 
            Depende de la forma del cuerpo (coeficiente de arrastre), la densidad del fluido, la velocidad 
            y el área frontal.
          </p>

          <Formula 
            expression={String.raw`F_D = \frac{1}{2} C_D \rho v^2 A`} 
            calculatorId="arrastre" 
            definitions={definitions} 
            exercises={exercises}
          />
          
          <p>Donde:</p>
          <ul>
            <li>F_D: Fuerza de arrastre (N)</li>
            <li>C_D: Coeficiente de arrastre (adimensional)</li>
            <li>ρ: Densidad del fluido (kg/m³)</li>
            <li>v: Velocidad relativa del fluido (m/s)</li>
            <li>A: Área de referencia (m²)</li>
          </ul>

          <Important>
            <p>
              El coeficiente de arrastre C_D depende de la forma del cuerpo y del número de Reynolds. 
              Valores típicos: esfera ≈ 0.5, cilindro ≈ 1.0, forma aerodinámica ≈ 0.04, placa plana 
              perpendicular ≈ 1.2.
            </p>
          </Important>

          <Example>
            <p>
              Un automóvil con área frontal de 2 m² y C_D = 0.3 viajando a 30 m/s en aire (ρ = 1.2 kg/m³) 
              experimenta una fuerza de arrastre de F_D = 0.5 × 0.3 × 1.2 × 30² × 2 = 324 N. 
              Esta fuerza aumenta con el cuadrado de la velocidad, por lo que a 60 m/s sería 1296 N.
            </p>
          </Example>
        </Concept>

        <Concept title="Coeficiente de Arrastre">
          <p>
            El coeficiente de arrastre C_D es un parámetro adimensional que caracteriza la resistencia 
            aerodinámica o hidrodinámica de un cuerpo. Depende de varios factores:
          </p>
          <ul>
            <li>Forma del cuerpo: Cuerpos aerodinámicos tienen C_D bajo</li>
            <li>Número de Reynolds: Varía con la velocidad y tamaño</li>
            <li>Rugosidad de la superficie: Superficies lisas reducen C_D</li>
            <li>Ángulo de ataque: En cuerpos asimétricos</li>
          </ul>
          <p>Valores típicos de C_D:</p>
          <ul>
            <li>Esfera lisa: 0.1-0.5 (depende de Re)</li>
            <li>Cilindro circular: 0.6-1.2 (depende de Re)</li>
            <li>Placa plana perpendicular: 1.2</li>
            <li>Automóvil moderno: 0.25-0.35</li>
            <li>Avion comercial: 0.02-0.03</li>
            <li>Bicicleta con ciclista: 0.9-1.1</li>
          </ul>
        </Concept>

        <Concept title="Dependencia con el Número de Reynolds">
          <p>
            El coeficiente de arrastre varía significativamente con el número de Reynolds, especialmente 
            para cuerpos esféricos y cilíndricos:
          </p>
          <p>Para una esfera:</p>
          <ul>
            <li>Re {'<'} 1: Flujo de Stokes, C_D ≈ 24/Re (arrastre viscoso dominante)</li>
            <li>1 {'<'} Re {'<'} 10³: Transición, C_D disminuye gradualmente</li>
            <li>10³ {'<'} Re {'<'} 10⁵: C_D ≈ 0.4-0.5 (relativamente constante)</li>
            <li>Re {'>'} 10⁵: Crisis de arrastre, C_D cae bruscamente a ≈ 0.1-0.2</li>
          </ul>
          <p>
            La "crisis de arrastre" ocurre cuando la capa límite se vuelve turbulenta, reduciendo 
            significativamente el arrastre por presión.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Fuerza de Sustentación">
        <Concept title="Ecuación de Sustentación">
          <p>
            La fuerza de sustentación es la componente de fuerza perpendicular a la dirección del flujo. 
            Es fundamental en el vuelo de aviones y el funcionamiento de hélices y turbinas.
          </p>

          <Formula 
            expression={String.raw`F_L = \frac{1}{2} C_L \rho v^2 A`} 
            calculatorId="sustentacion" 
            definitions={definitions} 
            exercises={exercises}
          />
          
          <p>Donde:</p>
          <ul>
            <li>F_L: Fuerza de sustentación (N)</li>
            <li>C_L: Coeficiente de sustentación (adimensional)</li>
            <li>ρ: Densidad del fluido (kg/m³)</li>
            <li>v: Velocidad relativa del fluido (m/s)</li>
            <li>A: Área de referencia, típicamente área alar (m²)</li>
          </ul>

          <Important>
            <p>
              El coeficiente de sustentación C_L depende del ángulo de ataque, la forma del perfil alar 
              y el número de Reynolds. Para un perfil alar típico, C_L puede variar de -0.5 a 1.5 según 
              el ángulo de ataque.
            </p>
          </Important>

          <Example>
            <p>
              Un avión con área alar de 50 m² vuela a 100 m/s en aire (ρ = 1.2 kg/m³). Con C_L = 0.8, 
              la sustentación es F_L = 0.5 × 0.8 × 1.2 × 100² × 50 = 240,000 N = 240 kN. 
              Esta fuerza debe igualar el peso del avión para mantener el vuelo nivelado.
            </p>
          </Example>
        </Concept>

        <Concept title="Principio de Bernoulli y Sustentación">
          <p>
            La sustentación en un perfil alar se genera principalmente por la diferencia de presión 
            entre las superficies superior e inferior, relacionada con la diferencia de velocidad 
            del flujo según el principio de Bernoulli.
          </p>
          <p>
            Factores que afectan la sustentación:
          </p>
          <ul>
            <li>Ángulo de ataque: Aumenta C_L hasta un máximo (stall)</li>
            <li>Forma del perfil: Perfiles curvados generan más sustentación</li>
            <li>Velocidad: La sustentación es proporcional a v²</li>
            <li>Densidad del fluido: Mayor densidad genera más sustentación</li>
            <li>Área alar: Mayor área genera más sustentación</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Capa Límite">
        <Concept title="Concepto de Capa Límite">
          <p>
            La capa límite es la región delgada cerca de la superficie donde los efectos viscosos son 
            significativos. Fue introducida por Ludwig Prandtl en 1904 y revolucionó la aerodinámica.
          </p>
          <p>
            Características de la capa límite:
          </p>
          <ul>
            <li>Espesor δ: Distancia desde la superficie donde la velocidad alcanza el 99% de la velocidad libre</li>
            <li>Flujo laminar: Capa límite delgada, arrastre bajo</li>
            <li>Flujo turbulento: Capa límite más gruesa, arrastre mayor pero más resistente a la separación</li>
            <li>Separación: Ocurre cuando la capa límite se desprende de la superficie</li>
          </ul>
        </Concept>

        <Concept title="Transición Laminar-Turbulenta">
          <p>
            La transición de capa límite laminar a turbulenta ocurre cuando el número de Reynolds local 
            excede un valor crítico (típicamente Re_x ≈ 5×10⁵ para placas planas).
          </p>
          <p>
            Efectos de la transición:
          </p>
          <ul>
            <li>Arrastre por fricción aumenta (flujo turbulento tiene mayor fricción)</li>
            <li>Separación se retrasa (flujo turbulento es más energético)</li>
            <li>En algunos casos, el arrastre total puede disminuir (menos separación)</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>

        <div className="theory-subsection">
          <h3>Ingeniería Aeronáutica</h3>
          <p>
            El diseño de aviones depende críticamente del flujo sobre cuerpos:
          </p>
          <ul>
            <li>Perfiles alares optimizados para maximizar sustentación y minimizar arrastre</li>
            <li>Coeficiente de arrastre de aviones comerciales: C_D ≈ 0.02-0.03</li>
            <li>Reducción del 1% en C_D puede ahorrar millones de litros de combustible anuales</li>
            <li>Winglets en las puntas de las alas reducen arrastre inducido</li>
            <li>Superficies de control (alerones, flaps) modifican C_L y C_D</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Ingeniería Automotriz</h3>
          <p>
            La aerodinámica es crucial en el diseño de vehículos:
          </p>
          <ul>
            <li>Automóviles modernos: C_D de 0.25-0.35 (mejora constante desde 0.5-0.6 en los 70s)</li>
            <li>Reducción de C_D mejora eficiencia de combustible y estabilidad a alta velocidad</li>
            <li>Downforce en F1: Genera sustentación negativa para aumentar adherencia</li>
            <li>Túneles de viento para optimización aerodinámica</li>
            <li>Diseño de spoilers y difusores para controlar flujo</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Deportes</h3>
          <p>
            La aerodinámica afecta significativamente el rendimiento deportivo:
          </p>
          <ul>
            <li>Ciclismo: Cascos aerodinámicos, ruedas lenticulares, posición del cuerpo</li>
            <li>Natación: Trajes de baño que reducen arrastre</li>
            <li>Esquí: Trajes ajustados y posición aerodinámica</li>
            <li>Fórmula 1: Diseño de monoplazas para minimizar arrastre y maximizar downforce</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Ingeniería Naval</h3>
          <p>
            El diseño de barcos considera el flujo sobre cuerpos:
          </p>
          <ul>
            <li>Forma del casco para minimizar resistencia al avance</li>
            <li>Diseño de hélices para eficiencia propulsiva</li>
            <li>Estabilidad y resistencia al viento en veleros</li>
            <li>Reducción de arrastre en submarinos</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Energía Eólica</h3>
          <p>
            Las turbinas eólicas aprovechan la sustentación:
          </p>
          <ul>
            <li>Palas diseñadas como perfiles alares para generar sustentación</li>
            <li>Rotación convierte sustentación en par motor</li>
            <li>Optimización de C_L/C_D para máxima eficiencia</li>
            <li>Diseño de palas para diferentes condiciones de viento</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Estructuras Civiles</h3>
          <p>
            El viento sobre estructuras genera fuerzas importantes:
          </p>
          <ul>
            <li>Edificios altos: Análisis de cargas de viento</li>
            <li>Puentes: Estudio de aeroelasticidad y flutter</li>
            <li>Torres y chimeneas: Diseño para resistir vientos fuertes</li>
            <li>Señalización: Resistencia al viento en paneles</li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De los primeros vuelos a la aerodinámica moderna
        </h2>

        <div className="theory-subsection">
          <h3>Primeros Estudios (1700s-1800s)</h3>
          <p>
            Los primeros estudios científicos del arrastre fueron realizados por Isaac Newton 
            (1687), quien propuso que la resistencia era proporcional a v². Sin embargo, su modelo 
            no consideraba la forma del cuerpo adecuadamente.
          </p>
          <p>
            En 1752, Jean le Rond d'Alembert formuló la "paradoja de d'Alembert": un cuerpo en 
            flujo ideal (sin viscosidad) no experimenta arrastre, contradiciendo la experiencia. 
            Esta paradoja se resolvió con el concepto de capa límite.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Ludwig Prandtl y la Capa Límite (1904)</h3>
          <p>
            Ludwig Prandtl, ingeniero alemán, revolucionó la aerodinámica al introducir el concepto 
            de capa límite en 1904. Mostró que los efectos viscosos se concentran en una capa delgada 
            cerca de la superficie, permitiendo simplificar las ecuaciones de Navier-Stokes.
          </p>
          <p>
            La teoría de la capa límite de Prandtl permitió explicar fenómenos como la separación 
            del flujo y la transición laminar-turbulenta, fundamentales para el diseño aeronáutico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Hermanos Wright (1903)</h3>
          <p>
            Los hermanos Wright realizaron extensos experimentos en túnel de viento para entender 
            la sustentación y el arrastre. Sus mediciones de C_L y C_D para diferentes perfiles alares 
            fueron fundamentales para el primer vuelo exitoso.
          </p>
          <p>
            Diseñaron su propio túnel de viento y probaron más de 200 perfiles alares diferentes, 
            estableciendo las bases del diseño aeronáutico moderno.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Desarrollo de Túneles de Viento (1900s-1930s)</h3>
          <p>
            El desarrollo de túneles de viento permitió medir fuerzas aerodinámicas de forma sistemática. 
            El túnel de viento de la NACA (predecesora de la NASA) en Langley (1920s) fue crucial para 
            el desarrollo de perfiles alares estándar.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Era Supersónica (1940s-1960s)</h3>
          <p>
            El desarrollo de aviones supersónicos requirió entender el flujo compresible sobre cuerpos. 
            La teoría de ondas de choque y el concepto de número de Mach fueron fundamentales. 
            El avión X-1 rompió la barrera del sonido en 1947.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Simulación Computacional (1980s-presente)</h3>
          <p>
            El desarrollo de CFD (Computational Fluid Dynamics) revolucionó el diseño aerodinámico. 
            Permite simular flujos complejos sin necesidad de costosos túneles de viento, aunque 
            estos siguen siendo esenciales para validación.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>La Crisis de Arrastre en Pelotas de Golf</h3>
          <p>
            Las pelotas de golf tienen hoyuelos (dimples) que reducen el arrastre. Una pelota lisa 
            tiene C_D ≈ 0.5, mientras que una con hoyuelos tiene C_D ≈ 0.25. Los hoyuelos inducen 
            turbulencia en la capa límite, retrasando la separación y reduciendo la estela, lo que 
            disminuye el arrastre por presión.
          </p>
          <p>
            Sin hoyuelos, una pelota de golf viajaría aproximadamente la mitad de distancia. 
            Los hoyuelos fueron descubiertos accidentalmente cuando se notó que las pelotas viejas 
            y dañadas volaban más lejos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Efecto Ground en Fórmula 1</h3>
          <p>
            Los monoplazas de F1 utilizan el "efecto suelo" para generar downforce. Al reducir la 
            distancia entre el suelo y el fondo del coche, se acelera el flujo de aire, creando 
            una zona de baja presión que "succiona" el coche hacia el suelo, aumentando la adherencia.
          </p>
          <p>
            Este efecto fue tan potente en los años 70-80s que algunos coches podían circular boca 
            abajo en el techo de un túnel. Fue regulado por seguridad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Piel de Tiburón y la Reducción de Arrastre</h3>
          <p>
            La piel de tiburón tiene microestructuras (dentículos dérmicos) que reducen el arrastre 
            hasta un 8% al controlar la vorticidad en la capa límite. Los trajes de baño Speedo LZR 
            Racer, inspirados en tiburones, fueron tan efectivos que se rompieron 93 récords mundiales 
            en 2008-2009 antes de ser prohibidos.
          </p>
          <p>
            Ahora, estas texturas se aplican en aviones y barcos para reducir el consumo de combustible.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Récord de Velocidad en Bicicleta</h3>
          <p>
            El récord de velocidad en bicicleta (sin motor) es de 296 km/h, logrado en 2018. 
            Se utilizó un vehículo completamente carenado con C_D extremadamente bajo y una posición 
            aerodinámica perfecta. La reducción del arrastre fue crucial para alcanzar esta velocidad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Boeing 787 y la Eficiencia Aerodinámica</h3>
          <p>
            El Boeing 787 Dreamliner tiene un C_D de aproximadamente 0.022, uno de los más bajos 
            para aviones comerciales. Esto se logró con diseño de fuselaje optimizado, winglets 
            y materiales compuestos. La reducción del 20% en consumo de combustible respecto a 
            aviones anteriores se debe en gran parte a mejoras aerodinámicas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Fenómeno de Stall en Aviones</h3>
          <p>
            Cuando un avión excede el ángulo de ataque crítico, la capa límite se separa completamente, 
            causando una pérdida brusca de sustentación (stall). Esto puede ser peligroso a baja altura, 
            pero los pilotos entrenan para recuperarse. El stall es un ejemplo dramático de cómo la 
            separación de la capa límite afecta las fuerzas aerodinámicas.
          </p>
        </div>
      </div>

      <div className="theory-section-highlight">
        <h2>📝 Resumen</h2>
        <p>
          El flujo sobre cuerpos genera dos fuerzas principales: arrastre (F_D = ½ C_D ρ v² A) paralelo 
          al flujo, y sustentación (F_L = ½ C_L ρ v² A) perpendicular al flujo. El coeficiente de 
          arrastre C_D depende de la forma del cuerpo, el número de Reynolds y la rugosidad de la 
          superficie. Valores típicos van desde 0.02 (aviones) hasta 1.2 (placas planas).
        </p>
        <p>
          La capa límite, introducida por Prandtl en 1904, es la región delgada cerca de la superficie 
          donde los efectos viscosos son significativos. La transición de laminar a turbulento afecta 
          significativamente el arrastre y la separación del flujo.
        </p>
        <p>
          La sustentación en perfiles alares se genera principalmente por diferencia de presión entre 
          las superficies superior e inferior, relacionada con la diferencia de velocidad según el 
          principio de Bernoulli. El coeficiente de sustentación C_L depende del ángulo de ataque y 
          puede variar de -0.5 a 1.5 para perfiles típicos.
        </p>
        <p>
          Estas fuerzas son fundamentales en ingeniería aeronáutica, automotriz, naval, energía eólica 
          y diseño de estructuras. La optimización aerodinámica puede reducir significativamente el 
          consumo de combustible y mejorar el rendimiento.
        </p>
      </div>
    </>
  );
};

export default Theory;
