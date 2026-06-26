# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: gas-de-electrones
# Target response file: teoria.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Electron Gas
## Conceptual context
An electron gas is an idealized picture of many free electrons spread over quantum states in a metal, semiconductor, or dense plasma. They are not classical grains that can pile into the same state without restriction. Because electrons are fermions, Pauli exclusion fills low-energy states first and forces additional electrons into higher-momentum states. Thus [[densidad_electronica]] is not merely a count per [[volumen]]: it sets the energy height of the filled quantum sea, determines [[energia_fermi]], and shapes [[ocupacion_estado]] near the [[potencial_quimico]].

## 🟢 Essential level
The main idea is that increasing [[densidad_electronica]] packs more free electrons into the same [[volumen]]. Since electrons are fermions, they cannot all occupy the same quantum state. Low [[energia_estado]] states fill first, and added electrons must move into higher momentum and energy states. The upper edge of this filling is [[energia_fermi]]. At very low [[temperatura_absoluta]], states below that edge are almost occupied and states above it are almost empty. Raising [[temperatura_absoluta]] softens the edge: some states just above it gain [[ocupacion_estado]], while some just below it lose occupation. Therefore [[densidad_electronica]] fixes the energy scale, while temperature controls how sharp the occupation transition appears.

## 🔵 Formal level
In the nonrelativistic three-dimensional model, [[energia_fermi]] is determined by [[densidad_electronica]], [[masa_electron]], and [[constante_planck_reducida]]. The relation states that filling more momentum states raises the Fermi boundary:

{{f:energia_fermi_gas_electrones_3d}}

To compare this energy scale with thermal agitation, one defines [[temperatura_fermi]] using [[constante_boltzmann]]:

{{f:temperatura_fermi_gas_electrones}}

The [[ocupacion_estado]] of a state with [[energia_estado]] follows the Fermi-Dirac form, centered near [[potencial_quimico]] and broadened by [[temperatura_absoluta]]:

{{f:ocupacion_fermi_dirac_electrones}}

The [[energia_reducida]] is useful because it measures the separation from [[potencial_quimico]] in thermal units:

{{f:energia_reducida_electrones}}

A [[velocidad_fermi]] can also be associated with electrons close to the Fermi boundary:

{{f:velocidad_fermi}}

Together, [[numero_electrones]] and [[volumen]] define [[densidad_electronica]], density determines [[energia_fermi]], and the position of [[energia_estado]] relative to [[potencial_quimico]] determines [[ocupacion_estado]]. If [[temperatura_absoluta]] is far below [[temperatura_fermi]], the density scale dominates. Otherwise, the occupation formula must accompany the Fermi-energy estimate. Dimensional reading also separates the tasks: [[energia_fermi]] and [[energia_estado]] are energies, [[temperatura_fermi]] and [[temperatura_absoluta]] are temperatures, [[densidad_electronica]] is inverse volume, and [[velocidad_fermi]] is a speed. This prevents confusing an occupation scale with a total amount.

## 🔴 Structural level
The model assumes free, indistinguishable, nonrelativistic electrons in thermal equilibrium. “Free” means that the periodic lattice potential, impurities, electron-electron collisions, and electron-phonon effects are either neglected or absorbed into a very simple effective background. “Nonrelativistic” requires [[velocidad_fermi]] to remain small compared with the speed of light; otherwise the energy-momentum relation changes and the predicted [[energia_fermi]] no longer belongs to this model. “Equilibrium” means that a common [[temperatura_absoluta]] and a well-defined [[potencial_quimico]] exist. Without equilibrium, [[ocupacion_estado]] is not a static Fermi-Dirac occupation.

Several invariants organize the reading. [[densidad_electronica]] comes from [[numero_electrones]] per [[volumen]], so changing both while keeping that ratio fixed preserves the main scale of [[energia_fermi]]. Pauli exclusion preserves the maximum occupation of each available state and forces the filled region in momentum space to expand as more electrons are included. Consequently, the graph of [[energia_fermi]] against [[densidad_electronica]] must be increasing and concave: each density increase raises the boundary, but not linearly.

