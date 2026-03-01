import { Concept, Example, Formula, Important, TheorySection } from '../../../../../../components/TheoryV2';

export const metadata = {
  titulo: "Energías Renovables",
  descripcion: "Fuentes de energía renovables: solar, eólica, hidráulica, mareomotriz, geotérmica y biomasa",
  isTheoryOnly: true,
  educationLevel: "ESO",
  levels: ['ESO']
};

const RenovablesTeoria = () => {
  return (
    <TheorySection title="Energías Renovables" emoji="🌱" nivel="ESO">
      {" "}
      {/* Introducción */}{" "}
      <Concept title="¿Qué son las energías renovables?" emoji="♻️">
        {" "}
        <p>
          {" "}
          Las energías renovables son aquellas que provienen de fuentes
          naturales que se regeneran continuamente y no se agotan con su uso.
          Son fundamentales para la transición energética hacia un futuro
          sostenible sin emisiones de CO₂.{" "}
        </p>{" "}
        <Important>
          {" "}
          🌍 Objetivo 2050: España y la UE buscan alcanzar el 100% de
          electricidad renovable para combatir el cambio climático y lograr la
          neutralidad climática.{" "}
        </Important>{" "}
        <h4>Características principales:</h4>{" "}
        <ul>
          {" "}
          <li>✅ Inagotables: Se regeneran de forma natural</li>{" "}
          <li>✅ Limpias: Cero o muy bajas emisiones de CO₂</li>{" "}
          <li>
            ✅ Sostenibles: No comprometen recursos para futuras generaciones
          </li>{" "}
          <li>✅ Locales: Reducen dependencia de importaciones energéticas</li>{" "}
          <li>
            ❌ Variables: Dependen de condiciones climáticas (excepto geotérmica
            e hidráulica)
          </li>{" "}
        </ul>{" "}
      </Concept>{" "}
      {/* Energía Solar */}{" "}
      <Concept title="Energía Solar" emoji="☀️">
        {" "}
        <p>
          {" "}
          La energía solar aprovecha la radiación del Sol para generar
          electricidad o calor. Es la fuente renovable con mayor potencial de
          crecimiento global.{" "}
        </p>{" "}
        <h4>Tipos de tecnología solar:</h4>{" "}
        <div className="solar-tech">
          {" "}
          <h5>1. Solar Fotovoltaica (PV) - Electricidad</h5>{" "}
          <ul>
            {" "}
            <li>
              Funcionamiento: Paneles con células de silicio que convierten luz
              en electricidad (efecto fotoeléctrico)
            </li>{" "}
            <li>
              Eficiencia: 15-22% comercial, 26% laboratorio, 47% células
              multicapa
            </li>{" "}
            <li>
              Aplicaciones: Tejados residenciales, granjas solares, dispositivos
              portátiles
            </li>{" "}
            <li>
              Potencia típica: Panel doméstico 300-400W, granja solar 1-500 MW
            </li>{" "}
            <li>Vida útil: 25-30 años con degradación del 0.5%/año</li>{" "}
          </ul>{" "}
          <h5>2. Solar Térmica - Calor</h5>{" "}
          <ul>
            {" "}
            <li>
              Funcionamiento: Colectores capturan calor del Sol para calentar
              agua
            </li>{" "}
            <li>Eficiencia: 60-80% (mucho mayor que fotovoltaica en calor)</li>{" "}
            <li>
              Aplicaciones: Agua caliente sanitaria, calefacción, piscinas
            </li>{" "}
            <li>Ahorro: Cubre 60-80% necesidades agua caliente anual</li>{" "}
          </ul>{" "}
          <h5>3. Solar Termoeléctrica (CSP) - Electricidad a gran escala</h5>{" "}
          <ul>
            {" "}
            <li>
              Funcionamiento: Espejos concentran luz solar para calentar fluido
              → vapor → turbina
            </li>{" "}
            <li>
              Ventaja clave: Almacenamiento térmico en sales fundidas
              (generación nocturna)
            </li>{" "}
            <li>Capacidad: 50-400 MW por planta</li>{" "}
            <li>
              Ejemplo: Gemasolar (Sevilla) - 19.9 MW, torre central, 15h de
              almacenamiento
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <h4>Datos de producción solar:</h4>{" "}
        <ul>
          {" "}
          <li>España 2023: ~35.000 GWh, ~15% de la electricidad</li>{" "}
          <li>Potencia instalada: ~22 GW (2º en Europa tras Alemania)</li>{" "}
          <li>Recurso solar: 2.500-3.000 horas sol/año (mejor de Europa)</li>{" "}
          <li>Coste: 0.02-0.04 €/kWh (más barato que fósiles)</li>{" "}
        </ul>{" "}
        <h4>Componentes de una instalación fotovoltaica:</h4>{" "}
        <ul>
          {" "}
          <li>
            📐 Paneles solares: Células de silicio monocristalino o
            policristalino
          </li>{" "}
          <li>
            ⚡ Inversor: Convierte corriente continua (DC) en alterna (AC)
          </li>{" "}
          <li>
            🔋 Baterías (opcional): Almacenan energía para uso nocturno (litio o
            plomo-ácido)
          </li>{" "}
          <li>
            📊 Estructura soporte: Montaje en tejado o suelo con inclinación
            óptima (30-35° España)
          </li>{" "}
          <li>
            🔌 Contador bidireccional: Mide energía consumida y excedente
            inyectado a red
          </li>{" "}
        </ul>{" "}
        <h4>Ventajas y desventajas:</h4>{" "}
        <ul>
          {" "}
          <li>
            ✅ Ventajas:{" "}
            <ul>
              {" "}
              <li>
                Fuente inagotable (Sol brillará 5.000 millones años más)
              </li>{" "}
              <li>Cero emisiones operativas</li> <li>Bajo mantenimiento</li>{" "}
              <li>Modular: desde 100W portátil hasta 500 MW granja</li>{" "}
              <li>Generación distribuida: tejados, fachadas</li>{" "}
            </ul>{" "}
          </li>{" "}
          <li>
            ❌ Desventajas:{" "}
            <ul>
              {" "}
              <li>Intermitencia: solo genera con luz solar</li>{" "}
              <li>Requiere baterías o red para continuidad 24/7</li>{" "}
              <li>Ocupa espacio (1 MW ≈ 1-2 hectáreas)</li>{" "}
              <li>Fabricación paneles consume energía y recursos</li>{" "}
            </ul>{" "}
          </li>{" "}
        </ul>{" "}
        <Example>
          {" "}
          Instalación doméstica típica:
          <br /> Vivienda con 10 paneles de 400W cada uno:
          <br /> • Potencia pico: 4 kW
          <br /> • Producción anual: 6.000-7.000 kWh (España sur)
          <br /> • Consumo típico vivienda: 3.500 kWh/año
          <br /> • Ahorro: 900-1.000 €/año (0.15 €/kWh)
          <br /> • Inversión: 6.000-8.000€
          <br /> • Amortización: 6-8 años
          <br /> • Vida útil: 25-30 años → rentabilidad excelente{" "}
        </Example>{" "}
      </Concept>{" "}
      {/* Energía Eólica */}{" "}
      <Concept title="Energía Eólica" emoji="💨">
        {" "}
        <p>
          {" "}
          La energía eólica transforma la energía cinética del viento en
          electricidad mediante aerogeneradores (turbinas eólicas modernas). Es
          una de las renovables más maduras y competitivas económicamente.{" "}
        </p>{" "}
        <h4>Funcionamiento de un aerogenerador:</h4>{" "}
        <ol>
          {" "}
          <li>
            Palas: El viento mueve las palas (rotor) de 40-120m de diámetro
          </li>{" "}
          <li>
            Eje y multiplicadora: Transmiten rotación lenta (10-20 rpm) al
            generador aumentando velocidad
          </li>{" "}
          <li>
            Generador: Convierte energía mecánica en eléctrica (hasta 15 MW
            offshore)
          </li>{" "}
          <li>
            Torre: Eleva el rotor a 80-150m donde viento es más fuerte y
            constante
          </li>{" "}
          <li>
            Sistema orientación: Gira la góndola para encarar palas al viento
          </li>{" "}
          <li>
            Control pitch: Ajusta ángulo de palas para optimizar captura o
            frenar
          </li>{" "}
        </ol>{" "}
        <h4>Tipos de parques eólicos:</h4>{" "}
        <div className="wind-types">
          {" "}
          <h5>1. Eólica Terrestre (Onshore)</h5>{" "}
          <ul>
            {" "}
            <li>Ubicación: Montañas, valles ventosos, planicies</li>{" "}
            <li>Potencia: 2-5 MW por turbina</li>{" "}
            <li>Coste: 0.03-0.06 €/kWh</li>{" "}
            <li>Ventaja: Menor coste instalación y mantenimiento</li>{" "}
            <li>Desventaja: Limitación espacio, impacto visual y sonoro</li>{" "}
          </ul>{" "}
          <h5>2. Eólica Marina (Offshore)</h5>{" "}
          <ul>
            {" "}
            <li>
              Ubicación: Mar, 10-50 km de costa, profundidad hasta 60m
            </li>{" "}
            <li>Potencia: 8-15 MW por turbina (turbinas gigantes)</li>{" "}
            <li>Factor capacidad: 45-55% (vs 25-35% terrestre)</li>{" "}
            <li>
              Ventaja: Vientos más fuertes y constantes, menos impacto visual
            </li>{" "}
            <li>Desventaja: Instalación y mantenimiento más costosos</li>{" "}
            <li>Futuro: Eólica flotante para aguas profundas (&gt;60m)</li>{" "}
          </ul>{" "}
        </div>{" "}
        <h4>Datos de producción eólica:</h4>{" "}
        <ul>
          {" "}
          <li>
            España 2023: ~62.000 GWh, ~24% de la electricidad (líder renovable)
          </li>{" "}
          <li>
            Potencia instalada: ~31 GW (5º mundial, 2º Europa tras Alemania)
          </li>{" "}
          <li>Nº aerogeneradores: ~21.500 turbinas terrestres</li>{" "}
          <li>
            Horas equivalentes: 2.000-2.500 h/año (factor capacidad 23-28%)
          </li>{" "}
          <li>Empleos: ~30.000 empleos directos e indirectos</li>{" "}
        </ul>{" "}
        <h4>Ventajas y desventajas:</h4>{" "}
        <ul>
          {" "}
          <li>
            ✅ Ventajas:{" "}
            <ul>
              {" "}
              <li>Recurso abundante e inagotable</li>{" "}
              <li>Cero emisiones operativas</li>{" "}
              <li>Complementaria con solar (viento nocturno)</li>{" "}
              <li>Uso compatible del suelo (agricultura bajo parques)</li>{" "}
              <li>Tecnología madura y competitiva</li>{" "}
            </ul>{" "}
          </li>{" "}
          <li>
            ❌ Desventajas:{" "}
            <ul>
              {" "}
              <li>Intermitencia: producción variable según viento</li>{" "}
              <li>Impacto visual y paisajístico</li>{" "}
              <li>Ruido: 35-45 dB a 300m (conversación normal)</li>{" "}
              <li>
                Impacto fauna: colisión aves y murciélagos (estudios previos
                obligatorios)
              </li>{" "}
              <li>Requiere vientos &gt;4 m/s, óptimo 12-15 m/s</li>{" "}
            </ul>{" "}
          </li>{" "}
        </ul>{" "}
        <Example>
          {" "}
          Parque eólico típico:
          <br /> Parque de 50 MW con 20 turbinas de 2.5 MW:
          <br /> • Superficie: 200-400 hectáreas (uso real: 2-5%)
          <br /> • Producción anual: 125.000 MWh
          <br /> • Hogares abastecidos: ~35.000
          <br /> • Inversión: 60-75 millones €<br /> • Vida útil: 20-25 años
          <br /> • Evita emisiones: 50.000 ton CO₂/año{" "}
        </Example>{" "}
      </Concept>{" "}
      {/* Energía Hidráulica */}{" "}
      <Concept title="Energía Hidráulica" emoji="💧">
        {" "}
        <p>
          {" "}
          La energía hidráulica aprovecha la energía potencial del agua
          almacenada en altura (embalses) o la energía cinética de ríos. Es la
          renovable más antigua y una de las más estables.{" "}
        </p>{" "}
        <h4>Tipos de centrales hidroeléctricas:</h4>{" "}
        <div className="hydro-types">
          {" "}
          <h5>1. Centrales de embalse</h5>{" "}
          <ul>
            {" "}
            <li>
              Funcionamiento: Presa retiene agua → turbina en salto → generador
            </li>{" "}
            <li>Ventaja: Almacenamiento: genera cuando hay demanda</li>{" "}
            <li>Potencia: 100-2.000 MW por central</li>{" "}
            <li>Ejemplo: Aldeadávila (Salamanca) - 1.140 MW, salto 139m</li>{" "}
          </ul>{" "}
          <h5>2. Centrales de agua fluyente</h5>{" "}
          <ul>
            {" "}
            <li>
              Funcionamiento: Aprovecha caudal natural del río sin embalse
              grande
            </li>{" "}
            <li>Ventaja: Menor impacto ambiental</li>{" "}
            <li>Desventaja: Producción variable según caudal</li>{" "}
          </ul>{" "}
          <h5>3. Centrales de bombeo (almacenamiento)</h5>{" "}
          <ul>
            {" "}
            <li>
              Funcionamiento: Bombea agua a embalse superior cuando sobra
              electricidad → turbina cuando falta
            </li>{" "}
            <li>Eficiencia: 70-85% (round-trip)</li>{" "}
            <li>Función: Batería gigante para equilibrar red eléctrica</li>{" "}
            <li>Ejemplo: Cortes-La Muela (Valencia) - 630 MW</li>{" "}
          </ul>{" "}
          <h5>4. Minicentrales (&lt;10 MW)</h5>{" "}
          <ul>
            {" "}
            <li>Ubicación: Pequeños ríos, canales, acequias</li>{" "}
            <li>Impacto: Mínimo, permite paso peces</li>{" "}
            <li>España: ~2.000 minicentrales, 2 GW total</li>{" "}
          </ul>{" "}
        </div>{" "}
        <h4>Datos de producción hidráulica:</h4>{" "}
        <ul>
          {" "}
          <li>España 2023: ~23.000 GWh (año seco), ~9% electricidad</li>{" "}
          <li>Potencia instalada: ~20 GW (17 GW convencional + 3 GW bombeo)</li>{" "}
          <li>Variabilidad: 20.000-45.000 GWh según lluvias</li>{" "}
          <li>
            Ventaja estratégica: Energía de respaldo rápida (arranque en
            minutos)
          </li>{" "}
        </ul>{" "}
        <h4>Ventajas y desventajas:</h4>{" "}
        <ul>
          {" "}
          <li>
            ✅ Ventajas:{" "}
            <ul>
              {" "}
              <li>Producción estable y predecible</li>{" "}
              <li>Almacenamiento natural (embalses)</li>{" "}
              <li>Larga vida útil: 50-100 años</li>{" "}
              <li>
                Usos múltiples: electricidad, riego, abastecimiento, turismo
              </li>{" "}
              <li>Respuesta rápida a picos de demanda</li>{" "}
            </ul>{" "}
          </li>{" "}
          <li>
            ❌ Desventajas:{" "}
            <ul>
              {" "}
              <li>Depende de lluvias (vulnerable a sequías)</li>{" "}
              <li>Impacto ecosistemas fluviales: barrera peces, sedimentos</li>{" "}
              <li>Inunda valles: reubicación población</li>{" "}
              <li>Emisiones metano embalses tropicales (España mínimo)</li>{" "}
              <li>Potencial limitado: mejores ubicaciones ya explotadas</li>{" "}
            </ul>{" "}
          </li>{" "}
        </ul>{" "}
        <Example>
          {" "}
          Central hidráulica tipo:
          <br /> Embalse de 500 MW:
          <br /> • Salto: 100 metros
          <br /> • Caudal turbinado: 50 m³/s
          <br /> • Factor capacidad: 35-40%
          <br /> • Producción anual: 1.750 GWh
          <br /> • Hogares abastecidos: ~500.000
          <br /> • Tiempo respuesta: 2-5 minutos (vs 8-12h central térmica){" "}
        </Example>{" "}
      </Concept>{" "}
      {/* Energía Mareomotriz */}{" "}
      <Concept title="Energía Mareomotriz y Undimotriz" emoji="🌊">
        {" "}
        <p>
          {" "}
          Las energías oceánicas aprovechan el movimiento del agua del mar:
          mareas (mareomotriz), olas (undimotriz) y corrientes marinas. Son
          recursos predecibles pero con tecnología aún en desarrollo.{" "}
        </p>{" "}
        <h4>1. Energía Mareomotriz</h4>{" "}
        <ul>
          {" "}
          <li>
            Origen: Subida y bajada del nivel del mar (atracción Luna y Sol)
          </li>{" "}
          <li>Tecnología: Presa en estuario con turbinas bidireccionales</li>{" "}
          <li>Ventaja: 100% predecible (tablas de mareas)</li>{" "}
          <li>Requisito: Amplitud mínima 5 metros</li>{" "}
          <li>Ejemplo: La Rance (Francia) - 240 MW, operativa desde 1966</li>{" "}
          <li>
            Potencial España: Limitado, mejores zonas: Galicia (rías), Cádiz
          </li>{" "}
        </ul>{" "}
        <h4>2. Energía de las Olas (Undimotriz)</h4>{" "}
        <ul>
          {" "}
          <li>Origen: Movimiento ondulatorio del agua por viento</li>{" "}
          <li>Densidad energética: Alta, 30-70 kW/m de frente de ola</li>{" "}
          <li>Tecnología: Boyas oscilantes, columnas de agua, atenuadores</li>{" "}
          <li>Estado: Prototipos y proyectos piloto</li>{" "}
          <li>Desafío: Supervivencia en tormentas, corrosión, mantenimiento</li>{" "}
        </ul>{" "}
        <h4>3. Corrientes Marinas</h4>{" "}
        <ul>
          {" "}
          <li>
            Origen: Corrientes oceánicas constantes (ej: Corriente del Golfo)
          </li>{" "}
          <li>
            Tecnología: Turbinas submarinas (como aerogeneradores bajo agua)
          </li>{" "}
          <li>Ventaja: Recurso constante, alta densidad agua</li>{" "}
        </ul>{" "}
        <h4>Ventajas y desventajas:</h4>{" "}
        <ul>
          {" "}
          <li>
            ✅ Ventajas:{" "}
            <ul>
              {" "}
              <li>Recurso predecible (mareas) o abundante (olas)</li>{" "}
              <li>Alta densidad energética</li>{" "}
              <li>No ocupa espacio terrestre</li>{" "}
              <li>Invisible desde costa (instalaciones submarinas)</li>{" "}
            </ul>{" "}
          </li>{" "}
          <li>
            ❌ Desventajas:{" "}
            <ul>
              {" "}
              <li>Tecnología inmadura, costes muy altos</li>{" "}
              <li>Difícil mantenimiento (ambiente hostil)</li>{" "}
              <li>Impacto ecosistemas marinos incierto</li>{" "}
              <li>Pocos emplazamientos viables</li>{" "}
            </ul>{" "}
          </li>{" "}
        </ul>{" "}
        <Important>
          {" "}
          Estado actual: Las energías oceánicas representan &lt;1% de la energía
          renovable global. Se espera desarrollo significativo en la década
          2030-2040 con mejoras tecnológicas y reducción de costes.{" "}
        </Important>{" "}
      </Concept>{" "}
      {/* Energía Geotérmica */}{" "}
      <Concept title="Energía Geotérmica" emoji="🌍">
        {" "}
        <p>
          {" "}
          La energía geotérmica aprovecha el calor del interior de la Tierra
          para generar electricidad o proporcionar calefacción. Es la única
          renovable disponible 24/7/365 sin intermitencia.{" "}
        </p>{" "}
        <h4>Tipos de geotermia:</h4>{" "}
        <div className="geothermal-types">
          {" "}
          <h5>1. Geotermia de Alta Temperatura (&gt;150°C)</h5>{" "}
          <ul>
            {" "}
            <li>Uso: Generación eléctrica</li>{" "}
            <li>Ubicación: Zonas volcánicas, fallas tectónicas</li>{" "}
            <li>Profundidad: 1.000-3.000 metros</li>{" "}
            <li>Tecnología: Pozos → vapor → turbina → electricidad</li>{" "}
            <li>Ejemplos: Islandia (30% electricidad), Filipinas, Indonesia</li>{" "}
          </ul>{" "}
          <h5>2. Geotermia de Media Temperatura (90-150°C)</h5>{" "}
          <ul>
            {" "}
            <li>Uso: Calefacción distrital, invernaderos, balnearios</li>{" "}
            <li>Profundidad: 500-2.000 metros</li>{" "}
            <li>España: Potencial en Canarias, Galicia, Cataluña</li>{" "}
          </ul>{" "}
          <h5>3. Geotermia de Baja Temperatura (&lt;90°C)</h5>{" "}
          <ul>
            {" "}
            <li>
              Uso: Bombas de calor geotérmicas (calefacción/refrigeración)
            </li>{" "}
            <li>Profundidad: 50-400 metros</li>{" "}
            <li>Aplicación: Viviendas unifamiliares, edificios</li>{" "}
            <li>
              Eficiencia: COP 3-5 (por cada kWh eléctrico → 3-5 kWh térmicos)
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <h4>Bombas de calor geotérmicas (más común en España):</h4>{" "}
        <ul>
          {" "}
          <li>
            Funcionamiento: Intercambiador enterrado extrae/inyecta calor del
            suelo (10-15°C constante)
          </li>{" "}
          <li>
            Verano: Extrae calor de la casa y lo disipa en el suelo
            (refrigeración)
          </li>{" "}
          <li>
            Invierno: Extrae calor del suelo y lo eleva para calentar casa
          </li>{" "}
          <li>Inversión: 15.000-25.000€ vivienda unifamiliar</li>{" "}
          <li>Ahorro: 50-70% vs calefacción eléctrica convencional</li>{" "}
          <li>Vida útil: 25 años bomba, 50-100 años intercambiador</li>{" "}
        </ul>{" "}
        <h4>Ventajas y desventajas:</h4>{" "}
        <ul>
          {" "}
          <li>
            ✅ Ventajas:{" "}
            <ul>
              {" "}
              <li>Disponible 24/7 (energía base perfecta)</li>{" "}
              <li>
                Huella mínima (1 MW geotérmica = 0.04 km² vs 1.5 km² solar)
              </li>{" "}
              <li>Cero emisiones operativas</li>{" "}
              <li>Larga vida útil: 30-50 años</li>{" "}
              <li>Factor capacidad muy alto: 90-95%</li>{" "}
            </ul>{" "}
          </li>{" "}
          <li>
            ❌ Desventajas:{" "}
            <ul>
              {" "}
              <li>Recurso geográficamente limitado</li>{" "}
              <li>España: potencial bajo (excepto Canarias)</li>{" "}
              <li>Alta inversión inicial pozos</li>{" "}
              <li>Riesgo sismicidad inducida (muy raro, magnitud baja)</li>{" "}
              <li>Emisiones H₂S y CO₂ en algunas zonas (minoritario)</li>{" "}
            </ul>{" "}
          </li>{" "}
        </ul>{" "}
        <h4>Datos mundiales:</h4>{" "}
        <ul>
          {" "}
          <li>Potencia instalada mundial: ~16 GW eléctricos</li>{" "}
          <li>
            Líderes: EE.UU (2.5 GW), Indonesia (2.1 GW), Filipinas (1.9 GW)
          </li>{" "}
          <li>Islandia: 30% electricidad + 90% calefacción geotérmica</li>{" "}
          <li>España: Muy limitado, potencial en Canarias sin explotar</li>{" "}
        </ul>{" "}
      </Concept>{" "}
      {/* Biomasa */}{" "}
      <Concept title="Biomasa" emoji="🌾">
        {" "}
        <p>
          {" "}
          La biomasa es materia orgánica de origen vegetal o animal que puede
          utilizarse como fuente de energía. Incluye residuos forestales,
          agrícolas, ganaderos y cultivos energéticos.{" "}
        </p>{" "}
        <h4>Tipos de biomasa:</h4>{" "}
        <div className="biomass-types">
          {" "}
          <h5>1. Biomasa Forestal</h5>{" "}
          <ul>
            {" "}
            <li>Origen: Restos de podas, talas, limpiezas</li>{" "}
            <li>Usos: Astillas, pellets para calefacción y electricidad</li>{" "}
            <li>Ventaja: Gestión forestal sostenible previene incendios</li>{" "}
          </ul>{" "}
          <h5>2. Biomasa Agrícola</h5>{" "}
          <ul>
            {" "}
            <li>
              Origen: Rastrojos (paja cereal), residuos poda olivos/viñedos
            </li>{" "}
            <li>Uso: Combustión directa, pellets</li>{" "}
          </ul>{" "}
          <h5>3. Biomasa Ganadera</h5>{" "}
          <ul>
            {" "}
            <li>Origen: Estiércol, purines</li>{" "}
            <li>Tecnología: Biodigestores → biogás (60% metano + 40% CO₂)</li>{" "}
            <li>Subproducto: Digestato como fertilizante orgánico</li>{" "}
          </ul>{" "}
          <h5>4. Cultivos Energéticos</h5>{" "}
          <ul>
            {" "}
            <li>Plantas: Colza, girasol, maíz, remolacha, caña azúcar</li>{" "}
            <li>Productos: Biodiésel, bioetanol (biocombustibles)</li>{" "}
            <li>Controversia: Competencia con producción alimentos</li>{" "}
          </ul>{" "}
          <h5>5. Residuos Urbanos Orgánicos</h5>{" "}
          <ul>
            {" "}
            <li>Origen: Fracción orgánica basura, lodos depuradora</li>{" "}
            <li>Tratamiento: Compostaje o biodigestión</li>{" "}
          </ul>{" "}
        </div>{" "}
        <h4>Tecnologías de aprovechamiento:</h4>{" "}
        <ul>
          {" "}
          <li>
            Combustión directa: Calderas de biomasa para calor o electricidad
          </li>{" "}
          <li>Gasificación: Calor → gas de síntesis → motor/turbina</li>{" "}
          <li>
            Pirólisis: Descomposición térmica sin oxígeno → bio-oil, syngas,
            biochar
          </li>{" "}
          <li>Digestión anaeróbica: Bacterias → biogás → electricidad/calor</li>{" "}
          <li>Transesterificación: Aceites vegetales → biodiésel</li>{" "}
          <li>Fermentación: Azúcares → bioetanol (E10 gasolina)</li>{" "}
        </ul>{" "}
        <h4>Datos de biomasa en España:</h4>{" "}
        <ul>
          {" "}
          <li>Producción 2023: ~5.000 GWh eléctricos + calor</li>{" "}
          <li>Potencia instalada: ~1 GW eléctrico</li>{" "}
          <li>Biomasa térmica: 300.000 instalaciones (calderas, estufas)</li>{" "}
          <li>Empleo: ~9.000 empleos sector forestal-energético</li>{" "}
        </ul>{" "}
        <h4>Ventajas y desventajas:</h4>{" "}
        <ul>
          {" "}
          <li>
            ✅ Ventajas:{" "}
            <ul>
              {" "}
              <li>Aprovecha residuos (economía circular)</li>{" "}
              <li>
                CO₂ neutro: ciclo corto carbono (planta absorbe = combustión
                emite)
              </li>{" "}
              <li>Gestionable: produce cuando se necesita</li>{" "}
              <li>Dinamiza economía rural</li>{" "}
              <li>Reduce riesgo incendios forestales (limpieza montes)</li>{" "}
            </ul>{" "}
          </li>{" "}
          <li>
            ❌ Desventajas:{" "}
            <ul>
              {" "}
              <li>
                Emisiones locales: CO, NOx, partículas (requiere filtros)
              </li>{" "}
              <li>
                Menor densidad energética vs fósiles (necesita más volumen)
              </li>{" "}
              <li>
                Logística compleja: recolección, transporte, almacenamiento
              </li>{" "}
              <li>
                Cultivos energéticos: riesgo monocultivo, uso agua/fertilizantes
              </li>{" "}
              <li>Eficiencia conversión: 20-40% (vs 60% gas natural)</li>{" "}
            </ul>{" "}
          </li>{" "}
        </ul>{" "}
        <Example>
          {" "}
          Caldera de pellets doméstica:
          <br /> Vivienda 150 m² calefacción:
          <br /> • Consumo: 3-4 toneladas pellets/año
          <br /> • Coste pellets: 250-300 €/tonelada → 900€/año
          <br /> • Coste gasóleo: ~1.500 €/año → Ahorro 600€
          <br /> • Inversión caldera: 8.000-12.000€
          <br /> • Amortización: 15-20 años
          <br /> • Emisiones evitadas: 4 ton CO₂/año{" "}
        </Example>{" "}
      </Concept>{" "}
      {/* Comparación Final */}{" "}
      <Concept title="Resumen: Comparación de Renovables" emoji="📊">
        {" "}
        <table className="renewables-comparison" style={{width: '100%'}}>
          {" "}
          <thead>
            {" "}
            <tr>
              {" "}
              <th>Energía</th> <th>Disponibilidad</th> <th>Coste (€/kWh)</th>{" "}
              <th>Ventaja principal</th> <th>Limitación principal</th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {" "}
            <tr>
              {" "}
              <td>☀️ Solar</td> <td>Diurna, variable</td> <td>0.02-0.04</td>{" "}
              <td>Más barata, modular</td> <td>Intermitencia</td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td>💨 Eólica</td> <td>Variable</td> <td>0.03-0.06</td>{" "}
              <td>Complementa solar</td> <td>Requiere viento</td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td>💧 Hidráulica</td> <td>Alta</td> <td>0.04-0.08</td>{" "}
              <td>Almacenamiento</td> <td>Depende lluvias</td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td>🌊 Mareomotriz</td> <td>Muy alta</td> <td>0.15-0.30</td>{" "}
              <td>Predecible 100%</td> <td>Pocos emplazamientos</td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td>🌍 Geotérmica</td> <td>24/7</td> <td>0.05-0.10</td>{" "}
              <td>Continua, estable</td> <td>Geográfica</td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td>🌾 Biomasa</td> <td>Alta</td> <td>0.08-0.12</td>{" "}
              <td>Gestionable</td> <td>Logística compleja</td>{" "}
            </tr>{" "}
          </tbody>{" "}
        </table>{" "}
        <Important>
          {" "}
          🔑 Clave del futuro: Combinar múltiples renovables (mix energético)
          con almacenamiento (baterías, bombeo) y gestión inteligente de la
          demanda para lograr un sistema 100% renovable estable y fiable.{" "}
        </Important>{" "}
        <p
          style={{
            marginTop: "30px",
            padding: "20px",
            background: "#e3f2fd",
            borderRadius: "8px",
          }}
        >
          {" "}
          💡 Para entender mejor los desafíos técnicos del transporte de
          energía, la estabilidad de la red eléctrica, y la comparación completa
          entre sistemas fósiles y renovables, consulta el subtema "Transporte y
          Estabilidad Energética".{" "}
        </p>{" "}
      </Concept>{" "}
    </TheorySection>
  );
};
export default RenovablesTeoria;
