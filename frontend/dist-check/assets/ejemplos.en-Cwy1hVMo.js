const e=`# Exam-type example

## Problem statement

A vessel contains two gas compartments separated by a movable diathermal piston. Initially, one side is at 320 K and the other at 300 K. The effective pressures are 120 kPa and 100 kPa. The system is left to evolve until no macroscopic changes are observed. Decide which conditions must hold to declare thermodynamic equilibrium.

## Data

- Different initial temperatures: initial [[DeltaT]] of 20 K.
- Different effective pressures: initial [[DeltaP]] of 20 kPa.
- The wall allows heat and the piston allows volume adjustment.
- Relevant variables: [[T]], [[P]], [[DeltaT]], [[DeltaP]], [[A]] and [[tau]].

## System definition

The system is the pair of compartments. The internal boundary allows two processes: heat transfer and mechanical displacement. No matter exchange between compartments is stated, so chemical potential is not the primary criterion.

## Physical model

We use the coupled partial-equilibrium model. First the thermal condition is checked through [[DeltaT]]. Then the mechanical condition is checked through [[DeltaP]]. Complete equilibrium of the system requires both relevant gradients to vanish within problem tolerance.

## Model justification

The diathermal wall makes heat flow physically possible, and the movable piston makes expansion work physically possible. Therefore one equality is not enough. If temperature or pressure difference remains, a macroscopic cause for further evolution remains.

The model is causal at the internal boundary. A difference in [[T]] selects a direction for energy transfer: the hotter side loses internal energy and the colder side gains it until a common temperature is approached. A difference in [[P]] selects a direction for piston motion: the side with higher effective pressure performs work on the other side and changes the available volumes. Because both processes are allowed by the boundary, the final state can be called equilibrium only if both observable causes disappear.

## Symbolic solution

Thermal equilibrium condition:

{{f:equilibrio_termico}}

Associated common temperature:

{{f:igualdad_temperatura}}

Mechanical equilibrium condition:

{{f:equilibrio_mecanico}}

Associated common effective pressure:

{{f:igualdad_presion}}

If the boundary allowed matter exchange, one would also check:

{{f:equilibrio_material}}

General condition for allowed processes:

{{f:equilibrio_general}}

## Numerical substitution

Initially, [[DeltaT]] is 20 K, so thermal equilibrium is absent. [[DeltaP]] is also 20 kPa, so mechanical equilibrium is absent if the piston can move. The initial state is not thermodynamic equilibrium.

In the final state, to declare equilibrium, temperature readings must match within tolerance and effective pressures must balance. If an appreciable difference remains, the system is only in transition or in partial equilibrium.

If the final readings were 309.8 K and 309.9 K, with effective pressures of 109.9 kPa and 110.0 kPa, the decision would depend on instrumental tolerance. With a tolerance of 0.2 K and 0.2 kPa, those differences would be experimentally indistinguishable and approximate equilibrium would be accepted. With instruments ten times more precise, the same state could still be classified as unfinished relaxation.

## Dimensional validation

- [[DeltaT]] has dimension \`[Theta]\` and is measured in kelvin.
- [[DeltaP]] has dimension \`[M L⁻¹ T⁻²]\` and is measured in pascals.
- [[tau]] has dimension \`[T]\` and controls the time scale.
- [[A]] depends on the process, but its zero value indicates absence of generalized drive.

## Physical interpretation

The result means that equilibrium is a multiple condition. Equality of [[T]] removes net heat flow, while effective equality of [[P]] removes net piston push. This implies that the final system did not merely stop changing numerically: physically, it lost the internal causes of evolution.

It also shows why [[mu]] does not dominate this example. Since matter cannot pass between compartments, a chemical-potential difference does not by itself open a diffusion channel. If the wall were replaced by a permeable membrane, the model would need material equilibrium and the condition on [[mu]] would become as important as temperature and pressure.

# Real-world example

## Context

A thermometer is inserted into a hot liquid. At first the thermometer and the liquid are not in thermal equilibrium, so the reading changes. Only when sensor and liquid share [[T]] within tolerance does the reading represent the liquid temperature.

## Physical estimation

If the sensor takes about 30 s to stabilize, that interval estimates [[tau]] for the setup. A reading taken after 3 s may be far from equilibrium even if the number looks plausible. If the desired tolerance is 0.1 K, one must wait until changes are smaller than that scale.

In a real reading, temperature can be recorded every 5 s. If the difference between consecutive readings falls from 2 K to 0.6 K and then to 0.08 K, the last stage is within the 0.1 K tolerance. The estimate does not prove exact equilibrium, but it justifies using the reading as the common temperature of sensor and liquid for the experimental purpose.

## Interpretation

Measurement is not instantaneous because equilibrium requires relaxation. The quantitative reading connects the abstract concept to an experimental decision: wait several times [[tau]] before recording [[T]]. Without waiting, one measures a transient, not an equilibrium state.

The same reasoning applies to pressure sensors, calorimetric chambers and laboratory vessels. In every case, a reliable datum appears when the instrument stops changing because the gradient feeding it has become smaller than the relevant resolution. Equilibrium is therefore a physical condition and also an experimental reading rule.
`;export{e as default};
