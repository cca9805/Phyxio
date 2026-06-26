## Conceptual context

The fundamental hypothesis of statistical mechanics appears when an isolated system is described only through fixed macroscopic constraints. The system has fixed [[energia_total]], fixed [[volumen]], and fixed [[numero_particulas]], yet many microscopic arrangements may satisfy those same data. The question is not which trajectory the system is following at one instant, but how to assign probabilities when no accessible microstate carries extra distinguishing information. The microcanonical answer is deliberately austere: every accessible microstate receives the same [[probabilidad_microestado]]. This does not freeze the system; it removes unsupported preference from the statistical description.

## 🟢 Essential level

The fundamental hypothesis says that, for an isolated system at equilibrium, every accessible microstate counts equally. Accessible means compatible with the fixed macroscopic restrictions: [[energia_total]], [[volumen]], and [[numero_particulas]]. If two microstates satisfy the same restrictions and no extra information distinguishes them, assigning different [[probabilidad_microestado]] values would smuggle in an unjustified preference. The point is not that the system visibly visits every microstate during a short observation, but that the statistical model does not privilege any allowed one.

This makes [[numero_microestados_accesibles]] central: the larger the accessible set, the smaller the share assigned to each microstate. A macrostate with larger [[multiplicidad_macroestado]] becomes more likely because it contains more equally possible microstates, not because each individual microstate is weighted more heavily individually.

## 🔵 Formal level

The formal setting is the microcanonical ensemble: only microstates compatible with the fixed isolated constraints are included. The postulate assigns uniform [[probabilidad_microestado]] inside that accessible set.

{{f:postulado_equiprobabilidad_microcanonica}}

Normalization states that the entire statistical population is distributed over the accessible microstates, with none assigned outside the allowed constraints.

{{f:normalizacion_microestados_accesibles}}

The [[entropia]] connects microscopic counting to a macroscopic thermodynamic scale. It is not a visual disorder label; it is a logarithmic measure of [[numero_microestados_accesibles]]. The [[constante_boltzmann]] acts as the conversion factor that transforms a pure microstate count into a quantity with units of J/K, linking the microscopic repertoire to the macroscopic temperature scale.

{{f:entropia_boltzmann_microcanonica}}

For macrostate comparisons, [[multiplicidad_macroestado]] matters: a macrostate is more probable when it gathers more accessible microstates.

{{f:probabilidad_macroestado_desde_multiplicidad}}

The [[desbalance_probabilidad]] diagnoses departure from ideal equiprobability.

{{f:desbalance_frente_equiprobabilidad}}

Together these relations turn a symmetry assumption into a working calculation: define the accessible set, normalize probabilities, compare macrostate multiplicities, and read [[entropia]] as the macroscopic echo of microscopic count. In practice, these formulas define which set is counted, how each accessible microstate is weighted, and which macroscopic quantity records the size of that set. It also forces a distinction between total count, macrostate count, and individual probability before any physical interpretation is accepted.

## 🔴 Structural level

The fundamental hypothesis is powerful precisely because its assumptions are narrow. First, the system must be treated as isolated during the relevant description. If it exchanges energy, particles, or effective [[volumen]] with the environment, then [[energia_total]], [[volumen]], and [[numero_particulas]] no longer define a closed accessible set, and a canonical or open-system model may be required. Second, the system must be at statistical equilibrium. A prepared distribution can carry memory for a while, producing a nonzero [[desbalance_probabilidad]] even when the final equilibrium state would be microcanonical. Third, the microstates must be counted with the same resolution. Unequal cells, hidden degeneracies, or mixed coarse-grainings corrupt [[numero_microestados_accesibles]] and make the resulting [[probabilidad_microestado]] misleading.

Several invariants organize the model. The probabilities must remain normalized; the macroscopic constraints must stay fixed; and all accessible microstates must be statistically equivalent under the chosen description. Boundary cases sharpen the meaning. With only one accessible microstate, the assignment is certain and [[entropia]] is minimal. With many accessible microstates, individual probabilities become tiny while macrostate probabilities may be overwhelming because many microstates are grouped together. If a state is dynamically unreachable because of a conservation law, barrier, symmetry, or time-scale separation, counting it as accessible artificially inflates [[multiplicidad_macroestado]].

