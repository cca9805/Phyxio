import React from 'react';
import { TheorySection, Concept, Important, Formula } from '../../../components/TheoryV2';
import Latex from 'react-latex-next';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Errores e Incertidumbre",
  descripcion: "Tipos de errores, propagación e incertidumbre en medidas",
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const ErroresIncertidumbreTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Por Qué Existen los Errores?">
        <p>
          En física, ninguna medida es perfecta. Siempre existe una incertidumbre asociada a cualquier medición debido a limitaciones de los instrumentos, condiciones ambientales y limitaciones humanas.
        </p>

        <Important>
          <p>
            El error experimental NO es un "error" en el sentido de equivocación, sino una característica inevitable de toda medida. Un buen científico reconoce, cuantifica y reporta estos errores.
          </p>
        </Important>

        <Concept title="Medida vs Valor Real">
          <p>
            Cuando medimos una magnitud, obtenemos un <strong>valor medido</strong> que difiere del <strong>valor real</strong> (generalmente desconocido).
          </p>
          <div className="formula-display">
            <div className="formula-container">
              <div className="formula-expression">
                <Latex>{'$\\text{Valor medido} = \\text{Valor real} + \\text{Error}$'}</Latex>
              </div>
            </div>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Tipos de Errores">
        <Concept title="1. Errores Sistemáticos">
          <p>
            Son errores que se repiten de forma consistente en todas las mediciones. Afectan la <strong>exactitud</strong>.
          </p>
          
          <p><strong>Causas comunes:</strong></p>
          <ul>
            <li><strong>Calibración incorrecta:</strong> Una balanza que marca 5 g cuando debería marcar 0</li>
            <li><strong>Condiciones ambientales:</strong> Medir en un lugar con mucha vibración</li>
            <li><strong>Error del observador:</strong> Siempre leer desde un ángulo incorrecto (error de paralaje)</li>
            <li><strong>Instrumento defectuoso:</strong> Un cronómetro que siempre avanza más rápido</li>
          </ul>

          <p><strong>Características:</strong></p>
          <ul>
            <li>Se repiten consistentemente</li>
            <li>Sesgan las medidas en una dirección</li>
            <li>No se reducen repitiendo la medida</li>
            <li>Se corrigen identificando y eliminando la causa</li>
          </ul>
        </Concept>

        <Concept title="2. Errores Aleatorios">
          <p>
            Son variaciones impredecibles que cambian de una medida a otra. Afectan la <strong>precisión</strong>.
          </p>

          <p><strong>Causas comunes:</strong></p>
          <ul>
            <li><strong>Fluctuaciones ambientales:</strong> Corrientes de aire al medir masa con balanza</li>
            <li><strong>Tiempo de reacción humano:</strong> Variación al pulsar el cronómetro</li>
            <li><strong>Vibraciones aleatorias:</strong> Movimiento imperceptible del laboratorio</li>
            <li><strong>Limitaciones del instrumento:</strong> Resolución finita de lectura</li>
          </ul>

          <p><strong>Características:</strong></p>
          <ul>
            <li>Varían de forma impredecible</li>
            <li>Se distribuyen alrededor del valor real</li>
            <li>Se reducen promediando múltiples medidas</li>
            <li>No pueden eliminarse completamente</li>
          </ul>
        </Concept>

        <Concept title="Exactitud vs Precisión" variant="detailed">
          <div className="detailed-content">
            <p><strong>Exactitud:</strong> Cercanía de la medida al valor real (ausencia de error sistemático)</p>
            <p><strong>Precisión:</strong> Grado de concordancia entre medidas repetidas (ausencia de error aleatorio)</p>

            <p><strong>Analogía con diana de tiro:</strong></p>
            <ul>
              <li><strong>Alta exactitud, alta precisión:</strong> Todos los disparos cerca del centro y agrupados</li>
              <li><strong>Alta exactitud, baja precisión:</strong> Dispersos pero centrados en promedio</li>
              <li><strong>Baja exactitud, alta precisión:</strong> Agrupados pero lejos del centro</li>
              <li><strong>Baja exactitud, baja precisión:</strong> Dispersos y lejos del centro</li>
            </ul>
          </div>
        </Concept>

        <Concept title="3. Errores Groseros">
          <p>
            Son equivocaciones humanas evitables:
          </p>
          <ul>
            <li>Leer mal un instrumento</li>
            <li>Registrar un número incorrectamente</li>
            <li>Usar una fórmula equivocada</li>
            <li>Configurar mal el aparato</li>
          </ul>
          <p>
            Estos errores <strong>NO son aceptables</strong> y deben evitarse con cuidado y atención. Las medidas con errores groseros se descartan.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Error Absoluto y Error Relativo">
        <Concept title="Error Absoluto">
          <p>
            Es la diferencia entre el valor medido y el valor real (o el mejor estimado).
          </p>
          <Formula
            expression={String.raw`\Delta x = |x_{\text{medido}} - x_{\text{real}}|`}
            calculatorId="error-absoluto"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>x_medido: Valor obtenido</li>
            <li>x_real: Valor de referencia</li>
            <li>Δx: Error absoluto</li>
          </ul>
          <p>Donde:</p>
          <ul>
            <li>Δx: Error absoluto (mismas unidades que la magnitud)</li>
            <li>x_medido: Valor obtenido en la medición</li>
            <li>x_real: Valor real o de referencia</li>
          </ul>
          <p>Se expresa en las mismas unidades que la magnitud medida.</p>

          <p>Ejemplo: Si medimos 9.8 m/s² para g y el valor real es 9.81 m/s²:</p>
          <div className="formula-display">
            <div className="formula-container">
              <div className="formula-expression">
                <Latex>{'$\\Delta g = |9.8 - 9.81| = 0.01 \\text{ m/s}^2$'}</Latex>
              </div>
            </div>
          </div>
        </Concept>

        <Concept title="Error Relativo">
          <p>
            Es el cociente entre el error absoluto y el valor real (o medido). Se expresa como fracción o porcentaje.
          </p>
          <Formula
            expression={String.raw`\epsilon = \frac{\Delta x}{x_{\text{real}}}`}
            calculatorId="error-relativo"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Error relativo porcentual", expression: String.raw`\epsilon_{\%} = \frac{\Delta x}{x_{\text{real}}} \times 100\%` }
            ]}
          />
          <p>Donde:</p>
          <ul>
            <li>Δx: Error absoluto</li>
            <li>x_real: Valor real</li>
            <li>ε: Error relativo</li>
          </ul>
          <p>Donde:</p>
          <ul>
            <li>ε: Error relativo (adimensional)</li>
            <li>Δx: Error absoluto</li>
            <li>x_real: Valor real o de referencia</li>
          </ul>

          <p>El error relativo porcentual se calcula multiplicando por 100%:</p>
          <Formula
            expression={String.raw`\epsilon_{\%} = \frac{\Delta x}{x_{\text{real}}} \times 100\%`}
            calculatorId="error-relativo-porcentual"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>ε%: Error relativo en porcentaje</li>
            <li>Δx: Error absoluto</li>
            <li>x_real: Valor de referencia</li>
          </ul>
        </Concept>

        <Concept title="¿Cuándo Usar Cada Uno?" variant="detailed">
          <div className="detailed-content">
            <p><strong>Error Absoluto:</strong></p>
            <ul>
              <li>Útil para saber la magnitud del error en unidades reales</li>
              <li>Ejemplo: Un error de 1 cm puede ser grande o pequeño según el contexto</li>
            </ul>

            <p><strong>Error Relativo:</strong></p>
            <ul>
              <li>Permite comparar errores en medidas de diferente magnitud</li>
              <li>Es adimensional (o se expresa en %)</li>
              <li>Ejemplo: Un error de 1 cm al medir 10 cm (10%) es mucho peor que 1 cm al medir 100 m (0.01%)</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Incertidumbre en Medidas Directas">
        <p>
          La <strong>incertidumbre</strong> es una estimación del rango en el que probablemente se encuentra el valor real.
        </p>

        <Concept title="Estimación de la Incertidumbre">
          <p>
            Para una medida individual, la incertidumbre suele ser:
          </p>
          <ul>
            <li><strong>Digital:</strong> La mitad de la última cifra mostrada</li>
            <li><strong>Analógica:</strong> La mitad de la división más pequeña</li>
          </ul>

          <p><strong>Ejemplo 1:</strong> Regla con divisiones de 1 mm</p>
          <p>Medida: 15.3 cm ± 0.05 cm (incertidumbre = mitad de 1 mm)</p>

          <p><strong>Ejemplo 2:</strong> Cronómetro digital que muestra centésimas</p>
          <p>Medida: 3.47 s ± 0.005 s</p>
        </Concept>

        <Concept title="Expresión de Resultados">
          <p>
            Un resultado experimental siempre debe incluir:
          </p>
          <div className="formula-display">
            <div className="formula-container">
              <div className="formula-expression">
                <Latex>{'$x = x_{\\text{medido}} \\pm \\Delta x$'}</Latex>
              </div>
            </div>
          </div>
          <p>Ejemplo: L = 25.4 ± 0.1 cm</p>
          <p>
            Esto significa: "El valor real de L está probablemente entre 25.3 cm y 25.5 cm"
          </p>
        </Concept>

        <Concept title="Medidas Repetidas">
          <p>
            Cuando hacemos múltiples medidas de la misma magnitud:
          </p>
          <p>1. Valor medio:</p>
          <Formula
            expression={String.raw`\bar{x} = \frac{x_1 + x_2 + ... + x_n}{n}`}
            calculatorId="valor-medio"
            definitions={definitions}
            exercises={exercises}
          />

          <p>2. Desviación estándar (dispersión):</p>
          <Formula
            expression={String.raw`\sigma = \sqrt{\frac{\sum_{i=1}^{n}(x_i - \bar{x})^2}{n-1}}`}
            calculatorId="desviacion-estandar"
            definitions={definitions}
            exercises={exercises}
          />

          <p>3. Incertidumbre del promedio:</p>
          <Formula
            expression={String.raw`\Delta \bar{x} = \frac{\sigma}{\sqrt{n}}`}
            calculatorId="incertidumbre-promedio"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>σ: Desviación estándar</li>
            <li>n: Número de medidas</li>
            <li>Δx̄: Incertidumbre del promedio</li>
          </ul>

          <p>Ejemplo: Medidas de un tiempo: 2.3 s, 2.5 s, 2.4 s, 2.6 s, 2.2 s</p>
          <ul>
            <li>Media: (2.3+2.5+2.4+2.6+2.2)/5 = 2.4 s</li>
            <li>Desviación estándar: σ ≈ 0.16 s</li>
            <li>Incertidumbre: Δt = 0.16/√5 ≈ 0.07 s</li>
            <li>Resultado: t = 2.4 ± 0.07 s</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Propagación de Errores">
        <p>
          Cuando calculamos una magnitud a partir de otras medidas, el error se <strong>propaga</strong>. Necesitamos calcular cómo las incertidumbres de las medidas directas afectan al resultado.
        </p>

        <Important>
          <p>
            Las incertidumbres NO se cancelan al hacer cálculos; generalmente se acumulan. Por eso es crucial medidas precisas en magnitudes que luego se usan en cálculos.
          </p>
        </Important>

        <Concept title="Reglas de Propagación" variant="detailed">
          <div className="detailed-content">
            <p>1. Suma y Resta:</p>
            <p>Si z = x + y o z = x - y, entonces:</p>
            <Formula
              expression={String.raw`\Delta z = \sqrt{(\Delta x)^2 + (\Delta y)^2}`}
              calculatorId="propagacion-suma-resta"
              definitions={definitions}
              exercises={exercises}
            />
            <p>Donde:</p>
            <ul>
              <li>Δx, Δy: Incertidumbres de x e y</li>
              <li>Δz: Incertidumbre resultante</li>
            </ul>
            <p>Donde:</p>
            <ul>
              <li>Δz: Incertidumbre del resultado</li>
              <li>Δx, Δy: Incertidumbres de las medidas</li>
            </ul>

            <p>Ejemplo: L = L₁ + L₂ donde L₁ = 10.0 ± 0.1 cm y L₂ = 5.0 ± 0.1 cm</p>
            <p>L = 15.0 cm, ΔL = √[(0.1)² + (0.1)²] = √0.02 ≈ 0.14 cm</p>
            <p>Resultado: L = 15.0 ± 0.14 cm</p>

            <p>2. Multiplicación y División:</p>
            <p>Si z = x · y o z = x / y, usamos errores relativos:</p>
            <Formula
              expression={String.raw`\frac{\Delta z}{z} = \sqrt{\left(\frac{\Delta x}{x}\right)^2 + \left(\frac{\Delta y}{y}\right)^2}`}
              calculatorId="propagacion-multiplicacion-division"
              definitions={definitions}
              exercises={exercises}
            />
            <p>Donde:</p>
            <ul>
              <li>x, y: Valores de las magnitudes</li>
              <li>Δx, Δy: Incertidumbres</li>
              <li>Δz/z: Error relativo de z</li>
            </ul>
            <p>Donde:</p>
            <ul>
              <li>Δz/z: Error relativo del resultado</li>
              <li>Δx/x, Δy/y: Errores relativos de las medidas</li>
            </ul>

            <p>Ejemplo: A = L · W donde L = 10.0 ± 0.2 cm y W = 5.0 ± 0.1 cm</p>
            <p>A = 50.0 cm², ΔA/A = √[(0.2/10.0)² + (0.1/5.0)²] ≈ 0.028</p>
            <p>ΔA = 0.028 × 50.0 = 1.4 cm²</p>
            <p>Resultado: A = 50.0 ± 1.4 cm²</p>

            <p>3. Potencias:</p>
            <p>Si z = xⁿ, entonces:</p>
            <Formula
              expression={String.raw`\frac{\Delta z}{z} = |n| \frac{\Delta x}{x}`}
              calculatorId="propagacion-potencias"
              definitions={definitions}
              exercises={exercises}
            />
            <p>Donde:</p>
            <ul>
              <li>n: Exponente</li>
              <li>x: Magnitud base</li>
              <li>Δx: Incertidumbre de x</li>
              <li>Δz/z: Error relativo de z</li>
            </ul>
            <p>Donde:</p>
            <ul>
              <li>n: Exponente</li>
              <li>Δz/z: Error relativo del resultado</li>
              <li>Δx/x: Error relativo de la medida</li>
            </ul>

            <p>Ejemplo: V = L³ donde L = 2.0 ± 0.1 cm</p>
            <p>V = 8.0 cm³, ΔV/V = 3 × (0.1/2.0) = 0.15</p>
            <p>ΔV = 0.15 × 8.0 = 1.2 cm³</p>
            <p>Resultado: V = 8.0 ± 1.2 cm³</p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Representación Gráfica de Errores">
        <Concept title="Barras de Error">
          <p>
            En gráficas, las incertidumbres se representan con <strong>barras de error</strong> que muestran el rango de valores posibles para cada punto.
          </p>

          <ul>
            <li><strong>Barra vertical:</strong> Incertidumbre en el eje Y</li>
            <li><strong>Barra horizontal:</strong> Incertidumbre en el eje X</li>
            <li>Longitud de la barra = 2 × incertidumbre (±Δx en cada dirección)</li>
          </ul>
        </Concept>

        <Concept title="Interpretación">
          <p>
            Una línea de mejor ajuste debe pasar dentro de las barras de error de la mayoría de los puntos. Si muchos puntos quedan fuera, puede haber:
          </p>
          <ul>
            <li>Errores sistemáticos no considerados</li>
            <li>Modelo inadecuado</li>
            <li>Incertidumbres subestimadas</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Consejos Prácticos">
        <Concept title="Para Minimizar Errores">
          <ul>
            <li><strong>Calibrar instrumentos</strong> antes de cada serie de medidas</li>
            <li><strong>Repetir medidas</strong> múltiples veces y promediar</li>
            <li><strong>Controlar condiciones ambientales</strong> (temperatura, humedad, vibraciones)</li>
            <li><strong>Usar el instrumento más preciso</strong> disponible para la tarea</li>
            <li><strong>Evitar error de paralaje</strong> leyendo perpendicular a la escala</li>
            <li><strong>Entrenar habilidades</strong> (tiempo de reacción, lectura) para reducir variabilidad</li>
          </ul>
        </Concept>

        <Concept title="Para Reportar Correctamente">
          <ul>
            <li>Siempre incluir la incertidumbre: x = 12.5 ± 0.2 cm (NO solo 12.5 cm)</li>
            <li>La incertidumbre debe tener 1-2 cifras significativas</li>
            <li>La medida se redondea al mismo orden decimal que la incertidumbre</li>
            <li>Explicar fuentes de error en informes de laboratorio</li>
            <li>Distinguir entre errores aleatorios y sistemáticos</li>
          </ul>
        </Concept>

        <Concept title="Ejemplos de Reportes Correctos">
          <ul>
            <li>✅ t = 2.45 ± 0.03 s (correcto)</li>
            <li>❌ t = 2.453826 ± 0.03 s (demasiadas cifras en la medida)</li>
            <li>❌ t = 2.5 ± 0.028361 s (demasiadas cifras en la incertidumbre)</li>
            <li>✅ m = 150 ± 5 g (correcto, redondeo apropiado)</li>
            <li>❌ m = 150 g (falta incertidumbre)</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>

        <div className="theory-subsection">
          <h3>Ingeniería y Construcción</h3>
          <p>
            El manejo correcto de errores e incertidumbres es crítico en ingeniería:
          </p>
          <ul>
            <li>Diseño de estructuras: Los márgenes de seguridad consideran incertidumbres en materiales y cargas</li>
            <li>Control de calidad: Tolerancias en manufactura especifican rangos aceptables de error</li>
            <li>Mediciones topográficas: Errores acumulados pueden causar problemas en grandes proyectos</li>
            <li>Calibración de instrumentos: Requiere conocimiento de propagación de errores</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Medicina y Farmacia</h3>
          <p>
            Las incertidumbres son vitales en medicina:
          </p>
          <ul>
            <li>Dosificación de medicamentos: Errores pueden ser fatales, se requieren márgenes de seguridad</li>
            <li>Mediciones médicas: Presión arterial, temperatura, análisis de sangre tienen rangos de incertidumbre</li>
            <li>Equipos médicos: Deben calibrarse regularmente para minimizar errores sistemáticos</li>
            <li>Estudios clínicos: Análisis estadístico de errores determina significancia de resultados</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Investigación Científica</h3>
          <p>
            Toda investigación científica requiere manejo adecuado de errores:
          </p>
          <ul>
            <li>Publicaciones científicas: Deben reportar incertidumbres en todos los resultados</li>
            <li>Reproducibilidad: Otros científicos deben poder verificar resultados dentro de márgenes de error</li>
            <li>Diseño experimental: Minimizar errores sistemáticos y aleatorios</li>
            <li>Análisis de datos: Propagación de errores afecta conclusiones</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Tecnología y Electrónica</h3>
          <p>
            Los errores son fundamentales en electrónica:
          </p>
          <ul>
            <li>Precisión de componentes: Resistencias, condensadores tienen tolerancias especificadas</li>
            <li>Mediciones eléctricas: Multímetros tienen rangos de precisión</li>
            <li>Calibración de sensores: Requiere conocimiento de errores sistemáticos</li>
            <li>Control de calidad: Productos deben cumplir especificaciones dentro de márgenes de error</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Navegación y GPS</h3>
          <p>
            Las incertidumbres son críticas en navegación:
          </p>
          <ul>
            <li>Precisión GPS: Tiene incertidumbre típica de varios metros</li>
            <li>Navegación aérea: Errores acumulados pueden causar desviaciones peligrosas</li>
            <li>Cartografía: Errores en mapas se propagan en cálculos de distancias</li>
            <li>Mediciones astronómicas: Requieren manejo cuidadoso de errores para precisión</li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El desarrollo de la teoría de errores
        </h2>

        <div className="theory-subsection">
          <h3>Antigüedad: Errores sin Cuantificación</h3>
          <p>
            En la antigüedad, los científicos reconocían que las medidas tenían errores, pero no los cuantificaban sistemáticamente. 
            Se confiaba en la experiencia del observador y en promedios simples.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Siglo XVIII: Primeros Estudios Sistemáticos</h3>
          <p>
            Astrónomos como Tobias Mayer (1723-1762) comenzaron a estudiar errores sistemáticamente. Reconocieron la diferencia entre 
            errores sistemáticos y aleatorios, y desarrollaron métodos para minimizarlos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Carl Friedrich Gauss: Método de Mínimos Cuadrados (1777-1855)</h3>
          <p>
            Gauss desarrolló el método de mínimos cuadrados para ajustar datos experimentales, reconociendo que los errores aleatorios 
            siguen una distribución normal. Este método sigue siendo fundamental en análisis de datos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Siglo XIX: Formalización de la Estadística</h3>
          <p>
            Matemáticos como Pierre-Simon Laplace (1749-1827) y Adrien-Marie Legendre (1752-1833) formalizaron conceptos de 
            probabilidad y error. Se desarrollaron métodos para calcular desviaciones estándar y propagación de errores.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Siglo XX: Estándares Internacionales</h3>
          <p>
            En el siglo XX se establecieron estándares internacionales para reportar incertidumbres:
          </p>
          <ul>
            <li>Convenciones sobre cifras significativas</li>
            <li>Métodos estándar de propagación de errores</li>
            <li>Guías para reportar incertidumbres en publicaciones científicas</li>
            <li>Desarrollo de instrumentos más precisos reduciendo errores sistemáticos</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Era Moderna: Guía de Incertidumbre de Medida (GUM)</h3>
          <p>
            En 1993, la Oficina Internacional de Pesas y Medidas (BIPM) publicó la "Guía para la Expresión de la Incertidumbre en 
            la Medida" (GUM), estableciendo estándares internacionales para cuantificar y reportar incertidumbres. Esta guía es 
            seguida por científicos de todo el mundo.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>El Error que Llevó a Descubrimientos</h3>
          <p>
            A veces, los errores llevan a descubrimientos importantes. En 1895, Wilhelm Röntgen descubrió los rayos X por accidente 
            mientras investigaba rayos catódicos. Un error en su experimento (dejó una placa fotográfica cerca) reveló un fenómeno 
            completamente nuevo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Kilogramo Prototipo que Perdía Peso</h3>
          <p>
            El kilogramo se definía por un prototipo de platino-iridio guardado en París. Se descubrió que este prototipo perdía 
            aproximadamente 50 microgramos por siglo debido a la pérdida de átomos. Este error sistemático motivó la redefinición 
            de 2019, donde el kilogramo ahora se basa en la constante de Planck.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Errores en Mediciones Astronómicas</h3>
          <p>
            Los astrónomos históricamente tuvieron que lidiar con errores grandes. Las primeras mediciones de distancias estelares 
            tenían incertidumbres del 50% o más. Aún hoy, algunas distancias cósmicas tienen incertidumbres significativas, pero 
            los métodos han mejorado enormemente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Experimento de Michelson-Morley</h3>
          <p>
            En 1887, Michelson y Morley intentaron medir la velocidad de la Tierra respecto al "éter". Su experimento no encontró 
            evidencia del éter, lo que inicialmente se consideró un "fracaso". Sin embargo, este resultado (con su incertidumbre 
            cuidadosamente reportada) fue crucial para el desarrollo de la teoría de la relatividad de Einstein.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Errores que Salvaron Vidas</h3>
          <p>
            En ingeniería, los márgenes de seguridad consideran errores e incertidumbres. Por ejemplo, un puente diseñado para 
            soportar 100 toneladas puede construirse para soportar 150 toneladas, considerando incertidumbres en materiales, 
            cargas y condiciones ambientales. Estos "márgenes de error" salvan vidas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>La Precisión de los Relojes Atómicos</h3>
          <p>
            Los relojes atómicos modernos son tan precisos que tienen errores de menos de 1 segundo en 100 millones de años. 
            Esta precisión extrema requiere manejo cuidadoso de todas las fuentes de error, incluyendo efectos relativistas 
            y condiciones ambientales.
          </p>
        </div>
      </div>

      <div className="theory-section-highlight">
        <h2>📝 Resumen</h2>
        <p>
          En física, ninguna medida es perfecta. Siempre existe una incertidumbre asociada a cualquier medición debido a 
          limitaciones de instrumentos, condiciones ambientales y limitaciones humanas. El error experimental no es una equivocación, 
          sino una característica inevitable de toda medida.
        </p>
        <p>
          Existen tres tipos de errores: sistemáticos (se repiten consistentemente, afectan la exactitud), aleatorios (varían 
          impredeciblemente, afectan la precisión) y groseros (equivocaciones evitables). La exactitud es la cercanía al valor real, 
          mientras que la precisión es la concordancia entre medidas repetidas.
        </p>
        <p>
          El error absoluto es la diferencia entre el valor medido y el real, mientras que el error relativo es el cociente entre 
          el error absoluto y el valor real. Cuando calculamos magnitudes a partir de otras medidas, los errores se propagan según 
          reglas específicas: suma/resta (raíz cuadrada de suma de cuadrados), multiplicación/división (errores relativos), y 
          potencias (error relativo multiplicado por el exponente).
        </p>
        <p>
          Un resultado experimental siempre debe incluir la incertidumbre: x = x_medido ± Δx. La incertidumbre debe tener 1-2 cifras 
          significativas, y la medida se redondea al mismo orden decimal. El manejo correcto de errores es fundamental en ingeniería, 
          medicina, investigación científica y tecnología. La teoría de errores se desarrolló desde el siglo XVIII, con contribuciones 
          de Gauss, Laplace y otros, culminando en la Guía de Incertidumbre de Medida (GUM) de 1993.
        </p>
      </div>
    </>
  );
};

export default ErroresIncertidumbreTheory;
