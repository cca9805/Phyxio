const e=`\uFEFF# Physical models: Inertial frames

## Ideal model

The ideal model in this leaf assumes reference frames with no self-acceleration and no rotation. Under that condition, motion can be explained using real forces only, without fictitious-force terms.

The central quantity is [[F_neta]], linked to [[a]] through [[m]]. Velocities measured in two inertial observers, [[v_obs1]] and [[v_obs2]], differ by [[V_rel]], while acceleration remains invariant and can be tracked with [[a_obs2]]. The shared time coordinate is [[t]] in classical mechanics.

## Hypotheses

1. Reference frame is non-accelerating.
2. Frame rotation is negligible in the analyzed interval.
3. Classical regime applies.
4. Mass [[m]] is constant.
5. Relative frame velocity [[V_rel]] is approximately constant.

If any hypothesis fails, inertial interpretation must be reconsidered.

## Quantitative validity domain

Practical checks:

1. First-law criterion: if [[F_neta]] is near zero, measured [[a]] should be near zero within uncertainty.
2. Newton-law consistency: residual = abs([[F_neta]] - [[m]]*[[a]]) <= 0.10 N in basic lab conditions.
3. Galilean velocity consistency: drift of [[V_rel]] <= 0.05 m/s during the selected [[t]] window.
4. Acceleration invariance: abs([[a]] - [[a_obs2]]) <= 0.05 m/s^2.

These thresholds are context-dependent, but they provide a clear operational frame for deciding whether inertial assumptions are still acceptable.

## Model failure signals

1. Persistent nonzero [[a]] with near-zero [[F_neta]] and no external explanation.
2. Inconsistent relation between [[v_obs1]], [[v_obs2]], and [[V_rel]].
3. Repeated mismatch between [[a]] and [[a_obs2]].
4. Interpretation changes drastically after tiny preprocessing changes.

When these signs appear, model confidence must be reduced.

## Extended or alternative model

If the observer frame accelerates or rotates, non-inertial formulation is required and apparent-force terms must be included. If speed scales move toward relativistic conditions, Galilean transformations must be replaced.

## Operational comparison

Ideal inertial model:

- Fast, interpretable, and robust in introductory settings.
- Good for clear causal mapping between force and acceleration.
- Low computational and conceptual overhead.

Extended model:

- Required when frame assumptions are violated.
- Better for realistic moving-platform scenarios.
- Higher modeling, calibration, and interpretation cost.

Model transition should be evidence-driven: change model when quantitative checks consistently indicate mismatch.

This criterion is especially useful in iterative experiments, where partial mismatches can appear temporarily because of measurement quality. The model should only be replaced when mismatch is persistent and physically interpretable.

Quantitative transition note:

A useful escalation trigger is error_relativo <= 10 percent for acceptable inertial approximation, and error_relativo > 10 percent sustained across windows as a signal to move toward a non-inertial or extended model.
`;export{e as default};
