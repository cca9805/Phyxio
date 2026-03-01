import { TheorySection, Concept } from '../../../../components/TheoryV2';
import { theoreticalConcepts } from './definitions.js';
import DiagramaBorn from '../../../../assets/termodinamica/Diagrama_Born.png';

export const metadata = {
  titulo: "Relaciones de Maxwell",
  descripcion: "Ecuaciones fundamentales que relacionan derivadas parciales de propiedades termodinmicas. Comprende el teorema de Schwarz, las cuatro relaciones de Maxwell derivadas de potenciales (U, H, A, G), aplicaciones en clculo de entropa y coeficientes termodinmicos, y el diagrama mnemotcnico de Born.",
  isTheoryOnly: true,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const RelacionesMaxwellTheory = () => {
  return (
    <>
      <TheorySection title="Introduccin" variant="theoretical">
        <div className="theory-only-intro">
          <p className="theory-description">
            {theoreticalConcepts.mainTopic} son un conjunto fundamental de ecuaciones 
            en termodinmica que {theoreticalConcepts.description.toLowerCase()}. Estas relaciones son 
            esenciales para conectar propiedades medibles con propiedades difciles de medir directamente.
          </p>
          <div className="main-concept-highlight">
            <h4> Concepto Principal:</h4>
            <p className="main-concept">{theoreticalConcepts.mainConcept}</p>
          </div>
        </div>
      </TheorySection>

      <TheorySection title="Origen Matemtico" variant="theoretical">
        <Concept title="Teorema de Schwarz" variant="detailed">
          <div className="detailed-content">
            <p>
              Las relaciones de Maxwell se basan en el teorema de Schwarz (o teorema de Clairaut), 
              que establece que para una funcin con derivadas parciales continuas:
            </p>
            <div className="formula-expression">
              f/xy = f/yx
            </div>
            <p>
              Es decir, el orden de derivacin no importa si las derivadas son continuas.
            </p>
          </div>
        </Concept>

        <Concept title="Diferenciales Exactas" variant="detailed">
          <div className="detailed-content">
            <p>
              Los potenciales termodinmicos (U, H, A, G) son funciones de estado, por lo que sus 
              diferenciales son exactas. Esto permite aplicar el teorema de Schwarz a sus derivadas.
            </p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Las Cuatro Relaciones de Maxwell" variant="theoretical">
        <Concept title="1. Desde la Energa Interna (U)" variant="detailed">
          <div className="detailed-content">
            <p><strong>Diferencial de U:</strong></p>
            <div className="formula-expression">dU = TdS - PdV</div>
            <p>Identificando coeficientes: (U/S)<sub>V</sub> = T y (U/V)<sub>S</sub> = -P</p>
            <p><strong>Relacin de Maxwell:</strong></p>
            <div className="formula-expression" style={{backgroundColor: '#e3f2fd', padding: '10px', borderRadius: '5px'}}>
              (T/V)<sub>S</sub> = -(P/S)<sub>V</sub>
            </div>
          </div>
        </Concept>

        <Concept title="2. Desde la Entalpa (H)" variant="detailed">
          <div className="detailed-content">
            <p><strong>Diferencial de H:</strong></p>
            <div className="formula-expression">dH = TdS + VdP</div>
            <p>Identificando coeficientes: (H/S)<sub>P</sub> = T y (H/P)<sub>S</sub> = V</p>
            <p><strong>Relacin de Maxwell:</strong></p>
            <div className="formula-expression" style={{backgroundColor: '#e3f2fd', padding: '10px', borderRadius: '5px'}}>
              (T/P)<sub>S</sub> = (V/S)<sub>P</sub>
            </div>
          </div>
        </Concept>

        <Concept title="3. Desde la Energa Libre de Helmholtz (A)" variant="detailed">
          <div className="detailed-content">
            <p><strong>Diferencial de A:</strong></p>
            <div className="formula-expression">dA = -SdT - PdV</div>
            <p>Identificando coeficientes: (A/T)<sub>V</sub> = -S y (A/V)<sub>T</sub> = -P</p>
            <p><strong>Relacin de Maxwell:</strong></p>
            <div className="formula-expression" style={{backgroundColor: '#e3f2fd', padding: '10px', borderRadius: '5px'}}>
              (S/V)<sub>T</sub> = (P/T)<sub>V</sub>
            </div>
            <p>Esta es una de las ms tiles en la prctica.</p>
          </div>
        </Concept>

        <Concept title="4. Desde la Energa Libre de Gibbs (G)" variant="detailed">
          <div className="detailed-content">
            <p><strong>Diferencial de G:</strong></p>
            <div className="formula-expression">dG = -SdT + VdP</div>
            <p>Identificando coeficientes: (G/T)<sub>P</sub> = -S y (G/P)<sub>T</sub> = V</p>
            <p><strong>Relacin de Maxwell:</strong></p>
            <div className="formula-expression" style={{backgroundColor: '#e3f2fd', padding: '10px', borderRadius: '5px'}}>
              -(S/P)<sub>T</sub> = (V/T)<sub>P</sub>
            </div>
            <p>O equivalentemente: (S/P)<sub>T</sub> = -(V/T)<sub>P</sub></p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones Prcticas" variant="theoretical">
        <Concept title="Clculo de Cambios de Entropa" variant="detailed">
          <div className="detailed-content">
            <p>
              Las relaciones de Maxwell permiten calcular cambios de entropa (difcil de medir) 
              a partir de propiedades medibles como P, V, T:
            </p>
            <ul>
              <li><strong>A volumen constante:</strong> Usar (S/V)<sub>T</sub> = (P/T)<sub>V</sub></li>
              <li><strong>A presin constante:</strong> Usar (S/P)<sub>T</sub> = -(V/T)<sub>P</sub></li>
            </ul>
          </div>
        </Concept>

        <Concept title="Coeficientes Termodinmicos" variant="detailed">
          <div className="detailed-content">
            <p>Las relaciones de Maxwell se usan para expresar coeficientes termodinmicos:</p>
            <ul>
              <li><strong>Coeficiente de expansin trmica:</strong>  = (1/V)(V/T)<sub>P</sub></li>
              <li><strong>Compresibilidad isotrmica:</strong> <sub>T</sub> = -(1/V)(V/P)<sub>T</sub></li>
              <li><strong>Coeficiente de presin:</strong>  = (1/P)(P/T)<sub>V</sub></li>
            </ul>
            <p>Relacin entre ellos:  = /<sub>T</sub></p>
          </div>
        </Concept>

        <Concept title="Ecuaciones TdS" variant="detailed">
          <div className="detailed-content">
            <p>Usando las relaciones de Maxwell se derivan las ecuaciones TdS:</p>
            <div className="formula-expression">TdS = C<sub>V</sub>dT + T(P/T)<sub>V</sub>dV</div>
            <div className="formula-expression">TdS = C<sub>P</sub>dT - T(V/T)<sub>P</sub>dP</div>
            <p>Estas ecuaciones son fundamentales para calcular cambios de entropa en cualquier proceso.</p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Mnemotecnia" variant="theoretical">
        <Concept title="Diagrama Mnemotcnico" variant="detailed">
          <div className="detailed-content">
            <p>
              Un mtodo til para recordar las relaciones de Maxwell es el "cuadrado termodinmico" 
              o "diagrama de Born":
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '20px 0'
            }}>
              <img 
                src={DiagramaBorn} 
                alt="Diagrama de Born - Cuadrado Termodinmico" 
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
              />
            </div>
            <p>
              Cmo usar el diagrama:
            </p>
            <ul>
              <li>Los vrtices representan las variables termodinmicas: V, T, S, P</li>
              <li>Los lados representan los cuatro potenciales termodinmicos: U, H, A, G</li>
              <li>Para obtener una relacin de Maxwell, se toman derivadas parciales cruzadas de un potencial</li>
              <li>El signo de la relacin depende de la posicin en el diferencial del potencial</li>
              <li>Las flechas o conexiones indican cmo relacionar las variables para cada potencial</li>
            </ul>

            <p>
              Disposicin en el diagrama:
            </p>
            <ul>
              <li>Vrtices: V (superior izq), T (superior der), S (inferior izq), P (inferior der)</li>
              <li>Lados: A (superior), H (inferior), U (izquierdo), G (derecho)</li>
            </ul>

            <p>
              Ejemplo de uso del diagrama:
            </p>
            <p>
              Para obtener la relacin de Maxwell desde la energa libre de Helmholtz (A):
            </p>
            <ol>
              <li>Identificar el potencial: A est en el lado superior del cuadrado</li>
              <li>Identificar los vrtices conectados: A conecta V (superior izq) y T (superior der)</li>
              <li>Escribir el diferencial: dA = -SdT - PdV</li>
              <li>Identificar los coeficientes: (A/T)_V = -S y (A/V)_T = -P</li>
              <li>Aplicar derivadas cruzadas: A/TV = A/VT</li>
              <li>Obtener la relacin de Maxwell: (S/V)_T = (P/T)_V</li>
            </ol>
            <p>
              Esta relacin es muy til porque permite calcular el cambio de entropa con el volumen 
              (difcil de medir) a partir del cambio de presin con la temperatura (fcil de medir).
            </p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Importancia en Termodinmica" variant="theoretical">
        <Concept title="Ventajas de las Relaciones de Maxwell" variant="detailed">
          <div className="detailed-content">
            <ul>
              <li>Conectan propiedades medibles con no medibles</li>
              <li>Reducen el nmero de experimentos necesarios</li>
              <li>Permiten verificar consistencia de datos experimentales</li>
              <li>Fundamentales en derivacin de ecuaciones de estado</li>
              <li>Esenciales en termodinmica de materiales</li>
              <li>tiles en diseo de experimentos termodinmicos</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span></span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3> Ecuaciones de estado de van der Waals</h3>
          <p>
            Las relaciones de Maxwell permiten derivar propiedades termodinmicas desde ecuaciones de estado. La ecuacin van der Waals (P + a/V)(V - b) = RT (1 mol gas) incluye correcciones para molculas reales: a considera fuerzas atractivas (Pam/mol), b volumen excluido. Usando la relacin Maxwell (S/V)_T = (P/T)_V, se calcula cambio entropa: (P/T)_V = R/(V-b) (sin dependencia en a), entonces S = R dV/(V-b) = R ln(V/V). Para gas ideal (a=0, b=0), recupera S = nR ln(V/V). Gas real cumplidora virial: P = RT/V + B(T)/V + C(T)/V..., donde B(T) segundo coeficiente virial depende T (atraccin vs repulsin molecular). NIST usa relaciones Maxwell con ecuaciones multiparamtrico ({'>'}{50} trminos) describiendo HO, CO, aire hasta 1000 bar y -100 a 300C. Una aplicacin prctica: refrigeracin por expansin Joule-Thomson depende (T/P)_H = (1/C_p)[T(V/T)_P - V], derivable de Maxwell, explicando por qu gases ideales (V/T)_P = V/T exacto no enfrian (coeficiente Joule-Thomson = 0) mientras gases reales s (desviacin en V/T)_P).
          </p>
        </div>

        <div className="theory-subsection">
          <h3> Diagramas de fase y transiciones crticas</h3>
          <p>
            Los diagramas fase P-T se construyen usando relaciones Maxwell y ecuacin Clausius-Clapeyron: dP/dT = H_vap/(TV_vap), derivable de Maxwell. Agua: lnea lquido-vapor sube ~100 Pa/K, punto crtico 374C 22.064 MPa. Las relaciones de Maxwell conectan P, V, T en transiciones: en curva coexistencia, propiedades termodinmicas satisfacen relaciones exactas. Punto triple (273.16 K agua = 0C definicin): hielo-lquido-vapor coexisten, determinado por igualdad potenciales Gibbs G_hielo = G_lquido = G_vapor. Usando (G/T)_P = -S y (G/P)_T = V, se traza equilibrio en diagrama P-T. Para CO supercrtico (31.1C 7.38 MPa): densidad similar lquido (728 kg/m) pero viscosidad gas (14 Pas), difusividad alta. Aplicacin: extraccin cafena a 9 MPa 40C, donde CO supercrtico disuelve cafena pero no ceras (selectividad termodinmica). Las relaciones Maxwell garantizan consistencia: si existe ecuacin estado P(V,T), todas derivadas parciales (S/V)_T, (S/P)_T, etc. estn determinadas, validando mediciones experimentales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3> Semiconductores y propiedades termoelctricas</h3>
          <p>
            Efectos Seebeck y Peltier (conversin Tvoltaje) explotan relaciones Maxwell. El coeficiente Seebeck  = (1/e)(S/n)_T,P donde n densidad portadores (e carga elemental), conectando entropa electrnica con voltaje. Materiales termoelctricos (bismuto telurio BiTe) tienen S(n) grande, produciendo voltaje ~200 V/K (termmetro IR). Usando (S/P)_T = -(V/T)_P de Maxwell, se relaciona compresibilidad trmica con coeficiente Seebeck: materiales con (V/T)_P grande (expansin trmica) tienen S variable con presin, generando termoelectricidad fuerte. Refrigeracin Peltier inversa: voltaje  gradiente T controlado (aire acondicionado compacto, enfriamiento electrnico CPUs). El coeficiente mrito Z = / ( conductividad,  conductividad trmica) optimiza eficiencia: materiales con S(n) mximo pero  alta,  baja son mejores. Clculos ab initio (DFT) calculan bandas electrnicas, de donde S electrnica se obtiene mediante relaciones Maxwell termodin aplicadas a gas Fermi de electrones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3> Materiales magnticos y susceptibilidad</h3>
          <p>
            La magnetizacin M = -(G/H)_T,P (H campo magntico) se relaciona con propiedades mediante Maxwell. Para ferromagneto (hierro): M vs T mostra transicin sharp Curie (770C Fe puro). Entropa magntica se obtiene: S_mag = (G/T)_P,H = -(M/T)_HH, derivado de relaciones Maxwell cruzando variables (T,H). Por encima Curie, M  0, S_mag  0; bajo Curie, M saturada, S_mag negativa (orden magntico = desorden entropa). En superconductores (Meissner effect): (M/T)_H {'<'} 0 debido (S/T)_H {'>'} 0, relacin exacta Maxwell que conecta orden magntico con entropa. Aplicacin: levitacin magntica usa diamagnetismo superconductor (M = -H/), termodinmicamente anlogo antiferromagneto. Hielo de espn (magnetic frustration): estructura cristalina impide acoplamiento magntico antiferromagntico simultneo, creando entropa residual S = R ln(3/2) por sitio  1.4 J/(molK) (entropa no cero a 0K, violando tercera ley clsicamente, explicado por degeneracin). Las relaciones Maxwell garantizan consistencia entre M(T,H) medido experimentalmente y cambios entropa, validando modelos microscpicos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3> Acstica y velocidad sonido</h3>
          <p>
            La velocidad sonido v = (B/) donde B modulo bulk = -V(P/V)_S (adiabtico, no isotrmico). Usando relaciones Maxwell se conecta B con propiedades medibles: B_adiabtico = -(P/)_S, relacionado con B_isotrmico = -(P/)_T mediante B_adiabtico/B_isotrmico =  = C_p/C_v. En aire ( = 1.40): v = (P/) = (RT) = 331 m/s a 0C (prediccin excelente). En agua (  1.07): v = (B/) = 1483 m/s. El trmino (P/S)_V que aparece en relaciones Maxwell es precisamente responsable propagacin ondas: compresin adiabtica (S=const) causa P aumentar, restaurando volumen (acstica es compresin/expansin adiabtica rpida). Ultrasonido mdico (5-20 MHz) usa relaciones Maxwell en medios heterogneos (grasa, msculo, hueso tienen , B distintos): reflexin en interfases depende impedancia Z = v, relacionada con B por Maxwell. Sonoluminiscencia (burbuja vaco en lquido colapsando emite luz) involucra cambios entropa adiabticos extremos (T alcanza miles K), describible solo con relaciones Maxwell exactas en lquido compresible.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span></span> Historia: El desarrollo de las relaciones de Maxwell
        </h2>
        
        <div className="theory-subsection">
          <h3> James Clerk Maxwell y la termodinmica (1873)</h3>
          <p>
            James Clerk Maxwell, fsico escocs famoso por ecuaciones electromagnticas (1865), contribuy profundamente a termodinmica. En 1873, Maxwell public "Theory of Heat" donde reconoci que potenciales termodinmicos son funciones estado: si U(S,V) estado entonces dU = TdS - PdV tiene diferenciales exactas, permitiendo derivadas parciales cruzadas iguales (teorema Schwarz). Maxwell demostr algebraicamente que (T/V)_S = -(P/S)_V, relacin que conecta temperatura con volumen a entropa constante a derivada presin respecto entropa (propiedades opuestas). Aunque Maxwell no las llam "relaciones Maxwell", su papel en reconocer simetra en potenciales termodinmicos fue crucial. Maxwell tambin desarroll diagrama (actual diagrama p-v-T 3D) visualizando estados termodinmicos: superficie representaba todos estados equilibrio, proyecciones 2D daban diagramas P-T, p-V. Su intuicin geomtrica revolucion termodinmica, pasando de clculos algebraicos a visualizacin espacial. Maxwell muri joven (1879, 48 aos) de cncer abdominal, dejando legado: ecuaciones Maxwell electromagntica + contribuciones termodinmicas fundamentan tecnologa moderna.
          </p>
        </div>

        <div className="theory-subsection">
          <h3> Max Born y diagrama mnemotcnico (1929)</h3>
          <p>
            Max Born, fsico alemn pionero mecnica cuntica, invent "cuadrado termodinmico" o "diagrama Born" para recordar relaciones Maxwell. Born public en "Vorlesungen ber Atommechanik" (1929, reimpreso 1960 "Atomic Physics") mnemotecnia visual: cuadrado con vrtices (U,H,A,G) en esquinas, lados conectando variables (S,V,T,P). Sistema: para cada potencial, derivadas parciales respecto variables naturales dan otras propiedades. Diagrama Born elimin necesidad memorizar 4 relaciones: estudiantes construyen regla visual mecnica. El mtodo funciona porque 4 potenciales fundamentales tienen estructura matemtica simtrica (transformaciones Legendre), y Born codific esta simetra geomtricamente. Born gan Nobel Fsica 1954 por interpretacin probabilidad mecnica cuntica, pero su contribucin termodinmica (diagrama Born) es igualmente valorada en educacin. Todos textos termodinmica modernos usan cuadrado Born: estudiantes dibujan cuadrado, identifican potencial, toman derivadas cruzadas, obtienen relacin Maxwell sin memorizar frmulas. Mtodo pedaggico de Born demuestra poder visualizacin en fsica: estructura matemtica abstracta (funciones estado multivariable, derivadas exactas) hecha accesible mediante geometra simple.
          </p>
        </div>

        <div className="theory-subsection">
          <h3> Clausius-Clapeyron y ecuaciones de transiciones de fase (1850s)</h3>
          <p>
            Rudolf Clausius y Benoit Clapeyron derivaron independientemente ecuacin fundamental transiciones fase: dP/dT = H/(TV), donde H cambio entalpa (calor latente), V cambio volumen. Ecuacin Clausius-Clapeyron es consecuencia directa relaciones Maxwell: en equilibrio coexistencia, potencial Gibbs igual ambas fases G = G. Diferenciando: dG = dG  -SdT + VdP = -SdT + VdP  (S-S)dT = (V-V)dP  dP/dT = S/V. Usando relacin Clausius entropa latente S = H/T se obtiene dP/dT = H/(TV). Esta ecuacin predice lluvia: agua 100C 1 atm, agua 99C requiere P = 92.5 kPa (aproximacin lineal). Aplicacin crtica: en refrigeracin, diagramas P-T refrigerantes (R-134a, R-22, propano) son base clculos, todos derivados Clausius-Clapeyron desde relaciones Maxwell. En materiales: diamante vs grafito, G {'>'} 0 a P atmosfrica 25C (diamante no forma espontneamente), pero G depende T,P, determinables con relaciones Maxwell. Alta presin (GPa) invierte: G(P,T) {'<'} 0 en diamante, sntesis posible (HPHT - High Pressure High Temperature para diamantes sintticos industriales).
          </p>
        </div>

        <div className="theory-subsection">
          <h3> Lewis-Randall y tablas termodinmicas (1923)</h3>
          <p>
            Gilbert Newton Lewis y Merle Randall, qumicos americanos, revolucionaron termodinmica aplicada compilando primeras tablas extensas propiedades termodinmicas. Su libro "Thermodynamics and the Free Energy of Chemical Substances" (1923) presentaba datos U, H, S, G para centenares sustancias. Lewis utiliz relaciones Maxwell extensivamente: calcul entropa S partir de datos presin-temperatura (S/P)_T = -(V/T)_P medida experimentalmente mediante dilatmetros, determinando cambios S imposibles medir directamente. Para reacciones qumicas, compilaron tablas H_reaccin, G_reaccin, permitiendo predecir espontaneidad G = H - TS. Lewis-Randall tablas base toda termoqumica moderna (NIST, JANAF, actualmente computadoras). Mtodo consista: mediciones experimentales P(T,V), capacidades calorfica C_p(T), enfriamientos adiabticos, aplicando relaciones Maxwell obtenan S absoluta (tercera ley: S(0K)=0para cristal perfecto). Lewis gan (1899) al trabajar en determinacin G en electroqumica (pilas), demostrando G = -nFE donde E voltaje pila, n electrones, F constante Faraday. Lewis-Randall formaliz relaciones Maxwell en qumica: para reaccin qumica A + B  C, G = H - TS derivable de Maxwell si se conocen especies puras propiedades.
          </p>
        </div>

        <div className="theory-subsection">
          <h3> Era computacional y NIST (1980s-presente)</h3>
          <p>
            Advance computadoras permiti aplicar relaciones Maxwell a sistemas complejos con precisin sin precedentes. NIST (National Institute of Standards Technology) desarroll REFPROP (Reference Fluid Properties) software usando ecuaciones estado multiparamtrico ({'>'}{100} trminos) para agua, CO, refrigerantes, aire, cubriendo 134 fluidos. Para cada T,P de entrada, REFPROP calcula: , h, s, u, c_p, c_v, velocidad sonido, viscosidad, conductividad trmica usando relaciones exactas de Maxwell y ecuaciones estado. Precisin: 0.1% en densidad, 0.5% en entalpa. Una aplicacin: diseo ciclo Rankine central termoelctrica: NIST tabula vapor agua en toda curva saturacin + regin supercrtica, ingenieros trazan en diagrama h-s (Mollier), calculan eficiencia turbinas/bombas directamente. Otra: refrigeracin: ciclo compresin vapor (aire acondicionado) requiere propiedades R-134a en todas presiones 0-100 bar, temperaturas -40 a 50C; relaciones Maxwell garantizan consistencia. En 2019, redefinicin kelvin: constante Boltzmann fija (1.38064910 J/K), haciendo escala temperatura absoluta independiente propiedades agua/fenmenos csmicos. Relaciones Maxwell relacionan T con propiedades medibles (voltaje, presin); calibracin sensores temperatura usa precisamente estas relaciones para trazabilidad metrolgica global.
          </p>
        </div>
      </div>

      {/* Ancdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span></span> Ancdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3> Maxwell y los colores: fsica ms all ecuaciones</h3>
          <p>
            James Clerk Maxwell no solo revolucion la fsica electromagntica y la termodinmica; fue tambin la primera persona en fotografiar una imagen a color (1861). Maxwell entenda la percepcin del color como un fenmeno fsico: la luz puede descomponerse en rojo, verde y azul (RGB), que combinadas recrean cualquier color. Fotografi un tartan escocs rojo-verde con tres cmaras con filtros RGB, las proyect superpuestas recuperando el color original. Conexin inesperada: Maxwell aplicaba el mismo pensamiento de descomposicin/recomposicin a la termodinmica: una funcin de estado compleja (energa interna U) puede descomponerse en variables naturales (S,V), el potencial de Gibbs G en (T,P), cada descomposicin revelaba una estructura matemtica diferente. Maxwell visualizaba las ecuaciones como una pintura abstracta: las relaciones de simetra (derivadas cruzadas iguales) eran los "colores" subyacentes. Muri en 1879, nunca supo que su fotografa a color sera revolucionaria: la luz corpuscular (fotones) fue descubierta en 1905, la teora moderna del color espectral fue confirmada un siglo despus. Sus diagramas 3D termodinmicos (superficies p-v-T) fueron igualmente adelantados, anticipando la visualizacin de datos moderna en 30-40 aos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3> El experimento de Joule-Thomson: descubrimiento accidental</h3>
          <p>
            El efecto Joule-Thomson (el gas enfra/calienta al expandir sin hacer trabajo) fue descubierto en 1852 por William Thomson (Lord Kelvin) analizando los experimentos de James Joule (1840). Joule observ que los gases no cambian temperatura en expansin libre (expansin de Joule, V constante), pero Thomson calcul (T/P)_H derivable de las relaciones de Maxwell, mostrando que los gases reales s se enfran al expandir. El coeficiente de Joule-Thomson _JT = (T/P)_H = (V/C_p)[T(V/T)_P - V] es exactamente una combinacin de trminos de Maxwell. Para el aire a 300K: _JT  0.25 K/bar (enfra 0.25C cada vez que la presin cae un bar). El helio (tomo pequeo, pocas fuerzas atractivas): _JT negativo (se calienta al expandir). Este fenmeno fue clave para la inversin del proceso: antes de la refrigeracin, la compresin del aire (caliente) se enfra en un intercambiador de calor, la expansin (fro) enfra ms el producto. El ciclo puro de Linde (sin movimiento mecnico, solo vlvulas de presin): el aire a 200 bar y 20C pasa por una vlvula de estrangulamiento (throttling)  1 bar -50C, separable en aire lquido (80 K). Hito histrico de 1902: Linde lica el aire, revolucin industrial (soldadura con oxiacetileno, metalurgia). La fsica subyacente: las relaciones de Maxwell mostraban que la aparente violacin de la conservacin (T aparentemente no cambia en expansin isenthlpica, pero s lo hace en un gas real) era consistente con la termodinmica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3> Punto triple: definicin de temperatura</h3>
          <p>
            El agua en su punto triple (hielo-lquido-vapor coexisten) = 273.16 K exacto (definicin histrica del kelvin en 1954). Este valor especial es consecuencia de las relaciones de Maxwell: en el punto triple, el potencial de Gibbs de las tres fases es igual G_hielo = G_lquido = G_vapor. La condicin de equilibrio requiere una presin especfica (611.7 Pa) y una temperatura especfica (273.16 K). El punto triple casi nunca se observa naturalmente (la atmsfera a 101.3 kPa favorece el lquido, no la coexistencia). En el laboratorio, una clula de punto triple (aislada) contiene agua ultrapura en un ambiente al vaco, se enfra lentamente. La nucleacin del hielo octadrico (estructura perfecta), el vapor se satura, resultado de un equilibrio termodinmico exacto. Las clulas de punto triple son artefactos metrolgicos primarios: calibracin de precisin de termmetros. La redefinicin de 2019 rompi el vnculo: el kelvin fue redefinido con la constante de Boltzmann (fundamental), el punto triple qued derivado (medible pero no definidor). Implicacin: las relaciones de Maxwell predicen las propiedades del punto triple (H_fus, H_vap, G diferencias entre fases) consistentes con la observacin de 273.16 K, validando la termodinmica experimentalmente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3> Ecuacin van der Waals y constantes crticas</h3>
          <p>
            Johannes Diderik van der Waals deriv en 1873 la ecuacin de estado (P + a/V)(V - b) = RT incorporando la atraccin/repulsin molecular. Usando las relaciones de Maxwell, mostr el punto crtico (T_c, P_c, V_c) donde la curva de coexistencia termina. En el punto crtico: (P/V)_T = 0 y (P/V)_T = 0 (derivadas segundas nulas). Resolviendo se obtiene: T_c = 8a/(27Rb), P_c = a/(27b), V_c = 3b. Para CO: a = 0.3658 Pam/mol, b = 4.26710 m/mol  T_c = 304.1 K, P_c = 7.38 MPa (experimental 304.13 K, 7.3773 MPa: acuerdo excelente). Van der Waals gan el Nobel en 1910 por su ecuacin (aunque hoy se sabe que no es perfecta, especialmente cerca del punto crtico). Las relaciones de Maxwell en la ecuacin de van der Waals predicen (S/V)_T = R/(V-b) independiente de la atraccin (coeficiente a), explicando que la entropa del gas ideal mantiene su forma incluso corrigiendo para la repulsin. El factor de compresibilidad Z = PV/RT = 1 - Pr[B(T_r) + C(T_r)Pr + ...] donde Pr = P/P_c, T_r = T/T_c (presin/temperatura reducidas), se desva de van der Waals: Z_vc = 0.27 (experimentalmente es frecuentemente 0.23-0.28, indicando una estructura molecular real ms compleja). Las relaciones de Maxwell garantizan que cualquier ecuacin de estado proporciona propiedades termodinmicas autoconsistentes.
          </p>
        </div>

        <div className="theory-subsection">
          <h3> La "paradoja" del calor especfico a volumen vs presin</h3>
          <p>
            Estudiantes termodinmica frecuentemente confundem C_v (capacidad calorfica volumen const) vs C_p (presin const): C_p {'>'} C_v siempre. Razo: a presin constante, gas expande aquecendo (trabalho realizado externamente), requerendo mais calor que a volume constante. Relao exata: C_p - C_v = -T(P/T)_V/(P/V)_T = T(V/T)_P/(V/P)_T derivada Maxwell. Valores tpicos ar seco: C_v  20.8 J/(molK), C_p  29.1 J/(molK), diferencia R = 8.314 J/(molK) (gas diatmico 5/2 R vs 7/2 R). Paradoxo: em gua lquida, C_p vs C_v diferem pouco (~1%), porque (V/T)_P gua mnima (mxima densidade ~4C). gua 0C: (V/T)_P negativa (anomalia termal): aquecendo contrai levemente (expanso trmica inversa). Isto significa T(V/T)_P  0, ento C_p  C_v (medies: C_p gua = 4.18 J/(gK)  C_v). Anomalia origem: estrutura hidrognio em gua: 0C rompimento parcial de ligaes H permite reorganizao mais densa. Relaes Maxwell preveem exatamente este comportamento: se (V/T)_P = 0 ou inverte sinal, C_p - C_v colapsa para zero, explicando propriedades anmalas gua sem postulados especiais.
          </p>
        </div>

        <div className="theory-subsection">
          <h3> Superconductividade e diamagnetismo perfeito</h3>
          <p>
            Supercondutores abaixo temperatura crtica expelem campos magnticos (efeito Meissner, 1933): M = -H/ (diamagnetismo perfeito). Usando relaes Maxwell entre G, T, H variveis: (S/H)_T = (M/T)_H. Supercondutores mostram (M/T)_H {'<'} 0 (magnetizao diminui aquecendo), significando entropa magntica contribui negativamente ao normal.  transio crtica, (S/H)_T = 0 (ponto singular), revelando estrutura fase descontnua: espurcamente, eltrons emparelham em estado cplet Cooper | com gap energtico   3.5 k_B T_c. Abaixo T_c, ordem magntica completa reduz entropia (S_super {'<'} S_normal). Termodinamicamente consistente: G_super = G_normal na transio, mas slopes (G/T)_P = -S diferem, explicando calor latente negativo (resfriamento induz transio, inverso calor latente usual). Relaes Maxwell permitiram teoria Bardeen-Cooper-Schrieffer (1957) predictar estas propriedades anomalous, confirmando mecanismo pareamento eletrnico. Tecnologicamente: IMRs magnticos usam supercondutores NbTi/NbSn, campos 3-10 Tesla persistem indefinidamente sem perda energia (resistncia zero em equilbrio termodinmico).
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3> Resumen</h3>
        <ul>
          <li>
            Las relaciones de Maxwell son un conjunto de cuatro ecuaciones fundamentales que relacionan derivadas parciales 
            de propiedades termodinmicas. Se derivan del hecho de que los potenciales termodinmicos (U, H, A, G) son 
            funciones de estado con diferenciales exactas, permitiendo aplicar el teorema de Schwarz: f/xy = f/yx.
          </li>
          <li>
            Las cuatro relaciones principales son: (T/V)_S = -(P/S)_V desde U; (T/P)_S = (V/S)_P desde H; 
            (S/V)_T = (P/T)_V desde A (la ms prctica); y (S/P)_T = -(V/T)_P desde G. Estas conectan propiedades 
            fciles de medir (P, V, T) con difciles (S, derivadas a condiciones especiales).
          </li>
          <li>
            Aplicaciones prcticas incluyen: clculo de cambios de entropa en procesos termodinmicos mediante mediciones 
            de presin y temperatura; verificacin de consistencia en ecuaciones de estado y datos experimentales; derivacin 
            de coeficientes termodinmicos (expansin trmica, compresibilidad); ecuaciones TdS fundamentales para ingeniera.
          </li>
          <li>
            El diagrama mnemotcnico de Born (cuadrado termodinmico) visualiza las relaciones: vrtices representan variables 
            (S, V, T, P), lados potenciales (U, H, A, G), permitiendo derivar relaciones sin memorizacin. Mtodo pedaggico 
            revolucion enseanza termodinmica desde 1929.
          </li>
          <li>
            Histricamente, Maxwell reconoci las relaciones en 1873, Born las sistematiz 1929, Lewis-Randall usaron para 
            tablas termodinmicas 1923, y tecnologa moderna (refrigeracin, semiconductor, superconductividad) depende 
            precisamente de estas relaciones para optimizar procesos y predecir comportamiento termodinmico.
          </li>
        </ul>
      </div>
    </>
  );
};

export default RelacionesMaxwellTheory;
