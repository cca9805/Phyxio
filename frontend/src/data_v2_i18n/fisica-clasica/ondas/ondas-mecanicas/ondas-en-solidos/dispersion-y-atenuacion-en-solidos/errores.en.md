## Conceptual errors


### Error 1: Confusing attenuation with geometric dispersion

**Why it seems correct**
The student observes that amplitude decreases with distance and assumes all loss is due to the material itself. This generalization is natural because in practice both effects occur simultaneously and the net result is signal reduction.

**Why it is incorrect**
Geometric dispersion is a purely geometric effect independent of material properties. In a divergent beam, energy distributes over a larger area, reducing energy density without heat conversion. True material attenuation involves irreversible energy dissipation.

**Detection signal**
If changing transducer diameter or distance to focus modifies the calculated [[alpha]] value, geometric dispersion is likely being attributed to material attenuation.

**Conceptual correction**
Total attenuation is the sum of geometric dispersion plus intrinsic material attenuation. To obtain true [[alpha]], the known geometric effect must first be mathematically compensated according to beam geometry.

**Contrast mini-example**
A student measures the same part with two different diameter transducers and gets different [[alpha]] values. He concludes the material changed its properties. The correct answer is that geometric dispersion is different; after compensating for it, both cases give the same material [[alpha]].

**Mini-example of contrast**

Check 1: In Dispersion and Attenuation in Solids, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Assuming attenuation is linear with distance

**Why it seems correct**
For short distances where the exponential can be approximated linearly, the student observes an approximately proportional relationship and incorrectly extrapolates to the entire range.

**Why it is incorrect**
Attenuation follows an exponential law, not linear. The linear approximation is only valid for distances much smaller than the attenuation length [[longitud_de_atenuacion]].

**Detection signal**
If the amplitude vs distance graph is curved instead of straight, or if linear predictions systematically fail for large distances.

**Conceptual correction**
The correct relationship is exponential. Only in the small distance limit ([[distancia_de_propagacion]] << [[longitud_de_atenuacion]]) is the linear approximation valid with slope proportional to [[alpha]].

**Contrast mini-example**
A student predicts that at 10 cm amplitude will be half that at 5 cm. Actually, with [[alpha]] of 0.1 Np/m, at 5 cm amplitude is 60% of initial and at 10 cm is 37%, not 30% as the linear model predicts.

## Model errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Using exponential model in media with gradients

**Why it seems correct**
The student applies the exponential formula universally without verifying material homogeneity, assuming all parts follow the same simple model.

**Why it is incorrect**
In materials with property gradients (heat-treated zones, variable composition), [[alpha]] is not constant with position, invalidating the simple exponential solution.

**Detection signal**
If the ln([[amplitud_a_distancia_x]]/[[amplitud_inicial]]) vs distance graph is not a straight line but a curve, or if different regions of the same part give different [[alpha]] values.

**Conceptual correction**
For non-homogeneous media, the integral form should be used with the integral of the attenuation coefficient over distance, or the problem divided into homogeneous regions with different [[alpha]].

**Contrast mini-example**
In a surface-treated part, the student uses a single [[alpha]] and predicts the same attenuation throughout the thickness. Actually, the hardened zone has [[alpha]] three times greater, making real attenuation much higher than predicted.

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Ignoring dispersion in high-frequency materials

**Why it seems correct**
The student uses the same velocity for all frequencies, assuming the medium is non-dispersive as in the simple cases previously studied.

**Why it is incorrect**
In many real materials, especially at high frequencies (>5 MHz), phase velocity depends on frequency, causing pulse distortion and affecting amplitude measurement.

**Detection signal**
If short pulses broaden significantly with distance, or if measured velocity depends on transducer frequency.

**Conceptual correction**
The material's dispersion relation must be considered, using [[v_f]] for wavelength calculations and [[v_g]] for pulse propagation.

**Contrast mini-example**
A student measures velocity with a 2 MHz transducer and gets 5900 m/s. With a 10 MHz one he gets 5700 m/s. He concludes experimental error, when actually it's normal material dispersion.

## Mathematical errors

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.


### Error 5: Confusing natural logarithm with base-10 logarithm

**Why it seems correct**
The student uses the log function on his calculator without verifying if it's natural or base-10, assuming both give the same numerical result.

