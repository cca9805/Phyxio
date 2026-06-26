const e=`# Physical models: friction on an incline\r
\r
## Ideal model\r
\r
The baseline model describes a block of mass [[m]] on an incline of angle [[theta]] under gravity [[g]], but now with a rough contact surface. The key difference from the frictionless case is that the tangential force is no longer determined only by the gravitational projection: friction appears and opposes either impending motion or actual sliding.\r
\r
This is not a decorative complication. It is the first model that can distinguish a block at rest, a block at the verge of slipping, and a block already sliding. That distinction changes the entire dynamic interpretation.\r
\r
## Hypotheses\r
\r
The working assumptions are:\r
\r
- The block stays in contact with the plane throughout the analysis.\r
- The surface is described by static and kinetic coefficients [[mu_e]] and [[mu_c]].\r
- The normal force [[N]] comes from perpendicular equilibrium.\r
- Static friction acts only up to a maximum [[f_s_max]].\r
- Once rest is broken, kinetic friction dominates.\r
- The plane angle [[theta]] remains constant over the analyzed segment.\r
\r
These assumptions give a simple model with real predictive power.\r
\r
## Quantitative validity domain\r
\r
The model is reliable when these numerical checks are satisfied:\r
\r
- 0 <= [[theta]] <= 90 degrees.\r
- [[mu_e]] >= 0 and [[mu_c]] >= 0.\r
- For typical dry contacts, [[mu_c]] <= [[mu_e]].\r
- Rest is expected if tan([[theta]]) <= [[mu_e]].\r
- Sliding is expected if tan([[theta]]) > [[mu_e]].\r
- The angular threshold is [[theta_c]] = arctan([[mu_e]]).\r
- The transition window is delicate when |tan([[theta]]) - [[mu_e]]| < 0.05.\r
- Relative prediction-measurement error should stay below or equal to 10 percent in basic experiments.\r
\r
This quantitative block is essential: students should not only memorize the equations, but also know which side of the threshold the system lies on.\r
\r
## Model failure signals\r
\r
Watch for these signs that the model is no longer adequate:\r
\r
- The calculation predicts rest, but the block repeatedly slides.\r
- The calculation predicts sliding, but the block stays still with a clear margin.\r
- Measured acceleration changes in a way incompatible with fixed [[mu_c]].\r
- The computed [[N]] becomes negative or larger than the total weight without extra external forces.\r
- The behavior changes strongly with surface contamination, humidity, or vibration.\r
\r
In those cases, the problem is not algebraic: the simple contact hypothesis is no longer sufficient.\r
\r
## Extended or alternative model\r
\r
When the ideal model fails, the next level may include:\r
\r
- Contact with friction depending on surface state.\r
- A hysteresis model for the transition between adherence and sliding.\r
- Deformation or micro-vibration effects for soft materials or uneven supports.\r
- Extra forces when external push, braking, or acceleration is present.\r
\r
The correct transition is not to abandon simple physics, but to increase complexity only when the evidence demands it.\r
\r
### When to switch models\r
\r
An explicit transition to the alternative model is recommended when at least one of these conditions is present:\r
\r
- Threshold zone: |tan([[theta]]) - [[mu_e]]| < 0.05.\r
- Persistent prediction-measurement error above 10 percent.\r
- Observed behavior alternates between rest and sliding under small perturbations.\r
- Surface changes (humidity, dust, vibration) break the simple-contact assumption.\r
\r
Under any of these conditions, switch from the ideal model to the extended model to preserve physical validity and predictive usefulness.\r
\r
## Operational comparison\r
\r
| Aspect | Ideal model | Extended model |\r
|---------|-------------|----------------|\r
| **Main control variables** | [[theta]] and [[mu_e]] | [[theta]], [[mu_e]], [[mu_c]] and surface state |\r
| **Question answered** | Slip or no slip? | What acceleration and what threshold? |\r
| **Accuracy** | Very high far from threshold | Better near threshold and in real labs |\r
| **Complexity** | Direct equations | Static branch + kinetic branch |\r
| **Recommended use** | First estimate and teaching | Validation, design, and diagnosis |\r
\r
The practical rule is simple: if the situation is clearly below or above [[theta_c]], the ideal model already gives a lot of information. If the situation is near [[theta_c]], sensitivity increases and measurement care matters more.\r
\r
## Physical reading of the regime change\r
\r
The key idea is that friction does not merely "subtract" motion. In the resting regime, static friction matches the needed tangential component up to a maximum [[f_s_max]]. In the sliding regime, kinetic friction is no longer free to adjust: it takes a value tied to [[mu_c]] and [[N]]. That shift in logic explains why the model must split into two branches.\r
\r
The pedagogical consequence is strong. A single incline can be described by two laws depending on motion state. That is real physics: the regime matters.\r
\r
## Operational synthesis\r
\r
Use the model this way:\r
\r
1. Compute [[theta_c]] from [[mu_e]].\r
2. Compare [[theta]] with [[theta_c]].\r
3. If [[theta]] <= [[theta_c]], analyze rest with the static threshold and the maximum available friction.\r
4. If [[theta]] > [[theta_c]], use the normal force, kinetic friction, and frictional acceleration.\r
5. Check that the result is consistent with the scale of [[mu_e]], [[mu_c]], and [[N]].\r
\r
That flow turns friction into a physical decision, not a loose collection of formulas.`;export{e as default};
