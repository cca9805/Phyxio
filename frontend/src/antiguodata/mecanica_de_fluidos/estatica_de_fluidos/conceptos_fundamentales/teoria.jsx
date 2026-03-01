import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Conceptos Fundamentales",
  descripcion: "Propiedades básicas de fluidos en reposo",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a las Propiedades de Fluidos">
        <p>
          Los fluidos (líquidos y gases) son sustancias que se deforman continuamente bajo la acción de esfuerzos cortantes, 
          por pequeños que sean. A diferencia de los sólidos, los fluidos no tienen forma propia y adoptan la forma del 
          recipiente que los contiene. Las propiedades fundamentales de los fluidos determinan su comportamiento en reposo 
          y en movimiento.
        </p>
        <p>
          En estática de fluidos, nos enfocamos en las propiedades que caracterizan a los fluidos en reposo, como la densidad, 
          el peso específico, la compresibilidad y la viscosidad. Estas propiedades son esenciales para comprender fenómenos 
          como la presión hidrostática, la flotación y la transmisión de fuerzas en sistemas hidráulicos.
        </p>
      </TheorySection>

      <TheorySection title="Densidad">
        <Concept title="Definición de Densidad">
          <p>
            La densidad (ρ) es una propiedad intensiva que relaciona la masa de un fluido con el volumen que ocupa. 
            Es una medida de cuánta materia está contenida en un espacio determinado. La densidad es fundamental para 
            entender fenómenos como la flotación, la estratificación de fluidos y la presión hidrostática.
          </p>
          <Formula 
            expression={String.raw`\rho = \frac{m}{V}`} 
            calculatorId="cf-densidad" 
            definitions={definitions} 
            exercises={exercises}
            complementary={[
              { description: "Calcular Masa", expression: String.raw`m = \rho \cdot V` },
              { description: "Calcular Volumen", expression: String.raw`V = \frac{m}{\rho}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>ρ: Densidad (kg/m³)</li>
            <li>m: Masa (kg)</li>
            <li>V: Volumen (m³)</li>
          </ul>

          <Example>
            <p>
              El agua tiene una densidad de aproximadamente 1000 kg/m³ a 4°C, mientras que el mercurio tiene una densidad 
              de 13600 kg/m³. Esto significa que el mercurio es 13.6 veces más denso que el agua, lo que explica por qué 
              objetos que flotan en mercurio se hundirían en agua.
            </p>
          </Example>

          <Important>
            <p>
              La densidad de los líquidos varía ligeramente con la temperatura y la presión, mientras que la densidad de 
              los gases es mucho más sensible a estos cambios. Por esta razón, es importante especificar las condiciones 
              de temperatura y presión al reportar valores de densidad.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Peso Específico">
        <Concept title="Definición de Peso Específico">
          <p>
            El peso específico (γ) es el peso por unidad de volumen de un fluido. Se relaciona directamente con la densidad 
            a través de la aceleración de la gravedad. Mientras que la densidad es una propiedad intrínseca del material, 
            el peso específico depende de la ubicación geográfica debido a las variaciones en la gravedad.
          </p>
          <Formula 
            expression={String.raw`\gamma = \rho \cdot g`} 
            calculatorId="cf-peso-especifico" 
            definitions={definitions} 
            exercises={exercises}
            complementary={[
              { description: "Calcular Densidad", expression: String.raw`\rho = \frac{\gamma}{g}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>γ: Peso específico (N/m³)</li>
            <li>ρ: Densidad (kg/m³)</li>
            <li>g: Aceleración de la gravedad (9.81 m/s²)</li>
          </ul>

          <Important>
            <p>
              El peso específico varía con la ubicación debido a cambios en la gravedad. Por ejemplo, un fluido pesará 
              ligeramente menos en el ecuador que en los polos debido a la menor gravedad ecuatorial. Sin embargo, su 
              densidad permanece constante.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Densidad Relativa">
        <Concept title="Gravedad Específica">
          <p>
            La densidad relativa o gravedad específica es la relación entre la densidad de una sustancia y la densidad 
            de una sustancia de referencia (generalmente agua a 4°C para líquidos y aire a 20°C para gases). Es una 
            cantidad adimensional que facilita la comparación entre diferentes fluidos.
          </p>
          <p>
            Para líquidos: ρ_relativa = ρ_sustancia / ρ_agua
          </p>
          <p>
            Donde ρ_agua = 1000 kg/m³ a 4°C
          </p>
          <Example>
            <p>
              El mercurio tiene una densidad relativa de 13.6, lo que significa que es 13.6 veces más denso que el agua. 
              El aceite de oliva tiene una densidad relativa de aproximadamente 0.92, por lo que flota en el agua.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Compresibilidad">
        <Concept title="Módulo de Elasticidad Volumétrico">
          <p>
            La compresibilidad es la propiedad que describe cómo cambia el volumen de un fluido cuando se somete a presión. 
            El módulo de elasticidad volumétrico (K) o módulo de compresibilidad es una medida de la resistencia de un 
            fluido a la compresión.
          </p>
          <p>
            K = -V · (dP/dV)
          </p>
          <p>
            Donde:
          </p>
          <ul>
            <li>K: Módulo de compresibilidad (Pa)</li>
            <li>V: Volumen (m³)</li>
            <li>dP: Cambio de presión (Pa)</li>
            <li>dV: Cambio de volumen (m³)</li>
          </ul>
          <Important>
            <p>
              Los líquidos son generalmente considerados incompresibles en la mayoría de las aplicaciones prácticas, 
              ya que su módulo de compresibilidad es muy alto. El agua tiene un K de aproximadamente 2.2 GPa. Los gases, 
              por el contrario, son altamente compresibles.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Viscosidad">
        <Concept title="Viscosidad Dinámica y Cinemática">
          <p>
            La viscosidad es la propiedad de un fluido que se opone a su deformación o flujo. Es una medida de la 
            resistencia interna del fluido al movimiento. Existen dos tipos de viscosidad: dinámica y cinemática.
          </p>
          <p>
            La viscosidad dinámica (μ) mide la resistencia al flujo cuando se aplica una fuerza. Se expresa en Pa·s 
            o poise (1 Pa·s = 10 poise).
          </p>
          <p>
            La viscosidad cinemática (ν) es la relación entre la viscosidad dinámica y la densidad:
          </p>
          <p>
            ν = μ / ρ
          </p>
          <p>
            Se expresa en m²/s o stokes (1 m²/s = 10⁴ stokes).
          </p>
          <Example>
            <p>
              El agua a 20°C tiene una viscosidad dinámica de aproximadamente 1.002 × 10⁻³ Pa·s, mientras que la miel 
              tiene una viscosidad de aproximadamente 10 Pa·s, lo que la hace unas 10,000 veces más viscosa que el agua.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Tensión Superficial">
        <Concept title="Cohesión Molecular en la Superficie">
          <p>
            La tensión superficial (σ) es la propiedad que hace que la superficie de un líquido se comporte como una 
            membrana elástica. Es causada por las fuerzas de cohesión entre las moléculas del líquido en la superficie, 
            que experimentan una fuerza neta hacia el interior del líquido.
          </p>
          <p>
            Se expresa en N/m o dinas/cm (1 N/m = 1000 dinas/cm).
          </p>
          <Example>
            <p>
              La tensión superficial del agua a 20°C es de aproximadamente 0.073 N/m. Esta propiedad permite que algunos 
              insectos caminen sobre el agua y que las gotas de agua adopten forma esférica.
            </p>
          </Example>
          <Important>
            <p>
              La tensión superficial disminuye con el aumento de temperatura y puede ser reducida significativamente 
              mediante la adición de surfactantes (jabones y detergentes), lo que explica su acción limpiadora.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Presión de Vapor">
        <Concept title="Evaporación y Cavitación">
          <p>
            La presión de vapor (P_v) es la presión a la cual un líquido y su vapor están en equilibrio a una temperatura 
            dada. Es una medida de la tendencia de las moléculas a escapar de la fase líquida hacia la fase gaseosa.
          </p>
          <p>
            La presión de vapor aumenta con la temperatura. Cuando la presión de vapor iguala la presión atmosférica, 
            el líquido hierve. Este concepto es fundamental para entender la cavitación en sistemas hidráulicos.
          </p>
          <Example>
            <p>
              El agua a 20°C tiene una presión de vapor de aproximadamente 2.34 kPa. A 100°C, la presión de vapor alcanza 
              101.3 kPa (presión atmosférica), momento en el cual el agua hierve a nivel del mar.
            </p>
          </Example>
          <Important>
            <p>
              La cavitación ocurre cuando la presión local en un fluido cae por debajo de su presión de vapor, formando 
              burbujas de vapor que colapsan violentamente. Este fenómeno puede causar daños severos en bombas, hélices 
              y turbinas.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>Flotación y Navegación</h3>
          <p>
            La densidad es fundamental para el diseño de barcos y submarinos. Los barcos flotan porque su densidad 
            promedio (incluyendo el aire en su interior) es menor que la del agua. Los submarinos ajustan su densidad 
            llenando o vaciando tanques de lastre para sumergirse o emerger.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Control de Calidad Industrial</h3>
          <p>
            La medición de densidad se utiliza ampliamente en la industria para control de calidad. En la producción 
            de bebidas, se mide la densidad para verificar la concentración de azúcar. En la industria petrolera, 
            se usa para clasificar diferentes tipos de crudo y productos refinados.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Sistemas Hidráulicos</h3>
          <p>
            El peso específico es crucial en el diseño de sistemas hidráulicos. Los fluidos hidráulicos deben tener 
            propiedades específicas de densidad y viscosidad para transmitir fuerzas eficientemente en maquinaria 
            pesada, frenos de automóviles y sistemas de dirección asistida.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Separación de Mezclas</h3>
          <p>
            Las diferencias de densidad se aprovechan para separar mezclas. En la industria petrolera, el petróleo 
            se separa del agua por diferencia de densidad. En minería, la flotación mineral utiliza diferencias de 
            densidad para separar minerales valiosos de la ganga.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Meteorología y Oceanografía</h3>
          <p>
            Las variaciones de densidad del aire causan vientos y corrientes atmosféricas. En los océanos, las 
            diferencias de densidad debidas a temperatura y salinidad impulsan las corrientes oceánicas profundas, 
            que son fundamentales para el clima global.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Medicina y Diagnóstico</h3>
          <p>
            La densidad de fluidos corporales se utiliza en diagnósticos médicos. La densidad de la orina puede 
            indicar problemas renales o deshidratación. La densidad ósea se mide para diagnosticar osteoporosis. 
            Los densímetros se usan para medir la concentración de proteínas en sangre.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Construcción y Materiales</h3>
          <p>
            En construcción, la densidad de materiales determina cargas estructurales y propiedades de aislamiento. 
            El concreto se diseña con densidades específicas según su aplicación. Los materiales de aislamiento 
            térmico suelen tener baja densidad para atrapar aire.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De Arquímedes a la Era Moderna
        </h2>
        
        <div className="theory-subsection">
          <h3>Arquímedes y el Principio de Flotación</h3>
          <p>
            Arquímedes de Siracusa (287-212 a.C.) fue el primero en estudiar sistemáticamente las propiedades de los 
            fluidos. Según la leyenda, descubrió el principio de flotación mientras se bañaba, al notar que el agua 
            se desbordaba cuando entraba en la bañera. Esto lo llevó a gritar "¡Eureka!" (lo encontré) y correr 
            desnudo por las calles de Siracusa.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Problema de la Corona del Rey</h3>
          <p>
            El rey Hierón II de Siracusa encargó a Arquímedes verificar si una corona era de oro puro o si el orfebre 
            había mezclado plata. Arquímedes resolvió el problema comparando la densidad de la corona con la del oro 
            puro, sumergiendo ambos en agua y midiendo el volumen desplazado. Este fue uno de los primeros usos 
            prácticos del concepto de densidad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Galileo y la Medición de Densidades</h3>
          <p>
            Galileo Galilei (1564-1642) desarrolló métodos más precisos para medir densidades. Diseñó una balanza 
            hidrostática que permitía determinar la densidad de objetos sólidos y líquidos con gran precisión. Sus 
            trabajos sentaron las bases para la hidrostática moderna.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Desarrollo de Instrumentos de Medición</h3>
          <p>
            En el siglo XVIII, se desarrollaron los primeros densímetros o hidrómetros prácticos. Antoine Baumé 
            (1728-1804) creó la escala Baumé para medir densidades de líquidos, ampliamente utilizada en la industria 
            química. El picnómetro, inventado en el siglo XIX, permitió mediciones de densidad con precisión sin 
            precedentes.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Era de la Precisión</h3>
          <p>
            En el siglo XX, el desarrollo de técnicas como la densitometría de rayos X y los densímetros digitales 
            de tubo vibrante revolucionaron la medición de densidades. Estos instrumentos permiten mediciones con 
            precisiones de hasta 0.00001 g/cm³, esenciales para la investigación científica y el control de calidad 
            industrial.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Aplicaciones Espaciales</h3>
          <p>
            En la era espacial, el estudio de densidades en microgravedad ha revelado nuevos fenómenos. Los 
            experimentos en la Estación Espacial Internacional han mostrado cómo se comportan los fluidos cuando 
            la gravedad no afecta su densidad aparente, lo que tiene implicaciones para el diseño de sistemas de 
            soporte vital en el espacio.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>El Mar Muerto: Imposible Hundirse</h3>
          <p>
            El Mar Muerto tiene una densidad de aproximadamente 1240 kg/m³, un 24% mayor que el agua dulce, debido 
            a su altísima concentración de sal (34%). Esta densidad es tan alta que es prácticamente imposible 
            hundirse en él. Los bañistas flotan sin esfuerzo, pudiendo incluso leer un periódico mientras flotan 
            en posición vertical.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Hielo que Flota: Una Anomalía que Permite la Vida</h3>
          <p>
            El agua es una de las pocas sustancias cuya forma sólida (hielo) es menos densa que su forma líquida. 
            El hielo tiene una densidad de 917 kg/m³, mientras que el agua líquida tiene 1000 kg/m³. Esta propiedad 
            única es crucial para la vida en la Tierra: si el hielo fuera más denso, se hundiría, los lagos y océanos 
            se congelarían desde el fondo hacia arriba, y la vida acuática sería imposible.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Osmio: El Campeón de la Densidad</h3>
          <p>
            El osmio es el elemento más denso conocido, con una densidad de 22,590 kg/m³, más del doble que el plomo. 
            Un cubo de osmio de 10 cm de lado pesaría más de 22 kg. Es tan denso que una cucharada de osmio pesaría 
            más que un ladrillo de construcción.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Icebergs: El Peligro Oculto</h3>
          <p>
            Solo el 10% del volumen de un iceberg está visible sobre el agua, mientras que el 90% permanece sumergido. 
            Esta proporción está determinada por la relación entre la densidad del hielo (917 kg/m³) y la del agua 
            de mar (1025 kg/m³). Esta característica hizo que los icebergs fueran especialmente peligrosos para la 
            navegación, como demostró trágicamente el hundimiento del Titanic en 1912.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Agua a 4°C: Un Punto Especial</h3>
          <p>
            El agua alcanza su máxima densidad a 4°C (1000 kg/m³), no a 0°C como cabría esperar. Por encima y por 
            debajo de esta temperatura, el agua es menos densa. Este fenómeno hace que el agua a 4°C se hunda al 
            fondo de lagos y océanos, creando una capa que permanece líquida incluso cuando la superficie se congela, 
            permitiendo la supervivencia de la vida acuática en invierno.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Globos de Helio: La Densidad del Aire</h3>
          <p>
            El helio tiene una densidad de solo 0.18 kg/m³, aproximadamente 7 veces menor que la del aire (1.29 kg/m³). 
            Esta diferencia de densidad genera una fuerza de flotación que hace que los globos de helio asciendan. 
            Un globo de helio de 1 m³ puede levantar aproximadamente 1 kg de peso.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Mercurio: Líquido y Pesado</h3>
          <p>
            El mercurio es el único metal que es líquido a temperatura ambiente y tiene una densidad extraordinaria 
            de 13,600 kg/m³. Es tan denso que objetos de hierro y plomo flotan en él. Los antiguos alquimistas 
            quedaban fascinados por este "metal líquido" y lo consideraban mágico. Hoy sabemos que su alta densidad 
            lo hace ideal para barómetros y termómetros, aunque su toxicidad ha limitado su uso.
          </p>
        </div>
      </div>

      <div className="theory-section-highlight">
        <h2>Resumen</h2>
        <p>
          Las propiedades fundamentales de los fluidos son esenciales para comprender su comportamiento en reposo y 
          en movimiento. La densidad (ρ = m/V) relaciona la masa con el volumen y determina fenómenos como la flotación 
          y la estratificación. El peso específico (γ = ρg) es el peso por unidad de volumen y varía con la gravedad.
        </p>
        <p>
          Otras propiedades importantes incluyen la compresibilidad (resistencia a la compresión), la viscosidad 
          (resistencia al flujo), la tensión superficial (cohesión molecular en la superficie) y la presión de vapor 
          (tendencia a evaporarse). Estas propiedades tienen aplicaciones prácticas en navegación, industria, medicina, 
          construcción y muchos otros campos.
        </p>
        <p>
          El estudio de estas propiedades comenzó con Arquímedes en la antigüedad y ha evolucionado hasta las técnicas 
          de medición de alta precisión actuales. Fenómenos curiosos como la flotación en el Mar Muerto, el hielo que 
          flota en agua, y la densidad única del osmio demuestran la importancia y fascinación de estas propiedades 
          fundamentales de la materia.
        </p>
      </div>
    </>
  );
};

export default Theory;
