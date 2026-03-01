import fs from 'fs';
import path from 'path';

// Contenido teórico completo para los subtemas restantes
const remainingTheoryContent = {
  'tercera_ley_de_la_termodinamica': {
    titulo: 'Tercera Ley de la Termodinámica',
    descripcion: 'Comportamiento de la entropía en el cero absoluto y sus implicaciones termodinámicas',
    mainConcept: 'La entropía de un cristal perfecto en el cero absoluto de temperatura es exactamente igual a cero. Esta ley establece un punto de referencia absoluto para la entropía y tiene profundas implicaciones para el comportamiento de la materia a temperaturas extremadamente bajas.',
    
    detailedSections: {
      enunciado: {
        title: 'Enunciados de la Tercera Ley',
        content: `
          <div class="third-law-statements">
            <div class="statement">
              <h4>📜 Enunciado de Nernst (1906)</h4>
              <p><em>"La entropía de cualquier sistema en equilibrio interno tiende a un valor constante cuando la temperatura se aproxima al cero absoluto."</em></p>
            </div>
            
            <div class="statement">
              <h4>📜 Enunciado de Planck (1912)</h4>
              <p><em>"La entropía de un cristal perfecto en el cero absoluto es exactamente cero."</em></p>
              <p>Matemáticamente: lim(T→0) S = 0 para un cristal perfecto</p>
            </div>
            
            <div class="statement">
              <h4>📜 Formulación Estadística</h4>
              <p>Usando la ecuación de Boltzmann S = k ln Ω:</p>
              <p>En T = 0 K, Ω = 1 (un solo microestado), por tanto S = k ln(1) = 0</p>
            </div>
          </div>
          
          <div class="perfect-crystal">
            <h4>💎 Concepto de Cristal Perfecto</h4>
            <p>Un cristal perfecto es un sólido cristalino ideal que cumple:</p>
            <ul>
              <li>Estructura cristalina perfectamente ordenada</li>
              <li>Sin defectos, vacantes o impurezas</li>
              <li>Sin desorden térmico</li>
              <li>Todos los átomos en posiciones de equilibrio</li>
              <li>Un solo microestado accesible a T = 0 K</li>
            </ul>
          </div>
        `
      },
      
      implicaciones: {
        title: 'Implicaciones y Consecuencias',
        content: `
          <div class="implications">
            <div class="implication">
              <h4>🌡️ Inalcanzabilidad del Cero Absoluto</h4>
              <p>La tercera ley implica que es imposible alcanzar el cero absoluto en un número finito de pasos:</p>
              <ul>
                <li>Cualquier proceso de enfriamiento requiere trabajo</li>
                <li>La capacidad calorífica tiende a cero cuando T → 0</li>
                <li>Se requiere trabajo infinito para extraer el último quantum de energía</li>
              </ul>
            </div>
            
            <div class="implication">
              <h4>📊 Comportamiento de Propiedades Termodinámicas</h4>
              <p>Cuando T → 0:</p>
              <ul>
                <li><strong>Capacidad calorífica:</strong> C → 0</li>
                <li><strong>Coeficiente de expansión:</strong> α → 0</li>
                <li><strong>Compresibilidad isotérmica:</strong> κ_T → 0</li>
                <li><strong>Coeficiente de Joule-Thomson:</strong> μ_JT → 0</li>
              </ul>
            </div>
            
            <div class="implication">
              <h4>⚗️ Equilibrio Químico</h4>
              <p>A temperaturas muy bajas:</p>
              <ul>
                <li>Las reacciones químicas se vuelven extremadamente lentas</li>
                <li>Los sistemas pueden quedar "congelados" en estados metaestables</li>
                <li>La entropía de mezcla tiende a cero para soluciones ideales</li>
              </ul>
            </div>
          </div>
        `
      },
      
      aplicaciones: {
        title: 'Aplicaciones y Fenómenos Relacionados',
        content: `
          <div class="applications">
            <div class="application">
              <h4>❄️ Criogenia</h4>
              <p>Estudio y aplicación de temperaturas extremadamente bajas:</p>
              <ul>
                <li><strong>Licuefacción de gases:</strong> He, H₂, N₂</li>
                <li><strong>Superconductividad:</strong> Resistencia eléctrica cero</li>
                <li><strong>Superfluidez:</strong> Viscosidad cero en He-II</li>
                <li><strong>Conservación biológica:</strong> Criopreservación</li>
              </ul>
            </div>
            
            <div class="application">
              <h4>🔬 Física de Bajas Temperaturas</h4>
              <p>Fenómenos cuánticos macroscópicos:</p>
              <ul>
                <li><strong>Condensado de Bose-Einstein:</strong> Estado de la materia a nanokelvin</li>
                <li><strong>Efecto Josephson:</strong> Túnel cuántico en superconductores</li>
                <li><strong>Magnetismo cuántico:</strong> Ordenamiento magnético</li>
                <li><strong>Cristales temporales:</strong> Estructuras periódicas en el tiempo</li>
              </ul>
            </div>
            
            <div class="application">
              <h4>🏭 Aplicaciones Tecnológicas</h4>
              <p>Tecnologías basadas en bajas temperaturas:</p>
              <ul>
                <li><strong>Resonancia magnética:</strong> Imanes superconductores</li>
                <li><strong>Computación cuántica:</strong> Qubits superconductores</li>
                <li><strong>Detectores criogénicos:</strong> Astronomía infrarroja</li>
                <li><strong>Levitación magnética:</strong> Trenes maglev</li>
              </ul>
            </div>
          </div>
        `
      }
    },
    
    keyPoints: [
      'Enunciados de Nernst y Planck sobre el comportamiento de la entropía a T = 0 K',
      'Concepto de cristal perfecto y su único microestado a cero absoluto',
      'Inalcanzabilidad práctica del cero absoluto de temperatura',
      'Comportamiento límite de propiedades termodinámicas cuando T → 0',
      'Aplicaciones en criogenia, superconductividad y física cuántica macroscópica'
    ],
    
    learningObjectives: [
      'Enunciar la tercera ley de la termodinámica en sus diferentes formulaciones',
      'Comprender el concepto de cristal perfecto y su relación con la entropía',
      'Explicar por qué es imposible alcanzar el cero absoluto en la práctica',
      'Analizar el comportamiento límite de las propiedades termodinámicas',
      'Identificar aplicaciones tecnológicas basadas en temperaturas criogénicas'
    ]
  },

  'formulaciones_equivalentes': {
    titulo: 'Formulaciones Equivalentes de las Leyes Termodinámicas',
    descripcion: 'Diferentes enunciados matemáticamente equivalentes de las leyes termodinámicas y sus aplicaciones específicas',
    mainConcept: 'Las leyes de la termodinámica pueden expresarse mediante múltiples formulaciones equivalentes, cada una adaptada a contextos específicos de aplicación, pero todas describiendo los mismos principios fundamentales de conservación y dirección de los procesos naturales.',
    
    detailedSections: {
      segunda_ley: {
        title: 'Formulaciones de la Segunda Ley',
        content: `
          <div class="second-law-formulations">
            <div class="formulation">
              <h4>🔥 Enunciado de Kelvin-Planck</h4>
              <div class="statement-detail">
                <p><strong>Enunciado:</strong> <em>"Es imposible construir una máquina térmica que, operando en un ciclo, no produzca otro efecto que la absorción de calor de un reservorio y la realización de una cantidad equivalente de trabajo."</em></p>
                <p><strong>Implicación:</strong> No existe la máquina térmica perfecta (eficiencia 100%)</p>
                <p><strong>Aplicación:</strong> Análisis de motores térmicos y centrales eléctricas</p>
              </div>
            </div>
            
            <div class="formulation">
              <h4>❄️ Enunciado de Clausius</h4>
              <div class="statement-detail">
                <p><strong>Enunciado:</strong> <em>"Es imposible construir un dispositivo que, operando en un ciclo, no produzca otro efecto que la transferencia de calor de un cuerpo frío a uno caliente."</em></p>
                <p><strong>Implicación:</strong> El calor no fluye espontáneamente de frío a caliente</p>
                <p><strong>Aplicación:</strong> Análisis de refrigeradores y bombas de calor</p>
              </div>
            </div>
            
            <div class="formulation">
              <h4>📈 Enunciado de la Entropía</h4>
              <div class="statement-detail">
                <p><strong>Enunciado:</strong> <em>"La entropía de un sistema aislado nunca disminuye: dS ≥ 0"</em></p>
                <p><strong>Implicación:</strong> Los procesos irreversibles aumentan la entropía total</p>
                <p><strong>Aplicación:</strong> Análisis de irreversibilidades y optimización de procesos</p>
              </div>
            </div>
          </div>
          
          <div class="equivalence-proof">
            <h4>🔗 Demostración de Equivalencia</h4>
            <p>Las formulaciones son equivalentes porque:</p>
            <ol>
              <li><strong>Kelvin-Planck → Clausius:</strong> Si existiera un refrigerador perfecto, combinado con una máquina térmica real, violaría Kelvin-Planck</li>
              <li><strong>Clausius → Kelvin-Planck:</strong> Si existiera una máquina térmica perfecta, combinada con un refrigerador real, violaría Clausius</li>
              <li><strong>Ambos → Entropía:</strong> La violación de cualquier enunciado implicaría dS < 0 en un sistema aislado</li>
            </ol>
          </div>
        `
      },
      
      primera_ley: {
        title: 'Formulaciones de la Primera Ley',
        content: `
          <div class="first-law-formulations">
            <div class="formulation">
              <h4>⚡ Formulación Energética</h4>
              <div class="statement-detail">
                <p><strong>Enunciado:</strong> <em>"La energía no se crea ni se destruye, solo se transforma."</em></p>
                <p><strong>Ecuación:</strong> ΔU = Q - W</p>
                <p><strong>Aplicación:</strong> Balance energético en sistemas cerrados</p>
              </div>
            </div>
            
            <div class="formulation">
              <h4>🔄 Formulación Cíclica</h4>
              <div class="statement-detail">
                <p><strong>Enunciado:</strong> <em>"En cualquier proceso cíclico, el calor neto absorbido es igual al trabajo neto realizado."</em></p>
                <p><strong>Ecuación:</strong> ∮ δQ = ∮ δW</p>
                <p><strong>Aplicación:</strong> Análisis de ciclos termodinámicos</p>
              </div>
            </div>
            
            <div class="formulation">
              <h4>🌊 Formulación para Sistemas Abiertos</h4>
              <div class="statement-detail">
                <p><strong>Enunciado:</strong> <em>"La variación de energía de un volumen de control es igual al flujo neto de energía que entra menos el que sale."</em></p>
                <p><strong>Ecuación:</strong> dE/dt = Σṁᵢhᵢ - Σṁₑhₑ + Q̇ - Ẇ</p>
                <p><strong>Aplicación:</strong> Turbinas, compresores, intercambiadores</p>
              </div>
            </div>
          </div>
        `
      },
      
      aplicaciones: {
        title: 'Selección de Formulaciones Apropiadas',
        content: `
          <div class="formulation-selection">
            <div class="selection-guide">
              <h4>🎯 Criterios de Selección</h4>
              <div class="criteria">
                <div class="criterion">
                  <h5>Tipo de Sistema</h5>
                  <ul>
                    <li><strong>Sistema cerrado:</strong> ΔU = Q - W</li>
                    <li><strong>Sistema abierto:</strong> Ecuación de energía para volumen de control</li>
                    <li><strong>Sistema aislado:</strong> Formulación entrópica</li>
                  </ul>
                </div>
                
                <div class="criterion">
                  <h5>Tipo de Proceso</h5>
                  <ul>
                    <li><strong>Procesos cíclicos:</strong> Formulación cíclica</li>
                    <li><strong>Procesos irreversibles:</strong> Análisis entrópico</li>
                    <li><strong>Máquinas térmicas:</strong> Enunciado de Kelvin-Planck</li>
                    <li><strong>Refrigeración:</strong> Enunciado de Clausius</li>
                  </ul>
                </div>
                
                <div class="criterion">
                  <h5>Objetivo del Análisis</h5>
                  <ul>
                    <li><strong>Balance energético:</strong> Primera ley</li>
                    <li><strong>Dirección del proceso:</strong> Segunda ley</li>
                    <li><strong>Optimización:</strong> Análisis exergético</li>
                    <li><strong>Límites teóricos:</strong> Procesos reversibles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        `
      }
    },
    
    keyPoints: [
      'Enunciados equivalentes de Kelvin-Planck y Clausius para la segunda ley',
      'Formulaciones energética, cíclica y para sistemas abiertos de la primera ley',
      'Demostración matemática de la equivalencia entre diferentes enunciados',
      'Criterios para seleccionar la formulación más apropiada según el contexto',
      'Aplicaciones específicas de cada formulación en problemas de ingeniería'
    ],
    
    learningObjectives: [
      'Enunciar las diferentes formulaciones equivalentes de las leyes termodinámicas',
      'Demostrar la equivalencia matemática entre diferentes enunciados',
      'Seleccionar la formulación más apropiada para cada tipo de problema',
      'Aplicar las formulaciones correctas en el análisis de sistemas reales',
      'Comprender las ventajas de cada formulación en contextos específicos'
    ]
  },

  'postulados': {
    titulo: 'Postulados de la Teoría Cinética de los Gases',
    descripcion: 'Fundamentos teóricos del modelo cinético-molecular para explicar el comportamiento macroscópico de los gases',
    mainConcept: 'La teoría cinética de los gases se basa en un conjunto de postulados que describen el comportamiento microscópico de las moléculas gaseosas, permitiendo derivar las propiedades macroscópicas observables como presión, temperatura y calor específico.',
    
    detailedSections: {
      postulados_basicos: {
        title: 'Postulados Fundamentales',
        content: `
          <div class="kinetic-postulates">
            <div class="postulate">
              <h4>1️⃣ Naturaleza Molecular</h4>
              <div class="postulate-detail">
                <p><strong>Enunciado:</strong> Los gases están compuestos por un gran número de moléculas pequeñas en movimiento constante y aleatorio.</p>
                <p><strong>Implicaciones:</strong></p>
                <ul>
                  <li>Las moléculas son puntos materiales (volumen despreciable)</li>
                  <li>Número de moléculas ≈ 10²³ (orden de magnitud de Avogadro)</li>
                  <li>Movimiento caótico en todas las direcciones</li>
                </ul>
              </div>
            </div>
            
            <div class="postulate">
              <h4>2️⃣ Volumen Molecular</h4>
              <div class="postulate-detail">
                <p><strong>Enunciado:</strong> El volumen ocupado por las moléculas es despreciable comparado con el volumen total del gas.</p>
                <p><strong>Implicaciones:</strong></p>
                <ul>
                  <li>Volumen molecular << Volumen del recipiente</li>
                  <li>La mayor parte del espacio está vacío</li>
                  <li>Válido para gases a baja densidad</li>
                </ul>
              </div>
            </div>
            
            <div class="postulate">
              <h4>3️⃣ Fuerzas Intermoleculares</h4>
              <div class="postulate-detail">
                <p><strong>Enunciado:</strong> No existen fuerzas de atracción o repulsión entre las moléculas, excepto durante las colisiones.</p>
                <p><strong>Implicaciones:</strong></p>
                <ul>
                  <li>Movimiento rectilíneo uniforme entre colisiones</li>
                  <li>No hay energía potencial intermolecular</li>
                  <li>Energía total = Energía cinética</li>
                </ul>
              </div>
            </div>
            
            <div class="postulate">
              <h4>4️⃣ Colisiones Elásticas</h4>
              <div class="postulate-detail">
                <p><strong>Enunciado:</strong> Las colisiones entre moléculas y con las paredes son perfectamente elásticas.</p>
                <p><strong>Implicaciones:</strong></p>
                <ul>
                  <li>Se conserva la energía cinética total</li>
                  <li>Se conserva el momento lineal</li>
                  <li>No hay pérdida de energía por fricción</li>
                </ul>
              </div>
            </div>
            
            <div class="postulate">
              <h4>5️⃣ Distribución de Velocidades</h4>
              <div class="postulate-detail">
                <p><strong>Enunciado:</strong> La energía cinética promedio de las moléculas es proporcional a la temperatura absoluta.</p>
                <p><strong>Implicaciones:</strong></p>
                <ul>
                  <li>⟨½mv²⟩ = (3/2)kT</li>
                  <li>Distribución de Maxwell-Boltzmann</li>
                  <li>Temperatura como medida de energía cinética</li>
                </ul>
              </div>
            </div>
          </div>
        `
      },
      
      consecuencias: {
        title: 'Consecuencias de los Postulados',
        content: `
          <div class="kinetic-consequences">
            <div class="consequence">
              <h4>📊 Ecuación de Estado del Gas Ideal</h4>
              <div class="derivation">
                <p><strong>Derivación:</strong> A partir del análisis de colisiones moleculares con las paredes</p>
                <p><strong>Resultado:</strong> PV = NkT = nRT</p>
                <p><strong>Donde:</strong></p>
                <ul>
                  <li>P = presión del gas</li>
                  <li>V = volumen del recipiente</li>
                  <li>N = número de moléculas</li>
                  <li>k = constante de Boltzmann</li>
                  <li>T = temperatura absoluta</li>
                </ul>
              </div>
            </div>
            
            <div class="consequence">
              <h4>🌡️ Interpretación Molecular de la Temperatura</h4>
              <div class="temperature-meaning">
                <p><strong>Definición:</strong> La temperatura es una medida de la energía cinética promedio de traslación de las moléculas</p>
                <p><strong>Ecuación:</strong> T = (2/3k)⟨E_cin⟩</p>
                <p><strong>Implicaciones:</strong></p>
                <ul>
                  <li>T = 0 K implica movimiento molecular nulo</li>
                  <li>Mayor temperatura → mayor agitación molecular</li>
                  <li>Equipartición de energía entre grados de libertad</li>
                </ul>
              </div>
            </div>
            
            <div class="consequence">
              <h4>⚖️ Interpretación Molecular de la Presión</h4>
              <div class="pressure-meaning">
                <p><strong>Definición:</strong> La presión resulta de los impactos moleculares contra las paredes</p>
                <p><strong>Ecuación:</strong> P = (1/3)nm⟨v²⟩</p>
                <p><strong>Donde:</strong></p>
                <ul>
                  <li>n = densidad numérica de moléculas</li>
                  <li>m = masa molecular</li>
                  <li>⟨v²⟩ = velocidad cuadrática media</li>
                </ul>
              </div>
            </div>
          </div>
        `
      },
      
      limitaciones: {
        title: 'Limitaciones del Modelo',
        content: `
          <div class="model-limitations">
            <div class="limitation">
              <h4>🔍 Condiciones de Validez</h4>
              <p>El modelo de gas ideal es válido cuando:</p>
              <ul>
                <li><strong>Baja densidad:</strong> ρ << ρ_crítica</li>
                <li><strong>Alta temperatura:</strong> T >> T_crítica</li>
                <li><strong>Presión moderada:</strong> P << P_crítica</li>
                <li><strong>Moléculas simples:</strong> Gases monoatómicos o diatómicos simples</li>
              </ul>
            </div>
            
            <div class="limitation">
              <h4>❌ Desviaciones del Comportamiento Ideal</h4>
              <div class="deviations">
                <div class="deviation">
                  <h5>Fuerzas Intermoleculares</h5>
                  <p>A altas densidades, las fuerzas de van der Waals se vuelven significativas</p>
                </div>
                <div class="deviation">
                  <h5>Volumen Molecular</h5>
                  <p>A altas presiones, el volumen molecular no es despreciable</p>
                </div>
                <div class="deviation">
                  <h5>Estructura Molecular</h5>
                  <p>Moléculas complejas tienen grados de libertad rotacionales y vibracionales</p>
                </div>
              </div>
            </div>
            
            <div class="limitation">
              <h4>🔧 Correcciones al Modelo</h4>
              <p>Ecuaciones de estado más precisas:</p>
              <ul>
                <li><strong>Van der Waals:</strong> (P + a/V²)(V - b) = RT</li>
                <li><strong>Redlich-Kwong:</strong> Mejora para gases polares</li>
                <li><strong>Peng-Robinson:</strong> Aplicable cerca del punto crítico</li>
                <li><strong>Ecuación virial:</strong> Expansión en serie de potencias</li>
              </ul>
            </div>
          </div>
        `
      }
    },
    
    keyPoints: [
      'Cinco postulados fundamentales del modelo cinético-molecular de gases',
      'Derivación de la ecuación de estado del gas ideal a partir de principios microscópicos',
      'Interpretación molecular de temperatura como energía cinética promedio',
      'Interpretación molecular de presión como resultado de colisiones moleculares',
      'Limitaciones del modelo y condiciones de validez del comportamiento ideal'
    ],
    
    learningObjectives: [
      'Enunciar los postulados fundamentales de la teoría cinética de los gases',
      'Derivar la ecuación del gas ideal a partir de consideraciones microscópicas',
      'Explicar el significado molecular de temperatura y presión',
      'Identificar las limitaciones del modelo de gas ideal',
      'Reconocer cuándo aplicar correcciones al comportamiento ideal'
    ]
  }
};

