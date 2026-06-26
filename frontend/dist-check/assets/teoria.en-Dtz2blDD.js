const e=`\uFEFF# Isolated Systems and External Forces\r
\r
## Conceptual Context\r
\r
This topic delves into the relationship between system definition, the classification of forces as external, and the consequences for momentum conservation. While the concept of an "isolated system" is introduced in fundamentals, here we explore how **redefining system boundaries** turns external forces into internal ones and vice versa, and how external forces —when they exist— modify the total momentum in a controlled manner.\r
\r
The internal/external distinction is not intrinsic to the force: it depends entirely on where you draw the system boundary.\r
\r
## 🟢 Essential Level\r
\r
A system is isolated when the important things happen between the bodies we have decided to study, without significant intervention from the outside. The difficulty is not in memorizing a definition, but in choosing the system boundary well.\r
\r
Imagine two skaters pushing each other on ice. If you study both together, the push is an internal interaction: one gains motion in one direction and the other in the opposite direction. If you study only one of them, the push from the other appears as an external action that changes their motion.\r
\r
The essential idea is that the same interaction can change roles depending on the chosen boundary. There are no "internal" or "external" forces on their own; they are such relative to the system you decide to analyze.\r
\r
> [!IMPORTANT]\r
> Before talking about conservation, decide which bodies form the system and which interactions remain outside.\r
\r
The more relevant bodies you include within the system, the fewer interventions remain outside. That's why defining the system is not a formality: it's the step that decides whether you can treat the set as isolated or not.\r
\r
## 🔵 Formal Level\r
\r
### Leaf Nomenclature\r
\r
Identifiers for this leaf: **pi** denotes the [[momento_lineal_individual]] of each particle with its [[masa_individual]] and [[velocidad_individual]]; the [[impulso_externo]] **J** is the cumulative action of the [[fuerza_externa_neta]] over a certain [[tiempo]]; **DeltaP** expresses the resulting [[variacion_momento_total]]; and the condition **cond** represents the isolated system state.\r
\r
### Definition of Individual Momentum\r
\r
The dynamic state of each body is described by its individual linear momentum, which is the product of its generic mass [[m]] and its generic velocity [[v]]. In a composite system, this momentum [[momento_lineal_individual]] combines the [[masa_individual]] and [[velocidad_individual]] of the body:\r
\r
{{f:P}}\r
\r
### Definition of Total Momentum\r
\r
In this section, we will analyze systems composed of multiple particles. The global dynamic state is defined by the system's total linear momentum:\r
\r
{{f:momento_total}}\r
\r
Which is the sum of the individual momenta of all parts:\r
\r
{{f:pi}}\r
\r
### Conservation Principle\r
\r
When the [[fuerza_externa_neta]] is zero, the initial total momentum equals the final one, regardless of how many internal interactions occur:\r
\r
{{f:cons_principle}}\r
\r
### Momentum Variation by External Forces\r
\r
The temporal variation of the system's total momentum is equal to the sum of the external forces acting on it. Internal forces cannot change the total momentum because their effects cancel out in pairs.\r
\r
{{f:DeltaP}}\r
\r
### Isolated System Condition\r
\r
If the sum of external forces is zero, the system is isolated and the total momentum is conserved:\r
\r
\r
### Direct Application Formulas\r
\r
For collisions where bodies stick together (perfectly inelastic), the [[impulso_externo]] internal to the interaction unifies velocities into a common value [[vf]]:\r
\r
\r
In the case of an explosion from rest, the recoil law guarantees that the individual momenta cancel each other out. The recoil velocity [[v1f]] of the first body is negative when the second body moves forward:\r
\r
{{f:recoil_law}}\r
\r
For any interaction between two masses in one dimension, the general balance expresses that [[Pfinal]] must equal the initial momentum:\r
\r
{{f:general_1d_balance}}\r
\r
### Effect of Expanding the System\r
\r
If an external body exerts a force on our system, we can choose to include that body within a new, broader boundary. By doing so, that force changes from external to internal, eliminating the source of momentum variation for the new global system.\r
\r
**Price**: now we must track the state of more bodies, which can increase the problem's complexity.\r
\r
### Typical External Forces and Their Effect\r
\r
| External Force | Direction | When is it negligible? |\r
|----------------|-----------|------------------------|\r
| Gravity | Vertical | If exactly canceled by the normal force |\r
| Normal force | Vertical | On horizontal surfaces without jumps |\r
| Kinetic friction | Opposite to motion | In extremely brief impacts |\r
| String tension | Along the thread | If the source of tension is outside the system |\r
\r
### Isolation Conditions by Components\r
\r
A system can be isolated in one direction and not in another. This allows for solving the conserved component (e.g., the horizontal axis) without needing to know the forces acting in other directions.\r
\r
{{f:inelastic_collision}}\r
\r
{{f:cond}}\r
\r
## 🔴 Structural Level\r
\r
### Relativity of Classification\r
\r
The internal/external classification is purely conventional and depends on the observer defining the boundaries. There are no "inherently internal forces." Every internal force can become external if the system is redefined. Momentum conservation is, therefore, an emergent property of the boundary choice.\r
\r
### Hierarchy of Nested Systems\r
\r
Nested systems can be defined where each larger system has fewer external forces. In the limit of including the entire universe, there would be no external forces and total momentum would be absolutely conserved.\r
\r
### Relationship with Thermodynamics\r
\r
The system/environment distinction in thermodynamics is analogous. Just as heat and work are energy transfers across the boundary, external impulse is a momentum transfer. Redefining the boundary changes the accounting of both quantities in the same way.\r
\r
### Consequences for Modeling\r
\r
The choice of system determines what information we need and how many equations we have available. A large system offers more conservation laws but introduces more internal variables. The physicist's skill lies in finding the optimal balance to solve the problem with the available data.\r
\r
## Deep Physical Interpretation\r
\r
External forces are the system's interface with the rest of the universe; they are the channels through which momentum can flow in or out. When we close those channels (isolated system), momentum becomes "trapped" and can only be redistributed internally.\r
\r
It's like a water tank with external pipes: if the valves are closed, the total volume of water is constant even if it's agitated internally. If the valves are opened, the level rises or falls according to the external flow.\r
\r
## Order of Magnitude\r
\r
A satellite in orbit suffers a tiny atmospheric drag that, over months, makes its system not isolated. However, for a maneuver of a few seconds, the system can be considered isolated with a negligible error. Time scale is key to validating the model.\r
\r
## Personalized Resolution Method\r
\r
1. **Define the system**: list which bodies we explicitly include.\r
2. **List all forces** on each body.\r
3. **Classify**: are they internal or external to our boundary?\r
4. **Analyze external ones**: sum them to get the net balance.\r
5. **Evaluate isolation**: is the sum zero in any component?\r
6. **Apply conservation** only in directions where there are no external forces.\r
\r
## Special Cases and Extended Example\r
\r
**Collision on an inclined plane.** External forces have components both parallel and perpendicular to the plane. If the collision is brief, the impulse of gravity parallel to the plane is very small, allowing for conservation to be used in that direction during the impact instant.\r
\r
## Real Student Questions\r
\r
- **Do weight and normal force always cancel?** Only on horizontal surfaces. On a ramp, weight has a component that accelerates the system if there is no friction.\r
- **What about static friction?** It's an external force. If we include the surface in the system, friction becomes internal and momentum is conserved including the mass of the Earth.\r
\r
## Cross-cutting Connections and Study Paths\r
\r
- **Statement and Conditions**: [Application requirements](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/enunciado-y-condiciones-de-aplicacion).\r
- **Conservation Rupture**: [When these hypotheses fail](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/impulso-externo-y-ruptura-de-la-conservacion).\r
\r
## Final Synthesis\r
\r
The distinction between internal and external forces depends on the chosen boundaries. Expanding the system turns external forces into internal ones and strengthens conservation, but at the cost of adding more variables to the dynamic analysis.\r
\r
\r
\r
\r
\r
`;export{e as default};
