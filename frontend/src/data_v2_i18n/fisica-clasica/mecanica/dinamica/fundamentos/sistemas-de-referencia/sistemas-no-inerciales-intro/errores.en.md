# Frequent mistakes: Introduction to Non-Inertial Frames

## Conceptual errors

### Error 1: Mixing cause and description layer

Why it seems correct: many terms appear together, so students assume all of them are real physical causes of the same type.

Why it is incorrect: [[F_real]] and [[F_ficticia]] do not have the same physical meaning. Real forces come from identifiable interactions, while fictitious terms come from frame choice.

Detection signal: the report assigns [[F_ficticia]] to a direct material source without discussing frame acceleration.

Mini-contrast example: in a carriage with nonzero [[a_marco]], an object appears to drift backward internally even with no extra horizontal contact force.

Conceptual correction: separate real-interaction reasoning from frame-correction reasoning before interpreting causality.

### Error 2: Applying equations without context validation

Why it seems correct: using one familiar equation feels efficient and often works in simple exercises.

Why it is incorrect: when [[omega]] or [[a_marco]] is relevant, inertial-only equations create systematic bias.

Detection signal: persistent prediction residuals with no frame-class review.

Mini-contrast example: [[a_rel]] is computed from [[F_real]] only on a rotating platform, and observed path curvature is missed.

Conceptual correction: classify the frame first, then select active terms.

### Error 3: Confusing similar magnitudes

Why it seems correct: [[a_marco]] and [[a_rel]] share units, and [[F_centrifuga]] and [[F_real]] are both forces.

Why it is incorrect: each quantity has a different role in diagnostics and model closure.

Detection signal: [[a_marco]] is replaced by [[a_rel]] in fictitious-force estimation, or [[F_centrifuga]] is interpreted as contact force.

Mini-contrast example: two bodies with equal [[m]] in the same accelerating frame receive the same translational inertial correction even with different real-force inventories.

Conceptual correction: define a magnitude-role table before algebraic steps.

## Model errors

### Error 4: Not detecting simplified-model breakdown

Why it seems correct: baseline models work often in low-complexity contexts, creating false confidence.

Why it is incorrect: with high [[omega]] or high [[v_rel]], neglecting [[F_coriolis]] or [[F_centrifuga]] can change trajectory class.

Detection signal: relative error stays above 10 percent across repeated windows but model is not escalated.

Mini-contrast example: a guidance loop keeps inertial shortcuts during aggressive turning and accumulates unexplained lateral drift.

Conceptual correction: enforce explicit quantitative transition criteria.

### Error 5: Ignoring known validity limits

Why it seems correct: a good fit in one setup is assumed to generalize automatically.

Why it is incorrect: validity depends on scales of [[a_marco]], [[omega]], [[r]], and [[v_rel]].

Detection signal: a calibration validated in low rotation is reused in high-rotation conditions without revalidation.

Mini-contrast example: a linear-bench model is transferred directly to a rotating table and fails.

Conceptual correction: recheck thresholds whenever scale or geometry changes.

## Mathematical errors

### Error 6: Careless algebraic manipulation

Why it seems correct: symbolic rearrangement looks straightforward.

Why it is incorrect: a sign or direction mistake can invert the physical interpretation.

Detection signal: numerically plausible magnitude with physically impossible direction.

Mini-contrast example: reversing fictitious-force direction yields relative acceleration opposite to measurements.

Conceptual correction: lock axis orientation and sign conventions before each step.

### Error 7: Unit and constant inconsistency

Why it seems correct: spreadsheets hide units, so conversion errors remain invisible.

Why it is incorrect: mixing rad/s, rpm, m/s, and km/h corrupts non-inertial terms by large factors.

Detection signal: huge output swings under unchanged physical behavior.

Mini-contrast example: entering [[omega]] in rpm but treating it as rad/s massively overestimates [[F_centrifuga]].

Conceptual correction: convert everything to SI units before computation.

## Interpretation errors

### Error 8: Over-claiming precision

Why it seems correct: many decimal digits look scientific.

Why it is incorrect: true confidence is limited by measurement uncertainty and model adequacy.

Detection signal: decisions are made from changes below noise floor.

Mini-contrast example: declaring regime change from 0.01 m/s^2 variation with 0.05 m/s^2 uncertainty.

Conceptual correction: match significant digits to metrological and model limits.

### Error 9: Skipping physical interpretation

Why it seems correct: obtaining a final number is mistaken for solving the physics problem.

Why it is incorrect: without causal interpretation, you cannot distinguish object dynamics from frame effects.

Detection signal: report ends with numeric tables but no statement about frame validity.

Mini-contrast example: [[a_rel]] is reported without discussing whether [[system_classification]] remains consistent.

Conceptual correction: always close with interpretation, threshold, and model decision.

## Quick self-control rule

1. Did you separate [[F_real]] from [[F_ficticia]] explicitly?
2. Did you keep [[a_marco]] distinct from [[a_rel]]?
3. Did you test whether [[omega]] and [[v_rel]] activate rotational terms?
4. Did you validate SI units and sign conventions?
5. Did you apply a quantitative threshold for model acceptance or escalation?
