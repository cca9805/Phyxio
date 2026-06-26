const e=`# Physical models: Simple Pulleys\r
\r
## Ideal model\r
\r
The ideal simple pulley model assumes massless pulleys, massless inextensible rope, and no friction in axles. These idealizations allow deriving the traction-force and rope-travel relations directly through static equilibrium.
\r
The main simplifications are:\r
\r
- **Inextensible and massless rope**: Rope length remains constant during operation.\r
- **Massless pulleys**: The weight of the movable pulley is not added to the load.\r
- **No axle friction**: Tension is equal at all points along the rope.\r
- **Static equilibrium**: No accelerations; the system is at rest or in uniform motion.\r
\r
Each of these idealizations has measurable physical consequences when violated.\r
\r
## Hypotheses\r
\r
The explicit hypotheses supporting the model are:\r
\r
- **Ideal rope hypothesis**: The rope does not stretch and has negligible mass compared to the load.\r
- **Ideal pulley hypothesis**: The mass of the movable pulley is less than 5% of the lifted load.\r
- **Negligible friction hypothesis**: The friction coefficient at the axle is low enough that losses are under 10%.\r
- **Quasi-static hypothesis**: Acceleration is negligible (less than 0.1 g).\r
\r
Violating any of these hypotheses makes the model fail predictably.\r
\r
## Quantitative validity domain\r
\r
The model works well when these quantitative conditions are met:\r
\r
- **Loads**: 10 N < [[W]] < 1000 N (approximately 1 kg to 100 kg)\r
- **Number of segments**: [[nSel]] with value 1 (fixed pulley) or [[nSel]] with value 2 (movable pulley)
- **Mechanical efficiency**: above 0.9 in well-lubricated systems
- **Acceleration**: less than 0.1 times gravity (quasi-static motion)
\r
Outside these ranges, the neglected terms in the idealized model become comparable to the main terms and the model loses precision.\r
\r
## Model failure signals\r
\r
How do you detect that the model has become invalid? Look for these observable indicators:\r
\r
- **Measurement discrepancy**: Your calculated force differs from actual measurement by more than 10%.\r
- **Variable force**: The required force increases during ascent (symptom of friction).\r
- **Insufficient maximum load**: You cannot lift the theoretically calculated load.\r
- **Oscillations**: The load bounces or vibrates (indicates unmodeled rope elasticity).\r
\r
## Extended or alternative model\r
\r
When the ideal model fails, the next step is to include secondary effects:\r
\r
- **Friction model**: Includes a constant friction torque at the pulley axle. Mechanical efficiency reduces the effective mechanical advantage.
- **Pulley weight model**: Adds the weight of the movable pulley to the effective load. Critical when the pulley exceeds 5% of the load.\r
- **Rope elasticity model**: Treats the rope as a linear spring. Explains oscillations and requires considering elastic potential energy.\r
- **Dynamic model**: Includes accelerations and rotational masses. Necessary for startup, stopping, or rapid motion analysis.\r
\r
**When to transition to the extended model:**\r
\r
When to transition to the extended model: when the discrepancy between ideal prediction and experimental measurement systematically exceeds 15%, or when designing industrial systems where safety requires better than 10% precision.\r
\r
The transition to the extended model is advisable when simple calculations are no longer sufficient to guarantee safe operation.\r
\r
## Operational comparison\r
\r
| Aspect | Ideal Model | Extended Model |\r
|---------|-------------|------------------|\r
| **Precision** | Within 10% under valid conditions | Within 3% with adjusted parameters |\r
| **Complexity** | Linear algebraic equations | System of coupled equations |\r
| **Required parameters** | Only [[W]], [[nSel]] | Pulley masses, friction coefficients, rope elastic constant |\r
| **Resolution time** | Minutes by hand | Hours with numerical software |\r
| **When to use** | Education, preliminary design, quick estimates | Industrial safety design, experimental validation, research |\r
| **Typical range** | Light loads (< 100 kg), moderate heights (< 10 m) | Heavy loads, elevated heights, dynamic operations |\r
\r
Learn to master the ideal model first. Once you can predict when it will fail and why, transition to the extended model to obtain the precision that the application requires.\r
`;export{e as default};
