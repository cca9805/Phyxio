const e=`## Conceptual errors\r
\r
### Error 1: treating reactance as dissipative resistance\r
Why it seems correct:\r
Both quantities are measured in ohms and appear in current equations.\r
\r
Detection signal:\r
A branch with capacitive opposition is interpreted as active-power consumption by default.\r
\r
Contrast mini-example:\r
A branch can show high [[Ic]] with low or negligible net active dissipation in ideal conditions.\r
\r
Conceptual correction:\r
Separate reactive opposition from active dissipation before drawing energetic conclusions.\r
\r
### Error 2: assuming capacitive opposition is constant\r
Why it seems correct:\r
A remembered equation is unconsciously treated as a fixed component value.\r
\r
Detection signal:\r
The same opposition value is used across scenarios with different frequency.\r
\r
Contrast mini-example:\r
At fixed capacitance, higher frequency should lower ideal reactance.\r
\r
Conceptual correction:\r
Treat [[Xc]] as regime-dependent output, not immutable component identity.\r
\r
## Model errors\r
\r
### Error 3: using ideal model outside its operating window\r
Why it seems correct:\r
Numerical substitution stays simple and outputs plausible-looking values.\r
\r
Detection signal:\r
Measured trends in branch current diverge from predicted trends under nominally similar conditions.\r
\r
Contrast mini-example:\r
Strong loss or thermal effects can invalidate pure-reactive assumptions.\r
\r
Conceptual correction:\r
Define validity thresholds and switch models when thresholds are exceeded.\r
\r
### Error 4: ignoring metrological traceability\r
Why it seems correct:\r
Any measured voltage value is treated as compatible with any formula.\r
\r
Detection signal:\r
Mixed data types and mixed operating states are used without explicit reconciliation.\r
\r
Contrast mini-example:\r
Peak voltage from waveform capture is not automatically interchangeable with RMS voltage for branch-current equations.\r
\r
Conceptual correction:\r
Align data type, measurement context, and equation assumptions.\r
\r
## Mathematical errors\r
\r
### Error 5: mixing hertz and radians per second\r
Why it seems correct:\r
Both are informally called frequency in everyday technical speech.\r
\r
Detection signal:\r
Scale errors appear with unexplained factors in reactance or current estimates.\r
\r
Contrast mini-example:\r
Direct substitution of hertz where angular frequency is required distorts opposition estimates.\r
\r
Conceptual correction:\r
Fix one convention and keep conversion explicit.\r
\r
### Error 6: skipping microfarad-to-farad conversion\r
Why it seems correct:\r
Prefix handling is omitted during quick substitutions.\r
\r
Detection signal:\r
Current values become unrealistically tiny or unrealistically large.\r
\r
Contrast mini-example:\r
A six-order unit shift can dominate the entire result.\r
\r
Conceptual correction:\r
Normalize to SI before any formal operation.\r
\r
## Interpretation errors\r
\r
### Error 7: reading reactive magnitude as active consumption\r
Why it seems correct:\r
Both are energetic descriptors and reported in power studies.\r
\r
Detection signal:\r
System efficiency is judged only from reactive-magnitude growth.\r
\r
Contrast mini-example:\r
Reactive exchange can increase without equal increase in net active transfer.\r
\r
Conceptual correction:\r
Keep reactive and active balances explicitly separated.\r
\r
### Error 8: stopping at numbers without causal explanation\r
Why it seems correct:\r
A computed value creates a false sense of closure.\r
\r
Detection signal:\r
Conclusion repeats results but does not identify dominant variable or validity boundary.\r
\r
Contrast mini-example:\r
Equal voltage scenarios can yield different branch currents due to frequency or capacitance changes.\r
\r
Conceptual correction:\r
Close every solution with cause-effect narrative and model-limit statement.\r
\r
## Quick self-control rule\r
Before accepting results, verify data type consistency, unit conversion, trend coherence, and model validity. If any of these fails, the answer is not yet physically ready for technical use.`;export{e as default};
