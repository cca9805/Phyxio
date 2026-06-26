const n=`# Frequent mistakes\r
\r
## Conceptual errors\r
\r
### Error 1: treating periodicity as if causality were irrelevant\r
\r
Why it seems correct:\r
A smooth [[x]] curve may create the illusion that every cycle is trivial and that [[v]] and [[a]] add no new information.\r
\r
Detection sign:\r
The explanation does not describe sign and magnitude changes of [[v]] and [[a]] through the cycle.\r
\r
Mini contrast example:\r
Two instants can share the same [[x]] value while having opposite [[v]] and different physical meaning.\r
\r
Conceptual correction:\r
In SHM, full state reading requires combined interpretation of [[x]], [[v]], and [[a]] over time.\r
\r
### Error 2: assuming [[phi]] is only a numeric offset\r
\r
Why it seems correct:\r
In basic exercises, [[phi]] appears to only shift plots without physical consequences.\r
\r
Detection sign:\r
Results are reported without clarifying initial condition or reference instant.\r
\r
Mini contrast example:\r
With identical [[A]] and [[omega]], different [[phi]] values define different initial states.\r
\r
Conceptual correction:\r
[[phi]] carries initial-condition meaning and must be physically justified.\r
\r
## Model errors\r
\r
### Error 3: using ideal SHM outside the linear range\r
\r
Why it seems correct:\r
The ideal equation is compact and visually convincing over many datasets.\r
\r
Detection sign:\r
Increasing [[A]] changes waveform shape, yet the same model is kept without domain discussion.\r
\r
Mini contrast example:\r
Once nonlinear behavior appears, phase and amplitude consistency can break.\r
\r
Conceptual correction:\r
Check validity limits first, then accept parameter interpretation.\r
\r
### Error 4: ignoring relevant forcing or energy loss\r
\r
Why it seems correct:\r
Ideal form is used by default and systematic mismatches are labeled as minor noise.\r
\r
Detection sign:\r
Amplitude drifts cycle by cycle and no model revision is considered.\r
\r
Mini contrast example:\r
A monotonic envelope trend often indicates damping rather than random error.\r
\r
Conceptual correction:\r
When drift is sustained, move to damped or forced models explicitly.\r
\r
## Mathematical errors\r
\r
### Error 5: mixing time units without normalization\r
\r
Why it seems correct:\r
Numeric values look close enough, so substitutions are made directly.\r
\r
Detection sign:\r
[[omega]] and [[t]] are taken in incompatible time units.\r
\r
Mini contrast example:\r
Missing one conversion changes accumulated phase and can invert interpretation.\r
\r
Conceptual correction:\r
Normalize units before numerical substitution.\r
\r
### Error 6: finishing with isolated arithmetic and no dimensional check\r
\r
Why it seems correct:\r
The final number looks reasonable and is accepted.\r
\r
Detection sign:\r
No verification is done to confirm that reported quantity has correct units.\r
\r
Mini contrast example:\r
A computed [[v]] expressed with length-only units reveals inconsistent operations.\r
\r
Conceptual correction:\r
Add dimensional checks at the end of each solving stage.\r
\r
## Interpretation errors\r
\r
### Error 7: reading every mismatch as pure measurement error\r
\r
Why it seems correct:\r
Any difference between prediction and data is immediately labeled as noise.\r
\r
Detection sign:\r
No sensitivity test is run for plausible shifts in [[phi]] or [[omega]].\r
\r
Mini contrast example:\r
A small change in [[phi]] may explain phase mismatch without invalidating data.\r
\r
Conceptual correction:\r
Separate measurement error, parameter uncertainty, and model limits.\r
\r
### Error 8: reporting numbers without causal meaning\r
\r
Why it seems correct:\r
Fast grading culture often rewards final numbers over interpretation.\r
\r
Detection sign:\r
No statement explains what the result implies for dynamic behavior.\r
\r
Mini contrast example:\r
Two cases with equal [[A]] but different [[omega]] may require opposite design choices.\r
\r
Conceptual correction:\r
Close each solution with explicit physical reading of stability, phase, and use-case impact.\r
\r
## Quick self-control rule\r
\r
1. Identify target magnitude before operating.\r
2. Check linearity assumptions and initial conditions.\r
3. Verify coherence among [[x]], [[v]], and [[a]].\r
4. Confirm units and order of magnitude.\r
5. Translate results into a concrete physical conclusion.\r
`;export{n as default};
