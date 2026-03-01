import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as ecuacionesDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Ecuaciones de Estado",
  descripcion: "Gas ideal, Van der Waals, Virial, Redlich-Kwong, Peng-Robinson, punto crítico",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO'],
  isTheoryOnly: true
};

const EcuacionesEstadoTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a Ecuaciones de Estado">
        <Concept title="¿Qué es una Ecuación de Estado?">
          <p>
            Una ecuación de estado es una relación matemática fundamental que describe el comportamiento de un sistema termodinámico relacionando variables de estado como presión P, volumen V, temperatura T y cantidad de sustancia n. Estas ecuaciones son herramientas esenciales para predecir propiedades termodinámicas de gases, líquidos y fluidos supercríticos en ingeniería química, petroquímica, refrigeración y procesos industriales.
          </p>

          <p>
            Función principal: Relacionar variables PVT para calcular propiedades como densidad, fugacidad, entalpía, entropía necesarias en diseño de equipos, simulación de procesos y optimización operacional.
          </p>
        </Concept>

        <Concept title="Clasificación de Ecuaciones">
          <p>Según complejidad y precisión:</p>
          <ul>
            <li>Gas ideal: PV=nRT, máxima simplicidad, válida condiciones limitadas (P inferior 10atm, T alta)</li>
            <li>Cúbicas: Van der Waals, Redlich-Kwong, Peng-Robinson, dos parámetros, balance precisión-simplicidad</li>
            <li>Multiconstantes: Beattie-Bridgeman (5 parámetros), Benedict-Webb-Rubin (8 parámetros), alta precisión</li>
            <li>Virial: Expansión serie, base teórica mecánica estadística, coeficientes dependientes temperatura</li>
            <li>Empíricas: Ajuste datos experimentales, precisión alta rango específico, sin base teórica</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuación de Gas Ideal">
        <Formula 
          expression={String.raw`PV = nRT`}
          description="Ecuación fundamental gases ideales"
          definitions={ecuacionesDefinitions}
          complementary={[
            { description: "Forma densidad", expression: String.raw`P = \rho \frac{RT}{M}` },
            { description: "Forma molecular", expression: String.raw`P = \frac{NkT}{V}` },
            { description: "Factor compresibilidad", expression: String.raw`Z = \frac{PV}{nRT} = 1` }
          ]}
        />

        <Concept title="Suposiciones y Limitaciones">
          <p>Suposiciones modelo ideal:</p>
          <ul>
            <li>Moléculas puntuales: Volumen molecular despreciable comparado volumen recipiente (realidad volumen molecular 0.1% V_total presión atmosférica, 10% 100atm)</li>
            <li>Sin interacciones: Ausencia fuerzas Van der Waals, dipolo-dipolo, puentes hidrógeno entre moléculas excepto colisiones instantáneas</li>
            <li>Colisiones elásticas: Conservación energía cinética total, sin conversión energía interna rotacional vibracional</li>
            <li>Movimiento aleatorio: Distribución Maxwell-Boltzmann velocidades, isotropía direccional</li>
          </ul>

          <p>Rango validez:</p>
          <ul>
            <li>Presión baja: P inferior 10atm (error menor 5%)</li>
            <li>Temperatura alta: T superior 2×T_crítica (alejada condensación)</li>
            <li>Gases nobles: He, Ne, Ar (interacciones débiles)</li>
            <li>Gases no polares: H₂, N₂, O₂, CH₄ temperatura ambiente</li>
          </ul>

          <Important>
            <p>Desviaciones típicas gas ideal:</p>
            <ul>
              <li>N₂ 100atm 300K: Error volumen 40% (Z=1.04, repulsión domina)</li>
              <li>CO₂ 50atm 300K: Error volumen 20% (Z=0.83, atracción domina)</li>
              <li>H₂O vapor 1atm 120°C: Error 2% (polar, cercano condensación 100°C)</li>
            </ul>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuación de Van der Waals">
        <Formula 
          expression={String.raw`\left(P + \frac{an^2}{V^2}\right)(V - nb) = nRT`}
          description="Primera ecuación gases reales, Nobel 1910"
          definitions={ecuacionesDefinitions}
          complementary={[
            { description: "Presión explícita", expression: String.raw`P = \frac{nRT}{V - nb} - \frac{an^2}{V^2}` },
            { description: "Presión crítica", expression: String.raw`P_c = \frac{a}{27b^2}` },
            { description: "Temperatura crítica", expression: String.raw`T_c = \frac{8a}{27Rb}` },
            { description: "Volumen crítico", expression: String.raw`V_c = 3nb` }
          ]}
        />

        <Concept title="Parámetros Van der Waals">
          <p>Parámetro a (atracción intermolecular):</p>
          <ul>
            <li>Dimensiones: Pa·m⁶/mol² o atm·L²/mol²</li>
            <li>Significado físico: Intensidad fuerzas atractivas Van der Waals</li>
            <li>Corrección presión: P_real = P_ideal - an²/V² (presión interna negativa)</li>
            <li>Valores: H₂ (0.244), He (0.035), N₂ (1.39), O₂ (1.38), CO₂ (3.64), H₂O (5.46) atm·L²/mol²</li>
            <li>Mayor a: Moléculas polares, mayor polarizabilidad, fuerzas mayores</li>
          </ul>

          <p>Parámetro b (volumen exclusión):</p>
          <ul>
            <li>Dimensiones: m³/mol o L/mol</li>
            <li>Significado físico: 4 veces volumen molecular real (volumen no accesible centros)</li>
            <li>Corrección volumen: V_libre = V_total - nb</li>
            <li>Valores: H₂ (0.0266), He (0.0237), N₂ (0.0391), O₂ (0.0318), CO₂ (0.0427), H₂O (0.0305) L/mol</li>
            <li>Mayor b: Moléculas grandes, tamaño molecular mayor</li>
          </ul>
        </Concept>

        <Concept title="Punto Crítico y Universalidad">
          <p>
            Van der Waals predice existencia punto crítico donde desaparece distinción gas-líquido. Constantes críticas relacionadas parámetros a,b:
          </p>

          <p>Relaciones críticas universales:</p>
          <ul>
            <li>P_c = a/(27b²): Presión máxima licuefacción isotérmica</li>
            <li>T_c = 8a/(27Rb): Temperatura superior imposible licuefacción</li>
            <li>V_c = 3nb: Volumen molar crítico</li>
            <li>Factor compresibilidad crítico: Z_c = P_cV_c/(RT_c) = 3/8 = 0.375 (universal predicción)</li>
          </ul>

          <p>Realidad: Z_c varía 0.23-0.31 sustancias reales (He 0.305, H₂O 0.229)</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuación del Virial">
        <Concept title="Expansión en Serie">
          <p>
            Ecuación virial desarrolla factor compresibilidad Z como serie potencias densidad o presión, base teórica mecánica estadística interacciones moleculares:
          </p>

          <p style={{textAlign: 'center', fontSize: '1.1em', margin: '1em 0'}}>
            Z = PV/(nRT) = 1 + B/V_m + C/V_m² + D/V_m³ + ...
          </p>

          <p>Coeficientes viriales:</p>
          <ul>
            <li>B: Segundo coeficiente virial, interacciones pares moléculas (2 cuerpos), función temperatura B(T)</li>
            <li>C: Tercer coeficiente, interacciones triplete moléculas (3 cuerpos), función T</li>
            <li>D: Cuarto coeficiente, interacciones cuarteto (4 cuerpos), despreciable mayoría aplicaciones</li>
          </ul>

          <Important>
            <p>Segundo coeficiente virial B(T):</p>
            <ul>
              <li>B negativo: Fuerzas atractivas dominan (bajas temperaturas), Z inferior 1</li>
              <li>B positivo: Fuerzas repulsivas dominan (altas temperaturas), Z superior 1</li>
              <li>B = 0: Temperatura Boyle T_B, comportamiento ideal (N₂ T_B=327K, CO₂ T_B=714K)</li>
              <li>Cálculo teórico: B = 2πN_A ∫₀^∞ [1-exp(-u(r)/(kT))] r² dr, potencial interacción u(r)</li>
            </ul>
          </Important>

          <p>Ventaja: Base teórica rigurosa, conexión mecánica estadística. Desventaja: Convergencia lenta altas densidades, serie truncada precisión limitada.</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuaciones Modernas">
        <Concept title="Ecuación Redlich-Kwong (1949)">
          <p>
            Mejora Van der Waals incorporando dependencia temperatura parámetro atracción:
          </p>

          <p style={{textAlign: 'center', fontSize: '0.95em', margin: '1em 0'}}>
            P = RT/(V_m-b) - a/(T^(1/2) V_m(V_m+b))
          </p>

          <p>Características:</p>
          <ul>
            <li>Parámetro a dividido √T: Fuerzas atractivas debilitan temperatura alta</li>
            <li>Precisión 10% gases no polares presiones moderadas (hasta 50atm)</li>
            <li>Parámetros: a=0.42748R²T_c^(2.5)/P_c, b=0.08664RT_c/P_c</li>
            <li>Z_c = 0.333 (más cercano real que Van der Waals 0.375)</li>
          </ul>

          <p>Modificación Soave (1972): a(T) = a₀×α(T_r,ω), factor acéntrico Pitzer ω</p>
        </Concept>

        <Concept title="Ecuación Peng-Robinson (1976)">
          <p>
            Ecuación más usada industria petroquímica, equilibrio fases preciso:
          </p>

          <p style={{textAlign: 'center', fontSize: '0.9em', margin: '1em 0'}}>
            P = RT/(V_m-b) - a(T)/(V_m(V_m+b) + b(V_m-b))
          </p>

          <p>Ventajas:</p>
          <ul>
            <li>Predicción densidades líquidos precisión 5%</li>
            <li>Equilibrio vapor-líquido hidrocarburos excelente</li>
            <li>Parámetro a(T) función temperatura factor acéntrico ω</li>
            <li>Z_c = 0.307 (cercano experimental mayoría sustancias 0.23-0.31)</li>
            <li>Implementación sencilla software simulación Aspen HYSYS PRO/II</li>
          </ul>

          <p>Parámetros:</p>
          <ul>
            <li>a = 0.45724 R²T_c²/P_c × α(T_r,ω)</li>
            <li>b = 0.07780 RT_c/P_c</li>
            <li>α(T_r) = [1 + κ(1-√T_r)]², κ = 0.37464 + 1.54226ω - 0.26992ω²</li>
          </ul>
        </Concept>

        <Concept title="Ecuación Benedict-Webb-Rubin (BWR)">
          <p>
            Ecuación multiconstantes (8 parámetros) alta precisión gases ligeros industria gas natural:
          </p>

          <p>Forma compleja pero precisa densidad, entalpía, entropía gases puros mezclas. Usada tablas termodinámicas estándares NIST. Extensión Lee-Kesler 12 parámetros precisión excepcional rango amplio condiciones.</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Selección de Ecuación">
        <Concept title="Criterios de Elección">
          <p>Según aplicación y condiciones:</p>
          <ul>
            <li>Gas ideal: Cálculos rápidos, precisión baja aceptable, P inferior 5atm, T superior 300K gases simples</li>
            <li>Van der Waals: Enseñanza conceptual, correcciones cualitativas, no recomendada aplicaciones cuantitativas</li>
            <li>Redlich-Kwong: Gases no polares presiones moderadas hasta 50atm, industria gas natural convencional</li>
            <li>Peng-Robinson: Hidrocarburos puros mezclas, equilibrio vapor-líquido, industria petróleo refinerías, presión hasta 200bar</li>
            <li>Virial: Precisión alta gases presión moderada 1-20atm, necesita coeficientes experimentales B(T) C(T)</li>
            <li>BWR: Aplicaciones críticas GNL criogenia, precisión máxima, rango amplio -200°C +500°C 0-1000bar</li>
          </ul>
        </Concept>

        <Concept title="Sustancias Especiales">
          <ul>
            <li>Gases polares H₂O NH₃ HCl: Ecuaciones estado específicas IAPWS-95 agua, asociación molecular considerada</li>
            <li>Mezclas refrigerantes: Modelos mezcla reglas combinación parámetros binarios k_ij ajustados experimentalmente</li>
            <li>Gases cuánticos H₂ He: Correcciones cuánticas segunda virialización necesarias temperaturas inferiores 100K</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2><span className="emoji-icon">🔧</span> Aplicaciones en la Vida Real</h2>
        
        <div className="theory-subsection">
          <h3>Simulador procesos Aspen HYSYS Peng-Robinson hidrocarburos destilación columna 40platos presión 10bar temperatura -40°C+180°C equilibrio fases</h3>
          <p>Simulador procesos químicos Aspen Plus HYSYS PRO/II software ingeniería diseño plantas petroquímicas refinerías ecuación estado Peng-Robinson selección estándar hidrocarburos puros mezclas C1-C20 destilación columna fraccionamiento 40platos teóricos presión cabeza 10bar=1MPa fondo 12bar temperatura condensador -40°C rehervidor 180°C cálculo equilibrio vapor-líquido composición fases fugacidad coeficiente actividad entalpía vaporización balance materia energía eficiencia separación 98% productos gasolina queroseno diesel residuo aplicación refinería petróleo crudo 100000barriles/día fraccionamiento atmosférico vacío alquilación reformado craqueo catalítico optimización operación márgenes beneficio reducción consumo energía emisiones CO₂.</p>
        </div>

        <div className="theory-subsection">
          <h3>Compresión gas natural pipeline transmisión 80bar estaciones compresión 150km cálculo potencia rendimiento ecuación estado pérdidas carga fricción</h3>
          <p>Gasoducto transmisión gas natural metano etano propano mezcla presión inyección 80bar=8MPa estaciones compresión cada 150km compresor centrífugo potencia 5MW elevación presión 40bar temperatura salida 120°C refrigeración intercooler 35°C ecuación estado Peng-Robinson cálculo densidad compresibilidad Z=0.88 80bar 300K ideal Z=1 error volumen 12% potencia compresión W=ZnRT[(P₂/P₁)^(γ-1)/γ-1]/(γ-1) rendimiento politrópico 82% pérdida carga fricción ecuación Darcy-Weisbach ΔP/L=fρv²/(2D) factor fricción f=0.015 diámetro tubería 1000mm velocidad gas 15m/s caudal 15millones m³/día aplicación red transmisión nacional 10000km transporte producción plantas regasificación consumo urbano industrial generación eléctrica.</p>
        </div>

        <div className="theory-subsection">
          <h3>Separador bifásico petróleo producción offshore presión 50bar temperatura 80°C equilibrio vapor-líquido agua condensada hidrocarburo diseño diámetro altura</h3>
          <p>Separador bifásico producción petróleo plataforma offshore North Sea presión operación 50bar=5MPa temperatura 80°C=353K fluido pozo mezcla hidrocarburo C1-C40 agua salada gas disuelto CO₂ H₂S ecuación estado Peng-Robinson mezcla multicomponente cálculo equilibrio flash vapor-líquido fracción vaporizada β=0.35 composición fase gas metano etano propano líquida pentano superior agua condensada separación gravedad tiempo residencia 5minutos gas salida superior tratamiento deshidratación compresión líquido inferior bombeo almacenamiento tanque diseño separador horizontal diámetro 2.5m longitud 8m capacidad 50000barriles/día internos deflector entrada malla coalescencia gotas eliminador niebla salida normativa ASME Section VIII presión diseño 60bar factor seguridad 1.2 materiales acero carbono ASTM A516 corrosión H₂S inhibidores.</p>
        </div>

        <div className="theory-subsection">
          <h3>Almacenamiento GNL tanque criogénico -162°C presión atmosférica aislamiento vacío perlita evaporación BOG 0.05%/día relicuefacción compresión</h3>
          <p>Tanque almacenamiento GNL gas natural licuado metano temperatura -162°C=111K presión atmosférica 101325Pa reducción volumen 600veces transporte marítimo importación terminal regasificación capacidad tanque 180000m³ doble pared acero inoxidable 304L interior acero 9%Ni exterior aislamiento vacío perlita multicapa pérdidas térmicas 0.05kW/m² evaporación boil-off gas BOG 0.05%/día=90m³/día caudal recuperación relicuefacción compresor 5etapas presión 50bar refrigeración propano -40°C condensación GNL ecuación estado Peng-Robinson densidad líquido 422kg/m³ entalpía vaporización 510kJ/kg seguridad dique contención hormigón espesor 1.5m altura 15m capacidad 110% volumen tanque normativa EN 1473 NFPA 59A detección fugas infrarrojo sistema diluvio agua espuma cortina vapor.</p>
        </div>

        <div className="theory-subsection">
          <h3>Inyección CO₂ supercrítico yacimiento petróleo EOR recuperación mejorada presión 150bar temperatura 60°C miscibilidad hidrocarburos desplazamiento</h3>
          <p>Recuperación mejorada petróleo Enhanced Oil Recovery EOR inyección CO₂ supercrítico yacimiento presión 150bar=15MPa temperatura 60°C=333K superior punto crítico CO₂ T_c=304K P_c=73.8bar propiedades fluido densidad 600kg/m³ viscosidad 0.05mPa·s difusividad alta miscibilidad parcial hidrocarburos C5-C30 hinchamiento petróleo reducción viscosidad 50% desplazamiento mejorado factor recuperación 10-15% adicional primaria secundaria cálculo ecuación estado Peng-Robinson mezcla CO₂-petróleo parámetros interacción binaria k_ij ajustados experimentales presión mínima miscibilidad MMP 120bar inyección continua WAG water-alternating-gas relación 1:2 agua CO₂ barrido volumétrico eficiente proyecto Weyburn Canadá almacenamiento geológico CO₂ captura secuestro CCS reducción emisiones 1millón toneladas/año.</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2><span className="emoji-icon">📜</span> Contexto Histórico</h2>
        
        <div className="theory-subsection">
          <h3>1873 Johannes van der Waals tesis doctoral Leiden ecuación estado gases reales correcciones intermoleculares volumen molecular Nobel 1910</h3>
          <p>Johannes Diderik van der Waals físico holandés 1873 defensa tesis doctoral Universidad Leiden Over de Continuiteit van den Gas- en Vloeistoftoestand continuidad estado gaseoso líquido ecuación estado gases reales primera corrección sistemática modelo ideal parámetros a fuerzas atracción intermoleculares Van der Waals b volumen excluido molecular explicación licuefacción gases isotermas críticas punto crítico T_c P_c V_c predicción transición fase continua unificación gases líquidos estados sustancia pura aplicación cálculo constantes críticas múltiples sustancias verificación experimental Andrews CO₂ reconocimiento Premio Nobel Física 1910 trabajos ecuación estado propiedades materia fundamento termodinámica molecular ingeniería química moderna.</p>
        </div>

        <div className="theory-subsection">
          <h3>1901 Heike Kamerlingh Onnes ecuación estado virial expansión serie coeficientes temperatura mecánica estadística interacciones moleculares licuefacción helio</h3>
          <p>Heike Kamerlingh Onnes físico holandés Leiden pionero criogenia 1901 introducción ecuación estado virial expansión factor compresibilidad Z serie potencias densidad presión coeficientes B(T) C(T) D(T) dependientes temperatura conexión teórica mecánica estadística interacciones moleculares pares triplete cuarteto integrales configuración potencial intermolecular Lennard-Jones determinación experimental coeficientes viriales mediciones PVT precisión gases puros helio hidrógeno nitrógeno argón aplicación licuefacción gases permanentes helio 1908 temperatura 4.2K récord mundial laboratorio criogenia superconductividad 1911 mercurio Premio Nobel Física 1913 investigaciones propiedades materia bajas temperaturas ecuación virial base NIST tablas termodinámicas estándares.</p>
        </div>

        <div className="theory-subsection">
          <h3>1949 Otto Redlich Joseph Kwong ecuación estado mejora Van der Waals dependencia temperatura parámetro atracción industria petróleo gas natural</h3>
          <p>Otto Redlich Joseph Kwong químicos 1949 publicación ecuación estado modificación Van der Waals incorporación dependencia temperatura parámetro atracción a(T)=a₀/√T representación física debilitamiento fuerzas atractivas temperatura elevada mejora significativa predicción propiedades termodinámicas gases líquidos presión alta temperatura amplia forma P=RT/(V-b)-a/(√T·V(V+b)) dos parámetros T_c P_c sustancia precisión 10-15% gases no polares aplicación inmediata industria petróleo gas natural cálculo equilibrio fases destilación separación hidrocarburos posterior modificación Soave 1972 RKS factor acéntrico Pitzer ω precisión mejorada compuestos polares uso extendido simuladores comerciales.</p>
        </div>

        <div className="theory-subsection">
          <h3>1976 Ding-Yu Peng Donald Robinson ecuación estado equilibrio fases densidades líquidos precisas industria petroquímica refinación estándar</h3>
          <p>Ding-Yu Peng Donald Robinson ingenieros químicos Universidad Alberta Canadá 1976 desarrollo ecuación estado nueva forma cúbica P=RT/(V-b)-a(T)/(V(V+b)+b(V-b)) mejora Redlich-Kwong Soave predicción densidades líquidos precisión 5% equilibrio vapor-líquido hidrocarburos puros mezclas excelente parámetro a(T) función temperatura factor acéntrico ω Pitzer α(T_r)=[1+κ(1-√T_r)]² κ=0.37464+1.54226ω-0.26992ω² reglas mezcla parámetros interacción binaria k_ij ajuste experimental adopción rápida industria petroquímica refinación simuladores Aspen HYSYS PRO/II ChemCAD estándar facto cálculo equilibrio destilación absorción extracción aplicación GNL gas natural licuado CO₂ captura secuestro investigación continua mejoras SAFT Statistical Associating Fluid Theory.</p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span className="emoji-icon">💡</span> Curiosidades y Anécdotas</h2>
        
        <div className="theory-subsection">
          <h3>Constantes críticas universales Van der Waals Z_c=3/8=0.375 predicción real Z_c=0.23-0.31 agua 0.229 helio 0.305 desviación sistemática</h3>
          <p>Ecuación Van der Waals predicción constantes críticas universales todas sustancias factor compresibilidad crítico Z_c=P_cV_c/(RT_c)=3/8=0.375 independiente naturaleza molecular realidad experimental Z_c varía sustancias rango 0.23-0.31 agua Z_c=0.229 metano 0.288 helio 0.305 desviación sistemática limitación modelo dos parámetros representación inadecuada punto crítico región alta densidad fluctuaciones críticas ignoradas corrección factor acéntrico Pitzer ω parámetro tercer caracteriza desviación esfericidad molecularω=(log P_r^sat-1)|_{T_r=0.7} fluidos simples Ar Kr Xe ω≈0 hidrocarburos lineales ω=0.01n número carbonos agua ω=0.344 alto polar asociado ecuaciones modernas Peng-Robinson Z_c=0.307 BWR predicción precisa sustancias específicas.</p>
        </div>

        <div className="theory-subsection">
          <h3>Temperatura Boyle segundo coeficiente virial B=0 comportamiento gas ideal presión finita nitrógeno 327K=54°C dióxido carbono 714K=441°C</h3>
          <p>Temperatura Boyle T_B temperatura específica gas segundo coeficiente virial B(T_B)=0 comportamiento ideal presión finita ecuación virial Z=1+B/V_m+... Z≈1 presión moderada compensación exacta fuerzas atracción repulsión intermoleculares nitrógeno T_B=327K=54°C oxígeno 406K dióxido carbono 714K=441°C superior temperatura crítica 304K agua 1300K helio 22.6K temperatura ambiente mayoría gases B negativo atracción domina Z inferior 1 temperatura elevada B positivo repulsión domina Z superior 1 aplicación calibración instrumentos medición presión volumen temperatura Boyle comportamiento ideal sin correcciones determinación experimental isotermas precisión 0.01% termometría gas primaria definición escala temperatura ITS-90.</p>
        </div>

        <div className="theory-subsection">
          <h3>Regla mezcla Van der Waals parámetros mezcla a_mix b_mix composición molar parámetros interacción binaria k_ij desviación idealidad molecular</h3>
          <p>Ecuaciones estado aplicación mezclas gases líquidos multicomponentes reglas mezcla cálculo parámetros efectivos a_mix b_mix composición molar x_i componentes Van der Waals regla cuadrática a_mix=Σᵢ Σⱼ xᵢxⱼ√(aᵢaⱼ)(1-k_ij) lineal b_mix=Σᵢ xᵢbᵢ parámetro interacción binaria k_ij ajuste desviación idealidad molecular k_ij=0 moléculas similares tamaño polaridad k_ij≠0 disimilares metano-decano k_ij=0.02 CO₂-hidrocarburos k_ij=0.12 agua-hidrocarburos k_ij=0.5 inmiscibilidad determinación experimental datos equilibrio vapor-líquido banco datos DECHEMA DIPPR aplicación simulación procesos separación destilación absorción extracción mezclas complejas petróleo 200componentes agrupación pseudocomponentes caracterización curva destilación TBP gravedad API.</p>
        </div>

        <div className="theory-subsection">
          <h3>Diagrama fase PVT superficie tridimensional proyecciones PT diagrama fase familiar PV isotermas Px composición equilibrio multicomponente complejidad</h3>
          <p>Diagrama fase sustancia pura representación completa superficie tridimensional presión-volumen-temperatura PVT regiones sólido líquido vapor superficies coexistencia dos fases líneas triple punto crítico proyección bidimensional plano PT diagrama fase familiar sublimación fusión vaporización punto triple coexistencia tres fases punto crítico final línea vaporización proyección PV isotermas Andrews CO₂ temperatura inferior T_c región bifásica horizontal T superior T_c isoterma continua supercrítico ecuación estado cúbica Van der Waals Peng-Robinson genera isotermas cúbica volumen 3raíces reales T inferior T_c 1raíz T superior criterio Maxwell igualdad áreas lazo Van der Waals equilibrio fases mezclas multicomponentes complejidad enorme diagramas ternarios representación triangular Gibbs aplicación metalurgia acero austenita ferrita cementita cerámica SiO₂-Al₂O₃-CaO geología magma cristalización minerales.</p>
        </div>
      </div>

      <div className="theory-summary-section">
        <h2><span className="emoji-icon">📋</span> Resumen de Conceptos Clave</h2>
        
        <ul className="key-points-list">
          <li>Ecuación estado: relación matemática PVT variables termodinámicas sistema predicción propiedades densidad fugacidad entalpía entropía diseño procesos simulación ingeniería química</li>
          <li>Gas ideal PV=nRT: modelo simple válido P inferior 10atm T alta gases no polares He N₂ O₂ error menor 5% desviaciones altas presiones bajas temperaturas</li>
          <li>Van der Waals (P+an²/V²)(V-nb)=nRT: primera ecuación gases reales corrección atracción intermolecular a volumen molecular b predicción punto crítico Nobel 1910</li>
          <li>Ecuación virial Z=1+B/V+C/V²+...: expansión serie base teórica mecánica estadística coeficientes B(T) C(T) interacciones 2cuerpos 3cuerpos temperatura Boyle B=0</li>
          <li>Peng-Robinson: ecuación estándar industria petroquímica hidrocarburos equilibrio vapor-líquido precisión densidades 5% simuladores Aspen HYSYS parámetros T_c P_c ω</li>
          <li>Aplicaciones: simulación procesos químicos compresión gas natural separadores bifásicos almacenamiento GNL inyección CO₂ EOR recuperación petróleo diseño equipos optimización operación</li>
        </ul>
      </div>
    </>
  );
};

export default EcuacionesEstadoTheory;
