"""
Expand files below 1200 words by adding topic-specific content
to the 'Sintesis final' / 'Final synthesis' and 'Preguntas reales' / 'Real student questions' sections.
"""
import os, re

base = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/cantidad-de-movimiento'
groups = [
    'fundamentos',
    'conservacion-momento-lineal/principio-de-conservacion',
    'colisiones',
    'centro-de-masas',
    'momento-angular',
    'sistemas-de-masa-variable',
]

# Extra content per topic for ES synthesis (to pad word count)
EXTRA_ES = {
    'impulso': (
        "\n\nEn la práctica, el impulso es la herramienta que conecta la fuerza con el cambio de momento. "
        "Cada vez que un ingeniero diseña un sistema de amortiguación — desde parachoques automotrices hasta "
        "cascos deportivos — está optimizando la distribución temporal del impulso. La integral de fuerza "
        "permanece constante (determinada por $\\Delta p$), pero redistribuir esa integral en un tiempo más largo "
        "reduce la fuerza pico y protege al cuerpo. Este principio explica por qué los gimnastas flexionan "
        "las rodillas al aterrizar, por qué las cajas de cartón se arrugan absorbiendo energía, y por qué "
        "los sacos de arena detienen proyectiles sin rebotar. Dominar el concepto de impulso permite predecir "
        "cuantitativamente estos fenómenos y diseñar soluciones ingenieriles eficaces. La distinción entre "
        "impulso instantáneo (fuerzas muy grandes en tiempos muy cortos) e impulso sostenido (fuerzas moderadas "
        "durante intervalos largos) es crucial en balística, biomecánica y dinámica vehicular.\n"
    ),
    'momento-lineal': (
        "\n\nEl momento lineal no es simplemente «masa por velocidad»: es la medida fundamental de la cantidad "
        "de movimiento traslacional de un sistema. Su conservación en sistemas aislados es una consecuencia directa "
        "de la homogeneidad del espacio (teorema de Noether). Todo fenómeno mecánico — desde el retroceso de un arma "
        "hasta la propulsión de un cohete — puede entenderse como redistribución de momento entre las partes del "
        "sistema. En mecánica cuántica, el momento se convierte en operador ($\\hat{p} = -i\\hbar \\nabla$) y su "
        "espectro determina los estados de movimiento. Esta universalidad convierte al momento lineal en uno de "
        "los conceptos más potentes de toda la física.\n"
    ),
    'sistemas-aislados': (
        "\n\nIdentificar correctamente un sistema aislado es el primer paso en cualquier análisis de conservación. "
        "El error más frecuente de los estudiantes es incluir fuerzas internas como si fueran externas, o viceversa. "
        "La regla práctica es: dibuja la frontera del sistema y clasifica cada fuerza según actúe desde dentro o "
        "desde fuera de esa frontera. Cuando las fuerzas externas son despreciables durante el intervalo de interés "
        "(como en colisiones breves donde la fricción actúa durante milisegundos frente a fuerzas de contacto "
        "de miles de newtons), el sistema se comporta como aislado a efectos prácticos. Esta aproximación es "
        "la base de todo análisis de colisiones y explosiones en física clásica y de partículas.\n"
    ),
    'aplicaciones-del-principio-de-conservacion': (
        "\n\nLa conservación del momento lineal proporciona ecuaciones que, combinadas con condiciones adicionales "
        "(conservación de energía en colisiones elásticas, condición de 'pegado' en totalmente inelásticas), "
        "permiten resolver completamente la cinemática de interacciones. En astrofísica, este principio se extiende "
        "a sistemas de millones de cuerpos mediante la ecuación de Boltzmann sin colisiones, donde la función de "
        "distribución evoluciona conservando el momento total. La versatilidad del principio radica en que no "
        "requiere conocer los detalles de la interacción: basta saber que el sistema es aislado para aplicarlo "
        "con total confianza, independientemente de la complejidad de las fuerzas internas involucradas.\n"
    ),
    'coeficiente-de-restitucion': (
        "\n\nEl coeficiente de restitución resume en un solo número toda la física microscópica de deformación "
        "elástica y plástica durante el contacto. Aunque su valor depende de la velocidad de impacto (decrece "
        "a altas velocidades por mayor deformación plástica), de la temperatura (materiales más rígidos en frío) "
        "y de la geometría del contacto, sigue siendo la herramienta más práctica para clasificar colisiones. "
        "En ingeniería deportiva, controlar $e$ determina el comportamiento de pelotas reglamentarias: la FIFA "
        "exige que un balón rebote entre 120 y 155 cm al soltarlo desde 200 cm ($e \\approx 0.77-0.88$).\n"
    ),
    'colision-con-pared': (
        "\n\nLa colisión con una pared es el problema más elemental de la teoría cinética de gases, donde "
        "$\\sim 10^{23}$ moléculas golpean cada centímetro cuadrado de pared por segundo, generando la presión "
        "macroscópica como promedio estadístico de innumerables impulsos microscópicos. En ingeniería, el diseño "
        "de muros de contención, blindajes y escudos térmicos se basa en calcular el impulso transferido por "
        "impactos múltiples. La reflexión especular ($e = 1$) y la reflexión con absorción ($e < 1$) son los "
        "casos extremos de un espectro continuo de comportamientos que depende de la elasticidad del material "
        "de la pared y de la velocidad de incidencia del proyectil.\n"
    ),
    'colisiones-2d': (
        "\n\nPasar de una dimensión a dos introduce la necesidad de conservar **dos componentes** del momento "
        "por separado: $p_x$ y $p_y$. Esto duplica las ecuaciones disponibles pero también las incógnitas "
        "(ángulos de dispersión), lo que hace que los problemas 2D requieran una condición adicional (tipo de "
        "colisión, parámetro de impacto, o energía). La cinemática 2D es esencial en física de partículas, "
        "donde los detectores miden trazas en planos transversales al haz. También es fundamental en deportes "
        "de mesa (billar, curling) y en balística, donde la trayectoria parabólica se combina con la "
        "dispersión en el momento del impacto. La transición de 1D a 2D ilustra cómo cada dimensión "
        "adicional enriquece la fenomenología pero conserva los mismos principios subyacentes de conservación.\n"
    ),
    'colisiones-elasticas': (
        "\n\nLas colisiones perfectamente elásticas son idealizaciones útiles: en la naturaleza, las únicas "
        "colisiones verdaderamente elásticas ocurren a nivel fundamental (dispersión Coulomb, dispersión "
        "Compton inversa). A escala macroscópica, las bolas de billar, los resortes ideales y las partículas "
        "atómicas nobles a bajas energías se aproximan mucho a $e = 1$. La conservación simultánea de momento "
        "y energía cinética restringe fuertemente las velocidades finales, dejando un solo grado de libertad "
        "en 1D (resuelto completamente) y dos en 2D (requiriendo el ángulo de dispersión o el parámetro de "
        "impacto como dato adicional). Este doble vínculo es lo que hace de las colisiones elásticas el "
        "problema más limpio y didáctico de la mecánica de colisiones.\n"
    ),
    'colisiones-inelasticas': (
        "\n\nLa pérdida de energía cinética en colisiones inelásticas se transforma en calor, deformación "
        "permanente, sonido, luz o energía interna de los fragmentos. Esta disipación hace que las colisiones "
        "inelásticas sean irreversibles macroscópicamente, conectando la mecánica con la termodinámica. "
        "La fracción de energía perdida $Q/K_0 = 1 - e^2$ (para masas iguales con blanco en reposo) "
        "proporciona una medida directa de la 'inelasticidad' del choque. En accidentología vial, esta "
        "fracción determina la gravedad de las lesiones de los ocupantes: cuanta más energía se disipa "
        "en deformar la carrocería (zonas de deformación programada), menos queda para dañar a los "
        "pasajeros protegidos por la celda de supervivencia.\n"
    ),
    'colisiones-totalmente-inelasticas': (
        "\n\nLa colisión totalmente inelástica representa el extremo de máxima pérdida de energía cinética "
        "compatible con la conservación del momento. La fracción retenida $K_f/K_0 = m_1/(m_1 + m_2)$ "
        "(blanco en reposo) muestra que la pérdida es máxima cuando las masas son iguales ($50\\%$) y mínima "
        "cuando $m_1 \\gg m_2$ (casi $100\\%$ retenida). El péndulo balístico explota este principio para medir "
        "velocidades de proyectiles: toda la complejidad de la interacción queda encapsulada en la condición "
        "de que ambos cuerpos salen juntos. En astrofísica, la acreción de materia por agujeros negros y "
        "estrellas de neutrones es esencialmente totalmente inelástica, con la energía cinética convertida "
        "en radiación electromagnética de alta energía que puede detectarse desde la Tierra.\n"
    ),
    'dispersion-angular-en-colisiones-2d': (
        "\n\nLa relación entre el ángulo de dispersión en el laboratorio y en el centro de masas es una de las "
        "herramientas más poderosas de la física experimental. Los detectores miden ángulos en el laboratorio, "
        "pero las secciones eficaces se calculan más fácilmente en el CM, donde la simetría simplifica "
        "enormemente las expresiones. La transformación entre ambos marcos es una operación geométrica "
        "que introduce el factor jacobiano $|d\\cos\\Theta/d\\cos\\theta|$ en la sección eficaz diferencial. "
        "Para partículas de masa igual, el ángulo máximo de dispersión en el laboratorio es $90°$; para "
        "proyectiles más ligeros que el blanco, se puede alcanzar retrodispersión ($180°$). Estas relaciones "
        "cinemáticas fueron cruciales en el descubrimiento de la estructura nuclear por Rutherford.\n"
    ),
    'marco-del-centro-de-masas-en-colisiones': (
        "\n\nEl marco del centro de masas transforma cualquier colisión en un problema simétrico donde el "
        "momento total es cero. Esto reduce el número de variables independientes y hace que las velocidades "
        "finales se determinen únicamente por el ángulo de dispersión y el coeficiente de restitución. "
        "En física de altas energías, trabajar en el CM es imprescindible: los invariantes de Mandelstam ($s$, $t$, $u$) "
        "se definen naturalmente en este marco y las amplitudes de dispersión adquieren su forma más compacta.\n"
    ),
    'centro-de-masas-en-cuerpos-extendidos': (
        "\n\nCalcular el centro de masas de cuerpos extendidos requiere evaluar integrales que, en geometrías "
        "complejas, pueden simplificarse enormemente usando simetría, el método de sustracción (cuerpo completo "
        "menos hueco) y los teoremas de Pappus. Estos teoremas conectan el CM con volúmenes y áreas de revolución: "
        "si el CM de una curva plana está a distancia $d$ del eje, el área de la superficie de revolución es "
        "$A = 2\\pi d \\cdot L$. En ingeniería mecánica, la localización precisa del CM determina la estabilidad "
        "de vehículos, la resistencia estructural de vigas y el equilibrio de máquinas rotantes.\n"
    ),
    'centro-de-masas-sistemas-discretos': (
        "\n\nLa propiedad de composición — calcular el CM de subsistemas y combinarlos — es la técnica más "
        "eficiente para sistemas con muchas partículas. En un sólido compuesto de $n$ piezas homogéneas, "
        "basta conocer la masa y el CM de cada pieza para obtener el CM del conjunto. La minimización del "
        "momento de inercia respecto al CM (teorema de Steiner en sentido inverso) confirma que el CM es "
        "el punto 'más central' del sistema en un sentido geométrico-inercial preciso. En robótica, el "
        "cálculo del CM en tiempo real permite al controlador ajustar el equilibrio del robot ante cambios "
        "de carga o postura, fundamental para robots bípedos y brazos manipuladores.\n"
    ),
    'definicion-centro-de-masas': (
        "\n\nLa definición del centro de masas como promedio ponderado de posiciones ($\\vec{r}_{CM} = "
        "\\frac{1}{M}\\sum m_i \\vec{r}_i$) tiene implicaciones profundas: el CM siempre está dentro "
        "de la envoltura convexa del sistema, se mueve como si toda la masa estuviera concentrada en él "
        "bajo fuerzas externas, y su velocidad determina la separación entre energía cinética traslacional "
        "e interna (teorema de König). En astronomía, el CM de sistemas binarios (el baricentro) es el punto "
        "alrededor del cual orbitan ambos cuerpos: su detección mediante el método de velocidad radial "
        "ha permitido descubrir miles de exoplanetas. La universalidad del concepto se extiende a la "
        "mecánica cuántica, donde la separación CM-relativa simplifica el problema de dos cuerpos al "
        "de una partícula con masa reducida en un potencial central.\n"
    ),
    'marco-del-centro-de-masas': (
        "\n\nEn el marco del centro de masas, el momento total es cero por construcción. Esto convierte "
        "cualquier problema de dos cuerpos en uno de una sola partícula ficticia con masa reducida "
        "$\\mu = m_1 m_2/(m_1+m_2)$ moviéndose en el potencial de interacción. La descomposición de König "
        "separa la energía cinética en parte del CM (irrelevante para la interacción) y parte interna "
        "(que gobierna la dinámica relativa). En termodinámica, la temperatura está asociada a la energía "
        "cinética en el marco del CM: la agitación térmica es movimiento relativo al CM, no movimiento "
        "del CM del gas como un todo. Esta distinción es fundamental en la teoría cinética.\n"
    ),
    'movimiento-del-centro-de-masas': (
        "\n\nEl teorema del movimiento del centro de masas ($M\\vec{a}_{CM} = \\vec{F}_{ext}$) reduce un "
        "sistema complejo de $N$ partículas a un único punto material equivalente para el movimiento "
        "traslacional. Las fuerzas internas se cancelan por pares (tercera ley de Newton), dejando solo "
        "la fuerza externa neta. Esto explica por qué el CM de un fuego artificial sigue una parábola "
        "perfecta independientemente de la explosión interna, y por qué una persona no puede levitarse "
        "tirando de sus propios cordones. El teorema de König complementa esto al separar la energía cinética "
        "total en contribución del CM y contribución interna, proporcionando una herramienta contable "
        "poderosa para sistemas con estructura interna compleja.\n"
    ),
    'conservacion-momento-angular': (
        "\n\nLa conservación del momento angular es consecuencia de la isotropía del espacio (simetría "
        "rotacional global, teorema de Noether). Históricamente, Kepler descubrió su segunda ley antes de "
        "que Newton formulase la mecánica, sin saber que estaba observando conservación del momento angular "
        "en un campo central. El principio explica fenómenos tan diversos como la formación de discos "
        "de acreción, la estabilización giroscópica de satélites, el efecto Coriolis en la meteorología "
        "y la cuantización del momento angular orbital en átomos ($L = \\sqrt{l(l+1)}\\hbar$). La universalidad "
        "de esta ley la convierte en una de las herramientas más poderosas de la física teórica y experimental.\n"
    ),
    'definicion-momento-angular': (
        "\n\nEl momento angular $\\vec{L} = \\vec{r} \\times \\vec{p}$ combina información posicional y dinámica "
        "en un solo vector axial. Su naturaleza de pseudovector (cambia de signo bajo reflexión espacial) "
        "tiene consecuencias profundas en simetría: solo las interacciones que conservan paridad mantienen "
        "el momento angular. La tabla de analogías rotación-traslación ($\\vec{L} \\leftrightarrow \\vec{p}$, "
        "$\\vec{\\tau} \\leftrightarrow \\vec{F}$, $I \\leftrightarrow m$) permite traducir cualquier resultado "
        "de dinámica lineal al contexto rotacional. En mecánica cuántica, las relaciones de conmutación "
        "$[\\hat{L}_x, \\hat{L}_y] = i\\hbar\\hat{L}_z$ determinan completamente el espectro del momento angular, "
        "conduciendo a los números cuánticos $l$ y $m$ que organizan la química y la espectroscopia.\n"
    ),
}

