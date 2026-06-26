## Conceptual context

Statistical equilibrium does not mean microscopic stillness. A system may keep jumping among accessible states while its average occupations no longer drift. The diagnostic is the joint reading of [[probabilidad_estado]], [[tasa_transicion]], and [[flujo_probabilidad]] over a sufficiently long [[tiempo]]. When traffic into a state compensates traffic out of it, the distribution becomes stationary. Equilibrium is therefore recognized by absence of net statistical drift, not by absence of microscopic activity.

The distinction between equilibrium and a nonequilibrium steady state rests on whether each pair of connected states individually closes its traffic balance, not just the overall network. When pairwise closure fails, the system can sustain a circulating [[flujo_probabilidad]] without any external driving. Recognizing that possibility protects against misdiagnosing a driven cycle as a balanced ensemble.

## 🟢 Essential level

Think of many identical copies of the same system. Each copy occupies some state, and the ensemble assigns a [[probabilidad_estado]] to that state. Individual copies may jump, yet the ensemble distribution can remain unchanged if every outgoing statistical traffic is compensated by incoming traffic. That compensation is read through [[flujo_probabilidad]]: when no preferred net transfer remains, occupations stay stable.

The environment [[temperatura]] and each [[energia_estado]] help determine which states are favored, but the essential criterion is stationary behavior: the distribution does not change as [[tiempo]] advances. Statistical equilibrium is therefore not microscopic rest; it is collective balance among ongoing transitions. The relevant question is not what one copy does in isolation, but whether the full ensemble holds its proportions and closes its statistical exchanges over [[tiempo]].

## 🔵 Formal level

The formal reading separates occupation, transition, and normalization. Stationarity requires each [[probabilidad_estado]] to remain constant during the observation [[tiempo]].

{{f:criterio_probabilidad_estacionaria}}

The probabilities must also exhaust the accessible statistical population, without hidden loss or duplication.

{{f:normalizacion_probabilidades}}

For two connected states, detailed balance compares direct and reverse traffic through the [[tasa_transicion]].

{{f:balance_detallado_dos_estados}}

If these two statistical traffics fail to compensate, a net [[flujo_probabilidad]] appears.

{{f:flujo_probabilidad_neto}}

The Gibbs [[entropia]] summarizes how spread the equilibrium occupation is over accessible microstates.

{{f:entropia_gibbs_equilibrio}}

In a thermal setting, [[temperatura]], [[constante_boltzmann]], [[energia_estado]], and [[peso_boltzmann]] constrain the expected distribution. The formal target is not a single trajectory, but a stable, normalized distribution.

## 🔴 Structural level

The model rests on explicit assumptions. First, the accessible state set must be defined before interpreting equilibrium; if new states become available during observation, the original normalization no longer represents the system. Second, the [[tasa_transicion]] must be meaningful averaged rates. If they change abruptly with [[tiempo]], a nearly constant [[probabilidad_estado]] may be a temporary plateau rather than equilibrium. Third, the ensemble must be large enough, or repeatable enough, to distinguish random sampling noise from a genuine drift. The basic invariant is population conservation: all probability belongs to accessible states, and the total probability neither grows nor disappears.

The validity limit appears when the system is externally driven, when jumps retain strong memory, or when the thermal bath does not maintain a stable [[temperatura]]. In those cases a simple equilibrium model can be confused with a nonequilibrium steady state: the [[probabilidad_estado]] values may remain fixed while cyclic [[flujo_probabilidad]] persists. Detailed balance is therefore stricter than global stationarity.

Boundary cases matter. If [[flujo_probabilidad]] is zero within experimental uncertainty, the equilibrium approximation may be useful even though every microscopic transition continues. If [[desbalance_estadistico]] is small but systematic, the observation window should be extended or the transition model revised. If a [[probabilidad_estado]] approaches zero, its contribution to [[entropia]] requires numerical care. The DCL-style graph shows probability inflows and outflows as compensating arrows: they are not mechanical forces, but a visual balance of statistical traffic. The model fails when the arrows do not close, when normalization is broken, or when the distribution depends on past history rather than only on the current state network.

## Deep physical interpretation

