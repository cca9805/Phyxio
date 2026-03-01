import React from 'react';
import { TheorySection, Concept, Important, Formula } from '../../../../components/TheoryV2';
import { definitions as iluminacionDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Iluminación",
  descripcion: "Iluminancia, luminancia y diseño de iluminación",
  isTheoryOnly: false,
  categoria: "optica",
  subcategoria: "fotometria",
  tema: "fotometria",
  subtema: "iluminacion",
  icono: "iluminacion",
  palette: "yellow",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const IluminacionTeoria = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Iluminación?">
        <p>
          La iluminación estudia cómo la luz incide sobre las superficies y cómo estas son percibidas por el ojo humano. Involucra dos magnitudes principales: iluminancia (luz que llega) y luminancia (luz que sale o se refleja).
        </p>
      </TheorySection>

      <TheorySection title="Iluminancia (E)">
        <Concept title="Definición">
          <p>
            La iluminancia es el flujo luminoso que incide sobre una superficie por unidad de área.
          </p>
          <Formula 
            expression={String.raw`E = \frac{d\Phi}{dA}`}
            calculatorId="iluminacion-grupo-1"
            definitions={iluminacionDefinitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>E: Iluminancia (lux, lx)</li>
            <li>Φ: Flujo luminoso (lm)</li>
            <li>A: Área (m²)</li>
          </ul>
          <p>
            Unidad: 1 lux = 1 lumen/m²
          </p>
        </Concept>

        <Concept title="Ley del Inverso del Cuadrado">
          <p>
            Para una fuente puntual que emite uniformemente:
          </p>
          <Formula 
            expression={String.raw`E = \frac{I}{r^2}`}
            calculatorId="iluminacion-grupo-1"
            definitions={iluminacionDefinitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>I: Intensidad luminosa (cd)</li>
            <li>r: Distancia a la fuente (m)</li>
          </ul>
          <p>
            La iluminancia disminuye con el cuadrado de la distancia.
          </p>
        </Concept>

        <Concept title="Ley del Coseno (Lambert)">
          <p>
            Cuando la luz incide oblicuamente:
          </p>
          <Formula 
            expression={String.raw`E = \frac{I\cos\theta}{r^2}`}
            calculatorId="iluminacion-grupo-1"
            definitions={iluminacionDefinitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>θ: Ángulo entre la normal y la dirección de incidencia</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Niveles de Iluminancia Recomendados">
        <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1rem'}}>
          <thead>
            <tr style={{borderBottom: '2px solid #ddd'}}>
              <th style={{padding: '0.5rem', textAlign: 'left'}}>Ambiente/Actividad</th>
              <th style={{padding: '0.5rem', textAlign: 'left'}}>Iluminancia (lux)</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom: '1px solid #ddd'}}>
              <td style={{padding: '0.5rem'}}>Luz de luna llena</td>
              <td style={{padding: '0.5rem'}}>~0.1</td>
            </tr>
            <tr style={{borderBottom: '1px solid #ddd'}}>
              <td style={{padding: '0.5rem'}}>Calle iluminada</td>
              <td style={{padding: '0.5rem'}}>10-20</td>
            </tr>
            <tr style={{borderBottom: '1px solid #ddd'}}>
              <td style={{padding: '0.5rem'}}>Sala de estar</td>
              <td style={{padding: '0.5rem'}}>50-150</td>
            </tr>
            <tr style={{borderBottom: '1px solid #ddd'}}>
              <td style={{padding: '0.5rem'}}>Oficina general</td>
              <td style={{padding: '0.5rem'}}>300-500</td>
            </tr>
            <tr style={{borderBottom: '1px solid #ddd'}}>
              <td style={{padding: '0.5rem'}}>Lectura/escritura</td>
              <td style={{padding: '0.5rem'}}>500-750</td>
            </tr>
            <tr style={{borderBottom: '1px solid #ddd'}}>
              <td style={{padding: '0.5rem'}}>Trabajo de precisión</td>
              <td style={{padding: '0.5rem'}}>1000-2000</td>
            </tr>
            <tr style={{borderBottom: '1px solid #ddd'}}>
              <td style={{padding: '0.5rem'}}>Cirugía</td>
              <td style={{padding: '0.5rem'}}>10,000-100,000</td>
            </tr>
            <tr style={{borderBottom: '1px solid #ddd'}}>
              <td style={{padding: '0.5rem'}}>Luz solar directa</td>
              <td style={{padding: '0.5rem'}}>~100,000</td>
            </tr>
          </tbody>
        </table>
      </TheorySection>

      <TheorySection title="Luminancia (L)">
        <Concept title="Definición">
          <p>
            La luminancia es la intensidad luminosa emitida o reflejada por una superficie en una dirección dada, por unidad de área proyectada.
          </p>
          <Formula 
            expression={String.raw`L = \frac{dI}{dA\cos\theta}`}
            calculatorId="iluminacion-grupo-1"
            definitions={iluminacionDefinitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>L: Luminancia (cd/m²)</li>
            <li>I: Intensidad luminosa (cd)</li>
            <li>A: Área (m²)</li>
            <li>θ: Ángulo con la normal</li>
          </ul>
          <p>
            Unidad: cd/m² (también llamada "nit")
          </p>
        </Concept>

        <Concept title="Relación con Iluminancia">
          <p>
            Para una superficie lambertiana (difusora perfecta):
          </p>
          <Formula 
            expression={String.raw`L = \frac{E \cdot \rho}{\pi}`}
            calculatorId="iluminacion-grupo-1"
            definitions={iluminacionDefinitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>ρ: Reflectancia de la superficie (0-1)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Valores Típicos de Luminancia">
        <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1rem'}}>
          <thead>
            <tr style={{borderBottom: '2px solid #ddd'}}>
              <th style={{padding: '0.5rem', textAlign: 'left'}}>Fuente/Superficie</th>
              <th style={{padding: '0.5rem', textAlign: 'left'}}>Luminancia (cd/m²)</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom: '1px solid #ddd'}}>
              <td style={{padding: '0.5rem'}}>Cielo nocturno</td>
              <td style={{padding: '0.5rem'}}>~0.001</td>
            </tr>
            <tr style={{borderBottom: '1px solid #ddd'}}>
              <td style={{padding: '0.5rem'}}>Papel blanco (oficina)</td>
              <td style={{padding: '0.5rem'}}>~100</td>
            </tr>
            <tr style={{borderBottom: '1px solid #ddd'}}>
              <td style={{padding: '0.5rem'}}>Monitor LCD</td>
              <td style={{padding: '0.5rem'}}>200-400</td>
            </tr>
            <tr style={{borderBottom: '1px solid #ddd'}}>
              <td style={{padding: '0.5rem'}}>Cielo diurno</td>
              <td style={{padding: '0.5rem'}}>~8,000</td>
            </tr>
            <tr style={{borderBottom: '1px solid #ddd'}}>
              <td style={{padding: '0.5rem'}}>Bombilla incandescente</td>
              <td style={{padding: '0.5rem'}}>~1,000,000</td>
            </tr>
            <tr style={{borderBottom: '1px solid #ddd'}}>
              <td style={{padding: '0.5rem'}}>Sol (superficie)</td>
              <td style={{padding: '0.5rem'}}>~1,600,000,000</td>
            </tr>
          </tbody>
        </table>
      </TheorySection>

      <TheorySection title="Brillo">
        <Concept title="Percepción Subjetiva">
          <p>
            El brillo es la percepción subjetiva de la luminancia. No es una magnitud física sino psicofísica.
          </p>
          <ul>
            <li>Depende de la adaptación del ojo</li>
            <li>Influenciado por el contraste con el entorno</li>
            <li>Respuesta logarítmica (Ley de Weber-Fechner)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Diseño de Iluminación">
        <Concept title="Método de los Lúmenes">
          <p>
            Cálculo del número de luminarias necesarias:
          </p>
          <Formula 
            expression={String.raw`N = \frac{E \cdot A}{F \cdot CU \cdot FM}`}
            calculatorId="lumen-method-n"
            definitions={iluminacionDefinitions}
            exercises={exercises}
            complementary={[
              { description: 'Flujo por luminaria', expression: String.raw`F = \frac{E\,A}{N\,CU\,FM}` },
              { description: 'Coeficiente de utilización', expression: String.raw`CU = \frac{E\,A}{N\,F\,FM}` },
              { description: 'Factor de mantenimiento', expression: String.raw`FM = \frac{E\,A}{N\,F\,CU}` },
              { description: 'Iluminancia objetivo', expression: String.raw`E = \frac{N\,F\,CU\,FM}{A}` },
              { description: 'Área del local', expression: String.raw`A = \frac{N\,F\,CU\,FM}{E}` }
              ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>N: Número de luminarias</li>
            <li>E: Iluminancia deseada (lux)</li>
            <li>A: Área del local (m²)</li>
            <li>F: Flujo luminoso por luminaria (lm)</li>
            <li>CU: Coeficiente de utilización (0.3-0.7)</li>
            <li>FM: Factor de mantenimiento (0.7-0.9)</li>
          </ul>

        </Concept>

        <Concept title="Factores a Considerar">
          <ul>
            <li><strong>Uniformidad:</strong> Relación entre iluminancia mínima y media</li>
            <li><strong>Deslumbramiento:</strong> UGR (Unified Glare Rating)</li>
            <li><strong>Temperatura de color:</strong> Cálida (&lt;3300K), neutra (3300-5300K), fría (&gt;5300K)</li>
            <li><strong>Índice de reproducción cromática (CRI):</strong> Calidad de reproducción de colores</li>
            <li><strong>Eficiencia energética:</strong> Consumo vs iluminación proporcionada</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Bloques finales en orden: Aplicaciones → Historia → Anécdotas → Resumen */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🏗️ Diseño de iluminación arquitectónica</h3>
          <p>
            Los arquitectos y diseñadores de iluminación aplican las leyes de iluminancia y luminancia para crear espacios funcionales y estéticamente agradables. En oficinas se buscan 300-500 lux en superficies de trabajo, mientras que en salas de estar residenciales se prefieren 50-150 lux para ambiente cálido. El método de los lúmenes permite calcular cuántas luminarias se necesitan y dónde colocarlas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏭 Iluminación industrial y seguridad</h3>
          <p>
            En fábricas y almacenes, normativas de seguridad especifican niveles mínimos de iluminancia: 200 lux en pasillos, 500 lux en áreas de ensamblaje, 1000-2000 lux para inspección de calidad. La iluminación inadecuada aumenta errores y accidentes. Los ingenieros aplican la ley del inverso del cuadrado para determinar la altura óptima de montaje de luminarias.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🛣️ Iluminación vial y urbana</h3>
          <p>
            Las carreteras requieren iluminancia uniforme (10-20 lux en vías principales) con mínima variación para evitar fatiga visual. Los diseñadores usan la ley del coseno de Lambert para calcular la distribución de luz de farolas inclinadas y asegurar que tanto la calzada como los bordillos reciban iluminación adecuada. Las normativas limitan la emisión hacia arriba para reducir contaminación lumínica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚽ Iluminación deportiva</h3>
          <p>
            Los estadios profesionales necesitan 1000-2000 lux horizontal para partidos televisados, con uniformidad del 70% (relación entre iluminancia mínima y promedio). Además se controla la iluminancia vertical para cámaras. Los proyectores de alta potencia (1000-2000W cada uno) se distribuyen perimetralmente aplicando cálculos de ángulos sólidos y ley del coseno.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎨 Museos y galerías de arte</h3>
          <p>
            La conservación de obras exige control estricto de iluminancia: 50 lux máximo para textiles y acuarelas sensibles, 150-200 lux para pinturas al óleo, 300 lux para esculturas resistentes. Los diseñadores combinan iluminación ambiental difusa con acentuación direccional, controlando luminancia y contraste para resaltar detalles sin dañar las obras.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌱 Horticultura y agricultura vertical</h3>
          <p>
            Las plantas necesitan niveles específicos de iluminancia para fotosíntesis: 200-400 μmol/m²·s (equivalente a ~10,000-20,000 lux) para hortalizas, hasta 50,000+ lux para cultivos de sol directo. Los invernaderos y granjas verticales LED calculan la distribución de iluminancia en múltiples niveles, optimizando el consumo energético mientras aseguran crecimiento uniforme.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Ingeniería de la iluminación
        </h2>
        
        <div className="theory-subsection">
          <h3>🏛️ Johann Heinrich Lambert (1760)</h3>
          <p>
            El matemático suizo Johann Lambert estableció la ley del coseno que lleva su nombre, describiendo cómo la iluminancia disminuye con el ángulo de incidencia. También introdujo el concepto de "superficie lambertiana", un difusor ideal que refleja luz uniformemente en todas las direcciones. Sus trabajos sentaron las bases matemáticas de la fotometría moderna.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📚 Pierre Bouguer y la ley del inverso del cuadrado (1729)</h3>
          <p>
            El físico francés Pierre Bouguer formuló matemáticamente la ley del inverso del cuadrado para la iluminancia, demostrando que E ∝ 1/r². Este principio geométrico se aplica no solo a la luz sino a cualquier fenómeno que se propaga radialmente desde una fuente puntual, incluidos el sonido y la gravedad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💡 Normativas de iluminación industrial (siglo XX)</h3>
          <p>
            Tras la revolución industrial, estudios ergonómicos establecieron que la iluminación inadecuada reducía la productividad y causaba fatiga visual. En los años 1930-1950, organizaciones como la IES (Illuminating Engineering Society) desarrollaron estándares especificando niveles mínimos de iluminancia para diferentes tareas: 50 lux para pasillos, 500 lux para oficinas, 2000 lux para trabajo de precisión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏭 El método de los lúmenes (1950s)</h3>
          <p>
            Ingenieros eléctricos desarrollaron el método de los lúmenes como herramienta práctica para calcular cuántas luminarias se necesitan en un espacio. El método considera factores reales como reflexiones en paredes/techo (coeficiente de utilización) y degradación con el tiempo (factor de mantenimiento), permitiendo diseños realistas y económicos.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🌞 Ilusión del contraste simultáneo</h3>
          <p>
            Una hoja de papel blanco puede tener una luminancia de 100 cd/m² bajo luz artificial en interiores, pero alcanzar 10,000 cd/m² bajo luz solar directa. Sin embargo, nuestro cerebro la percibe como "blanca" en ambos casos. Más curioso aún: un objeto con 1000 cd/m² puede verse "gris" si está rodeado de objetos aún más brillantes. La percepción de brillo es relativa al entorno, no absoluta.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚌 El deslumbramiento no depende solo del brillo</h3>
          <p>
            Una lámpara de 1000 cd/m² en el techo puede no deslumbrar, pero una luz de 100 cd/m² justo en tu línea de visión sí lo hará. El índice UGR (Unified Glare Rating) considera no solo la luminancia de la fuente, sino su posición angular respecto al observador y el tamaño aparente. Un faro de coche de 100,000 cd deslumbra porque está directamente en tu campo visual.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏛️ El error de iluminación más común</h3>
          <p>
            Muchas oficinas antiguas están "sobre-iluminadas" con 1000+ lux, cuando 300-500 lux serían suficientes y más cómodos. Este exceso proviene de normativas obsoletas de los años 60-70 que asumieron que "más luz = mejor". Hoy sabemos que la calidad (distribución, temperatura de color, control de deslumbramiento) importa más que la cantidad bruta.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌃 La paradoja de la iluminación nocturna</h3>
          <p>
            Las ciudades modernas tienen una iluminancia media de 5-20 lux en calles, pero en zonas rurales sin contaminación lumínica, la luz de luna llena proporciona solo 0.1 lux. Sin embargo, bajo la luna llena podemos caminar y ver siluetas claramente. Nuestros ojos se adaptan tan bien que una diferencia de 100x en iluminancia no se percibe tan dramáticamente como sugieren los números.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📺 Las pantallas "engañan" al ojo</h3>
          <p>
            Un monitor de 300 cd/m² mostrando una imagen de un faro no produce la iluminancia que tendría el faro real. La pantalla solo emite luz, no ilumina objetos a su alrededor como lo haría una fuente de luz real. Por eso puedes ver un "Sol" brillante en tu monitor sin que la habitación se ilumine: es luminancia sin iluminancia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏭 El método de los lúmenes puede fallar</h3>
          <p>
            El método de los lúmenes asume distribución uniforme, pero en espacios con geometría compleja (columnas, desniveles) puede errar en 50% o más. Por eso proyectos grandes usan software de simulación como DIALux o Relux, que calculan punto por punto usando trazado de rayos. Un diseño moderno puede requerir miles de cálculos para optimizar posición y tipo de luminarias.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            La iluminancia (E) mide la luz que incide sobre una superficie: E = Φ/A (unidad: lux, lx).
          </li>
          <li>
            Ley del inverso del cuadrado: E = I/r² describe cómo la iluminancia disminuye con la distancia.
          </li>
          <li>
            Ley del coseno de Lambert: E = (I·cos θ)/r² considera la incidencia oblicua.
          </li>
          <li>
            La luminancia (L) mide la luz emitida o reflejada: L = I/(A·cos θ) (unidad: cd/m²).
          </li>
          <li>
            El método de los lúmenes calcula luminarias: N = (E·A)/(F·CU·FM), considerando coeficiente de utilización y mantenimiento.
          </li>
        </ul>
      </div>
    </>
  );
};

export default IluminacionTeoria;
