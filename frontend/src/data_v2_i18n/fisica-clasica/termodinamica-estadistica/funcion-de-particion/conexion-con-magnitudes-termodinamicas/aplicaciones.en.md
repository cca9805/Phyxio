# Applications

## 1. Microscopic calorimetry of a two-level system
Dominant variable: [[energia_interna]]
Validity limit: 0.01·kBT < energy spacing < 100·kBT

In a system with two accessible energy levels, the [[funcion_particion]] predicts how [[energia_interna]] changes as [[temperatura]] varies. What is measured or estimated is not a microscopic trajectory, but the average occupation of the states. If [[temperatura]] is very low, the lower state dominates; as it rises, the excited state gains statistical weight. The [[derivada_log_particion_temperatura]] quantifies that sensitivity. This is useful for simple magnetic systems, crystal defects, or molecules with two relevant configurations. The key prediction is the thermal scale at which [[energia_interna]] starts increasing rapidly. If the energy spacing is far from kBT, the response is either tiny or saturated.

A practical implication is that maximum sensitivity occurs when the energy gap is comparable to [[constante_boltzmann]] times [[temperatura]]. Near that threshold, small changes in [[temperatura]] produce large shifts in [[energia_interna]] and in the heat capacity. This makes two-level systems useful as molecular thermometers or occupation sensors. Calculating the [[funcion_particion]] across this thermal range also gives the molar heat capacity as a function of [[temperatura]], which can be compared directly with calorimetric measurements.

## 2. Phase stability from free energy
Dominant variable: [[energia_libre_helmholtz]]
Validity limit: single stable phase and smooth curve away from transitions

The [[energia_libre_helmholtz]] compares which macroscopic state is more stable at a given [[temperatura]]. Starting from [[funcion_particion]], one obtains a potential that combines microscopic energy and statistical accessibility. In one phase, increasing [[temperatura]] can make the [[entropia]] contribution lower the free energy. The prediction is a stability trend: which configuration is preferred as thermal weights change. The limit appears near phase transitions, where the curve may have abrupt changes or coexistence. Then a single smooth [[funcion_particion]] may hide competing branches and the model must be extended.

A practical criterion is that the most thermodynamically stable phase at a given [[temperatura]] is the one with lower [[energia_libre_helmholtz]]. Plotting [[energia_libre_helmholtz]] against [[temperatura]] for two competing phases makes the transition point visible as a crossover. This graphic test summarizes in a single curve what would otherwise require comparing multiple thermodynamic properties independently. If the two curves never cross in the relevant temperature range, the system remains in the same phase throughout.

## 3. Vibrational [[entropia]] in solids
Dominant variable: [[entropia]]
Validity limit: nearly independent vibrational modes and thermal equilibrium

In a solid, atoms vibrate around equilibrium positions. A vibrational [[funcion_particion]] approximates how many modes become active as [[temperatura]] changes. The [[entropia]] is obtained by reading how [[energia_libre_helmholtz]] changes with [[temperatura]], through [[pendiente_energia_libre_temperatura]]. This application estimates how much of a solid’s stability comes from having more accessible modes, not only from lower energy. The measured or predicted quantity is the entropic contribution to free energy. If vibrations become anharmonic, defects appear, or the material approaches a structural transition, the simple model loses validity.

A practically important consequence is that [[entropia]] can stabilize high-temperature structures even when they have higher energy at low [[temperatura]]. The vibrational [[funcion_particion]] quantifies how many additional modes activate upon heating and how that increase in accessibility lowers [[energia_libre_helmholtz]]. In materials design, this entropy-stabilization mechanism is exploited to engineer alloys and oxides with useful high-temperature properties that would be inaccessible on purely energetic grounds.

## 4. Gas [[presion]] from volumetric response
Dominant variable: [[presion]]
Validity limit: dilute gas, equilibrium, and controlled macroscopic [[volumen]]

For a gas, changing [[volumen]] modifies the available translational microstates. The [[funcion_particion]] encodes that change, and [[presion]] is obtained from the response of [[energia_libre_helmholtz]] to [[volumen]], through [[pendiente_energia_libre_volumen]]. What is predicted is the force per area exerted on the walls. This application shows that [[presion]] is not only particle impacts viewed mechanically; it is also a thermodynamic derivative of the proper potential. The validity limit breaks if the gas is dense, strongly interacting, condensing, or lacks a uniform [[temperatura]].

A consistency check: for a non-interacting gas, the [[presion]] computed from [[pendiente_energia_libre_volumen]] must reproduce PV equal to NkT in the dilute limit. If it does not, either the [[funcion_particion]] is missing translational states or a unit conversion is wrong. This cross-check anchors the [[funcion_particion]] formalism to classical thermodynamics and confirms that the statistical approach introduces no inconsistency at the macroscopic level.

## 5. Computational modeling of materials
Dominant variable: [[funcion_particion]]
Validity limit: sufficiently sampled microstate set and positive Z

In materials simulations, [[funcion_particion]] acts as the organizing kernel. From sampled microstates one estimates [[energia_libre_helmholtz]], [[energia_interna]], [[entropia]], and, if [[volumen]] changes are explored, [[presion]]. What is constrained is the coherence between microscopic data and macroscopic predictions. If the simulation misses rare but relevant states, [[derivada_log_particion_temperatura]] becomes biased and the thermal response is misread. This is used in polymers, surfaces, defective solids, and molecular systems. A practical criterion is convergence: doubling the sampling should not substantially change the derived quantities.

A standard validation protocol compares [[energia_libre_helmholtz]] computed by two independent routes: directly from the [[funcion_particion]] and by thermodynamic integration of [[energia_interna]] over a thermal path. If the two routes disagree by more than the expected sampling error, the simulation has not converged and the derived [[entropia]] or [[presion]] values should not be used in physical predictions. This cross-check is especially important near phase boundaries, where small errors in sampling rare microstates can shift the predicted transition temperature significantly.