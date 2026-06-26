const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A block of mass [[m]] moves on an inclined plane with angle [[theta]]. You must compute the contact normal force [[N]] in three scenarios: a base case with no additional perpendicular action, a forced-contact case with extra perpendicular force [[Fextn]] toward the plane, and a dynamic case with nonzero perpendicular acceleration [[aperp]].\r
\r
The task requires more than numeric substitution: you must justify which leaf equation applies in each scenario and verify whether contact remains physically active.\r
\r
## Data\r
\r
Use representative values:\r
\r
- [[m]] = 4.0 kg\r
- [[g]] = 9.8 m/s^2\r
- [[theta]] = 30 degrees\r
- Case A: [[Fextn]] = 0 N, [[aperp]] = 0 m/s^2\r
- Case B: [[Fextn]] = 5 N toward the plane, [[aperp]] = 0 m/s^2\r
- Case C: [[Fextn]] = 2 N away from the plane, [[aperp]] = 0.4 m/s^2 in the chosen positive perpendicular direction\r
\r
Sign convention: positive perpendicular axis points away from the plane.\r
\r
## System definition\r
\r
System: rigid block modeled as a particle in unilateral contact with a rigid plane.\r
\r
Axes:\r
\r
- Tangential axis parallel to the plane.\r
- Perpendicular axis normal to the plane.\r
\r
Core leaf magnitudes used: [[N]], [[m]], [[g]], [[theta]], [[Fextn]], [[aperp]].\r
\r
Assumptions for baseline reasoning:\r
\r
- Active contact holds unless the computed result contradicts it.\r
- Plane geometry is well represented by a single [[theta]].\r
- No hidden perpendicular interactions beyond the declared terms.\r
\r
## Physical model\r
\r
The leaf model states that [[N]] is determined by the perpendicular force-dynamics balance, not by total weight alone. In the basic inclined case with no extra forcing and no perpendicular acceleration, [[N]] is obtained from the base inclined relation. When perpendicular forcing or perpendicular dynamics is present, the general balance must be used.\r
\r
After computation, the unilateral contact condition must be checked. This makes model validity explicit and prevents accepting unphysical results.\r
\r
## Model justification\r
\r
This model is justified because the question is explicitly perpendicular to the plane. It requires separating:\r
\r
1. Weight projection controlled by [[theta]].\r
2. Additional perpendicular forcing [[Fextn]].\r
3. Perpendicular dynamics captured by [[aperp]].\r
\r
Using a single simplified expression for all three scenarios would hide real causal differences and produce weak engineering interpretation.\r
\r
## Symbolic solution\r
\r
Horizontal benchmark relation:\r
\r
{{f:normal_horizontal_base}}\r
\r
Inclined base relation:\r
\r
{{f:normal_inclinado_base}}\r
\r
General perpendicular balance:\r
\r
{{f:balance_perpendicular_general}}\r
\r
Unilateral contact condition:\r
\r
{{f:condicion_contacto}}\r
\r
Useful rearrangement for gravity inference in the benchmark case:\r
\r
{{f:gravedad_desde_normal_horizontal}}\r
\r
Scenario A uses the inclined base relation.\r
\r
Scenario B uses the general balance with inward [[Fextn]].\r
\r
Scenario C uses the full general balance with outward [[Fextn]] and nonzero [[aperp]].\r
\r
All scenarios end with a contact-condition check on [[N]].\r
\r
## Numerical substitution\r
\r
For [[theta]]=30 degrees, cos([[theta]]) is approximately 0.866.\r
\r
Perpendicular weight projection: [[m]]·[[g]]·cos([[theta]]) = 4.0·9.8·0.866 = 33.95 N (approx).\r
\r
Scenario A:\r
\r
- [[N]]_A = 33.95 N (approx)\r
\r
Scenario B (extra inward forcing):\r
\r
- [[N]]_B = 33.95 + 5.00 = 38.95 N (approx)\r
\r
Scenario C (outward forcing plus perpendicular dynamics):\r
\r
- [[N]]_C = 4.0·0.4 + 33.95 - 2.0 = 33.55 N (approx)\r
\r
All three values remain positive in this dataset, so active contact is preserved.\r
\r
## Dimensional validation\r
\r
Unit check:\r
\r
- [[m]] in kg\r
- [[g]] and [[aperp]] in m/s^2\r
- [[m]] times acceleration in N\r
- [[Fextn]] in N\r
- resulting [[N]] in N\r
\r
Each term in the general perpendicular balance has force units, so the equation is dimensionally consistent.\r
\r
Physical trend check:\r
\r
1. Base inclined [[N]] is below total weight magnitude, consistent with projection logic.\r
2. Inward [[Fextn]] increases [[N]], as expected.\r
3. Outward forcing tends to reduce [[N]], potentially approaching detachment in stronger cases.\r
\r
## Physical interpretation\r
\r
The key interpretation is causal and operational. [[N]] is a state-dependent contact reaction governed by geometry, external perpendicular forcing, and perpendicular dynamics. It is not a fixed block property.\r
\r
This matters in design review: a configuration that looks safe under nominal static assumptions can become marginal under transient [[aperp]] and outward [[Fextn]]. Therefore, reliable decisions require margin analysis, not just one nominal value.\r
\r
The example also reinforces model selection discipline: use the simplest relation compatible with assumptions, and switch to the general balance as soon as additional terms become physically relevant.\r
\r
# Real-world example\r
\r
## Context\r
\r
An inclined packaging conveyor guides boxes of variable [[m]] along a rigid support. Engineers track [[N]] because contact load affects wear, vibration transfer, and side-guide reliability. The operating angle [[theta]] is adjusted by shift, and a pneumatic actuator can apply additional perpendicular action [[Fextn]] for guidance correction.\r
\r
During start and stop phases, measured motion reveals small but non-negligible perpendicular acceleration [[aperp]]. The team needs an interpretable operating envelope, not a single textbook point.\r
\r
## Physical estimation\r
\r
A practical operating sweep is defined:\r
\r
- [[theta]] from 15 to 35 degrees\r
- [[Fextn]] from -4 N (outward) to +8 N (inward)\r
- [[aperp]] from -0.3 to +0.5 m/s^2\r
\r
Applying the general balance across this envelope yields a range of [[N]] values. The minimum [[N]] appears when angle is high, forcing is outward, and perpendicular acceleration is unfavorable under the chosen sign convention. That corner becomes the critical contact-risk case.\r
\r
Using a representative payload [[m]]=4.0 kg and [[g]]=9.8 m/s^2, a quick envelope estimate gives:\r
\r
- At [[theta]]=15 degrees, inward [[Fextn]]=+8 N, and favorable [[aperp]]=+0.5 m/s^2, [[N]] is roughly in the low 40 N range.\r
- At [[theta]]=35 degrees, outward [[Fextn]]=-4 N, and unfavorable [[aperp]]=-0.3 m/s^2, [[N]] drops toward the high 20 N range.\r
\r
This spread is large enough to affect wear rate, guidance stability, and safety margin policy, so the envelope analysis is operationally meaningful rather than merely academic.\r
\r
The engineering team sets a minimum allowable [[N]] margin to ensure robust guidance and repeatable sensing.\r
\r
## Interpretation\r
\r
This application shows why the leaf is not merely symbolic. The same core magnitudes [[N]], [[m]], [[g]], [[theta]], [[Fextn]], and [[aperp]] directly drive operating limits, actuator policies, and safety checks.\r
\r
It also demonstrates continuity between theory and practice: equations define the causal map, while interpretation converts that map into decisions about acceptable angle range, forcing strategy, and transient profile control.\r
`;export{e as default};
