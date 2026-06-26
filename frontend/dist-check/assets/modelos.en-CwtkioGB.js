const e=`# Physical models: reference frames [[frame_sigma]] \r
\r
## Ideal model\r
\r
The ideal model of reference frames assumes that it is sufficient to choose an appropriate reference frame to describe the same motion without contradictions. Only the essential structure is preserved so that the main relationship describes the dominant mechanism and the diagram reading remains clean. Secondary details of the material or fluid are eliminated at this level because they do not yet change the essential conclusion. This simplification is valuable as long as the student can explain which phenomenon has been discarded and why its absence does not alter the main interpretation.\r
\r
## Hypotheses\r
\r
The leaf's operational hypotheses fix which magnitudes are considered dominant and which effects were neglected:\r
1. **Galilean frames**: It is assumed that the frames [[frame_sigma]] are inertial or that their acceleration is negligible compared to that of the body.\r
2. **Constant relative velocity**: The [[v_frame]] does not vary during the analyzed time interval, simplifying the relationship between accelerations.\r
3. **Parallel axes**: It is assumed that coordinate systems maintain parallel axes to avoid rotations that would complicate the transformation of [[r_vec]] .\r
4. **Classical simultaneity**: It is assumed that [[t_global]] flows identically for all observers, allowing for a single common chronology.\r
\r
## Quantitative validity domain\r
\r
The quantitative validity domain must be declared with verifiable thresholds. As a minimum rule, relative variations of [[v_frame]] should be less than 1%. Furthermore, velocities must be much lower than the speed of light for Galilean transformations to remain valid. If these criteria fail, the sought magnitude [[r_vec]] or [[v]] ceases to be reliable even if the numerical substitution seems correct.\r
\r
## Model failure signals\r
\r
Model failure signals usually do not start at the calculator, but in the physical reading:\r
- An unexpected sign change in [[v]] that contradicts direct observation.\r
- A discrepancy in the [[t_global]] recorded by two observers.\r
- A trajectory that cannot be reconciled using a constant [[v_frame]] .\r
- Results where the predicted [[r_vec]] diverges from the actual geometry of the setup.\r
\r
## Extended or alternative model\r
\r
The transition to an extended model becomes necessary when a central hypothesis no longer holds:\r
- **Non-inertial frames**: If the observer accelerates, fictitious forces appear in dynamics and relative acceleration terms appear in kinematics.\r
- **Special relativity**: When [[v]] is comparable to the speed of light, the Galilean model fails and Lorentz transformations must be used.\r
- **Rotating systems**: If one [[frame_sigma]] rotates relative to another, the parallel axes model stops being useful, and centrifugal and Coriolis acceleration terms appear.\r
\r
The goal is not to complicate by inertia, but to decide which refinement actually changes the prediction and which only adds algebraic noise.\r
\r
## Operational comparison\r
\r
It is appropriate to change model when the frame accelerates, when the axes rotate, or when speeds are no longer small compared with light speed. In those cases the Galilean model no longer preserves a simple translation between observers and one must move to non-inertial frames, rotational kinematics, or special relativity according to the source of the failure.\r
`;export{e as default};
