import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions as ahorroDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Ahorro Energético",
  descripcion: "Estrategias para reducir el consumo eléctrico y el impacto ambiental",
  isTheoryOnly: false,
  educationLevel: "ESO",
  levels: ['ESO']
};

const AhorroEnergetico = ({ exercises }) => {
  return (
    <>
      <Concept 
        title="¿Por qué ahorrar energía?" 
        color="blue"
        icon="🌱"
      >
        <p>
          El ahorro energético no solo reduce tu factura de la luz, 
          también ayuda al medio ambiente. Cada kWh que no consumimos significa menos 
          CO₂ emitido a la atmósfera.
        </p>
        <div className="destacado">
          <p>
            🌍 Impacto ambiental: Producir 1 kWh de electricidad 
            emite aproximadamente 0.3 kg de CO₂ (depende de la fuente). Una casa 
            que ahorra 100 kWh al mes evita 360 kg de CO₂ al año.
          </p>
        </div>
        <p>
          Además, el ahorro es acumulativo: pequeños cambios en muchos 
          aparatos suman grandes ahorros.
        </p>
      </Concept>

      <TheorySection title="Principios del Ahorro Energético">
        <Concept title="Las 3 R de la energía">
          <div className="conceptos-fundamentales">
            <div className="concepto-fundamental">
              <h4>🔴 REDUCIR</h4>
              <p>
                Consumir menos energía. Apagar luces, usar menos 
                calefacción/aire acondicionado, desenchufar aparatos.
              </p>
              <p>Impacto: Inmediato y sin coste</p>
            </div>

            <div className="concepto-fundamental">
              <h4>🟡 REEMPLAZAR</h4>
              <p>
                Cambiar a aparatos eficientes. LED en vez de incandescentes, 
                electrodomésticos clase A, bomba de calor en vez de calefactor.
              </p>
              <p>Impacto: Alto, requiere inversión inicial</p>
            </div>

            <div className="concepto-fundamental">
              <h4>🟢 RENOVAR</h4>
              <p>
                Usar energías renovables. Paneles solares, aerotermia, 
                contratar electricidad verde.
              </p>
              <p>Impacto: Máximo, inversión alta pero amortizable</p>
            </div>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Ahorro por Áreas de la Casa">
        <Concept title="Iluminación 💡">
          <div className="info-box">
            <h3>Estrategias de ahorro</h3>
            <ul>
              <li>
                Cambiar a LED: Consumen 90% menos que incandescentes. 
                Ahorro: 10-15 €/año por bombilla
              </li>
              <li>
                Aprovechar luz natural: Abre cortinas durante el día. 
                Ahorro: 20-30%
              </li>
              <li>
                Apagar luces: No dejes luces encendidas en habitaciones vacías
              </li>
              <li>
                Sensores de movimiento: En pasillos y garajes. 
                Ahorro: 30-50%
              </li>
              <li>
                Reguladores de intensidad: Usa solo la luz necesaria
              </li>
            </ul>
          </div>

          <Example title="Ahorro real: Cambio a LED" icon="💡">
            <p>Casa con 20 bombillas de 60W → LED de 8W, 5h/día:</p>
            <ul>
              <li>Antes: 20 × 60W × 5h × 365 días = 2190 kWh/año</li>
              <li>Después: 20 × 8W × 5h × 365 días = 292 kWh/año</li>
              <li>Ahorro: 1898 kWh/año = 285 €/año</li>
            </ul>
            <p>Inversión en LED: ≈200 €. Se amortiza en 8 meses.</p>
          </Example>
        </Concept>

        <Concept title="Climatización ❄️🔥">
          <p>
            La climatización (calefacción y aire acondicionado) representa el 
            40-50% del consumo de una casa. Es donde más se puede ahorrar.
          </p>

          <div className="info-box">
            <h3>Estrategias de ahorro</h3>
            <ul>
              <li>
                Temperatura adecuada: 21°C invierno, 26°C verano. 
                Cada grado de más/menos: +7% consumo
              </li>
              <li>
                Aislamiento: Ventanas dobles, burletes en puertas. 
                Ahorro: 20-30%
              </li>
              <li>
                Termostato programable: Baja temperatura por la noche. 
                Ahorro: 10-15%
              </li>
              <li>
                Mantenimiento: Limpia filtros del aire acondicionado. 
                Ahorro: 5-10%
              </li>
              <li>
                Bomba de calor: 3 veces más eficiente que calefactor eléctrico
              </li>
            </ul>
          </div>

          <Example title="Impacto de la temperatura" icon="🌡️">
            <p>Aire acondicionado de 2500W, 6h/día, 90 días de verano:</p>
            <ul>
              <li>A 24°C: 1350 kWh/verano = 202.5 €</li>
              <li>A 26°C: 1080 kWh/verano = 162 €</li>
              <li>Ahorro: 40.5 € por verano (20%)</li>
            </ul>
            <p>Solo 2°C de diferencia ahorran 40 € cada verano.</p>
          </Example>
        </Concept>

        <Concept title="Electrodomésticos 🏠">
          <div className="info-box">
            <h3>Estrategias de ahorro</h3>
            <ul>
              <li>
                Nevera: No abrir innecesariamente, alejar de fuentes de calor, 
                temperatura 4-5°C. Ahorro: 10-15%
              </li>
              <li>
                Lavadora: Programas eco, carga completa, 30°C en vez de 60°C. 
                Ahorro: 30-40%
              </li>
              <li>
                Lavavajillas: Programa eco, carga completa. Ahorro: 20-30%
              </li>
              <li>
                Horno: No precalentar si no es necesario, apagar antes de terminar. 
                Ahorro: 10-15%
              </li>
              <li>
                Secadora: Usar solo cuando sea imprescindible, centrifugar bien antes. 
                Ahorro: 50%
              </li>
            </ul>
          </div>
        </Concept>

        <Concept title="Electrónica 💻">
          <div className="info-box">
            <h3>Estrategias de ahorro</h3>
            <ul>
              <li>
                Apagar completamente: No dejar en standby. Ahorro: 50-100 €/año
              </li>
              <li>
                Regletas con interruptor: Apaga todo de golpe
              </li>
              <li>
                Desenchufar cargadores: Consumen aunque no estén cargando
              </li>
              <li>
                Modo ahorro energía: En ordenadores y monitores
              </li>
              <li>
                Brillo de pantallas: Reducir al mínimo cómodo
              </li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Aprovechar la Discriminación Horaria">
        <Concept title="Consumir en horas baratas">
          <p>
            Con tarifa de discriminación horaria, el precio varía según 
            la hora. Usar aparatos en hora valle puede ahorrar hasta 50%.
          </p>

          {/* Gráfico de franjas horarias */}
          <div className="svg-container" style={{textAlign: 'center', margin: '20px 0'}}>
            <svg width="550" height="300" viewBox="0 0 550 300">
              <text x="165" y="25" fontSize="16" fontWeight="bold" fill="white">Franjas Horarias (Laborables)</text>
              
              {/* Eje temporal */}
              <line x1="50" y1="250" x2="500" y2="250" stroke="#333" strokeWidth="2"/>
              
              {/* Franjas */}
              {/* Valle 0-8h */}
              <rect x="50" y="100" width="112.5" height="150" fill="#4caf50" opacity="0.7"/>
              <text x="106" y="175" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">VALLE</text>
              <text x="106" y="195" fontSize="12" fill="white" textAnchor="middle">0.08 €/kWh</text>
              <text x="106" y="270" fontSize="11" textAnchor="middle" fill="white">0h-8h</text>
              
              {/* Llano 8-10h */}
              <rect x="162.5" y="130" width="56.25" height="120" fill="#ff9800" opacity="0.7"/>
              <text x="190" y="195" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">LLANO</text>
              <text x="190" y="210" fontSize="11" fill="white" textAnchor="middle">0.13 €</text>
              <text x="190" y="270" fontSize="11" textAnchor="middle" fill="white">8-10h</text>
              
              {/* Punta 10-14h */}
              <rect x="218.75" y="160" width="112.5" height="90" fill="#f44336" opacity="0.7"/>
              <text x="275" y="210" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">PUNTA</text>
              <text x="275" y="230" fontSize="12" fill="white" textAnchor="middle">0.18 €/kWh</text>
              <text x="275" y="270" fontSize="11" textAnchor="middle" fill="white">10-14h</text>
              
              {/* Llano 14-18h */}
              <rect x="331.25" y="130" width="112.5" height="120" fill="#ff9800" opacity="0.7"/>
              <text x="387" y="195" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">LLANO</text>
              <text x="387" y="210" fontSize="11" fill="white" textAnchor="middle">0.13 €</text>
              <text x="387" y="270" fontSize="11" textAnchor="middle" fill="white">14-18h</text>
              
              {/* Punta 18-22h */}
              <rect x="443.75" y="160" width="56.25" height="90" fill="#f44336" opacity="0.7"/>
              <text x="472" y="210" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">PUNTA</text>
              <text x="472" y="225" fontSize="11" fill="white" textAnchor="middle">0.18 €</text>
              <text x="472" y="270" fontSize="11" textAnchor="middle" fill="white">18-22h</text>
              
              {/* Nota fin de semana */}
              <text x="275" y="50" fontSize="12" fill="#4caf50" fontWeight="bold" textAnchor="middle">
                🟢 Fines de semana: TODO VALLE (0.08 €/kWh)
              </text>
            </svg>
          </div>

          <div className="info-box">
            <h3>Aparatos para usar en valle</h3>
            <ul>
              <li>Lavadora y lavavajillas: Programar para la noche</li>
              <li>Carga de vehículos eléctricos: Siempre en valle</li>
              <li>Termo eléctrico: Calentar agua por la noche</li>
              <li>Climatización: Pre-enfriar/calentar casa en valle</li>
            </ul>
          </div>

          <Example title="Ahorro con discriminación horaria" icon="💰">
            <p>Familia que usa lavadora (3 kWh) y lavavajillas (2 kWh) 4 veces/semana:</p>
            <ul>
              <li>Consumo semanal: (3 + 2) × 4 = 20 kWh</li>
              <li>En hora punta: 20 × 0.18 = 3.6 €/semana</li>
              <li>En hora valle: 20 × 0.08 = 1.6 €/semana</li>
              <li>Ahorro semanal: 2 €</li>
              <li>Ahorro anual: 2 × 52 = 104 €</li>
            </ul>
            <p>¡Más de 100 € al año solo programando los electrodomésticos!</p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Energías Renovables en Casa">
        <Concept title="Autoconsumo solar">
          <p>
            Los paneles solares fotovoltaicos permiten generar tu propia 
            electricidad. La inversión se amortiza en 7-10 años.
          </p>

          <div className="info-box">
            <h3>Ventajas del autoconsumo</h3>
            <ul>
              <li>Ahorro: 50-70% en la factura</li>
              <li>Amortización: 7-10 años</li>
              <li>Vida útil: 25-30 años</li>
              <li>Mantenimiento: Mínimo</li>
              <li>Medio ambiente: Energía 100% limpia</li>
              <li>Subvenciones: Hasta 40% del coste</li>
            </ul>
          </div>

          <Example title="Instalación solar típica" icon="☀️">
            <p>Casa con consumo de 300 kWh/mes:</p>
            <ul>
              <li>Paneles necesarios: 6-8 paneles (2-3 kW)</li>
              <li>Coste instalación: 4000-6000 €</li>
              <li>Con subvenciones: 2500-4000 €</li>
              <li>Ahorro anual: 500-700 €</li>
              <li>Amortización: 6-8 años</li>
              <li>Ahorro en 25 años: 12,500-17,500 €</li>
            </ul>
          </Example>
        </Concept>

        <Concept title="Otras tecnologías">
          <ul>
            <li>
              Aerotermia: Bomba de calor que extrae energía del aire. 
              3-4 veces más eficiente que calefacción eléctrica
            </li>
            <li>
              Solar térmica: Paneles para calentar agua. Ahorro 60-80% 
              en agua caliente
            </li>
            <li>
              Baterías: Almacenan energía solar para usar por la noche. 
              Aumentan autoconsumo al 80-90%
            </li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Plan de ahorro */}
      <TheorySection title="Plan de Ahorro Paso a Paso">
        <Concept title="Cómo empezar a ahorrar">
          <div className="conceptos-fundamentales">
            <div className="concepto-fundamental">
              <h4>📊 Paso 1: Analiza tu consumo</h4>
              <p>
                Revisa tu factura. Identifica qué aparatos consumen más. 
                Usa medidores de consumo (≈20 €).
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>💡 Paso 2: Cambios sin coste</h4>
              <p>
                Apagar luces, desenchufar standby, ajustar temperatura, 
                usar programas eco. Ahorro: 10-20%.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>🔄 Paso 3: Cambios de bajo coste</h4>
              <p>
                Bombillas LED, regletas con interruptor, burletes en puertas. 
                Inversión: 100-200 €. Ahorro: 15-25%.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>⚡ Paso 4: Cambios de medio coste</h4>
              <p>
                Electrodomésticos eficientes, termostato programable. 
                Inversión: 500-2000 €. Ahorro: 20-30%.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>☀️ Paso 5: Inversiones grandes</h4>
              <p>
                Paneles solares, aerotermia, aislamiento. 
                Inversión: 3000-10000 €. Ahorro: 50-70%.
              </p>
            </div>
          </div>
        </Concept>
      </TheorySection>

      {/* Calculadora de ahorro */}
      <TheorySection title="Calcula tu Potencial de Ahorro">
        <Concept title="Estimación de ahorro">
          <Formula 
            expression={String.raw`\text{Ahorro} = \text{Consumo actual} \times \% \text{ reducción} \times \text{precio}`}
            calculatorId="ahorro_energetico"
            definitions={ahorroDefinitions}
            exercises={exercises}
          />

          <Example title="Ejemplo completo" icon="🏠">
            <p>Casa que consume 400 kWh/mes (60 €/mes):</p>
            <div style={{ width: '100%', overflowX: 'auto' }}>
              <table style={{width: '100%', marginTop: '10px', borderCollapse: 'collapse'}}>
                <thead>
                  <tr style={{backgroundColor: '#f0f0f0'}}>
                    <th style={{padding: '8px', border: '1px solid #ddd', width: '50%'}}>Medida</th>
                    <th style={{padding: '8px', border: '1px solid #ddd', width: '25%'}}>Ahorro</th>
                    <th style={{padding: '8px', border: '1px solid #ddd', width: '25%'}}>€/año</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>Cambio a LED</td>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>10%</td>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>72 €</td>
                  </tr>
                  <tr>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>Apagar standby</td>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>8%</td>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>58 €</td>
                  </tr>
                  <tr>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>Temperatura +2°C verano</td>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>12%</td>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>86 €</td>
                  </tr>
                  <tr>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>Discriminación horaria</td>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>15%</td>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>108 €</td>
                  </tr>
                  <tr style={{backgroundColor: '#e8f5e9'}}>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>TOTAL</td>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>45%</td>
                    <td style={{padding: '8px', border: '1px solid #ddd'}}>324 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{marginTop: '10px'}}>
              Resultado: Factura reducida de 60 € a 33 €/mes. 
              ¡324 € de ahorro anual con medidas sencillas!
            </p>
          </Example>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h3>🏠 Aplicaciones Prácticas</h3>
        <p>10 Consejos de Oro para el ahorro energético:</p>
        <ol>
          <li>Cambia a LED: Ahorro inmediato y duradero</li>
          <li>Apaga el standby: Usa regletas con interruptor</li>
          <li>Ajusta la temperatura: 21°C invierno, 26°C verano</li>
          <li>Usa discriminación horaria: Programa electrodomésticos</li>
          <li>Electrodomésticos eficientes: Clase A siempre</li>
          <li>Aprovecha luz natural: Abre cortinas durante el día</li>
          <li>Mantenimiento: Limpia filtros y revisa aparatos</li>
          <li>Aísla tu casa: Ventanas, puertas, paredes</li>
          <li>Mide tu consumo: Lo que no se mide no se puede mejorar</li>
          <li>Considera renovables: Paneles solares si es posible</li>
        </ol>
      </div>

      <div className="theory-history-section">
        <h3>📜 Historia del Ahorro Energético</h3>
        <p>
          El concepto de eficiencia energética cobró importancia tras la crisis del petróleo de 1973, 
          cuando los países occidentales se dieron cuenta de su dependencia energética. Desde entonces, 
          se han desarrollado normativas cada vez más estrictas.
        </p>
        <p>
          En la Unión Europea, la etiqueta energética se introdujo en 1992, obligando a los fabricantes 
          a informar sobre el consumo de sus aparatos. En 2021 se actualizó el sistema, eliminando las 
          clases A+, A++ y A+++ para volver a una escala de A a G más clara.
        </p>
      </div>

      <div className="theory-anecdotes-section">
        <h3>💡 Curiosidades</h3>
        <p>
          El modo standby fue inventado en los años 70 para los televisores, pero se convirtió en un 
          problema energético. Se estima que el standby representa el 10% del consumo eléctrico residencial 
          en Europa, equivalente a la producción de 2 centrales nucleares.
        </p>
        <p>
          En Japón, tras el accidente de Fukushima en 2011, el gobierno lanzó campañas masivas de ahorro 
          energético. Los japoneses redujeron su consumo un 15% en pocos meses, demostrando que pequeños 
          cambios de hábitos pueden tener un gran impacto.
        </p>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>El ahorro energético reduce costes y ayuda al medio ambiente</li>
          <li>Las 3 R: Reducir, Reemplazar, Renovar</li>
          <li>La climatización es el mayor consumo (40-50%)</li>
          <li>La discriminación horaria puede ahorrar 100+ € al año</li>
          <li>Los paneles solares se amortizan en 7-10 años</li>
          <li>Pequeños cambios suman: 30-50% de ahorro es posible</li>
          <li>Cada kWh ahorrado es dinero en tu bolsillo y menos CO₂ en la atmósfera</li>
        </ul>
      </div>
    </>
  );
};

export default AhorroEnergetico;