Statistical equilibrium turns microscopic motion into macroscopic regularity. One realization may behave irregularly, but the ensemble cloud of occupations becomes stable. [[flujo_probabilidad]] measures whether that cloud is drifting among states; [[desbalance_estadistico]] measures how far the traffic balance is from closure. [[entropia]] is not a vague synonym for disorder, but a measure of statistical spread. When transitions compensate, the probability distribution loses a net direction of evolution.

The [[constante_boltzmann]] enters this picture when a thermal bath constrains [[temperatura]]: it sets the energy scale that determines how much [[peso_boltzmann]] each [[energia_estado]] receives. Without a reliable thermal bath, the [[constante_boltzmann]] loses its physical meaning and the probabilistic description cannot be anchored to a temperature value. That is why the canonical equilibrium description fails for isolated systems even when a temperature value happens to be known from a prior measurement.

## Order of magnitude

In small simulations, [[desbalance_estadistico]] below 10^-2 may be considered close to equilibrium if sampling noise is comparable. In experiments, observe several characteristic transition times: if over 10 to 100 transition intervals the [[probabilidad_estado]] values show no drift and [[flujo_probabilidad]] fluctuates around zero, the stationary hypothesis is reasonable.

## Personalized resolution method

First list the accessible states and assign each [[probabilidad_estado]]. Then check normalization. Third, estimate direct and reverse [[tasa_transicion]] values. Fourth, compute or interpret [[flujo_probabilidad]] to detect net direction. Fifth, separate global stationarity from detailed balance. Finally, use [[entropia]], [[temperatura]], and [[peso_boltzmann]] only when the thermal model justifies them.

## Special cases and extended example

In a two-state system, equilibrium is recognized when average traffic from A to B compensates traffic from B to A. If the two states have similar [[energia_estado]], occupations may be similar. If one state is much higher in energy, its [[peso_boltzmann]] can reduce its occupation at moderate [[temperatura]]. In a three-state cycle, a subtler situation can occur: every [[probabilidad_estado]] remains constant, yet a circulating current persists. That case is stationary, but not necessarily detailed equilibrium.

When all three [[tasa_transicion]] in the cycle are equal and all state energies match, the circular [[flujo_probabilidad]] vanishes and the system reaches detailed equilibrium with uniform occupation. Breaking symmetry—raising the [[tasa_transicion]] on one edge, for instance—generates a persistent current even though all [[probabilidad_estado]] remain equal. This demonstrates that detailed balance is sensitive to the network topology and rate values, not only to the occupation values themselves. In experimental practice, distinguishing a circulating current from measurement noise requires either a long observation [[tiempo]] to accumulate reliable statistical averages or access to individual jump trajectories that reveal the directional bias of the traffic.

## Real student questions

Does equilibrium mean nothing changes? No. Microstates change, but the distribution does not.

Why care about [[flujo_probabilidad]] if the probabilities are known? Because equal distributions can hide different dynamics.

Does [[entropia]] always increase toward equilibrium? In an ideal isolated system it tends toward the compatible maximum, but this leaf studies a statistical distribution under stated assumptions.

Can I always use [[peso_boltzmann]]? Only when the thermal environment and [[temperatura]] justify a canonical description.

## Cross-cutting connections and study paths

This leaf connects partition functions, Boltzmann distributions, Markov processes, irreversibility, and macroscopic thermodynamics. It also prepares the study of fluctuations, because a stationary distribution can still show measurable microscopic variation.

Within statistical mechanics, the conceptual chain runs from stationary [[probabilidad_estado]] through partition functions to free energies and thermodynamic potentials. Outside statistical mechanics, the same formalism governs chemical kinetics, population dynamics, Boltzmann-machine learning in neural networks, and financial market equilibrium models. The concept of [[flujo_probabilidad]] reappears in network theory as net flow across edges, and [[entropia]] reappears in information theory as Shannon [[entropia]]. Students who understand detailed balance in a two-state system already possess the conceptual tools to approach each of those domains without major additional scaffolding.

## Final synthesis

Statistical equilibrium is dynamic balance: transitions continue, but the distribution stops moving. The physical signal is not silence, but zero net [[flujo_probabilidad]] and stationary [[probabilidad_estado]].