# Modelos físicos: Newton's Third Law (Action and Reaction)

## Ideal model

The ideal model for this leaf represents an interaction between systems A and B with explicit reciprocal-pair identification. The goal is not to capture every real-world effect, but to preserve the structural core of the third law: every force of A on B has a force of B on A with equal magnitude and opposite direction at the same instant.

In leaf notation, the main pair is [[FAB]] and [[FBA]]. In contact situations, the pair [[Nab]] and [[Nba]] is especially relevant. For axis analysis, consistency is checked with [[FAx]]-[[FBx]] and [[FAy]]-[[FBy]].

The ideal model requires body separation and interaction separation. If either is unclear, equations may look correct while interpretation remains physically wrong.

## Hypotheses

Operational hypotheses:

1. The two compared forces belong to the same physical interaction.
2. Pair comparison is done at the same time instant.
3. One axis convention is kept for both bodies.
4. Free-body diagrams for A and B are drawn separately.
5. Component estimates use bounded and known uncertainty.

These hypotheses should be explicit before substitution. Without them, third-law pairing is often mixed with other forces such as [[W]] or [[N_gen]].

## Quantitative validity domain

The model is considered reliable when observable criteria are met:

1. Vector criterion: ||[[FBA]] + [[FAB]]|| <= 0.10 N in educational-lab measurements.
2. x-axis criterion: |[[FBx]] + [[FAx]]| <= 0.05 N.
3. y-axis criterion: |[[FBy]] + [[FAy]]| <= 0.05 N.
4. Contact criterion: ||[[Nba]] + [[Nab]]|| <= 0.10 N for the same contact point.

When these thresholds hold consistently, action-reaction interpretation is robust enough for physical inference.

## Model failure signals

Typical out-of-domain indicators:

1. Persistent residual above tolerance across repeated runs.
2. Axis-convention drift between bodies.
3. Pairing forces of different physical origin as if they were reciprocal.
4. Multiple interaction channels without dominant-channel identification.

These failures do not refute the third law; they indicate poor mapping from physical system to model representation.

## Extended or alternative model

When real systems include multi-contact behavior, anisotropic friction, or strongly time-varying coupling, an extended model is recommended with explicit interaction-channel labeling and time-dependent pairing.

When to switch model: when any quantitative threshold is persistently exceeded or when pair identity cannot be assigned without ambiguity.

## Operational comparison

Ideal model: fast, interpretable, and excellent for foundational pair reasoning.

Extended model: more expensive but necessary for complex contact networks and noisy data conditions.

Professional practice is evidence-based model selection according to required precision and observed interaction complexity.
