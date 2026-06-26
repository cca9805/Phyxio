const e=`## Conceptual errors\r
\r
### Error 1: believing that high current always means high useful power\r
Why it seems correct:\r
In direct-current problems, more current is often associated with more useful transfer. That intuition appears transferable to any electrical circuit.\r
\r
Detection signal:\r
The solution finds high [[I]] but much lower [[P]] than [[S]], or it obtains a substantial [[phi]] and still describes the load as efficient without further analysis.\r
\r
Contrast mini-example:\r
Two branches can demand the same [[I]]. One may have [[phi]] close to zero, while the other keeps a large phase shift. In the second case the source sustains much more total demand than useful transfer alone would suggest.\r
\r
Conceptual correction:\r
Current must be read together with [[phi]], [[P]], [[Q]], and [[S]]. In this leaf the question is not only how much current flows, but how electrical demand is distributed.\r
\r
### Error 2: treating [[Q]] as lost energy in the same sense as heat\r
Why it seems correct:\r
Since [[Q]] is not identical to useful power, students often call it direct waste.\r
\r
Detection signal:\r
All reactive power is labelled useless and the interpretation of exchange with electric and magnetic fields disappears from the explanation.\r
\r
Contrast mini-example:\r
An ideal reactive branch can exchange a large amount of energy with the source without turning it into mean dissipation like the resistive part does.\r
\r
Conceptual correction:\r
[[Q]] expresses alternating exchange associated with phase shift. It has real technical consequences, but it is not identical to irreversible dissipation.\r
\r
## Model errors\r
\r
### Error 3: applying the linear series model to any AC setup without justification\r
Why it seems correct:\r
The leaf equations are compact and quick, so it becomes tempting to use them on any circuit that contains a resistor, an inductor, and a capacitor.\r
\r
Detection signal:\r
The statement describes parallel topology, strong parasitics, or several relevant frequencies, and the same closed chain is still used without declaring approximations.\r
\r
Contrast mini-example:\r
In a parallel topology, maximum and minimum opposition are read differently. Using the series model without prior reduction changes the physical meaning of the result.\r
\r
Conceptual correction:\r
Define system, topology, dominant frequency, and validity domain first. Only then decide whether this leaf is the correct model.\r
\r
### Error 4: assuming that approaching compensation always improves everything\r
Why it seems correct:\r
If [[phi]] decreases and [[Q]] falls, it seems natural to conclude that the circuit automatically becomes better in every sense.\r
\r
Detection signal:\r
The solution celebrates lower reactive demand without checking [[I]], sensitivity to frequency, or component tolerances.\r
\r
Contrast mini-example:\r
When [[Xl]] and [[Xc]] almost balance, [[Z]] may approach [[R]] and current may rise quickly. Power factor may improve while current stress worsens.\r
\r
Conceptual correction:\r
Compensation and safety are not synonyms. [[Z]], [[I]], [[phi]], and the operating context must be read together.\r
\r
## Mathematical errors\r
\r
### Error 5: writing impedance as a simple algebraic sum\r
Why it seems correct:\r
The student sees three quantities in ohms and concludes that they should be added linearly.\r
\r
Detection signal:\r
The solution proposes an impedance smaller than [[R]] by naive cancellation or even a negative magnitude.\r
\r
Contrast mini-example:\r
If [[R]] is 40 ohm, [[Xl]] is 90 ohm, and [[Xc]] is 50 ohm, the reactive contribution does not align with the resistive one. The final magnitude must remain greater than or equal to [[R]].\r
\r
Conceptual correction:\r
Reactances enter in quadrature with respect to the resistive part. First construct reactive imbalance, then total magnitude.\r
\r
### Error 6: mixing peak values with RMS values\r
Why it seems correct:\r
Both describe the same signal and often appear together in tables or plots.\r
\r
Detection signal:\r
[[P]] exceeds [[S]], current becomes implausible, or the result contradicts the physical scale of the setup.\r
\r
Contrast mini-example:\r
If [[V]] is taken as a peak value while [[I]] remains RMS, calculated powers no longer belong to one coherent framework.\r
\r
Conceptual correction:\r
In this topic the entire operational chain is built with RMS magnitudes. If a datum is given in peak form, it must be converted first.\r
\r
## Interpretation errors\r
\r
### Error 7: ignoring the physical sign of [[phi]]\r
Why it seems correct:\r
Many exercises ask only for a numerical angle, so students conclude that the magnitude is enough.\r
\r
Detection signal:\r
The solution gives a value for [[phi]] but never states whether the branch is inductive or capacitive, and never connects the sign with [[Q]].\r
\r
Contrast mini-example:\r
Two angles with the same magnitude can correspond to opposite regimes. In one, [[Xl]] dominates; in the other, [[Xc]] dominates. Compensation decisions change completely.\r
\r
Conceptual correction:\r
The sign of [[phi]] is not decorative. It is the compact way of reading which reactive mechanism dominates the branch.\r
\r
### Error 8: reading [[S]] as if it were useful power delivered to the load\r
Why it seems correct:\r
[[S]] combines [[V]] and [[I]] and looks like the most direct number in the power balance.\r
\r
Detection signal:\r
Load usefulness is sized only with [[S]], or the explanation states that all source demand becomes net average transfer.\r
\r
Contrast mini-example:\r
If [[P]] is far below [[S]], the installation sustains a demand that is not fully turned into active power. That gap can be the main technical issue.\r
\r
Conceptual correction:\r
[[S]] sizes total demand. [[P]] sizes net average transfer. Good interpretation must separate both roles.\r
\r
## Quick self-control rule\r
Before accepting a solution, ask this sequence: do [[Xl]] and [[Xc]] belong to the same frequency, are all magnitudes in RMS form, is [[Z]] greater than or equal to [[R]], does the sign of [[phi]] match inductive or capacitive character, and does [[P]] remain below or equal to [[S]]? If one answer fails, the problem is not closed even if arithmetic looks tidy.`;export{e as default};