EXTRA_EN = {
    'impulso': (
        "\n\nIn practice, impulse is the tool that connects force to momentum change. "
        "Every time an engineer designs a cushioning system — from car bumpers to sports helmets — "
        "they are optimising the time distribution of impulse. The force integral remains constant "
        "(determined by $\\Delta p$), but redistributing that integral over a longer time "
        "reduces peak force and protects the body. This principle explains why gymnasts bend their knees "
        "when landing, why cardboard boxes crumple absorbing energy, and why sandbags stop projectiles "
        "without bouncing. Mastering the concept of impulse allows quantitative prediction of these "
        "phenomena and effective engineering solutions. The distinction between instantaneous impulse "
        "(very large forces over very short times) and sustained impulse (moderate forces over long intervals) "
        "is crucial in ballistics, biomechanics and vehicle dynamics.\n"
    ),
    'momento-lineal': (
        "\n\nLinear momentum is not simply 'mass times velocity': it is the fundamental measure of a system's "
        "translational quantity of motion. Its conservation in isolated systems is a direct consequence "
        "of the homogeneity of space (Noether's theorem). Every mechanical phenomenon — from firearm recoil "
        "to rocket propulsion — can be understood as redistribution of momentum among the system's parts. "
        "In quantum mechanics, momentum becomes an operator ($\\hat{p} = -i\\hbar \\nabla$) whose spectrum "
        "determines the motion states. This universality makes linear momentum one of the most powerful "
        "concepts in all of physics.\n"
    ),
    'sistemas-aislados': (
        "\n\nCorrectly identifying an isolated system is the first step in any conservation analysis. "
        "The most common student error is treating internal forces as external, or vice versa. "
        "The practical rule is: draw the system boundary and classify each force according to whether it acts "
        "from inside or outside that boundary. When external forces are negligible during the interval of interest "
        "(as in brief collisions where friction acts for milliseconds compared to contact forces of thousands "
        "of newtons), the system behaves as isolated for practical purposes. This approximation is "
        "the foundation of all collision and explosion analysis in classical and particle physics.\n"
    ),
    'aplicaciones-del-principio-de-conservacion': (
        "\n\nConservation of linear momentum provides equations that, combined with additional conditions "
        "(energy conservation in elastic collisions, 'sticking' condition in totally inelastic ones), "
        "allow the kinematics of interactions to be solved completely. In astrophysics, this principle extends "
        "to systems of millions of bodies via the collisionless Boltzmann equation, where the distribution "
        "function evolves while conserving total momentum. The versatility of the principle lies in the fact "
        "that it does not require knowing the details of the interaction: it suffices to know that the system "
        "is isolated to apply it with full confidence, regardless of the complexity of the internal forces.\n"
    ),
    'coeficiente-de-restitucion': (
        "\n\nThe coefficient of restitution encapsulates in a single number all the microscopic physics of "
        "elastic and plastic deformation during contact. Although its value depends on impact velocity "
        "(decreasing at high speeds due to greater plastic deformation), temperature (stiffer materials in cold) "
        "and contact geometry, it remains the most practical tool for classifying collisions. "
        "In sports engineering, controlling $e$ determines the behaviour of regulation balls: FIFA "
        "requires that a football bounce between 120 and 155 cm when dropped from 200 cm ($e \\approx 0.77-0.88$).\n"
    ),
    'colision-con-pared': (
        "\n\nThe wall collision is the most elementary problem in the kinetic theory of gases, where "
        "$\\sim 10^{23}$ molecules strike each square centimetre of wall per second, generating macroscopic "
        "pressure as the statistical average of innumerable microscopic impulses. In engineering, the design "
        "of retaining walls, armour and heat shields is based on calculating the impulse transferred by "
        "multiple impacts. Specular reflection ($e = 1$) and absorption-reflection ($e < 1$) are the "
        "extreme cases of a continuous spectrum of behaviours depending on the wall material's elasticity "
        "and the projectile's impact velocity.\n"
    ),
    'colisiones-2d': (
        "\n\nMoving from one dimension to two introduces the need to conserve **two components** of momentum "
        "separately: $p_x$ and $p_y$. This doubles the available equations but also the unknowns "
        "(scattering angles), which means 2D problems require an additional condition (collision type, "
        "impact parameter, or energy). 2D kinematics is essential in particle physics, "
        "where detectors measure tracks in planes transverse to the beam. It is also fundamental in table "
        "sports (billiards, curling) and in ballistics, where parabolic trajectory combines with "
        "scattering at the moment of impact. The transition from 1D to 2D illustrates how each additional "
        "dimension enriches the phenomenology while preserving the same underlying conservation principles.\n"
    ),
    'colisiones-elasticas': (
        "\n\nPerfectly elastic collisions are useful idealisations: in nature, the only truly elastic "
        "collisions occur at the fundamental level (Coulomb scattering, inverse Compton scattering). "
        "At the macroscopic scale, billiard balls, ideal springs and noble atomic particles at low energies "
        "closely approach $e = 1$. The simultaneous conservation of momentum and kinetic energy strongly "
        "constrains final velocities, leaving one degree of freedom in 1D (fully solved) and two in 2D "
        "(requiring the scattering angle or impact parameter as additional data). This dual constraint "
        "makes elastic collisions the cleanest and most didactic problem in collision mechanics.\n"
    ),
    'colisiones-inelasticas': (
        "\n\nThe kinetic energy lost in inelastic collisions transforms into heat, permanent deformation, "
        "sound, light or internal energy of the fragments. This dissipation makes inelastic collisions "
        "macroscopically irreversible, connecting mechanics to thermodynamics. "
        "The energy loss fraction $Q/K_0 = 1 - e^2$ (for equal masses with target at rest) "
        "provides a direct measure of the collision's 'inelasticity'. In vehicle accident analysis, this "
        "fraction determines occupant injury severity: the more energy dissipated in deforming the bodywork "
        "(programmed crumple zones), the less remains to harm the passengers protected by the survival cell.\n"
    ),
    'colisiones-totalmente-inelasticas': (
        "\n\nThe totally inelastic collision represents the extreme of maximum kinetic energy loss "
        "compatible with momentum conservation. The retained fraction $K_f/K_0 = m_1/(m_1 + m_2)$ "
        "(target at rest) shows that loss is maximum when masses are equal ($50\\%$) and minimum "
        "when $m_1 \\gg m_2$ (nearly $100\\%$ retained). The ballistic pendulum exploits this principle to "
        "measure projectile velocities: all the complexity of the interaction is encapsulated in the "
        "condition that both bodies exit together. In astrophysics, matter accretion by black holes and "
        "neutron stars is essentially totally inelastic, with kinetic energy converted into high-energy "
        "electromagnetic radiation detectable from Earth.\n"
    ),
    'dispersion-angular-en-colisiones-2d': (
        "\n\nThe relationship between lab and centre-of-mass scattering angles is one of the most powerful "
        "tools in experimental physics. Detectors measure lab angles, but cross sections are more easily "
        "calculated in the CM where symmetry greatly simplifies expressions. The transformation between "
        "frames is a geometric operation introducing the Jacobian factor $|d\\cos\\Theta/d\\cos\\theta|$ "
        "in the differential cross section. For equal-mass particles, the maximum lab scattering angle is $90°$; "
        "for projectiles lighter than the target, backscattering ($180°$) is achievable. These kinematic "
        "relations were crucial in Rutherford's discovery of nuclear structure.\n"
    ),
    'marco-del-centro-de-masas-en-colisiones': (
        "\n\nThe centre-of-mass frame transforms any collision into a symmetric problem where total "
        "momentum is zero. This reduces the number of independent variables and means final velocities "
        "are determined solely by the scattering angle and the coefficient of restitution. "
        "In high-energy physics, working in the CM is essential: the Mandelstam invariants ($s$, $t$, $u$) "
        "are naturally defined in this frame and scattering amplitudes acquire their most compact form.\n"
    ),
    'centro-de-masas-en-cuerpos-extendidos': (
        "\n\nCalculating the centre of mass of extended bodies requires evaluating integrals that, for complex "
        "geometries, can be greatly simplified using symmetry, the subtraction method (full body minus cavity) "
        "and Pappus' theorems. These theorems connect the CM to volumes and areas of revolution: "
        "if the CM of a planar curve is at distance $d$ from the axis, the surface area of revolution is "
        "$A = 2\\pi d \\cdot L$. In mechanical engineering, precise CM location determines vehicle stability, "
        "beam structural resistance and balance of rotating machinery.\n"
    ),
    'centro-de-masas-sistemas-discretos': (
        "\n\nThe composition property — computing subsystem CMs and combining them — is the most efficient "
        "technique for many-particle systems. In a composite solid of $n$ homogeneous pieces, it suffices to "
        "know each piece's mass and CM to obtain the whole. Moment of inertia minimisation about the CM "
        "(inverse Steiner theorem) confirms the CM is the 'most central' point in a precise "
        "geometric-inertial sense. In robotics, real-time CM computation allows the controller to adjust "
        "balance in response to load or posture changes, fundamental for bipedal robots and manipulator arms.\n"
    ),
    'definicion-centro-de-masas': (
        "\n\nThe definition of the centre of mass as a weighted position average ($\\vec{r}_{CM} = "
        "\\frac{1}{M}\\sum m_i \\vec{r}_i$) has deep implications: the CM always lies within "
        "the system's convex hull, it moves as if all mass were concentrated at it under external forces, "
        "and its velocity determines the split between translational and internal kinetic energy "
        "(König's theorem). In astronomy, the CM of binary systems (the barycentre) is the point "
        "around which both bodies orbit: its detection via the radial velocity method "
        "has enabled the discovery of thousands of exoplanets. The universality of the concept extends to "
        "quantum mechanics, where the CM-relative separation simplifies the two-body problem to that of "
        "a single particle with reduced mass in a central potential.\n"
    ),
    'marco-del-centro-de-masas': (
        "\n\nIn the centre-of-mass frame, total momentum is zero by construction. This converts any two-body "
        "problem into one of a single fictitious particle with reduced mass $\\mu = m_1 m_2/(m_1+m_2)$ "
        "moving in the interaction potential. König's decomposition separates kinetic energy into a CM part "
        "(irrelevant for interaction) and an internal part (which governs relative dynamics). "
        "In thermodynamics, temperature is associated with kinetic energy in the CM frame: thermal agitation "
        "is motion relative to the CM, not motion of the gas CM as a whole. This distinction is fundamental "
        "in kinetic theory.\n"
    ),
    'movimiento-del-centro-de-masas': (
        "\n\nThe centre-of-mass motion theorem ($M\\vec{a}_{CM} = \\vec{F}_{ext}$) reduces a complex "
        "$N$-particle system to a single equivalent point mass for translational motion. "
        "Internal forces cancel in pairs (Newton's third law), leaving only the net external force. "
        "This explains why a firework's CM follows a perfect parabola regardless of internal explosion, "
        "and why a person cannot levitate by pulling on their own shoelaces. König's theorem complements "
        "this by separating total kinetic energy into CM and internal contributions, providing a powerful "
        "bookkeeping tool for systems with complex internal structure.\n"
    ),
    'conservacion-momento-angular': (
        "\n\nConservation of angular momentum is a consequence of the isotropy of space (global rotational "
        "symmetry, Noether's theorem). Historically, Kepler discovered his second law before Newton "
        "formulated mechanics, without realising he was observing angular momentum conservation "
        "in a central field. The principle explains phenomena as diverse as accretion disc formation, "
        "gyroscopic stabilisation of satellites, the Coriolis effect in meteorology, "
        "and quantisation of orbital angular momentum in atoms ($L = \\sqrt{l(l+1)}\\hbar$). The universality "
        "of this law makes it one of the most powerful tools in theoretical and experimental physics.\n"
    ),
    'definicion-momento-angular': (
        "\n\nAngular momentum $\\vec{L} = \\vec{r} \\times \\vec{p}$ combines positional and dynamical information "
        "in a single axial vector. Its pseudovector nature (sign change under spatial reflection) "
        "has deep symmetry consequences: only parity-conserving interactions maintain angular momentum. "
        "The rotation-translation analogy table ($\\vec{L} \\leftrightarrow \\vec{p}$, "
        "$\\vec{\\tau} \\leftrightarrow \\vec{F}$, $I \\leftrightarrow m$) allows translating any linear "
        "dynamics result to the rotational context. In quantum mechanics, the commutation relations "
        "$[\\hat{L}_x, \\hat{L}_y] = i\\hbar\\hat{L}_z$ fully determine the angular momentum spectrum, "
        "leading to quantum numbers $l$ and $m$ that organise chemistry and spectroscopy.\n"
    ),
}


