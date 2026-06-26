const n=`## Conceptual errors\r
\r
### Error 1: Saying rolling is only rotation\r
\r
**Why it seems correct**  \r
The wheel visibly spins.\r
\r
**Why it is incorrect**  \r
Rolling also requires center-of-mass translation. [[omega]] alone does not determine motion unless [[R]] and contact are known.\r
\r
**Detection signal**  \r
The explanation never mentions [[v_cm]] or the center of mass.\r
\r
**Conceptual correction**  \r
Read rolling as a coupled motion: center advance plus spin.\r
\r
**Mini contrast example**  \r
A wheel can spin in place without rolling forward.\r
\r
## Model errors\r
\r
### Error 1: Assuming no slipping from the shape alone\r
\r
**Why it seems correct**  \r
The object is round, so it seems natural to call the motion rolling.\r
\r
**Why it is incorrect**  \r
No-slip rolling is a contact condition, not a shape property.\r
\r
**Detection signal**  \r
Measured [[v_cm]] does not match [[omega]] through [[R]].\r
\r
**Conceptual correction**  \r
Check contact before using the rolling condition.\r
\r
**Mini contrast example**  \r
A locked tire on ice translates while its angular speed is nearly zero.\r
\r
## Mathematical errors\r
\r
### Error 1: Dropping the radius\r
\r
**Why it seems correct**  \r
Both quantities describe motion of the same wheel.\r
\r
**Why it is incorrect**  \r
Linear and angular velocity have different units. The radius converts angular motion into linear motion.\r
\r
**Detection signal**  \r
Units do not reduce to meters per second.\r
\r
**Conceptual correction**  \r
Use [[R]] explicitly and keep the sign convention consistent.\r
\r
**Mini contrast example**  \r
Two wheels with the same [[omega]] but different radii do not have the same [[v_cm]].\r
\r
## Interpretation errors\r
\r
### Error 1: Reading the contact point as a permanent material point\r
\r
**Why it seems correct**  \r
The contact point is drawn at the bottom of the wheel.\r
\r
**Why it is incorrect**  \r
In ideal rolling, the point at the bottom is instantaneously at rest, but a different material point reaches the bottom later.\r
\r
**Detection signal**  \r
The explanation says the same point remains fixed on the ground.\r
\r
**Conceptual correction**  \r
Distinguish instantaneous contact from a permanent point of the wheel.\r
\r
**Mini contrast example**  \r
A mark on the tire touches the ground once per turn, not continuously.\r
\r
## Quick self-control rule\r
\r
Before closing, check center motion, spin, radius, contact, and graph coherence. If any one of those is missing, the bridge between translation and rotation has not been justified.`;export{n as default};
