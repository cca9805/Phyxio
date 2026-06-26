# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: condensado-de-bose-einstein
# Target response file: teoria.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Bose-Einstein Condensate
## Conceptual context
A Bose-Einstein condensate appears when many bosons stop being spread mainly across excited states and collectively occupy the ground state. The central issue is not only whether the gas is cold, but how the [[fraccion_condensada]] depends on the comparison between [[temperatura]] and [[temperatura_critica]], and how that threshold is set by [[densidad_particulas]], [[masa_particula]], and quantum constants. The ideal gas model gives a clean map: it shows when bosonic statistics stop looking like a dispersed swarm and begin to look like one macroscopic quantum wave.

## 🟢 Essential level
The [[fraccion_condensada]] tells what portion of the bosons belongs to the collective ground state. Above [[temperatura_critica]], thermal agitation spreads particles among many excited states, so the ideal condensate is absent. As [[temperatura]] decreases, [[longitud_onda_termica]] grows: each boson occupies a wider quantum region, and wave overlap becomes easier. If [[densidad_particulas]] is high, that overlap occurs at a higher threshold, so [[temperatura_critica]] increases. Once the threshold is crossed, further cooling does more than reduce random motion; it transfers a growing proportion of particles into the same quantum state. [[masa_particula]] matters too, because lighter particles show a larger wave character at the same [[temperatura]].

## 🔵 Formal level
The ideal model uses four linked relations. [[temperatura_critica]] is obtained from [[densidad_particulas]], [[masa_particula]], [[constante_planck]], and [[constante_boltzmann]], and marks the point where the gas can no longer place all particles in excited states.

{{f:temperatura_critica_bose}}

Below that threshold, [[fraccion_condensada]] compares [[temperatura]] with [[temperatura_critica]] and expresses what portion of [[numero_particulas]] occupies the ground state.

{{f:fraccion_condensada_bose}}

The same condition can be read through [[densidad_critica]]: at fixed [[temperatura]], if [[densidad_particulas]] exceeds the critical value, the excess population feeds [[numero_condensado]].

{{f:densidad_critica_bose}}

The physical origin of the threshold lies in [[longitud_onda_termica]], set by [[constante_planck]], [[masa_particula]], [[constante_boltzmann]], and [[temperatura]].

{{f:longitud_onda_termica_de_broglie}}

Thus, the main graph often places [[temperatura]] or a thermal ratio on the horizontal axis and [[fraccion_condensada]] on the vertical axis: zero above threshold and rising progressively during cooling.

## 🔴 Structural level
The ideal condensate relies on precise assumptions. First, the particles are indistinguishable bosons and are allowed to share one quantum state; without that symmetry, macroscopic accumulation in the ground state has no meaning. Second, the gas is treated as nonrelativistic, homogeneous, and almost noninteracting: [[masa_particula]], [[volumen]], and [[densidad_particulas]] are enough to describe the main threshold. Third, the system is in thermal equilibrium, so [[temperatura]] represents a common scale and [[temperatura_critica]] can be used as a stable boundary.

Several invariants must survive any interpretation. The ideal [[fraccion_condensada]] is never negative and never larger than one; it is zero when [[temperatura]] is above the threshold and increases during cooling below [[temperatura_critica]]. Increasing [[densidad_particulas]] pushes the threshold upward, while increasing [[masa_particula]] lowers it because the same thermal conditions give a shorter [[longitud_onda_termica]]. [[densidad_critica]] is the alternative reading: at fixed [[temperatura]], it gives the concentration needed for enough wave overlap.

The limits are important. Near [[temperatura_critica]], the ideal model predicts the onset of condensation, but interactions in real gases shift and smooth the threshold. In finite systems, the transition is not infinitely sharp; [[numero_particulas]] limits the clarity of the change. In trapped experimental gases, density is not uniform and the effective [[volumen]] depends on the external potential. At very low [[temperatura]], interactions, collective excitations, and losses can dominate observations.

The graph prevents a misleading switch-like picture. Along the [[temperatura]] axis, the [[fraccion_condensada]] curve marks a boundary: above [[temperatura_critica]] there is no ideal condensate; below it, the slope shows how fast [[numero_condensado]] grows. Changing [[densidad_particulas]] shifts the curve because it changes [[temperatura_critica]]. The model is suspect when measured data fail to respect saturation, threshold behavior, monotonicity, or expected scales.

