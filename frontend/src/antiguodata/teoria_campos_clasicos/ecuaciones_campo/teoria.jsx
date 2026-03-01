import { TheorySection, Concept, Important, Example, Formula } from '../../../components/TheoryV2';
import Latex from 'react-latex-next';

export const metadata = {
  titulo: "Ecuaciones de Campo",
  descripcion: "Ecuaciones diferenciales que gobiernan la dinámica de campos",
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD'],
  isTheoryOnly: true
};

const EcuacionesCampoTheory = () => {
  return (
    <>
      <TheorySection title="¿Qué son las Ecuaciones de Campo?">
        <p>
          Las ecuaciones de campo son ecuaciones diferenciales parciales que describen cómo los campos físicos evolucionan en el espacio y el tiempo. Son fundamentales en física porque unifican la descripción de fenómenos diversos bajo un marco matemático común.
        </p>
        <p>
          Estas ecuaciones relacionan las propiedades locales de los campos (derivadas) con sus fuentes y con otros campos.
        </p>
      </TheorySection>

      <TheorySection title="Ecuaciones de Maxwell">
        <Concept title="Las Cuatro Ecuaciones Fundamentales" variant="detailed">
          <div className="detailed-content">
            <p>
              Las ecuaciones de Maxwell unifican electricidad y magnetismo:
            </p>
            <div className="formula-display">{'$\\nabla\\cdot\\mathbf{E} = \\frac{\\rho}{\\varepsilon_0}$'} (Ley de Gauss)</div>
            <div className="formula-display">{'$\\nabla\\cdot\\mathbf{B} = 0$'} (No hay monopolos magnéticos)</div>
            <div className="formula-display">{'$\\nabla\\times\\mathbf{E} = -\\frac{\\partial\\mathbf{B}}{\\partial t}$'} (Ley de Faraday)</div>
            <div className="formula-display">{'$\\nabla\\times\\mathbf{B} = \\mu_0\\mathbf{J} + \\mu_0\\varepsilon_0\\frac{\\partial\\mathbf{E}}{\\partial t}$'} (Ley de Ampère-Maxwell)</div>
            <p>Consecuencias:</p>
            <ul>
              <li>Ondas electromagnéticas: Luz, radio, rayos X</li>
              <li>Velocidad de la luz: <Latex>{'$c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}}$'}</Latex></li>
              <li>Unificación: Electricidad y magnetismo son aspectos del mismo fenómeno</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Ecuación de Onda Electromagnética" variant="detailed">
          <div className="detailed-content">
            <p>
              En el vacío (ρ = 0, J = 0), las ecuaciones de Maxwell se reducen a:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\nabla^2\\mathbf{E} - \\frac{1}{c^2}\\frac{\\partial^2\\mathbf{E}}{\\partial t^2} = \\mathbf{0}$'}</Latex></div></div>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\nabla^2\\mathbf{B} - \\frac{1}{c^2}\\frac{\\partial^2\\mathbf{B}}{\\partial t^2} = \\mathbf{0}$'}</Latex></div></div>
            <p>
              Estas son ecuaciones de onda que predicen la propagación de luz y otras ondas electromagnéticas.
            </p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuación de Onda General">
        <Concept title="Forma Estándar" variant="detailed">
          <div className="detailed-content">
            <p>
              La ecuación de onda describe la propagación de perturbaciones:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\frac{\\partial^2\\varphi}{\\partial t^2} = c^2\\nabla^2\\varphi$'}</Latex></div></div>
            <p>Donde:</p>
            <ul>
              <li>φ: Campo que se propaga (escalar o componente vectorial)</li>
              <li>c: Velocidad de propagación</li>
            </ul>
            <p>Soluciones típicas:</p>
            <ul>
              <li>Ondas planas: <Latex>{'$\\varphi = A \\cos(\\mathbf{k}\\cdot\\mathbf{r} - \\omega t)$'}</Latex></li>
              <li>Ondas esféricas: <Latex>{'$\\varphi = \\frac{A}{r} \\cos(kr - \\omega t)$'}</Latex></li>
              <li>Relación de dispersión: <Latex>{'$\\omega = c|\\mathbf{k}|$'}</Latex></li>
            </ul>
          </div>
        </Concept>

        <Concept title="Aplicaciones" variant="detailed">
          <div className="detailed-content">
            <ul>
              <li>Ondas sonoras: Presión en fluidos</li>
              <li>Ondas en cuerdas: Desplazamiento transversal</li>
              <li>Ondas sísmicas: Propagación en la Tierra</li>
              <li>Ondas de agua: Superficie de líquidos</li>
              <li>Ondas electromagnéticas: Luz, radio</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuación de Difusión">
        <Concept title="Forma General" variant="detailed">
          <div className="detailed-content">
            <p>
              La ecuación de difusión describe procesos de transporte:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\frac{\\partial\\varphi}{\\partial t} = D\\nabla^2\\varphi + S$'}</Latex></div></div>
            <p><strong>Donde:</strong></p>
            <ul>
              <li><strong>D:</strong> Coeficiente de difusión</li>
              <li><strong>S:</strong> Término fuente</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Casos Específicos" variant="detailed">
          <div className="detailed-content">
            <p><strong>Ecuación del calor:</strong></p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\frac{\\partial T}{\\partial t} = \\alpha\\nabla^2 T$'}</Latex></div></div>
            <p>Donde {'$\\alpha = \\frac{k}{\\rho c_p}$'} es la difusividad térmica.</p>
            
            <p><strong>Ecuación de Fick (difusión de partículas):</strong></p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\frac{\\partial n}{\\partial t} = D\\nabla^2 n$'}</Latex></div></div>
            
            <p><strong>Características:</strong></p>
            <ul>
              <li><strong>Irreversible:</strong> Aumenta la entropía</li>
              <li><strong>Suaviza:</strong> Elimina gradientes abruptos</li>
              <li><strong>No tiene velocidad finita:</strong> Efecto instantáneo (aproximación)</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuación de Poisson">
        <Concept title="Forma General" variant="detailed">
          <div className="detailed-content">
            <p>
              Relaciona un campo con sus fuentes:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\nabla^2\\varphi = -f(\\mathbf{r})$'}</Latex></div></div>
            <p><strong>Casos importantes:</strong></p>
            <ul>
              <li><strong>Electrostática:</strong> <Latex>{'$\\nabla^2 V = -\\frac{\\rho}{\\varepsilon_0}$'}</Latex></li>
              <li><strong>Gravitación:</strong> <Latex>{'$\\nabla^2\\Phi = 4\\pi G\\rho$'}</Latex></li>
              <li><strong>Fluidos:</strong> <Latex>{'$\\nabla^2 p = -\\rho\\frac{\\partial\\mathbf{v}}{\\partial t}$'}</Latex></li>
            </ul>
            <p>
              Cuando f = 0, se reduce a la ecuación de Laplace (∇²φ = 0).
            </p>
          </div>
        </Concept>

        <Concept title="Función de Green" variant="detailed">
          <div className="detailed-content">
            <p>
              La solución general se puede expresar usando la función de Green:
            </p>
            <div className="formula-display">{'$\\varphi(\\mathbf{r}) = \\int G(\\mathbf{r},\\mathbf{r}\') f(\\mathbf{r}\') \\, d^3r\'$'}</div>
            <p>
              Para el espacio 3D libre:
            </p>
            <div className="formula-display">{'$G(\\mathbf{r},\\mathbf{r}\') = -\\frac{1}{4\\pi|\\mathbf{r}-\\mathbf{r}\'|}$'}</div>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuaciones de Navier-Stokes">
        <Concept title="Dinámica de Fluidos" variant="detailed">
          <div className="detailed-content">
            <p>
              Las ecuaciones de Navier-Stokes describen el movimiento de fluidos viscosos:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\rho\\left(\\frac{\\partial\\mathbf{v}}{\\partial t} + (\\mathbf{v}\\cdot\\nabla)\\mathbf{v}\\right) = -\\nabla p + \\mu\\nabla^2\\mathbf{v} + \\mathbf{f}$'}</Latex></div></div>
            <div className="formula-display">{'$\\nabla\\cdot\\mathbf{v} = 0$'} (incompresible)</div>
            <p><strong>Donde:</strong></p>
            <ul>
              <li><strong>v:</strong> Campo de velocidades</li>
              <li><strong>p:</strong> Presión</li>
              <li><strong>μ:</strong> Viscosidad dinámica</li>
              <li><strong>f:</strong> Fuerzas externas</li>
            </ul>
            <p><strong>Características:</strong></p>
            <ul>
              <li><strong>No lineales:</strong> Término <Latex>{'$(\\mathbf{v}\\cdot\\nabla)\\mathbf{v}$'}</Latex></li>
              <li><strong>Problema del milenio:</strong> Existencia y suavidad de soluciones</li>
              <li><strong>Turbulencia:</strong> Comportamiento caótico a alto Reynolds</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuación de Klein-Gordon">
        <Concept title="Campo Escalar Relativista" variant="detailed">
          <div className="detailed-content">
            <p>
              Generalización relativista de la ecuación de onda:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\frac{\\partial^2\\varphi}{\\partial t^2} - c^2\\nabla^2\\varphi + \\left(\\frac{mc^2}{\\hbar}\\right)^2\\varphi = 0$'}</Latex></div></div>
            <p><strong>Características:</strong></p>
            <ul>
              <li><strong>Relativista:</strong> Invariante bajo transformaciones de Lorentz</li>
              <li><strong>Masa:</strong> Incluye término de masa m</li>
              <li><strong>Puente:</strong> Entre física clásica y cuántica</li>
              <li><strong>Aplicaciones:</strong> Partículas escalares, campo de Higgs</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Principios Variacionales">
        <Concept title="Principio de Mínima Acción" variant="detailed">
          <div className="detailed-content">
            <p>
              Muchas ecuaciones de campo derivan del principio de mínima acción:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\delta S = \\delta\\int \\mathcal{L} \\, d^4x = 0$'}</Latex></div></div>
            <p><strong>Donde:</strong></p>
            <ul>
              <li><strong>S:</strong> Acción</li>
              <li><strong>ℒ:</strong> Densidad lagrangiana</li>
            </ul>
            <p><strong>Ecuaciones de Euler-Lagrange para campos:</strong></p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\frac{\\partial\\mathcal{L}}{\\partial\\varphi} - \\partial_\\mu\\left(\\frac{\\partial\\mathcal{L}}{\\partial(\\partial_\\mu\\varphi)}\\right) = 0$'}</Latex></div></div>
          </div>
        </Concept>

        <Concept title="Ejemplos" variant="detailed">
          <div className="detailed-content">
            <p><strong>Campo electromagnético:</strong></p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\mathcal{L} = -\\frac{1}{4\\mu_0}F_{\\mu\\nu} F^{\\mu\\nu} - J^\\mu A_\\mu$'}</Latex></div></div>
            <p>Produce las ecuaciones de Maxwell.</p>
            
            <p><strong>Campo escalar:</strong></p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\mathcal{L} = \\frac{1}{2}(\\partial_\\mu\\varphi)(\\partial^\\mu\\varphi) - V(\\varphi)$'}</Latex></div></div>
            <p>Produce la ecuación de Klein-Gordon.</p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Simetrías y Leyes de Conservación">
        <Concept title="Teorema de Noether" variant="detailed">
          <div className="detailed-content">
            <p>
              Cada simetría continua de la acción corresponde a una ley de conservación:
            </p>
            <ul>
              <li><strong>Traslación temporal:</strong> → Conservación de energía</li>
              <li><strong>Traslación espacial:</strong> → Conservación de momento</li>
              <li><strong>Rotación:</strong> → Conservación de momento angular</li>
              <li><strong>Simetría gauge:</strong> → Conservación de carga</li>
            </ul>
            <p>
              Este teorema es fundamental en física moderna y conecta geometría con dinámica.
            </p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Métodos de Solución">
        <Concept title="Técnicas Analíticas" variant="detailed">
          <div className="detailed-content">
            <ul>
              <li><strong>Separación de variables:</strong> Para geometrías simples</li>
              <li><strong>Transformadas de Fourier:</strong> Problemas lineales</li>
              <li><strong>Funciones de Green:</strong> Soluciones con fuentes</li>
              <li><strong>Métodos variacionales:</strong> Aproximaciones</li>
              <li><strong>Teoría de perturbaciones:</strong> Soluciones aproximadas</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Métodos Numéricos" variant="detailed">
          <div className="detailed-content">
            <ul>
              <li><strong>Diferencias finitas:</strong> Discretización en malla</li>
              <li><strong>Elementos finitos:</strong> Geometrías complejas</li>
              <li><strong>Volúmenes finitos:</strong> Conservación local</li>
              <li><strong>Métodos espectrales:</strong> Alta precisión</li>
              <li><strong>Monte Carlo:</strong> Problemas estocásticos</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Conexión con Física Moderna">
        <Important>
          <p>
            La teoría de campos clásicos es el puente hacia la física moderna:
          </p>
          <ul>
            <li>Teoría cuántica de campos: Cuantización de campos clásicos</li>
            <li>Relatividad general: Ecuaciones de campo para la gravedad</li>
            <li>Modelo estándar: Campos gauge cuánticos</li>
            <li>Teoría de cuerdas: Campos en dimensiones superiores</li>
          </ul>
          <p>
            Los conceptos de campos, simetrías y principios variacionales son fundamentales en toda la física teórica moderna.
          </p>
        </Important>
      </TheorySection>

      <TheorySection title="Aplicaciones Prácticas">
        <ul>
          <li>Ingeniería eléctrica: Diseño de antenas, circuitos</li>
          <li>Óptica: Propagación de luz, fibras ópticas</li>
          <li>Acústica: Diseño de salas, control de ruido</li>
          <li>Mecánica de fluidos: Aerodinámica, hidrodinámica</li>
          <li>Geofísica: Ondas sísmicas, campo magnético terrestre</li>
          <li>Astrofísica: Campos gravitatorios, magnetohidrodinámica</li>
          <li>Ingeniería biomédica: Imágenes médicas, electrofisiología</li>
        </ul>
      </TheorySection>

      <div className="theory-applications-section">
        <h3>🔬 Aplicaciones Avanzadas Ecuaciones Campo</h3>
        
        <h4>Ecuaciones Maxwell Electrodinámica Avanzada</h4>
        <p>Ecuaciones Maxwell forma covariante relativista tensor campo electromagnético Fμν antisimétrico componentes campo eléctrico E magnético B unificación espacio-tiempo Minkowski métrica ημν=diag(1,-1,-1,-1) signatura (-,+,+,+) cuadrivector potencial Aμ=(φ/c,A) gauge Lorenz ∂μAμ=0 ecuación onda □Aμ=μ₀Jμ operador d'Alembertian □=∂²/∂t²-c²∇² cuadricorriente Jμ=(cρ,J) densidad carga-corriente invariante Lorentz transformaciones boost x'=γ(x-vt) contracción longitudes dilatación temporal aplicaciones aceleradores partículas sincrotrón LHC CERN energía √s=13.6 TeV colisiones protón-protón producción bosones Higgs top-quarks búsqueda nueva física supersimetría SUSY dimensiones extras radiación sincrotrón emisión cargas aceleradas curvatura trayectoria radio r potencia P=(q²c/6πε₀)(γ⁴/r²) dependencia γ⁴ ultra-relativista pérdida energía crítica limitación aceleradores circulares diseño lineal ILC International Linear Collider futuros proyectos CLIC Compact Linear Collider 3 TeV energía centro masa precisión factory Higgs-Z mediciones 0.1% acoplamientos constraints BSM physics aplicación astrofísica púlsares estrellas neutrones rotación rápida Crab 33 ms PSR J1748 1.4 ms record campo magnético superficial 10⁸-10¹⁵ G magnetosfera emisión coherente radio-rayos X lighthouse efecto beam perpendicular eje rotación observaciones periódicas timing precisión μs detección ondas gravitacionales pulsar timing arrays PTA sensibilidad 10⁻¹⁵ strain frecuencias nHz complementa LIGO-Virgo-KAGRA kHz rango.</p>

        <h4>Ecuación Onda Acústica Ultrasonidos Aplicaciones</h4>
        <p>Ecuación onda acústica presión p(r,t) fluido compresible linearización pequeñas perturbaciones ∂²p/∂t²=c²∇²p velocidad sonido c=√(B/ρ) módulo bulk B densidad ρ medio propagación agua c=1,480 m/s aire 343 m/s acero 5,960 m/s variación 4,000 m/s tejidos biológicos músculo 1,580 m/s grasa 1,450 m/s hueso 3,500 m/s aplicaciones ultrasonidos médicos frecuencias 1-20 MHz longitud onda λ=c/f rango 75 μm-1.5 mm resolución espacial proporcional frecuencia imaging ecografía obstétrica fetal 3.5-5 MHz penetración 10-15 cm profundidad atenuación α∝f² exponencial músculo 1 dB/cm/MHz resolución axial λ/2 lateral haz enfoque transductor piezoeléctrico PZT titanato-zirconato plomo cristal cuarzo conversión eléctrica-mecánica voltaje-deformación eficiencia 60-80% aplicación terapéutica HIFU high-intensity focused ultrasound ablación térmica tumores focalización intensidad 1,000-10,000 W/cm² temperatura &gt;60°C coagulación necrosis no-invasiva sin incisión tratamiento próstata-útero-hígado riñón precisión milimétrica guía MRI-ultrasonido tiempo real monitoreo temperatura costos procedimiento €5,000-€15,000 alternativa cirugía convencional recuperación rápida complicaciones mínimas ultrasonidos industriales ensayos no destructivos NDT inspección soldaduras defectos grietas inclusiones espesores corrosión frecuencias 0.5-25 MHz técnicas pulso-eco through-transmission phased array resolución submilimétrica certificación AWS-ASME aeroespacial nuclear petroquímico seguridad crítica mantenimiento predictivo prevención fallos catastróficos.</p>

        <h4>Ecuación Difusión Procesos Térmicos Materiales</h4>
        <p>Ecuación difusión calor Fourier ∂T/∂t=α∇²T difusividad térmica α=k/(ρcp) conductividad k=0.1-400 W/m·K rango aislantes-metales densidad ρ calor específico cp aplicaciones tratamiento térmico metales temple acero austenita γ-Fe estructura fcc temperatura &gt;723°C enfriamiento rápido water-oil quench velocidad 100-1,000°C/s transformación martensita estructura bct tetragonal centrada cuerpo dureza HRC 60-65 Rockwell escala fragilidad revenido tempering 200-600°C reducción esfuerzos residuales ductilidad mejora tenacidad fractura KIC aplicación herramientas brocas-fresas-matrices HSS high-speed steel carburos tungsteno WC-Co dureza HRA 90-92 vida útil 10-100x superior acero convencional costos herramienta €50-€500 pieza amortización producción masiva automóviles aeroespacial medicina electrónica semiconductores difusión dopantes silicio proceso fabricación VLSI very-large-scale integration circuitos integrados transistores MOSFET 10⁹-10¹⁰ chip área 1-10 cm² dopaje fósforo P arsénico As tipo-n boro B tipo-p concentraciones 10¹⁵-10²¹ cm⁻³ profundidad unión p-n 0.1-1 μm control preciso temperatura-tiempo furnace 800-1,200°C duración 30 min-10 h perfiles concentración gaussiano-erfc error function modeling TCAD technology computer-aided design simulación SUPREM-TSUPREM optimización proceso rendimiento yield &gt;95% defectos minimización costos wafer 300 mm €5,000-€10,000 unidad fabricación fab construcción €5,000M-€20,000M nodo tecnológico 5-7 nm estado arte TSMC Samsung Intel liderazgo global.</p>

        <h4>Ecuación Poisson Electrostática Dispositivos</h4>
        <p>Ecuación Poisson electrostática ∇²V=-ρ/ε₀ potencial eléctrico V densidad carga ρ permitividad vacío ε₀=8.854×10⁻¹² F/m aplicación capacitores condensadores almacenamiento energía E=(1/2)CV² capacitancia C=εA/d área A separación placas d dieléctrico permitividad relativa εr=1-10,000 materiales aire-papel-cerámica-electrolíticos tantalio-aluminio capacitores supercapacitors EDLC electric double-layer carbón activado área superficial específica 1,000-3,000 m²/g electrolito aqueous-organic capacitancia 1-10,000 F densidad energía 5-15 Wh/kg potencia específica 1-10 kW/kg ciclos vida 10⁵-10⁶ charge-discharge aplicaciones vehículos eléctricos híbridos regenerative braking recuperación energía frenado eficiencia 60-80% buses tranvías trolebuses suavizado picos demanda red smart grids almacenamiento renovables solar-eólica intermitencia compensación estabilización frecuencia 50-60 Hz calidad suministro microelectrónica dispositivos semiconductores MOSFET estructura metal-óxido-semiconductor gate capacitancia Cox=εox/tox óxido silicio SiO₂ espesor tox=1-10 nm high-k dielectrics HfO₂-ZrO₂ εr=20-30 reducción leakage corriente fuga tunneling cuántico scaling continuo ley Moore duplicación transistores 18-24 meses nodos 3-5 nm gate-all-around GAA nanosheets arquitecturas avanzadas potencia consumo dynamic Pdyn=αCV²f switching activity α frecuencia f static Pstat=VIleak leakage gestión térmica disipación coolers heat-sinks líquidos-aire ventilación forzada overclock enthusiast gaming workstations TDP thermal design power 65-250 W procesadores Intel Core AMD Ryzen Apple M-series ARM arquitectura eficiencia energética performance-per-watt liderazgo smartphones tablets notebooks portabilidad batería autonomía 10-20 h uso típico.</p>

        <h4>Ecuación Klein-Gordon Física Partículas Relativista</h4>
        <p>Ecuación Klein-Gordon campo escalar relativista (□+m²c²/ℏ²)φ=0 operador d'Alembertian □=∂²/∂t²/c²-∇² masa partícula m bosones escalares piones π⁰-π⁺-π⁻ masa 135-140 MeV/c² mesones más ligeros quarks up-down confinados QCD cromodinámica cuántica interacción fuerte constante αs≈0.1-1.0 dependiente energía running coupling asintotic freedom altas energías perturbative calculable bajas energías non-perturbative lattice QCD simulación numérica supercomputación campo Higgs φ bosón Higgs masa 125.1 GeV/c² descubrimiento LHC 2012 ATLAS-CMS detectores medición precisión ±0.2% producción gluon fusion ggF vector boson VBF asociada VH-ttH decay channels H→γγ two-photon H→ZZ→4ℓ golden channel H→WW→ℓνℓν H→bb̄ jets H→ττ taus análisis multivariate machine learning neural networks boosted decision trees BDT separación señal-fondo background significance 5σ discovery 3σ evidence acoplamientos fermiones bosones Yukawa gauge medición κ-framework deviations modelo estándar constraints nueva física compositeness strong dynamics extra dimensions Randall-Sundrum warped KK-modes kaluza-klein little Higgs twin Higgs teorías alternativas vacuum stability metastability Higgs potential V(φ)=(λ/4)φ⁴-(m²/2)φ² cuartic coupling λ running renormalization group RGE β-functions Planck scale Mpl=10¹⁹ GeV extrapolation current measurements λ≈0.13 top Yukawa yt≈1.0 delicate balance stability vs metastability lifetime universe &gt;10¹⁰⁰ years comfortable cosmología inflación primordial Higgs inflation identificación inflaton campo Higgs coupling gravity ξφ²R non-minimal curvatura Ricci R predictions spectral index ns=0.96-0.97 tensor-to-scalar r&lt;0.06 agreement Planck CMB observations.</p>
      </div>

      <div className="theory-history-section">
        <h3>📜 Historia Ecuaciones Campo</h3>
        
        <h4>Siglo XVIII-XIX: Ecuaciones Calor Onda</h4>
        <p>Joseph Fourier Théorie Analytique de la Chaleur 1822 ecuación calor conducción térmica ∂T/∂t=α∇²T difusividad α materiales series Fourier expansión funciones periódicas base ortogonal sin-cos frecuencias análisis armónico transformada Fourier continua F(ω)=∫f(t)e^(-iωt)dt aplicaciones universal procesamiento señales comunicaciones quantum mechanics revolucionario matemático físico impacto Jean le Rond d'Alembert ecuación onda cuerda vibrante 1747 ∂²y/∂t²=c²∂²y/∂x² solución ondas viajeras y=f(x-ct)+g(x+ct) superposición principio linealidad Leonhard Euler Daniel Bernoulli controversia soluciones funciones continuas vs series debate fundamentos análisis matemático rigor Augustin-Louis Cauchy Karl Weierstrass formalización límites continuidad derivadas integrales siglo XIX fundación matemática moderna Pierre-Simon Laplace ecuación Laplace ∇²φ=0 potencial gravitatorio electrostático mecánica celeste Traité de Mécanique Céleste 1799-1825 cinco volúmenes comprehensive perturbaciones planetarias estabilidad sistema solar determinismo científico demon Laplace conocimiento completo universo predicción futuro pasado philosophical implications free will debate.</p>

        <h4>1860s: Maxwell Unificación Electromagnetismo</h4>
        <p>James Clerk Maxwell ecuaciones Maxwell unificación electricidad magnetismo Treatise Electricity Magnetism 1873 formulación original 20 ecuaciones componentes cartesianas simplificación Oliver Heaviside notación vectorial moderna 4 ecuaciones compactas ∇·E ∇·B ∇×E ∇×B ley Gauss eléctrica carga encerrada Gauss magnética inexistencia monopolos Faraday inducción fem Ampère-Maxwell corriente desplazamiento término revolucionario ∂E/∂t propagación ondas electromagnéticas predicción teórica velocidad luz c=1/√(μ₀ε₀)=3×10⁸ m/s coincidencia valor medido implicación luz onda electromagnética naturaleza unificación óptica electromagnetismo verificación experimental Heinrich Hertz 1887 generación detección ondas radio frecuencias MHz transmisión recepción chispa spark gap oscilador resonador sintonizado confirmación Maxwell teoría triunfo predicción theoretical triumph comunicaciones inalámbricas Guglielmo Marconi telegrafia transatlántica 1901 señal Morse letra S Cornwall Inglaterra Newfoundland Canadá distancia 3,500 km ionosfera reflexión ondas propagación larga distancia revolución tecnológica sociedad información broadcasting radio 1920s televisión 1930s-1950s telecomunicaciones satélite 1960s internet 1990s ubicuidad conectividad global transformación civilización.</p>

        <h4>Siglo XX: Relatividad Mecánica Cuántica</h4>
        <p>Albert Einstein relatividad especial 1905 postulados velocidad luz constante invariante referencial equivalencia leyes física inerciales transformaciones Lorentz contracción longitudes dilatación temporal E=mc² equivalencia masa-energía relatividad general 1915 gravitación geometría espacio-tiempo curvatura tensor métrico gμν ecuaciones campo Einstein Gμν=(8πG/c⁴)Tμν geometría-materia acoplamiento principio equivalencia gravedad-aceleración experimentos confirmación deflexión luz Sol eclipse 1919 Eddington medición 1.75 arcsec predicción Newton 0.87 verificación Einstein fama mundial precesión perihelio Mercurio 43 arcsec/siglo anomalía explicada relatividad general corrección Newtonian mecánica cuántica Planck cuantización energía E=hν constante h=6.626×10⁻³⁴ J·s radiación cuerpo negro ultraviolet catastrophe resolución 1900 Schrödinger ecuación onda cuántica 1926 iℏ(∂ψ/∂t)=Ĥψ función onda ψ interpretación probabilística Born |ψ|² densidad Heisenberg principio incertidumbre Δx Δp≥ℏ/2 complementariedad onda-partícula Dirac ecuación relativista electrón 1928 spin-1/2 predicción antimateria positrón e⁺ descubrimiento Anderson 1932 rayos cósmicos cámara niebla cloud chamber trazas partículas campos cuánticos QFT segunda cuantización operadores creación-aniquilación bosones-fermiones estadísticas Bose-Einstein Fermi-Dirac exclusión Pauli electrodinámica cuántica QED Feynman-Schwinger-Tomonaga diagramas Feynman cálculo interacciones precisión extrema momento magnético electrón g-2 anomalía acuerdo 12 decimales mejor predicción física teoría renormalization infinities cancelación procedimiento matemático divergencias ultravioletas cutoff regularization física efectiva scales energía.</p>

        <h4>Finales Siglo XX-XXI: Computación Numérica Simulación</h4>
        <p>Revolución computacional métodos numéricos resolución ecuaciones campo diferencias finitas FDM discretización derivadas mallas estructuradas elementos finitos FEM geometrías complejas variational formulation weak form Galerkin método volúmenes finitos FVM conservación local flujos interfaz aplicaciones CFD computational fluid dynamics aerodinámica diseño vehículos alas turbinas optimización drag-lift coeficientes efficiency mejora 5-15% reducción consumo combustible económica ambiental supercomputación high-performance computing HPC clusters parallelization MPI message passing interface OpenMP shared memory GPU computing CUDA-OpenCL aceleración 10-100x comparación CPU aplicaciones climate modeling predicción cambio climático CMIP6 coupled model intercomparison project resolución horizontal 25-100 km vertical 30-60 niveles atmósfera océano acoplado hielo terrestre carbon cycle integración componentes química atmosférica aerosoles proyecciones 2100 escenarios SSP shared socioeconomic pathways RCP representative concentration pathways calentamiento 1.5-4°C dependiente emisiones mitigación políticas Paris Agreement 2015 objetivo &lt;2°C preferible 1.5°C reducción emisiones 45% 2030 net-zero 2050 transición energética renovables solar-eólica-hidro-nuclear almacenamiento baterías Li-ion hidrógeno verde costos decrecientes learning curves solar €0.03/kWh eólica €0.04/kWh competitividad fósiles carbón €0.05-0.15 gas €0.04-0.10 paridad grid parity alcanzada mayoría regiones momentum imparable transformación sistema energético global descarbonización.</p>
      </div>

      <div className="theory-anecdotes-section">
        <h3>💡 Curiosidades Ecuaciones Campo</h3>
        
        <h4>Término Desplazamiento Maxwell Genialidad</h4>
        <p>Corriente desplazamiento Maxwell término ε₀∂E/∂t agregado ley Ampère ∇×B=μ₀J+μ₀ε₀∂E/∂t inconsistencia matemática Ampère original ∇×B=μ₀J tomar divergencia ∇·(∇×B)=0 identidad vectorial pero ∇·J≠0 general ecuación continuidad carga ∂ρ/∂t+∇·J=0 conservación contradicción Maxwell insight genial modificación término desplazamiento consistencia matemática ∇·(μ₀J+μ₀ε₀∂E/∂t)=μ₀∇·J+μ₀ε₀∂(∇·E)/∂t=μ₀∇·J+μ₀ε₀∂(ρ/ε₀)/∂t=μ₀(∇·J+∂ρ/∂t)=0 ley Gauss continuidad verificado consecuencia física fundamental propagación ondas electromagnéticas ecuación onda vacío ∂²E/∂t²=c²∇²E derivación tomar rotacional Faraday aplicar Ampère-Maxwell eliminación B resultado ondas transversales polarización E-B perpendiculares dirección propagación k velocidad c luz experimento mental capacitor placas paralelas corriente carga I=dQ/dt campo eléctrico E=Q/(ε₀A) increasing variación temporal ∂E/∂t desplazamiento corriente Id=ε₀A∂E/∂t=I igual corriente conducción conservación circuito abierto gap entre placas física profunda campo dinámico entidad física propagación información causalidad velocidad finita c limitación relativista universo.</p>

        <h4>Ecuación Schrödinger Descubrimiento Navidad 1925</h4>
        <p>Erwin Schrödinger vacaciones Arosa Suiza montañas diciembre 1925 inspiración Louis de Broglie tesis doctoral 1924 dualidad onda-partícula longitud onda λ=h/p momento p Planck h Einstein relación energía-frecuencia E=hν Schrödinger ecuación onda materia analogía óptica-mecánica principio Fermat-Maupertuis Hamilton-Jacobi formalismo analogía cuántica operador momento p̂=-iℏ∇ energía Ĥ Hamiltoniano ecuación iℏ∂ψ/∂t=Ĥψ publicación enero 1926 Annalen der Physik series artículos fundamentales átomo hidrógeno solución analítica niveles energía En=-13.6 eV/n² acuerdo Bohr espectro explicación matemática rigurosa funciones onda orbitales s-p-d-f números cuánticos n-l-m interpretación física controvertida Schrödinger realista onda física Max Born interpretación probabilística |ψ|² densidad Copenhagen interpretation Bohr-Heisenberg colapso función onda measurement problem debate Einstein-Bohr EPR paradox 1935 entanglement no-locality Bell inequalities 1964 test experimental Aspect 1982 violation classical bounds confirmación mecánica cuántica quantum information teoría moderna qubits superposición coherencia aplicaciones computación cuántica algoritmos Shor-Grover criptografía BB84-E91 comunicación segura teleportación estado sensores precisión atomic clocks GPS segundos definición transición cesio-133 precisión 10⁻¹⁶ mejora continua optical clocks estroncio-iterbio 10⁻¹⁸ redefinición futura SI segundo gravitational effects relativistic corrections altitude chronometric geodesy medición geopotencial diferencias 1 cm nivel.</p>

        <h4>Ecuación Navier-Stokes Problema Milenio €1M</h4>
        <p>Ecuación Navier-Stokes dinámica fluidos viscosos ρ(∂v/∂t+(v·∇)v)=-∇p+μ∇²v+f non-linear término convección (v·∇)v acoplamiento velocidad-gradiente complejidad matemática turbulencia régimen caótico altos Reynolds Re&gt;10,000 cascada energía escalas grandes Kolmogorov η=(ν³/ε)^(1/4) disipación viscosa problema matemático abierto existencia suavidad soluciones 3D formulación Clay Mathematics Institute Millennium Prize Problems 2000 siete problemas €1M cada premio P vs NP Riemann hypothesis Hodge conjecture Poincaré conjecture demostrada Perelman 2003 rechazó premio Fields medal único resuelto Navier-Stokes pendiente demostración existencia global soluciones smooth inicial condiciones reasonable físicas o prueba blow-up singularidad tiempo finito implicaciones física fundamental ecuaciones válidas escala molecular breakdown turbulencia extrema vorticidad infinita físicamente imposible matemáticamente open attempts numerosos regularity estimates parciales conditional results avance lento dificultad extrema combinación análisis funcional PDEs partial differential equations teoría probabilidad stochastic methods investigación activa centros todo mundo Princeton-MIT-Caltech-Oxford-IHES aplicaciones prácticas simulación numérica DNS direct numerical simulation mallas 10⁹ puntos supercomputación RANS Reynolds-averaged turbulence modeling k-ε-k-ω closures LES large-eddy simulation SGS subgrid-scale resolución parcial ingeniería aerodinámica automotriz ambiental weather prediction oceánica geofísica energía eólica turbinas optimización diseño eficiencias 40-50% Betz limit 59.3% teórico inalcanzable pérdidas wake mezcla viscosa boundary layers industria global €100,000M anual crecimiento 10-15% renovables transición energética.</p>

        <h4>Solitones Ondas No Lineales Estabilidad</h4>
        <p>Solitones ondas solitarias propagación sin dispersión balance no-linealidad-dispersión ecuación Korteweg-de Vries KdV ∂u/∂t+u∂u/∂x+∂³u/∂x³=0 término no-lineal u∂u/∂x dispersivo ∂³u/∂x³ competencia equilibrio solución onda solitaria u(x,t)=A sech²[k(x-vt)] amplitud A velocidad v=4kA proporcional altura mayor rápida propiedad notable colisiones elásticas solitones interactúan pasan través mantienen forma velocidad integrabilidad ecuación infinitas constantes movimiento conservación transformación scattering inversa IST método resolución analítico Gardner-Greene-Kruskal-Miura 1967 álgebra lineal problema eigenvalues espectro tiempo-independiente reconstrucción potencial datos scattering descubrimiento numérico Zabusky-Kruskal 1965 simulación computadora primeros experiments aplicaciones física ondas agua canales observación Scott Russell 1834 Union Canal Escocia caballo-barcaza onda propagación kilómetros sin cambio forma velocidad 15 km/h altura 30 cm ancho 10 m reproducción experimental tank laboratorio confirmation fibras ópticas telecomunicaciones pulsos solitónicos propagación distancias 1,000-10,000 km sin amplificación regeneración dispersión compensada self-phase modulation SPM Kerr non-linearity n=n₀+n₂I intensidad-dependiente capacidad Tbit/s wavelength division multiplexing WDM transatlántico-transpacífico cables submarinos internet global backbone infraestructura digital economía sociedad información dependencia total conectividad ubiquitous computing IoT internet-of-things 50,000M dispositivos 2030 proyección big data analytics AI artificial intelligence machine learning deep learning transformación industria salud transporte finanzas educación entertainment every aspect vida moderna.</p>
      </div>

      <div className="formula-card">
        <h3>📋 Resumen Ecuaciones Campo</h3>
        <ul>
          <li>Ecuaciones campo descripción matemática evolución campos físicos espacio-tiempo ecuaciones diferenciales parciales PDE relación derivadas espaciales-temporales fuentes interacciones ejemplos fundamentales Maxwell electromagnetismo onda propagación perturbaciones difusión transporte calor-masa Poisson campos estáticos potenciales Navier-Stokes fluidos viscosos Klein-Gordon partículas relativistas Schrödinger mecánica cuántica unificación física marco teórico común.</li>
          <li>Ecuaciones Maxwell unificación electricidad-magnetismo cuatro ecuaciones Gauss eléctrica ∇·E=ρ/ε₀ carga magnética ∇·B=0 monopolos Faraday ∇×E=-∂B/∂t inducción Ampère-Maxwell ∇×B=μ₀J+μ₀ε₀∂E/∂t desplazamiento corriente consecuencia ondas electromagnéticas predicción luz velocidad c=1/√(μ₀ε₀)=3×10⁸ m/s naturaleza unificación óptica verificación Hertz 1887 aplicaciones comunicaciones inalámbricas radio-televisión-telecomunicaciones revolución tecnológica.</li>
          <li>Ecuación onda ∂²φ/∂t²=c²∇²φ propagación perturbaciones velocidad finita c soluciones ondas planas φ=Acos(k·r-ωt) esféricas φ=(A/r)cos(kr-ωt) relación dispersión ω=c|k| aplicaciones acústica ondas sonoras sísmicas agua electromagnéticas características reversibilidad conservación energía superposición interferencia difracción fenómenos ondulatorios universales análisis Fourier descomposición frecuencias espectro armónicos.</li>
          <li>Ecuación difusión ∂φ/∂t=D∇²φ transporte disipativo coeficiente difusión D calor Fourier α=k/(ρcp) térmica partículas Fick masa concentración características irreversibilidad entropía creciente suavizado gradientes tiempo relajación exponencial steady-state equilibrio aplicaciones conducción térmica tratamiento metales semiconductores dopaje procesos químicos biológicos celulares membranas transporte iónico potencial acción nervios Hodgkin-Huxley modelo.</li>
          <li>Métodos resolución analíticos separación variables series Fourier funciones Green transformadas integrales problemas lineales numéricos diferencias finitas FDM elementos FEM volúmenes FVM discretización mallas convergencia error truncamiento estabilidad CFL condition Courant-Friedrichs-Lewy time-step restricción métodos implícitos-explícitos trade-offs precisión-costo computacional aplicaciones ingeniería CFD diseño aeronaves vehículos electromagnetismo antenas circuitos geofísica exploración recursos clima weather prediction modelos acoplados CMIP proyecciones cambio climático.</li>
          <li>Conexión física moderna teoría campos cuánticos QFT cuantización campos clásicos partículas-ondas dualidad creación-aniquilación operadores bosones-fermiones estadísticas relatividad general gravitación geometría espacio-tiempo curvatura Einstein Gμν=(8πG/c⁴)Tμν modelo estándar partículas elementales gauge theories SU(3)×SU(2)×U(1) simetría bosones Higgs mecanismo masa ruptura electrodébil teorías unificación GUT strings dimensiones extras supersimetría física beyond Standard Model búsqueda experimental LHC-ILC future colliders fenomenología precision measurements indirect constraints new physics scales TeV-Planck.</li>
        </ul>
      </div>
    </>
  );
};

export default EcuacionesCampoTheory;


