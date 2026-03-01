import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as manometriaDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Manometría",
  descripcion: "Medición de presión con manómetros",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a la Manometría">
        <p>
          La manometría es la técnica de medición de presión utilizando columnas de líquido. 
          Los manómetros son instrumentos que aprovechan la presión hidrostática para medir diferencias 
          de presión de manera precisa y confiable. Estos dispositivos han sido fundamentales en el 
          desarrollo de la ciencia y la ingeniería desde el siglo XVII.
        </p>
        <p>
          El principio básico de la manometría se basa en que la presión en un fluido en reposo aumenta 
          linealmente con la profundidad. Al conectar un tubo con líquido a un sistema presurizado, la 
          diferencia de altura de las columnas de líquido es directamente proporcional a la diferencia 
          de presión. Esta relación simple pero poderosa permite mediciones precisas sin necesidad de 
          componentes electrónicos.
        </p>
      </TheorySection>

      <TheorySection title="Manómetro de Tubo en U">
        <Concept title="Principio de Funcionamiento">
          <p>
            El manómetro de tubo en U es el dispositivo más simple y fundamental para medir diferencias 
            de presión. Consiste en un tubo transparente doblado en forma de U que contiene un líquido 
            manométrico, generalmente mercurio o agua coloreada. Cuando se aplican presiones diferentes 
            en ambos extremos del tubo, el líquido se desplaza hasta que las presiones se equilibran.
          </p>
          
          <Formula
            expression={String.raw`\Delta P = \rho_{man} g h`}
            calculatorId="manometro-u"
            definitions={manometriaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Altura", expression: String.raw`h = \frac{\Delta P}{\rho_{man} g}` },
              { description: "Calcular Densidad", expression: String.raw`\rho_{man} = \frac{\Delta P}{g h}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>ΔP: Diferencia de presión (Pa)</li>
            <li>ρ_man: Densidad del líquido manométrico (kg/m³)</li>
            <li>g: Aceleración gravitacional (9.81 m/s²)</li>
            <li>h: Diferencia de altura entre las columnas (m)</li>
          </ul>

          <Important>
            <p>
              El mercurio (ρ = 13,600 kg/m³) es el líquido manométrico más común debido a su alta 
              densidad, lo que permite mediciones precisas con columnas más cortas. Sin embargo, por 
              su toxicidad, en aplicaciones modernas se prefieren líquidos alternativos como aceites 
              especiales o agua coloreada para presiones bajas.
            </p>
          </Important>

          <Example>
            <p>
              Un manómetro de mercurio muestra una diferencia de altura de 50 mm. La diferencia de 
              presión es ΔP = 13,600 × 9.81 × 0.05 = 6,668 Pa ≈ 6.67 kPa. Si se usara agua en lugar 
              de mercurio, se necesitaría una columna de 680 mm para medir la misma presión.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Presión en mmHg y Conversiones">
        <Concept title="Unidad mmHg (Torr)">
          <p>
            La presión atmosférica se mide tradicionalmente en milímetros de mercurio (mmHg), también 
            conocida como torr en honor a Evangelista Torricelli. Esta unidad se basa en la altura de 
            una columna de mercurio que equilibra la presión atmosférica. A nivel del mar, la presión 
            atmosférica estándar sostiene una columna de mercurio de exactamente 760 mm de altura.
          </p>

          <Formula
            expression={String.raw`P = \rho_{Hg} g h`}
            calculatorId="columna-mercurio"
            definitions={manometriaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Altura en mm", expression: String.raw`h_{mm} = \frac{P}{\rho_{Hg} g} \times 1000` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>P: Presión (Pa)</li>
            <li>ρ_Hg: Densidad del mercurio = 13,600 kg/m³</li>
            <li>g: Aceleración gravitacional (9.81 m/s²)</li>
            <li>h: Altura de la columna de mercurio (m)</li>
          </ul>

          <p>Conversiones importantes:</p>
          <ul>
            <li>1 atm = 760 mmHg = 101,325 Pa = 101.325 kPa</li>
            <li>1 mmHg = 133.322 Pa</li>
            <li>1 torr = 1 mmHg (definición exacta)</li>
            <li>1 bar = 750.06 mmHg</li>
          </ul>

          <Important>
            <p>
              La unidad mmHg es especialmente común en medicina para medir presión arterial. Una presión 
              arterial de "120/80" significa 120 mmHg de presión sistólica y 80 mmHg de presión diastólica. 
              En meteorología, aunque el Sistema Internacional usa hectopascales (hPa), muchos países aún 
              reportan la presión atmosférica en mmHg o pulgadas de mercurio.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Tipos de Manómetros">
        <Concept title="Clasificación según Configuración">
          <p>Manómetro de tubo abierto:</p>
          <ul>
            <li>Un extremo conectado al sistema, otro abierto a la atmósfera</li>
            <li>Mide presión manométrica (relativa a la atmosférica)</li>
            <li>Útil para presiones cercanas a la atmosférica</li>
            <li>Lectura directa: P_sistema = P_atm + ρgh</li>
          </ul>

          <p>Manómetro diferencial:</p>
          <ul>
            <li>Ambos extremos conectados a diferentes puntos del sistema</li>
            <li>Mide diferencia de presión entre dos puntos</li>
            <li>Útil en tuberías y sistemas de flujo</li>
            <li>Permite medir caídas de presión en filtros, válvulas, etc.</li>
          </ul>

          <Formula
            expression={String.raw`\Delta P = (\rho_1 - \rho_2) g h`}
            calculatorId="presion-diferencial"
            definitions={manometriaDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>ΔP: Diferencia de presión entre dos puntos (Pa)</li>
            <li>ρ_1: Densidad del fluido en el punto 1 (kg/m³)</li>
            <li>ρ_2: Densidad del fluido en el punto 2 (kg/m³)</li>
            <li>h: Diferencia de altura en el manómetro (m)</li>
          </ul>

          <p>Barómetro de mercurio:</p>
          <ul>
            <li>Tubo cerrado en un extremo, sumergido en mercurio</li>
            <li>Mide presión atmosférica absoluta</li>
            <li>Altura estándar: 760 mm a nivel del mar (1 atm)</li>
            <li>El espacio sobre el mercurio es vacío (presión ≈ 0)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Selección del Líquido Manométrico">
        <Concept title="Criterios de Selección">
          <p>
            La elección del líquido manométrico depende del rango de presión a medir y las características 
            del sistema. Los líquidos más comunes son:
          </p>

          <p>Mercurio (ρ = 13,600 kg/m³):</p>
          <ul>
            <li>Ventajas: Alta densidad permite columnas cortas, no moja el vidrio, baja presión de vapor</li>
            <li>Desventajas: Tóxico, costoso, requiere manejo especial</li>
            <li>Aplicaciones: Barómetros, mediciones de alta presión, laboratorios</li>
          </ul>

          <p>Agua (ρ = 1,000 kg/m³):</p>
          <ul>
            <li>Ventajas: No tóxica, económica, fácil de obtener</li>
            <li>Desventajas: Requiere columnas largas, puede evaporarse, moja el vidrio</li>
            <li>Aplicaciones: Mediciones de baja presión, sistemas HVAC, laboratorios educativos</li>
          </ul>

          <p>Aceites especiales (ρ = 800-900 kg/m³):</p>
          <ul>
            <li>Ventajas: No tóxicos, baja presión de vapor, buena visibilidad con colorantes</li>
            <li>Desventajas: Sensibles a temperatura, pueden degradarse</li>
            <li>Aplicaciones: Manómetros industriales modernos, reemplazo del mercurio</li>
          </ul>

          <Important>
            <p>
              Para presiones muy bajas (menos de 1 kPa), se prefiere agua o aceites ligeros que producen 
              columnas más altas y lecturas más precisas. Para presiones altas (más de 100 kPa), el mercurio 
              es ideal porque mantiene las columnas en un tamaño manejable.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Precisión y Fuentes de Error">
        <Concept title="Factores que Afectan la Medición">
          <p>
            Aunque los manómetros son instrumentos precisos, varios factores pueden afectar la exactitud 
            de las mediciones:
          </p>

          <p>Temperatura:</p>
          <ul>
            <li>La densidad del líquido manométrico varía con la temperatura</li>
            <li>El mercurio cambia 0.018% por cada °C</li>
            <li>Las mediciones precisas requieren corrección por temperatura</li>
          </ul>

          <p>Capilaridad:</p>
          <ul>
            <li>El menisco del líquido puede afectar la lectura</li>
            <li>El mercurio forma menisco convexo, el agua cóncavo</li>
            <li>Se debe leer siempre en el mismo punto del menisco</li>
            <li>Tubos de mayor diámetro (&gt;10 mm) minimizan este efecto</li>
          </ul>

          <p>Gravedad local:</p>
          <ul>
            <li>La aceleración gravitacional varía con la latitud y altitud</li>
            <li>g = 9.78 m/s² en el ecuador, 9.83 m/s² en los polos</li>
            <li>Para mediciones de alta precisión se debe usar el valor local de g</li>
          </ul>

          <p>Presión de vapor:</p>
          <ul>
            <li>El líquido manométrico puede evaporarse en el espacio cerrado</li>
            <li>El mercurio tiene presión de vapor muy baja (0.0002 mmHg a 20°C)</li>
            <li>El agua requiere corrección significativa en barómetros</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Manómetros Modernos">
        <Concept title="Evolución Tecnológica">
          <p>
            Aunque los manómetros de columna líquida siguen siendo estándares de calibración, la tecnología 
            moderna ha desarrollado alternativas electrónicas:
          </p>

          <p>Manómetros digitales:</p>
          <ul>
            <li>Usan sensores piezoeléctricos o de capacitancia</li>
            <li>Lectura digital directa, sin interpretación de escalas</li>
            <li>Pueden registrar y transmitir datos automáticamente</li>
            <li>Más compactos y resistentes que los de columna líquida</li>
          </ul>

          <p>Manómetros de Bourdon:</p>
          <ul>
            <li>Tubo metálico curvo que se endereza con la presión</li>
            <li>Lectura mecánica mediante aguja y escala</li>
            <li>Muy robustos, usados en industria y vehículos</li>
            <li>No requieren líquidos ni energía eléctrica</li>
          </ul>

          <p>
            Sin embargo, los manómetros de columna líquida siguen siendo insustituibles como patrones de 
            calibración debido a su principio físico fundamental y su alta precisión. Los laboratorios 
            nacionales de metrología usan manómetros de mercurio como estándares primarios de presión.
          </p>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>Medicina: Medición de Presión Arterial</h3>
          <p>
            El esfigmomanómetro, inventado por Scipione Riva-Rocci en 1896, es un manómetro de mercurio 
            o aneroide usado para medir la presión arterial. El brazalete inflable comprime la arteria 
            braquial mientras el médico escucha con un estetoscopio los sonidos de Korotkoff. La presión 
            sistólica (cuando el corazón se contrae) y diastólica (cuando se relaja) se leen directamente 
            en mmHg. Una presión normal es aproximadamente 120/80 mmHg. Aunque los dispositivos digitales 
            son ahora comunes, los manómetros de mercurio siguen siendo el estándar de oro en hospitales 
            por su precisión y confiabilidad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Meteorología: Predicción del Tiempo</h3>
          <p>
            Los barómetros de mercurio miden la presión atmosférica, fundamental para la predicción 
            meteorológica. Una presión descendente indica mal tiempo (tormentas, lluvia), mientras que 
            una presión ascendente sugiere buen tiempo. La presión atmosférica estándar a nivel del mar 
            es 760 mmHg (1013.25 hPa). En la cima del Monte Everest (8,848 m), la presión es solo 253 mmHg, 
            un tercio de la presión al nivel del mar. Las estaciones meteorológicas modernas usan barómetros 
            aneroides o digitales, pero los de mercurio siguen siendo referencias de calibración.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Industria: Control de Procesos</h3>
          <p>
            Los manómetros diferenciales monitorean caídas de presión en filtros, válvulas y tuberías. 
            En plantas químicas, refinerías y sistemas de tratamiento de agua, estos instrumentos detectan 
            obstrucciones o fallos en equipos. Por ejemplo, un aumento en la caída de presión a través de 
            un filtro indica que está saturado y necesita limpieza o reemplazo. En sistemas de aire 
            comprimido, los manómetros aseguran que la presión se mantenga en rangos seguros y eficientes. 
            Los manómetros de tubo en U con aceite son comunes en HVAC para medir presiones de ventiladores 
            y flujo de aire.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Laboratorios: Mediciones de Precisión</h3>
          <p>
            En laboratorios de investigación y calibración, los manómetros de mercurio son estándares 
            primarios de presión. Los manómetros de peso muerto (deadweight testers) usan masas calibradas 
            sobre un pistón para generar presiones conocidas con precisión de 0.01%. Estos instrumentos 
            calibran manómetros industriales y sensores de presión. En química, los manómetros miden 
            presiones de vapor, vacío en sistemas de destilación y presiones en reacciones. Los laboratorios 
            de física usan manómetros para experimentos de mecánica de fluidos y termodinámica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Aviación: Altímetros</h3>
          <p>
            Los altímetros de aviones son esencialmente barómetros calibrados para mostrar altitud en lugar 
            de presión. Funcionan bajo el principio de que la presión atmosférica disminuye con la altura 
            aproximadamente 12 Pa por metro cerca del nivel del mar. Los pilotos ajustan el altímetro a la 
            presión local antes del despegue. A 3,000 metros de altitud, la presión es aproximadamente 
            700 mmHg. Los altímetros modernos son digitales, pero el principio manométrico sigue siendo 
            fundamental. La precisión es crítica: un error de 1 mmHg en la lectura equivale a 11 metros 
            de error en altitud.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Automoción: Medición de Presión de Neumáticos</h3>
          <p>
            Los manómetros de neumáticos, generalmente de tipo Bourdon, miden la presión de inflado de 
            las llantas. La presión típica es 30-35 psi (207-241 kPa o 2.1-2.4 bar). Una presión incorrecta 
            afecta el consumo de combustible, el desgaste de neumáticos y la seguridad. Los sistemas TPMS 
            (Tire Pressure Monitoring System) modernos usan sensores electrónicos que alertan al conductor 
            cuando la presión es baja. Sin embargo, los manómetros mecánicos portátiles siguen siendo 
            herramientas esenciales para verificación manual.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Buceo: Manómetros de Profundidad</h3>
          <p>
            Los buceadores usan manómetros para monitorear la presión del tanque de aire y profundímetros 
            (manómetros de presión hidrostática) para conocer su profundidad. La presión aumenta 1 atmósfera 
            (760 mmHg) por cada 10 metros de profundidad en agua. A 30 metros, un buceador experimenta 
            4 atmósferas de presión absoluta. Los manómetros de tanque muestran la presión del aire 
            comprimido, típicamente 200 bar (2900 psi) cuando está lleno. Los computadores de buceo modernos 
            integran sensores de presión digitales, pero los manómetros analógicos siguen siendo equipos 
            de respaldo esenciales por su confiabilidad.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De Torricelli a los Sensores Modernos
        </h2>
        
        <div className="theory-subsection">
          <h3>Evangelista Torricelli y el Primer Barómetro (1643)</h3>
          <p>
            Evangelista Torricelli, discípulo de Galileo, inventó el barómetro de mercurio en 1643. 
            Llenó un tubo de vidrio de 1 metro de largo con mercurio, lo invirtió en un recipiente con 
            mercurio y observó que la columna descendía hasta aproximadamente 760 mm, dejando un espacio 
            vacío en la parte superior (el primer vacío artificial creado por el hombre). Torricelli 
            concluyó correctamente que la presión atmosférica sostenía la columna de mercurio. Este 
            experimento revolucionó la comprensión de la presión atmosférica y demostró que el aire tiene 
            peso. La unidad "torr" (1 torr = 1 mmHg) honra su nombre.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Blaise Pascal y la Presión Atmosférica (1648)</h3>
          <p>
            Blaise Pascal, intrigado por el trabajo de Torricelli, realizó un experimento crucial en 1648. 
            Pidió a su cuñado Florin Périer que llevara un barómetro a la cima del Puy de Dôme (1,465 m) 
            en Francia. La columna de mercurio descendió de 760 mm a 660 mm, demostrando que la presión 
            atmosférica disminuye con la altitud. Este experimento confirmó que la atmósfera tiene un peso 
            finito y estableció las bases de la meteorología moderna. Pascal también desarrolló el principio 
            que lleva su nombre: la presión aplicada a un fluido confinado se transmite uniformemente en 
            todas direcciones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Desarrollo del Manómetro de Tubo en U (Siglo XVIII)</h3>
          <p>
            Durante el siglo XVIII, los científicos desarrollaron el manómetro de tubo en U para medir 
            presiones en sistemas cerrados. Estos instrumentos fueron cruciales para el desarrollo de las 
            máquinas de vapor. James Watt usó manómetros para optimizar sus motores de vapor en la década 
            de 1770. Los manómetros permitieron medir y controlar la presión del vapor, mejorando 
            significativamente la eficiencia y seguridad de las máquinas. Sin estos instrumentos, la 
            Revolución Industrial habría sido imposible.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Eugène Bourdon y el Manómetro Metálico (1849)</h3>
          <p>
            En 1849, el ingeniero francés Eugène Bourdon inventó el manómetro de tubo Bourdon, un tubo 
            metálico curvo que se endereza cuando aumenta la presión interna. Este diseño revolucionó la 
            medición de presión porque era compacto, robusto y no requería líquidos. Los manómetros Bourdon 
            se convirtieron en estándar en locomotoras, calderas industriales y sistemas hidráulicos. Hoy 
            en día, más del 90% de los manómetros industriales son de tipo Bourdon. El diseño básico ha 
            permanecido prácticamente sin cambios durante 175 años, testimonio de su brillantez.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Scipione Riva-Rocci y la Presión Arterial (1896)</h3>
          <p>
            El médico italiano Scipione Riva-Rocci inventó el esfigmomanómetro moderno en 1896. Su diseño 
            usaba un brazalete inflable conectado a un manómetro de mercurio para medir la presión arterial 
            de manera no invasiva. Antes de esto, la presión arterial solo podía medirse insertando agujas 
            directamente en las arterias. En 1905, el médico ruso Nikolai Korotkoff descubrió que usando 
            un estetoscopio se podían escuchar sonidos característicos que indicaban las presiones sistólica 
            y diastólica. Esta técnica, llamada método auscultatorio, sigue siendo el estándar en medicina.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Sensores Electrónicos de Presión (Siglo XX)</h3>
          <p>
            El desarrollo de sensores piezoeléctricos en la década de 1950 y sensores de capacitancia en 
            los 1970s revolucionó la medición de presión. Estos dispositivos convierten la presión en 
            señales eléctricas que pueden ser procesadas, registradas y transmitidas digitalmente. Los 
            sensores MEMS (Micro-Electro-Mechanical Systems) modernos, desarrollados en los 1980s, son 
            microscópicos y extremadamente precisos. Sin embargo, los manómetros de mercurio siguen siendo 
            estándares de calibración en laboratorios nacionales de metrología debido a su principio físico 
            fundamental y su precisión inherente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Eliminación del Mercurio (Siglo XXI)</h3>
          <p>
            Debido a la toxicidad del mercurio, muchos países han prohibido o restringido su uso en 
            instrumentos médicos e industriales. La Convención de Minamata de 2013 busca eliminar 
            gradualmente el mercurio de productos comerciales. Los esfigmomanómetros de mercurio están 
            siendo reemplazados por dispositivos aneroides y digitales. Sin embargo, esta transición 
            presenta desafíos: los manómetros de mercurio son más precisos y confiables que muchas 
            alternativas. Los laboratorios de metrología buscan desarrollar estándares de presión sin 
            mercurio que mantengan la misma precisión.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>El Experimento de Magdeburgo (1654)</h3>
          <p>
            Otto von Guericke, alcalde de Magdeburgo, realizó una demostración espectacular del poder de 
            la presión atmosférica en 1654. Creó dos hemisferios de cobre de 50 cm de diámetro, los unió 
            y extrajo el aire con una bomba de vacío que él mismo había inventado. Luego, enganchó 8 caballos 
            a cada hemisferio tirando en direcciones opuestas. Los caballos no pudieron separar los hemisferios. 
            La presión atmosférica (1 atm sobre un área de 0.2 m²) generaba una fuerza de aproximadamente 
            20,000 N (2 toneladas). Cuando se permitió que entrara aire, los hemisferios se separaron 
            fácilmente. Esta demostración dramática convenció a los escépticos de que el vacío existe y 
            que la atmósfera ejerce presión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Barómetro Más Alto del Mundo</h3>
          <p>
            El barómetro de mercurio más alto jamás construido está en el Museo de Ciencias de Londres. 
            Mide 12 metros de altura y fue construido en 1810 para demostrar que la presión atmosférica 
            podía sostener una columna de agua de aproximadamente 10.3 metros (equivalente a 760 mm de 
            mercurio, ya que el mercurio es 13.6 veces más denso que el agua). Este barómetro gigante 
            funcionó durante décadas antes de ser retirado por razones de seguridad. Hoy es una pieza 
            de museo que ilustra dramáticamente el principio de Torricelli.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Presión Arterial de las Jirafas</h3>
          <p>
            Las jirafas tienen la presión arterial más alta de todos los mamíferos: aproximadamente 280/180 
            mmHg, casi el doble que los humanos (120/80 mmHg). Necesitan esta presión extrema para bombear 
            sangre hasta su cerebro, que está 2-3 metros por encima del corazón. Si una jirafa baja la 
            cabeza rápidamente para beber, válvulas especiales en las venas del cuello previenen que la 
            sangre fluya demasiado rápido al cerebro. Los veterinarios usan esfigmomanómetros especiales 
            con brazaletes extra largos para medir la presión arterial de las jirafas, un desafío técnico 
            considerable.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Récord de Buceo en Apnea</h3>
          <p>
            Herbert Nitsch ostenta el récord mundial de buceo en apnea (sin equipo de respiración) a 214 
            metros de profundidad, alcanzado en 2007. A esa profundidad, la presión es de aproximadamente 
            22 atmósferas (16,720 mmHg), más de 20 veces la presión atmosférica. Los pulmones de Nitsch 
            se comprimieron al tamaño de naranjas. El cuerpo humano puede soportar estas presiones extremas 
            porque los tejidos y fluidos son incompresibles, pero los espacios llenos de aire (pulmones, 
            oídos, senos) sufren compresión severa. Los buceadores de apnea entrenan durante años para 
            adaptar sus cuerpos a estas condiciones extremas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Tormenta de Presión Más Baja Registrada</h3>
          <p>
            El tifón Tip en 1979 registró la presión atmosférica más baja jamás medida: 870 hPa (652.5 mmHg), 
            más de 100 mmHg por debajo de la presión normal. Esta presión extremadamente baja generó vientos 
            de 305 km/h. Los barómetros en barcos cercanos mostraron caídas de presión tan rápidas que los 
            marineros pensaron que los instrumentos estaban rotos. La diferencia de presión entre el centro 
            del tifón y el aire circundante creó una fuerza ascendente masiva que alimentó la tormenta. 
            Este evento demostró la importancia de la medición precisa de presión para la predicción y 
            seguimiento de fenómenos meteorológicos extremos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Manómetro en el Espacio</h3>
          <p>
            Los astronautas en la Estación Espacial Internacional usan manómetros para monitorear la presión 
            de la cabina, mantenida a aproximadamente 760 mmHg (1 atm) para simular condiciones terrestres. 
            Sin embargo, los manómetros de columna líquida no funcionan en microgravedad porque no hay 
            "arriba" ni "abajo". En su lugar, se usan sensores electrónicos de presión. Durante las caminatas 
            espaciales, los trajes presurizados mantienen 0.3 atm (228 mmHg) de oxígeno puro, suficiente 
            para respirar pero lo bastante bajo para permitir movilidad. Los manómetros en los trajes son 
            críticos para la seguridad: una pérdida de presión puede ser fatal en minutos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Misterio del Mal de Altura</h3>
          <p>
            En la cima del Monte Everest (8,848 m), la presión atmosférica es solo 253 mmHg, un tercio de 
            la presión al nivel del mar. A esta presión, el oxígeno disponible es insuficiente para sostener 
            la vida humana por períodos prolongados. Los alpinistas experimentan el "mal de altura": dolor 
            de cabeza, náuseas, confusión y edema cerebral o pulmonar potencialmente fatal. Los barómetros 
            portátiles ayudan a los alpinistas a monitorear su ascenso y aclimatación. Curiosamente, algunas 
            personas viven permanentemente a altitudes de 5,000 m (presión ~400 mmHg) en los Andes y el 
            Himalaya, con adaptaciones fisiológicas que incluyen mayor capacidad pulmonar y más glóbulos rojos.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            Los manómetros miden presión usando columnas de líquido basándose en el principio ΔP = ρgh.
          </li>
          <li>
            El manómetro de tubo en U es el dispositivo más simple, con un extremo abierto o ambos conectados 
            a puntos de presión diferentes.
          </li>
          <li>
            El mercurio (ρ = 13,600 kg/m³) es el líquido manométrico más común por su alta densidad, pero 
            está siendo reemplazado por alternativas no tóxicas.
          </li>
          <li>
            La unidad mmHg (torr) se basa en la altura de una columna de mercurio: 1 atm = 760 mmHg = 101,325 Pa.
          </li>
          <li>
            Los manómetros diferenciales miden diferencias de presión entre dos puntos usando ΔP = (ρ₁ - ρ₂)gh.
          </li>
          <li>
            Los barómetros de mercurio miden presión atmosférica absoluta con un extremo del tubo cerrado 
            al vacío.
          </li>
          <li>
            La precisión de los manómetros depende de temperatura, capilaridad, gravedad local y presión 
            de vapor del líquido.
          </li>
          <li>
            Aunque existen alternativas electrónicas, los manómetros de columna líquida siguen siendo 
            estándares de calibración por su precisión fundamental.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Theory;
