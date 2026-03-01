import { TheorySection, Concept, Important, Example, Formula } from '../../../../../components/TheoryV2';

export const metadata = {
  titulo: 'Transporte y Estabilidad Energética',
  descripcion: 'Desafíos del transporte de energía, estabilidad de red, y diferencias entre sistemas fósiles y renovables',
  isTheoryOnly: true,
  educationLevel: "ESO",
  levels: ['ESO']
};

const TransporteEstabilidadTeoria = () => {
  return (
    <TheorySection title="Transporte y Estabilidad Energética" emoji="⚡" nivel="ESO">

      {/* Introducción */}
      <Concept title="El desafío oculto de la energía" emoji="🔌">
        <p>
          Cuando pensamos en energía, solemos enfocarnos en cómo la generamos (solar, carbón, nuclear...).
          Pero hay dos problemas CRÍTICOS que a menudo se ignoran: ¿Cómo la transportamos? ¿Cómo
          mantenemos la red eléctrica estable? Estos desafíos son fundamentales para entender
          por qué la transición renovable es más compleja de lo que parece.
        </p>

        <Important>
          La generación de energía es solo el 30-40% del problema. El resto es: transporte,
          almacenamiento, estabilidad de red, respaldo y gestión de la demanda. Un sistema
          energético no es solo las fuentes, es toda la infraestructura.
        </Important>
      </Concept>

      {/* Energías Síncronas vs Asíncronas */}
      <Concept title="Energías Síncronas vs Asíncronas: El Problema de la Estabilidad" emoji="⚙️">
        <p>
          Una de las mayores dificultades de integrar renovables en la red eléctrica es la diferencia
          entre generación síncrona y asíncrona. Este problema técnico es crítico para la estabilidad
          del sistema eléctrico.
        </p>

        <h4>⚙️ Generación Síncrona (Tradicional):</h4>
        <ul>
          <li>🔄 Turbinas mecánicas: Centrales térmicas (carbón, gas, nuclear), hidroeléctricas</li>
          <li>📊 Frecuencia estable: Giran a 50 Hz (3000 rpm) sincronizadas con la red</li>
          <li>💪 Inercia rotatoria: Las turbinas masivas actúan como "volantes de inercia"</li>
          <li>⚖️ Estabilización automática: Si aumenta demanda, las turbinas se frenan ligeramente (50 Hz → 49.9 Hz), lo que activa automáticamente más generación</li>
          <li>🎯 Respuesta instantánea: La inercia física proporciona 5-10 segundos para ajustar producción</li>
          <li>🔧 Funcionamiento: Una turbina de 1000 MW puede pesar 100-200 toneladas girando a 3000 rpm</li>
        </ul>

        <h4>⚡ Generación Asíncrona (Renovables):</h4>
        <ul>
          <li>☀️ Solar fotovoltaica: Electrónica de potencia (inversores), SIN partes rotatorias</li>
          <li>💨 Eólica moderna: Generadores desacoplados mediante inversores electrónicos</li>
          <li>❌ SIN inercia: No hay masa rotatoria que estabilice la red físicamente</li>
          <li>🖥️ Control electrónico: Respuesta mediante software y electrónica (milisegundos, pero sin inercia)</li>
          <li>⚠️ Problema de estabilidad: Con mucha solar/eólica, la red pierde inercia natural</li>
          <li>📉 Vulnerabilidad: Cambios bruscos de demanda pueden causar apagones en cascada</li>
        </ul>

        <Important>
          ⚠️ Crisis de inercia: Cuando las renovables asíncronas superan el 60-70% de la generación
          instantánea, la red eléctrica puede volverse INESTABLE por falta de inercia rotatoria.
          Este es uno de los límites técnicos más importantes para la penetración de renovables
          sin sistemas de respaldo o inercia sintética.
        </Important>

        <Example>
          Apagón Australia 2016: Un temporal en South Australia desconectó líneas de transmisión
          y parques eólicos simultáneamente. La red, con 40% de generación eólica y poca inercia
          rotatoria convencional, NO pudo recuperarse automáticamente. Resultado: Colapso total
          del sistema → 1.7 millones de personas sin electricidad durante horas.
          <br/><br/>
          Solución implementada: Tesla instaló en 2017 la batería Hornsdale Power Reserve (100 MW / 129 MWh)
          que aporta "inercia sintética" respondiendo en 140 milisegundos a fluctuaciones de frecuencia.
          Desde entonces, la estabilidad mejoró dramáticamente.
        </Example>

        <Example>
          Apagón Península Ibérica abril 2025: El 28 de abril de 2025 a las 12:33h, un fallo técnico
          masivo provocó un apagón que afectó a TODA la península Ibérica - tanto España como Portugal.
          Millones de usuarios sin electricidad, colapso de transportes, hospitales con generadores de emergencia.
          <br/><br/>
          Contexto crítico: Era mediodía de un día primaveral soleado con fuerte viento. La generación
          renovable instantánea alcanzó niveles récord superiores al 75% del mix (solar + eólica), mientras
          la demanda era moderada-baja. Muchas centrales térmicas convencionales estaban apagadas o al
          mínimo técnico, resultando en inercia rotatoria CRÍTICAMENTE BAJA en todo el sistema peninsular.
          <br/><br/>
          Causa técnica: Un disparo en cascada de protecciones tras una perturbación en líneas de 400 kV.
          La red, con inercia insuficiente por el bajo número de turbinas síncronas activas, NO pudo
          absorber la perturbación. La frecuencia cayó bruscamente de 50 Hz y los automatismos de protección
          desconectaron carga masivamente para evitar un colapso total europeo. El sistema peninsular
          actuó como "isla" separándose del resto de Europa.
          <br/><br/>
          Magnitud sin precedentes: Fue el apagón más grave en décadas para la península, demostrando
          que los límites técnicos de penetración renovable sin inercia sintética SON REALES.
          <br/><br/>
          Consecuencia: Este incidente crítico aceleró DRÁSTICAMENTE los planes de REE y REN (Portugal)
          para instalar sistemas de inercia sintética: baterías de respuesta ultra-rápida, condensadores
          síncronos, y volantes de inercia. También se revisaron los protocolos para mantener un mínimo
          de centrales térmicas en funcionamiento como respaldo rotatorio.
        </Example>

        <Example>
          Apagón España noviembre 2024: El 4 de noviembre de 2024 a las 13:30h, un fallo en la
          subestación de Villafranca (Guipúzcoa) provocó un apagón masivo que afectó a Portugal,
          gran parte de Cataluña, País Vasco y otras regiones. Más de 2 millones de personas sin luz,
          trenes AVE parados, aeropuertos con problemas, hospitales funcionando con generadores.
          <br/><br/>
          Causa técnica: Una sobrecarga en la interconexión con Francia (estábamos EXPORTANDO 3000 MW
          de renovables) combinada con alta penetración solar/eólica instantánea (65% renovable en ese momento)
          provocó una caída de frecuencia de 50 Hz a 49.2 Hz en SEGUNDOS. La falta de inercia rotatoria
          suficiente impidió que el sistema se autoestabilizara, y el automatismo de protección DESCONECTÓ
          Portugal + parte de España para evitar un colapso total de la red europea.
          <br/><br/>
          Duración: Portugal 1 hora, España 30-45 minutos en zonas más afectadas.
          <br/><br/>
          Lección común de ambos apagones 2024: España tiene 55% renovable en el mix anual, pero
          cuando la generación instantánea supera 65-70% renovable sin suficientes turbinas síncronas
          activas, la red se vuelve vulnerable. Red Eléctrica Española (REE) está instalando
          condensadores síncronos, volantes de inercia y baterías de respuesta rápida para aportar
          inercia sintética. Objetivo: Poder operar con 80-90% renovable instantáneo de forma segura para 2030.
        </Example>

        <h4>📊 Comparación técnica:</h4>
        <table className="grid-stability-comparison" style={{width: '100%'}}>
          <thead>
            <tr>
              <th>Característica</th>
              <th>Generación Síncrona</th>
              <th>Generación Asíncrona</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Inercia física</td>
              <td>✅ Alta (100-200 ton girando)</td>
              <td>❌ Cero (electrónica estática)</td>
            </tr>
            <tr>
              <td>Tiempo respuesta</td>
              <td>⚡ Instantáneo (física)</td>
              <td>🖥️ 1-100 ms (software)</td>
            </tr>
            <tr>
              <td>Estabilidad frecuencia</td>
              <td>✅ Automática (inercia)</td>
              <td>⚠️ Requiere control activo</td>
            </tr>
            <tr>
              <td>Tolerancia cambios</td>
              <td>✅ Alta (volante de inercia)</td>
              <td>❌ Baja (sin amortiguación)</td>
            </tr>
            <tr>
              <td>Coste operación</td>
              <td>💰 Alto (combustible)</td>
              <td>✅ Bajo/cero (sol/viento gratis)</td>
            </tr>
            <tr>
              <td>Emisiones CO₂</td>
              <td>❌ 400-800 g/kWh</td>
              <td>✅ 10-50 g/kWh</td>
            </tr>
          </tbody>
        </table>

        <h4>🔧 Soluciones técnicas modernas:</h4>
        <ul>
          <li>🔋 Baterías de respuesta rápida: Aportan "inercia sintética" en milisegundos (como la de Tesla en Australia)</li>
          <li>💧 Centrales de bombeo hidráulico: Pueden arrancar en 60-90 segundos, actúan como respaldo gestionable</li>
          <li>🔥 Centrales de gas en standby: Turbinas de ciclo combinado como respaldo rápido cuando cae la generación renovable</li>
          <li>🌐 Interconexiones internacionales: Cables submarinos HVDC para importar estabilidad de redes vecinas (ej. España-Francia)</li>
          <li>🖥️ Generadores síncronos virtuales: Software avanzado en inversores que simula comportamiento de turbinas con inercia</li>
          <li>📡 Smart grids: Redes inteligentes que ajustan demanda en tiempo real (apagar cargadores coches, aires acondicionados por segundos)</li>
        </ul>

        <Important>
          La transición renovable requiere invertir MASIVAMENTE en estas soluciones. No basta
          con poner paneles solares, hay que rediseñar completamente cómo funciona la red eléctrica
          para operar sin la inercia natural de las turbinas térmicas.
        </Important>
      </Concept>

      {/* Problema del transporte de energía */}
      <Concept title="Transporte de Energía: Renovables vs Combustibles Fósiles" emoji="🚛">
        <p>
          La electricidad de renovables tiene una GRAN limitación frente a combustibles fósiles:
          NO SE PUEDE ALMACENAR ni TRANSPORTAR fácilmente. Este es uno de los mayores desafíos
          de la transición energética y explica por qué seguimos dependiendo de combustibles.
        </p>

        <h4>🛢️ Combustibles fósiles: Transporte trivial</h4>
        <ul>
          <li>📦 Densidad energética altísima: 1 litro gasolina = 9 kWh (33 MJ), 1 kg petróleo = 12 kWh</li>
          <li>🚢 Transporte masivo: Superpetroleros de 300,000 toneladas (3.6 TWh) cruzan océanos</li>
          <li>⏳ Almacenamiento indefinido: Tanques, bidones, cisternas - se conserva años sin pérdidas</li>
          <li>🚛 Logística simple: Camiones cisterna (40,000 litros = 360 MWh), tuberías (gas), distribución flexible 24/7</li>
          <li>💰 Coste transporte bajísimo: ~0.005-0.01 €/kWh transportado miles de kilómetros</li>
          <li>🌍 Alcance global: El petróleo de Arabia llega a cualquier parte del mundo en semanas</li>
          <li>⛽ Distribución capilar: Gasolineras cada pocos km, repostaje en 5 minutos</li>
        </ul>

        <h4>⚡ Electricidad renovable: Transporte complejo y caro</h4>
        <ul>
          <li>🔌 Cables de alta tensión: ÚNICA forma de transporte, extremadamente CAROS (1-3 millones €/km)</li>
          <li>📉 Pérdidas en transmisión: 3-7% por cada 1000 km en alta tensión (400 kV), 10-15% en media tensión</li>
          <li>⏱️ Uso instantáneo obligatorio: Se debe consumir EN EL MOMENTO EXACTO que se produce</li>
          <li>🚫 Almacenamiento difícil y costoso: Baterías caras (~150 €/kWh capacidad) y baja densidad (0.25 kWh/kg)</li>
          <li>🌍 Limitación geográfica severa: La electricidad del Sahara no puede "enviarse" fácilmente a Europa</li>
          <li>🏗️ Infraestructura fija: Un cable de 500 km tarda 5-10 años en construirse (permisos, obras)</li>
          <li>💸 Coste prohibitivo: Cable submarino España-Francia 2x1000 MW = 700 millones € (solo 65 km)</li>
        </ul>

        <Important>
          🔴 Paradoja del transporte: España tiene sol excepcional, Noruega enormes recursos
          hidroeléctricos, Dinamarca viento constante. PERO transportar electricidad entre países
          requiere cables submarinos multimillonarios, años de construcción, y aún así tiene
          pérdidas del 5-10%. En cambio, un petrolero trae 2 millones de barriles de Arabia Saudí
          (3 TWh) por un coste de transporte de 0.005 €/kWh.
        </Important>

        <h4>🔋 El problema crítico del almacenamiento:</h4>
        <table className="energy-storage-comparison" style={{width: '100%'}}>
          <thead>
            <tr>
              <th>Método almacenamiento</th>
              <th>Densidad energética</th>
              <th>Coste instalación</th>
              <th>Limitaciones principales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>⛽ Gasolina (referencia)</td>
              <td>9 kWh/litro<br/>12 kWh/kg</td>
              <td>0.15 €/kWh</td>
              <td>Ninguna técnica (base de comparación)</td>
            </tr>
            <tr>
              <td>🔋 Baterías Li-ion</td>
              <td>0.25 kWh/kg<br/>0.6 kWh/litro</td>
              <td>150 €/kWh</td>
              <td>48× menos densa que gasolina<br/>1000× más cara<br/>Vida útil: 10-15 años, 3000 ciclos</td>
            </tr>
            <tr>
              <td>💧 Bombeo hidráulico</td>
              <td>0.001 kWh/kg (agua)<br/>0.001 kWh/litro</td>
              <td>5-50 €/kWh</td>
              <td>Requiere geografía MUY específica (montañas + embalses)<br/>Solo ~40 ubicaciones viables en España<br/>Eficiencia 70-85%</td>
            </tr>
            <tr>
              <td>💨 Hidrógeno verde (H₂)</td>
              <td>33 kWh/kg<br/>0.003 kWh/litro (gas 700 bar)</td>
              <td>300-500 €/kWh</td>
              <td>Eficiencia TOTAL 25-35% (electrólisis + compresión + combustión)<br/>Infraestructura nueva completa<br/>Fugas, corrosión materiales</td>
            </tr>
            <tr>
              <td>🌡️ Sales fundidas (CSP)</td>
              <td>0.05 kWh/kg</td>
              <td>20-50 €/kWh</td>
              <td>Solo para plantas solares térmicas concentradas<br/>Requiere clima muy soleado<br/>Almacenamiento máximo 12-15 horas</td>
            </tr>
            <tr>
              <td>🔥 Aire comprimido (CAES)</td>
              <td>0.01-0.03 kWh/kg</td>
              <td>30-80 €/kWh</td>
              <td>Requiere cavernas subterráneas (sal, roca)<br/>Eficiencia 40-60%<br/>Pocas ubicaciones geológicas aptas</td>
            </tr>
          </tbody>
        </table>

        <Example>
          Caso real España 2023: Un día soleado de primavera, Andalucía genera 15 GW de energía
          solar fotovoltaica a mediodía (máxima producción). Simultáneamente, Castilla y León
          necesita energía pero solo hay cables de interconexión de 3-5 GW de capacidad.
          <br/><br/>
          Resultado: Se "tira" (curtailment) 8-10 GW de electricidad solar porque NO HAY FORMA
          de transportarla ni almacenarla. Mientras tanto, se quema gas natural en centrales de
          ciclo combinado en León porque no puede usar el sol abundante de Sevilla a 600 km de distancia.
          <br/><br/>
          Energía desperdiciada en ese día: ~80-100 MWh solares ☀️💸
        </Example>

        <h4>📊 Comparación cuantitativa del problema:</h4>
        <div className="transport-comparison">
          <div className="comparison-card">
            <h5>🚛 Camión cisterna de gasolina</h5>
            <ul>
              <li>Capacidad: 40,000 litros</li>
              <li>Energía: 360 MWh (360,000 kWh)</li>
              <li>Coste transporte: ~500 €</li>
              <li>Coste por kWh: 0.0014 €/kWh</li>
              <li>Tiempo: 500 km en 6 horas</li>
            </ul>
          </div>

          <div className="comparison-card">
            <h5>⚡ Cable alta tensión (equivalente)</h5>
            <ul>
              <li>Capacidad: 1 GW (1000 MW)</li>
              <li>Energía/día: 24 GWh (1 GW × 24h)</li>
              <li>Coste construcción 500 km: 1500 millones €</li>
              <li>Pérdidas transmisión: 3-5% (720-1200 MWh/día perdidos)</li>
              <li>Amortización 30 años: 0.006 €/kWh + pérdidas</li>
            </ul>
          </div>

          <div className="comparison-card">
            <h5>🔋 Megabatería (almacenamiento)</h5>
            <ul>
              <li>Capacidad: 100 MWh (Tesla Megapack)</li>
              <li>Coste instalación: 15-20 millones €</li>
              <li>Vida útil: 3000 ciclos = 8-10 años</li>
              <li>Coste por kWh: 0.05-0.08 €/kWh</li>
              <li>Energía vs camión: 360 MWh camión = 3.6 megabaterías Tesla</li>
            </ul>
          </div>
        </div>

        <Important>
          💡 La diferencia es abismal: Un camión cisterna mueve 360 MWh por 500 € (0.0014 €/kWh).
          Almacenar esos mismos 360 MWh en baterías cuesta 54-72 millones € en infraestructura.
          Transportar esa energía por cable 500 km requiere 1500 millones € de inversión.
          Por eso los combustibles fósiles siguen dominando: su logística es 1000-10000× más barata.
        </Important>

        <h4>🚀 Soluciones en desarrollo (2024-2050):</h4>
        <ul>
          <li>🔌 SuperRed europea (SuperGrid): Cables HVDC (corriente continua de alta tensión) de alta capacidad interconectando países. Proyecto: 150,000 km cables submarinos + terrestres, inversión 500,000 millones € hasta 2050</li>
          <li>💧 Hidrógeno verde: "Envasar" la electricidad renovable como H₂ gas transportable en barcos/tuberías. Problema: eficiencia solo 25-35% (pierdes 65-75% de la energía original)</li>
          <li>🔋 Megabaterías distribuidas: Parques de almacenamiento de 100-500 MWh en puntos estratégicos de la red. Objetivo España: 20 GW / 40 GWh para 2030</li>
          <li>🚗 Vehicle-to-Grid (V2G): Usar baterías de coches eléctricos como almacenamiento distribuido. 10 millones coches × 60 kWh = 600 GWh potencial</li>
          <li>🏭 Demanda flexible industrial: Industrias (aluminio, acero, electrolizadores H₂) que consumen cuando hay exceso renovable barato</li>
          <li>🌐 Redes inteligentes (Smart Grids): Gestión activa de demanda residencial (termostatos, cargadores, lavavajillas) que se activan cuando hay excedente</li>
          <li>⚡ Amoniaco verde (NH₃): Alternativa al H₂, más fácil de transportar (líquido a -33°C o 10 bar), densidad energética mayor</li>
        </ul>

        <Example>
          Proyecto Desertec (fallido): En 2009 se planteó cubrir el Sahara de paneles solares
          y enviar electricidad a Europa mediante cables HVDC. Coste estimado: 400,000 millones €.
          Problemas encontrados: Inestabilidad política (Libia, Argelia), pérdidas de transmisión
          4000 km (~15-20%), vulnerabilidad terrorista, coste prohibitivo de cables submarinos
          por el Mediterráneo. El proyecto se abandonó en 2014.
          <br/><br/>
          Lección: La electricidad NO se puede transportar como el petróleo. La energía renovable
          debe ser LOCAL o necesita transformarse en vectores transportables (H₂, NH₃).
        </Example>
      </Concept>

      {/* Comparación sistemas energéticos */}
      <Concept title="Sistema Fósil vs Sistema Renovable: La Comparación Real" emoji="⚖️">
        <p>
          Para entender completamente el desafío de la transición energética, debemos comparar
          SISTEMAS COMPLETOS, no solo las fuentes de generación. Un sistema energético incluye:
          generación + transporte + almacenamiento + estabilidad + respaldo.
        </p>

        <h4>🛢️ Sistema basado en combustibles fósiles (Actual - Sistema centenario):</h4>
        <ul>
          <li>✅ Generación gestionable 100%: Enciendes la central exactamente cuando necesitas electricidad</li>
          <li>✅ Transporte barato y versátil: Barcos, camiones, tuberías, trenes. Coste: 0.005-0.01 €/kWh</li>
          <li>✅ Almacenamiento trivial: Tanques, depósitos, silos, estaciones de servicio. Capacidad: semanas/meses</li>
          <li>✅ Respaldo natural incluido: Tienes combustible almacenado para 30-90 días de consumo nacional</li>
          <li>✅ Red estable inherente: Inercia rotatoria de turbinas térmicas (50-200 ton girando)</li>
          <li>✅ Infraestructura existente: 150 años de desarrollo, completamente amortizada</li>
          <li>✅ Densidad energética máxima: 9-12 kWh/kg, permite vehículos ligeros con gran autonomía</li>
          <li>❌ Emisiones masivas: 400-800 g CO₂/kWh (carbón: 820 g, gas: 490 g, petróleo: 650 g)</li>
          <li>❌ Recursos finitos: Reservas probadas petróleo ~50 años, gas ~60 años, carbón ~140 años a consumo actual</li>
          <li>❌ Contaminación local severa: NOx (lluvia ácida), SOx (smog), partículas PM2.5 (cáncer, respiratorio)</li>
          <li>❌ Dependencia geopolítica: Europa importa 90% petróleo, 70% gas (Rusia, OPEP)</li>
          <li>❌ Volatilidad precios: Crisis 2022 gas ×10 (de 20 a 200 €/MWh)</li>
        </ul>

        <h4>♻️ Sistema 100% renovable (Objetivo 2050 - Sistema en construcción):</h4>
        <ul>
          <li>✅ Cero emisiones operación: 10-50 g CO₂/kWh (solo fabricación paneles/turbinas, construcción)</li>
          <li>✅ Recursos infinitos: Sol, viento, agua, mareas - inagotables a escala humana</li>
          <li>✅ Coste marginal cero: Una vez construida la planta, energía gratis (sol/viento no se paga)</li>
          <li>✅ Independencia energética: Cada país puede generar su propia energía sin importaciones</li>
          <li>✅ Precio estable largo plazo: No afectado por guerras, OPEP, crisis geopolíticas</li>
          <li>❌ Generación intermitente/variable: Solar solo de día, eólica depende del viento (factor capacidad 15-35%)</li>
          <li>❌ Transporte MUY costoso: Cables 1-3 millones €/km, construcción 5-10 años, pérdidas 5-15%</li>
          <li>❌ Almacenamiento carísimo: Baterías 150 €/kWh (1000× más que tanque gasolina), bombeo limitado geográficamente</li>
          <li>❌ Requiere respaldo 100%: Necesitas capacidad de generación convencional equivalente para noches/calmas</li>
          <li>❌ Sin inercia natural: Estabilidad de red muy compleja, requiere baterías/software/volantes inercia</li>
          <li>❌ Intermitencia estacional: Invierno (poco sol, alta demanda calefacción) requiere almacenamiento semanal/mensual IMPOSIBLE con tecnología actual</li>
          <li>❌ Inversión gigantesca: España necesita 250,000-300,000 millones € (2024-2050) para transición completa</li>
          <li>❌ Uso masivo de territorio: Parque solar 1 GW = 1000 hectáreas, eólico 1 GW = 5000-10000 hectáreas</li>
        </ul>

        <Important>
          📊 Realidad económica completa: El kWh solar en origen tiene un LCOE (coste nivelado)
          de 0.02-0.03 €/kWh, el más barato de la historia. PERO cuando añades almacenamiento
          (12 horas baterías), transporte (cables), respaldo (central gas standby), y gestión de red,
          el kWh solar "firme" disponible 24/7 sube a 0.08-0.15 €/kWh. El sistema completo renovable
          cuesta 3-5× más que solo los paneles/aerogeneradores.
        </Important>

        <h4>💰 Comparación de costes sistémicos (€/kWh final consumidor):</h4>
        <table className="system-cost-comparison" style={{width: '100%'}}>
          <thead>
            <tr>
              <th>Componente sistema</th>
              <th>Sistema fósil</th>
              <th>Sistema 100% renovable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Generación (LCOE)</td>
              <td>0.05-0.08 (gas ciclo combinado)</td>
              <td>0.02-0.04 (solar/eólica)</td>
            </tr>
            <tr>
              <td>Combustible/operación</td>
              <td>0.04-0.06 (gas natural)</td>
              <td>0.00 (sol/viento gratis)</td>
            </tr>
            <tr>
              <td>Transporte/red</td>
              <td>0.02-0.03 (infraestructura existente)</td>
              <td>0.03-0.05 (nuevos cables HVDC)</td>
            </tr>
            <tr>
              <td>Almacenamiento</td>
              <td>0.00 (combustible en tanques)</td>
              <td>0.03-0.06 (baterías/bombeo)</td>
            </tr>
            <tr>
              <td>Respaldo/estabilidad</td>
              <td>0.01 (incluido en generación)</td>
              <td>0.02-0.04 (centrales gas standby + inercia sintética)</td>
            </tr>
            <tr>
              <td>Gestión/balance</td>
              <td>0.005 (operador red)</td>
              <td>0.01-0.02 (smart grids, predicción, control activo)</td>
            </tr>
            <tr>
              <td>TOTAL sistema</td>
              <td>0.12-0.20 €/kWh</td>
              <td>0.11-0.21 €/kWh (2024)<br/>0.08-0.15 €/kWh (objetivo 2050)</td>
            </tr>
          </tbody>
        </table>

        <p>
          Como vemos, el coste TOTAL de ambos sistemas es similar actualmente (0.12-0.20 €/kWh),
          pero el sistema renovable bajará con economías de escala y mejoras tecnológicas, mientras
          que el fósil subirá por agotamiento recursos y tasas carbono.
        </p>

        <h4>🌍 La solución de transición: Sistema híbrido inteligente (2024-2040)</h4>
        <p>
          Ningún país puede ser 100% renovable instantáneamente sin colapso económico. La estrategia
          realista de todos los países desarrollados es una transición gradual de 20-30 años:
        </p>

        <div className="transition-strategy">
          <div className="phase-card">
            <h5>📅 Fase 1: 2024-2030 (30-50% renovable)</h5>
            <ul>
              <li>🔹 40-60% renovable variable: Solar + eólica (cuando hay sol/viento)</li>
              <li>🔹 10-15% renovable gestionable: Hidroeléctrica + biomasa</li>
              <li>🔹 5-10% almacenamiento: Primeras megabaterías + bombeo existente</li>
              <li>🔹 25-40% respaldo fósil: Centrales de gas eficientes (ciclo combinado 60% eficiencia)</li>
              <li>🔹 5-10% nuclear: Centrales existentes (donde las hay) para carga base</li>
              <li>🔹 Interconexiones: Cables entre países vecinos</li>
            </ul>
          </div>

          <div className="phase-card">
            <h5>📅 Fase 2: 2030-2040 (60-80% renovable)</h5>
            <ul>
              <li>🔹 60-70% renovable variable: Solar + eólica con sobreinstalación (150% capacidad pico)</li>
              <li>🔹 10-15% renovable gestionable: Hidro + biomasa + geotérmica</li>
              <li>🔹 10-20% almacenamiento: Baterías masivas + bombeo + H₂ estacional</li>
              <li>🔹 5-15% respaldo fósil: Gas solo picos/emergencias</li>
              <li>🔹 Smart grids completas: Gestión activa demanda residencial/industrial</li>
              <li>🔹 V2G masivo: 10-20 millones coches eléctricos = 600-1200 GWh almacenamiento distribuido</li>
            </ul>
          </div>

          <div className="phase-card">
            <h5>📅 Fase 3: 2040-2050 (90-100% renovable)</h5>
            <ul>
              <li>🔹 70-80% renovable variable: Solar + eólica offshore + onshore</li>
              <li>🔹 10-15% renovable gestionable: Hidro + biomasa + geotérmica + mareomotriz</li>
              <li>🔹 15-25% almacenamiento: Baterías + bombeo + H₂/NH₃ estacional (semanas)</li>
              <li>🔹 0-5% respaldo fósil: Solo emergencias extremas (olas frío 2 semanas sin viento)</li>
              <li>🔹 Hidrógeno verde: 20-30% del mix para industria pesada y almacenamiento largo plazo</li>
              <li>🔹 Captura CO₂: Compensar emisiones residuales para neutralidad neta</li>
            </ul>
          </div>
        </div>

        <Example>
          España 2024 - Realidad actual del sistema híbrido:
          <br/><br/>
          Mix eléctrico anual: ~50% renovable (28% eólica, 14% solar, 8% hidro), 20% nuclear, 30% fósil (gas principalmente).
          <br/><br/>
          PERO la variabilidad instantánea es ENORME:
          <br/>
          • Mediodía primavera soleado + viento: 80-90% renovable instantáneo → Se tira solar (curtailment) porque no hay almacenamiento
          <br/>
          • Noche invernal anticiclón (sin viento): 15-25% renovable (solo hidro), resto gas + nuclear
          <br/>
          • Récord: 23 de marzo 2024, 12:00h → 92% renovable durante 2 horas (pero bajó a 30% esa misma noche)
          <br/><br/>
          El desafío NO es el máximo renovable (ya logramos 90% puntual), sino subir el MÍNIMO
          renovable de las noches/inviernos sin viento. Para eso necesitamos almacenamiento masivo.
        </Example>

        <Important>
          🎯 Objetivo realista España 2030: 75-80% renovable en generación anual (no instantánea).
          Inversión necesaria: ~80,000 millones € (20,000 nuevas renovables + 25,000 redes +
          20,000 almacenamiento + 15,000 digitalización). El verdadero desafío no es instalar
          paneles/molinos (eso es fácil), sino construir el almacenamiento y las redes inteligentes.
        </Important>
      </Concept>

      {/* Conclusiones */}
      <Concept title="Conclusiones: El Verdadero Desafío Energético" emoji="🎓">
        <p>
          Después de analizar los problemas de transporte, almacenamiento y estabilidad, queda
          claro que la transición energética es muchísimo más compleja que "cambiar carbón por solar".
        </p>

        <h4>🔑 Puntos clave para entender la transición:</h4>

        <div className="key-points">
          <div className="point-card">
            <h5>1️⃣ Generación ≠ Sistema completo</h5>
            <p>
              Un panel solar cuesta 0.20 €/W y genera a 0.03 €/kWh. PERO el sistema completo
              (con almacenamiento, transporte, respaldo) cuesta 3-5× más. Los políticos hablan
              de la generación, los ingenieros sufren con el sistema completo.
            </p>
          </div>

          <div className="point-card">
            <h5>2️⃣ La electricidad NO es como el petróleo</h5>
            <p>
              No puedes almacenar electricidad en barriles ni transportarla en camiones. Esta
              diferencia fundamental explica por qué seguimos dependiendo de combustibles fósiles
              para transporte y respaldo, aunque las renovables sean más baratas para generación eléctrica.
            </p>
          </div>

          <div className="point-card">
            <h5>3️⃣ Inercia = Estabilidad (no es opcional)</h5>
            <p>
              Sin inercia rotatoria, la red se vuelve frágil como un castillo de naipes. Cada país
              necesita mantener 30-40% de generación síncrona O invertir masivamente en inercia
              sintética (baterías/volantes/software). No hay atajos técnicos.
            </p>
          </div>

          <div className="point-card">
            <h5>4️⃣ Almacenamiento = El cuello de botella</h5>
            <p>
              Generar 100 GW solares es relativamente fácil (paneles baratos). Almacenar 100 GWh
              para la noche cuesta 15,000-20,000 millones € y es técnicamente complejo. El
              almacenamiento estacional (semanas/meses) prácticamente no existe aún.
            </p>
          </div>

          <div className="point-card">
            <h5>5️⃣ No hay solución mágica única</h5>
            <p>
              El futuro NO será 100% solar, ni 100% eólico, ni 100% nuclear. Será un mix inteligente
              que combina TODAS las tecnologías: solar + eólica + hidro + nuclear (donde se acepte)
              + biomasa + baterías + bombeo + H₂ + gestión demanda + interconexiones.
            </p>
          </div>

          <div className="point-card">
            <h5>6️⃣ El tiempo es crítico (pero realista)</h5>
            <p>
              Descarbonizar 100% en 10 años es físicamente IMPOSIBLE (no hay suficiente litio,
              cobre, mano de obra especializada, ni tiempo para permisos/construcción). Un plazo
              realista es 25-30 años (2025-2050) con inversión masiva y voluntad política sostenida.
            </p>
          </div>
        </div>

        <h4>💭 Reflexión final:</h4>
        <p>
          El sistema energético fósil actual NO es mejor técnicamente, es simplemente MÁS MADURO
          (150 años de desarrollo vs 20 años renovables). Los combustibles fósiles resolvieron los
          problemas de transporte, almacenamiento y estabilidad hace un siglo. Ahora debemos resolver
          esos mismos problemas con electricidad renovable desde cero.
        </p>

        <p>
          La buena noticia: Ya sabemos cómo hacerlo técnicamente. Tenemos todas las tecnologías necesarias
          (baterías, HVDC, smart grids, electrolizadores, bombeo, inercia sintética). La pregunta no es
          "¿es posible?", sino "¿invertiremos lo suficiente y lo haremos lo bastante rápido?".
        </p>

        <Important>
          🌍 La transición energética es el mayor proyecto de ingeniería de la historia humana.
          Requiere reinventar completamente cómo generamos, transportamos, almacenamos y usamos
          la energía. No será fácil, ni rápido, ni barato. Pero es absolutamente necesario para
          evitar un cambio climático catastrófico. Y con cada año que pasa, las tecnologías renovables
          son mejores y más baratas. La inercia ya no es solo técnica, sino también económica y social.
        </Important>

        <Example>
          Analogía final: Imagina que durante 150 años te has desplazado en coche (combustibles fósiles).
          Funciona bien: lo arrancas cuando quieres, repostas en 5 minutos, tienes 800 km autonomía,
          hay gasolineras por todas partes. Ahora alguien te dice: "Debes cambiar a bicicleta eléctrica
          (renovables) para salvar el planeta". La bici es más limpia, más eficiente, más barata por km...
          <br/><br/>
          PERO: ¿Cómo haces viajes largos sin baterías? ¿Cómo subes una montaña con carga pesada?
          ¿Dónde cargas en medio de la nada? ¿Qué haces si llueve durante días?
          <br/><br/>
          La solución NO es decir "imposible, me quedo con el coche". Es construir: carriles bici,
          cargadores cada 50 km, baterías mejores, cobertizos, pronóstico meteorológico, sistema
          bici compartida. Eso requiere INVERSIÓN MASIVA en infraestructura nueva. Igual que la
          transición energética.
        </Example>

        <h4>📚 Para seguir aprendiendo:</h4>
        <ul>
          <li>🔹 Red Eléctrica de España (REE): Datos en tiempo real de generación renovable en España</li>
          <li>🔹 IRENA (International Renewable Energy Agency): Informes técnicos sobre almacenamiento y transición</li>
          <li>🔹 IEA World Energy Outlook: Proyecciones y escenarios de transición energética global</li>
          <li>🔹 NREL (National Renewable Energy Laboratory): Investigación en renovables y almacenamiento</li>
        </ul>
      </Concept>

    </TheorySection>
  );
};

export default TransporteEstabilidadTeoria;
