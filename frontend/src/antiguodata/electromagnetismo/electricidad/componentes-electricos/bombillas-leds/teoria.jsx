import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Bombillas y LEDs",
  descripcion: "Tipos de bombillas, consumo, eficiencia energética y etiquetas",
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const BombillasLEDs = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Evolución de la Iluminación">
        <Concept title="De la Incandescencia al LED">
          <p>
            La forma de iluminar nuestras casas ha evolucionado mucho en los últimos años, pasando de bombillas que desperdiciaban el 95% de la energía en calor, a LEDs que son 10 veces más eficientes.
          </p>
          <div className="tabla-simbolos" style={{width: '100%', overflowX: 'auto'}}>
            <table style={{width: '100%', minWidth: '600px'}}>
              <thead>
                <tr>
                  <th style={{width: '20%'}}>Tipo</th>
                  <th style={{width: '15%'}}>Eficiencia</th>
                  <th style={{width: '20%'}}>Vida Útil</th>
                  <th style={{width: '20%'}}>Potencia para 800 lm</th>
                  <th style={{width: '25%'}}>Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Incandescente</td><td>5%</td><td>1.000 horas</td><td>60W</td><td>❌ Prohibida</td></tr>
                <tr><td>Halógena</td><td>10%</td><td>2.000 horas</td><td>42W</td><td>🟡 En desuso</td></tr>
                <tr><td>Fluorescente</td><td>15%</td><td>8.000 horas</td><td>15W</td><td>🟡 En desuso</td></tr>
                <tr><td>LED</td><td>40%</td><td>25.000 horas</td><td>10W</td><td>✅ Recomendada</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{marginTop: '1rem', fontSize: '0.9rem', color: '#666'}}>
            💡 Coste anual (5h/día, 0.15€/kWh): Incandescente 16.43€ | Halógena 11.50€ | Fluorescente 4.11€ | LED 2.74€
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Tipos de Bombillas">
        <Concept title="Bombillas Incandescentes (Prohibidas)">
          <ul>
            <li>💡 Funcionamiento: Filamento de tungsteno que se calienta</li>
            <li>🔥 Problema: 95% de energía se pierde en calor</li>
            <li>⏱️ Vida útil: Solo 1.000 horas</li>
            <li>❌ Prohibidas en UE desde 2012 por ineficientes</li>
          </ul>
        </Concept>

        <Concept title="Bombillas LED (Recomendadas)">
          <ul>
            <li>⚡ Consumo: 90% menos que incandescentes</li>
            <li>⏱️ Vida útil: 25.000-50.000 horas (25 años)</li>
            <li>💰 Ahorro: 80€ por bombilla en su vida útil</li>
            <li>🌡️ No se calientan: Seguras al tacto</li>
            <li>⚡ Encendido instantáneo: Luz al 100% inmediata</li>
            <li>♻️ Ecológicas: Sin mercurio ni gases</li>
          </ul>
          <Example title="Equivalencias de potencia">
            <div className="tabla-simbolos" style={{width: '100%', overflowX: 'auto'}}>
              <table style={{width: '100%', minWidth: '500px'}}>
                <thead>
                  <tr>
                    <th style={{width: '25%'}}>Incandescente</th>
                    <th style={{width: '25%'}}>LED Equivalente</th>
                    <th style={{width: '25%'}}>Lúmenes</th>
                    <th style={{width: '25%'}}>Ahorro anual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>25W</td><td>3-4W</td><td>250 lm</td><td>5.75€</td></tr>
                  <tr><td>40W</td><td>5-6W</td><td>470 lm</td><td>9.31€</td></tr>
                  <tr><td>60W</td><td>8-10W</td><td>800 lm</td><td>13.69€</td></tr>
                  <tr><td>75W</td><td>10-12W</td><td>1100 lm</td><td>17.26€</td></tr>
                  <tr><td>100W</td><td>13-15W</td><td>1600 lm</td><td>23.29€</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{marginTop: '1rem', fontSize: '0.9rem', color: '#666'}}>
              💰 Ahorro de energía: 85-87% menos consumo con LED
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Lúmenes vs Vatios">
        <Concept title="La Medida Correcta de la Luz">
          <p>
            Antes comprábamos bombillas por vatios (W), que miden consumo. Ahora debemos fijarnos en los lúmenes (lm), que miden la luz real.
          </p>
          <Important>
            💡 Regla práctica: Una bombilla incandescente de 60W da unos 800 lúmenes. Un LED de solo 10W da los mismos 800 lúmenes.
          </Important>
          <Formula
            expression={String.raw`\text{Eficiencia} = \frac{\text{Lúmenes}}{\text{Vatios}} \text{ (lm/W)}`}
            calculatorId="bombillas_leds"
            definitions={definitions}
            exercises={exercises}
            description="Cuantos más lúmenes por vatio, más eficiente es la bombilla"
            complementary={[
              { description: "Calcular Lúmenes", expression: String.raw`\text{Lúmenes} = \text{Eficiencia} \times \text{Vatios}` },
              { description: "Calcular Potencia", expression: String.raw`\text{Vatios} = \frac{\text{Lúmenes}}{\text{Eficiencia}}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>Eficiencia: Lúmenes por vatio (lm/W)</li>
            <li>Lúmenes: Cantidad de luz emitida (lm)</li>
            <li>Vatios: Potencia consumida (W)</li>
          </ul>
          
          <div className="conceptos-fundamentales">
            <div className="concepto-fundamental">
              <h4>Incandescente</h4>
              <p>10-15 lm/W</p>
            </div>
            <div className="concepto-fundamental">
              <h4>Fluorescente</h4>
              <p>50-70 lm/W</p>
            </div>
            <div className="concepto-fundamental">
              <h4>LED</h4>
              <p>80-120 lm/W</p>
            </div>
          </div>
        </Concept>

        <Concept title="¿Cuántos Lúmenes Necesito?">
          <ul>
            <li>🛏️ Dormitorio: 300-400 lm (ambiente relajado)</li>
            <li>🛋️ Salón: 1500-3000 lm (luz general)</li>
            <li>🍳 Cocina: 4000-8000 lm (mucha luz para trabajar)</li>
            <li>🚽 Baño: 500-800 lm por m²</li>
            <li>📚 Escritorio: 400-500 lm (lectura)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Etiquetas Energéticas">
        <Concept title="Clasificación A-G">
          <p>
            Desde 2021, las bombillas llevan una etiqueta energética que va de A (más eficiente) a G (menos eficiente).
          </p>
          <div className="tabla-simbolos" style={{width: '100%', overflowX: 'auto'}}>
            <table style={{width: '100%', minWidth: '500px'}}>
              <thead>
                <tr>
                  <th style={{width: '15%'}}>Clase</th>
                  <th style={{width: '30%'}}>Eficiencia (lm/W)</th>
                  <th style={{width: '30%'}}>Tipo Típico</th>
                  <th style={{width: '25%'}}>Coste anual</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>🟢 A</td><td>&gt;210</td><td>LED premium</td><td>1.30€</td></tr>
                <tr><td>🟢 B</td><td>185-210</td><td>LED alta gama</td><td>1.48€</td></tr>
                <tr><td>🟡 C</td><td>160-185</td><td>LED estándar</td><td>1.71€</td></tr>
                <tr><td>🟡 D</td><td>135-160</td><td>LED básico</td><td>2.03€</td></tr>
                <tr><td>🟠 E</td><td>110-135</td><td>LED antiguo</td><td>2.49€</td></tr>
                <tr><td>🔴 F</td><td>85-110</td><td>Fluorescente</td><td>3.22€</td></tr>
                <tr><td>🔴 G</td><td>&lt;85</td><td>Halógena</td><td>4.11€</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{marginTop: '1rem', fontSize: '0.9rem', color: '#666'}}>
            📊 Consumo anual calculado para 5 horas/día a 0.15€/kWh
          </p>
          <Important>
            💡 Recomendación: Compra siempre bombillas clase A, B o C. Aunque cuesten un poco más, se amortizan rápidamente con el ahorro en la factura.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Cálculo de Consumo y Ahorro">
        <Concept title="¿Cuánto Cuesta Iluminar?">
          <Formula
            expression={String.raw`\text{Consumo (kWh)} = \frac{\text{Potencia (W)} \times \text{Horas}}{1000}`}
            calculatorId="bombillas_leds"
            definitions={definitions}
            exercises={exercises}
            description="Energía consumida por una bombilla"
            complementary={[
              { description: "Calcular Potencia", expression: String.raw`\text{Potencia} = \frac{\text{Consumo} \times 1000}{\text{Horas}}` },
              { description: "Calcular Horas", expression: String.raw`\text{Horas} = \frac{\text{Consumo} \times 1000}{\text{Potencia}}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>Consumo: Energía consumida (kWh)</li>
            <li>Potencia: Potencia de la bombilla (W)</li>
            <li>Horas: Tiempo de uso (h)</li>
          </ul>
          
          <Formula
            expression={String.raw`\text{Coste (€)} = \text{Consumo (kWh)} \times \text{Precio (€/kWh)}`}
            calculatorId="bombillas_leds"
            definitions={definitions}
            exercises={exercises}
            description="Coste en la factura eléctrica"
            complementary={[
              { description: "Calcular Consumo", expression: String.raw`\text{Consumo} = \frac{\text{Coste}}{\text{Precio}}` },
              { description: "Calcular Precio", expression: String.raw`\text{Precio} = \frac{\text{Coste}}{\text{Consumo}}` }
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>Coste: Coste en la factura (€)</li>
            <li>Consumo: Energía consumida (kWh)</li>
            <li>Precio: Precio de la electricidad (€/kWh)</li>
          </ul>
          
          <Example title="Comparación real">
            <p>Bombilla encendida 5 horas al día durante 1 año:</p>
            <p>Horas al año = 5h × 365 días = 1825 horas</p>
            <p>Precio electricidad = 0.15€/kWh</p>
            <p></p>
            <p>Incandescente 60W:</p>
            <ul>
              <li>Consumo = 60W × 1825h / 1000 = 109.5 kWh</li>
              <li>Coste = 109.5 × 0.15€ = 16.43€/año</li>
            </ul>
            <p>LED 10W:</p>
            <ul>
              <li>Consumo = 10W × 1825h / 1000 = 18.25 kWh</li>
              <li>Coste = 18.25 × 0.15€ = 2.74€/año</li>
            </ul>
            <p>Ahorro anual: 13.69€ por bombilla 💰</p>
          </Example>
        </Concept>

        <Concept title="Coste Total de Propiedad">
          <p>
            Para comparar bombillas, hay que sumar el precio de compra + coste de uso:
          </p>
          <Example title="25.000 horas de uso">
            <p>Incandescente (60W, 2€, 1000h vida):</p>
            <ul>
              <li>Bombillas necesarias: 25 unidades</li>
              <li>Coste bombillas: 25 × 2€ = 50€</li>
              <li>Consumo: 60W × 25000h = 1500 kWh</li>
              <li>Coste electricidad: 1500 × 0.15€ = 225€</li>
              <li>TOTAL: 275€</li>
            </ul>
            <p>LED (10W, 10€, 25000h vida):</p>
            <ul>
              <li>Bombillas necesarias: 1 unidad</li>
              <li>Coste bombilla: 10€</li>
              <li>Consumo: 10W × 25000h = 250 kWh</li>
              <li>Coste electricidad: 250 × 0.15€ = 37.50€</li>
              <li>TOTAL: 47.50€</li>
            </ul>
            <p>Ahorro con LED: 227.50€ 🎉</p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Características Adicionales">
        <Concept title="Temperatura de Color">
          <p>
            La temperatura de color se mide en Kelvin (K) e indica si la luz es cálida (amarillenta) o fría (azulada):
          </p>
          <ul>
            <li>🟡 2700-3000K (Cálida): Ambiente acogedor, dormitorios, salones</li>
            <li>⚪ 4000-4500K (Neutra): Oficinas, cocinas, baños</li>
            <li>🔵 5500-6500K (Fría): Garajes, talleres, luz diurna</li>
          </ul>
        </Concept>

        <Concept title="Tipos de Casquillos">
          <ul>
            <li>🔌 E27 (Edison grande): El más común en casa</li>
            <li>🔌 E14 (Edison pequeño): Lámparas de mesa, nevera</li>
            <li>🔌 GU10: Focos empotrados (con patillas)</li>
            <li>🔌 G9: Lámparas decorativas pequeñas</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <p>
          Los LEDs han revolucionado la iluminación en todos los ámbitos: desde el hogar hasta la industria, pasando por el alumbrado público y las pantallas de dispositivos electrónicos. Su eficiencia permite ahorrar miles de millones de euros en electricidad a nivel mundial.
        </p>
      </div>

      {/* Hechos históricos */}
      <div className="theory-history-section">
        <h2><span>📜</span> Historia</h2>
        <p>
          Thomas Edison inventó la bombilla incandescente en 1879, revolucionando la iluminación. Durante más de 100 años fue la tecnología dominante. En 1962, Nick Holonyak Jr. inventó el primer LED visible, pero no fue hasta los años 2000 que los LEDs blancos se hicieron prácticos para iluminación general.
        </p>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas y curiosidades</h2>
        <p>
          La Unión Europea prohibió las bombillas incandescentes en 2012 para reducir el consumo energético. Se estima que el cambio a LEDs ahorra a Europa más de 15.000 millones de euros al año en electricidad. Una sola bombilla LED puede evitar la emisión de 450 kg de CO₂ durante su vida útil.
        </p>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3 className="concept-title">Resumen</h3>
        <div className="concept-body">
          <ul>
            <li>Los LEDs son 10 veces más eficientes que las incandescentes</li>
            <li>Duran 25 veces más (25.000 horas vs 1.000 horas)</li>
            <li>Fíjate en los lúmenes (luz real), no en los vatios (consumo)</li>
            <li>Compra bombillas clase A, B o C en la etiqueta energética</li>
            <li>El ahorro en la factura compensa rápidamente el precio inicial</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BombillasLEDs;
