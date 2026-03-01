import { TheorySection, Concept, Important, Example, Formula } from '../../../components/TheoryV2';
import Latex from 'react-latex-next';

export const metadata = {
  titulo: "Campos Vectoriales",
  descripcion: "Campos que asignan un vector a cada punto del espacio",
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD'],
  isTheoryOnly: true
};

const CamposVectorialesTheory = () => {
  return (
    <>
      <TheorySection title="¿Qué es un Campo Vectorial?">
        <p>
          Un campo vectorial es una función que asigna un vector (magnitud y dirección) a cada punto del espacio y, posiblemente, del tiempo:
        </p>
        <div className="formula-container"><div className="formula-expression"><Latex>{'$\\mathbf{F}(x, y, z, t) = F_x \\mathbf{i} + F_y \\mathbf{j} + F_z \\mathbf{k}$'}</Latex></div></div>
        <p>
          Los campos vectoriales describen magnitudes físicas que tienen tanto magnitud como dirección en cada punto del espacio.
        </p>
      </TheorySection>

      <TheorySection title="Ejemplos de Campos Vectoriales">
        <Concept title="Campo Eléctrico" variant="detailed">
          <div className="detailed-content">
            <p>
              El campo eléctrico describe la fuerza por unidad de carga:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\mathbf{E}(\\mathbf{r}) = \\frac{kQ}{r^2} \\hat{\\mathbf{r}}$'}</Latex></div></div>
            <ul>
              <li>Unidades: N/C o V/m</li>
              <li>Fuente: Cargas eléctricas</li>
              <li>Relación: E = -∇V (deriva de potencial escalar)</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Campo Magnético" variant="detailed">
          <div className="detailed-content">
            <p>
              El campo magnético describe fuerzas sobre cargas en movimiento:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\mathbf{B}(\\mathbf{r})$'}</Latex></div></div>
            <ul>
              <li>Unidades: Tesla (T) o Gauss (G)</li>
              <li>Fuente: Corrientes eléctricas, imanes</li>
              <li>Propiedad: <Latex>{'$\\nabla\\cdot\\mathbf{B} = 0$'}</Latex> (no hay monopolos magnéticos)</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Campo Gravitatorio" variant="detailed">
          <div className="detailed-content">
            <p>
              El campo gravitatorio describe la fuerza gravitatoria por unidad de masa:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\mathbf{g}(\\mathbf{r}) = -\\frac{GM}{r^2} \\hat{\\mathbf{r}}$'}</Latex></div></div>
            <ul>
              <li>Unidades: m/s² o N/kg</li>
              <li>Fuente: Masa</li>
              <li>Relación: <Latex>{'$\\mathbf{g} = -\\nabla\\Phi$'}</Latex> (deriva de potencial gravitatorio)</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Campo de Velocidades" variant="detailed">
          <div className="detailed-content">
            <p>
              En mecánica de fluidos, describe la velocidad en cada punto:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\mathbf{v}(x, y, z, t)$'}</Latex></div></div>
            <ul>
              <li>Unidades: m/s</li>
              <li>Aplicación: Dinámica de fluidos</li>
              <li>Tipos: Flujo laminar, turbulento</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Operadores Diferenciales en Campos Vectoriales">
        <Concept title="Divergencia (∇·F)" variant="detailed">
          <div className="detailed-content">
            <p>
              La divergencia mide cuánto "fluye" el campo desde un punto (fuente o sumidero):
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\nabla\\cdot\\mathbf{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$'}</Latex></div></div>
            <p>Interpretación física:</p>
            <ul>
              <li><Latex>{'$\\nabla\\cdot\\mathbf{F} > 0$'}</Latex> Fuente (el campo diverge)</li>
              <li><Latex>{'$\\nabla\\cdot\\mathbf{F} < 0$'}</Latex> Sumidero (el campo converge)</li>
              <li><Latex>{'$\\nabla\\cdot\\mathbf{F} = 0$'}</Latex> Campo solenoidal (sin fuentes)</li>
            </ul>
            <p>Ejemplos:</p>
            <ul>
              <li>Ley de Gauss eléctrica: <Latex>{'$\\nabla\\cdot\\mathbf{E} = \\frac{\\rho}{\\varepsilon_0}$'}</Latex></li>
              <li>Ley de Gauss magnética: <Latex>{'$\\nabla\\cdot\\mathbf{B} = 0$'}</Latex></li>
              <li>Continuidad: <Latex>{'$\\nabla\\cdot\\mathbf{v} = 0$'}</Latex> (fluido incompresible)</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Rotacional (∇×F)" variant="detailed">
          <div className="detailed-content">
            <p>
              El rotacional mide la "circulación" o "vorticidad" del campo:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\nabla\\times\\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ F_x & F_y & F_z \\end{vmatrix}$'}</Latex></div></div>
            <p>Interpretación física:</p>
            <ul>
              <li><Latex>{'$\\nabla\\times\\mathbf{F} \\neq \\mathbf{0}$'}</Latex> Campo rotacional (tiene circulación)</li>
              <li><Latex>{'$\\nabla\\times\\mathbf{F} = \\mathbf{0}$'}</Latex> Campo irrotacional o conservativo</li>
            </ul>
            <p>Ejemplos:</p>
            <ul>
              <li>Ley de Faraday: <Latex>{'$\\nabla\\times\\mathbf{E} = -\\frac{\\partial\\mathbf{B}}{\\partial t}$'}</Latex></li>
              <li>Ley de Ampère-Maxwell: <Latex>{'$\\nabla\\times\\mathbf{B} = \\mu_0\\mathbf{J} + \\mu_0\\varepsilon_0\\frac{\\partial\\mathbf{E}}{\\partial t}$'}</Latex></li>
              <li>Vorticidad: <Latex>{'$\\boldsymbol{\\omega} = \\nabla\\times\\mathbf{v}$'}</Latex> (en fluidos)</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Laplaciano Vectorial (∇²F⃗)" variant="detailed">
          <div className="detailed-content">
            <p>
              El Laplaciano de un campo vectorial se aplica componente por componente:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\nabla^2\\mathbf{F} = (\\nabla^2 F_x)\\mathbf{i} + (\\nabla^2 F_y)\\mathbf{j} + (\\nabla^2 F_z)\\mathbf{k}$'}</Latex></div></div>
            <p>
              También se puede expresar como:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\nabla^2\\mathbf{F} = \\nabla(\\nabla\\cdot\\mathbf{F}) - \\nabla\\times(\\nabla\\times\\mathbf{F})$'}</Latex></div></div>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Teoremas Fundamentales">
        <Concept title="Teorema de la Divergencia (Gauss)" variant="detailed">
          <div className="detailed-content">
            <p>
              Relaciona la integral de volumen de la divergencia con el flujo a través de la superficie:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\iiint_V (\\nabla\\cdot\\mathbf{F}) \\, dV = \\iint_S \\mathbf{F}\\cdot\\hat{\\mathbf{n}} \\, dS$'}</Latex></div></div>
            <p>Interpretación: El flujo total que sale de un volumen es igual a la suma de todas las fuentes internas.</p>
            <p>Aplicaciones:</p>
            <ul>
              <li>Ley de Gauss: Flujo eléctrico y carga encerrada</li>
              <li>Conservación de masa: En fluidos</li>
              <li>Flujo de calor: En termodinámica</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Teorema de Stokes" variant="detailed">
          <div className="detailed-content">
            <p>
              Relaciona la integral de superficie del rotacional con la circulación en el borde:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\iint_S (\\nabla\\times\\mathbf{F})\\cdot\\hat{\\mathbf{n}} \\, dS = \\oint_C \\mathbf{F}\\cdot d\\mathbf{r}$'}</Latex></div></div>
            <p>Interpretación: La circulación alrededor de una curva es igual al flujo del rotacional a través de cualquier superficie que tenga esa curva como borde.</p>
            <p>Aplicaciones:</p>
            <ul>
              <li>Ley de Faraday: Inducción electromagnética</li>
              <li>Ley de Ampère: Campo magnético y corriente</li>
              <li>Circulación en fluidos: Teorema de Kelvin</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Teorema del Gradiente" variant="detailed">
          <div className="detailed-content">
            <p>
              Para campos conservativos (∇×F = 0), existe un potencial escalar φ tal que:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\mathbf{F} = -\\nabla\\varphi$'}</Latex></div></div>
            <p>
              Y la integral de línea depende solo de los extremos:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\int_A^B \\mathbf{F}\\cdot d\\mathbf{r} = \\varphi(A) - \\varphi(B)$'}</Latex></div></div>
            <p>Consecuencia: El trabajo en un campo conservativo es independiente del camino.</p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Clasificación de Campos Vectoriales">
        <Concept title="Campos Conservativos" variant="detailed">
          <div className="detailed-content">
            <p>
              Un campo es conservativo si:
            </p>
            <ul>
              <li><Latex>{'$\\nabla\\times\\mathbf{F} = \\mathbf{0}$'}</Latex> (irrotacional)</li>
              <li>Existe φ: <Latex>{'$\\mathbf{F} = -\\nabla\\varphi$'}</Latex></li>
              <li>Trabajo independiente del camino</li>
              <li>Circulación cerrada nula: <Latex>{'$\\oint \\mathbf{F}\\cdot d\\mathbf{r} = 0$'}</Latex></li>
            </ul>
            <p>Ejemplos: Campo gravitatorio, campo eléctrico estático</p>
          </div>
        </Concept>

        <Concept title="Campos Solenoidales" variant="detailed">
          <div className="detailed-content">
            <p>
              Un campo es solenoidal si:
            </p>
            <ul>
              <li><Latex>{'$\\nabla\\cdot\\mathbf{F} = 0$'}</Latex> (sin divergencia)</li>
              <li>Existe A: <Latex>{'$\\mathbf{F} = \\nabla\\times\\mathbf{A}$'}</Latex> (potencial vectorial)</li>
              <li>Flujo neto cero a través de superficies cerradas</li>
              <li>Líneas de campo cerradas o infinitas</li>
            </ul>
            <p>Ejemplos: Campo magnético, campo de velocidades incompresible</p>
          </div>
        </Concept>

        <Concept title="Descomposición de Helmholtz" variant="detailed">
          <div className="detailed-content">
            <p>
              Cualquier campo vectorial suficientemente suave puede descomponerse en:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\mathbf{F} = -\\nabla\\varphi + \\nabla\\times\\mathbf{A}$'}</Latex></div></div>
            <p>Donde:</p>
            <ul>
              <li><Latex>{'$-\\nabla\\varphi$'}</Latex> Parte irrotacional (conservativa)</li>
              <li><Latex>{'$\\nabla\\times\\mathbf{A}$'}</Latex> Parte solenoidal (sin divergencia)</li>
            </ul>
            <p>
              Esto es fundamental en electromagnetismo y mecánica de fluidos.
            </p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Líneas de Campo">
        <Concept title="Definición" variant="detailed">
          <div className="detailed-content">
            <p>
              Las líneas de campo son curvas tangentes al campo vectorial en cada punto:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\frac{d\\mathbf{r}}{ds} = \\frac{\\mathbf{F}(\\mathbf{r})}{|\\mathbf{F}(\\mathbf{r})|}$'}</Latex></div></div>
            <p>Propiedades:</p>
            <ul>
              <li>Tangentes: Al campo en cada punto</li>
              <li>Densidad: Proporcional a la magnitud del campo</li>
              <li>No se cruzan: En campos únicos</li>
              <li>Cerradas o infinitas: En campos solenoidales</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones en Física">
        <ul>
          <li>Electromagnetismo: Campos E⃗ y B⃗, ecuaciones de Maxwell</li>
          <li>Gravitación: Campo gravitatorio, mareas</li>
          <li>Mecánica de fluidos: Campo de velocidades, vorticidad</li>
          <li>Mecánica clásica: Fuerzas, momento angular</li>
          <li>Termodinámica: Flujo de calor, corrientes</li>
          <li>Óptica: Vector de Poynting, intensidad</li>
          <li>Relatividad: Cuadrivectores, tensores</li>
        </ul>
      </TheorySection>

      <TheorySection title="Identidades Vectoriales Importantes">
        <Important>
          <p>Identidades fundamentales:</p>
          <ul>
            <li>∇×(∇φ) = 0: El rotacional del gradiente es cero</li>
            <li>∇·(∇×A) = 0: La divergencia del rotacional es cero</li>
            <li>∇×(∇×A) = ∇(∇·A) - ∇²A: Identidad del doble rotacional</li>
            <li>∇·(φA) = φ(∇·A) + A·∇φ: Regla del producto</li>
            <li>∇×(φA) = φ(∇×A) + (∇φ)×A: Regla del producto</li>
          </ul>
        </Important>
      </TheorySection>

      <div className="theory-applications-section">
        <h3>🔬 Aplicaciones Avanzadas Campos Vectoriales</h3>
        
        <h4>Electrodinámica Clásica Campos E B</h4>
        <p>Ecuaciones Maxwell descripción completa electromagnetismo ley Gauss eléctrica ∇·E=ρ/ε₀ densidad carga volumétrica ρ=10⁻¹²-10⁶ C/m³ rango materiales vacío-conductores permitividad ε₀=8.854×10⁻¹² F/m constante universal ley Gauss magnética ∇·B=0 inexistencia monopolos magnéticos campo solenoidal líneas cerradas potencial vectorial A tal B=∇×A gauge transformations libertad gauge Coulomb ∇·A=0 Lorenz ∇·A+(1/c²)(∂φ/∂t)=0 ley Faraday inducción electromagnética ∇×E=-∂B/∂t fem inducida transformadores generadores eléctricos motor-generador principio reversibilidad eficiencias 85-98% pérdidas cobre hierro corrientes Foucault eddy currents aplicaciones industriales tratamiento térmico inducción hornos fusión metales temperaturas 1,500-3,000°C potencia 100 kW-100 MW acero-aluminio-cobre-titanio costos operación €50-€200/tonelada procesada ley Ampère-Maxwell ∇×B=μ₀J+μ₀ε₀(∂E/∂t) corriente conducción J densidad A/m² desplazamiento Maxwell término fundamental propagación ondas electromagnéticas vacío c=1/√(μ₀ε₀)=299,792,458 m/s velocidad luz exacta definición metro SI desde 1983 ondas planas soluciones E=E₀exp[i(k·r-ωt)] vector onda k=2π/λ frecuencia angular ω=2πf polarización lineal-circular-elíptica estados fotón quantum electrodynamics QED.</p>

        <h4>Dinámica Fluidos Campo Velocidades v</h4>
        <p>Campo velocidades fluido v(r,t) descripción Euleriana partículas fijas observador externo contraste Lagrangiana seguimiento partículas individuales trayectorias ecuación continuidad conservación masa ∂ρ/∂t+∇·(ρv)=0 fluido incompresible ρ=constante simplificación ∇·v=0 divergencia nula volumen conservado aplicaciones agua líquidos densidad 1,000 kg/m³ variación &lt;1% presiones ordinarias compresibilidad κ=10⁻⁹-10⁻¹⁰ Pa⁻¹ ecuación Navier-Stokes momento lineal fluido viscoso ρ(∂v/∂t+(v·∇)v)=-∇P+μ∇²v+f presión P viscosidad dinámica μ=10⁻³-10³ Pa·s rango agua-miel fuerzas externas f gravedad-electromagnéticas número Reynolds Re=ρvL/μ adimensional caracteriza régimen flujo laminar Re&lt;2,300 tubos transición Re=2,300-4,000 turbulento Re&gt;4,000 vorticidad ω=∇×v rotacional campo velocidades torbellinos vórtices ciclones tornados huracanes estructura intensidad máxima EF5 tornado velocidades &gt;300 km/h presión central 850-900 hPa daños catastróficos pérdidas US$1,000M-US$10,000M eventos individuales modelado CFD computational fluid dynamics RANS-LES-DNS resolución turbulencia escalas Kolmogorov η=(ν³/ε)^(1/4) submilímetro-micrométrico simulación directa DNS mallas 10⁹-10¹² puntos supercomputación petaflops aplicaciones diseño aeronaves Boeing-Airbus túneles viento virtuales reducción coste 70-90% pruebas físicas aceleración desarrollo 2-5 años ciclo producto.</p>

        <h4>Astrofísica Campo Gravitatorio Galáctico</h4>
        <p>Campo gravitatorio galaxia Vía Láctea distribución masa 10¹¹ M☉ masa solar bariónica estrellas-gas-polvo 15-20% materia oscura dark matter 80-85% invisible gravedad detectable rotación galáctica velocidad circular v(r)=√(GM(r)/r) función masa encerrada M(r) curvas rotación planas v≈220 km/s radios 5-20 kpc evidencia materia oscura halo esférico distribución Navarro-Frenk-White NFW ρ(r)=ρ₀/[(r/r_s)(1+r/r_s)²] escala característica r_s≈20 kpc experimentos detección directa XENON-LUX-PandaX sensibilidad 10⁻⁴⁷ cm² sección eficaz WIMP-nucleón masas 10-10,000 GeV/c² candidatos neutralino supersimetría axion QCD problema CP fuerte campo magnético galaxia B≈5 μG microgauss estructura espiral brazos concentración estrellas-gas-polvo formación estelar regiones HII nebulosas emisión recombinación hidrógeno temperatura 10,000 K ionización fotones UV estrellas masivas O-B vida corta 10-100 Ma supernovas SN Ia-II explosión colapso gravitacional remanentes SNR Cassiopeia A Crab Nebula expansión velocidades 5,000-15,000 km/s barrido medio interestelar ISM enriquecimiento metales elementos pesados C-N-O-Fe nucleosíntesis estelar big bang solo H-He-Li primordial generaciones estelares Population I-II-III metalicidades [Fe/H]=-3 a +0.5 dex edad universo 13.8 Ga formación primeras estrellas z≈20-30 redshift épocas reionización cosmic dawn.</p>

        <h4>Magnetohidrodinámica MHD Plasmas</h4>
        <p>Magnetohidrodinámica acoplamiento campos magnéticos fluidos conductores plasmas gas ionizado electrones-iones libres conductividad σ=10²-10⁷ S/m rango plasmas fríos-calientes temperatura 10⁴-10⁸ K corona solar viento solar tokamaks fusión nuclear aproximación MHD ecuación inducción ∂B/∂t=∇×(v×B)+η∇²B término convección difusión resistividad magnética η=1/(μ₀σ) número magnético Reynolds R_m=μ₀σvL cociente convección-difusión R_m≫1 líneas campo congeladas frozen-in teorema Alfvén plasma arrastra campo movimiento conjunto aplicaciones astrofísica sol eyecciones masa coronal CME velocidades 500-3,000 km/s masa 10¹²-10¹³ kg tormentas geomagnéticas índice Kp escala 0-9 impacto redes eléctricas sistemas GPS comunicaciones satélites evento Carrington 1859 mayor registrado auroras latitudes bajas Cuba-Hawái telegrafía interrumpida fusión termonuclear confinamiento magnético tokamak ITER International Thermonuclear Experimental Reactor construcción Cadarache Francia inversión €20,000M operación 2025-2035 objetivo Q≥10 ganancia energía plasma deuterio-tritio temperatura 150×10⁶ K diez veces núcleo solar campo magnético toroidal 5.3 T superconductores Nb₃Sn corriente 68 kA estabilidad MHD ballooning-kink modes control activo feedback sistemas real-time diagnósticos interferometría Thomson scattering radiación sincrotrón.</p>

        <h4>Óptica No Lineal Vector Poynting S</h4>
        <p>Vector Poynting S=E×H/μ₀ flujo energía electromagnética dirección propagación magnitud potencia área W/m² intensidad óptica I=&lt;S&gt; promedio temporal oscilación rápida frecuencia óptica f=10¹⁴-10¹⁵ Hz periodo T=femtosegundos 1-10 fs óptica no lineal intensidades altas I&gt;10⁶ W/cm² láseres pulsados mode-locked Q-switched duración pulsos picosegundos-femtosegundos energía mJ-J repetición kHz-MHz efectos no lineales generación segundo harmónico SHG χ^(2) materiales no-centrosimétricos KDP-LBO-BBO eficiencia conversión 30-70% aplicaciones láseres verdes 532 nm Nd:YAG fundamental 1,064 nm medicina dermatología oftalmología tratamientos quirúrgicos precisión micrométrica mezcla cuatro ondas FWM χ^(3) generación nuevas frecuencias espectroscopía CARS coherent anti-Stokes Raman resonancia molecular vibraciones identificación compuestos químicos drogas explosivos seguridad aeroportuaria militar auto-enfoque Kerr n=n₀+n₂I índice refracción intensidad-dependiente n₂=10⁻²⁰-10⁻¹⁶ m²/W colapso filamentación atmospheric propagation lightning control descargas rayos experimentos Teramobile project pulsos terawatt TW=10¹² W distancias kilómetros aplicaciones telecomunicaciones láser guiado beams solitones temporales balance dispersión-no linealidad propagación sin distorsión fibras ópticas comunicaciones transcontinentales capacidad Tbit/s wavelength division multiplexing WDM 40-160 canales λ=1.5 μm ventana telecomunicaciones atenuación mínima 0.2 dB/km distancias 50-100 km amplificadores EDFA erbium-doped fiber amplifier ganancia 20-40 dB.</p>
      </div>

      <div className="theory-history-section">
        <h3>📜 Historia Teoría Campos Vectoriales</h3>
        
        <h4>Siglo XIX: Orígenes Análisis Vectorial</h4>
        <p>Desarrollo análisis vectorial matemático representación magnitudes direccionales fuerza velocidad aceleración notación primitiva componentes cartesianas x-y-z William Rowan Hamilton cuaterniones 1843 extensión números complejos 4D álgebra no-conmutativa i²=j²=k²=ijk=-1 aplicaciones rotaciones espaciales precursor vectores modernos Josiah Willard Gibbs Yale University Hermann Grassmann Alemania independiente desarrollo álgebra vectorial 1880s notación moderna producto escalar A·B=|A||B|cosθ vectorial A×B perpendicular magnitud |A||B|sinθ operadores diferenciales gradiente ∇φ divergencia ∇·F rotacional ∇×F nabla símbolo operator differential vector cálculo vectorial fundamentos física matemática aplicaciones mecánica fluidos electromagnetismo óptica James Clerk Maxwell ecuaciones Maxwell electromagnetismo unificación electricidad magnetismo ondas electromagnéticas Treatise Electricity Magnetism 1873 formulación original 20 ecuaciones componentes simplificación posterior Oliver Heaviside notación vectorial moderna 4 ecuaciones ∇·E ∇·B ∇×E ∇×B forma compacta elegante propagación ondas luz naturaleza electromagnética predicción verificación Heinrich Hertz experimentos 1887 generación detección ondas radio frecuencias MHz confirmación teoría Maxwell revolucion comunicaciones inalámbricas Marconi telegrafia transatlántica 1901.</p>

        <h4>Siglo XX: Teoremas Fundamentales Análisis</h4>
        <p>George Green teorema Green 1828 integral curva cerrada área encerrada relación derivadas parciales ∮(Ldx+Mdy)=∬(∂M/∂x-∂L/∂y)dA aplicación circulación flujo plano Carl Friedrich Gauss teorema divergencia Gauss-Ostrogradsky extensión 3D volumen superficie cerrada ∭(∇·F)dV=∬F·n̂dS flujo campo vectorial interpretación física ley Gauss electromagnetismo carga encerrada flujo eléctrico ε₀∬E·dA=Q_enc aplicaciones capacitancia condensadores geometrías esféricas-cilíndricas-planas cálculo analítico diseño circuitos electrónicos George Gabriel Stokes teorema Stokes 1854 superficie curva borde ∬(∇×F)·n̂dS=∮F·dr circulación rotacional generalización Green 3D aplicación ley Faraday inducción electromagnética fem=-dΦ_B/dt flujo magnético variable generadores transformadores motores eléctricos industria energía conversión mecánica-eléctrica eficiencias modernas 92-98% mejora continua materiales superconductores alta temperatura YBCO-BiSCCO crítica 77-110 K nitrógeno líquido enfriamiento costo reducido aplicaciones limitadas cables transmisión limitadores corriente transformadores protección redes Henri Poincaré topología algebraic topology homología cohomología teoremas fundamentales conexión geometría análisis formas diferenciales exterior derivative d operador antisimétrico generalización gradiente-divergencia-rotacional formalismo moderno geometría diferencial relatividad general variedades Riemannianas.</p>

        <h4>Mediados Siglo XX: Electrodinámica Cuántica</h4>
        <p>Teoría campos cuánticos quantum field theory QFT partículas elementales campos operadores cuánticos creación-aniquilación bosones-fermiones estadísticas Bose-Einstein Fermi-Dirac principio exclusión Pauli electrodinámica cuántica QED Richard Feynman Julian Schwinger Sin-Itiro Tomonaga Nobel 1965 cálculo interacciones fotón-electrón diagramas Feynman representación gráfica procesos virtuales partículas intercambio momento-energía precisión extrema momento magnético electrón g-factor anomalía (g-2)/2=0.00115965218073 acuerdo teoría-experimento 12 cifras significativas mejor predicción física gauge theories simetría gauge local invariancia fase transformaciones U(1) electromagnetismo SU(2) fuerza débil SU(3) cromodinámica cuántica QCD quarks-gluones confinamiento hadrones protones-neutrones-piones estructura interna quarks up-down-strange-charm-bottom-top masas MeV-GeV escala electrodébil unificación Glashow-Weinberg-Salam Nobel 1979 modelo estándar física partículas bosón Higgs masa partículas descubrimiento LHC 2012 confirmación mecanismo ruptura simetría electrodébil TeV scale nueva física beyond Standard Model supersimetría extra dimensions teorías unificación gran unificada GUT energías 10¹⁶ GeV inaccesibles experimentalmente predicciones desintegración protón vida media &gt;10³⁴ años límites experimentales Super-Kamiokande Japón detector agua Cherenkov 50,000 toneladas.</p>

        <h4>Siglo XXI: Simulación Computacional Dinámica</h4>
        <p>Revolución computación científica simulación numérica campos vectoriales CFD computational fluid dynamics ANSYS-Fluent-OpenFOAM software comercial-open source mallas estructuradas-no estructuradas tetrahedral-hexahedral-prismática elementos 10⁶-10⁹ resolución geometrías complejas alas-turbinas-vehículos aerodinámica automotriz Formula-1 NASCAR drag coefficient C_d reducción 0.01 velocidad ganancia 5-10 km/h importancia competitiva inversión I+D €50M-€200M anual equipos top túneles viento escala 40-60% modelos precisión ±1% mediciones presión-velocidad PIV particle image velocimetry láser visualización flujo trazadores partículas μm diámetro processing imágenes velocidades instantáneas campos 2D-3D machine learning ML aplicación predicción turbulencia neural networks convolutional CNN recurrent RNN entrenamiento datos simulaciones DNS direct numerical simulation Reynolds altos Re=10⁴-10⁶ generalización configuraciones nuevas reducción costo computacional 100-1000x aceleración GPU graphics processing units CUDA-OpenCL frameworks NVIDIA-AMD tarjetas 10,000-100,000 cores parallelization masiva aplicaciones tiempo real control activo flujo feedback-feedforward sensores-actuadores MEMS micro-electro-mechanical systems integración superficie alas reducción resistencia 10-20% efficiency mejora consumo combustible aviación comercial 15-25% reducción emisiones CO₂ sostenibilidad ambiental objetivos IATA carbon-neutral growth 2020 net-zero 2050 tecnologías SAF sustainable aviation fuel biocombustibles sintéticos e-fuels hydrogen propulsión hidrógeno celdas combustible fuel cells PEMFC-SOFC eficiencias 50-60% retos almacenamiento criogénico 20 K presurizado 700 bar infraestructura producción verde electrólisis agua renovables solar-eólica costos target €2-€4/kg competitividad fósiles.</p>
      </div>

      <div className="theory-anecdotes-section">
        <h3>💡 Curiosidades Campos Vectoriales</h3>
        
        <h4>Paradoja Flujo Magnético Inexistente Monopolo</h4>
        <p>Campo magnético B siempre solenoidal ∇·B=0 divergencia nula contraste campo eléctrico ∇·E=ρ/ε₀ cargas monopolos fuentes puntuales implicación geométrica líneas campo magnético siempre cerradas bucles dipolos magnéticos momento m=IA área-corriente ejemplo barra imán N-S polos inseparables cortar mitad genera dos imanes completos N-S cada fragmento no aislamiento polos búsqueda experimental monopolos magnéticos Dirac 1931 predicción teórica carga magnética cuantización g=n(hc/2e) condición compatibilidad mecánica cuántica electromagnetismo experimentos búsqueda IceCube detector neutrinos Antártida sensibilidad 10⁻¹⁸ monopolos/cm²/sr/s rayos cósmicos ultra-alta energía UHECR &gt;10²⁰ eV partículas misterio origen fuentes candidatas AGN active galactic nuclei jets relativistas blazares aceleración Fermi shocks campos magnéticos intensos MoEDAL detector LHC dedicated monopole search captura trayectoria ionización extrema Z²=(g/e)²≈4,700 carga efectiva enorme stopping power materiales plásticos nucleares CR-39 análisis químico etching revelado tracks daño latente ninguna detección confirmada límites masa &gt;1-10 TeV implicaciones GUT grand unified theories ruptura simetría Big Bang inflación densidad monopolos problema cosmológico dilución expansión exponencial.</p>

        <h4>Efecto Venturi Flujo Incompresible Constricción</h4>
        <p>Ecuación Bernoulli conservación energía fluido incompresible sin viscosidad P+(1/2)ρv²+ρgh=constante presión-cinética-potencial línea corriente streamline efecto Venturi estrechamiento conducto velocidad aumenta presión disminuye aplicación medidores flujo Venturi-tube industria petroquímica agua-gas flow rate Q determinación diferencia presión δP=P₁-P₂ secciones conocidas A₁-A₂ cálculo Q=A₂√[2δP/(ρ(1-(A₂/A₁)²))] precisión ±1-2% calibración instalación ejemplo numérico tubería D₁=10 cm constricción D₂=5 cm agua ρ=1,000 kg/m³ velocidad entrada v₁=2 m/s continuidad A₁v₁=A₂v₂ conservación masa flujo volumétrico v₂=(A₁/A₂)v₁=(D₁/D₂)²v₁=(10/5)²×2=8 m/s cuatro veces mayor Bernoulli P₁+(1/2)ρv₁²=P₂+(1/2)ρv₂² diferencia presión δP=(1/2)ρ(v₂²-v₁²)=(1/2)×1,000×(64-4)=30,000 Pa=0.3 bar=30 kPa reducción significativa aplicaciones aviación sustentación alas perfil aerodinámico airfoil superficie superior convexa inferior plana velocidad aire mayor arriba presión menor lift force sustentación L=(1/2)ρv²A×C_L coeficiente sustentación C_L=0.5-1.5 dependiente ángulo ataque α optimización diseño CFD wind tunnel testing certificación FAA-EASA requisitos seguridad aeronavegabilidad.</p>

        <h4>Aurora Boreal Interacción Viento Solar Magnetosfera</h4>
        <p>Aurora boreal australis fenómeno luminoso polar latitudes &gt;60° emisión luz atmosfera superior altitudes 100-400 km origen viento solar plasma protones-electrones velocidad 300-800 km/s densidad 5-10 partículas/cm³ campo magnético interplanetario IMF 5-10 nT embedded frozen-in teorema Alfvén reconexión magnética magnetopausa boundary magnetosfera terrestre campo dipolar B≈50,000 nT ecuador 25,000 nT polos protección radiación cósmica cinturones Van Allen trapped particles energías keV-MeV tormenta geomagnética CME coronal mass ejection impacto magnetosfera compresión inyección partículas energéticas aceleración mecanismo Fermi pitch-angle scattering precipitación atmosfera ionización moléculas O₂-N₂ excitación electrónica transiciones emisión fotones wavelengths específicas O verde 557.7 nm rojo 630.0 nm N₂ azul-violeta 391.4-470.0 nm espectroscopía identificación composición intensidad aurora clasificación IBC International Brightness Coefficient escala I-IV brightness correlación actividad solar ciclo 11 años sunspot number máximo-mínimo variación factor 10-100 predicción space weather NOAA-SWPC alertas tormentas geomagnéticas G1-G5 impacto tecnología redes eléctricas transformadores saturación corrientes inducidas GIC geomagnetically induced currents daño permanente evento Quebec 1989 blackout 6 millones personas 9 horas reparación costosa prevención shutdown preventivo sistemas críticos telecomunicaciones GPS degradación señal error posición metros-decenas disrupciones aviación rutas polares dosis radiación tripulación-pasajeros límites seguridad desvíos latitudes inferiores costos operacionales miles US$ por vuelo.</p>

        <h4>Levitación Magnética Trenes Maglev Superconductores</h4>
        <p>Levitación magnética maglev magnetic levitation transporte alta velocidad suspensión sin contacto eliminación fricción mecánica rodadura eficiencia energética velocidades &gt;500 km/h récord Japón L0 Series 603 km/h 2015 test track Yamanashi tecnologías EMS electromagnetic suspension electroimanes activos control feedback gap sensor-actuator 8-15 mm corriente ajuste real-time estabilidad consumo energía significativo EDS electrodynamic suspension imanes superconductores NbTi-Nb₃Sn temperatura crítica 9-18 K enfriamiento helio líquido 4.2 K costoso complejo levitación pasiva inducción corrientes eddy repulsión Lenz law gap grande 100-150 mm estabilidad inherente velocidad umbral &gt;100 km/h levitación ruedas retractables hybrid mode operación líneas comerciales Shanghai Maglev 30 km aeropuerto-ciudad velocidad operativa 430 km/h tiempo viaje 8 min equivalente auto 45-60 min confort vibraciones mínimas ruido bajo &lt;70 dB interior Japón Chuo Shinkansen construcción Tokyo-Nagoya 286 km operación proyectada 2027 inversión ¥9 trillones ≈€70,000M extensión Osaka 2045 velocidad comercial 505 km/h tiempo Tokyo-Osaka 67 min actual Shinkansen 150 min reducción mitad competitividad aviación doméstica capacidad 1,000 pasajeros/tren frecuencia alta intervalo 10 min sostenibilidad emisiones cero operación electricidad renovable solar-eólica-nuclear mix energético Japón hidroeléctrica-geotérmica eficiencia energética 0.1 MJ/pasajero-km comparación auto 1.5 MJ avión 2.0 MJ factor 10-20 mejora amortización inversión décadas mantenimiento infraestructura menor vía sin desgaste guías concreto-acero durabilidad 100 años minimal intervention.</p>
      </div>

      <div className="formula-card">
        <h3>📋 Resumen Campos Vectoriales</h3>
        <ul>
          <li>Campos vectoriales F(x,y,z,t) asignan vector magnitud-dirección cada punto espacio-tiempo ejemplos campo eléctrico E fuerza/carga N/C magnético B Tesla densidad flujo velocidades v m/s fluidos gravitatorio g=-GM/r² aceleración masa representación componentes cartesianas F=F_x·i+F_y·j+F_z·k base ortonormal líneas campo tangentes trayectorias visualización flujo dirección densidad proporcional magnitud.</li>
          <li>Operadores diferenciales divergencia ∇·F=∂F_x/∂x+∂F_y/∂y+∂F_z/∂z medida flujo fuentes-sumideros ∇·F&gt;0 divergente &lt;0 convergente =0 solenoidal sin fuentes ejemplos ley Gauss ∇·E=ρ/ε₀ carga densidad ∇·B=0 campo magnético rotacional ∇×F curl medida circulación vorticidad ∇×F≠0 rotacional =0 irrotacional conservativo ejemplos ley Faraday ∇×E=-∂B/∂t inducción Ampère-Maxwell ∇×B=μ₀J+μ₀ε₀∂E/∂t corriente desplazamiento Laplaciano vectorial ∇²F aplicación componentes ecuación difusión ondas.</li>
          <li>Teoremas fundamentales divergencia Gauss ∭(∇·F)dV=∬F·n̂dS flujo superficie cerrada volumen aplicación ley Gauss integral carga encerrada Stokes ∬(∇×F)·n̂dS=∮F·dr circulación curva cerrada superficie aplicación Faraday fem inducida gradiente campos conservativos ∮F·dr=0 independencia camino existencia potencial escalar F=-∇φ trabajo conservación energía mecánica clásica.</li>
          <li>Clasificación campos conservativos ∇×F=0 potencial escalar gravitatorio eléctrico estático trabajo path-independent solenoidales ∇·F=0 potencial vectorial A tal F=∇×A campo magnético velocidades incompresibles descomposición Helmholtz F=-∇φ+∇×A parte irrotacional-solenoidal única condiciones contorno frontera teorema fundamental representación general.</li>
          <li>Aplicaciones física electromagnetismo ecuaciones Maxwell unificación electricidad-magnetismo ondas electromagnéticas luz velocidad c=3×10⁸ m/s propagación vacío-medios permitividad ε permeabilidad μ índice refracción n=√(εμ/ε₀μ₀) óptica dispersión mecánica fluidos Navier-Stokes viscosidad dinámica μ cinemática ν números adimensionales Reynolds-Prandtl-Mach régimen flujo laminar-turbulento compresible aerodinámica sustentación drag lift coefficients C_L-C_D optimización diseño.</li>
          <li>Métodos computacionales simulación CFD mallas finitas elementos-volúmenes algoritmos SIMPLE-PISO presión-velocidad acoplamiento convergencia iterativa residuales &lt;10⁻⁴ aplicaciones ingeniería aeroespacial automotriz naval turbomaquinaria turbinas-compresores eficiencias 85-95% optimización topológica diseño álabes rotores estátores machine learning predicción turbulencia modelos RANS k-ε-k-ω LES large-eddy simulation DNS direct numerical simulation escalas Kolmogorov resolución mallas 10⁹-10¹² nodos supercomputación exascale.</li>
        </ul>
      </div>
    </>
  );
};

export default CamposVectorialesTheory;


