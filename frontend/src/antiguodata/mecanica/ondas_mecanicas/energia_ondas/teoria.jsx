import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Energía de Ondas",
  descripcion: "Transporte de energía por ondas mecánicas",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Energía en Ondas Mecánicas">
        <Concept title="Transporte de Energía">
          <p>
            Las ondas transportan energía sin transportar materia. Cuando una onda se propaga por un medio, 
            las partículas oscilan transfiriendo energía de una a otra. La energía total de la onda es la 
            suma de energía cinética (movimiento de las partículas) y energía potencial (deformación del medio).
          </p>
          <Important>
            La energía transportada por una onda es proporcional al cuadrado de la amplitud (E ∝ A²) y 
            al cuadrado de la frecuencia (E ∝ f²).
          </Important>
        </Concept>

        <Concept title="Potencia de una Onda">
          <p>
            La potencia transmitida por una onda en una cuerda depende de la amplitud, frecuencia angular 
            y propiedades del medio:
          </p>
          <Formula
            expression={String.raw`P = \frac{1}{2}\mu\omega^2A^2v`}
            calculatorId="ondas-potencia"
            definitions={definitions}
            exercises={exercises}
          />
          
          <p>Donde:</p>
          <ul>
            <li>P: Potencia (W)</li>
            <li>μ: Densidad lineal de la cuerda (kg/m)</li>
            <li>ω: Frecuencia angular (rad/s)</li>
            <li>A: Amplitud (m)</li>
            <li>v: Velocidad de propagación (m/s)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Intensidad de Onda">
        <Concept title="Definición de Intensidad">
          <p>
            La intensidad (I) es la potencia por unidad de área perpendicular a la dirección de propagación. 
            Mide cuánta energía atraviesa una superficie por unidad de tiempo y área.
          </p>
          <Formula
            expression={String.raw`I = \frac{P}{A}`}
            calculatorId="ondas-intensidad"
            definitions={definitions}
            exercises={exercises}
          />
          
          <p>Donde:</p>
          <ul>
            <li>I: Intensidad (W/m²)</li>
            <li>P: Potencia (W)</li>
            <li>A: Área (m²)</li>
          </ul>

          <p>
            Para ondas sonoras en tres dimensiones, la intensidad también puede expresarse como:
          </p>
          <Formula
            expression={String.raw`I = \frac{1}{2}\rho v \omega^2 A^2`}
            calculatorId="ondas-intensidad-sonora"
            definitions={definitions}
            exercises={exercises}
          />
          
          <p>Donde:</p>
          <ul>
            <li>ρ: Densidad del medio (kg/m³)</li>
            <li>v: Velocidad del sonido (m/s)</li>
            <li>ω: Frecuencia angular (rad/s)</li>
            <li>A: Amplitud de oscilación (m)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Nivel de Intensidad Sonora (Decibelios)">
        <Concept title="Escala Logarítmica">
          <p>
            El oído humano percibe intensidades sonoras en un rango enorme: desde 10⁻¹² W/m² (umbral de 
            audición) hasta 1 W/m² (umbral de dolor). Para manejar este rango, se usa una escala logarítmica: 
            el decibelio (dB).
          </p>
          <Formula
            expression={String.raw`\beta = 10 \log_{10}\left(\frac{I}{I_0}\right)`}
            calculatorId="ondas-decibelios"
            definitions={definitions}
            exercises={exercises}
          />
          
          <p>Donde:</p>
          <ul>
            <li>β: Nivel de intensidad sonora (dB)</li>
            <li>I: Intensidad de la onda (W/m²)</li>
            <li>I₀: Intensidad de referencia = 10⁻¹² W/m² (umbral de audición)</li>
          </ul>

          <Important>
            Cada aumento de 10 dB representa una intensidad 10 veces mayor. Un aumento de 20 dB 
            representa una intensidad 100 veces mayor.
          </Important>

          <Example>
            <p>Niveles típicos de intensidad sonora:</p>
            <ul>
              <li>0 dB: Umbral de audición</li>
              <li>30 dB: Susurro</li>
              <li>60 dB: Conversación normal</li>
              <li>90 dB: Tráfico intenso</li>
              <li>120 dB: Concierto de rock, umbral de dolor</li>
              <li>140 dB: Despegue de avión a 25 m</li>
            </ul>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Atenuación de Ondas">
        <Concept title="Pérdida de Energía">
          <p>
            Cuando una onda se propaga por un medio real, pierde energía debido a fricción interna, 
            dispersión y absorción. La intensidad disminuye exponencialmente con la distancia:
          </p>
          <Formula
            expression={String.raw`I(x) = I_0 e^{-\alpha x}`}
            calculatorId="ondas-atenuacion"
            definitions={definitions}
            exercises={exercises}
          />
          
          <p>Donde:</p>
          <ul>
            <li>I(x): Intensidad a distancia x (W/m²)</li>
            <li>I₀: Intensidad inicial (W/m²)</li>
            <li>α: Coeficiente de atenuación (m⁻¹)</li>
            <li>x: Distancia recorrida (m)</li>
          </ul>

          <p>
            El coeficiente de atenuación depende del medio y la frecuencia. En general, frecuencias 
            más altas se atenúan más rápidamente.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Densidad de Energía">
        <Concept title="Energía por Unidad de Volumen">
          <p>
            La densidad de energía (u) es la energía almacenada por unidad de volumen en el medio:
          </p>
          <Formula
            expression={String.raw`u = \frac{1}{2}\rho\omega^2A^2`}
            calculatorId="ondas-densidad-energia"
            definitions={definitions}
            exercises={exercises}
          />
          
          <p>Donde:</p>
          <ul>
            <li>u: Densidad de energía (J/m³)</li>
            <li>ρ: Densidad del medio (kg/m³)</li>
            <li>ω: Frecuencia angular (rad/s)</li>
            <li>A: Amplitud (m)</li>
          </ul>

          <p>
            La intensidad y la densidad de energía están relacionadas por: I = u·v, donde v es la 
            velocidad de propagación.
          </p>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🏗️ Acústica Arquitectónica</h3>
          <p>
            El diseño de salas de concierto, teatros y auditorios requiere control preciso de la energía 
            sonora. Los arquitectos calculan tiempos de reverberación, absorción de materiales y distribución 
            de energía para optimizar la acústica. El Carnegie Hall (Nueva York) y la Sydney Opera House son 
            ejemplos de diseño acústico excepcional, donde la energía sonora se distribuye uniformemente sin 
            puntos muertos ni ecos excesivos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔇 Aislamiento Acústico y Protección Auditiva</h3>
          <p>
            El aislamiento acústico en edificios, vehículos y maquinaria reduce la transmisión de energía 
            sonora. Materiales absorbentes (espuma, fibra de vidrio) convierten energía sonora en calor. 
            Los protectores auditivos (tapones, orejeras) reducen la intensidad sonora que llega al oído, 
            previniendo daño auditivo. La exposición prolongada a niveles superiores a 85 dB puede causar 
            pérdida auditiva permanente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📊 Medición de Ruido y Contaminación Acústica</h3>
          <p>
            Los sonómetros miden niveles de intensidad sonora en decibelios para evaluar contaminación 
            acústica. Las regulaciones ambientales limitan el ruido en zonas residenciales (típicamente 
            55-65 dB durante el día, 45-55 dB de noche). Aeropuertos, autopistas y zonas industriales 
            requieren monitoreo continuo. La OMS recomienda no superar 70 dB para prevenir efectos en la salud.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏥 Ultrasonido Terapéutico</h3>
          <p>
            El ultrasonido de alta intensidad (HIFU) concentra energía sonora en tejidos profundos para 
            tratamiento médico. Se usa para destruir tumores, romper cálculos renales (litotricia) y 
            fisioterapia. La energía ultrasónica se convierte en calor, elevando la temperatura del tejido 
            objetivo. El HIFU puede alcanzar intensidades de 1,000-10,000 W/cm², suficientes para ablación 
            térmica de tejidos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧼 Limpieza Ultrasónica</h3>
          <p>
            Los limpiadores ultrasónicos usan ondas de alta frecuencia (20-400 kHz) y alta intensidad para 
            limpiar objetos delicados. La energía sonora crea burbujas microscópicas que colapsan violentamente 
            (cavitación), generando chorros de líquido que remueven suciedad. Se usa en joyería, instrumentos 
            quirúrgicos, componentes electrónicos y lentes. La potencia típica es 50-100 W/L de líquido.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Medición de Energía Sonora
        </h2>
        
        <div className="theory-subsection">
          <h3>🔊 Alexander Graham Bell y el Decibelio (1920s)</h3>
          <p>
            El decibelio (dB) fue nombrado en honor a Alexander Graham Bell, inventor del teléfono. 
            Originalmente se usó el "bel" (B), pero resultó ser una unidad demasiado grande, por lo que 
            se adoptó el decibel (1/10 de bel). Bell Telephone Laboratories desarrolló la escala logarítmica 
            en los 1920s para medir pérdidas en líneas telefónicas. La escala se adoptó universalmente para 
            medir intensidad sonora porque coincide con la percepción logarítmica del oído humano.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏛️ Wallace Sabine y la Acústica Arquitectónica (1895-1915)</h3>
          <p>
            Wallace Clement Sabine, físico de Harvard, fundó la acústica arquitectónica moderna. En 1895, 
            le encargaron mejorar la acústica del Fogg Lecture Hall, que tenía ecos terribles. Sabine midió 
            sistemáticamente cómo diferentes materiales absorben energía sonora y desarrolló la fórmula del 
            tiempo de reverberación (1900). Su trabajo permitió diseñar el Boston Symphony Hall (1900), 
            considerado una de las mejores salas de concierto del mundo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📏 Desarrollo de Sonómetros (1920s-1930s)</h3>
          <p>
            Los primeros sonómetros electrónicos se desarrollaron en los 1920s para medir niveles de ruido 
            industrial. Harvey Fletcher (Bell Labs) estudió la respuesta del oído humano a diferentes 
            frecuencias, desarrollando curvas de ponderación (A, B, C) que ajustan las mediciones según la 
            sensibilidad del oído. La ponderación A (dBA) se convirtió en el estándar internacional para 
            medición de ruido ambiental.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ LRAD y Armas Sónicas (2000s)</h3>
          <p>
            El Long Range Acoustic Device (LRAD) fue desarrollado por la US Navy después del ataque al USS 
            Cole (2000). Emite haces de sonido direccionales de hasta 150 dB a 1 metro, causando dolor y 
            desorientación. Se ha usado para control de multitudes y defensa contra piratas. El desarrollo 
            de armas sónicas plantea cuestiones éticas sobre el uso de energía sonora como arma no letal.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>👂 El Oído Humano: Detector de Energía Increíble</h3>
          <p>
            El oído humano puede detectar intensidades desde 10⁻¹² W/m² (umbral de audición) hasta 1 W/m² 
            (umbral de dolor), un rango de 1 billón (10¹²). Esto equivale a detectar desde la energía de 
            un mosquito volando a 3 metros hasta un martillo neumático a 1 metro. El tímpano se mueve solo 
            10⁻¹¹ m (diámetro de un átomo de hidrógeno) en el umbral de audición.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎸 Conciertos y Daño Auditivo</h3>
          <p>
            Los conciertos de rock típicamente alcanzan 110-120 dB. La exposición a 110 dB durante más de 
            2 minutos puede causar daño auditivo permanente. Pete Townshend (The Who) y Neil Young sufren 
            tinnitus (zumbido permanente) por exposición a altos niveles sonoros. Los músicos profesionales 
            usan protectores auditivos especiales que reducen intensidad uniformemente sin distorsionar el sonido.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔇 La Habitación Más Silenciosa del Mundo</h3>
          <p>
            La cámara anecoica de Microsoft (Redmond, Washington) tiene un nivel de ruido de -20.6 dB, el 
            más bajo jamás registrado. Las paredes absorben 99.99% de la energía sonora. En este silencio 
            extremo, puedes escuchar tu corazón latir, sangre fluir y articulaciones crujir. La mayoría de 
            las personas no soportan más de 45 minutos; el silencio absoluto es desorientador.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💥 Krakatoa: La Explosión Más Fuerte</h3>
          <p>
            La erupción del Krakatoa (1883) liberó energía equivalente a 200 megatones de TNT. El sonido 
            alcanzó ~310 dB (estimado), rompiendo tímpanos a 64 km. La onda de presión dio la vuelta al 
            mundo 4 veces. A más de 4,800 km de distancia, el sonido aún era audible (como cañonazos lejanos). 
            La energía acústica total fue aproximadamente 10¹⁸ J.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎼 El Misterio del Stradivarius</h3>
          <p>
            Los violines Stradivarius (siglo XVII-XVIII) valen millones porque supuestamente tienen acústica 
            superior. Estudios científicos muestran que la densidad de la madera y el barniz afectan cómo 
            la energía sonora se transmite y amplifica. Sin embargo, pruebas ciegas revelan que músicos 
            profesionales no pueden distinguir consistentemente un Stradivarius de violines modernos de alta 
            calidad. El "sonido superior" puede ser más mito que realidad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌊 Tsunami: Energía Devastadora</h3>
          <p>
            El tsunami del Océano Índico (2004) transportó energía equivalente a ~26 megatones de TNT 
            (1,500 bombas de Hiroshima). Aunque la amplitud en aguas profundas era solo ~1 m, la longitud 
            de onda de 100-200 km significaba un volumen de agua enorme en movimiento. La energía por metro 
            de frente de onda era ~2.5 × 10⁶ J/m, suficiente para arrasar edificios costeros.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔊 Récord de Volumen: Manowar</h3>
          <p>
            La banda de heavy metal Manowar ostenta el récord Guinness del concierto más fuerte: 139 dB 
            (medido a 10 m de los altavoces) en 1994. Esto es más fuerte que un despegue de jet (130 dB) 
            y cercano al umbral de daño instantáneo (140 dB). Los asistentes debían usar protección auditiva 
            obligatoria. A estos niveles, la energía sonora puede causar náuseas y desorientación.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          Las ondas mecánicas transportan energía sin transportar materia. La potencia transmitida depende 
          del cuadrado de la amplitud y frecuencia: P = ½μω²A²v. La intensidad (I = P/A) mide energía por 
          unidad de área, típicamente en W/m².
        </p>
        <p>
          El nivel de intensidad sonora se mide en decibelios: β = 10 log(I/I₀), donde I₀ = 10⁻¹² W/m². 
          El oído humano detecta desde 0 dB (umbral de audición) hasta 120-140 dB (umbral de dolor). La 
          atenuación reduce intensidad exponencialmente: I(x) = I₀e^(-αx).
        </p>
        <p>
          Aplicaciones incluyen acústica arquitectónica (salas de concierto), protección auditiva (prevención 
          de daño), medición de ruido (contaminación acústica), ultrasonido terapéutico (HIFU) y limpieza 
          ultrasónica. El estudio de energía de ondas es fundamental para diseño acústico, salud auditiva 
          y tecnologías médicas.
        </p>
      </div>
    </>
  );
};

export default Theory;
