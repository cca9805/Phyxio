import { TheorySection, Concept, Important, Formula } from '../../../components/TheoryV2';
import Latex from 'react-latex-next';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Análisis de Datos",
  descripcion: "Organización, representación gráfica y análisis estadístico de datos experimentales",
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const AnalisisDatosTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Importancia del Análisis de Datos">
        <p>
          El análisis de datos transforma números crudos en información significativa. Es el puente entre la experimentación y las conclusiones científicas.
        </p>

        <Concept title="Objetivos del Análisis">
          <ul>
            <li>Organizar: Presentar datos de forma clara y sistemática</li>
            <li>Visualizar: Identificar patrones, tendencias y anomalías</li>
            <li>Cuantificar: Extraer relaciones matemáticas</li>
            <li>Validar: Verificar hipótesis y detectar errores</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Organización de Datos en Tablas">
        <p>
          Las tablas son la primera forma de organizar datos experimentales.
        </p>

        <Concept title="Elementos de una Buena Tabla">
          <ul>
            <li>Título descriptivo: "Medidas de período vs longitud del péndulo"</li>
            <li>Encabezados claros: Nombre de la magnitud y unidades</li>
            <li>Columnas lógicas: Variable independiente a la izquierda, dependiente a la derecha</li>
            <li>Unidades explícitas: En el encabezado (no repetir en cada celda)</li>
            <li>Cifras significativas consistentes: Mismo número de decimales en cada columna</li>
          </ul>
        </Concept>

        <Concept title="Ejemplo de Tabla Correcta" variant="detailed">
          <div className="detailed-content">
            <p>Tabla 1: Relación entre longitud y período de un péndulo simple</p>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #ddd', backgroundColor: '#f5f5f5' }}>
                  <th style={{ padding: '10px', textAlign: 'center' }}>Longitud L (cm)</th>
                  <th style={{ padding: '10px', textAlign: 'center' }}>Período T (s)</th>
                  <th style={{ padding: '10px', textAlign: 'center' }}>T² (s²)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '8px', textAlign: 'center' }}>20.0</td>
                  <td style={{ padding: '8px', textAlign: 'center' }}>0.90</td>
                  <td style={{ padding: '8px', textAlign: 'center' }}>0.81</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', textAlign: 'center' }}>40.0</td>
                  <td style={{ padding: '8px', textAlign: 'center' }}>1.27</td>
                  <td style={{ padding: '8px', textAlign: 'center' }}>1.61</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', textAlign: 'center' }}>60.0</td>
                  <td style={{ padding: '8px', textAlign: 'center' }}>1.56</td>
                  <td style={{ padding: '8px', textAlign: 'center' }}>2.43</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', textAlign: 'center' }}>80.0</td>
                  <td style={{ padding: '8px', textAlign: 'center' }}>1.80</td>
                  <td style={{ padding: '8px', textAlign: 'center' }}>3.24</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', textAlign: 'center' }}>100.0</td>
                  <td style={{ padding: '8px', textAlign: 'center' }}>2.01</td>
                  <td style={{ padding: '8px', textAlign: 'center' }}>4.04</td>
                </tr>
              </tbody>
            </table>
            <p style={{ marginTop: '10px', fontSize: '0.9em', fontStyle: 'italic' }}>
              Nota: Se incluye una columna calculada (T²) para facilitar el análisis posterior.
            </p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Representación Gráfica">
        <p>
          Las gráficas permiten visualizar relaciones entre variables que no son evidentes en tablas.
        </p>

        <Important>
          <p>
            "Una imagen vale más que mil palabras". Una buena gráfica puede revelar tendencias, outliers y relaciones funcionales instantáneamente.
          </p>
        </Important>

        <Concept title="Tipos de Gráficas en Física">
          <p>1. Gráfica de Dispersión (Scatter Plot):</p>
          <ul>
            <li>Puntos individuales sin conectar</li>
            <li>Muestra la distribución de datos experimentales</li>
            <li>Ideal para identificar correlaciones</li>
          </ul>

          <p>2. Gráfica de Línea:</p>
          <ul>
            <li>Puntos conectados por líneas</li>
            <li>Útil para datos secuenciales (tiempo vs magnitud)</li>
            <li>Muestra cambios continuos</li>
          </ul>

          <p>3. Línea de Mejor Ajuste:</p>
          <ul>
            <li>Línea recta o curva que mejor representa la tendencia</li>
            <li>No necesariamente pasa por todos los puntos</li>
            <li>Minimiza distancias a los puntos experimentales</li>
          </ul>

          <p>4. Barras e Histogramas:</p>
          <ul>
            <li>Comparar magnitudes discretas</li>
            <li>Distribución de frecuencias</li>
          </ul>
        </Concept>

        <Concept title="Elementos de una Gráfica Correcta" variant="detailed">
          <div className="detailed-content">
            <p>Obligatorios:</p>
            <ul>
              <li>Título descriptivo: "Período del péndulo en función de la longitud"
                <ul>
                  <li>Eje X: Variable independiente (la que controlamos)</li>
                  <li>Eje Y: Variable dependiente (la que medimos)</li>
                </ul>
              </li>
              <li>Ejes etiquetados: Nombre de la magnitud y unidades</li>
              <li>Escala apropiada: 
                <ul>
                  <li>Usar la mayor parte del papel/pantalla</li>
                  <li>Escalas lineales (salvo casos especiales)</li>
                  <li>Divisiones regulares fáciles de leer (1, 2, 5, 10...)</li>
                </ul>
              </li>
              <li>Puntos claramente marcados: Círculos, cruces o puntos visibles</li>
              <li>Leyenda: Si hay múltiples series de datos</li>
            </ul>

            <p>Recomendados:</p>
            <ul>
              <li>Barras de error (si hay incertidumbres significativas)</li>
              <li>Línea de mejor ajuste con ecuación</li>
              <li>Cuadrícula suave (ayuda a leer valores)</li>
            </ul>

            <p>Errores comunes a evitar:</p>
            <ul>
              <li>❌ Faltan etiquetas en los ejes</li>
              <li>❌ No se indican las unidades</li>
              <li>❌ Escala demasiado comprimida o expandida</li>
              <li>❌ Unir puntos zigzagueando (excepto si son datos temporales secuenciales)</li>
              <li>❌ Gráfica sin título</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Identificación de Tendencias">
        <Concept title="Relaciones Lineales">
          <p>
            La relación más simple: y = mx + b
          </p>
          <ul>
            <li>m: Pendiente (tasa de cambio de y respecto a x)</li>
            <li>b: Ordenada al origen (valor de y cuando x = 0)</li>
          </ul>

          <p>Cómo identificarla:</p>
          <p>Los puntos se distribuyen aproximadamente en línea recta.</p>

          <p>Ejemplo: Velocidad constante → posición vs tiempo es lineal</p>
          <div className="formula-display">
            <div className="formula-container">
              <div className="formula-expression">
                <Latex>{'$x = v \\cdot t + x_0$'}</Latex>
              </div>
            </div>
          </div>
        </Concept>

        <Concept title="Relaciones Cuadráticas">
          <p>
            y = ax² + bx + c
          </p>
          <p>Los puntos forman una parábola.</p>

          <p>Ejemplo: Caída libre → posición vs tiempo al cuadrado</p>
          <div className="formula-display">
            <div className="formula-container">
              <div className="formula-expression">
                <Latex>{'$y = \\frac{1}{2}g t^2 + v_0 t + y_0$'}</Latex>
              </div>
            </div>
          </div>

          <p>Truco para linealizar: Graficar y vs t² en lugar de y vs t → obtienes una recta</p>
        </Concept>

        <Concept title="Relaciones Inversas">
          <p>
            y = k/x o y ∝ 1/x
          </p>
          <p>Cuando x aumenta, y disminuye (hipérbola).</p>

          <p>Ejemplo: Ley de Boyle (gases) → presión vs volumen</p>
          <div className="formula-display">
            <div className="formula-container">
              <div className="formula-expression">
                <Latex>{'$P = \\frac{k}{V}$'}</Latex>
              </div>
            </div>
          </div>

          <p>Truco para linealizar: Graficar P vs 1/V → recta</p>
        </Concept>

        <Concept title="Relaciones Potenciales">
          <p>
            y = k · xⁿ
          </p>

          <p>Ejemplo: Período del péndulo</p>
          <div className="formula-display">
            <div className="formula-container">
              <div className="formula-expression">
                <Latex>{'$T = 2\\pi \\sqrt{\\frac{L}{g}}$'}</Latex>
              </div>
            </div>
          </div>
          <p>Equivalente a: T² ∝ L (lineal si graficas T² vs L)</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Regresión Lineal">
        <p>
          La regresión lineal (ajuste por mínimos cuadrados) calcula la mejor recta que pasa "cerca" de los puntos experimentales.
        </p>

        <Concept title="Método de Mínimos Cuadrados">
          <p>
            Para n pares de datos (x₁, y₁), (x₂, y₂), ..., (xₙ, yₙ), la recta y = mx + b se calcula minimizando la suma de los cuadrados de las desviaciones verticales.
          </p>

          <p>Fórmulas:</p>
          <p>Pendiente:</p>
          <Formula
            expression={String.raw`m = \frac{n\sum x_i y_i - \sum x_i \sum y_i}{n\sum x_i^2 - (\sum x_i)^2}`}
            calculatorId="pendiente-regresion"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>n: Número de puntos</li>
            <li>x_i, y_i: Valores individuales</li>
            <li>m: Pendiente de la recta</li>
          </ul>
          
          <p>Ordenada al origen:</p>
          <Formula
            expression={String.raw`b = \frac{\sum y_i - m \sum x_i}{n}`}
            calculatorId="ordenada-regresion"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>n: Número de puntos</li>
            <li>x_i, y_i: Valores individuales</li>
            <li>m: Pendiente ya calculada</li>
            <li>b: Intersección con el eje y</li>
          </ul>
          
          <p>Donde:</p>
          <ul>
            <li>m: Pendiente de la recta</li>
            <li>b: Ordenada al origen</li>
            <li>n: Número de puntos de datos</li>
            <li>Σxᵢ, Σyᵢ: Suma de valores de x e y</li>
            <li>Σxᵢyᵢ: Suma de productos x×y</li>
            <li>Σxᵢ²: Suma de cuadrados de x</li>
          </ul>
        </Concept>

        <Concept title="Ejemplo Completo de Regresión" variant="detailed">
          <div className="detailed-content">
            <p>Datos: Posición de un móvil con velocidad constante</p>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #ddd' }}>
                  <th style={{ padding: '8px', textAlign: 'center' }}>t (s)</th>
                  <th style={{ padding: '8px', textAlign: 'center' }}>x (m)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{ padding: '6px', textAlign: 'center' }}>1</td><td style={{ padding: '6px', textAlign: 'center' }}>3.2</td></tr>
                <tr><td style={{ padding: '6px', textAlign: 'center' }}>2</td><td style={{ padding: '6px', textAlign: 'center' }}>5.9</td></tr>
                <tr><td style={{ padding: '6px', textAlign: 'center' }}>3</td><td style={{ padding: '6px', textAlign: 'center' }}>8.7</td></tr>
                <tr><td style={{ padding: '6px', textAlign: 'center' }}>4</td><td style={{ padding: '6px', textAlign: 'center' }}>11.2</td></tr>
                <tr><td style={{ padding: '6px', textAlign: 'center' }}>5</td><td style={{ padding: '6px', textAlign: 'center' }}>13.8</td></tr>
              </tbody>
            </table>

            <p>Cálculos auxiliares:</p>
            <ul>
              <li>n = 5</li>
              <li>Σxᵢ = 1+2+3+4+5 = 15</li>
              <li>Σyᵢ = 3.2+5.9+8.7+11.2+13.8 = 42.8</li>
              <li>Σxᵢyᵢ = 1(3.2)+2(5.9)+3(8.7)+4(11.2)+5(13.8) = 143.9</li>
              <li>Σxᵢ² = 1+4+9+16+25 = 55</li>
            </ul>

            <p>Pendiente:</p>
            <Formula
              expression={String.raw`m = \frac{5(143.9) - 15(42.8)}{5(55) - 15^2}`}
              calculatorId="pendiente-regresion"
              definitions={definitions}
              exercises={exercises}
            />

            <p>Ordenada al origen:</p>
            <Formula
              expression={String.raw`b = \frac{42.8 - 2.65(15)}{5}`}
              calculatorId="ordenada-regresion"
              definitions={definitions}
              exercises={exercises}
            />

            <p>Ecuación resultante:</p>
            <div className="formula-display">
              <div className="formula-container">
                <div className="formula-expression">
                  <Latex>{'$x = 2.65t + 0.61$'}</Latex>
                </div>
              </div>
            </div>

            <p>Interpretación física:</p>
            <ul>
              <li>Pendiente m = 2.65 m/s → velocidad del móvil</li>
              <li>Ordenada b = 0.61 m → posición inicial</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Coeficiente de Correlación (r)">
          <p>
            Mide qué tan bien se ajusta la recta a los datos. Valor entre -1 y 1.
          </p>
          <ul>
            <li>r = 1: Correlación positiva perfecta (todos los puntos en la recta, pendiente positiva)</li>
            <li>r = -1: Correlación negativa perfecta (todos los puntos en la recta, pendiente negativa)</li>
            <li>r = 0: Sin correlación lineal</li>
            <li>|r| {'>'} 0.9: Correlación fuerte</li>
            <li>|r| entre 0.7-0.9: Correlación moderada</li>
            <li>|r| {'<'} 0.7: Correlación débil</li>
          </ul>

          <Important>
            <p>
              Correlación NO implica causalidad. Dos variables pueden estar correlacionadas sin que una cause la otra.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Detección de Outliers (Valores Atípicos)">
        <Concept title="¿Qué es un Outlier?">
          <p>
            Un outlier es un dato que se desvía significativamente del patrón general. Puede deberse a:
          </p>
          <ul>
            <li>Error de medición o registro</li>
            <li>Condición experimental anómala</li>
            <li>Fenómeno físico real (menos común)</li>
          </ul>
        </Concept>

        <Concept title="Identificación">
          <ul>
            <li>Visual: Punto muy alejado de la tendencia en la gráfica</li>
            <li>Criterio de desviación: Más de 2-3 desviaciones estándar del promedio</li>
            <li>Gráficas de residuos: Diferencia entre valor medido y predicho</li>
          </ul>
        </Concept>

        <Concept title="¿Qué Hacer con Outliers?">
          <ul>
            <li>Investigar: Revisar notas de laboratorio, verificar cálculos</li>
            <li>Repetir medida: Si es posible, volver a medir ese punto</li>
            <li>Reportar: Mencionar el outlier y justificar su inclusión o exclusión</li>
            <li>NO eliminar automáticamente: Puede contener información valiosa</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Uso de Hojas de Cálculo y Software">
        <p>
          Herramientas como Excel, Google Sheets, o software científico (Origin, Python) facilitan el análisis.
        </p>

        <Concept title="Funcionalidades Útiles">
          <ul>
            <li>Fórmulas automáticas: PROMEDIO(), DESVEST(), etc.</li>
            <li>Gráficas integradas: Scatter plots, líneas de tendencia</li>
            <li>Regresión automática: Añadir línea de mejor ajuste con ecuación</li>
            <li>Barras de error: Visualización automática de incertidumbres</li>
            <li>Copiar/Pegar: Reutilizar datos entre aplicaciones</li>
          </ul>
        </Concept>

        <Concept title="Ventajas">
          <ul>
            <li>Reducción de errores de cálculo</li>
            <li>Rapidez en análisis de grandes conjuntos de datos</li>
            <li>Gráficas profesionales y personalizables</li>
            <li>Facilita exploración de diferentes modelos</li>
          </ul>
        </Concept>

        <Important>
          <p>
            Aunque las herramientas digitales son poderosas, es fundamental entender los conceptos subyacentes. No uses funciones "caja negra" sin saber qué hacen.
          </p>
        </Important>
      </TheorySection>

      <TheorySection title="Consejos Prácticos">
        <Concept title="Organización de Datos">
          <ul>
            <li>Registra datos inmediatamente después de medirlos</li>
            <li>Anota unidades siempre</li>
            <li>Guarda datos crudos (no solo promedios)</li>
            <li>Incluye fecha y condiciones experimentales</li>
            <li>Haz copias de seguridad</li>
          </ul>
        </Concept>

        <Concept title="Análisis Gráfico">
          <ul>
            <li>Haz gráficas a mano antes de usar software (desarrolla intuición)</li>
            <li>Prueba diferentes tipos de gráficas si la relación no es clara</li>
            <li>Si la relación no es lineal, intenta linealizaciones (logaritmos, potencias)</li>
            <li>Compara tus resultados con teoría o valores de referencia</li>
          </ul>
        </Concept>

        <Concept title="Interpretación">
          <ul>
            <li>Una buena correlación no prueba causalidad</li>
            <li>Considera márgenes de error al hacer conclusiones</li>
            <li>Sé crítico: ¿los resultados tienen sentido físicamente?</li>
            <li>Compara con predicciones teóricas</li>
            <li>Identifica fuentes de discrepancia</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>

        <div className="theory-subsection">
          <h3>Investigación Científica</h3>
          <p>
            El análisis de datos es fundamental en toda investigación:
          </p>
          <ul>
            <li>Análisis de experimentos: Identificar relaciones entre variables</li>
            <li>Publicaciones científicas: Gráficas y tablas comunican resultados</li>
            <li>Revisión de literatura: Comparar resultados de diferentes estudios</li>
            <li>Meta-análisis: Combinar datos de múltiples estudios</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Industria y Negocios</h3>
          <p>
            Las empresas usan análisis de datos para:
          </p>
          <ul>
            <li>Control de calidad: Gráficas de control para procesos de manufactura</li>
            <li>Análisis de mercado: Identificar tendencias en ventas</li>
            <li>Optimización: Encontrar relaciones entre variables para mejorar procesos</li>
            <li>Predicción: Usar regresión para predecir demanda o comportamiento</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Medicina y Salud Pública</h3>
          <p>
            El análisis de datos es crucial en medicina:
          </p>
          <ul>
            <li>Ensayos clínicos: Analizar efectividad de tratamientos</li>
            <li>Epidemiología: Estudiar patrones de enfermedades</li>
            <li>Diagnóstico: Comparar valores medidos con rangos normales</li>
            <li>Investigación médica: Identificar factores de riesgo mediante correlaciones</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Tecnología y Big Data</h3>
          <p>
            En la era del big data, el análisis es más importante que nunca:
          </p>
          <ul>
            <li>Machine Learning: Entrenar algoritmos con grandes conjuntos de datos</li>
            <li>Análisis predictivo: Predecir comportamientos basándose en patrones</li>
            <li>Visualización de datos: Crear dashboards y gráficas interactivas</li>
            <li>Análisis de redes sociales: Identificar tendencias y patrones</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Educación</h3>
          <p>
            El análisis de datos se aplica en educación:
          </p>
          <ul>
            <li>Evaluación educativa: Analizar resultados de exámenes</li>
            <li>Investigación educativa: Estudiar efectividad de métodos de enseñanza</li>
            <li>Análisis de aprendizaje: Identificar patrones en el rendimiento estudiantil</li>
            <li>Laboratorios escolares: Enseñar análisis de datos experimentales</li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El desarrollo del análisis de datos
        </h2>

        <div className="theory-subsection">
          <h3>Antigüedad: Primeras Representaciones</h3>
          <p>
            Los primeros registros de análisis de datos datan de la antigüedad. Los babilonios y egipcios registraban observaciones 
            astronómicas en tablas. Sin embargo, no desarrollaron métodos sistemáticos de análisis.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Siglo XVII: Primeras Gráficas</h3>
          <p>
            René Descartes (1596-1650) desarrolló el sistema de coordenadas cartesianas, permitiendo representar datos en gráficas. 
            Esto revolucionó la visualización de datos y permitió identificar relaciones matemáticas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Carl Friedrich Gauss: Método de Mínimos Cuadrados (1777-1855)</h3>
          <p>
            Gauss desarrolló el método de mínimos cuadrados para ajustar líneas a datos experimentales. Este método sigue siendo 
            fundamental en regresión lineal y análisis de datos moderno.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Siglo XIX: Desarrollo de la Estadística</h3>
          <p>
            Matemáticos como Francis Galton (1822-1911) y Karl Pearson (1857-1936) desarrollaron conceptos de correlación y 
            regresión. Galton introdujo el concepto de regresión hacia la media, y Pearson desarrolló el coeficiente de correlación.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Siglo XX: Computación y Software</h3>
          <p>
            El desarrollo de computadoras revolucionó el análisis de datos:
          </p>
          <ul>
            <li>Hojas de cálculo: Facilitaron cálculos y gráficas</li>
            <li>Software estadístico: SPSS, SAS, R permitieron análisis complejos</li>
            <li>Visualización: Herramientas para crear gráficas profesionales</li>
            <li>Big Data: Capacidad de analizar conjuntos masivos de datos</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Era Moderna: Data Science</h3>
          <p>
            Hoy, el análisis de datos es una disciplina propia (Data Science) que combina estadística, programación y conocimiento 
            del dominio. Herramientas como Python, R y visualizaciones interactivas han democratizado el análisis de datos.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>La Primera Gráfica de Línea de Tiempo</h3>
          <p>
            El economista escocés William Playfair (1759-1823) creó las primeras gráficas de líneas de tiempo y gráficas de barras 
            modernas. Sus gráficas ayudaron a visualizar datos económicos de forma que las tablas no podían.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Descubrimiento de la Correlación</h3>
          <p>
            Francis Galton descubrió la correlación mientras estudiaba la herencia. Notó que padres altos tendían a tener hijos altos, 
            pero no tan altos (regresión hacia la media). Este descubrimiento fue fundamental para el desarrollo de la estadística.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Gráficas que Salvaron Vidas</h3>
          <p>
            En 1854, John Snow usó un mapa (una forma de visualización de datos) para identificar que un brote de cólera en Londres 
            estaba relacionado con una bomba de agua específica. Esta visualización ayudó a establecer la conexión entre agua 
            contaminada y enfermedad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Poder de las Gráficas</h3>
          <p>
            Una buena gráfica puede revelar patrones que no son evidentes en tablas. Por ejemplo, la gráfica de temperatura global 
            vs tiempo muestra claramente el calentamiento global, mientras que una tabla de números sería difícil de interpretar.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Correlación vs Causalidad</h3>
          <p>
            Un ejemplo clásico: existe una correlación fuerte entre el número de ahogamientos y el consumo de helados. ¿Los helados 
            causan ahogamientos? No, ambos están correlacionados con el verano. Este ejemplo ilustra que correlación no implica 
            causalidad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Análisis de Datos en la Era Digital</h3>
          <p>
            Hoy, generamos más datos en dos días que en toda la historia hasta 2003. El análisis de estos datos requiere métodos 
            sofisticados, pero los principios fundamentales (organización, visualización, identificación de patrones) siguen siendo 
            los mismos.
          </p>
        </div>
      </div>

      <div className="theory-section-highlight">
        <h2>📝 Resumen</h2>
        <p>
          El análisis de datos transforma números crudos en información significativa. Es el puente entre la experimentación y las 
          conclusiones científicas. Los objetivos del análisis son: organizar datos de forma clara, visualizar para identificar 
          patrones, cuantificar relaciones matemáticas y validar hipótesis.
        </p>
        <p>
          Las tablas organizan datos experimentales con títulos descriptivos, encabezados claros, unidades explícitas y cifras 
          significativas consistentes. Las gráficas permiten visualizar relaciones entre variables que no son evidentes en tablas. 
          Una buena gráfica debe tener título, ejes etiquetados con unidades, escala apropiada y puntos claramente marcados.
        </p>
        <p>
          Se pueden identificar diferentes tipos de relaciones: lineales (y = mx + b), cuadráticas (y = ax² + bx + c), inversas 
          (y = k/x) y potenciales (y = k·xⁿ). La regresión lineal (método de mínimos cuadrados) calcula la mejor recta que pasa 
          cerca de los puntos experimentales. El coeficiente de correlación (r) mide qué tan bien se ajusta la recta a los datos.
        </p>
        <p>
          El análisis de datos es fundamental en investigación científica, industria, medicina, tecnología y educación. Se desarrolló 
          desde las primeras representaciones en la antigüedad hasta el método de mínimos cuadrados de Gauss, la estadística del 
          siglo XIX, y el software moderno. Hoy, el análisis de datos es una disciplina propia (Data Science) que combina estadística, 
          programación y conocimiento del dominio.
        </p>
      </div>
    </>
  );
};

export default AnalisisDatosTheory;
