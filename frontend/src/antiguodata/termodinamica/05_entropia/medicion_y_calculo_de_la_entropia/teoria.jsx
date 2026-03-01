import { TheorySection, Concept, Formula } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Medición y Cálculo de la Entropía",
  descripcion: "Métodos para calcular cambios de entropía en diferentes procesos termodinámicos",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const MedicionYCalculoEntropia = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción" variant="theoretical">
        <p>
          El cálculo de cambios de entropía es fundamental para analizar procesos termodinámicos. 
          A diferencia de la energía interna, la entropía no es una cantidad que se pueda medir 
          directamente, pero podemos calcular sus cambios a través de diferentes métodos.
        </p>
      </TheorySection>

      <TheorySection title="Cambio de Entropía en Procesos Reversibles" variant="theoretical">
        <Concept title="Definición Fundamental" variant="detailed">
          <div className="detailed-content">
            <p>
              Para un proceso reversible, el cambio de entropía se define como:
            </p>
            <Formula
              expression={String.raw`\Delta S = \frac{Q_{rev}}{T}`}
              calculatorId="grupo-proceso-reversible"
              definitions={definitions}
              exercises={exercises}
              complementary={[
                { description: "Calcular Calor Reversible (Q_rev)", expression: String.raw`Q_{rev} = \Delta S \cdot T` },
                { description: "Calcular Temperatura (T)", expression: String.raw`T = \frac{Q_{rev}}{\Delta S}` }
              ]}
            />
            <p>Donde:</p>
            <ul>
              <li>ΔS: Cambio de entropía (J/K)</li>
              <li>Q<sub>rev</sub>: Calor transferido reversiblemente (J)</li>
              <li>T: Temperatura absoluta (K)</li>
            </ul>
            <p>
              Esta ecuación es válida solo para procesos reversibles. Para procesos reversibles 
              en los que la temperatura varía, debemos usar una integral:
            </p>
            <div className="formula-display">
              {'\\Delta S = \\int \\frac{dQ_{rev}}{T}'}
            </div>
          </div>
        </Concept>

        <Concept title="Proceso Isotérmico Reversible" variant="detailed">
          <div className="detailed-content">
            <p>
              Para un gas ideal en expansión o compresión isotérmica:
            </p>
            <Formula
              expression={String.raw`\Delta S = nR\ln\left(\frac{V_f}{V_i}\right)`}
              calculatorId="grupo-isotermico"
              definitions={definitions}
              exercises={exercises}
              complementary={[
                { description: "Calcular Volumen Final (V_f)", expression: String.raw`V_f = V_i \cdot e^{\frac{\Delta S}{nR}}` },
                { description: "Calcular Volumen Inicial (V_i)", expression: String.raw`V_i = \frac{V_f}{e^{\frac{\Delta S}{nR}}}` }
              ]}
            />
            <p>
              Esta fórmula muestra que la entropía aumenta cuando el volumen aumenta (expansión) 
              y disminuye cuando el volumen disminuye (compresión).
            </p>
            <p>
              También puede expresarse en términos de presiones:
            </p>
            <div className="formula-display">
              {'\\Delta S = -nR\\ln\\left(\\frac{P_f}{P_i}\\right)'}
            </div>
          </div>
        </Concept>

        <Concept title="Cambio de Temperatura a Presión o Volumen Constante" variant="detailed">
          <div className="detailed-content">
            <p>
              Cuando un gas ideal cambia de temperatura:
            </p>
            <Formula
              expression={String.raw`\Delta S = nC_p\ln\left(\frac{T_f}{T_i}\right) \text{ (presión constante)}`}
              calculatorId="grupo-temperatura"
              definitions={definitions}
              exercises={exercises}
              complementary={[
                { description: "Calcular Temperatura Final (T_f)", expression: String.raw`T_f = T_i \cdot e^{\frac{\Delta S}{nC_p}}` },
                { description: "Calcular Temperatura Inicial (T_i)", expression: String.raw`T_i = \frac{T_f}{e^{\frac{\Delta S}{nC_p}}}` }
              ]}
            />
            <p>O a volumen constante:</p>
            <div className="formula-display">
              {'\\Delta S = nC_v\\ln\\left(\\frac{T_f}{T_i}\\right)'}
            </div>
            <p>Donde:</p>
            <ul>
              <li>C<sub>p</sub>: Capacidad calorífica molar a presión constante</li>
              <li>C<sub>v</sub>: Capacidad calorífica molar a volumen constante</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Cambio de Entropía en Procesos Generales" variant="theoretical">
        <Concept title="Proceso Adiabático Reversible" variant="detailed">
          <div className="detailed-content">
            <p>
              En un proceso adiabático reversible, no hay transferencia de calor (Q = 0), por lo tanto:
            </p>
            <div className="formula-display">
              {'\\Delta S = 0'}
            </div>
            <p>
              Los procesos adiabáticos reversibles también se llaman procesos isentrópicos 
              (entropía constante). Sin embargo, los procesos adiabáticos reales son irreversibles 
              y la entropía aumenta.
            </p>
          </div>
        </Concept>

        <Concept title="Cambios de Fase" variant="detailed">
          <div className="detailed-content">
            <p>
              Durante un cambio de fase reversible a temperatura constante:
            </p>
            <Formula
              expression={String.raw`\Delta S = \frac{nL}{T}`}
              calculatorId="grupo-cambio-fase"
              definitions={definitions}
              exercises={exercises}
              complementary={[
                { description: "Calcular Calor Latente (L)", expression: String.raw`L = \frac{\Delta S \cdot T}{n}` },
                { description: "Calcular Número de Moles (n)", expression: String.raw`n = \frac{\Delta S \cdot T}{L}` }
              ]}
            />
            <p>Donde:</p>
            <ul>
              <li>L: Calor latente de transformación (J/mol)</li>
              <li>T: Temperatura de cambio de fase (K)</li>
            </ul>
            <p>Ejemplos:</p>
            <ul>
              <li>Fusión del hielo a 273 K: ΔS<sub>fusión</sub> = (6010 J/mol) / (273 K) = 22 J/(mol·K)</li>
              <li>Vaporización del agua a 373 K: ΔS<sub>vap</sub> = (40660 J/mol) / (373 K) = 109 J/(mol·K)</li>
            </ul>
            <p>
              Nota: La vaporización tiene mucho mayor cambio de entropía que la fusión porque 
              el desorden aumenta mucho más al pasar de líquido a gas que de sólido a líquido.
            </p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Entropía de Procesos Irreversibles" variant="theoretical">
        <Concept title="Cálculo Indirecto" variant="detailed">
          <div className="detailed-content">
            <p>
              Aunque un proceso sea irreversible, podemos calcular ΔS porque la entropía es una 
              función de estado. El método es:
            </p>
            <ol>
              <li>Identificar el estado inicial y final del sistema</li>
              <li>Imaginar un proceso reversible alternativo entre los mismos estados</li>
              <li>Calcular ΔS para el proceso reversible</li>
              <li>El resultado es válido también para el proceso irreversible real</li>
            </ol>
            <p>Ejemplo: Expansión libre de un gas</p>
            <ul>
              <li>Proceso real: Gas se expande al vacío sin hacer trabajo (irreversible)</li>
              <li>Proceso reversible equivalente: Expansión isotérmica reversible entre mismo V<sub>i</sub> y V<sub>f</sub></li>
              <li>ΔS = nR ln(V<sub>f</sub>/V<sub>i</sub>) para ambos procesos</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Segunda Ley de la Termodinámica" variant="detailed">
          <div className="detailed-content">
            <p>
              Para cualquier proceso, debemos considerar el cambio total de entropía:
            </p>
            <div className="formula-display">
              {'\\Delta S_{universo} = \\Delta S_{sistema} + \\Delta S_{entorno}'}
            </div>
            <p>Criterio de espontaneidad:</p>
            <ul>
              <li>ΔS<sub>universo</sub> &gt; 0: Proceso espontáneo (irreversible)</li>
              <li>ΔS<sub>universo</sub> = 0: Proceso reversible (equilibrio)</li>
              <li>ΔS<sub>universo</sub> &lt; 0: Proceso imposible</li>
            </ul>
            <p>
              Aunque la entropía del sistema puede disminuir (ΔS<sub>sistema</sub> &lt; 0), 
              la entropía del universo siempre aumenta en procesos reales.
            </p>
          </div>
        </Concept>

        <Concept title="Ejemplo: Mezcla de Agua a Diferentes Temperaturas" variant="detailed">
          <div className="detailed-content">
            <p>
              Considere mezclar agua fría (masa m<sub>1</sub>, T<sub>1</sub>) con agua caliente 
              (masa m<sub>2</sub>, T<sub>2</sub>). La temperatura final es:
            </p>
            <div className="formula-display">
              {'T_f = \\frac{m_1 T_1 + m_2 T_2}{m_1 + m_2}'}
            </div>
            <p>El cambio de entropía total es:</p>
            <div className="formula-display">
              {'\\Delta S_{total} = m_1 c \\ln\\left(\\frac{T_f}{T_1}\\right) + m_2 c \\ln\\left(\\frac{T_f}{T_2}\\right)'}
            </div>
            <p>
              Puede demostrarse que ΔS<sub>total</sub> &gt; 0 para cualquier T<sub>1</sub> ≠ T<sub>2</sub>, 
              confirmando que la mezcla es un proceso irreversible.
            </p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Métodos Experimentales" variant="theoretical">
        <Concept title="Calorimetría" variant="detailed">
          <div className="detailed-content">
            <p>
              La entropía absoluta de una sustancia puede calcularse usando el tercer principio 
              de la termodinámica y mediciones calorimétricas:
            </p>
            <div className="formula-display">
              {'S(T) = S(0) + \\int_0^T \\frac{C_p(T\')}{T\'} dT\''}
            </div>
            <p>
              Según el tercer principio, S(0) = 0 para un cristal perfecto a 0 K. Midiendo 
              C<sub>p</sub>(T) desde 0 K hasta T, se calcula la entropía absoluta.
            </p>
            <p>Pasos prácticos:</p>
            <ol>
              <li>Medir C<sub>p</sub> a diferentes temperaturas desde ~10 K hasta T</li>
              <li>Graficar C<sub>p</sub>/T vs T</li>
              <li>Integrar numéricamente el área bajo la curva</li>
              <li>Sumar contribuciones de cambios de fase si los hay</li>
            </ol>
          </div>
        </Concept>

        <Concept title="Entropía Estándar" variant="detailed">
          <div className="detailed-content">
            <p>
              Las entropías molares estándar S° se tabulan a 298.15 K y 1 bar para sustancias 
              puras. Valores típicos:
            </p>
            <ul>
              <li>Diamante (sólido): 2.4 J/(mol·K) - muy ordenado</li>
              <li>Agua líquida: 69.9 J/(mol·K)</li>
              <li>Vapor de agua: 188.8 J/(mol·K) - muy desordenado</li>
              <li>He(g): 126.2 J/(mol·K)</li>
            </ul>
            <p>
              Tendencias generales:
            </p>
            <ul>
              <li>S°<sub>gas</sub> &gt;&gt; S°<sub>líquido</sub> &gt; S°<sub>sólido</sub></li>
              <li>Moléculas más grandes tienen mayor S° (más microestados)</li>
              <li>Moléculas más complejas tienen mayor S° (más grados de libertad)</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Cambio de Entropía en Reacciones Químicas" variant="detailed">
          <div className="detailed-content">
            <p>
              Para una reacción química, el cambio de entropía estándar es:
            </p>
            <div className="formula-display">
              {'\\Delta S°_{reacción} = \\sum \\nu_i S°_i(productos) - \\sum \\nu_j S°_j(reactivos)'}
            </div>
            <p>Ejemplo: Combustión de metano</p>
            <div className="formula-display">
              {'CH_4(g) + 2O_2(g) \\rightarrow CO_2(g) + 2H_2O(l)'}
            </div>
            <p>
              ΔS° = [S°(CO<sub>2</sub>) + 2S°(H<sub>2</sub>O)] - [S°(CH<sub>4</sub>) + 2S°(O<sub>2</sub>)]
            </p>
            <p>
              = [213.8 + 2(69.9)] - [186.3 + 2(205.2)] = -242.1 J/(mol·K)
            </p>
            <p>
              La entropía disminuye porque 3 moles de gas se convierten en 1 mol de gas + 2 moles 
              de líquido (más ordenado). Sin embargo, el calor liberado aumenta la entropía del 
              entorno, y ΔS<sub>universo</sub> &gt; 0.
            </p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Consideraciones Prácticas" variant="theoretical">
        <Concept title="Errores Comunes" variant="detailed">
          <div className="detailed-content">
            <p>Errores frecuentes al calcular entropía:</p>
            <ul>
              <li>
                Usar Q en lugar de Q<sub>rev</sub>: Solo el calor reversible se usa en ΔS = Q/T. 
                Para procesos irreversibles, debemos imaginar un proceso reversible equivalente.
              </li>
              <li>
                Olvidar usar temperatura absoluta (Kelvin): Las fórmulas requieren T en K, 
                no °C.
              </li>
              <li>
                No considerar el entorno: Para determinar si un proceso es espontáneo, 
                necesitamos ΔS<sub>universo</sub>, no solo ΔS<sub>sistema</sub>.
              </li>
              <li>
                Confundir ΔS con ΔS°: ΔS° es el cambio en condiciones estándar (1 bar, 298 K). 
                ΔS depende de las condiciones reales.
              </li>
              <li>
                Asumir que ΔS &lt; 0 implica proceso imposible: Solo ΔS<sub>universo</sub> &lt; 0 
                es imposible. ΔS<sub>sistema</sub> puede ser negativo si ΔS<sub>entorno</sub> es 
                suficientemente positivo.
              </li>
            </ul>
          </div>
        </Concept>

        <Concept title="Estrategia de Resolución de Problemas" variant="detailed">
          <div className="detailed-content">
            <p>Pasos sistemáticos para calcular cambios de entropía:</p>
            <ol>
              <li>
                Identificar el sistema: Determinar claramente qué constituye el sistema y qué 
                el entorno.
              </li>
              <li>
                Determinar el estado inicial y final: Especificar T, P, V, fase, etc.
              </li>
              <li>
                Clasificar el proceso: ¿Isotérmico? ¿Adiabático? ¿Cambio de fase? ¿Reversible 
                o irreversible?
              </li>
              <li>
                Elegir el método apropiado:
                <ul>
                  <li>Proceso reversible: Usar ΔS = ∫ dQ<sub>rev</sub>/T directamente</li>
                  <li>Proceso irreversible: Imaginar proceso reversible equivalente</li>
                  <li>Gas ideal: Usar fórmulas específicas para gases ideales</li>
                  <li>Cambio de fase: ΔS = nL/T</li>
                </ul>
              </li>
              <li>
                Calcular ΔS<sub>sistema</sub>: Aplicar la fórmula apropiada.
              </li>
              <li>
                Calcular ΔS<sub>entorno</sub>: Generalmente ΔS<sub>entorno</sub> = -Q<sub>sistema</sub>/T<sub>entorno</sub>
              </li>
              <li>
                Verificar: ΔS<sub>universo</sub> ≥ 0 para procesos reales.
              </li>
            </ol>
          </div>
        </Concept>

        <Concept title="Unidades y Magnitudes Típicas" variant="detailed">
          <div className="detailed-content">
            <p>Unidades de entropía:</p>
            <ul>
              <li>Sistema Internacional: J/K (para todo el sistema) o J/(mol·K) (molar)</li>
              <li>A veces: cal/(mol·K) [1 cal = 4.184 J]</li>
            </ul>
            <p>Magnitudes típicas:</p>
            <ul>
              <li>
                Calentamiento de 1 mol de agua de 273 K a 373 K: ΔS ≈ 23 J/(mol·K)
              </li>
              <li>
                Vaporización de 1 mol de agua a 373 K: ΔS ≈ 109 J/(mol·K)
              </li>
              <li>
                Expansión de 1 mol de gas duplicando volumen: ΔS ≈ 5.76 J/(mol·K)
              </li>
              <li>
                Mezcla de 1 L de agua a 20°C con 1 L a 80°C: ΔS ≈ 23 J/K
              </li>
            </ul>
            <p>
              La constante de Boltzmann k<sub>B</sub> = 1.381 × 10<sup>-23</sup> J/K proporciona 
              la escala fundamental de la entropía: es la entropía ganada al duplicar el número 
              de microestados accesibles.
            </p>
          </div>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>Ingeniería Térmica</h3>
          <ul>
            <li>
              🏭 Centrales de potencia: El cálculo de cambios de entropía en cada etapa del ciclo 
              (caldera, turbina, condensador, bomba) permite identificar dónde ocurren las mayores 
              irreversibilidades y optimizar la eficiencia. Una central de carbón típica genera 
              ΔS ≈ 1 × 10<sup>8</sup> J/(K·s) de entropía por cada GW de potencia.
            </li>
            <li>
              ❄️ Refrigeración y aire acondicionado: El coeficiente de performance (COP) está 
              relacionado con los cambios de entropía en el refrigerante. Minimizar la generación 
              de entropía mejora el COP. Sistemas modernos calculan ΔS en compresores y evaporadores 
              para optimizar el diseño.
            </li>
            <li>
              ⚡ Pilas de combustible: La eficiencia máxima teórica está determinada por ΔS de la 
              reacción. Para H<sub>2</sub> + ½O<sub>2</sub> → H<sub>2</sub>O, ΔS° = -44.4 J/(mol·K), 
              lo que limita la eficiencia a ~83% a 298 K.
            </li>
            <li>
              🔥 Combustión: El análisis de entropía generada (análisis exergético) en cámaras de 
              combustión identifica pérdidas. La combustión de metano a 25°C genera ~242 J/(mol·K) 
              de entropía en el sistema.
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Procesos Químicos e Industriales</h3>
          <ul>
            <li>
              ⚗️ Síntesis química: Calcular ΔS°<sub>reacción</sub> ayuda a predecir si una reacción 
              es favorable. La síntesis de amoníaco (Haber-Bosch): N<sub>2</sub> + 3H<sub>2</sub> → 
              2NH<sub>3</sub> tiene ΔS° = -198.8 J/(mol·K) (desfavorable), por eso requiere alta 
              presión para desplazar equilibrio.
            </li>
            <li>
              🍺 Fermentación: La conversión de glucosa a etanol tiene ΔS° = +172 J/(mol·K), 
              favorable entrópicamente. La levadura aprovecha este aumento de entropía molecular 
              para el proceso.
            </li>
            <li>
              💊 Cristalización de fármacos: Diseñar procesos de cristalización requiere calcular 
              ΔS entre solución y cristal. Cristales polimórficos tienen diferentes S°, afectando 
              solubilidad y estabilidad.
            </li>
            <li>
              🏭 Separación criogénica de aire: Producir O<sub>2</sub> y N<sub>2</sub> puros requiere 
              vencer ΔS<sub>mezcla</sub>. El costo energético mínimo es T·ΔS<sub>mezcla</sub> ≈ 
              200 kJ/kmol a 100 K.
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Ciencia de Materiales</h3>
          <ul>
            <li>
              🔬 Transiciones de fase: La temperatura de fusión/ebullición se predice con T = ΔH/ΔS. 
              Materiales con alto ΔS de fusión (metales: 8-10 J/(mol·K)) tienen transiciones más 
              abruptas que polímeros (ΔS pequeño, transición gradual).
            </li>
            <li>
              🧲 Refrigeración magnética: Algunos materiales (Gd, GdSiGe) tienen gran ΔS magnético. 
              Al aplicar/quitar campo magnético, ΔS ≈ 10 J/(kg·K), permitiendo refrigeración 
              eficiente sin gases refrigerantes.
            </li>
            <li>
              💎 Síntesis de diamante: Convertir grafito a diamante requiere vencer ΔS° = -3.4 J/(mol·K). 
              Se necesita alta presión (&gt;5 GPa) y temperatura (&gt;1500 K) para hacer el proceso 
              favorable.
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Biología y Bioquímica</h3>
          <ul>
            <li>
              🧬 Estabilidad de proteínas: El plegamiento de proteínas involucra balance entre ΔH 
              (enlaces) y ΔS (conformacional + solvente). A ~60°C, TΔS domina y proteínas se 
              desnaturalizan. Cálculos de ΔS son cruciales para diseño de proteínas termostables.
            </li>
            <li>
              💊 Unión fármaco-receptor: La afinidad depende de ΔG = ΔH - TΔS. Algunos fármacos 
              se unen por ΔH favorable (muchos enlaces), otros por ΔS favorable (liberan agua). 
              Optimizar ambos mejora potencia.
            </li>
            <li>
              🧫 Formación de membranas: Fosfolípidos forman bicapas espontáneamente porque aumentan 
              ΔS del agua (efecto hidrofóbico). El cambio total ΔS ≈ +20 J/(mol·K) de fosfolípido 
              hace el proceso favorable.
            </li>
            <li>
              🌡️ Adaptación al frío: Peces antárticos tienen enzimas que funcionan a 0°C. Sus 
              residuos flexibles aumentan ΔS conformacional, compensando pérdida de energía térmica 
              k<sub>B</sub>T.
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Ciencias Ambientales</h3>
          <ul>
            <li>
              🌍 Balance energético terrestre: La Tierra recibe ~10<sup>17</sup> W del Sol (T ≈ 5800 K) 
              y emite la misma potencia como infrarrojo (T ≈ 255 K). La generación de entropía es 
              ~10<sup>14</sup> W/K, impulsa clima, océanos, biosfera.
            </li>
            <li>
              ♻️ Reciclaje: Reciclar aluminio requiere vencer ΔS<sub>mezcla</sub> y ΔS<sub>degradación</sub>. 
              El costo energético mínimo es ~T·ΔS, pero procesos reales consumen 2-3 veces más.
            </li>
            <li>
              🌊 Desalinización osmótica: El agua pura separada de salmuera reduce entropía. El 
              trabajo mínimo es W<sub>min</sub> = T·ΔS<sub>mezcla</sub> ≈ 1 kWh/m³. Las plantas 
              modernas usan ~3-4 kWh/m³.
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Nanotecnología</h3>
          <ul>
            <li>
              🔬 Auto-ensamblaje: Nanopartículas se organizan espontáneamente si aumentan ΔS total. 
              Partículas cúbicas en esferas coloidales se organizan en cristales porque maximizan 
              ΔS traslacional del coloide (∼Φ<sup>2</sup> donde Φ es fracción de volumen).
            </li>
            <li>
              💾 Memorias de cambio de fase: Ge<sub>2</sub>Sb<sub>2</sub>Te<sub>5</sub> cambia entre 
              amorfo (alta S) y cristalino (baja S). La diferencia ΔS permite conmutación rápida 
              (nanosegundos) con pulsos térmicos.
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Astronomía y Cosmología</h3>
          <ul>
            <li>
              🌟 Evolución estelar: Las estrellas aumentan S del universo convirtiendo energía 
              nuclear (baja entropía) en radiación térmica (alta entropía). El Sol genera 
              ΔS ≈ 10<sup>27</sup> J/K por segundo.
            </li>
            <li>
              ⚫ Agujeros negros: Tienen entropía enorme: S<sub>BH</sub> = (k<sub>B</sub>c³A)/(4Għ) 
              donde A es área del horizonte. Un agujero negro de masa solar tiene S ≈ 10<sup>54</sup> k<sub>B</sub>, 
              más que cualquier objeto estelar.
            </li>
            <li>
              🌌 Big Bang: El universo temprano tenía baja entropía a pesar de alta temperatura. 
              La asimetría gravitacional (grumos) representa baja entropía. El universo evoluciona 
              aumentando S mediante formación de estructuras y agujeros negros.
            </li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Midiendo lo Inconmensurable
        </h2>
        
        <div className="theory-subsection">
          <h3>Rudolf Clausius - La Primera Medición (1850-1865)</h3>
          <p>
            Clausius fue el primero en calcular cambios de entropía, aunque inicialmente sin usar 
            ese nombre. En su artículo de 1854, calculó lo que llamó "valor de equivalencia de 
            transformación" para el ciclo de Carnot.
          </p>
          <p>
            Su método era calcular ∫ dQ/T alrededor del ciclo. Encontró que esta integral es cero 
            para procesos reversibles y positiva para irreversibles. Esto lo llevó a proponer una 
            nueva función de estado, que nombró "entropía" en 1865.
          </p>
          <p>
            Clausius calculó cambios de entropía para vaporización de agua, fusión de hielo, y 
            procesos en máquinas de vapor, demostrando la utilidad práctica del concepto.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Hermann von Helmholtz - Energía Libre (1882)</h3>
          <p>
            Helmholtz introdujo la función A = U - TS (ahora llamada energía libre de Helmholtz 
            en su honor). Esto permitió calcular trabajo máximo y equilibrio químico sin calcular 
            entropía explícitamente.
          </p>
          <p>
            Demostró que minimizar A (a T y V constantes) equivale a maximizar entropía total. 
            Este enfoque facilitó enormemente cálculos prácticos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>J. Willard Gibbs - Energía Libre de Gibbs (1873-1878)</h3>
          <p>
            Gibbs generalizó el trabajo de Helmholtz introduciendo G = H - TS (energía libre de 
            Gibbs). Esta función es crucial porque a presión y temperatura constantes (condiciones 
            comunes en química), el equilibrio corresponde a mínimo de G.
          </p>
          <p>
            Gibbs desarrolló métodos gráficos y analíticos para calcular ΔS en cambios de fase, 
            reacciones químicas, y mezclas. Su tratado "On the Equilibrium of Heterogeneous 
            Substances" (1878) es la base de la termodinámica química moderna.
          </p>
          <p>
            Trágicamente, el trabajo de Gibbs fue poco apreciado durante su vida. El tratado se 
            publicó en una revista oscura (Transactions of the Connecticut Academy) con circulación 
            limitada. Solo después de su muerte se reconoció su genialidad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Walther Nernst - El Tercer Principio (1906)</h3>
          <p>
            Nernst propuso el teorema del calor (tercer principio): la entropía de un cristal 
            perfecto tiende a cero cuando T → 0 K. Esto permitió calcular entropías absolutas, 
            no solo cambios.
          </p>
          <p>
            Nernst y su grupo midieron calores específicos de muchas sustancias a bajas temperaturas 
            (usando helio líquido, recién descubierto). Integrando C<sub>p</sub>/T desde 0 K hasta 
            298 K, tabularon entropías absolutas.
          </p>
          <p>
            Por este trabajo, Nernst recibió el Premio Nobel de Química en 1920. Sus tablas de 
            entropía fueron fundamentales para el desarrollo de la química física del siglo XX.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Desarrollo de Tablas Termodinámicas (1920-1950)</h3>
          <p>
            Durante el siglo XX, un esfuerzo masivo internacional compiló datos de entropía para 
            miles de sustancias. Organizaciones como NIST, JANAF, y CODATA mantienen bases de datos.
          </p>
          <p>
            Hitos importantes:
          </p>
          <ul>
            <li>
              1923: Lewis y Randall publican "Thermodynamics" con extensas tablas de S°.
            </li>
            <li>
              1930s: Desarrollo de calorimetría adiabática precisa (Giauque, recibiría Nobel 1949).
            </li>
            <li>
              1950s: Computadores permiten cálculos complejos de S para moléculas desde primeros 
              principios (mecánica estadística cuántica).
            </li>
            <li>
              1960s-presente: Bases de datos computarizadas (NIST Chemistry WebBook, etc.) con 
              S° de &gt;10,000 compuestos.
            </li>
          </ul>
        </div>

        <div className="theory-section-highlight">
          <h4>🎯 La Controversia del Tercer Principio</h4>
          <p>
            Cuando Nernst propuso que S → 0 cuando T → 0, enfrentó escepticismo. ¿Cómo podía la 
            naturaleza "saber" hacer S exactamente cero?
          </p>
          <p>
            La resolución vino de la mecánica cuántica: a T = 0, un cristal perfecto está en su 
            estado fundamental único (W = 1), entonces S = k<sub>B</sub> ln(1) = 0. El tercer 
            principio es consecuencia de la cuantización.
          </p>
          <p>
            Sin embargo, hay excepciones: vidrios y ciertos cristales "frustrados" retienen 
            "entropía residual" a 0 K porque tienen múltiples configuraciones de mínima energía 
            (degeneración). El hielo, por ejemplo, tiene S<sub>0</sub> ≈ 3.4 J/(mol·K) a 0 K 
            debido al desorden de protones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>William Giauque - Entropía a Temperaturas Ultra-bajas (1926-1949)</h3>
          <p>
            Giauque perfeccionó la calorimetría adiabática, permitiendo medir C<sub>p</sub> desde 
            ~15 K hasta temperatura ambiente con precisión ~0.1%. Calculó S° para docenas de sustancias.
          </p>
          <p>
            En 1927, Giauque predijo la existencia de isótopos de oxígeno (<sup>17</sup>O y 
            <sup>18</sup>O) basándose en discrepancias entre S calculada espectroscópicamente 
            y medida calorimétricamente. Cuando los isótopos se descubrieron posteriormente, 
            ¡las discrepancias desaparecieron! Este fue un triunfo del tercer principio.
          </p>
          <p>
            Giauque también desarrolló la desmagnetización adiabática para alcanzar temperaturas 
            milikelvin, aprovechando ΔS magnético. Recibió el Nobel de Química en 1949.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Métodos Modernos (1980-presente)</h3>
          <p>
            La revolución computacional transformó el cálculo de entropía:
          </p>
          <ul>
            <li>
              Química computacional: Programas como Gaussian, VASP calculan S° desde primeros 
              principios (mecánica cuántica + mecánica estadística). Precisión ~1-2 J/(mol·K).
            </li>
            <li>
              Simulaciones moleculares: Dinámica molecular y Monte Carlo calculan S de líquidos, 
              proteínas, materiales amorfos - imposibles de medir experimentalmente.
            </li>
            <li>
              Calorimetría nanoscópica: AFM y pinzas ópticas miden calor a escala de moléculas 
              individuales, permitiendo calcular ΔS de procesos únicos.
            </li>
            <li>
              Bases de datos integradas: Sistemas como ChemSpider, PubChem enlazan estructuras 
              químicas con propiedades termodinámicas, facilitando diseño molecular.
            </li>
          </ul>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>📏 El Problema de las Unidades</h3>
          <p>
            Antes de 1950, químicos y físicos usaban diferentes escalas de temperatura y energía, 
            resultando en factores de conversión confusos para entropía. Químicos usaban 
            "entropía termodinámica" (cal/(mol·°C)), físicos usaban "entropía de Boltzmann" 
            (J/K), ingenieros usaban "unidades británicas térmicas" (BTU/(lb·°F)).
          </p>
          <p>
            Un solo valor de entropía podía reportarse como 49.0 cal/(mol·K), 205 J/(mol·K), o 
            0.0586 BTU/(lb·°F) - ¡el mismo número! Esto causó errores catastróficos en diseño 
            de reactores químicos hasta que se estandarizó el SI en los 1960s.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧊 El Misterio del Hielo Residual</h3>
          <p>
            En 1936, al medir la entropía del hielo a 0 K, se encontró S<sub>0</sub> = 3.4 J/(mol·K) 
            en lugar de 0. Esto violaba el tercer principio. ¿Por qué?
          </p>
          <p>
            La resolución vino de Linus Pauling en 1935: en hielo, cada oxígeno está rodeado por 
            4 hidrógenos, 2 cerca (enlaces O-H) y 2 lejos (puentes de H). Hay múltiples formas de 
            arreglar los H satisfaciendo esta regla "2-cerca-2-lejos".
          </p>
          <p>
            Pauling calculó que cada molécula tiene ~1.5 configuraciones en promedio, dando 
            W = 1.5<sup>N</sup> y S<sub>0</sub> = Nk<sub>B</sub> ln(1.5) = 3.37 J/(mol·K). 
            ¡Coincidía perfectamente con el experimento! Este fue uno de los primeros triunfos 
            de aplicar mecánica estadística a sólidos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 La Apuesta de Feynman</h3>
          <p>
            Richard Feynman apostó $50 en 1959 que alguien podría calcular la entropía de un gato 
            "desde primeros principios" (leyes fundamentales de la física) en 50 años. Nadie aceptó 
            la apuesta.
          </p>
          <p>
            Hoy, 65 años después, aún no podemos. Un gato tiene ~10<sup>28</sup> átomos. Calcular 
            su función de partición (necesaria para S) requeriría ~10<sup>10^28</sup> operaciones - 
            imposible incluso con computación cuántica. Este es un ejemplo de "problema 
            intratable" en física.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌡️ El Récord de Temperatura y Entropía</h3>
          <p>
            La temperatura más baja alcanzada es ~10<sup>-10</sup> K (100 picokelvins) en átomos 
            de rubidio. A esta temperatura, S → 0 tan cerca que las fluctuaciones cuánticas dominan.
          </p>
          <p>
            Curiosamente, también se han creado "temperaturas negativas" (T &lt; 0) en sistemas 
            con población invertida. Esto no viola termodinámica porque T negativa está "más 
            caliente" que T positiva - el sistema tiene S<sub>max</sub> y ΔS/ΔE &lt; 0.
          </p>
        </div>

        <div className="theory-section-highlight">
          <h4>💡 La Paradoja de la Mezcla de Gibbs</h4>
          <p>
            Considere mezclar dos gases idénticos. La termodinámica clásica predice que no hay 
            cambio de entropía (ΔS<sub>mezcla</sub> = 0) porque los gases son indistinguibles.
          </p>
          <p>
            Pero ¿qué pasa si los gases son casi idénticos (por ejemplo, <sup>12</sup>CO<sub>2</sub> 
            y <sup>13</sup>CO<sub>2</sub>)? ¿En qué punto exacto ΔS<sub>mezcla</sub> salta de 0 a 
            nR ln(2)?
          </p>
          <p>
            Esta paradoja mostró una limitación de la termodinámica clásica. La resolución vino 
            de la mecánica cuántica: partículas idénticas son fundamentalmente indistinguibles 
            (principio de exclusión). No hay transición gradual - o son idénticas (ΔS = 0) o 
            distinguibles (ΔS = nR ln(2)).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔥 El Error que Costó Vidas</h3>
          <p>
            En 1947, un reactor químico explotó en una planta de BASF en Alemania, matando a 
            207 personas. La causa: error en el cálculo de ΔS de una reacción exotérmica.
          </p>
          <p>
            Los ingenieros calcularon ΔH (negativo, exotérmico) pero no consideraron ΔS 
            (también negativo, ordenamiento). Pensaron que la reacción era espontánea a alta T. 
            En realidad, ΔG = ΔH - TΔS se vuelve positivo (no espontáneo) a alta T.
          </p>
          <p>
            Subieron la temperatura para acelerar la reacción. En lugar de acelerar, la reacción 
            se detuvo, acumuló reactivos, luego explotó cuando la temperatura bajó ligeramente. 
            Este desastre subrayó la importancia de considerar tanto ΔH como ΔS.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌟 La Entropía del Sol</h3>
          <p>
            El Sol tiene entropía S ≈ 10<sup>42</sup> J/K, pero cada segundo genera 
            ΔS ≈ 10<sup>27</sup> J/K adicional al convertir masa en radiación.
          </p>
          <p>
            Si calculamos ΔS desde el nacimiento del Sol (4.6 mil millones de años), obtenemos 
            ΔS<sub>total</sub> ≈ 10<sup>44</sup> J/K. Pero el Sol actual tiene S ≈ 10<sup>42</sup> J/K. 
            ¿Adónde fue la entropía?
          </p>
          <p>
            Respuesta: La entropía fue radiada al espacio como fotones. Cada fotón solar lleva 
            ~3 k<sub>B</sub> de entropía. Con 10<sup>45</sup> fotones/segundo durante 4.6 × 10<sup>9</sup> 
            años, el Sol ha inyectado ~10<sup>45</sup> J/K de entropía en el universo. ¡Las estrellas 
            son las principales "fabricantes de entropía" del cosmos!
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🍕 La Entropía de una Pizza</h3>
          <p>
            Una pizza recién horneada a 80°C enfriándose a 20°C pierde calor Q ≈ 500 kJ. Su cambio 
            de entropía es ΔS<sub>pizza</sub> = -Q/T̄ ≈ -500,000/(323) ≈ -1,550 J/K (negativo porque 
            pierde calor).
          </p>
          <p>
            El aire ambiente gana este calor: ΔS<sub>aire</sub> = +Q/T<sub>amb</sub> ≈ +500,000/293 
            ≈ +1,706 J/K.
          </p>
          <p>
            Total: ΔS<sub>universo</sub> ≈ +156 J/K. ¡Dejar enfriar la pizza aumenta la entropía 
            del universo! De hecho, todo proceso de enfriamiento (sin hacer trabajo útil) aumenta 
            la entropía total porque el calor se transfiere de alta a baja temperatura.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧬 El Costo Entrópico de Pensar</h3>
          <p>
            El cerebro humano consume ~20 W de potencia (~400 kcal/día), ~20% del gasto metabólico 
            total. Este poder se convierte casi completamente en calor a ~37°C = 310 K.
          </p>
          <p>
            Generación de entropía: ΔS/Δt = P/T = 20 W / 310 K ≈ 0.065 W/K = 0.065 J/(K·s).
          </p>
          <p>
            En un día: ΔS ≈ 0.065 × 86,400 ≈ 5,600 J/K. Un pensamiento profundo (o una siesta) 
            aumenta la entropía del universo en kilojoules por kelvin. ¡El acto de pensar degrada 
            irreversiblemente la energía del universo!
          </p>
          <p>
            Como dijo el físico David Bohm: "La inteligencia es una característica de orden bajo, 
            pero existe solo al precio de aumentar el desorden en todas partes."
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎲 La Entropía de un Mazo de Cartas</h3>
          <p>
            Un mazo de 52 cartas tiene 52! ≈ 8 × 10<sup>67</sup> ordenaciones posibles. Si cada 
            ordenación es un microestado, la entropía de un mazo aleatorio es:
          </p>
          <p>
            S = k<sub>B</sub> ln(52!) ≈ k<sub>B</sub> × 156 ≈ 2.15 × 10<sup>-21</sup> J/K
          </p>
          <p>
            Un mazo ordenado (por palo y valor) tiene W = 1, entonces S = 0. Al barajar, aumentamos 
            S en ~10<sup>-21</sup> J/K. Parece pequeño, pero para escalas humanas es significativo.
          </p>
          <p>
            Si barajas un mazo perfectamente una vez por segundo desde el Big Bang (13.8 mil millones 
            de años ≈ 4 × 10<sup>17</sup> segundos), la probabilidad de obtener la misma ordenación 
            dos veces es ~1/10<sup>50</sup>. Cada baraja es efectivamente única en la historia 
            del universo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏔️ La Entropía del Everest</h3>
          <p>
            El Monte Everest (masa ~10<sup>15</sup> kg, principalmente SiO<sub>2</sub>) tiene 
            entropía S ≈ 10<sup>21</sup> J/K a ~250 K (temperatura promedio).
          </p>
          <p>
            Si el Everest fuera un cristal perfecto a 0 K, tendría S = 0. El hecho de que tenga 
            S ≈ 10<sup>21</sup> J/K refleja vibraciones térmicas de ~10<sup>42</sup> átomos.
          </p>
          <p>
            Curiosidad: Si el Everest se derritiera instantáneamente (fusión: ΔS<sub>fus</sub> ≈ 
            10 J/(mol·K)), su entropía aumentaría ~10<sup>21</sup> J/K adicional. Luego, al 
            esparcirse y mezclarse con el océano, aumentaría otros ~10<sup>21</sup> J/K. 
            ¡Destruir el Everest aumentaría S<sub>Tierra</sub> en ~0.001%!
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💰 El Valor de la Entropía</h3>
          <p>
            En 2020, el costo promedio de electricidad era ~$0.10/kWh = ~$2.8 × 10<sup>-8</sup>/J.
          </p>
          <p>
            Para un proceso a 300 K que genera ΔS = 1 J/K de entropía, la energía mínima 
            desperdiciada es T·ΔS = 300 J. Esto "cuesta" ~$8 × 10<sup>-6</sup> (casi nada).
          </p>
          <p>
            Pero para una central de 1 GW que genera ΔS = 10<sup>9</sup> J/(K·s), la pérdida es 
            T·ΔS = 3 × 10<sup>11</sup> W de energía desperdiciada por segundo. A 24/7 por un año, 
            esto es ~10<sup>19</sup> J ≈ $280 millones perdidos por irreversibilidades.
          </p>
          <p>
            Reducir generación de entropía en solo 1% salvaría ~$3 millones/año. Por eso la 
            industria invierte fuertemente en análisis exergético (minimizar ΔS<sub>gen</sub>).
          </p>
        </div>
      </div>
    </>
  );
};

export default MedicionYCalculoEntropia;
