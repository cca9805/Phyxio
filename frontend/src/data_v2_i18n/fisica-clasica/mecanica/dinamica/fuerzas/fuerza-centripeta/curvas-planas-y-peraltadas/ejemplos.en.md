# Exam-type example

## Problem statement

A passenger car moves along a flat circular curve with radius [[r]]. The safety team must determine whether tire-road grip can provide the required inward force without sustained skid at speed [[v]]. The known quantities are vehicle mass [[m]], curve radius [[r]], operating speed [[v]], gravitational acceleration [[g]], and a representative static-friction coefficient [[mu]].

The task is not only computational. The student must explain how the radial resultant [[Frad]] is generated in a flat curve and how that mechanism changes if the same curve is redesigned as a banked curve. In other words, the analysis compares two engineering strategies for satisfying the same curvature demand.

## Data

- [[m]] = 1400 kg
- [[r]] = 85 m
- [[v]] = 18 m/s
- [[g]] = 9.8 m/s^2
- [[mu]] = 0.35

An additional design variant is included: for the same target speed [[v]], estimate the ideal banking angle [[th]] and discuss how the role of static friction [[fs]] changes under nominal operation.

## System definition

The vehicle is modeled as a particle following a circular path with constant [[r]]. In the flat-curve case, the radial resultant [[Frad]] is mainly supplied by lateral static friction [[fs]]. In the banked-curve case, geometry lets the normal force [[Nn]] contribute a radial component, reducing exclusive dependence on [[fs]]. In both cases, centripetal acceleration [[ac]] represents the kinematic curvature demand.

The radial axis is defined positive toward the center of curvature, while the vertical axis handles weight-normal balance. This convention prevents a common conceptual error: treating centripetal force as an extra interaction instead of the resultant of real forces projected along the radial direction.

## Physical model

The four core leaf relations used in this solution are:

{{f:radial_base}}

{{f:adherencia_maxima}}

{{f:curva_plana_vmax}}

{{f:peralte_ideal}}

These equations form a coherent chain. The first defines total radial demand. The second defines contact-force capacity through friction. The third gives the compact flat-curve speed limit. The fourth sets the banking angle that can satisfy the same speed-radius pair with reduced friction dependence.

## Model justification

This model is suitable because the scenario involves quasi-constant radius, non-relativistic speed, and a grip regime where static friction is still a valid approximation. There is no dominant severe bumping, no strong transient braking in the analyzed segment, and no evidence of sustained sliding.

Separating flat and banked cases is physically meaningful, not pedagogical decoration. In real infrastructure, these are alternative design choices. Flat curves rely mostly on [[mu]] and surface condition; banked curves introduce geometric assistance through [[th]] and [[Nn]], improving robustness at the design speed.

## Symbolic solution

For the flat curve, compute radial demand first and derive [[Frad]] and [[ac]]. Then compare that demand with available friction capacity using the static-friction limit and the compact maximum-speed expression.

For the banked variant, keep [[v]] and [[r]] fixed and solve for [[th]] that satisfies the ideal non-slip design condition. This step shows that banking does not remove radial dynamics. It changes the force decomposition used to meet the same curvature requirement.

The symbolic workflow is therefore: radial demand, flat-grip feasibility, and banking design for the same operating target.

## Numerical substitution

With the given values, radial demand is in the multi-kilonewton range, and [[ac]] is about 3.8 m/s^2. That level is realistic for a fast urban/interchange maneuver but not an extreme race-track condition. Under [[mu]] = 0.35, the flat-curve margin exists but is limited, so moderate grip degradation in rain can push the case close to the skid threshold.

The flat-curve maximum-speed estimate is close to operating speed, confirming sensitivity to surface condition. In the banked redesign, the resulting [[th]] lies in a plausible roadway range and shifts a relevant fraction of [[Frad]] support from friction [[fs]] to the radial component of [[Nn]].

From an engineering perspective, the output is actionable: in flat curves, maintenance of [[mu]] is critical; with banking, geometric design provides an additional safety buffer at the target speed.

## Dimensional validation

The radial equation yields force units when evaluating [[m]] times [[v]] squared over [[r]]. The flat-curve speed formula returns velocity units because [[mu]] is dimensionless and [[g]][[r]] has squared-speed units. The banking relation is dimensionless through tangent, consistent with [[th]] as an angle.

This check catches frequent mistakes: using diameter instead of radius, treating degrees as a direct trigonometric ratio, or assigning units to [[mu]]. If units do not close, safety interpretation is unreliable regardless of algebraic appearance.

## Physical interpretation

The same curvature demand can be met by different force architectures. On flat curves, the dominant mechanism is lateral adherence. On banked curves, roadway geometry allows [[Nn]] to carry part of the radial task, decreasing exclusive reliance on [[fs]].

The speed sensitivity is also explicit: radial demand scales strongly with [[v]], so moderate speed increases can sharply reduce operational margin. This is why small speed differences may create large risk differences in cornering.

The key conceptual result is practical: equations support design decisions. Teams can choose to manage [[mu]] operationally, redesign [[th]] and [[r]] geometrically, or combine both strategies for robust safety.

# Real-world example

## Context

A highway operator reports repeated incidents in a connector ramp linking a mainline lane to a downhill exit. The technical team has measured speed distribution [[v]], effective radius [[r]], and seasonal grip variation reflected in [[mu]]. Management is debating two interventions: stricter speed enforcement or reconstruction with additional banking.

Using the leaf variables, engineers compare radial demand [[Frad]], acceleration [[ac]], and robustness against grip deterioration. This framework replaces anecdotal arguments with quantitative criteria for infrastructure decisions.

## Physical estimation

The first step is to compute radial demand across the observed [[v]] range. Then maximum safe flat-curve speed is estimated for dry and wet [[mu]] values. The comparison reveals that in wet conditions the current flat geometry operates near the friction limit, so a small drop in [[mu]] can require [[fs]] above feasible contact capacity.

Next, the team evaluates an ideal banking angle [[th]] for a realistic design speed. The estimate indicates that moderate banking can transfer part of radial support to the normal-force geometry, improving wet-condition margin without forcing extreme speed reduction.

The estimate also includes a policy warning: banking is not a universal cure. If real [[v]] exceeds design assumptions, dependence on [[fs]] rises again. Speed management and geometry must therefore be treated as coupled controls.

## Interpretation

This applied case shows why the leaf matters for infrastructure practice. In causal terms, corner safety depends on how [[Frad]] is supplied under uncertain [[mu]]. If support is almost entirely friction-based, the system is fragile under rain and contamination. If design includes adequate [[th]] and [[r]], the same traffic operation becomes more resilient.

The engineering conclusion is not one-dimensional. A robust strategy combines [[v]] governance, surface maintenance, and coherent banking design. Once [[ac]], [[Frad]], [[fs]], and [[Nn]] are quantified together, decisions become physically auditable rather than intuition-driven.
