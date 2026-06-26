const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A block of mass [[m]] is released from rest at the top of a rigid incline of length [[L]] and angle [[theta]]. The surface is idealized as frictionless. Determine acceleration [[a]], final speed [[v_f]] at the end of the segment, and travel time [[t]]. Then justify why the frictionless model is a valid first approximation and identify what experimental evidence would force a model upgrade.\r
\r
## Data\r
\r
- [[m]] = 2.0 kg\r
- [[g]] = 9.8 m/s2\r
- [[theta]] = 30 degrees\r
- [[L]] = 4.0 m\r
- initial [[v]] = 0\r
\r
Validation setup:\r
\r
- acceptable prediction-measurement mismatch: 10 percent.\r
- repeated equivalent trials: at least 3.\r
\r
## System definition\r
\r
System: a point-like block of mass [[m]] moving effectively in one dimension along the incline.\r
\r
Relevant interactions:\r
\r
- total weight [[P]].\r
- contact normal reaction [[N]].\r
\r
Axis strategy:\r
\r
- tangential axis along the incline.\r
- normal axis perpendicular to the incline.\r
\r
Derived core magnitudes:\r
\r
- [[P_par]] controls tangential speed change.\r
- [[P_perp]] determines contact loading through [[N]].\r
\r
This definition prevents the typical beginner error of using full [[P]] as the along-plane driver.\r
\r
## Physical model\r
\r
Ideal frictionless model with explicit assumptions:\r
\r
1. friction is negligible compared with [[P_par]].\r
2. incline geometry is rigid and [[theta]] is constant on the segment.\r
3. contact is continuous.\r
4. tangential acceleration [[a]] is constant.\r
\r
Leaf-core equations:\r
\r
{{f:descomposicion_paralela}}\r
\r
{{f:descomposicion_perpendicular}}\r
\r
{{f:normal_plano_ideal}}\r
\r
{{f:aceleracion_plano_ideal}}\r
\r
{{f:velocidad_final_desde_reposo}}\r
\r
{{f:tiempo_deslizamiento}}\r
\r
## Model justification\r
\r
The model is justified by effect scale, not by authority. If surface quality is high, path is short, and speed remains moderate, friction and drag can be treated as second-order effects relative to [[P_par]]. In that regime, the ideal model gives robust first-order estimates for [[a]], [[v_f]], and [[t]].\r
\r
The second justification is structural clarity. Separating tangential cause ([[P_par]]) from normal contact closure ([[P_perp]], [[N]]) makes diagnostics transparent. If data disagree, we know where to look: missing dissipation, geometric mismatch, or poor experimental repeatability.\r
\r
## Symbolic solution\r
\r
1. Resolve weight along and normal to the incline:\r
\r
{{f:descomposicion_paralela}}\r
\r
{{f:descomposicion_perpendicular}}\r
\r
2. Close the normal axis and obtain [[N]]:\r
\r
{{f:normal_plano_ideal}}\r
\r
3. Apply tangential dynamics for [[a]]:\r
\r
{{f:aceleracion_plano_ideal}}\r
\r
4. Use constant-acceleration kinematics for [[v_f]] and [[t]] over [[L]]:\r
\r
{{f:velocidad_final_desde_reposo}}\r
\r
{{f:tiempo_deslizamiento}}\r
\r
Symbolic reading: the full problem is controlled by geometric projection of gravity through [[theta]].\r
\r
## Numerical substitution\r
\r
With [[theta]] = 30 degrees:\r
\r
- [[a]] = [[g]] sin([[theta]]) = 9.8 x 0.5 = 4.9 m/s2.\r
- [[v_f]] = sqrt(2 x [[a]] x [[L]]) = sqrt(39.2) ~= 6.26 m/s.\r
- [[t]] = sqrt((2 x [[L]])/[[a]]) = sqrt(8.0/4.9) ~= 1.28 s.\r
\r
Numerical reading:\r
\r
- [[a]] lies between 0 and [[g]], as expected.\r
- [[v_f]] near 6 m/s can be operationally relevant for handling safety.\r
- [[t]] near 1.3 s indicates strong sensitivity to angle selection.\r
\r
## Dimensional validation\r
\r
- [[a]] has acceleration units m/s2.\r
- [[v_f]] has speed units m/s.\r
- [[t]] has time units s.\r
\r
Limit checks:\r
\r
- if [[theta]] -> 0, [[a]] -> 0.\r
- if [[theta]] increases, [[a]] increases and [[t]] decreases.\r
\r
Causal checks:\r
\r
- [[P_par]] drives tangential acceleration.\r
- [[N]] closes contact; it is not a tangential driver.\r
\r
## Physical interpretation\r
\r
The central message is mechanistic: acceleration on an incline depends on the part of weight aligned with motion, not on "having more weight" in an undifferentiated sense. That aligned part is [[P_par]], and [[theta]] controls it directly.\r
\r
This is why incline dynamics is foundational for model progression. Once [[N]] and projections are clear, moving to friction models becomes conceptually smooth, because friction scales with contact conditions.\r
\r
# Real-world example\r
\r
## Context\r
\r
A logistics team uses a passive ramp to move boxes from a preparation table to a lower conveyor. They want shorter cycle times without adding motors at this stage. The controllable design variable is [[theta]], while available footprint fixes [[L]].\r
\r
Operational question: which angle range keeps [[t]] below throughput targets while maintaining a safe [[v_f]] at the receiving station? The frictionless model is used as a fast preselection tool before expensive prototyping.\r
\r
## Physical estimation\r
\r
Take [[L]] = 3.0 m and compare three test angles.\r
\r
1. [[theta]] = 12 degrees:\r
\r
- [[a]] ~= 2.04 m/s2\r
- [[t]] ~= 1.72 s\r
- [[v_f]] ~= 3.50 m/s\r
\r
2. [[theta]] = 20 degrees:\r
\r
- [[a]] ~= 3.35 m/s2\r
- [[t]] ~= 1.34 s\r
- [[v_f]] ~= 4.48 m/s\r
\r
3. [[theta]] = 28 degrees:\r
\r
- [[a]] ~= 4.60 m/s2\r
- [[t]] ~= 1.14 s\r
- [[v_f]] ~= 5.26 m/s\r
\r
Reference calculation for design interpretation:\r
\r
{{f:aceleracion_plano_ideal}}\r
\r
{{f:velocidad_final_desde_reposo}}\r
\r
{{f:tiempo_deslizamiento}}\r
\r
These relations show the direct trade-off: higher [[theta]] increases [[a]] and [[v_f]] while decreasing [[t]]. With an output speed limit of [[v_f]] <= 4.5 m/s, the 12-degree case is comfortably safe, the 20-degree case is borderline, and the 28-degree case is rejected.\r
\r
Quantitative reading: increasing [[theta]] improves cycle time but raises impact speed. If ergonomic receiving limit is around 4.5 m/s, an angle near 20 degrees is a reasonable first candidate.\r
\r
## Interpretation\r
\r
This real case shows how an ideal model supports early engineering decisions with high explanatory value and low computational cost. It is not the final truth of the system, but it defines a practical candidate region for pilot trials.\r
\r
Quantitatively, the screen matters because it separates a ramp ending near 3.5 m/s from one ending near 5.3 m/s, and it distinguishes cycle times around 1.7 s, 1.3 s, and 1.1 s. In a real handling line, those differences can decide whether stations stay synchronized or begin to accumulate backlog.\r
\r
If the internal safety limit is [[v_f]] <= 4.5 m/s, then the 12-degree option stays comfortably inside the margin, the 20-degree option sits near the threshold, and the 28-degree option exceeds it. That is not a decorative comparison; it determines whether the design advances to the next stage. In parallel, the almost 0.6 s gap between 12 degrees and 20 degrees can mean a meaningful throughput gain without entering the risky speed regime of the steepest case.\r
\r
The didactic gain is substantial: equations are used as decision tools under explicit assumptions, validated against data, and upgraded when evidence demands higher-fidelity modeling.`;export{e as default};
