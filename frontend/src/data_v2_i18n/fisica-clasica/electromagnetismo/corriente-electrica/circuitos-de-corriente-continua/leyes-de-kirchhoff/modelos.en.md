## Ideal model

The ideal model treats the circuit as a lumped DC network with linear resistive branches and explicitly identified sources. Under this assumption, each equation term maps to a physical branch or loop with clear sign meaning.

This is useful because results remain interpretable, traceable, and easy to audit against the actual wiring structure.

## Hypotheses

Hypothesis one: quasi-steady operation with no net node charge accumulation. Hypothesis two: branch behavior is approximately linear around the operating point. Hypothesis three: direction and polarity conventions remain fixed across all equations.

Hypothesis four: topology is stable during measurement and analysis. Hypothesis five: equation set used for solving is independent.

## Quantitative validity domain

A practical baseline is often reliable when relative resistance drift stays bounded, for example deltaR/R <= 0.10, and when normalized closure errors satisfy abs(node_closure)/I_ref <= 0.02 and abs(loop_closure)/V_ref <= 0.02.

For preliminary design and first-pass maintenance decisions, these bounds usually provide enough confidence. For safety-critical closure, tighter limits or richer models may be required.

## Model failure signals

Signal one: equations close numerically in calculation but do not close repeatedly in field measurements. Signal two: tiny data changes cause disproportionate output jumps, often indicating hidden dependency or poor equation conditioning.

Signal three: branch behavior deviates from linear assumptions in the operating window. Signal four: unmodeled effects such as contact resistance become dominant in closure mismatch.

## Extended or alternative model

The extended model keeps Kirchhoff conservation but expands branch constitutive behavior: dependent sources, nonlinearity, temperature dependence, or distributed effects. Transition is explicit: model change becomes convenient when deltaR/R > 0.10, or normalized node/loop closure errors systematically exceed 0.02.

Under those conditions, forcing the minimal model as final truth can produce wrong decisions.

When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.

## Operational comparison

The ideal model is excellent for education, fast diagnostics, and early-stage sizing. The extended model is preferable for safety validation, final specification, and high-uncertainty environments.

They are complementary layers. Robust practice starts with clear conservation closure, then adds complexity only where evidence and risk justify it.

A practical policy is to state, for each study, both the acceptable closure error and the trigger for model escalation. This keeps engineering decisions consistent across teams and improves auditability over time.

It also improves communication during handover: reviewers can immediately see why a minimal model was accepted or why an extended model was required.

This makes model quality decisions explicit and reproducible.