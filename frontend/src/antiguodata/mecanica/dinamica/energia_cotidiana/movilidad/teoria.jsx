import { Concept, Example, Formula, Important, TheorySection } from '../../../../../components/TheoryV2';

import { definitions as movilidadDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Movilidad y Energía",
  descripcion: "Consumo energético y emisiones del transporte",
  isTheoryOnly: false,
  educationLevel: "ESO",
  levels: ['ESO']
};

const MovilidadTeoria = ({ exercises }) => {
  return (
    <TheorySection
      title="Movilidad y Energía"
      emoji="🚗"
      nivel="ESO"
    >

      {/* Concepto 1: Energía en el transporte */}
      <Concept title="El transporte: Gran consumidor de energía" emoji="🚗">
        <p>
          El transporte representa aproximadamente el 30% del consumo energético
          en países desarrollados y es responsable de una gran parte de las emisiones de gases de efecto invernadero.
        </p>

        <h4>Distribución del transporte:</h4>
        <ul>
          <li>🚗 Coches particulares: 60% del transporte por carretera</li>
          <li>🚚 Transporte de mercancías: 25%</li>
          <li>🚌 Autobuses y transporte público: 10%</li>
          <li>✈️ Aviación: 12% del transporte global</li>
          <li>🚢 Marítimo: 8%</li>
        </ul>

        <Important>
          Nuestras elecciones de movilidad tienen un impacto directo en el consumo energético
          y las emisiones de CO₂. Pequeños cambios en hábitos de transporte generan grandes beneficios ambientales.
        </Important>
      </Concept>

      {/* Concepto 2: Emisiones por tipo de transporte */}
      <Concept title="¿Cuánto contamina cada medio de transporte?" emoji="💨">
        <p>
          Las emisiones de CO₂ varían enormemente según el medio de transporte.
          Medimos en gramos de CO₂ por kilómetro y por pasajero.
        </p>

        <Formula
          expression="\text{Emisiones} = \text{Distancia} \times \text{Factor}_{\text{emisión}}"
          calculatorId="emisiones-transporte"
          definitions={movilidadDefinitions}
          exercises={exercises}
        />

        <p>Donde:</p>
        <ul>
          <li>Emisiones: Emisiones totales de CO₂ (kg)</li>
          <li>Distancia: Distancia recorrida (km)</li>
          <li>Factor_emisión: Factor de emisión del transporte (g CO₂/km)</li>
        </ul>

        <h4>Emisiones típicas (g CO₂/km por pasajero):</h4>
        <table className="emissions-table">
          <thead>
            <tr>
              <th>Transporte</th>
              <th>g CO₂/km</th>
              <th>Comentario</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>🚶 Caminar / 🚴 Bicicleta</td>
              <td className="highlight-green">0</td>
              <td>Cero emisiones directas</td>
            </tr>
            <tr>
              <td>🚄 Tren eléctrico</td>
              <td className="highlight-green">14</td>
              <td>Muy eficiente</td>
            </tr>
            <tr>
              <td>🚌 Autobús urbano</td>
              <td>68</td>
              <td>Eficiente si va lleno</td>
            </tr>
            <tr>
              <td>🚗 Coche eléctrico</td>
              <td>50-70</td>
              <td>Depende del mix eléctrico</td>
            </tr>
            <tr>
              <td>🏍️ Moto (125cc)</td>
              <td>72</td>
              <td>Variable según cilindrada</td>
            </tr>
            <tr>
              <td>🚗 Coche gasolina (ocupación media 1.5)</td>
              <td className="highlight-yellow">130</td>
              <td>Más eficiente si compartes</td>
            </tr>
            <tr>
              <td>🚗 Coche diésel</td>
              <td className="highlight-yellow">120</td>
              <td>Similar a gasolina</td>
            </tr>
            <tr>
              <td>🚙 SUV gasolina</td>
              <td className="highlight-orange">180</td>
              <td>Mayor peso y resistencia</td>
            </tr>
            <tr>
              <td>✈️ Avión (vuelo corto)</td>
              <td className="highlight-red">285</td>
              <td>Muy contaminante</td>
            </tr>
            <tr>
              <td>✈️ Avión (vuelo largo)</td>
              <td className="highlight-orange">150</td>
              <td>Más eficiente que cortos</td>
            </tr>
          </tbody>
        </table>

        <Example>
          Viaje de 10 km al trabajo:<br/>
          • 🚶 Andando/🚴 Bici: 0 g CO₂<br/>
          • 🚄 Tren: 140 g CO₂<br/>
          • 🚌 Autobús: 680 g CO₂<br/>
          • 🚗 Coche solo: 1,300 g CO₂<br/>
          • 🚗 Coche compartido (4 personas): 325 g CO₂/persona<br/><br/>
          Al año (220 días laborables, ida y vuelta):<br/>
          • Coche solo: 5,720 kg CO₂ = 5.7 toneladas<br/>
          • Tren: 616 kg CO₂<br/>
          Diferencia: 5 toneladas CO₂ ahorradas
        </Example>

        <h4>Factores que afectan las emisiones:</h4>
        <ul>
          <li>🚗 Ocupación del vehículo: Más pasajeros = menos emisiones por persona</li>
          <li>⚡ Eficiencia del vehículo: Motores modernos más eficientes</li>
          <li>🏔️ Tipo de trayecto: Carretera &gt; ciudad (menos frenadas)</li>
          <li>🎯 Estilo de conducción: Conducción eficiente ahorra 10-15%</li>
          <li>💨 Velocidad: 120 km/h consume ~25% más que 100 km/h</li>
        </ul>
      </Concept>

      {/* Concepto 3: Comparación de opciones */}
      <Concept title="Elige tu transporte de forma inteligente" emoji="🔄">
        <p>
          Comparar diferentes medios de transporte te ayuda a tomar decisiones informadas
          sobre tu movilidad diaria, equilibrando tiempo, coste y impacto ambiental.
        </p>

        <Formula
          expression="\text{Comparación de transportes}"
          calculatorId="comparacion-transporte"
          definitions={movilidadDefinitions}
          exercises={exercises}
        />

        <p>Factores a comparar:</p>
        <ul>
          <li>Tiempo: Duración total del trayecto</li>
          <li>Coste: Precio del viaje (€)</li>
          <li>CO₂: Emisiones de carbono (kg CO₂)</li>
          <li>Comodidad: Nivel de confort del viaje</li>
        </ul>

        <Example>
          Trayecto Barcelona-Madrid (625 km):<br/><br/>

          ✈️ Avión:<br/>
          • Tiempo: 1h 15min vuelo + 2h aeropuerto = 3h 15min<br/>
          • Coste: 50-150€ (variable)<br/>
          • CO₂: 625 × 285 = 178 kg CO₂<br/><br/>

          🚄 Tren AVE:<br/>
          • Tiempo: 2h 30min (estación céntrica)<br/>
          • Coste: 60-120€<br/>
          • CO₂: 625 × 14 = 8.75 kg CO₂ (20x menos que avión)<br/><br/>

          🚗 Coche:<br/>
          • Tiempo: 6h<br/>
          • Coste: ~80€ gasolina + peajes 30€ = 110€<br/>
          • CO₂: 625 × 130 = 81.25 kg CO₂<br/><br/>

          Mejor opción: 🚄 Tren (rápido, económico, ecológico)
        </Example>

        <h4>Consejos de movilidad sostenible:</h4>

        <div className="mobility-tips">
          <div className="tip-card">
            <h5>🚶 Trayectos cortos (&lt;2 km)</h5>
            <p>Recomendación: Andando o en bici</p>
            <p>• Más rápido que coche en ciudad (tráfico + parking)</p>
            <p>• Ejercicio saludable</p>
            <p>• Cero emisiones y coste</p>
          </div>

          <div className="tip-card">
            <h5>🚌 Trayectos urbanos (2-15 km)</h5>
            <p>Recomendación: Transporte público</p>
            <p>• Autobús, metro, tranvía</p>
            <p>• 4-5x menos emisiones que coche</p>
            <p>• Más económico (abonos mensuales)</p>
          </div>

          <div className="tip-card">
            <h5>🚄 Distancias medias (50-700 km)</h5>
            <p>Recomendación: Tren</p>
            <p>• Más rápido que coche (puerta a puerta)</p>
            <p>• 10x menos emisiones que avión</p>
            <p>• Puedes trabajar/descansar durante el viaje</p>
          </div>

          <div className="tip-card">
            <h5>🚗 Cuando uses coche</h5>
            <p>Recomendaciones:</p>
            <p>• Comparte (carpooling): divide coste y emisiones</p>
            <p>• Conducción eficiente: ahorra 10-15% combustible</p>
            <p>• Mantenimiento: neumáticos, filtros</p>
            <p>• Considera coche eléctrico o híbrido</p>
          </div>
        </div>

        <h4>Conducción eficiente (eco-driving):</h4>
        <ul>
          <li>🎯 Anticipación: Frena menos, aprovecha inercia</li>
          <li>⚙️ Cambio de marcha: Gasolina &lt;2500 rpm, diésel &lt;2000 rpm</li>
          <li>🐌 Velocidad constante: Usa control de crucero en autopista</li>
          <li>🌀 Reduce carga aerodinámica: Cierra ventanillas &gt;80 km/h</li>
          <li>❄️ Aire acondicionado: Aumenta consumo 10-20%, úsalo con moderación</li>
          <li>🎒 Peso: 100 kg extras = 5% más consumo</li>
        </ul>

        <Important>
          Cambiar del coche al transporte público para tu trayecto diario puede ahorrar
          más de 1 tonelada de CO₂ al año, equivalente a plantar 50 árboles.
        </Important>
      </Concept>

      {/* Concepto 4: Vehículos eléctricos */}
      <Concept title="Movilidad eléctrica: El futuro" emoji="⚡">
        <p>
          Los vehículos eléctricos (EVs) están revolucionando el transporte.
          Aunque tienen mayor impacto ambiental en fabricación (por la batería), compensan
          ampliamente con menores emisiones durante su vida útil.
        </p>

        <h4>Ventajas de los vehículos eléctricos:</h4>
        <ul>
          <li>⚡ Eficiencia: 85-95% vs 20-30% motores combustión</li>
          <li>💨 Cero emisiones locales: Mejora calidad del aire urbano</li>
          <li>🔇 Silenciosos: Reducción de contaminación acústica</li>
          <li>💰 Coste operativo bajo: Electricidad más barata que gasolina</li>
          <li>🔧 Menos mantenimiento: Sin aceite, menos piezas móviles</li>
          <li>🚀 Aceleración inmediata: Par máximo desde 0 rpm</li>
        </ul>

        <h4>Consumo y emisiones reales:</h4>
        <div className="ev-comparison">
          <div className="comparison-card">
            <h5>🚗 Coche gasolina (compacto)</h5>
            <p>Consumo: 6 L/100km</p>
            <p>Coste: 6 × 1.5 €/L = 9 €/100km</p>
            <p>Emisiones: 130 g CO₂/km</p>
            <p>20,000 km/año: 1,800€ + 2.6 ton CO₂</p>
          </div>

          <div className="comparison-card highlight">
            <h5>⚡ Coche eléctrico (equivalente)</h5>
            <p>Consumo: 18 kWh/100km</p>
            <p>Coste: 18 × 0.15 €/kWh = 2.7 €/100km</p>
            <p>Emisiones: 50 g CO₂/km (mix español)</p>
            <p>20,000 km/año: 540€ + 1 ton CO₂</p>
          </div>
        </div>

        <p>Ahorro anual EV: 1,260€ + 1.6 toneladas CO₂</p>

        <Example>
          Análisis a 10 años (200,000 km):<br/><br/>

          Gasolina:<br/>
          • Compra: 25,000€<br/>
          • Combustible: 18,000€<br/>
          • Mantenimiento: 8,000€<br/>
          • Total: 51,000€<br/>
          • Emisiones: 26 toneladas CO₂<br/><br/>

          Eléctrico:<br/>
          • Compra: 35,000€<br/>
          • Electricidad: 5,400€<br/>
          • Mantenimiento: 3,000€<br/>
          • Total: 43,400€<br/>
          • Emisiones: 10 toneladas CO₂<br/><br/>

          Ahorro: 7,600€ + 16 toneladas CO₂
        </Example>

        <h4>Desafíos actuales:</h4>
        <ul>
          <li>💰 Precio inicial alto: Se compensa en 4-6 años de uso</li>
          <li>🔋 Autonomía limitada: 300-500 km (mejorando constantemente)</li>
          <li>⚡ Red de carga: En expansión rápida</li>
          <li>🕐 Tiempo de carga: 30-60 min carga rápida, 6-8h en casa</li>
          <li>♻️ Reciclaje baterías: Tecnología en desarrollo</li>
        </ul>

        <Important>
          Con el mix eléctrico actual de España (~50% renovables), un coche eléctrico ya emite
          60% menos CO₂ que uno de gasolina. Con renovables 100%, sería 95% menos emisiones.
        </Important>
      </Concept>

    </TheorySection>
  );
};

export default MovilidadTeoria;
