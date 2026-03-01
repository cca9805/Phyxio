import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions as aparatosDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Aparatos Eléctricos",
  descripcion: "Potencia, eficiencia y clasificación energética de electrodomésticos",
  isTheoryOnly: false,
  educationLevel: "ESO",
  levels: ['ESO']
};

const AparatosElectricos = ({ exercises }) => {
  return (
    <>
      <Concept 
        title="Los electrodomésticos en casa" 
        color="blue"
        icon="⚡"
      >
        <p>
          Los aparatos eléctricos transforman la energía eléctrica en 
          otras formas de energía útiles: luz, calor, movimiento, frío, sonido...
        </p>
        <p>
          Cada aparato tiene una potencia (W) que indica cuánta energía 
          consume por segundo, y una eficiencia que indica qué porcentaje 
          de esa energía se aprovecha realmente.
        </p>
        <div className="destacado">
          <p>
            💡 Idea clave: No todos los aparatos consumen igual. 
            Los que producen calor (hornos, calefactores) son los que más gastan.
          </p>
        </div>
      </Concept>

      {/* Clasificación por potencia */}
      <TheorySection title="Clasificación por Potencia">
        <Concept title="¿Cuánto consume cada aparato?">
          <p>
            Los aparatos se pueden clasificar según su potencia en tres categorías:
          </p>

          {/* Gráfico SVG de consumos */}
          <div className="svg-container" style={{textAlign: 'center', margin: '20px 0'}}>
            <svg width="550" height="400" viewBox="0 0 550 400">
              <text x="180" y="25" fontSize="16" fontWeight="bold">Potencia de Electrodomésticos</text>
              
              {/* Bajo consumo */}
              <g>
                <rect x="20" y="50" width="500" height="100" fill="#e8f5e9" stroke="#4caf50" strokeWidth="2" rx="5"/>
                <text x="30" y="75" fontSize="14" fontWeight="bold" fill="#2e7d32">🟢 BAJO CONSUMO (0-100W)</text>
                
                <text x="40" y="100" fontSize="11">💡 Bombilla LED: 10W</text>
                <text x="40" y="120" fontSize="11">📱 Cargador móvil: 20W</text>
                <text x="40" y="140" fontSize="11">📻 Radio: 30W</text>
                
                <text x="280" y="100" fontSize="11">💻 Portátil: 60W</text>
                <text x="280" y="120" fontSize="11">🖥️ Monitor: 40W</text>
                <text x="280" y="140" fontSize="11">📺 TV LED pequeña: 80W</text>
              </g>
              
              {/* Consumo medio */}
              <g transform="translate(0, 160)">
                <rect x="20" y="0" width="500" height="100" fill="#fff3e0" stroke="#ff9800" strokeWidth="2" rx="5"/>
                <text x="30" y="25" fontSize="14" fontWeight="bold" fill="#e65100">🟡 CONSUMO MEDIO (100-1000W)</text>
                
                <text x="40" y="50" fontSize="11">🖥️ PC gaming: 500W</text>
                <text x="40" y="70" fontSize="11">🌀 Ventilador: 75W</text>
                <text x="40" y="90" fontSize="11">❄️ Nevera: 150-200W</text>
                
                <text x="280" y="50" fontSize="11">📺 TV grande: 200W</text>
                <text x="280" y="70" fontSize="11">🔊 Equipo música: 300W</text>
                <text x="280" y="90" fontSize="11">🍞 Tostadora: 800W</text>
              </g>
              
              {/* Alto consumo */}
              <g transform="translate(0, 270)">
                <rect x="20" y="0" width="500" height="110" fill="#ffebee" stroke="#f44336" strokeWidth="2" rx="5"/>
                <text x="30" y="25" fontSize="14" fontWeight="bold" fill="#c62828">🔴 ALTO CONSUMO (&gt;1000W)</text>
                
                <text x="40" y="50" fontSize="11">🔥 Horno: 2000-3000W</text>
                <text x="40" y="70" fontSize="11">🌡️ Calefactor: 2000W</text>
                <text x="40" y="90" fontSize="11">💨 Secador pelo: 2000W</text>
                
                <text x="280" y="50" fontSize="11">❄️ Aire acondicionado: 2500W</text>
                <text x="280" y="70" fontSize="11">👕 Lavadora: 2000W</text>
                <text x="280" y="90" fontSize="11">🍳 Vitrocerámica: 6000W</text>
              </g>
            </svg>
          </div>

          <Important>
            <p>
              🔥 Regla de oro: Los aparatos que producen calor 
              (hornos, calefactores, secadores) son siempre los que más consumen. 
              El calor es la forma de energía más "cara" de producir.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      {/* Etiqueta energética */}
      <TheorySection title="Etiqueta Energética">
        <Concept title="Clasificación de eficiencia">
          <p>
            La etiqueta energética clasifica los electrodomésticos según 
            su eficiencia. Desde 2021, la escala va de A (mejor) a 
            G (peor).
          </p>

          {/* SVG de etiqueta energética */}
          <div className="svg-container" style={{textAlign: 'center', margin: '20px 0'}}>
            <svg width="400" height="450" viewBox="0 0 400 450">
              <text x="120" y="25" fontSize="16" fontWeight="bold" fill="#f4f3f7ff">Etiqueta Energética</text>
              
              {/* Etiqueta */}
              <rect x="100" y="50" width="300" height="350" fill="white" stroke="#333" strokeWidth="2" rx="5"/>
              
              {/* Clases energéticas */}
              <g transform="translate(110, 80)">
                {/* A - Verde oscuro */}
                <rect x="0" y="0" width="180" height="35" fill="#0d7d3f"/>
                <text x="10" y="23" fontSize="20" fontWeight="bold" fill="white">A</text>
                <text x="190" y="23" fontSize="12" fill="#000">Excelente</text>
                
                {/* B - Verde */}
                <rect x="0" y="40" width="160" height="35" fill="#3fa037"/>
                <text x="10" y="63" fontSize="20" fontWeight="bold" fill="white">B</text>
                <text x="170" y="63" fontSize="12" fill="#000">Muy bueno</text>
                
                {/* C - Verde claro */}
                <rect x="0" y="80" width="140" height="35" fill="#8cc63f"/>
                <text x="10" y="103" fontSize="20" fontWeight="bold" fill="white">C</text>
                <text x="150" y="103" fontSize="12" fill="#000">Bueno</text>
                
                {/* D - Amarillo */}
                <rect x="0" y="120" width="120" height="35" fill="#ffd500"/>
                <text x="10" y="143" fontSize="20" fontWeight="bold" fill="black">D</text>
                <text x="130" y="143" fontSize="12" fill="#000">Regular</text>
                
                {/* E - Naranja */}
                <rect x="0" y="160" width="100" height="35" fill="#ff9900"/>
                <text x="10" y="183" fontSize="20" fontWeight="bold" fill="white">E</text>
                <text x="110" y="183" fontSize="12" fill="#000">Malo</text>
                
                {/* F - Naranja oscuro */}
                <rect x="0" y="200" width="80" height="35" fill="#ff6600"/>
                <text x="10" y="223" fontSize="20" fontWeight="bold" fill="white">F</text>
                <text x="90" y="223" fontSize="12" fill="#000">Muy malo</text>
                
                {/* G - Rojo */}
                <rect x="0" y="240" width="60" height="35" fill="#cc0000"/>
                <text x="10" y="263" fontSize="20" fontWeight="bold" fill="white">G</text>
                <text x="70" y="263" fontSize="12" fill="#000">Pésimo</text>
              </g>
              
              {/* Información adicional */}
              <text x="120" y="420" fontSize="11" textAnchor="middle" fill="#8a70fdff">Consumo anual: XXX kWh</text>
              <text x="120" y="440" fontSize="11" textAnchor="middle" fill="#8a70fdff">Nivel de ruido: XX dB</text>
            </svg>
          </div>

          <Example title="Diferencia de consumo" icon="💰">
            <p>Nevera de 300 litros funcionando todo el año:</p>
            <ul>
              <li>Clase A: 150 kWh/año → 22.5 €/año</li>
              <li>Clase D: 300 kWh/año → 45 €/año</li>
              <li>Clase G: 450 kWh/año → 67.5 €/año</li>
            </ul>
            <p>
              Ahorro A vs G: 45 €/año. En 10 años: 450 € de ahorro. 
              ¡Compensa pagar más por un aparato eficiente!
            </p>
          </Example>
        </Concept>
      </TheorySection>

      {/* Tipos de aparatos */}
      <TheorySection title="Tipos de Aparatos según su Función">
        <Concept title="Transformaciones de energía">
          <div className="conceptos-fundamentales">
            <div className="concepto-fundamental">
              <h4>🔥 Aparatos de Calor (Resistivos)</h4>
              <p>
                Transforman electricidad en calor mediante resistencias. 
                Son los más consumidores pero muy eficientes (≈100% de la energía se convierte en calor).
              </p>
              <p>Ejemplos: Horno, calefactor, plancha, secador, tostadora</p>
            </div>

            <div className="concepto-fundamental">
              <h4>❄️ Aparatos de Frío (Compresores)</h4>
              <p>
                Usan un compresor para mover calor de dentro hacia fuera. 
                Consumen menos que los de calor pero funcionan continuamente.
              </p>
              <p>Ejemplos: Nevera, congelador, aire acondicionado</p>
            </div>

            <div className="concepto-fundamental">
              <h4>🌀 Aparatos de Movimiento (Motores)</h4>
              <p>
                Transforman electricidad en movimiento mediante motores eléctricos. 
                Eficiencia variable (60-90%).
              </p>
              <p>Ejemplos: Lavadora, lavavajillas, ventilador, batidora</p>
            </div>

            <div className="concepto-fundamental">
              <h4>💡 Aparatos de Luz</h4>
              <p>
                Producen luz. Las LED son muy eficientes (90% menos consumo 
                que incandescentes).
              </p>
              <p>Ejemplos: Bombillas LED, fluorescentes, pantallas</p>
            </div>

            <div className="concepto-fundamental">
              <h4>🖥️ Aparatos Electrónicos</h4>
              <p>
                Procesan información. Consumen poco pero están muchas horas encendidos.
              </p>
              <p>Ejemplos: Ordenadores, TV, móviles, routers</p>
            </div>
          </div>
        </Concept>
      </TheorySection>

      {/* Eficiencia */}
      <TheorySection title="Eficiencia Energética">
        <Concept title="¿Qué es la eficiencia?">
          <p>
            La eficiencia es el porcentaje de energía eléctrica que se 
            transforma en energía útil. El resto se pierde, normalmente como calor.
          </p>

          <Formula 
            expression={String.raw`\eta = \frac{E_{útil}}{E_{consumida}} \times 100\%`}
            calculatorId="aparatos_electricos"
            definitions={aparatosDefinitions}
            exercises={exercises}
          />
          
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>η (eta): Eficiencia energética (%)</li>
            <li>E_útil: Energía útil aprovechada (J o kWh)</li>
            <li>E_consumida: Energía eléctrica consumida (J o kWh)</li>
          </ul>

          <Example title="Eficiencias típicas" icon="⚡">
            <ul>
              <li>Calefactor eléctrico: 100% (toda la energía → calor)</li>
              <li>Bombilla LED: 90% (10% se pierde como calor)</li>
              <li>Motor eléctrico: 80-90%</li>
              <li>Bombilla incandescente: 5% (95% se pierde como calor)</li>
              <li>Cargador de móvil: 85%</li>
            </ul>
          </Example>

          <Important>
            <p>
              💡 Curiosidad: Las bombillas incandescentes son en realidad 
              "calefactores que dan algo de luz", no "luces que calientan un poco". 
              Solo el 5% de la energía se convierte en luz visible.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      {/* Consumo en standby */}
      <TheorySection title="Consumo en Standby">
        <Concept title="Los vampiros energéticos" color="red" icon="🧛">
          <p>
            Muchos aparatos consumen electricidad incluso cuando están "apagados". 
            Este consumo fantasma o standby puede representar el 
            10% de la factura.
          </p>

          <div className="info-box">
            <h3>Consumos típicos en standby</h3>
            <ul>
              <li>TV: 1-5W</li>
              <li>Ordenador (apagado): 2-8W</li>
              <li>Cargadores enchufados: 0.5-2W</li>
              <li>Microondas (reloj): 3W</li>
              <li>Router WiFi: 10W (siempre encendido)</li>
              <li>Consola de videojuegos: 10-15W</li>
            </ul>
          </div>

          <Example title="Cálculo de desperdicio" icon="💸">
            <p>Casa con 10 aparatos en standby (5W cada uno):</p>
            <ul>
              <li>Potencia total: 10 × 5W = 50W</li>
              <li>Energía diaria: 50W × 24h = 1.2 kWh</li>
              <li>Energía anual: 1.2 × 365 = 438 kWh</li>
              <li>Coste anual: 438 × 0.15 = 65.7 €</li>
            </ul>
            <p>
              Solución: Usar regletas con interruptor y apagar 
              completamente los aparatos que no uses.
            </p>
          </Example>
        </Concept>
      </TheorySection>

      {/* Cálculos prácticos */}
      <TheorySection title="Cálculos con Aparatos">
        <Concept title="Comparar aparatos">
          <p>
            Para decidir qué aparato comprar, calcula el coste total de propiedad 
            (precio + consumo durante su vida útil):
          </p>

          <Formula 
            expression={String.raw`\text{Coste total} = \text{Precio} + (E_{anual} \times \text{años} \times \text{precio kWh})`}
            calculatorId="aparatos_electricos"
            definitions={aparatosDefinitions}
            exercises={exercises}
          />

          <Example title="Nevera: ¿Clase A o Clase D?" icon="❄️">
            <p>Comparamos dos neveras para 10 años:</p>
            <div style={{ width: '100%', overflowX: 'auto' }}>
              <table style={{width: '100%', marginTop: '10px', borderCollapse: 'collapse'}}>
                <thead>
                  <tr style={{backgroundColor: '#f0f0f0'}}>
                    <th style={{padding: '8px', border: '1px solid #ddd', width: '40%'}}>Característica</th>
                    <th style={{padding: '8px', border: '1px solid #ddd', width: '30%'}}>Clase A</th>
                    <th style={{padding: '8px', border: '1px solid #ddd', width: '30%'}}>Clase D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>Precio compra</td>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>600 €</td>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>400 €</td>
                  </tr>
                  <tr>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>Consumo anual</td>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>150 kWh</td>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>300 kWh</td>
                  </tr>
                  <tr>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>Coste 10 años</td>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>225 €</td>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>450 €</td>
                  </tr>
                  <tr style={{backgroundColor: '#e8f5e9'}}>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>TOTAL</td>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>825 €</td>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>850 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{marginTop: '10px'}}>
              Conclusión: La nevera clase A es más cara al comprarla, 
              pero más barata a largo plazo. ¡Se amortiza en 10 años!
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h3>🛒 Consejos para Elegir Aparatos</h3>
        <ul>
          <li>
            Mira la etiqueta energética: Clase A puede ahorrar cientos 
            de euros en su vida útil
          </li>
          <li>
            Tamaño adecuado: Un aparato demasiado grande consume más 
            innecesariamente
          </li>
          <li>
            Funciones eco: Muchos aparatos tienen modos de bajo consumo
          </li>
          <li>
            Calcula el coste total: No solo el precio de compra, 
            también el consumo
          </li>
          <li>
            Evita el standby: Usa regletas con interruptor
          </li>
          <li>
            Mantenimiento: Aparatos limpios y bien mantenidos consumen menos
          </li>
        </ul>
      </div>

      <div className="theory-history-section">
        <h3>📜 Historia de la Etiqueta Energética</h3>
        <p>
          La etiqueta energética fue introducida en la Unión Europea en 1992 para informar 
          a los consumidores sobre el consumo de los electrodomésticos. Inicialmente solo 
          cubría neveras y congeladores.
        </p>
        <p>
          Con el tiempo, los fabricantes mejoraron tanto la eficiencia que aparecieron las 
          clases A+, A++ y A+++, creando confusión. En 2021 se reformó el sistema, volviendo 
          a una escala simple de A a G, con criterios más estrictos.
        </p>
      </div>

      <div className="theory-anecdotes-section">
        <h3>💡 Curiosidades</h3>
        <p>
          El término "standby" proviene de la industria aeronáutica, donde significa "listo 
          para despegar". En electrónica, se adoptó en los años 70 para televisores que 
          podían encenderse con mando a distancia sin levantarse del sofá.
        </p>
        <p>
          La bombilla incandescente, inventada por Edison en 1879, fue prohibida en la UE 
          en 2012 por su baja eficiencia. Una bombilla LED moderna consume 10 veces menos 
          y dura 25 veces más que una incandescente.
        </p>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>Los aparatos de calor son los que más consumen</li>
          <li>La etiqueta energética va de A (mejor) a G (peor)</li>
          <li>La eficiencia indica qué % de energía se aprovecha</li>
          <li>El standby puede suponer el 10% de la factura</li>
          <li>Calcula el coste total (compra + consumo) antes de elegir</li>
          <li>Aparatos eficientes se amortizan con el ahorro en consumo</li>
        </ul>
      </div>
    </>
  );
};

export default AparatosElectricos;
