import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions as consumoDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Consumo y Factura Eléctrica",
  descripcion: "Cómo se mide el consumo, qué son los kWh y cómo interpretar la factura de la luz",
  isTheoryOnly: false,
  educationLevel: "ESO",
  levels: ['ESO']
};

const ConsumoFactura = ({ exercises }) => {
  return (
    <>
      <Concept 
        title="¿Qué es el consumo eléctrico?" 
        color="blue"
        icon="💡"
      >
        <p>
          El consumo eléctrico es la cantidad de energía que utilizamos 
          en casa. Se mide en kilovatios-hora (kWh) y es lo que pagamos 
          en la factura de la luz.
        </p>
        <p>
          No es lo mismo potencia (W) que energía (Wh). 
          La potencia es la "velocidad" a la que consumimos, y la energía es el "total" 
          consumido durante un tiempo.
        </p>
        <div className="destacado">
          <p>
            💡 Analogía: La potencia es como la velocidad de un coche (km/h), 
            y la energía es como la distancia recorrida (km). Un coche a 100 km/h durante 
            2 horas recorre 200 km. Un aparato de 100W durante 2 horas consume 200 Wh.
          </p>
        </div>
      </Concept>

      {/* Potencia vs Energía */}
      <TheorySection title="Potencia vs Energía">
        <Concept title="Diferencia fundamental">
          <div className="conceptos-fundamentales">
            <div className="concepto-fundamental">
              <h4>⚡ Potencia (W)</h4>
              <p>
                Es la velocidad a la que se consume energía. 
                Se mide en vatios (W) o kilovatios (kW).
              </p>
              <p>Ejemplo: Una bombilla de 60W consume energía a razón de 60 julios por segundo.</p>
            </div>

            <div className="concepto-fundamental">
              <h4>🔋 Energía (Wh)</h4>
              <p>
                Es la cantidad total de energía consumida. 
                Se mide en vatios-hora (Wh) o kilovatios-hora (kWh).
              </p>
              <p>Ejemplo: Esa bombilla de 60W encendida 5 horas consume 300 Wh = 0.3 kWh.</p>
            </div>
          </div>

          <Formula 
            expression={String.raw`E = P \cdot t`}
            calculatorId="consumo_factura"
            definitions={consumoDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Potencia (P)", expression: String.raw`P = \frac{E}{t}` },
              { description: "Calcular Tiempo (t)", expression: String.raw`t = \frac{E}{P}` }
            ]}
          />
          
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>E: Energía consumida (Wh o kWh)</li>
            <li>P: Potencia del aparato (W o kW)</li>
            <li>t: Tiempo de funcionamiento (horas)</li>
          </ul>

          <Example title="Ejemplo: Televisor" icon="📺">
            <p>Un televisor de 150W encendido 4 horas al día:</p>
            <ul>
              <li>Potencia: P = 150W = 0.15 kW</li>
              <li>Tiempo: t = 4 horas</li>
              <li>Energía diaria: E = 0.15 kW × 4 h = 0.6 kWh</li>
              <li>Energía mensual: 0.6 × 30 = 18 kWh</li>
              <li>Coste mensual: 18 kWh × 0.15 €/kWh ≈ 2.7 €</li>
            </ul>
          </Example>
        </Concept>
      </TheorySection>

      {/* El kWh */}
      <TheorySection title="El Kilovatio-Hora (kWh)">
        <Concept title="La unidad de la factura">
          <p>
            El kWh es la unidad que mide el consumo eléctrico. 
            Representa la energía consumida por un aparato de 1000W (1 kW) funcionando 
            durante 1 hora.
          </p>

          {/* Gráfico SVG explicativo */}
          <div className="svg-container" style={{textAlign: 'center', margin: '20px 0'}}>
            <svg width="500" height="300" viewBox="0 0 500 300">
              <text x="150" y="25" fontSize="16" fontWeight="bold">¿Qué es 1 kWh?</text>
              
              {/* Ejemplos visuales */}
              <g>
                <text x="20" y="60" fontSize="14" fontWeight="bold">1 kWh equivale a:</text>
                
                {/* Bombilla */}
                <circle cx="50" cy="100" r="20" fill="#FFD700" stroke="#FFA500" strokeWidth="2"/>
                <text x="40" y="105" fontSize="16">💡</text>
                <text x="80" y="105" fontSize="12">Bombilla de 100W durante 10 horas</text>
                
                {/* TV */}
                <rect x="30" y="140" width="40" height="30" fill="#333" stroke="#666" strokeWidth="2"/>
                <text x="35" y="160" fontSize="16">📺</text>
                <text x="80" y="160" fontSize="12">TV de 200W durante 5 horas</text>
                
                {/* Ordenador */}
                <rect x="30" y="190" width="40" height="30" fill="#555" stroke="#888" strokeWidth="2"/>
                <text x="35" y="210" fontSize="16">💻</text>
                <text x="80" y="210" fontSize="12">Ordenador de 500W durante 2 horas</text>
                
                {/* Horno */}
                <rect x="30" y="240" width="40" height="30" fill="#666" stroke="#999" strokeWidth="2"/>
                <text x="35" y="260" fontSize="16">🔥</text>
                <text x="80" y="260" fontSize="12">Horno de 2000W durante 30 minutos</text>
              </g>

              {/* Coste */}
              <g transform="translate(320, 60)">
                <rect x="0" y="0" width="160" height="100" fill="#e8f5e9" stroke="#4caf50" strokeWidth="2" rx="5"/>
                <text x="80" y="25" fontSize="14" fontWeight="bold" textAnchor="middle">Coste de 1 kWh</text>
                <text x="80" y="50" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#2e7d32">≈ 0.15 €</text>
                <text x="80" y="75" fontSize="10" textAnchor="middle">(precio medio en España)</text>
                <text x="80" y="90" fontSize="10" textAnchor="middle">Varía según tarifa y hora</text>
              </g>
            </svg>
          </div>

          <Important>
            <p>
              📊 Dato importante: Una casa española media consume entre 
              200-400 kWh al mes, lo que supone una factura de 30-60 € mensuales 
              (sin contar término fijo).
            </p>
          </Important>
        </Concept>
      </TheorySection>

      {/* El contador */}
      <TheorySection title="El Contador Eléctrico">
        <Concept title="Cómo se mide el consumo">
          <p>
            El contador eléctrico (o medidor) registra toda la energía 
            que entra en casa. Los contadores modernos son digitales y permiten lectura 
            remota.
          </p>

          <div className="info-box">
            <h3>Tipos de contadores</h3>
            <ul>
              <li>
                Analógicos (antiguos): Disco giratorio que cuenta kWh. 
                Velocidad de giro = potencia consumida
              </li>
              <li>
                Digitales: Pantalla LCD con lectura directa en kWh
              </li>
              <li>
                Smart meters: Envían datos en tiempo real a la compañía. 
                Permiten discriminación horaria
              </li>
            </ul>
          </div>

          <Example title="Leer el contador" icon="🔢">
            <p>Para calcular tu consumo mensual:</p>
            <ol>
              <li>Anota la lectura actual del contador (ej: 45678 kWh)</li>
              <li>Anota la lectura del mes pasado (ej: 45378 kWh)</li>
              <li>Resta: 45678 - 45378 = 300 kWh consumidos</li>
              <li>Multiplica por el precio: 300 × 0.15 = 45 € (aproximado)</li>
            </ol>
          </Example>
        </Concept>
      </TheorySection>

      {/* La factura */}
      <TheorySection title="La Factura de la Luz">
        <Concept title="Componentes de la factura" color="orange" icon="📄">
          <p>
            La factura eléctrica tiene varios conceptos. No solo pagas por lo que consumes:
          </p>

          <div className="conceptos-fundamentales">
            <div className="concepto-fundamental">
              <h4>⚡ Término de Energía</h4>
              <p>
                Lo que pagas por los kWh consumidos. Es la parte variable. 
                Precio: ≈0.12-0.18 €/kWh según tarifa y hora.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>🔌 Término de Potencia</h4>
              <p>
                Pago fijo por la potencia contratada (kW). Lo pagas aunque 
                no consumas nada. ≈3-4 € por kW contratado al mes.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>⚙️ Peajes y Cargos</h4>
              <p>
                Costes de transporte y distribución de electricidad. 
                Incluye mantenimiento de redes.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>💰 Impuestos</h4>
              <p>
                IVA (21%) e Impuesto Eléctrico (5.11%). 
                Se aplican sobre el total.
              </p>
            </div>
          </div>

          {/* Ejemplo de factura simplificado */}
          <div className="svg-container" style={{textAlign: 'center', margin: '20px 0'}}>
            <svg width="450" height="350" viewBox="0 0 450 350">
              <text x="150" y="25" fontSize="16" fontWeight="bold">Ejemplo de Factura</text>
              
              {/* Factura */}
              <rect x="50" y="40" width="350" height="280" fill="#fff" stroke="#333" strokeWidth="2" rx="5"/>
              
              {/* Encabezado */}
              <rect x="50" y="40" width="350" height="40" fill="#1976d2" rx="5"/>
              <text x="225" y="65" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">FACTURA ELÉCTRICA - Marzo 2024</text>
              
              {/* Consumo */}
              <text x="70" y="110" fontSize="12" fontWeight="bold">Consumo de energía:</text>
              <text x="70" y="130" fontSize="11">300 kWh × 0.15 €/kWh</text>
              <text x="350" y="130" fontSize="11" textAnchor="end">45.00 €</text>
              
              {/* Potencia */}
              <text x="70" y="160" fontSize="12" fontWeight="bold">Término de potencia:</text>
              <text x="70" y="180" fontSize="11">4.6 kW × 3.5 €/kW</text>
              <text x="350" y="180" fontSize="11" textAnchor="end">16.10 €</text>
              
              {/* Peajes */}
              <text x="70" y="210" fontSize="12" fontWeight="bold">Peajes y cargos:</text>
              <text x="350" y="210" fontSize="11" textAnchor="end">8.50 €</text>
              
              {/* Subtotal */}
              <line x1="70" y1="225" x2="380" y2="225" stroke="#333" strokeWidth="1"/>
              <text x="70" y="245" fontSize="12" fontWeight="bold">Subtotal:</text>
              <text x="350" y="245" fontSize="12" fontWeight="bold" textAnchor="end">69.60 €</text>
              
              {/* Impuestos */}
              <text x="70" y="265" fontSize="11">Impuesto eléctrico (5.11%)</text>
              <text x="350" y="265" fontSize="11" textAnchor="end">3.56 €</text>
              <text x="70" y="280" fontSize="11">IVA (21%)</text>
              <text x="350" y="280" fontSize="11" textAnchor="end">15.36 €</text>
              
              {/* Total */}
              <line x1="70" y1="290" x2="380" y2="290" stroke="#333" strokeWidth="2"/>
              <text x="70" y="310" fontSize="14" fontWeight="bold">TOTAL A PAGAR:</text>
              <text x="350" y="310" fontSize="16" fontWeight="bold" fill="#d32f2f" textAnchor="end">88.52 €</text>
            </svg>
          </div>

          <Important>
            <p>
              💡 Consejo: Revisa tu potencia contratada. Muchas casas 
              tienen más potencia de la necesaria y pagan de más cada mes. Con 3.45 kW 
              suele ser suficiente para pisos pequeños.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      {/* Tarifas */}
      <TheorySection title="Tipos de Tarifas">
        <Concept title="Discriminación horaria">
          <p>
            Existen diferentes tarifas según cuándo consumes electricidad:
          </p>

          <div className="info-box">
            <h3>Tarifa 2.0TD (Discriminación horaria)</h3>
            <ul>
              <li>
                Punta (🔴): 10h-14h y 18h-22h laborables. 
                Precio más caro (≈0.18 €/kWh)
              </li>
              <li>
                Llano (🟡): 8h-10h, 14h-18h, 22h-24h laborables. 
                Precio medio (≈0.13 €/kWh)
              </li>
              <li>
                Valle (🟢): 0h-8h todos los días + fines de semana. 
                Precio barato (≈0.08 €/kWh)
              </li>
            </ul>
          </div>

          <Example title="Ahorro con discriminación horaria" icon="💰">
            <p>Lavadora de 2000W durante 1.5 horas (3 kWh):</p>
            <ul>
              <li>En hora punta: 3 × 0.18 = 0.54 €</li>
              <li>En hora valle: 3 × 0.08 = 0.24 €</li>
              <li>Ahorro: 0.30 € por lavado (55% menos)</li>
            </ul>
            <p>Si lavas 4 veces por semana en valle: ahorro de ≈5 €/mes</p>
          </Example>
        </Concept>
      </TheorySection>

      {/* Cálculos prácticos */}
      <TheorySection title="Cálculos de Consumo">
        <Concept title="Estimar el gasto de aparatos">
          <p>
            Para saber cuánto te cuesta cada aparato, usa esta fórmula:
          </p>

          <Formula 
            expression={String.raw`\text{Coste} = P \cdot t \cdot \text{precio}`}
            calculatorId="consumo_factura"
            definitions={consumoDefinitions}
            exercises={exercises}
          />

          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>Coste: Coste total (€)</li>
            <li>P: Potencia (kW)</li>
            <li>t: Tiempo (horas)</li>
            <li>precio: Precio del kWh (€/kWh)</li>
          </ul>

          <Example title="Ejemplo: Aire acondicionado" icon="❄️">
            <p>Aire acondicionado de 2500W usado 6 horas al día en verano (30 días):</p>
            <ul>
              <li>Potencia: 2.5 kW</li>
              <li>Tiempo mensual: 6 h/día × 30 días = 180 h</li>
              <li>Energía: 2.5 kW × 180 h = 450 kWh</li>
              <li>Coste: 450 × 0.15 = 67.5 € al mes</li>
            </ul>
            <p>¡El aire acondicionado puede duplicar la factura en verano!</p>
          </Example>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h3>💡 Consejos para Reducir la Factura</h3>
        <ul>
          <li>
            Revisa tu potencia contratada: Quizás puedes bajarla y 
            ahorrar en el término fijo
          </li>
          <li>
            Usa discriminación horaria: Pon lavadora, lavavajillas y 
            carga de coches eléctricos en hora valle
          </li>
          <li>
            Conoce tus consumos: Identifica qué aparatos gastan más 
            y úsalos con moderación
          </li>
          <li>
            Compara tarifas: El mercado libre puede ofrecer mejores 
            precios que el regulado
          </li>
          <li>
            Electrodomésticos eficientes: Clase A consume 3 veces 
            menos que clase D
          </li>
        </ul>
      </div>

      <div className="theory-history-section">
        <h3>📜 Historia del Contador Eléctrico</h3>
        <p>
          El primer contador eléctrico fue inventado por Samuel Gardiner en 1872, pero era 
          muy impreciso. El contador de inducción moderno, con disco giratorio, fue patentado 
          por Oliver Shallenberger en 1888 y se usó durante más de 100 años.
        </p>
        <p>
          En España, los contadores digitales (smart meters) se empezaron a instalar masivamente 
          a partir de 2018. Para 2024, más del 90% de hogares tienen contador digital, permitiendo 
          la lectura remota y las tarifas de discriminación horaria.
        </p>
      </div>

      <div className="theory-anecdotes-section">
        <h3>💡 Curiosidades</h3>
        <p>
          El término "kilovatio-hora" puede parecer confuso porque mezcla potencia (kilovatio) 
          con tiempo (hora). Se eligió porque es más intuitivo que usar julios (la unidad del 
          Sistema Internacional). 1 kWh = 3.6 millones de julios.
        </p>
        <p>
          En los años 80, algunas personas intentaban "ralentizar" el contador poniendo imanes 
          cerca del disco. Esto funcionaba con contadores antiguos, pero los modernos son 
          inmunes a estos trucos y además detectan manipulaciones, lo cual es ilegal y puede 
          conllevar multas de hasta 6000 €.
        </p>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>La energía (kWh) es potencia × tiempo: E = P × t</li>
          <li>El kWh es la unidad de consumo que pagas en la factura</li>
          <li>El contador mide toda la energía que entra en casa</li>
          <li>La factura incluye: energía, potencia, peajes e impuestos</li>
          <li>Las tarifas horarias permiten ahorrar consumiendo en valle</li>
          <li>Conocer tu consumo te ayuda a reducir la factura</li>
        </ul>
      </div>
    </>
  );
};

export default ConsumoFactura;
