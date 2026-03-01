import { TheorySection, Concept, Formula, Important, Example } from '../../../components/TheoryV2';
import { definitions } from "./definitions.js";

export const metadata = {
  titulo: "Maquinaria de Fluidos",
  descripcion: "Análisis de bombas, turbinas, ventiladores y compresores",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a la Maquinaria de Fluidos">
        <p>
          Las máquinas de fluidos son dispositivos que intercambian energía con un fluido. 
          Las bombas añaden energía al fluido (aumentan presión o elevan altura), mientras que 
          las turbinas extraen energía del fluido (generan trabajo mecánico). Estas máquinas son 
          fundamentales en sistemas de suministro de agua, generación eléctrica, climatización 
          y procesos industriales.
        </p>
        <p>
          El análisis de maquinaria de fluidos involucra comprender la potencia, eficiencia, 
          curvas características y selección adecuada según las necesidades del sistema.
        </p>
      </TheorySection>

      <TheorySection title="Bombas Hidráulicas">
        <Concept title="Potencia Hidráulica Ideal">
          <p>
            La potencia hidráulica ideal es la potencia teórica necesaria para elevar un fluido 
            a una altura determinada, sin considerar pérdidas. Esta es la potencia que el fluido 
            recibe de la bomba.
          </p>

          <Formula 
            expression={String.raw`P_{hid} = \rho g Q H`} 
            calculatorId="bombas" 
            definitions={definitions} 
            exercises={exercises}
          />
          
          <p>Donde:</p>
          <ul>
            <li>P_hid: Potencia hidráulica (W)</li>
            <li>ρ: Densidad del fluido (kg/m³)</li>
            <li>g: Aceleración gravitacional (9.81 m/s²)</li>
            <li>Q: Caudal volumétrico (m³/s)</li>
            <li>H: Altura manométrica total (m)</li>
          </ul>

          <Important>
            <p>
              Esta fórmula representa la potencia hidráulica ideal que el fluido recibe. 
              La potencia eléctrica o mecánica requerida por la bomba es mayor debido a las 
              pérdidas por fricción, choques y otras ineficiencias.
            </p>
          </Important>

          <Example>
            <p>
              Una bomba que mueve 50 litros/segundo (0.05 m³/s) de agua a 20 metros de altura 
              requiere P_hid = 1000 × 9.81 × 0.05 × 20 = 9,810 W = 9.81 kW de potencia hidráulica. 
              Si la eficiencia es 70%, la potencia real del motor sería 14.0 kW.
            </p>
          </Example>
        </Concept>

        <Concept title="Eficiencia de Bombas">
          <p>
            La eficiencia de una bomba relaciona la potencia hidráulica entregada al fluido 
            con la potencia consumida por la bomba:
          </p>

          <Formula 
            expression={String.raw`\eta = \frac{P_{hid}}{P_{entrada}} = \frac{\rho g Q H}{P_{entrada}}`} 
            calculatorId="eficiencia-bomba" 
            definitions={definitions} 
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>η: Eficiencia de la bomba (adimensional, 0-1)</li>
            <li>P_hid: Potencia hidráulica (W)</li>
            <li>P_entrada: Potencia de entrada (eléctrica o mecánica) (W)</li>
          </ul>

          <p>
            Eficiencias típicas:
          </p>
          <ul>
            <li>Bombas centrífugas pequeñas: 50-70%</li>
            <li>Bombas centrífugas grandes: 75-85%</li>
            <li>Bombas de desplazamiento positivo: 60-80%</li>
            <li>Bombas de alta eficiencia: hasta 90%</li>
          </ul>

          <Important>
            <p>
              La eficiencia varía con el punto de operación. Las bombas tienen un punto de 
              máxima eficiencia (BEP - Best Efficiency Point) que debe coincidir con el 
              punto de operación normal del sistema.
            </p>
          </Important>
        </Concept>

        <Concept title="Potencia Real de Bombeo">
          <p>
            La potencia real que consume una bomba incluye las pérdidas por ineficiencia:
          </p>

          <Formula 
            expression={String.raw`P_{entrada} = \frac{P_{hid}}{\eta} = \frac{\rho g Q H}{\eta}`} 
            calculatorId="potencia-real-bomba" 
            definitions={definitions} 
            exercises={exercises}
          />

          <p>
            Esta es la potencia que debe suministrar el motor eléctrico o la fuente de energía 
            mecánica. Es fundamental para dimensionar correctamente el motor y calcular el 
            consumo energético.
          </p>
        </Concept>

        <Concept title="Tipos de Bombas">
          <p>
            Existen dos categorías principales de bombas:
          </p>

          <p><strong>Bombas Centrífugas (Dinámicas):</strong></p>
          <ul>
            <li>Funcionan aumentando la velocidad del fluido mediante un impulsor rotatorio</li>
            <li>La energía cinética se convierte en presión</li>
            <li>Adecuadas para caudales altos y presiones moderadas</li>
            <li>Eficientes para aplicaciones de suministro de agua, riego, sistemas HVAC</li>
            <li>Curva característica: Caudal alto → Presión baja</li>
          </ul>

          <p><strong>Bombas de Desplazamiento Positivo:</strong></p>
          <ul>
            <li>Atrapan un volumen fijo de fluido y lo desplazan</li>
            <li>Pistón, engranajes, tornillo, diafragma</li>
            <li>Adecuadas para presiones altas y caudales bajos</li>
            <li>Eficientes para sistemas hidráulicos, dosificación, alta presión</li>
            <li>Característica: Caudal constante independiente de la presión</li>
          </ul>
        </Concept>

        <Concept title="Altura Manométrica Total">
          <p>
            La altura manométrica total H que debe vencer una bomba incluye:
          </p>
          <ul>
            <li>Altura estática: Diferencia de altura entre succión y descarga</li>
            <li>Pérdidas por fricción: En tuberías y accesorios</li>
            <li>Pérdidas menores: En válvulas, codos, etc.</li>
            <li>Presión requerida: Si hay presión en la descarga</li>
          </ul>
          <p>
            H = H_estática + H_fricción + H_presión
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Turbinas">
        <Concept title="Potencia de Turbina">
          <p>
            Las turbinas extraen energía del fluido y la convierten en trabajo mecánico. 
            La potencia generada depende del caudal, la altura disponible y la eficiencia:
          </p>

          <Formula 
            expression={String.raw`P_{turbina} = \eta \rho g Q H`} 
            calculatorId="turbinas" 
            definitions={definitions} 
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>P_turbina: Potencia generada por la turbina (W)</li>
            <li>η: Eficiencia de la turbina (adimensional)</li>
            <li>ρ: Densidad del fluido (kg/m³)</li>
            <li>Q: Caudal que pasa por la turbina (m³/s)</li>
            <li>H: Altura neta disponible (m)</li>
          </ul>

          <Important>
            <p>
              La altura neta H es la diferencia de altura menos las pérdidas en la conducción. 
              Para turbinas hidráulicas, H puede ser de decenas a cientos de metros.
            </p>
          </Important>

          <Example>
            <p>
              Una turbina hidráulica con eficiencia 85% aprovecha un salto de 50 m con un caudal 
              de 10 m³/s. La potencia generada es P = 0.85 × 1000 × 9.81 × 10 × 50 = 4,167 kW 
              = 4.17 MW.
            </p>
          </Example>
        </Concept>

        <Concept title="Tipos de Turbinas">
          <p>
            Las turbinas se clasifican según el tipo de flujo:
          </p>

          <p><strong>Turbinas de Reacción:</strong></p>
          <ul>
            <li>El fluido cambia de presión al pasar por la turbina</li>
            <li>Francis (media altura): 20-300 m, eficiencia 85-95%</li>
            <li>Kaplan (baja altura): {'<'} 20 m, eficiencia 85-95%</li>
            <li>Bulbo (muy baja altura): {'<'} 10 m</li>
          </ul>

          <p><strong>Turbinas de Impulso:</strong></p>
          <ul>
            <li>El fluido se expande en toberas antes de la turbina</li>
            <li>Pelton (alta altura): {'>'} 100 m, eficiencia 85-90%</li>
            <li>Turgo (alta altura): Similar a Pelton</li>
            <li>El fluido está a presión atmosférica en la turbina</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ventiladores y Compresores">
        <Concept title="Ventiladores">
          <p>
            Los ventiladores mueven aire o gases a baja presión. La potencia requerida es:
          </p>

          <Formula 
            expression={String.raw`P = \frac{Q \Delta P}{\eta}`} 
            calculatorId="ventiladores" 
            definitions={definitions} 
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>P: Potencia del ventilador (W)</li>
            <li>Q: Caudal volumétrico (m³/s)</li>
            <li>ΔP: Diferencia de presión (Pa)</li>
            <li>η: Eficiencia del ventilador (adimensional)</li>
          </ul>

          <p>
            Los ventiladores se usan en sistemas HVAC, ventilación industrial, túneles, 
            y aplicaciones donde se requiere mover grandes volúmenes de aire a baja presión.
          </p>
        </Concept>

        <Concept title="Compresores">
          <p>
            Los compresores aumentan significativamente la presión de gases. La potencia 
            depende del proceso (isotérmico, adiabático, politrópico):
          </p>
          <ul>
            <li>Compresión isotérmica: P = (Q × P₁ × ln(P₂/P₁)) / η</li>
            <li>Compresión adiabática: P = (Q × P₁ × γ/(γ-1) × [(P₂/P₁)^((γ-1)/γ) - 1]) / η</li>
            <li>Donde γ es la relación de calores específicos (≈1.4 para aire)</li>
          </ul>
          <p>
            Los compresores se usan en sistemas neumáticos, refrigeración, procesos químicos 
            y aplicaciones que requieren alta presión.
          </p>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>

        <div className="theory-subsection">
          <h3>Suministro de Agua Potable</h3>
          <p>
            Las bombas son esenciales en sistemas de suministro de agua:
          </p>
          <ul>
            <li>Bombas de pozo: Extraen agua desde acuíferos subterráneos</li>
            <li>Estaciones de bombeo: Elevan agua a tanques de almacenamiento</li>
            <li>Bombas de refuerzo: Mantienen presión en redes de distribución</li>
            <li>Bombas de alta capacidad: Hasta 10 m³/s en grandes ciudades</li>
            <li>Consumo energético: Puede representar 30-50% del costo operativo de una planta</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Generación Hidroeléctrica</h3>
          <p>
            Las turbinas hidráulicas generan electricidad:
          </p>
          <ul>
            <li>Centrales de embalse: Grandes presas con turbinas Francis o Kaplan</li>
            <li>Centrales de pasada: Aprovechan caudales de ríos</li>
            <li>Centrales de bombeo: Almacenan energía bombeando agua a embalses superiores</li>
            <li>Potencia típica: Desde 1 MW (pequeñas) hasta 700 MW (grandes turbinas)</li>
            <li>Eficiencia: 85-95%, una de las más altas en generación eléctrica</li>
          </ul>
          <p>
            La presa de las Tres Gargantas (China) tiene 32 turbinas de 700 MW cada una, 
            generando 22.5 GW en total.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Sistemas HVAC</h3>
          <p>
            Ventiladores y bombas en climatización:
          </p>
          <ul>
            <li>Ventiladores de techo: Circulación de aire en espacios</li>
            <li>Bombas de circulación: Mueven agua caliente/fría en sistemas centrales</li>
            <li>Unidades manejadoras de aire: Ventiladores de alta capacidad</li>
            <li>Torres de refrigeración: Ventiladores para enfriamiento evaporativo</li>
            <li>Optimización: Puede reducir consumo energético en 20-30%</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Industria Química y Petroquímica</h3>
          <p>
            Maquinaria de fluidos en procesos industriales:
          </p>
          <ul>
            <li>Bombas de proceso: Mueven productos químicos, petróleo, productos refinados</li>
            <li>Compresores: Comprimen gases para reacciones químicas</li>
            <li>Bombas de alta presión: Hasta 1000 bar en procesos especiales</li>
            <li>Bombas criogénicas: Para líquidos a muy baja temperatura</li>
            <li>Materiales especiales: Acero inoxidable, aleaciones resistentes a corrosión</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Riego Agrícola</h3>
          <p>
            Bombas en sistemas de riego:
          </p>
          <ul>
            <li>Bombas de pozo: Extraen agua para riego</li>
            <li>Bombas de refuerzo: Aumentan presión en sistemas de aspersión</li>
            <li>Bombas solares: Alimentadas por paneles fotovoltaicos</li>
            <li>Eficiencia energética: Crítica para reducir costos operativos</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Energía Eólica</h3>
          <p>
            Aunque no son máquinas de fluidos tradicionales, las turbinas eólicas:
          </p>
          <ul>
            <li>Extraen energía cinética del viento</li>
            <li>Potencia: P = 0.5 × ρ × A × v³ × C_p (donde C_p es coeficiente de potencia)</li>
            <li>Eficiencia máxima teórica (límite de Betz): 59.3%</li>
            <li>Eficiencia práctica: 35-45%</li>
            <li>Turbinas modernas: Hasta 15 MW de potencia nominal</li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De las ruedas hidráulicas a las turbinas modernas
        </h2>

        <div className="theory-subsection">
          <h3>Ruedas Hidráulicas Antiguas (2000 a.C. - 1800 d.C.)</h3>
          <p>
            Las primeras máquinas de fluidos fueron ruedas hidráulicas usadas para moler grano 
            y otras tareas. Los romanos desarrollaron ruedas hidráulicas sofisticadas que 
            podían generar varios caballos de fuerza.
          </p>
          <p>
            Durante la Revolución Industrial, las ruedas hidráulicas fueron fundamentales para 
            la industria textil y metalúrgica, proporcionando potencia mecánica antes de la 
            máquina de vapor.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Primeras Bombas (1500s-1700s)</h3>
          <p>
            Leonardo da Vinci diseñó bombas de tornillo y otros dispositivos. En 1588, 
            Agostino Ramelli publicó "Le Diverse et Artificiose Machine" con diseños de 
            bombas de pistón.
          </p>
          <p>
            Las primeras bombas centrífugas fueron desarrolladas en el siglo XVII, pero 
            no se popularizaron hasta el siglo XIX con el desarrollo de motores eléctricos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Desarrollo de Turbinas Modernas (1800s)</h3>
          <p>
            Benoît Fourneyron desarrolló la primera turbina de reacción en 1827, con eficiencia 
            del 80%. En 1849, James B. Francis mejoró el diseño creando la turbina Francis, 
            que sigue siendo ampliamente usada hoy.
          </p>
          <p>
            En 1913, Viktor Kaplan desarrolló la turbina Kaplan para bajas alturas, revolucionando 
            la generación hidroeléctrica en ríos de llanura.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Era de la Electricidad (1880s-1900s)</h3>
          <p>
            El desarrollo de generadores eléctricos permitió convertir la potencia de turbinas 
            en electricidad. La primera central hidroeléctrica comercial fue en Appleton, 
            Wisconsin (1882), generando 12.5 kW.
          </p>
          <p>
            Las centrales hidroeléctricas crecieron rápidamente, siendo fundamentales para la 
            electrificación de ciudades y la industria.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Optimización Moderna (1900s-presente)</h3>
          <p>
            El siglo XX vio mejoras continuas en eficiencia y diseño:
          </p>
          <ul>
            <li>Análisis computacional (CFD) para optimización de diseño</li>
            <li>Materiales avanzados: Aceros especiales, composites</li>
            <li>Control variable: Velocidad ajustable para máxima eficiencia</li>
            <li>Bombas inteligentes: Con sensores y control automático</li>
            <li>Eficiencias récord: Turbinas hasta 95%, bombas hasta 90%</li>
          </ul>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>La Bomba de Arquímedes</h3>
          <p>
            Aunque atribuida a Arquímedes (287-212 a.C.), la bomba de tornillo probablemente 
            fue desarrollada antes. Consiste en un tornillo dentro de un tubo que eleva agua 
            al girar. Sigue usándose hoy en aplicaciones agrícolas y de drenaje.
          </p>
          <p>
            Una bomba de tornillo puede elevar agua hasta 8 metros de altura, dependiendo 
            del ángulo y diámetro del tornillo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Turbina de las Tres Gargantas</h3>
          <p>
            La presa de las Tres Gargantas en China tiene las turbinas más grandes del mundo: 
            32 turbinas de 700 MW cada una. Cada turbina pesa 6,000 toneladas y tiene un 
            rotor de 10 metros de diámetro. Generan suficiente electricidad para abastecer 
            a millones de hogares.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Récord de Eficiencia</h3>
          <p>
            Las turbinas hidráulicas modernas alcanzan eficiencias del 90-95%, entre las más 
            altas de cualquier máquina de conversión de energía. Esto se debe a que el agua 
            es incompresible y las pérdidas son principalmente por fricción, que se han 
            minimizado con diseño optimizado.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Bombas Solares para Riego</h3>
          <p>
            En regiones sin acceso a la red eléctrica, las bombas solares están revolucionando 
            la agricultura. Paneles fotovoltaicos alimentan bombas que extraen agua de pozos, 
            permitiendo riego durante el día sin necesidad de combustible. El costo inicial 
            se recupera en 3-5 años.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Crisis de las Bombas en el Espacio</h3>
          <p>
            En la Estación Espacial Internacional, las bombas deben funcionar en microgravedad, 
            donde no hay "arriba" o "abajo". Se usan bombas centrífugas especiales que no 
            dependen de la gravedad para funcionar. El diseño es crítico porque un fallo puede 
            comprometer sistemas vitales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Bombas de Alta Presión para Corte por Agua</h3>
          <p>
            Las bombas de ultra-alta presión pueden generar hasta 6,000 bar (87,000 psi), 
            suficiente para cortar acero, hormigón y otros materiales con un chorro de agua. 
            Estas bombas usan intensificadores hidráulicos que multiplican la presión mediante 
            la relación de áreas de pistones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Efecto de la Cavitación</h3>
          <p>
            La cavitación ocurre cuando la presión cae por debajo de la presión de vapor, 
            formando burbujas que colapsan violentamente. Puede dañar seriamente las bombas, 
            causando erosión y reduciendo la eficiencia. El diseño de bombas modernas incluye 
            análisis de cavitación para evitarla.
          </p>
        </div>
      </div>

      <div className="theory-section-highlight">
        <h2>📝 Resumen</h2>
        <p>
          La maquinaria de fluidos intercambia energía con fluidos. Las bombas añaden energía 
          (P_hid = ρgQH), mientras que las turbinas extraen energía (P = ηρgQH). La potencia 
          hidráulica ideal depende del caudal, altura y densidad del fluido.
        </p>
        <p>
          La eficiencia relaciona la potencia útil con la potencia consumida: η = P_hid / P_entrada. 
          Las bombas tienen eficiencias típicas de 50-90%, mientras que las turbinas hidráulicas 
          alcanzan 85-95%. La potencia real de entrada es mayor que la hidráulica debido a las 
          pérdidas por fricción y otras ineficiencias.
        </p>
        <p>
          Existen dos tipos principales de bombas: centrífugas (caudales altos, presiones moderadas) 
          y de desplazamiento positivo (presiones altas, caudales bajos). Las turbinas se clasifican 
          en de reacción (Francis, Kaplan) y de impulso (Pelton).
        </p>
        <p>
          Los ventiladores mueven aire a baja presión (P = QΔP/η), mientras que los compresores 
          aumentan significativamente la presión de gases. Estas máquinas son fundamentales en 
          suministro de agua, generación eléctrica, HVAC, procesos industriales y muchas otras 
          aplicaciones.
        </p>
      </div>
    </>
  );
};

export default Theory;
