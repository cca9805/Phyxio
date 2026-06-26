const e=`# Physical models: Two Masses Connected by a Rope\r
\r
## Ideal model\r
\r
The ideal Atwood machine model deliberately simplifies the real system through four fundamental idealizations. The rope is considered massless and inextensible, transmitting force perfectly without deformation or own inertia. The pulley is modeled as a disk without mass and without axle friction, changing the direction of tension without dissipating energy or accumulating rotational inertia. Both masses are treated as point particles without spatial dimension, and motion is restricted to pure one-dimensional vertical movement.\r
\r
These simplifications do not make the model false; they make it a deliberately abstract tool that captures the essence of dynamic coupling. The art lies in recognizing when idealizations are acceptable versus when they must be corrected.\r
\r
## Hypotheses\r
\r
The explicit hypotheses supporting the ideal model are:\r
\r
- **Ideal rope**: The cable mass is negligible compared to connected masses. If the rope has comparable mass, tension ceases to be uniform along its length and gradients appear that the model does not capture.\r
\r
- **Ideal pulley**: The pulley has no mass or axle friction. If the pulley is massive, part of the energy goes into its rotation, reducing the effective acceleration of masses. If there is friction, dissipative torques appear that are not modeled.\r
\r
- **Inextensible rope**: Cable length remains constant, imposing that both masses share the same acceleration magnitude. If the rope stretches significantly under load, instantaneous accelerations may differ and elastic oscillations appear.\r
\r
- **One-dimensional motion**: Masses move vertically without transverse oscillations or own rotation. If masses oscillate like pendulums or rotate, the kinematic constraint breaks and additional degrees of freedom appear.\r
\r
Violating any of these hypotheses causes the model to fail in a predictable and quantifiable manner.\r
\r
## Quantitative validity domain\r
\r
The model works well when these quantitative conditions are met:\r
\r
- **Rope mass**: m_rope < 0.05 × ([[m1]] + [[m2]]). Cable mass must be less than 5% of total system mass for tension to be approximately uniform.\r
\r
- **Pulley mass**: m_pulley < 0.1 × ([[m1]] + [[m2]]). Pulley mass must be less than 10% of total mass for its rotational inertia to be negligible.\r
\r
- **Cable elasticity**: Elongation under maximum load must be less than 1% of total length. This guarantees that inextensibility is a good approximation.\r
\r
- **System velocity**: v < 5 m/s for typical laboratory masses. At higher velocities, air resistance becomes comparable to weight difference in light systems.\r
\r
Outside these ranges, neglected terms become comparable to main terms and the model loses significant precision.\r
\r
## Model failure signals\r
\r
Detect that the model has ceased to be valid through these observable indicators:\r
\r
- **Measurement-calculation discrepancy**: Measured acceleration differs by more than 5% from the ideal formula prediction. This systematic deviation indicates that some idealization fails.\r
\r
- **Tension variation**: If different tensions are measured at different points along the rope, the massless and inextensible rope model no longer applies.\r
\r
- **Transverse oscillations**: If masses oscillate like pendulums while moving vertically, the one-dimensional motion hypothesis is violated.\r
\r
- **Pulley slipping**: If the rope slips on the pulley instead of rolling without slipping, kinetic friction forces appear that are not included in the model.\r
\r
## Extended or alternative model\r
\r
When the ideal model fails, the next step is to include secondary effects through an extended model:\r
\r
- **Massive pulley with rotational inertia**: The moment of inertia I of the pulley is included in the equations, reducing effective acceleration according to the correction factor.\r
\r
- **Extensible rope with elasticity**: The rope is modeled as a linear spring with constant k, allowing longitudinal oscillations of the system.\r
\r
- **Friction in pulley axle**: A dissipative torque proportional to angular velocity is introduced, reducing available mechanical energy.\r
\r
- **Air resistance**: A drag force proportional to velocity is added, significant for light systems at high velocities.\r
\r
Explicit transition: The extended model becomes necessary when the discrepancy between ideal prediction and experimental measurement systematically exceeds 10%, or when industrial systems are designed where safety requires precision better than 5%.\r
\r
## Operational comparison\r
\r
| Aspect | Ideal Model | Extended Model |\r
|---------|-------------|----------------|\r
| **Precision** | Within 5-10% under valid conditions | Within 1-2% with adjusted parameters |\r
| **Complexity** | Linear algebraic equations | System of coupled differential equations |\r
| **Required parameters** | Only masses and gravity | Masses, moment of inertia, friction and elasticity coefficients |\r
| **Resolution time** | Minutes by hand | Hours with numerical software |\r
| **When to use** | Educational exercises, quick estimates | Industrial design, experimental validation, research |\r
| **Typical range** | School laboratory with masses 0.1 to 5 kg | Industrial systems, mines, funiculars |\r
\r
Learn to master the ideal model first. Once you can predict when it will fail and why, transition to the extended model to obtain the precision the application requires.\r
`;export{e as default};
