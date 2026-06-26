# Physical models: Flat and Banked Curves

## Ideal model

The baseline model treats the vehicle as a particle moving on a circular path with approximately constant [[r]]. Curvature demand is represented by [[ac]] and [[Frad]]. On a flat curve, inward support is mainly provided by [[fs]]. On a banked curve, the orientation of [[Nn]] adds a radial contribution controlled by [[th]].

This ideal model is useful because it separates three layers clearly: kinematic demand, dynamic supply, and operating margin under grip uncertainty through [[mu]].

## Hypotheses

- The local trajectory can be approximated as circular with a well-defined [[r]].
- Speed [[v]] is approximately steady in the analyzed segment.
- Tire-road contact remains in static-grip regime, so [[fs]] stays below the adherence threshold set by [[mu]] and [[Nn]].
- Road geometry is stable enough to treat [[th]] as a design parameter.

Under these assumptions, the leaf equations provide reliable first-order diagnostics and design comparisons.

## Quantitative validity domain

The model is valid when:

- [[r]] > 0 and [[m]] > 0.
- [[mu]] > 0 and [[Nn]] > 0 in adherence calculations.
- [[v]] remains in a regime where severe transients are not dominant.
- [[th]] is interpreted as roadway banking, not instantaneous body lean in aggressive maneuvers.

In practice, this domain covers preliminary analysis of road curves, connector-ramp audits, and training-grade simulations.

## Model failure signals

- Persistent gap between prediction and measured behavior beyond operational tolerance.
- Sustained slip events despite predicted margin.
- Strong in-curve braking or acceleration invalidating quasi-uniform assumptions.
- Rapidly varying surface condition producing sharp local changes in effective [[mu]].

When these signals appear, parameter tuning is not enough; the model class must be upgraded.

## Extended or alternative model

The next model level typically includes:

- Longitudinal and lateral load transfer.
- Nonlinear tire-force behavior under slip.
- Variable curvature and surface disturbances.
- Coupling with active stability-control logic.

### Explicit transition to an alternative model

Switch from the ideal to the extended model when control is no longer driven mainly by [[v]]-[[r]]-[[mu]] balance and repeated field evidence shows unacceptable mismatch with ideal predictions. A practical criterion is sustained error above safety tolerance across multiple comparable events; at that point, transient and nonlinear effects must be modeled explicitly.

## Operational comparison

| Aspect | Ideal curve model | Extended vehicle model |
|---|---|---|
| Main variables | [[v]], [[r]], [[mu]], [[th]] | Coupled dynamic states |
| Main output | [[Frad]] and adherence margin | Full stability envelope |
| Computational cost | Low | Medium/high |
| Recommended use | Fast diagnosis and early design | Final validation and critical cases |

The pedagogical progression is straightforward: start with the ideal model to build causal understanding, then migrate to extended modeling when operational risk requires higher fidelity.
