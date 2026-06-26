const e=`# Frequent errors in magnetic flux

## Conceptual errors

### Error 1: Confusing magnetic field with magnetic flux

**Why it seems correct**

The student sees that a stronger field produces a stronger effect and applies overgeneralization: if [[B]] increases, they think flux is fully determined.

**Why it is incorrect**

[[Phi_B]] also depends on [[A]] and [[cos_theta]]. A large field can produce zero flux if it is tangent to the surface or if the effective area does not intercept the field.

**Detection signal**

The student answers only in teslas or does not mention area or orientation when interpreting the result.

**Conceptual correction**

Read [[Phi_B]] as field crossing an oriented surface. The field is a local cause; flux is a global geometric reading.

**Contrast mini-example**

A 1 T field parallel to a loop plane does not cross the loop. Although the field is intense, [[B_perp]] is zero and the resulting flux is also zero.

## Model errors

### Error 2: Using the uniform model in a strongly nonuniform field

**Why it seems correct**

The student wants a short formula and takes a value of [[B]] measured near one part of the surface as if it represented the whole area.

**Why it is incorrect**

If the field changes strongly over [[A]], some zones contribute more than others and cancellations may occur. The uniform model no longer represents the physics of the setup.

**Detection signal**

The result changes excessively depending on the point chosen to measure [[B]].

**Conceptual correction**

Use the uniform model only if [[B]] is almost constant. Otherwise, divide the surface into parts or use a local reading of the normal field.

**Contrast mini-example**

Near a magnet edge, half a loop may receive strong field and the other half weak field. Taking only the maximum value overestimates [[Phi_B]] and predicts induction that does not match the experiment.

## Mathematical errors

### Error 3: Using the angle with the plane instead of the normal

**Why it seems correct**

The surface is drawn as a visible plane, so the student measures the most obvious angle in the drawing. This is a representation confusion.

**Why it is incorrect**

The factor [[cos_theta]] refers to the orientation between the field and the surface normal. Measuring relative to the plane swaps maxima and zeros.

**Detection signal**

The student obtains maximum flux when the field appears to slide along the surface.

**Conceptual correction**

Always draw the normal before deciding [[cos_theta]]. If the field is tangent to the plane, [[B_perp]] must be zero.

**Contrast mini-example**

A loop seen edge-on by the field intercepts no field lines. If the calculation predicts maximum flux, the angle used belongs to the plane, not to the normal.

## Interpretation errors

### Error 4: Forgetting the sign of flux

**Why it seems correct**

In many exercises only the absolute value matters, so the student removes the sign by operational habit.

**Why it is incorrect**

The sign of [[Phi_B]] keeps the crossing direction relative to the normal. When studying [[DeltaPhi]], losing the sign can reverse the Lenz reading.

**Detection signal**

The student interprets an increase of positive flux and a decrease of negative flux as equivalent.

**Conceptual correction**

Keep one fixed normal throughout the problem and compare [[Phi_i]] with [[Phi_f]] using the same convention.

**Contrast mini-example**

If a coil rotates half a turn, flux may go from positive to negative. Saying only that the magnitude is equal hides that [[DeltaPhi]] is large.

## Quick self-control rule

Before closing a flux problem, check four questions. First, whether [[B]] is really uniform. Second, whether [[A]] is the effective crossed area. Third, whether [[cos_theta]] was taken with the normal. Fourth, whether [[Phi_i]] and [[Phi_f]] use the same sign convention.

If any answer is doubtful, do not substitute data. Redraw field, surface, and normal. Most errors in magnetic flux are geometry errors before they are calculation errors.
`;export{e as default};
