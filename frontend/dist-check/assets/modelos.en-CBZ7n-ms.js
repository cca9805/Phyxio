const e=`# Physical Models for Thermodynamic Equilibrium

## Ideal Model

The ideal model represents a macroscopic system divided into regions that may exchange heat, volume or matter depending on their boundaries. Equilibrium is reached when relevant intensive variables equalize or balance: [[T]] for heat exchange, [[P]] for movable boundaries and [[mu]] for material exchange.

This model does not describe individual microscopic motion. It describes the final macroscopic state, where [[DeltaT]], [[DeltaP]] and the affinity [[A]] associated with allowed processes vanish.

## Hypotheses

- The system has well-defined state variables.
- Boundaries and constraints are known.
- Internal regions can be approximated as macroscopic subsystems.
- Relevant gradients are measurable through [[DeltaT]], [[DeltaP]] or [[A]].
- The observation scale is longer than the necessary relaxation time [[tau]].

These hypotheses prevent confusing equilibrium with apparent rest or with a steady state sustained by flows.

## Quantitative Validity Domain

The model is adequate when internal differences are small compared with experimental precision: for example, [[DeltaT]] with magnitude below 0.1 K in a sensitive laboratory or [[DeltaP]] below 1 percent of the reference pressure for a simple piston. In school thermodynamics, treating [[DeltaT]] and [[DeltaP]] as zero within significant figures is usually sufficient.

If [[tau]] is much shorter than the observation time, equilibrium can be considered reached. If [[tau]] is comparable to or larger than the measurement time, relaxation or metastability should be discussed.

## Model Failure Signals

The model fails if there is permanent heat flow, sustained spatial gradients, slow non-equilibrated reactions, turbulence, hysteresis or material aging. It also fails if the system is externally driven, such as a bar held between two different temperatures.

An observable failure signal is that a local reading of [[T]] or [[P]] strongly depends on the measurement point. Another is that the system continues slow changes even though it seems constant over a short interval.

## Extended or Alternative Model

When equilibrium is not reached immediately, a relaxation model is used. That model introduces flows, conductances, heat capacities, viscosity, diffusion or chemical kinetics. Then [[tau]] becomes a central variable and differences [[DeltaT]] and [[DeltaP]] evolve in time.

Switch to the extended model when the problem asks for cooling rate, diffusion speed, time to equilibrium, spatial profile or entropy production during the process. Equilibrium remains the destination, but the alternative model describes the path.

## Operational comparison

The ideal model answers whether a final state can be treated as equilibrium. The extended model answers how long it takes and what flows appear during relaxation. For state exercises, the ideal model is enough; for time-dependent processes, the extended model is needed.
`;export{e as default};
