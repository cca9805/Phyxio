const e=`\uFEFF# Bernoulli's Equation — Common Errors\r
\r
## Conceptual errors\r
\r
### Error 1: believing that higher pressure implies higher velocity\r
\r
#### Why it seems correct\r
In everyday life we associate pressure with force and fast motion: "more pressure means water comes out harder."\r
\r
#### Why it is incorrect\r
Bernoulli's equation says exactly the opposite in a duct: where velocity [[v]] increases, pressure [[p]] must drop to conserve total energy [[H]]. Higher velocity consumes pressure energy.\r
\r
#### Detection signal\r
The student claims that at the throat of a Venturi the pressure is maximum because the fluid is "squeezed harder."\r
\r
#### Conceptual correction\r
Repeat the causal chain: smaller section → higher velocity → lower static pressure. Total pressure is conserved, not static pressure.\r
\r
#### Mini-example\r
In a garden hose, partially blocking the outlet (smaller section) makes water come out faster, but the static pressure at that point is lower, not higher.\r
\r
### Error 2: applying Bernoulli between points not on the same streamline\r
\r
#### Why it seems correct\r
Bernoulli appears to be a universal formula and the student applies it between any two points in the fluid.\r
\r
#### Why it is incorrect\r
The constancy of [[H]] is only guaranteed along a single particle trajectory. Between different streamlines, [[H]] may vary if the flow has vorticity.\r
\r
#### Detection signal\r
A point inside a jet is compared with a point in the surrounding quiescent fluid without justifying that they lie on the same streamline.\r
\r
#### Conceptual correction\r
Before substituting, draw the fluid trajectory and verify that the two chosen points lie on it.\r
\r
#### Mini-example\r
In a tank with a lateral orifice, the free-surface point and the exit-jet point are connected by the same streamline. But a point on the opposite wall is not necessarily connected.\r
\r
## Model errors\r
\r
### Error 3: ignoring head losses in real pipes\r
\r
#### Why it seems correct\r
The ideal equation has no friction terms and results "close" algebraically.\r
\r
#### Why it is incorrect\r
In long pipes or those with fittings, viscosity dissipates mechanical energy as heat. The ideal model overestimates velocity and flow rate.\r
\r
#### Detection signal\r
The calculated flow rate far exceeds the measured value, or the exit velocity seems physically impossible.\r
\r
#### Conceptual correction\r
Compare ideal energy with expected losses using Darcy-Weisbach. If h_f exceeds 5 % of the available head, the ideal model is no longer sufficient.\r
\r
#### Mini-example\r
A smooth pipe 30 m long and 5 cm in diameter connecting two tanks with 10 m of head: the ideal model predicts 14 m/s, but real-loss calculation yields less than 3 m/s.\r
\r
### Error 4: using Bernoulli when the flow is compressible\r
\r
#### Why it seems correct\r
Air seems light and the student does not think about compressibility effects.\r
\r
#### Why it is incorrect\r
At velocities near or above Mach 0.3, density [[rho]] can no longer be treated as constant and the incompressible equation underestimates the actual velocity.\r
\r
#### Detection signal\r
The calculated velocity exceeds 100 m/s in air and the student does not question the validity of the result.\r
\r
#### Conceptual correction\r
Always check the Mach number: if Ma > 0.3, use the compressible form of Bernoulli or isentropic relations.\r
\r
#### Mini-example\r
In a ventilation duct with air at 120 m/s, Ma is approximately 0.35. The error from using the incompressible model can reach 10 %.\r
\r
## Mathematical errors\r
\r
### Error 5: mixing absolute and gauge pressure\r
\r
#### Why it seems correct\r
Field gauges read relative (gauge) pressure, and the student inserts it directly without converting.\r
\r
#### Why it is incorrect\r
In Bernoulli's equation, if one point uses absolute pressure and the other gauge pressure, a systematic error close to 101 325 Pa appears.\r
\r
#### Detection signal\r
The result changes drastically if atmospheric pressure is added to or subtracted from a datum.\r
\r
#### Conceptual correction\r
State at the start of the problem whether absolute or gauge pressures are used and maintain consistency at both points.\r
\r
#### Mini-example\r
If one pressure is 200 kPa absolute and the other is 100 kPa gauge, the real difference is near minus 1.3 kPa, not 100 kPa.\r
\r
### Error 6: forgetting the factor 2 in the velocity head\r
\r
#### Why it seems correct\r
When isolating velocity from kinetic energy, the one-half factor is easily lost in long algebraic chains.\r
\r
#### Why it is incorrect\r
Omitting the factor 2 produces a 41 % error in the calculated velocity.\r
\r
#### Detection signal\r
The calculated velocity appears about 1.41 times above or below what is expected.\r
\r
#### Conceptual correction\r
Before substituting, write the complete formula with all factors and verify dimensions.\r
\r
#### Mini-example\r
For a 5 m head, the correct speed is about 9.9 m/s; forgetting the factor 2 drops the result to about 7.0 m/s, around 29 % less.\r
\r
## Interpretation errors\r
\r
### Error 7: closing the exercise with a number without physical reading\r
\r
#### Why it seems correct\r
The calculation closes and the number has the correct units.\r
\r
#### Why it is incorrect\r
A numerical result without physical context cannot reveal whether it is reasonable. An exit velocity of 300 m/s in water should trigger an immediate alarm.\r
\r
#### Detection signal\r
The student cannot anticipate what would change if a key hypothesis of the problem is modified.\r
\r
#### Conceptual correction\r
Every solution should end with a sentence interpreting the result in the problem's context and verifying whether it falls within the expected range.\r
\r
#### Mini-example\r
A speed of 9.9 m/s equals the free-fall velocity from 5 m. This result is consistent with Torricelli and confirms the total conversion of potential energy into kinetic energy.\r
\r
## Quick self-control rule\r
Before closing a Bernoulli problem: (1) verify that both points lie on the same streamline, (2) check that all pressures are of the same type (absolute or gauge), (3) confirm Ma lower than 0.3 and steady flow, and (4) interpret the sign and magnitude of the result in physical terms.\r
\r
`;export{e as default};
