# Physical models in rotation with friction

## Ideal model
The ideal model in this leaf treats rotational braking as dynamics with fixed axis, known effective inertia, and one dominant dissipative mechanism. Its purpose is not to describe every contact detail, but to provide an interpretable structure for reading how [[omega]], [[alpha]], and [[K_rot]] evolve under braking torque. In this first pass, the system is viewed as a rigid rotor whose response is governed by the relation between torque, inertia, and angular decay.

This ideal model is useful in exam problems and preliminary diagnostics because it quickly organizes the right questions. If braking looks nearly uniform, a nearly constant torque approximation may be sufficient. If decay rate changes with speed, the same ideal framework already suggests checking a viscous term. The strength of the model is not absolute precision, but transparent identification of the dominant mechanism.

## Hypotheses
The minimum hypotheses must be explicit. The axis is fixed, the time window is short, the inertia I is treated as constant, and there is no external motor input during the analyzed interval. A consistent sign convention is also required: if [[omega]] is positive, dissipative torque must oppose rotation in passive braking.

The model also assumes that contact can be summarized locally by an effective law. In dry regime, that law is approximated by torque_coulomb. In viscous regime, the speed dependence is summarized by torque_viscoso. If geometry changes, if flexible coupling becomes important, or if contact switches between states, these hypotheses are no longer strong enough.

## Quantitative validity domain
A practical quantitative criterion is to accept the local model when relative [[omega]] prediction error stays below 10 percent in the analyzed window. Between 10 and 20 percent, the model remains useful as a first approximation, but conclusions should include warnings. Above 20 percent, the dissipative mechanism or the data quality should be reconsidered.

Physical domain restrictions are equally important. I > 0, R > 0, [[mu_k]] >= 0, and [[b_rot]] >= 0 must hold. If identification produces a negative radius, a negative viscous coefficient, or an implausible [[mu_k]] for the material, the issue is not merely numerical. The model is misrepresenting the system.

## Model failure signals
An immediate failure signal is [[K_rot]] increasing during passive braking without external input. Another is an [[omega]] curve whose slope clearly changes in a way the local model cannot reproduce without forcing parameters. A third warning appears when [[tau_roz]] * [[omega]] becomes positive, because that implies the supposed dissipative torque is adding energy.

Failure can also appear as material incoherence. If the fit requires excessively high [[mu_k]] for a lubricated contact, or if [[b_rot]] matches high-speed behavior but fails near stop, the physical message is clear: the full interval does not belong to a single regime.

## Extended or alternative model
The extended model introduces an operational comparison between torque_coulomb, torque_viscoso, and a mixed model. Instead of forcing one mechanism, the analysis separates regimes or checks which law best explains the temporal shape of [[omega]]. With torque_coulomb, braking resembles nearly constant angular deceleration. With torque_viscoso, speed decay becomes progressive and decaimiento_exponencial is the natural reference law.

It is time to switch to the alternative model when [[omega]] slope changes with speed itself, when the semilog fit is only good over part of the record, or when energia_rotacional decreases with a curvature that the dry model cannot reproduce. That transition is essential because it marks the point where the learner stops reusing one recipe and starts distinguishing physical mechanisms.

## Operational comparison
In practice, the dry model is simpler and more robust when there is evidence of dominant contact with well-defined effective radius R and approximately stable [[mu_k]]. The viscous model is preferable when lubrication is relevant, when effective torque decreases as [[omega]] decreases, or when the data form a reasonable straight line in semilog scale. The mixed model demands richer data, but it is often the most realistic choice in industrial systems.

The comparison should not be decided only by fit error. It must also consider causal traceability, interpretability of parameters, and usefulness for action. A slightly more accurate but physically opaque model may be worse than a simpler one that remains clearly interpretable. That is the central operational criterion of this leaf.
