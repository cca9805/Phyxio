# Models: Common Errors in Dynamics Problems

## Ideal model

This leaf operates under a simplified model that assumes certain idealisations. The ideal model is not wrong; it is a deliberately simplified tool that works extraordinarily well within its range of applicability.

The main simplifications are:

- **Ignoring friction/damping** in systems where it is secondary
- **Assuming constant magnitudes** when they vary slowly
- **Treating objects as point masses** when their extent is irrelevant compared to the problem length scales
- **Neglecting relativistic and quantum effects** at macroscopic scales

Each of these idealisations has measurable physical consequences. The skill lies in recognising when the consequence is acceptable.

## Hypotheses

The explicit hypotheses supporting the model are:

- **Kinematic hypothesis**: The system can be described using the magnitudes defined in magnitudes.yaml without additional variables.
- **Dynamic hypothesis**: Real forces satisfy Newton's second law in its basic form, with no hidden mechanisms.
- **Continuity hypothesis**: Magnitudes vary continuously; no discontinuous jumps occur.
- **Decoupling hypothesis**: The effects we ignore (such as minimal friction) do not couple non-linearly with the main effects.

Violating any of these hypotheses causes the model to fail predictably.

## Quantitative validity domain

The model works well when the following quantitative conditions are met:

- **Inclination angle** ([[angulo_plano]]): 0° ≤ θ ≤ 60°. For θ > 60°, [[componente_normal_erronea]] becomes so small that surface contact may be lost before the analysis applies.
- **Coefficient of friction**: 0.01 ≤ μs ≤ 1.5. Values outside this range do not correspond to common physical materials under dry conditions.
- **System acceleration** ([[aceleracion_sistema]]): [[aceleracion_sistema]] ≤ [[aceleracion_gravedad]] (9.81 m/s²). An acceleration exceeding free-fall gravity indicates that tension has been incorrectly included as an external force, or that an undeclared propulsive force is present.
- **Total mass**: M_tot > 0 kg and M_tot ≤ 10³ kg for manually handled systems. Larger masses require consideration of cable and pulley deformation.
- **Velocity**: v ≪ 10⁷ m/s; relativistic effects negligible for all classical workshop mechanics.

Outside these ranges, the terms neglected in the idealised model become comparable to the main terms and the model loses accuracy.

## Model failure signals

How do you detect that the model has ceased to be valid? Look for these observable indicators:

- **Prediction vs. measurement**: Your calculation gives a result that contradicts observation by more than 5–10 %.
- **Numerical instability**: Small changes in parameters produce enormous changes in the result (sign of resonance or another unmodelled effect).
- **Physically nonsensical result**: An incorrect sign, infinite divergence, or a result violating a conservation law.
- **Approximation breakdown**: One of the neglected terms becomes comparable to or larger than the main terms.

## Extended or alternative model

To transition to the extended dynamics model incorporating secondary effects, the operative criterion is to verify whether any hypothesis of the ideal model has been violated; when that occurs, the next step is to incorporate those effects into the analysis:

When the ideal model fails, the next step is to include secondary effects:

- **Including friction forces**: Introduces systematic energy losses.
- **Elasticity and deformation**: When objects deform, the geometric properties of the system change.
- **Dissipative effects**: Air resistance, viscosity, and sound waves carry energy out of the simple system.
- **Coupled dynamics**: When one subsystem affects another in a non-trivial way.

The extended model is more accurate but also more complex. Do not use it unless you need that level of precision.

## Operational comparison

| Aspect | Ideal model | Extended model |
|--------|-------------|----------------|
| **Accuracy** | 90–95 % | 98 %+ |
| **Complexity** | Algebraic equations | Differential equations |
| **Solution time** | Minutes | Hours |
| **When to use** | Education, rapid design | Research, validation |
| **Typical range** | Clean laboratory | Real world |

Master the ideal model first. Once you have it under control, transition to the extended model as needed.
