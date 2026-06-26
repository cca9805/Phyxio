const e=`# Physical models\r
\r
## Ideal model\r
The scalar Steiner model assumes a rigid body, two strictly parallel axes, and a well-defined perpendicular distance between them. In that setting, [[I]] is obtained by adding the centroidal inertia [[Icm]] to the geometric correction associated with [[d]].\r
\r
## Hypotheses\r
- The body behaves as rigid.\r
- The two axes are parallel.\r
- The axis separation is perpendicular and constant.\r
- The [[Icm]] value belongs to the same axis direction as the real axis.\r
\r
## When to use it\r
The model is appropriate when the problem only shifts the axis and does not change the direction of rotation. It also works well when the goal is to estimate how the dynamic response changes while the rotation direction stays the same.\r
\r
## Quantitative validity domain\r
The model is most reliable when [[d]] is comparable to the body size but does not introduce a meaningful deformation. If [[d]] becomes very large or the body stops behaving like a rigid solid, the quantitative approximation weakens and a more general model is preferable.\r
\r
## When not to use it\r
It should not be used if the axes are no longer parallel, if the body deforms appreciably, or if the mass distribution changes during motion. In those cases, the correct description moves to the inertia tensor or to direct integration.\r
\r
## Model failure signals\r
The clearest failure signals are a result where [[I]] is smaller than [[Icm]], a geometry reading that does not match the sketch, or a dynamic interpretation where the same [[tau]] fails to produce the expected [[alpha]].\r
\r
## Extended or alternative model\r
When the axis orientation changes, the extended model is the inertia tensor. When the geometry is irregular but fixed, direct integration is more general even though it is costlier.\r
\r
The transition point is explicit in practice: keep the scalar Steiner model while the axes are parallel and the body behaves as rigid. Move to the tensor model as soon as orientation changes or coupling between axis components appears in measurements. Move to direct integration when centroidal data are missing or when geometric detail dominates uncertainty.\r
\r
This transition rule is operational, not stylistic. It tells the student when the ideal model stops being trustworthy and when the extra complexity of an alternative model is justified by physical evidence.\r
\r
## Operational comparison\r
1. Scalar Steiner: fast and useful when [[Icm]] is already known.\r
2. Direct integration: more general, but more expensive.\r
3. Inertia tensor: necessary when the axis orientation changes.\r
\r
## Physical reading\r
A large [[I]] is not a calculation failure. It means that more effective mass lies farther from the real axis and that the system needs more [[tau]] to produce the same [[alpha]]. That interpretation is what makes the model useful in real mechanisms, not just in catalog exercises.\r
`;export{e as default};
