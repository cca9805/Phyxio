import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as gases_realesDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Gases Reales",
  descripcion: "Desviaciones del comportamiento ideal: Van der Waals, factor compresibilidad, fuerzas intermoleculares",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO'],
  isTheoryOnly: false
};

const GasesRealesTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Desviaciones del Comportamiento Ideal">
        <Concept title="¿Por qué los Gases Reales se Desvían?">
          <p>
            Los gases reales presentan desviaciones del modelo ideal debido a dos factores fundamentales que el modelo de gas ideal ignora:
          </p>
          
          <ul>
            <li>Fuerzas intermoleculares: Las moléculas ejercen fuerzas atractivas (Van der Waals, dipolo-dipolo) y repulsivas (repulsión electrónica) entre sí</li>
            <li>Volumen molecular: Las moléculas ocupan un volumen propio no despreciable, especialmente a altas presiones</li>
            <li>Colisiones inelásticas: Parte de la energía cinética se convierte en energía vibracional o rotacional</li>
            <li>Interacciones cuánticas: A temperaturas muy bajas, efectos cuánticos se vuelven relevantes</li>
          </ul>
          
          <p>Estas desviaciones son más pronunciadas a:</p>
          <ul>
            <li>Altas presiones: Las moléculas están más cerca, aumentando interacciones y efecto del volumen</li>
            <li>Bajas temperaturas: La energía cinética es menor, las fuerzas atractivas dominan</li>
            <li>Cerca del punto crítico: Transición gas-líquido, comportamiento altamente no ideal</li>
          </ul>
        </Concept>

        <Concept title="Condiciones de No Idealidad">
          <p>Indicadores de comportamiento no ideal:</p>
          <ul>
            <li>Presión superior 10atm: Volumen molecular significativo</li>
            <li>Temperatura inferior 2×T_crítica: Fuerzas atractivas importantes</li>
            <li>Gases polares: H₂O, NH₃, HCl con dipolos permanentes</li>
            <li>Cerca de condensación: Factor compresibilidad Z muy diferente de 1</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuación de Van der Waals">
        <Concept title="Correcciones Fundamentales">
          <p>
            Johannes van der Waals desarrolló en 1873 una ecuación que corrige el comportamiento ideal introduciendo dos parámetros específicos para cada gas:
          </p>

          <Formula
            expression={String.raw`\left(P + \frac{an^2}{V^2}\right)(V - nb) = nRT`}
            description="Ecuación de estado para gases reales"
            calculatorId="gases_reales-grupo-1"
            definitions={gases_realesDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Presión corregida", expression: String.raw`P = \frac{nRT}{V - nb} - \frac{an^2}{V^2}` },
              { description: "Factor compresibilidad", expression: String.raw`Z = \frac{PV}{nRT}` }
            ]}
          />

          <p>Significado de los parámetros:</p>
          
          <Important>
            <p>Parámetro a (atracción intermolecular):</p>
            <ul>
              <li>Corrige la presión: P_real = P_ideal - an²/V²</li>
              <li>Unidades: Pa·m⁶/mol² o atm·L²/mol²</li>
              <li>Valores típicos: H₂ (a=0.244), N₂ (a=1.39), CO₂ (a=3.64), H₂O (a=5.46)</li>
              <li>Mayor a indica fuerzas atractivas más fuertes</li>
            </ul>
          </Important>

          <Important>
            <p>Parámetro b (volumen molecular):</p>
            <ul>
              <li>Corrige el volumen: V_disponible = V_total - nb</li>
              <li>Unidades: m³/mol o L/mol</li>
              <li>Valores típicos: H₂ (b=0.0266), N₂ (b=0.0391), CO₂ (b=0.0427), H₂O (b=0.0305)</li>
              <li>Mayor b indica moléculas más grandes</li>
            </ul>
          </Important>
        </Concept>

        <Concept title="Interpretación Física">
          <p>Término de presión an²/V²:</p>
          <ul>
            <li>Representa reducción de presión por atracción intermolecular</li>
            <li>Proporcional al cuadrado de la densidad n/V</li>
            <li>Efecto mayor a altas densidades (bajas temperaturas, altas presiones)</li>
          </ul>

          <p>Término de volumen nb:</p>
          <ul>
            <li>Volumen excluido por las propias moléculas</li>
            <li>4 veces el volumen real de las moléculas (volumen no accesible)</li>
            <li>Importante a altas presiones cuando moléculas están comprimidas</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Factor de Compresibilidad">
        <Concept title="Definición y Significado">
          <p>
            El factor de compresibilidad Z es una medida adimensional de la desviación del comportamiento ideal:
          </p>

          <Formula
            expression={String.raw`Z = \frac{PV}{nRT}`}
            description="Factor de compresibilidad"
            calculatorId="gases_reales-grupo-1"
            definitions={gases_realesDefinitions}
            exercises={exercises}
          />

          <p>Interpretación de valores:</p>
          <ul>
            <li>Z = 1: Comportamiento ideal perfecto (gas ideal)</li>
            <li>Z superior 1: Gas más compresible que ideal, repulsión domina (alta presión)</li>
            <li>Z inferior 1: Gas menos compresible que ideal, atracción domina (baja temperatura)</li>
          </ul>
        </Concept>

        <Concept title="Diagrama de Compresibilidad">
          <p>Gráfica Z vs presión reducida P_r = P/P_c muestra comportamiento universal:</p>
          <ul>
            <li>Bajas presiones P inferior 1atm: Z ≈ 1 para todos los gases</li>
            <li>Presiones intermedias 1-10atm: Z inferior 1, mínimo alrededor P_r ≈ 0.5</li>
            <li>Altas presiones superior 10atm: Z superior 1, aumento lineal</li>
            <li>Alta temperatura: Curvas Z más cerca de 1</li>
          </ul>
        </Concept>

        <Concept title="Principio de Estados Correspondientes">
          <p>
            Gases a mismas condiciones reducidas (P_r = P/P_c, T_r = T/T_c) tienen factor Z similar, independiente de su naturaleza química.
          </p>
          <p>Permite predecir comportamiento de gases usando gráficas generalizadas de compresibilidad.</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos Prácticos">
        <Example 
          title="Ejemplo 1: Comparación Ideal vs Real"
          problem="Calcula el volumen ocupado por 10 moles de CO₂ a 50atm y 300K usando: (a) gas ideal, (b) Van der Waals. Datos: a=3.64 atm·L²/mol², b=0.0427 L/mol"
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>n = 10 mol</li>
                <li>P = 50 atm</li>
                <li>T = 300 K</li>
                <li>R = 0.08206 L·atm/(mol·K)</li>
                <li>a = 3.64 atm·L²/mol²</li>
                <li>b = 0.0427 L/mol</li>
              </ul>
              
              <p>(a) Gas ideal: V = nRT/P</p>
              <p>V = (10 × 0.08206 × 300) / 50 = 4.92 L</p>
              
              <p>(b) Van der Waals: (P + an²/V²)(V - nb) = nRT</p>
              <p>Iteración: Estimación inicial V ≈ 4.92 L</p>
              <p>P_corr = 50 + (3.64 × 10²) / 4.92² = 50 + 15.0 = 65.0 atm</p>
              <p>V = nRT/P_corr + nb = (10 × 0.08206 × 300)/65.0 + 10 × 0.0427</p>
              <p>V = 3.79 + 0.43 = 4.22 L</p>
              
              <p>Diferencia: (4.92 - 4.22)/4.22 × 100% = 16.6% error si usamos gas ideal</p>
            </div>
          }
        />

        <Example 
          title="Ejemplo 2: Factor de Compresibilidad"
          problem="Un tanque de 100L contiene 50mol de N₂ a 300K. La presión medida es 120atm. Calcula Z y compara con ideal."
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>V = 100 L</li>
                <li>n = 50 mol</li>
                <li>T = 300 K</li>
                <li>P_real = 120 atm</li>
              </ul>
              
              <p>Presión ideal: P_ideal = nRT/V</p>
              <p>P_ideal = (50 × 0.08206 × 300) / 100 = 12.31 atm</p>
              
              <p>Factor Z: Z = P_real × V / (n × R × T)</p>
              <p>Z = 120 × 100 / (50 × 0.08206 × 300) = 12000 / 1230.9 = 9.75</p>
              
              <p>Z = 9.75 superior 1: Comportamiento altamente no ideal, repulsión domina</p>
              <p>Presión real 9.75 veces mayor que predicción ideal</p>
            </div>
          }
        />
      </TheorySection>

      <TheorySection title="Aplicaciones de Gases Reales">
        <Concept title="Industria y Tecnología">
          <ul>
            <li>Licuefacción gases: N₂, O₂, GNL requieren ecuaciones reales para diseño procesos criogénicos</li>
            <li>Recipientes presión: Cálculo espesor paredes tanques almacenamiento gas natural 200bar</li>
            <li>Refrigeración: Ciclo compresión vapor R-134a comportamiento no ideal condensador evaporador</li>
            <li>Petroquímica: Separación destilación hidrocarburos ecuación Peng-Robinson predicción equilibrio</li>
            <li>Seguridad: Estimación presión explosión gases tóxicos inflamables confinados</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2><span className="emoji-icon">🔧</span> Aplicaciones en la Vida Real</h2>
        
        <div className="theory-subsection">
          <h3>Licuefacción nitrógeno Linde ciclo compresión 200bar enfriamiento 100K expansión Joule-Thomson -196°C almacenamiento criogenia industrial</h3>
          <p>Licuefacción nitrógeno proceso industrial Linde ciclo compresión gas atmosférico 200bar=20MPa compresor multietapa refrigeración intercooler temperatura 100K intercambiador contracorriente válvula expansión Joule-Thomson temperatura inversión N₂ 621K efectivo temperatura ambiente enfriamiento -196°C=77K ebullición presión atmosférica ecuación Van der Waals predicción comportamiento alta presión parámetros a=1.39atm·L²/mol² b=0.0391L/mol factor compresibilidad Z=0.03 líquido densidad 808kg/m³ almacenamiento tanque criogénico vacío aislamiento multicapa pérdidas evaporación 1%/día aplicación industria siderurgia atmósfera inerte electrónica semiconductor refrigeración conservación biológica criobiología.</p>
        </div>

        <div className="theory-subsection">
          <h3>GNL gas natural licuado metano -162°C 600veces compresión volumen transporte marítimo buques tanque membrana GTT regasificación</h3>
          <p>Gas natural licuado GNL metano CH₄ 95% etano propano trazas licuefacción -162°C=111K presión atmosférica reducción volumen 600veces transporte eficiente marítimo buques metaneros Q-Flex 266000m³ tanque membrana acero inoxidable GTT Mark III aislamiento perlita lana vidrio evaporación 0.1%/día uso propulsión motor dual combustible regasificación terminal recepción vaporizador agua mar calentamiento 8°C presión gasoducto 80bar ecuación estado Peng-Robinson cálculo propiedades punto crítico metano 190.6K 46bar comportamiento no ideal alta presión aplicación energía electricidad calefacción industria petroquímica transporte limpio emisiones CO₂ menor carbón petróleo.</p>
        </div>

        <div className="theory-subsection">
          <h3>Refrigerante R-134a tetrafluoroetano ciclo compresión vapor presión 1-10bar temperatura -30°C+60°C ecuación estado diseño compresor</h3>
          <p>Refrigerante R-134a tetrafluoroetano CF₃CH₂F sustituto R-12 CFC prohibido Protocolo Montreal ciclo compresión vapor evaporador -10°C presión 2bar absorción calor vaporización condensador 40°C presión 10bar rechazo calor licuefacción compresor trabajo aumento presión temperatura válvula expansión reducción comportamiento no ideal ecuación Peng-Robinson parámetros críticos T_c=374K P_c=40.6bar factor acéntrico ω=0.327 cálculo entalpía entropía diseño compresor rendimiento isentrópico 75% potencia 1.5kW COP coeficiente rendimiento 3.2 aplicación aire acondicionado doméstico automóvil refrigeración comercial bomba calor propiedades GWP potencial calentamiento global 1430 reemplazo futuro HFO-1234yf GWP=4 menor impacto ambiental.</p>
        </div>

        <div className="theory-subsection">
          <h3>Tanque almacenamiento gas natural 200bar acero aleado 15CrMo espesor pared cálculo presión diseño factor seguridad 3 norma ASME</h3>
          <p>Tanque almacenamiento gas natural vehículo CNG presión servicio 200bar=20MPa acero aleado cromo-molibdeno 15CrMo tensión fluencia 450MPa cilindro diámetro 400mm longitud 1500mm volumen 180L espesor pared cálculo ecuación Barlow σ=PD/(2t) factor seguridad 3 tensión admisible 150MPa espesor mínimo t=PD/(2σ)=20×0.4/(2×150)=26.7mm diseño 30mm incluye corrosión tolerancia fabricación normativa ASME Section VIII válvula seguridad alivio presión 220bar ruptura disco 240bar inspección periódica ultrasonido emisión acústica prueba hidrostática 300bar 5años cantidad gas almacenado ecuación Van der Waals n=500mol metano 8kg autonomía vehículo 400km aplicación transporte público autobús taxi flota distribución urbana.</p>
        </div>

        <div className="theory-subsection">
          <h3>CO₂ supercrítico extracción cafeína café presión 300bar temperatura 50°C solvente ecológico selectivo separación recuperación reutilización</h3>
          <p>Dióxido carbono supercrítico fluido presión 300bar temperatura 50°C=323K superior punto crítico CO₂ T_c=304K P_c=73.8bar propiedades intermedias gas líquido densidad 600kg/m³ viscosidad baja difusividad alta poder solvente ajustable presión temperatura extracción cafeína café verde selectiva sin residuos tóxicos proceso industrial carga extractor 1000kg café 12horas circulación CO₂ 50kg/h separador reducción presión 50bar temperatura 80°C precipitación cafeína recuperación CO₂ recirculación rendimiento 97% pureza cafeína 99% aplicación industria alimentaria descafeinado farmacéutica principios activos cosméticos aceites esenciales perfumería lúpulo cerveza ventaja no inflamable no tóxico GRAS regulación FDA alternativa solventes orgánicos hexano diclorometano.</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2><span className="emoji-icon">📜</span> Contexto Histórico</h2>
        
        <div className="theory-subsection">
          <h3>1873 Johannes van der Waals tesis doctoral ecuación estado gases reales corrección fuerzas intermoleculares volumen molecular Nobel Física 1910</h3>
          <p>Johannes Diderik van der Waals físico holandés 1873 tesis doctoral Leiden Over de Continuiteit van den Gas- en Vloeistoftoestand continuidad estado gaseoso líquido ecuación estado gases reales correcciones gas ideal parámetro a fuerzas atracción intermoleculares b volumen excluido moléculas explicación licuefacción gases isotermas críticas punto crítico temperatura presión volumen críticos transición fase continua predicción propiedades sustancias puras mezclas aplicación termodinámica ingeniería química reconocimiento Premio Nobel Física 1910 ecuación fundamental bases teóricas fuerzas Van der Waals interacciones débiles polarizabilidad moléculas dipolo inducido enlace hidrógeno.</p>
        </div>

        <div className="theory-subsection">
          <h3>1869 Thomas Andrews descubrimiento punto crítico CO₂ experimentos isotermas presión-volumen temperatura 31°C 73atm transición continua gas-líquido</h3>
          <p>Thomas Andrews químico físico irlandés Belfast 1869 experimentos isotermas dióxido carbono tubos vidrio sellados presión mercurio temperatura controlada baño agua observación comportamiento fase temperatura inferior 31°C compresión condensación líquido menisco interfaz gas-líquido visible temperatura 31°C=304K presión 73atm=7.4MPa menisco desaparece transición continua fluido supercrítico homogéneo punto crítico concepto fundamental termodinámica sustancia pura temperatura crítica superior imposible licuefacción compresión isoterma aplicación determinación constantes críticas tabla periódica gases permanentes H₂ He N₂ O₂ temperatura crítica inferior ambiente refrigeración necesaria licuefacción.</p>
        </div>

        <div className="theory-subsection">
          <h3>1901 Heike Kamerlingh Onnes licuefacción hidrógeno 20K 1908 helio 4K cascada refrigeración criogenia pionera laboratorio Leiden</h3>
          <p>Heike Kamerlingh Onnes físico holandés Leiden pionero criogenia licuefacción gases permanentes cascada refrigeración etapas sucesivas 1901 hidrógeno líquido 20K punto ebullición 1908 helio líquido 4.2K récord temperatura mínima época proceso Linde modificado expansión Joule-Thomson pre-enfriamiento nitrógeno líquido 77K hidrógeno 20K comprensión ecuaciones estado gases reales alta presión baja temperatura medición desviaciones gas ideal determinación constantes Van der Waals verificación experimental teoría aplicación desarrollo superconductividad 1911 descubrimiento mercurio 4K Premio Nobel Física 1913 criogenia.</p>
        </div>

        <div className="theory-subsection">
          <h3>1949 Otto Redlich Joseph Kwong ecuación estado mejora Van der Waals dependencia temperatura parámetro atracción aplicación petróleo gas</h3>
          <p>Otto Redlich Joseph Kwong químicos 1949 ecuación estado modificación Van der Waals incorporación dependencia temperatura parámetro atracción a(T)=a₀/T^(1/2) mejora predicción propiedades termodinámicas gases líquidos alta presión amplio rango temperatura forma P=RT/(V-b)-a/(T^(1/2)V(V+b)) dos parámetros ajuste T_c P_c sustancia aplicación industria petróleo gas natural refinación destilación separación hidrocarburos equilibrio vapor-líquido cálculo fugacidad coeficiente actividad posterior Soave 1972 Redlich-Kwong-Soave RKS mejora factor acéntrico Pitzer precisión mayor compuestos polares no polares uso amplio simuladores procesos Aspen HYSYS Chemcad ingeniería química petroquímica.</p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span className="emoji-icon">💡</span> Curiosidades y Anécdotas</h2>
        
        <div className="theory-subsection">
          <h3>Punto crítico agua 374°C 221bar fluido supercrítico aplicación oxidación húmeda destrucción residuos tóxicos PCB dioxinas eficiencia 99.99%</h3>
          <p>Agua supercrítica temperatura superior 374°C=647K presión superior 221bar=22.1MPa propiedades únicas densidad 322kg/m³ viscosidad 10veces menor líquido difusividad alta poder solvente gases orgánicos iones sales miscibilidad completa oxígeno oxidación húmeda supercrítica SCWO destrucción residuos tóxicos PCB policlorobifenilos dioxinas pesticidas COV compuestos orgánicos volátiles reacción rápida completa temperatura 600°C tiempo residencia 60segundos eficiencia destrucción 99.99% productos finales CO₂ H₂O HCl sales inorgánicas precipitadas separación fácil ventaja no emisiones atmosféricas incineración aplicación militar armas químicas industria farmacéutica desechos hospitalarios tratamiento lodos depuradora investigación reactores continuos corrosión materiales.</p>
        </div>

        <div className="theory-subsection">
          <h3>Inversión Joule-Thomson temperatura gases enfriamiento expansión hidrógeno helio calentamiento temperatura inversión H₂ 200K He 40K criogenia</h3>
          <p>Efecto Joule-Thomson expansión gas válvula porosa proceso isentálpico ΔH=0 temperatura cambia coeficiente μ_JT=(∂T/∂P)_H positivo mayoría gases temperatura ambiente enfriamiento licuefacción Linde negativo hidrógeno helio temperatura inversión H₂ 200K He 40K calentamiento expansión temperatura ambiente pre-enfriamiento necesario nitrógeno líquido 77K hidrógeno 20K alcanzar región μ_JT positivo licuefacción efectiva explicación Van der Waals fuerzas atracción dominan baja temperatura enfriamiento repulsión alta temperatura calentamiento aplicación criogenia gases comprimidos expansión rápida aerosol spray refrigeración instantánea curiosidad respiración montaña altitud expansión pulmonar aire enfriamiento percepción frescura.</p>
        </div>

        <div className="theory-subsection">
          <h3>Diagrama PVT superficie tridimensional punto triple coexistencia tres fases sólido líquido vapor agua 0.01°C 611Pa punto crítico final</h3>
          <p>Diagrama presión-volumen-temperatura PVT superficie tridimensional completa comportamiento sustancia pura regiones fase sólida líquida vapor líneas coexistencia dos fases equilibrio punto triple coexistencia simultánea tres fases agua 0.01°C=273.16K 611Pa=0.006atm temperatura definición escala Kelvin único punto T P específicos hielo agua vapor equilibrio punto crítico final línea coexistencia líquido-vapor temperatura 374°C presión 221bar superior fluido supercrítico transición continua proyección 2D diagrama fase familiar presión-temperatura líneas sublimación fusión vaporización punto triple crítico aplicación metalurgia diagrama hierro-carbono acero fases austenita ferrita cementita geología magma cristalización minerales ingeniería materiales tratamientos térmicos.</p>
        </div>

        <div className="theory-subsection">
          <h3>Ley estados correspondientes principio generalización Van der Waals gases mismas condiciones reducidas P_r T_r factor Z similar independiente naturaleza</h3>
          <p>Principio estados correspondientes generalización Van der Waals 1880 gases diferentes mismas condiciones reducidas presión P_r=P/P_c temperatura T_r=T/T_c volumen V_r=V/V_c comportamiento similar factor compresibilidad Z aproximadamente igual independiente naturaleza química gas constantes críticas específicas sustancia gráfica generalizada compresibilidad Nelson-Obert dos parámetros P_r T_r predicción Z desviación gas ideal corrección Pitzer factor acéntrico ω tercer parámetro forma molecular esfericidad gases nobles ω=0 hidrocarburos cadena larga ω mayor 0.3 aplicación ingeniería estimación propiedades termodinámicas fugacidad entalpía entropía sin datos experimentales específicos uso tablas gráficas generalizadas simuladores procesos principio fundamental termodinámica similaridad molecular.</p>
        </div>
      </div>

      <div className="theory-summary-section">
        <h2><span className="emoji-icon">📋</span> Resumen de Conceptos Clave</h2>
        
        <ul className="key-points-list">
          <li>Gases reales: desviaciones modelo ideal fuerzas intermoleculares volumen molecular colisiones inelásticas pronunciadas altas presiones bajas temperaturas cerca punto crítico</li>
          <li>Ecuación Van der Waals: (P+an²/V²)(V-nb)=nRT corrección presión parámetro a atracción intermolecular volumen parámetro b exclusión molecular valores específicos sustancia</li>
          <li>Factor compresibilidad Z=PV/(nRT): medida desviación idealidad Z=1 ideal Z superior 1 repulsión domina Z inferior 1 atracción domina gráfica universal presión reducida</li>
          <li>Punto crítico: temperatura presión volumen críticos transición continua gas-líquido fluido supercrítico propiedades intermedias aplicación extracción solvente oxidación residuos</li>
          <li>Principio estados correspondientes: gases mismas condiciones reducidas P_r T_r comportamiento similar Z independiente naturaleza gráficas generalizadas predicción propiedades</li>
          <li>Aplicaciones: licuefacción gases criogenia GNL transporte refrigerantes ciclo compresión recipientes presión tanques almacenamiento CO₂ supercrítico extracción industria petroquímica</li>
        </ul>
      </div>
    </>
  );
};

export default GasesRealesTheory;