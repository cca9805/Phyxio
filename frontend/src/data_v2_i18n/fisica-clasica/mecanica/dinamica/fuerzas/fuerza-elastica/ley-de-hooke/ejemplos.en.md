# Exam-type example

## Problem statement

A vertical ideal spring supports a point mass. Given [[m]] = 1.80 kg, [[k]] = 120 N/m, and [[g]] = 9.81 m/s^2, the system is first at static rest and then displaced by 1.0 cm downward from equilibrium. Determine:

1. The equilibrium extension [[x_eq]].
2. Whether restoring behavior is satisfied for the incremental displacement.
3. The signed elastic force [[Fel]], its magnitude [[Fm]], and the elastic energy [[Uel]] associated with equilibrium deformation.
4. Whether results remain compatible with a realistic linear operating interval.

## Data

- [[m]] = 1.80 kg
- [[k]] = 120 N/m
- [[g]] = 9.81 m/s^2
- Incremental displacement around equilibrium: [[x]] = +0.010 m, with positive axis downward
- Assumption: elastic linear regime, negligible hysteresis in this operation window

## System definition

Single-mass, single-spring 1D vertical system. Origin is set at the spring natural length and positive axis points downward. Under this convention, weight terms are positive and the spring reaction should oppose deformation.

This definition matters because this leaf is about a local constitutive relation, not about complete spring networks. Keeping this boundary explicit prevents topic mixing with system-level leaves.

## Physical model

The solution uses the five core relations of the leaf:

{{f:hooke_1d}}

{{f:hooke_modulo}}

{{f:equilibrio_vertical_muelle}}

{{f:energia_potencial_elastica}}

{{f:criterio_restaurador}}

Together, they cover direction, magnitude, static balance, energy storage, and restoring-consistency logic.

## Model justification

Linear Hooke behavior is justified because expected deformation remains moderate and no irreversible strain is assumed. The problem explicitly asks for equilibrium and local incremental response, which is exactly the scope of a constitutive spring law.

If computed [[x_eq]] were outside the experimentally validated linear segment, the correct interpretation would be model escalation or component replacement, not blind trust in the algebraic output.

## Symbolic solution

For static equilibrium:

{{f:equilibrio_vertical_muelle}}

For signed elastic force around the declared axis:

{{f:hooke_1d}}

For scalar force level:

{{f:hooke_modulo}}

For stored energy at a given deformation:

{{f:energia_potencial_elastica}}

For restoring-coherence check:

{{f:criterio_restaurador}}

Each relation answers a different physical question, so all are required for a complete interpretation.

## Numerical substitution

Equilibrium extension:

[[x_eq]] = ([[m]]*[[g]])/[[k]] = (1.80*9.81)/120 = 0.14715 m

Incremental signed force for [[x]] = +0.010 m:

[[Fel]] = -[[k]]*[[x]] = -120*0.010 = -1.20 N

Force magnitude:

[[Fm]] = [[k]]*|[[x]]| = 1.20 N

Elastic energy at equilibrium deformation:

[[Uel]] = (1/2)*[[k]]*[[x_eq]]^2 = 0.5*120*(0.14715)^2 = 1.30 J approximately

Restoring consistency:

[[Fel]]*[[x]] = (-1.20)*(+0.010) = -0.012 < 0

The restoring criterion is satisfied under the declared convention.

## Dimensional validation

1. [[x_eq]] units: kg*(m/s^2)/(N/m) = m.
2. [[Fel]] units: stiffness units multiplied by length units give force units, which is consistent.
3. [[Uel]] units: stiffness units multiplied by squared length give energy units, which is consistent.

Beyond dimensions, order-of-magnitude checks are also consistent. A 14.7 cm extension for this load and stiffness is plausible and not extreme by itself.

## Physical interpretation

The equilibrium extension is significant but realistic. It suggests that linearity should be confirmed experimentally in the target hardware, since not every real spring preserves constant [[k]] up to this displacement.

The incremental force is correctly restoring, and the scalar force level is coherent with the signed expression. The energy level [[Uel]] indicates that moderate parameter changes can noticeably increase stored energy, which has implications for safety margins and fatigue planning.

The practical conclusion is explicit: if the characterized linear interval is shorter than [[x_eq]], upgrade the spring selection or move to a nonlinear constitutive model.

# Real-world example

## Context

A school laboratory is calibrating a spring dynamometer for repeated student use. The target spring has nominal [[k]] = 300 N/m, and intended loads correspond to masses between 0.1 and 1.0 kg. The team must define an operational range that remains valid, not only a printed scale.

## Physical estimation

For a 0.5 kg reference mass, gravitational load is [[m]]*[[g]] = 4.905 N. If linear behavior is assumed, equilibrium deformation is:

[[x_eq]] = ([[m]]*[[g]])/[[k]] = 4.905/300 = 0.01635 m

For 1.0 kg, the estimate is [[x_eq]] approximately 0.0327 m. Both values are small enough for typical educational instruments. If manufacturer characterization reports linearity up to 0.040 m, this operating range is defensible. The associated [[Uel]] can be tracked to estimate cycle stress and long-term drift risk.

## Interpretation

This application shows the operational value of the leaf. Hooke's law is not merely a textbook equation; it is a calibration framework when assumptions, limits, and sign conventions are explicit.

A robust lab protocol therefore reports: measured [[k]], allowed deformation interval, consistency between signed force [[Fel]] and scalar level [[Fm]], and escalation criteria if linearity degrades. With this discipline, a simple spring becomes a reliable measurement device.

This also improves maintenance planning: periodic recalibration can detect drift in [[k]] before it degrades classroom measurements. In that sense, the model is not only for solving one exercise, but for managing the full lifecycle of a measuring instrument.
