import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as entalpiaDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Entalpía",
  descripcion: "Función termodinámica que representa el contenido de calor y energía total de un sistema a presión constante. Comprende la definición H = U + PV, cambios de entalpía en gases ideales, relación con calor a presión constante, y aplicaciones en reacciones químicas y procesos industriales.",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const EntalpiaTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Entalpía?">
        <Concept title="Definición">
          <p>
            La entalpía (H) es una función termodinámica que representa el contenido total 
            de energía de un sistema, incluyendo tanto su energía interna como el trabajo necesario para 
            desplazar su entorno y hacer espacio para él.
          </p>
          
          <p>
            Es especialmente útil para procesos que ocurren a presión constante, como la mayoría de las 
            reacciones químicas en recipientes abiertos a la atmósfera.
          </p>

          <Important>
            <p>Características de la Entalpía:</p>
            <ul>
              <li>Función de estado: Depende solo del estado actual del sistema</li>
              <li>Propiedad extensiva: Proporcional a la cantidad de materia</li>
              <li>Útil a P constante: ΔH = Q<sub>p</sub> (calor a presión constante)</li>
              <li>Incluye trabajo de flujo: H = U + PV</li>
            </ul>
          </Important>
        </Concept>

        <Concept title="Interpretación Física">
          <p>
            La entalpía puede interpretarse como la energía total que un sistema puede intercambiar 
            con su entorno en forma de calor a presión constante. El término PV representa el trabajo 
            necesario para "hacer espacio" al sistema contra la presión externa.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Definición Matemática">
        <Concept title="Relación con Energía Interna">
          <p>
            La entalpía se define en términos de la energía interna, presión y volumen:
          </p>

          <Formula 
            expression={String.raw`H = U + PV`}
            description="Definición de entalpía"
            calculatorId="entalpia-grupo-1"
            definitions={entalpiaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Energía interna", expression: String.raw`U = H - PV` },
              { description: "Trabajo de flujo", expression: String.raw`PV = H - U` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>H: Entalpía del sistema (J)</li>
            <li>U: Energía interna del sistema (J)</li>
            <li>P: Presión del sistema (Pa)</li>
            <li>V: Volumen del sistema (m³)</li>
          </ul>

          <p>
            El término PV representa el trabajo de flujo o trabajo de desplazamiento necesario para 
            introducir o extraer materia del sistema.
          </p>
        </Concept>

        <Concept title="Cambio de Entalpía">
          <p>
            El cambio de entalpía en un proceso se calcula como:
          </p>

          <Formula 
            expression={String.raw`\Delta H = \Delta U + \Delta(PV)`}
            description="Cambio de entalpía"
            calculatorId="entalpia-grupo-1"
            definitions={entalpiaDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>ΔH: Cambio de entalpía (J)</li>
            <li>ΔU: Cambio de energía interna (J)</li>
            <li>Δ(PV): Cambio en el producto presión-volumen (J)</li>
          </ul>

          <p>
            Para procesos a presión constante: ΔH = ΔU + PΔV
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Entalpía en Gases Ideales">
        <Concept title="Relación con la Temperatura">
          <p>
            Para un gas ideal, la entalpía depende únicamente de la temperatura:
          </p>

          <Formula 
            expression={String.raw`H = nC_p T`}
            description="Entalpía de un gas ideal"
            calculatorId="entalpia-grupo-1"
            definitions={entalpiaDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>H: Entalpía total (J)</li>
            <li>n: Número de moles del gas (mol)</li>
            <li>C<sub>p</sub>: Capacidad calorífica a presión constante (J/(mol·K))</li>
            <li>T: Temperatura absoluta (K)</li>
          </ul>

          <p>Valores típicos de C<sub>p</sub>:</p>
          <ul>
            <li>Gases monoatómicos: C<sub>p</sub> = (5/2)R ≈ 20.79 J/(mol·K)</li>
            <li>Gases diatómicos: C<sub>p</sub> = (7/2)R ≈ 29.10 J/(mol·K)</li>
            <li>Gases poliatómicos: C<sub>p</sub> = 4R ≈ 33.26 J/(mol·K)</li>
          </ul>
        </Concept>

        <Concept title="Cambio de Entalpía por Temperatura">
          <p>
            El cambio de entalpía cuando varía la temperatura es:
          </p>

          <Formula 
            expression={String.raw`\Delta H = nC_p\Delta T`}
            description="Cambio de entalpía con temperatura"
            calculatorId="entalpia-grupo-1"
            definitions={entalpiaDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>ΔH: Cambio de entalpía (J)</li>
            <li>n: Número de moles (mol)</li>
            <li>C<sub>p</sub>: Capacidad calorífica a presión constante (J/(mol·K))</li>
            <li>ΔT: Cambio de temperatura = T<sub>f</sub> - T<sub>i</sub> (K)</li>
          </ul>
        </Concept>

        <Concept title="Relación de Mayer">
          <p>
            Para gases ideales, las capacidades caloríficas están relacionadas por:
          </p>
          <p style={{textAlign: 'center', fontSize: '1.1em', margin: '1em 0'}}>
            C<sub>p</sub> = C<sub>v</sub> + R
          </p>
          <p>
            Donde R = 8.314 J/(mol·K) es la constante universal de los gases.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Entalpía y Calor">
        <Concept title="Calor a Presión Constante">
          <p>
            En procesos a presión constante, el cambio de entalpía es igual al calor transferido:
          </p>

          <Formula 
            expression={String.raw`Q_p = \Delta H`}
            description="Calor a presión constante"
            calculatorId="entalpia-grupo-1"
            definitions={entalpiaDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>Q<sub>p</sub>: Calor transferido a presión constante (J)</li>
            <li>ΔH: Cambio de entalpía (J)</li>
          </ul>

          <p>
            Esta relación hace que la entalpía sea especialmente útil para estudiar reacciones químicas 
            y procesos que ocurren en recipientes abiertos.
          </p>
        </Concept>

        <Concept title="Entalpía de Reacción">
          <p>
            En química, el cambio de entalpía de una reacción (ΔH<sub>reacción</sub>) indica:
          </p>
          <ul>
            <li>ΔH {'<'} 0: Reacción exotérmica (libera calor)</li>
            <li>ΔH {'>'} 0: Reacción endotérmica (absorbe calor)</li>
            <li>ΔH = 0: Reacción termoneutra (sin cambio de calor)</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🔥 Poder calorífico de combustibles</h3>
          <p>
            La entalpía de combustión determina la energía liberada al quemar combustibles. Gasolina tiene ΔH_combustión 
            = -47.3 MJ/kg (energía liberada), gas natural (metano CH₄) -55.5 MJ/kg, hidrógeno -142 MJ/kg. Los motores 
            de combustión interna aprovechan esta energía: un auto que consume 6 L/100 km de gasolina (densidad 0.75 kg/L) 
            libera 6 × 0.75 × 47.3 = 213 MJ cada 100 km. Solo ~25% se convierte en trabajo mecánico (eficiencia térmica); 
            el resto se disipa como calor al radiador (30%), gases de escape (35%), fricción (10%). Las refinerías miden 
            ΔH_combustión con calorímetros de bomba: queman muestra en oxígeno puro (20 atm) dentro de recipiente de acero 
            sumergido en agua, midiendo aumento de temperatura. Jet fuel (queroseno) tiene ΔH_combustión = -43.0 MJ/kg; 
            un Boeing 747 carga 216,840 L (175 toneladas), almacenando 175,000 × 43 = 7,525 GJ, suficiente para volar 
            14,000 km. El poder calorífico define cuánta masa de combustible necesita un vehículo, crucial para diseño 
            aeroespacial donde cada kilogramo cuenta.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏭 Intercambiadores de calor industriales</h3>
          <p>
            Los intercambiadores de calor transfieren entalpía entre fluidos sin mezclarlos, fundamentales en refinerías, 
            plantas químicas, centrales eléctricas. Un intercambiador de tubos y coraza típico: fluido caliente (vapor 150°C) 
            fluye por tubos, fluido frío (agua 20°C) por la coraza. Si circulan 10 kg/s de agua (C_p = 4186 J/(kg·K)) 
            calentándose a 80°C, el cambio de entalpía es ΔH = m × C_p × ΔT = 10 × 4186 × (80-20) = 2.5 MW de potencia 
            térmica transferida. El vapor condensa cediendo su entalpía de vaporización: ΔH_vap agua = 2257 kJ/kg, entonces 
            se requiere condensar 2500/2257 = 1.1 kg/s de vapor. Las refinerías de petróleo usan redes de intercambiadores: 
            el crudo frío (30°C) se precalienta con productos calientes (300°C) antes de entrar al horno, recuperando 60% 
            del calor y ahorrando millones anuales. El diseño usa ΔH = Q_p: igualando entalpía ganada por fluido frío con 
            entalpía perdida por fluido caliente, determinando área de transferencia necesaria (típicamente 100-1000 m²).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>❄️ Cambios de fase: fusión y vaporización</h3>
          <p>
            Los cambios de fase requieren/liberan entalpía sin cambiar temperatura. Hielo a 0°C → agua 0°C: ΔH_fusión = 
            334 kJ/kg (absorbe energía rompiendo red cristalina). Una bandeja de cubitos (500 g) requiere 500 × 334 = 
            167 kJ para fundirse, equivalente a calentar el agua resultante de 0°C a 40°C. Agua 100°C → vapor 100°C: 
            ΔH_vap = 2257 kJ/kg (6.8 veces mayor que fusión), energía para separar moléculas contra fuerzas intermoleculares. 
            Una olla eléctrica de 2 kW tarda 2257/2 = 1128 segundos (19 min) en evaporar 1 kg de agua hirviendo. Las 
            plantas desalinizadoras explotan ΔH_vap: evaporan agua salada con vapor a baja presión (70°C, no 100°C, 
            reduciendo ΔH_vap), luego condensan el vapor obteniendo agua dulce. Multistage flash distillation: el agua 
            calentada a 100°C entra a cámara de 50 kPa (evaporación a 80°C), el flash libera vapor instantáneamente. 
            Una planta de 100,000 m³/día consume ~2.5 GJ/m³ en entalpía de vaporización. Aire acondicionado usa ΔH_vap 
            de refrigerantes (R-134a: ΔH_vap = 217 kJ/kg a 5°C), circulando 0.5 kg/s para extraer 0.5 × 217 = 109 kW.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ Centrales térmicas y ciclos Rankine</h3>
          <p>
            Las centrales termoeléctricas convierten entalpía del vapor en trabajo eléctrico usando ciclo Rankine. 
            Una central de carbón de 1000 MW: caldera quema carbón (ΔH_combustión = -32 MJ/kg) generando vapor a 600°C 
            y 25 MPa con entalpía H_vapor = 3650 kJ/kg (referencia: agua 0°C = 0 kJ/kg). El vapor expande en turbina 
            hasta condensador (50°C, 12 kPa, H_líquido = 209 kJ/kg), realizando trabajo W = ΔH = 3650 - 209 = 3441 kJ/kg. 
            La eficiencia térmica η = W/Q_entrada = 3441/(H_vapor - H_alimentación) ≈ 42% (plantas modernas supercríticas). 
            Para generar 1000 MW eléctricos, se requiere flujo másico: ṁ = P/W = 1000×10⁶/3441×10³ = 291 kg/s de vapor. 
            El carbón consumido: 1000/0.42 = 2381 MW térmicos, requiriendo 2381×10⁶/32×10⁶ = 74 kg/s = 6400 ton/día. 
            El condensador rechaza 1381 MW (58% del calor) al río/océano, calentando 27,000 kg/s de agua en 5°C. 
            Los diagramas entalpía-entropía (Mollier) visualizan el ciclo, usando ΔH entre estados para calcular 
            eficiencia de turbinas y bombas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🍳 Calorimetría de alimentos</h3>
          <p>
            Las calorías alimenticias son entalpías de combustión. Una caloría alimenticia (kcal) = 4186 J: la entalpía 
            para calentar 1 kg de agua en 1°C. Los macronutrientes tienen ΔH_combustión distintas: carbohidratos 17 kJ/g 
            (4 kcal/g), proteínas 17 kJ/g, grasas 37 kJ/g (9 kcal/g), alcohol 29 kJ/g (7 kcal/g). Un Big Mac (550 kcal = 
            2300 kJ) contiene entalpía equivalente a calentar 55 kg de agua de 10°C a 20°C. El cuerpo metaboliza nutrientes 
            oxidándolos: glucosa + O₂ → CO₂ + H₂O libera ΔH = -2803 kJ/mol (180 g glucosa ≈ 15.6 kJ/g). Los laboratorios 
            miden calorías con bomba calorimétrica: queman muestra en O₂ puro dentro de recipiente metálico sumergido en 
            agua aislada, midiendo ΔT del agua. Una muestra de 1 g de almendras (6 kcal/g) eleva temperatura de 2 kg agua 
            en 3°C: Q = m×C_p×ΔT = 2×4186×3 = 25,116 J = 6 kcal. Las etiquetas nutricionales redondean: 4-4-9 (carbohidratos-
            proteínas-grasas). Un maratonista quema 2600 kcal (42 km), equivalente a ΔH_combustión de 290 g de grasa 
            corporal (los músculos almacenan 500 g glucógeno = 2000 kcal, consumiéndose primero).
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El desarrollo del concepto de entalpía
        </h2>
        
        <div className="theory-subsection">
          <h3>🔬 Julius Robert Mayer y el equivalente mecánico del calor (1842)</h3>
          <p>
            Julius Mayer, médico alemán en un barco navegando a Java, notó que la sangre venosa de marineros en trópicos 
            era más roja (oxigenada) que en Europa: el cuerpo necesitaba menos oxidación para mantener temperatura corporal 
            en clima cálido. Esto lo inspiró a conectar calor con trabajo, publicando en 1842 que calor y trabajo son formas 
            intercambiables de energía. Mayer calculó el equivalente mecánico del calor: 1 caloría = 4.19 J (valor moderno: 
            4.186 J), usando datos de compresión adiabática de gases. Sin embargo, su artículo fue ignorado (no era físico 
            de profesión). James Prescott Joule verificó experimentalmente (1843-1850) mediante su famoso aparato de paletas: 
            pesas cayendo giran paletas en agua, convirtiendo trabajo gravitacional (mgh) en calor (ΔT medido). Joule obtuvo 
            4.159 J/cal tras años de experimentos meticulosos. Estos trabajos establecieron que energía total (interna + 
            trabajo de flujo) se conserva, preparando el terreno para definir entalpía como H = U + PV, aunque el término 
            "entalpía" vendría 70 años después.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ Rudolf Clausius y la primera ley (1850)</h3>
          <p>
            Rudolf Clausius formuló matemáticamente la primera ley de la termodinámica en su artículo "Über die bewegende 
            Kraft der Wärme" (1850): ΔU = Q - W, estableciendo que energía interna U cambia mediante calor Q y trabajo W. 
            Clausius observó que para procesos a presión constante (isobáricos), es conveniente agrupar U + PV porque 
            W = PΔV: entonces ΔU = Q - PΔV → Q = ΔU + PΔV = Δ(U + PV). Este "contenido de calor a presión constante" 
            simplifica cálculos en química, pero Clausius no lo nombró separadamente. En 1854, Clausius introdujo el concepto 
            de "trabajo de desagregación" (Disgregationsarbeit): la energía para separar moléculas durante expansión, 
            equivalente a PV. Clausius también acuñó "entropía" (1865), pero dejó U + PV sin nombre especial. La comunidad 
            científica alemana usaba "Wärmeinhalt" (contenido de calor) para U + PV, reconociendo su utilidad práctica pero 
            sin estatus formal como función de estado fundamental. Clausius se enfocó más en entropía S como segunda ley, 
            considerando H = U + PV una conveniencia matemática más que concepto profundo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📘 Heike Kamerlingh Onnes acuña "entalpía" (1909)</h3>
          <p>
            El término "entalpía" fue introducido por Heike Kamerlingh Onnes, físico holandés famoso por licuar helio (1908) 
            y descubrir superconductividad (1911, Nobel 1913). En 1909, Onnes publicó en holandés usando la palabra "enthalpie", 
            del griego "enthalpein" (ἐνθάλπειν) = "calentar" o "poner calor dentro". Onnes necesitaba un término para H = U + PV 
            al estudiar gases criogénicos: en expansión Joule-Thomson (throttling), la entalpía permanece constante (H₁ = H₂) 
            mientras presión y temperatura cambian. Esto es crucial para licuefacción: helio a 200 atm y -243°C pasa por válvula 
            a 1 atm, enfriándose a -269°C (4 K) debido a que ΔH = 0 implica ΔU = -Δ(PV), perdiendo energía interna. Onnes 
            graficó curvas de entalpía vs temperatura para varios gases (H-T diagrams), mostrando regiones donde expansión 
            enfría (efecto Joule-Thomson positivo). El término se adoptó gradualmente: literatura inglesa usaba "heat content" 
            hasta 1920s. Gilbert Lewis y Merle Randall popularizaron "enthalpy" en "Thermodynamics and the Free Energy of 
            Chemical Substances" (1923), libro influyente que estableció notación moderna (H, S, G). Hoy, entalpía es fundamental 
            en termodinámica de ingeniería y química.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔧 Aplicación industrial: diagramas Mollier (1904)</h3>
          <p>
            Richard Mollier, ingeniero alemán, revolucionó ingeniería termodinámica con sus diagramas entalpía-entropía 
            (diagramas h-s o Mollier, 1904). Antes, cálculos de turbinas de vapor requerían tablas tediosas; Mollier graficó 
            entalpía (eje Y) vs entropía (eje X) con líneas de presión constante, temperatura constante, calidad (fracción 
            de vapor). En un diagrama Mollier, procesos reales se visualizan: expansión en turbina es línea casi vertical 
            (entropía aumenta ligeramente por irreversibilidades), compresión en bomba es línea casi horizontal (ΔH pequeño). 
            La eficiencia se calcula gráficamente: ΔH_real / ΔH_isoentrópico. Mollier calculó tablas de vapor para agua 
            (1906), usadas universalmente hasta computadoras. Un ejemplo: vapor a 100 bar, 500°C (h = 3375 kJ/kg, s = 6.60 
            kJ/(kg·K)) expande a 0.1 bar; siguiendo línea de s constante, h_final = 2345 kJ/kg (vapor húmedo 90% calidad). 
            Trabajo extraído: W = Δh = 1030 kJ/kg. Los diagramas Mollier todavía se usan en diseño de turbinas, compresores, 
            refrigeración. NIST desarrolló software REFPROP (1989) calculando propiedades termodinámicas (h, s, u, c_p) para 
            134 fluidos, base de toda ingeniería moderna.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 Entalpía en aeronáutica y cohetes (1950s-presente)</h3>
          <p>
            La era espacial intensificó el uso de entalpía. Cohetes queman combustible hipergólico: RP-1 (queroseno refinado) 
            + oxígeno líquido en Saturn V, ΔH_combustión = -43 MJ/kg RP-1; hidrógeno + oxígeno en Shuttle, ΔH_combustión = 
            -141.8 MJ/kg H₂ (mayor poder calorífico pero baja densidad). Los motores cohete operan a presión extrema (100-200 
            atm cámara combustión): ΔH_productos determina velocidad de escape v_e = √(2ΔH/M) donde M es masa molar de gases. 
            H₂+O₂ → H₂O vapor a 3000 K tiene ΔH = -242 kJ/mol, v_e ≈ 4500 m/s (Shuttle SSME). RP-1+O₂ produce CO₂+H₂O con v_e 
            ≈ 3500 m/s (menor molecular weight gases, menor velocidad). Los ingenieros usan entalpía de formación de especies: 
            NASA CEA (Chemical Equilibrium with Applications) calcula composición de productos asumiendo equilibrio, minimizando 
            energía libre pero requiriendo ΔH para flujo másico. Reentrada atmosférica: naves espaciales chocan aire a 7.8 km/s, 
            generando ΔH = ½mv² = 30 MJ/kg (calor de fricción). Escudos térmicos ablacionan: material absorbe ΔH_sublimación 
            llevándose calor (carbono fenólico: ΔH_abl ≈ 10 MJ/kg). Apollo 11 disipó 300 GJ durante reentrada, escudo perdió 
            50 kg material. Entalpía salva vidas.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>⛵ Mayer y la sangre roja en Java</h3>
          <p>
            Julius Robert Mayer era médico de barco en 1840, navegando hacia Indonesia. Al practicar sangrías a marineros 
            enfermos en Java (práctica médica común en s.XIX), notó que la sangre venosa era inusualmente roja (oxigenada), 
            casi como sangre arterial. En Europa, sangre venosa era oscura (desoxigenada). Mayer razonó: en climas cálidos, 
            el cuerpo necesita quemar menos alimento (oxidar menos glucosa) para mantener 37°C, dejando más oxígeno sin usar 
            en sangre venosa. Esta observación casual lo inspiró a proponer (1842) que calor y trabajo son equivalentes, 
            calculando 1 caloría = 365 kg·m (3.58 J, 15% error vs 4.18 J real). Mayer no era físico profesional y su artículo 
            fue rechazado por Annalen der Physik (editor Poggendorff lo consideró especulación). Deprimido, Mayer sufrió 
            crisis nerviosa en 1850, saltando de ventana (sobrevivió con heridas). Joule recibió crédito por equivalente 
            mecánico del calor, aunque Mayer lo publicó primero. Reconocimiento llegó tarde: Royal Society le otorgó 
            medalla Copley (1871), 29 años después. Mayer murió (1878) sin ver entalpía H = U + PV formalizada. Su 
            legado: conectó metabolismo (ΔH bioquímico) con termodinámica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🥶 La licuefacción del helio de Onnes</h3>
          <p>
            Heike Kamerlingh Onnes, quien acuñó "entalpía", fue el primero en licuar helio (10 julio 1908, Leiden, Holanda), 
            hazaña que requirió dominar entalpía. Helio era el último gas permanente sin licuar: hidrógeno licuado por Dewar 
            (1898, 20 K), pero helio tiene punto de ebullición 4.2 K, extremadamente bajo. Onnes usó enfriamiento en cascada: 
            aire líquido (77 K) enfría hidrógeno líquido (20 K), que enfría helio. El paso crítico: expansión Joule-Thomson 
            de helio, pero helio tiene temperatura de inversión negativa a P atmosférica (calentaba al expandir, no enfriaba). 
            Onnes tuvo que precomprimir helio a 200 atm y pre-enfriar a 13 K con hidrógeno líquido; entonces la expansión 
            funcionaba: ΔH = 0 (throttling), perdiendo energía interna ΔU = -Δ(PV) al caer presión. Tras 16 horas continuas, 
            obtuvo 60 mL de helio líquido. Tres años después (1911), descubrió superconductividad enfriando mercurio con helio 
            líquido: resistencia eléctrica desaparecía bajo 4.2 K. Onnes ganó Nobel (1913) por licuefacción de helio. Ironía: 
            el concepto que nombró (entalpía) fue clave para su logro, pero Nobel lo recibió por aplicación experimental, 
            no por nomenclatura.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🍫 El chocolate que derrite vs endotérmico</h3>
          <p>
            El chocolate derrite en la boca (37°C) porque ΔH_fusión cacao butter = 35 kJ/kg es bajo (vs hielo 334 kJ/kg). 
            La manteca de cacao tiene cristales polimórficos (formas I-VI); el temperado del chocolate estabiliza forma V 
            (punto fusión 34°C, justo bajo temperatura corporal). Si fundimos chocolate mal temperado, cristaliza en forma IV 
            (28°C) o VI (36°C): forma IV derrite demasiado fácil (pegajoso), forma VI requiere más calor (textura arenosa). 
            Chocolateros templan: funden a 45°C, enfrían a 27°C (nucleación forma V), calientan a 31°C (disuelven cristales 
            inestables), enfrían a 20°C (solidificación). Cada gramo de chocolate absorbe ΔH_fusión = 35 J al fundirse en 
            boca: una tableta de 50 g absorbe 1750 J (equivalente a calentar 42 mL agua en 10°C). Curiosamente, el mentol 
            activa receptores de frío TRPM8 aunque no cambia temperatura: genera sensación endotérmica. Caramelos Pop Rocks 
            contienen CO₂ atrapado (40 bar) en azúcar: al disolverse en saliva, CO₂ burbujea explosivamente. El proceso 
            real es exotérmico (ΔH_disolución azúcar = -5 kJ/mol negativo), liberando calor, pero el CO₂ expandiendo 
            produce efecto refrescante por cambio de fase gas. La termodinámica de dulces combina ΔH_fusión, ΔH_disolución, 
            ΔH_vaporización en experiencias multisensoriales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💥 La explosión de Beirut: nitrato de amonio</h3>
          <p>
            El 4 agosto 2020, 2750 toneladas de nitrato de amonio (NH₄NO₃) almacenadas 6 años en puerto de Beirut explotaron, 
            equivalente a 1.1 kilotones TNT. Nitrato de amonio se descompone exotérmicamente a {'>'} 210°C: 2NH₄NO₃ → 2N₂ + O₂ + 4H₂O, 
            ΔH_descomposición = -118 kJ/mol (libera calor). Si proceso es confinado, gases generados (presión) y calor 
            (ΔH liberado acelera reacción vecina) crean detonación: onda de choque supersónica. La entalpía específica 
            explosiva: 2750 ton × 118 kJ/mol / 80 g/mol = 4.1 × 10¹² J = 4.1 TJ. La explosión creó cráter de 140 m diámetro, 
            onda destruyó edificios en 10 km, murieron 218 personas. Nitrato de amonio es fertilizante seguro normalmente, 
            pero fuego inicial (soldadura) calentó material durante 3 minutos hasta temperatura crítica. Oklahoma City 
            bombing (1995) usó 2.3 ton NH₄NO₃ + fuel oil (ANFO), ΔH detonación mayor que NH₄NO₃ puro. Regulaciones requieren 
            almacenar NH₄NO₃ en edificios frescos (prevenir acumulación de calor), mezclar con 10% carbonato cálcico 
            (aumenta ΔH_activación, dificulta ignición). La entalpía de descomposición exotérmica explosiva (ΔH muy negativo, 
            gases producidos) define qué sustancias son peligrosas: nitroglicerina ΔH = -370 kJ/mol, TNT -295 kJ/mol, 
            C-4 -280 kJ/mol. Beirut fue recordatorio trágico que ΔH negativo grande + confinamiento = desastre.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🥤 Bebidas energéticas y metabolismo ATP</h3>
          <p>
            Una Red Bull (250 mL) contiene 110 kcal (460 kJ), pero afirma "dar energía". La entalpía de combustión de 
            carbohidratos (27 g azúcar) es ΔH = 27 × 17 kJ/g = 459 kJ, liberados mediante respiración celular: glucosa + 6O₂ 
            → 6CO₂ + 6H₂O, ΔH = -2803 kJ/mol. Sin embargo, el cuerpo no convierte directamente ΔH en trabajo; usa ATP 
            (adenosín trifosfato). La hidrólisis ATP → ADP + fosfato libera ΔG = -30.5 kJ/mol (energía libre, no entalpía), 
            acoplada a contracciones musculares. Una molécula de glucosa produce 32 ATP: 32 × 30.5 = 976 kJ "útil" de 
            2803 kJ total (eficiencia 35%), resto se disipa como calor corporal. La cafeína (80 mg en Red Bull) no aporta 
            entalpía (0 kcal), pero bloquea receptores de adenosina, inhibiendo señal de fatiga. Los mitocondrias producen 
            ATP oxidando ácidos grasos (ΔH = 37 kJ/g, más que glucosa), pero requieren más oxígeno. Atletas de resistencia 
            "queman grasa" durante maratones: 2600 kcal (42 km) consumidas de 300 g glucógeno + 150 g grasa corporal. 
            Las bebidas isotónicas aportan glucosa rápidamente (ΔH disponible en 15 min), mientras grasa tarda horas 
            metabolizarse. La entalpía de alimentos se mide con bomba calorimétrica, pero biología convierte ΔH → ΔG → 
            ATP: solo fracción de ΔH_combustión se aprovecha como trabajo mecánico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌡️ Termómetros de infrarrojo sin contacto</h3>
          <p>
            Los termómetros IR de frente (populares durante COVID-19) no miden temperatura directamente, miden entalpía 
            radiante. Todo objeto con T {'>'} 0 K emite radiación electromagnética (ley Stefan-Boltzmann): potencia = εσT⁴A, 
            donde ε = emisividad (0.98 para piel), σ = 5.67×10⁻⁸ W/(m²·K⁴). Una frente de 10 cm² a 37°C (310 K) irradia 
            0.98 × 5.67×10⁻⁸ × 310⁴ × 0.001 = 0.52 W. El termómetro detecta radiación IR (longitud onda pico: λ_max = 2898/T 
            = 9.3 μm), sensor termopila convierte fotones en voltaje proporcional a T⁴, calculando temperatura. Problema: 
            emisividad varía (pelo 0.95, piel 0.98, gotas sudor 0.96), causando errores ±0.5°C. La radiación transporta 
            entalpía: potencia × tiempo = energía. Una persona (1.8 m² superficie, 33°C piel promedio) irradia 0.98 × 
            5.67×10⁻⁸ × 306⁴ × 1.8 = 840 W continuamente. En habitación 20°C, paredes/objetos irradian 0.95 × 5.67×10⁻⁸ × 
            293⁴ × 30 m² ≈ 10 kW hacia persona. Balance: persona pierde 840 W por radiación (+ 50 W convección, 50 W 
            evaporación), compensa con metabolismo basal (~80 W) + movimiento. La entalpía radiante explica por qué sentimos 
            frío cerca de ventanas (vidrio 5°C irradia 300 W/m², absorbiendo calor de piel) aunque aire esté 20°C.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            La entalpía H = U + PV es una función de estado que combina energía interna U con trabajo de flujo PV. 
            Es especialmente útil para procesos a presión constante, donde ΔH = Q_p (calor transferido). La entalpía 
            es función extensiva que depende de la cantidad de materia.
          </li>
          <li>
            Para gases ideales, H = nC_pT y ΔH = nC_pΔT, donde C_p es capacidad calorífica a presión constante. 
            La relación de Mayer establece C_p = C_v + R, conectando capacidades a presión/volumen constante mediante 
            la constante R = 8.314 J/(mol·K).
          </li>
          <li>
            El cambio de entalpía indica calor de reacción: ΔH {'<'} 0 es exotérmica (libera calor como combustión), 
            ΔH {'>'} 0 es endotérmica (absorbe calor como evaporación). Los cambios de fase tienen entalpías características: 
            ΔH_fusión hielo 334 kJ/kg, ΔH_vap agua 2257 kJ/kg.
          </li>
          <li>
            Aplicaciones industriales: intercambiadores de calor (transferencia ΔH entre fluidos), centrales térmicas 
            (ciclo Rankine con diagramas h-s de Mollier), combustibles (ΔH_combustión determina poder calorífico), 
            refrigeración (ΔH_vap de refrigerantes), procesos químicos (balances de entalpía).
          </li>
          <li>
            El concepto evolucionó desde equivalente mecánico del calor (Mayer, Joule 1840s), primera ley de Clausius 
            (1850), hasta el término "entalpía" acuñado por Kamerlingh Onnes (1909). Los diagramas Mollier (1904) 
            revolucionaron ingeniería, visualizando procesos como expansión en turbinas y compresión en bombas usando 
            coordenadas h-s.
          </li>
        </ul>
      </div>
    </>
  );
};

export default EntalpiaTheory;
