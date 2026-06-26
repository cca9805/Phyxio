const e=`## Conceptual errors

### Error 1: thinking constant flux induces emf

**Why it seems correct**

The wrong intuition comes from associating magnetic field with direct electrical action. If field crosses the loop, it seems voltage should appear.

**Why it is incorrect**

Faraday requires linked flux change. Constant [[Phi_B]] may exist without average [[epsilon_ind]].

**Detection signal**

The student predicts emf even though magnet, loop, and field remain in the same configuration.

**Conceptual correction**

Always look for [[DeltaPhi_B]]. Without flux change during [[Deltat]], there is no average induced emf.

**Contrast mini-example**

A stationary magnet facing a stationary loop may create stable flux. Moving the magnet creates flux change, and then emf is induced.

## Model errors

### Error 2: using total field instead of effective component

**Why it seems correct**

Magnetic field is often given as a single value, and the student substitutes it directly by habit.

**Why it is incorrect**

Flux depends on the part crossing the surface. In the uniform model, that part is represented by [[B_perp]], not by any tangent component.

**Detection signal**

The result does not change when the loop is rotated, or it uses the same flux when the field is tangent to the area.

**Conceptual correction**

Before computing flux, decide which component crosses the linked surface and which effective area participates.

**Contrast mini-example**

A loop parallel to field lines may have large geometric area and almost zero flux. Rotating it changes flux even when the field does not change.

## Mathematical errors

### Error 3: forgetting to convert the time interval

**Why it seems correct**

Time data often come in milliseconds or microseconds, and substitution feels direct. Conversion is perceived as an administrative detail.

**Why it is incorrect**

Flux-change rate uses seconds. A unit error changes [[r_Phi]] and [[epsilon_ind]] by huge factors.

**Detection signal**

The computed emf is absurdly small for an abrupt change or huge for a slow change.

**Conceptual correction**

Convert [[Deltat]] to seconds before dividing [[DeltaPhi_B]]. Then apply [[N]] and the Lenz sign.

**Contrast mini-example**

Changing the same flux in milliseconds is not equivalent to changing it in seconds. Emf responds to rate, not only change size.

## Interpretation errors

### Error 4: reading only magnitude and forgetting Lenz

**Why it seems correct**

Many exercises ask only for numerical voltage, and the sign seems like a secondary convention.

**Why it is incorrect**

The sign of [[epsilon_ind]] indicates the polarity opposing flux change. Without it, the direction of induced current is unknown.

**Detection signal**

The student gives a positive value without discussing whether flux increases or decreases relative to the chosen normal.

**Conceptual correction**

Find the magnitude if needed, but then interpret polarity through opposition to flux change.

**Contrast mini-example**

If flux increases toward a chosen normal, induced emf is oriented to oppose that increase. If flux decreases, polarity reverses.

## Quick self-control rule

Before substitution, check four points: linked surface, chosen normal, flux change, and time in seconds. If you cannot state [[DeltaPhi_B]], you are not applying Faraday but only observing a magnetic state.

Then check three coherences: [[N]] multiplies only equivalent turns, [[B_perp]] represents the crossing component, and the sign of [[epsilon_ind]] must express opposition to change.
`;export{e as default};
