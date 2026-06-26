# Physical models: frictionless incline

## Ideal model

The baseline model describes a block of mass [[m]] moving on a rigid incline of angle [[theta]] under uniform gravity [[g]], without friction and without additional driving forces. Dynamics follows directly from weight decomposition into [[P_par]] and [[P_perp]], with normal reaction [[N]].

Operationally, this model answers three engineering-relevant questions at very low cost: what drives the along-plane acceleration [[a]], how long traversal takes over [[L]] ([[t]]), and what terminal speed [[v_f]] is expected. This is why the model remains central in both education and early-stage design screening.

## Hypotheses

- Continuous block-plane contact.
- Negligible friction and secondary dissipation.
- Fixed geometry and piecewise-constant [[theta]].
- One-dimensional motion along the plane axis.

Additional implicit assumptions:

- [[g]] is treated as constant within the experiment scale.
- No external vibration or actuator input is present.
- Rotational dynamics and shape changes are not first-order effects.

## Quantitative validity domain

Model reliability is strong when:

- 0 <= [[theta]] <= 90 degrees.
- 0 <= [[a]] <= [[g]].
- [[N]] = [[P_perp]] and [[N]] >= 0.
- Relative prediction-measurement error <= 10 percent in repeated equivalent runs.
- Speed range where aerodynamic drag is not first-order.

Domain reading: these inequalities are not decorative. They define the regime where [[P_par]] remains dominant. Once an ignored term becomes comparable, prediction quality drops sharply.

## Model failure signals

- Measured deceleration appears with unchanged geometry.
- Measured [[v_f]] is systematically below ideal prediction.
- Measured travel time [[t]] drifts upward under nominally identical conditions.
- Normal-axis balance suggests unmodeled forces.

Extra methodological signal: if independent groups obtain similarly biased outcomes on equivalent setups, the issue is typically systematic model omission rather than arithmetic noise.

## Extended or alternative model

When those signals appear, the next model should include dissipation:

- Transition to incline with static and kinetic friction.
- Add drag or deformation losses when relevant.
- Allow parameter drift with surface state or temperature.

Explicit transition rule: if relative error remains above 10 percent for three consecutive equivalent measurements, or if measured [[v_f]] and [[t]] become inconsistent with ideal [[a]], switch from frictionless to frictional modeling.

This transition rule turns vague intuition into a reproducible decision protocol. Pedagogically, it teaches that model switching is not failure, but disciplined evidence-based practice.

## Operational comparison

Ideal model:

- Maximum causal clarity.
- Minimal computational cost.
- Best for learning and first-pass estimation.

Extended model:

- Higher experimental fidelity.
- More parameters and calibration effort.
- Required for detailed engineering validation.

The right criterion is not "most complex model", but "simplest model that still explains data robustly."

In short, the ideal model is excellent for causal clarity and fast estimates. The extended model is necessary when high-fidelity decisions are required. Professional-level reasoning requires knowing when and why to move between them.