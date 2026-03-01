import { TheorySection, Concept, Formula } from '../../../../components/TheoryV2';
import { definitions as proceso_isotermicoDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Proceso Isotérmico",
  descripcion: "Procesos termodinámicos a temperatura constante. Comprende las relaciones entre presión y volumen cuando la temperatura permanece constante.",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const ProcesoIsotermicoTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Proceso Isotérmico">
        <p>
          Un proceso isotérmico es aquel en el que la temperatura permanece constante durante todo el proceso.
          Esto requiere un intercambio de calor con el entorno para mantener T constante.
        </p>
      </TheorySection>

      <TheorySection title="Ecuaciones Fundamentales">
        <Concept title="Trabajo y Calor">
          <p>En un proceso isotérmico de un gas ideal, el trabajo es igual al calor intercambiado.</p>
          <Formula
            expression={String.raw`W = nRT\ln\left(\frac{V_f}{V_i}\right)`}
            calculatorId="proceso_isotermico-grupo-1"
            definitions={proceso_isotermicoDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calor", expression: String.raw`Q = W` },
              { description: "Ley de Boyle", expression: String.raw`PV = \text{constante}` },
              { description: "Energía interna", expression: String.raw`\Delta U = 0` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>W: Trabajo realizado por o sobre el sistema (J)</li>
            <li>n: Número de moles del gas (mol)</li>
            <li>R: Constante universal de los gases = 8.314 J/(mol·K)</li>
            <li>T: Temperatura constante del proceso (K)</li>
            <li>V<sub>f</sub>: Volumen final del gas (m³)</li>
            <li>V<sub>i</sub>: Volumen inicial del gas (m³)</li>
          </ul>

          <p>Nota importante: En un proceso isotérmico de un gas ideal, como la temperatura es constante, el cambio de energía interna es cero (ΔU = 0). Por la primera ley de la termodinámica (ΔU = Q - W), esto implica que Q = W, es decir, todo el calor absorbido se convierte en trabajo o viceversa.</p>
        </Concept>

        <Concept title="Relación Presión-Volumen (Ley de Boyle)">
          <p>En un proceso isotérmico, la presión y el volumen están relacionados por:</p>
          <Formula
            expression={String.raw`P_iV_i = P_fV_f`}
            calculatorId="proceso_isotermico-grupo-1"
            definitions={proceso_isotermicoDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>P<sub>i</sub>: Presión inicial del gas (Pa)</li>
            <li>V<sub>i</sub>: Volumen inicial del gas (m³)</li>
            <li>P<sub>f</sub>: Presión final del gas (Pa)</li>
            <li>V<sub>f</sub>: Volumen final del gas (m³)</li>
          </ul>

          <p>Esta relación muestra que en un proceso isotérmico, si el volumen aumenta, la presión disminuye proporcionalmente, y viceversa.</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Características">
        <Concept title="Propiedades del Proceso Isotérmico">
          <ul>
            <li>La temperatura T permanece constante</li>
            <li>La presión y volumen varían inversamente (Ley de Boyle: PV = cte)</li>
            <li>Para gas ideal: ΔU = 0 (energía interna solo depende de T)</li>
            <li>Primera ley: Q = W (todo el calor se convierte en trabajo o viceversa)</li>
            <li>Proceso muy lento para permitir intercambio de calor</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🔬 Laboratorios y baños térmicos</h3>
          <p>
            En laboratorios químicos y de investigación, muchos experimentos requieren temperatura constante. 
            Los baños térmicos (termostatizados) mantienen muestras a temperatura exacta mediante intercambio 
            continuo de calor. Las reacciones químicas en estas condiciones son procesos isotérmicos, permitiendo 
            estudiar cinética química sin la variable temperatura. Los baños térmicos modernos mantienen ±0.01°C de precisión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏭 Ciclo de Carnot en centrales térmicas</h3>
          <p>
            El ciclo de Carnot, el más eficiente teóricamente posible, incluye dos procesos isotérmicos: 
            expansión isotérmica (absorción de calor a alta temperatura) y compresión isotérmica (cesión de calor 
            a baja temperatura). Aunque las centrales reales no operan con ciclo de Carnot puro, muchas turbinas 
            de gas aproximan etapas isotérmicas mediante enfriamiento intermedio entre compresores.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>❄️ Cambios de fase: fusión y ebullición</h3>
          <p>
            Durante la fusión del hielo o ebullición del agua a presión constante, la temperatura permanece fija 
            (0°C y 100°C respectivamente al nivel del mar). Toda la energía absorbida se usa para romper enlaces 
            moleculares, no para aumentar temperatura. Por ejemplo, derretir 1 kg de hielo requiere 334 kJ a 0°C 
            constante. Estos son procesos isotérmicos naturales cotidianos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💉 Jeringuillas y expansión isotérmica</h3>
          <p>
            Cuando un médico extrae aire lentamente de una jeringa tapada, el proceso es aproximadamente isotérmico. 
            Al aumentar el volumen tirando del émbolo despacio, la presión disminuye según PV = constante. 
            Si el proceso es lento, el intercambio de calor con la mano y el entorno mantiene la temperatura constante. 
            Este principio se usa en bombas de vacío de laboratorio.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏊 Buceo y compresión de aire</h3>
          <p>
            Cuando un buceador desciende, el aire en sus pulmones se comprime isotérmicamente. El cuerpo mantiene 
            la temperatura constante (37°C), por lo que la presión del aire aumenta según la profundidad siguiendo 
            la Ley de Boyle. A 10 metros, la presión duplica; a 20 metros, triplica. Esta compresión isotérmica 
            explica por qué no se debe contener la respiración al ascender (el aire se expandiría y podría romper los pulmones).
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El descubrimiento de la temperatura constante
        </h2>
        
        <div className="theory-subsection">
          <h3>🔬 Robert Boyle y el inicio (1662)</h3>
          <p>
            Robert Boyle descubrió en 1662 la relación inversa entre presión y volumen que lleva su nombre. 
            Usando un tubo en forma de J lleno de mercurio, comprimió aire atrapado y midió presión vs volumen. 
            Observó que "el producto de presión y volumen es constante" sin entender completamente que esto requería 
            temperatura constante. Su trabajo, publicado en "New Experiments Physico-Mechanical", fue el primer 
            estudio cuantitativo de procesos isotérmicos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🇫🇷 Edme Mariotte y la confirmación independiente (1676)</h3>
          <p>
            El físico francés Edme Mariotte confirmó independientemente la ley de Boyle en 1676. Su trabajo fue 
            más preciso y reconoció explícitamente que la temperatura debía mantenerse constante. En Francia, 
            la relación PV = constante se conoce como "Ley de Mariotte". Mariotte notó que la humedad del aire 
            afectaba los resultados, anticipando la importancia de condiciones controladas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌡️ James Prescott Joule y el experimento de expansión libre (1845)</h3>
          <p>
            Joule realizó un experimento crucial en 1845: expandió un gas de un recipiente a otro conectado, 
            ambos sumergidos en agua. Midió que la temperatura del agua no cambiaba, demostrando que para gases ideales, 
            la energía interna solo depende de la temperatura (ΔU = 0 si ΔT = 0). Este experimento validó la teoría 
            de procesos isotérmicos y ayudó a establecer la primera ley de la termodinámica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔥 Nicolas Léonard Sadi Carnot y el ciclo ideal (1824)</h3>
          <p>
            Carnot, en su obra "Reflexiones sobre la potencia motriz del fuego" (1824), introdujo el ciclo teórico 
            más eficiente, que incluye expansiones y compresiones isotérmicas. Aunque Carnot aún creía en la teoría 
            del calórico (calor como sustancia), su análisis de procesos isotérmicos fue matemáticamente correcto. 
            Demostró que la eficiencia máxima depende solo de las temperaturas entre las que opera el ciclo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚗️ Desarrollo de termostatos (siglo XIX)</h3>
          <p>
            A lo largo del siglo XIX se desarrollaron termostatos precisos, permitiendo realizar procesos verdaderamente 
            isotérmicos en laboratorio. El termostato de mercurio de d'Arsonval (1880) y el termostato electrónico 
            del siglo XX hicieron posible mantener temperaturas constantes con precisión de ±0.001°C, revolucionando 
            la química física y permitiendo verificar experimentalmente las predicciones teóricas sobre procesos isotérmicos.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🎈 Los globos que "desaparecen" en invierno</h3>
          <p>
            Un globo inflado en una habitación caliente y llevado al exterior en invierno se desinfla visiblemente. 
            Pero si se deja el tiempo suficiente para que alcance la temperatura exterior, vuelve a inflarse casi completamente. 
            Este no es un proceso isotérmico (la temperatura cambia), pero si inflas un globo muy lentamente en una habitación, 
            el proceso es aproximadamente isotérmico: el globo se equilibra térmicamente con el aire circundante mientras te esfuerzas 
            más al soplar porque la presión interna aumenta según PV = constante.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>☕ El café que nunca se enfría (en teoría)</h3>
          <p>
            En un experimento mental, si pudieras remover tu café infinitamente rápido y perfectamente, su enfriamiento sería 
            un proceso isotérmico con el ambiente. En realidad, el café se enfría porque no hay agitación perfecta. 
            Los químicos industriales se acercan a esto en reactores de tanque agitado continuo (CSTR), donde agitación 
            vigorosa y flujo constante mantienen la temperatura prácticamente uniforme y constante.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧊 El hielo que hierve (a baja presión)</h3>
          <p>
            En una cámara de vacío, el agua puede hervir y congelarse simultáneamente. Si reduces la presión lo suficientemente 
            rápido, el agua empieza a evaporarse (ebullición isotérmica a temperatura ambiente), absorbiendo tanto calor latente 
            que el agua restante se congela. Este fenómeno se usa en liofilización (freeze-drying) para preservar alimentos y medicamentos. 
            La NASA usa este proceso para deshidratar comida de astronautas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 El motor que nunca se calentaría</h3>
          <p>
            Si un motor pudiera operar con un ciclo de Carnot perfecto (incluyendo expansiones y compresiones isotérmicas ideales), 
            alcanzaría la eficiencia máxima teórica. Sin embargo, esto requeriría que el cilindro estuviera en contacto perfecto con 
            reservorios térmicos durante las fases isotérmicas, y que el pistón se moviera infinitamente lento. Un motor real así 
            produciría exactamente 0 caballos de fuerza porque no tendría tiempo de completar un ciclo. Los ingenieros aceptaron desde 
            Otto que es mejor tener motores menos eficientes pero que realmente funcionen.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏔️ El récord del proceso isotérmico más largo</h3>
          <p>
            Los océanos profundos son enormes masas de agua a temperatura prácticamente constante (4°C a grandes profundidades). 
            Cualquier expansión o compresión de gas disuelto en agua profunda es efectivamente isotérmica porque la capacidad calorífica 
            del océano es tan inmensa que absorbe o libera calor sin cambiar su temperatura. Las bacterias extremófilas en fosas oceánicas 
            viven en un ambiente con procesos metabólicos isotérmicos perfectos, sin fluctuaciones térmicas, durante millones de años.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💎 Diamantes y compresión isotérmica</h3>
          <p>
            Los diamantes sintéticos se crean mediante compresión isotérmica extrema de grafito. En prensas de diamantes, el grafito 
            se comprime a más de 5 GPa (50,000 atmósferas) mientras se mantiene a temperatura constante (alrededor de 1500°C) durante horas. 
            Este proceso isotérmico reorganiza los átomos de carbono de la estructura hexagonal del grafito a la estructura cúbica del diamante. 
            Si la temperatura fluctuara, se formarían diamantes defectuosos o el proceso fallaría completamente.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            Un proceso isotérmico ocurre a temperatura constante (T = cte), requiriendo intercambio continuo de calor 
            con el entorno para mantener el equilibrio térmico.
          </li>
          <li>
            La presión y volumen varían según la Ley de Boyle: PV = constante. Si el volumen aumenta, la presión disminuye 
            proporcionalmente, y viceversa.
          </li>
          <li>
            En gases ideales, el cambio de energía interna es cero (ΔU = 0) porque U solo depende de T. 
            Por la primera ley, esto implica Q = W: todo el calor se convierte en trabajo o viceversa.
          </li>
          <li>
            El trabajo realizado es W = nRT ln(Vf/Vi). Es positivo en expansión (el gas realiza trabajo) 
            y negativo en compresión (se realiza trabajo sobre el gas).
          </li>
          <li>
            Aplicaciones prácticas: baños térmicos de laboratorio, ciclos de Carnot, cambios de fase, 
            compresión/expansión lenta de gases, y cualquier proceso donde la temperatura se mantiene constante 
            mediante control activo.
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProcesoIsotermicoTheory;
