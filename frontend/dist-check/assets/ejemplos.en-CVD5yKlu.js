const e=`# Exam-type example\r
\r
## Problem statement\r
\r
In an Atwood machine, two masses are connected by a light, inextensible rope passing over an ideal pulley with no mass or friction. The left mass has a value of 3 kg and the right mass 5 kg. The system is released from rest.\r
\r
Determine: (a) the acceleration of the system and the direction of motion; (b) the tension in the rope; (c) the velocity of both masses after 2 seconds of motion.\r
\r
## Data\r
\r
- Left mass [[m1]]: 3 kg\r
- Right mass [[m2]]: 5 kg\r
- Gravity [[g]]: 9.8 m/s²\r
- Motion time: 2 s\r
- Initial velocity: 0 (at rest)\r
\r
## System definition\r
\r
The system consists of two point masses coupled by an ideal rope. The rope transmits force without deforming, and the pulley changes the direction of tension without dissipating energy.\r
\r
Reference axes: for [[m1]] (smaller mass), positive vertical axis upward; for [[m2]] (larger mass), positive vertical axis downward. This choice implies that if [[a]] > 0, [[m2]] descends and [[m1]] ascends.\r
\r
## Physical model\r
\r
We apply Newton's second law to each mass separately, considering that they share the same magnitude of acceleration [[a]] due to the inextensible rope.\r
\r
For [[m1]]: tension [[T]] upward minus weight downward produces acceleration upward.\r
\r
For [[m2]]: weight downward minus tension [[T]] upward produces acceleration downward.\r
\r
The system acceleration is given by the fundamental formula:\r
\r
{{f:aceleracion_atwood}}\r
\r
The tension in the rope is obtained through:\r
\r
{{f:tension_atwood}}\r
\r
## Model justification\r
\r
The ideal Atwood machine model is applicable because:\r
- The rope is light (massless) and inextensible (does not stretch)\r
- The pulley has no mass and no axle friction\r
- The motion is purely vertical (no oscillations)\r
- Both masses move with the same magnitude of acceleration\r
\r
## Symbolic solution\r
\r
Step 1: Calculate acceleration by substituting into the Atwood formula.\r
\r
Numerator: mass difference multiplied by gravity.\r
\r
Denominator: sum of both masses.\r
\r
Step 2: Calculate tension by substituting masses and gravity into the tension formula.\r
\r
The numerator contains the product of both masses and twice the gravity.\r
\r
The denominator is the sum of masses.\r
\r
Step 3: For velocity after 2 seconds, apply MRUA kinematics.\r
\r
Final velocity equals acceleration multiplied by time (starting from rest).\r
\r
## Numerical substitution\r
\r
Evaluation (a) — Acceleration:\r
\r
Operation: (5 kg minus 3 kg) multiplied by 9.8 m/s² divided by (5 kg plus 3 kg).\r
\r
Result: 2 kg times 9.8 m/s² divided by 8 kg yields 2.45 m/s².\r
\r
Assignment: [[a]] is approximately 2.45 m/s², positive, confirming that [[m2]] descends and [[m1]] ascends.\r
\r
Evaluation (b) — Tension:\r
\r
Operation: 2 multiplied by 3 kg, by 5 kg, by 9.8 m/s², divided by 8 kg.\r
\r
Result: 294 kg²·m/s² divided by 8 kg yields 36.75 N.\r
\r
Assignment: [[T]] is approximately 36.8 N.\r
\r
Verification: tension must lie between the weight of [[m1]] (29.4 N) and [[m2]] (49 N). The result 36.8 N satisfies this condition.\r
\r
Evaluation (c) — Velocity after 2 seconds:\r
\r
Operation: 2.45 m/s² multiplied by 2 s.\r
\r
Result: 4.9 m/s.\r
\r
Interpretation: after 2 seconds, [[m2]] descends at 4.9 m/s while [[m1]] ascends at the same velocity.\r
\r
## Dimensional validation\r
\r
- Acceleration [[a]]: kg multiplied by m/s² divided by kg results in m/s² \`[L T⁻²]\` ✓\r
- Tension [[T]]: kg·kg·m/s² divided by kg results in kg·m/s² that is N \`[M L T⁻²]\` ✓\r
- Velocity: m/s² multiplied by s results in m/s \`[L T⁻¹]\` ✓\r
\r
All magnitudes have coherent dimensions.\r
\r
## Physical interpretation\r
\r
The result of 2.45 m/s² represents approximately one quarter of gravity, consistent with the moderate mass difference (5 kg vs 3 kg). If the masses were equal, acceleration would be zero (equilibrium); if one were much larger than the other, acceleration would approach [[g]].\r
\r
The tension of 36.8 N lies between the weights of both masses (29.4 N and 49 N), acting as a coupling force. It is greater than the weight of [[m1]] (so it accelerates upward) but less than that of [[m2]] (so it accelerates downward).\r
\r
Motion at increasing velocity during 2 seconds produces significant displacements: each mass travels approximately 4.9 meters (distance = 0.5·a·t²), sufficient for experimental verification in a laboratory.\r
\r
# Real-world example\r
\r
## Context\r
\r
A counterweight elevator in an underground mine uses a system of two cabins connected by cable passing over a pulley at the top of the shaft. When one cabin ascends loaded with ore, the other descends empty, exploiting the weight difference to reduce the motor's energy consumption.\r
\r
In a typical configuration: loaded cabin (effective mass 2000 kg), empty cabin (effective mass 800 kg), high-strength steel cable, large-diameter pulley with low-friction bearings. The motor must provide only the force difference needed to accelerate the system and compensate for minor frictions.\r
\r
The mining engineer needs to calculate: (a) the maximum safe system acceleration (regulatory limit: 2 m/s²); (b) the maximum cable tension to verify strength; (c) the ascent time if the shaft is 150 meters deep and accelerates at maximum rate.\r
\r
## Physical estimation\r
\r
Industrial system data:\r
- Loaded descending cabin mass [[m1]]: 2000 kg (equivalent to [[m2]] in formula when descending)\r
- Empty ascending cabin mass [[m2]]: 800 kg (equivalent to [[m1]] in formula)\r
- Shaft depth: 150 m\r
- Regulatory acceleration limit: 2 m/s²\r
- Gravity [[g]]: 9.8 m/s²\r
\r
**Step 1**: Calculate theoretical system acceleration.\r
\r
Operation: mass difference (1200 kg) multiplied by 9.8 m/s² divided by sum of masses (2800 kg).\r
\r
Result: approximately 4.2 m/s².\r
\r
Evaluation: this acceleration exceeds the regulatory safety limit of 2 m/s². The system must be limited to 2 m/s² through motor control.\r
\r
**Step 2**: Calculate cable tension at maximum permitted acceleration.\r
\r
With [[a]] = 2 m/s², we apply Newton's second law to the ascending cabin (800 kg).\r
\r
Operation: 800 kg multiplied by (9.8 m/s² plus 2 m/s²).\r
\r
Result: 800 kg times 11.8 m/s² yields 9440 N.\r
\r
Assignment: [[T]] is approximately 9440 N (9.44 kN).\r
\r
Safety verification: 20 mm diameter steel cables have typical breaking strength of 200 kN with safety factor 10, allowing working loads up to 20 kN. The calculated tension of 9.4 kN is within the safe margin.\r
\r
**Step 3**: Calculate ascent time at constant acceleration of 2 m/s².\r
\r
Operation: displacement (150 m) = 0.5 multiplied by acceleration (2 m/s²) multiplied by time squared.\r
\r
Solving for time: square root of (300 m divided by 2 m/s²) = square root of 150 s².\r
\r
Result: approximately 12.2 seconds.\r
\r
Practical note: in real operation, the system accelerates during the first seconds, then maintains constant velocity, and finally brakes. The total real time is longer than this theoretical pure acceleration calculation.\r
\r
## Interpretation\r
\r
The magnitude [[a]] in this industrial context determines the comfort and safety of transport. Accelerations above 2 m/s² would cause discomfort to operators and excessive structural stress. The calculation shows that the "natural" system would tend to accelerate faster (4.2 m/s²), so the motor's electronic control must actively limit acceleration.\r
\r
The tension [[T]] represents the mechanical stress in the cable. Although the weight difference is large (2000 kg vs 800 kg), the actual tension depends on how much the system accelerates. Higher acceleration means higher tension. This is the principle behind safety brakes: if the cable breaks, tension disappears and brakes activate automatically.\r
\r
The counterweight system drastically reduces energy consumption compared to a conventional elevator. Without counterweight, the motor would have to overcome the full 2000 kg weight. With 800 kg counterweight, the motor only compensates for the difference (1200 kg effective) plus system inertia. This mass balancing principle also applies in modern elevators, funiculars, and cable transport systems.\r
`;export{e as default};
