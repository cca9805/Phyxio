const e=`# Lagrange's Equations

## Conceptual Context

Lagrange's equations reformulate dynamics in generalized coordinates [[qi]] instead of forcing every problem into Cartesian force components from the outset. This is not a cosmetic change. It allows constraints, symmetries, and system geometry to enter the description through one central function, the Lagrangian [[L]].

The leaf teaches a specific chain of reasoning. First construct [[L]] from [[T]] and [[V]]. Then compute conjugate momentum [[pi]] and the Euler-Lagrange operator [[Ri]]. Finally decide whether the residual must vanish or equal a generalized force [[Qi]].

## 🟢 Essential Level

An equation of motion tells how one coordinate evolves. In the Lagrangian formulation that coordinate need not be Cartesian position. It may be an angle, an arc coordinate, or any independent variable that captures the system configuration more naturally. Therefore [[qi]] is chosen for physical structure, not convention.

The essential idea is that dynamics emerges by comparing how an energetic function responds to configuration changes and to velocity changes. This comparison turns an energetic description into an evolution law, so energy stops being a passive inventory and becomes the route toward dynamics.

When every relevant action is already encoded energetically, the equation closes without an external contribution. When a non-potential action remains, it must be stated separately without overloading the first reading level. This distinction explains why Lagrange's equations address both conservative and driven systems.

## 🔵 Formal Level

The mechanical Lagrangian is:

{{f:lagrangiano_mecanico}}

It organizes the energetic information that will be differentiated. It is not the total energy of the system, but the function that feeds the variational formulation.

The derivative of [[L]] with respect to [[qdi]] defines:

{{f:momento_conjugado_lagrangiano}}

The operator summarizing the dynamical structure is:

{{f:operador_euler_lagrange}}

In this reading, [[DLv]] names the derivative of [[L]] with respect to [[qdi]], [[DtDLv]] represents its time variation, and [[DLq]] captures configurational sensitivity. Separating those three pieces prevents the operator from being read as one opaque block.

When there are no non-potential generalized forces, the equation of motion is:

{{f:ecuacion_lagrange_conservativa}}

When an external generalized action remains, use:

{{f:ecuacion_lagrange_forzada}}

The difference matters physically. The conservative form states that the relevant dynamics is fully encoded inside [[L]]. The forced form explicitly acknowledges an additional input [[Qi]] not absorbed into [[V]].

To verify that the formalism reproduces familiar dynamics, one may specialize it to a linear oscillator with mass [[m]], stiffness [[k]], and generalized force [[Qi]]:

{{f:aceleracion_oscilador_forzado}}

This formula links the abstract operator to an interpretable acceleration [[qddi]]. If [[Qi]] balances the restoring term, acceleration vanishes.

The complete formal chain also clarifies the hierarchy of the method. First one constructs [[L]], then identifies the derivatives that form the operator, and only at the end decides the physical closure of the equation. That order prevents the final equation from being used as a detached template.

## 🔴 Structural Level

The formalism requires regularity. Coordinates [[qi]] must describe the system differentiably, and the Lagrangian must support coherent derivatives with respect to [[qi]] and [[qdi]]. If the coordinate choice is singular, or if restrictions are represented poorly, the final equation may look compact while being physically defective.

Three levels must stay separate: defining [[L]], constructing [[Ri]], and closing the equation with or without [[Qi]]. Mixing those levels creates common mistakes, such as inserting an external force inside [[V]] and then adding it again as [[Qi]], or forcing a zero residual even though the statement describes an active external drive.

The method becomes structurally powerful when the chosen coordinate simplifies the physics. A simple pendulum is far clearer through an angular coordinate than through two Cartesian coordinates tied by a constraint. The formulation does not erase dynamics; it makes the relevant structure visible.

Model traceability matters as well. Two algebraically equivalent formulations are not always equally teachable or equally stable for limit analysis. A good choice of [[qi]] makes it immediately visible which part of the answer comes from inertia, which from stored energy, and which from external excitation.

## Deep Physical Interpretation

The Euler-Lagrange operator is not a symbolic recipe. It represents the competition between generalized inertial response and configurational sensitivity. The time-derivative term built from [[pi]] tracks the kinetic side of the motion, while the coordinate derivative tracks how configuration changes [[L]]. Their difference must close with [[Qi]].

This reading clarifies the role of conjugate momentum. [[pi]] is not always ordinary linear momentum. In angular coordinates it may resemble angular momentum; in curvilinear coordinates it acquires other forms. What remains invariant is its definition from [[L]].

## Order of Magnitude

In a laboratory oscillator, a 1 kg mass, a stiffness near 20 N/m, and displacements of a few tenths of a meter produce accelerations of order units of m/s2. If the calculation returns values one hundred times larger without a strong generalized force, either the model or the units deserve review.

Comparing [[Qi]] with the restoring term also guides interpretation. If [[Qi]] is small against the elastic contribution, the system tends back toward equilibrium. If [[Qi]] exceeds it, acceleration changes sign and the equilibrium shifts.

## Personalized Resolution Method

1. Choose [[qi]] and define [[qdi]] consistently.
2. Write [[T]] and [[V]] in those coordinates.
3. Build [[L]].
4. Compute [[pi]] and [[Ri]].
5. Decide whether the correct closure is conservative or forced.
6. Simplify the equation and isolate the target dynamical magnitude.
7. Validate sign, units, and recovery of a familiar limit case.

## Special Cases and Extended Example

If [[Qi]] is zero, the forced form recovers the conservative equation. If [[V]] does not depend on [[qi]], the coordinate becomes structurally special in later symmetry-based analysis. If [[L]] is written in unsuitable coordinates, every downstream derivation inherits the error.

Guide example: in a linear oscillator, [[T]] depends on velocity and [[V]] on position. The formalism returns a restoring term proportional to [[qi]]. Adding [[Qi]] shifts the acceleration relative to the free case. That transition captures the physical core of the leaf.

## Real Student Questions

- **Why use Lagrange if Newton already works?**  
  Because coordinates adapted to the system and constraints often produce a shorter and clearer route to the equation of motion.

- **Is [[pi]] always linear momentum?**  
  No. It is momentum conjugate to [[qi]], and its form depends on the chosen coordinate.

- **When should I use [[Qi]]?**  
  When a non-potential action remains outside [[V]].

- **What should I review if the resulting equation is absurd?**  
  Review [[T]], [[V]], the choice of [[qi]], and whether a force has been counted both through potential energy and through [[Qi]].

## Cross-cutting Connections and Study Paths

This leaf depends on kinetic and potential energy, and prepares the transition toward symmetries, conservation laws, and Hamiltonian formulation. It also connects with oscillators, pendulums, and angular-coordinate systems, where the Lagrangian method reduces algebraic clutter and improves physical readability.

A useful study route is to master construction of [[L]], then practice the conservative equation, and only afterward introduce [[Qi]] for driven systems. That progression prevents the formal equation from appearing as an abstract block without causal meaning.

## Final Synthesis

Mastering Lagrange's equations means turning an energetic description into a defensible equation of motion. The final objective is to build [[L]], interpret [[pi]] and [[Ri]], choose the correct closure with or without [[Qi]], and verify that the resulting dynamics truly expresses the system physics.

That mastery changes the learner's role. The student no longer only solves equations supplied by the statement, but learns to construct them from a coherent physical model and to justify why that construction represents the system under study.
`;export{e as default};
