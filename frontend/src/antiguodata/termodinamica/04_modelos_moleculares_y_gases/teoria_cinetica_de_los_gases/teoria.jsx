import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as teoria_cinetica_de_los_gasesDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Teoría Cinética de los Gases",
  descripcion: "Movimiento molecular, velocidad cuadrática media, energía cinética, presión microscópica",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO'],
  isTheoryOnly: false
};

const TeoriaCineticaDeLosGasesTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Fundamentos de la Teoría Cinética">
        <Concept title="Modelo Molecular de los Gases">
          <p>
            La teoría cinética explica las propiedades macroscópicas de los gases (presión, temperatura, volumen) a partir del movimiento microscópico de las moléculas. Este enfoque conecta la mecánica newtoniana con la termodinámica.
          </p>

          <Important>
            <p>Postulados Fundamentales:</p>
            <ul>
              <li>Moléculas numerosas: El gas contiene un número enorme de moléculas (orden 10²³) en movimiento aleatorio continuo</li>
              <li>Volumen despreciable: El volumen de las moléculas es insignificante comparado con el volumen del recipiente (factor 1000)</li>
              <li>Colisiones elásticas: Las colisiones entre moléculas y con paredes conservan energía cinética total sin pérdidas</li>
              <li>Sin interacciones: No existen fuerzas atractivas o repulsivas entre moléculas excepto durante colisiones breves</li>
              <li>Movimiento caótico: Las moléculas se mueven en todas direcciones con velocidades distribuidas aleatoriamente</li>
              <li>Energía-temperatura: La energía cinética promedio traslacional es directamente proporcional a temperatura absoluta</li>
            </ul>
          </Important>
        </Concept>

        <Concept title="Interpretación Microscópica de Propiedades">
          <p>Presión: Resultado de colisiones moleculares contra las paredes del recipiente. Cada colisión transfiere momento lineal, generando fuerza macroscópica.</p>
          
          <p>Temperatura: Medida de energía cinética traslacional promedio de las moléculas. Mayor temperatura significa moléculas más rápidas.</p>
          
          <p>Volumen: Espacio disponible para movimiento molecular. Reducir volumen aumenta frecuencia de colisiones, elevando presión.</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Velocidades Moleculares">
        <Concept title="Velocidad Cuadrática Media (RMS)">
          <p>
            La velocidad cuadrática media v_rms representa la velocidad típica de las moléculas en un gas. Se define como la raíz cuadrada del promedio de los cuadrados de las velocidades individuales.
          </p>

          <Formula
            expression={String.raw`v_{rms} = \sqrt{\frac{3RT}{M}}`}
            description="Velocidad cuadrática media molecular"
            calculatorId="teoria_cinetica_de_los_gases-grupo-1"
            definitions={teoria_cinetica_de_los_gasesDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Energía cinética promedio", expression: String.raw`\langle E_k \rangle = \frac{3}{2}k_BT` },
              { description: "Energía interna gas ideal", expression: String.raw`U = \frac{3}{2}nRT` },
              { description: "Presión cinética", expression: String.raw`P = \frac{1}{3}\frac{Nmv_{rms}^2}{V}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>v_rms: Velocidad cuadrática media (m/s)</li>
            <li>R: Constante universal de gases = 8.314 J/(mol·K)</li>
            <li>T: Temperatura absoluta (K)</li>
            <li>M: Masa molar (kg/mol)</li>
          </ul>

          <Important>
            <p>Velocidades típicas a 25°C (298K):</p>
            <ul>
              <li>H₂ (M=2g/mol): v_rms = 1927 m/s</li>
              <li>He (M=4g/mol): v_rms = 1363 m/s</li>
              <li>N₂ (M=28g/mol): v_rms = 515 m/s</li>
              <li>O₂ (M=32g/mol): v_rms = 482 m/s</li>
              <li>CO₂ (M=44g/mol): v_rms = 411 m/s</li>
            </ul>
            <p>Moléculas ligeras se mueven más rápido que pesadas a misma temperatura</p>
          </Important>
        </Concept>

        <Concept title="Distribución de Maxwell-Boltzmann">
          <p>
            Las moléculas no tienen todas la misma velocidad, sino una distribución continua descrita por la función de Maxwell-Boltzmann.
          </p>
          
          <p>Velocidades características:</p>
          <ul>
            <li>Velocidad más probable v_p = √(2RT/M): Máximo de la distribución</li>
            <li>Velocidad media v_media = √(8RT/(πM)): Promedio aritmético</li>
            <li>Velocidad cuadrática media v_rms = √(3RT/M): Usada en cálculos energéticos</li>
          </ul>
          
          <p>Relación: v_p : v_media : v_rms = 1 : 1.128 : 1.225</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Energía Cinética y Temperatura">
        <Concept title="Energía Cinética Promedio">
          <Formula
            expression={String.raw`\langle E_k \rangle = \frac{3}{2}k_BT`}
            description="Energía cinética traslacional promedio por molécula"
            calculatorId="teoria_cinetica_de_los_gases-grupo-1"
            definitions={teoria_cinetica_de_los_gasesDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>k_B: Constante de Boltzmann = 1.381 × 10⁻²³ J/K</li>
            <li>T: Temperatura absoluta (K)</li>
          </ul>

          <p>Esta relación establece que:</p>
          <ul>
            <li>Energía cinética es proporcional a temperatura absoluta</li>
            <li>Es independiente de masa molecular o naturaleza del gas</li>
            <li>Todas las moléculas a misma T tienen igual energía cinética promedio</li>
            <li>A 0K (cero absoluto), energía cinética sería cero (movimiento cesa)</li>
          </ul>
        </Concept>

        <Concept title="Energía Interna de Gas Ideal">
          <Formula
            expression={String.raw`U = \frac{3}{2}nRT`}
            description="Energía interna total gas ideal monoatómico"
            calculatorId="teoria_cinetica_de_los_gases-grupo-1"
            definitions={teoria_cinetica_de_los_gasesDefinitions}
            exercises={exercises}
          />

          <p>Para gases monoatómicos (He, Ne, Ar), energía interna es solo cinética traslacional (3 grados libertad).</p>
          
          <p>Para gases diatómicos (N₂, O₂, H₂) a temperatura ambiente:</p>
          <ul>
            <li>U = (5/2)nRT: Incluye traslación (3) + rotación (2)</li>
            <li>A altas temperaturas: U = (7/2)nRT, incluye vibración (2)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Presión desde Perspectiva Cinética">
        <Concept title="Deducción de la Presión">
          <p>
            La presión es consecuencia macroscópica de colisiones moleculares microscópicas con las paredes del recipiente.
          </p>

          <Formula
            expression={String.raw`P = \frac{1}{3}\frac{Nmv_{rms}^2}{V}`}
            description="Presión cinética del gas"
            calculatorId="teoria_cinetica_de_los_gases-grupo-1"
            definitions={teoria_cinetica_de_los_gasesDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>N: Número total de moléculas</li>
            <li>m: Masa de una molécula (kg)</li>
            <li>v_rms: Velocidad cuadrática media (m/s)</li>
            <li>V: Volumen del recipiente (m³)</li>
          </ul>

          <p>Esta ecuación conecta con PV = nRT:</p>
          <ul>
            <li>Sustituyendo N = n×N_A y m = M/N_A</li>
            <li>Usando v_rms² = 3RT/M</li>
            <li>Se obtiene PV = nRT</li>
          </ul>
        </Concept>

        <Concept title="Frecuencia de Colisiones">
          <p>Número de colisiones por segundo de una molécula con paredes:</p>
          <p>Z_pared = (1/4) × n × v_media × A</p>
          
          <p>Donde:</p>
          <ul>
            <li>n: Densidad numérica (moléculas/m³)</li>
            <li>v_media: Velocidad media molecular</li>
            <li>A: Área de la pared (m²)</li>
          </ul>
          
          <p>Colisiones intermoleculares: Z = √2 × π × d² × n × v_media</p>
          <p>Donde d es diámetro molecular (≈ 3×10⁻¹⁰ m para N₂)</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos Prácticos">
        <Example 
          title="Ejemplo 1: Velocidad Molecular del Nitrógeno"
          problem="Calcula la velocidad cuadrática media de moléculas de N₂ a temperatura ambiente (25°C)."
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>T = 25°C = 298 K</li>
                <li>M_N₂ = 28 g/mol = 0.028 kg/mol</li>
                <li>R = 8.314 J/(mol·K)</li>
              </ul>
              
              <p>Solución:</p>
              <p>v_rms = √(3RT/M)</p>
              <p>v_rms = √(3 × 8.314 × 298 / 0.028)</p>
              <p>v_rms = √(265700) = 515 m/s</p>
              
              <p>Resultado: v_rms = 515 m/s ≈ 1850 km/h (más rápido que avión comercial)</p>
            </div>
          }
        />

        <Example 
          title="Ejemplo 2: Energía Cinética a Diferentes Temperaturas"
          problem="Compara la energía cinética promedio de moléculas a 0°C y 100°C."
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>T₁ = 0°C = 273 K</li>
                <li>T₂ = 100°C = 373 K</li>
                <li>k_B = 1.381 × 10⁻²³ J/K</li>
              </ul>
              
              <p>Solución:</p>
              <p>E_k1 = (3/2) × k_B × T₁ = 1.5 × 1.381×10⁻²³ × 273 = 5.65 × 10⁻²¹ J</p>
              <p>E_k2 = (3/2) × k_B × T₂ = 1.5 × 1.381×10⁻²³ × 373 = 7.73 × 10⁻²¹ J</p>
              
              <p>Relación: E_k2/E_k1 = 373/273 = 1.37</p>
              
              <p>Resultado: A 100°C, moléculas tienen 37% más energía cinética que a 0°C</p>
            </div>
          }
        />

        <Example 
          title="Ejemplo 3: Presión Cinética"
          problem="Un recipiente de 1L contiene 6.022×10²² moléculas de He a 300K. Calcula la presión usando teoría cinética."
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>V = 1 L = 0.001 m³</li>
                <li>N = 6.022×10²² moléculas (0.1 mol)</li>
                <li>M_He = 4 g/mol = 0.004 kg/mol</li>
                <li>m = M/N_A = 6.65×10⁻²⁷ kg</li>
                <li>T = 300 K</li>
              </ul>
              
              <p>Paso 1: Calcular v_rms</p>
              <p>v_rms = √(3RT/M) = √(3×8.314×300/0.004) = 1367 m/s</p>
              
              <p>Paso 2: Calcular presión</p>
              <p>P = (1/3) × N × m × v_rms² / V</p>
              <p>P = (1/3) × 6.022×10²² × 6.65×10⁻²⁷ × (1367)² / 0.001</p>
              <p>P = 249300 Pa ≈ 2.49 atm</p>
              
              <p>Verificación con PV=nRT: P = 0.1×8.314×300/0.001 = 249420 Pa ✓</p>
            </div>
          }
        />
      </TheorySection>

      <TheorySection title="Aplicaciones de la Teoría Cinética">
        <Concept title="Fenómenos Explicados">
          <ul>
            <li>Difusión: Mezcla espontánea de gases por movimiento molecular aleatorio</li>
            <li>Efusión: Escape de gas por orificio pequeño, Ley de Graham: tasa ∝ 1/√M</li>
            <li>Viscosidad: Transporte de momento por colisiones moleculares, aumenta con T</li>
            <li>Conductividad térmica: Transporte de energía cinética entre zonas diferentes temperatura</li>
            <li>Presión parcial: Ley de Dalton explicada por independencia colisiones moleculares</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2><span className="emoji-icon">🔧</span> Aplicaciones en la Vida Real</h2>
        
        <div className="theory-subsection">
          <h3>Efusión Graham separación isótopos uranio UF₆ difusión gaseosa enriquecimiento U-235 0.7% reactor 3% bomba 90% cascada 3000 etapas</h3>
          <p>Ley Graham efusión tasa inversamente proporcional raíz cuadrada masa molar r₁/r₂=√(M₂/M₁) aplicación separación isótopos uranio hexafluoruro UF₆ gas sublimación 56°C membrana porosa barrera tamaño poro molecular UF₆ masa molar U-235 349g/mol U-238 352g/mol diferencia 0.86% factor separación α=√(352/349)=1.0043 enriquecimiento 0.43% etapa única cascada 3000etapas serie paralelo concentración U-235 natural 0.711% reactor nuclear 3-5% bomba atómica 90% proceso Gaseous Diffusion Plant Oak Ridge Manhattan Project 1945 consumo energía 2400kWh/kgU SWU reemplazo centrifugación ultracentrífuga 50-100m/s fuerza centrífuga eficiencia 50veces mayor consumo 50kWh/kgU.</p>
        </div>

        <div className="theory-subsection">
          <h3>Difusión molecular gases mezcla espontánea aire perfume distancia 10m tiempo 3minutos velocidad efectiva 0.05m/s camino libre medio colisiones</h3>
          <p>Difusión molecular proceso transporte masa movimiento aleatorio térmico moléculas mezcla espontánea gases aire perfume liberación moléculas orgánicas volátiles limoneno linalool masa molar 150g/mol velocidad cuadrática media 300m/s temperatura ambiente distancia recorrida 10metros tiempo observado 3minutos velocidad efectiva 10/180=0.05m/s 6000veces menor v_rms explicación camino libre medio λ=1/(√2πd²n) diámetro molecular d=4×10⁻¹⁰m densidad numérica n=2.5×10²⁵moléculas/m³ λ=68nm colisiones frecuencia 10⁹/s zigzag aleatorio desplazamiento neto lento Ley Fick J=-D(dC/dx) coeficiente difusión D=10⁻⁵m²/s aire aplicación mezcla gases industria química ventilación detección fugas gas natural mercaptano odorizante seguridad.</p>
        </div>

        <div className="theory-subsection">
          <h3>Viscosidad gases transporte momento colisiones moleculares aumenta temperatura √T contrario líquidos coeficiente viscosidad aire 1.8×10⁻⁵Pa·s</h3>
          <p>Viscosidad gases propiedad transporte momento lineal colisiones moleculares capa fluido velocidad diferente intercambio moléculas transferencia momento fricción interna resistencia flujo teoría cinética η∝√(mT)/(σ²) masa molecular m temperatura T sección colisión σ² predicción aumento viscosidad temperatura √T contrario líquidos disminución enlaces intermoleculares debilitados aire 20°C η=1.81×10⁻⁵Pa·s 100°C η=2.18×10⁻⁵Pa·s aumento 20% aplicación aerodinámica número Reynolds Re=ρvL/η flujo laminar turbulento transición Re=2300 diseño ductos ventilación lubricación gases cojinetes aire turbomáquinas medición viscosímetro capilar Ostwald rotacional.</p>
        </div>

        <div className="theory-subsection">
          <h3>Conductividad térmica gases transporte energía cinética colisiones λ∝√T independiente presión rango amplio aislamiento vacío termos criogenia</h3>
          <p>Conductividad térmica gases mecanismo transporte energía cinética colisiones moleculares región alta temperatura moléculas rápidas energéticas colisiones moléculas frías transferencia energía flujo calor gradiente temperatura Ley Fourier q=-λ(dT/dx) teoría cinética λ=(15/4)η(R/M) viscosidad η constante gases R masa molar M predicción λ∝√T independiente presión rango 0.01-100atm presión muy baja camino libre medio comparable dimensiones recipiente conductividad reducida aislamiento vacío termos Dewar criogenia aire 20°C λ=0.026W/(m·K) helio λ=0.15W/(m·K) 6veces mayor masa ligera velocidad alta aplicación aislamiento térmico ventanas doble vidrio argón λ=0.016W/(m·K) inferior aire aerogel λ=0.013W/(m·K) sólido poroso 99%vacío.</p>
        </div>

        <div className="theory-subsection">
          <h3>Espectroscopía infrarrojo moléculas diatómicas vibración cuantizada energía rotacional traslacional temperatura ambiente población niveles Boltzmann</h3>
          <p>Espectroscopía infrarrojo absorción radiación electromagnética 2.5-25μm moléculas diatómicas HCl CO N₂ O₂ modos vibración cuantizados energía E_v=(v+1/2)ħω número cuántico v=0,1,2... frecuencia angular ω=√(k/μ) constante fuerza k masa reducida μ=m₁m₂/(m₁+m₂) rotación cuantizada E_J=J(J+1)ħ²/(2I) momento inercia I temperatura ambiente 300K energía térmica k_B T=4.14×10⁻²¹J población niveles Boltzmann N_v/N₀=exp(-E_v/k_B T) estado fundamental v=0 94% primer excitado v=1 6% transición v=0→1 absorción IR espectro bandas P Q R ramas rotacionales aplicación análisis químico cualitativo cuantitativo atmósfera CO₂ absorción 15μm efecto invernadero calentamiento global concentración 280ppm preindustrial 420ppm actual aumento 50%.</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2><span className="emoji-icon">📜</span> Contexto Histórico</h2>
        
        <div className="theory-subsection">
          <h3>1738 Daniel Bernoulli Hydrodynamica primer modelo cinético gases presión colisiones moleculares paredes recipiente adelantado siglo ignorado</h3>
          <p>Daniel Bernoulli matemático físico suizo 1738 publicación Hydrodynamica sección dedicada propiedades gases primer modelo cinético molecular historia presión resultado colisiones numerosas partículas pequeñas movimiento rápido paredes recipiente frecuencia colisiones proporcional velocidad inversamente volumen explicación cuantitativa Ley Boyle P∝1/V temperatura constante trabajo adelantado época científicos contemporáneos rechazaron teoría calorico sustancia material fluido calor dominante siglo XVIII XIX olvidado redescubrimiento 1850s Clausius Maxwell reconocimiento póstumo pionero teoría cinética contribución mecánica fluidos ecuación Bernoulli presión hidrodinámica conservación energía.</p>
        </div>

        <div className="theory-subsection">
          <h3>1857 Rudolf Clausius desarrollo teoría cinética velocidad media molecular 500m/s temperatura ambiente camino libre medio colisiones frecuencia distribución</h3>
          <p>Rudolf Clausius físico alemán 1857 artículo Über die Art der Bewegung welche wir Wärme nennen naturaleza movimiento llamamos calor desarrollo cuantitativo teoría cinética gases cálculo velocidad media molecular temperatura ambiente 461m/s oxígeno comparable velocidad sonido 343m/s aire introducción concepto camino libre medio λ distancia promedio moléculas colisiones sucesivas frecuencia colisiones 10⁹/s explicación propiedades transporte difusión viscosidad conductividad térmica problema velocidad alta difusión lenta perfume resolución colisiones camino zigzag aleatorio desplazamiento neto pequeño contribución fundamental ecuación Clausius-Clapeyron presión vapor temperatura base termodinámica moderna.</p>
        </div>

        <div className="theory-subsection">
          <h3>1860 James Clerk Maxwell distribución velocidades función probabilidad estadística velocidades características más probable media cuadrática media</h3>
          <p>James Clerk Maxwell físico escocés 1860 artículo Illustrations of the Dynamical Theory of Gases ilustraciones teoría dinámica gases introducción función distribución velocidades probabilidad f(v) estadística velocidades moleculares gas equilibrio térmico distribución Maxwell f(v)=4π(m/(2πk_B T))^(3/2)v²exp(-mv²/(2k_B T)) tres velocidades características más probable v_p=√(2k_B T/m) media v̄=√(8k_B T/(πm)) cuadrática media v_rms=√(3k_B T/m) aplicación cálculo propiedades promedio energía cinética presión transporte método revolucionario estadística física antes mecánica cuántica verificación experimental Otto Stern 1920 haz molecular velocímetro selector velocidades distribución Maxwell confirmada.</p>
        </div>

        <div className="theory-subsection">
          <h3>1872 Ludwig Boltzmann ecuación transporte H-teorema irreversibilidad entropía conexión mecánica estadística termodinámica Segunda Ley microscopía</h3>
          <p>Ludwig Boltzmann físico austriaco 1872 ecuación Boltzmann transporte función distribución f(r,v,t) espacio fase posición velocidad tiempo derivación distribución Maxwell equilibrio termodinámica H-teorema demostración función H=-∫f ln f dv decrece tiempo irreversibilidad microscópica conexión entropía termodinámica S=-k_B∫f ln f mecánica estadística interpretación Segunda Ley nivel molecular equilibrio distribución máxima entropía polémica reversibilidad paradoja Loschmidt inversión temporal Zermelo recurrencia Poincaré respuesta Boltzmann fluctuaciones probabilidad pequeña escala tiempo enorme colapso nervioso suicidio 1906 reconocimiento póstumo tumba Viena inscripción S=k ln W entropía probabilidad microestados.</p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span className="emoji-icon">💡</span> Curiosidades y Anécdotas</h2>
        
        <div className="theory-subsection">
          <h3>Velocidades moleculares supersónicas hidrógeno 1920m/s helio 1360m/s nitrógeno 515m/s temperatura ambiente 25°C más rápido avión militar sonido 343m/s</h3>
          <p>Velocidades moleculares gases temperatura ambiente sorprendentemente altas calculadas v_rms=√(3RT/M) hidrógeno M=2g/mol v_rms=1920m/s helio M=4g/mol 1360m/s nitrógeno M=28g/mol 515m/s oxígeno M=32g/mol 482m/s todas supersónicas superior velocidad sonido aire 343m/s 20°C factor 1.5-5.6veces avión militar F-22 Raptor velocidad máxima Mach 2.25=770m/s subsónico molecular paradoja difusión lenta perfume explicación camino libre medio colisiones frecuencia 10⁹/s zigzag aleatorio desplazamiento neto pequeño velocidad efectiva 0.05m/s 10000veces menor v_rms aplicación propulsión ionica escape velocidad iones Xenón motor Hall 30km/s empuje específico alto consumo combustible bajo sondas espaciales Deep Space 1.</p>
        </div>

        <div className="theory-subsection">
          <h3>Camino libre medio aire 68nanometros colisión frecuencia 10⁹/s diámetro molecular 4Å distancia 170veces zigzag Browniano difusión</h3>
          <p>Camino libre medio λ distancia promedio molécula recorre colisiones sucesivas aire condiciones normales λ=k_B T/(√2πd²P) diámetro molecular aire d=3.7×10⁻¹⁰m=3.7Å presión 101325Pa temperatura 293K λ=68nm=680Å relación λ/d=680/3.7=184 molécula recorre 184veces diámetro propio libre colisión frecuencia Z=v_rms/λ velocidad 515m/s nitrógeno Z=7.6×10⁹colisiones/segundo intervalo 0.13nanosegundos colisión movimiento zigzag aleatorio Browniano partícula pequeña polen agua microscopio Robert Brown 1827 Einstein 1905 teoría matemática desplazamiento cuadrático medio x²=2Dt coeficiente difusión D tiempo t experimento Perrin 1908 verificación átomos existencia Nobel 1926.</p>
        </div>

        <div className="theory-subsection">
          <h3>Teoría cinética predicción calor específico gases monoatómicos C_v=3R/2 diatómicos 5R/2 vibración 7R/2 temperatura cuantización explicación</h3>
          <p>Calor específico volumen constante C_v capacidad calorífica molar energía requerida aumentar temperatura 1K teoría cinética clásica equipartición energía (1/2)k_B T grado libertad gas monoatómico He Ne Ar 3grados libertad traslación x y z C_v=(3/2)R=12.5J/(mol·K) experimental 12.5 acuerdo perfecto diatómico N₂ O₂ H₂ 5grados libertad traslación 3 rotación 2 C_v=(5/2)R=20.8J/(mol·K) experimental 20.8 temperatura ambiente problema vibración 2grados libertad cinética potencial C_v=(7/2)R=29.1J/(mol·K) experimental 20.8 discrepancia catástrofe ultravioleta calor específico solución cuantización niveles energía vibracionales Planck Einstein 1900-1905 energía E=ħω cuantos temperatura ambiente k_B T menor ħω vibración no excitada población Boltzmann alta temperatura vibración activada C_v→7R/2 triunfo mecánica cuántica.</p>
        </div>

        <div className="theory-subsection">
          <h3>Movimiento Browniano verificación experimental existencia átomos moléculas Einstein 1905 teoría Perrin 1908 medición constante Avogadro Nobel</h3>
          <p>Movimiento Browniano observación Robert Brown 1827 botánico escocés microscopio polen agua partículas pequeñas 1μm movimiento errático continuo zigzag aleatorio inexplicable época teoría vitalista fuerza vida descartada partículas inorgánicas igual comportamiento 1905 Albert Einstein artículo annus mirabilis teoría matemática Browniano colisiones moleculares agua partícula visible desplazamiento cuadrático medio x²=2Dt coeficiente difusión D=k_B T/(6πηr) radio partícula r viscosidad η temperatura T predicción cuantitativa medible 1908 Jean Perrin físico francés verificación experimental cuidadosa medición desplazamientos partículas látex microscopio determinación constante Avogadro N_A=6.02×10²³/mol constante Boltzmann k_B=R/N_A prueba definitiva existencia átomos moléculas realidad física escépticos Ostwald Mach conversión Premio Nobel Física 1926.</p>
        </div>
      </div>

      <div className="theory-summary-section">
        <h2><span className="emoji-icon">📋</span> Resumen de Conceptos Clave</h2>
        
        <ul className="key-points-list">
          <li>Teoría cinética: modelo microscópico gases moléculas numerosas movimiento aleatorio colisiones elásticas sin interacciones volumen despreciable explica propiedades macroscópicas presión temperatura</li>
          <li>Velocidad cuadrática media v_rms=√(3RT/M): velocidad típica molecular proporcional √T inversamente √M hidrógeno 1920m/s nitrógeno 515m/s 25°C supersónicas distribución Maxwell-Boltzmann</li>
          <li>Energía cinética temperatura: E_k=(3/2)k_B T proporcional temperatura absoluta independiente masa molecular todas moléculas misma T igual energía promedio energía interna U=(3/2)nRT gas monoatómico</li>
          <li>Presión cinética P=(1/3)Nmv_rms²/V: colisiones moleculares paredes transferencia momento fuerza macroscópica conexión ecuación estado PV=nRT nivel microscópico</li>
          <li>Camino libre medio λ=68nm aire: distancia colisiones frecuencia 10⁹/s zigzag aleatorio difusión lenta viscosidad conductividad transporte propiedades dependencia temperatura √T</li>
          <li>Aplicaciones: efusión Graham separación isótopos difusión mezcla gases viscosidad aerodinámica conductividad aislamiento espectroscopía vibración rotación molecular química atmosférica</li>
        </ul>
      </div>
    </>
  );
};

export default TeoriaCineticaDeLosGasesTheory;