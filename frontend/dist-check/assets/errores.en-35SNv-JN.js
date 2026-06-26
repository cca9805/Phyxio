const e=`# Common errors

## Conceptual errors

### Error 1

**Why it seems correct**: Bright fringes seem to depend only on how much light reaches the detector.

**Why it is incorrect**: Coherence depends on phase stability. More intensity does not guarantee large [[L_c]] or high [[V]].

**Detection sign**: The student increases source power and expects to recover fringes erased by path mismatch.

**Conceptual correction**: Separate total energy from interference contrast.

**Contrast mini-example**: A weak laser can give clear fringes where an intense lamp cannot sustain them.

### Error 2

**Why it seems correct**: If two beams come from the same source, they seem as if they should always interfere.

**Why it is incorrect**: If [[Delta_L]] exceeds the scale [[L_c]], the source does not keep phase memory between paths.

**Detection sign**: Path difference is ignored and every loss of fringes is blamed on the detector.

**Conceptual correction**: Always compare [[Delta_L]] with [[L_c]] before interpreting the pattern.

**Contrast mini-example**: A filtered lamp may interfere with nearly equal paths, but not with strongly mismatched arms.

## Model errors

### Error 3

**Why it seems correct**: One coherence number seems sufficient for any experiment.

**Why it is incorrect**: There is temporal, spatial, and instrumental coherence. The simple model does not cover every contrast loss.

**Detection sign**: The pattern changes when the source is moved sideways although [[Delta_L]] remains the same.

**Conceptual correction**: Switch to the extended model when source extension or alignment controls the result.

**Contrast mini-example**: An extended source reduces spatial coherence even with short paths.

### Error 4

**Why it seems correct**: Visibility seems like a direct coherence measurement.

**Why it is incorrect**: [[V]] also depends on background, intensity balance, vibration, and detector response.

**Detection sign**: Visibility improves when intensities are balanced without changing the source.

**Conceptual correction**: Use [[V]] as an experimental indicator, not as a unique proof of temporal coherence.

**Contrast mini-example**: Two coherent but very unequal beams may produce low-contrast fringes.

## Mathematical errors

### Error 5

**Why it seems correct**: [[I_max]] and [[I_min]] have the same units and can be combined in several ways.

**Why it is incorrect**: Visibility requires normalized contrast; using an unnormalized difference confuses brightness with contrast.

**Detection sign**: The visibility result has units or clearly exceeds the physical range.

**Conceptual correction**: Check that [[V]] is dimensionless and lies between zero and one.

**Contrast mini-example**: Doubling all power should not change visibility if relative contrast is unchanged.

### Error 6

**Why it seems correct**: If [[tau_c]] is small, the length also seems numerically small without conversion.

**Why it is incorrect**: [[L_c]] combines time with propagation speed. Seconds cannot be compared directly with metres.

**Detection sign**: The student compares [[tau_c]] with [[Delta_L]] without converting to length.

**Conceptual correction**: First convert the temporal scale into [[L_c]].

**Contrast mini-example**: A very short time can correspond to micrometres, which are still relevant in optics.

## Interpretation errors

### Error 7

**Why it seems correct**: If fringes are not visible, it seems that there is no interference at all.

**Why it is incorrect**: Partial interference may exist, but time averaging, noise, or detector resolution reduces visible contrast.

**Detection sign**: Total absence of superposed waves is concluded from low visibility.

**Conceptual correction**: Interpret [[V]] as a gradual measure of contrast.

**Contrast mini-example**: A faint but stable pattern can contain interferometric information.

## Quick self-control rule

Before blaming the source, compare [[Delta_L]] with [[L_c]] and check whether [[V]] may be reduced by unequal intensity, background, vibration, or detector response. Low coherence is only one possible cause of weak fringes.
`;export{e as default};
