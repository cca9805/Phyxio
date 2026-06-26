# Physical Models for Torque Calculation

## Ideal model
The ideal model assumes rigid body behavior, fixed axis, no dissipative losses, and a force with known direction. Under these assumptions, torque is computed directly with

{{f:torque_brazo}}

 or

{{f:torque_por_angulo}}

. The model is useful to isolate cause-effect relations and to build a clean baseline before adding complexity.

Its main strength is interpretability. Every term maps to a measurable quantity and sensitivity is explicit. If [[F]] doubles while [[b]] is constant, [[tau]] doubles. If [[theta]] approaches zero, torque approaches zero. This transparency is essential for education, quick checks, and early-stage engineering sizing where a stable reference model is needed.

## Hypotheses
Five hypotheses support the ideal model of torque calculation:

1. **Rigid body**: the solid does not deform when force is applied, so distances [[r]] and [[b]] remain constant throughout the calculation.
2. **Fixed axis**: the rotation axis neither translates nor rotates during the analysis interval, allowing a unique origin to measure [[r]] and declare [[tau_z]].
3. **Known point force**: the force [[F]] acts at a defined point with stable direction and magnitude; components [[F_x]] and [[F_y]] are determinate during the calculation.
4. **Planar or reducible-to-planar geometry**: the problem can be represented in a plane with z axis normal to it, making the planar component formula sufficient.
5. **No dissipative losses at first pass**: bearing friction, hysteresis, and compliance are neglected in the base model and introduced only if discrepancy with data is significant.

## Quantitative validity domain
A practical threshold for this leaf is to use the ideal model when estimated relative error due to losses and clearances satisfies epsilon_rel < 0.10. Between 10 and 25 percent, ideal predictions can still support preliminary decisions but must be flagged as approximate. Beyond 25 percent, relying only on the ideal model is not adequate for design or safety analysis.

Another useful metric is the ratio |tau_applied|/|tau_resistant|. When this ratio is near 1, small data variations can flip the diagnosis between balance and motion onset. In that range, redundancy and uncertainty reporting are required. When the ratio is above 2, conclusions are typically more robust to moderate noise.

## Model failure signals
Clear failure signals include unit inconsistencies, unrealistic magnitude scale, and persistent mismatch between prediction and measurement across repeated tests. Another strong signal is excessive sensitivity: tiny changes in [[theta]] or [[b]] causing unrealistically large torque variation, suggesting geometry definition is inconsistent with actual setup.

Sign inconsistency is also critical. If computed torque sign repeatedly contradicts observed rotation sense, axis convention is likely mixed across steps. A further failure signal appears when ad hoc corrections are needed in every case to match observations. At that point, the model has lost predictive structure and must be revised explicitly.

## Extended or alternative model

**When to move to the extended or alternative model:** when relative error exceeds 10 percent, when model failure signals appear, or when the system operates near material limits or control saturation.

The extended model includes effects usually present in real systems: bearing friction, compliance, geometric tolerance, mounting offsets, and time-varying loads. In this framework, delivered torque can differ from applied torque. A motor may generate high input torque, yet part of it is lost before reaching the useful output axis.

Operational constraints are also represented: material limits, control saturation, thermal behavior, and vibration amplification. Instead of a single nominal value, torque is often treated as an interval with uncertainty and validity conditions. This does not invalidate the ideal model; it adds realism needed for design acceptance and risk-aware decisions.

## Operational comparison
Alternative approaches include multibody simulation, where distributed forces and contacts generate torque as an emergent output; energy-based methods using angular work and power; and control-oriented state-space models where torque acts as input, disturbance, or constrained variable.

These alternatives do not replace direct torque computation. Ideal and extended torque models remain the conceptual core used to interpret advanced tools and to validate outputs. For teaching and fast diagnostics, direct torque modeling offers superior traceability. For certification, fatigue analysis, and transient performance, alternative models add precision, provided they remain consistent with the same rotational mechanics foundation.