# Momentum Balance [[P]] with Mass [[m]] Flow

## Conceptual context

Newton's second law in its school form is usually written as "force equals mass times acceleration." This reading works well as long as the system has a fixed boundary and the relevant mass neither enters nor leaves it. The problem arises when the body being tracked loses or gains matter: a rocket ejects gases, a conveyor belt receives sand, a fire hose shoots water, or a tank car leaks liquid. In all these cases, the mass crossing the boundary carries linear momentum, which is why the dynamics of the subsystem cannot be read using only the closed version of the law.

The leaf introduces precisely this correction. It doesn't change momentum conservation; it changes the way it is applied when the chosen system is open. The central question is no longer "what force is acting" in the abstract, but rather: what part of the change in the body's momentum comes from the external force [[Fext]] and what part comes from the flow of matter with relative velocity [[u]].

## 🟢 Essential level

At this level, the key idea is that matter has "memory" of its motion. When an object enters or leaves a system, it doesn't do so "empty"; it carries its own amount of motion with it. This means that an open system can speed up or slow down for two different reasons: because someone pushes it (external force) or because the mass entering or leaving "pushes" the system as it integrates or separates from it.

Imagine a skater carrying a heavy backpack who throws it backward. Even if no one pushes him from the outside, the skater will accelerate forward. Why? Because the backpack takes part of the momentum backward, and to compensate, the rest of the system (the skater) must gain momentum forward. The momentum balance is the tool that allows us to quantify this exchange. It's not that a magic force appears; it's that the total momentum must be distributed between the mass that stays and the mass that leaves.

> [!TIP]
> Think of the mass flow as a "momentum current." If mass enters a "fast" system "slowly," it tends to slow it down. If mass leaves "fast" toward the rear, it tends to propel the system forward.

## 🔵 Formal level

### Derivation by transport balance

The formal description does not arise from a mysterious reactive force, but from a "accounting balance" applied to an open system (control volume). In a time interval dt, the change in the linear momentum of the subsystem dP equals the impulse of the external forces plus the net momentum crossing the boundary. Dividing by the time interval, we obtain the operating equation for the balance:


Here, the term [[u]]·[[mdot]] represents the **momentum transport**. It is crucial to understand that [[u]] is the flow velocity **relative** to the system. The instantaneous acceleration [[dvdt]] of the system results from the competition between the mechanical action of the environment [[Fext]] and the matter transport [[mdot]]. The rate of change of momentum ([[dPdt]]) equals the vector sum of both terms.

More compactly, when the contribution of the flow to the system is isolated as thrust [[Ft]], the relation reduces to:


This expression directly links the thrust magnitude [[Ft]] with the flow rate [[mdot]] and the relative flow velocity [[u]].

### Differentiating between state and change

It is vital not to confuse the definition of momentum with the dynamical law. While [[P]] expresses how much momentum the body accumulates (proportional to [[m]] and [[v]]) at a given instant, the balance equation explains why that value is changing. In variable-mass systems, the resulting acceleration [[dvdt]] does not match what the closed-form second law predicts, since the mass [[m]] itself is a function of time. The leaf forces us to separate which part of [[dvdt]] is traditional "Newtonian" acceleration and which part is "propulsive" due to the flow [[mdot]].

{{f:thrust}}

{{f:tsiolkovsky}}

{{f:balance}}

## 🔴 Structural level

### The boundary as a methodological decision

The greatest subtlety of the structural level is recognizing that the balance depends entirely on where we draw the system boundary. If we include the falling sand and the conveyor belt in a single giant closed system, the term [[u]]·[[mdot]] disappears from the balance (it becomes an internal interaction) and only the external force remains. The leaf chooses the **open subsystem** boundary because it is the most useful for engineering: it allows us to calculate, for example, the thrust of an engine or the tension in a support without having to track every gas molecule or every grain of sand that leaves.

### Model validity limits

The one-dimensional momentum balance model presented here has clear limits that must be analyzed in complex problems:

1.  **Non-steady regime**: The model assumes that mass crosses the boundary smoothly. If the flow is turbulent or pulsating, the [[u]]·[[mdot]] term requires a more complex spatial and temporal integration (Reynolds equation).
2.  **Energy dissipation**: The momentum balance is robust, but it does not imply conservation of mechanical energy. In loading processes (like sand falling onto a belt), there is always an energy loss in the form of heat due to the inelastic collision of the mass upon integration, even if the momentum is perfectly described.
3.  **Relativistic limits**: If the exhaust velocity [[u]] or the system velocity [[v]] approaches an appreciable fraction of the speed of light, mass is no longer an additive constant and the balance must be reformulated using the four-momentum.
4.  **Flow symmetry**: It is assumed that the flow is collinear with the motion or that its exact angle is known. If the flow leaves in multiple directions (like an explosion), the balance must be treated strictly as a vector.

