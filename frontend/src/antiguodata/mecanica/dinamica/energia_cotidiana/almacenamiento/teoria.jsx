import { Concept, Example, Formula, Important, TheorySection } from '../../../../../components/TheoryV2';

export const metadata = {
  titulo: "Almacenamiento de Energía",
  descripcion: "Baterías y sistemas de almacenamiento energético",
  isTheoryOnly: true,
  educationLevel: "ESO",
  levels: ['ESO']
};

const AlmacenamientoTeoria = ({ exercises }) => {
  return (
    <TheorySection
      title="Almacenamiento de Energía"
      emoji="🔋"
      nivel="ESO"
    >

      {/* Concepto 1: ¿Por qué necesitamos almacenar energía? */}
      <Concept title="La importancia de almacenar energía" emoji="💾">
        <p>
          El almacenamiento de energía es fundamental en nuestra vida moderna.
          Nos permite usar dispositivos móviles, acumular energía renovable para cuando no hay sol
          o viento, y tener respaldo eléctrico en emergencias.
        </p>

        <h4>Necesidades de almacenamiento:</h4>
        <ul>
          <li>📱 Movilidad: Móviles, portátiles, coches eléctricos</li>
          <li>☀️ Renovables: Almacenar energía solar/eólica para uso nocturno</li>
          <li>🚨 Respaldo: UPS, sistemas de emergencia</li>
          <li>📊 Estabilidad de red: Equilibrar oferta y demanda eléctrica</li>
        </ul>

        <Important>
          El desarrollo de mejores baterías es clave para la transición energética. Sin almacenamiento
          eficiente, no podemos aprovechar plenamente las energías renovables.
        </Important>
      </Concept>

      {/* Concepto 2: Tipos de baterías */}
      <Concept title="Tipos de baterías en uso" emoji="🔋">
        <p>
          Existen diversos tipos de baterías, cada una optimizada para diferentes aplicaciones
          según sus características de densidad energética, ciclos de vida, coste y seguridad.
        </p>

        <div className="battery-types">
          <div className="battery-card">
            <h5>🔋 Plomo-ácido</h5>
            <p>Uso: Coches de combustión, UPS</p>
            <p>Densidad energética: 30-50 Wh/kg</p>
            <p>Ciclos: 200-300</p>
            <p>Coste: Muy bajo (~50€/kWh)</p>
            <p>Ventajas: Barata, robusta, reciclable</p>
            <p>Desventajas: Pesada, baja densidad</p>
          </div>

          <div className="battery-card">
            <h5>🔋 NiMH (Níquel-Metal Hidruro)</h5>
            <p>Uso: Híbridos (Prius), herramientas</p>
            <p>Densidad energética: 60-120 Wh/kg</p>
            <p>Ciclos: 500-1000</p>
            <p>Coste: Medio (~150€/kWh)</p>
            <p>Ventajas: Sin efecto memoria, segura</p>
            <p>Desventajas: Autodescarga alta</p>
          </div>

          <div className="battery-card highlight">
            <h5>🔋 Li-Ion (Iones de Litio)</h5>
            <p>Uso: Móviles, portátiles, EVs, solar</p>
            <p>Densidad energética: 150-250 Wh/kg</p>
            <p>Ciclos: 500-2000+</p>
            <p>Coste: Medio-alto (~100-300€/kWh)</p>
            <p>Ventajas:</p>
            <ul>
              <li>✅ Alta densidad energética (mucha energía, poco peso)</li>
              <li>✅ No efecto memoria (cargas en cualquier momento)</li>
              <li>✅ Baja autodescarga (~5% al mes)</li>
              <li>✅ Tiempo de carga rápido (30-80% en 20-40 min coche)</li>
            </ul>
            <p>Desventajas:</p>
            <ul>
              <li>❌ Coste elevado: 100-150 €/kWh (bajando cada año)</li>
              <li>❌ Degradación con uso y tiempo (80% capacidad tras 8-10 años)</li>
              <li>❌ Riesgo de incendio si se daña (runaway térmico)</li>
              <li>❌ Materiales críticos: litio, cobalto, níquel</li>
              <li>❌ Impacto ambiental minería (especialmente cobalto)</li>
            </ul>
          </div>

          <div className="battery-card">
            <h5>🔋 LiFePO₄ (Litio-Fosfato)</h5>
            <p>Uso: Solar doméstico, vehículos</p>
            <p>Densidad energética: 90-120 Wh/kg</p>
            <p>Ciclos: 2000-6000+</p>
            <p>Coste: Alto (~400€/kWh)</p>
            <p>Ventajas: Muy segura, larga vida</p>
            <p>Desventajas: Menor densidad que Li-Ion</p>
          </div>

          <div className="battery-card">
            <h5>🔋 Estado sólido (futuro)</h5>
            <p>Uso: EVs próxima generación</p>
            <p>Densidad energética: 400-500+ Wh/kg</p>
            <p>Ciclos: 5000+ (estimado)</p>
            <p>Coste: Alto (en desarrollo)</p>
            <p>Ventajas: Muy alta densidad, segura</p>
            <p>Desventajas: Aún en investigación</p>
          </div>
        </div>

        <Important>
          ⚠️ Importante: Las baterías NO son una fuente de energía renovable.
          Son un sistema de almacenamiento que guarda energía producida por otras fuentes.
          <br/><br/>
          ¿La energía es renovable? Depende de cómo se cargue la batería:
          <ul>
            <li>✅ Renovable: Si se carga con solar, eólica, hidroeléctrica → Energía limpia</li>
            <li>⚠️ Mixta: Si se carga de la red eléctrica → Depende del mix energético del país
              <ul>
                <li>España 2024: ~50% renovable, ~20% nuclear, ~30% gas/carbón</li>
                <li>Francia: ~70% nuclear, ~20% renovable</li>
                <li>Noruega: ~98% hidroeléctrica renovable</li>
              </ul>
            </li>
            <li>❌ No renovable: Si se carga con generador diésel → Energía fósil</li>
          </ul>
          Conclusión: Un coche eléctrico solo es "verde" si la electricidad viene de fuentes renovables.
        </Important>

        <h4>Comparativa de aplicaciones:</h4>
        <table className="battery-comparison">
          <thead>
            <tr>
              <th>Aplicación</th>
              <th>Tipo recomendado</th>
              <th>Razón</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>📱 Smartphone</td>
              <td>Li-Ion (compacta)</td>
              <td>Alta densidad, ligera</td>
            </tr>
            <tr>
              <td>🚗 Coche eléctrico</td>
              <td>Li-Ion (NMC, NCA)</td>
              <td>Balance densidad/coste</td>
            </tr>
            <tr>
              <td>☀️ Solar doméstico</td>
              <td>LiFePO₄</td>
              <td>Larga vida, seguridad</td>
            </tr>
            <tr>
              <td>🔧 Herramientas</td>
              <td>Li-Ion</td>
              <td>Peso reducido, potencia</td>
            </tr>
            <tr>
              <td>🏢 Respaldo industrial</td>
              <td>Plomo-ácido</td>
              <td>Coste bajo, fiabilidad</td>
            </tr>
          </tbody>
        </table>
      </Concept>

      {/* Concepto 3: Características técnicas */}
      <Concept title="Parámetros clave de una batería" emoji="📊">
        <p>
          Para entender y comparar baterías, es fundamental conocer sus parámetros técnicos:
        </p>

        <h4>⚡ Capacidad (mAh o Ah):</h4>
        <ul>
          <li>Cantidad de carga eléctrica que puede almacenar</li>
          <li>Ejemplo: Batería de 3000 mAh = 3 Ah</li>
          <li>Puede suministrar 3A durante 1 hora, o 1A durante 3 horas</li>
          <li>Móvil típico: 3000-5000 mAh</li>
          <li>Coche eléctrico: 50-100 kWh (50,000-100,000 Wh)</li>
        </ul>

        <h4>⚡ Voltaje (V):</h4>
        <ul>
          <li>Tensión eléctrica de la batería</li>
          <li>Li-Ion: 3.7V nominal por celda</li>
          <li>Plomo-ácido: 2V por celda (batería 12V = 6 celdas)</li>
          <li>El voltaje determina la compatibilidad con dispositivos</li>
        </ul>

        <h4>💾 Energía (Wh):</h4>
        <p>La energía real almacenada se calcula:</p>
        <div className="formula-box">
          Energía (Wh) = Capacidad (Ah) × Voltaje (V)
        </div>

        <Example>
          Batería de móvil:<br/>
          • Capacidad: 4000 mAh = 4 Ah<br/>
          • Voltaje: 3.7V<br/>
          • Energía: 4 Ah × 3.7V = 14.8 Wh<br/><br/>

          Batería de coche eléctrico:<br/>
          • Capacidad: 75 kWh<br/>
          • Voltaje: ~400V (sistema)<br/>
          • Capacidad en Ah: 75,000 Wh / 400V = 187.5 Ah
        </Example>

        <h4>🔄 Ciclos de vida:</h4>
        <ul>
          <li>Número de cargas/descargas completas antes de degradación significativa</li>
          <li>Móvil (Li-Ion): 500-800 ciclos (2-3 años uso normal)</li>
          <li>EV (Li-Ion): 1000-2000 ciclos (8-15 años)</li>
          <li>Solar (LiFePO₄): 3000-6000 ciclos (10-20 años)</li>
        </ul>

        <h4>⚡ Tasa de descarga (C-rate):</h4>
        <ul>
          <li>Velocidad a la que se descarga la batería</li>
          <li>1C: Descarga completa en 1 hora</li>
          <li>0.5C: Descarga completa en 2 horas</li>
          <li>2C: Descarga completa en 30 minutos (alta potencia)</li>
        </ul>

        <Example>
          Batería de 50 Ah:<br/>
          • A 1C (50A): Se descarga en 1 hora<br/>
          • A 0.5C (25A): Se descarga en 2 horas<br/>
          • A 2C (100A): Se descarga en 30 minutos
        </Example>

        <h4>📉 Profundidad de descarga (DoD):</h4>
        <ul>
          <li>Porcentaje de capacidad utilizada en cada ciclo</li>
          <li>DoD 80%: Usar hasta dejar 20% de carga</li>
          <li>Menor DoD → más ciclos de vida</li>
          <li>Recomendación: Cargar entre 20-80% para maximizar vida útil</li>
        </ul>

        <Important>
          Las baterías modernas tienen sistemas BMS (Battery Management System) que gestionan
          automáticamente la carga, temperatura y balance de celdas para optimizar vida útil y seguridad.
        </Important>
      </Concept>

      {/* Concepto 4: Cuidado de baterías */}
      <Concept title="Cómo cuidar tus baterías" emoji="🛡️">
        <p>
          Un buen cuidado puede duplicar la vida útil de las baterías de iones de litio:
        </p>

        <h4>✅ Mejores prácticas:</h4>
        <ul>
          <li>🔋 Cargar entre 20-80%: Evita cargas completas y descargas totales frecuentes</li>
          <li>🌡️ Temperatura moderada: Ideal 15-25°C, evitar calor extremo (&gt;35°C)</li>
          <li>🐌 Carga lenta cuando sea posible: Menos estrés que carga rápida</li>
          <li>🔌 No dejar enchufado al 100%: Especialmente por la noche (degrada la batería)</li>
          <li>❄️ Almacenamiento largo plazo: ~50% de carga en lugar fresco</li>
          <li>🔄 Usar regularmente: Las baterías se degradan también sin usar</li>
        </ul>

        <h4>❌ Qué evitar:</h4>
        <ul>
          <li>❌ Descargar completamente (0%) frecuentemente</li>
          <li>❌ Mantener al 100% de carga constantemente</li>
          <li>❌ Exposición a calor (coche al sol, radiadores)</li>
          <li>❌ Frío extremo (&lt;0°C reduce rendimiento temporalmente)</li>
          <li>❌ Carga rápida continua (degrada más que carga lenta)</li>
        </ul>

        <div className="battery-degradation">
          <h5>Degradación típica de batería Li-Ion:</h5>
          <ul>
            <li>Año 1: 100% capacidad</li>
            <li>Año 2: 90-95% (con buen cuidado)</li>
            <li>Año 3: 80-85%</li>
            <li>Año 4-5: 70-80% (considera reemplazo si es crítico)</li>
          </ul>
          <p>Con cuidados óptimos, puedes mantener &gt;80% después de 5+ años.</p>
        </div>

        <Example>
          Móvil con buenos hábitos:<br/>
          • Cargas entre 20-80% (no esperar a 0%, no dejarlo al 100% constantemente)<br/>
          • Evitar dejarlo en coche al sol en verano<br/>
          • Usar cargador original o certificado<br/>
          • No usar intensamente mientras carga<br/>
          Resultado: Batería útil 3-4 años vs 1.5-2 años con malos hábitos
        </Example>
      </Concept>

      {/* NUEVO CONCEPTO: Composición y fabricación de baterías */}
      <Concept title="Composición química y fabricación de baterías Li-Ion" emoji="⚗️">
        <p>
          La fabricación de una batería de iones de litio es un proceso industrial complejo que
          requiere extracción minera intensiva, gran consumo energético y tiene
          un impacto ambiental significativo. Veamos en detalle los materiales y procesos involucrados.
        </p>

        <Important>
          Batería típica de coche eléctrico: 60 kWh (~400 kg peso total)<br/>
          Para fabricar UNA batería se necesitan extraer y procesar TONELADAS de minerales con
          maquinaria pesada que consume miles de litros de diésel. El coste energético total es
          16.600-28.000 kWh, generando 12.000-20.500 kg de CO₂.
        </Important>

        <h4>📊 Componentes principales de una batería 60 kWh:</h4>

        <div className="battery-composition">
          <div className="material-section">
            <h5>1️⃣ CÁTODO (40% peso, ~160 kg)</h5>

            <div className="material-detail">
              <h6>🔹 Litio (Li): 8-10 kg por batería</h6>
              <ul>
                <li>Relación extracción: 500-1.000 kg mineral/salmuera por 1 kg litio</li>
                <li>Origen: Chile (salares), Australia (roca dura), China (procesado)</li>
                <li>Coste: 15-30 €/kg (muy volátil, subió 500% en 2021-2022)</li>
              </ul>

              <h6>⛏️ Métodos de extracción del litio:</h6>

              <div className="extraction-method">
                A) Salares (Chile, Argentina - Salar de Atacama):
                <ul>
                  <li>Proceso: Evaporación salmuera durante 12-18 meses en piscinas gigantes</li>
                  <li>Maquinaria involucrada:
                    <ul>
                      <li>Bombas sumergibles: Extracción desde 400 m profundidad, 50-100 CV cada una</li>
                      <li>Camiones cisterna 30 ton: Transporte salmuera a piscinas evaporación</li>
                      <li>Excavadoras para construcción piscinas (superficie 100-500 hectáreas)</li>
                      <li>Plantas procesamiento: Separación química con CaCO₃, Na₂CO₃</li>
                    </ul>
                  </li>
                  <li>⚠️ Impacto ambiental:
                    <ul>
                      <li>Consumo agua: 500.000-2.000.000 L/ton litio producido</li>
                      <li>Deseca ecosistema: Afecta flamencos, vicuñas, comunidades indígenas</li>
                      <li>Contaminación acuíferos con sales y químicos</li>
                    </ul>
                  </li>
                  <li>Energía proceso: 50-100 kWh/kg litio (principalmente diésel para bombas)</li>
                </ul>
              </div>

              <div className="extraction-method">
                B) Roca dura - Espodumena (Australia - Greenbushes, Pilbara):
                <ul>
                  <li>Proceso: Minería a cielo abierto + trituración + concentración térmica</li>
                  <li>🚜 Maquinaria pesada involucrada:
                    <ul>
                      <li>Excavadoras gigantes CAT 6020B: 120 ton capacidad, 1.100 CV, 200 L/h diésel</li>
                      <li>Camiones mineros CAT 797F: 400 ton carga, 2.800 CV, 400 L/h diésel</li>
                      <li>Perforadoras rotativas: Agujeros para explosivos, 500-800 CV diésel</li>
                      <li>Bulldozers CAT D11: 850 CV, 170 L/h diésel (nivelación)</li>
                      <li>Trituradoras primarias: 5.000 ton/h roca, 5.000-10.000 kW eléctricos</li>
                      <li>Hornos rotatorios concentración: 1.050°C, gas natural/carbón</li>
                    </ul>
                  </li>
                  <li>Movimiento de tierras: Relación desmonte 5-10 ton tierra/roca por 1 ton mineral</li>
                  <li>Proceso completo:
                    <ol>
                      <li>Perforación → Explosivos → Fragmentación roca</li>
                      <li>Carga con excavadoras → Transporte camiones gigantes</li>
                      <li>Trituración múltiple etapas (primaria, secundaria, terciaria)</li>
                      <li>Concentración por flotación (químicos: ácidos, bases)</li>
                      <li>Calcinación 1.050°C → Ácido sulfúrico → Carbonato litio</li>
                    </ol>
                  </li>
                  <li>Energía proceso: 150-300 kWh/kg litio</li>
                </ul>
              </div>

              <div className="energy-cost">
                <h6>💰 Coste energético TOTAL para 10 kg litio (1 batería):</h6>
                <ul>
                  <li>Extracción minera: 1.500-3.000 kWh (diésel/gas)</li>
                  <li>Transporte mineral: 500-1.000 kWh</li>
                  <li>Refinado químico: 1.000-2.000 kWh</li>
                  <li>TOTAL: 3.000-6.000 kWh = Emisiones 2.000-4.000 kg CO₂</li>
                </ul>
              </div>
            </div>

            <div className="material-detail">
              <h6>🔹 Cobalto (Co): 5-8 kg por batería</h6>
              <ul>
                <li>Relación extracción: 10.000-20.000 kg mineral por 1 kg cobalto</li>
                <li>Origen: 70% R.D. Congo (problemas trabajo infantil, conflictos armados)</li>
                <li>Coste: 30-50 €/kg</li>
                <li>⚠️ Toxicidad: Muy tóxico - Cancerígeno, daño pulmonar, neurológico</li>
              </ul>

              <h6>⛏️ Proceso extracción cobalto (R.D. Congo - Copperbelt):</h6>

              <div className="extraction-method">
                Minas a cielo abierto: Profundidad 50-300 m
                <ul>
                  <li>🚜 Maquinaria gigante:
                    <ul>
                      <li>Excavadoras Komatsu PC8000: 50 ton carga, 1.800 CV, 150 L/h diésel</li>
                      <li>Camiones Komatsu 930E: 320 ton, 2.700 CV, 350 L/h diésel</li>
                      <li>Perforadoras + explosivos: Fragmentan 50.000 ton roca/día (gran mina)</li>
                      <li>Cargadores frontales CAT 994: 40 ton cuchara, 1.700 CV, 140 L/h</li>
                    </ul>
                  </li>
                  <li>Movimiento de tierras: Relación estéril 15-20 ton tierra por 1 ton mineral cobaltífero</li>
                  <li>⚠️ Condiciones trabajo: Minería artesanal infantil representa ~30% producción</li>
                </ul>
              </div>

              <div className="extraction-method">
                Minas subterráneas: Túneles 500-1.200 m profundidad
                <ul>
                  <li>Perforadoras montadas hidráulicas subterráneas</li>
                  <li>Locomotoras diésel subterráneas para transporte mineral</li>
                  <li>Ventilación: Extractores industriales 5.000 kW continuos</li>
                  <li>Riesgo derrumbes, gases tóxicos, temperaturas 35-45°C</li>
                </ul>
              </div>

              <div className="extraction-method">
                Procesado pirometalúrgico:
                <ul>
                  <li>Trituración: Molinos 3.000 kW eléctricos</li>
                  <li>Hornos flash 1.200-1.400°C: Gas/carbón, 100.000 m³/día</li>
                  <li>Fundición convertidores: Separación cobre-cobalto</li>
                  <li>Refinado electrolítico: 10.000-15.000 kWh/ton cobalto</li>
                </ul>
              </div>

              <div className="energy-cost">
                <h6>💰 Coste energético TOTAL para 8 kg cobalto (1 batería):</h6>
                <ul>
                  <li>Minería + transporte: 2.000-3.000 kWh (diésel)</li>
                  <li>Fundición + refinado: 1.500-2.500 kWh (gas/carbón/eléctrico)</li>
                  <li>TOTAL: 3.500-5.500 kWh = Emisiones 3.000-4.500 kg CO₂</li>
                </ul>
              </div>
            </div>

            <div className="material-detail">
              <h6>🔹 Níquel (Ni): 35-45 kg por batería</h6>
              <ul>
                <li>Relación extracción: 50-100 kg mineral por 1 kg níquel</li>
                <li>Origen: Indonesia (lateritas), Filipinas, Rusia, Canadá</li>
                <li>Coste: 15-25 €/kg</li>
              </ul>

              <h6>⛏️ Proceso extracción níquel (Indonesia - lateritas):</h6>

              <div className="extraction-method">
                1. Deforestación previa: 100-500 hectáreas/mina
                <ul>
                  <li>Excavadoras forestales: 300-500 CV diésel</li>
                  <li>Bulldozers CAT D11: 850 CV, 170 L/h diésel</li>
                  <li>⚠️ Impacto biodiversidad: Destrucción hábitat orangutanes, selva tropical primaria</li>
                </ul>
              </div>

              <div className="extraction-method">
                2. Minería a cielo abierto:
                <ul>
                  <li>🚜 Maquinaria gigante:
                    <ul>
                      <li>Excavadoras Hitachi EX5600: 30 m³ cuchara, 150 L/h diésel</li>
                      <li>Camiones mineros Belaz 75710: 450 ton carga (¡más grandes del mundo!)</li>
                      <li>Dragalinas gigantes: 70-100 m alcance, 150 m³ cuchara, 20.000 kW eléctricos</li>
                      <li>Perforadoras rotativas: Barrenos 15-20 m profundidad para voladuras</li>
                    </ul>
                  </li>
                  <li>Profundidad típica: 30-80 m</li>
                  <li>Movimiento de tierras: 5-10 ton sobrecarga por 1 ton mineral</li>
                </ul>
              </div>

              <div className="extraction-method">
                3. Procesado pirometalúrgico (RKEF - Rotary Kiln Electric Furnace):
                <ul>
                  <li>Secado: Hornos rotativos 800°C, combustión carbón</li>
                  <li>Reducción: Hornos eléctricos 1.500°C, 80-100 MW continuos</li>
                  <li>Refinado: Convertidores + electrólisis</li>
                  <li>Consumo energía: 50-70 kWh/kg níquel</li>
                  <li>⚠️ Contaminación: Aguas ácidas con sulfuros, arsenio, cromo hexavalente</li>
                </ul>
              </div>

              <div className="energy-cost">
                <h6>💰 Coste energético TOTAL para 40 kg níquel (1 batería):</h6>
                <ul>
                  <li>Deforestación + minería: 500-1.000 kWh (diésel maquinaria pesada)</li>
                  <li>Transporte mineral: 200-400 kWh</li>
                  <li>Fundición RKEF: 2.000-2.800 kWh (carbón/eléctrico)</li>
                  <li>TOTAL: 2.700-4.200 kWh = Emisiones 2.200-3.500 kg CO₂</li>
                </ul>
              </div>
            </div>

            <div className="material-detail">
              <h6>🔹 Manganeso (Mn): 10-15 kg por batería</h6>
              <ul>
                <li>Relación extracción: 20-50 kg mineral por 1 kg manganeso</li>
                <li>Coste: 2-4 €/kg (relativamente barato)</li>
                <li>Menor impacto ambiental, más abundante</li>
              </ul>
            </div>
          </div>

          <div className="material-section">
            <h5>2️⃣ ÁNODO (25% peso, ~100 kg)</h5>

            <div className="material-detail">
              <h6>🔹 Grafito: 50-70 kg por batería</h6>
              <ul>
                <li>Relación extracción: 30-50 kg mineral por 1 kg grafito procesado</li>
                <li>Origen: 65% China (sintético y natural)</li>
                <li>Coste: 5-15 €/kg</li>
              </ul>

              <h6>⛏️ Proceso extracción grafito:</h6>

              <div className="extraction-method">
                Grafito natural (China - minas subterráneas):
                <ul>
                  <li>Perforadoras neumáticas en túneles</li>
                  <li>Cargadores LHD (Load-Haul-Dump): 100-200 CV diésel subterráneo</li>
                  <li>Trituración + flotación química: Contaminación agua con ácidos</li>
                  <li>Purificación ácida (HF, HCl): Residuos tóxicos fluoruros/cloruros</li>
                  <li>Energía: 20-30 kWh/kg grafito</li>
                </ul>
              </div>

              <div className="extraction-method">
                Grafito sintético (de coque petróleo):
                <ul>
                  <li>Horno Acheson 2.500-3.000°C: 10-15 kWh/kg</li>
                  <li>Purificación química: 5-10 kWh/kg</li>
                  <li>Total: 15-25 kWh/kg (eléctrico, carbón mayormente)</li>
                </ul>
              </div>

              <div className="energy-cost">
                <h6>💰 Coste energético TOTAL para 60 kg grafito (1 batería):</h6>
                <ul>
                  <li>Natural: 1.200-1.800 kWh = 1.000-1.500 kg CO₂</li>
                  <li>Sintético: 900-1.500 kWh = 800-1.300 kg CO₂</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="material-section">
            <h5>3️⃣ ELECTROLITO Y SEPARADOR (10% peso, ~40 kg)</h5>
            <ul>
              <li>Sales de litio (LiPF₆): 3-5 kg</li>
              <li>Solventes orgánicos: 10-15 kg</li>
              <li>Separadores de polietileno/polipropileno: 5-10 kg</li>
              <li>⚠️ Altamente inflamables, tóxicos</li>
            </ul>
          </div>

          <div className="material-section">
            <h5>4️⃣ CARCASA Y ELECTRÓNICA (25% peso, ~100 kg)</h5>
            <ul>
              <li>Aluminio: 50-60 kg (carcasa, colectores de corriente)</li>
              <li>Cobre: 20-25 kg (cables, colectores)</li>
              <li>Acero, plásticos, BMS (sistema gestión): 20-30 kg</li>
            </ul>
          </div>
        </div>

        <div className="total-cost-summary">
          <h4>💰 COSTE TOTAL MATERIAS PRIMAS POR BATERÍA 60 kWh:</h4>
          <p>Precio materiales: ~3.000-4.500 € (40-50% del coste final batería)</p>

          <h4>🏭 RESUMEN ENERGÍA TOTAL: Minería + Refinado 1 batería 60 kWh</h4>
          <table className="energy-summary">
            <thead>
              <tr>
                <th>Material</th>
                <th>Cantidad (kg)</th>
                <th>Energía (kWh)</th>
                <th>Emisiones CO₂ (kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Litio</td>
                <td>10</td>
                <td>3.000-6.000</td>
                <td>2.000-4.000</td>
              </tr>
              <tr>
                <td>Cobalto</td>
                <td>8</td>
                <td>3.500-5.500</td>
                <td>3.000-4.500</td>
              </tr>
              <tr>
                <td>Níquel</td>
                <td>40</td>
                <td>2.700-4.200</td>
                <td>2.200-3.500</td>
              </tr>
              <tr>
                <td>Grafito</td>
                <td>60</td>
                <td>900-1.800</td>
                <td>800-1.500</td>
              </tr>
              <tr>
                <td>Otros (Al, Cu, Mn)</td>
                <td>80</td>
                <td>1.500-2.500</td>
                <td>1.000-2.000</td>
              </tr>
              <tr className="total-row">
                <td>EXTRACCIÓN TOTAL</td>
                <td>~200</td>
                <td>11.600-20.000</td>
                <td>9.000-15.500</td>
              </tr>
              <tr>
                <td>+ Fabricación celdas/ensamblaje</td>
                <td>-</td>
                <td>5.000-8.000</td>
                <td>3.000-5.000</td>
              </tr>
              <tr className="final-total">
                <td>= BATERÍA COMPLETA</td>
                <td>400 kg</td>
                <td>16.600-28.000</td>
                <td>12.000-20.500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mining-impact">
          <h4>🚜 MAQUINARIA INDUSTRIAL INVOLUCRADA (en una gran mina típica):</h4>
          <ul>
            <li>Excavadoras gigantes: 10-50 unidades operativas, 150-200 L/h diésel cada una</li>
            <li>Camiones mineros: 50-200 unidades, 300-400 L/h diésel cada uno</li>
            <li>Perforadoras: 20-100 unidades, 50-100 L/h diésel</li>
            <li>Bulldozers/niveladoras: 10-30 unidades, 100-170 L/h diésel</li>
            <li>Grúas torre/móviles: 5-20 unidades</li>
            <li>Plantas procesamiento: 50-200 MW eléctricos continuos (carbón/gas mayormente)</li>
            <li>Consumo diésel mina típica: 100.000-500.000 L/día</li>
            <li>Emisiones mina: 5.000-20.000 ton CO₂/día (¡una sola mina!)</li>
          </ul>
        </div>

        <Important>
          ⚠️ Paradoja ambiental: Para fabricar 1 batería "limpia" se consumen
          16.600-28.000 kWh mayormente de combustibles fósiles (diésel minería +
          carbón fundición), equivalente a 1.000-1.500 L gasolina.<br/><br/>

          PERO... Durante vida útil (150.000 km) el coche eléctrico compensa esto
          ahorrando 5.000-10.000 L gasolina, con balance neto positivo si electricidad
          es &gt;40% renovable. Después de ~30.000-50.000 km, el coche eléctrico ya es más limpio
          que uno de gasolina considerando fabricación + uso.
        </Important>
      </Concept>

      {/* NUEVO CONCEPTO: Reciclaje de baterías */}
      <Concept title="Reciclaje de baterías: Procesos y recuperación de materiales" emoji="♻️">
        <p>
          El reciclaje de baterías es fundamental para la economía circular y para reducir el
          impacto ambiental de la extracción minera. Existen tres métodos principales con diferentes
          tasas de recuperación y consumos energéticos.
        </p>

        <h4>🔄 MÉTODOS DE RECICLAJE:</h4>

        <div className="recycling-methods">
          <div className="method-card">
            <h5>1. Pirometalurgia (Fundición a 1.000-1.500°C)</h5>

            <h6>Proceso:</h6>
            <ul>
              <li>Trituración baterías sin desmontar</li>
              <li>Horno de fundición 1.000-1.500°C (gas natural/carbón)</li>
              <li>Separación metales por densidad (escoria superior, metales fondo)</li>
              <li>Refinado electrolítico metales recuperados</li>
            </ul>

            <h6>Recuperación:</h6>
            <ul>
              <li>✅ Cobalto: 95% recuperado</li>
              <li>✅ Níquel: 95% recuperado</li>
              <li>✅ Cobre: 98% recuperado</li>
              <li>❌ Litio: 0% (se evapora/quema)</li>
              <li>❌ Grafito: 0% (se quema)</li>
              <li>❌ Electrolito: 0% (se evapora/quema)</li>
              <li>❌ Aluminio: Parcial (aleado con otros metales)</li>
            </ul>

            <h6>Consumo energético:</h6>
            <p>15-20 kWh/kg batería (muy alto)</p>

            <h6>Emisiones:</h6>
            <p>5-8 kg CO₂/kg batería reciclada</p>

            <h6>Ventajas:</h6>
            <ul>
              <li>✅ Proceso simple y rápido</li>
              <li>✅ Acepta cualquier tipo batería</li>
              <li>✅ Recupera metales valiosos (Co, Ni)</li>
            </ul>

            <h6>Desventajas:</h6>
            <ul>
              <li>❌ Pierde litio y grafito (50% valor materiales)</li>
              <li>❌ Alto consumo energético</li>
              <li>❌ Emisiones atmosféricas (SOx, fluoruros)</li>
            </ul>
          </div>

          <div className="method-card highlight">
            <h5>2. Hidrometalurgia (Lixiviación química)</h5>

            <h6>Proceso:</h6>
            <ul>
              <li>Descarga profunda batería (seguridad)</li>
              <li>Desmontaje mecánico (separar carcasa, electrónica)</li>
              <li>Trituración celdas en atmósfera inerte (N₂/CO₂)</li>
              <li>Lixiviación: Ácidos (H₂SO₄, HCl) disuelven metales</li>
              <li>Precipitación selectiva: Sales diferentes para cada metal</li>
              <li>Electrólisis final: Recuperación metales puros</li>
            </ul>

            <h6>Recuperación:</h6>
            <ul>
              <li>✅ Litio: 95% recuperado (como carbonato Li₂CO₃)</li>
              <li>✅ Cobalto: 95% recuperado</li>
              <li>✅ Níquel: 95% recuperado</li>
              <li>✅ Manganeso: 80% recuperado</li>
              <li>✅ Cobre: 98% recuperado</li>
              <li>✅ Aluminio: 90% recuperado</li>
              <li>⚠️ Grafito: 50% recuperable (difícil purificar)</li>
              <li>❌ Electrolito: &lt;10% (descomposición en lixiviación)</li>
            </ul>

            <h6>Consumo energético:</h6>
            <p>5-10 kWh/kg batería (medio)</p>

            <h6>Residuos:</h6>
            <ul>
              <li>Agua contaminada con ácidos, metales pesados</li>
              <li>Requiere tratamiento neutralización + precipitación</li>
              <li>Lodos con sales metálicas (vertedero controlado)</li>
            </ul>

            <h6>Ventajas:</h6>
            <ul>
              <li>✅ Recupera litio (crítico económicamente)</li>
              <li>✅ Alta tasa recuperación (90-95% metales)</li>
              <li>✅ Menor consumo energético que pirometalurgia</li>
              <li>✅ Materiales muy puros</li>
            </ul>

            <h6>Desventajas:</h6>
            <ul>
              <li>❌ Proceso complejo multi-etapa</li>
              <li>❌ Requiere desmontaje previo (mano obra)</li>
              <li>❌ Genera aguas residuales tóxicas</li>
              <li>❌ Uso intensivo productos químicos peligrosos</li>
            </ul>
          </div>

          <div className="method-card">
            <h5>3. Reciclaje directo (Experimental/Emergente)</h5>

            <h6>Proceso:</h6>
            <ul>
              <li>Desmontaje cuidadoso manual/robótico</li>
              <li>Separación cátodo/ánodo intactos</li>
              <li>Tratamiento térmico suave (~400°C) para eliminar aglutinantes</li>
              <li>Regeneración química superficial del cátodo</li>
              <li>Reacondicionamiento directo en nuevas celdas</li>
            </ul>

            <h6>Recuperación:</h6>
            <ul>
              <li>✅ Todos los materiales: Hasta 98% recuperables</li>
              <li>✅ Cátodo regenerado directamente (estructura cristalina preservada)</li>
              <li>✅ Grafito reutilizable con tratamiento mínimo</li>
            </ul>

            <h6>Consumo energético:</h6>
            <p>2-5 kWh/kg batería (¡muy eficiente!)</p>

            <h6>Ventajas:</h6>
            <ul>
              <li>✅ Mínimo consumo energético</li>
              <li>✅ Máxima recuperación materiales (98%)</li>
              <li>✅ Preserva estructura cristalina (mejor rendimiento)</li>
              <li>✅ Mínimos residuos</li>
            </ul>

            <h6>Desventajas:</h6>
            <ul>
              <li>❌ Requiere baterías misma química (no mixtas)</li>
              <li>❌ Proceso complejo, intensivo mano de obra</li>
              <li>❌ Aún en desarrollo (pocas plantas industriales)</li>
              <li>❌ No escala bien para gran volumen</li>
            </ul>
          </div>
        </div>

        <h4>📊 TASAS DE RECICLAJE ACTUALES (UE 2024):</h4>
        <table className="recycling-rates">
          <thead>
            <tr>
              <th>Material</th>
              <th>Tasa recuperación</th>
              <th>Método principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cobalto</td>
              <td>90-95%</td>
              <td>Pirometalurgia + Hidrometalurgia</td>
            </tr>
            <tr>
              <td>Níquel</td>
              <td>90-95%</td>
              <td>Pirometalurgia + Hidrometalurgia</td>
            </tr>
            <tr>
              <td>Cobre</td>
              <td>95-98%</td>
              <td>Todos los métodos</td>
            </tr>
            <tr>
              <td>Aluminio</td>
              <td>90-95%</td>
              <td>Mecánico + Pirometalurgia</td>
            </tr>
            <tr>
              <td>Litio</td>
              <td>60-70%</td>
              <td>Hidrometalurgia (mejorando)</td>
            </tr>
            <tr>
              <td>Grafito</td>
              <td>20-50%</td>
              <td>Hidrometalurgia (difícil purificar)</td>
            </tr>
            <tr>
              <td>Electrolito</td>
              <td>&lt;10%</td>
              <td>Mayormente incinerado</td>
            </tr>
            <tr>
              <td>Plásticos/separadores</td>
              <td>30-50%</td>
              <td>Térmicamente valorizado (energía)</td>
            </tr>
          </tbody>
        </table>

        <h4>💶 ECONOMÍA DEL RECICLAJE:</h4>
        <ul>
          <li>Coste reciclaje: 500-1.500 €/tonelada batería</li>
          <li>Valor materiales recuperados: 1.500-3.000 €/tonelada</li>
          <li>Balance: Rentable para metales valiosos (Co, Ni), no para Li/grafito (aún)</li>
          <li>Legislación UE: Obliga reciclaje mínimo 65% peso batería (2025), 70% (2030)</li>
          <li>Objetivo 2030: 95% cobalto, 95% níquel, 80% litio recuperado</li>
        </ul>

        <h4>🔄 SEGUNDA VIDA DE BATERÍAS (REUSO):</h4>
        <p>
          Baterías de coches eléctricos con 70-80% capacidad ya no sirven para vehículos (autonomía
          reducida), pero son perfectas para almacenamiento estacionario solar:
        </p>
        <ul>
          <li>Aplicaciones: Almacenamiento doméstico, industrial, estabilización red</li>
          <li>Vida útil segunda vida: 5-10 años adicionales</li>
          <li>Coste: 50-100 €/kWh (vs 200-400 €/kWh nueva batería solar)</li>
          <li>Ejemplos: Nissan xStorage, BMW Energy Storage, Renault PowerVault</li>
        </ul>

        <Example>
          Ciclo vida completo batería 60 kWh:<br/>
          1. Fabricación: 16.600-28.000 kWh energía, 12.000-20.500 kg CO₂<br/>
          2. Uso coche eléctrico: 8-12 años, 150.000-200.000 km<br/>
          3. Segunda vida (almacenamiento solar): 5-10 años adicionales<br/>
          4. Reciclaje: Recuperación 70-95% materiales → Nuevas baterías<br/>
          <br/>
          Resultado: 20-25 años vida útil total, reduciendo impacto ambiental
          por cada kWh almacenado a menos del 30% vs fabricación siempre nueva.
        </Example>
      </Concept>

      {/* NUEVO CONCEPTO: Componentes peligrosos y seguridad */}
      <Concept title="Componentes peligrosos y gestión segura de baterías" emoji="⚠️">
        <p>
          Las baterías de iones de litio contienen materiales peligrosos que requieren manipulación,
          almacenamiento y eliminación cuidadosos. Es fundamental conocer los riesgos para garantizar
          la seguridad.
        </p>

        <h4>🔥 PELIGROS PRINCIPALES:</h4>

        <div className="hazards-section">
          <div className="hazard-card danger">
            <h5>1. Incendio Térmico (Thermal Runaway)</h5>

            <h6>¿Qué es?</h6>
            <p>
              Reacción exotérmica descontrolada donde la batería se autocalienta hasta la destrucción. Es el riesgo más peligroso de las baterías Li-Ion.
            </p>

            <h6>Mecanismo:</h6>
            <ul>
              <li>Temperatura crítica: &gt;80-100°C inicia reacción exotérmica</li>
              <li>Descomposición electrolito → Gases inflamables + calor</li>
              <li>Reacción cátodo-ánodo → Más calor (retroalimentación positiva)</li>
              <li>Temperatura puede alcanzar 600-800°C</li>
              <li>Libera gases tóxicos: CO, CO₂, HF (fluorhídrico), POF₃</li>
            </ul>

            <h6>Causas:</h6>
            <ul>
              <li>❌ Daño físico: Perforación, aplastamiento → cortocircuito interno</li>
              <li>❌ Sobrecarga: Voltaje &gt;4.2V/celda → deposición metálica litio</li>
              <li>❌ Cortocircuito externo: Contacto terminales (+/-)</li>
              <li>❌ Calor externo: Exposición fuego, radiador, coche sol verano</li>
              <li>❌ Defecto fabricación: Separador defectuoso, dendrites litio</li>
            </ul>

            <h6>Extinción:</h6>
            <ul>
              <li>NO usar agua inicial: Reacciona violentamente con litio metálico</li>
              <li>Arena seca/polvo químico: Primera línea defensa</li>
              <li>Agua abundante (después): Enfriar hasta &lt;60°C (horas)</li>
              <li>Contenedor aislado: Dejar quemar controladamente si no hay riesgo</li>
              <li>Profesional: Incendios grandes requieren bomberos especializados</li>
            </ul>

            <h6>Prevención:</h6>
            <ul>
              <li>✅ BMS (Battery Management System): Monitoriza voltaje, corriente, temperatura</li>
              <li>✅ Fusibles térmicos: Cortan circuito si T&gt;85-95°C</li>
              <li>✅ Válvulas alivio presión: Evitan explosión carcasa</li>
              <li>✅ Separadores cerámicos: Resisten 150-200°C sin colapsar</li>
            </ul>
          </div>

          <div className="hazard-card warning">
            <h5>2. Electrolito (LiPF₆ + Solventes orgánicos)</h5>

            <h6>Composición:</h6>
            <ul>
              <li>Hexafluorofosfato de litio (LiPF₆): 10-15%</li>
              <li>Carbonatos orgánicos (EC, DMC, DEC): 85-90%</li>
            </ul>

            <h6>Peligros:</h6>
            <ul>
              <li>⚠️ Altamente inflamable: Punto inflamación 25-35°C (temperatura ambiente)</li>
              <li>⚠️ Reacción con agua: LiPF₆ + H₂O → HF (ácido fluorhídrico) + POF₃ (muy tóxico)</li>
              <li>⚠️ Vapores tóxicos: Inhalación causa daño respiratorio, edema pulmonar</li>
              <li>⚠️ Contacto piel: Quemaduras químicas, absorción percutánea</li>
              <li>☠️ DL50 (dosis letal 50%): 50-100 mg/kg (muy tóxico)</li>
            </ul>

            <h6>Ácido fluorhídrico (HF - de descomposición):</h6>
            <ul>
              <li>☠️ Extremadamente corrosivo: Quemaduras profundas, necrosis ósea</li>
              <li>☠️ Neurotóxico: Interfiere metabolismo calcio → arritmias cardíacas</li>
              <li>Exposición 2.5% piel &gt;25 cm² puede ser letal</li>
              <li>Tratamiento emergencia: Gel gluconato cálcico (neutraliza F⁻)</li>
            </ul>
          </div>

          <div className="hazard-card warning">
            <h5>3. Cobalto y sales de cobalto</h5>

            <h6>Toxicidad:</h6>
            <ul>
              <li>☠️ Cancerígeno categoría 1B (IARC): Cáncer pulmón confirmado</li>
              <li>⚠️ Daño pulmonar crónico: Fibrosis, enfermedad pulmonar intersticial</li>
              <li>⚠️ Toxicidad reproductiva: Daño espermatozoides, malformaciones fetales</li>
              <li>⚠️ Neurológico: Temblores, déficit cognitivo (exposición crónica)</li>
              <li>Límite exposición laboral: 0,02 mg/m³ aire (muy estricto)</li>
            </ul>

            <h6>Vías exposición:</h6>
            <ul>
              <li>Inhalación polvo durante reciclaje/manipulación</li>
              <li>Contacto dérmico con sales solubles</li>
              <li>Ingesta accidental (muy peligroso)</li>
            </ul>
          </div>

          <div className="hazard-card warning">
            <h5>4. Fluoruros (de descomposición LiPF₆)</h5>

            <h6>Efectos:</h6>
            <ul>
              <li>☠️ HF (ácido fluorhídrico): Ya descrito arriba</li>
              <li>⚠️ Fluorosis: Acumulación F⁻ en huesos → fragilidad, dolor</li>
              <li>⚠️ Daño renal: Nefrotoxicidad, insuficiencia renal</li>
              <li>Dosis letal: 5-10 g fluoruro para adulto (2-3 g para niño)</li>
            </ul>
          </div>
        </div>

        <h4>📦 ALMACENAMIENTO SEGURO BATERÍAS USADAS/DAÑADAS:</h4>

        <div className="storage-guidelines">
          <div className="storage-level">
            <h5>NIVEL 1: Almacenamiento temporal doméstico (batería pequeña dañada)</h5>

            <h6>Procedimiento:</h6>
            <ul>
              <li>✅ Cubrir terminales: Cinta aislante gruesa (evitar cortocircuito)</li>
              <li>✅ Recipiente no metálico: Plástico rígido, cerámica</li>
              <li>✅ Arena seca: Cubrir batería (absorbe electrolito si fuga)</li>
              <li>✅ Lugar fresco, seco, ventilado: Temperatura 5-25°C, lejos combustibles</li>
              <li>✅ Llevar punto limpio/reciclaje: En &lt;7 días (no acumular)</li>
            </ul>

            <h6>❌ NUNCA:</h6>
            <ul>
              <li>❌ Tirar basura común: Multa 3.000-9.000 € + daño ambiental</li>
              <li>❌ Apilar baterías (riesgo cortocircuito)</li>
              <li>❌ Cerca fuentes calor/ignición</li>
              <li>❌ Intentar desmontar (riesgo cortocircuito, electrolito)</li>
            </ul>
          </div>

          <div className="storage-level">
            <h5>NIVEL 2: Almacenamiento profesional temporal (taller, punto limpio)</h5>

            <h6>Requisitos normativa ADR (transporte mercancías peligrosas):</h6>
            <ul>
              <li>Clasificación: UN 3480 (baterías litio) - Clase 9 (varios peligrosos)</li>
              <li>Contenedores certificados: Anti-incendio, anti-impacto</li>
              <li>Separación: Mínimo 2 metros entre baterías/grupos</li>
              <li>Temperatura controlada: 5-25°C óptimo (climatización)</li>
              <li>Ventilación forzada: Evacuación gases, 6-10 renovaciones/hora</li>
              <li>Descarga al 30-50%: Estado más seguro (menor energía disponible)</li>
              <li>Señalización: Peligro eléctrico + inflamable + tóxico</li>
              <li>Extintor específico: Arena seca, CO₂, polvo químico (clase D)</li>
            </ul>

            <h6>Inspección periódica:</h6>
            <ul>
              <li>Visual: Hinchazón, deformación, fugas (diario)</li>
              <li>Temperatura superficial: &lt;40°C (semanal con termómetro IR)</li>
              <li>Voltaje: No aumenta espontáneamente (mensual)</li>
            </ul>
          </div>

          <div className="storage-level">
            <h5>NIVEL 3: Almacenamiento industrial largo plazo (planta reciclaje)</h5>

            <h6>Infraestructura:</h6>
            <ul>
              <li>Búnkers hormigón armado: Paredes 30-50 cm, techo reforzado</li>
              <li>Compartimentación: Celdas independientes (contención incendio)</li>
              <li>Sistema extinción automático:
                <ul>
                  <li>Rociadores agua (inundación masiva para enfriar)</li>
                  <li>Arena seca descarga gravitatoria</li>
                  <li>CO₂ inundación total (solo si evacuación previa)</li>
                </ul>
              </li>
              <li>Monitorización continua 24/7:
                <ul>
                  <li>Cámaras térmicas (detección puntos calientes)</li>
                  <li>Sensores temperatura cada 5 m (alarma &gt;50°C)</li>
                  <li>Detectores gases (CO, HF, COVs)</li>
                  <li>Central control con protocolo evacuación</li>
                </ul>
              </li>
              <li>Protocolo evacuación: &lt;2 min (riesgo explosión por sobrepresión)</li>
              <li>Coste: 50-100 €/batería/año en instalación certificada</li>
            </ul>
          </div>
        </div>

        <h4>🚨 PROTOCOLO EMERGENCIA INCENDIO BATERÍA:</h4>

        <div className="emergency-protocol">
          <h5>EN CASA (batería pequeña):</h5>
          <ol>
            <li>Evacuar inmediatamente (vapores tóxicos)</li>
            <li>Llamar 112 informar "incendio batería litio"</li>
            <li>Si es seguro: Cubrir con arena seca/polvo extintor</li>
            <li>Abrir ventanas (evacuación humos), cerrar puerta habitación</li>
            <li>NO volver hasta autorización bomberos</li>
          </ol>

          <h5>COCHE ELÉCTRICO:</h5>
          <ol>
            <li>Abandonar vehículo, alejarse 50+ metros</li>
            <li>Llamar 112 especificar "vehículo eléctrico"</li>
            <li>Bomberos necesitan 10.000-20.000 L agua para enfriar batería (horas)</li>
            <li>Riesgo re-ignición hasta 24-48h después (monitorización)</li>
            <li>Grúa especializada para transporte (contendor anti-incendio)</li>
          </ol>

          <h5>INDUSTRIAL:</h5>
          <ol>
            <li>Activación alarma automática</li>
            <li>Evacuación personal (&lt;2 min)</li>
            <li>Sistema extinción automático</li>
            <li>Bomberos especializados HazMat</li>
            <li>Investigación causa raíz</li>
          </ol>
        </div>

        <Important>
          Estadísticas de seguridad:<br/>
          • Incendios baterías Li-Ion: ~1 cada 10 millones celdas fabricadas<br/>
          • Coches eléctricos: 25 incendios por 100.000 vehículos/año<br/>
          • Coches gasolina: 1.500 incendios por 100.000 vehículos/año<br/>
          <br/>
          Conclusión: Aunque los incendios de baterías Li-Ion son espectaculares,
          los coches eléctricos tienen 60x menos probabilidad de incendiarse que
          los de gasolina. La gasolina es mucho más inflamable (punto inflamación -43°C vs 25-35°C electrolito).
        </Important>

        <Example>
          Caso real - Tesla Model S incendio (2013):<br/>
          • Causa: Objeto metálico en carretera perforó batería<br/>
          • Reacción: Thermal runaway, fuego intenso<br/>
          • Conductor: Evacuó sin lesiones (BMS alertó antes)<br/>
          • Bomberos: 3 horas enfriando batería con agua<br/>
          • Resultado: Tesla mejoró blindaje inferior (+titanio)<br/>
          <br/>
          Lección: Sistemas seguridad (BMS, alertas, compartimentación) son cruciales.
          Incendio fue controlado sin lesiones gracias a diseño seguro y respuesta rápida.
        </Example>
      </Concept>

      {/* NUEVO CONCEPTO: Balance energético completo ciclo vida */}
      <Concept title="Balance energético completo: Fabricación + Uso + Reciclaje" emoji="⚖️">
        <p>
          Para evaluar correctamente el impacto ambiental de los coches eléctricos, debemos
          considerar todo el ciclo de vida: fabricación de la batería, uso durante
          años, y reciclaje final. Veamos el balance completo.
        </p>

        <h4>📊 TABLA COMPARATIVA: Coste energético y emisiones totales</h4>

        <div className="lifecycle-analysis">
          <h5>Escenario: Batería 60 kWh, vida útil 150.000 km</h5>

          <table className="lifecycle-table">
            <thead>
              <tr>
                <th>Fase</th>
                <th>Energía (kWh)</th>
                <th>Emisiones CO₂ (kg)</th>
                <th>Detalles</th>
              </tr>
            </thead>
            <tbody>
              <tr className="phase-header">
                <td colSpan="4">1️⃣ FABRICACIÓN BATERÍA</td>
              </tr>
              <tr>
                <td>Extracción minerales</td>
                <td>11.600-20.000</td>
                <td>9.000-15.500</td>
                <td>Minería Li, Co, Ni, grafito</td>
              </tr>
              <tr>
                <td>Fabricación celdas</td>
                <td>5.000-8.000</td>
                <td>3.000-5.000</td>
                <td>Ensamblaje, electrónica</td>
              </tr>
              <tr className="subtotal">
                <td>Subtotal fabricación</td>
                <td>16.600-28.000</td>
                <td>12.000-20.500</td>
                <td>Equivale a 1.000-1.500 L gasolina</td>
              </tr>

              <tr className="phase-header">
                <td colSpan="4">2️⃣ USO DURANTE VIDA ÚTIL (150.000 km)</td>
              </tr>
              <tr>
                <td>Carga electricidad</td>
                <td>27.000-30.000</td>
                <td>5.400-15.000</td>
                <td>18-20 kWh/100km (mix eléctrico variable)</td>
              </tr>
              <tr>
                <td colSpan="4">
                  <em>Desglose según mix eléctrico:</em>
                  <ul>
                    <li>🇳🇴 Noruega (98% renovable): 540 kg CO₂</li>
                    <li>🇪🇸 España (55% renovable): 8.100 kg CO₂</li>
                    <li>🇵🇱 Polonia (80% carbón): 15.000 kg CO₂</li>
                  </ul>
                </td>
              </tr>

              <tr className="phase-header">
                <td colSpan="4">3️⃣ RECICLAJE FINAL (hidrometalurgia)</td>
              </tr>
              <tr>
                <td>Proceso reciclaje</td>
                <td>2.000-4.000</td>
                <td>1.000-2.000</td>
                <td>5-10 kWh/kg × 400 kg batería</td>
              </tr>
              <tr>
                <td>Materiales recuperados</td>
                <td><em>-8.000 a -14.000</em></td>
                <td><em>-5.000 a -10.000</em></td>
                <td>Crédito: Evita nueva extracción 70-95%</td>
              </tr>
              <tr className="subtotal">
                <td>Subtotal reciclaje (neto)</td>
                <td>-6.000 a -10.000</td>
                <td>-4.000 a -8.000</td>
                <td>Balance positivo (ahorro)</td>
              </tr>

              <tr className="total-row">
                <td>TOTAL COCHE ELÉCTRICO</td>
                <td>37.600-48.000</td>
                <td>13.400-27.500</td>
                <td>Según mix eléctrico país</td>
              </tr>
            </tbody>
          </table>

          <h5>Comparación con coche gasolina equivalente (150.000 km)</h5>

          <table className="comparison-table">
            <thead>
              <tr>
                <th>Concepto</th>
                <th>Coche Gasolina</th>
                <th>Coche Eléctrico (España)</th>
                <th>Diferencia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fabricación vehículo</td>
                <td>8.000 kg CO₂</td>
                <td>12.000-20.500 kg CO₂</td>
                <td>+50-150% (batería)</td>
              </tr>
              <tr>
                <td>Uso 150.000 km</td>
                <td>24.000 kg CO₂</td>
                <td>8.100 kg CO₂</td>
                <td>-66%</td>
              </tr>
              <tr>
                <td>Reciclaje</td>
                <td>+500 kg CO₂</td>
                <td>-6.000 kg CO₂</td>
                <td>Ahorro neto</td>
              </tr>
              <tr className="total-row">
                <td>TOTAL CICLO VIDA</td>
                <td>32.500 kg CO₂</td>
                <td>14.100-22.600 kg CO₂</td>
                <td>-30 a -57%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>🎯 PUNTO DE EQUILIBRIO (Break-even point):</h4>
        <p>
          ¿Cuántos kilómetros necesita recorrer un coche eléctrico para compensar la mayor
          huella de carbono de fabricación?
        </p>

        <div className="breakeven-analysis">
          <h5>Cálculo del punto de equilibrio:</h5>
          <ul>
            <li>Diferencia fabricación: +12.000-20.500 kg CO₂ (batería)</li>
            <li>Ahorro por km:
              <ul>
                <li>Gasolina: 160 g CO₂/km (7 L/100km × 2.3 kg/L)</li>
                <li>Eléctrico España: 54 g CO₂/km (18 kWh/100km × 0.3 kg/kWh)</li>
                <li>Diferencia: 106 g CO₂/km ahorrados</li>
              </ul>
            </li>
          </ul>

          <div className="breakeven-result">
            <h6>📍 Punto de equilibrio según mix eléctrico:</h6>
            <table>
              <thead>
                <tr>
                  <th>País (mix eléctrico)</th>
                  <th>Emisiones carga (g/km)</th>
                  <th>Ahorro vs gasolina (g/km)</th>
                  <th>Punto equilibrio (km)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>🇳🇴 Noruega (98% renovable)</td>
                  <td>4</td>
                  <td>156</td>
                  <td>13.000-21.000</td>
                </tr>
                <tr>
                  <td>🇪🇸 España (55% renovable)</td>
                  <td>54</td>
                  <td>106</td>
                  <td>30.000-50.000</td>
                </tr>
                <tr>
                  <td>🇩🇪 Alemania (45% renovable)</td>
                  <td>75</td>
                  <td>85</td>
                  <td>38.000-65.000</td>
                </tr>
                <tr>
                  <td>🇵🇱 Polonia (20% renovable)</td>
                  <td>100</td>
                  <td>60</td>
                  <td>50.000-85.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Important>
            Conclusión punto de equilibrio:<br/>
            En España, un coche eléctrico es más limpio que gasolina después de ~40.000 km
            (2-3 años uso típico). A partir de ese momento, cada km recorrido tiene 66% menos emisiones.<br/><br/>

            Con electricidad 100% renovable, el punto de equilibrio baja a ~17.000 km (1 año),
            haciendo el coche eléctrico claramente superior ambientalmente.
          </Important>
        </div>

        <h4>🔄 IMPACTO DEL RECICLAJE EN EL BALANCE:</h4>
        <p>
          El reciclaje mejora significativamente el balance ambiental al evitar nueva extracción minera:
        </p>

        <table className="recycling-impact">
          <thead>
            <tr>
              <th>Escenario</th>
              <th>Emisiones totales 150.000 km (kg CO₂)</th>
              <th>Ahorro vs gasolina</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sin reciclaje (vertedero)</td>
              <td>22.100</td>
              <td>-32%</td>
            </tr>
            <tr>
              <td>Reciclaje pirometalurgia (60%)</td>
              <td>18.600</td>
              <td>-43%</td>
            </tr>
            <tr className="highlight">
              <td>Reciclaje hidrometalurgia (90%)</td>
              <td>14.100</td>
              <td>-57%</td>
            </tr>
            <tr>
              <td>Reciclaje directo futuro (95%)</td>
              <td>12.500</td>
              <td>-62%</td>
            </tr>
          </tbody>
        </table>

        <Example>
          Caso real: Tesla Model 3 (batería 60 kWh) en España<br/>
          • Fabricación batería: 15.000 kg CO₂<br/>
          • Fabricación vehículo: 5.000 kg CO₂<br/>
          • Uso 10 años (200.000 km): 10.800 kg CO₂<br/>
          • Reciclaje hidrometalurgia: -6.000 kg CO₂<br/>
          Total: 24.800 kg CO₂<br/><br/>

          Coche gasolina equivalente (200.000 km):<br/>
          • Fabricación: 8.000 kg CO₂<br/>
          • Uso: 32.000 kg CO₂<br/>
          • Reciclaje: +500 kg CO₂<br/>
          Total: 40.500 kg CO₂<br/><br/>

          → Tesla ahorra 15.700 kg CO₂ (39% menos)<br/>
          • Equivale a: 7.000 L gasolina no quemados<br/>
          • O: 78 árboles plantados y crecidos 10 años
        </Example>
      </Concept>

      {/* NUEVO CONCEPTO: Residuos no reciclables */}
      <Concept title="Residuos no reciclables y su gestión a largo plazo" emoji="☣️">
        <p>
          Aunque el reciclaje de baterías recupera 70-95% de los materiales, existe una fracción
          que no es reciclable y debe gestionarse como residuo peligroso durante
          décadas o siglos. Analicemos qué pasa con estos residuos.
        </p>

        <h4>🗑️ COMPONENTES NO RECICLABLES:</h4>

        <div className="non-recyclable-components">
          <div className="component-card">
            <h5>1. Electrolito y solventes orgánicos (~5-10% peso batería)</h5>

            <h6>Composición:</h6>
            <ul>
              <li>Hexafluorofosfato de litio (LiPF₆): 3-5 kg/batería</li>
              <li>Carbonatos orgánicos (EC, DMC, DEC): 10-15 kg/batería</li>
              <li>Aditivos estabilizadores: 1-2 kg/batería</li>
            </ul>

            <h6>Destino actual:</h6>
            <ul>
              <li>Incineración controlada (70%): Quemado a 850-1.100°C en plantas especializadas
                <ul>
                  <li>Genera HF (fluorhídrico) → Neutralizado con cal (Ca(OH)₂) → CaF₂ inerte</li>
                  <li>CO₂ emitido: 2-3 kg CO₂ por kg electrolito quemado</li>
                  <li>Cenizas: Sales fluoruros → Vertedero Clase 1 (residuos peligrosos)</li>
                </ul>
              </li>
              <li>Tratamiento químico (20%): Neutralización ácido-base → Sales estables
                <ul>
                  <li>Residuo: Lodos con fluoruros de calcio/sodio</li>
                  <li>Estabilización: Mezcla cemento → Bloque sólido inerte</li>
                </ul>
              </li>
              <li>Vertedero directo (10%): Países con normativa laxa (no recomendado)</li>
            </ul>

            <h6>Tiempo de degradación:</h6>
            <ul>
              <li>Carbonatos orgánicos: 10-50 años (biodegradación lenta)</li>
              <li>Sales de fluoruro (CaF₂, LiF): Permanentes (inertes, no se descomponen)</li>
              <li>Riesgo: Lixiviación a acuíferos si vertedero mal sellado</li>
            </ul>

            <h6>Impacto ambiental:</h6>
            <ul>
              <li>⚠️ Fluoruros en agua: Tóxico peces &gt;1 mg/L, humanos &gt;4 mg/L</li>
              <li>⚠️ Contaminación suelo: Inhibe crecimiento plantas</li>
              <li>💰 Coste gestión: 500-1.500 €/tonelada (incineración controlada)</li>
            </ul>
          </div>

          <div className="component-card">
            <h5>2. Separadores y membranas (~3-5% peso batería)</h5>

            <h6>Composición:</h6>
            <ul>
              <li>Polietileno microporoso (PE): 3-5 kg/batería</li>
              <li>Polipropileno (PP): 2-3 kg/batería</li>
              <li>Recubrimientos cerámicos (Al₂O₃, ZrO₂): 0.5-1 kg/batería</li>
            </ul>

            <h6>Destino actual:</h6>
            <ul>
              <li>Valorización energética (60%): Incineración para recuperar energía
                <ul>
                  <li>Poder calorífico: ~40 MJ/kg (similar gasóleo)</li>
                  <li>Uso: Cementeras, centrales térmicas</li>
                  <li>Emisiones: 3 kg CO₂ por kg plástico quemado</li>
                </ul>
              </li>
              <li>Reciclaje mecánico (20%): Trituración → Plástico reciclado bajo grado
                <ul>
                  <li>Aplicaciones: Mobiliario urbano, palés, construcción</li>
                  <li>Degradación calidad: Pierde 30-50% propiedades</li>
                </ul>
              </li>
              <li>Vertedero (20%): Plásticos contaminados no reciclables</li>
            </ul>

            <h6>Tiempo de degradación en vertedero:</h6>
            <ul>
              <li>Polietileno (PE): 200-500 años</li>
              <li>Polipropileno (PP): 100-300 años</li>
              <li>Cerámicas (Al₂O₃): Permanentes (inertes, como rocas)</li>
            </ul>

            <h6>Impacto ambiental:</h6>
            <ul>
              <li>⚠️ Microplásticos: Fragmentación → Partículas &lt;5mm → Cadena alimentaria</li>
              <li>⚠️ Aditivos tóxicos: Ftalatos, retardantes llama (persistentes)</li>
              <li>💰 Coste gestión vertedero: 50-150 €/tonelada</li>
            </ul>
          </div>

          <div className="component-card">
            <h5>3. Residuos de proceso reciclaje (~5-15% peso batería)</h5>

            <h6>Origen:</h6>
            <ul>
              <li>Electrolito evaporado/descompuesto</li>
              <li>Grafito degradado (no purificable)</li>
              <li>Plásticos contaminados con metales</li>
              <li>Lodos hidrometalurgia (sales mixtas no recuperables)</li>
            </ul>

            <h6>Composición típica lodos reciclaje:</h6>
            <ul>
              <li>Sales metálicas mixtas: Fe, Mn, Al, Zn (40-60%)</li>
              <li>Residuos orgánicos carbonizados (20-30%)</li>
              <li>Fluoruros, sulfatos (10-20%)</li>
              <li>Agua y aglutinantes (10-20%)</li>
            </ul>

            <h6>Destino:</h6>
            <ul>
              <li>Vertedero Clase 1 (residuos peligrosos):
                <ul>
                  <li>Estabilización previa: Mezcla cemento/cal → Monolito sólido</li>
                  <li>Celdas impermeabilizadas: Geomembrana HDPE 2-3 mm</li>
                  <li>Monitorización lixiviados: Análisis trimestral 30 años</li>
                </ul>
              </li>
            </ul>

            <h6>Tiempo de gestión requerido:</h6>
            <ul>
              <li>Monitorización activa: 30-50 años</li>
              <li>Monitorización pasiva: 50-100 años adicionales</li>
              <li>Estabilización total: 200-500 años</li>
            </ul>

            <h6>Impacto ambiental:</h6>
            <ul>
              <li>⚠️ Riesgo lixiviación metales pesados a acuíferos</li>
              <li>⚠️ Ocupación terreno: 1 m³/tonelada residuo</li>
              <li>💰 Coste gestión: 200-500 €/tonelada (30 años monitorización)</li>
            </ul>
          </div>
        </div>

        <h4>🏭 ALMACENAMIENTO A LARGO PLAZO (comparación con residuos nucleares):</h4>

        <table className="long-term-storage">
          <thead>
            <tr>
              <th>Aspecto</th>
              <th>Residuos Baterías Li-Ion</th>
              <th>Residuos Nucleares</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cantidad generada</td>
              <td>15-30 kg/batería<br/>(5-10% peso)</td>
              <td>30 ton/año reactor 1.000 MW<br/>(altamente concentrado)</td>
            </tr>
            <tr>
              <td>Peligrosidad</td>
              <td>Tóxica química<br/>(fluoruros, metales pesados)</td>
              <td>Radiactiva<br/>(partículas alfa, beta, gamma)</td>
            </tr>
            <tr>
              <td>Tiempo peligroso</td>
              <td>50-500 años<br/>(degradación progresiva)</td>
              <td>10.000-100.000 años<br/>(desintegración radiactiva)</td>
            </tr>
            <tr>
              <td>Tipo almacenamiento</td>
              <td>Vertedero superficial Clase 1<br/>Impermeabilización geomembrana<br/>Profundidad 5-20 m</td>
              <td>Almacén geológico profundo<br/>Túneles roca estable<br/>Profundidad 400-1.000 m</td>
            </tr>
            <tr>
              <td>Monitorización</td>
              <td>30-50 años activa<br/>50-100 años pasiva</td>
              <td>10.000+ años<br/>(generaciones futuras)</td>
            </tr>
            <tr>
              <td>Coste gestión</td>
              <td>200-500 €/ton residuo<br/>10-20 €/batería reciclada</td>
              <td>1-2 millones €/ton residuo<br/>Coste total incierto</td>
            </tr>
            <tr>
              <td>Riesgo catastrófico</td>
              <td>Bajo<br/>(contaminación localizada)</td>
              <td>Medio-Alto<br/>(contaminación radiactiva extensa)</td>
            </tr>
            <tr>
              <td>Solución disponible</td>
              <td>SÍ<br/>(tecnología madura)</td>
              <td>Parcial<br/>(no hay almacén definitivo operativo)</td>
            </tr>
          </tbody>
        </table>

        <h4>📊 BALANCE COMPARATIVO RESIDUOS:</h4>

        <div className="waste-comparison">
          <h5>Residuos generados por 150.000 km recorridos:</h5>

          <table>
            <thead>
              <tr>
                <th>Vehículo</th>
                <th>Residuos peligrosos</th>
                <th>Tiempo gestión</th>
                <th>Coste gestión</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Coche eléctrico</td>
                <td>20-40 kg<br/>(electrolito, plásticos, lodos)</td>
                <td>50-500 años</td>
                <td>200-800 €</td>
              </tr>
              <tr>
                <td>Coche gasolina</td>
                <td>30-50 kg<br/>(aceites, filtros, catalizador)</td>
                <td>20-200 años</td>
                <td>150-500 €</td>
              </tr>
              <tr>
                <td>Electricidad nuclear<br/>(para cargar EV)</td>
                <td>0.1 kg residuos alta actividad<br/>(por 27.000 kWh carga)</td>
                <td>10.000-100.000 años</td>
                <td>10.000-50.000 €<br/>(estimación incierta)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Important>
          Conclusión gestión residuos:<br/>
          Los residuos no reciclables de baterías Li-Ion son manejables comparados con
          residuos nucleares:<br/>
          • Menor cantidad: 20-40 kg vs toneladas de residuos radiactivos<br/>
          • Menor duración: 50-500 años vs 10.000-100.000 años<br/>
          • Tecnología disponible: Vertederos Clase 1 operativos vs no hay almacén nuclear definitivo<br/>
          • Coste razonable: 200-800 € vs 10.000-50.000 € por vehículo<br/><br/>

          Sin embargo, el objetivo a largo plazo es mejorar reciclaje hasta 98-99%
          (reciclaje directo) para minimizar residuos permanentes. La investigación avanza hacia
          baterías sin cobalto (LFP, sodio) y electrolitos sólidos menos tóxicos.
        </Important>

        <Example>
          Proyecto real: Vertedero especializado baterías (Alemania):<br/>
          • Ubicación: Antigua mina sal estabilizada<br/>
          • Capacidad: 100.000 ton residuos baterías<br/>
          • Profundidad: 700 m (aislamiento geológico)<br/>
          • Celdas impermeabilizadas: Geomembrana HDPE + arcilla bentónica<br/>
          • Monitorización: Sensores pH, conductividad, metales pesados (lectura remota)<br/>
          • Duración garantizada: 200 años sin lixiviación<br/>
          • Coste operación: 300 €/ton residuo<br/>
          <br/>
          Resultado: Almacenamiento seguro a largo plazo con impacto ambiental mínimo,
          muy inferior a residuos nucleares o vertederos convencionales mal gestionados.
        </Example>
      </Concept>

      {/* Concepto 5: Futuro del almacenamiento */}
      <Concept title="Futuro: Baterías de nueva generación" emoji="🚀">
        <p>
          La investigación en baterías está en pleno auge, con tecnologías emergentes que
          prometen revolucionar el almacenamiento energético:
        </p>

        <div className="future-batteries">
          <div className="tech-card">
            <h5>🔬 Estado sólido</h5>
            <p>Estado: Prototipos avanzados (2025-2027)</p>
            <p>Ventajas:</p>
            <ul>
              <li>Densidad energética 2x mayor (400-500 Wh/kg)</li>
              <li>Carga más rápida (10-15 minutos al 80%)</li>
              <li>Mayor seguridad (no inflamable)</li>
              <li>Mayor vida útil (10,000+ ciclos)</li>
            </ul>
            <p>Impacto: EVs con 1000+ km autonomía</p>
          </div>

          <div className="tech-card">
            <h5>🔬 Litio-azufre</h5>
            <p>Estado: Investigación avanzada</p>
            <p>Ventajas:</p>
            <ul>
              <li>Densidad teórica muy alta (500+ Wh/kg)</li>
              <li>Azufre abundante y barato</li>
              <li>Menor impacto ambiental</li>
            </ul>
            <p>Desafío: Ciclos de vida limitados aún</p>
          </div>

          <div className="tech-card">
            <h5>🔬 Grafeno</h5>
            <p>Estado: Fase inicial</p>
            <p>Ventajas:</p>
            <ul>
              <li>Carga ultra rápida (minutos)</li>
              <li>Flexibilidad (wearables)</li>
              <li>Alta conductividad</li>
            </ul>
            <p>Desafío: Fabricación a gran escala costosa</p>
          </div>

          <div className="tech-card">
            <h5>🔬 Sodio-ion</h5>
            <p>Estado: Comercialización inicial (2024-2025)</p>
            <p>Ventajas:</p>
            <ul>
              <li>Sodio abundante (agua de mar)</li>
              <li>Menor coste que litio</li>
              <li>Ideal para almacenamiento estacionario</li>
            </ul>
            <p>Limitación: Menor densidad que Li-Ion</p>
          </div>
        </div>

        <h4>Almacenamiento a gran escala (grid storage):</h4>
        <ul>
          <li>🏔️ Hidráulica de bombeo: Almacenamiento masivo (GWh) usando presas</li>
          <li>💨 Aire comprimido (CAES): Comprimir aire en cavernas subterráneas</li>
          <li>🔥 Térmico (sales fundidas): Almacenar calor para plantas solares</li>
          <li>🧪 Hidrógeno verde: Producir H₂ con renovables y usarlo como combustible</li>
          <li>🔋 Baterías de flujo: Escalables, larga duración (&gt;10,000 ciclos)</li>
        </ul>

        <Important>
          El desarrollo de almacenamiento económico y de larga duración es el último gran obstáculo
          para una red eléctrica 100% renovable. Los avances en esta década serán decisivos.
        </Important>

        <Example>
          Visión 2035:<br/>
          • Coches eléctricos con baterías de estado sólido (1000 km autonomía, carga en 10 min)<br/>
          • Casas con baterías domésticas (10-20 kWh) integradas con solar<br/>
          • Red eléctrica con almacenamiento masivo de renovables<br/>
          • Móviles que duran 1 semana con una carga<br/>
          • Reciclaje de baterías a escala industrial (economía circular)
        </Example>
      </Concept>

    </TheorySection>
  );
};

export default AlmacenamientoTeoria;
