const e=`# Common errors: Two Masses Connected by a Rope\r
\r
## Conceptual errors\r
\r
### Error 1: Believing tension equals the weight of one mass\r
\r
**Why it seems correct**\r
\r
The student reasons intuitively: "the rope supports the mass, so tension must equal its weight". This intuition comes from static situations where a vertical rope actually supports a weight in equilibrium.\r
\r
**Why it is wrong**\r
\r
In the moving Atwood machine, tension is an internal coupling force that must be smaller than the descending mass's weight and greater than the ascending mass's weight. If tension equaled [[m1]]'s weight, it would not accelerate upward; if it equaled [[m2]]'s weight, it would not accelerate downward. Tension takes an intermediate value precisely because the system accelerates.\r
\r
**Detection signal**\r
\r
If you calculate a tension exactly equal to [[m1]]·[[g]] or [[m2]]·[[g]], or if you find acceleration to be zero without reason for mass equilibrium.\r
\r
**Conceptual correction**\r
\r
Tension is the force the rope exerts on each mass. For both masses to accelerate, tension must be between both weights. The formula shows it depends on the product of masses over the sum, not on a single mass.\r
\r
**Contrast mini-example**\r
\r
With [[m1]] = 2 kg and [[m2]] = 4 kg, a student calculates "tension = weight of [[m1]] = 19.6 N". This is incorrect because with that tension [[m2]] would not descend. The correct tension is 26.1 N, intermediate between 19.6 N and 39.2 N.\r
\r
### Error 2: Confusing assumed direction with real motion direction\r
\r
**Why it seems correct**\r
\r
When setting up equations, the student assumes [[m2]] descends and [[m1]] ascends based on mass comparison. If [[a]] comes out negative, they interpret it as "a sign error" and arbitrarily correct it to positive.\r
\r
**Why it is wrong**\r
\r
A negative acceleration is not an error; it is valid physical information. It indicates that the real motion direction is opposite to the assumed one. Arbitrarily correcting the sign loses information about the system's real dynamics.\r
\r
**Detection signal**\r
\r
When solving for [[a]] you get a negative value and your immediate reaction is "I must change it to positive" without reconsidering the motion direction.\r
\r
**Conceptual correction**\r
\r
The sign of [[a]] is relative to the choice of reference axes. A negative value means the mass you assumed goes up actually goes down, and vice versa. The sign information is as valid as the magnitude.\r
\r
**Contrast mini-example**\r
\r
If [[m1]] = 5 kg and [[m2]] = 3 kg (left mass larger), but you assumed [[m2]] descends, you get [[a]] = −2.45 m/s². The negative sign correctly indicates that [[m1]] descends and [[m2]] ascends, opposite to your initial assumption.\r
\r
## Model errors\r
\r
### Error 3: Applying the ideal model to systems with massive pulleys without correction\r
\r
**Why it seems correct**\r
\r
The Atwood formula is in the textbook, so "it should work" for any system of two masses with rope and pulley.\r
\r
**Why it is wrong**\r
\r
The formula assumes a massless pulley. If the pulley has significant mass, part of the energy goes into making it rotate, reducing the effective acceleration of the masses. Applying the ideal formula without correction systematically overestimates real acceleration.\r
\r
**Detection signal**\r
\r
When you experimentally measure an acceleration consistently lower (more than 5% below) than predicted by the ideal formula, and the pulley is made of dense material (metal) and considerable size.\r
\r
**Conceptual correction**\r
\r
The ideal model is only valid when the pulley's rotational kinetic energy is negligible compared to the translational energy of the masses. For massive pulleys, moment of inertia I must be included in the equations.\r
\r
**Contrast mini-example**\r
\r
A system with [[m1]] = 1 kg, [[m2]] = 2 kg and a pulley of 0.5 kg mass distributed at its rim. The ideal formula predicts 3.27 m/s². The measured value is 2.6 m/s². The discrepancy reveals that the ideal model does not apply directly.\r
\r
### Error 4: Ignoring rope mass in large-scale systems\r
\r
**Why it seems correct**\r
\r
The rope seems light compared to system masses, so "it shouldn't affect" the results.\r
\r
**Why it is wrong**\r
\r
In industrial systems (mines, funiculars) with cables hundreds of meters long, the rope mass can be comparable to or greater than the cabin masses. Ignoring it produces significantly erroneous tension and acceleration calculations.\r
\r
**Detection signal**\r
\r
When the cable is high-strength steel and its length exceeds 50 meters, or when the ratio of cable mass to load mass exceeds 0.1.\r
\r
**Conceptual correction**\r
\r
In massive cables, tension varies along the cable due to its own weight. The massless rope model is only valid when rope mass is much smaller than connected masses (typically less than 5%).\r
\r
**Contrast mini-example**\r
\r
A mine elevator with 200 meters of steel cable (mass 600 kg) connecting two 1000 kg cabins each. Ignoring cable mass produces a 23% error in calculated acceleration.\r
\r
## Mathematical errors\r
\r
### Error 5: Dividing by a single mass instead of total mass\r
\r
**Why it seems correct**\r
\r
When applying the second law, the student reasons: "net force accelerates the mass it acts upon", and applies [[a]] = [[g]]·([[m2]] − [[m1]])/[[m2]] considering only the descending mass.\r
\r
**Why it is wrong**\r
\r
The kinematic constraint of the inextensible rope couples both masses; net force must accelerate the complete system ([[m1]] + [[m2]]), not just one mass. The error produces accelerations greater than reality.\r
\r
**Detection signal**\r
\r
If your acceleration result exceeds the value of [[g]], you know you made this error, since in the ideal model acceleration is always less than gravity.\r
\r
**Conceptual correction**\r
\r
System acceleration is the driving force (weight difference) divided by total inertia (sum of masses). Both masses must accelerate simultaneously.\r
\r
**Contrast mini-example**\r
\r
With [[m1]] = 1 kg and [[m2]] = 5 kg, a student calculates [[a]] = (5−1)·9.8/5 = 7.84 m/s². The correct value is 6.53 m/s², dividing by the sum (6 kg) instead of [[m2]] alone.\r
\r
## Interpretation errors\r
\r
### Error 6: Interpreting zero acceleration as absence of tension\r
\r
**Why it seems correct**\r
\r
If there is no motion, "there are no active forces", so the student concludes tension must be zero when masses are in equilibrium.\r
\r
**Why it is wrong**\r
\r
In static equilibrium ([[m1]] = [[m2]]), acceleration is zero but tension is maximum relative to the minimum load condition. Tension equals the common weight, maintaining equilibrium. Zero tension only occurs if there is no rope or if the system falls freely uncoupled.\r
\r
**Detection signal**\r
\r
When in an equilibrium problem with equal masses, you answer that "tension is zero because there is no motion".\r
\r
**Conceptual correction**\r
\r
Tension and acceleration are independent magnitudes. You can have tension without acceleration (static equilibrium), acceleration without tension (free fall), or both simultaneously (accelerated coupled motion).\r
\r
**Contrast mini-example**\r
\r
Two 3 kg masses in equilibrium. The student says "tension = 0 N because they don't move". The correct value is 29.4 N, equal to each mass's weight, maintaining equilibrium.\r
\r
## Quick self-control rule\r
\r
Before considering a problem solved, verify:\r
\r
- Calculated tension is between both weights (greater than the smaller, less than the larger).\r
- Acceleration magnitude is less than gravity [[g]].\r
- When exchanging masses, acceleration changes sign but tension remains the same.\r
- If masses are equal, acceleration is zero but tension is not.\r
- Dimensions are coherent: acceleration in m/s², tension in N.\r
\r
If any verification fails, review your setup before trusting the result.\r
`;export{e as default};
