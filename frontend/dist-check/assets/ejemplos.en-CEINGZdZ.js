const n=`\uFEFF# Exam-type example

## Problem statement

Two skaters, A and B, are on a nearly frictionless horizontal track. Initially both are at rest. During a short push interval, A exerts an almost constant horizontal force on B. Analyze the action-reaction pair, verify component consistency, and connect reciprocal-force structure with different dynamic responses.

In a second phase, include a vertical interaction component to examine the normal reciprocal pair and prevent confusion between normal force and weight.

## Data

- Mass of skater A: [[mA]] = 50 kg.
- Mass of skater B: [[mB]] = 70 kg.
- Interaction interval: [[t]] = 0.40 s.
- x component of force of A on B: [[FAx]] = +120 N.
- y component of force of A on B (inclined phase): [[FAy]] = +35 N.
- Initial speed: [[v0]] = 0 m/s.
- Gravitational acceleration: [[g]] = 9.8 m/s^2.

The objective is not to solve every support force, but to identify and validate reciprocal pairing in each axis.

## System definition

System 1: body A.

System 2: body B.

Modeling rule: each body has its own free-body diagram. [[FAB]] appears in B's diagram, and [[FBA]] appears in A's diagram.

Axes: x positive to the right, y positive upward. The same convention is used for both bodies throughout the solution.

## Physical model

Use classical third-law reciprocity for one interaction event between A and B. Validate four relations: global vector reciprocity, x-component reciprocity, y-component reciprocity, and reciprocal normal-pair structure.

Explicit leaf anchoring: [[FAB]]-[[FBA]] is constrained by third-law vector reciprocity, [[FAx]]-[[FBx]] and [[FAy]]-[[FBy]] by axis reciprocity, and [[Nab]]-[[Nba]] by reciprocal normal-pair structure.

## Model justification

The model is justified because interaction participants and interval are clearly defined, masses are effectively constant, and horizontal friction is small relative to push force. Under these conditions, reciprocal pair identification is explicit.

The justification is physically explicit because it separates:

1. Reciprocal-force structure ([[FAB]], [[FBA]]).
2. Dynamic response of each body, controlled by mass and net-force context.

That separation prevents the common mistake of equating force reciprocity with equal accelerations or equal final speeds.

## Symbolic solution

{{f:tercera_ley_vectorial}}

{{f:tercera_ley_eje_x}}

{{f:tercera_ley_eje_y}}

{{f:par_normal_vectorial}}

Symbolic reading:

- If [[FAx]] is known for interaction A-B, [[FBx]] must be its opposite.
- If a vertical interaction component [[FAy]] exists, reciprocal [[FBy]] must switch sign.
- For contact normals, [[Nab]] and [[Nba]] follow the same opposite-direction reciprocity.

## Numerical substitution

Given [[FAx]] = +120 N, third-law x relation gives:

- [[FBx]] = -120 N.

Given [[FAy]] = +35 N in the inclined phase:

- [[FBy]] = -35 N.

Using per-body dynamic response estimates:

- [[aB]] = [[FAx]]/[[mB]] = 120/70 ≈ 1.71 m/s^2.
- [[aA]] = |[[FBx]]|/[[mA]] = 120/50 = 2.40 m/s^2.

With [[t]] = 0.40 s and [[v0]] = 0:

- [[vB]] ≈ [[aB]]*[[t]] ≈ 0.68 m/s.
- [[vA]] ≈ [[aA]]*[[t]] ≈ 0.96 m/s (opposite direction by sign convention).

Result: reciprocal forces are equal in magnitude, while motion response differs due to inertia difference.

## Dimensional validation

- Force units N for [[FAx]], [[FBx]], [[FAy]], [[FBy]], [[FAB]], [[FBA]], [[Nab]], [[Nba]].
- Acceleration units m/s^2 for [[aA]] and [[aB]].
- Velocity units m/s for [[vA]] and [[vB]].
- Time units s for [[t]].

No incompatible dimensions are mixed. Third-law equations remain dimensionally consistent as force relations on both sides.

## Physical interpretation

The key interpretation is causal and structural, not merely numeric: one interaction event generates two simultaneous reciprocal forces on different bodies. The pair [[FAB]]-[[FBA]] captures interaction symmetry, while differences in [[aA]] and [[aB]] capture inertia asymmetry due to [[mA]] and [[mB]].

Therefore, "equal forces" and "different motions" are fully compatible. Third law constrains force pairing. Motion evolution of [[vA]] and [[vB]] requires coupling with mass and interaction duration.

A second crucial interpretation concerns force identity. [[W]] and [[N_gen]] may oppose each other on one body, but they are not a third-law pair. The reaction to Earth's weight on A is A's gravitational pull on Earth, not floor normal on A.

Component reading also becomes a consistency audit tool. If [[FAx]] flips sign, [[FBx]] must flip oppositely for the same pair. The same rule applies to [[FAy]] and [[FBy]].

# Real-world example

## Context

In an automated manufacturing line, two carts are briefly coupled by a linear actuator and then separated into different stations. Control logic must avoid misinterpreting internal interaction as external net force on the combined system, while predicting separation speeds to prevent collisions with mechanical stops.

## Physical estimation

Assume effective masses [[mA]] = 180 kg and [[mB]] = 120 kg, with nearly constant interaction force [[FAB]] ≈ 600 N during [[t]] = 0.25 s. This is an order-of-magnitude estimation intended for operational planning rather than high-precision certification.

By reciprocity, [[FBA]] = -600 N along the interaction axis. Then:

- [[aA]] ≈ 600/180 = 3.33 m/s^2.
- [[aB]] ≈ 600/120 = 5.00 m/s^2.

If [[v0]] is near zero:

- [[vA]] ≈ 0.83 m/s.
- [[vB]] ≈ 1.25 m/s.

Reciprocity remains exact in force structure, while response differs due to mass ratio.

## Interpretation

This industrial case confirms the leaf principle: third law organizes interaction reciprocity and supports robust separation control. Two critical mistakes are prevented:

1. Canceling reciprocal forces inside one cart's single-body diagram.
2. Expecting equal final speeds just because force magnitudes are equal.

Complete interpretation combines reciprocal pairing, masses, activation time, and safety limits. If monitoring detects persistent mismatch such as high residual |[[FBx]] + [[FAx]]|, the correct action is to inspect channel mapping and sensor calibration rather than claiming a law-level failure.
`;export{n as default};
