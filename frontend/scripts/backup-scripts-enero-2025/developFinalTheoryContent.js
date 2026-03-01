import fs from 'fs';
import path from 'path';

// Contenido teórico completo para los últimos subtemas restantes
const finalTheoryContent = {
  'interpretacion_estadistica': {
    titulo: 'Interpretación Estadística de la Entropía',
    descripcion: 'Fundamentos estadísticos y microscópicos del concepto de entropía en termodinámica',
    mainConcept: 'La entropía es una medida del número de microestados accesibles a un sistema macroscópico, estableciendo el puente fundamental entre la descripción microscópica (mecánica estadística) y macroscópica (termodinámica clásica) de los sistemas físicos.',
    
    detailedSections: {
      boltzmann: {
        title: 'Ecuación de Boltzmann',
        content: `
          <div class="boltzmann-equation">
            <div class="equation-presentation">
              <h4>🔢 Ecuación Fundamental</h4>
              <div class="main-equation">
                <p><strong>S = k ln Ω</strong></p>
                <p>Donde:</p>
                <ul>
                  <li><strong>S:</strong> Entropía del sistema (J/K)</li>
                  <li><strong>k:</strong> Constante de Boltzmann = 1.381 × 10⁻²³ J/K</li>
                  <li><strong>Ω:</strong> Número de microestados accesibles</li>
                </ul>
              </div>
            </div>
            
            <div class="historical-context">
              <h4>📜 Contexto Histórico</h4>
              <p>Ludwig Boltzmann (1844-1906) estableció esta relación fundamental que:</p>
              <ul>
                <li>Conecta la física microscópica con la macroscópica</li>
                <li>Proporciona significado físico a la entropía</li>
                <li>Explica la irreversibilidad en términos probabilísticos</li>
                <li>Está grabada en su tumba en Viena</li>
              </ul>
            </div>
            
            <div class="physical-meaning">
              <h4>🎯 Significado Físico</h4>
              <div class="meaning-aspects">
                <div class="aspect">
                  <h5>Medida de Desorden</h5>
                  <p>Mayor número de microestados → Mayor desorden → Mayor entropía</p>
                </div>
                <div class="aspect">
                  <h5>Información Faltante</h5>
                  <p>La entropía cuantifica nuestra ignorancia sobre el microestado específico</p>
                </div>
                <div class="aspect">
                  <h5>Probabilidad Termodinámica</h5>
                  <p>Ω representa la "probabilidad termodinámica" del macroestado</p>
                </div>
              </div>
            </div>
          </div>
        `
      },
      
      microestados: {
        title: 'Microestados y Macroestados',
        content: `
          <div class="states-concept">
            <div class="microstate-definition">
              <h4>🔬 Microestados</h4>
              <p>Un microestado especifica completamente el estado cuántico del sistema:</p>
              <ul>
                <li>Posición y momento de cada partícula</li>
                <li>Estado cuántico de cada grado de libertad</li>
                <li>Configuración microscópica específica</li>
                <li>No observable experimentalmente</li>
              </ul>
            </div>
            
            <div class="macrostate-definition">
              <h4>📊 Macroestados</h4>
              <p>Un macroestado se define por propiedades macroscópicas observables:</p>
              <ul>
                <li>Temperatura, presión, volumen</li>
                <li>Energía interna, entalpía</li>
                <li>Composición química</li>
                <li>Directamente medible</li>
              </ul>
            </div>
            
            <div class="multiplicity">
              <h4>🔢 Multiplicidad (Ω)</h4>
              <p>Número de microestados que corresponden al mismo macroestado:</p>
              <div class="examples">
                <div class="example">
                  <h5>Ejemplo: Gas Ideal</h5>
                  <p>Para N moléculas en volumen V:</p>
                  <p>Ω ∝ V^N (cada molécula tiene más posiciones disponibles)</p>
                </div>
                <div class="example">
                  <h5>Ejemplo: Cristal</h5>
                  <p>A T = 0 K: Ω = 1 (un solo microestado)</p>
                  <p>A T > 0 K: Ω > 1 (vibraciones térmicas)</p>
                </div>
              </div>
            </div>
          </div>
        `
      },
      
      aplicaciones: {
        title: 'Aplicaciones y Consecuencias',
        content: `
          <div class="statistical-applications">
            <div class="application">
              <h4>🎲 Procesos Irreversibles</h4>
              <div class="irreversibility">
                <p><strong>Explicación Estadística:</strong></p>
                <ul>
                  <li>Los sistemas evolucionan hacia macroestados más probables</li>
                  <li>Macroestados con mayor Ω son más probables</li>
                  <li>La irreversibilidad surge de consideraciones probabilísticas</li>
                  <li>La reversión espontánea es posible pero extremadamente improbable</li>
                </ul>
                
                <div class="example-expansion">
                  <h5>Ejemplo: Expansión Libre</h5>
                  <p>Gas inicialmente en la mitad de un recipiente:</p>
                  <ul>
                    <li><strong>Estado inicial:</strong> Ω₁ = (V/2)^N</li>
                    <li><strong>Estado final:</strong> Ω₂ = V^N</li>
                    <li><strong>Cambio de entropía:</strong> ΔS = k ln(Ω₂/Ω₁) = Nk ln(2) > 0</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="application">
              <h4>🌡️ Distribuciones Estadísticas</h4>
              <div class="distributions">
                <div class="distribution">
                  <h5>Maxwell-Boltzmann</h5>
                  <p>Distribución de velocidades en gases clásicos</p>
                  <p>f(v) ∝ v² exp(-mv²/2kT)</p>
                </div>
                <div class="distribution">
                  <h5>Fermi-Dirac</h5>
                  <p>Partículas con espín semientero (fermiones)</p>
                  <p>Principio de exclusión de Pauli</p>
                </div>
                <div class="distribution">
                  <h5>Bose-Einstein</h5>
                  <p>Partículas con espín entero (bosones)</p>
                  <p>Condensación de Bose-Einstein</p>
                </div>
              </div>
            </div>
            
            <div class="application">
              <h4>🔬 Teoría de la Información</h4>
              <div class="information-theory">
                <p>Conexión con la teoría de la información de Shannon:</p>
                <ul>
                  <li><strong>Entropía de Shannon:</strong> H = -Σ pᵢ ln pᵢ</li>
                  <li><strong>Relación:</strong> S = kH (cuando todas las probabilidades son iguales)</li>
                  <li><strong>Información faltante:</strong> La entropía mide la información necesaria para especificar el microestado</li>
                  <li><strong>Principio de máxima entropía:</strong> En ausencia de información adicional, asumir la distribución de máxima entropía</li>
                </ul>
              </div>
            </div>
          </div>
        `
      }
    },
    
    keyPoints: [
      'Ecuación de Boltzmann S = k ln Ω como puente entre microscópico y macroscópico',
      'Conceptos de microestados, macroestados y multiplicidad termodinámica',
      'Interpretación de la entropía como medida de desorden e información faltante',
      'Explicación estadística de la irreversibilidad y la segunda ley',
      'Conexiones con distribuciones estadísticas y teoría de la información'
    ],
    
    learningObjectives: [
      'Comprender la ecuación de Boltzmann y su significado físico fundamental',
      'Distinguir entre microestados y macroestados con ejemplos específicos',
      'Explicar la irreversibilidad en términos de probabilidades estadísticas',
      'Relacionar la entropía con conceptos de información y desorden',
      'Aplicar la interpretación estadística en problemas termodinámicos'
    ]
  },

  'conceptos_basicos': {
    titulo: 'Conceptos Básicos de Transferencia de Calor',
    descripcion: 'Fundamentos de los mecanismos de transferencia de calor y sus principios físicos',
    mainConcept: 'La transferencia de calor es el proceso de transporte de energía térmica que ocurre como resultado de diferencias de temperatura, manifestándose a través de tres mecanismos fundamentales: conducción, convección y radiación, cada uno con características y aplicaciones específicas.',
    
    detailedSections: {
      definicion: {
        title: 'Definición y Principios Fundamentales',
        content: `
          <div class="heat-transfer-basics">
            <div class="definition">
              <h4>🔥 Definición de Transferencia de Calor</h4>
              <p>La transferencia de calor es el proceso de transporte de energía térmica que ocurre debido a diferencias de temperatura entre regiones de un sistema o entre sistemas diferentes.</p>
              
              <div class="fundamental-principles">
                <h5>Principios Fundamentales:</h5>
                <ul>
                  <li><strong>Ley de Fourier (Conducción):</strong> El calor fluye de regiones de mayor a menor temperatura</li>
                  <li><strong>Conservación de energía:</strong> La energía no se crea ni se destruye durante la transferencia</li>
                  <li><strong>Equilibrio térmico:</strong> El proceso continúa hasta igualar las temperaturas</li>
                  <li><strong>Irreversibilidad:</strong> La transferencia espontánea siempre ocurre hacia menor temperatura</li>
                </ul>
              </div>
            </div>
            
            <div class="driving-force">
              <h4>🌡️ Fuerza Motriz</h4>
              <p>El <strong>gradiente de temperatura</strong> es la fuerza motriz para todos los mecanismos de transferencia de calor:</p>
              <ul>
                <li><strong>Gradiente espacial:</strong> ∇T = ∂T/∂x î + ∂T/∂y ĵ + ∂T/∂z k̂</li>
                <li><strong>Magnitud:</strong> Determina la velocidad de transferencia</li>
                <li><strong>Dirección:</strong> Indica la dirección del flujo de calor</li>
                <li><strong>Unidades:</strong> K/m o °C/m</li>
              </ul>
            </div>
          </div>
        `
      },
      
      mecanismos: {
        title: 'Mecanismos de Transferencia de Calor',
        content: `
          <div class="heat-transfer-mechanisms">
            <div class="mechanism">
              <h4>🧱 Conducción</h4>
              <div class="mechanism-details">
                <p><strong>Definición:</strong> Transferencia de energía térmica a través de la materia por contacto molecular directo, sin movimiento macroscópico del material.</p>
                
                <div class="characteristics">
                  <h5>Características:</h5>
                  <ul>
                    <li>Ocurre en sólidos, líquidos y gases</li>
                    <li>Más eficiente en sólidos (especialmente metales)</li>
                    <li>Requiere contacto físico directo</li>
                    <li>Velocidad depende de la conductividad térmica</li>
                  </ul>
                </div>
                
                <div class="examples">
                  <h5>Ejemplos:</h5>
                  <ul>
                    <li>Calentamiento de una varilla metálica</li>
                    <li>Transferencia a través de paredes</li>
                    <li>Conducción en aletas de refrigeración</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="mechanism">
              <h4>🌊 Convección</h4>
              <div class="mechanism-details">
                <p><strong>Definición:</strong> Transferencia de calor por el movimiento macroscópico de un fluido (líquido o gas) que transporta energía térmica de una región a otra.</p>
                
                <div class="types">
                  <h5>Tipos de Convección:</h5>
                  <div class="convection-types">
                    <div class="type">
                      <h6>Natural (Libre)</h6>
                      <p>Movimiento causado por diferencias de densidad debido a gradientes de temperatura</p>
                    </div>
                    <div class="type">
                      <h6>Forzada</h6>
                      <p>Movimiento inducido por medios externos (ventiladores, bombas)</p>
                    </div>
                  </div>
                </div>
                
                <div class="examples">
                  <h5>Ejemplos:</h5>
                  <ul>
                    <li>Enfriamiento por ventilador</li>
                    <li>Calefacción por radiadores</li>
                    <li>Corrientes de convección atmosféricas</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="mechanism">
              <h4>☀️ Radiación</h4>
              <div class="mechanism-details">
                <p><strong>Definición:</strong> Transferencia de energía térmica mediante ondas electromagnéticas, sin necesidad de un medio material.</p>
                
                <div class="characteristics">
                  <h5>Características:</h5>
                  <ul>
                    <li>No requiere medio material (ocurre en el vacío)</li>
                    <li>Velocidad de la luz (c = 3 × 10⁸ m/s)</li>
                    <li>Todos los cuerpos emiten radiación térmica</li>
                    <li>Intensidad proporcional a T⁴ (Ley de Stefan-Boltzmann)</li>
                  </ul>
                </div>
                
                <div class="examples">
                  <h5>Ejemplos:</h5>
                  <ul>
                    <li>Calor del Sol a la Tierra</li>
                    <li>Calentadores radiantes</li>
                    <li>Pérdida de calor corporal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        `
      },
      
      resistencia: {
        title: 'Concepto de Resistencia Térmica',
        content: `
          <div class="thermal-resistance">
            <div class="concept">
              <h4>🔌 Analogía Eléctrica</h4>
              <p>La transferencia de calor puede analizarse usando una analogía con circuitos eléctricos:</p>
              
              <div class="analogy-table">
                <table>
                  <tr>
                    <th>Eléctrico</th>
                    <th>Térmico</th>
                  </tr>
                  <tr>
                    <td>Corriente (I)</td>
                    <td>Flujo de calor (q)</td>
                  </tr>
                  <tr>
                    <td>Voltaje (V)</td>
                    <td>Diferencia de temperatura (ΔT)</td>
                  </tr>
                  <tr>
                    <td>Resistencia eléctrica (R)</td>
                    <td>Resistencia térmica (R_th)</td>
                  </tr>
                  <tr>
                    <td>Ley de Ohm: V = IR</td>
                    <td>Ley térmica: ΔT = qR_th</td>
                  </tr>
                </table>
              </div>
            </div>
            
            <div class="resistance-types">
              <h4>🧮 Tipos de Resistencia Térmica</h4>
              
              <div class="resistance-type">
                <h5>Conducción</h5>
                <p>R_cond = L/(kA)</p>
                <ul>
                  <li>L: espesor del material</li>
                  <li>k: conductividad térmica</li>
                  <li>A: área de transferencia</li>
                </ul>
              </div>
              
              <div class="resistance-type">
                <h5>Convección</h5>
                <p>R_conv = 1/(hA)</p>
                <ul>
                  <li>h: coeficiente de transferencia por convección</li>
                  <li>A: área de transferencia</li>
                </ul>
              </div>
              
              <div class="resistance-type">
                <h5>Radiación</h5>
                <p>R_rad = 1/(h_r A)</p>
                <ul>
                  <li>h_r: coeficiente de transferencia por radiación</li>
                  <li>A: área de transferencia</li>
                </ul>
              </div>
            </div>
            
            <div class="network-analysis">
              <h4>🔗 Análisis de Redes Térmicas</h4>
              <p>Las resistencias térmicas se combinan como las eléctricas:</p>
              <ul>
                <li><strong>Serie:</strong> R_total = R₁ + R₂ + R₃ + ...</li>
                <li><strong>Paralelo:</strong> 1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...</li>
                <li><strong>Aplicación:</strong> Análisis de sistemas complejos de transferencia</li>
              </ul>
            </div>
          </div>
        `
      }
    },
    
    keyPoints: [
      'Definición de transferencia de calor y gradiente de temperatura como fuerza motriz',
      'Tres mecanismos fundamentales: conducción, convección y radiación',
      'Características específicas y aplicaciones de cada mecanismo',
      'Concepto de resistencia térmica y analogía con circuitos eléctricos',
      'Análisis de redes térmicas para sistemas complejos de transferencia'
    ],
    
    learningObjectives: [
      'Definir la transferencia de calor y identificar su fuerza motriz fundamental',
      'Distinguir entre los tres mecanismos de transferencia de calor',
      'Reconocer ejemplos prácticos de cada mecanismo en aplicaciones reales',
      'Aplicar el concepto de resistencia térmica en análisis de sistemas',
      'Utilizar analogías eléctricas para resolver problemas de transferencia de calor'
    ]
  },

  'microestados_y_macroestados': {
    titulo: 'Microestados y Macroestados',
    descripcion: 'Descripción microscópica y macroscópica de sistemas termodinámicos en mecánica estadística',
    mainConcept: 'Un macroestado termodinámico puede realizarse mediante múltiples microestados cuánticos, y la probabilidad de observar un macroestado particular es proporcional al número de microestados que lo componen, estableciendo la base estadística de la termodinámica.',
    
    detailedSections: {
      definiciones: {
        title: 'Definiciones Fundamentales',
        content: `
          <div class="state-definitions">
            <div class="microstate">
              <h4>🔬 Microestado</h4>
              <div class="definition-detail">
                <p><strong>Definición:</strong> Especificación completa del estado cuántico de todas las partículas del sistema.</p>
                
                <div class="microstate-characteristics">
                  <h5>Características:</h5>
                  <ul>
                    <li><strong>Descripción completa:</strong> Posición, momento y espín de cada partícula</li>
                    <li><strong>Nivel cuántico:</strong> Estados cuánticos individuales de cada partícula</li>
                    <li><strong>No observable:</strong> Imposible de medir experimentalmente</li>
                    <li><strong>Dinámico:</strong> Cambia constantemente debido a interacciones</li>
                    <li><strong>Número enorme:</strong> ≈ 10^(10²³) para sistemas macroscópicos</li>
                  </ul>
                </div>
                
                <div class="example">
                  <h5>Ejemplo: Gas de N moléculas</h5>
                  <p>Un microestado especifica para cada molécula i:</p>
                  <ul>
                    <li>Posición: (xᵢ, yᵢ, zᵢ)</li>
                    <li>Momento: (pₓᵢ, pᵧᵢ, pᵤᵢ)</li>
                    <li>Estado interno: rotación, vibración, espín</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="macrostate">
              <h4>📊 Macroestado</h4>
              <div class="definition-detail">
                <p><strong>Definición:</strong> Descripción del sistema mediante un conjunto limitado de variables macroscópicas observables.</p>
                
                <div class="macrostate-characteristics">
                  <h5>Características:</h5>
                  <ul>
                    <li><strong>Variables macroscópicas:</strong> T, P, V, U, H, S</li>
                    <li><strong>Observable:</strong> Medible experimentalmente</li>
                    <li><strong>Promedio estadístico:</strong> Resultado de promediar sobre microestados</li>
                    <li><strong>Estable:</strong> Permanece constante en equilibrio</li>
                    <li><strong>Número limitado:</strong> Pocas variables definen el estado</li>
                  </ul>
                </div>
                
                <div class="example">
                  <h5>Ejemplo: Gas ideal</h5>
                  <p>Un macroestado se define por:</p>
                  <ul>
                    <li>Temperatura T</li>
                    <li>Presión P</li>
                    <li>Volumen V</li>
                    <li>Número de moles n</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        `
      },
      
      multiplicidad: {
        title: 'Multiplicidad Termodinámica',
        content: `
          <div class="multiplicity-concept">
            <div class="definition">
              <h4>🔢 Definición de Multiplicidad (Ω)</h4>
              <p>La multiplicidad Ω de un macroestado es el número de microestados diferentes que corresponden a ese mismo macroestado.</p>
              
              <div class="mathematical-expression">
                <p><strong>Expresión matemática:</strong></p>
                <p>Ω = Número de microestados compatibles con {T, P, V, N, ...}</p>
              </div>
            </div>
            
            <div class="calculation-methods">
              <h4>📐 Métodos de Cálculo</h4>
              
              <div class="method">
                <h5>1. Conteo Directo (Sistemas Simples)</h5>
                <p>Para sistemas pequeños o modelos simplificados:</p>
                <ul>
                  <li>Enumerar todos los microestados posibles</li>
                  <li>Contar cuántos corresponden al macroestado de interés</li>
                  <li>Ejemplo: Modelo de Ising, gas en red</li>
                </ul>
              </div>
              
              <div class="method">
                <h5>2. Métodos Combinatorios</h5>
                <p>Para sistemas con partículas distinguibles:</p>
                <ul>
                  <li>Distribución de Maxwell-Boltzmann</li>
                  <li>Ω = N! / (N₁! N₂! N₃! ...) donde Nᵢ = partículas en estado i</li>
                  <li>Aplicable a gases clásicos</li>
                </ul>
              </div>
              
              <div class="method">
                <h5>3. Integral de Estados (Mecánica Clásica)</h5>
                <p>Para sistemas continuos:</p>
                <ul>
                  <li>Ω = (1/h³ᴺ) ∫∫ dp dq</li>
                  <li>Integración sobre espacio de fases</li>
                  <li>h = constante de Planck</li>
                </ul>
              </div>
            </div>
            
            <div class="examples">
              <h4>📋 Ejemplos de Multiplicidad</h4>
              
              <div class="example">
                <h5>Gas Ideal Monoatómico</h5>
                <p>Para N moléculas en volumen V a temperatura T:</p>
                <p>Ω ∝ V^N T^(3N/2)</p>
                <p>La multiplicidad aumenta con volumen y temperatura</p>
              </div>
              
              <div class="example">
                <h5>Cristal Armónico</h5>
                <p>Para N osciladores a temperatura T:</p>
                <p>Ω ∝ T^N (aproximación de alta temperatura)</p>
                <p>Cada oscilador contribuye linealmente</p>
              </div>
              
              <div class="example">
                <h5>Mezcla de Gases</h5>
                <p>Para mezcla de gases A y B:</p>
                <p>Ω_mezcla = Ω_A × Ω_B × Ω_configuracional</p>
                <p>Ω_configuracional = N!/(N_A! N_B!) (entropía de mezcla)</p>
              </div>
            </div>
          </div>
        `
      },
      
      equiprobabilidad: {
        title: 'Principio de Equiprobabilidad',
        content: `
          <div class="equiprobability-principle">
            <div class="statement">
              <h4>⚖️ Enunciado del Principio</h4>
              <p><strong>Postulado Fundamental:</strong> <em>"En equilibrio térmico, todos los microestados accesibles de un sistema aislado son igualmente probables."</em></p>
              
              <div class="mathematical-formulation">
                <p><strong>Formulación matemática:</strong></p>
                <p>P(microestado i) = 1/Ω_total para todos los microestados accesibles</p>
                <p>donde Ω_total es el número total de microestados del sistema</p>
              </div>
            </div>
            
            <div class="consequences">
              <h4>📊 Consecuencias del Principio</h4>
              
              <div class="consequence">
                <h5>1. Probabilidad de Macroestados</h5>
                <p>La probabilidad de observar un macroestado es proporcional a su multiplicidad:</p>
                <p>P(macroestado) = Ω_macroestado / Ω_total</p>
              </div>
              
              <div class="consequence">
                <h5>2. Macroestado Más Probable</h5>
                <p>El macroestado con mayor multiplicidad es el más probable:</p>
                <ul>
                  <li>En el límite termodinámico, domina completamente</li>
                  <li>Corresponde al estado de equilibrio</li>
                  <li>Fluctuaciones son despreciables para sistemas grandes</li>
                </ul>
              </div>
              
              <div class="consequence">
                <h5>3. Distribuciones de Equilibrio</h5>
                <p>Permite derivar distribuciones estadísticas:</p>
                <ul>
                  <li>Maxwell-Boltzmann (partículas clásicas)</li>
                  <li>Fermi-Dirac (fermiones)</li>
                  <li>Bose-Einstein (bosones)</li>
                </ul>
              </div>
            </div>
            
            <div class="applications">
              <h4>🔬 Aplicaciones Prácticas</h4>
              
              <div class="application">
                <h5>Cálculo de Propiedades Termodinámicas</h5>
                <p>Valor esperado de cualquier observable A:</p>
                <p>⟨A⟩ = Σᵢ A(microestado i) × P(microestado i)</p>
                <p>⟨A⟩ = (1/Ω) Σᵢ A(microestado i)</p>
              </div>
              
              <div class="application">
                <h5>Fluctuaciones</h5>
                <p>Desviación estándar relativa:</p>
                <p>σ_A/⟨A⟩ ∝ 1/√N</p>
                <p>Las fluctuaciones son despreciables para sistemas macroscópicos</p>
              </div>
            </div>
          </div>
        `
      }
    },
    
    keyPoints: [
      'Definición precisa de microestados y macroestados en mecánica estadística',
      'Concepto de multiplicidad como número de microestados por macroestado',
      'Principio de equiprobabilidad y su papel fundamental en equilibrio térmico',
      'Métodos de cálculo de multiplicidad para diferentes tipos de sistemas',
      'Conexión entre multiplicidad, probabilidad y propiedades macroscópicas'
    ],
    
    learningObjectives: [
      'Distinguir claramente entre microestados y macroestados con ejemplos específicos',
      'Calcular la multiplicidad de sistemas simples usando métodos apropiados',
      'Aplicar el principio de equiprobabilidad en problemas estadísticos',
      'Relacionar la multiplicidad con la probabilidad de observar macroestados',
      'Comprender cómo emergen las propiedades macroscópicas del comportamiento microscópico'
    ]
  },

  'distribuciones_de_boltzmann_y_gibbs': {
    titulo: 'Distribuciones de Boltzmann y Gibbs',
    descripcion: 'Distribuciones estadísticas fundamentales que describen sistemas en equilibrio térmico',
    mainConcept: 'Las distribuciones de Boltzmann y Gibbs describen cómo se distribuye la probabilidad entre los diferentes estados de energía de un sistema en equilibrio térmico, proporcionando el marco teórico fundamental para conectar la mecánica estadística con la termodinámica macroscópica.',
    
    detailedSections: {
      boltzmann: {
        title: 'Distribución de Maxwell-Boltzmann',
        content: `
          <div class="maxwell-boltzmann">
            <div class="distribution-form">
              <h4>📊 Forma de la Distribución</h4>
              <p>Para un sistema de partículas clásicas distinguibles en equilibrio térmico:</p>
              
              <div class="mathematical-form">
                <p><strong>Probabilidad de ocupación:</strong></p>
                <p>P(Eᵢ) = (gᵢ/Z) exp(-Eᵢ/kT)</p>
                
                <p><strong>Donde:</strong></p>
                <ul>
                  <li><strong>P(Eᵢ):</strong> Probabilidad de encontrar una partícula en el estado i</li>
                  <li><strong>Eᵢ:</strong> Energía del estado i</li>
                  <li><strong>gᵢ:</strong> Degeneración del estado i</li>
                  <li><strong>k:</strong> Constante de Boltzmann</li>
                  <li><strong>T:</strong> Temperatura absoluta</li>
                  <li><strong>Z:</strong> Función de partición</li>
                </ul>
              </div>
            </div>
            
            <div class="partition-function">
              <h4>🔢 Función de Partición</h4>
              <p>La función de partición Z normaliza la distribución:</p>
              
              <div class="partition-details">
                <p><strong>Definición:</strong> Z = Σᵢ gᵢ exp(-Eᵢ/kT)</p>
                
                <p><strong>Significado físico:</strong></p>
                <ul>
                  <li>Suma sobre todos los estados accesibles</li>
                  <li>Medida del número efectivo de estados</li>
                  <li>Conecta propiedades microscópicas con macroscópicas</li>
                  <li>Función generatriz de propiedades termodinámicas</li>
                </ul>
                
                <p><strong>Propiedades termodinámicas:</strong></p>
                <ul>
                  <li><strong>Energía interna:</strong> U = -∂(ln Z)/∂β, donde β = 1/kT</li>
                  <li><strong>Entropía:</strong> S = k(ln Z + βU)</li>
                  <li><strong>Energía libre:</strong> F = -kT ln Z</li>
                </ul>
              </div>
            </div>
            
            <div class="applications">
              <h4>🎯 Aplicaciones Específicas</h4>
              
              <div class="application">
                <h5>Gas Ideal Monoatómico</h5>
                <p>Para partículas libres en una caja:</p>
                <ul>
                  <li><strong>Energía:</strong> E = p²/2m = (pₓ² + pᵧ² + pᵤ²)/2m</li>
                  <li><strong>Distribución de velocidades:</strong> f(v) ∝ v² exp(-mv²/2kT)</li>
                  <li><strong>Velocidad más probable:</strong> v_mp = √(2kT/m)</li>
                  <li><strong>Velocidad promedio:</strong> ⟨v⟩ = √(8kT/πm)</li>
                </ul>
              </div>
              
              <div class="application">
                <h5>Oscilador Armónico</h5>
                <p>Para osciladores cuánticos:</p>
                <ul>
                  <li><strong>Energía:</strong> Eₙ = ℏω(n + 1/2)</li>
                  <li><strong>Función de partición:</strong> Z = exp(-ℏω/2kT) / [1 - exp(-ℏω/kT)]</li>
                  <li><strong>Energía promedio:</strong> ⟨E⟩ = ℏω/2 + ℏω/[exp(ℏω/kT) - 1]</li>
                </ul>
              </div>
            </div>
          </div>
        `
      },
      
      gibbs: {
        title: 'Distribución Canónica de Gibbs',
        content: `
          <div class="gibbs-canonical">
            <div class="ensemble-concept">
              <h4>🎭 Concepto de Ensemble</h4>
              <p>Un ensemble es una colección imaginaria de copias idénticas del sistema, cada una en un microestado diferente pero compatible con las mismas condiciones macroscópicas.</p>
              
              <div class="ensemble-types">
                <h5>Tipos de Ensembles:</h5>
                <div class="ensemble-grid">
                  <div class="ensemble">
                    <h6>Microcanónico</h6>
                    <p>E, V, N constantes</p>
                    <p>Sistema aislado</p>
                  </div>
                  <div class="ensemble">
                    <h6>Canónico</h6>
                    <p>T, V, N constantes</p>
                    <p>Sistema en baño térmico</p>
                  </div>
                  <div class="ensemble">
                    <h6>Gran Canónico</h6>
                    <p>T, V, μ constantes</p>
                    <p>Sistema abierto</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="canonical-distribution">
              <h4>📈 Distribución Canónica</h4>
              <p>Para un sistema en contacto con un reservorio térmico a temperatura T:</p>
              
              <div class="distribution-formula">
                <p><strong>Probabilidad de microestado:</strong></p>
                <p>P(microestado i) = (1/Z) exp(-Eᵢ/kT)</p>
                
                <p><strong>Función de partición canónica:</strong></p>
                <p>Z = Σᵢ exp(-Eᵢ/kT)</p>
                
                <p><strong>Derivación:</strong></p>
                <ol>
                  <li>Sistema + reservorio = sistema aislado total</li>
                  <li>Aplicar principio de equiprobabilidad al sistema total</li>
                  <li>Marginalizar sobre estados del reservorio</li>
                  <li>Resultado: distribución exponencial en energía</li>
                </ol>
              </div>
            </div>
            
            <div class="thermodynamic-relations">
              <h4>🔗 Relaciones Termodinámicas</h4>
              <p>La función de partición conecta directamente con la termodinámica:</p>
              
              <div class="relations-list">
                <div class="relation">
                  <h5>Energía Libre de Helmholtz</h5>
                  <p>F = -kT ln Z</p>
                  <p>Potencial termodinámico fundamental para T, V, N constantes</p>
                </div>
                
                <div class="relation">
                  <h5>Energía Interna</h5>
                  <p>U = ⟨E⟩ = -∂(ln Z)/∂β</p>
                  <p>Valor esperado de la energía</p>
                </div>
                
                <div class="relation">
                  <h5>Entropía</h5>
                  <p>S = k ln Z + U/T</p>
                  <p>Medida del desorden térmico</p>
                </div>
                
                <div class="relation">
                  <h5>Presión</h5>
                  <p>P = kT (∂ ln Z/∂V)_T</p>
                  <p>Fuerza termodinámica conjugada al volumen</p>
                </div>
              </div>
            </div>
          </div>
        `
      },
      
      factor_boltzmann: {
        title: 'Factor de Boltzmann',
        content: `
          <div class="boltzmann-factor">
            <div class="definition">
              <h4>⚡ Definición del Factor de Boltzmann</h4>
              <p>El factor de Boltzmann exp(-E/kT) es el elemento fundamental que aparece en todas las distribuciones estadísticas de equilibrio.</p>
              
              <div class="physical-meaning">
                <h5>Significado Físico:</h5>
                <ul>
                  <li><strong>Peso estadístico:</strong> Probabilidad relativa de estados de energía E</li>
                  <li><strong>Competencia:</strong> Energía vs. entropía (desorden térmico)</li>
                  <li><strong>Temperatura:</strong> Controla la "suavidad" de la distribución</li>
                  <li><strong>Universalidad:</strong> Aparece en todos los sistemas en equilibrio</li>
                </ul>
              </div>
            </div>
            
            <div class="temperature-dependence">
              <h4>🌡️ Dependencia con la Temperatura</h4>
              
              <div class="temperature-regimes">
                <div class="regime">
                  <h5>Baja Temperatura (kT << E)</h5>
                  <ul>
                    <li>exp(-E/kT) ≈ 0 para E > 0</li>
                    <li>Solo el estado fundamental está poblado</li>
                    <li>Comportamiento cuántico dominante</li>
                    <li>Capacidad calorífica → 0</li>
                  </ul>
                </div>
                
                <div class="regime">
                  <h5>Alta Temperatura (kT >> E)</h5>
                  <ul>
                    <li>exp(-E/kT) ≈ 1 - E/kT</li>
                    <li>Todos los estados igualmente poblados</li>
                    <li>Comportamiento clásico</li>
                    <li>Equipartición de energía</li>
                  </ul>
                </div>
                
                <div class="regime">
                  <h5>Temperatura Intermedia</h5>
                  <ul>
                    <li>Transición entre regímenes cuántico y clásico</li>
                    <li>Distribución exponencial característica</li>
                    <li>Fenómenos de activación térmica</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="applications-examples">
              <h4>🔬 Aplicaciones y Ejemplos</h4>
              
              <div class="example">
                <h5>Reacciones Químicas</h5>
                <p>Velocidad de reacción ∝ exp(-E_a/kT)</p>
                <p>donde E_a es la energía de activación</p>
              </div>
              
              <div class="example">
                <h5>Semiconductores</h5>
                <p>Concentración de portadores ∝ exp(-E_g/2kT)</p>
                <p>donde E_g es la brecha de energía</p>
              </div>
              
              <div class="example">
                <h5>Atmósfera Isotérmica</h5>
                <p>Densidad ∝ exp(-mgh/kT)</p>
                <p>Distribución barométrica</p>
              </div>
              
              <div class="example">
                <h5>Defectos Cristalinos</h5>
                <p>Concentración de vacantes ∝ exp(-E_f/kT)</p>
                <p>donde E_f es la energía de formación</p>
              </div>
            </div>
          </div>
        `
      }
    },
    
    keyPoints: [
      'Distribución de Maxwell-Boltzmann para partículas clásicas distinguibles',
      'Distribución canónica de Gibbs para sistemas en equilibrio térmico',
      'Función de partición como conexión entre mecánica estadística y termodinámica',
      'Factor de Boltzmann como elemento universal en distribuciones de equilibrio',
      'Aplicaciones en gases ideales, osciladores, reacciones químicas y semiconductores'
    ],
    
    learningObjectives: [
      'Derivar y aplicar la distribución de Maxwell-Boltzmann en sistemas específicos',
      'Comprender el concepto de ensemble y la distribución canónica de Gibbs',
      'Calcular propiedades termodinámicas usando la función de partición',
      'Interpretar físicamente el factor de Boltzmann y su dependencia con la temperatura',
      'Aplicar las distribuciones estadísticas en problemas de física y química'
    ]
  }
};

