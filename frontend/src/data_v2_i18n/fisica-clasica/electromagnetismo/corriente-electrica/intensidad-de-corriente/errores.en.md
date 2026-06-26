## Conceptual errors


### Error 1: Treating [[intensidad_de_corriente]] as individual electron speed
#### Why it seems right
The word current is often associated with fast motion, so students map large current to very high single-particle speed.
#### Detection signal
Reasoning ignores the roles of [[densidad_de_portadores]] and [[area_de_seccion]].
#### Contrast mini-example
Two materials may show similar [[intensidad_de_corriente]] with different [[velocidad_de_deriva]] if carrier density changes.
#### Conceptual fix
Read [[intensidad_de_corriente]] as macroscopic net flow, not as single-particle velocity.

**Why it seems correct**

Check 1: In Electric Current, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Why it is incorrect**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Conceptual correction**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 2: Interpreting negative current as impossible
#### Why it seems right
Early exercises often use only positive magnitudes.
#### Detection signal
Signs are manually forced positive without checking convention.
#### Contrast mini-example
If net flow is opposite to chosen reference, negative [[intensidad_de_corriente]] is physically coherent.
#### Conceptual fix
Keep one direction convention and interpret sign as directional information.

## Model errors

**Why it seems correct**

Check 6: In Electric Current, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

**Why it is incorrect**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Detection signal**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.

**Conceptual correction**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.


### Error 3: Using nominal area instead of effective conduction area
#### Why it seems right
Geometry from design drawings is readily available and looks definitive.
#### Detection signal
Computed [[densidad_de_corriente]] looks safe while local overheating is observed.
#### Contrast mini-example
A bottleneck contact can reduce effective [[area_de_seccion]] and increase local stress.
#### Conceptual fix
Use effective area and justify it from physical layout.

**Why it seems correct**

Check 11: In Electric Current, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

**Why it is incorrect**

Check 12: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 12.

**Detection signal**

Check 13: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 13.

**Conceptual correction**

Check 14: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 14.

**Mini-example of contrast**

Check 15: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 15.


### Error 4: Applying one average to multi-regime dynamics
#### Why it seems right
A single average simplifies communication.
#### Detection signal
One value cannot explain startup and settled behavior simultaneously.
#### Contrast mini-example
Pulse-heavy signals require stage-based interpretation.
#### Conceptual fix
Use piecewise windows when regimes differ.

## Mathematical errors

**Why it seems correct**

Check 16: In Electric Current, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 16.

**Why it is incorrect**

Check 17: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 17.

**Detection signal**

Check 18: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 18.

**Conceptual correction**

Check 19: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 19.

**Mini-example of contrast**

Check 20: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 20.


### Error 5: Mixing milliseconds and seconds
#### Why it seems right
Both units appear naturally in practical data sheets.
#### Detection signal
Current estimates shift by orders of magnitude unexpectedly.
#### Contrast mini-example
Keeping charge fixed while shrinking [[tiempo]] unit inflates [[intensidad_de_corriente]] strongly.
#### Conceptual fix
Normalize [[tiempo]] units before substitution.

**Why it seems correct**

Check 21: In Electric Current, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 21.

**Why it is incorrect**

Check 22: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 22.

**Detection signal**

Check 23: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 23.

**Conceptual correction**

Check 24: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 24.

**Mini-example of contrast**

Check 25: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 25.


### Error 6: Forgetting area conversion in [[densidad_de_corriente]]
#### Why it seems right
mm^2 values are common in engineering contexts.
#### Detection signal
Density appears unrealistically low compared with thermal behavior.
#### Contrast mini-example
Using mm^2 as m^2 suppresses density by large factors.
#### Conceptual fix
Convert area to SI before normalization.

## Interpretation errors

**Why it seems correct**

Check 26: In Electric Current, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 26.

**Why it is incorrect**

Check 27: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 27.

**Detection signal**

Check 28: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 28.

**Conceptual correction**

Check 29: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 29.

**Mini-example of contrast**

Check 30: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 30.


### Error 7: Deciding safety from global [[intensidad_de_corriente]] only
#### Why it seems right
Panel current is the most visible measurement.
#### Detection signal
Hot spots appear despite acceptable global values.
#### Contrast mini-example
Same [[intensidad_de_corriente]] with smaller [[area_de_seccion]] means higher [[densidad_de_corriente]] and local risk.
#### Conceptual fix
Always combine [[intensidad_de_corriente]] and [[densidad_de_corriente]] for reliability decisions.

**Why it seems correct**

Check 31: In Electric Current, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 31.

**Why it is incorrect**

Check 32: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 32.

**Detection signal**

Check 33: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 33.

**Conceptual correction**

Check 34: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 34.

**Mini-example of contrast**

Check 35: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 35.


### Error 8: Confusing algebraic closure with physical validity
#### Why it seems right
A closed equation chain feels conclusive.
#### Detection signal
Computed values disagree with observations but are still defended.
#### Contrast mini-example
A valid equation outside its domain can produce useless answers.
#### Conceptual fix
Check assumptions, scales, and domain before accepting output.

## Quick self-control rule

Before accepting any result, verify target quantity, units, sign convention, model assumptions, and order of magnitude. If one item is unclear, treat the result as provisional and re-open the reasoning chain.

**Why it seems correct**

Check 36: In Electric Current, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 36.

**Why it is incorrect**

Check 37: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 37.

**Detection signal**

Check 38: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 38.

**Conceptual correction**

Check 39: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 39.

**Mini-example of contrast**

Check 40: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 40.