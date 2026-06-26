# Applications

## 1. Pressure sensor calibration in light gases

Dominant variable: [[presion]]
Validity limit: [[presion]] below 10^6 Pa and gas sufficiently dilute

In laboratory chambers, the [[presion]] of helium or nitrogen is often interpreted through the ideal gas model. The sensor does not measure individual molecules; it measures the collective effect of many collisions against a surface. The microscopic model explains that if [[temperatura]] rises at fixed [[volumen]], the agitation energy increases and collisions become more intense. The measured variable is [[presion]], but the physical reading is grounded in [[energia_cinetica_media]], [[numero_particulas]], and [[volumen]]. The prediction becomes unreliable if the gas is strongly compressed, if leaks occur, or if the sensor operates with thermal gradients. One way to validate calibration is to compare the measured [[presion]] with the value predicted by the equation of state using known [[numero_particulas]] and controlled [[temperatura]]. A systematic discrepancy may signal molecular adsorption on walls, impurity ingress, or conditions approaching the limit of ideal gas validity.

## 2. Estimation of molecular speeds

Dominant variable: [[velocidad_rms]]
Validity limit: [[temperatura]] in kelvin and classical non-quantum gas

[[velocidad_rms]] allows estimating a typical speed without tracking every particle. In light gases such as helium, it can be very large even when the macroscopic gas is at rest. The application is useful for understanding diffusion, wall arrival times, and collision rate scales. One fixes or measures [[temperatura]], knows [[masa_particula]], and estimates the speed using

{{f:velocidad_cuadratica_media}}

. The result must not be read as an identical speed shared by all particles or as a direction of flow. The limit appears at low [[temperatura]], where quantum effects can modify the classical picture. Comparing gases of different [[masa_particula]] at the same [[temperatura]] shows that [[velocidad_rms]] is larger for lighter particles, which explains why helium escapes faster than argon or nitrogen through small leaks in a container.

## 3. Design of closed thermal vessels

Dominant variable: [[temperatura]]
Validity limit: constant [[volumen]], thermal equilibrium, and no condensation

In a rigid vessel, raising the [[temperatura]] of an ideal gas increases the [[energia_cinetica_media]] of the particles. If [[numero_particulas]] and [[volumen]] remain constant, this increase is reflected in higher [[presion]]. This principle is used to estimate safety margins for cylinders, vacuum chambers, and thermal devices. The controlled variable may be [[temperatura]], but the design constraint is typically the maximum admissible [[presion]]. The model fails when the gas reacts chemically, approaches liquefaction, or the vessel does not maintain uniform equilibrium. The practical calculation takes the [[presion]] at the initial [[temperatura]], multiplies it by the ratio of absolute temperatures, and compares the result with the vessel pressure rating. If operating temperature can rise sharply due to loss of control or external fire, this factor may exceed vessel strength, and the design must incorporate relief valves sized with the same model.

## 4. Comparison of gases at equal [[temperatura]]

Dominant variable: [[energia_cinetica_media]]
Validity limit: monatomic ideal gases in equilibrium

Comparing helium and argon at the same [[temperatura]] reveals a powerful idea: the mean translational [[energia_cinetica_media]] per particle is identical for both gases, even though [[velocidad_rms]] differs. The [[masa_particula]] of argon is larger, so its typical speed is lower. This application helps separate energy from speed, two concepts students frequently confuse. The common mean energy is predicted using

{{f:energia_cinetica_media_temperatura}}

and then the typical speed is contrasted using

{{f:velocidad_cuadratica_media}}

The limit appears when gases are not monatomic or when rotational and vibrational modes store additional energy beyond translation. This comparison is also the basis of the equipartition principle: at the same [[temperatura]], all translational degrees of freedom receive the same mean energy per particle regardless of [[masa_particula]]. The difference between gases shows up only in [[velocidad_rms]], not in mean energy per translational degree of freedom.

## 5. Educational molecular simulation

Dominant variable: [[numero_particulas]]
Validity limit: large [[numero_particulas]] for stable averages, typically greater than 10^3 in educational simulations

In a computer simulation, particles bounce inside a container. Even though the simulated [[numero_particulas]] is far smaller than in a real gas, the link between [[temperatura]] and [[energia_cinetica_media]] can be observed by averaging enough collisions and speeds. The simulation measures positions and velocities, computes [[velocidad_rms]], and shows how [[presion]] emerges as a collective effect of many microscopic impacts. It is useful for seeing how a macroscopic law arises from many individual microscopic actions. The statistical limit is clear: with few particles, fluctuations are large and readings of [[temperatura]] or [[presion]] become noisy. For [[velocidad_rms]] from the simulation to agree with the value predicted by the model, the particles must have had time to exchange energy through collisions and the average must be computed over a representative sample of time steps. Without that prior thermalization, the measured [[energia_cinetica_media]] may be far from equilibrium and the comparison with thermodynamic [[temperatura]] is not valid. A practical check is to monitor the running average of [[velocidad_rms]] across successive time steps and confirm it stabilizes before recording any result.