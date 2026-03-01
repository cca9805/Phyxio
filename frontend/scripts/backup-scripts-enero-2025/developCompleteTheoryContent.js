import fs from 'fs';
import path from 'path';

// Contenido teórico completo y detallado para cada subtema
const completeTheoryContent = {
  'introduccion_a_la_termodinamica': {
    titulo: 'Introducción a la Termodinámica',
    descripcion: 'Fundamentos históricos, conceptuales y epistemológicos de la termodinámica como ciencia',
    mainConcept: 'La termodinámica es la rama de la física que estudia las relaciones entre calor, trabajo, temperatura y energía, así como las transformaciones de la energía en los sistemas macroscópicos.',
    
    detailedSections: {
      definicion: {
        title: 'Definición y Alcance',
        content: `
          <p>La <strong>termodinámica</strong> (del griego θερμός, thermós: 'caliente' y δύναμις, dýnamis: 'fuerza') es una rama fundamental de la física que estudia los fenómenos relacionados con el calor, el trabajo y la energía. Esta disciplina se ocupa de describir los estados de equilibrio a escala macroscópica y los procesos de intercambio de energía entre sistemas.</p>
          
          <p>El alcance de la termodinámica abarca:</p>
          <ul>
            <li><strong>Sistemas macroscópicos:</strong> Estudia sistemas con un gran número de partículas (≈10²³)</li>
            <li><strong>Propiedades emergentes:</strong> Se enfoca en propiedades que surgen del comportamiento colectivo</li>
            <li><strong>Estados de equilibrio:</strong> Describe sistemas en equilibrio térmico, mecánico y químico</li>
            <li><strong>Procesos de transformación:</strong> Analiza cómo los sistemas evolucionan entre estados</li>
          </ul>
        `
      },
      
      historia: {
        title: 'Desarrollo Histórico',
        content: `
          <p>La termodinámica se desarrolló durante los siglos XVIII y XIX, impulsada por la revolución industrial y la necesidad de optimizar las máquinas térmicas:</p>
          
          <div class="timeline">
            <div class="timeline-item">
              <h4>1760-1840: Fundamentos Empíricos</h4>
              <ul>
                <li><strong>Joseph Black (1728-1799):</strong> Conceptos de calor específico y calor latente</li>
                <li><strong>Benjamin Thompson (Conde Rumford, 1753-1814):</strong> Demostró la equivalencia entre trabajo mecánico y calor</li>
                <li><strong>Sadi Carnot (1796-1832):</strong> "Reflexiones sobre la potencia motriz del fuego" (1824) - Fundamentos del ciclo de Carnot</li>
              </ul>
            </div>
            
            <div class="timeline-item">
              <h4>1840-1870: Formulación de las Leyes</h4>
              <ul>
                <li><strong>James Prescott Joule (1818-1889):</strong> Equivalente mecánico del calor, Primera Ley</li>
                <li><strong>Rudolf Clausius (1822-1888):</strong> Formulación de la Segunda Ley, concepto de entropía</li>
                <li><strong>William Thomson (Lord Kelvin, 1824-1907):</strong> Escala absoluta de temperatura, enunciado de Kelvin-Planck</li>
              </ul>
            </div>
            
            <div class="timeline-item">
              <h4>1870-1900: Consolidación Teórica</h4>
              <ul>
                <li><strong>Josiah Willard Gibbs (1839-1903):</strong> Termodinámica química, potenciales termodinámicos</li>
                <li><strong>Ludwig Boltzmann (1844-1906):</strong> Interpretación estadística de la entropía</li>
                <li><strong>Walther Nernst (1864-1941):</strong> Tercera Ley de la Termodinámica</li>
              </ul>
            </div>
          </div>
        `
      },
      
      relaciones: {
        title: 'Relación con Otras Disciplinas',
        content: `
          <p>La termodinámica mantiene conexiones fundamentales con múltiples áreas del conocimiento:</p>
          
          <div class="discipline-connections">
            <div class="connection-item">
              <h4>🔬 Mecánica Estadística</h4>
              <p>Proporciona la base microscópica de los fenómenos termodinámicos. La mecánica estadística explica las propiedades macroscópicas a partir del comportamiento de las partículas individuales.</p>
            </div>
            
            <div class="connection-item">
              <h4>⚗️ Química Física</h4>
              <p>La termodinámica química estudia los cambios energéticos en las reacciones químicas, equilibrios químicos y transiciones de fase.</p>
            </div>
            
            <div class="connection-item">
              <h4>🏭 Ingeniería</h4>
              <p>Aplicación en el diseño de motores térmicos, sistemas de refrigeración, turbinas, calderas y procesos industriales.</p>
            </div>
            
            <div class="connection-item">
              <h4>🌍 Ciencias de la Tierra</h4>
              <p>Estudios de la atmósfera, oceanografía, geotermia y procesos geológicos que involucran transferencia de energía.</p>
            </div>
            
            <div class="connection-item">
              <h4>🧬 Biología</h4>
              <p>Bioenergética, metabolismo celular, y procesos biológicos que involucran transformaciones de energía.</p>
            </div>
          </div>
        `
      },
      
      aplicaciones: {
        title: 'Aplicaciones Fundamentales',
        content: `
          <p>La termodinámica tiene aplicaciones extensas en la ciencia y la tecnología moderna:</p>
          
          <div class="applications-grid">
            <div class="app-category">
              <h4>🚗 Automoción</h4>
              <ul>
                <li>Motores de combustión interna</li>
                <li>Sistemas de refrigeración</li>
                <li>Turbocargadores</li>
                <li>Sistemas de escape</li>
              </ul>
            </div>
            
            <div class="app-category">
              <h4>⚡ Generación de Energía</h4>
              <ul>
                <li>Centrales térmicas</li>
                <li>Turbinas de vapor</li>
                <li>Ciclos combinados</li>
                <li>Energía geotérmica</li>
              </ul>
            </div>
            
            <div class="app-category">
              <h4>❄️ Refrigeración</h4>
              <ul>
                <li>Refrigeradores domésticos</li>
                <li>Aire acondicionado</li>
                <li>Bombas de calor</li>
                <li>Criogenia</li>
              </ul>
            </div>
            
            <div class="app-category">
              <h4>🏭 Procesos Industriales</h4>
              <ul>
                <li>Destilación</li>
                <li>Compresión de gases</li>
                <li>Secado industrial</li>
                <li>Tratamientos térmicos</li>
              </ul>
            </div>
          </div>
        `
      }
    },
    
    keyPoints: [
      'Definición y alcance de la termodinámica como ciencia macroscópica',
      'Desarrollo histórico desde la revolución industrial hasta la formulación moderna',
      'Relación fundamental con otras ramas de la física y la ingeniería',
      'Aplicaciones extensas en tecnología, industria y ciencias naturales',
      'Base conceptual para el estudio de sistemas energéticos complejos'
    ],
    
    learningObjectives: [
      'Definir la termodinámica y comprender su alcance como disciplina científica',
      'Conocer los hitos históricos y científicos que contribuyeron a su desarrollo',
      'Identificar las conexiones con otras áreas del conocimiento científico y tecnológico',
      'Reconocer las aplicaciones fundamentales en ingeniería y ciencias aplicadas',
      'Establecer las bases conceptuales para el estudio avanzado de la materia'
    ]
  },

  'sistemas_termodinamicos': {
    titulo: 'Sistemas Termodinámicos',
    descripcion: 'Clasificación, características y propiedades de los sistemas termodinámicos',
    mainConcept: 'Un sistema termodinámico es una porción específica del universo que se separa para su estudio mediante fronteras reales o imaginarias, caracterizado por sus propiedades macroscópicas y su capacidad de intercambiar energía y materia con el entorno.',
    
    detailedSections: {
      definicion: {
        title: 'Definición y Conceptos Fundamentales',
        content: `
          <p>Un <strong>sistema termodinámico</strong> es una región del espacio o una cantidad de materia que se selecciona para análisis termodinámico. Esta selección se realiza mediante la definición de <strong>fronteras</strong> que separan el sistema del resto del universo, denominado <strong>entorno</strong> o <strong>alrededores</strong>.</p>
          
          <div class="concept-breakdown">
            <div class="concept-item">
              <h4>🎯 Sistema</h4>
              <p>La porción del universo que se estudia. Puede ser una cantidad fija de materia o una región fija del espacio.</p>
            </div>
            
            <div class="concept-item">
              <h4>🌍 Entorno (Alrededores)</h4>
              <p>Todo lo que rodea al sistema y puede interactuar con él. En la práctica, se considera solo la parte del entorno que puede afectar al sistema.</p>
            </div>
            
            <div class="concept-item">
              <h4>🔲 Frontera</h4>
              <p>La superficie real o imaginaria que separa el sistema del entorno. Puede ser fija o móvil, rígida o deformable.</p>
            </div>
            
            <div class="concept-item">
              <h4>🌌 Universo Termodinámico</h4>
              <p>La combinación del sistema y su entorno. En teoría, incluye todo lo que puede influir en el análisis.</p>
            </div>
          </div>
        `
      },
      
      clasificacion: {
        title: 'Clasificación de Sistemas',
        content: `
          <p>Los sistemas termodinámicos se clasifican según su capacidad de intercambiar energía y materia con el entorno:</p>
          
          <div class="system-types">
            <div class="system-type">
              <h4>🔓 Sistema Abierto (Volumen de Control)</h4>
              <div class="system-description">
                <p><strong>Características:</strong></p>
                <ul>
                  <li>Permite intercambio de energía (calor y trabajo)</li>
                  <li>Permite intercambio de materia</li>
                  <li>La masa del sistema puede variar</li>
                  <li>Las fronteras son permeables</li>
                </ul>
                <p><strong>Ejemplos:</strong></p>
                <ul>
                  <li>Turbina de vapor en operación</li>
                  <li>Compresor de aire</li>
                  <li>Intercambiador de calor</li>
                  <li>Motor de combustión interna</li>
                </ul>
              </div>
            </div>
            
            <div class="system-type">
              <h4>🔒 Sistema Cerrado (Masa de Control)</h4>
              <div class="system-description">
                <p><strong>Características:</strong></p>
                <ul>
                  <li>Permite intercambio de energía (calor y trabajo)</li>
                  <li>NO permite intercambio de materia</li>
                  <li>La masa del sistema permanece constante</li>
                  <li>Las fronteras son impermeables</li>
                </ul>
                <p><strong>Ejemplos:</strong></p>
                <ul>
                  <li>Gas en un cilindro con pistón</li>
                  <li>Refrigerante en un sistema sellado</li>
                  <li>Vapor en una caldera cerrada</li>
                  <li>Aire en un neumático</li>
                </ul>
              </div>
            </div>
            
            <div class="system-type">
              <h4>🔐 Sistema Aislado</h4>
              <div class="system-description">
                <p><strong>Características:</strong></p>
                <ul>
                  <li>NO permite intercambio de energía</li>
                  <li>NO permite intercambio de materia</li>
                  <li>Masa y energía constantes</li>
                  <li>Fronteras rígidas e impermeables</li>
                </ul>
                <p><strong>Ejemplos:</strong></p>
                <ul>
                  <li>Universo completo (teóricamente)</li>
                  <li>Termo perfectamente aislado</li>
                  <li>Calorímetro ideal</li>
                  <li>Sistema en equilibrio total</li>
                </ul>
              </div>
            </div>
          </div>
        `
      },
      
      propiedades: {
        title: 'Propiedades de los Sistemas',
        content: `
          <p>Las propiedades termodinámicas se clasifican según su dependencia del tamaño del sistema:</p>
          
          <div class="properties-comparison">
            <div class="property-type">
              <h4>📏 Propiedades Extensivas</h4>
              <div class="property-details">
                <p><strong>Definición:</strong> Dependen de la cantidad de materia del sistema. Son aditivas.</p>
                <p><strong>Características:</strong></p>
                <ul>
                  <li>Proporcionales a la masa del sistema</li>
                  <li>Se pueden sumar para subsistemas</li>
                  <li>Cambian al dividir el sistema</li>
                </ul>
                <p><strong>Ejemplos:</strong></p>
                <ul>
                  <li><strong>Masa (m):</strong> kg</li>
                  <li><strong>Volumen (V):</strong> m³</li>
                  <li><strong>Energía interna (U):</strong> J</li>
                  <li><strong>Entalpía (H):</strong> J</li>
                  <li><strong>Entropía (S):</strong> J/K</li>
                </ul>
              </div>
            </div>
            
            <div class="property-type">
              <h4>🎯 Propiedades Intensivas</h4>
              <div class="property-details">
                <p><strong>Definición:</strong> No dependen de la cantidad de materia. Son independientes del tamaño.</p>
                <p><strong>Características:</strong></p>
                <ul>
                  <li>Independientes de la masa del sistema</li>
                  <li>No se pueden sumar</li>
                  <li>Permanecen constantes al dividir el sistema</li>
                </ul>
                <p><strong>Ejemplos:</strong></p>
                <ul>
                  <li><strong>Temperatura (T):</strong> K, °C</li>
                  <li><strong>Presión (P):</strong> Pa, bar</li>
                  <li><strong>Densidad (ρ):</strong> kg/m³</li>
                  <li><strong>Calor específico (c):</strong> J/(kg·K)</li>
                  <li><strong>Viscosidad (μ):</strong> Pa·s</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="specific-properties">
            <h4>🔄 Propiedades Específicas</h4>
            <p>Se obtienen dividiendo una propiedad extensiva entre la masa:</p>
            <ul>
              <li><strong>Volumen específico:</strong> v = V/m (m³/kg)</li>
              <li><strong>Energía interna específica:</strong> u = U/m (J/kg)</li>
              <li><strong>Entalpía específica:</strong> h = H/m (J/kg)</li>
              <li><strong>Entropía específica:</strong> s = S/m (J/(kg·K))</li>
            </ul>
          </div>
        `
      },
      
      estados: {
        title: 'Estados y Procesos',
        content: `
          <p>Los sistemas termodinámicos pueden encontrarse en diferentes estados y experimentar diversos tipos de procesos:</p>
          
          <div class="states-processes">
            <div class="state-type">
              <h4>⚖️ Estado de Equilibrio</h4>
              <p>Un sistema está en equilibrio termodinámico cuando:</p>
              <ul>
                <li><strong>Equilibrio térmico:</strong> Temperatura uniforme</li>
                <li><strong>Equilibrio mecánico:</strong> Presión uniforme</li>
                <li><strong>Equilibrio químico:</strong> Composición estable</li>
                <li><strong>Equilibrio de fases:</strong> Fases en equilibrio</li>
              </ul>
            </div>
            
            <div class="process-type">
              <h4>🔄 Tipos de Procesos</h4>
              <ul>
                <li><strong>Proceso cuasiestático:</strong> Sucesión de estados de equilibrio</li>
                <li><strong>Proceso reversible:</strong> Puede invertirse sin cambios en el entorno</li>
                <li><strong>Proceso irreversible:</strong> No puede invertirse completamente</li>
                <li><strong>Proceso cíclico:</strong> El sistema regresa al estado inicial</li>
              </ul>
            </div>
          </div>
        `
      }
    },
    
    keyPoints: [
      'Definición precisa de sistema, entorno, frontera y universo termodinámico',
      'Clasificación completa: sistemas abiertos, cerrados y aislados',
      'Distinción fundamental entre propiedades extensivas e intensivas',
      'Conceptos de equilibrio termodinámico y sus diferentes tipos',
      'Caracterización de procesos termodinámicos y su reversibilidad'
    ],
    
    learningObjectives: [
      'Identificar y clasificar correctamente diferentes tipos de sistemas termodinámicos',
      'Distinguir entre propiedades extensivas e intensivas con ejemplos específicos',
      'Definir las fronteras apropiadas para el análisis de sistemas reales',
      'Reconocer estados de equilibrio y tipos de procesos termodinámicos',
      'Aplicar los conceptos de sistema en problemas de ingeniería práctica'
    ]
  },

  'estado_y_equilibrio': {
    titulo: 'Estado y Equilibrio Termodinámico',
    descripcion: 'Conceptos fundamentales de estado termodinámico y condiciones de equilibrio',
    mainConcept: 'El estado termodinámico de un sistema queda completamente determinado por un conjunto mínimo de propiedades independientes, mientras que el equilibrio termodinámico representa la condición en la cual todas las propiedades macroscópicas permanecen constantes en el tiempo.',
    
    detailedSections: {
      estado: {
        title: 'Estado Termodinámico',
        content: `
          <p>El <strong>estado termodinámico</strong> es la condición de un sistema definida por los valores de sus propiedades termodinámicas en un momento dado.</p>
          
          <div class="state-concepts">
            <div class="concept-detail">
              <h4>📊 Variables de Estado</h4>
              <p>Son las propiedades independientes que definen completamente el estado del sistema:</p>
              <ul>
                <li><strong>Propiedades primarias:</strong> Presión (P), Volumen (V), Temperatura (T)</li>
                <li><strong>Propiedades derivadas:</strong> Energía interna (U), Entalpía (H), Entropía (S)</li>
                <li><strong>Número mínimo:</strong> Para un sistema simple, dos propiedades intensivas independientes</li>
              </ul>
            </div>
            
            <div class="concept-detail">
              <h4>🔗 Funciones de Estado</h4>
              <p>Propiedades que dependen únicamente del estado actual del sistema, no del camino seguido:</p>
              <ul>
                <li>Su valor es independiente de la historia del sistema</li>
                <li>Su diferencial es exacta: ∫dF = F₂ - F₁</li>
                <li>Ejemplos: U, H, S, G, A (potenciales termodinámicos)</li>
              </ul>
            </div>
            
            <div class="concept-detail">
              <h4>📈 Ecuaciones de Estado</h4>
              <p>Relaciones matemáticas entre las variables de estado:</p>
              <ul>
                <li><strong>Gas ideal:</strong> PV = nRT</li>
                <li><strong>Van der Waals:</strong> (P + a/V²)(V - b) = RT</li>
                <li><strong>Virial:</strong> PV = RT(1 + B/V + C/V² + ...)</li>
              </ul>
            </div>
          </div>
        `
      },
      
      equilibrio: {
        title: 'Equilibrio Termodinámico',
        content: `
          <p>Un sistema está en <strong>equilibrio termodinámico</strong> cuando todas sus propiedades macroscópicas permanecen constantes en el tiempo, sin influencias externas netas.</p>
          
          <div class="equilibrium-types">
            <div class="equilibrium-type">
              <h4>🌡️ Equilibrio Térmico</h4>
              <div class="eq-description">
                <p><strong>Condición:</strong> Temperatura uniforme en todo el sistema</p>
                <p><strong>Criterio:</strong> T₁ = T₂ = ... = Tₙ</p>
                <p><strong>Significado:</strong> No hay transferencia neta de calor entre partes del sistema</p>
                <p><strong>Ejemplo:</strong> Un café que alcanza la temperatura ambiente</p>
              </div>
            </div>
            
            <div class="equilibrium-type">
              <h4>⚖️ Equilibrio Mecánico</h4>
              <div class="eq-description">
                <p><strong>Condición:</strong> Presión uniforme (sin fuerzas externas)</p>
                <p><strong>Criterio:</strong> P₁ = P₂ = ... = Pₙ</p>
                <p><strong>Significado:</strong> No hay movimiento macroscópico de materia</p>
                <p><strong>Ejemplo:</strong> Gas en un recipiente sin gradientes de presión</p>
              </div>
            </div>
            
            <div class="equilibrium-type">
              <h4>⚗️ Equilibrio Químico</h4>
              <div class="eq-description">
                <p><strong>Condición:</strong> Potencial químico uniforme para cada especie</p>
                <p><strong>Criterio:</strong> μᵢ₁ = μᵢ₂ = ... = μᵢₙ para cada componente i</p>
                <p><strong>Significado:</strong> No hay reacciones químicas netas</p>
                <p><strong>Ejemplo:</strong> Mezcla de gases sin reacción</p>
              </div>
            </div>
            
            <div class="equilibrium-type">
              <h4>🔄 Equilibrio de Fases</h4>
              <div class="eq-description">
                <p><strong>Condición:</strong> Coexistencia estable de fases</p>
                <p><strong>Criterio:</strong> T, P y μ iguales en todas las fases</p>
                <p><strong>Significado:</strong> No hay transferencia neta de masa entre fases</p>
                <p><strong>Ejemplo:</strong> Agua líquida en equilibrio con su vapor</p>
              </div>
            </div>
          </div>
        `
      },
      
      procesos: {
        title: 'Procesos Cuasiestáticos y Reversibilidad',
        content: `
          <div class="process-concepts">
            <div class="process-type">
              <h4>🐌 Procesos Cuasiestáticos</h4>
              <div class="process-description">
                <p><strong>Definición:</strong> Proceso que ocurre tan lentamente que el sistema pasa por una sucesión de estados de equilibrio.</p>
                <p><strong>Características:</strong></p>
                <ul>
                  <li>Velocidad infinitesimalmente lenta</li>
                  <li>Sistema siempre en equilibrio interno</li>
                  <li>Proceso idealmente reversible</li>
                  <li>Representable como línea en diagrama de estado</li>
                </ul>
                <p><strong>Importancia:</strong> Permite el análisis termodinámico riguroso</p>
              </div>
            </div>
            
            <div class="process-type">
              <h4>↩️ Procesos Reversibles</h4>
              <div class="process-description">
                <p><strong>Definición:</strong> Proceso que puede invertirse sin dejar cambios en el sistema ni en el entorno.</p>
                <p><strong>Condiciones:</strong></p>
                <ul>
                  <li>Ausencia de fricción</li>
                  <li>Sin gradientes finitos de temperatura</li>
                  <li>Sin gradientes finitos de presión</li>
                  <li>Sin efectos de histéresis</li>
                </ul>
                <p><strong>Significado:</strong> Proceso ideal que maximiza el trabajo útil</p>
              </div>
            </div>
            
            <div class="process-type">
              <h4>↪️ Procesos Irreversibles</h4>
              <div class="process-description">
                <p><strong>Definición:</strong> Proceso real que no puede invertirse completamente.</p>
                <p><strong>Causas de irreversibilidad:</strong></p>
                <ul>
                  <li>Fricción mecánica</li>
                  <li>Transferencia de calor con diferencia finita de temperatura</li>
                  <li>Expansión libre de gases</li>
                  <li>Mezcla espontánea</li>
                  <li>Reacciones químicas espontáneas</li>
                </ul>
                <p><strong>Consecuencia:</strong> Generación de entropía</p>
              </div>
            </div>
          </div>
        `
      },
      
      criterios: {
        title: 'Criterios de Equilibrio y Estabilidad',
        content: `
          <div class="stability-criteria">
            <h4>📐 Criterios Matemáticos de Equilibrio</h4>
            
            <div class="criterion">
              <h5>🎯 Equilibrio Estable</h5>
              <p>El sistema regresa al equilibrio tras pequeñas perturbaciones:</p>
              <ul>
                <li><strong>Criterio energético:</strong> Energía interna mínima (a S,V constantes)</li>
                <li><strong>Criterio entrópico:</strong> Entropía máxima (a U,V constantes)</li>
                <li><strong>Criterio de Gibbs:</strong> Energía libre de Gibbs mínima (a T,P constantes)</li>
              </ul>
            </div>
            
            <div class="criterion">
              <h5>⚖️ Equilibrio Inestable</h5>
              <p>Pequeñas perturbaciones alejan al sistema del equilibrio:</p>
              <ul>
                <li>Máximo local de energía</li>
                <li>Mínimo local de entropía</li>
                <li>Sistema tiende a evolucionar espontáneamente</li>
              </ul>
            </div>
            
            <div class="criterion">
              <h5>🔄 Equilibrio Metaestable</h5>
              <p>Estable ante pequeñas perturbaciones, inestable ante grandes:</p>
              <ul>
                <li>Mínimo local pero no global</li>
                <li>Requiere activación para cambiar de estado</li>
                <li>Ejemplo: vapor sobrecalentado, líquido subenfriado</li>
              </ul>
            </div>
          </div>
        `
      }
    },
    
    keyPoints: [
      'Definición completa del estado termodinámico mediante variables independientes',
      'Distinción entre variables de estado y funciones de estado',
      'Caracterización completa del equilibrio térmico, mecánico, químico y de fases',
      'Conceptos de procesos cuasiestáticos, reversibles e irreversibles',
      'Criterios matemáticos de equilibrio y estabilidad termodinámica'
    ],
    
    learningObjectives: [
      'Definir el estado termodinámico y identificar las variables necesarias para caracterizarlo',
      'Distinguir entre variables de estado y funciones de estado con ejemplos específicos',
      'Reconocer y analizar las diferentes condiciones de equilibrio termodinámico',
      'Comprender los conceptos de reversibilidad y procesos cuasiestáticos',
      'Aplicar criterios de equilibrio y estabilidad en sistemas termodinámicos reales'
    ]
  },

  'frontera_y_entorno': {
    titulo: 'Frontera y Entorno',
    descripcion: 'Definición precisa de fronteras del sistema y caracterización de las interacciones con el entorno',
    mainConcept: 'La frontera de un sistema termodinámico es la superficie real o imaginaria que separa el sistema del entorno, determinando qué interacciones (energía y materia) son posibles entre ambos.',
    
    detailedSections: {
      frontera: {
        title: 'Concepto de Frontera',
        content: `
          <p>La <strong>frontera</strong> es el límite que define qué pertenece al sistema y qué al entorno. Su correcta definición es crucial para el análisis termodinámico.</p>
          
          <div class="boundary-types">
            <div class="boundary-type">
              <h4>🔲 Fronteras Físicas</h4>
              <ul>
                <li><strong>Paredes sólidas:</strong> Recipientes, tuberías, cilindros</li>
                <li><strong>Membranas:</strong> Permeables o semipermeables</li>
                <li><strong>Interfaces:</strong> Superficie líquido-vapor</li>
              </ul>
            </div>
            
            <div class="boundary-type">
              <h4>📐 Fronteras Imaginarias</h4>
              <ul>
                <li><strong>Superficies de control:</strong> Para análisis de flujo</li>
                <li><strong>Planos de simetría:</strong> En sistemas simétricos</li>
                <li><strong>Límites conceptuales:</strong> Para aislar fenómenos</li>
              </ul>
            </div>
          </div>
          
          <div class="boundary-properties">
            <h4>🏗️ Propiedades de las Fronteras</h4>
            <div class="property-grid">
              <div class="property">
                <h5>Rigidez</h5>
                <p><strong>Rígida:</strong> No permite cambio de volumen</p>
                <p><strong>Móvil:</strong> Permite expansión/compresión</p>
              </div>
              <div class="property">
                <h5>Permeabilidad</h5>
                <p><strong>Impermeable:</strong> No permite paso de materia</p>
                <p><strong>Permeable:</strong> Permite intercambio de masa</p>
              </div>
              <div class="property">
                <h5>Conductividad Térmica</h5>
                <p><strong>Adiabática:</strong> No permite transferencia de calor</p>
                <p><strong>Diatérmica:</strong> Permite intercambio térmico</p>
              </div>
            </div>
          </div>
        `
      },
      
      entorno: {
        title: 'Caracterización del Entorno',
        content: `
          <p>El <strong>entorno</strong> o <strong>alrededores</strong> comprende todo lo que rodea al sistema y puede interactuar con él.</p>
          
          <div class="environment-concepts">
            <div class="env-concept">
              <h4>🌍 Entorno Inmediato</h4>
              <p>La porción del entorno que está en contacto directo con la frontera del sistema y puede intercambiar energía o materia con él.</p>
              <ul>
                <li>Afecta directamente al sistema</li>
                <li>Sus propiedades influyen en el comportamiento del sistema</li>
                <li>Debe considerarse en el análisis termodinámico</li>
              </ul>
            </div>
            
            <div class="env-concept">
              <h4>🌌 Entorno Lejano</h4>
              <p>Regiones distantes que no interactúan significativamente con el sistema en la escala de tiempo del proceso estudiado.</p>
              <ul>
                <li>Efecto despreciable en el sistema</li>
                <li>Puede ignorarse en el análisis</li>
                <li>Actúa como reservorio infinito</li>
              </ul>
            </div>
          </div>
          
          <div class="reservoir-types">
            <h4>🏛️ Tipos de Reservorios</h4>
            <div class="reservoir">
              <h5>🌡️ Reservorio Térmico</h5>
              <p>Sistema tan grande que su temperatura permanece constante durante el intercambio de calor.</p>
              <p><strong>Ejemplos:</strong> Atmósfera, océanos, hornos industriales</p>
            </div>
            <div class="reservoir">
              <h5>⚖️ Reservorio de Presión</h5>
              <p>Sistema que mantiene presión constante durante el intercambio de trabajo.</p>
              <p><strong>Ejemplos:</strong> Atmósfera, sistemas hidráulicos grandes</p>
            </div>
            <div class="reservoir">
              <h5>⚗️ Reservorio de Materia</h5>
              <p>Sistema que mantiene composición constante durante el intercambio de masa.</p>
              <p><strong>Ejemplos:</strong> Océanos para vapor de agua, atmósfera para gases</p>
            </div>
          </div>
        `
      },
      
      interacciones: {
        title: 'Interacciones Sistema-Entorno',
        content: `
          <p>Las interacciones entre sistema y entorno determinan cómo evoluciona el sistema termodinámico.</p>
          
          <div class="interaction-types">
            <div class="interaction">
              <h4>🔥 Transferencia de Calor</h4>
              <div class="interaction-details">
                <p><strong>Mecanismo:</strong> Diferencia de temperatura</p>
                <p><strong>Dirección:</strong> De mayor a menor temperatura</p>
                <p><strong>Tipos:</strong></p>
                <ul>
                  <li>Conducción a través de fronteras sólidas</li>
                  <li>Convección en fronteras fluidas</li>
                  <li>Radiación a través del espacio</li>
                </ul>
              </div>
            </div>
            
            <div class="interaction">
              <h4>⚙️ Transferencia de Trabajo</h4>
              <div class="interaction-details">
                <p><strong>Mecanismo:</strong> Fuerzas que actúan a través de distancias</p>
                <p><strong>Tipos:</strong></p>
                <ul>
                  <li><strong>Trabajo de frontera:</strong> Expansión/compresión</li>
                  <li><strong>Trabajo de eje:</strong> Rotación de turbinas/compresores</li>
                  <li><strong>Trabajo eléctrico:</strong> Corriente eléctrica</li>
                  <li><strong>Trabajo magnético:</strong> Campos magnéticos</li>
                </ul>
              </div>
            </div>
            
            <div class="interaction">
              <h4>💨 Transferencia de Masa</h4>
              <div class="interaction-details">
                <p><strong>Mecanismo:</strong> Gradientes de potencial químico</p>
                <p><strong>Formas:</strong></p>
                <ul>
                  <li>Flujo convectivo de fluidos</li>
                  <li>Difusión molecular</li>
                  <li>Evaporación/condensación</li>
                  <li>Reacciones químicas en la frontera</li>
                </ul>
              </div>
            </div>
          </div>
        `
      }
    },
    
    keyPoints: [
      'Definición precisa de frontera como superficie que separa sistema y entorno',
      'Clasificación de fronteras según rigidez, permeabilidad y conductividad térmica',
      'Caracterización del entorno inmediato y lejano, incluyendo reservorios',
      'Tipos de interacciones: transferencia de calor, trabajo y masa',
      'Importancia de la correcta definición de fronteras para el análisis termodinámico'
    ],
    
    learningObjectives: [
      'Definir correctamente las fronteras de sistemas termodinámicos reales',
      'Clasificar fronteras según sus propiedades físicas y térmicas',
      'Identificar y caracterizar diferentes tipos de entorno y reservorios',
      'Analizar las interacciones posibles entre sistema y entorno',
      'Aplicar estos conceptos en la resolución de problemas termodinámicos'
    ]
  },

  'cero_principio': {
    titulo: 'Principio Cero de la Termodinámica',
    descripcion: 'Fundamento conceptual del equilibrio térmico y la definición operacional de temperatura',
    mainConcept: 'Si dos sistemas están en equilibrio térmico con un tercero, entonces están en equilibrio térmico entre sí. Este principio establece la base para la definición de temperatura y la medición térmica.',
    
    detailedSections: {
      enunciado: {
        title: 'Enunciado y Significado',
        content: `
          <p>El <strong>Principio Cero de la Termodinámica</strong> fue formulado después de las otras leyes, pero es lógicamente anterior a ellas.</p>
          
          <div class="principle-statement">
            <h4>📜 Enunciado Formal</h4>
            <div class="formal-statement">
              <p><em>"Si dos sistemas A y B están separadamente en equilibrio térmico con un tercer sistema C, entonces A y B están en equilibrio térmico entre sí."</em></p>
            </div>
          </div>
          
          <div class="mathematical-representation">
            <h4>🔢 Representación Matemática</h4>
            <p>Si T_A = T_C y T_B = T_C, entonces T_A = T_B</p>
            <p>Donde T representa la temperatura de cada sistema.</p>
          </div>
          
          <div class="transitivity">
            <h4>🔄 Propiedad de Transitividad</h4>
            <p>El principio cero establece que el equilibrio térmico es una relación transitiva:</p>
            <ul>
              <li><strong>Reflexiva:</strong> Un sistema está en equilibrio térmico consigo mismo</li>
              <li><strong>Simétrica:</strong> Si A está en equilibrio con B, entonces B está en equilibrio con A</li>
              <li><strong>Transitiva:</strong> Si A está en equilibrio con C y B está en equilibrio con C, entonces A está en equilibrio con B</li>
            </ul>
          </div>
        `
      },
      
      temperatura: {
        title: 'Definición de Temperatura',
        content: `
          <p>El principio cero permite definir la <strong>temperatura</strong> como una propiedad que caracteriza el equilibrio térmico.</p>
          
          <div class="temperature-definition">
            <h4>🌡️ Definición Operacional</h4>
            <p>La temperatura es la propiedad que determina si un sistema está en equilibrio térmico con otros sistemas.</p>
            <ul>
              <li>Sistemas en equilibrio térmico tienen la misma temperatura</li>
              <li>Sistemas con diferentes temperaturas no están en equilibrio térmico</li>
              <li>La temperatura es una propiedad intensiva</li>
            </ul>
          </div>
          
          <div class="temperature-scales">
            <h4>📏 Escalas de Temperatura</h4>
            <div class="scale-comparison">
              <div class="scale">
                <h5>Celsius (°C)</h5>
                <p>Basada en puntos de fusión (0°C) y ebullición (100°C) del agua a 1 atm</p>
              </div>
              <div class="scale">
                <h5>Fahrenheit (°F)</h5>
                <p>°F = (9/5)°C + 32</p>
              </div>
              <div class="scale">
                <h5>Kelvin (K)</h5>
                <p>Escala absoluta: K = °C + 273.15</p>
                <p>Basada en el cero absoluto</p>
              </div>
              <div class="scale">
                <h5>Rankine (°R)</h5>
                <p>°R = °F + 459.67</p>
                <p>Escala absoluta en unidades Fahrenheit</p>
              </div>
            </div>
          </div>
        `
      },
      
      termometria: {
        title: 'Termometría y Medición',
        content: `
          <p>El principio cero fundamenta la <strong>termometría</strong>, la ciencia de la medición de temperatura.</p>
          
          <div class="thermometry-principles">
            <h4>🔬 Principios de la Termometría</h4>
            <div class="principle-item">
              <h5>1. Propiedad Termométrica</h5>
              <p>Cualquier propiedad que varíe monotónicamente con la temperatura puede usarse para medirla:</p>
              <ul>
                <li>Expansión térmica de líquidos (mercurio, alcohol)</li>
                <li>Resistencia eléctrica de metales</li>
                <li>Voltaje en termopares</li>
                <li>Radiación electromagnética emitida</li>
              </ul>
            </div>
            
            <div class="principle-item">
              <h5>2. Puntos de Referencia</h5>
              <p>Estados reproducibles que definen la escala:</p>
              <ul>
                <li><strong>Punto triple del agua:</strong> 273.16 K (definición del Kelvin)</li>
                <li><strong>Cero absoluto:</strong> 0 K (inalcanzable prácticamente)</li>
                <li><strong>Puntos fijos secundarios:</strong> Fusión/ebullición de sustancias puras</li>
              </ul>
            </div>
          </div>
          
          <div class="thermometer-types">
            <h4>🌡️ Tipos de Termómetros</h4>
            <div class="thermometer-grid">
              <div class="thermometer">
                <h5>Termómetros de Expansión</h5>
                <p>Basados en dilatación térmica</p>
                <p><strong>Rango:</strong> -200°C a 600°C</p>
              </div>
              <div class="thermometer">
                <h5>Termómetros de Resistencia</h5>
                <p>RTD (Pt100, Pt1000)</p>
                <p><strong>Rango:</strong> -200°C a 850°C</p>
              </div>
              <div class="thermometer">
                <h5>Termopares</h5>
                <p>Efecto Seebeck</p>
                <p><strong>Rango:</strong> -270°C a 2300°C</p>
              </div>
              <div class="thermometer">
                <h5>Pirómetros</h5>
                <p>Radiación térmica</p>
                <p><strong>Rango:</strong> 500°C a 3000°C</p>
              </div>
            </div>
          </div>
        `
      }
    },
    
    keyPoints: [
      'Enunciado del principio cero y su propiedad de transitividad del equilibrio térmico',
      'Definición operacional de temperatura como propiedad que caracteriza el equilibrio térmico',
      'Fundamento teórico de las escalas de temperatura y la termometría',
      'Principios de medición térmica y tipos de termómetros',
      'Importancia como base conceptual para las leyes de la termodinámica'
    ],
    
    learningObjectives: [
      'Enunciar correctamente el principio cero y explicar su significado físico',
      'Comprender cómo el principio cero fundamenta la definición de temperatura',
      'Relacionar el concepto de equilibrio térmico con la medición de temperatura',
      'Identificar diferentes escalas de temperatura y sus relaciones',
      'Aplicar los conceptos en problemas de equilibrio térmico y termometría'
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
  if (!completeTheoryContent[subtopicName]) {
    return false;
  }
  
  console.log(`📚 Developing complete theory for: ${subtopicName}`);
  
  const content = completeTheoryContent[subtopicName];
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
console.log('📖 Iniciando desarrollo completo de teoría...\n');

const thermodynamicsPath = 'src/data/termodinamica';
const developedCount = processDirectory(thermodynamicsPath);

console.log(`\n✅ Desarrollo teórico completado!`);
console.log(`📊 Total de subtemas con teoría completa: ${developedCount}`);
console.log('\n🎯 Los subtemas teóricos ahora incluyen:');
console.log('   • Contenido académico riguroso y detallado');
console.log('   • Secciones teóricas especializadas por tema');
console.log('   • Desarrollo conceptual profundo');
console.log('   • Ejemplos y aplicaciones específicas');
console.log('   • Estructura pedagógica universitaria');