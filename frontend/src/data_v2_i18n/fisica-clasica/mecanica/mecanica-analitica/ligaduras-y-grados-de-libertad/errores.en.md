## Conceptual errors

### Error 1: Counting redundant constraints as independent

**Why it seems correct**
Two equations may look different while describing the same physical restriction. Seeing two expressions for [[phi]] often leads students to add two units to [[C]] without checking independence.

**Why it is wrong**
[[C]] must count only independent restrictions. If one constraint is a consequence of another, it does not remove an additional configuration direction and [[f]] becomes artificially small.

**Detection signal**
The count gives less mobility than the system visibly has, or [[lambda]] becomes extremely large without a clear physical cause.

**Conceptual correction**
Before computing [[f]], check local independence through rank or geometric reasoning. Counting written equations is not enough.

**Contrast mini-example**
Fixing a distance and also writing the same distance squared does not introduce two constraints; both equations describe one condition.

## Model errors

### Error 2: Treating a non-holonomic restriction as [[phi]]([[q]],[[t]])=0

**Why it seems correct**
Many classroom restrictions are geometric, so students try to force every condition into a position equation.

**Why it is wrong**
A velocity or rolling condition may not integrate into a configuration equation. Using holonomic counting there changes [[f]] and the meaning of [[delta_q]].

**Detection signal**
The restriction refers to admissible velocities, blocked directions, or rolling contact, but the model tries to write it only with [[q]].

**Conceptual correction**
Classify the restriction first: holonomic, non-holonomic, unilateral, or time-dependent. Then choose the formalism.

**Contrast mini-example**
A bead on a fixed rail admits [[phi]]=0. A rolling disk without slip needs a velocity relation and cannot always be reduced in the same way.

## Mathematical errors

### Error 3: Reading [[lambda]] as a free coordinate

**Why it seems correct**
The multiplier appears as an extra unknown in the equations and can be mistaken for a new state variable.

**Why it is wrong**
[[lambda]] does not increase [[f]]. It represents the intensity of the reaction associated with an active constraint.

**Detection signal**
The student adds multipliers to the degree-of-freedom count or says that a constraint creates extra motion.

**Conceptual correction**
Separate configuration variables [[q]] from auxiliary reaction variables. [[f]] depends on [[Nq]] and [[C]], not on the number of multipliers.

**Contrast mini-example**
A pendulum with a rigid string has a constraint reaction, but that reaction is not a second independent coordinate.

## Interpretation errors

### Error 4: Confusing virtual displacement [[delta_q]] with real displacement

**Why it seems correct**
Both are written as small variations and often appear near differential equations.

**Why it is wrong**
[[delta_q]] is an instantaneous compatible variation. It is not a time trajectory and does not imply actual evolution.

**Detection signal**
[[delta_q]] is used to compute time, velocity, or travelled path without dynamics or initial conditions.

**Conceptual correction**
Read [[delta_q]] as a compatibility and virtual-work tool; read [[qdot]] as actual time change.

**Contrast mini-example**
For a particle constrained to a circle, the tangential virtual displacement indicates an allowed direction. It does not state how far the particle travels in one second.

## Quick self-control rule

Check in order: 1) can the restriction be written as [[phi]]([[q]],[[t]])=0? 2) are the [[C]] constraints independent? 3) is [[f]] a non-negative integer? 4) is [[lambda]] a reaction rather than a coordinate? 5) is [[delta_q]] used only as a compatible variation?

If one answer fails, stop the calculation and repair the constraint architecture first.
