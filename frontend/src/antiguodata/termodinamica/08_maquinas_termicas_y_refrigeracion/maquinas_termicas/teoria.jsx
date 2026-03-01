import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as maquinas_termicasDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Máquinas Térmicas",
  descripcion: "Dispositivos que convierten calor en trabajo mecánico",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const MaquinasTermicasTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué son las Máquinas Térmicas?">
        <Concept title="Definición">
          <p>
            Una máquina térmica es un dispositivo que convierte energía térmica (calor) en 
            trabajo mecánico mediante un proceso cíclico. Opera entre dos focos térmicos: uno caliente del 
            cual absorbe calor, y uno frío al cual cede calor.
          </p>

          <Important>
            <p>Principio de Funcionamiento:</p>
            <ol>
              <li>Absorbe calor Q<sub>H</sub> del foco caliente (alta temperatura)</li>
              <li>Convierte parte de ese calor en trabajo útil W</li>
              <li>Cede el calor restante Q<sub>C</sub> al foco frío (baja temperatura)</li>
              <li>Regresa al estado inicial para repetir el ciclo</li>
            </ol>
          </Important>
        </Concept>

        <Concept title="Ejemplos de Máquinas Térmicas">
          <ul>
            <li>Motores de combustión interna: Automóviles, motocicletas</li>
            <li>Turbinas de vapor: Centrales eléctricas</li>
            <li>Motores a reacción: Aviones</li>
            <li>Motores Stirling: Aplicaciones especiales</li>
            <li>Turbinas de gas: Generación eléctrica</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Eficiencia Térmica">
        <Concept title="Definición de Eficiencia">
          <p>
            La eficiencia térmica (η) mide qué fracción del calor absorbido se convierte en trabajo útil:
          </p>

          <Formula 
            expression={String.raw`\eta = \frac{W}{Q_H} = \frac{Q_H - Q_C}{Q_H}`}
            description="Eficiencia térmica"
            calculatorId="maquinas_termicas-grupo-1"
            definitions={maquinas_termicasDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Forma alternativa", expression: String.raw`\eta = 1 - \frac{Q_C}{Q_H}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>η: Eficiencia térmica (adimensional, entre 0 y 1)</li>
            <li>W: Trabajo neto realizado por la máquina (J)</li>
            <li>Q<sub>H</sub>: Calor absorbido del foco caliente (J)</li>
            <li>Q<sub>C</sub>: Calor cedido al foco frío (J)</li>
          </ul>

          <p>Nota: La eficiencia se expresa como decimal (0.3) o porcentaje (30%).</p>
        </Concept>

        <Concept title="Límites de la Eficiencia">
          <ul>
            <li>η {'<'} 1 siempre: Imposible convertir todo el calor en trabajo (Segunda Ley)</li>
            <li>η<sub>real</sub> {'<'} η<sub>Carnot</sub>: Las máquinas reales son menos eficientes que Carnot</li>
            <li>Eficiencias típicas: Motores de auto ~25%, centrales térmicas ~40%, turbinas de gas ~60%</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Primera Ley para Máquinas Térmicas">
        <Concept title="Balance de Energía">
          <p>
            Por la primera ley de la termodinámica, en un ciclo completo:
          </p>

          <Formula 
            expression={String.raw`W = Q_H - Q_C`}
            description="Trabajo neto de la máquina"
            calculatorId="maquinas_termicas-grupo-1"
            definitions={maquinas_termicasDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>W: Trabajo neto realizado en un ciclo (J)</li>
            <li>Q<sub>H</sub>: Calor absorbido del foco caliente (J)</li>
            <li>Q<sub>C</sub>: Calor cedido al foco frío (J)</li>
          </ul>

          <p>
            Esta ecuación muestra que no todo el calor absorbido se convierte en trabajo; 
            siempre hay una parte que debe cederse al foco frío.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Segunda Ley y Máquinas Térmicas">
        <Concept title="Enunciado de Kelvin-Planck">
          <p>
            <em>"Es imposible construir una máquina térmica que, operando en un ciclo, no produzca 
            otro efecto que la absorción de calor de un foco y la realización de una cantidad equivalente 
            de trabajo."</em>
          </p>
          <p>
            En otras palabras: No puede existir una máquina térmica con eficiencia del 100%. 
            Siempre debe ceder algo de calor al foco frío.
          </p>
        </Concept>

        <Concept title="Consecuencias">
          <ul>
            <li>Toda máquina térmica debe operar entre al menos dos temperaturas</li>
            <li>Siempre hay pérdidas de energía en forma de calor</li>
            <li>La eficiencia está limitada por las temperaturas de operación</li>
            <li>Las irreversibilidades reducen aún más la eficiencia</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Tipos de Máquinas Térmicas">
        <Concept title="Según el Ciclo Termodinámico">
          <ul>
            <li>Ciclo Otto: Motores de gasolina</li>
            <li>Ciclo Diesel: Motores diésel</li>
            <li>Ciclo Rankine: Turbinas de vapor</li>
            <li>Ciclo Brayton: Turbinas de gas</li>
            <li>Ciclo Stirling: Motores Stirling</li>
          </ul>
        </Concept>

        <Concept title="Según el Tipo de Combustión">
          <ul>
            <li>Combustión interna: El combustible se quema dentro del motor</li>
            <li>Combustión externa: El calor se genera fuera y se transfiere al fluido</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Mejora de la Eficiencia">
        <Concept title="Estrategias de Optimización">
          <ul>
            <li>Aumentar T<sub>H</sub>: Usar temperaturas más altas en la combustión</li>
            <li>Disminuir T<sub>C</sub>: Mejorar sistemas de enfriamiento</li>
            <li>Reducir fricción: Mejor lubricación y diseño</li>
            <li>Minimizar pérdidas: Mejor aislamiento térmico</li>
            <li>Ciclos combinados: Aprovechar calor residual</li>
            <li>Cogeneración: Usar calor residual para calefacción</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🚗 Motores de combustión interna en automóviles</h3>
          <p>
            Los motores de gasolina (ciclo Otto) y diésel dominan el transporte terrestre con más de 1.4 mil millones de vehículos en 2025. Un motor de gasolina típico moderno (2.0L turbo) opera con temperaturas de combustión T_H ≈ 2000-2500 K y gases de escape T_C ≈ 400-600 K, dando límite teórico Carnot η_Carnot = 1 - 400/2500 ≈ 84%. Sin embargo, la eficiencia real es solo η ≈ 25-30% (30-35% del límite de Carnot) debido a: combustión irreversible (la detonación explosiva no es isotérmica), pérdidas por fricción mecánica (pistones, cigüeñal, válvulas consumen ~15% de energía), calor perdido por paredes del cilindro hacia el sistema de refrigeración (~30%), gases de escape calientes sin recuperación de energía (~35%). Un motor diésel (ciclo Diesel) alcanza η ≈ 35-42% gracias a mayor relación de compresión (18:1 vs 10:1 gasolina) y combustión más controlada. Innovaciones 2020s: motores de ciclo Atkinson (Toyota Prius híbrido, η ≈ 40%), desactivación de cilindros (4 → 2 cilindros en baja carga), inyección directa de alta presión (200 bar), turbocompresores de geometría variable recuperando energía de escape. Fórmula 1 (2025): motores V6 turbo 1.6L híbridos con MGU-H (recupera energía térmica del turbo) + MGU-K (recupera frenado cinético) alcanzan η ≈ 50%, el motor de combustión interna más eficiente jamás producido, aproximándose a 60% del límite teórico de Carnot.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ Centrales termoeléctricas de carbón y gas natural</h3>
          <p>
            Las centrales termoeléctricas generan ~63% de la electricidad mundial (2024 IEA). Una central de carbón convencional usa ciclo Rankine con vapor: combustión de carbón pulverizado (T_H ≈ 600-650°C = 873-923 K) genera vapor sobrecalentado a 540-600°C y 250 bar, expandido en turbinas de vapor multietapa, condensado a T_C ≈ 30-40°C (303-313 K) usando agua de río/mar. Eficiencia Carnot ideal: η_Carnot = 1 - 313/923 = 66%. Eficiencia real: η ≈ 33-45% (subcrítica ~35%, supercrítica ~42%, ultra-supercrítica ~45%). Pérdidas principales: combustión irreversible (~10%), pérdidas térmicas en caldera y tuberías (~15%), irreversibilidades en turbinas (fricción, choques de flujo) (~20%), condensador (rechazo de calor necesario termodinámicamente) (~30-40%). Las centrales más avanzadas (ultra-supercríticas, presión 300 bar, temperatura 600-620°C) en China y Japón alcanzan η ≈ 47-48%. Centrales de ciclo combinado (CCGT - Combined Cycle Gas Turbine) logran η ≈ 60-62%: turbina de gas (ciclo Brayton, T_H ≈ 1400°C) genera electricidad, gases de escape (~600°C) producen vapor para turbina Rankine secundaria. La central Irsching 4 (Alemania, Siemens) alcanzó récord mundial 60.75% en 2011, acercándose a 72% del límite teórico de Carnot (~84% con T_H = 1673 K, T_C = 313 K).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>✈️ Turbinas de gas en aviación comercial</h3>
          <p>
            Los motores turbofan modernos (Rolls-Royce Trent XWB, GE9X, Pratt & Whitney GTF) impulsan aviones comerciales con eficiencias sin precedentes. Un turbofan de alto bypass (relación 10:1 a 12:1) opera en ciclo Brayton: admisión de aire, compresión (presión 50-60:1), combustión continua a T_H ≈ 1600-1900 K, expansión en turbinas. El 80% del empuje viene del fan frontal (aire frío), solo 20% de gases calientes (menor ruido, mayor eficiencia). Eficiencia térmica del núcleo: η_térmica ≈ 45-50% (comparado con Carnot η_Carnot = 1 - 300/1800 = 83%). Eficiencia propulsiva total: η_propulsiva ≈ 35-40% debido a pérdidas aerodinámicas en el fan y tobera. Consumo específico de combustible (SFC): ~0.5-0.55 lb/(lbf·h) para motores 2020s vs ~0.8 lb/(lbf·h) en 1960s (mejora 38%). Un Boeing 787 con Trent 1000 consume ~2.5 L/100 km por pasajero en crucero (más eficiente que muchos autos por pasajero-km). Innovaciones: materiales cerámicos en álabes de turbina (resisten T {'>'} 1400°C sin enfriamiento), recubrimientos de barrera térmica (TBC), enfriamiento por película de aire, fan de fibra de carbono (reduce peso 200 kg), turbinas de engranajes (Pratt & Whitney GTF, permite fan más lento y eficiente). Desarrollo futuro: motores de ciclo adaptativo (ADVENT/AETD, USAF) con relación de bypass variable (5:1 a 3:1), mejorando eficiencia 25% adicional.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏭 Cogeneración (CHP) industrial y urbana</h3>
          <p>
            Los sistemas de cogeneración (CHP - Combined Heat and Power) o generación distribuida aprovechan simultáneamente electricidad y calor residual para calefacción, alcanzando eficiencias globales de η_total ≈ 80-90%. Principio: una máquina térmica (motor gas natural, turbina, motor diésel) genera electricidad con η_eléctrica ≈ 30-40%, y el calor residual de gases de escape (~500-600°C) y refrigeración del motor (~90°C) se recupera para: calefacción de edificios (agua caliente 60-90°C), procesos industriales (vapor 150-200°C), refrigeración por absorción (sistemas LiBr-H₂O). Ejemplo: una planta CHP de 1 MW eléctrico consume ~2.5 MW térmicos de gas natural, produce 1 MW eléctrico + 1.2 MW térmicos útiles = 2.2 MW aprovechados = η_total = 2.2/2.5 = 88%. Sin cogeneración: generación eléctrica centralizada η ≈ 40% + caldera de gas η ≈ 85% requieren ~2.5 MW + 1.41 MW = 3.91 MW entrada para mismo resultado (ahorro ~36% energía primaria con CHP). Aplicaciones reales: Distrito de calefacción de Copenhague (Dinamarca): 500 MW CHP alimenta calefacción de 98% de la ciudad, η_total ≈ 85-90%. Hospital Johns Hopkins (USA): CHP 35 MW eléctrico + vapor médico, reducción 50% emisiones CO₂. Data centers (Google, Microsoft): CHP con turbinas gas natural + refrigeración por absorción, aprovechando calor residual servidores para enfriar aire (PUE - Power Usage Effectiveness mejorado de 1.6 a 1.2). Limitación: requiere demanda térmica constante cercana a generación (hospitales, industria papelera, química, distritos urbanos densos), no viable para generación eléctrica sola.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚢 Motores marinos diésel de baja velocidad</h3>
          <p>
            Los buques portacontenedores gigantes (ULCV - Ultra Large Container Vessels, 24,000 TEU como MSC Gülsün) usan motores diésel de dos tiempos de baja velocidad, las máquinas térmicas más eficientes del mundo. El motor Wärtsilä-Sulzer 14RT-flex96C (el motor diésel más grande jamás construido): 14 cilindros en línea, 25,480 L desplazamiento, 960 mm diámetro pistón, 2500 mm carrera, 102 RPM, 80,080 kW (107,389 HP), peso 2,300 toneladas. Este motor alcanza η ≈ 50-54% de eficiencia térmica (la más alta para cualquier motor de combustión), comparado con límite Carnot η_Carnot = 1 - 300/1000 ≈ 70% (temperatura combustión ~1000 K, refrigeración agua mar ~300 K). Ventajas: ciclo diésel de dos tiempos con alta relación de compresión (18:1), inyección directa de combustible pesado (HFO - Heavy Fuel Oil), turbocompresión con recuperación de calor de gases de escape, baja velocidad permite expansión completa (mínimas pérdidas), refrigeración eficiente por agua de mar. Un buque Emma Maersk (13,100 TEU) con motor Wärtsilä 14RT-flex96C consume ~0.260 kg combustible/kWh = ~3,600 L/hora a máxima potencia, transportando 13,100 contenedores a 25 nudos = consumo ~0.0027 L/tonelada-km (100 veces más eficiente que transporte aéreo, 10 veces más que camiones). Tecnologías 2020s: motores dual-fuel (diésel + LNG) reducen emisiones SOx/NOx 90%, motores de amoníaco verde en desarrollo (Maersk, 2024-2030, cero emisiones carbono). El transporte marítimo mueve 90% del comercio mundial con apenas 3% de emisiones CO₂ globales gracias a esta eficiencia extrema.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De Newcomen a las turbinas modernas
        </h2>
        
        <div className="theory-subsection">
          <h3>🔨 Thomas Newcomen y la primera máquina de vapor atmosférica (1712)</h3>
          <p>
            Thomas Newcomen, herrero inglés de Dartmouth, inventó en 1712 la primera máquina de vapor práctica y comercialmente exitosa, revolucionando la minería de carbón. Su máquina usaba vapor de agua para crear vacío: vapor de una caldera (presión atmosférica ~1 bar, T ≈ 100°C) llenaba un cilindro de latón (diámetro ~2 metros, carrera ~3 metros), luego se rociaba agua fría dentro, condensando el vapor y creando vacío parcial (~0.2-0.3 bar). La presión atmosférica exterior (~1 bar) empujaba el pistón hacia abajo, realizando trabajo útil (bombear agua de minas de carbón inundadas). El ciclo se repetía 10-12 veces por minuto. Eficiencia térmica: η ≈ 0.5-1% (apenas 0.6-1.2% del límite teórico de Carnot η_Carnot ≈ 26% con T_H = 373 K, T_C = 290 K). Pérdidas enormes: el cilindro se calentaba y enfriaba cada ciclo (pérdida térmica masiva), condensación ineficiente, fricción mecánica primitiva (sellos de cuero empapado en agua), presión muy baja (trabajo por golpe limitado). A pesar de la ineficiencia, la máquina Newcomen fue revolucionaria: permitió minar carbón a profundidades antes imposibles (200-300 metros), alimentando la Revolución Industrial. Para 1733, ~110 máquinas Newcomen operaban en Inglaterra, consumiendo ~8-12 kg carbón/HP-hora (vs ~0.6 kg en motores modernos). Newcomen murió en 1729 sin gran reconocimiento; su socio Thomas Savery recibió la patente original (1698), pero Savery murió en 1715 y Newcomen nunca pudo patentar su propio diseño.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ James Watt y la máquina de vapor con condensador separado (1765-1776)</h3>
          <p>
            James Watt, ingeniero escocés, revolucionó la máquina de vapor en 1765 al inventar el condensador separado. Watt reparaba una máquina Newcomen en la Universidad de Glasgow y reconoció la ineficiencia fundamental: calentar y enfriar el mismo cilindro cada ciclo desperdiciaba ~80% del calor. Su innovación: mantener el cilindro siempre caliente (~100°C) y condensar el vapor en un condensador separado, refrigerado continuamente. Resultado: consumo de carbón reducido ~75% (de 12 kg/HP-hora a 3 kg/HP-hora), eficiencia térmica mejorada a η ≈ 4-8% (5-10 veces superior a Newcomen). Mejoras adicionales de Watt: válvula de expansión (corte temprano de admisión de vapor, expansión continua), doble efecto (vapor empuja pistón en ambas direcciones), gobernador centrífugo (regulación automática de velocidad, invento crucial para control de máquinas), engranaje planetario (convertir movimiento alternativo a rotativo). Watt formó sociedad con Matthew Boulton (empresario, Soho Foundry, Birmingham) en 1775, produciendo ~500 máquinas antes de expiración de patente en 1800. Watt cobraba regalías basadas en ahorro de carbón: clientes pagaban 1/3 del carbón ahorrado vs máquina Newcomen (modelo de negocio innovador). Watt se retiró rico en 1800, la unidad de potencia "watt" (1 W = 1 J/s) fue nombrada en su honor en 1882. Ironía histórica: Watt opuso férreamente uso de vapor de alta presión (temía explosiones), retrasando desarrollo de locomotoras y motores compactos hasta expiración de su patente (Richard Trevithick construyó primera locomotora de alta presión en 1804, justo después).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚂 George Stephenson y la era de las locomotoras (1814-1829)</h3>
          <p>
            George Stephenson, ingeniero inglés autodidacta (hijo de minero, aprendió a leer a los 18 años), construyó en 1814 su primera locomotora "Blücher" para minas de carbón de Killingworth. Usaba vapor de alta presión (5-8 bar) en cilindros doble efecto, moviendo ~30 toneladas a ~6 km/h (eficiencia η ≈ 3-5%). En 1825, Stephenson diseñó la línea ferroviaria Stockton-Darlington (primera línea pública del mundo), y en 1829 su locomotora "Rocket" ganó los Rainhill Trials (competencia para seleccionar locomotoras para línea Liverpool-Manchester). La Rocket revolucionó el diseño: caldera tubular multitubular (25 tubos de fuego aumentando área de transferencia de calor 5×), cilindros inclinados acoplados directamente a ruedas motrices (sin engranajes, menor fricción), inyectores de vapor en chimenea (tiraje forzado, mayor temperatura combustión). Desempeño: velocidad récord 47 km/h (30 mph), potencia ~30 HP, eficiencia η ≈ 5-7% (vs 3-4% locomotoras previas). La línea Liverpool-Manchester (1830) fue el primer sistema ferroviario moderno: transporte pasajeros/carga regular, horarios fijos, velocidades 40-50 km/h, reduciendo tiempo de viaje Liverpool-Manchester de 4 horas (diligencia) a 1.5 horas. Para 1850, Reino Unido tenía 10,000 km de vías férreas, Europa continental 23,000 km, USA 14,000 km. Las locomotoras de vapor dominaron transporte terrestre 120 años (1830-1950) hasta ser reemplazadas por diésel-eléctricas y eléctricas. Última locomotora vapor construida: China, 1988 (Clase JS). Récord velocidad vapor: Mallard (UK, 1938): 203 km/h, aún vigente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔥 Rudolf Diesel y el motor de ignición por compresión (1892-1897)</h3>
          <p>
            Rudolf Diesel, ingeniero alemán, buscaba crear un motor más eficiente que las máquinas de vapor y motores Otto (gasolina, 1876). Inspirado por el ciclo de Carnot y clases de termodinámica (profesor Carl von Linde, inventor del ciclo de refrigeración), Diesel razonó: mayor relación de compresión → mayor temperatura → mayor eficiencia (acercándose a Carnot). Su diseño (patentado 1892): comprimir aire solo (sin combustible) a presiones altísimas (~35 bar, temperatura ~600-700°C), inyectar combustible pulverizado al final de compresión (autoignición espontánea por alta temperatura, sin bujía), expansión produce trabajo. Primer prototipo (1893, fábrica Maschinenfabrik Augsburg, MAN): cilindro 250 mm diámetro, 400 mm carrera, inyección de polvo de carbón. Resultado: explosión violenta, destrucción parcial, Diesel hospitalizado. Rediseño (1893-1897): cambio a inyección de aceite pesado (keroseno/petróleo), sistema de inyección neumática (aire comprimido ~60 bar empuja combustible), refrigeración mejorada. Motor funcional (1897): 20 HP, 172 RPM, eficiencia η ≈ 26.2% (récord mundial, vs 20% motores Otto mejores de la época), consumo ~238 g combustible/kWh (vs ~300-350 g Otto). El motor diésel probó ser 30-40% más eficiente que gasolina, ideal para aplicaciones industriales, marinas y ferroviarias. Tragedia: Rudolf Diesel desapareció misteriosamente en 1913 cruzando el Canal de la Mancha (ferry Amberes-Londres), su cuerpo encontrado flotando 10 días después. Suicidio (deudas financieras), accidente o asesinato (competencia industrial) permanece sin resolver. Legado: motores diésel generan ~30% de electricidad mundial, mueven 95% del transporte marítimo global.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌀 Charles Parsons y la turbina de vapor (1884)</h3>
          <p>
            Charles Parsons, ingeniero británico, inventó en 1884 la turbina de vapor de reacción multietapa, revolucionando generación eléctrica y propulsión naval. Hasta entonces, máquinas de vapor usaban pistones alternativos (movimiento lineal → rotativo con cigüeñal), limitando velocidad (~500 RPM máximo) y potencia por tamaño. Parsons razonó: expansión directa de vapor a alta velocidad en álabes rotativos produce movimiento rotativo continuo sin conversión mecánica intermedia. Su turbina (1884): vapor sobrecalentado (150°C, 10 bar) pasaba por 15 etapas de álabes fijos/móviles alternados, expandiendo gradualmente hasta condensación (~0.05 bar, 33°C). Velocidad: 18,000 RPM (vs 200-500 RPM motores alternativos), potencia: 10 HP (escalable a miles HP). Ventajas: compacta (1/10 tamaño máquina pistón equivalente), eficiente (η ≈ 15-20% inicial, vs 10-15% pistón), rotación continua (ideal para generadores eléctricos AC), mantenimiento reducido (menos partes móviles). Demostración espectacular (1897): Parsons construyó el yate Turbinia (34 metros) con turbina vapor 2,000 HP alcanzando 34.5 nudos (63 km/h), velocidad récord. Durante la revista naval de la Reina Victoria (Diamond Jubilee, 1897), Turbinia atravesó ilegalmente la flota a máxima velocidad (patrulleras no pudieron alcanzarlo), demostrando superioridad dramática. La Royal Navy adoptó turbinas inmediatamente: HMS Dreadnought (1906), primer acorazado turbinas vapor, 21 nudos (vs 18 nudos barcos pistón). Para 1910, todas centrales eléctricas grandes usaban turbinas Parsons. Hoy: turbinas de vapor generan ~80% de electricidad mundial (carbón, nuclear, solar térmica, geotérmica), con eficiencias η ≈ 40-48%. Parsons fue nombrado caballero en 1911, murió en 1931 dejando legado inmenso.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>💰 La patente de Watt: ¿innovación o monopolio?</h3>
          <p>
            James Watt obtuvo su patente original para el condensador separado en 1769, y mediante influencia política y legal, la extendió repetidamente hasta 1800 (31 años total). Durante este período, Watt y su socio Matthew Boulton demandaron agresivamente a cualquier competidor que intentara mejorar o vender máquinas de vapor. Ingenieros como Jonathan Hornblower (inventó motor compound de doble expansión, más eficiente) y Edward Bull (diseñó motores compactos) fueron forzados a cerrar o pagar regalías exorbitantes. Historiadores económicos modernos (Boldrin & Levine, "Against Intellectual Monopoly", 2008) argumentan que la patente de Watt retrasó el desarrollo de máquinas de vapor ~20-30 años: Richard Trevithick no pudo desarrollar locomotoras de alta presión hasta 1804 (justo después de expiración de patente), y durante 1800-1850 (post-patente) la innovación en máquinas de vapor explotó (compounding, recalentamiento, condensadores superficiales). Comparación: en 1800 (expiración patente Watt), mejor máquina comercial tenía η ≈ 4-5%. Para 1850, máquinas compound alcanzaban η ≈ 15-20% (mejora 4×). Watt murió rico en 1819, su fortuna equivalente a ~£50 millones de 2025. Ironía: el "SI unit" watt honra al hombre que posiblemente retrasó la eficiencia energética décadas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎩 El watt vs el caballo de fuerza: guerra de unidades</h3>
          <p>
            James Watt inventó la unidad "horsepower" (caballo de fuerza, HP) en 1780s para vender sus máquinas de vapor. Necesitaba una métrica que los clientes (dueños de minas con caballos trabajando) entendieran. Watt observó caballos de carga en molinos de cerveza Whitbread (Londres) arrastrando cargas circulares. Calculó: un caballo promedio levantaba 330 libras (150 kg) a 100 pies/minuto (0.51 m/s) = 150 × 9.8 × 0.51 ≈ 750 W. Sin embargo, Watt redefinió arbitrariamente 1 HP = 550 lbf·ft/s ≈ 746 W (~33% más que capacidad real de caballo promedio) para hacer sus máquinas lucir más potentes. Marketing genial: anunciar "esta máquina equivale a 50 caballos" cuando realmente equivalía a ~37 caballos reales. La unidad HP se estandarizó pero con variaciones: HP mecánico (USA) = 745.7 W, HP métrico (Europa) = 735.5 W (PS alemán, CV francés/español), HP eléctrico = 746 W. Confusión continúa hoy: motores de autos anuncian "300 HP" en USA (224 kW) pero "304 PS" en Europa (aunque son ~equivalentes). En 1882, la British Association adoptó el "watt" como unidad oficial (1 W = 1 J/s), honrando a James Watt. Finalmente, en 1960, el Sistema Internacional (SI) adoptó el watt universalmente, pero HP persiste en industria automotriz y aviación (motores de avión se clasifican en HP o libras de empuje, no watts). Para 2025, la UE requiere especificaciones en kW para eficiencia energética, pero marketing sigue usando HP (ej: Porsche 911 Turbo S "650 HP / 485 kW").
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💣 Explosiones de calderas en el siglo XIX: terror de locomotoras</h3>
          <p>
            Entre 1830-1890, las explosiones de calderas de vapor mataron miles de personas en trenes, barcos y fábricas. Las calderas de alta presión (10-20 bar) operaban cerca de sus límites de resistencia (acero de baja calidad, soldaduras defectuosas, diseño empírico). Causas comunes: sobrecalentamiento por bajo nivel de agua (metal expuesto se debilita, colapsa explosivamente), válvulas de seguridad bloqueadas intencionalmente (para aumentar potencia), corrosión interna, fatiga térmica. Explosión más mortífera USA: barco de vapor Sultana (río Mississippi, 1865): caldera explotó matando ~1,800 personas (la mayoría prisioneros de guerra de la Unión regresando de campos confederados, peor desastre marítimo USA, mayor que Titanic en muertes americanas). Locomotoras: explosiones frecuentes en 1830s-1850s mataban maquinistas, pasajeros en estaciones. La explosión de 1854 en locomotora Great Western Railway (UK) lanzó caldera 200 metros, mató 4 personas. Respuesta: sociedades de ingeniería establecieron códigos de calderas (ASME Boiler Code, USA, 1914), inspecciones obligatorias, válvulas de seguridad certificadas, medidores de presión/temperatura. Para 1900, explosiones cayeron 90%. Última explosión de caldera mortal (USA): 2007, fábrica textil Ohio (corrosión, 1 muerte). Hoy: calderas modernas tienen múltiples sistemas de seguridad redundantes (válvulas automáticas, sensores de nivel/presión/temperatura, apagado automático), explosiones virtualmente eliminadas. Ironía: el miedo a explosiones fue lo que hizo a James Watt oponerse a calderas de alta presión (y retrasar innovación), pero su monopolio de patentes impidió desarrollo de diseños más seguros.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏎️ El motor rotativo Wankel: elegancia termodinámica frustrada</h3>
          <p>
            Felix Wankel, ingeniero alemán, inventó en 1957 el motor rotativo (Wankelmotor) con geometría revolucionaria: un rotor triangular (epicicloidal) gira excéntricamente dentro de una cámara ovalada (epicicloide), realizando cuatro tiempos (admisión, compresión, combustión, escape) simultáneamente en tres cámaras. Ventajas teóricas: 40% menos piezas que motor pistón, compacto (relación potencia/peso superior), rotación continua (sin vibración), alta velocidad (9,000 RPM redline). Mazda adoptó el motor Wankel en 1967, produciendo RX-7 (1978-2002) y RX-8 (2003-2012), únicos autos rotativos de producción masiva. Mazda 787B con motor rotativo 700 HP ganó Le Mans 1991 (único auto no-pistón en ganar jamás, luego fue prohibido para nivelar competencia). Problemas fatales: sellos de ápice del rotor (apex seals) desgastaban rápidamente (vida útil 100,000-150,000 km vs 300,000+ km pistón), consumo de aceite alto (~1 L/1000 km, aceite quemado en combustión), eficiencia baja (η ≈ 18-22% vs 25-30% pistón) debido a forma de cámara alargada (combustión lenta, pérdidas térmicas), emisiones de hidrocarburos altas (combustión incompleta). El RX-8 final (2012) consumía ~14 L/100 km (vs 8-9 L/100 km sedán equivalente). Mazda suspendió producción en 2012 por regulaciones emisiones cada vez más estrictas. En 2023, Mazda relanzó motor rotativo en híbrido MX-30 R-EV (motor 830cc rotativo como generador eléctrico, no propulsión directa), aprovechando compacidad pero evitando problemas de eficiencia (opera a velocidad constante óptima). El sueño Wankel persiste: simplicidad elegante pero termodinámica implacable (forma no-ideal de cámara combustión) limita eficiencia intrínsecamente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚁 El turboshaft de helicópteros: potencia extrema en paquete compacto</h3>
          <p>
            Los helicópteros militares y civiles modernos usan motores turboshaft (turbina de gas optimizada para entregar potencia al eje, no empuje directo). El Sikorsky CH-53K King Stallion (helicóptero de carga pesada USMC, 2023) usa tres motores GE38-1B, cada uno: 7,500 HP (5.6 MW), peso 410 kg, relación potencia/peso 18.3 HP/kg (13.7 kW/kg). Comparación: un motor diésel marino de 7,500 HP pesa ~15,000 kg (relación 0.5 HP/kg), 36 veces peor. Esta densidad de potencia extrema permite al CH-53K levantar 16,000 kg de carga externa (tanques, vehículos, contenedores) a altitudes 3,000 metros. Termodinámica: turboshaft opera en ciclo Brayton con T_H ≈ 1400-1600 K, pero eficiencia térmica η_térmica ≈ 35-40% es menor que turbofan (45-50%) porque no optimiza empuje, sino torque al eje. Sin embargo, eficiencia operacional es excelente: consumo específico ~0.4-0.45 lb/(HP·hora) = ~0.24-0.27 kg/(kW·h). El rotor principal del CH-53K gira a ~160 RPM (vs 30,000 RPM turbina), requiriendo caja de reducción planetaria masiva (relación 187:1, peso 680 kg). Aplicación civil: helicópteros de rescate Airbus H225 (turboshaft Safran Makila 2A1, 2,382 HP cada uno) operan en Mar del Norte transportando trabajadores de plataformas petrolíferas, con autonomía 900 km y resistencia 5 horas (consumo ~600 kg combustible/hora). Limitación: ruido extremo (~105 dB a 100 metros, requiere protección auditiva), mantenimiento intensivo (inspección 100 horas, overhaul mayor 3,000-5,000 horas vs 10,000-15,000 pistón), costo operacional ~$2,000-4,000/hora de vuelo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌊 El motor Stirling submarino: silencio termodinámico</h3>
          <p>
            Los submarinos convencionales (diésel-eléctricos) deben emerger o usar snorkel cada 24-48 horas para recargar baterías con motores diésel (requieren aire). Esto los hace vulnerables a detección. Los submarinos clase Gotland (Suecia, 1990s) revolucionaron guerra submarina con motores Stirling de propulsión independiente del aire (AIP - Air-Independent Propulsion). Sistema: dos motores Stirling V4-275R (75 kW cada uno), combustión externa de diésel con oxígeno líquido (O₂ almacenado criogénico, -183°C), gases de escape disueltos en agua de mar (sin burbujas, sin detección), operación ultra-silenciosa (vibración mínima, sin explosiones internas). Ciclo Stirling: calentamiento externo del helio de trabajo (gas cerrado, no se consume) a T_H ≈ 650°C, enfriamiento por agua mar a T_C ≈ 10°C, eficiencia η ≈ 30-35% (comparado con Carnot η_Carnot = 1 - 283/923 = 69%, alcanza 43-51% del límite teórico). Desempeño: autonomía submarina 14-20 días a 5 nudos sin emerger (vs 24-48 horas baterías solas), rango total 6,000 km. En ejercicios NATO (2005), el HMS Gotland "hundió" el portaaviones USS Ronald Reagan en simulación repetidamente (acercándose indetectado dentro de rango de torpedos). La US Navy alquiló el Gotland 2005-2007 para entrenar contra amenaza submarina silenciosa. Limitación: potencia baja (150 kW total vs 2,000-4,000 kW diésel), velocidad máxima reducida a 6 nudos en AIP (vs 20 nudos con diésel en superficie). Para 2025: submarinos alemanes Clase 212/214, japoneses clase Sōryū, franceses clase Scorpène todos usan variantes de AIP (Stirling, celdas de combustible, o ciclo de combustión cerrado MESMA). Los motores Stirling, inventados en 1816 por pastor escocés Robert Stirling (8 años antes de Carnot), finalmente encontraron aplicación nicho 180 años después.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            Las máquinas térmicas son dispositivos que convierten energía térmica (calor) en trabajo mecánico 
            mediante un proceso cíclico. Operan entre dos focos térmicos: absorben calor Q_H del foco caliente 
            a alta temperatura, convierten una fracción en trabajo útil W, y ceden el calor restante Q_C al 
            foco frío a baja temperatura. El principio fundamental es W = Q_H - Q_C (Primera Ley de la 
            Termodinámica aplicada a ciclos).
          </li>
          <li>
            La eficiencia térmica η = W/Q_H = (Q_H - Q_C)/Q_H = 1 - Q_C/Q_H mide la fracción del calor 
            absorbido convertida en trabajo útil. La Segunda Ley de la Termodinámica establece que η {'<'} 1 
            siempre (enunciado Kelvin-Planck): es imposible construir una máquina térmica con eficiencia 100% 
            que opere en un ciclo. El límite superior está dado por el ciclo de Carnot: η_Carnot = 1 - T_C/T_H, 
            dependiendo únicamente de las temperaturas absolutas de los focos térmicos.
          </li>
          <li>
            Ejemplos históricos y modernos incluyen: máquina atmosférica de Newcomen (1712, η ≈ 0.5-1%), 
            máquina de vapor de Watt con condensador separado (1776, η ≈ 4-8%), locomotoras de vapor (1825-1960, 
            η ≈ 5-15%), motor diésel (1897, η ≈ 26-54%), turbinas de vapor (1884, η ≈ 40-48%), turbinas de 
            gas (aviación, η ≈ 45-50%), y motores de combustión interna modernos (gasolina η ≈ 25-30%, 
            diésel η ≈ 35-42%, F1 híbridos η ≈ 50%).
          </li>
          <li>
            Aplicaciones prácticas críticas: centrales termoeléctricas (ciclo Rankine con vapor, η ≈ 35-48%), 
            centrales de ciclo combinado (turbina gas + vapor, η ≈ 60-62%), motores automotrices (transporte 
            terrestre, 1.4 mil millones vehículos), turbofan aviación (transporte aéreo, η_propulsiva ≈ 35-40%), 
            motores diésel marinos (transporte 90% comercio mundial, η ≈ 50-54%), cogeneración CHP 
            (η_total ≈ 80-90%), y sistemas AIP submarinos (motores Stirling, autonomía 14-20 días).
          </li>
          <li>
            Estrategias de mejora de eficiencia: aumentar temperatura del foco caliente T_H (materiales cerámicos, 
            recubrimientos térmicos), disminuir temperatura del foco frío T_C (condensadores mejorados), 
            reducir irreversibilidades (fricción, pérdidas térmicas, combustión optimizada), ciclos combinados 
            (aprovechamiento de calor residual en múltiples etapas), cogeneración (uso simultáneo de electricidad 
            y calor para calefacción/procesos industriales), y recuperación de energía de escape (turbocompresores, 
            MGU-H en F1). El límite fundamental de Carnot guía todo diseño de máquinas térmicas modernas.
          </li>
        </ul>
      </div>
    </>
  );
};

export default MaquinasTermicasTheory;
