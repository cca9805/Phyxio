## Conceptual errors


### Error 1

**Why it seems correct**: Bright fringes seem to depend only on how much light reaches the detector.

**Why it is incorrect**: Coherence depends on phase stability. More intensity does not guarantee large [[longitud_de_coherencia]] or high [[visibilidad_de_franjas]].

**Detection sign**: The student increases source power and expects to recover fringes erased by path mismatch.

**Conceptual correction**: Separate total energy from interference contrast.

**Contrast mini-example**: A weak laser can give clear fringes where an intense lamp cannot sustain them.

**Detection signal**

Check 1: In Coherence, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

### Error 2

**Why it seems correct**: If two beams come from the same source, they seem as if they should always interfere.

**Why it is incorrect**: If [[diferencia_de_camino_optico]] exceeds the scale [[longitud_de_coherencia]], the source does not keep phase memory between paths.

**Detection sign**: Path difference is ignored and every loss of fringes is blamed on the detector.

**Conceptual correction**: Always compare [[diferencia_de_camino_optico]] with [[longitud_de_coherencia]] before interpreting the pattern.

**Contrast mini-example**: A filtered lamp may interfere with nearly equal paths, but not with strongly mismatched arms.

## Model errors

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

### Error 3

**Why it seems correct**: One coherence number seems sufficient for any experiment.

**Why it is incorrect**: There is temporal, spatial, and instrumental coherence. The simple model does not cover every contrast loss.

**Detection sign**: The pattern changes when the source is moved sideways although [[diferencia_de_camino_optico]] remains the same.

**Conceptual correction**: Switch to the extended model when source extension or alignment controls the result.

**Contrast mini-example**: An extended source reduces spatial coherence even with short paths.

**Detection signal**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.

**Mini-example of contrast**

Check 6: In Coherence, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

### Error 4

**Why it seems correct**: Visibility seems like a direct coherence measurement.

**Why it is incorrect**: [[visibilidad_de_franjas]] also depends on background, intensity balance, vibration, and detector response.

**Detection sign**: Visibility improves when intensities are balanced without changing the source.

**Conceptual correction**: Use [[visibilidad_de_franjas]] as an experimental indicator, not as a unique proof of temporal coherence.

**Contrast mini-example**: Two coherent but very unequal beams may produce low-contrast fringes.

## Mathematical errors

**Detection signal**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Mini-example of contrast**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.

### Error 5

**Why it seems correct**: [[intensidad_maxima]] and [[intensidad_minima]] have the same units and can be combined in several ways.

**Why it is incorrect**: Visibility requires normalized contrast; using an unnormalized difference confuses brightness with contrast.

**Detection sign**: The visibility result has units or clearly exceeds the physical range.

**Conceptual correction**: Check that [[visibilidad_de_franjas]] is dimensionless and lies between zero and one.

**Contrast mini-example**: Doubling all power should not change visibility if relative contrast is unchanged.

**Detection signal**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.

### Error 6

**Why it seems correct**: If [[tau_c]] is small, the length also seems numerically small without conversion.

**Why it is incorrect**: [[longitud_de_coherencia]] combines time with propagation speed. Seconds cannot be compared directly with metres.

**Detection sign**: The student compares [[tau_c]] with [[diferencia_de_camino_optico]] without converting to length.

**Conceptual correction**: First convert the temporal scale into [[longitud_de_coherencia]].

**Contrast mini-example**: A very short time can correspond to micrometres, which are still relevant in optics.

## Interpretation errors

**Detection signal**

Check 11: In Coherence, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

**Mini-example of contrast**

Check 12: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 12.

### Error 7

**Why it seems correct**: If fringes are not visible, it seems that there is no interference at all.

**Why it is incorrect**: Partial interference may exist, but time averaging, noise, or detector resolution reduces visible contrast.

**Detection sign**: Total absence of superposed waves is concluded from low visibility.

**Conceptual correction**: Interpret [[visibilidad_de_franjas]] as a gradual measure of contrast.

**Contrast mini-example**: A faint but stable pattern can contain interferometric information.

## Quick self-control rule

Before blaming the source, compare [[diferencia_de_camino_optico]] with [[longitud_de_coherencia]] and check whether [[visibilidad_de_franjas]] may be reduced by unequal intensity, background, vibration, or detector response. Low coherence is only one possible cause of weak fringes.

**Detection signal**

Check 13: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 13.

**Mini-example of contrast**

Check 14: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 14.