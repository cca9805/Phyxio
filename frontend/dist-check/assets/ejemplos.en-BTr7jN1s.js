const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A worker must lift a load of 60 kg using a simple movable pulley system. The goal is to determine the force the worker must exert on the cable and the length of cable that must be pulled to raise the load 2 meters. The system is considered ideal without friction or pulley weight.\r
\r
## Data\r
\r
- Load mass: 60 kg
- Gravitational acceleration: 9.8 m/s²
- Number of active segments [[nSel]]: 2 (simple movable pulley)
- Vertical displacement of load [[dx_load]]: 2 m
\r
## System definition\r
\r
The system consists of a load suspended from a simple movable pulley. The rope passes through the movable pulley, with one end fixed at an upper point and the other free end where the worker applies force. The movable pulley moves vertically along with the load.\r
\r
## Physical model\r
\r
The ideal simple pulley model is applied, where:\r
- The rope is inextensible and has negligible mass\r
- The pulley has no mass and no axle friction\r
- The system is in static equilibrium or quasi-static motion\r
\r
The traction force is obtained with:

{{f:fuerza_ideal_poleas}}

The rope displacement is obtained with:

{{f:traccion_cable_poleas}}
\r
## Model justification\r
\r
The ideal model is appropriate because:\r
- The load is much greater than the typical weight of a small pulley (< 5% error)\r
- Slow operation is assumed (constant velocity, negligible acceleration)\r
- The system is well lubricated (minimal friction)\r
\r
## Symbolic solution\r
\r
Step 1: Calculate the weight of the load
The load weight [[W]] is obtained by multiplying mass by gravity.

Step 2: Apply the ideal force formula

{{f:fuerza_ideal_poleas}}

The applied force [[F]] is calculated by sharing [[W]] among the active segments [[nSel]].

Step 3: Calculate the rope displacement

{{f:traccion_cable_poleas}}

The rope displacement [[dx_pull]] is obtained by multiplying [[nSel]] by [[dx_load]].
\r
## Numerical substitution\r
\r
Step 1: Weight of the load
The load weight is 60 kg × 9.8 m/s² = 588 N.

Step 2: Traction force
The traction force is 588 N divided by 2, which gives 294 N.
\r
Equivalent to approximately 30 kgf, a force that an average adult can exert sustainedly.\r
\r
Step 3: Rope displacement
The rope displacement comes from doubling 2 m, so it is 4 m.
\r
## Dimensional validation\r
\r
- [[W]] is expressed in newtons because it combines mass and gravitational acceleration.
- [[F]] is expressed in newtons because it divides a force by a dimensionless number.
- [[dx_pull]] is expressed in meters because it multiplies a distance by a dimensionless number.
\r
Physical coherence: The calculated force (294 N) is less than the weight (588 N), consistent with the mechanical advantage of the movable pulley. The rope displacement (4 m) is greater than the lift (2 m), consistent with the energy conservation principle.\r
\r
## Physical interpretation\r
\r
The analysis reveals that the movable pulley provides a mechanical advantage of 2:1, allowing the worker to lift a 60 kg load by exerting a force equivalent to only 30 kg. This force reduction is achieved at the cost of greater travel: the worker must pull 4 meters of rope to raise the load just 2 meters.\r
\r
From the energy perspective, the work done by the worker and the work against gravity are both of order 1.2 kJ, confirming energy conservation. The movable pulley does not create energy; it simply redistributes effort allowing greater application distance with less force. Therefore the result is not just "294 N": it also says the configuration is ergonomically viable and that enough rope travel must be available.
\r
This example illustrates the fundamental principle of all simple machines: mechanical advantage multiplies force but cannot multiply work, since work is the product of force times distance and this product remains constant (minus losses) in the ideal system.\r
\r
# Real-world example\r
\r
## Context\r
\r
In a carpentry workshop, a worker needs to lift wooden panels of 45 kg to a height of 1.5 meters to place them in an elevated storage area. The worker can exert a maximum sustained force of approximately 300 N (equivalent to lifting an object of about 30 kg).\r
\r
Two configurations are available: a fixed pulley anchored to the ceiling, or a movable pulley suspended from the load. The appropriate configuration for safe and efficient task completion must be determined.\r
\r
## Physical estimation\r
\r
Calculation of panel weight:
The panel weight [[W]] is 45 kg × 9.8 m/s², approximately 441 N or 45 kgf.

**Option A - Fixed pulley, with [[nSel]] of 1:**
Using the ideal force relation:

{{f:fuerza_ideal_poleas}}

The required force [[F]] is 441 N divided by 1, therefore 441 N.
\r
The worker would need to exert 441 N, exceeding their sustained capacity of 300 N. This configuration is not viable for continuous manual operation.\r
\r
Rope displacement:

{{f:traccion_cable_poleas}}

The rope displacement [[dx_pull]] matches the lift: 1.5 m.

**Option B - Movable pulley, with [[nSel]] of 2:**
Using the ideal force relation:

{{f:fuerza_ideal_poleas}}

The required force [[F]] is 441 N divided by 2, approximately 221 N.
\r
The worker exerts 221 N, well within their 300 N capacity. This configuration is viable.\r
\r
Rope displacement:

{{f:traccion_cable_poleas}}

The rope displacement [[dx_pull]] doubles the lift and reaches 3 m.
\r
Energy verification:\r
- Work against gravity: about 662 J
- Work by operator: about 663 J
- Difference (~1.5 J) represents friction losses less than 1%\r
\r
## Interpretation\r
\r
The analysis demonstrates that the choice of pulley configuration critically depends on the relationship between required force and worker capacity. The fixed pulley, although simpler to install, demands 441 N — a force the worker might exert briefly but cannot sustain during multiple loading operations.\r
\r
The movable pulley reduces the force to 221 N, allowing the worker to perform the task repeatedly without excessive fatigue or injury risk. The cost is a greater rope travel (3 m instead of 1.5 m), which is acceptable in the workshop context where safety and sustained operation capacity take priority over speed.\r
\r
This real-world application illustrates how simple pulley physics has direct implications for workplace ergonomics and materials handling system design. Knowledge of the inverse relation between [[F]] and [[nSel]], for a given load [[W]], enables engineers and technicians to select appropriate equipment for human capabilities, preventing accidents and improving operational efficiency.
`;export{e as default};
