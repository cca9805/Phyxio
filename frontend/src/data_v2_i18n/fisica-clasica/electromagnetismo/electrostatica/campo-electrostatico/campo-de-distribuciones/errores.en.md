## Conceptual errors


### Error 1: Summing magnitudes instead of vectors

**Por qué parece correcto**

Working with positive scalars seems simpler and less error-prone than working with signed vectors. The student incorrectly generalises the idea that "the total field is larger than each partial field", which leads them to sum magnitudes without considering direction.

**Por qué es incorrecto**

The field [[contribucion_diferencial_de_campo]] of each element is a vector whose direction depends on the relative position between the element and the field point. Two symmetric contributions have components that partially cancel. Summing magnitudes ignores these cancellations and systematically overestimates the resultant field [[campo_electrico_resultante]].

**Señal de detección**

The result for [[campo_electrico_resultante]] exceeds the maximum possible value if all the charge were concentrated at the point closest to the field point. If the result exceeds that limit, it is a certain sign that magnitudes were summed instead of components.

**Corrección conceptual**

Decompose [[contribucion_diferencial_de_campo]] into Cartesian components before integrating. Integrate each component separately. Compute the magnitude of the resultant vector only at the end, after completing all integrals.

**Mini-ejemplo de contraste**

A charged ring at its perpendicular bisector plane: each ring element creates a [[contribucion_diferencial_de_campo]] with a radial and an axial component. The radial components of opposite elements cancel exactly. Summing magnitudes gives a non-zero result in the radial direction, which is physically wrong: by the ring's symmetry, [[campo_electrico_resultante]] at the bisector plane is strictly axial.

## Model errors

**Why it seems correct**

Check 1: In Field of Distributions, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Why it is incorrect**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Conceptual correction**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 2: Using the infinite plane model outside its domain

**Por qué parece correcto**

The infinite plane formula is simple and does not depend on [[r_dist]], making it convenient for any distance. The student does not distinguish between the "close to the plane" regime (where the model is valid) and the "far from the plane" regime (where the field already decays).

**Por qué es incorrecto**

The infinite plane model is valid only when [[r_dist]] is much smaller than the real plane's dimensions. When [[r_dist]] is comparable to the plane's dimensions, edge contributions become significant and the field starts to decay with distance, contrary to what the ideal model predicts.

**Señal de detección**

If the experimentally measured field decreases with distance from the plane while the model predicts a constant field, the distance [[r_dist]] is already comparable to the plane's size. The model has left its validity domain.

**Corrección conceptual**

Verify that [[r_dist]] is much smaller than the smallest dimension of the plane before using the infinite plane formula. If not, integrate [[contribucion_diferencial_de_campo]] for the finite geometry or use numerical methods.

**Mini-ejemplo de contraste**

A disc of radius 0.1 m charged with uniform [[sigma]]: at [[r_dist]] = 0.5 m (five times the radius), the field is not constant but decays noticeably. Applying the infinite plane formula would give a distance-independent field, which is incorrect for that geometry at that scale.

## Mathematical errors

**Why it seems correct**

Check 6: In Field of Distributions, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

**Why it is incorrect**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Detection signal**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.

**Conceptual correction**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.


### Error 3: Confusing [[r_dist]] with the coordinate to the origin

**Por qué parece correcto**

In problems with the source at the origin, the distance from the field point to the origin coincides with the source-point distance. The student generalises this special case to all situations, even when the source is not at the origin.

**Por qué es incorrecto**

In an extended distribution, the source element occupies a position `r'` that varies along the distribution. The relevant distance for computing [[contribucion_diferencial_de_campo]] is the separation between that source position and the field point, not the distance from the field point to the origin. Using the distance to the origin introduces an error in the integrand denominator that invalidates the entire integral.

**Señal de detección**

If [[r_dist]] appears in the integrand as a constant (not depending on the integration variable), the student has likely confused it with the distance to the origin. The source-point distance always varies along the distribution.

**Corrección conceptual**

Explicitly define the source position vector (as a function of the integration variable) and the field point position vector (fixed during integration). Compute [[r_dist]] as the magnitude of the difference between the two vectors before substituting into the integrand.

**Mini-ejemplo de contraste**

For a wire segment between the extremes ±L/2 on the x-axis, with the field point at (0, d), the source-point distance of an element at x is precisely [[r_dist]] and equals the square root of the sum of squares of the coordinates x and d, not simply the coordinate d. Using only d in the denominator produces an incorrect integrand and an overestimated field.

## Interpretation errors

**Why it seems correct**

Check 11: In Field of Distributions, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

**Why it is incorrect**

Check 12: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 12.

**Detection signal**

Check 13: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 13.

**Conceptual correction**

Check 14: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 14.

**Mini-example of contrast**

Check 15: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 15.


### Error 4: Interpreting the constant plane field as absence of source

**Por qué parece correcto**

In everyday intuition, a field that does not vary with distance suggests "there is nothing there" or the source is very far away. The student confuses field uniformity with the absence of physical action.

**Por qué es incorrecto**

The constant field of the infinite plane does not mean [[campo_electrico_resultante]] is weak or the source is irrelevant: it means the source geometry is so extended in two dimensions that contributions from distant elements exactly compensate the greater [[r_dist]], keeping [[campo_electrico_resultante]] constant. The field is real, finite, and able to exert forces on test charges.

**Señal de detección**

If the student argues that "the field is constant because the source is weak", there is a confusion between the field amplitude and its spatial dependence. The value of [[campo_electrico_resultante]] depends on [[sigma]], not on whether the field varies with distance or not.

**Corrección conceptual**

The constant field of the plane is a consequence of perfect planar symmetry: each distant element has a greater distance but also a greater "solid-angle" contribution, and both effects compensate exactly. The amplitude of [[campo_electrico_resultante]] is determined by [[sigma]] and the permittivity of vacuum, independently of distance.

**Mini-ejemplo de contraste**

Doubling [[sigma]] doubles [[campo_electrico_resultante]] even though the field remains constant with distance. This shows that the field amplitude does depend on the source; only its spatial variation is zero by symmetry.

## Quick self-control rule

Before accepting any result for [[campo_electrico_resultante]] of a continuous distribution, verify:

1. **Decay law**: the wire field falls inversely with [[r_dist]]; the plane field is constant; a sphere or point charge falls as [[r_dist]] squared. If the result does not follow its geometry's law, there is an error in the integrand or integration limits.
2. **Field direction**: the wire field is radial and perpendicular to the wire; the plane field is perpendicular to the plane. If there are components in the direction forbidden by symmetry, there is an error in component cancellation.
3. **Dimensions**: the result for [[campo_electrico_resultante]] must have units of volts per metre. Verify that [[lambda]] divided by (ε₀ · length) gives V/m; that [[sigma]] divided by ε₀ gives V/m; that [[rho_vol]] · length divided by ε₀ gives V/m.
4. **Order of magnitude**: [[campo_electrico_resultante]] from nanocoulombs/metre at centimetre distances should be of the order of kilovolts/metre. A result in megavolts/metre for laboratory densities indicates a factor-of-ten unit error.

**Why it seems correct**

Check 16: In Field of Distributions, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 16.

**Why it is incorrect**

Check 17: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 17.

**Detection signal**

Check 18: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 18.

**Conceptual correction**

Check 19: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 19.

**Mini-example of contrast**

Check 20: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 20.