The graph reading should therefore be interpreted as a counting map, not as a mechanical trajectory. As [[numero_microestados_accesibles]] grows, individual [[probabilidad_microestado]] decreases, while [[entropia]] increases logarithmically. This dependence is structural: it follows from normalization and equal weighting, not from a force or causal push. The model breaks down when there is persistent [[desbalance_probabilidad]], when the constraints are not fixed, when the system is too small for the chosen coarse-graining, or when observation time is shorter than the mixing time. In those cases, the hypothesis remains the reference ideal, but the actual physical description needs extra dynamics, constraints, or ensemble choice. A small accessible set is another boundary case: the assignment remains valid, but relative fluctuations are highly visible and should not be mistaken for failure. A short observation time can also mimic bias when the system has not explored its accessible set. The graph is therefore a relationship among count, probability, and [[entropia]], not a time record of visits.

## Deep physical interpretation

Equiprobability is not a casual claim that nature likes equality. It is an information symmetry rule. If two microstates are both compatible with [[energia_total]], [[volumen]], and [[numero_particulas]], and if the model contains no physical label that distinguishes them, equal [[probabilidad_microestado]] is the least biased assignment. The [[entropia]] then measures how large the microscopic repertoire is. Large [[entropia]] means many microscopic ways to realize the same macroscopic facts. A macrostate with high [[multiplicidad_macroestado]] dominates because it gathers many ordinary equally weighted microstates. This is the statistical engine behind equilibrium thermodynamics.

## Order of magnitude

For macroscopic matter, [[numero_particulas]] may be of order 10^23, so [[numero_microestados_accesibles]] can be astronomically large. If [[numero_microestados_accesibles]] is 10^6, an ideal [[probabilidad_microestado]] is of order 10^-6. If the count is exponentially large in [[numero_particulas]], the individual probability becomes vanishingly small, while [[entropia]] stays usable because it depends logarithmically on the count.

## Personalized resolution method

First decide whether the system is isolated enough to keep [[energia_total]], [[volumen]], and [[numero_particulas]] fixed. Then define the accessible microstates at a single resolution. Next estimate or count [[numero_microestados_accesibles]] and assign uniform [[probabilidad_microestado]] only within that set. If the question concerns a macrostate, use [[multiplicidad_macroestado]] to sum the relevant microstates. Finally interpret [[entropia]] as the thermodynamic reading of the count and use [[desbalance_probabilidad]] to test whether the assumed distribution is really microcanonical.

## Special cases and extended example

Consider an isolated toy system with four accessible microstates. Each receives the same [[probabilidad_microestado]], so no microstate is privileged. If macrostate A contains one microstate and macrostate B contains three, B is more probable because its [[multiplicidad_macroestado]] is larger. If the allowed energy window is widened and more states become compatible with [[energia_total]], the probability of each individual microstate decreases, but the number of possible realizations increases. If the wall expands and [[volumen]] changes, or particles leak so [[numero_particulas]] is no longer fixed, the original accessible set is no longer the correct one.

## Real student questions

Does equal probability mean the system spends exactly equal time in every microstate? Not in every finite observation; it is an equilibrium statistical assignment under the model assumptions. Why can one macrostate be more probable if all microstates are equal? Because macrostate probability adds the probabilities of all microstates inside it. Is [[entropia]] just disorder? It is better understood as a measure of multiplicity, the number of microscopic realizations compatible with the same macroscopic data. What does a large [[desbalance_probabilidad]] indicate? It indicates a proposed distribution that is not consistent with ideal equiprobability.

## Cross-cutting connections and study paths

The hypothesis leads directly to Boltzmann [[entropia]], the microcanonical ensemble, macrostate probability, and the later canonical ensemble. It also clarifies equilibrium: physics often predicts distributions, not a filmed path through every microscopic configuration.

## Final synthesis

The fundamental hypothesis turns limited macroscopic knowledge into a precise statistical rule: all accessible microstates of an isolated equilibrium system receive the same [[probabilidad_microestado]]. From that rule emerge [[multiplicidad_macroestado]], [[entropia]], and the probabilistic structure of thermodynamics.