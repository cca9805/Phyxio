# Common errors

## Conceptual errors
### Error 1: treating [[Icm]] as universal for every axis

**Why it seems correct**
Students overgeneralize: if [[Icm]] is “the inertia of the body,” then it feels reusable everywhere.

**Why it is incorrect**
Inertia depends on axis choice. Using [[Icm]] on a displaced axis solves a different physical problem.

**Detection signal**
[[I]] does not change when the axis changes, or becomes smaller than [[Icm]].

**Conceptual correction**
Identify the real axis first; only then transfer from [[Icm]] if axes are parallel.

**Mini-contrast example**
A rod about its center and about its end cannot have the same inertia under the same geometry.

## Model errors
### Error 2: applying Steiner to non-parallel axes

**Why it seems correct**
Students use a false analogy: “axis changed” is mistaken for “Steiner applies.”

**Why it is incorrect**
Steiner is a parallel-axis model. Orientation changes require tensor treatment.

**Detection signal**
The same scalar correction is used for perpendicular or tilted axes.

**Conceptual correction**
Use scalar transfer only for parallel axes; switch model when orientation changes.

**Mini-contrast example**
Transferring a transverse rod inertia to a longitudinal axis with Steiner yields a number that does not match experiments.

## Mathematical errors
### Error 3: using the wrong distance for [[d]]

**Why it seems correct**
A visible point distance in a sketch is confused with axis-to-axis separation.

**Why it is incorrect**
Only the perpendicular distance between axes enters the model.

**Detection signal**
Units look right, but trend with geometry is physically inconsistent.

**Conceptual correction**
Mark both axes and draw their perpendicular separation before substitution.

**Mini-contrast example**
If two axis placements use the same [[d]], the model predicts equal [[I]] despite different geometry.

## Interpretation errors
### Error 4: rejecting large [[I]] as “unrealistic”

**Why it seems correct**
Plausibility bias: students expect values close to reference data.

**Why it is incorrect**
A large [[I]] is often the expected outcome of a large axis shift.

**Detection signal**
The computed value is manually reduced to “look reasonable.”

**Conceptual correction**
Interpret with dynamics: with the same [[tau]], larger [[I]] means smaller [[alpha]].

**Mini-contrast example**
For a long barrier pivoting at one end, forcing a small inertia predicts startup rates that are not observed in practice.

## Quick self-control rule
1. Identify real and centroidal axes.
2. Check axis parallelism.
3. Check perpendicular [[d]].
4. Verify [[I]] >= [[Icm]].
5. Confirm dynamic trend between [[tau]], [[I]], and [[alpha]].
