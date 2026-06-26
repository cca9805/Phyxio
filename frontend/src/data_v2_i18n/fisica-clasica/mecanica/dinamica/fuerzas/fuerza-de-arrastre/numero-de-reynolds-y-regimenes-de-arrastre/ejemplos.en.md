# Exam-type example

## Problem statement

A sphere with diameter $0.10\,\mathrm{m}$ moves through still air at relative speed [[v]] = $12\,\mathrm{m/s}$. The task is to diagnose the flow regime and decide whether a viscosity-dominant, inertia-dominant, or transitional drag-model block should be selected first. The instructor explicitly asks for a justified choice of characteristic length [[L]] and a clear explanation of why [[Re]] is not a force.

The exercise also requests a second diagnosis in water with the same geometry and speed to highlight how medium properties modify model choice. The key question is not "what is the drag force now" but "which drag-model family is physically coherent in each medium".

## Data

For air:

- [[rho]] = $1.2\,\mathrm{kg/m^3}$
- [[eta]] = $1.8\times 10^{-5}\,\mathrm{Pa\cdot s}$
- [[nu]] = $1.5\times 10^{-5}\,\mathrm{m^2/s}$
- [[v]] = $12\,\mathrm{m/s}$
- Sphere diameter: $0.10\,\mathrm{m}$

For water:

- [[rho]] = $1000\,\mathrm{kg/m^3}$
- [[eta]] = $1.0\times 10^{-3}\,\mathrm{Pa\cdot s}$
- [[nu]] = $1.0\times 10^{-6}\,\mathrm{m^2/s}$
- [[v]] = $12\,\mathrm{m/s}$
- Same geometry

Initial scale choice: [[L]] equals the sphere diameter.

## System definition

The physical system is a rigid body in external flow. The reference speed is the body-fluid relative speed. Characteristic length [[L]] is taken as diameter because it controls wake size and separation behavior for this geometry.

Medium properties are assumed effectively constant over the analyzed interval. This is acceptable for first-pass regime diagnosis and model selection, provided that validity limits are explicitly stated.

## Physical model

The model sequence follows the leaf logic:

1. Compute [[Re]] from medium and kinematic inputs.
2. Read regime interval for external flow.
3. Select the drag-model block consistent with the dominant mechanism.

Both core formulas are used to cross-check consistency.

## Model justification

This approach is justified because model choice depends on whether viscous diffusion or inertial persistence dominates. [[Re]] condenses that competition into an interpretable adimensional criterion. A high-regime reading usually makes a purely linear drag hypothesis weak; a low-regime reading often supports viscosity-dominant assumptions.

Repeating the diagnosis in air and water with fixed geometry and speed demonstrates that medium properties can shift model confidence even when the body itself is unchanged. This is exactly why model reuse without regime recalculation is unsafe.

## Symbolic solution

Path 1, with [[eta]]:

{{f:reynolds_viscosidad_dinamica}}

Path 2, with [[nu]]:

{{f:reynolds_viscosidad_cinematica}}

Qualitative dependence:

- [[Re]] increases with [[v]].
- [[Re]] increases with [[L]].
- [[Re]] decreases when viscous diffusion strength of the medium increases.

Therefore, the same object can move across regime interpretation when medium or temperature changes.

## Numerical substitution

For air, using [[nu]], the numerical result is approximately [[Re]] = 8.0e4.

For air, using [[eta]], the numerical result is again approximately [[Re]] = 8.0e4.

The two paths are consistent.

For water, using [[nu]], the numerical result is [[Re]] = 1.2e6.

For water, using [[eta]], the numerical result is also [[Re]] = 1.2e6.

Interpretation: both media produce high-regime external-flow readings for this geometry and speed. Water yields an even higher value under the given inputs.

## Dimensional validation

Using the [[eta]] path, unit cancellation yields an adimensional quantity because density, speed, and length are balanced by dynamic viscosity.

Using the [[nu]] path, the ratio between speed-length scaling and kinematic viscosity is also adimensional.

In both paths, [[Re]] is adimensional as required.

## Physical interpretation

The physically correct conclusion is not "high [[Re]] means high force by definition". The correct conclusion is: high [[Re]] indicates inertial dominance and suggests starting from an inertia-dominant drag block. Force magnitude still depends on the selected drag law and its parameters.

The case also provides a robustness insight: despite medium change, both scenarios remain in high-regime reading for the selected scale and speed. That stabilizes initial model choice in this specific setup.

# Real-world example

## Context

An engineering team designs a protective housing for a meteorological sensor on a mast exposed to winds from $3$ to $20\,\mathrm{m/s}$. The team must decide whether one drag correlation is enough or a piecewise strategy is required.

They define [[L]] as effective frontal width, estimate seasonal air properties, and compute [[Re]] at speed-band limits. The objective is operational: reduce load-estimation bias without overdesigning support structure.

## Physical estimation

With fixed [[L]] and typical air [[nu]], [[Re]] moves approximately linearly with [[v]]. Even at low speed, the values remain in inertia-dominant range for this geometry. However, large incidence angles are expected to alter wake structure, so the team plans targeted validation for extreme orientations.

The useful output is not one number but a decision map: use inertia-dominant block in nominal operation, and apply additional validation under severe incidence conditions.

## Interpretation

This real case shows why [[Re]] is a model-architecture tool rather than a final force output. It organizes decisions: which block to start from, where transition risk appears, and how to document validity limits.

The transferable lesson is that evaluating [[Re]] across the full operating band usually improves model quality more than refining decimal precision at one nominal point.