// Usar las mismas funciones del script anterior
function generateCompleteTheoryComponent(subtopicPath, subtopicName, content) {
  const componentName = subtopicName.split('_').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Theory';

  const teoriaContent = `import React from 'react';
import { TheorySection, Concept } from '../../../../components/TheoryV2.jsx';
import { theoreticalConcepts } from './definitions.js';

// Metadatos del tema teórico
export const metadata = {
  titulo: "${content.titulo}",
  descripcion: "${content.descripcion}",
  categoria: "termodinamica",
  subcategoria: "${path.basename(path.dirname(subtopicPath))}",
  tema: "${path.basename(path.dirname(subtopicPath))}",
  subtema: "${subtopicName}",
  icono: "${subtopicName}",
  palette: "blue", // Paleta azul para subtemas teóricos
  isTheoryOnly: true // Identificador de subtema teórico
};

const ${componentName} = () => {
  return (
    <>
      <TheorySection title="Introducción" variant="theoretical">
        <div className="theory-only-intro">
          <p className="theory-description">
            <strong>{theoreticalConcepts.mainTopic}</strong> es un área fundamental de la termodinámica que 
            abarca {theoreticalConcepts.description.toLowerCase()}. Este subtema desarrolla los conceptos 
            teóricos esenciales para la comprensión profunda de los principios termodinámicos.
          </p>
          <div className="main-concept-highlight">
            <h4>💡 Concepto Principal:</h4>
            <p className="main-concept">{theoreticalConcepts.mainConcept}</p>
          </div>
        </div>
      </TheorySection>

      ${Object.entries(content.detailedSections).map(([key, section]) => `
      <TheorySection title="${section.title}" variant="theoretical">
        <Concept title="${section.title}" variant="detailed">
          <div className="detailed-content">
            ${section.content}
          </div>
        </Concept>
      </TheorySection>`).join('\n')}

      <TheorySection title="Puntos Clave" variant="theoretical">
        <Concept title="Resumen de Conceptos Fundamentales" variant="summary">
          <div className="key-points-summary">
            <ul className="key-points-list">
              {theoreticalConcepts.keyPoints.map((point, index) => (
                <li key={index} className="key-point">
                  <strong>{index + 1}.</strong> {point}
                </li>
              ))}
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Objetivos de Aprendizaje" variant="theoretical">
        <Concept title="Competencias a Desarrollar" variant="learning">
          <div className="learning-objectives">
            <p>Al completar este subtema, deberías ser capaz de:</p>
            <ol className="objectives-list">
              {theoreticalConcepts.learningObjectives.map((objective, index) => (
                <li key={index} className="objective">{objective}</li>
              ))}
            </ol>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Importancia y Aplicaciones" variant="theoretical">
        <Concept title="Relevancia en Termodinámica" variant="importance">
          <div className="importance-content">
            <p>
              Los conceptos desarrollados en este subtema son fundamentales para comprender 
              los principios más avanzados de la termodinámica. Establecen las bases teóricas 
              necesarias para el análisis riguroso de sistemas termodinámicos complejos y 
              constituyen el fundamento conceptual para aplicaciones prácticas en ingeniería.
            </p>
          </div>
        </Concept>
        
        <Concept title="Conexiones Interdisciplinarias" variant="application">
          <div className="application-content">
            <p>
              Este conocimiento teórico se conecta directamente con múltiples áreas de la 
              ingeniería y las ciencias, incluyendo la mecánica de fluidos, transferencia 
              de calor, química física, y diseño de sistemas energéticos. La comprensión 
              sólida de estos conceptos es esencial para la práctica profesional exitosa.
            </p>
          </div>
        </Concept>
      </TheorySection>
    </>
  );
};

export default ${componentName};`;

  const teoriaPath = path.join(subtopicPath, 'teoria.jsx');
  fs.writeFileSync(teoriaPath, teoriaContent, 'utf8');
  console.log(`✅ Generated complete theory component: ${subtopicName}`);
  return true;
}

