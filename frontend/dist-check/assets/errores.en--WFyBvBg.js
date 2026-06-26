const e=`## Conceptual errors\r
\r
### Error 1: treating reactance as dissipative resistance\r
Why it seems correct:\r
Both are measured in ohms and appear in current relations.\r
\r
Detection signal:\r
High [[Xl]] is interpreted as high active consumption by default.\r
\r
Contrast mini-example:\r
A branch can show strong opposition and moderate [[Il]] without equivalent active dissipation in ideal conditions.\r
\r
Conceptual correction:\r
Separate reactive opposition from active dissipation before energetic conclusions.\r
\r
### Error 2: assuming inductive opposition is constant\r
Why it seems correct:\r
A remembered equation is unconsciously treated as a fixed component value.\r
\r
Detection signal:\r
The same opposition value is used across different [[f]] scenarios.\r
\r
Contrast mini-example:\r
At fixed [[L]], increasing frequency should increase [[Xl]].\r
\r
Conceptual correction:\r
Treat [[Xl]] as regime-dependent output.\r
\r
## Model errors\r
\r
### Error 3: applying ideal model outside magnetic validity\r
Why it seems correct:\r
Substitution remains clean and outputs plausible values.\r
\r
Detection signal:\r
Measured [[Il]] trends diverge from expected model trends.\r
\r
Contrast mini-example:\r
Saturation and dominant core loss can invalidate minimal assumptions.\r
\r
Conceptual correction:\r
Declare thresholds and switch to extended model when they are exceeded.\r
\r
### Error 4: ignoring metrological traceability\r
Why it seems correct:\r
Any voltage reading is treated as compatible with any equation.\r
\r
Detection signal:\r
Mixed data types or mixed operating states are used without reconciliation.\r
\r
Contrast mini-example:\r
Peak waveform voltage is not automatically interchangeable with RMS voltage in branch-current equations.\r
\r
Conceptual correction:\r
Align data type, measurement context, and equation assumptions.\r
\r
## Mathematical errors\r
\r
### Error 5: mixing hertz and radians per second\r
Why it seems correct:\r
Both are casually called frequency.\r
\r
Detection signal:\r
Unexpected scale factors appear in [[Xl]] and [[Il]].\r
\r
Contrast mini-example:\r
Using [[f]] where [[omega]] is required distorts the full chain.\r
\r
Conceptual correction:\r
Fix one convention and keep conversion explicit.\r
\r
### Error 6: skipping millihenry-to-henry conversion\r
Why it seems correct:\r
Prefix handling is omitted during quick substitution.\r
\r
Detection signal:\r
Predicted opposition is implausibly small or large.\r
\r
Contrast mini-example:\r
A three-order unit shift can dominate the result.\r
\r
Conceptual correction:\r
Normalize to SI before formal operations.\r
\r
## Interpretation errors\r
\r
### Error 7: reading reactive magnitude as active consumption\r
Why it seems correct:\r
Both are discussed in power studies.\r
\r
Detection signal:\r
Efficiency judgments are made only from [[Ql]] changes.\r
\r
Contrast mini-example:\r
Reactive exchange can grow without equal net active transfer growth.\r
\r
Conceptual correction:\r
Keep reactive and active balances explicitly separated.\r
\r
### Error 8: ending at numbers without causal closure\r
Why it seems correct:\r
A computed value creates false closure.\r
\r
Detection signal:\r
Conclusion reports values but not dominant variable or validity boundary.\r
\r
Contrast mini-example:\r
Same [[V]] cases can produce different [[Il]] due to different [[L]] or [[f]].\r
\r
Conceptual correction:\r
Close with cause-effect statement and model-limit note.\r
\r
## Quick self-control rule\r
Before accepting results, verify data-type coherence, unit conversion, trend consistency, and model validity. If one fails, the answer is not physically ready for technical use.`;export{e as default};