## Deep physical interpretation
[[fraccion_condensada]] does not count special labeled particles; it describes the collective organization of the system. When it increases, a macroscopic part of [[numero_particulas]] shares the same quantum description. [[temperatura]] competes against that organization by opening many excited states. [[temperatura_critica]] summarizes the boundary between thermal spreading and quantum overlap. [[densidad_particulas]] acts as closeness: if bosons are packed more densely, their thermal waves overlap sooner. A condensate is therefore not simply a cold gas, but a gas where wavelength and interparticle spacing have entered the same physical scale. This is why the same [[temperatura]] can mean different physical regimes for different gases: changing [[densidad_particulas]] or [[masa_particula]] changes the threshold. The condensed state is a population statement, a coherence statement, and a thermodynamic statement at once.

## Order of magnitude
In ultracold atomic gases, [[temperatura_critica]] commonly lies in the nanokelvin or microkelvin range, not at everyday temperatures. A cloud with [[densidad_particulas]] around 10²⁰ m⁻³ and light atoms may require [[temperatura]] below 10⁻⁶ K. The useful condition is that [[longitud_onda_termica]] becomes comparable to the mean spacing between particles; if it remains much smaller, the gas behaves almost classically. For rubidium-like atoms this usually demands laser cooling, evaporative cooling, and careful confinement, because ordinary refrigeration is many orders of magnitude too warm.

## Personalized resolution method
First decide whether the problem asks for a threshold or a condensed amount. For a threshold, use [[densidad_particulas]], [[masa_particula]], [[constante_planck]], and [[constante_boltzmann]] to find [[temperatura_critica]]. Then compare [[temperatura]] with it. If [[temperatura]] is above the threshold, the ideal [[fraccion_condensada]] is zero. If it is below, compute the condensed proportion and, when requested, multiply by [[numero_particulas]] to obtain [[numero_condensado]]. Finish by checking units, physical range, and whether the ideal assumptions are acceptable. If the problem gives [[volumen]] and [[numero_particulas]] separately, compute [[densidad_particulas]] first; if it gives [[densidad_critica]], compare densities before using a condensed fraction.

## Special cases and extended example
First limiting case: when [[temperatura]] approaches [[temperatura_critica]] from below, [[fraccion_condensada]] tends to zero and experimental reading becomes delicate. Second limiting case: when [[temperatura]] is much smaller than [[temperatura_critica]], almost all ideal bosons are in the ground state, although a real gas can still show excitations. Example: if a cloud has [[temperatura_critica]] of 200 nK and is cooled to 100 nK, the thermal comparison predicts a significant condensed fraction. If [[densidad_particulas]] is doubled, the threshold rises and the same [[temperatura]] lies deeper in the condensed regime.

## Real student questions
Why is cooling alone not enough? Because the system needs bosons, equilibrium, and enough [[densidad_particulas]]; low [[temperatura]] helps, but [[masa_particula]] and density determine whether quantum overlap is reachable.

Is [[fraccion_condensada]] the probability for one particle? No. It is a collective proportion of the system, related to [[numero_condensado]] and [[numero_particulas]], not the fate of a labeled particle.

Why does [[temperatura_critica]] exist? Because excited states have a limited statistical capacity at a given density. When they cannot hold all bosons, the remaining population enters the ground state. That interpretation also explains why the curve is not merely decorative: its horizontal position tells the threshold, while its vertical value tells how much of the gas has joined the macroscopic quantum population.

## Cross-cutting connections and study paths
This leaf connects with bosons, the Bose-Einstein distribution, [[longitud_onda_termica]], ideal quantum gases, and low-temperature physics. It also prepares ideas of superfluidity, macroscopic coherence, matter-wave lasers, and phase transitions, while keeping the ideal condensate as the first map rather than the whole experimental landscape.

## Final synthesis
A Bose-Einstein condensate appears when [[temperatura]], [[temperatura_critica]], and [[densidad_particulas]] place bosons in the quantum-overlap regime. [[fraccion_condensada]] summarizes how much of the system has shifted from a dispersed thermal gas into a collective macroscopic state with measurable coherence signatures experimentally.