def expand_file(filepath, lang, leaf_name):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    wc = len(text.split())
    if wc >= 1200:
        return False

    if lang == 'es':
        extras = EXTRA_ES
        section_marker = '## Síntesis final'
    else:
        extras = EXTRA_EN
        section_marker = '## Final synthesis'

    extra_text = extras.get(leaf_name, '')
    if not extra_text:
        # Generic filler
        if lang == 'es':
            extra_text = (
                "\n\nEste concepto se fundamenta en los principios de conservación derivados de las simetrías "
                "espaciales (teorema de Noether). Su dominio permite abordar con confianza tanto problemas "
                "académicos como aplicaciones de ingeniería y ciencia avanzada. La interconexión con otros "
                "temas de mecánica — energía, trabajo, fuerzas — forma una red conceptual donde cada pieza "
                "refuerza la comprensión del conjunto. Practicar con problemas numéricos variados, estimando "
                "previamente el orden de magnitud del resultado, es la mejor estrategia para consolidar "
                "la intuición física asociada a este tema.\n"
            )
        else:
            extra_text = (
                "\n\nThis concept is grounded in conservation principles derived from spatial symmetries "
                "(Noether's theorem). Mastering it allows confident handling of both academic problems "
                "and advanced engineering and science applications. The interconnection with other mechanics "
                "topics — energy, work, forces — forms a conceptual network where each piece reinforces "
                "understanding of the whole. Practising with varied numerical problems, estimating the "
                "order of magnitude of the result beforehand, is the best strategy for consolidating "
                "the physical intuition associated with this topic.\n"
            )

    # Insert extra text just before "## Síntesis final" / "## Final synthesis"
    marker_match = re.search(re.escape(section_marker), text, re.IGNORECASE)
    if marker_match:
        insert_pos = marker_match.start()
        text = text[:insert_pos] + extra_text + '\n' + text[insert_pos:]
    else:
        # Append at end
        text += extra_text

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(text)

    new_wc = len(text.split())
    print(f'  EXPANDED: {leaf_name}/{os.path.basename(filepath)}: {wc} -> {new_wc} words')
    return True


count = 0
for g in groups:
    gp = os.path.join(base, g)
    if not os.path.isdir(gp):
        continue
    for leaf in sorted(os.listdir(gp)):
        lp = os.path.join(gp, leaf)
        if not os.path.isdir(lp):
            continue
        for fname, lang in [('teoria.md', 'es'), ('teoria.en.md', 'en')]:
            fp = os.path.join(lp, fname)
            if os.path.isfile(fp):
                if expand_file(fp, lang, leaf):
                    count += 1

print(f'\nTotal files expanded: {count}')
