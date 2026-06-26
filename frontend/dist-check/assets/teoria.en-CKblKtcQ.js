const e=`# D'Alembert's principle and virtual work

## Conceptual context

D'Alembert's principle is the bridge between Newtonian dynamics and analytical mechanics with constraints. It starts from the idea that a dynamical equation can be written as an equilibrium if the inertial term is subtracted. That equilibrium is not tested with any displacement, but with virtual displacements compatible with the system constraints in practice.

This leaf explains why many constraint forces do not appear in the final equations. If an ideal reaction performs no virtual work on admissible displacements, it does not contribute to the balance that determines motion. This clarifies the transition from Cartesian forces to generalized coordinates.

## 🟢 Essential level

The essential idea is that not every existing force is useful for describing the evolution. For a particle on an ideal guide, the normal force exists, but the permitted displacement is tangent to the guide. Since the normal is perpendicular to that virtual displacement, its virtual work does not enter the effective equation.

D'Alembert reorganizes Newton's law by subtracting inertia from applied forces. The system behaves as if it were in dynamic equilibrium against every allowed virtual displacement. The word virtual is crucial: it does not describe real motion over time, but an instantaneous compatibility test.

The student must learn to ask which displacements are admissible before calculating. If a virtual displacement violates a constraint, the obtained work has no physical meaning for the real system. If it respects the constraint, it can eliminate ideal reactions and preserve only the relevant dynamical content.

## 🔵 Formal level

D'Alembert's effective force is defined as applied force minus inertial term:

{{f:fuerza_efectiva_dalembert}}

The principle imposes that total dynamic virtual work vanishes:

{{f:trabajo_virtual_dinamico}}

When compatible displacements are parameterized through a generalized coordinate [[qi]], the generalized force appears:

{{f:fuerza_generalizada_desde_trabajo_virtual}}

The Lagrange-D'Alembert form connects that generalized force with the Lagrangian residual:

{{f:lagrange_dalembert}}

The formal content is that [[dr]] is not arbitrary in the full space, but only in the subspace allowed by constraints. The value [[Wv]] summarizes the virtual dynamic equilibrium test. If ideal reactions do no virtual work, they disappear from the balance although they still physically exist.

The quantity [[Qj]] is not necessarily a force in newtons. If [[qi]] is an angle, [[Qj]] has torque dimension. If [[qi]] is a length, it may have force dimension. This dependence is a reason not to copy Cartesian components without checking the coordinate.

This is also the point where the teacher should insist on dimensional reading. The same physical push can generate different generalized contributions depending on the coordinate chosen, because virtual work, not the Cartesian component alone, defines the coefficient.

## 🔴 Structural level

Structurally, D'Alembert shows that analytical mechanics does not ignore constraint forces: it classifies them. Ideal reactions are orthogonal to admissible variations and therefore do not appear in virtual work. Active forces are projected onto the coordinates and produce generalized forces.

The principle also separates dynamics from geometry. Geometry decides which virtual displacements are possible. Dynamics decides which effective forces balance those displacements. When both parts are combined, one obtains an equation in variables adapted to the system.

The limits are clear. If the constraint has friction, if the reaction performs virtual work, if the restriction depends on velocities in a non-holonomic way, or if impacts occur, the simple elimination of reactions may fail. In such cases the exchange of energy or impulse must be modeled.

This structural layer prevents D'Alembert's principle from being used as an algebraic trick. First identify the space of compatible variations; then ask which forces project onto that space. If the order is reversed, one may cancel forces that do perform virtual work or retain reactions already absorbed by the coordinate.

## Deep physical interpretation

The deeper interpretation is that a force may be real and still not be needed to write the equation of motion in the correct coordinates. The normal force of an ideal guide, the tension of an ideal inextensible string, or certain internal reactions may disappear from the virtual balance because they do no work on permitted displacements.

For a teacher, this leaf corrects a common intuition: removing a force from the equation does not deny its existence. It means that its effect is incorporated into the geometry of the constraint and contributes no virtual power in the directions the system can explore.

## Order of magnitude

If an applied force [[F]] is 10 N and the virtual displacement [[dr]] has scale 1 mm, the associated virtual work is of order 0.01 J. If the inertial term [[m]][[a]] has comparable magnitude, the effective difference [[Feff]] may strongly reduce that contribution.

The scale of [[Qj]] depends on the coordinate. For an angular coordinate, a 10 N force applied with a 0.2 m lever arm gives a generalized contribution of order 2 N m. Calling it simply a force would lose dimensional information.

## Personalized resolution method

First identify constraints and compatible virtual displacements. Second separate active forces from ideal reactions. Third form the effective force [[Feff]] by subtracting the inertial term. Fourth compute the virtual work [[Wv]] only with admissible displacements.

Fifth extract generalized forces [[Qj]] as coefficients of virtual work. Sixth connect them with the Lagrangian residual [[Ri]]. Seventh check whether eliminated reactions were truly ideal; if not, the model must be extended.

## Special cases and extended example

For a bead sliding on a frictionless hoop, the normal keeps the bead on the guide but contributes no tangential virtual work. The angular coordinate absorbs the constraint and the equation is written without first solving for the normal. An active force, such as weight, is projected onto the angular displacement.

For an ideal Atwood machine, internal tension may disappear when a coordinate compatible with the inextensible string is chosen. If the string has mass, elasticity, or pulley friction, that disappearance is no longer automatic. The principle forces one to inspect the ideal character of the constraint.

## Real student questions

A common question is whether the constraint force does not exist when it does not appear in the equation. It does exist, but the method does not need it to obtain evolution in compatible coordinates. It may be computed later to study contact, maximum tension, or failure.

Another question is whether a virtual displacement is a very small real displacement. Not exactly. It is an instantaneous compatible variation used to test work; it does not imply that the system actually follows that path over a time interval.

## Cross-cutting connections and study paths

This leaf should be studied after constraints and degrees of freedom, and before Lagrange's equations with generalized forces. It connects with generalized coordinates because [[qi]] parameterizes admissible displacements. It connects with the variational principle because both use compatible variations, although here the focus is dynamic virtual work.

Afterwards, the student can study constrained problems, forced systems, and Hamiltonian formulations. The central idea remains the same: choose variables that respect geometry before writing equations.

## Final synthesis

D'Alembert's principle states that the virtual work of effective forces vanishes for displacements compatible with ideal constraints. Its didactic goal is to explain why ideal reactions can disappear from equations without ceasing to exist physically.
`;export{e as default};
