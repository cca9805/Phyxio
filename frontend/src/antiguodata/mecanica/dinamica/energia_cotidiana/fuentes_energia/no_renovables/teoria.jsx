import { Concept, Example, Formula, Important, TheorySection } from '../../../../../../components/TheoryV2';

export const metadata = {
  titulo: 'Energías No Renovables',
  descripcion: 'Combustibles fósiles y energía nuclear: petróleo, carbón, gas natural y nuclear',
  isTheoryOnly: true,
  educationLevel: "ESO",
  levels: ['ESO']
};

const NoRenovablesTeoria = () => {
  return (
    <TheorySection title="Energías No Renovables" emoji="⚫" nivel="ESO">

      {/* Introducción */}
      <Concept title="¿Qué son las energías no renovables?" emoji="🏭">
        <p>
          Las energías no renovables provienen de recursos fósiles o nucleares
          que se formaron hace millones de años y se agotan con su uso. Han sido la base del
          desarrollo industrial desde el siglo XIX pero son responsables del cambio climático.
        </p>

        <Important>
          ⚠️ Realidad actual: Las energías fósiles representan todavía el
           ~80% del consumo energético mundial, pero deben reducirse drásticamente
          para cumplir los Acuerdos de París (limitar calentamiento a 1.5-2°C).
        </Important>

        <h4>Características comunes:</h4>
        <ul>
          <li>❌ Finitas: Reservas limitadas que se agotan</li>
          <li>❌ Contaminantes: Emisiones de CO₂, NOx, SO₂, partículas</li>
          <li>❌ Cambio climático: Principal causa del calentamiento global</li>
          <li>✅ Alta densidad energética: Mucha energía en poco volumen</li>
          <li>✅ Gestionables: Generan cuando se necesita</li>
          <li>✅ Infraestructura madura: Tecnología conocida y desarrollada</li>
        </ul>

        <h4>Contexto de transición energética:</h4>
        <ul>
          <li>España 2023: 55% electricidad renovable, 45% fósil + nuclear</li>
          <li>Objetivo 2030: 74% renovable, cierre centrales carbón completado (2020)</li>
          <li>Objetivo 2050: 100% renovable, cero emisiones netas</li>
        </ul>
      </Concept>

      {/* Petróleo */}
      <Concept title="Petróleo" emoji="🛢️">
        <p>
          El petróleo es un combustible fósil líquido formado por la descomposición
          de organismos marinos durante millones de años bajo altas presiones y temperaturas. Es la
          fuente de energía más utilizada del mundo y base de la industria petroquímica.
        </p>

        <h4>Origen y extracción:</h4>
        <ul>
          <li>Formación: 65-200 millones de años, 2.000-5.000m profundidad</li>
          <li>Composición: Hidrocarburos (cadenas de carbono e hidrógeno)</li>
          <li>Extracción: Pozos terrestres y plataformas offshore</li>
          <li>Refinado: Destilación fraccionada → gasolina, diésel, queroseno, fuel, asfalto, plásticos</li>
        </ul>

        <h4>Usos del petróleo:</h4>
        <ul>
          <li>Transporte (65%): Gasolina, diésel, queroseno (aviación)</li>
          <li>Industria petroquímica (15%): Plásticos, fibras sintéticas, medicamentos</li>
          <li>Calefacción (10%): Gasóleo C (en desuso)</li>
          <li>Generación eléctrica (5%): Centrales térmicas fuel (residual)</li>
          <li>Otros (5%): Asfalto, lubricantes, ceras</li>
        </ul>

        <h4>Datos clave:</h4>
        <ul>
          <li>Consumo mundial: ~100 millones barriles/día (1 barril = 159 litros)</li>
          <li>Reservas probadas: ~50 años al ritmo actual</li>
          <li>Mayores productores: EE.UU., Arabia Saudí, Rusia, Canadá</li>
          <li>Precio: Muy volátil, 40-120 $/barril (2020-2023)</li>
          <li>España: 99.5% importado, 0 producción nacional</li>
        </ul>

        <h4>Ventajas y desventajas:</h4>
        <ul>
          <li>✅ Ventajas:
            <ul>
              <li>Alta densidad energética: 42 MJ/kg (vs 15 MJ/kg baterías litio)</li>
              <li>Líquido: fácil transporte y almacenamiento</li>
              <li>Infraestructura global establecida</li>
              <li>Versatilidad: combustible + materia prima industrial</li>
            </ul>
          </li>
          <li>❌ Desventajas:
            <ul>
              <li>Cambio climático: 2.3 kg CO₂ por litro gasolina quemado</li>
              <li>Contaminación local: NOx, CO, partículas</li>
              <li>Agotamiento: pico petróleo convencional ya alcanzado</li>
              <li>Conflictos geopolíticos: guerras, dependencia energética</li>
              <li>Derrames: desastres ecológicos (Prestige 2002, Deepwater 2010)</li>
              <li>Salud: carcinógenos en emisiones</li>
            </ul>
          </li>
        </ul>

        <Example>
          Impacto de 1 coche de gasolina:<br/>
          Consumo medio: 7 litros/100km<br/>
          Kilometraje anual: 15.000 km<br/>
          • Consumo anual: 1.050 litros<br/>
          • Emisiones: 2.4 toneladas CO₂/año<br/>
          • Coste combustible: 1.800€/año (1.7€/litro)<br/>
          <br/>
          Equivalente renovable:<br/>
          • Coche eléctrico: 0.6 ton CO₂/año (electricidad mix español)<br/>
          • Reducción: 75% emisiones
        </Example>

        <Important>
          Pico del petróleo: El petróleo convencional barato alcanzó su pico de
          producción ~2005-2010. La producción actual se mantiene gracias al fracking (EE.UU.),
          arenas bituminosas (Canadá) y offshore profundo, con mayor coste energético y ambiental.
        </Important>
      </Concept>

      {/* Carbón */}
      <Concept title="Carbón" emoji="⚫">
        <p>
          El carbón es una roca sedimentaria combustible formada por la
          descomposición de vegetación en ausencia de oxígeno. Fue el combustible de la Revolución
          Industrial pero es el más contaminante de todos los fósiles.
        </p>

        <h4>Tipos de carbón (por antigüedad y calidad):</h4>
        <ul>
          <li>Turba: Joven, bajo poder calorífico, 50-60% carbono</li>
          <li>Lignito: Carbón pardo, 60-70% carbono, 10-20 MJ/kg</li>
          <li>Hulla: Carbón bituminoso, 75-90% carbono, 24-35 MJ/kg (uso industrial)</li>
          <li>Antracita: Mayor calidad, 90-95% carbono, 30-35 MJ/kg (escasa)</li>
        </ul>

        <h4>Usos del carbón:</h4>
        <ul>
          <li>Generación eléctrica (60%): Centrales térmicas de carbón</li>
          <li>Siderurgia (15%): Carbón coque para producir acero</li>
          <li>Cemento (10%): Combustible hornos de clinker</li>
          <li>Calefacción (5%): Residencial e industrial (en desuso)</li>
        </ul>

        <h4>Generación eléctrica con carbón:</h4>
        <ul>
          <li>Funcionamiento: Combustión → caldera → vapor → turbina → generador</li>
          <li>Eficiencia: 35-45% (mejor tecnología supercrítica)</li>
          <li>Emisiones: 800-1.000 g CO₂/kWh (el doble que gas natural)</li>
          <li>Contaminantes: SO₂ (lluvia ácida), NOx, partículas, mercurio, cenizas radiactivas</li>
        </ul>

        <h4>Datos clave:</h4>
        <ul>
          <li>Consumo mundial: ~8.000 millones toneladas/año</li>
          <li>Reservas: ~130 años al ritmo actual (más abundante que petróleo/gas)</li>
          <li>Mayores consumidores: China (54%), India (12%), EE.UU. (7%)</li>
          <li>España: Cierre total centrales carbón en 2020 (objetivo climático)</li>
          <li>Electricidad carbón mundial: ~36% (2023), bajando</li>
        </ul>

        <h4>Ventajas y desventajas:</h4>
        <ul>
          <li>✅ Ventajas:
            <ul>
              <li>Reservas abundantes (más que petróleo/gas)</li>
              <li>Distribución geográfica amplia</li>
              <li>Bajo coste extracción (minas a cielo abierto)</li>
              <li>Tecnología simple y robusta</li>
            </ul>
          </li>
          <li>❌ Desventajas:
            <ul>
              <li>EL MÁS CONTAMINANTE: 2x emisiones CO₂ vs gas natural</li>
              <li>Lluvia ácida: SO₂ y NOx</li>
              <li>Contaminación aire: partículas PM2.5, mortalidad prematura</li>
              <li>Minería: destrucción paisaje, accidentes laborales</li>
              <li>Cenizas tóxicas: metales pesados, radiactividad natural</li>
              <li>Salud: enfermedades respiratorias, cáncer</li>
            </ul>
          </li>
        </ul>

        <Example>
          Central de carbón vs gas natural:<br/>
          Para generar 1.000 MWh:<br/>
          <br/>
          Carbón:<br/>
          • Consumo: 400 toneladas carbón<br/>
          • Emisiones: 900 ton CO₂<br/>
          • Contaminantes: 2 ton SO₂, 1 ton NOx, 30 ton cenizas<br/>
          <br/>
          Gas natural:<br/>
          • Consumo: 180.000 m³ gas<br/>
          • Emisiones: 400 ton CO₂<br/>
          • Contaminantes: mínimos (sin SO₂, bajos NOx)<br/>
          <br/>
          → Gas natural: 55% menos CO₂, sin SO₂
        </Example>

        <Important>
          Retirada del carbón: España cerró todas sus centrales de carbón en 2020,
          adelantándose al objetivo europeo de 2030. La UE planea eliminación total 2030-2035.
          Reto: China e India aún dependen fuertemente del carbón.
        </Important>
      </Concept>

      {/* Gas Natural */}
      <Concept title="Gas Natural" emoji="🔥">
        <p>
          El gas natural es una mezcla de hidrocarburos gaseosos, principalmente
          metano (CH₄), formada junto al petróleo. Es el combustible fósil más limpio y eficiente,
          clave en la transición energética como "puente" hacia las renovables.
        </p>

        <h4>Composición y origen:</h4>
        <ul>
          <li>Composición: 85-95% metano (CH₄), etano, propano, butano, CO₂, N₂</li>
          <li>Origen: Descomposición materia orgánica, 150-200 millones años</li>
          <li>Extracción: Pozos convencionales + fracking (gas de esquisto)</li>
          <li>Transporte: Gasoductos o barcos (GNL: Gas Natural Licuado a -160°C)</li>
        </ul>

        <h4>Usos del gas natural:</h4>
        <ul>
          <li>Generación eléctrica (40%): Centrales de ciclo combinado (muy eficientes)</li>
          <li>Calefacción/ACS (30%): Calderas domésticas e industriales</li>
          <li>Industria (20%): Procesos térmicos, petroquímica</li>
          <li>Transporte (5%): GNC (Gas Natural Comprimido) para buses/camiones</li>
          <li>Otros (5%): Cogeneración, materia prima hidrógeno</li>
        </ul>

        <h4>Centrales de ciclo combinado (CCGT):</h4>
        <ul>
          <li>Funcionamiento:
            <ol>
              <li>Turbina gas: combustión gas → turbina → 60% electricidad</li>
              <li>Ciclo vapor: calor residual → caldera recuperación → turbina vapor → 40% electricidad</li>
            </ol>
          </li>
          <li>Eficiencia: 55-62% (la mayor de generación térmica)</li>
          <li>Arranque rápido: 20-30 minutos (complementa renovables)</li>
          <li>Emisiones: 350-400 g CO₂/kWh (menos de la mitad que carbón)</li>
        </ul>

        <h4>Datos clave:</h4>
        <ul>
          <li>Consumo mundial: ~4.000 bcm/año (billion cubic meters)</li>
          <li>Reservas: ~50 años (convencional) + gas esquisto</li>
          <li>Mayores productores: EE.UU. (líder fracking), Rusia, Irán, Qatar</li>
          <li>España 2023: ~30% electricidad de gas natural</li>
          <li>Precio: Variable, 20-80 €/MWh (crisis 2022: 200 €/MWh)</li>
        </ul>

        <h4>Ventajas y desventajas:</h4>
        <ul>
          <li>✅ Ventajas:
            <ul>
              <li>Combustible fósil MÁS LIMPIO: 50% menos CO₂ que carbón</li>
              <li>Sin SO₂, bajas emisiones NOx y partículas</li>
              <li>Alta eficiencia (ciclo combinado 60%)</li>
              <li>Flexible: respaldo rápido para renovables</li>
              <li>Infraestructura existente (gasoductos)</li>
              <li>Usos múltiples: electricidad, calor, transporte</li>
            </ul>
          </li>
          <li>❌ Desventajas:
            <ul>
              <li>Sigue siendo fósil: emite CO₂ (incompatible 2050)</li>
              <li>Fugas metano: potente gas efecto invernadero (28x CO₂ a 100 años)</li>
              <li>Dependencia geopolítica: Guerra Ucrania → crisis gas Europa</li>
              <li>Fracking: riesgo contaminación acuíferos, sismicidad inducida</li>
              <li>Reservas finitas: 50-60 años</li>
            </ul>
          </li>
        </ul>

        <Example>
          Calefacción doméstica con gas:<br/>
          Vivienda 100 m², clima moderado:<br/>
          • Consumo anual: 8.000-12.000 kWh térmicos<br/>
          • Gas consumido: ~1.000 m³<br/>
          • Coste: 600-900 €/año (0.06-0.08 €/kWh)<br/>
          • Emisiones: 2 ton CO₂/año<br/>
          <br/>
          Alternativa renovable:<br/>
          • Bomba calor aerotermia: 400-600 €/año, 0.5 ton CO₂<br/>
          • Reducción: 75% emisiones, 30% coste
        </Example>

        <Important>
          Rol en transición energética: El gas natural es el "combustible puente":
          sustituye carbón (50% menos CO₂) y complementa renovables intermitentes con centrales
          flexibles. Pero debe eliminarse gradualmente 2040-2050, sustituido por hidrógeno verde
          o baterías para cumplir neutralidad climática.
        </Important>
      </Concept>

      {/* Energía Nuclear */}
      <Concept title="Energía Nuclear" emoji="☢️">
        <p>
          La energía nuclear se obtiene de la fisión (ruptura) de átomos de uranio,
          liberando enormes cantidades de energía. Es una fuente de generación eléctrica sin emisiones
          de CO₂ pero genera residuos radiactivos y tiene riesgos asociados.
        </p>

        <h4>Funcionamiento de una central nuclear:</h4>
        <ol>
          <li>Reactor: Barras combustible uranio enriquecido (U-235) en agua</li>
          <li>Fisión nuclear: Neutrones rompen átomos U-235 → 2 fragmentos + 2-3 neutrones + CALOR</li>
          <li>Reacción en cadena controlada: Barras de control (boro/cadmio) absorben neutrones</li>
          <li>Intercambiador: Calor → vapor agua a presión (300°C, 150 bar)</li>
          <li>Turbina: Vapor → turbina → generador → electricidad</li>
          <li>Condensador: Vapor se enfría y condensa (torres refrigeración o agua mar)</li>
        </ol>

        <h4>Tipos de reactores:</h4>
        <ul>
          <li>PWR (Agua Presurizada): 60% reactores mundo, más común España (6/7)</li>
          <li>BWR (Agua en Ebullición): 20% mundial, 1 reactor España (Santa María Garoña, cerrado)</li>
          <li>CANDU (Agua Pesada): Canadá, usa uranio natural</li>
          <li>Futuros Generación IV: Más seguros, menos residuos (SMR: Small Modular Reactors)</li>
        </ul>

        <h4>Centrales nucleares en España:</h4>
        <table style={{width: '100%'}}>
          <thead>
            <tr>
              <th>Central</th>
              <th>Ubicación</th>
              <th>Potencia (MW)</th>
              <th>Reactores</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Almaraz</td>
              <td>Cáceres</td>
              <td>2.000</td>
              <td>2</td>
              <td>Operativa</td>
            </tr>
            <tr>
              <td>Ascó</td>
              <td>Tarragona</td>
              <td>2.000</td>
              <td>2</td>
              <td>Operativa</td>
            </tr>
            <tr>
              <td>Cofrentes</td>
              <td>Valencia</td>
              <td>1.100</td>
              <td>1</td>
              <td>Operativa</td>
            </tr>
            <tr>
              <td>Vandellós II</td>
              <td>Tarragona</td>
              <td>1.100</td>
              <td>1</td>
              <td>Operativa</td>
            </tr>
            <tr>
              <td>Trillo</td>
              <td>Guadalajara</td>
              <td>1.000</td>
              <td>1</td>
              <td>Operativa</td>
            </tr>
            <tr>
              <td>Garoña</td>
              <td>Burgos</td>
              <td>466</td>
              <td>1</td>
              <td>Cerrada 2012</td>
            </tr>
            <tr>
              <td>Vandellós I</td>
              <td>Tarragona</td>
              <td>500</td>
              <td>1</td>
              <td>Cerrada 1990</td>
            </tr>
          </tbody>
        </table>

        <h4>Datos de producción nuclear en España:</h4>
        <ul>
          <li>Potencia instalada: 7.1 GW (7 reactores operativos)</li>
          <li>Producción 2023: ~54.000 GWh</li>
          <li>Porcentaje electricidad: ~20% (2ª fuente tras eólica)</li>
          <li>Factor capacidad: 85-90% (generación continua)</li>
          <li>Empleo: ~9.000 empleos directos</li>
          <li>Futuro: Cierre progresivo 2027-2035 según vida útil</li>
        </ul>

        <h4>Comparación mundial:</h4>
        <ul>
          <li>Potencia mundial: ~390 GW, 440 reactores, 32 países</li>
          <li>Líderes por producción: EE.UU. (95 GW), China (55 GW), Francia (61 GW)</li>
          <li>Mayor dependencia: Francia (70% electricidad nuclear), Eslovaquia (53%)</li>
          <li>Tendencia: Occidente reduce, Asia (China, India) construye</li>
        </ul>

        <h4>Combustible y residuos:</h4>
        <ul>
          <li>Uranio natural: Minado en Kazajistán, Canadá, Australia</li>
          <li>Enriquecimiento: U-235 de 0.7% natural a 3-5% para reactores</li>
          <li>Consumo: 200 toneladas U/año por reactor 1.000 MW</li>
          <li>Eficiencia: 1 kg uranio = energía 1.000 toneladas carbón</li>
          <li>Residuos alta actividad: 30 ton/año por reactor (vitrificados)</li>
          <li>Almacenamiento: Piscinas temporales + ATC (Almacén Temporal Centralizado, pendiente)</li>
          <li>Vida media: Algunos isótopos 10.000-100.000 años (requiere almacén geológico profundo)</li>
        </ul>

        <h4>Costes de la energía nuclear:</h4>
        <ul>
          <li>Construcción reactor: 6.000-9.000 millones € (1.000 MW)</li>
          <li>Tiempo construcción: 10-15 años (retrasos frecuentes)</li>
          <li>Coste electricidad: 0.10-0.15 €/kWh (con costes construcción amortizados)</li>
          <li>Desmantelamiento: 1.000-2.000 millones €, 30-40 años</li>
          <li>Gestión residuos: Coste largo plazo incierto (10.000-100.000 años)</li>
        </ul>

        <h4>Ventajas y desventajas:</h4>
        <ul>
          <li>✅ Ventajas:
            <ul>
              <li>Cero emisiones CO₂ operativas</li>
              <li>Alta densidad energética: 1 kg uranio = 1.000 ton carbón</li>
              <li>Generación continua 24/7 (energía base)</li>
              <li>Independencia combustibles fósiles importados</li>
              <li>Pequeña huella terrestre: 1 GW = 1-2 km² vs 200 km² solar</li>
              <li>Factor capacidad muy alto: 85-90%</li>
            </ul>
          </li>
          <li>❌ Desventajas:
            <ul>
              <li>Residuos radiactivos: Peligrosos 10.000-100.000 años, sin solución definitiva</li>
              <li>Riesgo accidentes: Chernóbil (1986), Fukushima (2011) - consecuencias devastadoras</li>
              <li>Proliferación nuclear: Tecnología dual civil/militar</li>
              <li>Costes altísimos: 6.000-9.000M€ construcción, desmantelamiento complejo</li>
              <li>Tiempos largos: 10-15 años construir vs 1-2 años renovables</li>
              <li>No renovable: Uranio finito (80-130 años reservas)</li>
              <li>Vulnerable: Sequías (refrigeración), terremotos, terrorismo</li>
              <li>Emisiones ciclo vida: minería, construcción, desmantelamiento</li>
            </ul>
          </li>
        </ul>

        <h4>Seguridad nuclear:</h4>
        <ul>
          <li>Sistemas redundantes: Múltiples barreras de contención</li>
          <li>Control continuo: Regulador nuclear (CSN en España)</li>
          <li>Mejoras post-Fukushima: Protección reforzada vs eventos extremos</li>
          <li>Probabilidad accidente grave: 1 en 10.000-100.000 reactores-año (Generación III)</li>
          <li>Mortalidad comparada: Nuclear ~0.01 muertes/TWh vs carbón 25 muertes/TWh</li>
        </ul>

        <Example>
          Reactor de 1.000 MW (típico España):<br/>
          • Producción anual: 7.500 GWh (factor capacidad 85%)<br/>
          • Hogares abastecidos: ~2 millones<br/>
          • Uranio consumido: 200 toneladas/año<br/>
          • Residuos alta actividad: 30 ton/año<br/>
          • Emisiones CO₂ evitadas: 6 millones ton/año (vs carbón)<br/>
          • Personal: ~500-700 trabajadores<br/>
          • Coste operación: ~150-200 millones €/año<br/>
          • Vida útil: 40-60 años (con extensiones)
        </Example>

        <Important>
          Debate nuclear en transición energética:<br/>
          A favor: Cero emisiones, complementa renovables intermitentes, energía base estable.<br/>
          En contra: Residuos peligrosos 100.000 años, riesgo accidentes, lenta construcción, costosa
          (renovables + baterías más rápidas y baratas).<br/>
          <br/>
          España: Cierre progresivo planificado 2027-2035. No nuevos reactores.<br/>
          Tendencia UE: División - Francia apuesta, Alemania cierra, otros indecisos.
        </Important>
      </Concept>

      {/* Comparación Final */}
      <Concept title="Resumen: Comparación de No Renovables" emoji="📊">
        <table className="non-renewables-comparison" style={{width: '100%'}}>
          <thead>
            <tr>
              <th>Energía</th>
              <th>Emisiones CO₂ (g/kWh)</th>
              <th>Reservas</th>
              <th>Coste (€/kWh)</th>
              <th>Futuro en España</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>🛢️ Petróleo</td>
              <td>650-750</td>
              <td>~50 años</td>
              <td>0.12-0.18</td>
              <td>Reducción transporte</td>
            </tr>
            <tr>
              <td>⚫ Carbón</td>
              <td>800-1.000</td>
              <td>~130 años</td>
              <td>0.05-0.08</td>
              <td>Eliminado (2020)</td>
            </tr>
            <tr>
              <td>🔥 Gas Natural</td>
              <td>350-450</td>
              <td>~50 años</td>
              <td>0.06-0.10</td>
              <td>Puente 2030-2040</td>
            </tr>
            <tr>
              <td>☢️ Nuclear</td>
              <td>12-15 (ciclo vida)</td>
              <td>80-130 años</td>
              <td>0.10-0.15</td>
              <td>Cierre 2027-2035</td>
            </tr>
          </tbody>
        </table>

        <h4>Contexto de transición energética:</h4>
        <ul>
          <li>2023: Fósiles ~80% energía mundial, 55% electricidad</li>
          <li>Objetivo 2050: Cero emisiones netas (Acuerdos París)</li>
          <li>España 2023:
            <ul>
              <li>✅ 55% electricidad renovable</li>
              <li>30% gas natural (complemento renovables)</li>
              <li>20% nuclear (cierre progresivo)</li>
              <li>0% carbón (cerrado 2020)</li>
              <li>&lt;1% petróleo (residual)</li>
            </ul>
          </li>
        </ul>

        <Important>
          🎯 Estrategia 2030-2050:<br/>
          1. Eliminar carbón (España: ✅ completado 2020)<br/>
          2. Reducir petróleo: Electrificación transporte (coches eléctricos, trenes)<br/>
          3. Reducir gas natural: Sustituir por renovables + baterías/hidrógeno verde<br/>
          4. Nuclear: Cierre progresivo o mantenimiento según país<br/>
          5. Objetivo: 100% renovables con almacenamiento y gestión demanda inteligente
        </Important>
      </Concept>

    </TheorySection>
  );
};

export default NoRenovablesTeoria;