Boundary cases reveal the limits. If [[densidad_electronica]] becomes very small, [[energia_fermi]] falls and the gas moves toward a less degenerate regime where temperature has a stronger role. If [[temperatura_absoluta]] is much smaller than [[temperatura_fermi]], the occupation edge is almost sharp and fermionic filling dominates. If [[temperatura_absoluta]] becomes comparable with [[temperatura_fermi]], the transition in [[ocupacion_estado]] broadens and the zero-temperature filling picture becomes less decisive. The model fails when detailed electronic bands, low-dimensional confinement, strong interactions, intense disorder, superconductivity, or relativistic motion matter. It also fails if an effective [[masa_electron]] is used without declaring it, because the energy scale changes. In graph reading, a curve that does not increase with [[densidad_electronica]], or one suggesting negative [[energia_fermi]] for the free electron gas, signals a unit, model, or interpretation error. Another practical limit is dimensionality: in sheets, wires, or quantum wells, state counting changes and the dependence of [[energia_fermi]] on [[densidad_electronica]] no longer matches the 3D gas. Therefore the graph reading must confirm that the model is volumetric, not confined to a lower-dimensional geometry.

## Deep physical interpretation
[[energia_fermi]] is not the average energy of all electrons. It is an occupation frontier: the highest filled energy in the ideal low-temperature limit. [[densidad_electronica]] acts like a quantum counting pressure. More electrons per [[volumen]] require more momentum states to be occupied, raising [[energia_fermi]]. [[ocupacion_estado]] is not the total number of electrons in the sample; it is the mean probability that one state of [[energia_estado]] is occupied. The [[potencial_quimico]] is the reference around which occupation changes from nearly full to nearly empty, while [[temperatura_absoluta]] determines how gradual that change becomes.

## Order of magnitude
Typical metals have [[densidad_electronica]] around 10²⁸ m⁻³. This gives [[energia_fermi]] of a few eV and [[temperatura_fermi]] of tens of thousands of kelvin, far above room [[temperatura_absoluta]] near 300 K. Thus ordinary metallic electrons are strongly degenerate: the material may feel warm, but the occupation edge remains sharply quantum.

## Personalized resolution method
First decide whether the question asks for a global scale or for a state occupation. For a global scale, compute [[densidad_electronica]] from [[numero_electrones]] and [[volumen]], then use it to obtain [[energia_fermi]]. Convert it into [[temperatura_fermi]] when comparison with [[temperatura_absoluta]] is needed. For a single state, identify [[energia_estado]], [[potencial_quimico]], and [[temperatura_absoluta]], compute [[energia_reducida]], and then read [[ocupacion_estado]]. Finally check SI units, the nonrelativistic condition through [[velocidad_fermi]], and the qualitative shape of the graph.

## Special cases and extended example
If [[densidad_electronica]] is doubled, [[energia_fermi]] increases, but by less than a factor of two because three-dimensional momentum states fill a growing sphere. If [[densidad_electronica]] is fixed and [[temperatura_absoluta]] rises, the characteristic [[energia_fermi]] remains the density scale, but [[ocupacion_estado]] near [[potencial_quimico]] becomes smoother. In a dense metal with high [[densidad_electronica]], [[temperatura_fermi]] is enormous, so at room conditions only electrons near [[energia_fermi]] can easily change occupation, while deep states remain Pauli-blocked.

## Real student questions
Is [[energia_fermi]] the energy of every electron? No. It is the upper occupation edge in the ideal low [[temperatura_absoluta]] limit.

Why use [[densidad_electronica]] instead of only [[numero_electrones]]? Because the competition for states depends on how many electrons are packed into a given [[volumen]].

Can [[ocupacion_estado]] be greater than one? For a single fermionic state, no: it is a mean probability. For grouped states, one must distinguish a single state from a degenerate set.

Does increasing [[temperatura_absoluta]] remove Pauli exclusion? No. It only smooths occupation around [[potencial_quimico]].

## Cross-cutting connections and study paths
This leaf connects Fermi-Dirac statistics, metallic conduction, heat capacity, semiconductors, and condensed matter. It also prepares degenerate gases in astrophysics, where high [[densidad_electronica]] can support compact matter through degeneracy pressure.

## Final synthesis
The electron gas shows density as a quantum key: increasing [[densidad_electronica]] raises [[energia_fermi]] through Pauli filling and reshapes [[ocupacion_estado]]. A correct graph turns that forced filling into an increasing energy boundary.