// Función para generar el componente teoria.jsx completo
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

// Función para actualizar definitions.js con contenido completo
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
  estimatedStudyTime: '2-3 hours',
  prerequisites: ['Conceptos básicos de física', 'Matemáticas básicas'],
  relatedTopics: ['Otros subtemas de termodinámica', 'Mecánica estadística', 'Física térmica']
};`;

  const definitionsPath = path.join(subtopicPath, 'definitions.js');
  fs.writeFileSync(definitionsPath, definitionsContent, 'utf8');
  console.log(`✅ Updated complete definitions: ${subtopicName}`);
  return true;
}

// Función para procesar un subtema teórico
function developCompleteTheory(subtopicPath) {
  const subtopicName = path.basename(subtopicPath);
  
  // Verificar si tiene contenido específico
  if (!remainingTheoryContent[subtopicName]) {
    return false;
  }
  
  console.log(`📚 Developing complete theory for: ${subtopicName}`);
  
  const content = remainingTheoryContent[subtopicName];
  updateCompleteDefinitions(subtopicPath, subtopicName, content);
  generateCompleteTheoryComponent(subtopicPath, subtopicName, content);
  
  return true;
}

// Función para recorrer directorios recursivamente
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let developedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Verificar si es un subtema teórico
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
      
      // Seguir recursivamente
      developedCount += processDirectory(fullPath);
    }
  }
  
  return developedCount;
}

// Ejecutar el script
console.log('📖 Iniciando desarrollo de teoría restante...\n');

const thermodynamicsPath = 'src/data/termodinamica';
const developedCount = processDirectory(thermodynamicsPath);

console.log(`\n✅ Desarrollo teórico completado!`);
console.log(`📊 Total de subtemas adicionales con teoría completa: ${developedCount}`);
console.log('\n🎯 Los subtemas teóricos restantes ahora incluyen:');
console.log('   • Contenido académico riguroso y detallado');
console.log('   • Secciones teóricas especializadas por tema');
console.log('   • Desarrollo conceptual profundo');
console.log('   • Ejemplos y aplicaciones específicas');
console.log('   • Estructura pedagógica universitaria');