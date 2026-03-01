import { Concept, Example, Formula, Important, TheorySection } from '../../../../../components/TheoryV2';

import { definitions as consumoDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Consumo Doméstico",
  descripcion: "Electricidad y calefacción en el hogar: cálculo y ahorro",
  isTheoryOnly: false,
  educationLevel: "ESO",
  levels: ['ESO']
};

const ConsumoDomesticoTeoria = ({ exercises }) => {
  return (
    <TheorySection
      title="Consumo Doméstico"
      emoji="🏠"
      nivel="ESO"
    >

      {/* Concepto 1: Consumo eléctrico en el hogar */}
      <Concept title="¿Cuánta electricidad consumimos?" emoji="⚡">
        <p>
          El consumo eléctrico de un hogar depende del número de dispositivos,
          su potencia y las horas de uso. Entender cómo calcularlo te permite identificar dónde
          ahorrar energía y dinero.
        </p>

        <Formula
          expression="E = P \times t"
          calculatorId="energia-consumida"
          definitions={consumoDefinitions}
          exercises={exercises}
        />

        <p>Donde:</p>
        <ul>
          <li>E: Energía consumida (kWh)</li>
          <li>P: Potencia del dispositivo (W o kW)</li>
          <li>t: Tiempo de uso (h)</li>
        </ul>

        <h4>Consumo medio de una vivienda en España:</h4>
        <ul>
          <li>📊 Consumo anual: 3,500 kWh (media nacional)</li>
          <li>💰 Coste anual: 525-700 € (según tarifa)</li>
          <li>📅 Consumo mensual: ~290 kWh</li>
          <li>⚡ Consumo diario: ~9.6 kWh</li>
        </ul>

        <h4>Distribución del consumo por áreas:</h4>
        <div className="consumption-breakdown">
          <div className="consumption-item">
            <span className="emoji">❄️</span>
            Climatización (calor/frío): 47%
          </div>
          <div className="consumption-item">
            <span className="emoji">🔥</span>
            Agua caliente: 18%
          </div>
          <div className="consumption-item">
            <span className="emoji">🍳</span>
            Cocina: 9%
          </div>
          <div className="consumption-item">
            <span className="emoji">💡</span>
            Iluminación: 11%
          </div>
          <div className="consumption-item">
            <span className="emoji">📺</span>
            Electrodomésticos: 15%
          </div>
        </div>

        <Example>
          Consumo de un televisor:<br/>
          TV LED 55" de 100W encendida 4 horas al día:<br/>
          • Energía diaria: 100W × 4h = 400 Wh = 0.4 kWh<br/>
          • Energía mensual: 0.4 × 30 = 12 kWh<br/>
          • Energía anual: 0.4 × 365 = 146 kWh<br/>
          • Coste anual: 146 × 0.15 €/kWh = 21.9 €/año
        </Example>

        <Important>
          La climatización (calefacción y aire acondicionado) es el mayor consumo en un hogar.
          Pequeñas mejoras en aislamiento o ajustes de temperatura suponen grandes ahorros.
        </Important>
      </Concept>

      {/* Concepto 2: Calcular el coste de la electricidad */}
      <Concept title="¿Cuánto me cuesta la electricidad?" emoji="💰">
        <p>
          Conocer el coste real de usar cada electrodoméstico te ayuda a tomar
          decisiones conscientes sobre tu consumo energético.
        </p>

        <Formula
          expression="\text{Coste} = E \times \text{Precio}_{kWh}"
          calculatorId="coste-electricidad"
          definitions={consumoDefinitions}
          exercises={exercises}
        />

        <p>Donde:</p>
        <ul>
          <li>Coste: Coste total en euros (€)</li>
          <li>E: Energía consumida (kWh)</li>
          <li>Precio_kWh: Precio de la electricidad (€/kWh)</li>
        </ul>

        <h4>Componentes de la factura eléctrica:</h4>
        <ul>
          <li>⚡ Término de energía: Lo que pagas por los kWh consumidos (~0.12-0.18 €/kWh)</li>
          <li>📊 Término de potencia: Lo que pagas por la potencia contratada (~3-4 €/kW/mes)</li>
          <li>🏛️ Impuestos: IVA (21%) e impuesto eléctrico (5.11%)</li>
        </ul>

        <div className="appliance-costs">
          <h5>Coste anual de electrodomésticos comunes (a 0.15 €/kWh):</h5>
          <table className="cost-table" style={{width: '100%'}}>
            <thead>
              <tr>
                <th>Electrodoméstico</th>
                <th>Potencia</th>
                <th>Uso/día</th>
                <th>kWh/año</th>
                <th>€/año</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>❄️ Frigorífico A++</td>
                <td>150W</td>
                <td>24h</td>
                <td>1,314</td>
                <td>197 €</td>
              </tr>
              <tr>
                <td>🌀 Lavadora (200 ciclos)</td>
                <td>2000W</td>
                <td>1.5h</td>
                <td>600</td>
                <td>90 €</td>
              </tr>
              <tr>
                <td>🍽️ Lavavajillas (220 ciclos)</td>
                <td>1800W</td>
                <td>1.5h</td>
                <td>594</td>
                <td>89 €</td>
              </tr>
              <tr>
                <td>📺 TV 55" LED</td>
                <td>100W</td>
                <td>4h</td>
                <td>146</td>
                <td>22 €</td>
              </tr>
              <tr>
                <td>💻 Ordenador portátil</td>
                <td>65W</td>
                <td>6h</td>
                <td>142</td>
                <td>21 €</td>
              </tr>
              <tr>
                <td>🔥 Horno eléctrico</td>
                <td>2500W</td>
                <td>0.5h</td>
                <td>456</td>
                <td>68 €</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Example>
          Comparación de secado de ropa:<br/>
          • Secadora eléctrica (2500W, 1.5h): 3.75 kWh × 100 usos/año = 375 kWh = 56 €/año<br/>
          • Tender al aire: 0 kWh = 0 €/año<br/>
          Ahorro: 56 €/año + reduces tu huella de carbono en 150 kg CO₂
        </Example>
      </Concept>

      {/* Concepto 3: Consumo fantasma (standby) */}
      <Concept title="Consumo fantasma: El enemigo invisible" emoji="👻">
        <p>
          Muchos dispositivos siguen consumiendo energía aunque estén "apagados" si permanecen
          en modo standby (espera). Este consumo fantasma puede representar
          el 7-11% de tu factura eléctrica.
        </p>

        <Formula
          expression="E_{standby} = P_{standby} \times 24 \times 365"
          calculatorId="consumo-standby"
          definitions={consumoDefinitions}
          exercises={exercises}
        />

        <p>Donde:</p>
        <ul>
          <li>E_standby: Energía consumida en standby anual (kWh)</li>
          <li>P_standby: Potencia en standby (W)</li>
          <li>24: Horas al día</li>
          <li>365: Días al año</li>
        </ul>

        <h4>Dispositivos con consumo standby:</h4>
        <table className="standby-table" style={{width: '100%'}}>
          <thead>
            <tr>
              <th>Dispositivo</th>
              <th>Standby</th>
              <th>kWh/año</th>
              <th>€/año</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>📺 TV + decodificador</td>
              <td>10W</td>
              <td>88</td>
              <td>13 €</td>
            </tr>
            <tr>
              <td>💻 PC + pantalla</td>
              <td>8W</td>
              <td>70</td>
              <td>10.5 €</td>
            </tr>
            <tr>
              <td>📱 Cargadores (5 unid.)</td>
              <td>5W</td>
              <td>44</td>
              <td>6.6 €</td>
            </tr>
            <tr>
              <td>☕ Cafetera</td>
              <td>3W</td>
              <td>26</td>
              <td>3.9 €</td>
            </tr>
            <tr>
              <td>🎮 Consola + router</td>
              <td>12W</td>
              <td>105</td>
              <td>15.8 €</td>
            </tr>
            <tr>
              <td>🎵 Equipo de música</td>
              <td>5W</td>
              <td>44</td>
              <td>6.6 €</td>
            </tr>
            <tr className="total-row">
              <td>TOTAL hogar típico</td>
              <td>43W</td>
              <td>377</td>
              <td>56 €</td>
            </tr>
          </tbody>
        </table>

        <h4>Soluciones para eliminar el consumo fantasma:</h4>
        <ul>
          <li>🔌 Regletas con interruptor: Apaga varios dispositivos a la vez</li>
          <li>⏲️ Regletas con temporizador: Cortan automáticamente por la noche</li>
          <li>🔍 Medidor de consumo: Identifica vampiros energéticos (~15€)</li>
          <li>🔌 Desenchufar cargadores: Cuando no estés cargando nada</li>
        </ul>

        <Important>
          Una familia media puede ahorrar 50-80 €/año simplemente apagando completamente
          los dispositivos en lugar de dejarlos en standby. Es dinero tirado literalmente.
        </Important>

        <Example>
          Ahorro con regletas:<br/>
          Instalas 3 regletas con interruptor (salón, dormitorio, oficina):<br/>
          • Inversión: 3 × 8€ = 24€<br/>
          • Ahorro anual: 60€<br/>
          • Amortización: 5 meses<br/>
          • Ahorro en 10 años: 600€ - 24€ = 576€
        </Example>
      </Concept>

      {/* Concepto 4: Calefacción y climatización */}
      <Concept title="Calefacción: El mayor consumo del hogar" emoji="🔥">
        <p>
          La calefacción representa casi la mitad del consumo energético de una
          vivienda. Pequeños ajustes en temperatura y aislamiento generan grandes ahorros.
        </p>

        <Formula
          expression="E_{\text{calefacción}} = P \times h \times \text{días}"
          calculatorId="consumo-calefaccion"
          definitions={consumoDefinitions}
          exercises={exercises}
        />

        <p>Donde:</p>
        <ul>
          <li>E_calefacción: Energía consumida en calefacción (kWh)</li>
          <li>P: Potencia de calefacción (kW)</li>
          <li>h: Horas diarias de uso</li>
          <li>días: Días de temporada de calefacción</li>
        </ul>

        <h4>Tipos de calefacción y consumo:</h4>
        <div className="heating-types">
          <div className="heating-card">
            <h5>🔥 Caldera de gas</h5>
            <p>Potencia: 15-25 kW</p>
            <p>Eficiencia: 85-98%</p>
            <p>Coste: ~800€/año (gas)</p>
            <p>CO₂: Medio (combustible fósil)</p>
          </div>

          <div className="heating-card">
            <h5>⚡ Radiadores eléctricos</h5>
            <p>Potencia: 1000-2000W/unidad</p>
            <p>Eficiencia: ~100% (pero caro)</p>
            <p>Coste: ~1,200€/año</p>
            <p>CO₂: Depende del mix eléctrico</p>
          </div>

          <div className="heating-card highlight">
            <h5>♨️ Bomba de calor</h5>
            <p>Potencia: 2-5 kW</p>
            <p>Eficiencia: 300-400% (COP 3-4)</p>
            <p>Coste: ~400€/año</p>
            <p>CO₂: Bajo (muy eficiente)</p>
          </div>

          <div className="heating-card">
            <h5>🌱 Biomasa (pellets)</h5>
            <p>Potencia: 8-15 kW</p>
            <p>Eficiencia: 85-95%</p>
            <p>Coste: ~600€/año</p>
            <p>CO₂: Neutro (renovable)</p>
          </div>
        </div>

        <Important>
          Las bombas de calor son hasta 3 veces más eficientes que la calefacción eléctrica
          tradicional. Por cada kWh eléctrico consumido, transfieren 3-4 kWh de calor.
        </Important>

        <h4>Temperaturas recomendadas:</h4>
        <ul>
          <li>🏠 Día (estancia): 20-21°C</li>
          <li>😴 Noche (dormitorio): 15-17°C</li>
          <li>🚪 Ausencias cortas: 15°C</li>
          <li>🏖️ Vacaciones: Apagada o antiheladas (7°C)</li>
        </ul>

        <Formula
          expression="\text{Ahorro} = \text{Coste actual} \times 0.07 \times \Delta T"
          calculatorId="ahorro-temperatura"
          definitions={consumoDefinitions}
          exercises={exercises}
        />

        <p>Donde:</p>
        <ul>
          <li>Ahorro: Ahorro anual en euros (€/año)</li>
          <li>Coste actual: Coste actual de calefacción (€/año)</li>
          <li>ΔT: Reducción de temperatura (°C)</li>
          <li>0.07: Factor de ahorro (7% por cada grado)</li>
        </ul>

        <Example>
          Impacto de la temperatura:<br/>
          Familia que calentaba su casa a 23°C, baja a 20°C:<br/>
          • Reducción: 3°C<br/>
          • Ahorro: 3 × 7% = 21%<br/>
          • Si gastaban 1,000€/año en calefacción: ahorran 210€/año<br/>
          • En 10 años: 2,100€ de ahorro + mayor confort (menos ambiente cargado)
        </Example>

        <h4>Consejos para ahorrar en calefacción:</h4>
        <ul>
          <li>🌡️ Termostato programable: Baja temperatura cuando no estés (15-30% ahorro)</li>
          <li>🪟 Ventilación eficiente: 10 min ventana abierta, no todo el día entreabierta</li>
          <li>🎯 Calefacción por zonas: Solo calienta habitaciones ocupadas</li>
          <li>🪟 Cortinas y persianas: Cierra por la noche (reduce pérdidas 10-15%)</li>
          <li>🏗️ Aislamiento: Ventanas dobles, puertas, paredes (30-50% ahorro)</li>
          <li>🔧 Purgar radiadores: Elimina aire para mejor eficiencia</li>
          <li>🧥 Vístete adecuadamente: 1-2°C menos con ropa abrigada</li>
        </ul>
      </Concept>

    </TheorySection>
  );
};

export default ConsumoDomesticoTeoria;