function updateCompleteDefinitions(subtopicPath, subtopicName, content) {
  const definitionsContent = `import { formatNumber } from '../../../../utils/formatNumber';

// Este es un subtema puramente teórico - sin calculadoras
export const isTheoryOnly = true;

export const definitions = [
  // Subtema teórico: ${subtopicName}
  // No contiene calculadoras, solo conceptos y teoría desarrollada
  {
    id: '${subtopicName}-conceptual',
    groupId: '${subtopicName}-theory',
    title: 'Conceptos Fundamentales',
    description: 'Este subtema desarrolla conceptos teóricos fundamentales con contenido académico riguroso.',
    type: 'theoretical',
    content: {
      mainConcepts: ${JSON.stringify(Object.keys(content.detailedSections))},
      keyPrinciples: ${JSON.stringify(content.keyPoints)},
      applications: ["Fundamentos teóricos", "Base conceptual", "Principios fundamentales"]
    }
  }
];

// Conceptos clave para este subtema teórico
export const theoreticalConcepts = {
  mainTopic: '${content.titulo}',
  description: '${content.descripcion}',
  mainConcept: '${content.mainConcept}',
  keyPoints: [
    ${content.keyPoints.map(point => `'${point}'`).join(',\n    ')}
  ],
  learningObjectives: [
    ${content.learningObjectives.map(obj => `'${obj}'`).join(',\n    ')}
  ],
  detailedSections: ${JSON.stringify(Object.keys(content.detailedSections))},
  academicLevel: 'undergraduate',
  estimatedStudyTime: '3-4 hours',
  prerequisites: ['Conceptos básicos de física', 'Matemáticas avanzadas', 'Mecánica estadística básica'],
  relatedTopics: ['Termodinámica clásica', 'Mecánica cuántica', 'Física estadística']
};`;

  const definitionsPath = path.join(subtopicPath, 'definitions.js');
  fs.writeFileSync(definitionsPath, definitionsContent, 'utf8');
  console.log(`✅ Updated complete definitions: ${subtopicName}`);
  return true;
}

