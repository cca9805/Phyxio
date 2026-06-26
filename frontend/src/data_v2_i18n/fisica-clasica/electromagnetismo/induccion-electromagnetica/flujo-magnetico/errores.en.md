## Conceptual errors


### Error 1: Confusing magnetic field with magnetic flux

**Why it seems correct**

The student sees that a stronger field produces a stronger effect and applies overgeneralization: if [[campo_magnetico_uniforme]] increases, they think flux is fully determined.

**Why it is incorrect**

[[flujo_magnetico]] also depends on [[area_de_la_superficie]] and [[cos_theta]]. A large field can produce zero flux if it is tangent to the surface or if the effective area does not intercept the field.

**Detection signal**

The student answers only in teslas or does not mention area or orientation when interpreting the result.

**Conceptual correction**

Read [[flujo_magnetico]] as field crossing an oriented surface. The field is a local cause; flux is a global geometric reading.

**Contrast mini-example**

A 1 T field parallel to a loop plane does not cross the loop. Although the field is intense, [[componente_normal_del_campo]] is zero and the resulting flux is also zero.

## Model errors

**Mini-example of contrast**

Check 1: In Magnetic Flux, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Using the uniform model in a strongly nonuniform field

**Why it seems correct**

The student wants a short formula and takes a value of [[campo_magnetico_uniforme]] measured near one part of the surface as if it represented the whole area.

**Why it is incorrect**

If the field changes strongly over [[area_de_la_superficie]], some zones contribute more than others and cancellations may occur. The uniform model no longer represents the physics of the setup.

**Detection signal**

The result changes excessively depending on the point chosen to measure [[campo_magnetico_uniforme]].

**Conceptual correction**

Use the uniform model only if [[campo_magnetico_uniforme]] is almost constant. Otherwise, divide the surface into parts or use a local reading of the normal field.

**Contrast mini-example**

Near a magnet edge, half a loop may receive strong field and the other half weak field. Taking only the maximum value overestimates [[flujo_magnetico]] and predicts induction that does not match the experiment.

## Mathematical errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Using the angle with the plane instead of the normal

**Why it seems correct**

The surface is drawn as a visible plane, so the student measures the most obvious angle in the drawing. This is a representation confusion.

**Why it is incorrect**

The factor [[cos_theta]] refers to the orientation between the field and the surface normal. Measuring relative to the plane swaps maxima and zeros.

**Detection signal**

The student obtains maximum flux when the field appears to slide along the surface.

**Conceptual correction**

Always draw the normal before deciding [[cos_theta]]. If the field is tangent to the plane, [[componente_normal_del_campo]] must be zero.

**Contrast mini-example**

A loop seen edge-on by the field intercepts no field lines. If the calculation predicts maximum flux, the angle used belongs to the plane, not to the normal.

## Interpretation errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Forgetting the sign of flux

**Why it seems correct**

In many exercises only the absolute value matters, so the student removes the sign by operational habit.

**Why it is incorrect**

The sign of [[flujo_magnetico]] keeps the crossing direction relative to the normal. When studying [[variacion_de_flujo_magnetico]], losing the sign can reverse the Lenz reading.

**Detection signal**

The student interprets an increase of positive flux and a decrease of negative flux as equivalent.

**Conceptual correction**

Keep one fixed normal throughout the problem and compare [[flujo_inicial]] with [[flujo_final]] using the same convention.

**Contrast mini-example**

If a coil rotates half a turn, flux may go from positive to negative. Saying only that the magnitude is equal hides that [[variacion_de_flujo_magnetico]] is large.

## Quick self-control rule

Before closing a flux problem, check four questions. First, whether [[campo_magnetico_uniforme]] is really uniform. Second, whether [[area_de_la_superficie]] is the effective crossed area. Third, whether [[cos_theta]] was taken with the normal. Fourth, whether [[flujo_inicial]] and [[flujo_final]] use the same sign convention.

If any answer is doubtful, do not substitute data. Redraw field, surface, and normal. Most errors in magnetic flux are geometry errors before they are calculation errors.

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.