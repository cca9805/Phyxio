## Conceptual errors
### Error 1: believing that surface tension is a total force
**Why it seems correct**  
The unit N/m contains newtons and the student interprets [[sigma]] as if it were already a force. It is an incorrect analogy with weight or normal force.

**Why it is incorrect**  
[[sigma]] must be multiplied by an effective length [[L]] to obtain [[F]]. Without geometry there is no total force.

**Detection signal**  
The calculation gives newtons per meter when the problem asks for newtons.

**Mini-contrast example**
If you calculate the force on a 10 cm ring, the result must be different than on a 20 cm one for the same liquid. If it doesn't change, you have forgotten to multiply by the length.

**Conceptual correction**  
First identify the contact boundary and then calculate the surface force with the corresponding relationship.

### Error 2: thinking that all capillarity rises
**Why it seems correct**  
School examples usually use water and glass, where the rise is positive.

**Why it is incorrect**  
The sign of [[h]] depends on wetting and the angle [[theta]]. A liquid that does not wet can produce capillary depression.

**Detection signal**  
The student always writes a positive [[h]] even if the problem indicates a convex meniscus or poor wetting.

**Mini-contrast example**
With mercury on glass, the column goes down instead of up. The cosine of an obtuse angle is negative, reflecting this physical depression.

**Conceptual correction**  
Read the contact angle before deciding the physical sign of the vertical displacement.

## Model errors
### Error 1: using Laplace for a flat surface
**Why it seems correct**  
The Laplace formula seems like a universal rule for any surface.

**Why it is incorrect**  
The jump [[dp]] depends on curvature. If [[R]] is huge, the interface approximates flat and the effect tends to be small.

**Detection signal**  
A large pressure jump appears on an almost flat surface.

**Mini-contrast example**
In a calm pool, the pressure jump between air and water is negligible. In a microscopic drop, that same jump can be several kilopascals.

**Conceptual correction**  
Use Laplace only if the radius of curvature is physically defined.

### Error 2: ignoring the two sides of a film
**Why it seems correct**  
The drawing shows a single boundary line and it seems natural to use a single length.

**Why it is incorrect**  
A soapy film has two interfaces. The measured force may include both faces.

**Detection signal**  
The experimental result is approximately double the calculated one.

**Mini-contrast example**
If you lift a ring from a soapy solution, the film has an inner face and an outer face. The total traction force is double what a single interface would have.

**Conceptual correction**  
Before substituting, decide how many real interfaces act on the boundary.

## Mathematical errors
### Error 1: using diameter instead of radius
**Why it seems correct**  
Many tubes are specified by commercial diameter.

**Why it is incorrect**  
The capillary rise formula uses radius [[r]], not diameter. Using diameter reduces the result by half.

**Detection signal**  
The calculated rise is systematically lower than expected.

**Mini-contrast example**
If the problem says "2 mm tube", the value of [[r]] is 1 mm. Substituting 2 mm directly into Jurin's formula will give a height that is exactly half the real one.

**Conceptual correction**  
Convert diameter to radius before using the formula.

### Error 2: mixing surface tension units
**Why it seems correct**  
Some tables give mN/m and the student enters that number as N/m.

**Why it is incorrect**  
A factor of a thousand changes [[F]], [[dp]] and [[h]] by the same factor.

**Detection signal**  
Forces or heights come out a thousand times larger or smaller.

**Mini-contrast example**
If you use 72 (mN/m) instead of 0.072 (N/m) for water, the capillary height calculation could give meters instead of millimeters, a physically impossible result.

**Conceptual correction**  
Always convert [[sigma]] to N/m before calculating.

## Interpretation errors
### Error 1: confusing viscosity and surface tension
**Why it seems correct**  
Both properties seem to describe "resistance" of the liquid.

**Why it is incorrect**  
viscosity controls dissipation by motion; [[sigma]] controls interface energy. One affects flow, the other surface and curvature.

**Detection signal**  
The student uses viscosity in a static problem of drops or capillaries.

**Mini-contrast example**
An oil drop and a water drop have very different viscosities, but their static shape depends on surface tension and wetting, not on how fast they would flow.

**Conceptual correction**  
Ask if the phenomenon occurs due to internal motion or due to interface geometry.

### Error 2: forgetting that scale decides the domain
**Why it seems correct**  
The same formulas seem applicable to any size.

**Why it is incorrect**  
Surface tension dominates at small scales; at large scales weight, pressure or inertia dominate.

**Detection signal**  
The result predicts enormous capillary effects in large-radius systems.

**Mini-contrast example**
In a 10 cm wide glass of water, the capillary meniscus is only noticeable at the edges. Trying to calculate a "total rise" for the whole glass using Jurin's formula is a scale error.

**Conceptual correction**  
Compare [[r]], [[R]] and [[L]] with actual scales before trusting the result.

## Quick self-control rule
Before closing a surface tension exercise, check four questions. Am I calculating a force, a pressure jump or a height? Have I chosen the length, radius or angle correctly? Are the units of [[sigma]] in N/m? Does the sign of [[h]] make sense with the wetting? If an answer is not clear, the calculation is not yet closed.