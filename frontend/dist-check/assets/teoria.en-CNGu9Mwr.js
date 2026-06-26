const e=`\uFEFF# Isolated Systems\r
\r
## Conceptual context\r
\r
An **isolated system** is one on which the net external [[Jext]] force is zero. This does not mean there are no forces: particles inside the system can interact intensely with each other (internal forces), but the sum of all forces arriving from outside cancels out. In that situation, the total linear momentum of the system is conserved exactly.\r
\r
When does this happen in practice? Strictly speaking, never — gravity, air friction, etc. are always present. But in many scenarios the system is *approximately* isolated during the event of interest: a collision lasting milliseconds, an internal explosion, or a system in outer space where gravity is negligible. Treating the system as isolated is then an excellent approximation.\r
\r
## 🟢 Essential level\r
\r
The essential idea of an isolated system is a modeling decision: the goal is to determine whether the chosen set of bodies can be treated as if the environment does not significantly alter its overall motion during the time interval under study. When this is the case, the system’s behavior is governed by what happens internally rather than by external influences.\r
\r
This does not imply the absence of forces. Within the system, there may be strong contacts, tensions, or even explosive interactions; what matters is that these effects compensate when the system is considered as a whole. This is why the system boundary is just as important as the final calculation.\r
\r
Two bodies colliding on a table may not be isolated in the vertical direction and yet behave as an isolated system horizontally during the brief impact. The key question is always: in which component and over what interval does the environment cease to dominate?\r
\r
## 🔵 Formal level\r
\r
At the formal level, the isolated system is defined by evaluating the vector sum of all forces acting on each particle. According to Newton's Third Law, internal forces form action-reaction pairs that cancel out when summed over the entire system.\r
\r
This implies that the temporal rate of change of the total momentum depends exclusively on the net external force. If this external force is zero, the total momentum remains strictly constant.\r
\r
To build this balance, we first define the initial total momentum [[pTotI]] of the assembly:\r
\r
{{f:Pinicial}}\r
\r
And the final total momentum [[pTotF]] of the particles after the interaction:\r
\r
{{f:Pfinal}}\r
\r
When the isolation is perfect or the interaction is sufficiently brief, we establish conservation by equating both states:\r
\r
{{f:cons}}\r
\r
If we need to calculate the final momentum of one of the parts after an isolated event, we rearrange the main equation:\r
\r
{{f:cons_solve_pTotF}}\r
\r
In cases where isolation is not perfect, the impulse-momentum theorem reveals the total momentum variation [[DeltaPtot]] introduced by the environment:\r
\r
\r
When interactions between two bodies are analyzed in detail, the most commonly used expression is the complete equation:\r
\r
{{f:cons_completa}}\r
\r
**Component-wise isolation:** it may happen that the horizontal component of the external force is zero, but the vertical component is not (for example, due to uncompensated gravity). In that case, conservation applies independently only to the isolated axis.\r
\r
{{f:balance}}\r
\r
## 🔴 Structural level\r
\r
The concept of an isolated system depends critically on three modelling decisions:\r
\r
**1. System boundary definition**\r
- Including more bodies inside the system turns more forces into internal ones, bringing the system closer to isolation.\r
- Example: in a car-pedestrian collision, if the system is "car + pedestrian" the impact force is internal. If only the pedestrian is the system, the car's force is external.\r
\r
**2. Time scale**\r
- A system may be isolated during milliseconds (collision) but not over seconds (friction slows the pieces).\r
- This justifies the impulsive approximation: during a very short interval, the external impulse approaches zero.\r
\r
**3. Direction**\r
- Isolation may hold in one direction but not another. On a billiard table: isolated horizontally, not vertically.\r
\r
### Validity table\r
\r
| Scenario | Isolated? | Conserved component |\r
|----------|-----------|---------------------|\r
| Collision on ice (no friction) | Yes (horizontal) | Horizontal plane momentum |\r
| Collision on table with friction | Approx. (brief) | Horizontal momentum (during impact) |\r
| Internal explosion in space | Yes (3D) | Full momentum vector |\r
| Free fall + separation | No (gravity) | Horizontal momentum if no wind |\r
\r
## Deep physical interpretation\r
\r
Momentum conservation in an isolated system is a direct consequence of the homogeneity of space: the laws of physics do not change if you shift the entire system to another position. By Noether's theorem, that translational symmetry implies a conserved quantity, which turns out to be linear momentum.\r
\r
This means that conservation of momentum is not an independent empirical law: it is a geometric consequence of the space we live in. If space were not homogeneous (e.g. near a gravitational singularity), momentum would not be globally conserved.\r
\r
## Order of magnitude\r
\r
To decide whether a system is "sufficiently isolated", compare the order of magnitude of the external force with the average internal force during the event. If the ratio between the external force and the internal force is much less than one (say less than 0.01), the system is effectively isolated. In a billiard collision, the internal contact force is about a few thousand newtons, while external friction contributes roughly one newton, so its relative influence is on the order of a thousandth.\r
\r
## Personalized resolution method\r
\r
1. **Define boundaries**: which bodies belong to the system?\r
2. **List external forces**: gravity, normals, friction, external springs.\r
3. **Check whether they cancel**: does the net sum vanish? At least in the direction of interest?\r
4. **Assess the time scale**: is the event so fast that externals cannot appreciably change the momentum?\r
5. **Apply conservation** in the components where it holds, ensuring initial momentum equals final momentum.\r
\r
## Special cases and extended example\r
\r
- **Explosion from rest**: a grenade at rest explodes into fragments. The total momentum is zero before and after. Fragments fly in directions that make the vector sum of their momenta zero.\r
- **Gun recoil**: the pistol + bullet system is isolated if the shooter exerts no net force during the approximate millisecond of deflagration. The bullet goes forward; the pistol recoils with equal and opposite momentum.\r
- **Skaters pushing apart**: two skaters at rest on ice push each other. With different masses [[m1]] and [[m2]], their final velocities [[v1f]] and [[v2f]] will be inversely proportional to their masses so that the total momentum remains zero ([[m1]]·[[v1f]] + [[m2]]·[[v2f]] = 0).\r
\r
**Example**: A 0.5 kg firecracker at rest on ice explodes into fragments of [[m1]] = 0.3 kg and [[m2]] = 0.2 kg. The 0.3 kg fragment leaves at [[v1f]] = 4 m/s to the right. What is the final velocity [[v2f]] of the other fragment if they were initially at rest ([[v1i]] = 0, [[v2i]] = 0)?\r
\r
By applying conservation ([[pTotI]] = 0), the zero initial momentum must equal the sum of the final momenta of the fragments, yielding a final velocity [[v2f]] of 6 m/s in the opposite direction. It leaves at 6 m/s to the left.\r
\r
## Real student questions\r
\r
- **Does a perfectly isolated system exist?** Strictly, no. But the approximation is excellent when external forces are much weaker than internal ones, or act perpendicular to the direction of interest.\r
- **Does gravity prevent a system from being isolated?** It depends. If motion is horizontal and the normal balances gravity vertically, the system can be isolated in the horizontal direction.\r
- **What if I chose the wrong system boundaries?** Total momentum will not be conserved, but you can correct by using the impulse theorem to incorporate the effect of the external force.\r
\r
## Cross-cutting connections and study paths\r
\r
- **Prerequisite**: [Linear momentum](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/momento-lineal) and [Newton's Third Law](leaf:fisica-clasica/mecanica/dinamica/leyes-de-newton/tercera-ley).\r
- **Formalisation**: [Statement and conditions of conservation](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/enunciado-y-condiciones-de-aplicacion).\r
- **Application**: [Collisions](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-elasticas).\r
- **Deep connection**: Noether's theorem and translational symmetry.\r
\r
\r
\r
Correctly identifying an isolated system is the first step in any conservation analysis. The most common student error is treating internal forces as external, or vice versa. The practical rule is: draw the system boundary and classify each force according to whether it acts from inside or outside that boundary. When external forces are negligible during the interval of interest (as in brief collisions where friction acts for milliseconds compared to contact forces of thousands of newtons), the system behaves as isolated for practical purposes. This approximation is the foundation of all collision and explosion analysis in classical and particle physics.\r
\r
## Final synthesis\r
\r
A system is isolated when the net external force is zero, making its total momentum exactly conserved. In practice, the "isolation" decision is always an approximation governed by three factors: boundary definition, time scale, and direction. Mastering this decision is the key to correctly applying momentum conservation in any collision or explosion problem.\r
\r
\r
\r
`;export{e as default};
