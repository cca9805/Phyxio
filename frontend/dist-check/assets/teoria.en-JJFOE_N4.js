const e=`\uFEFF# External Impulse and the Rupture of Conservation\r
\r
## Conceptual Context\r
\r
Linear momentum conservation is a conditional principle: **it holds only if the net external force is zero**. When an external impulse acts on the system, the total momentum changes and conservation is broken. Understanding exactly how and how much it breaks is essential for deciding whether a problem admits the approximation of conserved momentum or if it requires using the full form of the impulse balance.\r
\r
In practice, most real situations involve external forces: friction with the ground, gravity, or string tensions. The key lies in quantifying whether those forces create a significant impulse during the event.\r
\r
## 🟢 Essential Level\r
\r
The conservation of a system's motion only works when the system is sufficiently isolated. If something external pushes, brakes, or hits the system for a significant time, the total motion of the set changes.\r
\r
The essential idea is to distinguish between internal changes and changes produced from the outside. If two parts of the system interact with each other, the change is compensated within the set itself. But if the ground, a wall, an engine, or the air acts, the system receives an external intervention and can no longer be treated as isolated.\r
\r
> [!IMPORTANT]\r
> When the outside intervenes, physics has not failed: the external intervention simply needs to be included in the dynamic balance.\r
\r
Everyday example: a braking car does not lose motion "just because." Friction from the ground acts from outside the car system and reduces its momentum. If the chosen system were car plus Earth, that interaction would no longer be outside; that's why the choice of system changes the physical reading of the problem.\r
\r
## 🔵 Formal Level\r
\r
### Leaf Nomenclature\r
\r
In this leaf: [[J]] represents the external impulse; [[F_ext]] is the net external force; [[t]] is the time of action; and [[DeltaP]] is the change in linear momentum caused by said impulse.\r
\r
### The Principle Under Ideal Conditions\r
\r
Before studying the rupture, it is necessary to establish the reference point: the tools that work when the system is perfectly isolated. The necessary and sufficient condition for momentum to be conserved is that the vector sum of all external forces on the system is zero:\r
\r
{{f:cond}}\r
\r
Under this requirement, the momentum of each individual particle of mass [[m]] and velocity [[v]] is defined as the product of both quantities:\r
\r
{{f:P}}\r
\r
The total initial momentum of the system is the vector sum of the momenta of all its constituent particles:\r
\r
{{f:pi}}\r
\r
When the system is isolated, conservation establishes equality between the initial and final dynamic states:\r
\r
{{f:cons_principle}}\r
\r
The net change in momentum under those conditions is exactly zero:\r
\r
{{f:DeltaP}}\r
\r
For interactions between two bodies in one dimension, the general balance captures any type of collision —elastic, inelastic, or explosion—, relating initial velocities [[v1i]] and [[v2i]] (of the first and second body, with masses [[m1]] and [[m2]] respectively) with final velocities [[v1f]] and [[v2f]]:\r
\r
{{f:general_1d_balance}}\r
\r
If the bodies fuse after the impact (perfectly inelastic collision), the joint final velocity [[vf]] is given by:\r
\r
{{f:inelastic_collision}}\r
\r
In the opposite case —when a system at rest separates into two fragments—, the recoil law determines the relative velocities:\r
\r
{{f:recoil_law}}\r
\r
These tools are valid exclusively when the isolation condition is satisfied. As soon as this condition fails, the system enters the regime described below.\r
\r
### Impulse-Momentum Theorem\r
\r
The fundamental relationship between the external impulse and the change in the dynamic state of the system is expressed by the formula:\r
\r
\r
The central equation of this leaf explicitly shows how final momentum differs from initial by exactly the net external impulse:\r
\r
{{f:ruptura_conservacion}}\r
\r
Where the impulse is calculated as the effect of the net force during the time interval:\r
\r
\r
### Analysis by Components\r
\r
It is possible for the external impulse to be zero in one component but not in another. For example, in a horizontal collision, weight and the normal force cancel each other vertically, allowing for conservation on the X-axis while the balance in Y remains independently balanced.\r
\r
### Impulsive Approximation\r
\r
For extremely brief collisions, constant external forces (such as gravity) generate negligible impulses compared to the massive internal forces of the impact. In these cases, even if the system is not strictly isolated, momentum conservation remains an excellent approximation for predicting final velocities.\r
\r
{{f:DeltaP_ext}}\r
\r
{{f:J}}\r
\r
## 🔴 Structural Level\r
\r
### Broken Symmetry\r
\r
From the perspective of Noether's theorem, external forces represent a rupture of the translational symmetry of space. If the system interacts with an environment that distinguishes positions (a gravitational field, a wall), momentum stops being a conserved quantity for that specific system. However, by expanding the system to include the source of the force, the symmetry is restored and the total momentum of the new set is conserved.\r
\r
### Time and Force Scales\r
\r
The decision of whether a system is "sufficiently isolated" depends on two factors:\r
- **Time scale**: is the event much shorter than the typical time of action of the external forces?\r
- **Force scale**: do the internal forces of the impact dominate over the external ones?\r
\r
If both answers are affirmative, the conservation approximation is legitimate.\r
\r
## Deep Physical Interpretation\r
\r
The rupture of conservation is not a failure of the principle, but a sign that the system exchanges momentum with its environment. Each unit of external impulse that enters the system increases the [[P]]; each unit that exits reduces it. The accounting is still perfect: the transfer from the outside simply needs to be included in the balance.\r
\r
This turns the relationship between impulse and momentum change into the most general version of the physical principle. From an operational perspective, the external impulse acts as a quantifiable “correction” to the conservation principle: it measures exactly how much and in what direction the system departs from the ideal isolated case. This allows establishing approximation hierarchies based on the relative magnitude of the external impulse compared to the initial momentum: if the impulse represents less than 1% of the initial momentum, conservation can be applied without appreciable error; if it exceeds 10%, the full balance is essential.\r
\r
## Order of Magnitude\r
\r
A pool player applies an external impulse of approximately 0.5 kg·m/s. A braking car receives a friction impulse of thousands of units over several seconds, completely breaking conservation. In contrast, in a millisecond crash, friction barely has [[t]] to act.\r
\r
## Personalized Resolution Method\r
\r
1. **Identify external forces**: gravity, friction, tensions.\r
2. **Estimate external impulse**: product of the force by the contact time.\r
3. **Compare**: is this impulse significant compared to the initial momentum?\r
4. **Decide**: use approximate conservation or the full impulse balance.\r
\r
## Special Cases and Extended Example\r
\r
**Projectile in flight.** Gravity acts vertically, generating a downward impulse. However, on the horizontal axis there are no external forces (ignoring air), so horizontal momentum is strictly conserved even if the projectile explodes or changes shape.\r
\r
## Real Student Questions\r
\r
- **When can I ignore gravity?** When the impact is brief (milliseconds). The gravitational impulse is tiny compared to the contact forces.\r
- **What if the impulse is perpendicular to the motion?** It changes the system's direction but does not affect the magnitude of the momentum in the original direction.\r
\r
## Cross-cutting Connections and Study Paths\r
\r
- **Applications**: [Recoil and collisions](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/aplicaciones-del-principio-de-conservacion).\r
- **Isolated Systems**: [Isolation criteria](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/sistemas-aislados-y-fuerzas-externas).\r
\r
## Final Synthesis\r
\r
Momentum conservation breaks whenever there is a net external impulse. Evaluating the magnitude of this impulse allows for deciding whether the conservation approximation is admissible or if a full dynamic analysis is necessary.\r
\r
\r
\r
\r
\r
`;export{e as default};
