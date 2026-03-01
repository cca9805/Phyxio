import { TheorySection, Concept, Important, Example, Formula } from '../../../components/TheoryV2';
import Latex from 'react-latex-next';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Magnitudes y Unidades",
  descripcion: "Sistema Internacional de Unidades, conversiones y análisis dimensional",
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const MagnitudesUnidadesTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es una Magnitud?">
        <p>
          Una magnitud es cualquier propiedad de un objeto o fenómeno que puede ser medida. Las magnitudes 
          físicas nos permiten describir cuantitativamente el mundo que nos rodea. Sin magnitudes y 
          unidades, no podríamos comunicar resultados científicos de forma precisa.
        </p>
        
        <Concept title="Tipos de Magnitudes">
          <p>Magnitudes Fundamentales:</p>
          <p>
            Son magnitudes básicas que no se definen en términos de otras magnitudes. Forman la base 
            del Sistema Internacional de Unidades (SI).
          </p>
          <ul>
            <li>Longitud (metro, m)</li>
            <li>Masa (kilogramo, kg)</li>
            <li>Tiempo (segundo, s)</li>
            <li>Temperatura (kelvin, K)</li>
            <li>Intensidad de corriente eléctrica (amperio, A)</li>
            <li>Cantidad de sustancia (mol, mol)</li>
            <li>Intensidad luminosa (candela, cd)</li>
          </ul>

          <p>Magnitudes Derivadas:</p>
          <p>
            Se obtienen combinando magnitudes fundamentales mediante operaciones matemáticas.
          </p>
          <ul>
            <li>Velocidad (m/s) = longitud / tiempo</li>
            <li>Aceleración (m/s²) = velocidad / tiempo</li>
            <li>Fuerza (newton, N = kg·m/s²) = masa × aceleración</li>
            <li>Energía (joule, J = kg·m²/s²) = fuerza × distancia</li>
            <li>Presión (pascal, Pa = N/m²) = fuerza / área</li>
            <li>Potencia (watt, W = J/s) = energía / tiempo</li>
          </ul>
        </Concept>

        <Concept title="Magnitudes Escalares y Vectoriales">
          <p>
            Las magnitudes también se clasifican según si tienen dirección:
          </p>
          <ul>
            <li>Escalares: Solo tienen magnitud (masa, tiempo, temperatura, energía)</li>
            <li>Vectoriales: Tienen magnitud y dirección (velocidad, fuerza, aceleración)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Sistema Internacional de Unidades (SI)">
        <p>
          El Sistema Internacional (SI) es el sistema de unidades estándar usado en ciencia a nivel mundial. 
          Fue establecido en 1960 y es mantenido por la Oficina Internacional de Pesas y Medidas (BIPM).
        </p>

        <Important>
          <p>
            Usar el SI garantiza que científicos de todo el mundo puedan comunicarse sin ambigüedades y 
            comparar resultados. Es el sistema legal en la mayoría de países y es obligatorio en 
            publicaciones científicas.
          </p>
        </Important>

        <Concept title="Unidades Fundamentales del SI">
          <div className="detailed-content">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #ddd' }}>
                  <th style={{ padding: '8px', textAlign: 'left' }}>Magnitud</th>
                  <th style={{ padding: '8px', textAlign: 'left' }}>Unidad</th>
                  <th style={{ padding: '8px', textAlign: 'left' }}>Símbolo</th>
                  <th style={{ padding: '8px', textAlign: 'left' }}>Definición</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '8px' }}>Longitud</td>
                  <td style={{ padding: '8px' }}>metro</td>
                  <td style={{ padding: '8px' }}>m</td>
                  <td style={{ padding: '8px', fontSize: '0.9em' }}>Distancia que recorre la luz en 1/299,792,458 s</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Masa</td>
                  <td style={{ padding: '8px' }}>kilogramo</td>
                  <td style={{ padding: '8px' }}>kg</td>
                  <td style={{ padding: '8px', fontSize: '0.9em' }}>Masa del prototipo internacional (cilindro de platino-iridio)</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Tiempo</td>
                  <td style={{ padding: '8px' }}>segundo</td>
                  <td style={{ padding: '8px' }}>s</td>
                  <td style={{ padding: '8px', fontSize: '0.9em' }}>9,192,631,770 períodos de radiación del átomo de cesio-133</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Intensidad de corriente</td>
                  <td style={{ padding: '8px' }}>amperio</td>
                  <td style={{ padding: '8px' }}>A</td>
                  <td style={{ padding: '8px', fontSize: '0.9em' }}>Corriente que produce fuerza de 2×10⁻⁷ N por metro entre conductores paralelos</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Temperatura termodinámica</td>
                  <td style={{ padding: '8px' }}>kelvin</td>
                  <td style={{ padding: '8px' }}>K</td>
                  <td style={{ padding: '8px', fontSize: '0.9em' }}>1/273.16 de la temperatura del punto triple del agua</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Cantidad de sustancia</td>
                  <td style={{ padding: '8px' }}>mol</td>
                  <td style={{ padding: '8px' }}>mol</td>
                  <td style={{ padding: '8px', fontSize: '0.9em' }}>6.022×10²³ entidades elementales (número de Avogadro)</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Intensidad luminosa</td>
                  <td style={{ padding: '8px' }}>candela</td>
                  <td style={{ padding: '8px' }}>cd</td>
                  <td style={{ padding: '8px', fontSize: '0.9em' }}>Intensidad luminosa en dirección dada de fuente que emite radiación monocromática</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Concept>

        <Concept title="Ventajas del SI">
          <ul>
            <li>Universal: Usado en todo el mundo</li>
            <li>Coherente: Las unidades derivadas se obtienen sin factores de conversión</li>
            <li>Decimal: Facilita conversiones mediante prefijos</li>
            <li>Preciso: Definiciones basadas en constantes físicas fundamentales</li>
            <li>Completo: Cubre todas las magnitudes físicas</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Prefijos del SI">
        <p>
          Los prefijos se usan para expresar múltiplos y submúltiplos de las unidades base, facilitando 
          el trabajo con magnitudes muy grandes o muy pequeñas. Evitan escribir muchos ceros.
        </p>

        <Concept title="Prefijos Más Comunes">
          <div className="detailed-content">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #ddd' }}>
                  <th style={{ padding: '8px', textAlign: 'left' }}>Prefijo</th>
                  <th style={{ padding: '8px', textAlign: 'left' }}>Símbolo</th>
                  <th style={{ padding: '8px', textAlign: 'left' }}>Factor</th>
                  <th style={{ padding: '8px', textAlign: 'left' }}>Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '8px' }}>tera</td>
                  <td style={{ padding: '8px' }}>T</td>
                  <td style={{ padding: '8px' }}>10¹²</td>
                  <td style={{ padding: '8px' }}>1 TW = 1,000,000,000,000 W</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>giga</td>
                  <td style={{ padding: '8px' }}>G</td>
                  <td style={{ padding: '8px' }}>10⁹</td>
                  <td style={{ padding: '8px' }}>1 GHz = 1,000,000,000 Hz</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>mega</td>
                  <td style={{ padding: '8px' }}>M</td>
                  <td style={{ padding: '8px' }}>10⁶</td>
                  <td style={{ padding: '8px' }}>1 MW = 1,000,000 W</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>kilo</td>
                  <td style={{ padding: '8px' }}>k</td>
                  <td style={{ padding: '8px' }}>10³</td>
                  <td style={{ padding: '8px' }}>1 km = 1,000 m</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>hecto</td>
                  <td style={{ padding: '8px' }}>h</td>
                  <td style={{ padding: '8px' }}>10²</td>
                  <td style={{ padding: '8px' }}>1 hm = 100 m</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>deca</td>
                  <td style={{ padding: '8px' }}>da</td>
                  <td style={{ padding: '8px' }}>10¹</td>
                  <td style={{ padding: '8px' }}>1 dam = 10 m</td>
                </tr>
                <tr className="unidad-base-row" style={{ fontWeight: 'bold', backgroundColor: '#f0f0f0' }}>
                  <td style={{ padding: '8px' }}>-</td>
                  <td style={{ padding: '8px' }}>-</td>
                  <td style={{ padding: '8px' }}>10⁰ = 1</td>
                  <td style={{ padding: '8px' }}>Unidad base</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>deci</td>
                  <td style={{ padding: '8px' }}>d</td>
                  <td style={{ padding: '8px' }}>10⁻¹</td>
                  <td style={{ padding: '8px' }}>1 dm = 0.1 m</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>centi</td>
                  <td style={{ padding: '8px' }}>c</td>
                  <td style={{ padding: '8px' }}>10⁻²</td>
                  <td style={{ padding: '8px' }}>1 cm = 0.01 m</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>mili</td>
                  <td style={{ padding: '8px' }}>m</td>
                  <td style={{ padding: '8px' }}>10⁻³</td>
                  <td style={{ padding: '8px' }}>1 mm = 0.001 m</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>micro</td>
                  <td style={{ padding: '8px' }}>μ</td>
                  <td style={{ padding: '8px' }}>10⁻⁶</td>
                  <td style={{ padding: '8px' }}>1 μm = 0.000001 m</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>nano</td>
                  <td style={{ padding: '8px' }}>n</td>
                  <td style={{ padding: '8px' }}>10⁻⁹</td>
                  <td style={{ padding: '8px' }}>1 nm = 0.000000001 m</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>pico</td>
                  <td style={{ padding: '8px' }}>p</td>
                  <td style={{ padding: '8px' }}>10⁻¹²</td>
                  <td style={{ padding: '8px' }}>1 pm = 0.000000000001 m</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Concept>

        <Important>
          <p>
            Nota: El prefijo "kilo" se escribe con "k" minúscula, no "K" (que es kelvin). El prefijo 
            "mega" se escribe con "M" mayúscula. Los símbolos de prefijos no se pluralizan ni llevan punto.
          </p>
        </Important>
      </TheorySection>

      <TheorySection title="Conversión de Unidades">
        <p>
          Convertir unidades es una habilidad esencial en física. El método más seguro es usar factores 
          de conversión, que son fracciones iguales a 1.
        </p>

        <Concept title="Método de Factores de Conversión">
          <p>
            Un factor de conversión es una fracción igual a 1, donde el numerador y denominador expresan 
            la misma cantidad en diferentes unidades. Al multiplicar por 1, no cambiamos el valor, solo 
            las unidades.
          </p>
          
          <p>Ejemplo: Convertir 5 km a metros</p>
          <Formula
            expression={String.raw`L_2 = L_1 \times \frac{\text{factor de conversión}}{1}`}
            calculatorId="conversion-longitud"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>L₁: Valor inicial</li>
            <li>L₂: Valor convertido</li>
            <li>Factor de conversión: Relación entre unidades</li>
          </ul>
          <p>
            El factor de conversión (1000 m / 1 km) es igual a 1, por lo que no cambia el valor, solo 
            las unidades. Los "km" se cancelan, dejando solo metros.
          </p>
        </Concept>

        <Concept title="Conversiones Múltiples">
          <p>
            Para conversiones complejas, usamos múltiples factores de conversión:
          </p>
          <p>Ejemplo: Convertir 72 km/h a m/s</p>
          <Formula
            expression={String.raw`v_2 = v_1 \times \frac{1000 \text{ m}}{1 \text{ km}} \times \frac{1 \text{ h}}{3600 \text{ s}}`}
            calculatorId="conversion-velocidad"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>v₁: Velocidad inicial</li>
            <li>v₂: Velocidad convertida</li>
            <li>Factores: km↔m y h↔s</li>
          </ul>
          <p>
            Primero convertimos km a m, luego h a s. Los factores se multiplican y las unidades se cancelan.
          </p>
        </Concept>

        <Concept title="Conversiones Comunes">
          <div className="detailed-content">
            <p>Longitud:</p>
            <ul>
              <li>1 km = 1000 m</li>
              <li>1 m = 100 cm = 1000 mm</li>
              <li>1 pulgada = 2.54 cm</li>
              <li>1 pie = 30.48 cm</li>
              <li>1 milla = 1.609 km</li>
            </ul>

            <p>Masa:</p>
            <ul>
              <li>1 kg = 1000 g</li>
              <li>1 g = 1000 mg</li>
              <li>1 tonelada = 1000 kg</li>
              <li>1 libra = 0.454 kg</li>
            </ul>

            <p>Tiempo:</p>
            <ul>
              <li>1 min = 60 s</li>
              <li>1 h = 3600 s</li>
              <li>1 día = 86400 s</li>
              <li>1 año ≈ 3.156×10⁷ s</li>
            </ul>

            <p>Velocidad:</p>
            <ul>
              <li>1 km/h = 0.278 m/s</li>
              <li>1 m/s = 3.6 km/h</li>
              <li>1 mph (milla/hora) = 0.447 m/s</li>
            </ul>

            <p>Área:</p>
            <ul>
              <li>1 m² = 10,000 cm²</li>
              <li>1 km² = 1,000,000 m²</li>
              <li>1 hectárea = 10,000 m²</li>
            </ul>

            <p>Volumen:</p>
            <ul>
              <li>1 m³ = 1000 L</li>
              <li>1 L = 1000 mL = 1000 cm³</li>
              <li>1 galón (US) = 3.785 L</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Ejemplos de Conversión">
          <Example>
            <p>Ejemplo 1: Convertir 2.5 horas a segundos</p>
            <div className="formula-display">
              <div className="formula-container">
                <div className="formula-expression">
                  <Latex>{'$2.5 \\text{ h} \\times \\frac{3600 \\text{ s}}{1 \\text{ h}} = 9000 \\text{ s}$'}</Latex>
                </div>
              </div>
            </div>
          </Example>

          <Example>
            <p>Ejemplo 2: Convertir 500 cm³ a litros</p>
            <div className="formula-display">
              <div className="formula-container">
                <div className="formula-expression">
                  <Latex>{'$500 \\text{ cm}^3 \\times \\frac{1 \\text{ L}}{1000 \\text{ cm}^3} = 0.5 \\text{ L}$'}</Latex>
                </div>
              </div>
            </div>
          </Example>

          <Example>
            <p>Ejemplo 3: Convertir 100 mph a m/s</p>
            <div className="formula-display">
              <div className="formula-container">
                <div className="formula-expression">
                  <Latex>{'$100 \\frac{\\text{mi}}{\\text{h}} \\times \\frac{1609 \\text{ m}}{1 \\text{ mi}} \\times \\frac{1 \\text{ h}}{3600 \\text{ s}} = 44.7 \\frac{\\text{m}}{\\text{s}}$'}</Latex>
                </div>
              </div>
            </div>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Notación Científica">
        <p>
          La notación científica facilita trabajar con números muy grandes o muy pequeños. Es esencial 
          en física para expresar constantes fundamentales, distancias astronómicas y tamaños atómicos.
        </p>

        <Concept title="Formato">
          <Formula
            expression={String.raw`a \times 10^n`}
            calculatorId="notacion-cientifica"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>a: Mantisa (1 ≤ |a| {'<'} 10)</li>
            <li>n: Exponente entero</li>
          </ul>
          <p>Donde: 1 ≤ |a| {'<'} 10 y n es un entero (positivo, negativo o cero)</p>
          <p>
            El número a se llama mantisa y debe tener un solo dígito distinto de cero antes del punto decimal.
          </p>
        </Concept>

        <Concept title="Ejemplos">
          <ul>
            <li>300,000,000 m/s (velocidad de la luz) = 3 × 10⁸ m/s</li>
            <li>0.000000001 m (1 nanómetro) = 1 × 10⁻⁹ m</li>
            <li>6,020,000,000,000,000,000,000,000 (número de Avogadro) ≈ 6.02 × 10²³</li>
            <li>0.00000000000000000016 C (carga del electrón) = 1.6 × 10⁻¹⁹ C</li>
            <li>9,460,000,000,000 km (año luz) = 9.46 × 10¹² km</li>
          </ul>
        </Concept>

        <Concept title="Operaciones con Notación Científica">
          <p>Multiplicación:</p>
          <div className="formula-display">
            <div className="formula-container">
              <div className="formula-expression">
                <Latex>{'$(3 \\times 10^4) \\times (2 \\times 10^5) = (3 \\times 2) \\times 10^{4+5} = 6 \\times 10^9$'}</Latex>
              </div>
            </div>
          </div>
          <p>Multiplicamos las mantisas y sumamos los exponentes.</p>

          <p>División:</p>
          <div className="formula-display">
            <div className="formula-container">
              <div className="formula-expression">
                <Latex>{'$\\frac{6 \\times 10^8}{2 \\times 10^3} = \\frac{6}{2} \\times 10^{8-3} = 3 \\times 10^5$'}</Latex>
              </div>
            </div>
          </div>
          <p>Dividimos las mantisas y restamos los exponentes.</p>

          <p>Suma y Resta:</p>
          <p>
            Primero igualamos los exponentes, luego sumamos/restamos las mantisas:
          </p>
          <div className="formula-display">
            <div className="formula-container">
              <div className="formula-expression">
                <Latex>{'$3.2 \\times 10^4 + 1.5 \\times 10^3 = 3.2 \\times 10^4 + 0.15 \\times 10^4 = 3.35 \\times 10^4$'}</Latex>
              </div>
            </div>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Cifras Significativas">
        <p>
          Las cifras significativas indican la precisión de una medida. Incluyen todos los dígitos conocidos 
          con certeza más un dígito incierto (estimado). Son fundamentales para reportar resultados 
          experimentales correctamente.
        </p>

        <Concept title="Reglas para Contar Cifras Significativas">
          <ul>
            <li>Todos los dígitos no cero son significativos: 123 tiene 3 cifras significativas</li>
            <li>Ceros entre dígitos no cero son significativos: 101 tiene 3 cifras significativas</li>
            <li>Ceros a la izquierda NO son significativos: 0.0025 tiene 2 cifras significativas</li>
            <li>Ceros a la derecha después del punto decimal SÍ son significativos: 2.500 tiene 4 cifras significativas</li>
            <li>Ceros a la derecha en números sin punto decimal son ambiguos: 1500 podría tener 2, 3 o 4 cifras (usar notación científica para clarificar: 1.5×10³ tiene 2, 1.50×10³ tiene 3)</li>
          </ul>
        </Concept>

        <Concept title="Operaciones con Cifras Significativas">
          <p>Suma y Resta:</p>
          <p>
            El resultado no puede tener más decimales que el número con menos decimales.
          </p>
          <p>Ejemplo: 12.1 + 0.35 = 12.45 → se redondea a 12.5 (un decimal)</p>

          <p>Multiplicación y División:</p>
          <p>
            El resultado debe tener el mismo número de cifras significativas que el factor con menos cifras.
          </p>
          <p>Ejemplo: 3.2 × 4.567 = 14.6144 → se redondea a 15 (2 cifras significativas)</p>

          <Important>
            <p>
              Las constantes exactas (como el 2 en 2π) no limitan las cifras significativas. Si medimos 
              un radio de 3.45 m, el perímetro es 2π(3.45) = 21.7 m (3 cifras significativas, limitado 
              por 3.45, no por el 2).
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Dimensiones y Análisis Dimensional">
        <p>
          El análisis dimensional es una técnica para verificar si una ecuación es dimensionalmente 
          correcta. Es una herramienta poderosa para detectar errores y entender relaciones físicas.
        </p>

        <Concept title="Principio de Homogeneidad Dimensional">
          <p>
            En una ecuación física válida, ambos lados deben tener las mismas dimensiones. Todas las 
            magnitudes en una suma o resta deben tener las mismas dimensiones.
          </p>
          
          <p>Ejemplo: Verificar si v = at es dimensionalmente correcto</p>
          <ul>
            <li>Izquierda: [v] = L/T (longitud/tiempo)</li>
            <li>Derecha: [a][t] = (L/T²)(T) = L/T</li>
            <li>✅ Ambos lados tienen dimensión L/T → Correcto</li>
          </ul>

          <p>Ejemplo: Verificar si x = ½at² es dimensionalmente correcto</p>
          <ul>
            <li>Izquierda: [x] = L</li>
            <li>Derecha: [a][t]² = (L/T²)(T²) = L</li>
            <li>✅ Ambos lados tienen dimensión L → Correcto</li>
          </ul>
        </Concept>

        <Concept title="Dimensiones de Magnitudes Comunes">
          <ul>
            <li>Longitud: [L]</li>
            <li>Masa: [M]</li>
            <li>Tiempo: [T]</li>
            <li>Velocidad: [L]/[T]</li>
            <li>Aceleración: [L]/[T²]</li>
            <li>Fuerza: [M][L]/[T²]</li>
            <li>Energía: [M][L²]/[T²]</li>
            <li>Potencia: [M][L²]/[T³]</li>
          </ul>
        </Concept>

        <Important>
          <p>
            El análisis dimensional NO demuestra que una ecuación sea correcta, pero puede demostrar 
            que es INCORRECTA si las dimensiones no coinciden. También ayuda a encontrar la forma 
            correcta de una ecuación cuando se conocen las magnitudes involucradas.
          </p>
        </Important>

        <Concept title="Uso del Análisis Dimensional">
          <p>
            El análisis dimensional puede ayudar a:
          </p>
          <ul>
            <li>Verificar fórmulas derivadas</li>
            <li>Encontrar relaciones entre magnitudes</li>
            <li>Detectar errores en cálculos</li>
            <li>Recordar fórmulas (verificando dimensiones)</li>
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
            El uso correcto de unidades es crítico en ingeniería:
          </p>
          <ul>
            <li>Errores de unidades han causado desastres: el Mars Climate Orbiter se perdió en 1999 
            porque un equipo usaba libras-fuerza y otro newtons</li>
            <li>En construcción, errores de conversión pueden causar colapsos estructurales</li>
            <li>Los planos técnicos deben especificar unidades claramente</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Medicina y Farmacia</h3>
          <p>
            Las unidades correctas son vitales en medicina:
          </p>
          <ul>
            <li>Dosis de medicamentos: mg/kg de peso corporal</li>
            <li>Concentraciones: mg/L, mmol/L</li>
            <li>Errores de unidades pueden ser fatales (confundir mg con g puede ser 1000 veces la dosis)</li>
            <li>Conversión entre sistemas (métrico vs imperial) requiere cuidado extremo</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Comercio y Economía</h3>
          <p>
            Las unidades estandarizadas facilitan el comercio:
          </p>
          <ul>
            <li>Precios por unidad (€/kg, €/L)</li>
            <li>Comparación de productos en diferentes unidades</li>
            <li>Contratos comerciales especifican unidades claramente</li>
            <li>Conversión entre sistemas (métrico vs imperial) en comercio internacional</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Tecnología y Electrónica</h3>
          <p>
            Prefijos del SI son esenciales en electrónica:
          </p>
          <ul>
            <li>Frecuencias: MHz, GHz para procesadores y comunicaciones</li>
            <li>Capacidades: pF, nF, μF para condensadores</li>
            <li>Resistencias: Ω, kΩ, MΩ</li>
            <li>Almacenamiento: KB, MB, GB, TB</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Deportes y Atletismo</h3>
          <p>
            Las unidades son fundamentales en deportes:
          </p>
          <ul>
            <li>Récords mundiales se miden en unidades estándar</li>
            <li>Conversión entre sistemas (métrico vs imperial) para comparar récords</li>
            <li>Mediciones precisas determinan ganadores en competiciones</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Navegación y GPS</h3>
          <p>
            Las unidades son críticas en navegación:
          </p>
          <ul>
            <li>Coordenadas geográficas (grados, minutos, segundos)</li>
            <li>Distancias: millas náuticas, kilómetros</li>
            <li>Velocidades: nudos (millas náuticas/hora)</li>
            <li>Conversiones precisas son esenciales para seguridad</li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: La evolución de los sistemas de unidades
        </h2>

        <div className="theory-subsection">
          <h3>Sistemas Antiguos (Antigüedad - 1700s)</h3>
          <p>
            Cada región tenía sus propias unidades basadas en partes del cuerpo o objetos comunes:
          </p>
          <ul>
            <li>Pie, pulgada, yarda (basados en medidas corporales)</li>
            <li>Libra, onza (basados en objetos de referencia)</li>
            <li>Problema: Variaban entre regiones, causando confusión en comercio</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Revolución Francesa y el Sistema Métrico (1790s)</h3>
          <p>
            La Revolución Francesa impulsó la creación de un sistema de unidades universal y racional. 
            En 1791, la Academia de Ciencias de Francia propuso el sistema métrico decimal.
          </p>
          <p>
            El metro se definió como 1/10,000,000 de la distancia del ecuador al polo norte (aunque 
            la medición fue imprecisa). El kilogramo se definió como la masa de 1 litro de agua a 4°C.
          </p>
          <p>
            El sistema métrico se adoptó en Francia en 1795 y gradualmente se extendió por Europa.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Convención del Metro (1875)</h3>
          <p>
            En 1875, 17 países firmaron la Convención del Metro, estableciendo:
          </p>
          <ul>
            <li>Oficina Internacional de Pesas y Medidas (BIPM)</li>
            <li>Prototipos internacionales del metro y kilogramo</li>
            <li>Estándares reproducibles para todo el mundo</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Sistema MKS y CGS (1900s)</h3>
          <p>
            Se desarrollaron diferentes sistemas:
          </p>
          <ul>
            <li>CGS: centímetro, gramo, segundo (usado en física teórica)</li>
            <li>MKS: metro, kilogramo, segundo (precursor del SI)</li>
            <li>Problema: Múltiples sistemas causaban confusión</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Nacimiento del SI (1960)</h3>
          <p>
            En 1960, la 11ª Conferencia General de Pesas y Medidas estableció el Sistema Internacional 
            de Unidades (SI), unificando:
          </p>
          <ul>
            <li>7 unidades fundamentales</li>
            <li>Prefijos estandarizados</li>
            <li>Reglas de uso consistentes</li>
          </ul>
          <p>
            El SI se adoptó rápidamente en ciencia y gradualmente en la vida cotidiana en muchos países.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Redefinición del SI (2019)</h3>
          <p>
            En 2019, el SI se redefinió basándose en constantes físicas fundamentales en lugar de 
            prototipos físicos:
          </p>
          <ul>
            <li>Metro: Basado en la velocidad de la luz (constante universal)</li>
            <li>Kilogramo: Basado en la constante de Planck (en lugar del prototipo de París)</li>
            <li>Segundo: Basado en frecuencia de transición del cesio</li>
            <li>Ventaja: No depende de objetos físicos que pueden cambiar</li>
          </ul>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>El Desastre del Mars Climate Orbiter</h3>
          <p>
            En 1999, la nave espacial Mars Climate Orbiter se perdió al entrar en la atmósfera de Marte. 
            La causa: un equipo usaba libras-fuerza (sistema imperial) y otro newtons (SI). La nave 
            se acercó demasiado a Marte y se quemó en la atmósfera.
          </p>
          <p>
            Este desastre de 125 millones de dólares ilustra la importancia crítica de usar unidades 
            consistentes. Desde entonces, la NASA requiere estrictamente el uso del SI.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Kilogramo Prototipo que Perdía Peso</h3>
          <p>
            El kilogramo se definía por un cilindro de platino-iridio guardado en París. Se descubrió 
            que este prototipo perdía aproximadamente 50 microgramos por siglo debido a la pérdida 
            de átomos de su superficie.
          </p>
          <p>
            Esto motivó la redefinición de 2019, donde el kilogramo ahora se basa en la constante de 
            Planck, una constante física fundamental que no cambia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Metro Original</h3>
          <p>
            El metro original (1791) se definió como 1/10,000,000 de la distancia del ecuador al polo 
            norte. Sin embargo, la medición fue difícil y el metro real difería ligeramente de esta 
            definición. Hoy, el metro se define por la velocidad de la luz, mucho más precisa.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Conversiones Curiosas</h3>
          <p>
            Algunas conversiones interesantes:
          </p>
          <ul>
            <li>1 año luz = 9.46×10¹² km (la luz recorre esta distancia en un año)</li>
            <li>1 parsec = 3.26 años luz (usado en astronomía)</li>
            <li>1 unidad astronómica (UA) = 1.496×10⁸ km (distancia Tierra-Sol)</li>
            <li>1 angstrom (Å) = 10⁻¹⁰ m (usado para tamaños atómicos)</li>
            <li>1 barn = 10⁻²⁸ m² (usado en física nuclear, "barn" viene de "grande como un granero")</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>El Sistema Imperial Persistente</h3>
          <p>
            Aunque el SI es el estándar científico, algunos países (especialmente Estados Unidos) aún 
            usan el sistema imperial en la vida cotidiana. Esto causa:
          </p>
          <ul>
            <li>Necesidad de conversiones constantes</li>
            <li>Errores en ingeniería y ciencia</li>
            <li>Confusión en comercio internacional</li>
            <li>Costos adicionales en manufactura</li>
          </ul>
          <p>
            Incluso en EEUU, la ciencia usa exclusivamente el SI.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Prefijos Extremos</h3>
          <p>
            Existen prefijos para magnitudes extremas:
          </p>
          <ul>
            <li>Yotta (Y): 10²⁴ - usado para distancias cósmicas</li>
            <li>Yocto (y): 10⁻²⁴ - usado para masas de partículas subatómicas</li>
            <li>Estos prefijos raramente se usan, pero existen para completitud del sistema</li>
          </ul>
        </div>
      </div>

      <div className="theory-section-highlight">
        <h2>📝 Resumen</h2>
        <p>
          Una magnitud es cualquier propiedad medible. Las magnitudes fundamentales (longitud, masa, 
          tiempo, etc.) forman la base del SI, mientras que las derivadas se obtienen combinándolas. 
          El Sistema Internacional de Unidades (SI) es el estándar mundial para ciencia, basado en 
          7 unidades fundamentales.
        </p>
        <p>
          Los prefijos del SI (kilo, mega, mili, micro, etc.) facilitan trabajar con magnitudes muy 
          grandes o pequeñas. La conversión de unidades se realiza mediante factores de conversión 
          (fracciones iguales a 1).
        </p>
        <p>
          La notación científica (a × 10ⁿ) es esencial para números muy grandes o pequeños. Las cifras 
          significativas indican la precisión de una medida y deben respetarse en cálculos.
        </p>
        <p>
          El análisis dimensional verifica la consistencia de ecuaciones físicas: ambos lados deben 
          tener las mismas dimensiones. El SI fue establecido en 1960 y redefinido en 2019 basándose 
          en constantes físicas fundamentales, garantizando precisión y reproducibilidad mundial.
        </p>
      </div>
    </>
  );
};

export default MagnitudesUnidadesTheory;