**Why it is incorrect**
The relationship between amplitudes and [[alpha]] uses natural logarithm, while decibel losses use base-10 logarithm. Exchanging them introduces a 2.303 factor error.

**Detection signal**
If calculated [[alpha]] values are consistently 2.3 times greater or smaller than tabulated material values.

**Conceptual correction**
To extract [[alpha]] from amplitude measurements use ln([[amplitud_a_distancia_x]]/[[amplitud_inicial]]), for dB calculations use 20·log10([[amplitud_a_distancia_x]]/[[amplitud_inicial]]). Do not interchange the formulas.

**Contrast mini-example**
A student calculates [[alpha]] using log10 instead of ln and gets 0.23 Np/m when the real value is 0.53 Np/m. His penetration prediction is twice the real one.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 6: Forgetting the negative sign in the exponent

**Why it seems correct**
The student focuses on attenuation magnitude and neglects the sign, writing the exponential relationship without the negative exponent instead of including the negative sign in the exponential.

**Why it is incorrect**
The negative sign is fundamental: without it, amplitude would grow exponentially with distance, violating energy conservation.

**Detection signal**
If calculations predict amplitudes greater than initial at positive distances, or if calculated [[alpha]] is negative.

**Conceptual correction**
Attenuation always reduces amplitude, therefore the exponent must be negative in the exponential relationship.

**Contrast mini-example**
A student predicts that at 5 cm a signal will be twice as intense as at the surface. This violates thermodynamics; the correct result is that it will be smaller, never greater.

## Interpretation errors

**Mini-example of contrast**

Check 6: In Dispersion and Attenuation in Solids, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.


### Error 7: Interpreting attenuation length as maximum depth

**Why it seems correct**
The student assumes [[longitud_de_atenuacion]] is the maximum inspection distance, taking the physical limit as the practical limit.

**Why it is incorrect**
[[longitud_de_atenuacion]] is the distance where amplitude reduces to 37%, not where it becomes undetectable. Useful depth depends on equipment threshold, typically 3-5 times [[longitud_de_atenuacion]].

**Detection signal**
If concluding that a material cannot be inspected beyond [[longitud_de_atenuacion]] when in practice echoes are obtained at greater distances.

**Conceptual correction**
[[longitud_de_atenuacion]] is a characteristic scale, not an absolute limit. Maximum detection depth depends on equipment noise threshold and is generally several times [[longitud_de_atenuacion]].

**Contrast mini-example**
For [[longitud_de_atenuacion]] of 2 cm, the student concludes inspection beyond 2 cm is impossible. Actually, with sensitive equipment echoes can be detected up to 6-10 cm, though with very reduced amplitude.

**Mini-example of contrast**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.


### Error 8: Not considering [[alpha]] temperature dependence

**Why it seems correct**
The student uses [[alpha]] values measured at room temperature without considering the part may be at different temperature during testing.

**Why it is incorrect**
In many materials, especially polymers, [[alpha]] varies dramatically with temperature, changing by factors of 10 or more.

**Detection signal**
If attenuation results are inconsistent between measurements made at different times or environmental conditions.

**Conceptual correction**
Temperature must be recorded and correction factors applied if testing is performed at temperatures different from calibration.

**Contrast mini-example**
A student characterizes a polymer at 20°C with [[alpha]] of 50 Np/m. During testing at 60°C, he uses the same value and predicts 10 cm depth. Actually, at 60°C [[alpha]] is 500 Np/m, limiting penetration to 1 cm.

## Quick self-control rule

To verify that attenuation treatment is correct, follow this verification sequence:

First, confirm the amplitude-distance relationship is exponential by graphing ln([[amplitud_a_distancia_x]]/[[amplitud_inicial]]) vs [[distancia_de_propagacion]]; you should get a straight line. Second, verify calculated [[alpha]] is positive and constant throughout the range. Third, ensure you have compensated geometric dispersion before attributing losses to the material. Fourth, check you are using natural logarithm for [[alpha]] calculations and base-10 logarithm for decibels. Finally, verify estimated detection depth is several times [[longitud_de_atenuacion]], not equal to [[longitud_de_atenuacion]].

If any of these points fail, review the procedure before accepting the results.

**Mini-example of contrast**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.