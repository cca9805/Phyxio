import { TheorySection, Concept, Important, Example, Formula } from '../../../components/TheoryV2';
import Latex from 'react-latex-next';

export const metadata = {
  titulo: "Campos Escalares",
  descripcion: "Campos que asignan un valor escalar a cada punto del espacio",
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD'],
  isTheoryOnly: true
};

const CamposEscalaresTheory = () => {
  return (
    <>
      <TheorySection title="¿Qué es un Campo Escalar?">
        <p>
          Un campo escalar es una función que asigna un valor escalar (un número) a cada punto del espacio y, posiblemente, del tiempo. Matemáticamente:
        </p>
        <div className="formula-container"><div className="formula-expression"><Latex>{'$\\varphi(x, y, z, t)$ o $\\varphi(\\mathbf{r}, t)$'}</Latex></div></div>
        <p>
          Los campos escalares son fundamentales en física porque describen magnitudes que varían en el espacio pero no tienen dirección asociada.
        </p>
      </TheorySection>

      <TheorySection title="Ejemplos de Campos Escalares">
        <Concept title="Temperatura" variant="detailed">
          <div className="detailed-content">
            <p>
              La distribución de temperatura en un objeto o región del espacio:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$T(x, y, z, t)$'}</Latex></div></div>
            <ul>
              <li>Ejemplo: Temperatura en una habitación</li>
              <li>Unidades: Kelvin (K), Celsius (°C)</li>
              <li>Aplicación: Transferencia de calor, meteorología</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Presión" variant="detailed">
          <div className="detailed-content">
            <p>
              La presión en un fluido o gas:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$P(x, y, z, t)$'}</Latex></div></div>
            <ul>
              <li>Ejemplo: Presión atmosférica</li>
              <li>Unidades: Pascal (Pa), atmósferas (atm)</li>
              <li>Aplicación: Meteorología, aerodinámica</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Densidad" variant="detailed">
          <div className="detailed-content">
            <p>
              La densidad de masa o carga en el espacio:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\rho(x, y, z, t)$'}</Latex></div></div>
            <ul>
              <li>Densidad de masa: kg/m³</li>
              <li>Densidad de carga: C/m³</li>
              <li>Aplicación: Mecánica de fluidos, electrostática</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Potencial Gravitatorio" variant="detailed">
          <div className="detailed-content">
            <p>
              El potencial gravitatorio en el espacio:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\Phi(\\mathbf{r}) = -\\frac{GM}{r}$'}</Latex></div></div>
            <ul>
              <li>Unidades: J/kg o m²/s²</li>
              <li>Aplicación: Mecánica celeste, geodesia</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Potencial Eléctrico" variant="detailed">
          <div className="detailed-content">
            <p>
              El potencial eléctrico creado por cargas:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$V(\\mathbf{r}) = \\frac{kQ}{r}$'}</Latex></div></div>
            <ul>
              <li>Unidades: Voltios (V)</li>
              <li>Aplicación: Electrostática, circuitos</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Operadores Diferenciales en Campos Escalares">
        <Concept title="Gradiente (∇φ)" variant="detailed">
          <div className="detailed-content">
            <p>
              El gradiente de un campo escalar es un campo vectorial que apunta en la dirección de máximo crecimiento:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\nabla\\varphi = \\left(\\frac{\\partial\\varphi}{\\partial x}, \\frac{\\partial\\varphi}{\\partial y}, \\frac{\\partial\\varphi}{\\partial z}\\right)$'}</Latex></div></div>
            <p>Propiedades:</p>
            <ul>
              <li>Dirección: Máximo incremento del campo</li>
              <li>Magnitud: Tasa de cambio máxima</li>
              <li>Perpendicular: A las superficies de nivel (isosuperficies)</li>
            </ul>
            <p>Ejemplos físicos:</p>
            <ul>
              <li>Campo eléctrico: <Latex>{'$\\mathbf{E} = -\\nabla V$'}</Latex></li>
              <li>Fuerza gravitatoria: <Latex>{'$\\mathbf{F} = -m\\nabla\\Phi$'}</Latex></li>
              <li>Flujo de calor: <Latex>{'$\\mathbf{q} = -k\\nabla T$'}</Latex> (Ley de Fourier)</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Laplaciano (∇²φ)" variant="detailed">
          <div className="detailed-content">
            <p>
              El Laplaciano mide la curvatura o divergencia del gradiente:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\nabla^2\\varphi = \\frac{\\partial^2\\varphi}{\\partial x^2} + \\frac{\\partial^2\\varphi}{\\partial y^2} + \\frac{\\partial^2\\varphi}{\\partial z^2}$'}</Latex></div></div>
            <p>Interpretación física:</p>
            <ul>
              <li><Latex>{'$\\nabla^2\\varphi > 0$'}</Latex> El punto es un mínimo local</li>
              <li><Latex>{'$\\nabla^2\\varphi < 0$'}</Latex> El punto es un máximo local</li>
              <li><Latex>{'$\\nabla^2\\varphi = 0$'}</Latex> Ecuación de Laplace (equilibrio)</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuaciones Importantes">
        <Concept title="Ecuación de Laplace" variant="detailed">
          <div className="detailed-content">
            <p>
              Describe campos escalares en equilibrio (sin fuentes):
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\nabla^2\\varphi = 0$'}</Latex></div></div>
            <p>Aplicaciones:</p>
            <ul>
              <li>Electrostática: Potencial en regiones sin carga</li>
              <li>Gravitación: Potencial en regiones sin masa</li>
              <li>Fluidos: Flujo potencial incompresible</li>
              <li>Temperatura: Distribución en estado estacionario</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Ecuación de Poisson" variant="detailed">
          <div className="detailed-content">
            <p>
              Generalización de Laplace con fuentes:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\nabla^2\\varphi = f(\\mathbf{r})$'}</Latex></div></div>
            <p>Casos específicos:</p>
            <ul>
              <li>Electrostática: <Latex>{'$\\nabla^2 V = -\\frac{\\rho}{\\varepsilon_0}$'}</Latex></li>
              <li>Gravitación: <Latex>{'$\\nabla^2\\Phi = 4\\pi G\\rho$'}</Latex></li>
              <li>Difusión: <Latex>{'$\\nabla^2 T = -\\frac{Q}{k}$'}</Latex></li>
            </ul>
          </div>
        </Concept>

        <Concept title="Ecuación de Difusión" variant="detailed">
          <div className="detailed-content">
            <p>
              Describe la evolución temporal de campos escalares:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\frac{\\partial\\varphi}{\\partial t} = D\\nabla^2\\varphi$'}</Latex></div></div>
            <p>Donde D es el coeficiente de difusión. Aplicaciones:</p>
            <ul>
              <li>Conducción de calor: Ecuación del calor</li>
              <li>Difusión de partículas: Ley de Fick</li>
              <li>Probabilidad cuántica: Ecuación de Schrödinger (parte imaginaria)</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Ecuación de Onda" variant="detailed">
          <div className="detailed-content">
            <p>
              Describe la propagación de perturbaciones:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\frac{\\partial^2\\varphi}{\\partial t^2} = c^2\\nabla^2\\varphi$'}</Latex></div></div>
            <p>Aplicaciones:</p>
            <ul>
              <li>Ondas sonoras: Presión acústica</li>
              <li>Ondas en cuerdas: Desplazamiento</li>
              <li>Ondas electromagnéticas: Potenciales</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Superficies de Nivel">
        <Concept title="Isosuperficies" variant="detailed">
          <div className="detailed-content">
            <p>
              Las superficies de nivel o isosuperficies son lugares donde el campo tiene el mismo valor:
            </p>
            <div className="formula-container"><div className="formula-expression"><Latex>{'$\\varphi(x, y, z) = \\text{constante}$'}</Latex></div></div>
            <p>Ejemplos:</p>
            <ul>
              <li>Isotermas: Líneas de igual temperatura</li>
              <li>Isobaras: Líneas de igual presión</li>
              <li>Equipotenciales: Superficies de igual potencial</li>
              <li>Curvas de nivel: En mapas topográficos</li>
            </ul>
            <p>
              Propiedad importante: El gradiente es siempre perpendicular a las superficies de nivel.
            </p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Teorema del Valor Medio">
        <Important>
          <p>
            Para funciones armónicas (∇²φ = 0), el valor en un punto es igual al promedio sobre cualquier esfera centrada en ese punto:
          </p>
          <div className="formula-container"><div className="formula-expression"><Latex>{'$\\varphi(\\mathbf{r}_0) = \\frac{1}{4\\pi R^2} \\iint \\varphi(\\mathbf{r}) \\, dS$'}</Latex></div></div>
          <p>
            Esto implica que las funciones armónicas no tienen máximos ni mínimos locales en el interior del dominio (principio del máximo).
          </p>
        </Important>
      </TheorySection>

      <TheorySection title="Aplicaciones en Física">
        <ul>
          <li>Electrostática: Potencial eléctrico, energía electrostática</li>
          <li>Gravitación: Potencial gravitatorio, energía potencial</li>
          <li>Termodinámica: Temperatura, entropía, potenciales termodinámicos</li>
          <li>Mecánica de fluidos: Presión, potencial de velocidad</li>
          <li>Óptica: Índice de refracción, fase de onda</li>
          <li>Física cuántica: Función de onda (parte real), densidad de probabilidad</li>
          <li>Cosmología: Campo de Higgs, inflatón</li>
        </ul>
      </TheorySection>

      <TheorySection title="Conexión con Campos Vectoriales">
        <p>
          Los campos escalares y vectoriales están íntimamente relacionados:
        </p>
        <ul>
          <li>Gradiente: Convierte campo escalar en vectorial <Latex>{'$\\nabla\\varphi$'}</Latex></li>
          <li>Divergencia: Convierte campo vectorial en escalar <Latex>{'$\\nabla\\cdot\\mathbf{F}$'}</Latex></li>
          <li>Potencial escalar: Un campo vectorial conservativo deriva de un potencial escalar</li>
          <li>Teorema fundamental: <Latex>{'$\\nabla \\times (\\nabla\\varphi) = \\mathbf{0}$'}</Latex> (el rotacional del gradiente es cero)</li>
        </ul>
      </TheorySection>

      <div className="theory-applications-section">
        <h3>🔬 Aplicaciones Avanzadas Campos Escalares</h3>
        
        <h4>Física Computacional Campos Escalares</h4>
        <p>Análisis numérico campos escalares ecuaciones diferenciales parciales método elementos finitos FEM volúmenes finitos FVM discretización espacial mallas estructuradas-no estructuradas resolución 10³-10⁶ nodos software COMSOL-ANSYS-OpenFOAM simulación distribuciones temperatura-presión-potencial convergencia iterativa residual &lt;10⁻⁶ precisión doble IEEE-754 parallelization GPU-CPU multithreading aceleración 100-1000x tiempo real aplicaciones ingeniería civil-mecánica-aeroespacial optimización topológica diseño sensores actuadores microelectrónica MEMS integración experimental mediciones temperatura termopares termografía infrarroja resolución espacial 0.1-10 mm precisión ±0.1-1°C validación modelos calibración parámetros coeficientes térmicos-difusivos identificación incertidumbre propagación análisis sensibilidad costos simulación proyecto €10,000-€500,000 licencias software clusters computacionales centros investigación universidades.</p>

        <h4>Electromagnetismo Potenciales Escalares</h4>
        <p>Potencial eléctrico V distribución espacial cargas conductores aislantes ecuación Poisson ∇²V=-ρ/ε₀ método imágenes configuraciones electrodos placas-esferas-cilindros capacitancia C=Q/V farads almacenamiento energía E=(1/2)CV² joules aplicaciones condensadores cerámicos-electrolíticos-supercapacitores densidad energía 0.01-100 J/g constante dieléctrica relativa εᵣ=1-10,000 materiales aire-agua-cerámica-ferroelectricos BaTiO₃ breakdown voltage rigidez dieléctrica 1-100 kV/mm diseño aislamiento transformadores-cables alta tensión protección descargas electrostáticas ESD circuitos integrados CMOS tecnología nanométrica 5-65 nm óxido gate SiO₂-HfO₂ espesor 1-10 nm tunneling cuántico leakage corriente fuga pA-μA potencial contacto work function metales semiconductores barrera Schottky 0.3-1.5 eV dispositivos Schottky diodes fotovoltaica células solares eficiencia conversión 15-26% silicio-GaAs-perovskitas costo fabricación €0.50-€2/Wp panel instalación comercial coste total sistema €1,000-€5,000/kWp.</p>

        <h4>Geofísica Potencial Gravitatorio Terrestre</h4>
        <p>Campo gravitatorio Tierra potencial geopotencial U=GM/r aproximación esferoide referencia WGS84-GRS80 elipsoidal achatamiento polar f=1/298.257 ecuación Clairaut variación gravedad latitud g=9.78033(1+0.001938sin²φ) m/s² anomalías gravedad Bouguer free-air residual δg=±50-500 mGal prospección geofísica recursos minerales petróleo gas yacimientos minerales metálicos densidades ρ=2,000-8,000 kg/m³ contrastes δρ=±500-3,000 kg/m³ técnicas medición gravímetros Lacoste-Romberg precisión ±0.01-0.1 mGal correcciones topografía marea terrestre deriva instrumental procesamiento datos inversión modelos 2D-3D interpretación estructuras geológicas fallas-domos-cuencas sedimentarias aplicaciones exploración minera hidrocarburos yacimientos oro-cobre-litio Chile-Perú-Australia inversión exploración US$1M-US$100M proyecto grande escala geotermia reservorios alta entalpía temperatura &gt;150°C gradiente geotérmico 25-100°C/km generación eléctrica plantas 10-200 MW The Geysers California Larderello Italia Wairakei Nueva Zelanda costo construcción US$2,000-US$7,000/kW LCOE €40-€100/MWh competitivo energías renovables integración redes transición energética descarbonización.</p>

        <h4>Oceanografía Campos Escalares Marinos</h4>
        <p>Campos escalares océano distribución temperatura T=(-2)-30°C salinidad S=0-40 PSU practical salinity units densidad σₜ=1,020-1,030 kg/m³ termoclina gradiente vertical intenso δT/δz=-10-(-100)°C/km profundidad 50-1,000 m haloclina cambio salinidad δS/δz=-5-(-50) PSU/km picnoclina densidad estratificación estabilidad columna agua frecuencia Brunt-Väisälä N²=(g/ρ)(δρ/δz) oscilaciones internas ondas gravedad períodos 10 min-24 h amplitudes 1-100 m propagación energía mezcla vertical turbulencia difusividad eddy Kₜ=10⁻⁶-10⁻² m²/s transporte calor-sal-nutrientes productividad primaria fitoplancton clorofila concentración 0.01-10 mg/m³ medición satelital ocean color SeaWiFS-MODIS-Sentinel resolución espacial 250 m-1 km temporal diaria aplicaciones pesca comercial acuicultura localización cardúmenes zonas productivas rutas migratorias especies pelágicas atún-sardina-anchoveta valor económico industria pesquera global US$150,000M anual gestión sostenible recursos cuotas captura tallas mínimas vedas temporales certificación MSC Marine Stewardship Council cambio climático warming océanos 0.1°C/década acidificación reducción pH 0.1 unidades impacto ecosistemas arrecifes coral bleaching mortalidad modelado climático CMIP6 proyecciones 2100 escenarios RCP-SSP mitigación adaptación.</p>

        <h4>Meteorología Análisis Campos Presión Temperatura</h4>
        <p>Análisis campos escalares meteorológicos presión atmosférica P=850-1,050 hPa nivel mar temperatura aire T=(-90)-60°C superficie humedad relativa HR=0-100% punto rocío dewpoint gradiente vertical troposfera lapse rate Γ=-6.5°C/km adiabático seco-húmedo estabilidad atmosférica CAPE convective available potential energy J/kg predicción tormentas severas tornados supercélulas sistemas frontales frente frío-cálido-ocluido gradientes horizontales δT/δx=5-20°C/100 km isobaras isotermas isohipsas análisis sinóptico mapas superficie altitud 500 hPa-250 hPa corriente chorro jet stream velocidades 50-150 kt ondas Rossby longitudes 3,000-10,000 km ciclogénesis desarrollo ciclones extratropicales bombas meteorológicas deepening rate 24 hPa/24 h impacto tormentas vientos huracanes categorías Saffir-Simpson 1-5 velocidades 119-252 km/h presión central mínima &lt;920 hPa daños estructurales inundaciones costas vulnerables pérdidas económicas US$10,000M-US$160,000M evento Katrina Harvey María predicción numérica weather prediction NWP modelos GFS-ECMWF-WRF resolución horizontal 1-50 km temporal 1-240 h asimilación datos observaciones estaciones satélites radiosondas radar mejora continua skill scores reducción errores 1%/año anual inversión infraestructura supercomputación centros NOAA-ECMWF presupuestos €100M-€500M equipos Cray-IBM-HPE potencia 10-100 petaflops.</p>
      </div>

      <div className="theory-history-section">
        <h3>📜 Historia Teoría Campos Escalares</h3>
        
        <h4>Siglo XVIII: Orígenes Análisis Campos</h4>
        <p>Desarrollo cálculo diferencial integral Newton-Leibniz 1670s-1680s fundamentos matemáticos derivadas parciales ecuaciones diferenciales Daniel Bernoulli ecuación Bernoulli fluidos 1738 conservación energía presión-velocidad-altura Leonhard Euler ecuaciones Euler fluido ideal 1755 derivación cálculo variacional principio mínima acción mecánica analítica Joseph-Louis Lagrange Mécanique Analytique 1788 coordenadas generalizadas función Lagrangian potenciales escalares energía potencial gravitatoria V=-GMm/r electrostática experimentos Benjamin Franklin carga eléctrica conservación neutralidad positiva-negativa nomenclatura Charles-Augustin Coulomb ley Coulomb fuerza electrostática F=kq₁q₂/r² 1785 mediciones balanza torsión precisión ángulos 0.01° determinación constante k=8.99×10⁹ N·m²/C² establecimiento electrostática cuantitativa fundación teoría campos fuerzas centrales potencial inverso distancia.</p>

        <h4>Siglo XIX: Teoría Potencial Ecuaciones Fundamentales</h4>
        <p>Pierre-Simon Laplace ecuación Laplace ∇²φ=0 Traité de Mécanique Céleste 1799-1825 aplicaciones mecánica celeste perturbaciones planetarias estabilidad sistema solar Siméon-Denis Poisson ecuación Poisson ∇²φ=f fuentes distribuidas 1813 generalización Laplace electrostática gravitación George Green teorema Green funciones Green 1828 Essay Application Mathematical Analysis Electricity Magnetism métodos solución ecuaciones parciales contorno boundary conditions Carl Friedrich Gauss teorema divergencia flujo superficie cerrada teorema Gauss-Ostrogradsky ley Gauss electrostática ∮E·dA=Q/ε₀ aplicaciones geodesia magnetismo terrestre potencial magnético William Thomson Lord Kelvin teorema mínimo energía unicidad soluciones problema Dirichlet-Neumann 1847 análisis armónico teoría calor Joseph Fourier Théorie Analytique de la Chaleur 1822 series Fourier ecuación calor δT/δt=α∇²T conducción térmica difusividad α=k/(ρc) materiales metales-cerámicas coeficientes 10⁻⁷-10⁻⁴ m²/s impacto revolución industrial máquinas térmicas eficiencia Carnot desarrollo termodinámica.</p>

        <h4>Siglo XX: Física Moderna Campos Cuánticos</h4>
        <p>Mecánica cuántica función onda Ψ Erwin Schrödinger ecuación Schrödinger 1926 iℏ(δΨ/δt)=ĤΨ Hamiltoniano operador interpretación probabilística Max Born |Ψ|² densidad probabilidad normalización ∫|Ψ|²dV=1 principio incertidumbre Heisenberg ΔxΔp≥ℏ/2 dualidad onda-partícula Louis de Broglie longitud onda λ=h/p relatividad general Albert Einstein ecuaciones campo Einstein Gμν=(8πG/c⁴)Tμν geometría espacio-tiempo curvatura tensor métrico gμν potencial gravitatorio relativista soluciones Schwarzschild agujero negro radio 2GM/c² horizonte eventos singularidad cosmología expansión universo Edwin Hubble ley Hubble v=H₀d constante Hubble H₀=67-73 km/s/Mpc tensión cosmológica modelo Lambda-CDM materia oscura energía oscura inflación cósmica Alan Guth 1980 campo escalar inflatón expansión exponencial primeros 10⁻³⁵ s resolución problema horizonte planitud fluctuaciones cuánticas origen estructura cósmica CMB cosmic microwave background anisotropías δT/T≈10⁻⁵ mediciones COBE-WMAP-Planck precisión 1% parámetros cosmológicos teoría campos cuánticos QFT partículas elementales bosones gauge fotón-gluón-W-Z campo Higgs mecanismo Higgs masa partículas descubrimiento bosón Higgs LHC CERN 2012 masa 125 GeV confirmación modelo estándar física partículas premio Nobel Englert-Higgs 2013.</p>

        <h4>Siglo XXI: Simulación Computacional Campos</h4>
        <p>Avances computación científica high-performance computing HPC clusters exascale 10¹⁸ flops supercomputadoras Fugaku-Summit-Sierra-Tianhe potencia 200-500 petaflops aplicaciones simulación clima terrestre modelos acoplados atmósfera-océano-hielo resolución 1-25 km proyecciones cambio climático IPCC AR6 2021 calentamiento 1.5-4°C siglo XXI impactos biodiversidad agricultura nivel mar subida 0.5-2 m eventos extremos olas calor sequías inundaciones frecuencia-intensidad crecientes machine learning aprendizaje campos escalares neural networks convolutional CNN recurrent RNN transformer attention mechanisms predicción series temporales temperatura-presión-precipitación superación modelos tradicionales reducción error 20-40% tiempo computación 100-1000x menor aplicaciones pronóstico corto plazo nowcasting 0-6 h alertas tempranas weather warnings sistemas automáticos deep learning physics-informed neural networks PINN incorporación leyes físicas ecuaciones diferenciales constraints optimización pérdida loss function residual ecuaciones boundary conditions generalización datos escasos robustez extrapolación quantum computing computación cuántica algoritmos Shor-Grover simulación sistemas cuánticos campos gauge cromodinámica cuántica QCD quarks-gluones confinamiento hadrones cálculos lattice QCD discretización espacio-tiempo resolución masa protón error &lt;1% computación 10⁶-10⁷ core-hours supercomputadores dedicados futuro quantum supremacy aplicaciones criptografía optimización química cuántica diseño fármacos materiales superconductores catalizadores.</p>
      </div>

      <div className="theory-anecdotes-section">
        <h3>💡 Curiosidades Campos Escalares</h3>
        
        <h4>Teorema Hairy Ball Topología</h4>
        <p>Teorema hairy ball topología campos vectoriales superficie esfera imposibilidad peinar esfera sin remolinos campo tangente continuo S² debe existir punto singularidad velocidad cero aplicación meteorología anticiclones ciclones patrones viento superficie Tierra polos presión extremos ejemplo concreto huracán ojo calma velocidad mínima centro pared eyewall velocidades máximas 200-300 km/h gradiente presión radical intenso 50-100 hPa/100 km estructura anular convección profunda torres cumulonimbus altitudes 15-18 km temperatura tope nubes -70-(-80)°C emisión infrarroja satelital detección intensificación rápida 24 hPa/24 h predicción desafío modelos numéricos inicialización vórtice bogus vortex ajuste campo presión temperatura humedad asimilación datos aircraft reconnaissance dropsonde GPS profiles mejora pronóstico intensidad track error reducción 30% década 2010-2020 investigación dinámica ciclones tropicales programa Field Hurricane field programs HST GRIP campañas observación.</p>

        <h4>Singularidades Campo Gravitatorio Agujeros Negros</h4>
        <p>Agujeros negros singularidades espacio-tiempo curvatura infinita densidad infinita volumen cero colapso gravitacional estrellas masivas &gt;20 M☉ supernova explosión core collapse núcleo Fe-Ni presión degeneración electrones insuficiente soporte contracción imparable horizonte eventos radio Schwarzschild r_s=2GM/c² para M=10 M☉ r_s≈30 km observación indirecta emisión rayos X binarias Cygnus X-1 acreción materia compañera disco acreción temperatura 10⁶-10⁷ K radiación intensa luminosidad 10³⁸-10³⁹ W detección ondas gravitacionales LIGO-Virgo fusión agujeros negros GW150914 primer evento 2015 masas 36+29 M☉ distancia 1.3 Gpc señal chirp frecuencia creciente 35-250 Hz duración 0.2 s energía radiada 3 M☉c² equivalente 5×10⁴⁷ J deformación espacio-tiempo amplitud 10⁻²¹ medición interferometría láser brazos 4 km precisión atto-metros 10⁻¹⁸ m tecnología estabilización vibración aislamiento sísmico vacuum ultra-high vacío &lt;10⁻⁹ torr premio Nobel Weiss-Barish-Thorne 2017 gravitational wave astronomy nueva ventana observacional universo astrofísica multimensajero electromagnetic-neutrino-gravitational combinación señales GW170817 fusión estrellas neutrones kilonova óptica-infrarroja síntesis elementos pesados r-process oro-platino-uranio origen metales preciosos Tierra núcleo acreción planetesimal 4,500 Ma ago Late Heavy Bombardment impactos meteoritos hierro-níquel condríticos composición primitiva disco protoplanetario.</p>

        <h4>Campo Higgs Masa Partículas Elementales</h4>
        <p>Mecanismo Higgs generación masa partículas elementales modelo estándar física partículas simetría gauge SU(3)×SU(2)×U(1) bosones gauge fotón-W-Z-gluones masa cero-masivos problema masa W-Z 80-91 GeV/c² ruptura espontánea simetría Brout-Englert-Higgs 1964 campo escalar Higgs φ potencial forma sombrero mexicano V(φ)=-μ²|φ|²+λ|φ|⁴ estado vacío expectation value v=246 GeV acoplamiento Yukawa fermiones quarks-leptones masa proporcional acoplamiento quark top masa 173 GeV/c² mayor electrón 0.511 MeV/c² factor 3×10⁵ jerarquía masas problema naturalness fine-tuning parámetros búsqueda bosón Higgs LEP-Tevatron-LHC colisionadores energía √s=90-14,000 GeV descubrimiento LHC CERN 2012 detectores ATLAS-CMS masa 125.1 GeV/c² canales decay H→γγ two-photon invariante masa pico significancia 5σ probabilidad 10⁻⁷ fluctuación estadística confirmación independiente ambos experimentos premio Nobel Englert-Higgs 2013 propiedades spin-0 paridad+ CP-even acoplamientos fermiones-bosones medición precisión 10-20% acuerdo modelo estándar búsqueda física más allá beyond Standard Model BSM supersimetry SUSY extra dimensions dimensiones extras Kaluza-Klein composite Higgs modelos alternativos experimentos futuros HL-LHC high-luminosity 3,000 fb⁻¹ FCC Future Circular Collider 100 TeV ILC International Linear Collider precisión factory Higgs-Z-W mediciones 0.1-1% constraints nuevas físicas indirectas loops virtuales.</p>

        <h4>Temperatura Radiación Cósmica Fondo</h4>
        <p>Radiación cósmica fondo microondas CMB cosmic microwave background temperatura actual T₀=2.725 K emisión era recombinación z≈1,100 edad universo 380,000 años desacoplamiento fotones-materia última dispersión Thomson opacidad cesante expansión universo redshift cosmológico frecuencias desplazadas infrarrojo-microondas pico λ_max≈1.9 mm ley Wien espectro cuerpo negro Planck intensidad I(ν,T) acuerdo experimental 0.001% precisión única confirmación Big Bang cosmología modelo estándar anisotropías temperatura δT/T≈10⁻⁵ fluctuaciones primordiales origen estructura cósmica galaxias-cúmulos-supercúmulos espectro potencia angular C_ℓ multipolo momentos ℓ=2-2500 picos acústicos escala 1°-0.1° física plasma primordial oscilaciones acústicas baryon acoustic oscillations BAO periodo recombinación compresión rarefacción ondas sonido velocidad c_s≈0.6c medición parámetros cosmológicos densidad materia Ω_m=0.31 energía oscura Ω_Λ=0.69 constante Hubble H₀=67 km/s/Mpc curvatura espacial Ω_k≈0 universo plano evidencia inflación satélites COBE 1989 primer mapa anisotropías descubrimiento Mather-Smoot premio Nobel 1996 WMAP 2001-2010 mapas alta resolución 0.2° parámetros 1-5% Planck 2009-2013 precisión extrema 0.5-2% polarización modos E-B tensor-scalar búsqueda ondas gravitacionales primordiales inflación quantum fluctuations futuro LiteBIRD-CMB-S4 sensibilidad 10⁻³ μK mejora 100x detección señal tensor-to-scalar ratio r&lt;0.01 constraints modelos inflación slow-roll potenciales V(φ) predicciones observables n_s spectral index.</p>
      </div>

      <div className="formula-card">
        <h3>📋 Resumen Campos Escalares</h3>
        <ul>
          <li>Campos escalares φ(x,y,z,t) asignan valor numérico cada punto espacio-tiempo ejemplos temperatura T presión P densidad ρ potenciales gravitatorio Φ=-GM/r eléctrico V=kQ/r distribuciones espaciales magnitudes físicas sin dirección asociada cantidades escalares invariantes rotaciones transformaciones coordenadas.</li>
          <li>Operadores diferenciales gradiente ∇φ campo vectorial dirección máximo crecimiento perpendicular isosuperficies aplicación fuerzas conservativas campo eléctrico E=-∇V fuerza gravitatoria F=-m∇Φ Laplaciano ∇²φ curvatura divergencia gradiente segunda derivada espacial ecuación Laplace ∇²φ=0 equilibrio sin fuentes Poisson ∇²φ=f con fuentes distribuidas aplicaciones electrostática gravitación fluidos.</li>
          <li>Ecuaciones evolución temporal difusión δφ/δt=D∇²φ propagación calor conducción térmica Fick partículas coeficiente difusión D=10⁻⁶-10⁻³ m²/s materiales onda δ²φ/δt²=c²∇²φ oscilaciones propagación perturbaciones velocidad c ondas sonoras c=343 m/s aire electromagnéticas c=3×10⁸ m/s vacío soluciones analíticas separación variables series Fourier funciones Green métodos numéricos elementos finitos FEM volúmenes finitos FVM.</li>
          <li>Aplicaciones física campos potenciales energía potencial U gravitatoria electrostática mecánica clásica conservación energía termodinámica temperatura entropía potenciales químicos Gibbs Helmholtz equilibrio reacciones espontaneidad ΔG&lt;0 meteorología análisis campos presión temperatura isobaras isotermas predicción tiempo sistemas frontales ciclones anticiclones geofísica prospección gravimétrica anomalías Bouguer exploración recursos minerales petróleo.</li>
          <li>Teoría moderna mecánica cuántica función onda Ψ interpretación probabilística |Ψ|² densidad ecuación Schrödinger evolución temporal iℏ(δΨ/δt)=ĤΨ relatividad general métrica espacio-tiempo gμν curvatura tensor Einstein Gμν=(8πG/c⁴)Tμν cosmología inflación campo escalar inflatón expansión exponencial primordial fluctuaciones origen estructura física partículas campo Higgs φ mecanismo masa ruptura simetría vacuum expectation value v=246 GeV descubrimiento bosón Higgs LHC 2012 masa 125 GeV confirmación modelo estándar.</li>
          <li>Métodos computacionales simulación numérica discretización mallas elementos-volúmenes finitos algoritmos iterativos convergencia residual &lt;10⁻⁶ software COMSOL-ANSYS-MATLAB aplicaciones ingeniería diseño optimización machine learning neural networks predicción campos temperatura-presión aprendizaje patrones datos experimentales satelitales reducción error 20-40% physics-informed NN incorporación ecuaciones físicas constraints optimización inversión parámetros identificación propiedades materiales coeficientes térmicos difusivos validación experimental mediciones termografía sensores distribuidos.</li>
        </ul>
      </div>
    </>
  );
};

export default CamposEscalaresTheory;



