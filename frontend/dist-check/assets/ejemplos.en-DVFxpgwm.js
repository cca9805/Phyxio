const n=`# Exam-type example\r
\r
## Problem statement\r
\r
A solid cylinder of mass [[M]] and radius [[R]] rolls without slipping down an inclined plane at angle [[theta]]. Find the center-of-mass acceleration [[a]], the angular acceleration [[alpha]], and the static friction [[fs]] that makes pure rolling possible.\r
\r
The key datum is not the absolute mass, but how inertia is distributed. For a solid cylinder we use [[beta]] of 0.5, so [[I]] can be written as\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
. The physical question is whether the available gravitational drive is split between translation and rotation in a way compatible with the no-slip constraint.\r
\r
## Data\r
\r
Use [[M]] of 4.0 kg, [[R]] of 0.20 m, [[theta]] of 30 degrees,\r
\r
{{f:aceleracion-rodadura-combinada}}\r
\r
, and [[beta]] of 0.5. The body starts from rest, the plane is rigid, and there is enough static friction to avoid relative slipping at the contact point.\r
\r
Choose the positive axis down the plane. With that convention, the gravitational component that drives the motion is M g sintheta, while static friction [[fs]] points up the plane because it must produce the torque that increases [[alpha]].\r
\r
## System definition\r
\r
The system is the whole cylinder. Translation is described through the center of mass; rotation is described by torques about the center of mass. This separation avoids mixing net force with net torque: the same friction [[fs]] reduces translational drive, but also creates the spin.\r
\r
The unknowns are [[a]], [[alpha]], and [[fs]]. The pure rolling condition closes the system because it states that linear acceleration and angular acceleration are not independent.\r
\r
## Physical model\r
\r
The physical model is anchored to the core magnitudes [[a]], [[alpha]], [[fs]], [[theta]], [[M]], [[R]], and [[beta]]. The tangential component of gravity accelerates the center of mass, but static friction redistributes part of that cause into rotation. This is why the translation equation, the rotation equation, and the kinematic rolling constraint must appear together before using the compact acceleration formula.\r
\r
This is not a matter of choosing one isolated equation: without translation, the net force is missing; without rotation, the torque that produces [[alpha]] is missing; without the rolling constraint, [[a]] and [[alpha]] are decoupled and the body could slide.\r
\r
## Model justification\r
\r
The physical model combines three relations from the leaf. Translation is described by the translation equation,\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
. Rotation is described by the rotation equation,\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
. The kinematic coupling is imposed by the rolling constraint,\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
.\r
\r
Static friction is not set equal to\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
; that expression only gives the maximum available friction. Here [[fs]] is calculated as the friction required for rolling without slipping. If the surface cannot provide that value, the model stops being valid and sliding must be modeled instead.\r
\r
## Symbolic solution\r
\r
The solution explicitly uses the four core relations from the leaf. Substitute\r
\r
{{f:ley-rotacion-rodadura}}\r
\r
 and\r
\r
{{f:vinculo-rodadura-acel}}\r
\r
into the rotation equation:\r
\r
{{f:ley-rotacion-rodadura}}\r
\r
This gives\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
. Insert it into the translation equation:\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
Therefore:\r
\r
{{f:aceleracion-rodadura-combinada}}\r
\r
This is the combined acceleration relation. The other unknowns then follow from\r
\r
{{f:aceleracion-rodadura-combinada}}\r
\r
 and\r
\r
{{f:aceleracion-rodadura-combinada}}\r
\r
.\r
\r
## Numerical substitution\r
\r
For [[theta]] of 30 degrees,\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
. Then:\r
\r
{{f:aceleracion-rodadura-combinada}}\r
\r
The angular acceleration is:\r
\r
{{f:vinculo-rodadura-acel}}\r
\r
The required static friction is:\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
## Dimensional validation\r
\r
The translation equation\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
 compares forces, so every term has dimension \`[M L T⁻²]\`. The rotation equation\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
 compares torques, with dimension \`[M L² T⁻²]\`. The constraint\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
 is also consistent because [[alpha]] times [[R]] gives \`[L T⁻²]\`.\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
.\r
\r
The final result has acceleration units: \\(g\\sin\\theta\\) is measured in m/s^2, while \\(1+\\beta\\) is dimensionless. This is why the combined acceleration cannot depend on [[M]] or [[R]] for bodies with the same [[beta]].\r
\r
## Physical interpretation\r
\r
The cylinder does not accelerate at gsintheta because part of the tendency to accelerate is invested in producing rotation. Static friction [[fs]] does not dissipate energy in ideal pure rolling; it redistributes the dynamic response between translation and spin. That is why a sphere, a cylinder, and a hoop can have different masses and still be ordered by [[beta]].\r
\r
The value 3.27\\ m/s^2 means that the cylinder keeps two thirds of the acceleration a frictionless block would have on the same ramp. The remaining third appears as effective rotational inertia.\r
\r
# Real-world example\r
\r
## Context\r
\r
On a maintenance ramp, an industrial roller of\r
\r
{{f:aceleracion-rodadura-combinada}}\r
\r
.30 m is moved slowly. Its geometry is approximated by a thick hollow cylinder with [[beta]] of 0.8. The slope is [[theta]] of 12 degrees, and we want to check whether the roller can maintain pure rolling without demanding unrealistic static friction.\r
\r
## Physical estimation\r
\r
The expected acceleration from the combined relation is:\r
\r
{{f:ley-rotacion-rodadura}}\r
\r
The required friction, using the rotational derivation together with the kinematic constraint, is\r
\r
{{f:ley-rotacion-rodadura}}\r
\r
:\r
\r
{{f:ley-rotacion-rodadura}}\r
\r
The normal force is approximately\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
. Therefore the surface needs\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
. This is low for rubber on dry flooring, but it can matter if there is oil, fine dust, or polished metal.\r
\r
## Interpretation\r
\r
The important reading is not only that\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
, but that the dynamic condition demands a specific static friction. If the available friction exceeds 108.5 N, the roller behaves as a rigid rolling body and the translation equation remains coupled to the rotation equation. If not, the contact slips, [[alpha]] is no longer \\(a/R\\), and the analysis must switch models.\r
\r
In engineering, this calculation separates two decisions: the roller geometry controls acceleration through [[beta]], while contact safety is evaluated by comparing [[fs]] with the maximum available static friction.`;export{n as default};
