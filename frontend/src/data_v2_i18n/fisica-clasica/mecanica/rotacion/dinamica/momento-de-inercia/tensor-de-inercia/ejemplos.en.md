# Exam-type example

## Problem statement

A rigid planar lamina rotates about a fixed origin, but the chosen reference axes are not principal axes. Compute [[momento_angular]] from [[tensor_inercia]], interpret the role of [[producto_inercia]], and estimate [[E]] on the largest principal axis.

## Data

- Dominant diagonal component of [[tensor_inercia]] in the plane: 4.0 kg m^2.
- Second diagonal component in the plane: 2.0 kg m^2.
- [[producto_inercia]] in the selected frame: 0.5 kg m^2.
- Components of [[omega]] in the plane: 3.0 rad/s and 1.0 rad/s.
- The system is rigid and the origin coincides with the fixed rotation point.
- The goal is not only numerical: determine whether [[momento_angular]] aligns with [[omega]].

## System definition

The system is the full lamina, not a single particle. The origin and axes are fixed in a Cartesian frame that is not yet principal. This matters because the leaf is not only about one scalar inertia value, but about how [[tensor_inercia]] transforms [[omega]] into [[momento_angular]].

## Physical model

The angular relation is modeled with:

{{f:rel_l_omega}}

For principal-axis energy reading we use:

{{f:energia_cinetica_tensores}}

This model is appropriate because it captures cross-axis coupling when [[producto_inercia]] is nonzero.

## Model justification

The model is valid because the lamina is rigid, the origin remains fixed, and all components are expressed in the same frame. A scalar approximation is not suitable at the start because it would hide the effect of [[producto_inercia]], which is the key mechanism here.

Only after identifying principal axes can we use a decoupled interpretation and apply the energy expression directly.

This justification is physically explicit: the question asks about directional behavior, not only about a single magnitude. Therefore a matrix description is required from the beginning. If we collapse the system too early into one scalar inertia, we erase the very coupling that explains why [[momento_angular]] can tilt away from [[omega]].

It is also important that all inputs refer to the same origin and axis convention. A mixed convention can produce apparent inconsistencies that are not physical, only coordinate mistakes.

## Symbolic solution

The governing relation is:

{{f:rel_l_omega}}

If [[producto_inercia]] is zero, cross coupling is largely suppressed. If [[producto_inercia]] is nonzero, one component of [[omega]] contributes to another component of [[momento_angular]].

Then [[tensor_inercia]] is diagonalized to find principal axes. In that frame, energy [[E]] is read more cleanly.

The symbolic point is not only computational convenience. It provides a decision criterion: if coupling terms are comparable to diagonal effects, directional interpretation in the original frame is mandatory before any reduction. If coupling terms are very small, a principal-axis approximation may be acceptable for first-pass control estimates.

## Numerical substitution

Evaluating the angular relation with the provided values shows that [[momento_angular]] is not parallel to [[omega]]. This confirms that [[producto_inercia]] is operationally relevant.

After transforming to principal axes, coupling is reduced and [[E]] can be estimated with the principal-axis energy expression. For an angular speed of 2.0 rad/s and a largest principal moment of 4.2 kg m^2, [[E]] is of order 8.4 J.

The exact value may vary with rounding, but the physical conclusion remains stable: principal-axis representation clarifies both directional and energetic reading.

A practical extension is to compare two scenarios with the same [[omega]] magnitude but different orientation. In one orientation, cross-coupling may remain modest; in another, coupling may be stronger and produce a more visible tilt in [[momento_angular]]. This shows that direction selection is operationally relevant, not a theoretical curiosity.

## Dimensional validation

In the angular relation, [[tensor_inercia]] is in kg m^2 and [[omega]] in rad/s, so [[momento_angular]] is in kg m^2/s. In the energy relation, [[E]] is in joule. Both are dimensionally consistent with rotational mechanics.

Symmetry of [[tensor_inercia]] is also an important structural consistency check.

## Physical interpretation

The central physical reading is that [[producto_inercia]] changes not only a magnitude but a direction. If the body were already expressed in principal axes, [[momento_angular]] would tend to align with [[omega]]. Here it does not, and that misalignment is the signature of cross-axis coupling.

This also shows why diagonalization is not an algebraic trick. Principal axes reveal natural response directions of the same mass distribution. In that frame, energetic reading through [[E]] is cleaner and easier to compare.

In learning terms, the tensor is not used to make calculations harder; it is used to keep physically relevant effects visible.

The key qualitative message is that coupling changes what a control command means. A command intended to spin around one geometric axis may inject momentum components in another axis when [[producto_inercia]] is significant. This is why attitude-control tuning and structural layout cannot be designed independently in highly coupled bodies.

There is also a diagnostic reading. If measured behavior shows repeated directional drift while scalar calculations predict alignment, the mismatch is often a tensor-structure issue rather than sensor noise alone. In that situation, reviewing [[tensor_inercia]] and axis definition is usually more productive than only retuning gains.

# Real-world example

## Context

A small satellite with off-center instruments must be oriented by reaction wheels. The control team needs more than a scalar inertia size; it needs to know whether internal geometry introduces [[producto_inercia]] that makes [[momento_angular]] deviate from commanded [[omega]].

## Physical estimation

Before using a full model, the engineer estimates whether coupling matters. If the satellite has a principal moment of order 5 kg m^2 and [[producto_inercia]] of order 0.8 kg m^2, cross-axis coupling is not negligible. A ratio of that order is enough to create visible misalignment in fine maneuvers.

In that regime, the dominant variable is no longer a single inertia scalar, but the full structure of [[tensor_inercia]].

An additional estimate can be made by comparing expected and observed pointing error per maneuver. If orientation error grows systematically with wheel commands even after actuator calibration, the residual often scales with coupling strength associated with [[producto_inercia]]. This gives an operational indicator that model complexity must be increased.

## Interpretation

The control decision changes accordingly: if [[producto_inercia]] is small, a nearly diagonal model may be sufficient; if it is not, coupling terms must be included and equipment layout may need redesign toward principal axes.

This is the applied reading of the leaf: [[tensor_inercia]] turns internal geometry into an observable dynamical consequence on [[momento_angular]], [[omega]], and [[E]].

In engineering workflow, this interpretation supports two concrete actions. First, update the control model to include coupling terms when needed. Second, evaluate mass-layout changes that reduce off-diagonal terms without compromising mission constraints.

The final takeaway is that tensor-based reasoning links geometry decisions, control behavior, and energetic cost in one coherent framework. That integration is precisely why the inertia tensor is indispensable in real three-dimensional rotational systems.