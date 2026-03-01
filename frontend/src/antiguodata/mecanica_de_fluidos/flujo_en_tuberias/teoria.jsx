import { TheorySection, Concept, Formula, Important, Example } from '../../../components/TheoryV2';
import { definitions as tuberiasDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Flujo en Tuberías",
  descripcion: "Análisis de flujo en conductos cerrados",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción al Flujo en Tuberías">
        <p>
          El flujo en tuberías es uno de los problemas más comunes en ingeniería de fluidos. 
          Desde sistemas de agua potable y alcantarillado hasta oleoductos y sistemas de 
          refrigeración, el transporte de fluidos en conductos cerrados es fundamental en 
          innumerables aplicaciones industriales y domésticas.
        </p>
        <p>
          El análisis del flujo en tuberías involucra comprender el régimen de flujo (laminar 
          o turbulento), calcular las pérdidas de energía por fricción, y dimensionar 
          correctamente los sistemas para garantizar el caudal requerido con la presión 
          disponible.
        </p>
      </TheorySection>

      <TheorySection title="Número de Reynolds">
        <Concept title="Definición y Significado Físico">
          <p>
            El número de Reynolds es un parámetro adimensional que relaciona las fuerzas 
            inerciales con las fuerzas viscosas en un flujo. Es el criterio fundamental para 
            determinar si un flujo es laminar o turbulento.
          </p>

          <Formula
            expression={String.raw`Re = \frac{\rho v D}{\mu} = \frac{v D}{\nu}`}
            calculatorId="reynolds"
            definitions={tuberiasDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>Re: Número de Reynolds (adimensional)</li>
            <li>ρ: Densidad del fluido (kg/m³)</li>
            <li>v: Velocidad media del flujo (m/s)</li>
            <li>D: Diámetro de la tubería (m)</li>
            <li>μ: Viscosidad dinámica (Pa·s)</li>
            <li>ν: Viscosidad cinemática (m²/s), donde ν = μ/ρ</li>
          </ul>

          <Example>
            <p>
              Agua a 20°C (ν = 10⁻⁶ m²/s) fluye a 2 m/s en una tubería de 10 cm de diámetro. 
              El número de Reynolds es Re = (2 × 0.1) / 10⁻⁶ = 200,000, indicando flujo 
              turbulento.
            </p>
          </Example>
        </Concept>

        <Concept title="Regímenes de Flujo">
          <p>
            El número de Reynolds determina el régimen de flujo en tuberías:
          </p>

          <p>Flujo Laminar (Re {'<'} 2300):</p>
          <ul>
            <li>Flujo ordenado en capas paralelas</li>
            <li>Dominan las fuerzas viscosas</li>
            <li>Perfil de velocidad parabólico</li>
            <li>Pérdidas proporcionales a la velocidad (hf ∝ v)</li>
            <li>Típico en fluidos viscosos o velocidades bajas</li>
          </ul>

          <p>Flujo de Transición (2300 ≤ Re ≤ 4000):</p>
          <ul>
            <li>Régimen inestable entre laminar y turbulento</li>
            <li>Comportamiento impredecible</li>
            <li>Se evita en diseño cuando es posible</li>
            <li>Pequeñas perturbaciones pueden cambiar el régimen</li>
          </ul>

          <p>Flujo Turbulento (Re {'>'} 4000):</p>
          <ul>
            <li>Flujo caótico con fluctuaciones aleatorias</li>
            <li>Dominan las fuerzas inerciales</li>
            <li>Perfil de velocidad más plano</li>
            <li>Pérdidas proporcionales al cuadrado de la velocidad (hf ∝ v²)</li>
            <li>Típico en la mayoría de aplicaciones prácticas</li>
          </ul>

          <Important>
            <p>
              En la práctica, la mayoría de los flujos en tuberías son turbulentos. El flujo 
              laminar solo ocurre en situaciones especiales: fluidos muy viscosos (aceites 
              pesados), tuberías muy pequeñas (capilares), o velocidades muy bajas.
            </p>
          </Important>
        </Concept>

        <Concept title="Interpretación del Número de Reynolds">
          <p>
            El número de Reynolds representa la relación entre fuerzas inerciales y viscosas:
          </p>
          <ul>
            <li>Re alto: Las fuerzas inerciales dominan → flujo turbulento</li>
            <li>Re bajo: Las fuerzas viscosas dominan → flujo laminar</li>
          </ul>
          <p>
            Factores que aumentan Re (favorecen turbulencia):
          </p>
          <ul>
            <li>Mayor velocidad</li>
            <li>Mayor diámetro de tubería</li>
            <li>Menor viscosidad del fluido</li>
            <li>Mayor densidad del fluido</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Pérdidas de Carga por Fricción">
        <Concept title="Ecuación de Darcy-Weisbach">
          <p>
            La ecuación de Darcy-Weisbach es la fórmula fundamental para calcular las pérdidas 
            de energía por fricción en tuberías. Es válida tanto para flujo laminar como turbulento.
          </p>

          <Formula
            expression={String.raw`h_f = f \frac{L}{D} \frac{v^2}{2g}`}
            calculatorId="perdida-carga"
            definitions={tuberiasDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>hf: Pérdida de carga por fricción (m de columna de fluido)</li>
            <li>f: Factor de fricción de Darcy (adimensional)</li>
            <li>L: Longitud de la tubería (m)</li>
            <li>D: Diámetro de la tubería (m)</li>
            <li>v: Velocidad media del flujo (m/s)</li>
            <li>g: Aceleración de la gravedad (9.81 m/s²)</li>
          </ul>

          <Example>
            <p>
              Una tubería de 100 m de longitud y 20 cm de diámetro transporta agua a 3 m/s. 
              Con f = 0.02, la pérdida de carga es hf = 0.02 × (100/0.2) × (9/(2×9.81)) = 
              4.59 m. Esto significa que se necesitan 4.59 m adicionales de altura de agua 
              para vencer la fricción.
            </p>
          </Example>
        </Concept>

        <Concept title="Factor de Fricción">
          <p>
            El factor de fricción f depende del régimen de flujo y la rugosidad de la tubería:
          </p>

          <p>Flujo Laminar (Re {'<'} 2300):</p>
          <ul>
            <li>f = 64/Re (ecuación de Hagen-Poiseuille)</li>
            <li>El factor de fricción depende solo de Re</li>
            <li>La rugosidad de la pared no afecta</li>
            <li>Relación inversa con Re</li>
          </ul>

          <Formula
            expression={String.raw`f = \frac{64}{Re}`}
            calculatorId="factor-friccion-laminar"
            definitions={tuberiasDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>f: Factor de fricción de Darcy (adimensional)</li>
            <li>Re: Número de Reynolds (adimensional)</li>
          </ul>

          <Example>
            <p>
              En un flujo laminar con Re = 1000, el factor de fricción es f = 64/1000 = 0.064. 
              Este valor es independiente de la rugosidad de la tubería.
            </p>
          </Example>

          <p>Flujo Turbulento (Re {'>'} 4000):</p>
          <ul>
            <li>f depende de Re y de la rugosidad relativa (ε/D)</li>
            <li>Se calcula con el diagrama de Moody o ecuaciones empíricas</li>
            <li>Para tuberías lisas: ecuación de Blasius f = 0.316/Re⁰·²⁵ (Re {'<'} 10⁵)</li>
            <li>Para tuberías rugosas: ecuación de Colebrook-White</li>
          </ul>

          <p>Valores típicos de f en flujo turbulento:</p>
          <ul>
            <li>Tuberías muy lisas (vidrio, plástico): f ≈ 0.010-0.015</li>
            <li>Tuberías comerciales nuevas (acero, cobre): f ≈ 0.015-0.025</li>
            <li>Tuberías con incrustaciones o corrosión: f ≈ 0.025-0.040</li>
            <li>Tuberías muy rugosas (hierro fundido viejo): f ≈ 0.040-0.080</li>
          </ul>

          <Important>
            <p>
              En la práctica, para diseño preliminar en flujo turbulento se suele usar f = 0.02 
              como valor conservador. Para diseño final, se debe consultar el diagrama de Moody 
              o usar ecuaciones específicas según el material y estado de la tubería.
            </p>
          </Important>
        </Concept>

        <Concept title="Diagrama de Moody">
          <p>
            El diagrama de Moody es una herramienta gráfica fundamental que relaciona el factor 
            de fricción f con el número de Reynolds y la rugosidad relativa ε/D. Fue desarrollado 
            por Lewis Moody en 1944 y sigue siendo ampliamente utilizado.
          </p>
          <p>
            Características del diagrama:
          </p>
          <ul>
            <li>Eje horizontal: Número de Reynolds (escala logarítmica)</li>
            <li>Eje vertical: Factor de fricción f (escala logarítmica)</li>
            <li>Curvas: Representan diferentes valores de rugosidad relativa ε/D</li>
            <li>Zona laminar: Línea recta f = 64/Re (independiente de rugosidad)</li>
            <li>Zona de transición: Región inestable entre laminar y turbulento</li>
            <li>Zona turbulenta: Curvas que dependen de rugosidad relativa</li>
          </ul>
          <p>
            Uso del diagrama:
          </p>
          <ul>
            <li>Calcular Re con los datos del flujo</li>
            <li>Determinar ε/D según el material y estado de la tubería</li>
            <li>Localizar el punto (Re, ε/D) en el diagrama</li>
            <li>Leer el valor de f en la intersección</li>
          </ul>
        </Concept>

        <Concept title="Ecuación de Colebrook-White">
          <p>
            Para cálculos precisos en flujo turbulento, se usa la ecuación de Colebrook-White 
            (1939), que relaciona f, Re y ε/D:
          </p>
          <p>
            <strong>1/√f = -2 log₁₀[(ε/3.7D) + (2.51/(Re√f))]</strong>
          </p>
          <p>
            Esta ecuación es implícita (f aparece en ambos lados) y requiere solución iterativa. 
            Es la base del diagrama de Moody y proporciona resultados precisos para todo el 
            rango turbulento.
          </p>
          <p>
            Aproximaciones útiles:
          </p>
          <ul>
            <li>Ecuación de Swamee-Jain (explícita, error {'<'} 1%): 
              f = 0.25 / [log₁₀(ε/3.7D + 5.74/Re⁰·⁹)]²</li>
            <li>Ecuación de Haaland (explícita, error {'<'} 2%): 
              1/√f = -1.8 log₁₀[(ε/3.7D)¹·¹¹ + 6.9/Re]</li>
          </ul>
        </Concept>

        <Concept title="Interpretación de las Pérdidas">
          <p>
            La pérdida de carga hf representa la energía disipada por fricción, expresada como 
            altura equivalente de fluido. Esta energía se convierte en calor.
          </p>
          <p>
            Observaciones importantes:
          </p>
          <ul>
            <li>Las pérdidas son proporcionales a la longitud (duplicar L duplica hf)</li>
            <li>Las pérdidas son inversamente proporcionales al diámetro (reducir D a la mitad aumenta hf 2 veces)</li>
            <li>Las pérdidas son proporcionales a v² (duplicar v cuadruplica hf)</li>
            <li>Reducir el diámetro tiene un efecto dramático en las pérdidas</li>
          </ul>
        </Concept>

        <Concept title="Caudal desde Pérdida de Carga">
          <p>
            A partir de la ecuación de Darcy-Weisbach, es posible despejar el caudal cuando 
            se conoce la pérdida de carga permitida:
          </p>

          <Formula
            expression={String.raw`Q = \frac{\pi D^2}{4} \sqrt{\frac{2g h_f D}{f L}}`}
            calculatorId="caudal-desde-perdida"
            definitions={tuberiasDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>Q: Caudal volumétrico (m³/s)</li>
            <li>D: Diámetro de la tubería (m)</li>
            <li>hf: Pérdida de carga (m)</li>
            <li>f: Factor de fricción (adimensional)</li>
            <li>L: Longitud de la tubería (m)</li>
            <li>g: Aceleración de la gravedad (9.81 m/s²)</li>
          </ul>

          <Example>
            <p>
              Una tubería de 20 cm de diámetro y 500 m de longitud tiene una pérdida de carga 
              de 10 m con f = 0.02. El caudal es Q = (π×0.2²/4) × √(2×9.81×10×0.2/(0.02×500)) 
              = 0.0622 m³/s = 62.2 L/s.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Velocidad y Caudal">
        <Concept title="Relación Velocidad-Caudal">
          <p>
            La velocidad media en una tubería se relaciona con el caudal volumétrico mediante 
            la ecuación de continuidad:
          </p>

          <Formula
            expression={String.raw`v = \frac{Q}{A} = \frac{4Q}{\pi D^2}`}
            calculatorId="velocidad-media"
            definitions={tuberiasDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>v: Velocidad media (m/s)</li>
            <li>Q: Caudal volumétrico (m³/s)</li>
            <li>A: Área de la sección transversal (m²)</li>
            <li>D: Diámetro de la tubería (m)</li>
          </ul>

          <Example>
            <p>
              Un caudal de 50 L/s (0.05 m³/s) fluye en una tubería de 20 cm de diámetro. 
              El área es A = π(0.1)² = 0.0314 m². La velocidad es v = 0.05/0.0314 = 1.59 m/s.
            </p>
          </Example>
        </Concept>

        <Concept title="Velocidades Recomendadas">
          <p>
            En el diseño de sistemas de tuberías, existen rangos de velocidad recomendados 
            para evitar problemas:
          </p>

          <p>Velocidades mínimas:</p>
          <ul>
            <li>Agua potable: v {'>'} 0.6 m/s (evitar sedimentación)</li>
            <li>Alcantarillado: v {'>'} 0.6 m/s (evitar depósitos)</li>
            <li>Sistemas con sólidos en suspensión: v {'>'} 1.0 m/s</li>
          </ul>

          <p>Velocidades máximas:</p>
          <ul>
            <li>Agua en tuberías de succión: v {'<'} 1.5 m/s (evitar cavitación)</li>
            <li>Agua en tuberías de impulsión: v {'<'} 2.5-3.0 m/s (limitar pérdidas y ruido)</li>
            <li>Líquidos viscosos: v {'<'} 1.0 m/s (limitar pérdidas)</li>
            <li>Vapor: v {'<'} 30-40 m/s (evitar erosión)</li>
          </ul>

          <Important>
            <p>
              Velocidades excesivas causan: pérdidas de carga elevadas, ruido, vibración, 
              erosión de tuberías y accesorios, y golpe de ariete severo. Velocidades muy 
              bajas causan: sedimentación, crecimiento biológico en agua, y separación de 
              fases en mezclas.
            </p>
          </Important>
        </Concept>

        <Concept title="Dimensionamiento de Tuberías">
          <p>
            El dimensionamiento correcto de tuberías requiere balancear varios factores:
          </p>
          <ul>
            <li>Caudal requerido: Determina el tamaño mínimo</li>
            <li>Velocidad admisible: Limita el tamaño mínimo y máximo</li>
            <li>Pérdidas de carga: Afectan el costo de bombeo</li>
            <li>Costo de tubería: Aumenta con el diámetro</li>
            <li>Espacio disponible: Puede limitar el diámetro máximo</li>
          </ul>
          <p>
            Criterio económico: Existe un diámetro óptimo que minimiza el costo total 
            (inversión inicial + costo de operación). Tuberías muy pequeñas tienen bajo costo 
            inicial pero altos costos de bombeo. Tuberías muy grandes tienen alto costo inicial 
            pero bajos costos de bombeo.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Pérdidas Menores">
        <Concept title="Pérdidas en Accesorios">
          <p>
            Además de las pérdidas por fricción en tramos rectos, existen pérdidas adicionales 
            en accesorios y cambios de geometría:
          </p>
          <ul>
            <li>Válvulas (compuerta, globo, mariposa, retención)</li>
            <li>Codos (90°, 45°, radio largo, radio corto)</li>
            <li>Tés (paso directo, derivación)</li>
            <li>Reducciones y ampliaciones</li>
            <li>Entradas y salidas de tanques</li>
          </ul>

          <p>
            Estas pérdidas se calculan mediante:
          </p>
          <ul>
            <li>Coeficiente de pérdida K: hm = K × (v²/2g)</li>
            <li>Longitud equivalente Le: Se suma a la longitud real en Darcy-Weisbach</li>
          </ul>

          <p>Valores típicos de K:</p>
          <ul>
            <li>Válvula de compuerta abierta: K = 0.2</li>
            <li>Válvula de globo abierta: K = 10</li>
            <li>Codo de 90° radio largo: K = 0.9</li>
            <li>Codo de 90° radio corto: K = 1.5</li>
            <li>Té paso directo: K = 0.6</li>
            <li>Té derivación: K = 1.8</li>
            <li>Entrada de tanque: K = 0.5</li>
            <li>Salida de tanque: K = 1.0</li>
            <li>Reducción brusca (D₁/D₂ = 0.5): K = 0.4</li>
            <li>Ampliación brusca (D₁/D₂ = 0.5): K = 0.6</li>
          </ul>
        </Concept>

        <Concept title="Importancia en Sistemas Cortos">
          <p>
            En sistemas con muchos accesorios y longitud corta, las pérdidas menores pueden 
            ser comparables o incluso mayores que las pérdidas por fricción. Es fundamental 
            considerarlas en el diseño.
          </p>
          <p>
            Regla práctica: En tuberías largas (L/D {'>'} 1000), las pérdidas menores son 
            despreciables. En tuberías cortas con muchos accesorios, pueden representar el 
            50% o más de las pérdidas totales.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuación de Bernoulli con Pérdidas">
        <Concept title="Ecuación de Energía">
          <p>
            La ecuación de Bernoulli modificada para incluir pérdidas de carga es:
          </p>

          <Formula
            expression={String.raw`\frac{P_1}{\gamma} + \frac{v_1^2}{2g} + z_1 + h_B = \frac{P_2}{\gamma} + \frac{v_2^2}{2g} + z_2 + h_f + h_m`}
            calculatorId="bernoulli-altura-bomba"
            definitions={tuberiasDefinitions}
            exercises={exercises}
          />
          
          <p>Donde:</p>
          <ul>
            <li>P/γ: Altura de presión (m)</li>
            <li>v²/2g: Altura de velocidad (m)</li>
            <li>z: Altura de posición (m)</li>
            <li>hB: Altura añadida por bomba (m)</li>
            <li>hf: Pérdidas por fricción (m)</li>
            <li>hm: Pérdidas menores (m)</li>
          </ul>
          <p>
            Esta ecuación es fundamental para el análisis de sistemas de tuberías y el 
            dimensionamiento de bombas.
          </p>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>

        <div className="theory-subsection">
          <h3>Sistemas de Agua Potable</h3>
          <p>
            Las redes de distribución de agua potable son el ejemplo más común de flujo en 
            tuberías. Deben diseñarse para:
          </p>
          <ul>
            <li>Suministrar el caudal requerido a cada usuario</li>
            <li>Mantener presión mínima (15-20 m) en todos los puntos</li>
            <li>Evitar presiones excesivas ({'>'} 60 m) que causen fugas</li>
            <li>Minimizar pérdidas de agua por fugas</li>
            <li>Prevenir contaminación por presión negativa</li>
          </ul>
          <p>
            Una ciudad típica tiene miles de kilómetros de tuberías con diámetros desde 50 mm 
            (acometidas domiciliarias) hasta 1500 mm (líneas principales).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Sistemas de Alcantarillado</h3>
          <p>
            Los sistemas de alcantarillado funcionan por gravedad, aprovechando la pendiente 
            del terreno:
          </p>
          <ul>
            <li>Velocidad mínima 0.6 m/s para evitar sedimentación</li>
            <li>Velocidad máxima 3-5 m/s para evitar erosión</li>
            <li>Flujo parcialmente lleno (típicamente 50-80% del diámetro)</li>
            <li>Pendientes típicas 0.5-2% según diámetro</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Oleoductos y Gasoductos</h3>
          <p>
            El transporte de petróleo y gas a larga distancia requiere análisis sofisticado:
          </p>
          <ul>
            <li>Oleoductos: Diámetros hasta 1200 mm, longitudes de miles de km</li>
            <li>Estaciones de bombeo cada 50-150 km para compensar pérdidas</li>
            <li>Calentamiento del petróleo para reducir viscosidad</li>
            <li>Gasoductos: Presiones hasta 100 bar, velocidades hasta 20 m/s</li>
            <li>Compresores cada 100-200 km en gasoductos</li>
          </ul>
          <p>
            El oleoducto Trans-Alaska tiene 1287 km de longitud y 1220 mm de diámetro, 
            transportando hasta 2.1 millones de barriles por día.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Sistemas de Calefacción y Refrigeración</h3>
          <p>
            Los sistemas HVAC (calefacción, ventilación y aire acondicionado) usan redes 
            complejas de tuberías:
          </p>
          <ul>
            <li>Calefacción central: Agua caliente (60-80°C) circulando por radiadores</li>
            <li>Refrigeración: Agua fría (7-12°C) circulando por fan-coils</li>
            <li>Sistemas cerrados con bomba de circulación</li>
            <li>Diseño para minimizar pérdidas y garantizar caudal uniforme</li>
            <li>Aislamiento térmico para reducir pérdidas de calor/frío</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Industria Química y Petroquímica</h3>
          <p>
            Las plantas químicas tienen extensas redes de tuberías (pipe racks) transportando 
            diversos fluidos:
          </p>
          <ul>
            <li>Líquidos corrosivos: Requieren materiales especiales (acero inoxidable, plásticos)</li>
            <li>Fluidos a alta temperatura: Requieren expansión térmica y aislamiento</li>
            <li>Fluidos peligrosos: Requieren doble contención y sistemas de seguridad</li>
            <li>Múltiples fluidos: Requieren identificación por colores y etiquetado</li>
          </ul>
          <p>
            Una refinería típica tiene más de 100 km de tuberías de diversos diámetros y 
            materiales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Sistemas de Riego</h3>
          <p>
            Los sistemas de riego agrícola deben distribuir agua eficientemente:
          </p>
          <ul>
            <li>Riego por aspersión: Presión 20-40 m, velocidad 1.5-2.5 m/s</li>
            <li>Riego por goteo: Presión 10-20 m, caudales muy bajos</li>
            <li>Tuberías enterradas para protección y estética</li>
            <li>Válvulas automáticas controladas por temporizador</li>
            <li>Diseño para uniformidad de distribución</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Sistemas Contra Incendios</h3>
          <p>
            Los sistemas de protección contra incendios tienen requisitos especiales:
          </p>
          <ul>
            <li>Caudal mínimo garantizado (típicamente 500-1000 L/min por hidrante)</li>
            <li>Presión mínima en boquillas (típicamente 35 m)</li>
            <li>Red mallada para redundancia</li>
            <li>Tuberías sobredimensionadas para garantizar disponibilidad</li>
            <li>Pruebas periódicas de caudal y presión</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Sistemas Hidráulicos</h3>
          <p>
            Los sistemas hidráulicos de potencia usan flujo en tuberías a alta presión:
          </p>
          <ul>
            <li>Presiones típicas 100-350 bar</li>
            <li>Aceite hidráulico como fluido de trabajo</li>
            <li>Tuberías de acero de alta resistencia</li>
            <li>Velocidades 3-5 m/s en líneas de presión</li>
            <li>Aplicaciones: Maquinaria pesada, aviones, sistemas industriales</li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De los acueductos romanos a la hidráulica moderna
        </h2>

        <div className="theory-subsection">
          <h3>Acueductos Romanos (300 a.C. - 500 d.C.)</h3>
          <p>
            Los romanos fueron maestros en el transporte de agua a larga distancia. Construyeron 
            más de 400 km de acueductos para abastecer Roma, transportando hasta 1 millón de m³ 
            por día.
          </p>
          <p>
            Aunque no conocían las ecuaciones de flujo en tuberías, los ingenieros romanos 
            desarrollaron reglas empíricas efectivas: pendientes de 0.1-0.5%, secciones 
            rectangulares o circulares, y sistemas de distribución con tanques de regulación.
          </p>
          <p>
            El acueducto de Segovia (España, siglo I d.C.) sigue en pie después de 2000 años, 
            testimonio de la calidad de la ingeniería romana.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Experimentos de Hagen y Poiseuille (1839-1840)</h3>
          <p>
            Gotthilf Hagen (ingeniero alemán) y Jean Poiseuille (médico francés) estudiaron 
            independientemente el flujo en tubos capilares. Poiseuille investigaba la circulación 
            sanguínea, mientras Hagen estudiaba sistemas de agua.
          </p>
          <p>
            Ambos descubrieron que en flujo laminar, el caudal es proporcional a la cuarta 
            potencia del diámetro y a la primera potencia de la presión. Esta ley de 
            Hagen-Poiseuille fue fundamental para comprender el flujo viscoso.
          </p>
          <p>
            Ecuación de Hagen-Poiseuille: Q = (πΔPD⁴)/(128μL)
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Osborne Reynolds y el Número Crítico (1883)</h3>
          <p>
            En 1883, Osborne Reynolds realizó sus famosos experimentos en la Universidad de 
            Manchester, inyectando tinta en agua fluyendo en un tubo de vidrio. Observó la 
            transición de flujo laminar (tinta en línea recta) a turbulento (tinta dispersa).
          </p>
          <p>
            Reynolds identificó que la transición dependía de un parámetro adimensional que 
            hoy lleva su nombre. Determinó que la transición ocurría alrededor de Re = 2300, 
            valor que sigue siendo válido hoy.
          </p>
          <p>
            Este descubrimiento fue revolucionario porque mostró que el comportamiento del 
            flujo depende de un parámetro adimensional, no de valores absolutos de velocidad 
            o diámetro.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Ecuación de Darcy-Weisbach (1845-1875)</h3>
          <p>
            Henry Darcy, ingeniero francés, realizó extensos experimentos en tuberías de agua 
            en Dijon (1845). Desarrolló una ecuación empírica para pérdidas de carga que fue 
            refinada por Julius Weisbach (1845) y otros.
          </p>
          <p>
            La ecuación de Darcy-Weisbach se convirtió en la fórmula estándar para calcular 
            pérdidas por fricción, válida para cualquier fluido, régimen de flujo y rugosidad 
            de tubería.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Diagrama de Moody (1944)</h3>
          <p>
            Lewis Moody publicó en 1944 su famoso diagrama que relaciona el factor de fricción 
            con el número de Reynolds y la rugosidad relativa. Este diagrama se convirtió en 
            la herramienta estándar para determinar f en flujo turbulento.
          </p>
          <p>
            El diagrama de Moody sintetiza décadas de datos experimentales en un gráfico único 
            que sigue siendo ampliamente usado hoy, aunque ahora complementado con ecuaciones 
            computacionales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Ecuación de Colebrook-White (1939)</h3>
          <p>
            Cyril Colebrook y C.M. White desarrollaron una ecuación implícita para el factor 
            de fricción en flujo turbulento que unifica tuberías lisas y rugosas:
          </p>
          <p>
            1/√f = -2 log₁₀[(ε/3.7D) + (2.51/(Re√f))]
          </p>
          <p>
            Esta ecuación es la base del diagrama de Moody y sigue siendo el estándar para 
            cálculos precisos, aunque requiere solución iterativa.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Desarrollo de Materiales (Siglo XX)</h3>
          <p>
            El siglo XX vio una revolución en materiales para tuberías:
          </p>
          <ul>
            <li>1900s: Hierro fundido y acero dominan</li>
            <li>1930s: Introducción del acero inoxidable</li>
            <li>1950s: Desarrollo de plásticos (PVC, polietileno)</li>
            <li>1970s: Tuberías de fibra de vidrio (PRFV)</li>
            <li>1990s: Tuberías multicapa y materiales compuestos</li>
          </ul>
          <p>
            Los plásticos revolucionaron la industria por su bajo costo, resistencia a la 
            corrosión, facilidad de instalación y superficie muy lisa (f bajo).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Simulación Computacional (1980s-presente)</h3>
          <p>
            El desarrollo de software especializado transformó el diseño de sistemas de tuberías:
          </p>
          <ul>
            <li>Análisis de redes complejas con miles de nodos</li>
            <li>Optimización automática de diámetros</li>
            <li>Simulación de transitorios (golpe de ariete)</li>
            <li>Análisis de calidad de agua</li>
            <li>Detección de fugas por análisis de presión</li>
          </ul>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>El Experimento de Reynolds con Tinta</h3>
          <p>
            El famoso experimento de Reynolds era sorprendentemente simple: un tubo de vidrio 
            con agua fluyendo y un pequeño tubo inyectando tinta. Sin embargo, requería 
            condiciones muy controladas.
          </p>
          <p>
            Reynolds tuvo que realizar los experimentos de noche para evitar vibraciones del 
            tráfico que perturbaban el flujo. También tuvo que esperar horas para que el agua 
            se estabilizara térmicamente. La paciencia y meticulosidad de Reynolds fueron 
            clave para su descubrimiento.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Misterio del Factor 64</h3>
          <p>
            En flujo laminar, el factor de fricción es exactamente f = 64/Re. Este número 64 
            no es empírico sino que surge de la solución analítica de las ecuaciones de 
            Navier-Stokes para flujo en tubo circular.
          </p>
          <p>
            Es uno de los pocos casos en mecánica de fluidos donde existe una solución exacta 
            y elegante. Para otras geometrías (tubos cuadrados, anulares), el número cambia 
            pero la forma f = C/Re se mantiene.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Paradoja de la Tubería Óptima</h3>
          <p>
            Existe un diámetro óptimo que minimiza el costo total de un sistema de bombeo. 
            Tuberías pequeñas son baratas pero requieren mucha energía de bombeo. Tuberías 
            grandes son caras pero ahorran energía.
          </p>
          <p>
            La fórmula de Bresse (1860) da el diámetro económico: D = 1.3 × Q⁰·⁴⁶ (con D en m 
            y Q en m³/s). Esta fórmula empírica sigue siendo útil para diseño preliminar, 
            aunque los costos relativos han cambiado desde 1860.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Récord de Velocidad en Tuberías</h3>
          <p>
            En sistemas hidráulicos de alta presión, el aceite puede alcanzar velocidades de 
            20-30 m/s. Pero el récord lo tienen los sistemas de inyección de combustible 
            diésel common-rail, donde el combustible alcanza velocidades de 300-400 m/s en 
            inyectores (casi la velocidad del sonido).
          </p>
          <p>
            A estas velocidades, los efectos de compresibilidad son significativos y el diseño 
            requiere análisis de ondas de presión, similar a flujo compresible en gases.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Tuberías que Cantan</h3>
          <p>
            Algunas tuberías producen ruidos molestos (silbidos, zumbidos) debido a vibraciones 
            inducidas por el flujo turbulento. Este fenómeno, llamado "singing pipes", puede 
            ocurrir a ciertas velocidades donde la frecuencia de desprendimiento de vórtices 
            coincide con una frecuencia natural de la tubería.
          </p>
          <p>
            La solución puede ser tan simple como cambiar ligeramente la velocidad o instalar 
            soportes adicionales para cambiar las frecuencias naturales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Golpe de Ariete Destructivo</h3>
          <p>
            El golpe de ariete (water hammer) ocurre cuando el flujo se detiene bruscamente, 
            generando ondas de presión que pueden alcanzar 10-20 veces la presión normal. 
            Puede romper tuberías y válvulas.
          </p>
          <p>
            En 1895, un golpe de ariete en una planta hidroeléctrica en Suiza generó presiones 
            tan altas que reventó una tubería de 1 m de diámetro, lanzando fragmentos a 100 m 
            de distancia. Este incidente motivó el estudio científico del fenómeno.
          </p>
          <p>
            La velocidad de propagación de la onda de presión es cercana a la velocidad del 
            sonido en el fluido (≈1400 m/s en agua), por lo que el golpe es casi instantáneo 
            en tuberías cortas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Tuberías Transparentes para Investigación</h3>
          <p>
            Los investigadores usan tuberías de acrílico transparente para visualizar el flujo. 
            Con iluminación láser y partículas trazadoras, pueden medir campos de velocidad 
            completos usando técnicas como PIV (Particle Image Velocimetry).
          </p>
          <p>
            Estas técnicas han revelado estructuras turbulentas complejas que no se pueden 
            predecir con teoría: vórtices en forma de herradura, ráfagas de alta velocidad, 
            y regiones de baja velocidad cerca de las paredes.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Costo de las Fugas</h3>
          <p>
            Las redes de agua potable pierden típicamente 20-40% del agua por fugas. En países 
            en desarrollo, las pérdidas pueden superar el 50%. Esto representa miles de millones 
            de dólares anuales en agua y energía desperdiciadas.
          </p>
          <p>
            Una fuga de 3 mm de diámetro a 30 m de presión pierde aproximadamente 2000 L/día. 
            En una red grande, pueden existir miles de fugas pequeñas que suman pérdidas 
            enormes. La detección y reparación de fugas es un desafío continuo.
          </p>
        </div>
      </div>

      <div className="theory-section-highlight">
        <h2>📝 Resumen</h2>
        <p>
          El flujo en tuberías es fundamental en ingeniería de fluidos. El número de Reynolds 
          (Re = vD/ν) determina el régimen de flujo: laminar (Re {'<'} 2300), transición 
          (2300-4000), o turbulento (Re {'>'} 4000). La mayoría de aplicaciones prácticas 
          operan en régimen turbulento.
        </p>
        <p>
          Las pérdidas de carga por fricción se calculan con la ecuación de Darcy-Weisbach: 
          hf = f(L/D)(v²/2g). El factor de fricción f depende del régimen de flujo y la 
          rugosidad de la tubería. En flujo laminar, f = 64/Re. En flujo turbulento, f se 
          determina con el diagrama de Moody o ecuaciones empíricas como Colebrook-White.
        </p>
        <p>
          La velocidad media se relaciona con el caudal mediante v = Q/A = 4Q/(πD²). El diseño 
          de tuberías debe considerar velocidades recomendadas (típicamente 1-3 m/s para agua) 
          para evitar problemas de sedimentación, erosión, ruido y pérdidas excesivas.
        </p>
        <p>
          Además de las pérdidas por fricción, existen pérdidas menores en accesorios (válvulas, 
          codos, tés) que pueden ser significativas en sistemas cortos. El análisis completo 
          requiere la ecuación de Bernoulli modificada incluyendo todas las pérdidas y la 
          energía añadida por bombas.
        </p>
      </div>
    </>
  );
};

export default Theory;
