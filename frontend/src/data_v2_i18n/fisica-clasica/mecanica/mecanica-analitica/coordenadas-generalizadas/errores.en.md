## Conceptual errors

### Error 1: Treating spatial dimension as degree-of-freedom count

**Why it seems correct**
A common overgeneralization assumes that a 3D setting always implies three independent coordinates.

**Why it is incorrect**
Constraints reduce independence, so [[f]] does not necessarily match spatial dimension.

**Detection signal**
[[f]] is reported without explicit use of [[C]] and without checking independence.

**Conceptual correction**
Separate geometric embedding from configuration-space structure before counting.

**Mini contrast example**
Two particles in 3D with fixed separation are not six-free-coordinate systems.

## Model errors

### Error 2: Choosing coordinates only for algebraic convenience

**Why it seems correct**
Shorter algebra often looks efficient and can mask loss of physical clarity.

**Why it is incorrect**
Without explicit meaning, variables cannot be physically validated.

**Detection signal**
The modeler cannot state observable meaning for each chosen coordinate.

**Conceptual correction**
Choose coordinates by independence and physical interpretability first.

**Mini contrast example**
A numerically stable fit may still violate geometric constraints if variables are physically opaque.

## Mathematical errors

### Error 3: Mixing degree and radian conventions in [[theta]]

**Why it seems correct**
Different tools default to different angular conventions.

**Why it is incorrect**
Trigonometric projections become inconsistent across [[x]], [[y]], and [[r]].

**Detection signal**
Quadrant sign expectations do not match computed components.

**Conceptual correction**
Declare angular units and preserve them throughout the workflow.

**Mini contrast example**
Using 90 as radians yields absurd projections; converting 90 degrees to radians restores coherence.

## Interpretation errors

### Error 4: Reading [[r]] as traveled path length

**Why it seems correct**
Learners often transfer intuition from path length to radial distance.

**Why it is incorrect**
[[r]] is instantaneous state distance to origin, not cumulative trajectory length.

**Detection signal**
[[r]] is compared directly with odometry without geometric justification.

**Conceptual correction**
Separate state variables from accumulated quantities before interpretation.

**Mini contrast example**
In circular motion, [[r]] stays constant while traveled distance continuously grows.

## Quick self-control rule

Use this sequence before finalizing results: 1) does each variable have explicit physical meaning? 2) are constraints counted without redundancy? 3) are units coherent, especially for [[theta]]? 4) does interpretation separate state from accumulation?

If any answer is no, stop and rebuild the model layer. This rule catches hidden inconsistencies early and protects causal interpretation quality.