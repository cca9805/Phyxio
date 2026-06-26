# Exam-type example

## Problem statement
An ideal Atwood machine is configured with known masses [[m1]] and [[m2]] linked by an inextensible rope over a low-friction pulley. The task is to determine the shared dynamic response and the internal coupling force, while justifying each modeling decision. The solution must include a symmetry-limit check and a brief discussion of what changes when non-negligible losses appear.

## Data
Case data include masses measured in one consistent unit system, a declared local value of [[g]], motion records from timing and position marks, and visual confirmation that rope tension is preserved across the trajectory. Pulley condition is documented before and after the run to support assumption traceability.

## System definition
The system is defined as two point masses constrained to vertical motion. One consistent axis convention is selected based on expected dominant direction. The rope is assumed taut with negligible deformation. Gravity [[g]] is treated as uniform over the analyzed interval. Lateral oscillations and relevant pulley inertia are excluded at this approximation level. This definition supports a one-effective-degree-of-freedom treatment with internal variables emerging from coupled closure.

## Physical model
The physical model uses one Newton equation per mass plus one constraint condition enforcing motion compatibility. Kinematic restriction imposes equal acceleration magnitude across both branches. Internal transmitted force appears as a closure variable rather than an independent input. The model captures ideal coupling mechanics with distributed causality between branches.

## Model justification
Justification relies on scale and setup quality: light rope, well-maintained pulley, moderate speeds, and clean trajectories. Under these conditions, second-order effects can be neglected without losing the dominant causal mechanism. The educational goal is to interpret shared constrained dynamics, not to fit micro-loss effects. Therefore, the ideal model is appropriate for both calculation and interpretation. If systematic bias appears against data, a model extension can be introduced afterward.

## Symbolic solution
One dynamic equation is written for each mass using the same motion response required by the constraint. Combining equations eliminates internal force and yields the shared response expression in terms of [[m1]], [[m2]], and [[g]]. Substituting that result into one local equation gives the internal coupling force.

{{f:a_comun}}

{{f:T}}

The symbolic interpretation is structural: mass imbalance drives response tendency, while total mass modulates inertia. The second relation confirms that internal force depends on both masses simultaneously.

## Numerical substitution
Numerical substitution uses consistent mass units and a justified local value of [[g]]. Scenario parameters are inserted into the shared-response relation, then into the internal-force relation. The report should include sign according to the initial convention, realistic significant figures, and one short sensitivity comment. That comment should explain how a small change in mass contrast would affect outcome tendency. This prevents purely procedural reporting.

## Dimensional validation
Dimensional validation requires acceleration units for the first relation and force units for the second. A symmetry limit check is mandatory: equal masses imply zero shared response in the ideal model. A direction check is also required: swapping relative mass order must invert predicted movement direction under the same axis convention. If one check fails, setup logic must be reviewed before accepting the result.

## Physical interpretation
From a physical perspective, the dominant mechanism is compatibility enforcement across both branches, not independent one-body forcing. As relative imbalance increases, shared response intensity increases; as symmetry is approached, response weakens and residual losses become comparatively relevant. This interpretation allows qualitative anticipation before symbolic work and then uses symbolic work to quantify a causally grounded trend. In practice, this step is what turns a solved exercise into a reusable modeling argument.

The same interpretation can be used as a communication template in lab reports: state driver, state coupling mechanism, state observed tendency, and state model-limit caveat. This simple structure improves consistency across student teams.

# Real-world example

## Context
In a university teaching bench, an instructor team needs to choose mass combinations that are safe, measurable, and didactically clear. The objective is not maximum speed but repeatable motion with enough time resolution for students to analyze behavior. Time and position sensors are available, and pulley condition is documented to assess whether ideal assumptions remain acceptable.

## Physical estimation
Physical estimation starts with order-of-magnitude reasoning. Near-equal masses should produce slow response and higher sensitivity to residual friction. Larger contrast should increase response and require larger safety margins near travel limits. Based on this pre-analysis, the team selects [[m1]] and [[m2]] combinations that yield measurable intervals. Predictions are then compared with repeated measurements to detect systematic drift. If mismatch remains small and non-systematic, ideal assumptions are acceptable for the intended educational scope.

## Interpretation
Final interpretation must explain mechanism, not only final numbers. In this setup, the constraint transforms load contrast into shared response and internal coupling force. Prediction-measurement comparison then supports a model decision: keep ideal closure or move to an extended model. This closes the full learning cycle: define system, model mechanism, estimate behavior, validate consistency, and state validity limits.

