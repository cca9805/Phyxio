import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Módulos Elásticos",
  descripcion: "Módulos de Young, corte, volumétrico y coeficiente de Poisson",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const ModulosElasticosTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a los Módulos Elásticos">
        <p>
          Los módulos elásticos son constantes que caracterizan la rigidez de un material ante 
          diferentes tipos de deformación. Cada módulo relaciona un tipo específico de esfuerzo 
          con su deformación correspondiente. Estas constantes son propiedades intrínsecas del 
          material y son fundamentales para el diseño estructural.
        </p>
        <p>
          Existen cuatro constantes elásticas principales: el módulo de Young (E), el módulo de 
          corte (G), el módulo volumétrico (K) y el coeficiente de Poisson (ν). Estas constantes 
          no son independientes; están relacionadas matemáticamente, por lo que conociendo dos 
          de ellas podemos calcular las demás.
        </p>
      </TheorySection>

      <TheorySection title="Módulo de Young (E)">
        <Concept title="Definición y Significado">
          <p>
            El módulo de Young, también llamado módulo de elasticidad longitudinal, mide la rigidez 
            de un material ante deformación por tensión o compresión. Es la pendiente de la curva 
            esfuerzo-deformación en la región elástica.
          </p>
          <Formula
            expression={String.raw`E = \frac{\sigma}{\epsilon}`}
            calculatorId="modulo-young"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>E: Módulo de Young (Pa o GPa)</li>
            <li>σ: Esfuerzo normal (Pa)</li>
            <li>ε: Deformación unitaria (adimensional)</li>
          </ul>
          <p>
            Un módulo de Young alto indica que el material es rígido y se deforma poco bajo carga. 
            Un módulo bajo indica que el material es flexible y se deforma fácilmente.
          </p>
        </Concept>

        <Concept title="Valores Típicos">
          <p>Módulos de Young de materiales comunes:</p>
          <ul>
            <li>Diamante: 1200 GPa (material más rígido conocido)</li>
            <li>Carburo de tungsteno: 600-700 GPa</li>
            <li>Acero: 200-210 GPa</li>
            <li>Titanio: 110-120 GPa</li>
            <li>Cobre: 110-130 GPa</li>
            <li>Aluminio: 69-70 GPa</li>
            <li>Vidrio: 50-90 GPa</li>
            <li>Hormigón: 20-40 GPa</li>
            <li>Madera (paralela a fibra): 10-15 GPa</li>
            <li>Hueso: 10-20 GPa</li>
            <li>Polietileno: 0.2-0.7 GPa</li>
            <li>Caucho: 0.001-0.1 GPa</li>
          </ul>
          <Example>
            El acero (E = 200 GPa) es casi 3 veces más rígido que el aluminio (E = 70 GPa). 
            Esto significa que una barra de aluminio se deformará 3 veces más que una de acero 
            del mismo tamaño bajo la misma carga. Por eso las estructuras de aluminio necesitan 
            secciones más grandes para tener la misma rigidez que las de acero.
          </Example>
        </Concept>

        <Concept title="Forma Alternativa">
          <p>
            El módulo de Young también puede expresarse en términos de fuerza y alargamiento:
          </p>
          <p style={{textAlign: 'center', margin: '15px 0'}}>
            E = (F × L₀) / (A × ΔL)
          </p>
          <p>
            Esta forma es útil para determinar experimentalmente el módulo de Young midiendo 
            el alargamiento de una probeta bajo carga conocida.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Módulo de Corte (G)">
        <Concept title="Definición y Significado">
          <p>
            El módulo de corte, también llamado módulo de rigidez o módulo de cizalladura, mide 
            la resistencia de un material a la deformación por cortante. Relaciona el esfuerzo 
            cortante con la deformación angular.
          </p>
          <Formula
            expression={String.raw`G = \frac{\tau}{\gamma}`}
            calculatorId="modulo-corte"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>G: Módulo de corte (Pa o GPa)</li>
            <li>τ: Esfuerzo cortante (Pa)</li>
            <li>γ: Deformación angular (radianes)</li>
          </ul>
          <p>
            La deformación angular (γ) es el cambio en el ángulo entre dos líneas originalmente 
            perpendiculares. Se mide en radianes y representa cuánto se "inclina" el material.
          </p>
        </Concept>

        <Concept title="Relación con el Módulo de Young">
          <p>
            El módulo de corte no es independiente del módulo de Young. Están relacionados por:
          </p>
          <Formula
            expression={String.raw`G = \frac{E}{2(1+\nu)}`}
            description="Relación entre G, E y ν"
          />
          <p>
            Para la mayoría de los metales, ν ≈ 0.3, por lo que G ≈ 0.38E. Esto significa que 
            el módulo de corte es aproximadamente 38% del módulo de Young.
          </p>
          <Example>
            Para el acero (E = 200 GPa, ν = 0.3): G = 200 / (2 × 1.3) = 77 GPa. 
            Para el aluminio (E = 70 GPa, ν = 0.33): G = 70 / (2 × 1.33) = 26 GPa.
          </Example>
        </Concept>

        <Concept title="Valores Típicos">
          <p>Módulos de corte de materiales comunes:</p>
          <ul>
            <li>Acero: 75-80 GPa</li>
            <li>Titanio: 40-45 GPa</li>
            <li>Cobre: 40-48 GPa</li>
            <li>Aluminio: 25-28 GPa</li>
            <li>Hormigón: 8-15 GPa</li>
            <li>Madera: 0.5-1 GPa</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Coeficiente de Poisson (ν)">
        <Concept title="Definición y Significado">
          <p>
            El coeficiente de Poisson mide la relación entre la deformación transversal y la 
            deformación longitudinal. Cuando estiramos un material, no solo se alarga, sino que 
            también se adelgaza. El coeficiente de Poisson cuantifica este efecto.
          </p>
          <Formula
            expression={String.raw`\nu = -\frac{\epsilon_t}{\epsilon_l}`}
            calculatorId="coeficiente-poisson"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>ν: Coeficiente de Poisson (adimensional)</li>
            <li>ε_t: Deformación transversal (contracción)</li>
            <li>ε_l: Deformación longitudinal (alargamiento)</li>
          </ul>
          <p>
            El signo negativo indica que cuando el material se alarga (ε_l positivo), se contrae 
            lateralmente (ε_t negativo). El coeficiente de Poisson es siempre positivo para 
            materiales convencionales.
          </p>
        </Concept>

        <Concept title="Límites Teóricos">
          <p>
            Para materiales isótropos (propiedades iguales en todas direcciones), el coeficiente 
            de Poisson debe estar entre 0 y 0.5:
          </p>
          <ul>
            <li>ν = 0: Material que no se contrae lateralmente (corcho, espumas)</li>
            <li>ν = 0.5: Material incompresible (caucho, líquidos)</li>
            <li>ν típico: 0.25-0.35 para la mayoría de metales</li>
          </ul>
          <Important>
            Materiales con ν = 0.5 son incompresibles: su volumen no cambia bajo carga. 
            El caucho tiene ν ≈ 0.49-0.50, por eso es casi imposible comprimirlo.
          </Important>
        </Concept>

        <Concept title="Valores Típicos">
          <p>Coeficientes de Poisson de materiales comunes:</p>
          <ul>
            <li>Caucho: 0.48-0.50 (casi incompresible)</li>
            <li>Oro: 0.42-0.44</li>
            <li>Arcilla saturada: 0.40-0.50</li>
            <li>Aluminio: 0.33</li>
            <li>Cobre: 0.33</li>
            <li>Acero: 0.27-0.30</li>
            <li>Vidrio: 0.20-0.27</li>
            <li>Hormigón: 0.15-0.25</li>
            <li>Corcho: 0.0 (no se contrae lateralmente)</li>
          </ul>
          <Example>
            Si estiramos una barra de acero (ν = 0.3) con deformación longitudinal de 0.001 
            (0.1%), la deformación transversal será: ε_t = -0.3 × 0.001 = -0.0003 (-0.03%). 
            El signo negativo indica contracción: si la barra se alarga 1 mm, su diámetro 
            disminuye 0.3 mm.
          </Example>
        </Concept>

        <Concept title="Deformación Transversal">
          <p>
            Podemos calcular la deformación transversal conociendo ν y la deformación longitudinal:
          </p>
          <Formula
            expression={String.raw`\epsilon_t = -\nu \epsilon_l`}
            description="Deformación transversal"
          />
          <p>
            Esta relación es importante en diseño porque la contracción lateral puede causar 
            problemas en conexiones y ajustes.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Módulo Volumétrico (K)">
        <Concept title="Definición">
          <p>
            El módulo volumétrico mide la resistencia de un material a cambios de volumen bajo 
            presión hidrostática (presión uniforme en todas direcciones). Aunque no tenemos 
            calculadora para este módulo, es importante conocerlo.
          </p>
          <p style={{textAlign: 'center', margin: '15px 0'}}>
            K = -V × (dP/dV) = P / (ΔV/V₀)
          </p>
          <p>Donde:</p>
          <ul>
            <li>K: Módulo volumétrico (Pa)</li>
            <li>P: Presión aplicada (Pa)</li>
            <li>ΔV/V₀: Cambio relativo de volumen</li>
          </ul>
        </Concept>

        <Concept title="Relación con Otras Constantes">
          <p>
            El módulo volumétrico se relaciona con E y ν mediante:
          </p>
          <p style={{textAlign: 'center', margin: '15px 0'}}>
            K = E / [3(1 - 2ν)]
          </p>
          <p>
            Cuando ν → 0.5 (material incompresible), K → ∞. Esto tiene sentido: un material 
            incompresible tiene resistencia infinita a cambios de volumen.
          </p>
        </Concept>

        <Concept title="Valores Típicos">
          <p>Módulos volumétricos aproximados:</p>
          <ul>
            <li>Acero: 160 GPa</li>
            <li>Aluminio: 70 GPa</li>
            <li>Vidrio: 35-55 GPa</li>
            <li>Agua: 2.2 GPa</li>
            <li>Aire (1 atm): 0.0001 GPa</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Relaciones entre Constantes Elásticas">
        <Concept title="Independencia de Constantes">
          <p>
            De las cuatro constantes elásticas (E, G, K, ν), solo dos son independientes. 
            Conociendo dos cualesquiera, podemos calcular las otras dos. Las relaciones principales son:
          </p>
          <ul>
            <li>G = E / [2(1 + ν)]</li>
            <li>K = E / [3(1 - 2ν)]</li>
            <li>E = 2G(1 + ν)</li>
            <li>E = 3K(1 - 2ν)</li>
            <li>ν = (E/2G) - 1</li>
            <li>ν = (3K - E) / (6K)</li>
          </ul>
          <Important>
            En la práctica, se miden experimentalmente E y ν (son los más fáciles de determinar), 
            y se calculan G y K usando las relaciones anteriores.
          </Important>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <div className="theory-subsection">
          <h2>
            <span>🌍</span> Aplicaciones en la vida real
          </h2>
          <div className="theory-subsection">
            <h3>🏗️ Selección de Materiales en Ingeniería</h3>
            <p>
              Los ingenieros seleccionan materiales basándose en sus módulos elásticos. Para estructuras 
              que deben ser rígidas (puentes, edificios), se prefieren materiales con E alto como acero 
              o hormigón. Para aplicaciones que requieren flexibilidad (suspensiones, resortes), se 
              usan materiales con E bajo como polímeros o aleaciones especiales.
            </p>
            <p>
              El índice de rigidez específica (E/ρ, donde ρ es densidad) es crucial en aeronáutica. 
              Los composites de fibra de carbono tienen E/ρ muy alto, permitiendo estructuras ligeras 
              y rígidas. El Boeing 787 usa 50% de composites, reduciendo peso 20% respecto a aluminio.
            </p>
          </div>
          <div className="theory-subsection">
            <h3>🎸 Instrumentos Musicales</h3>
            <p>
              El módulo de Young determina la velocidad del sonido en un material (v = √(E/ρ)). 
              Las maderas para instrumentos se seleccionan por su E: abeto de Sitka (E ≈ 12 GPa) 
              para tapas de guitarra, ébano (E ≈ 18 GPa) para diapasones. La velocidad del sonido 
              en estas maderas es 4000-5000 m/s, mucho mayor que en aire (340 m/s).
            </p>
          </div>
          <div className="theory-subsection">
            <h3>🏥 Implantes Biomédicos</h3>
            <p>
              Los implantes ortopédicos deben tener E similar al hueso (10-20 GPa) para evitar 
              "stress shielding" (el implante soporta toda la carga y el hueso se atrofia). El titanio 
              (E = 110 GPa) es demasiado rígido, por eso se desarrollan aleaciones porosas con E reducido. 
              El coeficiente de Poisson también importa: materiales con ν similar al tejido biológico 
              (ν ≈ 0.4-0.5) se integran mejor.
            </p>
          </div>
          <div className="theory-subsection">
            <h3>🚗 Industria Automotriz</h3>
            <p>
              Los neumáticos usan caucho (ν ≈ 0.5) que es casi incompresible. Cuando el neumático 
              se deforma al rodar, su volumen permanece constante: el material se desplaza lateralmente. 
              Los amortiguadores usan aceite (ν = 0.5 exactamente) que es perfectamente incompresible, 
              permitiendo control preciso del movimiento.
            </p>
          </div>
          <div className="theory-subsection">
            <h3>🔬 Nanotecnología</h3>
            <p>
              Los nanotubos de carbono tienen E ≈ 1000 GPa, el material más rígido conocido después 
              del diamante. Se usan en composites de alta resistencia. El grafeno (E ≈ 1000 GPa) 
              es el material 2D más rígido. Estos materiales revolucionarán la ingeniería estructural 
              cuando se produzcan a escala industrial.
            </p>
          </div>
          <div className="theory-subsection">
            <h3>🏀 Equipamiento Deportivo</h3>
            <p>
              Las pelotas de baloncesto tienen ν ≈ 0.5 (aire comprimido se comporta como incompresible 
              a corto plazo). Las raquetas de tenis usan composites con E ajustado para controlar 
              la rigidez: raquetas rígidas (E alto) dan potencia, flexibles (E bajo) dan control. 
              Los palos de golf usan el mismo principio en el shaft.
            </p>
          </div>
          <div className="theory-subsection">
            <h3>🌊 Ingeniería Submarina</h3>
            <p>
              Los submarinos usan acero de alta resistencia con K alto para resistir presión hidrostática. 
              A 1000 m de profundidad (100 atm), el casco experimenta compresión volumétrica. El módulo 
              volumétrico determina cuánto se reduce el volumen interno. Materiales con K bajo (como 
              espumas) se comprimen excesivamente y no sirven.
            </p>
          </div>
          <div className="theory-subsection">
            <h3>🔊 Aislamiento Acústico</h3>
            <p>
              Los materiales de aislamiento acústico tienen E bajo y ν alto. El corcho (ν ≈ 0, E bajo) 
              es excelente porque absorbe vibraciones sin transmitirlas. Las espumas viscoelásticas 
              (ν ≈ 0.3-0.4) se usan en estudios de grabación. El módulo de corte G determina la 
              transmisión de ondas de corte (vibraciones).
            </p>
          </div>
        </div>
      </div>

      <div className="theory-history-section">
        <div className="theory-subsection">
          <h2>
            <span>📜</span> Historia: De la Observación Empírica a la Teoría Matemática
          </h2>
          <div className="theory-subsection">
            <h3>🔬 Thomas Young (1807): El Módulo de Elasticidad</h3>
            <p>
              Thomas Young, médico y físico inglés, introdujo el concepto de módulo de elasticidad 
              en 1807. Young observó que diferentes materiales se deformaban de manera distinta bajo 
              la misma carga, y propuso una constante que caracterizara esta propiedad. Inicialmente 
              llamó a esta constante "módulo de elasticidad", pero hoy se conoce como módulo de Young 
              en su honor.
            </p>
            <p>
              Young también fue pionero en óptica ondulatoria (experimento de doble rendija) y 
              egiptología (ayudó a descifrar jeroglíficos). Su trabajo en elasticidad fue inicialmente 
              ignorado, ganando reconocimiento solo décadas después.
            </p>
          </div>
          <div className="theory-subsection">
            <h3>⚙️ Siméon Denis Poisson (1829): Deformación Lateral</h3>
            <p>
              El matemático francés Siméon Denis Poisson predijo teóricamente en 1829 que cuando 
              un material se estira, debe contraerse lateralmente. Calculó que para materiales 
              isótropos, esta relación debería ser ν = 0.25. Aunque su predicción no era exacta 
              (la mayoría de materiales tienen ν = 0.27-0.33), estableció el concepto.
            </p>
            <p>
              Curiosamente, Poisson nunca verificó experimentalmente su predicción. Fue Guillaume 
              Wertheim quien en 1844 midió ν experimentalmente, confirmando la existencia del efecto 
              pero encontrando valores diferentes a 0.25.
            </p>
          </div>
          <div className="theory-subsection">
            <h3>🔧 Augustin-Louis Cauchy (1822): Teoría General</h3>
            <p>
              Cauchy desarrolló la teoría matemática completa de elasticidad, introduciendo el tensor 
              de esfuerzos y estableciendo las relaciones entre las constantes elásticas. Demostró 
              que para materiales isótropos, solo dos constantes son independientes. Su trabajo 
              unificó los descubrimientos de Hooke, Young y Poisson en una teoría coherente.
            </p>
          </div>
          <div className="theory-subsection">
            <h3>🏗️ Aplicaciones Industriales (1850-1900)</h3>
            <p>
              La Revolución Industrial requirió conocimiento preciso de propiedades de materiales. 
              Se desarrollaron máquinas de ensayo para medir E, G y ν. Los ingenieros como Gustave 
              Eiffel usaron estos datos para diseñar estructuras cada vez más audaces. La Torre Eiffel 
              (1889) fue un triunfo de la aplicación de la teoría de elasticidad.
            </p>
          </div>
          <div className="theory-subsection">
            <h3>🔬 Siglo XX: Materiales Avanzados</h3>
            <p>
              El desarrollo de nuevos materiales (aleaciones, polímeros, composites, cerámicas) 
              requirió mediciones precisas de constantes elásticas. Se descubrieron materiales con 
              propiedades extremas: aerogeles con E ≈ 0.001 GPa, nanotubos con E ≈ 1000 GPa. 
              Los metamateriales con ν negativo (auxéticos) desafiaron la teoría clásica.
            </p>
          </div>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>💎 El Diamante: Rey de la Rigidez</h3>
          <p>
            El diamante tiene el módulo de Young más alto de todos los materiales naturales 
            (E ≈ 1200 GPa), 6 veces mayor que el acero. Esto lo hace extremadamente rígido pero 
            también frágil: se deforma muy poco antes de fracturarse. Los diamantes industriales 
            se usan en herramientas de corte precisamente por su rigidez extrema.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎈 El Caucho: Casi Incompresible</h3>
          <p>
            El caucho tiene ν ≈ 0.49-0.50, casi el límite teórico. Esto significa que es prácticamente 
            incompresible: cuando lo estiras, su volumen permanece constante. Por eso los globos 
            inflados son difíciles de comprimir: el aire puede comprimirse, pero el caucho no. 
            Esta propiedad hace al caucho ideal para sellos y juntas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🍷 El Corcho: Coeficiente de Poisson Cero</h3>
          <p>
            El corcho tiene ν ≈ 0, único entre materiales comunes. Cuando lo comprimes, no se 
            expande lateralmente. Por eso los tapones de corcho entran fácilmente en botellas: 
            al comprimirlos, mantienen su diámetro. Esta propiedad también hace al corcho excelente 
            para aislamiento: no transmite vibraciones lateralmente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦴 Huesos: Materiales Compuestos Naturales</h3>
          <p>
            Los huesos tienen E ≈ 10-20 GPa, similar al hormigón pero mucho más ligeros. Son 
            composites naturales de colágeno (flexible, E ≈ 1 GPa) y hidroxiapatita (rígida, 
            E ≈ 100 GPa). La proporción varía con la edad: huesos jóvenes tienen más colágeno 
            (flexibles), huesos viejos más mineral (rígidos pero frágiles).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🕷️ Tela de Araña: Rigidez Específica Extrema</h3>
          <p>
            La seda de araña tiene E ≈ 10 GPa, pero su densidad es solo 1.3 g/cm³. Su rigidez 
            específica (E/ρ) es comparable al acero pero con 1/6 del peso. Si pudiéramos fabricar 
            cables de seda de araña del grosor de un lápiz, podrían detener un avión en vuelo. 
            Los científicos intentan replicar esta propiedad para aplicaciones estructurales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌡️ Temperatura y Módulos Elásticos</h3>
          <p>
            Los módulos elásticos disminuyen con la temperatura. El acero pierde 50% de su rigidez 
            a 500°C. Por eso los edificios en llamas colapsan: no es que el acero se derrita 
            (funde a 1500°C), sino que se vuelve demasiado flexible. Los bomberos tienen solo 
            minutos antes de que la estructura pierda rigidez crítica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 Materiales Auxéticos: Poisson Negativo</h3>
          <p>
            Algunos materiales artificiales tienen ν negativo: cuando los estiras, se expanden 
            lateralmente en lugar de contraerse. Estos "metamateriales auxéticos" desafían la 
            intuición pero tienen aplicaciones fascinantes: armaduras que se endurecen al impacto, 
            vendajes que se ajustan al hincharse, filtros que no se obstruyen.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 Materiales en el Espacio</h3>
          <p>
            En gravedad cero, los módulos elásticos no cambian (son propiedades intrínsecas), 
            pero el comportamiento estructural sí. Sin peso propio, las estructuras pueden ser 
            mucho más esbeltas. La Estación Espacial Internacional usa aluminio (E = 70 GPa) 
            en secciones que serían imposibles en la Tierra por pandeo bajo peso propio.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          Los módulos elásticos caracterizan la rigidez de materiales: E (Young) para tensión/compresión, 
          G (corte) para cizalladura, K (volumétrico) para compresión hidrostática, y ν (Poisson) 
          para deformación lateral.
        </p>
        <p>
          Solo dos constantes son independientes. Las relaciones principales son: G = E/[2(1+ν)] 
          y K = E/[3(1-2ν)]. El coeficiente de Poisson está entre 0 y 0.5 para materiales convencionales.
        </p>
        <p>
          Estos módulos son fundamentales para selección de materiales y diseño estructural. 
          Materiales con E alto son rígidos (acero, diamante), con E bajo son flexibles (caucho, 
          polímeros). El coeficiente de Poisson determina cambios de volumen: ν = 0.5 indica 
          material incompresible.
        </p>
      </div>
    </>
  );
};

export default ModulosElasticosTheory;
