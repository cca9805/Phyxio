# Physical models: Simple Pulleys

## Ideal model

The ideal simple pulley model assumes massless pulleys, massless inextensible rope, and no friction in axles. These idealizations allow deriving the traction-force and rope-travel relations directly through static equilibrium.

The main simplifications are:

- **Inextensible and massless rope**: Rope length remains constant during operation.
- **Massless pulleys**: The weight of the movable pulley is not added to the load.
- **No axle friction**: Tension is equal at all points along the rope.
- **Static equilibrium**: No accelerations; the system is at rest or in uniform motion.

Each of these idealizations has measurable physical consequences when violated.

## Hypotheses

The explicit hypotheses supporting the model are:

- **Ideal rope hypothesis**: The rope does not stretch and has negligible mass compared to the load.
- **Ideal pulley hypothesis**: The mass of the movable pulley is less than 5% of the lifted load.
- **Negligible friction hypothesis**: The friction coefficient at the axle is low enough that losses are under 10%.
- **Quasi-static hypothesis**: Acceleration is negligible (less than 0.1 g).

Violating any of these hypotheses makes the model fail predictably.

## Quantitative validity domain

The model works well when these quantitative conditions are met:

- **Loads**: 10 N < [[W]] < 1000 N (approximately 1 kg to 100 kg)
- **Number of segments**: [[nSel]] with value 1 (fixed pulley) or [[nSel]] with value 2 (movable pulley)
- **Mechanical efficiency**: above 0.9 in well-lubricated systems
- **Acceleration**: less than 0.1 times gravity (quasi-static motion)

Outside these ranges, the neglected terms in the idealized model become comparable to the main terms and the model loses precision.

## Model failure signals

How do you detect that the model has become invalid? Look for these observable indicators:

- **Measurement discrepancy**: Your calculated force differs from actual measurement by more than 10%.
- **Variable force**: The required force increases during ascent (symptom of friction).
- **Insufficient maximum load**: You cannot lift the theoretically calculated load.
- **Oscillations**: The load bounces or vibrates (indicates unmodeled rope elasticity).

## Extended or alternative model

When the ideal model fails, the next step is to include secondary effects:

- **Friction model**: Includes a constant friction torque at the pulley axle. Mechanical efficiency reduces the effective mechanical advantage.
- **Pulley weight model**: Adds the weight of the movable pulley to the effective load. Critical when the pulley exceeds 5% of the load.
- **Rope elasticity model**: Treats the rope as a linear spring. Explains oscillations and requires considering elastic potential energy.
- **Dynamic model**: Includes accelerations and rotational masses. Necessary for startup, stopping, or rapid motion analysis.

**When to transition to the extended model:**

When to transition to the extended model: when the discrepancy between ideal prediction and experimental measurement systematically exceeds 15%, or when designing industrial systems where safety requires better than 10% precision.

The transition to the extended model is advisable when simple calculations are no longer sufficient to guarantee safe operation.

## Operational comparison

| Aspect | Ideal Model | Extended Model |
|---------|-------------|------------------|
| **Precision** | Within 10% under valid conditions | Within 3% with adjusted parameters |
| **Complexity** | Linear algebraic equations | System of coupled equations |
| **Required parameters** | Only [[W]], [[nSel]] | Pulley masses, friction coefficients, rope elastic constant |
| **Resolution time** | Minutes by hand | Hours with numerical software |
| **When to use** | Education, preliminary design, quick estimates | Industrial safety design, experimental validation, research |
| **Typical range** | Light loads (< 100 kg), moderate heights (< 10 m) | Heavy loads, elevated heights, dynamic operations |

Learn to master the ideal model first. Once you can predict when it will fail and why, transition to the extended model to obtain the precision that the application requires.
