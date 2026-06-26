const e=`## Conceptual errors\r
### Error 1: believing that surface tension is a total force\r
**Why it seems correct**  \r
The unit N/m contains newtons and the student interprets [[sigma]] as if it were already a force. It is an incorrect analogy with weight or normal force.\r
\r
**Why it is incorrect**  \r
[[sigma]] must be multiplied by an effective length [[L]] to obtain [[F]]. Without geometry there is no total force.\r
\r
**Detection signal**  \r
The calculation gives newtons per meter when the problem asks for newtons.\r
\r
**Mini-contrast example**\r
If you calculate the force on a 10 cm ring, the result must be different than on a 20 cm one for the same liquid. If it doesn't change, you have forgotten to multiply by the length.\r
\r
**Conceptual correction**  \r
First identify the contact boundary and then calculate the surface force with the corresponding relationship.\r
\r
### Error 2: thinking that all capillarity rises\r
**Why it seems correct**  \r
School examples usually use water and glass, where the rise is positive.\r
\r
**Why it is incorrect**  \r
The sign of [[h]] depends on wetting and the angle [[theta]]. A liquid that does not wet can produce capillary depression.\r
\r
**Detection signal**  \r
The student always writes a positive [[h]] even if the problem indicates a convex meniscus or poor wetting.\r
\r
**Mini-contrast example**\r
With mercury on glass, the column goes down instead of up. The cosine of an obtuse angle is negative, reflecting this physical depression.\r
\r
**Conceptual correction**  \r
Read the contact angle before deciding the physical sign of the vertical displacement.\r
\r
## Model errors\r
### Error 1: using Laplace for a flat surface\r
**Why it seems correct**  \r
The Laplace formula seems like a universal rule for any surface.\r
\r
**Why it is incorrect**  \r
The jump [[dp]] depends on curvature. If [[R]] is huge, the interface approximates flat and the effect tends to be small.\r
\r
**Detection signal**  \r
A large pressure jump appears on an almost flat surface.\r
\r
**Mini-contrast example**\r
In a calm pool, the pressure jump between air and water is negligible. In a microscopic drop, that same jump can be several kilopascals.\r
\r
**Conceptual correction**  \r
Use Laplace only if the radius of curvature is physically defined.\r
\r
### Error 2: ignoring the two sides of a film\r
**Why it seems correct**  \r
The drawing shows a single boundary line and it seems natural to use a single length.\r
\r
**Why it is incorrect**  \r
A soapy film has two interfaces. The measured force may include both faces.\r
\r
**Detection signal**  \r
The experimental result is approximately double the calculated one.\r
\r
**Mini-contrast example**\r
If you lift a ring from a soapy solution, the film has an inner face and an outer face. The total traction force is double what a single interface would have.\r
\r
**Conceptual correction**  \r
Before substituting, decide how many real interfaces act on the boundary.\r
\r
## Mathematical errors\r
### Error 1: using diameter instead of radius\r
**Why it seems correct**  \r
Many tubes are specified by commercial diameter.\r
\r
**Why it is incorrect**  \r
The capillary rise formula uses radius [[r]], not diameter. Using diameter reduces the result by half.\r
\r
**Detection signal**  \r
The calculated rise is systematically lower than expected.\r
\r
**Mini-contrast example**\r
If the problem says "2 mm tube", the value of [[r]] is 1 mm. Substituting 2 mm directly into Jurin's formula will give a height that is exactly half the real one.\r
\r
**Conceptual correction**  \r
Convert diameter to radius before using the formula.\r
\r
### Error 2: mixing surface tension units\r
**Why it seems correct**  \r
Some tables give mN/m and the student enters that number as N/m.\r
\r
**Why it is incorrect**  \r
A factor of a thousand changes [[F]], [[dp]] and [[h]] by the same factor.\r
\r
**Detection signal**  \r
Forces or heights come out a thousand times larger or smaller.\r
\r
**Mini-contrast example**\r
If you use 72 (mN/m) instead of 0.072 (N/m) for water, the capillary height calculation could give meters instead of millimeters, a physically impossible result.\r
\r
**Conceptual correction**  \r
Always convert [[sigma]] to N/m before calculating.\r
\r
## Interpretation errors\r
### Error 1: confusing viscosity and surface tension\r
**Why it seems correct**  \r
Both properties seem to describe "resistance" of the liquid.\r
\r
**Why it is incorrect**  \r
viscosity controls dissipation by motion; [[sigma]] controls interface energy. One affects flow, the other surface and curvature.\r
\r
**Detection signal**  \r
The student uses viscosity in a static problem of drops or capillaries.\r
\r
**Mini-contrast example**\r
An oil drop and a water drop have very different viscosities, but their static shape depends on surface tension and wetting, not on how fast they would flow.\r
\r
**Conceptual correction**  \r
Ask if the phenomenon occurs due to internal motion or due to interface geometry.\r
\r
### Error 2: forgetting that scale decides the domain\r
**Why it seems correct**  \r
The same formulas seem applicable to any size.\r
\r
**Why it is incorrect**  \r
Surface tension dominates at small scales; at large scales weight, pressure or inertia dominate.\r
\r
**Detection signal**  \r
The result predicts enormous capillary effects in large-radius systems.\r
\r
**Mini-contrast example**\r
In a 10 cm wide glass of water, the capillary meniscus is only noticeable at the edges. Trying to calculate a "total rise" for the whole glass using Jurin's formula is a scale error.\r
\r
**Conceptual correction**  \r
Compare [[r]], [[R]] and [[L]] with actual scales before trusting the result.\r
\r
## Quick self-control rule\r
Before closing a surface tension exercise, check four questions. Am I calculating a force, a pressure jump or a height? Have I chosen the length, radius or angle correctly? Are the units of [[sigma]] in N/m? Does the sign of [[h]] make sense with the wetting? If an answer is not clear, the calculation is not yet closed.`;export{e as default};
