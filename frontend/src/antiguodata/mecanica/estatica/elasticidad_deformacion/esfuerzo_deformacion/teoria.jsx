import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Esfuerzo y Deformación",
  descripcion: "Conceptos fundamentales de esfuerzo y deformación en materiales",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const EsfuerzoDeformacionTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Esfuerzo y Deformación en Materiales">
        <p>
          Cuando aplicamos fuerzas a un material, este responde de dos maneras: desarrolla fuerzas internas 
          (esfuerzo) y cambia su forma o dimensiones (deformación). Estos conceptos son fundamentales para 
          entender cómo los materiales soportan cargas y por qué algunos fallan mientras otros resisten.
        </p>
        <p>
          El esfuerzo mide la intensidad de las fuerzas internas, mientras que la deformación cuantifica 
          el cambio de forma. La relación entre ambos define el comportamiento mecánico del material.
        </p>
      </TheorySection>

      <TheorySection title="1. Esfuerzo (Stress)">
        <Concept title="Concepto de Esfuerzo">
          <p>
            El esfuerzo es la fuerza interna por unidad de área que actúa dentro de un material deformable. 
            Representa la intensidad de las fuerzas internas que mantienen unidas las partículas del material 
            cuando se aplica una carga externa.
          </p>
          <p>
            Imagina un cable que sostiene un peso. La fuerza externa es el peso, pero dentro del cable 
            se desarrollan fuerzas internas que "tiran" de las moléculas para evitar que el cable se rompa. 
            El esfuerzo mide cuán intensas son esas fuerzas internas por cada unidad de área.
          </p>
        </Concept>

        <Concept title="Esfuerzo Normal (σ)">
          <p>
            El esfuerzo normal actúa perpendicular a la superficie del material. Puede ser de dos tipos:
          </p>
          <ul>
            <li>Esfuerzo de tensión (positivo): cuando el material se estira</li>
            <li>Esfuerzo de compresión (negativo): cuando el material se comprime</li>
          </ul>

          <Formula
            expression={String.raw`\sigma = \frac{F}{A}`}
            calculatorId="esfuerzo-normal"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Fuerza (F = σA)", expression: String.raw`F = \sigma A` },
              { description: "Calcular Área (A = F/σ)", expression: String.raw`A = \frac{F}{\sigma}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>σ: Esfuerzo normal (Pa o N/m²)</li>
            <li>F: Fuerza aplicada perpendicular (N)</li>
            <li>A: Área de la sección transversal (m²)</li>
          </ul>

          <Example>
            Un cable de acero con área de sección transversal de 3 cm² (3×10⁻⁴ m²) soporta una carga 
            de 60,000 N. El esfuerzo normal es: σ = 60,000 / (3×10⁻⁴) = 200×10⁶ Pa = 200 MPa. 
            Este valor está dentro del rango seguro para el acero estructural (límite elástico ~250 MPa).
          </Example>
        </Concept>

        <Concept title="Esfuerzo Cortante (τ)">
          <p>
            El esfuerzo cortante actúa tangencial a la superficie, causando deslizamiento entre capas 
            del material. Es como intentar deslizar una baraja de cartas: cada carta se desliza sobre 
            la siguiente, pero hay resistencia entre ellas.
          </p>

          <Formula
            expression={String.raw`\tau = \frac{F_t}{A}`}
            calculatorId="esfuerzo-cortante"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Fuerza Tangencial (F = τA)", expression: String.raw`F_t = \tau A` },
              { description: "Calcular Área (A = F/τ)", expression: String.raw`A = \frac{F_t}{\tau}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>τ: Esfuerzo cortante (Pa)</li>
            <li>F_t: Fuerza tangencial (N)</li>
            <li>A: Área sobre la que actúa (m²)</li>
          </ul>

          <Example>
            Un perno de 1 cm de diámetro (área = π×(0.005)² = 7.85×10⁻⁵ m²) soporta una fuerza 
            cortante de 5,000 N. El esfuerzo cortante es: τ = 5,000 / (7.85×10⁻⁵) = 63.7 MPa. 
            Los pernos se diseñan para resistir esfuerzos cortantes típicamente entre 50-150 MPa.
          </Example>
        </Concept>

        <Important>
          <p>
            El esfuerzo no es lo mismo que la fuerza. Dos cables pueden soportar la misma fuerza, 
            pero si uno es más delgado, experimentará mayor esfuerzo y será más propenso a fallar. 
            Por eso los cables de elevación son gruesos: para mantener el esfuerzo bajo límites seguros.
          </p>
        </Important>
      </TheorySection>

      <TheorySection title="2. Deformación (Strain)">
        <Concept title="Concepto de Deformación">
          <p>
            La deformación es el cambio relativo en las dimensiones de un cuerpo debido a fuerzas aplicadas. 
            Es una medida adimensional que compara el cambio de tamaño con el tamaño original.
          </p>
          <p>
            Si estiras una banda elástica de 10 cm y se alarga 1 cm, la deformación es 1/10 = 0.1 o 10%. 
            La deformación nos dice "cuánto se deformó el material en relación a su tamaño original".
          </p>
        </Concept>

        <Concept title="Deformación Unitaria Longitudinal (ε)">
          <p>
            La deformación unitaria longitudinal mide el cambio de longitud por unidad de longitud original. 
            Es positiva cuando el material se alarga (tensión) y negativa cuando se acorta (compresión).
          </p>

          <Formula
            expression={String.raw`\epsilon = \frac{\Delta L}{L_0}`}
            calculatorId="deformacion-unitaria"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Alargamiento (ΔL = εL₀)", expression: String.raw`\Delta L = \epsilon L_0` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>ε: Deformación unitaria (adimensional)</li>
            <li>ΔL: Cambio de longitud (m)</li>
            <li>L₀: Longitud original (m)</li>
          </ul>

          <Example>
            Una barra de acero de 2 m de longitud se alarga 0.002 m bajo carga. La deformación unitaria 
            es: ε = 0.002 / 2 = 0.001 = 0.1%. Esta deformación es típica en el rango elástico del acero, 
            donde el material recupera su forma original al retirar la carga.
          </Example>

          <Important>
            La deformación unitaria es adimensional y se expresa como decimal (0.001) o porcentaje (0.1%). 
            Los materiales típicamente fallan cuando la deformación supera ciertos límites: acero ~20%, 
            hormigón ~0.3%, vidrio ~0.1%.
          </Important>
        </Concept>

        <Concept title="Deformación Volumétrica">
          <p>
            Cuando un material se somete a presión hidrostática (presión uniforme en todas direcciones), 
            experimenta un cambio de volumen. La deformación volumétrica mide este cambio relativo:
          </p>
          <p style={{textAlign: 'center', margin: '15px 0'}}>
            ε_v = ΔV / V₀
          </p>
          <p>
            Donde ε_v es la deformación volumétrica, ΔV es el cambio de volumen y V₀ es el volumen original. 
            Esta deformación es importante en fluidos y en materiales sometidos a presión hidrostática.
          </p>
        </Concept>

        <Concept title="Deformación Angular (γ)">
          <p>
            El esfuerzo cortante causa deformación angular, que es el cambio en el ángulo entre dos líneas 
            originalmente perpendiculares. Se mide en radianes y representa cuánto se "inclina" el material.
          </p>
          <Example>
            Si un cubo de goma se deforma por cortante y una de sus caras se inclina 5°, la deformación 
            angular es γ = 5° × (π/180) = 0.087 radianes. La goma puede soportar grandes deformaciones 
            angulares (hasta 1 radián o más) sin fallar.
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Relación Esfuerzo-Deformación">
        <p>
          La relación entre esfuerzo y deformación define el comportamiento mecánico del material. 
          En el rango elástico (pequeñas deformaciones), esta relación es lineal y está gobernada 
          por la Ley de Hooke, que veremos en detalle en el siguiente tema.
        </p>
        <Important>
          <p>
            Materiales diferentes responden de manera distinta al mismo esfuerzo:
          </p>
          <ul>
            <li>Materiales rígidos (acero, hormigón): pequeña deformación para gran esfuerzo</li>
            <li>Materiales flexibles (goma, plásticos): gran deformación para pequeño esfuerzo</li>
            <li>Materiales frágiles (vidrio, cerámica): poca deformación antes de fractura</li>
            <li>Materiales dúctiles (cobre, aluminio): gran deformación antes de fractura</li>
          </ul>
        </Important>
      </TheorySection>

      <h2><span>🏗️</span> Aplicaciones Prácticas</h2>
      <div className="theory-applications-section">
        <div className="theory-subsection">
          <h3>🏗️ Diseño de Estructuras</h3>
          <p>
            Los ingenieros calculan esfuerzos y deformaciones para diseñar estructuras seguras. Un puente 
            debe soportar el peso de vehículos sin que el esfuerzo supere el límite del material. Las vigas 
            de acero en edificios se dimensionan para que el esfuerzo máximo sea menor que el límite elástico 
            (típicamente con factor de seguridad de 1.5-2.0). Las deformaciones también se limitan: un puente 
            no debe deformarse más de L/800 (donde L es la longitud) para evitar sensación de inseguridad.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>✈️ Industria Aeroespacial</h3>
          <p>
            Los aviones experimentan esfuerzos enormes durante el vuelo. Las alas se flexionan varios metros 
            en vuelo (deformación elástica) pero deben regresar a su forma original al aterrizar. El fuselaje 
            soporta esfuerzos de presurización (0.8 bar de diferencia entre interior y exterior a 10,000 m). 
            Los materiales se seleccionan por su alta resistencia y baja densidad: aleaciones de aluminio, 
            titanio y composites de fibra de carbono.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏥 Implantes Médicos</h3>
          <p>
            Los implantes ortopédicos (prótesis de cadera, rodilla) deben soportar esfuerzos similares 
            al hueso natural. El titanio es ideal porque su módulo de elasticidad (110 GPa) es cercano 
            al del hueso (10-30 GPa), evitando concentración de esfuerzos. Los stents cardíacos se expanden 
            plásticamente (deformación permanente) para mantener arterias abiertas. Los materiales con 
            memoria de forma (nitinol) se deforman a baja temperatura y recuperan su forma al calentarse 
            a temperatura corporal.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🚗 Industria Automotriz</h3>
          <p>
            Los automóviles se diseñan con zonas de deformación programada. En un choque, ciertas partes 
            (parachoques, largueros) se deforman plásticamente para absorber energía, mientras que la cabina 
            permanece rígida para proteger a los ocupantes. Los neumáticos soportan esfuerzos cortantes 
            durante curvas y frenado. Las suspensiones usan resortes que se deforman elásticamente para 
            absorber impactos del camino.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏋️ Equipamiento Deportivo</h3>
          <p>
            Las pértiga de salto con pértiga se flexionan enormemente (deformación hasta 50%) almacenando 
            energía elástica que impulsa al atleta. Las raquetas de tenis usan materiales composites que 
            se deforman al impactar la pelota, aumentando el tiempo de contacto y la velocidad de salida. 
            Las zapatillas deportivas usan espumas que se deforman al impactar el suelo, absorbiendo energía 
            y reduciendo el impacto en las articulaciones.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🌉 Monitoreo de Estructuras</h3>
          <p>
            Los puentes modernos tienen sensores de deformación (strain gauges) que miden continuamente 
            las deformaciones. Si la deformación supera límites seguros, se activan alarmas. El puente 
            Golden Gate tiene sensores que detectan deformaciones de 0.001% (10 microstrain). Los edificios 
            altos tienen acelerómetros que miden oscilaciones por viento o sismo, permitiendo evaluar 
            esfuerzos y deformaciones en tiempo real.
          </p>
        </div>
      </div>

      <h2><span>📜</span> Historia y Desarrollo</h2>
      <div className="theory-history-section">
        <div className="theory-subsection">
          <h3>🏛️ Antigüedad: Conocimiento Empírico (3000 a.C. - 1600)</h3>
          <p>
            Los constructores antiguos comprendían intuitivamente que materiales más gruesos soportaban 
            más carga, pero no tenían conceptos cuantitativos de esfuerzo. Las columnas egipcias y griegas 
            se dimensionaban por experiencia: si una columna fallaba, la siguiente se hacía más gruesa. 
            Los romanos desarrollaron el hormigón, observando que podía soportar grandes esfuerzos de 
            compresión pero fallaba fácilmente en tensión.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔬 Renacimiento: Primeros Estudios (1600-1700)</h3>
          <p>
            Galileo Galilei (1638) estudió la resistencia de vigas y cables, estableciendo que la resistencia 
            depende del área de la sección transversal. Robert Hooke (1660) descubrió la relación lineal 
            entre fuerza y deformación en resortes, estableciendo la base de la teoría de elasticidad. 
            Estos estudios marcaron el inicio del análisis cuantitativo de esfuerzos y deformaciones.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>⚙️ Era Industrial: Formalización (1700-1850)</h3>
          <p>
            Thomas Young (1807) introdujo el concepto de módulo de elasticidad, cuantificando la rigidez 
            de materiales. Augustin-Louis Cauchy (1822) desarrolló la teoría matemática del esfuerzo, 
            introduciendo el tensor de esfuerzos que describe esfuerzos en tres dimensiones. Claude-Louis 
            Navier (1826) formuló las ecuaciones de equilibrio para sólidos elásticos. Estos avances 
            permitieron calcular esfuerzos y deformaciones en estructuras complejas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏗️ Revolución Industrial: Aplicaciones (1850-1950)</h3>
          <p>
            La construcción de puentes de acero, edificios altos y maquinaria requirió análisis riguroso 
            de esfuerzos. Se desarrollaron métodos gráficos (círculo de Mohr, 1882) para visualizar estados 
            de esfuerzo. Las pruebas de materiales se estandarizaron, estableciendo límites de esfuerzo 
            para diseño. Los códigos de construcción comenzaron a especificar esfuerzos admisibles para 
            diferentes materiales.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>💻 Era Moderna: Análisis Computacional (1950-presente)</h3>
          <p>
            El método de elementos finitos (FEM, 1960s) revolucionó el análisis de esfuerzos, permitiendo 
            calcular distribuciones de esfuerzo en geometrías complejas. Los programas CAE (Computer-Aided 
            Engineering) como ANSYS, ABAQUS y COMSOL permiten simular esfuerzos y deformaciones antes de 
            construir prototipos. Los sensores de deformación (strain gauges) permiten medir deformaciones 
            en tiempo real. La mecánica de fractura estudia cómo los esfuerzos causan propagación de grietas.
          </p>
        </div>
      </div>

      <h2><span>🎯</span> Anécdotas y Curiosidades</h2>
      <div className="theory-anecdotes-section">
        <div className="theory-subsection">
          <h3>🌉 El Colapso del Puente de Quebec (1907)</h3>
          <p>
            Durante construcción, el puente de Quebec colapsó matando a 75 trabajadores. La investigación 
            reveló que los ingenieros subestimaron el esfuerzo en los miembros de compresión. El peso real 
            de la estructura era mayor que el calculado, y el esfuerzo superó el límite de pandeo del acero. 
            Este desastre llevó a regulaciones más estrictas en el cálculo de esfuerzos y factores de seguridad.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>✈️ El Comet: Fatiga por Esfuerzos Cíclicos (1954)</h3>
          <p>
            El avión de Havilland Comet, primer jet comercial, sufrió varios accidentes catastróficos. 
            La investigación reveló que los esfuerzos cíclicos de presurización (cada vuelo) causaban 
            propagación de grietas desde las ventanas cuadradas (concentración de esfuerzos en esquinas). 
            Después de 3,000 ciclos, las grietas alcanzaban tamaño crítico y el fuselaje explotaba. 
            Este desastre estableció la importancia de la mecánica de fractura y el diseño contra fatiga. 
            Ahora todas las ventanas de aviones son ovaladas para evitar concentración de esfuerzos.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🗼 La Torre Eiffel: Deformación por Temperatura</h3>
          <p>
            La Torre Eiffel (300 m, 10,000 toneladas de acero) se deforma hasta 15 cm por cambios de temperatura. 
            En verano, el lado soleado se calienta más, expandiéndose y haciendo que la torre se incline 
            hasta 18 cm hacia el lado sombreado. Esta deformación térmica es completamente elástica: la torre 
            regresa a su posición original cuando la temperatura se equilibra. Gustave Eiffel calculó estas 
            deformaciones en 1889, demostrando comprensión avanzada de esfuerzos térmicos.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏋️ El Récord de Deformación: Aerogel</h3>
          <p>
            El aerogel, material más ligero del mundo (99.8% aire), puede comprimirse hasta 1% de su volumen 
            original (deformación de 99%) y recuperar su forma completamente. Soporta esfuerzos de compresión 
            de hasta 3 MPa a pesar de su densidad de solo 3 kg/m³. Esta combinación única de baja densidad 
            y alta resistencia lo hace ideal para aislamiento térmico en aplicaciones espaciales.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🦴 Huesos: Materiales Adaptativos</h3>
          <p>
            Los huesos se remodelan continuamente en respuesta a esfuerzos (Ley de Wolff, 1892). Donde 
            el esfuerzo es alto, el hueso se refuerza depositando más material. Donde el esfuerzo es bajo, 
            el hueso se reabsorbe. Los astronautas en gravedad cero pierden hasta 1-2% de masa ósea por mes 
            porque los esfuerzos son mínimos. Los atletas desarrollan huesos más densos en áreas de alto 
            esfuerzo. Este proceso de adaptación toma meses y es completamente reversible.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🕷️ Tela de Araña: Resistencia Extrema</h3>
          <p>
            La seda de araña soporta esfuerzos de tensión de hasta 1,000 MPa (comparable al acero de alta 
            resistencia) con deformaciones de hasta 30% antes de romperse. Su resistencia específica 
            (resistencia/densidad) es 5 veces mayor que el acero. Si una tela de araña tuviera el grosor 
            de un lápiz, podría detener un avión Boeing 747 en vuelo. Los científicos intentan replicar 
            esta combinación de resistencia y elasticidad para aplicaciones en chalecos antibalas y cables.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          El esfuerzo (σ o τ) es la fuerza interna por unidad de área que actúa dentro de un material. 
          El esfuerzo normal (σ = F/A) actúa perpendicular a la superficie y puede ser de tensión o compresión. 
          El esfuerzo cortante (τ = F_t/A) actúa tangencial a la superficie, causando deslizamiento entre capas.
        </p>
        <p>
          La deformación (ε o γ) es el cambio relativo en las dimensiones de un cuerpo. La deformación 
          unitaria longitudinal (ε = ΔL/L₀) mide el cambio de longitud por unidad de longitud original. 
          Es adimensional y se expresa como decimal o porcentaje. La deformación angular (γ) mide el cambio 
          en ángulos originalmente rectos.
        </p>
        <p>
          La relación entre esfuerzo y deformación define el comportamiento mecánico del material. 
          Materiales rígidos tienen pequeña deformación para gran esfuerzo, mientras que materiales flexibles 
          tienen gran deformación para pequeño esfuerzo. En el rango elástico, esta relación es lineal 
          (Ley de Hooke). El análisis de esfuerzos y deformaciones es fundamental en ingeniería estructural, 
          aeroespacial, biomédica y muchas otras aplicaciones.
        </p>
      </div>
    </>
  );
};

export default EsfuerzoDeformacionTheory;
