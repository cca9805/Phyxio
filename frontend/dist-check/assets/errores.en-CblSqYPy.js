const e=`# Common errors in the Biot-Savart law

## Conceptual errors

### Error 1: adding contributions as scalars

**Why it seems correct**

The analogy with adding positive intensities suggests that every [[dB]] only increases the total field. The learner overgeneralizes from one-dimensional problems.

**Why it is incorrect**

Contributions are vectorial. Two elements may produce fields in opposite or partly transverse directions, so they are not added as magnitudes.

**Detection signal**

The result always grows when segments are added, even when the geometry has cancellation symmetry.

**Conceptual correction**

Before adding, decide each contribution direction with the right-hand rule.

**Contrast mini-example**

At the center of a loop, lateral components cancel and axial components reinforce. Adding every magnitude without directions would exaggerate the result.

## Model errors

### Error 2: using the long-wire formula for any conductor

**Why it seems correct**

The integrated wire formula is familiar and seems to represent every straight or nearby current.

**Why it is incorrect**

That expression assumes a very long straight wire and a point far from the ends. In a loop, a short segment, or an off-symmetry point, geometry changes.

**Detection signal**

The learner uses only [[r]] and [[I]] although the statement describes loop radius [[R]], an arc, or finite length.

**Conceptual correction**

Choose the integrated formula only after recognizing the geometry. If symmetry is insufficient, return to [[dB]].

**Contrast mini-example**

A point at the center of a loop does not see an infinite wire. Contribution directions organize axially and depend on [[R]], not on perpendicular distance to a long wire.

## Mathematical errors

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

Before calculating, answer five questions: what geometry the current has, where the point is, what [[r]] represents, what role [[s_theta]] plays, and which components of [[dB]] cancel. If one answer is missing, do not substitute data.
`;export{e as default};
