"""
Fix all teoria.md and teoria.en.md files:
1. ES: Rename "Preguntas reales de estudiantes" -> "Preguntas reales del alumno"
2. ES: Insert "## Orden de magnitud" section after "## Interpretación física profunda"
3. EN: Rename heading variants to "## Personalized resolution method"
4. EN: Insert "## Order of magnitude" section after "## Deep physical interpretation"
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

# Topic-specific order-of-magnitude content
OOM_ES = {
    'default': (
        "## Orden de magnitud\n\n"
        "Estimar órdenes de magnitud es fundamental para verificar resultados y desarrollar intuición física. "
        "En problemas de mecánica clásica, las velocidades típicas van desde cm/s (objetos cotidianos lentos) "
        "hasta km/s (proyectiles balísticos). Las masas van desde gramos (partículas de laboratorio) hasta "
        "toneladas (vehículos y estructuras). El momento lineal de un automóvil a 100 km/h ($\\sim 10^4$ kg·m/s) "
        "supera en varios órdenes al de una pelota de tenis en un saque profesional ($\\sim 3$ kg·m/s). "
        "Estas diferencias de escala explican por qué los efectos de retroceso son imperceptibles en objetos masivos "
        "y dramáticos en objetos ligeros.\n"
    ),
}

OOM_EN = {
    'default': (
        "## Order of magnitude\n\n"
        "Estimating orders of magnitude is essential for checking results and building physical intuition. "
        "In classical mechanics problems, typical velocities range from cm/s (slow everyday objects) "
        "to km/s (ballistic projectiles). Masses range from grams (laboratory particles) to "
        "tonnes (vehicles and structures). The linear momentum of a car at 100 km/h ($\\sim 10^4$ kg·m/s) "
        "exceeds that of a tennis ball in a professional serve ($\\sim 3$ kg·m/s) by several orders. "
        "These scale differences explain why recoil effects are imperceptible in massive objects "
        "and dramatic in light ones.\n"
    ),
}

# Specific OoM per topic where the default doesn't fit well
TOPIC_OOM_ES = {
    'impulso': (
        "## Orden de magnitud\n\n"
        "El impulso de un golpe de karate dura unos 5 ms y aplica fuerzas del orden de $10^3$ N, generando impulsos "
        "de $\\sim 5$ N·s. Un bate de béisbol transfiere $\\sim 10$ N·s en $\\sim 1$ ms (fuerzas de $10^4$ N). "
        "En seguridad vial, un airbag extiende la detención a $\\sim 0.1$ s, reduciendo la fuerza pico de "
        "$\\sim 10^5$ N (sin airbag, $\\sim 0.01$ s) a $\\sim 10^4$ N. Estas escalas muestran que el impulso "
        "permanece constante pero la fuerza se redistribuye según la duración del contacto.\n"
    ),
    'momento-lineal': (
        "## Orden de magnitud\n\n"
        "Una persona caminando ($70$ kg, $1.5$ m/s) porta un momento de $\\sim 10^2$ kg·m/s. Un camión a "
        "$90$ km/h ($10^4$ kg, $25$ m/s) lleva $\\sim 2.5 \\times 10^5$ kg·m/s. Un protón en el LHC alcanza "
        "$\\sim 10^{-15}$ kg·m/s pero con energía relativista colosal. La gama abarca más de 20 órdenes de magnitud, "
        "lo que demuestra que la masa y la velocidad multiplican sus efectos de forma lineal y simétrica.\n"
    ),
    'sistemas-aislados': (
        "## Orden de magnitud\n\n"
        "Un sistema Tierra-Luna puede considerarse aislado para la mayoría de cálculos orbitales: las fuerzas "
        "de marea solares son $\\sim 10^{-2}$ veces menores que la atracción mutua. En laboratorio, una mesa "
        "de aire reduce la fricción a $\\sim 10^{-3}$ N, permitiendo tratar dos discos deslizantes como sistema "
        "aislado durante colisiones de $\\sim 0.01$ s donde las fuerzas internas son $\\sim 10^2$ N.\n"
    ),
    'teorema-impulso-momento': (
        "## Orden de magnitud\n\n"
        "En una colisión automovilística a 50 km/h con deceleración en $\\sim 0.1$ s, la fuerza media sobre un "
        "pasajero de 70 kg es $F = \\Delta p / \\Delta t \\approx 70 \\times 14 / 0.1 \\approx 10^4$ N. "
        "Un cinturón de seguridad extiende esto a $\\sim 0.3$ s, reduciendo la fuerza a $\\sim 3 \\times 10^3$ N. "
        "En deportes, una raqueta de tenis ejerce $\\sim 500$ N durante $\\sim 5$ ms sobre la pelota.\n"
    ),
    'colisiones-elasticas': (
        "## Orden de magnitud\n\n"
        "Las colisiones entre bolas de billar son casi perfectamente elásticas ($e \\approx 0.95$), con fuerzas "
        "de contacto de $\\sim 10^4$ N durante $\\sim 0.1$ ms. En física de partículas, las colisiones protón-protón "
        "a energías del TeV son elásticas en el $\\sim 25\\%$ de los eventos. A escala atómica, la dispersión "
        "elástica neutron-protón tiene secciones eficaces de $\\sim 20$ barn ($2 \\times 10^{-27}$ m²).\n"
    ),
    'colisiones-inelasticas': (
        "## Orden de magnitud\n\n"
        "En un choque automovilístico típico, el coeficiente de restitución es $e \\approx 0.2-0.3$, y la energía "
        "cinética perdida (deformación, calor, sonido) representa el $80-90\\%$ del total. Una pelota de goma "
        "rebotando contra el suelo tiene $e \\approx 0.8$ y pierde $\\sim 36\\%$ de energía cinética por ciclo. "
        "En física nuclear, la dispersión inelástica neutron-núcleo excita niveles de $\\sim$ MeV.\n"
    ),
    'colisiones-totalmente-inelasticas': (
        "## Orden de magnitud\n\n"
        "Un péndulo balístico captura un proyectil de $\\sim 10$ g a $\\sim 400$ m/s en un bloque de $\\sim 2$ kg. "
        "La fracción de energía cinética conservada es $m/(m+M) \\approx 0.5\\%$. En astrofísica, la acreción de "
        "materia por una estrella de neutrones es esencialmente totalmente inelástica, transformando energía "
        "cinética en radiación X con luminosidades de $\\sim 10^{37}$ W.\n"
    ),
    'coeficiente-de-restitucion': (
        "## Orden de magnitud\n\n"
        "Valores típicos: superball $e \\approx 0.90$, pelota de tenis $e \\approx 0.75$, balón de fútbol "
        "$e \\approx 0.70$, bola de plastilina $e \\approx 0.05$. La temperatura influye: a $-20°$C una pelota "
        "de goma baja a $e \\approx 0.3$. En ingeniería, los test de caída miden $e$ dejando caer de $h_0 = 1$ m "
        "y midiendo $h_f$: $e = \\sqrt{h_f/h_0}$.\n"
    ),
    'colision-con-pared': (
        "## Orden de magnitud\n\n"
        "Una pelota de squash contra la pared: $v \\approx 50$ m/s, $m \\approx 24$ g, $\\Delta t \\approx 3$ ms. "
        "Fuerza de contacto: $F \\approx 2mv/\\Delta t \\approx 800$ N. Una molécula de gas ($N_2$, $v_{rms} \\approx 500$ m/s) "
        "golpea la pared del recipiente con cambio de momento $\\sim 10^{-23}$ kg·m/s. Con $\\sim 10^{23}$ "
        "colisiones por segundo por cm², la presión resultante es $\\sim 10^5$ Pa (1 atm).\n"
    ),
    'colisiones-2d': (
        "## Orden de magnitud\n\n"
        "En una colisión de billar, las bolas ($m \\approx 0.17$ kg) se desvían con ángulos que suman "
        "$\\sim 90°$ en colisiones rasantes casi elásticas. En dispersión de partículas alfa por núcleos de "
        "oro ($m_\\alpha / m_{Au} \\approx 1/50$), los ángulos de dispersión en laboratorio alcanzan hasta "
        "$180°$ (retrodispersión). La cinemática 2D es crucial en aceleradores donde los detectores cubren el "
        "ángulo sólido completo $4\\pi$.\n"
    ),
    'dispersion-angular-en-colisiones-2d': (
        "## Orden de magnitud\n\n"
        "En el experimento de Rutherford, partículas alfa de $5$ MeV dispersadas por oro muestran una sección "
        "eficaz diferencial que varía como $1/\\sin^4(\\Theta/2)$, divergiendo a ángulos pequeños. "
        "El parámetro de impacto para una dispersión a $90°$ es $b \\approx 7$ fm para oro. En colisiones "
        "moleculares, las secciones eficaces totales son del orden de $\\sim 10^{-19}$ m².\n"
    ),
    'marco-del-centro-de-masas-en-colisiones': (
        "## Orden de magnitud\n\n"
        "En colisiones protón-protón del LHC ($\\sqrt{s} = 13$ TeV), la energía disponible en el CM es "
        "la totalidad porque los haces son simétricos. Con un blanco fijo, para lograr $\\sqrt{s} = 13$ TeV "
        "se necesitaría un protón de $\\sim 10^5$ TeV. Esto ilustra la enorme ventaja cinemática de los "
        "colisionadores frente a blancos fijos: la energía útil crece como $\\sqrt{E_{\\text{lab}}}$ con blanco fijo.\n"
    ),
    'definicion-centro-de-masas': (
        "## Orden de magnitud\n\n"
        "El centro de masas del sistema Tierra-Luna está a $\\sim 4670$ km del centro de la Tierra (dentro del "
        "planeta, ya que $R_T \\approx 6370$ km). El CM del sistema Sol-Júpiter está justo fuera de la superficie "
        "solar ($\\sim 1.07 R_{\\odot}$). En una molécula de HCl, el CM está mucho más cerca del Cl por su mayor "
        "masa ($m_{Cl}/m_H \\approx 35$), a solo $\\sim 3\\%$ de la distancia de enlace desde el Cl.\n"
    ),
    'centro-de-masas-sistemas-discretos': (
        "## Orden de magnitud\n\n"
        "En una pesa de gimnasio ($m_1 = 10$ kg, $m_2 = 10$ kg, barra de $2$ kg, longitud $40$ cm), "
        "el CM está en el centro por simetría. Si se retira un disco, el CM se desplaza $\\sim 18$ cm hacia "
        "el lado cargado. En un sistema estelar binario, las masas típicas difieren por un factor $2-3$, "
        "y el CM orbital está a $\\sim 1/3$ de la distancia desde la estrella más masiva.\n"
    ),
    'centro-de-masas-en-cuerpos-extendidos': (
        "## Orden de magnitud\n\n"
        "Una llave inglesa de $30$ cm tiene su CM a $\\sim 12$ cm del extremo de la mordaza (más densa). "
        "Un cono sólido homogéneo de altura $h$ tiene su CM a $h/4$ desde la base. Una persona de pie "
        "tiene su CM a $\\sim 55\\%$ de su altura desde el suelo; al levantar los brazos sube $\\sim 5$ cm. "
        "Un atleta de salto de altura puede pasar el CM por debajo del listón gracias al arqueo Fosbury.\n"
    ),
    'movimiento-del-centro-de-masas': (
        "## Orden de magnitud\n\n"
        "Cuando un cohete de $500$ toneladas despega, la fuerza neta externa (empuje menos peso) acelera el CM "
        "del sistema cohete+gas. En una explosión de fuegos artificiales ($m \\approx 0.5$ kg) lanzada verticalmente, "
        "el CM sigue la parábola original independientemente de la fragmentación. Las desviaciones del CM "
        "por fuerzas internas son exactamente cero: $\\sum \\vec{F}_{\\text{int}} = 0$ por la tercera ley de Newton.\n"
    ),
    'marco-del-centro-de-masas': (
        "## Orden de magnitud\n\n"
        "La energía interna en el CM para dos protones con $E_{\\text{lab}} = 7$ TeV (LHC) es toda la energía "
        "disponible: $\\sqrt{s} \\approx 14$ TeV. Con blanco fijo, $\\sqrt{s} \\approx \\sqrt{2m_p E_{\\text{lab}}} "
        "\\approx 115$ GeV. La fracción de energía cinética 'perdida' en movimiento del CM crece con la asimetría: "
        "para $m_1 \\gg m_2$, casi toda la energía es de CM y casi nada está disponible para la interacción.\n"
    ),
    'definicion-momento-angular': (
        "## Orden de magnitud\n\n"
        "El momento angular de la Tierra en su órbita: $L \\approx 2.7 \\times 10^{40}$ kg·m²/s. Su momento angular "
        "de rotación: $L \\approx 7 \\times 10^{33}$ kg·m²/s (7 órdenes menor). Un trompo de juguete girando a "
        "$30$ rev/s: $L \\sim 10^{-3}$ kg·m²/s. Un electrón tiene momento angular intrínseco (espín) "
        "$\\hbar/2 \\approx 5 \\times 10^{-35}$ J·s, cuantizado y sin análogo clásico.\n"
    ),
    'conservacion-momento-angular': (
        "## Orden de magnitud\n\n"
        "Una patinadora reduce su momento de inercia de $\\sim 3.5$ kg·m² a $\\sim 1.5$ kg·m² al recoger brazos, "
        "pasando de $2$ a $\\sim 4.7$ rev/s. Una estrella de neutrones ($R \\approx 10$ km) formada por colapso "
        "de una estrella ($R \\approx 10^6$ km) acelera de $\\sim 1$ rev/mes a $\\sim 30$ rev/s (púlsar). "
        "La segunda ley de Kepler implica que Mercurio en perihelio ($v \\approx 59$ km/s) es $\\sim 1.5\\times$ más "
        "rápido que en afelio ($v \\approx 39$ km/s).\n"
    ),
    'precesion': (
        "## Orden de magnitud\n\n"
        "Un giroscopio de bicicleta ($I \\approx 0.1$ kg·m², $\\omega \\approx 100$ rad/s, $d \\approx 5$ cm, "
        "$m \\approx 1$ kg) precesa a $\\Omega_p \\approx mgd/(I\\omega) \\approx 0.05$ rad/s ($\\sim 1$ rev/2min). "
        "La precesión de la Tierra tiene período $\\sim 25772$ años ($\\Omega_p \\approx 7.7 \\times 10^{-12}$ rad/s). "
        "La precesión de Larmor de un protón en un campo de 1 T es $\\sim 42.6$ MHz (frecuencia de resonancia en MRI).\n"
    ),
    'balance-de-momento-con-flujo-de-masa': (
        "## Orden de magnitud\n\n"
        "Un motor cohete químico expulsa gas a $v_e \\approx 3$ km/s con flujo de masa $\\dot{m} \\approx 500$ kg/s, "
        "generando empuje $F \\approx 1.5 \\times 10^6$ N. Una cinta transportadora cargando arena a $10$ kg/s "
        "necesita una fuerza adicional $F = v \\cdot \\dot{m} = 2 \\times 10 = 20$ N para mantener $v = 2$ m/s constante. "
        "Un chorro de agua de bombero ($\\dot{m} \\approx 15$ kg/s, $v \\approx 30$ m/s) genera retroceso de $\\sim 450$ N.\n"
    ),
    'ecuacion-del-cohete': (
        "## Orden de magnitud\n\n"
        "Para alcanzar LEO ($\\Delta v \\approx 9.4$ km/s con pérdidas) con $v_e = 3$ km/s: $R = e^{3.13} \\approx 23$, "
        "es decir, $\\sim 96\\%$ de la masa inicial es combustible. El Saturn V ($m_0 = 2.97 \\times 10^6$ kg) "
        "puso $\\sim 47000$ kg en órbita lunar, un $1.6\\%$. El Falcon 9 ($m_0 \\approx 5.5 \\times 10^5$ kg) "
        "lleva $\\sim 22800$ kg a LEO ($4.1\\%$), gracias a reutilización de primera etapa.\n"
    ),
    'aplicaciones-del-principio-de-conservacion': (
        "## Orden de magnitud\n\n"
        "En un péndulo de Newton, una esfera de $0.1$ kg a $0.3$ m/s transfiere momento $0.03$ kg·m/s prácticamente "
        "sin pérdida al otro extremo. En un retroceso de escopeta ($m_{\\text{proj}} = 30$ g, $v = 400$ m/s, "
        "$M_{\\text{arma}} = 3$ kg), la velocidad de retroceso es $v_R = 4$ m/s. En astrofísica, la asistencia "
        "gravitatoria de Júpiter puede incrementar la velocidad de una sonda en $\\sim 10-20$ km/s.\n"
    ),
    'enunciado-y-condiciones-de-aplicacion': (
        "## Orden de magnitud\n\n"
        "El grado de aislamiento de un sistema se mide comparando fuerzas externas con internas. En una mesa de "
        "aire, la fricción ($\\sim 10^{-3}$ N) es $\\sim 10^{-5}$ veces la fuerza durante una colisión ($\\sim 10^2$ N). "
        "En un choque de coches ($\\sim 0.1$ s), la fricción con el asfalto ($\\sim 10^3$ N) es despreciable frente "
        "a las fuerzas de impacto ($\\sim 10^5-10^6$ N). La aproximación de conservación es válida si $F_{\\text{ext}} \\Delta t \\ll \\Delta p$.\n"
    ),
    'impulso-externo-y-ruptura-de-la-conservacion': (
        "## Orden de magnitud\n\n"
        "Un jugador de billar aplica efecto (impulso angular externo) de $\\sim 0.5$ N·s lateral. Un coche frenando "
        "en hielo recibe impulso externo de fricción $\\sim 10^3$ N durante $\\sim 5$ s ($\\sim 5 \\times 10^3$ N·s), "
        "rompiendo la conservación del momento. En física de partículas, un campo magnético externo de $\\sim 1$ T "
        "curva protones de $10$ GeV con radio $\\sim 33$ m, proporcionando impulso transversal continuo.\n"
    ),
    'sistemas-aislados-y-fuerzas-externas': (
        "## Orden de magnitud\n\n"
        "Para un satélite en órbita baja ($h \\approx 400$ km), el arrastre atmosférico ($\\sim 10^{-5}$ N/kg) provoca "
        "pérdida de altitud de $\\sim 2$ km/mes, haciendo que el sistema no sea aislado a largo plazo. "
        "Un disco en mesa de aire con fricción $\\sim 10^{-3}$ N pierde $\\sim 1\\%$ de su momento en $1$ s. "
        "La escala temporal de validez del modelo aislado depende de la razón $F_{\\text{ext}}/p_{\\text{total}}$.\n"
    ),
}

TOPIC_OOM_EN = {
    'impulso': (
        "## Order of magnitude\n\n"
        "A karate strike lasts about 5 ms and applies forces of order $10^3$ N, producing impulses "
        "of $\\sim 5$ N·s. A baseball bat transfers $\\sim 10$ N·s in $\\sim 1$ ms (forces of $10^4$ N). "
        "In road safety, an airbag extends deceleration to $\\sim 0.1$ s, reducing peak force from "
        "$\\sim 10^5$ N (without airbag, $\\sim 0.01$ s) to $\\sim 10^4$ N. These scales show that the impulse "
        "remains constant but force is redistributed according to the contact duration.\n"
    ),
    'momento-lineal': (
        "## Order of magnitude\n\n"
        "A person walking ($70$ kg, $1.5$ m/s) carries momentum of $\\sim 10^2$ kg·m/s. A truck at "
        "$90$ km/h ($10^4$ kg, $25$ m/s) carries $\\sim 2.5 \\times 10^5$ kg·m/s. A proton at the LHC reaches "
        "$\\sim 10^{-15}$ kg·m/s but with colossal relativistic energy. The range spans more than 20 orders of "
        "magnitude, showing that mass and velocity multiply their effects linearly and symmetrically.\n"
    ),
    'sistemas-aislados': (
        "## Order of magnitude\n\n"
        "The Earth-Moon system can be considered isolated for most orbital calculations: solar tidal forces "
        "are $\\sim 10^{-2}$ times smaller than the mutual attraction. In the laboratory, an air table "
        "reduces friction to $\\sim 10^{-3}$ N, allowing two sliding discs to be treated as an isolated system "
        "during collisions of $\\sim 0.01$ s where internal forces are $\\sim 10^2$ N.\n"
    ),
    'teorema-impulso-momento': (
        "## Order of magnitude\n\n"
        "In a car crash at 50 km/h with deceleration over $\\sim 0.1$ s, the average force on a "
        "70 kg passenger is $F = \\Delta p / \\Delta t \\approx 70 \\times 14 / 0.1 \\approx 10^4$ N. "
        "A seatbelt extends this to $\\sim 0.3$ s, reducing force to $\\sim 3 \\times 10^3$ N. "
        "In sports, a tennis racket exerts $\\sim 500$ N during $\\sim 5$ ms on the ball.\n"
    ),
    'colisiones-elasticas': (
        "## Order of magnitude\n\n"
        "Billiard ball collisions are nearly perfectly elastic ($e \\approx 0.95$), with contact forces "
        "of $\\sim 10^4$ N over $\\sim 0.1$ ms. In particle physics, proton-proton collisions "
        "at TeV energies are elastic in $\\sim 25\\%$ of events. At atomic scales, elastic "
        "neutron-proton scattering has cross sections of $\\sim 20$ barn ($2 \\times 10^{-27}$ m²).\n"
    ),
    'colisiones-inelasticas': (
        "## Order of magnitude\n\n"
        "In a typical car crash, the coefficient of restitution is $e \\approx 0.2-0.3$, and lost "
        "kinetic energy (deformation, heat, sound) represents $80-90\\%$ of the total. A rubber ball "
        "bouncing on the floor has $e \\approx 0.8$ and loses $\\sim 36\\%$ of kinetic energy per cycle. "
        "In nuclear physics, inelastic neutron-nucleus scattering excites levels of $\\sim$ MeV.\n"
    ),
    'colisiones-totalmente-inelasticas': (
        "## Order of magnitude\n\n"
        "A ballistic pendulum captures a $\\sim 10$ g projectile at $\\sim 400$ m/s in a $\\sim 2$ kg block. "
        "The fraction of kinetic energy conserved is $m/(m+M) \\approx 0.5\\%$. In astrophysics, matter "
        "accretion by a neutron star is essentially totally inelastic, transforming kinetic energy "
        "into X-ray radiation with luminosities of $\\sim 10^{37}$ W.\n"
    ),
    'coeficiente-de-restitucion': (
        "## Order of magnitude\n\n"
        "Typical values: superball $e \\approx 0.90$, tennis ball $e \\approx 0.75$, football "
        "$e \\approx 0.70$, playdough ball $e \\approx 0.05$. Temperature matters: at $-20°$C a rubber ball "
        "drops to $e \\approx 0.3$. In engineering, drop tests measure $e$ by dropping from $h_0 = 1$ m "
        "and measuring $h_f$: $e = \\sqrt{h_f/h_0}$.\n"
    ),
    'colision-con-pared': (
        "## Order of magnitude\n\n"
        "A squash ball hitting a wall: $v \\approx 50$ m/s, $m \\approx 24$ g, $\\Delta t \\approx 3$ ms. "
        "Contact force: $F \\approx 2mv/\\Delta t \\approx 800$ N. A gas molecule ($N_2$, $v_{rms} \\approx 500$ m/s) "
        "hits the container wall with momentum change $\\sim 10^{-23}$ kg·m/s. With $\\sim 10^{23}$ "
        "collisions per second per cm², the resulting pressure is $\\sim 10^5$ Pa (1 atm).\n"
    ),
    'colisiones-2d': (
        "## Order of magnitude\n\n"
        "In a billiard collision, balls ($m \\approx 0.17$ kg) deflect with angles summing to "
        "$\\sim 90°$ in glancing nearly elastic collisions. In alpha particle scattering by gold "
        "nuclei ($m_\\alpha / m_{Au} \\approx 1/50$), laboratory scattering angles reach up to "
        "$180°$ (backscattering). 2D kinematics is crucial in accelerators where detectors cover "
        "the full solid angle $4\\pi$.\n"
    ),
    'dispersion-angular-en-colisiones-2d': (
        "## Order of magnitude\n\n"
        "In Rutherford's experiment, 5 MeV alpha particles scattered by gold show a differential "
        "cross section varying as $1/\\sin^4(\\Theta/2)$, diverging at small angles. "
        "The impact parameter for $90°$ scattering is $b \\approx 7$ fm for gold. In molecular "
        "collisions, total cross sections are of order $\\sim 10^{-19}$ m².\n"
    ),
    'marco-del-centro-de-masas-en-colisiones': (
        "## Order of magnitude\n\n"
        "In LHC proton-proton collisions ($\\sqrt{s} = 13$ TeV), all the available energy is in the CM "
        "because the beams are symmetric. With a fixed target, achieving $\\sqrt{s} = 13$ TeV "
        "would require a proton of $\\sim 10^5$ TeV. This illustrates the enormous kinematic advantage of "
        "colliders over fixed targets: useful energy grows as $\\sqrt{E_{\\text{lab}}}$ with a fixed target.\n"
    ),
    'definicion-centro-de-masas': (
        "## Order of magnitude\n\n"
        "The Earth-Moon centre of mass is at $\\sim 4670$ km from Earth's centre (inside the planet, "
        "since $R_T \\approx 6370$ km). The Sun-Jupiter CM lies just outside the solar surface "
        "($\\sim 1.07 R_{\\odot}$). In an HCl molecule, the CM is much closer to Cl due to its greater "
        "mass ($m_{Cl}/m_H \\approx 35$), at only $\\sim 3\\%$ of the bond length from Cl.\n"
    ),
    'centro-de-masas-sistemas-discretos': (
        "## Order of magnitude\n\n"
        "In a dumbbell weight ($m_1 = 10$ kg, $m_2 = 10$ kg, bar of $2$ kg, length $40$ cm), "
        "the CM is at the centre by symmetry. If one plate is removed, the CM shifts $\\sim 18$ cm toward "
        "the loaded side. In a binary star system, typical masses differ by a factor of $2-3$, "
        "and the orbital CM lies at $\\sim 1/3$ of the distance from the more massive star.\n"
    ),
    'centro-de-masas-en-cuerpos-extendidos': (
        "## Order of magnitude\n\n"
        "A wrench of $30$ cm has its CM at $\\sim 12$ cm from the jaw end (denser). "
        "A solid homogeneous cone of height $h$ has its CM at $h/4$ from the base. A standing person "
        "has their CM at $\\sim 55\\%$ of their height from the ground; raising the arms lifts it by $\\sim 5$ cm. "
        "A high-jump athlete can pass the CM below the bar thanks to the Fosbury arch.\n"
    ),
    'movimiento-del-centro-de-masas': (
        "## Order of magnitude\n\n"
        "When a 500-tonne rocket launches, the net external force (thrust minus weight) accelerates the CM "
        "of the rocket+gas system. In a firework explosion ($m \\approx 0.5$ kg) launched vertically, "
        "the CM follows the original parabola regardless of fragmentation. Deviations of the CM "
        "due to internal forces are exactly zero: $\\sum \\vec{F}_{\\text{int}} = 0$ by Newton's third law.\n"
    ),
    'marco-del-centro-de-masas': (
        "## Order of magnitude\n\n"
        "The internal energy in the CM for two protons with $E_{\\text{lab}} = 7$ TeV (LHC) is all the "
        "available energy: $\\sqrt{s} \\approx 14$ TeV. With a fixed target, $\\sqrt{s} \\approx \\sqrt{2m_p E_{\\text{lab}}} "
        "\\approx 115$ GeV. The fraction of kinetic energy 'lost' in CM motion grows with asymmetry: "
        "for $m_1 \\gg m_2$, almost all the energy is in the CM and almost none is available for interaction.\n"
    ),
    'definicion-momento-angular': (
        "## Order of magnitude\n\n"
        "Earth's orbital angular momentum: $L \\approx 2.7 \\times 10^{40}$ kg·m²/s. Its rotational angular "
        "momentum: $L \\approx 7 \\times 10^{33}$ kg·m²/s (7 orders smaller). A toy spinning top at "
        "$30$ rev/s: $L \\sim 10^{-3}$ kg·m²/s. An electron has intrinsic angular momentum (spin) "
        "$\\hbar/2 \\approx 5 \\times 10^{-35}$ J·s, quantised with no classical analogue.\n"
    ),
    'conservacion-momento-angular': (
        "## Order of magnitude\n\n"
        "A figure skater reduces her moment of inertia from $\\sim 3.5$ kg·m² to $\\sim 1.5$ kg·m² by pulling in arms, "
        "going from $2$ to $\\sim 4.7$ rev/s. A neutron star ($R \\approx 10$ km) formed by collapse "
        "from a star ($R \\approx 10^6$ km) accelerates from $\\sim 1$ rev/month to $\\sim 30$ rev/s (pulsar). "
        "Kepler's second law implies Mercury at perihelion ($v \\approx 59$ km/s) is $\\sim 1.5\\times$ faster "
        "than at aphelion ($v \\approx 39$ km/s).\n"
    ),
    'precesion': (
        "## Order of magnitude\n\n"
        "A bicycle gyroscope ($I \\approx 0.1$ kg·m², $\\omega \\approx 100$ rad/s, $d \\approx 5$ cm, "
        "$m \\approx 1$ kg) precesses at $\\Omega_p \\approx mgd/(I\\omega) \\approx 0.05$ rad/s ($\\sim 1$ rev/2min). "
        "Earth's precession has period $\\sim 25772$ years ($\\Omega_p \\approx 7.7 \\times 10^{-12}$ rad/s). "
        "Larmor precession of a proton in a 1 T field is $\\sim 42.6$ MHz (MRI resonance frequency).\n"
    ),
    'balance-de-momento-con-flujo-de-masa': (
        "## Order of magnitude\n\n"
        "A chemical rocket engine expels gas at $v_e \\approx 3$ km/s with mass flow $\\dot{m} \\approx 500$ kg/s, "
        "generating thrust $F \\approx 1.5 \\times 10^6$ N. A conveyor belt loading sand at $10$ kg/s "
        "requires additional force $F = v \\cdot \\dot{m} = 2 \\times 10 = 20$ N to maintain $v = 2$ m/s. "
        "A fire hose ($\\dot{m} \\approx 15$ kg/s, $v \\approx 30$ m/s) generates recoil of $\\sim 450$ N.\n"
    ),
    'ecuacion-del-cohete': (
        "## Order of magnitude\n\n"
        "To reach LEO ($\\Delta v \\approx 9.4$ km/s with losses) with $v_e = 3$ km/s: $R = e^{3.13} \\approx 23$, "
        "i.e. $\\sim 96\\%$ of the initial mass is fuel. The Saturn V ($m_0 = 2.97 \\times 10^6$ kg) "
        "placed $\\sim 47000$ kg into lunar orbit, a mere $1.6\\%$. The Falcon 9 ($m_0 \\approx 5.5 \\times 10^5$ kg) "
        "carries $\\sim 22800$ kg to LEO ($4.1\\%$), thanks to first-stage reuse.\n"
    ),
    'aplicaciones-del-principio-de-conservacion': (
        "## Order of magnitude\n\n"
        "In a Newton's cradle, a $0.1$ kg sphere at $0.3$ m/s transfers momentum of $0.03$ kg·m/s virtually "
        "without loss to the opposite end. In shotgun recoil ($m_{\\text{proj}} = 30$ g, $v = 400$ m/s, "
        "$M_{\\text{gun}} = 3$ kg), the recoil velocity is $v_R = 4$ m/s. In astrophysics, a Jovian gravity "
        "assist can boost a probe's speed by $\\sim 10-20$ km/s.\n"
    ),
    'enunciado-y-condiciones-de-aplicacion': (
        "## Order of magnitude\n\n"
        "The degree of isolation of a system is measured by comparing external to internal forces. On an air "
        "table, friction ($\\sim 10^{-3}$ N) is $\\sim 10^{-5}$ times the force during a collision ($\\sim 10^2$ N). "
        "In a car crash ($\\sim 0.1$ s), road friction ($\\sim 10^3$ N) is negligible compared to "
        "impact forces ($\\sim 10^5-10^6$ N). The conservation approximation is valid if $F_{\\text{ext}} \\Delta t \\ll \\Delta p$.\n"
    ),
    'impulso-externo-y-ruptura-de-la-conservacion': (
        "## Order of magnitude\n\n"
        "A billiard player applies spin (external angular impulse) of $\\sim 0.5$ N·s laterally. A car braking "
        "on ice receives external friction impulse $\\sim 10^3$ N over $\\sim 5$ s ($\\sim 5 \\times 10^3$ N·s), "
        "breaking momentum conservation. In particle physics, an external magnetic field of $\\sim 1$ T "
        "curves 10 GeV protons with radius $\\sim 33$ m, providing continuous transverse impulse.\n"
    ),
    'sistemas-aislados-y-fuerzas-externas': (
        "## Order of magnitude\n\n"
        "For a satellite in low orbit ($h \\approx 400$ km), atmospheric drag ($\\sim 10^{-5}$ N/kg) causes "
        "altitude loss of $\\sim 2$ km/month, making the system non-isolated over time. "
        "A disc on an air table with friction $\\sim 10^{-3}$ N loses $\\sim 1\\%$ of its momentum in $1$ s. "
        "The timescale of validity of the isolated model depends on $F_{\\text{ext}}/p_{\\text{total}}$.\n"
    ),
}


def fix_file(filepath, lang):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    leaf_name = os.path.basename(os.path.dirname(filepath))
    modified = False

    if lang == 'es':
        # Fix heading: "Preguntas reales de estudiantes" -> "Preguntas reales del alumno"
        pattern = re.compile(r'^## Preguntas reales de(l| los)? estudiantes?', re.MULTILINE | re.IGNORECASE)
        if pattern.search(text):
            text = pattern.sub('## Preguntas reales del alumno', text)
            modified = True

        # Check if "## Orden de magnitud" is missing
        if '## orden de magnitud' not in text.lower():
            # Insert after "## Interpretación física profunda" section
            # Find the next ## heading after "Interpretación física profunda"
            interp_match = re.search(r'^## Interpretación física profunda\b.*?(?=\n## )', text, re.MULTILINE | re.DOTALL | re.IGNORECASE)
            if interp_match:
                insert_pos = interp_match.end()
                oom_text = TOPIC_OOM_ES.get(leaf_name, OOM_ES['default'])
                text = text[:insert_pos] + '\n\n' + oom_text + '\n' + text[insert_pos:]
                modified = True
            else:
                print(f'  WARNING: Could not find insertion point in {filepath}')

    elif lang == 'en':
        # Fix heading: various variants -> "## Personalized resolution method"
        patterns = [
            (re.compile(r'^## Personal\w+ed? Problem-Solving Method', re.MULTILINE | re.IGNORECASE), '## Personalized resolution method'),
            (re.compile(r'^## Personalised resolution method', re.MULTILINE | re.IGNORECASE), '## Personalized resolution method'),
            (re.compile(r'^## Personalised Problem-Solving Method', re.MULTILINE | re.IGNORECASE), '## Personalized resolution method'),
        ]
        for pat, repl in patterns:
            if pat.search(text):
                text = pat.sub(repl, text)
                modified = True

        # Fix other heading case issues
        heading_fixes = {
            '## Conceptual Context': '## Conceptual context',
            '## Deep Physical Interpretation': '## Deep physical interpretation',
            '## Special Cases and Extended Example': '## Special cases and extended example',
            '## Real Student Questions': '## Real student questions',
            '## Cross-Cutting Connections and Study Paths': '## Cross-cutting connections and study paths',
            '## Final Synthesis': '## Final synthesis',
        }
        for old, new in heading_fixes.items():
            if old in text:
                text = text.replace(old, new)
                modified = True

        # Emoji headings
        emoji_fixes = {
            '## 🟢 Essential Level': '## 🟢 Essential level',
            '## 🔵 Formal Level': '## 🔵 Formal level',
            '## 🔴 Structural Level': '## 🔴 Structural level',
        }
        for old, new in emoji_fixes.items():
            if old in text:
                text = text.replace(old, new)
                modified = True

        # Check if "## Order of magnitude" is missing
        if '## order of magnitude' not in text.lower():
            interp_match = re.search(r'^## Deep physical interpretation\b.*?(?=\n## )', text, re.MULTILINE | re.DOTALL | re.IGNORECASE)
            if interp_match:
                insert_pos = interp_match.end()
                oom_text = TOPIC_OOM_EN.get(leaf_name, OOM_EN['default'])
                text = text[:insert_pos] + '\n\n' + oom_text + '\n' + text[insert_pos:]
                modified = True
            else:
                print(f'  WARNING: Could not find insertion point in {filepath}')

    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f'  FIXED: {filepath}')
    else:
        print(f'  OK (no changes): {filepath}')


# Process all files
for g in groups:
    gp = os.path.join(base, g)
    if not os.path.isdir(gp):
        continue
    for leaf in sorted(os.listdir(gp)):
        lp = os.path.join(gp, leaf)
        if not os.path.isdir(lp):
            continue
        print(f'\n--- {leaf} ---')
        for fname, lang in [('teoria.md', 'es'), ('teoria.en.md', 'en')]:
            fp = os.path.join(lp, fname)
            if os.path.isfile(fp):
                fix_file(fp, lang)
