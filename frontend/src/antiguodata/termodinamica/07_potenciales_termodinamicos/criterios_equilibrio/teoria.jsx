import { TheorySection, Concept } from '../../../../components/TheoryV2';
import { theoreticalConcepts } from './definitions.js';

export const metadata = {
  titulo: "Criterios de Equilibrio",
  descripcion: "Condiciones que determinan cuándo un sistema está en equilibrio termodinámico. Comprende los criterios basados en entropía, energía y potenciales termodinámicos para predecir la dirección de procesos espontáneos.",
  isTheoryOnly: true,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CriteriosEquilibrioTheory = () => {
  return (
    <>
      <TheorySection title="Introducción" variant="theoretical">
        <div className="theory-only-intro">
          <p className="theory-description">
            {theoreticalConcepts.mainTopic} establecen las {theoreticalConcepts.description.toLowerCase()}. 
            Estos criterios son fundamentales para predecir la dirección de los procesos y determinar 
            cuándo un sistema ha alcanzado un estado de equilibrio estable.
          </p>
          <div className="main-concept-highlight">
            <h4>💡 Concepto Principal:</h4>
            <p className="main-concept">{theoreticalConcepts.mainConcept}</p>
          </div>
        </div>
      </TheorySection>

      <TheorySection title="Tipos de Equilibrio" variant="theoretical">
        <Concept title="Equilibrio Térmico" variant="detailed">
          <div className="detailed-content">
            <p>
              Dos sistemas están en equilibrio térmico cuando tienen la misma temperatura 
              y no hay flujo neto de calor entre ellos.
            </p>
            <div className="formula-expression">T<sub>A</sub> = T<sub>B</sub></div>
            <p>
              Este es el fundamento de la ley cero de la termodinámica y permite definir la temperatura 
              como propiedad de equilibrio.
            </p>
          </div>
        </Concept>

        <Concept title="Equilibrio Mecánico" variant="detailed">
          <div className="detailed-content">
            <p>
              Dos sistemas están en equilibrio mecánico cuando tienen la misma presión 
              y no hay movimiento neto de materia o cambio de volumen.
            </p>
            <div className="formula-expression">P<sub>A</sub> = P<sub>B</sub></div>
            <p>
              Si las presiones son diferentes, el sistema de mayor presión se expandirá hasta igualar presiones.
            </p>
          </div>
        </Concept>

        <Concept title="Equilibrio Químico" variant="detailed">
          <div className="detailed-content">
            <p>
              Dos fases o sistemas están en equilibrio químico cuando los potenciales 
              químicos de cada componente son iguales en ambas fases.
            </p>
            <div className="formula-expression">μ<sub>i,A</sub> = μ<sub>i,B</sub> (para cada componente i)</div>
            <p>
              El potencial químico μ es la energía de Gibbs molar parcial y determina la dirección 
              de transferencia de materia.
            </p>
          </div>
        </Concept>

        <Concept title="Equilibrio Termodinámico Completo" variant="detailed">
          <div className="detailed-content">
            <p>
              Un sistema está en equilibrio termodinámico completo cuando se cumplen 
              simultáneamente:
            </p>
            <ul>
              <li>Equilibrio térmico (T uniforme)</li>
              <li>Equilibrio mecánico (P uniforme)</li>
              <li>Equilibrio químico (μ uniforme para cada componente)</li>
            </ul>
            <p>
              En este estado, no hay cambios macroscópicos espontáneos en el sistema.
            </p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Criterios Basados en Entropía" variant="theoretical">
        <Concept title="Sistema Aislado" variant="detailed">
          <div className="detailed-content">
            <p>
              Para un sistema aislado (energía, volumen y número de partículas constantes), 
              la segunda ley establece:
            </p>
            <div className="formula-expression" style={{backgroundColor: '#e8f5e9', padding: '10px', borderRadius: '5px'}}>
              dS ≥ 0
            </div>
            <p>Criterio de equilibrio:</p>
            <ul>
              <li>La entropía alcanza un máximo: dS = 0</li>
              <li>Condición de estabilidad: d²S &lt; 0</li>
            </ul>
            <p>
              Este es el criterio más fundamental: un sistema aislado evoluciona hacia el estado 
              de máxima entropía compatible con sus restricciones.
            </p>
          </div>
        </Concept>

        <Concept title="Interpretación Física" variant="detailed">
          <div className="detailed-content">
            <p>
              El principio de máxima entropía significa que el sistema evoluciona hacia el estado 
              más probable (mayor número de microestados). Una vez alcanzado este estado, no hay 
              cambios macroscópicos espontáneos.
            </p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Criterios Basados en Energía" variant="theoretical">
        <Concept title="Sistema a S y V Constantes" variant="detailed">
          <div className="detailed-content">
            <p>
              Para un sistema con entropía y volumen constantes, el criterio de equilibrio es:
            </p>
            <div className="formula-expression" style={{backgroundColor: '#e3f2fd', padding: '10px', borderRadius: '5px'}}>
              La energía interna U alcanza un mínimo
            </div>
            <p>Condiciones:</p>
            <ul>
              <li>Equilibrio: dU = 0 (a S, V constantes)</li>
              <li>Estabilidad: d²U &gt; 0</li>
            </ul>
            <p>
              Este criterio es equivalente al de máxima entropía pero expresado en términos de energía.
            </p>
          </div>
        </Concept>

        <Concept title="Sistema a T y V Constantes" variant="detailed">
          <div className="detailed-content">
            <p>
              Para un sistema a temperatura y volumen constantes (común en laboratorio):
            </p>
            <div className="formula-expression" style={{backgroundColor: '#e3f2fd', padding: '10px', borderRadius: '5px'}}>
              La energía libre de Helmholtz A alcanza un mínimo
            </div>
            <p>Condiciones:</p>
            <ul>
              <li>Equilibrio: dA = 0 (a T, V constantes)</li>
              <li>Estabilidad: d²A &gt; 0</li>
            </ul>
            <p>
              Proceso espontáneo: ΔA &lt; 0 → el sistema evoluciona disminuyendo A hasta alcanzar el mínimo.
            </p>
          </div>
        </Concept>

        <Concept title="Sistema a S y P Constantes" variant="detailed">
          <div className="detailed-content">
            <p>
              Para un sistema con entropía y presión constantes:
            </p>
            <div className="formula-expression" style={{backgroundColor: '#e3f2fd', padding: '10px', borderRadius: '5px'}}>
              La entalpía H alcanza un mínimo
            </div>
            <p>Condiciones:</p>
            <ul>
              <li>Equilibrio: dH = 0 (a S, P constantes)</li>
              <li>Estabilidad: d²H &gt; 0</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Sistema a T y P Constantes" variant="detailed">
          <div className="detailed-content">
            <p>
              Para un sistema a temperatura y presión constantes (el caso más común en química):
            </p>
            <div className="formula-expression" style={{backgroundColor: '#e3f2fd', padding: '10px', borderRadius: '5px'}}>
              La energía libre de Gibbs G alcanza un mínimo
            </div>
            <p>Condiciones:</p>
            <ul>
              <li>Equilibrio: dG = 0 (a T, P constantes)</li>
              <li>Estabilidad: d²G &gt; 0</li>
            </ul>
            <p>
              Este es el criterio más utilizado en química y bioquímica:
            </p>
            <ul>
              <li>ΔG &lt; 0: Proceso espontáneo</li>
              <li>ΔG = 0: Equilibrio</li>
              <li>ΔG &gt; 0: Proceso no espontáneo</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Resumen de Criterios" variant="theoretical">
        <Concept title="Tabla de Criterios de Equilibrio" variant="detailed">
          <div className="detailed-content">
            <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '10px'}}>
              <thead>
                <tr style={{backgroundColor: '#f5f5f5'}}>
                  <th style={{border: '1px solid #ddd', padding: '8px'}}>Restricciones</th>
                  <th style={{border: '1px solid #ddd', padding: '8px'}}>Potencial</th>
                  <th style={{border: '1px solid #ddd', padding: '8px'}}>Criterio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>U, V, N constantes</td>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>Entropía S</td>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>S máxima</td>
                </tr>
                <tr>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>S, V, N constantes</td>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>Energía interna U</td>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>U mínima</td>
                </tr>
                <tr>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>T, V, N constantes</td>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>Helmholtz A</td>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>A mínima</td>
                </tr>
                <tr>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>S, P, N constantes</td>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>Entalpía H</td>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>H mínima</td>
                </tr>
                <tr>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>T, P, N constantes</td>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>Gibbs G</td>
                  <td style={{border: '1px solid #ddd', padding: '8px'}}>G mínima</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Estabilidad del Equilibrio" variant="theoretical">
        <Concept title="Condiciones de Estabilidad" variant="detailed">
          <div className="detailed-content">
            <p>
              No basta con que un potencial sea estacionario (primera derivada cero); debe ser un 
              mínimo (o máximo para S) para que el equilibrio sea estable:
            </p>
            <ul>
              <li>Estabilidad térmica: C<sub>V</sub> &gt; 0 (capacidad calorífica positiva)</li>
              <li>Estabilidad mecánica: κ<sub>T</sub> &gt; 0 (compresibilidad positiva)</li>
              <li>Estabilidad de difusión: Coeficientes de difusión positivos</li>
            </ul>
            <p>
              Si alguna condición no se cumple, el equilibrio es inestable y el sistema se separará 
              en fases o sufrirá una transición.
            </p>
          </div>
        </Concept>

        <Concept title="Puntos Críticos" variant="detailed">
          <div className="detailed-content">
            <p>
              En puntos críticos (como el punto crítico líquido-vapor), algunas condiciones de 
              estabilidad se anulan, permitiendo fluctuaciones grandes y fenómenos críticos.
            </p>
          </div>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>⚗️ Equilibrio de fases en destilación industrial</h3>
          <p>
            Las refinerías de petróleo usan criterios de equilibrio termodinámico para separar hidrocarburos mediante 
            destilación fraccionada. A cada nivel de la torre de destilación, vapores y líquidos coexisten en equilibrio 
            químico: los potenciales químicos de cada componente (gasolina, queroseno, diésel) se igualan entre fases. 
            Los ingenieros calculan estas condiciones usando la energía de Gibbs mínima a T,P constantes (dG = 0). 
            Una refinería típica procesa 100,000 barriles/día, optimizando cada plato de la torre para maximizar 
            eficiencia según criterios de equilibrio termodinámico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💊 Diseño de fármacos y solubilidad</h3>
          <p>
            La industria farmacéutica aplica criterios de equilibrio para predecir solubilidad de medicamentos. 
            Un fármaco se disuelve cuando su energía de Gibbs en solución es menor que en estado sólido (ΔG &lt; 0). 
            Los químicos manipulan temperatura, pH y solventes para alcanzar equilibrio óptimo entre fase sólida 
            (principio activo) y fase líquida (sangre). El paracetamol, por ejemplo, tiene solubilidad de 14 g/L a 25°C, 
            determinada por equilibrio termodinámico entre cristal y disolución. Sin estos criterios, los fármacos no 
            alcanzarían concentraciones terapéuticas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔋 Baterías de ion-litio y equilibrio electroquímico</h3>
          <p>
            Las baterías de ion-litio (smartphones, coches eléctricos) operan mediante equilibrios electroquímicos 
            gobernados por la energía de Gibbs. Durante la carga, se fuerza ΔG &gt; 0 aplicando voltaje externo, 
            almacenando energía en enlaces químicos. Durante la descarga, el sistema evoluciona espontáneamente 
            hacia ΔG &lt; 0, liberando energía. El voltaje de la batería (3.7 V nominal) se relaciona directamente 
            con ΔG = -nFE, donde F es la constante de Faraday. Los ingenieros usan criterios de equilibrio para 
            diseñar cátodos (LiCoO₂) y ánodos (grafito) que maximicen densidad energética: 250 Wh/kg en baterías modernas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌡️ Refrigeración y aire acondicionado</h3>
          <p>
            Los sistemas de refrigeración dependen de equilibrios de fase líquido-vapor. El refrigerante (R-134a, R-410A) 
            evapora absorbiendo calor cuando alcanza equilibrio a baja presión (ΔG = 0 entre líquido y vapor). 
            Después se comprime y condensa cediendo calor al ambiente. Los ingenieros calculan presiones y temperaturas 
            de equilibrio usando criterios termodinámicos: en el evaporador, T = -10°C y P = 2 bar; en el condensador, 
            T = 40°C y P = 15 bar. Un aire acondicionado doméstico (3 kW de potencia) transfiere 10,000 BTU/h 
            explotando estos equilibrios de fase.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧬 Plegamiento de proteínas en biología molecular</h3>
          <p>
            Las proteínas se pliegan hacia su estructura tridimensional nativa siguiendo el principio de mínima energía 
            de Gibbs. Una proteína de 100 aminoácidos podría adoptar 10^100 configuraciones posibles, pero el criterio 
            ΔG mínimo (a T,P fisiológicas: 37°C, 1 atm) determina la estructura única y funcional. Enlaces de hidrógeno, 
            fuerzas hidrofóbicas y puentes disulfuro contribuyen a ΔG. El plegamiento de hemoglobina (64,500 Da) tarda 
            milisegundos, navegando el "paisaje energético" hacia el mínimo global. Proteínas mal plegadas causan 
            enfermedades como Alzheimer y Parkinson: el criterio termodinámico falla bajo estrés celular.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El desarrollo de los criterios de equilibrio
        </h2>
        
        <div className="theory-subsection">
          <h3>🔬 Clausius y el concepto de entropía (1865)</h3>
          <p>
            Rudolf Clausius introdujo el concepto de entropía en 1865, estableciendo que en procesos reversibles 
            dS = δQ/T, y en procesos irreversibles dS &gt; δQ/T. Este fue el primer criterio de equilibrio: 
            un sistema aislado evoluciona hacia máxima entropía. Clausius formuló la segunda ley como 
            "la entropía del universo tiende a un máximo", sentando bases para todos los criterios posteriores. 
            Su trabajo unificó calor, trabajo y dirección de procesos naturales en un marco matemático riguroso.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ Gibbs y los potenciales termodinámicos (1873-1878)</h3>
          <p>
            Josiah Willard Gibbs revolucionó la termodinámica publicando "On the Equilibrium of Heterogeneous Substances" 
            (1873-1878), obra de 300 páginas que estableció criterios de equilibrio modernos. Gibbs definió energía libre 
            G = H - TS y demostró que a T,P constantes, el equilibrio corresponde a dG = 0 con d²G &gt; 0. 
            También desarrolló la regla de fases (F = C - P + 2) y criterios para equilibrio químico entre fases. 
            Su trabajo fue tan avanzado que tardó décadas en ser reconocido; Maxwell lo llamó "uno de los más grandes 
            logros intelectuales de la humanidad".
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌡️ Helmholtz y la energía libre (1882)</h3>
          <p>
            Hermann von Helmholtz desarrolló independientemente el concepto de "energía libre" (hoy energía de Helmholtz, 
            A = U - TS) en 1882. Demostró que para sistemas a temperatura constante, los procesos espontáneos disminuyen A, 
            estableciendo el criterio dA &lt; 0 para espontaneidad a T,V constantes. Helmholtz aplicó estos criterios 
            a pilas electroquímicas, demostrando que el voltaje máximo de una pila se relaciona con ΔA, no con ΔU. 
            Este trabajo permitió predecir rendimiento de baterías y eficiencia de motores electroquímicos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧪 Le Chatelier y el principio de equilibrio (1884)</h3>
          <p>
            Henri Le Chatelier formuló en 1884 su célebre principio: "Si un sistema en equilibrio sufre una perturbación, 
            evoluciona contrarrestando la perturbación". Aunque cualitativo, este principio es consecuencia directa de 
            criterios de mínima energía: si G aumenta por una perturbación, el sistema responde para restaurar el mínimo. 
            Le Chatelier aplicó su principio a síntesis industrial de amoníaco (proceso Haber), prediciendo que alta presión 
            y baja temperatura favorecen la reacción. Este trabajo práctico hizo accesibles los criterios abstractos de Gibbs.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Planck y la formulación moderna (1900-1930)</h3>
          <p>
            Max Planck refinó los criterios de equilibrio en su tratado "Thermodynamik" (1897), estableciendo rigurosamente 
            las condiciones de estabilidad mediante segundas derivadas: d²S &lt; 0, d²G &gt; 0, etc. Demostró que equilibrio 
            requiere no solo extremo (primera derivada cero) sino también estabilidad (segunda derivada apropiada). 
            Planck aplicó estos criterios a radiación de cuerpo negro, descubriendo la cuantización de energía en 1900 
            al resolver inconsistencias termodinámicas. Los criterios de equilibrio termodinámico fueron así el puente 
            hacia la mecánica cuántica.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>📚 El aislamiento intelectual de Gibbs</h3>
          <p>
            Cuando Josiah Willard Gibbs publicó su obra maestra sobre equilibrio termodinámico (1873-1878) en las 
            oscuras "Transactions of the Connecticut Academy", pocos científicos la leyeron. Trabajó en Yale sin salario 
            durante 10 años, virtualmente ignorado. James Clerk Maxwell fue el primero en reconocer su genio, construyendo 
            modelos tridimensionales de superficies termodinámicas de Gibbs y enviándoselos por correo. Gibbs respondió: 
            "Los modelos son hermosos". Recién en 1892, cuando Wilhelm Ostwald tradujo su trabajo al alemán, la comunidad 
            científica reconoció que Gibbs había resuelto el problema del equilibrio químico 20 años antes. Hoy, la energía 
            de Gibbs es el criterio más usado en química.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚗️ El misterio del hielo superenfriado</h3>
          <p>
            El agua puede enfriarse por debajo de 0°C sin congelarse, violando aparentemente los criterios de equilibrio 
            que predicen que el hielo (menor G) debería formarse. Este fenómeno de "superenfriamiento" ocurre porque la 
            nucleación de cristales requiere superar una barrera energética: crear una superficie cristal-líquido aumenta 
            temporalmente G. El agua más pura enfriada lentamente alcanza -42°C antes de congelarse súbitamente. 
            En 2011, científicos descubrieron que el agua puede existir en estado líquido superenfriado hasta -48°C 
            en gotitas microscópicas. Los criterios de equilibrio siguen siendo válidos: el estado líquido es metastable 
            (mínimo local de G), pero el cristal es el mínimo global.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💎 El grafito que debería ser diamante</h3>
          <p>
            A temperatura y presión ambiente, el diamante tiene mayor energía de Gibbs que el grafito (ΔG = +2.9 kJ/mol), 
            por lo que termodinámicamente debería convertirse espontáneamente en grafito. Sin embargo, los diamantes 
            son "eternos" porque la barrera cinética para la conversión es enorme: se requieren ~15,000 años a 25°C 
            para que un átomo de carbono se reordene. Los criterios de equilibrio predicen correctamente que el diamante 
            es inestable, pero la cinética es tan lenta que la conversión es imperceptible. Esta distinción entre 
            equilibrio termodinámico (¿qué debería ocurrir?) y cinética (¿cuán rápido ocurre?) es crucial: 
            muchos materiales útiles son termodinámicamente inestables pero cinéticamente "congelados".
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔥 El fuego que no quema: llamas frías</h3>
          <p>
            En la Estación Espacial Internacional, los astronautas descubrieron "llamas frías" que arden a 400-600°C 
            (vs 1500-2000°C en llamas terrestres). Estas llamas violáceas representan un estado de equilibrio químico 
            diferente: en microgravedad, sin convección, los productos de combustión no se alejan rápidamente, 
            estableciendo un nuevo equilibrio entre reactivos y productos cerca de la llama. Los criterios de Gibbs 
            (dG = 0) predicen composiciones químicas muy diferentes para estas llamas frías. El estudio de estos 
            equilibrios exóticos ayuda a diseñar motores más eficientes: las llamas frías producen menos hollín y 
            óxidos nitrosos contaminantes.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌊 El punto triple del agua: tres fases en equilibrio</h3>
          <p>
            A exactamente 0.01°C y 611.657 Pa, agua líquida, hielo y vapor coexisten en equilibrio termodinámico 
            simultáneamente. Este "punto triple" es tan preciso que define la escala Kelvin de temperatura. 
            En 2019, el Sistema Internacional de Unidades redefine el kelvin usando constantes fundamentales, 
            pero el punto triple sigue siendo referencia práctica. Lo fascinante es que en este punto único, 
            los tres criterios de equilibrio se satisfacen simultáneamente: equilibrio térmico (T idénticas), 
            mecánico (P idénticas) y químico (μ_hielo = μ_líquido = μ_vapor). Agregar una gota de agua causa 
            oscilaciones caóticas entre fases mientras el sistema busca el nuevo equilibrio.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🍕 La pizza caliente que predice Maxwell</h3>
          <p>
            Cuando James Clerk Maxwell estudió el trabajo de Gibbs sobre equilibrio, escribió un poema humorístico 
            titulado "The Second Law of Thermodynamics" (1878) que incluía la línea: "The second law of thermodynamics 
            holds, I trust, even when the universe grows cold, and pizza, once hot, must grow cold as well". Maxwell, 
            genio de electromagnetismo, era también un poeta aficionado. Su poema popularizó la idea de que criterios 
            de equilibrio (equilibrio térmico entre pizza y ambiente) son inexorables: no puedes mantener una pizza 
            caliente eternamente sin aportar energía. Esta analogía doméstica hizo accesible un concepto abstracto: 
            la segunda ley y los criterios de equilibrio gobiernan desde galaxias hasta pizzas.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            Los criterios de equilibrio establecen las condiciones necesarias y suficientes para que un sistema 
            termodinámico esté en equilibrio. Incluyen equilibrio térmico (T uniforme), mecánico (P uniforme) 
            y químico (μ uniforme para cada componente).
          </li>
          <li>
            Para sistemas aislados, el criterio fundamental es máxima entropía: dS = 0 con d²S &lt; 0. Este es 
            equivalente a la segunda ley de la termodinámica y determina la dirección de todos los procesos espontáneos.
          </li>
          <li>
            Para sistemas con diferentes restricciones, se usan potenciales termodinámicos específicos: energía interna U 
            mínima (a S,V constantes), energía de Helmholtz A mínima (a T,V constantes), entalpía H mínima 
            (a S,P constantes), energía de Gibbs G mínima (a T,P constantes).
          </li>
          <li>
            La estabilidad del equilibrio requiere que las segundas derivadas sean apropiadas: d²U &gt; 0, d²A &gt; 0, 
            d²H &gt; 0, d²G &gt; 0, d²S &lt; 0. Esto garantiza que el equilibrio sea un mínimo (o máximo para S) y no 
            un punto de silla.
          </li>
          <li>
            Aplicaciones prácticas: equilibrio de fases (destilación, refrigeración), reacciones químicas (constantes de 
            equilibrio, espontaneidad), diseño de fármacos (solubilidad), baterías (equilibrios electroquímicos), 
            biología molecular (plegamiento de proteínas). El criterio de energía de Gibbs mínima es el más usado en 
            química y biología para predecir la dirección de procesos a T,P constantes.
          </li>
        </ul>
      </div>
    </>
  );
};

export default CriteriosEquilibrioTheory;
