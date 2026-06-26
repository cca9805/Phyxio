const n=`## Conceptual errors\r
### Error 1: Interpreting [[tau]] as full completion time\r
Why it looks right:\r
In informal explanations, students often hear that one time constant means the circuit is charged.\r
Detection signal:\r
The solution assumes no relevant transient remains after one characteristic interval.\r
Mini-contrast example:\r
Measured [[Vc]] at one and three characteristic intervals still differs significantly.\r
Conceptual correction:\r
[[tau]] is a scale of exponential approach, not exact completion time.\r
\r
### Error 2: Ignoring initial condition [[V0]]\r
Why it looks right:\r
Many introductory examples start from zero initial state.\r
Detection signal:\r
The same charging relation is applied regardless of prior state.\r
Mini-contrast example:\r
After rapid switching, capacitor keeps memory and trajectory does not match zero-start assumption.\r
Conceptual correction:\r
Always declare initial and final states before selecting equations.\r
\r
## Model errors\r
### Error 1: Forcing one-pole behavior in multi-scale data\r
Why it looks right:\r
A single exponential fit can appear visually acceptable over part of the waveform.\r
Detection signal:\r
Residuals show systematic mismatch near beginning and tail.\r
Mini-contrast example:\r
Two distinct slope regions appear in semilog view of measured response.\r
Conceptual correction:\r
Escalate to an extended model when one dominant scale is not supported by data.\r
\r
### Error 2: Assuming strict linearity outside operating range\r
Why it looks right:\r
Equivalent values of [[R]] and [[C]] seem constant in moderate conditions.\r
Detection signal:\r
Fitted parameters shift strongly with excitation amplitude.\r
Mini-contrast example:\r
Low-level signals match model, high-level signals show persistent deviation.\r
Conceptual correction:\r
Reassess validity domain and include nonlinear or loading effects when needed.\r
\r
## Mathematical errors\r
### Error 1: Unit inconsistency in [[R]], [[C]], or [[t]]\r
Why it looks right:\r
Calculator outputs can look plausible even with mixed units.\r
Detection signal:\r
Estimated [[tau]] lands in an implausible time scale for the application.\r
Mini-contrast example:\r
Two analysts using same hardware obtain scales separated by several orders of magnitude.\r
Conceptual correction:\r
Normalize to SI units before evaluating exponential terms.\r
\r
### Error 2: Treating [[I]] as constant during transient\r
Why it looks right:\r
Students transfer pure-resistor intuition into storage dynamics.\r
Detection signal:\r
Predicted power profile conflicts with measured startup behavior.\r
Mini-contrast example:\r
Current probe shows clear decay while calculation reports flat level.\r
Conceptual correction:\r
In simple RC charging, current is transient and decays in time.\r
\r
### Error 3: Losing sign consistency\r
Why it looks right:\r
Reference polarity is left implicit.\r
Detection signal:\r
Computed trend moves away from expected target state.\r
Mini-contrast example:\r
A discharge case predicts growing magnitude without active source.\r
Conceptual correction:\r
Fix sign convention once and keep it through all steps.\r
\r
## Interpretation errors\r
### Error 1: Over-trusting one sample point\r
Why it looks right:\r
A single value can match expectation and create false confidence.\r
Detection signal:\r
Conclusions are made without checking full trend of [[Vc]] and [[I]].\r
Mini-contrast example:\r
Midpoint value is acceptable, but settling tail violates specification.\r
Conceptual correction:\r
Interpret full trajectory, not isolated points.\r
\r
### Error 2: Confusing numerical precision with physical validity\r
Why it looks right:\r
Many decimal digits look authoritative.\r
Detection signal:\r
No plausibility check against order-of-magnitude expectations.\r
Mini-contrast example:\r
Highly precise value contradicts typical startup behavior seen in lab.\r
Conceptual correction:\r
Validate physics first, then refine arithmetic precision.\r
\r
### Error 3: Ignoring design tradeoffs\r
Why it looks right:\r
Only one metric is optimized, usually speed.\r
Detection signal:\r
[[tau]] is reduced without checking startup current impact.\r
Mini-contrast example:\r
Fast response is achieved but resistor thermal stress becomes unacceptable.\r
Conceptual correction:\r
Evaluate speed, current stress, and robustness together.\r
\r
## Quick self-control rule\r
Before accepting an RC solution, run this short checklist:\r
1. Initial and final conditions are explicitly declared with [[V0]] and [[Vf]].\r
2. [[R]], [[C]], and [[t]] are in coherent SI units.\r
3. [[Vc]] trend matches charging or discharging scenario.\r
4. [[I]] behavior is transient and physically plausible.\r
5. Order-of-magnitude check supports the obtained result.\r
\r
If any item fails, the issue is usually conceptual-modeling quality, not merely arithmetic detail.\r
`;export{n as default};
