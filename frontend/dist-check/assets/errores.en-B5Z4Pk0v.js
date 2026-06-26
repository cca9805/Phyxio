const e=`# Common errors: Hanging Block\r
\r
## Conceptual errors\r
\r
### Error 1: Believing that tension always equals weight\r
\r
**Why it seems correct**\r
\r
In the most common situation (hanging block at rest), tension effectively equals weight. The student generalises this equality to all situations, thinking the cable "transmits" the weight mechanically without possibility of variation.\r
\r
**Why it is wrong**\r
\r
Tension is a constraint force that adapts to dynamic conditions. It only equals weight when acceleration is zero. In upward accelerated motion, tension exceeds weight; in braking or downward accelerated motion, it is less than weight. In free fall, it approaches zero. Tension is not a fixed consequence of weight but an independent variable that controls motion.\r
\r
**Detection signal**\r
\r
If when solving an acceleration problem the student writes [[T]] = [[W]] directly without justifying equilibrium, or calculates an acceleration without verifying that [[T]] differs from [[W]], they are making this error.\r
\r
**Conceptual correction**\r
\r
Always distinguish between weight (fixed gravitational force for a given mass) and tension (variable constraint force). The vertical second law equation explicitly shows that the difference between both produces acceleration.\r
\r
{{f:dinamica_vertical}}\r
\r
If tension and weight are equal, there is no acceleration.\r
\r
**Contrast mini-example**\r
\r
A 5 kg block hangs from a dynamometer. At rest, the dynamometer reads 49 N (the weight). If we lift the block with acceleration of 2 m/s², the reading rises to 59 N. If we lower it with the same acceleration magnitude, the reading drops to 39 N. Tension varies; weight remains 49 N.\r
\r
### Error 2: Using mass instead of weight in the dynamic equation\r
\r
**Why it seems correct**\r
\r
The student remembers that gravity is involved but confuses the magnitude mass [[m]] with the force weight [[W]]. Since both are related by [[g]], in quick mental calculations the numerical values seem close (for example, 10 kg vs 98 N), which reinforces the confusion.\r
\r
**Why it is wrong**\r
\r
Newton's second law requires forces (units of newtons) on the left side. Mass is an inertial property, not a force. The vertical dynamic equation requires that [[T]] and [[W]] be comparable forces.\r
\r
{{f:dinamica_vertical}}\r
\r
Using [[m]] directly violates dimensional homogeneity and produces absurd results (accelerations of 100 m/s² or more).\r
\r
**Detection signal**\r
\r
If calculations produce accelerations of order 10 m/s² when they should be of order g, or if equilibrium tension appears as 10 N for a 10 kg mass (instead of 98 N), the student is probably using mass instead of weight.\r
\r
**Conceptual correction**\r
\r
Explicitly convert mass to weight via the gravitational weight formula before applying the second law.\r
\r
{{f:peso_gravitatorio}}\r
\r
Always check dimensions: if you subtract mass from force, the units do not match.\r
\r
**Contrast mini-example**\r
\r
A student calculates equilibrium tension for an 8 kg block and obtains 8 N (using mass directly). The correct answer is 78.4 N (using weight). The error is almost an order of magnitude, which would be catastrophic in cable design.\r
\r
## Model errors\r
\r
### Error 3: Ignoring the cable's weight in real systems\r
\r
**Why it seems correct**\r
\r
The leaf's idealised model assumes massless cable. The student applies this idealisation to real situations where the cable does have appreciable mass, especially in systems with long cables (cranes, mine shafts).\r
\r
**Why it is wrong**\r
\r
In cables of several metres or more, the cable's own weight adds additional load that the upper part must support. A 10 m long steel cable can weigh tens of newtons, comparable to the weight of small loads. Ignoring this weight underestimates maximum tension and can lead to selecting unsafe cables.\r
\r
**Detection signal**\r
\r
When the problem mentions "steel cable", "50 m cable" or similar, and the student only calculates the payload weight without considering the cable itself.\r
\r
**Conceptual correction**\r
\r
The leaf's model is valid for short cables where the cable's weight is negligible compared to the load. For long cables, tension varies along the cable (it is maximum at the top and minimum at the bottom) and the analysis requires integration or elastic wave methods.\r
\r
**Contrast mini-example**\r
\r
A 100 kg load suspended from a 20 m steel cable: the load's weight is 980 N, but the cable adds about 150 N additional. The tension at the top is 1130 N, 15 % higher than what the simple model would calculate.\r
\r
## Mathematical errors\r
\r
### Error 4: Inconsistent signs in the vertical direction\r
\r
**Why it seems correct**\r
\r
The student assumes "upward is positive" and writes [[T]] positive and [[W]] negative, but then in the equation subtracts both as if they were magnitudes. The confusion between vector and scalar leads to incorrect signs in acceleration.\r
\r
**Why it is wrong**\r
\r
The second law requires algebraic sum with signs according to the chosen axis. If the positive axis is upward, [[T]] is positive and [[W]] is negative, so the equation is [[T]] − [[W]] = [[m]]·[[a]]. If subtracted as absolute magnitudes ([[T]] − [[W]] without considering signs), the result is only correct when [[T]] > [[W]].\r
\r
**Detection signal**\r
\r
If the student obtains positive acceleration when calculating that tension is less than weight (which should produce a fall), there is a sign error. Or if the acceleration magnitude is correct but the direction is opposite to expected.\r
\r
**Conceptual correction**\r
\r
Explicitly define the positive axis before setting up the equation. Assign consistent signs: forces upward positive, downward negative (or vice versa, but consistently). Verify that the result's sign makes physical sense.\r
\r
**Contrast mini-example**\r
\r
A block with weight of 50 N and tension of 30 N. With positive axis upward: (+30 N) + (−50 N) = [[m]]·[[a]], giving negative [[a]] (fall). If written as 30 − 50 without explicit signs, the result −20 is correct in magnitude but ambiguous in interpretation. If written as 30 + 50 by mistake, absurd positive acceleration is obtained.\r
\r
## Interpretation errors\r
\r
### Error 5: Interpreting that "rising faster" requires greater tension\r
\r
**Why it seems correct**\r
\r
Everyday intuition associates "fast" with "strong". We think that to move something quickly we must push harder. This mechanical intuition confuses velocity with acceleration.\r
\r
**Why it is wrong**\r
\r
Once the block reaches a certain upward velocity, maintaining that constant velocity does not require net force. Tension exactly equals weight, regardless of how fast it rises. Extra tension is only needed during initial acceleration, not during uniform motion.\r
\r
**Detection signal**\r
\r
If the student says that an elevator rising at 5 m/s requires greater tension than the same elevator rising at 1 m/s (both at constant velocity), they are confusing velocity with acceleration.\r
\r
**Conceptual correction**\r
\r
Remember Newton's first law: constant velocity (including zero) implies force equilibrium. Tension depends on acceleration, not velocity. Once in uniform motion, the system does not "know" how fast it is moving, only that it is not accelerating.\r
\r
**Contrast mini-example**\r
\r
Two identical elevators: one rises at 1 m/s constant, another at 5 m/s constant. Both have [[a]] = 0, so both require [[T]] = [[W]] (say 10 000 N). To start moving from rest to 1 m/s or to 5 m/s, acceleration and temporary extra tension are indeed needed; but during uniform ascent, tension is identical.\r
\r
## Quick self-control rule\r
\r
After solving any hanging block problem, apply this verification sequence:\r
\r
1. Check that weight ([[W]]) was used, not mass ([[m]]), directly in the dynamic equation.\r
2. Verify that signs are consistent with the chosen vertical axis.\r
3. Confirm that result dimensions are \`[L T⁻²]\` for acceleration and \`[M L T⁻²]\` for forces.\r
4. Validate that [[T]] = [[W]] when [[a]] = 0 (equilibrium case).\r
5. Verify that [[a]] direction makes physical sense: positive when [[T]] > [[W]], negative when [[T]] < [[W]].\r
`;export{e as default};
