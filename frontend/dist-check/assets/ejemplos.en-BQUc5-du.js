const e=`\uFEFF# Exam-type example\r
\r
## Problem statement\r
\r
A tennis ball of mass [[m]] moves horizontally towards a wall. After the impact, the ball rebounds in the opposite direction with a lower speed. The goal is to determine the average force [[Fmed]] exerted by the wall during the very brief contact interval [[dt]], justifying the use of the impulsive model.\r
\r
## Data\r
\r
The physical parameters that define the initial and final state of the system are as follows:\r
- Inertial mass of the object: [[m]] (0.20 kg)\r
- Initial velocity of the system: [[v0]] (12 m/s, oriented to the right)\r
- Final velocity after impact: [[vF]] (-6 m/s, rebound to the left)\r
- Contact time interval: [[dt]] (0.006 s)\r
\r
## System definition\r
\r
The system under study is the tennis ball. It is defined such that all internal forces are excluded from the external balance. The interaction with the wall is modeled as a net external force acting over a very short time, generating an impulse [[J]] that produces the variation in momentum [[DeltaP]].\r
\r
## Physical model\r
\r
A constant mass and ideal impulsive collision model is adopted. It is assumed that the net external force is solely responsible for the kinematic change. Secondary effects such as air resistance or gravitational force are ignored during the [[dt]] interval, focusing on the momentum transfer through elastic impact.\r
\r
## Model justification\r
\r
The justification lies in the time scale. The [[dt]] interval is so small (6 ms) that the impulse of gravity is negligible compared to the impulse of the impact force. Furthermore, it is assumed that the mass [[m]] remains constant, without fragmentation of the object during the collision.\r
\r
## Symbolic solution\r
\r
The process connects kinematics with dynamics. First, we calculate the net change in linear momentum [[DeltaP]] through the difference between final and initial states:\r
\r
{{f:cambio_momento}}\r
\r
If the motion occurs in a two-dimensional plane, the change is decomposed into its Cartesian axes:\r
\r
{{f:cambio_momento_componentes}}\r
\r
Where momentum is related to mass and velocity:\r
\r
{{f:impulso_momento_masa_velocidad}}\r
\r
Finally, using the Impulse-Momentum Theorem, we solve for the average force [[Fmed]]:\r
\r
{{f:fuerza_media_cambio_momento}}\r
\r
## Numerical substitution\r
\r
1. **Initial momentum**: [[p_inicial]] resulting from multiplying 0.20 kg by 12 m/s (2.4 kg·m/s).\r
2. **Final momentum**: [[p_final]] resulting from 0.20 kg by -6 m/s (-1.2 kg·m/s).\r
3. **Change in momentum**: [[DeltaP]] as the difference -1.2 - 2.4 (-3.6 kg·m/s).\r
4. **Total impulse**: By the theorem, the received impulse [[J]] is -3.6 N·s. Since it is a horizontal collision, this value represents the x-axis component [[Jx]].\r
5. **Average force**: [[Fmed]] by dividing the impulse by time: -3.6 / 0.006 (-600 N).\r
\r
## Dimensional validation\r
\r
The impulse [[J]] must have dimensions of force times time. By multiplying the dimensions of force \`[M L T⁻²]\` by those of time \`[T]\`, we obtain \`[M L T⁻¹]\`. This expression exactly matches the dimensions of momentum (mass times velocity), confirming the physical consistency of the theorem. The result of -600 N is consistent with a high-intensity sports impact.\r
\r
## Physical interpretation\r
\r
The negative sign in [[Fmed]] indicates that the wall pushes the ball to the left, opposite to the initial direction. The impulse was sufficient not only to stop the ball but to reverse its direction and return it with half its original speed in a fraction of a second.\r
\r
\r
\r
## Structural Analysis of the Impact\r
\r
From a structural perspective, this collision is not just an exchange of momentum, but a study of system stiffness. The average force [[Fmed]] obtained represents the resistance of the ball material to compression. If the ball were infinitely rigid, the time [[dt]] would tend towards zero and the force would tend towards infinity, which would destroy any real structure. Therefore, elasticity is what allows the impulse to be distributed over time, protecting the physical integrity of the object. This principle is universal in impact engineering.\r
\r
---\r
\r
# Real-world example\r
\r
## Context\r
\r
The design of programmed crumple zones in vehicles is the critical application of impulse physics. The goal is that, faced with an unavoidable change in speed (fixed [[DeltaP]]), the impact force [[Fmed]] reaching the cabin is below the human survival limit by increasing the time [[dt]].\r
\r
## Physical estimation\r
\r
We will perform an order-of-magnitude calculation to compare the lethality of the impact. Consider a vehicle of mass [[m]] (1500 kg) crashing at 15 m/s (54 km/h) and coming to a complete stop.\r
\r
*   **Momentum change**: [[DeltaP]] = 1500 kg · (0 - 15 m/s) = -22,500 kg·m/s.\r
*   **Required impulse**: [[J]] = -22,500 N·s.\r
\r
**Scenario A (Rigid structure)**:\r
If the chassis does not deform and the stop occurs in an infinitesimal contact time [[dt]] (0.01 s), the average force [[Fmed]] reaches -2,250,000 N. This is equivalent to receiving the weight of about 230 tons at once.\r
\r
**Scenario B (Crumple zone)**:\r
If the bumper and engine collapse in a controlled manner, allowing the stop to last [[dt]] (0.15 s), the force [[Fmed]] is reduced to -150,000 N. Although it is a considerable force (equivalent to the weight of 15 tons), the resulting acceleration is only 10g, which is physically survivable thanks to the restraint system.\r
\r
## Interpretation\r
\r
Engineering does not fight against the impulse [[J]], but rather dilutes it over time. By increasing [[dt]], we reduce the height of the average force [[Fmed]]. This "constant area" concept under the [[F]]-t curve is the basis of all impact protection systems.\r
\r
{{f:impulso_area_curva}}\r
\r
\r
This structural analysis is essential to understand that physics is not just about equations, but about how these equations represent the physical integrity of real-world materials under extreme impact conditions.\r
\r
\r
\r
\r
\r
\r
`;export{e as default};
