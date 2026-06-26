# Exam-type example

## Problem statement

A surveillance drone travels along a nominally straight segment in Earth-rotating coordinates. The guidance loop needs a first-order Coriolis estimate to decide whether preventive lateral compensation must be activated.

The task is to estimate [[a_cor]], convert it into [[F_cor]] for the full vehicle mass, estimate final lateral drift [[y]], and justify if the effect is operationally relevant for route tolerance.

## Data

- Known local frame [[omega]].
- Relative speed [[v_rel]]: 80 m/s.
- Effective geometry [[alpha]]: 90 degrees.
- Total mass [[m]]: 12 kg.
- Segment time [[t]]: 60 s.
- Lateral tolerance: 8 m.

## System definition

System: drone represented as a point mass for first-order lateral drift estimation in a rotating frame.

Primary inputs: [[omega]], [[v_rel]], [[alpha]], [[t]], [[m]].

Outputs of interest: [[a_cor]], [[F_cor]], [[y]].

## Physical model

First-order Coriolis application model for trajectory deviation.

Core relations used:

{{f:aceleracion_coriolis_aplicada}}

{{f:fuerza_desde_aceleracion}}

{{f:desvio_lateral_aproximado}}

{{f:criterio_relevancia_conceptual}}

## Model justification

The segment is short enough for first-pass operational estimation, and the decision goal is control compensation, not full aeroelastic simulation. Therefore, the simplified model is justified for initial action.

Validity requires that [[v_rel]] and [[alpha]] remain reasonably stable over the interval. If aggressive maneuvers, dominant crosswind forcing, or rapid orientation shifts appear, an extended model is required.

## Symbolic solution

Step 1: estimate [[a_cor]] with the Coriolis acceleration relation.

{{f:aceleracion_coriolis_aplicada}}

Step 2: convert acceleration into equivalent force scale.

{{f:fuerza_desde_aceleracion}}

Step 3: estimate accumulated drift over [[t]].

{{f:desvio_lateral_aproximado}}

Step 4: apply relevance criterion to decide compensation.

{{f:criterio_relevancia_conceptual}}

## Numerical substitution

With [[alpha]] near maximum-contribution geometry, the estimated [[a_cor]] is on the order of 0.012 m/s^2 for the given segment.

With [[m]] = 12 kg, equivalent [[F_cor]] is on the order of 0.14 N.

With [[t]] = 60 s, accumulated [[y]] is on the order of 22 m.

## Dimensional validation

- [[a_cor]] must remain in m/s^2.
- [[F_cor]] must remain in N after multiplying by [[m]].
- [[y]] must remain in m after time accumulation over [[t]].

Dimensional coherence is preserved through all steps.

## Physical interpretation

Even though [[a_cor]] is small instantaneously, accumulation during [[t]] yields [[y]] well above the 8 m route tolerance. The effect is therefore operationally decisive, not decorative.

The applied reading is direct: without compensation, trajectory corridor compliance is unlikely. The guidance loop must include systematic lateral correction during this segment.

This is not only a numerical threshold exercise. Physically, the result means that a persistent lateral acceleration component is continuously bending the trajectory in a preferred direction under rotating-frame kinematics. The accumulation mechanism is the key: a small local response can become mission-relevant once integrated over enough time.

There is also a control-engineering implication. Late correction usually requires stronger control action and may push actuators closer to saturation. Early compensation distributes effort over time, keeps control margins healthier, and reduces endpoint uncertainty.

From a verification standpoint, the estimate should be read together with residual analysis. If post-compensation residual drift remains directional and repeatable, the Coriolis estimate is not necessarily wrong; instead, additional contributors such as crosswind forcing, sensor bias, or geometry mismatch likely need to be modeled.

Therefore, the interpretation closes with an action policy: compensate early, monitor residual directionality, and escalate model fidelity only if residual mismatch repeatedly crosses tolerance.

# Real-world example

## Context

In operational oceanography, a surface drifter travels with moderate [[v_rel]] over multi-hour windows. Analysts need to separate how much lateral offset is explained by Coriolis versus local forcing.

## Physical estimation

Over multi-hour windows, moderate [[a_cor]] can accumulate into [[y]] of tens to hundreds of meters, which is often comparable to assimilation-grid resolution.

Under stable [[alpha]] and persistent [[v_rel]], the Coriolis contribution can explain a meaningful share of observed lateral bias. This estimation is therefore not merely academic; it affects model correction strategy.

## Interpretation

The application supports two concrete decisions:

1. Include Coriolis compensation in baseline prediction.
2. Escalate to extended environmental coupling only when residual mismatch remains above tolerance.

In this case, relevance is clear enough to keep Coriolis in the baseline operational model and treat external terms as second-stage refinement.

A robust operational workflow summarizes three outputs after each analysis cycle: baseline Coriolis estimate, observed residual, and model-action decision for the next cycle. This simple structure turns isolated calculations into reproducible engineering practice.

When this workflow is repeated over many missions, it supports calibration learning. Teams can identify which environments are Coriolis-dominant, which are forcing-dominant, and where mixed-regime strategies are required.

Another practical extension is scenario stress testing. Analysts can run the same calculation chain for conservative, nominal, and aggressive assumptions on [[v_rel]], [[alpha]], and [[t]]. If relevance remains above threshold across all scenarios, compensation policy can be treated as robust. If relevance switches across scenarios, adaptive policies are preferable to fixed corrections.

This final step strengthens decision quality because it connects model output to uncertainty-aware action. Instead of asking whether one numerical result is "right," the team evaluates whether the operational decision remains valid under realistic input variation.
