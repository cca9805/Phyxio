import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as energia_libre_helmholtzDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Energía Libre de Helmholtz",
  descripcion: "Potencial termodinámico que determina la espontaneidad de procesos a temperatura y volumen constantes. Comprende la función de trabajo, su relación con energía interna y entropía, y aplicaciones en mecánica estadística y sistemas a volumen constante.",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const EnergiaLibreHelmholtzTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Energía Libre de Helmholtz?">
        <Concept title="Definición">
          <p>
            La energía libre de Helmholtz (A), también llamada función de trabajo, es un 
            potencial termodinámico que mide el trabajo máximo que se puede obtener de un sistema cerrado 
            a temperatura y volumen constantes.
          </p>
          
          <p>
            Nombrada en honor a Hermann von Helmholtz, es especialmente útil para sistemas a volumen 
            constante, como reacciones en recipientes rígidos.
          </p>

          <Important>
            <p>Criterio de Espontaneidad (T, V constantes):</p>
            <ul>
              <li>ΔA &lt; 0: Proceso espontáneo</li>
              <li>ΔA = 0: Sistema en equilibrio</li>
              <li>ΔA &gt; 0: Proceso no espontáneo</li>
            </ul>
          </Important>
        </Concept>

        <Concept title="Comparación con Energía de Gibbs">
          <p>
            Mientras que la energía de Gibbs (G) es útil para procesos a presión constante, la energía 
            de Helmholtz (A) es apropiada para procesos a volumen constante. Ambas son funciones de 
            estado que combinan energía y entropía.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Definición Matemática">
        <Concept title="Relación Fundamental">
          <p>
            La energía libre de Helmholtz se define como:
          </p>

          <Formula 
            expression={String.raw`A = U - TS`}
            description="Definición de energía libre de Helmholtz"
            calculatorId="energia_libre_helmholtz-grupo-1"
            definitions={energia_libre_helmholtzDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Energía interna", expression: String.raw`U = A + TS` },
              { description: "Entropía", expression: String.raw`S = \frac{U - A}{T}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>A: Energía libre de Helmholtz (J)</li>
            <li>U: Energía interna del sistema (J)</li>
            <li>T: Temperatura absoluta (K)</li>
            <li>S: Entropía del sistema (J/K)</li>
          </ul>

          <p>
            El término TS representa la energía no disponible para realizar trabajo debido al desorden térmico.
          </p>
        </Concept>

        <Concept title="Cambio de Energía Libre">
          <p>
            El cambio de energía libre de Helmholtz en un proceso es:
          </p>

          <Formula 
            expression={String.raw`\Delta A = \Delta U - T\Delta S`}
            description="Cambio de energía libre de Helmholtz"
            calculatorId="energia_libre_helmholtz-grupo-1"
            definitions={energia_libre_helmholtzDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>ΔA: Cambio de energía libre de Helmholtz (J)</li>
            <li>ΔU: Cambio de energía interna (J)</li>
            <li>T: Temperatura absoluta (K)</li>
            <li>ΔS: Cambio de entropía (J/K)</li>
          </ul>

          <p>
            Para procesos isotérmicos (T constante): ΔA = ΔU - TΔS
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Trabajo Máximo">
        <Concept title="Relación con el Trabajo">
          <p>
            A temperatura y volumen constantes, el cambio de energía libre de Helmholtz representa 
            el trabajo máximo que se puede obtener:
          </p>

          <Formula 
            expression={String.raw`W_{\text{max}} = -\Delta A`}
            description="Trabajo máximo a T y V constantes"
            calculatorId="energia_libre_helmholtz-grupo-1"
            definitions={energia_libre_helmholtzDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>W<sub>max</sub>: Trabajo máximo disponible (J)</li>
            <li>ΔA: Cambio de energía libre de Helmholtz (J)</li>
          </ul>

          <p>
            Este trabajo incluye todo tipo de trabajo (eléctrico, mecánico, etc.) que el sistema 
            puede realizar a volumen constante.
          </p>
        </Concept>

        <Concept title="Relación con la Primera Ley">
          <p>
            Para un proceso isotérmico reversible a volumen constante:
          </p>
          <ul>
            <li>ΔU = Q (no hay trabajo PV)</li>
            <li>ΔA = Q - TΔS</li>
            <li>W<sub>max</sub> = -ΔA</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Relación entre Potenciales">
        <Concept title="Transformación de Legendre">
          <p>
            Los cuatro potenciales termodinámicos están relacionados:
          </p>
          <ul>
            <li>U: Energía interna (variables naturales: S, V)</li>
            <li>H = U + PV: Entalpía (variables naturales: S, P)</li>
            <li>A = U - TS: Energía de Helmholtz (variables naturales: T, V)</li>
            <li>G = H - TS = U + PV - TS: Energía de Gibbs (variables naturales: T, P)</li>
          </ul>

          <p>
            Relación directa: G = A + PV
          </p>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🔬 Mecánica estadística y función de partición</h3>
          <p>
            La energía libre de Helmholtz es fundamental en mecánica estadística, relacionada con la función de partición 
            canónica Z mediante A = -kT ln(Z), donde k es la constante de Boltzmann. Esta relación conecta termodinámica 
            macroscópica con física microscópica. Los físicos calculan propiedades termodinámicas (presión, entropía, 
            capacidad calorífica) de gases, líquidos y sólidos derivando A respecto a variables naturales T y V. 
            Por ejemplo, para un gas ideal: Z = (V/λ³)^N/N!, donde λ es longitud de onda térmica de De Broglie. 
            Esto da A = -NkT[ln(V/N) + 3/2 ln(2πmkT/h²) + 1], reproduciendo la ecuación de estado PV = NkT. 
            Simulaciones computacionales modernas (Monte Carlo, dinámica molecular) calculan A de sistemas complejos 
            (proteínas, polímeros, aleaciones metálicas) para predecir estabilidad y transiciones de fase.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧲 Sistemas magnéticos y magnetización</h3>
          <p>
            Los materiales ferromagnéticos (hierro, níquel, cobalto) se describen usando energía de Helmholtz con campo 
            magnético H como variable: A(T, V, H). La magnetización M = -(∂A/∂H)_T,V determina el momento magnético total. 
            Un imán permanente de neodimio-hierro-boro (NdFeB) tiene energía libre que depende de temperatura: a 20°C, 
            ΔA para magnetización es -25 kJ/kg; a 80°C, disminuye a -10 kJ/kg (pierde fuerza). Por encima de la 
            temperatura de Curie (310°C para NdFeB), ΔA cambia de signo y el material se vuelve paramagnético 
            (pierde magnetización permanente). Los discos duros magnéticos (HDDs) almacenan datos usando dominios 
            magnéticos de 50 nm, cada uno con energía libre A minimizada en dirección "arriba" o "abajo" (bits 1 y 0). 
            La energía de Helmholtz determina la barrera energética (~40 kT a 300 K) que mantiene los datos estables 
            durante años.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💎 Adsorción en superficies y catálisis</h3>
          <p>
            La adsorción de gases en superficies sólidas (catalizadores, carbón activado, zeolitas) se describe mediante 
            la isoterma de Langmuir, derivada de minimizar la energía de Helmholtz. Una molécula de gas que se adsorbe 
            en superficie tiene ΔA {'<'} 0 si la energía de enlace supera la pérdida de entropía traslacional. Para CO en 
            platino (catalizador automotriz): ΔA_ads = -120 kJ/mol a 300 K, favoreciendo adsorción fuerte. A 500°C, 
            ΔA_ads = -40 kJ/mol, permitiendo desorción y regeneración del catalizador. Los convertidores catalíticos 
            de automóviles usan esta dependencia: a baja T, atrapan CO, NOx; a alta T (motor caliente), los oxidan a 
            CO₂, N₂. Una superficie de 1 g de Pt/γ-Al₂O₃ tiene ~200 m² de área, adsorbiendo 10¹⁹ moléculas. 
            La energía de Helmholtz determina la cobertura superficial θ = KP/(1+KP), donde K = exp(-ΔA/RT).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔋 Supercondensadores y almacenamiento electrostático</h3>
          <p>
            Los supercondensadores (ultracapacitores) almacenan energía en la doble capa eléctrica de interfaz 
            electrodo-electrolito, proceso gobernado por energía de Helmholtz. Cuando se aplica voltaje V, los iones 
            del electrolito se acumulan en la superficie porosa del electrodo (carbón activado, grafeno), minimizando 
            A del sistema. La capacitancia C = 2A(T,V,σ)/∂V², donde σ es densidad de carga superficial. Un 
            supercondensador de 3000 F y 2.7 V almacena energía E = ½CV² = 11 kJ, comparable a batería pequeña pero 
            con potencia 100 veces mayor (carga/descarga en segundos vs minutos). A diferencia de baterías (reacciones 
            químicas con ΔG), supercondensadores usan solo cambios en A electrostático (reversibles, 1 millón de ciclos). 
            Autobuses eléctricos de Ginebra usan supercondensadores que recargan en 20 segundos en cada parada. 
            La energía de Helmholtz determina la densidad energética máxima: ~10 Wh/kg vs 250 Wh/kg de baterías Li-ion.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧪 Transiciones de fase en recipientes rígidos</h3>
          <p>
            Las transiciones de fase (sólido-líquido, líquido-gas) en sistemas a volumen constante (autoclaves, 
            reactores batch) se predicen usando energía de Helmholtz. Agua en autoclave cerrada: a 20°C y V = 1 L, 
            A_líquido {'<'} A_vapor (líquida estable). Calentando a V constante, la presión aumenta siguiendo la isócora. 
            A 374°C y 22 MPa (punto crítico), A_líquido = A_vapor: ambas fases coexisten. Por encima del punto crítico, 
            la distinción líquido-gas desaparece (fluido supercrítico). La extracción supercrítica con CO₂ 
            (descafeinado de café, extracción de aceites esenciales) opera a 31°C y 7.4 MPa, explotando propiedades 
            del CO₂ supercrítico (densidad de líquido, viscosidad de gas). Una planta industrial procesa 10 ton/día de 
            granos de café, circulando CO₂ a 100 bar. La energía de Helmholtz determina la solubilidad de cafeína: 
            ΔA_disolución {'<'} 0 en CO₂ supercrítico (30 g cafeína/L CO₂), casi cero en CO₂ gaseoso normal.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El desarrollo de la energía libre de Helmholtz
        </h2>
        
        <div className="theory-subsection">
          <h3>⚙️ Hermann von Helmholtz y la energía libre (1882)</h3>
          <p>
            Hermann von Helmholtz, médico convertido en físico, introdujo el concepto de "energía libre" (Freie Energie) 
            en su artículo "Die Thermodynamik chemischer Vorgänge" (1882). Helmholtz definió A = U - TS y demostró 
            que a temperatura constante, el trabajo máximo extraíble de un sistema cerrado es W_max = -ΔA. Su motivación 
            era práctica: calcular el voltaje máximo de pilas electroquímicas. Helmholtz mostró que el calor de reacción 
            (ΔU) no determina directamente el trabajo eléctrico; es ΔA quien lo hace. Por ejemplo, la reacción 
            Zn + Cu²⁺ → Zn²⁺ + Cu tiene ΔU = -217 kJ/mol pero ΔA = -212 kJ/mol a 298 K (la diferencia TΔS = -5 kJ/mol 
            se disipa como calor). Helmholtz fue pionero en aplicar termodinámica a fisiología: calculó ΔA de contracción 
            muscular, demostrando que músculos convierten energía química en trabajo mecánico con eficiencia ~25%. 
            Su libro "Handbuch der physiologischen Optik" (1867) revolucionó la oftalmología aplicando física a visión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Josiah Willard Gibbs y la distinción A vs G (1873-1878)</h3>
          <p>
            Mientras Helmholtz desarrollaba la función A, Josiah Willard Gibbs en Yale trabajaba independientemente 
            en potenciales termodinámicos. En su obra "On the Equilibrium of Heterogeneous Substances" (1873-1878), 
            Gibbs distinguió claramente entre energía de Helmholtz A = U - TS (variables naturales T,V) y energía 
            de Gibbs G = H - TS (variables naturales T,P), conectadas por G = A + PV. Gibbs demostró que A es natural 
            para sistemas a volumen constante (mecánica estadística, reacciones en autoclaves), mientras G es natural 
            para procesos a presión constante (química atmosférica, bioquímica). Paradójicamente, Helmholtz publicó 
            primero (1882) pero Gibbs había desarrollado la teoría completa años antes (1875), solo que en una revista 
            oscura que casi nadie leía. La notación moderna A (de Arbeit = trabajo en alemán) honra a Helmholtz; 
            algunos textos europeos usan F (de función de Helmholtz). La comunidad anglosajona usa A; la continental, F.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📊 Ludwig Boltzmann y la interpretación estadística (1884)</h3>
          <p>
            Ludwig Boltzmann revolucionó la energía de Helmholtz al conectarla con física microscópica en su artículo 
            "Über die Eigenschaften monozyklischer und anderer damit verwandter Systeme" (1884). Boltzmann demostró 
            que A = -kT ln(Z), donde Z = Σ exp(-E_i/kT) es la función de partición canónica sumando sobre microestados i. 
            Esta fórmula es el puente entre termodinámica (A macroscópico) y mecánica estadística (E_i microscópico). 
            Boltzmann derivó todas las propiedades termodinámicas de A: presión P = -(∂A/∂V)_T, entropía S = -(∂A/∂T)_V, 
            energía interna U = A + TS. Su ecuación S = k ln(W), grabada en su tumba en Viena, conecta entropía con 
            multiplicidad W de microestados. La energía de Helmholtz A contiene toda la información termodinámica de 
            un sistema a T,V constantes. Boltzmann sufrió depresión severa (en parte por rechazo a sus ideas atomísticas) 
            y se suicidó en 1906, semanas antes de que experimentos confirmaran definitivamente la teoría atómica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 Lars Onsager y las relaciones de reciprocidad (1931)</h3>
          <p>
            Lars Onsager, físico noruego-americano, ganó el Nobel de Química 1968 por sus "relaciones de reciprocidad" 
            (1931) que extienden la energía de Helmholtz a procesos irreversibles cerca del equilibrio. Onsager demostró 
            que los coeficientes de transporte (conducción térmica, difusión, conducción eléctrica) satisfacen simetrías 
            específicas: L_ij = L_ji, donde L_ij relaciona el flujo de la cantidad i con la fuerza de la cantidad j. 
            Estas relaciones se derivan minimizando la producción de entropía dΣ/dt, equivalente a extremizar la energía 
            de Helmholtz en sistemas fuera de equilibrio. Por ejemplo, el efecto Peltier (corriente eléctrica → flujo de 
            calor) y efecto Seebeck (gradiente térmico → voltaje) tienen coeficientes relacionados por L_12 = L_21. 
            Onsager aplicó su teoría a electroforesis, celdas de combustible y separación isotópica. Durante la Segunda 
            Guerra Mundial, trabajó en el Proyecto Manhattan separando U-235 de U-238 usando sus ecuaciones de transporte 
            para optimizar difusión gaseosa. La energía de Helmholtz fue clave en cálculos de eficiencia de separación.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🖥️ Era computacional y simulaciones modernas (1980-presente)</h3>
          <p>
            El advenimiento de supercomputadoras transformó el uso de energía de Helmholtz. En 1987, el algoritmo de 
            "muestreo umbrella" permitió calcular A de sistemas complejos (proteínas, líquidos, materiales) mediante 
            simulaciones de dinámica molecular. Los científicos calculan "energía libre de plegamiento" de proteínas: 
            ΔA entre estados plegado y desplegado determina estabilidad. Una proteína típica tiene ΔA_plegamiento = 
            -40 kJ/mol: estable pero marginalmente (solo ~16 kT a 300 K, equivalente a 2-3 enlaces de hidrógeno). 
            Pequeñas mutaciones pueden desestabilizar la proteína causando enfermedades (fibrosis quística, anemia 
            falciforme). El proyecto Folding@home (2000) usa millones de PCs domésticos para calcular A de proteínas, 
            simulando 1 ms de dinámica molecular (récord: 2020). En 2020, AlphaFold2 de DeepMind predice estructuras 
            proteicas con IA, pero validación termodinámica (¿ΔA {'<'} 0?) sigue requiriendo cálculos clásicos de energía 
            de Helmholtz. La función A es el estándar dorado para validar predicciones computacionales.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🎻 Helmholtz, el médico que revolucionó la física</h3>
          <p>
            Hermann von Helmholtz estudió medicina (único camino accesible económicamente) pero su pasión era la física. 
            Como médico militar, diseccionó cadáveres para entender los ojos, desarrollando el oftalmoscopio (1851) que 
            revolucionó oftalmología. Simultáneamente investigaba acústica, creando resonadores de Helmholtz para analizar 
            timbres musicales (era músico aficionado). Su trabajo sobre conservación de energía (1847) estableció que 
            el cuerpo humano sigue las mismas leyes físicas que máquinas: no hay "fuerza vital" mística. Esto enfureció 
            a vitalistas. En 1871, con 50 años, Helmholtz abandonó medicina para dedicarse a física pura, aceptando 
            la cátedra de física en Berlín (antes ocupada por Magnus). A los 61 años publicó su teoría de energía libre 
            (1882). Curiosidad: Helmholtz patentó un telégrafo electromagnético en 1850 (antes de Bell), pero no lo 
            comercializó porque consideraba la ciencia más importante que el dinero. Murió en 1894 tras caída accidental, 
            dejando legado en fisiología, acústica, termodinámica y electrodinámica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💀 El suicidio trágico de Boltzmann (1906)</h3>
          <p>
            Ludwig Boltzmann, quien conectó la energía de Helmholtz con mecánica estadística, sufrió depresión severa 
            toda su vida. Enfrentó rechazo feroz a sus ideas atomísticas: físicos como Ernst Mach y Wilhelm Ostwald 
            negaban la existencia de átomos, considerando la teoría cinética "fantasías matemáticas". Boltzmann defendió 
            apasionadamente el atomismo en conferencias públicas, pero el estrés lo agotó. En 1906, durante vacaciones 
            en Duino (Italia), Boltzmann se ahorcó mientras su esposa e hija bañaban en el mar. Tenía 62 años. Ironía 
            trágica: pocas semanas después, Jean Perrin publicó mediciones precisas del número de Avogadro observando 
            movimiento browniano, confirmando definitivamente la existencia de átomos y vindicando a Boltzmann. En su 
            tumba en Viena se grabó S = k ln(W), su ecuación más famosa. La energía de Helmholtz A = -kT ln(Z) que 
            Boltzmann derivó se convirtió en la base de mecánica estadística moderna, pero él no vivió para ver su triunfo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧊 La paradoja del hielo IX y Kurt Vonnegut</h3>
          <p>
            En la novela "Cat's Cradle" (1963), Kurt Vonnegut imaginó "hielo-nueve", una forma cristalina de agua con 
            punto de fusión de 45.8°C que congela instantáneamente cualquier agua al contacto, destruyendo la Tierra. 
            Vonnegut inventó esta idea en 1945 conversando con su hermano Bernard (químico en GE) sobre polimorfismo. 
            Sorprendentemente, el hielo-nueve real existe: descubierto en 1968 a -51°C y 0.2 GPa. A estas condiciones, 
            ΔA(hielo-IX) {'<'} ΔA(hielo-I), haciendo hielo-IX termodinámicamente estable. Hay al menos 18 formas de hielo 
            cristalino, cada una con su región de estabilidad en diagrama P-T. El hielo-VII existe en el manto de Urano 
            y Neptuno (P {'>'} 2 GPa), posiblemente en océanos subterráneos de lunas heladas (Europa, Encélado). La energía 
            de Helmholtz A(T,V) determina qué polimorfo es estable: a P,T atmosféricas, hielo-I (hexagonal común) 
            tiene ΔA menor. El hielo-nueve real no es peligroso: a P atmosférica y T normal, ΔA(hielo-I) {'<<'} ΔA(hielo-IX), 
            por lo que hielo-IX se transformaría explosivamente en hielo-I ordinario, no al revés.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔋 La batería de Einstein-Szilard que nunca fue</h3>
          <p>
            Albert Einstein y Leo Szilard patentaron en 1927 una batería electroquímica revolucionaria (US Patent 1,781,541) 
            basada en optimizar ΔA de reacciones redox. Su diseño usaba metales líquidos (sodio-potasio) y electrolito 
            de β-alumina, alcanzando teóricamente 2.5 V por celda. Calcularon que ΔA = -240 kJ/mol (Na → Na⁺ + e⁻), 
            mayor que baterías de plomo-ácido de la época (ΔA = -200 kJ/mol). Einstein, genio de relatividad, aplicaba 
            termodinámica a tecnología práctica durante su época en Berlín (1914-1933). La batería nunca se comercializó: 
            sodio-potasio líquido es extremadamente reactivo, y la β-alumina cerámica era difícil de fabricar en 1920s. 
            Ironía: 90 años después, Tesla desarrolló baterías de sodio-azufre (NaS) para almacenamiento en red eléctrica, 
            operando a 300°C con sodio líquido, similar a la idea de Einstein-Szilard. Estas baterías usan energía de 
            Helmholtz para calcular eficiencia: ΔA/Q_in = 89% (mucho mejor que 25% de motores combustión).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧲 Los imanes que pierden memoria por calor</h3>
          <p>
            Los imanes permanentes de neodimio (NdFeB) pierden su magnetización irreversiblemente si se calientan por 
            encima de su temperatura de Curie (310-400°C según aleación). Esto ocurre porque la energía de Helmholtz 
            A(T,M) cambia su forma: a baja T, A tiene dos mínimos (M positiva y negativa, estados "arriba" y "abajo"); 
            a T_Curie, estos mínimos se fusionan en uno solo (M = 0). Los dominios magnéticos, orientados originalmente, 
            se aleatorizan cuando ΔA favorece desorden. Caso real: un disco duro magnético expuesto a fuego pierde 
            datos permanentemente. Incluso calentar a 80°C durante años causa "thermal decay": algunos dominios 
            magnéticos pequeños (50 nm) tienen barrera ΔA ≈ 40 kT; a 80°C, kT aumenta permitiendo que algunos bits 
            aleatorios se inviertan espontáneamente. Las cintas LTO de archivo (backup) se almacenan a {'<'}20°C para 
            minimizar decay térmico, preservando datos 30 años. La energía de Helmholtz gobierna la longevidad de todos 
            los medios de almacenamiento magnético.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎨 Los pigmentos que cambian de color: termocrómicos</h3>
          <p>
            Las pinturas termocromáticas (tazas que cambian color con café caliente, camisetas "mood", termómetros 
            de tira) explotan transiciones de fase gobernadas por energía de Helmholtz. Microencapsulan cristales 
            líquidos o leucocolorantes mezclados con ácidos débiles. A baja T, el sistema tiene ΔA menor en forma 
            coloreada (complejo ácido-colorante); a alta T, ΔA favorece forma incolora (disociación). Una taza "mágica" 
            típica usa espiropirano: a 20°C, espiral cerrada (incolora, ΔA = -10 kJ/mol); a 60°C, espiral abierta 
            (rosada, ΔA = -15 kJ/mol). La transición ocurre a T_c = ΔH/ΔS ≈ 40°C. Aplicación seria: etiquetas 
            termocromáticas en productos farmacéuticos detectan si se rompió cadena de frío (vacunas, insulina). 
            Una etiqueta verde que se vuelve roja indica T {'>'} 8°C durante 4 horas acumuladas, señalando que ΔA del 
            producto aumentó (degradación). Los científicos diseñan leucocolorantes ajustando T_c mediante síntesis 
            química, controlando ΔH y ΔS para obtener temperatura de transición deseada.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            La energía libre de Helmholtz (A = U - TS) es un potencial termodinámico que mide el trabajo máximo 
            disponible de un sistema a temperatura y volumen constantes. Es especialmente útil para sistemas cerrados 
            y reacciones en recipientes rígidos.
          </li>
          <li>
            El criterio de espontaneidad: ΔA {'<'} 0 (proceso espontáneo), ΔA = 0 (equilibrio), ΔA {'>'} 0 
            (proceso no espontáneo). El cambio de energía libre es ΔA = ΔU - TΔS, y el trabajo máximo es W_max = -ΔA.
          </li>
          <li>
            Relación con otros potenciales: A tiene variables naturales (T,V), mientras G = A + PV tiene variables (T,P). 
            Los cuatro potenciales fundamentales U, H, A, G están conectados mediante transformaciones de Legendre.
          </li>
          <li>
            Conexión con mecánica estadística: A = -kT ln(Z), donde Z es la función de partición canónica. Esta relación 
            conecta termodinámica macroscópica con física microscópica, permitiendo calcular propiedades a partir de 
            microestados cuánticos.
          </li>
          <li>
            Aplicaciones prácticas: mecánica estadística (función de partición), sistemas magnéticos (magnetización), 
            adsorción en superficies (catálisis), supercondensadores (almacenamiento electrostático), transiciones de 
            fase a volumen constante (autoclaves, fluidos supercríticos). La energía de Helmholtz es fundamental en 
            física estadística, ciencia de materiales y química de superficies.
          </li>
        </ul>
      </div>
    </>
  );
};

export default EnergiaLibreHelmholtzTheory;
