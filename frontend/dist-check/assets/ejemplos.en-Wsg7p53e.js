const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A mechanical system is initially described with [[Nq]]=6 generalized coordinates [[q]]. It has [[C]]=2 independent holonomic constraints, one of them possibly dependent on [[t]]. The exercise asks for the admissibility criterion, the degree-of-freedom count [[f]], the compatible virtual displacements [[delta_q]], and the meaning of a multiplier [[lambda]] in a formulation using [[L]] and [[qdot]].
\r
## Data\r
\r
- Coordinates before reduction: [[Nq]]=6.
- Independent constraints: [[C]]=2.
- Generalized coordinates: [[q]]; generalized velocities: [[qdot]].
- Constraint condition: [[phi]]=0, with possible time dependence [[t]].
\r
## System definition\r
\r
The base system is not defined by its Cartesian drawing but by the set of configurations satisfying its constraints. Each independent equation removes one free direction from configuration space. The central diagnosis is whether the restrictions are independent and whether they should be imposed by explicit reduction or by multipliers.
\r
## Physical model\r
\r
The physical model uses [[phi]]=0 to select admissible configurations, [[Nq]] and [[C]] to count [[f]], [[delta_q]] to identify compatible variations, and [[lambda]] to represent constraint reaction in dynamics governed by [[L]]. This separates admissible geometry, structural counting, and equation of motion.
\r
{{f:ligadura_holonomica}}\r
\r
{{f:desplazamiento_virtual_admisible}}\r
\r
{{f:multiplicadores_lagrange}}\r
\r
{{f:conteo_grados_libertad}}\r
\r
## Model justification\r
\r
The model is valid because the constraints are assumed holonomic, differentiable, and independent in the studied region. It stops being valid without modification if a restriction is redundant, if the condition cannot be written as [[phi]]([[q]],[[t]])=0, or if the rank of the constraint matrix changes during motion.
\r
## Symbolic solution\r
\r
First, admissibility condition:

{{f:ligadura_holonomica}}

Second, virtual-displacement compatibility:

{{f:desplazamiento_virtual_admisible}}
\r
Third, constraint reaction in the dynamics:

{{f:multiplicadores_lagrange}}

Fourth, structural independence count:
\r
{{f:conteo_grados_libertad}}\r
\r
The chain preserves causality: [[phi]] states the condition, [[delta_q]] states the allowed variations, [[lambda]] represents the reaction, and [[f]] summarizes how many independent coordinates remain.
\r
## Numerical substitution\r
\r
With [[Nq]]=6 and [[C]]=2:
- [[f]]=6-2=4.

Intermediate interpretation: the system can be written with six coordinates, but only four combinations remain independent while the two constraints are active. The multiplier [[lambda]] does not add a degree of freedom; it encodes the reaction needed to maintain [[phi]]=0.
\r
## Dimensional validation\r
\r
For [[f]], both [[Nq]] and [[C]] are dimensionless counts, so [[f]] is dimensionless as well. In the condition [[phi]]=0, all terms of the constraint must share physical dimension. In the equation with [[lambda]], the units of [[lambda]] depend on the dimension of [[phi]] and must produce a generalized force compatible with [[L]].
\r
## Physical interpretation\r
\r
The result [[f]]=4 means two possible directions have been blocked by independent constraints. If one constraint were redundant, using [[C]]=2 would overcount the reduction and artificially remove mobility. The correct physical reading is to verify independence first and interpret the reduction afterward.

The multiplier [[lambda]] should therefore be read as a diagnostic of constraint reaction, not as a new coordinate.

This distinction protects the count and keeps the later dynamical interpretation physically anchored.
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
