# Applications

## 1. Isolated gases in rigid boxes
Dominant variable: [[numero_microestados_accesibles]]
Validity limit: ΔE/E << 1, ΔV/V , and ΔN/N

The fundamental hypothesis is used to interpret why an isolated gas tends toward uniform macroscopic states. The [[energia_total]], [[volumen]], and [[numero_particulas]] fix the accessible set. Each individual [[probabilidad_microestado]] is equal, but homogeneous macrostates group an enormous [[multiplicidad_macroestado]]. The model predicts which macroscopic appearance will be most frequent without tracking every molecule. The [[entropia]] measures the statistical size of that set and allows comparisons. If a chosen microstate is given extra weight, a physical cause or measurable [[desbalance_probabilidad]] must be supplied.

## 2. Mixing models with two compartments
Dominant variable: [[multiplicidad_macroestado]]
Validity limit: removed barrier, isolated system, and equally accessible microstates

When two connected compartments allow particles to redistribute, the hypothesis explains why the equilibrium distribution is the one with the greatest multiplicity. The measured quantity is how many microstates correspond to each macroscopic split. Although each [[probabilidad_microestado]] is equal, nearly even splits contain more combinations and therefore dominate. The total [[energia_total]] and [[volumen]] must remain fixed. If currents, persistent gradients, or selective walls remain, the model loses validity and [[desbalance_probabilidad]] appears.

## 3. Microcanonical [[entropia]] estimates
Dominant variable: [[entropia]]
Validity limit: [[numero_microestados_accesibles]] > 1 and counting compatible with fixed constraints

When [[entropia]] is estimated, the fundamental hypothesis supplies the conceptual base: no accessible microstate is weighted above another. The predicted quantity is the thermodynamic scale associated with microscopic counting. [[constante_boltzmann]] turns the count into physical units. This application appears in simplified solids, ideal gases, and discrete energy systems. The main risk is counting microstates that do not satisfy [[energia_total]], [[volumen]], or [[numero_particulas]], which produces artificially high [[entropia]].

## 4. Diagnosis of statistical simulations
Dominant variable: [[desbalance_probabilidad]]
Validity limit: sufficiently long sample and correctly defined accessible space

In simulations, the fundamental hypothesis works as an equilibrium test. If a numerical trajectory visits accessible microstates with very different frequencies and no extra constraint exists, poor mixing, algorithmic bias, or insufficient time may be present. The measured quantity is [[desbalance_probabilidad]], comparing empirical frequencies with expected equiprobability. This does not require equal counts in small samples, but differences should shrink as observation time grows. If they do not, the system or algorithm is not representing the microcanonical ensemble well.

## 5. Macrostate comparison in small systems
Dominant variable: [[probabilidad_microestado]]
Validity limit: few discrete states, ideal isolation, and exact counting

In small systems such as spin models or discrete-level toys, [[numero_microestados_accesibles]] can be counted explicitly. The fundamental hypothesis gives the [[probabilidad_microestado]] of each state and then groups them by [[multiplicidad_macroestado]]. It predicts which macrostate appears more often in isolated equilibrium. This is pedagogically useful because it cleanly separates individual probability from macrostate probability. If [[desbalance_probabilidad]] is present in the initial preparation, the result describes the ideal equilibrium distribution, not necessarily the starting state.

## 6. Spin systems with two possible orientations
Dominant variable: [[entropia]]
Validity limit: non-interacting spins, no external field, [[energia_total]] conserved

A set of N non-interacting spins without an external field has all its microstates energetically equivalent. The fundamental hypothesis assigns the same [[probabilidad_microestado]] to every configuration compatible with the fixed [[energia_total]] and [[numero_particulas]]. For N spins with two orientations each, [[numero_microestados_accesibles]] grows exponentially with N and can be calculated exactly. The macrostate with the largest [[multiplicidad_macroestado]] corresponds to the most disordered configuration, with roughly half the spins in each orientation. The [[entropia]] of the system, computed using [[constante_boltzmann]] and the logarithm of [[numero_microestados_accesibles]], measures that statistical amplitude. A positive [[desbalance_probabilidad]] signals that the empirical distribution favors a sector of spin space without an explicit physical cause.

## 7. Isolated polymer chain with accessible conformations
Dominant variable: [[multiplicidad_macroestado]]
Validity limit: free chain model, fixed [[energia_total]], no solvent exchange

An isolated polymer chain can adopt many conformations with the same energy. The fundamental hypothesis predicts that extended and coiled macrostates differ by their [[multiplicidad_macroestado]]: the coiled configuration groups far more microstates compatible with fixed [[energia_total]], [[volumen]], and [[numero_particulas]] than the fully stretched one. The [[probabilidad_microestado]] of each conformation is identical, but the sum over all microstates in the coiled or stretched macrostate determines its total probability. The conformational [[entropia]], computed with [[constante_boltzmann]], explains the statistical elasticity of a polymer: stretching the chain reduces [[numero_microestados_accesibles]] and lowers [[entropia]], producing a restoring force of purely statistical origin.

## 8. Biophysical systems with discrete conformational states
Dominant variable: [[probabilidad_microestado]]
Validity limit: thermally isolated system during analysis, [[numero_particulas]] conserved

In simplified models of proteins or ion channels with a discrete number of conformational states, the fundamental hypothesis supplies the reference distribution. If the system has four states of equal [[energia_total]], each one receives the same [[probabilidad_microestado]]. The [[multiplicidad_macroestado]] distinguishes macrostates that group multiple equivalent functional states: an open channel may include three microstates and a closed channel may include one, so the open state is three times more probable without invoking any kinetic mechanism. A significant [[desbalance_probabilidad]] indicates that a ligand, electric field, or additional constraint breaks the equivalence among accessible microstates, and the microcanonical model no longer describes the system without expanding the accessible set.