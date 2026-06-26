const e=`# Frequent mistakes\r
\r
## Conceptual errors\r
\r
### Error 1: believing phase and position mean the same thing\r
\r
Why it seems correct:\r
In many exercises students see [[x]] first and conclude that this one quantity already identifies the full state of the oscillator.\r
\r
Detection sign:\r
The explanation cannot distinguish two states with the same position but opposite directions of motion.\r
\r
Mini contrast example:\r
An oscillator may pass through the same [[x]] value once while approaching equilibrium and again while moving away from it. The phase is not the same even though position is.\r
\r
Conceptual correction:\r
Read [[phi_t]] as the cyclic state variable and [[x]] as the spatial projection of that state.\r
\r
### Error 2: thinking a positive phase difference implies greater amplitude or greater energy\r
\r
Why it seems correct:\r
The idea of “lead” sounds like “having more,” so it is misread as though it described a stronger system.\r
\r
Detection sign:\r
The answer compares [[delta_phi]] with [[A]] or with energy without justifying why such different quantities should mean the same thing.\r
\r
Mini contrast example:\r
Two oscillators may have the same [[A]] and comparable energy, yet a different [[delta_phi]] simply because they started with different angular offsets.\r
\r
Conceptual correction:\r
Keep angular difference, spatial scale, and energetic balance clearly separated.\r
\r
## Model errors\r
\r
### Error 3: using ideal phase when frequency is no longer stable\r
\r
Why it seems correct:\r
The temporal phase relation is simple and often gets reused automatically even when the real evolution is no longer uniformly periodic.\r
\r
Detection sign:\r
[[omega]] changes appreciably between intervals and yet the solution still uses one linear phase reading with no discussion.\r
\r
Mini contrast example:\r
If the signal deforms or frequency drifts cycle by cycle, speaking about one ideal phase may hide the real mechanism governing the response.\r
\r
Conceptual correction:\r
Change models when simple phase no longer condenses system state with physical coherence.\r
\r
### Error 4: comparing phases with different time references\r
\r
Why it seems correct:\r
One phase is computed for each oscillator and then subtracted, as if any angular difference already represented a useful physical phase lag.\r
\r
Detection sign:\r
The sign of [[delta_phi]] depends on how the time origin was chosen rather than on real signal dynamics.\r
\r
Mini contrast example:\r
The same pair of signals may look leading or lagging depending only on a redefinition of the time reference.\r
\r
Conceptual correction:\r
Fix one temporal convention first and preserve it throughout the whole comparison.\r
\r
## Mathematical errors\r
\r
### Error 5: mixing hertz with radians per second without conversion\r
\r
Why it seems correct:\r
Both quantities describe periodicity and, if numbers are small, the error may remain hidden in a first reading.\r
\r
Detection sign:\r
The resulting [[phi_t]] becomes far too large or far too small for the considered time interval.\r
\r
Mini contrast example:\r
Using a frequency in hertz directly as though it were [[omega]] changes the full angular scale of the problem.\r
\r
Conceptual correction:\r
Always verify the unit of [[omega]] before substituting values and convert when needed.\r
\r
### Error 6: treating trigonometry as if any angle were automatically meaningful\r
\r
Why it seems correct:\r
The calculator returns a number, which creates the impression that the answer must already be correct.\r
\r
Detection sign:\r
There is no check that the obtained [[x]] is compatible with [[A]] or that the scale of [[v]] makes physical sense.\r
\r
Mini contrast example:\r
If one computation produces a position whose magnitude is greater than the declared amplitude, the arithmetic may have been executed, but the physics has already failed.\r
\r
Conceptual correction:\r
Close every substitution with checks of range, sign, and cycle plausibility.\r
\r
## Interpretation errors\r
\r
### Error 7: claiming synchronization only because two positions coincide once\r
\r
Why it seems correct:\r
Visually, two signals may pass through one common value and look aligned at that instant.\r
\r
Detection sign:\r
The synchronization claim relies on one positional coincidence rather than on comparison of [[phi]] or [[delta_phi]].\r
\r
Mini contrast example:\r
Two oscillators may share one [[x]] value and still have one leading the other in phase.\r
\r
Conceptual correction:\r
Use phase language to compare relative state rather than one spatial snapshot.\r
\r
### Error 8: ending with an angular number and no causal reading of the cycle\r
\r
Why it seems correct:\r
The solution returns a value in radians and therefore appears complete because the target quantity has been produced.\r
\r
Detection sign:\r
The answer does not say whether the system is near a turning point, near an equilibrium crossing, leading, or lagging.\r
\r
Mini contrast example:\r
The same angular number may be useful or useless depending on whether it is translated into a physical reading of oscillatory state.\r
\r
Conceptual correction:\r
Turn the final result into a cycle interpretation rather than leaving it as an angular figure.\r
\r
## Quick self-control rule\r
\r
1. Fix the target first: [[phi_t]], [[x]], [[v]], or [[delta_phi]].\r
2. Verify temporal reference and sign convention before operating.\r
3. Check the unit of [[omega]] and the scale of [[A]].\r
4. Review whether [[x]] and [[v]] are compatible with the expected cycle.\r
5. End with one physical sentence about state, lead, or lag.`;export{e as default};
