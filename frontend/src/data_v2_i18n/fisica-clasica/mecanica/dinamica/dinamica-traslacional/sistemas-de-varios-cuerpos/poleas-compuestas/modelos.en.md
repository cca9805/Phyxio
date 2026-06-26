# Physical Models: Compound Pulleys

## Ideal Model

The ideal compound pulley model deliberately simplifies the real system through three fundamental idealizations. Pulleys are considered massless and frictionless in their axles, rotating freely without dissipating energy. Rope is assumed perfectly flexible and inextensible, transmitting tension uniformly without storing elastic energy or deforming. The system is in static equilibrium or quasi-static motion, where accelerations are negligible.

These simplifications do not make the model false; they make it a deliberately abstract tool that captures the essence of mechanical advantage. The art lies in recognizing when idealizations are acceptable versus when they need correction.

## Hypotheses

The explicit hypotheses supporting the model are:

- **Ideal pulleys**: Pulleys have no mass and no axle friction. If pulleys have significant mass, part of the effort goes to accelerating them. If there is axle friction, energy dissipates as heat that the ideal model does not consider.

- **Ideal rope**: Rope is inextensible and perfectly flexible. If rope stretches under load, movable pulleys descend additionally. If it is stiff, work is required to bend it around pulleys.

- **Quasi-static equilibrium**: The system moves with constant velocity (or is at rest). If there are significant accelerations, net force terms must be added to the equilibrium equations.

- **Parallel segments**: The rope segments supporting the load are approximately parallel. If segments form significant angles, vertical tension components reduce each segment's effectiveness.

Violating any of these hypotheses causes the model to fail in predictable and quantifiable ways.

## Quantitative Validity Domain

The model works well when these quantitative conditions are met:

- **Movable pulley mass**: m_pulleys < 0.1 × [[W]]. The accumulated weight of movable pulleys must be less than 10% of the load weight.

- **Axle friction**: The friction torque at each axle must be less than 5% of transmitted rotation torque. This is approximately equivalent to [[eta]] > 0.9.

- **Rope elasticity**: Maximum elongation under nominal load must be less than 2% of total length. More elastic ropes store energy and oscillate.

- **Operating speed**: v < 1 m/s for typical loads. At higher speeds, dynamic effects (inertia forces, vibrations) become significant.

Outside these ranges, neglected terms become comparable to main terms and the model loses significant precision.

## Model Failure Signals

Detect that the model has ceased to be valid through these observable indicators:

- **Measurement-calculation discrepancy**: Measured force differs by more than 15% from ideally predicted. This indicates that some non-ideality dominates.

- **Efficiency variation**: If the relationship between measured force and load is not linear, efficiency is not constant as the model assumes.

- **Rope slipping**: If rope slips over pulleys, the perfect force transmission hypothesis fails.

- **Persistent oscillations**: If the system oscillates when stopping or starting motion, there is stored elastic energy that the model does not consider.

## Extended or Alternative Model

When the ideal model fails, the next step is to include secondary effects:

- **Axle friction model**: Includes a constant friction torque per pulley axle. This increases required force proportionally to the number of movable pulleys.

- **Pulley weight model**: Adds movable pulley weight to effective load. This is critical in systems with many pulleys or light loads.

- **Rope elasticity model**: Treats rope as a linear spring. This explains oscillations and requires considering elastic potential energy.

- **Complete dynamic model**: Includes accelerations and rotating masses. Necessary for analysis of starting, stopping, or fast movements.

**When to switch to the extended model:**

When to switch to the extended model: when the discrepancy between ideal prediction and experimental measurement systematically exceeds 20%, or when designing industrial systems where safety requires better than 10% precision.

The transition to the extended model is appropriate when simple calculations are no longer sufficient to guarantee operational safety.

## Operational Comparison

| Aspect | Ideal Model | Extended Model |
|--------|-------------|----------------|
| **Precision** | Within 10% under valid conditions | Within 3% with adjusted parameters |
| **Complexity** | Linear algebraic equations | Coupled equation systems |
| **Required parameters** | Only [[W]], [[nSel]], [[eta]] optional | Pulley masses, friction coefficients, rope elastic constant |
| **Resolution time** | Minutes by hand | Hours with numerical software |
| **When to use** | Preliminary design, education, quick estimates | Industrial safety design, experimental validation, research |
| **Typical range** | Small cranes, rescue equipment, lifts | Bridge cranes, mining systems, complex naval rigs |

Learn to master the ideal model first. Once you can predict when it will fail and why, transition to the extended model to obtain the precision that the application requires.
