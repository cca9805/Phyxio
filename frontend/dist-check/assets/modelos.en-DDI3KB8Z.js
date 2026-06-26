const e=`# Physical models of the no-slip condition\r
\r
## Ideal model\r
\r
The ideal model represents the wheel as a rigid body with constant effective radius on a fixed surface. Its core claim is that advance and rotation are coordinated by the contact. In that description, the bottom point does not drag the ground and the contact reading can be summarized by a vanishing residual.\r
\r
This model is extremely useful because it compresses a complex reality into a simple constraint. It lets us move from a scene with many forces and microscopic details to a clear geometric relation between translation, rotation, and support-point motion.\r
\r
## Hypotheses\r
\r
We assume that the body keeps a stable shape, that the effective radius [[R]] does not change appreciably, and that the surface does not introduce jumps, bouncing, or intermittent loss of contact. We also assume enough adherence to sustain static friction and a consistent sign convention for [[v]], [[omega]], and rotation sense.\r
\r
In addition, the contact region must be small enough for it to make sense to speak about a support point with a well-defined instantaneous velocity. This is an excellent approximation for rigid wheels or introductory mechanics, but it is less innocent for strongly deformable tires or soft terrain.\r
\r
## Quantitative validity domain\r
\r
The model is reliable as long as static friction can sustain the constraint. In a basic estimate one should have\r
\r
{{f:relacion_aceleracion}}\r
\r
and, if the motion is accelerated with constant radius,\r
\r
{{f:relacion_aceleracion}}\r
\r
As a practical quantitative rule, a well-measured experiment should satisfy an absolute [[delta]] below 0.05 m/s or, in relative form, a residual below 1 % of linear speed. If the mismatch clearly exceeds those thresholds, the ideal description is no longer trustworthy even if the wheel still looks almost normal to the eye.\r
\r
## Model failure signals\r
\r
The model fails when contact velocity stops being near zero, when [[delta]] keeps a stable non-zero sign, or when the required friction exceeds available adherence. Observable symptoms also appear: squeal, local heating, smoke, abnormal wear, or persistent disagreement between traveled distance and distance inferred from wheel turns.\r
\r
In instrumented systems, another clear sign is a mismatch between wheel-speed sensors and vehicle-speed sensors. Once those measurements start telling different stories, the ideal model no longer describes the real contact.\r
\r
## Extended or alternative model\r
\r
When the constraint breaks, one must move to rolling with slipping. In that regime [[v]] and [[omega]] remain dynamically coupled, but no longer through an exact geometric compatibility. Kinetic friction, dissipation, and a meaningful residual [[delta]] appear, classifying whether skidding or spin-out dominates.\r
\r
When to switch to the alternative model? Switch when the residual stops being small compared with the scale of \`v\`, when kinetic friction is evident, or when the ideal prediction no longer reproduces the measurement. Keeping the ideal constraint beyond that point only hides the real physics under tidy algebra.\r
\r
## Operational comparison\r
\r
Operationally, the ideal model is for problems where the main task is to verify compatibility between rotation and advance or to use that compatibility to close another equation. The slipping model is for situations where dissipation, wear, traction control, or wheel lock matter explicitly.\r
\r
The difference is not only mathematical. In the ideal model, the residual acts as a consistency check. In the extended model, the same residual becomes a physically relevant variable. That is the key operational comparison: not only an equation changes, but the physical role of contact changes as well.`;export{e as default};
