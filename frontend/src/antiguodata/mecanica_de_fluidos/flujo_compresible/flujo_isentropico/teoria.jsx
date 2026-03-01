import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Flujo Isentrópico",
  descripcion: "Flujo compresible sin fricción ni transferencia de calor",
  isTheoryOnly: true,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción al Flujo Isentrópico">
        <p>
          El flujo isentrópico es un modelo idealizado de flujo compresible que asume que el proceso 
          ocurre sin fricción y sin transferencia de calor con el entorno (proceso adiabático reversible). 
          En este tipo de flujo, la entropía permanece constante a lo largo de todo el proceso, de ahí 
          su nombre: "iso" (igual) + "entrópico" (entropía).
        </p>
        <p>
          Aunque ningún flujo real es perfectamente isentrópico debido a la presencia inevitable de 
          fricción y efectos viscosos, este modelo proporciona una excelente aproximación para muchas 
          aplicaciones prácticas en aerodinámica, turbomaquinaria y sistemas de propulsión. Es 
          especialmente útil para analizar el flujo en toberas, difusores, álabes de turbinas y 
          compresores donde los efectos viscosos son relativamente pequeños.
        </p>
      </TheorySection>

      <TheorySection title="Condiciones del Flujo Isentrópico">
        <Concept title="Requisitos Fundamentales">
          <p>
            Para que un flujo sea considerado isentrópico, debe cumplir simultáneamente tres condiciones:
          </p>
          
          <Important>
            <p>
              1. Proceso adiabático: No hay transferencia de calor entre el fluido y el entorno (Q = 0)
            </p>
            <p>
              2. Proceso reversible: No hay fricción, turbulencia ni otros efectos disipativos
            </p>
            <p>
              3. Entropía constante: ds = 0 a lo largo de todo el proceso
            </p>
          </Important>

          <p>
            Estas condiciones implican que:
          </p>
          <ul>
            <li>No hay pérdidas de energía por fricción viscosa</li>
            <li>No hay gradientes de temperatura que causen conducción de calor</li>
            <li>El flujo es suave y sin turbulencia significativa</li>
            <li>Las paredes del conducto están perfectamente aisladas térmicamente</li>
          </ul>
        </Concept>

        <Concept title="Validez del Modelo">
          <p>
            El modelo isentrópico es una buena aproximación cuando:
          </p>
          <ul>
            <li>El flujo ocurre en conductos cortos donde la fricción es mínima</li>
            <li>Las velocidades son altas y el tiempo de residencia es corto</li>
            <li>Las paredes están bien aisladas o el proceso es muy rápido</li>
            <li>El número de Reynolds es alto (flujo poco viscoso)</li>
          </ul>

          <Example>
            <p>
              El flujo a través de una tobera convergente-divergente de un cohete es aproximadamente 
              isentrópico en la región central, lejos de las paredes. La alta velocidad del flujo 
              (varios cientos de m/s) y el corto tiempo de tránsito minimizan los efectos de fricción 
              y transferencia de calor.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Relaciones Isentrópicas">
        <Concept title="Relación Presión-Temperatura">
          <p>
            Para un gas ideal en proceso isentrópico, la presión y temperatura están relacionadas por:
          </p>

          <Formula
            expression={String.raw`\frac{P_2}{P_1} = \left(\frac{T_2}{T_1}\right)^{\frac{\gamma}{\gamma-1}}`}
          />

          <p>Donde:</p>
          <ul>
            <li>P₁, P₂: Presiones en los estados 1 y 2 (Pa)</li>
            <li>T₁, T₂: Temperaturas absolutas en los estados 1 y 2 (K)</li>
            <li>γ: Coeficiente adiabático o relación de calores específicos (γ = cp/cv)</li>
          </ul>

          <p>
            Para aire: γ = 1.4 (a temperatura ambiente)
          </p>

          <Example>
            <p>
              Si aire a 300 K y 100 kPa se comprime isentrópicamente hasta 200 kPa, la temperatura 
              final será: T₂ = 300 × (200/100)^(0.4/1.4) = 300 × 1.219 = 365.7 K (92.7°C)
            </p>
          </Example>
        </Concept>

        <Concept title="Relación Presión-Densidad">
          <p>
            La presión y densidad en proceso isentrópico se relacionan mediante:
          </p>

          <Formula
            expression={String.raw`\frac{P_2}{P_1} = \left(\frac{\rho_2}{\rho_1}\right)^{\gamma}`}
          />

          <p>Donde:</p>
          <ul>
            <li>ρ₁, ρ₂: Densidades en los estados 1 y 2 (kg/m³)</li>
            <li>γ: Coeficiente adiabático</li>
          </ul>

          <p>
            Esta relación muestra que en compresión isentrópica, la densidad aumenta menos que 
            proporcionalmente con la presión, debido al exponente γ {'>'} 1.
          </p>
        </Concept>

        <Concept title="Relación Temperatura-Densidad">
          <p>
            La temperatura y densidad están relacionadas por:
          </p>

          <Formula
            expression={String.raw`\frac{T_2}{T_1} = \left(\frac{\rho_2}{\rho_1}\right)^{\gamma-1}`}
          />

          <p>
            Esta ecuación es útil para calcular cambios de temperatura cuando se conocen los cambios 
            de densidad, común en análisis de compresores y turbinas.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Propiedades de Estancamiento">
        <Concept title="Condiciones de Estancamiento">
          <p>
            Las propiedades de estancamiento (o totales) son aquellas que tendría el fluido si se 
            desacelerara isentrópicamente hasta velocidad cero. Estas propiedades son fundamentales 
            en el análisis de flujo compresible.
          </p>

          <p>
            Temperatura de estancamiento:
          </p>

          <Formula
            expression={String.raw`T_0 = T + \frac{V^2}{2c_p}`}
          />

          <p>Donde:</p>
          <ul>
            <li>T₀: Temperatura de estancamiento (K)</li>
            <li>T: Temperatura estática (K)</li>
            <li>V: Velocidad del flujo (m/s)</li>
            <li>cp: Calor específico a presión constante (J/kg·K)</li>
          </ul>

          <p>
            Para aire: cp = 1005 J/kg·K
          </p>

          <Example>
            <p>
              Un avión vuela a 250 m/s en aire a 250 K. La temperatura de estancamiento en el borde 
              de ataque del ala es: T₀ = 250 + (250²)/(2×1005) = 250 + 31.1 = 281.1 K. Este aumento 
              de 31°C es el calentamiento aerodinámico que experimenta la superficie.
            </p>
          </Example>
        </Concept>

        <Concept title="Presión de Estancamiento">
          <p>
            La presión de estancamiento se relaciona con la presión estática mediante:
          </p>

          <Formula
            expression={String.raw`\frac{P_0}{P} = \left(1 + \frac{\gamma-1}{2}M^2\right)^{\frac{\gamma}{\gamma-1}}`}
          />

          <p>Donde:</p>
          <ul>
            <li>P₀: Presión de estancamiento (Pa)</li>
            <li>P: Presión estática (Pa)</li>
            <li>M: Número de Mach</li>
          </ul>

          <p>
            Esta relación es crucial para el diseño de tubos Pitot y medición de velocidades en 
            flujo compresible.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Flujo Isentrópico en Toberas">
        <Concept title="Toberas Convergentes">
          <p>
            Una tobera convergente acelera el flujo subsónico reduciendo el área de sección transversal. 
            En condiciones isentrópicas, el flujo puede alcanzar como máximo M = 1 (velocidad sónica) 
            en la garganta (sección mínima).
          </p>

          <p>
            Características del flujo en tobera convergente:
          </p>
          <ul>
            <li>La velocidad aumenta a medida que el área disminuye</li>
            <li>La presión y temperatura disminuyen</li>
            <li>La densidad disminuye</li>
            <li>El número de Mach aumenta hasta máximo M = 1 en la salida</li>
          </ul>
        </Concept>

        <Concept title="Toberas Convergentes-Divergentes">
          <p>
            Para acelerar el flujo más allá de M = 1 (flujo supersónico), se requiere una tobera 
            convergente-divergente (tobera de Laval). El flujo alcanza M = 1 en la garganta y 
            continúa acelerando en la sección divergente.
          </p>

          <p>
            Comportamiento del flujo:
          </p>
          <ul>
            <li>Sección convergente: Flujo subsónico acelerando (M {'<'} 1)</li>
            <li>Garganta: Flujo sónico (M = 1)</li>
            <li>Sección divergente: Flujo supersónico acelerando (M {'>'} 1)</li>
          </ul>

          <Important>
            <p>
              En la sección divergente de una tobera, el flujo supersónico acelera mientras el área 
              aumenta, comportamiento opuesto al flujo subsónico. Esto se debe a que los efectos de 
              compresibilidad dominan sobre los efectos de continuidad.
            </p>
          </Important>
        </Concept>

        <Concept title="Relación de Áreas">
          <p>
            La relación entre el área en cualquier sección y el área de la garganta está dada por:
          </p>

          <Formula
            expression={String.raw`\frac{A}{A^*} = \frac{1}{M}\left[\frac{2}{\gamma+1}\left(1 + \frac{\gamma-1}{2}M^2\right)\right]^{\frac{\gamma+1}{2(\gamma-1)}}`}
          />

          <p>Donde:</p>
          <ul>
            <li>A: Área de la sección (m²)</li>
            <li>A*: Área de la garganta donde M = 1 (m²)</li>
            <li>M: Número de Mach en la sección</li>
          </ul>

          <p>
            Esta ecuación permite diseñar toberas para obtener un número de Mach específico a la salida.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Flujo Isentrópico en Difusores">
        <Concept title="Función del Difusor">
          <p>
            Un difusor es un conducto que desacelera el flujo aumentando su presión. Es esencialmente 
            el proceso inverso de una tobera. Los difusores se usan en entradas de motores a reacción, 
            túneles de viento y sistemas de ventilación.
          </p>

          <p>
            Tipos de difusores:
          </p>
          <ul>
            <li>Difusor divergente: Para flujo subsónico (M {'<'} 1)</li>
            <li>Difusor convergente-divergente: Para flujo supersónico (M {'>'} 1)</li>
          </ul>
        </Concept>

        <Concept title="Recuperación de Presión">
          <p>
            La eficiencia de un difusor se mide por su capacidad de recuperar presión. En un difusor 
            isentrópico ideal, toda la energía cinética se convierte en aumento de presión sin pérdidas.
          </p>

          <p>
            Coeficiente de recuperación de presión:
          </p>

          <Formula
            expression={String.raw`C_p = \frac{P_2 - P_1}{P_0 - P_1}`}
          />

          <p>
            Para un difusor isentrópico ideal: Cp = 1 (recuperación perfecta)
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Limitaciones del Modelo Isentrópico">
        <Concept title="Efectos No Isentrópicos">
          <p>
            En flujos reales, siempre existen desviaciones del comportamiento isentrópico ideal:
          </p>
          <ul>
            <li>Fricción viscosa en las capas límite cerca de las paredes</li>
            <li>Ondas de choque en flujo supersónico (proceso irreversible)</li>
            <li>Separación del flujo en difusores con ángulos grandes</li>
            <li>Turbulencia y mezcla que disipan energía</li>
            <li>Transferencia de calor en conductos largos o no aislados</li>
          </ul>
        </Concept>

        <Concept title="Eficiencia Isentrópica">
          <p>
            Para cuantificar las desviaciones del comportamiento ideal, se define la eficiencia 
            isentrópica como la relación entre el trabajo real y el trabajo isentrópico:
          </p>

          <p>
            Para compresores:
          </p>

          <Formula
            expression={String.raw`\eta_c = \frac{W_{isentrópico}}{W_{real}} = \frac{h_{2s} - h_1}{h_2 - h_1}`}
          />

          <p>
            Para turbinas:
          </p>

          <Formula
            expression={String.raw`\eta_t = \frac{W_{real}}{W_{isentrópico}} = \frac{h_1 - h_2}{h_1 - h_{2s}}`}
          />

          <p>
            Valores típicos: ηc = 0.80-0.90 para compresores, ηt = 0.85-0.95 para turbinas
          </p>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>

        <div className="theory-subsection">
          <h3>Motores a Reacción y Turbinas de Gas</h3>
          <p>
            Los motores a reacción utilizan el flujo isentrópico en múltiples componentes. El compresor 
            comprime el aire de manera aproximadamente isentrópica, la turbina expande los gases de 
            combustión isentrópicamente, y la tobera acelera los gases de escape para generar empuje.
          </p>
          <ul>
            <li>Compresores axiales: 10-20 etapas de compresión isentrópica</li>
            <li>Turbinas de alta presión: Expansión isentrópica de gases a 1500°C</li>
            <li>Toberas de escape: Aceleración supersónica en aviones militares</li>
            <li>Turbofanes: Flujo isentrópico en el fan y conductos de bypass</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Propulsión Espacial</h3>
          <p>
            Los motores de cohetes utilizan toberas convergentes-divergentes diseñadas para flujo 
            isentrópico. La tobera de Laval acelera los gases de combustión desde velocidades subsónicas 
            en la cámara hasta velocidades supersónicas (M = 3-4) a la salida.
          </p>
          <ul>
            <li>Motores principales del transbordador espacial: Toberas con relación de expansión 77:1</li>
            <li>Motores Merlin de SpaceX: Optimizados para flujo isentrópico al nivel del mar</li>
            <li>Motores de cohetes sólidos: Toberas diseñadas para máxima eficiencia isentrópica</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Túneles de Viento Supersónicos</h3>
          <p>
            Los túneles de viento supersónicos utilizan toberas convergentes-divergentes para acelerar 
            el aire hasta números de Mach específicos (típicamente M = 1.5 a 5). El flujo en la sección 
            de prueba se diseña para ser lo más isentrópico posible.
          </p>
          <ul>
            <li>Túneles de viento transónicos: M = 0.8 a 1.2</li>
            <li>Túneles supersónicos: M = 1.5 a 5</li>
            <li>Túneles hipersónicos: M {'>'} 5 (requieren calentamiento del aire)</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Turbomaquinaria Industrial</h3>
          <p>
            Compresores y turbinas industriales para generación de energía, refrigeración y procesos 
            químicos se diseñan asumiendo flujo isentrópico en los álabes y conductos.
          </p>
          <ul>
            <li>Turbinas de vapor: Expansión isentrópica en centrales eléctricas</li>
            <li>Compresores de gas natural: Compresión isentrópica en gasoductos</li>
            <li>Turbocompresores automotrices: Flujo isentrópico en ruedas de turbina y compresor</li>
            <li>Compresores de refrigeración: Ciclo de compresión aproximadamente isentrópico</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Instrumentación y Medición</h3>
          <p>
            Los tubos de Pitot y sondas de presión utilizan las relaciones isentrópicas para medir 
            velocidades de flujo en aeronaves, túneles de viento y aplicaciones industriales.
          </p>
          <ul>
            <li>Tubos Pitot en aviones: Miden velocidad del aire usando relaciones isentrópicas</li>
            <li>Sondas de cinco agujeros: Determinan velocidad y dirección del flujo</li>
            <li>Medidores de flujo tipo Venturi: Basados en aceleración isentrópica</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Sistemas de Aire Comprimido</h3>
          <p>
            Los sistemas neumáticos industriales utilizan compresores que operan aproximadamente bajo 
            condiciones isentrópicas, especialmente en etapas individuales de compresión.
          </p>
          <ul>
            <li>Compresores de tornillo: Compresión continua aproximadamente isentrópica</li>
            <li>Compresores centrífugos: Alta eficiencia isentrópica (85-90%)</li>
            <li>Sistemas de distribución: Expansión isentrópica en válvulas reguladoras</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Aerodinámica de Vehículos</h3>
          <p>
            El flujo alrededor de vehículos de alta velocidad (aviones, trenes de alta velocidad, 
            autos de carreras) se analiza usando teoría de flujo isentrópico para predecir fuerzas 
            aerodinámicas y calentamiento.
          </p>
          <ul>
            <li>Diseño de perfiles alares: Distribución de presión isentrópica</li>
            <li>Entradas de aire de motores: Desaceleración isentrópica del flujo</li>
            <li>Vehículos supersónicos: Análisis de ondas de choque y expansión</li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Desarrollo de la teoría del flujo compresible
        </h2>

        <div className="theory-subsection">
          <h3>Primeros Estudios de Compresibilidad (Siglo XVII-XVIII)</h3>
          <p>
            Los primeros estudios sobre compresibilidad de gases fueron realizados por Robert Boyle 
            (1662) y Edme Mariotte (1676), quienes establecieron la ley de Boyle-Mariotte: a temperatura 
            constante, el volumen de un gas es inversamente proporcional a su presión.
          </p>
          <p>
            Isaac Newton (1687) fue el primero en intentar calcular la velocidad del sonido en aire, 
            aunque su resultado fue incorrecto porque asumió un proceso isotérmico en lugar de adiabático.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Teoría Termodinámica (Siglo XIX)</h3>
          <p>
            Pierre-Simon Laplace (1816) corrigió el cálculo de Newton al reconocer que la propagación 
            del sonido es un proceso adiabático, no isotérmico. Esto llevó a la fórmula correcta para 
            la velocidad del sonido: a = √(γRT).
          </p>
          <p>
            Sadi Carnot (1824), Rudolf Clausius (1850) y William Rankine (1859) desarrollaron los 
            fundamentos de la termodinámica, incluyendo el concepto de entropía, esencial para entender 
            los procesos isentrópicos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Tobera de Laval (1888)</h3>
          <p>
            Gustaf de Laval, ingeniero sueco, inventó la tobera convergente-divergente en 1888 para 
            su turbina de vapor. Descubrió experimentalmente que para acelerar un flujo más allá de 
            la velocidad del sonido, se requería una sección divergente después de la garganta.
          </p>
          <p>
            Este descubrimiento fue revolucionario y contradictorio con la intuición de la época, que 
            sugería que reducir el área siempre aceleraba el flujo. La tobera de Laval se convirtió 
            en fundamental para turbinas de vapor, motores de cohetes y turbinas de gas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Teoría del Flujo Compresible (Principios del Siglo XX)</h3>
          <p>
            Ludwig Prandtl (1904) y Theodore von Kármán (1930s) desarrollaron la teoría matemática 
            completa del flujo compresible, incluyendo las ecuaciones para flujo isentrópico, ondas 
            de choque y expansión de Prandtl-Meyer.
          </p>
          <p>
            Hermann Glauert (1928) desarrolló las correcciones de compresibilidad para perfiles alares, 
            permitiendo extender la teoría de flujo incompresible a velocidades subsónicas altas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Era de la Aviación Supersónica (1940s-1960s)</h3>
          <p>
            Durante la Segunda Guerra Mundial y la Guerra Fría, la teoría del flujo isentrópico se 
            aplicó intensivamente al diseño de aviones supersónicos. El Bell X-1, pilotado por Chuck 
            Yeager en 1947, fue el primer avión en romper la barrera del sonido, validando las teorías 
            de flujo compresible.
          </p>
          <p>
            El desarrollo de computadoras permitió resolver las ecuaciones de flujo isentrópico para 
            geometrías complejas, revolucionando el diseño aeronáutico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Propulsión Espacial (1950s-presente)</h3>
          <p>
            La carrera espacial impulsó el desarrollo de toberas de cohetes optimizadas para flujo 
            isentrópico. Los ingenieros de la NASA y otras agencias espaciales perfeccionaron el diseño 
            de toberas convergentes-divergentes para maximizar el empuje y la eficiencia.
          </p>
          <p>
            El motor F-1 del cohete Saturno V (1960s) y los motores principales del transbordador 
            espacial (1980s) representan la culminación de décadas de investigación en flujo isentrópico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Simulación Computacional Moderna</h3>
          <p>
            Desde los años 1980, la dinámica de fluidos computacional (CFD) ha permitido simular flujos 
            isentrópicos y no isentrópicos con gran precisión. Software como ANSYS Fluent, OpenFOAM y 
            STAR-CCM+ resuelven las ecuaciones de Navier-Stokes completas, incluyendo efectos viscosos 
            y térmicos que se desvían del comportamiento isentrópico ideal.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>El Misterio de la Barrera del Sonido</h3>
          <p>
            En los años 1940, muchos ingenieros creían que era imposible volar más rápido que el sonido 
            debido a la "barrera del sonido". Los aviones que se acercaban a M = 1 experimentaban 
            vibraciones violentas, pérdida de control y aumento dramático de la resistencia.
          </p>
          <p>
            El problema no era físico sino aerodinámico: los perfiles alares de la época no estaban 
            diseñados para flujo transónico. Chuck Yeager rompió la barrera del sonido en 1947 con el 
            Bell X-1, que tenía alas delgadas y fuselaje en forma de bala, diseñados específicamente 
            para minimizar los efectos de compresibilidad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Tobera Perfecta que Nunca Funciona Perfectamente</h3>
          <p>
            Aunque las toberas de cohetes se diseñan para flujo isentrópico, ninguna tobera real es 
            perfectamente isentrópica. Las capas límite viscosas cerca de las paredes, las ondas de 
            choque oblicuas y la combustión incompleta causan pérdidas de eficiencia del 2-5%.
          </p>
          <p>
            Curiosamente, estas "imperfecciones" son tan predecibles que los ingenieros las incluyen 
            en el diseño desde el principio. Una tobera "perfectamente isentrópica" en papel sería 
            subóptima en la realidad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Concorde y el Calentamiento Aerodinámico</h3>
          <p>
            El Concorde volaba a M = 2.04 (2450 km/h) a 18,000 metros de altitud. A esta velocidad, 
            el calentamiento aerodinámico por compresión isentrópica elevaba la temperatura del fuselaje 
            hasta 127°C, haciendo que el avión se expandiera 15-25 cm en longitud durante el vuelo.
          </p>
          <p>
            Los pilotos tenían que dejar un espacio entre el panel de instrumentos y la pared para 
            acomodar esta expansión térmica. El avión literalmente "crecía" durante el vuelo supersónico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Récord de Velocidad del SR-71 Blackbird</h3>
          <p>
            El SR-71 Blackbird, el avión tripulado más rápido jamás construido, volaba a M = 3.3 
            (3540 km/h). A esta velocidad, la temperatura de estancamiento en el borde de ataque de 
            las alas alcanzaba 427°C, suficiente para derretir aluminio.
          </p>
          <p>
            El avión estaba construido principalmente de titanio y tenía que ser diseñado con holguras 
            que permitieran la expansión térmica. En tierra, el avión "goteaba" combustible por las 
            juntas, que solo sellaban correctamente cuando el avión se calentaba en vuelo supersónico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Paradoja del Difusor Supersónico</h3>
          <p>
            En flujo subsónico, un conducto divergente desacelera el flujo. En flujo supersónico, 
            ¡un conducto divergente acelera el flujo! Esta inversión de comportamiento confundió a 
            los primeros investigadores de flujo compresible.
          </p>
          <p>
            La explicación está en que, en flujo supersónico, la disminución de densidad domina sobre 
            el aumento de área, resultando en aceleración. Este comportamiento contraintuitivo es 
            fundamental para el diseño de toberas de cohetes y entradas de motores supersónicos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Silbido de las Bombas Cayendo</h3>
          <p>
            Durante la Segunda Guerra Mundial, las bombas alemanas producían un silbido característico 
            al caer. Este sonido era causado por pequeñas sirenas aerodinámicas instaladas 
            intencionalmente para crear terror psicológico.
          </p>
          <p>
            El silbido era producido por flujo compresible alrededor de las aletas de la bomba. A 
            velocidades cercanas a M = 0.8, el flujo se volvía transónico y generaba ondas de presión 
            que producían el sonido aterrador. Los ingenieros alemanes habían descubierto 
            accidentalmente un efecto de compresibilidad que luego se usó como arma psicológica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Cohete más Eficiente: El Motor de Inyección Aerospike</h3>
          <p>
            Los motores de cohete tradicionales tienen toberas de campana optimizadas para una altitud 
            específica. A otras altitudes, la tobera es menos eficiente porque la presión de salida no 
            coincide con la presión atmosférica.
          </p>
          <p>
            El motor aerospike, propuesto en los 1960s, usa una tobera "virtual" formada por la presión 
            atmosférica misma, adaptándose automáticamente a cualquier altitud. Aunque nunca se ha usado 
            en un cohete orbital, representa el diseño más elegante de flujo isentrópico adaptativo.
          </p>
        </div>
      </div>

      <div className="theory-section-highlight">
        <h2>📝 Resumen</h2>
        <p>
          El flujo isentrópico es un modelo idealizado de flujo compresible donde la entropía permanece 
          constante (proceso adiabático reversible sin fricción). Aunque ningún flujo real es perfectamente 
          isentrópico, este modelo proporciona una excelente aproximación para muchas aplicaciones en 
          aerodinámica, turbomaquinaria y propulsión.
        </p>
        <p>
          Las relaciones isentrópicas fundamentales conectan presión, temperatura y densidad mediante el 
          coeficiente adiabático γ. Las propiedades de estancamiento (totales) son aquellas que tendría 
          el fluido si se desacelerara isentrópicamente hasta velocidad cero, y son fundamentales para 
          el análisis de flujo compresible.
        </p>
        <p>
          Las toberas convergentes-divergentes (toberas de Laval) utilizan flujo isentrópico para acelerar 
          gases hasta velocidades supersónicas. El flujo alcanza M = 1 en la garganta y continúa acelerando 
          en la sección divergente, comportamiento contraintuitivo único del flujo compresible.
        </p>
        <p>
          Las aplicaciones del flujo isentrópico son extensas: motores a reacción, propulsión espacial, 
          túneles de viento, turbomaquinaria industrial, instrumentación aeronáutica y sistemas neumáticos. 
          La eficiencia isentrópica cuantifica las desviaciones del comportamiento ideal en dispositivos reales.
        </p>
      </div>
    </>
  );
};

export default Theory;
