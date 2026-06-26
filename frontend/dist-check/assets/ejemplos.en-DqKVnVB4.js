const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A particle moves on a plane and, at one instant, its state is given in polar form with [[r]]=3.2 m and [[theta]]=2.20 rad. The exam asks for conversion to Cartesian coordinates [[x]] and [[y]], consistency checks for dimensions and quadrant signs, and justification of whether the selected representation is appropriate with or without a radial constraint. A second task requests degree-of-freedom counting for a 3D discrete system with [[n]]=2 entities and [[C]]=3 independent constraints.\r
\r
## Data\r
\r
- Position magnitudes: [[x]], [[y]], [[r]], [[theta]].\r
- Structural magnitudes: [[n]], [[C]], [[f]].\r
- Angle convention: positive counterclockwise from positive x axis.\r
- Units: distance in meters, angle in radians.\r
\r
## System definition\r
\r
The base system is a point particle in a Euclidean plane. Under this definition, equivalent coordinate pairs can represent the same physical state. Without additional constraints, two independent positional coordinates are needed. With fixed-radius restriction, independent-state dimension is reduced.\r
\r
The second task concerns a different structural setting, a discrete 3D count, used to compare geometric representation with true independence counting.\r
\r
## Physical model\r
\r
The physical model combines projection relations linking [[r]], [[theta]] with [[x]], [[y]], and a structural counting relation for [[f]]. Core-magnitude roles are explicit: [[r]] sets spatial scale, [[theta]] sets orientation, [[x]] and [[y]] are projections, and [[n]] with [[C]] determines effective independence.\r
\r
{{f:posicion_generalizada}}\r
\r
{{f:velocidad_generalizada}}\r
\r
{{f:energia_cinetica_generalizada}}

In this layer, [[q]] fixes the selected configuration and [[qdot]] describes its time change. The map returns [[r_vec]], its derivative returns [[v]], and, with [[m]], it allows [[T]] to be evaluated without confusing physical speed with the rate of a coordinate. If the map depends on [[t]], that dependence also contributes to velocity.

{{f:x_desde_polar}}
\r
{{f:y_desde_polar}}\r
\r
{{f:radio_cartesiano}}\r
\r
{{f:grados_libertad}}\r
\r
## Model justification\r
\r
This model is valid because it addresses both geometric conversion and structural counting through physically interpretable relations. Validity requires Euclidean planar assumptions for projection, declared angular convention, and independent constraints for degree counting.\r
\r
It stops being valid without modification when constraints are non-holonomic, when [[theta]] units are mixed, or when the chosen chart is unstable for the operating region.\r
\r
## Symbolic solution

First, state the generalized layer that gives physical meaning to the coordinate choice:

{{f:posicion_generalizada}}

{{f:velocidad_generalizada}}

{{f:energia_cinetica_generalizada}}

Then use polar-to-Cartesian projection as an operational example inside that chart:
\r
{{f:x_desde_polar}}\r
\r
{{f:y_desde_polar}}\r
\r
Second, radius reconstruction for consistency:\r
\r
{{f:radio_cartesiano}}\r
\r
Third, structural independence count:\r
\r
{{f:grados_libertad}}\r
\r
The chain preserves causality: orientation and scale generate projections; constraints and entity count generate effective dimension.\r
\r
## Numerical substitution\r
\r
With [[r]]=3.2 m and [[theta]]=2.20 rad, use approximations cos(2.20)≈-0.588 and sin(2.20)≈0.809.\r
\r
Then:\r
- [[x]]≈3.2*(-0.588)=-1.88 m.\r
- [[y]]≈3.2*(0.809)=2.59 m.\r
\r
Reconstruction:\r
- [[r]]_rec≈sqrt((-1.88)^2+(2.59)^2)=sqrt(3.53+6.71)=sqrt(10.24)=3.20 m.\r
\r
Structural count with [[n]]=2 and [[C]]=3:\r
- [[f]]=3*2-3=3.\r
\r
## Dimensional validation\r
\r
[[x]] and [[y]] must have length dimension. Since [[r]] is in meters and trigonometric factors are dimensionless, projected coordinates keep meter units. Reconstructed radius also keeps length dimension through homogeneous quadratic sum and square root.\r
\r
For [[f]], both [[n]] and [[C]] are dimensionless counts, so [[f]] is dimensionless as well. Non-integer or negative inputs would invalidate physical interpretation.\r
\r
## Physical interpretation\r
\r
The result [[x]]<0 and [[y]]>0 confirms a second-quadrant state, consistent with [[theta]]=2.20 rad. This is a physical consistency check, not only arithmetic closure.\r
\r
If [[r]] increases at fixed [[theta]], both projected magnitudes scale proportionally while signs remain unchanged. If [[theta]] crosses quadrants at fixed [[r]], projection signs and relative component distribution change. This sensitivity explains why [[r]] and [[theta]] are often preferable when radial geometry dominates.\r
\r
# Real-world example\r
\r
## Context\r
\r
A simulation team builds an orbital inspection module around a fixed pivot. The first implementation uses [[x]] and [[y]] as dynamic states and applies a radial correction each step to preserve circular motion. It works in low-frequency tests but accumulates numerical noise in fast trajectories.\r
\r
The team redesigns the state definition: use [[theta]] as primary dynamic coordinate and treat [[r]] as fixed when radial constraint is dominant. Cartesian values are reconstructed for telemetry and visualization only.\r
\r
## Physical estimation\r
\r
Internal benchmark over 5000 steps:\r
- Cartesian corrected model: mean radial error 3.4 mm, relative runtime 1.00.\r
- Angular generalized-coordinate model: mean radial error 1.1 mm, relative runtime 0.68.\r
\r
The gain is not from arbitrary tuning. It comes from aligning model states with true independence and removing redundant correction loops.\r
\r
A quantitative sensitivity check reinforces the conclusion. Keeping [[r]] fixed and perturbing [[theta]] by 0.05 rad changes reconstructed projections by about 0.16 m at [[r]]=3.2 m, which matches first-order trigonometric expectation. Under the Cartesian-corrected model, the same perturbation produces larger variance because correction and integration interact at each step.\r
\r
A second estimate compares cumulative drift after 10 seconds at identical step size. The Cartesian-corrected scheme accumulates roughly three times more radial deviation than the generalized-coordinate scheme. This indicates that error is structurally amplified by redundant-state enforcement, not only by local numerical truncation.\r
\r
From an engineering perspective, that order-of-magnitude difference is operationally relevant. It can determine whether tolerance requirements are met in closed-loop inspection tasks.\r
\r
## Interpretation\r
\r
The physical decision is to keep [[theta]] as dominant generalized coordinate when the radial constraint is primary. Cartesian coordinates remain operational outputs, not redundant dynamic states.\r
\r
This example mirrors the leaf logic: select coordinates by structure, not by notation habit. The practical result is better stability, lower computational cost, and stronger interpretability when validating model behavior.
`;export{e as default};
