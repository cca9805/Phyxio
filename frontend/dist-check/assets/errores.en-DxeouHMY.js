const e=`# Frequent mistakes in critical damping\r
\r
## Conceptual errors\r
\r
### Error 1: treating the critical boundary as no dynamics at all\r
\r
Why it seems correct:\r
Students may think that if the system is critical, “nothing interesting happens” because no visible oscillation appears in [[x]].\r
\r
Detection sign:\r
Their explanation removes the role of [[tau]], [[omega0]], and time evolution [[t]], as if the response were instantaneous.\r
\r
Mini contrast example:\r
Two critical systems with different [[omega0]] do not oscillate, but they do not settle equally fast. The one with larger [[omega0]] (smaller [[tau]]) settles earlier.\r
\r
Conceptual correction:\r
Critical does not mean static. It means a dynamic boundary between under and over regimes, with an active and informative transient.\r
\r
### Error 2: assuming “critical” is always the best design choice\r
\r
Why it seems correct:\r
People often assume that reducing oscillation always optimizes overall performance.\r
\r
Detection sign:\r
No multi-objective evaluation is done (energy, wear, robustness, sensitivity); only “avoid oscillation” is used.\r
\r
Mini contrast example:\r
In a high-noise measurement setting, a slightly overdamped tuning may outperform exact critical tuning in robustness.\r
\r
Conceptual correction:\r
The critical regime is a strong reference, not a universal recipe. Final choice depends on mission objectives and operating context.\r
\r
## Model errors
\r
### Error 3: using the critical model outside its domain\r
\r
Why it seems correct:\r
The equation fits several textbook cases and yields plausible numbers.\r
\r
Detection sign:\r
Real signals show overshoot or slope changes incompatible with critical behavior, yet the same model is forced.\r
\r
Mini contrast example:\r
If [[gamma]] drops below [[omega0]], damped oscillation appears. Forcing the critical model hides that regime shift.\r
\r
Conceptual correction:\r
Check the regime condition by comparing [[gamma]] with [[omega0]] before using the critical response to read [[x]].
\r
### Error 4: ignoring parameter drift\r
\r
Why it seems correct:\r
Only nominal values are used and possible variation of [[gamma]] with load or temperature is ignored.\r
\r
Detection sign:\r
Model matches one test but fails systematically in another with changed conditions.\r
\r
Mini contrast example:\r
Two tests with the same [[A]] and [[omega0]] can still produce different effective settling times if [[gamma]] drifts during operation.\r
\r
Conceptual correction:\r
When drift is relevant, use an extended model or recalibrate by time segments.\r
\r
## Mathematical errors\r
\r
### Error 5: mixing units in time-related quantities\r
\r
Why it seems correct:\r
Numbers look similar in magnitude, so substitution is done without unit normalization.\r
\r
Detection sign:\r
[[tau]] is reported in milliseconds when seconds were expected, or the opposite, without explanation.\r
\r
Mini contrast example:\r
Using [[omega0]] in rad/ms in a formula expecting rad/s shifts [[tau]] by a factor of 1000.\r
\r
Conceptual correction:\r
Normalize to SI units first and check dimensional consistency at each step.\r
\r
### Error 6: losing traceability between formula and target quantity\r
\r
Why it seems correct:\r
Algebra looks correct, but the computed variable is not the requested one.\r
\r
Detection sign:\r
[[gamma]] is computed when the task requested [[x]] at a specific [[t]], or [[tau]] is reported without physical interpretation.\r
\r
Mini contrast example:\r
A settling problem typically needs [[tau]] first and then [[x]] at decision-relevant time. Skipping that sequence weakens meaning.\r
\r
Conceptual correction:\r
Define the target variable early and preserve physical causality in the solving order.\r
\r
## Interpretation errors\r
\r
### Error 7: treating every mismatch as model failure\r
\r
Why it seems correct:\r
Any discrepancy between measurement and prediction is immediately labeled “wrong model”.\r
\r
Detection sign:\r
No sensitivity test or instrument-noise check is performed.\r
\r
Mini contrast example:\r
Refining the integration step reduces [[x]] mismatch by 70 percent; numerical error was dominant, not physical model breakdown.\r
\r
Conceptual correction:\r
Separate causes: physics, measurement, and numerics. Without this split, conclusions are usually wrong.\r
\r
### Error 8: ending with purely numerical reporting\r
\r
Why it seems correct:\r
A number is delivered, so the solution appears complete.\r
\r
Detection sign:\r
No explanation is given about consistency with critical regime or expected time scale.\r
\r
Mini contrast example:\r
Two outputs with similar absolute error can imply very different behavior depending on [[t]] horizon and [[tau]] value.\r
\r
Conceptual correction:\r
Always close with physical reading: regime, settling speed, and design implication.\r
\r
## Quick self-control rule
\r
1. Verify regime by comparing [[gamma]] with [[omega0]] before solving output.
2. Compute [[tau]] from [[omega0]] to set the time scale.
3. Evaluate [[x]] with the critical model at decision-relevant times.
4. Contrast the result with linearity and constant-parameter assumptions.\r
5. Finish with physical interpretation, not only a numeric value.\r
`;export{e as default};
