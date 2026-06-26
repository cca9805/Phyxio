# Physical Models for Torque Definition

## Ideal model
The ideal model assumes rigid body behavior, fixed axis, no dissipative losses, and a force with known direction. Under these assumptions, torque is computed directly with

{{f:torque_por_angulo}}

 or

{{f:torque_por_angulo}}

. The model is useful to isolate cause-effect relations and to build a clean baseline before adding complexity.

Its main strength is interpretability. Every term maps to a measurable quantity and sensitivity is explicit. If F doubles while b is constant, [[tau]] doubles. If [[theta]] approaches zero, torque approaches zero. This transparency is essential for education, quick checks, and early-stage engineering sizing where a stable reference model is needed.

## Hypotheses
The key hypotheses of the ideal torque definition model are:
1. Rigid body: no appreciable deformation occurs during force application.
2. Fixed, well-defined axis: the pivot point does not translate or rotate on its own.
3. Point force: the action is applied at a specific point with known, constant direction.
4. Planar system or reducible to axial component: the scalar formulation of [[tau]] is sufficient.
5. No internal dissipation: bearing friction and energy losses are negligible at first pass.

When any of these hypotheses breaks down, the ideal model may still serve as a first approximation, but predictions should be compared with the extended model or with measurements.

## Quantitative validity domain
A practical threshold for this leaf is to use the ideal model when estimated relative error due to losses and clearances is below 10 percent, i.e.

{{f:torque_por_angulo}}

. Between 10 and 25 percent, ideal predictions can still support preliminary decisions but must be flagged as approximate. Beyond 25 percent, relying only on the ideal model is not adequate for design or safety analysis.

Another useful metric is the ratio |tau_{applied}|/|tau_{resistant}|. When this ratio is near 1, small data variations can flip the diagnosis between balance and motion onset. In that range, redundancy and uncertainty reporting are required. When the ratio is above 2, conclusions are typically more robust to moderate noise.

## Model failure signals
Clear failure signals include unit inconsistencies, unrealistic magnitude scale, and persistent mismatch between prediction and measurement across repeated tests. Another strong signal is excessive sensitivity: tiny changes in [[theta]] or b causing unrealistically large torque variation, suggesting geometry definition is inconsistent with actual setup.

Sign inconsistency is also critical. If computed torque sign repeatedly contradicts observed rotation sense, axis convention is likely mixed across steps. A further failure signal appears when ad hoc corrections are needed in every case to match observations. At that point, the model has lost predictive structure and must be revised explicitly.

## Extended or alternative model
When to move to the extended or alternative model: when the failure signals above appear systematically, when estimated error exceeds 10 percent, or when the system has moving parts with significant friction, relevant geometric tolerances, or non-stationary loads.

The extended model includes effects usually present in real systems: bearing friction, compliance, geometric tolerance, mounting offsets, and time-varying loads. In this framework, delivered torque can differ from applied torque. A motor may generate high input torque, yet part of it is lost before reaching the useful output axis.

Operational constraints are also represented: material limits, control saturation, thermal behavior, and vibration amplification. Instead of a single nominal value, torque is often treated as an interval with uncertainty and validity conditions. This does not invalidate the ideal model; it adds realism needed for design acceptance and risk-aware decisions.

## Operational comparison
Alternative approaches include multibody simulation, where distributed forces and contacts generate torque as an emergent output; energy-based methods using angular work and power; and control-oriented state-space models where torque acts as input, disturbance, or constrained variable.

These alternatives do not replace direct torque computation. Ideal and extended torque models remain the conceptual core used to interpret advanced tools and to validate outputs. For teaching and fast diagnostics, direct torque modeling offers superior traceability. For certification, fatigue analysis, and transient performance, alternative models add precision, provided they remain consistent with the same rotational mechanics foundation.
