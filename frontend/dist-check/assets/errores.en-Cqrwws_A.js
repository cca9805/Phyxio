const e=`# Common Errors: Definition of the Center of Mass

## Conceptual errors

### Error 1: confusing center of mass with midpoint

**Why it seems correct**
When the masses are equal, the center of mass coincides with the geometric midpoint.

**Why it is incorrect**
If [[m1]] and [[m2]] are different, [[xcm]] must shift toward the larger mass. The midpoint ignores mass weighting.

**Detection sign**
The result lies exactly between [[x1]] and [[x2]] even though one mass is clearly larger.

**Conceptual correction**
Compare the masses first and predict which position the center should move toward.

**Mini-example**
If [[m2]] is three times [[m1]], [[xcm]] must lie closer to [[x2]] than to [[x1]].

### Error 2: believing the center of mass must be occupied by material

**Why it seems correct**
The result is a specific position, so it may be imagined as a particle.

**Why it is incorrect**
The center of mass is a representative position of the system. It may lie in empty space between two bodies.

**Detection sign**
A result is rejected only because it does not coincide with any real object.

**Conceptual correction**
Interpret [[xcm]] as a collective point, not as an additional mass.

**Mini-example**
Two separated masses may have their center of mass in the space between them.

## Model errors

### Error 3: not defining which bodies belong to the system

**Why it seems correct**
It may seem that the center of mass depends only on the objects drawn.

**Why it is incorrect**
The total mass [[M]] changes when a part is included or excluded. Changing the system changes [[xcm]].

**Detection sign**
A mass appears in the diagram but is not included in [[M]].

**Conceptual correction**
Before calculating, write a clear boundary for the system.

**Mini-example**
If a battery is on a board and the board has relevant mass, ignoring it changes the center of mass of the set.

### Error 4: mixing position origins

**Why it seems correct**
Each position may be measured correctly in isolation.

**Why it is incorrect**
The definition only compares positions that share origin and positive direction.

**Detection sign**
[[x1]] is measured from one end and [[x2]] from another.

**Conceptual correction**
Rewrite every position on one axis before using the formula.

**Mini-example**
A position of 20 cm from the left and another of 20 cm from the right cannot be averaged without converting them to the same origin.

## Mathematical errors

### Error 5: using a mass difference as denominator

**Why it seems correct**
Other topics contain subtractions, and that algebraic pattern may be copied.

**Why it is incorrect**
The total mass [[M]] is a sum of positive contributions, not a difference.

**Detection sign**
[[M]] is smaller than [[m1]] or [[m2]] even though both masses are positive.

**Conceptual correction**
Compute [[M]] with the registered sum before substituting into [[xcm]].

**Mini-example**
For masses of 2 kg and 6 kg, the total mass is 8 kg, not 4 kg.

### Error 6: confusing [[Mxcm]] with a position

**Why it seems correct**
The symbol contains [[xcm]], so it may look like the same quantity.

**Why it is incorrect**
[[Mxcm]] has dimensions of mass times length. It is a structural relation, not a coordinate.

**Detection sign**
[[Mxcm]] is written with units of meters.

**Conceptual correction**
Divide by [[M]] to obtain the position [[xcm]].

**Mini-example**
24 kg m is not a position; if [[M]] = 8 kg, then [[xcm]] = 3 m.

## Interpretation errors

### Error 7: not checking the physical interval

**Why it seems correct**
After substituting numbers, the procedure may look finished.

**Why it is incorrect**
With positive masses, [[xcm]] must lie between [[x1]] and [[x2]].

**Detection sign**
The positions lie between 0 m and 4 m, but the result is 6 m.

**Conceptual correction**
Always perform a range check before accepting the result.

**Mini-example**
If both masses are positive and are located at 0 m and 4 m, the center cannot lie at 5 m.

### Error 8: missing the general vector reading

**Why it seems correct**
The first example is usually one-dimensional and uses only [[xcm]].

**Why it is incorrect**
The general definition uses [[m_i]], [[r_i]], and [[rcm]] when the system has more particles or several dimensions.

**Detection sign**
A plane problem is solved with one coordinate without justification.

**Conceptual correction**
Use the vector form if the positions are not all on one axis.

**Mini-example**
Three masses on a table need two components to locate [[rcm]], not only one horizontal coordinate.

## Quick self-control rule

Before finishing an exercise, check five points: the system is defined, positions use a common frame, [[M]] is the sum of masses, [[xcm]] has units of length, and the result shifts toward the larger masses.
`;export{e as default};
