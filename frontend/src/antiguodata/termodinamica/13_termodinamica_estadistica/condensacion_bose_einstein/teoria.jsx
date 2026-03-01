import React from 'react';
import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as becDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Condensación de Bose-Einstein",
  descripcion: "Fenómeno cuántico macroscópico en gases bosónicos. Teoría, fórmulas, aplicaciones, historia y curiosidades.",
  isTheoryOnly: false,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

const CondensacionBoseEinsteinTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Condensación de Bose-Einstein">
        <p>
          La condensación de Bose-Einstein (BEC) es un fenómeno cuántico macroscópico en el que una fracción significativa de bosones ocupa el estado cuántico de menor energía (estado fundamental) a temperaturas suficientemente bajas. Es un estado de la materia completamente diferente: todos los átomos condensados se comportan como una única entidad cuántica coherente.
        </p>
        <Important>
          La BEC fue predicha por Einstein en 1924-1925 basándose en el trabajo de Bose, pero no se observó experimentalmente hasta 1995 en gases atómicos ultrafríos (Premio Nobel 2001: Cornell, Wieman y Ketterle).
        </Important>
        <p>
          La BEC permite estudiar la física cuántica a escala macroscópica, desarrollar tecnologías avanzadas (relojes atómicos, sensores cuánticos, simuladores cuánticos) y explorar fenómenos como la superfluidez y la coherencia cuántica. Es clave en la investigación fundamental y aplicada.
        </p>
      </TheorySection>
    
      <TheorySection title="Fundamentos Teóricos">
        <Concept title="Distribución de Bose-Einstein">
          <p>
            Los bosones (partículas con spin entero) obedecen la estadística de Bose-Einstein:
          </p>
          <Formula
            expression={"n_i = 1 / [e^{(ε_i - μ)/(k_B T)} - 1]"}
            description="Número promedio de partículas en el estado i."
            calculatorId="bec-distribucion"
            definitions={becDefinitions}
            exercises={[
              {
                groupId: "bec-distribucion",
                title: "Cálculo de n_i para un estado dado",
                statement: "Calcula n_i para ε_i = 1.5 \u00d7 10^{-21} J, μ = 0, k_B = 1.38 \u00d7 10^{-23} J/K, T = 300 nK.",
                solution: "n_i = 1 / [e^{(1.5\times10^{-21} - 0)/(1.38\times10^{-23} \times 3\times10^{-7})} - 1] \approx 1.2"
              }
            ]}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>n_i:</strong> Número promedio de partículas en el estado i</li>
            <li><strong>ε_i:</strong> Energía del estado i</li>
            <li><strong>μ:</strong> Potencial químico (μ {'<'} ε₀ para evitar n_i {'<'} 0)</li>
            <li><strong>k_B:</strong> Constante de Boltzmann</li>
            <li><strong>T:</strong> Temperatura</li>
          </ul>
          
          <p>A diferencia de los fermiones, los bosones pueden ocupar el mismo estado sin restricción.</p>
                      <Formula
                        expression={"n_i = 1 / [e^{(ε_i - μ)/(k_B T)} - 1]"}
                        description="Número promedio de partículas en el estado i."
                        calculatorId="bec-distribucion"
                        definitions={becDefinitions}
                        exercises={exercises}
                      />

          <p>
            Cuando μ → 0, el número de partículas en el estado fundamental diverge: 
            una fracción macroscópica ocupa ε₀.
          </p>
        </Concept>

        <Concept title="Temperatura Crítica">
          <p>
            La temperatura crítica para BEC en un gas ideal de bosones es:
          </p>
          <Formula
            expression={"T_c = (2\u03C0\u0127^2 / m k_B) [n/\u03B6(3/2)]^{2/3}"}
            description="Temperatura crítica para la condensación de Bose-Einstein."
            calculatorId="bec-tc"
            definitions={becDefinitions}
            exercises={[
              {
                groupId: "bec-tc",
                title: "Temperatura crítica para rubidio-87",
                statement: "Calcula T_c para m = 1.443 \u00d7 10^{-25} kg, n = 10^{20} m^{-3}, ζ(3/2) = 2.612, k_B = 1.38 \u00d7 10^{-23} J/K, ℏ = 1.055 \u00d7 10^{-34} J·s.",
                solution: "T_c = (2\u03C0\u00d7(1.055\u00d710^{-34})^2/(1.443\u00d710^{-25}\u00d71.38\u00d710^{-23}))\u00d7(10^{20}/2.612)^{2/3} \u2248 2\u00d710^{-7} K"
              }
            ]}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>ℏ:</strong> Constante de Planck reducida</li>
            <li><strong>m:</strong> Masa del bosón</li>
            <li><strong>n:</strong> Densidad numérica (partículas/m³)</li>
            <li><strong>ζ(3/2):</strong> Función zeta de Riemann ≈ 2.612</li>
          </ul>
          <p>
            Alternativamente: T_c ≈ 3.31 ℏ²n^(2/3) / (mk_B)
          </p>
          <Formula
            expression={"T_c = (2\u03C0\u0127^2 / m k_B) [n/\u03B6(3/2)]^{2/3}"}
            description="Temperatura crítica para la condensación de Bose-Einstein."
            calculatorId="bec-tc"
            definitions={becDefinitions}
            exercises={exercises}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>h:</strong> Constante de Planck</li>
            <li><strong>m:</strong> Masa del bosón</li>
            <li><strong>k_B:</strong> Constante de Boltzmann</li>
            <li><strong>T:</strong> Temperatura</li>
          </ul>
          <p>
            Cuando λ_T ≈ n^(-1/3), las funciones de onda de los átomos se superponen significativamente, permitiendo la condensación.
          </p>
          <Formula
            expression={"λ_T = h / \u221A(2\u03C0 m k_B T)"}
            description="Longitud de onda térmica de de Broglie."
            calculatorId="bec-lambdaT"
            definitions={becDefinitions}
            exercises={exercises}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>N₀:</strong> Número de partículas en el estado fundamental</li>
            <li><strong>N:</strong> Número total de partículas</li>
            <li><strong>T:</strong> Temperatura</li>
            <li><strong>T_c:</strong> Temperatura crítica</li>
          </ul>
          <p><strong>Comportamiento:</strong></p>
          <li><strong>T = T_c:</strong> N₀/N = 0 (sin condensado)</li>
          <Formula
            expression={"N₀/N = 1 - (T/T_c)^{3/2}"}
            description="Fracción de partículas en el estado fundamental."
            calculatorId="bec-fraccion"
            definitions={becDefinitions}
            exercises={exercises}
          />
          <div style={{textAlign: 'center', margin: '1rem 0'}}>
            C_V ∝ T^(3/2)
          </div>

          <p><strong>Para T {'<'} T_c (con condensado):</strong></p>
          <div style={{textAlign: 'center', margin: '1rem 0'}}>
            C_V ∝ T^(3/2) (diferente coeficiente)
          </div>

          <p>
            La discontinuidad en dC_V/dT en T_c es la firma de la transición de fase.
          </p>
        </Concept>

        <Concept title="Coherencia Cuántica">
          <p>
            El condensado exhibe coherencia cuántica macroscópica:
          </p>
          <ul>
            <li><strong>Función de onda única:</strong> Todos los átomos descritos por la misma ψ</li>
            <li><strong>Fase definida:</strong> Permite interferencia entre condensados</li>
            <li><strong>Longitud de coherencia:</strong> Puede ser macroscópica (mm - cm)</li>
            <li><strong>Superfluidez:</strong> Flujo sin viscosidad</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Realización Experimental">
        <Concept title="Átomos Alcalinos Ultrafríos">
          <p>
            La primera BEC se logró en 1995 con ⁸⁷Rb a 170 nK:
          </p>

          <p><strong>Técnicas de enfriamiento:</strong></p>
          <ul>
            <li><strong>Enfriamiento láser:</strong> Reduce T a ≈ 100 μK</li>
            <li><strong>Enfriamiento evaporativo:</strong> Reduce T a ≈ 100 nK</li>
            <li><strong>Trampa magneto-óptica:</strong> Confina los átomos</li>
          </ul>

          <p><strong>Átomos comúnmente usados:</strong></p>
          <ul>
            <li>⁸⁷Rb (rubidio-87): T_c ≈ 100-200 nK</li>
            <li>²³Na (sodio-23): T_c ≈ 1-2 μK</li>
            <li>⁷Li (litio-7): T_c ≈ 400 nK</li>
            <li>¹³³Cs (cesio-133): T_c ≈ 50 nK</li>
          </ul>
        </Concept>

        <Concept title="Detección del Condensado">
          <p><strong>Imagen de tiempo de vuelo:</strong></p>
          <ul>
            <li>Apagar la trampa y dejar expandir el gas</li>
            <li>Tomar imagen de absorción con láser</li>
            <li>Condensado: distribución anisotrópica estrecha</li>
            <li>Gas térmico: distribución isotrópica ancha</li>
          </ul>

          <p>
            La distribución de velocidades del condensado es mucho más estrecha que la 
            del gas térmico, revelando su naturaleza cuántica.
          </p>
        </Concept>

        <Concept title="Desafíos Experimentales">
          <ul>
            <li><strong>Temperaturas extremas:</strong> Requiere nanokelvin</li>
            <li><strong>Densidades bajas:</strong> n ≈ 10¹³ - 10¹⁵ cm⁻³</li>
            <li><strong>Vacío ultra-alto:</strong> P {'<'} 10⁻¹¹ Torr</li>
            <li><strong>Aislamiento de perturbaciones:</strong> Vibraciones, campos magnéticos</li>
            <li><strong>Tiempo de vida limitado:</strong> Segundos a minutos</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Fenómenos y Aplicaciones">
        <Concept title="Superfluidez">
          <p>
            El condensado exhibe superfluidez: flujo sin viscosidad.
          </p>
          <ul>
            <li><strong>Velocidad crítica:</strong> Por debajo de v_c, no hay disipación</li>
            <li><strong>Vórtices cuantizados:</strong> Circulación en múltiplos de h/m</li>
            <li><strong>Segundo sonido:</strong> Ondas de temperatura</li>
          </ul>
        </Concept>

        <Concept title="Interferencia de Condensados">
          <p>
            Dos condensados separados pueden interferir como ondas de luz:
          </p>
          <ul>
            <li>Patrón de franjas de interferencia</li>
            <li>Demuestra coherencia cuántica macroscópica</li>
            <li>Análogo al experimento de doble rendija</li>
          </ul>
        </Concept>

        <Concept title="Láseres de Átomos">
          <p>
            BEC como fuente coherente de átomos:
          </p>
          <ul>
            <li>Haz atómico coherente</li>
            <li>Aplicaciones en interferometría atómica</li>
            <li>Mediciones de precisión (gravedad, rotación)</li>
          </ul>
        </Concept>

        <Concept title="Simulación Cuántica">
          <p>
            BEC en redes ópticas simula sistemas cuánticos complejos:
          </p>
          <ul>
            <li>Modelo de Hubbard</li>
            <li>Transiciones de fase cuánticas</li>
            <li>Aislantes de Mott</li>
            <li>Superconductividad</li>
          </ul>
        </Concept>

        <Concept title="Otras Aplicaciones">
          <ul>
            <li><strong>Relojes atómicos:</strong> Mejora de precisión</li>
            <li><strong>Sensores inerciales:</strong> Giroscopios atómicos</li>
            <li><strong>Computación cuántica:</strong> Qubits atómicos</li>
            <li><strong>Estudio de física fundamental:</strong> Constantes fundamentales</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="BEC en Otros Sistemas">
        <Concept title="Helio-4 Líquido">
          <p>
            ⁴He exhibe superfluidez por debajo de 2.17 K (transición lambda):
          </p>
          <ul>
            <li>No es BEC pura debido a interacciones fuertes</li>
            <li>Pero tiene características similares</li>
            <li>Fracción superfluida aumenta al bajar T</li>
            <li>Vórtices cuantizados, segundo sonido</li>
          </ul>
        </Concept>

        <Concept title="Excitones y Polaritones">
          <p>
            Cuasipartículas bosónicas en sólidos:
          </p>
          <ul>
            <li><strong>Excitones:</strong> Pares electrón-hueco ligados</li>
            <li><strong>Polaritones:</strong> Mezcla fotón-excitón</li>
            <li>BEC a temperaturas más altas (≈ 10-100 K)</li>
            <li>Observado en microcavidades semiconductoras</li>
          </ul>
        </Concept>

        <Concept title="Magnones">
          <p>
            Excitaciones de spin colectivas en materiales magnéticos:
          </p>
          <ul>
            <li>BEC de magnones a temperatura ambiente</li>
            <li>Observado en YIG (granate de itrio y hierro)</li>
            <li>Aplicaciones en espintrónica</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos Numéricos">
        <Example 
          title="Ejemplo 1: T_c para Rubidio-87"
          problem="Calcula la temperatura crítica para ⁸⁷Rb con n = 10²⁰ m⁻³."
          solution={
            <div>
              <p><strong>Datos:</strong></p>
              <ul>
                <li>n = 10²⁰ m⁻³ = 10¹⁴ cm⁻³</li>
                <li>m = 1.443 × 10⁻²⁵ kg (masa de ⁸⁷Rb)</li>
                <li>ζ(3/2) = 2.612</li>
              </ul>
              
              <p><strong>Solución:</strong></p>
              <p>T_c = (2πℏ²/mk_B)[n/ζ(3/2)]^(2/3)</p>
              <p>T_c = (2π × (1.055 × 10⁻³⁴)² / (1.443 × 10⁻²⁵ × 1.381 × 10⁻²³)) × (10²⁰/2.612)^(2/3)</p>
              <p>T_c ≈ 200 nK = 2 × 10⁻⁷ K</p>
              
              <p><strong>Interpretación:</strong> Se requieren temperaturas extremadamente bajas 
              (nanokelvin) para observar BEC en gases atómicos.</p>
            </div>
          }
        />

        <Example 
          title="Ejemplo 2: Fracción Condensada"
          problem="¿Qué fracción de átomos está condensada a T = 100 nK si T_c = 200 nK?"
          solution={
            <div>
              <p><strong>Datos:</strong></p>
              <ul>
                <li>T = 100 nK</li>
                <li>T_c = 200 nK</li>
                <li>T/T_c = 0.5</li>
              </ul>
              
              <p><strong>Solución:</strong></p>
              <p>N₀/N = 1 - (T/T_c)^(3/2)</p>
              <p>N₀/N = 1 - (0.5)^(3/2)</p>
              <p>N₀/N = 1 - 0.354 = 0.646</p>
              
              <p><strong>Resultado:</strong> 64.6% de los átomos están en el estado fundamental.</p>
            </div>
          }
        />

        <Example 
          title="Ejemplo 3: Longitud de Onda Térmica"
          problem="Calcula λ_T para ⁸⁷Rb a T_c = 200 nK y compara con la distancia entre átomos."
          solution={
            <div>
              <p><strong>Datos:</strong></p>
              <ul>
                <li>T = 200 nK = 2 × 10⁻⁷ K</li>
                <li>m = 1.443 × 10⁻²⁵ kg</li>
                <li>n = 10²⁰ m⁻³</li>
              </ul>
              
              <p><strong>Longitud térmica:</strong></p>
              <p>λ_T = h / √(2πmk_BT) ≈ 0.5 μm</p>
              
              <p><strong>Distancia entre átomos:</strong></p>
              <p>d = n^(-1/3) = (10²⁰)^(-1/3) ≈ 0.46 μm</p>
              
              <p><strong>Interpretación:</strong> λ_T ≈ d, confirmando que estamos en el régimen 
              cuántico donde las funciones de onda se superponen.</p>
            </div>
          }
        />
      </TheorySection>
      {/* Secciones especiales al final del archivo, después de toda la teoría y ejemplos */}
    <div className="theory-applications-section">
      <h2><span>🌍</span> Aplicaciones en la vida real</h2>
      <ul>
        <li>Desarrollo de relojes atómicos y sensores cuánticos de alta precisión.</li>
        <li>Simulación de materiales y sistemas cuánticos complejos.</li>
        <li>Estudio de la superfluidez y la coherencia cuántica.</li>
        <li>Avances en computación cuántica y tecnologías emergentes.</li>
        <li>Interferometría atómica y mediciones de precisión.</li>
      </ul>
    </div>
    <div className="theory-history-section">
      <h2><span>📜</span> Historia: Origen de la condensación de Bose-Einstein</h2>
      <p>
        La idea de la condensación de Bose-Einstein surge en 1924-1925, cuando Satyendra Nath Bose y Albert Einstein predijeron que los bosones podrían ocupar el mismo estado cuántico a bajas temperaturas. Sin embargo, la observación experimental no se logró hasta 1995, cuando se produjo el primer BEC en átomos de rubidio ultrafríos, lo que revolucionó la física moderna y abrió nuevas áreas de investigación.
      </p>
      <ul className="theory-subsection">
        <li>1924-1925: Predicción teórica por Bose y Einstein.</li>
        <li>1995: Primer BEC observado en laboratorio (Cornell, Wieman, Ketterle).</li>
        <li>2001: Premio Nobel por la realización experimental del BEC.</li>
      </ul>
    </div>
    <div className="theory-anecdotes-section">
      <h2><span>✨</span> Anécdotas y curiosidades</h2>
      <ul>
        <li>El primer BEC se logró con átomos de rubidio a temperaturas de nanokelvin, ¡más frías que el espacio interestelar!</li>
        <li>El fenómeno fue predicho 70 años antes de su observación experimental.</li>
        <li>La BEC permite observar efectos cuánticos a escala visible, como patrones de interferencia entre nubes de átomos.</li>
        <li>La superfluidez y la coherencia cuántica de los BEC han inspirado experimentos análogos con luz y materia.</li>
      </ul>
    </div>
    <div className="theory-section-highlight">
      <h2>Resumen</h2>
      <p>
        La condensación de Bose-Einstein es un fenómeno cuántico colectivo que permite explorar la física fundamental y desarrollar nuevas tecnologías. Su estudio ha impulsado avances en metrología, computación cuántica y simulación de materiales, y sigue siendo un campo activo de investigación experimental y teórica.
      </p>
    </div>

    </>
  );
};

export default CondensacionBoseEinsteinTheory;
