const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A test cart with mass [[m]] runs through a vertical loop of radius [[r]]. Determine whether contact is preserved at the top and estimate the normal force at the bottom for a given entry speed. The objective is not just to compute values, but to justify contact feasibility and load implications.\r
\r
Given data are [[m]] = 250 kg, [[r]] = 12 m, [[g]] = 9.8 m/s^2, and bottom entry speed [[vB]] = 28 m/s. You must compare top speed [[vT]] against the critical threshold and explain the physical role of [[Frad]] and [[Nn]] at both top and bottom locations.\r
\r
## Data\r
\r
- [[m]] = 250 kg\r
- [[r]] = 12 m\r
- [[g]] = 9.8 m/s^2\r
- [[vB]] = 28 m/s\r
- Ideal track assumption with negligible friction\r
\r
Core quantities to monitor:\r
\r
- [[vT]] for top-contact verification\r
- [[v]] as local speed profile along the trajectory\r
- [[Nn]] at top and bottom\r
- [[Frad]] as radial-demand reading\r
- [[ac]] as curvature demand indicator\r
- [[E]] to connect bottom and top states\r
\r
## System definition\r
\r
The system is modeled as a point mass constrained by a rigid circular track. At the top, radial inward direction points downward toward the center. At the bottom, radial inward direction points upward toward the center. This sign convention prevents common projection mistakes.\r
\r
Forces included in the model:\r
\r
- Weight [[m]] times [[g]], always downward.\r
- Normal force [[Nn]] from the track, perpendicular to the surface and radial at top and bottom.\r
\r
Friction is neglected to remain consistent with the ideal loop model of this leaf and to isolate contact-threshold logic.\r
\r
## Physical model\r
\r
The solution uses the five core leaf equations.\r
\r
{{f:radial_general}}\r
\r
{{f:punto_alto}}\r
\r
{{f:velocidad_minima_alto}}\r
\r
{{f:punto_bajo}}\r
\r
{{f:velocidad_minima_bajo}}\r
\r
This model combines local radial dynamics with global energy linkage. Local equations determine contact force. The energy-based threshold connects required top behavior with bottom entry conditions.\r
\r
## Model justification\r
\r
This model is appropriate because the question explicitly asks for contact condition and minimum operating speed in an ideal loop. A purely energetic approach would miss direct contact-force interpretation. A purely local-force approach without bottom-top linkage would miss entry-threshold logic.\r
\r
Validity relies on explicit assumptions: near-circular geometry, small dissipation compared with main kinetic energy, and no dominant out-of-plane coupling. If those assumptions fail systematically, a higher-fidelity model is required.\r
\r
## Symbolic solution\r
\r
1. Top-contact threshold:\r
\r
{{f:velocidad_minima_alto}}\r
\r
2. Bottom minimum speed to complete loop:\r
\r
{{f:velocidad_minima_bajo}}\r
\r
3. Top normal force evaluation:\r
\r
{{f:punto_alto}}\r
\r
4. Bottom normal force evaluation:\r
\r
{{f:punto_bajo}}\r
\r
5. Radial-demand interpretation:\r
\r
{{f:radial_general}}\r
\r
The causal sequence is: bottom entry speed -> achievable top speed -> top contact sign and margin -> bottom load level.\r
\r
## Numerical substitution\r
\r
First, compute top minimum speed with [[r]] = 12 m and [[g]] = 9.8 m/s^2. The threshold is approximately 10.84 m/s.\r
\r
Second, compute bottom minimum speed for loop completion. The threshold is approximately 24.25 m/s. Since given [[vB]] = 28 m/s, the setup exceeds the ideal minimum requirement.\r
\r
Third, estimate [[vT]] from conservation of [[E]] between bottom and top. The resulting [[vT]] is around 12.5 m/s, above threshold, so top contact should be maintained.\r
\r
Fourth, evaluate top [[Nn]] using the top radial equation. The value is positive, not near zero, indicating non-marginal contact.\r
\r
Finally, evaluate bottom [[Nn]] with the bottom equation. The normal is significantly above weight, confirming that the most severe load appears at the bottom even when top contact is safe.\r
\r
## Dimensional validation\r
\r
All force equations remain in MLT^{-2}. Critical-speed relations remain in LT^{-1}. Sign directions are consistent with the declared radial convention.\r
\r
Consistency checks:\r
\r
- [[Nn]] at top must be nonnegative in contact regime.\r
- [[vT]] must be at or above top threshold.\r
- Minimum [[vB]] must exceed top threshold due to height gain.\r
- [[ac]] should be larger at the bottom when [[vB]] is larger than [[vT]].\r
\r
These checks are satisfied, so the solution is physically coherent within the ideal model.\r
\r
## Physical interpretation\r
\r
The result has two complementary readings. First, top contact is governed by threshold margin, not by arbitrary comfort criteria. Second, bottom load can still be high even when top contact is robust. Therefore, "no detachment" is necessary but not sufficient for design quality.\r
\r
From an operational perspective, [[vB]] is often the most sensitive control variable because small entry-speed changes propagate strongly through loop dynamics. From a geometry perspective, [[r]] influences both thresholds and load distribution, so radius changes must be interpreted with scenario-specific speed policy.\r
\r
This example keeps direct continuity with the leaf theory: [[Frad]] expresses requirement, [[Nn]] expresses contact feasibility, [[E]] links states, and [[ac]] quantifies local curvature demand.\r
\r
# Real-world example\r
\r
## Context\r
\r
A dynamics-training facility uses a loop module to evaluate safety and comfort simultaneously. Operators must define an entry-speed window that preserves top contact while keeping bottom normal load below structural tolerance. Field tests show that slight speed reductions can approach top detachment, while aggressive speed increases create high bottom-load peaks.\r
\r
## Physical estimation\r
\r
The practical workflow starts from ideal minimum [[vB]] and then applies a margin policy based on measurement uncertainty and operating variability. If effective speed uncertainty is around 8 percent, teams set a buffer above critical threshold and verify that bottom [[Nn]] remains within acceptable range.\r
\r
For instance, if ideal minimum entry speed is 24.25 m/s, an 8 percent operational buffer pushes the target near 26.2 m/s. Choosing 28 m/s gives additional margin while still requiring a bottom-load check. This quantitative estimate prevents purely qualitative decisions.\r
\r
This gives a first operational window before higher-fidelity simulation. Even in ideal form, the method supports real decisions: when to allow testing, when to reduce speed, and when to escalate to extended modeling.\r
\r
## Interpretation\r
\r
The real-world case confirms the central message of the leaf: contact threshold is part of a broader trade-off between trajectory safety and load management. The transferable skill is not equation recall; it is causal interpretation across top and bottom constraints.\r
\r
It also clarifies model escalation logic. When measured behavior departs persistently from ideal prediction, dissipation and flexibility must be included. The baseline model is not discarded; it is upgraded according to observed failure signals.\r
`;export{e as default};
