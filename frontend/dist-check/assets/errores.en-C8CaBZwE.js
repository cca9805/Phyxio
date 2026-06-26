const e=`## Conceptual errors\r
\r
### Error 1: assuming peak and RMS are equivalent\r
Why it seems correct:\r
Both are expressed in the same electrical units and often appear side by side.\r
\r
Detection signal:\r
Peak value is directly used in energetic conclusions without conversion.\r
\r
Contrast mini-example:\r
A signal may have large peak while useful active transfer is determined by RMS and phase context.\r
\r
Conceptual correction:\r
Peak describes extrema; RMS describes energetic equivalence.\r
\r
### Error 2: treating phase shift as optional information\r
Why it seems correct:\r
Early problem solving often focuses on magnitude and frequency first.\r
\r
Detection signal:\r
Active power is discussed without explicit phase influence.\r
\r
Contrast mini-example:\r
With fixed RMS magnitudes, changing phase changes active power.\r
\r
Conceptual correction:\r
Phase is structurally causal in AC transfer interpretation.\r
\r
## Model errors\r
\r
### Error 3: forcing pure-sine formulas on distorted waveforms\r
Why it seems correct:\r
Basic equations are compact and convenient.\r
\r
Detection signal:\r
Peak-to-RMS shortcut is used despite visible waveform distortion.\r
\r
Contrast mini-example:\r
Clipped or harmonic-rich waveforms invalidate pure-sine conversion.\r
\r
Conceptual correction:\r
Check waveform regime before applying minimal model equations.\r
\r
### Error 4: mixing angular and ordinary frequency without control\r
Why it seems correct:\r
Both are called frequency in casual language.\r
\r
Detection signal:\r
Cycle timing from equations disagrees with observed timing.\r
\r
Contrast mini-example:\r
Replacing angular frequency by ordinary frequency without conversion shifts temporal scale.\r
\r
Conceptual correction:\r
Keep conversion explicit and traceable in every step.\r
\r
## Mathematical errors\r
\r
### Error 5: writing period relation incorrectly\r
Why it seems correct:\r
Presence of 2π in angular expressions creates false analogy.\r
\r
Detection signal:\r
Computed period is incompatible with measured cycle duration.\r
\r
Contrast mini-example:\r
At 50 Hz, correct period is 0.02 s, not values derived from angular misuse.\r
\r
Conceptual correction:\r
Use reciprocal relation between period and frequency consistently.\r
\r
### Error 6: omitting phase factor in active power\r
Why it seems correct:\r
RMS voltage times RMS current seems complete at first glance.\r
\r
Detection signal:\r
Power is reported without phase-dependent factor.\r
\r
Contrast mini-example:\r
For fixed RMS values, active transfer drops as phase shift grows.\r
\r
Conceptual correction:\r
Include phase influence explicitly in active-power evaluation.\r
\r
## Interpretation errors\r
\r
### Error 7: confusing temporal profile with energetic summary\r
Why it seems correct:\r
Waveform plots are visually persuasive.\r
\r
Detection signal:\r
Efficiency conclusions rely only on instantaneous waveform shape.\r
\r
Contrast mini-example:\r
Similar temporal profiles can yield different active transfer due to phase context.\r
\r
Conceptual correction:\r
Link temporal reading with RMS and active-power quantities.\r
\r
### Error 8: ignoring instrument-to-quantity mapping\r
Why it seems correct:\r
Different instruments are assumed to report the same voltage concept.\r
\r
Detection signal:\r
Oscilloscope and RMS meter values are compared without quantity distinction.\r
\r
Contrast mini-example:\r
One device reports peak behavior, another reports energetic equivalence.\r
\r
Conceptual correction:\r
Assign each measurement to its physical quantity before comparison.\r
\r
## Quick self-control rule\r
Before accepting results, check: data type labeling, frequency conversion consistency, period reciprocity, and phase-aware active-power interpretation. If any item fails, the solution remains physically incomplete.`;export{e as default};
