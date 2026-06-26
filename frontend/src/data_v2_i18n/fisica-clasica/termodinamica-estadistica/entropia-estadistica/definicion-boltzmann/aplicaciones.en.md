# Applications

## 1. Free expansion of an ideal gas
Dominant variable: [[numero_microestados]]
Validity limit: dilute gas, initial and final equilibrium, and [[numero_microestados]] > 0

When an internal wall is removed inside a container, gas particles gain access to more positions compatible with the same number of particles and a comparable macroscopic energy. What is predicted is not the exact trajectory of each particle, but the increase in [[numero_microestados]]. [[entropia]] converts that increase in microscopic accessibility into a thermodynamic magnitude. When the state before and after the change is compared, the useful variable is [[ratio_microestados]], because it summarizes how many times multiplicity grows. This application is valid if the gas can be treated as ideal and if the initial and final macrostates are clearly defined. Its limit appears in dense gases, strongly interacting systems, or processes too fast to identify equilibrium macrostates.

A consistency check is to verify that [[delta_entropia]] comes out positive when the final volume is larger: more space means more compatible positions for each particle, so [[numero_microestados_final]] must exceed [[numero_microestados_inicial]]. If the result is negative with an expanded volume and a classical ideal gas, the calculation must be reviewed — [[ratio_microestados]] less than one would imply the contracted state is statistically more accessible, which contradicts the model. [[k_boltzmann]] appears only as a unit conversion factor and does not affect the sign.

## 2. Mixing distinguishable gases
Dominant variable: [[delta_entropia]]
Validity limit: distinguishable gases, same macroscopic temperature, and homogeneous microstate counting

When two different gases are mixed, the number of microscopic configurations compatible with the mixed macrostate increases. [[delta_entropia]] measures the change between separated compartments and a common volume where particles of both gases may be found. The prediction is whether the mixed state has greater statistical weight than the separated initial state. Boltzmann definition avoids saying merely “there is more disorder”; the key point is that [[numero_microestados_final]] exceeds [[numero_microestados_inicial]] under the same counting rule. The application is no longer direct if the gases are indistinguishable, because the counting rule changes and the Gibbs paradox may appear. The physical check is that [[ratio_microestados]] compares equivalent macrostates. A common error is to mix gases and then compute [[delta_entropia]] using counts from two different sources or with inconsistent counting rules; in that case [[ratio_microestados]] has no shared physical basis and the result is meaningless. For the application to be correct, the [[entropia]] of each macrostate must be computed with the same microscopic granularity, the same set of degrees of freedom, and the same constraints. When both gases are at the same [[numero_microestados]] scale before mixing, [[delta_entropia]] provides an unambiguous measure of how much statistical accessibility the mixed state gains over the separated state. If both gases are the same species, the mixing [[entropia]] is zero by the symmetry of indistinguishable particles, and the Gibbs paradox warns against ignoring this correction in classical counting.

## 3. Conformational stability in large molecules
Dominant variable: [[ratio_microestados]]
Validity limit: comparable configurations, similar internal energy, and microstates counted with the same granularity

In large molecules, polymers, or biomolecules, a flexible state may have many more compatible internal configurations than a rigid state. Boltzmann definition helps estimate which macrostate has larger statistical weight. What is measured or predicted is the entropic contribution associated with [[numero_microestados]]. If [[ratio_microestados]] is large, [[delta_entropia]] favors the state with greater multiplicity, although it does not necessarily determine total stability by itself. Energy, interactions, and environment also matter. The validity limit is the risk of confusing geometric conformations with complete physical microstates. To use the model, the configuration set must belong to the same system and be defined by comparable constraints.

## 4. Information and compression of physical states
Dominant variable: [[entropia]]
Validity limit: well-defined statistical macrostates and [[numero_microestados]] much greater than 1

Boltzmann [[entropia]] connects with information because it measures how much microscopic uncertainty remains when only the macrostate is known. In systems with many compatible microstates, more information is needed to specify the exact microscopic state. This application does not use the definition as a digital metaphor; it is a physical reading in which [[numero_microestados]] quantifies how many internal possibilities remain open. One can predict that stronger macroscopic constraints reduce multiplicity and therefore reduce [[entropia]]. The validity limit appears if subjective probabilities are mixed with physical counting, or if microstates are not equally accessible. Then more general probabilistic models are needed.

## 5. Transition toward quantum statistical mechanics
Dominant variable: [[k_boltzmann]]
Validity limit: identifiable quantum levels and a consistent definition of accessible microstate

Boltzmann definition is a gateway to quantum [[entropia]] models. In systems where microstates correspond to quantum levels or configurations, [[k_boltzmann]] still sets the thermodynamic scale between multiplicity and [[entropia]]. What is constrained is the counting rule: not every classical configuration is possible, and indistinguishability matters. This application explains why correct counting of [[numero_microestados]] is crucial in solids, radiation, or quantum gases. The simple model is insufficient when states have different probabilities or when equilibrium requires a quantum distribution. Even then, the conceptual relation between multiplicity and [[entropia]] remains a guide for interpretation.