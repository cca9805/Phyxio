const e=`# Exam-type example\r
\r
## Problem statement\r
Compare the moment of inertia [[I]] of a solid disk and a solid sphere with the same mass [[m]] and radius [[R]]. Both rotate about their central symmetry axis. Determine which body offers higher resistance to angular-speed change and explain physically why equal mass does not imply equal rotational inertia.\r
\r
## Data\r
- [[m]] = 8 kg\r
- [[R]] = 0.20 m\r
- Rotation axis: central symmetry axis for both bodies\r
\r
Also discuss what happens if [[R]] is doubled while [[m]] remains constant.\r
\r
## System definition\r
Two ideal rigid bodies have the same [[m]] and [[R]] but different internal mass distribution around the axis. Friction and deformation effects are neglected because the objective is to isolate the geometric contribution to [[I]].\r
\r
This is a parameter-comparison problem, not a full dynamics transient calculation.\r
\r
## Physical model\r
For the solid disk:\r
\r
{{f:disco-macizo}}\r
\r
For the solid sphere:\r
\r
{{f:esfera-maciza}}\r
\r
As a transverse reference with the same [[m]] and [[R]], a thin ring follows:\r
\r
{{f:aro-fino}}\r
\r
## Model justification\r
The uniform rigid-body model is justified when the part has approximately uniform density and no dominant internal cavities. Under those conditions, standard expressions provide reliable first-order estimates of [[I]].\r
\r
The central axis assumption is explicitly required by the statement and matches the selected expressions. If the axis were shifted, these formulas would no longer be directly applicable and an axis-shift treatment would be required.\r
\r
The model scope is intentionally limited to geometric inertia estimation. It does not include losses, compliance, or control-loop effects.\r
\r
## Symbolic solution\r
With equal [[m]] and [[R]], only the geometric coefficient changes. The disk expression has coefficient 1/2 while the sphere has 2/5, so the disk has larger [[I]].\r
\r
The symbolic ratio indicates the disk inertia is 25 percent higher than the sphere inertia under equal [[m]] and [[R]]. This conclusion is model-driven and does not depend on specific numbers.\r
\r
If [[R]] is doubled at fixed [[m]], both inertias scale by roughly a factor of four, preserving the same hierarchy between geometries.\r
\r
To connect with additional catalog geometries, a thin rod uses [[L]], while a rectangular plate uses [[a]] and [[b]]:\r
\r
{{f:barra-centro}}\r
\r
{{f:placa-rectangular}}\r
\r
## Numerical substitution\r
Disk:\r
\r
{{f:disco-macizo}}\r
\r
Sphere:\r
\r
{{f:esfera-maciza}}\r
\r
Result: for equal [[m]] and [[R]], the disk has 25 percent more [[I]] than the sphere.\r
\r
As a geometric contrast, replacing both with a thin ring of equal [[m]] and [[R]] would increase [[I]] even further, reinforcing the role of mass location relative to the axis.\r
\r
## Dimensional validation\r
In both cases, [[I]] is obtained in SI units of kg m^2, consistent with the definition of moment of inertia.\r
\r
Dimensional consistency validates algebraic structure, but physical interpretation must still be checked against model assumptions.\r
\r
## Physical interpretation\r
The result shows that total [[m]] alone is insufficient. Geometry determines how far mass is distributed from the axis, and that changes [[I]] directly.\r
\r
From a design perspective, lower [[I]] supports faster acceleration and braking for a fixed actuator, while higher [[I]] tends to improve speed smoothness against disturbances.\r
\r
This is not just a numerical comparison. The 25 percent difference represents a causal mechanism: different mass distribution leads to different rotational resistance. If real hardware deviates from ideal homogeneity, the exact value may change, but the physical logic remains.\r
\r
A useful non-numerical check is to imagine redistributing the same [[m]] outward while keeping total mass constant. If the estimate of [[I]] does not increase, the model setup is likely inconsistent. This reasoning tests physical causality rather than arithmetic.\r
\r
Model limits also matter for interpretation. Hidden cavities, attached hubs, or non-uniform density can alter the exact ratio between disk and sphere. Even then, the directional trend remains valuable for early engineering decisions.\r
\r
# Real-world example\r
\r
## Context\r
A packaging line with frequent start-stop cycles must choose between thin-walled rollers and solid rollers having equal [[m]] and [[R]]. The decision affects energy use, thermal load, and cycle time.\r
\r
## Physical estimation\r
For equal [[m]] and [[R]], the thin-walled roller is modeled as a ring and the solid roller as a disk:\r
\r
{{f:aro-fino}}\r
\r
{{f:disco-macizo}}\r
\r
The ring has roughly twice the [[I]] of the solid disk under the same [[m]] and [[R]]. With unchanged motor torque capability, angular acceleration is correspondingly lower for the thin-walled option, and startup transients become slower.\r
\r
For a line performing around 100 startups per hour, this inertia gap can produce higher current peaks and larger thermal stress. As an order-of-magnitude statement, doubling [[I]] in repeated transients often increases electrical and thermal burden during acceleration phases.\r
\r
To compare additional catalog geometries, a rod uses [[L]], while a rectangular plate uses [[a]] and [[b]]:\r
\r
{{f:barra-extremo}}\r
\r
{{f:placa-rectangular}}\r
\r
## Interpretation\r
If fast response and lower startup demand are priorities, lower-[[I]] geometries are preferable. If speed smoothing and disturbance rejection are priorities, larger [[I]] can be beneficial.\r
\r
The final choice should balance dynamic response, thermal limits, and lifetime. In high-frequency start-stop duty, reducing [[I]] usually improves efficiency and reliability. In smoother continuous-duty operation, higher [[I]] may support stability.\r
\r
This example shows why standard moments are operational tools, not just textbook formulas: they support measurable design decisions.\r
\r
From a controls perspective, this choice changes achievable transient performance. With higher [[I]], the same drive behaves more sluggishly during speed setpoint changes. With lower [[I]], the same drive responds faster but may transmit disturbances more directly. Therefore inertia selection is part of both mechanical and control architecture.\r
\r
From a maintenance perspective, repeated high-current transients accelerate thermal aging. Choosing a geometry that reduces unnecessary inertia can increase insulation lifetime and reduce unplanned stoppages. This causal chain links geometry, [[I]], electrical stress, and reliability.`;export{e as default};
