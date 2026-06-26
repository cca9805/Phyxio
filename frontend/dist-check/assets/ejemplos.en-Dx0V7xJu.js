const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A block of [[m]] = 4.0 kg is observed from inside a carriage that accelerates horizontally. The internal observer uses a frame with constant [[a_marco]] toward the right. You must compute [[F_ficticia]], write the non-inertial balance for [[a_rel]], and discuss what changes when the same setup enters a rotating stage with nonzero [[omega]].\r
\r
In the second part, a rotating-platform scenario with relative motion [[v_rel]] is analyzed to justify simultaneous use of [[F_centrifuga]] and [[F_coriolis]].\r
\r
## Data\r
\r
- [[m]] = 4.0 kg.\r
- [[a_marco]] = 1.5 m/s^2.\r
- Main horizontal component of [[F_real]] = 10.0 N.\r
- Analysis window = 3.0 s.\r
\r
Rotating stage:\r
\r
- [[omega]] = 2.0 rad/s.\r
- [[r]] = 0.80 m.\r
- [[v_rel]] = 1.2 m/s.\r
\r
Model-switch threshold: 10 percent relative error.\r
\r
## System definition\r
\r
Frame S: external inertial reference used for diagnostics.\r
\r
Frame S': carriage-attached frame and later rotating-platform frame. In S', [[system_classification]] is set to non-inertial whenever [[a_marco]] or [[omega]] is significant.\r
\r
Target quantities:\r
\r
[[F_real]], [[F_ficticia]], [[a_rel]], [[a_marco]], [[omega]], [[r]], [[v_rel]], [[F_centrifuga]], [[F_coriolis]].\r
\r
## Physical model\r
\r
Newtonian dynamics with inertial corrections is used in S'. The modeling flow is: classify frame, build translational fictitious term, solve effective balance, then append rotational terms when the frame rotates.\r
\r
Explicit leaf anchoring: the model links [[a_marco]] to [[F_ficticia]], combines [[F_real]] with inertial correction to interpret [[a_rel]], and activates [[F_centrifuga]] plus [[F_coriolis]] when [[omega]] and [[v_rel]] are no longer negligible.\r
\r
## Model justification\r
\r
The model choice is physically explicit:\r
\r
1. [[a_marco]] is nonzero and large enough to reject pure inertial treatment.\r
2. During linear acceleration, rotation is negligible, so translational [[F_ficticia]] dominates corrections.\r
3. During rotation, nonzero [[omega]] and [[v_rel]] require [[F_centrifuga]] and [[F_coriolis]].\r
\r
Rejection criterion:\r
\r
- If predicted [[a_rel]] differs from repeated measurements by more than 10 percent, the model must be expanded.\r
\r
## Symbolic solution\r
\r
{{f:criterio_no_inercial}}\r
\r
{{f:fuerza_ficticia_traslacion}}\r
\r
{{f:dinamica_en_no_inercial}}\r
\r
{{f:fuerza_centrifuga}}\r
\r
{{f:fuerza_coriolis}}\r
\r
Symbolic reading:\r
\r
1. Criterion confirms non-inertial frame status.\r
2. Translational correction yields [[F_ficticia]] opposite to [[a_marco]].\r
3. Effective balance predicts [[a_rel]] from real plus fictitious contributions.\r
4. Rotational stage adds radial and lateral inertial corrections.\r
\r
## Numerical substitution\r
\r
Translational stage:\r
\r
1. Translational fictitious-force magnitude:\r
\r
- [[F_ficticia]] = [[m]] times [[a_marco]] = 4.0 times 1.5 = 6.0 N opposite to [[a_marco]].\r
\r
2. Effective horizontal balance in S':\r
\r
- Approximate effective net force: four newton along the analysis axis after combining real and fictitious contributions.\r
\r
3. Relative acceleration estimate:\r
\r
- [[a_rel]] estimate: about one meter per second squared along the same axis.\r
\r
Rotating stage:\r
\r
4. Centrifugal term magnitude reference:\r
\r
- Quantity linked to [[F_centrifuga]] = [[m]] times [[omega]] squared times [[r]] = 4.0 times 4.0 times 0.80 = 12.8 N.\r
\r
5. Coriolis term magnitude reference:\r
\r
- Quantity linked to [[F_coriolis]] = 2 times [[m]] times [[omega]] times [[v_rel]] = 2 times 4.0 times 2.0 times 1.2 = 19.2 N.\r
\r
These values show that rotational inertial terms can exceed the original real-force scale, so neglecting them would be a regime-level modeling error.\r
\r
## Dimensional validation\r
\r
Unit checks:\r
\r
- [[a_marco]] and [[a_rel]] in m/s^2.\r
- [[omega]] in rad/s.\r
- [[r]] in m.\r
- [[v_rel]] in m/s.\r
- [[F_real]], [[F_ficticia]], [[F_centrifuga]], [[F_coriolis]] in N.\r
\r
Consistency checks:\r
\r
1. [[m]] times [[a_marco]] yields force units.\r
2. [[omega]] squared times [[r]] yields radial acceleration scale.\r
3. [[omega]] times [[v_rel]] yields lateral acceleration scale typical of Coriolis effects.\r
\r
If observed mismatch is around 6 percent, the model remains adequate. If mismatch reaches 14 percent in consecutive windows, model escalation is mandatory.\r
\r
## Physical interpretation\r
\r
The key interpretation is structural, not just numeric. In linear acceleration, frame motion generates a fictitious correction that shifts observed relative acceleration. In rotation, [[F_centrifuga]] and [[F_coriolis]] can change both direction and curvature of the observed path.\r
\r
This means different observers can report different apparent behavior without violating physics, provided each observer uses the correct frame-dependent term inventory. If an analyst keeps only [[F_real]] in a clearly non-inertial frame, frame effects are misread as object-level anomalies.\r
\r
Therefore the example is directly connected to the leaf theory: frame classification determines active equations and dominant terms.\r
\r
# Real-world example\r
\r
## Context\r
\r
A drone-testing rig uses a rotating platform to emulate aggressive maneuvers. The onboard controller estimates acceleration and generates compensation in real time. The engineering team must decide when inertial approximation is safe and when full non-inertial correction is required.\r
\r
## Physical estimation\r
\r
Three scenarios are recorded over 30 s:\r
\r
- Scenario A: low [[a_marco]], near-zero [[omega]], moderate [[v_rel]].\r
- Scenario B: medium [[a_marco]] with increasing [[omega]].\r
- Scenario C: high [[omega]] with high [[v_rel]] during evasive motion.\r
\r
Quantitative order-of-magnitude reading:\r
\r
1. In A, fictitious terms remain below sensor noise, and [[a_rel]] prediction error is about 4 percent.\r
2. In B, [[F_ficticia]] and [[F_centrifuga]] increase, and error rises to about 9 percent, still inside acceptance threshold.\r
3. In C, lateral dynamics are strongly influenced by [[F_coriolis]], and error reaches 16 percent if Coriolis is omitted.\r
\r
Operational estimation:\r
\r
- Keep simplified model in A.\r
- Use complete non-inertial model in B and C.\r
\r
This estimation is actionable because it maps measured magnitudes to explicit model-switch rules.\r
\r
## Interpretation\r
\r
The main insight is regime-dependent validity. Model reliability is controlled by scales of [[a_marco]], [[omega]], and [[v_rel]], not by analyst preference. As those scales rise, non-inertial terms become compulsory for causal interpretation.\r
\r
A second insight is methodological: always separate real-force reasoning from frame-correction reasoning. That separation prevents false hardware diagnoses and improves traceability in control reports.\r
\r
If a final report flags anomalous [[a_rel]] in Scenario C but omits [[F_coriolis]], the conclusion is incomplete. If the report explicitly links lateral growth to rising [[omega]] and [[v_rel]], interpretation is coherent with the leaf model and directly useful for design decisions.\r
`;export{e as default};
