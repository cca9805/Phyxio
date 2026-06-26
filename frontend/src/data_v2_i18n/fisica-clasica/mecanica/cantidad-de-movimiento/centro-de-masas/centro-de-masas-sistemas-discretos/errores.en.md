# Common mistakes: center of mass of discrete systems

## Conceptual errors

### Error 1: Computing the CM as an arithmetic average of positions without weighting by mass

**Why it seems correct:**
With two particles, dividing the distance by 2 seems to give the correct midpoint.

**Why it is wrong:**
The CM is a mass-weighted average:

{{f:xcm_sum}}

Without weighting, unequal masses give wrong results.

**Detection signal:**
The student uses \((x_1 + x_2)/2\) when the masses are different.

**Conceptual correction:**
Always include each particle's mass as a weight in the average.

**Mini contrast example:**
If the masses are different, the simple average does not give the real center of mass. Always use

{{f:xcm_sum}}

and check that the result is closer to the larger mass.

### Error 2: Forgetting that the CM is a vector and computing only one component

**Why it seems correct:**
If the problem looks one-dimensional, a single coordinate seems enough.

**Why it is wrong:**
In the plane or in space, the CM has as many components as dimensions. Omitting a coordinate gives an incomplete position.

**Detection signal:**
The student writes a single number as the answer when the system lies in a plane.


**Conceptual correction:**
Compute each component separately and report the full vector:

{{f:xcm_sum}}

{{f:ycm_sum}}


**Mini contrast example:**
If the system is in the plane, report all components using

{{f:xcm_sum}}

and

{{f:ycm_sum}}

The CM is a full vector.

## Model errors

### Error 3: Placing the coordinate origin in a way that unnecessarily complicates the sum

**Why it seems correct:**
Any origin gives the same result because the CM does not depend on the coordinate system.

**Why it is wrong:**
The final result is the same, but a poorly chosen origin generates positions with many digits and reduces readability, increasing the probability of numerical error.

**Detection signal:**
The calculation uses coordinates with unnecessarily large or negative numbers, and the student makes errors when adding.

**Conceptual correction:**
Place the origin at one of the particles or at a symmetry point of the system to simplify the sum.

**Mini contrast example:**
Choose the origin to simplify calculations. For example, placing the origin at one of the particles allows you to use

{{f:xcm_sum}}

with simpler numbers and fewer errors.

## Mathematical errors

### Error 4: Adding masses in the numerator but forgetting the total mass [[M]] in the denominator

**Why it seems correct:**
The student remembers multiplying $m_i x_i$ but believes the sum already incorporates normalisation.

**Why it is wrong:**
Without dividing by the total mass [[M]]:

{{f:M_sum}}

the result has units of kg·m and is not a position.

**Detection signal:**
The result has unusual units (kg·m) or a numerically huge value compared to the positions.

**Conceptual correction:**
Always verify that the result has units of length and falls between the extreme positions of the system.

**Mini contrast example:**
If you forget to divide by the total mass

{{f:M_sum}}

the result has no physical meaning. Always use

{{f:xcm_sum}}

to get a valid position.

## Interpretation errors

### Error 5: Interpreting that the center of mass must coincide with one of the system's particles

**Why it seems correct:**
The student looks for the CM among the existing point masses, as if it were one of them.

**Why it is wrong:**
The CM is a weighted average that can fall at any point in space, even where there is no mass.

**Detection signal:**
The student rounds the [[xcm]] result to the position of the nearest particle.

**Conceptual correction:**
Accept that the center of mass is a computed coordinate that does not need to coincide with any actual particle.

**Mini contrast example:**
Two equal masses of 1 kg at \(x = 0\) and \(x = 4\) m. The CM is at \(x = 2\) m, where there is no particle.

## Quick self-control rule

Before accepting a result, apply this checklist:

1. **Units**: does the result have the expected dimensions?
2. **Sign**: is the sign consistent with the direction chosen in the diagram?
3. **Order of magnitude**: is the value physically reasonable for the scenario?
4. **Limiting case**: does the formula reduce to a known result when a parameter goes to zero or infinity?
