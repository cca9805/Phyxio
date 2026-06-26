# Exam-type example


## Problem statement

A canonical system has three non-degenerate microstates with energies 0, 2.0e-21 J, and 5.0e-21 J. It is in equilibrium with a thermal bath at 300 K. Build the [[funcion_particion]], estimate the [[energia_media]] from canonical weights, and explain how the result would change when [[temperatura]] increases.

## Data

- [[temperatura]]: 300 K
- [[constante_boltzmann]]: 1.38e-23 J/K
- [[energia_microestado]] of state 0: 0 J
- [[energia_microestado]] of state 1: 2.0e-21 J
- [[energia_microestado]] of state 2: 5.0e-21 J
- Condition: fixed volume and thermal equilibrium

## System definition

The system is an ideal set of discrete accessible microstates with no extra degeneracy. It does not exchange particles and no mechanical work is modeled. The thermal bath fixes [[temperatura]], which fixes [[beta]] and the canonical weights. The goal is not to follow a microscopic trajectory but to compute a stable ensemble average. Therefore [[energia_media]] is a property of the statistical distribution, not a label attached to one particular microstate.

## Physical model

The canonical ensemble is used. Each [[energia_microestado]] enters the [[funcion_particion]] with a weight that decreases as energy increases. The [[funcion_particion]] normalizes those weights and generates averages. Formally, the derivative of ln Z with respect to [[beta]] gives [[energia_media]], but in this discrete example the same result can be read as a weighted average over the three listed energies.

## Model justification

The model fits because the system is in thermal equilibrium, [[temperatura]] is imposed by a reservoir, and all accessible energies are given. The thermal scale [[constante_boltzmann]] T is about 4.14e-21 J, comparable with the excited energies. This means the first excited level contributes strongly and the second cannot be ignored. If the second level were dropped, [[funcion_particion]] would be too small and [[energia_media]] would be underestimated. Fixed volume also allows later changes in [[energia_media]] to be associated with [[capacidad_calorifica]] without mixing in expansion work.

## Symbolic solution

First define the inverse thermal scale:

{{f:beta_inversa_termica}}

Then construct the canonical sum:

{{f:funcion_particion_canonica}}

The mean energy follows from the sensitivity of ln Z:

{{f:energia_media_desde_derivada_beta}}

If data are given against [[temperatura]], use the equivalent thermal form:

{{f:energia_media_desde_derivada_temperatura}}

For heating response, use:

{{f:capacidad_calorifica_desde_energia_media}}

In a non-degenerate discrete sum, this has the same physical reading as weighting each [[energia_microestado]] by its canonical contribution inside [[funcion_particion]].

## Numerical substitution

The thermal scale is [[constante_boltzmann]] T ≈ 4.14e-21 J. The relative exponents are 0, -0.48, and -1.21. The approximate weights are 1, 0.62, and 0.30, giving [[funcion_particion]] ≈ 1.92. The weighted energy contribution is 0·1 + 2.0e-21·0.62 + 5.0e-21·0.30 ≈ 2.74e-21 J. Dividing by [[funcion_particion]] gives [[energia_media]] ≈ 1.43e-21 J. This value lies above the ground state and below the first excited energy, which is possible because it is an average.

## Dimensional validation

The [[funcion_particion]] is dimensionless because it sums exponential weights. The [[beta]] has dimension J^-1 because it is the inverse of an energy scale. The derivative [[derivada_log_particion_beta]] has energy dimension with the opposite sign convention needed for [[energia_media]]. The numerical [[energia_media]] is in joules. If [[capacidad_calorifica]] were calculated, its unit would be J/K because it measures change in energy per change in [[temperatura]].

## Physical interpretation

The numerical result means that at 300 K the system is not locked into the ground microstate, yet it is not mainly occupying the highest listed state either. The value indicates partial thermal access to excited states, and this implies that the thermal scale is comparable with the lower energy gap. Therefore [[energia_media]] depends on the whole canonical distribution, not on one chosen [[energia_microestado]]. Physically, increasing [[temperatura]] decreases the penalty on high-energy states, so [[funcion_particion]] increases and [[energia_media]] moves upward toward the weighted average of the available spectrum. The result also indicates where [[capacidad_calorifica]] can become noticeable: it is largest when occupations are changing rapidly with temperature.

# Real-world example


## Context

In an idealized molecular solid, a molecule may have several low rotational or vibrational energy states. At moderate temperature they are not equally populated. The [[funcion_particion]] allows one to estimate the [[energia_media]] associated with those degrees of freedom without tracking every molecule individually.

## Physical estimation

Suppose the relevant spacings among [[energia_microestado]] values are of order 1e-22 J to 1e-21 J. At room temperature, the thermal scale [[constante_boltzmann]] T is approximately 4e-21 J, so the estimate should include several low states. The approximate [[energia_media]] per molecule is plausibly on the scale of 1e-21 J, a reasonable value for microscopic thermal energy. It would not be reasonable to obtain 1 J per molecule, whose magnitude is astronomically too large, nor 1e-25 J if many states are thermally active. This order-of-magnitude check ties the calculation to physical scale rather than letting algebra float away like a helium balloon with equations painted on it.

## Interpretation

The practical value is that [[funcion_particion]] converts a complicated microscopic list into macroscopic predictions. Measuring how energy changes with [[temperatura]] gives access to [[capacidad_calorifica]] and reveals which degrees of freedom are active. If the measured heat capacity is larger than the simple model predicts, this may indicate extra levels, degeneracy, or interactions missing from the assumed spectrum. The [[energia_media]] is therefore both a computed average and a diagnostic of the microscopic structure.