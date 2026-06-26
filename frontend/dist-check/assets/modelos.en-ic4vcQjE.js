const e=`# Physical models: fundamental equation of rotational dynamics\r
\r
## Ideal model\r
\r
The ideal model for the fundamental equation assumes a rigid body rotating about a fixed axis. Under these conditions, the net torque [[tau]] on the system produces an angular acceleration [[alpha]] in direct proportion:\r
\r
{{f:segunda_ley_rotacional}}\r
\r
. Only the relevant interactions are retained — the net applied torque and the moment of inertia of the body — because in this regime they fully describe the dynamic response. Deformation effects, internal friction, and variation of I with position are discarded as second-order corrections. The simplification is valid as long as the learner can argue why those effects do not change the essential conclusion of the problem.\r
\r
## Hypotheses\r
\r
- Rigid body: mass distribution does not change during motion, so I remains constant.\r
- Fixed rotation axis: the vector defining the axis does not vary, making [[alpha]] a scalar in the plane.\r
- Well-defined net torque: all external torques on the system are known and can be summed algebraically about the same axis.\r
- Inertial frame or explicit corrections: if the frame is non-inertial, fictitious torques are added to preserve the validity of the equation.\r
- Negligible losses at first pass: bearing friction and air resistance are treated as zero unless an extended model is declared.\r
\r
## Quantitative validity domain\r
\r
The model is reliable when relative deformation of the body during motion stays below 1%, when angular velocity does not produce significant gyroscopic effects on the axis, and when friction torques represent less than 5% of total net torque. For laboratory mechanical systems and basic engineering problems, that corresponds to angular velocities below a few hundred rad/s and dimensions between 10^-2 and 10^1 m. Outside these ranges, corrections for elasticity, heating, or precession can no longer be neglected.\r
\r
## Model failure signals\r
\r
Failure signals appear in the physical reading before the calculator. If the computed [[alpha]] does not match the observed trend in the real system, if deceleration does not follow the prediction once the driving torque is removed, or if the body oscillates instead of rotating smoothly, one of the ideal model hypotheses has broken down. It is also suspicious when a supposedly small friction torque dominates the expression or when I visibly changes during motion. In all these cases, the model requires extension before continuing.\r
\r
## Extended or alternative model\r
\r
The extended model introduces friction losses as a resistive torque\r
\r
{{f:momento_angular}}\r
\r
, variation of I with angular position when geometry changes, or gyroscopic effects when the axis is not fixed. The energy model — using the rotational work-energy theorem — is a useful equivalent alternative for problems where angular displacements are known rather than instantaneous torques. The angular momentum model (\r
\r
{{f:momento_angular}}\r
\r
) is appropriate when the net torque is zero and conservation is being analyzed.\r
\r
When to move to the extended or alternative model: when friction or deformation alter the result by more than 5%, when the axis visibly precesses, or when the problem data consist of angular displacements and velocities rather than direct torques.\r
\r
## Operational comparison\r
\r
The ideal model allows solving directly for [[alpha]] from [[tau]] and I in a single operation. The extended friction model requires a first-order differential equation, increasing complexity but improving prediction in real systems. The energy model avoids computing torques explicitly when force geometry is complicated. The choice depends on available data and required precision: for quick classroom diagnosis, the ideal model suffices; for actuator or brake design, the extended model is necessary.`;export{e as default};
