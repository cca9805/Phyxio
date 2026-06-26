const e=`## Conceptual errors\r
\r
### Error 1: treating resonance as only one number\r
Why it seems correct:\r
Many introductory exercises stop after computing [[f0]].\r
\r
Detection signal:\r
The solution reports center frequency but ignores [[Q]], [[BW]], and branch-demand implications.\r
\r
Contrast mini-example:\r
Two branches can share the same [[f0]] and still behave very differently because damping differs.\r
\r
Conceptual correction:\r
Resonance means position plus shape plus margin.\r
\r
### Error 2: reading quality factor as efficiency\r
Why it seems correct:\r
Higher quality sounds like universally better operation.\r
\r
Detection signal:\r
Design decisions assume increasing [[Q]] always improves system behavior.\r
\r
Contrast mini-example:\r
Higher [[Q]] can improve selectivity while reducing drift tolerance.\r
\r
Conceptual correction:\r
Use [[Q]] as selectivity-versus-damping indicator, not generic efficiency metric.\r
\r
## Model errors\r
\r
### Error 3: using ideal equations without effective-loss validation\r
Why it seems correct:\r
Minimal equations produce clean results quickly.\r
\r
Detection signal:\r
Measured near-resonant response consistently diverges from baseline predictions.\r
\r
Contrast mini-example:\r
Ignoring parasitic resistance can misestimate [[Q]], [[BW]], and [[Ires]].\r
\r
Conceptual correction:\r
Validate effective resistance and update model when needed.\r
\r
### Error 4: extrapolating resonance behavior too far from tuning\r
Why it seems correct:\r
The peak intuition is applied outside its valid neighborhood.\r
\r
Detection signal:\r
Conclusions about selectivity are made in regions far from [[f0]].\r
\r
Contrast mini-example:\r
Away from resonance, other impedance terms dominate response interpretation.\r
\r
Conceptual correction:\r
Declare and respect operating domain before transferring conclusions.\r
\r
## Mathematical errors\r
\r
### Error 5: mixing angular and ordinary frequency scales\r
Why it seems correct:\r
Both are casually called frequency.\r
\r
Detection signal:\r
Center-frequency scale becomes inconsistent with measured data.\r
\r
Contrast mini-example:\r
Using [[omega0]] as if it were [[f0]] distorts the full chain.\r
\r
Conceptual correction:\r
Keep conversion explicit and unit conventions fixed.\r
\r
### Error 6: assuming bandwidth remains fixed when damping changes\r
Why it seems correct:\r
Bandwidth is treated as a static label from one calculation.\r
\r
Detection signal:\r
[[R]] is modified but [[BW]] is reused without update.\r
\r
Contrast mini-example:\r
Changed damping should alter response width under the same model.\r
\r
Conceptual correction:\r
Recompute [[BW]] whenever selectivity conditions change.\r
\r
## Interpretation errors\r
\r
### Error 7: closing design without current-margin checks\r
Why it seems correct:\r
Center-frequency agreement creates false closure.\r
\r
Detection signal:\r
[[Ires]] is not compared against thermal and protection limits.\r
\r
Contrast mini-example:\r
A correctly tuned branch can still be unsafe near resonance.\r
\r
Conceptual correction:\r
Integrate resonance reading with branch-safety validation.\r
\r
### Error 8: ignoring parameter drift in real operation\r
Why it seems correct:\r
Nominal values are treated as fixed reality.\r
\r
Detection signal:\r
System passes bench setup but drifts out of target behavior in field duty.\r
\r
Contrast mini-example:\r
Thermal movement of [[L]] and [[C]] can shift [[f0]] and reshape [[BW]].\r
\r
Conceptual correction:\r
Add tolerance and sensitivity review before final closure.\r
\r
## Quick self-control rule\r
Before accepting a resonance result, verify unit coherence, angular/cyclic conversion, consistency among [[Q]] and [[BW]], current-margin compatibility via [[Ires]], and model-validity boundaries for the intended operating window.`;export{e as default};
