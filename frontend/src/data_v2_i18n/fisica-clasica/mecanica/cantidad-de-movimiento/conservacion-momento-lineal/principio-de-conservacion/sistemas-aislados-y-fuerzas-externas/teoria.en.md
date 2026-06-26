# Isolated Systems and External Forces

## Conceptual Context

This topic delves into the relationship between system definition, the classification of forces as external, and the consequences for momentum conservation. While the concept of an "isolated system" is introduced in fundamentals, here we explore how **redefining system boundaries** turns external forces into internal ones and vice versa, and how external forces —when they exist— modify the total momentum in a controlled manner.

The internal/external distinction is not intrinsic to the force: it depends entirely on where you draw the system boundary.

## 🟢 Essential Level

A system is isolated when the important things happen between the bodies we have decided to study, without significant intervention from the outside. The difficulty is not in memorizing a definition, but in choosing the system boundary well.

Imagine two skaters pushing each other on ice. If you study both together, the push is an internal interaction: one gains motion in one direction and the other in the opposite direction. If you study only one of them, the push from the other appears as an external action that changes their motion.

The essential idea is that the same interaction can change roles depending on the chosen boundary. There are no "internal" or "external" forces on their own; they are such relative to the system you decide to analyze.

> [!IMPORTANT]
> Before talking about conservation, decide which bodies form the system and which interactions remain outside.

The more relevant bodies you include within the system, the fewer interventions remain outside. That's why defining the system is not a formality: it's the step that decides whether you can treat the set as isolated or not.

## 🔵 Formal Level

### Leaf Nomenclature

Identifiers for this leaf: **pi** denotes the [[momento_lineal_individual]] of each particle with its [[masa_individual]] and [[velocidad_individual]]; the [[impulso_externo]] **J** is the cumulative action of the [[fuerza_externa_neta]] over a certain [[tiempo]]; **DeltaP** expresses the resulting [[variacion_momento_total]]; and the condition **cond** represents the isolated system state.

### Definition of Individual Momentum

The dynamic state of each body is described by its individual linear momentum, which is the product of its generic mass [[m]] and its generic velocity [[v]]. In a composite system, this momentum [[momento_lineal_individual]] combines the [[masa_individual]] and [[velocidad_individual]] of the body:

{{f:P}}

### Definition of Total Momentum

In this section, we will analyze systems composed of multiple particles. The global dynamic state is defined by the system's total linear momentum:

{{f:momento_total}}

Which is the sum of the individual momenta of all parts:

{{f:pi}}

### Conservation Principle

When the [[fuerza_externa_neta]] is zero, the initial total momentum equals the final one, regardless of how many internal interactions occur:

{{f:cons_principle}}

### Momentum Variation by External Forces

The temporal variation of the system's total momentum is equal to the sum of the external forces acting on it. Internal forces cannot change the total momentum because their effects cancel out in pairs.

{{f:DeltaP}}

### Isolated System Condition

If the sum of external forces is zero, the system is isolated and the total momentum is conserved:


### Direct Application Formulas

For collisions where bodies stick together (perfectly inelastic), the [[impulso_externo]] internal to the interaction unifies velocities into a common value [[vf]]:


In the case of an explosion from rest, the recoil law guarantees that the individual momenta cancel each other out. The recoil velocity [[v1f]] of the first body is negative when the second body moves forward:

{{f:recoil_law}}

For any interaction between two masses in one dimension, the general balance expresses that [[Pfinal]] must equal the initial momentum:

{{f:general_1d_balance}}

### Effect of Expanding the System

If an external body exerts a force on our system, we can choose to include that body within a new, broader boundary. By doing so, that force changes from external to internal, eliminating the source of momentum variation for the new global system.

**Price**: now we must track the state of more bodies, which can increase the problem's complexity.

### Typical External Forces and Their Effect

| External Force | Direction | When is it negligible? |
|----------------|-----------|------------------------|
| Gravity | Vertical | If exactly canceled by the normal force |
| Normal force | Vertical | On horizontal surfaces without jumps |
| Kinetic friction | Opposite to motion | In extremely brief impacts |
| String tension | Along the thread | If the source of tension is outside the system |

### Isolation Conditions by Components

A system can be isolated in one direction and not in another. This allows for solving the conserved component (e.g., the horizontal axis) without needing to know the forces acting in other directions.

{{f:inelastic_collision}}

{{f:cond}}

## 🔴 Structural Level

### Relativity of Classification

The internal/external classification is purely conventional and depends on the observer defining the boundaries. There are no "inherently internal forces." Every internal force can become external if the system is redefined. Momentum conservation is, therefore, an emergent property of the boundary choice.

### Hierarchy of Nested Systems

Nested systems can be defined where each larger system has fewer external forces. In the limit of including the entire universe, there would be no external forces and total momentum would be absolutely conserved.

### Relationship with Thermodynamics

The system/environment distinction in thermodynamics is analogous. Just as heat and work are energy transfers across the boundary, external impulse is a momentum transfer. Redefining the boundary changes the accounting of both quantities in the same way.

### Consequences for Modeling

The choice of system determines what information we need and how many equations we have available. A large system offers more conservation laws but introduces more internal variables. The physicist's skill lies in finding the optimal balance to solve the problem with the available data.

## Deep Physical Interpretation

External forces are the system's interface with the rest of the universe; they are the channels through which momentum can flow in or out. When we close those channels (isolated system), momentum becomes "trapped" and can only be redistributed internally.

It's like a water tank with external pipes: if the valves are closed, the total volume of water is constant even if it's agitated internally. If the valves are opened, the level rises or falls according to the external flow.

## Order of Magnitude

A satellite in orbit suffers a tiny atmospheric drag that, over months, makes its system not isolated. However, for a maneuver of a few seconds, the system can be considered isolated with a negligible error. Time scale is key to validating the model.

## Personalized Resolution Method

1. **Define the system**: list which bodies we explicitly include.
2. **List all forces** on each body.
3. **Classify**: are they internal or external to our boundary?
4. **Analyze external ones**: sum them to get the net balance.
5. **Evaluate isolation**: is the sum zero in any component?
6. **Apply conservation** only in directions where there are no external forces.

## Special Cases and Extended Example

**Collision on an inclined plane.** External forces have components both parallel and perpendicular to the plane. If the collision is brief, the impulse of gravity parallel to the plane is very small, allowing for conservation to be used in that direction during the impact instant.

## Real Student Questions

- **Do weight and normal force always cancel?** Only on horizontal surfaces. On a ramp, weight has a component that accelerates the system if there is no friction.
- **What about static friction?** It's an external force. If we include the surface in the system, friction becomes internal and momentum is conserved including the mass of the Earth.

## Cross-cutting Connections and Study Paths

- **Statement and Conditions**: [Application requirements](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/enunciado-y-condiciones-de-aplicacion).
- **Conservation Rupture**: [When these hypotheses fail](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/impulso-externo-y-ruptura-de-la-conservacion).

## Final Synthesis

The distinction between internal and external forces depends on the chosen boundaries. Expanding the system turns external forces into internal ones and strengthens conservation, but at the cost of adding more variables to the dynamic analysis.





