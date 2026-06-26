const e=`## Conceptual errors

### Error 1: Believing that more charges reduce each one's individual force

**Why it seems correct**

The student incorrectly generalises the idea that "influences are shared out". In fluid mechanics, when there are several sinks, each one shares the available flow. By analogy, the student assumes that several charges "share" the force on the test charge, so each one's contribution is smaller than if it were alone.

**Why it is incorrect**

The superposition principle states that each charge acts **independently** on the test charge, with exactly the same intensity as if the others did not exist. The force of [[q_i]] on the test charge is always [[k_e]]·[[q_i]]/[[r_i]]² with no reduction whatsoever. The total force [[F_total]] may be larger, smaller or equal to any individual contribution depending on directions, but never because each individual contribution has been "weakened".

**Detection signal**

The student divides the force of an individual charge by [[N_cargas]] to get each one's contribution, or writes the total force as the force of a single charge divided by the number of charges present.

**Conceptual correction**

The force of each source charge on the test charge is independent of the other charges. Each contribution is computed directly with Coulomb's law, with no sharing factor. The electric interaction between two charges is not affected by the presence of third charges.

**Contrast mini-example**

If a 2 µC charge exerts a force of 0.1 N on a test charge at a certain distance, and a second 2 µC charge is added at the same distance in the same direction, the total force is not 0.05 N (half), but 0.2 N (the sum). The second charge adds its own full force of 0.1 N without reducing the first one's.

### Error 2: Adding magnitudes instead of vectors

**Why it seems correct**

Scalar algebra is more comfortable than vector algebra. The student has solved many scalar sum problems and tends to apply the same operation, interpreting "adding forces" as "adding their numerical intensities".

**Why it is incorrect**

The electric force is a vector. Two forces equal in magnitude but opposite in direction produce zero [[F_total]], not double. Scalar addition always overestimates the magnitude of [[F_total]] unless all contributions are strictly parallel and in the same sense, which is the least common case in real geometries.

**Detection signal**

The student obtains [[F_total]] as the arithmetic sum of the individual magnitudes, without decomposing into components or using the Pythagorean theorem. The result is always greater than or equal to any individual contribution.

**Conceptual correction**

To add vectors: decompose each vector into x and y components, add all x-components together and all y-components together, and compute the magnitude of the resultant vector with the Pythagorean theorem. The angle is obtained with the arctangent of the y-component divided by the x-component.

**Contrast mini-example**

Two forces of 3 N and 4 N acting perpendicularly: scalar addition gives 7 N, but the correct vector magnitude is 5 N (square root of 9 plus 16). If the two forces act in opposite directions, scalar addition gives 7 N, but the vector magnitude is 1 N.

## Model errors

### Error 3: Applying the superposition model in the presence of conductors without treating induction

**Why it seems correct**

The student directly applies the superposition sum formula with the charges as they appear in the problem statement, without considering that nearby conductors redistribute charges on their surfaces and modify the resultant field.

**Why it is incorrect**

When conductors are present, free charges on their surfaces redistribute in response to the external field. Induced charges create their own field which adds to that of the original charges. Direct summation of the original charge fields without including induced charges either underestimates or overestimates the real field.

**Detection signal**

The problem mentions metallic conductors or conducting spheres near the source charges, but the student uses only the charge values from the statement without considering image charges or induced charges.

**Conceptual correction**

For nearby conductors, induced charges (image charges or the method-of-images solution) must be included in the superposition sum. The simple point charge model is only valid when conductors are far enough away that induction is negligible.

**Contrast mini-example**

A positive charge at 5 cm from a grounded conducting sphere attracts the sphere more than simple Coulomb field predicts, because it induces negative charges on the near side of the sphere. The superposition model without image charges predicts a smaller force than the real one.

## Mathematical errors

### Error 4: Measuring distances incorrectly

**Why it seems correct**

With several charges present, the student sometimes uses the distance between two source charges as [[r_i]], confusing the separation between charges with the distance from each charge to the observation point.

**Why it is incorrect**

The superposition sum requires the distance from **each source charge i** to the **observation point**, not the distance between source charges. If there are two charges separated by 10 cm and the observation point is 8 cm from the first and 6 cm from the second, the correct values are 0.08 m and 0.06 m, not 0.10 m.

**Detection signal**

The student uses a single distance value for all contributions, or uses the distance between source charges as if it were the distance from each one to the observation point.

**Conceptual correction**

For each source charge i, draw a segment from that charge to the observation point and measure its length. That length is [[r_i]] for that specific charge. Each charge has its own [[r_i]], which is in general different.

**Contrast mini-example**

With two charges at points (0,0) and (0.1,0) and the observation point at (0.05,0.05), the distance from the first charge to the point is the square root of (0.05² + 0.05²), and the distance from the second is the same by symmetry. Using 0.10 m for both gives a result wrong by a factor of the square root of two.

## Interpretation errors

### Error 5: Concluding that a zero field implies no charges or that space is empty

**Why it seems correct**

The student associates zero electric field with absence of cause. If there is no field, they conclude there are no charges. This association works for a single charge but fails for multi-charge systems.

**Why it is incorrect**

Zero [[E_total]] at a point is compatible with the presence of multiple source charges whose contributions cancel vectorially at that point. Zero field does not indicate absence of charges but balance among contributions. Moving away from that point, the field is no longer zero because the distances [[r_i]] change differently for each charge.

**Detection signal**

The student writes "at that point there is no field because the charges cancel" or "the field is zero because the charges neutralise each other", interpreting field cancellation as charge annihilation.

**Conceptual correction**

The charges do not annihilate: their fields simply cancel at that particular point. The charges continue to exist, continue to create their individual fields, and at any other point in space the field will not be zero. The zero-field point is a geometric consequence of the relative position of the charges, not of their disappearance.

**Contrast mini-example**

Two equal positive charges 10 cm apart: at the midpoint between them [[E_total]] is zero because the two fields are equal and opposite. But if a third charge is placed at that midpoint, it experiences repulsive forces from both original charges. The original charges are still present and active; their effect simply cancels at that single point.

## Quick self-control rule

After calculating [[F_total]] or [[E_total]] by superposition, verify the following three points:

1. **Vector sum**: the result was obtained by adding x and y components separately, not by adding magnitudes. If only scalar arithmetic was used, recalculate.

2. **Correct distances**: each distance [[r_i]] measures from source charge i to the observation point, not between source charges. If all distances used are equal but the charges are at different positions, there is an error.

3. **Signs included**: the sign of each [[q_i]] was incorporated into the direction of its vector contribution. If the absolute value of all charges was used, the sign of negative charge contributions is inverted.
`;export{e as default};
