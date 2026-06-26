const n=`## Conceptual errors\r
\r
### Error\r
Assuming every work problem can be solved with one constant-force shortcut.\r
\r
Why it seems correct\r
The constant-force expression is learned early and often gives fast classroom answers.\r
\r
Detection signal\r
The solution skips profile discussion and never defines the interval between [[x1]] and [[x2]].\r
\r
Mini-contrast example\r
Two different force profiles with equal net displacement can yield very different [[W]].\r
\r
Conceptual correction\r
Identify profile variability first and treat [[W]] as signed accumulation.\r
\r
### Error\r
Reading [[W]] as positive magnitude only.\r
\r
Why it seems correct\r
Energy is colloquially described as always positive.\r
\r
Detection signal\r
No sign interpretation is provided for transfer direction.\r
\r
Mini-contrast example\r
One region can add transfer while another removes it, so net value is not magnitude sum.\r
\r
Conceptual correction\r
Keep signed contributions and explain final causal meaning.\r
\r
## Model errors\r
\r
### Error\r
Using constant-[[k]] linear closure outside linear response range.\r
\r
Why it seems correct\r
Closed-form expression is compact and computationally attractive.\r
\r
Detection signal\r
Mismatch against measurements grows consistently near interval extremes.\r
\r
Mini-contrast example\r
Real spring behavior can deviate from linear law at high extension/compression.\r
\r
Conceptual correction\r
Validate linear range before applying constant [[k]], then escalate to segmented modeling when needed.\r
\r
### Error\r
Mixing spatial references for [[x1]] and [[x2]].\r
\r
Why it seems correct\r
Reference shifts are introduced mid-solution to simplify local algebra.\r
\r
Detection signal\r
Recomputing with one consistent reference changes sign or scale unexpectedly.\r
\r
Mini-contrast example\r
The same process may look like input or extraction depending on inconsistent bounds.\r
\r
Conceptual correction\r
Fix one reference at the beginning and preserve it throughout.\r
\r
## Mathematical errors\r
\r
### Error\r
Integrating in one pass across sign changes without segmentation.\r
\r
Why it seems correct\r
A single integral looks cleaner than piecewise treatment.\r
\r
Detection signal\r
Numerical output conflicts with oriented-area graph reading.\r
\r
Mini-contrast example\r
If part of the profile is above and part below axis, cancellation must appear in net transfer.\r
\r
Conceptual correction\r
Split domain by sign regime and sum signed segment contributions.\r
\r
### Error\r
Partial unit conversion in [[Fmed]] or bounds.\r
\r
Why it seems correct\r
The final scalar can still look plausible.\r
\r
Detection signal\r
Large mismatch appears when compared with integral benchmark.\r
\r
Mini-contrast example\r
Mixing centimeters and meters can shift [[W]] by large factors.\r
\r
Conceptual correction\r
Normalize SI units before substitution and run dimensional closure.\r
\r
## Interpretation errors\r
\r
### Error\r
Reporting a final number without model-validity statement.\r
\r
Why it seems correct\r
Many assessment habits reward numbers more than model commentary.\r
\r
Detection signal\r
No escalation trigger or tolerance statement is included.\r
\r
Mini-contrast example\r
Two methods may agree in one case and diverge strongly after small boundary changes.\r
\r
Conceptual correction\r
Include scope, bias sources, and escalation policy with the result.\r
\r
### Error\r
Presenting estimated work as exact work.\r
\r
Why it seems correct\r
Average-force output appears definitive when written as one scalar.\r
\r
Detection signal\r
No estimate label and no uncertainty rationale are provided.\r
\r
Mini-contrast example\r
Highly nonlinear profiles can make average-force estimates systematically biased.\r
\r
Conceptual correction\r
Label estimate explicitly and attach a tolerance argument.\r
\r
## Quick self-control rule\r
\r
1. Declare system, reference, and bounds [[x1]] and [[x2]].\r
2. Choose exact integral, segmented integral, or [[Fmed]] with justification.\r
3. Preserve signed contributions.\r
4. Validate dimensions and order of magnitude.\r
5. Close with physical meaning plus model-validity limit.`;export{n as default};
