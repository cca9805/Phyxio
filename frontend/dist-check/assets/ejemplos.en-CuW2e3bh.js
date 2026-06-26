const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A block of mass [[m]]. A rigid disk has moment of inertia [[I]]. Compute the dynamic response in both cases and explain what the linear-angular analogy really means.\r
\r
## Data\r
\r
- [[m]] of 2 kg\r
- [[F]] of 10 N\r
- [[I]] of 2 kg·m²\r
- [[tau]] of 10 N·m\r
- Fixed rotation axis perpendicular to the disk\r
- Negligible friction\r
\r
## System definition\r
\r
The first system is translational: the block's center of mass is studied along a straight axis. The second system is rotational: the disk is studied around an already defined axis. The linear-angular correspondence is used to compare cause, resistance, and response, not to claim that the quantities are physically identical.\r
\r
## Physical model\r
\r
For translation we use Newton's second law with structure\r
\r
{{f:segunda_ley_newton}}\r
\r
For rotation we use the rotational second law with structure\r
\r
{{f:segunda_ley_rotacional}}\r
\r
The linear-angular correspondence organizes the bridge:\r
\r
{{f:correspondencia_lineal_angular}}\r
\r
## Model justification\r
\r
The model is valid because the block mass is constant, the disk is treated as rigid, and the rotation axis is fixed before torque is computed. Forces and torques are also interpreted as net quantities. If the axis moved, if the disk deformed, or if losses were important, the analogy would remain conceptually useful, but these two simple equations would no longer be sufficient to solve the problem.\r
\r
## Symbolic solution\r
\r
For the block:\r
\r
{{f:segunda_ley_newton}}\r
\r
For the disk:\r
\r
{{f:segunda_ley_rotacional}}\r
\r
For explicit mapping between both sides of the problem:\r
\r
{{f:correspondencia_lineal_angular}}\r
\r
The mathematical structure is the same: response equals cause divided by resistance. The physical meaning of each quantity is different.\r
\r
## Numerical substitution\r
\r
For translation:\r
\r
{{f:segunda_ley_newton}}\r
\r
For rotation:\r
\r
{{f:segunda_ley_rotacional}}\r
\r
The numerical values match because the data were chosen symmetrically, not because [[a]] and [[alpha]] are the same quantity. Their units and interpretations are different.\r
\r
## Dimensional validation\r
\r
In translation,\r
\r
{{f:segunda_ley_newton}}\r
\r
so the linear acceleration is dimensionally correct. In rotation,\r
\r
{{f:segunda_ley_rotacional}}\r
\r
written as rad/s^2 because the radian is dimensionless but still carries geometric meaning. This validation shows why [[m]] and [[I]] cannot be confused: their dimensions are not the same.\r
\r
## Physical interpretation\r
\r
The block accelerates because net force changes its linear motion. The disk accelerates angularly because net torque changes its state of rotation. The analogy lets both problems be read with the same causal pattern, but rotation requires an extra question: about which axis are [[I]] and [[tau]] computed? That question is not present in the same way in the linear problem.\r
\r
The matching numerical result should not hide the conceptual difference. If the mass were moved farther from the axis, [[I]] would change while [[m]] stayed the same, and [[alpha]] would no longer match [[a]]. The useful conclusion is therefore not only the number 5, but the reading: same mathematical structure, different physical content. This is also a check on the model, because the analogy is working only because both systems are idealized in parallel.\r
\r
# Real-world example\r
\r
## Context\r
\r
A bicycle wheel and a solid disk may have the same mass but do not respond equally to the same axle torque. The wheel concentrates more mass near the rim, so its moment of inertia is larger. The solid disk places more mass closer to the center, so its moment of inertia is smaller.\r
\r
## Physical estimation\r
\r
Assume two objects with [[m]] of 1 kg and radius 0.30 m. For an ideal hoop, [[I]]. For a solid disk, [[I]]. If both receive [[tau]] of 0.9 N·m, the hoop has\r
\r
{{f:segunda_ley_rotacional}}\r
\r
while the disk has\r
\r
{{f:segunda_ley_rotacional}}\r
\r
The estimate is intentionally simple, but it contains the central idea: with the same mass and outer radius, changing spatial distribution doubles the expected angular acceleration. That quantitative reading is exactly what the analogy contributes: larger rotational resistance implies a smaller response for the same torque. It also gives a reasonable scale for design decisions, because moving mass outward can matter more than adding a small amount near the axis.\r
\r
## Interpretation\r
\r
Total mass alone does not determine the rotational response. The analogy with\r
\r
{{f:correspondencia_lineal_angular}}\r
\r
helps to understand it, but it also reveals the central limit of the topic: in rotation, where the mass lies relative to the axis matters. That is why the analogy is powerful for organizing reasoning and risky when used as a mechanical substitution table.\r
\r
## Validity and limits check\r
\r
To make the comparison physically reliable, model conditions must be audited before accepting the result. First condition: the rotation axis must be defined and stable during the interval. Second condition: the body must be close to rigid, so [[I]] does not change appreciably because of deformation. Third condition: frictional losses must not dominate the balance if the ideal form of the second law is being used.\r
\r
This check changes interpretation, not only presentation. If the axis is unclear, [[tau]] stops being a net cause comparable to [[F]]. If [[I]] changes over time, angular response cannot be interpreted with a single direct substitution. And if dissipation is large, the analogy still helps to organize reasoning but is not enough for accurate prediction. In short, the example is complete only when numerical results and model-validity conditions are both reported.`;export{e as default};
