## Conceptual errors


### Error 1: adding contributions as scalars

**Why it seems correct**

The analogy with adding positive intensities suggests that every [[contribucion_diferencial_de_campo]] only increases the total field. The learner overgeneralizes from one-dimensional problems.

**Why it is incorrect**

Contributions are vectorial. Two elements may produce fields in opposite or partly transverse directions, so they are not added as magnitudes.

**Detection signal**

The result always grows when segments are added, even when the geometry has cancellation symmetry.

**Conceptual correction**

Before adding, decide each contribution direction with the right-hand rule.

**Contrast mini-example**

At the center of a loop, lateral components cancel and axial components reinforce. Adding every magnitude without directions would exaggerate the result.

## Model errors

**Mini-example of contrast**

Check 1: In Biot-Savart Law, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

### Error 2: using the long-wire formula for any conductor

**Why it seems correct**

The integrated wire formula is familiar and seems to represent every straight or nearby current.

**Why it is incorrect**

That expression assumes a very long straight wire and a point far from the ends. In a loop, a short segment, or an off-symmetry point, geometry changes.

**Detection signal**

The learner uses only [[distancia_al_punto_de_observacion]] and [[corriente_electrica]] although the statement describes loop radius [[radio_de_espira]], an arc, or finite length.

**Conceptual correction**

Choose the integrated formula only after recognizing the geometry. If symmetry is insufficient, return to [[contribucion_diferencial_de_campo]].

**Contrast mini-example**

A point at the center of a loop does not see an infinite wire. Contribution directions organize axially and depend on [[radio_de_espira]], not on perpendicular distance to a long wire.

## Mathematical errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

### Error 3: forgetting the angular factor

**Why it seems correct**

Distance seems to dominate the problem, so the learner thinks all nearby elements contribute equally.

**Why it is incorrect**

The factor [[s_theta]] measures the effective part of the oriented element. An element aligned with the point may contribute very little even when it is close.

**Detection signal**

The calculation does not distinguish perpendicular elements from nearly aligned elements.

**Conceptual correction**

Each contribution requires distance and orientation. Measuring only how far the point is does not suffice.

**Contrast mini-example**

Two elements at the same distance may contribute different fields if one points almost toward the point and the other is perpendicular to the observation direction.

## Interpretation errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

### Error 4: thinking an integrated result works away from its point

**Why it seems correct**

The result for the loop center seems like a property of the whole coil.

**Why it is incorrect**

Exact symmetry is used to cancel some components and reinforce others. Away from the center, those cancellations change.

**Detection signal**

The learner applies the central field to points along the axis far away or to lateral points.

**Conceptual correction**

Read each integrated result as a solution with its own geometric domain.

**Contrast mini-example**

At the loop center, all useful contributions point alike. Moving toward an edge makes some contributions weigh more than others, and the field is no longer obtained from the same formula.

## Quick self-control rule

Before calculating, answer five questions: what geometry the current has, where the point is, what [[distancia_al_punto_de_observacion]] represents, what role [[s_theta]] plays, and which components of [[contribucion_diferencial_de_campo]] cancel. If one answer is missing, do not substitute data.

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.