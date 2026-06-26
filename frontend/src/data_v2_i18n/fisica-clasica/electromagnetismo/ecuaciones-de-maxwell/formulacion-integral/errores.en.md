## Conceptual errors


### Error 1: Confusing closed surfaces with open contours

#### Why it seems correct
Because in both cases we are "enclosing" something. The student associates the word "enclosed" from Gauss's law with the "enclosed area" of an Ampère loop, thinking they are interchangeable.

#### Why it is incorrect
The topology is fundamentally different. A closed surface (Gauss) delimits a 3D volume and has no edges. A closed contour (Ampère/Faraday) delimits an open 2D surface and does have an edge (the path itself). Mixing them voids the meaning of the divergence theorem and Stokes's theorem.

#### Detection signal
If you try to calculate a flux through a sphere for Ampère's law, or if you try to calculate a circulation along the edge of a cube. The validator will detect that the result units do not match the sought magnitude.

#### Conceptual correction
Visualize Gauss's law as a "bubble" (net flux) and Ampère/Faraday laws as a "soap ring" (circulation on the edge). Never try to measure circulation on an edgeless bubble.

#### Mini-example
*Incorrect*: Calculate the magnetic circulation [[circulacion_magnetica]] by integrating over the surface of a sphere.
*Correct*: Calculate the magnetic circulation [[circulacion_magnetica]] along a circular path bordering a flat disk.

**Why it seems correct**

Check 1: In Integral Formulation, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Why it is incorrect**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Conceptual correction**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 2: Omitting the negative sign of the Faraday-Lenz law

#### Why it seems correct
Because when working with electrical magnitudes, we are often only interested in the absolute value of the voltage to power a component, ignoring the direction of the induced current.

#### Why it is incorrect
It violates Lenz's law and, by extension, the principle of conservation of energy. Without the negative sign, induction would create a field that would reinforce the initial variation, generating an infinite and impossible feedback.

#### Detection signal
The induced device spontaneously heats up or the simulation shows a current growing without limit. Mathematically, the sign of the [[emf]] will be opposite to that dictated by the right-hand rule.

#### Conceptual correction
Nature is "conservative": it always tries to maintain the magnetic status quo. If the magnetic flux [[flujo_magnetico]] increases, the system response must be to create a field that decreases it.

#### Mini-example
*Incorrect*: The [[emf]] is equal to the magnetic flux variation [[variacion_del_flujo_magnetico]].
*Correct*: The [[emf]] is equal to the magnetic flux variation [[variacion_del_flujo_magnetico]] with a changed sign, as defined in:

{{f:faraday}}

## Model errors

**Why it seems correct**

Check 6: In Integral Formulation, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

**Why it is incorrect**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Detection signal**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.

**Conceptual correction**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.


### Error 3: Ignoring displacement current in dynamic regimes

#### Why it seems correct
Because in most direct current circuit problems, there are no capacitors or these are already charged, so the [[variacion_del_flujo_electrico]] term is zero and the original Ampère's law works perfectly.

#### Why it is incorrect
Without this term, it is impossible to explain how light propagates through vacuum or how current flows "through" a capacitor. The Ampère-Maxwell law would be inconsistent depending on the chosen surface.

#### Detection signal
The magnetic circulation [[circulacion_magnetica]] calculated in a wire does not match that calculated just next to a capacitor plate. There is a discontinuity in the magnetic field that should not be there.

#### Conceptual correction
The change in electric flux [[flujo_electrico]] is, for magnetic purposes, identical to a physical current. Maxwell called it "displacement current" to emphasize this equivalence.

#### Mini-example
*Incorrect*: Claiming that between the plates of a capacitor the magnetic field is zero because no electrons are moving.
*Correct*: Using the displacement term to find the circulation [[circulacion_magnetica]] in empty space using the relationship:

{{f:ampere_maxwell}}

## Mathematical errors

**Why it seems correct**

Check 11: In Integral Formulation, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

**Why it is incorrect**

Check 12: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 12.

**Detection signal**

Check 13: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 13.

**Conceptual correction**

Check 14: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 14.

**Mini-example of contrast**

Check 15: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 15.


### Error 4: Inconsistency in the orientation of normals and trajectories

#### Why it seems correct
Because one assumes that they can choose any rotation direction and that the final sign will adjust itself at the end of the problem.

#### Why it is incorrect
The relationship between the surface vector and the sense of the line integral is rigidly defined by the right-hand rule. If you change one without changing the other, you will get an [[emf]] or a [[circulacion_magnetica]] with the inverted sign.

#### Detection signal
You get a counter-electromotive force that is actually electromotive, or a magnetic field that rotates in the opposite direction expected by the current [[corriente_encerrada]].

#### Conceptual correction
Always use the thumb rule: if the thumb points in the direction of the surface normal, the fingers when closing indicate the positive sense of the integration path.

#### Mini-example
*Incorrect*: Defining the normal upward and considering the clockwise direction as positive.
*Correct*: If the normal goes upward, the positive sense of circulation is counterclockwise (right-hand rule).

## Interpretation errors

**Why it seems correct**

Check 16: In Integral Formulation, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 16.

**Why it is incorrect**

Check 17: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 17.

**Detection signal**

Check 18: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 18.

**Conceptual correction**

Check 19: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 19.

**Mini-example of contrast**

Check 20: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 20.


### Error 5: Considering that the net electric flux is equal to the local field

#### Why it seems correct
Because in problems with a lot of symmetry, such as a sphere, the flux [[flujo_electrico]] and the field E are proportional to the area, which leads to confusing them as if they were the same thing.

#### Why it is incorrect
Flux [[flujo_electrico]] is a scalar magnitude resulting from summing (integrating) the entire field over a surface. The electric field is a vector magnitude that exists at each point. You can have a very intense field at one point but zero net flux over a closed surface.

#### Detection signal
Attempting to sum flux units with local field strength units. Or claiming that the flux is zero because the field is zero at a single point on the surface.

#### Conceptual correction
Flux is the "total number of lines" crossing a boundary, not the intensity of the force at a specific point on that boundary.

#### Mini-example
*Incorrect*: Saying that the electric field is zero because the net flux [[flujo_electrico]] through a surface enclosing a dipole is zero.
*Correct*: Recognizing that the flux is zero because the lines leaving the positive charge enter the negative one, even though the internal field is intense.

## Quick self-control rule

1. **Units**: Does the magnitude have flux units (Wb, V·m) or circulation units (T·m, V)?
2. **Topology**: Is the chosen surface closed? If not, use Ampère or Faraday, not Gauss.
3. **Sign**: Does the induced current direction oppose the cause that produces it?
4. **Coherence**: Does the displacement term match the capacitor charging current?

**Why it seems correct**

Check 21: In Integral Formulation, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 21.

**Why it is incorrect**

Check 22: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 22.

**Detection signal**

Check 23: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 23.

**Conceptual correction**

Check 24: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 24.

**Mini-example of contrast**

Check 25: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 25.