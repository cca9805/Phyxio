const e=`\uFEFF# Exam-type example

## Problem statement
A probe of mass [[m]] orbits a source body [[M]] and transitions between two radial states. The initial state is located at [[ri]] and the final state at [[rf]], with [[rf]] greater than [[ri]]. The task is to evaluate both local field evolution and energetic-state evolution under infinity-zero potential reference. The goal is not only numerical output, but also a physically coherent narrative linking dynamics and energy.

## Data
- Gravitational constant [[G]] in SI units.
- Source mass [[M]] from mission data.
- Probe mass [[m]] from vehicle specifications.
- Initial radius [[ri]] and final radius [[rf]] measured from source center.
- Initial local field reading [[gi]] for consistency checking.
- Final local field reading [[gf]] for consistency checking.

## System definition
The physical system includes the gravitational source and the probe as test body. External dissipative effects are neglected over the analyzed segment. Geometry is modeled as central and radial, so each state is represented by one distance coordinate. Potential reference is fixed at infinity to preserve sign consistency in [[V]] and [[U]].

## Physical model
A classical central-field model is adopted. This model supports two complementary readings. First, a local acceleration reading through [[g]] to compare initial and final conditions. Second, an energetic state reading through [[V]], [[U]], [[DeltaU]], and [[Wg]]. Cross-checking both levels is essential to avoid solutions that are algebraically correct but physically weak.

## Model justification
The model is justified because the source can be approximated as effectively spherical and the velocity regime does not demand relativistic treatment. The problem explicitly compares radial states, so potential-based state analysis is more robust than field-only reasoning. Additional traceability is achieved by recording [[gi]] and [[gf]] to verify expected dynamic trend.

## Symbolic solution
Local field expression at a representative radius:

{{f:campo_puntual}}

Potential expression under infinity reference:

{{f:potencial_puntual}}

Potential energy expression for the probe:

{{f:energia_desde_potencial}}

State-to-state potential-energy change:

{{f:cambio_energia_potencial}}

Work-energy relation for gravitational interaction:

{{f:trabajo_gravitatorio}}

Conceptual bridge between field behavior and potential slope:

{{f:relacion_campo_potencial_conceptual}}

Conceptual superposition reference for multi-source extensions:

{{f:superposicion_campos_conceptual}}

## Numerical substitution
Three controls are enforced during substitution. Control one, all variables are converted to SI. Control two, initial and final radii are not swapped. Control three, signs remain compatible with the chosen reference.

For a typical orbital transfer data set, the final-state field [[gf]] is lower in magnitude than [[gi]], consistent with larger radial distance. The final-state potential [[V]] is less negative than initial-state potential, indicating a shallower energetic well. The resulting [[DeltaU]] is positive for outward transfer, and [[Wg]] carries opposite sign under conservative interaction assumptions.

## Sensitivity analysis
If [[M]] increases by a fixed percentage, both field magnitude and potential-well depth shift proportionally in magnitude at fixed radius. If the variation is instead applied to [[r]], the effect is strongly non-linear due to radial dependence. Small radial reductions can create large dynamic and energetic changes.

Interpretation is also sensitive to state ordering. Swapping [[ri]] and [[rf]] reverses the sign of [[DeltaU]] and therefore changes work interpretation. This is why timeline labeling should be completed before numerical insertion. In advanced assessments, this step clearly separates procedural substitution from physically controlled reasoning.

## Dimensional validation
Dimensional validation preserves model trust. [[g]] must retain acceleration dimension. [[V]] must retain energy-per-mass dimension. [[U]], [[DeltaU]], and [[Wg]] must retain energy dimension. Any dimensional mismatch usually points to distance conversion errors or source-test mass role confusion.

A second validation layer is trend-based. If [[rf]] is larger than [[ri]], then field magnitude should drop from [[gi]] to [[gf]]. If that trend is absent, either data labeling or model choice is inconsistent.

## Physical interpretation
The result indicates that the probe reaches a less tightly bound energetic state as radius increases. The drop from [[gi]] to [[gf]] confirms weakening local influence with distance. Positive [[DeltaU]] confirms potential-energy increase during outward transfer. Therefore, the solution is not merely numerical; it establishes a causal chain between radial geometry, local acceleration, and energetic state structure.

# Real-world example

## Context
A space agency plans a transfer maneuver for an observation satellite. The mission team must define ignition timing and minimum energy budget to move from parking orbit to higher operational orbit. This decision requires integrated field and potential reading to avoid fuel overdesign and stability risk.

## Physical estimation
Using typical mission-scale parameters, preliminary modeling shows that radial increase produces a measurable drop in local field and a rise in satellite potential energy. The energetic scale is estimated through [[DeltaU]], while operational work reading is captured through [[Wg]]. In order-of-magnitude terms, moderate radial changes in planetary environments can still imply large energy shifts for propulsion planning.

## Interpretation
The estimation demonstrates that field-only reasoning is insufficient for fuel decisions. Potential and energy-state analysis are equally necessary to evaluate total transfer cost. This implies mission-control architecture must combine orbital state sensing with coherent energetic modeling. Ignoring that cross-check may approve a maneuver that looks dynamically plausible but is energetically underfunded. The operational lesson is direct: [[g]], [[V]], [[DeltaU]], and [[Wg]] must be interpreted as one integrated decision chain.
`;export{e as default};