### Relation to Fluid Mechanics

This leaf is the basis of the **Navier-Stokes equations** in their integral form. What we call "mass flow" here is the convective term of momentum transport. Understanding this balance is fundamental for jumping from the mechanics of solid particles to the study of continuous media, where almost all systems are, by definition, open.

## Deep physical interpretation

The ultimate physical lesson is that momentum is not a static property of the "object," but a quantity that flows. When mass crosses the boundary, the system exchanges "motion capacity" with the vacuum or the environment. Therefore, the term [[u]]·[[mdot]] should not be memorized as a mathematical patch, but read as a current of physical reality. The balance explains why a rocket can accelerate in absolute vacuum: it doesn't need air to "push against"; it needs to eject momentum backward so that the rest of the system, by pure physical accounting, must gain momentum forward.

## Order of magnitude

*   **Industrial conveyor belt**: A flow of 10 kg/s of ore that must be accelerated to 2 m/s requires an additional force of only 20 N. It is a small load compared to friction.
*   **High-pressure hose**: A jet of 20 kg/s at 40 m/s generates a recoil force of 800 N (equivalent to the weight of an 80 kg person). This is why fire hoses require multiple operators or fixed supports.
*   **Aerospace propulsion**: A shuttle engine ejects gases at about 4000 m/s with a flow rate of 1000 kg/s, generating a thrust [[Ft]] of 4 million Newtons. Here, the momentum flow totally dominates over any other force. The thrust force is quantified by


In the absence of external forces, integrating the balance equation over the mass variation gives the total velocity gain [[Delta_v]] as a function of exhaust velocity [[ve]], initial mass [[m0]], and final mass [[mf]]:


## Personalized resolution method

1.  **Draw the boundary**: Identify what is "system" and what is "flow."
2.  **Choose axes and signs**: Define which direction is positive (crucial for the sign of [[u]]).
3.  **Identify the flow type**: Does mass enter, leave, or both? (determines the sign of [[mdot]]).
4.  **Apply the balance**: Use the equation to find the unknown (usually [[Fext]] or the resulting acceleration).
5.  **Verify energy**: Remember that even if the momentum balances, the system may be losing mechanical energy due to the flow process itself.
6.  **Common sense**: Check if the resulting "thrust force" points in the intuitive direction (opposite to ejection, in favor of suction).

## Special cases and extended example

**The Leaking Tank Car.** Imagine a tank car full of water moving at a constant speed with a hole in the bottom. The water falls vertically **relative to the car**. This means [[u]] = 0 in the horizontal direction of motion. According to the balance equation, when [[Fext]] and [[u]] are both zero, [[dPdt]] is also zero. The car maintains its constant speed despite losing mass. The total momentum decreases (because there is less mass moving), but the speed doesn't change because the mass leaving doesn't "steal" horizontal momentum from the system.

## Real student questions

*   **Why can't I just use the closed-form second law?** Because that formula assumes that "the mass you are accelerating" is always the same. In a rocket, the mass you are accelerating now is less than it was a second ago, and the acceleration [[dvdt]] grows as fuel is consumed.
*   **Is [[u]]·[[mdot]] a real force?** It is a force in the sense that it produces [[dvdt]] and is measured in Newtons, but it is a "transport force." There isn't a solid object pushing; it's the flow of matter that exerts the action, captured as thrust [[Ft]] in the thrust equation.
*   **What if mass enters and leaves at the same time?** You simply sum the transport terms: [[Fext]] + (u_in · mdot_in) - (u_out · mdot_out) = [[dPdt]].

## Cross-cutting connections and study paths

*   **Base**: [Linear momentum](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/momento-lineal).
*   **Direct application**: [Rocket equation](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/sistemas-de-masa-variable/ecuacion-del-cohete).
*   **Extension**: Introduction to Fluid Mechanics and Control Volumes.

## Final synthesis

The momentum balance with mass flow is the natural extension of Newtonian dynamics to systems that exchange matter with their surroundings. It teaches us that the change in a body's motion depends both on external pushes [[Fext]] and on the "momentum current" [[u]]·[[mdot]] that enters or leaves its boundary. Mastering this concept allows us to understand everything from the operation of a turbine to the physics of space propulsion, forcing us to be rigorous in defining our boundaries and in the accounting tracking of matter.