function developCompleteTheory(subtopicPath) {
  const subtopicName = path.basename(subtopicPath);
  
  if (!finalTheoryContent[subtopicName]) {
    return false;
  }
  
  console.log(`📚 Developing complete theory for: ${subtopicName}`);
  
  const content = finalTheoryContent[subtopicName];
  updateCompleteDefinitions(subtopicPath, subtopicName, content);
  generateCompleteTheoryComponent(subtopicPath, subtopicName, content);
  
  return true;
}

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let developedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const definitionsPath = path.join(fullPath, 'definitions.js');
      if (fs.existsSync(definitionsPath)) {
        try {
          const content = fs.readFileSync(definitionsPath, 'utf8');
          if (content.includes('export const isTheoryOnly = true')) {
            if (developCompleteTheory(fullPath)) {
              developedCount++;
            }
          }
        } catch (error) {
          // Continuar si no se puede leer el archivo
        }
      }
      
      developedCount += processDirectory(fullPath);
    }
  }
  
  return developedCount;
}

// Ejecutar el script
console.log('📖 Iniciando desarrollo de teoría final...\n');

const thermodynamicsPath = 'src/data/termodinamica';
const developedCount = processDirectory(thermodynamicsPath);

console.log(`\n✅ Desarrollo teórico final completado!`);
console.log(`📊 Total de subtemas finales con teoría completa: ${developedCount}`);
console.log('\n🎯 TODOS los subtemas teóricos ahora incluyen:');
console.log('   • Contenido académico riguroso y detallado');
console.log('   • Secciones teóricas especializadas por tema');
console.log('   • Desarrollo conceptual profundo y completo');
console.log('   • Ejemplos y aplicaciones específicas');
console.log('   • Estructura pedagógica universitaria completa');