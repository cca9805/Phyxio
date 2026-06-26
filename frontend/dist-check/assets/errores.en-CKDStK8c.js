const e=`# Common errors: elastic collisions

## Conceptual errors

### Error 1: Believing that in an elastic collision, velocities always swap

**Why it seems correct:**
In school examples with equal masses, it is indeed observed that the projectile stops and the target flies off. It is tempting to generalize this behavior to any collision.

**Why it is incorrect:**
The total exchange of velocities only occurs if the masses are equal. If the masses are different, the final velocities depend on the mass ratio. If the projectile is much heavier, it will continue moving forward after the collision.

**Detection signal:**
The student writes that the projectile systematically stops in all exercises without checking mass parity.

**Conceptual correction:**
Always use the general solution formulas:

{{f:v1f}}

{{f:v2f}}

which explicitly consider the mass values.

**Contrast mini-example:**
A 1 kg ball at 10 m/s hits a 3 kg ball at rest. If they swapped, the 1 kg one would stop. Actually, it rebounds at -5 m/s and the heavy one advances at 5 m/s.

### Error 2: Thinking that the kinetic energy of each body is individually conserved

**Why it seems correct:**
If the total kinetic energy is conserved, the brain tends to simplify by thinking that each part keeps its original energy budget.

**Why it is incorrect:**
What is conserved is the total system sum. During the impact, there is a net energy transfer between the bodies. One body can lose almost all its energy and yield it to the other, as long as the final balance is zero.

**Detection signal:**
The student states that the speed (velocity magnitude) of each body cannot change during the collision.

**Conceptual correction:**
Allow individual energies to fluctuate. The elastic collision is a redistribution, not an individual isolation.

**Contrast mini-example:**
In Newton's Cradle, the first ball loses ALL its kinetic energy and stops, while the last one gains it ALL. The sum is constant, but the parts change radically.

## Model errors

### Error 3: Confusing elastic collision with collision without deformation

**Why it seems correct:**
The term "elastic" suggests rigid materials that do not deform, such as hardened steel.

**Why it is incorrect:**
Physically, every collision involves deformation. What defines an elastic collision is that the deformation is reversible and returns 100 percent of the accumulated potential energy. It is not the absence of deformation, but the absence of internal dissipation.

**Detection signal:**
Classifying a collision as inelastic simply because the bodies "look" deformable (like rubber balls).

**Conceptual correction:**
The criterion is the translational kinetic energy balance [[DeltaK]], not the visual hardness of the material.

**Contrast mini-example:**
Two high-quality rubber balls deform a lot during contact but return all the energy (elastic). Two pieces of lead barely deform visually but absorb energy in their crystal lattice (inelastic).

## Mathematical errors

### Error 4: Using only one conservation equation

**Why it seems correct:**
The law of momentum conservation [[p]] is known and seems sufficient to solve the problem quickly.

**Why it is incorrect:**
An elastic collision has two output unknowns: [[v1f]] and [[v2f]]. A single linear equation produces infinite possible solutions. The kinetic energy condition [[K]] is needed to close the system.

**Detection signal:**
The student finds a relationship between final velocities but cannot determine their unique values or chooses one at random.

**Conceptual correction:**
Always set up the system of two equations or use the relative velocity relation:

{{f:rel}}

**Contrast mini-example:**
If you only use momentum, you could say both masses move together (inelastic collision). Only by applying energy conservation do you discard that option and find the correct elastic solution.

## Interpretation errors

### Error 5: Ignoring the sign reversal in relative velocity

**Why it seems correct:**
The relative separation speed is calculated but it is forgotten that the bodies are now moving away instead of approaching.

**Why it is incorrect:**
In a 1D elastic collision, the relative velocity must reverse its sign. If the sign convention is not respected, the result may show bodies physically "passing through" each other.

**Detection signal:**
Obtaining results where the rear sphere has more speed than the front one after the collision (physically impossible).

**Conceptual correction:**
Verify that the inversion relation holds:

{{f:rel}}

the separation velocity must be the negative of the approach velocity.

**Contrast mini-example:**
A 2 kg ball at 6 m/s hits a 2 kg ball at rest. Initial relative velocity = 6 m/s. After the elastic collision, ball 1 stops and ball 2 moves at 6 m/s. The final relative velocity is 0 minus 6 equals -6 m/s. The sign has reversed, confirming separation.

## Quick self-control rule

Before handing in an exercise, verify these four critical points:
1. **Energy Conservation**: Have I checked that the initial energy equals the final?
2. **Rebound Signs**: If the projectile is much smaller than the target, has my final velocity changed sign?
3. **Consistent Units**: Are all my masses in kg and my velocities in m/s?
4. **Common Sense**: Do the bodies move away after impact or do they seem stuck together?
`;export{e as default};
