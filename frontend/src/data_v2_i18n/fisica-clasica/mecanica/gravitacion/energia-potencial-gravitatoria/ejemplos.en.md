# Exam-type example

## Problem statement

A spacecraft of mass [[m]] performs an orbital transfer around a source mass [[M]]. The problem is solved through energetic state comparison rather than full time-trajectory integration. You must compute [[DeltaU]], interpret the sign of [[Wg]], and determine whether the implied [[DeltaK]] is consistent with conservative mechanics. The task explicitly requires model justification, not only arithmetic substitution.

## Data

Given quantities are [[G]], [[M]], [[m]], [[ri]], and [[rf]]. The process is defined with [[rf]] larger than [[ri]], so the transfer is outward in radial sense. Infinity reference is adopted for potential-energy interpretation. Dissipation is neglected. The radial span is stated to be significant, which means the local near-surface approximation is not the primary model for the main result.

## System definition

Physical system consists of source mass [[M]] and test body [[m]] in a central field. Initial state uses [[ri]] with associated [[Ui]] and kinetic component. Final state uses [[rf]] with associated [[Uf]] and final kinetic component. Output quantities are [[DeltaU]], [[DeltaK]], [[E]], and [[Wg]]. SI consistency is enforced for direct joule interpretation and robust dimensional checks.

The kinetic term [[K]] is tracked explicitly so that mechanical-state interpretation remains consistent with conservation statements.

## Physical model

Selected model is conservative central gravity with effective spherical symmetry. The process is represented through energetic states. Radial distance [[r]] controls the dominant behavior of [[U]]. This model is sufficient because the question targets two-state energy transfer, not multipole perturbations or drag effects. The local form using [[h]] and [[g]] is reserved only as a secondary order estimate.

## Model justification

The general model is physically explicit because process scale does not support safe local linearization. The exam question focuses on energetic transition between orbital states, and this is directly encoded with [[ri]] and [[rf]]. Conservative treatment is justified because no active thrust segment or non-conservative mechanism is included in the idealized transition stage. Therefore, the core energetic relations of this leaf are both relevant and sufficient.

## Symbolic solution

State potential energy is introduced through:

{{f:energia_potencial_general}}

Two-state variation is obtained through:

{{f:cambio_energia_potencial}}

Conservative exchange is linked with:

{{f:conservacion_energia}}

Work relation is enforced with:

{{f:trabajo_gravitatorio}}

Global state closure is tracked by:

{{f:energia_mecanica}}

State classification is completed with:

{{f:condicion_ligadura_conceptual}}

## Numerical substitution

Insert values of [[G]], [[M]], [[m]], [[ri]], and [[rf]] into the [[DeltaU]] relation. The computed sign is positive, consistent with outward radial transfer. From that result, [[DeltaK]] is negative under conservation, and [[Wg]] is negative from the work relation. Substitution therefore confirms that raising orbital radius requires net energetic input, even when the derivation is framed as state transition rather than propulsion microdynamics.

## Dimensional validation

Input quantities are expressed in SI. Output quantities [[DeltaU]], [[DeltaK]], [[E]], and [[Wg]] must be in joules. If a non-energetic unit appears, the typical cause is radius conversion error or mixed mass units. Sign consistency is also checked: in conservative outward transfer, [[DeltaU]] and [[Wg]] must have opposite sign. This validation layer prevents formally clean but physically invalid answers.

## Physical interpretation

The result is not only numeric. Positive [[DeltaU]] means the final state is less gravitationally bound than the initial state. Consequently, in conservative framework, [[DeltaK]] must decrease, so orbital speed cannot increase without external energy supply. The sign of [[Wg]] confirms gravity is not delivering energy in this segment. It opposes outward motion. This causal reading links configuration, work, and motion in one coherent narrative.

# Real-world example

## Context

In an Earth-observation mission, a small satellite must change altitude to improve regional coverage. Mission control needs a quick but reliable energetic estimate before running high-cost simulations. The team evaluates the main transfer with the full radial model and uses a local approximation only for a short final adjustment segment. The goal is to decide whether fuel margin is sufficient with acceptable uncertainty.

## Physical estimation

Primary estimate computes [[DeltaU]] from [[ri]] and [[rf]] using the full radial model. For the short adjustment segment, the team tests local scaling with:

{{f:aproximacion_superficial}}

Comparing both orders of magnitude reveals whether local treatment is acceptable only as a secondary approximation. In this case, the major transfer requires the general model, while the fine adjustment remains inside local validity range. This quantitative check improves planning speed and reduces risk of underestimating mission energetic demand.

## Interpretation

Operational conclusion is direct. The overall maneuver increases [[U]], so propulsion must provide net useful energy. Local approximation is informative for a short segment, but cannot replace the full radial calculation for the whole transfer. Combining both levels gives a robust decision package: energy budget, safety margin, and execution sequencing. The interpretation therefore explains not just how much [[DeltaU]] changes, but why that change controls mission feasibility, maneuver pacing, and final [[E]] balance.

From an engineering standpoint, this interpretation is also a communication tool between guidance, propulsion, and mission-analysis teams. When all teams read the same energetic language, review cycles become faster and less ambiguous, because state transitions can be audited against a shared set of quantities including [[K]], [[DeltaU]], and [[Wg]].